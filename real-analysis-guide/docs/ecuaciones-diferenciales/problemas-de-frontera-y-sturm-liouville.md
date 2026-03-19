---
title: Problemas de frontera y Sturm-Liouville
description: Problemas de valores de frontera, funciones de Green, operadores autoadjuntos, autovalores, ortogonalidad y teoria basica de Sturm-Liouville.
---

# Problemas de frontera y Sturm-Liouville

## El salto desde PVI a PVF

En un problema de valores iniciales, los datos se imponen en un solo punto. En un problema de valores de frontera, las condiciones se reparten entre extremos del intervalo.

### Ejemplo tipico

$$
y''+q(x)y=f(x),
\qquad
y(a)=\alpha,
\qquad
y(b)=\beta.
$$

La diferencia es profunda:

- puede no existir solucion;
- puede haber una unica;
- puede haber infinitas.

## Problema lineal de frontera

Consideremos

$$
L[y]=-(p(x)y')'+q(x)y
$$

en

$$
[a,b],
$$

con

$$
p(x)>0,
\qquad
w(x)>0.
$$

Las condiciones de frontera suelen elegirse lineales, por ejemplo:

$$
\alpha_1 y(a)+\alpha_2 y'(a)=0,
\qquad
\beta_1 y(b)+\beta_2 y'(b)=0.
$$

## Funcion de Green para problemas de frontera

Si el problema homogoneo asociado no tiene soluciones no triviales bajo las condiciones de frontera dadas, el problema forzado admite una representacion integral

$$
y(x)=\int_a^b G(x,\xi)f(\xi)\,d\xi.
$$

### Lectura

La funcion

$$
G(x,\xi)
$$

es el inverso del operador lineal con esas condiciones de frontera. Es la version de frontera de la formula de variacion de constantes.

### Moral

En PVF, la invertibilidad depende del operador **y** de las condiciones de frontera. No basta con mirar solo la ecuacion diferencial.

## Forma de Sturm-Liouville

El problema clasico es

$$
-(p(x)y')'+q(x)y=\lambda w(x)y
$$

con condiciones de frontera homogeneas apropiadas.

Aqui

$$
\lambda
$$

es el parametro espectral.

## Autoadjuncion

El operador de Sturm-Liouville esta disenado para ser autoadjunto respecto del producto interno ponderado

$$
\langle u,v\rangle_w=\int_a^b u(x)v(x)w(x)\,dx.
$$

### Consecuencia

La autoadjuncion fuerza propiedades espectrales muy fuertes:

- autovalores reales;
- ortogonalidad de autofunciones asociadas a autovalores distintos;
- buena teoria de expansion.

## Ortogonalidad de autofunciones

Si

$$
y_m,\ y_n
$$

satisfacen

$$
L[y_n]=\lambda_n w y_n,
\qquad
L[y_m]=\lambda_m w y_m,
$$

con

$$
\lambda_n\ne \lambda_m,
$$

entonces

$$
\int_a^b y_n(x)y_m(x)w(x)\,dx=0.
$$

### Idea de la demostracion

Se multiplican las ecuaciones cruzadas, se restan y se integran. Los terminos de borde desaparecen por las condiciones de frontera autoadjuntas.

## Espectro discreto

En el caso regular sobre un intervalo compacto, el espectro de Sturm-Liouville es discreto:

$$
\lambda_1<\lambda_2<\lambda_3<\cdots,
\qquad
\lambda_n\to +\infty.
$$

Cada autovalor tiene autofunciones asociadas y, bajo hipotesis clasicas, los autofunciones forman una base ortogonal completa en el espacio adecuado.

## Teorema oscilatorio de Sturm

La

$$
n
$$

-esima autofuncion tiene exactamente

$$
n-1
$$

ceros interiores en

$$
(a,b).
$$

### Lectura

El numero de oscilaciones ordena el espectro. Esta relacion entre frecuencia espacial y valor propio es una de las firmas mas finas de la teoria.

## Cociente de Rayleigh

Para muchos problemas autoadjuntos, el primer autovalor puede caracterizarse variacionalmente por

$$
\lambda_1=
\inf_{u\ne 0}
\frac{\int_a^b \bigl(p(x)u'(x)^2+q(x)u(x)^2\bigr)\,dx}
{\int_a^b w(x)u(x)^2\,dx}.
$$

### Por que importa

Esta formula conecta EDO, calculo variacional y teoria espectral. El primer autovalor no es solo una raiz analitica: es la energia minima compatible con la normalizacion.

## Ejemplo clasico: extremos fijos

Considere

$$
y''+\lambda y=0,
\qquad
y(0)=0,
\qquad
y(L)=0.
$$

Es equivalente a

$$
-y''=\lambda y.
$$

Las soluciones no triviales aparecen solo para

$$
\lambda_n=\left(\frac{n\pi}{L}\right)^2,
\qquad
n=1,2,\dots,
$$

con autofunciones

$$
y_n(x)=\sin\left(\frac{n\pi x}{L}\right).
$$

### Lectura

Este es el modelo base de una cuerda vibrante con extremos fijos. Explica por que la teoria de Sturm-Liouville es el puente natural entre EDO y EDP.

## Expansion en autofunciones

Si el conjunto de autofunciones es completo, una funcion razonable

$$
f
$$

puede expandirse como serie

$$
f(x)\sim \sum_{n=1}^{\infty} c_n y_n(x).
$$

Entonces resolver

$$
L[y]=f
$$

se vuelve un problema de coeficientes espectrales.

### Moral

Sturm-Liouville no es solo teoria de valores propios. Es una tecnologia de descomposicion de funciones.

## Relacion con ecuaciones parciales

Separacion de variables en:

- ecuacion del calor;
- ecuacion de ondas;
- ecuacion de Laplace;

produce exactamente problemas de Sturm-Liouville en la variable espacial.

## Errores frecuentes

- Tratar un PVF como si un dato inicial bastara para garantizar unicidad.
- Olvidar que las condiciones de frontera forman parte del operador espectral.
- Confundir ortogonalidad euclidea con ortogonalidad ponderada por

$$
w.
$$
- Pensar que todo problema con parametro es automaticamente de Sturm-Liouville.

## Practica guiada

### Ejercicio 1

Resuelve el problema

$$
y''+\lambda y=0,
\qquad
y(0)=0,
\qquad
y(\pi)=0.
$$

### Ejercicio 2

Explica por que autofunciones asociadas a autovalores distintos son ortogonales en un problema autoadjunto.

### Ejercicio 3

Interpreta fisicamente el primer autovalor de una cuerda fija en ambos extremos.

## Cierre

Los problemas de frontera y la teoria de Sturm-Liouville convierten a las EDO lineales en teoria espectral. Ese cambio de lenguaje es esencial para enlazar ODE, Fourier, PDE y fisica matematica.
