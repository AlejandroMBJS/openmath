---
title: Compacidad en espacios metricos
description: Definicion por cobertura abierta, compacidad secuencial, equivalencia en metricos, propiedades y teorema de Weierstrass.
---

# Compacidad en espacios metricos

## Motivacion e intuicion

En $\mathbb{R}$, un subconjunto es compacto si y solo si es cerrado y acotado. Pero esta caracterizacion no funciona en espacios generales. La compacidad es una nocion topologica que captura "tamaño finito" de forma intrínseca: un espacio es compacto si de toda familia infinita de abiertos que lo cubre, basta con finitos de ellos.

Esta nocion tiene equivalentes fundamentales en espacios metricos: compacidad secuencial (toda sucesion tiene subsucesion convergente) y completez mas total acotacion. Estas tres perspectivas—with diferentes intuiciones—resultan ser equivalentes.

::: tip Idea central
Uncompacto es un espacio donde el infinito puede reducirse sistematicamente a algo finito sin perder informacion esencial.
:::

## Definiciones formales

### Cobertura abierta

Sea $X$ un espacio metrico y $K \subseteq X$. Una **cobertura abierta** de $K$ es una familia $\{U_i\}_{i \in I}$ de subconjuntos abiertos de $X$ tal que:

$$
K \subseteq \bigcup_{i \in I} U_i.
$$

### Subcobertura finita

Una **subcobertura finita** es una subfamilia finita $\{U_{i_1}, \ldots, U_{i_n}\}$ que aún cubre $K$:

$$
K \subseteq U_{i_1} \cup \cdots \cup U_{i_n}.
$$

### Compacidad por cobertura abierta

$K$ es **compacto** si toda cobertura abierta de $K$ admite una subcobertura finita.

### Compacidad secuencial

$K$ es **secuencialmente compacto** si toda sucesion $(x_n)$ en $K$ tiene una subsucesion convergente con límite en $K$.

### Total acotacion

$K$ es **totalmente acotado** si para todo $\varepsilon > 0$ existen $x_1, \ldots, x_n \in K$ tales que:

$$
K \subseteq B(x_1, \varepsilon) \cup \cdots \cup B(x_n, \varepsilon).
$$

## Teoremas fundamentales

### Teorema 1 — Equivalencia en espacios metricos

En un espacio metrico $(X, d)$, para $K \subseteq X$ son equivalentes:

1. $K$ es compacto (toda cobertura abierta tiene subcobertura finita).
2. $K$ es secuencialmente compacto (toda sucesion tiene subsucesion convergente).
3. $K$ es completo y totalmente acotado.

**Demostracion.**

**(1) $\Rightarrow$ (2):** Sea $(x_n)$ sucesion en $K$. Si existe $x \in K$ tal que $x_n = x$ para infinitos $n$, esa subsucesion constante converge a $x$.

Si no, cada punto aparece finitas veces. Definimos $F_n = \{x_k : k \geq n\}$ y $A_n = \overline{F_n}$ (clausura en $K$). Cada $A_n$ es cerrado en $K$ y $A_{n+1} \subseteq A_n$.

Si $\bigcap_{n=1}^\infty A_n = \emptyset$, entonces $\{K \setminus A_n\}_n$ es cobertura abierta de $K$. Por compacidad, existe subcobertura finita $K \setminus A_{n_1}, \ldots, K \setminus A_{n_m}$. Si $N = \max\{n_1, \ldots, n_m\}$, entonces $\bigcap_{n=1}^N A_n = A_N \neq \emptyset$, contradiccion.

Luego existe $x \in \bigcap_n A_n$. Esto significa que para todo $\varepsilon > 0$ y todo $m$, $B(x, \varepsilon) \cap F_m \neq \emptyset$.

Construimos inductivamente: $n_1 = 1$. Dado $n_k$, elegimos $n_{k+1} > n_k$ tal que $x_{n_{k+1}} \in B(x, 1/(k+1))$. La subsucesion $(x_{n_k})$ converge a $x$.

