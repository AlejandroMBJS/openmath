---
title: Grupos de Lie Continuos
description: Grupos con estructura diferenciable, algebras de Lie y simetrias continuas en fisica matematica.
---

# Grupos de Lie Continuos

## Idea central

Un grupo de Lie es simultaneamente un grupo y una variedad diferenciable, con operaciones de multiplicacion e inversion suaves. Esta compatibilidad permite estudiar simetrias continuas mediante calculo diferencial.

## Definicion

Un grupo de Lie real es un conjunto $G$ tal que:

- $G$ es grupo;
- $G$ es variedad diferenciable finito-dimensional;
- la multiplicacion

$$
G\times G\to G,
\qquad (g,h)\mapsto gh
$$

es suave;

- la inversion

$$
G\to G,
\qquad g\mapsto g^{-1}
$$

es suave.

## Ejemplos fundamentales

- $(\mathbb{R}^n,+)$;
- $GL(n,\mathbb{R})$;
- $GL(n,\mathbb{C})$;
- $O(n)$, $SO(n)$;
- $U(n)$, $SU(n)$.

## Algebra de Lie asociada

El espacio tangente en la identidad

$$
\mathfrak{g}=T_eG
$$

posee una estructura adicional: el corchete de Lie. Para grupos matriciales se identifica con un espacio de matrices estable por el conmutador

$$
[X,Y]=XY-YX.
$$

## Por que importa el nivel infinitesimal

La estructura local de un grupo de Lie queda codificada en su algebra de Lie. En fisica, los generadores infinitesimales corresponden a cantidades conservadas, operadores de simetria y ecuaciones diferenciales de evolucion.

## Exponencial

En grupos matriciales, la aplicacion exponencial

$$
\exp:\mathfrak{g}\to G,
\qquad X\mapsto e^X
$$

conecta datos infinitesimales con transformaciones finitas. Cerca de la identidad, muchos elementos del grupo pueden escribirse como exponenciales de generadores.

## Simetrias continuas en fisica

Los grupos de Lie aparecen en rotaciones continuas, simetrias gauge, cambios de marco relativistas, evoluciones unitarias y grupos de traslacion o de Poincare.

## Representaciones

Una representacion de un grupo de Lie es una accion suave por operadores lineales sobre un espacio vectorial. Su derivada en la identidad produce una representacion de la algebra de Lie asociada.

## Compactos y no compactos

Los grupos compactos como $SO(n)$ o $SU(n)$ poseen una teoria de representaciones especialmente bien comportada. Los grupos no compactos, como el grupo de Lorentz, son mas sutiles y exigen mayor analisis funcional.

## Cierre

Los grupos de Lie convierten la nocion de simetria continua en objeto diferencial y algebraico a la vez. Son el lenguaje natural para conectar geometria, conservacion, representaciones y dinamica en fisica matematica.
