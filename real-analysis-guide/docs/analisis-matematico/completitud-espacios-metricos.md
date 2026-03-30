---
title: Completitud
description: Espacios metricos completos, ejemplos fundamentales, estabilidad por cerrados y relacion con compacidad y productos.
---

# Completitud

## Motivacion e intuicion

Una sucesion de Cauchy se comporta como si debiera converger. Si no converge, el problema no esta en la sucesion, sino en que el espacio no tiene sitio para su limite.

La completitud formaliza exactamente esta idea: un espacio metrico es completo cuando no tiene huecos metricos desde el punto de vista de las sucesiones de Cauchy.

Esta propiedad es una de las bisagras conceptuales del bloque. A partir de ella aparecen:

- el teorema de Baire;
- la estabilidad de los cerrados;
- la relacion entre compacidad y Cauchy;
- el paso de espacios normados a espacios de Banach.

## Prerrequisitos

Conviene manejar:

- convergencia en metricos;
- sucesiones de Cauchy;
- cerrados y subespacios;
- compacidad secuencial elemental.

## Definiciones formales

### Espacio completo

Un espacio metrico $(X,d)$ es **completo** si toda sucesion de Cauchy en $X$ converge a un punto de $X$.

Es decir:

$$
\forall (x_n)\subseteq X,
\quad
(x_n) \text{ de Cauchy }
\implies
\exists x \in X \text{ tal que } x_n \to x.
$$

### Incompletitud

Diremos que $(X,d)$ es **incompleto** si existe al menos una sucesion de Cauchy en $X$ que no converge en $X$.

### Espacio de Banach

Si $V$ es un espacio normado y la metrica inducida por la norma es completa, entonces $V$ se llama **espacio de Banach**.

## Interpretacion en lenguaje natural

La completitud es una propiedad intrinsecamente metrica.

- Si una sucesion se aprieta cada vez mas dentro del espacio, la completitud garantiza que ese proceso no "apunta" hacia un punto ausente.
- Un espacio incompleto se parece a un espacio al que le faltan algunos limites naturales.

El ejemplo historico prototipico es $\mathbb{Q}$: muchas sucesiones racionales de Cauchy representan numeros reales irracionales que no viven dentro del propio espacio.

## Ejemplos basicos

### Ejemplo 1: $\mathbb{R}$ es completo

Este es un hecho fundamental del analisis real. Equivale, en el fondo, a la propiedad de completitud de los reales.

### Ejemplo 2: $\mathbb{R}^n$ es completo

Con cualquiera de sus normas usuales, $\mathbb{R}^n$ es completo. Una forma de verlo es usar la equivalencia de normas y la convergencia coordenada.

### Ejemplo 3: todo espacio finito con cualquier metrica es completo

En un espacio finito, toda sucesion de Cauchy es eventualmente constante. Por tanto converge.

### Ejemplo 4: la metrica discreta siempre es completa

En un espacio con metrica discreta, las sucesiones de Cauchy son eventualmente constantes. Luego toda metrica discreta es completa.

### Ejemplo 5: $\mathbb{Q}$ no es completo

Una sucesion racional que aproxime a $\sqrt{2}$ es de Cauchy en $\mathbb{Q}$, pero no converge en $\mathbb{Q}$.

### Ejemplo 6: un abierto de $\mathbb{R}$ puede ser incompleto

El espacio

$$
(0,1)
$$

con la metrica usual no es completo. Por ejemplo,

$$
x_n=\frac{1}{n+1}
$$

es de Cauchy, pero su limite real es $0$, que no pertenece a $(0,1)$.

## Ejemplos finos y contraejemplos

### Ejemplo fino 1: completitud no es una propiedad topologica

Sobre el mismo conjunto subyacente $\mathbb{R}$ consideremos:

$$
d(x,y)=|x-y|
$$

y

$$
\rho(x,y)=|\arctan x-\arctan y|.
$$

Ambas metricas inducen la misma topologia, porque $\arctan$ es un homeomorfismo de $\mathbb{R}$ sobre

