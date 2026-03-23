---
title: Curvatura Normal
description: Curvatura de una superficie en una direccion tangente y relacion con las secciones normales.
---

# Curvatura Normal

## Curvas sobre una superficie

Sea $\alpha(s)$ una curva de longitud de arco contenida en una superficie orientada $S$, con

$$
\alpha(0)=p, \qquad \alpha'(0)=v\in T_pS.
$$

La aceleracion de la curva puede descomponerse en componente tangencial y componente normal respecto de la superficie.

## Definicion

La **curvatura normal** de la superficie en la direccion $v$ se define como la componente normal de la aceleracion:

$$
\kappa_n(v)=\langle \alpha''(0),N(p)\rangle.
$$

Esta cantidad no depende de la curva elegida con esa direccion tangente inicial, sino solo del vector tangente $v$.

## Expresion mediante las formas fundamentales

Si $v=aX_u+bX_v$, entonces

$$
\kappa_n(v)=\frac{II(v,v)}{I(v,v)}.
$$

Esta es la formula conceptual correcta: cociente entre la segunda y la primera forma sobre la misma direccion.

## Seccion normal

Si tomamos el plano generado por $v$ y el normal unitario $N$, la interseccion local de la superficie con ese plano produce una curva plana, llamada **seccion normal**. La curvatura de esa seccion plana en $p$ coincide con la curvatura normal asociada a $v$.

## Interpretacion

La curvatura normal mide cuanto se dobla la superficie hacia el ambiente en una direccion tangente concreta. Es la curvatura visible cuando cortamos la superficie por un plano normal adaptado a esa direccion.

## Relacion con el operador de forma

Si $v$ es unitario, entonces

$$
\kappa_n(v)=I(Sv,v).
$$

Esto muestra que la curvatura normal es la forma cuadratica asociada al operador de forma.

## Direcciones principales

Las direcciones que extreman la curvatura normal son las direcciones principales. Sus valores extremos son las curvaturas principales $\kappa_1$ y $\kappa_2$.

## Casos de signo

- si $\kappa_n>0$, la superficie se dobla hacia el mismo lado que el normal elegido;
- si $\kappa_n<0$, se dobla en sentido opuesto;
- si $\kappa_n=0$, la direccion puede ser asintotica.

## Ejemplos

### Plano

En un plano,

$$
\kappa_n\equiv 0
$$

en toda direccion.

### Esfera unitaria

En la esfera unitaria orientada hacia afuera, toda direccion tiene la misma curvatura normal, constante en valor absoluto.

### Cilindro

En el cilindro, una direccion principal tiene curvatura normal nula y la otra no. Esto muestra que la curvatura depende fuertemente de la direccion escogida.

## Cierre

La curvatura normal es la medida direccional mas inmediata del doblado extrinseco de una superficie. A partir de ella emergen las curvaturas principales, el teorema de Euler y la clasificacion local de puntos de la superficie.
