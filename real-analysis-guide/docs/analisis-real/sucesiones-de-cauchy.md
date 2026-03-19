---
title: Sucesiones de Cauchy
description: Criterio interno de convergencia, acotacion, completitud de los reales y relacion con subsucesiones.
---

# Sucesiones de Cauchy

## Motivacion e intuicion

Para decidir si una sucesion converge, la definicion usual exige conocer de antemano el candidato a limite. Pero a veces no sabemos cual deberia ser ese numero. La idea de Cauchy resuelve este problema: en lugar de comparar los terminos con un limite desconocido, se comparan entre si.

Una sucesion es de Cauchy cuando sus terminos, a partir de cierto punto, quedan mutuamente tan cerca como se quiera. En $\mathbb{R}$ esto resulta equivalente a converger, y esa equivalencia expresa la completitud de los numeros reales.

::: tip Idea central
Converger significa acercarse a un numero. Ser de Cauchy significa que los terminos se acercan entre si. En $\mathbb{R}$ ambas cosas son equivalentes.
:::

## Prerrequisitos

Para este tema conviene manejar:

- convergencia de sucesiones;
- sucesiones acotadas;
- subsucesiones;
- principio del supremo e infimo;
- desigualdad triangular.

## Definiciones formales

### Sucesion de Cauchy

Una sucesion real $(a_n)$ es una **sucesion de Cauchy** si

$$
\forall \varepsilon > 0 \ \exists N \in \mathbb{N} \ \text{tal que si } m,n \ge N, \text{ entonces } |a_n-a_m| < \varepsilon.
$$

### Diametro de una cola

La condicion anterior dice que, fijado cualquier margen $\varepsilon > 0$, existe una cola de la sucesion cuyas distancias internas son todas menores que $\varepsilon$.

En otras palabras: a partir de cierto indice, todos los terminos quedan comprimidos dentro de una banda de ancho arbitrariamente pequeno.

## Interpretacion en lenguaje natural

La definicion de Cauchy es una version interna de la convergencia:

- no menciona ningun limite;
- solo exige que los terminos tardios se parezcan cada vez mas entre si;
- si la sucesion vive en un espacio completo, esa coherencia interna obliga a que exista un limite.

La clave es que el indice $N$ debe funcionar al mismo tiempo para todos los pares $m,n \ge N$.

No basta con que $a_n$ y $a_{n+1}$ esten cerca; hace falta que todos los terminos tardios esten cerca entre si.

## Ejemplos basicos

### Ejemplo 1: sucesion constante

Si $a_n = 5$ para todo $n$, entonces

$$
|a_n-a_m| = 0
$$

para cualesquiera $m,n$. Luego la sucesion es de Cauchy.

### Ejemplo 2: la sucesion $1/n$

Sea

$$
a_n = \frac{1}{n}.
$$

Si $m,n \ge N$, entonces

$$
\left| \frac{1}{n} - \frac{1}{m} \right| \le \frac{1}{n} + \frac{1}{m} \le \frac{2}{N}.
$$

Dado $\varepsilon > 0$, basta elegir $N > 2/\varepsilon$. Entonces $|a_n-a_m|<\varepsilon$ para todo $m,n \ge N$. Por tanto $(1/n)$ es de Cauchy.

### Ejemplo 3: sucesion convergente conocida

Si

$$
a_n = \frac{n}{n+1},
$$

entonces $a_n \to 1$. Toda sucesion convergente es de Cauchy, asi que esta sucesion es de Cauchy.

### Ejemplo 4: una sucesion que no es de Cauchy

La sucesion

$$
a_n = (-1)^n
$$

no es de Cauchy. En efecto, para cualquier $N$ podemos tomar $n \ge N$ par y $m \ge N$ impar. Entonces

$$
|a_n-a_m| = |1-(-1)| = 2.
$$

Por tanto no puede cumplirse la condicion de Cauchy con $\varepsilon = 1$.

### Ejemplo 5: una sucesion no acotada

La sucesion

$$
a_n = n
$$

no es de Cauchy. Si $m,n \ge N$, la distancia $|n-m|$ puede ser tan grande como se quiera. Por ejemplo, tomando $m=N$ y $n=2N$ se obtiene

$$
|a_n-a_m| = N.
$$

## Ejemplos finos y contraejemplos

### Ejemplo fino 1: una sucesion de Cauchy racional

Las aproximaciones decimales truncadas de $\sqrt{2}$,

