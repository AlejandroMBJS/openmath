---
title: Plano Normal, Osculador y Rectificador
description: Planos canonicos asociados al triedro de Frenet y su significado geometrico local.
---

# Plano Normal, Osculador y Rectificador

## Tres planos canonicos

Dada una curva espacial regular con curvatura positiva, el triedro de Frenet

$$
(T,N,B)
$$

determina tres planos distinguidos en cada punto. Cada uno captura un aspecto diferente de la geometria local.

## Plano osculador

Es el plano generado por $T$ y $N$:

$$
\Pi_{osc}=\operatorname{span}\{T,N\}.
$$

Contiene a la tangente y a la aceleracion geometrica. Es el plano que mejor aproxima a la curva a segundo orden.

### Interpretacion

La curva y su circunferencia osculatriz viven localmente en este plano.

## Plano normal

Es el plano generado por $N$ y $B$:

$$
\Pi_{nor}=\operatorname{span}\{N,B\}.
$$

Es el plano ortogonal a la tangente. En el se encuentran todas las direcciones normales a la curva.

## Plano rectificador

Es el plano generado por $T$ y $B$:

$$
\Pi_{rec}=\operatorname{span}\{T,B\}.
$$

Se llama rectificador porque, para ciertas curvas, la posicion queda contenida en ese plano respecto de un origen adaptado.

## Ecuaciones implicitas

Si la curva pasa por el punto $p=\alpha(s_0)$, entonces:

- plano osculador: $\langle x-p,B(s_0)\rangle=0$;
- plano normal: $\langle x-p,T(s_0)\rangle=0$;
- plano rectificador: $\langle x-p,N(s_0)\rangle=0$.

## Contacto de distintos ordenes

- el plano normal solo usa informacion de primer orden, porque depende de $T$;
- el plano osculador usa informacion de segundo orden, porque depende de $N$;
- el plano rectificador mezcla direccion tangente y binormal, por tanto involucra ya la estructura espacial completa.

## Caso plano

Si la curva es plana, el binormal es constante. Entonces el plano osculador coincide con el plano fijo que contiene toda la curva, mientras que los planos normal y rectificador varian con el punto.

## Caso de la helice

En una helice, ninguno de estos planos es fijo. Su variacion uniforme refleja la coexistencia de curvatura y torsion constantes.

## Relacion con la torsion

La torsion mide justamente la variacion del plano osculador. Si $\tau=0$, el osculador deja de girar y la curva queda contenida en un plano fijo.

## Curvas rectificantes

Una curva se llama rectificante si, respecto de algun origen, el vector posicion pertenece siempre al plano rectificador. Esto equivale a imponer una relacion especial entre curvatura y torsion.

## Cierre

Los planos osculador, normal y rectificador forman la geometria lineal local de una curva espacial. Organizan el significado de tangente, normal y binormal y muestran como el triedro de Frenet controla no solo vectores, sino tambien subespacios canonicamente asociados a la curva.

## Ejercicios

### Ejercicio 1

Sea $\alpha(s)$ una curva con $\kappa > 0$. Demostrar que la distancia de un punto $x$ al plano osculador en $s$ es $O(|s-s_0|^3)$.

### Ejercicio 2

Sea $\gamma(t) = (t, t^2, t^3)$. Calcular las ecuaciones del plano osculador, plano normal y plano rectificador en $t = 0$.

### Ejercicio 3

Sea $\alpha$ una curva con $\tau \neq 0$. Demostrar que la distancia de $\alpha(s)$ al plano rectificador en $s_0$ es $O(|s-s_0|^2)$.

### Ejercicio 4

Sea $\alpha$ una curva plana. Demostrar que su plano osculador coincide con el plano que contiene la curva en todos los puntos.

### Ejercicio 5

Sea $\gamma$ una helice circular. Demostrar que ninguno de los planos osculador, normal o rectificador es fijo.

### Ejercicio 6

Sea $\alpha$ una curva con $\kappa > 0$ y $\tau \neq 0$. Si $\alpha$ pasa por $p$ con plano osculador horizontal, describir la posicion del triedro de Frenet en $p$.

### Ejercicio 7

