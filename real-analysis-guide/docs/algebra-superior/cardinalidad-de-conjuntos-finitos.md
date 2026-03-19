---
title: Cardinalidad de conjuntos finitos
description: Conjuntos finitos, biyecciones, comparacion de tamanos y principio del palomar.
---

# Cardinalidad de conjuntos finitos

## Motivacion e intuicion

Contar rigurosamente significa decidir cuando dos conjuntos tienen el mismo numero de elementos sin depender del orden en que se enumeren. La herramienta correcta no es una lista informal, sino la existencia de una biyeccion.

La cardinalidad finita es el primer punto donde las funciones dejan de ser un lenguaje auxiliar y pasan a medir tamano.

## Prerrequisitos

Conviene dominar biyecciones, inyecciones y suprayecciones.

## Definiciones formales

### Equipotencia

Dos conjuntos $A$ y $B$ son **equipotentes** si existe una biyeccion

$$
f : A \to B.
$$

Se escribe

$$
A \sim B.
$$

### Segmento inicial finito

Para $n \in \mathbb{N}$ con $n \ge 1$, escribimos

$$
[n] = \{1,2,\dots,n\}.
$$

Tambien se admite $[0]=\varnothing$.

### Conjunto finito

Un conjunto $A$ es **finito** si existe $n \in \mathbb{N}$ tal que

$$
A \sim [n].
$$

Ese entero $n$ se llama la **cardinalidad** de $A$ y se denota por $|A|$.

## Ejemplos basicos

### Ejemplo 1: cardinalidad de un conjunto explicito

Si

$$
A = \{a,b,c,d\},
$$

entonces $A$ es finito y $|A|=4$.

### Ejemplo 2: una biyeccion concreta

Los conjuntos

$$
\{2,4,6\} \qquad \text{y} \qquad \{a,b,c\}
$$

tienen la misma cardinalidad porque la aplicacion

$$
2 \mapsto a, \qquad 4 \mapsto b, \qquad 6 \mapsto c
$$

es una biyeccion.

### Ejemplo 3: cardinalidad del producto finito

Si $|A|=2$ y $|B|=3$, entonces

$$
|A \times B| = 6.
$$

## Ejemplos finos y contraejemplos

### Contraejemplo 1: mismo aspecto geometrico no implica misma cardinalidad

Los conjuntos

$$
\{0,1\} \qquad \text{y} \qquad \{a,b,c\}
$$

no son equipotentes, aunque ambos sean "pequenos".

### Contraejemplo 2: una aplicacion sobreyectiva entre finitos puede no ser inyectiva

La funcion

$$
f : \{1,2,3\} \to \{a,b\}, \qquad f(1)=a,\ f(2)=b,\ f(3)=b
$$

es suprayectiva, pero no inyectiva.

## Proposiciones y teoremas centrales

### Proposicion 1: unicidad de la cardinalidad finita

Si $A \sim [m]$ y $A \sim [n]$, entonces

$$
m=n.
$$

#### Comentario

Este resultado garantiza que la definicion de $|A|$ no depende del segmento finito escogido. Su demostracion completa suele basarse en induccion y en que un conjunto de $n$ elementos no puede ser biyectivo con un subconjunto propio suyo.

### Proposicion 2: subconjuntos de conjuntos finitos

Si $A$ es finito y $B \subseteq A$, entonces $B$ es finito y

$$
|B| \le |A|.
$$

#### Idea de demostracion

Se demuestra por induccion sobre $|A|$. Si $B$ fuera un subconjunto propio con la misma cardinalidad, se obtendria una biyeccion entre un conjunto finito y un subconjunto propio, lo cual contradice el principio del palomar.

### Proposicion 3: comparacion por inyecciones y suprayecciones

Sean $A$ y $B$ conjuntos finitos.

1. Si existe una inyeccion $A \to B$, entonces

$$
|A| \le |B|.
$$

2. Si existe una suprayeccion $A \to B$, entonces

$$
|B| \le |A|.
$$

3. Si existe una inyeccion $A \to B$ y una inyeccion $B \to A$, entonces

$$
|A| = |B|.
$$

#### Comentario

En el caso finito, estas comparaciones son equivalentes a intuiciones elementales de conteo.

### Teorema 4: principio del palomar

Si $A$ y $B$ son conjuntos finitos con

$$
|A| > |B|,
$$

entonces no existe una funcion inyectiva

$$
f : A \to B.
$$

Equivalentemente, toda funcion $A \to B$ identifica al menos dos elementos de $A$.

#### Demostracion

Si existiera una inyeccion $f : A \to B$, entonces por la proposicion anterior deberia cumplirse

$$
|A| \le |B|,
$$

contradiccion.

### Proposicion 5: formulas de cardinalidad finita

Si $A$ y $B$ son finitos, entonces:

1. si $A \cap B = \varnothing$, se tiene

$$
|A \cup B| = |A| + |B|;
$$

2. en general,

$$
|A \cup B| = |A| + |B| - |A \cap B|;
$$

3. si $A$ y $B$ son finitos,

$$
|A \times B| = |A| \, |B|.
$$

#### Comentario

Estas formulas convierten identidades conjuntistas en reglas de conteo.

## Errores comunes

1. Pensar que cardinalidad es lo mismo que "forma" o "disposicion".
2. Confundir una enumeracion concreta con la cardinalidad abstracta.
3. Usar el principio del palomar sin justificar que los conjuntos involucrados son finitos.
4. Olvidar restar la interseccion al contar una union no disjunta.

## Resumen operativo

- El tamano finito se mide por biyecciones con segmentos iniciales de naturales.
- Inyecciones y suprayecciones comparan cardinalidades.
- Un subconjunto de un conjunto finito no puede tener mas elementos que el conjunto original.
- El principio del palomar es la forma minima de conteo estructural.

## Ejercicios

1. Construye una biyeccion entre $\{a,b,c\}$ y $\{2,4,6\}$.
2. Prueba que si $|A|=n$, entonces todo subconjunto propio de $A$ tiene cardinalidad estrictamente menor que $n$.
3. Demuestra que si $|A|=m$ y $|B|=n$, entonces $|A \times B| = mn$.
4. En una clase de 13 personas, demuestra que al menos dos cumplen anos en el mismo mes.
5. Si $A$ y $B$ son finitos y existe una biyeccion $A \cup B \to A$, explica por que necesariamente $B=\varnothing$.
