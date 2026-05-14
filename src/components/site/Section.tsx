import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          <span className="h-px w-8 bg-primary" /> {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl font-light leading-tight text-balance sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-foreground/65 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
