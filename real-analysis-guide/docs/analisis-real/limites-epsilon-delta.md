---
title: Limites epsilon-delta
description: Definicion formal de limite de una funcion, demostraciones epsilon-delta, algebra de limites, limites al infinito y limites infinitos. Incluye 15 ejercicios resueltos.
---

# Limites epsilon-delta

## 1. Motivacion e intuicion

El limite de una funcion en un punto es la herramienta que permite hablar del comportamiento de $f(x)$ cuando $x$ se acerca a un punto $a$, sin necesidad de que $f$ este definida en $a$ ni de que $f(a)$ coincida con el valor esperado.

La definicion epsilon-delta formaliza la idea: "$f(x)$ se puede hacer tan cercano a $L$ como se quiera, con tal de que $x$ este suficientemente cerca de $a$ (pero distinto de $a$)". El $\varepsilon$ mide la tolerancia deseada en la salida, y el $\delta$ mide la proximidad necesaria en la entrada.

Esta definicion es el puente entre la convergencia de sucesiones (que ya se ha estudiado) y la continuidad de funciones (que se estudiara a continuacion). De hecho, el limite de $f$ en $a$ es $L$ si y solo si $f(x_n) \to L$ para toda sucesion $x_n \to a$ con $x_n \neq a$.

## 2. Prerrequisitos

**Convergencia de sucesiones.** $(x_n) \to a$ si para todo $\varepsilon > 0$ existe $N$ con $|x_n - a| < \varepsilon$ para $n > N$.

**Punto de acumulacion de un conjunto.** $a$ es punto de acumulacion de $D$ si todo entorno de $a$ contiene puntos de $D$ distintos de $a$. Esto garantiza que se puede hablar de "acercarse a $a$ por puntos de $D$".

**Operaciones con limites de sucesiones.** Suma, producto, cociente de sucesiones convergentes.

## 3. Definiciones formales

**Definicion 3.1 (limite de una funcion en un punto).** Sean $D \subseteq \mathbb{R}$, $f: D \to \mathbb{R}$, y $a$ un punto de acumulacion de $D$. Se dice que el **limite** de $f$ en $a$ es $L \in \mathbb{R}$, y se escribe $\lim_{x \to a} f(x) = L$, si para todo $\varepsilon > 0$ existe $\delta > 0$ tal que

$$0 < |x - a| < \delta \text{ y } x \in D \implies |f(x) - L| < \varepsilon.$$

**Definicion 3.2 (limite al infinito).** Sea $f: (M, +\infty) \to \mathbb{R}$ para algun $M$. Se dice que $\lim_{x\to+\infty} f(x) = L$ si para todo $\varepsilon > 0$ existe $N > 0$ tal que

$$x > N \implies |f(x) - L| < \varepsilon.$$

Analogamente para $x \to -\infty$.

**Definicion 3.3 (limite infinito).** Se dice que $\lim_{x\to a} f(x) = +\infty$ si para todo $M > 0$ existe $\delta > 0$ tal que

$$0 < |x - a| < \delta \implies f(x) > M.$$

Analogamente para $-\infty$.

**Definicion 3.4 (caracterizacion secuencial).** $\lim_{x\to a} f(x) = L$ si y solo si para toda sucesion $(x_n)$ con $x_n \in D$, $x_n \neq a$ y $x_n \to a$, se tiene $f(x_n) \to L$.

## 4. Interpretacion en lenguaje natural

La definicion dice: dame cualquier tolerancia $\varepsilon > 0$ en la salida (por pequena que sea), y yo te dare una tolerancia $\delta > 0$ en la entrada tal que si $x$ esta a distancia menor que $\delta$ de $a$ (pero no es $a$), entonces $f(x)$ esta a distancia menor que $\varepsilon$ de $L$.

El punto clave es el orden de los cuantificadores: **para todo $\varepsilon$** (el retador elige primero) **existe $\delta$** (el defensor responde). El defensor puede usar un $\delta$ que depende de $\varepsilon$.

La condicion $0 < |x - a|$ excluye el punto $a$ mismo. El limite se trata del comportamiento **cerca** de $a$, no **en** $a$.

La caracterizacion secuencial es util para demostrar que un limite no existe: basta encontrar dos sucesiones $x_n \to a$ y $y_n \to a$ tales que $f(x_n) \to L_1$ y $f(y_n) \to L_2$ con $L_1 \neq L_2$.

## 5. Ejemplos basicos

