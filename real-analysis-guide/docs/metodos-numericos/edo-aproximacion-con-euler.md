---
title: EDO aproximacion con Euler
description: Metodo de Euler explicito para problemas de valor inicial, error local y global, consistencia, estabilidad y ejemplos.
---

# EDO aproximacion con Euler

## Problema de partida

Consideremos el problema de valor inicial

$$
y'(x)=f(x,y(x)),
\qquad
y(x_0)=y_0,
$$

donde

$$
f
$$

es una funcion dada y queremos aproximar la solucion en nodos discretos.

El metodo de Euler es la primera aproximacion sistematica a este problema. Su importancia no es solo historica: fija el lenguaje de:

- malla temporal;
- error local y global;
- consistencia;
- estabilidad;
- convergencia.

## Malla uniforme

Tomamos un paso

$$
h>0
$$

y definimos

$$
x_n=x_0+nh,
\qquad n=0,1,2,\dots.
$$

Buscamos aproximaciones

$$
y_n\approx y(x_n).
$$

## Derivacion por Taylor

Si

$$
y
$$

es la solucion exacta, entonces

$$
y(x_{n+1})
=
y(x_n)+hy'(x_n)+\frac{h^2}{2}y''(\xi_n),
$$

para algun

$$
\xi_n\in (x_n,x_{n+1}).
$$

Como

$$
y'(x_n)=f(x_n,y(x_n)),
$$

la aproximacion de primer orden consiste en descartar el resto cuadratico:

$$
y(x_{n+1})\approx y(x_n)+hf(x_n,y(x_n)).
$$

Reemplazando la solucion exacta por la aproximacion numerica:

$$
y_{n+1}=y_n+h f(x_n,y_n).
$$

Esta es la formula de Euler explicito.

## Derivacion integral

Tambien puede escribirse la solucion exacta como

$$
y(x_{n+1})=y(x_n)+\int_{x_n}^{x_{n+1}} f(x,y(x))\,dx.
$$

Si aproximamos la integral por la regla del rectangulo izquierdo:

$$
\int_{x_n}^{x_{n+1}} f(x,y(x))\,dx
\approx
h f(x_n,y(x_n)),
$$

volvemos a obtener Euler.

### Comentario

Esto muestra que Euler es simultaneamente:

- un metodo de Taylor de orden

$$
1;
$$

- una cuadratura elemental aplicada a la ecuacion integral.

## Algoritmo

Partiendo de

$$
y_0=y(x_0),
$$

para

$$
n=0,1,2,\dots
$$

definimos

$$
y_{n+1}=y_n+h f(x_n,y_n).
$$

Cada paso usa solo el valor actual de la pendiente.

## Interpretacion geometrica

En cada nodo

$$
(x_n,y_n)
$$

se traza la recta tangente aproximada

$$
y=y_n+f(x_n,y_n)(x-x_n),
$$

y se evalua en

$$
x_{n+1}=x_n+h.
$$

Por eso Euler se conoce tambien como metodo tangencial de primer orden.

## Error local de truncamiento

### Definicion

El error local de truncamiento mide el defecto de un solo paso si se parte del valor exacto:

$$
\tau_{n+1}
=
y(x_{n+1})-y(x_n)-h f(x_n,y(x_n)).
$$

### Proposicion 1

Si

$$
y\in C^2,
$$

entonces

$$
\tau_{n+1}=\frac{h^2}{2}y''(\xi_n)=O(h^2).
$$

### Consecuencia

Euler tiene error local de orden

$$
2.
$$

Con la convencion normalizada

$$
\tau_{n+1}/h,
$$

se dice que el metodo es consistente de orden

$$
1.
$$

## Error global

El error global en el nodo

$$
x_n
$$

es

$$
e_n=y(x_n)-y_n.
$$

### Teorema 2

Supongamos que:

1. la solucion exacta existe y es suficientemente regular;
2. 

$$
f
$$

es Lipschitz en la variable

$$
y
$$

con constante

$$
L.
$$

Entonces, sobre un intervalo acotado,

$$
\max_{0\le n\le N}\lvert e_n\rvert=O(h).
$$

### Esquema de demostracion

Restamos la ecuacion exacta y la numerica:

$$
e_{n+1}
=
e_n
+
h\bigl(f(x_n,y(x_n))-f(x_n,y_n)\bigr)
+
\tau_{n+1}.
$$

Tomando modulos y usando Lipschitz:

$$
\lvert e_{n+1}\rvert
\le
(1+hL)\lvert e_n\rvert + C h^2.
$$

Una desigualdad discreta de Gronwall da

