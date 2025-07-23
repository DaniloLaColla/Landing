import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-20 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-zinc-100"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%] animate-gradient-x">
            Contacto
          </span>
        </h2>
        <p className="mb-8 text-zinc-400 text-lg">
          ¿Tenés una idea, proyecto o querés automatizar procesos? <br /> Escribime, me encantaría ayudarte.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
