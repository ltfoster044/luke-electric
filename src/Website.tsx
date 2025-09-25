import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, ArrowRight, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Shield, Rocket } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div variants={stagger} className="text-center max-w-2xl mx-auto mb-10">
      {eyebrow && (<motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lime-500"><Sparkles className="h-4 w-4" /> {eyebrow}</motion.div>)}
      <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold tracking-tight mt-2 text-lime-500">{title}</motion.h2>
      {subtitle && (<motion.p variants={fadeUp} className="text-muted-foreground mt-3">{subtitle}</motion.p>)}
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <SectionHeading eyebrow="Why choose us" title="Safe, code-first workmanship you can trust" />
          <motion.p variants={fadeUp} className="text-gray-300 mt-2">
            Luke Electric is <span className="text-lime-500 font-semibold">owned and operated by Lucas Foster</span> — a licensed & insured electrician serving Upstate NY. We focus on clean, code-compliant installs and clear communication from estimate to final inspection.
          </motion.p>
          <motion.ul variants={stagger} className="space-y-3 mt-6">
            {["Licensed & insured electricians","Upfront, itemized estimates","Clean, on-time workmanship"].map((t,i)=>(
              <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-lime-500 mt-0.5" />
                <span className="text-gray-300">{t}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

export default function Website(){ return (<div>TODO: Add full site here (shortened)</div>); }
