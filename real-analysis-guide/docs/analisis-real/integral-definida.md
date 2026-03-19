---
title: Integral definida
description: Teorema fundamental del cálculo, primitivas, integración por partes, sustitución y cálculo operativo de integrales definidas con 15 ejercicios resueltos.
---

# Integral definida

## Motivación e intuición

Hasta ahora hemos construido la integral de Riemann como límite de sumas de Darboux y hemos identificado qué funciones son integrables. Pero calcular $\int_a^b f$ directamente desde la definición (particiones, sumas, paso al límite) es laborioso. El **Teorema Fundamental del Cálculo** (TFC) establece el puente entre integral y derivada: permite calcular integrales definidas encontrando **primitivas** (antiderivadas), y viceversa. Este es el resultado central del análisis en una variable.

Este tema desarrolla el TFC en sus dos versiones, las técnicas de integración (sustitución y partes) con demostración rigurosa, y la práctica operativa del cálculo de integrales definidas.

## Prerrequisitos

- Integral de Riemann y criterio de Riemann (tema **Integral de Riemann**).
- Funciones Riemann integrables y propiedades de la integral (tema **Funciones Riemann integrables**).
- Derivada y reglas de derivación (temas **Derivada**, **Reglas de derivación**, **Regla de la cadena**).
- Teorema del valor medio (tema **Derivada**).

## Definiciones formales

### Función integral (primitiva de Riemann)

Sea $f \in \mathcal{R}[a,b]$. La **función integral** de $f$ con punto base $a$ es

$$
F(x) = \int_a^x f(t)\,dt, \qquad x \in [a,b].
$$

### Primitiva (antiderivada)

Una función $G\colon [a,b] \to \mathbb{R}$ es una **primitiva** de $f$ en $[a,b]$ si $G$ es continua en $[a,b]$, diferenciable en $(a,b)$ y $G'(x) = f(x)$ para todo $x \in (a,b)$.

### Convención para extremos invertidos

Si $a > b$, definimos $\int_a^b f = -\int_b^a f$. Además $\int_a^a f = 0$.

## Interpretación en lenguaje natural

- La **función integral** $F(x) = \int_a^x f$ acumula el «área con signo» de $f$ desde $a$ hasta $x$.
- El **TFC parte 1** dice que esta función acumuladora es continua y, donde $f$ es continua, $F$ es diferenciable con derivada $f$: la integral «deshace» la derivación.
- El **TFC parte 2** (regla de Barrow) dice que si ya conocemos una primitiva $G$ de $f$, la integral se calcula como $G(b) - G(a)$: la derivación «deshace» la integración.

## Ejemplos básicos

### Ejemplo 1 — Integral de un polinomio

$$
\int_0^2 (3x^2 + 1)\,dx = \left[x^3 + x\right]_0^2 = (8+2) - (0+0) = 10.
$$

### Ejemplo 2 — Integral de la exponencial

$$
\int_0^1 e^x\,dx = \left[e^x\right]_0^1 = e - 1.
$$

### Ejemplo 3 — Integral de $1/x$

$$
\int_1^e \frac{1}{x}\,dx = \left[\ln x\right]_1^e = 1 - 0 = 1.
$$

### Ejemplo 4 — Función integral como primitiva

Sea $f(x) = 2x$ y $F(x) = \int_0^x 2t\,dt = x^2$. Efectivamente $F'(x) = 2x = f(x)$.

## Ejemplos finos y contraejemplos

### Ejemplo 5 — La función integral puede no ser diferenciable donde $f$ es discontinua

Sea $f(x) = \text{sgn}(x)$ en $[-1,1]$ (con $f(0) = 0$). Entonces $f \in \mathcal{R}[-1,1]$ y

$$
F(x) = \int_{-1}^x f(t)\,dt = \begin{cases} -(1+x) & \text{si } x \leq 0, \\ -1 + x & \text{si } x > 0, \end{cases}
$$

que simplificamos: $F(x) = |x| - 1$. Esta función es continua pero no diferenciable en $x = 0$, que es donde $f$ tiene una discontinuidad de salto.

### Ejemplo 6 — Primitiva existe pero $f$ no es continua

Sea $G(x) = x^2\sin(1/x)$ para $x \neq 0$ y $G(0) = 0$. Entonces $G$ es diferenciable en todo $\mathbb{R}$ con

