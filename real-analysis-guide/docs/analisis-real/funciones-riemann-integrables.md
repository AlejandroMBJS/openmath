---
title: Funciones Riemann integrables
description: Clases de funciones Riemann integrables, álgebra de funciones integrables, propiedades de la integral y el criterio de Lebesgue en la recta real.
---

# Funciones Riemann integrables

## Motivación e intuición

En el tema anterior construimos la integral de Riemann y demostramos que las funciones continuas y las monótonas son integrables. Pero la clase $\mathcal{R}[a,b]$ es mucho más rica: incluye funciones con infinitas discontinuidades (como la función de Thomae) y se cierra bajo sumas, productos, valores absolutos y composiciones adecuadas.

Este tema responde a dos preguntas centrales:
1. **¿Qué operaciones preservan la integrabilidad?** — el álgebra de funciones integrables.
2. **¿Cuántas discontinuidades puede tener una función integrable?** — el criterio de Lebesgue, que da la respuesta definitiva para $\mathbb{R}$.

## Prerrequisitos

- Integral de Riemann: particiones, sumas de Darboux, criterio de Riemann (tema **Integral de Riemann**).
- Continuidad y continuidad uniforme.
- Conjuntos de medida cero (se definen aquí).

## Definiciones formales

### Oscilación en un conjunto

Sea $f\colon [a,b] \to \mathbb{R}$ acotada y $S \subseteq [a,b]$. La **oscilación** de $f$ en $S$ es

$$
\omega(f, S) = \sup_S f - \inf_S f.
$$

Para un subintervalo $[x_{i-1}, x_i]$ de una partición, $\omega(f, [x_{i-1}, x_i]) = M_i - m_i$.

### Oscilación en un punto

La **oscilación** de $f$ en el punto $x$ es

$$
\omega_f(x) = \lim_{\delta \to 0^+} \omega(f, (x-\delta, x+\delta) \cap [a,b]) = \inf_{\delta > 0} \omega(f, (x-\delta, x+\delta) \cap [a,b]).
$$

$f$ es continua en $x$ si y solo si $\omega_f(x) = 0$.

### Conjunto de medida cero (Lebesgue)

Un conjunto $E \subseteq \mathbb{R}$ tiene **medida (de Lebesgue) cero** si para todo $\varepsilon > 0$ existe una colección numerable de intervalos abiertos $(a_k, b_k)$ tales que

$$
E \subseteq \bigcup_{k=1}^{\infty} (a_k, b_k) \qquad \text{y} \qquad \sum_{k=1}^{\infty} (b_k - a_k) < \varepsilon.
$$

### Conjunto de discontinuidades

Para $f\colon [a,b] \to \mathbb{R}$ acotada, denotamos

$$
D_f = \{x \in [a,b] : f \text{ no es continua en } x\} = \{x \in [a,b] : \omega_f(x) > 0\}.
$$

## Interpretación en lenguaje natural

- La **oscilación** mide cuánto «salta» la función en una región. Si la oscilación en cada subintervalo se puede hacer arbitrariamente pequeña (al refinar la partición), la función es integrable.
- Un conjunto de **medida cero** es «tan pequeño» que se puede cubrir con intervalos de longitud total tan pequeña como se quiera. Los conjuntos finitos, los numerables (como $\mathbb{Q}$), y muchos conjuntos no numerables (como el conjunto de Cantor) tienen medida cero.
- El criterio de Lebesgue dice que una función acotada es Riemann integrable si y solo si sus discontinuidades forman un conjunto de medida cero: pueden ser muchas, pero deben ser «pocas» en el sentido de la medida.

## Ejemplos básicos

### Ejemplo 1 — Función continua a trozos

Sea $f\colon [0,2] \to \mathbb{R}$ con $f(x) = x$ en $[0,1]$ y $f(x) = 3-x$ en $(1,2]$. El conjunto de discontinuidades es $D_f = \{1\}$ (si $f(1) \neq 2$) o $D_f = \emptyset$ (si $f(1) = 2$). En ambos casos $D_f$ es finito, luego de medida cero, y $f \in \mathcal{R}[0,2]$.

### Ejemplo 2 — Función monótona

