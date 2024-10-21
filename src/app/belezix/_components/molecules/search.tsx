"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import NextForm from "next/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/ui/molecules/shadcn/form";
import { Input } from "@/shared/ui/atoms/shadcn/input";
import { Button } from "@/shared/ui/atoms/shadcn/button";
import { handleSearch } from "../../_actions/handle-search";

const formSchema = z.object({
  title: z.string().trim().min(1, {
    message: "Digite algo para buscar",
  }),
});

const Search = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });
  const router = useRouter();

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    router.push(`/belezix/owners?title=${data.title}`);
  };

  return (
    <Form {...form}>
      <NextForm
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex gap-2"
        action={handleSearch}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Faça sua busca..."
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          <SearchIcon />
        </Button>
      </NextForm>
    </Form>
  );
};

export default Search;
