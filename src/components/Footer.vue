<script setup lang="ts">
interface Enlace {
    texto: string;
    ruta: string;
}

const enlaces: Enlace[] =[
    {texto: 'Inicio', ruta: '/'},
    {texto: 'Cursos', ruta: '/cursos'},
    {texto: 'Inscripciones', ruta: '/inscripciones'},
    {texto: 'Contacto', ruta: '/contacto'}

]

const masEnlaces: Enlace[] = [
    { texto: 'Certificaciones', ruta: '/certificaciones' },
    { texto: 'Empresas afiliadas', ruta: '/empresas' },
    { texto: 'Casos de éxito', ruta: '/casos' },
    { texto: 'Material de apoyo', ruta: '/material' },
    { texto: 'Seguridad y privacidad', ruta: '/privacidad' },
]
//get año actual para da
const fecha = new Date().getFullYear()
</script>

<template>
    <footer class="footer">
        <div class="contenedor footer-contenido">
            <div class="footer-bloque">
                <h3>Cursos en linea</h3>
                <p>Cursos y certificaciones en tecnologia e idioms para impulsar tu carrera.</p>
            </div>

            <div class="footer-bloque">
                <h3>Navegacion</h3>
                <ul>
                    <li v-for="enlace in enlaces" :key="enlace.ruta"><RouterLink :to="enlace.ruta">{{ enlace.texto}}</RouterLink>
                    </li>
                </ul>
            </div>

            <div class="footer-bloque">
                <h3>Mas informacion</h3>
                <ul>
                    <li v-for="enlace in masEnlaces" :key="enlace.ruta">
                    <RouterLink :to="enlace.ruta">{{ enlace.texto }}</RouterLink>
                    </li>
                </ul>
            </div>

            <div class="footer-bloque">
                <h3>Contacto</h3>
                <ul>
                    <li>info@cursosenlinea.com</li>
                    <li>+52 999 534 5337</li>
                    <li>Lunes a viernes, 9:00 AM - 5:00 PM</li>
                </ul>
            </div>
        </div>

            <div class="footer-pie">
                <p>© {{fecha}} Cursos en linea. Todos los derechos reservados</p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    margin-top: 40px;
    background: var(--tinta);
    color: var(--borde);
}

.footer-contenido {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 32px;
    padding-top: 40px;
    padding-bottom: 32px;
}

/* El h3 global es oscuro, aquí lo ponemos claro para el fondo oscuro */
.footer h3 {
    margin: 0 0 12px;
    font-size: 1.05rem;
    color: var(--blanco);
}

.footer p {
    margin: 0;
    font-size: 0.95rem;
}

.footer ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 0.95rem;
}

.footer li {
    margin-bottom: 8px;
}

.footer a {
    color: var(--borde);
    text-decoration: none;
}

.footer a:hover {
    color: var(--acento);
}

.footer-pie {
    padding: 16px 20px;
    text-align: center;
    font-size: 0.85rem;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
}
</style>