$$
\left(-\frac{\pi}{2},\frac{\pi}{2}\right).
$$

Sin embargo, $d$ es completa y $\rho$ no lo es.

En efecto, la sucesion $x_n=n$ satisface

$$
\rho(n,m)=|\arctan n-\arctan m|,
$$

y como $(\arctan n)$ converge en $\mathbb{R}$, la sucesion $(n)$ es de Cauchy para $\rho$. Pero no converge en $\mathbb{R}$ respecto de $\rho$, porque ello requeriria un $x \in \mathbb{R}$ con

$$
\arctan x=\frac{\pi}{2},
$$

lo cual es imposible.

### Ejemplo fino 2: cerrado y acotado no implica completo en un espacio arbitrario

La completitud de un subconjunto depende del espacio ambiente y de la metrica. En $\mathbb{Q}$, por ejemplo, el conjunto

$$
F=[0,2]\cap \mathbb{Q}
$$

es cerrado y acotado como subespacio de $\mathbb{Q}$, pero no es completo: una sucesion racional en $F$ que aproxime a $\sqrt{2}$ es de Cauchy y no converge en $F$.

### Ejemplo fino 3: completitud y compacidad no son lo mismo

Todo compacto metrico es completo, pero un espacio completo puede no ser compacto. El ejemplo mas simple es

$$
\mathbb{R}.
$$

## Proposiciones y teoremas

### Teorema 1: un cerrado de un completo es completo

Sea $(X,d)$ un espacio metrico completo y sea $F \subseteq X$ cerrado. Entonces $F$, con la metrica inducida, es completo.

#### Demostracion

Sea $(x_n)$ una sucesion de Cauchy en $F$. Como la metrica es la inducida, $(x_n)$ tambien es de Cauchy como sucesion en $X$.

Puesto que $X$ es completo, existe $x \in X$ tal que

$$
x_n \to x \quad \text{en } X.
$$

Como todos los terminos pertenecen a $F$ y $F$ es cerrado, la caracterizacion secuencial de cerrado da

$$
x \in F.
$$

Luego la sucesion converge en $F$, y por tanto $F$ es completo.

### Teorema 2: un subespacio completo es cerrado

Sea $(X,d)$ un espacio metrico y sea $Y \subseteq X$. Si $Y$ es completo con la metrica inducida, entonces $Y$ es cerrado en $X$.

#### Demostracion

Tomemos una sucesion $(y_n)$ en $Y$ tal que

$$
y_n \to x \quad \text{en } X.
$$

Toda sucesion convergente es de Cauchy, asi que $(y_n)$ es de Cauchy en $X$ y, en particular, tambien en $Y$ con la metrica inducida.

Como $Y$ es completo, existe $y \in Y$ tal que

$$
y_n \to y \quad \text{en } Y.
$$

Pero converger en $Y$ con la metrica inducida es lo mismo que converger en $X$. Por unicidad del limite:

$$
x=y.
$$

Luego $x \in Y$. Hemos probado que $Y$ contiene los limites de toda sucesion suya convergente en $X$, asi que $Y$ es cerrado.

### Corolario

Si $X$ es completo y $Y \subseteq X$, entonces

$$
Y \text{ es completo } \iff Y \text{ es cerrado en } X.
$$

### Teorema 3: todo compacto metrico es completo

Si $K$ es un espacio metrico compacto, entonces $K$ es completo.

#### Demostracion

Sea $(x_n)$ una sucesion de Cauchy en $K$. Como $K$ es compacto metrico, toda sucesion en $K$ admite una subsucesion convergente. Por tanto existe una subsucesion $(x_{n_k})$ y un punto $x \in K$ tales que

$$
x_{n_k}\to x.
$$

Pero una sucesion de Cauchy que tiene una subsucesion convergente converge toda al mismo limite. Luego

$$
x_n \to x.
$$

Asi, toda sucesion de Cauchy en $K$ converge en $K$, y por tanto $K$ es completo.

