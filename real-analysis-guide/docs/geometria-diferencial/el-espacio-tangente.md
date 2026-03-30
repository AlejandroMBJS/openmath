---
title: El Espacio Tangente
description: Definiciones equivalentes del espacio tangente, bases inducidas por parametrizaciones y derivaciones sobre funciones suaves.
---

# El Espacio Tangente

## Motivacion

En una superficie, la direccion tangente en un punto ya no es una recta sino un plano. Ese plano se formaliza como el espacio tangente.

## Definicion por curvas

Sea $S$ una superficie diferenciable y $p\in S$. Dos curvas suaves

$$
\alpha,\beta:(-\varepsilon,\varepsilon)\to S
$$

con $\alpha(0)=\beta(0)=p$ se consideran equivalentes si, en alguna carta local $(U,\varphi)$ con $p\in U$,

$$
(\varphi\circ\alpha)'(0)=(\varphi\circ\beta)'(0).
$$

La clase de equivalencia representa un vector tangente en $p$.

## Definicion por derivaciones

Equivalentemente, un vector tangente puede definirse como una derivacion

$$
D:C^\infty_p(S)\to\mathbb{R}
$$

lineal y satisfaciendo la regla de Leibniz

$$
D(fg)=f(p)D(g)+g(p)D(f).
$$

Estas dos definiciones son equivalentes.

## Espacio tangente

El conjunto de todos los vectores tangentes en $p$ forma un espacio vectorial real de dimension dos, denotado por

$$
T_pS.
$$

## Base inducida por una parametrizacion

Si $X:V\to S$ es una parametrizacion local y $p=X(u_0,v_0)$, entonces

$$
X_u(u_0,v_0), \qquad X_v(u_0,v_0)
$$

forman una base de $T_pS$ cuando la superficie esta inmersa en $\mathbb{R}^3$.

## Interpretacion en R3

Si $S=F^{-1}(c)$ con $\nabla F(p)\neq 0$, entonces

$$
T_pS=\{v\in\mathbb{R}^3: \langle \nabla F(p),v\rangle=0\}.
$$

En la esfera unitaria esto significa que el plano tangente es perpendicular al radio.

## Diferencial de una aplicacion

Si $F:S\to M$ es suave, su diferencial en $p$ es la aplicacion lineal

$$
dF_p:T_pS\to T_{F(p)}M.
$$

Este operador es el objeto lineal de primer orden asociado a una aplicacion suave.

## Cierre

El espacio tangente reemplaza la intuicion elemental de tangente por una nocion lineal intrinseca de dimension dos. Sobre el se construyen la metrica, la conexidad, la curvatura y toda la mecanica diferencial de las superficies.

## Ejercicios

### Ejercicio 1

Sea $S = \{(x,y,z) \in \mathbb{R}^3 : x^2+y^2+z^2 = 1\}$. Calcular $T_pS$ para $p = (1,0,0)$. Verificar que $T_pS = \{(a,b,c) \in \mathbb{R}^3 : a = 0\}$.

### Ejercicio 2

Sea $F: S \to \tilde S$ suave entre superficies. Demostrar que $dF_p: T_pS \to T_{F(p)}\tilde S$ satisface la regla de la cadena.

### Ejercicio 3

Sea $S$ una superficie diferenciable y $X \in T_pS$ un vector tangente. Demostrar que existe una curva $\alpha: (-\epsilon, \epsilon) \to S$ con $\alpha(0) = p$ y $\alpha'(0) = X$.

### Ejercicio 4

Sea $S$ una superficie con $F = 0$ en coordenadas. Si $X = aX_u + bX_v$, calcular $[X_u, X_v] = X_u(X_v) - X_v(X_u)$ en terminos de $a,b$ y los simbolos de Christoffel.

### Ejercicio 5

Sea $p \in S$ y $X, Y \in T_pS$. Demostrar que existe un campo vectorial suave $V$ en una vecindad de $p$ con $V(p) = X$ y $W(p) = Y$ para cualquier $Y \in T_pS$.