**Ejemplo 5.1.** $\lim_{x\to 3}(2x + 1) = 7$.

Dado $\varepsilon > 0$, necesito $|2x + 1 - 7| = |2x - 6| = 2|x - 3| < \varepsilon$, es decir, $|x - 3| < \varepsilon/2$. Tomo $\delta = \varepsilon/2$. $\blacksquare$

**Ejemplo 5.2.** $\lim_{x\to 2} x^2 = 4$.

Dado $\varepsilon > 0$: $|x^2 - 4| = |x - 2||x + 2|$. Si $|x - 2| < 1$, entonces $|x| < 3$, luego $|x + 2| < 5$. Asi, $|x^2 - 4| < 5|x - 2|$.

Tomo $\delta = \min(1, \varepsilon/5)$. Si $|x - 2| < \delta$, entonces $|x^2 - 4| < 5 \cdot \varepsilon/5 = \varepsilon$. $\blacksquare$

**Ejemplo 5.3.** $\lim_{x\to 0} \frac{\sin x}{x} = 1$ (sin demostracion formal aqui; se asume como resultado conocido o se demuestra por acotacion geometrica).

**Ejemplo 5.4.** $\lim_{x\to+\infty} \frac{1}{x} = 0$. Dado $\varepsilon > 0$, tomo $N = 1/\varepsilon$. Si $x > N$, entonces $\left|\frac{1}{x}\right| < \varepsilon$.

## 6. Ejemplos finos y contraejemplos

**Ejemplo 6.1 (limite que no existe por oscilacion).** $\lim_{x\to 0} \sin(1/x)$ no existe. Las sucesiones $x_n = \frac{1}{2n\pi}$ y $y_n = \frac{1}{(2n+1/2)\pi}$ ambas tienden a $0$, pero $\sin(1/x_n) = 0$ y $\sin(1/y_n) = 1$.

**Ejemplo 6.2 ($f(a)$ puede existir y ser distinto del limite).** Sea $f(x) = x$ si $x \neq 1$ y $f(1) = 5$. Entonces $\lim_{x\to 1} f(x) = 1 \neq 5 = f(1)$.

**Ejemplo 6.3 (el limite puede existir sin que $f(a)$ exista).** $f(x) = \frac{x^2 - 1}{x - 1}$ no esta definida en $x = 1$, pero $\lim_{x\to 1} f(x) = \lim_{x\to 1}(x + 1) = 2$.

**Ejemplo 6.4 (limite infinito).** $\lim_{x\to 0} \frac{1}{x^2} = +\infty$. Dado $M > 0$, tomo $\delta = 1/\sqrt{M}$. Si $0 < |x| < \delta$, entonces $\frac{1}{x^2} > M$.

**Ejemplo 6.5 (unicidad del limite).** El limite, si existe, es unico. Si $\lim_{x\to a} f(x) = L_1$ y $\lim_{x\to a} f(x) = L_2$, entonces para todo $\varepsilon > 0$, $|L_1 - L_2| \leq |L_1 - f(x)| + |f(x) - L_2| < 2\varepsilon$ para $x$ suficientemente cerca de $a$. Como $\varepsilon$ es arbitrario, $L_1 = L_2$.

## 7. Proposiciones y teoremas

### Proposicion 7.1 (unicidad del limite)

**Enunciado.** *Si $\lim_{x\to a} f(x)$ existe, es unico.*

### Proposicion 7.2 (equivalencia secuencial)

**Enunciado.** *$\lim_{x\to a} f(x) = L$ si y solo si para toda sucesion $(x_n)$ con $x_n \to a$, $x_n \neq a$, $x_n \in D$, se tiene $f(x_n) \to L$.*

### Proposicion 7.3 (algebra de limites)

**Enunciado.** *Si $\lim_{x\to a} f(x) = L$ y $\lim_{x\to a} g(x) = M$, entonces:*
1. *$\lim_{x\to a} [f(x) + g(x)] = L + M$.*
2. *$\lim_{x\to a} [f(x) \cdot g(x)] = L \cdot M$.*
3. *$\lim_{x\to a} [c \cdot f(x)] = c \cdot L$ para todo $c \in \mathbb{R}$.*
4. *Si $M \neq 0$, $\lim_{x\to a} \frac{f(x)}{g(x)} = \frac{L}{M}$.*

### Proposicion 7.4 (teorema del sandwich)

