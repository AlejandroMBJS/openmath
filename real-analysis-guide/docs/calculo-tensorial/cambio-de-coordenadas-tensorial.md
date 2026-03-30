---
title: Cambio de coordenadas tensor
description: Transformacion de componentes tensoriales, Jacobianos, coordenadas curvilineas y cambios de base.
---

# Cambio de coordenadas tensor

## Motivacion e intuicion

Uno de los aspectos más importantes del calculo tensorial es entender cómo cambian las componentes de los tensores cuando cambiamos de coordenadas. Esta propiedad de transformación es lo que distingue a los tensores de otros objetos matemáticos.

La regla fundamental: las componentes contravariantes (indices arriba) transforman con el Jacobiano directo, mientras que las covariantes (indices abajo) transforman con el Jacobiano inverso.

## Transformacion de coordenadas

### Coordenadas nuevas vs antiguas

Sean $x^i$ las coordenadas antiguas y $x'^i$ las nuevas.

### Jacobiano directo

$$J^i_{\ j} = \frac{\partial x'^i}{\partial x^j}$$

### Jacobiano inverso

$$\bar{J}^i_{\ j} = \frac{\partial x^i}{\partial x'^j}$$

satisface $J^i_{\ k} \bar{J}^k_{\ j} = \delta^i_j$.

## Reglas de transformacion

### Tensores contravariantes (indices arriba)

$$V'^i = J^i_{\ j} V^j$$

### Tensores covariantes (indices abajo)

$$V'_i = \bar{J}^j_{\ i} V_j$$

### Tensores mixtos

$$T'^{i_1 \ldots i_r}_{j_1 \ldots j_s} = J^{i_1}_{k_1} \cdots J^{i_r}_{k_r} \bar{J}^{l_1}_{j_1} \cdots \bar{J}^{l_s}_{j_s} T^{k_1 \ldots k_r}_{l_1 \ldots l_s}$$

## Ejemplos de cambios comunes

### Cartesianas a polares

$$x = r\cos\theta, \quad y = r\sin\theta$$

$$J = \begin{pmatrix} \cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta \end{pmatrix}$$

### Cartesianas a esfericas

$$x = r\sin\theta\cos\phi$$
$$y = r\sin\theta\sin\phi$$
$$z = r\cos\theta$$

### Polares a cartesianas (Jacobiano inverso)

$$r = \sqrt{x^2 + y^2}, \quad \theta = \arctan(y/x)$$

## Metrica bajo cambio de coordenadas

La metrica transforma covariante:

$$g'_{ij} = \bar{J}^k_{\ i} \bar{J}^l_{\ j} g_{kl}$$

La metrica inversa transforma contravariante:

$$g'^{ij} = J^i_{\ k} J^j_{\ l} g^{kl}$$

## Derivadas parciales

### Gradiente de funcion escalar

$$\partial'_i f = \bar{J}^j_{\ i} \partial_j f$$

### Derivadas de coordenadas

$$\partial_i x'^j = J^j_{\ i}, \quad \partial'_i x^j = \bar{J}^j_{\ i}$$

## Jacobianos y determinantes

### Determinante del Jacobiano

$$J = \det\left(\frac{\partial x'^i}{\partial x^j}\right)$$

### Cambio en el elemento de volumen

$$dV' = |J| dV$$

### Densidad tensorial

Un objeto que transforma con factor $|J|^w$ tiene peso $w$.

## Errores comunes

1. **Confundir Jacobiano**: Usar $J$ donde se necesita $\bar{J}$ y viceversa.

2. **No usar la metrica para convertir indices**: $V_i = g_{ij} V^j$.

3. **Olvidar el determinante**: Para densidades, el factor $|J|$ es esencial.

## Ejercicios

### Ejercicio 1

Calcule el Jacobiano para el cambio a coordenadas polares.

### Ejercicio 2

Transforme el vector $V = (1, 0)$ desde cartesianas al origen en polares.

### Ejercicio 3

Exprese la transformacion de $g_{ij}$.

### Ejercicio 4

Transforme $g^{ij}$.

### Ejercicio 5

Calcule $J$ para cartesianas a esfericas.

### Ejercicio 6

Derive la formula para $\partial'_i$.

### Ejercicio 7

Transforme el gradiente de $f$ a nuevas coordenadas.

### Ejercicio 8

Calcule el determinante del Jacobiano para polares.

### Ejercicio 9

Exprese el elemento de volumen en polares.

### Ejercicio 10

Transforme un tensor de segundo orden mixto.

### Ejercicio 11

Calcule el Jacobiano inverso desde polares a cartesianas.

### Ejercicio 12

Exprese la condición de que un tensor sea invariante.

### Ejercicio 13

Transforme la velocidad de cartesianas a polares.

### Ejercicio 14

Calcule el factor de escala para la transformacion.

### Ejercicio 15

Verifique que $J \bar{J} = I$.

## Soluciones

### Solucion 1

$J = \begin{pmatrix} \cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta \end{pmatrix}$

### Solucion 2

$V'^r = J^r_{\ x} V^x + J^r_{\ y} V^y = \cos\theta(1) + \sin\theta(0) = \cos\theta$
$V'^\theta = J^\theta_{\ x} V^x + J^\theta_{\ y} V^y = -\sin\theta/r(1) + \cos\theta/r(0) = -\sin\theta/r$

### Solucion 3

$g'_{ij} = \bar{J}^k_{\ i} \bar{J}^l_{\ j} g_{kl}$

### Solucion 4

$g'^{ij} = J^i_{\ k} J^j_{\ l} g^{kl}$

### Solucion 5

$J = \begin{pmatrix} \sin\theta\cos\phi & r\cos\theta\cos\phi & -r\sin\theta\sin\phi \\ \sin\theta\sin\phi & r\cos\theta\sin\phi & r\sin\theta\cos\phi \\ \cos\theta & -r\sin\theta & 0 \end{pmatrix}$

### Solucion 6

$\partial'_i = \bar{J}^j_{\ i} \partial_j$

### Solucion 7

$(\nabla f)'_i = \bar{J}^j_{\ i} \partial_j f$

### Solucion 8

$\det(J) = r$

### Solucion 9

$dV = r\, dr\, d\theta$

### Solucion 10

$T'^{i}_{\ j} = J^i_{\ k} \bar{J}^l_{\ j} T^{k}_{\ l}$

### Solucion 11

$\bar{J} = J^{-1} = \begin{pmatrix} \cos\theta & \sin\theta \\ -\sin\theta/r & \cos\theta/r \end{pmatrix}$

### Solucion 11

Un tensor es invariante si $T' = T$.

### Solucion 12

$V'^i = J^i_{\ j} V^j$, en polares: $V^r = \dot{r}$, $V^\theta = \dot{\theta}$.

### Solucion 13

El factor de escala para $dr$ es 1, para $d\theta$ es $r$.

### Solucion 14

Por definición del Jacobiano inverso.
