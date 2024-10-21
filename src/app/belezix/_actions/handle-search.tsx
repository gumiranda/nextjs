"use server";

import { redirect } from "next/navigation";

export default async function handleSearch(formData: FormData) {
  console.log({ formData });
  const title = formData.get("title") as string;
  console.log({ title });
  redirect(`/belezix/owners?title=${title}`);
}
