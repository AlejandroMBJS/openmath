---
title: Tensor metrico conjugado y subir/bajar indices
description: Metrica inversa, elevacion y descenso de indices, y transformaciones entre componentes.
---

# Tensor metrico conjugado y subir/bajar indices

## Motivacion e intuicion

La metrica $g_{ij}$ permite definir productos internos, pero también nos permite transformar entre representaciones contravariantes y covariantes de tensores. El tensor metrico conjugado (o metrica inversa) $g^{ij}$ es esencial para estas operaciones.

## Definicion del tensor metrico conjugado

El tensor metrico conjugado $g^{ij}$ se define como la **inversa** de $g_{ij}$:

$$g^{ij} g_{jk} = \delta^i_k$$

### Representacion matricial

Si $g = (g_{ij})$, entonces $g^{-1} = (g^{ij})$.

### Ejemplo en 2D

Para $g_{ij} = \begin{pmatrix} 1 & 0 \\ 0 & r^2 \end{pmatrix}$ (coordenadas polares):

$$g^{ij} = \begin{pmatrix} 1 & 0 \\ 0 & 1/r^2 \end{pmatrix}$$

## Operaciones de subir y bajar indices

### Bajar un indice

Dado un vector contravariante $v^i$, obtenemos su version covariante:

$$v_i = g_{ij} v^j$$

### Subir un indice

Dado un vector covariante $w_i$, obtenemos su version contravariante:

$$w^i = g^{ij} w_j$$

### Para tensores generales

$$T_{ij} = g_{ik} g_{jl} T^{kl}$$

$$T^{ij} = g^{ik} g^{jl} T_{kl}$$

$$T^i_{\ j} = g^{ik} T_{kj}$$

## Reglas de transformacion

### Ejemplo: Vector velocidad

En coordenadas cartesianas: $v^i = \dot{x}^i$

Para obtener componentes covariantes: $v_i = \delta_{ij} v^j = v^j$

En polares: $v^r = \dot{r}$, $v^\theta = r^2 \dot{\theta}$

Para covariantes: $v_r = \dot{r}$, $v_\theta = r^2 \dot{\theta}$

## Elevacion y descenso en fisica

### cuadrivectores en relatividad

$V_\mu = \eta_{\mu\nu} V^\nu$

donde $\eta_{\mu\nu} = \text{diag}(-1, 1, 1, 1)$

### Momentum

$p_\mu = m U_\mu$ (desde velocidad)

## Propiedades

### Invariancia del producto interno

$$g_{ij} u^i v^j = u_i v^i = u^i v_i$$

Todas las formas dan el mismo resultado escalar.

### Traza de la metrica

$$g^{ij} g_{ij} = \delta^i_i = n$$

(En dimension $n$)

### Relación con determinante

$$g^{ij} = \frac{1}{\det(g)} \text{cofactor}(g_{ij})$$

## Ejemplos concretos

### Ejemplo 1: Esfera $S^2$

$g_{ij} = R^2 \text{diag}(1, \sin^2\theta)$

$g^{ij} = \frac{1}{R^2} \text{diag}(1, 1/\sin^2\theta)$

### Ejemplo 2: Schwarzschild

$g_{tt} = -(1-2M/r)$, $g_{rr} = 1/(1-2M/r)$, $g_{\theta\theta} = r^2$, $g_{\phi\phi} = r^2\sin^2\theta$

Inversa: $g^{tt} = -1/(1-2M/r)$, $g^{rr} = 1-2M/r$, etc.

## Errores comunes

1. **Confundir inversa**: $g^{ij}$ no es igual a $g_{ij}$ (excepto en euclideo con coordenadas cartesianas).

2. **Indices repetidos**: $v_i = g_{ij}v^j$ es una suma sobre $j$.

3. **Orden**: $T_{ij} \neq T_{ji}$ en general.

## Ejercicios

### Ejercicio 1

Calcule la inversa de $g_{ij} = \text{diag}(1, 1, 1)$.

### Ejercicio 2

Exprese la operacion de subir indices.

### Ejercicio 3

Calcule $v_i$ para $v = (1, 2)$ con metrica euclidea.

### Ejercicio 4

Exprese la metrica inversa en terminos del determinante.

### Ejercicio 5

Calcule $g^{ij}$ para polares $g_{ij} = \text{diag}(1, r^2)$.

### Ejercicio 6

Exprese el producto interno usando $g^{ij}$.

### Ejercicio 7

Suba los indices de $w = (1, 0, 0)$ en 3D.

### Ejercicio 8

Exprese la condicion $v_i = g_{ij}v^j$.

### Ejercicio 9

Calcule el tensor de Ricci usando $g^{ij}$.

### Ejercicio 10

Exprese la metrica de Minkowski y su inversa.

### Ejercicio 11

Calcule la traza $g^{ij}g_{ij}$.

### Ejercicio 12

Exprese el Laplaciano usando $g^{ij}$.

### Ejercicio 13

Suba los indices de un tensor mixto.

### Ejercicio 14

Exprese la derivada covariante con indice arriba.

### Ejercicio 15

Calcule el volumen infinitesimal usando $\sqrt{\det(g)}$.

## Soluciones

### Solucion 1

$g^{ij} = \text{diag}(1, 1, 1)$ (la misma).

### Solucion 2

$w^i = g^{ij} w_j$

### Solucion 3

$v_i = (1, 2)$

### Solucion 4

$g^{ij} = \frac{1}{\det(g)}\text{cof}(g)_{ij}$

### Solucion 5

$g^{ij} = \text{diag}(1, 1/r^2)$

### Solucion 6

$u \cdot v = g^{ij} u_i v_j = g_{ij} u^i v^j$

### Solucion 7

$w^i = (1, 0, 0)$

### Solucion 8

$v_i = g_{ij} v^j$ (bajar indice)

### Solucion 9

$R_{ij} = R^k_{\ ikj}$ (contrayendo indices)

### Solucion 10

$\eta_{\mu\nu} = \text{diag}(-1, 1, 1, 1)$, $\eta^{\mu\nu} = \text{diag}(-1, 1, 1, 1)$

### Solucion 11

$g^{ij}g_{ij} = \delta^i_i = n$

### Solucion 12

$\nabla^2 f = g^{ij} \nabla_i \nabla_j f$

### Solucion 13

$T^{ij} = g^{ik}g^{jl} T_{kl}$

### Solucion 14

$\nabla^i f = g^{ij} \nabla_j f$

### Solucion 15

$dV = \sqrt{|\det(g_{ij})|}\, dx^1 \cdots dx^n$
