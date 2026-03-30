---
title: Bolas abiertas en espacios métricos
description: Definición de bola abierta y cerrada, propiedades operativas, cálculo de bolas en métricas clásicas y 15 ejercicios resueltos.
---

# Bolas abiertas en espacios métricos

## Motivación e intuición

En $\mathbb{R}$, los intervalos abiertos $(a - r, a + r)$ son los «entornos básicos» de un punto $a$. En un espacio métrico general, el concepto análogo es la **bola abierta**: el conjunto de todos los puntos que están a distancia menor que $r$ de un centro dado. Las bolas abiertas son los ladrillos con los que se construye toda la topología del espacio — abiertos, cerrados, continuidad, convergencia — todo se define en términos de bolas.

La forma geométrica de una bola depende fuertemente de la métrica elegida: en $\mathbb{R}^2$ con la métrica euclídea es un disco, con la métrica del taxista es un rombo, y con la métrica del supremo es un cuadrado. Entender estas diferencias es el primer paso para desarrollar intuición geométrica en espacios métricos.

## Prerrequisitos

- Definición de espacio métrico y métricas clásicas (tema **Espacios métricos**).
- Desigualdad triangular y desigualdad triangular inversa.
- Supremo e ínfimo.

## Definiciones formales

### Bola abierta

Sea $(X, d)$ un espacio métrico, $a \in X$ y $r > 0$. La **bola abierta** de centro $a$ y radio $r$ es

$$
B(a, r) = \{x \in X : d(x, a) < r\}.
$$

### Bola cerrada

La **bola cerrada** de centro $a$ y radio $r \geq 0$ es

$$
\overline{B}(a, r) = \{x \in X : d(x, a) \leq r\}.
$$

### Esfera

La **esfera** de centro $a$ y radio $r > 0$ es

$$
S(a, r) = \{x \in X : d(x, a) = r\}.
$$

### Diámetro

El **diámetro** de un subconjunto no vacío $A \subseteq X$ es

$$
\text{diam}(A) = \sup\{d(x, y) : x, y \in A\}.
$$

Si $\text{diam}(A) < \infty$, decimos que $A$ es **acotado**.

### Entorno

Un **entorno** de $a \in X$ es cualquier conjunto $V \subseteq X$ que contiene alguna bola abierta $B(a, r)$ con $r > 0$.

## Interpretación en lenguaje natural

- La bola abierta $B(a, r)$ es el «vecindario» de todos los puntos estrictamente más cerca que $r$ del centro $a$.
- La bola cerrada incluye también los puntos exactamente a distancia $r$.
- La esfera son los puntos que están exactamente en la «frontera» de la bola.
- El diámetro mide la máxima separación posible entre dos puntos de un conjunto.

**Cuidado:** En general, $\overline{B}(a,r) \neq$ clausura de $B(a,r)$, y $S(a,r) \neq$ frontera de $B(a,r)$. Esto puede ocurrir en la métrica discreta.

## Ejemplos básicos

### Ejemplo 1 — Bolas en $(\mathbb{R}, |\cdot|)$

$B(a, r) = (a-r, a+r)$, $\overline{B}(a,r) = [a-r, a+r]$, $S(a,r) = \{a-r, a+r\}$.

### Ejemplo 2 — Bolas en $(\mathbb{R}^2, d_2)$ (euclídea)

$B(0, 1) = \{(x,y) : x^2 + y^2 < 1\}$: el disco abierto unitario.

### Ejemplo 3 — Bolas en $(\mathbb{R}^2, d_1)$ (taxista)

$B(0, 1) = \{(x,y) : |x| + |y| < 1\}$: un rombo (cuadrado rotado $45°$) con vértices en $(\pm 1, 0)$ y $(0, \pm 1)$.

### Ejemplo 4 — Bolas en $(\mathbb{R}^2, d_\infty)$ (supremo)

$B(0, 1) = \{(x,y) : \max(|x|,|y|) < 1\} = (-1,1)^2$: un cuadrado abierto.

### Ejemplo 5 — Bolas en la métrica discreta

$$
B(a, r) = \begin{cases} \{a\} & \text{si } r \leq 1, \\ X & \text{si } r > 1. \end{cases}
$$

