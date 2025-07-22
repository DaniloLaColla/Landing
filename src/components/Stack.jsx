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
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">Stack Tecnológico</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="bg-zinc-800 px-4 py-2 rounded-full text-sm border border-zinc-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }
  