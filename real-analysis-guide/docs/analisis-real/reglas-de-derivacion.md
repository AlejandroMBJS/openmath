---
title: Reglas de derivación
description: Demostración rigurosa y práctica operativa de las reglas algebraicas de derivación — suma, producto, cociente, potencias, exponencial y logaritmo.
---

# Reglas de derivación

## Motivación e intuición

Calcular derivadas directamente desde la definición de límite es factible para funciones sencillas, pero se vuelve engorroso rápidamente. Las **reglas de derivación** permiten descomponer la derivada de expresiones complicadas en operaciones elementales sobre derivadas más simples. Estas reglas no son trucos de cálculo: cada una tiene una demostración rigurosa que se apoya en la definición de derivada y en las propiedades del límite.

En este tema establecemos las reglas fundamentales — linealidad, producto (Leibniz), cociente, potencia entera, y las derivadas de $e^x$ y $\ln x$ — con demostración completa en cada caso. La regla de la cadena, por su importancia y sutileza, se trata en un tema aparte.

## Prerrequisitos

- Definición de derivada y diferenciabilidad (tema **Derivada**).
- Álgebra de límites (tema **Convergencia de sucesiones** y **Límites $\varepsilon$-$\delta$**).
- Continuidad de funciones diferenciables.
- Propiedades básicas de la función exponencial y el logaritmo natural.

## Definiciones formales

Recordamos que $f$ es **diferenciable** en $a$ si existe

$$
f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}.
$$

### Notación de incremento

Si $f$ es diferenciable en $a$, podemos escribir

$$
f(a+h) = f(a) + f'(a)\,h + r(h),
$$

donde $r(h)/h \to 0$ cuando $h \to 0$. Esta descomposición es la **aproximación lineal** de $f$ en $a$ y será la herramienta central en varias demostraciones.

## Interpretación en lenguaje natural

La idea detrás de todas las reglas es la misma: si conocemos cómo cambian las partes de una expresión, podemos deducir cómo cambia el todo. La regla del producto, por ejemplo, dice que el cambio del producto $fg$ se debe a dos contribuciones: $f$ cambia mientras $g$ se queda «casi constante», y $g$ cambia mientras $f$ se queda «casi constante». La descomposición en incrementos formaliza este argumento intuitivo.

## Ejemplos básicos

### Ejemplo 1 — Derivada de una constante

Sea $f(x) = c$ para todo $x$. Entonces

$$
f'(a) = \lim_{h \to 0} \frac{c - c}{h} = 0.
$$

### Ejemplo 2 — Derivada de la identidad

Sea $f(x) = x$. Entonces

$$
f'(a) = \lim_{h \to 0} \frac{(a+h) - a}{h} = 1.
$$

### Ejemplo 3 — Derivada de $x^2$ por regla del producto

Usando $(x \cdot x)' = x' \cdot x + x \cdot x' = 1 \cdot x + x \cdot 1 = 2x$.

### Ejemplo 4 — Derivada de $1/x$ por regla del cociente

Para $f(x) = 1/x$ con $x \neq 0$:

$$
f'(x) = \frac{0 \cdot x - 1 \cdot 1}{x^2} = -\frac{1}{x^2}.
$$

## Ejemplos finos y contraejemplos

### Ejemplo 5 — La regla del producto no es $(fg)' = f'g'$

Un error frecuente. Tomemos $f(x) = x$ y $g(x) = x$. Si fuera $(fg)' = f'g'$, obtendríamos $(x^2)' = 1 \cdot 1 = 1$, pero la derivada correcta es $2x$.

### Ejemplo 6 — Cociente con denominador que se anula

La regla del cociente exige $g(a) \neq 0$. La función $h(x) = x/x$ está definida para $x \neq 0$ y coincide con la constante $1$, cuya derivada es $0$. Intentar aplicar la regla del cociente «formalmente» en $x = 0$ no tiene sentido porque $g(0) = 0$.

### Ejemplo 7 — Derivada de $x^n$ para $n$ negativo

Para $n \in \mathbb{Z}$ con $n < 0$, escribimos $x^n = 1/x^{-n}$ y la regla del cociente da

$$
(x^n)' = \frac{0 \cdot x^{-n} - 1 \cdot (-n)x^{-n-1}}{(x^{-n})^2} = \frac{n\,x^{-n-1}}{x^{-2n}} = n\,x^{n-1},
$$

