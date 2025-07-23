import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Stack } from "./components/Stack";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsappButton } from "./components/WhatsappButton";


export default function App() {
  return (
    <main className="bg-gradient-to-b from-zinc-900 via-indigo-900 to-black text-white font-sans scroll-smooth relative overflow-x-hidden">
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="stack"><Stack /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <Footer />
      <WhatsappButton />
    </main>
  );
}
