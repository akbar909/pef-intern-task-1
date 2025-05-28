"use client";
import Image from 'next/image'
import logo from "@/public/logo.jpg";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image 
           src={logo}
         alt="logo pef"
          className="h-8 w-8 text-primary rounded-full" />
          <span className="font-bold text-xl">PEF Mehran</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/team"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Team
          </Link>
          <Link
            href="/events"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Events
          </Link>
          <Link
            href="/contact"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button className="hidden md:flex" asChild>
            <Link href="/contact">Join Us</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container mx-auto py-4 px-4 flex flex-col gap-4">
            <Link
              href="/"
              className="py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/team"
              className="py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/events"
              className="py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="mt-2" asChild>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Join Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;