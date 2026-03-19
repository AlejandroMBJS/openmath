---
title: Espacios topologicos y axiomas
description: Definicion formal de topologia, abiertos y leyes estructurales fundamentales.
---

# Espacios topologicos y axiomas

## Motivacion e intuicion

Una topologia no se define diciendo "que esta cerca de que" de manera intuitiva, sino especificando que subconjuntos del espacio se consideran abiertos. La eleccion no es arbitraria: debe satisfacer axiomas que formalizan compatibilidad local y estabilidad de la nocion de abierto.

## Prerrequisitos

Conviene manejar inclusion, familias indexadas y operaciones entre conjuntos.

## Definiciones formales

### Topologia

Sea $X$ un conjunto. Una familia $\tau \subseteq \mathcal{P}(X)$ es una **topologia** sobre $X$ si satisface:

1. 

$$
\varnothing \in \tau \quad \text{y} \quad X \in \tau;
$$

2. si $(U_i)_{i \in I}$ es una familia de elementos de $\tau$, entonces

$$
\bigcup_{i \in I} U_i \in \tau;
$$

3. si $U_1,\dots,U_n \in \tau$, entonces

$$
U_1 \cap \cdots \cap U_n \in \tau.
$$

Los elementos de $\tau$ se llaman **abiertos**.

### Espacio topologico

Un **espacio topologico** es un par

$$
(X,\tau),
$$

donde $X$ es un conjunto y $\tau$ es una topologia sobre $X$.

### Topologias extremas

Las topologias

$$
\{\varnothing,X\}
$$

y

$$
\mathcal{P}(X)
$$

se llaman respectivamente **indiscreta** y **discreta**.

### Observacion sobre intersecciones finitas

El tercer axioma suele enunciarse para intersecciones finitas arbitrarias, pero basta exigir estabilidad por interseccion de dos abiertos. En efecto, como

$$
X \in \tau,
$$

la interseccion de un solo abierto es el mismo abierto, y por induccion se obtienen todas las intersecciones finitas.

Tambien conviene recordar que la interseccion vacia de subconjuntos de $X$ se interpreta como $X$, de modo que el caso "cero conjuntos" ya esta absorbido por el primer axioma.

## Ejemplos basicos

### Ejemplo 1: topologia indiscreta

La familia

$$
\tau = \{\varnothing,X\}
$$

satisface inmediatamente los axiomas.

### Ejemplo 2: topologia discreta

La familia

$$
\tau = \mathcal{P}(X)
$$

es una topologia porque cualquier union o interseccion finita de subconjuntos de $X$ sigue siendo un subconjunto de $X$.

### Ejemplo 3: topologia usual de $\mathbb{R}$

La familia de todas las uniones arbitrarias de intervalos abiertos de $\mathbb{R}$ es una topologia.

### Ejemplo 4: topologia cofinita

Si $X$ es infinito, la familia

$$
\tau = \{\varnothing\} \cup \{U \subseteq X : X \setminus U \text{ es finito}\}
$$

es una topologia.

### Ejemplo 5: topologia cocontable

Si $X$ es no numerable, la familia

$$
\tau = \{\varnothing\} \cup \{U \subseteq X : X \setminus U \text{ es numerable}\}
$$

es una topologia. Este ejemplo es mas fino que la cofinita y sigue siendo muy distinto de los espacios metricos habituales.

### Ejemplo 6: topologia de Sierpinski

En

$$
X=\{0,1\},
$$

la familia

$$
\tau=\{\varnothing,\{1\},X\}
$$

es una topologia. Es el ejemplo minimo no trivial donde ya aparecen fenomenos de separacion asimetricos.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: intersecciones arbitrarias de abiertos pueden fallar

En $\mathbb{R}$ con la topologia usual,

$$
\bigcap_{n \ge 1} \left(-\frac1n,\frac1n\right) = \{0\},
$$

y $\{0\}$ no es abierto.

### Contraejemplo 2: unir topologias no produce siempre una topologia

Sea

$$
X=\{1,2,3\},
$$

y considera

$$
\tau_1=\{\varnothing,X,\{1\}\},
$$

$$
\tau_2=\{\varnothing,X,\{2\}\}.
$$

Cada una es topologia, pero

$$
\tau_1 \cup \tau_2
$$

no es topologia porque

$$
\{1\} \cup \{2\} = \{1,2\}
$$

no pertenece a $\tau_1 \cup \tau_2$, de modo que la union no es estable bajo uniones finitas.

### Contraejemplo 3: no basta cerrar bajo uniones finitas

Los axiomas exigen uniones arbitrarias. Esa condicion no puede reemplazarse en general por uniones finitas.

