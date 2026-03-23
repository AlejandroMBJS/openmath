---
title: Rotaciones con Triple Simetria
description: Simetria de orden tres, rotaciones de ciento veinte grados y estructura ciclica asociada.
---

# Rotaciones con Triple Simetria

## Simetria de orden tres

Una rotacion con triple simetria satisface

$$
R^3=I,
$$

pero ni $R$ ni $R^2$ son la identidad. Geometricamente corresponde a una rotacion de angulo

$$
\frac{2\pi}{3}
$$

o bien

$$
\frac{4\pi}{3}.
$$

## Grupo ciclico asociado

La estructura algebraica subyacente es el grupo ciclico

$$
C_3=\{e,r,r^2\},\qquad r^3=e.
$$

Es abeliano y todos sus elementos quedan determinados por un solo generador.

## Matriz planar

La matriz de rotacion de $120^\circ$ en el plano es

$$
R=
\begin{pmatrix}
\cos(2\pi/3) & -\sin(2\pi/3) \\
\sin(2\pi/3) & \cos(2\pi/3)
\end{pmatrix}.
$$

Sobre $\mathbb{R}$ no tiene autovectores reales, pues sus autovalores son complejos:

$$
e^{2\pi i/3},\qquad e^{-2\pi i/3}.
$$

## En tres dimensiones

En $\mathbb{R}^3$ una rotacion de orden tres alrededor de un eje fijo presenta un autovalor real $1$ en la direccion del eje y un par complejo conjugado en el plano ortogonal. Esto refleja la coexistencia de una direccion fija y una dinamica rotacional transversal.

## Polinomio minimo

Para un operador de orden tres se cumple

$$
R^3-I=0.
$$

Como

$$
R^3-I=(R-I)(R^2+R+I),
$$

la parte no fija de la accion esta controlada por el factor cuadratico

$$
R^2+R+I=0.
$$

## Significado geometrico

La triple simetria aparece de forma natural en triangulos equilateros, redes hexagonales, ciertas moleculas y configuraciones cristalinas. Es la primera simetria rotacional discreta genuinamente no involutiva.

## Representaciones

Sobre $\mathbb{C}$, las representaciones irreducibles de $C_3$ son unidimensionales y vienen dadas por caracteres

$$
1,\qquad \omega,\qquad \omega^2,
$$

donde $\omega=e^{2\pi i/3}$. Sobre $\mathbb{R}$, la representacion de rotacion plana es irreducible y de dimension dos.

## Restriccion cristalografica

La simetria de orden tres es compatible con redes periodicas en el plano y en el espacio, a diferencia de ordenes como $5$. Esa compatibilidad explica su presencia sistematica en cristalografia.

## Cierre

La triple simetria introduce el primer ejemplo serio donde la diagonalizacion natural vive sobre $\mathbb{C}$ y no sobre $\mathbb{R}$. Por eso es un laboratorio elemental para entender representaciones reales y complejas de grupos discretos.
