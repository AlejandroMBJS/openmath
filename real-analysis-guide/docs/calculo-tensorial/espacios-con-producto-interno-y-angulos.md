---
title: Espacios con producto interno y angulos
description: Producto interno, ortogonalidad, angulos entre vectores y bases ortonormales en espacios tensoriales.
---

# Espacios con producto interno y angulos

## Motivacion e intuicion

El producto interno es la estructura geometrica fundamental que permite definir conceptos como longitud, angulo y ortogonalidad. En el contexto tensorial, el producto interno esta dado por la metrica $g_{ij}$, que desempeÃ±a el mismo papel que el producto punto en el espacio euclideo.

## Definicion de producto interno

En un espacio vectorial $V$ con metrica $g_{ij}$:

$$\langle u, v \rangle = g_{ij} u^i v^j = u_i v^i = u \cdot v$$

## Propiedades del producto interno

1. **Linealidad**: $\langle a u + b v, w \rangle = a \langle u, w \rangle + b \langle v, w \rangle$

2. **Simetria**: $\langle u, v \rangle = \langle v, u \rangle$

3. **Definido positivo**: $\langle v, v \rangle \geq 0$, y $= 0$ solo si $v = 0$

## Longitud (norma) de un vector

$$\|v\| = \sqrt{\langle v, v \rangle} = \sqrt{g_{ij} v^i v^j}$$

## Angulo entre vectores

El angulo $\theta$ entre $u$ y $v$ se define por:

$$\cos \theta = \frac{\langle u, v \rangle}{\|u\| \|v\|}$$

## Ortogonalidad

Dos vectores son **ortogonales** si:

$$\langle u, v \rangle = 0$$

### Decomposicion ortogonal

Si $u = u_{\|} + u_{\perp}$ donde $u_{\|} \parallel v$ y $u_{\perp} \perp v$, entonces:

$$\|u\|^2 = \|u_{\|}\|^2 + \|u_{\perp}\|^2$$

## Base ortonormal

Una base $\{\mathbf{e}_i\}$ es ortonormal si:

$$\langle \mathbf{e}_i, \mathbf{e}_j \rangle = \delta_{ij}$$

En este caso, cualquier vector se escribe simplemente:

$$v = v^i \mathbf{e}_i = v_i \mathbf{e}^i$$

## Proyeccion ortogonal

### Proyeccion de $u$ sobre $v$ (no unitario)

$$\text{proj}_v(u) = \frac{\langle u, v \rangle}{\langle v, v \rangle} v$$

### Proyeccion sobre subespacio

Para un subespacio $W$ con base ortonormal $\{w_1, \ldots, w_k\}$:

$$\text{proj}_W(u) = \sum_{i=1}^k \langle u, w_i \rangle w_i$$

## Complemento ortogonal

$$W^{\perp} = \{v \in V : \langle v, w \rangle = 0 \text{ para todo } w \in W\}$$

## Ejemplos

### Espacio euclideo

$$\langle u, v \rangle = \delta_{ij} u^i v^j = u_i v^i = u \cdot v$$

### Espacio de Minkowski

$$\langle u, v \rangle = \eta_{\mu\nu} u^\mu v^\nu = -c^2 u^0 v^0 + u \cdot v$$

para cuadrivectores.

### Espacios de Riemann

$$\langle u, v \rangle = g_{ij} u^i v^j$$

donde $g_{ij}$ depende de la posicion.

## Ortogonalizacion de Gram-Schmidt

Dado un conjunto de vectores linealmente independientes $\{v_1, \ldots, v_n\}$, construye una base ortonormal:

$$u_1 = v_1$$
$$u_2 = v_2 - \frac{\langle v_2, u_1 \rangle}{\langle u_1, u_1 \rangle} u_1$$
$$u_3 = v_3 - \frac{\langle v_3, u_1 \rangle}{\langle u_1, u_1 \rangle} u_1 - \frac{\langle v_3, u_2 \rangle}{\langle u_2, u_2 \rangle} u_2$$
$$\ldots$$

## Errores comunes

1. **Confundir con metrica**: En espacios curvos, la metrica define el producto interno local.

2. **Indices**: Olvidar que $\langle u, v \rangle = u_i v^i$.

3. **No unitario**: El vector sobre el que se proyecta debe normalizarse.

## Ejercicios

### Ejercicio 1

Calcule el producto interno de $u = (1, 2, 3)$ y $v = (4, 5, 6)$ en euclideo 3D.

### Ejercicio 2

Calcule la norma de $v = (3, 4)$ en $\mathbb{R}^2$.

### Ejercicio 3

Determine si $u = (1, 1)$ y $v = (1, -1)$ son ortogonales.

### Ejercicio 4

Calcule el angulo entre $(1, 0)$ y $(1, 1)$.

### Ejercicio 5

Exprese la proyeccion de $u$ sobre $v$ en notacion tensorial.

### Ejercicio 6

Calcule la proyeccion de $(2, 3)$ sobre $(1, 0)$.

### Ejercicio 7

Exprese la condicion de base ortonormal.

### Ejercicio 8

Calcule el complemento ortogonal de la linea generada por $(1, 1)$.

### Ejercicio 9

Exprese la desiguald de Cauchy-Schwarz.

### Ejercicio 10

Calcule la distancia de un punto a una linea en terminos de producto interno.

### Ejercicio 11

Aplique Gram-Schmidt a $\{(1, 1), (1, 0)\}$.

### Ejercicio 12

Exprese el producto interno en espacio de Minkowski.

### Ejercicio 13

Calcule la componente de $u$ en la direccion de $v$.

### Ejercicio 14

Exprese la desigualdad triangular.

### Ejercicio 15

Calcule el angulo hiperbolico en espacio de Minkowski.

## Soluciones

### Solucion 1

$\langle u, v \rangle = 1\cdot4 + 2\cdot5 + 3\cdot6 = 4 + 10 + 18 = 32$

### Solucion 2

$\|v\| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$

### Solucion 3

$\langle u, v \rangle = 1\cdot1 + 1\cdot(-1) = 1 - 1 = 0$, luego son ortogonales.

### Solucion 4

$\cos\theta = \frac{1}{\sqrt{1}\sqrt{2}} = \frac{1}{\sqrt{2}}$, luego $\theta = \pi/4$.

### Solucion 5

$\text{proj}_v(u) = \frac{g_{ij} u^i v^j}{g_{kl} v^k v^l} v^i$

### Solucion 6

$\text{proj}_{(1,0)}(2, 3) = \frac{2\cdot1 + 3\cdot0}{1^2 + 0^2}(1, 0) = (2, 0)$

### Solucion 7

$\langle e_i, e_j \rangle = \delta_{ij}$

### Solucion 8

$W^\perp = \text{span}\{(1, -1)\}$ porque $\langle (1,1), (1,-1) \rangle = 0$.

### Solucion 9

$|\langle u, v \rangle| \leq \|u\| \|v\|$

### Solucion 10

$d = \|u - \text{proj}_W(u)\|$

### Solucion 11

$u_1 = (1, 1)/\sqrt{2}$, $u_2 = (1, -1)/\sqrt{2}$

### Solucion 12

$\langle u, v \rangle = -c^2 u^0 v^0 + u^i v^i$

### Solucion 13

$\frac{\langle u, v \rangle}{\|v\|}$

### Solucion 14

$\|u + v\| \leq \|u\| + \|v\|$

### Solucion 15

$\cosh\eta = \frac{-\langle u, v \rangle}{\sqrt{\langle u, u \rangle \langle v, v \rangle}}$ en Minkowski
