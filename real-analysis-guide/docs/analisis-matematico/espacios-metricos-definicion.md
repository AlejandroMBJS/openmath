---
title: Espacios metricos - Definicion axiomatica
description: Definicion axiomática de espacio métrico con los cuatro axiomas M1-M4, ejemplos canonicos y verificacion explicita, desigualdad triangular inversa y subespacios.
---

# Espacios metricos: Definicion axiomática

## Motivacion e intuicion

El analisis real se construye sobre la recta $\mathbb{R}$ y la noción de distancia $|x - y|$. Pero muchos objetos matemáticos naturales —funciones, sucesiones, matrices, variedades— no viven en la recta. Necesitamos un marco que generalice la idea de "cercanía" sin depender de coordenadas.

Un **espacio métrico** es exactamente eso: un conjunto equipado con una función de distancia que satisface cuatro propiedades naturales. Estos cuatro axiomas son el mínimo irreducible para desarrollar topología, convergencia y continuidad.

::: tip Idea central
La métrica es una función $d: X \times X \to [0, \infty)$ que mide qué tan lejos están dos puntos. Los axiomas garantizan que esta "distancia" se comporte como esperamos.
:::

## Prerrequisitos

- Valor absoluto y sus propiedades básicas.
- Nocion de supremo e ínfimo.
- Conceptos de conjunto, función y producto cartesiano.

## Definiciones formales

### Definicion de espacio metrico

Un **espacio métrico** es un par $(X, d)$ donde:

- $X$ es un conjunto no vacío.
- $d\colon X \times X \to [0, \infty)$ es una función llamada **métrica** o **distancia**.

La métrica debe satisfacer los siguientes **cuatro axiomas** para todo $x, y, z \in X$:

**M1 (Positividad):** $d(x, x) = 0$ para todo $x \in X$.

**M2 (Identidad de indiscernibles):** Si $d(x, y) = 0$, entonces $x = y$.

**M3 (Simetria):** $d(x, y) = d(y, x)$.

**M4 (Desigualdad triangular):** $d(x, z) \leq d(x, y) + d(y, z)$.

::: warning Notacion
Algunos textos fusionan M1 y M2 en un solo axioma: $d(x, y) = 0 \iff x = y$. Llamamos a esta versión combinada **positividad definida**.
:::

### Pseudometrica

Si solo se cumple M1 (es decir, $d(x, y) = 0$ no implica $x = y$), obtenemos una **pseudométrica**. Las pseudométricas aparecen naturalmente en espacios cociente.

### Subespacio metrico

Si $(X, d)$ es un espacio métrico y $A \subseteq X$ es no vacío, entonces $(A, d|_{A \times A})$ es un **subespacio métrico** de $X$, donde $d|_{A \times A}$ es la restricción de $d$ a $A \times A$.

## Interpretacion en lenguaje natural

- **M1:** La distancia de un punto a sí mismo es cero.
- **M2:** Dos puntos distintos no pueden estar a distancia cero.
- **M3:** La distancia de $x$ a $y$ es la misma que de $y$ a $x$.
- **M4:** Ir de $x$ a $z$ directamente nunca es más largo que ir de $x$ a $y$ y luego de $y$ a $z$.

El axioma M4 es la formalización del principio geométrico: "el camino más corto entre dos puntos es la recta".

## Ejemplos canónicos

### Ejemplo 1 — El espacio metrico euclideo $(\mathbb{R}^n, d_2)$

Para $x = (x_1, \ldots, x_n)$ e $y = (y_1, \ldots, y_n)$ en $\mathbb{R}^n$:

$$
d_2(x, y) = \sqrt{\sum_{i=1}^n (x_i - y_i)^2} = \|x - y\|_2.
$$

**Verificacion de M1-M4:**

**M1:** $d_2(x, x) = \sqrt{\sum (x_i - x_i)^2} = \sqrt{0} = 0$. ✓

**M2:** Si $d_2(x, y) = 0$, entonces $\sum (x_i - y_i)^2 = 0$, luego cada término es cero, así $x_i = y_i$ para todo $i$, es decir $x = y$. ✓

