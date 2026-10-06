<script setup lang="ts">
import {useRouter} from 'vue-router'
import cursos, { getCursosDemandados, getCursoById } from '../data/cursos'
import casos from '../data/casos.ts'
import CursoCard from './CursoCard.vue'
import Casos from './Casos.vue'

const router = useRouter()

const total = cursos.length
const demandados = getCursosDemandados()

//mostrar 3 cards demandadas en la pag de inicio
const destacados = demandados.slice(0,3)

//hijo cursocard avisa con el id del curso 
function inscribirCurso(cursoId: number) {
    router.push({ name: 'Inscripciones', params: { id: cursoId} })
}
</script>

<template>
    <!-- presentacion contenedor 1-->
    <section id="inicio" class="inicio">
        <div class="contenedor inicio-contenido">
            <div>
                <h1>Bienvenido a la plataforma de cursos en linea</h1>
                <p>En esta plataforma encontrarás una amplia variedad de cursos en linea para mejorar tus habilidades y conocimientos en diferentes áreas.</p>
                
            <div class="inicio-botones">
                <RouterLink to="/cursos" class="boton boton-principal">Ver cursos</RouterLink>
                <RouterLink to="/inscripciones" class="boton boton-secundario">Inscripciones</RouterLink>
            </div>

            <ul class="inicio-datos">
                <li><strong>{{ total }}</strong>cursos en total</li>
                <li><strong>{{ demandados.length }}</strong>cursos mas demandados</li>
                <li><strong>100%</strong>en linea</li>
            </ul>
        </div>

        <img class="inicio-imagen" src="https://internationalschooling.org/_next/image?url=https%3A%2F%2Finternationalschooling.org%2FTop-10-Benefits-Of-Online-Learning-That-Will-Change-Your-Mind.jpg&w=3840&q=75" alt="Estudiante tomando un curso en línea"/>
        </div>
    </section>

    <!-- Cursos mas demandados 2-->
    <section class="inicio-seccion">
        <div class="contenedor">
            <h2>Los cursos mas demandados</h2>
            <p>Los favoritos de nuestros alumnos para empezar</p>

            <div class="inicio-cursos">
                <CursoCard v-for="curso in destacados" :key="curso.id" v-bind="curso" @inscribir="inscribirCurso"/>
            </div>

            <div class="inicio-centro">
                <RouterLink to="/cursos" class="boton boton-secundario">Ir a todos los cursos</RouterLink>
            </div>
        </div>
    </section>

    <!-- Porque elegirnos 3-->
    <section class="inicio-seccion inicio-blanco">
        <div class="contenedor">
            <h2>¿Porque elegirnos?</h2>
            <div class="inicio-beneficios">
                <article class="beneficio">
                    <h3>Certificaciones reconocidas</h3>
                    <p>Te preparamos para examenes de Cisco, CompTIA, AWS, Cambridge y mas</p>
                </article>
                
                <article class="beneficio">
                    <h3>Aprende a tu ritmo</h3>
                    <p>Cursos 100% en linea, con videos y material de apoyo para estudiar cuando quieras.</p>
                </article>

                <article class="beneficio">
                    <h3>Empresas aliadas</h3>
                    <p>Trabajamos con empresas que abren sus puertas a nuestros egresados.</p>
                </article>
            </div>
        </div>
    </section>

    <!-- historias casos de exito 4-->
    <section class="inicio seccion">
        <div class="contenedor">
            <h2>Unete a otras personas que estan transformando sus vidas a traves del aprendizaje</h2>

            <div class="historias-lista">
                <article v-for="caso in casos" :key="caso.id" class="historia-card">
                    <span class="historia-comillas">&ldquo;</span>
                    <p class="historia-texto">{{ caso.testimonio }}</p>

                    <div class="historia-autor">
                        <span class="historia-persona">{{ caso.nombre[0] }}</span>
                        <div>
                            <strong>{{ caso.nombre}}</strong>
                            <small>{{ caso.ocupacion}}</small>
                        </div>
                    </div>

                    <RouterLink :to="{name: 'Inscripciones', params: {id: caso.cursoId}}" class="historia-enlace">
                        Ver curso de {{ getCursoById(caso.cursoId)?.categoria}} &rsaquo;</RouterLink>
                </article>
            </div>

            <RouterLink to="/casos" class="historias-todas">Ver todas las historias &rarr;</RouterLink>
        </div>
    </section>


     <!-- Invitacion 5 -->
      <section class="inicio-cta">
        <div class="contenedor">
            <h2>¿Listo para empezar?</h2>
            <p>Elige tu curso y aparta tu lugar.</p>
            <RouterLink to="/inscripciones" class="boton boton-principal">Inscribete ahora</RouterLink>
        </div>
    </section>
</template>

