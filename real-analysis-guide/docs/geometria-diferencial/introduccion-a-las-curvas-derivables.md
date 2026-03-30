---
title: Introduccion a las Curvas Derivables
description: Curvas como aplicaciones, regularidad, reparametrizacion y significado geometrico de la derivabilidad.
---

# Introduccion a las Curvas Derivables

## Introduccion a las curvas derivables

Una curva no debe entenderse primero como un subconjunto del espacio, sino como una aplicacion

$$
\gamma:I\to \mathbb{R}^n,
$$

donde $I\subset \mathbb{R}$ es un intervalo. La imagen $\gamma(I)$ es la traza; la parametrizacion contiene informacion adicional sobre orientacion, rapidez y estructura diferencial.

### Idea central

Dos parametrizaciones distintas pueden tener la misma traza y, sin embargo, no ser geometricamente equivalentes si una de ellas introduce singularidades o destruye la estructura local de la curva. La geometria diferencial estudia exactamente que propiedades sobreviven bajo cambios regulares de parametro.

## Curva, traza y orientacion

Conviene separar tres niveles:

- la curva como aplicacion $\gamma$;
- la traza como conjunto $\gamma(I)$;
- la orientacion inducida por el sentido de crecimiento del parametro.

### Ejemplo

La recta del eje $x$ puede parametrizarse por

$$
\gamma_1(t)=(t,0), \qquad \gamma_2(s)=(-s,0).
$$

Tienen la misma traza, pero orientacion opuesta.

## Suavidad

Diremos que $\gamma$ es de clase $C^k$ si cada componente de $\gamma$ es de clase $C^k$ en $I$.

La primera derivada

$$
\gamma'(t)
$$

es el vector velocidad. Si existe y no se anula, define una direccion tangente bien determinada.

## Puntos singulares

Un punto $t_0\in I$ es singular si

$$
\gamma'(t_0)=0.
$$

### Ejemplo

La cuspide semicubica

$$
\gamma(t)=(t^2,t^3)
$$

tiene $\gamma'(0)=0$. La traza sigue siendo un objeto perfectamente visible en el plano, pero la parametrizacion pierde su estructura regular en el origen.

## Recta tangente en un punto regular

Si $\gamma'(t_0)\neq 0$, la recta tangente viene dada por

$$
\ell(u)=\gamma(t_0)+u\gamma'(t_0).
$$

La recta tangente depende de la direccion de $\gamma'(t_0)$, no de su modulo.

## Cambio de parametro

Una reparametrizacion regular es un difeomorfismo $\phi:J\to I$ con derivada nunca nula. La nueva curva es

$$
\widetilde{\gamma}(s)=\gamma(\phi(s)).
$$

## Proposicion: regla de la cadena vectorial

Si $\widetilde{\gamma}=\gamma\circ\phi$, entonces

$$
\widetilde{\gamma}'(s)=\gamma'(\phi(s))\phi'(s).
$$

### Consecuencia

La recta tangente se preserva bajo reparametrizaciones regulares, porque el vector derivada solo cambia por un escalar no nulo.

## Regularidad local

La derivabilidad por si sola no basta para hacer geometria diferencial seria. La hipotesis correcta es regularidad: la curva debe tener velocidad no nula en cada punto.

## Curvas regulares parametrizadas

Una curva $\gamma:I\to\mathbb{R}^n$ de clase $C^1$ es regular si

$$
\gamma'(t)\neq 0 \qquad \text{para todo } t\in I.
$$

### Interpretacion

La parametrizacion recorre la traza sin detenerse ni colapsar localmente la direccion tangente.

## Invariancia de la regularidad

Si $\widetilde{\gamma}=\gamma\circ\phi$ con $\phi'(s)\neq 0$, entonces $\gamma$ es regular si y solo si $\widetilde{\gamma}$ es regular.

### Prueba

Por la regla de la cadena,

$$
\widetilde{\gamma}'(s)=\gamma'(\phi(s))\phi'(s).
$$

El producto de un vector no nulo por un escalar no nulo sigue siendo no nulo.

## Parametrizaciones equivalentes

Dos curvas regulares parametrizadas se consideran equivalentes si difieren por una reparametrizacion regular. Esta es la relacion correcta cuando se quiere estudiar la curva como objeto geometrico y no como trayectoria temporal concreta.

## Curvas simples y autointersecciones

La regularidad es una condicion local. Una curva regular puede autointersectarse globalmente.

### Ejemplo

Una lemniscata convenientemente parametrizada puede ser regular aunque su traza se cruce consigo misma.

## Inmersion y embebimiento

En lenguaje de variedades, una curva regular es una inmersion de dimension uno. Si ademas la parametrizacion es homeomorfismo sobre su imagen, la curva se comporta como subvariedad embebida.

### Moral

La geometria local de una curva regular no detecta por si sola si hay autointersecciones globales.

## Ejemplos canonicos

### Recta

$$
\gamma(t)=p+tv, \qquad v\neq 0.
$$

Es regular y de curvatura nula.

### Circunferencia

$$
\gamma(t)=(\cos t,\sin t).
$$

