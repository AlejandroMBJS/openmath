---
title: Interior y puntos de acumulacion
description: Interior, puntos aislados, acumulacion, derivado de un conjunto y relaciones con la cerradura.
---

# Interior y puntos de acumulacion

## Motivacion e intuicion

La clausura mira que puntos no pueden separarse de un conjunto desde afuera. El interior mide cuanta apertura real tiene por dentro. Los puntos de acumulacion, en cambio, detectan donde el conjunto se aproxima topologicamente de manera no trivial.

Estos tres operadores forman el paquete local minimo que hace operativa la topologia.

## Prerrequisitos

Conviene manejar vecindades, abiertos, cerrados y clausura.

## Definiciones formales

Sea $(X,\tau)$ un espacio topologico y $A \subseteq X$.

### Interior

El **interior** de $A$ es

$$
\operatorname{int}(A)=\bigcup\{U \in \tau : U \subseteq A\}.
$$

Es el mayor abierto contenido en $A$.

### Punto de acumulacion

Un punto $x \in X$ es **punto de acumulacion** de $A$ si toda vecindad $V$ de $x$ satisface

$$
(V \setminus \{x\}) \cap A \ne \varnothing.
$$

### Punto aislado

Un punto $x \in A$ es **aislado en $A$** si existe una vecindad $V$ de $x$ tal que

$$
V \cap A = \{x\}.
$$

### Derivado de un conjunto

El conjunto de todos los puntos de acumulacion de $A$ se denota por

$$
A'.
$$

## Ejemplos basicos

### Ejemplo 1: intervalos usuales

En $\mathbb{R}$,

$$
\operatorname{int}([0,1]) = (0,1).
$$

Los puntos de acumulacion de $(0,1)$ son todos los puntos de $[0,1]$.

### Ejemplo 2: conjunto numerable discreto dentro de si mismo

Si $A=\{1/n : n \in \mathbb{N}\}$ en $\mathbb{R}$, entonces cada $1/n$ es aislado en $A$, pero

$$
0 \in A'.
$$

### Ejemplo 3: topologia discreta

En un espacio discreto:

$$
\operatorname{int}(A)=A
$$

para todo $A$, y

$$
A'=\varnothing
$$

para todo $A$.

## Proposiciones y teoremas centrales

### Proposicion 1: caracterizacion del interior

Para $x \in X$,

$$
x \in \operatorname{int}(A)
$$

si y solo si existe un abierto $U$ tal que

$$
x \in U \subseteq A.
$$

#### Demostracion

Es una traduccion directa de la definicion del interior como union de todos los abiertos contenidos en $A$.

### Proposicion 2: caracterizacion de abiertos por interior

Un conjunto $A$ es abierto si y solo si

$$
\operatorname{int}(A)=A.
$$

#### Demostracion

Si $A$ es abierto, participa en la union que define su interior y contiene al interior, de modo que hay igualdad.

Reciprocamente, el interior siempre es abierto, asi que si coincide con $A$, entonces $A$ es abierto.

### Proposicion 3: dualidad entre interior y clausura

Para todo $A \subseteq X$,

$$
\operatorname{int}(A) = X \setminus \overline{X \setminus A}.
$$

#### Demostracion

Sea $x \in X$. Entonces $x \notin \overline{X \setminus A}$ si y solo si existe una vecindad abierta $U$ de $x$ tal que

$$
U \cap (X \setminus A) = \varnothing,
$$

lo cual equivale a

$$
U \subseteq A.
$$

Eso es precisamente la condicion de pertenecer al interior de $A$.

### Teorema 4: relacion entre clausura y puntos de acumulacion

Para todo conjunto $A$ se cumple

$$
\overline{A} = A \cup A'.
$$

#### Demostracion

Si $x \in A$, entonces $x \in \overline{A}$ por extensividad de la clausura.

Si $x \in A'$, toda vecindad de $x$ corta a $A \setminus \{x\}$, y en particular corta a $A$, luego $x \in \overline{A}$.

Asi,

$$
A \cup A' \subseteq \overline{A}.
$$

Reciprocamente, si $x \in \overline{A}$ y $x \notin A$, entonces toda vecindad $V$ de $x$ corta a $A$. Como $x \notin A$, automaticamente

$$
V \cap A = (V \setminus \{x\}) \cap A \ne \varnothing,
$$

de modo que $x \in A'$. Por tanto

$$
\overline{A} \subseteq A \cup A'.
$$

### Proposicion 5: caracterizacion de cerrados por acumulacion

Un conjunto $A$ es cerrado si y solo si

$$
A' \subseteq A.
$$

#### Demostracion

Por el teorema anterior,

$$
\overline{A}=A \cup A'.
$$

Entonces $\overline{A}=A$ si y solo si $A' \subseteq A$, y esto equivale a que $A$ sea cerrado.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: estar en la clausura no implica ser acumulacion

Si

$$
A=\{0\}
$$

en $\mathbb{R}$, entonces

$$
0 \in \overline{A},
$$

pero $0 \notin A'$.

### Contraejemplo 2: un punto de acumulacion puede no pertenecer al conjunto

Para

$$
A=\{1/n : n \in \mathbb{N}\},
$$

se tiene

$$
0 \in A'
$$

pero

$$
0 \notin A.
$$

### Ejemplo fino 3: interior vacio no implica conjunto vacio

En $\mathbb{R}$ usual, $\mathbb{Q}$ es no vacio pero

$$
\operatorname{int}(\mathbb{Q})=\varnothing.
$$

## Errores comunes

1. Confundir punto adherente con punto de acumulacion.
2. Pensar que el interior es simplemente "quitar la frontera" sin definicion.
3. Olvidar retirar $\{x\}$ al definir acumulacion.
4. Suponer que todo punto del conjunto es punto de acumulacion.

## Resumen operativo

- El interior es el mayor abierto contenido en un conjunto.
- Los puntos de acumulacion detectan aproximacion no trivial.
- La clausura se descompone como conjunto mas derivado.
- Un conjunto es cerrado exactamente cuando contiene todos sus puntos de acumulacion.

## Ejercicios

1. Calcula el interior y el derivado de $[0,1] \cap \mathbb{Q}$ en $\mathbb{R}$.
2. Decide que puntos de $A=\{1/n:n \in \mathbb{N}\}$ son aislados.
3. Prueba la dualidad entre interior y clausura.
4. Demuestra que en un espacio discreto todo conjunto tiene derivado vacio.
5. Da un ejemplo de un conjunto denso y de interior vacio.
