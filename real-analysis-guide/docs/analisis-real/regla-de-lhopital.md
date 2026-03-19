---
title: Regla de L'Hôpital
description: Enunciado riguroso, demostración y práctica operativa de la regla de L'Hôpital para indeterminaciones 0/0 e ∞/∞, con ejemplos de todas las formas indeterminadas.
---

# Regla de L'Hôpital

## Motivación e intuición

Al calcular $\lim_{x \to a} f(x)/g(x)$, si tanto $f$ como $g$ tienden a $0$ (o ambas a $\pm\infty$), el cociente queda en una **forma indeterminada** y no se puede evaluar directamente. La regla de L'Hôpital ofrece una salida elegante: bajo ciertas condiciones, el límite del cociente original coincide con el límite del cociente de las derivadas.

La idea intuitiva es que, cerca del punto, $f(x) \approx f'(a)(x-a)$ y $g(x) \approx g'(a)(x-a)$, de modo que $f(x)/g(x) \approx f'(a)/g'(a)$. Pero la regla va mucho más allá de esta aproximación lineal: funciona incluso cuando el límite del cociente de derivadas requiere a su vez varias aplicaciones de la misma regla.

## Prerrequisitos

- Definición de derivada (tema **Derivada**).
- Reglas de derivación (temas **Reglas de derivación** y **Regla de la cadena**).
- Teorema del valor medio de Cauchy (demostrado aquí).
- Límites $\varepsilon$-$\delta$ (tema **Límites $\varepsilon$-$\delta$**).

## Definiciones formales

### Forma indeterminada $0/0$

Decimos que $\lim_{x \to a} f(x)/g(x)$ es de la forma $0/0$ si $\lim_{x \to a} f(x) = 0$ y $\lim_{x \to a} g(x) = 0$.

### Forma indeterminada $\infty/\infty$

Decimos que $\lim_{x \to a} f(x)/g(x)$ es de la forma $\infty/\infty$ si $\lim_{x \to a} |f(x)| = +\infty$ y $\lim_{x \to a} |g(x)| = +\infty$.

### Otras formas indeterminadas

Las formas $0 \cdot \infty$, $\infty - \infty$, $0^0$, $1^\infty$ y $\infty^0$ se reducen a $0/0$ o $\infty/\infty$ mediante transformaciones algebraicas o logarítmicas.

## Interpretación en lenguaje natural

Cuando numerador y denominador compiten por imponer su comportamiento (ambos se anulan o ambos explotan), el desenlace depende de **quién gana la carrera**. La regla de L'Hôpital compara las velocidades de cambio ($f'$ y $g'$) para decidir el ganador.

## Ejemplos básicos

### Ejemplo 1 — $\lim_{x \to 0} \frac{\sin x}{x}$ (forma $0/0$)

