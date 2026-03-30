---
title: Tensores de primer orden contravariante
description: Vectores contravariantes, transformacion de componentes y representacion geometrica.
---

# Tensores de primer orden contravariante

## Motivacion e intuicion

Un tensor de primer orden contravariante (vector contravariante) es un objeto geometricamente fundamental que representa direccion y magnitud en un espacio. A diferencia de un vector covariante (gradiente), sus componentes transforman de manera especial bajo cambios de coordenadas.

La diferencia clave: las componentes contravariantes tienen indices arriba ($v^i$) y transforman "opuesto" al sistema de coordenadas.

## Definicion formal

Un tensor contravariante de rango 1 tiene componentes $v^i$ (con indice arriba) que bajo un cambio de coordenadas transforman como:

$$v'^i = \frac{\partial x'^i}{\partial x^j} v^j$$

Esta es la **regla de transformacion contravariante**: derivar las nuevas coordenadas respecto a las antiguas.

## Relacion con vectores geometricos

En terminos geometricos, un vector contravariante representa un vector "verdadero" del espacio tangente que existe independientemente del sistema de coordenadas.

### Representacion en componentes

$$v = v^i \mathbf{e}_i$$

donde $\mathbf{e}_i$ son los vectores base covariantes (derivadas parciales).

## Ejemplos

### Ejemplo 1: Vector posicion en cartesianas

En $\mathbb{R}^2$: $\mathbf{r} = x^i \mathbf{e}_i$ con $x^1 = x$, $x^2 = y$

### Ejemplo 2: Velocidad de una particula

$$\mathbf{v} = \dot{x}^i \mathbf{e}_i$$

Las componentes $\dot{x}^i$ son contravariantes.

### Ejemplo 3: Momentum

En mecanica, $p^i = m \dot{x}^i$ es contravariante.

## Contraccion con vectores covariantes

Un vector contravariante puede contraerse con uno covariante para dar un escalar:

$$v_i w^i = g_{ij} v^i w^j = \text{escalar}$$

Esta es la invariant de la longitud del vector.

## Cambio de coordenadas

### En cartesianas a polares

$x = r\cos\theta$, $y = r\sin\theta$

Para un vector $v = (v^x, v^y)$:
$$v^r = v^x \cos\theta + v^y \sin\theta$$
$$v^\theta = -v^x \frac{\sin\theta}{r} + v^y \frac{\cos\theta}{r}$$

### Formula general

$$v'^i = \frac{\partial x'^i}{\partial x^j} v^j$$

## Notacion en fisica

En relatividad, los cuadrivectores son vectores contravariantes:
- Posicion: $x^\mu = (ct, x, y, z)$
- Velocidad: $U^\mu = \frac{dx^\mu}{d\tau}$
- Momentum: $p^\mu = m U^\mu$

## Diferencia con vectores covariantes

| Propiedad | Contravariante $v^i$ | Covariante $w_i$ |
|-----------|----------------------|------------------|
| Indice | Arriba | Abajo |
| Transformacion | $\partial x'/\partial x$ | $\partial x/\partial x'$ |
| Base | $\mathbf{e}_i = \partial/\partial x^i$ | $dx^i$ |
| Ejemplo | Velocidad, momentum | Gradiente |

## Errores comunes

1. **Confundir transformacion**: $v'^i = \frac{\partial x'^i}{\partial x^j} v^j$, no al reves.

2. **Mezclar indices**: Un vector contravariante NO puede sumarse directamente con uno covariante.

3. **Olvidar la base**: $v = v^i \mathbf{e}_i$, no solo las componentes.

## Ejercicios

### Ejercicio 1

Escriba las componentes de un vector $v = (1, 2)$ en $\mathbb{R}^2$ en notacion contravariante.

### Ejercicio 2

Transforme el vector $(v^x, v^y) = (1, 0)$ a coordenadas polares en el punto $(r=1, \theta=0)$.

### Ejercicio 3

Verifique que $v^i w_i$ es invariante bajo cambios de coordenadas.

### Ejercicio 4

