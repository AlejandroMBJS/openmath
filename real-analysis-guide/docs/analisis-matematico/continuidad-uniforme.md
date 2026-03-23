---
title: Continuidad uniforme
description: Definicion epsilon-delta, relacion con continuidad ordinaria, teorema de Heine-Cantor y contraejemplos.
---

# Continuidad uniforme

## Motivacion e intuicion

La continuidad ordinaria dice que para cada punto $x_0$, el error en la salida puede hacerse pequeno si la entrada esta suficientemente cerca de $x_0$. Pero el "suficientemente cerca" depende del punto: puede necesitarse un $\delta$ diferente para cada $x_0$.

La **continuidad uniforme** exige un control global: existe un $\delta$ que funciona simultaneamente para todos los puntos del dominio. Es una nocion mas fuerte que la continuidad puntual, pero crucial para resultados sobre extension de funciones, compactos y completaciones.

::: tip Idea central
Uniformemente continua = existe $\delta(\varepsilon)$ que funciona para todo $x$. Continua = para cada $x$ existe $\delta(\varepsilon, x)$.
:::

## Definiciones formales

### Continuidad en un punto

Sea $f\colon (X, d_X) \to (Y, d_Y)$. Decimos que $f$ es **continua en $x_0$** si:

$$
\forall \varepsilon > 0\ \exists \delta > 0\ \forall x \in X : d_X(x, x_0) < \delta \Rightarrow d_Y(f(x), f(x_0)) < \varepsilon.
$$

### Continuidad (en todo el dominio)

$f$ es **continua** si es continua en cada punto de $X$:

$$
\forall x_0 \in X\ \forall \varepsilon > 0\ \exists \delta > 0\ \forall x \in X : d_X(x, x_0) < \delta \Rightarrow d_Y(f(x), f(x_0)) < \varepsilon.
$$

El $\delta$ depende de $\varepsilon$ y de $x_0$.

### Continuidad uniforme

$f$ es **uniformemente continua** si:

$$
\forall \varepsilon > 0\ \exists \delta > 0\ \forall x, y \in X : d_X(x, y) < \delta \Rightarrow d_Y(f(x), f(y)) < \varepsilon.
$$

Aqui $\delta$ depende solo de $\varepsilon$, no del punto.

### Funcion Lipschitz

$f$ es **Lipschitz** con constante $L \geq 0$ si:

$$
\forall x, y \in X : d_Y(f(x), f(y)) \leq L \cdot d_X(x, y).
$$

Toda funcion Lipschitz es uniformemente continua (tomar $\delta = \varepsilon/L$).

## Interpretacion en lenguaje natural

- **Continua:** Para cada punto $x_0$ y cada tolerancia $\varepsilon$, existe un radio $\delta$ tal que $f$ mapea la bola $B(x_0, \delta)$ dentro de $B(f(x_0), \varepsilon)$. El radio puede variar con $x_0$.

- **Uniformemente continua:** Existe un "modulo de continuidad" global: dado $\varepsilon$, existe $\delta$ que garantiza que dos puntos a distancia menor que $\delta$ tienen imagenes a distancia menor que $\varepsilon$, independientemente de donde esten esos puntos.

- **Lipschitz:** El error en la salida es linealmente acotado por el error en la entrada.

La relacion jerarquica es:

$$
\text{Lipschitz} \Rightarrow \text{Uniformemente continua} \Rightarrow \text{Continua}.
$$

Los reciprocos son falsos en general.

## Ejemplos y contraejemplos

### Ejemplo 1 — Funcion Lipschitz

$f(x) = 3x$ en $\mathbb{R}$ es Lipschitz con constante $L = 3$:

$$
|f(x) - f(y)| = 3|x - y| \leq 3|x - y|.
$$

Por tanto, uniformemente continua y continua.

### Ejemplo 2 — Uniformemente continua pero no Lipschitz

$f(x) = \sqrt{x}$ en $[0, 1]$ es uniformemente continua (por Heine-Cantor, pues es continua en compacto), pero no es Lipschitz cerca de $0$:

$$
\frac{|f(x) - f(0)|}{|x - 0|} = \frac{\sqrt{x}}{x} = \frac{1}{\sqrt{x}} \to \infty \text{ cuando } x \to 0.
$$

### Ejemplo 3 — Continua pero no uniformemente continua

$f(x) = \frac{1}{x}$ en $(0, 1)$ es continua pero no uniformemente continua.

**Demostracion.**

