---
title: Tensores de orden superior
description: Tensores de tipo (r,s), transformacion, simetrias y operaciones con tensores de orden superior.
---

# Tensores de orden superior

## Motivacion e intuicion

Los tensores de orden superior generalizan los vectores y 1-formas. Un tensor de rango $(r, s)$ tiene $r$ indices contravariantes (arriba) y $s$ indices covariantes (abajo).

Ejemplos:
- Matrices: tensores de tipo $(1,1)$
- Tensores de esfuerzo en mecanica: tipo $(2,0)$
- Tensor de Riemann: tipo $(1,3)$ o $(0,4)$

## Definicion formal

Un tensor $T^{i_1 \ldots i_r}_{j_1 \ldots j_s}$ de tipo $(r, s)$ transforma como:

$$T'^{i_1 \ldots i_r}_{j_1 \ldots j_s} = \frac{\partial x'^{i_1}}{\partial x^{k_1}} \cdots \frac{\partial x'^{i_r}}{\partial x^{k_r}} \frac{\partial x^{l_1}}{\partial x'^{j_1}} \cdots \frac{\partial x^{l_s}}{\partial x'^{j_s}} T^{k_1 \ldots k_r}_{l_1 \ldots l_s}$$

## Tipos de tensores comunes

### Tipo $(2, 0)$ - Bilineal covariantes

Ejemplo: tensor de inercia $I^{ij}$

### Tipo $(0, 2)$ - Bilineales contravariantes

Ejemplo: metrica $g_{ij}$

### Tipo $(1, 1)$ - Transformaciones lineales

Ejemplo: matrices $A^i_j$

### Tipo $(2, 1)$ - Operadores

Ejemplo: conexion de Christoffel $\Gamma^i_{jk}$

### Tipo $(1, 3)$ - Curvatura

Tensor de Riemann $R^i_{\ jkl}$

## Ejemplos detallados

### Ejemplo 1: Tensor de esfuerzos de Cauchy

$$\sigma^{ij}$$

Es un tensor simetrico de segundo orden, tipo $(2,0)$.

### Ejemplo 2: Tensor electromagnetico de Faraday

$$F_{\mu\nu} = \begin{pmatrix} 0 & -E_x/c & -E_y/c & -E_z/c \\ E_x/c & 0 & -B_z & B_y \\ E_y/c & B_z & 0 & -B_x \\ E_z/c & -B_y & B_x & 0 \end{pmatrix}$$

Tipo $(0,2)$, antisimetrico.

### Ejemplo 3: Tensor de Riemann

$$R^i_{\ jkl}$$

Tipo $(1,3)$, mide la curvatura del espacio.

### Ejemplo 4: Tensor de Levi-Civita

$$\varepsilon_{i_1 \ldots i_n}$$

Tipo $(0, n)$, totalmente antisimetrico.

## Operaciones con tensores

### Producto tensorial

$$(S \otimes T)^{i_1 \ldots i_r i'_1 \ldots i'_{r'}}_{j_1 \ldots j_s j'_1 \ldots j'_{s'}} = S^{i_1 \ldots i_r}_{j_1 \ldots j_s} T^{i'_1 \ldots i'_{r'}}_{j'_1 \ldots j'_{s'}}$$

### Contraccion

Igualar un indice superior con uno inferior y sumar:

$$S^{i_1 \ldots i_r}_{j_1 \ldots j_s} \rightarrow S^{i_1 \ldots i_{r-1}}_{j_1 \ldots j_{s-1}}$$

cuando $i_r = j_s$.

### Simetrizacion

$$T_{(i_1 i_2)} = \frac{1}{2}(T_{i_1 i_2} + T_{i_2 i_1})$$

### Antisimetrizacion

$$T_{[i_1 i_2]} = \frac{1}{2}(T_{i_1 i_2} - T_{i_2 i_1})$$

## Simetrias

### Simetrico

$$T_{ij} = T_{ji}$$

### Antisimetrico

$$T_{ij} = -T_{ji}$$

### Indecomposicion

Todo tensor puede descomponerse en parte simetrica + antisimetrica:

$$T_{ij} = T_{(ij)} + T_{[ij]}$$

## Errores comunes

1. **Confundir el tipo**: Un tensor $(2,0)$ no puede sumarse directamente con uno $(1,1)$.

2. **Olvidar la transformacion**: Las componentes cambian, pero el objeto geometrico no.

3. **No contral los indices**: En $A^i_j B^j_k$, se contrae el indice $j$.

## Ejercicios

### Ejercicio 1

Clasifique los siguientes tensores por su tipo: $g_{ij}$, $\delta^i_j$, $R^i_{\ jkl}$, $\varepsilon_{ijk}$.

### Ejercicio 2

Exprese el producto de matrices como producto tensorial contraido.

### Ejercicio 3

Calcule la traza de un tensor tipo $(1,1)$.

### Ejercicio 4

Descomponga $T_{ij} = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ en partes simetrica y antisimetrica.

### Ejercicio 5

Cuantas componentes independientes tiene un tensor simetrico $S_{ij}$ en 3D?

### Ejercicio 6

Cuantas componentes independientes tiene un tensor antisimetrico $A_{ij}$ en 3D?

### Ejercicio 7

Exprese el tensor de esfuerzos $\sigma^{ij}$ y su traza.

### Ejercicio 8

Calcule $R^i_{\ i}$ (primera contraction del tensor de Riemann).

### Ejercicio 9

Escriba el tensor de Faraday $F_{\mu\nu}$ usando la delta y epsilon.

### Ejercicio 10

Que es el tensor de Ricci y de que tipo es?

### Ejercicio 11

Exprese la condicion de que un tensor $T_{ij}$ sea de tipo $(0,2)$ simetrico.

### Ejercicio 12

Calcule el numero de componentes de $T_{ijk}$ totalmente antisimetrico en 4D.

### Ejercicio 13

Escriba la descomposicion polar de un tensor.

### Ejercicio 14

Exprese el tensor de deformacion $\varepsilon_{ij}$ en terminos del gradiente de desplazamiento.

### Ejercicio 15

Calcule la contracted del producto de la metrica con un vector.

## Soluciones

### Solucion 1

- $g_{ij}$: tipo $(0,2)$
- $\delta^i_j$: tipo $(1,1)$
- $R^i_{\ jkl}$: tipo $(1,3)$
- $\varepsilon_{ijk}$: tipo $(0,3)$

### Solucion 2

$(AB)^i_k = A^i_j B^j_k$

### Solucion 3

$T^i_i$ (traza, suma sobre indices iguales)

### Solucion 4

$S_{ij} = \begin{pmatrix} 1 & 2.5 \\ 2.5 & 4 \end{pmatrix}$, $A_{ij} = \begin{pmatrix} 0 & -0.5 \\ 0.5 & 0 \end{pmatrix}$

### Solucion 5

$n(n+1)/2 = 3 \cdot 4 / 2 = 6$ componentes

### Solucion 6

$n(n-1)/2 = 3 \cdot 2 / 2 = 3$ componentes

### Solucion 7

$\sigma^{ij}$ tiene 9 componentes en 3D. La traza es $\sigma^k_k$.

### Solucion 8

$R^i_{\ i} = 0$ por las propiedades de simetria del Riemann.

### Solucion 9

$F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$

### Solucion 10

$R_{ij} = R^k_{\ ikj}$, tipo $(0,2)$

### Solucion 11

$T_{ij} = T_{ji}$

### Solucion 12

$\binom{4}{3} = 4$ componentes

### Solucion 13

$T = R S Q^T$ donde $R, Q$ son ortogonales y $S$ simetrico.

### Solucion 14

$\varepsilon_{ij} = \frac{1}{2}(\partial_i u_j + \partial_j u_i)$

### Solucion 15

$g_{ij} v^j = v_i$ (bajar el indice)