### Teorema 4: el producto finito de completos es completo

Sean $(X_1,d_1),\dots,(X_m,d_m)$ espacios metricos completos. En el producto

$$
X=X_1\times \cdots \times X_m
$$

consideremos la metrica

$$
d(x,y)=\max_{1 \le j \le m} d_j(x_j,y_j),
$$

donde

$$
x=(x_1,\dots,x_m),
\qquad
y=(y_1,\dots,y_m).
$$

Entonces $(X,d)$ es completo.

#### Demostracion

Sea $(x^{(n)})$ una sucesion de Cauchy en $X$, con

$$
x^{(n)}=(x_1^{(n)},\dots,x_m^{(n)}).
$$

Fijemos un indice $j$. Como

$$
d_j(x_j^{(n)},x_j^{(m)})
\le
\max_{1 \le i \le m} d_i(x_i^{(n)},x_i^{(m)})
=
d(x^{(n)},x^{(m)}),
$$

se deduce que la sucesion coordenada $(x_j^{(n)})$ es de Cauchy en $X_j$. Como $X_j$ es completo, existe $x_j \in X_j$ tal que

$$
x_j^{(n)} \to x_j.
$$

Definimos

$$
x=(x_1,\dots,x_m)\in X.
$$

Ahora, como cada coordenada converge, para todo $\varepsilon>0$ existe $N_j$ tal que

$$
n \ge N_j \implies d_j(x_j^{(n)},x_j)<\varepsilon.
$$

Tomando

$$
N=\max\{N_1,\dots,N_m\},
$$

obtenemos que para $n \ge N$:

$$
d(x^{(n)},x)=\max_{1 \le j \le m} d_j(x_j^{(n)},x_j)<\varepsilon.
$$

Luego

$$
x^{(n)} \to x.
$$

Por tanto $X$ es completo.

### Proposicion 5: sucesion de Cauchy mas subsucesion convergente

En un espacio completo no hace falta buscar directamente el limite de una sucesion de Cauchy. Basta probar que alguna subsucesion converge, pues entonces converge toda la sucesion.

#### Comentario

Esta observacion no añade un teorema nuevo, pero es un metodo de prueba recurrente en compacidad y analisis funcional.

## Resumen conceptual

La completitud dice que toda coherencia interna de tipo Cauchy se realiza como convergencia efectiva dentro del espacio.

Sus mensajes estructurales principales son:

- $\mathbb{Q}$ y muchos abiertos de $\mathbb{R}$ son incompletos;
- los cerrados de un completo siguen siendo completos;
- dentro de un completo, ser completo equivale a ser cerrado;
- los compactos metricos son completos;
- la completitud no depende solo de la topologia.

## Ejemplos guiados finales

### Ejemplo guiado 1: por que $\mathbb{Q}$ es incompleto

Tomemos una sucesion de racionales $(q_n)$ tal que

$$
q_n^2 \to 2
$$

y

$$
q_n \to \sqrt{2}
$$

en $\mathbb{R}$. Entonces $(q_n)$ es de Cauchy en la metrica usual, pero no converge en $\mathbb{Q}$ porque su unico posible limite seria $\sqrt{2}$, que no pertenece a $\mathbb{Q}$.

### Ejemplo guiado 2: por que $(0,1)$ falla

La sucesion

$$
\frac1{n+1}
$$

es de Cauchy en $(0,1)$ porque lo es en $\mathbb{R}$. Sin embargo, el limite natural es $0$, que queda fuera del espacio. El problema no es la sucesion; el problema es el hueco.

### Ejemplo guiado 3: la completitud no se ve solo con abiertos

Las metricas usual y

$$
\rho(x,y)=|\arctan x-\arctan y|
$$

sobre $\mathbb{R}$ generan los mismos abiertos, pero una es completa y la otra no. Esto prueba que la completitud es una propiedad metrica genuina, no topologica.

### Ejemplo guiado 4: por que todo compacto metrico es completo

