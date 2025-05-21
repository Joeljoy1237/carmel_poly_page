"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

const toggleDropdown = (name: string) => {
  setOpenDropdown((prev) => (prev === name ? null : name));
};

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenDropdown(null);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);


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
    { name: "Admissions", link: "/admissions" },
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
        {name:"Make Fee Payment",link:"https://paydirect.eduqfix.com/app/pDLKjv890e9C7JJO7lFy48t46jszRZdQNjam0ONL899cRUw51zOGe+TM23UqdJdi/6530"}
      ],
    },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
   <nav className="bg-white shadow-md sticky top-0 px-4 sm:px-6 md:px-10 z-50">
  <div className="container mx-auto px-2 sm:px-4">
    {/* Top Section */}
    <div className="flex justify-between items-center py-3 sm:py-4">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo_main.png"
          alt="Carmel Polytechnic Logo"
          width={60}
          height={60}
          className="h-12 w-auto sm:h-14 object-contain"
        />
        <div className="leading-tight">
          <h1 className="text-lg sm:text-xl font-bold text-carmel-dark uppercase">
            Carmel
          </h1>
          <h2 className="text-sm sm:text-md font-semibold text-carmel-dark uppercase">
            Polytechnic College
          </h2>
          <p className="text-xs text-gray-500 uppercase tracking-wide">
            Punnapra · Alappuzha
          </p>
        </div>
      </Link>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 focus:outline-none"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4" ref={dropdownRef}>
        {navItems.map((item) => (
          <div key={item.name} className="relative">
            {item.dropdown ? (
              <button
                onClick={() => toggleDropdown(item.name)}
                className="flex items-center gap-1 px-4 py-2 rounded-md font-semibold text-gray-700 hover:bg-carmel-light transition"
              >
                {item.name}
                <ChevronDown size={16} />
              </button>
            ) : (
              <Link
                href={item.link || "#"}
                className="px-4 py-2 rounded-md font-medium text-gray-700 hover:bg-carmel-light transition"
              >
                {item.name}
              </Link>
            )}

            {/* Dropdown Menu */}
            {item.dropdown && openDropdown === item.name && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-md w-52 z-20 animate-fade-in">
                {item.dropdown.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.name}
                    href={dropdownItem.link}
                    className="block px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
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

    {/* Mobile Dropdown Menu */}
    {isMenuOpen && (
  <div className="md:hidden border-t pt-3 bg-white shadow-md rounded-b-lg animate-slide-in">
    {navItems.map((item) => (
      <div key={item.name} className="border-b border-gray-200">
        {item.dropdown ? (
          <>
            <button
              onClick={() => toggleDropdown(item.name)}
              className="w-full px-4 py-3 flex justify-between items-center text-gray-800 font-medium hover:bg-gray-100 transition"
            >
              {item.name}
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  openDropdown === item.name ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === item.name && (
              <div className="bg-gray-50 px-4 py-2 space-y-1 animate-slide-in">
                {item.dropdown.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.name}
                    href={dropdownItem.link}
                    className="block px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-white transition"
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
            className="block px-4 py-3 text-gray-800 font-medium hover:bg-gray-100 transition"
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