**Enunciado.** *Si $f(x) \leq g(x) \leq h(x)$ cerca de $a$ (excepto posiblemente en $a$), y $\lim_{x\to a} f(x) = \lim_{x\to a} h(x) = L$, entonces $\lim_{x\to a} g(x) = L$.*

### Proposicion 7.5 (limites y acotacion local)

**Enunciado.** *Si $\lim_{x\to a} f(x) = L$ con $L \neq 0$, existe $\delta > 0$ tal que $|f(x)| > |L|/2$ para $0 < |x - a| < \delta$.*

## 8. Demostraciones completas

### Demostracion de la proposicion 7.1

Supongamos $\lim_{x\to a} f(x) = L_1$ y $\lim_{x\to a} f(x) = L_2$. Sea $\varepsilon > 0$. Existen $\delta_1, \delta_2 > 0$ tales que si $0 < |x - a| < \delta_1$ entonces $|f(x) - L_1| < \varepsilon/2$, y si $0 < |x - a| < \delta_2$ entonces $|f(x) - L_2| < \varepsilon/2$.

Sea $\delta = \min(\delta_1, \delta_2)$. Como $a$ es punto de acumulacion del dominio, existe $x$ con $0 < |x - a| < \delta$. Para ese $x$:

$$|L_1 - L_2| \leq |L_1 - f(x)| + |f(x) - L_2| < \varepsilon/2 + \varepsilon/2 = \varepsilon.$$

Como $\varepsilon > 0$ es arbitrario, $|L_1 - L_2| = 0$, es decir, $L_1 = L_2$. $\blacksquare$

### Demostracion de la proposicion 7.2

**($\Rightarrow$)** Supongamos $\lim_{x\to a} f(x) = L$. Sea $(x_n)$ con $x_n \to a$, $x_n \neq a$. Dado $\varepsilon > 0$, existe $\delta > 0$ con $|f(x) - L| < \varepsilon$ cuando $0 < |x - a| < \delta$. Como $x_n \to a$, existe $N$ con $|x_n - a| < \delta$ y $x_n \neq a$ para $n > N$. Entonces $|f(x_n) - L| < \varepsilon$ para $n > N$.

**($\Leftarrow$)** Contrapositivo. Supongamos $\lim_{x\to a} f(x) \neq L$ (o no existe). Entonces existe $\varepsilon_0 > 0$ tal que para todo $\delta > 0$ hay $x$ con $0 < |x - a| < \delta$ y $|f(x) - L| \geq \varepsilon_0$. Tomando $\delta = 1/n$, se obtiene $x_n$ con $0 < |x_n - a| < 1/n$ y $|f(x_n) - L| \geq \varepsilon_0$. Entonces $x_n \to a$, $x_n \neq a$, pero $f(x_n) \not\to L$. $\blacksquare$

### Demostracion de la proposicion 7.3 (suma)

Dado $\varepsilon > 0$. Existe $\delta_1$ con $|f(x) - L| < \varepsilon/2$ si $0 < |x-a| < \delta_1$. Existe $\delta_2$ con $|g(x) - M| < \varepsilon/2$ si $0 < |x-a| < \delta_2$.

Sea $\delta = \min(\delta_1, \delta_2)$. Si $0 < |x-a| < \delta$:

$$|f(x) + g(x) - (L+M)| \leq |f(x) - L| + |g(x) - M| < \varepsilon/2 + \varepsilon/2 = \varepsilon. \quad \blacksquare$$

### Demostracion de la proposicion 7.4

Dado $\varepsilon > 0$. Existen $\delta_1, \delta_2$ tales que $|f(x) - L| < \varepsilon$ si $0 < |x - a| < \delta_1$, y $|h(x) - L| < \varepsilon$ si $0 < |x - a| < \delta_2$. Existe $\delta_3$ con $f(x) \leq g(x) \leq h(x)$ para $0 < |x - a| < \delta_3$.

Sea $\delta = \min(\delta_1, \delta_2, \delta_3)$. Si $0 < |x - a| < \delta$:

$$L - \varepsilon < f(x) \leq g(x) \leq h(x) < L + \varepsilon,$$

luego $|g(x) - L| < \varepsilon$. $\blacksquare$

### Demostracion de la proposicion 7.5

Sea $\varepsilon_0 = |L|/2 > 0$. Existe $\delta$ con $|f(x) - L| < |L|/2$ cuando $0 < |x - a| < \delta$. Por la desigualdad triangular inversa: $|f(x)| \geq |L| - |f(x) - L| > |L| - |L|/2 = |L|/2$. $\blacksquare$

