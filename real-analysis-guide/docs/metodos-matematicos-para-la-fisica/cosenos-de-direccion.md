---
title: Cosenos de Direccion
description: Angulos entre un vector y los ejes coordenados, y su relacion con componentes y normalizacion.
---

# Cosenos de Direccion

## Definicion

Sea $v\in\mathbb{R}^3$ un vector no nulo. Si $\alpha,\beta,\gamma$ son los ángulos que forma con los ejes coordenados, se definen los cosenos de dirección como

$$
\cos\alpha,\qquad \cos\beta,\qquad \cos\gamma.
$$

## Relacion con componentes

Si

$$
v=(v_1,v_2,v_3),
$$

entonces

$$
\cos\alpha=\frac{v_1}{\|v\|},
\qquad
\cos\beta=\frac{v_2}{\|v\|},
\qquad
\cos\gamma=\frac{v_3}{\|v\|}.
$$

## Identidad fundamental

Los cosenos de dirección satisfacen

$$
\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1.
$$

Esto no es más que la normalización del vector unitario asociado a $v$.

## Significado geometrico

Los cosenos de dirección son las componentes del vector unitario

$$
\hat v=\frac{v}{\|v\|}.
$$

Por tanto, describen orientación, no magnitud.

## Uso en física

Aparecen al proyectar fuerzas, velocidades o momentos sobre ejes específicos. También son la entrada natural para matrices de cambio de base entre sistemas ortonormales.

## Cierre

Los cosenos de dirección traducen la orientación de un vector en números adimensionales ligados a sus proyecciones unitarias sobre los ejes. Son el paso elemental hacia matrices de rotación y cambios de referencia.
