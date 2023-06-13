export function PreviewBanner({ loading }) {
  return (
    <div className="bg-black p-3 text-center text-white">
      {loading ? "Loading..." : "Previewing draft content."}{" "}
      <a
        className="underline transition hover:opacity-50"
        href="/api/exit-preview"
      >
        Exit preview mode
      </a>
    </div>
  );
}
