import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaVimeoV } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialApps = [
    { icon: FaFacebook, appLink: "#" },
    { icon: FaInstagram, appLink: "#" },
    { icon: FaXTwitter, appLink: "#" },
    { icon: FaTelegram, appLink: "#" },
    { icon: FaVimeoV, appLink: "#" },
  ];

  return (
    <footer className="px-6 md:px-20 py-12 bg-gradient-to-t from-[#FFFDF8] to-[#F7F3E9] text-[#3B3A2F]">
      
      {/* ===== TOP Section ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

        {/* Brand Info */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-wider">
            <span className="text-[#C9A54A]">Golden</span>
            <span className="text-[#B97B3C] font-serif">Roots</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Bringing you the finest natural and organic products — from pure Desi ghee to premium dry fruits and herbs. Taste the essence of nature!
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            {socialApps.map((item, index) => (
              <a
                key={index}
                href={item.appLink}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#B97B3C] hover:bg-[#C9A54A] hover:scale-110 transition-all duration-300"
              >
                <item.icon className="text-white text-lg" />
              </a>
            ))}
          </div>
        </div>

        {/* Menu Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#3B3A2F] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Products", "Contact", "Blog"].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-[#C9A54A] transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-[#3B3A2F] mb-4">Contact Us</h3>
          <p className="text-sm">+92 300 1234567</p>
          <p className="text-sm">info@goldenroots.com</p>
          <p className="text-sm mt-2">123 Organic Lane, Lahore, Pakistan</p>
        </div>

        {/* Newsletter or Languages */}
        <div>
          <h3 className="text-xl font-semibold text-[#3B3A2F] mb-4">Languages</h3>
          <div className="flex gap-4 text-sm">
            {["En", "Ur"].map((lang) => (
              <p
                key={lang}
                className="cursor-pointer hover:text-[#C9A54A] transition-colors"
              >
                {lang}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center border-t border-[#C9A54A]/20 mt-10 pt-6 text-sm">
        <p>© {currentYear} Golden Roots. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
