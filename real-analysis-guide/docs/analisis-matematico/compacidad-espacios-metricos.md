---
title: Compacidad en metricos
description: Compacidad por recubrimientos, total acotacion, estabilidad estructural y caracterizacion por completitud mas total acotacion.
---

# Compacidad en metricos

## Motivacion e intuicion

La compacidad es una de las nociones centrales del analisis. En la recta real aparece detras de hechos tan familiares como:

- toda sucesion acotada tiene una subsucesion convergente;
- toda funcion continua en un intervalo cerrado y acotado alcanza maximo y minimo;
- toda familia de abiertos que cubre un compacto puede reducirse a un subrecubrimiento finito.

Lo importante es que estas propiedades no describen solo "tamanio pequeno". Describen una forma fuerte de control global compatible con la estructura local del espacio. En un espacio metrico, la compacidad enlaza:

- recubrimientos abiertos;
- control por bolas pequenas;
- convergencia secuencial;
- completitud;
- total acotacion.

Es una nocion mas rica que la simple acotacion y mas fuerte que la mera completitud.

## Prerrequisitos

Conviene manejar:

- abiertos, cerrados y clausura;
- convergencia de sucesiones en metricos;
- sucesiones de Cauchy y completitud;
- bases de la topologia metrico.

## Definiciones formales

Sea $(X,d)$ un espacio metrico y sea $K \subseteq X$.

### Recubrimiento abierto

Una familia $\{U_i\}_{i \in I}$ de abiertos de $X$ es un **recubrimiento abierto** de $K$ si

$$
K \subseteq \bigcup_{i \in I} U_i.
$$

### Subrecubrimiento finito

Un **subrecubrimiento finito** es una subfamilia finita

$$
U_{i_1},\dots,U_{i_m}
$$

tal que

$$
K \subseteq U_{i_1}\cup \cdots \cup U_{i_m}.
$$

### Compacidad

Decimos que $K$ es **compacto** si todo recubrimiento abierto de $K$ admite un subrecubrimiento finito.

### Total acotacion

Un subconjunto $A \subseteq X$ es **totalmente acotado** si para todo $\varepsilon>0$ existen puntos

$$
x_1,\dots,x_m \in X
$$

tales que

$$
A \subseteq \bigcup_{j=1}^m B(x_j,\varepsilon).
$$

### Observacion

La total acotacion exige que el conjunto pueda cubrirse por **finitas** bolas arbitrariamente pequenas. Esto es mucho mas fuerte que la simple acotacion.

## Interpretacion en lenguaje natural

Un compacto es un conjunto en el que ningun recubrimiento abierto necesita infinitas piezas de forma esencial. Siempre hay un control finito suficiente.

La total acotacion expresa la misma intuicion en lenguaje metrico: no importa cuan pequena sea la escala $\varepsilon$, el conjunto sigue pudiendo describirse con finitas bolas de ese radio.

Estas dos perspectivas terminan siendo equivalentes en espacios metricos una vez se anade completitud.

## Ejemplos basicos

### Ejemplo 1: conjuntos finitos

Todo conjunto finito es compacto.

En efecto, dado un recubrimiento abierto, para cada punto se elige un abierto que lo contenga y se obtiene un subrecubrimiento finito inmediatamente.

### Ejemplo 2: intervalos cerrados y acotados de $\mathbb{R}$

El intervalo

$$
[a,b]
$$

es compacto en $\mathbb{R}$.

Este es el teorema de Heine-Borel en una de sus formas mas clasicas.

### Ejemplo 3: la recta real no es compacta

El recubrimiento

$$
\mathbb{R}=\bigcup_{n=1}^\infty (-n,n)
$$

no admite subrecubrimiento finito.

### Ejemplo 4: un espacio discreto infinito no es compacto

Si $X$ es infinito con metrica discreta, el recubrimiento por singletons

$$
X=\bigcup_{x \in X}\{x\}
$$

no tiene subrecubrimiento finito.

### Ejemplo 5: total acotacion de un intervalo

El conjunto

$$
[0,1]
$$

es totalmente acotado. Dado $\varepsilon>0$, basta dividir el intervalo en finitos subintervalos de longitud menor que $\varepsilon$.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: acotado no implica totalmente acotado

