---
title: Operaciones y algebra con tensores
description: Producto tensor, contraccion, simetrizacion, antisimetrizacion y algebra tensorial.
---

# Operaciones y algebra con tensores

## Motivacion e intuicion

El algebra tensorial proporciona las herramientas para manipular objetos geometricos de manera sistematica. Las operaciones basicas (producto, contraccion, symmetrization) son analogas a las operaciones algebraicas familiares, pero adaptadas a la estructura de indices multiples.

## Operaciones fundamentales

### Producto tensorial

Dados dos tensores $A$ y $B$, su producto tensorial es:

$$(A \otimes B)^{i_1 \ldots i_r i'_1 \ldots i'_{r'}}_{j_1 \ldots j_s j'_1 \ldots j'_{s'}} = A^{i_1 \ldots i_r}_{j_1 \ldots j_s} B^{i'_1 \ldots i'_{r'}}_{j'_1 \ldots j'_{s'}}$$

**Ejemplo:**
$$v^i \otimes w_j \quad \text{(tipo } (1,1)\text{)}$$

### Contraccion

La contraccion de indices convierte un tensor $(r,s)$ en uno $(r-1, s-1)$:

$$T^{i_1 \ldots i_{r-1} k}_{j_1 \ldots j_{s-1} k} \quad \text{(se suma sobre } k\text{)}$$

**Ejemplo:** La traza:
$$\delta^i_j A^j_i = A^i_i$$

### Simetrizacion

Para symmetrizar indices:

$$T_{(i_1 \ldots i_n)} = \frac{1}{n!} \sum_{\sigma} T_{i_{\sigma(1)} \ldots i_{\sigma(n)}}$$

donde la suma es sobre todas las permutaciones.

**Ejemplo:**
$$T_{(ij)} = \frac{1}{2}(T_{ij} + T_{ji})$$

### Antisimetrizacion

Para antisymmetrizar:

$$T_{[i_1 \ldots i_n]} = \frac{1}{n!} \sum_{\sigma} \text{sgn}(\sigma) T_{i_{\sigma(1)} \ldots i_{\sigma(n)}}$$

**Ejemplo:**
$$T_{[ij]} = \frac{1}{2}(T_{ij} - T_{ji})$$

## Propiedades algebraicas

### Conmutatividad del producto tensor

$$A \otimes B = B \otimes A \quad \text{(si y solo si son escalares)}$$

### Asociatividad

$$(A \otimes B) \otimes C = A \otimes (B \otimes C)$$

### Distributividad

$$A \otimes (B + C) = A \otimes B + A \otimes C$$

## Permutacion de indices

Los indices pueden permutarse si el tensor tiene la symmetria apropiada:

$$T_{ij} \rightarrow T_{ji}$$

Esto es valido solo si $T_{ij} = T_{ji}$ (tensor simetrico).

## Elevacion y descendcion de indices

Usando la metrica:

- Elevar: $v^i = g^{ij} v_j$
- Bajar: $v_i = g_{ij} v^j$

## Reglas de contraccion multiple

Para contraer multiples indices:

$$A^i_{\ i} = A^1_{\ 1} + A^2_{\ 2} + \cdots + A^n_{\ n}$$

Para dos contracciones:

$$g_{ij} A^{ij} = \sum_{i,j} \delta_{ij} A^{ij} = \sum_i A^{ii}$$

## Ejemplos operativos

### Ejemplo 1: Producto de vectores

$$(u \cdot v) = u_i v^i = g_{ij} u^i v^j$$

### Ejemplo 2: Divergencia

$$\nabla_i v^i = \partial_i v^i + \Gamma^i_{ij} v^j$$

### Ejemplo 3: Rotacional

$$\varepsilon^{ijk} \partial_j v_k$$

### Ejemplo 4: Laplaciano

$$\nabla^2 f = g^{ij} \partial_i \partial_j f$$

## Errores comunes

