---
title: Topologia generada por una base
description: Criterio abstracto para generar una topologia desde una familia base y reconstruir todos los abiertos por uniones.
---

# Topologia generada por una base

## Motivacion e intuicion

En la practica rara vez se presenta una topologia listando todos sus abiertos. Lo habitual es especificar una familia elemental de conjuntos y declarar abiertos a las uniones de esa familia. La pregunta decisiva es cuando ese procedimiento funciona correctamente.

## Prerrequisitos

Conviene manejar bases, abiertos y operaciones entre conjuntos.

## Definiciones formales

### Familia base abstracta

Sea $X$ un conjunto y sea $\mathcal{B} \subseteq \mathcal{P}(X)$. Se dice que $\mathcal{B}$ es una **base abstracta** sobre $X$ si:

1. 

$$
X = \bigcup_{B \in \mathcal{B}} B;
$$

2. si $x \in B_1 \cap B_2$ con $B_1,B_2 \in \mathcal{B}$, existe $B_3 \in \mathcal{B}$ tal que

$$
x \in B_3 \subseteq B_1 \cap B_2.
$$

### Topologia generada por $\mathcal{B}$

Se define

$$
\tau(\mathcal{B}) = \left\{ U \subseteq X : U = \bigcup_{\alpha \in A} B_\alpha \text{ con } B_\alpha \in \mathcal{B} \right\}.
$$

Es decir, los abiertos son uniones arbitrarias de elementos basicos.

### Subbase

Una familia $\mathcal{S} \subseteq \mathcal{P}(X)$ se llama **subbase** sobre $X$ si

$$
X = \bigcup_{S \in \mathcal{S}} S.
$$

Las intersecciones finitas de elementos de $\mathcal{S}$ forman entonces una familia

$$
\mathcal{B}(\mathcal{S})
$$

que sirve como base de la topologia generada por $\mathcal{S}$.

## Ejemplos basicos

### Ejemplo 1: intervalos abiertos en $\mathbb{R}$

La familia de los intervalos abiertos genera la topologia usual.

### Ejemplo 2: bolas abiertas

En un espacio metrico, las bolas abiertas satisfacen las dos condiciones anteriores y por tanto generan la topologia metrica.

### Ejemplo 3: topologia del limite inferior

En $\mathbb{R}$, la familia de intervalos semicerrados

$$
[a,b), \qquad a<b,
$$

forma una base y genera una topologia distinta de la usual, llamada topologia del limite inferior.

### Ejemplo 4: una subbase de la topologia usual de $\mathbb{R}$

La familia de rayos abiertos

$$
\{(-\infty,a) : a \in \mathbb{R}\} \cup \{(b,\infty) : b \in \mathbb{R}\}
$$

es una subbase de la topologia usual. En efecto, las intersecciones finitas relevantes son precisamente los intervalos abiertos.

## Proposiciones y teoremas centrales

### Teorema 1: existencia de la topologia generada

Si $\mathcal{B}$ es una base abstracta sobre $X$, entonces $\tau(\mathcal{B})$ es una topologia sobre $X$.

#### Demostracion

Primero,

$$
\varnothing \in \tau(\mathcal{B})
$$

porque puede verse como union vacia. Ademas,

$$
X = \bigcup_{B \in \mathcal{B}} B \in \tau(\mathcal{B})
$$

por la primera condicion.

La estabilidad por uniones arbitrarias es inmediata, porque una union de uniones de elementos de $\mathcal{B}$ vuelve a ser union de elementos de $\mathcal{B}$.

Falta la interseccion finita. Sea

$$
U = \bigcup_{\alpha \in A} B_\alpha, \qquad V = \bigcup_{\beta \in C} C_\beta
$$

con $B_\alpha,C_\beta \in \mathcal{B}$. Si $x \in U \cap V$, existen $\alpha$ y $\beta$ tales que

$$
x \in B_\alpha \cap C_\beta.
$$

Por la segunda condicion de base, existe $D_x \in \mathcal{B}$ con

$$
x \in D_x \subseteq B_\alpha \cap C_\beta \subseteq U \cap V.
$$

Luego

$$
U \cap V = \bigcup_{x \in U \cap V} D_x,
$$

y asi $U \cap V \in \tau(\mathcal{B})$.

### Proposicion 2: unicidad

