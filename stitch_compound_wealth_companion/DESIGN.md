---
name: Compound
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#53e16f'
  on-secondary: '#003911'
  secondary-container: '#05b046'
  on-secondary-container: '#003a11'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e2e2e2'
  on-tertiary-container: '#636565'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#72fe88'
  secondary-fixed-dim: '#53e16f'
  on-secondary-fixed: '#002107'
  on-secondary-fixed-variant: '#00531c'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  numeric-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-margin: 20px
  stack-gap: 24px
  card-padding: 24px
  element-gap: 12px
  section-gap: 48px
---

## Brand & Style
This design system is engineered for a premium wealth tracking experience that prioritizes clarity, calm, and confidence. It draws inspiration from high-end productivity tools and fintech leaders, emphasizing a "reductionist-premium" aesthetic.

The personality is authoritative yet approachable, avoiding the "gamified" anxiety often found in retail finance apps. The interface is characterized by extreme minimalism, expansive whitespace, and a monochromatic foundation that allows the user's financial data to be the sole focus. The emotional response should be one of control and long-term stability.

## Colors
The palette is strictly dark-mode, utilizing an "OLED Black" strategy to maximize contrast and focus.

- **Primary:** Pure White (#FFFFFF) is reserved for high-priority headings and primary action text.
- **Secondary (Accent):** Growth Green (#34C759) is the only chromatic element, used sparingly to indicate positive performance or primary buttons.
- **Surface Tiers:** The background is #000000. Cards and secondary surfaces use #1C1C1E.
- **Borders:** Subtle separation is achieved via #38383A borders rather than shadows.

## Typography
The system uses **Hanken Grotesk** to provide a clean, modern, and high-precision feel that mimics the technical sophistication of financial terminals while remaining accessible.

- **Tracking:** Generous letter spacing is applied to body text and labels to enhance readability and "airiness."
- **Numbers:** Wealth data should use the `numeric-lg` or `display-lg` roles with optical alignment to ensure currency symbols don't disrupt the visual flow.
- **Hierarchy:** Use `label-caps` for section headers and metadata to create clear structural boundaries without using heavy lines.

## Layout & Spacing
The layout follows a fluid-to-fixed model designed for iOS. It relies on a high-density 4px baseline grid but applies large, "breathable" margins to evoke a premium feel.

- **Margins:** Standard horizontal padding for the screen is 20px. 
- **Card Spacing:** Use 24px vertical gaps between major cards. 
- **Whitespace:** Emphasize vertical whitespace between different asset classes (e.g., Cash vs. Crypto) using the `section-gap` token to prevent visual clutter.
- **Alignment:** All text-based data within cards should be left-aligned, with numeric values right-aligned for easy vertical scanning.

## Elevation & Depth
This design system rejects shadows and blurs in favor of **Tonal Layering** and **Structural Outlines**.

- **Depth:** Surfaces are distinguished by color shifts (#000000 for base, #1C1C1E for elevated cards).
- **Borders:** Every card and interactive element must feature a 1px solid border (#38383A). This creates a "technical" and precise aesthetic similar to modern engineering tools.
- **No Blurs:** Do not use backdrop filters or glass effects. Backgrounds must remain solid black to maintain the high-contrast professional mood.

## Shapes
The shape language is defined by "Large Soft Geometry."

- **Cards:** Use a consistent 24px corner radius for all primary containers.
- **Buttons:** Use 12px or fully rounded (pill) shapes depending on the emphasis.
- **Charts:** Line charts should use a slight smoothing (Catmull-Rom or similar) to avoid jagged edges, reflecting the "calm" brand pillar.

## Components
Consistent implementation of these components ensures the premium narrative of the design system:

- **Primary Button:** Solid #34C759 background with #000000 text. High contrast, no gradient.
- **Secondary Button:** Ghost style with #38383A border and #FFFFFF text.
- **Cards:** The workhorse of the UI. Background #1C1C1E, 1px border #38383A, 24px padding. 
- **Charts:** Elegant line charts. Use #34C759 for growth and #FFFFFF for neutral/static. No grid lines, no X/Y axes labels unless absolutely necessary for context. Use a simple horizontal line for "Initial Investment" benchmarks.
- **Lists:** No dividers between list items. Use spacing (16px) to separate items within a card.
- **Inputs:** Darker background than the card (#000000) with a 1px border that glows slightly (#FFFFFF) only when focused.
- **Asset Row:** A specialized component showing [Icon] [Name] [Price/Sparkline] [Percentage Change]. Keep sparklines small and mono-color.