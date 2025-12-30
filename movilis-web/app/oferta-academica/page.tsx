'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Truck,
    Code,
    Building2,
    Megaphone,
    Sparkles,
    ArrowRight,
} from 'lucide-react';

export default function OfertaAcademicaPage() {
    // Datos de las 5 carreras
    const carreras = [
        {
            id: 'logistica-transporte',
            titulo: 'Tecnología Superior en Logística y Transporte',
            extracto: 'Planifica, gestiona y optimiza operaciones logísticas y de transporte con visión estratégica.',
            icon: Truck,
            color: 'from-purple-500 to-purple-700',
            badge: null,
        },
        {
            id: 'desarrollo-software',
            titulo: 'Tecnología Superior en Desarrollo de Software y Programación',
            extracto: 'Formación integral en programación, IA y desarrollo web con enfoque práctico.',
            icon: Code,
            color: 'from-blue-500 to-blue-700',
            badge: '¡Trabajo Garantizado!',
        },
        {
            id: 'administracion-empresas-transporte',
            titulo: 'Tecnología Superior en Administración de Empresas de Transporte',
            extracto: 'Gestiona y optimiza la operación de empresas de transporte público y privado.',
            icon: Building2,
            color: 'from-green-500 to-green-700',
            badge: null,
        },
        {
            id: 'marketing-comunicacion',
            titulo: 'Tecnología Superior en Marketing y Comunicación Estratégica',
            extracto: 'Diseña y ejecuta estrategias digitales para posicionar marcas y productos.',
            icon: Megaphone,
            color: 'from-orange-500 to-orange-700',
            badge: null,
        },
        {
            id: 'estetica-profesional',
            titulo: 'Tecnología Superior en Estética Profesional',
            extracto: 'Aplica tratamientos estéticos y de bienestar integral con bases técnicas y éticas.',
            icon: Sparkles,
            color: 'from-pink-500 to-pink-700',
            badge: null,
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Header de la Página */}
            <section className="bg-gradient-to-br from-[#881E80] to-[#9a2d8f] text-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                            Nuestra Oferta Académica
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
                        >
                            Elige la carrera que transformará tu futuro
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="mt-8 w-24 h-1 bg-[#F9EB1D] mx-auto rounded-full"
                        ></motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Lista de Carreras - Tarjetas Horizontales */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="space-y-12">
                        {carreras.map((carrera, index) => {
                            const IconComponent = carrera.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={carrera.id}
                                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <Link href={`/oferta-academica/${carrera.id}`}>
                                        <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-l-8 border-[#881E80] hover:border-[#F9EB1D]">
                                            <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                                {/* Imagen Placeholder */}
                                                <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${carrera.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                                        <IconComponent className="w-24 h-24 md:w-32 md:h-32 text-white/30" strokeWidth={1} />
                                                    </div>

                                                    {/* Badge especial (solo para Software) */}
                                                    {carrera.badge && (
                                                        <div className="absolute top-4 right-4 z-10">
                                                            <div className="bg-[#F9EB1D] text-[#881E80] px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                                                                {carrera.badge}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Overlay degradado */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                                </div>

                                                {/* Contenido */}
                                                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                                                    {/* Icono pequeño */}
                                                    <div className="mb-4">
                                                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${carrera.color} rounded-xl shadow-md`}>
                                                            <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                                                        </div>
                                                    </div>

                                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#881E80] transition-colors duration-300">
                                                        {carrera.titulo}
                                                    </h3>

                                                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                                        {carrera.extracto}
                                                    </p>

                                                    {/* Botón */}
                                                    <div className="inline-flex items-center gap-3 text-[#881E80] font-bold text-lg group-hover:gap-5 transition-all duration-300">
                                                        Ver Malla y Costos
                                                        <ArrowRight className="w-6 h-6" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Efecto de brillo al hover */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#881E80]/0 to-[#881E80]/0 group-hover:from-[#881E80]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Sección de CTA Final */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-[#881E80] to-[#9a2d8f]">
                <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            ¿Necesitas más información?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Nuestro equipo está listo para ayudarte a elegir la mejor opción para tu futuro profesional.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/admisiones">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 bg-[#F9EB1D] text-[#881E80] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Proceso de Admisión
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </Link>

                            <Link href="/contacto">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
                                >
                                    Contáctanos
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
