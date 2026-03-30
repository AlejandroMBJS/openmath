---
title: Vectores Asociados al Triedro
description: Tangente, normal principal, binormal y vector de Darboux en la geometria local de curvas espaciales.
---

# Vectores Asociados al Triedro

## El marco movil basico

En una curva espacial regular con curvatura positiva, el triedro de Frenet proporciona tres vectores unitarios fundamentales:

$$
T, \qquad N, \qquad B.
$$

No son solo una base ortonormal: cada uno tiene significado geometrico preciso.

## Vector tangente

$$
T=\alpha'(s)
$$

indica la direccion instantanea de avance de la curva. Es el primer objeto diferencial y define la recta tangente.

## Vector normal principal

$$
N=\frac{T'}{\|T'\|}
$$

apunta hacia la direccion en la que el tangente esta girando. Es la direccion del centro de curvatura y del plano osculador junto con $T$.

## Vector binormal

$$
B=T\times N
$$

completa el triedro como vector ortogonal al plano osculador. Registra la informacion espacial que ya no se ve en un estudio puramente plano.

## Dependencia de la curvatura

El vector $N$ solo esta bien definido cuando $\kappa>0$. En puntos de curvatura nula, el marco de Frenet clasico puede degenerar.

## Vector de Darboux

El triedro rota a lo largo de la curva. Esa rotacion puede codificarse en el **vector de Darboux**

$$
\Omega=\tau T+\kappa B,
$$

que satisface, en forma simbolica,

$$
T'=\Omega\times T,
\qquad
N'=\Omega\times N,
\qquad
B'=\Omega\times B.
$$

## Interpretacion del vector de Darboux

El vector de Darboux resume la velocidad angular del marco de Frenet. Su componente en direccion $B$ controla el giro del tangente, y su componente en direccion $T$ controla la torsion del marco alrededor de la tangente.

## Planos determinados por los vectores

- $T$ y $N$ determinan el plano osculador;
- $N$ y $B$ determinan el plano normal;
- $T$ y $B$ determinan el plano rectificador.

Esto muestra que los vectores asociados al triedro no solo generan direcciones, sino toda la geometria lineal local de la curva.

## Ejemplo: curva plana

Si la curva es plana, $B$ es constante. Entonces el vector de Darboux reduce a

$$
\Omega=\kappa B.
$$

Esto expresa que el marco gira alrededor de una direccion fija perpendicular al plano de la curva.

## Ejemplo: helice

En una helice circular, tanto $\kappa$ como $\tau$ son constantes. El vector de Darboux tiene modulo constante y describe una rotacion uniforme del marco a lo largo de la curva.

## Cierre

Los vectores asociados al triedro convierten la geometria local de una curva en un sistema movil estructurado. Tangente, normal, binormal y vector de Darboux capturan direccion, curvatura, torsion y velocidad angular del marco de Frenet.

## Ejercicios

### Ejercicio 1

Sea $\alpha(s)$ parametrizada por longitud de arco con $\kappa > 0$. Si $T, N, B$ es el triedro de Frenet, demostrar que $\langle T', N\rangle = \kappa$ y $\langle T', B\rangle = 0$.

### Ejercicio 2

Sea $\gamma(t) = (t, t^2, t^3)$. Calcular el triedro de Frenet en $t = 0$ y verificar que $\|T'\| = \kappa$.

### Ejercicio 3

Sea $\alpha$ una curva con $\kappa > 0$. Si $\tau \neq 0$, demostrar que $B$ no es paralelo a ningun plano fijo.

### Ejercicio 4

Sea $\alpha$ una curva con triedro de Frenet $(T,N,B)$. Demostrar que $\det(T,N,B) = 1$ (orientacion positiva) iff la curvatura con signo es positiva.

### Ejercicio 5

Sea $\gamma(t) = (a\cos t, a\sin t, bt)$. Calcular el vector de Darboux y verificar que $\|\Omega\| = \sqrt{\kappa^2 + \tau^2}$.

### Ejercicio 6

Sea $\alpha$ una helice circular. Demostrar que el triedro de Frenet rota uniformemente alrededor del eje de la helice con velocidad angular $\|\Omega\|$.

