import React, { useState, createElement } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { DownloadIcon } from 'lucide-react';
import { StickerSelector, defaultStickers } from './components/StickerSelector';
import { ColorPicker } from './components/ColorPicker';
import { PatternSelector } from './components/PatternSelector';
import { LogoSelector } from './components/LogoSelector';
export function App() {
  const [url, setUrl] = useState('');
  const [selectedSticker, setSelectedSticker] = useState('none');
  const [qrColor, setQrColor] = useState('#000000');
  const [selectedBodyType, setSelectedBodyType] = useState('default');
  const [selectedEdgeType, setSelectedEdgeType] = useState('default');
  const [selectedLogo, setSelectedLogo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('STICKER');
  const tabs = ['STICKER', 'COLOR', 'SHAPES', 'LOGO'];
  const handleDownload = () => {
    const canvas = document.getElementById('qr-code') as HTMLCanvasElement;
    if (canvas) {
      const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'qrcode.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };
  const handleLogoSelect = (logoUrl: string | null) => {
    setSelectedLogo(logoUrl);
  };
  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = e => {
      if (e.target?.result) {
        setSelectedLogo(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };
  return <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Section 1: Transform Your Link */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <span className="bg-teal-100 text-teal-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  1
                </span>
                <h2 className="text-2xl font-semibold">
                  Transform Your Link into a QR Code
                </h2>
              </div>
              <div className="mt-4">
                <label className="block text-gray-500 mb-2">
                  Enter your website or page link
                </label>
                <input type="text" placeholder="https://www.yourwebsite.com" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" value={url} onChange={e => setUrl(e.target.value)} />
              </div>
            </div>
            {/* Section 2: Design QR Code */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <span className="bg-teal-100 text-teal-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  2
                </span>
                <h2 className="text-2xl font-semibold">
                  Design QR Code{' '}
                  <span className="text-gray-400 font-normal">(optional)</span>
                </h2>
              </div>
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex overflow-x-auto">
                  {tabs.map(tab => <button key={tab} className={`py-3 px-6 font-medium ${activeTab === tab ? 'border-b-2 border-yellow-400 text-gray-900' : 'text-gray-500'}`} onClick={() => setActiveTab(tab)}>
                      {tab}
                    </button>)}
                </div>
              </div>
              {/* Tab Content */}
              <div className="mt-4">
                {activeTab === 'STICKER' && <StickerSelector stickers={defaultStickers} selectedSticker={selectedSticker} onStickerSelect={setSelectedSticker} className="w-full" />}
                {activeTab === 'COLOR' && <div className="p-2">
                    
                    <ColorPicker value={qrColor} onChange={setQrColor} className="w-full" />
                  </div>}
                {activeTab === 'SHAPES' && <div className="p-2">
                    
                    <PatternSelector selectedBodyType={selectedBodyType} selectedEdgeType={selectedEdgeType} onBodyTypeChange={setSelectedBodyType} onEdgeTypeChange={setSelectedEdgeType} />
                  </div>}
                {activeTab === 'LOGO' && <div className="p-2">
                    
                    <LogoSelector onLogoSelect={handleLogoSelect} onFileUpload={handleFileUpload} />
                  </div>}
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm h-full flex flex-col">
              <div className="flex items-center mb-4">
                <span className="bg-teal-100 text-teal-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  3
                </span>
                <h2 className="text-2xl font-semibold">
                  Download your QR Code
                </h2>
              </div>
              <div className="flex-grow flex flex-col items-center justify-center">
                <div className="mb-8 p-4">
                  {url ? <QRCodeCanvas id="qr-code" value={url || 'https://example.com'} size={256} level="H" includeMargin={true} fgColor={qrColor} imageSettings={selectedLogo ? {
                  src: selectedLogo,
                  height: 60,
                  width: 60,
                  excavate: true
                } : undefined} /> : <div className="w-64 h-64 border-4 border-black relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-gray-400">QR Preview</p>
                      </div>
                    </div>}
                </div>
                <button onClick={handleDownload} disabled={!url} className={`flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full text-white font-medium ${url ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'}`}>
                  <DownloadIcon size={20} />
                  Download QR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}