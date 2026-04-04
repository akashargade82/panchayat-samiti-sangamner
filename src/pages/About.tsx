import React from 'react';

interface PageProps {
  title: string;
  publishedDate?: string;
  children: React.ReactNode;
}

export const ContentPage = ({ title, publishedDate, children }: PageProps) => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-8 border-b-2 border-orange-gov/20 pb-4">
        <h2 className="text-3xl font-bold text-blue-gov mb-2">{title}</h2>
        {publishedDate && (
          <p className="text-sm text-gray-500 font-bold">प्रकाशित दिनांक: {publishedDate}</p>
        )}
      </div>
      <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export const Introduction = () => (
  <ContentPage title="प्रस्तावना" publishedDate="१५ मार्च २०२४">
    <p className="mb-4">
     महाराष्ट्रामध्ये जिल्हा परिषद, पंचायत समिती, ग्रामपंचायत ही त्रिस्तरीय व्यवस्था अस्तित्वात येण्यापुर्वी ग्रामिण भागाच्या कामकाजासाठी लोकल बोर्ड ही संस्था काम पाहत होती. महाराष्ट्रामध्ये दि. ०१ मे १९६० या शुभदिनी तत्कालीन पंतप्रधान मा.पंडीत जवाहरलाल नेहरु यांच्या प्रमुख अध्यक्षतेखाली व तत्कालीन महाराष्ट्राचे पहिले मुख्यमंत्री मा. यशवंतरावजी चव्हाण यांचे प्रमुख उपस्थितीत जिल्हा परिषदांची स्थापना करण्यात आली.
    </p>
    <p className="mb-4">
    पंचायत समिती संगमनेर जिल्हा परिषदेची स्थापना दि. ०२ मे १९६२ रोजी झाली आहे. मा.अध्यक्ष व मा. उपाध्यक्ष व पदाधिकारी यांची दि. १२ ऑगस्ट १९६२ रोजी निवड होऊन जिल्हा परिषद अस्तित्वात आली.
    </p>
    <p>
    महाराष्ट्रातील ग्रामिण भागाचे सर्वांगीण विकासासाठी त्रिस्तरीय पद्धतीची लोकनियुक्त प्रशासकिय संस्था कायद्याने अस्तित्वात आली. या संस्थेचे काम नियमानुसार होण्यासाठी विधानसभेत कायदा करण्यात आला. जिल्हा परिषद व पंचायत समितीचे कामकाज जिल्हा परिषद व पंचायत समिती अधिनियम १९६१ व ग्रामपंचीयतीचे कामकाज मुंबई ग्रामपंचायत अधिनियम १९५८ अन्वये चालते.
    </p>
  </ContentPage>
);

export const VisionMission = () => (
  <ContentPage title="दृष्टी आणि ध्येय" publishedDate="१५ मार्च २०२४">
    <h2 className="text-xl font-bold mb-4">दृष्टी आणि ध्येय</h2>
    <ul className="list-disc pl-6 space-y-2 mb-8">
      <li>पंचायत समिती संगमनेर ग्रामीण क्षेत्रामध्ये मुलभुत सुविधा उपलब्ध होण्यासाठी तसेच स्वच्छ, सुंदर, व हरित ग्राम तयार करण्यासाठी विविध उपक्रम राबविणे.</li>
      <li>विविध बचत गट तसेच महाराष्ट्र राज्य ग्रामीण जीवनोन्नती अभियानाद्वारे ग्रामस्थांचे जीवनमान उंचावण्यासाठी उपक्रम चालविणे.</li>
      <li>विविध घरकुल योजनेअंतर्गत निवारा व निवारा विषयक सुविधा पुरविणे.</li>
      <li>प्रशिक्षणातून विकास कार्यक्रमांतर्गत लोक प्रतिनिधींचे सक्षमीकरणाद्वारे पंचायती राज व्यवस्था बळकट करणे.</li>
      
    </ul>
   
  </ContentPage>
);

