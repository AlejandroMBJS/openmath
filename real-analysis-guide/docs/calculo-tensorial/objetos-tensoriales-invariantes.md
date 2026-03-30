---
title: Objetos tensoriales invariantes
description: Escalares invariants, objetos geometricos independientes del sistema de coordenadas y propiedades tensorias.
---

# Objetos tensoriales invariantes

## Motivacion e intuicion

Un objeto geometrico que no depende del sistema de coordenadas se llama invariante. Los escalares son los invariantes mas simples, pero hay otros objetos con indices que pueden ser invariantes bajo transformaciones particulares.

## Escalares invariants

Un escalar $\phi$ es invariante si:

$$\phi' = \phi$$

para cualquier transformacion de coordenadas.

## Vectores invariants

Un vector $v^i$ es invariant bajo transformaciones si:

$$v'^i = v^i$$

Esto requiere que transforme como:

$$v^i = \frac{\partial x^i}{\partial x'^j} v'^j$$

## Tensor metrico como invariante

La metrica $g_{ij}$ transforma como:

$$g'_{ij} = \frac{\partial x^k}{\partial x'^i} \frac{\partial x^l}{\partial x'^j} g_{kl}$$

Pero $g_{ij} dx^i dx^j$ es un invariante (elemento de linea).

## Formas diferenciales invariants

### 1-forma

$$\omega = \omega_i dx^i$$

Es invariante porque $\omega_i$ transforma covariantemente.

### k-forma

$$\alpha = \frac{1}{k!}\alpha_{i_1 \ldots i_k} dx^{i_1} \otimes \ldots \otimes dx^{i_k}$$

## Densidades scalars

Una densidad de peso $w$ transforma como:

$$\rho' = |J|^w \rho$$

donde $|J|$ es el determinante del Jacobiano.

El elemento de volumen $\sqrt{|g|}$ es una densidad de peso 1.

## Contracciones invariants

### Traza

$$\text{tr}(T) = T^i_{\ i}$$

Es invariante porque los indices repetidos implican suma.

### Producto interno

$$g_{ij} v^i w^j = v_i w^i$$

Es invariante.

## Derivadas covariantes

$$\nabla_k T^{i_1 \ldots i_r}_{j_1 \ldots j_s}$$

Es un tensor (invariante bajo transformaciones).

## Errores comunes

1. **Confundir componentes con objeto**: Las componentes cambian, el objeto geometrico no.

2. **Olvidar la transformacion del Jacobiano**: Para densidades se necesita $|J|$.

3. **Pensar que todo es invariante**: Los simbolos de Christoffel no son tensores.

## Ejercicios

### Ejercicio 1

Es la temperatura un escalar invariante?

### Ejercicio 2

Exprese la condicion de que $v^i$ sea invariante.

### Ejercicio 3

Es $\sqrt{|g|}$ una densidad?

### Ejercicio 4

Exprese la invariancia del elemento de linea.

### Ejercicio 5

Calcule $\delta^i_i$ - es invariante?

### Ejercicio 6

Exprese la invariancia del producto interno.

### Ejercicio 7

Es $R_{ijkl}$ un tensor invariante?

### Ejercicio 8

Exprese la invariancia de la curvatura escalar.

### Ejercicio 9

Calcule la traza de la identidad.

### Ejercicio 10

Exprese la invariancia de la divergencia covariante.

## Soluciones

### Solucion 1

Si, la temperatura no depende del sistema de coordenadas.

### Solucion 2

$v'^i = v^i$ requiere transformacion especial.

### Solucion 3

Si, tiene peso $w = 1$.

### Solucion 4

$ds^2 = g_{ij} dx^i dx^j$ es el mismo en cualquier sistema.

### Solucion 5

$\delta^i_i = n$ depende de la dimension, es un escalar.

### Solucion 6

$g_{ij} v^i w^j$ da el mismo valor en cualquier sistema.

### Solucion 7

Si, transforma como tensor bajo difeomorfismos.

### Solucion 8

$R = g^{ij}R_{ij}$ es un escalar invariante.

### Solucion 9

$\delta^i_i = n$

### Solucion 10

$\nabla_i v^i$ es un escalar.
