"use client";
import React, { useEffect, useState, } from "react";

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
        navbar?.classList.add("backdrop-blur-md", "bg-[#092534]", "opacity-95");
      } else {
        navbar?.classList.remove("backdrop-blur-md", "bg-[#092534]", "opacity-95");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="navbar fixed w-full ">
        <div className=" flex  justify-between container mx-auto items-center px-8 py-2 ">
          <div onClick={() => router.push('/')} className="text-dark dark:text-[#4EEEBB] font-bold cursor-pointer">
            SOFLEPRO
          </div>

          <div className="md:hidden">
            <div>
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
                  className="size-7 text-dark dark:text-[#4EEEBB]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              </button>
            </div>
          </div>

          {onNavbarClick && (
            <div className="bg-red-500 container px-4 py-1 absolute top-[70px] right-10 w-auto h-screen">
              <div className="flex">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
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
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
              </div>
            </div>
          )}
        </div>
        <div className="border-b-4 border-[#092534] dark:border-[#4EEEBB]"></div>
      </div>
    </>
  );
}
