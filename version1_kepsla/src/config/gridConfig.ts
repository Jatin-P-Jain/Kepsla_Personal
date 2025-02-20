// src/config/gridConfig.ts
import { Layouts, Layout } from "react-grid-layout";

export const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
export const cols = { lg: 28, md: 24, sm: 6, xs: 4, xxs: 2 };
export const cardDimensions = {
  lg: { w: cols.lg / 4 },
  md: { w: cols.md / 3 },
};

/**
 * Generates grid layouts for different breakpoints.
 * For simplicity, we generate three layouts; you can adjust sizing logic as needed.
 */
export function generateLayouts(cardCount: number): Layouts {
  const layoutLg: Layout[] = [];
  const layoutMd: Layout[] = [];
  const layoutSm: Layout[] = [];

  for (let i = 0; i < cardCount; i++) {
    // For large screens: each card occupies 4 columns and 2 rows.
    layoutLg.push({
      i: `${i}`,
      x: (i * cardDimensions.lg.w) % cols.lg, // Place sequentially, wrapping every 12 columns.
      y: Math.floor((i * cardDimensions.lg.w) / cols.lg) * 2,
      w: cardDimensions.lg.w,
      h: 2,
    });
    // For medium screens: each card occupies 3 columns and 2 rows.
    layoutMd.push({
      i: `${i}`,
      x: (i * cardDimensions.md.w) % cols.md,
      y: Math.floor((i * cardDimensions.lg.w) / cols.md) * 2,
      w: cardDimensions.lg.w+1,
      h: 2,
    });
    // For small screens: each card occupies 6 columns and 2 rows.
    layoutSm.push({
      i: `${i}`,
      x: (i * 6) % 6, // For a 6-column grid, this resets every card.
      y: Math.floor((i * 6) / 6) * 2,
      w: 6,
      h: 2,
    });
  }

  // For xs and xxs, you might simply reuse the sm layout (or create new ones)
  return {
    lg: layoutLg,
    md: layoutMd,
    sm: layoutSm,
    xs: layoutSm,
    xxs: layoutSm,
  };
}
