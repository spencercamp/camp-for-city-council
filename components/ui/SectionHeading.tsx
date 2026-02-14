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
    <div className={cn("mb-16 lg:mb-20", className)}>
      <h2
        className={cn(
          "text-4xl font-bold tracking-tight sm:text-5xl lowercase",
          light ? "text-white" : "text-blue"
        )}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg",
            light ? "text-white/60" : "text-gray-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