$$
1,\ 1.4,\ 1.41,\ 1.414,\dots
$$

forman una sucesion de Cauchy en $\mathbb{R}$. La idea es que al truncar cada vez mas cifras, las diferencias entre terminos tardios se hacen pequenas.

Este ejemplo anticipa algo importante: una sucesion puede ser de Cauchy sin que su limite sea evidente por inspeccion.

### Contraejemplo 2: acotada no implica de Cauchy

La sucesion

$$
a_n = (-1)^n
$$

esta acotada, pero no es de Cauchy. La acotacion controla tamano; la propiedad de Cauchy controla coherencia interna.

### Ejemplo fino 3: si una sucesion de Cauchy tiene una subsucesion convergente, toda la sucesion converge

Esto sera un teorema central mas abajo. Intuitivamente, una vez que todos los terminos tardios estan cerca entre si, basta que una rama converja para arrastrar a toda la sucesion hacia el mismo limite.

### Ejemplo fino 4: completitud de $\mathbb{R}$

En $\mathbb{R}$, toda sucesion de Cauchy converge. Esta afirmacion no es cierta en todos los espacios y, de hecho, caracteriza la completitud del espacio.

## Proposiciones y teoremas centrales

### Teorema 1: toda sucesion convergente es de Cauchy

Si

$$
a_n \to L,
$$

entonces $(a_n)$ es de Cauchy.

#### Demostracion

Sea $\varepsilon > 0$. Como $a_n \to L$, existe $N$ tal que si $n \ge N$, entonces

$$
|a_n-L| < \frac{\varepsilon}{2}.
$$

Si $m,n \ge N$, por la desigualdad triangular,

$$
|a_n-a_m| \le |a_n-L| + |a_m-L| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.
$$

Luego $(a_n)$ es de Cauchy.

### Teorema 2: toda sucesion de Cauchy es acotada

Si $(a_n)$ es de Cauchy, entonces es acotada.

#### Demostracion

Tomemos $\varepsilon = 1$. Entonces existe $N$ tal que si $m,n \ge N$, se cumple

$$
|a_n-a_m| < 1.
$$

Fijemos $m=N$. Entonces para todo $n \ge N$,

$$
|a_n-a_N| < 1.
$$

Por la desigualdad triangular,

$$
|a_n| \le |a_n-a_N| + |a_N| < 1 + |a_N|
$$

para todo $n \ge N$.

La cola queda acotada. Como los terminos iniciales $a_1,\dots,a_{N-1}$ son finitos en numero, tambien estan acotados. Luego toda la sucesion es acotada.

### Proposicion 3: toda subsucesion de una sucesion de Cauchy es de Cauchy

Si $(a_n)$ es de Cauchy y $(a_{n_k})$ es una subsucesion, entonces $(a_{n_k})$ es de Cauchy.

#### Demostracion

Sea $\varepsilon > 0$. Como $(a_n)$ es de Cauchy, existe $N$ tal que

$$
m,n \ge N \implies |a_n-a_m| < \varepsilon.
$$

Como $n_k \ge k$, si $p,q \ge N$, entonces

$$
n_p \ge p \ge N, \qquad n_q \ge q \ge N.
$$

Por tanto

$$
|a_{n_p}-a_{n_q}| < \varepsilon.
$$

Luego la subsucesion es de Cauchy.

### Teorema 4: una sucesion de Cauchy con una subsucesion convergente converge toda ella

Supongamos que $(a_n)$ es de Cauchy y que existe una subsucesion $(a_{n_k})$ tal que

$$
a_{n_k} \to L.
$$

Entonces

$$
a_n \to L.
$$

#### Demostracion

Sea $\varepsilon > 0$. Como $(a_n)$ es de Cauchy, existe $N_1$ tal que si $m,n \ge N_1$, entonces

$$
|a_n-a_m| < \frac{\varepsilon}{2}.
$$

Como $a_{n_k} \to L$, existe $K$ tal que si $k \ge K$, entonces

$$
|a_{n_k}-L| < \frac{\varepsilon}{2}.
$$

Ademas, como $n_k \to \infty$, existe $K_1$ tal que si $k \ge K_1$, entonces

$$
n_k \ge N_1.
$$

Tomemos $k \ge \max\{K,K_1\}$. Entonces $n_k \ge N_1$ y

$$
|a_{n_k}-L| < \frac{\varepsilon}{2}.
$$

Si ahora $n \ge N_1$, por la desigualdad triangular,

