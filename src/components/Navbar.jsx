import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Navbar() {
  const links = [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre mí", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950/80 backdrop-blur border-b border-zinc-800 shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-zinc-200">
        <h1 className="text-xl sm:text-2xl font-bold">
  <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%] animate-gradient-x">
    Danilo La Colla
  </span>
</h1>

        <ul className="hidden md:flex space-x-6 text-sm">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="hover:text-cyan-400 transition-colors hover:underline underline-offset-4"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex space-x-4 text-xl">
          <a
            href="https://github.com/DaniloLaColla"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/danilolacolla/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </header>
  );
}