$$
\overline{B}(a, r) = \begin{cases} \{a\} & \text{si } r < 1, \\ X & \text{si } r \geq 1. \end{cases}
$$

En particular, $B(a, 1) = \{a\}$ (un solo punto) y $\overline{B}(a, 1) = X$ (todo el espacio). Aquí la clausura de $B(a,1)$ es $\{a\}$ (que es cerrado), pero $\overline{B}(a,1) = X$, así que $\overline{B}(a,1) \neq \overline{B(a,1)}$.

## Ejemplos finos y contraejemplos

### Ejemplo 6 — Bola abierta en $C[0,1]$

En $C[0,1]$ con la métrica $d_\infty$, la bola $B(f, \varepsilon)$ es el conjunto de funciones $g$ continuas tales que $\|f-g\|_\infty < \varepsilon$, es decir, cuya gráfica queda dentro de la «banda» de anchura $\varepsilon$ alrededor de la gráfica de $f$.

### Ejemplo 7 — Bola en $\ell^2$

En $\ell^2$, la bola $B(0,1) = \{x = (x_n) : \sum x_n^2 < 1\}$ es la «bola unitaria» del espacio de Hilbert $\ell^2$. La sucesión $e_k = (0,\ldots,0,1,0,\ldots)$ (con $1$ en la posición $k$) satisface $\|e_k\| = 1$, así que $e_k \in S(0,1)$. Además, $d(e_j, e_k) = \sqrt{2}$ para $j \neq k$: los vectores de la base son equidistantes entre sí.

### Ejemplo 8 — Bolas en un espacio con dos puntos

Sea $X = \{p, q\}$ con $d(p,q) = 3$. Entonces:
- $B(p, 1) = \{p\}$, $B(p, 4) = X$.
- $\overline{B}(p, 3) = X$, $\overline{B}(p, 2) = \{p\}$.
- $S(p, 3) = \{q\}$.

### Ejemplo 9 — Diámetro de una bola

En general, $\text{diam}(B(a,r)) \leq 2r$. La igualdad se cumple en $\mathbb{R}^n$ (basta tomar $x = a + r\hat{e}$ y $y = a - r\hat{e}$ y hacer $r - \varepsilon$). Pero en la métrica discreta, $\text{diam}(B(a,1)) = \text{diam}(\{a\}) = 0 < 2$.

## Proposiciones y teoremas

### Proposición 1 — Toda bola abierta es un conjunto abierto

Para todo $a \in X$ y $r > 0$, si $x \in B(a, r)$, entonces existe $\delta > 0$ tal que $B(x, \delta) \subseteq B(a, r)$.

### Proposición 2 — Toda bola cerrada es un conjunto cerrado

$\overline{B}(a, r)$ es cerrado (su complemento es abierto).

### Proposición 3 — Relación entre bolas y métricas equivalentes

Si $\alpha\,d_1 \leq d_2 \leq \beta\,d_1$, entonces

$$
B_{d_1}\!\left(a, \frac{r}{\beta}\right) \subseteq B_{d_2}(a, r) \subseteq B_{d_1}\!\left(a, \frac{r}{\alpha}\right).
$$

### Proposición 4 — Monotonía del radio

Si $0 < r_1 \leq r_2$, entonces $B(a, r_1) \subseteq B(a, r_2)$.

## Demostraciones completas

### Demostración de la Proposición 1

Sea $x \in B(a, r)$, es decir $d(x, a) < r$. Definimos $\delta = r - d(x, a) > 0$.

Si $y \in B(x, \delta)$, entonces $d(y, x) < \delta$. Por la desigualdad triangular:

$$
d(y, a) \leq d(y, x) + d(x, a) < \delta + d(x, a) = r.
$$

Luego $y \in B(a, r)$. Esto prueba $B(x, \delta) \subseteq B(a, r)$. $\qquad \blacksquare$

### Demostración de la Proposición 2

Probamos que $X \setminus \overline{B}(a, r)$ es abierto. Sea $x \notin \overline{B}(a,r)$, es decir $d(x,a) > r$. Definimos $\delta = d(x,a) - r > 0$.

