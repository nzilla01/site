"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaProjectDiagram, FaServicestack, FaPhoneAlt, FaBlog } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import styles from "@/components/styles.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // close on Escape + lock body scroll when open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header className="flex justify-between items-center p-4 relative z-50">
      {/* Logo */}
      <div>
        <Image src="/logo.png" alt="Atrivix Agency Logo" width={100} height={50} />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex space-x-10 text-neutral-500 font-medium">
        <Link href="/" className="flex items-center space-x-2 hover:text-neutral-100"><FaHome /><span>Home</span></Link>
        <Link href="/about" className="flex items-center space-x-2 hover:text-neutral-100"><FaProjectDiagram /><span>Project</span></Link>
        <Link href="/services" className="flex items-center space-x-2 hover:text-neutral-100"><FaServicestack /><span>Services</span></Link>
        <Link href="/contact" className="flex items-center space-x-2 hover:text-neutral-100"><FaPhoneAlt /><span>Contact</span></Link>
        <Link href="/blog" className="flex items-center space-x-2 hover:text-neutral-100"><FaBlog /><span>Blog</span></Link>
      </nav>

      {/* Hamburger Button (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="lg:hidden text-3xl text-neutral-200 focus:outline-none"
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* clickable backdrop (clicking it closes the menu) */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            onClick={close}
            aria-hidden="true"
          />

          {/* centered nav panel */}
          <nav
            className={`
              relative z-10 flex flex-col items-center justify-center h-full space-y-6
              text-neutral-200 text-2xl font-semibold
              ${styles.navbar}
            `}
            role="dialog"
            aria-modal="true"
          >
            {/* Close button inside overlay (visible top-right) */}
            <button
              onClick={close}
              aria-label="Close menu"
              className="absolute top-5 right-5 p-2 rounded-full bg-black/30 hover:bg-black/40 text-3xl focus:outline-none"
            >
              <HiX />
            </button>

            <Link href="/" onClick={close} className="flex items-center space-x-2 hover:text-white"><FaHome /><span>Home</span></Link>
            <Link href="/about" onClick={close} className="flex items-center space-x-2 hover:text-white"><FaProjectDiagram /><span>Project</span></Link>
            <Link href="/services" onClick={close} className="flex items-center space-x-2 hover:text-white"><FaServicestack /><span>Services</span></Link>
            <Link href="/contact" onClick={close} className="flex items-center space-x-2 hover:text-white"><FaPhoneAlt /><span>Contact</span></Link>
            <Link href="/blog" onClick={close} className="flex items-center space-x-2 hover:text-white"><FaBlog /><span>Blog</span></Link>
          </nav>
        </div>
      )}
    </header>
  );
}