Toda función monótona en $[a,b]$ tiene a lo sumo un número numerable de discontinuidades (todas de salto). Un conjunto numerable tiene medida cero, así que toda función monótona es integrable. Esto confirma el resultado del tema anterior.

### Ejemplo 3 — Producto de funciones integrables

Si $f, g \in \mathcal{R}[a,b]$, entonces $fg \in \mathcal{R}[a,b]$. En particular, $f^2 \in \mathcal{R}[a,b]$ para toda $f$ integrable.

## Ejemplos finos y contraejemplos

### Ejemplo 4 — La función de Thomae es integrable

Recordamos que $T(x) = 1/q$ para $x = p/q$ irreducible y $T(x) = 0$ para $x$ irracional. El conjunto de discontinuidades es $D_T = \mathbb{Q} \cap [0,1]$, que es numerable y por tanto de medida cero. Por el criterio de Lebesgue, $T \in \mathcal{R}[0,1]$.

### Ejemplo 5 — Función de Dirichlet: no integrable

$D_f = [0,1]$ (discontinua en todo punto). El intervalo $[0,1]$ no tiene medida cero (no se puede cubrir con intervalos de longitud total menor que $1$). Por el criterio de Lebesgue, $f \notin \mathcal{R}[0,1]$.

### Ejemplo 6 — Composición puede perder integrabilidad

Sean $f(x) = x$ (integrable) y $g = $ función de Dirichlet. Entonces $g \circ f = g$, que no es integrable. La composición no preserva integrabilidad en general.

Sin embargo, si $f \in \mathcal{R}[a,b]$ y $\varphi$ es continua en el rango de $f$, entonces $\varphi \circ f \in \mathcal{R}[a,b]$.

### Ejemplo 7 — Conjunto de Cantor como conjunto de discontinuidades

Existe una función $f\colon [0,1] \to \mathbb{R}$ acotada cuyo conjunto de discontinuidades es exactamente el conjunto de Cantor $C$. Como $C$ es no numerable pero tiene medida cero, $f \in \mathcal{R}[0,1]$ por el criterio de Lebesgue.

Construcción: sea $f(x) = 0$ si $x \in C$ y $f(x) = 1$ si $x \notin C$. Entonces $f$ es discontinua en cada punto de $C$ (porque $C$ no contiene intervalos abiertos, así que cerca de cada punto de $C$ hay puntos fuera de $C$) y continua fuera de $C$ (porque el complemento de $C$ es abierto).

## Teoremas y demostraciones

### Teorema 1 — Álgebra de funciones integrables

Si $f, g \in \mathcal{R}[a,b]$ y $\alpha \in \mathbb{R}$, entonces:

1. $\alpha f \in \mathcal{R}[a,b]$.
2. $f + g \in \mathcal{R}[a,b]$.
3. $fg \in \mathcal{R}[a,b]$.
4. $|f| \in \mathcal{R}[a,b]$.
5. Si además $|g(x)| \geq c > 0$ para todo $x$, entonces $f/g \in \mathcal{R}[a,b]$.

*Demostración (ideas principales).*

**(1)** es inmediato: $\omega(\alpha f, S) = |\alpha|\,\omega(f, S)$.

**(2)** Usamos que $\omega(f+g, S) \leq \omega(f, S) + \omega(g, S)$. Dado $\varepsilon > 0$, existen particiones $P_1, P_2$ con $U(f,P_1) - L(f,P_1) < \varepsilon/2$ y $U(g,P_2) - L(g,P_2) < \varepsilon/2$. Sea $P = P_1 \cup P_2$:

$$
U(f+g, P) - L(f+g, P) \leq [U(f,P)-L(f,P)] + [U(g,P)-L(g,P)] < \varepsilon. \qquad \blacksquare
$$

**(3)** Primero probamos que $f^2 \in \mathcal{R}$ si $f \in \mathcal{R}$. Sea $K = \sup|f|$. Entonces:

$$
\omega(f^2, S) = \sup_S f^2 - \inf_S f^2 \leq (\sup_S |f| + \inf_S |f|) \cdot \omega(f, S) \leq 2K\,\omega(f, S).
$$

