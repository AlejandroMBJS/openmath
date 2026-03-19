---
title: Teorema de Lindelof
description: Propiedad de Lindelof, segunda numerabilidad y equivalencias metricas con separabilidad.
---

# Teorema de Lindelof

## Motivacion e intuicion

La compacidad exige subrecubrimientos finitos. La propiedad de Lindelof exige solo subrecubrimientos numerables. Es una condicion mas debil, pero en espacios metricos aparece de manera natural y se conecta estrechamente con separabilidad y segunda numerabilidad.

En muchos argumentos, pasar de "recubrimiento arbitrario" a "subrecubrimiento numerable" ya basta para reducir problemas a procedimientos contables.

## Prerrequisitos

Conviene manejar:

- bases topologicas;
- separabilidad y segunda numerabilidad;
- recubrimientos abiertos;
- espacios metricos.

## Definiciones formales

### Espacio Lindelof

Un espacio topologico $X$ es **Lindelof** si todo recubrimiento abierto de $X$ admite un subrecubrimiento numerable.

### Segunda numerabilidad

$X$ es **de segunda numerabilidad** si posee una base numerable.

## Ejemplos basicos

### Ejemplo 1: compactos

Todo espacio compacto es Lindelof, porque un subrecubrimiento finito es en particular numerable.

### Ejemplo 2: $\mathbb{R}^n$

$\mathbb{R}^n$ es Lindelof porque es separable, luego de segunda numerabilidad.

### Ejemplo 3: discretos numerables

Todo espacio discreto numerable es Lindelof.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: Lindelof no implica compacto

$\mathbb{R}$ con su topologia usual es Lindelof, pero no compacto.

### Contraejemplo 2: un discreto no numerable no es Lindelof

Si $X$ es discreto no numerable, el recubrimiento por singletons

$$
\{\{x\} : x \in X\}
$$

no admite subrecubrimiento numerable.

### Contraejemplo 3: fuera de metricos, Lindelof y separabilidad no son equivalentes

La equivalencia entre separabilidad, segunda numerabilidad y Lindelof es un fenomeno especificamente metrico, no topologico en general.

## Teoremas y demostraciones centrales

### Teorema 1: segunda numerabilidad implica Lindelof

Todo espacio de segunda numerabilidad es Lindelof.

#### Demostracion

Sea

$$
\mathcal{B}=\{B_n\}_{n \in \mathbb{N}}
$$

una base numerable y sea $\mathcal{U}$ un recubrimiento abierto de $X$.

Consideremos el conjunto de indices

$$
I=\{n \in \mathbb{N} : \exists U \in \mathcal{U} \text{ tal que } B_n \subseteq U\}.
$$

Para cada $n \in I$, elige un abierto $U_n \in \mathcal{U}$ con

$$
B_n \subseteq U_n.
$$

La familia

$$
\{U_n : n \in I\}
$$

es numerable. Veamos que cubre a $X$. Sea $x \in X$. Como $\mathcal{U}$ es recubrimiento, existe $U \in \mathcal{U}$ con

$$
x \in U.
$$

Como $\mathcal{B}$ es base, existe $B_n \in \mathcal{B}$ tal que

$$
x \in B_n \subseteq U.
$$

Entonces $n \in I$ y

$$
x \in U_n.
$$

Por tanto, $\{U_n\}_{n \in I}$ es un subrecubrimiento numerable.

### Corolario 2

Todo espacio metrico separable es Lindelof.

#### Demostracion

En espacios metricos,

$$
\text{separable} \Rightarrow \text{segunda numerabilidad},
$$

y por el teorema anterior,

$$
\text{segunda numerabilidad} \Rightarrow \text{Lindelof}.
$$

### Teorema 3: Lindelof implica separable en espacios metricos

Si $(X,d)$ es un espacio metrico Lindelof, entonces es separable.

#### Demostracion

Para cada $n \in \mathbb{N}$, considera el recubrimiento abierto de $X$ por bolas de radio $1/n$:

$$
\mathcal{U}_n=\left\{B\left(x,\frac1n\right): x \in X\right\}.
$$

Como $X$ es Lindelof, existe un subrecubrimiento numerable

$$
\mathcal{U}_n'=\left\{B\left(x_{n,k},\frac1n\right): k \in \mathbb{N}\right\}.
$$

Sea

$$
D=\{x_{n,k} : n,k \in \mathbb{N}\}.
$$

Entonces $D$ es numerable por ser union numerable de conjuntos numerables.

Veamos que es denso. Sea $U$ un abierto no vacio y toma $x \in U$. Existe $r>0$ tal que

$$
B(x,r)\subseteq U.
$$

Elige $n$ con

$$
\frac1n<r.
$$

Como $\mathcal{U}_n'$ cubre a $X$, existe $k$ tal que

$$
x \in B\left(x_{n,k},\frac1n\right).
$$

Por tanto

$$
d(x,x_{n,k})<\frac1n<r,
$$

y de aqui

$$
x_{n,k}\in B(x,r)\subseteq U.
$$

Luego todo abierto no vacio corta a $D$, asi que $D$ es denso.

### Corolario 4: equivalencia metrica

En un espacio metrico se tiene

$$
\text{separable} \iff \text{segunda numerabilidad} \iff \text{Lindelof}.
$$

## Ejemplos estructurales

### Ejemplo 1: $\ell^p$ para $1 \le p < \infty$

Los espacios $\ell^p$ son separables, luego Lindelof.

### Ejemplo 2: $\ell^\infty$

Como $\ell^\infty$ no es separable, tampoco es Lindelof con la norma del supremo.

### Ejemplo 3: utilidad operativa

La propiedad de Lindelof permite reducir recubrimientos abiertos arbitrarios a familias numerables, lo cual es especialmente util cuando se combinan argumentos topologicos con construcciones secuenciales.

## Errores comunes

1. Confundir Lindelof con compacto.
2. Pensar que la propiedad se verifica solo en recubrimientos numerables.
3. Usar la equivalencia con separabilidad fuera del contexto metrico.
4. Olvidar que el argumento de Lindelof a separabilidad usa especificamente bolas de radio $1/n$.

## Resumen operativo

- Un espacio Lindelof admite subrecubrimientos numerables para todo recubrimiento abierto.
- La segunda numerabilidad implica Lindelof.
- En espacios metricos, Lindelof, separabilidad y segunda numerabilidad son equivalentes.
- La propiedad de Lindelof sirve como puente entre topologia abstracta y argumentos contables.

## Ejercicios

1. Prueba que todo compacto es Lindelof.
2. Demuestra que un discreto no numerable no es Lindelof.
3. Completa la prueba de que un metrico Lindelof es separable.
4. Prueba que $\mathbb{R}$ es Lindelof mediante una base numerable.
5. Explica por que $\ell^\infty$ no puede ser Lindelof con su norma usual.
