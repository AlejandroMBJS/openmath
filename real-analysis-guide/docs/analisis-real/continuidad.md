---
title: Continuidad
description: Continuidad puntual y global, caracterizacion epsilon-delta y secuencial, propiedades algebraicas, teoremas del valor intermedio y extremo. Incluye 15 ejercicios resueltos.
---

# Continuidad

## 1. Motivacion e intuicion

La continuidad formaliza la idea de que una funcion no tiene saltos ni roturas: cambios pequenos en la entrada producen cambios pequenos en la salida. En calculo se suele decir que una funcion es continua si "se puede dibujar sin levantar el lapiz", pero esta intuicion es limitada: hay funciones continuas en todas partes cuya grafica es imposible de dibujar (como la funcion de Weierstrass, que es continua pero no derivable en ningun punto).

La definicion rigurosa une la teoria de limites con el comportamiento de la funcion en el punto: $f$ es continua en $a$ si $\lim_{x\to a} f(x) = f(a)$. Esto exige tres cosas: que $f(a)$ exista, que el limite exista, y que coincidan.

La continuidad es la propiedad que permite transferir resultados topologicos (como conexidad y compacidad) del dominio a la imagen, y es la base sobre la que se construyen la derivada y la integral.

## 2. Prerrequisitos

**Limites epsilon-delta.** $\lim_{x\to a} f(x) = L$ si para todo $\varepsilon > 0$ existe $\delta > 0$ con $0 < |x - a| < \delta \Rightarrow |f(x) - L| < \varepsilon$.

**Limites laterales.** $\lim_{x\to a^+} f(x)$ y $\lim_{x\to a^-} f(x)$.

**Topologia de la recta real.** Conjuntos abiertos, cerrados, compactos y conexos.

## 3. Definiciones formales

**Definicion 3.1 (continuidad puntual).** Sea $f: D \to \mathbb{R}$ y $a \in D$. Se dice que $f$ es **continua en $a$** si para todo $\varepsilon > 0$ existe $\delta > 0$ tal que

$$x \in D \text{ y } |x - a| < \delta \implies |f(x) - f(a)| < \varepsilon.$$

Notar que aqui no se excluye $x = a$ (a diferencia de la definicion de limite).

**Definicion 3.2 (continuidad en un conjunto).** $f$ es **continua en $D$** si es continua en cada punto de $D$.

**Definicion 3.3 (continuidad secuencial).** $f$ es continua en $a$ si y solo si para toda sucesion $(x_n) \subseteq D$ con $x_n \to a$ se tiene $f(x_n) \to f(a)$.

**Definicion 3.4 (continuidad por la derecha/izquierda).** $f$ es **continua por la derecha** en $a$ si $\lim_{x\to a^+} f(x) = f(a)$. Analogamente por la izquierda.

**Definicion 3.5 (continuidad via preimagen de abiertos).** $f: D \to \mathbb{R}$ es continua en $D$ si y solo si para todo abierto $V \subseteq \mathbb{R}$, la preimagen $f^{-1}(V) = \{x \in D : f(x) \in V\}$ es abierta relativa a $D$.

## 4. Interpretacion en lenguaje natural

$f$ es continua en $a$ si al acercarnos a $a$ por cualquier camino dentro del dominio, el valor de $f$ se acerca a $f(a)$. No hay sorpresas: el comportamiento cerca de $a$ predice correctamente el valor en $a$.

La version $\varepsilon$-$\delta$ dice: elige cualquier tolerancia $\varepsilon$ en la salida; yo puedo encontrar una tolerancia $\delta$ en la entrada que la garantice.

La version secuencial dice: si la entrada converge, la salida converge al valor correcto.

La version topologica dice: las preimagenes de conjuntos abiertos son abiertas. Esta es la version mas potente para la teoria, aunque la menos intuitiva inicialmente.

## 5. Ejemplos basicos

**Ejemplo 5.1 (polinomios).** Todo polinomio $p(x) = a_n x^n + \cdots + a_0$ es continuo en todo $\mathbb{R}$. Se demuestra combinando la continuidad de $f(x) = x$ (identidad), las constantes, y las operaciones algebraicas.

**Ejemplo 5.2 (funciones racionales).** $f(x) = \frac{p(x)}{q(x)}$ es continua en todo punto donde $q(x) \neq 0$.

**Ejemplo 5.3 ($\sqrt{x}$).** $f(x) = \sqrt{x}$ es continua en $[0, +\infty)$. En $x = 0$, la continuidad es por la derecha.

