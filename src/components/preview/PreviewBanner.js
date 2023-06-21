import Link from "next/link";

export function PreviewBanner({ loading }) {
  return (
    <div className="bg-blue-950 px-4 py-2 text-center text-white text-xs">
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
