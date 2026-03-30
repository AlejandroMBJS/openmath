---
title: Introduccion a los espacios de Riemann
description: Variedades riemannianas, metricas, geodesicas y estructura geometrica de espacios curvos.
---

# Introduccion a los espacios de Riemann

## Motivacion e intuicion

Un espacio de Riemann es una variedad diferenciable equipada con una metrica riemanniana $g_{ij}$. Esta estructura permite definir conceptos geometricos fundamentales como longitud de curvas, angulos, areas, volumenes, y geodesicas.

La diferencia principal con los espacios euclideos es que la geometria puede variar de punto a punto: el espacio puede estar "curvado".

## Definicion formal

Una **variedad riemanniana** es un par $(M, g)$ donde:
- $M$ es una variedad diferenciable de dimension $n$
- $g$ es una metrica riemanniana: un campo de tensores covariantes simetricos, definido positivo, $g_{ij} = g_{ji}$ con $g_{ij} v^i v^j > 0$ para todo $v \neq 0$

## Ejemplos de espacios riemannianos

### Espacio euclideo $\mathbb{R}^n$

$$g_{ij} = \delta_{ij}$$

Geometria plana, lineas rectas como geodesicas.

### Esfera $S^n$ de radio $R$

$$g_{ij} = R^2 \hat{g}_{ij}$$

donde $\hat{g}$ es la metrica estandar de la esfera unitaria.

### Metrica de Schwarzschild

Para un cuerpo esferico estatico de masa $M$:

$$ds^2 = -\left(1 - \frac{2GM}{r}\right)c^2 dt^2 + \left(1 - \frac{2GM}{r}\right)^{-1} dr^2 + r^2 d\Omega^2$$

### Metrica de Kerr

Para un cuerpo rotante con momento angular $J$:

$$ds^2 = -\left(1 - \frac{2GMr}{\rho^2}\right)c^2 dt^2 + \frac{\rho^2}{\Delta}dr^2 + \rho^2 d\theta^2 + \left(r^2 + a^2 + \frac{2GMra^2}{\rho^2}\right)\sin^2\theta d\phi^2 - \frac{4GMra}{\rho^2}cdt d\phi$$

donde $a = J/(Mc)$.

## Conceptos fundamentales

### Longitud de curva

$$L = \int_\lambda \sqrt{g_{ij} \frac{dx^i}{d\lambda} \frac{dx^j}{d\lambda}} \, d\lambda$$

### Geodesica

Linea de longitud estacionaria entre dos puntos:

$$\frac{d^2x^i}{d\lambda^2} + \Gamma^i_{jk}\frac{dx^j}{d\lambda}\frac{dx^k}{d\lambda} = 0$$

### Transport paralelo

Mantener la direccion de un vector al moverlo a lo largo de una curva.

## Propiedades geometricas

### Curvatura

- **Curvatura seccional**: $K(u, v)$
- **Tensor de Riemann**: $R^i_{\ jkl}$
- **Tensor de Ricci**: $R_{ij}$
- **Curvatura escalar**: $R$

### Variedad de curvatura constante

- $K > 0$: esfera
- $K = 0$: espacio euclideo
- $K < 0$: espacio hiperbolico

## Ejemplos de calculo

### Esfera $S^2$

$$ds^2 = R^2(d\theta^2 + \sin^2\theta d\phi^2)$$

$$\Gamma^\theta_{\phi\phi} = -\sin\theta\cos\theta$$
$$\Gamma^\phi_{\theta\phi} = \cot\theta$$

### Disco de Poincare

$$ds^2 = \frac{4}{(1 - r^2)^2}(dr^2 + r^2 d\phi^2)$$

## Aplicaciones fisicas

### Relatividad general

El espaciotiempo es una variedad de Riemann 4-dimensional (seudoriemanniana) con metrica $g_{\mu\nu}$.

### Mecanica clasica

