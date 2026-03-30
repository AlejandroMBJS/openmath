---
title: Heine-Borel en metricos
description: Alcance del criterio cerrado y acotado, caracterizacion correcto-metrica por total acotacion y caso euclideo.
---

# Heine-Borel en metricos

## Motivacion e intuicion

El teorema de Heine-Borel clasico es uno de los resultados mas famosos del analisis:

$$
\text{cerrado y acotado} \iff \text{compacto}
$$

en $\mathbb{R}^n$.

Pero fuera del contexto euclideo esta equivalencia falla de manera contundente. La formulacion correcta en espacios metricos generales reemplaza "acotado" por "totalmente acotado" y "cerrado" por "completo" cuando se trabaja con el espacio completo ambiente.

## Prerrequisitos

Conviene manejar:

- compacidad en metricos;
- total acotacion;
- completitud;
- bolas abiertas;
- espacios normados basicos.

## Definiciones formales

### Conjunto acotado

Un subconjunto $A \subseteq X$ es **acotado** si existe $x_0 \in X$ y $R>0$ tales que

$$
A \subseteq B(x_0,R).
$$

### Conjunto totalmente acotado

$A \subseteq X$ es **totalmente acotado** si para todo $\varepsilon>0$ existen puntos

$$
x_1,\dots,x_N \in X
$$

tales que

$$
A \subseteq \bigcup_{j=1}^N B(x_j,\varepsilon).
$$

### Observacion

La total acotacion implica acotacion, pero no al reves en general.

## Teorema correcto en espacios metricos

### Teorema 1

Para un espacio metrico $(X,d)$ y un subconjunto $K \subseteq X$, se tiene

$$
K \text{ es compacto } \iff K \text{ es completo y totalmente acotado}
$$

cuando $K$ se considera con la metrica inducida.

#### Comentario

Esta es la forma correcta de Heine-Borel en el mundo metrico abstracto.

## Demostracion del teorema correcto

### Compacto implica completo y totalmente acotado

Si $K$ es compacto, entonces es secuencialmente compacto.

- **Completitud**: toda sucesion de Cauchy en $K$ posee una subsucesion convergente a algun punto $x \in K$. Una sucesion de Cauchy con una subsucesion convergente converge toda ella al mismo limite. Luego $K$ es completo.
- **Total acotacion**: si $K$ no fuera totalmente acotado, existiria $\varepsilon_0>0$ tal que ninguna union finita de bolas de radio $\varepsilon_0$ cubre a $K$. Se construye inductivamente una sucesion $(x_n)$ en $K$ con

$$
d(x_n,x_m)\ge \varepsilon_0 \quad \text{si } n \ne m.
$$

Tal sucesion no puede tener subsucesion de Cauchy ni convergente, contradiciendo compacidad secuencial.

### Completo y totalmente acotado implica compacto

Sea $(x_n)$ una sucesion en $K$. Como $K$ es totalmente acotado, para $\varepsilon=1$ existe una cubierta finita por bolas de radio $1$; alguna de ellas contiene infinitos terminos de la sucesion. Extraemos una subsucesion en esa bola.

Repetimos para radios

$$
\frac12,\frac13,\dots
$$

y por diagonalizacion obtenemos una subsucesion $(x_{n_k})$ tal que para cada $m$ todos los terminos suficientemente avanzados quedan en una misma bola de radio $1/m$. De aqui se deduce que $(x_{n_k})$ es de Cauchy.

Como $K$ es completo, la subsucesion converge en $K$. Luego toda sucesion en $K$ posee subsucesion convergente, y por el criterio metrico de compacidad, $K$ es compacto.

## Caso euclideo

### Teorema 2: Heine-Borel en $\mathbb{R}^n$

En $\mathbb{R}^n$ con cualquier norma,

$$
K \subseteq \mathbb{R}^n \text{ es compacto } \iff K \text{ es cerrado y acotado.}
$$

#### Demostracion

