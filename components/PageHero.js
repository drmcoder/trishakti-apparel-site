// Compact hero for inner pages.
export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="border-b border-black/[0.06] bg-mist/60">
      <div className="container-x py-14 sm:py-20">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {children && <div className="mt-5 max-w-2xl lead">{children}</div>}
      </div>
    </section>
  );
}
