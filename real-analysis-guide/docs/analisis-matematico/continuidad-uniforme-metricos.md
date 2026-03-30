---
title: Continuidad uniforme en metricos
description: Definicion global, criterios secuenciales, estabilidad de Cauchy y teorema de Heine-Cantor en espacios metricos.
---

# Continuidad uniforme en metricos

## Motivacion e intuicion

La continuidad ordinaria es local: el parametro $\delta$ puede depender del punto en el que se evalua la funcion. La continuidad uniforme exige algo mas fuerte: un mismo control en el dominio debe servir simultaneamente para todos los puntos.

Esta diferencia es decisiva en analisis. La continuidad uniforme transporta sucesiones de Cauchy, permite extensiones a completaciones y vuelve cuantitativa la compacidad.

::: tip Idea central
La continuidad uniforme no mira un punto privilegiado del dominio. Controla a la funcion a escala global.
:::

## Prerrequisitos

Conviene manejar:

- continuidad en metricos;
- sucesiones de Cauchy;
- compacidad y total acotacion;
- caracterizaciones secuenciales de convergencia.

## Definiciones formales

Sean $(X,d_X)$ y $(Y,d_Y)$ espacios metricos y sea

$$
f : X \to Y.
$$

### Continuidad uniforme

$f$ es **uniformemente continua** si

$$
\forall \varepsilon > 0 \ \exists \delta > 0 \ \text{tal que para todo } x,y \in X,
$$

$$
d_X(x,y)<\delta \Rightarrow d_Y(f(x),f(y))<\varepsilon.
$$

La diferencia con continuidad puntual es que $\delta$ depende solo de $\varepsilon$, no del punto.

### Modulo de continuidad

Una funcion

$$
\omega : [0,\infty) \to [0,\infty)
$$

con

$$
\omega(t) \to 0 \quad \text{cuando } t \to 0
$$

y tal que

$$
d_Y(f(x),f(y)) \le \omega(d_X(x,y))
$$

para todos $x,y \in X$ proporciona un **modulo de continuidad** para $f$.

Las funciones Lipschitz corresponden al caso

$$
\omega(t)=Lt.
$$

## Interpretacion en lenguaje natural

La continuidad uniforme impone una escala global del error: si dos puntos del dominio estan suficientemente cerca entre si, entonces sus imagenes estan cerca con una cota que ya no depende de en que region del espacio esten esos puntos.

En espacios no compactos esa propiedad puede fallar aunque la funcion sea continua en cada punto.

## Ejemplos basicos

### Ejemplo 1: aplicaciones Lipschitz

Si existe $L \ge 0$ tal que

$$
d_Y(f(x),f(y)) \le L\, d_X(x,y)
$$

para todos $x,y \in X$, entonces $f$ es uniformemente continua.

### Ejemplo 2: identidad

La identidad

$$
\operatorname{id}_X : X \to X
$$

es uniformemente continua.

### Ejemplo 3: traslaciones e isometrias

Toda isometria es uniformemente continua, porque preserva exactamente la distancia.

### Ejemplo 4: funcion raiz

La funcion

$$
f(x)=\sqrt{x}, \qquad x \in [0,\infty),
$$

es uniformemente continua, aunque no sea Lipschitz en todo $[0,\infty)$.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: continua pero no uniformemente continua

La funcion

$$
f(x)=x^2, \qquad x \in \mathbb{R},
$$

es continua, pero no uniformemente continua.

#### Demostracion

Toma

$$
x_n=n, \qquad y_n=n+\frac1n.
$$

Entonces

$$
|x_n-y_n|=\frac1n \to 0,
$$

pero

$$
|f(x_n)-f(y_n)| = \left|n^2-\left(n+\frac1n\right)^2\right| = 2+\frac1{n^2} \to 2.
$$

Si $f$ fuera uniformemente continua, la cercania de $x_n$ e $y_n$ forzaria que la diferencia de sus imagenes tendiera a $0$, contradiccion.

### Contraejemplo 2: dominio no compacto

La funcion

$$
f(x)=\frac1x, \qquad x \in (0,1),
$$

es continua, pero no uniformemente continua.

### Ejemplo fino 3: continua y uniformemente continua en subconjuntos compactos