## 9. Errores comunes

**Error 9.1 (confundir el orden de los cuantificadores).** La definicion dice "para todo $\varepsilon$ existe $\delta$", no "existe $\delta$ para todo $\varepsilon$". En la primera, $\delta$ puede depender de $\varepsilon$; en la segunda, $\delta$ seria universal.

**Error 9.2 (incluir $x = a$ en la condicion).** La condicion es $0 < |x - a| < \delta$, que excluye $x = a$. El limite se trata del comportamiento cerca de $a$, no en $a$.

**Error 9.3 (creer que $\lim_{x\to a} f(x) = f(a)$).** El limite puede existir sin que $f(a)$ exista, y si $f(a)$ existe, puede ser distinto del limite.

**Error 9.4 (elegir $\delta$ antes que $\varepsilon$).** En la demostracion, primero se fija $\varepsilon$ arbitrario, luego se construye $\delta$. No al reves.

**Error 9.5 (olvidar que $a$ debe ser punto de acumulacion).** Si $a$ es punto aislado del dominio, no se puede hablar de $\lim_{x\to a} f(x)$ porque no hay sucesiones $x_n \to a$ con $x_n \neq a$ en el dominio.

**Error 9.6 (confundir $\delta$ constante con $\delta$ dependiente de $\varepsilon$).** En general, $\delta$ depende de $\varepsilon$. Si se puede elegir $\delta$ independiente de $\varepsilon$, se esta demostrando algo mas fuerte (una propiedad de Lipschitz, por ejemplo).

## 10. Resumen operativo

| Concepto | Formalizacion |
|----------|---------------|
| $\lim_{x\to a} f(x) = L$ | $\forall \varepsilon > 0, \exists \delta > 0 : 0 < \|x-a\| < \delta \Rightarrow \|f(x)-L\| < \varepsilon$ |
| $\lim_{x\to +\infty} f(x) = L$ | $\forall \varepsilon > 0, \exists N : x > N \Rightarrow \|f(x)-L\| < \varepsilon$ |
| $\lim_{x\to a} f(x) = +\infty$ | $\forall M > 0, \exists \delta > 0 : 0 < \|x-a\| < \delta \Rightarrow f(x) > M$ |
| Caracterizacion secuencial | $x_n \to a$, $x_n \neq a$ $\Rightarrow$ $f(x_n) \to L$ |
| No existencia | Dos sucesiones $x_n, y_n \to a$ con $f(x_n) \to L_1 \neq L_2 \leftarrow f(y_n)$ |

**Receta para demostraciones $\varepsilon$-$\delta$:**
1. Fijar $\varepsilon > 0$ arbitrario.
2. Manipular $|f(x) - L|$ algebraicamente hasta acotarlo por una expresion que involucre $|x - a|$.
3. Elegir $\delta$ (posiblemente como minimo de varias cotas) para que la expresion sea $< \varepsilon$.
4. Verificar la implicacion.

## 11. Ejercicios

**Ejercicio 1.** Demostrar con $\varepsilon$-$\delta$ que $\lim_{x\to 1}(3x - 2) = 1$.

**Ejercicio 2.** Demostrar con $\varepsilon$-$\delta$ que $\lim_{x\to 4}\sqrt{x} = 2$.

**Ejercicio 3.** Demostrar con $\varepsilon$-$\delta$ que $\lim_{x\to 0} x^3 = 0$.

**Ejercicio 4.** Demostrar que $\lim_{x\to 2}\frac{1}{x} = \frac{1}{2}$.

**Ejercicio 5.** Usar la caracterizacion secuencial para demostrar que $\lim_{x\to 0} \sin(1/x)$ no existe.

**Ejercicio 6.** Demostrar que $\lim_{x\to 3}(x^2 - 5x + 6) = 0$.

**Ejercicio 7.** Demostrar con $\varepsilon$-$\delta$ que $\lim_{x\to+\infty}\frac{2x+1}{x-3} = 2$.

**Ejercicio 8.** Demostrar que $\lim_{x\to 0^+}\sqrt{x} = 0$.

**Ejercicio 9.** Demostrar que $\lim_{x\to 1}\frac{x^2 - 1}{x - 1} = 2$.

