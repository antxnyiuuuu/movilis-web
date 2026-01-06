'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Award, ArrowRight, BookOpen, X, CheckCircle, Scissors, Heart } from 'lucide-react';

export default function EsteticaProfesionalPage() {
    const [showDiploma, setShowDiploma] = useState(true);
    const [showContinueButton, setShowContinueButton] = useState(false);

    // Mostrar el botón de continuar después de 1 segundo
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContinueButton(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-screen flex flex-col lg:flex-row relative">
            {/* Modal tipo Diploma */}
            <AnimatePresence>
                {showDiploma && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setShowDiploma(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
                            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                            exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
                            transition={{ type: "spring", duration: 0.8 }}
                            className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12 border-8 border-double border-[#881E80]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Botón cerrar (X) */}
                            <button
                                onClick={() => setShowDiploma(false)}
                                className="absolute top-4 right-4 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
                            >
                                <X className="w-5 h-5 text-gray-700" />
                            </button>

                            {/* Decoración de esquinas */}
                            <div className="absolute top-6 left-6 w-16 h-16 border-t-4 border-l-4 border-[#F9EB1D] rounded-tl-2xl"></div>
                            <div className="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-[#F9EB1D] rounded-tr-2xl"></div>
                            <div className="absolute bottom-6 left-6 w-16 h-16 border-b-4 border-l-4 border-[#F9EB1D] rounded-bl-2xl"></div>
                            <div className="absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 border-[#F9EB1D] rounded-br-2xl"></div>

                            {/* Contenido del Diploma */}
                            <div className="text-center relative z-10">
                                {/* Icono de Estética */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.3, type: "spring" }}
                                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#881E80] to-[#9a2d8f] rounded-full mb-6 shadow-lg"
                                >
                                    <Sparkles className="w-10 h-10 text-white" strokeWidth={2} />
                                </motion.div>

                                {/* Título Principal */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-3xl md:text-4xl font-bold text-[#881E80] mb-4 leading-tight"
                                >
                                    Tecnología Superior en
                                    <br />
                                    Estética Profesional
                                </motion.h1>

                                {/* Línea decorativa */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    className="h-1 bg-gradient-to-r from-transparent via-[#F9EB1D] to-transparent mx-auto mb-6"
                                ></motion.div>

                                {/* Título a Obtener */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="mb-6"
                                >
                                    <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                                        Título a Obtener
                                    </p>
                                    <p className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                        Tecnólogo/a Superior en
                                        <br />
                                        Estética Profesional
                                    </p>

                                    {/* Código Legal */}
                                    <div className="inline-flex items-center gap-2 bg-[#881E80]/10 px-4 py-2 rounded-full">
                                        <CheckCircle className="w-4 h-4 text-[#881E80]" />
                                        <a
                                            href="#"
                                            className="text-sm font-semibold text-[#881E80] hover:text-[#9a2d8f] transition-colors"
                                        >
                                            RPC-SO-16-No.218-2025
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Sello/Badge */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.9, type: "spring" }}
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#881E80] to-[#9a2d8f] text-white px-6 py-3 rounded-full shadow-lg mb-6"
                                >
                                    <Award className="w-5 h-5" />
                                    <span className="font-bold">Título Oficial Registrado</span>
                                </motion.div>

                                {/* Botón Continuar */}
                                <AnimatePresence>
                                    {showContinueButton && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <button
                                                onClick={() => setShowDiploma(false)}
                                                className="inline-flex items-center gap-2 bg-[#F9EB1D] text-[#881E80] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                                            >
                                                Continuar
                                                <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* =========================================================
               OPCIÓN A: ESTUDIANTES NUEVOS (Izquierda - Fondo Claro)
               ========================================================= */}
            <div className="group relative flex-1 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-8 md:p-12 lg:p-16 min-h-[50vh] lg:min-h-screen overflow-hidden transition-all duration-500 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-50">

                {/* Badge Superior */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="absolute top-6 right-6 z-20 inline-flex items-center gap-2 bg-[#881E80]/10 backdrop-blur-sm text-[#881E80] px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                >
                    <BookOpen className="w-4 h-4" />
                    Para Estudiantes Nuevos
                </motion.div>

                {/* Decoración Fondo (Abstracta) */}
                <div className="absolute inset-0 opacity-5">
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-20 -left-20 w-96 h-96 bg-[#881E80] rounded-full blur-3xl"
                    ></motion.div>
                </div>

                {/* Contenido Principal */}
                <div className="relative z-10 max-w-xl text-center lg:text-left">
                    {/* Icono Estética */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#881E80] to-[#5a1050] rounded-3xl shadow-2xl mb-8 mx-auto lg:mx-0 group-hover:shadow-3xl group-hover:scale-105 transition-all duration-300"
                    >
                        <Heart className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
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
                        Conviértete en un profesional de la estética, dominando técnicas avanzadas de cuidado personal, belleza y bienestar integral.
                    </motion.p>

                    {/* Botón CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <Link href="/oferta-academica/estetica-profesional/regular">
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

                    {/* Detalles Adicionales */}
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
                            <div className="w-2 h-2 bg-[#F9EB1D] rounded-full"></div>
                            <span className="font-bold text-[#881E80]">Modalidad Híbrida</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* =========================================================
               OPCIÓN B: VALIDACIÓN (Derecha - Fondo Púrpura)
               ========================================================= */}
            <div className="group relative flex-1 bg-gradient-to-br from-[#881E80] to-[#2e052a] flex items-center justify-center p-8 md:p-12 lg:p-16 min-h-[50vh] lg:min-h-screen overflow-hidden transition-all duration-500 hover:from-[#9a2d8f] hover:to-[#4a0a44]">

                {/* Badge Superior */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="absolute top-6 right-6 z-20 inline-flex items-center gap-2 bg-[#F9EB1D]/20 backdrop-blur-sm text-[#F9EB1D] px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                >
                    <Sparkles className="w-4 h-4" />
                    Para Profesionales con Experiencia
                </motion.div>

                {/* Decoración Fondo */}
                <div className="absolute inset-0 opacity-10">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, -10, 0],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#F9EB1D] rounded-full blur-3xl"
                    ></motion.div>
                </div>

                {/* Contenido Principal */}
                <div className="relative z-10 max-w-xl text-center lg:text-left">
                    {/* Icono Scissors */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-[#F9EB1D] rounded-3xl shadow-2xl mb-8 mx-auto lg:mx-0 group-hover:shadow-3xl group-hover:scale-105 transition-all duration-300"
                    >
                        <Scissors className="w-12 h-12 md:w-16 md:h-16 text-[#881E80]" strokeWidth={1.5} />
                    </motion.div>

                    {/* Título */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
                    >
                        Tu título de 3er nivel en 8 meses
                    </motion.h1>

                    {/* Subtítulo Específico */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-2xl md:text-3xl font-bold text-[#F9EB1D] mb-6"
                    >
                        Programa de Validación de conocimientos
                    </motion.p>

                    {/* Descripción */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.6 }}
                        className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed"
                    >
                        Valida tu experiencia profesional en estética y obtén tu título oficial en tiempo récord.
                    </motion.p>

                    {/* Detalle Legal */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-sm text-white/60 mb-8"
                    >
                        (Colocar texto normativa Jimmy)
                    </motion.p>

                    {/* Botón CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <Link href="/oferta-academica/estetica-profesional/validacion">
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
                </div>

                {/* Efecto hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-500 pointer-events-none"></div>
            </div>
        </main>
    );
}
