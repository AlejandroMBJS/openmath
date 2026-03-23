---
title: Matrices de Pauli y Dirac
description: Matrices generadoras de simetrias de espin y estructura algebraica basica en fisica matematica.
---

# Matrices de Pauli y Dirac

## Matrices de Pauli

Las matrices de Pauli son

$$
\sigma_1=
\begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix},
\qquad
\sigma_2=
\begin{pmatrix}
0 & -i \\
i & 0
\end{pmatrix},
\qquad
\sigma_3=
\begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}.
$$

## Propiedades

- son hermitianas;
- son unitarias;
- satisfacen

$$
\sigma_i^2=I;
$$

- obedecen relaciones de conmutación y anticonmutación fundamentales.

## Algebra de Pauli

Se cumple

$$
\sigma_i\sigma_j=\delta_{ij}I+i\sum_k \varepsilon_{ijk}\sigma_k.
$$

Esta identidad condensa buena parte del álgebra de espín y de la representación de $SU(2)$.

## Matrices de Dirac

Las matrices de Dirac extienden esta estructura a cuatro dimensiones de espinores y satisfacen relaciones de anticonmutación ligadas a la métrica de Minkowski:

$$
\{\gamma^\mu,\gamma^\nu\}=2\eta^{\mu\nu}I.
$$

## Significado

Las matrices de Dirac linealizan el operador relativista cuadrático y permiten escribir la ecuación de Dirac como sistema lineal de primer orden.

## Relacion estructural

Las matrices de Pauli aparecen embebidas en representaciones estándar de las matrices de Dirac. Por eso conviene entenderlas primero como bloque algebraico elemental.

## Cierre

Las matrices de Pauli y Dirac son objetos algebraicos centrales en física matemática porque convierten simetrías de rotación y estructura relativista en relaciones matriciales explícitas y computables.
