---
title: Clasificacion de Puntos de una Superficie
description: Puntos elipticos, hiperbolicos, parabolicos, planos y umbílicos a partir de las curvaturas principales.
---

# Clasificacion de Puntos de una Superficie

## Criterio basico

La clasificacion local de un punto de una superficie se realiza a partir de las curvaturas principales

$$
\kappa_1,\qquad \kappa_2
$$

o equivalentemente del signo de la curvatura gaussiana y de la estructura del operador de forma.

## Punto eliptico

Se tiene cuando

$$
K=\kappa_1\kappa_2>0.
$$

Las curvaturas principales tienen el mismo signo. Localmente la superficie se dobla del mismo lado en ambas direcciones principales.

## Punto hiperbolico

Se tiene cuando

$$
K<0.
$$

Las curvaturas principales tienen signos opuestos. La superficie presenta geometria de silla y aparecen dos direcciones asintoticas reales.

## Punto parabolico

Se tiene cuando

$$
K=0
$$

pero el operador de forma no es identicamente nulo. En este caso una curvatura principal es cero y la otra no.

## Punto plano

Es el caso en que

$$
\kappa_1=\kappa_2=0.
$$

Toda curvatura normal se anula y la superficie es localmente plana a segundo orden.

## Punto umbilico

Un punto es umbílico si

$$
\kappa_1=\kappa_2.
$$

Entonces todas las direcciones son principales y la curvatura normal es la misma en todas las direcciones. La esfera es el modelo clasico donde todos los puntos son umbílicos.

## Ejemplos

- esfera: puntos elipticos y umbílicos;
- cilindro: puntos parabolicos no planos;
- paraboloide hiperbólico: puntos hiperbolicos;
- plano: puntos planos y umbílicos degenerados.

## Significado dinamico

La clasificacion controla la existencia de:

- direcciones principales;
- direcciones asintoticas;
- comportamiento local de lineas de curvatura.

## Ejercicios

### Ejercicio 1

Sea $S$ una superficie con $K > 0$ en todas partes. Demostrar que no existen puntos asintóticos en $S$. Deducir que en toda superficie con curvatura estrictamente positiva, todas las curvas coordenadas son estrictamente convexas localmente.

### Ejercicio 2

Sea $p$ un punto hiperbólico de una superficie $S$. Probar que en toda vecindad de $p$ existen curvas cerradas estrictamente convexas arbitrariamente pequeñas (indicación: usar la fórmula de Euler y la indicatriz de Dupin).

### Ejercicio 3

Clasificar todos los puntos del elipsoide $\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1$ según el tipo de punto. ¿Hay puntos umbílicos? Si es así, ¿cuáles?

### Ejercicio 4

Sea $X(u,v) = (u, v, u^2 + v^3)$ una superficie. Clasificar el punto $(0,0,0)$. ¿Es un punto plano, parabólico, elíptico o hiperbólico?

### Ejercicio 5

Sea $p$ un punto umbílico de una superficie $S$. Demostrar que existe una vecindad de $p$ donde todos los puntos son umbílicos si y solo si $S$ es locally una esfera o un plano en esa vecindad.

### Ejercicio 6

Sea $S$ la superficie de un cono circular recto con vértice en el origen. Identificar los tipos de puntos del cono y demostrar que todos los puntos distintos del vértice son parabólicos.

### Ejercicio 7

**Teorema de Loewner**: Sea $S$ una superficie completa con $K > 0$ en todas partes. Demostrar que $S$ contiene al menos dos puntos umbílicos. (Indicación: usar el teorema de Gauss-Bonnet y la Fórmula de INTEGRAND.)

### Ejercicio 8

Sea $p$ un punto de una superficie con $\kappa_1 > \kappa_2$. Demostrar que las curvaturas normales en las bisectrices de las direcciones principales son $\kappa_1/2 + \kappa_2/2 = H$.

### Ejercicio 9

Sea $p$ un punto hiperbólico. Probar que las direcciones asintóticas dividen el plano tangente en cuatro sectores donde la segunda forma fundamental toma valores positivos y negativos alternadamente.

### Ejercicio 10

Sea $S$ una superficie con $H = 0$ en todas partes (superficie mínima). Demostrar que si $p$ no es un punto plano, entonces $p$ es necesariamente hiperbólico. Deducir que una superficie mínima completa con $K > 0$ en todas partes es un plano.

### Ejercicio 11

Sea $p$ un punto parabolico con $\kappa_1 = 0$, $\kappa_2 \neq 0$. Probar que la indicatriz de Dupin se degenera en un par de rectas paralelas.