Luego $U(f^2, P) - L(f^2, P) \leq 2K[U(f,P) - L(f,P)]$, y el criterio de Riemann da $f^2 \in \mathcal{R}$.

Ahora usamos $fg = \frac{1}{2}[(f+g)^2 - f^2 - g^2]$.

**(4)** $\omega(|f|, S) \leq \omega(f, S)$ porque $||f(x)| - |f(y)|| \leq |f(x) - f(y)|$. El argumento sigue como en (2).

**(5)** Como $|g| \geq c > 0$, $1/g$ es acotada y $\omega(1/g, S) \leq \omega(g, S)/c^2$. Luego $1/g \in \mathcal{R}$, y $f/g = f \cdot (1/g) \in \mathcal{R}$ por (3). $\qquad \blacksquare$

### Teorema 2 — Propiedades de la integral

Sean $f, g \in \mathcal{R}[a,b]$.

**(a) Linealidad:** $\int_a^b (\alpha f + \beta g) = \alpha\int_a^b f + \beta\int_a^b g$.

**(b) Monotonía:** Si $f(x) \leq g(x)$ para todo $x \in [a,b]$, entonces $\int_a^b f \leq \int_a^b g$.

**(c) Valor absoluto:** $\left|\int_a^b f\right| \leq \int_a^b |f|$.

**(d) Aditividad en el dominio:** Si $a < c < b$, entonces

$$
\int_a^b f = \int_a^c f + \int_c^b f.
$$

*Demostración.*

**(a)** Para la suma, usamos que para cualquier partición $P$:

$$
L(f, P) + L(g, P) \leq L(f+g, P) \leq U(f+g, P) \leq U(f, P) + U(g, P).
$$

Tomando sup/inf sobre particiones y usando que las integrales de $f$ y $g$ existen, se obtiene la igualdad. Para el múltiplo escalar, si $\alpha \geq 0$: $L(\alpha f, P) = \alpha L(f,P)$ y $U(\alpha f, P) = \alpha U(f,P)$. Si $\alpha < 0$: $L(\alpha f, P) = \alpha U(f,P)$ y $U(\alpha f, P) = \alpha L(f,P)$.

**(b)** $f \leq g$ implica $L(f,P) \leq L(g,P)$ para toda $P$. Tomando supremo: $\int f \leq \int g$.

**(c)** Como $-|f| \leq f \leq |f|$, por (b): $-\int|f| \leq \int f \leq \int|f|$, es decir $|\int f| \leq \int|f|$.

**(d)** Sea $P$ una partición de $[a,b]$ que contenga el punto $c$. Entonces $P$ se descompone en $P_1$ (partición de $[a,c]$) y $P_2$ (partición de $[c,b]$) con

$$
L(f, P) = L(f, P_1) + L(f, P_2), \qquad U(f, P) = U(f, P_1) + U(f, P_2).
$$

Tomando supremo e ínfimo se obtiene la aditividad. $\qquad \blacksquare$

### Teorema 3 — Composición con función continua

Si $f \in \mathcal{R}[a,b]$ con $m \leq f(x) \leq M$ y $\varphi\colon [m, M] \to \mathbb{R}$ es continua, entonces $\varphi \circ f \in \mathcal{R}[a,b]$.

*Demostración.* Como $\varphi$ es continua en $[m,M]$ (compacto), es uniformemente continua. Dado $\varepsilon > 0$, existe $\delta > 0$ tal que $|s-t| < \delta \implies |\varphi(s) - \varphi(t)| < \varepsilon$.

Sea $K = \sup_{[m,M]} |\varphi|$. Como $f \in \mathcal{R}$, existe partición $P = \{x_0, \ldots, x_n\}$ con

$$
\sum_{i=1}^n \omega(f, [x_{i-1}, x_i])\,\Delta x_i < \delta\varepsilon.
$$

Dividimos los índices en dos grupos:
- $A = \{i : \omega(f, [x_{i-1}, x_i]) < \delta\}$: aquí $\omega(\varphi \circ f, [x_{i-1}, x_i]) < \varepsilon$.
- $B = \{i : \omega(f, [x_{i-1}, x_i]) \geq \delta\}$: aquí $\omega(\varphi \circ f, [x_{i-1}, x_i]) \leq 2K$.

