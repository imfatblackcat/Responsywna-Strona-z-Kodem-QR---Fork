import React from 'react';
import { Palette } from 'lucide-react';
interface ColorPickerProps {
  value?: string;
  onChange?: (color: string) => void;
  colors?: string[];
  showColorInput?: boolean;
  className?: string;
  'data-id'?: string;
}
const defaultColors = ['#000000', '#6B6B6B', '#AF1818', '#EA3423', '#ED7531', '#744E40', '#9E3571', '#D44797', '#6733B9', '#183BD2', '#0F0B9A', '#3578F6', '#51AAAC', '#4A9B6A'];
export function ColorPicker({
  value = '#000000',
  onChange,
  colors = defaultColors,
  showColorInput = true,
  className = '',
  'data-id': dataId
}: ColorPickerProps) {
  const handleColorChange = (color: string) => {
    onChange?.(color);
  };
  return <div className={`flex flex-wrap gap-3 p-0 bg-white ${className}`} data-id={dataId} role="group" aria-label="Color picker">
      {showColorInput && <button className="relative w-14 h-14 flex items-center justify-center border border-gray-200 rounded bg-transparent hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1" aria-label="Custom color picker">
          <Palette className="w-6 h-6 text-gray-600" />
          <input type="color" value={value} onChange={e => handleColorChange(e.target.value)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" aria-label="Select custom color" />
        </button>}
      {colors.map((color, index) => <button key={color} onClick={() => handleColorChange(color)} className={`w-14 h-14 flex items-center justify-center rounded border-2 p-1.5 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${value === color ? 'border-green-500 bg-white' : 'border-gray-200 bg-transparent'}`} aria-label={`Select color ${color}`} aria-pressed={value === color}>
          <span className="block w-full h-full rounded border border-gray-200" style={{
        backgroundColor: color
      }} />
        </button>)}
    </div>;
}