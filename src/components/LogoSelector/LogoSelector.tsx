import React, { useState } from 'react';
import { Upload } from 'lucide-react';
interface LogoSelectorProps {
  onLogoSelect?: (logoUrl: string | null) => void;
  onFileUpload?: (file: File) => void;
  'data-id'?: string;
}
interface Logo {
  id: string;
  src: string;
  alt: string;
}
const logos: Logo[] = [{
  id: 'none',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/none.svg?v=0.1',
  alt: 'none.svg'
}, {
  id: 'scan-me-focused',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/scan-me-focused.svg?v=0.1',
  alt: 'scan-me-focused.svg'
}, {
  id: 'scan-me-simple',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/scan-me-simple.svg?v=0.1',
  alt: 'scan-me-simple.svg'
}, {
  id: 'scan-me-rounded',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/scan-me-rounded.svg?v=0.1',
  alt: 'scan-me-rounded.svg'
}, {
  id: 'scan-me-italic',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/scan-me-italic.svg?v=0.1',
  alt: 'scan-me-italic.svg'
}, {
  id: 'rating',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/rating.svg?v=0.1',
  alt: 'rating.svg'
}, {
  id: 'business',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/business.svg?v=0.1',
  alt: 'business.svg'
}, {
  id: 'vcard',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/vcard.svg?v=0.1',
  alt: 'vcard.svg'
}, {
  id: 'pdf',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/pdf.svg?v=0.1',
  alt: 'pdf.svg'
}, {
  id: 'percent',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/percent.svg?v=0.1',
  alt: 'percent.svg'
}, {
  id: 'facebook',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/facebook.svg?v=0.1',
  alt: 'facebook.svg'
}, {
  id: 'instagram',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/instagram.svg?v=0.1',
  alt: 'instagram.svg'
}, {
  id: 'linkedin',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/linkedin.svg?v=0.1',
  alt: 'linkedin.svg'
}, {
  id: 'x',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/x.svg?v=0.1',
  alt: 'x.svg'
}, {
  id: 'youtube',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/youtube.svg?v=0.1',
  alt: 'youtube.svg'
}, {
  id: 'tiktok',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/tiktok.svg?v=0.1',
  alt: 'tiktok.svg'
}, {
  id: 'pinterest',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/pinterest.svg?v=0.1',
  alt: 'pinterest.svg'
}, {
  id: 'app-store',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/app-store.svg?v=0.1',
  alt: 'app-store.svg'
}, {
  id: 'gmail',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/gmail.svg?v=0.1',
  alt: 'gmail.svg'
}, {
  id: 'behance',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/behance.svg?v=0.1',
  alt: 'behance.svg'
}, {
  id: 'wifi',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/wifi.svg?v=0.1',
  alt: 'wifi.svg'
}, {
  id: 'power-point',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/power-point.svg?v=0.1',
  alt: 'power-point.svg'
}, {
  id: 'spotify',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/spotify.svg?v=0.1',
  alt: 'spotify.svg'
}, {
  id: 'pdf-icon',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/pdf-icon.svg?v=0.1',
  alt: 'pdf-icon.svg'
}, {
  id: 'dribble',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/dribble.svg?v=0.1',
  alt: 'dribble.svg'
}, {
  id: 'bitcoin',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/bitcoin.svg?v=0.1',
  alt: 'bitcoin.svg'
}, {
  id: 'threads',
  src: 'https://api.qrcodecreator.com/resources/images/brand-logos/threads.svg?v=0.1',
  alt: 'threads.svg'
}];
export function LogoSelector({
  onLogoSelect,
  onFileUpload,
  'data-id': dataId
}: LogoSelectorProps) {
  const [selectedLogo, setSelectedLogo] = useState('none');
  const handleLogoSelect = (logoId: string) => {
    setSelectedLogo(logoId);
    const logo = logos.find(l => l.id === logoId);
    onLogoSelect?.(logo?.src || null);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onFileUpload) {
      onFileUpload(file);
    }
  };
  return <div className="w-full max-w-3xl bg-white text-gray-800 text-sm leading-5" data-id={dataId}>
      <div>
        <div className="relative flex flex-col">
          {/* Logo Grid */}
          <div className="flex flex-wrap gap-3 h-36 overflow-auto pt-1">
            {logos.map(logo => <button key={logo.id} onClick={() => handleLogoSelect(logo.id)} className={`
                  w-14 h-14 flex items-center justify-center bg-white rounded border-2 p-0
                  ${selectedLogo === logo.id ? 'border-green-600 cursor-default' : 'border-gray-200 cursor-pointer hover:border-gray-300'}
                `} disabled={selectedLogo === logo.id}>
                <img src={logo.src} alt={logo.alt} className="w-8 h-8 object-contain" />
              </button>)}
          </div>
          {/* File Upload Area */}
          <div className="w-full h-13 min-h-13 flex relative items-center border-2 border-dashed border-green-600 rounded-md px-4 mt-1">
            <div className="flex items-center relative">
              <label htmlFor="logo-upload" className="mx-2 text-sm font-semibold text-green-600 flex items-center gap-2 cursor-pointer">
                <Upload className="w-4 h-4 text-green-600" />
                <div className="flex flex-wrap gap-2">
                  <span>Drag & drop or click to upload a logo</span>
                  <div>
                    <span className="text-xs font-normal text-gray-500">
                      Supported file formats: JPG, JPEG, or PNG | 2MB max
                    </span>
                  </div>
                </div>
              </label>
              <input type="file" id="logo-upload" name="logo" accept=".png,.svg,.jpg,.jpeg" onChange={handleFileChange} className="absolute opacity-0 z-10 left-0 w-full h-4 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>;
}