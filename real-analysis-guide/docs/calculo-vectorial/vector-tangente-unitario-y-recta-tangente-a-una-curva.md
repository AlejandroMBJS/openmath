---
title: Vector tangente unitario y recta tangente a una curva
description: Vector tangente, vector tangente unitario, regularidad y ecuacion de la recta tangente a una curva parametrizada.
---

# Vector tangente unitario y recta tangente a una curva

## Motivacion e intuicion

La derivada

$$
r'(t)
$$

da una direccion tangente a la curva, pero no esta normalizada. En geometria diferencial y cinematica conviene separar:

- la direccion de la curva;
- la rapidez con que se recorre.

El vector tangente unitario hace exactamente eso.

## Curva regular

Sea

$$
r:I\to \mathbb{R}^n
$$

derivable.

Se dice que la curva es **regular** en $t_0$ si

$$
r'(t_0)\ne 0.
$$

### Comentario

La regularidad garantiza que la curva tiene una direccion tangente bien definida en ese punto.

## Vector tangente

En un punto regular, el vector

$$
r'(t_0)
$$

se llama **vector tangente**.

### Interpretacion

Es el vector que mejor aproxima localmente el desplazamiento de la curva.

## Vector tangente unitario

Si

$$
r'(t)\ne 0,
$$

definimos

$$
T(t)=\frac{r'(t)}{\|r'(t)\|}.
$$

### Observacion

Se tiene

$$
\|T(t)\|=1.
$$

Por tanto $T$ representa solo la direccion de avance.

## Recta tangente

La recta tangente a la curva

$$
r(t)
$$

en el punto

$$
r(t_0)
$$

se define por

$$
\ell(s)=r(t_0)+s\,r'(t_0),
\qquad
s\in \mathbb{R},
$$

siempre que

$$
r'(t_0)\ne 0.
$$

### Comentario

Puede usarse tambien el vector tangente unitario:

$$
\ell(s)=r(t_0)+s\,T(t_0).
$$

Ambas expresiones describen la misma recta.

## Justificacion geometrica de la recta tangente

La aproximacion lineal de la curva alrededor de $t_0$ es

$$
r(t)\approx r(t_0)+r'(t_0)(t-t_0).
$$

Esto muestra que la recta tangente es la mejor aproximacion lineal local de la trayectoria.

## Reparametrizacion y tangente

Si una misma curva se reparametriza de forma suave y monotona creciente, el vector tangente unitario no cambia, salvo por la forma de expresarlo.

### Comentario

Si la reparametrizacion invierte orientacion, entonces el tangente unitario cambia de signo.

## Ejemplos basicos

### Ejemplo 1: parabola

Sea

$$
r(t)=\langle t,t^2\rangle.
$$

Entonces

$$
r'(t)=\langle 1,2t\rangle.
$$

En $t_0=1$,

$$
r(1)=\langle 1,1\rangle,
\qquad
r'(1)=\langle 1,2\rangle.
$$

La recta tangente es

$$
\ell(s)=\langle 1,1\rangle + s\langle 1,2\rangle.
$$

El vector tangente unitario es

$$
T(1)=\frac{1}{\sqrt{5}}\langle 1,2\rangle.
$$

### Ejemplo 2: circunferencia

Sea

$$
r(t)=\langle a\cos t,a\sin t\rangle.
$$

Entonces

$$
r'(t)=\langle -a\sin t,a\cos t\rangle,
$$

y como

$$
\|r'(t)\|=a,
$$

se obtiene

$$
T(t)=\langle -\sin t,\cos t\rangle.
$$

La tangente es perpendicular al radio

$$
r(t).
$$

## Relacion entre tangente y rapidez

Si la curva es regular, puede escribirse

$$
r'(t)=\|r'(t)\|\,T(t).
$$

### Interpretacion

Esta factorizacion separa:

- la rapidez

$$
\|r'(t)\|;
$$

- la direccion

$$
T(t).
$$

## Criterio de tangencia a una superficie

Si una curva $r(t)$ esta contenida en una superficie dada por

$$
F(x,y,z)=c,
$$

y $F$ es derivable, entonces

$$
\nabla F(r(t))\cdot r'(t)=0.
$$

Esto muestra que el vector tangente pertenece al plano tangente de la superficie.

## Ejemplos trabajados

### Ejemplo 3: helice

Sea

$$
r(t)=\langle \cos t,\sin t,t\rangle.
$$

Entonces

$$
r'(t)=\langle -\sin t,\cos t,1\rangle.
$$

La rapidez es

$$
\|r'(t)\|=\sqrt{2},
$$

por lo que

$$
T(t)=\frac{1}{\sqrt{2}}\langle -\sin t,\cos t,1\rangle.
$$

En $t=0$,

$$
r(0)=\langle 1,0,0\rangle,
\qquad
r'(0)=\langle 0,1,1\rangle.
$$

La recta tangente es

$$
\ell(s)=\langle 1,0,0\rangle+s\langle 0,1,1\rangle.
$$

### Ejemplo 4: punto no regular

Sea

$$
r(t)=\langle t^3,t^6\rangle.
$$

Entonces

$$
r'(t)=\langle 3t^2,6t^5\rangle.
$$

En

$$
t=0
$$

se tiene

$$
r'(0)=0.
$$

La formula directa del tangente unitario no aplica. Este es un punto singular de la parametrizacion.

## Errores comunes

- Usar el tangente unitario en puntos donde la curva no es regular.
- Confundir recta tangente con la curva misma.
- Olvidar que dos parametrizaciones de la misma curva pueden cambiar la orientacion del tangente unitario.
- No separar direccion y rapidez al interpretar $r'(t)$.

## Ejercicios propuestos

1. Hallar la recta tangente a varias curvas parametrizadas en puntos dados.
2. Calcular el vector tangente unitario para curvas planas y espaciales.
3. Estudiar si una parametrizacion dada es regular.
4. Comparar el tangente unitario de una curva con el de una reparametrizacion.
5. Verificar que el tangente a la circunferencia es perpendicular al radio.

## Cierre

El vector tangente unitario es el primer objeto intrinseco serio de la geometria de curvas. La recta tangente aparece como aproximacion lineal local, y la normalizacion del tangente prepara el paso inmediato hacia normales, curvatura y descomposicion de la aceleracion.
