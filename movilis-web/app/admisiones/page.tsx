'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FileText, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function AdmisionesPage() {
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

    // Variantes de animación para el contenedor
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

    // Variantes para elementos que entran desde la izquierda
    const slideFromLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    };

    // Variantes para elementos que entran desde la derecha
    const slideFromRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    };

    // Variantes para las tarjetas
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    };

    // Datos de las tarjetas
    const infoCards = [
        {
            title: 'Requisitos',
            icon: FileText,
            description: 'Por confirmar.',
            color: 'from-[#881E80]/10 to-[#881E80]/5',
        },
        {
            title: 'Modalidades',
            icon: Clock,
            description: 'Por confirmar.',
            color: 'from-[#F9EB1D]/10 to-[#F9EB1D]/5',
        },
        {
            title: 'Fechas',
            icon: Calendar,
            description: 'Por confirmar.',
            color: 'from-[#881E80]/10 to-[#F9EB1D]/10',
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* SECCIÓN 1: Hero Split (Pantalla Dividida) */}
            <section className="relative min-h-screen flex flex-col lg:flex-row">
                {/* Lado Izquierdo - Texto */}
                <motion.div
                    variants={slideFromLeft}
                    initial="hidden"
                    animate="visible"
                    className="flex-1 bg-white flex items-center justify-center px-6 md:px-12 lg:px-16 py-20 lg:py-0"
                >
                    <div className="max-w-xl">
                        {/* Badge decorativo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-[#F9EB1D]/20 text-[#881E80] px-4 py-2 rounded-full text-sm font-semibold mb-6"
                        >
                            <Sparkles className="w-4 h-4" />
                            Admisiones 2025
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#881E80] mb-6 leading-tight"
                        >
                            Tu futuro empieza aquí.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed"
                        >
                            En <span className="font-bold text-[#881E80]">MOVILIS</span> te acompañamos en cada paso para que inicies tu formación tecnológica sin complicaciones.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-base md:text-lg text-gray-600 mb-8"
                        >
                            Da el primer paso hacia una carrera con futuro.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.a
                            href="#postulacion"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 bg-[#881E80] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            Postularme ahora
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Lado Derecho - Visual con Imagen */}
                <motion.div
                    variants={slideFromRight}
                    initial="hidden"
                    animate="visible"
                    className="flex-1 bg-gradient-to-br from-[#881E80] to-[#9a2d8f] flex items-center justify-center relative overflow-hidden min-h-[400px] lg:min-h-screen"
                >
                    {/* Decoración de fondo - Solo en desktop para mejor rendimiento */}
                    {!isMobile && (
                        <div className="absolute inset-0 opacity-10">
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 90, 0],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute top-20 right-20 w-64 h-64 bg-[#F9EB1D] rounded-full blur-3xl"
                            ></motion.div>
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    rotate: [0, -90, 0],
                                }}
                                transition={{
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"
                            ></motion.div>
                        </div>
                    )}

                    {/* Imagen del Joven */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="relative z-10 w-full h-full"
                    >
                        {/* Contenedor de la imagen con efectos */}
                        <div className="relative w-full h-full">
                            <Image
                                src="/images/joven-hispano-con-aspecto-casual-sobre-fondo-morado.jpg"
                                alt="Estudiante de MOVILIS - Tu futuro comienza aquí"
                                fill
                                className="object-cover object-center"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Overlay degradado sutil para mejor integración */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#881E80]/30 via-transparent to-transparent pointer-events-none"></div>

                            {/* Efecto de brillo sutil */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* SECCIÓN 2: Tarjetas de Información */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    {/* Título de sección */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Todo lo que necesitas saber
                        </h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="h-1 bg-gradient-to-r from-[#881E80] to-[#F9EB1D] mx-auto rounded-full mb-4"
                        ></motion.div>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                            Conoce nuestros requisitos, modalidades de estudio y fechas de inicio.
                        </p>
                    </motion.div>

                    {/* Grid de Tarjetas */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {infoCards.map((card, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -10, borderBottomColor: '#F9EB1D' }}
                                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-b-4 border-transparent"
                            >
                                {/* Icono con fondo degradado */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6`}
                                >
                                    <card.icon className="w-8 h-8 text-[#881E80]" strokeWidth={2} />
                                </motion.div>

                                {/* Título */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#881E80] transition-colors duration-300">
                                    {card.title}
                                </h3>

                                {/* Descripción */}
                                <p className="text-gray-600 leading-relaxed">
                                    {card.description}
                                </p>

                                {/* Indicador de hover */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileHover={{ width: '100%' }}
                                    className="h-1 bg-[#F9EB1D] rounded-full mt-6"
                                ></motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SECCIÓN 3: Área de Postulación */}
            <section id="postulacion" className="py-20 md:py-28 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    {/* Encabezado */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#881E80] mb-4">
                            Postúlate hoy
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                            Completa el formulario y da el primer paso hacia tu futuro profesional.
                        </p>
                    </motion.div>

                    {/* Contenedor del Formulario */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
                    >
                        {/* Placeholder del Formulario */}
                        <div className="text-center py-16">
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="w-24 h-24 bg-gradient-to-br from-[#881E80]/10 to-[#F9EB1D]/10 rounded-full flex items-center justify-center mx-auto mb-6"
                            >
                                <FileText className="w-12 h-12 text-[#881E80]" />
                            </motion.div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Formulario de Admisión
                            </h3>
                            <p className="text-gray-600 mb-8">
                                El componente <code className="bg-gray-100 px-2 py-1 rounded text-[#881E80] font-mono">&lt;AdmissionForm /&gt;</code> se insertará aquí.
                            </p>

                            {/* Decoración */}
                            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                                <div className="w-12 h-px bg-gray-300"></div>
                                <span>Próximamente</span>
                                <div className="w-12 h-px bg-gray-300"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Información adicional */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-sm text-gray-500">
                            ¿Tienes dudas? Contáctanos al{' '}
                            <a href="tel:+593991303196" className="text-[#881E80] font-semibold hover:underline">
                                +593 99 130 3196
                            </a>{' '}
                            o escríbenos a{' '}
                            <a href="mailto:info@movilis.edu.ec" className="text-[#881E80] font-semibold hover:underline">
                                info@movilis.edu.ec
                            </a>
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
