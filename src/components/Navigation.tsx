import { useState, useEffect, useMemo, useRef } from 'react';

type NavItem = { id: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Refs to each tab for measurements
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const barRef = useRef<HTMLDivElement | null>(null);
  const underlineRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Measure and animate indicator to active item
  const moveIndicator = () => {
    const el = itemRefs.current[activeSection];
    const container = containerRef.current;
    if (!el || !container || !barRef.current || !underlineRef.current) return;

    const { left: cLeft } = container.getBoundingClientRect();
    const { left, width, height } = el.getBoundingClientRect();
    const x = left - cLeft;

    // Smoothly animate via CSS transitions
    barRef.current.style.transform = `translateX(${x}px)`;
    barRef.current.style.width = `${width}px`;

    underlineRef.current.style.transform = `translateX(${x + 8}px)`; // small inset
    underlineRef.current.style.width = `${Math.max(0, width - 16)}px`;
    underlineRef.current.style.top = `${height + 2}px`;
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map(n => n.id);
      const y = window.scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { offsetTop, offsetHeight } = el;
        if (y >= offsetTop && y < offsetTop + offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reposition indicator when active changes or on resize
  useEffect(() => {
    moveIndicator();
  }, [activeSection]);

  useEffect(() => {
    const ro = new ResizeObserver(() => moveIndicator());
    if (containerRef.current) ro.observe(containerRef.current);
    Object.values(itemRefs.current).forEach(el => el && ro.observe(el));
    const onResize = () => moveIndicator();
    window.addEventListener('resize', onResize);
    setTimeout(moveIndicator, 0); // after first paint
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="font-heading font-bold text-xl text-foreground hover:opacity-80 transition"
            aria-label="Go to Home"
          >
            {/* Logo */}
          </button>

          {/* Desktop */}
          <div className="hidden md:block relative">
            <div ref={containerRef} className="relative flex items-center gap-1">
              {/* Sliding pill */}
              <div
                ref={barRef}
                className="absolute h-9 rounded-xl bg-primary/20 transition-[transform,width] duration-300 ease-out will-change-transform"
                style={{ transform: 'translateX(0)', width: 0 }}
                aria-hidden
              />
              {/* Tabs */}
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    ref={(el) => (itemRefs.current[item.id] = el)}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative z-10 px-4 h-9 rounded-xl font-medium
                      transition-colors ${isActive ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'}
                    `}
                    onMouseEnter={() => {
                      // hover preview (optional): move underline only
                      const prev = activeSection; // keep active pill
                      const el = itemRefs.current[item.id];
                      const container = containerRef.current;
                      if (!el || !container || !underlineRef.current) return;
                      const { left: cLeft } = container.getBoundingClientRect();
                      const { left, width, height } = el.getBoundingClientRect();
                      const x = left - cLeft;
                      underlineRef.current.style.transform = `translateX(${x + 8}px)`;
                      underlineRef.current.style.width = `${Math.max(0, width - 16)}px`;
                      underlineRef.current.style.top = `${height + 2}px`;
                    }}
                    onMouseLeave={() => moveIndicator()}
                  >
                    {item.label}
                  </button>
                );
              })}
              {/* Sliding underline (separate so it can preview on hover) */}
              <div
                ref={underlineRef}
                className="absolute h-[2px] bg-foreground/80 rounded-full transition-[transform,width,top] duration-300 ease-out will-change-transform"
                style={{ transform: 'translateX(0)', width: 0 }}
                aria-hidden
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="px-3 py-2 rounded-lg text-sm border hover:bg-foreground/5">
              Menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
