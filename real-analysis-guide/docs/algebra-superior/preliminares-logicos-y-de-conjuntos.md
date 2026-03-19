---
title: Preliminares logicos y de conjuntos
description: Lenguaje formal basico de cuantificadores, inclusion, igualdad de conjuntos y familias indexadas.
---

# Preliminares logicos y de conjuntos

## Motivacion e intuicion

Gran parte de los errores en matematicas avanzadas no vienen de ideas profundas, sino de un manejo informal de cuantificadores, negaciones o inclusiones. Antes de estudiar funciones, equivalencias o cardinalidades, hace falta fijar con precision que significan expresiones como:

$$
\forall x \in A, \qquad \exists y \in B, \qquad A \subseteq B, \qquad A = B.
$$

Este capitulo no es decorativo. Sirve para evitar que una demostracion correcta se convierta en una cadena de intuiciones vagas.

::: tip Idea central
La teoria de conjuntos no es solo una coleccion de simbolos: es el lenguaje estructural en el que luego se formulan definiciones, teoremas y construcciones.
:::

## Prerrequisitos

Para esta pagina basta con conocer los numeros naturales y el significado informal de "conjunto de elementos".

## Definiciones formales

### Pertenencia e inclusion

Si $x$ es un objeto y $A$ es un conjunto, escribir

$$
x \in A
$$

significa que $x$ es un elemento de $A$.

Si $A$ y $B$ son conjuntos, escribir

$$
A \subseteq B
$$

significa que todo elemento de $A$ pertenece tambien a $B$, es decir,

$$
\forall x \, (x \in A \Rightarrow x \in B).
$$

Se escribe

$$
A \subsetneq B
$$

cuando $A \subseteq B$ y ademas $A \ne B$.

### Igualdad de conjuntos

Dos conjuntos $A$ y $B$ son iguales si tienen exactamente los mismos elementos:

$$
A = B \iff \forall x \, (x \in A \Leftrightarrow x \in B).
$$

### Cuantificadores

El simbolo

$$
\forall
$$

se lee "para todo". El simbolo

$$
\exists
$$

se lee "existe".

Ejemplos:

- $\forall n \in \mathbb{N}, \ n+1 > n$ significa que todo natural es menor que su sucesor.
- $\exists x \in \mathbb{R}, \ x^2 = 2$ significa que existe un real cuyo cuadrado es $2$.

### Negacion de cuantificadores

Las dos reglas mas usadas son:

$$
\neg(\forall x \, P(x)) \iff \exists x \, \neg P(x),
$$

$$
\neg(\exists x \, P(x)) \iff \forall x \, \neg P(x).
$$

Estas equivalencias son fundamentales para negar correctamente definiciones.

### Conjunto vacio y conjunto potencia

El **conjunto vacio** se denota por $\varnothing$ y es el conjunto que no tiene elementos.

El **conjunto potencia** de $A$, denotado por $\mathcal{P}(A)$, es el conjunto de todos los subconjuntos de $A$:

$$
\mathcal{P}(A) = \{E : E \subseteq A\}.
$$

### Familias indexadas

Una familia de conjuntos indexada por un conjunto $I$ es una aplicacion

$$
I \to \mathcal{P}(X), \qquad i \mapsto A_i.
$$

En lugar de escribir solo un conjunto, escribimos una coleccion

$$
(A_i)_{i \in I}.
$$

Este lenguaje es indispensable para hablar de uniones e intersecciones arbitrarias.

## Ejemplos basicos

### Ejemplo 1: inclusion elemental

Sea

$$
A = \{1,2\}, \qquad B = \{1,2,3\}.
$$

Entonces $A \subseteq B$ porque cada elemento de $A$ esta en $B$.

### Ejemplo 2: pertenencia no es inclusion

Si

$$
A = \{1,2\},
$$

entonces

$$
1 \in A,
$$

pero no tiene sentido escribir $1 \subseteq A$, porque $1$ no es un conjunto en este contexto.

En cambio,

$$
\{1\} \subseteq A.
$$

### Ejemplo 3: igualdad por elementos

Sea

$$
A = \{x \in \mathbb{Z} : x^2 = 1\}, \qquad B = \{-1,1\}.
$$

