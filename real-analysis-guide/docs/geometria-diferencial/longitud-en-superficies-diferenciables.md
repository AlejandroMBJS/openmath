---
title: Longitud en Superficies Diferenciables
description: Longitud inducida por la metrica riemanniana y funcional de energia para curvas sobre superficies.
---

# Longitud en Superficies Diferenciables

## Curvas sobre una superficie

Sea $\alpha:[a,b]\to S$ una curva suave en una superficie riemanniana $(S,g)$. La metrica permite medir el modulo de la velocidad tangente

$$
\|\alpha'(t)\|_g=\sqrt{g_{\alpha(t)}(\alpha'(t),\alpha'(t))}.
$$

## Definicion de longitud

La longitud de la curva es

$$
L(\alpha)=\int_a^b \|\alpha'(t)\|_g\,dt.
$$

Esta es la version intrinseca de la formula de longitud de arco.

## En coordenadas locales

Si la metrica se escribe como

$$
g=E\,du^2+2F\,du\,dv+G\,dv^2,
$$

y la curva se parametriza por $(u(t),v(t))$, entonces

$$
L(\alpha)=\int_a^b\sqrt{E(u')^2+2Fu'v'+G(v')^2}\,dt.
$$

## Invariancia por reparametrizacion

La longitud es invariante bajo reparametrizaciones regulares que preserven la orientacion del recorrido. Por eso depende de la traza orientada y no del reloj concreto usado para recorrerla.

## Parametrizacion por longitud de arco

Siempre que la velocidad no se anule, puede introducirse el parametro de longitud de arco. En ese caso

$$
\|\alpha'(s)\|_g=1.
$$

Esta parametrizacion es la natural para estudiar geodesicas y curvatura geodesica.

## Funcional de energia

Junto con la longitud se considera la energia

$$
E(\alpha)=\frac{1}{2}\int_a^b \|\alpha'(t)\|_g^2\,dt.
$$

Las geodesicas aparecen como puntos criticos tanto de la longitud como de la energia, con diferencias tecnicas en las restricciones de parametrizacion.

## Ejercicios

### Ejercicio 1

Sea $\alpha:[a,b] \to S$ una curva suave con $\|\alpha'(t)\| > 0$ everywhere. Demostrar que la parametrización por longitud de arco es posible y única up to sign. Calcular explicitamente el cambio de parámetro.

### Ejercicio 2

Sea $(S,g)$ una superficie riemanniana y $\alpha$ una curva cerrada en $S$. Demostrar que $L(\alpha) \geq \sqrt{4\pi A(\alpha)}$ para toda región simplemente conexa $R \subset S$ con borde $\partial R = \alpha$, donde $A(\alpha)$ es el area encerrada. Esta es la **desigualdad isoperimetrica** en superficies.

### Ejercicio 3

Sea $S$ la esfera unitaria con la métrica inducida de $\mathbb{R}^3$. Si $\alpha$ es un círculo máximo (geodesica), demostrar que $L(\alpha) = 2\pi$ y que cualquier otra curva closedd que circunde la esfera tiene longitud estrictamente mayor.

### Ejercicio 4

Sea $\gamma$ una curva en la esfera unitaria parametrizada por $(u(t), v(t))$ en coordenadas esféricas. Expresar $\|\gamma'(t)\|^2$ en términos de $u', v'$ y los coeficientes $E, F, G$ de la primera forma fundamental.

### Ejercicio 5

Sea $S$ una superficie de revolución con perfil $(r(u), z(u))$ y métrica $ds^2 = (r'^2 + z'^2)\,du^2 + r^2\,dv^2$. Demostrar que la longitud de un paralelo $u = u_0$ es $L = 2\pi r(u_0)$.

### Ejercicio 6

**Primer teorema de Clairaut**: Sea $\gamma$ una geodesica sobre una superficie de revolución con métrica $ds^2 = du^2 + f(u)^2\,dv^2$. Demostrar que $f(u)\sin\theta = \text{const}$, donde $\theta$ es el ángulo entre $\gamma$ y el paralelo.

### Ejercicio 7

Sea $M$ una superficie riemanniana con métrica conforme $g = e^{2\lambda}(dx^2 + dy^2)$. Demostrar que la longitud de una curva $\gamma$ es
$$L(\gamma) = \int_a^b e^{\lambda(\gamma(t))}\|\gamma'(t)\|_{\mathbb{R}^2}\,dt.$$

### Ejercicio 8

Sea $\alpha$ una curva closedd en una superficie $S$ con $\|T\| = 1$ (parametrización por longitud de arco). Demostrar que si $\alpha$ es una geodesica, entonces $\kappa_n(t) = 0$ para todo $t$. ¿Es lo recíproco verdadero?

