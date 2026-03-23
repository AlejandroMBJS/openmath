---
title: Proyecciones a los Planos Coordenados
description: Que informacion geometrica conservan y pierden las proyecciones de curvas espaciales sobre planos coordenados.
---

# Proyecciones a los Planos Coordenados

## Motivacion

Una curva espacial suele estudiarse tambien a traves de sus proyecciones sobre los planos coordenados. Esto reduce dimensionalidad y permite visualizar componentes parciales de su geometria. Pero una proyeccion nunca conserva toda la informacion de la curva original.

## Proyecciones canonicas

Dada una curva

$$
\gamma(t)=(x(t),y(t),z(t)),
$$

sus proyecciones coordenadas son

$$
\pi_{xy}\circ\gamma=(x(t),y(t)),
$$

$$
\pi_{xz}\circ\gamma=(x(t),z(t)),
$$

$$
\pi_{yz}\circ\gamma=(y(t),z(t)).
$$

Cada una es una curva plana.

## Que se conserva

Las proyecciones conservan informacion parcial sobre la trayectoria:

- relaciones entre dos coordenadas;
- puntos de retorno en variables concretas;
- autointersecciones aparentes;
- monotonia o periodicidad en componentes seleccionadas.

## Que se pierde

Las proyecciones no conservan, en general:

- torsion;
- curvatura espacial total;
- orientacion tridimensional del triedro;
- caracter de inmersion global.

Distintas curvas espaciales pueden tener las mismas proyecciones parciales si se modifica la coordinada omitida de manera adecuada.

## Ejemplo: helice

La helice

$$
\gamma(t)=(a\cos t,a\sin t,bt)
$$

tiene proyeccion sobre el plano $xy$ igual a una circunferencia, mientras que sobre los planos $xz$ y $yz$ aparecen curvas sinusoidales. Ninguna de estas proyecciones por si sola revela la torsion constante de la helice.

## Proyeccion y regularidad

Una curva espacial regular puede proyectarse sobre una curva plana no regular si el vector velocidad cae alineado con la direccion eliminada. Por eso la regularidad de la curva original no garantiza regularidad de sus proyecciones.

## Curvatura aparente

La curvatura de una proyeccion plana no coincide en general con la curvatura espacial. Solo describe el doblado de la sombra de la curva sobre el plano escogido.

## Uso analitico

En aplicaciones, las proyecciones ayudan a resolver o visualizar:

- intersecciones con superficies coordenadas;
- comportamiento cualitativo de sistemas dinamicos;
- reconstruccion parcial desde datos observados en dos dimensiones.

## Lectura geometrica correcta

Las proyecciones deben verse como observables parciales de la curva, no como equivalentes geometricos de la misma. Son utiles para inferir patrones, pero no sustituyen a la descripcion intrinseca mediante curvatura y torsion.

## Cierre

Las proyecciones a los planos coordenados simplifican la visualizacion de curvas espaciales y extraen informacion parcial util. Sin embargo, siempre eliminan parte de la geometria tridimensional, en especial la torsion y la estructura completa del triedro.
