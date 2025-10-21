'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
    { href: "/", label: "// home" },
    { href: "#expertise", label: "//expertise" },
    { href: "#projects", label: "//work" },
    { href: "#education", label: "//experience" },
    { href: "#contact", label: "//contact" },
];

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [showFloatingNav, setShowFloatingNav] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleScroll = () => {
            const expertise = document.getElementById("expertise");
            if (!expertise) return;

            const expertiseOffset = expertise.getBoundingClientRect().top;
            // jika elemen #expertise sudah mencapai atas viewport
            if (expertiseOffset <= 0) {
                setShowFloatingNav(true);
            } else {
                setShowFloatingNav(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* 🧍 Static Navbar at top (balanced spacing) */}
            <div className="hidden md:flex w-full z-10 border-b border-border bg-background">
                <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

                    {/* Logo - kiri */}
                    <Link
                        href="/"
                        className="flex items-center font-mono text-3xl font-bold select-none mr-16"
                    >
                        <span className="text-cyan-300">bayuawe</span>
                        <span className="text-white">.</span>
                        <span className="text-purple-400">_</span>
                    </Link>

                    {/* Nav Items - tengah */}
                    <nav className="flex items-center gap-12">
                        {navItems.map((item, index) => (
                            <div key={item.href} className="flex flex-col items-center group relative">
                                <span className="text-[10px] text-muted-foreground font-mono mb-1 group-hover:text-cyan-300 transition">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <Link
                                    href={item.href}
                                    className="text-sm font-mono text-foreground group-hover:text-cyan-300 transition"
                                >
                                    {item.label}
                                </Link>
                                <div className="absolute bottom-[-4px] w-0 h-[2px] bg-purple-400 group-hover:w-full transition-all"></div>
                            </div>
                        ))}
                    </nav>

                    {/* Theme Switcher - kanan */}
                    <div className="flex items-center ml-16">
                        <ThemeToggle />
                    </div>
                </div>
            </div>




            {/* 📌 Floating Navbar after #expertise */}
            <div
                className={`hidden md:flex fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${showFloatingNav ? 'translate-y-0' : '-translate-y-full'
                    } bg-background/95 border-b border-border backdrop-blur`}
                style={{ boxShadow: showFloatingNav ? '0 2px 16px #0003' : undefined }}
            >
                <div className="max-w-7xl mx-auto h-16 px-8 flex items-center justify-between">

                    {/* Logo - kiri */}
                    <Link
                        href="/"
                        className="flex items-center font-mono text-2xl font-bold select-none mr-12"
                    >
                        <span className="text-cyan-300">bayuawe</span>
                        <span className="text-white">.</span>
                        <span className="text-purple-400">_</span>
                    </Link>

                    {/* Nav Items - tengah */}
                    <nav className="flex items-center gap-10">
                        {navItems.map((item, index) => (
                            <div key={item.href} className="flex flex-col items-center group relative">
                                <span className="text-[10px] text-muted-foreground font-mono mb-1 group-hover:text-cyan-300 transition">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <Link
                                    href={item.href}
                                    className="text-sm font-mono text-foreground group-hover:text-cyan-300 transition"
                                >
                                    {item.label}
                                </Link>
                                <div className="absolute bottom-[-4px] w-0 h-[2px] bg-purple-400 group-hover:w-full transition-all"></div>
                            </div>
                        ))}
                    </nav>

                    {/* Theme Switcher - kanan */}
                    <div className="flex items-center ml-12">
                        <ThemeToggle />
                    </div>
                </div>
            </div>



            {/* 📱 Mobile Navbar (tetap fixed) */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border px-0 md:hidden">
                <div className="relative max-w-7xl mx-auto flex items-center justify-between h-20 px-4">
                    <div className="flex items-center gap-3 z-10">
                        <button
                            className="block md:hidden focus:outline-none mr-2"
                            aria-label="Toggle Menu"
                            onClick={() => setOpen((v) => !v)}
                        >
                            {open ? (
                                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-cyan-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-cyan-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                        <Link href="/" className="flex items-center font-mono text-3xl font-bold select-none">
                            <span className="text-cyan-300">bayuawe</span>
                            <span className="text-white">.</span>
                            <span className="text-purple-400">_</span>
                        </Link>
                    </div>
                    <div className="z-10">
                        <ThemeToggle />
                    </div>
                </div>

                {open && (
                    <div
                        className="fixed inset-0 z-40 bg-black/70 md:hidden"
                        onClick={() => setOpen(false)}
                    />
                )}

                <div
                    className={`fixed top-0 left-0 w-64 h-full bg-background border-r border-border z-50 transform transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "-translate-x-full"
                        }`}
                    style={{ boxShadow: open ? "2px 0 16px #0006" : undefined }}
                >
                    <div className="flex items-center justify-between h-20 px-6 border-b border-border">
                        <Link
                            href="/"
                            className="flex items-center font-mono text-2xl font-bold select-none"
                            onClick={() => setOpen(false)}
                        >
                            <span className="text-cyan-300">bayuawe</span>
                            <span className="text-white">.</span>
                            <span className="text-purple-400">_</span>
                        </Link>
                        <button
                            className="focus:outline-none"
                            aria-label="Close Menu"
                            onClick={() => setOpen(false)}
                        >
                            <svg
                                width="28"
                                height="28"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="text-cyan-300"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col gap-2 mt-8 px-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-lg font-mono text-foreground py-2 px-2 rounded hover:bg-cyan-900/30 hover:text-cyan-300 transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="mt-6">
                            <ThemeToggle />
                        </div>
                    </nav>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