**M3:** $d_2(x, y) = \sqrt{\sum (x_i - y_i)^2} = \sqrt{\sum (y_i - x_i)^2} = d_2(y, x)$. ✓

**M4:** La desigualdad triangular se deduce de la desigualdad de Cauchy-Schwarz:

$$
\left|\sum_{i=1}^n a_i b_i\right| \leq \sqrt{\sum_{i=1}^n a_i^2} \sqrt{\sum_{i=1}^n b_i^2}.
$$

Aplicando con $a_i = x_i - y_i$ y $b_i = y_i - z_i$:

$$
\|x - z\|_2 = \|x - y + y - z\|_2 \leq \|x - y\|_2 + \|y - z\|_2.
$$ ✓

### Ejemplo 2 — Metrica Manhattan $(\mathbb{R}^n, d_1)$

$$
d_1(x, y) = \sum_{i=1}^n |x_i - y_i| = \|x - y\|_1.
$$

**Verificacion:**

**M1:** $d_1(x, x) = \sum |x_i - x_i| = 0$. ✓

**M2:** Si $\sum |x_i - y_i| = 0$, cada término es cero, luego $x_i = y_i$ para todo $i$. ✓

**M3:** $d_1(x, y) = \sum |x_i - y_i| = \sum |y_i - x_i| = d_1(y, x)$. ✓

**M4:** Por la desigualdad triangular del valor absoluto:

$$
|x_i - z_i| \leq |x_i - y_i| + |y_i - z_i|.
$$

Sumando sobre $i$:

$$
d_1(x, z) \leq d_1(x, y) + d_1(y, z).
$$

### Ejemplo 3 — Metrica del maximo $(\mathbb{R}^n, d_\infty)$

$$
d_\infty(x, y) = \max_{1 \leq i \leq n} |x_i - y_i| = \|x - y\|_\infty.
$$

**Verificacion:**

**M1:** $d_\infty(x, x) = \max |x_i - x_i| = 0$. ✓

**M2:** Si $\max |x_i - y_i| = 0$, entonces $|x_i - y_i| = 0$ para todo $i$, luego $x = y$. ✓

**M3:** Simetría inmediata. ✓

**M4:** Para cada $i$:

$$
|x_i - z_i| \leq |x_i - y_i| + |y_i - z_i| \leq d_\infty(x, y) + d_\infty(y, z).
$$

Tomando máximo sobre $i$:

$$
d_\infty(x, z) \leq d_\infty(x, y) + d_\infty(y, z).
$$ ✓

### Ejemplo 4 — Espacio de funciones continuas $C[a,b]$ con metrica supremo

El conjunto de funciones continuas $f\colon [a,b] \to \mathbb{R}$ con la métrica:

$$
d_\infty(f, g) = \sup_{x \in [a,b]} |f(x) - g(x)| = \|f - g\|_\infty.
$$

El supremo es un máximo por el teorema de Weierstrass (función continua en compacto alcanza máximo).

**Verificacion:**

**M1:** $d_\infty(f, f) = \sup |f(x) - f(x)| = 0$. ✓

**M2:** Si $\sup |f(x) - g(x)| = 0$, entonces $|f(x) - g(x)| = 0$ para todo $x$, luego $f = g$. ✓

**M3:** $\sup |f(x) - g(x)| = \sup |g(x) - f(x)|$. ✓

**M4:** Para cada $x \in [a,b]$:

$$
|f(x) - h(x)| \leq |f(x) - g(x)| + |g(x) - h(x)| \leq d_\infty(f, g) + d_\infty(g, h).
$$

Tomando supremo:

$$
d_\infty(f, h) \leq d_\infty(f, g) + d_\infty(g, h).
$$ ✓

### Ejemplo 5 — Espacio de sucesiones $\ell^2$ con metrica $L^2$

$$
\ell^2 = \left\{(x_n)_{n=1}^\infty : \sum_{n=1}^\infty |x_n|^2 < \infty\right\}
$$

con métrica:

