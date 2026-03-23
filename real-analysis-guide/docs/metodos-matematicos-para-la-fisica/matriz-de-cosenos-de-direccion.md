---
title: Matriz de Cosenos de Direccion
description: Matriz de cambio entre bases ortonormales y su interpretacion como matriz de rotacion.
---

# Matriz de Cosenos de Direccion

## Dos bases ortonormales

Sean

$$
\{e_1,e_2,e_3\},
\qquad
\{e'_1,e'_2,e'_3\}
$$

dos bases ortonormales. La matriz de cosenos de dirección se define por

$$
A_{ij}=e'_i\cdot e_j.
$$

## Interpretacion

La entrada $A_{ij}$ es el coseno del ángulo entre el eje nuevo $e'_i$ y el eje viejo $e_j$. Por eso la matriz codifica completamente la orientación relativa entre ambas bases.

## Cambio de componentes

Si un vector $v$ tiene componentes $x$ en la base vieja y $x'$ en la nueva, entonces

$$
x'=Ax.
$$

## Ortogonalidad

Como ambas bases son ortonormales, la matriz satisface

$$
A^TA=I.
$$

Es decir, $A$ es una matriz ortogonal. Si además preserva orientación, entonces

$$
\det A=1
$$

y $A\in SO(3)$.

## Significado físico

Esta matriz es el objeto correcto para describir la rotación de sistemas de referencia rígidos, tanto en mecánica clásica como en teoría de grupos y física cuántica elemental.

## Cierre

La matriz de cosenos de dirección es la versión lineal organizada de los cosenos entre ejes. Permite pasar de una base ortonormal a otra y aparece naturalmente como matriz de rotación real.