<style scoped>
/* ===== Presentación ===== */
.inicio::before {
    content: '';
    position: absolute;
    top: -140px;
    right: -120px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: rgba(15, 118, 110, 0.08);
}

/* Circulo amarillo abajo a la izquierda */
.inicio::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -80px;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: rgba(245, 158, 11, 0.12);
}

/* El contenido va encima de los circulos */
.inicio-contenido {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.inicio h1 {
    margin: 0 0 16px;
    font-size: 2.8rem;
}

.inicio-texto {
    margin: 0 0 24px;
    font-size: 1.1rem;
}

.inicio-botones {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.inicio-datos {
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    margin: 32px 0 0;
    padding: 0;
    list-style: none;
}

.inicio-datos strong {
    display: block;
    font-size: 1.6rem;
    color: var(--principal);
}

.inicio-imagen {
    width: 100%;
    height: 320px;
    object-fit: cover;   /* recorta la foto en vez de deformarla */
    border-radius: var(--radio);
    border-bottom: 6px solid var(--acento);
    box-shadow: 0 12px 30px rgba(18, 38, 58, 0.18);
}

/* ===== Secciones de abajo ===== */
.inicio-seccion {
    padding: 50px 0;
}

.inicio-seccion h2 {
    margin: 0 0 8px;
    font-size: 1.8rem;
}

/* ===== 2. Cursos demandados: fondo gris con puntitos ===== */
.inicio-puntos {
    background-color: var(--fondo);
    background-image: radial-gradient(rgba(18, 38, 58, 0.09) 1.5px, transparent 1.5px);
    background-size: 22px 22px;
}

.inicio-cursos {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
    margin-top: 24px;
}

.inicio-centro {
    margin-top: 32px;
    text-align: center;
}

/* ===== 3. Por que elegirnos: de blanco a verde suave ===== */
.inicio-claro {
    background: linear-gradient(180deg, var(--blanco) 0%, var(--principal-claro, #e6f4f1) 100%);
}

.inicio-beneficios {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
    margin-top: 24px;
}

.beneficio {
    padding: 22px;
    background: var(--blanco);
    border: 1px solid var(--borde);
    border-top: 5px solid var(--acento);
    border-radius: var(--radio);
    box-shadow: 0 6px 18px rgba(18, 38, 58, 0.08);
}

.beneficio h3 {
    margin: 0 0 8px;
    font-size: 1.15rem;
}

.beneficio p {
    margin: 0;
}

/* ===== 4. Invitacion final: degradado oscuro con circulo de adorno ===== */
.inicio-cta {
    position: relative;
    overflow: hidden;
    padding: 60px 0;
    text-align: center;
    background: linear-gradient(135deg, var(--tinta) 0%, var(--principal-oscuro) 100%);
}

.inicio-cta::before {
    content: '';
    position: absolute;
    top: -120px;
    right: -80px;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.06);
}

.inicio-cta .contenedor {
    position: relative;
    z-index: 1;
}

.inicio-cta h2 {
    margin: 0 0 8px;
    color: var(--blanco);
}

.inicio-cta p {
    margin: 0 0 20px;
    color: var(--borde);
}

/* ===== Historias de alumnos ===== */
.historias-lista {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
    margin-top: 24px;
}

.historia-card {
    display: flex;
    flex-direction: column;
    padding: 24px;
    background: var(--blanco);
    border: 1px solid var(--borde);
    border-radius: var(--radio);
}

.historia-comillas {
    font-family: Georgia, serif;
    font-size: 3rem;
    font-weight: 700;
    line-height: 0.8;
    color: var(--tinta);
}

.historia-texto {
    margin: 12px 0 20px;
    font-size: 0.92rem;
}

.historia-autor {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: auto;      /* empuja autor y enlace al fondo, todas las tarjetas quedan parejas */
    margin-bottom: 20px;
}

.historia-persona {
    flex-shrink: 0;
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--principal);
    color: var(--blanco);
    font-weight: 700;
}

.historia-autor strong {
    display: block;
    font-size: 0.9rem;
    color: var(--tinta);
}

.historia-autor small {
    font-size: 0.8rem;
    color: var(--texto);
}

.historia-enlace,
.historias-todas {
    font-weight: 600;
    color: var(--principal);
    text-decoration: none;
}

.historia-enlace {
    font-size: 0.9rem;
}

.historia-enlace:hover,
.historias-todas:hover {
    text-decoration: underline;
}

.historias-todas {
    display: inline-block;
    margin-top: 28px;
    font-weight: 700;
}

/* ===== Responsivo ===== */
@media (max-width: 768px) {
    .inicio {
        padding: 40px 0;
    }

    .inicio-contenido {
        grid-template-columns: 1fr;
    }

    .inicio h1 {
        font-size: 2.1rem;
    }

    .inicio-imagen {
        height: 240px;
    }
}
</style>