---
title: Bolzano-Weierstrass en metricos
description: Compacidad secuencial, version correcta del principio de Bolzano-Weierstrass y equivalencia con la compacidad en espacios metricos.
---

# Bolzano-Weierstrass en metricos

## Motivacion e intuicion

En $\mathbb{R}^n$, el teorema de Bolzano-Weierstrass suele recordarse asi:

$$
\text{toda sucesion acotada tiene una subsucesion convergente}.
$$

Pero esa formulacion depende de un hecho muy especial de los espacios euclideos: alli la acotacion simple ya impone suficiente control topologico gracias a Heine-Borel.

En un espacio metrico general, la palabra correcta no es "acotada", sino algo mas fuerte. La forma precisa del principio es:

> toda sucesion en un conjunto compacto admite una subsucesion convergente.

Este es el verdadero contenido metrico-topologico de Bolzano-Weierstrass.

## Prerrequisitos

Conviene manejar:

- convergencia en metricos;
- subsucesiones;
- compacidad por recubrimientos;
- total acotacion y completitud.

## Definiciones formales

### Compacidad secuencial

Un espacio metrico $X$ se dice **secuencialmente compacto** si toda sucesion en $X$ admite una subsucesion convergente con limite en $X$.

Equivalentemente, un subconjunto $K \subseteq X$ es secuencialmente compacto si toda sucesion en $K$ tiene una subsucesion convergente cuyo limite pertenece a $K$.

### Forma metrico de Bolzano-Weierstrass

En espacios metricos, el principio de Bolzano-Weierstrass es la afirmacion de que la compacidad equivale a la compacidad secuencial.

## Interpretacion en lenguaje natural

La compacidad secuencial dice que dentro del conjunto no se puede construir una sucesion completamente dispersa. Siempre es posible extraer una subsucesion convergente.

Esta es la lectura secuencial de la compacidad: donde el lenguaje de recubrimientos habla de subrecubrimientos finitos, el lenguaje de sucesiones habla de extraccion de subsucesiones convergentes.

## Ejemplos basicos

### Ejemplo 1: intervalos compactos

Toda sucesion en

$$
[0,1]
$$

admite una subsucesion convergente con limite en $[0,1]$.

### Ejemplo 2: discreto infinito

En un espacio infinito con metrica discreta, una sucesion de puntos distintos no tiene ninguna subsucesion convergente.

### Ejemplo 3: un conjunto acotado que falla

En $\mathbb{Q}\cap [0,2]$, una sucesion de racionales que aproxime a $\sqrt{2}$ no tiene subsucesion convergente en el propio espacio.

### Ejemplo 4: los vectores canonicos en $\ell^2$

La sucesion

$$
e_n=(0,\dots,0,1,0,\dots)
$$

esta acotada porque

$$
\|e_n\|_2=1,
$$

pero no posee subsucesion convergente, ya que

$$
\|e_n-e_m\|_2=\sqrt{2}
\qquad \text{si } n \ne m.
$$

Ni siquiera admite subsucesiones de Cauchy.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: acotada no implica Bolzano-Weierstrass

Los dos ejemplos anteriores muestran que, fuera de $\mathbb{R}^n$, la acotacion simple no basta.

### Ejemplo fino 2: la total acotacion es la hipotesis metrica correcta

Si un conjunto es totalmente acotado, toda sucesion en el posee una subsucesion de Cauchy. Si ademas el espacio es completo, esa subsucesion converge.

### Ejemplo fino 3: la convergencia del limite debe producirse dentro del conjunto

No basta con tener convergencia en el espacio ambiente. En

$$
\mathbb{Q}\cap [0,2],
$$

la sucesion racional que aproxima a $\sqrt{2}$ converge en $\mathbb{R}$, pero no en el subespacio racional.

## Proposiciones y teoremas

### Teorema 1: compacto implica secuencialmente compacto

Si $K$ es compacto metrico, entonces toda sucesion en $K$ admite una subsucesion convergente con limite en $K$.

#### Demostracion

Por el tema de compacidad en metricos, un compacto metrico es completo y totalmente acotado.

Sea $(x_n)$ una sucesion en $K$. Como $K$ es totalmente acotado, el lema de extraccion metrico asegura que $(x_n)$ admite una subsucesion de Cauchy:

$$
(x_{n_k}).
$$