Si $K$ es compacto, entonces en todo espacio metrico compacto es cerrado y acotado.

Reciprocamente, si $K$ es cerrado y acotado en $\mathbb{R}^n$, la acotacion implica total acotacion en dimension finita, y como $\mathbb{R}^n$ es completo, el cerrado $K$ es completo con la metrica inducida. Por el teorema anterior, $K$ es compacto.

### Proposicion 3: en dimension finita, acotado implica totalmente acotado

Si $A \subseteq \mathbb{R}^n$ es acotado, entonces es totalmente acotado.

#### Idea de demostracion

Un conjunto acotado queda contenido en un cubo grande. Ese cubo puede subdividirse en finitamente muchos subcubos de diametro menor que $\varepsilon$. Eligiendo un punto en cada subcubo no vacio se obtiene una $\varepsilon$-red finita.

## Ejemplos y contraejemplos

### Ejemplo 1: intervalos cerrados y acotados

En $\mathbb{R}$,

$$
[a,b]
$$

es compacto.

### Ejemplo 2: bolas cerradas en dimension finita

En $\mathbb{R}^n$, toda bola cerrada

$$
\overline{B}(0,R)
$$

es compacta.

### Contraejemplo 1: metrica discreta

En un espacio infinito con metrica discreta, todo subconjunto es acotado porque su diametro es a lo mas $1$. Sin embargo, un subconjunto infinito no es compacto.

#### Explicacion

Para

$$
\varepsilon<1,
$$

cada bola de radio $\varepsilon$ es un singleton, asi que un conjunto infinito no puede ser totalmente acotado.

### Contraejemplo 2: bola unitaria en $\ell^2$

En el espacio de Hilbert $\ell^2$, la bola cerrada unitaria

$$
\overline{B}(0,1)
$$

es cerrada y acotada, pero no compacta.

#### Demostracion

Considera la sucesion de vectores canonicos $(e_n)$. Cada uno satisface

$$
\|e_n\|_2=1,
$$

de modo que

$$
e_n \in \overline{B}(0,1).
$$

Pero si $n \ne m$,

$$
\|e_n-e_m\|_2 = \sqrt{2}.
$$

Luego la sucesion no tiene ninguna subsucesion de Cauchy, y por tanto no puede tener subsucesion convergente. La bola no es compacta.

### Contraejemplo 3: acotado abierto en $\mathbb{R}$

El intervalo

$$
(0,1)
$$

es acotado, pero no compacto porque no es cerrado.

## Consecuencias operativas

### Proposicion 4

En $\mathbb{R}^n$, toda funcion continua sobre un cerrado y acotado alcanza maximo y minimo.

### Proposicion 5

En espacios metricos generales, la hipotesis "cerrado y acotado" no debe usarse como sustituto de compacidad. La combinacion correcta es "completo y totalmente acotado".

## Errores comunes

1. Aplicar "cerrado y acotado implica compacto" en cualquier espacio metrico o normado.
2. Confundir acotacion con total acotacion.
3. Pensar que toda bola cerrada en un Banach es compacta.
4. Olvidar que la implicacion euclidea depende fuertemente de la dimension finita.

## Resumen operativo

- En espacios metricos generales,

$$
\text{compacto} \iff \text{completo y totalmente acotado}.
$$

- En $\mathbb{R}^n$, la acotacion ya implica total acotacion y los cerrados son completos, por eso reaparece Heine-Borel.
- El criterio "cerrado y acotado" es especial de la geometria euclidea y de dimension finita.

## Ejercicios

### Ejercicio 1

Demuestra que todo compacto metrico es totalmente acotado.

### Ejercicio 2

Prueba que un subconjunto infinito de un espacio discreto no es compacto.

### Ejercicio 3

Completa la prueba de que un conjunto acotado de $\mathbb{R}^n$ es totalmente acotado.

### Ejercicio 4

Demuestra que la bola unitaria cerrada de $\ell^2$ no es compacta.

### Ejercicio 5

