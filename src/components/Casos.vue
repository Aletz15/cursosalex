<script setup lang="ts">
import { getCursoById } from '../data/cursos.ts';
import casos from '../data/casos.ts'
</script>

<template>
    <section class="casos">
        <div class="contenedor">
            <h1>Casos de exito</h1>
            <p>Conoce a alumnos que tomaron nuestros cursos y lograron sus metas profesionales.</p>

            <h2>Historias de nuestros alumnos</h2>
            <div class="casos-lista">
                <article v-for="caso in casos" :key="caso.id" class="caso-card">
                    <h3>{{ caso.nombre}}</h3>
                    <span class="caso-ocupacion">{{ caso.ocupacion }}</span>
                    <p class="caso-testimonio">{{ caso.testimonio}}</p>

                    <ul class="caso-datos">
                        <li>Curso: {{ getCursoById(caso.cursoId)?.titulo }}</li>
                        <li>Logro: {{ caso.logro }}</li>
                    </ul>
                </article>
            </div>

            <h2>¿Te interesa alguno de nuestros cursos?</h2>
            <p>Elige tu curso y da el primer paso para certificarte</p>
            <RouterLink to="/cursos" class="boton boton-principal">Ver cursos</RouterLink>
        </div>
    </section>
</template>


<style scoped>
.casos{
    padding: 5px 0;
}

.casos h1{
    margin: 0 0 8px;
    font-size: 2.2rem;
}
.casos-lista {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
    margin-bottom: 32px;
}
 
.caso-card {
    padding: 22px;
    background: var(--blanco);
    border: 1px solid var(--borde);
    border-left: 5px solid var(--principal);
    border-radius: var(--radio);
}
 
.caso-card h3 {
    margin: 0 0 4px;
    font-size: 1.15rem;
}
 
.caso-ocupacion {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--principal);
}
 
.caso-testimonio {
    margin: 12px 0;
    font-style: italic;
}
 
.caso-datos {
    margin: 0;
    padding-left: 20px;
    font-size: 0.9rem;
}
</style>