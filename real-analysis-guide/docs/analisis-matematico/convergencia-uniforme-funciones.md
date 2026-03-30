---
title: Convergencia uniforme de funciones
description: Convergencia puntual vs uniforme, criterio de Cauchy, limite uniforme de continuas es continuo, integracion termino a termino.
---

# Convergencia uniforme de funciones

## Motivacion e intuicion

Cuando una sucesion de funciones $(f_n)$ converge a $f$, queremos saber si las propiedades de las $f_n$ pasan al limite $f$. Si cada $f_n$ es continua, ¿es $f$ continua? Si cada $f_n$ es integrable, ¿se puede integrar termino a termino?

La respuesta depende crucialmente de **como** converge la sucesion. La convergencia puntual es demasiado debil: el limite de funciones continuas puede ser discontinuo. La **convergencia uniforme** impone un control global que preserva continuidad e integracion.

::: tip Idea central
Convergencia uniforme: el "error" $|f_n(x) - f(x)|$ puede hacerse pequeno independientemente de $x$. Es una nocion mas fuerte que la convergencia puntual.
:::

## Prerrequisitos

- Convergencia de sucesiones en $\mathbb{R}$.
- Continuidad de funciones.
- Integracion de Riemann.
- Supremo e infimo de funciones.

## Definiciones formales

### Convergencia puntual

Sea $(f_n)\colon X \to \mathbb{R}$ una sucesion de funciones. Decimos que $(f_n)$ **converge puntualmente** a $f\colon X \to \mathbb{R}$ si para todo $x \in X$:

$$
\lim_{n \to \infty} f_n(x) = f(x).
$$

En cuantificadores:

$$
\forall x \in X\ \forall \varepsilon > 0\ \exists N \in \mathbb{N}\ \forall n \geq N : |f_n(x) - f(x)| < \varepsilon.
$$

Escribimos $f_n \to f$ puntualmente.

### Convergencia uniforme

Decimos que $(f_n)$ **converge uniformemente** a $f$ en $X$ si:

$$
\forall \varepsilon > 0\ \exists N \in \mathbb{N}\ \forall n \geq N\ \forall x \in X : |f_n(x) - f(x)| < \varepsilon.
$$

Escribimos $f_n \rightrightarrows f$ o $f_n \to f$ uniformemente en $X$.

### Norma del supremo

El **supremo** de $|f_n - f|$ sobre $X$:

$$
\|f_n - f\|_\infty = \sup_{x \in X} |f_n(x) - f(x)|.
$$

La convergencia uniforme es equivalente a:

$$
\lim_{n \to \infty} \|f_n - f\|_\infty = 0.
$$

### Criterio de Cauchy uniforme

La sucesion $(f_n)$ es **de Cauchy uniforme** si:

$$
\forall \varepsilon > 0\ \exists N \in \mathbb{N}\ \forall n, m \geq N\ \forall x \in X : |f_n(x) - f_m(x)| < \varepsilon.
$$

## Interpretacion en lenguaje natural

- **Puntual:** Para cada punto $x$, eventualmente $f_n(x)$ esta cerca de $f(x)$. El "eventualmente" depende del punto.

- **Uniforme:** Existe un $N$ que funciona para todos los puntos simultaneamente. El mismo $N$ controla el error en todo el dominio.

En terminos de norma:

$$
f_n \to f \text{ puntualmente} \iff \forall x : f_n(x) \to f(x).
$$

$$
f_n \rightrightarrows f \text{ uniformemente} \iff \|f_n - f\|_\infty \to 0.
$$

## Ejemplos fundamentales

### Ejemplo 1 — Convergencia puntual pero NO uniforme

Definimos $f_n\colon [0, 1] \to \mathbb{R}$ por:

$$
f_n(x) = x^n.
$$

Para cada $x \in [0, 1)$, $x^n \to 0$. Para $x = 1$, $f_n(1) = 1^n = 1$. Laspunto:

$$
f(x) = \begin{cases} 0 & \text{si } x \in [0, 1), \\ 1 & \text{si } x = 1. \end{cases}
$$

Cada $f_n$ es continua, pero $f$ es discontinua en $x = 1$.

La convergencia NO es uniforme. Para $\varepsilon = 1/2$, necesitamos $|x^n| < 1/2$ para todo $x \in [0, 1)$.

Pero $\sup_{x \in [0, 1)} |x^n| = 1$ (aproximando $x \to 1$), que no tiende a $0$.

### Ejemplo 2 — Convergencia uniforme

Definimos $f_n\colon [0, 1] \to \mathbb{R}$ por:

$$
f_n(x) = \frac{x}{n}.
$$

Cada $f_n$ es continua. La funcion limite es $f(x) = 0$.

Para verificar convergencia uniforme:

$$
\|f_n - f\|_\infty = \sup_{x \in [0, 1]} \left|\frac{x}{n}\right| = \frac{1}{n} \to 0.
$$

La convergencia ES uniforme. El limite es continuo.

### Ejemplo 3 — Contraejemplo: limite puntual de continuas

La **funcion de Thomae** (modificada):

$$
f_n(x) = \begin{cases} 1 & \text{si } x = \frac{p}{q} \text{ con } q \leq n, \\ 0 & \text{en otro caso.} \end{cases}
$$

Cada $f_n$ tiene solo finitos puntos de discontinuidad, esdecir, es continua excepto en finitos puntos. El limite puntual es:

$$
f(x) = \begin{cases} 1 & \text{si } x \in \mathbb{Q}, \\ 0 & \text{si } x \notin \mathbb{Q}. \end{cases}
$$

Esta $f$ es discontinua en todo punto (funcion de Dirichlet).

### Ejemplo 4 — Serie geometrica

La serie $\sum_{k=0}^\infty x^k$ converge puntualmente a $\frac{1}{1-x}$ para $|x| < 1$.

La convergencia NO es uniforme en $(-1, 1)$ porque:

$$
\sup_{x \in (-1, 1)} \left| \sum_{k=n}^\infty x^k \right| = \sup_{x \in (-1, 1)} \frac{|x|^n}{1 - |x|}.
$$

Cuando $x \to 1$, esto tiende a $+\infty$ para cada $n$ fijo.

Pero la convergencia SI es uniforme en $[-a, a]$ para $0 < a < 1$.

## Teoremas fundamentales

### Teorema 1 — Criterio de Cauchy para convergencia uniforme

$(f_n)$ converge uniformemente si y solo si $(f_n)$ es de Cauchy uniforme.

**Demostracion.**

**$\Rightarrow$:** Si $f_n \rightrightarrows f$, dado $\varepsilon > 0$, existe $N$ tal que para $n \geq N$:

$$
\|f_n - f\|_\infty < \frac{\varepsilon}{2}.
$$

Entonces para $n, m \geq N$ y todo $x$:

$$
|f_n(x) - f_m(x)| \leq |f_n(x) - f(x)| + |f(x) - f_m(x)| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.
$$

**$\Leftarrow$:** Para cada $x$, $(f_n(x))$ es sucesion de Cauchy en $\mathbb{R}$, luego converge. Definimos $f(x) = \lim f_n(x)$.

Dado $\varepsilon > 0$, existe $N$ tal que para $n, m \geq N$ y todo $x$:

$$
|f_n(x) - f_m(x)| < \varepsilon.
$$

Haciendo $m \to \infty$:

$$
|f_n(x) - f(x)| \leq \varepsilon.
$$

Como esto vale para todo $x$, $\|f_n - f\|_\infty \leq \varepsilon$.

$\blacksquare$

### Teorema 2 — Limite uniforme de funciones continuas

