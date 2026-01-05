'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Code,
    Cloud,
    Brain,
    DollarSign,
    CheckCircle2,
    Calendar,
    FileText,
    Award,
    Smartphone,
    Sparkles,
    ChevronDown,
    Briefcase,
    Rocket,
    Shield,
} from 'lucide-react';

export default function SoftwareProgramacionRegularPage() {
    const [activeTab, setActiveTab] = useState(0);
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    // Datos de la malla curricular
    const mallaCurricular = [
        {
            nivel: 'Nivel 1',
            duracion: '16 semanas',
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
            duracion: '16 semanas',
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
            duracion: '16 semanas',
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
            duracion: '16 semanas',
            materias: [
                'Seguridad en el Desarrollo de Software',
                'Introducción a la Inteligencia Artificial y Machine Learning',
                'DevOps',
                'Desarrollo de Software en la Nube',
                'Liderazgo y Emprendimiento en Tecnología',
                'Trabajo de Titulación',
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* SECCIÓN 1: Hero Section - Tech Style */}
            <section className="relative bg-gradient-to-br from-[#881E80] via-[#9a2d8f] to-[#6a1564] text-white py-20 md:py-28 overflow-hidden">
                {/* Patrón de fondo tech */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-[#F9EB1D] rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        {/* Badge de Modalidad */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-2 bg-[#F9EB1D] text-[#881E80] px-4 py-2 rounded-full text-sm font-bold mb-6"
                        >
                            <Rocket className="w-4 h-4" />
                            Modalidad En Línea
                        </motion.div>

                        {/* Título */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                            Tecnología Superior en Desarrollo de Software y Programación
                        </motion.h1>

                        {/* Subtítulo */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="mb-6"
                        >
                            <p className="text-xl md:text-2xl font-semibold text-[#F9EB1D] mb-2">
                                Título a Obtener: Tecnólogo/a Superior Software y Programación
                            </p>
                            <a
                                href="#"
                                className="text-sm text-white/70 hover:text-white/90 transition-colors underline"
                            >
                                RPC-SO-47-No.746-2024
                            </a>
                        </motion.div>

                        {/* Iconos decorativos */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex gap-4 mt-8"
                        >
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                <Code className="w-6 h-6 text-[#F9EB1D]" />
                            </div>
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                <Cloud className="w-6 h-6 text-[#F9EB1D]" />
                            </div>
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                <Brain className="w-6 h-6 text-[#F9EB1D]" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* SECCIÓN 2: Perfil de Egreso - Grid de Beneficios */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Con tu carrera lograrás
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#881E80] to-[#F9EB1D] mx-auto rounded-full mb-6"></div>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            Esta tecnología superior te proporciona una formación integral en áreas clave de la programación, con un enfoque práctico y técnico.
                        </p>
                    </motion.div>

                    {/* Grid de Habilidades */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1: Desarrollo de Aplicaciones */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-[#881E80]"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#881E80] to-[#9a2d8f] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Smartphone className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Desarrollo de Aplicaciones</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Desarrolla habilidades para aplicarlas en la creación de aplicaciones web, móviles, videojuegos y mucho más.
                            </p>
                        </motion.div>

                        {/* Card 2: Herramientas Cloud & DevOps */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-[#F9EB1D]"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#F9EB1D] to-[#e8d91a] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Cloud className="w-8 h-8 text-[#881E80]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud & DevOps</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Adquiere competencias en el uso de herramientas y tecnologías clave como AWS, Git, DevOps y metodologías ágiles.
                            </p>
                        </motion.div>

                        {/* Card 3: Inteligencia Artificial */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-[#881E80]"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#881E80] to-[#9a2d8f] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Brain className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Inteligencia Artificial</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Adquiere experticias en el campo de la inteligencia artificial, logrando capacidades para usar modelos y algoritmos para resolver problemas actuales.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 3 ESTRELLA: Trabajo Garantizado - Dark Mode */}
            <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
                {/* Efectos de fondo */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#F9EB1D] to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    {/* Título de la sección */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Nuestro modelo educativo único
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#F9EB1D] to-[#881E80] mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Columna Izquierda: Texto */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#F9EB1D] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Sparkles className="w-6 h-6 text-[#881E80]" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3">
                                            En tiempo récord, conviértete en Tecnólogo Superior
                                        </h3>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            Con título registrado en SENESCYT y acceso directo al mundo laboral.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#881E80] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Briefcase className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            Prácticas en Proyectos Reales
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Vive la experiencia de realizar prácticas en nuestro holding empresarial en proyectos reales.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Columna Derecha: La Promesa - Highlight */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-[#881E80] to-[#6a1564] rounded-3xl p-8 md:p-12 border-4 border-[#F9EB1D] shadow-2xl">
                                {/* Badge Circular */}
                                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#F9EB1D] rounded-full flex items-center justify-center shadow-xl transform rotate-12">
                                    <div className="text-center transform -rotate-12">
                                        <Shield className="w-8 h-8 text-[#881E80] mx-auto mb-1" />
                                        <p className="text-[#881E80] font-black text-xs leading-tight">
                                            TRABAJO<br />GARANTIZADO
                                        </p>
                                    </div>
                                </div>

                                <div className="text-center mb-8">
                                    <DollarSign className="w-16 h-16 text-[#F9EB1D] mx-auto mb-4" />
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                                        La Promesa Movilis
                                    </h3>
                                    <p className="text-xl text-white leading-relaxed">
                                        Si estás entre los mejores, te contratamos directamente en nuestras empresas y{' '}
                                        <span className="text-[#F9EB1D] font-black text-2xl">
                                            ganas en dólares
                                        </span>
                                        .
                                    </p>
                                </div>

                                {/* Espacio para logos */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <p className="text-white/70 text-sm text-center mb-4">
                                        Empresas del Holding Movilis
                                    </p>
                                    <div className="grid grid-cols-3 gap-4">
                                        {[1, 2, 3].map((i) => (
                                            <div
                                                key={i}
                                                className="bg-white/5 rounded-xl p-4 flex items-center justify-center min-h-[60px] border border-white/10"
                                            >
                                                <span className="text-white/40 text-xs font-semibold">Logo {i}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 4: Malla Curricular */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Malla Curricular
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#881E80] to-[#F9EB1D] mx-auto rounded-full"></div>
                    </motion.div>

                    {/* Tabs para Desktop */}
                    <div className="hidden md:block">
                        {/* Tab Headers */}
                        <div className="flex gap-2 mb-8 border-b border-gray-200">
                            {mallaCurricular.map((nivel, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`flex-1 px-6 py-4 font-semibold text-lg transition-all duration-300 border-b-4 ${activeTab === index
                                        ? 'border-[#881E80] text-[#881E80] bg-[#881E80]/5'
                                        : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    {nivel.nivel}
                                    <span className="block text-sm font-normal text-gray-500 mt-1">
                                        {nivel.duracion}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-50 rounded-2xl p-8"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                {mallaCurricular[activeTab].nivel} - {mallaCurricular[activeTab].duracion}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {mallaCurricular[activeTab].materias.map((materia, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                                        className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
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
                            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                                >
                                    <div className="text-left">
                                        <h3 className="font-bold text-lg text-gray-900">{nivel.nivel}</h3>
                                        <p className="text-sm text-gray-500">{nivel.duracion}</p>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {openAccordion === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="p-4 bg-white space-y-3"
                                    >
                                        {nivel.materias.map((materia, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-[#881E80] flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{materia}</span>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN 5: Requisitos y Costos */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Columna Izquierda: Requisitos */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-2xl shadow-xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-[#881E80] rounded-xl flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                    Requisitos de Ingreso
                                </h2>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#881E80] flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-lg">Título de bachiller</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#881E80] flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-lg">
                                        Copia de cédula y papeleta (PDF)
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#881E80] flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-lg">Correo personal</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#881E80] flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-lg">Comprobante de pago</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Columna Derecha: Inversión - Pricing Card Tech */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-gradient-to-br from-[#881E80] to-[#6a1564] rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
                        >
                            {/* Efectos decorativos */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#F9EB1D] rounded-full blur-3xl opacity-20"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-[#F9EB1D] rounded-xl flex items-center justify-center">
                                        <DollarSign className="w-6 h-6 text-[#881E80]" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold">
                                        Inversión
                                    </h2>
                                </div>

                                {/* Precio Principal */}
                                <div className="text-center mb-8">
                                    <p className="text-sm text-white/70 mb-2">Valor Total de la Tecnología</p>
                                    <p className="text-5xl md:text-6xl font-bold text-[#F9EB1D] mb-2">
                                        $ 3.880,00
                                    </p>
                                    <p className="text-white/80 text-sm">
                                        Valores detallados por cada Nivel Académico
                                    </p>
                                </div>

                                {/* Desglose */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <h3 className="text-lg font-bold mb-4 text-center">Desglose por Nivel</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/5 rounded-xl p-4 text-center">
                                            <p className="text-white/70 text-sm mb-1">Matrícula</p>
                                            <p className="text-2xl font-bold text-[#F9EB1D]">$ 80,00</p>
                                        </div>
                                        <div className="bg-white/5 rounded-xl p-4 text-center">
                                            <p className="text-white/70 text-sm mb-1">Arancel</p>
                                            <p className="text-2xl font-bold text-[#F9EB1D]">$ 890,00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 6: Footer de Carrera - Certificaciones y CTAs */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    {/* Certificaciones */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                            Certificaciones Complementarias
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {/* Placeholder para logos de certificaciones */}
                            {['AWS', 'Git/GitHub', 'Docker', 'React'].map((cert, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-50 rounded-xl p-6 flex items-center justify-center min-h-[100px] border-2 border-gray-200 hover:border-[#881E80] hover:shadow-lg transition-all duration-300"
                                >
                                    <span className="text-gray-600 font-semibold text-center">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Botones de Acción */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col md:flex-row gap-4 justify-center items-center"
                    >
                        {/* Botón Secundario */}
                    </motion.div>
                </div>
            </section>

            {/* SECCIÓN 7: Barra de Acción Sticky */}
            <section className="sticky bottom-0 bg-transparent border-t border-transparent shadow-2xl z-50 pointer-events-none">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center">
                    <div className="flex flex-col md:flex-row gap-3 items-center justify-center md:justify-between w-full pointer-events-auto">
                        {/* Enlace Secundario */}
                        <Link href="#" className="w-auto">
                            <button className="inline-flex bg-white items-center justify-center gap-2 px-5 py-2.5 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-sm hover:border-[#881E80] hover:text-[#881E80] transition-all duration-300 shadow-md">
                                <Calendar className="w-4 h-4" />
                                Calendario Académico
                            </button>
                        </Link>

                        {/* Botón Principal */}
                        <a href="#" target="_blank" rel="noopener noreferrer" className="w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center gap-2 bg-[#F9EB1D] text-[#881E80] px-6 py-3 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <FileText className="w-5 h-5" />
                                Admisiones
                            </motion.button>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
