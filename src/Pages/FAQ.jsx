import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

import Accordion from "../Component/ui/Accordian";

import { faqs, categories } from "../data/FaqData";

/* ANIMATION */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function FAQ() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = faqs.filter((f) => {
    return (
      (category === "All" || f.category === category) &&
      f.question.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="py-24 text-center bg-gradient-to-br from-[#EAF2FF] to-white relative overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-[#1E6DE0]/20 blur-3xl opacity-30" />

        <h1 className="text-4xl font-bold mb-3 relative z-10">
          Help Center
        </h1>

        <p className="text-gray-600 relative z-10">
          Find answers, guides, and support resources
        </p>

      </section>

      {/* SEARCH */}
      <section className="max-w-3xl mx-auto px-6 -mt-10 relative z-20">

        <div className="bg-white border border-[#EAF2FF] shadow-xl rounded-xl p-4 flex items-center gap-3">

          <Search className="text-[#1CB7C8]" />

          <input
            type="text"
            placeholder="Search for questions..."
            className="w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </section>

      {/* CATEGORY FILTER */}
      <section className="mt-10 px-6">

        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">

          {categories.map((c) => (
            <motion.button
              key={c}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCategory(c)}
              className={`px-5 py-2 rounded-full border transition-all ${
                category === c
                  ? "bg-[#1E6DE0] text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-[#EAF2FF]"
              }`}
            >
              {c}
            </motion.button>
          ))}

        </div>

      </section>

      {/* RESULTS */}
      <div className="text-center mt-6 text-sm text-gray-500">
        Showing {filtered.length} results
      </div>

      {/* FAQ LIST */}
      <section className="max-w-4xl mx-auto px-6 py-16">

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >

          {filtered.length > 0 ? (
            filtered.map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Accordion item={item} />
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-10">
              No results found
            </p>
          )}

        </motion.div>

      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-r from-[#1E6DE0] to-[#5A2DDB] text-white">

        <h2 className="text-3xl font-bold mb-4">
          Didn’t find your answer?
        </h2>

        <p className="mb-6 text-white/80">
          Our support team is ready to help you anytime.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-[#1E6DE0] rounded-lg font-semibold shadow">
            Contact Support
          </button>

          <button className="px-6 py-3 border border-white rounded-lg">
            Request Callback
          </button>
        </div>

      </section>

    </div>
  );
}