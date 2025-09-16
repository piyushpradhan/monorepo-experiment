import React from 'react';
import { colors, gradients, designTokens } from './index';

interface ColorSwatchProps {
  color: {
    name: string;
    hex: string;
    hsl: string;
    rgb: string;
    description: string;
  };
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    backgroundColor: 'white',
    minWidth: '200px'
  }}>
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: color.hex,
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        marginBottom: '1rem'
      }}
    />
    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: '#374151' }}>
      {color.name.replace(/([A-Z])/g, ' $1').trim()}
    </h3>
    <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#6b7280' }}>
      {color.hex}
    </p>
    <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.75rem', color: '#9ca3af' }}>
      {color.hsl}
    </p>
    <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.75rem', color: '#9ca3af' }}>
      {color.rgb}
    </p>
    <p style={{ margin: '0', fontSize: '0.75rem', color: '#6b7280', textAlign: 'center' }}>
      {color.description}
    </p>
  </div>
);

interface GradientSwatchProps {
  gradient: {
    name: string;
    value: string;
    direction: string;
    description: string;
  };
}

const GradientSwatch: React.FC<GradientSwatchProps> = ({ gradient }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    backgroundColor: 'white',
    minWidth: '200px'
  }}>
    <div
      style={{
        width: '100px',
        height: '100px',
        background: gradient.value,
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        marginBottom: '1rem'
      }}
    />
    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: '#374151' }}>
      {gradient.name.replace(/([A-Z])/g, ' $1').trim()}
    </h3>
    <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#6b7280' }}>
      {gradient.direction}
    </p>
    <p style={{ margin: '0', fontSize: '0.75rem', color: '#6b7280', textAlign: 'center' }}>
      {gradient.description}
    </p>
  </div>
);

export const DesignSystemDemo: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          color: colors.jordyBlue.hex,
          margin: '0 0 1rem 0'
        }}>
          Monorepo Design System
        </h1>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#6b7280',
          margin: '0',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          A comprehensive design system featuring beautiful blue color tokens, gradients, and utilities
        </p>
      </header>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '1.875rem', 
          color: colors.periwinkle3.hex,
          margin: '0 0 2rem 0',
          textAlign: 'center'
        }}>
          Color Palette
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {Object.values(colors).map((color) => (
            <ColorSwatch key={color.name} color={color} />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '1.875rem', 
          color: colors.periwinkle3.hex,
          margin: '0 0 2rem 0',
          textAlign: 'center'
        }}>
          Gradients
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {Object.values(gradients).map((gradient) => (
            <GradientSwatch key={gradient.name} gradient={gradient} />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '1.875rem', 
          color: colors.periwinkle3.hex,
          margin: '0 0 2rem 0',
          textAlign: 'center'
        }}>
          Design Tokens
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {designTokens.map((category) => (
            <div key={category.name} style={{
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              backgroundColor: 'white'
            }}>
              <h3 style={{ 
                margin: '0 0 1rem 0', 
                fontSize: '1.25rem', 
                color: colors.periwinkle3.hex 
              }}>
                {category.name}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {category.tokens.map((token) => (
                  <div key={token.name} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.5rem',
                    borderRadius: '4px',
                    backgroundColor: '#f9fafb'
                  }}>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: token.value,
                        borderRadius: '4px',
                        border: '1px solid #e5e7eb'
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: '500', color: '#374151' }}>
                        {token.name}
                      </div>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        {token.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ 
        textAlign: 'center', 
        padding: '2rem',
        borderTop: '1px solid #e5e7eb',
        color: '#6b7280'
      }}>
        <p style={{ margin: '0' }}>
          Built with ❤️ using the Monorepo Design System
        </p>
      </footer>
    </div>
  );
};

export default DesignSystemDemo;
