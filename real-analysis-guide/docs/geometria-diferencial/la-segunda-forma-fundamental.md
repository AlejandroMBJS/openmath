---
title: La Segunda Forma Fundamental
description: Curvatura extrinseca de superficies, forma bilineal normal y relacion con la aplicacion de Gauss.
---

# La Segunda Forma Fundamental

## Del primer al segundo orden

La primera forma fundamental mide geometria intrinseca de primer orden: longitudes, angulos y areas. Para capturar como una superficie se dobla en el espacio ambiente hace falta informacion de segundo orden. Esa informacion se concentra en la segunda forma fundamental.

## Campo normal unitario

Sea $X(u,v)$ una parametrizacion regular orientada de una superficie. Definimos el normal unitario por

$$
N=\frac{X_u\times X_v}{\|X_u\times X_v\|}.
$$

## Definicion

La segunda forma fundamental es la forma bilineal simetrica

$$
II=L\,du^2+2M\,du\,dv+N_c\,dv^2,
$$

donde, para evitar confundir con el normal unitario, escribimos

$$
L=\langle X_{uu},N\rangle,
\qquad
M=\langle X_{uv},N\rangle,
\qquad
N_c=\langle X_{vv},N\rangle.
$$

## Significado geometrico

Estos coeficientes miden la componente normal de las segundas derivadas de la parametrizacion. Es decir: registran cuanto se aparta la superficie de su plano tangente a segundo orden.

## Simetria

Como $X_{uv}=X_{vu}$ para parametrizaciones suaves, la forma es simetrica. Esto ya sugiere que podra diagonalizarse respecto de direcciones especiales.

## Curvatura normal

Dada una direccion tangente $w=aX_u+bX_v$, la curvatura normal asociada es

$$
\kappa_n(w)=\frac{II(w,w)}{I(w,w)}.
$$

Esta cantidad mide cuanto se curva la curva normal obtenida al intersectar la superficie con el plano generado por $w$ y el normal unitario.

## Operador de forma

La segunda forma fundamental puede expresarse mediante el operador lineal $S$ definido por

$$
II(w,z)=I(Sw,z).
$$

Este operador contiene la geometria extrinseca de segundo orden y sera central para curvaturas principal y gaussiana.

## Caso de una grafica

Para una grafica $X(u,v)=(u,v,f(u,v))$, los coeficientes de la segunda forma fundamental se obtienen a partir de las segundas derivadas de $f$ divididas por el factor de normalizacion del normal unitario. Esto muestra que la segunda forma fundamental es, esencialmente, la Hessiana proyectada sobre la normal.

## Caso del plano

En un plano, el normal unitario es constante y todas las segundas derivadas normales se anulan. Por tanto,

$$
II\equiv 0.
$$

Esto expresa que el plano no tiene curvatura extrinseca.

## Caso de la esfera

En la esfera unitaria orientada hacia afuera, el operador de forma es el negativo de la identidad. Por eso todas las direcciones son principales y la curvatura normal es constante.

## Dependencia del ambiente

A diferencia de la primera forma fundamental, la segunda depende de la inmersion de la superficie en $\mathbb{R}^3$. Dos superficies isometricas pueden tener la misma primera forma y distinta segunda forma.

## Cierre

La segunda forma fundamental describe el doblado extrinseco de una superficie. Su combinacion con la primera forma permite definir curvaturas normal, principal y gaussiana, y abre la puerta a la aplicacion de Gauss y al operador de Weingarten.