Es regular, periodica y servira como modelo de curvatura constante.

### Helice

$$
\gamma(t)=(a\cos t,a\sin t,bt), \qquad a>0.
$$

Es regular y muestra que en el espacio aparece un segundo invariante: la torsion.

## Errores comunes

- Confundir curva con su traza.
- Pensar que la rapidez forma parte de la geometria intrinseca.
- Creer que una curva no regular deja automaticamente de tener tangente como conjunto; lo que falla es la parametrizacion diferencial.

## Cierre

La nocion de curva derivable organiza el paso desde una formula parametrica hacia un objeto geometrico estable bajo reparametrizaciones regulares. La regularidad elimina degeneraciones locales y abre la puerta a la longitud de arco y a los invariantes diferenciales de orden superior.

## Ejercicios

### Ejercicio 1

Sea $\gamma(t) = (t^2, t^3)$. Verificar que $\gamma$ no es regular en $t = 0$ pero que su traza tiene una recta tangente bien definida en ese punto.

### Ejercicio 2

Sea $\gamma(t) = (t, |t|)$. Demostrar que $\gamma$ no es diferenciable en $t = 0$ pero que su traza es una curva suave por tramos.

### Ejercicio 3

Sea $\alpha$ una curva regular. Demostrar que $\alpha$ es inyectiva iff su traza no tiene autointersecciones.

### Ejercicio 4

Sea $\gamma(t) = (\cos t, \sin t)$. Verificar que $\gamma$ es regular en todo $t$ pero que no es inyectiva.

### Ejercicio 5

Sea $\gamma$ una curva regular parametrizada por $(x(t), y(t), z(t))$. Si $\gamma'(t_0) \neq 0$, demostrar que existe una vecindad de $t_0$ donde $\gamma$ es inyectiva.

### Ejercicio 6

Sea $\gamma$ una curva con $\|\gamma'(t)\| > 0$ para todo $t$. Demostrar que la funcion longitud de arco $s(t) = \int_{t_0}^t \|\gamma'(u)\|\,du$ es un difeomorfismo monotono.

### Ejercicio 7

Sea $\alpha$ una curva con $\alpha'(t_0) = 0$. Si $\alpha''(t_0) \neq 0$, demostrar que $\alpha$ tiene una cuspide en $t_0$.

### Ejercicio 8

Sea $\gamma$ una curva con $\|\gamma'\| = 1$. Demostrar que $\gamma$ parametrizada por longitud de arco iff $\|\gamma'(t)\| = 1$ para todo $t$.

### Ejercicio 9

Sea $\alpha$ una curva suave con $\alpha'(t) \neq 0$. Si $\beta(t) = \alpha(t) + c\alpha'(t)$, demostrar que $\beta$ es regular.

### Ejercicio 10

Sea $\gamma(t) = (t^3, t^2)$. Calcular la recta tangente en $t = 0$. Verificar que $\|\gamma'(0)\| = 0$.

### Ejercicio 11

Sea $\alpha$ una curva regular parametrizada por longitud de arco. Si $\alpha$ es geodesica sobre una superficie $S$, demostrar que $\alpha''(s)$ es perpendicular al plano tangente de $S$.

### Ejercicio 12

Sea $\gamma$ una curva en $\mathbb{R}^n$. Demostrar que si $\|\gamma'(t)\| \neq 0$ para todo $t$, entonces $\gamma$ es una inmersion.

### Ejercicio 13

Sea $\alpha$ una curva con $\alpha'(t_0) \neq 0$. Demostrar que $\alpha$ es tangente a la recta $L(t) = \alpha(t_0) + (t-t_0)\alpha'(t_0)$ en $t_0$.

### Ejercicio 14

Sea $\gamma$ una curva regular con $\|\gamma'\| = 1$. Si $\gamma$ es geodesica sobre una superficie $S$, demostrar que $\|\gamma''\| = |\kappa_n|$.

### Ejercicio 15

Sea $\alpha$ una curva con $\alpha'(t) \neq 0$ para todo $t$. Si $\phi: J \to I$ es un difeomorfismo, demostrar que $\tilde\alpha = \alpha \circ \phi$ es regular y que $\tilde\alpha'(s) = \phi'(s)\alpha'(\phi(s))$.

## Soluciones detalladas

### Solucion 1

$\gamma'(t) = (2t, 3t^2)$, hence $\gamma'(0) = (0,0)$. La traza $\{(t^2, t^3) : t \in \mathbb{R}\}$ tiene ecuacion $y^2 = x^3$, que es la cuspide semicubica. La recta tangente en el origen se obtiene como el lmite de las rectas secantes: $\frac{\gamma(t) - \gamma(0)}{t} = (t, t^2) \to (0,0)$, hence la tangente es el origen mismo, que es un punto. No hay una unica recta tangente en el sentido usual.

$$\square$$

### Solucion 2

$\gamma$ no es diferenciable en $t = 0$ porque $\gamma_+(0) = 1$ y $\gamma_-(0) = -1$. Sin embargo, la traza $\{(t, |t|)\}$ es una reunion de dos semirrectas unidas en el origen, que es suave por tramos.

