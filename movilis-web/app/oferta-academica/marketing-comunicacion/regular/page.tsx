'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Briefcase,
    CheckCircle2,
    Calendar,
    FileText,
    Award,
    Building2,
    ChevronDown,
} from 'lucide-react';

export default function MarketingComunicacionRegularPage() {
    const [activeTab, setActiveTab] = useState(0);
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    // Datos de la malla curricular
    const mallaCurricular = [
        {
            nivel: 'Nivel 1',
            duracion: '16 semanas',
            materias: [
                'Fundamentos de la Comunicación',
                'Diseño gráﬁco y fotograﬁa digital',
                'Computacionales (TICS)',
                'Introducción al Marketing',
                'Lógica y resolución de problemas',
                'Gestión de los negocios',
                'Pensamiento lógico',
            ],
        },
        {
            nivel: 'Nivel 2',
            duracion: '16 semanas',
            materias: [
                'Comunicación estratégica',
                'Producción y edición digital',
                'Ventas y modelos de monetización',
                'Gestión de entornos digitales',
                'Contenidos multimedia',
                'Legislación y ética en entornos digitales',
            ],
        },
        {
            nivel: 'Nivel 3',
            duracion: '16 semanas',
            materias: [
                'Periodismo Digital',
                'Dirección estratégica creativa',
                'Metodología de investigación',
                'Community Manager',
                'Análisis de datos digitales',
                'Uso de herramientas IA en los negocios',
            ],
        },
        {
            nivel: 'Nivel 4',
            duracion: '16 semanas',
            materias: [
                'Medios digitales y Podcast',
                'Finanzas del emprendimiento digital',
                'Ecosistema Web',
                'Liderazgo y emprendimiento en tecnología',
                'Trabajo de titulación',
                'Marketing Digital',
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* SECCIÓN 1: Hero Section */}
            <section className="bg-gradient-to-br from-[#881E80] to-[#9a2d8f] text-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
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
                            <Award className="w-4 h-4" />
                            Modalidad Presencial
                        </motion.div>

                        {/* Título */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                            Tecnología Superior en Marketing y Comunicación Estratégica
                        </motion.h1>

                        {/* Descripción */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-lg md:text-xl leading-relaxed text-white/90"
                        >
                            Con tu Tecnología Superior en Marketing y Comunicación Estratégica estarás capacitado/a para diseñar, ejecutar y evaluar estrategias de marketing y comunicación, utilizando herramientas digitales, análisis de datos y contenidos creativos para posicionar marcas, productos y servicios en entornos digitales y tradicionales. Gestionar redes sociales, campañas publicitarias digitales, branding, comunicación institucional y contenidos multimedia, alineados a los objetivos organizacionales.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* SECCIÓN 2: Perfil de Egreso / Campo Laboral */}
            <section className="pt-16 md:pt-20 pb-4 md:pb-6 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-l-8 border-[#F9EB1D]"
                    >
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            {/* Icono */}
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#881E80] to-[#9a2d8f] rounded-2xl flex items-center justify-center shadow-lg">
                                    <Building2 className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2} />
                                </div>
                            </div>

                            {/* Contenido */}
                            <div className="flex-1">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Perfil de egreso
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Podrá desempeñarse en agencias de publicidad y marketing, medios de comunicación, emprendimientos y proyectos propios, ocupando cargos como community manager, analista de marketing digital, gestor de contenidos, asistente de comunicación estratégica, coordinador de campañas digitales o consultor junior en marketing y comunicación.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECCIÓN 3: Malla Curricular */}
            <section className="pt-4 md:pt-6 pb-4 md:pb-6 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Malla curricular (4 Niveles)
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

            {/* SECCIÓN 4: Información Académica y Requisitos */}
            <section className="pt-4 md:pt-6 pb-4 md:pb-6 bg-gray-50">
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
                                    Requisitos de ingreso
                                </h2>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#881E80] flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-lg">Título de bachiller</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#881E80] flex-shrink-0 mt-0.5" />
                                    <div className="text-gray-700 text-lg">
                                        Cópia de cédula de identidad y papeleta de votación en PDF{' '}
                                        <a
                                            href="#"
                                            className="text-[#881E80] underline hover:text-[#9a2d8f] transition-colors"
                                        >
                                            (Link a modelo)
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#881E80] flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-lg">Correo electrónico personal</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#881E80] flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-lg">Comprobante de pago (Foto)</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Columna Derecha: Certificaciones */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-2xl shadow-xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-[#F9EB1D] rounded-xl flex items-center justify-center">
                                    <Award className="w-6 h-6 text-[#881E80]" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                    Certificaciones
                                </h2>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 flex items-center justify-center min-h-[100px] border-2 border-blue-200">
                                    <span className="text-blue-700 font-bold text-center text-sm">Marketing Digital</span>
                                </div>
                                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 flex items-center justify-center min-h-[100px] border-2 border-purple-200">
                                    <span className="text-purple-700 font-bold text-center text-sm">Comunicación Estratégica</span>
                                </div>
                            </div>
                            <p className="mt-4 text-sm text-gray-500 italic text-center">Verificar Maru</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 5: Inversión y Matrícula */}
            <section className="pt-4 md:pt-6 pb-20 md:pb-28 bg-white">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-[#881E80] to-[#6a1564] rounded-3xl shadow-2xl p-8 md:p-12 text-white"
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">Valores</h2>
                            <p className="text-white/80 text-lg">Inversión en tu futuro profesional</p>
                        </div>

                        {/* Precio Principal */}
                        <div className="text-center mb-8">
                            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6">
                                <p className="text-sm text-white/70 mb-2">Valor total de la tecnología</p>
                                <p className="text-5xl md:text-6xl font-bold text-[#F9EB1D]">$ 2904,00</p>
                            </div>
                        </div>

                        {/* Desglose */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                            <h3 className="text-xl font-bold mb-4 text-center">Valores detallados por cada Nivel Académico</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/5 rounded-xl p-4">
                                    <p className="text-white/70 text-sm mb-1">Matrícula</p>
                                    <p className="text-2xl font-bold">$ 66,00</p>
                                </div>
                                <div className="bg-white/5 rounded-xl p-4">
                                    <p className="text-white/70 text-sm mb-1">Arancel</p>
                                    <p className="text-2xl font-bold">$ 660</p>
                                </div>
                            </div>
                        </div>

                        {/* Botón */}
                        <div className="text-center">
                            <Link href="/admisiones">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 bg-[#F9EB1D] text-[#881E80] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Formulario de admisión
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECCIÓN 6: Barra de Acción Final */}
            <section className="sticky bottom-0 bg-transparent border-t border-transparent shadow-2xl z-50 pointer-events-none">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center">
                    <div className="flex flex-col md:flex-row gap-3 items-center justify-center md:justify-between w-full pointer-events-auto">
                        {/* Enlace Secundario */}
                        <Link href="#" className="w-auto">
                            <button className="inline-flex bg-white items-center justify-center gap-2 px-5 py-2.5 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-sm hover:border-[#881E80] hover:text-[#881E80] transition-all duration-300 shadow-md">
                                <Calendar className="w-4 h-4" />
                                Calendario académico (Link a documento)
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
