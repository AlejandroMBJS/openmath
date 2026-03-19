---
title: Derivada
description: Definicion de derivada como limite del cociente incremental, derivabilidad implica continuidad, teoremas de Rolle, valor medio y Darboux. Incluye 15 ejercicios resueltos.
---

# Derivada

## 1. Motivacion e intuicion

La derivada mide la velocidad de cambio instantanea de una funcion. Si $f(x)$ describe la posicion de un objeto en el instante $x$, el cociente $\frac{f(x+h) - f(x)}{h}$ mide la velocidad media en el intervalo $[x, x+h]$. Al tomar $h \to 0$, se obtiene la velocidad instantanea: la derivada $f'(x)$.

Geometricamente, la derivada es la pendiente de la recta tangente a la grafica de $f$ en el punto $(x, f(x))$. El cociente incremental es la pendiente de una recta secante, y la derivada es el limite de esas pendientes cuando los dos puntos se acercan.

La derivada conecta la topologia y la convergencia (a traves de limites) con la geometria y la velocidad de cambio. Es la herramienta central del calculo diferencial y la base de los teoremas que relacionan el comportamiento local de una funcion (derivada) con su comportamiento global (crecimiento, extremos, concavidad).

## 2. Prerrequisitos

**Limites.** Definicion $\varepsilon$-$\delta$ de $\lim_{h\to 0}$ y algebra de limites.

**Continuidad.** $f$ continua en $a$ si $\lim_{x\to a} f(x) = f(a)$.

**Propiedades de los intervalos cerrados.** Compacidad, valor extremo de Weierstrass, teorema del valor intermedio.

## 3. Definiciones formales

**Definicion 3.1 (derivada en un punto).** Sea $f$ definida en un entorno de $a$. La **derivada** de $f$ en $a$ es

$$f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h},$$

si el limite existe y es finito. Equivalentemente,

$$f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}.$$

Si este limite existe, $f$ es **derivable** (o diferenciable) en $a$.

**Definicion 3.2 (derivadas laterales).** La **derivada por la derecha** es $f'_+(a) = \lim_{h\to 0^+}\frac{f(a+h)-f(a)}{h}$ y la **derivada por la izquierda** es $f'_-(a) = \lim_{h\to 0^-}\frac{f(a+h)-f(a)}{h}$. $f$ es derivable en $a$ si y solo si ambas derivadas laterales existen y coinciden.

**Definicion 3.3 (funcion derivada).** Si $f$ es derivable en todo punto de un intervalo $I$, la **funcion derivada** $f': I \to \mathbb{R}$ asigna a cada $x \in I$ el valor $f'(x)$.

**Definicion 3.4 (diferenciabilidad y aproximacion lineal).** $f$ es derivable en $a$ si y solo si existe $L \in \mathbb{R}$ y una funcion $r(h)$ con $r(h)/h \to 0$ cuando $h \to 0$, tales que

$$f(a + h) = f(a) + Lh + r(h).$$

En ese caso, $L = f'(a)$.

**Definicion 3.5 (punto critico).** Si $f$ es derivable en $a$ y $f'(a) = 0$, se dice que $a$ es un **punto critico** de $f$.

**Definicion 3.6 (extremo local).** $f$ tiene un **maximo local** en $a$ si existe $\delta > 0$ con $f(x) \leq f(a)$ para $|x - a| < \delta$. Analogamente para minimo local.

## 4. Interpretacion en lenguaje natural

La derivada responde a la pregunta: si cambio la entrada en una cantidad muy pequena, cuanto cambia la salida? La respuesta es proporcional al cambio en la entrada, y la constante de proporcionalidad es la derivada.

La aproximacion lineal dice que cerca de $a$, $f$ se comporta como la recta tangente: $f(x) \approx f(a) + f'(a)(x - a)$. El error $r(h)$ es de orden menor que $h$, es decir, desaparece mas rapido que $h$.

Derivabilidad implica continuidad pero no al reves. La derivada puede no existir en puntos donde hay picos ($|x|$ en $0$), discontinuidades de la derivada, o cuspides.

## 5. Ejemplos basicos

**Ejemplo 5.1 ($f(x) = x^n$).** $f'(a) = \lim_{h\to 0}\frac{(a+h)^n - a^n}{h}$. Usando la expansion binomial: $(a+h)^n = a^n + na^{n-1}h + O(h^2)$. Luego $f'(a) = na^{n-1}$.

