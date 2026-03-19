---
title: EDO Euler modificado
description: Metodo de Euler modificado, versiones de Heun y punto medio, orden dos, error y comparacion con Euler explicito.
---

# EDO Euler modificado

## Aclaracion terminologica

La expresion "Euler modificado" no es completamente univoca en la literatura.

En distintos textos puede referirse a:

- el metodo de Heun o trapecio explicito;
- el metodo del punto medio;
- en algunos contextos, una pequena familia de esquemas de segundo orden emparentados.

Todas estas variantes pertenecen a la clase de Runge-Kutta de dos etapas y comparten orden global

$$
2.
$$

En esta guia desarrollaremos primero la version de Heun, que es una de las mas comunes bajo ese nombre, y luego explicaremos su relacion con el punto medio.

## Problema de valor inicial

Consideremos

$$
y'=f(x,y),
\qquad
y(x_0)=y_0.
$$

Buscamos valores aproximados

$$
y_n\approx y(x_n),
\qquad
x_n=x_0+nh.
$$

## Idea de correccion

Euler explicito usa solo la pendiente en el extremo izquierdo:

$$
y_{n+1}=y_n+h f(x_n,y_n).
$$

Si la pendiente cambia a lo largo del paso, esta aproximacion puede ser pobre. La idea del Euler modificado es estimar una pendiente media mas representativa.

## Forma de Heun

### Predictor

Primero se calcula un valor tentativo por Euler:

$$
\tilde y_{n+1}=y_n+h f(x_n,y_n).
$$

### Corrector

Luego se promedian la pendiente inicial y la pendiente en el extremo derecho predicho:

$$
y_{n+1}
=
y_n+\frac{h}{2}
\Bigl[
f(x_n,y_n)+f(x_{n+1},\tilde y_{n+1})
\Bigr].
$$

## Interpretacion

Este metodo puede verse de dos maneras:

1. como un predictor-corrector elemental;
2. como la aplicacion de la regla del trapecio a la forma integral de la ecuacion, usando una prediccion explicita en el extremo derecho.

## Forma de Runge-Kutta

Si definimos

$$
k_1=f(x_n,y_n),
$$

$$
k_2=f(x_n+h,y_n+hk_1),
$$

entonces Heun se escribe

$$
y_{n+1}=y_n+\frac{h}{2}(k_1+k_2).
$$

Esto deja claro que se trata de un esquema de dos etapas.

## Metodo del punto medio

Otra variante de segundo orden es:

$$
k_1=f(x_n,y_n),
$$

$$
k_2=f\left(x_n+\frac{h}{2},\,y_n+\frac{h}{2}k_1\right),
$$

$$
y_{n+1}=y_n+h k_2.
$$

Tambien tiene orden global

$$
2.
$$

### Comentario

Heun y punto medio no son identicos paso a paso, pero pertenecen a la misma familia de Runge-Kutta de segundo orden y comparten estructura de error del mismo orden.

## Orden del metodo

### Teorema 1

Si

$$
f
$$

es suficientemente regular, Euler modificado tiene:

- error local

$$
O(h^3);
$$

- error global

$$
O(h^2).
$$

### Justificacion informal

La formula de Heun reproduce la expansion de Taylor hasta terminos de orden

$$
h^2.
$$

Por eso el primer termino omitido aparece en orden

$$
h^3.
$$

## Verificacion con Taylor

Expandimos:

$$
f(x_n+h,y_n+h f(x_n,y_n))
=
f+h f_x+h f_y f+O(h^2),
$$

donde todas las derivadas se evaluan en

$$
(x_n,y_n).
$$

Sustituyendo en Heun:

$$
y_{n+1}
=
y_n
+\frac{h}{2}\bigl[f+f+h f_x+h f_yf+O(h^2)\bigr]
$$

$$
=
y_n+h f+\frac{h^2}{2}(f_x+f_yf)+O(h^3),
$$

que coincide con el desarrollo de Taylor de orden

$$
2.
$$

## Ejemplo 1

Consideremos

$$
y'=y-x^2+1,
\qquad
y(0)=0.5,
$$

y tomemos

$$
h=0.2.
$$

### Paso de Heun

$$
k_1=f(0,0.5)=1.5.
$$

Prediccion:

$$
\tilde y_1=0.5+0.2(1.5)=0.8.
$$

Segunda pendiente:

$$
k_2=f(0.2,0.8)=0.8-0.04+1=1.76.
$$

Actualizacion:

$$
y_1=0.5+\frac{0.2}{2}(1.5+1.76)=0.826.
$$

La solucion exacta en

$$
x=0.2
$$

es

$$
y(0.2)=1.2^2-\frac12 e^{0.2}\approx 0.829299.
$$

El error ya es bastante menor que el de Euler explicito.

## Comparacion con Euler

Para el mismo problema y mismo paso:

$$
y_1^{\text{Euler}}=0.5+0.2(1.5)=0.8.
$$

Euler modificado produce

$$
0.826,
$$

mucho mas cercano al valor exacto.

### Interpretacion

Euler modificado corrige el defecto principal de Euler: usar una pendiente que solo representa el extremo inicial del subintervalo.

## Consistencia

Como el error local es

$$
O(h^3),
$$

el metodo es consistente de orden

$$
2.
$$

## Convergencia

Bajo hipotesis Lipschitz sobre

$$
f,
$$

la consistencia de orden

$$
2
$$

y la estabilidad del esquema implican convergencia global de orden

$$
2.
$$

## Estabilidad en la ecuacion test

Para

$$
y'=\lambda y,
$$

Heun produce

$$
y_{n+1}
=
\left(1+z+\frac{z^2}{2}\right)y_n,
\qquad
z=h\lambda.
$$

El polinomio de estabilidad es

$$
R(z)=1+z+\frac{z^2}{2}.
$$

### Comentario

La region de estabilidad es mayor que la de Euler, pero sigue siendo acotada. Por eso Euler modificado tampoco es adecuado, en general, para problemas muy rigidos.

## Ventajas

- mejora significativa de precision respecto a Euler;
- aun muy sencillo de implementar;
- solo requiere dos evaluaciones de

$$
f
$$

por paso;
- introduce de manera natural la idea de Runge-Kutta.

## Limitaciones

- sigue siendo explicito y, por tanto, con region de estabilidad limitada;
- mas costoso que Euler simple;
- en problemas rigidos puede exigir pasos pequenos igualmente.

## Relacion con RK2

La familia general de Runge-Kutta de orden

$$
2
$$

incluye varias elecciones de coeficientes. Heun y punto medio son dos representantes especialmente importantes. Ambos satisfacen las condiciones:

$$
\sum b_i=1,
\qquad
\sum b_i c_i=\frac12.
$$

## Comentario conceptual

Euler modificado es el primer metodo donde se ve claramente un principio recurrente en analisis numerico:

usar informacion adicional dentro del paso para mejorar orden sin recurrir a derivadas superiores exactas.

## Cierre

Euler modificado ocupa un lugar clave entre Euler y Runge-Kutta clasico. Conserva simplicidad operacional, gana un orden completo de convergencia y ensena la geometria basica de los metodos de varias etapas.
