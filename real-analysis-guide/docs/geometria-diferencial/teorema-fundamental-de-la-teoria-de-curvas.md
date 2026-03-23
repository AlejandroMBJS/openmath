---
title: Teorema Fundamental de la Teoria de Curvas
description: Existencia y unicidad de curvas espaciales a partir de curvatura y torsion.
---

# Teorema Fundamental de la Teoria de Curvas

## La pregunta correcta

Una vez definidas curvatura y torsion, surge la cuestion central: ¿bastan estas dos funciones para determinar una curva espacial? El teorema fundamental responde que si, salvo movimiento rigido.

## Enunciado

Sean

$$
\kappa:I\to(0,\infty),
\qquad
\tau:I\to\mathbb{R}
$$

funciones suaves en un intervalo $I$. Entonces existe una curva regular

$$
\alpha:I\to\mathbb{R}^3
$$

parametrizada por longitud de arco cuya curvatura y torsion son exactamente $\kappa$ y $\tau$. Ademas, cualquier otra curva con las mismas funciones difiere de la primera por un movimiento rigido directo del espacio.

## Lectura geometrica

El par $(\kappa,\tau)$ es un sistema completo de invariantes locales para curvas espaciales regulares con curvatura positiva. No hace falta conocer la posicion exacta de la curva; basta con saber como gira el tangente y como varía el plano osculador.

## Idea de existencia

Se considera el sistema de Frenet en forma matricial

$$
F'=FA,
$$

con

$$
A(s)=
\begin{pmatrix}
0 & -\kappa(s) & 0 \\
\kappa(s) & 0 & -\tau(s) \\
0 & \tau(s) & 0
\end{pmatrix}.
$$

Dadas condiciones iniciales ortonormales para $T,N,B$, el sistema lineal tiene solucion unica. Luego se reconstruye la curva integrando

$$
\alpha'(s)=T(s).
$$

## Idea de unicidad

Si dos curvas tienen la misma curvatura y torsion, sus marcos de Frenet satisfacen el mismo sistema lineal. Si se igualan en un punto mediante una traslacion y una rotacion inicial, por unicidad del problema de Cauchy los marcos coinciden para todo $s$, y por tanto tambien las curvas.

## El papel del movimiento rigido

La no unicidad absoluta es inevitable: si una curva tiene cierta curvatura y torsion, cualquier traslacion o rotacion de ella conserva esos invariantes. Por eso la unicidad correcta solo puede darse modulo isometrias directas del espacio.

## Caso plano

Si $\tau\equiv 0$, el teorema se reduce a la version plana: una funcion de curvatura con signo determina una curva plana, salvo movimiento rigido del plano, una vez fijada orientacion.

## Condicion \(\kappa>0\)

La hipotesis de positividad evita degeneraciones en la definicion de la normal principal y del marco de Frenet. En puntos donde $\kappa=0$, el marco puede dejar de estar bien definido y hace falta otro tratamiento.

## Significado moderno

El teorema fundamental convierte la geometria local de curvas en un problema de integracion de una conexion sobre un marco movil. Esta perspectiva es prototipo de lo que ocurre en geometria riemanniana y teoria de Cartan.

## Ejemplo conceptual

- $\kappa=c>0$, $\tau=0$: circunferencia de radio $1/c$.
- $\kappa=c_1>0$, $\tau=c_2\neq 0$: helice circular.

Es decir, incluso modelos clasicos se leen como casos especiales del teorema fundamental.

## Cierre

El teorema fundamental de la teoria de curvas establece que curvatura y torsion no solo se extraen de una curva: tambien la reconstruyen. Con ello queda cerrada la teoria local de curvas espaciales regulares.