Una sucesion de Cauchy en un compacto tiene una subsucesion convergente por compacidad. Y una vez que una sucesion de Cauchy posee una sola subsucesion convergente, toda la sucesion queda forzada a converger al mismo punto. Esa es la mecanica completa de la prueba.

## Errores comunes

1. Creer que completitud es lo mismo que compacidad.
2. Pensar que completitud es una propiedad topologica.
3. Suponer que todo subespacio de un completo sigue siendo completo.
4. Aplicar sin mas el criterio "cerrado y acotado" fuera de $\mathbb{R}^n$.
5. Confundir un espacio completo con un espacio en el que toda sucesion acotada converge.

## Cierre

La completitud marca la frontera entre espacios en los que las sucesiones de Cauchy tienen destino interno y espacios en los que algunas de ellas "escapan" hacia puntos ausentes. Esa distincion es una de las ideas mas profundas y fertiles de toda la teoria metrico-topologica.

## Ejercicios

### Ejercicio 1

Demuestre que $\mathbb{R}$ con la metrica usual es completo.

### Ejercicio 2

Demuestre que todo subespacio cerrado de un espacio completo es completo.

### Ejercicio 3

Demuestre que $\mathbb{Q}$ con la metrica usual heredada de $\mathbb{R}$ no es completo.

### Ejercicio 4

Sea $(X,d)$ un espacio metrico completo y sea $Y \subseteq X$. Demuestre que $Y$ es completo si y solo si $Y$ es cerrado en $X$.

### Ejercicio 5

Demuestre que el producto de dos espacios metricos completos es completo.

### Ejercicio 6

En $C[0,1]$ con la metrica del supremo, demuestre que toda sucesion de Cauchy converge uniformemente a una funcion continua.

### Ejercicio 7

Demuestre que si una sucesion de Cauchy tiene una subsucesion convergente, entonces la sucesion completa converge al mismo limite.

### Ejercicio 8

Sea $(X,d)$ un espacio metrico. Defina $d'(x,y) = \frac{d(x,y)}{1 + d(x,y)}$. Demuestre que $(X,d)$ es completo si y solo si $(X,d')$ es completo.

### Ejercicio 9

Demuestre que $\ell^2$ con la metrica $\|x-y\|_2$ es completo.

### Ejercicio 10

Determine si el espacio $\ell^\infty$ con la metrica del supremo es completo.

### Ejercicio 11

Sea $(x_n)$ una sucesion de Cauchy en $(X,d)$. Demuestre que el conjunto $\{x_n : n \in \mathbb{N}\}$ es acotado.

### Ejercicio 12

Demuestre que la interseccion numerable decreciente de cerrados no vacios en un espacio completo puede ser vacia si los diametros no tienden a cero.

### Ejercicio 13

Sea $X$ un espacio metrico completo y $f\colon X \to X$ una contraccion (existe $0 \le k < 1$ tal que $d(f(x), f(y)) \leq k \cdot d(x,y)$). Demuestre que $f$ tiene un unico punto fijo.

### Ejercicio 14

Demuestre que la union finita de conjuntos completos es completa.

### Ejercicio 15

En $\mathbb{R}^2$, demuestre que el conjunto $\{(x,y) : x^2 + y^2 < 1\}$ no es completo.

## Soluciones

### Solucion 1

Sea $(x_n)$ una sucesion de Cauchy en $\mathbb{R}$. Por ser de Cauchy, $(x_n)$ es acotada.

Por el teorema de Bolzano-Weierstrass en $\mathbb{R}$, existe subsucesion $(x_{n_k})$ que converge a algun $x \in \mathbb{R}$.

Por la Proposicion 6 del tema, una sucesion de Cauchy con subsucesion convergente converge al mismo limite. Por tanto $x_n \to x$, y $\mathbb{R}$ es completo. $\blacksquare$

### Solucion 2

Sea $F \subseteq X$ cerrado y $(x_n)$ una sucesion de Cauchy en $F$. Como $X$ es completo y $(x_n)$ tambien es de Cauchy en $X$, existe $x \in X$ con $x_n \to x$.

