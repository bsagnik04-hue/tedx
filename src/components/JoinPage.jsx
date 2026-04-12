import { AnimatePresence, motion } from "framer-motion";
import { Instagram, X } from "lucide-react";

export default function JoinPage({ isOpen, onClose, onOpenRegistration }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-black/80 px-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-black/95 shadow-glow-strong"
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:text-white"
              aria-label="Close join page"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="px-6 py-8 md:px-8 md:py-10">
              <p className="font-body text-xs uppercase tracking-[0.7em] text-red-300/65">Join Us</p>
              <h2 className="mt-4 font-display text-4xl font-black uppercase text-white md:text-5xl">
                Stay connected
              </h2>
              <p className="mt-4 max-w-xl font-body text-base leading-8 text-white/68">
                Follow our journey, announcements, and speaker reveals on Instagram before you register.
              </p>

              <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-red-500/30 bg-red-600/10 text-red-200">
                  <Instagram className="h-6 w-6" />
                </div>
                <p className="mt-5 font-body text-xs uppercase tracking-[0.35em] text-white/45">
                  Instagram
                </p>
                <a
                  href="https://instagram.com/tedxmsrit"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block break-all font-display text-3xl font-black uppercase text-white transition hover:text-red-200"
                >
                  @tedxmsrit
                </a>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={onOpenRegistration}
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-red-500/30 bg-red-600 px-6 py-4 font-body text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-red-500"
                >
                  Register Now
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 font-body text-sm font-semibold uppercase tracking-[0.24em] text-white/75 transition hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
