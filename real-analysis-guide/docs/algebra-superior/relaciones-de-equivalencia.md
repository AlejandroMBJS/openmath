---
title: Relaciones de equivalencia
description: Relaciones binarias, reflexividad, simetria, transitividad, clases de equivalencia y conjuntos cociente.
---

# Relaciones de equivalencia

## Motivacion e intuicion

Una relacion de equivalencia permite tratar como indistinguibles objetos que no son literalmente iguales, pero si equivalentes para la estructura que interesa. En aritmetica, dos enteros pueden ser equivalentes modulo $n$; en geometria, dos puntos pueden estar en la misma orbita; en algebra, dos elementos pueden representar la misma clase cociente.

La idea profunda es que una relacion de equivalencia organiza un conjunto en bloques coherentes.

## Prerrequisitos

Conviene manejar producto cartesiano, funciones y lenguaje de inclusion.

## Definiciones formales

### Relacion binaria

Una relacion binaria en un conjunto $X$ es un subconjunto

$$
R \subseteq X \times X.
$$

Escribimos

$$
xRy
$$

cuando $(x,y) \in R$.

### Propiedades basicas

La relacion $R$ es:

- **reflexiva** si $xRx$ para todo $x \in X$;
- **simetrica** si $xRy \Rightarrow yRx$;
- **transitiva** si $xRy$ y $yRz$ implican $xRz$.

### Relacion de equivalencia

Una relacion de equivalencia es una relacion reflexiva, simetrica y transitiva.

### Clase de equivalencia

Si $\sim$ es una relacion de equivalencia y $x \in X$, la clase de equivalencia de $x$ es

$$
[x] = \{y \in X : y \sim x\}.
$$

### Conjunto cociente

El conjunto de todas las clases de equivalencia se denota por

$$
X/{\sim}.
$$

## Ejemplos basicos

### Ejemplo 1: igualdad

La igualdad sobre cualquier conjunto $X$ es una relacion de equivalencia.

Las clases son los singletons $\{x\}$.

### Ejemplo 2: congruencia modulo $n$

En $\mathbb{Z}$, para $n \ge 1$, definimos

$$
a \sim b \iff n \mid (a-b).
$$

Esta es una relacion de equivalencia.

### Ejemplo 3: misma imagen bajo una funcion

Si $f : X \to Y$, la relacion

$$
x \sim y \iff f(x)=f(y)
$$

es de equivalencia.

Sus clases son las fibras de $f$.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: "ser menor o igual" no es equivalencia

En $\mathbb{R}$, la relacion

$$
x \le y
$$

es reflexiva y transitiva, pero no simetrica.

### Contraejemplo 2: "tener distancia menor que 1" no es equivalencia

En $\mathbb{R}$, la relacion

$$
x \sim y \iff |x-y|<1
$$

es reflexiva y simetrica, pero no transitiva.

En efecto, $0 \sim 0.9$ y $0.9 \sim 1.8$, pero $0 \not\sim 1.8$.

## Proposiciones y teoremas centrales

### Proposicion 1: un punto pertenece a su clase

Si $\sim$ es de equivalencia, entonces

$$
x \in [x]
$$

para todo $x \in X$.

#### Demostracion

Por reflexividad, $x \sim x$.

### Proposicion 2: clases iguales o disjuntas

Si $\sim$ es de equivalencia y $[x] \cap [y] \ne \varnothing$, entonces

$$
[x]=[y].
$$

#### Demostracion

Sea $z \in [x] \cap [y]$. Entonces

$$
z \sim x, \qquad z \sim y.
$$

Por simetria, $x \sim z$, y por transitividad con $z \sim y$ se obtiene $x \sim y$.

Ahora, si $u \in [x]$, entonces $u \sim x$. Como $x \sim y$, por transitividad se deduce $u \sim y$, luego $u \in [y]$. Asi $[x] \subseteq [y]$.

La inclusion contraria se prueba igual.

### Proposicion 3: caracterizacion por pertenencia mutua

Si $\sim$ es de equivalencia, entonces

$$
x \sim y \iff [x]=[y].
$$

#### Demostracion

Si $x \sim y$, entonces $[x] \cap [y]$ no es vacio porque $y \in [x]$ y $y \in [y]$, luego por la proposicion anterior las clases coinciden.

Reciprocamente, si $[x]=[y]$, como $x \in [x]=[y]$, se concluye que $x \sim y$.

### Proposicion 4: proyeccion canonica

La aplicacion

$$
\pi : X \to X/{\sim}, \qquad \pi(x)=[x]
$$

es suprayectiva.

#### Demostracion

Todo elemento de $X/{\sim}$ es, por definicion, una clase $[x]$ para algun $x \in X$, y ese elemento es la imagen de $x$ bajo $\pi$.

## Errores comunes

1. Confundir clase de equivalencia con un representante.
2. Probar solo dos de las tres propiedades y concluir que hay equivalencia.
3. Pensar que clases distintas pueden intersectarse parcialmente.
4. Olvidar que $X/{\sim}$ es un conjunto de subconjuntos de $X$, no un subconjunto de $X$ mismo.

## Resumen operativo

- Una relacion de equivalencia identifica objetos compatibles con cierta nocion de "ser el mismo".
- Las clases de equivalencia son bloques iguales o disjuntos.
- El cociente $X/{\sim}$ recoge esos bloques como nuevos puntos.
- Toda funcion produce una equivalencia en su dominio al identificar puntos con la misma imagen.

## Ejercicios

1. Prueba que la congruencia modulo $n$ es una relacion de equivalencia.
2. Describe las clases de equivalencia de la relacion $x \sim y \iff x-y \in \mathbb{Z}$ sobre $\mathbb{R}$.
3. Da un ejemplo de relacion simetrica y transitiva que no sea reflexiva.
4. Prueba que si $f : X \to Y$ es inyectiva, entonces la relacion $x \sim y \iff f(x)=f(y)$ coincide con la igualdad.
5. Describe el conjunto cociente de $\mathbb{R}$ por la relacion $x \sim y \iff x-y \in \mathbb{Z}$.
