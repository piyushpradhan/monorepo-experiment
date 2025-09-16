export interface ColorToken {
  name: string;
  hex: string;
  hsl: string;
  rgb: string;
  description: string;
}

export interface ColorPalette {
  aliceBlue: ColorToken;
  lavenderWeb: ColorToken;
  lavenderWeb2: ColorToken;
  periwinkle: ColorToken;
  periwinkle2: ColorToken;
  periwinkle3: ColorToken;
  jordyBlue: ColorToken;
}

export const colors: ColorPalette = {
  aliceBlue: {
    name: 'alice-blue',
    hex: '#edf2fb',
    hsl: 'hsla(219, 64%, 96%, 1)',
    rgb: 'rgba(237, 242, 251, 1)',
    description: 'Very light blue with a subtle lavender tint'
  },
  lavenderWeb: {
    name: 'lavender-web',
    hex: '#e2eafc',
    hsl: 'hsla(222, 81%, 94%, 1)',
    rgb: 'rgba(226, 234, 252, 1)',
    description: 'Light lavender blue with medium saturation'
  },
  lavenderWeb2: {
    name: 'lavender-web-2',
    hex: '#d7e3fc',
    hsl: 'hsla(221, 86%, 92%, 1)',
    rgb: 'rgba(215, 227, 252, 1)',
    description: 'Slightly darker lavender blue with higher saturation'
  },
  periwinkle: {
    name: 'periwinkle',
    hex: '#ccdbfd',
    hsl: 'hsla(222, 92%, 90%, 1)',
    rgb: 'rgba(204, 219, 253, 1)',
    description: 'Medium light periwinkle blue with high saturation'
  },
  periwinkle2: {
    name: 'periwinkle-2',
    hex: '#c1d3fe',
    hsl: 'hsla(222, 97%, 88%, 1)',
    rgb: 'rgba(193, 211, 254, 1)',
    description: 'Medium periwinkle blue with very high saturation'
  },
  periwinkle3: {
    name: 'periwinkle-3',
    hex: '#b6ccfe',
    hsl: 'hsla(222, 97%, 85%, 1)',
    rgb: 'rgba(182, 204, 254, 1)',
    description: 'Darker periwinkle blue with very high saturation'
  },
  jordyBlue: {
    name: 'jordy-blue',
    hex: '#abc4ff',
    hsl: 'hsla(222, 100%, 84%, 1)',
    rgb: 'rgba(171, 196, 255, 1)',
    description: 'Rich blue with maximum saturation and medium lightness'
  }
};

// Utility functions
export const getColorByName = (name: string): ColorToken | undefined => {
  const colorKey = name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()) as keyof ColorPalette;
  return colors[colorKey];
};

export const getColorByHex = (hex: string): ColorToken | undefined => {
  return Object.values(colors).find(color => color.hex.toLowerCase() === hex.toLowerCase());
};

export const getColorByHSL = (hsl: string): ColorToken | undefined => {
  return Object.values(colors).find(color => color.hsl === hsl);
};

export const getColorByRGB = (rgb: string): ColorToken | undefined => {
  return Object.values(colors).find(color => color.rgb === rgb);
};

// Color manipulation utilities
export const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
};

export const rgbToHex = (r: number, g: number, b: number): string => {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
};

export const adjustBrightness = (hex: string, percent: number): string => {
  const { r, g, b } = hexToRgb(hex);
  const factor = 1 + percent / 100;
  return rgbToHex(
    Math.min(255, Math.round(r * factor)),
    Math.min(255, Math.round(g * factor)),
    Math.min(255, Math.round(b * factor))
  );
};

export const adjustSaturation = (hex: string, percent: number): string => {
  const { r, g, b } = hexToRgb(hex);
  const factor = 1 + percent / 100;
  
  // Convert to HSL-like calculation for saturation adjustment
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  
  if (delta === 0) return hex;
  
  const newDelta = Math.min(255, Math.round(delta * factor));
  const adjustment = (newDelta - delta) / 2;
  
  return rgbToHex(
    Math.min(255, Math.max(0, Math.round(r + adjustment))),
    Math.min(255, Math.max(0, Math.round(g + adjustment))),
    Math.min(255, Math.max(0, Math.round(b + adjustment)))
  );
};

// Export individual colors for convenience
export const {
  aliceBlue,
  lavenderWeb,
  lavenderWeb2,
  periwinkle,
  periwinkle2,
  periwinkle3,
  jordyBlue
} = colors;
