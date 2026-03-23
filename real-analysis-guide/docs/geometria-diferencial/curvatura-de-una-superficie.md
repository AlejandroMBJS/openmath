---
title: Curvatura de una Superficie
description: Panorama unificado de curvaturas normal, principal, media y gaussiana en superficies inmersas.
---

# Curvatura de una Superficie

## De curvas a superficies

En una curva hay un unico invariante principal de doblado: la curvatura. En una superficie, el doblado depende de la direccion tangente elegida. Por eso la nocion de curvatura se vuelve mas rica.

## Curvatura normal

Para cada direccion tangente unitaria $v\in T_pS$, la superficie tiene una curvatura normal

$$
\kappa_n(v)=I(Sv,v).
$$

Esta cantidad depende de la direccion.

## Curvaturas principales

Los extremos de la curvatura normal se llaman curvaturas principales:

$$
\kappa_1,\qquad \kappa_2.
$$

Se alcanzan en las direcciones principales, que son autovectores del operador de forma.

## Curvatura gaussiana

El producto de las curvaturas principales define la curvatura gaussiana:

$$
K=\kappa_1\kappa_2.
$$

## Curvatura media

La media aritmetica define la curvatura media:

$$
H=\frac{\kappa_1+\kappa_2}{2}.
$$

La curvatura media aparece en problemas variacionales, superficies minimas y ecuaciones geometricas.

## Clasificacion local

- $K>0$: punto eliptico;
- $K<0$: punto hiperbolico;
- $K=0$: punto parabolico o plano segun el operador de forma.

## Intrinseco y extrinseco

La curvatura gaussiana resulta ser intrinseca por el teorema egregio, mientras que la curvatura media y las curvaturas normales dependen de la inmersion en el ambiente.

## Panorama conceptual

La curvatura de una superficie no es un solo numero sino una jerarquia de objetos:

- forma cuadratica direccional $\kappa_n$;
- espectro principal $\kappa_1,\kappa_2$;
- invariantes simetricos $H$ y $K$.

## Cierre

Hablar de curvatura de una superficie significa estudiar todo un sistema de invariantes derivados del operador de forma. Las curvaturas principal, media y gaussiana organizan esa informacion en distintos niveles geometricos.
