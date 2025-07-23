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
              className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-xl shadow-md p-6 transition-all duration-300 hover:from-cyan-500 hover:to-indigo-500 hover:scale-105 hover:shadow-cyan-500/30"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {p.titulo}
              </h3>
              <p className="text-zinc-300">{p.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
