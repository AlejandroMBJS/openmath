---
title: Integral de Riemann
description: Construcción rigurosa de la integral de Riemann mediante particiones, sumas de Darboux y el criterio de Riemann, con ejemplos trabajados y demostraciones completas.
---

# Integral de Riemann

## Motivación e intuición

El problema de calcular el «área bajo una curva» es uno de los más antiguos del análisis. La integral de Riemann resuelve este problema para una clase amplia de funciones acotadas, partiendo de una idea natural: dividir el intervalo en trozos, aproximar el área con rectángulos, y tomar un límite cuando los trozos se hacen cada vez más finos.

Lo notable es que existen **dos familias de rectángulos** — los que se ajustan «por arriba» (sumas superiores) y los que se ajustan «por abajo» (sumas inferiores) — y la función es integrable exactamente cuando ambas familias convergen al mismo número.

## Prerrequisitos

- Supremo e ínfimo (tema **Principio del supremo**).
- Funciones acotadas.
- Propiedades de los números reales (completitud).
- Noción de límite y convergencia.

## Definiciones formales

### Partición

Una **partición** del intervalo $[a,b]$ es un conjunto finito

$$
P = \{x_0, x_1, \ldots, x_n\}
$$

con $a = x_0 < x_1 < \cdots < x_n = b$. Cada $[x_{i-1}, x_i]$ es un **subintervalo** de $P$, y $\Delta x_i = x_i - x_{i-1}$ es su longitud.

### Refinamiento

Una partición $Q$ es un **refinamiento** de $P$ si $P \subseteq Q$ (es decir, $Q$ contiene todos los puntos de $P$ y posiblemente más).

### Sumas de Darboux

Sea $f\colon [a,b] \to \mathbb{R}$ acotada y $P = \{x_0, \ldots, x_n\}$ una partición de $[a,b]$. Definimos:

$$
m_i = \inf\{f(x) : x \in [x_{i-1}, x_i]\}, \qquad M_i = \sup\{f(x) : x \in [x_{i-1}, x_i]\}.
$$

La **suma inferior de Darboux** es

$$
L(f, P) = \sum_{i=1}^{n} m_i \,\Delta x_i,
$$

y la **suma superior de Darboux** es

$$
U(f, P) = \sum_{i=1}^{n} M_i \,\Delta x_i.
$$

### Integral inferior e integral superior

$$
\underline{\int_a^b} f = \sup_P L(f, P), \qquad \overline{\int_a^b} f = \inf_P U(f, P),
$$

donde el supremo y el ínfimo se toman sobre **todas** las particiones de $[a,b]$.

### Función Riemann integrable

La función $f\colon [a,b] \to \mathbb{R}$ acotada es **Riemann integrable** (escribimos $f \in \mathcal{R}[a,b]$) si

$$
\underline{\int_a^b} f = \overline{\int_a^b} f.
$$

En ese caso, el valor común se denota $\int_a^b f$ (o $\int_a^b f(x)\,dx$).

### Norma de una partición

La **norma** (o **mesh**) de $P$ es

$$
\|P\| = \max_{1 \leq i \leq n} \Delta x_i.
$$

### Sumas de Riemann

Dada una partición $P$ y una elección de **puntos de evaluación** $t_i \in [x_{i-1}, x_i]$, la **suma de Riemann** es

$$
S(f, P, \{t_i\}) = \sum_{i=1}^{n} f(t_i)\,\Delta x_i.
$$

## Interpretación en lenguaje natural

- La **suma inferior** $L(f,P)$ es el área total de los rectángulos más pequeños que caben debajo de la gráfica en cada subintervalo.
- La **suma superior** $U(f,P)$ es el área total de los rectángulos más grandes que contienen la gráfica en cada subintervalo.
- Si podemos hacer que ambas áreas coincidan (en el límite), la función es integrable y el valor común es la integral.
- Las **sumas de Riemann** son un compromiso: elegimos un punto cualquiera en cada subintervalo. Si la función es integrable, todas las sumas de Riemann convergen al mismo valor cuando la partición se refina.

