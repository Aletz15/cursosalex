<script setup lang="ts">
import {ref, reactive} from 'vue'
import {useRoute} from 'vue-router'
import cursos, {getCursoById} from '../data/cursos.ts'

//leer url ACTUAL diferente a router
const route = useRoute()

//datis para el formulario
const datos = ref({
    nombre: '',
    correo: '',
    telefono: '',
    ciudad: '',
})

//cuadradito para aceptar privacidad
const aceptaPrivacidad = ref(false)

//si true, se muestra inscripcion guardada
const guardado = ref(false)

const cursoId = ref(Number(route.params.id) || 0)

function guardarFormulario(){
    if (cursoId.value === 0){
        alert('Elige un curso para inscribirte')
        return
    }
    console.log('Inscripcion simulada', {...datos.value, cursoId: cursoId.value})
    guardado.value = true
}
</script>


<template>
    <section clas="inscripcion">
        <div class="contenedor">
            <h1>Inscripciones</h1>
            <p>Llena con tus datos para apartar tu lugar en el curso que elijas.</p>

            <h2>Como inscribirte</h2>
            <ol>
                <li>Elige el curso que te interesa</li>
                <li>Llena el formulario con tus datos</li>
                <li>Acepta el aviso de privacidad</li>
                <li>Confirma tu inscripción</li>
            </ol>

            <div class="inscripcion-contenido">
                <form v-if="!guardado" class="formulario" @submit.prevent="guardarFormulario">
                    <h2>Datos generales</h2>
                
                    <div class="formulario-campo">
                        <label for="nombre">Nombre completo</label>
                        <input type="text" id="nombre" v-model="datos.nombre" required />
                    </div>

                    <div class="formulario-campo">
                        <label for="correo">Correo electrónico</label>
                        <input type="email" id="correo" v-model="datos.correo" required />
                    </div>

                    <div class="formulario-campo">
                        <label for="telefono">Teléfono</label>
                        <input type="tel" id="telefono" v-model="datos.telefono" required />
                    </div>

                    <div class="formulario-campo">
                        <label for="ciudad">Ciudad</label>
                        <input type="text" id="ciudad" v-model="datos.ciudad" required />
                    </div>

                    <div class="campo-check">
                        <input id="privacidad" type="checkbox" v-model="aceptaPrivacidad" required />
                        <label for="privacidad">Acepto el aviso de privacidad y el
                        <RouterLink to="/privacidad">Ver aviso de privacidad</RouterLink> Mis datos seran protegidos.
                        </label>
                    </div>

                    <div class="formulario-botones">
                        <button type="submit" class="boton boton-principal">Confirmar inscripción</button>
                    </div>
                </form>

                <div v-else class="mensaje-exito">
                    <h2>Inscripcion guardada</h2>
                    <p> Gracias, {{datos.nombre}}. Te enviaremos los detalles del curso <strong>{{ getCursoById(cursoId)?.titulo}}</strong></p>
                </div>

                <aside class="resumen">
                    <h2>Tu curso</h2>
                    <div v-if="getCursoById(cursoId)">
                        <h3>{{getCursoById(cursoId)?.titulo}}</h3>
                        <ul>
                            <li>Dureacion: {{getCursoById(cursoId)?.duracion}}</li>
                            <li>Nivel: {{getCursoById(cursoId)?.nivel}}</li>
                            <li>Certificacion: {{getCursoById(cursoId)?.certificacion}}</li>
                        </ul>
                        <p><strong>Precio: ${{getCursoById(cursoId)?.precio}} MXN</strong></p>
                    </div>
                    <p v-else>Aun no has elegido un curso</p>
                    <RouterLink to="/cursos" class="boton boton-principal">Ver cursos</RouterLink>
                </aside>

            </div>
        </div>
    </section>
</template>

<style scoped>
.inscripcion {
    padding: 50px 0;
}

.inscripcion h1 {
    margin: 0 0 8px;
    font-size: 2.2rem;
}

/* Dos columnas: el formulario y el resumen del curso */
.inscripcion-contenido {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 32px;
    margin-top: 28px;
    align-items: start;
}

.formulario,
.resumen,
.mensaje-exito {
    padding: 24px;
    background: var(--blanco);
    border: 1px solid var(--borde);
    border-radius: var(--radio);
}

.formulario h2 {
    margin: 0 0 20px;
}

/* Cada campo: etiqueta arriba y cuadro de texto abajo */
.formulario-campo {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 16px;
}

.formulario-campo label {
    font-weight: 600;
    color: var(--tinta);
}

.formulario-campo input {
    padding: 10px 12px;
    font-family: inherit;
    font-size: 1rem;
    border: 1px solid var(--borde);
    border-radius: 8px;
}

/* Se resalta el campo que se está escribiendo */
.formulario-campo input:focus {
    outline: 2px solid var(--principal);
    border-color: var(--principal);
}

.campo-check {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 20px;
    font-size: 0.95rem;
}

.formulario-botones {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.resumen h2 {
    margin: 0 0 12px;
    font-size: 1.3rem;
}

.resumen h3 {
    margin: 0 0 8px;
}

.resumen ul {
    padding-left: 20px;
}

.mensaje-exito h2 {
    margin-top: 0;
    color: var(--principal);
}

@media (max-width: 768px) {
    .inscripcion-contenido {
        grid-template-columns: 1fr;
    }
}
</style>