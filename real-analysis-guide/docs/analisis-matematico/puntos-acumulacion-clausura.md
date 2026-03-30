---
title: Puntos de acumulacion y clausura
description: Clausura, adherencia, densidad, puntos de acumulacion y caracterizaciones secuenciales en espacios metricos.
---

# Puntos de acumulacion y clausura

## Motivacion e intuicion

Cuando un conjunto $A$ vive dentro de un espacio metrico, hay dos preguntas naturales:

1. cuales son los puntos que pertenecen efectivamente a $A$;
2. cuales son los puntos a los que $A$ puede acercarse arbitrariamente.

La segunda pregunta es topologicamente mas sutil. Un conjunto puede no contener un punto y, sin embargo, aparecer arbitrariamente cerca de el en todas las escalas. La clausura recoge precisamente esos puntos de adherencia. Los puntos de acumulacion refinan aun mas la idea: no solo exigen cercania del conjunto, sino presencia repetida del conjunto alrededor del punto.

Esta distincion es una de las primeras verdaderamente finas del bloque. Permite separar:

- pertenecer a un conjunto;
- estar arbitrariamente cerca del conjunto;
- ser limite de puntos distintos del conjunto.

## Prerrequisitos

Conviene manejar:

- conjuntos abiertos y cerrados en metricos;
- topologia inducida;
- convergencia de sucesiones en metricos;
- abiertos relativos.

## Definiciones formales

Sea $(X,d)$ un espacio metrico y sea $A \subseteq X$.

### Punto adherente

Un punto $x \in X$ es **adherente** a $A$ si para todo $r>0$ se cumple

$$
B(x,r)\cap A \ne \varnothing.
$$

### Clausura

La **clausura** de $A$, denotada por $\overline{A}$, es el conjunto de todos los puntos adherentes a $A$.

Equivalentemente, puede definirse como la interseccion de todos los cerrados que contienen a $A$.

### Punto de acumulacion

Un punto $x \in X$ es **punto de acumulacion** de $A$ si para todo $r>0$:

$$
\big(B(x,r)\setminus\{x\}\big)\cap A \ne \varnothing.
$$

Es decir, toda bola perforada centrada en $x$ contiene algun punto de $A$.

### Punto aislado

Un punto $x \in A$ es **aislado** en $A$ si existe $r>0$ tal que

$$
B(x,r)\cap A=\{x\}.
$$

### Conjunto derivado

El conjunto de todos los puntos de acumulacion de $A$ se denota por

$$
A'.
$$

### Densidad

Diremos que $A$ es **denso** en $X$ si

$$
\overline{A}=X.
$$

## Interpretacion en lenguaje natural

La clausura de $A$ contiene:

- los puntos de $A$;
- los puntos fuera de $A$ a los que $A$ se pega arbitrariamente;
- los puntos aislados de $A$;
- los puntos de acumulacion de $A$.

En cambio, un punto de acumulacion exige algo mas fuerte: que alrededor suyo siempre haya puntos de $A$ distintos del propio punto. Por eso un punto puede pertenecer a la clausura sin ser de acumulacion.

La intuicion correcta es esta:

- la clausura describe donde el conjunto **llega**;
- los puntos de acumulacion describen donde el conjunto **se amontona**.

## Ejemplos basicos

### Ejemplo 1: un intervalo abierto en $\mathbb{R}$

Si

$$
A=(0,1)\subseteq \mathbb{R},
$$

entonces

$$
\overline{A}=[0,1].
$$

Los puntos $0$ y $1$ no pertenecen a $A$, pero son adherentes porque toda bola alrededor de ellos corta a $(0,1)$.

Ademas,

$$
A'=[0,1],
$$

porque todo punto de $(0,1)$ es de acumulacion y tambien lo son $0$ y $1$.

### Ejemplo 2: un singleton

Si

$$
A=\{x\},
$$

entonces

$$
\overline{A}=\{x\},
\qquad
A'=\varnothing.
$$

El punto $x$ es adherente, pero no es de acumulacion.

### Ejemplo 3: el conjunto $\{1/n : n \in \mathbb{N}\}$

En $\mathbb{R}$, sea

$$
A=\left\{\frac1n : n \in \mathbb{N}\right\}.
$$

