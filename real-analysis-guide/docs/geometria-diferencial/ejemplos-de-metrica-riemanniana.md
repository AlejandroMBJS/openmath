---
title: Ejemplos de Metrica Riemanniana
description: Metricas inducidas y abstractas en plano, esfera, cilindro, toro y otras superficies modelo.
---

# Ejemplos de Metrica Riemanniana

## Que es una metrica riemanniana

En una superficie diferenciable, una metrica riemanniana asigna a cada espacio tangente un producto interno que varia suavemente con el punto. La primera forma fundamental es el ejemplo inducido por excelencia.

## Plano euclideo

En coordenadas cartesianas del plano,

$$
g=dx^2+dy^2.
$$

Es la metrica modelo de geometria plana, con simbolos de Christoffel nulos en estas coordenadas.

## Esfera unitaria

En coordenadas esfericas $(\varphi,\theta)$,

$$
g=d\varphi^2+\sin^2\varphi\,d\theta^2.
$$

Esta metrica produce curvatura gaussiana constante positiva.

## Cilindro

Con coordenadas $(u,v)$,

$$
X(u,v)=(\cos u,\sin u,v),
$$

la metrica inducida es

$$
g=du^2+dv^2.
$$

Por eso el cilindro es localmente isometrico al plano.

## Toro de revolucion

En el toro parametrizado por

$$
X(u,v)=((R+r\cos u)\cos v,(R+r\cos u)\sin v,r\sin u),
$$

la metrica toma la forma

$$
g=r^2\,du^2+(R+r\cos u)^2\,dv^2.
$$

Este ejemplo muestra una metrica diagonal no constante con topologia global no trivial.

## Metrica conforme

Muchas metricas en dimension dos se escriben localmente como

$$
g=\lambda(u,v)^2(du^2+dv^2).
$$

Estas coordenadas conformes son fundamentales en geometria riemanniana bidimensional y variable compleja.

## Lectura conceptual

Los ejemplos muestran que una misma superficie topologica puede llevar metricas muy distintas, y que la geometria intrinseca depende de la metrica elegida, no solo de la topologia subyacente.

## Cierre

Los ejemplos de metricas riemannianas muestran la diversidad de geometrías posibles sobre superficies. Desde la metrica plana hasta la del toro o la esfera, la metrica determina distancias, geodesicas, conexion y curvatura.

## Ejercicios

### Ejercicio 1

Sea $S$ el plano con metrica $g = du^2 + dv^2$. Calcular la distancia geodesica entre dos puntos cualesquiera. Verificar que coincide con la distancia euclidea.

### Ejercicio 2

Sea $S$ la esfera unitaria con metrica $g = d\varphi^2 + \sin^2\varphi\,d\theta^2$. Calcular la curvatura gaussiana. Verificar que $K = 1$.

### Ejercicio 3

Sea $S$ el cilindro $X(u,v) = (\cos u, \sin u, v)$ con metrica $g = du^2 + dv^2$. Calcular la curvatura gaussiana y verificar que $K = 0$.

### Ejercicio 4

Sea $S$ un toro de revolucion con $R > r$. Escribir la metrica y calcular la curvatura gaussiana.

### Ejercicio 5

Sea $g = \lambda^2(du^2 + dv^2)$ una metrica conforme con $\lambda(u,v) > 0$. Demostrar que la curvatura gaussiana es $K = -\frac{1}{\lambda^2}\Delta(\ln\lambda)$, donde $\Delta$ es el Laplaciano.

### Ejercicio 6

Sea $g = \lambda^2(du^2 + dv^2)$ la metrica del half-plane de Poincare con $\lambda = 1/v$. Calcular $K$ y verificar que $K = -1$.

### Ejercicio 7

Sea $S$ una superficie con metrica $g = du^2 + f(u)^2\,dv^2$. Demostrar que la curvatura geodesica del paralelo $u = u_0$ es $\kappa_g = -f'(u_0)/f(u_0)$.

### Ejercicio 8

Sea $g$ una metrica riemanniana sobre una superficie $S$. Demostrar que localmente existen coordenadas isotermicas, es decir, $g = \lambda^2(du^2 + dv^2)$.

### Ejercicio 9

Sea $S$ el plano con metrica $g = dx^2 + dy^2$. Escribir las ecuaciones geodesicas y verificar que las soluciones son rectas.

### Ejercicio 10

Sea $S$ la esfera unitaria. Escribir las geodésicas como soluciones de las ecuaciones geodesicas. Verificar que son los grandes circulos.

### Ejercicio 11

Sea $S$ una superficie con metrica $g = \lambda^2(du^2 + dv^2)$. Si $\lambda = e^u$, calcular $K$.

### Ejercicio 12

Sea $S$ el half-plane de Poincare. Demostrar que las geodésicas son semicirculos con centro en el eje $x$ o rectas verticales.

### Ejercicio 13

Sea $S$ una superficie con metrica $g = du^2 + \sinh^2 u\,dv^2$. Calcular la curvatura gaussiana y verificar que $K = -1$.

### Ejercicio 14

Sea $g$ una metrica con $K = -1$ en todas partes. Demostrar que localmente existen coordenadas con $g = \lambda^2(du^2 + dv^2)$ y $\Delta\ln\lambda = \lambda^2$.

