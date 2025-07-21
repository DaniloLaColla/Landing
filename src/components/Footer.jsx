import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Danilo La Colla</p>
        <div className="flex space-x-4 text-lg">
          <a
            href="https://github.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