**(2) $\Rightarrow$ (3):** 

**Completitud:** Sea $(x_n)$ sucesion de Cauchy en $K$. Por compacidad secuencial, tiene subsucesion $(x_{n_k})$ convergente a $x \in K$. Como es de Cauchy, toda la sucesion converge a $x$.

**Total acotacion:** Supongamos que $K$ no es totalmente acotado. Existe $\varepsilon > 0$ tal que ninguna familia finita de bolas de radio $\varepsilon$ cubre $K$. Construimos inductivamente $(x_n)$: elegimos $x_1 \in K$, y dado $x_1, \ldots, x_n$, elegimos $x_{n+1} \notin \bigcup_{i=1}^n B(x_i, \varepsilon)$ (que existe por hipotesis).

Esta sucesion satisface $d(x_n, x_m) \geq \varepsilon$ para $n \neq m$, asi que ninguna subsucesion puede ser de Cauchy, contradicting compacidad secuencial.

**(3) $\Rightarrow$ (1):** Sea $\{U_i\}_{i \in I}$ cobertura abierta de $K$. Como $K$ es totalmente acotado, es separable, luego $K$ es Lindelof (toda cobertura abierta tiene subcobertura numerable). Sea $\{U_n\}_{n \in \mathbb{N}}$ la subcobertura numerable.

Si no existe subcobertura finita, elegimos $x_n \in K \setminus (U_1 \cup \cdots \cup U_n)$. La sucesion $(x_n)$ tiene subsucesion de Cauchy (por total acotacion) y como $K$ es completo, converge a $x \in K$.

Existe $m$ con $x \in U_m$. Como $U_m$ es abierto y $x_{n_k} \to x$, eventualmente $x_{n_k} \in U_m$. Pero $x_{n_k} \notin U_1 \cup \cdots \cup U_{n_k} \supseteq U_m$ si $n_k \geq m$. Contradiccion.

$\blacksquare$

### Proposicion 2 — Propiedades basicas

Sea $K$ compacto en espacio metrico $(X, d)$.

**(a)** $K$ es cerrado en $X$.

**(b)** $K$ es acotado.

**(c)** $K$ es totalmente acotado.

**(d)** $K$ es completo.

**Demostracion.**

**(a)** Sea $x \notin K$. Para cada $y \in K$, $d(x, y) > 0$. La familia $\{B(y, d(x,y)/2)\}_{y \in K}$ cubre $K$. Por compacidad, existe $y_1, \ldots, y_n$ con:

$$
K \subseteq \bigcup_{i=1}^n B\left(y_i, \frac{d(x, y_i)}{2}\right).
$$

Sea $r = \min_i d(x, y_i)/2 > 0$. Entonces $B(x, r) \cap K = \emptyset$, asi $x \notin \overline{K}$. Como $x$ fue arbitrario, $K$ es cerrado.

**(b)** Para $x_0 \in K$, la familia $\{B(x_0, n)\}_{n \in \mathbb{N}}$ cubre $K$. Por compacidad, existe $N$ con $K \subseteq B(x_0, N)$.

**(c)** y **(d)** son parte del teorema de equivalencia.

$\blacksquare$

### Teorema 3 — Imagen continua de compacto es compacta

Si $f\colon K \to Y$ es continua y $K$ es compacto, entonces $f(K)$ es compacto.

**Demostracion.**

Sea $\{V_i\}_{i \in I}$ cobertura abierta de $f(K)$. Entonces $\{f^{-1}(V_i)\}_{i \in I}$ es cobertura abierta de $K$ (por continuidad). Por compacidad de $K$, existe subcobertura finita $\{f^{-1}(V_{i_1}), \ldots, f^{-1}(V_{i_n})\}$. Entonces $\{V_{i_1}, \ldots, V_{i_n}\}$ cubre $f(K)$.

$\blacksquare$

### Teorema 4 — Weierstrass (Extremos en compactos)

