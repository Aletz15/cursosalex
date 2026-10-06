//interfaz para casos exito como losdemas
export interface Caso{
    id: number;
    nombre: string;
    ocupacion: string;
    cursoId: number;
    testimonio: string;
    logro: string;
    foto?: string;
}

//casos
const casos: Caso[] = [
    {
        id: 1,
        nombre: 'Laura Martínez',
        ocupacion: 'Tecnica en redes',
        cursoId: 1,
        testimonio: 'El curso me ayudo a entender como funciona una red empresarial desde cero. Los laboratorios fueron lo mejor.',
        logro: 'Obtuvo su certificacion CCNA y consiguio empleo en una empresa de telecomunicaciones',
        foto: ''
    },
    {
        id: 2,
        nombre: 'Carlos Pech',
        ocupacion: 'Estudiante universitario',
        cursoId: 3,
        testimonio: 'Nunca habia programado y en pocas semanas ya estaba haciendo mis propios programas en Python.',
        logro: 'Aprobo el examen PCEP y comenzo sus practicas profesionales',
        foto: ''
    },
    {
        id: 3,
        nombre: 'Andrea Sosa',
        ocupacion: 'Analista de sistemas',
        cursoId: 5,
        testimonio: 'Los ejemplos con AWS eran muy claros. Ahora entiendo los servicios que usa mi empresa todos los dias.',
        logro: 'Obtuvo AWS Cloud Practitioner y fue ascendida a su área de nube',
        foto: ''
    },
    {
        id: 4,
        nombre: 'Miguel Canul',
        ocupacion: 'Guía de turistas',
        cursoId: 9,
        testimonio: 'Practicar conversacion cada semana me dio la confianza que necesitaba para hablar con visitantes de otros paises.',
        logro: 'Aprobo Cambridge B2 First y ahora ofrece recorridos en ingles',
        foto: ''
    },
];

export default casos;