import "../styles/topslider.css";

const items = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "NestJS",
  "UI/UX",
  "Framer Motion",
  "API REST",
  "PostgreSQL",
  "MongoDB",
  "Design System",
];

export default function TopSlider() {
  return (
    <div className="w-full h-[32px] overflow-hidden bg-zinc-950">
      <div className="carousel-track">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="slider-item"
          >
            <span className="text-base font-semibold leading-none">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
