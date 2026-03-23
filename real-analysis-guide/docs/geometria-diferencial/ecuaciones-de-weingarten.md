---
title: Ecuaciones de Weingarten
description: Derivadas del campo normal, operador de forma y expresion local de la curvatura extrinseca.
---

# Ecuaciones de Weingarten

## Derivar el normal

Si $N$ es el campo normal unitario de una superficie orientada, sus derivadas parciales $N_u$ y $N_v$ son tangentes a la superficie, porque

$$
\langle N,N\rangle=1
$$

implica

$$
\langle N_u,N\rangle=\langle N_v,N\rangle=0.
$$

## Enunciado local

Las ecuaciones de Weingarten expresan esas derivadas en la base tangente $\{X_u,X_v\}$:

$$
N_u=-a_{11}X_u-a_{12}X_v,
$$

$$
N_v=-a_{21}X_u-a_{22}X_v.
$$

La matriz $(a_{ij})$ representa el operador de forma en coordenadas.

## Relacion con las formas fundamentales

En notacion matricial,

$$
S=I^{-1}II,
$$

donde $I$ y $II$ se interpretan como matrices en la base coordenada. Esta identidad condensa las ecuaciones de Weingarten y muestra como la derivada del normal queda determinada por las dos formas fundamentales.

## Consecuencias

- los autovalores de $S$ son las curvaturas principales;
- la traza de $S$ da la curvatura media;
- el determinante de $S$ da la curvatura gaussiana.

## Caso ortonormal adaptado

Si trabajamos en una base ortonormal de direcciones principales, el operador de forma es diagonal:

$$
S=
\begin{pmatrix}
\kappa_1 & 0 \\
0 & \kappa_2
\end{pmatrix}.
$$

En esta base, las ecuaciones de Weingarten se simplifican notablemente.

## Relacion con Gauss

El hecho de que

$$
S=-d\mathcal{N}
$$

muestra que las ecuaciones de Weingarten no son otra cosa que la expresion local de la derivada de la aplicacion de Gauss.

## Ejemplo conceptual: esfera

En la esfera unitaria orientada hacia afuera, el normal coincide con la posicion, de modo que su derivada restringida al tangente es esencialmente la identidad. Por eso el operador de forma es proporcional a la identidad y todas las direcciones son principales.

## Cierre

Las ecuaciones de Weingarten traducen la geometria del campo normal en un operador lineal tangente. Son el puente local entre derivadas del normal, curvaturas principales y aplicacion de Gauss.