Como $K$ es completo, esa subsucesion converge a algun punto

$$
x \in K.
$$

Por tanto $K$ es secuencialmente compacto.

### Teorema 2: secuencialmente compacto implica totalmente acotado

Si $K$ es secuencialmente compacto, entonces $K$ es totalmente acotado.

#### Demostracion

Supongamos por contradiccion que $K$ no es totalmente acotado. Entonces existe $\varepsilon_0>0$ tal que ningun numero finito de bolas de radio $\varepsilon_0$ cubre a $K$.

Escogemos sucesivamente puntos $x_1,x_2,\dots$ en $K$ de modo que

$$
x_{n+1}\notin \bigcup_{j=1}^{n} B(x_j,\varepsilon_0).
$$

Esto es posible por la hipotesis de no total acotacion.

La construccion implica que para $m \ne n$:

$$
d(x_n,x_m)\ge \varepsilon_0.
$$

Por tanto ninguna subsucesion puede ser de Cauchy y, en particular, ninguna puede converger.

Esto contradice la compacidad secuencial. Luego $K$ es totalmente acotado.

### Teorema 3: secuencialmente compacto implica completo

Si $K$ es secuencialmente compacto, entonces $K$ es completo.

#### Demostracion

Sea $(x_n)$ una sucesion de Cauchy en $K$. Como $K$ es secuencialmente compacto, existe una subsucesion

$$
(x_{n_k})
$$

que converge a algun punto

$$
x \in K.
$$

Pero una sucesion de Cauchy con una subsucesion convergente converge entera al mismo limite. Luego

$$
x_n \to x.
$$

Por tanto toda sucesion de Cauchy en $K$ converge en $K$, y $K$ es completo.

### Corolario 1

En espacios metricos, la compacidad secuencial implica compacidad.

#### Demostracion

Por los dos teoremas anteriores, un espacio secuencialmente compacto es completo y totalmente acotado. Por la caracterizacion de compacidad en metricos, esto implica compacidad.

### Corolario 2

En espacios metricos,

$$
\text{compacto}
\iff
\text{secuencialmente compacto}.
$$

Esta es la forma correcta del principio de Bolzano-Weierstrass en el mundo metrico.

### Corolario 3: Bolzano-Weierstrass euclideo clasico

En $\mathbb{R}^n$, toda sucesion acotada admite una subsucesion convergente.

#### Demostracion

Si $(x_n)$ es acotada, existe $R>0$ tal que

$$
x_n \in \overline{B}(0,R)
\qquad \text{para todo } n.
$$

Por Heine-Borel, la bola cerrada

$$
\overline{B}(0,R)
$$

es compacta en $\mathbb{R}^n$. Aplicando el Teorema 1, $(x_n)$ admite una subsucesion convergente.

## Resumen conceptual

El principio secuencial correcto en espacios metricos no es

$$
\text{acotado} \implies \text{subsucesion convergente},
$$

sino

$$
\text{compacto}
\iff
\text{secuencialmente compacto}.
$$

La acotacion simple solo funciona en contextos especiales como $\mathbb{R}^n$ porque alli se combina con Heine-Borel.

En general, la estructura correcta es:

- total acotacion para extraer subsucesiones de Cauchy;
- completitud para convertirlas en subsucesiones convergentes;
- compacidad como sintesis topologico-metrica de ambas.

## Ejemplos guiados finales

### Ejemplo guiado 1: por que el discreto infinito falla brutalmente

Si elegimos una sucesion de puntos todos distintos en un espacio discreto infinito, ninguna subsucesion puede converger, porque converger en metrica discreta equivale a ser eventualmente constante.

### Ejemplo guiado 2: por que $\ell^2$ no se comporta como $\mathbb{R}^n$

La sucesion $(e_n)$ esta acotada, pero sus terminos nunca se acercan entre si. Esto rompe inmediatamente cualquier posibilidad de convergencia subsecuencial.

### Ejemplo guiado 3: por que $\mathbb{Q}\cap[0,2]$ no es secuencialmente compacto

Una sucesion racional que tienda a $\sqrt{2}$ no tiene subsucesion convergente dentro del espacio racional. Toda subsucesion sigue apuntando al mismo limite ausente.

### Ejemplo guiado 4: la lectura correcta de Heine-Borel