Si $(f_n)$ converge uniformemente a $f$ en $X$ y cada $f_n$ es continua en $x_0 \in X$, entonces $f$ es continua en $x_0$.

**Demostracion.**

Sea $\varepsilon > 0$. Por convergencia uniforme, existe $N$ tal que para $n \geq N$ y todo $x \in X$:

$$
|f_n(x) - f(x)| < \frac{\varepsilon}{3}.
$$

Fijamos tal $n$. Como $f_n$ es continua en $x_0$, existe $\delta > 0$ tal que:

$$
|x - x_0| < \delta \Rightarrow |f_n(x) - f_n(x_0)| < \frac{\varepsilon}{3}.
$$

Entonces para $|x - x_0| < \delta$:

$$
|f(x) - f(x_0)| \leq |f(x) - f_n(x)| + |f_n(x) - f_n(x_0)| + |f_n(x_0) - f(x_0)| < \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon.
$$

$\blacksquare$

::: warning Importante
El reciproco es FALSO: el limite de funciones continuas puede ser continuo aun sin convergencia uniforme. Ejemplo: $f_n(x) = x^n$ en $[0, 1]$ converge puntualmente a una discontinua, pero $f_n(x) = \frac{x}{n}$ converge uniformemente a $0$.
:::

### Teorema 3 — Integracion bajo convergencia uniforme

Si $f_n \rightrightarrows f$ en $[a, b]$ y cada $f_n$ es Riemann-integrable, entonces $f$ es Riemann-integrable y:

$$
\lim_{n \to \infty} \int_a^b f_n(x)\,dx = \int_a^b f(x)\,dx = \int_a^b \lim_{n \to \infty} f_n(x)\,dx.
$$

**Demostracion.**

Por convergencia uniforme, dado $\varepsilon > 0$, existe $N$ tal que para $n \geq N$:

$$
|f_n(x) - f(x)| < \frac{\varepsilon}{b - a} \quad \forall x \in [a, b].
$$

Entonces:

$$
\left| \int_a^b f_n(x)\,dx - \int_a^b f(x)\,dx \right| \leq \int_a^b |f_n(x) - f(x)|\,dx < \int_a^b \frac{\varepsilon}{b - a}\,dx = \varepsilon.
$$

Para ver que $f$ es integrable: cada $f_n$ es integrable y la uniforme converge implica que $f$ es integrable (las oscilaciones de $f$ se controlan por las de $f_n$).

$\blacksquare$

### Proposicion 4 — Convergencia uniforme y continuidad uniforme

Si $f_n \rightrightarrows f$ en $X$ y cada $f_n$ es uniformemente continua, entonces $f$ es uniformemente continua.

**Demostracion.**

Dado $\varepsilon > 0$, existe $N$ con $\|f_N - f\|_\infty < \varepsilon/3$. Como $f_N$ es uniformemente continua, existe $\delta > 0$ tal que:

$$
|x - y| < \delta \Rightarrow |f_N(x) - f_N(y)| < \frac{\varepsilon}{3}.
$$

Entonces:

$$
|f(x) - f(y)| \leq |f(x) - f_N(x)| + |f_N(x) - f_N(y)| + |f_N(y) - f(y)| < \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon.
$$

$\blacksquare$

### Teorema 5 — Criterio M de Weierstrass

Si $|f_n(x)| \leq M_n$ para todo $x \in X$ y $\sum_{n=1}^\infty M_n < \infty$, entonces $\sum_{n=1}^\infty f_n$ converge uniformemente en $X$.

**Demostracion.**

Para $m > n$:

$$
\left| \sum_{k=n+1}^m f_k(x) \right| \leq \sum_{k=n+1}^m |f_k(x)| \leq \sum_{k=n+1}^m M_k.
$$

Como $\sum M_k$ converge, las sumas parciales son de Cauchy, luego:

$$
\sum_{k=n+1}^\infty M_k \to 0 \quad \text{cuando } n \to \infty.
$$

