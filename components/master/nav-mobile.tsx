"use client";

import { HTMLAttributes, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import Button from "@/components/button";
import { usePathname } from "next/navigation";
import cx from "@/utils/cx";
import { NavItems } from "@/components/master/nav";

export default function NavMobile({
  hidden,
}: HTMLAttributes<HTMLDivElement> & {}) {
  return (
    <nav
      className={cx(
        "absolute inset-x-6 top-full z-10 -mt-4 flex-col p-6 pb-10",
        "rounded-lg bg-zinc-950 shadow-2xl",
        hidden ? "flex" : "hidden"
      )}
    >
      {/* login */}
      <Button
        type="button"
        hideIcon
        href="https://console.upstash.com"
        className="-mx-5 bg-emerald-300 py-3 font-display text-lg font-medium text-zinc-950"
      >
        Login
      </Button>

      {/* items */}
      <div className="mt-2 flex flex-col divide-y divide-white/5">
        {NavItems.map((item) => {
          return (
            <NavLink key={item.href} href={item.href}>
              {item.name}
              {item.children}
            </NavLink>
          );
        })}
        {/* doc */}
        <div>
          <Button
            type="button"
            href="https://docs.upstash.com"
            className="bg-transparent px-0 py-3 font-display text-lg font-medium hover:bg-white/5 hover:text-zinc-50"
          >
            Docs
          </Button>
        </div>
      </div>
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
        "flex gap-2 py-3 font-display text-lg font-medium",
        isActive && "!bg-white/10 !text-zinc-50",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}