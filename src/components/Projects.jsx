export function Projects() {
  const proyectos = [
    {
      titulo: "Bot de Monitoreo para Zabbix",
      descripcion:
        "Bot conversacional que consulta el estado de Zabbix, alerta al equipo y traduce lenguaje natural a comandos útiles.",
    },
    {
      titulo: "Automatización de Infraestructura Cisco",
      descripcion:
        "Herramientas para backups y actualizaciones de firmware en dispositivos Cisco vía SSH (Netmiko), con logs en InfluxDB y visualización en Grafana.",
    },
    {
      titulo: "Desarrollo de Sistemas a Medida",
      descripcion:
        "Soluciones a medida para automatizar procesos, crear paneles web o cargar datos con IA adaptados a tu negocio.",
    },
  ];

  return (
    <section
      id="projects"
      data-aos="fade-left"
      className="px-6 py-20 bg-zinc-950 text-zinc-100"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%] animate-gradient-x">
            Proyectos
          </span>
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {proyectos.map((p, i) => (
            <div
              key={i}
              className="rounded-xl p-6 shadow-lg bg-zinc-800 text-white border border-zinc-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:via-purple-500 hover:to-indigo-500 hover:bg-[length:200%_200%] hover:animate-gradient-x hover:scale-105 hover:brightness-110"
            >
              <h3 className="text-xl font-semibold mb-2">{p.titulo}</h3>
              <p className="text-sm text-zinc-100">{p.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
