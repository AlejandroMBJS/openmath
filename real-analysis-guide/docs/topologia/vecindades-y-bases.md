---
title: Vecindades y bases
description: Entornos, abiertos locales, bases globales y criterios operativos para describir una topologia.
---

# Vecindades y bases

## Motivacion e intuicion

La topologia se formula por abiertos, pero en muchas pruebas no interesa un abierto completo sino solo lo que ocurre alrededor de un punto. La nocion de vecindad captura precisamente ese comportamiento local. Las bases, por su parte, permiten describir todos los abiertos a partir de una familia mas manejable.

## Prerrequisitos

Conviene manejar la definicion de espacio topologico y ejemplos basicos.

## Definiciones formales

Sea $(X,\tau)$ un espacio topologico.

### Vecindad de un punto

Un subconjunto $V \subseteq X$ es una **vecindad** de $x \in X$ si existe un abierto $U \in \tau$ tal que

$$
x \in U \subseteq V.
$$

### Vecindad abierta

Un conjunto $U$ es una **vecindad abierta** de $x$ si $U$ es abierto y

$$
x \in U.
$$

### Base de una topologia

Una familia $\mathcal{B} \subseteq \tau$ es una **base** de $\tau$ si para todo abierto $U \in \tau$ y todo punto $x \in U$ existe $B \in \mathcal{B}$ tal que

$$
x \in B \subseteq U.
$$

Equivalentemente, todo abierto es union de elementos de $\mathcal{B}$.

### Sistema abstracto de vecindades

Tambien puede definirse la estructura local de un espacio sin mencionar abiertos desde el principio. Un **sistema de vecindades** sobre un conjunto $X$ consiste en una familia $\mathcal{V}(x) \subseteq \mathcal{P}(X)$ para cada $x \in X$ tal que:

1.

$$
X \in \mathcal{V}(x);
$$

2. si $V \in \mathcal{V}(x)$, entonces

$$
x \in V;
$$

3. si $V \in \mathcal{V}(x)$ y

$$
V \subseteq W \subseteq X,
$$

entonces

$$
W \in \mathcal{V}(x);
$$

4. si $V_1,V_2 \in \mathcal{V}(x)$, entonces

$$
V_1 \cap V_2 \in \mathcal{V}(x);
$$

5. si $V \in \mathcal{V}(x)$, existe $W \in \mathcal{V}(x)$ tal que

$$
W \subseteq V
$$

y ademas

$$
W \in \mathcal{V}(y) \quad \text{para todo } y \in W.
$$

Estos axiomas son equivalentes a los de una topologia y muestran que la teoria puede formularse desde el comportamiento local de los puntos.

## Ejemplos basicos

### Ejemplo 1: intervalos abiertos en $\mathbb{R}$

La familia de todos los intervalos abiertos $(a,b)$ es una base de la topologia usual de $\mathbb{R}$.

### Ejemplo 2: bolas abiertas en un espacio metrico

En un espacio metrico, las bolas abiertas forman una base de la topologia inducida.

### Ejemplo 3: vecindades no necesariamente abiertas

En $\mathbb{R}$, el intervalo cerrado

$$
[-1,1]
$$

es vecindad de $0$, porque contiene al abierto $(-1,1)$.

### Ejemplo 4: una base numerable de la recta

La familia de todos los intervalos abiertos con extremos racionales

$$
(a,b), \qquad a,b \in \mathbb{Q}, \ a<b,
$$

es base de la topologia usual de $\mathbb{R}$.

### Ejemplo 5: vecindades en la topologia cofinita

Si $X$ es infinito con topologia cofinita, las vecindades de un punto $x$ son exactamente los conjuntos que contienen a algun cofinito que, a su vez, contiene a $x$.

## Proposiciones y teoremas centrales

### Proposicion 1: caracterizacion de abiertos por vecindades

Un subconjunto $U \subseteq X$ es abierto si y solo si es vecindad de cada uno de sus puntos.

#### Demostracion

Si $U$ es abierto y $x \in U$, basta tomar al mismo $U$ como abierto contenido en $U$.

Reciprocamente, si $U$ es vecindad de cada $x \in U$, para cada tal $x$ existe un abierto $U_x$ con

$$
x \in U_x \subseteq U.
$$

Entonces

$$
U = \bigcup_{x \in U} U_x,
$$

y por tanto $U$ es abierto.

### Proposicion 2: estabilidad de vecindades

Si $V$ es vecindad de $x$ y

$$
V \subseteq W,
$$

entonces $W$ tambien es vecindad de $x$.

#### Demostracion

Existe un abierto $U$ con

$$
x \in U \subseteq V \subseteq W.
$$

### Proposicion 3: interseccion finita de vecindades

Si $V_1,\dots,V_n$ son vecindades de $x$, entonces

$$
V_1 \cap \cdots \cap V_n
$$

es vecindad de $x$.

#### Demostracion

Para cada $k$ existe un abierto $U_k$ tal que

$$
x \in U_k \subseteq V_k.
$$

Entonces

$$
x \in U_1 \cap \cdots \cap U_n \subseteq V_1 \cap \cdots \cap V_n,
$$

