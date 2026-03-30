---
title: El Teorema de Serret-Frenet
description: Formulas de Frenet como sistema estructural de curvas espaciales y su demostracion conceptual.
---

# El Teorema de Serret-Frenet

## Enunciado estructural

Sea $\alpha:I\to\mathbb{R}^3$ una curva de clase $C^3$ parametrizada por longitud de arco, con curvatura estrictamente positiva. Entonces existen campos unitarios $T,N,B$ a lo largo de la curva tales que

$$
T=\alpha',
\qquad
T'=\kappa N,
$$

$$
N'=-\kappa T+\tau B,
$$

$$
B'=-\tau N.
$$

Estas son las **ecuaciones de Serret-Frenet**.

## Por que el teorema importa

No se trata solo de una coleccion de identidades. El contenido real es que la geometria local completa de una curva espacial regular queda codificada por la evolucion de un triedro ortonormal gobernado por dos funciones escalares: curvatura y torsion.

## Paso 1: el tangente unitario

Como la curva esta parametrizada por longitud de arco,

$$
\|\alpha'(s)\|=1.
$$

Definimos

$$
T(s)=\alpha'(s).
$$

Al derivar $\langle T,T\rangle=1$, se obtiene

$$
\langle T',T\rangle=0.
$$

Luego $T'$ es ortogonal a $T$.

## Paso 2: la normal principal

Si $\kappa(s)=\|T'(s)\|>0$, definimos

$$
N(s)=\frac{T'(s)}{\|T'(s)\|}.
$$

Entonces

$$
T'(s)=\kappa(s)N(s).
$$

Aqui aparece la curvatura como el modulo del cambio del tangente.

## Paso 3: la binormal

Definimos

$$
B(s)=T(s)\times N(s).
$$

Como $T$ y $N$ son ortonormales, $B$ tambien es unitario y ortogonal a ambos. El triedro $(T,N,B)$ forma una base ortonormal positiva de $\mathbb{R}^3$.

## Paso 4: derivada de la normal

Dado que $N$ es unitario, se tiene

$$
\langle N',N\rangle=0,
$$

asi que $N'$ pertenece al plano generado por $T$ y $B$. Escribimos

$$
N'=aT+bB.
$$

Para hallar $a$, derivamos $\langle N,T\rangle=0$:

$$
\langle N',T\rangle+\langle N,T'\rangle=0.
$$

Usando $T'=\kappa N$ obtenemos

$$
a=-\kappa.
$$

El coeficiente restante se define como la torsion:

$$
b=\tau.
$$

Con ello,

$$
N'=-\kappa T+\tau B.
$$

## Paso 5: derivada de la binormal

Derivando $B=T\times N$,

$$
B'=T'\times N+T\times N'.
$$

Sustituyendo las formulas ya halladas:

$$
B'=(\kappa N)\times N+T\times(-\kappa T+\tau B)=-\tau N.
$$

## Significado de cada ecuacion

- $T'=\kappa N$: el tangente gira hacia la normal con velocidad $\kappa$.
- $N'=-\kappa T+\tau B$: la normal compensa el giro del tangente y registra la salida del plano osculador.
- $B'=-\tau N$: la binormal solo cambia cuando hay torsion.

## Caso plano

Si $\tau\equiv 0$, entonces

$$
B'\equiv 0,
$$

luego la binormal es constante y la curva queda contenida en un plano fijo. Esta es la version diferencial precisa de la planaridad.

## Escritura matricial

El triedro puede escribirse como matriz columna

$$
F=(T\;N\;B),
$$

y las ecuaciones de Frenet toman la forma

$$
F'=FA,
$$

donde

$$
A=
\begin{pmatrix}
0 & -\kappa & 0 \\
\kappa & 0 & -\tau \\
0 & \tau & 0
\end{pmatrix}.
$$

La matriz $A$ es antisimetrica. Esto refleja la preservacion ortonormal del marco.

## Contenido conceptual del teorema

El teorema de Serret-Frenet muestra que la geometria local de una curva no se estudia directamente sobre la posicion, sino sobre la evolucion de un marco movil. Esta idea reaparece en superficies, variedades riemannianas y teoria gauge: la geometria se codifica mediante ecuaciones estructurales de marcos adaptados.

## Cierre

Las ecuaciones de Serret-Frenet no son una curiosidad algebraica, sino el sistema fundamental que organiza la teoria local de curvas espaciales. Separan giro tangencial y torsion espacial, y convierten el estudio de curvas en un problema rigido de ecuaciones diferenciales lineales sobre marcos moviles.

