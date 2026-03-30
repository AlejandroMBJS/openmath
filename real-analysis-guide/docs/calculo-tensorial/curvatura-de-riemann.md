---
title: Curvatura de Riemann
description: Interpretacion geometrica de la curvatura, desviacion de geodesicas, teorema egregio de Gauss y transporte paralelo.
---

# Curvatura de Riemann

## Motivacion e intuiton

La curvatura de Riemann es la forma mas completa de cuantificar que tan "curvo" esta un espacio. A diferencia de la curvatura escalar que es un numero, el tensor de Riemann es un objeto con 4 indices que captura todas las formas en que un espacio puede desviarse de ser plano.

## Definicion

El tensor de curvatura de Riemann se define como:

$$R^i_{\ jkl} = \partial_k \Gamma^i_{jl} - \partial_l \Gamma^i_{jk} + \Gamma^i_{km}\Gamma^m_{jl} - \Gamma^i_{lm}\Gamma^m_{jk}$$

## Significado geometrico

### Transporte paralelo alrededor de un-loop

Cuando transportamos un vector paralelamente a lo largo de un小路 cerrado, el cambio en el vector es proporcional al tensor de Riemann.

Si $v^i$ se transporta alrededor de un area infinitesimal $dA^{kl}$:
$$\Delta v^i = R^i_{\ jkl} v^j dA^{kl}$$

### Desviacion de geodesicas

Las geodesicas que comienzan cerca una de otra divergen (o convergen) a una tasa controlada por la curvatura:

$$\frac{D^2 s^i}{d\lambda^2} = R^i_{\ jkl} u^j u^k s^l$$

donde $s^i$ es el vector de separacion.

## Curvatura seccional

Para dos vectores linealmente independientes $u, v$ en el punto:

$$K(u,v) = \frac{R_{ijkl} u^i v^j u^k v^l}{g_{im}g_{jn}g_{kp}g_{lq} (\delta(u,v) - g_{ij}u^i u^j g_{kl}v^k v^l)}$$

Simplificado para vectores ortonormales:
$$K = R_{ijij}$$

## Teorema egregio de Gauss

En 2 dimensiones, la curvatura escalar determina completamente al tensor de Riemann:

$$R_{ijkl} = K(g_{ik} g_{jl} - g_{il} g_{jk})$$

## Interpretacion en dimension 2

### Curvatura positiva

Espacio esferico (como la superficie de una esfera). Las geodesicas convergen.

### Curvatura cero

Espacio plano (euclideo). Las geodesicas son lineas rectas.

### Curvatura negativa

Espacio hiperbolico (como una silla de montar). Las geodesicas divergen.

## Propiedades del tensor

### Simetrias

1. $R_{ijkl} = -R_{jikl} = -R_{ijlk}$
2. $R_{ijkl} = R_{klij}$
3. Primera identidad de Bianchi: $R_{[ijkl]} = 0$

### Numero de componentes independientes

- En 2D: 1
- En 3D: 6
- En 4D: 20

## Aplicaciones

### Relatividad general

La materia-energia curva el espaciotiempo, lo que se manifiesta en el tensor de Riemann.

### geodesicas

En espacios de curvatura constante positiva (esfera), las geodesicas son circulos maximos.

## Ejercicios

### Ejercicio 1

Calcule el tensor de Riemann para espacio euclideo.

### Ejercicio 2

Exprese la ecuacion de desviacion de geodesicas.

### Ejercicio 3

Calcule la curvatura de $S^2$.

### Ejercicio 4

Exprese el teorema egregio de Gauss.

### Ejercicio 5

Cuantas componentes tiene el Riemann en 4D?

### Ejercicio 6

Exprese la primera identidad de Bianchi.

### Ejercicio 7

Calcule el efecto de transporte paralelo en $S^2$.

### Ejercicio 8

Exprese la curvatura seccional.

### Ejercicio 9

Que significa $R_{ijkl} = 0$?

### Ejercicio 10

Calcule el tensor de Riemann para el plano.

### Ejercicio 11

Exprese la curvatura escalar desde el Riemann.

### Ejercicio 12

Calcule el tensor de Riemann para la metrica $ds^2 = dr^2 + r^2 d\theta^2$.

### Ejercicio 13

Exprese la relacion entre Ricci y Riemann.

### Ejercicio 14

Calcule la curvatura escalar de $S^n$.

### Ejercicio 15

Exprese el tensor de Weyl.

## Soluciones

### Solucion 1

$R^i_{\ jkl} = 0$ en espacio euclideo.

### Solucion 2

$\frac{D^2 s^i}{d\lambda^2} = R^i_{\ jkl} u^j u^k s^l$

### Solucion 3

$K = 1/R^2$ para esfera de radio $R$.

### Solucion 4

$R_{ijkl} = K(g_{ik}g_{jl} - g_{il}g_{jk})$ en 2D.

### Solucion 5

$20$ componentes.

### Solucion 6

$R_{[ijkl]} = 0$ o $\nabla_{[i}R_{jk]l}^{\ m} = 0$.

### Solucion 7

El angulo cambia por $K \cdot A$ donde $A$ es el area.

### Solucion 8

$K(u,v) = R_{ijij}/(g_{ii}g_{jj} - g_{ij}^2)$ para vectores ortonormales.

### Solucion 9

El espacio es plano (localmente euclideo).

### Solucion 10

$R^i_{\ jkl} = 0$.

### Solucion 11

$R = g^{ij}R_{ij} = g^{ik}g^{jl}R_{ijkl}$.

### Solucion 12

Solo componente no nula: $R^r_{\ \theta r\theta} = -r$.

### Solucion 13

$R_{ij} = R^k_{\ ikj}$.

### Solucion 14

$R = n(n-1)/R^2$ para $S^n$.

### Solucion 15

$C_{ijkl} = R_{ijkl} - \frac{1}{2}(g_{ik}R_{jl} - g_{il}R_{jk} - g_{jk}R_{il} + g_{jl}R_{ik}) + \frac{R}{6}(g_{ik}g_{jl} - g_{il}g_{jk})$.