$$
\lvert e_n\rvert\le C_T h.
$$

## Orden del metodo

Euler es un metodo de orden global

$$
1.
$$

Eso significa que, al dividir el paso por

$$
2,
$$

el error global se reduce aproximadamente a la mitad, siempre que estemos en el regimen asintotico.

## Ejemplo 1

Resolvamos

$$
y'=y,
\qquad
y(0)=1.
$$

La solucion exacta es

$$
y(x)=e^x.
$$

Con paso

$$
h=0.1,
$$

Euler da:

$$
y_{n+1}=y_n+0.1\,y_n=1.1\,y_n.
$$

Por tanto:

$$
y_n=(1.1)^n.
$$

En

$$
x_1=0.1
$$

tenemos

$$
y_1=1.1,
$$

mientras que

$$
e^{0.1}\approx 1.105170.
$$

En

$$
x_5=0.5
$$

obtenemos

$$
y_5=(1.1)^5\approx 1.61051,
$$

frente a

$$
e^{0.5}\approx 1.64872.
$$

Se observa la precision modesta pero coherente con un metodo de primer orden.

## Ejemplo 2

Consideremos

$$
y'=x+y,
\qquad
y(0)=1.
$$

Con

$$
h=0.2,
$$

Euler produce:

$$
y_{n+1}=y_n+0.2(x_n+y_n).
$$

### Primer paso

$$
x_0=0,\qquad y_0=1.
$$

Entonces

$$
y_1=1+0.2(0+1)=1.2.
$$

### Segundo paso

$$
x_1=0.2.
$$

Entonces

$$
y_2=1.2+0.2(0.2+1.2)=1.48.
$$

Este ejemplo muestra como el metodo usa directamente la ecuacion diferencial como regla de evolucion discreta.

## Consistencia

Euler es consistente porque su error local tiende a

$$
0
$$

cuando

$$
h\to 0.
$$

Mas precisamente, la normalizacion por

$$
h
$$

es de orden

$$
O(h).
$$

## Estabilidad cero

En el lenguaje de metodos de un paso, Euler es cero-estable: pequenas perturbaciones en un paso no se amplifican catastroficamente por la parte puramente discreta del esquema.

Para metodos de un paso, esta propiedad es bastante directa. El problema serio de estabilidad aparece al interactuar con la dinamica de la ecuacion.

## Estabilidad absoluta

Para estudiar estabilidad frente a ecuaciones rigidas se usa la ecuacion test

$$
y'=\lambda y,
$$

con

$$
\operatorname{Re}(\lambda)<0.
$$

Euler produce

$$
y_{n+1}=(1+h\lambda)y_n.
$$

La iteracion es estable si

$$
\lvert 1+h\lambda\rvert<1.
$$

### Region de estabilidad

En el plano complejo

$$
z=h\lambda,
$$

la region de estabilidad es el disco

$$
\lvert 1+z\rvert<1.
$$

Esto es bastante restrictivo.

## Consecuencia para rigidez

Si

$$
\lambda
$$

es real negativo de gran magnitud, la condicion de estabilidad exige

$$
h<\frac{2}{\lvert \lambda\rvert}.
$$

Por eso Euler explicito es poco adecuado para problemas rigidos: la precision puede permitir un paso moderado, pero la estabilidad lo obliga a ser extremadamente pequeno.

## Ventajas

- simplicidad total de implementacion;
- bajo costo por paso;
- valor pedagogico enorme;
- punto de partida para analisis de error y estabilidad.

## Limitaciones

- orden bajo;
- error global relativamente grande;
- mala estabilidad en problemas rigidos;
- necesidad de pasos pequenos para precision razonable.

## Relacion con otros metodos

Euler explicito es el primer miembro de varias jerarquias:

- metodos de Taylor;
- metodos de Runge-Kutta;
- esquemas predictor-corrector;
- diferencias finitas temporales.

Muchos metodos mas avanzados se entienden como correcciones estructurales de las debilidades de Euler.

## Comentario conceptual

El metodo es elemental, pero ya contiene el principio central del analisis numerico de EDO:

una ecuacion diferencial continua se reemplaza por una dinamica discreta. A partir de ahi, la pregunta matematica no es solo si la solucion existe, sino si la dinamica discreta la aproxima con orden y estabilidad controlados.

## Cierre

Euler es el laboratorio minimo donde se ve aparecer casi toda la teoria posterior: discretizacion, error local, error global, estabilidad y sensibilidad al paso. Entenderlo bien es imprescindible antes de pasar a Taylor, Euler modificado y Runge-Kutta.
