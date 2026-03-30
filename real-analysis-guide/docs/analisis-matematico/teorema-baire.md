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

### Ejercicio 1

Demuestra que todo singleton de $\mathbb{R}$ es nowhere dense.

### Ejercicio 2

Prueba que $\mathbb{Q}$ es magro en $\mathbb{R}$.

### Ejercicio 3

Verifica en detalle que $\mathbb{Q}$ es magro en si mismo con la metrica usual.

### Ejercicio 4

Demuestra que si $A$ es nowhere dense, entonces $X \setminus \overline{A}$ es abierto y denso.

### Ejercicio 5

Explica por que el teorema de Baire falla en $\mathbb{Q}$.

### Ejercicio 6

Demuestre que el conjunto de los irracionales $\mathbb{R} \setminus \mathbb{Q}$ es residual en $\mathbb{R}$.

### Ejercicio 7

Pruebe que si $X$ es un espacio de Baire y $U \subseteq X$ es abierto, entonces $U$ es un espacio de Baire con la metrica heredada.

### Ejercicio 8

Sea $X$ completo y $A_n$ una sucesion de subconjuntos densos. Demuestre que $\bigcap_n A_n$ es denso.

### Ejercicio 9

Demuestre que todo espacio localmente compacto Hausdorff es un espacio de Baire.

### Ejercicio 10

Pruebe que $\mathbb{R}$ no puede escribirse como union numerable de cerrados de medida cero.

### Ejercicio 11

Sea $X$ espacio de Baire. Demuestre que el conjunto de puntos $x \in X$ con orbital densa bajo una aplicacion continua $f : X \to X$ es residual.

### Ejercicio 12

Pruebe que si $X$ es de Baire, entonces todo abierto no vacio de $X$ es no numerable.

### Ejercicio 13

Sea $X$ completo y $F_n$ una sucesion de cerrados nowhere dense. Demuestre que $X \setminus \bigcup_n F_n$ es residual y denso.

### Ejercicio 14

Pruebe que el conjunto de Cantor es magro en $\mathbb{R}$ pero no es vaco.

### Ejercicio 15

Demuestre que si $X$ es un espacio de Baire, entonces toda familia numerable de abiertos densos tiene interseccion densa.

## Soluciones

### Solucion 1

$\overline{\{x\}} = \{x\}$ tiene interior vaco en $\mathbb{R}$, luego es nowhere dense. $\blacksquare$

### Solucion 2

$\mathbb{Q} = \bigcup_{q \in \mathbb{Q}} \{q\}$, y cada singleton $\{q\}$ es nowhere dense. $\blacksquare$

### Solucion 3

En el subespacio $\mathbb{Q}$, cada singleton $\{q\}$ es abierto en la topologa relativa (porque los puntos son abiertos en $\mathbb{Q}$), y cerrado en $\mathbb{Q}$. Su clausura en $\mathbb{Q}$ es $\{q\}$, que tiene interior vaco en $\mathbb{Q}$, hence es nowhere dense en $\mathbb{Q}$. $\blacksquare$

### Solucion 4

$\overline{A}$ es cerrado, luego $X \setminus \overline{A}$ es abierto. Si no fuera denso, existiria abierto no vaco $U \subseteq X \setminus (X \setminus \overline{A}) = \overline{A}$, lo que implicara que $\overline{A}$ tiene interior no vaco, contradictio con que $A$ es nowhere dense. $\blacksquare$

### Solucion 5

$\mathbb{Q}$ no es espacio de Baire porque $\mathbb{Q} = \bigcup_{q \in \mathbb{Q}} \{q\}$ es unin numerable de cerrados (en el subespacio $\mathbb{Q}$) con interior vaco en $\mathbb{Q}$. El teorema de Baire requiere completitud del espacio, y $\mathbb{Q}$ no es completo. $\blacksquare$

### Solucion 6

$\mathbb{Q} = \bigcup_{q \in \mathbb{Q}} \{q\}$ es unin numerable de cerrados nowhere dense en $\mathbb{R}$, luego es magro. Por tanto $\mathbb{R} \setminus \mathbb{Q} = \mathbb{R} \setminus \bigcup_q \{q\}$ es residual. $\blacksquare$

### Solucion 7

