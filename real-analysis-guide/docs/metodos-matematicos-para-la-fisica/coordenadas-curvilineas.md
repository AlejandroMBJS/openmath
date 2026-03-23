---
title: Coordenadas Curvilineas
description: Coordenadas no cartesianas, bases locales y factores de escala en espacios euclideos.
---

# Coordenadas Curvilineas

## Idea general

Las coordenadas curvilíneas reemplazan las líneas rectas coordenadas por familias de curvas o superficies coordenadas. Son especialmente útiles cuando el problema posee simetrías no cartesianas.

## Mapa coordenado

Un sistema curvilíneo en una región de $\mathbb{R}^3$ es una aplicación localmente invertible

$$
(q^1,q^2,q^3)\mapsto x(q^1,q^2,q^3).
$$

La invertibilidad local se garantiza cuando el jacobiano no se anula.

## Base coordenada

A cada coordenada se asocian vectores base locales

$$
\frac{\partial x}{\partial q^i}.
$$

A diferencia del caso cartesiano, en general:

- dependen del punto;
- no tienen norma uno;
- no son ortogonales necesariamente.

## Factores de escala

En coordenadas ortogonales se escriben factores de escala

$$
h_i=\left\|\frac{\partial x}{\partial q^i}\right\|.
$$

Entonces la métrica euclidea adopta la forma

$$
ds^2=h_1^2(dq^1)^2+h_2^2(dq^2)^2+h_3^2(dq^3)^2.
$$

## Ejemplos

### Polares planas

$$
x=r\cos\theta,\qquad y=r\sin\theta.
$$

La métrica es

$$
ds^2=dr^2+r^2d\theta^2.
$$

### Cilíndricas

$$
x=r\cos\theta,\ y=r\sin\theta,\ z=z,
$$

con

$$
ds^2=dr^2+r^2d\theta^2+dz^2.
$$

### Esféricas

Las coordenadas esféricas convierten la simetría radial en estructura algebraica manejable para Laplace, Poisson, Helmholtz y Schrödinger central.

## Operadores diferenciales

Gradiente, divergencia y laplaciano cambian de forma al pasar a coordenadas curvilíneas. Los factores de escala aparecen naturalmente en sus expresiones y son responsables del peso geométrico del sistema coordenado.

## Cierre

Las coordenadas curvilíneas no cambian el espacio, pero sí la forma local de las fórmulas. Son el lenguaje correcto cuando la simetría del problema no está alineada con los ejes cartesianos.
