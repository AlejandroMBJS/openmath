---
title: Criterios de tensorialidad
description: Como verificar si un objeto es tensor, pruebas de covarianza, invariancia gauge y transformaciones.
---

# Criterios de tensorialidad

## Motivacion e intuicion

No todo objeto con indices es un tensor. Para que un objeto几何rico bien definido sea un tensor, debe transformar de manera específica bajo cambios de coordenadas. Los criterios de tensorialidad permiten verificar si un objeto dado es realmente un tensor.

## Regla fundamental de transformacion

Un objeto $T^{i_1\ldots i_r}_{j_1\ldots j_s}$ es un tensor de tipo $(r,s)$ si bajo cambio de coordenadas transforma como:

$$T'^{i_1\ldots i_r}_{j_1\ldots j_s} = \frac{\partial x'^{i_1}}{\partial x^{k_1}} \ldots \frac{\partial x'^{i_r}}{\partial x^{k_r}} \frac{\partial x^{l_1}}{\partial x'^{j_1}} \ldots \frac{\partial x^{l_s}}{\partial x'^{j_s}} T^{k_1\ldots k_r}_{l_1\ldots l_s}$$

## Criterios de verificacion

### Criterio 1: Conmutatividad de derivadas

Si $A_{ij}$ y $B_{ij}$ son tensores, entonces:
$$C_{ij} = A_{ik} B^k_{\ j}$$

es un tensor.

### Criterio 2: Contraccion bien definida

Si $T_{ij}$ es tensor, entonces $T^i_i$ es escalar (tensor de rango 0).

### Criterio 3: Producto tensorial

El producto de tensores es tensor.

### Criterio 4: Derivada covariante

La derivada covariante de un tensor es tensor.

## Objetos que NO son tensores

### Conexion de Christoffel

$$\Gamma^i_{jk}$$

Transforma inhomogeneamente:
$$\Gamma'^i_{jk} = \frac{\partial x'^i}{\partial x^m} \frac{\partial x^n}{\partial x'^j} \frac{\partial x^p}{\partial x'^k} \Gamma^m_{np} + \frac{\partial x'^i}{\partial x^m} \frac{\partial^2 x^m}{\partial x'^j \partial x'^k}$$

### Primera derivada de la metrica

$$\partial_k g_{ij}$$

No es tensor.

## Pruebas de tensorialidad

### Prueba del cociente

Si al contraer un objeto con un tensor arbitrario siempre obtenemos un tensor, el objeto original es un tensor.

### Prueba de transformacion

Aplicar las reglas de transformacion y verificar que son consistentes.

## Ejemplos de objetos tensoriales

### Metrica $g_{ij}$

Es tensor (0,2) por definicion.

### Delta de Kronecker $\delta^i_j$

Es tensor (1,1).

### Tensor de Levi-Civita $\varepsilon_{ijk}$

Es densidad tensorial (peso 1).

### Tensor de Riemann

Es tensor (1,3).

## Errores comunes

1. **Christoffel**: No es tensor.

2. **Primera derivada**: $\partial_k g_{ij}$ no es tensor.

3. **Determinante**: No es tensor, es densidad.

4. **Parametros de la metrica**: No son tensores.

## Ejercicios

### Ejercicio 1

Verifique que $g_{ij}$ transforma como tensor.

### Ejercicio 2

Por que $\Gamma^i_{jk}$ no es tensor?

### Ejercicio 3

Exprese la prueba del cociente.

### Ejercicio 4

Verifique que la contracted de tensores es tensor.

### Ejercicio 5

Por que $\partial_k g_{ij}$ no es tensor?

### Ejercicio 6

Exprese el criterio de transformacion.

### Ejercicio 7

Verifique que $R^i_{\ jkl}$ es tensor.

### Ejercicio 8

Es la derivada covariante un tensor?

### Ejercicio 9

Exprese que la metrica es invariante bajo difeomorfismos.

### Ejercicio 10

Verifique el transporte paralelo de un tensor.

### Ejercicio 11

Es la curvatura escalar un tensor?

### Ejercicio 12

Por que se necesita el principio de equivalencia?

### Ejercicio 13

Exprese la derivada de Lie de un tensor.

### Ejercicio 14

Verifique que el tensor de Einstein es tensor.

### Ejercicio 15

Como se transforma una densidad tensorial?

## Soluciones

### Solucion 1

$g'_{ij} = \frac{\partial x^k}{\partial x'^i} \frac{\partial x^l}{\partial x'^j} g_{kl}$ - cumple la regla.

### Solucion 2

Porque tiene termino inhomogeneo en la transformacion.

### Solucion 3

Si $A \cdot T = B$ para todo tensor $T$ bien definido, entonces $A$ es tensor.

### Solucion 4

Por la regla de contraccion de indices.

### Solucion 5

$\partial_k g_{ij}$ tiene termino inhomogeneo al transformar.

### Solucion 6

$T' = J^r \bar{J}^s T$ con Jacobiano y su inversa.

### Solucion 7

Se deriva de la conexion y sus transformacionesdan tensor.

### Solucion 8

Si, $\nabla_k T$ transforma como tensor.

### Solucion 9

$g'_{\mu'\nu'} = \frac{\partial x^\alpha}{\partial x^{\mu'}} \frac{\partial x^\beta}{\partial x^{\nu'}} g_{\alpha\beta}$

### Solucion 10

$\frac{dV^i}{d\lambda} + \Gamma^i_{jk}\frac{dx^j}{d\lambda}V^k = 0$ preserva naturaleza tensorial.

### Solucion 11

Si, es escalar, tensor de rango 0.

### Solucion 12

Porque la gravedad geometriza elespaciotiempo.

### Solucion 13

$\mathcal{L}_X T^{i_1\ldots i_r}_{j_1\ldots j_s} = X^k \partial_k T^{i_1\ldots i_r}_{j_1\ldots j_s} - \partial_k X^{i_1} T^{k\ldots} + \ldots$

### Solucion 14

$G_{\mu\nu}$ transforma como tensor por su construccion a partir de Riemann y metrica.

### Solucion 15

$T' = |J|^w T$ donde $w$ es el peso.
