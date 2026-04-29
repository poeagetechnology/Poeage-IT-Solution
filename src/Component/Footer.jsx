import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

import logo from "../Asset/Company_Logo2.png";

/* -------- QUICK LINKS -------- */

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
  { label: "Why We Choose Us", path: "/why-choose" }
];

/* -------- SERVICES -------- */

const services = [
  "Cybersecurity",
  "Cloud Infrastructure",
  "AI & Automation",
  "IT Support (24/7)",
  "Network Solutions",
  "Software Development"
];

/* -------- ANIMATION -------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function Footer() {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    console.log("Newsletter:", email);
    setEmail("");
  };

  return (

    <footer className="relative bg-gradient-to-b from-black via-slate-900 to-black text-gray-300 pt-20 pb-10">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1E6DE0]/10 via-transparent to-[#5A2DDB]/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >

          {/* BRAND */}
          <motion.div variants={fadeUp}>

            <img src={logo} alt="Poeage Logo" className="h-16 mb-4" />

            <p className="text-sm text-gray-400 leading-relaxed">
              Poeage IT Solutions provides end-to-end IT infrastructure,
              cybersecurity, cloud, and automation services to help
              businesses scale securely and efficiently.
            </p>

            <div className="flex gap-4 mt-6">

              {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (

                <Link
                  key={i}
                  to="#"
                  className="p-2 rounded-md bg-white/5 border border-white/10 
                  hover:bg-[#1E6DE0] hover:shadow-[0_0_15px_rgba(30,109,224,0.5)] transition"
                >
                  <Icon size={18} />
                </Link>

              ))}

            </div>

          </motion.div>

          {/* QUICK LINKS */}
          <motion.div variants={fadeUp}>

            <h3 className="text-white font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">

              {quickLinks.map((link) => (

                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-[#1CB7C8] transition"
                  >
                    {link.label}
                  </Link>
                </li>

              ))}

            </ul>

          </motion.div>

          {/* SERVICES */}
          <motion.div variants={fadeUp}>

            <h3 className="text-white font-semibold mb-5">
              IT Services
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">

              {services.map((service, i) => (
                <li key={i} className="hover:text-[#1CB7C8] transition">
                  {service}
                </li>
              ))}

            </ul>

          </motion.div>

          {/* CONTACT */}
          <motion.div variants={fadeUp}>

            <h3 className="text-white font-semibold mb-5">
              Contact
            </h3>

            <ul className="space-y-4 text-sm text-gray-400 mb-6">

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#1CB7C8]" />
                +91 98765 43210
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#1CB7C8]" />
                contact@poeage.com
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#1CB7C8] mt-0.5" />
                Tamil Nadu, India
              </li>

            </ul>

            {/* NEWSLETTER */}
            <h4 className="text-white font-semibold mb-3">
              Newsletter
            </h4>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-black border border-white/10 text-sm focus:outline-none focus:border-[#1E6DE0]"
              />

              <button
                type="submit"
                className="w-full py-2 rounded-md text-white text-sm font-medium
                bg-gradient-to-r from-[#1E6DE0] to-[#5A2DDB]
                hover:opacity-90 transition"
              >
                Subscribe
              </button>

              <p className="text-xs text-gray-500">
                No spam. Only useful updates.
              </p>

            </form>

          </motion.div>

        </motion.div>

        {/* FOOTER */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Poeage IT Solutions. All rights reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">

            <Link to="/privacy" className="hover:text-[#1CB7C8]">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-[#1CB7C8]">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}