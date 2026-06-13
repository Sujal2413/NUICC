"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";

const NAV = [
  { name: "About", href: "#about" },
  { name: "Leaders", href: "#leaders" },
  { name: "Services", href: "#services" },
  { name: "Membership", href: "/membership" },
  { name: "Contact", href: "#contact" },
];

export function NuiccNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  // Transparent at the top; blurred panel + border after 50px.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2.5">
          <Image
            src="/assets/img/home/nicuu-page.png"
            alt="National U.S.-India Chamber of Commerce Logo"
            width={36}
            height={36}
            className="rounded-md bg-white object-contain p-0.5"
          />
          <span
            className={`hidden text-sm font-bold leading-tight tracking-tight transition-colors sm:block ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            National U.S.–India
            <br />
            Chamber of Commerce
          </span>
        </a>

        {/* Gliding menu */}
        <div
          className="relative hidden items-center gap-8 md:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {NAV.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHovered(i)}
              className={`relative z-10 py-2 text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "font-semibold text-white hover:text-[#E8D9A8]"
              }`}
            >
              {item.name}
              {hovered === i && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-[hsl(var(--ring))]"
                  style={{ backgroundColor: "hsl(38 60% 45%)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA + mobile menu */}
        <div className="flex items-center gap-2">
          <Magnetic strength={0.4} className="hidden md:block">
            <Button asChild className="rounded-full bg-[#D4AF37] font-bold text-[#0B132B] hover:bg-[#e3c252]">
              <a href="/membership">Become a Member</a>
            </Button>
          </Magnetic>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden ${scrolled ? "" : "text-white hover:bg-white/10 hover:text-white"}`}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[260px]">
              <nav className="mt-8 flex flex-col gap-5">
                {NAV.map((n) => (
                  <a
                    key={n.name}
                    href={n.href}
                    className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {n.name}
                  </a>
                ))}
                <Button asChild className="mt-2 rounded-full bg-[#D4AF37] font-bold text-[#0B132B] hover:bg-[#e3c252]">
                  <a href="/membership">Become a Member</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
