import { useEffect, useState } from "react";
import r from "../assets/chevron_right_white.svg"
import l from "../assets/chevron_left_white.svg"

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    title: "New Collection",
    subtitle: "Minimal fashion for everyday elegance",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    title: "Skincare Essentials",
    subtitle: "Glow naturally with premium skincare",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    title: "Modern Streetwear",
    subtitle: "Comfort and style in one place",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // AUTO PLAY
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[500px] w-full overflow-hidden rounded-[6px]">
      
      {/* SLIDES */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative min-w-full h-full"
          >
            {/* IMAGE */}
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/35" />

            {/* CONTENT */}
            <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 text-white">
              <span className="mb-3 text-sm uppercase tracking-[0.3em] text-white/80">
                FORELSKET
              </span>

              <h1 className="max-w-[600px] text-5xl md:text-7xl font-bold leading-tight">
                {slide.title}
              </h1>

              <p className="mt-4 max-w-[500px] text-base md:text-lg text-white/90">
                {slide.subtitle}
              </p>

              <button className="mt-8 w-fit rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:scale-105">
                Shop now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition hover:bg-white/30"
      >
        <img src={l} className="h-[26px]" />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition hover:bg-white/30"
      >
        <img src={r} className="h-[26px]" />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "w-10 bg-white"
                : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}