El espacio de configuraciones puede tener estructura riemanniana (metrica cinetica).

### Teoria de cuerdas

Las varieties target en teorias de campos Conforme.

## Conexion de Levi-Civita

La unica conexion sin torsion que satisface $\nabla_k g_{ij} = 0$.

$$\Gamma^i_{jk} = \frac{1}{2}g^{il}(\partial_j g_{kl} + \partial_k g_{jl} - \partial_l g_{jk})$$

## Errores comunes

1. **Confundir con variedad**: Se necesita la metrica, no solo la estructura diferencial.

2. **Dimensiones**: $\mathbb{R}^n$ tiene $n$ dimensiones, pero el espacio tiempo tiene $4$.

3. **Indices**: Usar la metrica correcta para subir/bajar.

## Ejercicios

### Ejercicio 1

Exprese la metrica euclidea en $\mathbb{R}^3$ en coordenadas cartesianas.

### Ejercicio 2

Calcule el elemento de línea en coordenadas polares.

### Ejercicio 3

Exprese la longitud de una curva en terminos de la metrica.

### Ejercicio 4

Escriba la ecuacion geodesica.

### Ejercicio 5

Calcule los smbolos de Christoffel para la metrica euclidea.

### Ejercicio 6

Exprese la metrica de la esfera $S^2$ de radio $R$.

### Ejercicio 7

Calcule la curvatura escalar de $S^2$.

### Ejercicio 8

Exprese la metrica de Schwarzschild.

### Ejercicio 9

Calcule el volumen de una bola geodesica en $\mathbb{R}^n$.

### Ejercicio 10

Exprese la conexion de Levi-Civita.

### Ejercicio 11

Calcule el tensor de Riemann desde la metrica.

### Ejercicio 12

Exprese el principio variacional para geodesicas.

### Ejercicio 13

Calcule la distancia geodesica en el plano.

### Ejercicio 14

Exprese la metrica del disco de Poincare.

### Ejercicio 15

Calcule la geodesica radial desde el origen.

## Soluciones

### Solucion 1

$g_{ij} = \text{diag}(1, 1, 1)$

### Solucion 2

$ds^2 = dr^2 + r^2 d\theta^2$

### Solucion 3

$L = \int_\lambda \sqrt{g_{ij} \dot{x}^i \dot{x}^j}\, d\lambda$

### Solucion 4

$\ddot{x}^i + \Gamma^i_{jk}\dot{x}^j\dot{x}^k = 0$

### Solucion 5

$\Gamma^i_{jk} = 0$ en cartesianas

### Solucion 6

$ds^2 = R^2(d\theta^2 + \sin^2\theta d\phi^2)$

### Solucion 7

$R = 2/R^2$ para esfera de radio $R$

### Solucion 8

$ds^2 = -(1-2GM/r)c^2dt^2 + (1-2GM/r)^{-1}dr^2 + r^2 d\Omega^2$

### Solucion 9

$V_{euclideo}(r) = r^n \pi^{n/2}/\Gamma(n/2 + 1)$

### Solucion 10

$\Gamma^i_{jk} = \frac{1}{2}g^{il}(\partial_j g_{kl} + \partial_k g_{jl} - \partial_l g_{jk})$

### Solucion 11

$R^i_{\ jkl} = \partial_k\Gamma^i_{jl} - \partial_l\Gamma^i_{jk} + \Gamma^i_{km}\Gamma^m_{jl} - \Gamma^i_{lm}\Gamma^m_{jk}$

### Solucion 12

$\delta\int \sqrt{g_{ij}\dot{x}^i\dot{x}^j} d\lambda = 0$

### Solucion 13

$d = \sqrt{(x_1-x_2)^2 + (y_1-y_2)^2}$

### Solucion 14

$ds^2 = \frac{4}{(1-r^2)^2}(dr^2 + r^2 d\phi^2)$

### Solucion 15

$r(\lambda) = \lambda$ lineal con $\theta$ constante
