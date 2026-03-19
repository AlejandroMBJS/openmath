---
title: Operaciones entre conjuntos
description: Union, interseccion, diferencia, complemento, diferencia simetrica y leyes algebraicas basicas.
---

# Operaciones entre conjuntos

## Motivacion e intuicion

Las operaciones entre conjuntos permiten combinar informacion. La union agrega posibilidades, la interseccion impone condiciones simultaneas, la diferencia elimina casos y el complemento permite reformular negaciones dentro de un universo dado.

En la practica, muchas demostraciones de algebra, topologia y analisis no son otra cosa que identidades entre conjuntos escritas con lenguaje especializado.

## Prerrequisitos

Conviene dominar pertenencia, inclusion y cuantificadores.

## Definiciones formales

Sean $A$, $B$ subconjuntos de un conjunto universo $X$.

### Union

$$
A \cup B = \{x \in X : x \in A \text{ o } x \in B\}.
$$

### Interseccion

$$
A \cap B = \{x \in X : x \in A \text{ y } x \in B\}.
$$

### Diferencia

$$
A \setminus B = \{x \in X : x \in A \text{ y } x \notin B\}.
$$

### Complemento

El complemento de $A$ en $X$ es

$$
A^c = X \setminus A.
$$

### Diferencia simetrica

$$
A \triangle B = (A \setminus B) \cup (B \setminus A).
$$

### Uniones e intersecciones indexadas

Si $(A_i)_{i \in I}$ es una familia de subconjuntos de $X$, se define

$$
\bigcup_{i \in I} A_i = \{x \in X : \exists i \in I \text{ tal que } x \in A_i\},
$$

$$
\bigcap_{i \in I} A_i = \{x \in X : \forall i \in I,\ x \in A_i\}.
$$

## Ejemplos basicos

### Ejemplo 1: union e interseccion finitas

Si

$$
A = \{1,2,3\}, \qquad B = \{3,4\},
$$

entonces

$$
A \cup B = \{1,2,3,4\}, \qquad A \cap B = \{3\}.
$$

### Ejemplo 2: diferencia

Con los mismos conjuntos,

$$
A \setminus B = \{1,2\}, \qquad B \setminus A = \{4\}.
$$

### Ejemplo 3: union indexada

Si $A_n = (-1/n,1/n)$, entonces

$$
\bigcup_{n \in \mathbb{N}} A_n = (-1,1),
$$

porque basta tomar $n$ grande para que un punto fijo de $(-1,1)$ quede dentro de $(-1/n,1/n)$.

### Ejemplo 4: interseccion indexada

Con la misma familia,

$$
\bigcap_{n \in \mathbb{N}} A_n = \{0\}.
$$

## Ejemplos finos y contraejemplos

### Contraejemplo 1: union disjunta no significa union cualquiera

Dos conjuntos son disjuntos si

$$
A \cap B = \varnothing.
$$

No toda union es disjunta. Si $A = \{1,2\}$ y $B = \{2,3\}$, el elemento $2$ aparece en ambos conjuntos.

### Contraejemplo 2: una inclusion puede ser estricta

Siempre se tiene

$$
A \cap B \subseteq A,
$$

pero puede ser inclusion estricta. Por ejemplo, si $A = \{1,2\}$ y $B = \{2\}$, entonces

$$
A \cap B = \{2\} \subsetneq A.
$$

### Contraejemplo 3: una union infinita de conjuntos pequenos puede ser grande

Cada conjunto singleton $\{q\}$ es finito y cerrado en $\mathbb{R}$, pero

$$
\bigcup_{q \in \mathbb{Q}} \{q\} = \mathbb{Q},
$$

y $\mathbb{Q}$ no es cerrado en $\mathbb{R}$.

## Proposiciones y teoremas centrales

### Proposicion 1: leyes conmutativas y asociativas

Para cualesquiera subconjuntos $A$, $B$, $C$ de $X$,

