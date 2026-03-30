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

### Ejercicio 1

Prueba que todo compacto es Lindelof.

### Ejercicio 2

Demuestra que un espacio discreto no numerable no es Lindelof.

### Ejercicio 3

Completa la prueba de que un metrico Lindelof es separable.

### Ejercicio 4

Prueba que $\mathbb{R}$ es Lindelof mediante una base numerable.

### Ejercicio 5

Explica por que $\ell^\infty$ no puede ser Lindelof con su norma usual.

### Ejercicio 6

Prueba que todo espacio metrico Lindelof es separable.

### Ejercicio 7

Sea $X$ segundo numerable. Demuestra que toda familia de abiertos disjuntos es a lo sumo numerable.

### Ejercicio 8

Prueba que la imagen de un espacio Lindelof por una aplicacion continua es Lindelof.

### Ejercicio 9

Demuestra que $\mathbb{R}^n$ es Lindelof.

### Ejercicio 10

Prueba que todo espacio metrico es Lindelof si y solo si es separable.

### Ejercicio 11

Sea $X$ Lindelof y $F \subseteq X$ cerrado. Demuestra que $F$ es Lindelof.

### Ejercicio 12

Prueba que todo espacio metrico compacto es Lindelof.

### Ejercicio 13

Demuestra que la union numerable de espacios Lindelof es Lindelof.

### Ejercicio 14

Pruebe que un espacio de Baire metrico no puede ser unin numerable de cerrados nowhere dense.

### Ejercicio 15

Sea $X$ Lindelof metrico. Demuestre que $X$ es segundo numerable.

## Soluciones

### Solucion 1

Todo recubrimiento abierto de un compacto admite subrecubrimiento finito, en particular numerable. $\blacksquare$

### Solucion 2

Si $X$ es discreto no numerable, la familia $\{\{x\} : x \in X\}$ es un recubrimiento abierto sin subrecubrimiento numerable. $\blacksquare$

### Solucion 3

Sea $\mathcal{U}_n'$ una subcubierta numerable de $X$ para la cobertura $\{B(x, 1/n) : x \in X\}$. Para cada bola $B(x_{n,k}, 1/n)$ no vacia en $\mathcal{U}_n'$, elige un punto $d_{n,k}$. El conjunto $D = \{d_{n,k} : n,k \in \mathbb{N}\}$ es numerable. Dado abierto $U$ no vacio y $x \in U$, existe $r > 0$ con $B(x, r) \subseteq U$. Toma $n$ con $1/n < r/2$. Como $\mathcal{U}_n'$ cubre, existe $k$ con $x \in B(x_{n,k}, 1/n)$. Elige $d_{n,k} \in B(x_{n,k}, 1/n) \cap B(x, r/2)$. Entonces $d_{n,k} \in U \cap D$, as $D$ es denso. $\blacksquare$

### Solucion 4

$\mathbb{R}$ tiene base numerable $\{(a,b) : a,b \in \mathbb{Q}\}$. Si $\mathcal{U}$ recubre $\mathbb{R}$, cada intervalo $(a,b)$ con $a,b \in \mathbb{Q}$ esta contenido en algun $U \in \mathcal{U}$. La familia de intervalos racionales es numerable, y para cada uno elegimos un $U$ que lo contiene. $\blacksquare$

### Solucion 5

$\ell^\infty$ contiene una copia isometrica del espacio discreto no numerable $\{0,1\}^{\mathbb{N}}$ (sucesor). Como este subespacio no es Lindelof, $\ell^\infty$ no puede ser Lindelof. $\blacksquare$

### Solucion 6

Esta es la Proposicion 3 del archivo. El conjunto $D$ de centros de bolas de radio $1/n$ de una subcubierta numerable es denso numerable. $\blacksquare$

### Solucion 7

Sea $\{U_i\}$ familia de abiertos disjuntos. Por segunda numerabilidad, existe base numerable $\mathcal{B}$. Cada $U_i$ contiene algun $B_{n(i)} \in \mathcal{B}$. Si $i \ne j$, $U_i \cap U_j = \varnothing$ implica $B_{n(i)} \ne B_{n(j)}$. Asi la aplicacion $i \mapsto B_{n(i)}$ es inyectiva, y la familia de abiertos disjuntos es a lo sumo numerable. $\blacksquare$

### Solucion 8

Sea $f : X \to Y$ continua y sobreyectiva, con $X$ Lindelof. Sea $\{U_i\}$ recubrimiento abierto de $f(X)$. Entonces $\{f^{-1}(U_i)\}$ recubre $X$; por Lindelof existe subcubierta numerable $X = \bigcup_{j=1}^\infty f^{-1}(U_{i_j})$. Aplicando $f$: $f(X) = \bigcup_{j=1}^\infty U_{i_j}$. $\blacksquare$

### Solucion 9

$\mathbb{R}^n$ es segundo numerable (base de bolas racionales). Segunda numerabilidad implica Lindelof en cualquier espacio metrico. $\blacksquare$

### Solucion 10

En espacios metricos: Lindelof $\Rightarrow$ segundo numerable $\Rightarrow$ separable. Y separable $\Rightarrow$ segundo numerable $\Rightarrow$ Lindelof. $\blacksquare$

### Solucion 11

Sea $\{U_i\}$ recubrimiento abierto de $F$. Entonces $\{U_i\} \cup \{X \setminus F\}$ recubre $X$. Por Lindelof existe subrecubrimiento numerable $X \subseteq \bigcup_{j=1}^\infty U_{i_j} \cup (X \setminus F)$. Luego $F \subseteq \bigcup_{j=1}^\infty U_{i_j}$. $\blacksquare$

### Solucion 12

Todo compacto es Lindelof (ejercicio 1). Alternativamente, compacto implica totalmente acotado, hence separable, hence Lindelof. $\blacksquare$

### Solucion 13

Sea $X = \bigcup_n X_n$ con $X_n$ Lindelof. Sea $\{U_i\}$ recubrimiento abierto de $X$. Para cada $n$, $\{U_i \cap X_n\}$ recubre $X_n$, hence admite subcubierta numerable. Recolectando todas las subcubiertas numerables para cada $n$, obtenemos subcubierta numerable de $X$. $\blacksquare$

### Solucion 14

Es el teorema de Baire. Si $X = \bigcup_n F_n$ con $F_n$ closed nowhere dense, entonces $\operatorname{int}(F_n) = \varnothing$ para todo $n$, contradictio con que $X$ es de Baire (complemento de un magro en s mismo). $\blacksquare$

### Solucion 15

$X$ Lindelof implica separable, que a su vez implica segundo numerable en espacios metricos (el argumento inverso: separable $\Rightarrow$ tiene denso numerable $D$, luego $\{B(d, 1/n) : d \in D, n \in \mathbb{N}\}$ es base numerable). $\blacksquare$

---

## Referencias y lecturas adicionales

1. Munkres, J.R. (2000). *Topology*. Prentice Hall.
2. Engelking, R. (1989). *General Topology*. Heldermann Verlag.
3. Willard, S. (2004). *General Topology*. Dover.
4. Kelley, J.L. (1955). *General Topology*. Van Nostrand.
5. Bourbaki, N. (1989). *General Topology*, Chapters 1-4. Springer.
6. Sierpinski, W. (1952). *General Topology*. University of Toronto Press.
