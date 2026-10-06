//interfaz para los videos
export interface Video {
    id: number;
    titulo: string;
    descripcion: string;
    idVideo: string;
    enlace: string;
}

const videos: Video[] = [
    {
        id: 1,
        titulo: 'Primeros pasos con python',
        descripcion: 'Un video para conocer qué es Python y escribir tus primeras líneas de código.',
        idVideo: 'HKL1G9-mwcM',
        enlace: 'https://youtu.be/HKL1G9-mwcM?list=PL5YuOOJ-FGGjAvcJcU5vMfVoc4S7sKvcm'
    },
    {
        id: 2,
        titulo: 'Introduccion a las redes con CCNA',
        descripcion: 'Conoce cómo funcionan las redes, direcciones IP y equipos como routers y switches.',
        idVideo: 'vwtl7pZ2iIQ',
        enlace: 'https://youtu.be/vwtl7pZ2iIQ?list=PLoqM5eIpDpUEhtUNKuOd-sGll7NrvlwD7',
    },
    {
        id: 3,
        titulo: 'Ques es la nube y AWS',
        descripcion: 'Entiende la computación en la nube y los servicios básicos de Amazon Web Services.',
        idVideo: 'nMfeITzWMuo',
        enlace: 'https://youtu.be/nMfeITzWMuo'
    },
];

export default videos;