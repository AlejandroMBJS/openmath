---
title: Topologia de subespacio
description: Abiertos relativos, cerrados relativos y formulas de herencia de la topologia sobre subconjuntos.
---

# Topologia de subespacio

## Motivacion e intuicion

En casi toda la matematica se trabaja dentro de subconjuntos de un espacio ambiente: intervalos dentro de $\mathbb{R}$, esferas dentro de $\mathbb{R}^n$, racionales dentro de los reales. La topologia de subespacio formaliza cual es la estructura topologica heredada por ese subconjunto.

## Prerrequisitos

Conviene manejar abiertos, cerrados, clausura e interior.

## Definiciones formales

Sea $(X,\tau)$ un espacio topologico y sea $Y \subseteq X$.

### Topologia de subespacio

La **topologia relativa** o **de subespacio** sobre $Y$ es

$$
\tau_Y = \{Y \cap U : U \in \tau\}.
$$

El espacio topologico $(Y,\tau_Y)$ se llama **subespacio** de $X$.

### Abierto relativo

Un conjunto $A \subseteq Y$ es **abierto en $Y$** si pertenece a $\tau_Y$.

### Cerrado relativo

Un conjunto $F \subseteq Y$ es **cerrado en $Y$** si su complemento relativo

$$
Y \setminus F
$$

es abierto en $Y$.

## Ejemplos basicos

### Ejemplo 1: intervalos relativos

Si $Y=[0,1] \subseteq \mathbb{R}$, entonces

$$
[0,1) = Y \cap (-1,1)
$$

es abierto en $Y$, aunque no es abierto en $\mathbb{R}$.

### Ejemplo 2: racionales como subespacio

En $Y=\mathbb{Q} \subseteq \mathbb{R}$, un abierto tipico es

$$
\mathbb{Q} \cap (a,b).
$$

### Ejemplo 3: un cerrado relativo no tiene por que ser cerrado en el ambiente

En $Y=(0,1)$, el conjunto

$$
\left(0,\frac12\right]
$$

es cerrado en $Y$ porque

$$
Y \setminus \left(0,\frac12\right] = \left(\frac12,1\right)
$$

es abierto en $Y$.

### Ejemplo 4: base relativa en $\mathbb{Q}$

Si $\mathcal{B}$ es la familia de intervalos abiertos de $\mathbb{R}$, entonces

$$
\{\mathbb{Q} \cap B : B \in \mathcal{B}\}
$$

es una base de la topologia relativa de $\mathbb{Q}$.

## Proposiciones y teoremas centrales

### Proposicion 1: la topologia de subespacio es una topologia

La familia $\tau_Y$ definida arriba satisface los axiomas de topologia.

#### Demostracion

Se tiene

$$
\varnothing = Y \cap \varnothing \in \tau_Y, \qquad Y = Y \cap X \in \tau_Y.
$$

Si $A_i = Y \cap U_i$ con $U_i \in \tau$, entonces

$$
\bigcup_i A_i = \bigcup_i (Y \cap U_i) = Y \cap \left(\bigcup_i U_i\right),
$$

y como la union de los $U_i$ es abierta en $X$, la union es abierta en $Y$.

Del mismo modo, para intersecciones finitas:

$$
(Y \cap U_1) \cap (Y \cap U_2) = Y \cap (U_1 \cap U_2).
$$

### Proposicion 2: una base induce una base relativa

Si $\mathcal{B}$ es una base de $(X,\tau)$, entonces

$$
\mathcal{B}_Y = \{Y \cap B : B \in \mathcal{B}\}
$$

es una base de la topologia de subespacio sobre $Y$.

#### Demostracion

Todo abierto relativo es de la forma

$$
Y \cap U
$$

con $U$ abierto en $X$. Si $x \in Y \cap U$, como $\mathcal{B}$ es base de $X$, existe $B \in \mathcal{B}$ tal que

$$
x \in B \subseteq U.
$$

Entonces

$$
x \in Y \cap B \subseteq Y \cap U,
$$

y $Y \cap B \in \mathcal{B}_Y$.

### Proposicion 3: caracterizacion de cerrados relativos

Un conjunto $F \subseteq Y$ es cerrado en $Y$ si y solo si existe un cerrado $C \subseteq X$ tal que

$$
F = Y \cap C.
$$

#### Demostracion

Si $F$ es cerrado en $Y$, entonces $Y \setminus F$ es abierto en $Y$, asi que existe un abierto $U \subseteq X$ con

$$
Y \setminus F = Y \cap U.
$$

Tomando complementos relativos dentro de $Y$ se obtiene

$$
F = Y \cap (X \setminus U),
$$

y $X \setminus U$ es cerrado en $X$.

La implicacion inversa es inmediata por complementar.

### Proposicion 4: formula de la clausura relativa

Si $A \subseteq Y$, entonces la clausura de $A$ en el subespacio $Y$ satisface

$$
\overline{A}^{\,Y} = Y \cap \overline{A}^{\,X}.
$$

#### Demostracion

