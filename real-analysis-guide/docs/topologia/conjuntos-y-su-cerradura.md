---
title: Conjuntos y su cerradura
description: Clausura, puntos adherentes, caracterizaciones por entornos y propiedades algebraicas de la cerradura.
---

# Conjuntos y su cerradura

## Motivacion e intuicion

La cerradura de un conjunto es el menor cerrado que lo contiene. Intuitivamente, agrega todos los puntos que no pueden separarse del conjunto por medios topologicos. Es el operador que traduce la idea de "acumularse hacia" sin depender de una metrica.

## Prerrequisitos

Conviene manejar cerrados, complementos y vecindades.

## Definiciones formales

Sea $(X,\tau)$ un espacio topologico y $A \subseteq X$.

### Cerradura

La **cerradura** de $A$ se define por

$$
\overline{A} = \bigcap\{F \subseteq X : F \text{ es cerrado y } A \subseteq F\}.
$$

### Punto adherente

Se dice que $x \in X$ es un **punto adherente** a $A$ si

$$
x \in \overline{A}.
$$

### Conjunto denso

Un subconjunto $A \subseteq X$ es **denso** en $X$ si

$$
\overline{A}=X.
$$

## Ejemplos basicos

### Ejemplo 1: intervalos en $\mathbb{R}$

En la topologia usual de $\mathbb{R}$,

$$
\overline{(0,1)} = [0,1].
$$

### Ejemplo 2: racionales

En $\mathbb{R}$ usual,

$$
\overline{\mathbb{Q}} = \mathbb{R}.
$$

### Ejemplo 3: topologia discreta

En un espacio discreto,

$$
\overline{A}=A
$$

para todo $A \subseteq X$, porque todo conjunto ya es cerrado.

### Ejemplo 4: conjuntos infinitos en la cofinita

Si $X$ es infinito con topologia cofinita y $A \subseteq X$ es infinito, entonces

$$
\overline{A}=X.
$$

En particular, todo subconjunto infinito es denso.

## Proposiciones y teoremas centrales

### Teorema 1: caracterizacion por vecindades

Para $x \in X$, las siguientes afirmaciones son equivalentes:

1. 

$$
x \in \overline{A};
$$

2. toda vecindad $V$ de $x$ satisface

$$
V \cap A \ne \varnothing;
$$

3. todo abierto $U$ con $x \in U$ satisface

$$
U \cap A \ne \varnothing.
$$

#### Demostracion

Supongamos $x \in \overline{A}$ y sea $V$ una vecindad de $x$. Si $V \cap A = \varnothing$, existe un abierto $U$ con

$$
x \in U \subseteq V.
$$

Entonces $U \subseteq X \setminus A$. El conjunto $X \setminus U$ es cerrado, contiene a $A$ y no contiene a $x$, contradiciendo que $x$ este en la interseccion de todos los cerrados que contienen a $A$.

La implicacion de 2 a 3 es inmediata porque todo abierto es vecindad.

Supongamos ahora 3. Si $F$ es cerrado con $A \subseteq F$ y $x \notin F$, entonces $X \setminus F$ es un abierto que contiene a $x$ y es disjunto de $A$, contradiccion. Luego $x$ pertenece a todo cerrado que contiene a $A$, es decir, a $\overline{A}$.

### Proposicion 2: propiedades basicas

Para cualesquiera $A,B \subseteq X$:

1. 

$$
A \subseteq \overline{A};
$$

2. si $A \subseteq B$, entonces

$$
\overline{A} \subseteq \overline{B};
$$

3. 

$$
\overline{\overline{A}} = \overline{A};
$$

4. 

$$
\overline{A \cup B} = \overline{A} \cup \overline{B}.
$$

#### Demostracion

La primera inclusion es clara porque todo cerrado que contiene a $A$ contiene a cada punto de $A$.

La monotonia se obtiene observando que todo cerrado que contiene a $B$ contiene a $A$, de modo que al intersectar se obtiene una familia mas pequena de restricciones para $\overline{B}$.

La idempotencia vale porque $\overline{A}$ ya es cerrado y contiene a $A$.

Para la union, un cerrado contiene a $A \cup B$ si y solo si contiene a $A$ y a $B$, y esto lleva a la igualdad.

### Proposicion 3: clausura e interseccion

Para cualesquiera $A,B \subseteq X$ se cumple

$$
\overline{A \cap B} \subseteq \overline{A} \cap \overline{B}.
$$

La inclusion puede ser estricta.

#### Demostracion

Como

$$
A \cap B \subseteq A \qquad \text{y} \qquad A \cap B \subseteq B,
$$

por monotonia