En un espacio infinito con metrica discreta, todo subconjunto tiene diametro menor o igual que $1$, luego es acotado. Pero un subconjunto infinito no es totalmente acotado, porque para $\varepsilon<1$ cada bola de radio $\varepsilon$ contiene un solo punto.

### Contraejemplo 2: total acotado no implica completo

El intervalo

$$
(0,1)
$$

es totalmente acotado, pero no es completo.

### Contraejemplo 3: completo no implica compacto

La recta

$$
\mathbb{R}
$$

es completa, pero no compacta.

### Contraejemplo 4: cerrado y acotado no es criterio universal

En muchos espacios metricos, e incluso normados, un conjunto puede ser cerrado y acotado sin ser compacto. La bola cerrada unitaria en espacios normados infinito-dimensionales tipicos es el ejemplo paradigmatico.

### Ejemplo fino 5: compacto no significa pequeno en cardinalidad

El intervalo $[0,1]$ es no numerable y compacto. La compacidad no mide cardinalidad, sino estructura topologica y metrico-finitaria.

## Proposiciones y teoremas

### Proposicion 1: un cerrado de un compacto es compacto

Sea $K \subseteq X$ compacto y sea $F \subseteq K$ cerrado en $X$. Entonces $F$ es compacto.

#### Demostracion

Sea $\{U_i\}_{i \in I}$ un recubrimiento abierto de $F$. Como $F$ es cerrado, el conjunto

$$
X\setminus F
$$

es abierto. Entonces

$$
\{U_i\}_{i \in I}\cup \{X\setminus F\}
$$

es un recubrimiento abierto de $K$.

Por compacidad de $K$, existe un subrecubrimiento finito

$$
U_{i_1},\dots,U_{i_m},X\setminus F.
$$

Al restringir a $F$, el abierto $X\setminus F$ no aporta nada. Por tanto

$$
F \subseteq U_{i_1}\cup \cdots \cup U_{i_m},
$$

y $F$ es compacto.

### Proposicion 2: todo compacto metrico es cerrado

Si $K \subseteq X$ es compacto, entonces $K$ es cerrado en $X$.

#### Demostracion

Tomemos

$$
x \in X\setminus K.
$$

Para cada $y \in K$, como $x \ne y$, se tiene

$$
d(x,y)>0.
$$

La bola

$$
B\left(y,\frac{d(x,y)}{3}\right)
$$

es abierta y cubre a $K$ cuando $y$ recorre $K$. Por compacidad, existe un subrecubrimiento finito

$$
B\left(y_1,\frac{d(x,y_1)}{3}\right),\dots,
B\left(y_m,\frac{d(x,y_m)}{3}\right).
$$

Definimos

$$
r=\min_{1 \le j \le m}\frac{d(x,y_j)}{3}>0.
$$

Afirmamos que

$$
B(x,r)\cap K=\varnothing.
$$

En efecto, si $z \in B(x,r)\cap K$, entonces $z$ pertenece a alguna de las bolas del subrecubrimiento, digamos

$$
z \in B\left(y_j,\frac{d(x,y_j)}{3}\right).
$$

Por desigualdad triangular,

$$
d(x,y_j)\le d(x,z)+d(z,y_j)<r+\frac{d(x,y_j)}{3}\le \frac{d(x,y_j)}{3}+\frac{d(x,y_j)}{3},
$$

lo cual implica

$$
d(x,y_j)<\frac{2}{3}d(x,y_j),
$$

contradiccion.

Luego $X\setminus K$ es abierto y, por tanto, $K$ es cerrado.

### Proposicion 3: todo compacto metrico es acotado

#### Demostracion

Fijemos un punto $x_0 \in X$. Entonces la familia

$$
\{B(x_0,n)\}_{n \in \mathbb{N}}
$$

es un recubrimiento abierto de $K$.

Por compacidad, existe $N \in \mathbb{N}$ tal que

$$
K \subseteq B(x_0,N).
$$

Luego $K$ es acotado.

### Proposicion 4: todo compacto metrico es totalmente acotado

#### Demostracion

Sea $\varepsilon>0$. La familia de todas las bolas de radio $\varepsilon$ centradas en puntos de $K$:

$$
\{B(x,\varepsilon): x \in K\}
$$

