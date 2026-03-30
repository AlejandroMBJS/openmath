---
title: El Triedro de Serret-Frenet
description: Marco movil T-N-B, formulas de Frenet, curvatura, torsion y reconstruccion local de curvas espaciales.
---

# El Triedro de Serret-Frenet

## Del tangente al marco movil

Para curvas espaciales, la tangente no basta para describir la geometria local. Hace falta un sistema ortonormal movil adaptado a la curva. Ese sistema es el triedro de Serret-Frenet:

$$
(T,N,B).
$$

## Hipotesis

Sea $\alpha:I\to\mathbb{R}^3$ una curva de clase $C^3$ parametrizada por longitud de arco, con curvatura estrictamente positiva:

$$
\kappa(s)=\|\alpha''(s)\|>0.
$$

Entonces definimos

$$
T(s)=\alpha'(s),
$$

$$
N(s)=\frac{T'(s)}{\|T'(s)\|},
$$

$$
B(s)=T(s)\times N(s).
$$

## Formulas de Frenet

Las derivadas del triedro satisfacen

$$
T'=\kappa N,
$$

$$
N'=-\kappa T+\tau B,
$$

$$
B'=-\tau N.
$$

La funcion $\kappa$ es la curvatura y $\tau$ la torsion.

## Significado de la torsion

La torsion mide cuanto se aparta la curva del plano osculador. Si $\tau\equiv 0$, la curva es plana.

### Idea de prueba

De $B'=-\tau N$ se sigue que, si $\tau=0$, el vector binormal es constante. Entonces la curva queda contenida en un plano perpendicular a ese binormal fijo.

## Planos canonicos

El triedro determina tres planos:

- plano osculador: generado por $T$ y $N$;
- plano normal: generado por $N$ y $B$;
- plano rectificador: generado por $T$ y $B$.

## Ejemplo: helice circular

Para

$$
\gamma(t)=(a\cos t,a\sin t,bt),
$$

tras reparametrizar por longitud de arco se obtiene

$$
\kappa=\frac{a}{a^2+b^2},
\qquad
\tau=\frac{b}{a^2+b^2}.
$$

Ambas constantes son no nulas. La helice es el modelo canonico de curva con curvatura y torsion constantes.

## Formula de la torsion

Para una parametrizacion arbitraria regular con $\gamma'\times\gamma''\neq 0$,