$$
\lim_{x \to 0} \frac{\sin x}{x} \overset{\text{L'H}}{=} \lim_{x \to 0} \frac{\cos x}{1} = 1.
$$

### Ejemplo 2 — $\lim_{x \to 0} \frac{e^x - 1}{x}$ (forma $0/0$)

$$
\lim_{x \to 0} \frac{e^x - 1}{x} \overset{\text{L'H}}{=} \lim_{x \to 0} \frac{e^x}{1} = 1.
$$

### Ejemplo 3 — $\lim_{x \to +\infty} \frac{x}{e^x}$ (forma $\infty/\infty$)

$$
\lim_{x \to +\infty} \frac{x}{e^x} \overset{\text{L'H}}{=} \lim_{x \to +\infty} \frac{1}{e^x} = 0.
$$

### Ejemplo 4 — $\lim_{x \to +\infty} \frac{\ln x}{x}$ (forma $\infty/\infty$)

$$
\lim_{x \to +\infty} \frac{\ln x}{x} \overset{\text{L'H}}{=} \lim_{x \to +\infty} \frac{1/x}{1} = 0.
$$

## Ejemplos finos y contraejemplos

### Ejemplo 5 — Aplicación repetida

$$
\lim_{x \to 0} \frac{e^x - 1 - x}{x^2} \overset{0/0}{=} \lim_{x \to 0} \frac{e^x - 1}{2x} \overset{0/0}{=} \lim_{x \to 0} \frac{e^x}{2} = \frac{1}{2}.
$$

### Ejemplo 6 — L'Hôpital no siempre ayuda

$$
\lim_{x \to +\infty} \frac{x + \sin x}{x}.
$$

Dividiendo por $x$: el límite es $1 + \lim_{x \to \infty} \frac{\sin x}{x} = 1$. Pero si intentamos L'Hôpital:

$$
\frac{1 + \cos x}{1},
$$

que **no tiene límite** (oscila entre $0$ y $2$). La regla de L'Hôpital dice: «si el límite del cociente de derivadas existe, entonces...». Aquí no existe, así que la regla no es aplicable — pero el límite original sí existe.

### Ejemplo 7 — Forma $0 \cdot \infty$ reducida a $0/0$

$$
\lim_{x \to 0^+} x \ln x = \lim_{x \to 0^+} \frac{\ln x}{1/x} \overset{\infty/\infty}{=} \lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} (-x) = 0.
$$

### Ejemplo 8 — Forma $1^\infty$

$$
\lim_{x \to +\infty} \left(1 + \frac{1}{x}\right)^x.
$$

Sea $L = \lim e^{x \ln(1+1/x)}$. Calculamos el exponente:

$$
\lim_{x \to +\infty} x\ln\!\left(1+\frac{1}{x}\right) = \lim_{x \to +\infty} \frac{\ln(1+1/x)}{1/x} \overset{0/0}{=} \lim_{x \to +\infty} \frac{\frac{-1/x^2}{1+1/x}}{-1/x^2} = \lim_{x \to +\infty} \frac{1}{1+1/x} = 1.
$$

Luego $L = e^1 = e$.

### Ejemplo 9 — Forma $\infty - \infty$

$$
\lim_{x \to 0^+} \left(\frac{1}{x} - \frac{1}{\sin x}\right) = \lim_{x \to 0^+} \frac{\sin x - x}{x\sin x} \overset{0/0}{=} \lim_{x \to 0^+} \frac{\cos x - 1}{\sin x + x\cos x} \overset{0/0}{=} \lim_{x \to 0^+} \frac{-\sin x}{2\cos x - x\sin x} = \frac{0}{2} = 0.
$$

## Proposiciones y teoremas

### Teorema 1 — Valor medio de Cauchy

Sean $f, g$ continuas en $[a,b]$ y diferenciables en $(a,b)$ con $g'(x) \neq 0$ para todo $x \in (a,b)$. Entonces existe $c \in (a,b)$ tal que

$$
\frac{f(b) - f(a)}{g(b) - g(a)} = \frac{f'(c)}{g'(c)}.
$$

### Teorema 2 — Regla de L'Hôpital (forma $0/0$)

Sean $f, g$ diferenciables en un entorno reducido de $a$ (posiblemente $a = \pm\infty$) con $g'(x) \neq 0$ en dicho entorno. Si

$$
\lim_{x \to a} f(x) = 0 \quad \text{y} \quad \lim_{x \to a} g(x) = 0,
$$

y existe $\lim_{x \to a} \frac{f'(x)}{g'(x)} = L$ (finito o $\pm\infty$), entonces

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = L.
$$

### Teorema 3 — Regla de L'Hôpital (forma $\infty/\infty$)

Sean $f, g$ diferenciables en un entorno reducido de $a$ con $g'(x) \neq 0$ en dicho entorno. Si

$$
\lim_{x \to a} |g(x)| = +\infty,
$$

y existe $\lim_{x \to a} \frac{f'(x)}{g'(x)} = L$ (finito o $\pm\infty$), entonces

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = L.
$$

**Nota:** En la versión $\infty/\infty$ basta que $|g| \to \infty$; no se necesita ninguna hipótesis sobre $\lim f$.

## Demostraciones completas

### Demostración del Teorema 1 (Valor medio de Cauchy)

Primero, $g(b) \neq g(a)$: si fueran iguales, por Rolle existiría $c \in (a,b)$ con $g'(c) = 0$, contradiciendo la hipótesis.

Definimos la función auxiliar:

$$
h(x) = f(x) - \frac{f(b)-f(a)}{g(b)-g(a)}\,g(x).
$$

Entonces $h$ es continua en $[a,b]$, diferenciable en $(a,b)$ y

$$
h(a) = f(a) - \frac{f(b)-f(a)}{g(b)-g(a)}\,g(a), \qquad h(b) = f(b) - \frac{f(b)-f(a)}{g(b)-g(a)}\,g(b).
$$

Se verifica que $h(a) = h(b)$ (restar y simplificar). Por el teorema de Rolle, existe $c \in (a,b)$ con $h'(c) = 0$:

$$
0 = f'(c) - \frac{f(b)-f(a)}{g(b)-g(a)}\,g'(c).
$$

Como $g'(c) \neq 0$, despejamos:

$$
\frac{f(b)-f(a)}{g(b)-g(a)} = \frac{f'(c)}{g'(c)}. \qquad \blacksquare
$$

### Demostración del Teorema 2 (L'Hôpital, caso $0/0$)

Podemos suponer, sin pérdida de generalidad, que $f(a) = g(a) = 0$ (definimos o redefinimos $f$ y $g$ en $a$ como $0$; esto no afecta los límites porque solo importa el comportamiento en el entorno reducido).

Sea $L = \lim_{x \to a} \frac{f'(x)}{g'(x)}$ finito. Dado $\varepsilon > 0$, existe $\delta > 0$ tal que si $0 < |x - a| < \delta$ entonces

$$
\left|\frac{f'(x)}{g'(x)} - L\right| < \varepsilon.
$$

Para cualquier $x$ con $0 < |x - a| < \delta$, aplicamos el teorema de Cauchy en el intervalo con extremos $a$ y $x$. Existe $c$ entre $a$ y $x$ (luego $0 < |c-a| < \delta$) tal que

$$
\frac{f(x)}{g(x)} = \frac{f(x) - f(a)}{g(x) - g(a)} = \frac{f'(c)}{g'(c)}.
$$

Como $0 < |c - a| < \delta$:

$$
\left|\frac{f(x)}{g(x)} - L\right| = \left|\frac{f'(c)}{g'(c)} - L\right| < \varepsilon.
$$

Esto prueba $\lim_{x \to a} \frac{f(x)}{g(x)} = L$.

El caso $L = +\infty$ es análogo: dado $M > 0$, existe $\delta$ tal que $f'(c)/g'(c) > M$ para $c$ en el entorno, luego $f(x)/g(x) > M$. $\qquad \blacksquare$

### Demostración del Teorema 3 (L'Hôpital, caso $\infty/\infty$) — Esquema

Sea $L = \lim_{x \to a} f'(x)/g'(x)$ finito. Dado $\varepsilon > 0$, elegimos $\delta_1 > 0$ tal que para $0 < |x-a| < \delta_1$:

$$
\left|\frac{f'(x)}{g'(x)} - L\right| < \varepsilon.
$$

Fijamos un punto $b$ con $0 < |b-a| < \delta_1$. Para $x$ suficientemente cercano a $a$ (más que $b$), por el teorema de Cauchy aplicado entre $x$ y $b$, existe $c$ entre $x$ y $b$ con

$$
\frac{f(x) - f(b)}{g(x) - g(b)} = \frac{f'(c)}{g'(c)}.
$$

Reescribimos:

$$
\frac{f(x)}{g(x)} = \frac{f(x)-f(b)}{g(x)-g(b)} \cdot \frac{g(x)-g(b)}{g(x)} + \frac{f(b)}{g(x)}.
$$

Como $|g(x)| \to \infty$, el factor $\frac{g(x)-g(b)}{g(x)} \to 1$ y $\frac{f(b)}{g(x)} \to 0$. Además $\frac{f(x)-f(b)}{g(x)-g(b)} = \frac{f'(c)}{g'(c)}$ está a distancia menor que $\varepsilon$ de $L$. Combinando estos hechos, para $x$ suficientemente cercano a $a$:

$$
\left|\frac{f(x)}{g(x)} - L\right| < 2\varepsilon.
$$

Como $\varepsilon$ es arbitrario, $\lim_{x \to a} f(x)/g(x) = L$. $\qquad \blacksquare$

## Errores comunes

1. **Aplicar L'Hôpital sin forma indeterminada**: Si $\lim f/g$ no es $0/0$ ni $\infty/\infty$, la regla no aplica. Por ejemplo, $\lim_{x \to 0} \frac{\sin x + 1}{x+1} = 1$ directamente; aplicar L'Hôpital daría $\cos 0/1 = 1$ por casualidad, pero el razonamiento es incorrecto.

2. **Olvidar verificar que $\lim f'/g'$ existe**: La regla dice «si el límite del cociente de derivadas existe, entonces...». Si $f'/g'$ no tiene límite, la regla no concluye nada (Ejemplo 6).

3. **Derivar el cociente $f/g$ en vez de derivar $f$ y $g$ por separado**: L'Hôpital compara $f'(x)/g'(x)$, **no** $(f/g)'(x)$.

4. **Entrar en un ciclo infinito**: Aplicar L'Hôpital repetidamente sin que la indeterminación se resuelva. Si después de varias aplicaciones la forma sigue siendo indeterminada, conviene buscar otro método (acotaciones, desarrollos de Taylor, cambios de variable).

5. **Confundir $a = +\infty$ con $a$ finito**: La regla funciona para ambos, pero hay que verificar las hipótesis en cada caso.

6. **No reducir otras formas indeterminadas**: Las formas $0 \cdot \infty$, $0^0$, $1^\infty$, $\infty^0$, $\infty - \infty$ **no** se tratan directamente con L'Hôpital; primero hay que reescribir como $0/0$ o $\infty/\infty$.

## Resumen operativo

| Paso | Acción |
|---|---|
| 1 | Verificar que el límite es una forma indeterminada ($0/0$ o $\infty/\infty$). |
| 2 | Verificar que $f$ y $g$ son diferenciables y $g' \neq 0$ en un entorno reducido del punto. |
| 3 | Calcular $\lim f'(x)/g'(x)$. |
| 4 | Si este límite existe (finito o $\pm\infty$), entonces $\lim f/g$ tiene el mismo valor. |
| 5 | Si no existe, L'Hôpital no aplica: buscar otro método. |

**Formas indeterminadas — reducciones:**

| Forma | Reescritura |
|---|---|
| $0 \cdot \infty$ | $f \cdot g = f/(1/g)$ o $g/(1/f)$ |
| $\infty - \infty$ | Numerador común o factorización |
| $0^0$, $1^\infty$, $\infty^0$ | $f^g = e^{g\ln f}$, calcular $\lim g\ln f$ |

## Ejercicios

### Ejercicio 1

Calcule $\displaystyle\lim_{x \to 0} \frac{\tan x - x}{x^3}$.

### Ejercicio 2

Calcule $\displaystyle\lim_{x \to 0} \frac{x - \sin x}{x^3}$.

### Ejercicio 3

Calcule $\displaystyle\lim_{x \to +\infty} \frac{x^3}{e^x}$.

### Ejercicio 4

Calcule $\displaystyle\lim_{x \to 1} \frac{\ln x}{x - 1}$.

### Ejercicio 5

Calcule $\displaystyle\lim_{x \to 0^+} x^x$.

### Ejercicio 6

Calcule $\displaystyle\lim_{x \to +\infty} x^{1/x}$.

### Ejercicio 7

Calcule $\displaystyle\lim_{x \to 0} \frac{e^x - e^{-x} - 2x}{x - \sin x}$.

### Ejercicio 8

Calcule $\displaystyle\lim_{x \to 0^+} \frac{\ln(\sin x)}{\ln x}$.

### Ejercicio 9

Calcule $\displaystyle\lim_{x \to +\infty} \left(\sqrt{x^2 + x} - x\right)$.

### Ejercicio 10

Calcule $\displaystyle\lim_{x \to 0} \frac{a^x - b^x}{x}$ donde $a, b > 0$.

### Ejercicio 11

Calcule $\displaystyle\lim_{x \to 0^+} x^{\sin x}$.

### Ejercicio 12

Calcule $\displaystyle\lim_{x \to 0} \left(\frac{1}{\sin^2 x} - \frac{1}{x^2}\right)$.

### Ejercicio 13

Calcule $\displaystyle\lim_{x \to +\infty} \left(1 + \frac{a}{x}\right)^{bx}$ donde $a, b \in \mathbb{R}$.

### Ejercicio 14

Calcule $\displaystyle\lim_{x \to 0} \frac{\arctan x - x}{x^3}$.

### Ejercicio 15

Demuestre que para todo $n \in \mathbb{N}$, $\displaystyle\lim_{x \to +\infty} \frac{x^n}{e^x} = 0$.

## Soluciones

### Solución 1

Forma $0/0$. Aplicamos L'Hôpital tres veces:

$$
\lim_{x \to 0} \frac{\tan x - x}{x^3} \overset{0/0}{=} \lim_{x \to 0} \frac{\sec^2 x - 1}{3x^2} = \lim_{x \to 0} \frac{\tan^2 x}{3x^2} = \frac{1}{3}\left(\lim_{x \to 0}\frac{\tan x}{x}\right)^2 = \frac{1}{3}.
$$

Alternativamente, la segunda aplicación de L'Hôpital a $\frac{\sec^2 x - 1}{3x^2}$:

$$
\overset{0/0}{=} \lim_{x \to 0} \frac{2\sec^2 x \tan x}{6x} \overset{0/0}{=} \lim_{x \to 0} \frac{2\sec^4 x + 4\sec^2 x\tan^2 x}{6} = \frac{2}{6} = \frac{1}{3}.
$$

### Solución 2

Forma $0/0$. Tres aplicaciones:

$$
\lim_{x \to 0} \frac{x - \sin x}{x^3} \overset{0/0}{=} \lim_{x \to 0} \frac{1 - \cos x}{3x^2} \overset{0/0}{=} \lim_{x \to 0} \frac{\sin x}{6x} \overset{0/0}{=} \lim_{x \to 0} \frac{\cos x}{6} = \frac{1}{6}.
$$

### Solución 3

Forma $\infty/\infty$. Tres aplicaciones:

$$
\lim_{x \to +\infty} \frac{x^3}{e^x} \overset{\text{L'H}}{=} \lim \frac{3x^2}{e^x} \overset{\text{L'H}}{=} \lim \frac{6x}{e^x} \overset{\text{L'H}}{=} \lim \frac{6}{e^x} = 0.
$$

### Solución 4

Forma $0/0$:

$$
\lim_{x \to 1} \frac{\ln x}{x-1} \overset{\text{L'H}}{=} \lim_{x \to 1} \frac{1/x}{1} = 1.
$$

### Solución 5

Forma $0^0$. Sea $L = \lim_{x \to 0^+} x^x = \lim e^{x\ln x}$. Calculamos:

$$
\lim_{x \to 0^+} x\ln x = \lim_{x \to 0^+} \frac{\ln x}{1/x} \overset{-\infty/+\infty}{=} \lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} (-x) = 0.
$$

Luego $L = e^0 = 1$.

### Solución 6

Forma $\infty^0$. Sea $L = \lim_{x \to +\infty} e^{(\ln x)/x}$. Calculamos:

$$
\lim_{x \to +\infty} \frac{\ln x}{x} \overset{\text{L'H}}{=} \lim_{x \to +\infty} \frac{1/x}{1} = 0.
$$

Luego $L = e^0 = 1$.

### Solución 7

Forma $0/0$. Aplicamos L'Hôpital:

$$
\lim_{x \to 0} \frac{e^x + e^{-x} - 2}{1 - \cos x} \overset{0/0}{=} \lim_{x \to 0} \frac{e^x - e^{-x}}{\sin x} \overset{0/0}{=} \lim_{x \to 0} \frac{e^x + e^{-x}}{\cos x} = \frac{2}{1} = 2.
$$

### Solución 8

Forma $-\infty/-\infty$ (pues $\sin x \to 0^+$ y $x \to 0^+$, así que $\ln(\sin x) \to -\infty$ y $\ln x \to -\infty$). Aplicamos L'Hôpital:

$$
\lim_{x \to 0^+} \frac{\ln(\sin x)}{\ln x} \overset{\text{L'H}}{=} \lim_{x \to 0^+} \frac{\cos x/\sin x}{1/x} = \lim_{x \to 0^+} \frac{x\cos x}{\sin x} = 1 \cdot 1 = 1.
$$

### Solución 9

Forma $\infty - \infty$. Racionalizamos:

$$
\sqrt{x^2+x} - x = \frac{(x^2+x)-x^2}{\sqrt{x^2+x}+x} = \frac{x}{\sqrt{x^2+x}+x}.
$$

Para $x > 0$, dividimos por $x$:

$$
= \frac{1}{\sqrt{1+1/x}+1} \xrightarrow{x \to +\infty} \frac{1}{1+1} = \frac{1}{2}.
$$

(No fue necesario L'Hôpital aquí; la racionalización es más directa.)

### Solución 10

Forma $0/0$:

$$
\lim_{x \to 0} \frac{a^x - b^x}{x} \overset{\text{L'H}}{=} \lim_{x \to 0} \frac{a^x \ln a - b^x \ln b}{1} = \ln a - \ln b = \ln\frac{a}{b}.
$$

### Solución 11

Forma $0^0$. Sea $L = \lim_{x \to 0^+} e^{\sin x \cdot \ln x}$. Calculamos:

$$
\lim_{x \to 0^+} \sin x \cdot \ln x = \lim_{x \to 0^+} \frac{\ln x}{1/\sin x} \overset{-\infty/+\infty}{=} \lim_{x \to 0^+} \frac{1/x}{-\cos x/\sin^2 x} = \lim_{x \to 0^+} \frac{-\sin^2 x}{x\cos x}.
$$

Como $\sin x/x \to 1$:

$$
= \lim_{x \to 0^+} \frac{-\sin x}{x} \cdot \frac{\sin x}{\cos x} = (-1) \cdot 0 = 0.
$$

Luego $L = e^0 = 1$.

### Solución 12

Forma $\infty - \infty$. Numerador común:

$$
\frac{1}{\sin^2 x} - \frac{1}{x^2} = \frac{x^2 - \sin^2 x}{x^2 \sin^2 x}.
$$

Factorizamos el numerador: $x^2 - \sin^2 x = (x-\sin x)(x+\sin x)$.

$$
\frac{(x - \sin x)(x + \sin x)}{x^2 \sin^2 x} = \frac{x - \sin x}{x^3} \cdot \frac{x+\sin x}{x} \cdot \frac{x^2}{\sin^2 x}.
$$

Cuando $x \to 0$:
- $\frac{x-\sin x}{x^3} \to \frac{1}{6}$ (Ejercicio 2).
- $\frac{x+\sin x}{x} \to 2$.
- $\frac{x^2}{\sin^2 x} \to 1$.

Luego el límite es $\frac{1}{6} \cdot 2 \cdot 1 = \frac{1}{3}$.

### Solución 13

Forma $1^\infty$. Sea $L = \lim e^{bx \ln(1+a/x)}$. Calculamos:

$$
\lim_{x \to +\infty} bx\ln\!\left(1+\frac{a}{x}\right) = b\lim_{x \to +\infty} \frac{\ln(1+a/x)}{1/x} \overset{0/0}{=} b\lim_{x \to +\infty} \frac{\frac{-a/x^2}{1+a/x}}{-1/x^2} = b\lim_{x \to +\infty} \frac{a}{1+a/x} = ab.
$$

Luego $L = e^{ab}$.

### Solución 14

Forma $0/0$. Tres aplicaciones:

$$
\lim_{x \to 0} \frac{\arctan x - x}{x^3} \overset{0/0}{=} \lim_{x \to 0} \frac{\frac{1}{1+x^2} - 1}{3x^2} = \lim_{x \to 0} \frac{-x^2/(1+x^2)}{3x^2} = \lim_{x \to 0} \frac{-1}{3(1+x^2)} = -\frac{1}{3}.
$$

(La simplificación directa $\frac{-x^2}{3x^2(1+x^2)}$ evita aplicar L'Hôpital de nuevo.)

### Solución 15

**Demostración por inducción sobre $n$.**

*Base:* $n = 0$. $\lim_{x \to +\infty} 1/e^x = 0$. ✓

*Paso inductivo:* Supongamos $\lim_{x \to +\infty} x^{n-1}/e^x = 0$. El cociente $x^n/e^x$ es de la forma $\infty/\infty$. Por L'Hôpital:

$$
\lim_{x \to +\infty} \frac{x^n}{e^x} \overset{\text{L'H}}{=} \lim_{x \to +\infty} \frac{nx^{n-1}}{e^x} = n \cdot \lim_{x \to +\infty} \frac{x^{n-1}}{e^x} = n \cdot 0 = 0.
$$

(Verificamos que L'Hôpital es aplicable: $f(x) = x^n$ y $g(x) = e^x$ son diferenciables y $g'(x) = e^x \neq 0$; el límite $f'/g' = nx^{n-1}/e^x$ existe por hipótesis inductiva.)

Esto muestra que **la exponencial crece más rápido que cualquier potencia polinómica**. $\qquad \blacksquare$