Esto implica que las sumas parciales de $\sum f_k$ son de Cauchy uniforme, luego convergen uniformemente.

$\blacksquare$

## Errores comunes

1. **Convergencia puntual implica uniforme:** FALSO. El ejemplo clasico es $f_n(x) = x^n$ en $[0, 1]$.

2. **Intercambiar limite e integral sin convergencia uniforme:** FALSO en general. Ejemplo:

$$
f_n(x) = n \cdot \mathbf{1}_{(0, 1/n]}(x), \quad \int_0^1 f_n = 1, \quad \text{pero } f_n \to 0 \text{ puntualmente}.
$$

3. **Convergencia uniforme implica convergencia de derivadas:** FALSO. Ejemplo: $f_n(x) = \frac{\sin(nx)}{n}$ converge uniformemente a $0$, pero $f_n'(x) = \cos(nx)$ no converge.

4. **Suponer que $\|f_n - f\|_\infty \to 0$ siempre tiene solucion cerrada:** A veces el supremo no se alcanza y debe calcularse como limite.

## Resumen operativo

| Tipo | Definicion | Caracterizacion |
|---|---|---|
| Puntual | $\forall x: f_n(x) \to f(x)$ | Limite punto por punto |
| Uniforme | $\|f_n - f\|_\infty \to 0$ | Mismo $N$ para todo $x$ |
| Cauchy uniforme | $\|f_n - f_m\|_\infty \to 0$ | Equivalente a uniforme |

**Propiedades que preserva la convergencia uniforme:**
- Continuidad
- Integrabilidad Riemann
- Continuidad uniforme

**Propiedades que NO preserva:**
- Derivabilidad
- Diferenciabilidad

## Ejercicios

### Ejercicio 1

Demuestre que $f_n(x) = \frac{x}{1 + nx^2}$ converge uniformemente a $0$ en $\mathbb{R}$.

### Ejercicio 2

Demuestre que $f_n(x) = \frac{n x}{1 + n^2 x^2}$ converge puntualmente a $0$ en $\mathbb{R}$, pero NO uniformemente.

### Ejercicio 3

Para $f_n(x) = \frac{\sin(nx)}{\sqrt{n}}$, demuestre que $f_n \rightrightarrows 0$ en $\mathbb{R}$.

### Ejercicio 4

Sea $f_n(x) = x^n$ en $[0, a]$ con $0 < a < 1$. Demuestre que $f_n \rightrightarrows 0$.

### Ejercicio 5

Demuestre que si $f_n \rightrightarrows f$ y $g_n \rightrightarrows g$ en $X$, entonces $f_n + g_n \rightrightarrows f + g$.

### Ejercicio 6

Demuestre que si $f_n \rightrightarrows f$ uniformemente acotada ($|f_n(x)| \leq M$ para todo $n, x$), y $g$ es continua en $X$, entonces $f_n \cdot g \rightrightarrows f \cdot g$.

### Ejercicio 7

Sean $f_n \rightrightarrows f$ en $[a, b]$ con cada $f_n$ Riemann-integrable. Demuestre que:

$$
\lim_{n \to \infty} \int_a^b f_n = \int_a^b f.
$$

### Ejercicio 8

Demuestre que la serie $\sum_{n=1}^\infty \frac{\cos(nx)}{n^2}$ converge uniformemente en $\mathbb{R}$.

### Ejercicio 9

Demuestre que si $f_n \rightrightarrows f$ en $X$ y cada $f_n$ es acotada, entonces $f$ es acotada.

### Ejercicio 10

Encuentre un ejemplo de sucesion $(f_n)$ que converge puntualmente a $0$ en $[0, 1]$, con $\int_0^1 f_n \to \infty$.

### Ejercicio 11

Demuestre que si $f_n \rightrightarrows f$ en $[a, b]$ y cada $f_n$ es continua, entonces:

$$
\lim_{n \to \infty} \int_a^b f_n(x)\,dx = \int_a^b \lim_{n \to \infty} f_n(x)\,dx.
$$

### Ejercicio 12

Sea $f_n(x) = n^2 x e^{-nx}$ en $[0, \infty)$. Determine si la convergencia a $0$ es puntual o uniforme.

### Ejercicio 13

Demuestre que la convergencia uniforme preserva las funciones Lipschitz con constante acotada.

### Ejercicio 14

Sea $f_n(x) = \frac{x^2}{1 + nx}$ en $[0, \infty)$. Determine el limite puntual y estudie la convergencia uniforme.

### Ejercicio 15

Demuestre el criterio M de Weierstrass: si $\sum M_n < \infty$ y $|f_n(x)| \leq M_n$, entonces $\sum f_n$ converge uniformemente.

## Soluciones

### Solucion 1

Para cada $n$, calculamos:

$$
\|f_n\|_\infty = \sup_{x \in \mathbb{R}} \left| \frac{x}{1 + nx^2} \right|.
$$

Derivando respecto a $x$ para encontrar el maximo:

$$
\frac{d}{dx}\frac{x}{1 + nx^2} = \frac{1 + nx^2 - 2nx^2}{(1 + nx^2)^2} = \frac{1 - nx^2}{(1 + nx^2)^2}.
$$

El maximo ocurre en $x = \frac{1}{\sqrt{n}}$, con valor:

$$
f_n\left(\frac{1}{\sqrt{n}}\right) = \frac{1/\sqrt{n}}{1 + n \cdot 1/n} = \frac{1}{2\sqrt{n}}.
$$

Como $\|f_n\|_\infty = \frac{1}{2\sqrt{n}} \to 0$, la convergencia es uniforme.

### Solucion 2

Para $x = 0$: $f_n(0) = 0$. Para $x \neq 0$: $f_n(x) = \frac{n x}{1 + n^2 x^2} \to 0$ pues el denominador crece como $n^2$.

El limite puntual es $f(x) = 0$.

Para convergencia uniforme: calculamos el maximo de $|f_n(x)|$:

$$
\frac{d}{dx}\frac{nx}{1 + n^2 x^2} = \frac{n(1 + n^2 x^2) - nx \cdot 2n^2 x}{(1 + n^2 x^2)^2} = \frac{n - n^3 x^2}{(1 + n^2 x^2)^2}.
$$

El maximo ocurre en $x = \frac{1}{n}$:

$$
f_n\left(\frac{1}{n}\right) = \frac{n \cdot \frac{1}{n}}{1 + n^2 \cdot \frac{1}{n^2}} = \frac{1}{2}.
$$

Como $\|f_n\|_\infty = \frac{1}{2} \not\to 0$, la convergencia NO es uniforme.

### Solucion 3

$$
\|f_n\|_\infty = \sup_{x \in \mathbb{R}} \left| \frac{\sin(nx)}{\sqrt{n}} \right| \leq \frac{1}{\sqrt{n}} \to 0.
$$

Convergencia uniforme.

### Solucion 4

En $[0, a]$ con $a < 1$:

$$
\|f_n\|_\infty = \sup_{x \in [0, a]} x^n = a^n \to 0.
$$

Convergencia uniforme.

### Solucion 5

$$
\|(f_n + g_n) - (f + g)\|_\infty \leq \|f_n - f\|_\infty + \|g_n - g\|_\infty \to 0.
$$

### Solucion 6

$$
|(f_n \cdot g)(x) - (f \cdot g)(x)| = |g(x)| \cdot |f_n(x) - f(x)| \leq M_g \cdot \|f_n - f\|_\infty \to 0.
$$

### Solucion 7

Por el teorema de integracion bajo convergencia uniforme.

### Solucion 8

$$
\left| \frac{\cos(nx)}{n^2} \right| \leq \frac{1}{n^2}.
$$

