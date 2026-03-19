# Guia de Matematicas

Este proyecto publica una guia abierta de autoestudio en matematicas, desde fundamentos fuertes hasta bloques puente hacia trabajo doctoral. Tiene dos rutas de uso:

- `Docker` para estudio local y verificacion rapida en `http://localhost:31416`
- `GitHub Pages` para publicacion abierta y gratuita en `https://alejandrombjs.github.io/openmath/`

La publicacion publica usa `VitePress` estatico y se despliega automaticamente en GitHub Pages cada vez que hay un push a `main`.

Para no castigar la RAM de la maquina local, el build de Pages esta pensado para correr en GitHub Actions. El flujo publico desactiva la busqueda local durante el build estatico para reducir consumo de memoria.

## Publicacion en GitHub Pages

El repo ya incluye el workflow en `.github/workflows/deploy-pages.yml`.

Para dejarlo activo en GitHub:

1. Sube el repositorio a `AlejandroMBJS/openmath`.
2. En GitHub, abre `Settings > Pages`.
3. En `Source`, selecciona `GitHub Actions`.
4. Haz push a `main`.

La URL publica quedara en:

`https://alejandrombjs.github.io/openmath/`

La configuracion de `VitePress` detecta automaticamente el nombre del repositorio en GitHub Actions y usa el `base` correcto para Pages.

## Levantar con Docker

```bash
docker build -t guia-analisis-real .
docker run --rm -p 31416:31416 guia-analisis-real
```

Luego abre `http://localhost:31416`.

## Levantar con Docker Compose

```bash
docker compose up --build
```

Luego abre `http://localhost:31416`.

## Desarrollo local sin Docker

```bash
npm install
npm run docs:dev
```

Si realmente quieres probar el build estatico local que usa GitHub Pages:

```bash
npm run docs:build
```

## Verificacion rapida

La pagina de `Convergencia de sucesiones` debe quedar disponible en:

`http://localhost:31416/analisis-real/convergencia-de-sucesiones`

Si el despliegue esta actualizado, ya no debe aparecer el texto `Tema pendiente de desarrollo`.