**Ejemplo 5.2 ($f(x) = c$ constante).** $f'(a) = \lim_{h\to 0}\frac{c - c}{h} = 0$.

**Ejemplo 5.3 ($f(x) = \sin x$).** $f'(a) = \lim_{h\to 0}\frac{\sin(a+h) - \sin a}{h} = \lim_{h\to 0}\frac{2\cos(a+h/2)\sin(h/2)}{h} = \cos a$.

**Ejemplo 5.4 ($f(x) = e^x$).** $f'(a) = \lim_{h\to 0}\frac{e^{a+h}-e^a}{h} = e^a\lim_{h\to 0}\frac{e^h - 1}{h} = e^a$.

**Ejemplo 5.5 ($f(x) = 1/x$ para $x \neq 0$).** $f'(a) = \lim_{h\to 0}\frac{1/(a+h) - 1/a}{h} = \lim_{h\to 0}\frac{-h}{ah(a+h)} = \frac{-1}{a^2}$.

## 6. Ejemplos finos y contraejemplos

**Ejemplo 6.1 ($|x|$ no es derivable en $0$).** $f'_+(0) = \lim_{h\to 0^+}\frac{h}{h} = 1$ y $f'_-(0) = \lim_{h\to 0^-}\frac{-h}{h} = -1$. Las derivadas laterales existen pero difieren, asi que $f$ no es derivable en $0$.

**Ejemplo 6.2 (derivable implica continua).** Si $f'(a)$ existe, entonces $f(a+h) - f(a) = \frac{f(a+h)-f(a)}{h}\cdot h \to f'(a)\cdot 0 = 0$, asi que $f$ es continua en $a$.

**Ejemplo 6.3 (continua pero no derivable en ningun punto).** La funcion de Weierstrass $W(x) = \sum_{n=0}^{\infty} a^n\cos(b^n\pi x)$ con $0 < a < 1$, $b$ impar, $ab > 1 + \frac{3\pi}{2}$, es continua en todo punto pero derivable en ninguno.

**Ejemplo 6.4 ($x^2\sin(1/x)$ derivable en $0$ pero la derivada no es continua).** Sea $f(x) = x^2\sin(1/x)$ para $x \neq 0$ y $f(0) = 0$. Entonces $f'(0) = \lim_{h\to 0}\frac{h^2\sin(1/h)}{h} = \lim_{h\to 0}h\sin(1/h) = 0$. Pero para $x \neq 0$: $f'(x) = 2x\sin(1/x) - \cos(1/x)$, que no tiene limite en $0$ (por el termino $\cos(1/x)$). Asi, $f'$ existe en todo punto pero no es continua en $0$.

**Ejemplo 6.5 (extremo local con derivada cero).** $f(x) = x^2$ tiene minimo local en $0$, y $f'(0) = 0$. Pero $f'(0) = 0$ no garantiza extremo: $f(x) = x^3$ tiene $f'(0) = 0$ pero $0$ no es extremo.

## 7. Proposiciones y teoremas

### Proposicion 7.1 (derivabilidad implica continuidad)

**Enunciado.** *Si $f$ es derivable en $a$, entonces $f$ es continua en $a$.*

### Proposicion 7.2 (algebra de derivadas)

**Enunciado.** *Si $f$ y $g$ son derivables en $a$:*
1. *$(f + g)'(a) = f'(a) + g'(a)$.*
2. *$(cf)'(a) = cf'(a)$.*
3. *$(fg)'(a) = f'(a)g(a) + f(a)g'(a)$ (regla del producto).*
4. *Si $g(a) \neq 0$, $(f/g)'(a) = \frac{f'(a)g(a) - f(a)g'(a)}{g(a)^2}$ (regla del cociente).*

### Proposicion 7.3 (condicion necesaria de extremo local)

**Enunciado.** *Si $f$ tiene un extremo local en $a$ y $f$ es derivable en $a$, entonces $f'(a) = 0$.*

### Teorema 7.4 (Rolle)

**Enunciado.** *Si $f: [a, b] \to \mathbb{R}$ es continua en $[a, b]$, derivable en $(a, b)$, y $f(a) = f(b)$, entonces existe $c \in (a, b)$ con $f'(c) = 0$.*

