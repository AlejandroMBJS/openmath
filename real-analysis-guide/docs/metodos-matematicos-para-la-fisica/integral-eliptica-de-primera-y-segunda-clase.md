---
title: Integral Eliptica de Primera y Segunda Clase
description: Definiciones, propiedades basicas y aparicion natural de las integrales elipticas clasicas.
---

# Integral Eliptica de Primera y Segunda Clase

## Por que aparecen

Las integrales elipticas surgen cuando, tras una sustitucion algebraica razonable, aparece una raiz cuadrada de un polinomio cubico o cuartico sin factorizacion trivial que permita reducir la integral a funciones elementales.

## Integral eliptica de primera especie

La forma completa clasica es

$$
K(k)=\int_0^{\pi/2}\frac{d\varphi}{\sqrt{1-k^2\sin^2\varphi}},
$$

con parametro o modulo $k$ tal que $0\le k<1$.

La forma incompleta correspondiente es

$$
F(\phi,k)=\int_0^{\phi}\frac{d\varphi}{\sqrt{1-k^2\sin^2\varphi}}.
$$

## Integral eliptica de segunda especie

La forma completa es

$$
E(k)=\int_0^{\pi/2}\sqrt{1-k^2\sin^2\varphi}\,d\varphi,
$$

y la forma incompleta

$$
E(\phi,k)=\int_0^{\phi}\sqrt{1-k^2\sin^2\varphi}\,d\varphi.
$$

## Lectura geometrica

Estas integrales aparecen en longitudes de arcos, problemas de curvatura, pendulos no lineales y superficies de revolucion. Historicamente, provienen del calculo del arco de una elipse, de ahi su nombre.

## Comportamiento basico

- $K(0)=E(0)=\frac{\pi}{2}$;
- $K(k)\to \infty$ cuando $k\to 1^-$;
- $E(k)$ permanece finita cuando $k\to 1^-$.

La divergencia de $K$ refleja un tiempo o longitud que se hace infinito en ciertos problemas dinamicos al aproximarse a una separatriz.

## Series para pequeno modulo

Para $|k|<1$,

$$
K(k)=\frac{\pi}{2}\left(1+\frac{k^2}{4}+\frac{9k^4}{64}+\cdots\right),
$$

mientras que

$$
E(k)=\frac{\pi}{2}\left(1-\frac{k^2}{4}-\frac{3k^4}{64}-\cdots\right).
$$

Estas expansiones son utiles en perturbacion y aproximaciones de pequena amplitud.

## Relacion diferencial

Las integrales elipticas satisfacen ecuaciones diferenciales y relaciones funcionales profundas. Por ejemplo, derivando respecto de $k$ se conectan entre si $K$ y $E$, lo cual revela que no son objetos aislados sino parte de una teoria cerrada.

## Hacia funciones elipticas

Las integrales elipticas son la etapa inversa de las funciones elipticas. Mientras aqui se integran expresiones algebraicas, en la teoria posterior se invierten estas integrales y se obtienen funciones doblemente periodicas.

## Cierre

Las integrales elipticas de primera y segunda especie son las funciones especiales que aparecen cuando el analisis elemental deja de bastar en problemas geometricos y mecanicos muy clasicos. Son el umbral natural entre series de potencias y teoria eliptica.