$$
d_2(x, y) = \sqrt{\sum_{n=1}^\infty |x_n - y_n|^2}.
$$

La convergencia de la serie se garantiza por Cauchy-Schwarz para series. La desigualdad triangular (Minkowski) requiere demostración.

### Ejemplo 6 — Espacio discreto

En cualquier conjunto $X$:

$$
d_{\text{disc}}(x, y) = \begin{cases} 0 & \text{si } x = y, \\ 1 & \text{si } x \neq y. \end{cases}
$$

**Verificacion:**

**M1-M2:** $d(x, x) = 0$, y $d(x, y) = 1 > 0$ si $x \neq y$. ✓

**M3:** Simetría inmediata. ✓

**M4:** Si $x = z$, entonces $d(x, z) = 0 \leq d(x, y) + d(y, z)$. Si $x \neq z$, entonces al menos uno de $d(x, y)$ o $d(y, z)$ es $1$ (pues $y$ no puede ser igual a ambos), así:

$$
d(x, z) = 1 \leq d(x, y) + d(y, z).
$$ ✓

## Teoremas y demostraciones

### Proposicion — La desigualdad triangular inversa

En todo espacio métrico $(X, d)$:

$$
|d(x, z) - d(y, z)| \leq d(x, y) \quad \forall\, x, y, z \in X.
$$

**Demostracion.**

Por la desigualdad triangular:

$$
d(x, z) \leq d(x, y) + d(y, z),
$$

luego:

$$
d(x, z) - d(y, z) \leq d(x, y).
$$

Intercambiando $x$ e $y$:

$$
d(y, z) - d(x, z) \leq d(y, x) = d(x, y).
$$

Combinando ambas:

$$
|d(x, z) - d(y, z)| \leq d(x, y).
$$

$\blacksquare$

### Corolario — Continuidad de la metrica

La métrica $d\colon X \times X \to [0, \infty)$ es continua respecto de la topología producto.

### Proposicion — La metrica es no negativa

En todo espacio métrico, $d(x, y) \geq 0$ para todo $x, y \in X$.

**Demostracion.**

Por M4 con $y = z$:

$$
d(x, z) \leq d(x, z) + d(z, z) = d(x, z) + 0.
$$

Esto es trivialemente cierto. Pero aplicando M4 con $z = x$:

$$
0 = d(x, x) \leq d(x, y) + d(y, x) = 2d(x, y).
$$

Luego $d(x, y) \geq 0$.

$\blacksquare$

### Proposicion — Subespacio metrico

Si $(X, d)$ es un espacio métrico y $A \subseteq X$ es no vacío, entonces $(A, d|_{A \times A})$ es un espacio métrico.

**Demostracion.**

La restricción $d|_{A \times A}$ satisface todos los axiomas M1-M4 porque los satisface $d$ en $X \times X$.

$\blacksquare$

## Equivalencia de metricas en $\mathbb{R}^n$

Las tres métricas $d_1$, $d_2$ y $d_\infty$ en $\mathbb{R}^n$ son **Lipschitz-equivalentes**:

$$
d_\infty(x, y) \leq d_2(x, y) \leq d_1(x, y) \leq n \cdot d_\infty(x, y).
$$

**Demostracion.**

**$d_\infty \leq d_2$:** Si $M = \max_i |x_i - y_i|$, entonces $M^2 \leq \sum (x_i - y_i)^2$, así $M \leq \sqrt{\sum (x_i - y_i)^2}$.

**$d_2 \leq d_1$:** $\sum (x_i - y_i)^2 \leq \left(\sum |x_i - y_i|\right)^2$ porque al expandir el cuadrado aparecen todos los productos cruzados no negativos.

**$d_1 \leq n \cdot d_\infty$:** $\sum |x_i - y_i| \leq \sum d_\infty(x, y) = n \cdot d_\infty(x, y)$.

$\blacksquare$

## Errores comunes

1. **Suponer que toda función de "distancia" es métrica:** $(x - y)^2$ en $\mathbb{R}$ no satisface M4. Ejemplo: $d(0, 2) = 4$ pero $d(0, 1) + d(1, 2) = 1 + 1 = 2 < 4$.