### Teorema 7.5 (valor medio de Lagrange)

**Enunciado.** *Si $f: [a, b] \to \mathbb{R}$ es continua en $[a, b]$ y derivable en $(a, b)$, entonces existe $c \in (a, b)$ con*

$$f'(c) = \frac{f(b) - f(a)}{b - a}.$$

### Teorema 7.6 (Darboux — valor intermedio para derivadas)

**Enunciado.** *Si $f$ es derivable en $[a, b]$, entonces $f'$ tiene la propiedad del valor intermedio: si $f'(a) \neq f'(b)$, entonces para todo $\lambda$ entre $f'(a)$ y $f'(b)$ existe $c \in (a, b)$ con $f'(c) = \lambda$.*

### Corolario 7.7 (criterio de monotonia)

**Enunciado.** *Si $f$ es derivable en $(a, b)$:*
- *$f' \geq 0$ en $(a, b)$ $\iff$ $f$ es creciente en $(a, b)$.*
- *$f' > 0$ en $(a, b)$ $\implies$ $f$ es estrictamente creciente.*

## 8. Demostraciones completas

### Demostracion de la proposicion 7.1

$\lim_{x\to a}[f(x) - f(a)] = \lim_{x\to a}\frac{f(x)-f(a)}{x-a}\cdot(x-a) = f'(a) \cdot 0 = 0$. Luego $f(x) \to f(a)$. $\blacksquare$

### Demostracion de la proposicion 7.2 (producto)

$$\frac{f(a+h)g(a+h) - f(a)g(a)}{h} = f(a+h)\frac{g(a+h)-g(a)}{h} + g(a)\frac{f(a+h)-f(a)}{h}.$$

Cuando $h \to 0$: $f(a+h) \to f(a)$ (por derivabilidad implica continuidad), $\frac{g(a+h)-g(a)}{h} \to g'(a)$, y $\frac{f(a+h)-f(a)}{h} \to f'(a)$.

Luego $(fg)'(a) = f(a)g'(a) + g(a)f'(a)$. $\blacksquare$

### Demostracion de la proposicion 7.3

Supongamos $f$ tiene maximo local en $a$. Existe $\delta > 0$ con $f(x) \leq f(a)$ para $|x-a| < \delta$.

Para $0 < h < \delta$: $\frac{f(a+h)-f(a)}{h} \leq 0$. Tomando $h \to 0^+$: $f'_+(a) \leq 0$.

Para $-\delta < h < 0$: $\frac{f(a+h)-f(a)}{h} \geq 0$. Tomando $h \to 0^-$: $f'_-(a) \geq 0$.

Como $f$ es derivable, $f'_+(a) = f'_-(a) = f'(a)$. De $f'(a) \leq 0$ y $f'(a) \geq 0$: $f'(a) = 0$. $\blacksquare$

### Demostracion del teorema 7.4 (Rolle)

Si $f$ es constante en $[a, b]$, $f' = 0$ en todo $(a, b)$ y cualquier $c$ vale.

Si no, como $f$ es continua en $[a, b]$ (compacto), alcanza su maximo $M$ y su minimo $m$. Como $f(a) = f(b)$ y $f$ no es constante, al menos uno de $M, m$ se alcanza en un punto interior $c \in (a, b)$. Ese $c$ es un extremo local y $f$ es derivable ahi, luego $f'(c) = 0$ por la proposicion 7.3. $\blacksquare$

### Demostracion del teorema 7.5 (valor medio)

Defino $g(x) = f(x) - \frac{f(b)-f(a)}{b-a}(x - a)$. Entonces $g$ es continua en $[a,b]$, derivable en $(a,b)$, y $g(a) = f(a)$, $g(b) = f(a)$. Por Rolle, existe $c \in (a,b)$ con $g'(c) = 0$:

$$0 = g'(c) = f'(c) - \frac{f(b)-f(a)}{b-a},$$

de donde $f'(c) = \frac{f(b)-f(a)}{b-a}$. $\blacksquare$

### Demostracion del teorema 7.6 (Darboux)

Supongamos $f'(a) < \lambda < f'(b)$ (el caso $f'(a) > \lambda > f'(b)$ es analogo). Defino $g(x) = f(x) - \lambda x$. Entonces $g'(a) = f'(a) - \lambda < 0$ y $g'(b) = f'(b) - \lambda > 0$.

