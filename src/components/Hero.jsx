export function Hero() {
  return (
    <section
      data-aos="fade-up"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-zinc-900 to-zinc-800"
    >
      <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-4">
        Automatización a tu Medida
      </h1>
      <p className="text-lg sm:text-xl max-w-2xl text-zinc-300 mb-8">
        Ingeniero en Sistemas especializado en automatizar procesos con IA, bots conversacionales e integraciones que ahorran tiempo y potencian resultados.
      </p>
      <a
        href="#projects"
        className="bg-indigo-500 hover:bg-indigo-600 transition text-white px-6 py-3 rounded-full text-lg shadow-lg"
      >
        Ver mis proyectos
      </a>
      <a
        href="/cv-danilo-la-colla.pdf"
        download
        className="mt-4 border border-indigo-500 hover:bg-indigo-500 transition text-indigo-300 hover:text-white px-6 py-3 rounded-full text-lg"
      >
        Descargar CV
      </a>

    </section>
  );
}
