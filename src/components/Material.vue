<script setup lang="ts">
import videos from '../data/videos';
import material from '../data/material'

</script>

<template>
    <section class="material">
        <div class="contenedor">
            <h1>Material de apoyo</h1>
            <p>Videos y enlaces para reforzar lo que aprendes en tus cursos.</p>


            <h2>Videos</h2>
            <div class="videos-lista">
                <article v-for="video in videos" :key="video.id" class="video-card">
                    <!-- Video tiene idVideo aparece-->
                    <div v-if="video.idVideo" class="video-marco">
                        <iframe :src="`https://www.youtube.com/embed/${video.idVideo}`" :title="video.titulo" allowfullscreen></iframe>
                    </div>

                <div class="video-info">
                    <h3>{{ video.titulo}}</h3>
                    <p>{{ video.descripcion}}</p>
                    <a v-if="video.enlace" :href="video.enlace" target="_blank" class="video-enlace">Ver en YouTube</a>
                    </div>
                </article>
            </div>

            <h2>Enlaces recomendados</h2>
            <div class="material-lista">
                    <a v-for="recurso  in material" :key="recurso .id" :href="recurso .enlace" target="_blank" class="material-card">{{ recurso .texto }}</a>
            </div>

            <h2>Recomendaciones para estudiar</h2>
            <ol class="consejos">
                <li>Dedica un horario fijo a tu curso cada semana.</li>
                <li>Practica lo que ves en los videos, no solo lo mires.</li>
                <li>Aplica lo aprendido en pequeñas practicas o proyectos reales.</li>
            </ol>
            <p>Si tienes algun problema con algun curso o material de apoyo puedes contactarnos aqui <RouterLink to="/contacto">Contacto</RouterLink></p>
        </div>
    </section>
</template>


<!-- scoped: estos estilos solo afectan a este componente -->
<style scoped>
.material {
    padding: 50px 0;
}
 
.material h1 {
    margin: 0 0 8px;
    font-size: 2.2rem;
}
 
.material h2 {
    margin: 40px 0 20px;
    font-size: 1.5rem;
}
 
/* ===== Videos ===== */
.videos-lista {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
}
 
.video-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: var(--blanco);
    border: 1px solid var(--borde);
    border-radius: var(--radio);
}
 
/* aspect-ratio mantiene la forma 16:9 de un video en cualquier pantalla */
.video-marco,
.video-pendiente {
    aspect-ratio: 16 / 9;
    background: var(--tinta);
}
 
.video-marco iframe {
    width: 100%;
    height: 100%;
    border: 0;
}
 
.video-info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 18px;
}
 
.video-info h3 {
    margin: 0 0 8px;
    font-size: 1.15rem;
}
 
.video-info p {
    margin: 0 0 12px;
    font-size: 0.95rem;
}
 
.video-enlace {
    margin-top: auto;
    font-weight: 600;
    color: var(--principal);
    text-decoration: none;
}
 
.video-enlace:hover {
    text-decoration: underline;
}
 
/* ===== Enlaces recomendados ===== */
.material-lista {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
}
 
.material-card {
    padding: 16px 20px;
    color: var(--tinta);
    font-weight: 600;
    text-decoration: none;
    background: var(--blanco);
    border: 1px solid var(--borde);
    border-left: 5px solid var(--principal);
    border-radius: var(--radio);
    transition: transform 0.2s, box-shadow 0.2s;
}
 
.material-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(18, 38, 58, 0.12);
}
 
/* ===== Recomendaciones ===== */
.consejos {
    margin: 0;
    padding: 20px 20px 20px 44px;
    background: var(--blanco);
    border: 1px solid var(--borde);
    border-radius: var(--radio);
}
 
.consejos li {
    margin-bottom: 8px;
}
 
.consejos li:last-child {
    margin-bottom: 0;
}
</style>