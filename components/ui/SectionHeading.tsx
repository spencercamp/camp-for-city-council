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
    <div className={cn("mb-16 lg:mb-20 text-center", className)}>
      <h2
        className={cn(
          "text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
          light ? "text-white" : "text-navy"
        )}
      >
        {children}
      </h2>
      <div
        className={cn(
          "mx-auto mt-4 h-1 w-16 rounded-full",
          light ? "bg-amber" : "bg-red"
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-lg lg:text-xl",
            light ? "text-white/80" : "text-gray-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
