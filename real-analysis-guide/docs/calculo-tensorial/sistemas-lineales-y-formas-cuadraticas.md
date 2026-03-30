---
title: Sistemas lineales y formas cuadraticas
description: Representacion tensorial de sistemas lineales, formas cuadraticas, matrices y soluciones.
---

# Sistemas lineales y formas cuadraticas

## Motivacion e intuicion

Los sistemas de ecuaciones lineales y las formas cuadraticas son objetos fundamentales que se expresan elegantemente en notacion tensorial. Una matriz es un tensor de tipo (1,1), y una forma cuadratica es un tensor de tipo (0,2) o (2,0).

## Sistemas lineales en notacion tensorial

### Forma general

$$A^i_{\ j} x^j = b^i$$

donde:
- $A^i_{\ j}$ es la matriz de coeficientes (tensor 1,1)
- $x^j$ es el vector desconocido (tensor contravariante)
- $b^i$ es el vector de terminos independientes (tensor contravariante)

### Ejemplo en componentes

$$\begin{cases} a_{11}x_1 + a_{12}x_2 = b_1 \\ a_{21}x_1 + a_{22}x_2 = b_2 \end{cases}$$

Se escribe como: $A^i_{\ j} x^j = b^i$

## Formas cuadraticas

### Definicion

Una forma cuadratica es una expresion:

$$Q(x) = A_{ij} x^i x^j = A_{ij} x^i x^j$$

donde $A_{ij}$ es un tensor simetrico ($A_{ij} = A_{ji}$).

### Representacion matricial

$$Q(x) = \mathbf{x}^T A \mathbf{x}$$

## Solucion de sistemas lineales

### Regla de Cramer en notacion tensorial

$$x^i = \frac{\varepsilon^{i j_1 \ldots j_n} A_{j_1 k_1} \cdots A_{j_n k_n} b^{k_n}}{\varepsilon^{l_1 \ldots l_n} A_{l_1 m_1} \cdots A_{l_n m_n}}$$

### Inversa

$$x = A^{-1} b \quad \Leftrightarrow \quad x^i = (A^{-1})^i_{\ j} b^j$$

### Determinante

$$\det(A) = \varepsilon_{i_1 \ldots i_n} A^{i_1}_{\ 1} \cdots A^{i_n}_{\ n}$$

## Propiedades de formas quadraticas

### Matriz simetrica

Toda forma cuadratica puede representarse con matriz simetrica:

$$A_{ij}^{sym} = \frac{1}{2}(A_{ij} + A_{ji})$$

### Valores propios

Los valores propios $\lambda$ satisfy:

$$(A - \lambda I)\mathbf{v} = 0$$

### Diagonalizacion

Existe una base ortogonal que diagonaliza $A$:

$$A = Q \Lambda Q^T$$

donde $\Lambda$ es diagonal.

## Clasificacion

### Definida positiva

$$Q(x) > 0 \quad \forall x \neq 0$$

Equivalente a todos los valores propios positivos.

### Semidefinida positiva

$$Q(x) \geq 0 \quad \forall x$$

### Definida negativa

$$Q(x) < 0 \quad \forall x \neq 0$$

### Indefinida

$Toma valores positivos y negativos$.

## Ejercicios

### Ejercicio 1

Exprese el sistema $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 5 \\ 6 \end{pmatrix}$ en notacion tensorial.

### Ejercicio 2

Calcule la forma cuadratica $Q(x,y) = x^2 + xy + y^2$.

### Ejercicio 3

Exprese la condicion de definida positiva.

### Ejercicio 4

Calcule los valores propios de $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$.

### Ejercicio 5

Exprese la matriz en terminos de tensor simetrico.

### Ejercicio 6

Calcule la inversa de $A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$.

### Ejercicio 7

Exprese el determinante en notacion de Levi-Civita.

### Ejercicio 8

Calcule $Q(x)$ para $x = (1, 1)$ con $A = I$.

### Ejercicio 9

Exprese la condicion de que $A$ sea simetrico.

### Ejercicio 10

Calcule la solucion de $x + y = 1$, $x - y = 0$.

### Ejercicio 11

Exprese el criterio de Sylvester.

### Ejercicio 12

Calcule el rango de la forma cuadratica.

### Ejercicio 13

Exprese la formula de Rayleigh.

### Ejercicio 14

Calcule la signatura de $A = \text{diag}(1, -1)$.

### Ejercicio 15

Exprese la descomposicion en bloques.

## Soluciones

### Solucion 1

$A^i_{\ j} x^j = b^i$

### Solucion 2

$A = \begin{pmatrix} 1 & 1/2 \\ 1/2 & 1 \end{pmatrix}$, $Q(x,y) = x^2 + xy + y^2$

### Solucion 3

Todos los menores principales positivos.

### Solucion 4

$\lambda = 1, 3$

### Solucion 5

$A_{ij} = A_{ji}$ (simetrico)

### Solucion 6

$A^{-1} = I$

### Solucion 7

$\det(A) = \varepsilon_{ij} A^i_1 A^j_2$

### Solucion 8

$Q(1,1) = 1^2 + 1^2 = 2$

### Solucion 9

$A_{ij} = A_{ji}$

### Solucion 10

$x = 1/2$, $y = 1/2$

### Solucion 11

$A$ es definida positiva si y solo si todos los determinantes de menores principales son positivos.

### Solucion 12

Numero de valores propios no nulos.

### Solucion 13

$\lambda_{min} \leq \frac{x^T A x}{x^T x} \leq \lambda_{max}$

### Solucion 14

Un valor propio positivo, uno negativo: signatura (1,1).

### Solucion 15

$A = \begin{pmatrix} A_{11} & A_{12} \\ A_{21} & A_{22} \end{pmatrix}$ con bloques.
