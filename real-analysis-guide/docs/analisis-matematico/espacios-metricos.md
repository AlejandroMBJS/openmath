---
title: Espacios métricos
description: Definición axiomática de espacio métrico, ejemplos clásicos en dimensión finita e infinita, métricas equivalentes y primeras propiedades.
---

# Espacios métricos

## Motivación e intuición

Todo el análisis real que hemos desarrollado se apoya en una sola noción de distancia: $|x - y|$ en la recta. Pero muchas situaciones naturales requieren medir «cercanía» entre objetos que no son números reales — puntos en el plano, funciones continuas, sucesiones de números reales, etc. Un **espacio métrico** es el marco axiomático mínimo que generaliza la distancia: un conjunto equipado con una función $d$ que mide la separación entre pares de puntos, satisfaciendo tres axiomas naturales.

Este marco unifica resultados que parecían específicos de $\mathbb{R}$ (convergencia, continuidad, completitud, compacidad) y permite transportarlos a contextos nuevos. Lo notable es que con sólo tres axiomas se obtiene una teoría rica y poderosa.

## Prerrequisitos

- Propiedades del valor absoluto en $\mathbb{R}$ (tema **Principio del supremo**).
- Convergencia de sucesiones reales (tema **Convergencia de sucesiones**).
- Topología básica de la recta real (tema **Topología de la recta real**).
- Series y sucesiones acotadas.

## Definiciones formales

### Espacio métrico

Un **espacio métrico** es un par $(X, d)$ donde $X$ es un conjunto no vacío y $d\colon X \times X \to [0, \infty)$ es una función (llamada **métrica** o **distancia**) que satisface, para todo $x, y, z \in X$:

1. **Positividad definida:** $d(x,y) = 0 \iff x = y$.
2. **Simetría:** $d(x,y) = d(y,x)$.
3. **Desigualdad triangular:** $d(x,z) \leq d(x,y) + d(y,z)$.

### Pseudométrica

Si relajamos (1) a $d(x,x) = 0$ (sin exigir que $d(x,y) = 0 \implies x = y$), obtenemos una **pseudométrica**. Las pseudométricas aparecen naturalmente al definir métricas en espacios cociente.

### Métrica discreta

En cualquier conjunto $X$, la **métrica discreta** es

$$
d(x,y) = \begin{cases} 0 & \text{si } x = y, \\ 1 & \text{si } x \neq y. \end{cases}
$$

### Subespacio métrico

Si $(X, d)$ es un espacio métrico y $A \subseteq X$ es no vacío, entonces $(A, d|_{A \times A})$ es un espacio métrico con la restricción de $d$. Se llama **subespacio métrico** de $X$.

## Interpretación en lenguaje natural

Los tres axiomas capturan las propiedades esenciales de la distancia:
- **Positividad definida:** dos puntos están a distancia cero si y solo si son el mismo punto.
- **Simetría:** la distancia de $x$ a $y$ es la misma que de $y$ a $x$.
- **Desigualdad triangular:** ir de $x$ a $z$ pasando por $y$ nunca es más corto que ir directamente. Es la versión abstracta de «el camino directo es el más corto».

## Ejemplos básicos

### Ejemplo 1 — La recta real $(\mathbb{R}, |\cdot|)$

$d(x,y) = |x-y|$ es la métrica usual. Los axiomas se verifican con las propiedades del valor absoluto. Este es el espacio métrico que hemos estudiado a lo largo de todo el análisis real.

### Ejemplo 2 — El espacio euclídeo $(\mathbb{R}^n, d_2)$

Para $x = (x_1, \ldots, x_n)$ e $y = (y_1, \ldots, y_n)$:

$$
d_2(x, y) = \sqrt{\sum_{i=1}^n (x_i - y_i)^2}.
$$

La desigualdad triangular se deduce de la desigualdad de Cauchy-Schwarz:

$$
\left(\sum a_i b_i\right)^2 \leq \left(\sum a_i^2\right)\left(\sum b_i^2\right).
$$

### Ejemplo 3 — Métrica del taxista (Manhattan) en $\mathbb{R}^n$

$$
d_1(x, y) = \sum_{i=1}^n |x_i - y_i|.
$$

