"use client";

import React from 'react';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTopWithTooltip() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
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
                "fixed bottom-4 right-4 z-50 transition-all duration-300 ease-out sm:bottom-6 sm:right-6",
                isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none",
            )}
        >
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            onClick={scrollToTop}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            size="icon"
                            className={cn(
                                "h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
                                "bg-primary hover:bg-primary/90 text-primary-foreground",
                                "border border-background/20 backdrop-blur-sm",
                                "hover:scale-110 active:scale-95",
                                "focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                                "group relative overflow-hidden",
                            )}
                            aria-label="Back to top"
                        >
                            {/* Animated background effect */}
                            <div
                                className={cn(
                                    "absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 transition-transform duration-300",
                                    isHovered ? "translate-x-0" : "translate-x-full",
                                )}
                            />
                            <ArrowUp className="h-5 w-5 relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="bg-popover text-popover-foreground">
                        <p>Back to top</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}
