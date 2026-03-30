---
title: La metrica euclidea y curvatura de Ricci
description: Metrica euclidea, caso limite de curvatura cero, y relacion entre Ricci y geometria.
---

# La metrica euclidea y curvatura de Ricci

## Motivacion e intuicion

En el espacio euclideo, la curvatura es identicamente cero. Esto significa que el tensor de Riemann se anula, y todas sus contracciones (Ricci, curvatura escalar) también son cero. Este caso limite es fundamental para entender la geometria general.

## Metrica euclidea en coordenadas cartesianas

$$g_{ij} = \delta_{ij} = \text{diag}(1, 1, \ldots, 1)$$

### Propiedades

- Es constante en todo punto
- Su inversa es ella misma: $g^{ij} = \delta^{ij}$
- Los simbolos de Christoffel se anulan: $\Gamma^i_{jk} = 0$
- La derivada covariante es igual a la derivada parcial: $\nabla_i = \partial_i$

## Consecuencias de curvatura cero

### Tensor de Riemann

$$R^i_{\ jkl} = 0$$

### Tensor de Ricci

$$R_{ij} = 0$$

### Curvatura escalar

$$R = 0$$

## Metricas que dan Ricci = 0

### Espacio de Minkowski

$$\eta_{\mu\nu} = \text{diag}(-1, 1, 1, 1)$$

$R_{\mu\nu} = 0$ pero el espacio tiene estructura no trivial.

### Metrica de Kerr

Agujero negro rotante tiene $R_{\mu\nu} = 0$ (vacío).

### Solucion de ondas

Variedad de Lorentz con $R_{\mu\nu} = 0$.

## Geometria del espacio con Ricci = 0

### Geodesicas son lineas rectas

$$\frac{d^2x^i}{d\tau^2} = 0 \Rightarrow x^i(\tau) = a^i \tau + b^i$$

### Transporte paralelo es trivial

$$V^i = \text{const}$$

### Distancia es euclidea

$$d(p,q) = \sqrt{\delta_{ij}(x^i_p - x^i_q)(x^j_p - x^j_q)}$$

## Expresiones simplificadas

### Derivada covariante

$$\nabla_k T^{i_1 \ldots i_r}_{j_1 \ldots j_s} = \partial_k T^{i_1 \ldots i_r}_{j_1 \ldots j_s}$$

### Divergencia

$$\nabla_i v^i = \partial_i v^i$$

### Laplaciano

$$\nabla^2 f = \delta^{ij} \partial_i \partial_j f$$

## Transicion a metricas curvadas

### Aproximacion local

$$g_{ij} = \delta_{ij} + h_{ij}$$

donde $h_{ij}$ es pequena.

### Expansion del tensor de Riemann

$$R^i_{\ jkl} = \frac{1}{2}(\partial_k \partial_j h^i_{\ l} - \partial_l \partial_j h^i_{\ k} + \partial_l \partial_k h^i_{\ j} - \partial_k \partial_l h^i_{\ j}) + O(h^2)$$

## Significado fisico

En relatividad general:
- $R_{\mu\nu} = 0$ significa vacío
- La materia curva el espacio, creando Ricci no nulo
- $G_{\mu\nu} = \kappa T_{\mu\nu}$

## Ejercicios

### Ejercicio 1

Exprese la metrica euclidea en $\mathbb{R}^3$.

### Ejercicio 2

Calcule $\Gamma^i_{jk}$ para coordenadas cartesianas.

### Ejercicio 3

Por que $R_{ij} = 0$ en euclideo?

### Ejercicio 4

Exprese la geodesica en euclideo.

### Ejercicio 5

Calcule la distancia entre $(0,0)$ y $(3,4)$.

### Ejercicio 6

Exprese el Laplaciano.

### Ejercicio 7

Por que Minkowski tiene $R_{\mu\nu} = 0$?

### Ejercicio 8

Calcule la divergencia en euclideo.

### Ejercicio 9

Exprese la condicion $R_{ij} = 0$.

### Ejercicio 10

Calcule el tensor de Riemann desde Christoffel nulos.

### Ejercicio 11

Exprese la derivada covariante.

### Ejercicio 12

Calcule el transporte paralelo.

### Ejercicio 13

Exprese la expansion de curvatura.

### Ejercicio 14

Calcule $R$ para metrica perturbada.

### Ejercicio 15

Exprese el significado de vacío en relatividad.

## Soluciones

### Solucion 1

$g_{ij} = \text{diag}(1,1,1)$

### Solucion 2

$\Gamma^i_{jk} = 0$

### Solucion 3

$R_{ij} = \partial_k\Gamma^k_{ij} - \partial_j\Gamma^k_{ik} + \Gamma^k_{km}\Gamma^m_{ij} - \Gamma^k_{jm}\Gamma^m_{ik} = 0$

### Solucion 4

$x^i(\tau) = a^i\tau + b^i$

### Solucion 5

$d = \sqrt{3^2 + 4^2} = 5$

### Solucion 6

$\nabla^2 f = \partial_{11}f + \partial_{22}f + \partial_{33}f$

### Solucion 7

Porque $R_{\mu\nu}$ se anula identically en la solución de vacío de Einstein.

### Solucion 8

$\partial_i v^i$

### Solucion 9

$R_{ij} = 0$ significa curvatura de Ricci nula.

### Solucion 10

$R^i_{\ jkl} = 0$

### Solucion 11

$\nabla_k = \partial_k$

### Solucion 12

$V^i$ es constante.

### Solucion 13

$R^i_{\ jkl} = \frac{1}{2}\partial_{[k}\partial_{j]}h^i_{\ l} + ...$

### Solucion 14

$R \approx \delta^{ij}\partial_i\partial_j h$

### Solucion 15

$T_{\mu\nu} = 0$ implica $G_{\mu\nu} = 0$ y por tanto $R_{\mu\nu} = 0$.
