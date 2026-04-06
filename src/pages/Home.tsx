import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bell, FileText, Users, Info, ExternalLink, Phone, ShieldAlert, HeartPulse, Flame, Siren } from 'lucide-react';
import { Link } from 'react-router-dom';
import bdoImage from '../images/bdo.jpeg';

// ─── Types ───────────────────────────────────────────────────────────────────
interface GpInfoType {
  GPNAME?: string;
  VILLAGE?: string;
  TALUKA?: string;
  DISTRICT?: string;
  STATE?: string;
}

interface HomeProps {
  gpInfo?: GpInfoType;
}

// ─── Notices ─────────────────────────────────────────────────────────────────
export const notices = [
  { id: 1, date: "१५", month: "मार्च",      title: "ग्रामपंचायत निवडणूक २०२४ - मतदार यादी प्रसिद्धीबाबत.",            published: "१५ मार्च २०२४",      category: "घोषणा",  pdf: "/pdfs/notice1.pdf" },
  { id: 2, date: "१०", month: "मार्च",      title: "आरोग्य विभाग – साहित्य खरेदी दरपत्रक सूचना",                      published: "१० मार्च २०२४",      category: "निविदा", pdf: "/pdfs/notice2.pdf" },
  { id: 3, date: "०५", month: "मार्च",      title: "स्वच्छ भारत अभियान अंतर्गत गाव स्वच्छता उपक्रमाबाबत सूचना",       published: "०५ मार्च २०२४",      category: "सूचना",  pdf: "/pdfs/notice3.pdf" },
  { id: 4, date: "२८", month: "फेब्रुवारी", title: "पाणीपुरवठा विभाग – दुरुस्ती व देखभाल कामाबाबत माहिती",            published: "२८ फेब्रुवारी २०२४", category: "सूचना",  pdf: "/pdfs/notice4.pdf" },
  { id: 5, date: "२०", month: "फेब्रुवारी", title: "महात्मा गांधी रोजगार हमी योजना अंतर्गत कामे सुरू करण्याबाबत",    published: "२० फेब्रुवारी २०२४", category: "योजना",  pdf: "/pdfs/notice5.pdf" },
  { id: 6, date: "१२", month: "फेब्रुवारी", title: "शाळा पोषण आहार योजनेबाबत आवश्यक सूचना",                          published: "१२ फेब्रुवारी २०२४", category: "घोषणा",  pdf: "/pdfs/notice6.pdf" },
];

// ─── Leaders ──────────────────────────────────────────────────────────────────
const STATIC_LEADERS = [
  { name: "मा.ना.श्री. देवेंद्र फडणवीस",          role: "मुख्यमंत्री, महाराष्ट्र राज्य",                              image: "https://cdnbbsr.s3waas.gov.in/s3e6c2dc3dee4a51dcec3a876aa2339a78/uploads/2024/12/20241226554268834.png" },
  { name: "मा.ना.श्री. एकनाथ शिंदे",              role: "उपमुख्यमंत्री, महाराष्ट्र राज्य",                            image: "https://cdnbbsr.s3waas.gov.in/s3e6c2dc3dee4a51dcec3a876aa2339a78/uploads/2024/12/20241210519881483.jpeg" },
  { name: "मा.ना.श्रीमती. सुनेत्रा अजित पवार",    role: "उपमुख्यमंत्री, महाराष्ट्र राज्य",                            image: "https://cdnbbsr.s3waas.gov.in/s3e6c2dc3dee4a51dcec3a876aa2339a78/uploads/2026/02/2026020373151347.jpg" },
  { name: "मा.ना.श्री. जयकुमार गोरे",             role: "मंत्री, ग्रामविकास व पंचायतराज विभाग",                       image: "https://cdnbbsr.s3waas.gov.in/s3e6c2dc3dee4a51dcec3a876aa2339a78/uploads/2024/12/20241226862517803.png" },
  { name: "मा.ना.श्री. योगेश कदम",               role: "राज्यमंत्री, ग्रामविकास व पंचायतराज विभाग",                  image: "https://cdnbbsr.s3waas.gov.in/s3e6c2dc3dee4a51dcec3a876aa2339a78/uploads/2024/12/202412271839437941.png" },
  { name: "मा.ना.श्री. एकनाथ डवले",              role: "प्रधान सचिव, ग्रामविकास विभाग",                              image: "https://cdnbbsr.s3waas.gov.in/s3e6c2dc3dee4a51dcec3a876aa2339a78/uploads/2024/12/202412261951170016.png" },
  { name: "मा.ना.श्री.आनंद भंडारी ( भा.प्र.से )", role: "मुख्य कार्यकारी अधिकारी , जिल्हा परिषद अहिल्यानगर",         image: "https://cdnbbsr.s3waas.gov.in/s385b75d04f478d3841e38eb64aefdb05a/uploads/2025/07/20250728469510874.jpg" },
  { name: "मा.ना.श्री प्रविण अण्णासाहेब सिनारे",  role: "गट विकास अधिकारी, संगमनेर",                                  image: bdoImage },
];

