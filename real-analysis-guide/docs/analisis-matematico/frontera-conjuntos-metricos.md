---
title: Frontera en metricos
description: Frontera, exterior, formulas equivalentes y comportamiento topologico de la frontera en espacios metricos.
---

# Frontera en metricos

## Motivacion e intuicion

La frontera de un conjunto es el lugar donde el conjunto y su complemento se mezclan a cualquier escala. Son los puntos en los que no puede decidirse localmente, por medio de una bola pequena, si uno esta definitivamente dentro o definitivamente fuera.

En $\mathbb{R}$ esta intuicion suele representarse por extremos, bordes y curvas. En un espacio metrico general hay que olvidar el dibujo y volver a la definicion local:

- si alrededor de un punto cabe una bola contenida en $A$, el punto es interior;
- si alrededor de un punto cabe una bola contenida en $X\setminus A$, el punto es exterior;
- si ninguna de esas dos cosas ocurre, el punto esta en la frontera.

La frontera es, por tanto, la zona de indecision topologica del conjunto.

## Prerrequisitos

Conviene manejar:

- abiertos y cerrados en metricos;
- interior y clausura;
- puntos adherentes y conjuntos densos.

## Definiciones formales

Sea $(X,d)$ un espacio metrico y sea $A \subseteq X$.

### Frontera

La **frontera** de $A$, denotada por $\partial A$, se define por

$$
\partial A=\overline{A}\setminus \operatorname{int}(A).
$$

### Exterior

El **exterior** de $A$ es el interior de su complemento:

$$
\operatorname{ext}(A)=\operatorname{int}(X\setminus A).
$$

### Punto de frontera

Diremos que $x \in X$ es un **punto de frontera** de $A$ si

$$
x \in \partial A.
$$

## Interpretacion en lenguaje natural

Un punto de frontera de $A$ es un punto alrededor del cual siempre aparecen puntos de $A$ y tambien puntos de fuera de $A$. Ninguna bola centrada en el logra separarse de una de las dos partes.

La frontera no es necesariamente pequena, ni necesariamente fina, ni necesariamente una curva. Puede incluso tener interior no vacio.

## Ejemplos basicos

### Ejemplo 1: intervalos en $\mathbb{R}$

Si

$$
A=(0,1),
$$

entonces

$$
\partial A=\{0,1\}.
$$

Lo mismo ocurre para

$$
[0,1], \qquad [0,1), \qquad (0,1].
$$

La frontera depende de la posicion topologica del conjunto, no de si los extremos pertenecen o no a el.

### Ejemplo 2: un singleton en $\mathbb{R}$

Si

$$
A=\{0\},
$$

entonces

$$
\partial A=\{0\}.
$$

### Ejemplo 3: racionales

En $\mathbb{R}$, tanto $\mathbb{Q}$ como $\mathbb{R}\setminus\mathbb{Q}$ son densos. Luego

$$
\partial \mathbb{Q}=\mathbb{R}.
$$

Este es un ejemplo importante: la frontera puede coincidir con todo el espacio.

### Ejemplo 4: metrica discreta

En un espacio discreto, todo conjunto es abierto y cerrado. Por tanto, para cualquier $A$:

$$
\partial A=\varnothing.
$$

### Ejemplo 5: bolas en $\mathbb{R}^n$

En un espacio normado euclideo,

$$
\partial B(x,r)=\{y : d(x,y)=r\}.
$$

Es decir, la frontera de una bola abierta es la esfera correspondiente.

## Ejemplos finos y contraejemplos

### Ejemplo fino 1: la frontera no tiene por que pertenecer al conjunto

Para

$$
A=(0,1),
$$

los puntos de frontera son $0$ y $1$, que no pertenecen a $A$.

### Ejemplo fino 2: la frontera puede pertenecer al conjunto

Para

$$
A=[0,1],
$$

la frontera sigue siendo

$$
\{0,1\},
$$

pero ahora si pertenece a $A$.

### Contraejemplo 3: frontera no es lo mismo que esfera

En la metrica discreta,

$$
B(x,1)=\{x\}
$$

es abierto y cerrado, luego su frontera es vacia. Sin embargo, la esfera

$$
S(x,1)=X\setminus\{x\}
$$

puede ser muy grande.

### Ejemplo fino 4: la frontera puede tener interior no vacio

El ejemplo

$$
\partial \mathbb{Q}=\mathbb{R}
$$

muestra que la frontera puede incluso coincidir con todo el espacio, y en particular tener interior no vacio.

