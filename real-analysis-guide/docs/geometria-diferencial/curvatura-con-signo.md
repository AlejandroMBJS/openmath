---
title: Curvatura con Signo
description: Orientacion del plano, funcion angulo tangente y lectura algebraica del giro de una curva plana.
---

# Curvatura con Signo

## Por que introducir un signo

La curvatura escalar

$$
\kappa=\|T'(s)\|
$$

mide cuanto gira la tangente, pero no dice hacia que lado lo hace. En el plano orientado es natural refinarla incorporando un signo que distinga giros antihorarios de giros horarios.

## Curva plana orientada

Sea $\alpha(s)$ una curva plana regular parametrizada por longitud de arco y supongamos fijada la orientacion usual del plano. Entonces puede escribirse

$$
T(s)=(\cos\theta(s),\sin\theta(s)),
$$

donde $\theta(s)$ es el angulo tangente.

## Definicion

La curvatura con signo se define por

$$
\kappa_s(s)=\theta'(s).
$$

Equivalentemente, si $N(s)$ es la normal unitaria coherente con la orientacion elegida, entonces

$$
T'(s)=\kappa_s(s)N(s).
$$

## Relacion con la curvatura escalar

Se tiene siempre

$$
\kappa(s)=|\kappa_s(s)|.
$$

La diferencia es que $\kappa_s$ distingue el lado hacia el cual gira la tangente.

## Formula para una grafica

Si la curva viene dada por $y=f(x)$ y se orienta con $x$ creciente, entonces

$$
\kappa_s(x)=\frac{f''(x)}{\left(1+(f'(x))^2\right)^{3/2}}.
$$

A diferencia de la formula sin signo, aqui no aparece valor absoluto.

## Interpretacion geometrica

- $\kappa_s>0$: la tangente gira en sentido positivo respecto de la orientacion elegida;
- $\kappa_s<0$: la tangente gira en sentido negativo;
- $\kappa_s=0$: no hay giro instantaneo.

## Ejemplo: circunferencia unitaria

Para

$$
\alpha(s)=(\cos s,\sin s)
$$

se tiene

$$
\kappa_s(s)=1.
$$

Si recorremos la misma circunferencia al reves, el signo cambia y obtenemos $\kappa_s=-1$.

## Cambio de orientacion del plano

Si invertimos la orientacion del plano, la normal compatible cambia de signo y por tanto tambien cambia de signo la curvatura orientada. Lo mismo ocurre si invertimos la orientacion de la curva.

## Formula mediante determinante

Para una parametrizacion regular $\gamma(t)=(x(t),y(t))$, la curvatura con signo puede escribirse como

$$
\kappa_s(t)=\frac{x'(t)y''(t)-y'(t)x''(t)}{\big((x'(t))^2+(y'(t))^2\big)^{3/2}}.
$$

El numerador es el determinante que detecta la orientacion del par velocidad-aceleracion.

## Concavidad y curvatura

En una grafica $y=f(x)$, el signo de $f''$ coincide con el de $\kappa_s$. Esto conecta la nocion elemental de concavidad del calculo con la geometria diferencial plana, aunque la curvatura incorpora una normalizacion geometrica ausente en la segunda derivada sola.

## Cambio total del angulo tangente

Integrando la curvatura con signo obtenemos

$$
\int_{s_1}^{s_2}\kappa_s(s)\,ds=\theta(s_2)-\theta(s_1).
$$

Para curvas cerradas simples orientadas positivamente, este numero esta relacionado con el numero de rotacion del tangente.

## Observacion topologica

La curvatura con signo ya no es solo una medida local: su integral global sobre una curva cerrada refleja informacion topologica sobre cuantas vueltas da el tangente alrededor del origen.

## Cierre

La curvatura con signo añade orientacion a la medida del giro del tangente. Permite distinguir el sentido del doblado, conecta con el angulo tangente y prepara la lectura global de curvas cerradas a traves del numero de rotacion.
