---
title: Tensores cartesianos affines
description: Tensores en sistemas cartesianos, metricas triviales, algebra de tensores en espacios euclideos.
---

# Tensores cartesianos affines

## Motivacion e intuicion

En un sistema de coordenadas cartesianas de un espacio euclideo, la metrica es particularmente simple: $g_{ij} = \delta_{ij}$ (la delta de Kronecker). Esto significa que los indices covariantes y contravariantes son prácticamente equivalentes, y muchas formulas se simplifican dramatically.

Estos tensores "cartesianos" son los mas basicos y aparecen constantemente en fisica newtoniana y mecanica clasica.

## Metrica cartesiana

En coordenadas cartesianas de $\mathbb{R}^n$:

$$g_{ij} = \delta_{ij} = \begin{pmatrix} 1 & 0 & \cdots \\ 0 & 1 & \cdots \\ \vdots & \vdots & \ddots \end{pmatrix}$$

Esta metrica tiene propiedades especiales:
- Es constante en todo punto
- Es su propia inversa: $g^{ij} = \delta^{ij}$

## Equivalencia de indices

Como $g_{ij} = \delta_{ij}$:
- $v_i = \delta_{ij} v^j = v^j$ (el subindice y superindice son iguales)
- No hay diferencia entre componentes covariantes y contravariantes
- Las formulas de elevacion y descenso son triviales

## Algebra simplificada

### Producto punto

$$\mathbf{a} \cdot \mathbf{b} = a_i b_i = a^i b^i = \sum_i a_i b_i$$

### Norma

$$\|\mathbf{v}\| = \sqrt{v_i v_i} = \sqrt{v^i v^i}$$

### Producto vectorial

$$(\mathbf{a} \times \mathbf{b})_i = \varepsilon_{ijk} a_j b_k$$

## Tensores en este contexto

### Vector velocidad

$$\mathbf{v} = \dot{x}_i \mathbf{e}^i = \dot{x}^i \mathbf{e}_i$$

### Aceleracion

$$\mathbf{a} = \ddot{x}_i = \ddot{x}^i$$

### Tensor de esfuerzos

$$\sigma_{ij}$$ (simetrico en mecanica clasica)

### Tensor de inercia

$$I_{ij} = \int_V \rho(x)(\delta_{ij} x^2 - x_i x_j) dV$$

## Derivadas en cartesiano

### Gradiente

$$(\nabla f)_i = \partial_i f = \frac{\partial f}{\partial x_i}$$

### Divergencia

$$\nabla \cdot \mathbf{v} = \partial_i v_i = \sum_i \frac{\partial v_i}{\partial x_i}$$

### Rotacional

$$(\nabla \times \mathbf{v})_i = \varepsilon_{ijk} \partial_j v_k$$

### Laplaciano

$$\nabla^2 f = \partial_i \partial_i f = \sum_i \frac{\partial^2 f}{\partial x_i^2}$$

## Ejemplos fisicos

### Campo gravitacional constante

$$\mathbf{g} = -g \hat{j} = (0, -g, 0)$$

### Oscilador armonico simple

$$\mathbf{F} = -k\mathbf{x} = (-kx_1, -kx_2, -kx_3)$$

### Flujo incompresible

$$\nabla \cdot \mathbf{v} = 0$$

## Diferencias con coordenadas curvilineas

| Propiedad | Cartesiano | Curvilíneo |
|-----------|------------|------------|
| Metrica | $\delta_{ij}$ | $g_{ij}(x)$ |
| Christoffel | $0$ | $\Gamma^i_{jk}$ |
| Derivada covariante | $\partial$ | $\nabla$ |
| Elemento volumen | $dx_1 \cdots dx_n$ | $\sqrt{g}\,dx^n$ |

## Errores comunes

1. **Confundir con general**: Olvidar que en cartesiano todo es mas simple.

2. **Indices**: Pensar que siempre se puede subir/bajar indices sin cuidado.

3. **Derivadas**: Usar $\partial$ en lugar de $\nabla$ cuando no corresponde.

## Ejercicios

### Ejercicio 1

Exprese el producto punto de dos vectores en notacion de Einstein.

### Ejercicio 2

Calcule la divergencia de $\mathbf{v} = (x, y, z)$.

### Ejercicio 3

Exprese el Laplaciano de $f(x,y,z)$.

### Ejercicio 4

Calcule el rotacional de $\mathbf{v} = (y, z, x)$.

### Ejercicio 5

Exprese la condicion de que un tensor sea simetrico.

### Ejercicio 6

Calcule $\partial_i x_i$ para el vector posicion.

### Ejercicio 7

Exprese el tensor de inercia de una esfera uniforme.

### Ejercicio 8

Calcule el gradiente de $f = x^2 + y^2 + z^2$.

### Ejercicio 9

Exprese la condicion de incompresibilidad.

### Ejercicio 10

Calcule $\nabla^2 (1/r)$ en $\mathbb{R}^3$.

### Ejercicio 11

Exprese la fuerza central $\mathbf{F} = f(r) \mathbf{r}$.

### Ejercicio 12

Calcule la divergencia de un campo radial.

### Ejercicio 13

Exprese la energia cinetica $T = \frac{1}{2} m v_i v_i$.

### Ejercicio 14

Calcule el Laplaciano en coordenadas cartesianas.

### Ejercicio 15

Exprese el principio de Arquimedes en notacion tensorial.

## Soluciones

### Solucion 1

$a_i b_i = a^i b^i$

### Solucion 2

$\partial_i v_i = \partial_x x + \partial_y y + \partial_z z = 3$

### Solucion 3

$\nabla^2 f = \partial_{11} f + \partial_{22} f + \partial_{33} f$

### Solucion 4

$(\nabla \times \mathbf{v})_i = \varepsilon_{ijk} \partial_j v_k = (1, 1, 1)$

### Solucion 5

$T_{ij} = T_{ji}$

### Solucion 6

$\partial_i x_i = \delta_{ii} = 3$

### Solucion 7

$I_{ij} = \frac{2}{5}mr^2 \delta_{ij}$ para una esfera

### Solucion 8

$\nabla f = (2x, 2y, 2z)$

### Solucion 9

$\partial_i v_i = 0$

### Solucion 10

$\nabla^2 (1/r) = 0$ para $r \neq 0$

### Solucion 11

$F_i = f(r) x_i$

### Solucion 12

$\nabla \cdot (g(r) x_i) = ng(r) + r g'(r)$

### Solucion 13

$T = \frac{1}{2} m v_i v_i$

### Solucion 14

$\nabla^2 f = \partial^2 f/\partial x^2 + \partial^2 f/\partial y^2 + \partial^2 f/\partial z^2$

### Solucion 15

$F_i = -\rho g \delta_{ij} V_j^{\text{sumergido}}$ o $F = -\rho g V_{\text{sumergido}} \hat{k}$
