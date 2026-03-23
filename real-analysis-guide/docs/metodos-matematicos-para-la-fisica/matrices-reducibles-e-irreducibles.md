---
title: Matrices Reducibles e Irreducibles
description: Invariancia de subespacios, descomposicion por bloques y significado estructural en representaciones lineales.
---

# Matrices Reducibles e Irreducibles

## Idea estructural

En fisica matematica rara vez interesa una matriz aislada solo como arreglo numerico. Lo importante es si una transformacion lineal, o una familia de ellas, puede descomponerse en sectores independientes. La palabra correcta para eso es reducibilidad.

## Invarianza de subespacios

Sea $V$ un espacio vectorial y $T:V\to V$ una transformacion lineal. Un subespacio $W\subset V$ es invariante si

$$
T(W)\subseteq W.
$$

Si existe un subespacio invariante no trivial

$$
\{0\}\subsetneq W\subsetneq V,
$$

entonces la dinamica lineal no mezcla completamente todas las direcciones del espacio.

## Matriz reducible

Se dice que una matriz $A$ es reducible si existe una base respecto de la cual toma forma triangular por bloques

$$
A\sim
\begin{pmatrix}
B & * \\
0 & C
\end{pmatrix}.
$$

Si ademas el complemento tambien es invariante, puede obtenerse una forma diagonal por bloques

$$
A\sim
\begin{pmatrix}
B & 0 \\
0 & C
\end{pmatrix}.
$$

La irreducibilidad significa justamente que no existe ninguna descomposicion no trivial de este tipo.

## Familias de matrices y representaciones

En aplicaciones fisicas suele estudiarse no una sola matriz sino una familia $\rho(G)\subset \operatorname{GL}(V)$ asociada a una representacion de un grupo. La representacion es reducible si existe un subespacio no trivial $W$ invariante para todas las matrices de la familia:

$$
\rho(g)W\subseteq W\qquad \text{para todo } g\in G.
$$

Esto permite separar el sistema en sectores desacoplados de simetria.

## Ejemplos basicos

### Diagonal y claramente reducible

La matriz

$$
A=
\begin{pmatrix}
2 & 0 \\
0 & 3
\end{pmatrix}
$$

deja invariantes las rectas coordenadas. Por tanto es reducible.

### Jordan superior

$$
J=
\begin{pmatrix}
\lambda & 1 \\
0 & \lambda
\end{pmatrix}
$$

tambien es reducible porque la recta generada por $e_1$ es invariante. Reducible no significa diagonalizable.

### Rotacion plana

La matriz de rotacion real

$$
R_\theta=
\begin{pmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{pmatrix}
$$

para $\theta\notin \pi\mathbb{Z}$ es irreducible sobre $\mathbb{R}$, porque no existe una recta real invariante. Pero sobre $\mathbb{C}$ si es reducible, ya que posee autovectores complejos. La reducibilidad depende del campo escalar.

## Criterios conceptuales

- Si una matriz tiene un autovector real, entonces ya existe un subespacio invariante de dimension uno.
- Toda matriz compleja en dimension finita es reducible en el sentido triangular, porque admite al menos un autovalor.
- La irreducibilidad fuerte aparece sobre todo cuando se exige invariancia simultanea para una familia completa de operadores.

## Conexion con diagonalizacion simultanea

Cuando una familia conmutativa de operadores normales actua sobre un espacio hermitiano finito-dimensional, suele admitirse descomposicion simultanea en subespacios propios comunes. En ese contexto, la reducibilidad expresa la existencia de observables compatibles y sectores desacoplados.

## Lectura fisica

En mecanica cuantica y teoria de grupos, una representacion reducible describe un sistema cuya simetria actua como suma directa de subsectores independientes. Las representaciones irreducibles son los bloques elementales a partir de los cuales se construyen las demas.

## Cierre

Reducibilidad significa descomponibilidad por sectores invariantes. Irreducibilidad significa que la accion lineal no admite una separacion interna no trivial. Esa distincion es central para pasar de algebra lineal elemental a representaciones y simetrias fisicas.
