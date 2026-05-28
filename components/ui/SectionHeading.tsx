import { cn } from "@/lib/utils";

export function SectionHeading({
  children,
  eyebrow,
  subtitle,
  light,
  centered,
  className,
}: {
  children: React.ReactNode;
  eyebrow?: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-14 lg:mb-20", centered && "text-center", className)}>
      {eyebrow && (
        <div className={cn("mb-5 flex items-center gap-2", centered && "justify-center")}>
          <span className="h-px w-8 bg-red" aria-hidden />
          <span
            className={cn(
              "text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em]",
              light ? "text-red-light" : "text-red"
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[1.05]",
          light ? "text-white" : "text-blue-dark"
        )}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 max-w-2xl font-serif text-lg sm:text-xl leading-[1.6]",
            light ? "text-white/65" : "text-gray-600",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
