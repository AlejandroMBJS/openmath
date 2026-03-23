---
title: Numeros de Bernoulli
description: Definicion generatriz, primeras propiedades y aparicion en sumas de potencias y formulas asintoticas.
---

# Numeros de Bernoulli

## Funcion generatriz

Los numeros de Bernoulli $B_n$ se definen mediante la serie generatriz

$$
\frac{x}{e^x-1}=\sum_{n=0}^{\infty}B_n\frac{x^n}{n!}.
$$

Esta definicion concentra toda su estructura en una unica identidad analitica.

## Primeros valores

Expandiendo alrededor de $x=0$ se obtiene

$$
B_0=1,
\qquad
B_1=-\frac12,
\qquad
B_2=\frac16,
\qquad
B_4=-\frac{1}{30},
$$

y en general

$$
B_{2m+1}=0\qquad \text{para } m\ge 1.
$$

## Relacion recursiva

De la funcion generatriz se deduce la identidad

$$
\sum_{k=0}^n \binom{n+1}{k}B_k=0,
\qquad n\ge 1.
$$

Esta recursion permite calcular todos los Bernoulli a partir de los anteriores.

## Sumas de potencias

Los numeros de Bernoulli aparecen en la formula de Faulhaber para sumas de potencias:

$$
\sum_{m=1}^N m^p
$$

puede expresarse como un polinomio en $N$ cuyos coeficientes involucran Bernoulli. Esto conecta analisis generador, combinatoria y algebra explicita.

## Presencia en analisis asintotico

Los Bernoulli aparecen naturalmente en:

- la formula de Euler-Maclaurin;
- el desarrollo asintotico de funciones especiales;
- la expansion de la funcion zeta;
- correcciones finas entre sumas e integrales.

## Ejemplo caracteristico

La expansion

$$
\frac{x}{2}\coth\frac{x}{2}=\sum_{m=0}^{\infty}B_{2m}\frac{x^{2m}}{(2m)!}
$$

muestra como los Bernoulli gobiernan correcciones de naturaleza par y aparecen ligados a funciones hiperbolicas y trigonometricas.

## Cierre

Los numeros de Bernoulli son coeficientes universales que controlan correcciones discretas frente a estructuras continuas. Por eso reaparecen una y otra vez en sumas, series, formulas asintoticas y funciones especiales.
