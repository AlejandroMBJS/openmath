---
title: Rotacion con Doble Simetria
description: Simetria de orden dos, rotacion de ciento ochenta grados y su lectura algebraica y geometrica.
---

# Rotacion con Doble Simetria

## Simetria de orden dos

Una rotacion con doble simetria es una transformacion cuya aplicacion dos veces produce la identidad:

$$
R^2=I.
$$

Geometricamente corresponde, en el caso tipico, a una rotacion de angulo $\pi$ alrededor de un eje.

## Grupo ciclico asociado

El conjunto generado por una tal rotacion forma un grupo ciclico de orden dos

$$
C_2=\{e,r\},\qquad r^2=e.
$$

Es el ejemplo mas simple de simetria discreta no trivial.

## Matriz en el plano

En dos dimensiones, la rotacion de $180^\circ$ es

$$
R_\pi=
\begin{pmatrix}
-1 & 0 \\
0 & -1
\end{pmatrix}=-I.
$$

Todo vector cambia de signo, pero las rectas que pasan por el origen quedan invariantes como conjuntos.

## En tres dimensiones

Una rotacion de angulo $\pi$ alrededor del eje $z$ se escribe

$$
R=
\begin{pmatrix}
-1 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & 1
\end{pmatrix}.
$$

El eje de rotacion queda fijo punto a punto y el plano ortogonal cambia de signo.

## Espectro

Los autovalores de una rotacion de orden dos son necesariamente $\pm1$. En el ejemplo tridimensional anterior aparecen $1,-1,-1$, lo que separa la direccion fija del eje y el plano transversal invertido.

## Propiedades algebraicas

- $R^{-1}=R$;
- $R$ es ortogonal;
- $\det R=1$ en el caso de una rotacion propia en tres dimensiones;
- $R$ es diagonalizable sobre $\mathbb{R}$ porque satisface el polinomio $x^2-1$ con raices simples.

## Significado fisico

La simetria de orden dos aparece en cristales con eje binario, paridades internas de ciertos modos, configuraciones moleculares con media vuelta indistinguible y operadores involutivos de teorias cuanticas.

## Relacion con reflexiones

No debe confundirse una rotacion de orden dos con una reflexion. Ambas satisfacen $T^2=I$, pero una reflexion cambia orientacion y una rotacion propia no.

## Cierre

La doble simetria es la forma mas simple de simetria discreta no trivial. Su estudio introduce la idea de orden de un elemento, espectro de operadores de simetria y descomposicion en sectores pares e impares.
