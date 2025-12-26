"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  ChevronUp,
} from "lucide-react";

// Icono de TikTok
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  // Detectar scroll para mostrar/ocultar botón de regreso arriba
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer para animaciones del footer
  useEffect(() => {
    const footerElement = document.getElementById("main-footer");

    if (!footerElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFooterVisible(true);
          }
        });
      },
      {
        threshold: 0.1, // Se activa cuando el 10% del footer es visible
      }
    );

    observer.observe(footerElement);

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Email:", email, "Message:", message);
    setEmail("");
    setMessage("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer id="main-footer" className="bg-[#9a2d8f] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 md:divide-x md:divide-white/20">
            {/* Columna 1: Identidad */}
            <div
              className={`flex flex-col space-y-4 md:pr-8 lg:pr-12 transition-all duration-900 ease-out ${isFooterVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-[50px] scale-95'
                }`}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="w-40 h-auto">
                <Image
                  src="/images/logo-movilis-footer.png"
                  alt="Instituto Movilis"
                  width={160}
                  height={60}
                  className="w-40 h-auto"
                />
              </div>
              <div className="space-y-4 text-sm font-light text-white/90">
                {/* Llámanos */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-[#F9EB1D]">Llámanos</h4>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#F9EB1D]" />
                    <span>593 99 130 3196</span>
                  </div>
                </div>
                {/* Escríbenos */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-[#F9EB1D]">Escríbenos</h4>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#F9EB1D]" />
                    <a
                      href="mailto:info@movilis.edu.ec"
                      className="hover:text-[#F9EB1D] transition-colors duration-200"
                    >
                      info@movilis.edu.ec
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna 2: Enlaces Institucionales */}
            <div
              className={`flex flex-col space-y-4 md:px-8 lg:px-12 transition-all duration-900 ease-out ${isFooterVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-[50px] scale-95'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h3 className="text-base font-semibold text-[#F9EB1D]">
                Movilis
              </h3>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/transparencia"
                  className="text-sm font-light text-white/90 hover:text-[#F9EB1D] transition-colors duration-200"
                >
                  Transparencia
                </Link>
                <Link
                  href="/correo-institucional"
                  className="text-sm font-light text-white/90 hover:text-[#F9EB1D] transition-colors duration-200"
                >
                  Correo Institucional
                </Link>
                <Link
                  href="/equipo-movilis"
                  className="text-sm font-light text-white/90 hover:text-[#F9EB1D] transition-colors duration-200"
                >
                  Equipo MOVILIS
                </Link>
                <Link
                  href="/noticias"
                  className="text-sm font-light text-white/90 hover:text-[#F9EB1D] transition-colors duration-200"
                >
                  Noticias
                </Link>
                <Link
                  href="/politica-privacidad"
                  className="text-sm font-light text-white/90 hover:text-[#F9EB1D] transition-colors duration-200"
                >
                  Política de Privacidad
                </Link>
              </nav>
            </div>

            {/* Columna 3: Conecta */}
            <div
              className={`flex flex-col space-y-4 md:pl-8 lg:pl-12 transition-all duration-900 ease-out ${isFooterVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-[50px] scale-95'
                }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="text-base font-semibold text-[#F9EB1D]">
                ¿Tienes dudas?
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu email"
                    required
                    className="w-full bg-transparent border-0 border-b border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-[#F9EB1D] transition-colors duration-200 pb-2 text-sm font-light"
                  />
                </div>
                <div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tu mensaje"
                    required
                    rows={3}
                    className="w-full bg-transparent border-0 border-b border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-[#F9EB1D] transition-colors duration-200 pb-2 text-sm font-light resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="text-sm font-light text-[#F9EB1D] border border-[#F9EB1D]/30 hover:border-[#F9EB1D] hover:bg-[#F9EB1D]/10 px-4 py-2 rounded transition-all duration-200"
                >
                  Enviar
                </button>
              </form>

              {/* Redes Sociales */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#F9EB1D] transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#F9EB1D] transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#F9EB1D] transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#F9EB1D] transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#F9EB1D] transition-colors duration-200"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div
            className={`mt-12 pt-8 border-t border-white/10 text-center text-sm font-light text-white/70 transition-all duration-900 ease-out ${isFooterVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-[50px] scale-95'
              }`}
            style={{ transitionDelay: '600ms' }}
          >
            <p>
              © {new Date().getFullYear()} Instituto Movilis. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Botón Flotante de Regreso Arriba */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#9a2d8f] border-2 border-[#F9EB1D] rounded-full p-4 shadow-lg hover:scale-110 hover:bg-[#7a1d6f] transition-all duration-300 animate-fade-in"
          aria-label="Volver arriba"
        >
          <ChevronUp className="h-6 w-6 text-[#F9EB1D]" strokeWidth={3} />
        </button>
      )}

      {/* Botón Flotante de WhatsApp */}
      <a
        href="https://web.whatsapp.com/send?phone=593991303169&text=Hola%2C+necesito+mas+información"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          className="h-6 w-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </>
  );
}
