import { colors } from './colors';

export interface Gradient {
  name: string;
  value: string;
  direction: string;
  description: string;
}

export const gradients = {
  top: {
    name: 'gradient-top',
    value: `linear-gradient(0deg, ${colors.aliceBlue.hex}, ${colors.lavenderWeb.hex}, ${colors.lavenderWeb2.hex}, ${colors.periwinkle.hex}, ${colors.periwinkle2.hex}, ${colors.periwinkle3.hex}, ${colors.jordyBlue.hex})`,
    direction: '0deg',
    description: 'Vertical gradient from bottom to top'
  },
  right: {
    name: 'gradient-right',
    value: `linear-gradient(90deg, ${colors.aliceBlue.hex}, ${colors.lavenderWeb.hex}, ${colors.lavenderWeb2.hex}, ${colors.periwinkle.hex}, ${colors.periwinkle2.hex}, ${colors.periwinkle3.hex}, ${colors.jordyBlue.hex})`,
    direction: '90deg',
    description: 'Horizontal gradient from left to right'
  },
  bottom: {
    name: 'gradient-bottom',
    value: `linear-gradient(180deg, ${colors.aliceBlue.hex}, ${colors.lavenderWeb.hex}, ${colors.lavenderWeb2.hex}, ${colors.periwinkle.hex}, ${colors.periwinkle2.hex}, ${colors.periwinkle3.hex}, ${colors.jordyBlue.hex})`,
    direction: '180deg',
    description: 'Vertical gradient from top to bottom'
  },
  left: {
    name: 'gradient-left',
    value: `linear-gradient(270deg, ${colors.aliceBlue.hex}, ${colors.lavenderWeb.hex}, ${colors.lavenderWeb2.hex}, ${colors.periwinkle.hex}, ${colors.periwinkle2.hex}, ${colors.periwinkle3.hex}, ${colors.jordyBlue.hex})`,
    direction: '270deg',
    description: 'Horizontal gradient from right to left'
  },
  topRight: {
    name: 'gradient-top-right',
    value: `linear-gradient(45deg, ${colors.aliceBlue.hex}, ${colors.lavenderWeb.hex}, ${colors.lavenderWeb2.hex}, ${colors.periwinkle.hex}, ${colors.periwinkle2.hex}, ${colors.periwinkle3.hex}, ${colors.jordyBlue.hex})`,
    direction: '45deg',
    description: 'Diagonal gradient from bottom-left to top-right'
  },
  bottomRight: {
    name: 'gradient-bottom-right',
    value: `linear-gradient(135deg, ${colors.aliceBlue.hex}, ${colors.lavenderWeb.hex}, ${colors.lavenderWeb2.hex}, ${colors.periwinkle.hex}, ${colors.periwinkle2.hex}, ${colors.periwinkle3.hex}, ${colors.jordyBlue.hex})`,
    direction: '135deg',
    description: 'Diagonal gradient from top-left to bottom-right'
  },
  topLeft: {
    name: 'gradient-top-left',
    value: `linear-gradient(225deg, ${colors.aliceBlue.hex}, ${colors.lavenderWeb.hex}, ${colors.lavenderWeb2.hex}, ${colors.periwinkle.hex}, ${colors.periwinkle2.hex}, ${colors.periwinkle3.hex}, ${colors.jordyBlue.hex})`,
    direction: '225deg',
    description: 'Diagonal gradient from bottom-right to top-left'
  },
  bottomLeft: {
    name: 'gradient-bottom-left',
    value: `linear-gradient(315deg, ${colors.aliceBlue.hex}, ${colors.lavenderWeb.hex}, ${colors.lavenderWeb2.hex}, ${colors.periwinkle.hex}, ${colors.periwinkle2.hex}, ${colors.periwinkle3.hex}, ${colors.jordyBlue.hex})`,
    direction: '315deg',
    description: 'Diagonal gradient from top-right to bottom-left'
  },
  radial: {
    name: 'gradient-radial',
    value: `radial-gradient(${colors.aliceBlue.hex}, ${colors.lavenderWeb.hex}, ${colors.lavenderWeb2.hex}, ${colors.periwinkle.hex}, ${colors.periwinkle2.hex}, ${colors.periwinkle3.hex}, ${colors.jordyBlue.hex})`,
    direction: 'radial',
    description: 'Radial gradient from center outward'
  }
};

// Utility functions for creating custom gradients
export const createLinearGradient = (
  direction: number | string,
  colorStops: string[],
  positions?: number[]
): string => {
  const directionStr = typeof direction === 'number' ? `${direction}deg` : direction;
  
  if (positions && positions.length === colorStops.length) {
    const stops = colorStops.map((color, index) => 
      `${color} ${positions[index]}%`
    ).join(', ');
    return `linear-gradient(${directionStr}, ${stops})`;
  }
  
  return `linear-gradient(${directionStr}, ${colorStops.join(', ')})`;
};

export const createRadialGradient = (
  shape: 'circle' | 'ellipse' = 'circle',
  size: 'closest-side' | 'closest-corner' | 'farthest-side' | 'farthest-corner' | string = 'closest-side',
  colorStops: string[],
  positions?: number[]
): string => {
  const shapeSize = `${shape} ${size}`;
  
  if (positions && positions.length === colorStops.length) {
    const stops = colorStops.map((color, index) => 
      `${color} ${positions[index]}%`
    ).join(', ');
    return `radial-gradient(${shapeSize}, ${stops})`;
  }
  
  return `radial-gradient(${shapeSize}, ${colorStops.join(', ')})`;
};

export const createConicGradient = (
  from: number = 0,
  colorStops: string[],
  positions?: number[]
): string => {
  if (positions && positions.length === colorStops.length) {
    const stops = colorStops.map((color, index) => 
      `${color} ${positions[index]}deg`
    ).join(', ');
    return `conic-gradient(from ${from}deg, ${stops})`;
  }
  
  return `conic-gradient(from ${from}deg, ${colorStops.join(', ')})`;
};

// Export individual gradients for convenience
export const {
  top,
  right,
  bottom,
  left,
  topRight,
  bottomRight,
  topLeft,
  bottomLeft,
  radial
} = gradients;
