import React from 'react';
import Link from 'next/link';
import { MapPinned, Link as LinkIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-carmel-dark text-white">
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="mr-2"><LinkIcon /></span> Quick Links
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ul className="space-y-2">
                {[
                  ['About Us', '/about'],
                  ['Grievance Redressal Cell', '/grievance'],
                  ['Anti-Ragging Cell', '/anti-ragging'],
                  ['Internal Quality Assurance Cell (IQAC)', '/iqac'],
                  ['Internal Complaints Committee (ICC)', '/icc'],
                  ['SC/ST Monitoring Committee', '/sc-st'],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-carmel-light hover:text-white transition duration-150 ease-in-out"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2">
                {[
                  ['Mandatory Disclosure', '/disclosure'],
                  ['Extension of Approvals', '/approvals'],
                  ['AICTE Feedback for Students & Faculties', '/aicte-feedback'],
                  ['Carmel College of Engineering & Technology', '/tech'],
                  ['Admission Enquiry', '/admission-enquiry'],
                  ['Contact Us', '/contact'],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-carmel-light hover:text-white transition duration-150 ease-in-out"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="mr-2"><MapPinned /></span> Contact Address
            </h3>
            <div className="space-y-2 text-sm text-carmel-light leading-relaxed">
              <p className="font-semibold text-white">Carmel Polytechnic College</p>
              <p>Punnapra, Alappuzha - 688 004, Kerala, India.</p>
              <p><span className="font-medium">Phone (Office):</span> 0477 2287 825</p>
              <p><span className="font-medium">Phone (Self Financing):</span> 0477 2288 825</p>
              <p><span className="font-medium">Admission Cell:</span> 80783 25976</p>
              <p><span className="font-medium">Fax:</span> 0477 2286 048</p>
              <p><span className="font-medium">Email:</span> <a href="mailto:info@carmelpoly.in" className="underline hover:text-white">info@carmelpoly.in</a></p>
            </div>
          </div>
        </div>

        {/* Divider and bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-carmel-light">
          <p>
            © {new Date().getFullYear()} Carmel Polytechnic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
