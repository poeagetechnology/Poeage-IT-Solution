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

export default function WhyChoose() {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="py-24 text-center bg-gradient-to-r from-green-100 to-white">
        <h1 className="text-4xl font-bold">
          Why Choose Poeage IT Solutions?
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Reliable, scalable, and secure IT solutions tailored for modern businesses.
        </p>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          What Makes Us Different
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {differentiators.map((d, i) => {
            const Icon = icons[i % icons.length];

            return (
              <motion.div key={i} whileHover={{ scale: 1.03 }}>
                <Card className="border border-gray-200 hover:shadow-lg transition">

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-green-100">
                      <Icon className="text-green-600" size={20} />
                    </div>

                    <p className="text-sm">{d}</p>
                  </div>

                </Card>
              </motion.div>
            );
          })}

        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-20 bg-green-50 px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          <Star className="inline text-green-600 mr-2" />
          How We Compare
        </h2>

        <div className="max-w-5xl mx-auto overflow-x-auto">

          <table className="w-full border bg-white rounded-lg overflow-hidden">

            <thead>
              <tr className="bg-green-100">
                <th className="p-4">Feature</th>
                <th className="p-4 text-green-600">Poeage</th>
                <th className="p-4">Others</th>
              </tr>
            </thead>

            <tbody>
              {comparison.map((c, i) => (
                <tr key={i} className="border-t">
                  <td className="p-4">{c.feature}</td>
                  <td className="p-4 text-green-600 font-semibold flex items-center gap-2">
                    <CheckCircle size={16} />
                    {c.us}
                  </td>
                  <td className="p-4 text-gray-500">{c.others}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Trusted by Clients
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {trust.map((t, i) => (
            <Card key={i} className="border border-gray-200 hover:shadow-md">

              <div className="flex flex-col items-center gap-3">
                <CheckCircle className="text-green-500" />
                <p className="font-semibold text-green-600">{t}</p>
              </div>

            </Card>
          ))}

        </div>

      </section>

      {/* SUCCESS STORIES */}
      <section className="py-20 px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Customer Success
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {successStories.map((s, i) => (
            <Card key={i} className="border border-gray-200 hover:shadow-md">

              <div className="flex items-start gap-3">
                <TrendingUp className="text-green-500 mt-1" />

                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-green-600 mt-1">{s.result}</p>
                </div>
              </div>

            </Card>
          ))}

        </div>

      </section>

      {/* COMMITMENT */}
      <section className="py-20 bg-green-50 px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Our Commitment
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">

          {commitments.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-green-200 rounded-full"
            >
              <CheckCircle size={16} className="text-green-500" />
              <span>{c}</span>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-green-500 text-white">

        <h2 className="text-3xl font-bold mb-4">
          Ready to work with a reliable IT partner?
        </h2>

        <Button size="lg">
          Get Free Consultation
        </Button>

      </section>

    </div>
  );
}