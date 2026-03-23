---
title: Grupo Ortogonal
description: Transformaciones que preservan el producto interno euclideo y estructura diferencial del grupo O n.
---

# Grupo Ortogonal

## Definicion

El grupo ortogonal en dimension $n$ es

$$
O(n)=\{A\in M_n(\mathbb{R}):A^TA=I\}.
$$

Sus elementos son precisamente las transformaciones lineales que preservan el producto interno euclideo:

$$
\langle Ax,Ay\rangle=\langle x,y\rangle.
$$

## Consecuencias geometricas

Si $A\in O(n)$, entonces preserva:

- normas;
- angulos;
- distancias;
- la forma cuadratica euclidea.

Por tanto, $O(n)$ es el grupo lineal de isometrias del espacio euclideo que fijan el origen.

## Determinante

De la ecuacion $A^TA=I$ se deduce

$$
(\det A)^2=1,
$$

de modo que

$$
\det A=\pm1.
$$

Esto separa dos tipos de elementos:

- $\det A=1$: preservan orientacion;
- $\det A=-1$: invierten orientacion.

## Componente conexa especial

El subgrupo

$$
SO(n)=\{A\in O(n):\det A=1\}
$$

es el grupo ortogonal especial. Recoge las rotaciones propias.

## Algebra de Lie

La algebra de Lie de $O(n)$ en la identidad se obtiene diferenciando la restriccion $A^TA=I$. Si $A(t)$ es una curva con $A(0)=I$ y $A'(0)=X$, entonces

$$
X^T+X=0.
$$

Por tanto,

$$
\mathfrak{o}(n)=\{X\in M_n(\mathbb{R}):X^T=-X\},
$$

el espacio de matrices antisimetricas.

## Dimensionalidad

Una matriz antisimetrica queda determinada por las entradas por encima de la diagonal, luego

$$
\dim O(n)=\dim SO(n)=\frac{n(n-1)}{2}.
$$

## Espectro

Los autovalores complejos de una matriz ortogonal tienen modulo uno. En dimension impar siempre aparece al menos un autovalor real $1$ o $-1$. En dimension dos y tres, esto conduce a la descripcion geometrica clasica por rotaciones y reflexiones.

## Importancia fisica

El grupo ortogonal modela simetrias euclideas lineales: rotaciones, reflexiones y cambios ortonormales de base. Es central en mecanica clasica, elasticidad, teoria de tensores y simetrias espaciales.

## Cierre

$O(n)$ es el grupo de todas las simetrias lineales que preservan la geometria euclidea. Su subgrupo $SO(n)$ retiene la parte orientacion-preservante y prepara el paso natural hacia grupos de Lie mas refinados como $SU(n)$ y los grupos de Lorentz.