es un recubrimiento abierto de $K$.

Por compacidad, existe un subrecubrimiento finito:

$$
K \subseteq B(x_1,\varepsilon)\cup \cdots \cup B(x_m,\varepsilon).
$$

Esto prueba la total acotacion.

### Proposicion 5: todo compacto metrico es completo

#### Demostracion

Sea $(x_n)$ una sucesion de Cauchy en $K$. Para cada $N \in \mathbb{N}$ definimos la cola

$$
T_N=\{x_n : n \ge N\},
$$

y su clausura

$$
F_N=\overline{T_N}^K,
$$

donde la clausura se toma dentro de $K$.

Cada $F_N$ es no vacio y cerrado en $K$, luego es compacto. Ademas,

$$
F_{N+1}\subseteq F_N
$$

para todo $N$.

Afirmamos que la interseccion de todos ellos es no vacia. En efecto, si fuese vacia, los abiertos

$$
K\setminus F_N
$$

cubririan a $K$. Por compacidad existirian

$$
N_1,\dots,N_m
$$

tal que

$$
K=(K\setminus F_{N_1})\cup \cdots \cup (K\setminus F_{N_m}).
$$

Si $N_*=\max\{N_1,\dots,N_m\}$, entonces

$$
F_{N_*}\subseteq F_{N_j}
$$

para todo $j$, de modo que

$$
F_{N_*}\subseteq \bigcap_{j=1}^m F_{N_j},
$$

lo cual contradice que la interseccion fuese vacia. Luego existe

$$
x \in \bigcap_{N=1}^{\infty} F_N.
$$

Veamos que

$$
x_n \to x.
$$

Sea $\varepsilon>0$. Como $(x_n)$ es de Cauchy, existe $N$ tal que

$$
n,m \ge N \implies d(x_n,x_m)<\frac{\varepsilon}{2}.
$$

Fijado ese $N$, todos los puntos de la cola $T_N$ pertenecen a la bola

$$
B\left(x_N,\frac{\varepsilon}{2}\right),
$$

asi que tambien su clausura $F_N$ queda contenida en la bola cerrada

$$
\overline{B}\left(x_N,\frac{\varepsilon}{2}\right).
$$

Como

$$
x \in F_N,
$$

se tiene

$$
d(x,x_N)\le \frac{\varepsilon}{2}.
$$

Entonces, si $n \ge N$,

$$
d(x_n,x)\le d(x_n,x_N)+d(x_N,x)<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.
$$

Luego

$$
x_n \to x.
$$

Por tanto $K$ es completo.

### Proposicion 6: imagen continua de compacto es compacta

Sean $(X,d_X)$ y $(Y,d_Y)$ espacios metricos, $K \subseteq X$ compacto y

$$
f:K \to Y
$$

continua. Entonces $f(K)$ es compacto.

#### Demostracion

Sea $\{V_i\}_{i \in I}$ un recubrimiento abierto de $f(K)$. Entonces

$$
K \subseteq \bigcup_{i \in I} f^{-1}(V_i).
$$

Como $f$ es continua, cada

$$
f^{-1}(V_i)
$$

es abierto en $K$.

Por compacidad de $K$, existen indices $i_1,\dots,i_m$ tales que

$$
K \subseteq f^{-1}(V_{i_1})\cup \cdots \cup f^{-1}(V_{i_m}).
$$

Aplicando $f$, obtenemos

$$
f(K)\subseteq V_{i_1}\cup \cdots \cup V_{i_m}.
$$

Luego $f(K)$ es compacto.

### Proposicion 7: total acotacion implica separabilidad

Si $A \subseteq X$ es totalmente acotado, entonces $A$ es separable.

#### Demostracion

Para cada $n \in \mathbb{N}$, por total acotacion existe un recubrimiento finito

$$
A \subseteq B(x_1^{(n)},1/n)\cup \cdots \cup B(x_{m_n}^{(n)},1/n).
$$

Definimos

$$
D=\bigcup_{n=1}^{\infty}\{x_1^{(n)},\dots,x_{m_n}^{(n)}\}.
$$

Este conjunto es numerable por ser union numerable de conjuntos finitos.

Veamos que es denso en $A$. Sea $a \in A$ y sea $r>0$. Elegimos $n$ tal que