### Ejercicio 6

Sea $S$ la grafica de $f(x,y)$. Describir $T_pS$ en terminos del gradiente de $f$.

### Ejercicio 7

Sea $S \subset \mathbb{R}^3$ una superficie con campo normal unitario $N$. Si $v \in T_pS$, demostrar que $S(v) = -dN_p(v)$ es el operador de forma.

### Ejercicio 8

Sea $F: S \to \mathbb{R}$ suave. Si $dF_p(v) = 0$ para todo $v \in T_pS$, demostrar que $p$ es un punto crtico de $F$.

### Ejercicio 9

Sea $S$ una superficie con la metrica inducida. Si $X \in T_pS$ es unitario, demostrar que la geodesica $\gamma$ con $\gamma(0) = p$ y $\gamma'(0) = X$ satisface $\gamma'(t) \in T_{\gamma(t)}S$ para todo $t$.

### Ejercicio 10

Sea $S$ una superficie diferenciable y $\omega$ una 1-forma diferencial en $S$. Demostrar que $\omega_p(v) = 0$ para todo $v \in T_pS$ iff $\omega$ se anula en $p$.

### Ejercicio 11

Sea $S$ una superficie orientable con normal $N$. Demostrar que $(X_u, X_v, N)$ forma una base positively orientada de $\mathbb{R}^3$ iff $\det(X_u, X_v, N) > 0$.

### Ejercicio 12

Sea $p \in S$ y $X \in T_pS$ un vector tangente no nulo. Demostrar que existe una unica geodesica $\gamma$ con $\gamma(0) = p$ y $\gamma'(0) = X$.

### Ejercicio 13

Sea $S$ una superficie y $f: S \to \mathbb{R}$ suave. Si $\nabla f(p)$ denota el gradiente de $f$ en $p$, demostrar que $\langle \nabla f(p), v\rangle = df_p(v)$ para todo $v \in T_pS$.

### Ejercicio 14

Sea $S$ una superficie inmersa en $\mathbb{R}^3$. Si $X, Y$ son campos vectoriales tangentes, demostrar que $[X,Y]$ es tangente a $S$.

### Ejercicio 15

Sea $S$ una superficie diferenciable. Demostrar que la union de todos los espacios tangentes $\bigcup_{p \in S} T_pS$ no es homeomorfa a ningun abierto de $\mathbb{R}^3$ (el fibrado tangente $TS$ es no trivial en general).

## Soluciones detalladas

### Solucion 1

Como $S = F^{-1}(1)$ con $F(x,y,z) = x^2+y^2+z^2$, se tiene $T_pS = \{\nabla F(p)\}^\perp = \{(a,b,c) : 2a = 0\} = \{(0,b,c) : b,c \in \mathbb{R}\}$.

$$\square$$

### Solucion 2

$d(F \circ G)_p = dF_{G(p)} \circ dG_p$ es la regla de la cadena para el diferencial de aplicaciones entre variedades.

$$\square$$

### Solucion 3

Sea $(U, \varphi)$ una carta con $\varphi(p) = 0$. Definiendo $\beta(t) = \varphi^{-1}(tX_{\text{coords}})$ y $\alpha = X \circ \beta$, se obtiene una curva con la propiedad deseada.

$$\square$$

### Solucion 4

$[X_u, X_v] = X_u(X_v) - X_v(X_u)$. Usando la expresion $X_u = \partial_u$ y $X_v = \partial_v$ en coordenadas, se obtiene $[X_u, X_v] = X_u(bX_v) - X_v(aX_u) = a[X_u, X_v]_{comp} + b[X_u, X_v]_{comp} = 0$ si los simbolos de Christoffel son simetricos (superficies son varieties Frobenius).

$$\square$$

### Solucion 5

