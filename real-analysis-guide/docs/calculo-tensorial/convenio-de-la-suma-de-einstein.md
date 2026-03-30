---
title: Convenio de la suma de Einstein
description: Convencion de indices repetidos, rango de indices, aplicaciones en algebra tensorial y notacion simplificada.
---

# Convenio de la suma de Einstein

## Motivacion e intuicion

En el calculo tensorial, las expresiones con sumatorias son ubicuas. Por ejemplo, el producto escalar de dos vectores en $\mathbb{R}^n$ se escribe como:

$$
\mathbf{a} \cdot \mathbf{b} = \sum_{i=1}^n a_i b_i .
$$

El **convenio de la suma de Einstein** elimina la necesidad de escribir el simbolo de sumatoria $\sum$,规定 que todo indice que aparece exactamente dos veces en un termino (una vez como subindice y otra como superindice, o ambas como subindices/supraindices) se suma implicitamente sobre todo su rango.

Asi, $a_i b_i$ significa $\sum_i a_i b_i$, y $g_{ij} u^j$ significa $\sum_j g_{ij} u^j$.

Este convenios reduce dramatically la longitud de las expresiones y hace que las formulas tensoriales sean mas compactas y esteticas.

## Prerrequisitos

- Algebra lineal basica.
- Operaciones con matrices y vectores.
- Concepto de rango de un tensor.

## Definiciones formales

### Regla del indice repetido

En una expresion tensorial, un indice que aparece **dos veces** (ya sea como subindice o supraindice) implica sumacion sobre todo el rango de ese indice (típicamente $1, 2, \dots, n$ o $1, 2, 3, 4$ en relatividad).

$$
a_i b_i \equiv \sum_{i=1}^n a_i b_i .
$$

### Indices mudos

Los indices que se suman se llaman **indices mudos** (dummy indices). Pueden renombrarse sin cambiar el significado:

$$
a_i b_i = a_j b_j = a_k b_k .
$$

### Indices libres

Los indices que aparecen una sola vez en un termino son **indices libres** y NO se suman:

$$
c_{ij} = a_i b_j
$$

significa que $c_{ij}$ tiene dos indices libres: $i$ y $j$.

## Ejemplos basicos

### Ejemplo 1: Producto escalar

$$
\mathbf{a} \cdot \mathbf{b} = a_i b_i = a_1 b_1 + a_2 b_2 + \cdots + a_n b_n .
$$

### Ejemplo 2: Producto matriz-vector

$$
y_i = A_{ij} x_j .
$$

Esto representa $y_i = \sum_j A_{ij} x_j$.

### Ejemplo 3: Traza de una matriz

$$
\text{tr}(A) = A_{ii} = \sum_i A_{ii} .
$$

### Ejemplo 4: Norma de un vector

$$
\|\mathbf{a}\|^2 = g_{ij} a^i a^j .
$$

Aqui $g_{ij}$ es la metrica y $a^i, a^j$ son las componentes contravariantes.

## Reglas fundamentales

### Regla 1: Un indice nunca aparece mas de dos veces

Expresiones como $a_i b_i c_i$ son **ilegales** porque $i$ aparece tres veces.

### Regla 2: Los indices repetidos deben ser un subindice y un supraindice

En notacion mixta (arriba y abajo):

$$
T^i_{\ j} u_j \quad \text{(legal)} .
$$

En notacion puramente covariante:

$$
T_{ij} u_j \quad \text{(legal)} .
$$

### Regla 3: Indices libres mantienen su posicion

Si un indice aparece libre como supraindice, debe permanecer como supraindice en todo termino de la ecuacion:

$$
y^i = A^i_j x_j \quad \text{(correcto)} .
$$

NO podemos escribir $y^i = A_{ij} x_j$ mixing positions.

## Contraccion e indices contravariantes

### Contraccion de un tensor

Un tensor de orden $(p, q)$ tiene $p$ indices contravariantes (arriba) y $q$ indices covariantes (abajo). **Contraccion** significa igualar un indice superior con uno inferior y sumar:

$$
T^i_{\ i} \quad \text{es la traza}.
$$

### Ejemplo: Producto interno de tensores

$$
T_{ij} S^{jk} = \sum_k T_{ij} S^{jk} .
$$

## Convenciones comunes

### Rango dimensional

En fisica matematica:
- **3D**: indices $i, j, k = 1, 2, 3$
- **4D** (espaciotiempo): indices $\mu, \nu = 0, 1, 2, 3$
- **nD**: indices $i, j, \ldots = 1, \ldots, n$

### Delta de Kronecker

$$
\delta^i_j = \begin{cases} 1 & i = j, \\ 0 & i \neq j. \end{cases}
$$

En notacion de Einstein:

$$
\delta^i_i = n \quad \text{(suma sobre todos los valores)} .
$$

## Ejemplos avanzados

### Ejemplo 5: Producto triple escalar

$$
(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c} = \varepsilon_{ijk} a_i b_j c_k ,
$$

donde $\varepsilon_{ijk}$ es el simbolo de Levi-Civita.

### Ejemplo 6: Transformacion de coordenadas

$$
x^{\prime i} = \frac{\partial x^{\prime i}}{\partial x^j} x^j .
$$

La derivada parcial $\frac{\partial x^{\prime i}}{\partial x^j}$ es un tensor de tipo $(1,1)$.

### Ejemplo 7: Componentes de la metrica

$$
ds^2 = g_{ij} dx^i dx^j .
$$

Esta es la expresion del intervalo infinitesimal en geometria riemanniana.

## Errores comunes

1. **Olvidar que se sums**: $a_i b_i$ no es un par de numeros, es la suma sobre todos los valores.

