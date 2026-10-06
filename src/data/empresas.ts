//interfaz empresas afiladas
export interface Empresa{
    id: number;
    nombre: string;
    sector: Sector;
    descripcion: string;
    ciudad: string;
    beneficio: string;
    imagen: string;
}

//valores fijos sectores
export type Sector = 'Tecnologia' | 'Telecomunicaciones' | 'Educacion' | 'Servicios' | 'Industria' | 'Salud';

export const sectores = ['Tecnologia', 'Telecomunicaciones', 'Educacion', 'Servicios', 'Industria', 'Salud'] as const;

const empresas: Empresa[] = [
    {
        id: 1,
        nombre: 'Soluciones Digitales del Sureste',
        sector: 'Tecnologia',
        descripcion: 'Desarrolla sistemas y paginas web para negocios de la region.',
        ciudad: 'Merida, Yucatan',
        beneficio: 'Prácticas profesionales para egresados de Python y Vue',
        imagen: '/empresas/soluciones.jpg'
    },
    {
        id: 2,
        nombre: 'RedNet Peninsular',
        sector: 'Telecomunicaciones',
        descripcion: 'Proveedor de internet y redes para empresas.',
        ciudad: 'Merida, Yucatan',
        beneficio: 'Vacantes para egresados de Redes con Cisco CCNA',
        imagen: '/empresas/rednet.png'
    },
    {
        id: 3,
        nombre: 'CloudMaya',
        sector: 'Tecnologia',
        descripcion: 'Consultoria para migrar empresas a la nube.',
        ciudad: 'Valladolid, Yucatan',
        beneficio: 'Descuento en el examen de AWS Cloud Practitioner',
        imagen: '/empresas/cloudmoyo.png'
    },
    {
        id: 4,
        nombre: 'Instituto de Idiomas Yucatán',
        sector: 'Educacion',
        descripcion: 'Centro de enseñanza de idiomas con alumnos de todas las edades.',
        ciudad: 'Merida, Yucatan',
        beneficio: 'Sede para presentar el examen Cambridge B2 First',
        imagen: '/empresas/idiomas.jpg'
    },
    {
        id: 5,
        nombre: 'Seguridad Informática MX',
        sector: 'Servicios',
        descripcion: 'Auditorias y protección de datos para empresas.',
        ciudad: 'Ciudad de Mexico',
        beneficio: 'Bolsa de trabajo para egresados de Security+',
        imagen: '/empresas/seguridad.png'
    },
    {
        id: 6,
        nombre: 'Manufacturas del Golfo',
        sector: 'Industria',
        descripcion: 'Empresa industrial que cuenta con su propia área de sistemas.',
        ciudad: 'Progreso, Yucatan',
        beneficio: 'Convenio de capacitación en ITIL 4 para su personal',
        imagen: '/empresas/manufacturas.png'
    },
    //ejemplo sin una para el filtro
];

export default empresas;
