---
title: Regla de la cadena
description: Demostración rigurosa de la regla de la cadena para funciones reales, con ejemplos operativos de composición y derivación implícita.
---

# Regla de la cadena

## Motivación e intuición

La mayoría de las funciones que aparecen en la práctica son composiciones: $\sin(x^2)$, $e^{-x^2}$, $\ln(\cos x)$. Para derivar estas funciones necesitamos una regla que conecte la derivada de la composición $f \circ g$ con las derivadas de $f$ y de $g$ por separado. Esa regla es la **regla de la cadena**.

Intuitivamente: si $g$ estira la entrada por un factor $g'(a)$ y luego $f$ estira por $f'(g(a))$, la composición estira por el producto de ambos factores. La demostración rigurosa requiere cuidado porque el cociente incremental de $g$ puede anularse, lo que impide una simple «cancelación de fracciones».

## Prerrequisitos

- Definición de derivada y diferenciabilidad (tema **Derivada**).
- Reglas algebraicas de derivación (tema **Reglas de derivación**).
- Continuidad de funciones diferenciables.
- Notación de incremento: $f(a+h) = f(a) + f'(a)h + r(h)$ con $r(h)/h \to 0$.

## Definiciones formales

### Composición de funciones

Dadas $g\colon A \to \mathbb{R}$ y $f\colon B \to \mathbb{R}$ con $g(A) \subseteq B$, la **composición** es

$$
(f \circ g)(x) = f(g(x)).
$$

### Aproximación lineal (recordatorio)

Decir que $f$ es diferenciable en $b$ equivale a que existe $\varphi\colon \mathbb{R} \to \mathbb{R}$ continua en $0$ con $\varphi(0) = f'(b)$ tal que

$$
f(b + k) - f(b) = \varphi(k) \cdot k
$$

para todo $k$ suficientemente pequeño. Definimos $\varphi(k) = \frac{f(b+k)-f(b)}{k}$ para $k \neq 0$ y $\varphi(0) = f'(b)$.

## Interpretación en lenguaje natural

La regla de la cadena dice: «la velocidad de la composición es la velocidad exterior evaluada en el punto intermedio, multiplicada por la velocidad interior». Si $y = f(u)$ y $u = g(x)$, entonces

$$
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}.
$$

Esta notación de Leibniz es mnemotécnica (los $du$ «se cancelan»), pero la justificación real requiere la demostración formal porque $du/dx$ puede ser cero.

## Ejemplos básicos

### Ejemplo 1 — $(e^{3x})'$

Tomamos $f(u) = e^u$ y $g(x) = 3x$. Entonces:

$$
(e^{3x})' = e^{3x} \cdot 3 = 3e^{3x}.
$$

### Ejemplo 2 — $(\ln(x^2+1))'$

Con $f(u) = \ln u$ y $g(x) = x^2+1$:

$$
(\ln(x^2+1))' = \frac{1}{x^2+1} \cdot 2x = \frac{2x}{x^2+1}.
$$

### Ejemplo 3 — $((2x+1)^5)'$

Con $f(u) = u^5$ y $g(x) = 2x+1$:

$$
((2x+1)^5)' = 5(2x+1)^4 \cdot 2 = 10(2x+1)^4.
$$

### Ejemplo 4 — $(e^{x^2})'$

Con $f(u) = e^u$ y $g(x) = x^2$:

$$
(e^{x^2})' = e^{x^2} \cdot 2x = 2x\,e^{x^2}.
$$

## Ejemplos finos y contraejemplos

### Ejemplo 5 — Cadena cuando la derivada interior es cero

Sea $g(x) = x^2$ y $f(u) = u^3$. Entonces $(f \circ g)(x) = x^6$ y

$$
(f \circ g)'(0) = f'(g(0)) \cdot g'(0) = 3 \cdot 0^2 \cdot 2 \cdot 0 = 0.
$$

Verificación directa: $(x^6)' = 6x^5$ y en $x = 0$ da $0$. ✓

