import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const floatingCards = [
  { id: 1, className: "left-[10%] top-[18%] h-36 w-24 md:h-48 md:w-32", rotate: -18 },
  { id: 2, className: "right-[8%] top-[16%] h-40 w-28 md:h-56 md:w-36", rotate: 14 },
  { id: 3, className: "left-[12%] bottom-[14%] h-28 w-20 md:h-40 md:w-28", rotate: 18 },
  { id: 4, className: "right-[14%] bottom-[10%] h-32 w-24 md:h-44 md:w-32", rotate: -14 },
];

function Card({ rotate, className, delay, label }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: 50, rotate }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 1.1, delay, ease: "easeOut" }}
      whileHover={{ y: -10, rotate: rotate * 0.8, scale: 1.03 }}
    >
      <div className="group relative h-full w-full overflow-hidden rounded-[1.9rem] border border-white/15 bg-gradient-to-b from-white/20 via-white/8 to-red-600/20 p-4 shadow-glow backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),transparent_30%),linear-gradient(180deg,transparent,rgba(255,0,0,0.18))]" />
        <div className="relative flex h-full flex-col justify-between">
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.45em] text-white/45">
              TEDx
            </p>
            <p className="mt-2 font-display text-2xl font-black text-white/90">MSRIT</p>
          </div>
          <div>
            <div className="mb-3 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <p className="font-body text-xs uppercase tracking-[0.3em] text-white/70">{label}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero({ onOpenRegistration }) {
  const { scrollYProgress } = useScroll();
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -240]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-24 md:px-10"
    >
      <motion.div
        className="absolute left-[-10%] top-[20%] h-72 w-72 rounded-full bg-red-600/25 blur-[120px]"
        style={{ y: yLeft }}
      />
      <motion.div
        className="absolute right-[-8%] top-[10%] h-[26rem] w-[26rem] rounded-full bg-red-700/20 blur-[120px]"
        style={{ y: yRight }}
      />

      {floatingCards.map((card, index) => (
        <Card
          key={card.id}
          className={card.className}
          rotate={card.rotate}
          delay={0.55 + index * 0.14}
          label={index % 2 === 0 ? "Reverie" : "Ideas"}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_32%,rgba(0,0,0,0.82)_82%)]" />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl text-center"
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      >
        <p className="mb-5 font-body text-xs uppercase tracking-[0.78em] text-red-200/70 md:text-sm">
          Ideas. Design. Imagination.
        </p>
        <h1 className="font-display text-[3rem] font-black uppercase leading-[0.88] tracking-[0.08em] text-white drop-shadow-[0_0_22px_rgba(255,0,0,0.22)] sm:text-[4.6rem] md:text-[7rem] lg:text-[8.5rem]">
          TED<span className="text-ted">x</span> MSRIT
        </h1>
        <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        <p className="mx-auto mt-8 max-w-2xl font-body text-lg leading-relaxed text-white/72 md:text-xl">
          Where ideas dream into reality through a cinematic evening of bold stories, sharp minds,
          and unforgettable conversations.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={onOpenRegistration}
            className="group inline-flex items-center gap-3 rounded-full border border-red-400/30 bg-red-600 px-7 py-4 font-body text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-glow transition hover:bg-red-500"
          >
            Register Now
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
          <a
            href="#about"
            className="inline-flex rounded-full border border-white/15 bg-white/5 px-7 py-4 font-body text-sm uppercase tracking-[0.26em] text-white/75 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
          >
            Discover the Story
          </a>
        </div>
      </motion.div>
    </section>
  );
}