Como $\sum \frac{1}{n^2} < \infty$, por el criterio M de Weierstrass, la serie converge uniformemente.

### Solucion 9

Existe $N$ tal que $\|f_N - f\|_\infty < 1$. Entonces:

$$
|f(x)| \leq |f(x) - f_N(x)| + |f_N(x)| < 1 + M.
$$

### Solucion 10

$$
f_n(x) = \begin{cases} n & \text{si } x \in (0, 1/n], \\ 0 & \text{en otro caso.} \end{cases}
$$

Entonces $f_n \to 0$ puntualmente, pero $\int_0^1 f_n = n \cdot \frac{1}{n} = 1 \not\to 0$.

Para que $\int f_n \to \infty$:

$$
f_n(x) = \begin{cases} n^2 & \text{si } x \in (0, 1/n], \\ 0 & \text{en otro caso.} \end{cases}
$$

$\int_0^1 f_n = n^2 \cdot \frac{1}{n} = n \to \infty$.

### Solucion 11

Es el contenido del teorema de integracion bajo convergencia uniforme.

### Solucion 12

Para $x \neq 0$: $f_n(x) = \frac{n^2 x}{n} e^{-nx} = n x e^{-nx} \to 0$ pues $e^{-nx}$ decrece exponencialmente. Para $x = 0$: $f_n(0) = 0$.

Limite puntual: $f(x) = 0$.

Para convergencia uniforme: el maximo de $n^2 x e^{-nx}$ en $[0, \infty)$ ocurre en $x = \frac{1}{n}$:

$$
f_n\left(\frac{1}{n}\right) = n^2 \cdot \frac{1}{n} \cdot e^{-1} = \frac{n}{e}.
$$

Como $\|f_n\|_\infty = \frac{n}{e} \to \infty$, la convergencia NO es uniforme en $[0, \infty)$.

### Solucion 13

Si $|f_n(x) - f_n(y)| \leq L|x - y|$ y $\|f_n - f\|_\infty \to 0$, entonces para $n$ grande:

$$
|f(x) - f(y)| \leq |f(x) - f_n(x)| + |f_n(x) - f_n(y)| + |f_n(y) - f(y)| \leq 2\|f_n - f\|_\infty + L|x - y|.
$$

Pasando al limite: $|f(x) - f(y)| \leq L|x - y|$.

### Solucion 14

Limite puntual: para $x > 0$, $f_n(x) = \frac{x^2}{1 + nx} \to 0$. Para $x = 0$, $f_n(0) = 0$. Limite: $f(x) = 0$.

Para convergencia uniforme en $[0, \infty)$: el maximo ocurre donde la derivada se anula, aproximadamente en $x \approx \frac{1}{\sqrt{n}}$, y el valor maximo es del orden de $\frac{1}{\sqrt{n}}$, que tiende a $0$.

Convergencia uniforme en $[0, A]$ para todo $A > 0$, pero no en $[0, \infty)$ sin cotas.

### Solucion 15

Para $m > n$:

$$
\left| \sum_{k=n+1}^m f_k(x) \right| \leq \sum_{k=n+1}^m |f_k(x)| \leq \sum_{k=n+1}^m M_k.
$$

Como $\sum M_k$ converge, para $\varepsilon > 0$ existe $N$ tal que para $n, m \geq N$:

$$
\sum_{k=n+1}^m M_k < \varepsilon.
$$

Esto implica que $\|\sum_{k=n+1}^m f_k\|_\infty < \varepsilon$, luego las sumas parciales son de Cauchy uniforme.

---

## Referencias y lecturas adicionales

1. Rudin, W. (1976). *Principles of Mathematical Analysis*. McGraw-Hill.
2. Apostol, T.M. (1974). *Mathematical Analysis*. Addison-Wesley.
3. Bartle, R.G.; Sherbert, D.R. (2000). *Introduction to Real Analysis*. Wiley.