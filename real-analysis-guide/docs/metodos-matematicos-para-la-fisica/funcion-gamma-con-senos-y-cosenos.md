---
title: Funcion Gamma con Senos y Cosenos
description: Formula de reflexion, identidades trigonometricas y conexion entre Gamma y funciones circulares.
---

# Funcion Gamma con Senos y Cosenos

## Idea central

La funcion Gamma no vive aislada: se relaciona de forma profunda con las funciones trigonometricas. La identidad mas famosa es la formula de reflexion de Euler.

## Formula de reflexion

Para $z\notin \mathbb{Z}$,

$$
\Gamma(z)\Gamma(1-z)=\frac{\pi}{\sin(\pi z)}.
$$

Esta identidad muestra que la estructura de polos de Gamma esta gobernada por el seno.

## Consecuencias

- los polos de $\Gamma$ aparecen en enteros no positivos;
- el seno compensa exactamente esos polos en la reflexion;
- la formula permite trasladar informacion de $z$ a $1-z$.

## Valores de semienteros

Tomando $z=\frac12$ se obtiene

$$
\Gamma\left(\frac12\right)^2=\pi,
$$

de donde

$$
\Gamma\left(\frac12\right)=\sqrt{\pi}.
$$

Esta identidad es uno de los puntos de encuentro mas importantes entre integrales gaussianas, Gamma y trigonometria.

## Formula de duplicacion

Otra identidad clave es la formula de Legendre:

$$
\Gamma(z)\Gamma\left(z+\frac12\right)=2^{1-2z}\sqrt{\pi}\,\Gamma(2z).
$$

Aunque no menciona seno ni coseno de forma explicita, es una consecuencia del mismo entramado estructural y resulta esencial para manipular valores especiales.

## Integrales trigonométricas

Las integrales

$$
\int_0^{\pi/2}\sin^{m-1}x\cos^{n-1}x\,dx
$$

pueden expresarse mediante la funcion Beta y, por tanto, mediante Gamma:

$$
\int_0^{\pi/2}\sin^{m-1}x\cos^{n-1}x\,dx=\frac{1}{2}\,\frac{\Gamma(m/2)\Gamma(n/2)}{\Gamma((m+n)/2)}.
$$

Esto explica por que Gamma aparece de manera natural en integrales trigonometricas no elementales.

## Cierre

La relacion de Gamma con senos y cosenos no es accidental. Expresa una simetria compleja profunda que enlaza polos, valores especiales, integrales trigonométricas y teoria analitica global de la funcion.
