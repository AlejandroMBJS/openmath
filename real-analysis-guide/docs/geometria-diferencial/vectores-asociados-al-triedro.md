---
title: Vectores Asociados al Triedro
description: Tangente, normal principal, binormal y vector de Darboux en la geometria local de curvas espaciales.
---

# Vectores Asociados al Triedro

## El marco movil basico

En una curva espacial regular con curvatura positiva, el triedro de Frenet proporciona tres vectores unitarios fundamentales:

$$
T, \qquad N, \qquad B.
$$

No son solo una base ortonormal: cada uno tiene significado geometrico preciso.

## Vector tangente

$$
T=\alpha'(s)
$$

indica la direccion instantanea de avance de la curva. Es el primer objeto diferencial y define la recta tangente.

## Vector normal principal

$$
N=\frac{T'}{\|T'\|}
$$

apunta hacia la direccion en la que el tangente esta girando. Es la direccion del centro de curvatura y del plano osculador junto con $T$.

## Vector binormal

$$
B=T\times N
$$

completa el triedro como vector ortogonal al plano osculador. Registra la informacion espacial que ya no se ve en un estudio puramente plano.

## Dependencia de la curvatura

El vector $N$ solo esta bien definido cuando $\kappa>0$. En puntos de curvatura nula, el marco de Frenet clasico puede degenerar.

## Vector de Darboux

El triedro rota a lo largo de la curva. Esa rotacion puede codificarse en el **vector de Darboux**

$$
\Omega=\tau T+\kappa B,
$$

que satisface, en forma simbolica,

$$
T'=\Omega\times T,
\qquad
N'=\Omega\times N,
\qquad
B'=\Omega\times B.
$$

## Interpretacion del vector de Darboux

El vector de Darboux resume la velocidad angular del marco de Frenet. Su componente en direccion $B$ controla el giro del tangente, y su componente en direccion $T$ controla la torsion del marco alrededor de la tangente.

## Planos determinados por los vectores

- $T$ y $N$ determinan el plano osculador;
- $N$ y $B$ determinan el plano normal;
- $T$ y $B$ determinan el plano rectificador.

Esto muestra que los vectores asociados al triedro no solo generan direcciones, sino toda la geometria lineal local de la curva.

## Ejemplo: curva plana

Si la curva es plana, $B$ es constante. Entonces el vector de Darboux reduce a

$$
\Omega=\kappa B.
$$

Esto expresa que el marco gira alrededor de una direccion fija perpendicular al plano de la curva.

## Ejemplo: helice

En una helice circular, tanto $\kappa$ como $\tau$ son constantes. El vector de Darboux tiene modulo constante y describe una rotacion uniforme del marco a lo largo de la curva.

## Cierre

Los vectores asociados al triedro convierten la geometria local de una curva en un sistema movil estructurado. Tangente, normal, binormal y vector de Darboux capturan direccion, curvatura, torsion y velocidad angular del marco de Frenet.
