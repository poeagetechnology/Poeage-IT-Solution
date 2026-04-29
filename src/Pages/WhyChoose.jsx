import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Shield,
  Clock,
  DollarSign,
  TrendingUp,
  Cpu,
  Layers,
  Star
} from "lucide-react";

import Card from "../Component/ui/Card";
import Button from "../Component/ui/Button";

import {
  differentiators,
  comparison,
  trust,
  successStories,
  commitments
} from "../data/WhyWeData";

/* ICON MAP */
const icons = [
  Layers,
  Shield,
  Clock,
  DollarSign,
  TrendingUp,
  Cpu,
  CheckCircle
];

/* ANIMATION */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function WhyChoose() {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={container}
        className="py-24 text-center bg-gradient-to-r from-[#EAF2FF] to-white"
      >
        <motion.h1 variants={fadeUp} className="text-4xl font-bold">
          Why Choose Poeage IT Solutions?
        </motion.h1>
        <motion.p variants={fadeUp} className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Reliable, scalable, and secure IT solutions tailored for modern businesses.
        </motion.p>
      </motion.section>

      {/* DIFFERENTIATORS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-3xl font-bold text-center mb-12"
        >
          What Makes Us Different
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-6"
        >
          {differentiators.map((d, i) => {
            const Icon = icons[i % icons.length];

            return (
              <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.03 }}>
                <Card className="border border-gray-200 hover:shadow-lg transition">

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-[#EAF2FF]">
                      <Icon className="text-[#1E6DE0]" size={20} />
                    </div>

                    <p className="text-sm">{d}</p>
                  </div>

                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* COMPARISON */}
      <section className="py-20 bg-[#F3F6FF] px-6">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-3xl font-bold text-center mb-12"
        >
          <Star className="inline text-[#1E6DE0] mr-2" />
          How We Compare
        </motion.h2>

        <div className="max-w-5xl mx-auto overflow-x-auto">

          <motion.table
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="w-full border bg-white rounded-lg overflow-hidden"
          >

            <thead>
              <tr className="bg-[#EAF2FF]">
                <th className="p-4">Feature</th>
                <th className="p-4 text-[#1E6DE0]">Poeage</th>
                <th className="p-4">Others</th>
              </tr>
            </thead>

            <tbody>
              {comparison.map((c, i) => (
                <tr key={i} className="border-t">
                  <td className="p-4">{c.feature}</td>
                  <td className="p-4 text-[#1E6DE0] font-semibold flex items-center gap-2">
                    <CheckCircle size={16} />
                    {c.us}
                  </td>
                  <td className="p-4 text-gray-500">{c.others}</td>
                </tr>
              ))}
            </tbody>

          </motion.table>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 px-6 text-center">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-3xl font-bold mb-12"
        >
          Trusted by Clients
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {trust.map((t, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card className="border border-gray-200 hover:shadow-md">

                <div className="flex flex-col items-center gap-3">
                  <CheckCircle className="text-[#1CB7C8]" />
                  <p className="font-semibold text-[#1E6DE0]">{t}</p>
                </div>

              </Card>
            </motion.div>
          ))}
        </motion.div>

      </section>

      {/* SUCCESS STORIES */}
      <section className="py-20 px-6">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-3xl font-bold text-center mb-12"
        >
          Customer Success
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {successStories.map((s, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card className="border border-gray-200 hover:shadow-md">

                <div className="flex items-start gap-3">
                  <TrendingUp className="text-[#1CB7C8] mt-1" />

                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="text-[#1E6DE0] mt-1">{s.result}</p>
                  </div>
                </div>

              </Card>
            </motion.div>
          ))}
        </motion.div>

      </section>

      {/* COMMITMENT */}
      <section className="py-20 bg-[#F3F6FF] px-6 text-center">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-3xl font-bold mb-12"
        >
          Our Commitment
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {commitments.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-[#EAF2FF] rounded-full"
            >
              <CheckCircle size={16} className="text-[#1CB7C8]" />
              <span>{c}</span>
            </motion.div>
          ))}
        </motion.div>

      </section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        className="py-24 text-center bg-gradient-to-r from-[#1E6DE0] to-[#5A2DDB] text-white"
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to work with a reliable IT partner?
        </h2>

        <Button size="lg">
          Get Free Consultation
        </Button>
      </motion.section>

    </div>
  );
}