La desigualdad triangular es inmediata porque $|a_i + b_i| \leq |a_i| + |b_i|$ para cada coordenada, y sumamos.

### Ejemplo 4 — Métrica del supremo en $\mathbb{R}^n$

$$
d_\infty(x, y) = \max_{1 \leq i \leq n} |x_i - y_i|.
$$

Verificación de la desigualdad triangular: para cada $i$, $|x_i - z_i| \leq |x_i - y_i| + |y_i - z_i| \leq d_\infty(x,y) + d_\infty(y,z)$. Tomando máximo en $i$: $d_\infty(x,z) \leq d_\infty(x,y) + d_\infty(y,z)$.

### Ejemplo 5 — Métrica discreta

En cualquier conjunto $X$, la métrica discreta satisface los axiomas trivialmente. La desigualdad triangular: si $x \neq z$, entonces $d(x,z) = 1 \leq d(x,y) + d(y,z)$ porque al menos uno de los sumandos es $1$ (pues $y$ no puede ser igual a $x$ y a $z$ simultáneamente).

## Ejemplos finos y contraejemplos

### Ejemplo 6 — Espacio de sucesiones acotadas $\ell^\infty$

Sea $\ell^\infty = \{x = (x_n)_{n \geq 1} : \sup_n |x_n| < \infty\}$ con

$$
d(x, y) = \sup_{n \geq 1} |x_n - y_n|.
$$

Este supremo es finito porque $|x_n - y_n| \leq |x_n| + |y_n| \leq \|x\|_\infty + \|y\|_\infty$. La desigualdad triangular se verifica coordinada a coordinada y pasando al supremo.

### Ejemplo 7 — Espacio de funciones continuas $C[a,b]$

Sea $C[a,b]$ el conjunto de funciones continuas $f\colon [a,b] \to \mathbb{R}$, con la métrica del supremo:

$$
d_\infty(f, g) = \sup_{x \in [a,b]} |f(x) - g(x)| = \|f - g\|_\infty.
$$

Este supremo es un máximo (por Weierstrass) y por tanto finito. La verificación de los axiomas es directa. Este espacio es fundamental en análisis funcional.

### Ejemplo 8 — Espacio $\ell^1$ de sucesiones absolutamente sumables

$$
\ell^1 = \left\{x = (x_n) : \sum_{n=1}^\infty |x_n| < \infty\right\}, \qquad d(x,y) = \sum_{n=1}^\infty |x_n - y_n|.
$$

La serie converge porque $\sum |x_n - y_n| \leq \sum |x_n| + \sum |y_n| < \infty$. La desigualdad triangular se obtiene sumando $|x_n - z_n| \leq |x_n - y_n| + |y_n - z_n|$ término a término.

### Ejemplo 9 — Espacio $\ell^2$ de sucesiones cuadrado-sumables

$$
\ell^2 = \left\{x = (x_n) : \sum_{n=1}^\infty |x_n|^2 < \infty\right\}, \qquad d(x,y) = \sqrt{\sum_{n=1}^\infty |x_n - y_n|^2}.
$$

La desigualdad triangular (desigualdad de Minkowski) requiere la desigualdad de Cauchy-Schwarz para series:

$$
\sum |a_n b_n| \leq \sqrt{\sum |a_n|^2}\sqrt{\sum |b_n|^2}.
$$

### Ejemplo 10 — Una función que **no** es métrica

Sea $d(x,y) = (x-y)^2$ en $\mathbb{R}$. Positividad definida y simetría se cumplen. Pero la desigualdad triangular falla: $d(0,2) = 4$, $d(0,1) + d(1,2) = 1 + 1 = 2 < 4$.

### Ejemplo 11 — Métrica acotada inducida

Si $(X,d)$ es un espacio métrico, entonces

$$
\tilde{d}(x,y) = \min\{d(x,y), 1\}
$$

también es métrica (verificar la desigualdad triangular por casos). Toda métrica se puede «acotar» sin cambiar la estructura topológica.

### Ejemplo 12 — Métrica de la distancia francesa (o SNCF)

En $\mathbb{R}^2$, definimos:

