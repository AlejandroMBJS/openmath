---
title: Longitud de Arco y Angulo entre Curvas
description: Longitud de arco, invariancia por reparametrizacion, distancia intrinseca y angulo entre curvas regulares.
---

# Longitud de Arco y Angulo entre Curvas

## Longitud como funcional geometrico

Sea $\gamma:[a,b]\to\mathbb{R}^n$ una curva de clase $C^1$. Su longitud se define por

$$
L(\gamma)=\int_a^b \|\gamma'(t)\|\,dt.
$$

Esta formula es el limite de las sumas de longitudes de poligonales inscritas y constituye el primer invariante intrinseco de una curva regular.

## Formula integral de la longitud

Si $\gamma$ es $C^1$, entonces es rectificable y

$$
L(\gamma)=\sup_\Pi \sum_{j=1}^m \|\gamma(t_j)-\gamma(t_{j-1})\|=
\int_a^b \|\gamma'(t)\|\,dt.
$$

La igualdad identifica el contenido geometrico de la longitud con una integral de rapidez.

## Invariancia por reparametrizacion

Si $\widetilde\gamma=\gamma\circ\phi$ con $\phi:[c,d]\to[a,b]$ difeomorfismo regular, entonces

$$
L(\widetilde\gamma)=L(\gamma).
$$

### Prueba

Usando la regla de la cadena y el cambio de variable se obtiene

$$
\int_c^d \|\widetilde\gamma'(s)\|\,ds=
\int_c^d \|\gamma'(\phi(s))\|\,|\phi'(s)|\,ds=
\int_a^b \|\gamma'(t)\|\,dt.
$$

## Funcion longitud de arco

Fijado $t_0$, definimos

$$
s(t)=\int_{t_0}^t \|\gamma'(u)\|\,du.
$$

En curvas regulares, $s$ es estrictamente monotona. Por eso puede utilizarse como parametro intrinseco.

## Distancia sobre la curva

Si la curva es simple, la longitud entre dos puntos de la traza determinada por parametros $t_1<t_2$ es

$$
d_\gamma(t_1,t_2)=\int_{t_1}^{t_2}\|\gamma'(u)\|\,du.
$$

Esta distancia intrinseca no coincide, en general, con la distancia euclidea entre los puntos extremos.

### Ejemplo

En una semicircunferencia de radio $R$, la longitud entre extremos vale $\pi R$, mientras que la distancia euclidea vale $2R$.

## Angulo entre curvas

Sean $\alpha$ y $\beta$ dos curvas regulares con

$$
\alpha(0)=\beta(0)=p.
$$

El angulo entre ellas en $p$ se define por

$$
\cos\theta=
\frac{\langle \alpha'(0),\beta'(0)\rangle}{\|\alpha'(0)\|\,\|\beta'(0)\|}.
$$

## Invariancia del angulo

Si sustituimos $\alpha$ y $\beta$ por reparametrizaciones regulares, el angulo no cambia, porque los vectores tangentes solo se multiplican por escalares no nulos que desaparecen al normalizar.

## Curvas ortogonales

Diremos que dos curvas se cortan ortogonalmente si

$$
\langle \alpha'(0),\beta'(0)\rangle=0.
$$

Esta situacion aparece en sistemas de coordenadas ortogonales y mas adelante en lineas de curvatura.

## Longitud en graficas planas

Si $\gamma(x)=(x,f(x))$ con $f\in C^1([a,b])$, entonces

