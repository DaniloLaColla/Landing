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
    <form
      ref={form}
      onSubmit={sendEmail}
      className="space-y-4 max-w-xl mx-auto text-left bg-zinc-900 p-6 rounded-2xl shadow-lg"
    >
      <input
        type="text"
        name="user_name"
        placeholder="Tu nombre"
        required
        className="w-full px-4 py-3 bg-zinc-800 text-white rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Tu email"
        required
        className="w-full px-4 py-3 bg-zinc-800 text-white rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />
      <textarea
        name="message"
        placeholder="Tu mensaje"
        required
        className="w-full px-4 py-3 bg-zinc-800 text-white rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition h-32 resize-none"
      ></textarea>
      <button
        type="submit"
        className="bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-500 bg-[length:200%_200%] animate-gradient-x hover:scale-105 hover:brightness-110 transition-transform text-white px-6 py-3 rounded-full text-lg shadow-lg w-full text-center"
      >
        Enviar mensaje
      </button>
      {sent && (
        <p className="text-green-400 mt-2 text-center animate-pulse">
          ¡Mensaje enviado con éxito!
        </p>
      )}
    </form>
  );
}