Aquí $g'(0) = 0$, pero la regla de la cadena funciona sin problema. La dificultad técnica es que en la demostración el cociente incremental de $g$ se anula; la prueba que presentamos evita dividir por $g(a+h)-g(a)$.

### Ejemplo 6 — Composición triple

Para $h(x) = e^{\sin(x^2)}$, aplicamos la cadena dos veces:

$$
h'(x) = e^{\sin(x^2)} \cdot \cos(x^2) \cdot 2x.
$$

Esto es la cadena con $f(u) = e^u$, $u = \sin v$, $v = x^2$.

### Ejemplo 7 — La cadena no se aplica a sumas

$(f+g)'(a) = f'(a) + g'(a)$ viene de la linealidad, **no** de la regla de la cadena. La cadena se aplica exclusivamente a composiciones $f(g(x))$, no a operaciones algebraicas.

## Proposiciones y teoremas

### Teorema 1 — Regla de la cadena

Sea $g$ diferenciable en $a$ y $f$ diferenciable en $g(a)$. Entonces $f \circ g$ es diferenciable en $a$ y

$$
(f \circ g)'(a) = f'(g(a)) \cdot g'(a).
$$

### Teorema 2 — Cadena para composición múltiple

Si $h$ es diferenciable en $a$, $g$ es diferenciable en $h(a)$ y $f$ es diferenciable en $g(h(a))$, entonces

$$
(f \circ g \circ h)'(a) = f'(g(h(a))) \cdot g'(h(a)) \cdot h'(a).
$$

### Teorema 3 — Derivada de la función inversa

Sea $f$ continua y estrictamente monótona en un intervalo $I$, y diferenciable en $b = f^{-1}(a)$ con $f'(b) \neq 0$. Entonces $f^{-1}$ es diferenciable en $a$ y

