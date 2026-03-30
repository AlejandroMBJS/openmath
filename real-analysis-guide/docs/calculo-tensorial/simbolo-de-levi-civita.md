---
title: Simbolo de Levi-Civita
description: Tensor de Levi-Civita, producto cruz, determinante y aplicaciones en algebra tensorial.
---

# Simbolo de Levi-Civita

## Motivacion e intuicion

El simbolo de Levi-Civita $\varepsilon_{i_1 \ldots i_n}$ es un tensor totalmente antisimetrico que generaliza el concepto de "orientacion" del espacio. Es fundamental para expresar el producto vectorial, el determinante, y muchas cantidades fisicas como el campo magnetico.

En 3 dimensiones, $\varepsilon_{ijk}$ toma valores $+1$, $-1$ o $0$ dependiendo de si $(i,j,k)$ es una permutacion par, impar, o tieneindices repetidos.

## Definicion formal

### En 3 dimensiones

$$\varepsilon_{ijk} = \begin{cases}
+1 & \text{si } (i,j,k) \text{ es permutacion par de } (1,2,3) \\
-1 & \text{si } (i,j,k) \text{ es permutacion impar de } (1,2,3) \\
0 & \text{si hay indices repetidos}
\end{cases}$$

### Propiedades fundamentales

1. **Antisimetria total**: $\varepsilon_{ijk} = -\varepsilon_{jik} = -\varepsilon_{ikj} = -\varepsilon_{kji}$

2. **Relacion con el determinante**:
$$\varepsilon_{ijk} \varepsilon_{ijk} = 3! = 6$$
$$\varepsilon_{ijk} \varepsilon_{ijm} = 2\delta_{km}$$
$$\varepsilon_{ijk} \varepsilon_{imn} = \delta_j^m \delta_k^n - \delta_j^n \delta_k^m$$

## En diferentes dimensiones

### En 2D

$$\varepsilon_{ij} = \begin{cases} +1 & (i,j) = (1,2) \\ -1 & (i,j) = (2,1) \\ 0 & \text{si } i=j \end{cases}$$

### En 4D

$\varepsilon_{\mu\nu\rho\sigma}$ tiene 24 componentes no nulas con valores $\pm 1$.

## Aplicaciones

### Producto vectorial

$$(\mathbf{a} \times \mathbf{b})_i = \varepsilon_{ijk} a_j b_k$$

En componentes:
$$(\mathbf{a} \times \mathbf{b})_1 = a_2 b_3 - a_3 b_2$$
$$(\mathbf{a} \times \mathbf{b})_2 = a_3 b_1 - a_1 b_3$$
$$(\mathbf{a} \times \mathbf{b})_3 = a_1 b_2 - a_2 b_1$$

### Determinante

$$\det(A) = \varepsilon_{i_1 \ldots i_n} A_{1 i_1} \cdots A_{n i_n}$$

### Rotacional

$$(\nabla \times \mathbf{F})_i = \varepsilon_{ijk} \partial_j F_k$$

### Dual de un tensor antisimetrico

En 3D, el dual de $B_{ij}$ es:
$$B^*_i = \frac{1}{2}\varepsilon_{ijk} B_{jk}$$

## Relación con la metrica

En espacios curved, necesitamos la densidad tensorial:

$$\varepsilon_{i_1 \ldots i_n} = \sqrt{\det(g)} \tilde{\varepsilon}_{i_1 \ldots i_n}$$

donde $\tilde{\varepsilon}$ es el simbolo constante.

## Errores comunes

1. **Confundir con tensor**: Es una densidad tensorial, no un tensor verdadero en espacios curvos.

2. **Indices repetidos**: $\varepsilon_{ijk} \varepsilon_{ijk}$ es valido, pero $\varepsilon_{iii}$ siempre es cero.

3. **No usar la metrica**: En calculos, a menudo necesitamos $\varepsilon^{ijk} = g^{ip} g^{jq} g^{kr} \varepsilon_{pqr}$.

## Ejercicios

### Ejercicio 1

Calcule $\varepsilon_{123}$, $\varepsilon_{132}$, $\varepsilon_{113}$.

### Ejercicio 2

Exprese el producto vectorial usando epsilon.

### Ejercicio 3

Calcule $\varepsilon_{ijk} \varepsilon_{ijk}$.

### Ejercicio 4

Exprese el determinante de una matriz $3 \times 3$.

### Ejercicio 5

Calcule $\varepsilon_{ijk} \varepsilon_{ijm}$.

### Ejercicio 6

Exprese el rotacional de un campo vectorial.

### Ejercicio 7

Calcule el dual del tensor antisimetrico $B_{ij}$.

### Ejercicio 8

Exprese el triple producto escalar $a \cdot (b \times c)$.

### Ejercicio 9

Calcule $\varepsilon_{ijk} \varepsilon_{imn}$.

### Ejercicio 10

Exprese la condicion de que un tensor sea dual de algo.

### Ejercicio 11

En 4D, calcule $\varepsilon_{0123}$.

### Ejercicio 12

Exprese el determinante de $4 \times 4$ usando epsilon.

### Ejercicio 13

Calcule la divergencia del rotacional.

### Ejercicio 14

Exprese la identidad de Jacobi para el producto cruz.

### Ejercicio 15

Calcule $\varepsilon^{ijk} \varepsilon_{ijk}$ en terminos de la metrica.

## Soluciones

### Solucion 1

$\varepsilon_{123} = +1$, $\varepsilon_{132} = -1$ (impar), $\varepsilon_{113} = 0$ (indices repetidos).

### Solucion 2

$(a \times b)_i = \varepsilon_{ijk} a_j b_k$

### Solucion 3

$\varepsilon_{ijk} \varepsilon_{ijk} = 3! = 6$ (suma sobre indices repetidos tres veces)

### Solucion 4

$\det(A) = \varepsilon_{ijk} A_{1i} A_{2j} A_{3k}$

### Solucion 5

$\varepsilon_{ijk} \varepsilon_{ijm} = 2\delta_{km}$

### Solucion 6

$(\nabla \times F)_i = \varepsilon_{ijk} \partial_j F_k$

### Solucion 7

$B^*_i = \frac{1}{2}\varepsilon_{ijk} B_{jk}$

### Solucion 8

$a \cdot (b \times c) = \varepsilon_{ijk} a_i b_j c_k$

### Solucion 9

$\varepsilon_{ijk} \varepsilon_{imn} = \delta_j^m \delta_k^n - \delta_j^n \delta_k^m$

### Solucion 10

$F_{ij} = \varepsilon_{ijk} G^k$ para alguna 1-forma $G$

### Solucion 11

$\varepsilon_{0123} = +1$

### Solucion 12

$\det(A) = \varepsilon_{\mu\nu\rho\sigma} A_{1\mu} A_{2\nu} A_{3\rho} A_{4\sigma}$

### Solucion 13

$\nabla \cdot (\nabla \times F) = 0$

### Solucion 14

$a \times (b \times c) + b \times (c \times a) + c \times (a \times b) = 0$

### Solucion 15

$\varepsilon^{ijk} \varepsilon_{ijk} = g^{ip}g^{jq}g^{kr}\varepsilon_{pqr}\varepsilon_{ijk}$. En espacio plano: 6.
