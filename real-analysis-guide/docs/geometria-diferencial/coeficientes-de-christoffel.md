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

## Ejercicios

### Ejercicio 1

Sea $S$ el plano con metrica $g = du^2 + dv^2$. Calcular todos los simbolos de Christoffel $\Gamma_{ij}^k$.

### Ejercicio 2

Sea $S$ la esfera unitaria con metrica $g = d\varphi^2 + \sin^2\varphi\,d\theta^2$. Calcular $\Gamma_{12}^1$, $\Gamma_{11}^2$, $\Gamma_{22}^1$.

### Ejercicio 3

Sea $g = \lambda^2(du^2 + dv^2)$ una metrica conforme en el plano. Calcular los simbolos de Christoffel en terminos de $\lambda$.

### Ejercicio 4

Sea $S$ una superficie de revolucion con metrica $ds^2 = du^2 + f(u)^2\,dv^2$. Calcular todos los simbolos de Christoffel.

### Ejercicio 5

Demostrar que los simbolos de Christoffel satisfacen $\Gamma_{ij}^k = \Gamma_{ji}^k$.

### Ejercicio 6

Sea $g_{ij}$ la metrica de una superficie. Demostrar que $\nabla_{\partial_i}\partial_j = \sum_k \Gamma_{ij}^k\partial_k$.

### Ejercicio 7

Sea $X$ un campo vectorial sobre una superficie con conexion de Levi-Civita. Demostrar que $\nabla_X Y - \nabla_Y X = [X,Y]$.

### Ejercicio 8

Sea $g$ una metrica riemanniana sobre una superficie. Demostrar que los simbolos de Christoffel se anulan en un punto iff existen coordenadas isotermicas cerca de ese punto.

### Ejercicio 9

Sea $S$ una superficie con $K < 0$ en todas partes. Demostrar que en ningun punto pueden anularse todos los simbolos de Christoffel.

### Ejercicio 10

Sea $g = du^2 + \sinh^2 u\,dv^2$ la metrica del half-plane de Poincare. Calcular la curvatura geodesica del paralelo $u = u_0$.

### Ejercicio 11

Sea $g$ una metrica con $K = 0$ en todas partes. Demostrar que localmente existen coordenadas donde todos los simbolos de Christoffel se anulan.

### Ejercicio 12

Sea $X$ un campo vectorial con $\nabla_X X = 0$. Demostrar que las curvas integrales de $X$ son geodésicas.

### Ejercicio 13

Sea $S$ una superficie con conexion de Levi-Civita. Demostrar que $\nabla$ es sin torsion: $\nabla_X Y - \nabla_Y X = [X,Y]$.

### Ejercicio 14

Sea $g = du^2 + f(u)^2\,dv^2$ una metrica de superficie de revolucion. Si $f(u) = \sin u$, verificar que $K = 1$.

### Ejercicio 15

Sea $X$ un campo tangente sobre una superficie. Demostrar que $\|\!X\!\|\|^2 = g_{ij}X^iX^j$ y calcular $\nabla_i\|\!X\!\!\|^2$.

## Soluciones detalladas

### Solucion 1

Con $g_{11} = g_{22} = 1$, $g_{12} = 0$, se tiene $g^{11} = g^{22} = 1$, $g^{12} = 0$. Los simbolos son $\Gamma_{ij}^k = \frac{1}{2}g^{km}(\partial_i g_{jm} + \partial_j g_{im} - \partial_m g_{ij})$. Todas las derivadas parciales de $g_{ij}$ son cero, luego todos los simbolos de Christoffel son cero.

$$\square$$

### Solucion 2

Para la esfera: $g_{11} = 1$, $g_{12} = 0$, $g_{22} = \sin^2\varphi$. La inversa: $g^{11} = 1$, $g^{12} = 0$, $g^{22} = 1/\sin^2\varphi$. Calculando: $\Gamma_{12}^1 = \frac{1}{2}g^{11}(\partial_1 g_{21} + \partial_2 g_{11} - \partial_1 g_{12}) = 0$. $\Gamma_{11}^2 = \frac{1}{2}g^{22}(-\partial_2 g_{11}) = 0$. $\Gamma_{22}^1 = \frac{1}{2}g^{11}(-\partial_1 g_{22}) = -\frac{1}{2}(2\sin\varphi\cos\varphi) = -\sin\varphi\cos\varphi$.

$$\square$$

### Solucion 3