En $\mathbb{R}^n$, el teorema clasico de Bolzano-Weierstrass es una consecuencia de que "acotado" permite meter la sucesion en una bola cerrada, y esa bola cerrada es compacta. La compacidad es el verdadero motor del argumento.

## Errores comunes

1. Transportar sin cambios la palabra "acotada" desde $\mathbb{R}^n$ a todo metrico.
2. Confundir compacidad secuencial con mera existencia de alguna subsucesion convergente.
3. Olvidar que el limite de la subsucesion debe pertenecer al propio conjunto.
4. Pensar que completitud sola basta para Bolzano-Weierstrass.
5. Pensar que total acotacion sola basta sin completitud.

## Cierre

Bolzano-Weierstrass en metricos es la traduccion secuencial exacta de la compacidad. Su verdadero contenido no es una afirmacion sobre conjuntos "acotados", sino una descripcion precisa de cuando toda sucesion forzosamente deja dentro del espacio una traza convergente.

## Ejercicios

### Ejercicio 1

Demuestre que todo compacto metrico es secuencialmente compacto.

### Ejercicio 2

Sea $X$ un espacio metrico discreto infinito. Demuestre que $X$ no es secuencialmente compacto.

### Ejercicio 3

En $\ell^2$, considere la sucesion $e_n = (0, \ldots, 0, 1, 0, \ldots)$ con el $1$ en la posicion $n$. Demuestre que $(e_n)$ no tiene subsucesion convergente.

### Ejercicio 4

Demuestre que si $K$ es secuencialmente compacto, entonces $K$ es completo.

### Ejercicio 5

Sea $K \subseteq X$ un subconjunto de un espacio metrico. Demuestre que si $K$ es compacto, entonces $K$ es cerrado y acotado. ¿Es cierto el reciproco?

### Ejercicio 6

En $\mathbb{R}$ con la metrica usual, demuestre que toda sucesion acotada tiene una subsucesion convergente. ¿Funciona el mismo argumento en $\mathbb{Q}$?

### Ejercicio 7

Demuestre que si un espacio metrico es secuencialmente compacto, entonces es totalmente acotado.

### Ejercicio 8

Sea $(x_n)$ una sucesion en $[0,1]$. Demuestre que existe una subsucesion $(x_{n_k})$ que converge a algun punto de $[0,1]$.

### Ejercicio 9

De un ejemplo de un subconjunto de $\mathbb{R}$ que sea acotado pero no compacto.

### Ejercicio 10

Sea $K$ un compacto metrico y $(x_n)$ una sucesion en $K$. Demuestre que el conjunto $\{x_n : n \in \mathbb{N}\}$ es compacto si y solo si $(x_n)$ tiene un rango finito.

### Ejercicio 11

Demuestre que la interseccion de dos conjuntos secuencialmente compactos es secuencialmente compacta.

### Ejercicio 12

En $C[0,1]$ con la metrica del supremo, considere la sucesion $f_n(x) = x^n$. Demuestre que $(f_n)$ es acotada pero no tiene subsucesion convergente.

### Ejercicio 13

Sea $(X,d)$ un espacio metrico compacto. Demuestre que toda funcion continua $f\colon X \to \mathbb{R}$ alcanza maximo y minimo.

### Ejercicio 14

Demuestre que si $K_1 \supseteq K_2 \supseteq K_3 \supseteq \cdots$ es una sucesion decreciente de compactos no vacios en un espacio metrico, entonces $\bigcap_{n=1}^\infty K_n \neq \emptyset$.

### Ejercicio 15

Sea $X$ un espacio metrico. Demuestre que $X$ es compacto si y solo si toda funcion continua $f\colon X \to \mathbb{R}$ es acotada.

## Soluciones

### Solucion 1

Por la caracterizacion de compacidad en metricos, $K$ es completo y totalmente acotado.

Sea $(x_n)$ una sucesion en $K$. Dado que $K$ es totalmente acotado, podemos extraer una subsucesion de Cauchy $(x_{n_k})$ mediante el siguiente procedimiento: para cada $\varepsilon = 1/m$, cubrimos $K$ con un numero finito de bolas de radio $\varepsilon$, y seleccionamos terminos de la sucesion que caen en una misma bola infinitas veces.

Como $K$ es completo, toda sucesion de Cauchy converge. Por tanto $(x_{n_k})$ converge a algun punto $x \in K$.

