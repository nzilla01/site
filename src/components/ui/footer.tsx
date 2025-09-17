"use client";
import { FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

export default function Footer(){
  return (
    <footer className="bg-[#0d4c7f] text-[#F0FFFF] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Branding */}
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-black mb-4">Atrivix</h1>
          <p className="text-neutral-100 text-lg">
            Building brands, boosting presence, and managing growth. Your vision, our mission.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/services" className="hover:text-neutral-300 transition">Services</a></li>
            <li><a href="/about" className="hover:text-neutral-300 transition">About</a></li>
            <li><a href="/reviews" className="hover:text-neutral-300 transition">Reviews</a></li>
            <li><a href="/contact" className="hover:text-neutral-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p>Email: <a href="Okon.Nsikak01@gmail.com" className="hover:text-neutral-300 transition">Okon.Nsikak01@gmail.com</a></p>
          <p>Phone: <a href="tel: +2349162684499" className="hover:text-neutral-300 transition"> +2349162684499</a></p>
          <p className="mt-4">Follow us:</p>
          <div className="flex gap-4 mt-2 text-2xl">
            <a href="#" className="hover:text-neutral-300 transition"><FaGlobe /></a>
            <a href="https://x.com/Okonnsikak4" className="hover:text-neutral-300 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-neutral-300 transition"><FaInstagram /></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-400 mt-6 py-4 text-center text-sm text-neutral-200">
        &copy; {new Date().getFullYear()} Atrivix. All rights reserved.
      </div>
    </footer>
  );
}
