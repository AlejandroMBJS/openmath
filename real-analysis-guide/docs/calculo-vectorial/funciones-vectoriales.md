---
title: Funciones vectoriales
description: Definicion de funcion vectorial, interpretacion como curva parametrizada, graficacion y construccion de parametrizaciones en R2 y R3.
---

# Funciones vectoriales

## Motivacion e intuicion

En calculo de una variable se estudian funciones

$$
f:I\to \mathbb{R}.
$$

En calculo vectorial interesa con frecuencia describir no un numero, sino un punto que se mueve en el plano o en el espacio. Eso lleva a funciones del tipo

$$
r:I\to \mathbb{R}^n.
$$

Estas funciones permiten modelar:

- trayectorias de particulas;
- curvas planas y espaciales;
- movimientos con velocidad y aceleracion;
- parametrizaciones de objetos geometricos.

## Definicion formal

Una **funcion vectorial** es una funcion

$$
r:I\to \mathbb{R}^n,
$$

donde $I\subseteq \mathbb{R}$ es un intervalo.

Cuando

$$
n=2,
$$

se escribe normalmente

$$
r(t)=\langle x(t),y(t)\rangle.
$$

Cuando

$$
n=3,
$$

se escribe

$$
r(t)=\langle x(t),y(t),z(t)\rangle.
$$

Las funciones escalares

$$
x(t),\ y(t),\ z(t)
$$

se llaman **funciones componente**.

## Interpretacion geometrica

Para cada valor del parametro $t$, la funcion vectorial entrega un punto del espacio.

El conjunto de puntos recorridos por

$$
r(t)
$$

se llama la **trayectoria** o **traza** de la funcion.

### Observacion importante

No hay que confundir:

- la funcion vectorial, que incluye la dependencia respecto del parametro y la orientacion del recorrido;
- la curva geometrica, que es solo el conjunto de puntos visitados.

Dos parametrizaciones distintas pueden describir la misma curva.

## Escritura por componentes

### Proposicion 1

Toda funcion vectorial en $\mathbb{R}^n$ puede escribirse de manera unica como

$$
r(t)=\langle f_1(t),\dots,f_n(t)\rangle.
$$

#### Demostracion

Cada punto de $\mathbb{R}^n$ tiene coordenadas unicas. Aplicando esto a cada valor del parametro $t$, se obtienen funciones escalares bien definidas

$$
f_1,\dots,f_n.
$$

La unicidad viene de la unicidad de las coordenadas.

### Consecuencia

El estudio de muchas propiedades de funciones vectoriales puede reducirse al estudio coordinado de sus componentes.

## Ejemplos basicos

### Ejemplo 1: una recta

$$
r(t)=\langle 1+t,\ 2-3t,\ 4+t\rangle
$$

describe una recta en $\mathbb{R}^3$.

### Ejemplo 2: una circunferencia

$$
r(t)=\langle \cos t,\ \sin t\rangle,
\qquad
0\le t\le 2\pi,
$$

describe la circunferencia unitaria recorrida en sentido antihorario.

### Ejemplo 3: una helice

$$
r(t)=\langle \cos t,\ \sin t,\ t\rangle
$$

describe una helice circular alrededor del eje $z$.

## Como graficar una funcion vectorial {#graficar-funciones-vectoriales}

Graficar una funcion vectorial significa entender la curva que recorren sus valores.

### Metodo general

1. Identificar el dominio del parametro.
2. Escribir las componentes.
3. Eliminar el parametro si es posible para reconocer la curva.
4. Determinar la orientacion del recorrido al crecer $t$.
5. Marcar puntos notables.

## Eliminar el parametro

Si

$$
r(t)=\langle x(t),y(t),z(t)\rangle,
$$

conviene buscar relaciones entre

$$
x,\ y,\ z
$$

que no dependan de $t$.

### Ejemplo 4: parabola parametrizada

$$
r(t)=\langle t,\ t^2\rangle.
$$

Aqui

$$
x=t,
\qquad
y=t^2,
$$

de modo que

$$
y=x^2.
$$

La parametrizacion recorre toda la parabola al variar $t$ en $\mathbb{R}$.

### Ejemplo 5: elipse

$$
r(t)=\langle 2\cos t,\ 3\sin t\rangle.
$$

Entonces

$$
\frac{x^2}{4}+\frac{y^2}{9}=1.
$$

## Importancia de la orientacion

Dos funciones vectoriales pueden tener la misma traza pero distinta orientacion.

### Ejemplo 6

Las funciones

$$
r_1(t)=\langle \cos t,\sin t\rangle,
$$

$$
r_2(t)=\langle \cos t,-\sin t\rangle
$$

