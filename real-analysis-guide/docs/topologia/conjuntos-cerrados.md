---
title: Conjuntos cerrados
description: Dualidad abierto-cerrado, axiomas de los cerrados y leyes estructurales fundamentales.
---

# Conjuntos cerrados

## Motivacion e intuicion

En topologia, trabajar solo con abiertos es suficiente, pero no siempre es la forma mas natural. Muchas construcciones se expresan mejor del lado dual: intersecciones de conjuntos estables, clausuras, conjuntos que contienen todos sus puntos limite. Ese lado dual esta codificado por los cerrados.

## Prerrequisitos

Conviene manejar complementos, topologias y ejemplos elementales.

## Definiciones formales

### Conjunto cerrado

Sea $(X,\tau)$ un espacio topologico. Un subconjunto $F \subseteq X$ es **cerrado** si su complemento

$$
X \setminus F
$$

es abierto.

### Familia de cerrados

Denotemos por $\mathcal{F}_\tau$ la familia de todos los cerrados de $(X,\tau)$.

## Ejemplos basicos

### Ejemplo 1: en $\mathbb{R}$ usual

Los intervalos cerrados

$$
[a,b]
$$

son cerrados. Tambien lo son los rayos $(-\infty,a]$ y $[a,\infty)$, asi como los conjuntos finitos.

### Ejemplo 2: en la topologia discreta

Todo subconjunto es cerrado, porque todo subconjunto es abierto.

### Ejemplo 3: en la topologia indiscreta

Solo $\varnothing$ y $X$ son cerrados.

### Ejemplo 4: en la topologia cofinita

Los cerrados son $X$ y los subconjuntos finitos.

## Proposiciones y teoremas centrales

### Proposicion 1: axiomas duales de los cerrados

En todo espacio topologico:

1. 

$$
\varnothing \text{ y } X
$$

son cerrados;
2. la interseccion arbitraria de cerrados es cerrada;
3. la union finita de cerrados es cerrada.

#### Demostracion

Las dos primeras afirmaciones extremas son inmediatas porque $\varnothing$ y $X$ son abiertos.

Si $(F_i)_{i \in I}$ es una familia de cerrados, entonces cada complemento $X \setminus F_i$ es abierto y

$$
X \setminus \bigcap_{i \in I} F_i = \bigcup_{i \in I} (X \setminus F_i),
$$

que es abierto. Luego la interseccion es cerrada.

Si $F_1,\dots,F_n$ son cerrados, entonces

$$
X \setminus (F_1 \cup \cdots \cup F_n) = (X \setminus F_1) \cap \cdots \cap (X \setminus F_n),
$$

y la interseccion finita de abiertos es abierta.

### Proposicion 2: caracterizacion dual

Una familia $\mathcal{F} \subseteq \mathcal{P}(X)$ es la familia de cerrados de alguna topologia sobre $X$ si y solo si:

1. $\varnothing,X \in \mathcal{F}$;
2. $\mathcal{F}$ es estable por intersecciones arbitrarias;
3. $\mathcal{F}$ es estable por uniones finitas.

#### Comentario

Esta proposicion es la version cerrada de los axiomas topologicos.

### Proposicion 3: los singletons cerrados no implican apertura

Que todos los puntos sean cerrados no obliga a que todos sean abiertos.

#### Ejemplo

En un conjunto infinito con topologia cofinita, los singletons son cerrados, pero la topologia no es discreta.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: union arbitraria de cerrados puede fallar

En $\mathbb{R}$,

$$
\bigcup_{n \ge 1} \left\{\frac1n\right\}
$$

no es cerrado, porque su clausura agrega al punto $0$.

### Contraejemplo 2: interseccion finita de abiertos no implica interseccion arbitraria

El dual del ejemplo anterior recuerda que la estructura de cerrados no es simplemente "todo lo contrario" de manera ingenua: las operaciones permitidas cambian de finitas a arbitrarias.

### Ejemplo fino 3: un conjunto puede ser abierto y cerrado

En cualquier topologia, $\varnothing$ y $X$ son simultaneamente abiertos y cerrados. En la discreta, todos los subconjuntos lo son.

## Errores comunes

1. Confundir "cerrado" con "que contiene su frontera" de manera informal.
2. Pensar que cerrado significa "complemento finito" porque eso ocurre en ejemplos particulares.
3. Suponer que union arbitraria de cerrados es cerrada.
4. Creer que un conjunto no puede ser abierto y cerrado a la vez.

## Resumen operativo

- Los cerrados son el lado dual de la topologia.
- Se comportan por intersecciones arbitrarias y uniones finitas.
- Las caracterizaciones por cerrados son tan fundamentales como las de abiertos.
- Muchos operadores topologicos se formulan mas naturalmente en terminos de cerrados.

## Ejercicios

1. Demuestra que en la topologia discreta todo subconjunto es cerrado.
2. Describe los cerrados de la topologia del punto particular.
3. Prueba que la familia de cerrados de una topologia satisface los axiomas duales.
4. Da un ejemplo de un conjunto clopen distinto de $\varnothing$ y $X$.
5. Decide si en $\mathbb{R}$ la union de dos cerrados es cerrada.
