import { Instagram, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <footer
      id="contact"
      data-reveal
      className="relative border-t border-white/10 bg-black/70 px-6 py-16 md:px-10"
    >
      <div className="mx-auto grid w-[min(92%,1200px)] gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-display text-3xl font-black uppercase tracking-[0.14em] text-white sm:text-4xl">
            TED<span className="text-ted">x</span> MSRIT
          </p>
          <p className="mt-4 max-w-xl font-body text-base leading-7 text-white/65">
            A premium event experience inspired by the visual language of posters, performance, and
            possibility.
          </p>
        </div>

        <a
          href="#hero"
          className="inline-flex rounded-full border border-red-500/30 bg-red-600 px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-red-500"
        >
          Register Now
        </a>
      </div>

      <div className="mx-auto mt-12 grid w-[min(92%,1200px)] gap-6 border-t border-white/10 pt-10 md:grid-cols-3">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
          <p className="font-body text-xs uppercase tracking-[0.55em] text-red-300/60">Coordinator</p>
          <p className="mt-4 font-display text-2xl font-black uppercase text-white">Taejaswinee P J </p>
          <p className="mt-2 font-body text-white/65">Student Coordinator, TEDx MSRIT</p>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
          <p className="font-body text-xs uppercase tracking-[0.55em] text-red-300/60">Contact</p>
          <a
            href="tel:+919876543210"
            className="mt-4 flex items-center gap-3 font-body text-white/78 transition hover:text-white"
          >
            <Phone className="h-4 w-4 text-red-300" />
            +91 97401 87071
          </a>
          <a
            href="mailto:tedxmsrit@msrit.edu"
            className="mt-3 flex items-center gap-3 font-body text-white/78 transition hover:text-white"
          >
            <Mail className="h-4 w-4 text-red-300" />
            tedxmsrit@msrit.edu
          </a>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
          <p className="font-body text-xs uppercase tracking-[0.55em] text-red-300/60">Social</p>
          <a
            href="https://instagram.com/tedxmsrit"
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center gap-3 font-body text-white/78 transition hover:text-white"
          >
            <Instagram className="h-4 w-4 text-red-300" />
            @tedxmsrit
          </a>
          <p className="mt-5 font-body text-sm uppercase tracking-[0.3em] text-white/40">
            Independently organized TEDx event
          </p>
        </div>
      </div>
    </footer>
  );
}
