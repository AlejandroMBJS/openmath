---
title: Borel-Lebesgue completo
description: Compacidad por recubrimientos, propiedad de interseccion finita y lema del numero de Lebesgue en compactos metricos.
---

# Borel-Lebesgue completo

## Motivacion e intuicion

La compacidad puede describirse secuencialmente, por completitud y total acotacion, o por recubrimientos abiertos. La formulacion por recubrimientos es la forma original del concepto y sigue siendo la mas robusta para muchos argumentos globales.

En espacios metricos compactos, esa descripcion topologica tiene una consecuencia cuantitativa notable: todo recubrimiento abierto posee un numero de Lebesgue, es decir, una escala uniforme a la que el recubrimiento deja de ser visible.

## Prerrequisitos

Conviene manejar:

- compacidad en metricos;
- abiertos y bolas;
- total acotacion;
- continuidad uniforme.

## Formulacion de Borel-Lebesgue

### Compacidad por recubrimientos

Un espacio topologico $K$ es compacto si y solo si todo recubrimiento abierto de $K$ admite un subrecubrimiento finito.

En esta pagina tomamos esa formulacion como punto de partida y estudiamos sus consecuencias metricas finas.

## Propiedad de interseccion finita

### Definicion

Una familia $\mathcal{F}$ de subconjuntos de $K$ tiene la **propiedad de interseccion finita** si para toda subfamilia finita

$$
F_1,\dots,F_n \in \mathcal{F}
$$

se cumple

$$
F_1 \cap \cdots \cap F_n \ne \varnothing.
$$

### Teorema 1

Si $K$ es compacto y $(F_i)_{i \in I}$ es una familia de cerrados con la propiedad de interseccion finita, entonces

$$
\bigcap_{i \in I} F_i \ne \varnothing.
$$

#### Demostracion

Supongamos, por contradiccion, que

$$
\bigcap_{i \in I} F_i = \varnothing.
$$

Entonces los complementos abiertos

$$
U_i = K \setminus F_i
$$

forman un recubrimiento abierto de $K$. Por compacidad, existe una subfamilia finita

$$
U_{i_1},\dots,U_{i_n}
$$

que recubre a $K$, es decir,

$$
K = U_{i_1}\cup\cdots\cup U_{i_n}.
$$

Tomando complementos relativos en $K$,

$$
F_{i_1}\cap\cdots\cap F_{i_n}=\varnothing,
$$

lo cual contradice la propiedad de interseccion finita.

### Corolario 2

En un espacio compacto, una familia decreciente de cerrados no vacios

$$
F_1 \supseteq F_2 \supseteq \cdots
$$

tiene interseccion no vacia:

$$
\bigcap_{n=1}^\infty F_n \ne \varnothing.
$$

## Lema del numero de Lebesgue

### Enunciado

Sea $(K,d)$ un espacio metrico compacto y sea $\mathcal{U}$ un recubrimiento abierto de $K$. Entonces existe $\delta>0$ tal que para todo $x \in K$ existe $U \in \mathcal{U}$ con

$$
B(x,\delta)\cap K \subseteq U.
$$

Tal $\delta$ se llama **numero de Lebesgue** del recubrimiento.

### Demostracion completa

Supongamos que no existe tal $\delta$. Entonces para cada $n \in \mathbb{N}$ existe un punto $x_n \in K$ tal que ninguna bola de radio $1/n$ centrada en $x_n$ queda contenida en un elemento de $\mathcal{U}$.

Por compacidad de $K$, la sucesion $(x_n)$ admite una subsucesion $(x_{n_k})$ convergente a algun punto $x \in K$.

Como $\mathcal{U}$ recubre a $K$, existe $U \in \mathcal{U}$ con

$$
x \in U.
$$

Al ser $U$ abierto en el subespacio $K$, existe $r>0$ tal que

$$
B(x,r)\cap K \subseteq U.
$$

Elige $k$ suficientemente grande para que

$$
d(x_{n_k},x)<\frac r2
$$

y

$$
\frac1{n_k}<\frac r2.
$$

Si $y \in B(x_{n_k},1/n_k)\cap K$, entonces

$$
d(y,x)\le d(y,x_{n_k})+d(x_{n_k},x)<\frac r2+\frac r2=r.
$$

