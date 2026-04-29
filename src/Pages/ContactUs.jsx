import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import Card from "../Component/ui/Card";
import Button from "../Component/ui/Button";
import Input from "../Component/ui/Input";
import TextArea from "../Component/ui/TextArea";

export default function ContactUs() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-gray-900 overflow-hidden">

      {/* HERO */}
      <section className="relative py-24 text-center bg-gradient-to-r from-[#EAF2FF] to-white">

        <div className="absolute top-0 left-0 w-60 h-60 bg-[#1E6DE0]/30 blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#5A2DDB]/30 blur-3xl opacity-20" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold relative z-10"
        >
          Let’s Build Something Great Together
        </motion.h1>

        <p className="text-gray-600 mt-3 relative z-10">
          Reach out and our team will guide you with the best IT solutions.
        </p>

      </section>

      {/* MAIN */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >

          <h2 className="text-3xl font-bold">
            Contact Information
          </h2>

          {[
            { icon: Phone, title: "Call Us", value: "+91 98765 43210" },
            { icon: Mail, title: "Email", value: "contact@poeage.com" },
            { icon: MapPin, title: "Office", value: "Tamil Nadu, India" },
            { icon: Clock, title: "Hours", value: "Mon-Sat 9AM - 7PM" }
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div key={i} whileHover={{ scale: 1.03 }}>
                <Card className="flex items-center gap-4 border border-gray-200 hover:shadow-lg">

                  <div className="p-3 bg-[#EAF2FF] rounded-lg">
                    <Icon className="text-[#1E6DE0]" />
                  </div>

                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.value}</p>
                  </div>

                </Card>
              </motion.div>
            );
          })}

          <div className="flex gap-4 pt-4">
            <Button>Call Now</Button>
            <Button variant="outline">WhatsApp</Button>
          </div>

        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >

          <Card className="p-8 border border-gray-200 shadow-xl bg-white/80 backdrop-blur">

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">

                <h2 className="text-2xl font-bold mb-4">
                  Send a Message
                </h2>

                <Input placeholder="Name" required />
                <Input placeholder="Email" required />
                <Input placeholder="Phone" />
                <Input placeholder="Company Name" />

                <select className="w-full p-3 border rounded">
                  <option>Service Interested</option>
                  <option>IT Support& Maintaince</option>
                  <option>Cyberseurity services</option>
                  <option>Cloud and IT Infrastructure</option>
                  <option>Bussinees Software Solutions</option>
                  <option>IT Consulting And Digital Transforming</option>
                  <option>Hardware and Networking</option>
                  <option>Automation and AI Solutions</option>
                  <option>IT Products And Licensing</option>
                </select>

                <TextArea placeholder="Message" />

                <Input placeholder="Budget (Optional)" />

                <select className="w-full p-3 border rounded">
                  <option>Preferred Contact Method</option>
                  <option>Email</option>
                  <option>Phone</option>
                  <option>WhatsApp</option>
                </select>

                <Button type="submit" size="lg" fullWidth>
                  Submit Request
                </Button>

              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-10"
              >

                <h2 className="text-2xl font-bold text-[#1E6DE0]">
                  🎉 Request Submitted
                </h2>

                <p className="mt-3 text-gray-600">
                  Our team will contact you shortly.
                </p>

              </motion.div>
            )}

          </Card>

        </motion.div>

      </section>

      {/* RESPONSE */}
      <section className="py-16 bg-[#F3F6FF] text-center">

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <Clock className="mx-auto text-[#1E6DE0] mb-3" />

          <h2 className="text-2xl font-bold">
            Fast Response Guaranteed
          </h2>

          <p className="text-gray-600 mt-3">
            We respond within 24 hours. Emergency support available 24/7.
          </p>
        </motion.div>

      </section>

      {/* MAP */}
      <section className="py-16 px-6">

        <h2 className="text-2xl font-bold text-center mb-6">
          Visit Our Office
        </h2>

        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-80"
          />
        </div>

      </section>

    </div>
  );
}