$$
|a_n-L| \le |a_n-a_{n_k}| + |a_{n_k}-L| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.
$$

Por tanto $a_n \to L$.

### Teorema 5: en $\mathbb{R}$ toda sucesion de Cauchy converge

Si $(a_n)$ es una sucesion de Cauchy en $\mathbb{R}$, entonces existe $L \in \mathbb{R}$ tal que

$$
a_n \to L.
$$

#### Demostracion

Por el teorema anterior, basta encontrar una subsucesion convergente. Sin embargo, daremos una demostracion directa usando completitud.

Para cada $N \in \mathbb{N}$ definimos

$$
A_N = \{a_n : n \ge N\},
$$

y consideramos

$$
x_N = \inf A_N, \qquad y_N = \sup A_N.
$$

Como $(a_n)$ es de Cauchy, por el teorema 2 es acotada. Luego cada $A_N$ es no vacio y acotado, asi que $x_N$ e $y_N$ existen en $\mathbb{R}$.

Ademas, como

$$
A_{N+1} \subseteq A_N,
$$

se tiene

$$
x_N \le x_{N+1} \le y_{N+1} \le y_N.
$$

Por tanto $(x_N)$ es creciente y $(y_N)$ es decreciente.

Dado $\varepsilon > 0$, como $(a_n)$ es de Cauchy, existe $N$ tal que si $m,n \ge N$, entonces

$$
|a_n-a_m| < \frac{\varepsilon}{2}.
$$

Fijado $m \ge N$, resulta que para todo $n \ge N$,

$$
a_m - \frac{\varepsilon}{2} < a_n < a_m + \frac{\varepsilon}{2}.
$$

Luego todos los elementos de $A_N$ estan contenidos en un intervalo de longitud $\varepsilon$, y en consecuencia

$$
y_N - x_N \le \varepsilon.
$$

Ahora consideremos el conjunto

$$
X = \{x_N : N \in \mathbb{N}\}.
$$

Como $X$ esta acotado superiormente por cualquier $y_N$, existe

$$
L = \sup X.
$$

Mostramos que

$$
x_N \le L \le y_N \quad \text{para todo } N.
$$

La primera desigualdad es inmediata porque $L$ es supremo de los $x_N$. Para la segunda, notemos que $y_N$ es cota superior de todos los $x_k$. En efecto, si $k \le N$, como $(x_N)$ es creciente, se tiene

$$
x_k \le x_N \le y_N,
$$

y si $k \ge N$, como $A_k \subseteq A_N$, tambien

$$
x_k \in [x_N,y_N].
$$

Por tanto $x_k \le y_N$ para todo $k$, es decir, $y_N$ es cota superior de $X$. Luego $L \le y_N$.

Ya tenemos entonces

$$
x_N \le a_n \le y_N \quad \text{para todo } n \ge N,
$$

y tambien

$$
x_N \le L \le y_N.
$$

Asi, si $n \ge N$,

$$
|a_n-L| \le y_N - x_N.
$$

Como $y_N-x_N \to 0$, dado $\varepsilon > 0$ podemos elegir $N$ tal que

$$
y_N - x_N < \varepsilon.
$$

Entonces para todo $n \ge N$,

$$
|a_n-L| < \varepsilon.
$$

Por tanto $a_n \to L$.

### Corolario 6: criterio de Cauchy en $\mathbb{R}$

Para sucesiones reales, las siguientes condiciones son equivalentes:

1. $(a_n)$ converge;
2. $(a_n)$ es de Cauchy.

#### Demostracion

La implicacion

$$
1 \implies 2
$$

es el teorema 1. La implicacion

$$
2 \implies 1
$$

es el teorema 5.

## Errores comunes

1. Verificar solo que $|a_{n+1}-a_n|$ tiende a $0$ y creer que eso basta para ser de Cauchy.
2. Pensar que acotada y de Cauchy son lo mismo.
3. Olvidar que en la definicion de Cauchy el mismo $N$ debe funcionar para todos los pares $m,n \ge N$.
4. Suponer que el criterio de Cauchy vale automaticamente en cualquier conjunto sin hablar de completitud.
5. Creer que si una subsucesion converge, entonces la sucesion original converge, sin usar la hipotesis de Cauchy.

## Resumen operativo

