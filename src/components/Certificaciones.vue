<script setup lang="ts">
//arreglo y funcion por curso por id basicon
import certificaciones from '../data/certificaciones'
import { getCursoById } from '../data/cursos'

const cursoDe = (cursoId: number) => getCursoById(cursoId)

</script>

<template>
    <section class="certificaciones">
        <div class="contenedor">
            <h1>Certificaciones</h1>
            <p>Nuestros cursos te preparan para obtener certificaciones reconocidas en el mundo de las tecnologías de la información y los idiomas. El examen lo aplica cada organismo certificador; nosotros te acompañamos en la preparación.</p>

            <h2>Certificaciones para las que te preparas</h2>
            <div class="certificados-lista">
                <article v-for="certificacion in certificaciones" :key="certificacion.id" class="certificado-card">
                    
                    <h3>{{ certificacion.nombre }}</h3>
                    <span class="certificado-organismo">Emitida por: {{ certificacion.organismo}}</span>
                    <p>{{ certificacion.descripcion }}</p>

                    <p v-if="cursoDe(certificacion.cursoId)" class="certificado-curso">
                        Te preparas con: <strong>{{ cursoDe(certificacion.cursoId)?.titulo}}</strong>
                    </p>

                    <RouterLink :to="{name: 'Inscripciones', params: {id: certificacion.cursoId}}" class="boton boton-secundario">Inscribirme al curso
                    </RouterLink>
                </article> 
            </div>
        </div>
    </section>
</template>