$$
d(x, y) = \begin{cases} \|x - y\|_2 & \text{si } x, y \text{ están en la misma semirrecta desde el origen}, \\ \|x\|_2 + \|y\|_2 & \text{en caso contrario}. \end{cases}
$$

Intuitivamente: para ir de $x$ a $y$, si están alineados con el origen, se va en línea recta; si no, se pasa por el origen (como trenes que pasan por París). La desigualdad triangular se verifica por casos.

## Teoremas y demostraciones

### Proposición 1 — Desigualdad triangular inversa

En todo espacio métrico $(X, d)$:

$$
|d(x,z) - d(y,z)| \leq d(x,y) \qquad \forall\, x, y, z \in X.
$$

*Demostración.* Por la desigualdad triangular: $d(x,z) \leq d(x,y) + d(y,z)$, luego $d(x,z) - d(y,z) \leq d(x,y)$. Intercambiando $x$ e $y$: $d(y,z) - d(x,z) \leq d(y,x) = d(x,y)$. Combinando: $|d(x,z) - d(y,z)| \leq d(x,y)$. $\qquad \blacksquare$

### Proposición 2 — La métrica es no negativa

En todo espacio métrico, $d(x,y) \geq 0$ para todo $x, y$.

*Demostración.* Por la desigualdad triangular: $0 = d(x,x) \leq d(x,y) + d(y,x) = 2d(x,y)$, luego $d(x,y) \geq 0$. $\qquad \blacksquare$

**Observación:** Hemos incluido $d \geq 0$ en la definición por claridad, pero se deduce de los otros axiomas.

### Proposición 3 — Relación entre métricas en $\mathbb{R}^n$

Para todo $x, y \in \mathbb{R}^n$:

$$
d_\infty(x,y) \leq d_2(x,y) \leq d_1(x,y) \leq n\,d_\infty(x,y).
$$

*Demostración.*

**$d_\infty \leq d_2$:** Sea $M = \max_i |x_i - y_i|$. Entonces $M^2 \leq \sum (x_i - y_i)^2$, luego $M \leq \sqrt{\sum (x_i - y_i)^2} = d_2$.

**$d_2 \leq d_1$:** Elevamos al cuadrado: $\sum (x_i - y_i)^2 \leq \left(\sum |x_i - y_i|\right)^2$. Esto es cierto porque al expandir el cuadrado de la suma aparecen todos los productos cruzados $|x_i - y_i||x_j - y_j| \geq 0$.

**$d_1 \leq n\,d_\infty$:** $\sum |x_i - y_i| \leq \sum \max_j |x_j - y_j| = n \cdot d_\infty$. $\qquad \blacksquare$

### Definición — Métricas equivalentes

Dos métricas $d_1$ y $d_2$ en $X$ son **topológicamente equivalentes** si generan los mismos conjuntos abiertos (ver tema siguiente).

Son **Lipschitz equivalentes** (o fuertemente equivalentes) si existen constantes $\alpha, \beta > 0$ tales que

$$
\alpha\,d_1(x,y) \leq d_2(x,y) \leq \beta\,d_1(x,y) \qquad \forall\,x,y \in X.
$$

La equivalencia Lipschitz implica la equivalencia topológica (pero no al revés en general).

### Corolario — Las métricas $d_1, d_2, d_\infty$ en $\mathbb{R}^n$ son Lipschitz equivalentes

Se sigue directamente de la Proposición 3, con constantes que dependen de $n$. Esto significa que la convergencia, la continuidad y los abiertos son los mismos para las tres métricas en $\mathbb{R}^n$.

### Proposición 4 — La métrica $d/(1+d)$ es equivalente a $d$

Si $(X,d)$ es espacio métrico, entonces $\rho(x,y) = \frac{d(x,y)}{1+d(x,y)}$ es una métrica topológicamente equivalente a $d$, con $\rho < 1$.

*Demostración.* La función $\varphi(t) = t/(1+t)$ es creciente en $[0,\infty)$ con $\varphi(0) = 0$. Positividad definida y simetría son inmediatas.

Para la desigualdad triangular, usamos que $\varphi$ es cóncava: $\varphi(a+b) \leq \varphi(a) + \varphi(b)$ para $a, b \geq 0$. En efecto:

$$
\frac{a+b}{1+a+b} = \frac{a}{1+a+b} + \frac{b}{1+a+b} \leq \frac{a}{1+a} + \frac{b}{1+b}.
$$

Entonces:

$$
\rho(x,z) = \varphi(d(x,z)) \leq \varphi(d(x,y) + d(y,z)) \leq \varphi(d(x,y)) + \varphi(d(y,z)) = \rho(x,y) + \rho(y,z).
$$

La equivalencia topológica se sigue de que $\varphi$ es un homeomorfismo de $[0,\infty)$ en $[0,1)$: $d(x_n, x) \to 0 \iff \rho(x_n, x) \to 0$. $\qquad \blacksquare$

## Errores comunes

1. **Creer que toda función de distancia es métrica**: Hay que verificar los tres axiomas. Por ejemplo, $(x-y)^2$ no satisface la desigualdad triangular.

2. **Confundir métrica con norma**: Una norma induce una métrica ($d(x,y) = \|x-y\|$), pero no toda métrica proviene de una norma. La métrica discreta, por ejemplo, no proviene de norma alguna (excepto en espacios triviales).

3. **Suponer que métricas equivalentes son iguales**: Dos métricas equivalentes dan la misma topología (mismos abiertos, convergencia, continuidad) pero pueden asignar distancias numéricas muy distintas.

4. **Olvidar que $\ell^1$, $\ell^2$ y $\ell^\infty$ son espacios diferentes**: Aunque contienen sucesiones, los conjuntos son distintos ($\ell^1 \subsetneq \ell^2 \subsetneq \ell^\infty$) y las métricas son diferentes.

5. **Aplicar resultados de $\mathbb{R}^n$ a espacios de dimensión infinita**: En $\mathbb{R}^n$, todas las normas son equivalentes. En dimensión infinita esto es **falso**: $\ell^1$ y $\ell^\infty$ tienen topologías diferentes.

## Resumen conceptual

Un espacio métrico $(X, d)$ es la estructura mínima para hacer análisis: con una métrica se pueden definir convergencia, continuidad, abiertos, cerrados, compacidad y completitud. Los ejemplos fundamentales son:

| Espacio | Conjunto | Métrica |
|---|---|---|
| $\mathbb{R}^n$ euclídeo | $n$-tuplas reales | $d_2 = \sqrt{\sum (x_i-y_i)^2}$ |
| $\ell^1$ | Sucesiones abs. sumables | $\sum |x_n - y_n|$ |
| $\ell^2$ | Sucesiones cuadrado-sumables | $\sqrt{\sum |x_n-y_n|^2}$ |
| $\ell^\infty$ | Sucesiones acotadas | $\sup |x_n - y_n|$ |
| $C[a,b]$ | Funciones continuas | $\sup |f(x)-g(x)|$ |
| $(X, d_{\text{disc}})$ | Cualquier conjunto | $0$ o $1$ |

En $\mathbb{R}^n$, las métricas $d_1$, $d_2$ y $d_\infty$ son Lipschitz equivalentes, pero en dimensión infinita la elección de métrica importa.

## Ejemplos guiados finales

### Ejemplo guiado 1 — Verificación completa de los axiomas para $C[0,1]$

Sea $d(f,g) = \sup_{x \in [0,1]} |f(x) - g(x)|$ en $C[0,1]$.

**Positividad definida:** $d(f,g) = 0 \iff \sup |f(x)-g(x)| = 0 \iff |f(x)-g(x)| = 0$ para todo $x \iff f = g$. ✓

**Simetría:** $d(f,g) = \sup|f(x)-g(x)| = \sup|g(x)-f(x)| = d(g,f)$. ✓

**Desigualdad triangular:** Para todo $x$:

$$
|f(x)-h(x)| \leq |f(x)-g(x)| + |g(x)-h(x)| \leq d(f,g) + d(g,h).
$$

Tomando supremo en $x$: $d(f,h) \leq d(f,g) + d(g,h)$. ✓

### Ejemplo guiado 2 — La métrica $d_1$ en $C[0,1]$ (integral)

Definimos otra métrica en $C[0,1]$:

$$
d_1(f,g) = \int_0^1 |f(x) - g(x)|\,dx.
$$

**Positividad definida:** Si $d_1(f,g) = 0$ y $f, g$ son continuas, entonces $|f-g|$ es continua, no negativa, con integral cero. Por un resultado de análisis real, $|f(x)-g(x)| = 0$ para todo $x$, es decir $f = g$. ✓

**Simetría:** inmediata. ✓

**Desigualdad triangular:** $\int|f-h| \leq \int(|f-g|+|g-h|) = \int|f-g| + \int|g-h|$. ✓

**Comparación con $d_\infty$:** $d_1(f,g) = \int_0^1 |f-g| \leq \sup|f-g| \cdot 1 = d_\infty(f,g)$. Pero la desigualdad inversa no se cumple con constante fija: tomando $f_n(x) = x^n$ y $g = 0$, $d_\infty(f_n, 0) = 1$ pero $d_1(f_n, 0) = 1/(n+1) \to 0$. Luego $d_1$ y $d_\infty$ **no** son Lipschitz equivalentes en $C[0,1]$.

### Ejemplo guiado 3 — Espacio de sucesiones con la métrica de Fréchet

En el espacio de **todas** las sucesiones reales $\mathbb{R}^\mathbb{N}$, definimos:

$$
d(x, y) = \sum_{n=1}^\infty \frac{1}{2^n} \cdot \frac{|x_n - y_n|}{1 + |x_n - y_n|}.
$$

Cada término está acotado por $1/2^n$, así que la serie converge. La función $t \mapsto t/(1+t)$ es métrica (Proposición 4), y la combinación convexa con pesos $1/2^n$ preserva los axiomas. La convergencia en esta métrica es la **convergencia coordenada a coordenada**: $d(x^{(k)}, x) \to 0$ si y solo si $x_n^{(k)} \to x_n$ para cada $n$.

### Ejemplo guiado 4 — $\ell^1 \subsetneq \ell^2 \subsetneq \ell^\infty$ (inclusiones estrictas)

**$\ell^1 \subseteq \ell^2$:** Si $\sum|x_n| < \infty$, entonces $|x_n| \to 0$, así que $|x_n| \leq 1$ eventualmente, luego $|x_n|^2 \leq |x_n|$ y $\sum|x_n|^2 \leq \sum|x_n| < \infty$.

**$\ell^1 \neq \ell^2$:** La sucesión $x_n = 1/n$ tiene $\sum 1/n^2 < \infty$ (está en $\ell^2$) pero $\sum 1/n = \infty$ (no está en $\ell^1$).

**$\ell^2 \subseteq \ell^\infty$:** Si $\sum|x_n|^2 < \infty$, entonces $|x_n|^2 \to 0$, luego $(x_n)$ es acotada.

**$\ell^2 \neq \ell^\infty$:** La sucesión constante $x_n = 1$ está en $\ell^\infty$ pero $\sum 1 = \infty$, así que no está en $\ell^2$.

### Ejemplo guiado 5 — Desigualdad de Cauchy-Schwarz y Minkowski en $\ell^2$

**Cauchy-Schwarz:** Para $x, y \in \ell^2$:

$$
\sum_{n=1}^\infty |x_n y_n| \leq \sqrt{\sum |x_n|^2}\sqrt{\sum |y_n|^2} = \|x\|_2 \|y\|_2.
$$

*Prueba.* Para sumas parciales finitas, la desigualdad de Cauchy-Schwarz usual da $\sum_{n=1}^N |x_n y_n| \leq \|x\|_2 \|y\|_2$. Tomando $N \to \infty$ se obtiene el resultado.

**Minkowski (desigualdad triangular para $d_2$):**

$$
\|x + y\|_2^2 = \sum|x_n+y_n|^2 \leq \sum(|x_n|+|y_n|)^2 = \|x\|_2^2 + 2\sum|x_ny_n| + \|y\|_2^2 \leq (\|x\|_2 + \|y\|_2)^2.
$$

Tomando raíz: $\|x+y\|_2 \leq \|x\|_2 + \|y\|_2$, que da $d_2(x,z) \leq d_2(x,y) + d_2(y,z)$ con $a = x - y$, $b = y - z$.