- Una sucesion de Cauchy tiene terminos tardios mutuamente cercanos.
- Toda sucesion convergente es de Cauchy.
- Toda sucesion de Cauchy es acotada.
- Las subsucesiones de una sucesion de Cauchy siguen siendo de Cauchy.
- En $\mathbb{R}$, ser de Cauchy equivale a converger.

## Ejercicios

### Basicos

1. Demuestra que la sucesion constante $a_n = 7$ es de Cauchy.
2. Demuestra que $a_n = 1/n$ es de Cauchy.
3. Decide si $a_n = (-1)^n$ es de Cauchy.
4. Decide si $a_n = n$ es de Cauchy.
5. Demuestra que $a_n = n/(n+1)$ es de Cauchy.

### Intermedios

6. Supongamos que

$$
|a_n-2| \le \frac{1}{n}
$$

para todo $n$. Demuestra que $(a_n)$ es de Cauchy.

7. Demuestra que toda subsucesion de una sucesion de Cauchy es de Cauchy.
8. Demuestra que toda sucesion de Cauchy es acotada.
9. Da un ejemplo de sucesion acotada que no sea de Cauchy.
10. Supongamos que $(a_n)$ es de Cauchy y que una subsucesion $(a_{n_k})$ converge a $L$. Demuestra que $a_n \to L$.

### De prueba y demostracion

11. Demuestra que toda sucesion convergente es de Cauchy.
12. Demuestra que si una sucesion es de Cauchy, entonces para todo $\varepsilon > 0$ existe una cola contenida en un intervalo de longitud $\varepsilon$.
13. Demuestra directamente que si $(a_n)$ es de Cauchy, entonces existe una sucesion creciente $(x_N)$ y una decreciente $(y_N)$ con

$$
x_N \le a_n \le y_N \quad \text{para todo } n \ge N
$$

y

$$
y_N-x_N \to 0.
$$

14. Explica por que el criterio de Cauchy expresa una forma de completitud de $\mathbb{R}$.
15. Demuestra que en $\mathbb{R}$ una sucesion converge si y solo si es de Cauchy.

## Soluciones

### 1

Si $a_n=7$ para todo $n$, entonces para cualesquiera $m,n$ se cumple

$$
|a_n-a_m| = |7-7| = 0.
$$

Luego, dado cualquier $\varepsilon > 0$, basta tomar cualquier $N$. La sucesion es de Cauchy.

### 2

Sean $m,n \ge N$. Entonces

$$
\left| \frac{1}{n} - \frac{1}{m} \right| \le \frac{1}{n} + \frac{1}{m} \le \frac{2}{N}.
$$

Dado $\varepsilon > 0$, elegimos $N > 2/\varepsilon$. Entonces para $m,n \ge N$ se obtiene

$$
\left| \frac{1}{n} - \frac{1}{m} \right| < \varepsilon.
$$

Por tanto $(1/n)$ es de Cauchy.

### 3

No es de Cauchy. Tomando $\varepsilon = 1$, para cualquier $N$ podemos escoger $n \ge N$ par y $m \ge N$ impar. Entonces

$$
|a_n-a_m| = |1-(-1)| = 2 > 1.
$$

Luego falla la condicion de Cauchy.

### 4

No es de Cauchy. Fijado $N$, tomamos $m=N$ y $n=2N$. Entonces

$$
|a_n-a_m| = |2N-N| = N.
$$

Si $N \ge 1$, esto no puede ser menor que, por ejemplo, $\varepsilon = 1/2$. Luego $(n)$ no es de Cauchy.

### 5

Sabemos que

$$
\frac{n}{n+1} \to 1.
$$

Toda sucesion convergente es de Cauchy. Luego

$$
\frac{n}{n+1}
$$

es de Cauchy.

### 6

Sean $m,n \ge N$. Entonces

$$
|a_n-a_m| \le |a_n-2| + |a_m-2| \le \frac{1}{n} + \frac{1}{m} \le \frac{2}{N}.
$$

Dado $\varepsilon > 0$, elegimos $N > 2/\varepsilon$. Asi obtenemos

$$
|a_n-a_m| < \varepsilon
$$

para todo $m,n \ge N$. Luego $(a_n)$ es de Cauchy.

### 7

Sea $\varepsilon > 0$. Como $(a_n)$ es de Cauchy, existe $N$ tal que

$$
m,n \ge N \implies |a_n-a_m| < \varepsilon.
$$

Si $(a_{n_k})$ es una subsucesion y $p,q \ge N$, entonces $n_p \ge p \ge N$ y $n_q \ge q \ge N$. Por tanto