Entonces

$$
\overline{A}=A \cup \{0\},
$$

y el unico punto de acumulacion es

$$
A'=\{0\}.
$$

Cada punto $1/n$ es aislado dentro de $A$.

### Ejemplo 4: los racionales

En $\mathbb{R}$,

$$
\overline{\mathbb{Q}}=\mathbb{R}
\qquad \text{y} \qquad
\mathbb{Q}'=\mathbb{R}.
$$

Todo real es punto de acumulacion de los racionales.

### Ejemplo 5: metrica discreta

En un espacio con metrica discreta, todo subconjunto $A$ satisface

$$
\overline{A}=A
\qquad \text{y} \qquad
A'=\varnothing.
$$

No hay puntos de acumulacion porque las bolas pequenas aislan cada punto.

## Ejemplos finos y contraejemplos

### Ejemplo fino 1: un punto de acumulacion puede no pertenecer al conjunto

En

$$
A=(0,1),
$$

los puntos $0$ y $1$ son de acumulacion sin pertenecer a $A$.

### Ejemplo fino 2: un punto del conjunto puede no ser de acumulacion

En

$$
A=\{0\},
$$

el punto $0$ pertenece al conjunto y a la clausura, pero no es de acumulacion.

### Contraejemplo 3: adherente no implica de acumulacion

El ejemplo del singleton muestra que adherencia y acumulacion no son equivalentes.

### Ejemplo fino 4: un conjunto puede ser denso y muy pequeno desde otro punto de vista

Los racionales son numerables, pero densos en $\mathbb{R}$.

### Ejemplo fino 5: el derivado puede ser mucho mas pequeno que la clausura

Para

$$
A=\left\{\frac1n : n \in \mathbb{N}\right\},
$$

se tiene

$$
\overline{A}=A \cup \{0\},
\qquad
A'=\{0\}.
$$

## Proposiciones y teoremas

### Proposicion 1: caracterizacion de la clausura por bolas

Para $x \in X$:

$$
x \in \overline{A}
\iff
\forall r>0,\ B(x,r)\cap A \ne \varnothing.
$$

#### Demostracion

Esto es simplemente la definicion de punto adherente. La clausura fue definida como el conjunto de todos los puntos adherentes.

### Proposicion 2: caracterizacion secuencial de la clausura

En un espacio metrico,

$$
x \in \overline{A}
\iff
\exists (a_n)\subseteq A \text{ tal que } a_n \to x.
$$

#### Demostracion

Supongamos primero que existe una sucesion $(a_n)$ en $A$ con

$$
a_n \to x.
$$

Sea $r>0$. Como la sucesion converge, existe $N$ tal que

$$
n \ge N \implies a_n \in B(x,r).
$$

En particular,

$$
B(x,r)\cap A \ne \varnothing.
$$

Luego

$$
x \in \overline{A}.
$$

Reciprocamente, supongamos

$$
x \in \overline{A}.
$$

Entonces, para cada $n \in \mathbb{N}$,

$$
B\left(x,\frac1n\right)\cap A \ne \varnothing.
$$

Elegimos

$$
a_n \in A \cap B\left(x,\frac1n\right).
$$

Entonces

$$
d(a_n,x)<\frac1n \to 0,
$$

y por tanto

$$
a_n \to x.
$$

### Proposicion 3: caracterizacion secuencial de los puntos de acumulacion

Para $x \in X$:

$$
x \in A'
\iff
\exists (a_n)\subseteq A\setminus\{x\} \text{ tal que } a_n \to x.
$$

#### Demostracion

Supongamos primero que existe una sucesion

$$
(a_n)\subseteq A\setminus\{x\}
$$

con

$$
a_n \to x.
$$

Sea $r>0$. Existe $N$ tal que

$$
n \ge N \implies a_n \in B(x,r).
$$

Como ademas $a_n \ne x$, se sigue que

$$
a_n \in \big(B(x,r)\setminus\{x\}\big)\cap A.
$$

Luego toda bola perforada alrededor de $x$ corta a $A$, y por tanto

$$
x \in A'.
$$

Reciprocamente, supongamos

$$
x \in A'.
$$

Entonces para cada $n \in \mathbb{N}$:

$$
\left(B\left(x,\frac1n\right)\setminus\{x\}\right)\cap A \ne \varnothing.
$$

Elegimos

$$
a_n \in \left(B\left(x,\frac1n\right)\setminus\{x\}\right)\cap A.
$$

Entonces

$$
a_n \in A\setminus\{x\}
\qquad \text{y} \qquad
d(a_n,x)<\frac1n,
$$

por lo que

$$
a_n \to x.
$$

### Proposicion 4: caracterizacion por infinitud local

Si $x \in X$, entonces

$$
x \in A'
\iff
\forall r>0,\ B(x,r)\cap A \text{ contiene infinitos puntos.}
$$

#### Demostracion

Supongamos primero que

$$
x \in A'.
$$

Sea $r>0$. Queremos ver que

$$
B(x,r)\cap A
$$

no puede ser finito.

Si fuese finito, entonces el conjunto

$$
\big(B(x,r)\cap A\big)\setminus\{x\}
$$

tambien seria finito. Si esta coleccion fuera vacia, ya tendriamos

$$
\big(B(x,r)\setminus\{x\}\big)\cap A=\varnothing,
$$

contradiccion.

Si no es vacia, definimos

$$
\delta=\min\{d(x,a): a \in (B(x,r)\cap A)\setminus\{x\}\}.
$$

Entonces $\delta>0$. Pero la bola perforada

$$
B\left(x,\frac{\delta}{2}\right)\setminus\{x\}
$$

no contiene puntos de $A$, contradiciendo que $x$ es de acumulacion.

Reciprocamente, si toda bola alrededor de $x$ contiene infinitos puntos de $A$, en particular contiene algun punto de $A$ distinto de $x$. Luego

$$
x \in A'.
$$

### Proposicion 5: el conjunto derivado es cerrado

El conjunto $A'$ es cerrado.

#### Demostracion

Usaremos la caracterizacion secuencial de cerrado. Sea $(x_n)$ una sucesion en $A'$ tal que

$$
x_n \to x.
$$

Queremos probar que

$$
x \in A'.
$$

Sea $r>0$. Elegimos $n$ tal que

$$
d(x_n,x)<\frac{r}{4}.
$$

Si ocurre que

$$
x_n=x,
$$

entonces, como $x_n \in A'$, existe un punto

$$
a \in (B(x,r)\setminus\{x\})\cap A.
$$

Ya esta.

Supongamos ahora que

$$
x_n \ne x.
$$

Definimos

$$
\eta=\min\left\{\frac{r}{4},\frac{d(x_n,x)}{2}\right\}>0.
$$

Como $x_n \in A'$, existe

$$
a \in (B(x_n,\eta)\setminus\{x_n\})\cap A.
$$

Mostremos que $a \ne x$. Si fuese $a=x$, tendriamos

$$
d(x_n,x)=d(x_n,a)<\eta\le \frac{d(x_n,x)}{2},
$$

imposible.

Por tanto

$$
a \in A\setminus\{x\}.
$$

Ademas, por desigualdad triangular:

$$
d(a,x)\le d(a,x_n)+d(x_n,x)<\eta+\frac{r}{4}\le \frac{r}{4}+\frac{r}{4}<r.
$$

Luego

$$
a \in (B(x,r)\setminus\{x\})\cap A.
$$

Como $r>0$ era arbitrario, concluimos que

$$
x \in A'.
$$

Por tanto $A'$ es cerrado.

### Proposicion 6: relacion entre clausura y derivado

Se cumple

$$
\overline{A}=A \cup A'.
$$

#### Demostracion

Si $x \in A$, entonces claramente

$$
x \in \overline{A},
$$

porque toda bola alrededor de $x$ contiene al propio $x$.

Si $x \in A'$, entonces toda bola perforada alrededor de $x$ corta a $A$, y por tanto toda bola completa tambien corta a $A$. Luego

$$
x \in \overline{A}.
$$

Esto prueba

$$
A \cup A' \subseteq \overline{A}.
$$

Para la otra inclusion, sea

$$
x \in \overline{A}.
$$

Si $x \in A$, ya esta. Si

$$
x \notin A,
$$

