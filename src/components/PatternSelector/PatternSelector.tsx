import React, { lazy } from 'react';
interface PatternOption {
  id: string;
  alt: string;
  src: string;
}
interface PatternSelectorProps {
  selectedBodyType?: string;
  selectedEdgeType?: string;
  onBodyTypeChange?: (bodyType: string) => void;
  onEdgeTypeChange?: (edgeType: string) => void;
  'data-id'?: string;
}
const bodyTypeOptions: PatternOption[] = [{
  id: 'default',
  alt: 'default',
  src: 'https://cdn.qrcodecreator.com/editor/patterns/default.svg'
}, {
  id: 'circle',
  alt: 'circle',
  src: 'https://cdn.qrcodecreator.com/editor/patterns/circle.svg'
}, {
  id: 'heart',
  alt: 'heart',
  src: 'https://cdn.qrcodecreator.com/editor/patterns/heart.svg'
}, {
  id: 'rounded',
  alt: 'rounded',
  src: 'https://cdn.qrcodecreator.com/editor/patterns/rounded.svg'
}, {
  id: 'two_rounded',
  alt: 'two_rounded',
  src: 'https://cdn.qrcodecreator.com/editor/patterns/two_rounded.svg'
}, {
  id: 'tilted_rounded',
  alt: 'tilted_rounded',
  src: 'https://cdn.qrcodecreator.com/editor/patterns/tilted_rounded.svg'
}, {
  id: 'star',
  alt: 'star',
  src: 'https://cdn.qrcodecreator.com/editor/patterns/star.svg'
}, {
  id: 'triangle',
  alt: 'triangle',
  src: 'https://cdn.qrcodecreator.com/editor/patterns/triangle.svg'
}, {
  id: 'hexagon',
  alt: 'hexagon',
  src: 'https://cdn.qrcodecreator.com/editor/patterns/hexagon.svg'
}, {
  id: 'sparkle',
  alt: 'sparkle',
  src: 'https://cdn.qrcodecreator.com/editor/patterns/sparkle.svg'
}];
const edgeTypeOptions: PatternOption[] = [{
  id: 'default',
  alt: 'default',
  src: 'https://cdn.qrcodecreator.com/editor/eyes/default.svg'
}, {
  id: 'curved',
  alt: 'curved',
  src: 'https://cdn.qrcodecreator.com/editor/eyes/curved.svg'
}, {
  id: 'circle',
  alt: 'circle',
  src: 'https://cdn.qrcodecreator.com/editor/eyes/circle.svg'
}, {
  id: 'curved_br',
  alt: 'curved_br',
  src: 'https://cdn.qrcodecreator.com/editor/eyes/curved_br.svg'
}, {
  id: 'drop_br',
  alt: 'drop_br',
  src: 'https://cdn.qrcodecreator.com/editor/eyes/drop_br.svg'
}, {
  id: 'eye_bl',
  alt: 'eye_bl',
  src: 'https://cdn.qrcodecreator.com/editor/eyes/eye_bl.svg'
}, {
  id: 'drop_eye_br',
  alt: 'drop_eye_br',
  src: 'https://cdn.qrcodecreator.com/editor/eyes/drop_eye_br.svg'
}, {
  id: 'dots',
  alt: 'dots',
  src: 'https://cdn.qrcodecreator.com/editor/eyes/dots.svg'
}, {
  id: 'canvas',
  alt: 'canvas',
  src: 'https://cdn.qrcodecreator.com/editor/eyes/canvas.svg'
}];
export function PatternSelector({
  selectedBodyType = 'default',
  selectedEdgeType = 'default',
  onBodyTypeChange,
  onEdgeTypeChange,
  'data-id': dataId
}: PatternSelectorProps) {
  return <div data-id={dataId} className="w-full max-w-3xl bg-white text-gray-800 font-['Lato','Lato_Fallback',sans-serif] text-sm leading-5">
      {/* Body Type Section */}
      <span className="flex items-center uppercase text-gray-600 font-bold text-xs leading-4 tracking-wider mt-2.5">
        Body Type
      </span>
      <div className="flex flex-wrap gap-4 pt-2.5">
        {bodyTypeOptions.map(option => {
        const isSelected = selectedBodyType === option.id;
        return <button key={option.id} disabled={isSelected} onClick={() => onBodyTypeChange?.(option.id)} className={`
                w-14 h-14 flex items-center justify-center bg-white rounded relative
                ${isSelected ? 'border-2 border-green-600 cursor-auto' : 'border border-gray-300 cursor-pointer hover:border-gray-400'}
              `}>
              <img alt={option.alt} loading="lazy" width="52" height="52" decoding="async" src={option.src} className={`
                  max-w-full h-13 p-3
                  ${isSelected ? 'brightness-[0.36] contrast-[0.8] sepia-0 saturate-0 hue-rotate-0 invert-[0.15]' : ''}
                `} />
            </button>;
      })}
      </div>
      {/* Edges Section */}
      <span className="flex items-center uppercase text-gray-600 font-bold text-xs leading-4 tracking-wider mt-4">
        Edges
      </span>
      <div className="flex flex-wrap gap-4 pt-2.5">
        {edgeTypeOptions.map(option => {
        const isSelected = selectedEdgeType === option.id;
        return <button key={option.id} disabled={isSelected} onClick={() => onEdgeTypeChange?.(option.id)} className={`
                w-14 h-14 flex items-center justify-center bg-white rounded relative
                ${isSelected ? 'border-2 border-green-600 cursor-auto' : 'border border-gray-300 cursor-pointer hover:border-gray-400'}
              `}>
              <img alt={option.alt} loading="lazy" width="52" height="52" decoding="async" src={option.src} className={`
                  max-w-full h-13 p-3
                  ${isSelected ? 'brightness-[0.36] contrast-[0.8] sepia-0 saturate-0 hue-rotate-0 invert-[0.15]' : ''}
                `} />
            </button>;
      })}
      </div>
    </div>;
}