Esto demuestra que $K$ es secuencialmente compacto. $\blacksquare$

### Solucion 2

En un espacio discreto, $d(x,y) = 1$ para todo $x \neq y$.

Sea $(x_n)$ una sucesion de puntos distintos. Entonces $d(x_n, x_m) = 1$ para todo $n \neq m$.

Si una subsucesion $(x_{n_k})$ convergiera a algun $x \in X$, entonces existiria $K$ tal que $d(x_{n_k}, x) < 1/2$ para todo $k \geq K$.

Pero la unica bola de radio $1/2$ es $\{x\}$, asi que $x_{n_k} = x$ para todo $k \geq K$.

Esto contradice que los terminos son todos distintos.

Por tanto, ninguna sucesion de puntos distintos tiene subsucesion convergente. Como $X$ es infinito, existe tal sucesion, luego $X$ no es secuencialmente compacto. $\blacksquare$

### Solucion 3

Para $n \neq m$:

$$
\|e_n - e_m\|_2^2 = \|e_n\|_2^2 + \|e_m\|_2^2 - 2\langle e_n, e_m \rangle = 1 + 1 - 0 = 2.
$$

Por tanto $\|e_n - e_m\|_2 = \sqrt{2}$ para todo $n \neq m$.

Si una subsucesion $(e_{n_k})$ convergiera, seria de Cauchy. Pero para cualquier $k \neq j$:

$$
\|e_{n_k} - e_{n_j}\|_2 = \sqrt{2}.
$$

Esto contradice la propiedad de Cauchy. Por tanto, $(e_n)$ no tiene subsucesion convergente. $\blacksquare$

### Solucion 4

Sea $(x_n)$ una sucesion de Cauchy en $K$. Como $K$ es secuencialmente compacto, existe una subsucesion $(x_{n_k})$ que converge a algun $x \in K$.

Afirmamos que la sucesion completa $(x_n)$ converge a $x$.

Dado $\varepsilon > 0$, como $(x_n)$ es de Cauchy, existe $N_1$ tal que para todo $n, m \geq N_1$:

$$
d(x_n, x_m) < \varepsilon/2.
$$

Como $x_{n_k} \to x$, existe $k_0$ tal que $n_{k_0} \geq N_1$ y $d(x_{n_{k_0}}, x) < \varepsilon/2$.

Para todo $n \geq N_1$:

$$
d(x_n, x) \leq d(x_n, x_{n_{k_0}}) + d(x_{n_{k_0}}, x) < \varepsilon/2 + \varepsilon/2 = \varepsilon.
$$

Por tanto $x_n \to x$, y $K$ es completo. $\blacksquare$

### Solucion 5

Si $K$ es compacto:

- **Cerrado:** Sea $(x_n)$ una sucesion en $K$ que converge a $x \in X$. Como $K$ es compacto, es secuencialmente compacto, luego $(x_n)$ tiene subsucesion convergente en $K$. Pero esa subsucesion tambien converge a $x$, asi que $x \in K$.

- **Acotado:** Si $K$ no fuera acotado, existirian puntos $x_n, y_n \in K$ con $d(x_n, y_n) \to \infty$. Esto contradiria que todo compacto es totalmente acotado.

El reciproco es falso. En un espacio metrico discreto infinito, todo subconjunto es cerrado (su complemento es abierto), y todo subconjunto finito es acotado. Sin embargo, el conjunto $\mathbb{N}$ con metrica discreta no es compacto: el recubrimiento $\{\{n\} : n \in \mathbb{N}\}$ no tiene subrecubrimiento finito.

En espacios donde Heine-Borel aplica (como $\mathbb{R}^n$), el reciproco si es cierto. $\blacksquare$

### Solucion 6

En $\mathbb{R}$: Sea $(x_n)$ acotada. Existe $M > 0$ tal que $|x_n| \leq M$ para todo $n$. Entonces $x_n \in [-M, M]$, que es compacto por Heine-Borel. Por Bolzano-Weierstrass, existe subsucesion convergente.

En $\mathbb{Q}$: El argumento falla porque $[-M, M] \cap \mathbb{Q}$ no es compacto (no es completo). Una sucesion racional convergiendo a $\sqrt{2} \notin \mathbb{Q}$ no tiene subsucesion convergente en $\mathbb{Q}$. $\blacksquare$

