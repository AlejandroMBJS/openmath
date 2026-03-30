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

### Ejercicio 1

Demuestre que en todo espacio metrico compacto, toda familia de cerrados con la propiedad de interseccion finita tiene interseccion no vacia.

### Ejercicio 2

Sea $K$ compacto y $F_1 \supseteq F_2 \supseteq \cdots$ una sucesion decreciente de cerrados no vacios. Demuestre que $\bigcap_{n=1}^\infty F_n \ne \varnothing$.

### Ejercicio 3

Rehaga la demostracion del teorema de Heine-Cantor (continuidad uniforme sobre compactos) usando el numero de Lebesgue.

### Ejercicio 4

Muestre que el recubrimiento $\{(n-1,n+1) : n \in \mathbb{Z}\}$ de $\mathbb{R}$ no posee numero de Lebesgue.

### Ejercicio 5

Explique por que el numero de Lebesgue es una forma de totalizar el control local del recubrimiento.

### Ejercicio 6

Demuestre que en un espacio metrico totally acotado, para todo $\varepsilon > 0$ existe un subrecubrimiento finito cuyas bolas tienen radio menor que $\varepsilon$.

### Ejercicio 7

Sea $K$ compacto y $\{U_i\}_{i \in I}$ un recubrimiento abierto. Demuestre que existe $\delta > 0$ (numero de Lebesgue) tal que toda bola de radio $\delta$ esta contenida en algun $U_i$.

### Ejercicio 8

Demuestre que si $K$ es compacto metrico, entonces $K$ es separable.

### Ejercicio 9

Pruebe que todo espacio metrico compacto es segundo numerable.

### Ejercicio 10

Sea $f : K \to \mathbb{R}$ continua con $K$ compacto. Demuestre que $f$ alcanza maximo y minimo usando el numero de Lebesgue.

### Ejercicio 11

Demuestre que la imagen de un compacto por una aplicacion continua es compacta, usando el teorema de Borel-Lebesgue.

### Ejercicio 12

Sea $K$ compacto en un espacio metrico. Pruebe que para todo $\varepsilon > 0$ existe una familia finita de bolas abiertas de radio $\varepsilon$ que cubre $K$.

### Ejercicio 13

Demuestre que si $K$ es compacto y $F \subseteq K$ es cerrado, entonces $F$ es compacto.

### Ejercicio 14

Pruebe que todo espacio metrico compacto es completo.

### Ejercicio 15

Sea $K$ compacto y $f : K \to K$ una biyeccion continua. Demuestre que $f$ es homeomorfismo.

## Soluciones

### Solucion 1

Sea $\{F_i\}_{i \in I}$ una familia de cerrados con la propiedad de interseccion finita. Si $\bigcap_i F_i = \varnothing$, entonces $\{X \setminus F_i\}_{i \in I}$ es un recubrimiento abierto de $K$. Por compacidad existe subrecubrimiento finito $X \setminus F_{i_1}, \ldots, X \setminus F_{i_m}$. Asi $K \subseteq \bigcup_{j=1}^m (X \setminus F_{i_j}) = X \setminus \bigcap_{j=1}^m F_{i_j}$, lo que implica $\bigcap_{j=1}^m F_{i_j} = \varnothing$, contradiciendo la hipotesis de interseccion finita. $\blacksquare$

### Solucion 2

Si $\bigcap_n F_n = \varnothing$, entonces $\{X \setminus F_n\}_{n \in \mathbb{N}}$ recubre $K$. Por compacidad, existe subrecubrimiento finito $X \setminus F_{n_1}, \ldots, X \setminus F_{n_m}$ con $n_1 < \cdots < n_m$. Entonces $K \subseteq \bigcup_{j=1}^m (X \setminus F_{n_j}) = X \setminus F_{n_m}$, asi $F_{n_m} = \varnothing$, contradiccion. $\blacksquare$

### Solucion 3

Sea $\varepsilon > 0$. Para cada $x \in K$, por continuidad existe $V_x$ abierto con $x \in V_x$ y $f(V_x) \subseteq B(f(x), \varepsilon/2)$. La familia $\{V_x : x \in K\}$ recubre $K$. Sea $\delta > 0$ su numero de Lebesgue. Si $d(u,v) < \delta$, elige $x$ tal que $u \in V_x$. Entonces $v \in V_x$, asi $d_Y(f(u), f(v)) \leq d_Y(f(u), f(x)) + d_Y(f(x), f(v)) < \varepsilon$. $\blacksquare$

### Solucion 4

Si existiera $\delta > 0$ con la propiedad, toma $x = n + 1 - \delta/2$ con $n \in \mathbb{Z}$. La bola $B(x, \delta)$ contiene puntos en $(n-1,n+1)$ y $(n,n+2)$, intersectando dos elementos del recubrimiento sin estar contenida en ninguno. $\blacksquare$

### Solucion 5

