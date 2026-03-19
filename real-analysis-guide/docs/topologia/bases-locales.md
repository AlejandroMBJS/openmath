---
title: Bases locales
description: Bases de vecindades en un punto, primera numerabilidad y control local de la topologia.
---

# Bases locales

## Motivacion e intuicion

Una base global describe todos los abiertos del espacio. Una base local describe solo lo que ocurre alrededor de un punto fijo. En muchas situaciones eso es exactamente lo que se necesita: entender entornos arbitrariamente pequenos de un punto sin cargar con toda la topologia de una vez.

## Prerrequisitos

Conviene manejar vecindades, bases globales y ejemplos topologicos elementales.

## Definiciones formales

Sea $(X,\tau)$ un espacio topologico y $x \in X$.

### Base local en un punto

Una familia $\mathcal{N}_x$ de vecindades de $x$ es una **base local** en $x$ si para toda vecindad $V$ de $x$ existe $N \in \mathcal{N}_x$ tal que

$$
x \in N \subseteq V.
$$

### Espacio de primera numerabilidad

Se dice que $X$ es **de primera numerabilidad** si cada punto $x \in X$ posee una base local numerable.

## Ejemplos basicos

### Ejemplo 1: la recta usual

En $\mathbb{R}$ con la topologia usual, una base local en $x$ es

$$
\{(x-r,x+r): r>0\}.
$$

Una base local numerable es

$$
\left\{\left(x-\frac1n,x+\frac1n\right) : n \in \mathbb{N}\right\}.
$$

### Ejemplo 2: topologia discreta

En un espacio discreto, la familia

$$
\{\{x\}\}
$$

es base local en $x$.

### Ejemplo 3: espacio metrico

En cualquier espacio metrico $(X,d)$,

$$
\left\{B\left(x,\frac1n\right): n \in \mathbb{N}\right\}
$$

es una base local numerable.

## Proposiciones y teoremas centrales

### Proposicion 1: una base global induce bases locales

Si $\mathcal{B}$ es una base de $\tau$, entonces para cada $x \in X$ la subfamilia

$$
\mathcal{B}_x = \{B \in \mathcal{B} : x \in B\}
$$

es una base local en $x$.

#### Demostracion

Sea $V$ una vecindad de $x$. Existe un abierto $U$ tal que

$$
x \in U \subseteq V.
$$

Como $\mathcal{B}$ es base, existe $B \in \mathcal{B}$ con

$$
x \in B \subseteq U \subseteq V.
$$

Entonces $B \in \mathcal{B}_x$ y se verifica la condicion de base local.

### Proposicion 2: caracterizacion de abiertos por bases locales

Sea para cada $x \in X$ una base local $\mathcal{N}_x$. Entonces un conjunto $U \subseteq X$ es abierto si y solo si para todo $x \in U$ existe $N \in \mathcal{N}_x$ tal que

$$
x \in N \subseteq U.
$$

#### Demostracion

Si $U$ es abierto, entonces es vecindad de cada punto suyo, y la propiedad de base local produce el $N$ pedido.

Reciprocamente, si la condicion vale, cada punto de $U$ tiene una vecindad contenida en $U$, luego $U$ es abierto.

### Proposicion 3: primera numerabilidad en espacios metricos

Todo espacio metrico es de primera numerabilidad.

#### Demostracion

Ya se observo que en $(X,d)$ la familia

$$
\left\{B\left(x,\frac1n\right): n \in \mathbb{N}\right\}
$$

es base local numerable para todo $x$.

### Proposicion 4: una topologia no tiene por que ser de primera numerabilidad

Si $X$ es no numerable con la topologia cofinita, entonces $X$ no es de primera numerabilidad.

#### Idea de demostracion

Supongamos que $x \in X$ tuviera una base local numerable $(U_n)_{n \in \mathbb{N}}$. Cada $U_n$ es cofinito, luego su complemento es finito. La union numerable de esos complementos es a lo mas numerable. Como $X$ es no numerable, existe

$$
y \in X \setminus \left(\{x\} \cup \bigcup_{n \in \mathbb{N}} (X \setminus U_n)\right).
$$

Entonces $y \in U_n$ para todo $n$. El abierto

$$
V = X \setminus \{y\}
$$

es vecindad de $x$, pero ningun $U_n$ esta contenido en $V$, contradiciendo que $(U_n)$ fuera base local.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: una base local no tiene por que ser abierta

Si se define base local en terminos de vecindades, sus elementos no tienen por que ser abiertos. Aunque en la practica suele preferirse una base local de abiertos.

### Contraejemplo 2: tener base local en cada punto no implica tener una sola base global numerable

La primera numerabilidad es una condicion puntual. La segunda numerabilidad es una condicion global mucho mas fuerte.

### Ejemplo fino 3: en la discreta todo punto se aisla

La base local minima en un punto es el singleton. Esto muestra cuan fina es la estructura discreta.

## Errores comunes

1. Confundir base local con base global.
2. Creer que primera numerabilidad y segunda numerabilidad son lo mismo.
3. Suponer que toda topologia razonable tiene bases locales numerables.
4. Olvidar fijar el punto respecto del cual se habla de base local.

## Resumen operativo

- Una base local controla las vecindades de un punto.
- Una base global induce automaticamente bases locales.
- Los espacios metricos son de primera numerabilidad.
- Existen topologias naturales que no son de primera numerabilidad.

## Ejercicios

1. Prueba que en la topologia discreta $\{\{x\}\}$ es base local en $x$.
2. Verifica en detalle la proposicion sobre la topologia cofinita no numerable.
3. Da una base local en $0$ para la topologia usual de $\mathbb{R}$.
4. Explica por que una base local numerable es util para estudiar sucesiones.
5. Decide si la topologia indiscreta es de primera numerabilidad.
