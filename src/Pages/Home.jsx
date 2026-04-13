import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Server,
  Shield,
  Cloud,
  Cpu,
  Network,
  Headphones,
  Database,
  Code,
  Star,
  CheckCircle
} from "lucide-react";

import Button from "../Component/ui/Button";
import Card from "../Component/ui/Card";
import Badge from "../Component/ui/Badge";
import homevideo from "../Asset/homevideo.mp4";

/* ---------------- ANIMATION ---------------- */

const container = {
  show: { transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

/* ---------------- DATA ---------------- */

const services = [
  {
    icon: <Shield className="text-red-500" />,
    title: "Cybersecurity",
    desc: "Protect systems from cyber threats",
    details: "Advanced monitoring, firewall protection, and threat detection."
  },
  {
    icon: <Cloud className="text-blue-500" />,
    title: "Cloud Infrastructure",
    desc: "Scalable cloud solutions",
    details: "AWS, Azure, and cloud deployment systems."
  },
  {
    icon: <Cpu className="text-purple-500" />,
    title: "AI & Automation",
    desc: "Automate workflows",
    details: "AI tools and automation pipelines for efficiency."
  },
  {
    icon: <Headphones className="text-green-500" />,
    title: "24/7 IT Support",
    desc: "Always available support",
    details: "Round-the-clock system monitoring and issue resolution."
  },
  {
    icon: <Network className="text-yellow-500" />,
    title: "Network Solutions",
    desc: "Secure connectivity",
    details: "LAN/WAN setup and enterprise networking."
  },
  {
    icon: <Code className="text-indigo-500" />,
    title: "Software Development",
    desc: "Custom applications",
    details: "Business-specific web and mobile solutions."
  },
  {
    icon: <Database className="text-pink-500" />,
    title: "Data Analytics",
    desc: "Data-driven decisions",
    details: "Analytics dashboards and reporting systems."
  },
  {
    icon: <Server className="text-teal-500" />,
    title: "IT Infrastructure",
    desc: "Complete system setup",
    details: "Servers, storage, and enterprise hardware solutions."
  }
];

const features = [
  {
    icon: <CheckCircle className="text-green-500" />,
    title: "All-in-One IT Solutions",
    desc: "Everything under one roof"
  },
  {
    icon: <Shield className="text-red-500" />,
    title: "Enterprise Security",
    desc: "Advanced protection systems"
  },
  {
    icon: <Cpu className="text-purple-500" />,
    title: "AI Integration",
    desc: "Modern automation systems"
  },
  {
    icon: <Headphones className="text-blue-500" />,
    title: "24/7 Support",
    desc: "Always available"
  },
  {
    icon: <Server className="text-indigo-500" />,
    title: "Scalable Systems",
    desc: "Built for growth"
  },
  {
    icon: <CheckCircle className="text-teal-500" />,
    title: "Trusted Expertise",
    desc: "Proven results"
  }
];

const testimonials = [
  {
    quote: "Our downtime reduced drastically after working with Poeage.",
    name: "School Administrator"
  },
  {
    quote: "They built our entire IT infrastructure from scratch.",
    name: "Startup Founder"
  },
  {
    quote: "Reliable and highly professional IT support.",
    name: "Enterprise Client"
  }
];

const stats = [
  { number: 5, label: "Years Experience" },
  { number: 120, label: "Projects Completed" },
  { number: 80, label: "Clients Served" },
  { number: 24, label: "Support Hours" }
];

/* ---------------- PAGE ---------------- */

export default function Home() {

  const [openService, setOpenService] = useState(null);

  return (
    <div className="bg-gradient-to-b from-white via-purple-50 to-white text-gray-900">

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden">

        <video autoPlay muted loop className="absolute w-full h-full object-cover">
          <source src={homevideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-4xl px-6 text-white">

          <Badge>Poeage IT Solutions</Badge>

          <h1 className="text-3xl md:text-5xl font-bold mt-6">
            Complete IT Solutions for
            <span className="text-green-400"> Modern Businesses</span>
          </h1>

          <p className="mt-5 text-gray-200">
            Cybersecurity, cloud infrastructure, AI automation and full IT support.
          </p>

          <div className="mt-8">
            <Button size="lg">Get Free Consultation</Button>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 text-center">

          {stats.map((s, i) => (
            <Card key={i}>
              <h3 className="text-3xl font-bold text-green-600">
                <CountUp end={s.number} />+
              </h3>
              <p className="text-gray-600">{s.label}</p>
            </Card>
          ))}

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our IT Services
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-4 gap-6"
        >
          {services.map((s, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card hover>

                <div className="mb-3">{s.icon}</div>

                <h3 className="font-semibold">{s.title}</h3>

                <p className="text-gray-600 text-sm mt-2">
                  {s.desc}
                </p>

                <Button
                  className="mt-3"
                  onClick={() =>
                    setOpenService(openService === i ? null : i)
                  }
                >
                  Learn More
                </Button>

                {openService === i && (
                  <p className="text-sm mt-2 text-gray-600">
                    {s.details}
                  </p>
                )}

              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-purple-50">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why Poeage IT Solutions?
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {features.map((f, i) => (
            <Card key={i} hover>
              <div>{f.icon}</div>
              <h3 className="mt-3 font-semibold">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Client Feedback
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">

          {testimonials.map((t, i) => (
            <Card key={i} hover>

              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 italic">
                "{t.quote}"
              </p>

              <h4 className="mt-3 font-semibold">{t.name}</h4>

            </Card>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-green-700 to-green-500 text-white">

        <h2 className="text-3xl font-bold">
          Ready to Upgrade Your IT Infrastructure?
        </h2>

        <div className="mt-6">
          <Button size="lg">Request Quote</Button>
        </div>

      </section>

    </div>
  );
}