## Ejercicios

### Ejercicio 1

Sea $\alpha(s)$ parametrizada por longitud de arco con $\kappa > 0$. Demostrar que las formulas de Frenet implican $\frac{d}{ds}\|T\|^2 = 0$, $\frac{d}{ds}\|N\|^2 = 0$, $\frac{d}{ds}\|B\|^2 = 0$.

### Ejercicio 2

Sea $\alpha$ una helice circular con radio $a$ y paso $b$. Calcular las componentes del triedro de Frenet y verificar que $T, N, B$ rotan uniformemente alrededor del eje de la helice.

### Ejercicio 3

Sea $\alpha(s)$ parametrizada por longitud de arco con $\kappa > 0$. Si $\alpha$ es geodesica sobre una superficie $S$, demostrar que $\alpha''(s) = \kappa(s)N(s)$ yace en la direccion normal de $S$.

### Ejercicio 4

Sea $\gamma(t) = (t, t^2, t^3)$. Verificar que el triedro de Frenet esta bien definido en $t = 0$ iff $\kappa(0) \neq 0$.

### Ejercicio 5

Sea $\alpha$ parametrizada por longitud de arco con $\kappa > 0$. Si $\alpha$ es geodesica sobre una superficie $S$, demostrar que $\alpha''(s) = \kappa(s)N(s)$.

### Ejercicio 6

Sea $\gamma(t) = (e^t\cos t, e^t\sin t, e^t)$. Calcular el triedro de Frenet en $t = 0$.

### Ejercicio 7

Sea $\alpha$ una curva con $\kappa > 0$. Demostrar que $N(s) = \frac{\alpha''(s)}{\|\alpha''(s)\|}$.

### Ejercicio 8

Sea $\gamma$ una curva con $\kappa > 0$ y $\tau \neq 0$. Demostrar que $\|\Omega\| = \sqrt{\kappa^2 + \tau^2}$ donde $\Omega = \tau T + \kappa B$ es el vector de Darboux.

### Ejercicio 9

Sea $\alpha$ una curva con $\kappa > 0$. Demostrar que $\frac{d}{ds}\det(T,N,B) = 0$.

### Ejercicio 10

Sea $\gamma$ una curva con $\kappa > 0$ y $\tau \neq 0$. Si $\gamma$ es geodesica sobre una superficie $S$, demostrar que $\tau = 0$.

### Ejercicio 11

Sea $\gamma$ una curva con $\kappa > 0$ y $\tau \neq 0$. Si $\gamma$ es geodesica sobre $S^2$, demostrar que $\gamma$ es un arco de circunferencia maxima.

### Ejercicio 12

Sea $\alpha$ una curva con $\kappa > 0$. Si $\alpha$ es geodesica sobre una superficie $S$ con normal $N_S$, demostrar que $N_S = \pm N$.

### Ejercicio 13

Sea $\alpha$ una curva con triedro $(T,N,B)$. Demostrar que $\langle T', B\rangle = -\kappa\tau$.

### Ejercicio 14

Sea $\gamma$ una curva con $\kappa > 0$ y $\tau \neq 0$. Si $\gamma$ es una curva cerrada, demostrar que $\int_0^L \tau\,ds = 0$.

### Ejercicio 15

Sea $\alpha$ una curva parametrizada por longitud de arco con $\kappa > 0$. Demostrar que la formula de Taylor de $\alpha$ en $s_0$ hasta orden 2 es $\alpha(s) = \alpha(s_0) + (s-s_0)T(s_0) + \frac{(s-s_0)^2}{2}\kappa(s_0)N(s_0) + O(|s-s_0|^3)$.

## Soluciones detalladas

### Solucion 1

$\|T\|^2 = \langle T, T\rangle = 1$, hence $\frac{d}{ds}\langle T, T\rangle = 2\langle T', T\rangle = 0$. Anlogamente para $N$ y $B$.

$$\square$$

### Solucion 2

Parametrizando la helice: $\gamma(t) = (a\cos t, a\sin t, bt)$. Con $\|\gamma'\| = \sqrt{a^2+b^2}$, se obtiene $T(t) = (-\frac{a}{\sqrt{a^2+b^2}}\sin t, \frac{a}{\sqrt{a^2+b^2}}\cos t, \frac{b}{\sqrt{a^2+b^2}})$, $N(t) = (-\cos t, -\sin t, 0)$, $B(t) = (\frac{b}{\sqrt{a^2+b^2}}\sin t, -\frac{b}{\sqrt{a^2+b^2}}\cos t, \frac{a}{\sqrt{a^2+b^2}})$. El triedro rota uniformemente.