Entonces $A = B$ porque ambos conjuntos tienen exactamente los mismos elementos.

### Ejemplo 4: familia indexada

Si $A_n = (-1/n,1/n)$ para $n \in \mathbb{N}$, entonces $(A_n)_{n \in \mathbb{N}}$ es una familia indexada de subconjuntos de $\mathbb{R}$.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: el vacio es subconjunto de todo conjunto

Muchos principiantes dudan de la afirmacion

$$
\varnothing \subseteq A.
$$

Pero es verdadera para todo conjunto $A$, porque no existe ningun elemento de $\varnothing$ que viole la condicion de pertenecer a $A$.

### Contraejemplo 2: tener un elemento comun no implica inclusion

Si

$$
A = \{1,2\}, \qquad B = \{2,3\},
$$

entonces $A \cap B \ne \varnothing$, pero ni $A \subseteq B$ ni $B \subseteq A$.

### Contraejemplo 3: negar mal un cuantificador cambia por completo el significado

La negacion correcta de

$$
\forall x \in A, \ P(x)
$$

no es

$$
\forall x \in A, \ \neg P(x),
$$

sino

$$
\exists x \in A \text{ tal que } \neg P(x).
$$

## Proposiciones y teoremas centrales

### Proposicion 1: caracterizacion de la igualdad por doble inclusion

Para cualesquiera conjuntos $A$ y $B$,

$$
A = B \iff A \subseteq B \text{ y } B \subseteq A.
$$

#### Demostracion

Si $A = B$, entonces todo elemento de $A$ pertenece a $B$ y viceversa, luego se tienen ambas inclusiones.

Reciprocamente, si $A \subseteq B$ y $B \subseteq A$, entonces para todo $x$ se cumple

$$
x \in A \iff x \in B,
$$

y por definicion $A = B$.

### Proposicion 2: inclusion y cuantificadores

Las siguientes afirmaciones son equivalentes:

1. $A \subseteq B$.
2. No existe $x \in A$ tal que $x \notin B$.
3. $A \cap B^c = \varnothing$, cuando el complemento se toma dentro de un conjunto universo fijo.

#### Demostracion

La equivalencia entre 1 y 2 es una traduccion directa de la negacion del cuantificador universal. La equivalencia entre 2 y 3 dice exactamente que no hay elementos simultaneamente en $A$ y fuera de $B$.

### Proposicion 3: ley de extensionalidad

Si dos definiciones describen el mismo criterio de pertenencia, entonces describen el mismo conjunto.

Mas precisamente, si para todo $x$ se cumple

$$
x \in A \iff P(x)
$$

y tambien

$$
x \in B \iff P(x),
$$

entonces $A = B$.

#### Comentario

Esta regla permite probar identidades conjuntistas trabajando solo con equivalencias logicas.

## Errores comunes

1. Confundir $x \in A$ con $\{x\} \subseteq A$.
2. Negar mal una expresion con cuantificadores.
3. Usar $A \subset B$ sin aclarar si significa inclusion estricta o no estricta.
4. Probar una igualdad de conjuntos mostrando solo una inclusion.
5. Hablar de familias indexadas sin decir cual es el conjunto de indices.

## Resumen operativo

- La igualdad de conjuntos se prueba por pertenencia o por doble inclusion.
- La negacion de un "para todo" produce un "existe", y viceversa.
- El conjunto vacio es subconjunto de cualquier conjunto.
- Las familias indexadas permiten pasar del lenguaje de "algunos conjuntos" al de colecciones arbitrarias.

## Ejercicios

1. Prueba por doble inclusion que $\{x \in \mathbb{R} : x^2 < 1\} = (-1,1)$.
2. Niega correctamente la afirmacion: "para todo $x \in A$ existe $y \in B$ tal que $xRy$".
3. Decide si cada expresion tiene sentido y, si lo tiene, si es verdadera: $2 \in \{2\}$, $\{2\} \in \{2\}$, $\{2\} \subseteq \{2\}$.
4. Demuestra que si $A \subseteq B$ y $B \subseteq C$, entonces $A \subseteq C$.
5. Describe explicitamente $\mathcal{P}(\{1,2,3\})$.
