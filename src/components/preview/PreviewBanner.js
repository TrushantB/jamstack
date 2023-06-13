import Link from "next/link";

export function PreviewBanner({ loading }) {
  return (
    <div className="bg-black p-3 text-center text-white">
      {loading ? "Loading..." : "Previewing draft content."}{" "}
      <Link
        className="underline transition hover:opacity-50"
        href="/api/exit-preview"
      >
        Exit preview mode
      </Link>
    </div>
  );
}
