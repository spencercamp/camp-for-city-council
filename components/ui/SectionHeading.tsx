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
