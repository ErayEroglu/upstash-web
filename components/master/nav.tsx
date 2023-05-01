"use client";

import { HTMLAttributes, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { allJobs } from "contentlayer/generated";
import Button from "@/components/button";
import { usePathname } from "next/navigation";
import cx from "@/utils/cx";

export const NavItems = [
  {
    name: "Pricing",
    href: "/#pricing",
  },
  // {
  //   name: "Open Source",
  //   href: "/open-source",
  // },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Careers",
    href: "/careers",
    children: (
      <span
        className="rounded-full bg-emerald-300/20
              px-1.5 py-0.5 font-mono text-sm text-emerald-500"
      >
        {allJobs.filter((o) => !o.draft).length}
      </span>
    ),
  },
];

export default function Nav({}: HTMLAttributes<HTMLDivElement> & {}) {
  return (
    <nav className="col-span-2 flex items-center justify-center gap-2">
      {NavItems.map((item) => {
        return (
          <NavLink key={item.href} href={item.href}>
            {item.name}
            {item.children}
          </NavLink>
        );
      })}
      <Button
        href="https://docs.upstash.com"
        className="px-5 py-2 text-zinc-400"
      >
        Docs
      </Button>
    </nav>
  );
}

function NavLink({
  href,
  className,
  children,
  ...props
}: LinkProps & { className?: string; children: ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cx(
        "inline-flex gap-1 rounded-full px-3 py-2 text-zinc-400 transition",
        "hover:bg-white/5",
        isActive && "!bg-white/10 !text-zinc-50",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}