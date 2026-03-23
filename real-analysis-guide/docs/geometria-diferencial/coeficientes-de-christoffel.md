---
title: Coeficientes de Christoffel
description: Conexion inducida por la metrica, derivadas covariantes y expresion local de las ecuaciones geodesicas.
---

# Coeficientes de Christoffel

## Del calculo ordinario al calculo covariante

En una superficie, derivar un campo tangente en el ambiente produce en general una componente normal. Para conservar una derivada tangente intrinseca se proyecta sobre el plano tangente. Esa proyeccion define la conexion de Levi-Civita.

## Definicion local

Sea $X(u,v)$ una parametrizacion. Las derivadas parciales de los vectores base tangentes se descomponen como

$$
X_{uu}=\Gamma_{11}^1X_u+\Gamma_{11}^2X_v+LN,
$$

$$
X_{uv}=\Gamma_{12}^1X_u+\Gamma_{12}^2X_v+MN,
$$

$$
X_{vv}=\Gamma_{22}^1X_u+\Gamma_{22}^2X_v+N_cN.
$$

Los escalares $\Gamma_{ij}^k$ son los **coeficientes de Christoffel**.

## Significado

La parte tangencial de las segundas derivadas queda codificada por los coeficientes de Christoffel. Son la expresion local de la conexion determinada por la metrica.

## Dependencia de coordenadas

Los coeficientes de Christoffel no son tensores: cambian de manera inhomogenea bajo cambio de coordenadas. Lo que si es geometrico es la conexion que representan.

## Formula a partir de la metrica

En coordenadas generales,

$$
\Gamma_{ij}^k=
\frac{1}{2}\sum_m g^{km}
\left(\partial_i g_{jm}+\partial_j g_{im}-\partial_m g_{ij}\right),
$$

donde $(g_{ij})$ es la matriz de la primera forma fundamental y $(g^{ij})$ su inversa.

## Geodesicas

Si una curva coordenada se escribe como $u^k(t)$, las ecuaciones geodesicas toman la forma

$$
\ddot u^k+\sum_{i,j}\Gamma_{ij}^k\dot u^i\dot u^j=0.
$$

Esto muestra que los coeficientes de Christoffel gobiernan la dinamica intrinseca de la metrica.

## Ejemplo: plano cartesiano

En coordenadas euclideas del plano todos los coeficientes de Christoffel se anulan. Esto refleja que las rectas son geodesicas y que la conexion es trivial en esas coordenadas.

## Ejemplo: esfera

En coordenadas esfericas sobre la esfera aparecen coeficientes no nulos, aunque la superficie sea altamente simetrica. Esto muestra que los coeficientes dependen de la carta, no solo de la geometria subyacente.

## Cierre

Los coeficientes de Christoffel son el lenguaje local de la conexion de Levi-Civita. Aunque no son invariantes por si mismos, controlan la derivada covariante, las geodesicas y, a traves de sus derivadas y combinaciones cuadraticas, la curvatura intrinseca.
