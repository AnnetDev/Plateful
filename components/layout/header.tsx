"use client";
// import { useState, useContext } from "react";
import { Toggle } from "@/components/ui/toggle";
import { PlatefulLogo } from "@/components/ui/platefulLogo";
import { Moon, Sun } from "lucide-react";
import { Container } from "@/components/layout/container";

const navItems: { name: string; href: string }[] = [
  { name: "Recipes", href: "/recipes" },
  { name: "Planner", href: "/planner" },
];

export function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b border-[#ECE6E1] bg-transparent py-4 dark:border-zinc-800">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <PlatefulLogo size="text-2xl" color="text-zinc-950 dark:text-zinc-50" />
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-950 transition-colors hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-400"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Toggle
            variant="outline"
            aria-label="Theme Toggle"
            className="group cursor-pointer border-[#ECE6E1] bg-white p-2 text-sm dark:border-zinc-800 dark:bg-zinc-900"
            id="toggle"
            aria-pressed="false"
          >
            <Moon className="hidden h-4 w-4 text-zinc-950 dark:block dark:text-zinc-50" />
            <Sun className="h-4 w-4 text-zinc-950 dark:hidden dark:text-zinc-50" />
          </Toggle>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#CA5538] p-2 dark:bg-zinc-50">
            {/* user button - change to Avatar */}
            <span className="text-sm font-bold text-white">A</span>
          </div>
        </div>
      </Container>
    </header>
  );
}
