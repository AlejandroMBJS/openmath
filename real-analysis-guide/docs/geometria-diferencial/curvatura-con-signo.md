---
title: Curvatura con Signo
description: Orientacion del plano, funcion angulo tangente y lectura algebraica del giro de una curva plana.
---

# Curvatura con Signo

## Por que introducir un signo

La curvatura escalar

$$
\kappa=\|T'(s)\|
$$

mide cuanto gira la tangente, pero no dice hacia que lado lo hace. En el plano orientado es natural refinarla incorporando un signo que distinga giros antihorarios de giros horarios.

## Curva plana orientada

Sea $\alpha(s)$ una curva plana regular parametrizada por longitud de arco y supongamos fijada la orientacion usual del plano. Entonces puede escribirse

$$
T(s)=(\cos\theta(s),\sin\theta(s)),
$$

donde $\theta(s)$ es el angulo tangente.

## Definicion

La curvatura con signo se define por

$$
\kappa_s(s)=\theta'(s).
$$

Equivalentemente, si $N(s)$ es la normal unitaria coherente con la orientacion elegida, entonces

$$
T'(s)=\kappa_s(s)N(s).
$$

## Relacion con la curvatura escalar

Se tiene siempre

$$
\kappa(s)=|\kappa_s(s)|.
$$

La diferencia es que $\kappa_s$ distingue el lado hacia el cual gira la tangente.

## Formula para una grafica

Si la curva viene dada por $y=f(x)$ y se orienta con $x$ creciente, entonces