La misma funcion $x^2$ si es uniformemente continua en cualquier intervalo cerrado y acotado, por ejemplo en $[0,1]$ o $[-M,M]$.

## Teoremas y demostraciones centrales

### Proposicion 1: continuidad uniforme implica continuidad

Toda funcion uniformemente continua es continua.

#### Demostracion

Fijado $a \in X$ y dado $\varepsilon>0$, la definicion de continuidad uniforme proporciona un $\delta>0$ tal que

$$
d_X(x,a)<\delta \Rightarrow d_Y(f(x),f(a))<\varepsilon.
$$

Como ese mismo $\delta$ vale para todo par de puntos, en particular vale respecto de $a$. Luego $f$ es continua en $a$.

### Teorema 2: criterio secuencial uniforme

$f$ es uniformemente continua si y solo si para cualesquiera sucesiones $(x_n)$ y $(y_n)$ en $X$ tales que

$$
d_X(x_n,y_n)\to 0,
$$

se cumple

$$
d_Y(f(x_n),f(y_n))\to 0.
$$

#### Demostracion

Supongamos primero que $f$ es uniformemente continua y sea $\varepsilon>0$. Elige $\delta>0$ uniforme asociado a $\varepsilon$. Si

$$
d_X(x_n,y_n)\to 0,
$$

existe $N$ tal que para $n \ge N$,

$$
d_X(x_n,y_n)<\delta.
$$

Entonces

$$
d_Y(f(x_n),f(y_n))<\varepsilon
$$

para todo $n \ge N$, y por tanto la distancia en el codominio tiende a $0$.

Reciprocamente, si $f$ no es uniformemente continua, existe $\varepsilon_0>0$ tal que para cada $n \in \mathbb{N}$ pueden elegirse $x_n,y_n \in X$ con

$$
d_X(x_n,y_n)<\frac1n
$$

pero

$$
d_Y(f(x_n),f(y_n)) \ge \varepsilon_0.
$$

Entonces

$$
d_X(x_n,y_n)\to 0
$$

mientras que la distancia de sus imagenes no tiende a $0$, contradiccion.

### Proposicion 3: las funciones uniformemente continuas transportan sucesiones de Cauchy

Si $(x_n)$ es una sucesion de Cauchy en $X$ y $f$ es uniformemente continua, entonces $(f(x_n))$ es de Cauchy en $Y$.

#### Demostracion

Sea $\varepsilon>0$. Escoge $\delta>0$ uniforme asociado a $\varepsilon$. Como $(x_n)$ es de Cauchy, existe $N$ tal que

$$
n,m \ge N \Rightarrow d_X(x_n,x_m)<\delta.
$$

Entonces

$$
n,m \ge N \Rightarrow d_Y(f(x_n),f(x_m))<\varepsilon.
$$

### Corolario 4: extension a completaciones

La proposicion anterior explica por que las funciones uniformemente continuas son las adecuadas para extender aplicaciones definidas en subconjuntos densos hacia completaciones metricas.

### Proposicion 5: estabilidad por composicion

Si

$$
f : X \to Y, \qquad g : Y \to Z
$$

son uniformemente continuas, entonces

$$
g \circ f
$$

es uniformemente continua.

#### Demostracion

Dado $\varepsilon>0$, elige $\eta>0$ para $g$ tal que

$$
d_Y(u,v)<\eta \Rightarrow d_Z(g(u),g(v))<\varepsilon.
$$

Luego elige $\delta>0$ para $f$ tal que

$$
d_X(x,y)<\delta \Rightarrow d_Y(f(x),f(y))<\eta.
$$

Encadenando ambas implicaciones se obtiene la continuidad uniforme de la composicion.

### Teorema 6: Heine-Cantor

Si $K$ es un compacto metrico y

$$
f : K \to Y
$$

es continua, entonces $f$ es uniformemente continua.

#### Demostracion

Supongamos, por contradiccion, que $f$ no es uniformemente continua. Entonces existe $\varepsilon_0>0$ tal que para todo $n \in \mathbb{N}$ pueden elegirse $x_n,y_n \in K$ con

$$
d_X(x_n,y_n)<\frac1n
$$

pero

$$
d_Y(f(x_n),f(y_n)) \ge \varepsilon_0.
$$

