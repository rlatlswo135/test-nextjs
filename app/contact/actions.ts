// app/contact/actions.ts
"use server";

export async function submitComment(formData: FormData) {
  const name = formData.get("name") as string;
  const comment = formData.get("comment") as string;

  // This runs on the server. You can call your database here.
  // For this example we just log it.
  console.log(`New comment from ${name}: ${comment}`);

  // In a real app you would save to a database and revalidate cache
}