Si $y \in B(x, \delta)$, por la desigualdad triangular inversa:

$$
d(y, a) \geq d(x, a) - d(x, y) > d(x, a) - \delta = r.
$$

Luego $y \notin \overline{B}(a,r)$. Así $B(x, \delta) \subseteq X \setminus \overline{B}(a,r)$. $\qquad \blacksquare$

### Demostración de la Proposición 3

Si $d_2(x, a) < r$, entonces $d_1(x, a) \leq d_2(x, a)/\alpha < r/\alpha$, así que $x \in B_{d_1}(a, r/\alpha)$.

Si $d_1(x, a) < r/\beta$, entonces $d_2(x, a) \leq \beta\,d_1(x, a) < r$, así que $x \in B_{d_2}(a, r)$. $\qquad \blacksquare$

## Errores comunes

1. **Confundir bola cerrada con clausura de bola abierta**: En general $\overline{B}(a,r)$ puede ser estrictamente más grande que la clausura topológica de $B(a,r)$. Ejemplo: métrica discreta, $B(a,1) = \{a\}$, clausura de $B(a,1)$ es $\{a\}$, pero $\overline{B}(a,1) = X$.

2. **Suponer que toda bola tiene diámetro $2r$**: $\text{diam}(B(a,r)) \leq 2r$, con igualdad en $\mathbb{R}^n$, pero no en general.

3. **Creer que dos bolas con la misma intersección son iguales**: Bolas con centros distintos pueden contener los mismos puntos en métricas exóticas.

4. **Olvidar que el radio debe ser positivo** para que la bola abierta no sea vacía: $B(a, 0) = \emptyset$ por definición (no hay $x$ con $d(x,a) < 0$).

5. **Confundir bolas en métricas distintas sobre el mismo conjunto**: $B_{d_1}(0,1)$ en $\mathbb{R}^2$ es un rombo, $B_{d_2}(0,1)$ es un disco y $B_{d_\infty}(0,1)$ es un cuadrado.

## Resumen operativo

| Concepto | Definición | Clave |
|---|---|---|
| Bola abierta | $B(a,r) = \{x : d(x,a) < r\}$ | Desigualdad estricta |
| Bola cerrada | $\overline{B}(a,r) = \{x : d(x,a) \leq r\}$ | Desigualdad amplia |
| Esfera | $S(a,r) = \{x : d(x,a) = r\}$ | Igualdad |
| Diámetro | $\sup\{d(x,y) : x,y \in A\}$ | Puede ser $\infty$ |
| Entorno | Contiene una $B(a,r)$ | Base para la topología |

**Receta para verificar que $x \in B(a,r)$:** calcular $d(x,a)$ y comprobar que es $< r$.

**Receta para demostrar $B(x,\delta) \subseteq B(a,r)$:** tomar $y \in B(x,\delta)$ y usar la desigualdad triangular.

## Ejercicios

### Ejercicio 1

Describa y dibuje $B(0, 2)$ en $(\mathbb{R}^2, d_1)$.

### Ejercicio 2

Describa y dibuje $B(0, 2)$ en $(\mathbb{R}^2, d_\infty)$.

### Ejercicio 3

En $(\mathbb{R}^2, d_2)$, determine si $(1, 1) \in B(0, 2)$.

### Ejercicio 4

En la métrica discreta sobre $X = \{a, b, c, d\}$, liste los elementos de $B(a, 1)$, $\overline{B}(a, 1)$ y $S(a, 1)$.

### Ejercicio 5

Calcule $\text{diam}(\{1/n : n \geq 1\})$ en $(\mathbb{R}, |\cdot|)$.

### Ejercicio 6

En $(\ell^\infty, d_\infty)$, determine si la sucesión $x = (1, 1/2, 1/3, 1/4, \ldots)$ pertenece a $B(0, 2)$.

### Ejercicio 7

Demuestre que si $B(a, r_1) \cap B(b, r_2) \neq \emptyset$, entonces $d(a,b) < r_1 + r_2$.

### Ejercicio 8

Demuestre que $B(a, r) \subseteq \overline{B}(a, r)$ y que la inclusión puede ser estricta.

### Ejercicio 9

