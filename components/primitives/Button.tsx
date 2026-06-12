import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  children: React.ReactNode;
  className?: string;
};

/** Token-styled CTA. Primary = gold on navy text (the "medal/seal" intent). */
export function Button({ href, variant = "primary", external = false, children, className = "" }: ButtonProps) {
  const cls = `btn-${variant} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
