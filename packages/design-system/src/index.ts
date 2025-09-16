// Main exports
export * from './colors';
export * from './gradients';
export * from './tokens';

// Re-export commonly used items for convenience
export { colors as defaultColors } from './colors';
export { gradients as defaultGradients } from './gradients';
export { designTokens as defaultTokens } from './tokens';

// Export demo component
export { default as DesignSystemDemo } from './demo';

// Design system version
export const VERSION = '1.0.0';

// Design system metadata
export const DESIGN_SYSTEM = {
  name: 'Monorepo Design System',
  version: VERSION,
  description: 'A comprehensive design system with blue color tokens and utilities',
  author: 'Monorepo Team',
  colors: {
    count: 7,
    palette: 'Blue',
    description: 'A harmonious collection of blue tones from light to rich'
  },
  features: [
    'Color tokens with multiple formats (HEX, HSL, RGB)',
    'Predefined gradients',
    'Semantic design tokens',
    'Color manipulation utilities',
    'TypeScript support',
    'CSS and SCSS exports'
  ]
};

// Utility function to get design system info
export const getDesignSystemInfo = () => DESIGN_SYSTEM;

// Utility function to validate color values
export const isValidHexColor = (hex: string): boolean => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
};

export const isValidHSLColor = (hsl: string): boolean => {
  return /^hsla?\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*(?:,\s*[\d.]+\s*)?\)$/.test(hsl);
};

export const isValidRGBColor = (rgb: string): boolean => {
  return /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(?:,\s*[\d.]+\s*)?\)$/.test(rgb);
};

// Color accessibility utilities
export const getContrastRatio = (color1: string, color2: string): number => {
  // Simple contrast ratio calculation
  // In a real implementation, you'd want to use a more sophisticated algorithm
  const hex1 = color1.startsWith('#') ? color1 : '#ffffff';
  const hex2 = color2.startsWith('#') ? color2 : '#000000';
  
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  
  const luminance1 = (0.299 * rgb1.r + 0.587 * rgb1.g + 0.114 * rgb1.b) / 255;
  const luminance2 = (0.299 * rgb2.r + 0.587 * rgb2.g + 0.114 * rgb2.b) / 255;
  
  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);
  
  return (lighter + 0.05) / (darker + 0.05);
};

export const isAccessibleContrast = (color1: string, color2: string, level: 'AA' | 'AAA' = 'AA'): boolean => {
  const ratio = getContrastRatio(color1, color2);
  const thresholds = {
    AA: { normal: 4.5, large: 3 },
    AAA: { normal: 7, large: 4.5 }
  };
  
  return ratio >= thresholds[level].normal;
};

// Import hexToRgb for the contrast calculation
import { hexToRgb } from './colors';
