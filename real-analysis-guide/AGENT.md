# AGENT.md

## Objetivo del proyecto

Construir una guia web de **Analisis Real** y, a continuacion, de **Analisis Matematico** en espanol tecnico claro, con rigor formal guiado, publicada con `VitePress` y servida en Docker.

La prioridad inmediata sigue siendo **cerrar por completo Analisis Real**. Una vez hecho eso, la expansion natural es `Analisis Matematico` con espacios metricos, normados y teoremas estructurales.

## Estado actual

### Ya implementado

- Sitio `VitePress` funcional en `docs/`.
- Publicacion en Docker con `Dockerfile`, `nginx.conf` y `compose.yaml`.
- Soporte de matematicas con `markdown-it-mathjax3`.
- Regla automatica para detectar LaTeX mal metido en backticks:
  - `npm run docs:check-math`
- Navegacion web y sidebar para todo el bloque de Analisis Real.
- Pagina de metodologia publicada en `docs/metodologia.md`.
- Tema completo:
  - `docs/analisis-real/principio-del-supremo.md`
- Tema completo:
  - `docs/analisis-real/sucesiones.md`
- Tema completo:
  - `docs/analisis-real/convergencia-de-sucesiones.md`
- Tema completo:
  - `docs/analisis-real/sucesiones-acotadas.md`
- Tema completo:
  - `docs/analisis-real/operaciones-con-sucesiones.md`
- Tema completo:
  - `docs/analisis-real/subsucesiones.md`
- Tema completo:
  - `docs/analisis-real/sucesiones-de-cauchy.md`
- Tema completo:
  - `docs/analisis-real/bolzano-weierstrass.md`
- Tema completo:
  - `docs/analisis-real/series.md`
- Tema completo:
  - `docs/analisis-real/series-geometricas.md`
- Tema completo:
  - `docs/analisis-real/criterios-comparacion-condensacion.md`
- Tema completo:
  - `docs/analisis-real/criterios-cauchy-raiz.md`
- Tema completo:
  - `docs/analisis-real/topologia-recta-real.md`
- Tema completo:
  - `docs/analisis-real/compacidad.md`
- Tema completo:
  - `docs/analisis-real/conexidad.md`
- Tema completo:
  - `docs/analisis-real/limites-epsilon-delta.md`
- Tema completo:
  - `docs/analisis-real/limites-laterales.md`
- Tema completo:
  - `docs/analisis-real/continuidad.md`
- Tema completo:
  - `docs/analisis-real/continuidad-uniforme.md`
- Tema completo:
  - `docs/analisis-real/derivada.md`
- Tema completo:
  - `docs/analisis-real/reglas-de-derivacion.md`
- Tema completo:
  - `docs/analisis-real/regla-de-la-cadena.md`
- Tema completo:
  - `docs/analisis-real/regla-de-lhopital.md`
- Tema completo:
  - `docs/analisis-real/integral-de-riemann.md`
- Tema completo:
  - `docs/analisis-real/funciones-riemann-integrables.md`
- Tema completo:
  - `docs/analisis-real/integral-definida.md`
- Mapa inicial del siguiente bloque:
  - `docs/analisis-matematico/index.md`
- Tema completo:
  - `docs/analisis-matematico/espacios-metricos.md`

### Publicacion actual

- Contenedor: `guia-analisis-real`
- Puerto: `31416`
- El sitio debe servir la version mas reciente reconstruyendo la imagen y relanzando el contenedor cuando haya cambios.

## Regla editorial obligatoria

### Escritura matematica

- Usar `$...$` para matematica inline.
- Usar `$$...$$` para matematicas en bloque.
- No usar backticks para formulas.
- Reservar backticks para comandos, nombres de archivos y rutas.

### Dos tipos de temas

#### 1. Temas operativos

Llevan:

1. motivacion e intuicion;
2. prerrequisitos;
3. definiciones formales;
4. interpretacion en lenguaje natural;
5. ejemplos basicos;
6. ejemplos finos y contraejemplos;
7. proposiciones y teoremas;
8. demostraciones completas;
9. errores comunes;
10. resumen operativo;
11. 15 ejercicios;
12. soluciones completas.

#### 2. Temas teoricos

Llevan:

1. motivacion e intuicion;
2. prerrequisitos;
3. definiciones formales;
4. interpretacion en lenguaje natural;
5. ejemplos basicos;
6. ejemplos finos y contraejemplos;
7. teoremas y demostraciones;
8. errores comunes;
9. resumen conceptual;
10. ejemplos guiados finales.