2. **Confundir métrica con norma:** Toda norma induce una métrica ($d(x, y) = \|x - y\|$), pero no toda métrica proviene de una norma. La métrica discreta no es inducida por norma.

3. **Olvidar verificar todos los axiomas:** Especialmente M4 en métricas construidas artificialmente.

4. **Aplicar resultados de $\mathbb{R}^n$ a espacios generales:** En $\mathbb{R}^n$, cerrado + acotado = compacto (Heine-Borel). Esto es **falso** en general.

## Resumen operativo

| Axioma | Enunciado | Significado |
|---|---|---|
| M1 | $d(x, x) = 0$ | Distancia a sí mismo es cero |
| M2 | $d(x, y) = 0 \Rightarrow x = y$ | Cero solo entre puntos iguales |
| M3 | $d(x, y) = d(y, x)$ | Simetría |
| M4 | $d(x, z) \leq d(x, y) + d(y, z)$ | Triangular |

**Receta para verificar que $d$ es métrica:**
1. Verificar M1: $d(x, x) = 0$.
2. Verificar M2: Si $d(x, y) = 0$, entonces $x = y$.
3. Verificar M3: $d(x, y) = d(y, x)$.
4. Verificar M4: Usar desigualdades apropiadas (Cauchy-Schwarz, Minkowski, etc.)

## Ejercicios

### Ejercicio 1

Demuestre que la función $d(x, y) = |x - y|^p$ en $\mathbb{R}$ es métrica si y solo si $p \leq 1$.

### Ejercicio 2

Sea $(X, d)$ un espacio métrico. Demuestre que $\rho(x, y) = \frac{d(x, y)}{1 + d(x, y)}$ también define una métrica en $X$.

### Ejercicio 3

En $\mathbb{R}^2$, compare visualmente las bolas unitarias $B(0, 1)$ para las métricas $d_1$, $d_2$ y $d_\infty$.

### Ejercicio 4

Demuestre que el espacio de sucesiones $\ell^1 = \{(x_n) : \sum |x_n| < \infty\}$ con $d(x, y) = \sum |x_n - y_n|$ es un espacio métrico.

### Ejercicio 5

Sea $X = \{1, 2, \ldots, n\}$. Defina $d(i, j) = |i - j|$. Verifique que $(X, d)$ es un espacio métrico.

### Ejercicio 6

En el espacio discreto con $n$ puntos, calcule cuántos pares distintos de puntos existen y verifique M4 para todos ellos.

### Ejercicio 7

Demuestre que la desigualdad triangular inversa implica que la métrica es continua en cada coordenada.

### Ejercicio 8

Sean $(X, d_X)$ y $(Y, d_Y)$ espacios métricos. Defina $d_{X \times Y}\big((x_1, y_1), (x_2, y_2)\big) = d_X(x_1, x_2) + d_Y(y_1, y_2)$. Verifique que es una métrica en $X \times Y$.

### Ejercicio 9

En $C[0,1]$ con la métrica del supremo, demuestre que $d(f, 0) = \sup_{x \in [0,1]} |f(x)|$ es una norma.

### Ejercicio 10

Demuestre que si $d$ es métrica y $f\colon [0, \infty) \to [0, \infty)$ es creciente, cóncava, con $f(0) = 0$ y $f(t) > 0$ para $t > 0$, entonces $f \circ d$ también es métrica.

### Ejercicio 11

En el espacio $\ell^\infty$ de sucesiones acotadas con $d_\infty(x, y) = \sup_n |x_n - y_n|$, verifique todos los axiomas métricos.

### Ejercicio 12

Demuestre que $\ell^1 \subsetneq \ell^2 \subsetneq \ell^\infty$. Para cada inclusión estricta, dé un ejemplo.

### Ejercicio 13

Sea $(X, d)$ un espacio métrico y $A \subseteq X$ no vacío. Defina $d_A(x, y) = d(x, y)|_{A \times A}$. Verifique que $(A, d_A)$ es un subespacio métrico.

