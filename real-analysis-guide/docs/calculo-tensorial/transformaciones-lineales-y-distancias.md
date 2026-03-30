---
title: Transformaciones lineales y distancias
description: Matrices como tensores, transformaciones lineales, normas matriciales y distancia en espacios de matrices.
---

# Transformaciones lineales y distancias

## Motivacion e intuicion

Las transformaciones lineales entre espacios vectoriales son objetos fundamentales que pueden representarse como tensores de tipo $(1,1)$. Una matriz $A$ define una aplicación lineal $L: \mathbb{R}^n \to \mathbb{R}^m$, y sus componentes $A^i_{\ j}$ codifican completamente esta transformación.

## Matrices como tensores

Una matriz $n \times m$ corresponde a un tensor de tipo $(1,1)$ con un índice en el espacio de salida y uno en el de entrada:

$$A = (A^i_{\ j})$$

donde $i = 1, \ldots, n$ y $j = 1, \ldots, m$.

## Operaciones algebraicas

### Suma

$$(A + B)^i_{\ j} = A^i_{\ j} + B^i_{\ j}$$

### Producto por escalar

$$(\lambda A)^i_{\ j} = \lambda A^i_{\ j}$$

### Producto de matrices

$$(AB)^i_{\ j} = A^i_{\ k} B^k_{\ j}$$

### Potencias

$$A^2 = AA, \quad A^n = A^{n-1}A$$

## Normas matriciales

### Norma de Frobenius

$$\|A\|_F = \sqrt{\sum_{i,j} |A^i_{\ j}|^2} = \sqrt{\text{tr}(A^\dagger A)}$$

### Norma espectral

$$\|A\|_2 = \sqrt{\lambda_{\max}(A^\dagger A)}$$

### Norma $p$

$$\|A\|_p = \sup_{\|x\|_p = 1} \|Ax\|_p$$

## Distancia entre transformaciones

### Distancia de Frobenius

$$d(A, B) = \|A - B\|_F$$

Satisface los axiomas de métrica.

### Distancia espectral

$$d_2(A, B) = \|A - B\|_2$$

## Valores propios y singulares

### Valores propios

Los $\lambda$ que satisfacen $Av = \lambda v$.

### Valores singulares

Las raíces de los valores propios de $A^\dagger A$:

$$\sigma_i = \sqrt{\lambda_i(A^\dagger A)}$$

## Descomposiciones

### Descomposicion en valores propios

$$A = V \Lambda V^{-1}$$

### Descomposicion en valores singulares

$$A = U \Sigma V^\dagger$$

donde $\Sigma$ es diagonal con los valores singulares.

### Descomposicion QR

$$A = QR$$

con $Q$ ortogonal y $R$ triangular superior.

## Ejercicios

### Ejercicio 1

Exprese la matriz identidad $I$ como tensor.

### Ejercicio 2

Calcule $\|A\|_F$ para $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$.

### Ejercicio 3

Calcule el producto $AB$ para $A = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$, $B = \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix}$.

### Ejercicio 4

Exprese la condicion de que $A$ sea ortogonal.

### Ejercicio 5

Calcule los valores propios de $A = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$.

### Ejercicio 6

Exprese la distancia de Frobenius entre $A$ y $B$.

### Ejercicio 7

Calcule la traza de $A$.

### Ejercicio 8

Exprese la condicion de que $A$ sea simetrica.

### Ejercicio 9

Calcule $A^2$ para $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$.

### Ejercicio 10

Exprese el determinante en terminos de valores singulares.

### Ejercicio 11

Calcule la distancia de Frobenius entre $I$ y $A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$.

### Ejercicio 12

Exprese cuando $A$ es definida positiva.

### Ejercicio 13

Calcule los valores singulares de $A = \begin{pmatrix} 3 & 0 \\ 0 & 4 \end{pmatrix}$.

### Ejercicio 14

Exprese la condicion de normal unitary.

### Ejercicio 15

Calcule el numero de condicion de $A$.

## Soluciones

### Solucion 1

$I^i_{\ j} = \delta^i_j$

### Solucion 2

$\|A\|_F = \sqrt{1^2 + 2^2 + 3^2 + 4^2} = \sqrt{30}$

### Solucion 3

$AB = \begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix}$

### Solucion 4

$A^T A = I$ o $A^{-1} = A^T$

### Solucion 5

$\lambda = 0, 2$

### Solucion 6

$d(A, B) = \sqrt{\sum_{i,j}(A^i_{\ j} - B^i_{\ j})^2}$

### Solucion 7

$\text{tr}(A) = A^i_{\ i}$

### Solucion 8

$A = A^T$ o $A_{ij} = A_{ji}$

### Solucion 9

$A^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$

### Solucion 10

$|\det A| = \prod_i \sigma_i$

### Solucion 11

$d(I, I) = 0$

### Solucion 12

$x^T A x > 0$ para todo $x \neq 0$

### Solucion 13

$\sigma_1 = 4$, $\sigma_2 = 3$

### Solucion 14

$U^\dagger U = I$

### Solucion 15

$\kappa(A) = \sigma_{\max}/\sigma_{\min}$
