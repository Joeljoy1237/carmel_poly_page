import Link from 'next/link';
import React from 'react';
import {
  Mail,
  Handshake,
  GraduationCap,
  Building2,
  CalendarDays,
  Image as GalleryIcon,
} from 'lucide-react';

const quickLinks = [
  { icon: <Mail size={32} />, title: "CONTACT US", link: "/contact" },
  { icon: <Handshake size={32} />, title: "ADMISSIONS", link: "/admissions" },
  { icon: <GraduationCap size={32} />, title: "COURSES", link: "/academics/courses" },
  { icon: <Building2 size={32} />, title: "CAMPUS", link: "/campus" },
  { icon: <CalendarDays size={32} />, title: "EVENTS", link: "/events" },
  { icon: <GalleryIcon size={32} />, title: "GALLERY", link: "/gallery" },
];

const QuickAccess = () => {
  return (
    <section className="bg-carmel-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {quickLinks.map((item, index) => (
            <Link href={item.link} key={index} className="flex flex-col items-center group">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-blue-400 flex items-center justify-center text-white text-2xl md:text-3xl mb-2 transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <span className="text-white text-sm font-medium text-center">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