$$
\frac1n<r.
$$

Como los puntos $x_j^{(n)}$ forman un $1/n$-recubrimiento, existe alguno con

$$
d(a,x_j^{(n)})<\frac1n<r.
$$

Por tanto

$$
B(a,r)\cap D \ne \varnothing.
$$

Luego

$$
\overline{D}\supseteq A,
$$

y $A$ es separable.

### Proposicion 8: separable implica segunda numerabilidad en metricos

Si $(X,d)$ es separable, entonces posee una base numerable.

#### Demostracion

Sea $D=\{a_1,a_2,\dots\}$ un subconjunto numerable denso de $X$. Consideremos la familia

$$
\mathcal{B}=\{B(a_j,q): j \in \mathbb{N},\ q \in \mathbb{Q},\ q>0\}.
$$

Esta familia es numerable.

Probemos que es una base. Sea $U$ un abierto y sea $x \in U$. Existe $r>0$ tal que

$$
B(x,r)\subseteq U.
$$

Elegimos un racional $q$ con

$$
0<q<\frac{r}{2},
$$

y luego un punto $a_j \in D$ tal que

$$
d(x,a_j)<q,
$$

lo cual es posible por densidad.

Entonces

$$
x \in B(a_j,q).
$$

Si ahora $y \in B(a_j,q)$, por desigualdad triangular:

$$
d(y,x)\le d(y,a_j)+d(a_j,x)<q+q<r.
$$

Luego

$$
B(a_j,q)\subseteq B(x,r)\subseteq U.
$$

Por tanto $\mathcal{B}$ es una base numerable.

### Proposicion 9: segunda numerabilidad implica Lindelof

Todo espacio de segunda numerabilidad es Lindelof: todo recubrimiento abierto admite un subrecubrimiento numerable.

#### Demostracion

Sea $\mathcal{B}=\{B_n\}_{n \in \mathbb{N}}$ una base numerable y sea $\{U_i\}_{i \in I}$ un recubrimiento abierto de $X$.

Consideremos el conjunto de indices

$$
J=\{n \in \mathbb{N}: \exists i(n)\in I \text{ tal que } B_n \subseteq U_{i(n)}\}.
$$

Para cada $n \in J$ elegimos un abierto $U_{i(n)}$ con esa propiedad.

Afirmamos que

$$
\{U_{i(n)}\}_{n \in J}
$$

cubre a $X$. En efecto, si $x \in X$, como los $U_i$ cubren a $X$, existe alguno con

$$
x \in U_i.
$$

Al ser $U_i$ abierto y $\mathcal{B}$ una base, existe un $B_n$ tal que

$$
x \in B_n \subseteq U_i.
$$

Entonces $n \in J$ y

$$
x \in U_{i(n)}.
$$

Luego el subrecubrimiento es numerable.

### Lema 10: toda sucesion en un totalmente acotado tiene una subsucesion de Cauchy

Sea $A \subseteq X$ totalmente acotado y sea $(x_n)$ una sucesion en $A$. Entonces $(x_n)$ admite una subsucesion de Cauchy.

#### Demostracion

Para radio $1$, el conjunto $A$ puede cubrirse con finitas bolas de radio $1$. Alguna de ellas contiene infinitos terminos de la sucesion. Escogemos esa bola y retenemos la subsucesion infinita correspondiente.

Para radio $1/2$, cubrimos otra vez $A$ con finitas bolas de radio $1/2$. Alguna de ellas contiene infinitos terminos de la subsucesion anterior. Retenemos esos terminos.

Continuamos inductivamente. Para cada $k \in \mathbb{N}$ obtenemos:

- una bola $B_k$ de radio $2^{-k}$;
- una subsucesion infinita de la anterior cuyos terminos estan todos en $B_k$.

Escogemos ahora diagonalmente una sucesion

$$
x_{n_1},x_{n_2},x_{n_3},\dots
$$

tal que $x_{n_k}$ pertenezca a la $k$-esima subsucesion.

Si $p,q \ge k$, entonces tanto $x_{n_p}$ como $x_{n_q}$ pertenecen a la misma bola $B_k$ de radio $2^{-k}$, y por desigualdad triangular:

$$
d(x_{n_p},x_{n_q})<2^{-k+1}.
$$

