import { colors, hexToRgb, rgbToHex, adjustBrightness, adjustSaturation } from './colors';

describe('Color Utilities', () => {
  test('colors object has all expected properties', () => {
    expect(colors).toHaveProperty('aliceBlue');
    expect(colors).toHaveProperty('lavenderWeb');
    expect(colors).toHaveProperty('lavenderWeb2');
    expect(colors).toHaveProperty('periwinkle');
    expect(colors).toHaveProperty('periwinkle2');
    expect(colors).toHaveProperty('periwinkle3');
    expect(colors).toHaveProperty('jordyBlue');
  });

  test('each color has all required properties', () => {
    Object.values(colors).forEach(color => {
      expect(color).toHaveProperty('name');
      expect(color).toHaveProperty('hex');
      expect(color).toHaveProperty('hsl');
      expect(color).toHaveProperty('rgb');
      expect(color).toHaveProperty('description');
    });
  });

  test('hexToRgb converts hex to rgb correctly', () => {
    const result = hexToRgb('#edf2fb');
    expect(result).toEqual({ r: 237, g: 242, b: 251 });
  });

  test('rgbToHex converts rgb to hex correctly', () => {
    const result = rgbToHex(237, 242, 251);
    expect(result).toBe('#edf2fb');
  });

  test('adjustBrightness works correctly', () => {
    const result = adjustBrightness('#edf2fb', -20);
    expect(result).toBe('#bcc2c9'); // 20% darker
  });

  test('adjustSaturation works correctly', () => {
    const result = adjustSaturation('#edf2fb', 30);
    expect(result).toBe('#e6f0ff'); // 30% more saturated
  });
});
