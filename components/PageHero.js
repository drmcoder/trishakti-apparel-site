// Compact hero for inner pages.
export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="border-b border-line bg-mist/70">
      <div className="container-x py-16 sm:py-24">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-medium tracking-[-0.02em] text-ink sm:text-6xl">
          {title}
        </h1>
        {children && <div className="mt-6 max-w-2xl lead measure">{children}</div>}
      </div>
    </section>
  );
}