Por tanto,

$$
y \in B(x,r)\cap K \subseteq U.
$$

Concluimos que

$$
B(x_{n_k},1/n_k)\cap K \subseteq U,
$$

contradiccion con la eleccion de $x_{n_k}$.

## Consecuencias metricas

### Proposicion 3: Heine-Cantor via numero de Lebesgue

Si $K$ es compacto metrico y

$$
f : K \to Y
$$

es continua, entonces $f$ es uniformemente continua.

#### Demostracion

Sea $\varepsilon>0$. Para cada $x \in K$, por continuidad existe un abierto $V_x$ de $K$ tal que

$$
f(V_x) \subseteq B_Y(f(x),\varepsilon/2).
$$

La familia $\{V_x : x \in K\}$ es un recubrimiento abierto de $K$. Sea $\delta>0$ un numero de Lebesgue para este recubrimiento.

Si

$$
d(u,v)<\delta,
$$

elige $x \in K$ tal que

$$
B(u,\delta)\cap K \subseteq V_x.
$$

Como $v \in B(u,\delta)\cap K$, se tiene

$$
u,v \in V_x.
$$

Luego

$$
d_Y(f(u),f(v)) \le d_Y(f(u),f(x))+d_Y(f(x),f(v)) < \frac\varepsilon2+\frac\varepsilon2 = \varepsilon.
$$

### Proposicion 4: recubrimientos uniformemente pequeños

En un compacto metrico, todo recubrimiento abierto admite una escala comun por debajo de la cual cualquier bola queda absorbida por un elemento del recubrimiento.

#### Comentario

Este es exactamente el contenido conceptual del numero de Lebesgue. Sirve para pasar de datos topologicos a control metrica uniforme.

## Ejemplos y contraejemplos

### Ejemplo 1: recubrimientos de $[0,1]$

Si $\mathcal{U}$ recubre a $[0,1]$, existe $\delta>0$ tal que todo intervalo de radio $\delta$ centrado en un punto de $[0,1]$ queda contenido en algun abierto del recubrimiento.

### Ejemplo 2: uso en triangulaciones y particiones

El lema del numero de Lebesgue permite refinar particiones del dominio para que la imagen de cada pieza quede atrapada en un abierto elegido del recubrimiento.

### Contraejemplo 1: el lema falla sin compacidad

En $\mathbb{R}$, el recubrimiento

$$
\{(n-1,n+1): n \in \mathbb{Z}\}
$$

no posee numero de Lebesgue para todo el espacio.

En efecto, si $\delta>0$, toma $x=n+1-\delta/2$. Toda bola de radio $\delta$ alrededor de $x$ intersecta dos intervalos consecutivos y no queda contenida en ninguno de ellos.

### Contraejemplo 2: subrecubrimiento numerable no basta

La existencia de un subrecubrimiento numerable no da por si sola un numero de Lebesgue. El paso de numerable a finito en un compacto es lo que permite uniformizar la escala.

## Errores comunes

1. Pensar que el numero de Lebesgue depende de cada punto.
2. Confundir el lema con la mera existencia de un subrecubrimiento finito.
3. Olvidar restringir las bolas al compacto cuando este vive dentro de un espacio ambiente mayor.
4. Usar el lema en espacios no compactos.

## Resumen operativo

- La formulacion de Borel-Lebesgue describe la compacidad por recubrimientos abiertos.
- En compactos, la propiedad de interseccion finita de cerrados equivale a la no vacuidad de la interseccion total.
- El lema del numero de Lebesgue transforma compacidad topologica en control metrica uniforme.
- Heine-Cantor se deduce naturalmente de este lema.

## Ejercicios

1. Demuestra la propiedad de interseccion finita para compactos.
2. Prueba el corolario de la sucesion decreciente de cerrados no vacios.
3. Rehace la demostracion de Heine-Cantor usando el numero de Lebesgue.
4. Muestra que el recubrimiento $\{(n-1,n+1)\}_{n \in \mathbb{Z}}$ de $\mathbb{R}$ no tiene numero de Lebesgue.
5. Explica por que el numero de Lebesgue es una forma de totalizar el control local del recubrimiento.