$g_{ij} = \lambda^2\delta_{ij}$, hence $g^{ij} = \lambda^{-2}\delta^{ij}$. Calculando $\Gamma_{ij}^k$: $\Gamma_{11}^1 = \lambda^{-1}\partial_1\lambda$, $\Gamma_{12}^1 = \Gamma_{21}^1 = \lambda^{-1}\partial_2\lambda$, $\Gamma_{11}^2 = -\lambda^{-1}\partial_1\lambda$, etc.

$$\square$$

### Solucion 4

$g_{11} = 1$, $g_{12} = 0$, $g_{22} = f(u)^2$. La inversa: $g^{11} = 1$, $g^{12} = 0$, $g^{22} = 1/f(u)^2$. $\Gamma_{12}^1 = \frac{1}{2}g^{11}(-\partial_1 g_{12}) = 0$, $\Gamma_{11}^1 = 0$, $\Gamma_{22}^1 = -\frac{1}{2}f(u)f'(u)$, $\Gamma_{12}^2 = f'(u)/f(u)$, $\Gamma_{11}^2 = 0$, $\Gamma_{22}^2 = 0$.

$$\square$$

### Solucion 5

De la formula $\Gamma_{ij}^k = \frac{1}{2}g^{km}(\partial_i g_{jm} + \partial_j g_{im} - \partial_m g_{ij})$, intercambiando $i$ y $j$ se obtiene la misma expresion. Luego $\Gamma_{ij}^k = \Gamma_{ji}^k$.

$$\square$$

### Solucion 6

Por definicion de simbolos de Christoffel, $\nabla_{\partial_i}\partial_j = \sum_k \Gamma_{ij}^k\partial_k$.

$$\square$$

### Solucion 7

Esta es la propiedad de que la conexion de Levi-Civita es simetrica. $\nabla_X Y - \nabla_Y X = [X,Y]$.

$$\square$$

### Solucion 8

Si en un punto $p$ todos los simbolos de Christoffel se anulan, entonces las coordenadas son geodésicas cerca de $p$, es decir, son coordenadas isotermicas normales.

$$\square$$

### Solucion 9

La curvatura gaussiana se expresa como una combinacion de simbolos de Christoffel y sus derivadas. Si todos los simbolos se anulan en un punto, la curvatura en ese punto es cero, contradiction con $K < 0$.

$$\square$$

### Solucion 10

$g = du^2 + \sinh^2 u\,dv^2$, $f(u) = \sinh u$. $\Gamma_{12}^2 = f'(u)/f(u) = \cosh u/\sinh u = \coth u$. La curvatura geodesica del paralelo $u = u_0$ es $\kappa_g = -\Gamma_{12}^2 = -\coth u_0$.

$$\square$$

### Solucion 11

Si $K = 0$, por el teorema de Killing-Hopf, localmente la superficie es isometrica al plano. Hence existen coordenadas donde la metrica es $du^2 + dv^2$, y en esas coordenadas los simbolos de Christoffel se anulan.

$$\square$$

### Solucion 12

Si $\nabla_X X = 0$, la curva integral $\gamma$ con $\dot\gamma = X$ satisface $\nabla_{\dot\gamma}\dot\gamma = 0$, es decir, $\gamma$ es geodesica.

$$\square$$

### Solucion 13

Esta es la condicion de simetra de la conexion de Levi-Civita: $T(X,Y) = \nabla_X Y - \nabla_Y X - [X,Y] = 0$.

$$\square$$

### Solucion 14

Con $f(u) = \sin u$, $f'(u) = \cos u$, $f''(u) = -\sin u$. La curvatura es $K = -f''/f = 1$, verificado.

$$\square$$

### Solucion 15

$\|X\|^2 = g_{ij}X^iX^j$. Diferenciando: $\partial_k\|X\|^2 = (\partial_k g_{ij})X^iX^j + 2g_{ij}X^i\partial_k X^j = 2g_{ij}X^i(\partial_k X^j + \sum_m \Gamma_{km}^j X^m) = 2\langle X, \nabla_{\partial_k}X\rangle$.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1992). *Riemannian Geometry*. Birkhauser Boston.
2. Jost, J. (2017). *Riemannian Geometry and Geometric Analysis*. Springer.
3. Chavel, I. (2006). *Riemannian Geometry*. Cambridge University Press.
4. Sakai, T. (1996). *Riemannian Geometry*. American Mathematical Society.
