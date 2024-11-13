"use client";
import React, { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Navbar() {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [onNavbarClick, setOnNavbarClick] = useState(false);

  const handleNavbarClick = () => {
    setOnNavbarClick(!onNavbarClick);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 0) {
        navbar?.classList.add(
          "backdrop-blur-md",
          "dark:bg-[#092534]",
          "opacity-95"
        );
      } else {
        navbar?.classList.remove(
          "backdrop-blur-md",
          "dark:bg-[#092534]",
          "opacity-95"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="navbar fixed w-full">
        <div className="flex justify-between container mx-auto items-center px-8 py-3 lg:px-[40px] xl:px-[170px]">
          <div
            onClick={() => router.push("/")}
            className="md:text-xl text-dark dark:text-[#4EEEBB] font-bold cursor-pointer"
          >
            SOFLEPRO
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <ul className="flex gap-4 md:items-center">
              <li>
                <a
                  className="hover:text-[#4EEEBB] transition-all duration-300 ease-in"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#4EEEBB] transition-all duration-300 ease-in"
                  href="#lang"
                >
                  Learn Programming Language
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#4EEEBB] transition-all duration-300 ease-in"
                  href="#about"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#4EEEBB] transition-all duration-300 ease-in"
                  href="#community"
                >
                  Community
                </a>
              </li>
              <li>
                <div className="flex justify-start px-[10px]">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="start">
                      <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </li>
            </ul>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={handleNavbarClick}
              className="bg-transparent p-2"
              title="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-dark dark:text-[#4EEEBB]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {onNavbarClick && (
            <div className="absolute top-[67px] right-0 left-0 bg-[#092534] dark:bg-[#1b1b1b] p-4 md:hidden">
              <ul className="flex flex-col gap-4 text-white px-[15px]">
                <li>
                  <a
                    onClick={() => setOnNavbarClick(false)}
                    className="hover:text-[#4EEEBB] transition-all duration-300 ease-in"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setOnNavbarClick(false)}
                    className="hover:text-[#4EEEBB] transition-all duration-300 ease-in"
                    href="#lang"
                  >
                    Learn Programming Language
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setOnNavbarClick(false)}
                    className="hover:text-[#4EEEBB] transition-all duration-300 ease-in"
                    href="#about"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setOnNavbarClick(false)}
                    className="hover:text-[#4EEEBB] transition-all duration-300 ease-in"
                    href="#community"
                  >
                    Community
                  </a>
                </li>
              </ul>
              <div className="mt-4 flex justify-start px-[10px]">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => {setTheme("light"); setOnNavbarClick(false)}}>
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {setTheme("dark"); setOnNavbarClick(false)}}>
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {setTheme("system"); setOnNavbarClick(false)}}>
                      System
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          )}
        </div>
        <div className="border-b-4 border-[#092534] dark:border-[#4EEEBB]"></div>
      </div>
    </>
  );
}
