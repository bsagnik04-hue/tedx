import { motion } from "framer-motion";

const fallbackSpeakerImage = "/speaker-fallback.svg";

export default function Speakers({ speakers, loading, error }) {
  return (
    <section id="speakers" data-reveal className="relative py-24 md:py-32">
      <div className="mx-auto w-[min(92%,1200px)]">
        <div className="max-w-3xl">
          <p className="font-body text-xs uppercase tracking-[0.7em] text-red-300/65">Speakers</p>
          <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none text-white sm:text-5xl md:text-6xl">
            Voices shaping the Reverie stage.
          </h2>
          <p className="mt-6 max-w-2xl font-body text-base leading-8 text-white/68 md:text-lg">
            The section is powered by Supabase, so you can update speakers without touching the
            layout. Until then, the seeded lineup keeps the site presentation-ready.
          </p>
        </div>

        {error ? (
          <div className="mt-8 rounded-[1.5rem] border border-red-500/20 bg-red-500/10 px-5 py-4 font-body text-sm text-red-100/90">
            Could not load live speakers from Supabase. Showing default seeded speakers instead.
          </div>
        ) : null}

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {speakers.map((speaker, index) => (
            <motion.article
              key={speaker.id}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,0,0,0.2),transparent_32%)] opacity-80" />
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden border-b border-white/10 bg-gradient-to-b from-white/10 to-red-900/10">
                  <img
                    src={speaker.image_url || fallbackSpeakerImage}
                    alt={speaker.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading={index > 1 ? "lazy" : "eager"}
                    onError={(event) => {
                      if (event.currentTarget.src.endsWith(fallbackSpeakerImage)) {
                        return;
                      }

                      event.currentTarget.src = fallbackSpeakerImage;
                    }}
                  />
                </div>
                <div className="p-6">
                  <p className="font-body text-xs uppercase tracking-[0.5em] text-red-300/60">
                    {loading ? "Loading" : "Featured"}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-black uppercase tracking-[0.08em] text-white">
                    {speaker.name}
                  </h3>
                  <p className="mt-3 font-body text-sm uppercase tracking-[0.3em] text-white/55">
                    {speaker.title}
                  </p>
                  <p className="mt-5 font-body text-base leading-7 text-white/68">
                    {speaker.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