Para los índices en $B$: $\sum_{i \in B} \Delta x_i \leq \frac{1}{\delta}\sum_{i \in B} \omega(f, [x_{i-1}, x_i])\Delta x_i < \varepsilon$.

Entonces:

$$
\sum_{i=1}^n \omega(\varphi \circ f, [x_{i-1}, x_i])\Delta x_i \leq \varepsilon\sum_{i \in A}\Delta x_i + 2K\sum_{i \in B}\Delta x_i < \varepsilon(b-a) + 2K\varepsilon.
$$

Como $\varepsilon$ es arbitrario, $\varphi \circ f \in \mathcal{R}$ por el criterio de Riemann. $\qquad \blacksquare$

### Teorema 4 — Criterio de Lebesgue (enunciado)

Sea $f\colon [a,b] \to \mathbb{R}$ acotada. Entonces $f \in \mathcal{R}[a,b]$ si y solo si el conjunto de discontinuidades $D_f$ tiene medida de Lebesgue cero.

*Demostración (esquema de la dirección $\Rightarrow$).*

Si $f$ es integrable, dado $\varepsilon > 0$, el criterio de Riemann proporciona una partición $P$ con $\sum \omega(f, I_i)\Delta x_i < \varepsilon^2$. Sea $D_\varepsilon = \{x : \omega_f(x) \geq \varepsilon\}$.

Para cada $x \in D_\varepsilon$, cualquier subintervalo $I_i$ que contenga a $x$ satisface $\omega(f, I_i) \geq \varepsilon$. Luego:

$$
\varepsilon \sum_{\{i : I_i \cap D_\varepsilon \neq \emptyset\}} \Delta x_i \leq \sum \omega(f, I_i)\Delta x_i < \varepsilon^2.
$$

Los subintervalos que intersectan $D_\varepsilon$ cubren a $D_\varepsilon$ y su longitud total es menor que $\varepsilon$. Como $D_f = \bigcup_{n=1}^\infty D_{1/n}$, y cada $D_{1/n}$ tiene medida cero, $D_f$ tiene medida cero (unión numerable de conjuntos de medida cero).

*Demostración (esquema de la dirección $\Leftarrow$).*

Si $D_f$ tiene medida cero, dado $\varepsilon > 0$, cubrimos $D_f$ con intervalos abiertos de longitud total menor que $\varepsilon$. En los puntos de continuidad, la oscilación es cero, así que podemos encontrar subintervalos pequeños con oscilación menor que $\varepsilon$. Combinando ambas contribuciones y usando la acotación de $f$, se construye una partición con $U - L < C\varepsilon$ para una constante $C$. $\qquad \blacksquare$

## Errores comunes

1. **Creer que la composición de integrables es integrable**: $g \circ f$ no es necesariamente integrable aunque $g$ y $f$ lo sean. Sí lo es si la función exterior es **continua** (Teorema 3).

2. **Confundir «medida cero» con «numerable»**: El conjunto de Cantor es no numerable pero tiene medida cero. «Medida cero» es una condición más débil que «numerable».

3. **Creer que $\int f = 0$ implica $f = 0$**: La función de Thomae tiene integral $0$ pero no es idénticamente $0$. Lo que sí es cierto: si $f \geq 0$, $f$ continua y $\int_a^b f = 0$, entonces $f \equiv 0$.

4. **Confundir integrabilidad con continuidad**: Una función puede ser integrable y discontinua en infinitos puntos (incluso en un conjunto denso).

5. **Olvidar la hipótesis de acotación en el criterio de Lebesgue**: El criterio se aplica a funciones acotadas. Una función no acotada no es Riemann integrable (aunque su conjunto de discontinuidades sea de medida cero).

## Resumen conceptual

La clase $\mathcal{R}[a,b]$ tiene una estructura algebraica rica:

- Es un **espacio vectorial**: cerrada bajo sumas y múltiplos escalares.
- Es un **álgebra**: cerrada bajo productos.
- Es cerrada bajo **valor absoluto** y **composición con funciones continuas**.

El **criterio de Lebesgue** es el teorema definitivo: $f$ acotada es integrable $\iff$ $D_f$ tiene medida cero. Esto unifica todos los resultados parciales (continuas, monótonas, funciones con un número finito de discontinuidades) bajo un solo principio.

