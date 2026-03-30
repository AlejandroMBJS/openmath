---
title: Curvatura de Curvas Planas
description: Curvatura, radio de curvatura, formulas invariantes y lectura geometrica de la desviacion respecto a la recta tangente.
---

# Curvatura de Curvas Planas

## Idea geometrica

La curvatura mide la velocidad con la que cambia la direccion tangente al recorrer una curva con parametro de longitud de arco. En una recta no cambia la direccion; en una circunferencia cambia a ritmo constante.

## Curvatura con parametro de longitud de arco

Sea $\alpha(s)$ una curva plana regular parametrizada por longitud de arco. Definimos

$$
T(s)=\alpha'(s), \qquad \|T(s)\|=1.
$$

Como $\langle T,T\rangle=1$, derivando obtenemos

$$
\langle T'(s),T(s)\rangle=0.
$$

Luego $T'(s)$ es ortogonal a $T(s)$.

La curvatura escalar es

$$
\kappa(s)=\|T'(s)\|.
$$

## Curvatura con signo

En el plano orientado puede elegirse una normal unitaria $N$ y escribir

$$
T'(s)=\kappa_s(s)N(s),
$$

donde $\kappa_s$ es la curvatura con signo. Su signo depende de la orientacion elegida.

## Formula para parametrizacion arbitraria

Si $\gamma(t)=(x(t),y(t))$ es regular, entonces

$$
\kappa(t)=\frac{|x'(t)y''(t)-y'(t)x''(t)|}{\big((x'(t))^2+(y'(t))^2\big)^{3/2}}.
$$

Esta expresion muestra que la curvatura no es simplemente una segunda derivada: hay una normalizacion geometrica por la rapidez.

## Formula para una grafica

Si la curva es $y=f(x)$, entonces