Tomamos $\varepsilon = 1$. Supongamos que existe $\delta > 0$ tal que $|x - y| < \delta \Rightarrow |f(x) - f(y)| < 1$.

Tomamos $x = \delta/2$ e $y = \delta$. Entonces $|x - y| = \delta/2 < \delta$, pero:

$$
\left| \frac{1}{x} - \frac{1}{y} \right| = \left| \frac{2}{\delta} - \frac{1}{\delta} \right| = \frac{1}{\delta} \geq 1 \text{ si } \delta \leq 1.
$$

$\blacksquare$

### Ejemplo 4 — $x^2$ no es uniformemente continua en $\mathbb{R}$

**Demostracion.**

Tomamos $\varepsilon = 1$. Para cualquier $\delta > 0$, elegimos $x = n$ e $y = n + \delta/2$ con $n$ grande. Entonces:

$$
|x^2 - y^2| = |(n + \delta/2)^2 - n^2| = n\delta + \frac{\delta^2}{4} \geq n\delta.
$$

Para $n > 1/\delta$, esto es mayor que $1 = \varepsilon$.

$\blacksquare$

### Ejemplo 5 — $\sqrt{x}$ en $[0, \infty)$ es uniformemente continua

Aunque no es Lipschitz cerca de $0$, podemos encontrar $\delta$ para cada $\varepsilon$:

$$
|\sqrt{x} - \sqrt{y}| = \frac{|x - y|}{\sqrt{x} + \sqrt{y}} \leq \frac{|x - y|}{\sqrt{x}} \quad (\text{si } y > x).
$$

Para $x$ pequeño, necesitamos $\delta$ pequeno. Pero el "modulo de continuidad":

$$
|\sqrt{x} - \sqrt{y}| \leq \sqrt{|x - y|}
$$

permite tomar $\delta = \varepsilon^2$.

### Ejemplo 6 — Funciones en compactos son uniformemente continuas

Por el teorema de Heine-Cantor, toda funcion continua en un compacto es uniformemente continua.

## Teoremas fundamentales

### Proposicion 1 — Uniforme implica continua

Si $f$ es uniformemente continua, entonces $f$ es continua.

**Demostracion.**

Fijado $x_0$, dado $\varepsilon > 0$, la continuidad uniforme da $\delta > 0$ tal que $d_X(x, y) < \delta \Rightarrow d_Y(f(x), f(y)) < \varepsilon$. En particular, con $y = x_0$:

$$
d_X(x, x_0) < \delta \Rightarrow d_Y(f(x), f(x_0)) < \varepsilon.
$$

$\blacksquare$

### Teorema 2 — Heine-Cantor

Si $K$ es un espacio metrico compacto y $f\colon K \to Y$ es continua, entonces $f$ es uniformemente continua.

**Demostracion.**

Sea $\varepsilon > 0$. Para cada $x \in K$, por continuidad existe $\delta_x > 0$ tal que:

$$
d_K(y, x) < \delta_x \Rightarrow d_Y(f(y), f(x)) < \frac{\varepsilon}{2}.
$$

La familia $\{B(x, \delta_x/2)\}_{x \in K}$ es cobertura abierta de $K$. Por compacidad, existe subcobertura finita:

$$
K \subseteq B(x_1, \delta_{x_1}/2) \cup \cdots \cup B(x_n, \delta_{x_n}/2).
$$

Definimos $\delta = \min\{\delta_{x_1}/2, \ldots, \delta_{x_n}/2\} > 0$.

Tomamos $x, y \in K$ con $d_K(x, y) < \delta$. Existe $i$ tal que $x \in B(x_i, \delta_{x_i}/2)$. Entonces:

$$
d_K(y, x_i) \leq d_K(y, x) + d_K(x, x_i) < \delta + \frac{\delta_{x_i}}{2} \leq \frac{\delta_{x_i}}{2} + \frac{\delta_{x_i}}{2} = \delta_{x_i}.
$$

Luego:

$$
d_Y(f(x), f(y)) \leq d_Y(f(x), f(x_i)) + d_Y(f(x_i), f(y)) < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.
$$

$\blacksquare$

### Proposicion 3 — Criterio secuencial de continuidad uniforme

$f\colon X \to Y$ es uniformemente continua si y solo si para toda sucesion de pares $(x_n, y_n)$ en $X \times X$ con $d_X(x_n, y_n) \to 0$:

$$
d_Y(f(x_n), f(y_n)) \to 0.
$$

**Demostracion.**

