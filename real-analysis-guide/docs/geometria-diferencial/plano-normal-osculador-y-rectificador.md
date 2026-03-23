---
title: Plano Normal, Osculador y Rectificador
description: Planos canonicos asociados al triedro de Frenet y su significado geometrico local.
---

# Plano Normal, Osculador y Rectificador

## Tres planos canonicos

Dada una curva espacial regular con curvatura positiva, el triedro de Frenet

$$
(T,N,B)
$$

determina tres planos distinguidos en cada punto. Cada uno captura un aspecto diferente de la geometria local.

## Plano osculador

Es el plano generado por $T$ y $N$:

$$
\Pi_{osc}=\operatorname{span}\{T,N\}.
$$

Contiene a la tangente y a la aceleracion geometrica. Es el plano que mejor aproxima a la curva a segundo orden.

### Interpretacion

La curva y su circunferencia osculatriz viven localmente en este plano.

## Plano normal

Es el plano generado por $N$ y $B$:

$$
\Pi_{nor}=\operatorname{span}\{N,B\}.
$$

Es el plano ortogonal a la tangente. En el se encuentran todas las direcciones normales a la curva.

## Plano rectificador

Es el plano generado por $T$ y $B$:

$$
\Pi_{rec}=\operatorname{span}\{T,B\}.
$$

Se llama rectificador porque, para ciertas curvas, la posicion queda contenida en ese plano respecto de un origen adaptado.

## Ecuaciones implicitas

Si la curva pasa por el punto $p=\alpha(s_0)$, entonces:

- plano osculador: $\langle x-p,B(s_0)\rangle=0$;
- plano normal: $\langle x-p,T(s_0)\rangle=0$;
- plano rectificador: $\langle x-p,N(s_0)\rangle=0$.

## Contacto de distintos ordenes

- el plano normal solo usa informacion de primer orden, porque depende de $T$;
- el plano osculador usa informacion de segundo orden, porque depende de $N$;
- el plano rectificador mezcla direccion tangente y binormal, por tanto involucra ya la estructura espacial completa.

## Caso plano

Si la curva es plana, el binormal es constante. Entonces el plano osculador coincide con el plano fijo que contiene toda la curva, mientras que los planos normal y rectificador varian con el punto.

## Caso de la helice

En una helice, ninguno de estos planos es fijo. Su variacion uniforme refleja la coexistencia de curvatura y torsion constantes.

## Relacion con la torsion

La torsion mide justamente la variacion del plano osculador. Si $\tau=0$, el osculador deja de girar y la curva queda contenida en un plano fijo.

## Curvas rectificantes

Una curva se llama rectificante si, respecto de algun origen, el vector posicion pertenece siempre al plano rectificador. Esto equivale a imponer una relacion especial entre curvatura y torsion.

## Cierre

Los planos osculador, normal y rectificador forman la geometria lineal local de una curva espacial. Organizan el significado de tangente, normal y binormal y muestran como el triedro de Frenet controla no solo vectores, sino tambien subespacios canonicamente asociados a la curva.
