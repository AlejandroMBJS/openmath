---
title: Tensores de primer orden covariantes
description: Vectores covariantes, 1-formas, gradientes y transformacion de componentes covariantes.
---

# Tensores de primer orden covariantes

## Motivacion e intuicion

Un tensor covariante de primer orden (vector covariante o 1-forma) representa un objeto geometricamente diferente al vector contravariante. Mientras el vector contravariante apunta "a lo largo de" una direccion, el covariante esta asociado a la notion de "derivada respecto a" algo.

El ejemplo mas comun es el gradiente de una funcion escalar:

$$\nabla f = \frac{\partial f}{\partial x^i} dx^i$$

Las componentes $(\partial f/\partial x^i)$ son covariantes.

## Definicion formal

Un tensor covariante de rango 1 tiene componentes $w_i$ (indices abajo) que bajo cambio de coordenadas transforman como:

$$w'_i = \frac{\partial x^j}{\partial x'^i} w_j$$

Esta es la **regla de transformacion covariante**: derivar las coordenadas antiguas respecto a las nuevas.

## Relacion con 1-formas

En la formulacion geometrica, un vector covariante es una **1-forma** (dual al espacio tangente). Se puede pensar como una funcion lineal que actua sobre vectores para dar escalares.

$$w(v) = w_i v^i = \text{escalar}$$

## Ejemplos clasicos

### Ejemplo 1: Gradiente de una funcion

$$df = \frac{\partial f}{\partial x^i} dx^i$$

Las componentes $(\partial f/\partial x^i)$ son covariantes.

### Ejemplo 2: Campo electrico

$$E_i = -\frac{\partial \phi}{\partial x^i}$$

es un vector covariante (campo electrico covariante).

### Ejemplo 3: Momentum canonico

En mekanica hamiltoniana, el momento conjugado $p_i$ es covariante.

## Diferencia fundamental con vectores contravariantes

| Aspecto | Covariante $w_i$ | Contravariante $v^i$ |
|---------|-------------------|----------------------|
| Indice | Abajo | Arriba |
| Transformacion | $\partial x/\partial x'$ | $\partial x'/\partial x$ |
| Base | $dx^i$ | $\partial/\partial x^i$ |
| Geometria | Funcion lineal sobre vectores | Vector geometricamente |

## Operacion de "bajar indices"

Dado un vector contravariante $v^i$, podemos obtener su version covariante mediante la metrica:

$$v_i = g_{ij} v^j$$

Esto se llama **metryc contraction** o "bajar el indice".

## Contraccion

Un vector covariante se contrae con uno contravariante para dar un escalar invariante:

$$w_i v^i = w_1 v^1 + w_2 v^2 + \cdots$$

Esta es la unica combinacion que produce un escalar.

## En relatividad

Los cuadrivectores covariantes tienen indice abajo:
- Potencial electromagnético: $A_\mu = (\phi/c, \mathbf{A})$
- Gradiente: $\partial_\mu$

## Errores comunes

1. **Confundir transformacion**: $w'_i = \frac{\partial x^j}{\partial x'^i} w_j$, no al reves.

2. **Sumar con contravariantes**: No se puede sumar $w_i + v^i$ directamente; hay que convertir primero.

3. **Pensar que es "menos importante"**: Las 1-formas son tan fundamentales como los vectores.

## Ejercicios

### Ejercicio 1

Exprese el gradiente de $f(x,y) = x^2 + y^2$ en componentes covariantes.

### Ejercicio 2

Transforme las componentes del gradiente desde cartesianas a polares.

### Ejercicio 3

Calcule $(\partial f/\partial x^i) x^i$ y verifique que es invariante.

### Ejercicio 4

Si $v^i = (1, 2)$ en cartesianas, calcule $v_i$ usando la metrica euclidea.

### Ejercicio 5

Exprese las componentes covariantes de un campo vectorial en coordenadas polares.

### Ejercicio 6

Derive la formula de transformacion para $w'_r$.

### Ejercicio 7

En relatividad, exprese el potencial vectorial $A_\mu$ y verifique su transformacion.

### Ejercicio 8

Calcule $w_i v^i$ para $w = (1, 0)$ y $v = (0, 1)$.

### Ejercicio 9

Que significa geometricamente una 1-forma?

### Ejercicio 10

Exprese la diferencial $df$ en coordenadas polares.

### Ejercicio 11

Transforme el campo $w = (1, 1)$ desde cartesianas al origen en polares.

### Ejercicio 12

Calcule las componentes covariantes de la velocidad en polares.

### Ejercicio 13

Exprese el Laplaciano en terminos de derivadas covariantes.

### Ejercicio 14

Verifique que $w_i v^i$ es igual a $g_{ij} v^i w^j$.

### Ejercicio 15

En coordenadas esfericas, calcule el gradiente de $f(r,\theta,\phi) = r$.

## Soluciones

### Solucion 1

$\partial f/\partial x = 2x$, $\partial f/\partial y = 2y$. Luego $(w_1, w_2) = (2x, 2y)$

### Solucion 2

$w'_r = w_x \cos\theta + w_y \sin\theta$, $w'_\theta = -w_x r\sin\theta + w_y r\cos\theta$

### Solucion 3

$(\partial f/\partial x^i) x^i = x \cdot 2x + y \cdot 2y = 2(x^2 + y^2)$, invariante.

### Solucion 4

$v_i = \delta_{ij} v^j = (1, 2)$

### Solucion 5

$(\partial f/\partial r, \partial f/\partial \theta)$ son covariantes en polares.

### Solucion 6

$w'_r = \partial x/\partial r w_x + \partial y/\partial r w_y = \cos\theta w_x + \sin\theta w_y$

### Solucion 7

$A_\mu$ transforma covariante: $A'_\mu = \partial x^\nu/\partial x'^\mu A_\nu$

### Solucion 8

$w_i v^i = 1 \cdot 0 + 0 \cdot 1 = 0$

### Solucion 9

Es una funcion lineal que acepta vectores y devuelve escalares; geometricamente, es un objeto dual al espacio tangente.

### Solucion 10

$df = (\partial f/\partial r) dr + (\partial f/\partial \theta) d\theta$

### Solucion 11

$w_r = 1 \cdot \cos 0 + 1 \cdot \sin 0 = 1$, $w_\theta = -1 \cdot 1 \cdot \sin 0 + 1 \cdot 1 \cdot \cos 0 = 1$

### Solucion 12

$v_r = \dot{r}$, $v_\theta = r^2 \dot{\theta}$ (covariantes en polares)

### Solucion 13

$\nabla^2 f = g^{ij} \nabla_i \nabla_j f = \frac{1}{\sqrt{g}} \partial_i(\sqrt{g} g^{ij} \partial_j f)$

### Solucion 14

Por definicion: $g_{ij} v^i w^j = (g_{ij} v^i) w^j = v_j w^j = w_j v^j$

### Solucion 15

$\partial f/\partial r = 1$, $\partial f/\partial \theta = 0$, $\partial f/\partial \phi = 0$. Luego el gradiente tiene componentes $(1, 0, 0)$.