$$
A \cup B = B \cup A, \qquad A \cap B = B \cap A,
$$

$$
(A \cup B) \cup C = A \cup (B \cup C),
$$

$$
(A \cap B) \cap C = A \cap (B \cap C).
$$

#### Idea de demostracion

Todas se prueban traduciendo pertenencia a proposiciones logicas con "o" y "y".

### Proposicion 2: leyes distributivas

Se cumplen

$$
A \cap (B \cup C) = (A \cap B) \cup (A \cap C),
$$

$$
A \cup (B \cap C) = (A \cup B) \cap (A \cup C).
$$

#### Demostracion de la primera

Sea $x \in X$. Entonces

$$
x \in A \cap (B \cup C)
$$

si y solo si $x \in A$ y ademas $(x \in B$ o $x \in C)$. Eso equivale a decir que

$$
(x \in A \cap B) \text{ o } (x \in A \cap C),
$$

es decir,

$$
x \in (A \cap B) \cup (A \cap C).
$$

### Proposicion 3: leyes de De Morgan

Para subconjuntos de un universo fijo $X$,

$$
(A \cup B)^c = A^c \cap B^c,
$$

$$
(A \cap B)^c = A^c \cup B^c.
$$

Mas generalmente, para una familia $(A_i)_{i \in I}$,

$$
\left( \bigcup_{i \in I} A_i \right)^c = \bigcap_{i \in I} A_i^c,
$$

$$
\left( \bigcap_{i \in I} A_i \right)^c = \bigcup_{i \in I} A_i^c.
$$

#### Comentario

Estas formulas son exactamente la traduccion conjuntista de la negacion de un "existe" y de un "para todo".

### Proposicion 4: monotonia

Si $A \subseteq B$, entonces para todo conjunto $C$ se cumple

$$
A \cup C \subseteq B \cup C,
$$

$$
A \cap C \subseteq B \cap C.
$$

#### Demostracion

Si $x \in A \cup C$, entonces o bien $x \in A$ o bien $x \in C$. En el primer caso, como $A \subseteq B$, se tiene $x \in B$. En cualquier caso, $x \in B \cup C$.

La segunda inclusion se demuestra de manera analoga.

### Proposicion 5: caracterizacion de inclusion por union e interseccion

Las siguientes afirmaciones son equivalentes:

1. $A \subseteq B$.
2. $A \cup B = B$.
3. $A \cap B = A$.

#### Demostracion

Si $A \subseteq B$, agregar $A$ a $B$ por union no cambia nada, y al intersectar $A$ con $B$ se recupera $A$.

Reciprocamente, si $A \cup B = B$ y $x \in A$, entonces $x \in A \cup B = B$, luego $A \subseteq B$.

## Errores comunes

1. Usar complementos sin fijar el conjunto universo.
2. Confundir $A \setminus B$ con $B \setminus A$.
3. Pensar que la interseccion vacia implica que uno de los conjuntos es vacio.
4. Olvidar que las leyes de De Morgan para familias infinitas involucran cuantificadores.

## Resumen operativo

- La union corresponde a "o"; la interseccion, a "y".
- El complemento traduce negaciones dentro de un universo fijo.
- Las leyes distributivas y de De Morgan permiten reescribir expresiones complejas.
- Muchas identidades se prueban mostrando equivalencias de pertenencia.

## Ejercicios

1. Demuestra que $A \triangle B = (A \cup B) \setminus (A \cap B)$.
2. Prueba que si $A \subseteq B$, entonces $B^c \subseteq A^c$.
3. Calcula $\bigcup_{n \ge 1} [0,1-1/n]$ y $\bigcap_{n \ge 1} (-1/n,1/n)$.
4. Demuestra las leyes de De Morgan para familias indexadas.
5. Decide si es cierto que $(A \setminus B) \cup B = A \cup B$ para todos $A$, $B$.
