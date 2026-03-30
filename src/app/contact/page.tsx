"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

const cards = [
  { icon: Mail, title: "Email", value: "ridasa786@gmail.com", href: "mailto:ridasa786@gmail.com" },
  { icon: Phone, title: "Phone", value: "+92 313 7946587", href: "tel:+923137946587" },
  { icon: MapPin, title: "Address", value: "Sabzazar A Block, Hassan Street, Lahore, Pakistan", href: null },
];

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Contact information"
        description="Available for entry-level opportunities in dynamic organizations and educational settings."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card, index) => {
          const content = (
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 bg-white/60 dark:bg-[#3E5B4C]/45 p-5"
            >
              <card.icon className="text-[#D9A441]" size={20} />
              <h2 className="mt-3 font-semibold">{card.title}</h2>
              <p className="mt-1 text-sm text-[#1A1A1A]/70 dark:text-[#FAF7F0]/80">{card.value}</p>
            </motion.article>
          );

          return card.href ? (
            <a key={card.title} href={card.href} className="block">
              {content}
            </a>
          ) : (
            <div key={card.title}>{content}</div>
          );
        })}
      </div>
    </div>
  );
}
