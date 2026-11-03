import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  ChevronDown,
  Calendar,
  MapPin,
  Clock,
  Church,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from "lucide-react";

// Optimized wedding photography
import imgHeroCover from "@/assests/LGP08588.jpeg";
import imgMainFrame from "@/assests/optimized/main_frame.webp";
import imgPortraitFull from "@/assests/optimized/LGP02926.webp";
import imgBloomsSmile from "@/assests/optimized/LGP07819.webp";
import imgBench from "@/assests/optimized/LGP02055.webp";
import imgBookEmbrace from "@/assests/optimized/LGP00718.webp";
import imgFloralSmile from "@/assests/optimized/LGP08131.webp";
import imgWalkBack from "@/assests/optimized/LGP03033.webp";
import imgWalkLawn from "@/assests/optimized/LGP03092.webp";
import imgMistHands from "@/assests/optimized/LGP09908.webp";
import imgHillBackToBack from "@/assests/optimized/LGP09446.webp";
import imgMotorcycleStand from "@/assests/optimized/LGP03379.webp";
import imgMotorcycleWide from "@/assests/optimized/LGP03408.webp";
import church from "@/assests/optimized/manarkad_church.webp";
import parishHallImg from "@/assests/optimized/parish-hall.webp";

// ── Constants & URLs ──────────────────────────────────────────────────────────
const CHURCH_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=St.+Mary%27s+Jacobite+Syrian+Cathedral%2C+Manarcad%2C+Kottayam";
const PARISH_HALL_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=St.+Mary%27s+Cathedral+Parish+Hall%2C+Manarcad%2C+Kottayam";
const GROOM_HOME_MAP_URL =
  "https://maps.app.goo.gl/Qffnb3dxW3V4tpYk7?g_st=aw";
const BRIDE_HOME_MAP_URL =
  "https://maps.app.goo.gl/DC5aiDW1EDzXsqbb6?g_st=aw";

// Guaranteed working Google Maps Embed for St. Mary's Cathedral, Manarcad
const CHURCH_EMBED_URL =
  "https://maps.google.com/maps?q=St.+Mary's+Jacobite+Syrian+Cathedral,+Manarcad,+Kottayam&t=&z=15&ie=UTF8&iwloc=&output=embed";

// Countdown target: Oct 19, 2026, 3:00 PM IST (UTC+5:30)
const COUNTDOWN_TARGET = new Date("2026-10-19T15:00:00+05:30").getTime();
const COUNTDOWN_UNITS = ["DAYS", "HOURS", "MINUTES", "SECONDS"];

// Google Calendar Event Link
const GOOGLE_CALENDAR_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=" + encodeURIComponent("Wedding of Jithin Abraham & Elsa Kurian") +
  "&dates=" + "20261019T093000Z/20261019T143000Z" +
  "&details=" + encodeURIComponent(
    "Holy Matrimony of Jithin Abraham & Elsa Kurian.\n\n" +
    "Ceremony: 3:00 PM at St. Mary's Jacobite Syrian Cathedral, Manarcad.\n" +
    "Reception: 6:00 PM at St. Mary's Cathedral Parish Hall (H.G Geevarghese Mor. Gregorious Memorial Hall).\n\n" +
    "We eagerly await your presence and blessings!"
  ) +
  "&location=" + encodeURIComponent("St. Mary's Jacobite Syrian Cathedral, Manarcad, Kottayam, Kerala 686019");

// ── Schedule Data ─────────────────────────────────────────────────────────────
const scheduleEvents = [
  {
    id: "eve",
    day: "Sunday",
    date: "October 18, 2026",
    title: "Eve of Wedding",
    time: "6:30 PM",
    venue: "Groom’s Home, Puthenparambil House, Amayannor, Kottayam",
    venueMapUrl: GROOM_HOME_MAP_URL,
    secondaryVenue: "Bride’s Home, Onattu House, Parampuzha, Kottayam",
    secondaryVenueMapUrl: BRIDE_HOME_MAP_URL,
    desc: "An auspicious evening of prayer, traditional blessings, songs, and joyful family fellowship on the eve of the holy sacrament.",
    featured: false,
    tag: "Family Blessing",
  },
  {
    id: "ceremony",
    day: "Monday",
    date: "October 19, 2026",
    title: "The Wedding Ceremony",
    subtitle: "Holy Matrimony",
    time: "3:00 PM",
    venue: "St. Mary's Jacobite Syrian Cathedral, Manarcad",
    venueMapUrl: CHURCH_MAP_URL,
    desc: "In the sacred presence of Almighty God, our beloved families, and dear friends, Jithin & Elsa will be united in holy matrimony.",
    featured: true,
    tag: "Main Ceremony",
  },
  {
    id: "reception",
    day: "Monday",
    date: "October 19, 2026",
    title: "Wedding Reception",
    subtitle: "H.G Geevarghese Mor. Gregorious Memorial Hall",
    time: "6:00 PM",
    venue: "St. Mary's Jacobite Syrian Cathedral Parish Hall, Manarcad",
    venueMapUrl: PARISH_HALL_MAP_URL,
    desc: "Join us for an evening of joyous banquet, music, laughter, and heartwarming celebrations to toast the newlyweds!",
    featured: false,
    tag: "Dinner & Celebration",
    image: parishHallImg,
  },
];