### Ejemplo fino 5: conjunto y complemento tienen la misma frontera

Esto ya ocurre en ejemplos elementales:

$$
\partial(0,1)=\partial\big(\mathbb{R}\setminus (0,1)\big)=\{0,1\}.
$$

## Proposiciones y teoremas

### Proposicion 1: caracterizacion por bolas

Para $x \in X$:

$$
x \in \partial A
\iff
\forall r>0,\ B(x,r)\cap A \ne \varnothing
\text{ y }
B(x,r)\cap (X\setminus A)\ne \varnothing.
$$

#### Demostracion

Supongamos primero que

$$
x \in \partial A=\overline{A}\setminus \operatorname{int}(A).
$$

Como

$$
x \in \overline{A},
$$

toda bola alrededor de $x$ corta a $A$.

Ademas, como

$$
x \notin \operatorname{int}(A),
$$

ninguna bola alrededor de $x$ puede quedar contenida en $A$. Luego toda bola alrededor de $x$ contiene algun punto de

$$
X\setminus A.
$$

Reciprocamente, supongamos que toda bola alrededor de $x$ corta tanto a $A$ como a $X\setminus A$.

La primera condicion implica

$$
x \in \overline{A}.
$$

La segunda implica que ninguna bola esta contenida en $A$, luego

$$
x \notin \operatorname{int}(A).
$$

Por tanto

$$
x \in \overline{A}\setminus \operatorname{int}(A)=\partial A.
$$

### Proposicion 2: formula simetrica de la frontera

Se tiene

$$
\partial A=\overline{A}\cap \overline{X\setminus A}.
$$

#### Demostracion

Por la proposicion anterior,

$$
x \in \partial A
$$

si y solo si toda bola alrededor de $x$ corta a $A$ y tambien a $X\setminus A$.

La primera condicion equivale a

$$
x \in \overline{A},
$$

y la segunda a

$$
x \in \overline{X\setminus A}.
$$

Luego

$$
x \in \partial A
\iff
x \in \overline{A}\cap \overline{X\setminus A}.
$$

### Corolario 1

La frontera es cerrada.

#### Justificacion

Es interseccion de dos cerrados.

### Proposicion 3: descomposicion del espacio

Se tiene la particion disjunta

$$
X=\operatorname{int}(A)\ \dot{\cup}\ \partial A\ \dot{\cup}\ \operatorname{ext}(A).
$$

#### Demostracion

Por definicion,

$$
\operatorname{ext}(A)=\operatorname{int}(X\setminus A).
$$

Si un punto esta en $\operatorname{int}(A)$, alguna bola suya queda contenida en $A$, luego no puede estar en la frontera ni en el exterior.

Si un punto esta en $\operatorname{ext}(A)$, alguna bola suya queda contenida en $X\setminus A$, luego no puede estar en la frontera ni en el interior.

Por ultimo, si un punto no esta ni en el interior ni en el exterior, ninguna bola centrada en el queda contenida completamente en $A$ ni en $X\setminus A$. Por tanto toda bola corta a ambos, y el punto esta en la frontera.

### Proposicion 4: relacion con la clausura

Se tiene

$$
\overline{A}=\operatorname{int}(A)\cup \partial A.
$$

Ademas, la union es disjunta.

#### Demostracion

Por definicion,

$$
\partial A=\overline{A}\setminus \operatorname{int}(A).
$$

Luego, reuniendo interior y frontera, se reconstruye exactamente la clausura:

$$
\operatorname{int}(A)\cup \partial A=\overline{A}.
$$

La union es disjunta por construccion.

### Proposicion 5: simetria respecto del complemento

Se tiene

$$
\partial A=\partial (X\setminus A).
$$

#### Demostracion

Usando la formula simetrica:

$$
\partial (X\setminus A)
=
\overline{X\setminus A}\cap \overline{X\setminus (X\setminus A)}
=
\overline{X\setminus A}\cap \overline{A}
=
\partial A.
$$

### Proposicion 6: caracterizacion de abiertos y cerrados por la frontera

Se cumplen las equivalencias:

$$
A \text{ es abierto }
\iff
A \cap \partial A=\varnothing,
$$

y

$$
A \text{ es cerrado }
\iff
\partial A \subseteq A.
$$

#### Demostracion

Supongamos primero que $A$ es abierto. Si $x \in A$, entonces existe una bola

$$
B(x,r)\subseteq A,
$$

de modo que esa bola no corta al complemento. Luego