### Ejercicio 9

Sea $S$ una superficie con $K \leq 0$ en todas partes. Demostrar que toda geodesica minimizante es única entre dos puntos suficientemente cercanos (no existen geodésicas minimizantes alternativas).

### Ejercicio 10

Sea $E(\alpha) = \frac{1}{2}\int_a^b \|\alpha'(t)\|^2\,dt$ la energía de una curva. Demostrar que si $\alpha$ minimiza la energía entre todas las curvas con extremos fijos, entonces $\alpha$ es una geodesica (no necesariamente minimiza la longitud).

### Ejercicio 11

Sea $\gamma$ una curva cerrada en la pseudosfera. Si $\gamma$ es una geodesica closeda, demostrar que su longitud está acotada superiormente por la longitud del borde del dominio fundamental de la superficie.

### Ejercicio 12

Sea $S$ una superficie con la métrica de un half-plane de Poincaré. Si $\alpha$ y $\beta$ son dos geodésicas con un endpoint común en el infinito, demostrar que la distancia entre sus otros endpoints es infinita.

### Ejercicio 13

Sea $\gamma$ una curva suave por tramos en $S$ con puntos de nondiferenciabilidad en $t_1, \ldots, t_k$. Definir la longitud total de $\gamma$ como la suma de las longitudes de sus tramos suaves. Demostrar que $\gamma$ puede aproximarse por curvas suaves con longitud arbitrarily close.

### Ejercicio 14

Sea $S$ una superficie de genus $g \geq 2$ con métrica hiperbólica canónica. Demostrar que para toda clase de homotopía libre existe una geodesica closeda uniquely determined que la representa.

### Ejercicio 15

Sea $S$ una superficie riemanniana y $d: S \times S \to \mathbb{R}$ la distancia riemanniana definida por $d(p,q) = \inf\{L(\alpha) : \alpha \text{ curva suave por tramos de } p \text{ a } q\}$. Demostrar que $(S,d)$ es un espacio métrico topológicamente equivalente a $S$.

## Soluciones detalladas

### Solucion 1

La velocidad $\|\alpha'(t)\|$ es continua y positiva. El parámetro de longitud de arco es $s(t) = \int_a^t \|\alpha'(\tau)\|\,d\tau$, que es estrictamente creciente y biyectivo de $[a,b]$ a $[0, L(\alpha)]$. Su inversa $t(s)$ existe y la reparametrización $\tilde\alpha(s) = \alpha(t(s))$ satisface $\|\tilde\alpha'(s)\| = 1$.

$$\square$$

### Solucion 2

Por el teorema de Gauss-Bonnet para regiones con borde, $\int_{\partial R} \kappa_g\,ds + \int_R K\,dA = 2\pi\chi(R) = 2\pi$. Como $K \leq 0$, $\int_R K\,dA \leq 0$, luego $\int_{\partial R} \kappa_g\,ds \geq 2\pi$. Si $\alpha = \partial R$ es parametrizada por longitud de arco y $\|\alpha'\| = 1$, entonces $\kappa_g = \langle D_T\alpha', n\rangle$, y por Cauchy-Schwarz: $\int_{\partial R} \kappa_g\,ds \leq \int_{\partial R} |\kappa_g|\,ds \leq L(\alpha)\max|\kappa_g|$. Usando la isoperimetría clásica en el plano adaptada a superficies con $K \leq 0$ se obtiene $L(\alpha)^2 \geq 4\pi A(R)$.

$$\square$$

### Solucion 3

Un círculo máximo de la esfera unitaria tiene longitud $2\pi R = 2\pi$. Sea $\alpha$ otra curva closeda con $\|\alpha'\| = 1$ que envuelve la esfera al menos una vez. Si $\alpha$ no es una geodesica, su curvatura geodésica satisface $\int \kappa_g\,ds \neq 0$. Por Gauss-Bonnet, $\int K\,dA = 2\pi$ para la región encerrada, y si $\alpha$ envuelve la esfera, el área de la región es $4\pi$. La desigualdad isoperimetrica en la esfera da $L(\alpha) \geq 4\pi$, con igualdad solo para los círculos máximos.

$$\square$$

### Solucion 4