Por compacidad de $K$, la sucesion $(x_n)$ posee una subsucesion $(x_{n_k})$ que converge a algun punto $x \in K$.

Como

$$
d_X(x_{n_k},y_{n_k})<\frac1{n_k}\to 0,
$$

se sigue que tambien

$$
y_{n_k}\to x.
$$

Por continuidad de $f$ en $x$,

$$
f(x_{n_k}) \to f(x), \qquad f(y_{n_k}) \to f(x),
$$

de donde

$$
d_Y(f(x_{n_k}),f(y_{n_k}))\to 0,
$$

contradiccion con

$$
d_Y(f(x_{n_k}),f(y_{n_k})) \ge \varepsilon_0.
$$

### Proposicion 7: continuidad uniforme en espacios totalmente acotados

Si $X$ es totalmente acotado y $f : X \to Y$ es uniformemente continua, entonces la imagen $f(X)$ es totalmente acotada.

#### Demostracion

Sea $\varepsilon>0$ y toma $\delta>0$ uniforme para $\varepsilon$. Como $X$ es totalmente acotado, existe una cubierta finita

$$
X \subseteq \bigcup_{j=1}^N B_X(x_j,\delta).
$$

Entonces

$$
f(X) \subseteq \bigcup_{j=1}^N B_Y(f(x_j),\varepsilon).
$$

## Ejemplos estructurales

### Ejemplo 1: funciones lineales acotadas en normados

Si $T : V \to W$ es lineal y acotada entre normados, entonces es Lipschitz y por tanto uniformemente continua.

### Ejemplo 2: funcion seno

La funcion

$$
\sin : \mathbb{R} \to \mathbb{R}
$$

es uniformemente continua porque satisface

$$
|\sin x-\sin y| \le |x-y|.
$$

### Ejemplo 3: funcion inversa en un dominio separado de cero

La funcion

$$
f(x)=\frac1x
$$

es uniformemente continua en $[a,\infty)$ para todo $a>0$, pero no en $(0,\infty)$.

## Errores comunes

1. Reutilizar un $\delta$ que depende del punto y llamarlo uniforme.
2. Confundir continuidad uniforme con ser Lipschitz.
3. Creer que la continuidad uniforme depende solo del codominio.
4. Pensar que toda funcion continua en un dominio acotado es uniformemente continua; la hipotesis correcta es compacidad, no mera acotacion.
5. Olvidar que el criterio secuencial uniforme involucra pares de sucesiones, no una sola.

## Resumen operativo

- La continuidad uniforme es una version global de la continuidad.
- Se caracteriza por el hecho de que parejas de puntos cercanos tienen imagenes cercanas de manera uniforme.
- Transporta sucesiones de Cauchy y se conserva por composicion.
- Toda funcion continua sobre un compacto metrico es uniformemente continua.
- En analisis abstracto, la continuidad uniforme es la clase correcta para trabajar con completaciones.

## Ejercicios

### Ejercicio 1

Prueba que toda aplicacion $L$-Lipschitz $f : X \to Y$ es uniformemente continua.

### Ejercicio 2

Usa el criterio secuencial para demostrar que $f(x) = x^2$ no es uniformemente continua en $\mathbb{R}$.

### Ejercicio 3

Demuestra que $f(x) = \sqrt{x}$ es uniformemente continua en $[0,\infty)$.

### Ejercicio 4

Prueba que una isometria $f : X \to Y$ es uniformemente continua.

### Ejercicio 5

Demuestra que si $X$ es compacto y $f : X \to \mathbb{R}$ es continua, entonces $f$ es uniformemente continua.

### Ejercicio 6

Sean $f, g : X \to Y$ uniformemente continuas. Demuestra que el conjunto $\{x : f(x) = g(x)\}$ es cerrado en $X$.

### Ejercicio 7

Sea $f : X \to Y$ uniformemente continua. Demuestre que transforma sucesiones de Cauchy en sucesiones de Cauchy.

### Ejercicio 8

Demuestra que si $f : X \to Y$ es uniformemente continua y $A \subseteq X$ es totalmente acotado, entonces $f(A)$ es totalmente acotado.

### Ejercicio 9

Pruebe que la funcion $f(x) = \sin(x^2)$ no es uniformemente continua en $\mathbb{R}$.

