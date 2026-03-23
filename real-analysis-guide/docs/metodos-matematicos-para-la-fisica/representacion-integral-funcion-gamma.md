---
title: Representacion Integral Funcion Gamma
description: Integral de Euler para Gamma, condiciones de convergencia y consecuencias basicas.
---

# Representacion Integral Funcion Gamma

## Integral de Euler

Para $\Re(s)>0$, la funcion Gamma se representa por

$$
\Gamma(s)=\int_0^{\infty} t^{s-1}e^{-t}\,dt.
$$

Esta es la representacion integral mas importante de Gamma.

## Convergencia

La integral converge porque:

- cerca de $0$, el factor dominante es $t^{s-1}$, que es integrable si $\Re(s)>0$;
- cerca de $\infty$, el factor $e^{-t}$ domina y produce decaimiento exponencial.

## Recurrencia por partes

Integrando por partes,

$$
\Gamma(s+1)=s\Gamma(s).
$$

Esta propiedad recupera la estructura factorial y permite prolongar la funcion a otras regiones mediante continuacion meromorfa.

## Valor en un medio

Tomando $s=\frac12$ y usando el cambio $t=u^2$,

$$
\Gamma\left(\frac12\right)=2\int_0^{\infty}e^{-u^2}\,du=\sqrt{\pi}.
$$

Aqui aparece la conexion con la integral gaussiana.

## Uso metodologico

La representacion integral es el punto de partida para:

- derivar propiedades de Gamma;
- obtener estimaciones asintoticas;
- conectar Gamma con Beta, Laplace y Mellin;
- justificar formulas espectrales y probabilisticas.

## Cierre

La integral de Euler no es solo una definicion elegante. Es la puerta principal a la teoria analitica de Gamma y el mecanismo por el cual esta funcion entra en todo el analisis aplicado y la fisica matematica.