## Ejemplos básicos

### Ejemplo 1 — Función constante

Sea $f(x) = c$ en $[a,b]$. Para cualquier partición $P$, $m_i = M_i = c$. Luego:

$$
L(f,P) = U(f,P) = c\sum_{i=1}^n \Delta x_i = c(b-a).
$$

Entonces $\int_a^b c\,dx = c(b-a)$.

### Ejemplo 2 — Función identidad en $[0,1]$

Sea $f(x) = x$ y la partición equiespaciada $P_n = \{0, 1/n, 2/n, \ldots, 1\}$. En $[x_{i-1}, x_i] = [(i-1)/n, i/n]$:

$$
m_i = \frac{i-1}{n}, \quad M_i = \frac{i}{n}, \quad \Delta x_i = \frac{1}{n}.
$$

$$
L(f, P_n) = \frac{1}{n^2}\sum_{i=1}^n (i-1) = \frac{n(n-1)}{2n^2} = \frac{n-1}{2n}, \qquad U(f, P_n) = \frac{1}{n^2}\sum_{i=1}^n i = \frac{n+1}{2n}.
$$

Cuando $n \to \infty$, ambas tienden a $1/2$. Luego $\int_0^1 x\,dx = 1/2$.

### Ejemplo 3 — Función escalón

Sea $f\colon [0,2] \to \mathbb{R}$ con $f(x) = 1$ si $x \in [0,1)$ y $f(x) = 2$ si $x \in [1,2]$. Para cualquier partición $P$ que contenga el punto $1$, podemos separar las sumas en $[0,1]$ y $[1,2]$. Las sumas inferior y superior coinciden en cada trozo (al refinar), dando $\int_0^2 f = 1 \cdot 1 + 2 \cdot 1 = 3$.

## Ejemplos finos y contraejemplos

### Ejemplo 4 — Función de Dirichlet (no integrable)

Sea $f\colon [0,1] \to \mathbb{R}$ definida por $f(x) = 1$ si $x \in \mathbb{Q}$ y $f(x) = 0$ si $x \notin \mathbb{Q}$.

En cualquier subintervalo $[x_{i-1}, x_i]$ hay racionales e irracionales, así que $m_i = 0$ y $M_i = 1$ para todo $i$. Luego:

$$
L(f, P) = 0, \qquad U(f, P) = 1
$$

para **toda** partición $P$. Por tanto $\underline{\int} f = 0 \neq 1 = \overline{\int} f$, y $f$ no es Riemann integrable.

### Ejemplo 5 — Función con una discontinuidad

Sea $f\colon [0,1] \to \mathbb{R}$ con $f(x) = 0$ para $x \neq 1/2$ y $f(1/2) = 1$. Para cualquier partición $P$, la suma inferior es $L(f,P) = 0$. Para la suma superior, sea $[x_{j-1}, x_j]$ el subintervalo que contiene a $1/2$. Entonces $M_j = 1$ y $M_i = 0$ para $i \neq j$. Así:

$$
U(f,P) = 1 \cdot \Delta x_j \leq \|P\|.
$$

Tomando particiones con $\|P\| \to 0$, obtenemos $\overline{\int} f = 0$. Luego $\int_0^1 f = 0$.

Una función con un número finito de discontinuidades es integrable.

### Ejemplo 6 — $f(x) = x^2$ en $[0,1]$

Con la partición equiespaciada $P_n$:

$$
U(f, P_n) = \frac{1}{n^3}\sum_{i=1}^n i^2 = \frac{(n+1)(2n+1)}{6n^2} \to \frac{1}{3}.
$$

$$
L(f, P_n) = \frac{1}{n^3}\sum_{i=0}^{n-1} i^2 = \frac{(n-1)(2n-1)}{6n^2} \to \frac{1}{3}.
$$

