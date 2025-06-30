"use client";

import React from 'react';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface BackToTopProps {
    variant?: "default" | "minimal" | "floating";
    showAt?: number;
    className?: string;
}

export function EnhancedBackToTop({ variant = "default", showAt = 300, className }: BackToTopProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrolled = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

            if (scrolled > showAt) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Calculate scroll progress for progress ring
            const progress = (scrolled / maxScroll) * 100;
            setScrollProgress(Math.min(progress, 100));
        };

        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    toggleVisibility();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [showAt]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (variant === "minimal") {
        return (
            <div
                className={cn(
                    "fixed bottom-4 right-4 z-50 transition-all duration-300 ease-out sm:bottom-6 sm:right-6",
                    isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none",
                    className,
                )}
            >
                <Button
                    onClick={scrollToTop}
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border-border/50 hover:border-primary/50 transition-all duration-200 hover:scale-105 active:scale-95"
                    aria-label="Back to top"
                >
                    <ChevronUp className="h-4 w-4" />
                </Button>
            </div>
        );
    }

    if (variant === "floating") {
        return (
            <div
                className={cn(
                    "fixed bottom-4 right-4 z-50 transition-all duration-500 ease-out sm:bottom-6 sm:right-6",
                    isVisible
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                        : "opacity-0 translate-y-8 scale-75 pointer-events-none",
                    className,
                )}
            >
                <div className="relative">
                    {/* Progress Ring */}
                    <svg className="absolute inset-0 h-14 w-14 -rotate-90 transform">
                        <circle
                            cx="28"
                            cy="28"
                            r="24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="transparent"
                            className="text-muted-foreground/20"
                        />
                        <circle
                            cx="28"
                            cy="28"
                            r="24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="transparent"
                            strokeDasharray={`${2 * Math.PI * 24}`}
                            strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
                            className="text-primary transition-all duration-300 ease-out"
                            strokeLinecap="round"
                        />
                    </svg>

                    <Button
                        onClick={scrollToTop}
                        size="icon"
                        className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        );
    }

    // Default variant
    return (
        <div
            className={cn(
                "fixed bottom-4 right-4 z-50 transition-all duration-300 ease-out sm:bottom-6 sm:right-6",
                isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none",
                className,
            )}
        >
            <Button
                onClick={scrollToTop}
                size="icon"
                className={cn(
                    "h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
                    "bg-primary hover:bg-primary/90 text-primary-foreground",
                    "border border-background/20 backdrop-blur-sm",
                    "hover:scale-110 active:scale-95",
                    "focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                    "group",
                )}
                aria-label="Back to top"
            >
                <ArrowUp className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </Button>
        </div>
    );
}