$$\square$$

### Solucion 3

Si $\alpha$ es geodesica sobre $S$, $D_T T = 0$. En el triedro de Frenet, $\alpha'' = D_T T + \langle \alpha'', N\rangle N = \kappa N$. Ademas $D_T T \perp T$, hence $\alpha''$ es paralelo al normal de $S$.

$$\square$$

### Solucion 4

$\gamma'(t) = (1, 2t, 3t^2)$, $\|\gamma'(0)\| = 1$, hence es regular en $t = 0$. $\gamma''(t) = (0, 2, 6t)$, $\gamma''(0) = (0, 2, 0)$, hence $\|\gamma''(0)\| = 2 \neq 0$, $\kappa(0) = 2$. El triedro de Frenet esta bien definido.

$$\square$$

### Solucion 5

Si $\alpha$ es geodesica sobre $S$, $D_T T = 0$. En el triedro de Frenet, $\alpha'' = D_T T + \langle \alpha'', N\rangle N = \kappa N$. Ademas $D_T T \perp T$, hence $\alpha''$ es paralelo al normal de $S$.

$$\square$$

### Solucion 6

$\gamma'(t) = (e^t\cos t - e^t\sin t, e^t\sin t + e^t\cos t, e^t)$, $\|\gamma'\| = \sqrt{3}e^t$. $T(0) = (1,1,1)/\sqrt{3}$. $\gamma''(t) = (-2e^t\sin t, 2e^t\cos t, e^t)$, $\gamma''(0) = (0, 2, 1)$. $T'(0) = \frac{d}{dt}(\gamma'/\|\gamma'\|)_{t=0} = (-1/3, 2/3, -1/3)$. $N(0) = (-1, 2, -1)/\sqrt{6}$. $B = T \times N$.

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

Si $\gamma$ es geodesica sobre $S$, $D_T T = 0$. Descomponiendo $\alpha'' = D_T T + \langle \alpha'', N\rangle N = \kappa N$. La torsion $\tau = -\langle B', N\rangle$. Como $B = T \times N$, $B' = T' \times N + T \times N' = \kappa N \times N + T \times (-\kappa T + \tau B) = \tau B$. Hence $\langle B', N\rangle = 0$, es decir, $\tau = 0$.

$$\square$$

### Solucion 11

En $S^2$ con curvatura $K = 1$, la unica geodesica cerrada es un arco de circunferencia maxima. Si $\gamma$ es geodesica sobre $S^2$, su curvatura geodesica es cero, hence $\gamma$ es una circunferencia maxima.

$$\square$$

### Solucion 12

Si $\alpha$ es geodesica, $D_T T = 0$, hence $\alpha'' = \kappa N$. Como $\alpha''$ es perpendicular al plano tangente de $S$, se tiene $N_S = \pm N$.

$$\square$$

### Solucion 13

$\langle T', B\rangle = \langle \kappa N, B\rangle = 0$. Derivando $\langle T, B\rangle = 0$: $\langle T', B\rangle + \langle T, B'\rangle = 0$, hence $\langle T, B'\rangle = -\kappa$. Como $B' = -\tau N$, se tiene $\langle T, -\tau N\rangle = -\kappa\tau$, es decir, $\langle T', B\rangle = -\kappa\tau$.

$$\square$$

### Solucion 14

$B' = -\tau N$. Integrando: $B(L) - B(0) = -\int_0^L \tau N\,ds$. Si $\alpha$ es cerrada, $B(L) = B(0)$, hence $\int_0^L \tau N\,ds = 0$. Para una curva cerrada, el plano osculador vuelve a su posicion inicial, lo que implica $\int_0^L \tau\,ds = 0$.

$$\square$$

### Solucion 15

Esta es la expansion de Taylor de $\alpha$ en $s_0$ usando el triedro de Frenet. Se obtiene directamente de $\alpha'(s) = T(s)$ y $T'(s) = \kappa(s)N(s)$. Integrando: $\alpha(s) = \alpha(s_0) + \int_{s_0}^s T(u)\,du = \alpha(s_0) + (s-s_0)T(s_0) + \frac{(s-s_0)^2}{2}\kappa(s_0)N(s_0) + O(|s-s_0|^3)$.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1994). *Differential Geometry of Curves and Surfaces*. Prentice Hall.
2. Kuehnel, W. (2006). *Differential Geometry*. AMS.
3. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 2. Publish or Perish.
4. O'Neill, B. (1997). *Elementary Differential Geometry*. Academic Press.