Dado $\varepsilon>0$, elegimos $k$ con

$$
2^{-k+1}<\varepsilon.
$$

Entonces para $p,q \ge k$ se cumple

$$
d(x_{n_p},x_{n_q})<\varepsilon.
$$

Luego la subsucesion diagonal es de Cauchy.

### Teorema 11: en metricos, completo mas totalmente acotado implica compacto

Si $(X,d)$ es completo y totalmente acotado, entonces $X$ es compacto.

#### Demostracion

Sea $\{U_i\}_{i \in I}$ un recubrimiento abierto de $X$.

Por total acotacion, $X$ es separable; por la proposicion anterior, es de segunda numerabilidad y por tanto Lindelof. Luego el recubrimiento admite un subrecubrimiento numerable:

$$
X=\bigcup_{n=1}^{\infty} U_n.
$$

Supongamos que este recubrimiento numerable no admite subrecubrimiento finito. Entonces podemos construir inductivamente una sucesion $(x_n)$ tal que

$$
x_n \in X \setminus (U_1\cup \cdots \cup U_n).
$$

En efecto, si el complemento fuese vacio para algun $n$, ya tendriamos un subrecubrimiento finito.

Como $X$ es totalmente acotado, por el lema anterior la sucesion $(x_n)$ admite una subsucesion de Cauchy. Como $X$ es completo, esa subsucesion converge a algun punto

$$
x \in X.
$$

Al estar $\{U_n\}$ cubriendo a $X$, existe $m$ tal que

$$
x \in U_m.
$$

Como $U_m$ es abierto y la subsucesion converge a $x$, existe $K$ tal que para todo indice suficientemente grande de la subsucesion:

$$
x_{n_k}\in U_m.
$$

Pero para $k$ suficientemente grande se tiene tambien

$$
n_k \ge m,
$$

y por construccion de la sucesion original

$$
x_{n_k}\notin U_1\cup \cdots \cup U_{n_k},
$$

en particular

$$
x_{n_k}\notin U_m,
$$

contradiccion.

Luego el recubrimiento numerable si admite subrecubrimiento finito, y por tanto $X$ es compacto.

### Corolario

En un espacio metrico:

$$
\text{compacto} \implies \text{completo y totalmente acotado},
$$

y

$$
\text{completo y totalmente acotado} \implies \text{compacto}.
$$

Es decir,

$$
\text{compacto}
\iff
\text{completo y totalmente acotado}.
$$

## Resumen conceptual

En espacios metricos, la compacidad puede leerse de varias formas compatibles:

- por recubrimientos abiertos;
- como total acotacion mas completitud;
- como control finito a toda escala.

Sus consecuencias estructurales mas importantes son:

- los compactos son cerrados, acotados y totalmente acotados;
- las imagenes continuas de compactos son compactas;
- los cerrados de compactos son compactos;
- la total acotacion, no la mera acotacion, es la condicion metrica correcta.

## Ejemplos guiados finales

### Ejemplo guiado 1: por que un discreto infinito no es compacto

Para $\varepsilon<1$, cada bola contiene a lo sumo un punto. Ningun conjunto infinito puede cubrirse por finitas bolas de radio $\varepsilon$. Por tanto un discreto infinito ni siquiera es totalmente acotado, y mucho menos compacto.

### Ejemplo guiado 2: por que $(0,1)$ no es compacto

El intervalo $(0,1)$ es totalmente acotado, pero no completo. La sucesion

$$
\frac{1}{n+1}
$$

es de Cauchy y no converge en el espacio. Por el corolario, no puede ser compacto.

### Ejemplo guiado 3: por que $\mathbb{R}$ no es compacto

La recta es completa, pero no totalmente acotada. Para $\varepsilon=1$, ninguna familia finita de bolas de radio $1$ puede cubrirla.

### Ejemplo guiado 4: compacidad no es lo mismo que cerrado y acotado

El criterio "cerrado y acotado" es especial de $\mathbb{R}^n$. En un metrico general la version robusta es "completo y totalmente acotado".

## Errores comunes

1. Reemplazar total acotacion por acotacion simple.
2. Pensar que compacidad es una forma de pequeñez cardinal.
3. Aplicar Heine-Borel fuera del contexto euclideo.
4. Confundir completitud con compacidad.
5. Olvidar que la definicion original de compacto es por recubrimientos, no por sucesiones.

