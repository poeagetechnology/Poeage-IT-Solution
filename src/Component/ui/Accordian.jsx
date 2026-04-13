import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Accordion({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-green-100 rounded-lg overflow-hidden">

      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 font-medium flex justify-between items-center"
      >
        {item.question}
        <span>{open ? "-" : "+"}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-4 pb-4 text-gray-600 text-sm"
          >
            {item.answer}

            {/* HELPFUL */}
            <div className="mt-4 flex gap-3 text-xs">
              <button className="text-green-600">👍 Helpful</button>
              <button className="text-gray-400">👎 Not Helpful</button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}