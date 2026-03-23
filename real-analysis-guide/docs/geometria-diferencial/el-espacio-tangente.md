---
title: El Espacio Tangente
description: Definiciones equivalentes del espacio tangente, bases inducidas por parametrizaciones y derivaciones sobre funciones suaves.
---

# El Espacio Tangente

## Motivacion

En una superficie, la direccion tangente en un punto ya no es una recta sino un plano. Ese plano se formaliza como el espacio tangente.

## Definicion por curvas

Sea $S$ una superficie diferenciable y $p\in S$. Dos curvas suaves

$$
\alpha,\beta:(-\varepsilon,\varepsilon)\to S
$$

con $\alpha(0)=\beta(0)=p$ se consideran equivalentes si, en alguna carta local $(U,\varphi)$ con $p\in U$,

$$
(\varphi\circ\alpha)'(0)=(\varphi\circ\beta)'(0).
$$

La clase de equivalencia representa un vector tangente en $p$.

## Definicion por derivaciones

Equivalentemente, un vector tangente puede definirse como una derivacion

$$
D:C^\infty_p(S)\to\mathbb{R}
$$

lineal y satisfaciendo la regla de Leibniz

$$
D(fg)=f(p)D(g)+g(p)D(f).
$$

Estas dos definiciones son equivalentes.

## Espacio tangente

El conjunto de todos los vectores tangentes en $p$ forma un espacio vectorial real de dimension dos, denotado por

$$
T_pS.
$$

## Base inducida por una parametrizacion

Si $X:V\to S$ es una parametrizacion local y $p=X(u_0,v_0)$, entonces

$$
X_u(u_0,v_0), \qquad X_v(u_0,v_0)
$$

forman una base de $T_pS$ cuando la superficie esta inmersa en $\mathbb{R}^3$.

## Interpretacion en R3

Si $S=F^{-1}(c)$ con $\nabla F(p)\neq 0$, entonces

$$
T_pS=\{v\in\mathbb{R}^3: \langle \nabla F(p),v\rangle=0\}.
$$

En la esfera unitaria esto significa que el plano tangente es perpendicular al radio.

## Diferencial de una aplicacion

Si $F:S\to M$ es suave, su diferencial en $p$ es la aplicacion lineal

$$
dF_p:T_pS\to T_{F(p)}M.
$$

Este operador es el objeto lineal de primer orden asociado a una aplicacion suave.

## Cierre

El espacio tangente reemplaza la intuicion elemental de tangente por una nocion lineal intrinseca de dimension dos. Sobre el se construyen la metrica, la conexidad, la curvatura y toda la mecanica diferencial de las superficies.