### Ejercicio 14

Dos métricas $d_1$ y $d_2$ en $X$ son Lipschitz-equivalentes si existen $\alpha, \beta > 0$ tales que $\alpha d_1 \leq d_2 \leq \beta d_1$. Demuestre que esto es una relación de equivalencia.

### Ejercicio 15

En $\mathbb{R}^n$, demuestre que las métricas $d_1$, $d_2$ y $d_\infty$ generan los mismos conjuntos abiertos.

## Soluciones

### Solucion 1

Si $p \leq 1$, la función $\varphi(t) = t^p$ es cóncava en $[0, \infty)$, así $(a+b)^p \leq a^p + b^p$ para $a, b \geq 0$. Esto da la desigualdad triangular:

$$
|x - z|^p \leq \big(|x - y| + |y - z|\big)^p \leq |x - y|^p + |y - z|^p.
$$

Si $p > 1$, tomamos $x = 0, y = 1, z = 2$. Entonces $d(0, 2) = 2^p$, pero $d(0, 1) + d(1, 2) = 1 + 1 = 2$. Como $2^p > 2$ para $p > 1$, falla M4.

### Solucion 2

**M1:** $\rho(x, x) = \frac{d(x,x)}{1+d(x,x)} = \frac{0}{1} = 0$. ✓

**M2:** Si $\rho(x, y) = 0$, entonces $d(x, y) = 0$, así $x = y$. ✓

**M3:** Simetría inmediata. ✓

**M4:** La función $\varphi(t) = \frac{t}{1+t}$ es creciente en $[0, \infty)$. Usando que es cóncava:

$$
\frac{a + b}{1 + a + b} \leq \frac{a}{1+a} + \frac{b}{1+b}.
$$

Luego:

$$
\rho(x, z) = \varphi\big(d(x, z)\big) \leq \varphi\big(d(x, y) + d(y, z)\big) \leq \varphi\big(d(x, y)\big) + \varphi\big(d(y, z)\big) = \rho(x, y) + \rho(y, z).
$$ ✓

### Solucion 3

- $B_{d_1}(0, 1) = \{(x, y) : |x| + |y| < 1\}$: rombo con vértices en $(\pm 1, 0)$ y $(0, \pm 1)$.
- $B_{d_2}(0, 1) = \{(x, y) : x^2 + y^2 < 1\}$: disco unitario.
- $B_{d_\infty}(0, 1) = \{(x, y) : \max(|x|, |y|) < 1\} = (-1, 1)^2$: cuadrado.

### Solucion 4

**M1:** $d(x, x) = \sum |x_n - x_n| = 0$. ✓

**M2:** Si $\sum |x_n - y_n| = 0$, cada término es cero, así $x_n = y_n$ para todo $n$. ✓

**M3:** Simetría inmediata. ✓

**M4:** $|x_n - z_n| \leq |x_n - y_n| + |y_n - z_n|$ para cada $n$. Sumando:

$$
d(x, z) = \sum |x_n - z_n| \leq \sum |x_n - y_n| + \sum |y_n - z_n| = d(x, y) + d(y, z).
$$ ✓

### Solucion 5

**M1:** $d(i, i) = |i - i| = 0$. ✓

**M2:** Si $d(i, j) = |i - j| = 0$, entonces $i = j$. ✓

**M3:** $|i - j| = |j - i|$. ✓

**M4:** $|i - k| \leq |i - j| + |j - k|$ por la desigualdad triangular en $\mathbb{R}$. ✓

### Solucion 6

Hay $\binom{n}{2}$ pares distintos con $i < j$. Para cada par, $d(i, j) = 1 > 0$. La desigualdad triangular se verifica punto por punto.

### Solucion 7

Fijado $z$ y $\varepsilon > 0$, si $d(x, y) < \varepsilon$, entonces:

$$
|d(x, z) - d(y, z)| \leq d(x, y) < \varepsilon.
$$

Esto muestra continuidad respecto a la primera coordenada. Por simetría, también respecto a la segunda.