**Ejemplo 5.4 ($|x|$).** $f(x) = |x|$ es continua en todo $\mathbb{R}$. $|f(x) - f(a)| = ||x| - |a|| \leq |x - a|$, asi que $\delta = \varepsilon$ funciona siempre.

**Ejemplo 5.5 ($\sin x$ y $\cos x$).** Son continuas en todo $\mathbb{R}$. Para $\sin$: $|\sin x - \sin a| \leq |x - a|$.

## 6. Ejemplos finos y contraejemplos

**Ejemplo 6.1 (funcion de Dirichlet: discontinua en todo punto).** $f(x) = 1$ si $x \in \mathbb{Q}$ y $f(x) = 0$ si $x \notin \mathbb{Q}$. Para todo $a$, existen sucesiones racionales e irracionales convergiendo a $a$ con limites $1$ y $0$ respectivamente, luego $f$ no es continua en ningun punto.

**Ejemplo 6.2 (funcion de Thomae: continua en irracionales, discontinua en racionales).** $f(x) = 1/q$ si $x = p/q$ en forma irreducible con $q > 0$, y $f(x) = 0$ si $x$ es irracional. $f$ es continua en todo irracional y discontinua en todo racional.

**Ejemplo 6.3 (composicion de continuas es continua).** Si $f$ es continua en $a$ y $g$ es continua en $f(a)$, entonces $g \circ f$ es continua en $a$.

**Ejemplo 6.4 (continuidad no implica derivabilidad).** $f(x) = |x|$ es continua en $0$ pero no derivable ahi.

**Ejemplo 6.5 (continuidad en compacto implica acotacion).** Si $f$ es continua en $[a, b]$, entonces $f$ esta acotada y alcanza su maximo y minimo (teorema de Weierstrass). Esto falla si el dominio no es compacto: $f(x) = 1/x$ en $(0, 1)$ es continua pero no acotada.

## 7. Proposiciones y teoremas

### Proposicion 7.1 (equivalencia de definiciones)

**Enunciado.** *Las siguientes condiciones son equivalentes para $f: D \to \mathbb{R}$ y $a \in D$ punto de acumulacion de $D$:*
1. *$f$ es continua en $a$ ($\varepsilon$-$\delta$).*
2. *$\lim_{x\to a} f(x) = f(a)$.*
3. *Para toda sucesion $(x_n) \subseteq D$ con $x_n \to a$, $f(x_n) \to f(a)$.*

*Si $a$ es punto aislado de $D$, $f$ es automaticamente continua en $a$.*

### Proposicion 7.2 (algebra de funciones continuas)

**Enunciado.** *Si $f$ y $g$ son continuas en $a$, entonces $f + g$, $f \cdot g$, $cf$ (para $c \in \mathbb{R}$) son continuas en $a$. Si $g(a) \neq 0$, $f/g$ es continua en $a$.*

### Proposicion 7.3 (composicion)

**Enunciado.** *Si $f$ es continua en $a$ y $g$ es continua en $f(a)$, entonces $g \circ f$ es continua en $a$.*

### Teorema 7.4 (valor intermedio)

**Enunciado.** *Si $f: [a, b] \to \mathbb{R}$ es continua y $f(a) \neq f(b)$, entonces para todo $y$ entre $f(a)$ y $f(b)$ existe $c \in (a, b)$ con $f(c) = y$.*

### Teorema 7.5 (Weierstrass: valor extremo)

**Enunciado.** *Si $f: [a, b] \to \mathbb{R}$ es continua, entonces $f$ alcanza su maximo y su minimo: existen $c, d \in [a, b]$ con $f(c) \leq f(x) \leq f(d)$ para todo $x \in [a, b]$.*

### Proposicion 7.6 (preimagen de abiertos)

**Enunciado.** *$f: D \to \mathbb{R}$ es continua si y solo si para todo abierto $V \subseteq \mathbb{R}$, $f^{-1}(V)$ es abierto en la topologia relativa de $D$.*

## 8. Demostraciones completas

### Demostracion de la proposicion 7.2 (producto)

Sean $f, g$ continuas en $a$. Dado $\varepsilon > 0$:

$$|f(x)g(x) - f(a)g(a)| = |f(x)g(x) - f(x)g(a) + f(x)g(a) - f(a)g(a)|$$
$$\leq |f(x)||g(x) - g(a)| + |g(a)||f(x) - f(a)|.$$