Sea $\gamma$ una curva con triedro $(T,N,B)$. Demostrar que la evoluta de $\gamma$ esta contenida en el plano normal de $\gamma$.

### Ejercicio 8

Sea $\alpha$ una curva con $\kappa > 0$ y $\tau \neq 0$. Demostrar que existe una familia de planos osculadores que depende de tres parametros.

### Ejercicio 9

Sea $\gamma(t) = (a\cos t, a\sin t, bt)$. Calcular la ecuacion del plano osculador en un punto arbitrario y verificar que depende de $t$.

### Ejercicio 10

Sea $\alpha$ una curva con $\kappa > 0$. Si $\alpha$ es geodesica sobre una superficie $S$, demostrar que su plano normal contiene al normal de $S$.

### Ejercicio 11

Sea $\gamma$ una curva con $\tau \equiv 0$. Demostrar que todos los planos rectificadores coinciden con el plano osculador.

### Ejercicio 12

Sea $\alpha$ una curva con $\kappa > 0$ y $\tau \neq 0$. Si $\alpha$ tiene autointerseccion en $p$ y $q$, demostrar que el plano osculador en $p$ puede diferir del plano osculador en $q$.

### Ejercicio 13

Sea $\gamma$ una curva con curvatura $\kappa$ y torsion $\tau$. Demostrar que el triedro $(T,N,B)$ determina univocamente la posicion de $\gamma$ modulo movimiento rgido.

### Ejercicio 14

Sea $\alpha$ una curva con $\kappa > 0$. Demostrar que la formula de Taylor de $\alpha$ en $s_0$ hasta orden 2 es $\alpha(s) = \alpha(s_0) + (s-s_0)T(s_0) + \frac{(s-s_0)^2}{2}\kappa(s_0)N(s_0) + O(|s-s_0|^3)$.

### Ejercicio 15

Sea $\gamma$ una curva con $\kappa > 0$ y $\tau \neq 0$. Si $\gamma$ es tangente al plano $xy$ en un punto, demostrar que $\tau \neq 0$ en ese punto.

## Soluciones detalladas

### Solucion 1

La distancia de $x$ al plano osculador es $|\langle x - \alpha(s_0), B(s_0)\rangle|$. Expandiendo $\alpha(s) = \alpha(s_0) + (s-s_0)T + \frac{(s-s_0)^2}{2}\kappa N + O(|s-s_0|^3)$, se obtiene $\langle \alpha(s) - \alpha(s_0), B\rangle = O(|s-s_0|^3)$ porque $\langle T, B\rangle = \langle N, B\rangle = 0$.

$$\square$$

### Solucion 2

Para $\gamma(t) = (t, t^2, t^3)$: $\gamma'(0) = (1, 0, 0)$, $\gamma''(0) = (0, 2, 0)$, hence el plano osculador en $t = 0$ es $\langle (x,y,z), B(0)\rangle = 0$. Aqui $B(0) = T(0) \times N(0) = (1,0,0) \times (0,1,0)/\kappa(0) = (0,0,1)/\kappa(0)$, hence el plano osculador es $z = 0$. El plano normal es $\langle (x,y,z), T(0)\rangle = 0$, es decir, $x = 0$. El plano rectificador es $\langle (x,y,z), N(0)\rangle = 0$, es decir, $y = 0$.

$$\square$$

### Solucion 3

La distancia al plano rectificador es $|\langle \alpha(s) - \alpha(s_0), N(s_0)\rangle|$. Expandiendo: $\alpha(s) = \alpha(s_0) + (s-s_0)T + \frac{(s-s_0)^2}{2}\kappa N + O(|s-s_0|^3)$. Tomando producto con $N(s_0)$: $\langle \alpha(s) - \alpha(s_0), N(s_0)\rangle = \frac{(s-s_0)^2}{2}\kappa(s_0) + O(|s-s_0|^3) = O(|s-s_0|^2)$.

$$\square$$

### Solucion 4

Si $\gamma$ es plana, existe un plano $\Pi$ que contiene toda la traza. En cada punto $s$, el plano osculador $\operatorname{span}\{T(s), N(s)\}$ coincide con $\Pi$ porque $T$ y $N$estan contenidos en $\Pi$. Hence el plano osculador es constante e igual a $\Pi$.