Luego $\int_0^1 x^2\,dx = 1/3$.

## Teoremas y demostraciones

### Lema 1 — Desigualdad fundamental

Para toda función acotada $f$ en $[a,b]$ y toda partición $P$:

$$
L(f, P) \leq U(f, P).
$$

*Demostración.* $m_i \leq M_i$ para todo $i$, luego $m_i\,\Delta x_i \leq M_i\,\Delta x_i$ y sumando se obtiene la desigualdad. $\qquad \blacksquare$

### Lema 2 — Refinamiento mejora las sumas

Si $Q$ es un refinamiento de $P$, entonces

$$
L(f, P) \leq L(f, Q) \qquad \text{y} \qquad U(f, Q) \leq U(f, P).
$$

*Demostración.* Basta probarlo cuando $Q$ añade un solo punto $c$ a $P$. Supongamos que $c \in (x_{j-1}, x_j)$. Entonces $Q$ reemplaza el subintervalo $[x_{j-1}, x_j]$ por $[x_{j-1}, c]$ y $[c, x_j]$.

Para la suma inferior, sean $m' = \inf_{[x_{j-1},c]} f$ y $m'' = \inf_{[c,x_j]} f$. Como $[x_{j-1},c] \subseteq [x_{j-1}, x_j]$ y $[c, x_j] \subseteq [x_{j-1}, x_j]$, tenemos $m' \geq m_j$ y $m'' \geq m_j$. Luego:

$$
m'(c - x_{j-1}) + m''(x_j - c) \geq m_j(c - x_{j-1}) + m_j(x_j - c) = m_j \Delta x_j.
$$

Los demás términos no cambian, así que $L(f, Q) \geq L(f, P)$. El argumento para $U$ es análogo (con $\leq$). $\qquad \blacksquare$

### Lema 3 — Toda suma inferior es menor o igual que toda suma superior

Para cualesquiera particiones $P$ y $Q$:

$$
L(f, P) \leq U(f, Q).
$$

*Demostración.* Sea $R = P \cup Q$ (refinamiento común). Por el Lema 2:

$$
L(f, P) \leq L(f, R) \leq U(f, R) \leq U(f, Q). \qquad \blacksquare
$$

### Corolario — Integral inferior $\leq$ integral superior

$$
\underline{\int_a^b} f \leq \overline{\int_a^b} f.
$$

*Demostración.* Para cada partición $Q$, $L(f,P) \leq U(f,Q)$ para toda $P$. Tomando supremo en $P$: $\underline{\int} f \leq U(f,Q)$. Tomando ínfimo en $Q$: $\underline{\int} f \leq \overline{\int} f$. $\qquad \blacksquare$

### Teorema 1 — Criterio de Riemann

Sea $f\colon [a,b] \to \mathbb{R}$ acotada. Entonces $f \in \mathcal{R}[a,b]$ si y solo si para todo $\varepsilon > 0$ existe una partición $P$ tal que

$$
U(f, P) - L(f, P) < \varepsilon.
$$

*Demostración.*

$(\Rightarrow)$ Si $f$ es integrable, entonces $\underline{\int} f = \overline{\int} f = I$. Dado $\varepsilon > 0$, por definición de supremo e ínfimo existen particiones $P_1, P_2$ tales que

$$
L(f, P_1) > I - \varepsilon/2, \qquad U(f, P_2) < I + \varepsilon/2.
$$

Sea $P = P_1 \cup P_2$. Por el Lema 2:

$$
L(f, P) \geq L(f, P_1) > I - \varepsilon/2, \qquad U(f, P) \leq U(f, P_2) < I + \varepsilon/2.
$$

Entonces $U(f, P) - L(f, P) < \varepsilon$.

$(\Leftarrow)$ Si para todo $\varepsilon > 0$ existe $P$ con $U(f,P) - L(f,P) < \varepsilon$, entonces:

$$
0 \leq \overline{\int} f - \underline{\int} f \leq U(f,P) - L(f,P) < \varepsilon.
$$

Como $\varepsilon$ es arbitrario, $\overline{\int} f = \underline{\int} f$. $\qquad \blacksquare$

### Teorema 2 — Toda función monótona es integrable

Si $f\colon [a,b] \to \mathbb{R}$ es monótona, entonces $f \in \mathcal{R}[a,b]$.

*Demostración.* Supongamos $f$ creciente (el caso decreciente es análogo). Entonces $f$ está acotada: $f(a) \leq f(x) \leq f(b)$.

Tomemos la partición equiespaciada $P_n$ con $\Delta x_i = (b-a)/n$. Como $f$ es creciente, $m_i = f(x_{i-1})$ y $M_i = f(x_i)$. Entonces:

$$
U(f, P_n) - L(f, P_n) = \sum_{i=1}^n (f(x_i) - f(x_{i-1})) \cdot \frac{b-a}{n} = \frac{b-a}{n}[f(b) - f(a)].
$$

Esto es una suma telescópica. Dado $\varepsilon > 0$, elegimos $n$ tal que $\frac{(b-a)(f(b)-f(a))}{n} < \varepsilon$. Por el criterio de Riemann, $f$ es integrable. $\qquad \blacksquare$

### Teorema 3 — Toda función continua es integrable

Si $f\colon [a,b] \to \mathbb{R}$ es continua, entonces $f \in \mathcal{R}[a,b]$.

*Demostración.* Como $[a,b]$ es compacto y $f$ es continua, $f$ es **uniformemente continua** (teorema de Heine). Dado $\varepsilon > 0$, existe $\delta > 0$ tal que $|x-y| < \delta \implies |f(x)-f(y)| < \frac{\varepsilon}{b-a}$.

Tomemos cualquier partición $P$ con $\|P\| < \delta$. En cada subintervalo $[x_{i-1}, x_i]$ de longitud menor que $\delta$, por el teorema de Weierstrass, $f$ alcanza su máximo $M_i$ y su mínimo $m_i$, y $M_i - m_i < \frac{\varepsilon}{b-a}$. Entonces:

$$
U(f,P) - L(f,P) = \sum_{i=1}^n (M_i - m_i)\Delta x_i < \frac{\varepsilon}{b-a}\sum_{i=1}^n \Delta x_i = \varepsilon.
$$

Por el criterio de Riemann, $f$ es integrable. $\qquad \blacksquare$

### Teorema 4 — Equivalencia con sumas de Riemann

Sea $f \in \mathcal{R}[a,b]$ con integral $I$. Entonces para todo $\varepsilon > 0$ existe $\delta > 0$ tal que si $\|P\| < \delta$, entonces

$$
|S(f, P, \{t_i\}) - I| < \varepsilon
$$

para **cualquier** elección de puntos $t_i \in [x_{i-1}, x_i]$.

*Demostración.* Como $f$ es integrable, dado $\varepsilon > 0$ existe una partición $Q$ con $U(f,Q) - L(f,Q) < \varepsilon/2$, y

$$
L(f,Q) \leq I \leq U(f,Q).
$$

Sea $Q = \{y_0, \ldots, y_m\}$ y sea $K = \sup_{[a,b]} |f|$ (que es finito porque $f$ es acotada). Elegimos $\delta > 0$ tal que $2mK\delta < \varepsilon/2$.

Sea $P$ cualquier partición con $\|P\| < \delta$ y $\{t_i\}$ cualquier elección de puntos. Consideremos $R = P \cup Q$. Los subintervalos de $P$ que no contienen ningún punto de $Q$ en su interior contribuyen con sumas acotadas entre $L(f,Q)$ y $U(f,Q)$ (al refinar). Los subintervalos que sí contienen puntos de $Q$ son a lo sumo $m$ (un punto de $Q$ puede caer en un subintervalo de $P$), y cada uno contribuye con un error acotado por $2K\|P\| < 2K\delta$.

