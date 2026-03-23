---
title: Funcion Zeta de Riemann
description: Serie de Dirichlet, continuacion analitica, producto de Euler y valores especiales.
---

# Funcion Zeta de Riemann

## Definicion inicial

Para $\Re(s)>1$, la funcion zeta de Riemann se define por la serie de Dirichlet

$$
\zeta(s)=\sum_{n=1}^{\infty}\frac{1}{n^s}.
$$

Esta serie converge absolutamente en ese semiplano.

## Producto de Euler

En la misma region se cumple la factorizacion

$$
\zeta(s)=\prod_{p\ \text{primo}}\frac{1}{1-p^{-s}}.
$$

Esta identidad revela el vinculo profundo entre zeta y la distribucion de los primos.

## Continuacion analitica

Aunque la serie inicial solo converge para $\Re(s)>1$, la funcion admite continuacion analitica al plano complejo entero salvo un polo simple en $s=1$.

## Ecuacion funcional

La zeta satisface una relacion de simetria profunda que conecta $s$ con $1-s$. Una forma tipica es

$$
\pi^{-s/2}\Gamma\left(\frac{s}{2}\right)\zeta(s)=\pi^{-(1-s)/2}\Gamma\left(\frac{1-s}{2}\right)\zeta(1-s).
$$

Esta ecuacion es el corazon analitico de la teoria.

## Valores especiales

- $\zeta(2)=\frac{\pi^2}{6}$;
- $\zeta(4)=\frac{\pi^4}{90}$;
- $\zeta(-1)=-\frac{1}{12}$ en el sentido de continuacion analitica;
- en enteros negativos pares aparecen los ceros triviales.

## Bernoulli y zeta

Los valores en enteros positivos pares se expresan mediante Bernoulli:

$$
\zeta(2m)=(-1)^{m+1}\frac{B_{2m}(2\pi)^{2m}}{2(2m)!}.
$$

Esto muestra que Bernoulli, Gamma y zeta forman una sola constelacion estructural.

## Lectura fisica

La zeta aparece en regularizacion de sumas divergentes, energia de vacio, determinantes funcionales y teoria espectral. En esos contextos no es solo un objeto de teoria de numeros, sino una herramienta de renormalizacion analitica.

## Cierre

La funcion zeta de Riemann es uno de los objetos centrales del analisis moderno: conecta series, productos infinitos, continuacion analitica, primos, funciones especiales y fenomenos espectrales.
