---
title: Sistemas LTI y Convolucion
description: Respuesta impulsional, integral y suma de convolucion, y el papel estructural de los sistemas lineales invariantes.
---

# Sistemas LTI y Convolucion

## Sistemas LTI

Un sistema LTI es:

- lineal;
- invariante en el tiempo.

Estas dos propiedades juntas tienen una consecuencia decisiva:

la salida queda determinada completamente por la respuesta del sistema al impulso.

## Respuesta impulsional

En tiempo continuo, se usa la delta de Dirac $\delta(t)$.

Si la salida ante $\delta$ es $h(t)$, entonces $h$ se llama respuesta impulsional.

En tiempo discreto, se usa la delta de Kronecker:

$$
\delta[n]=
\begin{cases}
1, & n=0,\\
0, & n\ne 0.
\end{cases}
$$

La respuesta correspondiente es $h[n]$.

### Moral

La respuesta al impulso es el ADN del sistema LTI.

## Idea de descomposicion por impulsos

Formalmente, una senal continua puede escribirse como

$$
x(t)=\int_{-\infty}^{\infty} x(\tau)\delta(t-\tau)\,d\tau.
$$

Por linealidad e invariancia temporal, la salida es

$$
y(t)=\int_{-\infty}^{\infty} x(\tau)h(t-\tau)\,d\tau.
$$

Eso es la convolucion.

## Integral de convolucion

La definicion es

$$
(x*h)(t)=\int_{-\infty}^{\infty} x(\tau)h(t-\tau)\,d\tau.
$$

Equivalentemente,

$$
(x*h)(t)=\int_{-\infty}^{\infty} x(t-\tau)h(\tau)\,d\tau.
$$

### Lectura

La salida en el instante $t$ mezcla todos los valores previos de la entrada, ponderados por como el sistema responde a un impulso retrasado.

## Ejemplo de integral de convolucion

Sea

$$
x(t)=H(t), \qquad h(t)=e^{-t}H(t).
$$

Entonces

$$
y(t)=\int_{-\infty}^{\infty}H(\tau)e^{-(t-\tau)}H(t-\tau)\,d\tau.
$$

Las funciones escalon fuerzan

$$
0\le \tau \le t.
$$

Por tanto, para $t\ge 0$,

$$
y(t)=\int_0^t e^{-(t-\tau)}\,d\tau
=1-e^{-t}.
$$

### Lectura

El sistema integra exponencialmente el pasado de la entrada. El resultado es una subida transitoria hacia el equilibrio.

## Convolucion por metodo grafico

El metodo grafico sigue cuatro pasos:

1. reflejar una de las funciones;
2. desplazarla;
3. multiplicar punto a punto en la region de solapamiento;
4. integrar el producto.

### Importancia

No es solo una tecnica visual escolar. Permite leer soporte, causalidad y regiones activas sin integrar a ciegas.

## Propiedades algebraicas

Si las expresiones tienen sentido,

- conmutatividad:

$$
x*h=h*x;
$$

- asociatividad:

$$
(x*h_1)*h_2 = x*(h_1*h_2);
$$

- distributividad:

$$
x*(h_1+h_2)=x*h_1+x*h_2.
$$

### Lectura

Estas identidades son el reflejo temporal de que la multiplicacion en frecuencia sera mucho mas simple.

## Causalidad y soporte

Si $x$ y $h$ son causales, entonces

$$
(x*h)(t)=\int_0^t x(\tau)h(t-\tau)\,d\tau
$$

para $t\ge 0$.

### Moral

La convolucion de dos objetos causales sigue siendo causal.

## Tren de impulsos unitarios

Un tren de impulsos es una suma de deltas desplazadas:

$$
\sum_{k\in \mathbb{Z}} \delta(t-kT).
$$

### Importancia

Aparece en:

- muestreo ideal;
- periodicidad;
- representaciones de senales discretizadas;
- formula de Poisson y puentes entre continuo y discreto.