Combinando:

$$
L(f,Q) - 2mK\delta \leq S(f,P,\{t_i\}) \leq U(f,Q) + 2mK\delta.
$$

Luego $|S(f,P,\{t_i\}) - I| \leq U(f,Q) - L(f,Q) + 2mK\delta < \varepsilon/2 + \varepsilon/2 = \varepsilon$. $\qquad \blacksquare$

## Errores comunes

1. **Creer que toda función acotada es integrable**: La función de Dirichlet (Ejemplo 4) es acotada pero no integrable.

2. **Confundir integral superior con suma superior**: La integral superior es el ínfimo sobre **todas** las particiones, no una suma particular.

3. **Suponer que las sumas de Riemann con puntos elegidos definen la integral**: La definición de Darboux (sumas superior e inferior) es más robusta. Las sumas de Riemann se usan como herramienta equivalente (Teorema 4), pero la definición primaria usa sup e inf.

4. **Olvidar que $f$ debe ser acotada**: La definición de integral de Riemann requiere que $f$ sea acotada en $[a,b]$. Para funciones no acotadas se necesitan integrales impropias.

5. **Confundir el criterio de Riemann con la existencia de una partición fija**: El criterio dice «para todo $\varepsilon > 0$ existe una partición $P$...». No basta una sola partición; debe funcionar para todo $\varepsilon$.

## Resumen conceptual

La integral de Riemann se construye en cuatro etapas:

1. **Partición**: Dividimos $[a,b]$ en subintervalos.
2. **Aproximación**: Construimos sumas inferiores y superiores.
3. **Paso al límite**: Tomamos supremo de inferiores e ínfimo de superiores.
4. **Integrabilidad**: La función es integrable si ambos coinciden.

Las clases principales de funciones integrables son las **continuas** y las **monótonas**. El criterio de Riemann ($U - L < \varepsilon$) es la herramienta operativa para demostrar integrabilidad.

## Ejemplos guiados finales

### Ejemplo guiado 1 — $f(x) = x^3$ en $[0,1]$

Tomamos la partición equiespaciada $P_n$ con $x_i = i/n$. Como $f$ es creciente:

$$
L(f, P_n) = \frac{1}{n}\sum_{i=0}^{n-1}\left(\frac{i}{n}\right)^3 = \frac{1}{n^4}\sum_{i=0}^{n-1} i^3.
$$

Usando $\sum_{i=0}^{n-1} i^3 = \left[\frac{(n-1)n}{2}\right]^2 = \frac{n^2(n-1)^2}{4}$:

$$
L(f, P_n) = \frac{(n-1)^2}{4n^2} \to \frac{1}{4}.
$$

Análogamente, $U(f, P_n) = \frac{1}{n^4}\sum_{i=1}^n i^3 = \frac{(n+1)^2}{4n^2} \to \frac{1}{4}$.

Como $U - L = \frac{(n+1)^2 - (n-1)^2}{4n^2} = \frac{4n}{4n^2} = \frac{1}{n} \to 0$, por el criterio de Riemann $f$ es integrable y $\int_0^1 x^3\,dx = 1/4$.

### Ejemplo guiado 2 — Función con un número finito de discontinuidades

Sea $f\colon [0,3] \to \mathbb{R}$ definida por

$$
f(x) = \begin{cases} 1 & \text{si } x \in [0,1), \\ 3 & \text{si } x = 1, \\ 2 & \text{si } x \in (1,3]. \end{cases}
$$

Afirmamos que $f \in \mathcal{R}[0,3]$ con $\int_0^3 f = 1 \cdot 1 + 2 \cdot 2 = 5$.

