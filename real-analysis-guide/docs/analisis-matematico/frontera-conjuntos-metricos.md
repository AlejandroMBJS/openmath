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
