"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl bg-white/80 shadow-lg border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold tracking-wide text-blue-700">
          XII <span className="text-yellow-400">RPL</span>
        </Link> 

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-lg font-semibold text-blue-800">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Structure", "/structure"],
            // ["Contact", "/contact"],
          ].map(([label, link]) => (
            <Link
              key={label}
              href={link}
              className="relative group transition"
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* CTA Button */}
          <Link
            href="https://ppdb.smk17muncar.sch.id/"
            className="ml-4 bg-yellow-400 text-blue-900 px-5 py-2 rounded-xl shadow-md hover:bg-yellow-300 transition font-bold"
          >
            Join Us
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setOpen(!open)}
        >
          <span className={`w-7 h-0.5 bg-blue-900 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-7 h-0.5 bg-blue-900 transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
          <span className={`w-7 h-0.5 bg-blue-900 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl shadow-inner px-6 py-4 space-y-3 text-lg font-semibold text-blue-800">
          <Link href="/" className="block hover:text-yellow-500">Home</Link>
          <Link href="/about" className="block hover:text-yellow-500">About</Link>
          <Link href="/structure" className="block hover:text-yellow-500">Structure</Link>
          {/* <Link href="/contact" className="block hover:text-yellow-500">Contact</Link> */}

          {/* CTA Mobile */}
          <Link
            href="https://ppdb.smk17muncar.sch.id/"
            className="block bg-yellow-400 text-blue-900 px-5 py-2 rounded-xl shadow-md text-center hover:bg-yellow-300 transition font-bold"
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
