---
title: Ecuacion de transporte y conservacion
description: Transporte lineal, adveccion, invariancia a lo largo del flujo, problema de Cauchy, forzamiento y lectura en terminos de conservacion.
---

# Ecuacion de transporte y conservacion

## El primer modelo evolutivo real

La ecuacion de transporte describe una cantidad que no se crea ni se destruye localmente, sino que se desplaza siguiendo una velocidad dada.

El prototipo unidimensional es

$$
u_t+c u_x=0.
$$

Aqui

$$
u(t,x)
$$

puede representar densidad, temperatura idealizada sin difusion, concentracion o senal.

## Caracteristicas

El sistema caracteristico es

$$
\dot t=1,
\qquad
\dot x=c,
\qquad
\dot u=0.
$$

Luego

$$
x-ct=\text{constante},
\qquad
u=\text{constante sobre cada recta } x-ct=C.
$$

## Solucion del problema de Cauchy

Si

$$
u(0,x)=u_0(x),
$$

entonces

$$
u(t,x)=u_0(x-ct).
$$

### Lectura

El perfil inicial no cambia de forma. Solo se traslada con velocidad

$$
c.
$$

## Dominio de dependencia

El valor

$$
u(t,x)
$$

depende solo del dato inicial en el punto

$$
x-ct.
$$

### Moral

La informacion viaja con velocidad finita y perfectamente definida. Este rasgo hiperbolico contrasta con el calor, donde el efecto se difunde instantaneamente.

## Transporte con velocidad variable

Para

$$
u_t+b(x,t)u_x=0
$$

las caracteristicas satisfacen

$$
\dot x=b(x,t).
$$

La solucion sigue siendo constante a lo largo del flujo, pero ahora la geografia de las caracteristicas puede deformarse.

## Transporte con fuente

Si aparece forzamiento,

$$
u_t+b(x,t)u_x=f(t,x),
$$

entonces sobre cada caracteristica vale una EDO:

$$
\frac{d}{dt}u(t,x(t))=f(t,x(t)).
$$

### Consecuencia

La solucion se obtiene transportando el dato inicial y sumando la contribucion acumulada de la fuente.

## Forma conservativa

Muchas leyes se escriben como

$$
u_t+\partial_x F(u)=0.
$$

En el caso lineal

$$
F(u)=cu,
$$

se recupera el transporte.

### Lectura

La forma conservativa expresa balance local: la variacion temporal de la cantidad se compensa por el flujo que entra o sale.

## Balance integral

Integrando en un intervalo

$$
[a,b],
$$

se obtiene

$$
\frac{d}{dt}\int_a^b u(t,x)\,dx
=
-c\bigl(u(t,b)-u(t,a)\bigr).
$$

### Interpretacion

La masa total cambia solo por el flujo a traves de la frontera.

## Ejemplo: adveccion de una gaussiana

Si

$$
u_0(x)=e^{-x^2},
$$

entonces

$$
u(t,x)=e^{-(x-ct)^2}.
$$

El perfil sigue siendo una gaussiana exacta, solo desplazada.

### Leccion

El transporte puro conserva nitidamente las estructuras. No hay suavizado ni disipacion.

## Ruptura en el caso no lineal

Para

$$
u_t+u u_x=0
$$

la velocidad es la propia solucion. Datos iniciales decrecientes pueden generar choque en tiempo finito.

### Moral

La ecuacion de transporte lineal es el laboratorio donde se aprende la propagacion. La no lineal introduce compresion, rarefaccion y soluciones debiles.

## Relacion con continuidad

Si

$$
\rho
$$

es densidad y

$$
v
$$

es velocidad, la ecuacion de continuidad

$$
\rho_t+\nabla\cdot(\rho v)=0
$$

es la version multidimensional del mismo principio de conservacion.

## Errores frecuentes

- Confundir transporte con difusion.
- Pensar que el perfil siempre se deforma aunque la ecuacion sea lineal con velocidad constante.
- Olvidar el dominio de dependencia caracteristico.
- Usar formulas clasicas despues del cruce de caracteristicas en leyes no lineales.

## Practica guiada

### Ejercicio 1

Resuelve

$$
u_t+3u_x=0,
\qquad
u(0,x)=\sin x.
$$

### Ejercicio 2

Interpreta geometricamente el signo de

$$
c
$$

en la ecuacion de transporte.

### Ejercicio 3

Explica por que el transporte lineal no suaviza oscilaciones del dato inicial.

## Cierre

La ecuacion de transporte es el modelo base de propagacion. Entenderla bien aclara dominios de dependencia, conservacion local y el papel de las caracteristicas antes de pasar a modelos mas ricos.