generan la misma circunferencia unitaria, pero la recorren en sentidos opuestos.

## Rapidez de recorrido

El parametro no solo fija la orientacion, sino tambien la velocidad con que se recorre la curva.

### Ejemplo 7

Las funciones

$$
r_1(t)=\langle \cos t,\sin t\rangle,
$$

$$
r_2(t)=\langle \cos 2t,\sin 2t\rangle
$$

tienen la misma traza, pero la segunda recorre la circunferencia el doble de rapido.

## Transformar cualquier funcion a una vectorial {#transformar-cualquier-funcion-a-una-vectorial}

Una gran ventaja de las funciones vectoriales es que permiten reescribir curvas dadas de manera implicita o explicita en forma parametrizada.

## Desde una funcion cartesiana $y=f(x)$

Si una curva esta dada por

$$
y=f(x),
$$

puede parametrizarse tomando

$$
x=t,
\qquad
y=f(t).
$$

Entonces

$$
r(t)=\langle t,f(t)\rangle.
$$

### Ejemplo 8

La curva

$$
y=x^3-x
$$

se parametriza como

$$
r(t)=\langle t,\ t^3-t\rangle.
$$

## Desde una circunferencia

La circunferencia de radio $a$ y centro en el origen se parametriza como

$$
r(t)=\langle a\cos t,\ a\sin t\rangle.
$$

## Desde una elipse

La elipse

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1
$$

se parametriza mediante

$$
r(t)=\langle a\cos t,\ b\sin t\rangle.
$$

## Desde una recta

La recta que pasa por

$$
P_0
$$

con direccion

$$
v
$$

se parametriza como

$$
r(t)=P_0+t v.
$$

## Desde la interseccion de superficies

Si una curva aparece como interseccion de superficies, a veces puede parametrizarse usando una variable libre.

### Ejemplo 9

La interseccion de

$$
x^2+y^2=1
$$

y

$$
z=x
$$

puede parametrizarse como

$$
r(t)=\langle \cos t,\ \sin t,\ \cos t\rangle.
$$

## Parametrizaciones no unicas

Una misma curva admite infinitas parametrizaciones.

### Ejemplo 10

La recta

$$
y=2x+1
$$

puede escribirse como

$$
r(t)=\langle t,\ 2t+1\rangle
$$

o tambien como

$$
s(u)=\langle 3u-1,\ 6u-1\rangle.
$$

Ambas tienen la misma traza.

## Reparametrizacion

Si

$$
r(t)
$$

es una parametrizacion y

$$
t=\phi(u)
$$

con $\phi$ suave y monotona, entonces

$$
\tilde r(u)=r(\phi(u))
$$

es una reparametrizacion de la misma curva.

### Comentario

Reparametrizar cambia la velocidad de recorrido y puede invertir la orientacion si $\phi$ es decreciente.

## Ejemplos trabajados

### Ejemplo 11: curva en el espacio

Sea

$$
r(t)=\langle t,\ t^2,\ t^3\rangle.
$$

Entonces

$$
x=t,
\qquad
y=t^2,
\qquad
z=t^3.
$$

Eliminando el parametro,

$$
y=x^2,
\qquad
z=x^3.
$$

La curva queda contenida simultaneamente en las superficies

$$
y=x^2
\quad \text{y} \quad
z=x^3.
$$

### Ejemplo 12: arco de circunferencia

La semicircunferencia superior de radio $2$ puede parametrizarse como

$$
r(t)=\langle 2\cos t,\ 2\sin t\rangle,
\qquad
0\le t\le \pi.
$$

El intervalo del parametro es parte esencial de la descripcion.

## Errores comunes

- Confundir la trayectoria con la grafica de la funcion vectorial como objeto en $\mathbb{R}^{n+1}$.
- Eliminar el parametro sin analizar orientacion ni dominio.
- Pensar que una curva tiene una unica parametrizacion natural.
- Usar un intervalo del parametro que describe mas puntos de los deseados o repite la curva varias veces.

## Ejercicios propuestos

1. Parametrizar rectas, circunferencias y elipses.
2. Eliminar el parametro en curvas simples y reconocer la traza.
3. Comparar dos parametrizaciones distintas de una misma curva.
4. Construir una parametrizacion para la interseccion de dos superficies sencillas.
5. Estudiar como cambia la orientacion bajo una reparametrizacion decreciente.

## Cierre

Las funciones vectoriales son el lenguaje natural del movimiento y de las curvas en el espacio. La definicion por componentes, la graficacion y la parametrizacion de objetos geometricos preparan el terreno para limites, derivadas vectoriales, tangentes, curvatura y mecanica.
