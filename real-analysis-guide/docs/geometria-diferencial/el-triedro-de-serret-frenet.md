---
title: El Triedro de Serret-Frenet
description: Marco movil T-N-B, formulas de Frenet, curvatura, torsion y reconstruccion local de curvas espaciales.
---

# El Triedro de Serret-Frenet

## Del tangente al marco movil

Para curvas espaciales, la tangente no basta para describir la geometria local. Hace falta un sistema ortonormal movil adaptado a la curva. Ese sistema es el triedro de Serret-Frenet:

$$
(T,N,B).
$$

## Hipotesis

Sea $\alpha:I\to\mathbb{R}^3$ una curva de clase $C^3$ parametrizada por longitud de arco, con curvatura estrictamente positiva:

$$
\kappa(s)=\|\alpha''(s)\|>0.
$$

Entonces definimos

$$
T(s)=\alpha'(s),
$$

$$
N(s)=\frac{T'(s)}{\|T'(s)\|},
$$

$$
B(s)=T(s)\times N(s).
$$

## Formulas de Frenet

Las derivadas del triedro satisfacen

$$
T'=\kappa N,
$$

$$
N'=-\kappa T+\tau B,
$$

$$
B'=-\tau N.
$$

La funcion $\kappa$ es la curvatura y $\tau$ la torsion.

## Significado de la torsion

La torsion mide cuanto se aparta la curva del plano osculador. Si $\tau\equiv 0$, la curva es plana.

### Idea de prueba

De $B'=-\tau N$ se sigue que, si $\tau=0$, el vector binormal es constante. Entonces la curva queda contenida en un plano perpendicular a ese binormal fijo.

## Planos canonicos

El triedro determina tres planos:

- plano osculador: generado por $T$ y $N$;
- plano normal: generado por $N$ y $B$;
- plano rectificador: generado por $T$ y $B$.

## Ejemplo: helice circular

Para

$$
\gamma(t)=(a\cos t,a\sin t,bt),
$$

tras reparametrizar por longitud de arco se obtiene

$$
\kappa=\frac{a}{a^2+b^2},
\qquad
\tau=\frac{b}{a^2+b^2}.
$$

Ambas constantes son no nulas. La helice es el modelo canonico de curva con curvatura y torsion constantes.

## Formula de la torsion

Para una parametrizacion arbitraria regular con $\gamma'\times\gamma''\neq 0$,

$$
\tau(t)=\frac{\det(\gamma',\gamma'',\gamma''')}{\|\gamma'\times\gamma''\|^2}.
$$

## Teorema fundamental de curvas espaciales

Dadas funciones suaves

$$
\kappa(s)>0, \qquad \tau(s),
$$

en un intervalo, existe una curva parametrizada por longitud de arco cuya curvatura y torsion son precisamente esas, y es unica salvo movimiento rigido directo del espacio.

## Cierre

El triedro de Frenet organiza la geometria local de curvas espaciales en torno a dos invariantes: curvatura y torsion. Con ellos, la curva deja de ser solo una trayectoria y se convierte en un objeto determinado por un sistema diferencial rigido.
