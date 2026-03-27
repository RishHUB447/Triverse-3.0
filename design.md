# Triverse 3.0: Design Style Guide

This document outlines the design language and stylistic choices for the **Events**, **Teams**, and **Sponsors** pages of the Triverse 3.0 project.

---

## 🌌 Core Design Philosophy
The website follows a **Premium Dark / Futuristic** aesthetic characterized by high-contrast typography, deep black backgrounds, and vibrant neon accents. The use of motion and smooth transitions is central to the user experience.

### Foundations
- **Background:** Pure Black (`#000000`) with a subtle grain overlay (`opacity: 0.035`) for texture.
- **Global Glow:** Large, soft radial gradients (typically purple `rgba(138, 43, 226, 0.1)`) used sparingly to provide depth.
- **Smooth Motion:** Integrated GSAP ScrollSmoother and Lenis for a luxury scrolling feel.

---

## 🖋️ Typography System

Triverse 3.0 uses a strictly defined typography system to maintain a premium, cohesive aesthetic.

| Usage | Font Family | Style |
| :--- | :--- | :--- |
| **Wordmark ("TRIVERSE")** | `Centauri` | Futurist, wide, uppercase |
| **All Other Text** | `SF Pro Display` | Modern, clean, professional |

### Key Principles
- **Unified Branding:** By reducing the font count to two primary families, the design achieved a more "Apple-like" premium feel.
- **Centauri Exclusivity:** `Centauri` is reserved purely for the "Triverse" brand name in hero and footer contexts.
- **SF Pro Versatility:** `SF Pro Display` handles everything from massive headings (using `font-weight: 900`) to dense body copy.
- **Responsive Scaling:** Large headings use `clamp()` (e.g., `clamp(3.5rem, 10vw, 8.5rem)`) for consistent impact.

---

## 🎨 Page-Specific Styles

### 1. Events Page (`events.astro`)
- **Layout:** A structured **Vertical Timeline** with alternating content blocks.
- **Color Accents:** Every event has a unique signature color (Purple, Fuchsia, Pink) used for tags, dots, and glows.
- **Key Features:**
  - **Large Day Indicators:** Massive, low-opacity "Day 01" numbers serving as background anchors.
  - **Breathing Images:** Subtle floating animation on event images to create life.
  - **Staggered Entry:** Letter-by-letter header reveal for "THE EVENTS".

### 2. Teams Page (`teams.astro`)
- **Theme:** "The Collective" — high-velocity cinematic squad.
- **Color Accents:** Teal/Cyan (`#00f5d4`) labels paired with white-to-purple text gradients.
- **Key Features:**
  - **Hero Animation:** GSAP-powered character reveal with scale and blur effects for the main title.
  - **Departmental Sections:** Each team (Tech, Design, etc.) is organized in customized grids or rows with specialized cards.
  - **Member Cards:** Often feature clip-path reveals or hover-based image expansions.

### 3. Sponsors Page (`sponsors.astro`)
- **Layout:** **Diagonal 3-Column Grid** across the full width of the viewport.
- **Color Accents:** Dynamic, sponsor-specific accent colors (`--accent-color`) that activate on hover.
- **Key Features:**
  - **Interactive Marquee:** Hovering over a sponsor card triggers a moving background marquee of the sponsor's name.
  - **Tiered Display:** Support for "large" (2-column) and "small" (1-column) cards to create a non-linear browsing flow.
  - **Visual Reveal:** Monochromatic logos that gain color and glow upon interaction.

---

## 🎬 Animation & Motion
- **Scroll Reveals:** IntersectionObserver is used for "blur-to-clear" and "scale-up" reveals on cards.
- **GSAP Logic:** Used for complex sequenced animations (Hero entries) and custom clip-path splits.
- **AOS Integration:** Standard "fade-up" or "reveal-top/bottom" effects for secondary sections.
- **Hover Micro-interactions:** Nearly every interactive card features a transform (scale) or opacity shift to provide immediate feedback.