entonces toda bola alrededor de $x$ intersecta a $A$, y como $x$ no pertenece a $A$, ese punto de interseccion es automaticamente distinto de $x$. Luego

$$
\big(B(x,r)\setminus\{x\}\big)\cap A \ne \varnothing
$$

para todo $r>0$, es decir,

$$
x \in A'.
$$

Concluimos que

$$
\overline{A}\subseteq A \cup A'.
$$

Por tanto

$$
\overline{A}=A \cup A'.
$$

### Corolario 1

Un conjunto $A$ es cerrado si y solo si contiene todos sus puntos de acumulacion.

#### Demostracion

Si $A$ es cerrado, entonces

$$
\overline{A}=A.
$$

Pero por la proposicion anterior,

$$
\overline{A}=A \cup A',
$$

luego

$$
A' \subseteq A.
$$

Reciprocamente, si

$$
A' \subseteq A,
$$

entonces

$$
\overline{A}=A \cup A'=A,
$$

y por tanto $A$ es cerrado.

### Corolario 2

El conjunto $A$ es denso en $X$ si y solo si toda bola abierta no vacia corta a $A$.

## Resumen conceptual

En un espacio metrico, las relaciones fundamentales entre un conjunto $A$, su clausura y su derivado son:

$$
A' \subseteq \overline{A},
\qquad
\overline{A}=A \cup A',
$$

y

$$
A \text{ cerrado } \iff A' \subseteq A.
$$

La gran ventaja del contexto metrico es que tanto la clausura como los puntos de acumulacion admiten caracterizaciones secuenciales limpias.

## Ejemplos guiados finales

### Ejemplo guiado 1: el conjunto $\{1/n\}$

Si

$$
A=\left\{\frac1n : n \in \mathbb{N}\right\},
$$

entonces toda sucesion en $A$ que converja en $\mathbb{R}$ solo puede hacerlo a uno de dos tipos de puntos:

- a algun valor $1/k$ mediante sucesiones eventualmente constantes;
- a $0$ mediante la sucesion natural $1/n$.

Por eso

$$
\overline{A}=A \cup \{0\},
\qquad
A'=\{0\}.
$$

### Ejemplo guiado 2: por que $\mathbb{Q}$ es denso

Sea $x \in \mathbb{R}$ y $r>0$. El intervalo

$$
(x-r,x+r)
$$

contiene racionales. Luego toda bola alrededor de $x$ corta a $\mathbb{Q}$, y por tanto

$$
\overline{\mathbb{Q}}=\mathbb{R}.
$$

### Ejemplo guiado 3: aislados frente a acumulacion

En el conjunto

$$
A=\{0\}\cup\left\{\frac1n : n \in \mathbb{N}\right\},
$$

el punto $0$ es de acumulacion, mientras que cada punto $1/n$ es aislado.

### Ejemplo guiado 4: discreto significa sin acumulacion

En un espacio discreto, las bolas suficientemente pequenas son singletons. Por eso ningun punto puede ser de acumulacion de ningun conjunto.

## Errores comunes

1. Confundir pertenencia a $A$ con pertenencia a $\overline{A}$.
2. Confundir punto adherente con punto de acumulacion.
3. Olvidar quitar el punto $x$ en la definicion de acumulacion.
4. Creer que todo punto de un conjunto infinito es de acumulacion.
5. Pasar de "hay puntos cerca" a "hay infinitos puntos cerca" sin demostrarlo.

## Cierre

Clausura y acumulacion son las primeras herramientas que permiten medir como un conjunto se distribuye localmente en el espacio. Con ellas ya no solo sabemos que puntos pertenecen a un conjunto, sino como el conjunto se acerca, se concentra y deja huella en su entorno.

## Ejercicios

### Ejercicio 1

Demuestre que $A \subseteq \overline{A}$ para todo $A \subseteq X$.

### Ejercicio 2

Demuestre que $\overline{A}$ es cerrado para todo $A \subseteq X$.

### Ejercicio 3

Demuestre que $A$ es cerrado si y solo si $A = \overline{A}$.

### Ejercicio 4

Demuestre que $x \in \overline{A}$ si y solo si existe una sucesion $(a_n)$ en $A$ tal que $a_n \to x$.

### Ejercicio 5

