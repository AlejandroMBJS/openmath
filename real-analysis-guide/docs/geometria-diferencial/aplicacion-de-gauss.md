---
title: Aplicacion de Gauss
description: Mapa normal de una superficie orientada, diferencial del normal y origen del operador de forma.
---

# Aplicacion de Gauss

## Normal como funcion geometrica

En una superficie orientada cada punto lleva asociado un vector normal unitario. Reunir todos esos normales produce una aplicacion natural desde la superficie hacia la esfera unitaria. Esa aplicacion es la aplicacion de Gauss.

## Definicion

Sea $S\subset\mathbb{R}^3$ una superficie orientada con normal unitario $N(p)$. Definimos

$$
\mathcal{N}:S\to S^2,
\qquad
\mathcal{N}(p)=N(p).
$$

Esta es la aplicacion de Gauss.

## Significado

La aplicacion de Gauss registra como gira el campo normal al moverse sobre la superficie. Por eso su diferencial contiene exactamente la informacion de curvatura extrinseca.

## Diferencial del mapa de Gauss

El diferencial en un punto

$$
d\mathcal{N}_p:T_pS\to T_{N(p)}S^2
$$

puede identificarse, via traslacion natural, con un operador lineal sobre $T_pS$. Su negativo es el operador de forma:

$$
S_p=-d\mathcal{N}_p.
$$

## Relacion con la segunda forma fundamental

La segunda forma fundamental puede escribirse como

$$
II_p(w,z)=I_p(S_pw,z).
$$

Por tanto, la aplicacion de Gauss y la segunda forma fundamental son dos caras del mismo objeto.

## Curvatura gaussiana como jacobiano

La curvatura gaussiana puede interpretarse como el determinante del diferencial del mapa de Gauss:

$$
K(p)=\det S_p.
$$

Geometricamente, esto mide el factor de cambio de area orientada entre la superficie y la esfera de normales.

## Curvatura media

La traza del operador de forma produce la curvatura media:

$$
H=\frac{1}{2}\operatorname{tr}(S).
$$

Ambas cantidades se obtienen a partir de los autovalores de $S$, es decir, las curvaturas principales.

## Ejemplos

### Plano

En el plano el normal es constante, luego

$$
d\mathcal{N}=0.
$$

Por tanto la curvatura gaussiana y la segunda forma fundamental son nulas.

### Esfera unitaria

En la esfera orientada hacia afuera, el normal coincide con la posicion. La aplicacion de Gauss es esencialmente la identidad, luego su diferencial es la identidad y la curvatura gaussiana vale $1$.

## Interpretacion local

Si el normal cambia mucho al movernos un poco sobre la superficie, la superficie esta muy curvada. Si casi no cambia, la superficie se parece localmente a un plano.

## Cierre

La aplicacion de Gauss convierte la geometria extrinseca de una superficie en una aplicacion hacia la esfera. Su diferencial contiene el operador de forma y, con el, toda la informacion de curvatura principal, media y gaussiana.
