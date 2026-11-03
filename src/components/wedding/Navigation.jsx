// import imgMonogram from "@/assests/j-e.png";
import { useState, useEffect } from "react";
import { Heart, Menu, X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#welcome", label: "Welcome" },
  { href: "#venue", label: "The Venue" },
  { href: "#schedule", label: "Schedule" },
  { href: "#our-story", label: "Our Story" },
  { href: "#gallery", label: "Moments" },
];

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#welcome");

  useEffect(() => {
    const sections = navLinks.map((n) => document.querySelector(n.href));
    let ticking = false;

    const updateNavState = () => {
      setScrolled(window.scrollY > 60);

      const idx = sections.reduce((found, el, i) => {
        if (el && el.getBoundingClientRect().top <= 140) return i;
        return found;
      }, 0);

      setActive(navLinks[idx]?.href ?? "#welcome");
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateNavState);
    };

    updateNavState();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setIsOpen(false);
    scrollTo(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border/60"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Couple Name - Only visible when navbar has background (scrolled) */}
          <button
            onClick={() => handleNav("#welcome")}
            className={`flex items-center gap-2.5 group text-left transition-all duration-500 ${
              scrolled
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-1 pointer-events-none select-none"
            }`}
            tabIndex={scrolled ? 0 : -1}
            aria-hidden={!scrolled}
          >
            {/* <img
              src={imgMonogram}
              alt="J & E Monogram"
              className="w-8 h-8 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform"
            /> */}
            <span className="font-carattere text-2xl lg:text-3xl tracking-normal font-normal text-foreground leading-none">
              Jithin{" "}
              <span className="font-carattere text-xl lg:text-2xl text-primary/80">
                &amp;
              </span>{" "}
              Elsa
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`relative font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 px-1 py-2 ${isActive
                    ? scrolled
                      ? "text-primary font-semibold"
                      : "text-amber-300 font-semibold drop-shadow"
                    : scrolled
                      ? "text-muted-foreground hover:text-primary"
                      : "text-white/80 hover:text-white drop-shadow-sm"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className={`absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full ${scrolled ? "bg-primary" : "bg-amber-300"
                        }`}
                    />
                  )}
                </button>
              );
            })}

            {/* <button
              onClick={() => handleNav("#schedule")}
              className={`inline-flex items-center gap-1.5 font-body text-xs tracking-wider uppercase px-4 py-2 rounded-full transition-all shadow-sm hover:shadow ${
                scrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-amber-600/90 hover:bg-amber-600 text-white backdrop-blur-sm border border-amber-300/40"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Oct 19, 2026</span>
            </button> */}
          </div>

          {/* Mobile right actions: Date pill + Hamburger menu */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* <button
              onClick={() => handleNav("#schedule")}
              className={`inline-flex items-center gap-1.5 font-body text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full transition-all shadow-sm ${scrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-amber-600/90 text-white backdrop-blur-sm border border-amber-300/40"
                }`}
            >
              <Calendar className="w-3 h-3" />
              <span>Oct 19, 2026</span>
            </button> */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-all duration-500 ${
                scrolled || isOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto text-foreground hover:bg-primary/10"
                  : "opacity-0 -translate-y-1 pointer-events-none select-none text-white"
              }`}
              tabIndex={scrolled || isOpen ? 0 : -1}
              aria-hidden={!scrolled && !isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-lg border-b border-border shadow-lg"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className={`font-body text-sm tracking-[0.15em] uppercase text-left px-4 py-3 rounded-md transition-colors ${active === link.href
                    ? "bg-primary/15 text-primary font-medium"
                    : "text-muted-foreground hover:bg-muted/60"
                    }`}
                >
                  {link.label}
                </motion.button>
              ))}

              {/* <div className="pt-2 mt-2 border-t border-border/50">
                <button
                  onClick={() => handleNav("#schedule")}
                  className="w-full text-center font-body text-xs tracking-widest uppercase bg-primary text-primary-foreground py-3 rounded-full"
                >
                  October 19, 2026 · Save the Date
                </button>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