válido para $x \neq 0$. La fórmula $n\,x^{n-1}$ se extiende a todo $n \in \mathbb{Z}$.

## Proposiciones y teoremas

### Teorema 1 — Linealidad de la derivada

Sean $f, g$ diferenciables en $a$ y $\alpha, \beta \in \mathbb{R}$. Entonces $\alpha f + \beta g$ es diferenciable en $a$ y

$$
(\alpha f + \beta g)'(a) = \alpha\,f'(a) + \beta\,g'(a).
$$

### Teorema 2 — Regla del producto (Leibniz)

Sean $f, g$ diferenciables en $a$. Entonces $fg$ es diferenciable en $a$ y

$$
(fg)'(a) = f'(a)\,g(a) + f(a)\,g'(a).
$$

### Teorema 3 — Regla del cociente

Sean $f, g$ diferenciables en $a$ con $g(a) \neq 0$. Entonces $f/g$ es diferenciable en $a$ y

$$
\left(\frac{f}{g}\right)'(a) = \frac{f'(a)\,g(a) - f(a)\,g'(a)}{g(a)^2}.
$$

### Teorema 4 — Potencia entera

Para todo $n \in \mathbb{Z}$ y $f(x) = x^n$ (con $x \neq 0$ si $n < 0$):

$$
f'(x) = n\,x^{n-1}.
$$

### Teorema 5 — Derivada de la exponencial

La función $f(x) = e^x$ es diferenciable en todo $\mathbb{R}$ y

$$
(e^x)' = e^x.
$$

### Teorema 6 — Derivada del logaritmo natural

La función $f(x) = \ln x$ es diferenciable en $(0, \infty)$ y

$$
(\ln x)' = \frac{1}{x}.
$$

### Corolario — Derivada de $a^x$ y $\log_a x$

Para $a > 0$, $a \neq 1$:

$$
(a^x)' = a^x \ln a, \qquad (\log_a x)' = \frac{1}{x \ln a}.
$$

## Demostraciones completas

### Demostración del Teorema 1 (Linealidad)

$$
\frac{(\alpha f + \beta g)(a+h) - (\alpha f + \beta g)(a)}{h} = \alpha \cdot \frac{f(a+h)-f(a)}{h} + \beta \cdot \frac{g(a+h)-g(a)}{h}.
$$

Tomando límite cuando $h \to 0$ y usando el álgebra de límites:

$$
(\alpha f + \beta g)'(a) = \alpha\,f'(a) + \beta\,g'(a). \qquad \blacksquare
$$

### Demostración del Teorema 2 (Producto)

Escribimos el cociente incremental:

$$
\frac{f(a+h)\,g(a+h) - f(a)\,g(a)}{h}.
$$

Sumamos y restamos $f(a)\,g(a+h)$ en el numerador:

$$
= \frac{[f(a+h) - f(a)]\,g(a+h) + f(a)\,[g(a+h) - g(a)]}{h}.
$$

Separamos:

$$
= \frac{f(a+h) - f(a)}{h}\,g(a+h) + f(a)\,\frac{g(a+h)-g(a)}{h}.
$$

Cuando $h \to 0$:
- El primer cociente tiende a $f'(a)$.
- $g(a+h) \to g(a)$ porque $g$ es diferenciable (luego continua) en $a$.
- El segundo cociente tiende a $g'(a)$.

Por el álgebra de límites:

$$
(fg)'(a) = f'(a)\,g(a) + f(a)\,g'(a). \qquad \blacksquare
$$

### Demostración del Teorema 3 (Cociente)

Basta demostrar que $(1/g)'(a) = -g'(a)/g(a)^2$ y luego aplicar la regla del producto a $f \cdot (1/g)$.

Como $g(a) \neq 0$ y $g$ es continua en $a$, existe $\delta > 0$ tal que $g(a+h) \neq 0$ para $|h| < \delta$. Entonces:

$$
\frac{1/g(a+h) - 1/g(a)}{h} = \frac{g(a) - g(a+h)}{h \cdot g(a+h)\,g(a)} = -\frac{1}{g(a+h)\,g(a)} \cdot \frac{g(a+h)-g(a)}{h}.
$$

Cuando $h \to 0$: $g(a+h) \to g(a)$ y el cociente incremental de $g$ tiende a $g'(a)$. Luego:

$$
\left(\frac{1}{g}\right)'(a) = -\frac{g'(a)}{g(a)^2}.
$$

Aplicando la regla del producto a $f/g = f \cdot (1/g)$:

$$
\left(\frac{f}{g}\right)'(a) = f'(a) \cdot \frac{1}{g(a)} + f(a) \cdot \left(-\frac{g'(a)}{g(a)^2}\right) = \frac{f'(a)\,g(a) - f(a)\,g'(a)}{g(a)^2}. \qquad \blacksquare
$$

### Demostración del Teorema 4 (Potencia entera)

**Caso $n \geq 1$ por inducción.**

*Base:* $(x^1)' = 1 = 1 \cdot x^0$. ✓

*Paso inductivo:* Supongamos $(x^k)' = k\,x^{k-1}$. Entonces $x^{k+1} = x \cdot x^k$ y por la regla del producto:

$$
(x^{k+1})' = 1 \cdot x^k + x \cdot k\,x^{k-1} = x^k + k\,x^k = (k+1)\,x^k.
$$

**Caso $n = 0$:** $(x^0)' = (1)' = 0 = 0 \cdot x^{-1}$. ✓ (En $x \neq 0$.)

**Caso $n < 0$:** Sea $m = -n > 0$. Entonces $x^n = 1/x^m$ y por la regla del cociente:

$$
(x^n)' = -\frac{m\,x^{m-1}}{x^{2m}} = -m\,x^{-m-1} = n\,x^{n-1}. \qquad \blacksquare
$$

### Demostración del Teorema 5 (Exponencial)

Necesitamos el límite fundamental:

$$
\lim_{h \to 0} \frac{e^h - 1}{h} = 1.
$$

Este límite se puede establecer a partir de la definición de $e^x$ como $\sum_{k=0}^{\infty} x^k/k!$ o como $\lim_{n \to \infty}(1+x/n)^n$.

Con esto:

$$
\frac{e^{a+h} - e^a}{h} = e^a \cdot \frac{e^h - 1}{h} \xrightarrow{h \to 0} e^a \cdot 1 = e^a. \qquad \blacksquare
$$

### Demostración del Teorema 6 (Logaritmo natural)

Para $a > 0$:

$$
\frac{\ln(a+h) - \ln a}{h} = \frac{1}{h}\ln\!\left(\frac{a+h}{a}\right) = \frac{1}{h}\ln\!\left(1 + \frac{h}{a}\right).
$$

Hacemos el cambio $t = h/a$, de modo que $h = at$ y $t \to 0$ cuando $h \to 0$:

$$
= \frac{1}{at}\ln(1+t) = \frac{1}{a} \cdot \frac{\ln(1+t)}{t}.
$$

Usando el límite fundamental $\lim_{t \to 0}\frac{\ln(1+t)}{t} = 1$:

$$
(\ln a)' = \frac{1}{a}. \qquad \blacksquare
$$

### Demostración del Corolario ($a^x$ y $\log_a x$)

Escribimos $a^x = e^{x \ln a}$. Por la regla de la cadena (que se demuestra en el tema siguiente), con $u = x \ln a$:

$$
(a^x)' = e^{x \ln a} \cdot \ln a = a^x \ln a.
$$

Para $\log_a x = \frac{\ln x}{\ln a}$, por linealidad:

$$
(\log_a x)' = \frac{1}{\ln a} \cdot \frac{1}{x} = \frac{1}{x \ln a}. \qquad \blacksquare
$$

## Errores comunes

1. **Confundir $(fg)' = f'g'$**: La regla correcta es $(fg)' = f'g + fg'$.

2. **Olvidar el denominador al cuadrado en la regla del cociente**: Escribir $f'g - fg'$ sin dividir entre $g^2$.

3. **Aplicar la fórmula de potencia a exponenciales**: $(2^x)' \neq x \cdot 2^{x-1}$. La regla $n\,x^{n-1}$ es para la variable en la base con exponente constante. Para base constante con variable en el exponente se usa $(a^x)' = a^x \ln a$.

4. **Derivar $e^x$ como $x\,e^{x-1}$**: Misma confusión que el punto anterior. $(e^x)' = e^x$, no $x\,e^{x-1}$.

5. **Olvidar la condición $g(a) \neq 0$ en la regla del cociente**: La fórmula no se aplica en puntos donde el denominador se anula.

6. **Signo incorrecto en la regla del cociente**: El numerador es $f'g - fg'$ (no $fg' - f'g$). Un recurso mnemotécnico: la función «de arriba» se deriva primero.

## Resumen operativo

| Regla | Fórmula |
|---|---|
| Constante | $(c)' = 0$ |
| Linealidad | $(\alpha f + \beta g)' = \alpha f' + \beta g'$ |
| Producto | $(fg)' = f'g + fg'$ |
| Cociente | $(f/g)' = (f'g - fg')/g^2$ |
| Potencia entera | $(x^n)' = nx^{n-1}$ |
| Exponencial | $(e^x)' = e^x$ |
| General $a^x$ | $(a^x)' = a^x \ln a$ |
| Logaritmo | $(\ln x)' = 1/x$ |
| General $\log_a$ | $(\log_a x)' = 1/(x \ln a)$ |

## Ejercicios

### Ejercicio 1

Derive $f(x) = 3x^5 - 2x^3 + 7x - 4$.

### Ejercicio 2

Derive $f(x) = x^2 e^x$.

### Ejercicio 3

Derive $f(x) = \dfrac{x^2 + 1}{x^2 - 1}$ para $x \neq \pm 1$.

### Ejercicio 4

Derive $f(x) = x^3 \ln x$ para $x > 0$.

### Ejercicio 5

Derive $f(x) = \dfrac{e^x}{x}$ para $x \neq 0$.

### Ejercicio 6

Derive $f(x) = (x^2 + 1)(x^3 - x)$.

### Ejercicio 7

Derive $f(x) = \dfrac{\ln x}{x^2}$ para $x > 0$.

### Ejercicio 8

Derive $f(x) = 5^x + x^5$.

### Ejercicio 9

Derive $f(x) = \dfrac{1}{x^3 + x}$ para $x \neq 0$ (y $x^3 + x \neq 0$).

### Ejercicio 10

Sea $f(x) = x^2 \cdot 2^x$. Calcule $f'(x)$ y encuentre los puntos donde $f'(x) = 0$.

### Ejercicio 11

Derive $f(x) = \dfrac{x\,e^x}{x+1}$ para $x \neq -1$.

### Ejercicio 12

Demuestre que si $f$ es diferenciable y $f(x) \neq 0$ para todo $x$ en un intervalo, entonces

$$
\left(\frac{1}{f}\right)' = -\frac{f'}{f^2}.
$$

### Ejercicio 13

Use la regla del producto repetida para demostrar que si $f, g, h$ son diferenciables en $a$, entonces

$$
(fgh)'(a) = f'(a)\,g(a)\,h(a) + f(a)\,g'(a)\,h(a) + f(a)\,g(a)\,h'(a).
$$

### Ejercicio 14

Derive $f(x) = x^2 \log_2 x$ para $x > 0$.

### Ejercicio 15

Sea $P(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0$ un polinomio de grado $n$. Demuestre que $P'(x) = n a_n x^{n-1} + (n-1)a_{n-1}x^{n-2} + \cdots + a_1$.

## Soluciones

### Solución 1

Por linealidad y la regla de la potencia:

$$
f'(x) = 3 \cdot 5x^4 - 2 \cdot 3x^2 + 7 \cdot 1 - 0 = 15x^4 - 6x^2 + 7.
$$

### Solución 2

Regla del producto con $u = x^2$, $v = e^x$:

$$
f'(x) = 2x \cdot e^x + x^2 \cdot e^x = e^x(2x + x^2) = x\,e^x(x+2).
$$

### Solución 3

Regla del cociente con $u = x^2+1$, $v = x^2-1$:

$$
f'(x) = \frac{2x(x^2-1) - (x^2+1) \cdot 2x}{(x^2-1)^2} = \frac{2x[(x^2-1)-(x^2+1)]}{(x^2-1)^2} = \frac{2x \cdot (-2)}{(x^2-1)^2} = \frac{-4x}{(x^2-1)^2}.
$$

### Solución 4

Regla del producto con $u = x^3$, $v = \ln x$:

$$
f'(x) = 3x^2 \ln x + x^3 \cdot \frac{1}{x} = 3x^2 \ln x + x^2 = x^2(3\ln x + 1).
$$

### Solución 5

Regla del cociente con $u = e^x$, $v = x$:

$$
f'(x) = \frac{e^x \cdot x - e^x \cdot 1}{x^2} = \frac{e^x(x-1)}{x^2}.
$$

### Solución 6

Regla del producto con $u = x^2+1$, $v = x^3-x$:

$$
f'(x) = 2x(x^3 - x) + (x^2+1)(3x^2 - 1).
$$

Expandiendo:

$$
= 2x^4 - 2x^2 + 3x^4 - x^2 + 3x^2 - 1 = 5x^4 - 1.
$$

Verificación directa: $f(x) = x^5 - x^3 + x^3 - x = x^5 - x$, luego $f'(x) = 5x^4 - 1$. ✓

### Solución 7

Regla del cociente con $u = \ln x$, $v = x^2$:

$$
f'(x) = \frac{(1/x) \cdot x^2 - \ln x \cdot 2x}{x^4} = \frac{x - 2x\ln x}{x^4} = \frac{1 - 2\ln x}{x^3}.
$$

### Solución 8

Por linealidad y las reglas de potencia y exponencial:

$$
f'(x) = 5^x \ln 5 + 5x^4.
$$

### Solución 9

Escribimos $f(x) = (x^3 + x)^{-1}$. Usando la regla del cociente con $u = 1$, $v = x^3 + x$:

$$
f'(x) = \frac{0 \cdot (x^3+x) - 1 \cdot (3x^2+1)}{(x^3+x)^2} = \frac{-(3x^2+1)}{(x^3+x)^2}.
$$

### Solución 10

Regla del producto con $u = x^2$, $v = 2^x$:

$$
f'(x) = 2x \cdot 2^x + x^2 \cdot 2^x \ln 2 = 2^x\,x\,(2 + x\ln 2).
$$

$f'(x) = 0$ cuando $2^x\,x\,(2 + x\ln 2) = 0$. Como $2^x > 0$ siempre, las soluciones son $x = 0$ y $x = -2/\ln 2$.

### Solución 11

Escribimos $f(x) = \frac{u}{v}$ con $u = x\,e^x$ y $v = x+1$. Primero:

$$
u' = e^x + x\,e^x = e^x(1+x), \qquad v' = 1.
$$

Regla del cociente:

$$
f'(x) = \frac{e^x(1+x)(x+1) - x\,e^x \cdot 1}{(x+1)^2} = \frac{e^x[(1+x)^2 - x]}{(x+1)^2} = \frac{e^x(x^2 + x + 1)}{(x+1)^2}.
$$

### Solución 12

Es un caso particular de la regla del cociente con numerador constante igual a $1$:

$$
\left(\frac{1}{f}\right)'(a) = \frac{0 \cdot f(a) - 1 \cdot f'(a)}{f(a)^2} = -\frac{f'(a)}{f(a)^2}. \qquad \blacksquare
$$

### Solución 13

Escribimos $fgh = (fg) \cdot h$ y aplicamos la regla del producto:

$$
(fgh)' = (fg)' \cdot h + (fg) \cdot h'.
$$

Ahora $(fg)' = f'g + fg'$, luego:

$$
(fgh)' = (f'g + fg') \cdot h + fg \cdot h' = f'gh + fg'h + fgh'. \qquad \blacksquare
$$

### Solución 14

Escribimos $\log_2 x = \frac{\ln x}{\ln 2}$. Entonces:

$$
f(x) = \frac{x^2 \ln x}{\ln 2}.
$$

Regla del producto (el factor $1/\ln 2$ es constante):

$$
f'(x) = \frac{1}{\ln 2}\left(2x\,\ln x + x^2 \cdot \frac{1}{x}\right) = \frac{x(2\ln x + 1)}{\ln 2} = x(2\log_2 x + \log_2 e).
$$

Simplificando con $1/\ln 2 = \log_2 e$:

$$
f'(x) = x\log_2 e\,(2\ln x + 1) = x\left(\frac{2\ln x + 1}{\ln 2}\right).
$$

### Solución 15

Por linealidad:

$$
P'(x) = \sum_{k=0}^{n} a_k (x^k)'.
$$

Para $k \geq 1$, $(x^k)' = kx^{k-1}$ por la regla de la potencia. Para $k = 0$, $(a_0)' = 0$. Luego:

$$
P'(x) = \sum_{k=1}^{n} k\,a_k\,x^{k-1} = n\,a_n\,x^{n-1} + (n-1)a_{n-1}\,x^{n-2} + \cdots + a_1. \qquad \blacksquare
$$