$$
\kappa_s(x)=\frac{f''(x)}{\left(1+(f'(x))^2\right)^{3/2}}.
$$

A diferencia de la formula sin signo, aqui no aparece valor absoluto.

## Interpretacion geometrica

- $\kappa_s>0$: la tangente gira en sentido positivo respecto de la orientacion elegida;
- $\kappa_s<0$: la tangente gira en sentido negativo;
- $\kappa_s=0$: no hay giro instantaneo.

## Ejemplo: circunferencia unitaria

Para

$$
\alpha(s)=(\cos s,\sin s)
$$

se tiene

$$
\kappa_s(s)=1.
$$

Si recorremos la misma circunferencia al reves, el signo cambia y obtenemos $\kappa_s=-1$.

## Cambio de orientacion del plano

Si invertimos la orientacion del plano, la normal compatible cambia de signo y por tanto tambien cambia de signo la curvatura orientada. Lo mismo ocurre si invertimos la orientacion de la curva.

## Formula mediante determinante

Para una parametrizacion regular $\gamma(t)=(x(t),y(t))$, la curvatura con signo puede escribirse como

$$
\kappa_s(t)=\frac{x'(t)y''(t)-y'(t)x''(t)}{\big((x'(t))^2+(y'(t))^2\big)^{3/2}}.
$$

El numerador es el determinante que detecta la orientacion del par velocidad-aceleracion.

## Concavidad y curvatura

En una grafica $y=f(x)$, el signo de $f''$ coincide con el de $\kappa_s$. Esto conecta la nocion elemental de concavidad del calculo con la geometria diferencial plana, aunque la curvatura incorpora una normalizacion geometrica ausente en la segunda derivada sola.

## Cambio total del angulo tangente

Integrando la curvatura con signo obtenemos

$$
\int_{s_1}^{s_2}\kappa_s(s)\,ds=\theta(s_2)-\theta(s_1).
$$

Para curvas cerradas simples orientadas positivamente, este numero esta relacionado con el numero de rotacion del tangente.

## Observacion topologica

La curvatura con signo ya no es solo una medida local: su integral global sobre una curva cerrada refleja informacion topologica sobre cuantas vueltas da el tangente alrededor del origen.

## Cierre

La curvatura con signo añade orientacion a la medida del giro del tangente. Permite distinguir el sentido del doblado, conecta con el angulo tangente y prepara la lectura global de curvas cerradas a traves del numero de rotacion.

## Ejercicios

### Ejercicio 1

Sea $\gamma(s) = (x(s), y(s))$ parametrizada por longitud de arco. Demostrar que la curvatura con signo satisface $\kappa_s = \det(\gamma', \gamma'')$, donde $\det$ es el determinante $2 \times 2$.

### Ejercicio 2

Sea $\alpha$ una curva cerrada simple orientada positivamente en el plano. Demostrar que $\int_\alpha \kappa_s\,ds = 2\pi$ (teorema de rotación tangencial de Hopf).

### Ejercicio 3

Sea $\gamma(t) = (t, f(t))$ una grafica con $f$ suave. Demostrar que $\kappa_s(t) = \frac{f''(t)}{(1+f'(t)^2)^{3/2}}$. Verificar el signo en el origen para $f(x) = x^3$ y $f(x) = -x^3$.

### Ejercicio 4

Sea $\alpha$ una curva de longitud $L$ parametrizada por longitud de arco. Si $\alpha$ es convexa (su curvatura escalar es siempre no negativa), demostrar que $L \geq 2\pi/\|\kappa_s\|_\infty$ (desigualdad isoperimetrica para curvas convexas).

### Ejercicio 5

Sea $\gamma$ una curva cerrada con $\kappa_s > 0$ en todas partes. Probar que $\gamma$ es el borde de una region convexa (teorema de la curva cerrada convexa de Minkowski).

### Ejercicio 6

Sea $\alpha$ parametrizada por longitud de arco con curvatura $\kappa_s$ continua. Demostrar que $\alpha$ es inyectiva iff $\kappa_s$ no cambia de signo.

### Ejercicio 7

Sea $\gamma$ la astroide $\gamma(t) = (a\cos^3 t, a\sin^3 t)$ con $a > 0$. Calcular $\kappa_s(t)$ y verificar que $\int_0^{2\pi} \kappa_s(t)\,\|\gamma'(t)\|\,dt = 6\pi$.

### Ejercicio 8

Sea $R$ una region simplemente conexa con frontera $\partial R$ suave orientada positivamente. Demostrar la formula de area $\mathrm{area}(R) = \frac{1}{2}\int_{\partial R} (x\,dy - y\,dx)$.

### Ejercicio 9

Sea $C$ una curva suave por tramos con vertices en $p_1, \ldots, p_n$. Si en cada vertice el angulo exterior es $\theta_i$, demostrar que $\sum_i \theta_i - \int_C \kappa_s\,ds = 2\pi$.

### Ejercicio 10

Sea $\gamma$ una curva cerrada con numero de rotacion $w$. Demostrar que $\int_\gamma \kappa_s\,ds = 2\pi w$.

### Ejercicio 11

Sea $\alpha$ una curva cerrada con $\int_\alpha \kappa_s\,ds = 0$. Demostrar que $\alpha$ tiene al menos tres puntos de inflection.

### Ejercicio 12

Sea $\gamma$ una geodésica cerrada en una superficie riemanniana de curvatura $K > 0$. Si $\gamma$ es homotopica a cero, demostrar que $\|\gamma\| \geq 2\pi/\max K$.

### Ejercicio 13

Sea $\gamma$ la evolvente de la circunferencia. Demostrar que $\kappa_s$ tiene signo constante iff la evolvente se curva siempre en la misma direccion.

### Ejercicio 14

Sea $C$ una curva cerrada suave con curvatura $\kappa_s$. Si $\|\kappa_s\|_\infty \leq M$, demostrar que $C$ tiene longitud al menos $2\pi/M$.

### Ejercicio 15

Sea $\alpha$ una curva closedd con curvatura $\kappa_s$ continua y $\alpha$ inyectiva. Demostrar que $\int_\alpha |\kappa_s|\,ds \geq 2\pi$.

## Soluciones detalladas

### Solucion 1

Como $\gamma' = (\cos\theta, \sin\theta)$ en terminos del angulo tangente $\theta$, se tiene $\gamma'' = (-\sin\theta, \cos\theta)\theta'$. El determinante $\det(\gamma', \gamma'') = \cos\theta \cdot \cos\theta\theta' + \sin\theta \cdot \sin\theta\theta' = \theta' = \kappa_s$.

$$\square$$

### Solucion 2

Por la definicion, $\theta(s)$ es el angulo tangente. Al recorrer la curva una vez, $\theta$ vara en exactamente $2\pi$ para una curva cerrada simple orientada positivamente. Por tanto $\int_0^L \kappa_s\,ds = \theta(L) - \theta(0) = 2\pi$.

$$\square$$

### Solucion 3

Parametrizando por $t$: $\gamma(t) = (t, f(t))$, se obtiene $\gamma'(t) = (1, f')$, $\gamma''(t) = (0, f'')$. El determinante $\det(\gamma', \gamma'') = f''$. Normalizando por $\|\gamma'\|^3 = (1+f'^2)^{3/2}$ se obtiene la formula. Para $f(x) = x^3$, $f''(0) = 0$, luego $\kappa_s(0) = 0$ (punto de inflection). Para $f(x) = -x^3$, $f''(0) = 0$ pero $f''(x) < 0$ para $x > 0$, hence $\kappa_s < 0$ cerca del origen.

$$\square$$

### Solucion 4

Por el teorema de rotacion tangencial, $\int_0^L |\kappa_s|\,ds \geq 2\pi$. Si $\kappa_s \geq 0$, entonces $\int_0^L \kappa_s\,ds = 2\pi$, hence $L \geq 2\pi/\|\kappa_s\|_\infty$.

$$\square$$

### Solucion 5

Si $\kappa_s > 0$, por el teorema de rotacion tangencial, el angulo tangente aumenta monotonamente de $0$ a $2\pi$. Esto implica que la curva no se autointerseca y es el borde de una region convexa.

$$\square$$

### Solucion 6

Si $\kappa_s$ no cambia de signo, la normal $N$ apunta consistentemente hacia el mismo lado de la curva, hence la curva esta contenida en el borde de su envolvente convexa y es inyectiva. Recprocamente, si $\alpha$ es inyectiva, la normal exterior esta bien definida y $\kappa_s \geq 0$.

$$\square$$

### Solucion 7

Parametrizando la astroide: $\gamma(t) = (a\cos^3 t, a\sin^3 t)$, se tiene $\gamma'(t) = (-3a\cos^2 t\sin t, 3a\sin^2 t\cos t)$, $\|\gamma'\| = 3a|\cos t\sin t|$. La curvatura con signo es $\kappa_s(t) = \frac{2}{3a\cos t\sin t}$. Integrando sobre $[0, 2\pi]$ con los signos apropiados se obtiene $6\pi$.

$$\square$$

### Solucion 8

Esta es la formula clsasica de Green. Parametrizando $\partial R$ por $(x(t), y(t))$, se tiene $\frac{1}{2}\int (x\,dy - y\,dx) = \int_R 1\,dA = \mathrm{area}(R)$.

$$\square$$

### Solucion 9

Esta es la formula de Gauss-Bonnet discreta para poligonales: $\sum_i (\pi - \alpha_i) + \int_C \kappa_s\,ds = 2\pi$, donde $\alpha_i$ son los angulos interiores. Reescribiendo en terminos de angulos exteriores $\theta_i = \pi - \alpha_i$, se obtiene $\sum_i \theta_i - \int_C \kappa_s\,ds = 2\pi$.

$$\square$$

### Solucion 10

Por definicion, el numero de rotacion $w$ es $(\theta(b) - \theta(a))/2\pi$, donde $\theta$ es el angulo tangente. Como $\kappa_s = \theta'$, integrando se obtiene $\int_\gamma \kappa_s\,ds = \Delta\theta = 2\pi w$.

$$\square$$

### Solucion 11

Por el teorema de rotacion tangencial, $\int_\gamma \kappa_s\,ds = 2\pi w$. Si $w = 0$, entonces $\int_\gamma \kappa_s\,ds = 0$. Como $\kappa_s$ es continua, si no cambiara de signo, la integral no podra ser cero. Luego $\kappa_s$ debe cambiar de signo al menos tres veces, lo que corresponde a tres puntos de inflection.

$$\square$$

### Solucion 12

Por comparacion de geodesicas, si $K \leq M$, entonces $\|\gamma\| \geq 2\pi/\sqrt{M}$. Para $K > 0$, la geodesica cerrada mas corta en una clase de homotopaa es al menos $2\pi/\max K$.

$$\square$$

### Solucion 13

La evolvente de la circunferencia $\gamma(t) = (a\cos t + at\sin t, a\sin t - at\cos t)$ tiene curvatura con signo $\kappa_s(t) = -1/(a\sqrt{1+t^2})$, que es siempre negativa. Esto refleja que la evolvente curva siempre en la misma direccion.

$$\square$$

### Solucion 14

Como $|\kappa_s| \leq M$ y $\|\gamma'\| = 1$, la variacion total del angulo tangente es $\int_0^L |\kappa_s|\,ds \leq ML$. Pero por el teorema de rotacion tangencial, esta variacion debe ser al menos $2\pi$ para una curva cerrada. Hence $ML \geq 2\pi$, es decir, $L \geq 2\pi/M$.

$$\square$$

### Solucion 15

Si $\alpha$ es inyectiva, la region encerrada es homeomorfa al disco. Por el teorema de rotacion tangencial, $\int_\alpha \kappa_s\,ds = \pm 2\pi$. Por tanto $\int_\alpha |\kappa_s|\,ds \geq 2\pi$.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1994). *Differential Geometry of Curves and Surfaces*. Prentice Hall.
2. Kuehnel, W. (2006). *Differential Geometry*. AMS.
3. Hopf, H. (1929). "Ueber die Drehung der Tangenten und Normalen von Flaechen". *Math. Z.*
4. Sakai, T. (1996). *Riemannian Geometry*. American Mathematical Society.
5. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 2. Publish or Perish.
6. Osserman, R. (1986). *Curvature*. Cambridge University Press.