**Ejercicio 10.** Demostrar que si $\lim_{x\to a} f(x) = L > 0$, entonces $f(x) > 0$ en algun entorno perforado de $a$.

**Ejercicio 11.** Demostrar que $\lim_{x\to 0}\frac{1}{x^2} = +\infty$.

**Ejercicio 12.** Sea $f(x) = \begin{cases} 1 & \text{si } x \in \mathbb{Q}, \\ 0 & \text{si } x \notin \mathbb{Q}. \end{cases}$ Demostrar que $\lim_{x\to a} f(x)$ no existe para ningun $a$.

**Ejercicio 13.** Demostrar que $\lim_{x\to 0} x \sin(1/x) = 0$.

**Ejercicio 14.** Demostrar que $\lim_{x\to a}|f(x)| = |L|$ si $\lim_{x\to a} f(x) = L$.

**Ejercicio 15.** Demostrar con $\varepsilon$-$\delta$ que $\lim_{x\to 1}\frac{x}{x+1} = \frac{1}{2}$.

## 12. Soluciones completas

### Solucion 1

$|3x - 2 - 1| = |3x - 3| = 3|x - 1|$. Dado $\varepsilon > 0$, tomo $\delta = \varepsilon/3$. Si $0 < |x - 1| < \delta$:

$$|3x - 2 - 1| = 3|x-1| < 3 \cdot \varepsilon/3 = \varepsilon. \quad \blacksquare$$

### Solucion 2

$|\sqrt{x} - 2| = \frac{|x - 4|}{|\sqrt{x} + 2|}$. Como $\sqrt{x} + 2 \geq 2$ para $x \geq 0$:

$$|\sqrt{x} - 2| \leq \frac{|x - 4|}{2}.$$

Dado $\varepsilon > 0$, tomo $\delta = \min(4, 2\varepsilon)$ (el $\delta \leq 4$ asegura $x \geq 0$). Si $0 < |x - 4| < \delta$:

$$|\sqrt{x} - 2| \leq \frac{|x-4|}{2} < \frac{2\varepsilon}{2} = \varepsilon. \quad \blacksquare$$

### Solucion 3

Si $|x| < 1$, entonces $|x^3| = |x|^3 \leq |x|^3 < |x|$ (ya que $|x| < 1$). Dado $\varepsilon > 0$, tomo $\delta = \min(1, \varepsilon)$. Si $|x| < \delta$:

$$|x^3 - 0| = |x|^3 \leq |x| < \varepsilon. \quad \blacksquare$$

### Solucion 4

$$\left|\frac{1}{x} - \frac{1}{2}\right| = \frac{|2 - x|}{2|x|} = \frac{|x - 2|}{2|x|}.$$

Si $|x - 2| < 1$, entonces $x > 1$, luego $|x| > 1$ y $\frac{1}{|x|} < 1$. Asi, $\left|\frac{1}{x} - \frac{1}{2}\right| < \frac{|x-2|}{2}$.

Dado $\varepsilon > 0$, tomo $\delta = \min(1, 2\varepsilon)$. Si $0 < |x - 2| < \delta$:

$$\left|\frac{1}{x} - \frac{1}{2}\right| < \frac{|x-2|}{2} < \frac{2\varepsilon}{2} = \varepsilon. \quad \blacksquare$$

### Solucion 5

Sea $x_n = \frac{1}{2n\pi} \to 0$. Entonces $\sin(1/x_n) = \sin(2n\pi) = 0$, luego $f(x_n) \to 0$.

Sea $y_n = \frac{1}{(4n+1)\pi/2} = \frac{2}{(4n+1)\pi} \to 0$. Entonces $\sin(1/y_n) = \sin\!\left(\frac{(4n+1)\pi}{2}\right) = 1$, luego $f(y_n) \to 1$.

Como $0 \neq 1$, por la caracterizacion secuencial el limite no existe. $\blacksquare$

### Solucion 6

$|x^2 - 5x + 6| = |(x-2)(x-3)| = |x-2| \cdot |x-3|$. Si $|x-3| < 1$, entonces $|x-2| < 2$. Asi, $|x^2-5x+6| < 2|x-3|$.

Dado $\varepsilon > 0$, tomo $\delta = \min(1, \varepsilon/2)$. Si $0 < |x-3| < \delta$:

$$|x^2 - 5x + 6| < 2|x-3| < 2 \cdot \varepsilon/2 = \varepsilon. \quad \blacksquare$$

### Solucion 7

