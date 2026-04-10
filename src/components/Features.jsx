import { motion } from "framer-motion";
import { Globe2, Mic2, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Mic2,
    title: "Curated Speakers",
    description: "A sharp lineup of innovators, creators, and thinkers with stories that move minds.",
  },
  {
    icon: Users,
    title: "Networking Opportunities",
    description: "Meaningful room-energy, unexpected collisions, and conversations that continue beyond the stage.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Ideas with the potential to travel far beyond campus through the TEDx ecosystem.",
  },
  {
    icon: Sparkles,
    title: "Media & Digital Reach",
    description: "A visually rich event crafted to resonate on stage, on screen, and across social platforms.",
  },
];

export default function Features() {
  return (
    <section id="features" data-reveal className="relative py-24 md:py-32">
      <div className="mx-auto w-[min(92%,1200px)]">
        <div className="max-w-2xl">
          <p className="font-body text-xs uppercase tracking-[0.7em] text-red-300/65">Highlights</p>
          <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none text-white sm:text-5xl md:text-6xl">
            Built for impact on stage and beyond.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.12 }}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,0,0,0.22),transparent_28%),linear-gradient(180deg,transparent,rgba(255,255,255,0.02))] opacity-80 transition duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="inline-flex rounded-2xl border border-red-500/30 bg-red-600/10 p-4 text-red-300 shadow-glow">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-black uppercase tracking-[0.08em] text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-4 max-w-md font-body text-base leading-7 text-white/68">
                    {feature.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
