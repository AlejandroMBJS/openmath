---
title: Curvatura y Torsion
description: Invariantes diferenciales de curvas espaciales, formulas practicas y significado geometrico del giro y la salida del plano osculador.
---

# Curvatura y Torsion

## Dos invariantes, dos niveles de informacion

En el espacio, la curvatura por si sola no determina la geometria local de una curva. Hace falta un segundo invariante que mida cuanto se aparta la curva del plano osculador. Ese segundo invariante es la torsion.

## Curvatura

Para una curva parametrizada por longitud de arco $\alpha(s)$, la curvatura viene dada por

$$
\kappa(s)=\|T'(s)\|,
$$

donde $T=\alpha'$. Mide el giro del tangente.

## Torsion

Si $\kappa(s)>0$, el triedro de Frenet satisface

$$
B'(s)=-\tau(s)N(s).
$$

La torsion mide la rapidez con que gira el binormal, es decir, la variacion del plano osculador.

## Interpretacion

- $\kappa$: cuanto se dobla la curva;
- $\tau$: cuanto se sale del plano osculador.

Una curva plana puede tener curvatura no nula y torsion identicamente nula. Una helice tiene ambas no nulas.

## Formula para parametrizacion arbitraria

Si $\gamma(t)$ es regular y $\gamma'\times\gamma''\neq 0$, entonces

$$
\kappa(t)=\frac{\|\gamma'(t)\times\gamma''(t)\|}{\|\gamma'(t)\|^3},
$$

