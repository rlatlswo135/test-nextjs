// app/contact/page.tsx
import { submitComment } from "./actions";

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Leave a Comment</h1>
      <form action={submitComment} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-medium mb-1">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            required
            rows={4}
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
