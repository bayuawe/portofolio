"use client";

import React from 'react';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout;

        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Add scrolling state for visual feedback
            setIsScrolling(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 150);
        };

        // Throttle scroll events for better performance
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

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={cn(
                "fixed bottom-6 right-6 z-50 transition-all duration-300 ease-out",
                isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none",
            )}
        >
            <Button
                onClick={scrollToTop}
                size="icon"
                className={cn(
                    "h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
                    "bg-primary hover:bg-primary/90 text-primary-foreground",
                    "border-2 border-background/20 backdrop-blur-sm",
                    "hover:scale-110 active:scale-95",
                    "focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                    isScrolling && "animate-pulse",
                )}
                aria-label="Back to top"
            >
                <ArrowUp className="h-5 w-5" />
            </Button>
        </div>
    );
}