$$
L(\gamma)=\int_a^b \sqrt{1+(f'(x))^2}\,dx.
$$

## Longitud en coordenadas polares

Para una curva plana $r=r(\theta)$,

$$
\gamma(\theta)=(r(\theta)\cos\theta,r(\theta)\sin\theta)
$$

y se obtiene

$$
L=\int_{\theta_1}^{\theta_2}\sqrt{r(\theta)^2+(r'(\theta))^2}\,d\theta.
$$

## Desigualdad basica

Para toda curva que une $p$ con $q$,

$$
\|p-q\|\le L(\gamma).
$$

La igualdad caracteriza a los segmentos rectos recorridos sin retrocesos.

## Cierre

La longitud de arco convierte una parametrizacion en objeto metrico y permite elegir un parametro intrinseco. El angulo entre curvas surge del producto interno de sus tangentes y prepara el terreno para las nociones de curvatura y metrica inducida sobre superficies.

## Ejercicios

### Ejercicio 1

Sea $\gamma(t) = (a\cos t, a\sin t, bt)$. Calcular la longitud entre $t = 0$ y $t = 2\pi$. Verificar que $\|\gamma'\| = \sqrt{a^2 + b^2}$ es constante.

### Ejercicio 2

Sea $\gamma(x) = (x, f(x))$ con $f \in C^1([a,b])$. Demostrar que la longitud satisface la cota $L \geq |b-a|$ con igualdad iff $f$ es constante.

### Ejercicio 3

Sea $\alpha(t) = (t, 0)$ y $\beta(t) = (0, t)$. Calcular el angulo entre ellas en $t = 0$ usando la definicion mediante el producto interno.

### Ejercicio 4

Sea $\gamma$ una curva $C^1$ en $\mathbb{R}^n$. Demostrar que $L(\gamma) = \sup_{\Pi} \sum_{j=1}^m \|\gamma(t_j) - \gamma(t_{j-1})\|$, donde el supremo se toma sobre todas las particiones $\Pi$ de $[a,b]$.

### Ejercicio 5

Sea $\gamma(t) = (t, t^2)$. Parametrizar por longitud de arco y encontrar la funcion $s(t)$.

### Ejercicio 6

Sea $\gamma$ una curva en coordenadas polares $r = r(\theta)$. Demostrar que la longitud entre $\theta_1$ y $\theta_2$ es $\int_{\theta_1}^{\theta_2} \sqrt{r(\theta)^2 + r'(\theta)^2}\,d\theta$.

### Ejercicio 7

Sea $\gamma$ una helice circular $(a\cos t, a\sin t, bt)$. Calcular la distancia geodesica entre dos puntos sobre la helice y compararla con la distancia euclidea.

### Ejercicio 8

Sea $\alpha$ una curva cerrada simple con $\|\alpha'\| = 1$. Si $\alpha$ es geodesica sobre una superficie $S$, demostrar que $\|\alpha''(t)\| = |\kappa_n(t)|$.

### Ejercicio 9

Sea $\gamma(t) = (e^t\cos t, e^t\sin t)$. Calcular la longitud entre $t = 0$ y $t = 1$.

### Ejercicio 10

Sea $\gamma$ una curva con $\|\gamma'(t)\| = f(t) > 0$. Demostrar que la reparametrizacion por longitud de arco es $\tilde\gamma(s) = \gamma(\phi^{-1}(s))$ con $\phi(t) = \int_0^t f(u)\,du$.

### Ejercicio 11

Sea $\alpha$ una curva suave con $\alpha(0) = \alpha(1) = p$. Si $\|\alpha'(t)\| \leq M$, demostrar que $\|p - q\| \leq M$ para todo $q$ en la traza de $\alpha$.

### Ejercicio 12

Sea $\gamma$ una curva en $\mathbb{R}^3$ con $\|\gamma'\| = 1$. Si $\gamma$ es geodesica en una superficie $S$, demostrar que $\gamma''(t)$ es paralelo al normal $N$ de $S$.

### Ejercicio 13

Sea $\gamma$ una curva con $\gamma'(t) \neq 0$. Demostrar que $\gamma$ es localmente inyectiva.

### Ejercicio 14

Sea $\alpha$ una curva cerrada simple en el plano con $\|\alpha'\| = 1$. Si $\alpha$ esta parametrizada por longitud de arco, demostrar que $\int_0^L \|\alpha''\| \,ds = \int_0^L \kappa\,ds = 2\pi$.

### Ejercicio 15

Sea $\gamma(t) = (t^3, t^2)$. Calcular la longitud entre $t = -1$ y $t = 1$. Verificar que la curva es regular fuera de $t = 0$.

## Soluciones detalladas

### Solucion 1

$\gamma'(t) = (-a\sin t, a\cos t, b)$, hence $\|\gamma'\| = \sqrt{a^2\sin^2 t + a^2\cos^2 t + b^2} = \sqrt{a^2 + b^2}$. La longitud es $\int_0^{2\pi} \sqrt{a^2 + b^2}\,dt = 2\pi\sqrt{a^2 + b^2}$.

$$\square$$

### Solucion 2

Por la desigualdad de Cauchy-Schwarz: $L = \int_a^b \sqrt{1+f'(x)^2}\,dx \geq \int_a^b 1\,dx = b-a$. La igualdad ocurre iff $f'(x) = 0$ para todo $x$, es decir, $f$ es constante.

$$\square$$

### Solucion 3

$\alpha'(0) = (1, 0)$, $\beta'(0) = (0, 1)$. El angulo $\theta$ satisface $\cos\theta = \langle (1,0), (0,1) \rangle / (1 \cdot 1) = 0$, hence $\theta = \pi/2$.

$$\square$$

### Solucion 4

Por el teorema del valor medio, para cada subintervalo existe $t_j^*$ con $\|\gamma(t_j) - \gamma(t_{j-1})\| = \|\gamma'(t_j^*)\|(t_j - t_{j-1})$. Luego $\sum \|\gamma(t_j) - \gamma(t_{j-1})\| = \sum \|\gamma'(t_j^*)\|(t_j - t_{j-1})$, y tomando el lmite sobre particiones cada vez mas finas se obtiene la integral.

$$\square$$

### Solucion 5

$s(t) = \int_0^t \sqrt{1+4u^2}\,du = \frac{1}{4}(2t\sqrt{1+4t^2} + \mathrm{arsinh}(2t))$.

$$\square$$

### Solucion 6

Parametrizando $\gamma(\theta) = (r(\theta)\cos\theta, r(\theta)\sin\theta)$, se tiene $\gamma'(\theta) = (r'\cos\theta - r\sin\theta, r'\sin\theta + r\cos\theta)$, hence $\|\gamma'\| = \sqrt{r^2 + r'^2}$.

$$\square$$

### Solucion 7

La distancia geodesica a lo largo de la helice es $L = \sqrt{a^2+b^2}|t_2 - t_1|$. La distancia euclidea es $\|(a\cos t_2, a\sin t_2, bt_2) - (a\cos t_1, a\sin t_1, bt_1)\|$. Como la helice se enrolla alrededor del eje $z$, la distancia geodesica es estrictamente mayor que la euclidea para $t_2 \neq t_1$.

$$\square$$

### Solucion 8

Si $\alpha$ es geodesica sobre $S$, entonces $D_T T = 0$. Como $\|\alpha'\| = 1$, la aceleracion es $\alpha'' = \kappa_n N + \kappa_g T_S$ donde $T_S$ es la componente tangencial a $S$. Si $S$ es el plano, $\alpha'' = \kappa_n N$, hence $\|\alpha''\| = |\kappa_n|$.

$$\square$$

### Solucion 9

$\gamma'(t) = (e^t\cos t - e^t\sin t, e^t\sin t + e^t\cos t)$, hence $\|\gamma'\| = \sqrt{2}e^t$. La longitud es $\int_0^1 \sqrt{2}e^t\,dt = \sqrt{2}(e - 1)$.

$$\square$$

### Solucion 10

La funcion $s(t) = \int_0^t f(u)\,du$ es estrictamente creciente, hence invertible. La reparametrizacion $\tilde\gamma(s) = \gamma(\phi^{-1}(s))$ tiene $\|\tilde\gamma'(s)\| = \|\gamma'(t)\|/\phi'(t) = f(t)/f(t) = 1$, es decir, esta parametrizada por longitud de arco.

$$\square$$

### Solucion 11

Por la desigualdad triangular: $\|p - q\| \leq \int_0^1 \|\alpha'(t)\|\,dt \leq M$.

$$\square$$

### Solucion 12

Si $\gamma$ es geodesica sobre $S$, entonces $D_T T = 0$. Descomponiendo $\gamma'' = D_T T + \langle \gamma'', N \rangle N + \langle \gamma'', T \rangle T$, se obtiene que la componente normal es $\kappa_n N$, y la tangencial es cero. Hence $\gamma''(t)$ es paralelo a $N$.

$$\square$$

### Solucion 13

Como $\gamma'(t) \neq 0$, por continuidad existe una vecindad donde $\|\gamma'\| > 0$. En esa vecindad, $\gamma$ es inyectiva porque si $\gamma(t_1) = \gamma(t_2)$, integrando $\gamma'$ desde $t_1$ hasta $t_2$ se obtiene $\|\gamma(t_2) - \gamma(t_1)\| = 0$, contradiction.

$$\square$$

### Solucion 14

Como $\|\alpha'\| = 1$, la curvatura escalar es $\kappa = \|\alpha''\|$. Integrando: $\int_0^L \kappa\,ds = \int_0^L \|\alpha''(s)\|\,ds$. Por el teorema de rotacion tangencial de Hopf, para una curva cerrada simple orientada positivamente, $\int_0^L \kappa\,ds = 2\pi$.

$$\square$$

### Solucion 15

$\gamma'(t) = (3t^2, 2t)$, hence $\gamma'(0) = (0, 0)$. La longitud es $\int_{-1}^1 \sqrt{9t^4 + 4t^2}\,dt$. Esta integral converge: factorizando $t^2$: $\sqrt{t^2(9t^2 + 4)} = |t|\sqrt{9t^2+4}$. Integrando: $\int_{-1}^1 |t|\sqrt{9t^2+4}\,dt = 2\int_0^1 t\sqrt{9t^2+4}\,dt = \frac{2}{27}((9+4)^{3/2} - 4^{3/2}) = \frac{2}{27}(13^{3/2} - 8)$.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1994). *Differential Geometry of Curves and Surfaces*. Prentice Hall.
2. Kuehnel, W. (2006). *Differential Geometry*. AMS.
3. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 2. Publish or Perish.
4. Sakai, T. (1996). *Riemannian Geometry*. American Mathematical Society.
