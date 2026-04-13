import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "../Component/ui/Card";
import Button from "../Component/ui/Button";
import Input from "../Component/ui/Input";

import { articles, categories } from "../data/BlogsData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function Blog() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = articles.filter((a) => {
    return (
      a.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || a.category === category)
    );
  });

  return (
    <div className="bg-gradient-to-b from-white via-indigo-50 to-white min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* ================= LIST VIEW ================= */}
        {!selected && (
          <>
            {/* HEADER */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-center mb-14"
            >
              <h1 className="text-4xl font-semibold mb-3">
                Resources & Insights
              </h1>
              <p className="text-gray-500">
                Learn, grow, and scale your business.
              </p>
            </motion.div>

            {/* SEARCH + FILTER */}
            <div className="flex flex-col md:flex-row gap-4 mb-10 justify-between">

              <Input
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <div className="flex gap-2 flex-wrap">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`px-4 py-1 rounded-full text-sm border transition ${
                      category === c
                        ? "bg-green-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

            </div>

            {/* ARTICLES */}
            <div className="grid md:grid-cols-3 gap-8">

              {filtered.map((article) => (
                <motion.div
                  key={article.id}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelected(article)}
                  className="cursor-pointer"
                >
                  <Card className="overflow-hidden border shadow-sm hover:shadow-xl transition rounded-xl">

                    <img
                      src={article.image}
                      alt=""
                      className="h-44 w-full object-cover"
                    />

                    <div className="p-4">

                      <p className="text-xs text-green-600 mb-1">
                        {article.category}
                      </p>

                      <h3 className="font-semibold mb-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-500 text-sm mb-3">
                        {article.excerpt}
                      </p>

                      <div className="text-xs text-gray-400 flex justify-between">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>

                    </div>

                  </Card>
                </motion.div>
              ))}

            </div>
          </>
        )}

        {/* ================= ARTICLE VIEW ================= */}
        {selected && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-3xl mx-auto"
          >

            <button
              onClick={() => setSelected(null)}
              className="text-sm text-green-600 mb-6"
            >
              ← Back to Articles
            </button>

            <h1 className="text-3xl font-semibold mb-3">
              {selected.title}
            </h1>

            <p className="text-gray-400 text-sm mb-6">
              {selected.date} • {selected.readTime} • {selected.author}
            </p>

            <img
              src={selected.image}
              alt=""
              className="rounded-xl mb-6"
            />

            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>{selected.excerpt}</p>
              <p>
                Full article content goes here. Expand this with real blog content.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 flex gap-4">
              <Button>Subscribe</Button>
              <Button variant="secondary">Contact Us</Button>
            </div>

            {/* RELATED */}
            <div className="mt-16">
              <h3 className="font-semibold mb-4">Related Articles</h3>

              <div className="grid md:grid-cols-2 gap-4">
                {articles.slice(0, 2).map((a) => (
                  <Card key={a.id} className="p-3 text-sm">
                    {a.title}
                  </Card>
                ))}
              </div>
            </div>

          </motion.div>
        )}

        {/* ================= NEWSLETTER ================= */}
        {!selected && (
          <div className="mt-20 text-center bg-green-600 text-white p-10 rounded-xl">
            <h2 className="text-2xl font-semibold mb-2">
              Stay Updated
            </h2>
            <p className="mb-4 text-sm opacity-90">
              Get weekly IT insights.
            </p>

            <input
              placeholder="Enter your email"
              className="px-4 py-2 rounded text-black"
            />
          </div>
        )}

      </div>

    </div>
  );
}