### Solucion 8

**M1:** $d_{X \times Y}\big((x, y), (x, y)\big) = d_X(x, x) + d_Y(y, y) = 0$. ✓

**M2:** Si $d_X(x_1, x_2) + d_Y(y_1, y_2) = 0$, ambos términos son cero, así $x_1 = x_2$ e $y_1 = y_2$. ✓

**M3:** Simetría inmediata. ✓

**M4:** Desigualdad triangular en cada coordenada, luego suma. ✓

### Solucion 9

La norma $||f|| = \sup_{x \in [0,1]} |f(x)|$ satisface:

- $||f|| \geq 0$ y $||f|| = 0 \iff f = 0$.
- $||\alpha f|| = |\alpha| ||f||$.
- $||f + g|| \leq ||f|| + ||g||$.

La métrica asociada es $d(f, g) = ||f - g||$.

### Solucion 10

Las hipótesis garantizan que $\varphi(t) = f(t)$ satisface:

- $\varphi(0) = 0$ y $\varphi(t) > 0$ para $t > 0$ (da M1-M2).
- $\varphi$ es creciente: $d$ métrica implica $\varphi \circ d$ hereda M3.
- Concavidad implica $\varphi(a + b) \leq \varphi(a) + \varphi(b)$ para $a, b \geq 0$, que da M4.

### Solucion 11

**M1:** $d_\infty(x, x) = \sup |x_n - x_n| = 0$. ✓

**M2:** Si $\sup |x_n - y_n| = 0$, cada término es cero, así $x_n = y_n$ para todo $n$. ✓

**M3:** Simetría inmediata. ✓

**M4:** Para cada $n$: $|x_n - z_n| \leq |x_n - y_n| + |y_n - z_n| \leq d_\infty(x, y) + d_\infty(y, z)$. Tomando supremo: $d_\infty(x, z) \leq d_\infty(x, y) + d_\infty(y, z)$. ✓

### Solucion 12

**$\ell^1 \subseteq \ell^2$:** Si $\sum |x_n| < \infty$, entonces $|x_n| \to 0$, así eventualmente $|x_n| \leq 1$. Para $|x_n| \leq 1$: $|x_n|^2 \leq |x_n|$. Luego $\sum |x_n|^2 \leq \sum |x_n| < \infty$.

**Inclusión estricta:** $x_n = 1/n$ está en $\ell^2$ (suma de $1/n^2$ converge) pero no en $\ell^1$ (suma de $1/n$ diverge).

**$\ell^2 \subseteq \ell^\infty$:** Si $\sum |x_n|^2 < \infty$, entonces $|x_n|^2 \to 0$, así $(x_n)$ es acotada.

**Inclusión estricta:** La sucesión constante $x_n = 1$ está en $\ell^\infty$ (acotada) pero no en $\ell^2$ ($\sum 1$ diverge).

### Solucion 13

La restricción $d_A = d|_{A \times A}$ hereda todos los axiomas de $d$ porque se verifican para todo par de puntos, en particular para puntos en $A$.

### Solucion 14

- **Reflexiva:** $1 \cdot d_1 = d_1 \leq d_1 \leq 1 \cdot d_1$. ✓
- **Simétrica:** Si $\alpha d_1 \leq d_2 \leq \beta d_1$, entonces $\frac{1}{\beta} d_2 \leq d_1 \leq \frac{1}{\alpha} d_2$. ✓
- **Transitiva:** Si $\alpha_1 d_1 \leq d_2 \leq \beta_1 d_1$ y $\alpha_2 d_2 \leq d_3 \leq \beta_2 d_2$, entonces $(\alpha_1 \alpha_2) d_1 \leq d_3 \leq (\beta_1 \beta_2) d_1$. ✓

### Solucion 15

Dos métricas Lipschitz-equivalentes generan la misma topología. Como $d_\infty \leq d_2 \leq d_1 \leq n d_\infty$, las tres métricas son equivalentes. Más concretamente, una bola en una métrica contiene una bola en la otra y viceversa, así los abiertos coinciden.