// AssetSlot marks a spot where real photography should be dropped in.
// Swap it for a Next.js <Image src="/images/..." alt="..." /> once the
// asset lands in /public/images. Kept visually intentional (not a broken
// gray box) so the layout previews correctly before assets arrive.
export default function AssetSlot({
  label,
  aspect = "aspect-[4/5]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl2 border border-line bg-paper2 ${aspect} ${className}`}
    >
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, #15130F 0, #15130F 1px, transparent 1px, transparent 14px)",
      }} />
      <span className="relative px-6 text-center text-xs font-extrabold uppercase tracking-[0.14em] text-stone">
        {label}
      </span>
    </div>
  );
}
