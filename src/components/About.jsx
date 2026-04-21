import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      data-reveal
      className="relative mx-auto grid w-[min(92%,1200px)] gap-12 py-24 md:grid-cols-[1.1fr_0.9fr] md:py-32"
    >
      <div>
        <p className="font-body text-xs uppercase tracking-[0.7em] text-red-300/65">About</p>
        <h2 className="mt-5 font-display text-4xl font-black uppercase leading-none text-white sm:text-5xl md:text-6xl">
          About TEDx MSRIT
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          A TEDx experience designed to bring together ideas, innovation, and inspiring voices.
          Through powerful talks and immersive storytelling, we aim to spark conversations that
          shape perspectives and drive meaningful change.
        </p>
      </div>

      <motion.div
        className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-red-700/10 p-7 shadow-glow"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(255,0,0,0.18),transparent_28%)]" />
        <div className="relative flex h-full flex-col justify-between">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.6em] text-gray-300">Edition 2026</p>
            <p className="mt-6 max-w-xs font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
              A poster translated into an experience.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Immersive visual identity",
              "Story-led stage design",
              "Sharp curation",
              "High-energy campus audience",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/35 px-4 py-5 font-body text-sm uppercase tracking-[0.24em] text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
