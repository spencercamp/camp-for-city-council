import { cn } from "@/lib/utils";

export function SectionHeading({
  children,
  subtitle,
  light,
  className,
}: {
  children: React.ReactNode;
  subtitle?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-navy"
        )}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-lg",
            light ? "text-white/80" : "text-gray-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
