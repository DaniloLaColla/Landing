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
    <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-zinc-200">
        <h1 className="text-xl font-bold">Danilo La Colla</h1>

        <ul className="hidden md:flex space-x-6 text-sm">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="hover:text-white transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex space-x-4 text-lg">
          <a
            href="https://github.com/DaniloLaColla"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/danilolacolla/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </header>
  );
}