## Cierre

La compacidad es la forma mas potente de control global en espacios metricos. Une lenguaje topologico y lenguaje metrico en una sola nocion y prepara el terreno para su traduccion secuencial en el teorema de Bolzano-Weierstrass metrico.

## Ejercicios

### Ejercicio 1

Demuestre que todo compacto metrico es completo y totalmente acotado.

### Ejercicio 2

Demuestre que la union finita de compactos es compacta.

### Ejercicio 3

Sea $(X,d)$ un espacio metrico compacto y $f\colon X \to Y$ una funcion continua. Demuestre que $f(X)$ es compacto.

### Ejercicio 4

Demuestre que toda sucesion en un compacto metrico tiene subsucesion convergente.

### Ejercicio 5

En $\mathbb{R}^n$, demuestre que un conjunto es compacto si y solo si es cerrado y acotado.

### Ejercicio 6

De un ejemplo de un subconjunto de $\ell^2$ que sea cerrado y acotado pero no compacto.

### Ejercicio 7

Demuestre que si $K_1 \supseteq K_2 \supseteq \cdots$ es una sucesion decreciente de compactos no vacios, entonces $\bigcap_{n=1}^\infty K_n \neq \emptyset$.

### Ejercicio 8

Sea $X$ un espacio metrico compacto y $f\colon X \to X$ una isometria. Demuestre que $f$ es sobreyectiva.

### Ejercicio 9

Demuestre que el producto de dos espacios metricos compactos es compacto.

### Ejercicio 10

Sea $K$ un compacto metrico. Demuestre que $K$ es separable.

### Ejercicio 11

Demuestre que si $X$ es compacto y $f\colon X \to \mathbb{R}$ es continua, entonces $f$ alcanza maximo y minimo.

### Ejercicio 12

En $C[0,1]$ con la metrica del supremo, demuestre que el conjunto $\{f \in C[0,1] : \|f\|_\infty \leq 1\}$ no es compacto.

### Ejercicio 13

Sea $X$ un espacio metrico. Demuestre que si todo recubrimiento abierto por bolas tiene subrecubrimiento finito, entonces $X$ es compacto.

### Ejercicio 14

Demuestre que la interseccion de un compacto y un cerrado es compacta.

### Ejercicio 15

Sea $K$ un compacto metrico. Demuestre que toda funcion continua $f\colon K \to \mathbb{R}$ es uniformemente continua.

## Soluciones

### Solucion 1

Sea $K$ compacto metrico.

**Completo:** Sea $(x_n)$ una sucesion de Cauchy en $K$. Como $K$ es compacto, existe subsucesion $(x_{n_k})$ que converge a $x \in K$. Una sucesion de Cauchy con una subsucesion convergente converge al mismo limite. Por tanto $(x_n) \to x$ con $x \in K$, y $K$ es completo.

**Totalmente acotado:** Supongamos que $K$ no es totalmente acotado. Entonces existe $\varepsilon > 0$ tal que ninguna familia finita de bolas de radio $\varepsilon$ cubre a $K$. Construimos una sucesion $(x_n)$ con $d(x_n, x_m) \geq \varepsilon$ para $n \neq m$.

Esta sucesion no tiene subsucesion de Cauchy, y por tanto ninguna subsucesion convergente, contradiciendo la compacidad secuencial. $\blacksquare$

### Solucion 2

Sean $K_1, \ldots, K_n$ compactos. Sea $\{U_\alpha\}$ un recubrimiento abierto de $K_1 \cup \cdots \cup K_n$.

Para cada $i$, $\{U_\alpha\}$ recubre a $K_i$. Como $K_i$ es compacto, existe subrecubrimiento finito $\{U_{\alpha_1^{(i)}}, \ldots, U_{\alpha_{k_i}^{(i)}}\}$.

La union de todos estos subrecubrimientos finitos es un subrecubrimiento finito de la union. $\blacksquare$

### Solucion 3

Sea $\{V_\alpha\}$ un recubrimiento abierto de $f(X)$. Entonces $\{f^{-1}(V_\alpha)\}$ es un recubrimiento abierto de $X$ (por continuidad de $f$).