**$\Rightarrow$:** Dado $\varepsilon > 0$, existe $\delta > 0$ por continuidad uniforme. Como $d_X(x_n, y_n) \to 0$, existe $N$ tal que $n \geq N \Rightarrow d_X(x_n, y_n) < \delta$. Entonces $d_Y(f(x_n), f(y_n)) < \varepsilon$ para $n \geq N$.

**$\Leftarrow$:** Si $f$ no es uniformemente continua, existe $\varepsilon > 0$ tal que para todo $n$ existen $x_n, y_n$ con $d_X(x_n, y_n) < 1/n$ pero $d_Y(f(x_n), f(y_n)) \geq \varepsilon$. Esto contradice la hipotesis.

$\blacksquare$

### Proposicion 4 — Transporte de sucesiones de Cauchy

Si $f\colon X \to Y$ es uniformemente continua y $(x_n)$ es sucesion de Cauchy en $X$, entonces $(f(x_n))$ es sucesion de Cauchy en $Y$.

**Demostracion.**

Dado $\varepsilon > 0$, existe $\delta > 0$ por continuidad uniforme. Como $(x_n)$ es de Cauchy, existe $N$ tal que $n, m \geq N \Rightarrow d_X(x_n, x_m) < \delta$. Entonces $d_Y(f(x_n), f(x_m)) < \varepsilon$ para $n, m \geq N$.

$\blacksquare$

### Proposicion 5 — Extension uniformemente continua al cierre

Si $f\colon A \to Y$ es uniformemente continua con $Y$ completo, entonces existe unica extension uniformemente continua $\bar{f}\colon \overline{A} \to Y$.

**Demostracion.**

Para $x \in \overline{A}$, existe sucesion $(x_n)$ en $A$ con $x_n \to x$. La sucesion $(x_n)$ es de Cauchy, luego $(f(x_n))$ es de Cauchy en $Y$ (por la proposicion anterior). Como $Y$ es completo, $f(x_n)$ converge. Definimos:

$$
\bar{f}(x) = \lim_{n \to \infty} f(x_n).
$$

El limite no depende de la sucesion elegida: si $(y_n)$ es otra sucesion en $A$ con $y_n \to x$, entonces $d_X(x_n, y_n) \to 0$, asi $d_Y(f(x_n), f(y_n)) \to 0$.

La extension $\bar{f}$ es uniformemente continua: dado $\varepsilon > 0$, sea $\delta > 0$ de la continuidad uniforme de $f$ en $A$. Para $x, y \in \overline{A}$ con $d_X(x, y) < \delta/2$, tomamos sucesiones $(x_n), (y_n)$ en $A$ convergiendo a $x, y$. Para $n$ grande:

$$
d_X(x_n, y_n) \leq d_X(x_n, x) + d_X(x, y) + d_X(y, y_n) < \delta.
$$

Luego $d_Y(f(x_n), f(y_n)) < \varepsilon$, y pasando al limite: $d_Y(\bar{f}(x), \bar{f}(y)) \leq \varepsilon$.

$\blacksquare$

## Relaciones entre tipos de continuidad

```
Lipschitz
    ↓
Uniformemente continua
    ↓
Continua
```

Los contraejemplos muestran que las implicaciones son estrictas:

| Funcion | Dominio | Lipschitz | Uniforme | Continua |
|---|---|---|---|---|
| $f(x) = 3x$ | $\mathbb{R}$ | Si | Si | Si |
| $f(x) = \sqrt{x}$ | $[0, 1]$ | No | Si | Si |
| $f(x) = x^2$ | $\mathbb{R}$ | No | No | Si |
| $f(x) = 1/x$ | $(0, 1)$ | No | No | Si |
| $f(x) = \sin(1/x)$ | $(0, 1)$ | No | Si | Si |

## Errores comunes

1. **Confundir "para todo $x$ existe $\delta$" con "existe $\delta$ para todo $x$":** El orden de los cuantificadores es crucial. La continuidad uniforme cambia el orden.

2. **Suponer que toda funcion en intervalo es uniformemente continua:** Falso. $f(x) = 1/x$ en $(0, 1)$ es continua pero no uniformemente.

3. **Aplicar Heine-Cantor fuera de compactos:** El teorema solo funciona en dominios compactos.

4. **Olvidar que compacto implica cerrado y acotado pero el reciproco es solo en $\mathbb{R}^n$:** En espacios metricos generales, "cerrado y acotado" no implica compacto.