### Ejercicio 12

Sea $S$ una superficie contenida en un hemisferio de la esfera unitaria. Demostrar que todos los puntos de $S$ son elípticos.

### Ejercicio 13

Sea $X(u,v) = (u\cos v, u\sin v, \ln u)$ (superficie de revolución de la logarítmica). Calcular $\kappa_1$ y $\kappa_2$, clasificar los puntos según $K$, e identificar la línea donde $K = 0$.

### Ejercicio 14

Sea $S$ una superficie con $K < 0$ en todas partes. Demostrar que en todo punto $p \in S$ existe una vecindad donde la aplicación de Gauss $\mathcal{N}: S \to S^2$ es un difeomorfismo local inyectivo.

### Ejercicio 15

Sea $p$ un punto elíptico. Probar que la distancia intrínseca a puntos con $K < 0$ no puede ser alcanzada por una geodesica corta sin salir de la región elíptica (principio de monotonicidad de la curvatura geodesica).

## Soluciones detalladas

### Solucion 1

Si $K > 0$, entonces $\kappa_1\kappa_2 > 0$, luego $\kappa_1$ y $\kappa_2$ tienen el mismo signo. Por la fórmula de Euler, $\kappa_n(\theta) = \kappa_1\cos^2\theta + \kappa_2\sin^2\theta > 0$ para todo $\theta$, porque ambos términos son no negativos y al menos uno es positivo. Por tanto no hay dirección con $\kappa_n = 0$, es decir, no hay puntos asintóticos.

$$\square$$

### Solucion 2

En un punto hiperbólico, la indicatriz de Dupin es una hipérbola con ejes de longitud $1/\sqrt{|\kappa_1|}$ y $1/\sqrt{|\kappa_2|}$. Los arcos de la hipérbola near $p$ son estrictamente convexos y arbitrariamente pequeños. Cada uno de ellos, como curva sobre la superficie, es convexo en el sentido extrínseco.

$$\square$$

### Solucion 3

Elipsoide: parametrizando por $(a\sin\varphi\cos\theta, b\sin\varphi\sin\theta, c\cos\varphi)$, se obtiene $\kappa_1 = bc/(a^2\sin^2\varphi\cos^2\theta + b^2\sin^2\varphi\sin^2\theta + c^2\cos^2\varphi)^{3/2}$ y una expresión análoga para $\kappa_2$. Los puntos umbílicos son los seis puntos $(\pm a, 0, 0)$, $(0, \pm b, 0)$, $(0, 0, \pm c)$, donde las tres distancias a los semiejes coinciden. Todos los demás puntos son elípticos.

$$\square$$

### Solucion 4

Para $X(u,v) = (u, v, u^2 + v^3)$, se tiene $X_u = (1, 0, 2u)$, $X_v = (0, 1, 3v^2)$, y en $(0,0)$: $X_{uu} = (0, 0, 2)$, $X_{uv} = (0, 0, 0)$, $X_{vv} = (0, 0, 6v)$, luego en $(0,0)$: $X_{vv}(0) = (0,0,0)$. La primera forma fundamental en $(0,0)$: $E = G = 1$, $F = 0$. La segunda: $L = 2$, $M = 0$, $N_c = 0$. Luego $K = (LN_c - M^2)/(EG - F^2) = 0$. Como $S \neq 0$, es un punto parabólico.

$$\square$$

### Solucion 5

Si $p$ es umbílico, $\kappa_1(p) = \kappa_2(p) = \lambda$. Por continuidad, existe una vecindad donde $\kappa_1 \approx \kappa_2 \approx \lambda$. Si $\lambda = 0$, por el teorema de классификации, la superficie es localmente un plano. Si $\lambda \neq 0$, entonces $K = \lambda^2 > 0$ y la superficie es localmente una esfera de radio $1/|\lambda|$.

$$\square$$

### Solucion 6

El cono $X(u,v) = (u\cos v, u\sin v, cu)$ con $c \neq 0$. En puntos con $u \neq 0$: $X_u = (\cos v, \sin v, c)$, $X_v = (-u\sin v, u\cos v, 0)$. La primera forma fundamental: $E = 1 + c^2$, $F = 0$, $G = u^2$. La segunda forma: $L = 0$, $M = 0$, $N_c = cu/(1+c^2)^{1/2}$. Por tanto $K = 0$ en todos los puntos con $u \neq 0$, y $L = M = N_c = 0$ en el vértice $u = 0$, que es un punto plano.

$$\square$$

### Solucion 7