$$
x \notin \partial A.
$$

Por tanto

$$
A \cap \partial A=\varnothing.
$$

Reciprocamente, supongamos que

$$
A \cap \partial A=\varnothing.
$$

Como

$$
A \subseteq \overline{A}=\operatorname{int}(A)\cup \partial A,
$$

y los puntos de $A$ no estan en la frontera, necesariamente

$$
A \subseteq \operatorname{int}(A).
$$

La inclusion contraria es obvia, asi que

$$
A=\operatorname{int}(A),
$$

y por tanto $A$ es abierto.

Ahora supongamos que $A$ es cerrado. Entonces

$$
\overline{A}=A,
$$

y usando

$$
\partial A=\overline{A}\setminus \operatorname{int}(A)
$$

obtenemos

$$
\partial A \subseteq A.
$$

Reciprocamente, si

$$
\partial A \subseteq A,
$$

entonces

$$
\overline{A}=\operatorname{int}(A)\cup \partial A \subseteq A.
$$

Como siempre

$$
A \subseteq \overline{A},
$$

deducimos

$$
\overline{A}=A,
$$

y por tanto $A$ es cerrado.

### Corolario 2

Se tiene

$$
\partial A=\varnothing
\iff
A \text{ es abierto y cerrado}.
$$

## Resumen conceptual

La frontera puede describirse de varias maneras equivalentes:

$$
\partial A=\overline{A}\setminus \operatorname{int}(A)
=
\overline{A}\cap \overline{X\setminus A}.
$$

Es la parte del espacio donde el conjunto y su complemento aparecen simultaneamente a cualquier escala.

Ademas:

- conjunto y complemento tienen la misma frontera;
- la frontera es cerrada;
- el espacio se descompone en interior, frontera y exterior;
- la frontera detecta apertura, cerradura y clopenidad.

## Ejemplos guiados finales

### Ejemplo guiado 1: por que $\partial(0,1)=\{0,1\}$

Los puntos interiores de $(0,1)$ son exactamente los puntos entre $0$ y $1$. Todo punto fuera de $[0,1]$ es exterior. Los unicos puntos en los que toda bola toca a $(0,1)$ y tambien a su complemento son $0$ y $1$.

### Ejemplo guiado 2: por que $\partial \mathbb{Q}=\mathbb{R}$

Toda bola abierta en $\mathbb{R}$ contiene racionales e irracionales. Luego para todo $x \in \mathbb{R}$ y todo $r>0$:

$$
B(x,r)\cap \mathbb{Q}\ne \varnothing
\qquad \text{y} \qquad
B(x,r)\cap (\mathbb{R}\setminus \mathbb{Q})\ne \varnothing.
$$

Por tanto cada real es punto de frontera de $\mathbb{Q}$.

### Ejemplo guiado 3: frontera vacia en la metrica discreta

Si $A \subseteq X$ y $x \in A$, la bola

$$
B(x,1/2)=\{x\}
$$

queda contenida en $A$ siempre que $x \in A$. Si $x \notin A$, la misma bola queda contenida en el complemento. Luego no hay puntos de frontera.

### Ejemplo guiado 4: la frontera de una bola no siempre es una esfera

En espacios euclideos si ocurre, pero el ejemplo discreto muestra que no es una ley general de todos los metricos. La igualdad entre frontera y esfera depende de la geometria concreta de la metrica.

## Errores comunes

1. Confundir frontera con clausura.
2. Creer que la frontera debe pertenecer siempre al conjunto.
3. Creer que la frontera siempre es pequena o de interior vacio.
4. Identificar automaticamente frontera de una bola con esfera en toda metrica.
5. Olvidar que conjunto y complemento tienen la misma frontera.

## Cierre

La frontera es la interfaz topologica entre un conjunto y su exterior. Comprenderla con precision evita errores intuitivos frecuentes y permite leer con claridad las relaciones entre interior, clausura, densidad y separacion local.

## Ejercicios

### Ejercicio 1

Demuestre que $\partial A = \partial (X \setminus A)$ para todo $A \subseteq X$.

### Ejercicio 2

Demuestre que $\partial A = \overline{A} \cap \overline{X \setminus A}$.

### Ejercicio 3

Calcule $\partial \mathbb{Q}$ en $\mathbb{R}$ con la metrica usual.

### Ejercicio 4

Sea $A \subseteq X$. Demuestre que $\partial A$ es cerrado.

### Ejercicio 5