## Resumen operativo

| Tipo | Definicion | Caracterizacion |
|---|---|---|
| Continua | $\forall x_0\ \forall\varepsilon\ \exists\delta(x_0, \varepsilon)$ | Limite coincide con valor |
| Uniforme | $\forall\varepsilon\ \exists\delta(\varepsilon)\ \forall x, y$ | Pares cercanos $\Rightarrow$ imagenes cercanas |
| Lipschitz | $\exists L\ \forall x, y$ | Pendiente acotada |

**Teoremas clave:**
- Heine-Cantor: continua en compacto $\Rightarrow$ uniformemente continua.
- Transporte de Cauchy: uniformemente continua preserva sucesiones de Cauchy.
- Extension: uniformemente continua en denso se extiende al cierre.

## Ejercicios

### Ejercicio 1

Demuestre que $f(x) = x^2$ es uniformemente continua en $[0, 1]$.

### Ejercicio 2

Demuestre que $f(x) = e^x$ es uniformemente continua en $[0, 1]$ pero no en $\mathbb{R}$.

### Ejercicio 3

Demuestre que $f(x) = \sqrt{x}$ es Lipschitz en $[1, \infty)$ pero no en $[0, 1]$.

### Ejercicio 4

Sea $f\colon \mathbb{R} \to \mathbb{R}$ derivada con $|f'(x)| \leq M$ para todo $x$. Demuestre que $f$ es Lipschitz con constante $M$.

### Ejercicio 5

Demuestre que $f(x) = \sin(x^2)$ es continua pero no uniformemente continua en $\mathbb{R}$.

### Ejercicio 6

Demuestre que la composicion de funciones uniformemente continuas es uniformemente continua.

### Ejercicio 7

Sea $f\colon (0, 1) \to \mathbb{R}$ continua. Demuestre que $f$ es uniformemente continua si y solo si se puede extender continuamente a $[0, 1]$.

### Ejercicio 8

Demuestre que si $f$ es uniformemente continua en $\mathbb{R}$ y acotada, entonces $f$ es Lipschitz o proporcione un contraejemplo.

### Ejercicio 9

Sea $f\colon [a, b] \to \mathbb{R}$ continua. Demuestre que $f$ es uniformemente continua usando Heine-Cantor.

### Ejercicio 10

Demuestre que $f(x) = x \sin(1/x)$ en $(0, 1]$ se extiende continuamente a $[0, 1]$. Concluya que es uniformemente continua en $(0, 1]$.

### Ejercicio 11

Sea $f\colon \mathbb{R} \to \mathbb{R}$ Lipschitz con constante $L$ y $g\colon \mathbb{R} \to \mathbb{R}$ Lipschitz con constante $M$. Demuestre que $f \circ g$ es Lipschitz con constante $LM$.

### Ejercicio 12

Demuestre que toda funcion uniformemente continua en un espacio metrico acotado es acotada.

### Ejercicio 13

Sea $(X, d)$ espacio metrico y $A \subseteq X$ denso. Demuestre que si $f\colon A \to \mathbb{R}$ es uniformemente continua, entonces existe unica extension continua $\bar{f}\colon \overline{A} \to \mathbb{R}$.

### Ejercicio 14

Demuestre que $f(x) = \frac{1}{x}$ en $[1, \infty)$ es Lipschitz.

### Ejercicio 15

Proporcione un ejemplo de funcion continua en $\mathbb{R}$ que no sea uniformemente continua en ningun intervalo no acotado.

## Soluciones

### Solucion 1

En $[0, 1]$, $|f(x) - f(y)| = |x^2 - y^2| = |x + y||x - y| \leq 2|x - y|$. Por el teorema de Heine-Cantor (compacto), $f$ es uniformemente continua.

Directamente: dado $\varepsilon > 0$, tomamos $\delta = \varepsilon/2$:

$$
|x - y| < \delta \Rightarrow |x^2 - y^2| \leq 2|x - y| < 2\delta = \varepsilon.
$$

### Solucion 2

En $[0, 1]$, por Heine-Cantor.

En $\mathbb{R}$, tomamos $x_n = n$, $y_n = n + \frac{1}{n}$:

$$
|x_n - y_n| = \frac{1}{n} \to 0, \quad |e^{x_n} - e^{y_n}| = e^n\left(1 - e^{1/n}\right) \approx e^n \cdot \frac{1}{n} \to \infty.
$$

No puede converger a $0$, luego no es uniformemente continua.

### Solucion 3

