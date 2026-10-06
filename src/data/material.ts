export interface Materiales {
    id:number
    texto: string;
    enlace: string;
}

const material: Materiales[] = [
    {
        id: 1,
        texto: 'Tutorial oficial de Python (en español)',
        enlace:'https://docs.python.org/es/3/tutorial/'
    },
    {   
        id: 2,
        texto: 'MDN: guía de HTML, CSS y JavaScript',
        enlace: 'https://developer.mozilla.org/es/'
    },
    {
        id: 3,
        texto: 'Documentación oficial de Vue 3',
        enlace: 'https://vuejs.org/'
    },
    {
        id: 4,
        texto: 'Cisco Networking Academy',
        enlace: 'https://www.netacad.com/'
    },
    {
        id: 5,
        texto: 'AWS Skill Builder',
        enlace: 'https://skillbuilder.aws/'
    },
];

export default material;