Demuestre que $A$ es abierto si y solo si $\partial A \cap A = \emptyset$.

### Ejercicio 6

En un espacio discreto, calcule $\partial A$ para cualquier $A \subseteq X$.

### Ejercicio 7

Demuestre que $\text{int}(A) = A \setminus \partial A$.

### Ejercicio 8

Demuestre que $\partial A = \emptyset$ si y solo si $A$ es abierto y cerrado.

### Ejercicio 9

En $\mathbb{R}^2$ con la metrica euclidea, calcule $\partial B(0,1)$.

### Ejercicio 10

Demuestre que $\partial(\partial A) \subseteq \partial A$.

### Ejercicio 11

Sea $A, B \subseteq X$. Demuestre que $\partial(A \cup B) \subseteq \partial A \cup \partial B$.

### Ejercicio 12

De un ejemplo donde $\partial(A \cap B) \neq \partial A \cap \partial B$.

### Ejercicio 13

Demuestre que un conjunto es denso si y solo si su frontera coincide con la clausura del complemento.

### Ejercicio 14

En $\mathbb{R}$, encuentre un conjunto $A$ tal que $\partial A$ tenga interior no vacio.

### Ejercicio 15

Demuestre que $\overline{A} = \text{int}(A) \cup \partial A$ y que $\text{int}(A) \cap \partial A = \emptyset$.

## Soluciones

### Solucion 1

$\partial A = \overline{A} \setminus \text{int}(A) = \overline{A} \cap (X \setminus \text{int}(A)) = \overline{A} \cap \overline{X \setminus A} = \overline{X \setminus A} \setminus \text{int}(X \setminus A) = \partial(X \setminus A)$.

La igualdad clave es $\overline{X \setminus A} = X \setminus \text{int}(A)$ y $\text{int}(X \setminus A) = X \setminus \overline{A}$. $\blacksquare$

### Solucion 2

$\partial A = \overline{A} \setminus \text{int}(A) = \overline{A} \cap (X \setminus \text{int}(A))$.

Como $\text{int}(A) \subseteq A \subseteq \overline{A}$, tenemos $X \setminus \text{int}(A) = \overline{X \setminus A}$.

Por tanto $\partial A = \overline{A} \cap \overline{X \setminus A}$. $\blacksquare$

### Solucion 3

Como $\mathbb{Q}$ es denso en $\mathbb{R}$ y $\mathbb{R} \setminus \mathbb{Q}$ tambien es denso:

$$
\overline{\mathbb{Q}} = \mathbb{R} \quad \text{y} \quad \overline{\mathbb{R} \setminus \mathbb{Q}} = \mathbb{R}.
$$

Como $\text{int}(\mathbb{Q}) = \emptyset$:

$$
\partial \mathbb{Q} = \overline{\mathbb{Q}} \cap \overline{\mathbb{R} \setminus \mathbb{Q}} = \mathbb{R} \cap \mathbb{R} = \mathbb{R}.
$$

Todo real es frontera de $\mathbb{Q}$. $\blacksquare$

### Solucion 4

$\partial A = \overline{A} \cap \overline{X \setminus A}$ es interseccion de dos cerrados, por tanto cerrado. $\blacksquare$

### Solucion 5

$\Rightarrow)$ Si $A$ es abierto, entonces $A = \text{int}(A)$. Por tanto $\partial A = \overline{A} \setminus A$.

Si $x \in \partial A \cap A$, entonces $x \in A = \text{int}(A)$, pero $\partial A \cap \text{int}(A) = \emptyset$. Contradiccion.

$\Leftarrow)$ Si $\partial A \cap A = \emptyset$, entonces $A \subseteq \text{int}(A)$ (pues $\overline{A} = A \cup \partial A$).

Como $\text{int}(A) \subseteq A$, tenemos $A = \text{int}(A)$, asi $A$ es abierto. $\blacksquare$

### Solucion 6

En un espacio discreto, para todo $x$ y todo $A$:

- Si $x \in A$: $B(x, 1/2) = \{x\} \subseteq A$, asi $x \notin \partial A$.
- Si $x \notin A$: $B(x, 1/2) = \{x\} \subseteq X \setminus A$, asi $x \notin \partial A$.

Por tanto $\partial A = \emptyset$ para todo $A$. $\blacksquare$

### Solucion 7

$\text{int}(A) = \overline{A} \setminus \partial A = A \cup \partial A \setminus \partial A = A \setminus \partial A$ (usando que $\overline{A} = A \cup \partial A$ y $A \cap \partial A = \emptyset$ si y solo si $A$ es abierto).

