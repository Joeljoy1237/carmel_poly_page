import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const panels = [
  {
    title: "OUR INSPIRATION",
    description: "Carmel Polytechnic College was established in 1958 by Very Rev. Fr. Gilbert Palakunnel CMI, and is managed by CMI Fathers - a priestly order reputed for their contributions in the field of education and healthcare.",
    image: "/our_inspiration.png",
    link: "/about/history"
  },
  {
    title: "ADMISSIONS",
    description: "Once Admissions 2024-2025 (Regular / Lateral Entry) is officially announced and notified, applications will be invited for various courses for the academic year 2024-2025. Candidates can select from the...",
    image: "/admissions.png",
    link: "/admissions"
  },
  {
    title: "CAMPUS",
    description: "Situated 8 KM south of Alappuzha town by the side of NH 66, Carmel occupies a unique position in the field of technical education in the country. The management, by its bottom up approach encourages...",
    image: "/campus.png",
    link: "/campus"
  }
];

const FeaturePanels = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {panels.map((panel, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl group"
            >
              <div className="overflow-hidden h-48">
                <Image
                  src={panel.image}
                  alt={panel.title}
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="bg-carmel-primary bg-opacity-80 text-white py-4 px-6 text-center">
                <h3 className="text-lg font-semibold tracking-wide">{panel.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-700 mb-6">{panel.description}</p>
                <div className="flex justify-center">
                  <Link
                    href={panel.link}
                    className="inline-flex items-center gap-2 text-carmel-primary hover:underline font-medium transition"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturePanels;
