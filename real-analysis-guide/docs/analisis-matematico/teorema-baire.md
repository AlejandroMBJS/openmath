---
title: Teorema de Baire
description: Categoria de primera especie, conjuntos residuales y teorema de Baire en espacios metricos completos.
---

# Teorema de Baire

## Motivacion e intuicion

El teorema de Baire dice, en esencia, que un espacio metrico completo no puede descomponerse en una union numerable de conjuntos topologicamente insignificantes. Este principio es una de las herramientas mas profundas del analisis moderno porque convierte completitud en un resultado global de existencia.

No es un teorema de medida ni de cardinalidad. Un conjunto puede ser grande cardinalmente y, sin embargo, ser pequeño en el sentido de categoria. El teorema de Baire explota exactamente esa diferencia.

::: tip Idea central
En un espacio metrico completo, la interseccion numerable de abiertos densos sigue siendo densa.
:::

## Prerrequisitos

Conviene manejar:

- completitud;
- abiertos, cerrados y clausura;
- densidad;
- sucesiones de Cauchy;
- compacidad local de bolas cerradas encajadas en un espacio completo.

## Definiciones formales

Sea $(X,d)$ un espacio metrico.

### Conjunto denso

Un subconjunto $A \subseteq X$ es **denso** si

$$
\overline{A}=X.
$$

Equivalentemente, todo abierto no vacio de $X$ corta a $A$.

### Interior vacio

Un conjunto $A \subseteq X$ tiene **interior vacio** si

$$
\operatorname{int}(A)=\varnothing.
$$

### Conjunto nowhere dense

Un conjunto $A \subseteq X$ es **nowhere dense** si

$$
\operatorname{int}(\overline{A})=\varnothing.
$$

Es decir, ni siquiera su clausura contiene un abierto no vacio.

### Conjunto magro

Un conjunto $M \subseteq X$ es **magro** o **de primera categoria** si puede escribirse como union numerable de conjuntos nowhere dense.

### Conjunto residual

Un conjunto $R \subseteq X$ es **residual** si su complemento es magro.

## Ejemplos basicos

### Ejemplo 1: singletons en $\mathbb{R}$

Todo singleton $\{x\} \subseteq \mathbb{R}$ es cerrado y de interior vacio. Luego es nowhere dense.

### Ejemplo 2: los racionales

Como

$$
\mathbb{Q}=\bigcup_{q \in \mathbb{Q}} \{q\},
$$

y cada singleton es nowhere dense, se concluye que $\mathbb{Q}$ es magro en $\mathbb{R}$.

### Ejemplo 3: un abierto denso

El conjunto

$$
\mathbb{R}\setminus\mathbb{Q}
$$

es residual en $\mathbb{R}$, porque su complemento $\mathbb{Q}$ es magro.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: denso no implica residual

Un conjunto puede ser denso sin ser residual y puede ser residual sin ser abierto. Densidad y categoria son nociones distintas.

### Contraejemplo 2: magro no implica pequeño cardinalmente

El conjunto $\mathbb{Q}$ es numerable y magro, pero tambien existen subconjuntos no numerables magros.

### Contraejemplo 3: el teorema falla sin completitud

En $\mathbb{Q}$ con la metrica usual heredada de $\mathbb{R}$, el espacio es magro en si mismo:

$$
\mathbb{Q}=\bigcup_{q \in \mathbb{Q}}\{q\},
$$

y cada singleton tiene interior vacio. Esto muestra que la completitud es esencial.

## Enunciado principal

### Teorema de Baire

Si $(X,d)$ es un espacio metrico completo y $(U_n)_{n \in \mathbb{N}}$ es una familia de abiertos densos de $X$, entonces

$$
\bigcap_{n=1}^\infty U_n
$$

es denso en $X$.

## Demostracion completa

Sea $V_0$ un abierto no vacio de $X$. Queremos probar que

$$
V_0 \cap \bigcap_{n=1}^\infty U_n \ne \varnothing.
$$

Como $U_1$ es denso, el conjunto

$$
V_0 \cap U_1
$$

es abierto no vacio. Elegimos un punto $x_1$ y un radio $r_1>0$ tal que la bola cerrada

$$
\overline{B}(x_1,r_1)
$$

queda contenida en $V_0 \cap U_1$ y ademas

$$
r_1<1.
$$

Supongamos construidas bolas cerradas

$$
\overline{B}(x_n,r_n)
$$

tales que:

1.

$$
\overline{B}(x_n,r_n)\subseteq U_n;
$$

2.

$$
\overline{B}(x_n,r_n)\subseteq B(x_{n-1},r_{n-1}) \quad \text{para } n \ge 2;
$$

3.

$$
r_n<2^{-n}.
$$

Como $U_{n+1}$ es denso, el abierto

