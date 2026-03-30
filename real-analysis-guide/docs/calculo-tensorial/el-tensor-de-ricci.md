---
title: El tensor de Ricci
description: Definicion, propiedades, contraccion del tensor de Riemann y significado geometrico.
---

# El tensor de Ricci

## Motivacion e intuicion

El tensor de Ricci $R_{ij}$ es una contraccion del tensor de Riemann. Mientras el Riemann mide la curvatura completa delespacio, el Ricci resume la curvatura "promedio" en cada punto.

Geométricamente, el Ricci aparece cuando estudiamos el volumen de pequenas bolas geodesicas: la desviación del volumen euclídeo es proporcional al Ricci.

## Definicion

El tensor de Ricci se obtiene contraindo el primer indice del tensor de Riemann con el tercer indice:

$$R_{ij} = R^k_{\ ijk}$$

Alternativamente, en términos de la conexión:

$$R_{ij} = \partial_k \Gamma^k_{ij} - \partial_j \Gamma^k_{ik} + \Gamma^k_{km}\Gamma^m_{ij} - \Gamma^k_{jm}\Gamma^m_{ik}$$

## Propiedades

### Simetria

$$R_{ij} = R_{ji}$$

El Ricci es simétrico.

### Tipo

Es un tensor covariante de segundo orden: tipo $(0,2)$.

### Traza

$$R = g^{ij} R_{ij}$$

(La curvatura escalar)

## Contracciones adicionales

### Ecuacion de identidad de Ricci

$$R_{ij} - \frac{1}{2}g_{ij}R = G_{ij}$$

(Tensor de Einstein)

### Ecuaciones de campo

$$R_{ij} - \frac{1}{2}g_{ij}R = \kappa T_{ij}$$

donde $\kappa = 8\pi G/c^4$ en relatividad general.

## Significado geometrico

### Volumen de bolas geodesicas

En una variedad riemanniana, el volumen de una bola geodesica de radio $\varepsilon$ es:

$$V(\varepsilon) = V_{euclideo}\left(1 - \frac{R_{ij} x^i x^j}{6(n+2)}\varepsilon^2 + O(\varepsilon^3)\right)$$

El Ricci mide la desviación del volumen respecto al espacio euclídeo.

### Tensor de energía efectiva

En relatividad, el Ricci representa la densidad de energía promediada.

## Ejemplos en espacios conocidos

### Espacio euclídeo

$$R_{ij} = 0$$

### Esfera $S^n$

$$R_{ij} = (n-1)K g_{ij}$$

donde $K = 1/r^2$ es la curvatura seccional.

### Metrica de Schwarzschild

$$R_{tt} = R_{rr} = R_{\theta\theta} = R_{\phi\phi} = 0$$

(métrica de vacío, $R_{\mu\nu} = 0$)

### Metrica FLRW

$$R_{ij} = 3\left(\frac{\dot{a}^2}{a^2} + \frac{k}{a^2}\right)g_{ij}$$

## Ecuacion de campo de Einstein

$$\boxed{R_{\mu\nu} - \frac{1}{2}g_{\mu\nu}R = \kappa T_{\mu\nu}}$$

Esta es una de las ecuaciones más importantes de la física teórica.

## Errores comunes

1. **Confundir con Riemann**: El Ricci es una contracción del Riemann.

2. **No confundir con Einstein**: $G_{\mu\nu} = R_{\mu\nu} - \frac{1}{2}g_{\mu\nu}R$.

3. **Índices**: $R_{ij}$ tiene dos índices abajo (covariante).

## Ejercicios

### Ejercicio 1

Calcule el Ricci en espacio euclídeo.

### Ejercicio 2

Derive la definición del Ricci desde el Riemann.

### Ejercicio 3

Exprese $R_{ij}$ en términos de la conexión.

### Ejercicio 4

Calcule el Ricci para la métrica $ds^2 = dr^2 + r^2 d\theta^2$.

### Ejercicio 5

Verifique que $R_{ij} = R_{ji}$.

### Ejercicio 6

Exprese la curvatura escalar.

### Ejercicio 7

Calcule el tensor de Einstein desde el Ricci.

### Ejercicio 8

En 2D, muestre que $R_{ij} = \frac{1}{2}R g_{ij}$.

### Ejercicio 9

Calcule el Ricci para la métrica de Schwarzschild exterior.

### Ejercicio 10

Exprese las ecuaciones de campo en términos del Ricci.

### Ejercicio 11

Derive la identidad de Bianchi contraída.

### Ejercicio 12

Calcule el Ricci para la métrica FLRW.

### Ejercicio 13

Exprese la condición de vacío en términos del Ricci.

### Ejercicio 14

Calcule $R_{ij}$ para la métrica $ds^2 = dr^2 + r^2\sin^2\theta d\phi^2$.

### Ejercicio 15

Verifique que $\nabla^j R_{ij} = \frac{1}{2}\partial_i R$.

## Soluciones

### Solución 1

En espacio euclídeo, $\Gamma^i_{jk} = 0$, luego $R_{ij} = 0$.

### Solución 2

$R_{ij} = R^k_{\ ijk}$

### Solución 3

$R_{ij} = \partial_k \Gamma^k_{ij} - \partial_j \Gamma^k_{ik} + \Gamma^k_{km}\Gamma^m_{ij} - \Gamma^k_{jm}\Gamma^m_{ik}$

### Solución 4

$\Gamma^r_{\theta\theta} = -r$, $\Gamma^\theta_{r\theta} = 1/r$.
$R_{rr} = 0$, $R_{\theta\theta} = r$, $R_{r\theta} = 0$.

### Solución 5

Por simetría del Riemann: $R^k_{\ ijk} = R^k_{\ kij} = R_{ji}$

### Solución 6

$R = g^{ij}R_{ij}$

### Solución 7

$G_{ij} = R_{ij} - \frac{1}{2}g_{ij}R$

### Solución 8

En 2D: solo hay un componente independiente. $R_{ij} = \frac{1}{2}R g_{ij}$.

### Solución 9

En vacío Schwarzschild: $R_{\mu\nu} = 0$.

### Solución 10

$R_{\mu\nu} - \frac{1}{2}g_{\mu\nu}R = \kappa T_{\mu\nu}$

### Solución 11

$\nabla^j R_{ij} = \frac{1}{2}\partial_i R$ (identidad de Ricci)

### Solución 12

$R_{ij} = 3(\dot{a}^2/a^2 + k/a^2)g_{ij}$

### Solución 13

$R_{\mu\nu} = 0$

### Solución 14

$R_{rr} = 0$, $R_{\theta\theta} = r^2\sin^2\theta$, $R_{\phi\phi} = r^2\sin^2\theta$, las demás cero.

### Solución 15

$\nabla^j R_{ij} = \frac{1}{2}\partial_i R$ es la identidad de Ricci.