$g$ es continua en $[a,b]$ (derivable implica continua), luego alcanza su minimo en algun $c \in [a,b]$.

$g'(a) < 0$ implica que $g$ es decreciente en un entorno derecho de $a$, asi que $c \neq a$.

$g'(b) > 0$ implica que $g$ es decreciente en un entorno izquierdo de $b$ (viniendo desde $b$ hacia la izquierda, $g$ decrece), asi que $c \neq b$.

Luego $c \in (a, b)$. Como $c$ es minimo y $f$ es derivable: $g'(c) = 0$, es decir, $f'(c) = \lambda$. $\blacksquare$

### Demostracion del corolario 7.7 ($f' \geq 0 \Rightarrow f$ creciente)

Sean $x_1 < x_2$ en $(a, b)$. Por el TVM, existe $c \in (x_1, x_2)$ con $f(x_2) - f(x_1) = f'(c)(x_2 - x_1)$. Como $f'(c) \geq 0$ y $x_2 - x_1 > 0$, se tiene $f(x_2) \geq f(x_1)$. $\blacksquare$

## 9. Errores comunes

**Error 9.1 (creer que continuidad implica derivabilidad).** $|x|$ es continua en $0$ pero no derivable.

**Error 9.2 (creer que $f'(a) = 0$ implica extremo local).** $f(x) = x^3$: $f'(0) = 0$ pero $0$ no es extremo.

**Error 9.3 (creer que $f'$ es continua).** El ejemplo 6.4 muestra una funcion derivable cuya derivada no es continua. Sin embargo, $f'$ siempre satisface la propiedad del valor intermedio (Darboux).

**Error 9.4 (aplicar el TVM sin verificar hipotesis).** $f$ debe ser continua en $[a,b]$ y derivable en $(a,b)$. Si $f$ no es derivable en algun punto interior, el TVM no aplica.

**Error 9.5 (creer que derivabilidad en un abierto implica derivada acotada).** $f(x) = x^2$ en $\mathbb{R}$: $f'(x) = 2x$ es no acotada.

**Error 9.6 (confundir el TVM con encontrar un $c$ explicito).** El TVM garantiza existencia de $c$, no da su valor.

## 10. Resumen operativo

| Resultado | Hipotesis | Conclusion |
|-----------|-----------|------------|
| Derivabilidad $\Rightarrow$ continuidad | $f'(a)$ existe | $f$ continua en $a$ |
| Extremo local + derivable | Extremo en $a$, $f'(a)$ existe | $f'(a) = 0$ |
| Rolle | $f \in C[a,b]$, derivable en $(a,b)$, $f(a)=f(b)$ | $\exists c: f'(c)=0$ |
| Valor medio | $f \in C[a,b]$, derivable en $(a,b)$ | $\exists c: f'(c)=\frac{f(b)-f(a)}{b-a}$ |
| Darboux | $f$ derivable en $[a,b]$ | $f'$ tiene valor intermedio |
| Monotonia | $f' \geq 0$ en $(a,b)$ | $f$ creciente |

**Derivadas basicas:**

| $f(x)$ | $f'(x)$ |
|---------|---------|
| $x^n$ | $nx^{n-1}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $1/x$ |
| $1/x$ | $-1/x^2$ |

## 11. Ejercicios

**Ejercicio 1.** Calcular $f'(x)$ por definicion para $f(x) = x^3$.

**Ejercicio 2.** Demostrar que $f(x) = x|x|$ es derivable en $0$ y calcular $f'(0)$.

**Ejercicio 3.** Demostrar que $f(x) = \sqrt[3]{x}$ no es derivable en $0$.

**Ejercicio 4.** Usar el teorema de Rolle para demostrar que $p(x) = x^3 - 3x + 1$ tiene al menos dos raices reales en $[-2, 2]$ implica que $p'$ se anula en al menos un punto de $(-2, 2)$.

**Ejercicio 5.** Usar el TVM para demostrar que $|\sin x - \sin y| \leq |x - y|$ para todo $x, y$.

**Ejercicio 6.** Sea $f$ derivable en $[0, 1]$ con $f(0) = 0$ y $f(1) = 1$. Demostrar que existe $c$ con $f'(c) = 1$.

**Ejercicio 7.** Demostrar que si $f'(x) = 0$ para todo $x \in (a, b)$, entonces $f$ es constante en $(a, b)$.

**Ejercicio 8.** Sea $f(x) = x^2\sin(1/x)$ para $x \neq 0$ y $f(0) = 0$. Calcular $f'(0)$ por definicion.

**Ejercicio 9.** Demostrar que la ecuacion $x^5 + x = 5$ tiene exactamente una solucion real.

**Ejercicio 10.** Demostrar que si $f$ es derivable en $(a, b)$ y $f'$ nunca se anula, entonces $f$ es inyectiva.

**Ejercicio 11.** Usar el TVM para demostrar que $e^x \geq 1 + x$ para todo $x \in \mathbb{R}$.

**Ejercicio 12.** Demostrar la regla del cociente a partir de la regla del producto y la derivada de $1/g$.

**Ejercicio 13.** Demostrar que si $f$ es derivable en $(a, b)$ y $\lim_{x\to a^+} f'(x) = L$, entonces $f'_+(a) = L$ (suponiendo $f$ continua en $a$).

**Ejercicio 14.** Sea $f$ derivable dos veces en $(a, b)$ con $f''(x) > 0$. Demostrar que $f$ es estrictamente convexa: $f\!\left(\frac{x+y}{2}\right) < \frac{f(x)+f(y)}{2}$ para $x \neq y$.

**Ejercicio 15.** Demostrar que entre dos ceros consecutivos de $f$ derivable hay al menos un cero de $f'$.

## 12. Soluciones completas

### Solucion 1

$$f'(x) = \lim_{h\to 0}\frac{(x+h)^3 - x^3}{h} = \lim_{h\to 0}\frac{3x^2h + 3xh^2 + h^3}{h} = \lim_{h\to 0}(3x^2 + 3xh + h^2) = 3x^2. \quad \blacksquare$$

### Solucion 2

$f(x) = x|x|$. Para $x > 0$: $f(x) = x^2$. Para $x < 0$: $f(x) = -x^2$. $f(0) = 0$.

$$f'(0) = \lim_{h\to 0}\frac{h|h| - 0}{h} = \lim_{h\to 0}|h| = 0.$$

$f$ es derivable en $0$ con $f'(0) = 0$. $\blacksquare$

### Solucion 3

$$\frac{f(h) - f(0)}{h} = \frac{h^{1/3}}{h} = h^{-2/3} = \frac{1}{h^{2/3}} \to +\infty \text{ cuando } h \to 0.$$

El limite es infinito, luego $f$ no es derivable en $0$. $\blacksquare$

### Solucion 4

$p(-2) = -8 + 6 + 1 = -1$, $p(0) = 1$, $p(2) = 8 - 6 + 1 = 3$.

Como $p(-2) < 0 < p(0)$, por el TVI existe $r_1 \in (-2, 0)$ con $p(r_1) = 0$.

$p$ tambien satisface $p(-2) = -1 < 0$ y $p(2) = 3 > 0$. Si hay dos raices $r_1 < r_2$ en $[-2, 2]$, por Rolle existe $c \in (r_1, r_2)$ con $p'(c) = 0$.

Directamente: $p'(x) = 3x^2 - 3 = 3(x^2 - 1)$, que se anula en $x = \pm 1 \in (-2, 2)$. $\blacksquare$

### Solucion 5

Si $x = y$, la desigualdad es trivial. Si $x \neq y$, por el TVM existe $c$ entre $x$ e $y$ con $\sin x - \sin y = \cos(c)(x - y)$. Luego $|\sin x - \sin y| = |\cos c||x-y| \leq |x-y|$. $\blacksquare$

### Solucion 6

$f$ es continua en $[0,1]$ y derivable en $(0,1)$. Por el TVM: $f'(c) = \frac{f(1)-f(0)}{1-0} = \frac{1-0}{1} = 1$. $\blacksquare$

### Solucion 7

Sean $x_1, x_2 \in (a, b)$ con $x_1 < x_2$. Por el TVM: $f(x_2) - f(x_1) = f'(c)(x_2 - x_1)$ para algun $c$. Como $f'(c) = 0$: $f(x_2) = f(x_1)$. Como esto vale para todo par, $f$ es constante. $\blacksquare$

### Solucion 8

$$f'(0) = \lim_{h\to 0}\frac{h^2\sin(1/h) - 0}{h} = \lim_{h\to 0}h\sin(1/h) = 0,$$

porque $|h\sin(1/h)| \leq |h| \to 0$. $\blacksquare$

### Solucion 9

Sea $g(x) = x^5 + x - 5$. $g(1) = -3 < 0$ y $g(2) = 29 > 0$. Por el TVI, existe al menos una raiz en $(1, 2)$.

Para unicidad: $g'(x) = 5x^4 + 1 > 0$ para todo $x$. Luego $g$ es estrictamente creciente, y una funcion estrictamente creciente tiene a lo sumo una raiz. $\blacksquare$

### Solucion 10

Supongamos $f(x_1) = f(x_2)$ con $x_1 < x_2$. Por Rolle, existe $c \in (x_1, x_2)$ con $f'(c) = 0$, contradiciendo que $f'$ nunca se anula. Luego $f$ es inyectiva. $\blacksquare$

### Solucion 11

**Caso $x \geq 0$:** Sea $g(t) = e^t$ en $[0, x]$. Por el TVM: $e^x - e^0 = e^c \cdot x$ para algun $c \in (0, x)$. Como $e^c \geq e^0 = 1$: $e^x - 1 \geq x$, es decir, $e^x \geq 1 + x$.

**Caso $x < 0$:** Sea $h(x) = e^x - 1 - x$. $h(0) = 0$, $h'(x) = e^x - 1 < 0$ para $x < 0$. Luego $h$ es decreciente en $(-\infty, 0)$, y como $h(0) = 0$, se tiene $h(x) > 0$ para $x < 0$. $\blacksquare$

### Solucion 12

Primero: $(1/g)'(a) = \lim_{h\to 0}\frac{1/g(a+h) - 1/g(a)}{h} = \lim_{h\to 0}\frac{g(a)-g(a+h)}{h \cdot g(a+h)g(a)} = \frac{-g'(a)}{g(a)^2}$.

Luego: $(f/g)'(a) = (f \cdot (1/g))'(a) = f'(a)\cdot\frac{1}{g(a)} + f(a)\cdot\frac{-g'(a)}{g(a)^2} = \frac{f'(a)g(a) - f(a)g'(a)}{g(a)^2}$. $\blacksquare$

