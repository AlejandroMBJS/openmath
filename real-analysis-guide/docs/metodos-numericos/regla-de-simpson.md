---
title: Regla de Simpson
description: Regla de Simpson, derivacion por interpolacion cuadratica, error de orden cuatro y version compuesta.
---

# Regla de Simpson

## Idea central

Mientras la regla del trapecio aproxima la funcion por una recta, Simpson la aproxima por una parabola local. Esa mejora aparentemente modesta cambia de manera radical la precision del metodo.

## Derivacion en tres nodos

Tomemos tres nodos equiespaciados:

$$
x_0=a,\qquad x_1=\frac{a+b}{2},\qquad x_2=b.
$$

Sea

$$
p_2
$$

el polinomio cuadratico interpolante de

$$
f
$$

en esos puntos. Simpson consiste en aproximar

$$
\int_a^b f(x)\,dx
\approx
\int_a^b p_2(x)\,dx.
$$

## Formula de Simpson simple

Si

$$
h=\frac{b-a}{2},
$$

entonces

$$
\int_a^b f(x)\,dx
\approx
\frac{h}{3}\left[f(a)+4f\left(\frac{a+b}{2}\right)+f(b)\right].
$$

Equivalentemente:

$$
S(f)=\frac{b-a}{6}
\left[
f(a)+4f\left(\frac{a+b}{2}\right)+f(b)
\right].
$$

## Exactitud polinomial

La regla de Simpson es exacta para polinomios de grado a lo sumo

$$
3,
$$

aunque se deriva de un interpolante de grado

$$
2.
$$

### Comentario

Este hecho se debe a simetrias adicionales y explica parte de su eficiencia excepcional.

## Error de Simpson simple

### Teorema 1

Si

$$
f\in C^4([a,b]),
$$

entonces existe

$$
\xi\in (a,b)
$$

tal que

$$
\int_a^b f(x)\,dx-S(f)
=
-\frac{(b-a)^5}{2880}f^{(4)}(\xi).
$$

### Consecuencia

El error decrece como

$$
O((b-a)^5)
$$

en la version local, notablemente mejor que el trapecio simple.

## Ejemplo 1

Aproximemos

$$
\int_0^1 e^x\,dx.
$$

La regla de Simpson da

$$
S(f)=\frac16\left[e^0+4e^{1/2}+e^1\right].
$$

Numericamente:

$$
S(f)\approx 1.71886,
$$

muy cercano a

$$
e-1\approx 1.71828.
$$

## Comparacion con trapecio

Con el mismo intervalo total,

- trapecio usa solo extremos;
- Simpson usa tambien el punto medio;
- Simpson tiene orden mas alto y suele ser mucho mas preciso para funciones suaves.

## <a id="regla-de-simpson-compuesta"></a> Regla de Simpson compuesta

Para integrar en un intervalo grande, se divide

$$
[a,b]
$$

en

$$
n
$$

subintervalos uniformes, con la condicion de que

$$
n
$$

sea par.

Sea

$$
h=\frac{b-a}{n},
\qquad
x_i=a+ih.
$$

Entonces

$$
S_n(f)
=
\frac{h}{3}
\left[
f(x_0)
+4\sum_{\substack{1\le i\le n-1\\ i\text{ impar}}} f(x_i)
+2\sum_{\substack{2\le i\le n-2\\ i\text{ par}}} f(x_i)
+f(x_n)
\right].
$$

## Error global

### Teorema 2

Si

$$
f\in C^4([a,b]),
$$

entonces existe

$$
\xi\in (a,b)
$$

tal que

$$
\int_a^b f(x)\,dx-S_n(f)
=
-\frac{(b-a)}{180}h^4f^{(4)}(\xi).
$$

### Consecuencia

La regla compuesta de Simpson tiene error global

$$
O(h^4),
$$

frente al

$$
O(h^2)
$$

del trapecio compuesto.

## Ejemplo 2

Sea

$$
f(x)=\ln(1+x)
$$

en

$$
[0,1].
$$

Con

$$
n=4
$$

subintervalos:

$$
h=0.25.
$$

La formula compuesta es

$$
S_4(f)
=
\frac{0.25}{3}
\left[
f(0)+4f(0.25)+2f(0.5)+4f(0.75)+f(1)
\right].
$$

Esta aproximacion suele ser muy buena porque la funcion es suave en todo el intervalo.

## Interpretacion en terminos de Newton-Cotes

Simpson es la formula cerrada de Newton-Cotes correspondiente a tres nodos equiespaciados. Integra exactamente el interpolante cuadratico y, por simetria, alcanza un grado de exactitud superior al esperado.

## Condiciones de uso

Simpson funciona especialmente bien cuando:

- la funcion es suave;
- la malla es uniforme;
- el numero de subintervalos es par.

Puede degradarse cuando:

- la funcion tiene oscilaciones bruscas no resueltas por la malla;
- hay singularidades o derivadas grandes;
- los datos estan contaminados por ruido.

## Richardson y extrapolacion

Como trapecio y Simpson tienen estructuras de error conocidas, puede combinarse informacion de varias mallas para cancelar terminos dominantes del error. Simpson mismo puede verse como una mejora de trapecio a traves de una idea de extrapolacion.

## Ventajas

- orden alto para un metodo elemental;
- gran eficiencia en funciones suaves;
- implementacion simple;
- uso natural en mallas uniformes.

## Limitaciones

- requiere numero par de subintervalos;
- no es adaptativo por si mismo;
- formulas de orden fijo pueden ser ineficientes si la regularidad de la funcion varia mucho a lo largo del intervalo.

## Comentario estructural

La regla de Simpson muestra que en analisis numerico la precision no depende solo del numero de evaluaciones, sino de como se combinan algebraicamente. Una buena cancelacion estructural puede cambiar por completo el orden del error.

## Cierre

Simpson es uno de los mejores ejemplos de equilibrio entre simplicidad y potencia: sigue siendo una formula elemental, pero ya opera con orden alto y prepara el paso hacia cuadraturas compuestas, adaptativas y formulas gaussianas.
