export function Projects() {
    const proyectos = [
      {
        titulo: "Bot de Monitoreo para Zabbix",
        descripcion: "Bot conversacional que consulta el estado de Zabbix, alerta al equipo y traduce lenguaje natural a comandos útiles.",
      },
      {
        titulo: "Automatización de Infraestructura Cisco",
        descripcion: "Desarrollo de herramientas para realizar backups y actualizaciones de firmware en switches y routers Cisco usando SSH (Netmiko), con registro de estado en InfluxDB y visualización de resultados en Grafana.",
      },
      {
        titulo: "Desarrollo de Sistemas a Medida",
        descripcion: "Soluciones a medida para automatizar procesos empresariales, gestionar información o crear herramientas internas. Desde paneles web hasta carga inteligente de datos con IA.",
      }

    ];
    return (
      <section
        id="projects"
        data-aos="fade-left"
        className="px-6 py-20 bg-zinc-950 text-zinc-100"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Proyectos</h2>
          <div className="space-y-6">
            {proyectos.map((p, i) => (
              <div key={i} className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                <h3 className="text-xl font-semibold mb-2">{p.titulo}</h3>
                <p className="text-zinc-400">{p.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  