### Ejercicio 15

Sea $S$ una superficie de revolucion con $ds^2 = du^2 + f(u)^2\,dv^2$. Demostrar que la geodesica meridiano es una geodesica iff $z'(u) = 0$.

## Soluciones detalladas

### Solucion 1

La distancia geodesica es $d(p,q) = \sqrt{(u_2-u_1)^2 + (v_2-v_1)^2}$, que coincide con la distancia euclidea porque los simbolos de Christoffel se anulan.

$$\square$$

### Solucion 2

Para la esfera: $g_{11} = 1$, $g_{12} = 0$, $g_{22} = \sin^2\varphi$. Calculando la curvatura por la formula de Brioschi o directamente: $K = \frac{1}{\sin^2\varphi}\cdot\cos^2\varphi = 1$ (para la parametrizacion $\varphi$ en $[0, \pi]$ y $\theta$). Con la parametrizacion estandar, $K = 1$.

$$\square$$

### Solucion 3

$X(u,v) = (\cos u, \sin u, v)$, $E = 1$, $F = 0$, $G = 1$. Como en el plano, todos los simbolos de Christoffel se anulan, hence $K = 0$.

$$\square$$

### Solucion 4

$g = r^2\,du^2 + (R+r\cos u)^2\,dv^2$. Calculando $K = -\frac{1}{r(R+r\cos u)^2}\cdot\frac{d}{du}[r(R+r\cos u)] = \frac{\cos u}{r(R+r\cos u)}$, como se obtiene de la formula directa.

$$\square$$

### Solucion 5

En coordenadas conformes, la curvatura gaussiana satisface $K = -\frac{1}{\lambda^2}\Delta\ln\lambda$.

$$\square$$

### Solucion 6

$\lambda = 1/v$, hence $\ln\lambda = -\ln v$. $\Delta\ln\lambda = -\partial_v^2\ln v = 1/v^2$. Luego $K = -\frac{1}{(1/v)^2}\cdot\frac{1}{v^2} = -1$.

$$\square$$

### Solucion 7

La curvatura geodesica del paralelo $u = u_0$ es $\kappa_g = \langle D_T X_v, N\rangle / \|X_v\| = -\Gamma_{12}^2 = -f'(u_0)/f(u_0)$.

$$\square$$

### Solucion 8

Por el teorema de uniformly quasi-conformal coordinates, toda superficie riemanniana admite coordenadas isotermicas localmente. Esto se sigue de la existencia de funciones armónicas conformes.

$$\square$$

### Solucion 9

Con $g_{ij} = \delta_{ij}$, todos los simbolos de Christoffel se anulan. Las ecuaciones geodesicas son $\ddot u = 0$, $\ddot v = 0$, cuyas soluciones son $u(t) = at + b$, $v(t) = ct + d$, es decir, rectas.

$$\square$$

### Solucion 10

Parametrizando la esfera por $(\varphi, \theta)$, las ecuaciones geodesicas dan $\ddot\varphi - \sin\varphi\cos\varphi\dot\theta^2 = 0$, $\ddot\theta + 2\cot\varphi\dot\varphi\dot\theta = 0$. Las soluciones son grandes circulos con $\theta(t) = \theta_0 + \int \frac{c}{\sin^2\varphi}\,d\varphi$.

$$\square$$

### Solucion 11

$\lambda = e^u$, $\ln\lambda = u$, $\Delta\ln\lambda = \partial_u^2 u = 0$. Luego $K = 0$.

$$\square$$

### Solucion 12

Parametrizando por $(x,y)$ con $y > 0$, la metrica es $g = (dx^2 + dy^2)/y^2$. Las geodésicas satisfacen las ecuaciones de Euler-Lagrange para $L = \sqrt{x'^2 + y'^2}/y$. Resolviendo: $x' = c_1 y^2$, $y' = \pm\sqrt{y^2 - c_1^2 y^4}$. Integrando se obtienen semicirculos con centro en el eje $x$.

$$\square$$

### Solucion 13

$g = du^2 + \sinh^2 u\,dv^2$, $f(u) = \sinh u$, $f'(u) = \cosh u$, $f''(u) = \sinh u$. $K = -f''/f = -1$.

$$\square$$

### Solucion 14

Esta es la ecuacion de Liouville para metricas de curvatura $-1$ en dimension dos. Si $K = -1$, entonces $-\Delta\ln\lambda = -\lambda^2$, es decir, $\Delta\ln\lambda = \lambda^2$.

$$\square$$

### Solucion 15

La curvatura geodesica del meridiano se anula iff $\kappa_g = \langle D_T X_u, X_v\rangle / \|X_v\| = 0$. Esto es equivalente a $z'(u) = 0$ porque la conexion de Levi-Civita sobre la superficie de revolucion satisface $\langle D_T X_u, X_v\rangle = z'(u)f'(u)$.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1992). *Riemannian Geometry*. Birkhauser Boston.
2. Jost, J. (2017). *Riemannian Geometry and Geometric Analysis*. Springer.
3. Chavel, I. (2006). *Riemannian Geometry*. Cambridge University Press.
4. Sakai, T. (1996). *Riemannian Geometry*. American Mathematical Society.