### Ejercicio 10

Sea $f : [a,\infty) \to \mathbb{R}$ con $\lim_{x \to \infty} f(x) = L$ existente. Demuestre que $f$ es uniformemente continua en $[a,\infty)$.

### Ejercicio 11

Demuestre que la composicion de funciones uniformemente continuas es uniformemente continua.

### Ejercicio 12

Sea $f : \mathbb{R} \to \mathbb{R}$ con $|f'(x)| \le M$ para todo $x$. Pruebe que $f$ es Lipschitz y por tanto uniformemente continua.

### Ejercicio 13

Demuestre que $f(x) = 1/x$ no es uniformemente continua en $(0,1]$ pero si en $[1,\infty)$.

### Ejercicio 14

Sea $f : X \to Y$ uniformemente continua e inyectiva. Demuestre que $f^{-1} : f(X) \to X$ es uniformemente continua si $X$ es completo.

### Ejercicio 15

Sea $f : X \to Y$ biyectiva, uniformemente continua, con $Y$ completo y $f^{-1}$ continua. Demuestre que $X$ es completo.

## Soluciones

### Solucion 1

Si $f$ es $L$-Lipschitz, dado $\varepsilon > 0$ toma $\delta = \varepsilon/L$. Si $d_X(x,y) < \delta$, entonces $d_Y(f(x), f(y)) \le L \cdot d_X(x,y) < L \cdot (\varepsilon/L) = \varepsilon$. $\blacksquare$

### Solucion 2

Considera $x_n = n$ e $y_n = n + 1/n$. Entonces $|x_n - y_n| = 1/n \to 0$, pero $|x_n^2 - y_n^2| = |n^2 - (n+1/n)^2| = |n^2 - n^2 - 2 - 1/n^2| = 2 + 1/n^2 \to 2 \ne 0$. Por el criterio secuencial, $x^2$ no es uniformemente continua. $\blacksquare$

### Solucion 3

Para $x, y \ge 0$: $|\sqrt{x} - \sqrt{y}| = \frac{|x-y|}{\sqrt{x} + \sqrt{y}} \le \frac{|x-y|}{\sqrt{|x-y|}} = \sqrt{|x-y|}$. Dado $\varepsilon > 0$, toma $\delta = \varepsilon^2$. Si $|x-y| < \delta$, entonces $|\sqrt{x} - \sqrt{y}| \le \sqrt{|x-y|} < \varepsilon$. $\blacksquare$

### Solucion 4

Por definicion de isometria: $d_Y(f(x), f(y)) = d_X(x,y)$. Dado $\varepsilon > 0$, toma $\delta = \varepsilon$. Si $d_X(x,y) < \delta$, entonces $d_Y(f(x), f(y)) = d_X(x,y) < \varepsilon$. $\blacksquare$

### Solucion 5

Este es el teorema de Heine-Cantor. Supongamos que $f$ no es uniformemente continua. Existe $\varepsilon_0 > 0$ tal que para todo $n$ existen $x_n, y_n$ con $d(x_n, y_n) < 1/n$ pero $d(f(x_n), f(y_n)) \ge \varepsilon_0$. Por compacidad, $(x_n)$ tiene subsucesion convergente $x_{n_k} \to x$. Entonces $y_{n_k} \to x$, y por continuidad $f(x_{n_k}) \to f(x)$ y $f(y_{n_k}) \to f(x)$, contradict $d(f(x_{n_k}), f(y_{n_k})) \ge \varepsilon_0$. $\blacksquare$

### Solucion 6

$\{x : f(x) = g(x)\} = (f - g)^{-1}(\{0\})$. El conjunto $\{0\}$ es cerrado en $Y$, y $f - g$ es uniformemente continua (por diferencia de uniformemente continuas), hence continua. La preimagen de cerrado es cerrada. $\blacksquare$

### Solucion 7

Sea $(x_n)$ de Cauchy en $X$. Dado $\varepsilon > 0$, existe $\delta > 0$ tal que $d_X(x,y) < \delta \Rightarrow d_Y(f(x), f(y)) < \varepsilon$. Para este $\delta$, existe $N$ con $n,m \ge N \Rightarrow d_X(x_n, x_m) < \delta$. Entonces $d_Y(f(x_n), f(x_m)) < \varepsilon$ para $n,m \ge N$, asi $(f(x_n))$ es de Cauchy. $\blacksquare$