$$\left|\frac{2x+1}{x-3} - 2\right| = \left|\frac{2x+1 - 2(x-3)}{x-3}\right| = \frac{7}{|x-3|}.$$

Para $x > 6$: $|x - 3| > 3$... mas util: para $x > N$ con $N > 3$: $|x-3| = x - 3 > N - 3$. Necesitamos $\frac{7}{x-3} < \varepsilon$, es decir, $x > 3 + 7/\varepsilon$.

Dado $\varepsilon > 0$, tomo $N = 3 + 7/\varepsilon$. Si $x > N$:

$$\left|\frac{2x+1}{x-3} - 2\right| = \frac{7}{x-3} < \frac{7}{N - 3} = \varepsilon. \quad \blacksquare$$

### Solucion 8

$|\sqrt{x} - 0| = \sqrt{x}$. Dado $\varepsilon > 0$, tomo $\delta = \varepsilon^2$. Si $0 < x < \delta$:

$$\sqrt{x} < \sqrt{\varepsilon^2} = \varepsilon. \quad \blacksquare$$

### Solucion 9

Para $x \neq 1$: $\frac{x^2 - 1}{x - 1} = x + 1$. Entonces $\left|\frac{x^2-1}{x-1} - 2\right| = |x + 1 - 2| = |x - 1|$.

Dado $\varepsilon > 0$, tomo $\delta = \varepsilon$. Si $0 < |x - 1| < \delta$:

$$\left|\frac{x^2-1}{x-1} - 2\right| = |x-1| < \varepsilon. \quad \blacksquare$$

### Solucion 10

Como $L > 0$, tomo $\varepsilon = L/2$. Existe $\delta > 0$ con $|f(x) - L| < L/2$ cuando $0 < |x - a| < \delta$. Entonces $f(x) > L - L/2 = L/2 > 0$. $\blacksquare$

### Solucion 11

Dado $M > 0$, necesito $\frac{1}{x^2} > M$, es decir, $x^2 < 1/M$, es decir, $|x| < 1/\sqrt{M}$.

Tomo $\delta = 1/\sqrt{M}$. Si $0 < |x| < \delta$:

$$\frac{1}{x^2} > \frac{1}{\delta^2} = M. \quad \blacksquare$$

### Solucion 12

Sea $a \in \mathbb{R}$ cualquiera. Para todo $\delta > 0$, el intervalo $(a - \delta, a + \delta)$ contiene racionales e irracionales distintos de $a$. Sea $x_n$ racional con $x_n \to a$, $x_n \neq a$: $f(x_n) = 1 \to 1$. Sea $y_n$ irracional con $y_n \to a$, $y_n \neq a$: $f(y_n) = 0 \to 0$. Como $1 \neq 0$, el limite no existe. $\blacksquare$

### Solucion 13

$|x\sin(1/x) - 0| = |x||\sin(1/x)| \leq |x|$ (porque $|\sin(\cdot)| \leq 1$).

Dado $\varepsilon > 0$, tomo $\delta = \varepsilon$. Si $0 < |x| < \delta$:

$$|x\sin(1/x)| \leq |x| < \varepsilon. \quad \blacksquare$$

### Solucion 14

Se usa $\big||f(x)| - |L|\big| \leq |f(x) - L|$ (desigualdad triangular inversa). Dado $\varepsilon > 0$, existe $\delta$ con $|f(x) - L| < \varepsilon$ si $0 < |x-a| < \delta$. Entonces $\big||f(x)| - |L|\big| < \varepsilon$. $\blacksquare$

### Solucion 15

$$\left|\frac{x}{x+1} - \frac{1}{2}\right| = \left|\frac{2x - (x+1)}{2(x+1)}\right| = \frac{|x - 1|}{2|x+1|}.$$

Si $|x - 1| < 1/2$, entonces $x > 1/2$, luego $x + 1 > 3/2$ y $|x+1| > 3/2$. Asi:

$$\left|\frac{x}{x+1} - \frac{1}{2}\right| < \frac{|x-1|}{2 \cdot 3/2} = \frac{|x-1|}{3}.$$

Dado $\varepsilon > 0$, tomo $\delta = \min(1/2, 3\varepsilon)$. Si $0 < |x-1| < \delta$:

$$\left|\frac{x}{x+1} - \frac{1}{2}\right| < \frac{|x-1|}{3} < \frac{3\varepsilon}{3} = \varepsilon. \quad \blacksquare$$