Sea $x \in Y$. El punto $x$ pertenece a la clausura relativa de $A$ si y solo si toda vecindad relativa de $x$ corta a $A$. Las vecindades relativas de $x$ son de la forma $Y \cap U$ con $U$ abierto en $X$ y $x \in U$. Esto equivale exactamente a decir que toda vecindad ambiente de $x$ corta a $A$, es decir, que

$$
x \in \overline{A}^{\,X}.
$$

Como ademas $x \in Y$, resulta la formula.

### Proposicion 5: interior relativo no se obtiene en general por interseccion

No siempre se cumple

$$
\operatorname{int}_Y(A) = Y \cap \operatorname{int}_X(A).
$$

#### Contraejemplo

Toma

$$
Y=[0,1], \qquad A=[0,1).
$$

Entonces $A$ es abierto en $Y$, luego

$$
\operatorname{int}_Y(A)=A.
$$

Sin embargo,

$$
\operatorname{int}_{\mathbb{R}}(A)=(0,1),
$$

asi que

$$
Y \cap \operatorname{int}_{\mathbb{R}}(A)=(0,1) \ne [0,1).
$$

### Proposicion 6: transitividad del subespacio

Si $Z \subseteq Y \subseteq X$, la topologia que $Z$ hereda de $Y$ coincide con la que hereda directamente de $X$.

#### Demostracion

Un abierto de $Z$ como subespacio de $Y$ es de la forma

$$
Z \cap V
$$

con $V$ abierto en $Y$. Pero $V=Y \cap U$ para algun abierto $U$ en $X$, de modo que

$$
Z \cap V = Z \cap (Y \cap U) = Z \cap U,
$$

que es abierto relativo de $Z$ en $X$.

### Proposicion 7: densidad relativa

Si $A \subseteq Y \subseteq X$, entonces las siguientes afirmaciones son equivalentes:

1. $A$ es denso en el subespacio $Y$;
2.

$$
\overline{A}^{\,Y}=Y;
$$

3.

$$
Y \subseteq \overline{A}^{\,X};
$$

4. todo abierto $U$ de $X$ con

$$
U \cap Y \ne \varnothing
$$

satisface

$$
U \cap A \ne \varnothing.
$$

#### Demostracion

La equivalencia entre 1 y 2 es definicional.

La equivalencia entre 2 y 3 se obtiene aplicando la formula de clausura relativa:

$$
\overline{A}^{\,Y}=Y \cap \overline{A}^{\,X}.
$$

La implicacion 3 $\Rightarrow$ 4 es inmediata: si $U$ es un abierto que corta a $Y$ y escogemos

$$
x \in U \cap Y,
$$

entonces $x \in \overline{A}^{\,X}$, de modo que todo abierto ambiente de $x$ corta a $A$, en particular $U$.

Finalmente, 4 $\Rightarrow$ 3 porque si existiera

$$
x \in Y \setminus \overline{A}^{\,X},
$$

habria un abierto $U$ de $X$ con

$$
x \in U, \qquad U \cap A = \varnothing,
$$

y entonces

$$
U \cap Y \ne \varnothing
$$

pero no cortaria a $A$, contradiccion.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: abierto relativo no implica abierto ambiente

El conjunto $[0,1)$ es abierto en $[0,1]$, pero no en $\mathbb{R}$.

### Contraejemplo 2: cerrado ambiente no implica abierto relativo

Ser cerrado u abierto depende de la topologia considerada. No hay que mezclar el espacio ambiente con el subespacio.

### Ejemplo fino 3: los irracionales heredan otra geometria local

Como subespacio de $\mathbb{R}$, el conjunto de irracionales tiene abiertos de la forma

$$
(\mathbb{R} \setminus \mathbb{Q}) \cap (a,b).
$$

## Errores comunes

1. Olvidar en que espacio se esta tomando abierto o cerrado.
2. Creer que abierto relativo equivale a abierto ambiente.
3. Usar formulas falsas para el interior relativo.
4. Olvidar que las clausuras relativas si tienen una formula simple y util.

## Resumen operativo

- Un subespacio hereda su topologia por interseccion con abiertos del ambiente.
- Una base del ambiente induce automaticamente una base del subespacio.
- Los abiertos y cerrados relativos deben distinguirse de los absolutos.
- La clausura relativa se obtiene intersectando con la clausura ambiente.
- La densidad en un subespacio equivale a estar contenido en la clausura ambiente.
- El subespacio es una de las construcciones mas usadas de toda la topologia.

## Ejercicios

1. Describe todos los abiertos de $[0,1]$ como subespacio de $\mathbb{R}$.
2. Calcula la clausura en $\mathbb{Q}$ del conjunto $\mathbb{Q} \cap (0,1)$.
3. Da un ejemplo de conjunto cerrado en un subespacio pero no en el ambiente.
4. Prueba la transitividad del subespacio.
5. Decide si $(0,1]$ es abierto en $[0,1]$.
6. Demuestra que $\mathbb{Q}$ es denso en $\mathbb{R}$ usando la caracterizacion de densidad relativa.