Demuestre que $\overline{\overline{A}} = \overline{A}$.

### Ejercicio 6

Caracterice los puntos de acumulacion de $A = \{1/n : n \in \mathbb{N}\}$ en $\mathbb{R}$.

### Ejercicio 7

Demuestre que $\overline{A \cup B} = \overline{A} \cup \overline{B}$.

### Ejercicio 8

De un ejemplo donde $\overline{A \cap B} \neq \overline{A} \cap \overline{B}$.

### Ejercicio 9

Demuestre que si $A \subseteq B$, entonces $\overline{A} \subseteq \overline{B}$.

### Ejercicio 10

Demuestre que $A' \subseteq \overline{A}$, donde $A'$ denota los puntos de acumulacion de $A$.

### Ejercicio 11

Un punto $x$ es aislado de $A$ si existe $r > 0$ tal que $B(x,r) \cap A = \{x\}$. Demuestre que $\overline{A} = A \cup A'$ donde $A'$ son los puntos de acumulacion.

### Ejercicio 12

Demuestre que $\text{int}(A) = X \setminus \overline{X \setminus A}$.

### Ejercicio 13

En $\mathbb{R}$, calcule $\overline{\mathbb{Q}}$ y $\overline{\mathbb{R} \setminus \mathbb{Q}}$.

### Ejercicio 14

Demuestre que $A$ es denso en $X$ si y solo si $\overline{A} = X$.

### Ejercicio 15

Sea $A$ un conjunto infinito en un espacio metrico. Demuestre que $A$ tiene al menos un punto de acumulacion o es discreto.

## Soluciones

### Solucion 1

Por definicion, $\overline{A}$ es el menor cerrado que contiene a $A$. Como $A \subseteq \overline{A}$ por construccion (todo punto de $A$ es adherente a $A$). $\blacksquare$

### Solucion 2

Sea $x \in X \setminus \overline{A}$. Entonces existe $r > 0$ tal que $B(x,r) \cap A = \emptyset$, lo que significa $B(x,r) \subseteq X \setminus \overline{A}$.

Esto demuestra que $X \setminus \overline{A}$ es abierto, por tanto $\overline{A}$ es cerrado. $\blacksquare$

### Solucion 3

$\Rightarrow)$ Si $A$ es cerrado, entonces $A = \overline{A}$ porque $\overline{A}$ es el menor cerrado que contiene a $A$.

$\Leftarrow)$ Si $A = \overline{A}$, entonces $A$ es cerrado porque $\overline{A}$ siempre es cerrado. $\blacksquare$

### Solucion 4

$\Rightarrow)$ Si $x \in \overline{A}$, entonces para todo $n \in \mathbb{N}$, $B(x, 1/n) \cap A \neq \emptyset$.

Elegimos $a_n \in B(x, 1/n) \cap A$. Entonces $d(a_n, x) < 1/n$, asi $a_n \to x$.

$\Leftarrow)$ Si existe $(a_n)$ en $A$ con $a_n \to x$, entonces para todo $r > 0$, existe $N$ con $a_N \in B(x,r)$, asi $B(x,r) \cap A \neq \emptyset$.

Por tanto $x \in \overline{A}$. $\blacksquare$

### Solucion 5

Como $\overline{A}$ es cerrado, $\overline{\overline{A}} = \overline{A}$. $\blacksquare$

### Solucion 6

$A = \{1, 1/2, 1/3, \ldots\}$.

- Cada punto $1/n$ es aislado: $B(1/n, 1/(2n(n+1))) \cap A = \{1/n\}$.
- El punto $0$ es de acumulacion: cualquier bola alrededor de 0 contiene infinitos puntos de $A$.
- No hay otros puntos de acumulacion.

Por tanto $A' = \{0\}$. $\blacksquare$

### Solucion 7

$\overline{A} \cup \overline{B}$ es cerrado y contiene a $A \cup B$, asi $\overline{A \cup B} \subseteq \overline{A} \cup \overline{B}$.

Inversamente, como $A \subseteq A \cup B \subseteq \overline{A \cup B}$ y $\overline{A}$ es el menor cerrado que contiene a $A$: $\overline{A} \subseteq \overline{A \cup B}$.

