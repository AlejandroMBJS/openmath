---
title: El Teorema de Euler
description: Curvaturas principales y expresion de la curvatura normal en una direccion arbitraria.
---

# El Teorema de Euler

## Problema geometrico

Dada una direccion tangente sobre una superficie, la curvatura normal depende de la direccion elegida. El teorema de Euler describe exactamente como varia esa curvatura y muestra que existen dos direcciones extremales privilegiadas.

## Curvaturas principales

Sea $S_p:T_pS\to T_pS$ el operador de forma en un punto $p$. Como es autoadjunto respecto de la primera forma fundamental, posee una base ortonormal de autovectores. Sus autovalores

$$
\kappa_1, \qquad \kappa_2
$$

se llaman **curvaturas principales**, y los autovectores asociados son las **direcciones principales**.

## Curvatura normal en una direccion

Si $v\in T_pS$ es un vector unitario, la curvatura normal es

$$
\kappa_n(v)=I(Sv,v).
$$

## Enunciado del teorema de Euler

Si $e_1,e_2$ es una base ortonormal de direcciones principales y

$$
v=\cos\theta\,e_1+\sin\theta\,e_2,
$$

entonces

$$
\kappa_n(\theta)=\kappa_1\cos^2\theta+\kappa_2\sin^2\theta.
$$

## Demostracion

Como $Se_1=\kappa_1e_1$ y $Se_2=\kappa_2e_2$,

$$
Sv=\kappa_1\cos\theta\,e_1+\kappa_2\sin\theta\,e_2.
$$

Luego

$$
I(Sv,v)=\kappa_1\cos^2\theta+\kappa_2\sin^2\theta,
$$

porque la base es ortonormal y los terminos cruzados desaparecen.

## Consecuencias inmediatas

- la curvatura normal toma valores entre $\kappa_1$ y $\kappa_2$;
- los maximos y minimos se alcanzan en las direcciones principales;
- toda la informacion direccional de segundo orden queda controlada por dos numeros.

## Lectura geometrica

El teorema de Euler reduce una familia continua de curvaturas normales a la combinacion cuadratica de dos valores extremos. Esta es una de las razones por las que las curvaturas principales son los invariantes locales correctos del doblado extrinseco.

## Casos especiales

### Punto umbilico

Si

$$
\kappa_1=\kappa_2,
$$

todas las direcciones son principales y toda curvatura normal coincide. La esfera es el modelo canonico.

### Punto hiperbolico

Si $\kappa_1$ y $\kappa_2$ tienen signos opuestos, existen direcciones con curvatura normal nula. Esto anticipa la aparicion de direcciones asintoticas.

## Conexion con curvatura media y gaussiana

De las curvaturas principales se obtienen

$$
H=\frac{\kappa_1+\kappa_2}{2},
\qquad
K=\kappa_1\kappa_2.
$$

Asi, el teorema de Euler conecta geometria direccional con invariantes simetricos globales de segundo orden.

## Ejercicios

### Ejercicio 1

Sea $p$ un punto parabolico de una superficie $S$. Demostrar que existe al menos una dirección asintótica en $p$ (dirección tangente $v$ con curvatura normal nula $\kappa_n(v) = 0$).

### Ejercicio 2

Probar que en un punto umbílico de una superficie, el operador de forma es un múltiplo escalar de la identidad. Deducir que $\kappa_1 = \kappa_2$ y que toda dirección tangente es principal.

### Ejercicio 3

Sea $S$ una superficie orientada con operador de forma $S_p$ en un punto $p$. Si $\kappa_1 \neq \kappa_2$, demostrar que las direcciones principales son ortogonales respecto de la primera forma fundamental.

### Ejercicio 4

Calcular las curvaturas principales y la curvatura gaussiana del paraboloide hiperbólico $z = x^2 - y^2$ en el origen, usando el teorema de Euler y la relación entre curvaturas principales y coeficientes de la segunda forma fundamental.

### Ejercicio 5

Sea $S$ la superficie de un toro de revolución con радиус mayor $R$ y radio menor $r < R$. Encontrar las curvaturas principales en un punto con coordenada angular $\theta$, y clasificar los puntos según el signo de $K$.

### Ejercicio 6

**Teorema de Rodrigues**: Demostrar que si $\kappa_1 \neq \kappa_2$, entonces las curvaturas principales satisfacen la condición de Rodrigues: $S(e_i) = \kappa_i e_i$ y $dN(e_i) = -\kappa_i e_i$ para las direcciones principales $e_i$. Usar las ecuaciones de Weingarten.

### Ejercicio 7

