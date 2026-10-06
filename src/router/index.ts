import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Inicio.vue'

const routes = [
    {path: '/', name: 'Inicio', component: Home},
    {path: '/cursos', name: 'Cursos', component: () => import('../components/Cursos.vue')},
    {path: '/inscripciones/:id?', name: 'Inscripciones', component: () => import('../components/Inscripciones.vue')},
    {path: '/contacto', name: 'Contacto', component: () => import('../components/Contacto.vue')},
    {path: '/certificaciones', name: 'Certificaciones', component: () => import('../components/Certificaciones.vue')},
    {path: '/empresas', name: 'Empresas', component: () => import('../components/Empresas.vue')},
    {path: '/casos', name: 'Casos', component: () => import('../components/Casos.vue')} ,
    {path: '/material', name: 'Material', component: () => import('../components/Material.vue')},
    {path: '/privacidad', name: 'Privacidad', component: () => import('../components/Privacidad.vue')}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router