Como $F$ es cerrado y $x_n \in F$ para todo $n$, el limite $x$ pertenece a $F$.

Por tanto toda sucesion de Cauchy en $F$ converge en $F$, y $F$ es completo. $\blacksquare$

### Solucion 3

La sucesion $x_n = \sum_{k=1}^{n} \frac{1}{k!}$ es de Cauchy en $\mathbb{Q}$ (porque converge en $\mathbb{R}$).

Su limite es $e = 2.71828\ldots \notin \mathbb{Q}$. Por tanto, la sucesion no converge en $\mathbb{Q}$. $\blacksquare$

### Solucion 4

$\Rightarrow)$ Si $Y$ es completo, sea $(y_n)$ una sucesion en $Y$ que converge a $x \in X$. Como $(y_n)$ es convergente en $X$, es de Cauchy en $X$, y por tanto de Cauchy en $Y$.

Por completitud de $Y$, existe $y \in Y$ con $y_n \to y$. Por unicidad del limite, $x = y \in Y$. Por tanto $Y$ es cerrado.

$\Leftarrow)$ Si $Y$ es cerrado en $X$ y $(y_n)$ es de Cauchy en $Y$, entonces es de Cauchy en $X$. Como $X$ es completo, $y_n \to x$ para algun $x \in X$.

Como $Y$ es cerrado y $y_n \in Y$, tenemos $x \in Y$. Por tanto $Y$ es completo. $\blacksquare$

### Solucion 5

Sean $(X, d_X)$ y $(Y, d_Y)$ espacios completos. Sea $((x_n, y_n))$ una sucesion de Cauchy en $X \times Y$ con la metrica producto $d((a,b), (a',b')) = d_X(a,a') + d_Y(b,b')$.

Dado $\varepsilon > 0$, existe $N$ tal que para todo $n, m \geq N$:

$$
d_X(x_n, x_m) + d_Y(y_n, y_m) < \varepsilon.
$$

En particular, $d_X(x_n, x_m) < \varepsilon$ y $d_Y(y_n, y_m) < \varepsilon$.

Por tanto $(x_n)$ es de Cauchy en $X$ y $(y_n)$ es de Cauchy en $Y$.

Por completitud, $x_n \to x$ en $X$ e $y_n \to y$ en $Y$.

Entonces $(x_n, y_n) \to (x, y)$ en $X \times Y$. $\blacksquare$

### Solucion 6

Sea $(f_n)$ una sucesion de Cauchy en $C[0,1]$. Esto significa que para todo $\varepsilon > 0$, existe $N$ tal que para todo $n, m \geq N$:

$$
\|f_n - f_m\|_\infty < \varepsilon.
$$

Esto equivale a que $(f_n)$ es de Cauchy para la convergencia uniforme.

Por el criterio de Cauchy para sucesiones uniformes, existe $f\colon [0,1] \to \mathbb{R}$ tal que $f_n \to f$ uniformemente.

Como cada $f_n$ es continua y el limite uniforme de funciones continuas es continuo, $f \in C[0,1]$.

Por tanto $(f_n)$ converge en $C[0,1]$ con la metrica del supremo, y el espacio es completo. $\blacksquare$

### Solucion 7

Sea $(x_n)$ de Cauchy con subsucesion $(x_{n_k})$ que converge a $x$. Dado $\varepsilon > 0$:

- Existe $N_1$ tal que para $n, m \geq N_1$: $d(x_n, x_m) < \varepsilon/2$.
- Existe $K$ tal que para $k \geq K$: $d(x_{n_k}, x) < \varepsilon/2$.

Tomamos $k$ tal que $n_k \geq N_1$. Entonces para todo $n \geq N_1$:

$$
d(x_n, x) \leq d(x_n, x_{n_k}) + d(x_{n_k}, x) < \varepsilon/2 + \varepsilon/2 = \varepsilon.
$$

Por tanto $x_n \to x$. $\blacksquare$

### Solucion 8

