---
title: Tensores de segundo orden
description: Tensores de rango 2, simetrias, descomposicion y representacion matricial.
---

# Tensores de segundo orden

## Motivacion e intuicion

Los tensores de segundo orden son extensiones naturales de las matrices. Appecen everywhere en física y geometría: el tensor de esfuerzos, el tensor de deformación, la métrica, el tensor de curvatura.

Un tensor de segundo orden $T_{ij}$ puede representarse como una matriz $n \times n$ cuando fijamos una base.

## Tipos de tensores de segundo orden

### Tipo (0,2): Covariante

$$T_{ij}$$

Ejemplos: $g_{ij}$ (métrica), $\varepsilon_{ij}$

### Tipo (2,0): Contravariante

$$T^{ij}$$

Ejemplos: $g^{ij}$ (métrica inversa), $T^{\mu\nu}$ (tensor de energía-momento)

### Tipo (1,1): Mixto

$$T^i_{\ j}$$

Ejemplos: matrices de transformación, $\delta^i_j$

## Propiedades de simetria

### Tensor simetrico

$$T_{ij} = T_{ji}$$

Tiene $n(n+1)/2$ componentes independientes.

### Tensor antisimetrico

$$T_{ij} = -T_{ji}$$

Tiene $n(n-1)/2$ componentes independientes.

### Descomposicion

Todo tensor puede escribirse como:

$$T_{ij} = \frac{1}{2}(T_{ij} + T_{ji}) + \frac{1}{2}(T_{ij} - T_{ji})$$

= parte simetrica + parte antisimetrica.

## Representacion matricial

En una base ortonormal:

$$[T] = \begin{pmatrix}
T_{11} & T_{12} & \cdots & T_{1n} \\
T_{21} & T_{22} & \cdots & T_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
T_{n1} & T_{n2} & \cdots & T_{nn}
\end{pmatrix}$$

## Operaciones

### Traza

$$\text{tr}(T) = T_{ii}$$

Suma de componentes diagonales.

### Determinante

$$\det(T)$$

### Potencias

$$T^2 = T \cdot T, \quad T^n = T^{n-1} \cdot T$$

### Inversa

$$T \cdot T^{-1} = I$$

Solo existe si $\det(T) \neq 0$.

## Valores propios

Los escalares $\lambda$ y vectores $v$ tales que:

$$T \cdot v = \lambda v$$

Para tensores simetricos, todos los valores propios son reales.

## Formas cuadraticas

### Definicion

$$Q(v) = v^T T v = T_{ij} v_i v_j$$

### Definida positiva

$$Q(v) > 0$$ para todo $v \neq 0$.

## Ejemplos en fisica

### Tensor de esfuerzos de Cauchy

Simetrico, tipo (0,2).

### Tensor de deformacion

$$\varepsilon_{ij} = \frac{1}{2}(\partial_i u_j + \partial_j u_i)$$

Simetrico.

### Tensor de velocidad de deformacion

$$D_{ij} = \frac{1}{2}(\partial_i v_j + \partial_j v_i)$$

Simetrico.

### Tensor de vorticidad

$$\omega_{ij} = \frac{1}{2}(\partial_i v_j - \partial_j v_i)$$

Antisimetrico.

## Errores comunes

1. **Confundir simetria**: No todo tensor es simetrico.

2. **Indices**: $T_{ij} \neq T_{ji}$ necesariamente.

3. **Inversa**: No todo tensor tiene inversa.

## Ejercicios

### Ejercicio 1

Cuantas componentes tiene un tensor simetrico en 3D?

### Ejercicio 2

Descompon $T = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ en partes simetrica y antisimetrica.

### Ejercicio 3

Calcule la traza del tensor identidad.

### Ejercicio 4

Calcule el determinante de $T = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$.

### Ejercicio 5

Exprese la condición de simetria.

### Ejercicio 6

Calcule los valores propios de $T = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$.

### Ejercicio 7

Exprese la forma cuadratica $v^T T v$.

### Ejercicio 8

Calcule $T^{-1}$ para $T = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$.

### Ejercicio 9

Exprese el tensor de deformacion.

### Ejercicio 10

Calcule el rango de $T = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$.

### Ejercicio 11

Exprese la condicion de definida positiva.

### Ejercicio 12

Calcule $T^2$ para $T = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$.

### Ejercicio 13

Exprese cuando $T$ es normal: $TT^T = T^T T$.

### Ejercicio 14

Calcule la traza de $T = \begin{pmatrix} a & b \\ b & a \end{pmatrix}$.

### Ejercicio 15

Exprese el tensor de esfuerzos en terminos del tensor de deformacion.

## Soluciones

### Solucion 1

$3(4)/2 = 6$ componentes.

### Solucion 2

Simetrica: $\begin{pmatrix} 1 & 2.5 \\ 2.5 & 4 \end{pmatrix}$, antisimetrica: $\begin{pmatrix} 0 & -0.5 \\ 0.5 & 0 \end{pmatrix}$.

### Solucion 3

$\text{tr}(I) = n$.

### Solucion 4

$\det(I) = 1$.

### Solucion 5

$T_{ij} = T_{ji}$.

### Solucion 6

$\lambda = 1, 3$.

### Solucion 7

$v^T T v = T_{ij} v_i v_j$.

### Solucion 8

$T^{-1} = \begin{pmatrix} 1 & -2 \\ 0 & 1 \end{pmatrix}$.

### Solucion 9

$\varepsilon_{ij} = \frac{1}{2}(\partial_i u_j + \partial_j u_i)$.

### Solucion 10

Rango 1.

### Solucion 11

Todos los valores propios son positivos.

### Solucion 12

$T^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$.

### Solucion 13

Se cumple cuando $T$ es simetrico u ortogonal.

### Solucion 14

$2a$.

### Solucion 15

$\sigma_{ij} = \lambda \varepsilon_{kk} \delta_{ij} + 2\mu \varepsilon_{ij}$.