$$
G'(x) = \begin{cases} 2x\sin(1/x) - \cos(1/x) & \text{si } x \neq 0, \\ 0 & \text{si } x = 0. \end{cases}
$$

La derivada $G'$ existe en todo punto pero no es continua en $0$ (el término $-\cos(1/x)$ oscila). Aun así, $G' \in \mathcal{R}[a,b]$ y el TFC parte 2 permite calcular $\int_a^b G'$.

### Ejemplo 7 — Dos primitivas difieren en una constante

Si $G_1$ y $G_2$ son ambas primitivas de $f$ en $[a,b]$, entonces $(G_1 - G_2)' = 0$ en $(a,b)$. Por el teorema del valor medio, $G_1 - G_2$ es constante. Luego toda primitiva tiene la forma $G_1(x) + C$.

## Proposiciones y teoremas

### Teorema 1 — TFC parte 1 (derivación de la función integral)

Sea $f \in \mathcal{R}[a,b]$ y $F(x) = \int_a^x f(t)\,dt$.

1. $F$ es **continua** en $[a,b]$ (de hecho, Lipschitz).
2. Si $f$ es **continua** en $c \in (a,b)$, entonces $F$ es diferenciable en $c$ y $F'(c) = f(c)$.

### Teorema 2 — TFC parte 2 (regla de Barrow)

