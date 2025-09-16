import { colors } from './colors';

export interface DesignToken {
  name: string;
  value: string;
  category: string;
  description: string;
}

export interface TokenCategory {
  name: string;
  tokens: DesignToken[];
}

export const designTokens: TokenCategory[] = [
  {
    name: 'Primary Colors',
    tokens: [
      {
        name: 'primary-50',
        value: colors.aliceBlue.hex,
        category: 'primary',
        description: 'Lightest primary color for backgrounds and subtle accents'
      },
      {
        name: 'primary-100',
        value: colors.lavenderWeb.hex,
        category: 'primary',
        description: 'Light primary color for secondary backgrounds'
      },
      {
        name: 'primary-200',
        value: colors.lavenderWeb2.hex,
        category: 'primary',
        description: 'Medium light primary color for borders and dividers'
      },
      {
        name: 'primary-300',
        value: colors.periwinkle.hex,
        category: 'primary',
        description: 'Medium primary color for interactive elements'
      },
      {
        name: 'primary-400',
        value: colors.periwinkle2.hex,
        category: 'primary',
        description: 'Medium dark primary color for hover states'
      },
      {
        name: 'primary-500',
        value: colors.periwinkle3.hex,
        category: 'primary',
        description: 'Main primary color for buttons and links'
      },
      {
        name: 'primary-600',
        value: colors.jordyBlue.hex,
        category: 'primary',
        description: 'Darkest primary color for active states and emphasis'
      }
    ]
  },
  {
    name: 'Semantic Colors',
    tokens: [
      {
        name: 'background-primary',
        value: colors.aliceBlue.hex,
        category: 'semantic',
        description: 'Primary background color for main content areas'
      },
      {
        name: 'background-secondary',
        value: colors.lavenderWeb.hex,
        category: 'semantic',
        description: 'Secondary background color for cards and panels'
      },
      {
        name: 'background-tertiary',
        value: colors.lavenderWeb2.hex,
        category: 'semantic',
        description: 'Tertiary background color for elevated elements'
      },
      {
        name: 'border-light',
        value: colors.periwinkle.hex,
        category: 'semantic',
        description: 'Light border color for subtle separators'
      },
      {
        name: 'border-medium',
        value: colors.periwinkle2.hex,
        category: 'semantic',
        description: 'Medium border color for standard borders'
      },
      {
        name: 'border-strong',
        value: colors.periwinkle3.hex,
        category: 'semantic',
        description: 'Strong border color for emphasis and focus'
      },
      {
        name: 'accent-primary',
        value: colors.jordyBlue.hex,
        category: 'semantic',
        description: 'Primary accent color for highlights and CTAs'
      }
    ]
  },
  {
    name: 'Interactive States',
    tokens: [
      {
        name: 'hover-light',
        value: colors.lavenderWeb.hex,
        category: 'interactive',
        description: 'Hover state for light elements'
      },
      {
        name: 'hover-medium',
        value: colors.periwinkle.hex,
        category: 'interactive',
        description: 'Hover state for medium elements'
      },
      {
        name: 'hover-strong',
        value: colors.periwinkle2.hex,
        category: 'interactive',
        description: 'Hover state for strong elements'
      },
      {
        name: 'active-light',
        value: colors.periwinkle2.hex,
        category: 'interactive',
        description: 'Active state for light elements'
      },
      {
        name: 'active-medium',
        value: colors.periwinkle3.hex,
        category: 'interactive',
        description: 'Active state for medium elements'
      },
      {
        name: 'active-strong',
        value: colors.jordyBlue.hex,
        category: 'interactive',
        description: 'Active state for strong elements'
      },
      {
        name: 'focus-ring',
        value: colors.jordyBlue.hex,
        category: 'interactive',
        description: 'Focus ring color for accessibility'
      }
    ]
  }
];

// Utility functions for working with design tokens
export const getTokenByName = (name: string): DesignToken | undefined => {
  for (const category of designTokens) {
    const token = category.tokens.find(t => t.name === name);
    if (token) return token;
  }
  return undefined;
};

export const getTokensByCategory = (category: string): DesignToken[] => {
  const foundCategory = designTokens.find(c => c.name.toLowerCase() === category.toLowerCase());
  return foundCategory ? foundCategory.tokens : [];
};

export const getTokensByValue = (value: string): DesignToken[] => {
  const tokens: DesignToken[] = [];
  for (const category of designTokens) {
    const matchingTokens = category.tokens.filter(t => t.value === value);
    tokens.push(...matchingTokens);
  }
  return tokens;
};

export const getAllTokens = (): DesignToken[] => {
  return designTokens.flatMap(category => category.tokens);
};

export const getTokenCategories = (): string[] => {
  return designTokens.map(category => category.name);
};

// Export individual token categories for convenience
export const primaryColors = designTokens.find(c => c.name === 'Primary Colors')?.tokens || [];
export const semanticColors = designTokens.find(c => c.name === 'Semantic Colors')?.tokens || [];
export const interactiveStates = designTokens.find(c => c.name === 'Interactive States')?.tokens || [];
