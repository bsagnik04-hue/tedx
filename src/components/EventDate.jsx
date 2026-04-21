import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useInView } from "framer-motion";

function CountNumber({ value, duration = 1.6, className, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return undefined;
    }

    const counter = { value: 0 };
    const tween = gsap.to(counter, {
      value,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        setDisplayValue(Math.round(counter.value));
      },
    });

    return () => tween.kill();
  }, [duration, isInView, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix ? suffix : null}
    </span>
  );
}

export default function EventDate() {
  const dateRef = useRef(null);

  useEffect(() => {
    if (!dateRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".date-part",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: dateRef.current,
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".pulse-ring",
        { scale: 0.92, opacity: 0.3 },
        {
          scale: 1.08,
          opacity: 0.8,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
      );
    }, dateRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="event-date"
      ref={dateRef}
      data-reveal
      className="relative overflow-hidden px-6 py-24 md:px-10 md:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.22),transparent_30%)]" />
      <div className="relative mx-auto flex w-[min(92%,1100px)] flex-col items-center text-center">
        <p className="font-body text-xs uppercase tracking-[0.8em] text-red-300/60">Save The Date</p>

        <div className="relative mt-10 flex items-center justify-center">
          <div className="pulse-ring absolute h-52 w-52 rounded-full border border-red-500/30 md:h-72 md:w-72" />
          <div className="pulse-ring absolute h-72 w-72 rounded-full border border-red-400/15 md:h-96 md:w-96" />
          <div className="rounded-full border border-white/10 bg-black/55 px-8 py-8 shadow-glow-strong backdrop-blur-xl md:px-14 md:py-12">
            <p className="date-part font-display text-4xl font-black uppercase tracking-[0.18em] text-white sm:text-5xl md:text-7xl">
              April
            </p>
            <p className="date-part mt-2 font-display text-6xl font-black uppercase leading-none text-ted sm:text-7xl md:text-[8rem]">
              <CountNumber value={25} className="" />
              <sup className="ml-2 text-2xl text-white/65 md:text-4xl">th</sup>
            </p>
            <p className="date-part mt-2 font-display text-4xl font-black uppercase tracking-[0.25em] text-white sm:text-5xl md:text-7xl">
              <CountNumber value={2026} duration={2.1} className="" />
            </p>
          </div>
        </div>

        <p className="mt-10 max-w-2xl font-body text-base leading-8 text-gray-300 md:text-lg">
          One day. One red-lit stage. A room full of possibility, waiting for its next spark.
        </p>
      </div>
    </section>
  );
}
