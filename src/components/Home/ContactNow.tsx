import Link from 'next/link';
import React from 'react';

const ContactNow = () => {
  return (
    <section className="bg-carmel-primary text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Contact us today to learn more about our programs, admission process, and how Carmel Polytechnic College can help shape your future.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <span className="inline-block bg-carmel-secondary hover:bg-carmel-secondary/90 text-white font-medium py-3 px-8 rounded-md transition">
              Contact Us
            </span>
          </Link>
          <Link href="/admissions/apply">
            <span className="inline-block border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md transition">
              Apply Now
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactNow;
