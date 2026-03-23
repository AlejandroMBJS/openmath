---
title: Curvatura de Curvas Planas
description: Curvatura, radio de curvatura, formulas invariantes y lectura geometrica de la desviacion respecto a la recta tangente.
---

# Curvatura de Curvas Planas

## Idea geometrica

La curvatura mide la velocidad con la que cambia la direccion tangente al recorrer una curva con parametro de longitud de arco. En una recta no cambia la direccion; en una circunferencia cambia a ritmo constante.

## Curvatura con parametro de longitud de arco

Sea $\alpha(s)$ una curva plana regular parametrizada por longitud de arco. Definimos

$$
T(s)=\alpha'(s), \qquad \|T(s)\|=1.
$$

Como $\langle T,T\rangle=1$, derivando obtenemos

$$
\langle T'(s),T(s)\rangle=0.
$$

Luego $T'(s)$ es ortogonal a $T(s)$.

La curvatura escalar es

$$
\kappa(s)=\|T'(s)\|.
$$

## Curvatura con signo

En el plano orientado puede elegirse una normal unitaria $N$ y escribir

$$
T'(s)=\kappa_s(s)N(s),
$$

donde $\kappa_s$ es la curvatura con signo. Su signo depende de la orientacion elegida.

## Formula para parametrizacion arbitraria

Si $\gamma(t)=(x(t),y(t))$ es regular, entonces

$$
\kappa(t)=\frac{|x'(t)y''(t)-y'(t)x''(t)|}{\big((x'(t))^2+(y'(t))^2\big)^{3/2}}.
$$

Esta expresion muestra que la curvatura no es simplemente una segunda derivada: hay una normalizacion geometrica por la rapidez.

## Formula para una grafica

Si la curva es $y=f(x)$, entonces

$$
\kappa(x)=\frac{|f''(x)|}{\left(1+(f'(x))^2\right)^{3/2}}.
$$

## Radio de curvatura

Si $\kappa(s)\neq 0$, se define

$$
\rho(s)=\frac{1}{\kappa(s)}.
$$

El radio de curvatura mide la escala local del doblado: radios pequenos corresponden a curvaturas grandes.

## Circunferencia como modelo

Para la circunferencia de radio $R$ parametrizada por longitud de arco,

$$
\alpha(s)=\left(R\cos\frac{s}{R},R\sin\frac{s}{R}\right),
$$

se tiene

$$
\kappa(s)=\frac{1}{R}.
$$

## Caracterizacion de rectas y circunferencias

- Si $\kappa\equiv 0$, la curva es un segmento de recta.
- Si $\kappa\equiv c>0$, la curva es un arco de circunferencia de radio $1/c$.

## Funcion angulo tangente

En el plano orientado puede escribirse

$$
T(s)=(\cos\theta(s),\sin\theta(s)).
$$

Entonces

$$
\kappa_s(s)=\theta'(s).
$$

Esta igualdad es fundamental: la curvatura con signo es la derivada del angulo tangente.

## Ejemplo: parabola

Para $\gamma(x)=(x,x^2)$ se obtiene

$$
\kappa(x)=\frac{2}{(1+4x^2)^{3/2}}.
$$

La curvatura es maxima en el vertice y decrece hacia cero al alejarnos.

## Aceleracion y curvatura

Si la curva esta parametrizada por tiempo $t$, la aceleracion se descompone como

$$
\gamma''(t)=v'(t)T+v(t)^2\kappa N,
$$

donde $v(t)=\|\gamma'(t)\|$. El termino normal recoge la informacion geometrica pura.

## Cierre

La curvatura plana cuantifica el giro del tangente y permite medir cuan bien una curva se aproxima localmente por su recta tangente o por una circunferencia. Esta idea se generaliza en el espacio mediante el marco de Frenet y, para superficies, mediante curvaturas normal y gaussiana.
