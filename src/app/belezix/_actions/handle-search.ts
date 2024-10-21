"use server";
import { redirect } from "next/navigation";

export async function handleSearch(formData: FormData) {
  redirect(`/belezix/owners?q=${formData.get("title")}`);
}
