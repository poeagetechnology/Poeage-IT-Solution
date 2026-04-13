import React from "react";
import { motion } from "framer-motion";
import Card from "../Component/ui/Card";
import Button from "../Component/ui/Button";

import {
  pricingTiers,
  comparisonData,
  faqData
} from "../data/PricingData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function Pricing() {
  return (
    <div className="bg-white text-gray-900">

      {/* ================= HEADER ================= */}
      <section className="py-16 text-center">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <h2 className="text-3xl font-bold mb-3 mt-5">
            Transparent Pricing
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            No hidden costs. What you see is what you pay.
          </p>
        </motion.div>
      </section>

      {/* ================= TIERS ================= */}
      <section className="py-10 px-6 max-w-6xl mx-auto">

        <h2 className="text-2xl font-semibold text-center mb-10">
          Service Pricing Tiers
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {pricingTiers.map((tier, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              whileHover={{ y: -6 }}
            >
              <Card className="p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">

                <h3 className="text-lg font-semibold mb-1">
                  {tier.name}
                </h3>

                <p className="text-2xl font-bold text-indigo-600 mb-4">
                  {tier.price}
                </p>

                {/* INCLUDED */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-400 mb-2">
                    INCLUDED
                  </p>

                  <ul className="space-y-2 text-sm">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-xs">
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* EXCLUDED */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-400 mb-2">
                    NOT INCLUDED
                  </p>

                  <ul className="space-y-2 text-sm text-gray-400">
                    {tier.excluded.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 text-xs">
                          ✕
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* META */}
                <div className="text-xs text-gray-500 space-y-1 mb-4">
                  <p><strong>Support:</strong> {tier.support}</p>
                  <p><strong>Response:</strong> {tier.response}</p>
                  <p><strong>Contract:</strong> {tier.contract}</p>
                </div>

                <Button className="w-full">
                  Choose Plan
                </Button>

              </Card>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= COMPARISON ================= */}
      <section className="py-14 px-6 bg-gray-50">

        <h2 className="text-2xl font-semibold text-center mb-10">
          Compare Plans
        </h2>

        <div className="overflow-x-auto max-w-5xl mx-auto">
          <table className="w-full text-sm bg-white rounded-xl shadow border">

            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3">Feature</th>
                <th>Starter</th>
                <th>Professional</th>
                <th>Enterprise</th>
              </tr>
            </thead>

            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i} className="text-center border-t">
                  <td className="p-3 font-medium">{row.feature}</td>
                  <td>{row.starter}</td>
                  <td>{row.professional}</td>
                  <td>{row.enterprise}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </section>

      {/* ================= CUSTOM ================= */}
      <section className="py-16 text-center">

        <h2 className="text-2xl font-semibold mb-3">
          Need Custom Solutions?
        </h2>

        <p className="text-gray-500 mb-5">
          We offer fully customized IT packages tailored to your business needs.
        </p>

        <Button size="lg">
          Get Custom Quote
        </Button>

      </section>

      {/* ================= PAYMENT ================= */}
      <section className="py-16 bg-gray-50 text-center">

        <h2 className="text-2xl font-semibold mb-6">
          Payment Options
        </h2>
<div className="space-y-3 text-gray-600 text-sm text-center">

  <div className="flex items-center gap-3 text-center">
    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-xs">
      ✓
    </span>
    <p>UPI, Credit/Debit Cards, Net Banking</p>
  </div>

  <div className="flex items-center gap-3">
    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-xs">
      ✓
    </span>
    <p>Monthly & Annual Billing</p>
  </div>

  <div className="flex items-center gap-3">
    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-xs">
      ✓
    </span>
    <p>10% Discount on Annual Plans</p>
  </div>

</div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16 px-6 max-w-4xl mx-auto">

        <h2 className="text-2xl font-semibold text-center mb-10">
          Pricing FAQs
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
            >
              <Card className="p-4 border shadow-sm hover:shadow-md transition">
                <h3 className="font-medium">{faq.question}</h3>
                <p className="text-gray-500 text-sm mt-2">
                  {faq.answer}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

      </section>

    </div>
  );
}