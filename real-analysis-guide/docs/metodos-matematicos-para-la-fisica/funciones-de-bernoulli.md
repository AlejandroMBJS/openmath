---
title: Funciones de Bernoulli
description: Polinomios de Bernoulli, funcion generatriz y relacion con periodicidad, sumas e integracion.
---

# Funciones de Bernoulli

## Polinomios de Bernoulli

Los polinomios de Bernoulli $B_n(x)$ se definen por la funcion generatriz

$$
\frac{te^{xt}}{e^t-1}=\sum_{n=0}^{\infty}B_n(x)\frac{t^n}{n!}.
$$

Al evaluar en $x=0$ se recuperan los numeros de Bernoulli:

$$
B_n(0)=B_n.
$$

## Primeros ejemplos

Los primeros polinomios son

$$
B_0(x)=1,
\qquad
B_1(x)=x-\frac12,
\qquad
B_2(x)=x^2-x+\frac16.
$$

## Propiedades diferenciales

Una propiedad central es

$$
\frac{d}{dx}B_n(x)=nB_{n-1}(x).
$$

Esto los convierte en una familia muy natural desde el punto de vista del calculo.

## Diferencia discreta

Tambien satisfacen

$$
B_n(x+1)-B_n(x)=nx^{n-1}.
$$

Esta identidad explica por que son el objeto correcto para interpolar sumas de potencias y para el paso entre calculo continuo y discreto.

## Version periodizada

La version periodica

$$
\widetilde{B}_n(x)=B_n(\{x\})
$$

donde $\{x\}$ denota la parte fraccionaria, aparece en formulas de sumacion y analisis fino de errores de truncacion.

## Relacion con Euler-Maclaurin

El termino de resto en Euler-Maclaurin puede escribirse mediante polinomios de Bernoulli periodizados. Esto muestra que no son solo objetos combinatorios, sino kernels correctivos que miden la diferencia entre una suma y una integral.

## Cierre

Las funciones o polinomios de Bernoulli son el refinamiento variable de los numeros de Bernoulli. Permiten organizar identidades diferenciales y discretas en una sola familia y son piezas esenciales del analisis de sumacion.