## Sistemas LTI discretos

En tiempo discreto, la estructura es analoga:

si la respuesta al impulso es $h[n]$, entonces la salida ante $x[n]$ es

$$
y[n]=\sum_{k\in \mathbb{Z}} x[k]h[n-k].
$$

## Suma de convolucion

La definicion es

$$
(x*h)[n]=\sum_{k\in \mathbb{Z}} x[k]h[n-k].
$$

### Ejemplo

Si

$$
x[n]=u[n], \qquad h[n]=a^n u[n], \qquad |a|<1,
$$

entonces

$$
y[n]=\sum_{k=0}^{n} a^{n-k}
=\sum_{m=0}^{n} a^m
=\frac{1-a^{n+1}}{1-a}
$$

para $n\ge 0$.

## BIBO y respuesta impulsional

Para un sistema LTI continuo, una condicion suficiente clasica de estabilidad BIBO es

$$
\int_{-\infty}^{\infty} |h(t)|\,dt < \infty.
$$

En discreto:

$$
\sum_{n\in \mathbb{Z}} |h[n]| < \infty.
$$

### Lectura

La estabilidad se reduce a una propiedad de la respuesta impulsional.

## LTI y EDO lineales

Un sistema descrito por una EDO lineal con coeficientes constantes y forzamiento

$$
a_m y^{(m)}+\cdots+a_0 y = b_r x^{(r)}+\cdots+b_0 x
$$

es LTI si las condiciones iniciales se fijan en el regimen adecuado.

### Importancia

Esto enlaza directamente la teoria de convolucion con la teoria de ecuaciones diferenciales ya desarrollada.

## Identidad y delta

La delta actua como neutro de convolucion:

$$
x*\delta = x.
$$

En discreto:

$$
x*\delta[n]=x[n].
$$

### Moral

Esto confirma que la delta es el impulso elemental del sistema.

## Inversion y deconvolucion

Si existe un sistema LTI con respuesta $g$ tal que

$$
g*h=\delta,
$$

entonces $g$ es un inverso convolutivo de $h$.

### Advertencia

La inversion puede ser algebraicamente posible pero analiticamente inestable, sobre todo si en frecuencia aparecen ceros o casi ceros.

## Ejemplo guiado: promedio movil

En discreto, si

$$
h[n]=\frac{1}{3}(\delta[n]+\delta[n-1]+\delta[n-2]),
$$

entonces

$$
y[n]=\frac{x[n]+x[n-1]+x[n-2]}{3}.
$$

### Lectura

La convolucion implementa un filtro suavizante elemental.

## Que prepara este capitulo

Convolucion es el puente hacia:

- Laplace y Z, donde se convierte en multiplicacion;
- Fourier, donde aparece como producto espectral;
- filtros y respuesta en frecuencia;
- analisis de sistemas y ecuaciones lineales.

## Errores frecuentes

- olvidar reflejar una funcion al calcular convolucion;
- confundir producto punto a punto con convolucion;
- perder la region de solapamiento al usar el metodo grafico;
- pensar que la conmutatividad borra la interpretacion de entrada y respuesta;
- usar estabilidad BIBO sin mirar integrabilidad absoluta de $h$.

## Practica recomendada

1. Calcular varias convoluciones entre escalones y exponenciales.
2. Resolver por suma de convolucion un sistema discreto causal simple.
3. Verificar la asociatividad con un ejemplo concreto.
4. Estudiar cuando una respuesta impulsional produce estabilidad BIBO.
5. Interpretar un filtro promedio movil como convolucion con un nucleo finito.

## Cierre

La convolucion es la operacion estructural de los sistemas LTI. Condensa linealidad, memoria e invariancia temporal en una sola formula. A partir de aqui, Fourier y Laplace no son tecnicas misteriosas: son simplemente la forma mas eficiente de leer la convolucion.
