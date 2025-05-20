import * as React from "react";

type ListProps = React.HTMLAttributes<HTMLUListElement> & {
  children: React.ReactNode;
};

export function List({ children, className = '', ...props }: ListProps) {
  return <ul className={`list-disc pl-5 space-y-2 ${className}`} {...props}>{children}</ul>;
}

type ListItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  children: React.ReactNode;
};

export function ListItem({ children, className = '', ...props }: ListItemProps) {
  return <li className={className} {...props}>{children}</li>;
} 