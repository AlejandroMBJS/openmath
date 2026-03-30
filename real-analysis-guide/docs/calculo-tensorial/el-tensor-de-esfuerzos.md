---
title: El tensor de esfuerzos
description: Tensor de esfuerzos de Cauchy, componentes, simetrias y aplicaciones en mecanica de medios continuos.
---

# El tensor de esfuerzos

## Motivacion e intuicion

En mecanica de medios continuos, el estado de esfuerzos en un punto se describe mediante el tensor de esfuerzos de Cauchy $\sigma_{ij}$. Este tensor simetrico de segundo orden representa las fuerzas internas que actúan sobre los planos internos del material.

## Definicion

El tensor de Cauchy se define como:

$$\sigma_{ij} = \text{Fuerza por unidad de area en la direccion } i\text{ sobre un plano con normal } j$$

donde $i$ indica la componente de la fuerza y $j$ indica la orientación del plano.

## Propiedades

### Simetria

$$\sigma_{ij} = \sigma_{ji}$$

Esta simetría se deduce del balance de momentos angulares.

### Tipo

Tensor de tipo $(0,2)$ o $(2,0)$ - es covariante/contravariante indistintamente en espacio euclídeo.

### Traza

$$\text{tr}(\sigma) = \sigma_{ii} = \sigma_{xx} + \sigma_{yy} + \sigma_{zz}$$

## Componentes

$$\sigma_{ij} = \begin{pmatrix}
\sigma_{xx} & \sigma_{xy} & \sigma_{xz} \\
\sigma_{yx} & \sigma_{yy} & \sigma_{yz} \\
\sigma_{zx} & \sigma_{zy} & \sigma_{zz}
\end{pmatrix}$$

## Vector esfuerzo sobre un plano

Para un plano con normal $\mathbf{n}$, el vector esfuerzo es:

$$T_i^{(n)} = \sigma_{ij} n_j$$

## Esfuerzos principales

Los valores propios $\sigma_1, \sigma_2, \sigma_3$ del tensor $\sigma_{ij}$ son los esfuerzos principales.

Los vectores propios son las direcciones principales.

## Descomposicion

### Parte hidrostática

$$\sigma_{ij}^h = \frac{1}{3}\sigma_{kk} \delta_{ij}$$

### Parte deviatorica

$$\sigma_{ij}^d = \sigma_{ij} - \sigma_{ij}^h$$

## Criterios de fluencia

### Criterio de von Mises

$$\sigma_{eq} = \sqrt{\frac{1}{2}[(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2]} < \sigma_y$$

### Criterio de Tresca

$$\tau_{\max} = \frac{\sigma_1 - \sigma_3}{2} < \frac{\sigma_y}{2}$$

## Ejemplos

### Traccion simple

$$\sigma = \begin{pmatrix} \sigma & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

### Compresion hidrostatica

$$\sigma = -p \delta_{ij}$$

### Cizalladura pura

$$\sigma = \begin{pmatrix} 0 & \tau & 0 \\ \tau & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

## Relacion con deformacion

### Ley de Hooke generalizada

$$\sigma_{ij} = C_{ijkl} \varepsilon_{kl}$$

Para material isotropo:

$$\sigma_{ij} = \lambda \varepsilon_{kk} \delta_{ij} + 2\mu \varepsilon_{ij}$$

## Errores comunes

1. **Indices**: Confundir cual indice es normal y cual es dirección de fuerza.

2. **Simetria**: Olvidar que debe ser simetrico.

3. **Unidades**: Esfuerzo es fuerza/area.

## Ejercicios

### Ejercicio 1

Exprese el tensor de esfuerzos en notacion tensorial.

### Ejercicio 2

Calcule la fuerza sobre un plano con normal $(1,0,0)$.

### Ejercicio 3

Verifique la simetria del tensor.

### Ejercicio 4

Exprese la condicion de equilibrio $\partial_j \sigma_{ij} + f_i = 0$.

### Ejercicio 5

Calcule los esfuerzos principales de $\sigma = \begin{pmatrix} 10 & 5 \\ 5 & 2 \end{pmatrix}$.

### Ejercicio 6

Exprese la parte hidrostática.

### Ejercicio 7

Calcule el esfuerzo equivalente de von Mises.

### Ejercicio 8

Exprese la ley de Hooke para material isotropo.

### Ejercicio 9

Calcule el tensor deviatorico.

### Ejercicio 10

Exprese el vector esfuerzo sobre un plano arbitrario.

### Ejercicio 11

Calcule la deformacion para $\sigma = \sigma_0 I$.

### Ejercicio 12

Exprese la condicion de que un esfuerzo sea esférico.

### Ejercicio 13

Calcule $\sigma_{ij} n_i n_j$ para $n$ unitario.

### Ejercicio 14

Exprese el criterio de Tresca.

### Ejercicio 15

Calcule el primer invariante $I_1 = \sigma_{ii}$.

## Soluciones

### Solucion 1

$\sigma_{ij}$ con $i, j = 1, 2, 3$

### Solucion 2

$T_i = \sigma_{ij} n_j = (\sigma_{1j})(1) = (\sigma_{11}, \sigma_{21}, \sigma_{31})$

### Solucion 3

$\sigma_{ij} = \sigma_{ji}$

### Solucion 4

$\partial_j \sigma_{ij} + f_i = 0$ (suma sobre $j$)

### Solucion 5

$\lambda = \frac{12 \pm \sqrt{144 - 28}}{2} = 6 \pm \sqrt{29}$

### Solucion 6

$\sigma_{ij}^h = \frac{1}{3}\sigma_{kk} \delta_{ij}$

### Solucion 7

$\sigma_{eq} = \sqrt{\frac{1}{2}[(\sigma_1 - \sigma_2)^2 + \ldots}$

### Solucion 8

$\sigma_{ij} = \lambda \varepsilon_{kk} \delta_{ij} + 2\mu \varepsilon_{ij}$

### Solucion 9

$\sigma^d_{ij} = \sigma_{ij} - \frac{1}{3}\sigma_{kk}\delta_{ij}$

### Solucion 10

$T_i^{(n)} = \sigma_{ij} n_j$

### Solucion 11

$\varepsilon_{ij} = \frac{\sigma_0}{3K}\delta_{ij}$ con $K = \lambda + \frac{2\mu}{3}$

### Solucion 12

$\sigma_{ij} = p \delta_{ij}$ (esfuerzo hidrostático puro)

### Solucion 13

$\sigma_{nn} = \sigma_{ij} n_i n_j$ (esfuerzo normal)

### Solucion 14

$\max|\sigma_i - \sigma_j| < \sigma_y$

### Solucion 15

$I_1 = \sigma_{xx} + \sigma_{yy} + \sigma_{zz}$