Sea $f \in \mathcal{R}[a,b]$ y sea $G$ una primitiva de $f$ en $[a,b]$ (es decir, $G$ continua en $[a,b]$, diferenciable en $(a,b)$ y $G' = f$ en $(a,b)$). Entonces

$$
\int_a^b f(x)\,dx = G(b) - G(a).
$$

### Teorema 3 — Integración por sustitución

Sea $\varphi\colon [\alpha, \beta] \to [a,b]$ diferenciable con $\varphi'$ continua, y sea $f$ continua en $[a,b]$. Entonces

$$
\int_{\varphi(\alpha)}^{\varphi(\beta)} f(x)\,dx = \int_\alpha^\beta f(\varphi(t))\,\varphi'(t)\,dt.
$$

### Teorema 4 — Integración por partes

Sean $f, g$ diferenciables en $[a,b]$ con $f', g'$ continuas. Entonces

$$
\int_a^b f(x)\,g'(x)\,dx = \left[f(x)\,g(x)\right]_a^b - \int_a^b f'(x)\,g(x)\,dx.
$$

### Teorema 5 — Valor medio integral

Si $f$ es continua en $[a,b]$, existe $c \in [a,b]$ tal que

$$
\int_a^b f(x)\,dx = f(c)(b-a).
$$

## Demostraciones completas

### Demostración del Teorema 1 (TFC parte 1)

**(1) Continuidad de $F$.**

Sea $K = \sup_{[a,b]}|f|$ (finito porque $f$ es acotada). Para $x, y \in [a,b]$ con $x < y$:

$$
|F(y) - F(x)| = \left|\int_x^y f(t)\,dt\right| \leq \int_x^y |f(t)|\,dt \leq K(y-x).
$$

Luego $F$ es Lipschitz (con constante $K$), y en particular continua.

**(2) Diferenciabilidad donde $f$ es continua.**

Supongamos $f$ continua en $c$. Dado $\varepsilon > 0$, existe $\delta > 0$ tal que $|t - c| < \delta \implies |f(t) - f(c)| < \varepsilon$. Para $0 < |h| < \delta$:

$$
\frac{F(c+h) - F(c)}{h} - f(c) = \frac{1}{h}\int_c^{c+h} f(t)\,dt - f(c) = \frac{1}{h}\int_c^{c+h} [f(t) - f(c)]\,dt.
$$

(Usamos que $f(c) = \frac{1}{h}\int_c^{c+h} f(c)\,dt$.)

Tomando valor absoluto (para $h > 0$; el caso $h < 0$ es análogo):

$$
\left|\frac{F(c+h)-F(c)}{h} - f(c)\right| \leq \frac{1}{h}\int_c^{c+h} |f(t)-f(c)|\,dt < \frac{1}{h} \cdot \varepsilon \cdot h = \varepsilon.
$$

Luego $F'(c) = f(c)$. $\qquad \blacksquare$

### Demostración del Teorema 2 (TFC parte 2 — Barrow)

Sea $F(x) = \int_a^x f(t)\,dt$. Consideremos $H = F - G$. Entonces $H$ es continua en $[a,b]$.

En cada punto $c \in (a,b)$ donde $f$ es continua (que, por ser $f$ integrable, incluye «casi todos» los puntos):

$$
H'(c) = F'(c) - G'(c) = f(c) - f(c) = 0.
$$

Más directamente: como $G' = f$ en $(a,b)$ y $f \in \mathcal{R}[a,b]$, podemos argumentar así. Para cualquier partición $P = \{a = x_0, \ldots, x_n = b\}$, por el teorema del valor medio aplicado a $G$ en cada $[x_{i-1}, x_i]$, existe $c_i \in (x_{i-1}, x_i)$ con

$$
G(x_i) - G(x_{i-1}) = G'(c_i)\,\Delta x_i = f(c_i)\,\Delta x_i.
$$

Sumando (telescópica):

$$
G(b) - G(a) = \sum_{i=1}^n f(c_i)\,\Delta x_i.
$$

Esto es una suma de Riemann de $f$. Como $f \in \mathcal{R}[a,b]$, cuando $\|P\| \to 0$ la suma de Riemann converge a $\int_a^b f$. Pero el lado izquierdo $G(b) - G(a)$ no depende de la partición, así que:

$$
G(b) - G(a) = \int_a^b f(x)\,dx. \qquad \blacksquare
$$

### Demostración del Teorema 3 (Sustitución)

Sea $H(t) = \int_{\varphi(\alpha)}^{\varphi(t)} f(x)\,dx$. Por el TFC parte 1, como $f$ es continua:

$$
H'(t) = f(\varphi(t)) \cdot \varphi'(t)
$$

(regla de la cadena). Además, la función $t \mapsto f(\varphi(t))\,\varphi'(t)$ es continua (composición y producto de continuas), luego integrable. Su primitiva es $H(t)$. Por Barrow:

$$
\int_\alpha^\beta f(\varphi(t))\,\varphi'(t)\,dt = H(\beta) - H(\alpha) = \int_{\varphi(\alpha)}^{\varphi(\beta)} f(x)\,dx - 0. \qquad \blacksquare
$$

### Demostración del Teorema 4 (Partes)

Como $f$ y $g$ son diferenciables con derivadas continuas, la regla del producto da:

$$
(fg)' = f'g + fg'.
$$

Integrando en $[a,b]$ y usando Barrow:

$$
f(b)g(b) - f(a)g(a) = \int_a^b f'(x)g(x)\,dx + \int_a^b f(x)g'(x)\,dx.
$$

Despejando:

$$
\int_a^b f(x)g'(x)\,dx = [fg]_a^b - \int_a^b f'(x)g(x)\,dx. \qquad \blacksquare
$$

### Demostración del Teorema 5 (Valor medio integral)

Como $f$ es continua en el compacto $[a,b]$, alcanza su mínimo $m$ y su máximo $M$. Por monotonía de la integral:

$$
m(b-a) \leq \int_a^b f(x)\,dx \leq M(b-a).
$$

Dividiendo por $b-a$:

$$
m \leq \frac{1}{b-a}\int_a^b f(x)\,dx \leq M.
$$

Por el teorema del valor intermedio, existe $c \in [a,b]$ con $f(c) = \frac{1}{b-a}\int_a^b f$. $\qquad \blacksquare$

## Errores comunes

1. **Olvidar los límites de integración al sustituir**: En la sustitución $x = \varphi(t)$, los límites cambian de $[a,b]$ a $[\alpha, \beta]$ con $\varphi(\alpha) = a$ y $\varphi(\beta) = b$.

2. **Aplicar Barrow sin verificar que $G$ es primitiva**: Si $G' = f$ solo en $(a,b) \setminus S$ para un conjunto $S$ no vacío, la regla de Barrow podría fallar. La hipótesis correcta es $G' = f$ en todo $(a,b)$.

3. **Confundir $\int_a^b f$ con $\int_a^b |f|$**: La integral puede ser negativa si $f$ toma valores negativos. El «área» geométrica es $\int |f|$, no $\int f$.

4. **Derivar $\int_a^{g(x)} f(t)\,dt$ como $f(g(x))$ sin el factor $g'(x)$**: Por la regla de la cadena, la derivada es $f(g(x)) \cdot g'(x)$.

5. **Olvidar el signo al invertir límites**: $\int_b^a f = -\int_a^b f$.

6. **Aplicar partes o sustitución a funciones no continuas sin justificar**: Los teoremas requieren continuidad (al menos de las funciones involucradas).

## Resumen operativo

| Herramienta | Fórmula |
|---|---|
| Barrow | $\int_a^b f = G(b) - G(a)$ donde $G' = f$ |
| Sustitución | $\int_a^b f(x)\,dx = \int_\alpha^\beta f(\varphi(t))\,\varphi'(t)\,dt$ |
| Partes | $\int_a^b fg' = [fg]_a^b - \int_a^b f'g$ |
| TFC 1 | $\frac{d}{dx}\int_a^x f(t)\,dt = f(x)$ (si $f$ continua) |
| Valor medio | $\int_a^b f = f(c)(b-a)$ para algún $c$ |

## Ejercicios

### Ejercicio 1

Calcule $\displaystyle\int_0^3 (x^3 - 2x + 1)\,dx$.

### Ejercicio 2

Calcule $\displaystyle\int_1^4 \frac{1}{\sqrt{x}}\,dx$.

### Ejercicio 3

Calcule $\displaystyle\int_0^1 x\,e^{x^2}\,dx$.

### Ejercicio 4

Calcule $\displaystyle\int_0^{\pi/2} \sin^2 x\,dx$.

### Ejercicio 5

Calcule $\displaystyle\int_0^1 \ln(1+x)\,dx$.

### Ejercicio 6

Calcule $\displaystyle\int_0^1 \frac{x}{1+x^2}\,dx$.

### Ejercicio 7

Calcule $\displaystyle\int_1^e x\ln x\,dx$.

### Ejercicio 8

Sea $F(x) = \int_0^{x^2} e^{-t^2}\,dt$. Calcule $F'(x)$.

### Ejercicio 9

Calcule $\displaystyle\int_0^{\pi} x\sin x\,dx$.

### Ejercicio 10

Calcule $\displaystyle\int_0^1 \frac{1}{1+x^2}\,dx$.

### Ejercicio 11

Calcule $\displaystyle\int_0^2 |x-1|\,dx$.

### Ejercicio 12

Demuestre que $\displaystyle\int_0^{\pi/2} \sin^n x\,dx = \frac{n-1}{n}\int_0^{\pi/2}\sin^{n-2} x\,dx$ para $n \geq 2$.

### Ejercicio 13

Calcule $\displaystyle\int_0^1 \frac{e^x}{1+e^x}\,dx$.

### Ejercicio 14

Calcule $\displaystyle\frac{d}{dx}\int_x^{x^2} e^{-t^2}\,dt$.

### Ejercicio 15

Calcule $\displaystyle\int_0^1 x^2\,e^x\,dx$.

## Soluciones

### Solución 1

$$
\int_0^3 (x^3 - 2x + 1)\,dx = \left[\frac{x^4}{4} - x^2 + x\right]_0^3 = \frac{81}{4} - 9 + 3 - 0 = \frac{81}{4} - 6 = \frac{57}{4}.
$$

### Solución 2

$$
\int_1^4 x^{-1/2}\,dx = \left[2x^{1/2}\right]_1^4 = 2\sqrt{4} - 2\sqrt{1} = 4 - 2 = 2.
$$

### Solución 3

Sustitución $u = x^2$, $du = 2x\,dx$:

$$
\int_0^1 x\,e^{x^2}\,dx = \frac{1}{2}\int_0^1 e^u\,du = \frac{1}{2}(e-1).
$$

### Solución 4

Usamos $\sin^2 x = \frac{1-\cos 2x}{2}$:

$$
\int_0^{\pi/2} \sin^2 x\,dx = \frac{1}{2}\int_0^{\pi/2}(1-\cos 2x)\,dx = \frac{1}{2}\left[x - \frac{\sin 2x}{2}\right]_0^{\pi/2} = \frac{1}{2}\left(\frac{\pi}{2} - 0\right) = \frac{\pi}{4}.
$$

### Solución 5

Integración por partes con $f(x) = \ln(1+x)$, $g'(x) = 1$:

$$
\int_0^1 \ln(1+x)\,dx = \left[x\ln(1+x)\right]_0^1 - \int_0^1 \frac{x}{1+x}\,dx.
$$

$$
= \ln 2 - \int_0^1 \left(1 - \frac{1}{1+x}\right)dx = \ln 2 - \left[x - \ln(1+x)\right]_0^1 = \ln 2 - (1 - \ln 2) = 2\ln 2 - 1.
$$

### Solución 6

Sustitución $u = 1+x^2$, $du = 2x\,dx$:

$$
\int_0^1 \frac{x}{1+x^2}\,dx = \frac{1}{2}\int_1^2 \frac{du}{u} = \frac{1}{2}\ln 2.
$$

### Solución 7

Partes con $f(x) = \ln x$, $g'(x) = x$:

$$
\int_1^e x\ln x\,dx = \left[\frac{x^2}{2}\ln x\right]_1^e - \int_1^e \frac{x^2}{2}\cdot\frac{1}{x}\,dx = \frac{e^2}{2} - \frac{1}{2}\int_1^e x\,dx = \frac{e^2}{2} - \frac{1}{2}\cdot\frac{e^2-1}{2} = \frac{e^2+1}{4}.
$$

### Solución 8

Por el TFC parte 1 y la regla de la cadena, con $u = x^2$:

$$
F'(x) = e^{-(x^2)^2} \cdot 2x = 2x\,e^{-x^4}.
$$

### Solución 9

Partes con $f(x) = x$, $g'(x) = \sin x$:

$$
\int_0^\pi x\sin x\,dx = \left[-x\cos x\right]_0^\pi + \int_0^\pi \cos x\,dx = \pi + [\sin x]_0^\pi = \pi + 0 = \pi.
$$

### Solución 10

$$
\int_0^1 \frac{1}{1+x^2}\,dx = [\arctan x]_0^1 = \frac{\pi}{4} - 0 = \frac{\pi}{4}.
$$

### Solución 11

Separamos en $[0,1]$ y $[1,2]$:

$$
\int_0^2 |x-1|\,dx = \int_0^1 (1-x)\,dx + \int_1^2 (x-1)\,dx = \left[x - \frac{x^2}{2}\right]_0^1 + \left[\frac{x^2}{2} - x\right]_1^2.
$$

$$
= \left(1 - \frac{1}{2}\right) + \left[(2-2) - \left(\frac{1}{2}-1\right)\right] = \frac{1}{2} + \frac{1}{2} = 1.
$$

### Solución 12

Partes con $f(x) = \sin^{n-1}x$, $g'(x) = \sin x$:

$$
\int_0^{\pi/2}\sin^n x\,dx = \left[-\sin^{n-1}x\cos x\right]_0^{\pi/2} + (n-1)\int_0^{\pi/2}\sin^{n-2}x\cos^2 x\,dx.
$$

El término evaluado es $0$ (en ambos extremos). Usamos $\cos^2 x = 1 - \sin^2 x$:

$$
= (n-1)\int_0^{\pi/2}\sin^{n-2}x\,dx - (n-1)\int_0^{\pi/2}\sin^n x\,dx.
$$

Sea $I_n = \int_0^{\pi/2}\sin^n x\,dx$. Entonces $I_n = (n-1)I_{n-2} - (n-1)I_n$, de donde:

$$
nI_n = (n-1)I_{n-2} \implies I_n = \frac{n-1}{n}I_{n-2}. \qquad \blacksquare
$$

### Solución 13

Sustitución $u = e^x$, $du = e^x\,dx$. Cuando $x = 0$, $u = 1$; cuando $x = 1$, $u = e$:

$$
\int_0^1 \frac{e^x}{1+e^x}\,dx = \int_1^e \frac{du}{1+u} = [\ln(1+u)]_1^e = \ln(1+e) - \ln 2.
$$

### Solución 14

Escribimos $\int_x^{x^2} e^{-t^2}\,dt = \int_0^{x^2} e^{-t^2}\,dt - \int_0^x e^{-t^2}\,dt$.

Sea $G(u) = \int_0^u e^{-t^2}\,dt$. Por el TFC parte 1, $G'(u) = e^{-u^2}$.

Entonces nuestra función es $H(x) = G(x^2) - G(x)$. Derivando con la regla de la cadena:

$$
H'(x) = G'(x^2) \cdot 2x - G'(x) = 2x\,e^{-x^4} - e^{-x^2}.
$$