### Ejercicio 7

Sea $\alpha$ una curva con $\kappa > 0$ y $\tau \neq 0$. Si $\alpha$ es una curva cerrada, demostrar que $\int_0^L \tau\,ds = 0$.

### Ejercicio 8

Sea $\gamma(t) = (t, \cosh t, \sinh t)$. Calcular $T, N, B$ en $t = 0$.

### Ejercicio 9

Sea $\alpha$ una curva con triedro $(T,N,B)$. Demostrar que la evoluta de $\alpha$ en el plano normal es la curva $\beta(s) = \alpha(s) + \rho(s)N(s)$.

### Ejercicio 10

Sea $\gamma$ una curva con curvatura $\kappa$ y torsion $\tau$. Si $\|\gamma'\| = 1$, demostrar que $\gamma''(s) = \kappa(s)N(s)$.

### Ejercicio 11

Sea $\alpha$ una curva con $\kappa > 0$. Si $\alpha$ es geodesica sobre una superficie $S$, demostrar que $\tau = 0$ iff $\alpha$ es una lnea de curvatura.

### Ejercicio 12

Sea $\gamma$ una curva con triedro $(T,N,B)$. Demostrar que $\frac{d}{ds}\langle T, B\rangle = -\kappa\tau$.

### Ejercicio 13

Sea $\alpha$ una curva con $\kappa > 0$ y $\tau$ continua. Demostrar que $\alpha$ es una curva de Bnchner iff $\kappa$ y $\tau$ son constantes.

### Ejercicio 14

Sea $\gamma$ una curva con curvatura $\kappa$ y torsion $\tau$. Si $\gamma$ es una curva cerrada, demostrar que $\int_0^L \kappa\,ds = 2\pi n$ para algun entero $n$.

### Ejercicio 15

Sea $\alpha$ una curva con triedro $(T,N,B)$. Demostrar que $\langle N', B\rangle = -\tau$.

## Soluciones detalladas

### Solucion 1

Por definicion del triedro de Frenet: $T' = \kappa N$, luego $\langle T', N\rangle = \kappa$ y $\langle T', B\rangle = 0$.

$$\square$$

### Solucion 2

Parametrizando por longitud de arco no es directo. Primero reparametrizamos. La velocidad $\|\gamma'(t)\| = \sqrt{1 + 4t^2 + 9t^4}$. La curvatura como funcion de $t$ se calcula por la formula $\kappa = \|\gamma' \times \gamma''\|/\|\gamma'\|^3$. En $t = 0$: $\gamma'(0) = (1,0,0)$, $\gamma''(0) = (0,2,0)$, hence $\gamma'(0) \times \gamma''(0) = (0,0,2)$. Luego $\kappa(0) = 2/1 = 2$, y $T'(0) = (0,2,0)$, con $\|T'(0)\| = 2$.

$$\square$$

### Solucion 3

$B' = -\tau N$. Si $\tau \neq 0$, entonces $B'$ no es nulo, hence $B$ no es constante. Si $B$ fuera paralelo a un plano fijo, entonces $B$ permanecera en la direccion de ese plano, lo que implicara $B' = 0$.

$$\square$$

### Solucion 4