Alternativamente: $x \in \text{int}(A) \iff$ existe $r > 0$ con $B(x,r) \subseteq A \iff x \in A$ y $x \notin \partial A$. $\blacksquare$

### Solucion 8

$\Rightarrow)$ Si $\partial A = \emptyset$:

- $A = \overline{A} \setminus \partial A = \overline{A}$, asi $A$ es cerrado.
- $\text{int}(A) = A \setminus \partial A = A$, asi $A$ es abierto.

$\Leftarrow)$ Si $A$ es abierto y cerrado:

- Como es abierto: $A = \text{int}(A)$.
- Como es cerrado: $\overline{A} = A$.

$\partial A = \overline{A} \setminus \text{int}(A) = A \setminus A = \emptyset$. $\blacksquare$

### Solucion 9

$\partial B(0,1) = \{x \in \mathbb{R}^2 : \|x\| = 1\} = S(0,1)$.

Esto es la circunferencia unitaria: puntos exactamente a distancia 1 del origen. $\blacksquare$

### Solucion 10

Como $\partial A$ es cerrado y tiene interior vacio (porque $\partial A = \overline{A} \setminus \text{int}(A)$ y cualquier punto de $\partial A$ tiene puntos tanto de $A$ como de $X \setminus A$ arbitrariamente cerca):

$\partial(\partial A) = \overline{\partial A} \setminus \text{int}(\partial A) = \partial A \setminus \emptyset = \partial A$.

En general $\partial(\partial A) \subseteq \partial A$ (puede ser estricta). $\blacksquare$

### Solucion 11

$\partial(A \cup B) = \overline{A \cup B} \setminus \text{int}(A \cup B)$.

Como $\overline{A \cup B} \subseteq \overline{A} \cup \overline{B}$ y $\text{int}(A \cup B) \supseteq \text{int}(A) \cup \text{int}(B)$:

$\partial(A \cup B) \subseteq (\overline{A} \cup \overline{B}) \setminus (\text{int}(A) \cup \text{int}(B)) \subseteq \partial A \cup \partial B$. $\blacksquare$

### Solucion 12

En $\mathbb{R}$, sea $A = [0, 1]$ y $B = [1, 2]$.

$\partial A = \{0, 1\}$, $\partial B = \{1, 2\}$, $\partial A \cap \partial B = \{1\}$.

Pero $A \cap B = \{1\}$, y $\partial(A \cap B) = \partial(\{1\}) = \{1\}$.

En este caso $\partial(A \cap B) = \partial A \cap \partial B$. Para un contraejemplo, tomamos $A = [0, 1]$ y $B = (1, 2]$:

$A \cap B = \emptyset$, asi $\partial(A \cap B) = \emptyset$, pero $\partial A \cap \partial B = \{1\}$. $\blacksquare$

### Solucion 13

$A$ es denso si y solo si $\overline{A} = X$ si y solo si $X \setminus \text{int}(X \setminus A) = X$ si y solo si $\text{int}(X \setminus A) = \emptyset$.

$\partial A = \overline{A} \cap \overline{X \setminus A} = X \cap \overline{X \setminus A} = \overline{X \setminus A}$.

Por tanto $A$ denso $\iff \partial A = \overline{X \setminus A}$. $\blacksquare$

### Solucion 14

Sea $A = \mathbb{Q} \cap [0, 1]$. Entonces $\partial A = [0, 1]$, que tiene interior no vacio $(0, 1)$. $\blacksquare$

### Solucion 15

$\overline{A} = A \cup \{x : \forall r > 0, B(x,r) \cap A \neq \emptyset\} = A \cup \partial A$ (los puntos de $\overline{A} \setminus A$ son exactamente los puntos de $\partial A$).

Como $\text{int}(A) \cap \partial A = \emptyset$ (definicion de $\partial A$):

$$
\overline{A} = \text{int}(A) \cup (\partial A \setminus \text{int}(A)) = \text{int}(A) \cup \partial A.
$$

La union es disjunta. $\blacksquare$

---

## Referencias y lecturas adicionales

1. Munkres, J.R. (2000). *Topology*. Prentice Hall.
2. Engelking, R. (1989). *General Topology*. Heldermann Verlag.
3. Simmons, G.F. (1963). *Introduction to Topology and Modern Analysis*. McGraw-Hill.
4. Dugundji, J. (1966). *Topology*. Allyn and Bacon.