Sea $(U, \varphi)$ carta con $\varphi(p) = 0$. Definiendo $X_{\text{coords}} = d\varphi^{-1}(X)$, $Y_{\text{coords}} = d\varphi^{-1}(Y)$ y extendiendolos como campos constantes en la carta, luego usando particiones de la unidad se globalizan.

$$\square$$

### Solucion 6

Parametrizando $X(u,v) = (u,v,f(u,v))$, el plano tangente en $(u_0,v_0)$ es $\{(u_0,v_0,f(u_0,v_0)) + a(1,0,f_u) + b(0,1,f_v)\} = \{(x,y,z) : z - f(x_0,y_0) = f_u(x_0,y_0)(x-x_0) + f_v(x_0,y_0)(y-y_0)\}$.

$$\square$$

### Solucion 7

El operador de forma $S$ se define por $II(v,w) = I(Sv, w)$. Como $dN_p(v)$ es tangente, se puede escribir $dN_p(v) = -S(v)$. Esta definicion es equivalente a la usual.

$$\square$$

### Solucion 8

Si $dF_p(v) = 0$ para todo $v \in T_pS$, entonces en coordenadas locales, las derivadas parciales de $F$ se anulan en $p$, lo que significa que $p$ es un punto crtico de $F$.

$$\square$$

### Solucion 9

Por la definicion de geodesica, $\gamma$ satisface $D_T\gamma' = 0$, es decir, la derivada covariante se anula. Esto implica que $\gamma'$ permanece paralelo y de norma constante. Como $\gamma'(0) \in T_pS$, por параллельный transporte se mantiene en el espacio tangente.

$$\square$$

### Solucion 10

Si $\omega_p(v) = 0$ para todo $v \in T_pS$, en coordenadas locales $\omega = a\,du + b\,dv$ con $a(p) = b(p) = 0$, hence $\omega$ se anula en $p$.

$$\square$$

### Solucion 11

$\det(X_u, X_v, N) = \langle X_u \times X_v, N\rangle = \|X_u \times X_v\| > 0$ iff $N$ apunta en la direccion de $X_u \times X_v$, es decir, iff $(X_u, X_v, N)$ es positively orientada.

$$\square$$

### Solucion 12

Por el teorema de existencia y unicidad de EDOs, la ecuacion geodesica $\ddot\gamma^k + \sum_{i,j}\Gamma_{ij}^k\dot\gamma^i\dot\gamma^j = 0$ con condiciones iniciales $\gamma(0) = p$, $\dot\gamma(0) = X$ tiene solucion unica.

$$\square$$

### Solucion 13

Por definicion, $\nabla f(p)$ es el unico vector tal que $\langle \nabla f(p), v\rangle = df_p(v)$ para todo $v \in T_pS$. Esta es la definicion covariante del gradiente en variedades riemannianas.

$$\square$$

### Solucion 14

Para $X, Y$ campos tangentes, $[X,Y]$ se define como $XY(f) - YX(f)$ para funciones suaves $f$. Si $f$ se anula en $S$, es decir, si $f = 0$ identically, entonces $XY(f) = YX(f) = 0$, hence $[X,Y](f) = 0$. Esto prueba que $[X,Y]$ es tangente.

$$\square$$

### Solucion 15

El fibrado tangente $TS$ de una superficie $S$ es una 4-variedad. Si $TS$ fuera homeomorfo a un abierto de $\mathbb{R}^3$, su dimension topologica seria 3. Pero $\dim TS = 4$ (dimension de la variedad + dimension del espacio tangente). Ademas, para $S = S^2$, $TS$ es homeomorfo al espacio proyectivo real $\mathbb{RP}^3$, que no es homeomorfo a ningun abierto de $\mathbb{R}^3$.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1992). *Riemannian Geometry*. Birkhauser Boston.
2. Lee, J.M. (2018). *Introduction to Riemannian Manifolds*. Springer.
3. Warner, F.W. (1983). *Foundations of Differentiable Manifolds and Lie Groups*. Springer.
4. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 1. Publish or Perish.