El triedro $(T,N,B)$ siempre forma una base positiva de $\mathbb{R}^3$ porque $T \times N = B$. La curvatura con signo en el plano osculador es $\kappa_s = \det(T, N, N')/\|\!N'\|\! = \det(T, N, \kappa N + \cdots) = \kappa$. Por tanto $\kappa > 0$ iff $\det(T,N,B) = 1$.

$$\square$$

### Solucion 5

Para la helice: $\kappa = a/(a^2+b^2)$, $\tau = b/(a^2+b^2)$. El vector de Darboux es $\Omega = \tau T + \kappa B = \frac{b}{a^2+b^2}T + \frac{a}{a^2+b^2}B$. Su norma es $\|\Omega\| = \sqrt{\tau^2 + \kappa^2} = \sqrt{a^2+b^2}/(a^2+b^2) = 1/\sqrt{a^2+b^2}$.

$$\square$$

### Solucion 6

El triedro de Frenet de una helice circular satisface $T' = \kappa N$, $N' = -\kappa T + \tau B$, $B' = -\tau N$. Esto es equivalent a $\Omega' = \Omega \times \Omega = 0$, es decir, el triedro rota uniformemente alrededor del vector de Darboux $\Omega = \tau T + \kappa B$, que es constante.

$$\square$$

### Solucion 7

$B' = -\tau N$, hence $B(s) = B(0) - \int_0^s \tau N\,ds$. Si $\alpha$ es cerrada, $B(0) = B(L)$, luego $\int_0^L \tau N\,ds = 0$. Como $N$ es unitario, esto implica $\int_0^L \tau\,ds = 0$ si $\tau$ tiene signo constante. En general, la integral de la torsion sobre una curva cerrada es cero porque el binormal vuelve a su posicion inicial.

$$\square$$

### Solucion 8

$\gamma'(t) = (1, \sinh t, \cosh t)$, hence $\|\gamma'\| = \sqrt{1+\sinh^2 t+\cosh^2 t} = \sqrt{1+\cosh 2t}$. En $t = 0$: $\gamma'(0) = (1,0,1)$, $T(0) = (1,0,1)/\sqrt{2}$. $\gamma''(t) = (0, \cosh t, \sinh t)$, $\gamma''(0) = (0,1,0)$. $T'(0) = \frac{d}{dt}(\gamma'/\|\gamma'\|)_{t=0} = \frac{1}{\sqrt{2}}(0,1,0) - \frac{1}{2}(1,0,1) = (-1/2, 1/\sqrt{2}, -1/2)/\sqrt{2}$. Normalizando: $N(0) = (-1/\sqrt{2}, 1, -1/\sqrt{2})$. $B = T \times N$.

$$\square$$

### Solucion 9

La evoluta $\beta(s) = \alpha(s) + \rho(s)N(s)$ esta contenida en el plano normal porque $\beta(s) - \alpha(s) = \rho(s)N(s)$ es perpendicular a $T(s)$. Ademas, $\|\beta(s) - \alpha(s)\| = \rho(s)$ es el radio de curvatura.

$$\square$$

### Solucion 10

Si $\|\gamma'\| = 1$, entonces $\gamma'' = D_T\gamma' + \langle \gamma'', N\rangle N$. Como $D_T\gamma' \perp T$, se tiene $D_T\gamma' = 0$ para geodesicas, hence $\gamma'' = \langle \gamma'', N\rangle N = \kappa N$.

$$\square$$

### Solucion 11

Si $\alpha$ es geodesica sobre $S$, entonces $D_T T = 0$. Esto implica que $N$ es paralelo al normal de $S$. La torsion $\tau = -\langle B', N\rangle = -\langle T \times N, N'\rangle = -\langle T, N \times N'\rangle = 0$ iff $\alpha$ es una lnea de curvatura.

$$\square$$

### Solucion 12

$\frac{d}{ds}\langle T, B\rangle = \langle T', B\rangle + \langle T, B'\rangle = \langle \kappa N, B\rangle + \langle T, -\tau N\rangle = -\kappa\tau$.

$$\square$$

### Solucion 13

Una curva de Bnchner es aquella cuya curvatura y torsion son constantes. Recprocamente, si $\kappa$ y $\tau$ son constantes, la curva es una helice circular, que es un caso particular de curva de Bnchner.

$$\square$$

### Solucion 14

Por el teorema de rotacion tangencial de Hopf, $\int_0^L \kappa\,ds = 2\pi n$ para alguna curva closed, donde $n$ es el numero de rotaciones.

$$\square$$

### Solucion 15

$N' = -\kappa T + \tau B$, hence $\langle N', B\rangle = \langle -\kappa T, B\rangle + \langle \tau B, B\rangle = -\kappa\langle T, B\rangle + \tau = \tau$, porque $\langle T, B\rangle = 0$ por orthonormalidad.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1994). *Differential Geometry of Curves and Surfaces*. Prentice Hall.
2. Kuehnel, W. (2006). *Differential Geometry*. AMS.
3. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 2. Publish or Perish.
4. O'Neill, B. (1997). *Elementary Differential Geometry*. Academic Press.
