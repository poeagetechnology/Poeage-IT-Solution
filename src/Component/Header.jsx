import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "../Asset/Company_Logo2.png";
import Button from "../Component/ui/Button";

/* ---------------- DATA (REUSABLE) ---------------- */

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blogs", path: "/blogs" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" }
];

const servicesMenu = [
  { name: "Cybersecurity", path: "/services/security" },
  { name: "Cloud Infrastructure", path: "/services/cloud" },
  { name: "AI & Automation", path: "/services/ai" },
  { name: "IT Support", path: "/services/support" },
  { name: "Network Solutions", path: "/services/network" },
  { name: "Software Development", path: "/services/software" }
];

/* ---------------- NAV LINK ---------------- */

function NavLinkItem({ item, active }) {
  return (
    <Link
      to={item.path}
      className={`relative group transition ${
        active ? "text-[#1E6DE0]" : "text-gray-700"
      }`}
    >
      {item.name}

      <span
        className={`absolute left-0 -bottom-2 h-0.5 bg-[#1E6DE0] transition-all ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

/* ---------------- SERVICES DROPDOWN ---------------- */

function ServicesDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="cursor-pointer text-gray-700 hover:text-[#1CB7C8]">
        Services
      </span>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-8 left-0 w-64 bg-white border border-gray-200 shadow-xl rounded-xl p-4 space-y-3"
          >
            {servicesMenu.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-gray-700 hover:text-[#1CB7C8]"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- MOBILE DRAWER ---------------- */

function MobileDrawer({ open, setOpen }) {
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          <motion.div
            className="fixed top-0 left-0 h-full w-72 bg-white z-50 p-6"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
          >
            <div className="flex justify-between mb-6">
              <img src={Logo} className="h-10" alt="poeage" />
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <nav className="space-y-5">

              {menuItems.map((item) => {

                if (item.name === "Services") {
                  return (
                    <div key="services">
                      <button
                        onClick={() => setServiceOpen(!serviceOpen)}
                        className="flex justify-between w-full"
                      >
                        Services
                        {serviceOpen ? "-" : "+"}
                      </button>

                      {serviceOpen && (
                        <div className="pl-4 mt-3 space-y-2">
                          {servicesMenu.map((s) => (
                            <Link
                              key={s.name}
                              to={s.path}
                              onClick={() => setOpen(false)}
                              className="block text-gray-600 hover:text-[#1CB7C8]"
                            >
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                );

              })}

              <Button fullWidth className="mt-4">
                Get Proposal
              </Button>

            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ---------------- HEADER ---------------- */

export default function Header() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition ${
        scrolled ? "bg-white shadow-md border-b" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/">
          <img src={Logo} className="h-14" alt="Poeage IT Solutions" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10 text-sm font-medium">

          {menuItems.map((item) => {
            if (item.name === "Services") {
              return <ServicesDropdown key="services" />;
            }

            return (
              <NavLinkItem
                key={item.name}
                item={item}
                active={location.pathname === item.path}
              />
            );
          })}

        </nav>

        {/* CTA */}
        <div className="hidden md:flex gap-4 items-center">
          <Link to="/get-quote" className="text-gray-600 hover:text-[#1CB7C8]">
            Get Quote
          </Link>

          <Button size="sm">
            Get Proposal
          </Button>
        </div>

        {/* MOBILE BTN */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          ☰
        </button>

      </div>

      <MobileDrawer open={open} setOpen={setOpen} />
    </header>
  );
}