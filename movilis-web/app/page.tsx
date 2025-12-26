"use client";

import { useState, useEffect } from "react";

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [noticiasVisible, setNoticiasVisible] = useState(false);
    const [aliadosVisible, setAliadosVisible] = useState(false);

    // Datos del carrusel (simulados)
    const slides = [
        {
            title: "Instituto Movilis",
            subtitle: "Educación de excelencia para tu futuro",
            gradient: "from-[#881E80] to-[#9a2d8f]",
        },
        {
            title: "Formación Profesional",
            subtitle: "Carreras técnicas y tecnológicas de calidad",
            gradient: "from-[#9a2d8f] to-[#b03da5]",
        },
        {
            title: "Campus Virtual",
            subtitle: "Aprende desde cualquier lugar del mundo",
            gradient: "from-[#7a1d6f] to-[#881E80]",
        },
    ];

    // Cambio automático de slides cada 5 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    // Intersection Observer para animaciones de noticias
    useEffect(() => {
        const noticiasElement = document.getElementById("noticias-section");

        if (!noticiasElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setNoticiasVisible(true);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(noticiasElement);

        return () => {
            if (noticiasElement) {
                observer.unobserve(noticiasElement);
            }
        };
    }, []);

    // Intersection Observer para animaciones de aliados
    useEffect(() => {
        const aliadosElement = document.getElementById("aliados-section");

        if (!aliadosElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAliadosVisible(true);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(aliadosElement);

        return () => {
            if (aliadosElement) {
                observer.unobserve(aliadosElement);
            }
        };
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    // Datos de noticias
    const noticias = [
        {
            fecha: "24 Oct, 2025",
            titulo: "Abiertas las inscripciones para el periodo 2025",
            extracto: "¡Asegura tu cupo hoy! No pierdas la oportunidad de formar parte de nuestra comunidad educativa de excelencia.",
            icono: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
            link: "/noticias/inscripciones-2025"
        },
        {
            fecha: "18 Oct, 2025",
            titulo: "Movilis firma nuevo convenio con empresas líderes",
            extracto: "Alianza estratégica con empresas líderes en Logística y Transporte para fortalecer la formación práctica de nuestros estudiantes.",
            icono: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
            link: "/noticias/convenio-logistica"
        },
        {
            fecha: "10 Oct, 2025",
            titulo: "Éxito total en la semana de la tecnología",
            extracto: "Gran participación en la semana de la tecnología y desarrollo de software con talleres, conferencias y proyectos innovadores.",
            icono: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
            link: "/noticias/semana-tecnologia"
        }
    ];

    return (
        <main className="min-h-screen">
            {/* Hero Section - Carrusel */}
            <section className="relative h-[70vh] overflow-hidden">
                {/* Slides */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} flex items-center justify-center transition-all duration-1000 ease-in-out ${index === currentSlide
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-105"
                            }`}
                    >
                        {/* Overlay decorativo */}
                        <div className="absolute inset-0 bg-black/10"></div>

                        {/* Patrón de fondo */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F9EB1D] rounded-full blur-3xl"></div>
                        </div>

                        {/* Contenido */}
                        <div
                            className={`relative text-center text-white px-4 transition-all duration-700 delay-300 ${index === currentSlide
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-10 opacity-0"
                                }`}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
                                {slide.title}
                            </h1>
                            <p className="text-xl md:text-2xl lg:text-3xl font-light drop-shadow-md">
                                {slide.subtitle}
                            </p>

                            {/* Botón CTA opcional */}
                            <div className="mt-8">
                                <button className="bg-[#F9EB1D] text-[#881E80] px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl">
                                    Conoce Más
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Indicadores (dots) */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${index === currentSlide
                                    ? "w-12 h-3 bg-[#F9EB1D]"
                                    : "w-3 h-3 bg-white/50 hover:bg-white/80"
                                }`}
                            aria-label={`Ir a slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Flechas de navegación */}
                <button
                    onClick={() =>
                        goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                    aria-label="Slide anterior"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={() => goToSlide((currentSlide + 1) % slides.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                    aria-label="Slide siguiente"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </section>

            {/* Sección de Últimas Noticias */}
            <section id="noticias-section" className="py-16 md:py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Título de la sección */}
                    <div
                        className={`text-center mb-12 transition-all duration-1000 ease-out ${noticiasVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-[60px]'
                            }`}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Últimas Noticias
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#881E80] to-[#F9EB1D] mx-auto rounded-full"></div>
                        <p className="mt-4 text-lg text-gray-600 font-light">
                            Mantente informado sobre nuestras novedades
                        </p>
                    </div>

                    {/* Grid de Noticias */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {noticias.map((noticia, index) => {
                            // Definir dirección de entrada según el índice
                            const getAnimationClasses = () => {
                                if (index === 0) {
                                    // Primera noticia: desde la izquierda
                                    return noticiasVisible
                                        ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
                                        : 'opacity-0 -translate-x-[100px] translate-y-[40px] scale-95';
                                } else if (index === 1) {
                                    // Segunda noticia: desde abajo (centro)
                                    return noticiasVisible
                                        ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
                                        : 'opacity-0 translate-x-0 translate-y-[100px] scale-95';
                                } else {
                                    // Tercera noticia: desde la derecha
                                    return noticiasVisible
                                        ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
                                        : 'opacity-0 translate-x-[100px] translate-y-[40px] scale-95';
                                }
                            };

                            return (
                                <article
                                    key={index}
                                    className={`group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-1000 ease-out overflow-hidden hover:-translate-y-1 border border-gray-100 ${getAnimationClasses()}`}
                                    style={{ transitionDelay: `${index * 200}ms` }}
                                >
                                    {/* Imagen Placeholder */}
                                    <div className="h-48 bg-gradient-to-br from-[#881E80]/10 to-[#F9EB1D]/10 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#881E80]/5 to-transparent"></div>
                                        <svg
                                            className="w-16 h-16 text-[#881E80]/40"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d={noticia.icono} />
                                        </svg>
                                    </div>

                                    {/* Contenido */}
                                    <div className="p-6">
                                        {/* Fecha */}
                                        <p className="text-sm font-semibold text-[#881E80] mb-3">
                                            {noticia.fecha}
                                        </p>

                                        {/* Título */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#881E80] transition-colors duration-300 line-clamp-2">
                                            {noticia.titulo}
                                        </h3>

                                        {/* Extracto */}
                                        <p className="text-gray-600 font-light mb-4 line-clamp-2">
                                            {noticia.extracto}
                                        </p>

                                        {/* Botón Leer más */}
                                        <a
                                            href={noticia.link}
                                            className="inline-flex items-center gap-2 text-[#881E80] font-medium hover:gap-3 transition-all duration-300"
                                        >
                                            Leer más
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Sección de Aliados/Partners */}
            <section id="aliados-section" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Título de la sección */}
                    <div
                        className={`text-center mb-12 transition-all duration-1000 ease-out ${aliadosVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-[60px]'
                            }`}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Nuestros Aliados
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#881E80] to-[#F9EB1D] mx-auto rounded-full"></div>
                        <p className="mt-4 text-lg text-gray-600 font-light">
                            Trabajamos con las mejores instituciones
                        </p>
                    </div>

                    {/* Grid de logos */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <div
                                key={index}
                                className={`group relative aspect-square bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-1000 ease-out flex items-center justify-center p-6 border border-gray-100 hover:border-[#881E80]/20 hover:-translate-y-1 ${aliadosVisible
                                        ? 'opacity-100 translate-y-0 scale-100 rotate-0'
                                        : 'opacity-0 translate-y-[60px] scale-90 rotate-3'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {/* Placeholder para logo */}
                                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#881E80]/10 to-[#F9EB1D]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <svg
                                            className="w-8 h-8 text-[#881E80]"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-medium text-gray-400 group-hover:text-[#881E80] transition-colors duration-300">
                                        Aliado {index}
                                    </span>
                                </div>

                                {/* Efecto de brillo en hover */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#881E80]/0 to-[#F9EB1D]/0 group-hover:from-[#881E80]/5 group-hover:to-[#F9EB1D]/5 transition-all duration-300 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>

                    {/* Texto adicional opcional */}
                    <div
                        className={`mt-12 text-center transition-all duration-1000 ease-out ${aliadosVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-[40px]'
                            }`}
                        style={{ transitionDelay: '800ms' }}
                    >
                        <p className="text-sm text-gray-500 font-light">
                            Instituciones que confían en nuestra excelencia educativa
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