Dado $\varepsilon > 0$, consideramos una partición que «aísla» la discontinuidad. Sea $\delta = \varepsilon/4$ y tomemos una partición $P$ que incluya los puntos $1-\delta$ y $1+\delta$. En $[0, 1-\delta]$, $f = 1$, así que $M_i = m_i = 1$. En $[1+\delta, 3]$, $f = 2$, así que $M_i = m_i = 2$. En los subintervalos que tocan $x = 1$:

$$
U - L \text{ (en esos subintervalos)} \leq (3-1) \cdot 2\delta = 4\delta = \varepsilon.
$$

Por el criterio de Riemann, $f$ es integrable.

### Ejemplo guiado 3 — Verificación directa con sumas de Riemann

Calculamos $\int_1^2 \frac{1}{x}\,dx$ usando sumas de Riemann con la partición geométrica.

Sea $r = 2^{1/n}$ y $x_i = r^i$ para $i = 0, \ldots, n$. Entonces $x_0 = 1$, $x_n = 2$, y $\Delta x_i = r^i(r-1)$.

Elegimos $t_i = x_{i-1} = r^{i-1}$:

$$
S_n = \sum_{i=1}^n \frac{1}{r^{i-1}} \cdot r^i(r-1) = \sum_{i=1}^n r(r-1) = n \cdot r(r-1).
$$

Como $r = 2^{1/n}$, cuando $n \to \infty$: $r \to 1$ y $n(r-1) = n(2^{1/n}-1) \to \ln 2$ (esto se puede demostrar con el límite $\lim_{h \to 0}(2^h - 1)/h = \ln 2$). Luego:

$$
S_n = r \cdot n(r-1) \to 1 \cdot \ln 2 = \ln 2.
$$

Por tanto $\int_1^2 \frac{1}{x}\,dx = \ln 2$.

### Ejemplo guiado 4 — No integrabilidad de la función de Thomae modificada (argumento de Darboux)

Sea $g\colon [0,1] \to \mathbb{R}$ definida por $g(x) = 1$ si $x \in \mathbb{Q}$ y $g(x) = -1$ si $x \notin \mathbb{Q}$.

Para cualquier partición $P$: $m_i = -1$ y $M_i = 1$ en todo subintervalo (por densidad de racionales e irracionales). Entonces:

$$
U(g, P) = \sum M_i \Delta x_i = 1, \qquad L(g, P) = \sum m_i \Delta x_i = -1.
$$

Luego $\overline{\int} g = 1 \neq -1 = \underline{\int} g$, y $g$ no es integrable.

### Ejemplo guiado 5 — La función de Thomae es integrable

Sea $T\colon [0,1] \to \mathbb{R}$ definida por $T(x) = 1/q$ si $x = p/q$ con $\gcd(p,q) = 1$ y $q \geq 1$, y $T(x) = 0$ si $x \notin \mathbb{Q}$.

**Afirmación:** $T \in \mathcal{R}[0,1]$ con $\int_0^1 T = 0$.

*Argumento.* Como $T \geq 0$, la suma inferior satisface $L(T,P) \geq 0$ y como $T(x) = 0$ para irracionales (densos en todo intervalo), $m_i = 0$ para todo $i$. Luego $\underline{\int} T = 0$.

Para la suma superior, dado $\varepsilon > 0$, solo hay un número finito de racionales $p/q$ en $[0,1]$ con $T(p/q) = 1/q \geq \varepsilon/2$. Sea $N$ este número finito. Aislamos cada uno en un subintervalo de longitud menor que $\varepsilon/(2N)$. En los demás subintervalos, $M_i < \varepsilon/2$. Entonces:

$$
U(T, P) \leq N \cdot 1 \cdot \frac{\varepsilon}{2N} + \frac{\varepsilon}{2}(b-a) = \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.
$$

Como $\varepsilon$ es arbitrario, $\overline{\int} T = 0$. Luego $T$ es integrable con integral $0$.

Este ejemplo muestra que una función puede ser discontinua en un conjunto denso y aun así ser Riemann integrable.