Si $K$ es compacto en espacio metrico y $f\colon K \to \mathbb{R}$ es continua, entonces $f$ alcanza su maximo y minimo en $K$.

**Demostracion.**

Por el teorema anterior, $f(K)$ es compacto en $\mathbb{R}$. Los compactos en $\mathbb{R}$ son cerrados y acotados, asi $f(K)$ tiene supremo $M$ e infimo $m$. Como $f(K)$ es cerrado, $M, m \in f(K)$, es decir, existen $x_M, x_m \in K$ con $f(x_M) = M$ y $f(x_m) = m$.

$\blacksquare$

### Proposicion 5 — Cerrado en compacto es compacto

Si $K$ es compacto y $F \subseteq K$ es cerrado, entonces $F$ es compacto.

**Demostracion.**

Sea $\{U_i\}_{i \in I}$ cobertura abierta de $F$. Entonces $\{U_i\}_{i \in I} \cup \{X \setminus F\}$ es cobertura abierta de $K$. Por compacidad de $K$, existe subcobertura finita. Si removemos $X \setminus F$, obtenemos subcobertura finita de $F$.

$\blacksquare$

### Proposicion 6 — Compacidad en $\mathbb{R}^n$: Heine-Borel

En $\mathbb{R}^n$ con métrica euclidea, $K$ es compacto si y solo si $K$ es cerrado y acotado.

**Demostracion.**

**$\Rightarrow$:** Ya demostrado: todo compacto es cerrado y acotado.

**$\Leftarrow$:** Si $K$ es cerrado y acotado, existe $R > 0$ con $K \subseteq [-R, R]^n$.

Los intervalos cerrados $[-R, R]$ son compactos en $\mathbb{R}$ (Heine-Borel en $\mathbb{R}$). El producto de compactos es compacto, asi $[-R, R]^n$ es compacto. Como $K$ es cerrado contenido en compacto, $K$ es compacto.

$\blacksquare$

::: warning Advertencia
El recíproco "cerrado y acotado $\Rightarrow$ compacto" es FALSO en espacios de dimension infinita. La bola cerrada unitaria en $\ell^2$ es cerrada y acotada pero NO compacta.
:::

## Contraejemplos importantes

### Contraejemplo 1 — Acotado no implica compacto

La bola cerrada unitaria $\overline{B}(0, 1)$ en $\ell^2$ es cerrada y acotada, pero no compacta.

La sucesion de vectores de la base canónica $e_n = (0, \ldots, 0, 1, 0, \ldots)$ satisface $||e_n|| = 1$ y $||e_n - e_m|| = \sqrt{2}$ para $n \neq m$. Ninguna subsucesion puede ser de Cauchy, mucho menos convergente.

### Contraejemplo 2 — Completo no implica compacto

$\mathbb{R}$ con la métrica usual es completo pero no compacto (no es totalmente acotado).

### Contraejemplo 3 — Totalmente acotado no implica compacto

$(0, 1)$ con la métrica usual es totalmente acotado pero no completo, luego no compacto.

## Errores comunes

1. **Aplicar Heine-Borel fuera de $\mathbb{R}^n$:** "Cerrado + acotado = compacto" solo en dimension finita.

2. **Confundir acotado con totalmente acotado:** Son equivalentes en $\mathbb{R}^n$ pero no en general.

3. **Olvidar verificar que el límite está EN el conjunto:** En compacidad secuencial, el límite debe estar en $K$, no solo "cerca".

4. **Suponer que subcobertura numerable es suficiente:** En general se necesita subcobertura finita; Lindelof es mas debil.

## Resumen operativo

| Propiedad | Compacto implica | Reciproco |
|---|---|---|
| Cerrado | Siempre | No |
| Acotado | Siempre | No |
| Totalmente acotado | Siempre | No |
| Completo | Siempre | No |
| Cerrado + acotado | En $\mathbb{R}^n$ equivale | Solo en dimension finita |

**Equivalencias en metricos:**

$$
\text{Compacto} \iff \text{Secuencialmente compacto} \iff \text{Completo} + \text{Totalmente acotado}
$$

