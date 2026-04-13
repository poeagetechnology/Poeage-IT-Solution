import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Card from "../Component/ui/Card";
import Button from "../Component/ui/Button";
import Input from "../Component/ui/Input";
import TextArea from "../Component/ui/TextArea";

const servicesList = [
  "Cybersecurity",
  "Cloud Infrastructure",
  "AI & Automation",
  "IT Support",
  "Network Solutions",
  "Software Development"
];

const steps = [
  "Service",
  "Business",
  "Requirements",
  "Contact",
  "Review"
];

/* ANIMATION */
const slide = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 }
};

export default function GetQuote() {

  const [step, setStep] = useState(0);

  const [form, setForm] = useState({
    services: [],
    company: "",
    industry: "",
    size: "",
    challenges: "",
    goals: "",
    needs: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    phone: ""
  });

  /* UPDATE */
  const update = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const toggleService = (service) => {
    const exists = form.services.includes(service);
    update(
      "services",
      exists
        ? form.services.filter((s) => s !== service)
        : [...form.services, service]
    );
  };

  /* VALIDATION */
  const validateStep = () => {
    if (step === 0) return form.services.length > 0;
    if (step === 1) return form.company && form.industry;
    if (step === 2) return form.needs;
    if (step === 3) return form.name && form.email;
    return true;
  };

  const next = () => {
    if (!validateStep()) return alert("Please fill required fields");
    setStep(step + 1);
  };

  const prev = () => setStep(step - 1);

  return (
    <div className="bg-white min-h-screen text-gray-900">

      {/* ================= HEADER ================= */}
      <section className="py-16 text-center bg-gradient-to-r from-green-100 to-white">
        <h1 className="text-4xl font-bold">Request a Quote</h1>
      </section>

      {/* ================= STEPPER ================= */}
      <div className="max-w-5xl mx-auto px-6 mt-10">

        <div className="flex justify-between items-center">

          {steps.map((s, i) => {

            const active = i === step;
            const completed = i < step;

            return (
              <div
                key={i}
                className="flex-1 text-center cursor-pointer"
                onClick={() => completed && setStep(i)}
              >

                <motion.div
                  animate={{
                    scale: active ? 1.2 : 1,
                    backgroundColor: active
                      ? "#22c55e"
                      : completed
                      ? "#16a34a"
                      : "#e5e7eb"
                  }}
                  className="w-10 h-10 mx-auto rounded-full flex items-center justify-center text-white font-bold"
                >
                  {i + 1}
                </motion.div>

                <p className={`text-xs mt-2 ${active ? "text-green-600" : "text-gray-500"}`}>
                  {s}
                </p>

              </div>
            );
          })}

        </div>

      </div>

      {/* ================= FORM ================= */}
      <div className="max-w-4xl mx-auto px-6 py-12">

        <Card className="p-8 border">

          <AnimatePresence mode="wait">

            <motion.div
              key={step}
              variants={slide}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >

              {/* STEP 1 */}
              {step === 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Select Services</h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    {servicesList.map((s) => (
                      <motion.div
                        whileTap={{ scale: 0.95 }}
                        key={s}
                        onClick={() => toggleService(s)}
                        className={`p-4 border rounded cursor-pointer ${
                          form.services.includes(s)
                            ? "bg-green-100 border-green-400"
                            : ""
                        }`}
                      >
                        {s}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 1 && (
                <div className="space-y-4">
                  <Input placeholder="Company Name" onChange={(e) => update("company", e.target.value)} />
                  <Input placeholder="Industry" onChange={(e) => update("industry", e.target.value)} />
                </div>
              )}

              {/* STEP 3 */}
              {step === 2 && (
                <div className="space-y-4">
                  <TextArea placeholder="Your Needs" onChange={(e) => update("needs", e.target.value)} />
                  <Input placeholder="Budget" onChange={(e) => update("budget", e.target.value)} />
                </div>
              )}

              {/* STEP 4 */}
              {step === 3 && (
                <div className="space-y-4">
                  <Input placeholder="Name" onChange={(e) => update("name", e.target.value)} />
                  <Input placeholder="Email" onChange={(e) => update("email", e.target.value)} />
                </div>
              )}

              {/* STEP 5 REVIEW */}
              {step === 4 && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">
                    Review Your Request
                  </h2>

                  <div className="space-y-4">

                    <Card>
                      <h3 className="font-semibold">Services</h3>
                      <p>{form.services.join(", ")}</p>
                    </Card>

                    <Card>
                      <h3 className="font-semibold">Business</h3>
                      <p>{form.company} ({form.industry})</p>
                    </Card>

                    <Card>
                      <h3 className="font-semibold">Requirements</h3>
                      <p>{form.needs}</p>
                    </Card>

                    <Card>
                      <h3 className="font-semibold">Contact</h3>
                      <p>{form.name} | {form.email}</p>
                    </Card>

                  </div>

                </div>
              )}

            </motion.div>

          </AnimatePresence>

          {/* BUTTONS */}
          <div className="flex justify-between mt-8">

            {step > 0 && (
              <Button variant="outline" onClick={prev}>
                Back
              </Button>
            )}

            {step < steps.length - 1 ? (
              <Button onClick={next}>
                Next
              </Button>
            ) : (
              <Button>
                Submit
              </Button>
            )}

          </div>

        </Card>

      </div>

    </div>
  );
}