Como $X$ es compacto, existe subrecubrimiento finito $\{f^{-1}(V_{\alpha_1}), \ldots, f^{-1}(V_{\alpha_n})\}$.

Entonces $\{V_{\alpha_1}, \ldots, V_{\alpha_n}\}$ recubre a $f(X)$. $\blacksquare$

### Solucion 4

Por la caracterizacion de compacidad en metricos, $K$ es completo y totalmente acotado.

Dada una sucesion $(x_n)$ en $K$, como $K$ es totalmente acotado, podemos construir una subsucesion de Cauchy $(x_{n_k})$ mediante extraccion diagonal.

Como $K$ es completo, $(x_{n_k})$ converge a algun punto de $K$. $\blacksquare$

### Solucion 5

$\Rightarrow)$ Si $K$ es compacto, es cerrado (complemento de abierto en Hausdorff) y acotado (totalmente acotado implica acotado).

$\Leftarrow)$ Si $K$ es cerrado y acotado en $\mathbb{R}^n$, existe una bola $B(0,R)$ con $K \subseteq B(0,R)$. Como $B(0,R)$ es compacto (Heine-Borel) y $K$ es cerrado en compacto, $K$ es compacto. $\blacksquare$

### Solucion 6

En $\ell^2$, el conjunto $K = \{e_n : n \in \mathbb{N}\}$ donde $e_n$ es el vector canonico.

- Es cerrado: la unica sucesion convergente en $K$ es la eventualmente constante.
- Es acotado: $\|e_n\|_2 = 1$ para todo $n$.
- No es compacto: $(e_n)$ no tiene subsucesion convergente porque $\|e_n - e_m\|_2 = \sqrt{2}$ para $n \neq m$. $\blacksquare$

### Solucion 7

Elegimos $x_n \in K_n$ para cada $n$. Como $x_n \in K_1$ y $K_1$ es compacto, existe subsucesion $(x_{n_k})$ que converge a $x \in K_1$.

Para cada $m$, existe $k_0$ tal que $n_k \geq m$ para $k \geq k_0$. Entonces $x_{n_k} \in K_m$ para $k \geq k_0$.

Como $K_m$ es cerrado y $(x_{n_k})$ converge a $x$, tenemos $x \in K_m$ para todo $m$.

Por tanto $x \in \bigcap_{n=1}^\infty K_n$. $\blacksquare$

### Solucion 8

Como $f$ es isometria, $f$ es inyectiva y continua. El conjunto $f(X)$ es compacto (imagen continua de compacto).

Supongamos por contradiccion que $f$ no es sobreyectiva. Existe $y_0 \in X \setminus f(X)$.

Como $f(X)$ es cerrado (compacto en Hausdorff), existe $\varepsilon > 0$ tal que $B(y_0, \varepsilon) \cap f(X) = \emptyset$.

Consideramos la sucesion definida por $x_0 = y_0$ y $x_{n+1} = f(x_n)$. Entonces $\{x_n : n \geq 1\} \subseteq f(X)$ y tiene $x_0$ a distancia al menos $\varepsilon$.

Por compacidad, $(x_n)$ tiene subsucesion convergente, lo que lleva a contradiccion con la isometria. $\blacksquare$

### Solucion 9

Sean $X, Y$ compactos. El producto $X \times Y$ con la metrica producto es compacto.

Sea $(x_n, y_n)$ una sucesion en $X \times Y$. Como $X$ es compacto, existe subsucesion $(x_{n_k})$ que converge a $x \in X$.

Como $Y$ es compacto, existe sub-subsucesion $(y_{n_{k_j}})$ que converge a $y \in Y$.

Entonces $(x_{n_{k_j}}, y_{n_{k_j}}) \to (x, y)$ en el producto. $\blacksquare$

### Solucion 10

Para cada $n$, cubrimos $K$ con bolas de radio $1/n$. Como $K$ es compacto, existe subrecubrimiento finito:

$$
K \subseteq B(x_1^{(n)}, 1/n) \cup \cdots \cup B(x_{k_n}^{(n)}, 1/n).
$$

El conjunto $D = \{x_i^{(n)} : n \in \mathbb{N}, 1 \leq i \leq k_n\}$ es numerable.

