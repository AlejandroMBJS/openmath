---
title: Metodo de iteracion de punto fijo
description: Reformulacion de ecuaciones como puntos fijos, criterio contractivo y convergencia lineal local y global.
---

# Metodo de iteracion de punto fijo

## Idea central

Resolver

$$
f(x)=0
$$

puede reformularse como encontrar un punto fijo de una funcion

$$
g,
$$

es decir, un numero

$$
\alpha
$$

tal que

$$
g(\alpha)=\alpha.
$$

En efecto, si escribimos la ecuacion en la forma

$$
x=g(x),
$$

podemos generar la iteracion

$$
x_{n+1}=g(x_n).
$$

## Observacion preliminar

La misma ecuacion puede admitir muchas reformulaciones distintas, y no todas convergen.

Por eso el problema no es solo algebraico: es dinamico.

## Teorema contractivo en un intervalo

### Teorema 1

Sea

$$
g:[a,b]\to [a,b]
$$

una funcion diferenciable tal que existe

$$
0\le k<1
$$

con

$$
\lvert g'(x)\rvert\le k
$$

para todo

$$
x\in [a,b].
$$

Entonces:

1. existe un unico punto fijo

$$
\alpha\in [a,b];
$$

2. para cualquier

$$
x_0\in [a,b],
$$

la iteracion

$$
x_{n+1}=g(x_n)
$$

converge a

$$
\alpha.
$$

### Justificacion

La condicion sobre la derivada implica que

$$
g
$$

es contractiva:

$$
\lvert g(x)-g(y)\rvert\le k\lvert x-y\rvert.
$$

Entonces se aplica el principio del punto fijo de Banach.

## Error y orden lineal

Si

$$
\alpha
$$

es el punto fijo, tenemos

$$
\lvert x_{n+1}-\alpha\rvert
=
\lvert g(x_n)-g(\alpha)\rvert
\le k\lvert x_n-\alpha\rvert.
$$

Por iteracion:

$$
\lvert x_n-\alpha\rvert\le k^n\lvert x_0-\alpha\rvert.
$$

Esto muestra convergencia lineal con razon asintotica controlada por

$$
k.
$$

## Criterio local por derivada

Si

$$
g(\alpha)=\alpha
$$

y

$$
\lvert g'(\alpha)\rvert<1,
$$

entonces la iteracion converge localmente a

$$
\alpha
$$

para puntos iniciales suficientemente cercanos.

Si

$$
\lvert g'(\alpha)\rvert>1,
$$

el punto fijo es repulsivo y la iteracion tipicamente diverge.

## Interpretacion geometrica

La ecuacion

$$
x=g(x)
$$

se visualiza como la interseccion entre la grafica de

$$
y=g(x)
$$

y la diagonal

$$
y=x.
$$

La condicion

$$
\lvert g'(\alpha)\rvert<1
$$

significa que la grafica de

$$
g
$$

corta a la diagonal con inclinacion no demasiado pronunciada.

## <a id="ejemplo-de-iteracion-de-punto-fijo"></a> Ejemplo de iteracion de punto fijo

Consideremos la ecuacion

$$
x=\cos x.
$$

Definimos

$$
g(x)=\cos x.
$$

En el intervalo

$$
[0,1]
$$

se cumple

$$
g([0,1])\subseteq [\cos 1,1]\subseteq [0,1].
$$

Ademas,

$$
g'(x)=-\sin x,
$$

y por tanto

$$
\lvert g'(x)\rvert\le \sin 1<1
$$

en

$$
[0,1].
$$

Luego existe un unico punto fijo en ese intervalo y la iteracion converge para cualquier dato inicial en

$$
[0,1].
$$

### Iteraciones desde

$$
x_0=0.5
$$

$$
x_1=\cos(0.5)\approx 0.87758,
$$

$$
x_2=\cos(0.87758)\approx 0.63901,
$$

$$
x_3=\cos(0.63901)\approx 0.80269,
$$

$$
x_4=\cos(0.80269)\approx 0.69478.
$$

La sucesion oscila, pero converge hacia

$$
\alpha\approx 0.739085\ldots
$$

## Ejemplo de mala reformulacion

La ecuacion

$$
x^2-2=0
$$

puede escribirse como

$$
x=x^2-2+x.
$$

Si definimos

$$
g(x)=x^2-2+x,
$$

entonces en la raiz

$$
\alpha=\sqrt 2
$$

tenemos

$$
g'(\alpha)=2\alpha+1>1.
$$

Esa reformulacion no es contractiva cerca de la solucion y no sirve como esquema iterativo estable.

## Error a posteriori

Si la aplicacion es contractiva con constante

$$
k<1,
$$

entonces vale la estimacion

$$
\lvert x_n-\alpha\rvert\le \frac{k}{1-k}\lvert x_n-x_{n-1}\rvert.
$$

Esto es util porque evita depender del valor desconocido de

$$
\alpha.
$$

## Criterios de parada

Los mas habituales son:

- diferencia entre iterados:

$$
\lvert x_{n+1}-x_n\rvert<\tau;
$$

- residuo:

$$
\lvert f(x_n)\rvert<\eta;
$$

- estimacion contractiva del error.

## Velocidad de convergencia

Si

$$
g'(\alpha)\ne 0,
$$

la convergencia suele ser lineal y la razon asintotica satisface

$$
\lim_{n\to\infty}
\frac{\lvert x_{n+1}-\alpha\rvert}{\lvert x_n-\alpha\rvert}
=
\lvert g'(\alpha)\rvert.
$$

Si

$$
g'(\alpha)=0,
$$

la convergencia puede ser superlineal o incluso cuadratica, pero eso ya requiere estructura adicional.

## Ventajas

- extrema simplicidad;
- flexible para muchas reformulaciones;
- base conceptual de muchos metodos iterativos mas avanzados.

## Limitaciones

- depende criticamente de la eleccion de

$$
g;
$$

- puede divergir incluso cuando la ecuacion tiene solucion;
- suele converger mas lentamente que Newton.

## Comentario dinamico

La iteracion de punto fijo conecta el analisis numerico con la teoria de sistemas dinamicos discretos. Un punto fijo puede ser atractivo, neutro o repulsivo segun el tamano de la derivada local.

## Cierre

El metodo de punto fijo ensena una leccion central del analisis numerico: resolver una ecuacion no consiste solo en encontrar una identidad algebraica equivalente, sino en construir una dinamica iterativa estable hacia la solucion.
