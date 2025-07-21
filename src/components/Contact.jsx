import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" data-aos="zoom-in" className="px-6 py-20 bg-zinc-900 text-zinc-100">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contacto</h2>
        <p className="mb-8 text-zinc-400">
          También podés escribirme por este formulario y te respondo por mail.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
