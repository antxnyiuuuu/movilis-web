import EducationBento from '../components/EducationBento';

export const metadata = {
    title: 'Educación Continua | Instituto Movilis',
    description: 'Aprender no tiene límites. Nuestro espacio de Educación Continua está diseñado para que sigas fortaleciendo tus conocimientos con cursos, certificaciones y programas de actualización.',
};

export default function EducacionContinuaPage() {
    return (
        <main className="min-h-screen">
            <EducationBento />
        </main>
    );
}