Para todo $x \in K$ y $\varepsilon > 0$, existe $n > 1/\varepsilon$ y existe $i$ con $x \in B(x_i^{(n)}, 1/n)$. Entonces $d(x, x_i^{(n)}) < 1/n < \varepsilon$.

Por tanto $D$ es denso en $K$. $\blacksquare$

### Solucion 11

Como $X$ es compacto, $f(X)$ es compacto en $\mathbb{R}$. Todo compacto en $\mathbb{R}$ es cerrado y acotado.

Por el teorema del supremo, $M = \sup f(X)$ existe y es finito. Como $f(X)$ es cerrado, $M \in f(X)$. Similar para el minimo. $\blacksquare$

### Solucion 12

Consideramos la sucesion $f_n(x) = x^n$. Cada $f_n$ satisface $\|f_n\|_\infty = 1$.

Si el conjunto fuera compacto, $(f_n)$ tendria subsucesion convergente en $C[0,1]$.

Pero $f_n \to f$ puntoalmente donde $f(x) = 0$ para $x \in [0,1)$ y $f(1) = 1$.

Esta funcion no es continua, asi que ninguna subsucesion puede converger uniformemente a una funcion continua. $\blacksquare$

### Solucion 13

El enunciado dice que si todo recubrimiento por bolas tiene subrecubrimiento finito, entonces $X$ es compacto.

Sea $\{U_\alpha\}$ un recubrimiento abierto arbitrario. Para cada $x \in X$, existe $\alpha$ con $x \in U_\alpha$. Como $U_\alpha$ es abierto, existe $r_x > 0$ con $B(x, r_x) \subseteq U_\alpha$.

La familia $\{B(x, r_x/2) : x \in X\}$ es un recubrimiento por bolas. Por hipotesis, tiene subrecubrimiento finito $\{B(x_i, r_{x_i}/2)\}$.

Entonces $\{B(x_i, r_{x_i})\}$ es un subrecubrimiento finito de $X$, y cada $B(x_i, r_{x_i})$ esta contenido en algun $U_{\alpha_i}$.

La familia finita $\{U_{\alpha_i}\}$ recubre a $X$. $\blacksquare$

### Solucion 14

Sea $K$ compacto y $C$ cerrado. Sea $\{U_\alpha\}$ un recubrimiento abierto de $K \cap C$.

Entonces $\{U_\alpha\} \cup \{X \setminus C\}$ es un recubrimiento abierto de $K$.

Como $K$ es compacto, existe subrecubrimiento finito. Si este subrecubrimiento incluye $X \setminus C$, lo eliminamos; el resultado sigue recubriendo $K \cap C$ (pues $K \cap C$ no intersecta $X \setminus C$).

Asi $K \cap C$ tiene subrecubrimiento finito. $\blacksquare$

### Solucion 15

Dado $\varepsilon > 0$, para cada $x \in K$ existe $\delta_x > 0$ tal que $d(y, x) < \delta_x$ implica $|f(y) - f(x)| < \varepsilon/2$.

Las bolas $\{B(x, \delta_x/2) : x \in K\}$ forman un recubrimiento abierto de $K$. Por compacidad, existe subrecubrimiento finito $\{B(x_1, \delta_1/2), \ldots, B(x_n, \delta_n/2)\}$.

Tomamos $\delta = \min(\delta_1/2, \ldots, \delta_n/2) > 0$.

Si $d(y, z) < \delta$ con $y, z \in K$, existe $i$ tal que $y \in B(x_i, \delta_i/2)$.

Entonces $d(z, x_i) \leq d(z, y) + d(y, x_i) < \delta + \delta_i/2 \leq \delta_i$.

Por tanto $|f(y) - f(z)| \leq |f(y) - f(x_i)| + |f(x_i) - f(z)| < \varepsilon/2 + \varepsilon/2 = \varepsilon$. $\blacksquare$

---

## Referencias y lecturas adicionales

1. Munkres, J.R. (2000). *Topology*. Prentice Hall.
2. Engelking, R. (1989). *General Topology*. Heldermann Verlag.
3. Willard, S. (2004). *General Topology*. Dover.
4. Bourbaki, N. (1989). *General Topology*, Chapters 1-4. Springer.
5. Kelley, J.L. (1955). *General Topology*. Van Nostrand.