// ── Story Chapters (Curated Symmetrical 3:4 Pairs) ────────────────────────────
const storyChapters = [
  {
    chapter: "Chapter One",
    title: "Roots Under the Same Sky",
    quote: "Two lives living moments apart, waiting for God’s quiet timing.",
    text: (
      <>
        Raised just moments apart beneath the same church bells, they walked parallel paths on familiar hometown lanes. Two souls gently prepared by heaven—waiting for the right hour to cross paths in <span className="text-rose-700 font-semibold tracking-wide">grace</span>.
      </>
    ),
    img1: imgBookEmbrace,
    caption1: "Our Favorite Chapter",
    img2: imgMistHands,
    caption2: "Hand in Hand in Faith",
    layout: "right",
  },
  {
    chapter: "Chapter Two",
    title: "When Two Families Spoke as One",
    quote: "A single conversation where two hearts felt instantly at home.",
    text: (
      <>
        When both families joined hands in blessing, an introduction became an awakening. A single conversation dissolved all distance—unfolding shared dreams and a gentle peace meant to be lived <span className="text-rose-700 font-semibold tracking-wide">together</span>.
      </>
    ),
    img1: imgBloomsSmile,
    caption1: "Blooms & Gentle Smiles",
    img2: imgFloralSmile,
    caption2: "Tender Whispers",
    layout: "left",
  },
  {
    chapter: "Chapter Three",
    title: "Two Whispers, One Beautiful 'Yes'",
    quote: "Two lives, one shared prayer, and a lifetime of tomorrows.",
    text: (
      <>
        With hearts completely certain, two quiet whispers answered as one sacred <span className="text-rose-700 font-semibold tracking-wide">Yes</span>. Returning to the altar where they first prayed, they step forward to pledge their <span className="text-rose-700 font-semibold tracking-wide">love</span> for eternity.
      </>
    ),
    img1: imgMotorcycleStand,
    caption1: "Riding Into Tomorrow",
    img2: imgBench,
    caption2: "Quiet Companionship",
    layout: "right",
  },
];

// ── Curated Gallery Moments (Pinterest Masonry Layout) ────────────────────────
const allGalleryPhotos = [
  {
    src: imgWalkLawn,
    title: "Vintage Romance",
    caption: "Smiles, petals, and timeless joy",
  },
  {
    src: imgMainFrame,
    title: "Together in Harmony",
    caption: "Holding hands in the quiet embrace of love",
  },
  {
    src: imgPortraitFull,
    title: "Traditional Elegance",
    caption: "Rooted in heritage, family blessings, and love",
  },
  {
    src: imgBookEmbrace,
    title: "Our Storybook Chapter",
    caption: "A quiet embrace and a story written for a lifetime",
  },
  {
    src: imgBloomsSmile,
    title: "Blooms & Radiance",
    caption: "Cherishing every tender smile and fresh blossom",
  },
  {
    src: imgFloralSmile,
    title: "Gentle Harmony",
    caption: "Warm smiles and sweet daisy whispers",
  },
  {
    src: imgMotorcycleWide,
    title: "Riding Into Tomorrow",
    caption: "Ready for life's grandest and most beautiful journey",
  },
  {
    src: imgMistHands,
    title: "Hand in Hand in Faith",
    caption: "Holding hands with quiet faith amidst misty heights",
  },
  {
    src: imgHillBackToBack,
    title: "Side by Side Forever",
    caption: "Standing strong together on the hilltop breezes",
  },
  {
    src: imgBench,
    title: "Quiet Companionship",
    caption: "Gentle serenity in each other's presence",
  },
  {
    src: imgWalkBack,
    title: "The Path Ahead",
    caption: "Walking hand in hand toward eternity",
  },
  {
    src: imgMotorcycleStand,
    title: "Modern Classic",
    caption: "A touch of style for our forever story",
  },
];

