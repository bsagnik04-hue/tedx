import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./components/About";
import Contact from "./components/Contact";
import EventDate from "./components/EventDate";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Theme from "./components/Theme";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Theme", href: "#theme" },
  { label: "Date", href: "#event-date" },
  { label: "Contact", href: "#contact" },
];

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="relative flex flex-col items-center gap-6">
        <div className="absolute h-40 w-40 rounded-full bg-red-600/30 blur-3xl" />
        <motion.div
          className="h-28 w-20 rounded-[1.75rem] border border-white/15 bg-gradient-to-b from-white/10 to-red-600/20 shadow-glow"
          initial={{ rotate: -18, y: 14, opacity: 0 }}
          animate={{ rotate: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
        <div className="text-center">
          <p className="font-body text-xs uppercase tracking-[0.65em] text-white/55">
            TEDx MSRIT
          </p>
          <p className="mt-2 font-display text-3xl font-black uppercase tracking-[0.35em] text-white">
            Reverie
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const updatePosition = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", updatePosition);
    return () => window.removeEventListener("pointermove", updatePosition);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-30 hidden h-64 w-64 rounded-full bg-red-600/10 blur-3xl md:block"
      style={{
        transform: `translate(${position.x - 128}px, ${position.y - 128}px)`,
      }}
    />
  );
}

function Navbar() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 mx-auto w-[min(94%,1200px)]"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.7 }}
    >
      <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-black/45 px-5 py-3 backdrop-blur-xl">
        <a href="#hero" className="font-display text-sm font-black uppercase tracking-[0.32em] text-white">
          TED<span className="text-ted">x</span> MSRIT
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm text-white/70 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-red-500/30 bg-red-600/90 px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-red-500"
        >
          Join Us
        </a>
      </div>
    </motion.header>
  );
}

function AmbientLayers() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(255,0,0,0.24),_transparent_28%),linear-gradient(180deg,#000000_0%,#090909_45%,#130202_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.08] [background-size:60px_60px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)] bg-hero-grid" />
      <div className="grain-overlay fixed inset-0 -z-10 opacity-20" />
    </>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const repeatingWords = useMemo(
    () => Array.from({ length: 12 }, () => "REVERIE   WHERE IDEAS DREAM INTO REALITY"),
    [],
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1900);

    const sections = gsap.utils.toArray("[data-reveal]");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        },
      );
    });

    return () => {
      window.clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black text-white">
      <AnimatePresence>{isLoading ? <Loader /> : null}</AnimatePresence>
      <AmbientLayers />
      <CursorGlow />
      <Navbar />

      <main className="relative overflow-hidden">
        <div className="border-y border-white/6 bg-black/40 py-3 mt-[88px]">
          <div className="marquee-track whitespace-nowrap font-display text-xs font-bold uppercase tracking-[0.5em] text-white/30">
            <div className="animate-marquee">
              {repeatingWords.map((word, index) => (
                <span key={`${word}-${index}`} className="mx-5 inline-block">
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
        <Hero />
        <About />
        <Features />
        <Theme />
        <EventDate />
        <Contact />
      </main>
    </div>
  );
}
