'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { GraduationCap, Award, ArrowRight, BookOpen } from 'lucide-react';

export default function LogisticaTransportePage() {
    return (
        <main className="min-h-screen flex flex-col lg:flex-row">
            {/* OPCIÓN A: Conoce tu futura tecnología (Izquierda) */}
            <div className="group relative flex-1 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-8 md:p-12 lg:p-16 min-h-[50vh] lg:min-h-screen overflow-hidden transition-all duration-500 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-50">
                {/* Badge en esquina superior derecha */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="absolute top-6 right-6 z-20 inline-flex items-center gap-2 bg-[#881E80]/10 backdrop-blur-sm text-[#881E80] px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                >
                    <BookOpen className="w-4 h-4" />
                    Para Estudiantes Nuevos
                </motion.div>

                {/* Decoración de fondo */}
                <div className="absolute inset-0 opacity-5">
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -top-20 -left-20 w-96 h-96 bg-[#881E80] rounded-full blur-3xl"
                    ></motion.div>
                </div>

                {/* Contenido */}
                <div className="relative z-10 max-w-xl text-center lg:text-left">
                    {/* Icono */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#881E80] to-[#9a2d8f] rounded-3xl shadow-2xl mb-8 mx-auto lg:mx-0 group-hover:shadow-3xl group-hover:scale-105 transition-all duration-300"
                    >
                        <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
                    </motion.div>



                    {/* Título */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                    >
                        Conoce tu futura tecnología
                    </motion.h1>

                    {/* Descripción */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
                    >
                        Inicia tu carrera desde cero y fórmate como un profesional de éxito en Logística y Transporte.
                    </motion.p>

                    {/* Botón CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <Link href="/oferta-academica/logistica-transporte/regular">
                            <motion.button
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="group/btn inline-flex items-center gap-3 bg-[#881E80] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                Ver Malla Curricular
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Detalles adicionales */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-500"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#881E80] rounded-full"></div>
                            <span>Duración: 5 semestres</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#881E80] rounded-full"></div>
                            <span>Modalidad: Híbrida</span>
                        </div>
                    </motion.div>
                </div>

                {/* Efecto de iluminación al hover */}
                <div className="absolute inset-0 bg-[#881E80]/0 group-hover:bg-[#881E80]/5 transition-all duration-500 pointer-events-none"></div>
            </div>

            {/* OPCIÓN B: Valida tus conocimientos (Derecha) */}
            <div className="group relative flex-1 bg-gradient-to-br from-[#881E80] to-[#9a2d8f] flex items-center justify-center p-8 md:p-12 lg:p-16 min-h-[50vh] lg:min-h-screen overflow-hidden transition-all duration-500 hover:from-[#9a2d8f] hover:to-[#b03da5]">
                {/* Badge en esquina superior derecha */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="absolute top-6 right-6 z-20 inline-flex items-center gap-2 bg-[#F9EB1D]/20 backdrop-blur-sm text-[#F9EB1D] px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                >
                    <Award className="w-4 h-4" />
                    Para Profesionales Empíricos
                </motion.div>

                {/* Decoración de fondo */}
                <div className="absolute inset-0 opacity-10">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, -10, 0],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#F9EB1D] rounded-full blur-3xl"
                    ></motion.div>
                </div>

                {/* Contenido */}
                <div className="relative z-10 max-w-xl text-center lg:text-left">
                    {/* Icono */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-[#F9EB1D] rounded-3xl shadow-2xl mb-8 mx-auto lg:mx-0 group-hover:shadow-3xl group-hover:scale-105 transition-all duration-300"
                    >
                        <Award className="w-12 h-12 md:w-16 md:h-16 text-[#881E80]" strokeWidth={1.5} />
                    </motion.div>



                    {/* Título */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
                    >
                        Valida tus conocimientos
                    </motion.h1>

                    {/* Subtítulo llamativo */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-2xl md:text-3xl font-bold text-[#F9EB1D] mb-6"
                    >
                        Tu título de 3er nivel en tiempo récord
                    </motion.p>

                    {/* Descripción */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.6 }}
                        className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed"
                    >
                        Reconocemos tu experiencia laboral y te ayudamos a obtener tu título oficial.
                    </motion.p>

                    {/* Detalle Legal */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-sm text-white/60 mb-8"
                    >
                        RRA -{' '}
                        <a
                            href="https://www.ces.gob.ec/lotaip/2018/Enero/Anexos%20Procu/An-lit-a2-Reglamento%20de%20Régimen%20Académico.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-[#F9EB1D] transition-colors duration-300"
                        >
                            Artículo 83
                        </a>
                    </motion.p>

                    {/* Botón CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <Link href="/oferta-academica/logistica-transporte/validacion">
                            <motion.button
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="group/btn inline-flex items-center gap-3 bg-[#F9EB1D] text-[#881E80] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                Validar Experiencia
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Detalles adicionales */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-white/70"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#F9EB1D] rounded-full"></div>
                            <span>Proceso acelerado</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#F9EB1D] rounded-full"></div>
                            <span>Título oficial</span>
                        </div>
                    </motion.div>
                </div>

                {/* Efecto de iluminación al hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500 pointer-events-none"></div>
            </div>
        </main>
    );
}