1. **Contrar indices incorrectamente**: No se puede contraer $A^{ij}$ con $B_{ij}$ directamente sin usar la metrica.

2. **Mezclar tipos**: Un tensor tipo $(2,0)$ no puede sumarse con uno $(1,1)$.

3. **Olvidar symmetrization normalization**: El factor $1/n!$ es esencial.

4. **Symmetrizar indices no simetricos**: Esto puede dar zero.

## Ejercicios

### Ejercicio 1

Calcule el producto tensor $v \otimes w$ con $v = (1, 2)$ y $w = (3, 4)$.

### Ejercicio 2

Contriga los indices de $A^{ij} = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$.

### Ejercicio 3

Symmetrize el tensor $T_{ij} = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$.

### Ejercicio 4

Antisymmetrize el tensor del Ejercicio 3.

### Ejercicio 5

Calcule $g_{ij} v^i w^j$ con $v = (1, 0, 0)$ y $w = (0, 1, 0)$.

### Ejercicio 6

Exprese $\delta_{ij} A^{ij}$ en notacion de Einstein.

### Ejercicio 7

Calcule el producto tensor de dos vectores de dimension 3.

### Ejercicio 8

Cuente las operaciones de symmetrization necesarias para symmetrizar 3 indices.

### Ejercicio 9

Exprese la divergencia $\nabla_i v^i$ en 3D cartesianas.

### Ejercicio 10

Calcule el rotacional de un campo vectorial.

### Ejercicio 11

Exprese el Laplaciano de un campo escalar.

### Ejercicio 12

Calcule la contraccion doble $g_{ij} g^{kl} T^{ij}_{\ kl}$.

### Ejercicio 13

Symmetrize el tensor $T_{ijk}$ con symmetria parcial.

### Ejercicio 14

Exprese el producto cruz usando el simbolo de Levi-Civita.

### Ejercicio 15

Calcule el commutador de dos vectores covariantes.

## Soluciones

### Solucion 1

$(v \otimes w)^{ij} = \begin{pmatrix} 1\cdot3 & 1\cdot4 \\ 2\cdot3 & 2\cdot4 \end{pmatrix} = \begin{pmatrix} 3 & 4 \\ 6 & 8 \end{pmatrix}$

### Solucion 2

$A^i_i = 1 + 4 = 5$

### Solucion 3

$T_{(ij)} = \begin{pmatrix} 1 & 2.5 \\ 2.5 & 4 \end{pmatrix}$

### Solucion 4

$T_{[ij]} = \begin{pmatrix} 0 & -0.5 \\ 0.5 & 0 \end{pmatrix}$

### Solucion 5

$g_{ij} v^i w^j = \delta_{ij} v^i w^j = 0$ (vectores ortogonales)

### Solucion 6

$\delta_{ij} A^{ij} = A^{ii} = A^1_1 + A^2_2$

### Solucion 7

En 3D: $(u \otimes v)^{ijk} = u^i v^j \delta^{kl}$ tiene 27 componentes

### Solucion 8

$3! = 6$ terminos

### Solucion 9

$\partial v^x/\partial x + \partial v^y/\partial y + \partial v^z/\partial z$

### Solucion 10

$(\nabla \times \mathbf{v})_i = \varepsilon_{ijk} \partial_j v_k$

### Solucion 11

$\nabla^2 f = \partial^2 f/\partial x^2 + \partial^2 f/\partial y^2 + \partial^2 f/\partial z^2$

### Solucion 12

$T^{ij}_{\ ij}$ (suma sobre $i$ y $j$)

### Solucion 13

$T_{(ij)k} = \frac{1}{2}(T_{ijk} + T_{jik})$

### Solucion 14

$(\mathbf{u} \times \mathbf{v})_i = \varepsilon_{ijk} u_j v_k$

### Solucion 15

$[u, v]_i = u^j \partial_j v_i - v^j \partial_j u_i$
