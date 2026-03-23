---
title: Vectores Diferenciales
description: Desplazamientos infinitesimales, bases locales y elementos lineales en coordenadas generales.
---

# Vectores Diferenciales

## Desplazamiento infinitesimal

En coordenadas generales, un desplazamiento infinitesimal se escribe como

$$
dx=\sum_i \frac{\partial x}{\partial q^i}\,dq^i.
$$

Este vector diferencial codifica la geometría local del cambio de coordenadas.

## Base local

Los vectores

$$
e_i=\frac{\partial x}{\partial q^i}
$$

forman la base coordenada local. Entonces

$$
dx=e_i\,dq^i.
$$

## Elemento de longitud

El cuadrado de la longitud infinitesimal es

$$
ds^2=dx\cdot dx=g_{ij}\,dq^i dq^j,
$$

donde

$$
g_{ij}=e_i\cdot e_j
$$

es la métrica inducida.

## Caso ortogonal

Si las coordenadas son ortogonales, la métrica se diagonaliza y

$$
ds^2=\sum_i h_i^2(dq^i)^2.
$$

Esto simplifica el cálculo de gradientes, integrales y operadores diferenciales.

## Interpretacion física

Los vectores diferenciales son el punto donde geometría y cálculo se tocan. Permiten pasar de coordenadas abstractas a magnitudes físicas medibles: longitudes, áreas, volúmenes y trabajo infinitesimal.

## Cierre

El vector diferencial es la forma lineal local del cambio de coordenadas. Contiene ya la métrica y prepara la aparición de elementos diferenciales de línea, área y volumen.