Sea $U \subseteq X$ abierto y $U = \bigcup_n E_n$ con $E_n$ nowhere dense en $U$. Entonces $\overline{E_n}^U = \overline{E_n} \cap U$ tiene interior vaco en $U$. Asi $\overline{E_n}$ tiene interior vaco en $X$ (si $\operatorname{int}(\overline{E_n} \cap U) \ne \varnothing$, existira abierto $V$ en $X$ con $\varnothing \ne V \subseteq \overline{E_n} \cap U \subseteq \overline{E_n}$). Por el teorema de Baire en $X$, $\bigcap_n (U \setminus \overline{E_n}) \ne \varnothing$, luego $U$ no es magro en s mismo. $\blacksquare$

### Solucion 8

Sean $A_n$ densos en $X$ completo. Dado abierto no vaco $V_0$, como $A_1$ es denso, $V_0 \cap A_1$ es abierto no vaco. Sea $\overline{B}(x_1, r_1) \subseteq V_0 \cap A_1$. Como $A_2$ es denso, $B(x_1, r_1) \cap A_2$ es abierto no vaco, contiene $\overline{B}(x_2, r_2)$, etc. Construimos bolas encajadas $\overline{B}(x_n, r_n) \subseteq B(x_{n-1}, r_{n-1}) \cap A_n$ con $r_n < 2^{-n}$. La sucesion $(x_n)$ es de Cauchy, converge a $x \in X$, y $x \in \bigcap_n A_n \cap V_0$. $\blacksquare$

### Solucion 9

Sea $X$ localmente compacto Hausdorff. Cada punto tiene una base de vecindades precompactas (cerradas y compactas). En particular, para cada $x$ y cada vecindad abierta $U$, existe abierto $V$ con $x \in V \subseteq \overline{V} \subseteq U$ y $\overline{V}$ compacto. Esto permite adaptar la demostracion de Baire: dado $U_n$ abierto denso, construir puntos $x_n$ y bolas cerradas encajadas $\overline{B}_n$ de radio $< 2^{-n}$ con $\overline{B}_n \subseteq U_n \cap B_{n-1}$. $\blacksquare$

### Solucion 10

Si $\mathbb{R} = \bigcup_n F_n$ con $F_n$ cerrados de medida cero, por Baire algun $F_n$ tendra interior no vaco, contradictio con que su medida es cero. $\blacksquare$

### Solucion 11

El conjunto de puntos con orbital densa es $\bigcap_{m,n} \{x : f^m(x) \in B(f^n(x), \varepsilon)\}$ intersecado sobre $m,n \in \mathbb{N}$ y $\varepsilon \in \mathbb{Q}^+$. Cada conjunto $\{x : d(f^m(x), f^n(x)) < \varepsilon\}$ es abierto y denso bajo hipotesis adecuadas, luego la interseccion es residual. $\blacksquare$

### Solucion 12

Si $U$ abierto no vaco fuera denso en $X$, entonces $\overline{U}$ es cerrado nowhere dense, y $X = \overline{U} \cup \bigcup_n D_n$ con $D_n$ densos nowhere dense, contradictio con Baire. Alternativamente, si $U$ fuera numerable y cerrado nowhere dense, $X = \overline{U} \cup \bigcup_n \{x_n\}$, contradictio. $\blacksquare$

### Solucion 13

$X \setminus \bigcup_n F_n = \bigcap_n (X \setminus F_n)$. Cada $X \setminus F_n$ es abierto y denso (porque $\operatorname{int}(F_n) = \varnothing$). Por el teorema de Baire, $\bigcap_n (X \setminus F_n)$ es denso. Tambien es residual por definicion de residual. $\blacksquare$

### Solucion 14

El conjunto de Cantor $C$ es cerrado en $\mathbb{R}$, hence completo. Se construye como interseccion numerable de conjuntos $C_n$, cada uno unin finita de intervalos cerrados disjuntos. Cada $C_n$ tiene interior vaco, as $C$ es magro en $\mathbb{R}$. Pero $C$ es no numerable y perfecto, hence no vaco. $\blacksquare$

### Solucion 15

Es la formulacion dual del teorema de Baire. Si $U_n$ son abiertos densos en $X$, sea $V$ abierto no vacio. Como $U_1$ es denso, $V \cap U_1$ es abierto no vacio. Construir $x \in V \cap \bigcap_n U_n$ como en la demostracion del teorema. $\blacksquare$

---

## Referencias y lecturas adicionales

1. Munkres, J.R. (2000). *Topology*. Prentice Hall.
2. Engelking, R. (1989). *General Topology*. Heldermann Verlag.
3. Oxtoby, J.C. (1980). *Measure and Category*. Springer.
4. Willard, S. (2004). *General Topology*. Dover.
5. Kechris, A.S. (1995). *Classical Descriptive Set Theory*. Springer.
6. Cohn, D.L. (2013). *Measure Theory*. Birkhauser.