Similar $\overline{B} \subseteq \overline{A \cup B}$. Por tanto $\overline{A} \cup \overline{B} \subseteq \overline{A \cup B}$. $\blacksquare$

### Solucion 8

En $\mathbb{R}$, sea $A = (0, 1)$ y $B = (1, 2)$.

$\overline{A} = [0, 1]$, $\overline{B} = [1, 2]$, asi $\overline{A} \cap \overline{B} = \{1\}$.

Pero $A \cap B = \emptyset$, asi $\overline{A \cap B} = \emptyset \neq \{1\}$. $\blacksquare$

### Solucion 9

Si $A \subseteq B$, todo cerrado que contiene a $B$ tambien contiene a $A$.

Como $\overline{B}$ es cerrado y contiene a $B$, tambien contiene a $A$.

Como $\overline{A}$ es el menor cerrado que contiene a $A$: $\overline{A} \subseteq \overline{B}$. $\blacksquare$

### Solucion 10

Si $x \in A'$, entonces para todo $r > 0$: $B(x,r) \cap (A \setminus \{x\}) \neq \emptyset$, asi $B(x,r) \cap A \neq \emptyset$.

Por tanto $x$ es adherente a $A$, i.e., $x \in \overline{A}$. $\blacksquare$

### Solucion 11

$\overline{A}$ consiste de:
- los puntos de $A$ (que pueden ser aislados o de acumulacion)
- los puntos de acumulacion de $A$ (que pueden o no pertenecer a $A$)

Si $x$ es de acumulacion de $A$, entonces $x \in A'$. Si $x \in A$ es aislado, entonces $x \notin A'$.

Formalmente: $\overline{A} = A \cup A'$, y $A \cap A'$ son los puntos de acumulacion que pertenecen a $A$. $\blacksquare$

### Solucion 12

$\text{int}(A) = \{x : \exists r > 0, B(x,r) \subseteq A\} = \{x : \exists r > 0, B(x,r) \cap (X \setminus A) = \emptyset\}$.

$X \setminus \overline{X \setminus A} = \{x : x \notin \overline{X \setminus A}\} = \{x : \exists r > 0, B(x,r) \cap (X \setminus A) = \emptyset\}$.

Ambos conjuntos son iguales. $\blacksquare$

### Solucion 13

$\mathbb{Q}$ es denso en $\mathbb{R}$: todo real es limite de una sucesion de racionales. Por tanto $\overline{\mathbb{Q}} = \mathbb{R}$.

Similar $\mathbb{R} \setminus \mathbb{Q}$ es denso en $\mathbb{R}$: todo real es limite de una sucesion de irracionales. Por tanto $\overline{\mathbb{R} \setminus \mathbb{Q}} = \mathbb{R}$. $\blacksquare$

### Solucion 14

Por definicion, $A$ es denso en $X$ si todo punto de $X$ es adherente a $A$, i.e., $\overline{A} = X$. $\blacksquare$

### Solucion 15

Si $A$ no tiene puntos de acumulacion, entonces todo punto de $A$ es aislado.

Para cada $a \in A$, existe $r_a > 0$ tal que $B(a, r_a) \cap A = \{a\}$.

Si existiera una sucesion $(a_n)$ de puntos distintos en $A$, alguno de los puntos $B(a_{n_k}, r_{a_{n_k}})$ deberia contener infinitos terminos, contradiccion.

Por tanto $A$ es a lo sumo numerable, y cada punto es aislado: $A$ es discreto.

Alternativamente: si $A$ es infinito y no tiene puntos de acumulacion, entonces $\overline{A} = A$ (es cerrado) y $A' = \emptyset$, asi cada punto de $A$ es aislado. $\blacksquare$

---

## Referencias y lecturas adicionales

1. Munkres, J.R. (2000). *Topology*. Prentice Hall.
2. Engelking, R. (1989). *General Topology*. Heldermann Verlag.
3. Rudin, W. (1976). *Principles of Mathematical Analysis*. McGraw-Hill.
4. Apostol, T.M. (1974). *Mathematical Analysis*. Addison-Wesley.
5. Bartle, R.G.; Sherbert, D.R. (2000). *Introduction to Real Analysis*. Wiley.