La topologia generada por $\mathcal{B}$ es la unica topologia sobre $X$ para la cual $\mathcal{B}$ es base.

#### Demostracion

Si $\tau$ es una topologia con base $\mathcal{B}$, por definicion cada abierto de $\tau$ es union de elementos de $\mathcal{B}$, luego $\tau \subseteq \tau(\mathcal{B})$.

Por otro lado, todo elemento de $\mathcal{B}$ es abierto en $\tau$, y por estabilidad por uniones arbitrarias toda union de elementos de $\mathcal{B}$ tambien es abierta en $\tau$. Luego

$$
\tau(\mathcal{B}) \subseteq \tau.
$$

### Proposicion 3: comparacion entre bases

Sean $\mathcal{B}$ y $\mathcal{C}$ bases sobre $X$. Entonces generan la misma topologia si y solo si:

- para todo $B \in \mathcal{B}$ y todo $x \in B$, existe $C \in \mathcal{C}$ tal que

$$
x \in C \subseteq B;
$$

- y reciprocamente con los papeles de $\mathcal{B}$ y $\mathcal{C}$ invertidos.

#### Comentario

Esta es la forma correcta de decir que ambas bases se refinan localmente una a la otra.

### Proposicion 4: una subbase produce una base

Sea $\mathcal{S}$ una subbase sobre $X$. Entonces la familia de todas las intersecciones finitas de elementos de $\mathcal{S}$ forma una base sobre $X$.

#### Demostracion

Como $\mathcal{S}$ cubre a $X$, todo punto pertenece al menos a un elemento de $\mathcal{S}$ y, por tanto, a una interseccion finita de elementos de $\mathcal{S}$.

Si

$$
x \in (S_1 \cap \cdots \cap S_m) \cap (T_1 \cap \cdots \cap T_n),
$$

entonces

$$
x \in S_1 \cap \cdots \cap S_m \cap T_1 \cap \cdots \cap T_n,
$$

y este ultimo conjunto vuelve a ser una interseccion finita de elementos de $\mathcal{S}$ contenida en la interseccion original.

### Corolario

La topologia generada por una subbase es la union arbitraria de intersecciones finitas de conjuntos subbasicos.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: cubrir no basta

La familia

$$
\mathcal{B} = \{(0,1),(1,2)\}
$$

cubre $(0,2)$ salvo el punto $1$, asi que ni siquiera cubre todo el espacio si tomamos $X=(0,2)$. Aunque cubriera, podria fallar la condicion de interseccion.

### Contraejemplo 2: la condicion de interseccion es esencial

En $\mathbb{R}$, la familia

$$
\{(0,2),(1,3)\}
$$

cubre $(0,3)$, pero no es base sobre ese espacio porque en el punto $1.5$ la interseccion

$$
(0,2)\cap(1,3)=(1,2)
$$

no contiene ningun elemento de la familia que siga conteniendo a $1.5$.

### Ejemplo fino 3: bases distintas, misma topologia

Los intervalos abiertos con extremos racionales generan la misma topologia usual de $\mathbb{R}$ que la familia de todos los intervalos abiertos.

## Errores comunes

1. Confundir una base abstracta con una base ya contenida en una topologia dada.
2. Olvidar que la interseccion se controla localmente en cada punto, no globalmente por igualdad.
3. Pensar que toda familia cubierta por uniones define automaticamente una topologia razonable.
4. Suponer que una base es unica.

## Resumen operativo

- Una base abstracta genera una topologia si cubre el espacio y se refina localmente en intersecciones.
- La topologia generada esta formada por todas las uniones de conjuntos basicos.
- Una subbase genera primero una base por intersecciones finitas y luego la topologia por uniones arbitrarias.
- Bases distintas pueden generar la misma topologia.
- Casi todas las topologias concretas se presentan asi.

## Ejercicios

1. Prueba que los intervalos abiertos de $\mathbb{R}$ forman una base.
2. Verifica que los intervalos $[a,b)$ forman una base de una topologia en $\mathbb{R}$.
3. Decide si la familia de intervalos cerrados de $\mathbb{R}$ satisface el criterio de base.
4. Prueba que los intervalos con extremos racionales generan la topologia usual.
5. Construye una familia que cubra el espacio pero no satisfaga la condicion de interseccion.
6. Prueba que los rayos abiertos generan la topologia usual de $\mathbb{R}$.
