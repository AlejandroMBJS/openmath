---
title: Ecuacion de Laplace y funciones armonicas
description: Ecuacion de Laplace, funciones armonicas, principio del maximo, propiedad del valor medio, unicidad y problemas de contorno.
---

# Ecuacion de Laplace y funciones armonicas

## El prototipo eliptico

La ecuacion de Laplace

$$
\Delta u=0
$$

es el modelo base de equilibrio estacionario. Sus soluciones se llaman funciones armonicas.

Aparece en:

- electrostatica;
- gravitacion newtoniana;
- flujo potencial;
- calor estacionario;
- teoria compleja.

## Laplaciano

En

$$
\mathbb{R}^n
$$

el Laplaciano es

$$
\Delta u=\sum_{j=1}^n \partial_{x_jx_j}u.
$$

### Lectura

Mide la curvatura total isotropa. En equilibrio armonico, esa curvatura total se anula.

## Funciones armonicas

Una funcion

$$
u
$$

de clase

$$
C^2
$$

en un dominio

$$
\Omega
$$

es armonica si

$$
\Delta u=0
$$

en

$$
\Omega.
$$

## Principio del maximo

### Enunciado informal

Una funcion armonica no puede alcanzar un maximo ni un minimo estrictos en el interior del dominio salvo que sea constante.

### Consecuencia

Los extremos de una solucion armonica estan controlados por la frontera.

### Moral

Las ecuaciones elipticas no propagan en tiempo. Promedian espacialmente.

## Unicidad del problema de Dirichlet

Si

$$
\Delta u=0
$$

en

$$
\Omega
$$

y el valor de

$$
u
$$

en

$$
\partial\Omega
$$

esta fijado, entonces la solucion armonica es unica cuando existe.

### Idea

La diferencia de dos soluciones seria armonica con dato de frontera nulo. Por el principio del maximo, debe ser identicamente cero.

## Propiedad del valor medio

Una funcion armonica satisface que su valor en el centro de una bola coincide con el promedio sobre la esfera, y tambien con el promedio sobre la bola.

### Lectura

El valor interior no lo dicta una EDO local hacia adelante, sino un balance global y simetrico de la vecindad.

### Consecuencia

Las funciones armonicas son muy rigidas. No pueden presentar picos locales aislados.

## Regularidad

Si una funcion es armonica, entonces es mucho mas regular de lo que la ecuacion sugiere a primera vista: en dominios suaves es

$$
C^\infty
$$

e incluso analitica real.

### Moral

La ecuacion eliptica transmite regularidad desde el operador mismo. Esta rigidez es una de las marcas de la teoria eliptica.

## Ejemplos

### Ejemplo 1

Toda funcion afin

$$
u(x)=a\cdot x+b
$$

es armonica.

### Ejemplo 2

En dos dimensiones,

$$
u(x,y)=x^2-y^2
$$

es armonica porque

$$
u_{xx}=2,
\qquad
u_{yy}=-2.
$$

### Ejemplo 3

En el plano, la parte real de una funcion holomorfa es armonica. Aqui aparece el puente directo con variable compleja.

## Poisson y frontera

El problema natural asociado es

$$
\Delta u=f
$$

o, en el caso homogeneo,

$$
\Delta u=0
$$

con condiciones de contorno.

### Dirichlet

Se prescribe

$$
u|_{\partial\Omega}.
$$

### Neumann

Se prescribe

$$
\partial_n u|_{\partial\Omega}.
$$

### Lectura

Las condiciones de contorno forman parte del problema. La ecuacion por si sola no basta para fijar el equilibrio.

## Comparacion con calor

La ecuacion del calor busca evolucion

$$
u_t-\Delta u=0.
$$

La ecuacion de Laplace es el estado estacionario asociado:

$$
u_t=0
\implies
\Delta u=0.
$$

### Moral

Laplace es el equilibrio del calor, del mismo modo que un equilibrio de ODE es el estado donde el flujo temporal se ha anulado.

## Errores frecuentes

- Pensar que la armonicidad es una propiedad puramente local sin control de frontera.
- Creer que el principio del maximo depende de formulas explicitas.
- Confundir

$$
\Delta u=0
$$

con linealidad de

$$
u.
$$
- Olvidar el puente con funciones holomorfas en dos dimensiones.

## Practica guiada

### Ejercicio 1

Verifica que

$$
u(x,y)=x^3-3xy^2
$$

es armonica.

### Ejercicio 2

Explica por que una funcion armonica no puede tener un maximo interior estricto salvo si es constante.

### Ejercicio 3

Interpreta Laplace como estado estacionario del calor.

## Cierre

La ecuacion de Laplace introduce la logica eliptica: control por la frontera, valor medio, principio del maximo y regularidad fuerte. Es uno de los pilares conceptuales de todo el analisis de EDP.
