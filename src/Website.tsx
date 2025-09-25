import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Shield,
  Rocket,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

export const robotsTxt = `User-agent: *\nAllow: /\nSitemap: https://www.lukeelectric.com/sitemap.xml`;

export const PAGES = [
  { label: "Home", path: "/", href: "#home" },
  { label: "Services", path: "/services", href: "#services" },
  { label: "Pricing", path: "/pricing", href: "#pricing" },
  { label: "About", path: "/about", href: "#about" },
  { label: "Testimonials", path: "/testimonials", href: "#testimonials" },
  { label: "Contact", path: "/contact", href: "#contact" },
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      variants={stagger}
      className="text-center max-w-2xl mx-auto mb-10"
    >
      {eyebrow && (
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lime-500"
        >
          <Sparkles className="h-4 w-4" /> {eyebrow}
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-4xl font-bold tracking-tight mt-2 text-lime-500"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="text-muted-foreground mt-3">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

function Nav() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-black/90 border-b border-lime-500">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold text-xl">
          <img src="/logo.png" alt="Luke Electric Logo" className="h-10 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-lime-500">
          {PAGES.filter((p) => p.href.startsWith("#")).map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="hover:underline underline-offset-4"
            >
              {p.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-lime-500 text-lime-500"
          >
            <a href="#contact">Get a Quote</a>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-lime-500 text-black hover:bg-lime-600"
          >
            <a href="#contact">Book a Call</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-lime-900/30 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <Badge className="w-fit bg-lime-500 text-black">
            Local • Licensed & Insured
          </Badge>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 text-lime-500"
          >
            Trusted Residential & Commercial Electrical Services
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg text-gray-300"
          >
            Licensed electrician serving Upstate NY—panel upgrades, EV charger
            installs, lighting design, troubleshooting, and new construction
            wiring.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-lime-500 text-black hover:bg-lime-600"
            >
              <a href="#contact" className="flex items-center gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-lime-500 text-lime-500"
            >
              <a href="#services">See Services</a>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl border border-lime-500 bg-black grid place-items-center shadow">
            <div className="text-center p-10">
              <img
                src="/logo.png"
                alt="Luke Electric Logo"
                className="mx-auto h-40 object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      title: "Panel & Service Upgrades",
      desc: "100–200A upgrades, meter bases, surge protection, and code-compliant grounding.",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "EV Chargers & Circuits",
      desc: "Level 2 home chargers, dedicated appliance circuits, and subpanels.",
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      title: "Lighting & Renovations",
      desc: "Recessed lighting, smart switches, remodels, additions, and new construction rough-ins.",
      icon: <Rocket className="h-5 w-5" />,
    },
  ];

  return (
    <section id="services" className="py-16 bg-lime-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          eyebrow="What we do"
          title="Our Electrical Services"
          subtitle="From troubleshooting to full installations, we’ve got you covered."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
          variants={stagger}
        >
          {items.map((s, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card className="rounded-2xl border border-lime-500">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="p-2 rounded-xl bg-lime-100 text-lime-600">
                    {s.icon}
                  </div>
                  <CardTitle>{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <SectionHeading
            eyebrow="Why choose us"
            title="Safe, code-first workmanship you can trust"
          />
          <motion.p variants={fadeUp} className="text-gray-300 mt-2">
            Luke Electric is{" "}
            <span className="text-lime-500 font-semibold">
              owned and operated by Lucas Foster
            </span>{" "}
            — a licensed & insured electrician serving Upstate NY. We focus on
            clean, code-compliant installs and clear communication from estimate
            to final inspection.
          </motion.p>
          <motion.ul variants={stagger} className="space-y-3 mt-6">
            {[
              "Licensed & insured electricians",
              "Upfront, itemized estimates",
              "Clean, on-time workmanship",
            ].map((t, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex items-start gap-3"
              >
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

function Pricing() {
  const plans = [
    {
      name: "Service Call",
      price: "Request a quote",
      features: [
        "Diagnostic & repair",
        "Most minor fixes same day",
        "Fully stocked van",
      ],
      popular: false,
    },
    {
      name: "Upgrade Package",
      price: "Request a quote",
      features: [
        "Panel/service upgrade",
        "Permit & inspection coordination",
        "Surge protection included",
      ],
      popular: true,
    },
    {
      name: "Custom Project",
      price: "Request a quote",
      features: [
        "Remodels & additions",
        "New construction rough-in",
        "Project manager support",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-lime-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          eyebrow="Simple pricing"
          title="Request a Free Quote"
          subtitle="We’ll provide upfront estimates tailored to your project."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
          variants={stagger}
        >
          {plans.map((p, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card
                className={`rounded-2xl border ${
                  p.popular ? "border-lime-500 shadow-lg" : "border-gray-200"
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{p.name}</CardTitle>
                    {p.popular && (
                      <Badge className="bg-lime-500 text-black">Popular</Badge>
                    )}
                  </div>
                  <div className="text-2xl font-extrabold mt-2 text-lime-600">
                    {p.price}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    {p.features.map((f, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <Check className="h-4 w-4 mt-0.5 text-lime-500" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-2 bg-lime-500 text-black hover:bg-lime-600">
                    Choose {p.name}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      name: "Alex P.",
      role: "Homeowner",
      text: "Fast, clean, and everything works perfectly.",
    },
    {
      name: "Jordan K.",
      role: "Shop Owner",
      text: "Panel upgrade and lighting overhaul were flawless.",
    },
    {
      name: "Casey R.",
      role: "GC",
      text: "Reliable partner on our remodels—on time, on budget.",
    },
  ];
  return (
    <section id="testimonials" className="py-16 bg-lime-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading eyebrow="Loved by customers" title="What clients say" />
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <Card key={i} className="rounded-2xl h-full">
              <CardContent className="pt-6">
                <p className="italic">“{q.text}”</p>
                <div className="mt-4 text-sm text-muted-foreground">
                  {q.name} • {q.role}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const formAction = useMemo(
    () => "https://formsubmit.co/LukeElectricLLC@gmail.com",
    []
  );
  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          eyebrow="Let's talk"
          title="Get a free quote"
          subtitle="Fill out the form or call us directly."
        />
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl border border-lime-500 bg-white text-black">
            <CardContent className="pt-6 space-y-4">
              <form method="POST" action={formAction} className="space-y-4">
                <input
                  type="hidden"
                  name="_subject"
                  value="New lead from Luke Electric"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thanks for contacting Luke Electric! We'll get back to you shortly."
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://www.lukeelectric.com/#contact"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Your name" required />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    required
                  />
                </div>
                <Input name="phone" placeholder="Phone number" />
                <Textarea
                  name="message"
                  placeholder="Tell us about your project"
                  rows={6}
                  required
                />
                <input
                  type="text"
                  name="_honey"
                  style={{ display: "none" }}
                />
                <Button
                  type="submit"
                  className="w-full bg-lime-500 text-black hover:bg-lime-600"
                >
                  Send Message
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">
                No backend needed. If you prefer Formspree/Resend, we can switch
                to an API route later.
              </p>
            </CardContent>
          </Card>
          <div className="space-y-4 text-lime-500">
            <Card className="rounded-2xl border border-lime-500 bg-black text-white">
              <CardContent className="pt-6 space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> 518-755-1836
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> LukeElectricLLC@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> PO Box 137, Livingston, NY
                  12541
                </div>
              </CardContent>
            </Card>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-full border border-lime-500 hover:bg-lime-500 hover:text-black"
              >
                <Facebook
