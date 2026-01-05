'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    CheckCircle2,
    FileText,
    Award,
    ClipboardCheck,
    Users,
    ChevronDown,
    AlertCircle,
    Globe,
    Zap,
    Code
} from 'lucide-react';

export default function DesarrolloSoftwareValidacionPage() {
    const [activeTab, setActiveTab] = useState(0);
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    // Datos de la malla curricular
    const mallaCurricular = [
        {
            nivel: 'Nivel 1',
            modalidad: 'Examen de Validación',
            materias: [
                'Matemática 1',
                'Introducción a la Programación',
                'Estructuras de Datos y Algoritmos',
                'Desarrollo Web Frontend',
                'Lógica y Resolución de Problemas Computacionales',
                'Introducción a DevOps y Control de Versiones (Git)',
            ],
        },
        {
            nivel: 'Nivel 2',
            modalidad: 'Examen de Validación',
            materias: [
                'Matemáticas Discretas',
                'Fundamentos de Bases de Datos',
                'Introducción a la Ingeniería de Software',
                'Programación Orientada a Objetos',
                'Desarrollo Web Backend',
                'Lenguaje y Comunicación',
            ],
        },
        {
            nivel: 'Nivel 3',
            modalidad: 'Examen de Validación',
            materias: [
                'Bases de Datos Avanzadas',
                'Pruebas de Software y TDD',
                'Desarrollo de Aplicaciones Móviles',
                'Desarrollo de Videojuegos',
                'Desarrollo FullStack',
                'Metodología de Investigación',
            ],
        },
        {
            nivel: 'Nivel 4',
            modalidad: 'Clases Semipresenciales',
            isSpecial: true,
            materias: [
                'Seguridad en el Desarrollo de Software',
                'Introducción a la Inteligencia Artificial y Machine Learning',
                'DevOps (Desarrollo y Operaciones)',
                'Desarrollo de Software en la Nube',
                'Liderazgo y Emprendimiento en Tecnología',
                'Trabajo de Titulación',
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* SECCIÓN 1: Hero Section */}
            <section className="bg-gradient-to-br from-[#6a1564] to-[#881E80] text-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-2 bg-[#F9EB1D] text-[#881E80] px-4 py-2 rounded-full text-sm font-bold mb-6"
                        >
                            <Award className="w-4 h-4" />
                            Validación de Conocimientos
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Tecnología Superior en Desarrollo de Software y Programación
                        </h1>

                        {/* Banner de Gancho */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="bg-[#F9EB1D] text-[#881E80] rounded-2xl p-6 mb-6 shadow-xl"
                        >
                            <p className="text-2xl md:text-3xl font-bold text-center">
                                ¡Obtén tu título en solo 8 meses!
                            </p>
                            <p className="text-lg text-center mt-2 font-semibold">
                                Programa de Validación de conocimientos
                            </p>
                        </motion.div>

                        <p className="text-lg md:text-xl leading-relaxed text-white/90">
                            Este proceso te permite demostrar lo que sabes y comprobar que has alcanzado los objetivos de aprendizaje de una asignatura o cursos, convirtiendo tu experiencia en una oportunidad académica. La evaluación está diseñada para reconocer tus conocimientos, aunque no hayas cursado estudios superiores formales.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SECCIÓN 2: Metodología */}
            <section className="pt-12 md:pt-16 pb-4 md:pb-6 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Bloque A */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#881E80]"
                        >
                            <div className="w-12 h-12 bg-[#881E80]/10 rounded-xl flex items-center justify-center mb-6">
                                <ClipboardCheck className="w-6 h-6 text-[#881E80]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Niveles 1-3</h3>
                            <p className="text-gray-700 text-lg">
                                Validación de conocimientos mediante exámenes.
                            </p>
                        </motion.div>

                        {/* Bloque B */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#F9EB1D]"
                        >
                            <div className="w-12 h-12 bg-[#F9EB1D]/10 rounded-xl flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-[#881E80]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Nivel 4</h3>
                            <p className="text-gray-700 text-lg">
                                Clases en modalidad semipresencial.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 3: Malla Curricular */}
            <section className="pt-4 md:pt-6 pb-4 md:pb-6 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Malla Curricular
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#881E80] to-[#F9EB1D] mx-auto rounded-full"></div>
                    </motion.div>

                    {/* Visual de Rapidez (Fast Track) con Barra de Progreso */}
                    <div className="mb-16 relative px-4">
                        {/* Barra de fondo (Gris) */}
                        <div className="absolute top-6 left-0 right-0 h-1 bg-gray-100 rounded-full max-w-4xl mx-auto" aria-hidden="true"></div>

                        {/* Barra de progreso animada */}
                        <div className="absolute top-6 left-0 right-0 h-1 max-w-4xl mx-auto" aria-hidden="true">
                            <motion.div
                                className="h-full bg-gradient-to-r from-[#881E80] to-[#F9EB1D] rounded-full"
                                initial={{ width: "0%" }}
                                animate={{
                                    width: activeTab === 0 ? "0%" :
                                        activeTab === 1 ? "33.33%" :
                                            activeTab === 2 ? "66.66%" : "100%"
                                }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            />
                        </div>

                        <div className="relative flex justify-between max-w-4xl mx-auto">
                            {[0, 1, 2, 3].map((n) => (
                                <motion.div
                                    key={n}
                                    className="flex flex-col items-center cursor-pointer group/step"
                                    onClick={() => setActiveTab(n)}
                                >
                                    <motion.div
                                        animate={{
                                            scale: activeTab === n ? 1.2 : 1,
                                            backgroundColor: activeTab >= n ? (n < 3 ? '#881E80' : '#F9EB1D') : '#f3f4f6',
                                            boxShadow: activeTab === n ? '0 10px 25px -5px rgba(136, 30, 128, 0.3)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                        }}
                                        className={`w-12 h-12 rounded-full flex items-center justify-center z-10 transition-colors duration-500 ${activeTab >= n
                                            ? (n < 3 ? 'text-white' : 'text-[#881E80]')
                                            : 'text-gray-400'
                                            }`}
                                    >
                                        {n < 3 ? (
                                            <Zap className={`w-6 h-6 ${activeTab === n ? 'animate-pulse' : ''}`} />
                                        ) : (
                                            <Users className="w-6 h-6" />
                                        )}
                                    </motion.div>
                                    <motion.span
                                        animate={{
                                            color: activeTab === n ? '#881E80' : '#9ca3af',
                                            fontWeight: activeTab === n ? 'bold' : 'normal'
                                        }}
                                        className="mt-3 text-xs md:text-sm text-center"
                                    >
                                        {n < 3 ? `Validación ${n + 1}` : 'Nivel 4'}
                                    </motion.span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Tabs para Desktop */}
                    <div className="hidden md:block">
                        <div className="flex gap-2 mb-8 border-b border-gray-200">
                            {mallaCurricular.map((nivel, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`flex-1 px-6 py-4 font-semibold text-lg transition-all duration-300 border-b-4 relative group ${activeTab === index
                                        ? 'border-[#881E80] text-[#881E80] bg-[#881E80]/5'
                                        : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        {nivel.nivel}
                                        {!nivel.isSpecial && (
                                            <Zap className="w-4 h-4 text-[#881E80] opacity-50 group-hover:opacity-100 transition-opacity" />
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>

                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            className="relative bg-gray-50 rounded-2xl p-8 overflow-hidden"
                        >
                            {/* Efecto de fondo de velocidad */}
                            {!mallaCurricular[activeTab].isSpecial && (
                                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                                    <Zap className="w-64 h-64 text-[#881E80] rotate-12" />
                                </div>
                            )}

                            {/* Badge de Modalidad */}
                            <div className={`absolute top-6 right-6 px-4 py-1 rounded-full text-xs font-bold shadow-sm z-10 ${mallaCurricular[activeTab].isSpecial
                                ? 'bg-[#F9EB1D] text-[#881E80]'
                                : 'bg-[#881E80] text-white'
                                }`}>
                                <div className="flex items-center gap-1">
                                    {!mallaCurricular[activeTab].isSpecial && <Zap className="w-3 h-3" />}
                                    Modalidad: {mallaCurricular[activeTab].modalidad}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                {mallaCurricular[activeTab].nivel}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {mallaCurricular[activeTab].materias.map((materia, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border-l-4 border-transparent hover:border-[#881E80] transition-all"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-[#881E80] flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">{materia}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Acordeón para Mobile */}
                    <div className="md:hidden space-y-4">
                        {mallaCurricular.map((nivel, index) => (
                            <div key={index} className={`border rounded-xl overflow-hidden transition-all duration-300 ${activeTab === index ? 'border-[#881E80] shadow-md' : 'border-gray-200'
                                }`}>
                                <button
                                    onClick={() => {
                                        const nextTab = activeTab === index ? index : index;
                                        setActiveTab(nextTab);
                                        setOpenAccordion(openAccordion === index ? null : index);
                                    }}
                                    className={`w-full flex items-center justify-between p-4 transition-colors ${activeTab === index ? 'bg-[#881E80]/5' : 'bg-gray-50'
                                        }`}
                                >
                                    <div className="text-left">
                                        <h3 className={`font-bold text-lg ${activeTab === index ? 'text-[#881E80]' : 'text-gray-900'}`}>{nivel.nivel}</h3>
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${nivel.isSpecial ? 'bg-[#F9EB1D] text-[#881E80]' : 'bg-[#881E80] text-white'
                                            }`}>
                                            {nivel.modalidad}
                                        </span>
                                    </div>
                                    <ChevronDown className={`w-5 h-5 transition-transform ${openAccordion === index ? 'rotate-180' : ''} ${activeTab === index ? 'text-[#881E80]' : ''}`} />
                                </button>

                                {openAccordion === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        className="p-4 bg-white space-y-3"
                                    >
                                        {nivel.materias.map((materia, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ x: -10, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-[#881E80] flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{materia}</span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN 4: Alerta de Idioma */}
            <section className="pt-4 md:pt-6 pb-4 md:pb-6 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-amber-50 border-2 border-[#F9EB1D] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
                    >
                        <div className="w-16 h-16 bg-[#F9EB1D] rounded-full flex items-center justify-center flex-shrink-0">
                            <Globe className="w-8 h-8 text-[#881E80]" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                <AlertCircle className="w-5 h-5 text-[#881E80]" />
                                Nota Importante sobre Idiomas
                            </h3>
                            <p className="text-gray-700 text-lg">
                                El estudiante deberá acreditar un nivel de inglés equivalente a A2 del Marco Común Europeo de Referencia para las Lenguas (MCER). Pregunta a tu asesor las opciones.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECCIÓN 5: Requisitos de Ingreso */}
            <section className="pt-4 md:pt-6 pb-4 md:pb-6 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-xl p-8"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-[#881E80] rounded-xl flex items-center justify-center">
                                <FileText className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Requisitos de Ingreso
                            </h2>
                        </div>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'Título de bachiller',
                                'Copia de cédula de identidad y papeleta de votación en PDF',
                                'Correo electrónico personal',
                                'Presentar la solicitud de ingreso a validación de conocimientos',
                                'Comprobante de pago (Foto)'
                            ].map((req, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#881E80] flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-lg">{req}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* SECCIÓN 6: Inversión */}
            <section className="pt-4 md:pt-6 pb-20 md:pb-28 bg-white">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#4a0e46] to-[#6a1564] rounded-3xl shadow-2xl p-8 md:p-12 text-white"
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">Inversión para Validación</h2>
                            <p className="text-white/80 text-lg">Valor total de la validación de conocimientos</p>
                        </div>

                        <div className="text-center mb-10">
                            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-10 py-8">
                                <p className="text-5xl md:text-7xl font-bold text-[#F9EB1D]">$ 2000,00</p>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                            <h3 className="text-xl font-bold mb-6 text-center border-b border-white/20 pb-4">Desglose Detallado</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                    <span className="text-white/80">Valor por cada nivel validado</span>
                                    <span className="font-bold text-xl">$ 343,33</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                    <span className="text-white/80">Matrícula nivel 4</span>
                                    <span className="font-bold text-xl">$ 80,00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-white/80">Arancel nivel 4</span>
                                    <span className="font-bold text-xl">$ 890,00</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link href="/admisiones">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#F9EB1D] text-[#881E80] px-8 py-4 rounded-full font-bold text-lg shadow-lg"
                                >
                                    Pregunta por facilidades de pago y descuentos
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
