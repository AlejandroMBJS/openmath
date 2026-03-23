---
title: Grupo Unitario Especial
description: Grupo SU n, preservacion hermitiana, generadores infinitesimales y conexion con espin y simetrias internas.
---

# Grupo Unitario Especial

## Definicion

El grupo unitario especial es

$$
SU(n)=\{U\in M_n(\mathbb{C}):U^*U=I,\ \det U=1\}.
$$

Es el analogo complejo y orientacion-normalizado del grupo ortogonal especial.

## Interpretacion geometrica

Los elementos de $SU(n)$ preservan el producto interno hermitiano estandar:

$$
\langle Ux,Uy\rangle=\langle x,y\rangle.
$$

La condicion adicional $\det U=1$ elimina la fase global asociada al determinante y selecciona el subgrupo conexo fundamental para muchas simetrias cuanticas.

## Algebra de Lie

Diferenciando las restricciones unitarias y de determinante se obtiene

$$
\mathfrak{su}(n)=\{X\in M_n(\mathbb{C}):X^*=-X,\ \operatorname{tr}(X)=0\}.
$$

Es decir, matrices antihermitianas y de traza nula.

## Dimension

Se cumple

$$
\dim SU(n)=n^2-1.
$$

Por eso:

- $SU(2)$ tiene dimension $3$;
- $SU(3)$ tiene dimension $8$.

## Caso $SU(2)$

$SU(2)$ es especialmente importante porque esta ligado al espin y a las rotaciones tridimensionales. Todo elemento puede escribirse como

$$
U=a_0I+i\sum_{k=1}^3 a_k\sigma_k,
\qquad a_0^2+a_1^2+a_2^2+a_3^2=1,
$$

donde $\sigma_k$ son las matrices de Pauli.

Topologicamente, $SU(2)$ es difeomorfo a la esfera $S^3$.

## Conexion con $SO(3)$

Existe un homomorfismo sobreyectivo

$$
SU(2)\to SO(3)
$$

con nucleo $\{\pm I\}$. Por eso $SU(2)$ es un recubrimiento doble de $SO(3)$. Esta relacion explica por que los espinores requieren una vuelta de $4\pi$ para volver exactamente al estado inicial.

## Caso $SU(3)$

En fisica de particulas, $SU(3)$ aparece como grupo de simetria interna del color en cromodinamica cuantica y tambien en clasificaciones aproximadas de hadrones. Sus generadores pueden tomarse como matrices de Gell-Mann.

## Representaciones

Las representaciones unitarias irreducibles de grupos compactos como $SU(n)$ forman la base algebraica del analisis de multipletes, estados de espin y simetrias internas. El caso $SU(2)$ produce la torre de espines enteros y semienteros.

## Cierre

$SU(n)$ es un grupo de Lie compacto, unitario y estructuralmente rico. Conecta algebra matricial, geometria diferencial, teoria de representaciones y simetrias cuanticas profundas en un unico objeto.