Explica con precision por que Heine-Borel falla en espacios normados infinito-dimensionales.

### Ejercicio 6

Prueba que en $\mathbb{R}^n$, cerrado + acotado equivale a totalmente acotado + completo.

### Ejercicio 7

Sea $K$ totalmente acotado en un espacio metrico. Demuestre que toda sucesion en $K$ admite una subsucesion de Cauchy.

### Ejercicio 8

Demuestre que la imagen de un compacto por una aplicacion continua es compacta.

### Ejercicio 9

Pruebe que si $K$ es compacto y $f : K \to \mathbb{R}$ es continua, entonces $f$ alcanza maximo y minimo.

### Ejercicio 10

Demuestre que un espacio metrico es compacto si y solo si toda familia de cerrados con la propiedad de interseccion finita tiene interseccion no vacia.

### Ejercicio 11

Sea $K$ compacto y $F_1 \supseteq F_2 \supseteq \cdots$ cadena decreciente de cerrados no vacios. Pruebe que $\bigcap_n F_n \ne \varnothing$.

### Ejercicio 12

Prueba que la bola unitaria cerrada de $c_0$ no es compacta.

### Ejercicio 13

Demuestre que $[0,1]$ es compacto en $\mathbb{R}$ usando el teorema de Heine-Borel.

### Ejercicio 14

Sea $A \subseteq \mathbb{R}^n$. Pruebe que $A$ es compacto si y solo si toda sucesion en $A$ tiene subsucesion convergente en $A$.

### Ejercicio 15

Pruebe que el producto finito de compactos metricos es compacto con la metrica producto.

## Soluciones

### Solucion 1

Dado $\varepsilon > 0$, la familia $\{B(x, \varepsilon) : x \in K\}$ recubre $K$. Por compacidad, existe subrecubrimiento finito $K \subseteq \bigcup_{j=1}^N B(x_j, \varepsilon)$. $\blacksquare$

### Solucion 2

Si $X$ es discreto e infinito, cada punto es abierto. La cobertura $\{ \{x\} : x \in X \}$ no admite subrecubrimiento finito. $\blacksquare$

### Solucion 3

Sea $A \subseteq \mathbb{R}^n$ acotado. Existe $M > 0$ con $\|x\| \le M$ para todo $x \in A$. La bola $\overline{B}(0,M)$ es compacta en $\mathbb{R}^n$. Para $\varepsilon > 0$, $\overline{B}(0,M) \subseteq \bigcup_{z \in \mathbb{Z}^n \cap \overline{B}(0,M)} B(z, \varepsilon)$, que es una cubierta finita. Restringida a $A$, obtenemos cubierta finita por bolas de radio $\varepsilon$. $\blacksquare$

### Solucion 4

La sucesion de vectores canonicos $e_n$ pertenece a $\overline{B}(0,1)$ en $\ell^2$. Si $n \ne m$, $\|e_n - e_m\|_2 = \sqrt{2}$. Ninguna subsucesion puede ser de Cauchy, luego $\overline{B}(0,1)$ no es secuencialmente compacta, hence no es compacta. $\blacksquare$

### Solucion 5

En dimension infinita, la bola unidad cerrada no es necesariamente compacta (contraejemplo $\ell^2$). La razon es que la total acotacion falla: existen conjuntos acotados que no son totalmente acotados porque la dimension infinita permite empaquetar infinitos puntos a distancia fija. $\blacksquare$

### Solucion 6

En $\mathbb{R}^n$, cerrado implica completo y acotado implica totalmente acotado. Asi cerrado + acotado = completo + totalmente acotado = compacto. $\blacksquare$

### Solucion 7

Sea $(x_n)$ en $K$. Como $K$ es totalmente acotado, para $\varepsilon = 1$ existe cubierta finita $K \subseteq \bigcup_{j=1}^{N_1} B(a_j^{(1)}, 1)$. Hay infinitos puntos en alguna bola $B(a_{j_1}^{(1)}, 1)$. Repitiendo con $\varepsilon = 1/2$, obtenemos subsucesion en $B(a_{j_2}^{(2)}, 1/2)$, etc. Por construccion, la subsucesion es de Cauchy. $\blacksquare$