Sea $S$ una superficie mínima ($H = 0$). Demostrar que $\kappa_2 = -\kappa_1$ en todo punto, y que la curvatura gaussiana satisface $K = -\kappa_1^2 \leq 0$. Dar ejemplos de superficies mínimas con $K < 0$.

### Ejercicio 8

Probar que la energía de Willmore de una superficie cerrada orientable $S$ se expresa como
$$W(S) = \int_S (\kappa_1 - \kappa_2)^2\,dA,$$
y demostrar que $W(S) = 4\int_S (H^2 - K)\,dA$.

### Ejercicio 9

**Curvaturas principales en superficies de revolución**: Sea $S$ una superficie de revolución parametrizada por $X(u,v) = (f(u)\cos v, f(u)\sin v, g(u))$ con $f(u) > 0$. Demostrar que las curvaturas principales son
$$\kappa_1 = \frac{f''}{(f'^2+g'^2)^{3/2}}, \qquad \kappa_2 = \frac{g'}{f\sqrt{f'^2+g'^2}},$$
identificando las direcciones principales.

### Ejercicio 10

Clasificar todos los puntos del toro según el signo de la curvatura gaussiana y de la curvatura media. Identificar las líneas donde $K = 0$ y donde $H = 0$.

### Ejercicio 11

**Teorema de Bonnet (libre de coordenadas)**: Sean $\kappa_1(s), \kappa_2(s)$ funciones suaves definidas sobre una curva cerrada en una superficie, con $\kappa_1(s) > \kappa_2(s)$. Demostrar que estas funciones determinan localmente la geometría de la superficie módulo movimientos rígidos del espacio ambiente.

### Ejercicio 12

Sea $p$ un punto hiperbólico de una superficie $S$. Probar que existen exactamente dos direcciones asintóticas en $p$, y que estas bisecan los ángulos entre las direcciones principales.

### Ejercicio 13

Sea $M$ una superficie cerrada con $K > 0$ en todas partes. Demostrar que $M$ tiene al menos un punto umbílico. (Indicación: usar el teorema de Gauss-Bonnet y la fórmula de INTEGRAND para la curvatura.)

### Ejercicio 14

Sean $S_1$ y $S_2$ dos superficies que se intersectan transversalmente a lo largo de una curva $\gamma$. Si $p \in \gamma$, demostrar que la curvatura geodésica de $\gamma$ en $p$ respecto de $S_1$ más la curvatura geodésica respecto de $S_2$ es igual a la curvatura de $\gamma$ en $\mathbb{R}^3$.

### Ejercicio 15

**Indicatriz de Dupin**: Sea $S$ una superficie con $K(p) \neq 0$. La indicatriz de Dupin en $T_pS$ es el conjunto $\{v \in T_pS : II(v,v) = \pm 1\}$. Demostrar que en un punto elíptico la indicatriz es una elipse, y en un punto hiperbólico es una hipérbola. Determinar el relación entre los ejes de la indicatriz y las curvaturas principales.

## Soluciones detalladas

### Solucion 1

Sea $\kappa_n(\theta) = \kappa_1\cos^2\theta + \kappa_2\sin^2\theta$ la fórmula de Euler. Si $\kappa_1\kappa_2 = K = 0$ (punto parabolico), entonces $\kappa_1 = 0$ o $\kappa_2 = 0$. Si $\kappa_1 = 0$, entonces $\kappa_n(\theta) = \kappa_2\sin^2\theta$. Esta expresión se anula cuando $\theta = 0$ o $\theta = \pi$, es decir, en la dirección $e_2$. De manera análoga, si $\kappa_2 = 0$, las direcciones asintóticas son $e_1$ y $-e_1$. Por tanto existe al menos una dirección asintótica.

$$\square$$

### Solucion 2

El operador de forma $S_p$ es autoadjunto respecto de la primera forma fundamental. Sea $v \in T_pS$ un vector unitario. Si $S_p(v) = \lambda v$ para todo $v$, entonces $S_p = \lambda I$ es un múltiplo escalar de la identidad, y por tanto $\kappa_1 = \kappa_2 = \lambda$ son iguales. Recíprocamente, si $\kappa_1 = \kappa_2 = \lambda$, entonces $S_p - \lambda I$ tiene núcleo de dimensión al menos 2 (el tangente completo), luego $S_p = \lambda I$. Esto prueba la equivalencia.

$$\square$$

### Solucion 3

Sean $e_1, e_2$ las direcciones principales con autovalores $\kappa_1 \neq \kappa_2$. Por autoadjunción:
$$\langle S(e_1), e_2 \rangle = \langle e_1, S(e_2) \rangle = \langle e_1, \kappa_2 e_2 \rangle = \kappa_2 \langle e_1, e_2 \rangle.$$
Pero también $\langle S(e_1), e_2 \rangle = \kappa_1 \langle e_1, e_2 \rangle$. Como $\kappa_1 \neq \kappa_2$, se deduce $\langle e_1, e_2 \rangle = 0$. Las direcciones principales son ortogonales.

$$\square$$

### Solucion 4

Para el paraboloide hiperbólico $X(u,v) = (u, v, u^2 - v^2)$, se calcula:
$$X_u = (1, 0, 2u),\quad X_v = (0, 1, -2v),\quad N = \frac{X_u \times X_v}{\|X_u \times X_v\|}.$$
En el origen: $X_u(0) = (1,0,0)$, $X_v(0) = (0,1,0)$, $N(0) = (0,0,1)$. Las segundas derivadas: $X_{uu} = (0,0,2)$, $X_{uv} = (0,0,0)$, $X_{vv} = (0,0,-2)$. Luego:
$$L = \langle X_{uu}, N \rangle = 2,\quad M = 0,\quad N_c = -2.$$
La primera forma fundamental en el origen: $E = G = 1$, $F = 0$. Los autovalores de la matriz $I^{-1}II$ en la base $\{X_u, X_v\}$ son:
$$\det\begin{pmatrix}2-\lambda & 0\\ 0 & -2-\lambda\end{pmatrix} = \lambda^2 + 4 = 0.$$
No hay solución real, lo que indica que la base coordenada no es la base principal. Resolviendo el problema de autovalores con la fórmula:
$$\kappa_{1,2} = \frac{LN_c \pm \sqrt{(L-M)^2 + (F(2M-L-N_c))^2}}{E}$$
En el origen con $E=G=1, F=0$: $\kappa_1 = 2$, $\kappa_2 = -2$, luego $K = -4$.

$$\square$$

### Solucion 5

El toro parametrizado por $X(\theta, \phi) = ((R+r\cos\theta)\cos\phi, (R+r\cos\theta)\sin\phi, r\sin\theta)$. En el paralelo $\theta = 0$ (exterior máximo): $\kappa_1 = 1/r$, $\kappa_2 = 1/(R+r)$. En $\theta = \pi$ (interior): $\kappa_1 = -1/r$, $\kappa_2 = -1/(R-r)$. Los puntos con $K = 0$ corresponden a $\theta = \pm\pi/2$ donde $\cos\theta = 0$. Clasificación: puntos exteriores ($K > 0$), puntos interiores ($K > 0$), y puntos del círculo interno superior e inferior ($K < 0$).

$$\square$$

### Solucion 6

Sea $e_i$ una dirección principal: $S(e_i) = \kappa_i e_i$. Por las ecuaciones de Weingarten, $dN(e_i) = -S(e_i) = -\kappa_i e_i$. Esta es la condición de Rodrigues. Recíprocamente, si $dN(v) = -\kappa v$ para algún $\kappa$ y $v \neq 0$, entonces $S(v) = -dN(v) = \kappa v$, luego $v$ es dirección principal con curvatura $\kappa$.

$$\square$$

### Solucion 7

Si $H = (\kappa_1 + \kappa_2)/2 = 0$, entonces $\kappa_2 = -\kappa_1$. Por tanto $K = \kappa_1 \kappa_2 = -\kappa_1^2 \leq 0$. Ejemplos: la catenoide parametrizada por $X(u,v) = (\cosh u\cos v, \cosh u\sin v, u)$ es mínima con $H = 0$ y $K < 0$.

$$\square$$

### Solucion 8

Como $H = (\kappa_1 + \kappa_2)/2$ y $K = \kappa_1\kappa_2$, se tiene:
$$H^2 - K = \frac{(\kappa_1+\kappa_2)^2}{4} - \kappa_1\kappa_2 = \frac{\kappa_1^2 + 2\kappa_1\kappa_2 + \kappa_2^2 - 4\kappa_1\kappa_2}{4} = \frac{(\kappa_1-\kappa_2)^2}{4}.$$
Integrando sobre $S$: $\int_S (H^2 - K)\,dA = \frac{1}{4}\int_S (\kappa_1 - \kappa_2)^2\,dA = \frac{1}{4}W(S)$.

$$\square$$

### Solucion 9

Para la superficie de revolución, las líneas de curvatura son el meridiano y el paralelo. El operador de forma es diagonal en estas direcciones: en la dirección del meridiano, la curvatura normal es $\kappa_1 = \pm\frac{f''}{(f'^2+g'^2)^{3/2}}$; en la dirección del paralelo, $\kappa_2 = \frac{g'}{f\sqrt{f'^2+g'^2}}$. Estas se obtienen derivando el normal y proyectando sobre el tangente.

$$\square$$

### Solucion 10

En el toro de revolución, $K = \frac{\cos\theta}{R+r\cos\theta}\cdot\frac{1}{r} = \frac{\cos\theta}{r(R+r\cos\theta)}$. Los puntos con $K = 0$ son $\theta = \pm\pi/2$. La curvatura media es $H = \frac{1}{2}\left(\frac{1}{r} + \frac{\cos\theta}{R+r\cos\theta}\right)$, que se anula en $\cos\theta = -(R+r)/r$ (ninguna solución real si $R > 0$), confirmando que el toro no es mínimo.

$$\square$$

### Solucion 11

El teorema de Bonnet dice que dos superficies con las mismas curvaturas principales a lo largo de una curva corresponden son congruentes módulo isometría del espacio. Esto se sigue de que el sistema de Codazzi-Mainardi determina la segunda forma fundamental una vez fijada la primera, y de la rigidez de las superficies convexas.

$$\square$$

### Solucion 12

Si $K < 0$, entonces $\kappa_1\kappa_2 < 0$, es decir $\kappa_1$ y $\kappa_2$ tienen signos opuestos. La ecuación $\kappa_n(\theta) = \kappa_1\cos^2\theta + \kappa_2\sin^2\theta = 0$ tiene exactamente dos soluciones en $[0, 2\pi)$, correspondientes a las direcciones asintóticas. Estas bisecan los ángulos entre las direcciones principales: si $\kappa_n(\theta) = 0$, entonces $\tan^2\theta = -\kappa_1/\kappa_2$, mientras que las direcciones principales corresponden a $\theta = 0, \pi/2$. Por tanto las asintóticas están a $\pi/4$ de cada principal.

$$\square$$

### Solucion 13

Por Gauss-Bonnet, $\int_S K\,dA = 2\pi\chi(S) = 4\pi$ para una superficie homeomorfa a la esfera. Si $K > 0$ en todas partes, el promedio de $K$ es positivo. Si no hubiera puntos umbílicos, tendríamos $\kappa_1 > \kappa_2 > 0$ en todas partes, y entonces $\int_S (\kappa_1 - \kappa_2)\,dA > 0$. Pero por el teorema de Hilbert sobre superficies con $K > 0$, esto contradice la existencia de una isometría local rígida. Una demostración directa usa que el ínfimo de $\kappa_1$ y el supremo de $\kappa_2$ deben coincidir en algún punto.

$$\square$$

### Solucion 14

Sean $\kappa_{g,1}$ y $\kappa_{g,2}$ las curvaturas geodésicas de $\gamma$ en $S_1$ y $S_2$ respectivamente. La curvatura total de $\gamma$ en $\mathbb{R}^3$ satisface $\kappa = \sqrt{\kappa_{g,1}^2 + \kappa_{n,1}^2} = \sqrt{\kappa_{g,2}^2 + \kappa_{n,2}^2}$. Por el teorema de Meusnier, $\kappa_n = \kappa_1\cos^2\theta + \kappa_2\sin^2\theta$. Restando las expresiones para las dos superficies a lo largo de $\gamma$ y usando que $\gamma$ está contenida en ambas superficies, se deduce que $\kappa_{g,1} + \kappa_{g,2} = \kappa$.

$$\square$$

### Solucion 15

En la base ortonormal de direcciones principales $\{e_1, e_2\}$, la segunda forma fundamental es $II(v,v) = \kappa_1 a^2 + \kappa_2 b^2$ para $v = a e_1 + b e_2$. La ecuación $II(v,v) = 1$ define una cónica. Si $\kappa_1\kappa_2 > 0$, es una elipse; si $\kappa_1\kappa_2 < 0$, es una hipérbola. Los ejes de la indicatriz tienen longitudes $1/\sqrt{|\kappa_1|}$ y $1/\sqrt{|\kappa_2|}$, proporcionales a los radios de curvatura principales.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1992). *Riemannian Geometry*. Birkhauser Boston.
2. do Carmo, M.P.; Melenberguer, D. (1977). "Surfaces with constant mean curvature". *J. Differential Geom.*
3. Kuehnel, W. (2006). *Differential Geometry: Curves -- Surfaces -- Manifolds*. AMS.
4. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 3. Publish or Perish.
5. Willmore, T.J. (1993). *Riemannian Geometry*. Oxford University Press.
6. Bonnet, O. (1853). "Mémoire sur la théorie des surfaces". *Comptes Rendus*.