$$\square$$

### Solucion 5

Parametrizando la helice: $\gamma(t) = (a\cos t, a\sin t, bt)$. El plano osculador en $t$ es $\operatorname{span}\{T(t), N(t)\} = \operatorname{span}\{(-\sin t, \cos t, b/\sqrt{a^2+b^2}), (-\cos t, -\sin t, 0)\}$, que depende de $t$. Anlogamente, los planos normal y rectificador varian con $t$.

$$\square$$

### Solucion 6

Si el plano osculador es horizontal, entonces $B(s_0)$ es vertical. Como $B = T \times N$, la normal $N$ debe estar en el plano horizontal, es decir, $\langle N(s_0), e_3\rangle = 0$.

$$\square$$

### Solucion 7

La evoluta $\beta(s) = \alpha(s) + \rho(s)N(s)$. Esta expresion es la suma de $\alpha(s)$, que esta en el plano osculador, y $\rho(s)N(s)$, que esta en el plano normal. Pero $\rho(s)N(s)$ es ortogonal a $T(s)$, hence $\beta(s) - \alpha(s)$ esta en el plano normal.

$$\square$$

### Solucion 8

Los tres vectores del triedro en cada punto $s$ definen tres planos: osculador, normal y rectificador. Como el triedro depende de tres funciones escalares ($s$, $\kappa$, $\tau$), la familia de planos osculadores depende de tres parametros.

$$\square$$

### Solucion 9

$T(t) = (-\sin t, \cos t, b/\sqrt{a^2+b^2})$, $N(t) = (-\cos t, -\sin t, 0)$. El plano osculador es $\langle (x,y,z) - \gamma(t), B(t)\rangle = 0$ con $B(t) = T \times N = (b\sin t/\sqrt{a^2+b^2}, -b\cos t/\sqrt{a^2+b^2}, a/\sqrt{a^2+b^2})$. Esta ecuacion depende de $t$.

$$\square$$

### Solucion 10

Si $\alpha$ es geodesica sobre $S$, entonces $D_T T = 0$. Esto implica que la aceleracion $\alpha''$ es normal a $S$, es decir, $\alpha'' = \langle \alpha'', N\rangle N$. EI plano normal $\operatorname{span}\{N, B\}$ contiene a $N$, hence contiene al normal de $S$.

$$\square$$

### Solucion 11

Si $\tau \equiv 0$, entonces $B' = -\tau N = 0$, hence $B$ es constante. Como $B \perp T$ y $B \perp N$, el plano rectificador $\operatorname{span}\{T, B\}$ coincide con el plano osculador $\operatorname{span}\{T, N\}$.

$$\square$$

### Solucion 12

En un punto de autointerseccion, los vectores tangentes de las dos ramas de la curva pueden ser distintos, hence los planos osculadores en $p$ y $q$ pueden ser diferentes.

$$\square$$

### Solucion 13

El triedro $(T,N,B)$ satisface las ecuaciones de Frenet, que determinan la curvatura y torsion. Por el teorema fundamental, estas funciones determinan la curva modulo isometra del espacio.

$$\square$$

### Solucion 14

Esta es la expansion de Taylor de $\alpha$ en $s_0$ usando el triedro de Frenet. Se obtiene directamente de $\alpha'(s) = T(s)$ y $T'(s) = \kappa(s)N(s)$.

$$\square$$

### Ejercicio 15

Si $\gamma$ es tangente al plano $xy$ en $s_0$, entonces $B(s_0)$ es perpendicular al plano $xy$, es decir, paralelo al eje $z$. Como $\tau \neq 0$, $B$ varia con $s$, hence el plano osculador no puede ser paralelo al plano $xy$ en ningun entorno de $s_0$.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1994). *Differential Geometry of Curves and Surfaces*. Prentice Hall.
2. Kuehnel, W. (2006). *Differential Geometry*. AMS.
3. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 2. Publish or Perish.
4. O'Neill, B. (1997). *Elementary Differential Geometry*. Academic Press.