## Ejercicios

### Ejercicio 1

Demuestre que todo subconjunto finito de un espacio metrico es compacto.

### Ejercicio 2

Demuestre que la union finita de compactos es compacta.

### Ejercicio 3

Sea $K$ compacto y $(x_n)$ sucesion en $K$ con $x_n \neq x_m$ para $n \neq m$. Demuestre que existe al menos un punto de acumulacion de $\{x_n : n \in \mathbb{N}\}$.

### Ejercicio 4

Demuestre que si $K$ es compacto y $f\colon K \to Y$ es continua e inyectiva, entonces $f^{-1}\colon f(K) \to K$ es continua.

### Ejercicio 5

En $\mathbb{R}$ con la métrica usual, demuestre que $[a, b]$ es compacto directamente por cobertura de abiertos.

### Ejercicio 6

Demuestre que un espacio metrico discreto infinito no es compacto.

### Ejercicio 7

Sea $K$ compacto y $F_1 \supseteq F_2 \supseteq \cdots$ cadena de cerrados no vacios. Demuestre que $\bigcap_{n=1}^\infty F_n \neq \emptyset$.

### Ejercicio 8

Demuestre que la interseccion arbitraria de compactos es compacta.

### Ejercicio 9

En $\ell^2$, demuestre que la sucesion $x_n = (1/n, 0, 0, \ldots)$ converge a $0$, pero el conjunto $\{x_n : n \in \mathbb{N}\} \cup \{0\}$ es compacto.

### Ejercicio 10

Sea $f\colon K \to K$ continua con $K$ compacto. Demuestre que existe $x \in K$ con $f(x) = x$ o proporcione un contraejemplo.

### Ejercicio 11

Demuestre que toda funcion continua en un compacto es uniformemente continua (Heine-Cantor).

### Ejercicio 12

Sea $K$ compacto y $f\colon K \to \mathbb{R}$ continua con $f(x) > 0$ para todo $x \in K$. Demuestre que existe $\delta > 0$ tal que $f(x) \geq \delta$ para todo $x \in K$.

### Ejercicio 13

Sean $K_1, K_2$ compactos en espacio metrico. Demuestre que $K_1 \times K_2$ con la métrica producto es compacto.

### Ejercicio 14

Demuestre que todo compacto metrico es separable.

### Ejercicio 15

Sea $f\colon X \to Y$ continua y biyectiva con $X$ compacto e $Y$ Hausdorff (metrico). Demuestre que $f$ es homeomorfismo.

## Soluciones

### Solucion 1

Sea $K = \{x_1, \ldots, x_n\}$. Toda cobertura abierta $\{U_i\}_{i \in I}$ satisface $x_j \in U_{i_j}$ para algun $i_j$. Entonces $\{U_{i_1}, \ldots, U_{i_n}\}$ es subcobertura finita.

### Solucion 2

Sean $K_1, \ldots, K_n$ compactos. Si $\{U_i\}_{i \in I}$ es cobertura abierta de $\bigcup_j K_j$, para cada $j$ existe subcobertura finita $\{U_{i^{(j)}_1}, \ldots, U_{i^{(j)}_{m_j}}\}$ de $K_j$. La union de todas estas subcoberturas es subcobertura finita de la union.

### Solucion 3

Por compacidad secuencial, $(x_n)$ tiene subsucesion convergente $(x_{n_k}) \to x$ con $x \in K$. Como $x_{n_k} \neq x_{n_l}$ para $k \neq l$, el punto $x$ es de acumulacion del conjunto.

### Solucion 4

Sea $V$ abierto en $K$. Debemos mostrar que $(f^{-1})^{-1}(V) = f(V)$ es abierto en $f(K)$.

Como $f$ es inyectiva, $f(K \setminus V) = f(K) \setminus f(V)$. El conjunto $K \setminus V$ es cerrado en $K$, luego compacto. Por continuidad de $f$, $f(K \setminus V)$ es compacto. En espacios metricos, compacto implica cerrado, asi $f(K \setminus V)$ es cerrado en $f(K)$. Entonces $f(V) = f(K) \setminus f(K \setminus V)$ es abierto.

