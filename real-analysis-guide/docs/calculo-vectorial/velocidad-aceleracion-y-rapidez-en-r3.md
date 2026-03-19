---
title: Velocidad, aceleracion y rapidez en R3
description: Interpretacion cinematica de las derivadas de una curva espacial y reconstruccion de la posicion a partir de la aceleracion.
---

# Velocidad, aceleracion y rapidez en R3

## Motivacion e intuicion

Una curva parametrizada por el tiempo

$$
r(t)
$$

no es solo un objeto geometrico: es una ley de movimiento. Sus primeras dos derivadas tienen interpretacion fisica inmediata:

- la primera derivada es la velocidad;
- la segunda es la aceleracion.

Pero hay una tercera cantidad importante: la rapidez, que es el modulo de la velocidad y mide que tan rapido se mueve el punto sin importar la direccion.

## Funcion posicion

En cinematica una particula en el espacio se modela mediante

$$
r(t)=\langle x(t),y(t),z(t)\rangle.
$$

La funcion

$$
r
$$

se llama **funcion posicion**.

## Velocidad

La **velocidad** es la derivada de la posicion:

$$
v(t)=r'(t).
$$

Si

$$
r(t)=\langle x(t),y(t),z(t)\rangle,
$$

entonces

$$
v(t)=\langle x'(t),y'(t),z'(t)\rangle.
$$

### Interpretacion

El vector velocidad apunta en la direccion instantanea del movimiento y su norma mide la rapidez.

## Aceleracion

La **aceleracion** es la derivada de la velocidad:

$$
a(t)=v'(t)=r''(t).
$$

En coordenadas,

$$
a(t)=\langle x''(t),y''(t),z''(t)\rangle.
$$

### Interpretacion

La aceleracion mide el cambio de la velocidad, no solo el cambio de la rapidez. Puede existir aceleracion aun con rapidez constante si cambia la direccion del movimiento.

## Rapidez

La **rapidez** es la magnitud escalar

$$
\|v(t)\|=\|r'(t)\|.
$$

### Comentario

Velocidad y rapidez no son lo mismo:

- la velocidad es vectorial;
- la rapidez es escalar y siempre no negativa.

## Ejemplos basicos

### Ejemplo 1: movimiento rectilineo uniforme

Si

$$
r(t)=P_0+t v_0,
$$

entonces

$$
v(t)=v_0,
\qquad
a(t)=0.
$$

La velocidad es constante y no hay aceleracion.

### Ejemplo 2: caida parabolica ideal

Sea

$$
r(t)=\left\langle v_0 t,\ 0,\ h_0+u_0 t-\frac{g}{2}t^2\right\rangle.
$$

Entonces

$$
v(t)=\langle v_0,0,u_0-g t\rangle,
$$

$$
a(t)=\langle 0,0,-g\rangle.
$$

La aceleracion es constante y apunta verticalmente hacia abajo.

### Ejemplo 3: movimiento circular uniforme

Sea

$$
r(t)=\langle a\cos(\omega t),a\sin(\omega t),0\rangle.
$$

Entonces

$$
v(t)=\langle -a\omega\sin(\omega t),a\omega\cos(\omega t),0\rangle,
$$

y

$$
\|v(t)\|=a\omega,
$$

que es constante.

Sin embargo,

$$
a(t)=\langle -a\omega^2\cos(\omega t),-a\omega^2\sin(\omega t),0\rangle
=
-\omega^2 r(t),
$$

de modo que hay aceleracion radial hacia el centro.

## Relacion entre rapidez y aceleracion

### Proposicion 1

Si $v(t)\ne 0$, entonces

$$
\frac{d}{dt}\|v(t)\|
=
\frac{v(t)\cdot a(t)}{\|v(t)\|}.
$$

#### Demostracion

Es la formula de derivada de la norma aplicada a $v$:

$$
\frac{d}{dt}\|v\|=\frac{v\cdot v'}{\|v\|}=\frac{v\cdot a}{\|v\|}.
$$

### Consecuencia

La rapidez es constante si y solo si

$$
v(t)\cdot a(t)=0
$$

para todo $t$ donde $v(t)\ne 0$.

## Funcion posicion a partir de la aceleracion {#funcion-posicion-a-partir-de-la-aceleracion}

Si se conoce la aceleracion

$$
a(t)
$$

y se conocen datos iniciales

$$
r(t_0)=r_0,
\qquad
v(t_0)=v_0,
$$

entonces la posicion se reconstruye integrando dos veces.

## Paso 1: recuperar la velocidad

Como

$$
v'(t)=a(t),
$$

se tiene

$$
v(t)=v_0+\int_{t_0}^t a(u)\,du.
$$

## Paso 2: recuperar la posicion

Luego

$$
r(t)=r_0+\int_{t_0}^t v(u)\,du.
$$

### Formula encadenada

Sustituyendo la expresion de $v$,

$$
r(t)=r_0+\int_{t_0}^t\left(v_0+\int_{t_0}^u a(s)\,ds\right)du.
$$

## Ejemplo 4: reconstruir posicion

Sea

$$
a(t)=\langle 2,\cos t,0\rangle,
\qquad
r(0)=\langle 1,0,2\rangle,
\qquad
v(0)=\langle 0,1,-1\rangle.
$$

Primero,

$$
v(t)=v(0)+\int_0^t a(u)\,du
=
\langle 0,1,-1\rangle
+
\left\langle
\int_0^t 2\,du,
\int_0^t \cos u\,du,
\int_0^t 0\,du
\right\rangle.
$$

Por tanto

$$
v(t)=\langle 2t,1+\sin t,-1\rangle.
$$

Ahora integramos:

$$
r(t)=r(0)+\int_0^t v(u)\,du.
$$

Luego

$$
r(t)=
\langle 1,0,2\rangle
+
\left\langle
\int_0^t 2u\,du,
\int_0^t (1+\sin u)\,du,
\int_0^t (-1)\,du
\right\rangle.
$$

Se obtiene

$$
r(t)=\langle 1+t^2,\ t+1-\cos t,\ 2-t\rangle.
$$

## Desplazamiento y distancia recorrida

En el intervalo $[a,b]$:

- el desplazamiento es

$$
r(b)-r(a)=\int_a^b v(t)\,dt;
$$

- la distancia recorrida es

$$
\int_a^b \|v(t)\|\,dt.
$$

### Ejemplo 5

En un movimiento circular completo, el desplazamiento puede ser cero pero la distancia recorrida positiva.

## Movimiento con aceleracion constante

Si

$$
a(t)=a_0
$$

es constante, entonces

$$
v(t)=v_0+a_0(t-t_0),
$$

y

$$
r(t)=r_0+v_0(t-t_0)+\frac12 a_0 (t-t_0)^2.
$$

Esta formula es la version vectorial de las ecuaciones cinematicas elementales.

## Movimiento rectilineo

Si la velocidad es siempre paralela a un vector fijo $u$, la trayectoria es rectilinea. Si la direccion cambia, aunque la rapidez permanezca constante, la trayectoria puede curvarse.

## Ejemplos trabajados

### Ejemplo 6: rapidez constante con aceleracion no nula

Para el movimiento circular uniforme del ejemplo 3:

$$
\|v(t)\|=a\omega
$$

es constante, pero

$$
a(t)\ne 0.
$$

Esto prueba que aceleracion nula y rapidez constante no son equivalentes.

### Ejemplo 7: aceleracion paralela a la velocidad

Si

$$
r(t)=\langle t^2,0,0\rangle,
$$

entonces

$$
v(t)=\langle 2t,0,0\rangle,
\qquad
a(t)=\langle 2,0,0\rangle.
$$

Tanto velocidad como aceleracion apuntan sobre la misma recta. El movimiento cambia de rapidez pero no de direccion.

## Errores comunes

- Confundir velocidad con rapidez.
- Pensar que aceleracion nula es equivalente a rapidez constante.
- Integrar aceleracion sin imponer correctamente los datos iniciales.
- Olvidar que la aceleracion puede cambiar direccion aun si la rapidez es constante.

## Ejercicios propuestos

1. Hallar velocidad, aceleracion y rapidez de varias trayectorias dadas.
2. Reconstruir una posicion a partir de una aceleracion y datos iniciales.
3. Estudiar un movimiento con aceleracion constante en el espacio.
4. Dar un ejemplo con rapidez constante y aceleracion no nula.
5. Dar un ejemplo con aceleracion paralela a la velocidad.

## Cierre

Velocidad, aceleracion y rapidez traducen la derivada vectorial al lenguaje del movimiento. Son el puente entre calculo de curvas y mecanica, y preparan la descomposicion mas fina de la aceleracion en componentes tangenciales y normales.