## Proposiciones y teoremas centrales

### Proposicion 1: interseccion de topologias

Si $(\tau_\alpha)_{\alpha \in A}$ es una familia de topologias sobre el mismo conjunto $X$, entonces

$$
\bigcap_{\alpha \in A} \tau_\alpha
$$

es una topologia sobre $X$.

#### Demostracion

Cada $\tau_\alpha$ contiene $\varnothing$ y $X$, luego la interseccion tambien.

Si $(U_i)_{i \in I}$ es una familia de conjuntos pertenecientes a la interseccion, entonces cada $U_i$ pertenece a toda $\tau_\alpha$. Como cada $\tau_\alpha$ es topologia,

$$
\bigcup_{i \in I} U_i \in \tau_\alpha
$$

para todo $\alpha$, y por tanto la union pertenece a la interseccion.

El argumento para intersecciones finitas es igual.

### Teorema 2: topologia generada por una familia arbitraria

Sea

$$
\mathcal{S} \subseteq \mathcal{P}(X)
$$

una familia cualquiera de subconjuntos de $X$. Entonces existe una unica topologia mas gruesa que contiene a $\mathcal{S}$, dada por

$$
\langle \mathcal{S} \rangle = \bigcap\{\tau : \tau \text{ es topologia sobre } X \text{ y } \mathcal{S} \subseteq \tau\}.
$$

#### Demostracion

La familia de topologias sobre $X$ que contienen a $\mathcal{S}$ no es vacia, porque la topologia discreta contiene a toda parte de $\mathcal{P}(X)$.

Por la proposicion anterior, la interseccion de todas esas topologias vuelve a ser una topologia. Por construccion, contiene a $\mathcal{S}$ y esta contenida en cualquier otra topologia que tambien contenga a $\mathcal{S}$.

#### Comentario

Este resultado es la forma mas abstracta de "generar una topologia". La construccion por bases y la construccion por subbases son casos particulares en los que se describe de manera mas concreta esa topologia minima.

### Proposicion 3: estabilidad derivada

En toda topologia:

- la union finita de abiertos es abierta;
- la interseccion de dos abiertos es abierta;
- la interseccion de un abierto con $X$ es abierta.

#### Comentario

Son casos particulares de los axiomas, pero conviene tenerlos disponibles de forma operativa.

### Proposicion 4: caracterizacion de la discreta

Una topologia $\tau$ sobre $X$ es discreta si y solo si todo singleton $\{x\}$ es abierto.

#### Demostracion

Si $\tau$ es discreta, todo subconjunto de $X$ es abierto, en particular todo singleton.

Reciprocamente, si todos los singletons son abiertos y $A \subseteq X$, entonces

$$
A = \bigcup_{x \in A} \{x\},
$$

y por estabilidad por uniones arbitrarias, $A$ es abierto. Luego $\tau=\mathcal{P}(X)$.

### Proposicion 5: caracterizacion de la indiscreta

Una topologia $\tau$ sobre $X$ es indiscreta si y solo si sus unicos cerrados son

$$
\varnothing \quad \text{y} \quad X.
$$

#### Demostracion

Si $\tau$ es indiscreta, sus complementos son exactamente $\varnothing$ y $X$, luego esos son los unicos cerrados.

Reciprocamente, si los unicos cerrados son $\varnothing$ y $X$, sus complementos abiertos tambien son solo $\varnothing$ y $X$, de modo que la topologia es indiscreta.

## Errores comunes

1. Exigir intersecciones arbitrarias de abiertos en lugar de finitas.
2. Olvidar que la union indexada puede ser infinita o incluso vacia.
3. Pensar que cualquier familia de subconjuntos es una topologia.
4. Confundir la union de topologias con la topologia generada por su union.

## Resumen operativo

- Una topologia se da por abiertos y tres axiomas.
- Los abiertos son estables por uniones arbitrarias e intersecciones finitas.
- La interseccion de topologias siempre es topologia.
- Toda familia de subconjuntos genera una topologia minima por interseccion de todas las que la contienen.
- La union de topologias no tiene por que serlo.

## Ejercicios

1. Verifica directamente que la topologia cofinita es una topologia.
2. Da un ejemplo de una familia de subconjuntos que falle solo un axioma.
3. Prueba que en un conjunto finito, la topologia cofinita coincide con la discreta.
4. Describe todas las topologias sobre un conjunto de dos elementos.
5. Demuestra que la interseccion arbitraria de topologias es una topologia.
6. Construye explicitamente la topologia minima sobre $X=\{1,2,3\}$ que contiene a $\{\{1\},\{2,3\}\}$.