### Solucion 8

Sea $\{U_i\}$ recubrimiento abierto de $f(K)$. Para cada $x \in K$, existe $i(x)$ con $f(x) \in U_{i(x)}$, luego $x \in f^{-1}(U_{i(x)})$. La familia $\{f^{-1}(U_i)\}$ recubre $K$, tiene subrecubrimiento finito, y sus imagenes cubren $f(K)$. $\blacksquare$

### Solucion 9

$f(K)$ es compacto en $\mathbb{R}$, hence cerrado y acotado. Por Weierstrass, $f$ alcanza maximo y mnimo en $K$. $\blacksquare$

### Solucion 10

$\Rightarrow$: Si $K$ es compacto y $\bigcap F_i = \varnothing$, entonces $\{K \setminus F_i\}$ recubre $K$; por compacidad existe subrecubrimiento finito $K \setminus F_{i_1}, \ldots, K \setminus F_{i_m}$, luego $F_{i_1} \cap \cdots \cap F_{i_m} = \varnothing$, contradiccion. $\Leftarrow$: Si la propiedad de interseccion finita vale, supongamos que $K$ no es compacto. Entonces existe una familia abierta sin subrecubrimiento finito. Construir una sucesion de cerrados encajados sin interseccion y obtener contradiccion. $\blacksquare$

### Solucion 11

Si $\bigcap_n F_n = \varnothing$, entonces $\{K \setminus F_n\}$ recubre $K$. Por compacidad existe subrecubrimiento finito $K \setminus F_{n_1}, \ldots, K \setminus F_{n_m}$. Si $N = \max\{n_j\}$, entonces $K \setminus F_N = \bigcup_{j=1}^m (K \setminus F_{n_j})$, luego $F_N = \varnothing$, contradiccion. $\blacksquare$

### Solucion 12

En $c_0$, los vectores canonicos $e_n$ tienden a $0$ pero $\|e_n - e_m\|_\infty = 1$ para $n \ne m$. Asi $\overline{B}(0,1)$ en $c_0$ no es totally acotada, hence no compacta. $\blacksquare$

### Solucion 13

$[0,1]$ es cerrado y acotado en $\mathbb{R}$, hence completo y totalmente acotado. Por el teorema de Heine-Borel (o equivalentemente, completo + totalmente acotado = compacto), $[0,1]$ es compacto. $\blacksquare$

### Solucion 14

En $\mathbb{R}^n$, compacto $\iff$ secuencialmente compacto $\iff$ completo + totalmente acotado $\iff$ cerrado + acotado (por Heine-Borel). La equivalencia con subsucesiones convergentes es la definicion de compacidad secuencial, que coincide con compacidad en espacios metricos. $\blacksquare$

### Solucion 15

Sea $(x_n, y_n)$ sucesion en $K_1 \times K_2$. Por compacidad secuencial, $(x_n)$ tiene subsucesion convergente $x_{n_k} \to x$ en $K_1$, y $(y_{n_k})$ tiene subsucesion $y_{n_{k_j}} \to y$ en $K_2$. Entonces $(x_{n_{k_j}}, y_{n_{k_j}}) \to (x,y)$ en el producto. $\blacksquare$

---

## Referencias y lecturas adicionales

1. Munkres, J.R. (2000). *Topology*. Prentice Hall.
2. Engelking, R. (1989). *General Topology*. Heldermann Verlag.
3. Rudin, W. (1976). *Principles of Mathematical Analysis*. McGraw-Hill.
4. Willard, S. (2004). *General Topology*. Dover.
5. Bourbaki, N. (1989). *General Topology*, Chapters 1-4. Springer.
6. Dieudonne, J. (1960). *Foundations of Modern Analysis*. Academic Press.