$$
\tau(t)=\frac{\det(\gamma'(t),\gamma''(t),\gamma'''(t))}{\|\gamma'(t)\times\gamma''(t)\|^2}.
$$

## Por que estas formulas son naturales

El producto cruz $\gamma'\times\gamma''$ detecta desviacion del movimiento respecto a una recta. El determinante triple detecta desviacion respecto al plano osculador. Por eso la curvatura aparece con derivadas hasta orden dos y la torsion hasta orden tres.

## Caso plano

Si la curva esta contenida en un plano fijo, entonces el binormal es constante y se obtiene

$$
\tau\equiv 0.
$$

La recíproca vale localmente para curvas regulares con curvatura positiva.

## Caso de la helice

Para

$$
\gamma(t)=(a\cos t,a\sin t,bt)
$$

se obtiene

$$
\kappa=\frac{a}{a^2+b^2},
\qquad
\tau=\frac{b}{a^2+b^2}.
$$

Esto muestra que la helice realiza un equilibrio rigido entre doblado y torsion.

## Invariancia por movimientos rigidos

Tanto $\kappa$ como $\tau$ son invariantes bajo traslaciones y rotaciones del espacio. La torsion cambia de signo bajo reflexiones, porque depende de la orientacion del triedro.

## Teorema fundamental de las curvas espaciales

El dato de $\kappa(s)>0$ y $\tau(s)$ determina la curva localmente, salvo movimiento rigido directo. Esta afirmacion muestra que curvatura y torsion son, juntas, un sistema completo de invariantes locales para curvas regulares espaciales.

## Descomposicion de la aceleracion

Si la curva no esta parametrizada por longitud de arco, la aceleracion admite la descomposicion

$$
\gamma''=v'T+v^2\kappa N,
$$

donde $v=\|\gamma'\|$. Aqui la torsion no aparece todavia porque la aceleracion vive en el plano osculador; la torsion surge al derivar una vez mas la geometria local.

## Cierre

La curvatura y la torsion separan dos aspectos de la geometria de una curva espacial: doblado y salida del plano osculador. Su combinacion organiza toda la teoria local de curvas en el espacio y prepara el teorema fundamental de Frenet.

## Ejercicios

### Ejercicio 1

Sea $\gamma(t) = (e^t\cos t, e^t\sin t, e^t)$. Calcular $\kappa(t)$ y $\tau(t)$. Verificar que $\tau(t) = \kappa(t)$.

### Ejercicio 2

Sea $\alpha(s)$ parametrizada por longitud de arco con $\kappa > 0$. Demostrar que $\alpha$ es una helice iff $\kappa/\tau$ es constante.

### Ejercicio 3

Sea $\gamma(t) = (t, t^2, t^3)$. Calcular $\kappa(t)$ y $\tau(t)$ en $t = 0$.

### Ejercicio 4

Sea $\alpha$ una curva con $\tau \neq 0$. Demostrar que $\alpha$ no es una curva plana.

### Ejercicio 5

Sea $\gamma$ una curva con $\kappa > 0$ y $\tau \neq 0$. Demostrar que la torsión $\tau$ puede calcularse como $\tau = \frac{\det(\alpha', \alpha'', \alpha''')}{\|\alpha' \times \alpha''\|^2}$.

### Ejercicio 6

Sea $\alpha$ una curva con curvatura $\kappa$ y torsion $\tau$. Si $\|\alpha'\| = 1$, demostrar que $\|\alpha''\| = \kappa$.

### Ejercicio 7

Sea $\gamma$ la curva $(t, \cosh t, \sinh t)$. Calcular $\kappa$ y $\tau$.

### Ejercicio 8

Sea $\alpha$ una curva con $\kappa > 0$ y $\tau$ continua. Demostrar que $\alpha$ esta determinada de manera unica por sus funciones $\kappa$ y $\tau$ modulo isometras del espacio.

### Ejercicio 9

Sea $\alpha$ una curva con $\kappa(s) = 1/(1+s^2)$ y $\tau(s) = 1/(1+s^2)$. Construir la curva.

### Ejercicio 10

Sea $\gamma$ una curva con $\kappa > 0$ y $\tau \neq 0$. Si $\gamma$ es una geodesica sobre una superficie $S$, demostrar que $\tau = 0$.

### Ejercicio 11

Sea $\alpha$ una curva closed con curvatura $\kappa > 0$. Demostrar que $\int_0^L \kappa\,ds = 2\pi n$.

### Ejercicio 12

Sea $\gamma$ una curva con $\kappa > 0$ y $\tau$ continua. Si $\int_0^L \tau\,ds = 0$, demostrar que $\gamma$ tiene al menos dos puntos donde $\tau$ cambia de signo.

### Ejercicio 13

Sea $\alpha$ una curva con $\kappa > 0$ y $\tau \neq 0$. Demostrar que $\alpha$ es una curva de Bnchner iff $\kappa$ y $\tau$ son constantes.

### Ejercicio 14

Sea $\gamma(t) = (a\cosh t, a\sinh t, at)$. Calcular la curvatura y la torsion.

### Ejercicio 15

Sea $\alpha$ una curva con $\kappa > 0$ y $\tau \neq 0$. Demostrar que $\alpha$ es tangente a un plano iff $\tau(s_0) = 0$ en algn $s_0$.

## Soluciones detalladas

### Solucion 1

$\gamma'(t) = (e^t\cos t - e^t\sin t, e^t\sin t + e^t\cos t, e^t)$, $\gamma''(t) = (-2e^t\sin t, 2e^t\cos t, e^t)$, $\gamma'''(t) = (-4e^t\cos t, -4e^t\sin t, e^t)$. Calculando: $\|\gamma' \times \gamma''\| = 2\sqrt{2}e^{2t}$, $\|\gamma'\|^3 = ( \sqrt{3}e^t)^3 = 3\sqrt{3}e^{3t}$. $\kappa = 2\sqrt{2}e^{2t}/(3\sqrt{3}e^{3t}) = 2/(3\sqrt{6}e^t})$. $\det(\gamma', \gamma'', \gamma''') = 2e^{3t} + 2e^{3t} = 4e^{3t}$. $\tau = 4e^{3t}/(8e^{4t}) = 1/(2e^t) = \kappa$.

$$\square$$

### Solucion 2

Si $\kappa/\tau = c$, entonces $\tau = \kappa/c$. Las ecuaciones de Frenet implican que $cT - B$ es paralelo a la direccion del eje de la helice. Recprocamente, si $\alpha$ es una helice, $\kappa$ y $\tau$ son constantes, hence $\kappa/\tau$ es constante.

$$\square$$

### Solucion 3

Parametrizando: $\gamma'(t) = (1, 2t, 3t^2)$, $\gamma''(t) = (0, 2, 6t)$, $\gamma'''(t) = (0, 0, 6)$. En $t = 0$: $\gamma'(0) = (1,0,0)$, $\gamma''(0) = (0,2,0)$, $\gamma'''(0) = (0,0,6)$. $\kappa(0) = \| (0,0,2) \| / 1 = 2$. $\tau(0) = \det((1,0,0), (0,2,0), (0,0,6)) / 4 = 12/4 = 3$.

$$\square$$

### Solucion 4

Si $\tau \neq 0$, entonces $B' = -\tau N \neq 0$, hence $B$ no es constante. Si la curva fuera plana, $B$ seria constante, contradiction.

$$\square$$

### Solucion 5

Esta es la formula de la torsion a partir de la parametrizacion arbitraria. Se obtiene de $\det(\alpha', \alpha'', \alpha''') = \langle \alpha' \times \alpha'', \alpha'''\rangle = \langle \kappa N, \alpha'''\rangle = \kappa\tau$.

$$\square$$

### Solucion 6

Como $\|\alpha'\| = 1$, $\alpha'' = D_T T + \langle \alpha'', N\rangle N = \kappa N$. Hence $\|\alpha''\| = \kappa$.

$$\square$$

### Solucion 7

$\gamma'(t) = (0, \sinh t, \cosh t)$, $\gamma''(t) = (0, \cosh t, \sinh t)$, $\gamma'''(t) = (0, \sinh t, \cosh t)$. $\kappa(t) = \|\gamma' \times \gamma''\|/\|\gamma'\|^3 = 1/(1+\sinh^2 t) = 1/\cosh^2 t$. $\tau(t) = \det(\gamma', \gamma'', \gamma''')/\|\gamma' \times \gamma''\|^2 = (\sinh^2 t - \cosh^2 t)/\cosh^4 t = -1/\cosh^2 t$.

$$\square$$

### Solucion 8

Esta es la parte de existencia del teorema fundamental. Resolviendo el sistema $F' = FA$ con las funciones $\kappa$ y $\tau$, se obtiene la curva $\alpha$.

$$\square$$

### Solucion 9

Integrando las ecuaciones de Frenet: $\theta(s) = \arctan s$, $\phi(s) = \arctan s$. La curva resultante es $\alpha(s) = \int_0^s (\cos\arctan u, \sin\arctan u, \arctan u)\,du$.

$$\square$$

### Solucion 10

Si $\gamma$ es geodesica sobre $S$, entonces $D_T T = 0$. Descomponiendo $\alpha'' = D_T T + \langle \alpha'', N\rangle N + \langle \alpha'', T\rangle T = \kappa N$. La torsion es $\tau = -\langle B', N\rangle$. Como $B = T \times N$, $B' = T' \times N + T \times N' = \kappa N \times N + T \times (-\kappa T + \tau B) = \tau B$. Hence $\langle B', N\rangle = 0$, es decir, $\tau = 0$.

$$\square$$

### Solucion 11

Por el teorema de rotacion tangencial de Hopf, $\int_0^L \kappa\,ds = 2\pi n$, donde $n$ es el numero de rotaciones del tangente.

$$\square$$

### Solucion 12

Como $\int_0^L \tau\,ds = 0$, si $\tau$ no cambiara de signo, la integral no podra ser cero. Por tanto $\tau$ debe cambiar de signo al menos dos veces.

$$\square$$

### Solucion 13

Si $\kappa$ y $\tau$ son constantes, integrando el sistema de Frenet se obtiene una helice circular. Recprocamente, una curva de Bnchner tiene curvatura y torsion constantes por definicion.

$$\square$$

### Solucion 14

$\gamma'(t) = (a\sinh t, a\cosh t, a)$, $\gamma''(t) = (a\cosh t, a\sinh t, 0)$, $\gamma'''(t) = (a\sinh t, a\cosh t, 0)$. $\kappa(t) = a^2/(a^2\cosh^2 t + a^2\sinh^2 t)^{3/2} = 1/(a\cosh(2t)^{3/2})$. $\tau(t) = \det(\gamma', \gamma'', \gamma''')/\|(\gamma' \times \gamma''\|^2 = a^3/(a^4\cosh^2(2t)) = 1/(a\cosh(2t))$.

$$\square$$

### Solucion 15

Si $\alpha$ es tangente a un plano en $s_0$, el plano osculador en $s_0$ coincide con ese plano. La torsion $\tau(s_0)$ mide la variacion del plano osculador, hence $\tau(s_0) = 0$ porque el plano no varia instantaneamente. Recprocamente, si $\tau(s_0) = 0$, el plano osculador tiene derivada nula, lo que indica que la curva es tangente a ese plano.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1994). *Differential Geometry of Curves and Surfaces*. Prentice Hall.
2. Kuehnel, W. (2006). *Differential Geometry*. AMS.
3. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 2. Publish or Perish.
4. O'Neill, B. (1997). *Elementary Differential Geometry*. Academic Press.
