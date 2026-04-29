import React, { useState } from "react";
import { Star, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Card from "../Component/ui/Card";
import Button from "../Component/ui/Button";

import { summary, testimonials } from "../data/TestimonialsData";

/* ANIMATION VARIANTS */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function Testimonials() {

  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? testimonials
      : testimonials.filter((t) => t.service === filter);

  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={container}
        className="py-20 text-center bg-gradient-to-r from-[#EAF2FF] to-white"
      >
        <motion.h1 variants={fadeUp} className="text-4xl font-bold">
          What Our Clients Say
        </motion.h1>

        <motion.p variants={fadeUp} className="text-gray-600 mt-3">
          Real feedback from businesses we’ve helped grow.
        </motion.p>
      </motion.section>

      {/* SUMMARY */}
      <motion.section
        initial="hidden"
        whileInView="show"
        variants={container}
        className="py-16 text-center"
      >
        <motion.h2 variants={fadeUp} className="text-5xl font-bold text-[#1E6DE0]">
          {summary.average} ★
        </motion.h2>

        <motion.p variants={fadeUp} className="text-gray-500">
          Based on {summary.total} reviews
        </motion.p>

        <motion.div variants={fadeUp} className="max-w-md mx-auto mt-6 space-y-2">
          {summary.distribution.map((d) => (
            <div key={d.stars} className="flex items-center gap-2">
              <span className="w-10 text-sm">{d.stars}★</span>
              <div className="flex-1 bg-gray-200 h-2 rounded">
                <motion.div
                  className="bg-[#1CB7C8] h-2 rounded"
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${(d.count / summary.total) * 100}%`
                  }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* FILTER */}
      <section className="px-6 max-w-6xl mx-auto mb-12">

        <div className="flex flex-wrap gap-3 justify-center">

          {["All", "Cybersecurity", "Cloud Infrastructure", "Network Solutions"].map((f) => (
            <motion.button
              key={f}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full border transition ${
                filter === f
                  ? "bg-[#1E6DE0] text-white shadow"
                  : "bg-white text-gray-600 hover:bg-[#EAF2FF]"
              }`}
            >
              {f}
            </motion.button>
          ))}

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 max-w-6xl mx-auto pb-20">

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-3 gap-6"
        >

          <AnimatePresence mode="wait">

            {filteredData.map((t, i) => {

              const isFeatured = i === 0;

              return (
                <motion.div
                  key={t.name}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, y: 20 }}
                  whileHover={{ y: -6 }}
                >
                  <Card
                    className={`border transition ${
                      isFeatured
                        ? "border-[#1CB7C8] bg-[#EAF2FF]"
                        : "border-gray-200"
                    }`}
                  >

                    {t.video && (
                      <div className="flex items-center gap-1 text-[#1E6DE0] text-sm mb-2">
                        <Play size={14} /> Video Testimonial
                      </div>
                    )}

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#EAF2FF] flex items-center justify-center text-[#1E6DE0] font-bold">
                        {t.name.charAt(0)}
                      </div>

                      <div>
                        <h3 className="font-semibold">{t.name}</h3>
                        <p className="text-xs text-gray-500">{t.role}</p>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-2">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm mb-4 italic">
                      “{t.quote}”
                    </p>

                    <div className="text-xs text-gray-400 flex justify-between">
                      <span>{t.service}</span>
                      <span>{t.date}</span>
                    </div>

                  </Card>
                </motion.div>
              );
            })}

          </AnimatePresence>

        </motion.div>

      </section>

      {/* VIDEO */}
      <motion.section
        initial="hidden"
        whileInView="show"
        variants={container}
        className="py-20 bg-[#F3F6FF] text-center"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-6">
          Watch Client Stories
        </motion.h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-6">
          {[1, 2].map((v) => (
            <motion.div
              key={v}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="bg-white border border-gray-200 rounded-xl p-10 flex flex-col items-center"
            >
              <Play className="text-[#1CB7C8] mb-3" size={40} />
              <p className="text-gray-600">
                Video testimonial coming soon
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        className="py-24 text-center bg-gradient-to-r from-[#1E6DE0] to-[#5A2DDB] text-white"
      >
        <h2 className="text-3xl font-bold mb-4">
          Loved Our Service?
        </h2>

        <p className="mb-6 text-white/80">
          Share your experience and help others trust us.
        </p>

        <Button size="lg">
          Leave a Review
        </Button>
      </motion.section>

    </div>
  );
}