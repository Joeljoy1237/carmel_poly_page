"use client";
import HeroCarousel from "@/components/Home/Carosel";
import ContactNow from "@/components/Home/ContactNow";
import CourseHighlights from "@/components/Home/CourseHighlight";
import FeaturePanels from "@/components/Home/FeaturesPanel";
import QuickAccess from "@/components/Home/QuickAccess";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup when component mounts
    setShowPopup(true);
  }, []);

  useEffect(() => {
    // Prevent body scroll when popup is shown
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup when component unmounts or popup closes
    return () => {
      document.body.style.overflow = '';
    };
  }, [showPopup]);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-10 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-lg overflow-hidden w-[90vw] md:w-[50vw] relative shadow-xl">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
            >
              &times;
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-1/2 w-full h-48 md:h-auto">
                <Image
                  src="/slide_002.png"
                  alt="B.Tech Admissions 2025"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 w-full p-6">
                <h2 className="text-2xl font-bold text-center mb-4 text-blue-800">
                  Diploma Admissions 2025
                </h2>

                <div className="mb-6">
                  <p className="font-semibold mb-3 text-gray-700">
                    Contact &gt;&gt;
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:8078325976"
                      className="block hover:text-blue-600 transition-colors"
                    >
                      80783 25976
                    </a>
                    <a
                      href="tel:04772288825"
                      className="block hover:text-blue-600 transition-colors"
                    >
                      0477 2288 825
                    </a>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <a
                    href="https://admissions.carmelpoly.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all shadow-md hover:shadow-lg"
                  >
                    For Registration: CLICK HERE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <HeroCarousel />
      <FeaturePanels />
      <CourseHighlights />
      <QuickAccess />
      <ContactNow />
    </>
  );
};

export default Home;