y la interseccion finita de abiertos es abierta.

### Proposicion 4: criterio basico para ser base

Si $\mathcal{B} \subseteq \tau$, entonces $\mathcal{B}$ es base de $\tau$ si y solo si todo abierto de $\tau$ es union de elementos de $\mathcal{B}$.

#### Demostracion

Si $\mathcal{B}$ es base y $U$ es abierto, para cada $x \in U$ existe $B_x \in \mathcal{B}$ con

$$
x \in B_x \subseteq U.
$$

Luego

$$
U = \bigcup_{x \in U} B_x.
$$

La implicacion inversa es inmediata.

### Teorema 5: los sistemas de vecindades determinan topologias

Sea $X$ un conjunto y supongamos que para cada $x \in X$ se da una familia $\mathcal{V}(x)$ que satisface los axiomas de sistema abstracto de vecindades. Define

$$
\tau = \{U \subseteq X : \forall x \in U,\ U \in \mathcal{V}(x)\}.
$$

Entonces $\tau$ es una topologia sobre $X$, y las vecindades topologicas de cada punto coinciden exactamente con las familias $\mathcal{V}(x)$.

#### Demostracion

El conjunto vacio pertenece a $\tau$ vacuamente.

Ademas, para todo $x \in X$ se tiene

$$
X \in \mathcal{V}(x),
$$

de modo que $X \in \tau$.

Sea ahora $(U_i)_{i \in I}$ una familia de elementos de $\tau$ y sea

$$
x \in \bigcup_{i \in I} U_i.
$$

Entonces existe $i_0$ tal que $x \in U_{i_0}$, y como $U_{i_0} \in \tau$,

$$
U_{i_0} \in \mathcal{V}(x).
$$

Puesto que

$$
U_{i_0} \subseteq \bigcup_{i \in I} U_i,
$$

por monotonia de vecindades se deduce

$$
\bigcup_{i \in I} U_i \in \mathcal{V}(x).
$$

Luego la union pertenece a $\tau$.

Si $U,V \in \tau$ y $x \in U \cap V$, entonces

$$
U \in \mathcal{V}(x), \qquad V \in \mathcal{V}(x),
$$

y por estabilidad por interseccion finita

$$
U \cap V \in \mathcal{V}(x).
$$

Asi, $U \cap V \in \tau$.

Ya tenemos una topologia.

Falta ver que sus vecindades son exactamente las $\mathcal{V}(x)$. Si $V \in \mathcal{V}(x)$, por el axioma 5 existe $W \in \mathcal{V}(x)$ con

$$
x \in W \subseteq V
$$

y tal que $W \in \mathcal{V}(y)$ para todo $y \in W$. Esto implica que $W \in \tau$, luego $V$ es vecindad topologica de $x$.

Reciprocamente, si $V$ es vecindad topologica de $x$, existe un abierto $U \in \tau$ con

$$
x \in U \subseteq V.
$$

Como $U \in \tau$, se tiene $U \in \mathcal{V}(x)$, y por monotonia tambien

$$
V \in \mathcal{V}(x).
$$

### Corolario

La teoria de vecindades no es un lenguaje auxiliar: es una formulacion equivalente de la topologia.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: una vecindad no tiene por que ser abierta

El conjunto $[-1,1]$ es vecindad de $0$ en $\mathbb{R}$, pero no es abierto.

### Contraejemplo 2: no toda familia de abiertos es base

En $\mathbb{R}$, la familia formada por un unico abierto

$$
\{(-1,1)\}
$$

no es base de la topologia usual porque no puede reconstruir abiertos que no esten contenidos en $(-1,1)$.

### Contraejemplo 3: cubrir puntos no basta

Una familia puede cubrir el espacio sin ser base de una topologia dada. Tambien debe poder refinar localmente cada abierto.

## Errores comunes

1. Identificar vecindad con abierto.
2. Pensar que una base contiene necesariamente a todos los abiertos.
3. Olvidar que la condicion de base es local en cada punto.
4. Usar vecindades sin mencionar alrededor de que punto.

## Resumen operativo

- La vecindad es la nocion local fundamental.
- Un abierto es exactamente un conjunto que es vecindad de todos sus puntos.
- Una base describe todos los abiertos mediante uniones.
- Los sistemas abstractos de vecindades tambien permiten reconstruir una topologia completa.
- Muchas pruebas topologicas se simplifican trabajando con bases en lugar de con todos los abiertos.

## Ejercicios

1. Prueba que toda vecindad abierta de un punto es vecindad de ese punto.
2. Da un ejemplo de un conjunto que sea vecindad de un punto pero no de otro.
3. Verifica que los intervalos racionales $(a,b)$ con $a,b \in \mathbb{Q}$ forman una base de la topologia usual de $\mathbb{R}$.
4. Decide si la familia de intervalos cerrados de $\mathbb{R}$ puede ser base de la topologia usual.
5. Prueba la estabilidad por interseccion finita de vecindades.
6. Reconstruye la topologia discreta a partir de sus sistemas de vecindades.
