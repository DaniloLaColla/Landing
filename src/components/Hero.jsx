export function Hero() {
  return (
    <section
      data-aos="fade-up"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-zinc-900 to-zinc-800"
    >
      <h1 className="text-4xl sm:text-6xl font-bold mb-10 text-center">
        <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%] animate-gradient-x">
          Automatización a tu Medida
        </span>
      </h1>
      <p className="text-lg sm:text-xl max-w-2xl text-zinc-300 mb-8">
        Ingeniero en Sistemas especializado en automatizar procesos con IA, bots conversacionales e integraciones que ahorran tiempo y potencian resultados.
      </p>
     <a
      href="#projects"
      className="px-6 py-3 rounded-full text-lg font-medium text-white bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-500 bg-[length:200%_200%] animate-gradient-x transition-all duration-500 hover:scale-105 hover:brightness-110"
    >
      Ver mis proyectos
    </a>

      <a
        href="/cv-danilo-la-colla.pdf"
        download
        className="mt-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-500 bg-[length:200%_200%] animate-gradient-x hover:scale-105 hover:brightness-110 transition-transform text-white px-6 py-3 rounded-full text-lg shadow-lg"
      >
        Descargar CV
      </a>


    </section>
  );
}
