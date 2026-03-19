# AGENT.md

## Objetivo real del proyecto

Construir una guia web abierta de matematicas en espanol, con nivel que vaya desde fundamentos fuertes hasta bloques puente hacia trabajo doctoral en matematica y fisica matematica.

Ya no es solo una guia de Analisis Real. El proyecto activo cubre y seguira cubriendo:

- Analisis real
- Analisis matematico
- Algebra superior
- Topologia
- Calculo vectorial y multivariado
- Probabilidad y estadistica
- Ecuaciones diferenciales
- Ecuaciones diferenciales parciales
- Metodos numericos
- Analisis de Fourier
- Variable compleja
- Geometria diferencial
- Metodos matematicos para la fisica
- Calculo tensorial

## Estructura real del repo

Hay una trampa importante: el repositorio git real esta en:

- `/home/iamx/math`

Pero el proyecto del sitio vive en:

- `/home/iamx/math/real-analysis-guide`

Por eso:

- el contenido, `package.json`, `docs/`, `Dockerfile` y `README.md` viven en `real-analysis-guide/`
- el workflow valido de GitHub Actions debe vivir en la raiz real del repo:
  - `/home/iamx/math/.github/workflows/deploy-pages.yml`

No volver a poner el workflow dentro de `real-analysis-guide/.github/workflows/`, porque GitHub no lo detecta ahi.

## Estado actual del sitio

### Local

- El sitio local de estudio se sirve con VitePress `dev` dentro de Docker.
- Contenedor esperado:
  - `guia-analisis-real`
- Puerto local:
  - `31416`
- URL local:
  - `http://localhost:31416`

### Publico

- La publicacion publica es GitHub Pages:
  - `https://alejandrombjs.github.io/openmath/`
- El workflow de Pages compila desde `real-analysis-guide/`.
- El `base` de VitePress se calcula automaticamente desde `GITHUB_REPOSITORY`.
- Cada `push` a `main` recompila y publica el sitio.

## Estado de despliegue

### Docker

El flujo local correcto es VitePress `dev`, no `nginx` con sitio estatico.

Archivos clave:

- `real-analysis-guide/Dockerfile`
- `real-analysis-guide/compose.yaml`
- `real-analysis-guide/scripts/run-vitepress.sh`

### GitHub Pages

El build publico ya no depende del viejo render matematico pesado en build.

Reglas:

- El build de Pages corre en GitHub Actions, no en la maquina local salvo necesidad real.
- El workflow usa:
  - `working-directory: real-analysis-guide`
  - `DOCS_NODE_HEAP_MB=12288`
  - `DOCS_LOCAL_SEARCH=false`
- La busqueda local de VitePress queda desactivada en CI para bajar consumo de memoria.
- Las formulas ya no se renderizan en build con `markdown-it-mathjax3`.
- Ahora se usa:
  - MathJax en cliente inyectado desde `config.mts`
  - hook de tema para re-typeset al navegar
  - tokenizer ligero en `docs/.vitepress/math-plugin.mjs` para proteger sintaxis matematica durante el parseo de Markdown y Vue
- El build estatico ya pasa localmente y en GitHub Actions.

## Flujo real para seguir creciendo la guia

- El contenido del curso se sigue escribiendo en archivos `.md`.
- Casi todo vive bajo:
  - `real-analysis-guide/docs/`
- Si se agrega un tema nuevo:
  - crear o editar el `.md`
  - enlazarlo en `real-analysis-guide/docs/.vitepress/config.mts` si debe aparecer en navbar o sidebar
  - hacer `git add`, `git commit` y `git push origin main`
- GitHub Pages recompila y publica automaticamente despues del `push`.

## Estado editorial real

El criterio viejo de "15 ejercicios exactos por tema operativo" ya no debe usarse como regla universal.

La regla vigente es:

- no forzar `15` ejercicios si no hacen falta;
- priorizar desarrollo matematico real;
- incluir definiciones, intuicion, teoremas, pruebas, ejemplos finos y contraejemplos;
- cuando un tema pide practica, agregar ejercicios y soluciones con criterio, no por cuota mecanica.

## Bloques que ya quedaron fuertes

### Muy maduros

- Analisis real
- Analisis matematico
- Topologia

### Fuertes y ya no solo introductorios

- Algebra superior
- Calculo vectorial y multivariado
- Probabilidad y estadistica
- Ecuaciones diferenciales
- Ecuaciones diferenciales parciales
- Analisis de Fourier
- Variable compleja

