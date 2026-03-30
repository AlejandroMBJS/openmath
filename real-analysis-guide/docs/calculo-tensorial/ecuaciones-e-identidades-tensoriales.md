---
title: Ecuaciones e identidades tensoriales
description: Identidades tensoriales importantes, simplificaciones y calculos simbolicos.
---

# Ecuaciones e identidades tensoriales

## Motivacion e intuicion

El algebra tensorial esta llena de identidades utiles que simplifican calculos y expresan propiedades geometricas de manera elegante. Dominar estas identidades es esencial para trabajar eficientemente con tensores.

## Identidades fundamentales

### Identidad de Bianchi (primera)

$$\nabla_{[i} R_{jk]l}^{\ m} = 0$$

### Identidad de Bianchi contraida (segunda)

$$\nabla_{[i} R_{jk]l}^{\ m} = 0$$

Despues de contraer: $\nabla_\mu G^{\mu\nu} = 0$

### Identidad de Ricci

$$\nabla_i \nabla_j T^{i_1 \cdots i_r}_{j_1 \cdots j_s} - \nabla_j \nabla_i T^{i_1 \cdots i_r}_{j_1 \cdots j_s} = -\sum_{m=1}^r R^{i_m}_{\ i k j} T^{i_1 \cdots i_{m-1} k i_{m+1} \cdots i_r}_{j_1 \cdots j_s} + \sum_{m=1}^s R^{k}_{\ j_m i j} T^{i_1 \cdots i_r}_{j_1 \cdots j_{m-1} k j_{m+1} \cdots j_s}$$

### Identidad de Jacobi

$$[X, [Y, Z]] + [Y, [Z, X]] + [Z, [X, Y]] = 0$$

### Identidad de derivation del determinante

$$\delta(\sqrt{|g|}) = \frac{1}{2}\sqrt{|g|} g^{ij} \delta g_{ij}$$

## Identidades con la metrica

### Derivada covariante de la metrica

$$\nabla_k g_{ij} = 0$$

### Derivada de la metrica inversa

$$\nabla_k g^{ij} = 0$$

### Relacion entre Christoffel y metrica

$$\Gamma^i_{jk} = \frac{1}{2}g^{il}(\partial_j g_{kl} + \partial_k g_{jl} - \partial_l g_{jk})$$

## Identidades con Levi-Civita

### Propiedades del simbolo

$$\varepsilon_{i_1 \ldots i_n} \varepsilon^{i_1 \ldots i_n} = (-1)^{n(n-1)/2} n!$$

### Relacion con determinante

$$\varepsilon_{i_1 \ldots i_n} \varepsilon_{j_1 \ldots j_n} = \det(\delta_{i_1 j_1} \ldots \delta_{i_n j_n})$$

### Dual de un tensor antisimetrico

$$(*omega)_{i_1 \ldots i_{n-2}} = \frac{1}{(n-2)!} \varepsilon_{i_1 \ldots i_{n-2} j_1 j_2} omega^{j_1 j_2}$$

## Identidades de contractacion

### Contraccion del tensor de Riemann

$$R_{ij} = R^k_{\ ikj}$$

### Curvatura escalar

$$R = g^{ij} R_{ij} = R^i_{\ i}$$

### Identidad de Bianchi para Ricci

$$\nabla^i R_{ij} = \frac{1}{2} \partial_j R$$

## Identidades algebraicas

### Decomposicion de un tensor

$$T_{ij} = T_{(ij)} + T_{[ij]}$$

### Producto de simetrias

$$(ab)_{(ij)} = \frac{1}{2}(ab + ba)$$

### Producto de antisimetrias

$$[ab]_{[ij]} = \frac{1}{2}(ab - ba)$$

## Errores comunes

1. **No contrae indices correctamente**: Siempre verificar que los indices que se contraen son uno arriba y uno abajo.

2. **Bianchi**: Olvidar el factor de antisimetrizacion.

3. **Levi-Civita**: No es tensor, es densidad.

## Ejercicios

### Ejercicio 1

Exprese la identidad de Bianchi en 2D.

### Ejercicio 2

Calcule $\varepsilon_{ijk}\varepsilon^{ijk}$.

### Ejercicio 3

Exprese la derivadadel determinante.

### Ejercicio 4

Verifique la identidad de Ricci.

### Ejercicio 5

Exprese $\nabla_k g_{ij} = 0$.

### Ejercicio 6

Calcule el numero de terminos en Bianchi.

### Ejercicio 7

Exprese la descomposicion simetrica/antisimetrica.

### Ejercicio 8

Derive la formula de Christoffel desde la metrica.

### Ejercicio 9

Exprese el tensor de Einstein.

### Ejercicio 10

Calcule $\varepsilon_{ijk}\varepsilon^{ijm}$.

### Ejercicio 11

Exprese la identidad de Jacobi.

### Ejercicio 12

Derive la contracted de Bianchi.

### Ejercicio 13

Exprese el Laplaciano covariante.

### Ejercicio 14

Calcule la divergencia covariante.

### Ejercicio 15

Exprese el rotacional en notacion tensorial.

## Soluciones

### Solucion 1

$\nabla_i R_{jkl} + \nabla_j R_{kli} + \nabla_k R_{lij} = 0$

### Solucion 2

$6$ en 3D.

### Solucion 3

$\delta\sqrt{|g|} = \frac{1}{2}\sqrt{|g|} g^{ij} \delta g_{ij}$

### Solucion 4

$\nabla^i R_{ij} = \frac{1}{2} \partial_j R$

### Solucion 5

$\partial_k g_{ij} - \Gamma^l_{ki}g_{lj} - \Gamma^l_{kj}g_{il} = 0$

### Solucion 6

$3! = 6$ terminos en 3D.

### Solucion 7

$T_{(ij)} = \frac{1}{2}(T_{ij} + T_{ji})$, $T_{[ij]} = \frac{1}{2}(T_{ij} - T_{ji})$

### Solucion 8

De $\nabla_k g_{ij} = 0$: $\partial_k g_{ij} = \Gamma^l_{ki}g_{lj} + \Gamma^l_{kj}g_{il}$, resolver para $\Gamma$.

### Solucion 9

$G_{ij} = R_{ij} - \frac{1}{2}g_{ij}R$

### Solucion 10

$\varepsilon_{ijk}\varepsilon^{ijm} = 2\delta^m_k$

### Solucion 11

$[X, [Y, Z]] + [Y, [Z, X]] + [Z, [X, Y]] = 0$

### Solucion 12

$\nabla^\mu G_{\mu\nu} = 0$

### Solucion 13

$\nabla^2 f = g^{ij}\nabla_i \nabla_j f$

### Solucion 14

$\nabla_\mu V^\mu = \frac{1}{\sqrt{|g|}} \partial_\mu(\sqrt{|g|} V^\mu)$

### Solucion 15

$(\nabla \times A)_i = \varepsilon_{ijk} \partial_j A_k$
