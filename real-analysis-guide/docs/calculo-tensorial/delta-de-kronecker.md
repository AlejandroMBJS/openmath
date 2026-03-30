---
title: Delta de Kronecker
description: Definicion, propiedades algebraicas, uso en contractions y elevacion/descension de indices.
---

# Delta de Kronecker

## Motivacion e intuicion

La delta de Kronecker $\delta^i_j$ es el análogo discreto de la funcion identidad. Aparece constantemente en algebra tensorial cuando necesitamos:

- Escribir la matriz identidad en notacion tensorial
- Contraer indices para obtener escalares
- Transformar entre componentes covariantes y contravariantes

Esencialmente, $\delta^i_j$ es el "operador de seleccion" que picking el componente correspondiente cuando se contrae con un tensor.

## Definicion formal

$$
\delta^i_j = \begin{cases} 1 & \text{si } i = j, \\ 0 & \text{si } i \neq j. \end{cases}
$$

En notacion de Einstein:
- $\delta^i_i$ (con indices iguales, sums implícitamente) = numero de dimensiones $n$
- $\delta^i_j a_j = a^i$ (eleva el indice)

## Propiedades fundamentales

### Simetria

$$\delta^i_j = \delta_j^i$$

### Traza

$$\delta^i_i = n$$

donde $n$ es la dimension del espacio.

### Propiedad de elevacion de indices

$$\delta^i_j v^j = v^i$$

$$\delta^i_j T_{ik} = T_{ik} \quad \text{(eleva el segundo indice)}$$

### Propiedad de descendcion

$$\delta^i_j v_i = v_j$$

## Ejemplos de uso

### Ejemplo 1: Elevar un indice

Si $u_j$ son las componentes covariantes de un vector, las contravariantes se obtienen mediante:

$$u^i = g^{ij} u_j$$

Cuando $g^{ij} = \delta^{ij}$ (metrica euclidea):

$$u^i = \delta^{ij} u_j = u_j$$

### Ejemplo 2: Traza de un tensor

$$\text{tr}(T) = T^i_{\ i} = \delta^i_j T^j_{\ i}$$

### Ejemplo 3: Producto interno

$$g_{ij} u^i v^j = \delta_i^j u^i v_j = u_j v^j = \mathbf{u} \cdot \mathbf{v}$$

## Propiedades algebraicas

### Conmutatividad

$$\delta^i_j \delta^j_k = \delta^i_k$$

### Orthogonalidad

$$\delta^i_j \delta^k_l = \delta^i_l \delta^j_k$$ (no, en general)

### Identidad de elevacion

$$\delta^i_j \delta^j_k = \delta^i_k$$

## Contraccion con la delta

### Regla general

Cuando un indice de un tensor es igual al delta y se contrae, el resultado es el tensor con ese indice elevado o descendido:

$$T^i_{\ j} \delta^j_k = T^i_{\ k}$$

$$g_{ij} \delta^{jk} = g_i^{\ k} = g^{kj} g_{ij}$$

## Errores comunes

1. **Confundir $\delta^i_i$ con 1**: $\delta^i_i = n$ (la dimension).

2. **Olvidar que la delta es isotrópica**: $\delta^i_j$ tiene las mismas componentes en cualquier sistema de coordenadas en un espacio euclideo.

3. **No hacer la suma**: $\delta^i_j v^j$ no es simplemente $v^j$; es $v^i$.

## Ejercicios

### Ejercicio 1

Calcule $\delta^i_i$ en $\mathbb{R}^3$.

### Ejercicio 2

Simplifique: $\delta^i_j \delta^j_k$

### Ejercicio 3

Exprese la matriz identidad $n \times n$ usando la delta.

### Ejercicio 4

Calcule la traza de la matriz identidad.

### Ejercicio 5

Si $v_i = (1, 2, 3)$, calcule $v^i = \delta^i_j v_j$.

### Ejercicio 6

Demuestre: $\delta^i_j \delta^j_k \delta^k_i = n^2$

### Ejercicio 7

Exprese la proyeccion sobre el plano $x^3 = 0$ usando la delta.

### Ejercicio 8

Simplifique: $g_{ij} \delta^j_k \delta^k_l$

### Ejercicio 9

Calcule $\delta^1_1 + \delta^2_2 + \delta^3_3$ en 3D.

### Ejercicio 10

Si $A_{ij}$ es una matriz, exprese su diagonal principal usando la delta.

### Ejercicio 11

Demuestre que $\delta^i_j$ es un tensor de tipo $(1,1)$.

### Ejercicio 12

Exprese la condicion $v^i w_i = 0$ (ortogonalidad) usando la delta.

### Ejercicio 13

Calcule el numero de componentes no nulas de $\delta^i_j$ en dimension $n$.

### Ejercicio 14

Exprese el producto de matrices usando la delta.

### Ejercicio 15

Simplifique: $\delta^i_k \delta^k_j - \delta^i_j \delta^k_k$

## Soluciones

### Solucion 1

$\delta^i_i = \delta^1_1 + \delta^2_2 + \delta^3_3 = 1 + 1 + 1 = 3$

### Solucion 2

$\delta^i_j \delta^j_k = \delta^i_k$

### Solucion 3

$(\delta^i_j)$

### Solucion 4

Traza de la identidad = $\delta^i_i = n$

### Solucion 5

$v^1 = \delta^1_j v_j = v_1 = 1$, $v^2 = 2$, $v^3 = 3$. Luego $v^i = (1, 2, 3)$.

### Solucion 6

$\delta^i_j \delta^j_k \delta^k_i = \delta^i_i \delta^k_k = n \cdot n = n^2$

### Solucion 7

$P_{ij} = \delta^i_j - \delta^i_3 \delta^3_j = \delta^i_j - \delta^i_3 \delta^3_j$

### Solucion 8

$g_{ij} \delta^j_k \delta^k_l = g_{ij} \delta^j_l = g_{il}$

### Solucion 9

$1 + 1 + 1 = 3$

### Solucion 10

$\delta^j_i A_{jj} = A_{ii}$

### Solucion 11

$\delta^i_j$ transforma como $(1,1)$ bajo cambios de coordenadas, por su definicion en terminos del Jacobiano.

### Solucion 12

$v^i w_i = \delta^i_j v^j w_i = v^j w_j = 0$ (en metrica euclidea)

### Solucion 13

Hay $n$ componentes no nulas (los de la diagonal).

### Solucion 14

$(AB)^i_j = A^i_k \delta^k_j = A^i_j$

### Solucion 15

$\delta^i_k \delta^k_j - \delta^i_j \delta^k_k = \delta^i_j - n \delta^i_j = (1-n)\delta^i_j$