La integral resultante satisface **linealidad, monotonía, aditividad en el dominio** y la **desigualdad del valor absoluto**, que son las propiedades operativas fundamentales.

## Ejemplos guiados finales

### Ejemplo guiado 1 — $|f|$ integrable no implica $f$ integrable

Sea $f(x) = 1$ si $x \in \mathbb{Q}$ y $f(x) = -1$ si $x \notin \mathbb{Q}$. Entonces $|f(x)| = 1$ para todo $x$, que es continua (constante) y por tanto integrable. Pero $f$ no es integrable (discontinua en todo punto, $D_f = [0,1]$ no tiene medida cero).

Esto muestra que $|f| \in \mathcal{R}$ **no** implica $f \in \mathcal{R}$. La implicación correcta es la contraria: $f \in \mathcal{R} \implies |f| \in \mathcal{R}$.

### Ejemplo guiado 2 — Verificación del criterio de Lebesgue para funciones monótonas

Sea $f\colon [a,b] \to \mathbb{R}$ monótona creciente. Queremos ver que $D_f$ es a lo sumo numerable.

En cada punto de discontinuidad $x$, el salto es $f(x^+) - f(x^-) > 0$. A cada punto de discontinuidad le asociamos un racional $r_x \in (f(x^-), f(x^+))$. Como $f$ es creciente, los intervalos $(f(x^-), f(x^+))$ son disjuntos para distintos puntos de discontinuidad, así que la función $x \mapsto r_x$ es inyectiva en $D_f$. Luego $D_f$ es a lo sumo numerable.

Como todo conjunto numerable tiene medida cero, por el criterio de Lebesgue $f \in \mathcal{R}[a,b]$.

### Ejemplo guiado 3 — Producto de funciones integrables: cálculo explícito

Sean $f(x) = x$ y $g(x) = |x|$ en $[-1, 1]$. Ambas son continuas (luego integrables). El producto es $h(x) = x|x|$, que explícitamente vale:

$$
h(x) = \begin{cases} -x^2 & \text{si } x < 0, \\ x^2 & \text{si } x \geq 0. \end{cases}
$$

$$
\int_{-1}^1 x|x|\,dx = \int_{-1}^0 (-x^2)\,dx + \int_0^1 x^2\,dx = -\frac{1}{3} + \frac{1}{3} = 0.
$$

### Ejemplo guiado 4 — Composición con función continua

Sea $f(x) = x$ en $[0,1]$ (integrable) y $\varphi(t) = e^t$ (continua). Entonces $\varphi \circ f = e^x \in \mathcal{R}[0,1]$ por el Teorema 3.

Calculamos directamente: usando sumas de Riemann con la partición equiespaciada y $t_i = x_i = i/n$:

$$
S_n = \sum_{i=1}^n e^{i/n} \cdot \frac{1}{n} = \frac{1}{n}\sum_{i=1}^n (e^{1/n})^i = \frac{1}{n} \cdot e^{1/n}\frac{e-1}{e^{1/n}-1} = \frac{e-1}{n(1-e^{-1/n})}.
$$

Como $n(1-e^{-1/n}) \to 1$ cuando $n \to \infty$, obtenemos $\int_0^1 e^x\,dx = e - 1$.

### Ejemplo guiado 5 — Conjuntos de medida cero: propiedades

Verificamos que la unión numerable de conjuntos de medida cero tiene medida cero.

Sean $E_1, E_2, \ldots$ conjuntos de medida cero. Dado $\varepsilon > 0$, para cada $k$, cubrimos $E_k$ con intervalos de longitud total menor que $\varepsilon/2^k$. La unión de todas estas cubiertas cubre $\bigcup E_k$ y tiene longitud total menor que

$$
\sum_{k=1}^\infty \frac{\varepsilon}{2^k} = \varepsilon.
$$

Luego $\bigcup_{k=1}^\infty E_k$ tiene medida cero.

**Consecuencia directa:** $\mathbb{Q}$ tiene medida cero (unión numerable de puntos, cada punto tiene medida cero). Esto da otra prueba de que la función de Thomae es integrable.