2. **Indices repetidos en ambos niveles**: $T_{ii}$ sums sobre $i$, pero $T_{ij} u_j$ solo sums sobre $j$.

3. **Mezclar indices**: $y_i = A_{ij} x^j$ mixs contravariante y covariante sin transformacion adecuada.

4. **Renombrar indices bound incorrectly**: $a_i b_i = a_j b_j$ esta bien, pero no se puede tener $a_i b_i = a_i b_j$.

5. **Indices libres en posiciones diferentes**: En $T^i_j u^j = v^i$, el indice $j$ se contrae, pero $i$ es libre en ambos lados.

## Resumen operativo

| Expresion | Significado |
|-----------|-------------|
| $a_i b_i$ | $\sum_i a_i b_i$ |
| $A_{ij} x^j$ | $\sum_j A_{ij} x^j$ |
| $T^i_{\ i}$ | $\sum_i T^i_{\ i}$ (traza) |
| $g_{ij} dx^i dx^j$ | $\sum_{i,j} g_{ij} dx^i dx^j$ |

El convenio de Einstein es la base de toda notacion tensorial. Dominarlo es indispensable para trabajar en geometria diferencial, relatividad general, mecanica de medios continuos y fisica teorica avanzada.

## Ejercicios

### Ejercicio 1

Escriba las siguientes expresiones usando el convenio de Einstein:
- (a) $\sum_{i=1}^3 a_i b_i$
- (b) $\sum_{j=1}^n \sum_{i=1}^n A_{ij} x_i y_j$
- (c) $\sum_{k=1}^3 T_{ijk} u^k$

### Ejercicio 2

Expanda las siguientes expresiones en notacion sums:
- (a) $a_i b_i$
- (b) $g_{ij} u^i v^j$
- (c) $\delta^i_i$

### Ejercicio 3

Identifique los indices libres y los indices mudos en:
- (a) $c_{ij} = a_i b_j$
- (b) $y_i = A_{ij} x_j$
- (c) $T_{ij} = g_{ik} g_{jl} T^{kl}$

### Ejercicio 4

Escriba la matriz identidad usando el convenio de Einstein.

### Ejercicio 5

Sea $A_{ij}$ una matriz simetrica. Escriba la condicion de simetria usando indices.

### Ejercicio 6

Exprese la traza de una matriz $A_{ij}$ en notacion de Einstein.

### Ejercicio 7

Escriba el producto de una matriz $A_{ij}$ por un vector $x_j$ usando el convenio.

### Ejercicio 8

Que esta mal en la expresion $a_i b_i c_i$?

### Ejercicio 9

Escriba $g_{ij} g^{jk} = \delta^i_k$ usando el convenio de Einstein.

### Ejercicio 10

Exprese el determinante de una matriz $2 \times 2$ usando el simbolo de Levi-Civita y el convenio de Einstein.

### Ejercicio 11

Escriba las ecuaciones de transformacion para un vector contravariante:

$$
x^{\prime i} = \frac{\partial x^{\prime i}}{\partial x^j} x^j .
$$

### Ejercicio 12

Exprese la divergencia de un vector $V^i$ en coordenadas cartesianas.

### Ejercicio 13

Escriba el Laplaciano de una funcion escalar $\phi$ en tres dimensiones.

### Ejercicio 14

Exprese la condicion de que un tensor $T_{ij}$ sea antisimetrico.

### Ejercicio 15

Escriba la formula para las componentes covariantes de un vector dado sus componentes contravariantes y la metrica.

## Soluciones

### Solucion 1

(a) $a_i b_i$ (suma sobre $i = 1$ a $3$)

(b) $A_{ij} x_i y_j$ (suma sobre $i$ y $j$)

(c) $T_{ijk} u^k$ (suma sobre $k$)

### Solucion 2

(a) $a_1 b_1 + a_2 b_2 + a_3 b_3$

(b) $g_{11} u^1 v^1 + g_{12} u^1 v^2 + g_{21} u^2 v^1 + g_{22} u^2 v^2 + \cdots$

(c) $\delta^i_i = \delta^1_1 + \delta^2_2 + \cdots + \delta^n_n = n$

### Solucion 3

(a) $i$ y $j$ son libres, no hay indices mudos

(b) $i$ es libre, $j$ es mudo (se suma)

(c) $i$ y $j$ son libres, $k$ es mudo

### Solucion 4

$\delta^i_j$

### Solucion 5

$A_{ij} = A_{ji}$

### Solucion 6

$A_{ii} = \sum_i A_{ii}$

### Solucion 7

$y_i = A_{ij} x_j$

### Solucion 8

El indice $i$ aparece tres veces, violando la regla del convenio.

### Solucion 9

$g_{ij} g^{jk} = \delta^i_k$ (suma sobre $j$)

### Solucion 10

$\det(A) = \varepsilon_{ij} \varepsilon^{kl} A^i_{\ k} A^j_{\ l}$  o en 2D: $\det = A^i_{\ i} A^j_{\ j} - A^i_{\ j} A^j_{\ i}$ con indices elevados por la metrica.

### Solucion 11

$x^{\prime i} = \frac{\partial x^{\prime i}}{\partial x^j} x^j$ (suma sobre $j$)

### Solucion 12

$\nabla_i V^i = \frac{\partial V^i}{\partial x^i}$ (suma sobre $i$)

### Solucion 13

$\nabla^2 \phi = \delta^{ij} \frac{\partial \phi}{\partial x^i \partial x^j}$ o $\frac{\partial^2 \phi}{\partial x^i \partial x^i}$

### Solucion 14

$T_{ij} = -T_{ji}$

### Solucion 15

$V_i = g_{ij} V^j$ (suma sobre $j$)