### Pendientes de seguir elevando o completar de forma pareja

- Metodos numericos
- Matematicas discretas
- Geometria diferencial
- Metodos matematicos para la fisica
- Calculo tensorial

## Ultimos avances importantes

- Se amplio el navbar, sidebar, portada y mapa para el programa completo.
- Se resolvio el cuello de build estatico:
  - ya no falla por RAM
  - ya no choca con notacion matematica tipo conjuntos, `\omega`, etc.
  - GitHub Pages ya puede compilar el sitio completo
- Se reescribio buena parte de `probabilidad y estadistica` con mas rigor teorico.
- `ecuaciones diferenciales` dejo de ser solo clasico y ya incluye:
  - Lyapunov no lineal
  - Hartman-Grobman
  - Poincare-Bendixson
  - bifurcaciones
  - Sturm-Liouville
  - semigrupos en Banach
- `ecuaciones diferenciales parciales` ya incluye una espina doctoral reconocible:
  - regularidad
  - semilineales y quasilineales
  - sistemas hiperbolicos
  - Navier-Stokes
  - microlocal y pseudodiferenciales
  - EDP estocasticas
  - problemas inversos
- `analisis de Fourier` ya incluye:
  - Schwartz y distribuciones temperadas
  - Plancherel
  - Paley-Wiener
  - multiplicadores
  - wavelets
  - Littlewood-Paley
  - Hardy/Hilbert
- `variable compleja` ya incluye:
  - Laurent y meromorfas
  - principio del argumento y Rouche
  - transformaciones conformes
  - esfera de Riemann
  - potencial logaritmico
  - continuation analitica y monodromia
  - Runge, Mittag-Leffler y Weierstrass
  - Montel y Picard
  - aplicacion de Riemann y frontera

## Archivos clave

### Sitio

- `real-analysis-guide/docs/.vitepress/config.mts`
- `real-analysis-guide/docs/index.md`
- `real-analysis-guide/docs/mapa.md`
- `real-analysis-guide/docs/metodologia.md`

### Tooling

- `real-analysis-guide/package.json`
- `real-analysis-guide/scripts/run-vitepress.sh`
- `real-analysis-guide/scripts/check-math-delimiters.sh`
- `real-analysis-guide/docs/.vitepress/theme/index.ts`
- `real-analysis-guide/docs/.vitepress/theme/custom.css`
- `real-analysis-guide/docs/.vitepress/math-plugin.mjs`

### Despliegue

- `real-analysis-guide/Dockerfile`
- `real-analysis-guide/compose.yaml`
- `/home/iamx/math/.github/workflows/deploy-pages.yml`

## Comandos utiles

### Validacion matematica

```bash
cd /home/iamx/math/real-analysis-guide
npm run docs:check-math
```

### Desarrollo local

```bash
cd /home/iamx/math/real-analysis-guide
npm run docs:dev
```

### Build estatico

```bash
cd /home/iamx/math/real-analysis-guide
npm run docs:build
```

### Docker local

```bash
cd /home/iamx/math/real-analysis-guide
docker build -t guia-analisis-real .
docker rm -f guia-analisis-real || true
docker run -d --name guia-analisis-real -p 31416:31416 guia-analisis-real
```

### Publicar cambios normales

```bash
cd /home/iamx/math
git add .
git commit -m "Describe el cambio"
git push origin main
```

## Restricciones importantes

- No volver a asumir que el repo root es `real-analysis-guide/`; el root real es `/home/iamx/math`.
- No volver a poner workflows dentro de `real-analysis-guide/.github/`.
- No volver al plugin `markdown-it-mathjax3` para render en build.
- `npm run docs:build` ya pasa, pero no hace falta correrlo localmente por costumbre para publicar.
- No meter formulas en backticks.
- No marcar un bloque como doctoral o completo si aun esta desparejo.
- No bajar el nivel del texto a resumen superficial.

## Criterio de cierre actual

Un bloque solo se considera realmente cerrado cuando:

- ya no tiene placeholders ni paginas-esquema vacias;
- `npm run docs:check-math` pasa;
- las rutas del sidebar existen de verdad;
- el contenido tiene definiciones, pruebas y ejemplos suficientes;
- el nivel del bloque es homogeneo y no solo unas pocas paginas fuertes;
- el despliegue local sigue funcionando y el flujo publico ya puede publicarse con `push` a `main` sin maniobras manuales raras.
