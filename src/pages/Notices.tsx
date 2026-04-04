// ─── Notices ──────────────────────────────────────────────────────────────────
import React, { useState } from 'react';
import { ContentPage } from './About';
import { Eye, Download } from 'lucide-react';

interface NoticeItem {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  pdfFile: string;
  size?: string;
}

const KARYAKRAM_ITEMS: NoticeItem[] = [
  // कार्यक्रम - add real data here when available
];

const MAGIL_KARYAKRAM_ITEMS: NoticeItem[] = [
  // मागील कार्यक्रम - add real data here when available
];

const GHOSHNA_ITEMS: NoticeItem[] = [
  {
    title: "परिशिष्ट-8 (अ) (जिल्हा परिषदेच्या अंतिम विभागणीसाठी नमुना) जिल्हा परिषद अहिल्यानगर",
    description: "परिशिष्ट-8 (अ) (जिल्हा परिषदेच्या अंतिम विभागणीसाठी नमुना) जिल्हा परिषद अहिल्यानगर",
    startDate: "16/08/2025",
    endDate: "01/09/2026",
    pdfFile: "Parishist8A.pdf",
    size: "2 MB",
  },
];

const BHARTI_ITEMS: NoticeItem[] = [
  {
    title: "आरोग्य सेवक पुरुष 50 टक्के हंगामी क्षेत्र कर्मचारी व ईतर कर्मचारी मधून अतिरिक्त अंतिम निवड सूची क्र.2 प्रसिद्ध करणेबाबत.",
    description: "आरोग्य सेवक पुरुष 50 टक्के हंगामी क्षेत्र कर्मचारी व ईतर कर्मचारी मधून अतिरिक्त अंतिम निवड सूची क्र.2 प्रसिद्ध करणेबाबत.",
    startDate: "24/03/2026",
    endDate: "10/06/2026",
    pdfFile: "ArogyaSevak_NivadSuchi2.pdf",
    size: "305 KB",
  },
];

const NIVIDA_ITEMS: NoticeItem[] = [
  {
    title: "जिल्हा परिषद अहिल्यानगर आरोग्य विभाग जिल्हा परीक्षण केंद्र अहिल्यानगर करता प्रशिक्षण साहित्य,ऑफिस स्टेशनरी,छपाई व स्वच्छता साहित्य खरेदी करणेकामी अधिकृत दारपत्रके मागविण्याबाबत",
    description: "जिल्हा परिषद अहिल्यानगर आरोग्य विभाग जिल्हा परीक्षण केंद्र अहिल्यानगर करता प्रशिक्षण साहित्य,ऑफिस स्टेशनरी,छपाई व स्वच्छता साहित्य खरेदी करणेकामी अधिकृत दारपत्रके मागविण्याबाबत",
    startDate: "13/03/2026",
    endDate: "20/03/2026",
    pdfFile: "Nivida_ArogyaVibhag.pdf",
    size: "308 KB",
  },
];

const NOTICE_TABS = [
  { label: "कार्यक्रम",        items: KARYAKRAM_ITEMS },
  { label: "मागील कार्यक्रम",  items: MAGIL_KARYAKRAM_ITEMS },
  { label: "घोषणा (सामान्य)", items: GHOSHNA_ITEMS },
  { label: "भरती",             items: BHARTI_ITEMS },
  { label: "निविदा",           items: NIVIDA_ITEMS },
];

const NoticeTable = ({ items }: { items: NoticeItem[] }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400 text-sm font-medium border border-gray-200 rounded-xl bg-gray-50">
        कोणतीही सूचना उपलब्ध नाही.
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Table Header */}
      <div className="grid grid-cols-[1fr_auto_auto_auto_auto] bg-blue-900 text-white px-4 py-3 gap-4">
        <span className="text-sm font-bold">शीर्षक</span>
        <span className="text-sm font-bold text-center whitespace-nowrap">प्रारंभ तारीख</span>
        <span className="text-sm font-bold text-center whitespace-nowrap">समाप्ती तारीख</span>
        <span className="text-sm font-bold text-center whitespace-nowrap">पहा</span>
        <span className="text-sm font-bold text-center whitespace-nowrap">डाउनलोड</span>
      </div>

      {/* Table Rows */}
      {items.map((item, i) => (
        <div
          key={i}
          className={`grid grid-cols-[1fr_auto_auto_auto_auto] px-4 py-3 gap-4 items-start border-b border-gray-100 ${
            i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
          } hover:bg-blue-50 transition-colors`}
        >
          {/* Title + Description */}
          <div>
            <p className="text-sm font-semibold text-gray-800 leading-snug">{item.title}</p>
            {item.description && item.description !== item.title && (
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.description}</p>
            )}
          </div>

          {/* Start Date */}
          <span className="text-sm text-gray-600 whitespace-nowrap text-center pt-0.5">
            {item.startDate}
          </span>

          {/* End Date */}
          <span className="text-sm text-gray-600 whitespace-nowrap text-center pt-0.5">
            {item.endDate}
          </span>

          {/* View */}
          <a
            href={`/pdfs/${item.pdfFile}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium whitespace-nowrap justify-center pt-0.5"
          >
            पहा{item.size ? ` (${item.size})` : ''} <Eye size={14} />
          </a>

          {/* Download */}
          <a
            href={`/pdfs/${item.pdfFile}`}
            download={item.pdfFile}
            className="text-blue-600 hover:text-blue-800 flex justify-center pt-0.5"
            title="डाउनलोड करा"
          >
            <Download size={16} />
          </a>
        </div>
      ))}
    </div>
  );
};

export const Notices = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ContentPage title="सूचना">
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {NOTICE_TABS.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${
              activeTab === idx
                ? 'bg-blue-900 text-white border-blue-900'
                : 'bg-white text-gray-600 border-gray-300 hover:border-blue-900 hover:text-blue-900'
            }`}
          >
            {tab.label}
            {tab.items.length > 0 && (
              <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs font-bold ${
                activeTab === idx ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
              }`}>
                {tab.items.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Active tab content */}
      <NoticeTable items={NOTICE_TABS[activeTab].items} />
    </ContentPage>
  );
};