En $[1, \infty)$: $|\sqrt{x} - \sqrt{y}| = \frac{|x - y|}{\sqrt{x} + \sqrt{y}} \leq \frac{|x - y|}{2}$. Es Lipschitz con constante $L = 1/2$.

En $[0, 1]$: $\frac{|\sqrt{x} - 0|}{|x - 0|} = \frac{1}{\sqrt{x}} \to \infty$ cuando $x \to 0$. No puede existir $L$ finito.

### Solucion 4

Por el teorema del valor medio:

$$
|f(x) - f(y)| = |f'(c)| \cdot |x - y| \leq M|x - y|
$$

para algun $c$ entre $x$ e $y$.

### Solucion 5

Continua: es composicion de funciones continuas.

No uniformemente continua: tomamos $x_n = \sqrt{2\pi n}$, $y_n = \sqrt{2\pi n + \pi/2}$:

$$
|x_n - y_n| \to 0, \quad |\sin(x_n^2) - \sin(y_n^2)| = |0 - 1| = 1.
$$

### Solucion 6

Sean $f\colon X \to Y$ y $g\colon Y \to Z$ uniformemente continuas.

Dado $\varepsilon > 0$, existe $\eta > 0$ tal que $d_Y(u, v) < \eta \Rightarrow d_Z(g(u), g(v)) < \varepsilon$.

Para este $\eta$, existe $\delta > 0$ tal que $d_X(x, y) < \delta \Rightarrow d_Y(f(x), f(y)) < \eta$.

Luego: $d_X(x, y) < \delta \Rightarrow d_Y(f(x), f(y)) < \eta \Rightarrow d_Z(g(f(x)), g(f(y))) < \varepsilon$.

### Solucion 7

**$\Rightarrow$:** Si $f$ es uniformemente continua en $(0, 1)$, se extiende al cierre $[0, 1]$ por la proposicion de extension.

**$\Leftarrow$:** Si $f$ se extiende continuamente a $\bar{f}\colon [0, 1] \to \mathbb{R}$, entonces $\bar{f}$ es continua en compacto, luego uniformemente continua por Heine-Cantor. La restriccion a $(0, 1)$ hereda la continuidad uniforme.

### Solucion 8

Contraejemplo: $f(x) = \sqrt{|x|}$ es uniformemente continua y acotada en $\mathbb{R}$, pero no es Lipschitz cerca de $0$ (pendiente infinita).

### Solucion 9

$[a, b]$ es compacto en $\mathbb{R}$. Por Heine-Cantor, toda funcion continua en compacto es uniformemente continua.

### Solucion 10

Definimos $\bar{f}(0) = \lim_{x \to 0} x \sin(1/x) = 0$ (el limite existe pues $|x \sin(1/x)| \leq |x| \to 0$).

La extension $\bar{f}\colon [0, 1] \to \mathbb{R}$ es continua en compacto, luego uniformemente continua. La restriccion a $(0, 1]$ también lo es.

### Solucion 11

$$
|f(g(x)) - f(g(y))| \leq L|g(x) - g(y)| \leq L \cdot M|x - y| = LM|x - y|.
$$

### Solucion 12

Espacio acotado: existe $M > 0$ con $d(x, x_0) < M$ para todo $x$.

Tomamos $\delta = 1$ en la definicion de continuidad uniforme. Para cualquier $x$:

$$
d(f(x), f(x_0)) < \varepsilon \text{ donde } \varepsilon \text{ corresponde a } \delta = 1.
$$

Esto no significa que $f$ sea acotada... Contraejemplo: $f\colon \mathbb{N} \to \mathbb{R}$ con $f(n) = n$. El espacio $\mathbb{N}$ con metrica discreta es acotado, pero $f$ no es acotada.

Correccion: "acotado" no implica compacto. La proposicion es falsa sin hipotesis adicionales.

### Solucion 13

Ver propocicion 5.

### Solucion 14

$$
\left|\frac{1}{x} - \frac{1}{y}\right| = \frac{|x - y|}{xy} \leq |x - y| \quad \text{pues } x, y \geq 1 \Rightarrow xy \geq 1.
$$

Es Lipschitz con constante $L = 1$.

### Solucion 15

$f(x) = x^2$ es continua en $\mathbb{R}$ pero no uniformemente continua en $[n, n+1]$ para $n$ grande (verificar con pendiente $2n$).

Alternativa: $f(x) = \sin(x^2)$ no es uniformemente continua en dominios no acotados.