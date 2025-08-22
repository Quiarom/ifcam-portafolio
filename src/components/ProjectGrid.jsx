import { useState, useMemo } from "react";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Product Design UX/UI", value: "Product Design UX/UI" },
  { label: "Vibe coding", value: "Vibe Coding" },
  { label: "Consulting", value: "Consulting" },
];

export default function ProjectGrid({ projects }) {
  const [filter, setFilter] = useState("all");

  const filterButtonDelays = FILTERS.map((_, i) => 1800 + (i + 1) * 100);

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => (p.data.categories || []).includes(filter));
  }, [projects, filter]);

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-8 w-full max-w-full">
        {FILTERS.map((f, i) => (
          <button
            key={f.value}
            className={`filter-btn motion-preset-slide-left motion-ease-spring-bouncier px-6 py-2 rounded-full text-sm font-medium border-2 transition-colors ${
              filter === f.value
                ? "bg-white text-gray-900 border-white"
                : "bg-transparent text-[#BABABA] border-white/30 hover:bg-white/10"
            }`}
            style={{ animationDelay: `${filterButtonDelays[i]}ms` }}
            onClick={() => {setFilter(f.value);}}
            aria-pressed={filter === f.value}
            type="button"
          >
            {f.label}
          </button>
        ))}
      </div>
      {/* Grilla de proyectos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-full pb-4">
        {filtered.map((post, index) => (
          <article
            key={post.id}
            className={`
              project-item group
              opacity-0 translate-y-8
              animate-fade-in-up
            `}
            style={{
              animationDelay: `${(index % 2) * 120 + Math.floor(index / 2) * 180}ms`,
              animationFillMode: "forwards",
            }}
            aria-label={post.data.title}
          >
            <a href={`/portfolio/${post.id}`} className="block" tabIndex={0}>
              {post.data.image && (
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={post.data.image.src}
                    alt={post.data.image.alt}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              )}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent-light dark:group-hover:text-gray-300 transition-colors">
                    {post.data.title}
                  </h3>
                  <img src="/images/dot.svg" alt="Dot" className="w-2 h-4 mt-1" />
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    {post.data.publishDate.getFullYear()}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {post.data.description}
                </p>
              </div>
            </a>
          </article>
        ))}
      </div>
      {/* Animación fade-in-up */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(32px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </>
  );
}