import * as React from "react";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

export function Section({ children, className = '', ...props }: SectionProps) {
  return <section className={`space-y-8 ${className}`} {...props}>{children}</section>;
} 