---
title: Derivada absoluta a lo largo de una curva
description: Derivada covariante a lo largo de curvas, transporte paralelo, geodesicas y dinamica en variedades.
---

# Derivada absoluta a lo largo de una curva

## Motivacion e intuicion

En un espacio euclideo, podemos comparar vectores en diferentes puntos simplemente restando sus componentes. Pero en una variedad riemanniana, no hay manera natural de comparar vectores en puntos diferentes. La derivada absoluta resolve este problema mediante el transporte paralelo a lo largo de una curva.

## Definicion

Sea $x^i(\lambda)$ una curva parametrica y $V^i(\lambda)$ un campo vectorial a lo largo de la curva. La **derivada absoluta** (covariante) es:

$$\frac{DA^i}{d\lambda} = \frac{dV^i}{d\lambda} + \Gamma^i_{jk} V^j \frac{dx^k}{d\lambda}$$

## Transporte paralelo

Un campo vectorial se transporta **paralelamente** a lo largo de la curva si:

$$\frac{DA^i}{d\lambda} = 0$$

Esto significa:

$$\frac{dV^i}{d\lambda} = -\Gamma^i_{jk} V^j \frac{dx^k}{d\lambda}$$

## Geodesicas

Una geodesica es una curva cuyas tangentes se transportan paralelamente:

$$\frac{dx^i}{d\lambda} = V^i, \quad \frac{DA^i}{d\lambda} = 0$$

Esto da la **ecuacion geodesica**:

$$\frac{d^2x^i}{d\lambda^2} + \Gamma^i_{jk}\frac{dx^j}{d\lambda}\frac{dx^k}{d\lambda} = 0$$

## Propiedades

### Longitud de arco

Para una curva con parametrizacion por longitud de arco $s$:

$$\left\|\frac{dx}{ds}\right\| = 1$$

### Geodesica como linea recta

En coordenadas cartesianas euclideas, $\Gamma^i_{jk} = 0$, y las geodesicas son lineas rectas.

## Ejemplos

### Circulo maximo en esfera

Las geodesicas en $S^2$ son circulos maximos.

### Orbita kepleriana

Las orbitas son geodesicas en el espacio-tiempo de Schwarzschild.

### Movimiento geodesico

Una particula en caida libre se mueve a lo largo de una geodesica.

## Derivada de otros tensores

### Tensor covariante

$$\frac{DA_i}{d\lambda} = \frac{dA_i}{d\lambda} - \Gamma^j_{ik} A_j \frac{dx^k}{d\lambda}$$

### Tensor mixto

$$\frac{DA^i_{\ j}}{d\lambda} = \frac{dA^i_{\ j}}{d\lambda} + \Gamma^i_{mk} A^m_{\ j} \frac{dx^k}{d\lambda} - \Gamma^m_{jk} A^i_{\ m} \frac{dx^k}{d\lambda}$$

## Velocidad y aceleracion geodesica

### Velocidad

$$U^i = \frac{dx^i}{d\tau}$$

### Aceleracion

$$a^i = \frac{DA^i}{d\tau} = \frac{dU^i}{d\tau} + \Gamma^i_{jk}U^jU^k$$

Para geodesica: $a^i = 0$.

## Parametrizacion natural

El parametro $\lambda$ es **afín** si la geodesica satisfy:

$$\frac{d}{d\lambda}\left(g_{ij}\frac{dx^i}{d\lambda}\frac{dx^j}{d\lambda}\right) = 0$$

Esto implica que $\|\dot{x}\|$ es constante.

## Errores comunes

1. **Confundir con derivada parcial**: La derivada absoluta incluye los simbolos de Christoffel.

2. **Indices**: Los terminos tiene $\Gamma$ con indice arriba.

3. **Parametrizacion**: Para geodesicas, el parametro debe ser afines.

## Ejercicios

### Ejercicio 1

Exprese la derivada absoluta de un vector contravariante.

### Ejercicio 2

Escriba la ecuacion de transporte paralelo.

### Ejercicio 3

Calcule la derivada absoluta de la velocidad para geodesica.

### Ejercicio 4

Exprese la ecuacion geodesica.

### Ejercicio 5

En cartesianas euclideas, cual es la derivada absoluta?

### Ejercicio 6

Calcule la geodesica en el plano.

### Ejercicio 7

Exprese la aceleracion geodesica.

### Ejercicio 8

Calcule la derivada absoluta de un vector covariante.

### Ejercicio 9

Exprese la derivada absoluta de un tensor de segundo orden.

### Ejercicio 10

En coordenadas polares, calcule la geodesica radial.

### Ejercicio 11

Exprese el transporte paralelo cerca del ecuador.

### Ejercicio 12

Calcule el parametro de longitud de arco.

### Ejercicio 13

Exprese la condicion de que una curva sea geodesica.

### Ejercicio 14

En la metrica de Schwarzschild, calcule la geodesica circular.

### Ejercicio 15

Exprese el principio variacional para geodesicas.

## Soluciones

### Solucion 1

$\frac{DA^i}{d\lambda} = \frac{dV^i}{d\lambda} + \Gamma^i_{jk} V^j \frac{dx^k}{d\lambda}$

### Solucion 2

$\frac{dV^i}{d\lambda} + \Gamma^i_{jk} V^j \frac{dx^k}{d\lambda} = 0$

### Solucion 3

$\frac{DA^i}{d\tau} = 0$ para geodesica.

### Solucion 4

$\frac{d^2x^i}{d\tau^2} + \Gamma^i_{jk}\frac{dx^j}{d\tau}\frac{dx^k}{d\tau} = 0$

### Solucion 5

$\frac{DA^i}{d\lambda} = \frac{dV^i}{d\lambda}$ (porque $\Gamma = 0$)

### Solucion 6

Linea recta: $x(\lambda) = a\lambda + b$

### Solucion 7

$a^i = \frac{DA^i}{d\tau} = \frac{dU^i}{d\tau} + \Gamma^i_{jk}U^jU^k$

### Solucion 8

$\frac{DA_i}{d\lambda} = \frac{dA_i}{d\lambda} - \Gamma^j_{ik}A_j\frac{dx^k}{d\lambda}$

### Solucion 9

$\frac{DA^i_{\ j}}{d\lambda} = \frac{dA^i_{\ j}}{d\lambda} + \Gamma^i_{mk}A^m_{\ j}\frac{dx^k}{d\lambda} - \Gamma^m_{jk}A^i_{\ m}\frac{dx^k}{d\lambda}$

### Solucion 10

$r(\lambda) = r_0 + v_0\lambda$, $\theta(\lambda) = \theta_0$

### Solucion 11

$\frac{dV^i}{d\lambda} = -\Gamma^i_{\theta\phi}\frac{d\phi}{d\lambda}V^\phi$ en Ecuador

### Solucion 12

$s = \int_\lambda \sqrt{g_{ij}\dot{x}^i\dot{x}^j}\, d\lambda$

### Solucion 13

$\frac{DA^i}{d\tau} = 0$ (tangentes paralelas)

### Solucion 14

$\frac{d\phi}{d\tau} = L/r^2$ constante para orbita circular

### Solucion 15

$\delta\int \sqrt{g_{ij}\dot{x}^i\dot{x}^j}d\lambda = 0$
