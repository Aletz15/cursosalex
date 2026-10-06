//interfaz de las certificaciones
export interface Certificacion {
    id: number;
    nombre: string;
    organismo: string;
    descripcion: string;
    cursoId: number; //id de curso de cursos.ts 
}

const certificaciones: Certificacion[] =[
    {
        id: 1,
        nombre: 'Cisco CCNA',
        organismo: 'Cisco',
        descripcion: 'Valida tus conocimientos de redes: conectividad IP, servicios de red, seguridad básica y automatización.',
        cursoId: 1
    },
    {
        id: 2,
        nombre: 'CompTIA Security+',
        organismo: 'CompTIA',
        descripcion: 'Certifica las bases de la ciberseguridad: amenazas, protección de sistemas y gestión de riesgos.',
        cursoId: 2
    },
    {
        id: 3,
        nombre: 'PCEP – Programador Python nivel inicial',
        organismo: 'Python Institute',
        descripcion: 'Comprueba que dominas lo básico de Python: variables, condiciones, ciclos y funciones.',
        cursoId: 3
    },
    {
        id: 4,
        nombre: 'AWS Certified Cloud Practitioner',
        organismo: 'Amazon Web Services',
        descripcion: 'Demuestra que entiendes los conceptos de la nube y los servicios principales de AWS.',
        cursoId: 5
    },
    {
        id: 5,
        nombre: 'Linux Essentials',
        organismo: 'Linux Professional Institute (LPI)',
        descripcion: 'Certifica los fundamentos de Linux, el uso de la terminal y el software libre.',
        cursoId: 6
    },
    {
        id: 6,
        nombre: 'ITIL 4 Foundation',
        organismo: 'PeopleCert',
        descripcion: 'Acredita los conceptos clave para administrar los servicios de tecnología en una empresa.',
        cursoId: 8
    },
    {
        id: 7,
        nombre: 'Cambridge B2 First',
        organismo: 'Cambridge English',
        descripcion: 'Examen internacional de inglés nivel B2, útil para estudiar, trabajar o viajar.',
        cursoId: 9
    },
    {
        id: 8,
        nombre: 'DELF A1',
        organismo: 'Ministerio de Educación de Francia',
        descripcion: 'Diploma oficial de francés nivel A1, para quienes empiezan desde cero.',
        cursoId: 10
    },
];

export default certificaciones;