$$\square$$

### Solucion 3

Si $\alpha$ es inyectiva, claramente no hay autointersecciones. Recprocamente, si no hay autointersecciones, entonces $\alpha(t_1) \neq \alpha(t_2)$ para $t_1 \neq t_2$, es decir, $\alpha$ es inyectiva.

$$\square$$

### Solucion 4

$\gamma'(t) = (-\sin t, \cos t)$, hence $\|\gamma'(t)\| = \sqrt{\sin^2 t + \cos^2 t} = 1 \neq 0$. $\gamma$ es regular. Pero $\gamma(0) = (1,0) = \gamma(2\pi)$, hence no es inyectiva.

$$\square$$

### Solucion 5

Como $\gamma'(t_0) \neq 0$, por continuidad existe $\delta > 0$ tal que $\|\gamma'(t)\| > \|\gamma'(t_0)\|/2 > 0$ para $|t-t_0| < \delta$. Esto implica que $\gamma$ es inyectiva cerca de $t_0$: si $\gamma(t_1) = \gamma(t_2)$ con $|t_i-t_0| < \delta$, integrando desde $t_0$ se obtiene $\gamma(t_1) - \gamma(t_0) = \int_{t_0}^{t_1} \gamma'(u)\,du$ y $\|\gamma(t_1) - \gamma(t_0)\| > c|t_1-t_0|$, contradiction si $t_1 \neq t_2$.

$$\square$$

### Solucion 6

$s'(t) = \|\gamma'(t)\| > 0$, hence $s$ es estrictamente monotona creciente. Como $\gamma$ es suave, $s$ es suave y biyectiva con $s' > 0$, hence invertible con inversa suave.

$$\square$$

### Solucion 7

Si $\alpha'(t_0) = 0$ pero $\alpha''(t_0) \neq 0$, la cuspide se sigue del desarrollo de Taylor $\alpha(t) = \alpha(t_0) + \frac{1}{2}(t-t_0)^2\alpha''(t_0) + o((t-t_0)^2)$. La cuspide tiene un punto de retorno en la direccion de $\alpha''(t_0)$.

$$\square$$

### Solucion 8

Si $\|\gamma'\| = 1$, entonces $s(t) = \int_{t_0}^t \|\gamma'\| = t - t_0$, es decir, $t = s + t_0$, hence $\gamma$ esta parametrizada por longitud de arco. Recprocamente, si $\gamma$ esta parametrizada por longitud de arco, $\|\gamma'\| = 1$.

$$\square$$

### Solucion 9

$\beta'(t) = \alpha'(t) + c\alpha''(t)$. Como $\alpha'(t) \neq 0$, para $c$ suficientemente pequeno, $\beta'(t) \neq 0$ para todo $t$, es decir, $\beta$ es regular.

$$\square$$

### Solucion 10

$\gamma'(t) = (3t^2, 2t)$, hence $\gamma'(0) = (0,0)$. La recta tangente es $L(u) = (0,0) + u(0,0) = (0,0)$, es decir, el punto origen. La cuspide tiene tangente vertical y horizontal simultaneously.

$$\square$$

### Solucion 11

Si $\alpha$ es geodesica sobre $S$, $D_T T = 0$, donde $D$ es la derivada covariante. Descomponiendo $\alpha'' = D_T T + \langle \alpha'', N\rangle N + \langle \alpha'', T\rangle T$, se obtiene que la componente tangente se anula y $\alpha''$ es perpendicular al plano tangente.

$$\square$$

### Solucion 12

Si $\|\gamma'(t)\| \neq 0$ para todo $t$, entonces $d\gamma_t: T_t\mathbb{R} \to T_{\gamma(t)}\mathbb{R}^n$ es inyectivo, es decir, $\gamma$ es una inmersion.

$$\square$$

### Solucion 13

La recta tangente se parametriza por $L(t) = \alpha(t_0) + (t-t_0)\alpha'(t_0)$. Esto coincide con la definicion: la direccion tangente en $t_0$ es $\alpha'(t_0)$.

$$\square$$

### Solucion 14

Si $\|\gamma'\| = 1$, $\gamma'' = D_T T + \langle \gamma'', N\rangle N$. Si $\gamma$ es geodesica, $D_T T = 0$, hence $\gamma'' = \langle \gamma'', N\rangle N = \kappa_n N$. Luego $\|\gamma''\| = |\kappa_n|$.

$$\square$$

### Solucion 15

$\tilde\alpha'(s) = d\alpha_{\phi(s)}(\phi'(s)) = \phi'(s)\alpha'(\phi(s))$. Como $\phi'(s) \neq 0$ y $\alpha'(\phi(s)) \neq 0$, se tiene $\tilde\alpha'(s) \neq 0$, es decir, $\tilde\alpha$ es regular.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1994). *Differential Geometry of Curves and Surfaces*. Prentice Hall.
2. Kuehnel, W. (2006). *Differential Geometry*. AMS.
3. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 2. Publish or Perish.
4. O'Neill, B. (1997). *Elementary Differential Geometry*. Academic Press.
