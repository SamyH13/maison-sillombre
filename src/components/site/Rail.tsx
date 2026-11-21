import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** Rangée défilante avec flèches visibles pour la souris ; au doigt, on fait glisser. */
export function Rail({ label, children }: { label: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { el.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  const go = (dir: 1 | -1) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: "smooth" });
  const btn = "grid size-11 place-items-center rounded-full border border-ink-soft/40 transition-colors hover:border-foreground hover:bg-card/60 disabled:opacity-35 disabled:hover:border-ink-soft/40 disabled:hover:bg-transparent";
  return (
    <div>
      <div className="hidden md:flex justify-end gap-2 -mt-2 mb-4">
        <button type="button" className={btn} onClick={() => go(-1)} disabled={edge.start} aria-label="Parfums précédents"><ChevronLeft className="size-5" strokeWidth={1.5} /></button>
        <button type="button" className={btn} onClick={() => go(1)} disabled={edge.end} aria-label="Parfums suivants"><ChevronRight className="size-5" strokeWidth={1.5} /></button>
      </div>
      <div ref={ref} className="-mx-4 px-4 md:mx-0 md:px-0 flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar" role="region" tabIndex={0} aria-label={label}>
        {children}
      </div>
    </div>
  );
}
