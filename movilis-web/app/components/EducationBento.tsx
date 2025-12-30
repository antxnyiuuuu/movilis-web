'use client';

import { motion } from 'framer-motion';
import { Brain, CheckCircle2, Clock, ExternalLink } from 'lucide-react';

const EducationBento = () => {
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

    // Variantes para las tarjetas individuales
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const, // Easing suave y profesional
            },
        },
    };

    // Variante especial para la tarjeta principal (desde la izquierda)
    const mainCardVariants = {
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

    // Animación de pulso suave para el botón CTA
    const pulseVariants = {
        initial: { scale: 1 },
        pulse: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" as const,
            },
        },
    };

    return (
        <section className="relative w-full min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#5a1050] to-[#881E80] overflow-hidden">
            {/* Decoración de fondo sutil */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F9EB1D] rounded-full blur-3xl"></div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="relative z-10 max-w-7xl mx-auto"
            >
                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

                    {/* CAJA PRINCIPAL - El Gancho (Span 2 columnas en desktop) */}
                    <motion.div
                        variants={mainCardVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="md:col-span-2 relative p-8 md:p-12 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden group"
                    >
                        {/* Icono de fondo decorativo */}
                        <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                            <Brain className="w-32 h-32 md:w-48 md:h-48 text-white" strokeWidth={1} />
                        </div>

                        <div className="relative z-10">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
                            >
                                Aprender no tiene límites.
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="text-lg md:text-xl text-white/90 max-w-2xl"
                            >
                                Nuestro espacio de Educación Continua está diseñado para que sigas fortaleciendo tus conocimientos.
                            </motion.p>
                        </div>

                        {/* Efecto de brillo al hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </motion.div>

                    {/* CAJA SECUNDARIA - La Práctica (Vertical) */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="md:row-span-2 p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                Enfocados en la Práctica
                            </h3>
                            <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed">
                                Ofrecemos cursos, certificaciones y programas de actualización enfocados en la práctica y alineados al mercado.
                            </p>

                            {/* Lista con iconos de check */}
                            <div className="space-y-4">
                                {[
                                    'Práctica real desde el día uno',
                                    'Alineados al mercado laboral',
                                    'Experiencia aplicada inmediata',
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-[#F9EB1D] flex-shrink-0 mt-1" />
                                        <span className="text-white/90 text-base">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Decoración inferior */}
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="text-white/60 text-sm italic">
                                "Aprendizaje que transforma carreras"
                            </p>
                        </div>
                    </motion.div>

                    {/* CAJA TERCIARIA - Flexibilidad (Cuadrada) */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex flex-col items-center justify-center text-center relative overflow-hidden"
                    >
                        {/* Icono animado grande */}
                        <motion.div
                            animate={{
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="mb-6"
                        >
                            <Clock className="w-20 h-20 md:w-24 md:h-24 text-[#F9EB1D]" strokeWidth={1.5} />
                        </motion.div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Flexibilidad Total
                        </h3>
                        <p className="text-white/90 text-base md:text-lg leading-relaxed">
                            Aprende a tu ritmo, con modalidades flexibles y contenidos de impacto inmediato.
                        </p>

                        {/* Efecto de círculo decorativo */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#F9EB1D]/20 rounded-full blur-2xl"></div>
                    </motion.div>

                    {/* CAJA DE ACCIÓN - CTA Moodle */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex flex-col items-center justify-center text-center gap-6"
                    >
                        <div>
                            <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                                Plataforma Oficial
                            </h4>
                            <p className="text-white/70 text-sm mb-6">
                                Accede a todos nuestros recursos de formación
                            </p>
                        </div>

                        {/* Botón CTA con efecto de pulso */}
                        <motion.a
                            href="https://formacioncontinua.movilis.edu.ec/local/customlogin/index.php"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={pulseVariants}
                            initial="initial"
                            animate="pulse"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#F9EB1D] text-[#5a1050] font-bold text-lg rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            Acceder a Moodle
                            <ExternalLink className="w-5 h-5" />
                        </motion.a>

                        <p className="text-white/60 text-xs">
                            Plataforma oficial de formación
                        </p>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};

export default EducationBento;
