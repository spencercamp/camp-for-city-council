import { cn } from "@/lib/utils";

export function SectionHeading({
  children,
  subtitle,
  light,
  centered,
  className,
}: {
  children: React.ReactNode;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-16 lg:mb-20", centered && "text-center", className)}>
      <h2
        className={cn(
          "text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter leading-[0.9]",
          light ? "text-white" : "text-blue"
        )}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-6 max-w-2xl font-serif text-xl sm:text-2xl leading-relaxed",
            light ? "text-white/60" : "text-gray-600",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
