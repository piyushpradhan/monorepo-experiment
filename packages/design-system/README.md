# Monorepo Design System

A comprehensive design system package with beautiful blue color tokens and utilities for your monorepo projects.

## 🎨 Color Palette

This design system features a harmonious collection of 7 blue tones, carefully crafted to provide a cohesive visual experience:

- **Alice Blue** (`#edf2fb`) - Very light blue with subtle lavender tint
- **Lavender Web** (`#e2eafc`) - Light lavender blue with medium saturation
- **Lavender Web 2** (`#d7e3fc`) - Slightly darker lavender blue with higher saturation
- **Periwinkle** (`#ccdbfd`) - Medium light periwinkle blue with high saturation
- **Periwinkle 2** (`#c1d3fe`) - Medium periwinkle blue with very high saturation
- **Periwinkle 3** (`#b6ccfe`) - Darker periwinkle blue with very high saturation
- **Jordy Blue** (`#abc4ff`) - Rich blue with maximum saturation and medium lightness

## 📦 Installation

```bash
# From the monorepo root
pnpm add @monorepo/design-system

# Or if you're working directly in the packages directory
cd packages/design-system
pnpm install
```

## 🚀 Usage

### TypeScript/JavaScript

```typescript
// Import the entire design system
import { colors, gradients, designTokens } from '@monorepo/design-system';

// Use individual colors
const primaryColor = colors.aliceBlue.hex; // '#edf2fb'
const primaryHSL = colors.aliceBlue.hsl;   // 'hsla(219, 64%, 96%, 1)'

// Use gradients
const topGradient = gradients.top.value;
const radialGradient = gradients.radial.value;

// Use semantic tokens
const backgroundPrimary = designTokens.find(t => t.name === 'background-primary')?.value;

// Color manipulation utilities
import { adjustBrightness, adjustSaturation } from '@monorepo/design-system';
const darkerBlue = adjustBrightness('#edf2fb', -20); // 20% darker
const moreSaturated = adjustSaturation('#edf2fb', 30); // 30% more saturated
```

### CSS

```css
/* Import the CSS file */
@import '@monorepo/design-system/css';

/* Use CSS custom properties */
.my-component {
  background-color: var(--alice-blue);
  color: var(--primary-600);
  border: 1px solid var(--border-medium);
}

/* Use utility classes */
<div class="bg-primary-500 text-primary-50 border-primary-200">
  Content with design system colors
</div>
```

### SCSS

```scss
/* Import the SCSS file */
@import '@monorepo/design-system/scss';

/* Use SCSS variables */
.my-component {
  background-color: $alice-blue;
  color: $primary-600;
  border: 1px solid $border-medium;
}

/* Use mixins */
.gradient-card {
  @include gradient-top;
}

.custom-gradient {
  @include linear-gradient(45deg, $alice-blue, $jordy-blue);
}

/* Use functions */
$custom-color: get-color('periwinkle');
$primary-color: get-primary-color('500');
$semantic-color: get-semantic-color('background-primary');
```

## 🏗️ Architecture

The design system is organized into several modules:

### Core Modules

- **`colors.ts`** - Base color definitions with multiple formats (HEX, HSL, RGB)
- **`gradients.ts`** - Predefined gradients and gradient creation utilities
- **`tokens.ts`** - Semantic design tokens organized by category
- **`index.ts`** - Main entry point with unified API and utilities

### Export Formats

- **TypeScript** - Full type safety and IntelliSense support
- **CSS** - CSS custom properties and utility classes
- **SCSS** - Variables, mixins, and functions

## 🎯 Design Token Categories

### Primary Colors
- `primary-50` through `primary-600` - Scale from lightest to darkest

### Semantic Colors
- `background-primary` - Main content backgrounds
- `background-secondary` - Card and panel backgrounds
- `background-tertiary` - Elevated element backgrounds
- `border-light/medium/strong` - Border hierarchy
- `accent-primary` - Call-to-action and emphasis

### Interactive States
- `hover-light/medium/strong` - Hover state variations
- `active-light/medium/strong` - Active state variations
- `focus-ring` - Focus indicator color

## 🛠️ Utilities

### Color Manipulation
- `adjustBrightness(hex, percent)` - Adjust color brightness
- `adjustSaturation(hex, percent)` - Adjust color saturation
- `hexToRgb(hex)` - Convert HEX to RGB
- `rgbToHex(r, g, b)` - Convert RGB to HEX

### Gradient Creation
- `createLinearGradient(direction, colors, positions?)`
- `createRadialGradient(shape, size, colors, positions?)`
- `createConicGradient(from, colors, positions?)`

### Accessibility
- `getContrastRatio(color1, color2)` - Calculate contrast ratio
- `isAccessibleContrast(color1, color2, level)` - Check WCAG compliance

### Token Management
- `getTokenByName(name)` - Find token by name
- `getTokensByCategory(category)` - Get all tokens in a category
- `getAllTokens()` - Get all design tokens

## 🔧 Development

### Building

```bash
# Build the package
pnpm build

# Watch mode for development
pnpm dev

# Clean build artifacts
pnpm clean
```

### Project Structure

```
packages/design-system/
├── src/
│   ├── colors.ts          # Color definitions and utilities
│   ├── gradients.ts       # Gradient definitions and utilities
│   ├── tokens.ts          # Design token definitions
│   ├── index.ts           # Main entry point
│   ├── colors.css         # CSS export
│   └── colors.scss        # SCSS export
├── dist/                  # Built files (generated)
├── package.json           # Package configuration
├── tsconfig.json          # TypeScript configuration
├── build.js               # Build script
└── README.md              # This file
```

## 📚 Examples

### React Component

```tsx
import React from 'react';
import { colors, gradients } from '@monorepo/design-system';

const BlueCard: React.FC = () => (
  <div style={{
    background: gradients.top.value,
    color: colors.jordyBlue.hex,
    padding: '1rem',
    borderRadius: '8px'
  }}>
    <h3>Beautiful Blue Card</h3>
    <p>This card uses our design system colors!</p>
  </div>
);
```

### Tailwind CSS Integration

```css
/* tailwind.config.js */
module.exports = {
  theme: {
    extend: {
      colors: {
        'alice-blue': '#edf2fb',
        'lavender-web': '#e2eafc',
        'periwinkle': '#ccdbfd',
        'jordy-blue': '#abc4ff',
      }
    }
  }
}
```

### CSS-in-JS

```typescript
import { colors } from '@monorepo/design-system';

const styles = {
  button: {
    backgroundColor: colors.periwinkle.hex,
    color: colors.jordyBlue.hex,
    border: `2px solid ${colors.lavenderWeb.hex}`,
    '&:hover': {
      backgroundColor: colors.periwinkle2.hex,
    }
  }
};
```

## 🤝 Contributing

1. Add new colors to the `colors.ts` file
2. Update semantic tokens in `tokens.ts` if needed
3. Add new gradients to `gradients.ts`
4. Update CSS and SCSS exports
5. Run tests and build to ensure everything works
6. Update documentation

## 📄 License

MIT License - see LICENSE file for details

## 🆕 Version History

- **v1.0.0** - Initial release with blue color palette and utilities
