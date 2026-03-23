---
title: Curvatura Gaussiana
description: Producto de curvaturas principales, determinante del operador de forma y clasificacion local del doblado de una superficie.
---

# Curvatura Gaussiana

## Definicion

La curvatura gaussiana en un punto se define como

$$
K=\det S=\kappa_1\kappa_2,
$$

donde $S$ es el operador de forma y $\kappa_1,\kappa_2$ son las curvaturas principales.

## Significado

La curvatura gaussiana condensa el doblado extrinseco de la superficie en un solo escalar. A diferencia de la curvatura normal, no depende de elegir una direccion tangente.

## Formula de Gauss

En coordenadas locales,

$$
K=\frac{LN_c-M^2}{EG-F^2}.
$$

Aqui $E,F,G$ pertenecen a la primera forma fundamental y $L,M,N_c$ a la segunda.

## Lectura de signos

- $K>0$: el punto es eliptico;
- $K<0$: el punto es hiperbolico;
- $K=0$: el punto es parabolico o plano segun la segunda forma.

## Ejemplos

### Plano

En el plano,

$$
K=0.
$$

### Esfera unitaria

En la esfera unitaria,

$$
K=1.
$$

### Cilindro

En el cilindro,

$$
K=0,
$$

aunque la superficie esta claramente doblada en una direccion. Esto muestra que curvatura gaussiana cero no significa superficie plana en el sentido extrinseco, sino ausencia de curvatura intrinseca acumulada en dos direcciones independientes.

## Clasificacion local

### Punto eliptico

Si $K>0$, las curvaturas principales tienen el mismo signo. La superficie se dobla del mismo lado en todas las direcciones principales.

### Punto hiperbolico

Si $K<0$, las curvaturas principales tienen signos opuestos. La superficie tiene comportamiento de silla.

### Punto parabolico

Si $K=0$ y no todas las curvaturas normales son nulas, una curvatura principal se anula y la otra no.

### Punto plano

Si el operador de forma es nulo, toda curvatura normal se anula.

## Curvatura gaussiana como jacobiano de la aplicacion de Gauss

La igualdad

$$
K=\det(d\mathcal{N})
$$

interpreta a $K$ como factor de cambio de area orientada del mapa normal. Esta es una lectura profunda: la curvatura gaussiana mide como la superficie cubre la esfera de normales.

## Cierre

La curvatura gaussiana es el invariante central de la teoria local de superficies. Resume las curvaturas principales, clasifica puntos y anticipa el hecho extraordinario de Gauss: que, aunque se define extrinsecamente, es en realidad un invariante intrinseco.
