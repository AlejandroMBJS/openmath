---
title: Teorema Binomial
description: Expansiones binomiales finitas y generalizadas, coeficientes y radio de convergencia.
---

# Teorema Binomial

## Forma clasica

Para todo entero no negativo $n$ y cualesquiera $x,y$, se tiene

$$
(x+y)^n=\sum_{k=0}^n \binom{n}{k}x^{n-k}y^k,
$$

donde

$$
\binom{n}{k}=\frac{n!}{k!(n-k)!}.
$$

## Lectura combinatoria

El coeficiente binomial cuenta cuantas maneras hay de elegir $k$ factores $y$ entre los $n$ factores del producto

$$
(x+y)(x+y)\cdots(x+y).
$$

La identidad algebraica y la combinatoria se refuerzan mutuamente.

## Propiedades basicas

- simetria: $\binom{n}{k}=\binom{n}{n-k}$;
- recursion de Pascal:

$$
\binom{n}{k}=\binom{n-1}{k-1}+\binom{n-1}{k};
$$

- suma total:

$$
\sum_{k=0}^n \binom{n}{k}=2^n.
$$

## Forma generalizada

Si $\alpha\in\mathbb{C}$, puede definirse formalmente

$$
(1+x)^\alpha=\sum_{k=0}^{\infty}\binom{\alpha}{k}x^k,
$$

donde

$$
\binom{\alpha}{k}=\frac{\alpha(\alpha-1)\cdots(\alpha-k+1)}{k!},
\qquad \binom{\alpha}{0}=1.
$$

## Convergencia

La serie binomial generalizada converge para

$$
|x|<1.
$$

Si $\alpha$ es entero no negativo, la serie se detiene y recupera el polinomio clasico. Si no lo es, aparece una serie infinita.

## Ejemplos

### Raiz cuadrada

$$
(1+x)^{1/2}=1+\frac{x}{2}-\frac{x^2}{8}+\frac{x^3}{16}-\cdots
$$

para $|x|<1$.

### Inversa

$$
(1+x)^{-1}=1-x+x^2-x^3+\cdots
$$

para $|x|<1$.

## Uso en fisica matematica

El teorema binomial generalizado aparece en:

- expansiones no relativistas;
- aproximacion de radicales;
- perturbaciones con parametros pequenos;
- derivacion de series para funciones especiales.

## Cierre

El teorema binomial es el modelo elemental de expansion algebraica exacta y, en su version generalizada, una puerta de entrada natural a las series de potencias que aparecen en todo el analisis aplicado.