$$
\kappa(x)=\frac{|f''(x)|}{\left(1+(f'(x))^2\right)^{3/2}}.
$$

## Radio de curvatura

Si $\kappa(s)\neq 0$, se define

$$
\rho(s)=\frac{1}{\kappa(s)}.
$$

El radio de curvatura mide la escala local del doblado: radios pequenos corresponden a curvaturas grandes.

## Circunferencia como modelo

Para la circunferencia de radio $R$ parametrizada por longitud de arco,

$$
\alpha(s)=\left(R\cos\frac{s}{R},R\sin\frac{s}{R}\right),
$$

se tiene

$$
\kappa(s)=\frac{1}{R}.
$$

## Caracterizacion de rectas y circunferencias

- Si $\kappa\equiv 0$, la curva es un segmento de recta.
- Si $\kappa\equiv c>0$, la curva es un arco de circunferencia de radio $1/c$.

## Funcion angulo tangente

En el plano orientado puede escribirse

$$
T(s)=(\cos\theta(s),\sin\theta(s)).
$$

Entonces

$$
\kappa_s(s)=\theta'(s).
$$

Esta igualdad es fundamental: la curvatura con signo es la derivada del angulo tangente.

## Ejemplo: parabola

Para $\gamma(x)=(x,x^2)$ se obtiene

$$
\kappa(x)=\frac{2}{(1+4x^2)^{3/2}}.
$$

La curvatura es maxima en el vertice y decrece hacia cero al alejarnos.

## Aceleracion y curvatura

Si la curva esta parametrizada por tiempo $t$, la aceleracion se descompone como

$$
\gamma''(t)=v'(t)T+v(t)^2\kappa N,
$$

donde $v(t)=\|\gamma'(t)\|$. El termino normal recoge la informacion geometrica pura.

## Cierre

La curvatura plana cuantifica el giro del tangente y permite medir cuan bien una curva se aproxima localmente por su recta tangente o por una circunferencia. Esta idea se generaliza en el espacio mediante el marco de Frenet y, para superficies, mediante curvaturas normal y gaussiana.

## Ejercicios

### Ejercicio 1

Sea $\gamma(t) = (t^2, t^3)$. Calcular la curvatura $\kappa(t)$ y verificar que $\kappa(0) = 0$. ¿Es $\gamma$ regular en $t = 0$?

### Ejercicio 2

Sea $\alpha(s)$ una curva plana parametrizada por longitud de arco con curvatura $\kappa(s)$. Si $\kappa(s) = |\sin s|$, clasificar la curva segun su convexidad en intervalos.

### Ejercicio 3

Probar que la curvatura de la elipse $(a\cos t, b\sin t)$ es $\kappa(t) = \frac{ab}{(a^2\sin^2 t + b^2\cos^2 t)^{3/2}}$. Encontrar los puntos de maxima y minima curvatura.

### Ejercicio 4

Sea $\gamma$ una curva cerrada simple convexa con curvatura $\kappa > 0$. Demostrar que $\int_0^L \kappa\,ds = 2\pi$.

### Ejercicio 5

Sea $\gamma(t) = (t, \cosh t)$. Demostrar que $\kappa(t) = \frac{\cosh t}{(1+\sinh^2 t)^{3/2}} = \frac{\cosh t}{(1+\cosh^2 t)^{3/2}}$. Verificar que $\kappa(0) = 1/\sqrt{2}$.

### Ejercicio 6

Sea $\gamma$ una curva plana con curvatura $\kappa$ continua. Si $\|\kappa\|_\infty \leq M$, demostrar que $\gamma$ tiene longitud al menos $2\pi/M$.

### Ejercicio 7

Sea $\alpha$ una curva parametrizada por longitud de arco con $\kappa(s) > 0$. Si $\alpha$ es inyectiva, demostrar que $\alpha$ es convexa iff $\kappa$ no cambia de signo.

### Ejercicio 8

Sea $\gamma(t) = (a\cos^3 t, a\sin^3 t)$ la astroide. Calcular $\kappa(t)$ y verificar que la curvatura es maxima en los puntos de autointerseccion.

### Ejercicio 9

Sea $\alpha$ una curva closedd con curvatura $\kappa$ continua. Demostrar que $\int_0^L |\kappa|\,ds \geq 2\pi$.

### Ejercicio 10

Sea $\gamma$ la involuta de la circunferencia $\gamma(t) = (a\cos t + at\sin t, a\sin t - at\cos t)$. Calcular la curvatura.

### Ejercicio 11

Sea $\gamma$ una curva plana con curvatura $\kappa > 0$. Demostrar que $\gamma$ tiene al menos $n$ puntos de curvatura critica si $\int_0^L \kappa\,ds = 2\pi n$.

### Ejercicio 12

Sea $\alpha$ una curva parametrizada por $(x, f(x))$ con $f$ convexa. Demostrar que $\kappa(x) \geq 0$ para todo $x$.

### Ejercicio 13

Sea $\gamma$ una curva cerrada simple con curvatura $\kappa$ continua y $\int_0^L \kappa\,ds = 4\pi$. Demostrar que $\gamma$ tiene al menos dos puntos con curvatura crtica.

### Ejercicio 14

Sea $\gamma$ una curva con curvatura $\kappa$ y radio de curvatura $\rho = 1/\kappa$. Demostrar que $\rho'(s) = -\kappa'(s)/\kappa(s)^2$ y que $\rho$ alcanza un extremo iff $\kappa$ alcanza un extremo.

### Ejercicio 15

Sea $\alpha$ una curva closedd con curvatura $\kappa \geq 0$ everywhere. Demostrar que $\alpha$ es el borde de una region convexa.

## Soluciones detalladas

### Solucion 1

Parametrizando: $\gamma'(t) = (2t, 3t^2)$, $\gamma''(t) = (2, 6t)$. El determinante $\det(\gamma', \gamma'') = 2 \cdot 6t - 3t^2 \cdot 2 = 12t - 6t^2 = 6t(2-t)$. La norma $\|\gamma'\|^3 = (4t^2 + 9t^4)^{3/2}$. En $t = 0$: $\det = 0$, $\|\gamma'\| = 0$, hence $\kappa(0) = 0$. Ademas, $\gamma'(0) = (0, 0)$, luego $\gamma$ no es regular en $t = 0$.

$$\square$$

### Solucion 2

$\kappa(s) = |\sin s|$. Esta funcion es no negativa y se anula en $s = k\pi$. Es positiva en $(k\pi, (k+1)\pi)$ y cambia de signo de derivada pero no de valor. La curva es localmente convexa en intervalos donde $\sin s \neq 0$.

$$\square$$

### Solucion 3

Parametrizando la elipse: $\gamma'(t) = (-a\sin t, b\cos t)$, $\gamma''(t) = (-a\cos t, -b\sin t)$. El determinante $\det(\gamma', \gamma'') = (-a\sin t)(-b\sin t) - (b\cos t)(-a\cos t) = ab(\sin^2 t + \cos^2 t) = ab$. La norma $\|\gamma'\|^3 = (a^2\sin^2 t + b^2\cos^2 t)^{3/2}$. La curvatura maxima ocurre donde el denominador es mnimo, es decir, en los vertices sobre el eje mayor.

$$\square$$

### Solucion 4

Por el teorema de rotacion tangencial de Hopf, $\int_0^L \kappa\,ds = \theta(L) - \theta(0) = 2\pi$.

$$\square$$

### Solucion 5

Parametrizando: $\gamma'(t) = (1, \sinh t)$, $\gamma''(t) = (0, \cosh t)$. El determinante $\det(\gamma', \gamma'') = \cosh t$. La norma $\|\gamma'\|^3 = (1 + \sinh^2 t)^{3/2} = (\cosh^2 t)^{3/2} = \cosh^3 t$. Hence $\kappa(t) = \cosh t/\cosh^3 t = 1/\cosh^2 t = 1/(1+\sinh^2 t) = 1/(1+\cosh^2 t - 1) = 1/\cosh^2 t$. En $t = 0$: $\kappa(0) = 1/\cosh^2 0 = 1$.

