---
title: Algebra lineal en notacion tensorial
description: Tensores de tipo (r,s), operaciones basicas y calculo tensorial elemental.
---

# Algebra lineal en notacion tensorial

## Motivacion e intuicion

El algebra lineal puede expresarse elegantemente usando notacion tensorial. Esta perspectiva no solo simplifica la escritura, sino que revela la naturaleza geometrica de conceptos como vectores, matrices y transformaciones lineales.

Un vector no es solo una lista de numeros: es un tensor de rango 1 con componentes que transforman de cierta manera bajo cambios de coordenadas.

## Tipos tensoriales fundamentales

### Tensor de tipo (0,0): Escalar

Un escalar $\phi$ es invariante bajo transformaciones de coordenadas:

$$\phi' = \phi$$

### Tensor de tipo (1,0): Vector contravariante

Un vector contravariante $v^i$ transforma como:

$$v'^i = \frac{\partial x'^i}{\partial x^j} v^j$$

### Tensor de tipo (0,1): Vector covariante

Un vector covariante $w_i$ transforma como:

$$w'_i = \frac{\partial x^j}{\partial x'^i} w_j$$

### Tensor de tipo (1,1): Mixed

$$T'^i_{\ j} = \frac{\partial x'^i}{\partial x^k} \frac{\partial x^l}{\partial x'^j} T^k_{\ l}$$

## Representacion de objetos familiares

### Vector columna

$$v = \begin{pmatrix} v^1 \\ v^2 \\ v^3 \end{pmatrix} \quad \text{componentes } v^i$$

### Vector fila (covariante)

$$w = (w_1, w_2, w_3) \quad \text{componentes } w_i$$

### Matriz (tensor de tipo (1,1))

$$A = (A^i_{\ j})$$

La componente $A^i_{\ j}$ esta en la fila $i$, columna $j$.

### Producto de matriz-vector

$$(Av)^i = A^i_{\ j} v^j$$

### Producto de matrices

$$(AB)^i_{\ k} = A^i_{\ j} B^j_{\ k}$$

## Operaciones tensoriales

### Producto tensorial

$$(v \otimes w)^{ij} = v^i w^j$$

### Contraccion de indices

$$A^i_{\ i} = \text{tr}(A)$$

### Simetrizacion

$$T_{(ij)} = \frac{1}{2}(T_{ij} + T_{ji})$$

### Antisimetrizacion

$$T_{[ij]} = \frac{1}{2}(T_{ij} - T_{ji})$$

## Ejemplos concretos

### Ejemplo 1: Sistema de ecuaciones lineales

$$\begin{cases} a_{11} x^1 + a_{12} x^2 = b^1 \\ a_{21} x^1 + a_{22} x^2 = b^2 \end{cases}$$

En notacion tensorial:

$$a^i_{\ j} x^j = b^i$$

### Ejemplo 2: Autovalores y autovectores

$$v^i = \lambda v^i \quad \Leftrightarrow \quad A^i_{\ j} v^j = \lambda v^i$$

### Ejemplo 3: Cambio de base

$$v'^i = \Lambda^i_{\ j} v^j$$

donde $\Lambda$ es la matriz de cambio de base.

## Errores comunes

1. **Confundir coordenadas covariantes con contravariantes**: Los subindices suben, los supraindices bajan (usando la metrica).

2. **No hacer la suma**: $A^i_{\ j} v^j$ es una suma sobre $j$.

3. **Mezclar el orden de los indices**: $A^i_{\ j}$ no es lo mismo que $A_j^{\ i}$.

## Ejercicios

### Ejercicio 1

Exprese el producto punto $\mathbf{a} \cdot \mathbf{b}$ en notacion tensorial.

### Ejercicio 2

Escriba la matriz $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ como tensor $A^i_{\ j}$.

### Ejercicio 3

Calcule $(Av)^i$ cuando $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ y $v = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

### Ejercicio 4

Exprese la condicion de ortogonalidad $A^T A = I$ usando indices.

### Ejercicio 5

Escriba la formula para la inversa de una matriz $A^{ij}$ usando la adjunta clasica.

### Ejercicio 6

Exprese el determinante de una matriz $2 \times 2$ usando la delta y epsilon.

### Ejercicio 7

Escriba la regla de Cramer en notacion tensorial.

### Ejercicio 8

Demuestre que $(AB)^i_{\ k} = A^i_{\ j} B^j_{\ k}$.

### Ejercicio 9

Exprese la traza de una matriz $A^i_{\ j}$.

### Ejercicio 10

Calcule $A^i_{\ i}$ para la matriz del Ejercicio 2.

### Ejercicio 11

Escriba la matriz identidad $I^i_{\ j}$ usando la delta.

### Ejercicio 12

Exprese la transposicion $A^T$ en notacion tensorial.

### Ejercicio 13

Calcule $(A^T)^i_{\ j}$ para la matriz del Ejercicio 2.

### Ejercicio 14

Exprese que una matriz es simetrica: $A = A^T$.

### Ejercicio 15

Exprese que una matriz es antisimetrica: $A = -A^T$.

## Soluciones

### Solucion 1

$\mathbf{a} \cdot \mathbf{b} = a_i b^i = \delta_{ij} a^i b^j = a^i b_i$

### Solucion 2

$A^1_{\ 1} = 1$, $A^1_{\ 2} = 2$, $A^2_{\ 1} = 3$, $A^2_{\ 2} = 4$

### Solucion 3

$(Av)^1 = 1 \cdot 1 + 2 \cdot 1 = 3$
$(Av)^2 = 3 \cdot 1 + 4 \cdot 1 = 7$

### Solucion 4

$\delta_{ik} A^j_{\ l} A^l_{\ j} = \delta_{jk}$ o mas comunmente: $A_{ij} = A_{ji}$

### Solucion 5

$(A^{-1})^{ij} = \frac{1}{\det(A)} \varepsilon^{jik} \varepsilon^{jlm} A_{kl}$ (usando cofactores)

### Solucion 6

$\det(A) = \varepsilon_{ij} \varepsilon^{kl} A^i_{\ k} A^j_{\ l}$ o en 2D: $= A^i_{\ i} A^j_{\ j} - A^i_{\ j} A^j_{\ i}$

### Solucion 7

$x^i = \frac{\det(A_{(i)})}{\det(A)}$ donde $A_{(i)}$ es la matriz con la columna $i$ reemplazada por $b$.

### Solucion 8

Por definicion de multiplicacion de matrices, cada componente es la suma sobre el indice interno.

### Solucion 9

$A^i_{\ i}$ (suma sobre $i$)

### Solucion 10

$A^i_{\ i} = 1 + 4 = 5$

### Solucion 11

$I^i_{\ j} = \delta^i_j$

### Solucion 12

$(A^T)_{ij} = A_{ji}$ o $(A^T)^i_{\ j} = A_j^{\ i}$

### Solucion 13

$(A^T)^1_{\ 1} = 1$, $(A^T)^1_{\ 2} = 3$, $(A^T)^2_{\ 1} = 2$, $(A^T)^2_{\ 2} = 4$

### Solucion 14

$A_{ij} = A_{ji}$ o $A^i_{\ j} = A_j^{\ i}$

### Solucion 15

$A_{ij} = -A_{ji}$
