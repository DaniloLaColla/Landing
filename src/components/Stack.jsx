export function Stack() {
  const skills = [
    "Python", "JavaScript", "GPT", "React", "TailwindCSS",
    "PostgreSQL", "Vite", "APIs REST", "InfluxDB", "Grafana",
    "Telegram Bot", "Django", "n8n"
  ];

  return (
    <section
      data-aos="fade-up"
      className="px-6 py-20 bg-zinc-900 text-zinc-100"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%] animate-gradient-x">
            Stack Tecnológico
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-5 py-2 rounded-full text-sm font-medium bg-zinc-800 text-white border border-zinc-700 shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:via-purple-500 hover:to-indigo-500 hover:bg-[length:200%_200%] hover:animate-gradient-x hover:text-white hover:scale-105 hover:brightness-110"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