$$
B(x_n,r_n)\cap U_{n+1}
$$

es no vacio. Elegimos dentro de el una bola cerrada no vacia

$$
\overline{B}(x_{n+1},r_{n+1})
$$

con

$$
\overline{B}(x_{n+1},r_{n+1}) \subseteq B(x_n,r_n)\cap U_{n+1}
$$

y

$$
r_{n+1}<2^{-(n+1)}.
$$

Esto construye una sucesion de bolas cerradas encajadas.

Veamos que $(x_n)$ es de Cauchy. Si $m>n$, entonces

$$
x_m \in \overline{B}(x_n,r_n),
$$

de modo que

$$
d(x_m,x_n)\le r_n<2^{-n}.
$$

Luego $(x_n)$ es de Cauchy. Como $X$ es completo, existe $x \in X$ tal que

$$
x_n \to x.
$$

Ademas, para cada $n$ y para todo $m \ge n$ se tiene $x_m \in \overline{B}(x_n,r_n)$. Como esa bola es cerrada y $x_m \to x$, se concluye

$$
x \in \overline{B}(x_n,r_n)\subseteq U_n.
$$

Esto vale para todo $n$, asi que

$$
x \in \bigcap_{n=1}^\infty U_n.
$$

Como la primera bola ya estaba contenida en $V_0$, tambien

$$
x \in V_0.
$$

Hemos probado que todo abierto no vacio $V_0$ corta a

$$
\bigcap_{n=1}^\infty U_n,
$$

luego la interseccion es densa.

## Corolarios fundamentales

### Corolario 1: un completo no vacio no es magro en si mismo

Si $(X,d)$ es completo y no vacio, entonces $X$ no es magro en si mismo.

#### Demostracion

Si

$$
X=\bigcup_{n=1}^\infty A_n
$$

con cada $A_n$ nowhere dense, entonces

$$
U_n = X \setminus \overline{A_n}
$$

es abierto y denso. Por Baire,

$$
\bigcap_{n=1}^\infty U_n
$$

es denso y en particular no vacio. Pero

$$
\bigcap_{n=1}^\infty U_n = X \setminus \bigcup_{n=1}^\infty \overline{A_n},
$$

lo cual contradice que

$$
X=\bigcup_{n=1}^\infty A_n \subseteq \bigcup_{n=1}^\infty \overline{A_n}.
$$

### Corolario 2: interseccion numerable de abiertos densos es residual y densa

En un espacio metrico completo, todo conjunto de la forma

$$
\bigcap_{n=1}^\infty U_n
$$

con $U_n$ abierto y denso es residual y denso.

### Corolario 3: union numerable de cerrados de interior vacio tiene interior vacio

Si

$$
X=\text{completo}, \qquad X \ne \varnothing,
$$

y $(F_n)$ es una familia numerable de cerrados con interior vacio, entonces

$$
\operatorname{int}\left(\bigcup_{n=1}^\infty F_n\right)=\varnothing.
$$

## Ejemplos estructurales

### Ejemplo 1: genericos en espacios de funciones

En muchos espacios completos de funciones, se prueban propiedades "tipicas" mostrando que el conjunto de funciones que las satisfacen contiene una interseccion numerable de abiertos densos.

### Ejemplo 2: irracionales como conjunto residual

En $\mathbb{R}$,

$$
\mathbb{R}\setminus\mathbb{Q}
$$

es residual, porque $\mathbb{Q}$ es union numerable de singletons nowhere dense.

### Ejemplo 3: categoria frente a medida

Un conjunto residual puede tener medida cero y un conjunto magro puede tener medida total. Categoria y medida son teorias diferentes.

## Errores comunes

1. Confundir denso con abierto.
2. Confundir nowhere dense con interior vacio.
3. Creer que el teorema vale en cualquier espacio metrico.
4. Pensar que residual significa "grande" en sentido de medida.
5. Omitir el uso de completitud en la construccion de la sucesion encajada.

## Resumen operativo

- Los conjuntos magros son unions numerables de conjuntos nowhere dense.
- En un espacio metrico completo, la interseccion numerable de abiertos densos es densa.
- En particular, un completo no vacio no es magro en si mismo.
- Baire convierte completitud en un principio de existencia global muy potente.

## Ejercicios

1. Demuestra que todo singleton de $\mathbb{R}$ es nowhere dense.
2. Prueba que $\mathbb{Q}$ es magro en $\mathbb{R}$.
3. Verifica en detalle que $\mathbb{Q}$ es magro en si mismo con la metrica usual.
4. Demuestra que si $A$ es nowhere dense, entonces $X \setminus \overline{A}$ es abierto y denso.
5. Explica por que el teorema de Baire falla en $\mathbb{Q}$.
