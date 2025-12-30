"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    BookOpen,
    Briefcase,
    Monitor,
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    Building2,
    Sparkles
} from "lucide-react";

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Detectar si es dispositivo móvil para optimizar animaciones
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Datos del carrusel con iconos
    const slides = [
        {
            title: "Instituto Movilis",
            subtitle: "Educación de excelencia para tu futuro",
            gradient: "from-[#881E80] to-[#9a2d8f]",
            icon: BookOpen,
        },
        {
            title: "Formación Profesional",
            subtitle: "Carreras técnicas y tecnológicas de calidad",
            gradient: "from-[#9a2d8f] to-[#b03da5]",
            icon: Briefcase,
        },
        {
            title: "Campus Virtual",
            subtitle: "Aprende desde cualquier lugar del mundo",
            gradient: "from-[#7a1d6f] to-[#881E80]",
            icon: Monitor,
        },
    ];

    // Cambio automático de slides cada 5 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    // Datos de noticias
    const noticias = [
        {
            fecha: "24 Oct, 2025",
            titulo: "Abiertas las inscripciones para el periodo 2025",
            extracto: "¡Asegura tu cupo hoy! No pierdas la oportunidad de formar parte de nuestra comunidad educativa de excelencia.",
            Icon: BookOpen,
            link: "/noticias/inscripciones-2025"
        },
        {
            fecha: "18 Oct, 2025",
            titulo: "Movilis firma nuevo convenio con empresas líderes",
            extracto: "Alianza estratégica con empresas líderes en Logística y Transporte para fortalecer la formación práctica de nuestros estudiantes.",
            Icon: Briefcase,
            link: "/noticias/convenio-logistica"
        },
        {
            fecha: "10 Oct, 2025",
            titulo: "Éxito total en la semana de la tecnología",
            extracto: "Gran participación en la semana de la tecnología y desarrollo de software con talleres, conferencias y proyectos innovadores.",
            Icon: Monitor,
            link: "/noticias/semana-tecnologia"
        }
    ];

    // Variantes de animación para el contenedor de noticias
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    // Variantes para cada tarjeta de noticia con direcciones diferentes
    const getCardVariants = (index: number) => {
        if (index === 0) {
            // Primera: desde la izquierda
            return {
                hidden: { opacity: 0, x: -100, y: 40, scale: 0.95 },
                visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    transition: {
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1] as const,
                    },
                },
            };
        } else if (index === 1) {
            // Segunda: desde abajo
            return {
                hidden: { opacity: 0, x: 0, y: 100, scale: 0.95 },
                visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    transition: {
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1] as const,
                    },
                },
            };
        } else {
            // Tercera: desde la derecha
            return {
                hidden: { opacity: 0, x: 100, y: 40, scale: 0.95 },
                visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    transition: {
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1] as const,
                    },
                },
            };
        }
    };

    // Variantes para aliados
    const aliadoVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.9, rotate: 3 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        }),
    };

    return (
        <main className="min-h-screen">
            {/* Hero Section - Carrusel Mejorado */}
            <section className="relative h-[70vh] overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                        className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} flex items-center justify-center`}
                    >
                        {/* Overlay decorativo */}
                        <div className="absolute inset-0 bg-black/10"></div>

                        {/* Patrón de fondo animado - Solo en desktop para mejor rendimiento */}
                        {!isMobile && (
                            <div className="absolute inset-0 opacity-10">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.5, 0.3],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"
                                ></motion.div>
                                <motion.div
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute bottom-10 right-10 w-96 h-96 bg-[#F9EB1D] rounded-full blur-3xl"
                                ></motion.div>
                            </div>
                        )}

                        {/* Icono flotante - Solo en desktop para mejor rendimiento */}
                        {!isMobile && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                animate={{ opacity: 0.1, scale: 1, rotate: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            >
                                {(() => {
                                    const IconComponent = slides[currentSlide].icon;
                                    return IconComponent ? <IconComponent className="w-96 h-96 text-white" strokeWidth={0.5} /> : null;
                                })()}
                            </motion.div>
                        )}

                        {/* Contenido */}
                        <div className="relative text-center text-white px-4 z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
                                    {slides[currentSlide].title}
                                </h1>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-xl md:text-2xl lg:text-3xl font-light drop-shadow-md"
                            >
                                {slides[currentSlide].subtitle}
                            </motion.p>

                            {/* Botón CTA animado */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="mt-8"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#F9EB1D] text-[#881E80] px-8 py-3 rounded-full font-semibold text-lg shadow-xl inline-flex items-center gap-2"
                                >
                                    Conoce Más
                                    <Sparkles className="w-5 h-5" />
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Indicadores (dots) */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                    {slides.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => goToSlide(index)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className={`transition-all duration-300 rounded-full ${index === currentSlide
                                ? "w-12 h-3 bg-[#F9EB1D]"
                                : "w-3 h-3 bg-white/50 hover:bg-white/80"
                                }`}
                            aria-label={`Ir a slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Flechas de navegación */}
                <motion.button
                    onClick={() => goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10"
                    aria-label="Slide anterior"
                >
                    <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                    onClick={() => goToSlide((currentSlide + 1) % slides.length)}
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10"
                    aria-label="Slide siguiente"
                >
                    <ChevronRight className="w-6 h-6" />
                </motion.button>
            </section>

            {/* Sección de Últimas Noticias */}
            <section className="py-16 md:py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Título de la sección */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Últimas Noticias
                        </h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="h-1 bg-gradient-to-r from-[#881E80] to-[#F9EB1D] mx-auto rounded-full"
                        ></motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mt-4 text-lg text-gray-600 font-light"
                        >
                            Mantente informado sobre nuestras novedades
                        </motion.p>
                    </motion.div>

                    {/* Grid de Noticias */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {noticias.map((noticia, index) => (
                            <motion.article
                                key={index}
                                variants={getCardVariants(index)}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100"
                            >
                                {/* Imagen Placeholder con icono animado */}
                                <div className="h-48 bg-gradient-to-br from-[#881E80]/10 to-[#F9EB1D]/10 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#881E80]/5 to-transparent"></div>
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <noticia.Icon className="w-16 h-16 text-[#881E80]/40" strokeWidth={1.5} />
                                    </motion.div>

                                    {/* Efecto de brillo al hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
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
                                    <motion.a
                                        href={noticia.link}
                                        whileHover={{ x: 5 }}
                                        className="inline-flex items-center gap-2 text-[#881E80] font-medium group/link"
                                    >
                                        Leer más
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                                    </motion.a>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Sección de Aliados/Partners */}
            <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Título de la sección */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Nuestros Aliados
                        </h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="h-1 bg-gradient-to-r from-[#881E80] to-[#F9EB1D] mx-auto rounded-full"
                        ></motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mt-4 text-lg text-gray-600 font-light"
                        >
                            Trabajamos con las mejores instituciones
                        </motion.p>
                    </motion.div>

                    {/* Grid de logos */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={aliadoVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                whileHover={{ y: -8, scale: 1.05, rotate: 0 }}
                                className="group relative aspect-square bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-6 border border-gray-100 hover:border-[#881E80]/20"
                            >
                                {/* Placeholder para logo */}
                                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                    <motion.div
                                        whileHover={{ scale: 1.15, rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-16 h-16 rounded-full bg-gradient-to-br from-[#881E80]/10 to-[#F9EB1D]/10 flex items-center justify-center"
                                    >
                                        <Building2 className="w-8 h-8 text-[#881E80]" />
                                    </motion.div>
                                    <span className="text-xs font-medium text-gray-400 group-hover:text-[#881E80] transition-colors duration-300">
                                        Aliado {index}
                                    </span>
                                </div>

                                {/* Efecto de brillo en hover */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#881E80]/0 to-[#F9EB1D]/0 group-hover:from-[#881E80]/5 group-hover:to-[#F9EB1D]/5 transition-all duration-300 pointer-events-none"></div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Texto adicional */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-sm text-gray-500 font-light">
                            Instituciones que confían en nuestra excelencia educativa
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
