export default function AnnouncementBar() {
  return (
    <div className="w-full bg-ink py-2 text-paper">
      <div className="container-content flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-[11px] font-extrabold uppercase tracking-[0.12em] sm:text-xs">
        <span>Free Home Delivery</span>
        <span className="text-gold">•</span>
        <span>Cash on Delivery Available</span>
        <span className="text-gold hidden sm:inline">•</span>
        <span className="hidden sm:inline">All of Pakistan</span>
      </div>
    </div>
  );
}
