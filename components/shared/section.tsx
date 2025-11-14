import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  id?: string;
  title: string;
  children: ReactNode;
}

export function Section({
  title,
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section className={cn("space-y-6", className)} {...props}>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
