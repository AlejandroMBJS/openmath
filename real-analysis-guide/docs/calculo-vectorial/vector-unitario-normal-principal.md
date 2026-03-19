---
title: Vector unitario normal principal
description: Definicion del vector normal principal, derivada del tangente unitario y significado geometrico del cambio de direccion.
---

# Vector unitario normal principal

## Motivacion e intuicion

El vector tangente unitario

$$
T(t)
$$

describe la direccion instantanea de una curva. Si esa direccion cambia, la derivada de $T$ debe apuntar hacia donde la curva se esta doblando. Esa es la idea del **vector normal principal**.

## Hipotesis de trabajo

Sea

$$
r:I\to \mathbb{R}^3
$$

una curva de clase $C^2$, regular, y supongamos que

$$
T'(t)\ne 0
$$

en el punto considerado.

## Definicion

El **vector unitario normal principal** se define por

$$
N(t)=\frac{T'(t)}{\|T'(t)\|}.
$$

### Interpretacion

$N(t)$ apunta en la direccion en que cambia el tangente unitario, es decir, hacia donde la curva gira localmente.

## Ortogonalidad entre $T$ y $N$

### Proposicion 1

Se cumple

$$
T(t)\cdot N(t)=0.
$$

#### Demostracion

Como

$$
\|T(t)\|=1,
$$

tenemos

$$
T(t)\cdot T(t)=1.
$$

Derivando,

$$
2T(t)\cdot T'(t)=0,
$$

de modo que

$$
T(t)\cdot T'(t)=0.
$$

Como $N(t)$ es un multiplo escalar positivo de $T'(t)$, se concluye que

$$
T(t)\cdot N(t)=0.
$$

### Consecuencia

El cambio de direccion del tangente es siempre perpendicular al propio tangente.

## Significado geometrico

En una recta, la direccion del tangente no cambia, por lo que

$$
T'(t)=0.
$$

En una curva verdaderamente doblada, $T'(t)$ mide el giro local. El normal principal apunta hacia el lado concavo de la trayectoria.

## Ejemplos basicos

### Ejemplo 1: circunferencia

Sea

$$
r(t)=\langle a\cos t,a\sin t\rangle.
$$

Entonces

$$
T(t)=\langle -\sin t,\cos t\rangle.
$$

Derivando,

$$
T'(t)=\langle -\cos t,-\sin t\rangle.
$$

Como ya tiene norma $1$,

$$
N(t)=\langle -\cos t,-\sin t\rangle.
$$

Este vector apunta hacia el centro de la circunferencia.

### Ejemplo 2: helice

Sea

$$
r(t)=\langle \cos t,\sin t,t\rangle.
$$

Se habia obtenido

$$
T(t)=\frac{1}{\sqrt{2}}\langle -\sin t,\cos t,1\rangle.
$$

Entonces

$$
T'(t)=\frac{1}{\sqrt{2}}\langle -\cos t,-\sin t,0\rangle,
$$

y

$$
\|T'(t)\|=\frac{1}{\sqrt{2}}.
$$

Por tanto

$$
N(t)=\langle -\cos t,-\sin t,0\rangle.
$$

El normal principal apunta horizontalmente hacia el eje de la helice.

## Relacion con el plano osculador

Los vectores

$$
T(t)
\quad \text{y} \quad
N(t)
$$

generan el plano osculador de la curva en el punto regular considerado.

### Comentario

Ese plano es el plano que mejor aproxima localmente la curva hasta segundo orden.

## Si $T'(t)=0$

Cuando

$$
T'(t)=0,
$$

el vector normal principal no esta definido mediante esta formula.

### Ejemplo

En una recta parametrizada uniformemente,

$$
T
$$

es constante.

## Relacion con la curvatura

La magnitud

$$
\|T'(t)\|
$$

no es en si misma la curvatura, porque todavia depende del parametro. Pero es la base de la formula correcta:

$$
\kappa(t)=\frac{\|T'(t)\|}{\|r'(t)\|}.
$$

Este punto se desarrollara por separado en el tema de curvatura.

## Ejemplos trabajados

### Ejemplo 3

Sea

$$
r(t)=\langle t,\tfrac12 t^2,0\rangle.
$$

Entonces

$$
r'(t)=\langle 1,t,0\rangle,
\qquad
\|r'(t)\|=\sqrt{1+t^2}.
$$

Asi,

$$
T(t)=\frac{1}{\sqrt{1+t^2}}\langle 1,t,0\rangle.
$$

Derivando,

$$
T'(t)=
\frac{1}{(1+t^2)^{3/2}}\langle -t,1,0\rangle.
$$

Luego

$$
\|T'(t)\|=\frac{1}{1+t^2},
$$

y

$$
N(t)=\frac{\langle -t,1,0\rangle}{\sqrt{1+t^2}}.
$$

## Errores comunes

- Confundir el normal principal con el vector normal de una superficie.
- Pensar que $N$ se obtiene derivando $r$ una segunda vez y normalizando directamente.
- Olvidar que $N$ requiere regularidad y que $T'(t)\ne 0$.
- No distinguir entre direccion de curvatura y magnitud de curvatura.

## Ejercicios propuestos

1. Hallar $T$ y $N$ para varias curvas planas.
2. Verificar que $T\cdot N=0$ en ejemplos concretos.
3. Determinar en que puntos de una curva dada el normal principal no esta definido.
4. Calcular el normal principal de una helice.
5. Comparar el normal principal con el radio en una circunferencia.

## Cierre

El vector normal principal cuantifica el primer cambio puramente direccional del movimiento sobre una curva. Junto con el tangente unitario, organiza la geometria local de la trayectoria y prepara la descomposicion de la aceleracion y el estudio de la curvatura.
