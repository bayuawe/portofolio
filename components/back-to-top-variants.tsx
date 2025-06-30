"use client";

import React from 'react';
// import { BackToTop } from './back-to-top';
import { EnhancedBackToTop } from './enhanced-back-to-top';

// Example usage of different variants
export function BackToTopShowcase() {
    return (
        <div className="space-y-4">
            {/* Default variant - recommended for most use cases */}
            {/* <BackToTop /> */}

            {/* Minimal variant - subtle and clean */}
            {/* <EnhancedBackToTop variant="minimal" /> */}

            {/* Floating variant with progress ring - premium feel */}
            <EnhancedBackToTop variant="floating" />
        </div>
    );
}
