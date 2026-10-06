//interfaz para los cursos como los heroes.ts

export interface Curso {
    id: number;
    titulo: string;
    categoria: Categoria;
    descripcion: string;
    duracion: string;
    nivel: Nivel;
    precio: number;
    imagen: string;
    certificacion: string;
    masDemandado: boolean
    idVideo?: string;
}
// valores fijos y categorias de los cursos
export type Categoria = 'Redes' | 'Seguridad' | 'Programacion con Python' | 'Programacion Web' | 'Nube' | 'Sistemas' | 'Bases de datos' | 'Gestion TI' | 'Idiomas';
export type Nivel = 'Principiante' | 'Intermedio' | 'Avanzado';

// cuerpo de los cursos
const cursos: Curso[] = [
    {
        id: 1,
        titulo: 'Redes con Cisco CCNA',
        categoria: 'Redes',
        descripcion: 'Aprende a configurar routers y switches, direccionamiento IP, VLANs y los fundamentos de una red empresarial',
        duracion: '12 semanas',
        nivel: 'Intermedio',
        precio: 1500,
        imagen: '/cursos/ciscoCCNA.jpg',
        certificacion: 'CCNA',
        masDemandado: true,
        idVideo: 'vwtl7pZ2iIQ'
    },
    {
        id: 2,
        titulo: 'Ciberseguridad con CompTIA Security+',
        categoria: 'Seguridad',
        descripcion: 'Conoce las amenazas más comunes, cómo proteger sistemas y redes, y las bases de la gestión de riesgos.',
        duracion: '10 semanas',
        nivel: 'Intermedio',
        precio: 3200,
        imagen: '/cursos/comptia.jpg',
        certificacion: 'CompTIA Security+',
        masDemandado: false
    },
    {
        id: 3,
        titulo: 'Programación en Python',
        categoria: 'Programacion con Python',
        descripcion: 'Desde variables y ciclos hasta funciones y manejo de archivos. Ideal para empezar a programar.',
        duracion: '8 semanas',
        nivel: 'Principiante',
        precio: 1500,
        imagen: '/cursos/python.jpg',
        certificacion: 'Python Institute PCEP',
        masDemandado: true,
        idVideo: 'HKL1G9-mwcM'
    },
    {
        id: 4,
        titulo: 'Desarrollo Web con Vue 3',
        categoria: 'Programacion Web',
        descripcion: 'Crea páginas modernas con HTML, CSS, TypeScript y Vue 3, usando componentes y rutas.',
        duracion: '10 semanas',
        nivel: 'Intermedio',
        precio: 1900,
        imagen: '/cursos/vue.jpg',
        certificacion: 'Certificado de finalización',
        masDemandado: true
    },
    {
        id: 5,
        titulo: 'Fundamentos de la Nube con AWS',
        categoria: 'Nube',
        descripcion: 'Entiende qué es la computación en la nube y usa los servicios principales de Amazon Web Services.',
        duracion: '6 semanas',
        nivel: 'Principiante',
        precio: 2200,
        imagen: '/cursos/aws.jpg',
        certificacion: 'AWS Certified Cloud Practitioner',
        masDemandado: true,
        idVideo: 'HKL1G9-mwcM'
    },
    {
        id: 6,
        titulo: 'Administración de Linux',
        categoria: 'Sistemas',
        descripcion: 'Aprende a usar la terminal, manejar usuarios, permisos y servicios en servidores Linux.',
        duracion: '8 semanas',
        nivel: 'Principiante',
        precio: 1700,
        imagen: '/cursos/linux.jpg',
        certificacion: 'Linux Essentials (LPI)',
        masDemandado: false
    },
    {
        id: 7,
        titulo: 'Bases de Datos con SQL',
        categoria: 'Bases de datos',
        descripcion: 'Aprende los fundamentos de las bases de datos y cómo utilizar SQL para gestionar y consultar información.',
        duracion: '6 semanas',
        nivel: 'Principiante',
        precio: 1400,
        imagen: '/cursos/basedatos.png',
        certificacion: 'Certificado de finalización',
        masDemandado: false
    },
    {
        id: 8,
        titulo: 'Gestion de Servicios de TI con ITIL 4',
        categoria: 'Gestion TI',
        descripcion: 'Conoce las buenas prácticas para administrar los servicios de tecnología dentro de una empresa.',
        duracion: '5 semanas',
        nivel: 'Intermedio',
        precio: 2600,
        imagen: '/cursos/itil4.jpg',
        certificacion: 'ITIL 4 Foundation',
        masDemandado: false
    },
        {
        id: 9,
        titulo: 'Ingles B2 (Cambridge First)',
        categoria: 'Idiomas',
        descripcion: 'Mejora tu inglés para el trabajo y los viajes, con práctica de conversación, lectura y escritura.',
        duracion: '18 semanas',
        nivel: 'Intermedio',
        precio: 2500,
        imagen: '/cursos/cambridge.png',
        certificacion: 'Cambridge B2 First Certificate',
        masDemandado: true
    },
    {
        id: 10,
        titulo: 'Frances para Principiantes',
        categoria: 'Idiomas',
        descripcion: 'Empieza desde cero con vocabulario, pronunciación y frases útiles para la vida diaria.',
        duracion: '12 semanas',
        nivel: 'Principiante',
        precio: 1800,
        imagen: '/cursos/frances.png',
        certificacion: 'DELF A1',
        masDemandado: false
    },
];

// Funciones para obtener cursos como getHeroesByOwner = imp-ext.ts
export const getCursosDemandados = () => {
    return cursos.filter(curso => curso.masDemandado);
}

export const getCursoById = (id: number) => {
    return cursos.find(curso => curso.id === id);
}

export default cursos;

console.log(getCursoById(1));
console.log(getCursosDemandados());