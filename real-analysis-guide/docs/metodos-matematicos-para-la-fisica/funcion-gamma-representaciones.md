---
title: Funcion Gamma Representaciones
description: Diferentes representaciones de Gamma mediante limites, productos y relaciones funcionales.
---

# Funcion Gamma Representaciones

## Extension del factorial

La funcion Gamma es la extension analitica del factorial al mundo continuo y complejo. Satisface

$$
\Gamma(z+1)=z\Gamma(z)
$$

y coincide con el factorial en enteros positivos desplazados.

## Limite de Euler

Una representacion clasica es

$$
\Gamma(z)=\lim_{n\to\infty}\frac{n!\,n^z}{z(z+1)\cdots(z+n)}.
$$

Esta formula hace visible el caracter multiplicativo y el origen discreto de Gamma.

## Producto de Weierstrass

Otra representacion fundamental es

$$
\frac{1}{\Gamma(z)}=ze^{\gamma z}\prod_{n=1}^{\infty}\left(1+\frac{z}{n}\right)e^{-z/n},
$$

donde $\gamma$ es la constante de Euler-Mascheroni.

Esta factorizacion muestra que $1/\Gamma$ es entera y permite leer con claridad sus ceros.

## Ventajas de cada representacion

- la formula limite es util para intuicion y aproximacion discreta;
- la formula de producto es ideal para variable compleja;
- la ecuacion funcional permite mover valores entre regiones del plano.

## Relacion con Beta y zeta

Las representaciones de Gamma no son solo formulas alternativas: son el mecanismo que enlaza Gamma con Beta, zeta, productos infinitos y ecuaciones funcionales de funciones especiales mas profundas.

## Cierre

Las distintas representaciones de Gamma muestran que la funcion puede mirarse desde analisis real, variable compleja y teoria de productos infinitos. Esa flexibilidad es parte de su poder estructural.