$$
\tau(t)=\frac{\det(\gamma',\gamma'',\gamma''')}{\|\gamma'\times\gamma''\|^2}.
$$

## Teorema fundamental de curvas espaciales

Dadas funciones suaves

$$
\kappa(s)>0, \qquad \tau(s),
$$

en un intervalo, existe una curva parametrizada por longitud de arco cuya curvatura y torsion son precisamente esas, y es unica salvo movimiento rigido directo del espacio.

## Cierre

El triedro de Frenet organiza la geometria local de curvas espaciales en torno a dos invariantes: curvatura y torsion. Con ellos, la curva deja de ser solo una trayectoria y se convierte en un objeto determinado por un sistema diferencial rigido.

## Ejercicios

### Ejercicio 1

Sea $\alpha(s)$ parametrizada por longitud de arco con $\kappa > 0$. Demostrar que $\langle T', N\rangle = \kappa$ y $\langle T', B\rangle = 0$.

### Ejercicio 2

Sea $\gamma(t) = (t, t^2, t^3)$. Verificar que el triedro de Frenet esta bien definido en $t = 0$ iff $\kappa(0) \neq 0$.

### Ejercicio 3

Sea $\alpha$ una helice circular con radio $a$ y paso $b$. Calcular las componentes del triedro de Frenet y verificar que $T, N, B$ rotan uniformemente alrededor del eje de la helice.

### Ejercicio 4

Sea $\alpha$ una curva con $\kappa > 0$ y $\tau \neq 0$. Demostrar que $\|T'\| = \kappa$ y $\|B'\| = |\tau|$.

### Ejercicio 5

Sea $\gamma(t) = (e^t\cos t, e^t\sin t, e^t)$. Calcular el triedro de Frenet en $t = 0$.

### Ejercicio 6

Sea $\alpha$ parametrizada por longitud de arco con $\kappa > 0$. Si $\alpha$ es geodesica sobre una superficie $S$, demostrar que $\alpha''(s) = \kappa(s)N(s)$ yace en la direccion normal de $S$.

### Ejercicio 7

Sea $\alpha$ una curva con $\kappa > 0$. Demostrar que $N(s) = \frac{\alpha''(s)}{\|\alpha''(s)\|}$.

### Ejercicio 8

Sea $\gamma$ una curva con $\kappa > 0$ y $\tau \neq 0$. Demostrar que $\|\Omega\| = \sqrt{\kappa^2 + \tau^2}$ donde $\Omega = \tau T + \kappa B$ es el vector de Darboux.

### Ejercicio 9

Sea $\alpha$ una curva con $\kappa > 0$. Demostrar que $\frac{d}{ds}\det(T,N,B) = 0$.

### Ejercicio 10

Sea $\gamma$ una curva con $\kappa > 0$ y $\tau \neq 0$. Si $\gamma$ es geodesica sobre una superficie $S$, demostrar que $\tau = 0$.

### Ejercicio 11

Sea $\gamma$ una curva con $\kappa > 0$ y $\tau \neq 0$. Si $\gamma$ es una geodesica sobre $S^2$, demostrar que $\gamma$ es un arco de circunferencia maxima.

### Ejercicio 12

Sea $\alpha$ una curva con $\kappa > 0$. Si $\alpha$ es geodesica sobre una superficie $S$ con normal $N_S$, demostrar que $N_S = \pm N$.

### Ejercicio 13

Sea $\alpha$ una curva con $\kappa > 0$. Si $\alpha$ es geodesica sobre una superficie $S$, demostrar que $\alpha''(s) = \kappa(s)N(s)$.

### Ejercicio 14

Sea $\alpha$ una curva con triedro $(T,N,B)$. Demostrar que $\langle T', B\rangle = -\kappa\tau$.

### Ejercicio 15

Sea $\gamma$ una curva con $\kappa > 0$ y $\tau \neq 0$. Si $\gamma$ es una curva cerrada, demostrar que $\int_0^L \tau\,ds = 0$.

## Soluciones detalladas

### Solucion 1

Por definicion del triedro de Frenet: $T' = \kappa N$, luego $\langle T', N\rangle = \kappa$ y $\langle T', B\rangle = 0$.

$$\square$$

### Solucion 2

$\gamma'(t) = (1, 2t, 3t^2)$, $\|\gamma'(0)\| = 1$, hence es regular en $t = 0$. $\gamma''(t) = (0, 2, 6t)$, $\gamma''(0) = (0, 2, 0)$, hence $\|\gamma''(0)\| = 2 \neq 0$, $\kappa(0) = 2$. El triedro de Frenet esta bien definido.

$$\square$$

### Solucion 3

Parametrizando la helice: $\gamma(t) = (a\cos t, a\sin t, bt)$. Con $\|\gamma'\| = \sqrt{a^2+b^2}$, se obtiene $T(t) = (-\frac{a}{\sqrt{a^2+b^2}}\sin t, \frac{a}{\sqrt{a^2+b^2}}\cos t, \frac{b}{\sqrt{a^2+b^2}})$, $N(t) = (-\cos t, -\sin t, 0)$, $B(t) = (\frac{b}{\sqrt{a^2+b^2}}\sin t, -\frac{b}{\sqrt{a^2+b^2}}\cos t, \frac{a}{\sqrt{a^2+b^2}})$. El triedro rota uniformemente.

$$\square$$

### Solucion 4

Por las ecuaciones de Frenet, $\|T'\| = \|\kappa N\| = \kappa$, $\|B'\| = \|-\tau N\| = |\tau|$.

$$\square$$

### Solucion 5

$\gamma'(t) = (e^t\cos t - e^t\sin t, e^t\sin t + e^t\cos t, e^t)$, $\|\gamma'\| = \sqrt{3}e^t$. $T(0) = (1,1,1)/\sqrt{3}$. $\gamma''(t) = (-2e^t\sin t, 2e^t\cos t, e^t)$, $\gamma''(0) = (0, 2, 1)$. $T'(0) = \frac{d}{dt}(\gamma'/\|\gamma'\|)_{t=0} = (0, 2, 1)/\sqrt{3} - (1,1,1) \cdot \frac{3}{3} = (-1/3, 2/3, -1/3)$. $N(0) = (-1, 2, -1)/\sqrt{6}$. $B = T \times N$.

$$\square$$

### Solucion 6

Si $\alpha$ es geodesica sobre $S$, $D_T T = 0$. En el triedro de Frenet, $\alpha'' = D_T T + \langle \alpha'', N\rangle N = \kappa N$. Ademas $D_T T \perp T$, hence $\alpha''$ es paralelo al normal de $S$.

$$\square$$

### Solucion 7

Si $\|\gamma'\| = 1$, $\gamma'' = D_T T + \langle \gamma'', N\rangle N = \kappa N$. Como $\kappa > 0$, $N = \gamma''/\|\gamma''\| = \gamma''/\kappa$.

$$\square$$

### Solucion 8

El vector de Darboux es $\Omega = \tau T + \kappa B$. Su norma es $\|\Omega\| = \sqrt{\tau^2 + \kappa^2}$ porque $T$ y $B$ son ortonormales. Este vector codifica la velocidad angular del triedro.

$$\square$$

### Solucion 9

$\det(T,N,B) = \langle T, N \times B\rangle = \langle T, T\rangle = 1$. Derivando: $\frac{d}{ds}\det(T,N,B) = \langle T', N \times B\rangle + \langle T, N' \times B\rangle + \langle T, N \times B'\rangle = \langle \kappa N, N \times B\rangle + \langle -\kappa T + \tau B, N \times B\rangle + \langle T, N \times (-\tau N)\rangle = 0$.

$$\square$$

### Solucion 10

Si $\gamma$ es geodesica sobre $S$, $D_T T = 0$, hence $\gamma'' = \kappa N$. Como $N$ es paralelo al normal de $S$, el plano osculador contiene al normal de $S$, lo que implica que $\tau = 0$ porque la torsion mide la variacion del plano osculador.

$$\square$$

### Solucion 11

En $S^2$ con curvatura $K = 1$, la unica geodesica cerrada es un arco de circunferencia maxima. Si $\gamma$ es geodesica sobre $S^2$, su curvatura geodesica es cero, hence $\gamma$ es una circunferencia maxima.

$$\square$$

### Solucion 12

Si $\alpha$ es geodesica, $D_T T = 0$, hence $\alpha'' = \kappa N$. Como $\alpha''$ es perpendicular al plano tangente de $S$, se tiene $N_S = \pm N$.

$$\square$$

### Solucion 13

Si $\alpha$ es geodesica sobre $S$, $D_T T = 0$. En el triedro de Frenet, $\alpha'' = D_T T + \langle \alpha'', N\rangle N = \kappa N$. Ademas $D_T T \perp T$, hence $\alpha''$ es paralelo al normal de $S$.

$$\square$$

### Solucion 14

$\langle T', B\rangle = \langle \kappa N, B\rangle = 0$. Derivando $\langle T, B\rangle = 0$: $\langle T', B\rangle + \langle T, B'\rangle = 0$, hence $\langle T, B'\rangle = -\kappa$. Como $B' = -\tau N$, se tiene $\langle T, -\tau N\rangle = -\kappa\tau$, es decir, $\langle T', B\rangle = -\kappa\tau$.

$$\square$$

### Solucion 15

$B' = -\tau N$. Integrando: $B(L) - B(0) = -\int_0^L \tau N\,ds$. Si $\alpha$ es cerrada, $B(L) = B(0)$, hence $\int_0^L \tau N\,ds = 0$. Para una curva cerrada, el plano osculador vuelve a su posicion inicial, lo que implica $\int_0^L \tau\,ds = 0$.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1994). *Differential Geometry of Curves and Surfaces*. Prentice Hall.
2. Kuehnel, W. (2006). *Differential Geometry*. AMS.
3. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 2. Publish or Perish.
4. O'Neill, B. (1997). *Elementary Differential Geometry*. Academic Press.