En $C[0,1]$ con $d_\infty$, sea $f(x) = x$. Determine si $g(x) = x + 0.1\sin(100x) \in B(f, 0.2)$.

### Ejercicio 10

Demuestre que $\text{diam}(B(a, r)) \leq 2r$ en todo espacio métrico.

### Ejercicio 11

Sea $(X, d)$ un espacio métrico y $A \subseteq B(a, r)$. Demuestre que $\text{diam}(A) \leq 2r$.

### Ejercicio 12

En $(\mathbb{R}^2, d_2)$, encuentre el menor $r$ tal que $B(0, r)$ contenga al conjunto $\{(1,0), (0,1), (-1,0), (0,-1)\}$.

### Ejercicio 13

Sea $(X, d)$ espacio métrico con $d$ la métrica discreta. Demuestre que toda bola $B(a, 1)$ es simultáneamente abierta y cerrada.

### Ejercicio 14

En $\ell^1$, calcule $d(x, y)$ donde $x = (1, 1/2, 1/4, 1/8, \ldots)$ e $y = (0, 0, 0, \ldots)$.

### Ejercicio 15

Demuestre que en todo espacio métrico, la intersección de dos bolas abiertas es un conjunto abierto.

## Soluciones

### Solución 1

$B(0, 2) = \{(x,y) \in \mathbb{R}^2 : |x| + |y| < 2\}$. Es un rombo (cuadrado rotado) con vértices en $(2,0)$, $(0,2)$, $(-2,0)$, $(0,-2)$. Los lados son los segmentos que unen estos vértices, y el interior (sin los lados) es la bola abierta.

### Solución 2

$B(0, 2) = \{(x,y) : \max(|x|,|y|) < 2\} = (-2, 2) \times (-2, 2)$. Es un cuadrado abierto de lado $4$ centrado en el origen, con lados paralelos a los ejes.

### Solución 3

$d_2((1,1), (0,0)) = \sqrt{1^2 + 1^2} = \sqrt{2} \approx 1.414 < 2$. Sí, $(1,1) \in B(0, 2)$.

### Solución 4

En la métrica discreta, $d(a,b) = 1$ para $b \neq a$.

- $B(a, 1) = \{x : d(x,a) < 1\} = \{a\}$ (solo el centro).
- $\overline{B}(a, 1) = \{x : d(x,a) \leq 1\} = \{a, b, c, d\} = X$ (todo el espacio).
- $S(a, 1) = \{x : d(x,a) = 1\} = \{b, c, d\}$.

### Solución 5

Sea $A = \{1/n : n \geq 1\} = \{1, 1/2, 1/3, \ldots\}$. El supremo de $|1/n - 1/m|$ para $n, m \geq 1$ se alcanza con $n = 1, m \to \infty$: $\sup = |1 - 0| = 1$. Pero $0 \notin A$, así que el supremo es $|1 - 1/m|$ con $m$ grande, que tiende a $1$ sin alcanzarlo. Sin embargo, $|1/1 - 1/m|$ para $m$ finito da valores arbitrariamente cercanos a $1$, y $|1 - 1/2| = 1/2$, $|1 - 1/n| = (n-1)/n \to 1$.

$\text{diam}(A) = \sup_{n,m} |1/n - 1/m| = 1 - 0 = 1$... pero $0 \notin A$. Recalculamos: $\sup = \sup_{n \geq 1, m \geq 1}|1/n - 1/m|$. Para $n = 1$: $\sup_m |1 - 1/m| = \sup\{1/2, 2/3, 3/4, \ldots\} = 1$ (supremo, no máximo). Luego $\text{diam}(A) = 1$.

### Solución 6

$d_\infty(x, 0) = \sup_{n \geq 1} |1/n| = 1 < 2$. Sí, $x \in B(0, 2)$.

### Solución 7

Sea $c \in B(a, r_1) \cap B(b, r_2)$. Entonces $d(c, a) < r_1$ y $d(c, b) < r_2$. Por la desigualdad triangular:

$$
d(a, b) \leq d(a, c) + d(c, b) < r_1 + r_2. \qquad \blacksquare
$$

### Solución 8

