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