$$
(f^{-1})'(a) = \frac{1}{f'(f^{-1}(a))} = \frac{1}{f'(b)}.
$$

### Corolario — Derivadas de funciones inversas clásicas

Aplicando el Teorema 3:

$$
(\arctan x)' = \frac{1}{1+x^2}, \qquad (\arcsin x)' = \frac{1}{\sqrt{1-x^2}}, \qquad (\text{para } |x|<1).
$$

## Demostraciones completas

### Demostración del Teorema 1 (Regla de la cadena)

Como $f$ es diferenciable en $b = g(a)$, definimos la función auxiliar

$$
\varphi(k) = \begin{cases} \dfrac{f(b+k) - f(b)}{k} & \text{si } k \neq 0, \\[6pt] f'(b) & \text{si } k = 0, \end{cases}
$$

que es continua en $k = 0$ (por definición de derivada). Para todo $k$:

$$
f(b + k) - f(b) = \varphi(k) \cdot k. \tag{$\star$}
$$

Sea $h \neq 0$ y pongamos $k = g(a+h) - g(a)$. Entonces $g(a+h) = b + k$ y por $(\star)$:

$$
f(g(a+h)) - f(g(a)) = \varphi(k) \cdot [g(a+h) - g(a)].
$$

Dividimos entre $h$:

$$
\frac{(f \circ g)(a+h) - (f \circ g)(a)}{h} = \varphi(g(a+h) - g(a)) \cdot \frac{g(a+h) - g(a)}{h}.
$$

Cuando $h \to 0$:
- $g(a+h) - g(a) \to 0$ (porque $g$ es continua en $a$, al ser diferenciable).
- $\varphi(g(a+h)-g(a)) \to \varphi(0) = f'(b) = f'(g(a))$ (por continuidad de $\varphi$ en $0$).
- $\frac{g(a+h)-g(a)}{h} \to g'(a)$.

Por el álgebra de límites:

$$
(f \circ g)'(a) = f'(g(a)) \cdot g'(a). \qquad \blacksquare
$$

**Observación:** Esta demostración evita dividir por $g(a+h) - g(a)$, que podría ser cero para infinitos valores de $h$. La función auxiliar $\varphi$ es el recurso estándar para sortear esta dificultad.

### Demostración del Teorema 2 (Composición múltiple)

Aplicamos el Teorema 1 dos veces. Sea $\psi = g \circ h$. Como $h$ es diferenciable en $a$ y $g$ es diferenciable en $h(a)$:

$$
\psi'(a) = g'(h(a)) \cdot h'(a).
$$

Ahora $f \circ g \circ h = f \circ \psi$ y $\psi$ es diferenciable en $a$, $f$ es diferenciable en $\psi(a) = g(h(a))$:

$$
(f \circ \psi)'(a) = f'(\psi(a)) \cdot \psi'(a) = f'(g(h(a))) \cdot g'(h(a)) \cdot h'(a). \qquad \blacksquare
$$

### Demostración del Teorema 3 (Derivada de la inversa)

Sea $f^{-1}(a) = b$, es decir $f(b) = a$. Para $k \neq 0$ suficientemente pequeño, definimos $h$ por $f^{-1}(a+k) = b + h$, de modo que $f(b+h) = a+k$ y $h \neq 0$ (por inyectividad de $f$). Además $h \to 0$ cuando $k \to 0$ (por continuidad de $f^{-1}$).

Entonces:

$$
\frac{f^{-1}(a+k) - f^{-1}(a)}{k} = \frac{h}{k} = \frac{h}{f(b+h) - f(b)} = \frac{1}{\dfrac{f(b+h)-f(b)}{h}}.
$$

Cuando $k \to 0$, $h \to 0$ y el denominador tiende a $f'(b) \neq 0$. Luego:

$$
(f^{-1})'(a) = \frac{1}{f'(b)} = \frac{1}{f'(f^{-1}(a))}. \qquad \blacksquare
$$

### Demostración del Corolario ($\arctan$ y $\arcsin$)

**Para $\arctan$:** Sea $f(x) = \tan x$ en $(-\pi/2, \pi/2)$. Sabemos $f'(x) = 1 + \tan^2 x$. Si $y = \arctan a$, entonces $\tan y = a$ y:

$$
(\arctan a)' = \frac{1}{1 + \tan^2 y} = \frac{1}{1 + a^2}.
$$

**Para $\arcsin$:** Sea $f(x) = \sin x$ en $(-\pi/2, \pi/2)$. Entonces $f'(x) = \cos x$. Si $y = \arcsin a$, entonces $\sin y = a$ y $\cos y = \sqrt{1 - a^2}$ (pues $y \in (-\pi/2, \pi/2)$ implica $\cos y > 0$):

$$
(\arcsin a)' = \frac{1}{\cos y} = \frac{1}{\sqrt{1-a^2}}, \quad |a| < 1. \qquad \blacksquare
$$

## Errores comunes

1. **Olvidar la derivada interior**: Escribir $(e^{x^2})' = e^{x^2}$ en vez de $2x\,e^{x^2}$. El factor $g'(x)$ nunca debe omitirse.

2. **Aplicar la cadena «al revés»**: Escribir $f'(g(a)) \cdot g(a)$ en vez de $f'(g(a)) \cdot g'(a)$. El segundo factor es la **derivada** de $g$, no $g$ misma.

3. **Confundir producto con composición**: $(x \cdot \sin x)' \neq \cos(x^2)$. El producto $x \sin x$ se deriva con la regla del producto; la composición $\sin(x^2)$ se deriva con la cadena.

4. **Derivada de la inversa sin verificar $f'(b) \neq 0$**: Si $f'(b) = 0$, la fórmula $1/f'(b)$ no existe. Por ejemplo, $f(x) = x^3$ tiene $f'(0) = 0$ y $(f^{-1})'(0) = (x^{1/3})'|_{x=0}$ no existe.

5. **Aplicar la cadena sólo una vez en composiciones triples**: Para $e^{\sin(x^2)}$ hay que derivar tres capas, no dos.

## Resumen operativo

| Situación | Fórmula |
|---|---|
| Composición simple | $(f(g(x)))' = f'(g(x)) \cdot g'(x)$ |
| Composición triple | $(f(g(h(x))))' = f'(g(h(x))) \cdot g'(h(x)) \cdot h'(x)$ |
| Función inversa | $(f^{-1})'(a) = 1/f'(f^{-1}(a))$ |
| $\arctan x$ | $1/(1+x^2)$ |
| $\arcsin x$ | $1/\sqrt{1-x^2}$ |

**Receta práctica:** Identificar las «capas» de la composición de fuera hacia dentro, derivar cada capa y multiplicar todos los factores.

## Ejercicios

### Ejercicio 1

Derive $f(x) = (3x^2 + 1)^7$.

### Ejercicio 2

Derive $f(x) = e^{-x^2/2}$.

### Ejercicio 3

Derive $f(x) = \ln(\sqrt{x^2 + 1})$ para todo $x$.

### Ejercicio 4

Derive $f(x) = \arctan(e^x)$.

### Ejercicio 5

Derive $f(x) = \sqrt{1 + e^{2x}}$.

### Ejercicio 6

Derive $f(x) = (1 + \ln x)^3$ para $x > 0$.

### Ejercicio 7

Derive $f(x) = e^{\arctan x}$.

### Ejercicio 8

Derive $f(x) = \arcsin\!\left(\dfrac{1}{x}\right)$ para $|x| > 1$.

### Ejercicio 9

Sea $f$ diferenciable con $f(1) = 2$ y $f'(1) = 3$. Calcule $(f(x^2))'$ en $x = 1$.

### Ejercicio 10

Derive $f(x) = \ln\!\left(\dfrac{1+x}{1-x}\right)$ para $|x| < 1$.

### Ejercicio 11

Derive $f(x) = x^x$ para $x > 0$.

*Sugerencia:* Escriba $x^x = e^{x \ln x}$.

### Ejercicio 12

Use la regla de la cadena y la derivada de $\ln$ para dar otra demostración de la regla del producto: demuestre que $(\ln|fg|)' = (\ln|f|)' + (\ln|g|)'$ y deduzca $(fg)' = f'g + fg'$.

### Ejercicio 13

Derive $f(x) = e^{e^x}$.

### Ejercicio 14

Sea $g$ diferenciable y $g(x) > 0$ para todo $x$. Derive $f(x) = (g(x))^n$ con $n \in \mathbb{Z}$.

### Ejercicio 15

Derive $f(x) = \arctan\!\left(\dfrac{x-1}{x+1}\right)$ para $x \neq -1$ y simplifique.

## Soluciones

### Solución 1

Con $u = 3x^2+1$:

$$
f'(x) = 7(3x^2+1)^6 \cdot 6x = 42x(3x^2+1)^6.
$$

### Solución 2

Con $u = -x^2/2$:

$$
f'(x) = e^{-x^2/2} \cdot (-x) = -x\,e^{-x^2/2}.
$$

### Solución 3

Simplificamos primero: $\ln(\sqrt{x^2+1}) = \frac{1}{2}\ln(x^2+1)$. Luego:

$$
f'(x) = \frac{1}{2} \cdot \frac{2x}{x^2+1} = \frac{x}{x^2+1}.
$$

### Solución 4

Con $f(u) = \arctan u$ y $u = e^x$:

$$
f'(x) = \frac{1}{1+(e^x)^2} \cdot e^x = \frac{e^x}{1+e^{2x}}.
$$

### Solución 5

Escribimos $f(x) = (1+e^{2x})^{1/2}$. Con la cadena:

$$
f'(x) = \frac{1}{2}(1+e^{2x})^{-1/2} \cdot 2e^{2x} = \frac{e^{2x}}{\sqrt{1+e^{2x}}}.
$$

### Solución 6

Con $u = 1 + \ln x$:

$$
f'(x) = 3(1+\ln x)^2 \cdot \frac{1}{x} = \frac{3(1+\ln x)^2}{x}.
$$

### Solución 7

Con $u = \arctan x$:

$$
f'(x) = e^{\arctan x} \cdot \frac{1}{1+x^2} = \frac{e^{\arctan x}}{1+x^2}.
$$

### Solución 8

Con $u = 1/x$ y $(\arcsin u)' = 1/\sqrt{1-u^2}$:

$$
f'(x) = \frac{1}{\sqrt{1-1/x^2}} \cdot \left(-\frac{1}{x^2}\right) = \frac{-1/x^2}{\sqrt{(x^2-1)/x^2}} = \frac{-1/x^2}{|x|^{-1}\sqrt{x^2-1}}.
$$

Para $|x| > 1$, simplificando (y notando que $|x|/x^2 = 1/|x|$):

$$
f'(x) = \frac{-1}{|x|\sqrt{x^2-1}}.
$$

### Solución 9

Por la regla de la cadena, $(f(x^2))' = f'(x^2) \cdot 2x$.

En $x = 1$: $f'(1^2) \cdot 2 \cdot 1 = f'(1) \cdot 2 = 3 \cdot 2 = 6$.

### Solución 10

Escribimos $f(x) = \ln(1+x) - \ln(1-x)$. Entonces:

$$
f'(x) = \frac{1}{1+x} - \frac{(-1)}{1-x} = \frac{1}{1+x} + \frac{1}{1-x} = \frac{(1-x)+(1+x)}{(1+x)(1-x)} = \frac{2}{1-x^2}.
$$

### Solución 11

Escribimos $x^x = e^{x\ln x}$. Con la cadena:

$$
f'(x) = e^{x\ln x} \cdot (x\ln x)' = x^x \cdot \left(\ln x + x \cdot \frac{1}{x}\right) = x^x(\ln x + 1).
$$

### Solución 12

Supongamos $f, g$ diferenciables y no nulas en un entorno. Entonces:

$$
(\ln|fg|)' = \frac{(fg)'}{fg}.
$$

