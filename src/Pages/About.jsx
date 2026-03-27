import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Cpu,
  Users,
  Award,
  CheckCircle,
  Globe
} from "lucide-react";

import Card from "../Component/ui/Card";
import Button from "../Component/ui/Button";

import {
  company,
  whyStarted,
  team,
  expertise,
  achievements,
  process,
  csr
} from "../data/AboutData";

/* ANIMATION */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <div className="bg-slate-950 text-white">

      {/* ================= HERO ================= */}
      <section className="relative py-28 text-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-black" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            About Poeage IT Solutions
          </h1>

          <p className="text-gray-300 text-lg">
            Building secure, scalable, and intelligent IT systems for modern businesses.
          </p>
        </div>
      </section>

      {/* ================= COMPANY STORY ================= */}
      <section className="py-24 max-w-6xl mx-auto px-6">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-3xl font-bold mb-10 text-center"
        >
          Our Story
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          <Card className="bg-slate-800/50 backdrop-blur border border-slate-700">
            <p className="text-gray-300">{company.story}</p>
          </Card>

          <div className="space-y-6">

            <Card className="bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-green-400">Mission</h3>
              <p className="text-gray-300">{company.mission}</p>
            </Card>

            <Card className="bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-green-400">Vision</h3>
              <p className="text-gray-300">{company.vision}</p>
            </Card>

          </div>

        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {company.values.map((v) => (
            <span
              key={v}
              className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full"
            >
              {v}
            </span>
          ))}
        </div>

      </section>

      {/* ================= WHY STARTED ================= */}
      <section className="py-24 bg-slate-900 text-center px-6">

        <h2 className="text-3xl font-bold mb-12">
          Why We Started Poeage
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <Card className="bg-slate-800/50 border border-slate-700">
            <Shield className="text-red-400 mb-3" />
            <h3 className="font-semibold">Market Gap</h3>
            <p className="text-gray-400">{whyStarted.gap}</p>
          </Card>

          <Card className="bg-slate-800/50 border border-slate-700">
            <Cpu className="text-purple-400 mb-3" />
            <h3 className="font-semibold">Problem</h3>
            <p className="text-gray-400">{whyStarted.problem}</p>
          </Card>

          <Card className="bg-slate-800/50 border border-slate-700">
            <CheckCircle className="text-green-400 mb-3" />
            <h3 className="font-semibold">Our Solution</h3>
            <p className="text-gray-400">{whyStarted.solution}</p>
          </Card>

        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {team.map((m) => (
            <motion.div key={m.name} whileHover={{ scale: 1.05 }}>
              <Card className="text-center bg-slate-800/50 border border-slate-700">

                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Users />
                </div>

                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-green-400 text-sm">{m.role}</p>
                <p className="text-gray-400 text-sm mt-2">{m.desc}</p>

              </Card>
            </motion.div>
          ))}

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-24 bg-slate-900 px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Experience & Expertise
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">

          <Card className="bg-slate-800/50">
            <Award className="text-yellow-400 mx-auto mb-3" />
            <p>{expertise.years}</p>
          </Card>

          <Card className="bg-slate-800/50">
            <Globe className="text-blue-400 mx-auto mb-3" />
            <p>{expertise.industries.join(", ")}</p>
          </Card>

          <Card className="bg-slate-800/50">
            <Cpu className="text-purple-400 mx-auto mb-3" />
            <p>{expertise.technologies.join(", ")}</p>
          </Card>

          <Card className="bg-slate-800/50">
            <Shield className="text-green-400 mx-auto mb-3" />
            <p>{expertise.certifications.join(", ")}</p>
          </Card>

        </div>

      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="py-24 px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Achievements
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {achievements.map((a) => (
            <Card key={a} className="bg-slate-800/50 border border-slate-700 hover:shadow-green-500/30">
              <p>{a}</p>
            </Card>
          ))}

        </div>

      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-slate-900 text-center px-6">

        <h2 className="text-3xl font-bold mb-12">
          Our Process
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">

          {process.map((p, i) => (
            <span
              key={i}
              className="px-5 py-2 bg-green-500/20 text-green-400 rounded-full"
            >
              {p}
            </span>
          ))}

        </div>

      </section>

      {/* ================= CSR ================= */}
      <section className="py-24 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Corporate Responsibility
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {csr.map((c) => (
            <p key={c} className="text-gray-300">{c}</p>
          ))}
        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-green-500 text-black">

        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Your IT Future
        </h2>

        <Button size="lg">
          Contact Us
        </Button>

      </section>

    </div>
  );
}