Si $d(x, a) < r$, entonces $d(x, a) \leq r$, así que $B(a,r) \subseteq \overline{B}(a,r)$.

Para la inclusión estricta: en $\mathbb{R}$ con $|\cdot|$, $B(0, 1) = (-1, 1)$ y $\overline{B}(0,1) = [-1,1]$. Los puntos $\pm 1$ están en la bola cerrada pero no en la abierta.

### Solución 9

$d_\infty(f, g) = \sup_{x \in [0,1]} |0.1\sin(100x)| = 0.1 \cdot 1 = 0.1 < 0.2$.

Sí, $g \in B(f, 0.2)$.

### Solución 10

Sean $x, y \in B(a, r)$. Entonces $d(x, a) < r$ y $d(y, a) < r$. Por la desigualdad triangular:

$$
d(x, y) \leq d(x, a) + d(a, y) < r + r = 2r.
$$

Tomando supremo sobre $x, y \in B(a, r)$: $\text{diam}(B(a,r)) \leq 2r$. $\qquad \blacksquare$

### Solución 11

Como $A \subseteq B(a, r)$, para todo $x, y \in A$ tenemos $x, y \in B(a, r)$. Por el Ejercicio 10, $d(x,y) < 2r$. Tomando supremo: $\text{diam}(A) \leq 2r$. $\qquad \blacksquare$

### Solución 12

Las distancias euclídeas del origen a cada punto son: $d_2(0, (\pm 1, 0)) = 1$ y $d_2(0, (0, \pm 1)) = 1$. Todos están a distancia $1$ del origen. Necesitamos $r > 1$ para que estén en $B(0, r)$ (desigualdad estricta). El menor radio tal que todos pertenezcan a $B(0, r)$ es cualquier $r > 1$, pero no existe un mínimo (se necesita $r > 1$, no $r \geq 1$, porque las bolas son abiertas).

Si la pregunta es el menor $r$ tal que el conjunto esté **contenido** en $\overline{B}(0, r)$, la respuesta es $r = 1$.

### Solución 13

$B(a, 1) = \{a\}$ (un solo punto).

**Abierto:** Sea $x \in B(a,1)$, entonces $x = a$. Tomamos $\delta = 1/2$: $B(a, 1/2) = \{a\} \subseteq B(a, 1)$. ✓

**Cerrado:** El complemento $X \setminus \{a\}$ es abierto: para $x \neq a$, $d(x, a) = 1$, así que $B(x, 1/2) = \{x\} \subseteq X \setminus \{a\}$. ✓ $\qquad \blacksquare$

### Solución 14

$x = (1, 1/2, 1/4, 1/8, \ldots) = (2^{-n+1})_{n \geq 1}$ e $y = 0$.

$$
d(x, y) = \sum_{n=1}^\infty |x_n| = \sum_{n=1}^\infty \frac{1}{2^{n-1}} = \sum_{k=0}^\infty \frac{1}{2^k} = 2.
$$

### Solución 15

Sean $B(a, r_1)$ y $B(b, r_2)$ dos bolas abiertas. Sea $x \in B(a, r_1) \cap B(b, r_2)$. Entonces $d(x,a) < r_1$ y $d(x,b) < r_2$.

Definimos $\delta = \min(r_1 - d(x,a), \, r_2 - d(x,b)) > 0$.

Si $y \in B(x, \delta)$:
- $d(y, a) \leq d(y, x) + d(x, a) < \delta + d(x, a) \leq r_1$, así que $y \in B(a, r_1)$.
- $d(y, b) \leq d(y, x) + d(x, b) < \delta + d(x, b) \leq r_2$, así que $y \in B(b, r_2)$.

Luego $B(x, \delta) \subseteq B(a, r_1) \cap B(b, r_2)$, y la intersección es abierta. $\qquad \blacksquare$

---

## Referencias y lecturas adicionales

1. Munkres, J.R. (2000). *Topology*. Prentice Hall.
2. Engelking, R. (1989). *General Topology*. Heldermann Verlag.
3. Willard, S. (2004). *General Topology*. Dover.
4. Bourbaki, N. (1989). *General Topology*, Chapters 1-4. Springer.
5. Kelley, J.L. (1955). *General Topology*. Van Nostrand.