$$
\overline{A \cap B} \subseteq \overline{A}, \qquad \overline{A \cap B} \subseteq \overline{B}.
$$

Luego

$$
\overline{A \cap B} \subseteq \overline{A} \cap \overline{B}.
$$

#### Contraejemplo de igualdad

En $\mathbb{R}$ toma

$$
A=(0,1), \qquad B=(1,2).
$$

Entonces

$$
A \cap B = \varnothing,
$$

de modo que

$$
\overline{A \cap B} = \varnothing.
$$

Pero

$$
\overline{A} \cap \overline{B} = [0,1] \cap [1,2] = \{1\}.
$$

### Proposicion 4: caracterizacion de conjuntos cerrados

Un conjunto $F \subseteq X$ es cerrado si y solo si

$$
\overline{F}=F.
$$

#### Demostracion

Si $F$ es cerrado, por definicion de clausura como menor cerrado que contiene a $F$ se obtiene $\overline{F}=F$.

Reciprocamente, si $\overline{F}=F$, como toda clausura es cerrada, $F$ es cerrado.

### Teorema 5: caracterizaciones de densidad

Para un subconjunto $A \subseteq X$, las siguientes afirmaciones son equivalentes:

1.

$$
\overline{A}=X;
$$

2. todo abierto no vacio $U \subseteq X$ satisface

$$
U \cap A \ne \varnothing;
$$

3. para toda base $\mathcal{B}$ de la topologia, todo elemento no vacio $B \in \mathcal{B}$ satisface

$$
B \cap A \ne \varnothing.
$$

#### Demostracion

La implicacion 1 $\Rightarrow$ 2 es inmediata por la caracterizacion de clausura: si existiera un abierto no vacio $U$ disjunto de $A$, cualquier punto de $U$ no estaria en $\overline{A}$.

La implicacion 2 $\Rightarrow$ 3 es trivial, porque los elementos de una base son abiertos.

Para 3 $\Rightarrow$ 1, supongamos que $\overline{A} \ne X$. Entonces existe

$$
x \in X \setminus \overline{A}.
$$

Por la caracterizacion de clausura, existe un abierto $U$ con

$$
x \in U, \qquad U \cap A = \varnothing.
$$

Como $\mathcal{B}$ es base, existe $B \in \mathcal{B}$ con

$$
x \in B \subseteq U,
$$

y entonces $B$ es un elemento basico no vacio disjunto de $A$, contradiccion.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: cerradura no es lo mismo que union con frontera visual

La nocion de clausura depende de la topologia. En la discreta no se agregan puntos; en la indiscreta, la clausura de todo conjunto no vacio es todo el espacio.

### Contraejemplo 2: un punto de la cerradura no tiene por que pertenecer al conjunto

En $\mathbb{R}$,

$$
0 \in \overline{(0,1)},
$$

pero

$$
0 \notin (0,1).
$$

### Ejemplo fino 3: clausura total de un conjunto pequeno

En $\mathbb{R}$ usual, el conjunto $\mathbb{Q}$ es numerable, pero su clausura es todo $\mathbb{R}$.

### Ejemplo fino 4: densidad sin interior

El conjunto $\mathbb{Q}$ en $\mathbb{R}$ es denso y, sin embargo, su interior es vacio. Esto muestra que "ser grande topologicamente" no significa contener abiertos.

## Errores comunes

1. Pensar que la clausura agrega solo puntos del borde geometrico visible.
2. Confundir "cerradura" con "cerrado".
3. Suponer que la clausura depende de metricas aun cuando la topologia este fijada.
4. Olvidar que la caracterizacion por vecindades es la herramienta mas util en pruebas.

## Resumen operativo

- La cerradura es el menor cerrado que contiene a un conjunto.
- Un punto esta en la cerradura si toda vecindad suya corta al conjunto.
- La clausura es extensa, monotona, idempotente y distribuye sobre uniones finitas.
- La clausura no distribuye en general sobre intersecciones.
- Un conjunto es cerrado exactamente cuando coincide con su clausura.
- La densidad equivale a cortar todo abierto no vacio.

## Ejercicios

1. Calcula la clausura de $(0,1)$ en $\mathbb{R}$ usual.
2. Calcula la clausura de un conjunto no vacio en la topologia indiscreta.
3. Demuestra la monotonia de la clausura.
4. Prueba que $\overline{A \cup B} = \overline{A} \cup \overline{B}$.
5. Decide si en toda topologia se tiene $\overline{A \cap B} = \overline{A} \cap \overline{B}$.
6. Demuestra que $\mathbb{Q}$ es denso en $\mathbb{R}$ usando intervalos con extremos racionales.
