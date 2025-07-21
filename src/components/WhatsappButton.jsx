import { FaWhatsapp } from "react-icons/fa";

export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5492984219804?text=Hola%20Danilo%2C%20vi%20tu%20portfolio%20y%20me%20gustaría%20hablar%20sobre%20..."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