// ── Utility Helper Components ─────────────────────────────────────────────────
function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 py-4">
      <div className="h-px w-10 bg-primary/20" />
      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
      <div className="h-px w-10 bg-primary/20" />
    </div>
  );
}

function SectionHeading({ title, subtitle, kicker }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12 lg:mb-16"
    >
      {kicker && (
        <p className="font-body text-[11px] tracking-[0.3em] uppercase text-primary font-medium mb-3">
          {kicker}
        </p>
      )}
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-foreground tracking-wide">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-sm sm:text-base text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <Divider />
    </motion.div>
  );
}

// ── Countdown Timer (Matching Mockup Card) ───────────────────────────────────
function getTimeRemaining(targetTime) {
  const distance = targetTime - Date.now();
  if (distance <= 0) {
    return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    expired: false,
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

function CountdownCard() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(COUNTDOWN_TARGET));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeRemaining(COUNTDOWN_TARGET));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (timeLeft.expired) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-black/60 px-6 py-2.5 text-white backdrop-blur-md">
        <Heart className="h-4 w-4 fill-amber-300 text-amber-300" />
        <span className="font-body text-xs uppercase tracking-[0.25em] font-medium">
          The Blessed Day Is Here!
        </span>
      </div>
    );
  }

  const units = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HOURS" },
    { value: timeLeft.minutes, label: "MINUTES" },
    { value: timeLeft.seconds, label: "SECONDS" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="w-full"
    >
      <div className="rounded-2xl border border-white/20 bg-black/55 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
        <div className="grid grid-cols-4 divide-x divide-white/20 text-center">
          {units.map((unit) => (
            <div key={unit.label} className="px-1 sm:px-2">
              <div className="font-display text-xl sm:text-2xl lg:text-3xl text-white font-normal">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="mt-0.5 font-body text-[7.5px] sm:text-[8.5px] uppercase tracking-[0.2em] text-white/75 font-semibold">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        {/* Twin hearts and subtitle matching mockup */}
        <div className="mt-1.5 flex flex-col items-center gap-1">
          <div className="flex items-center justify-center gap-1.5">
            <div className="h-px w-6 bg-amber-300/40" />
            <div className="flex items-center gap-1">
              <Heart className="w-2.5 h-2.5 fill-amber-300 text-amber-300" />
              <Heart className="w-2.5 h-2.5 fill-amber-300 text-amber-300" />
            </div>
            <div className="h-px w-6 bg-amber-300/40" />
          </div>
          <p className="font-body text-[10px] sm:text-xs uppercase tracking-[0.25em] text-amber-200 text-center font-semibold">
            COUNTING DOWN TO FOREVER
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ── Lightbox Component ────────────────────────────────────────────────────────
function Lightbox({ photos, activeIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  const activePhoto = photos[activeIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-lg p-4 sm:p-6"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 sm:left-6 z-50 p-2.5 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 sm:right-6 z-50 p-2.5 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.img
          key={activePhoto.src}
          src={activePhoto.src}
          alt={activePhoto.title}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
        />
        <div className="mt-4 text-center text-white">
          <h4 className="font-display text-xl sm:text-2xl font-light">
            {activePhoto.title}
          </h4>
          <p className="font-body text-xs sm:text-sm text-white/70 mt-1">
            {activePhoto.caption}
          </p>
          <span className="font-body text-[10px] tracking-widest uppercase text-amber-200/90 mt-2 inline-block">
            {activeIndex + 1} of {photos.length}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Home Component ───────────────────────────────────────────────────────
export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState(null);


  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevLightbox = () =>
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : allGalleryPhotos.length - 1));
  const nextLightbox = () =>
    setLightboxIndex((prev) => (prev < allGalleryPhotos.length - 1 ? prev + 1 : 0));

  return (
    <div className="bg-background">
      <section
        id="welcome"
        className="relative min-h-screen"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={imgHeroCover}
            alt="Jithin Abraham and Elsa Kurian"
            className="md:hidden w-full h-full object-cover object-[62%_top] pointer-events-none select-none"
          />

          {/* Desktop Background: 130% width edge-to-edge, couple framed left */}
          <img
            src={imgHeroCover}
            alt="Jithin Abraham and Elsa Kurian"
            className="hidden md:block w-[130%] max-w-none h-full object-cover object-[center_37%] -translate-x-[12%] lg:-translate-x-[16%] pointer-events-none select-none"
          />


        </div>

        {/* ── MOBILE HERO VIEW (ANIMATED, FITS 100DVH FIRST SCREEN CLEARLY) ──── */}
        <div className="relative z-20 flex flex-col justify-between h-[100dvh] max-h-[100dvh] px-3.5 pt-14 pb-2.5 overflow-hidden md:hidden">

          {/* Decorative gold foliage accents on margins with subtle fade-in */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.35, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute left-0 top-[42%] w-14 pointer-events-none z-10"
          >
            <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-amber-200">
              <path d="M5 100 C25 90, 50 80, 60 60 C65 50, 70 35, 55 25 C40 15, 30 30, 35 45 C40 60, 70 75, 90 85 M15 110 C35 120, 55 125, 70 115 C80 105, 75 90, 65 95 C55 100, 40 105, 30 125" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.35, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute right-0 top-[20%] w-14 pointer-events-none z-10"
          >
            <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-amber-200">
              <path d="M95 100 C75 90, 50 80, 40 60 C35 50, 30 35, 45 25 C60 15, 70 30, 65 45 C60 60, 30 75, 10 85 M85 110 C65 120, 45 125, 30 115 C20 105, 25 90, 35 95 C45 100, 60 105, 70 125" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Top-Left Block: Jithin & Elsa over the dark tree trunk */}
          <div className="w-full max-w-[280px] sm:max-w-xs text-left pt-1.5 pl-1">
            {/* Kicker with trailing gold rule */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-2 mb-1.5"
            >
              <span className="font-body text-base sm:text-lg tracking-[0.28em] uppercase text-amber-200 font-semibold">
                TOGETHER FOREVER
              </span>
            </motion.div>

            {/* Names Block with staggered fade and slide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9 }}
            >
              <h1 className="font-carattere text-7xl sm:text-8xl font-normal text-white tracking-normal leading-[0.88]">
                Jithin
              </h1>

              <div className="my-2 flex items-center gap-2.5">
                <div className="h-px w-8 bg-amber-300/60" />
                <Heart className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                <span className="font-carattere text-4xl sm:text-5xl text-amber-200 leading-none">&amp;</span>
                <Heart className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                <div className="h-px w-8 bg-amber-300/60" />
              </div>

              <h1 className="font-carattere text-7xl sm:text-8xl font-normal text-white tracking-normal leading-[0.88]">
                Elsa
              </h1>
            </motion.div>
          </div>

          {/* Center Spacer: Dynamically leaves Elsa & Jithin's faces and smiles completely clear */}
          <div className="flex-1 min-h-[15px]" />

          {/* Bottom Section: Scripture, Badges, Countdown Card, Centered Down Arrow */}
          <div className="w-full flex flex-col items-center">
            {/* Scripture Quote */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="w-full text-center px-3 mb-1.5"
            >
              <p className="font-display text-xs sm:text-sm italic text-amber-100/95 leading-tight">
                "I have found the one whom my soul loves."
              </p>
              <p className="font-body text-[7.5px] sm:text-[8px] tracking-[0.25em] uppercase text-amber-300 font-semibold mt-0.5">
                SONG OF SOLOMON 3:4
              </p>
            </motion.div>

            {/* Event Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-full space-y-1 mb-1.5"
            >
              {/* Row 1: Date & Time */}
              <div className="grid grid-cols-2 gap-1.5 text-xs font-body text-white/95">
                <div className="flex items-center justify-center gap-1 bg-black/60 backdrop-blur-md py-1 px-2 rounded-full border border-white/20 shadow-sm text-center">
                  <Calendar className="w-2.5 h-2.5 text-amber-300 shrink-0" />
                  <span className="text-[9.5px] truncate">Monday, Oct 19, 2026</span>
                </div>
                <div className="flex items-center justify-center gap-1 bg-black/60 backdrop-blur-md py-1 px-2 rounded-full border border-white/20 shadow-sm text-center">
                  <Clock className="w-2.5 h-2.5 text-amber-300 shrink-0" />
                  <span className="text-[9.5px]">3:00 PM IST</span>
                </div>
              </div>

              {/* Row 2: Cathedral Venue */}
              <a
                href={CHURCH_MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 bg-black/60 hover:bg-black/80 backdrop-blur-md py-1 px-3 rounded-full border border-white/20 shadow-sm text-white/95 text-xs font-body transition-colors active:scale-98"
              >
                <MapPin className="w-2.5 h-2.5 text-amber-300 shrink-0" />
                <span className="text-[9.5px] truncate">St. Mary's Cathedral, Manarcad</span>
              </a>
            </motion.div>

            {/* Countdown Card & Centered Scroll Down Arrow */}
            <div className="w-full flex flex-col items-center">
              <CountdownCard />

              {/* Circular down arrow: cleanly centered below countdown without negative margins */}
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                href="#invitation"
                aria-label="Scroll down to invitation"
                className="mt-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/55 hover:bg-black/80 border border-white/25 backdrop-blur-md flex items-center justify-center text-white/90 shadow-md transition-transform active:scale-95"
              >
                <ChevronDown className="w-3.5 h-3.5 animate-bounce text-amber-200" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* ── DESKTOP HERO VIEW (PRESERVED: md & lg) ─────────────────────────── */}
        <div className="hidden md:flex relative z-20 w-full pl-6 sm:pl-10 md:pl-14 lg:pl-20 xl:pl-24 pr-6 pt-28 pb-16 flex-col justify-center items-start min-h-screen">
          <div className="max-w-lg lg:max-w-xl w-full text-left sm:mr-auto">
            {/* Kicker: — TOGETHER FOREVER — */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-amber-300/60" />
              <span className="font-body text-sm sm:text-base lg:text-lg tracking-[0.32em] uppercase text-amber-200 font-semibold">
                TOGETHER FOREVER
              </span>
              <div className="h-px w-8 bg-amber-300/60" />
            </motion.div>

            {/* Names Block */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="mb-4"
            >
              <h1 className="font-carattere text-7xl sm:text-8xl lg:text-9xl font-normal text-white tracking-normal leading-[0.88]">
                Jithin
              </h1>

              <div className="my-2.5 flex items-center gap-3">
                <Heart className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                <div className="h-px w-8 bg-amber-300/50" />
                <span className="font-carattere text-4xl sm:text-5xl lg:text-6xl text-amber-200 leading-none">
                  &amp;
                </span>
                <div className="h-px w-8 bg-amber-300/50" />
                <Heart className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              </div>

              <h1 className="font-carattere text-7xl sm:text-8xl lg:text-9xl font-normal text-white tracking-normal leading-[0.88]">
                Elsa
              </h1>
            </motion.div>

            {/* Scripture Quote */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-display text-lg sm:text-2xl italic text-white/95 mt-2"
            >
              "I have found the one whom my soul loves."
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-body text-[10px] tracking-[0.25em] uppercase text-amber-200/90 mt-1 mb-5 font-semibold"
            >
              SONG OF SOLOMON 3:4
            </motion.p>

            {/* Event Badges (Date, Time, Cathedral Pills) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs font-body mb-6 text-white/90"
            >
              <div className="flex items-center gap-2 bg-black/55 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-amber-300" />
                <span>Monday, October 19, 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-black/55 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-sm">
                <Clock className="w-3.5 h-3.5 text-amber-300" />
                <span>3:00 PM IST</span>
              </div>
              <a
                href={CHURCH_MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-black/55 hover:bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-sm cursor-pointer transition-colors"
              >
                <Church className="w-3.5 h-3.5 text-amber-300" />
                <span>St. Mary's Cathedral, Manarcad</span>
              </a>
            </motion.div>

            {/* Live Countdown Card (Desktop) */}
            <div className="w-full max-w-md mb-6">
              <CountdownCard />
            </div>
          </div>

          {/* Centered Bouncing Chevron at Bottom */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors">
            <a href="#venue" aria-label="Scroll to venue details">
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      <section id="invitation" className="pt-24 lg:pt-32 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            kicker="You Are Joyfully Invited"
            title="The Celebration of Our Union"
            subtitle="To love and to cherish, under God's watchful grace"
          />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Couple traditional standing portrait in 3:4 Aspect Ratio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="relative mx-auto max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-xl bg-muted">
                <img
                  src={imgPortraitFull}
                  alt="Jithin Abraham and Elsa Kurian in traditional attire"
                  loading="lazy"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center text-white">
                  <p className="font-display text-xl sm:text-2xl font-light">
                    Jithin &amp; Elsa
                  </p>
                  <p className="font-body text-[10px] tracking-widest uppercase text-white/80">
                    Two Souls · One Covenant
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Invitation text card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col justify-center bg-card/70 backdrop-blur-xs p-8 sm:p-10 rounded-2xl border border-border shadow-sm"
            >
              <div className="inline-flex items-center gap-2 text-primary font-body text-xs tracking-widest uppercase mb-4">
                <Heart className="w-3.5 h-3.5 fill-primary" />
                <span>Together with their families</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-5">
                Jithin Abraham <br />
                <span className="text-2xl sm:text-3xl text-primary font-serif italic">&amp;</span> Elsa Kurian
              </h3>

              <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                With hearts full of praise to Almighty God and profound gratitude to our parents,
                we joyfully request the honour of your presence and earnest prayers as we unite in
                holy matrimony.
              </p>

              <div className="my-6 pl-4 border-l border-primary/30 py-0.5">
                <p className="font-display text-base sm:text-lg italic text-foreground/90 leading-relaxed">
                  "And above all these put on love, which binds everything together in perfect harmony."
                </p>
                <span className="font-body text-[10px] tracking-[0.25em] uppercase text-primary font-medium mt-1.5 block">
                  Colossians 3:14
                </span>
              </div>

              {/* Groom & Bride Details - 2 Columns on both Mobile & Desktop */}
              <div className="grid grid-cols-2 gap-3 sm:gap-6 border-t border-primary/20 pt-5 sm:pt-6">
                {/* Groom Box */}
                <div>
                  <h4 className="font-display text-lg sm:text-xl font-medium text-foreground tracking-tight leading-snug">
                    Jithin Abraham
                  </h4>
                  <div className="text-xs text-muted-foreground leading-relaxed pt-1.5 sm:pt-2">
                    <p className="font-medium text-foreground/90">Puthenparambil House</p>
                    <p className="text-[11px] text-muted-foreground">Amayannor P O, Kottayam</p>
                  </div>
                </div>

                {/* Bride Box */}
                <div>
                  <h4 className="font-display text-lg sm:text-xl font-medium text-foreground tracking-tight leading-snug">
                    Elsa Kurian
                  </h4>
                  <div className="text-xs text-muted-foreground leading-relaxed pt-1.5 sm:pt-2">
                    <p className="font-medium text-foreground/90">Onattu House</p>
                    <p className="text-[11px] text-muted-foreground">Parampuzha P O, Kottayam</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="venue" className="pt-24 lg:pt-32 px-6 bg-gradient-to-b from-card/30 via-card/70 to-card/30">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            kicker="The Divine Sanctuary"
            title="The Cathedral"
            subtitle="St. Mary's Jacobite Syrian Cathedral, Manarcad"
          />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Cathedral Photo (4:3 Aspect Ratio) with Location Overlay */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border border-border group relative aspect-[4/3] bg-muted"
            >
              <img
                src={church}
                alt="St. Mary's Jacobite Syrian Cathedral, Manarcad"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-[10px] uppercase tracking-widest font-medium mb-2">
                  Global Marian Pilgrim Centre
                </span>
                <p className="font-display text-xl sm:text-2xl font-light drop-shadow-sm mb-1">
                  St. Mary's Cathedral, Manarcad
                </p>
                <a
                  href={CHURCH_MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-white/90 hover:text-amber-200 transition-colors drop-shadow"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-300" />
                  <span className="underline underline-offset-4">View on Google Maps</span>
                </a>
              </div>
            </motion.div>

            {/* Cathedral Description & Revelation Quote */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 flex flex-col justify-center"
            >
              <span className="font-body text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-3">
                Sacred Heritage
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-light text-foreground mb-4">
                A Cathedral Built on Divine Revelation
              </h3>

              {/* Minimalist quote: editorial left border without heavy box */}
              <div className="my-5 pl-4 border-l border-primary/30 py-0.5">
                <p className="font-display text-base sm:text-lg italic text-foreground/90 leading-relaxed">
                  "St. Mary’s Cathedral Manarcad – the Global Marian Pilgrim Centre – is the only
                  church in Malankara, where the site of the church was given in a divine revelation."
                </p>
                <span className="font-body text-[10px] tracking-[0.25em] uppercase text-primary font-medium mt-1.5 block">
                  Historical Revelation · Manarcad Cathedral
                </span>
              </div>

              {/* Action Button: Get Directions */}
              <div className="mt-4">
                <a
                  href={CHURCH_MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/40 bg-background/80 hover:bg-primary hover:text-primary-foreground hover:border-primary text-xs font-semibold tracking-widest uppercase transition-all shadow-xs group"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary group-hover:text-primary-foreground transition-colors" />
                  <span>Get Directions</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="schedule" className="pt-24 lg:pt-32 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            kicker="Wedding Timeline"
            title="The Schedule of Events"
            subtitle="Join us across every sacred ceremony as we embark on this holy journey"
          />

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 -translate-x-px top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20" />

            {scheduleEvents.map((ev, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={ev.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative grid grid-cols-2 gap-10 mb-16 last:mb-0 items-center"
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10">
                    <div
                      className={`w-5 h-5 rounded-full border-4 border-background flex items-center justify-center shadow-md ${ev.featured ? "bg-primary ring-4 ring-primary/20" : "bg-primary/70"
                        }`}
                    />
                  </div>

                  {isLeft ? (
                    <>
                      <div className="pr-6 text-right">
                        <ScheduleCard ev={ev} align="right" />
                      </div>
                      <div className="pl-6" />
                    </>
                  ) : (
                    <>
                      <div className="pr-6" />
                      <div className="pl-6 text-left">
                        <ScheduleCard ev={ev} align="left" />
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {scheduleEvents.map((ev, i) => (
              <motion.div
                key={ev.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 border-background shadow-md flex-shrink-0 mt-2 ${ev.featured ? "bg-primary ring-2 ring-primary/25" : "bg-primary/70"
                      }`}
                  />
                  {i < scheduleEvents.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/40 to-primary/10 mt-2" />
                  )}
                </div>
                <div className="pb-6 flex-1">
                  <ScheduleCard ev={ev} align="left" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scripture footer */}
          <div className="text-center mt-16 p-8 rounded-2xl bg-card/60 border border-border/50 max-w-2xl mx-auto">
            <Heart className="w-5 h-5 text-primary mx-auto mb-3 fill-primary/40" />
            <p className="font-display text-xl sm:text-2xl italic text-foreground">
              "For where your treasure is, there your heart will be also."
            </p>
            <p className="font-body text-[10px] text-primary mt-2 tracking-[0.25em] uppercase font-semibold">
              Matthew 6:21
            </p>
          </div>
        </div>
      </section>

      <section id="our-story" className="pt-24 lg:pt-32 bg-gradient-to-b from-card/30 via-card/70 to-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            kicker="Our Journey"
            title="Our Story"
            subtitle="From hometown lanes to a sacred altar—a story written in grace and family blessings"
          />

          <div className="space-y-24 lg:space-y-32">
            {storyChapters.map((ch) => (
              <motion.div
                key={ch.chapter}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Text Side */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${ch.layout === "right" ? "lg:order-1" : "lg:order-2"
                    }`}
                >
                  <span className="font-body text-[11px] tracking-[0.35em] uppercase text-primary font-medium mb-3">
                    {ch.chapter}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4 leading-tight">
                    {ch.title}
                  </h3>
                  <div className="my-4 pl-3.5 border-l border-primary/25 py-0.5">
                    <p className="font-display text-base sm:text-lg italic text-foreground/85 leading-relaxed">
                      "{ch.quote}"
                    </p>
                  </div>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {ch.text}
                  </p>
                </div>

                {/* Symmetrical Dual Photo Grid (Both 3:4 Aspect Ratio, Same Height) */}
                <div
                  className={`lg:col-span-6 ${ch.layout === "right" ? "lg:order-2" : "lg:order-1"
                    }`}
                >
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {/* First Photo */}
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-border group bg-muted relative">
                      <img
                        src={ch.img1}
                        alt={ch.caption1}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <span className="font-body text-xs text-white">
                          {ch.caption1}
                        </span>
                      </div>
                    </div>

                    {/* Second Photo (Identical Aspect Ratio) */}
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-border group bg-muted relative">
                      <img
                        src={ch.img2}
                        alt={ch.caption2}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <span className="font-body text-xs text-white">
                          {ch.caption2}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="pt-24 lg:pt-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            kicker="Captured Memories"
            title="Cherished Moments"
            subtitle="A glimpse into the joy, laughter, and timeless beauty of our days leading to forever"
          />

          {/* Pinterest Masonry Layout (Seamless Multi-Column Flow) */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 sm:gap-6">
            {allGalleryPhotos.map((photo, index) => (
              <motion.div
                key={photo.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                onClick={() => openLightbox(index)}
                className="break-inside-avoid mb-4 sm:mb-6 relative group rounded-2xl overflow-hidden cursor-pointer border border-border shadow-sm hover:shadow-xl transition-all duration-500 bg-muted"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-base sm:text-lg font-light">
                        {photo.title}
                      </h4>
                      <p className="font-body text-[11px] text-white/80 line-clamp-1">
                        {photo.caption}
                      </p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white flex-shrink-0 ml-2">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <p className="text-center font-body text-xs text-muted-foreground mt-8">
            Tap any photograph to view in full resolution
          </p> */}
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={allGalleryPhotos}
            activeIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevLightbox}
            onNext={nextLightbox}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function ScheduleCard({ ev, align }) {
  return (
    <div
      className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${ev.featured
        ? "bg-card border-primary/40 shadow-lg ring-1 ring-primary/20"
        : "bg-card/70 border-border/70 shadow-sm"
        }`}
    >
      <div className={`flex flex-wrap items-center gap-2 mb-2 ${align === "right" ? "justify-end" : "justify-start"}`}>
        <span className="font-body text-[10px] tracking-[0.2em] uppercase font-semibold text-primary">
          {ev.day}, {ev.date}
        </span>
        {ev.tag && (
          <span
            className={`font-body text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full ${ev.featured
              ? "bg-primary text-primary-foreground font-medium"
              : "bg-muted text-muted-foreground"
              }`}
          >
            {ev.tag}
          </span>
        )}
      </div>

      <h4
        className={`font-display font-light text-foreground mb-1 ${ev.featured ? "text-2xl sm:text-3xl font-normal" : "text-xl sm:text-2xl"
          }`}
      >
        {ev.title}
      </h4>

      {ev.subtitle && (
        <p className="font-display text-sm sm:text-base italic text-primary/80 mb-2">
          {ev.subtitle}
        </p>
      )}

      {/* Optional Venue / Hall Photo */}
      {ev.image && (
        <div className="my-3.5 rounded-xl overflow-hidden border border-border shadow-sm group relative aspect-[16/9] bg-muted">
          <img
            src={ev.image}
            alt={ev.subtitle || ev.title}
            loading="lazy"
            className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          {ev.venueMapUrl && (
            <a
              href={ev.venueMapUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-[10px] font-body text-white transition-all border border-white/20 shadow-md"
            >
              <MapPin className="w-3 h-3 text-amber-300" />
              <span>Directions</span>
            </a>
          )}
        </div>
      )}

      {/* Timings and Venue Links */}
      <div
        className={`flex flex-col gap-2 font-body text-xs text-foreground/80 ${align === "right" ? "items-end text-right" : "items-start text-left"
          }`}
      >
        <span className="inline-flex items-center gap-2 text-primary font-medium">
          <Clock className="w-3.5 h-3.5 shrink-0" />
          <span>{ev.time}</span>
        </span>

        {ev.venueMapUrl ? (
          <a
            href={ev.venueMapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline leading-relaxed"
          >
            <MapPin className="inline-block w-3.5 h-3.5 text-primary/70 mr-1.5 -mt-0.5 align-middle shrink-0" />
            <span>{ev.venue}</span>
            <ExternalLink className="inline-block w-3 h-3 text-muted-foreground/60 ml-1.5 -mt-0.5 align-middle shrink-0" />
          </a>
        ) : (
          <span className="inline-block text-muted-foreground leading-relaxed">
            <MapPin className="inline-block w-3.5 h-3.5 text-primary/70 mr-1.5 -mt-0.5 align-middle shrink-0" />
            <span>{ev.venue}</span>
          </span>
        )}

        {ev.secondaryVenue && (
          ev.secondaryVenueMapUrl ? (
            <a
              href={ev.secondaryVenueMapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline leading-relaxed"
            >
              <MapPin className="inline-block w-3.5 h-3.5 text-primary/70 mr-1.5 -mt-0.5 align-middle shrink-0" />
              <span>{ev.secondaryVenue}</span>
              <ExternalLink className="inline-block w-3 h-3 text-muted-foreground/60 ml-1.5 -mt-0.5 align-middle shrink-0" />
            </a>
          ) : (
            <span className="inline-block text-muted-foreground leading-relaxed">
              <MapPin className="inline-block w-3.5 h-3.5 text-primary/70 mr-1.5 -mt-0.5 align-middle shrink-0" />
              <span>{ev.secondaryVenue}</span>
            </span>
          )
        )}
      </div>
    </div>
  );
}
