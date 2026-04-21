import { motion } from "framer-motion";

function HandSilhouette({ side = "left" }) {
  const positionClass = side === "left" ? "left-0 -translate-x-1/4" : "right-0 translate-x-1/4 scale-x-[-1]";

  return (
    <div
      className={`pointer-events-none absolute bottom-0 hidden h-[420px] w-[220px] opacity-40 lg:block ${positionClass}`}
    >
      <svg viewBox="0 0 220 420" className="h-full w-full fill-red-500/10 stroke-red-400/20">
        <path d="M89 18c17 5 22 25 20 45l-3 48h12l9-72c1-11 11-18 22-15s17 14 15 26l-10 97h13l9-78c1-12 12-20 24-17 11 3 18 15 16 27l-12 110c-5 44-14 85-35 123-13 24-31 44-55 57l-53 29-36-65 31-16c15-7 21-20 24-36l13-81-29 18c-16 10-36 6-47-9-11-15-8-36 7-48l51-41 7-117c1-18 14-30 30-25Z" />
      </svg>
    </div>
  );
}

export default function Theme() {
  return (
    <section
      id="theme"
      data-reveal
      className="relative overflow-hidden px-6 py-24 md:px-10 md:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,0,0,0.16),transparent_32%)]" />
      <HandSilhouette side="left" />
      <HandSilhouette side="right" />

      <div className="relative mx-auto flex w-[min(92%,1200px)] flex-col items-center text-center">
        <motion.p
          className="font-body text-xs uppercase tracking-[0.8em] text-red-300/60"
          initial={{ opacity: 0, letterSpacing: "0.25em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.8em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          Theme
        </motion.p>
        <motion.h2
          className="mt-8 font-display text-[4rem] font-black uppercase leading-none text-white drop-shadow-[0_0_35px_rgba(255,0,0,0.25)] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          Reverie
        </motion.h2>
        <motion.p
          className="mt-6 max-w-2xl font-body text-lg text-gray-300 md:text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          Where ideas dream into reality.
        </motion.p>

        <div className="mt-12 grid w-full gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <motion.div
            className="relative mx-auto h-[320px] w-full max-w-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-3xl" />
            <div className="absolute left-8 top-14 h-44 w-28 rounded-[1.8rem] border border-white/15 bg-gradient-to-b from-white/20 to-red-600/20 shadow-glow" />
            <div className="absolute right-10 top-8 h-56 w-36 rounded-[2rem] border border-white/15 bg-gradient-to-b from-white/15 via-white/10 to-red-700/25 shadow-glow-strong" />
            <div className="absolute bottom-12 left-1/2 h-48 w-32 -translate-x-1/2 rounded-[2rem] border border-white/15 bg-gradient-to-b from-white/5 to-red-500/25 shadow-glow" />
          </motion.div>

          <motion.div
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-left md:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.4em] text-red-300/58">Cinematic Direction</p>
            <p className="mt-6 font-body text-base leading-8 text-white/70 md:text-lg">
              Reverie captures the fragile, thrilling space between imagination and action. The
              visual world leans into floating objects, theatrical contrast, and stage-ready
              tension to create a website that feels less like a brochure and more like an opening
              sequence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Bold Ideas", "Dream-state Visuals", "Live Energy", "Future-facing Stories"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/40 px-4 py-2 font-body text-xs uppercase tracking-[0.28em] text-gray-300"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