Como $f$ es continua en $a$, $f$ esta acotada cerca de $a$: existe $\delta_1$ con $|f(x)| \leq |f(a)| + 1 := M$ para $|x - a| < \delta_1$.

Existe $\delta_2$ con $|g(x) - g(a)| < \frac{\varepsilon}{2M}$ para $|x - a| < \delta_2$.

Existe $\delta_3$ con $|f(x) - f(a)| < \frac{\varepsilon}{2(|g(a)|+1)}$ para $|x - a| < \delta_3$.

Sea $\delta = \min(\delta_1, \delta_2, \delta_3)$. Si $|x - a| < \delta$:

$$|f(x)g(x) - f(a)g(a)| \leq M \cdot \frac{\varepsilon}{2M} + |g(a)| \cdot \frac{\varepsilon}{2(|g(a)|+1)} < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon. \quad \blacksquare$$

### Demostracion de la proposicion 7.3

Sea $\varepsilon > 0$. Como $g$ es continua en $f(a)$, existe $\eta > 0$ con $|g(y) - g(f(a))| < \varepsilon$ si $|y - f(a)| < \eta$. Como $f$ es continua en $a$, existe $\delta > 0$ con $|f(x) - f(a)| < \eta$ si $|x - a| < \delta$.

Si $|x - a| < \delta$: $|f(x) - f(a)| < \eta$, luego $|g(f(x)) - g(f(a))| < \varepsilon$. $\blacksquare$

### Demostracion del teorema 7.5

**Paso 1.** $f([a,b])$ es compacto (imagen continua de compacto), luego cerrado y acotado.

**Paso 2.** Como es acotado, $\sup f([a,b])$ y $\inf f([a,b])$ existen.

**Paso 3.** Como es cerrado, el supremo y el infimo pertenecen a $f([a,b])$. Existen $d, c \in [a,b]$ con $f(d) = \sup f([a,b])$ y $f(c) = \inf f([a,b])$. $\blacksquare$

### Demostracion de la proposicion 7.6

**($\Rightarrow$)** Sea $f$ continua y $V$ abierto. Sea $x \in f^{-1}(V) \cap D$. Entonces $f(x) \in V$. Como $V$ es abierto, existe $\varepsilon > 0$ con $B(f(x), \varepsilon) \subseteq V$. Por continuidad de $f$ en $x$, existe $\delta > 0$ con $|y - x| < \delta, y \in D \Rightarrow |f(y) - f(x)| < \varepsilon$, es decir, $f(y) \in V$. Luego $B(x, \delta) \cap D \subseteq f^{-1}(V)$, mostrando que $f^{-1}(V)$ es abierto relativo a $D$.

**($\Leftarrow$)** Sea $x \in D$ y $\varepsilon > 0$. El conjunto $V = B(f(x), \varepsilon)$ es abierto. Por hipotesis, $f^{-1}(V)$ es abierto en $D$. Como $x \in f^{-1}(V)$, existe $\delta > 0$ con $B(x, \delta) \cap D \subseteq f^{-1}(V)$, lo que significa $|y - x| < \delta, y \in D \Rightarrow |f(y) - f(x)| < \varepsilon$. $\blacksquare$

## 9. Errores comunes

**Error 9.1 (confundir limite con continuidad).** El limite de $f$ en $a$ puede existir sin que $f$ sea continua en $a$. La continuidad requiere ademas que $f(a)$ este definida y que el limite iguale $f(a)$.

**Error 9.2 (creer que continuidad implica derivabilidad).** $|x|$ es continua en $0$ pero no derivable.

**Error 9.3 (creer que funciones acotadas en intervalos cerrados son continuas).** La funcion de Dirichlet esta acotada en $[0,1]$ pero es discontinua en todo punto.

**Error 9.4 (aplicar el teorema del valor extremo fuera de compactos).** $f(x) = x$ en $(0, \infty)$ es continua pero no tiene maximo.

**Error 9.5 (confundir $\delta$ dependiente de $a$ con continuidad uniforme).** En la continuidad puntual, $\delta$ puede depender tanto de $\varepsilon$ como de $a$. En la continuidad uniforme (tema siguiente), $\delta$ solo depende de $\varepsilon$.

**Error 9.6 (creer que la imagen continua de un abierto es abierta).** La imagen continua de un abierto no es necesariamente abierta. Ejemplo: $f(x) = x^2$ manda $(-1, 1)$ a $[0, 1)$, que no es abierto. Lo que se preserva es la preimagen, no la imagen directa.