El numero de Lebesgue convierte la compacidad — una propiedad puramente topologica sobre recubrimientos — en una herramienta metrica cuantitativa. Mientras un recubrimiento abierto garantiza que cada punto tiene vecindad contenida en algun abierto, el numero de Lebesgue asegura que hay una escala unica $\delta$ que funciona uniformemente para todo el espacio, independientemente de la dependencia local del punto. $\blacksquare$

### Solucion 6

Por total acotacion, para $\varepsilon/2$ existe una cobertura finita $K \subseteq \bigcup_{j=1}^N B(x_j, \varepsilon/2)$. Si $\delta = \varepsilon/2$, cada bola de radio $\delta$ esta contenida en alguna de esas bolas, y las bolas originales de radio $\varepsilon/2$ ya forman subrecubrimiento finito. Mas directamente, la definicion misma de total acotacion da el resultado con $\varepsilon$ dado. $\blacksquare$

### Solucion 7

La familia $\{U_i\}$ recubre $K$. Por el numero de Lebesgue $\delta > 0$, toda bola de radio $\delta$ centrada en $K$ esta contenida en algun $U_i$. $\blacksquare$

### Solucion 8

Para cada $n$, existe $F_n$ finito tal que $K \subseteq \bigcup_{x \in F_n} B(x, 1/n)$. El conjunto $D = \bigcup_n F_n$ es numerable y denso en $K$. $\blacksquare$

### Solucion 9

La familia $\{B(x, 1/n) : x \in K, n \in \mathbb{N}\}$ es una base numerable para la topologia de $K$. En efecto, si $U$ es abierto en $K$ y $x \in U$, existe $\varepsilon > 0$ con $B_K(x, \varepsilon) \subseteq U$. Toma $n$ con $1/n < \varepsilon/2$. Por total acotacion, existe $y \in K$ con $d(x,y) < 1/n$, y asi $x \in B(y, 1/n) \subseteq B(x, 2/n) \subseteq U$. $\blacksquare$

### Solucion 10

La imagen $f(K)$ es compacta en $\mathbb{R}$, luego es cerrada y acotada. Por Weierstrass, $f$ alcanza maximo y minimo en $K$. Alternativamente, por la propiedad del numero de Lebesgue, se puede dar una demostracion directa: si $m = \inf f(K)$ y $M = \sup f(K)$, la continuidad y compacidad garantizan que ambos se alcanzan. $\blacksquare$

### Solucion 11

Sea $\{U_i\}$ recubrimiento abierto de $f(K)$. Para cada $x \in K$, existe $i(x)$ con $f(x) \in U_{i(x)}$, asi $x \in f^{-1}(U_{i(x)})$. La familia $\{f^{-1}(U_i)\}$ recubre $K$; por compacidad existe subrecubrimiento finito $K \subseteq f^{-1}(U_{i_1}) \cup \cdots \cup f^{-1}(U_{i_m})$. Luego $f(K) \subseteq U_{i_1} \cup \cdots \cup U_{i_m}$. $\blacksquare$

### Solucion 12

Por total acotacion: para $\varepsilon > 0$, existe $\{x_1, \ldots, x_N\} \subseteq K$ tal que $K \subseteq \bigcup_{j=1}^N B(x_j, \varepsilon)$. $\blacksquare$

### Solucion 13

Sea $\{U_i\}$ recubrimiento abierto de $F$. Entonces $\{U_i\} \cup \{X \setminus F\}$ recubre $K$. Por compacidad existe subrecubrimiento finito. Si $X \setminus F$ pertenece a el, entonces $K \subseteq (X \setminus F) \cup U_{i_1} \cup \cdots \cup U_{i_m}$, luego $F \subseteq U_{i_1} \cup \cdots \cup U_{i_m}$. Si no, ya tenemos $F$ cubierto por $U_{i_1} \cup \cdots \cup U_{i_m}$. $\blacksquare$

### Solucion 14

Sea $(x_n)$ de Cauchy en $K$. Por compacidad secuencial, tiene subsucesion convergente $x_{n_k} \to x \in K$. Pero si $(x_n)$ es de Cauchy y una subsucesion converge, toda la sucesion converge al mismo limite. $\blacksquare$

### Solucion 15

$f$ es continua y biyectiva. Sea $V$ abierto en $K$. Entonces $K \setminus V$ es cerrado en $K$, luego compacto. Por continuidad, $f(K \setminus V)$ es compacto, y en espacios metricos compacto implica cerrado. Asi $f(K \setminus V) = f(K) \setminus f(V)$ es cerrado en $f(K) = K$, luego $f(V)$ es abierto. $\blacksquare$

---

## Referencias y lecturas adicionales

1. Munkres, J.R. (2000). *Topology*. Prentice Hall.
2. Engelking, R. (1989). *General Topology*. Heldermann Verlag.
3. Willard, S. (2004). *General Topology*. Dover.
4. Bourbaki, N. (1989). *General Topology*, Chapters 1-4. Springer.
5. Kelley, J.L. (1955). *General Topology*. Van Nostrand.
6. Rudin, W. (1976). *Principles of Mathematical Analysis*. McGraw-Hill.