Exprese las componentes del vector velocidad en coordenadas polares.

### Ejercicio 5

Calcule las componentes contravariantes del vector $(1, 1)$ en el origen de coordenadas polares.

### Ejercicio 6

En 3D, transforme $(v^x, v^y, v^z)$ a coordenadas esfericas.

### Ejercicio 7

Exprese la velocidad angular $\omega$ como vector contravariante.

### Ejercicio 8

Calcule las componentes del vector $(1, 0, 0)$ en coordenadas esfericas.

### Ejercicio 9

Que significa $v^i = g^{ij} v_j$?

### Ejercicio 10

Derive la formula de transformacion desde cartesianas a polares para $v^r$.

### Ejercicio 11

En relatividad especial, exprese un cuadrivector de velocidad.

### Ejercicio 12

Calcule la norma de $v^\mu = (1, 0, 0, 0)$ usando la metrica de Minkowski.

### Ejercicio 13

Exprese el momento lineal como vector contravariante.

### Ejercicio 14

Transforme $(1, 1, 0)$ en cartesianas a esfericas.

### Ejercicio 15

Demuestre que la velocidad transformada es un tensor contravariante.

## Soluciones

### Solucion 1

$v^1 = 1$, $v^2 = 2$

### Solucion 2

$v^r = v^x \cos\theta + v^y \sin\theta = 1 \cdot 1 + 0 \cdot 0 = 1$
$v^\theta = -v^x \frac{\sin\theta}{r} + v^y \frac{\cos\theta}{r} = -1 \cdot 0 + 0 \cdot 1 = 0$

### Solucion 3

$v'_i w'^i = (\partial x^j/\partial x'^i) v_j \cdot (\partial x'^i/\partial x^k) w^k = \delta^j_k v_j w^k = v_j w^j$

### Solucion 4

$\mathbf{v} = \dot{r} \mathbf{e}_r + r\dot{\theta} \mathbf{e}_\theta$ tiene componentes contravariantes $(\dot{r}, r\dot{\theta})$

### Solucion 5

En el origen ($\theta = 0$), $(1, 1)$ se transforma a: $v^r = 1 \cdot \cos 0 + 1 \cdot \sin 0 = 1$, $v^\theta = -1 \cdot \sin 0 / 1 + 1 \cdot \cos 0 / 1 = 1$

### Solucion 6

$v^r = v^x \sin\phi \cos\theta + v^y \sin\phi \sin\theta + v^z \cos\phi$
$v^\theta = v^x \cos\phi \cos\theta + v^y \cos\phi \sin\theta - v^z \sin\phi$
$v^\phi = -v^x \sin\theta + v^y \cos\theta$

### Solucion 7

$\omega = (\omega^x, \omega^y, \omega^z)$ con $\omega^i$ contravariante.

### Solucion 8

$v^r = 1 \cdot \sin\phi \cos\theta + 0 + 0 = \sin\phi \cos\theta$
En $\theta = 0, \phi = \pi/2$ (eje z): $v^r = 1$

### Solucion 9

Elevar el indice: obtener las componentes contravariantes desde las covariantes usando la metrica inversa.

### Solucion 10

$v'^r = \partial r/\partial x v^x + \partial r/\partial y v^y = \cos\theta v^x + \sin\theta v^y$

### Solucion 11

$U^\mu = \frac{dx^\mu}{d\tau} = (\gamma c, \gamma v^x, \gamma v^y, \gamma v^z)$

### Solucion 12

$\|v\|^2 = \eta_{\mu\nu} v^\mu v^\nu = -c^2(1)^2 + 0 + 0 + 0 = -c^2$

### Solucion 13

$p^\mu = m \frac{dx^\mu}{d\tau}$

### Solucion 14

$r = \sqrt{2}$, $\theta = \pi/4$, $\phi = \pi/2$. Las componentes esfericas son: $v^r = 1$, $v^\theta = -1/\sqrt{2}$, $v^\phi = 0$

### Solucion 15

Por la regla de transformacion, la velocidad es un tensor contravariante de rango 1.