$$
|a_{n_p}-a_{n_q}| < \varepsilon.
$$

Luego la subsucesion es de Cauchy.

### 8

Tomamos $\varepsilon = 1$. Existe $N$ tal que

$$
m,n \ge N \implies |a_n-a_m| < 1.
$$

Fijando $m=N$, para todo $n \ge N$ se tiene

$$
|a_n-a_N| < 1,
$$

y entonces

$$
|a_n| \le |a_n-a_N| + |a_N| < 1 + |a_N|.
$$

La cola esta acotada. Los primeros terminos son finitos en numero, luego toda la sucesion es acotada.

### 9

Un ejemplo es

$$
a_n = (-1)^n.
$$

Esta sucesion esta acotada, pero no es de Cauchy porque los terminos pares e impares permanecen a distancia $2$.

### 10

Sea $\varepsilon > 0$. Como $(a_n)$ es de Cauchy, existe $N_1$ tal que

$$
m,n \ge N_1 \implies |a_n-a_m| < \frac{\varepsilon}{2}.
$$

Como $a_{n_k} \to L$, existe $K$ tal que si $k \ge K$, entonces

$$
|a_{n_k}-L| < \frac{\varepsilon}{2}.
$$

Tomamos ademas $k$ tan grande que $n_k \ge N_1$. Entonces, si $n \ge N_1$,

$$
|a_n-L| \le |a_n-a_{n_k}| + |a_{n_k}-L| < \varepsilon.
$$

Luego $a_n \to L$.

### 11

Sea $\varepsilon > 0$. Como $a_n \to L$, existe $N$ tal que

$$
|a_n-L| < \frac{\varepsilon}{2}
$$

para todo $n \ge N$. Entonces, si $m,n \ge N$,

$$
|a_n-a_m| \le |a_n-L| + |a_m-L| < \varepsilon.
$$

Por tanto $(a_n)$ es de Cauchy.

### 12

Dado $\varepsilon > 0$, como $(a_n)$ es de Cauchy, existe $N$ tal que

$$
|a_n-a_m| < \varepsilon
$$

para todos $m,n \ge N$.

Fijando $m=N$, resulta

$$
a_N - \varepsilon < a_n < a_N + \varepsilon
$$

para todo $n \ge N$. Es decir, la cola queda contenida en el intervalo

$$
(a_N-\varepsilon,\ a_N+\varepsilon),
$$

que tiene longitud $2\varepsilon$. Si se quiere longitud exactamente menor que un valor dado $\delta$, basta aplicar la definicion con $\varepsilon = \delta/2$.

### 13

Para cada $N$, definimos

$$
A_N = \{a_n : n \ge N\}, \qquad x_N = \inf A_N, \qquad y_N = \sup A_N.
$$

Como la sucesion es de Cauchy, es acotada, asi que estos extremos existen. Ademas,

$$
A_{N+1} \subseteq A_N,
$$

de donde

$$
x_N \le x_{N+1} \le y_{N+1} \le y_N.
$$

Por tanto $(x_N)$ es creciente y $(y_N)$ es decreciente. Dado $\varepsilon > 0$, la propiedad de Cauchy implica que una cola queda contenida en un intervalo de longitud $\varepsilon$, y entonces

$$
y_N - x_N \le \varepsilon
$$

para $N$ suficientemente grande. Luego $y_N-x_N \to 0$.

### 14

El criterio de Cauchy no menciona ningun limite externo; solo exige coherencia interna entre los terminos de la sucesion. Decir que en $\mathbb{R}$ toda sucesion de Cauchy converge significa que no faltan puntos limite para sucesiones internamente consistentes. Eso es precisamente una forma de expresar que $\mathbb{R}$ es completo.

### 15

Ya se sabe que toda sucesion convergente es de Cauchy. Reciprocamente, por el teorema de completitud probado arriba, toda sucesion de Cauchy en $\mathbb{R}$ converge. Luego, en $\mathbb{R}$,

$$
(a_n) \text{ converge } \iff (a_n) \text{ es de Cauchy}.
$$

## Cierre

Las sucesiones de Cauchy capturan la idea de convergencia sin mencionar el limite. Por eso son el lenguaje natural de la completitud. En la recta real no se pierde nada al pasar de "converge" a "es de Cauchy"; en espacios mas generales, esa equivalencia puede fallar y precisamente ahi empieza el analisis matematico en espacios metricos.
