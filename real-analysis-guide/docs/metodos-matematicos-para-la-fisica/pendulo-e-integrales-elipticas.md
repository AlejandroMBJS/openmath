---
title: Pendulo e Integrales Elipticas
description: Reduccion del pendulo no lineal a una integral eliptica y lectura dinamica del periodo exacto.
---

# Pendulo e Integrales Elipticas

## Ecuacion del pendulo simple

El pendulo simple sin amortiguamiento satisface

$$
\theta''+\frac{g}{\ell}\sin\theta=0,
$$

donde $\theta$ es el angulo, $g$ la gravedad y $\ell$ la longitud.

## Regimen lineal y su limite

Si $\theta$ es pequeno, puede aproximarse

$$
\sin\theta\approx \theta,
$$

y se obtiene el oscilador armonico

$$
\theta''+\frac{g}{\ell}\theta=0.
$$

Pero esta aproximacion deja de ser precisa cuando la amplitud angular deja de ser pequena.

## Conservacion de energia

Multiplicando la ecuacion por $\theta'$ e integrando,

$$
\frac{1}{2}(\theta')^2-\frac{g}{\ell}\cos\theta=C.
$$

Si la amplitud maxima es $\theta_0$, entonces $\theta'=0$ en ese punto y la constante queda determinada. Resulta

$$
(\theta')^2=\frac{2g}{\ell}(\cos\theta-\cos\theta_0).
$$

## Formula del periodo

A partir de la separacion de variables,

$$
dt=\sqrt{\frac{\ell}{2g}}\,\frac{d\theta}{\sqrt{\cos\theta-\cos\theta_0}}.
$$

Un cuarto del periodo corresponde al tiempo que tarda en ir de $0$ a $\theta_0$, de modo que

$$
\frac{T}{4}=\sqrt{\frac{\ell}{2g}}\int_0^{\theta_0}\frac{d\theta}{\sqrt{\cos\theta-\cos\theta_0}}.
$$

## Sustitucion eliptica

Usando la identidad

$$
\cos\theta-\cos\theta_0=2\left(\sin^2\frac{\theta_0}{2}-\sin^2\frac{\theta}{2}\right)
$$

y la sustitucion

$$
\sin\frac{\theta}{2}=k\sin\varphi,
\qquad
k=\sin\frac{\theta_0}{2},
$$

se obtiene

$$
T=4\sqrt{\frac{\ell}{g}}\,K(k),
$$

donde

$$
K(k)=\int_0^{\pi/2}\frac{d\varphi}{\sqrt{1-k^2\sin^2\varphi}}
$$

es la integral eliptica completa de primera especie.

## Consecuencia fisica crucial

El periodo exacto depende de la amplitud. El pendulo no lineal no es isocrono. La formula lineal

$$
T_0=2\pi\sqrt{\frac{\ell}{g}}
$$

solo aparece como limite cuando $k\to 0$.

## Expansion para amplitudes pequenas

Usando la expansion de $K(k)$,

$$
K(k)=\frac{\pi}{2}\left(1+\frac{k^2}{4}+\frac{9k^4}{64}+\cdots\right),
$$

se obtiene

$$
T=2\pi\sqrt{\frac{\ell}{g}}\left(1+\frac{k^2}{4}+\frac{9k^4}{64}+\cdots\right).
$$

Esto cuantifica la correccion no lineal al periodo armonico.

## Significado metodologico

El pendulo muestra como una ecuacion diferencial elemental lleva de manera natural a funciones especiales. La solucion exacta no se expresa mediante funciones elementales, sino mediante integrales elipticas y, mas profundamente, funciones elipticas.

## Cierre

El problema del pendulo no lineal es uno de los ejemplos clasicos donde una dinamica mecanica simple obliga a ampliar el repertorio funcional. Por eso es una entrada natural al estudio de integrales y funciones elipticas.
