import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vkrs7oi",
        "template_z3exak9",
        form.current,
        "tp-xeGVEm9NqWoke8"
      )
      .then(() => {
        setSent(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-lg mx-auto text-left">
      <input
        type="text"
        name="user_name"
        placeholder="Tu nombre"
        required
        className="w-full px-4 py-2 bg-zinc-800 text-white rounded"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Tu email"
        required
        className="w-full px-4 py-2 bg-zinc-800 text-white rounded"
      />
      <textarea
        name="message"
        placeholder="Tu mensaje"
        required
        className="w-full px-4 py-2 bg-zinc-800 text-white rounded h-32"
      ></textarea>
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded"
      >
        Enviar mensaje
      </button>
      {sent && <p className="text-green-400 mt-2">¡Mensaje enviado con éxito!</p>}
    </form>
  );
}
