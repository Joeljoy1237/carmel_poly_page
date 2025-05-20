"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
// import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navItems = [
    { name: "Home", link: "/" },
    {
      name: "About Us",
      dropdown: [
        { name: "History", link: "/about/history" },
        { name: "Mission & Vision", link: "/about/mission" },
        { name: "Management", link: "/about/management" },
      ],
    },
    {
      name: "Admissions",
      link: "/admissions",
    },
    {
      name: "Departments",
      dropdown: [
        { name: "Computer Engineering", link: "/departments/computer" },
        { name: "Civil Engineering", link: "/departments/civil" },
        { name: "Mechanical Engineering", link: "/departments/mechanical" },
        { name: "Electrical & Electronics", link: "/departments/electrical" },
        { name: "Automobile Engineering", link: "/departments/automobile" },
        { name: "Electronics Engineering", link: "/departments/electronics" },
      ],
    },
    {
      name: "Campus",
      dropdown: [
        { name: "Facilities", link: "/campus/facilities" },
        { name: "Library", link: "/campus/library" },
        { name: "Hostel", link: "/campus/hostel" },
      ],
    },
    {
      name: "Library",
      dropdown: [
        { name: "E-Library", link: "/library/e-library" },
        { name: "Resources", link: "/library/resources" },
      ],
    },
    {
      name: "Fee",
      dropdown: [
        { name: "Fee Structure", link: "/fee/structure" },
        { name: "Scholarships", link: "/fee/scholarships" },
      ],
    },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-10">
      <div className="container mx-auto">
        {/* Main Navbar */}
        <div className="flex justify-between items-center px-4 py-3">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo_main.png" alt="Carmel Polytechnic Logo" width={100} height={100} className="h-15 w-auto" />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-carmel-dark uppercase">Carmel</span>
              <span className="font-bold text-lg text-carmel-dark uppercase">Polytechnic College</span>
              <span className="text-xs text-gray-500 uppercase">Punnapra · Alappuzha</span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="px-3 py-2 rounded hover:bg-carmel-light flex items-center text-gray-800 font-medium"
                  >
                    {item.name}
                    <ChevronDown size={18} className="ml-1" />
                  </button>
                ) : (
                  <Link
                    href={item.link || "#"}
                    className="px-3 py-2 rounded hover:bg-carmel-light text-gray-800 font-medium"
                  >
                    {item.name}
                  </Link>
                )}

                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute bg-white mt-1 py-2 shadow-lg rounded-md w-48 z-10">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.link}
                        className="block px-4 py-2 hover:bg-carmel-light text-gray-700"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-slide-in">
            {navItems.map((item) => (
              <div key={item.name} className="border-b">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full px-4 py-3 flex justify-between items-center text-gray-800"
                    >
                      {item.name}
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="bg-gray-50 pl-6">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.link}
                            className="block px-4 py-2 border-b border-gray-100 text-gray-700"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.link || "#"}
                    className="block px-4 py-3 text-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;