## 10. Resumen operativo

| Propiedad | Resultado |
|-----------|-----------|
| $f, g$ continuas | $f+g$, $fg$, $cf$, $f/g$ (si $g \neq 0$) continuas |
| $f$ cont. en $a$, $g$ cont. en $f(a)$ | $g \circ f$ continua en $a$ |
| $f$ cont. en $[a,b]$ | $f$ alcanza max y min (Weierstrass) |
| $f$ cont. en $[a,b]$, $f(a) \neq f(b)$ | $f$ toma todo valor intermedio (TVI) |
| $f$ cont. en compacto | Imagen es compacta |
| $f$ cont. en conexo | Imagen es conexa (intervalo) |
| Preimagen de abierto por $f$ cont. | Abierta (relativa al dominio) |

**Para demostrar continuidad en un punto:**
1. Fijar $\varepsilon > 0$.
2. Acotar $|f(x) - f(a)|$ en terminos de $|x - a|$.
3. Elegir $\delta$ para que la cota sea $< \varepsilon$.

## 11. Ejercicios

**Ejercicio 1.** Demostrar con $\varepsilon$-$\delta$ que $f(x) = 3x^2 - 1$ es continua en $x = 2$.

**Ejercicio 2.** Demostrar que $f(x) = \frac{1}{x}$ es continua en todo $x \neq 0$.

**Ejercicio 3.** Sea $f(x) = \begin{cases} x\sin(1/x) & \text{si } x \neq 0, \\ 0 & \text{si } x = 0. \end{cases}$ Demostrar que $f$ es continua en $x = 0$.

**Ejercicio 4.** Demostrar que si $f$ es continua en $a$ y $f(a) > 0$, existe un intervalo $(a-\delta, a+\delta)$ donde $f(x) > 0$.

**Ejercicio 5.** Demostrar que la ecuacion $x^5 + x = 1$ tiene al menos una solucion real en $(0, 1)$.

**Ejercicio 6.** Sea $f: [0, 1] \to \mathbb{R}$ continua con $f(0) = f(1)$. Demostrar que existe $c \in [0, 1/2]$ con $f(c) = f(c + 1/2)$.

**Ejercicio 7.** Demostrar que $f(x) = \sqrt{x}$ es continua en $[0, +\infty)$.

**Ejercicio 8.** Sea $f: \mathbb{R} \to \mathbb{R}$ continua con $f(x) = 0$ para todo $x \in \mathbb{Q}$. Demostrar que $f(x) = 0$ para todo $x \in \mathbb{R}$.

**Ejercicio 9.** Demostrar que si $f: [a, b] \to [a, b]$ es continua, existe un punto fijo.

**Ejercicio 10.** Sea $f$ continua en $[a, b]$ con $f(x) \in \mathbb{Q}$ para todo $x$. Demostrar que $f$ es constante.

**Ejercicio 11.** Demostrar que $f(x) = x^3$ es continua en todo $\mathbb{R}$.

**Ejercicio 12.** Demostrar que la funcion $f(x) = \begin{cases} 1 & \text{si } x = 0, \\ 0 & \text{si } x \neq 0 \end{cases}$ no es continua en $x = 0$.

**Ejercicio 13.** Sea $f$ continua en $[0, 2]$ con $f(0) = 0$ y $f(2) = 2$. Demostrar que existe $c \in [0, 2]$ con $f(c) = c$.

**Ejercicio 14.** Demostrar que la composicion de dos funciones continuas es continua usando la definicion secuencial.

**Ejercicio 15.** Sea $f$ continua en $\mathbb{R}$ con $\lim_{x\to+\infty} f(x) = \lim_{x\to-\infty} f(x) = 0$. Demostrar que $f$ alcanza un maximo o un minimo global.

## 12. Soluciones completas

### Solucion 1

$|f(x) - f(2)| = |3x^2 - 1 - 11| = |3x^2 - 12| = 3|x^2 - 4| = 3|x-2||x+2|$.

Si $|x - 2| < 1$, entonces $|x| < 3$ y $|x+2| < 5$, luego $|f(x) - f(2)| < 15|x-2|$.

Dado $\varepsilon > 0$, tomo $\delta = \min(1, \varepsilon/15)$. Si $|x - 2| < \delta$:

$$|f(x) - f(2)| < 15|x-2| < 15 \cdot \varepsilon/15 = \varepsilon. \quad \blacksquare$$

### Solucion 2

Sea $a \neq 0$. $\left|\frac{1}{x} - \frac{1}{a}\right| = \frac{|a - x|}{|x||a|}$.

Si $|x - a| < |a|/2$, entonces $|x| > |a|/2$, luego $\frac{1}{|x|} < \frac{2}{|a|}$.

Entonces $\left|\frac{1}{x} - \frac{1}{a}\right| < \frac{2}{|a|^2}|x - a|$.

Dado $\varepsilon > 0$, tomo $\delta = \min\!\left(\frac{|a|}{2}, \frac{|a|^2\varepsilon}{2}\right)$. Si $|x - a| < \delta$:

$$\left|\frac{1}{x} - \frac{1}{a}\right| < \frac{2}{|a|^2}\cdot\frac{|a|^2\varepsilon}{2} = \varepsilon. \quad \blacksquare$$

### Solucion 3

$|f(x) - f(0)| = |x\sin(1/x) - 0| = |x||\sin(1/x)| \leq |x|$.

Dado $\varepsilon > 0$, tomo $\delta = \varepsilon$. Si $|x| < \delta$: $|f(x)| \leq |x| < \varepsilon$. $\blacksquare$

### Solucion 4

Tomo $\varepsilon = f(a)/2 > 0$. Por continuidad, existe $\delta > 0$ con $|f(x) - f(a)| < f(a)/2$ si $|x - a| < \delta$. Entonces $f(x) > f(a) - f(a)/2 = f(a)/2 > 0$ para $x \in (a-\delta, a+\delta)$. $\blacksquare$

### Solucion 5

Sea $g(x) = x^5 + x - 1$. $g$ es continua. $g(0) = -1 < 0$ y $g(1) = 1 > 0$. Por el TVI, existe $c \in (0, 1)$ con $g(c) = 0$, es decir, $c^5 + c = 1$. $\blacksquare$

### Solucion 6

Defino $g(x) = f(x) - f(x + 1/2)$ para $x \in [0, 1/2]$. $g$ es continua.

$g(0) = f(0) - f(1/2)$ y $g(1/2) = f(1/2) - f(1) = f(1/2) - f(0)$.

Luego $g(0) + g(1/2) = f(0) - f(1/2) + f(1/2) - f(0) = 0$.

Si $g(0) = 0$, tomo $c = 0$. Si no, $g(0)$ y $g(1/2)$ tienen signos opuestos. Por el TVI, existe $c \in (0, 1/2)$ con $g(c) = 0$, es decir, $f(c) = f(c + 1/2)$. $\blacksquare$

### Solucion 7

**En $x = 0$:** $|\sqrt{x} - 0| = \sqrt{x}$. Dado $\varepsilon > 0$, tomo $\delta = \varepsilon^2$. Si $0 \leq x < \delta$: $\sqrt{x} < \varepsilon$.

**En $a > 0$:** $|\sqrt{x} - \sqrt{a}| = \frac{|x - a|}{\sqrt{x} + \sqrt{a}} \leq \frac{|x - a|}{\sqrt{a}}$.

Dado $\varepsilon > 0$, tomo $\delta = \varepsilon\sqrt{a}$. Si $|x - a| < \delta$ con $x \geq 0$:

$$|\sqrt{x} - \sqrt{a}| \leq \frac{|x-a|}{\sqrt{a}} < \frac{\varepsilon\sqrt{a}}{\sqrt{a}} = \varepsilon. \quad \blacksquare$$

### Solucion 8

Sea $x_0 \in \mathbb{R}$ irracional. Por densidad de $\mathbb{Q}$, existe $(q_n) \subseteq \mathbb{Q}$ con $q_n \to x_0$. Como $f(q_n) = 0$ para todo $n$ y $f$ es continua en $x_0$, $f(x_0) = \lim f(q_n) = 0$. $\blacksquare$

### Solucion 9

Defino $g(x) = f(x) - x$ en $[a, b]$. $g$ es continua. $g(a) = f(a) - a \geq 0$ (porque $f(a) \in [a, b]$) y $g(b) = f(b) - b \leq 0$ (porque $f(b) \in [a, b]$).

Si $g(a) = 0$ o $g(b) = 0$, hay punto fijo. Si no, $g(a) > 0 > g(b)$, y por el TVI existe $c \in (a, b)$ con $g(c) = 0$, es decir, $f(c) = c$. $\blacksquare$