### Solucion 5

Sea $\{U_i\}_{i \in I}$ cobertura abierta de $[a, b]$. Definimos:

$$
S = \{x \in [a, b] : [a, x] \text{ tiene subcobertura finita}\}.
$$

- $a \in S$ pues $a \in U_{i_0}$ para algun $i_0$, y $\{U_{i_0}\}$ cubre $\{a\}$.

- Si $x \in S$ y $x < b$, existe $\varepsilon > 0$ con $[x, x + \varepsilon) \subseteq U_j$ para algun $j$. Entonces $[a, x + \varepsilon/2]$ tiene subcobertura finita.

Por completitud, $S$ tiene supremo $s \leq b$. Si $s < b$, llegamos a contradiccion. Luego $s = b$, y $b \in S$.

### Solucion 6

El conjunto $\{x\}$ es abierto para cada $x$. La cobertura $\{ \{x\} : x \in X \}$ no tiene subcobertura finita si $X$ es infinito.

### Solucion 7

Si $\bigcap F_n = \emptyset$, entonces $\{X \setminus F_n\}$ es cobertura abierta de $K$. Por compacidad, existe subcobertura finita $K \subseteq \bigcup_{j=1}^m (X \setminus F_{n_j})$. Como $F_{n+1} \subseteq F_n$, si $N = \max\{n_j\}$, entonces $F_N = \emptyset$, contradiccion.

### Solucion 8

La interseccion de cerrados es cerrada. Como cada compacto esta contenido en uno de ellos, la interseccion es subconjunto de compacto, luego acotada y totalmente acotada. Como cada compacto es completo y la interseccion es cerrada en completo, es completa.

### Solucion 9

$||x_n|| = 1/n \to 0$. El conjunto $\{x_n\} \cup \{0\}$ es secuencialemente compacto: toda sucesion en el tiene subsucesion que converge a $0$ o es eventualmente constante.

### Solucion 10

Contraejemplo: $K = [0, 1]$, $f(x) = x/2$. Entonces $f([0,1]) = [0, 1/2] \subsetneq [0, 1]$, asi $f$ no tiene punto fijo.

Si añadimos $f$ contractiva: $f(x) = x/2 + 1/4$, entonces $f(1/2) = 1/2$.

El teorema de punto fijo requiere hipotesis adicionales como contractividad.

### Solucion 11

Ver teorema de Heine-Cantor en continuidad uniforme.

### Solucion 12

Por Weierstrass, $f$ alcanza minimo $m = f(x_0) > 0$. Tomamos $\delta = m/2 > 0$.

Alternativamente: $\{x : f(x) > 0\} = K$, entonces $\{f^{-1}((1/n, \infty))\}_n$ es cobertura abierta. Existe subcobertura finita, sea $N = \max\{n_i\}$, entonces $f(x) > 1/N$ para todo $x \in K$.

### Solucion 13

Por induccion, basta demostrar para $n = 2$. Usamos que el producto de compactos es compacto (Tychonoff para dos factores): toda sucesion $(x_n, y_n)$ en $K_1 \times K_2$ tiene subsucesion donde cada coordenada converge.

### Solucion 14

Para cada $n$, existen $x_1^{(n)}, \ldots, x_{k_n}^{(n)}$ con $K \subseteq \bigcup_{j=1}^{k_n} B(x_j^{(n)}, 1/n)$. El conjunto $D = \bigcup_{n \in \mathbb{N}} \{x_1^{(n)}, \ldots, x_{k_n}^{(n)}\}$ es numerable y denso en $K$.

### Solucion 15

$f$ es biyectiva y continua. Falta mostrar que $f^{-1}$ es continua.

Por el ejercicio 4, $f$ manda abiertos a abiertos (en la imagen). Equivalentemente, $f^{-1}$ es continua.