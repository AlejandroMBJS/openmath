---
title: Taylor en Varias Variables
description: Expansiones multivariables, hessiano, multiindices y aproximacion local de funciones escalares.
---

# Taylor en Varias Variables

## Idea central

Para funciones de varias variables, Taylor reemplaza una funcion complicada por un polinomio local construido a partir del gradiente, el hessiano y derivadas de orden superior.

## Expresion hasta segundo orden

Si $f:\mathbb{R}^n\to\mathbb{R}$ es suficientemente suave cerca de $a\in\mathbb{R}^n$, entonces

$$
f(a+h)=f(a)+\nabla f(a)\cdot h+\frac{1}{2}h^T H_f(a)h+R_2(h),
$$

donde $H_f(a)$ es la matriz hessiana.

## Interpretacion

- el gradiente da la mejor aproximacion lineal;
- el hessiano mide la curvatura local;
- el resto controla cuanto se aleja la funcion de ese modelo cuadratico.

## Multiindices

La forma compacta usa multiindices $\alpha=(\alpha_1,\dots,\alpha_n)$ con

$$
|\alpha|=\alpha_1+\cdots+\alpha_n,
\qquad
\alpha!=\alpha_1!\cdots\alpha_n!,
\qquad
h^\alpha=h_1^{\alpha_1}\cdots h_n^{\alpha_n}.
$$

Entonces

$$
T_m f(a+h)=\sum_{|\alpha|\le m}\frac{D^\alpha f(a)}{\alpha!}h^\alpha.
$$

## Caso de dos variables

Si $f=f(x,y)$, el desarrollo de segundo orden alrededor de $(a,b)$ es

$$
f(a+h,b+k)=f(a,b)+f_x(a,b)h+f_y(a,b)k
+\frac{1}{2}\left(f_{xx}(a,b)h^2+2f_{xy}(a,b)hk+f_{yy}(a,b)k^2\right)+R_2.
$$

## Extremos y hessiano

La aproximacion cuadratica es la base del criterio de la segunda derivada. En un punto critico $\nabla f(a)=0$:

- si el hessiano es definido positivo, hay minimo local;
- si es definido negativo, hay maximo local;
- si es indefinido, hay punto de silla.

## Lectura fisica

En fisica matematica, Taylor multivariable aparece al expandir potenciales cerca del equilibrio, linearizar campos, estudiar estabilidad y construir aproximaciones gaussianas.

## Cierre

Taylor en varias variables es la herramienta local basica de la geometria diferencial, la optimizacion y la fisica de pequenas perturbaciones. Su contenido real no es solo calculatorio: organiza la informacion local de una funcion en capas tensoriales de significado geometrico creciente.
