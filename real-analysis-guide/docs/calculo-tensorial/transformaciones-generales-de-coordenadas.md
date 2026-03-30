---
title: Transformaciones generales de coordenadas
description: Transformaciones de coordenadas, matrices jacobianas, cambio de base y aplicaciones.
---

# Transformaciones generales de coordenadas

## Motivacion e intuicion

Cuando trabajamos con tensores, las transformaciones de coordenadas son esenciales. Una transformacion de coordenadas es un diffeomorfismo que relaciona dos sistemas de coordenadas.

## Definicion

Una transformacion de coordenadas es una aplicacion diferenciable invertible:

$$x'^i = x'^i(x^1, \ldots, x^n)$$

con Jacobiano no nulo:

$$J = \det\left(\frac{\partial x'^i}{\partial x^j}\right) \neq 0$$

## Jacobiano

### Definicion

$$J^i_{\ j} = \frac{\partial x'^i}{\partial x^j}$$

### Jacobiano inverso

$$\bar{J}^i_{\ j} = \frac{\partial x^i}{\partial x'^j}$$

satisfacen:

$$J^i_{\ k} \bar{J}^k_{\ j} = \delta^i_j$$

## Transformacion de vectores

### Contravariante

$$v'^i = J^i_{\ j} v^j$$

### Covariante

$$w'_i = \bar{J}^j_{\ i} w_j$$

## Transformacion de tensores

Un tensor de tipo $(r, s)$ transforma como:

$$T'^{i_1 \ldots i_r}_{j_1 \ldots j_s} = J^{i_1}_{k_1} \cdots J^{i_r}_{k_r} \bar{J}^{l_1}_{j_1} \cdots \bar{J}^{l_s}_{j_s} T^{k_1 \ldots k_r}_{l_1 \ldots l_s}$$

## Ejemplos de transformaciones

### Cartesiano a polar

$$x = r\cos\theta, \quad y = r\sin\theta$$

$$J = \begin{pmatrix} \cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta \end{pmatrix}$$

### Cartesiano a esferico

$$x = r\sin\theta\cos\phi, \quad y = r\sin\theta\sin\phi, \quad z = r\cos\theta$$

## Transformacion de la metrica

$$g'_{ij} = \bar{J}^k_{\ i} \bar{J}^l_{\ j} g_{kl}$$

## Determinante de la transformacion

$$\det(g') = \det(J)^{-2} \det(g)$$

## Ejercicios

### Ejercicio 1

Calcule el Jacobiano de $x' = 2x$.

### Ejercicio 2

Exprese la transformacion de un vector contravariante.

### Ejercicio 3

Calcule $J\bar{J}$ para la transformacion identidad.

### Ejercicio 4

Transforme $v = (1, 0)$ de cartesianas a polares.

### Ejercicio 5

Exprese la transformacion de $g_{ij}$.

### Ejercicio 6

Calcule el Jacobiano de rotacion por angulo $\theta$.

### Ejercicio 7

Exprese la transformacion de un tensor (1,1).

### Ejercicio 8

Calcule la inversa de una transformacion.

### Ejercicio 9

Exprese la condicion de que la transformacion sea propia.

### Ejercicio 10

Calcule $\det(J)$ para transformacion a polares.

## Soluciones

### Solucion 1

$J = 2$

### Solucion 2

$v'^i = \frac{\partial x'^i}{\partial x^j} v^j$

### Solucion 3

$J\bar{J} = I$

### Solucion 4

$v'^r = \cos\theta$, $v'^\theta = -\sin\theta/r$

### Solucion 5

$g'_{ij} = \frac{\partial x^k}{\partial x'^i} \frac{\partial x^l}{\partial x'^j} g_{kl}$

### Solucion 6

$J = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$

### Solucion 7

$T'^i_{\ j} = J^i_{\ k} \bar{J}^l_{\ j} T^k_{\ l}$

### Solucion 8

$(J^{-1})^i_{\ j} = \bar{J}^i_{\ j}$

### Solucion 9

$\det(J) > 0$ para propia, $< 0$ para impropia.

### Solucion 10

$\det(J) = r$
