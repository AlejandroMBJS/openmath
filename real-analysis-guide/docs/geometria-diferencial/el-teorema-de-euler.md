---
title: El Teorema de Euler
description: Curvaturas principales y expresion de la curvatura normal en una direccion arbitraria.
---

# El Teorema de Euler

## Problema geometrico

Dada una direccion tangente sobre una superficie, la curvatura normal depende de la direccion elegida. El teorema de Euler describe exactamente como varia esa curvatura y muestra que existen dos direcciones extremales privilegiadas.

## Curvaturas principales

Sea $S_p:T_pS\to T_pS$ el operador de forma en un punto $p$. Como es autoadjunto respecto de la primera forma fundamental, posee una base ortonormal de autovectores. Sus autovalores

$$
\kappa_1, \qquad \kappa_2
$$

se llaman **curvaturas principales**, y los autovectores asociados son las **direcciones principales**.

## Curvatura normal en una direccion

Si $v\in T_pS$ es un vector unitario, la curvatura normal es

$$
\kappa_n(v)=I(Sv,v).
$$

## Enunciado del teorema de Euler

Si $e_1,e_2$ es una base ortonormal de direcciones principales y

$$
v=\cos\theta\,e_1+\sin\theta\,e_2,
$$

entonces

$$
\kappa_n(\theta)=\kappa_1\cos^2\theta+\kappa_2\sin^2\theta.
$$

## Demostracion

Como $Se_1=\kappa_1e_1$ y $Se_2=\kappa_2e_2$,

$$
Sv=\kappa_1\cos\theta\,e_1+\kappa_2\sin\theta\,e_2.
$$

Luego

$$
I(Sv,v)=\kappa_1\cos^2\theta+\kappa_2\sin^2\theta,
$$

porque la base es ortonormal y los terminos cruzados desaparecen.

## Consecuencias inmediatas

- la curvatura normal toma valores entre $\kappa_1$ y $\kappa_2$;
- los maximos y minimos se alcanzan en las direcciones principales;
- toda la informacion direccional de segundo orden queda controlada por dos numeros.

## Lectura geometrica

El teorema de Euler reduce una familia continua de curvaturas normales a la combinacion cuadratica de dos valores extremos. Esta es una de las razones por las que las curvaturas principales son los invariantes locales correctos del doblado extrinseco.

## Casos especiales

### Punto umbilico

Si

$$
\kappa_1=\kappa_2,
$$

todas las direcciones son principales y toda curvatura normal coincide. La esfera es el modelo canonico.

### Punto hiperbolico

Si $\kappa_1$ y $\kappa_2$ tienen signos opuestos, existen direcciones con curvatura normal nula. Esto anticipa la aparicion de direcciones asintoticas.

## Conexion con curvatura media y gaussiana

De las curvaturas principales se obtienen

$$
H=\frac{\kappa_1+\kappa_2}{2},
\qquad
K=\kappa_1\kappa_2.
$$

Asi, el teorema de Euler conecta geometria direccional con invariantes simetricos globales de segundo orden.

## Cierre

El teorema de Euler muestra que la curvatura normal en una direccion arbitraria esta gobernada por las dos curvaturas principales. Con ello organiza el estudio local de superficies en torno a un espectro finito de direcciones privilegiadas.
