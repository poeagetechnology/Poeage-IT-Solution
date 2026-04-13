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
import CountUp from "react-countup";

import Card from "../Component/ui/Card";
import Button from "../Component/ui/Button";



import {
  company,
  whyStarted,
  team,
  expertise,
  achievements,
  process,
  csr,
  
} from "../data/AboutData";


const achievementIcons = [Award, Users, Globe, Shield];
const csrIcons = [Users, Globe, Shield];


/* ANIMATIONS */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.15 }
  }
};

export default function About() {
  return (
    <div className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative py-32 text-center overflow-hidden bg-gradient-to-br from-green-100 to-white">

        <div className="absolute top-0 left-0 w-72 h-72 bg-green-300 blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-400 blur-3xl opacity-20" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-6">
            Engineering the Future of IT
          </motion.h1>

          <motion.p variants={fadeUp} className="text-gray-600 text-lg">
            Poeage IT Solutions builds secure, scalable, and intelligent systems
            that drive business growth.
          </motion.p>
        </motion.div>

      </section>

      {/* ================= STORY ================= */}
      <section className="py-24 max-w-6xl mx-auto px-6">

        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="text-3xl font-bold mb-12 text-center"
        >
          Our Story
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          <Card className="bg-white border border-green-100 shadow-lg">
            <p className="text-gray-600">{company.story}</p>
          </Card>

          <div className="space-y-6">

            <Card className="bg-white border border-green-100 shadow">
              <h3 className="font-semibold text-green-600">Mission</h3>
              <p className="text-gray-600">{company.mission}</p>
            </Card>

            <Card className="bg-white border border-green-100 shadow">
              <h3 className="font-semibold text-green-600">Vision</h3>
              <p className="text-gray-600">{company.vision}</p>
            </Card>

          </div>

        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {company.values.map((v) => (
            <span
              key={v}
              className="px-4 py-2 bg-green-100 text-green-700 rounded-full"
            >
              {v}
            </span>
          ))}
        </div>

      </section>

      {/* ================= WHY STARTED ================= */}
      <section className="py-24 bg-green-50 text-center px-6">

        <h2 className="text-3xl font-bold mb-12">
          Why We Started Poeage
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <Card className="bg-white border border-green-100 shadow">
            <Shield className="text-red-500 mb-3 mx-auto" />
            <h3 className="font-semibold">Market Gap</h3>
            <p className="text-gray-500">{whyStarted.gap}</p>
          </Card>

          <Card className="bg-white border border-green-100 shadow">
            <Cpu className="text-purple-500 mb-3 mx-auto" />
            <h3 className="font-semibold">Problem</h3>
            <p className="text-gray-500">{whyStarted.problem}</p>
          </Card>

          <Card className="bg-white border border-green-100 shadow">
            <CheckCircle className="text-green-500 mb-3 mx-auto" />
            <h3 className="font-semibold">Our Solution</h3>
            <p className="text-gray-500">{whyStarted.solution}</p>
          </Card>

        </div>

      </section>

      {/* ================= TEAM ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Meet Our Experts
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {team.map((m) => (
            <motion.div key={m.name} whileHover={{ y: -8 }}>
              <Card className="text-center bg-white border border-green-100 shadow-lg">

                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <Users className="text-green-600" />
                </div>

                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-green-600 text-sm">{m.role}</p>
                <p className="text-gray-500 text-sm mt-2">{m.desc}</p>

              </Card>
            </motion.div>
          ))}

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-24 bg-green-50 px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Experience & Expertise
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">

          <Card className="bg-white border border-green-100 shadow">
            <Award className="text-yellow-500 mx-auto mb-3" />
            <p>{expertise.years}</p>
          </Card>

          <Card className="bg-white border border-green-100 shadow">
            <Globe className="text-blue-500 mx-auto mb-3" />
            <p>{expertise.industries.join(", ")}</p>
          </Card>

          <Card className="bg-white border border-green-100 shadow">
            <Cpu className="text-purple-500 mx-auto mb-3" />
            <p>{expertise.technologies.join(", ")}</p>
          </Card>

          <Card className="bg-white border border-green-100 shadow">
            <Shield className="text-green-500 mx-auto mb-3" />
            <p>{expertise.certifications.join(", ")}</p>
          </Card>

        </div>

      </section>

      {/* ================= PROCESS TIMELINE ================= */}
      <section className="py-32 bg-gradient-to-b from-green-50 to-white px-6">

        <h2 className="text-3xl font-bold text-center mb-20">
          Our Proven Process
        </h2>

        <div className="max-w-5xl mx-auto relative">

          <div className="absolute left-1/2 top-0 w-1 h-full bg-green-200 -translate-x-1/2" />

          {process.map((step, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`mb-16 flex ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <div className="w-full md:w-1/2">

                  <div className="bg-white border border-green-100 shadow-xl rounded-xl p-6 relative">

                    <div className="absolute -top-5 left-6 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                      {i + 1}
                    </div>

                    <h3 className="font-semibold text-lg mb-2 mt-2">
  {step.title}
</h3>

<p className="text-gray-500 text-sm">
  {step.desc}
</p>
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

      </section>{/* ================= ACHIEVEMENTS ================= */}
<section className="py-32 bg-gradient-to-b from-white to-green-50 px-6 text-center">

  <h2 className="text-3xl font-bold mb-16">
    Our Achievements
  </h2>

  <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

    {achievements.map((item, i) => {
      const Icon = achievementIcons[i % achievementIcons.length];

      return (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Card className="bg-white border border-green-100 shadow-xl hover:shadow-2xl transition text-center">

            {/* ICON */}
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <Icon className="text-green-600" />
            </div>

            {/* COUNT */}
            <h3 className="text-3xl font-bold text-green-600">
              <CountUp end={item.value} duration={2} />
              {item.suffix}
            </h3>

            {/* LABEL */}
            <p className="text-gray-500 text-sm mt-2">
              {item.label}
            </p>

          </Card>
        </motion.div>
      );
    })}

  </div>

</section>


{/* ================= CSR ================= */}
<section className="py-32 bg-white px-6 text-center">

  <h2 className="text-3xl font-bold mb-16">
    Corporate Responsibility
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    {csr.map((item, i) => {
      const Icon = csrIcons[i % csrIcons.length];

      return (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Card className="bg-white border border-green-100 shadow-lg hover:shadow-xl transition p-6 text-center">

            {/* ICON */}
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <Icon className="text-green-600" />
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-lg mb-2">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-500 text-sm">
              {item.desc}
            </p>

          </Card>
        </motion.div>
      );
    })}

  </div>

</section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-green-500 text-white">

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