Por otro lado, $\ln|fg| = \ln|f| + \ln|g|$, así que:

$$
(\ln|fg|)' = \frac{f'}{f} + \frac{g'}{g} = \frac{f'g + fg'}{fg}.
$$

Igualando ambas expresiones:

$$
\frac{(fg)'}{fg} = \frac{f'g + fg'}{fg} \implies (fg)' = f'g + fg'. \qquad \blacksquare
$$

### Solución 13

Composición de dos exponenciales. Con $u = e^x$:

$$
f'(x) = e^{e^x} \cdot e^x = e^{e^x + x}.
$$

### Solución 14

Escribimos $(g(x))^n = e^{n\ln g(x)}$. Por la regla de la cadena:

$$
f'(x) = e^{n\ln g(x)} \cdot n \cdot \frac{g'(x)}{g(x)} = n\,(g(x))^n \cdot \frac{g'(x)}{g(x)} = n\,(g(x))^{n-1}\,g'(x).
$$

Esta es la **regla de la potencia generalizada**: $(g^n)' = n\,g^{n-1}\,g'$.

### Solución 15

Sea $u(x) = \frac{x-1}{x+1}$. Derivamos $u$:

$$
u'(x) = \frac{(x+1) - (x-1)}{(x+1)^2} = \frac{2}{(x+1)^2}.
$$

Ahora $1 + u^2 = 1 + \frac{(x-1)^2}{(x+1)^2} = \frac{(x+1)^2 + (x-1)^2}{(x+1)^2}$.

Calculamos el numerador: $(x+1)^2 + (x-1)^2 = 2x^2 + 2$. Luego:

$$
f'(x) = \frac{1}{1+u^2} \cdot u' = \frac{(x+1)^2}{2(x^2+1)} \cdot \frac{2}{(x+1)^2} = \frac{1}{x^2+1}.
$$

Esto coincide con $(\arctan x)' = 1/(1+x^2)$. De hecho, se puede verificar que $\arctan\!\left(\frac{x-1}{x+1}\right) = \arctan x - \frac{\pi}{4}$ para $x > -1$, lo que explica la simplificación.