$$\square$$

### Solucion 6

Como $\|\gamma'\| = 1$, la variacion total del angulo tangente es $\int_0^L |\kappa|\,ds$. Por el teorema de rotacion tangencial, para una curva cerrada este valor es al menos $2\pi$. Hence $ML \geq 2\pi$ y $L \geq 2\pi/M$.

$$\square$$

### Solucion 7

Si $\kappa$ no cambia de signo, el angulo tangente $\theta(s) = \int_0^s \kappa\,ds$ es monotono. Como $\gamma$ es inyectiva, la traza no tiene autointersecciones, hence $\gamma$ es convexa. Recprocamente, si $\gamma$ es convexa, $\kappa \geq 0$.

$$\square$$

### Solucion 8

Parametrizando la astroide: $\gamma(t) = (a\cos^3 t, a\sin^3 t)$, se obtiene $\kappa(t) = \frac{2}{3a\cos t\sin t}$, que diverge en los vertices $t = 0, \pi/2, \pi$, es decir, en los puntos de maxima curvatura.

$$\square$$

### Solucion 9

La integral $\int_0^L |\kappa|\,ds$ es la variacion total del angulo tangente. Para una curva cerrada, esta variacion es al menos $2\pi$.

$$\square$$

### Solucion 10

Parametrizando la involuta: $\gamma(t) = (a\cos t + at\sin t, a\sin t - at\cos t)$, se obtiene $\gamma'(t) = (-a\sin t + a\sin t + at\cos t, a\cos t - a\cos t + at\sin t) = (at\cos t, at\sin t)$. La curvatura es $\kappa(t) = |at|/(a^2t^2)^{3/2} = 1/(a|t|)$, que es inversamente proporcional a $|t|$.

$$\square$$

### Solucion 11

Como $\kappa$ es continua y $\int_0^L \kappa\,ds = 2\pi n$, por el teorema de rotacion tangencial, el angulo tangente vara en $2\pi n$. Cada vez que $\kappa$ cambia de signo o alcanza un extremo, el numero de rotaciones aumenta. Por el teorema del valor intermedio, $\kappa$ debe alcanzar al menos $n$ puntos crticos.

$$\square$$

### Solucion 12

Si $f$ es convexa, $f'' \geq 0$. La curvatura de la grafica es $\kappa(x) = |f''(x)|/(1+f'(x)^2)^{3/2} \geq 0$.

$$\square$$

### Solucion 13

Como $\int_0^L \kappa\,ds = 4\pi$, por el teorema de rotacion tangencial el numero de rotaciones es 2. Cada rotacion requiere al menos un punto de curvatura crtica, hence al menos dos puntos.

$$\square$$

### Solucion 14

$\rho(s) = 1/\kappa(s)$, hence $\rho'(s) = -\kappa'(s)/\kappa(s)^2$. Luego $\rho'(s) = 0$ iff $\kappa'(s) = 0$, lo que prueba la equivalencia.

$$\square$$

### Solucion 15

Si $\kappa \geq 0$ en todas partes, por el teorema de rotacion tangencial la curva no puede autointersecarse de manera no trivial. Si hubiera una autointerseccion, la integral de $\kappa$ sobre un lazo no cubrira $2\pi$ completo. Hence $\alpha$ es el borde de una region convexa.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1994). *Differential Geometry of Curves and Surfaces*. Prentice Hall.
2. Kuehnel, W. (2006). *Differential Geometry*. AMS.
3. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 2. Publish or Perish.
4. Osserman, R. (1986). *Curvature*. Cambridge University Press.
5. Sakai, T. (1996). *Riemannian Geometry*. American Mathematical Society.
