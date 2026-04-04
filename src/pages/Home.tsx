import React from 'react';
import { motion } from 'framer-motion';
import { Bell, FileText, Users, Info, ExternalLink, Phone, ShieldAlert, HeartPulse, Flame, Siren } from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── Types (matching GpInformation structure) ───────────────────────────────
interface GpInfoType {
  GPNAME?: string;
  VILLAGE?: string;
  TALUKA?: string;
  DISTRICT?: string;
  STATE?: string;
}

interface HomeProps {
  /** Pass gpInfo from GpInformation's API response (res.data.data.gpInformation[0]) */
  gpInfo?: GpInfoType;
}

// ─── Static leader data (same as GpInformation.tsx leaders array) ────────────
const STATIC_LEADERS = [
  {
    name: "मा.ना.श्री. देवेंद्र फडणवीस",
    role: "मुख्यमंत्री, महाराष्ट्र राज्य",
    image: "https://cdnbbsr.s3waas.gov.in/s3e6c2dc3dee4a51dcec3a876aa2339a78/uploads/2024/12/20241226554268834.png",
  },
  {
    name: "मा.ना.श्री. एकनाथ शिंदे",
    role: "उपमुख्यमंत्री, महाराष्ट्र राज्य",
    image: "https://cdnbbsr.s3waas.gov.in/s3e6c2dc3dee4a51dcec3a876aa2339a78/uploads/2024/12/20241210519881483.jpeg",
  },
  {
    name: "मा.ना.श्रीमती. सुनेत्रा अजित पवार",
    role: "उपमुख्यमंत्री, महाराष्ट्र राज्य",
    image: "https://cdnbbsr.s3waas.gov.in/s3e6c2dc3dee4a51dcec3a876aa2339a78/uploads/2026/02/2026020373151347.jpg",
  },
  {
    name: "मा.ना.श्री. जयकुमार गोरे",
    role: "मंत्री, ग्रामविकास व पंचायतराज विभाग",
    image: "https://cdnbbsr.s3waas.gov.in/s3e6c2dc3dee4a51dcec3a876aa2339a78/uploads/2024/12/20241226862517803.png",
  },
  {
    name: "मा.ना.श्री. योगेश कदम",
    role: "राज्यमंत्री, ग्रामविकास व पंचायतराज विभाग",
    image: "https://cdnbbsr.s3waas.gov.in/s3e6c2dc3dee4a51dcec3a876aa2339a78/uploads/2024/12/202412271839437941.png",
  },
  {
    name: "मा.ना.श्री. एकनाथ डवले",
    role: "प्रधान सचिव, ग्रामविकास विभाग",
    image: "https://cdnbbsr.s3waas.gov.in/s3e6c2dc3dee4a51dcec3a876aa2339a78/uploads/2024/12/202412261951170016.png",
  },
  {
    name: "मा.ना.श्री.आनंद भंडारी  ( भा.प्र.से )",
    role: "मुख्य कार्यकारी अधिकारी , जिल्हा परिषद अहिल्यानगर",
    image: "https://cdnbbsr.s3waas.gov.in/s385b75d04f478d3841e38eb64aefdb05a/uploads/2025/07/20250728469510874.jpg",
  },
  {
    name: "मा.ना.श्री प्रविण अण्णासाहेब सिनारे",
    role: "गट विकास अधिकारी, संगमनेर",
    image: "https://cdnbbsr.s3waas.gov.in/s385b75d04f478d3841e38eb64aefdb05a/uploads/2025/08/20250801671286796.jpg",
  },
];

// ─── Emergency numbers ────────────────────────────────────────────────────────
const emergencyNumbers = [
  { name: "पोलीस",          number: "100",  icon: <ShieldAlert className="text-blue-600"   size={22} /> },
  { name: "रुग्णवाहिका",    number: "108",  icon: <HeartPulse  className="text-red-600"    size={22} /> },
  { name: "अग्निशमन दल",   number: "101",  icon: <Flame       className="text-orange-600" size={22} /> },
  { name: "महिला हेल्पलाइन", number: "1091", icon: <Siren      className="text-purple-600" size={22} /> },
];

