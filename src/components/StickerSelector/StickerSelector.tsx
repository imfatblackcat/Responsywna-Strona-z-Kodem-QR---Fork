import React, { lazy } from 'react';
export interface Sticker {
  id: string;
  name: string;
  alt: string;
  src: string;
  padding?: 'small' | 'large';
}
export interface StickerSelectorProps {
  stickers: Sticker[];
  selectedSticker?: string;
  onStickerSelect?: (stickerId: string) => void;
  className?: string;
  'data-id'?: string;
}
export function StickerSelector({
  stickers,
  selectedSticker,
  onStickerSelect,
  className = '',
  'data-id': dataId
}: StickerSelectorProps) {
  return <div className={`flex flex-wrap gap-3 p-0 max-w-full ${className}`} data-id={dataId}>
      {stickers.map(sticker => {
      const isSelected = selectedSticker === sticker.id;
      const paddingClass = sticker.padding === 'large' ? 'p-4' : 'p-1';
      return <button key={sticker.id} aria-label={`sticker-${sticker.name}`} onClick={() => onStickerSelect?.(sticker.id)} className={`
              relative w-14 h-14 flex items-center justify-center 
              bg-white rounded border-2 transition-colors
              ${isSelected ? 'border-green-600 cursor-default' : 'border-gray-300 hover:border-gray-400 cursor-pointer'}
            `} disabled={isSelected}>
            <img alt={sticker.alt} loading="lazy" decoding="async" src={sticker.src} className={`absolute inset-0 w-full h-full object-contain ${paddingClass}`} />
          </button>;
    })}
    </div>;
}
// Default sticker data based on the original design
export const defaultStickers: Sticker[] = [{
  id: 'none',
  name: 'none',
  alt: 'none',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/none.svg',
  padding: 'large'
}, {
  id: 'circle',
  name: 'circle',
  alt: 'circle',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/circle.svg'
}, {
  id: 'simple_bottom',
  name: 'simple_bottom',
  alt: 'simple_bottom',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/simple_bottom.svg'
}, {
  id: 'opinion',
  name: 'opinion',
  alt: 'opinion',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/opinion.svg'
}, {
  id: 'simple',
  name: 'simple',
  alt: 'simple',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/simple.svg'
}, {
  id: 'tooltip_filled',
  name: 'tooltip_filled',
  alt: 'tooltip_filled',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/tooltip_filled.svg'
}, {
  id: 'tooltip_stroke',
  name: 'tooltip_stroke',
  alt: 'tooltip_stroke',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/tooltip_stroke.svg'
}, {
  id: 'plate',
  name: 'plate',
  alt: 'plate',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/plate.svg'
}, {
  id: 'beer',
  name: 'beer',
  alt: 'beer',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/beer.svg'
}, {
  id: 'cook',
  name: 'cook',
  alt: 'cook',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/cook.svg'
}, {
  id: 'store',
  name: 'store',
  alt: 'store',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/store.svg'
}, {
  id: 'cup',
  name: 'cup',
  alt: 'cup',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/cup.svg'
}, {
  id: 'coffee_bag',
  name: 'coffee_bag',
  alt: 'coffee_bag',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/coffee_bag.svg'
}, {
  id: 'ticket',
  name: 'ticket',
  alt: 'ticket',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/ticket.svg'
}, {
  id: 'download',
  name: 'download',
  alt: 'download',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/download.svg'
}, {
  id: 'gift',
  name: 'gift',
  alt: 'gift',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/gift.svg'
}, {
  id: 'film',
  name: 'film',
  alt: 'film',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/film.svg'
}, {
  id: 'scan_white',
  name: 'scan_white',
  alt: 'scan_white',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/scan_white.svg'
}, {
  id: 'left_arrow',
  name: 'left_arrow',
  alt: 'left_arrow',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/left_arrow.svg'
}, {
  id: 'arrows_bottom',
  name: 'arrows_bottom',
  alt: 'arrows_bottom',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/arrows_bottom.svg'
}, {
  id: 'book',
  name: 'book',
  alt: 'book',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/book.svg'
}, {
  id: 'menu2',
  name: 'menu2',
  alt: 'menu2',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/menu2.svg'
}, {
  id: 'opinion2',
  name: 'opinion2',
  alt: 'opinion2',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/opinion2.svg'
}, {
  id: 'hold',
  name: 'hold',
  alt: 'hold',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/hold.svg'
}, {
  id: 'menu1',
  name: 'menu1',
  alt: 'menu1',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/menu1.svg'
}, {
  id: 'rating',
  name: 'rating',
  alt: 'rating',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/rating.svg'
}, {
  id: 'ribbon',
  name: 'ribbon',
  alt: 'ribbon',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/ribbon.svg'
}, {
  id: 'focus',
  name: 'focus',
  alt: 'focus',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/focus.svg'
}, {
  id: 'scan_black',
  name: 'scan_black',
  alt: 'scan_black',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/scan_black.svg'
}, {
  id: 'phone',
  name: 'phone',
  alt: 'phone',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/phone.svg'
}, {
  id: 'feedback_white',
  name: 'feedback_white',
  alt: 'feedback_white',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/feedback_white.svg'
}, {
  id: '2rounded',
  name: '2rounded',
  alt: '2rounded',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/2rounded.svg'
}, {
  id: 'arrows_top',
  name: 'arrows_top',
  alt: 'arrows_top',
  src: 'https://cdn.qrcodecreator.com/editor/stickers/arrows_top.svg'
}];