export const ObjectivesFunctions = () => (
  <ContentPage title="उद्दिष्टे आणि कार्ये" publishedDate="१५ मार्च २०२४">
    <h2 className="mb-3 font-bold text-2xl">
      उद्दिष्टे
    </h2>
    <p className="text-gray-500 mb-3">पंचायत समिती संगमनेर ग्रामीण क्षेत्रामध्ये मुलभुत सुविधा उपलब्ध होण्यासाठी तसेच स्वच्छ, सुंदर, व हरित ग्राम तयार करण्यासाठी विविध उपक्रम राबवविणे, विविध बचत गट तसेच महाराष्ट्र राज्य ग्रामीण जीवनोन्नती अभियानाद्वारे ग्रामस्थांचे जीवनमान उंचावण्यासाठी उपक्रम चालविणे, विविध घरकुल योजनेअंतर्गत निवारा व निवारा विषयक सुविधा पुरविणे, प्रशिक्षणातून विकास या कार्यक्रमांतर्गत लोक प्रतिनिधींचे सक्षमीकरण याद्वारे पंचायती राज व्यवस्था बळकट करणे हे या संस्थेचे प्रमुख उद्दीष्ट आहे.</p>
    <h2 className="mb-3 font-bold text-2xl">
     मुख्य कार्ये:
    </h2>
    <ul className="list-decimal pl-6 space-y-3">
      <li>तालुक्यातील ग्रामपंचायतींच्या कामावर देखरेख आणि नियंत्रण ठेवणे.</li>
      <li>कृषी विकासासाठी नवनवीन तंत्रज्ञान आणि योजना राबवणे.</li>
      <li>प्राथमिक शिक्षण आणि आरोग्य सेवांचा दर्जा सुधारणे.</li>
      <li>स्वच्छ भारत अभियानांतर्गत स्वच्छता आणि सांडपाणी व्यवस्थापन करणे.</li>
      <li>महिला व बालकल्याण विभागामार्फत विविध उपक्रम राबवणे.</li>
    </ul>
  </ContentPage>
);

export const AdminStructure = () => (
  <ContentPage title="प्रशासकीय रचना" publishedDate="१५ मार्च २०२४">
    <div className="bg-gray-50 p-8 rounded-xl border-2 border-dashed border-gray-200 text-center">
      <div className="w-full max-w-2xl mx-auto bg-white p-4 shadow-sm rounded border">
        <img
          src="https://cdnbbsr.s3waas.gov.in/s385b75d04f478d3841e38eb64aefdb05a/uploads/2025/04/2025100843607430-2048x690.png"
          alt="Structure"
          className="w-full h-auto"
        />
      </div>
    </div>
  </ContentPage>
);

export const Organizations = () => (
  <ContentPage title="संस्था">
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-bold mb-4">अ) संलग्न कार्यालये</h2>
        <p className="p-4 bg-red-50 text-red-700 rounded border border-red-100">उपलब्ध नाही </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4">ब) संचालनालय/आयुक्तालय</h2>
        <p className="p-4 bg-red-50 text-red-700 rounded border border-red-100">उपलब्ध नाही </p>
      </section>
    </div>
  </ContentPage>
);

export const WhosWho = () => (
  <ContentPage title="कोणाचे कोण">
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-200">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="border p-3 text-left">नाव</th>
            <th className="border p-3 text-left">ईमेल</th>
            <th className="border p-3 text-left">पत्ता</th>
            <th className="border p-3 text-left">फोन</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50 whitespace-nowrap">
            <td className="border p-3 font-medium">श्री. आनंद भंडारी</td>
            <td className="border p-3 text-blue-600">ceozp[dot]ahmednagar[at]maharashtra[dot]gov[dot]in</td>
            <td className="border p-3 text-sm">जिल्हा परिषद नवीन प्रशासकीय इमारत, दुसरा मजला, माळीवाडा एस.टी. स्टॅंड समोर, पंचायत समिती संगमनेर - 422605</td>
            <td className="border p-3">02412355219</td>
          </tr>
        </tbody>
      </table>
    </div>
  </ContentPage>
);