// ─── Component ────────────────────────────────────────────────────────────────
export const Home: React.FC<HomeProps> = ({ gpInfo }) => {
  /**
   * Leaders array is built from the SAME static data used in GpInformation.tsx.
   * gpInfo is accepted as a prop so the parent (App / GpInformation) can pass
   * the live API data if needed for the banner heading / sub-text.
   */

  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero Banner ─────────────────────────────────────────────────────── */}
      <section className="relative h-[350px] md:h-[450px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1920"
          alt="Sangamner Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-gov/80 to-transparent flex items-center px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white max-w-xl"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                पंचायत समिती{gpInfo?.TALUKA ? ` ${gpInfo.TALUKA}` : " संगमनेर"} मध्ये आपले स्वागत आहे
              </h2>
              <div className="h-1 w-24 bg-orange-gov mb-6" />
              <p className="text-lg md:text-xl text-blue-50">
                ग्रामीण विकासासाठी कटिबद्ध, पारदर्शक आणि लोकाभिमुख प्रशासन.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Leaders Section — exact GpInformation.tsx design ───────────────── */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          {/* section title bar — same as campaignSectionTitle in GpInformation */}
          <div className="text-center mb-8">
            {/* <h2 className="text-2xl font-extrabold text-green-700">पंचायतराज नेतृत्व</h2> */}
            {/* <div className="flex items-center justify-center gap-3 mt-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400" />
            </div> */}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {STATIC_LEADERS.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="flex flex-col items-center gap-2"
              >
                {/* Gradient ring — exactly as in GpInformation leaders */}
                <div className="p-0.5 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-green-600 shadow-lg">
                  <div className="p-0.5 rounded-full bg-white">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-20 h-20 object-cover rounded-full"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          `https://via.placeholder.com/80x80?text=${encodeURIComponent(leader.name.charAt(0))}`;
                      }}
                    />
                  </div>
                </div>

                {/* Name */}
                <p className="text-sm font-bold text-gray-800 text-center leading-tight">{leader.name}</p>

                {/* Role badge */}
                <span className="text-center text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-200 px-3 py-0.5 rounded-full leading-tight">
                  {leader.role}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content Grid ─────────────────────────────────────────────────── */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left: Notices + Emergency */}
          <div className="lg:col-span-8 space-y-8">

            {/* Notices */}
            <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-blue-gov text-white px-6 py-3 flex justify-between items-center">
                <h3 className="font-bold flex items-center gap-2 text-sm">
                  <Bell size={18} /> ताज्या सूचना
                </h3>
                <Link
                  to="/notices"
                  className="text-[11px] bg-orange-gov px-2 py-1 rounded hover:bg-white hover:text-orange-gov transition-colors"
                >
                  सर्व पहा
                </Link>
              </div>
              <div className="p-2">
                <div className="h-[300px] overflow-y-auto custom-scrollbar">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="flex gap-4 items-start p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer group"
                    >
                      <div className="bg-orange-gov/10 text-orange-gov px-3 py-1 rounded text-center min-w-[65px] border border-orange-gov/20">
                        <span className="block text-lg font-bold leading-none">15</span>
                        <span className="text-[10px] font-bold uppercase">मार्च</span>
                      </div>
                      <div>
                        <h4 className="text-[14px] font-bold text-gray-800 group-hover:text-blue-gov">
                          ग्रामपंचायत निवडणूक २०२४ - मतदार यादी प्रसिद्धीबाबत.
                        </h4>
                        <p className="text-[11px] text-gray-500 mt-1 font-bold">
                          प्रकाशित दिनांक: १५ मार्च २०२४ | श्रेणी: घोषणा
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Emergency Numbers */}
            <div className="bg-white rounded shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold mb-6 text-blue-gov border-b border-orange-gov/20 pb-2 flex items-center gap-2">
                <ShieldAlert size={20} className="text-orange-gov" />
                आपत्कालीन संपर्क (Emergency Numbers)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {emergencyNumbers.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gray-50 rounded border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                  >
                    <div className="mb-2">{item.icon}</div>
                    <span className="text-xs font-bold text-gray-600 mb-1">{item.name}</span>
                    <span className="text-xl font-black text-blue-gov">{item.number}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Quick Links & Contact */}
          <div className="lg:col-span-4 space-y-6">

            {/* Important Links */}
            <div className="bg-white rounded shadow-sm border border-gray-200 p-6">
              <h3 className="text-md font-bold mb-4 text-blue-gov border-l-4 border-orange-gov pl-3">
                महत्वाचे दुवे
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'महाराष्ट्र शासन',         url: 'https://www.maharashtra.gov.in' },
                  { name: 'जिल्हा परिषद अहिल्यानगर',    url: 'https://nagarzp.gov.in' },
                  { name: 'आपले सरकार पोर्टल',        url: 'https://aaplesarkar.mahaonline.gov.in' },
                  { name: 'डिजिटल इंडिया',            url: 'https://www.digitalindia.gov.in' },
                  { name: 'महा-भूलेख',                url: 'https://mahabhulekh.maharashtra.gov.in' },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-100 hover:bg-orange-gov hover:text-white transition-all group"
                  >
                    <span className="text-sm font-medium">{link.name}</span>
                    <ExternalLink size={14} className="text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-blue-gov rounded shadow-sm p-6 text-white">
              <h3 className="text-md font-bold mb-4 border-b border-white/20 pb-2">
                आमच्याशी संपर्क साधा
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <Phone size={18} className="text-orange-gov shrink-0" />
                  <p>0241-2355219</p>
                </div>
                <div className="flex gap-3">
                  <Bell size={18} className="text-orange-gov shrink-0" />
                  <p>ceozp.ahmednagar@maharashtra.gov.in</p>
                </div>
              </div>
              <div className="mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60155.0274191319!2d74.1704245!3d19.575973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd001968875567%3A0x628468725916056!2sSangamner%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712123456789!5m2!1sen!2sin"
                  width="100%"
                  height="150"
                  className="rounded border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 text-blue-gov">महत्वाच्या सेवा</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'योजना',       icon: <FileText className="text-orange-gov" />, path: '/schemes/state' },
              { name: 'निर्देशिका', icon: <Users    className="text-blue-gov"   />, path: '/directory'      },
              { name: 'नागरी सेवा', icon: <Info     className="text-orange-gov" />, path: '/citizens/services' },
              { name: 'कागदपत्रे',  icon: <FileText className="text-blue-gov"   />, path: '/documents'      },
            ].map((service) => (
              <Link
                key={service.name}
                to={service.path}
                className="p-8 bg-gray-50 rounded border border-gray-100 hover:border-orange-gov transition-all group text-center"
              >
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform text-3xl">
                  {service.icon}
                </div>
                <h4 className="font-bold text-gray-800 text-sm">{service.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;