Por Gauss-Bonnet, $\int_S K\,dA = 2\pi\chi(S) = 4\pi$ para una esfera-topología. Si $K > 0$ everywhere, el promedio de $K$ es positivo. El número de puntos umbílicos es al menos 2 por el teorema de Loewner (1949): toda superficie riemanniana topológicamente esférica tiene al menos dos puntos umbílicos.

$$\square$$

### Solucion 8

Para $\theta = \pi/4$: $\kappa_n(\pi/4) = \kappa_1\cos^2(\pi/4) + \kappa_2\sin^2(\pi/4) = \kappa_1/2 + \kappa_2/2 = (\kappa_1 + \kappa_2)/2 = H$. Análogamente para $\theta = 3\pi/4$.

$$\square$$

### Solucion 9

En un punto hiperbólico, $K < 0$, luego $\kappa_1$ y $\kappa_2$ tienen signos opuestos. La ecuación $II(v,v) = 0$ define dos rectas reales en $T_pS$, las direcciones asintóticas. Entre ellas, la forma cuadrática $II$ toma valores positivos en dos sectores opuestos y negativos en los otros dos, alternadamente.

$$\square$$

### Solucion 10

Si $H = 0$, entonces $\kappa_2 = -\kappa_1$, luego $K = -\kappa_1^2 \leq 0$. Si $K > 0$, debe ser $\kappa_1 = \kappa_2 = 0$, es decir, todos los puntos son planos. Pero si $S$ no es un plano, existen puntos con $K = -\kappa_1^2 < 0$. Contradicción. Por tanto, una superficie mínima con $K > 0$ everywhere debe ser un plano.

$$\square$$

### Solucion 11

En un punto parabólico con $\kappa_1 = 0$, $\kappa_2 \neq 0$, la indicatriz de Dupin satisface $\kappa_1 a^2 + \kappa_2 b^2 = \kappa_2 b^2 = \pm 1$. Esto define $b = \pm 1/\sqrt{|\kappa_2|}$, es decir, dos rectas paralelas a la dirección de $\kappa_2$.

$$\square$$

### Solucion 12

Sea $S \subset \{z > 0\} \subset \mathbb{R}^3$ contenida en el hemisferio superior de la esfera de radio $R$ centrada en el origen. Si $p \in S$, el normal orientado hacia afuera de la esfera unitaria apunta hacia el origen, y el normal de $S$ forma un ángulo agudo con el normal de la esfera. Por tanto la segunda forma fundamental de $S$ es definida positiva en cada punto, y $K > 0$.

$$\square$$

### Solucion 13

Parametrizando $X(u,v) = (u\cos v, u\sin v, \ln u)$ con $u > 0$. Se obtiene $E = 1 + 1/u^2$, $F = 0$, $G = u^2$. Calculando la segunda forma fundamental: $L = -1/(u^2\sqrt{1+1/u^2})$, $M = 0$, $N_c = 1/\sqrt{1+1/u^2}$. Luego $K = (LN_c - M^2)/(EG - F^2) = -1/u^4 < 0$ para todo $u > 0$. Todos los puntos son hiperbólicos, y $K \to 0$ cuando $u \to \infty$.

$$\square$$

### Solucion 14

En un punto con $K < 0$, $\det(d\mathcal{N}) = K < 0$, así que $d\mathcal{N}$ invierte la orientación. Por el teorema de la función inversa local, $d\mathcal{N}$ es un isomorfismo lineal. Como $K < 0$ en todas partes, $\mathcal{N}$ es un difeomorfismo local. Si no fuera inyectivo, existirían $p \neq q$ con $\mathcal{N}(p) = \mathcal{N}(q)$, y por compacidad existiría un punto crítico, contradicting $K < 0$.

$$\square$$

### Solucion 15

Sea $p$ un punto elíptico con $\kappa_1 \geq \kappa_2 > 0$. En la dirección de máxima curvatura, la superficie localmente tiene radio de curvatura $1/\kappa_1$, y la distancia geodesica a una curva de curvatura geodésica positiva se estima por comparacion con círculos en el plano. La monotonicidad de la curvatura geodésica implica que las geodesicas cortas no alcanzan puntos con $K < 0$.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1992). *Riemannian Geometry*. Birkhauser Boston.
2. do Carmo, M.P. (1994). *Differential Geometry of Curves and Surfaces*. Prentice Hall.
3. Kuehnel, W. (2006). *Differential Geometry: Curves -- Surfaces -- Manifolds*. AMS.
4. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 3. Publish or Perish.
5. Loewner, C. (1949). "Surface rotations". *Comm. Pure Appl. Math.*
6. Osserman, R. (1986). *Curvature*. Cambridge University Press.
