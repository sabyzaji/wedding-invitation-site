import imgMonogram from "@/assests/j-e.png";
import { Calendar, MapPin, Church } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative text-center py-20 lg:py-28 px-6 bg-gradient-to-b from-card/40 via-card/70 to-card/95 border-t border-border/50 overflow-hidden">
      {/* Subtle warm halo glow for desktop luxury aesthetic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[32rem] h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4">
        {/* Monogram Crest with Graceful Gradient Lines */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-7">
          <div className="h-px w-14 sm:w-28 md:w-36 bg-gradient-to-r from-transparent via-primary/30 to-primary/60" />
          <div className="p-1 rounded-full border border-primary/30 bg-card/90 shadow-sm backdrop-blur-xs">
            <img
              src={imgMonogram}
              alt="J & E Monogram"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover"
            />
          </div>
          <div className="h-px w-14 sm:w-28 md:w-36 bg-gradient-to-l from-transparent via-primary/30 to-primary/60" />
        </div>

        {/* Names */}
        <h3 className="font-carattere text-5xl sm:text-6xl lg:text-7xl text-foreground font-normal mb-2 tracking-normal leading-tight">
          Jithin <span className="italic text-primary font-carattere text-4xl sm:text-5xl lg:text-6xl">&amp;</span> Elsa
        </h3>

        {/* Scripture Quote */}
        <p className="font-display text-base sm:text-lg lg:text-xl italic text-muted-foreground/90 max-w-lg mx-auto leading-relaxed mb-2.5">
          "Therefore what God has joined together, let no one separate."
        </p>
        <p className="font-body text-[10px] sm:text-xs tracking-[0.28em] uppercase text-primary font-medium mb-9">
          Mark 10:9
        </p>

        {/* Event Details: Responsive (Stacked on mobile, Single Elegant Line on web/desktop) */}
        <div className="pt-7 border-t border-border/60 max-w-2xl lg:max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 lg:gap-8 text-xs sm:text-sm font-body text-muted-foreground">
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>October 19, 2026</span>
            </span>

            <span className="hidden sm:inline text-primary/40 font-bold">•</span>

            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              <Church className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>St. Mary's Cathedral, Manarcad</span>
            </span>

            <span className="hidden sm:inline text-primary/40 font-bold">•</span>

            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>Kottayam, Kerala</span>
            </span>
          </div>
        </div>

        {/* Family Blessings on Web & Mobile */}
        <p className="font-body text-xs sm:text-sm text-muted-foreground/80 mt-9 tracking-wider max-w-xl mx-auto leading-relaxed px-2">
          With love, gratitude, and blessings from Abraham &amp; Kurian families
        </p>
      </div>
    </footer>
  );
}
