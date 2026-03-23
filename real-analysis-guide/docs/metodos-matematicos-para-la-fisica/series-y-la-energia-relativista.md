---
title: Series y la Energia Relativista
description: Expansion binomial de la energia relativista y recuperacion del limite no relativista.
---

# Series y la Energia Relativista

## Formula relativista exacta

La energia total de una particula libre de masa $m$ y momento $p$ satisface

$$
E^2=p^2c^2+m^2c^4.
$$

Tomando la rama positiva,

$$
E=\sqrt{p^2c^2+m^2c^4}=mc^2\sqrt{1+\frac{p^2}{m^2c^2}}.
$$

## Regimen no relativista

Si

$$
\frac{p^2}{m^2c^2}\ll 1,
$$

puede usarse la expansion binomial

$$
(1+x)^{1/2}=1+\frac{x}{2}-\frac{x^2}{8}+O(x^3).
$$

Sustituyendo

$$
x=\frac{p^2}{m^2c^2},
$$

se obtiene

$$
E=mc^2+\frac{p^2}{2m}-\frac{p^4}{8m^3c^2}+O\!\left(\frac{p^6}{m^5c^4}\right).
$$

## Interpretacion de los terminos

- $mc^2$ es la energia de reposo;
- $\frac{p^2}{2m}$ es la energia cinetica clasica;
- el termino $-\frac{p^4}{8m^3c^2}$ es la primera correccion relativista.

Esto muestra con precision como la mecanica clasica emerge como aproximacion de baja velocidad.

## Expansion en velocidad

Tambien puede partirse de

$$
E=\gamma mc^2,
\qquad
\gamma=\frac{1}{\sqrt{1-v^2/c^2}},
$$

y expandir para $v/c\ll1$:

$$
\gamma=1+\frac{1}{2}\frac{v^2}{c^2}+\frac{3}{8}\frac{v^4}{c^4}+\cdots.
$$

Entonces

$$
E=mc^2+\frac{1}{2}mv^2+\frac{3}{8}m\frac{v^4}{c^2}+\cdots.
$$

La diferencia entre las expresiones en $p$ y en $v$ refleja que, relativistamente, $p$ y $mv$ ya no coinciden exactamente.

## Significado metodologico

Este ejemplo es importante porque enseña algo general: las series no solo sirven para calcular, sino para comparar escalas fisicas y derivar teorias efectivas validas en un regimen concreto.

## Cierre

La expansion de la energia relativista es un ejemplo paradigmatico de como Taylor y el teorema binomial convierten una formula exacta en una jerarquia de aproximaciones fisicamente interpretables.