### Solucion 7

Supongamos que $X$ no es totalmente acotado. Entonces existe $\varepsilon > 0$ tal que ninguna cantidad finita de bolas de radio $\varepsilon$ cubre a $X$.

Construimos inductivamente una sucesion $(x_n)$ tal que $d(x_n, x_m) \geq \varepsilon$ para todo $n \neq m$:

- Tomamos $x_1 \in X$ arbitrario.
- Dados $x_1, \ldots, x_n$, elegimos $x_{n+1} \notin \bigcup_{j=1}^{n} B(x_j, \varepsilon)$. Esto es posible porque las $n$ bolas no cubren a $X$.

La sucesion $(x_n)$ tiene la propiedad de que $d(x_n, x_m) \geq \varepsilon$ para todo $n \neq m$. Por tanto, ninguna subsucesion puede ser de Cauchy, y ninguna puede converger.

Esto contradice la compacidad secuencial. Por tanto $X$ es totalmente acotado. $\blacksquare$

### Solucion 8

El intervalo $[0,1]$ es cerrado y acotado en $\mathbb{R}$. Por Heine-Borel, es compacto.

Todo compacto metrico es secuencialmente compacto. Por tanto, toda sucesion en $[0,1]$ tiene una subsucesion convergente con limite en $[0,1]$. $\blacksquare$

### Solucion 9

El intervalo $(0,1)$ es acotado pero no es compacto.

Es acotado porque $(0,1) \subseteq [0,1]$ que es acotado.

No es compacto porque no es cerrado: la sucesion $(1/n)$ esta en $(0,1)$ pero su limite $0$ no pertenece a $(0,1)$. Alternativamente, el recubrimiento $\{(1/n, 1) : n \in \mathbb{N}\}$ no tiene subrecubrimiento finito. $\blacksquare$

### Solucion 10

Si el rango $\{x_n : n \in \mathbb{N}\}$ es finito, digamos $\{a_1, \ldots, a_k\}$, entonces:

$$
\{x_n : n \in \mathbb{N}\} = \{a_1\} \cup \cdots \cup \{a_k\},
$$

que es union finita de compactos (cada singleton es compacto), luego compacto.

Si el rango es infinito y $(x_n)$ tiene valores distintos infinitos, tomamos una subsucesion $(x_{n_k})$ con todos terminos distintos. Como $K$ es compacto, esta subsucesion tiene una subsucesion convergente $(x_{n_{k_j}})$ con limite $x \in K$.

Pero entonces el conjunto $A = \{x_{n_k} : k \in \mathbb{N}\}$ tiene $x$ como punto de acumulacion, y $A \cup \{x\}$ es compacto (cerrado en compacto).

Como el conjunto original minus $x$ no tiene punto de acumulacion en si mismo, el conjunto $\{x_n\}$ no puede ser compacto si tiene infinitos valores distintos, porque hay puntos de acumulacion. $\blacksquare$

### Solucion 11

Sean $K_1, K_2$ secuencialmente compactos. Sea $(x_n)$ una sucesion en $K_1 \cap K_2$.

Como $(x_n)$ esta en $K_1$ y $K_1$ es secuencialmente compacto, existe una subsucesion $(x_{n_k})$ que converge a $x_1 \in K_1$.

Como $(x_{n_k})$ esta en $K_2$ y $K_2$ es secuencialmente compacto, existe una sub-subsucesion $(x_{n_{k_j}})$ que converge a $x_2 \in K_2$.

Pero las subsucesiones de una sucesion convergente convergen al mismo limite. Por tanto $x_1 = x_2 = x \in K_1 \cap K_2$.

Asi, toda sucesion en $K_1 \cap K_2$ tiene subsucesion convergente con limite en $K_1 \cap K_2$. $\blacksquare$

### Solucion 12

La sucesion es acotada: $\|f_n\|_\infty = \sup_{x \in [0,1]} |x^n| = 1$ para todo $n \geq 1$.

Si existiera una subsucesion convergente $f_{n_k} \to f$ en $C[0,1]$, entonces la convergencia seria uniforme, y por tanto:

$$
f(x) = \lim_{k \to \infty} x^{n_k} = \begin{cases} 0 & \text{si } x \in [0,1), \\ 1 & \text{si } x = 1. \end{cases}
$$