Primero observamos que $d'$ es metrica (verificar axiomas es directo).

$\Rightarrow)$ Si $(x_n)$ es de Cauchy en $(X,d)$, dado $\varepsilon > 0$, existe $N$ tal que $d(x_n, x_m) < \varepsilon$ para $n, m \geq N$.

Entonces $d'(x_n, x_m) = \frac{d(x_n, x_m)}{1 + d(x_n, x_m)} \leq d(x_n, x_m) < \varepsilon$.

$\Leftarrow)$ Si $(x_n)$ es de Cauchy en $(X,d')$, dado $\varepsilon > 0$ con $\varepsilon < 1$, existe $N$ tal que $d'(x_n, x_m) < \varepsilon$.

Como $d'(x_n, x_m) < \varepsilon < 1$, tenemos $d(x_n, x_m) = \frac{d'(x_n, x_m)}{1 - d'(x_n, x_m)} \leq \frac{\varepsilon}{1-\varepsilon}$.

Por tanto las nociones de Cauchy son equivalentes, y la completitud tambien. $\blacksquare$

### Solucion 9

Sea $(x^{(n)})$ una sucesion de Cauchy en $\ell^2$. Cada $x^{(n)}$ es una sucesion $(x^{(n)}_k)_{k=1}^\infty$.

Dado $\varepsilon > 0$, existe $N$ tal que para $n, m \geq N$:

$$
\|x^{(n)} - x^{(m)}\|_2^2 = \sum_{k=1}^\infty |x^{(n)}_k - x^{(m)}_k|^2 < \varepsilon^2.
$$

Para cada $k$ fijo, la sucesion $(x^{(n)}_k)_{n=1}^\infty$ es de Cauchy en $\mathbb{R}$ (pues $|x^{(n)}_k - x^{(m)}_k|^2 \leq \|x^{(n)} - x^{(m)}\|_2^2$).

Como $\mathbb{R}$ es completo, $x^{(n)}_k \to x_k$ para algun $x_k \in \mathbb{R}$.

Definimos $x = (x_k)_{k=1}^\infty$. Probamos que $x \in \ell^2$ y $x^{(n)} \to x$.

Para $K$ finito:

$$
\sum_{k=1}^K |x_k|^2 = \lim_{n \to \infty} \sum_{k=1}^K |x^{(n)}_k|^2 \leq \limsup_{n \to \infty} \|x^{(n)}\|_2^2 < \infty.
$$

Tomando limite $K \to \infty$: $\|x\|_2 < \infty$, asi $x \in \ell^2$.

Ademas, para $n \geq N$:

$$
\sum_{k=1}^K |x^{(n)}_k - x_k|^2 = \lim_{m \to \infty} \sum_{k=1}^K |x^{(n)}_k - x^{(m)}_k|^2 \leq \varepsilon^2.
$$

Tomando $K \to \infty$: $\|x^{(n)} - x\|_2 \leq \varepsilon$. Por tanto $x^{(n)} \to x$ en $\ell^2$. $\blacksquare$

### Solucion 10

$\ell^\infty$ con la metrica $d(x,y) = \sup_n |x_n - y_n|$ es completo.

Sea $(x^{(n)})$ de Cauchy en $\ell^\infty$. Para cada $k$, la sucesion de coordenadas $(x^{(n)}_k)$ es de Cauchy en $\mathbb{R}$ (acotada por $\|x^{(n)}\|_\infty$).

Por completitud de $\mathbb{R}$, $x^{(n)}_k \to y_k$ para algun $y_k$.

Definimos $y = (y_k)$. Probamos que $y \in \ell^\infty$ y $x^{(n)} \to y$.

Como $(x^{(n)})$ es de Cauchy, es acotada: existe $M$ tal que $\|x^{(n)}\|_\infty \leq M$ para todo $n$.

Entonces $|y_k| = \lim_{n \to \infty} |x^{(n)}_k| \leq M$, asi $y \in \ell^\infty$.

Finalmente, dado $\varepsilon > 0$, existe $N$ tal que para $n, m \geq N$: $\|x^{(n)} - x^{(m)}\|_\infty < \varepsilon$.

Para $k$ arbitrario y $n \geq N$: $|x^{(n)}_k - y_k| = \lim_{m \to \infty} |x^{(n)}_k - x^{(m)}_k| \leq \varepsilon$.

Como esto vale para todo $k$: $\|x^{(n)} - y\|_\infty \leq \varepsilon$. $\blacksquare$

### Solucion 11

Como $(x_n)$ es de Cauchy, para $\varepsilon = 1$, existe $N$ tal que para todo $n, m \geq N$: $d(x_n, x_m) < 1$.

Entonces para todo $n \geq N$: $d(x_n, x_N) < 1$.

Para $n < N$, tomamos $M = \max\{d(x_n, x_N) : 1 \leq n < N\}$.

Definiendo $R = \max(1, M) + 1$, tenemos $d(x_n, x_N) < R$ para todo $n$.

Por tanto todos los terminos estan en $B(x_N, R)$, y el conjunto es acotado. $\blacksquare$

### Solucion 12

En $\mathbb{R}$, consideramos $F_n = [n, \infty)$. Cada $F_n$ es cerrado y $F_{n+1} \subseteq F_n$.

Como $\mathbb{R}$ es completo, pero $\bigcap_{n=1}^\infty F_n = \emptyset$.

La razon es que los diametros no tienden a cero: $\text{diam}(F_n) = \infty$ para todo $n$. $\blacksquare$

### Solucion 13

(Punto fijo de Banach) Fijamos $x_0 \in X$ arbitrario. Definimos $x_{n+1} = f(x_n)$.

Para $n > m$:

$$
d(x_n, x_m) \leq d(x_n, x_{n-1}) + \cdots + d(x_{m+1}, x_m) \leq k^{m} d(x_1, x_0) \sum_{j=0}^{n-m-1} k^j.
$$

Como $k < 1$, la serie geometrica converge y $(x_n)$ es de Cauchy.

Por completitud, $x_n \to x$ para algun $x \in X$.

Por continuidad de $f$ (toda contraccion es continua), $f(x) = f(\lim x_n) = \lim f(x_n) = \lim x_{n+1} = x$.

Para unicidad: si $f(x) = x$ y $f(y) = y$, entonces $d(x,y) = d(f(x), f(y)) \leq k d(x,y)$, lo que implica $d(x,y) = 0$ y $x = y$. $\blacksquare$

### Solucion 14

Sean $F_1, F_2$ conjuntos completos. Sea $(x_n)$ una sucesion de Cauchy en $F_1 \cup F_2$.

Si la sucesion tiene infinitos terminos en algun $F_i$, entonces existe una subsucesion de Cauchy en $F_i$. Como $F_i$ es completo, esta subsucesion converge a $x \in F_i \subseteq F_1 \cup F_2$.

Por la Proposicion 6, la sucesion original converge a $x$.

Si la sucesion tiene infinitos terminos en ambos $F_1$ y $F_2$, entonces hay dos subsucesiones convergentes, pero ambas deben converger al mismo limite (por la propiedad de Cauchy), asi que la sucesion completa converge. $\blacksquare$

### Solucion 15

La sucesion $x_n = (1 - 1/n, 0)$ esta en el conjunto abierto y es de Cauchy (converge en $\mathbb{R}^2$).

Su limite seria $(1, 0)$, que no pertenece al conjunto abierto.

Por tanto, el conjunto no es completo. $\blacksquare$

---

## Referencias y lecturas adicionales

1. Rudin, W. (1976). *Principles of Mathematical Analysis*. McGraw-Hill.
2. Banach, S. (1932). *Theorie des Operations Lineaires*. Chelsea.
3. Kadison, R.V.; Ringrose, J.R. (1997). *Fundamentals of the Theory of Operator Algebras*. Academic Press.
4. Munkres, J.R. (2000). *Topology*. Prentice Hall.
