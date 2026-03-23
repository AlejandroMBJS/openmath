---
title: Superficies Topologicas, Cartas y Atlas
description: Superficies como variedades topologicas de dimension dos, cartas, atlas y modelos locales.
---

# Superficies Topologicas, Cartas y Atlas

## Modelo local

Una superficie topologica no se define primero por una ecuacion en el espacio, sino por su comportamiento local: cada punto debe tener un entorno homeomorfo a un abierto de $\mathbb{R}^2$.

## Definicion

Un espacio topologico $S$ es una **superficie topologica** si es Hausdorff, segundo numerable y para todo $p\in S$ existe un abierto $U\subset S$ y un homeomorfismo

$$
\varphi:U\to V,
$$

con $V\subset \mathbb{R}^2$ abierto.

La aplicacion $\varphi$ se llama **carta local**.

## Atlas

Una familia de cartas

$$
\{(U_\alpha,\varphi_\alpha)\}_{\alpha\in A}
$$

es un atlas si los abiertos $U_\alpha$ cubren toda la superficie:

$$
S=\bigcup_{\alpha\in A} U_\alpha.
$$

## Cambios de coordenadas

Si dos cartas se superponen, el cambio de coordenadas es

$$
\varphi_\beta\circ\varphi_\alpha^{-1}:
\varphi_\alpha(U_\alpha\cap U_\beta)
\to
\varphi_\beta(U_\alpha\cap U_\beta).
$$

En topologia basta que sea homeomorfismo. En geometria diferencial se pedira suavidad.

## Ejemplos fundamentales

### Plano

$\mathbb{R}^2$ es una superficie con una sola carta global.

### Esfera

La esfera $S^2$ no admite una sola carta global compatible con abiertos del plano. Dos proyecciones estereograficas bastan para cubrirla.

### Toro

El toro topologico es localmente plano aunque globalmente tenga otra topologia. Esta es la primera separacion importante entre geometria local y topologia global.

## No ejemplos

- un cono con el vertice incluido como punto suave;
- la interseccion transversal de dos superficies en el punto de cruce.

En ambos casos falla el modelo local euclideo bidimensional.

## Superficies con borde

Si se admiten bordes, algunos puntos tienen entornos homeomorfos a abiertos del semiplano

$$
\mathbb{H}^2=\{(x,y)\in\mathbb{R}^2:y\ge 0\}.
$$

En este bloque trabajaremos por defecto con superficies sin borde salvo indicacion explicita.

## Estructuras adicionales

Las cartas no solo describen la superficie: determinan que tipo de estructura tiene.

- atlas topologico: cambios continuos;
- atlas diferenciable: cambios suaves;
- atlas conforme: cambios compatibles con estructura compleja.

## Cierre

Las superficies topologicas son variedades de dimension dos. Las cartas y atlas permiten trabajar localmente en coordenadas planas sin olvidar que el objeto global puede tener topologia muy distinta de la del plano. Sobre esta base se construye la nocion de superficie diferenciable.