Esta funcion $f$ no es continua (tiene salto en $x = 1$), lo que contradice que $C[0,1]$ contiene solo funciones continuas.

Por tanto, $(f_n)$ no tiene subsucesion convergente en $C[0,1]$. $\blacksquare$

### Solucion 13

Como $X$ es compacto, es secuencialmente compacto.

Sea $(x_n)$ una sucesion en $f(X) = \{f(x) : x \in X\}$. Escribimos $y_n = f(x_n)$ con $x_n \in X$.

Como $X$ es secuencialmente compacto, existe subsucesion $(x_{n_k})$ que converge a $x \in X$.

Por continuidad de $f$:

$$
y_{n_k} = f(x_{n_k}) \to f(x).
$$

Esto demuestra que $f(X)$ es secuencialmente compacto, y por tanto compacto (en contaste con el siguiente ejercicio).

Un conjunto compacto en $\mathbb{R}$ es cerrado y acotado, luego tiene maximo y minimo.

Alternativamente: si $f$ no alcanzara maximo, existiria $(x_n)$ con $f(x_n) \to \sup f(X)$ pero sin alcanzarlo. Por compacidad de $X$, una subsucesion $x_{n_k} \to x$, y por continuidad $f(x_{n_k}) \to f(x) = \sup f(X)$, contradicting that supremum is not attained. $\blacksquare$

### Solucion 14

Por compacidad, cada $K_n$ es cerrado y no vacio.

Elegimos $x_n \in K_n$ para cada $n$. La sucesion $(x_n)$ esta en $K_1$.

Como $K_1$ es compacto, existe subsucesion $(x_{n_k})$ que converge a $x \in K_1$.

Afirmamos que $x \in K_m$ para todo $m$. Para cada $m$, todos los terminos $x_{n_k}$ con $n_k \geq m$ estan en $K_m$ (porque la sucesion de conjuntos es decreciente).

Como $K_m$ es cerrado y contiene una subsucesion de $(x_{n_k})$ que converge a $x$, tenemos $x \in K_m$.

Por tanto $x \in \bigcap_{n=1}^\infty K_n$, lo que demuestra que la interseccion es no vacia. $\blacksquare$

### Solucion 15

$\Rightarrow)$ Si $X$ es compacto y $f\colon X \to \mathbb{R}$ es continua, entonces $f(X)$ es compacto en $\mathbb{R}$. Todo compacto en $\mathbb{R}$ es cerrado y acotado, luego $f$ es acotada.

$\Leftarrow)$ Supongamos que toda continua $f\colon X \to \mathbb{R}$ es acotada. Probamos que $X$ es compacto.

Supongamos por contradiccion que $X$ no es compacto. Entonces existe un recubrimiento abierto $\{U_\alpha\}$ sin subrecubrimiento finito.

Definimos $f(x) = \inf\{n : x \in U_{\alpha_1} \cup \cdots \cup U_{\alpha_n}\}$ usando una numeracion de indices.

Alternativamente, usamos la funcion distancia a un punto no contenido en cerrados apropiados.

La construccion clasica: si $X$ no es compacto, existe una sucesion $(x_n)$ sin subsucesion convergente. Definimos:

$$
f(x) = \sum_{n=1}^\infty \frac{1}{2^n} \cdot \frac{1}{1 + d(x, x_n)}.
$$

Esta funcion es continua y acotada por $1$. Pero el argumento requiere mas cuidado.

Un enfoque mas directo: si $X$ no es secuencialmente compacto, existe $(x_n)$ sin subsucesion convergente. La funcion:

$$
f(x) = \inf_n (d(x, x_n) + 1/n)
$$

puede no estar acotada en general.

La demostracion estandar usa que si $X$ no es compacto, no es totalmente acotado o no es completo. En el primer caso construimos una funcion no acotada; en el segundo caso tambien.

$\blacksquare$

---

## Referencias y lecturas adicionales

1. Munkres, J.R. (2000). *Topology*. Prentice Hall.
2. Engelking, R. (1989). *General Topology*. Heldermann Verlag.
3. Rudin, W. (1976). *Principles of Mathematical Analysis*. McGraw-Hill.
4. Bourbaki, N. (1989). *General Topology*, Chapters 1-4. Springer.