### Solucion 10

$f([a, b])$ es conexo (imagen continua de conexo), luego es un intervalo. Pero $f([a,b]) \subseteq \mathbb{Q}$ y el unico intervalo contenido en $\mathbb{Q}$ es un punto (ya que $\mathbb{Q}$ es totalmente disconexo). Luego $f$ es constante. $\blacksquare$

### Solucion 11

Sea $a \in \mathbb{R}$. $|x^3 - a^3| = |x - a||x^2 + ax + a^2|$. Si $|x - a| < 1$, entonces $|x| < |a| + 1$, y $|x^2 + ax + a^2| \leq (|a|+1)^2 + |a|(|a|+1) + a^2 := M$.

Dado $\varepsilon > 0$, tomo $\delta = \min(1, \varepsilon/M)$. Si $|x - a| < \delta$:

$$|x^3 - a^3| \leq M|x - a| < M \cdot \varepsilon/M = \varepsilon. \quad \blacksquare$$

### Solucion 12

$f(0) = 1$. Pero $\lim_{x\to 0} f(x) = 0$ (para $x \neq 0$, $f(x) = 0$). Como $\lim_{x\to 0} f(x) = 0 \neq 1 = f(0)$, $f$ no es continua en $0$. $\blacksquare$

### Solucion 13

Sea $g(x) = f(x) - x$ en $[0, 2]$. $g(0) = 0 - 0 = 0$. Si $g(0) = 0$, entonces $c = 0$. Si $g(0) > 0$, entonces $g(2) = f(2) - 2 = 0$, asi que $c = 2$. (En realidad $g(0) = 0$ directamente.) Luego $c = 0$ funciona: $f(0) = 0 = c$.

Pero si se busca $c \in (0, 2)$: $g(0) = 0$, asi que $c = 0$ es punto fijo. Si se quiere uno interior, basta notar que $g$ es continua, $g(0) = 0$, $g(2) = 0$. Si $g$ no es identicamente $0$, tiene algun $c$ con $g(c) = 0$ tambien. En cualquier caso, $c = 0$ cumple. $\blacksquare$

### Solucion 14

Sea $x_n \to a$. Como $f$ es continua en $a$, $f(x_n) \to f(a)$. Sea $y_n = f(x_n)$. Entonces $y_n \to f(a)$. Como $g$ es continua en $f(a)$, $g(y_n) \to g(f(a))$. Pero $g(y_n) = g(f(x_n)) = (g \circ f)(x_n)$. Luego $(g \circ f)(x_n) \to g(f(a))$ para toda sucesion $x_n \to a$, lo que muestra que $g \circ f$ es continua en $a$. $\blacksquare$

### Solucion 15

Como $\lim_{x\to\pm\infty} f(x) = 0$, dado $\varepsilon = 1$, existen $N_1, N_2$ tales que $|f(x)| < 1$ para $x > N_1$ y $x < -N_2$. Sea $R = \max(N_1, N_2)$.

$f$ es continua en $[-R, R]$, que es compacto. Por Weierstrass, alcanza su maximo $M$ y su minimo $m$ en $[-R, R]$.

Si $M \leq 0$ y $m \geq 0$, entonces $f = 0$ en $[-R, R]$ y $|f(x)| < 1$ fuera, luego $f$ tiene supremo $\leq 1$ e infimo $\geq -1$ pero puede no alcanzarlos. Sin embargo, $\sup_{\mathbb{R}} f = \max(M, \sup_{|x|>R} f(x))$. Como $\sup_{|x|>R} f(x) \leq 1$... mejor: sea $S = \sup_{x\in\mathbb{R}} f(x)$. Si $S > 0$: existe sucesion $x_n$ con $f(x_n) \to S$. Como $|f(x)| < S/2$ fuera de un compacto (para $|x|$ grande), los $x_n$ deben ser eventualmente acotados. Por Bolzano-Weierstrass, una subsucesion $x_{n_k} \to c$. Por continuidad, $f(c) = S$: el supremo se alcanza.

Analogamente, $\inf_{\mathbb{R}} f$ se alcanza si es $< 0$. Si $S = 0$ e $I = \inf = 0$, entonces $f \equiv 0$ (y el max/min se alcanzan trivialmente). En todos los casos, $f$ alcanza su maximo o su minimo (o ambos). $\blacksquare$