### Solucion 8

Sea $\varepsilon > 0$. Toma $\delta > 0$ tal que $d_X(x,y) < \delta \Rightarrow d_Y(f(x), f(y)) < \varepsilon$. Como $A$ es totalmente acotado, existe cubierta finita $A \subseteq \bigcup_{j=1}^N B_X(a_j, \delta)$. Entonces $f(A) \subseteq \bigcup_{j=1}^N B_Y(f(a_j), \varepsilon)$. $\blacksquare$

### Solucion 9

Considera $x_n = \sqrt{n\pi}$ e $y_n = \sqrt{n\pi + \pi/2}$. Entonces $|x_n - y_n| = \frac{\pi/2}{\sqrt{n\pi} + \sqrt{n\pi + \pi/2}} \to 0$, pero $|f(x_n) - f(y_n)| = |\sin(n\pi) - \sin(n\pi + \pi/2)| = |0 - 1| = 1$. $\blacksquare$

### Solucion 10

Dado $\varepsilon > 0$, existe $M > a$ tal que $|f(x) - L| < \varepsilon/2$ para todo $x > M$. En $[a, M]$, por compacidad (intervalo cerrado), $f$ es uniformemente continua. Sea $\delta_1$ el delta correspondiente a $\varepsilon/2$ en $[a,M]$. Sea $\delta_2 = \varepsilon/2$. Para $x, y > M$: $|f(x) - f(y)| \le |f(x) - L| + |f(y) - L| < \varepsilon$. Para $x, y \le M$: usar $\delta_1$. Para $x \le M < y$: combinar ambos argumentos. $\blacksquare$

### Solucion 11

Dado $\varepsilon > 0$, existe $\eta > 0$ para $g$ tal que $d_Y(u,v) < \eta \Rightarrow d_Z(g(u), g(v)) < \varepsilon$. Para este $\eta$, existe $\delta > 0$ para $f$ tal que $d_X(x,y) < \delta \Rightarrow d_Y(f(x), f(y)) < \eta$. Entonces $d_X(x,y) < \delta \Rightarrow d_Z(g(f(x)), g(f(y))) < \varepsilon$. $\blacksquare$

### Solucion 12

Por el teorema del valor medio, $|f(x) - f(y)| \le M|x - y|$ para todo $x,y$. Asi $f$ es $M$-Lipschitz, hence uniformemente continua. $\blacksquare$

### Solucion 13

En $(0,1]$: toma $x_n = 1/n$, $y_n = 1/(n+1)$. Entonces $|x_n - y_n| = 1/(n(n+1)) \to 0$, pero $|1/x_n - 1/y_n| = (n+1) - n = 1$. No es uniformemente continua. En $[1,\infty)$: $|1/x - 1/y| = |x-y|/(xy) \le |x-y|$, luego es Lipschitz con $L=1$. $\blacksquare$

### Solucion 14

Sea $\varepsilon > 0$. Sea $\delta > 0$ el delta de continuidad uniforme de $f$ para $\varepsilon$. Si $d_Y(f(x), f(y)) < \delta$, entonces $d_X(x,y) < \varepsilon$. Esto muestra que $f^{-1}$ es uniformemente continua. $\blacksquare$

### Solucion 15

Sea $(x_n)$ de Cauchy en $X$. Entonces $(f(x_n))$ es de Cauchy en $Y$ (por continuidad uniforme). Por completitud de $Y$, $f(x_n) \to y$. Como $f^{-1}$ es continua, $x_n = f^{-1}(f(x_n)) \to f^{-1}(y) \in X$. $\blacksquare$

---

## Referencias y lecturas adicionales

1. Munkres, J.R. (2000). *Topology*. Prentice Hall.
2. Rudin, W. (1976). *Principles of Mathematical Analysis*. McGraw-Hill.
3. Engelking, R. (1989). *General Topology*. Heldermann Verlag.
4. Willard, S. (2004). *General Topology*. Dover.
5. Bourbaki, N. (1989). *General Topology*, Chapters 1-4. Springer.
6. Dieudonne, J. (1960). *Foundations of Modern Analysis*. Academic Press.
