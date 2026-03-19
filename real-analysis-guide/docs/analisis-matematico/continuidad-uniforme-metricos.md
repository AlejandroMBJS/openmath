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

1. Prueba que toda aplicacion Lipschitz es uniformemente continua.
2. Usa el criterio secuencial para demostrar que $x^2$ no es uniformemente continua en $\mathbb{R}$.
3. Demuestra que $\sqrt{x}$ es uniformemente continua en $[0,\infty)$.
4. Prueba que una isometria es uniformemente continua.
5. Demuestra que si $X$ es compacto y $f : X \to \mathbb{R}$ es continua, entonces $f$ es uniformemente continua.
