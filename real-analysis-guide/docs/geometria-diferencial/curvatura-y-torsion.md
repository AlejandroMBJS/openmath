---
title: Curvatura y Torsion
description: Invariantes diferenciales de curvas espaciales, formulas practicas y significado geometrico del giro y la salida del plano osculador.
---

# Curvatura y Torsion

## Dos invariantes, dos niveles de informacion

En el espacio, la curvatura por si sola no determina la geometria local de una curva. Hace falta un segundo invariante que mida cuanto se aparta la curva del plano osculador. Ese segundo invariante es la torsion.

## Curvatura

Para una curva parametrizada por longitud de arco $\alpha(s)$, la curvatura viene dada por

$$
\kappa(s)=\|T'(s)\|,
$$

donde $T=\alpha'$. Mide el giro del tangente.

## Torsion

Si $\kappa(s)>0$, el triedro de Frenet satisface

$$
B'(s)=-\tau(s)N(s).
$$

La torsion mide la rapidez con que gira el binormal, es decir, la variacion del plano osculador.

## Interpretacion

- $\kappa$: cuanto se dobla la curva;
- $\tau$: cuanto se sale del plano osculador.

Una curva plana puede tener curvatura no nula y torsion identicamente nula. Una helice tiene ambas no nulas.

## Formula para parametrizacion arbitraria

Si $\gamma(t)$ es regular y $\gamma'\times\gamma''\neq 0$, entonces

$$
\kappa(t)=\frac{\|\gamma'(t)\times\gamma''(t)\|}{\|\gamma'(t)\|^3},
$$

$$
\tau(t)=\frac{\det(\gamma'(t),\gamma''(t),\gamma'''(t))}{\|\gamma'(t)\times\gamma''(t)\|^2}.
$$

## Por que estas formulas son naturales

El producto cruz $\gamma'\times\gamma''$ detecta desviacion del movimiento respecto a una recta. El determinante triple detecta desviacion respecto al plano osculador. Por eso la curvatura aparece con derivadas hasta orden dos y la torsion hasta orden tres.

## Caso plano

Si la curva esta contenida en un plano fijo, entonces el binormal es constante y se obtiene

$$
\tau\equiv 0.
$$

La recíproca vale localmente para curvas regulares con curvatura positiva.

## Caso de la helice

Para

$$
\gamma(t)=(a\cos t,a\sin t,bt)
$$

se obtiene

$$
\kappa=\frac{a}{a^2+b^2},
\qquad
\tau=\frac{b}{a^2+b^2}.
$$

Esto muestra que la helice realiza un equilibrio rigido entre doblado y torsion.

## Invariancia por movimientos rigidos

Tanto $\kappa$ como $\tau$ son invariantes bajo traslaciones y rotaciones del espacio. La torsion cambia de signo bajo reflexiones, porque depende de la orientacion del triedro.

## Teorema fundamental de las curvas espaciales

El dato de $\kappa(s)>0$ y $\tau(s)$ determina la curva localmente, salvo movimiento rigido directo. Esta afirmacion muestra que curvatura y torsion son, juntas, un sistema completo de invariantes locales para curvas regulares espaciales.

## Descomposicion de la aceleracion

Si la curva no esta parametrizada por longitud de arco, la aceleracion admite la descomposicion

$$
\gamma''=v'T+v^2\kappa N,
$$

donde $v=\|\gamma'\|$. Aqui la torsion no aparece todavia porque la aceleracion vive en el plano osculador; la torsion surge al derivar una vez mas la geometria local.

## Cierre

La curvatura y la torsion separan dos aspectos de la geometria de una curva espacial: doblado y salida del plano osculador. Su combinacion organiza toda la teoria local de curvas en el espacio y prepara el teorema fundamental de Frenet.
