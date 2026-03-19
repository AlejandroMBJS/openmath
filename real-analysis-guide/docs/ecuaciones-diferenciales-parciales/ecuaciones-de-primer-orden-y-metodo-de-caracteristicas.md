---
title: EDP de primer orden y metodo de caracteristicas
description: Metodo de caracteristicas para ecuaciones cuasilineales de primer orden, curvas caracteristicas, datos no caracteristicos y formacion de singularidades.
---

# EDP de primer orden y metodo de caracteristicas

## Idea rectora

Una EDP de primer orden no se resuelve, en general, derivando mas. Se resuelve encontrando curvas a lo largo de las cuales el problema se reduce a una EDO.

Esas curvas son las caracteristicas.

## Forma cuasilineal

El modelo tipico es

$$
a(x,y,u)u_x+b(x,y,u)u_y=c(x,y,u).
$$

La derivada direccional de

$$
u
$$

en la direccion

$$
(a,b)
$$

queda fijada por

$$
c.
$$

## Sistema caracteristico

Se buscan curvas

$$
s\mapsto (x(s),y(s),u(s))
$$

que satisfagan

$$
\dot x=a(x,y,u),
\qquad
\dot y=b(x,y,u),
\qquad
\dot u=c(x,y,u).
$$

### Por que funciona

Por regla de la cadena,

$$
\dot u=u_x \dot x+u_y \dot y
=
a u_x+b u_y
=
c.
$$

La EDP se vuelve un sistema de EDO.

## Caso lineal

Si

$$
a=a(x,y),
\qquad
b=b(x,y),
\qquad
c=c(x,y),
$$

el campo caracteristico se determina independientemente de

$$
u.
$$

Primero se encuentran las curvas en el plano y luego se integra

$$
u
$$

sobre ellas.

## Datos iniciales sobre una curva

Para determinar una solucion se prescriben datos sobre una curva inicial

$$
\Gamma:\sigma\mapsto (x_0(\sigma),y_0(\sigma)),
\qquad
u|_\Gamma=\varphi(\sigma).
$$

### Condicion no caracteristica

La construccion local funciona si la curva inicial no es tangente al campo caracteristico.

### Lectura

Si la curva inicial fuera caracteristica, el dato intentaria fijarse en la misma direccion en que la ecuacion ya transporta la informacion, y el problema pierde transversalidad.

## Ejemplo 1: transporte simple

Considere

$$
u_x+u_y=0.
$$

Las caracteristicas cumplen

$$
\dot x=1,
\qquad
\dot y=1,
\qquad
\dot u=0.
$$

Luego

$$
y-x=\text{constante},
\qquad
u=\text{constante sobre cada recta } y-x=C.
$$

Por tanto

$$
u(x,y)=F(y-x).
$$

## Ejemplo 2: ecuacion no homogenea

Para

$$
u_x+u_y=1,
$$

las mismas caracteristicas valen, pero ahora

$$
\dot u=1.
$$

Integrando a lo largo de la caracteristica:

$$
u=s+C.
$$

La solucion se reconstruye combinando ese crecimiento con el parametro constante

$$
y-x.
$$

## Invariantes caracteristicos

Muchas veces la resolucion consiste en encontrar:

- una cantidad constante a lo largo de las caracteristicas;
- la evolucion de

$$
u
$$

sobre esas curvas.

### Lectura

El metodo no es un truco mecanico. Es una geometria de foliacion del plano por curvas a lo largo de las cuales la informacion viaja.

## Choque y cruce de caracteristicas

En ecuaciones no lineales tipo

$$
u_t+a(u)u_x=0,
$$

la velocidad caracteristica depende de

$$
u.
$$

Caracteristicas que parten de distintos puntos pueden cruzarse.

### Consecuencia

La solucion clasica puede dejar de existir en tiempo finito aun para datos suaves. Aparecen pendientes infinitas y luego soluciones debiles o discontinuas.

### Moral

El metodo de caracteristicas no solo construye soluciones: tambien diagnostica su ruptura.

## Ecuacion de Hamilton-Jacobi

Una clase importante es

$$
u_t+H(x,\nabla u)=0.
$$

El metodo de caracteristicas sigue presente, aunque la geometria se vuelve mas rica y suele escribirse con un sistema Hamiltoniano asociado.

### Lectura

Este es uno de los puentes entre EDP de primer orden, mecanica clasica, optica geometrica y calculo variacional.

## Bien planteamiento local

Con coeficientes suficientemente regulares y dato inicial sobre una curva no caracteristica, el problema de Cauchy de primer orden tiene solucion local unica mientras la proyeccion caracteristica no se degenera.

### Limitacion

La unicidad clasica puede romperse cuando:

- la curva inicial es caracteristica;
- las caracteristicas se cruzan;
- la regularidad del campo falla.

## Errores frecuentes

- Intentar imponer datos sobre una curva caracteristica como si fueran datos libres.
- Olvidar que en el caso no lineal las caracteristicas dependen de la solucion.
- Pensar que el metodo garantiza solucion global suave.
- Reducirlo a algebra formal sin leer la geometria del transporte.

## Practica guiada

### Ejercicio 1

Resuelve

$$
u_x+2u_y=0.
$$

### Ejercicio 2

Explica por que la curva

$$
y=x
$$

es caracteristica para

$$
u_x+u_y=0.
$$

### Ejercicio 3

Describe conceptualmente que significa el cruce de caracteristicas en una ley de conservacion no lineal.

## Cierre

El metodo de caracteristicas es la primera tecnologia propia de EDP. Convierte ecuaciones en geometria de propagacion y marca el paso desde el calculo multivariable a la teoria dinamica de la informacion.