### Solucion 13

Sea $x \in (a, a + \delta)$. Por el TVM aplicado a $[a, x]$: $f(x) - f(a) = f'(c_x)(x - a)$ para algun $c_x \in (a, x)$.

Entonces $\frac{f(x) - f(a)}{x - a} = f'(c_x)$. Cuando $x \to a^+$, $c_x \to a^+$ y $f'(c_x) \to L$ por hipotesis. Luego $f'_+(a) = L$. $\blacksquare$

### Solucion 14

Sean $x < y$ en $(a, b)$ y $m = (x+y)/2$. Por el TVM en $[x, m]$: $f(m) - f(x) = f'(c_1)(m-x)$ con $c_1 \in (x, m)$. En $[m, y]$: $f(y) - f(m) = f'(c_2)(y-m)$ con $c_2 \in (m, y)$.

Como $m - x = y - m = (y-x)/2$:

$$f(m) = f(x) + f'(c_1)\frac{y-x}{2}, \qquad f(y) = f(m) + f'(c_2)\frac{y-x}{2}.$$

Luego $\frac{f(x)+f(y)}{2} = f(m) + \frac{f'(c_2) - f'(c_1)}{2}\cdot\frac{y-x}{2}$.

Como $c_1 < c_2$ y $f'' > 0$, por el TVM aplicado a $f'$: $f'(c_2) - f'(c_1) = f''(\xi)(c_2 - c_1) > 0$. Luego $\frac{f(x)+f(y)}{2} > f(m)$. $\blacksquare$

### Solucion 15

Sean $r_1 < r_2$ ceros consecutivos de $f$: $f(r_1) = f(r_2) = 0$ y $f$ no se anula en $(r_1, r_2)$ (son consecutivos). Como $f$ es continua en $[r_1, r_2]$ y derivable en $(r_1, r_2)$, y $f(r_1) = f(r_2) = 0$, por Rolle existe $c \in (r_1, r_2)$ con $f'(c) = 0$. $\blacksquare$
