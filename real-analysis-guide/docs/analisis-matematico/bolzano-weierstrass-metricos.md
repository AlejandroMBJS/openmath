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
