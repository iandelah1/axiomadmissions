import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const styles: Record<Variant, string> = {
  primary: "bg-mit-red text-white hover:bg-[#5b0010] border border-mit-red shadow-premium",
  secondary: "border border-mit-silver/40 bg-white text-slate-800 hover:border-mit-red/40 hover:text-mit-red",
  ghost: "text-mit-red hover:bg-mit-blush",
};

export function Button({ href, children, variant = "primary", className = "", type = "button", onClick }: ButtonProps) {
  const base = `inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