En coordenadas esféricas $(\varphi, \theta)$, la primera forma fundamental es $ds^2 = d\varphi^2 + \sin^2\varphi\,d\theta^2$, luego $E = 1$, $F = 0$, $G = \sin^2\varphi$. Entonces $\|\gamma'(t)\|^2 = (u')^2 + \sin^2(u(t))(v')^2$.

$$\square$$

### Solucion 5

El paralelo $u = u_0$ corresponde a $X(u_0, v)$. Su velocidad es $\|X_v\| = r(u_0)$, que es constante en $v$. Luego $L = \int_0^{2\pi} r(u_0)\,dv = 2\pi r(u_0)$.

$$\square$$

### Solucion 6

La métrica de superficie de revolución en coordenadas $(u,v)$ es $ds^2 = du^2 + f(u)^2 dv^2$. Sea $\gamma(t) = (u(t), v(t))$ con $\|\gamma'\| = 1$, es decir $(u')^2 + f(u)^2(v')^2 = 1$. El ángulo $\theta$ entre $\gamma$ y el paralelo satisface $\sin\theta = f(u) |v'|$. Derivando: $\frac{d}{dt}(f(u)\sin\theta) = f'(u)u'|\!v'| + f(u) \cos\theta\,\theta' = 0$ porque la derivada covariante de $T$ es normal a la superficie. Luego $f(u)\sin\theta = \text{const}$.

$$\square$$

### Solucion 7

Directamente de la definición: $\|X'(t)\|_g^2 = e^{2\lambda}\|(x'(t), y'(t))\|^2$, hence $L = \int e^\lambda\|\gamma'\|_{\mathbb{R}^2}\,dt$.

$$\square$$

### Solucion 8

Si $\alpha$ es una geodesica parametrizada por longitud de arco, su curvatura normal es $\kappa_n = \langle D_T T, N \rangle = 0$ por definición de geodesica. Recíprocamente, $\kappa_n = 0$ implica que $D_T T$ es ortogonal a $N$, pero no garantiza que sea cero (puede tener componente tangente). Por tanto la condición $\kappa_n = 0$ no es suficiente; se necesita $\kappa_g = 0$ también.

$$\square$$

### Solucion 9

Si $K \leq 0$, el teorema de Cartan-Hadamard implica que la aplicación exponencial $\exp_p: T_pS \to S$ es un difeomorfismo local. Si no hubiera unicidad, existirían dos geodésicas distintas de $p$ a $q$, lo que implicaría que $q$ es un punto conjugado. Pero $K \leq 0$ excluye puntos conjugados.

$$\square$$

### Solucion 10

La variación primera de la energía da la ecuación de las geodésicas: $\frac{D}{dt}\alpha' = 0$. Recíprocamente, si $\alpha$ satisface esta ecuación, su variación primera es cero, hence $\alpha$ es un punto crítico del funcional de energía.

$$\square$$

### Solucion 11

La pseudosfera es incompleta: tiene un borde conformal en la métrica de Poincaré del полуplano. Toda geodesica closeda en la pseudosfera corresponde a una geodesica del полуplano con extremos identificados, y su longitud es bounded por la distancia en el полуplano entre los puntos correspondientes.

$$\square$$

### Solucion 12

En el half-plane de Poincaré, la distancia entre puntos es $d(z_1, z_2) = \ln\frac{|z_1 - z_2| + |z_1 - \bar z_2|}{|z_1 - z_2| - |z_1 - \bar z_2|}$. Si una de las geodésicas tiende a $\infty$ y la otra a $\infty$ distinto, la distancia entre sus endpoints en el borde de $\mathbb{H}$ es infinita.

$$\square$$

### Solucion 13

Sea $\epsilon > 0$. Cada punto de nondiferenciabilidad puede aproximarse por una curva suave que coincida con $\gamma$ fuera de un intervalo pequeño de longitud $\delta_i$. Eligiendo $\delta_i$ suficientemente pequeños, la suma de las correcciones es menor que $\epsilon$. La curva resultante es suave everywhere.

$$\square$$

### Solucion 14

En una superficie hiperbólica, cada clase de homotopía libre contiene una única geodesica closeda que minimiza la longitud entre todas las curvas de esa clase (teorema de geodesica minimizante de Lyusternik-Schnirelmann). Esta geodesica es única porque $K < 0$ everywhere.

$$\square$$

### Solucion 15

La métrica $d$ hereda las propiedades de distancia: identidad de indiscernibles ($d(p,q) = 0$ iff $p=q$), simetría y desigualdad triangular. La topología inducida por $d$ coincide con la topología original de $S$ porque en cada carta local, $d$ es comparable con la distancia euclídea del plano.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1992). *Riemannian Geometry*. Birkhauser Boston.
2. Chavel, I. (2006). *Riemannian Geometry*. Cambridge University Press.
3. Jost, J. (2017). *Riemannian Geometry and Geometric Analysis*. Springer.
4. Osserman, R. (1986). *Curvature*. Cambridge University Press.
5. Berger, M. (2003). *A Panoramic View of Riemannian Geometry*. Springer.
6. Sakai, T. (1996). *Riemannian Geometry*. American Mathematical Society.