// ─── Banner Slides — component bahar, sirf data (hooks nahi) ─────────────────
const bannerSlides = [
  {
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepifp9GbqHRIZDE8N5eUEKVGxMi8w7uN02F5RYCuHZThQD6Z-cOtGJiS1kbDQsseiauBd0DzbnEtRI5OBxMucLq7PwLJ8sQuMry3aRytCh8YEgkO2e1w7k2CtovIIYuvf8zxHk4MA=w1920-h1440",
    title: "खंडगाव, संगमनेर",
    subtitle: "निसर्गरम्य ग्रामीण परिसर",
  },
  {
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoU2AFPeHxP7GBdXX81WFwlBAE7xN8DR3yOIXUVeOb_maDLZtZFvC-r6vmkEAMQKw_WhEPFHkWLfF5kBFQBJE76SQzLOiKFBm8ank2zRtJdN7CaW7Ma-pEnnSedrErBj20mDahx=w1920-h1080",
    title: "श्री रामेश्वर मंदिर, धांदरफळ",
    subtitle: "प्राचीन धार्मिक वारसा",
  },
  {
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqNXwvHyPQnRZGvQ5nhIcNNMG5wf-0gGxC8bgf_Hvan44J_EFzxH5Ntpyb7b33eecNbfzBlWhnQtI9gCxLBpL6zve1ZxI7VtrtdXN_gjHxJSpLHjLNyqIk3J6EenyzFN14mVLE=w1920-h1262",
    title: "मारुती मंदिर, पेमगिरी",
    subtitle: "आस्था व श्रद्धेचे केंद्र",
  },
];

// ─── Emergency Numbers ────────────────────────────────────────────────────────
const emergencyNumbers = [
  { name: "पोलीस",           number: "100",  icon: <ShieldAlert className="text-blue-600"   size={22} /> },
  { name: "रुग्णवाहिका",     number: "108",  icon: <HeartPulse  className="text-red-600"    size={22} /> },
  { name: "अग्निशमन दल",    number: "101",  icon: <Flame       className="text-orange-600" size={22} /> },
  { name: "महिला हेल्पलाइन", number: "1091", icon: <Siren       className="text-purple-600" size={22} /> },
];

// ─── Component ────────────────────────────────────────────────────────────────
export const Home: React.FC<HomeProps> = ({ gpInfo }) => {

  // ✅ Hooks ANDAR hain — yahi fix hai
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero Banner with Slideshow ──────────────────────────────────────── */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden mt-4">

        {bannerSlides.map((slide, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: idx === currentSlide ? 1 : 0 }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-contain object-center"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-blue-gov/80 to-transparent flex items-center px-4">
          <div className="container mx-auto">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white max-w-xl"
            >
              {/* <h2 className="text-3xl md:text-5xl font-bold mb-2 leading-tight">
                पंचायत समिती{gpInfo?.TALUKA ? ` ${gpInfo.TALUKA}` : " संगमनेर"} मध्ये आपले स्वागत आहे
              </h2> */}
              {/* <p className="text-xl font-semibold text-orange-300 mb-2">
                {bannerSlides[currentSlide].title}
              </p>
              <div className="h-1 w-24 bg-orange-gov mb-4" />
              <p className="text-lg text-blue-50">
                {bannerSlides[currentSlide].subtitle}
              </p> */}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {bannerSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-orange-gov scale-125' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── Leaders Section ──────────────────────────────────────────────────── */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {STATIC_LEADERS.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="flex flex-col items-center gap-2"
              >
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
                <p className="text-sm font-bold text-gray-800 text-center leading-tight">{leader.name}</p>
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

          <div className="lg:col-span-8 space-y-8">

            {/* Notices */}
            <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-blue-gov text-white px-6 py-3 flex justify-between items-center">
                <h3 className="font-bold flex items-center gap-2 text-sm">
                  <Bell size={18} /> सूचना
                </h3>
              </div>
              <div className="p-2">
                <div className="h-[300px] overflow-y-auto custom-scrollbar">
                  {notices.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 items-start p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer group"
                    >
                      <div className="bg-orange-gov/10 text-orange-gov px-3 py-1 rounded text-center min-w-[65px] border border-orange-gov/20">
                        <span className="block text-lg font-bold leading-none">{item.date}</span>
                        <span className="text-[10px] font-bold uppercase">{item.month}</span>
                      </div>
                      <div>
                        <h4 className="text-[14px] font-bold text-gray-800 group-hover:text-blue-gov">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-gray-500 mt-1 font-bold">
                          प्रकाशित दिनांक: {item.published} | श्रेणी: {item.category}
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

            <div className="bg-white rounded shadow-sm border border-gray-200 p-6">
              <h3 className="text-md font-bold mb-4 text-blue-gov border-l-4 border-orange-gov pl-3">
                महत्वाचे दुवे
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'महाराष्ट्र शासन',                    url: 'https://www.maharashtra.gov.in' },
                  { name: 'जिल्हा परिषद पंचायत समिती संगमनेर', url: 'https://sangamnerps.netlify.app/' },
                  { name: 'आपले सरकार पोर्टल',                  url: 'https://aaplesarkar.mahaonline.gov.in' },
                  { name: 'डिजिटल इंडिया',                      url: 'https://www.digitalindia.gov.in' },
                  { name: 'महा-भूलेख',                          url: 'https://mahabhulekh.maharashtra.gov.in' },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-100 hover:bg-orange-gov hover:text-orange-500 transition-all group"
                  >
                    <span className="text-sm font-medium">{link.name}</span>
                    <ExternalLink size={14} className="text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

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
                  <p>bdosangamner@rediffmail.com</p>
                </div>
              </div>
              <div className="mt-6">
                <iframe
                  src="https://maps.google.com/maps?q=19.5744681,74.2201134&output=embed"
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
              { name: 'योजना',       icon: <FileText className="text-orange-gov" />, path: '/admin-depts/ps' },
              { name: 'निर्देशिका', icon: <Users    className="text-blue-gov"   />, path: '/directory' },
              { name: 'नागरी सेवा', icon: <Info     className="text-orange-gov" />, path: '/citizens/services' },
              { name: 'कागदपत्रे',  icon: <FileText className="text-blue-gov"   />, path: '/documents' },
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