Los temas teoricos **no** llevan ejercicios. Deben incluir suficientes ejemplos trabajados.

## Clasificacion fija de temas

### Temas operativos

- Principio del supremo
- Sucesiones
- Convergencia de sucesiones
- Sucesiones acotadas
- Operaciones con sucesiones
- Subsucesiones
- Sucesiones de Cauchy
- Series
- Series geometricas
- Criterios de comparacion y condensacion
- Criterios de Cauchy y de la raiz
- Limites epsilon-delta
- Continuidad
- Continuidad uniforme
- Limites laterales
- Integral definida
- Derivada
- Reglas de derivacion
- Regla de la cadena
- Regla de L'Hopital

### Temas teoricos

- Bolzano-Weierstrass
- Topologia de la recta real
- Compacidad
- Conexidad
- Integral de Riemann
- Funciones Riemann integrables

## Secuencia de trabajo restante

Trabajar **tema por tema** y no avanzar al siguiente sin cerrar el actual.

Orden pendiente:

1. ~~Bolzano-Weierstrass~~ (completo)
2. ~~Series~~ (completo)
3. ~~Series geometricas~~ (completo)
4. ~~Criterios de comparacion y condensacion~~ (completo)
5. ~~Criterios de Cauchy y de la raiz~~ (completo)
6. ~~Topologia de la recta real~~ (completo)
7. ~~Compacidad~~ (completo)
8. ~~Conexidad~~ (completo)
9. ~~Limites epsilon-delta~~ (completo)
10. ~~Continuidad~~ (completo)
11. ~~Continuidad uniforme~~ (completo)
12. ~~Limites laterales~~ (completo)
13. ~~Integral de Riemann~~ (completo)
14. ~~Funciones Riemann integrables~~ (completo)
15. ~~Integral definida~~ (completo)
16. ~~Derivada~~ (completo)
17. ~~Reglas de derivacion~~ (completo)
18. ~~Regla de la cadena~~ (completo)
19. ~~Regla de L'Hopital~~ (completo)

## Mapa futuro de Analisis Matematico

Una vez cerrado Analisis Real, abrir el siguiente bloque en este orden:

1. Espacios metricos.
2. Convergencia de sucesiones en metricos.
3. Sucesiones y criterios de Cauchy en metricos.
4. Completitud y ejemplos clasicos como $\ell^1$.
5. Bolas abiertas, abiertos, cerrados, clausura y frontera.
6. Topologia de espacios metricos y puntos de acumulacion.
7. Teorema de Baire en sus versiones basicas.
8. Espacios separables y teorema de Lindelof.
9. Continuidad, continuidad uniforme, homeomorfismos e isometrias.
10. Teoremas de Bolzano-Weierstrass, Heine-Borel y variantes segun el contexto.

## Criterio de cierre por tema

Un tema solo se considera terminado si cumple todo esto:

- no queda texto placeholder;
- todas las formulas renderizan bien;
- `npm run docs:check-math` pasa;
- las definiciones son consistentes;
- las demostraciones son logicamente correctas;
- los ejemplos y contraejemplos son correctos;
- si es operativo, tiene exactamente 15 ejercicios y soluciones completas;
- si es teorico, tiene suficientes ejemplos trabajados y no incluye seccion de ejercicios.

## Archivos clave

- `docs/.vitepress/config.mts`
- `docs/index.md`
- `docs/metodologia.md`
- `docs/analisis-real/*.md`
- `scripts/check-math-delimiters.sh`
- `Dockerfile`
- `compose.yaml`

## Comandos utiles

### Validacion

```bash
npm run docs:check-math
```

### Build local del sitio

```bash
npm run docs:build
```

### Reconstruir imagen Docker

```bash
docker build -t guia-analisis-real .
```

### Reemplazar contenedor en 31416

```bash
docker rm -f guia-analisis-real || true
docker run -d --name guia-analisis-real -p 31416:80 guia-analisis-real
```

## Restricciones importantes

- No empezar `Analisis Matematico` antes de terminar Analisis Real.
- No meter formulas en backticks.
- No dejar temas a medio escribir si se anuncian como completos.
- No cambiar el rigor a un estilo superficial o de resumen.
- No quitar contenido correcto ya validado salvo para corregir errores reales o unificar metodologia.

## Proxima accion recomendada

Continuar con:

**Analisis Real completado.** Fase 2: Analisis Matematico en curso.

El siguiente tema es `docs/analisis-matematico/bolas-abiertas-metricos.md`

siguiendo la plantilla operativa (15 ejercicios con soluciones completas).
