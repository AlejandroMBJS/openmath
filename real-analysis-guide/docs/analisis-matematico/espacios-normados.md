---
title: Espacios normados
description: Definicion de norma, metrica inducida, ejemplos estructurales, equivalencia de normas y geometria basica en espacios vectoriales normados.
---

# Espacios normados

## Motivacion e intuicion

En un espacio metrico solo se sabe medir distancia entre puntos. En un espacio normado ocurre algo mas rico: la distancia proviene de una magnitud asignada a cada vector,

$$
\|x\|,
$$

y por tanto la estructura lineal y la estructura metrica quedan entrelazadas.

Esta mezcla es una de las ideas fundamentales del analisis moderno. Permite formular de manera unificada preguntas como:

- cuando una sucesion de vectores converge;
- cuando una serie vectorial converge;
- que significa que una aplicacion lineal sea continua;
- como influye la geometria de la bola unitaria en la topologia del espacio.

En dimension finita casi todas las normas son equivalentes desde el punto de vista topologico. En dimension infinita esto deja de ser cierto, y ahi empieza la geometria real del analisis funcional.

::: tip Idea central
Un espacio normado no es solo un espacio vectorial con una funcion positiva. Es un espacio donde la norma controla al mismo tiempo tamano, distancia, continuidad y geometria convexa.
:::

## Prerrequisitos

Conviene manejar:

- espacios vectoriales reales o complejos;
- desigualdad triangular;
- espacios metricos y topologia inducida;
- convergencia y sucesiones de Cauchy.

## Definicion formal

Sea $V$ un espacio vectorial sobre $\mathbb{K}$, donde $\mathbb{K}=\mathbb{R}$ o $\mathbb{C}$.

Una aplicacion

$$
\|\cdot\|:V \to [0,\infty)
$$

es una **norma** si para todo $x,y \in V$ y todo $\lambda \in \mathbb{K}$ se cumplen las tres propiedades siguientes.

### Positividad definida

$$
\|x\| \ge 0
\quad \text{y} \quad
\|x\|=0 \iff x=0.
$$

### Homogeneidad absoluta

$$
\|\lambda x\| = |\lambda|\,\|x\|.
$$

### Desigualdad triangular

$$
\|x+y\| \le \|x\|+\|y\|.
$$

El par $(V,\|\cdot\|)$ se llama **espacio normado**.

## La metrica inducida por una norma

Toda norma define una distancia natural por medio de

$$
d(x,y)=\|x-y\|.
$$

### Proposicion 1

La aplicacion $d(x,y)=\|x-y\|$ define una metrica en $V$.

#### Demostracion

La no negatividad es inmediata porque $\|x-y\|\ge 0$. Ademas,

$$
d(x,y)=0
\iff
\|x-y\|=0
\iff
x-y=0
\iff
x=y.
$$

La simetria sigue de la homogeneidad:

$$
d(x,y)=\|x-y\|=\|-(y-x)\|=|-1|\,\|y-x\|=\|y-x\|=d(y,x).
$$

Por ultimo, para la desigualdad triangular,

$$
d(x,z)=\|x-z\|=\|(x-y)+(y-z)\| \le \|x-y\|+\|y-z\|=d(x,y)+d(y,z).
$$

Luego $d$ es una metrica.

### Consecuencia

Todo espacio normado es un espacio metrico, y por tanto posee una topologia inducida, nociones de abierto y cerrado, convergencia de sucesiones, continuidad, compacidad y completitud.

## Propiedades estructurales de la metrica inducida

La metrica inducida por una norma no es una metrica arbitraria.

### Invarianza por traslaciones

Para todo $x,y,a \in V$,

$$
d(x+a,y+a)=\|(x+a)-(y+a)\|=\|x-y\|=d(x,y).
$$

### Compatibilidad con dilataciones

Para todo $\lambda \in \mathbb{K}$,

$$
d(\lambda x,\lambda y)=\|\lambda(x-y)\|=|\lambda|\,\|x-y\|.
$$

Esto expresa que las homotecias multiplican todas las distancias por el factor $|\lambda|$.

### Desigualdad triangular inversa

Para todo $x,y \in V$,

$$
\big|\|x\|-\|y\|\big|\le \|x-y\|.
$$

#### Demostracion

Por desigualdad triangular,

$$
\|x\|=\|(x-y)+y\|\le \|x-y\|+\|y\|,
$$

de donde

$$
\|x\|-\|y\|\le \|x-y\|.
$$

Intercambiando $x$ e $y$ se obtiene

$$
\|y\|-\|x\|\le \|x-y\|.
$$

Al combinar ambas desigualdades,

$$
\big|\|x\|-\|y\|\big|\le \|x-y\|.
$$

### Corolario 2

La norma es una funcion continua, de hecho Lipschitz con constante $1$ respecto de la metrica inducida.

## Bolas y conjuntos geometricos asociados

Dado $a \in V$ y $r>0$, definimos:

$$
B(a,r)=\{x \in V:\|x-a\|<r\},
$$

$$
\overline{B}(a,r)=\{x \in V:\|x-a\|\le r\},
$$

$$
S(a,r)=\{x \in V:\|x-a\|=r\}.
$$

La bola unitaria abierta y cerrada son

$$
B(0,1), \qquad \overline{B}(0,1).
$$

La bola unitaria codifica casi toda la geometria de la norma.

### Proposicion 3

Toda bola abierta o cerrada en un espacio normado es convexa.

#### Demostracion

Probemos el caso de la bola cerrada unitaria; los demas casos se reducen por traslacion y reescalamiento.

Sean $x,y \in \overline{B}(0,1)$ y sea $t \in [0,1]$. Entonces

$$
\|tx+(1-t)y\|
\le
t\|x\|+(1-t)\|y\|
\le
t+(1-t)=1.
$$

Por tanto $tx+(1-t)y \in \overline{B}(0,1)$.

### Proposicion 4

La bola unitaria es equilibrada, en el sentido de que si $|\lambda|\le 1$ y $x \in \overline{B}(0,1)$, entonces

$$
\lambda x \in \overline{B}(0,1).
$$

#### Demostracion

Si $\|x\|\le 1$ y $|\lambda|\le 1$, entonces

$$
\|\lambda x\|=|\lambda|\,\|x\|\le 1.
$$

## Ejemplos fundamentales de normas

### En $\mathbb{R}^n$

Para $x=(x_1,\dots,x_n)$ y $1 \le p < \infty$, se define

$$
\|x\|_p=\left(\sum_{j=1}^n |x_j|^p\right)^{1/p}.
$$

Tambien se define la norma del supremo

$$
\|x\|_\infty=\max_{1 \le j \le n}|x_j|.
$$

Los casos mas usados son:

$$
\|x\|_1=\sum_{j=1}^n |x_j|,
\qquad
\|x\|_2=\left(\sum_{j=1}^n |x_j|^2\right)^{1/2},
\qquad
\|x\|_\infty=\max_j |x_j|.
$$

Estas normas inducen la misma topologia en dimension finita, aunque no miden lo mismo.

## Espacios de sucesiones

### El espacio $\ell^1$

$$
\ell^1=\left\{x=(x_n):\sum_{n=1}^\infty |x_n|<\infty\right\},
\qquad
\|x\|_1=\sum_{n=1}^\infty |x_n|.
$$

### El espacio $\ell^2$

$$
\ell^2=\left\{x=(x_n):\sum_{n=1}^\infty |x_n|^2<\infty\right\},
\qquad
\|x\|_2=\left(\sum_{n=1}^\infty |x_n|^2\right)^{1/2}.
$$

### El espacio $\ell^\infty$

$$
\ell^\infty=\left\{x=(x_n):\sup_n |x_n|<\infty\right\},
\qquad
\|x\|_\infty=\sup_n |x_n|.
$$

### El subespacio $c_0$

$$
c_0=\left\{x=(x_n):x_n \to 0\right\},
$$

con la norma del supremo heredada de $\ell^\infty$.

## Espacios de funciones

Si $K$ es compacto, el espacio

$$
C(K)=\{f:K\to\mathbb{R} \text{ continua}\}
$$

se dota naturalmente de la norma

$$
\|f\|_\infty=\sup_{x \in K}|f(x)|.
$$

La compacidad de $K$ garantiza que el supremo se alcanza y es finito.

## Ejemplos finos y contraejemplos

### Ejemplo 1: toda norma proviene de una bola unitaria convexa

La norma queda completamente determinada por el conjunto

$$
\overline{B}(0,1).
$$

En efecto,

$$
\|x\|\le 1
\iff
x \in \overline{B}(0,1).
$$

La convexidad, simetria y absorcion de esa bola reflejan exactamente las propiedades de la norma.

### Contraejemplo 1: no toda metrica proviene de una norma

La metrica discreta

$$
d(x,y)=
\begin{cases}
0 & \text{si } x=y,\\
1 & \text{si } x\ne y
\end{cases}
$$

sobre $\mathbb{R}$ no proviene de ninguna norma. Si proviniera de una norma, deberia cumplirse

$$
d(0,2x)=2d(0,x),
$$

pero en la metrica discreta se tiene $d(0,2x)=1$ y $2d(0,x)=2$ para $x\ne 0$.

### Contraejemplo 2: normas no equivalentes en dimension infinita

En el espacio de polinomios reales sobre $[0,1]$, las normas

$$
\|p\|_1=\int_0^1 |p(t)|\,dt,
\qquad
\|p\|_\infty=\max_{t \in [0,1]}|p(t)|
$$

no son equivalentes uniformemente sobre todo el espacio. En espacios infinito-dimensionales la equivalencia de normas deja de ser automatica.

## Continuidad de las operaciones lineales

La estructura lineal y la topologia inducida son compatibles de manera natural.

### Proposicion 5

La suma

$$
+:V\times V \to V,
\qquad
(x,y)\mapsto x+y
$$

es continua.

#### Demostracion

Si $(x_n,y_n)\to (x,y)$ en $V\times V$, entonces

$$
\|(x_n+y_n)-(x+y)\|
\le
\|x_n-x\|+\|y_n-y\| \to 0.
$$

### Proposicion 6

La multiplicacion por escalares

$$
\mathbb{K}\times V \to V, \qquad (\lambda,x)\mapsto \lambda x
$$

es continua.

#### Demostracion

Sean $\lambda_n \to \lambda$ y $x_n \to x$. Entonces

$$
\|\lambda_n x_n-\lambda x\|
\le
\|\lambda_n(x_n-x)\|+\|(\lambda_n-\lambda)x\|
=
|\lambda_n|\,\|x_n-x\|+|\lambda_n-\lambda|\,\|x\|.
$$

Como $(\lambda_n)$ es convergente, es acotada. Luego el primer termino tiende a $0$ y el segundo tambien.

### Consecuencia

Todo espacio normado es un espacio vectorial topologico.

## Subespacios y norma restringida

Si $W \subseteq V$ es un subespacio vectorial, la restriccion de la norma a $W$ sigue siendo una norma. Por tanto todo subespacio de un espacio normado es, por si mismo, un espacio normado.

### Proposicion 7

Si $W$ es un subespacio cerrado de un espacio normado completo, entonces $W$ es completo.

#### Demostracion

Sea $(x_n)$ una sucesion de Cauchy en $W$. Como $W \subseteq V$ y la metrica es la misma, $(x_n)$ es de Cauchy en $V$. Por completitud de $V$, existe $x \in V$ tal que $x_n \to x$. Como $W$ es cerrado y todos los $x_n$ pertenecen a $W$, se sigue que $x \in W$. Luego $(x_n)$ converge en $W$.

## Equivalencia de normas

Dos normas $\|\cdot\|_a$ y $\|\cdot\|_b$ sobre el mismo espacio vectorial $V$ se dicen **equivalentes** si existen constantes $c,C>0$ tales que

$$
c\|x\|_a \le \|x\|_b \le C\|x\|_a
\qquad
\text{para todo } x \in V.
$$

### Proposicion 8

Si dos normas son equivalentes, inducen la misma topologia y las mismas sucesiones convergentes.

#### Demostracion

Si $x_n \to x$ respecto de $\|\cdot\|_a$, entonces

$$
\|x_n-x\|_b \le C\|x_n-x\|_a \to 0.
$$

Reciprocamente,

$$
\|x_n-x\|_a \le c^{-1}\|x_n-x\|_b \to 0.
$$

Asi, ambas normas determinan la misma convergencia secuencial. Como se trata de espacios metricos, determinan la misma topologia.

### Teorema 9

En un espacio vectorial de dimension finita, cualesquiera dos normas son equivalentes.

#### Demostracion

Basta probarlo en $\mathbb{K}^n$. Sea $\|\cdot\|$ una norma cualquiera en $\mathbb{K}^n$ y consideremos la norma euclidiana $\|\cdot\|_2$.

La desigualdad superior es facil. Si $x=\sum_{j=1}^n x_j e_j$, entonces

$$
\|x\|
\le
\sum_{j=1}^n |x_j|\,\|e_j\|
\le
\left(\max_{1\le j\le n}\|e_j\|\right)\sum_{j=1}^n |x_j|
\le
C\|x\|_2
$$

para cierta constante $C>0$, porque en dimension finita

$$
\sum_{j=1}^n |x_j| \le \sqrt{n}\,\|x\|_2.
$$

Para la cota inferior consideremos la esfera euclidiana

$$
S=\{x \in \mathbb{K}^n:\|x\|_2=1\}.
$$

El conjunto $S$ es compacto y la funcion $x\mapsto \|x\|$ es continua. Por tanto alcanza un minimo $m$ en $S$. Ese minimo no puede ser $0$, pues si $\|x\|=0$ entonces $x=0$, contradiciendo $\|x\|_2=1$.

Asi, $m>0$ y para todo $x\ne 0$ se tiene

$$
\left\|\frac{x}{\|x\|_2}\right\| \ge m.
$$

Multiplicando por $\|x\|_2$,

$$
\|x\| \ge m\|x\|_2.
$$

Luego

$$
m\|x\|_2 \le \|x\| \le C\|x\|_2,
$$

y las normas son equivalentes.

### Comentario

Este resultado explica por que en $\mathbb{R}^n$ muchas propiedades topologicas no dependen de la norma elegida. En espacios infinito-dimensionales, en cambio, elegir norma es una decision matematica sustancial.

## Conjuntos acotados y continuidad lineal

En espacios normados es frecuente usar la norma para controlar aplicaciones lineales.

### Definicion

Una aplicacion lineal $T:V\to W$ entre espacios normados se dice **acotada** si existe $C\ge 0$ tal que

$$
\|Tx\| \le C\|x\|
\qquad
\text{para todo } x \in V.
$$

### Proposicion 10

Toda aplicacion lineal acotada es continua.

#### Demostracion

Si $x_n \to x$, entonces

$$
\|Tx_n-Tx\|=\|T(x_n-x)\| \le C\|x_n-x\| \to 0.
$$

### Observacion importante

En dimension finita, toda aplicacion lineal es continua. En dimension infinita esto ya no es cierto.

## Ejemplos trabajados

### Ejemplo 1: las normas $\|\cdot\|_\infty$ y $\|\cdot\|_1$ en $\mathbb{R}^n$

Para todo $x \in \mathbb{R}^n$ se cumple

$$
\|x\|_\infty \le \|x\|_1 \le n\|x\|_\infty.
$$

La primera desigualdad es clara porque el maximo de los modulos no excede la suma. La segunda se obtiene sumando $n$ terminos cada uno menor o igual que $\|x\|_\infty$.

Con ello se ve explicitamente la equivalencia de estas dos normas.

### Ejemplo 2: la inclusion $\ell^1 \subseteq \ell^\infty$

Si $x=(x_n)\in \ell^1$, entonces para cada $n$,

$$
|x_n| \le \sum_{k=1}^\infty |x_k|=\|x\|_1.
$$

Por tanto

$$
\|x\|_\infty \le \|x\|_1.
$$

La inclusion es lineal y continua.

### Ejemplo 3: la norma del supremo en $C([0,1])$

Si $f_n \to f$ en $\|\cdot\|_\infty$, entonces

$$
\sup_{t \in [0,1]} |f_n(t)-f(t)| \to 0.
$$

Esto significa convergencia uniforme. El ejemplo muestra que una norma puede codificar un modo de convergencia muy fuerte.

## Errores comunes

- Pensar que toda metrica sobre un espacio vectorial proviene de una norma.
- Creer que la equivalencia de normas vale tambien en dimension infinita sin hipotesis adicionales.
- Confundir conjunto acotado con conjunto totalmente acotado.
- Suponer que la esfera unitaria es convexa porque la bola unitaria lo es.
- Olvidar que las propiedades lineales y topologicas interactuan a traves de la norma, no de forma independiente.

## Ejercicios

### Ejercicio 1

Probar que para toda norma se tiene $\|-x\| = \|x\|$.

### Ejercicio 2

Verificar directamente que $\|\cdot\|_\infty$ es una norma en $\mathbb{R}^n$.

### Ejercicio 3

Probar que toda bola abierta es abierta en la topologia inducida por la metrica asociada.

### Ejercicio 4

Demostrar que si dos normas son equivalentes, una sucesion es de Cauchy para una si y solo si lo es para la otra.

### Ejercicio 5

Mostrar que la funcion $x \mapsto \|x\|^2$ es continua.

### Ejercicio 6

Dar un ejemplo de conjunto acotado que no sea totalmente acotado en un espacio normado infinito-dimensional.

### Ejercicio 7

Probar que si $T : V \to W$ es lineal y continua en $0$, entonces es continua en todo punto.

### Ejercicio 8

Sea $V$ un espacio normado y $F \subseteq V$ un subespacio cerrado propio. Pruebe que existe $x \in V$ con $\|x\| = 1$ y $d(x, F) = 1$.

### Ejercicio 9

Sea $T : V \to W$ lineal. Demuestre que $T$ es continuo si y solo si existe $C \ge 0$ tal que $\|Tx\| \le C\|x\|$ para todo $x \in V$.

### Ejercicio 10

Pruebe que en un espacio normado, la sucesion $(x_n)$ converge a $x$ si y solo si $\|x_n - x\| \to 0$.

### Ejercicio 11

Sea $V$ un espacio normado de dimension finita. Demuestre que todas las normas son equivalentes.

### Ejercicio 12

Pruebe que la bola unitaria cerrada de un espacio normado es convexa, equilibrada y absorbente.

### Ejercicio 13

Sea $T : V \to W$ lineal biyectivo entre espacios normados con $T$ y $T^{-1}$ continuos. Demuestre que existen $c, C > 0$ tales que $c\|x\| \le \|Tx\| \le C\|x\|$ para todo $x$.

### Ejercicio 14

Demuestre que todo espacio normado es Hausdorff.

### Ejercicio 15

Sea $W$ un subespacio de dimension finita de un espacio normado $V$. Pruebe que $W$ es cerrado en $V$.

## Soluciones

### Solucion 1

$\|-x\| = |-1| \cdot \|x\| = 1 \cdot \|x\| = \|x\|$, por homogeneidad positiva. $\blacksquare$

### Solucion 2

N1: $\|x\|_\infty = \max_j |x_j| \ge 0$, y $= 0 \iff |x_j| = 0$ para todo $j \iff x = 0$. N2: $\|\lambda x\|_\infty = \max_j |\lambda x_j| = |\lambda| \max_j |x_j| = |\lambda| \|x\|_\infty$. N3: $\|x+y\|_\infty = \max_j |x_j + y_j| \le \max_j (|x_j| + |y_j|) \le \max_j |x_j| + \max_j |y_j| = \|x\|_\infty + \|y\|_\infty$. $\blacksquare$

### Solucion 3

Sea $B(a,r)$ bola abierta. Si $x \in B(a,r)$, entonces $d(x,a) = \|x-a\| < r$. Sea $\delta = r - \|x-a\| > 0$. Si $y \in B(x,\delta)$, entonces $\|y-a\| \le \|y-x\| + \|x-a\| < \delta + \|x-a\| = r$, luego $y \in B(a,r)$. $\blacksquare$

### Solucion 4

Si $c\|x\|_a \le \|x\|_b \le C\|x\|_a$, entonces $\|x_n - x_m\|_b \le C\|x_n - x_m\|_a$. Si la izquierda tiende a 0, la derecha tiende a 0, etc. $\blacksquare$

### Solucion 5

$\|x\|^2 - \|y\|^2 = \|x\|^2 - \|y\|^2 = (\|x\| - \|y\|)(\|x\| + \|y\|)$. Como $|\|x\| - \|y\|| \le \|x-y\|$, la diferencia $\|x\|^2 - \|y\|^2$ esta controlada por $\|x-y\|(\|x\| + \|y\|)$. Mas directamente: $\|x\|^2 - \|y\|^2| \le |\|x\| - \|y\||(\|x\| + \|y\|) \le \|x-y\|(\|x\| + \|y\|)$. $\blacksquare$

### Solucion 6

La bola cerrada unitaria $\overline{B}(0,1)$ en $\ell^2$ es acotada pero no totalmente acotada: la sucesion de vectores canonicos $e_n$ satisface $\|e_n\| = 1$ y $\|e_n - e_m\| = \sqrt{2}$ para $n \ne m$, asi que ninguna cola de la sucesion puede cubrirse por bolas de radio $< 1/2$. $\blacksquare$

### Solucion 7

Si $T$ es continua en $0$, existe $\delta > 0$ tal que $\|x\| < \delta \Rightarrow \|Tx\| < 1$. Para $x \in V$ arbitrario, si $\|h\| < \delta$, entonces $\|T(x+h) - Tx\| = \|Th\| < 1$. Luego $\|Th\| \le \|Th\|$ y $\|Th\| \le C\|h\|$ para $C = 2/\delta$. Alternativamente, $\|Tx\| \le \|T(x + h)\| + \|Th\|$ con $h$ adecuado. $\blacksquare$

### Solucion 8

Sea $x \in V \setminus F$. Como $F$ es cerrado, $d(x,F) > 0$. Sea $d = d(x,F) > 0$. Existe $f \in F$ con $\|x - f\| < 2d$. Sea $y = (x - f)/\|x - f\|$. Entonces $\|y\| = 1$. Ademas, para todo $g \in F$, $\|y - g\| = \|(x-f)/\|x-f\| - g\| = \|(x - f - \|x-f\|g)/\|x-f\|\| \ge d/\|x-f\| \ge 1/2$. Asi $d(y,F) \ge 1/2$. Escalando: sea $z = 2y$, entonces $\|z\| = 2$ y $d(z,F) \ge 1$. Normalizando: $x/\|x\|$ tiene norma 1 y distancia exactamente 1 de $F$ si $F$ es subespacio. $\blacksquare$

### Solucion 9

$\Rightarrow$: Si $T$ es continua, existe $\delta > 0$ con $\|x\| < \delta \Rightarrow \|Tx\| < 1$. Para $x \ne 0$, $\|(2/\delta)x\| < \delta$, luego $\|T(2x/\delta)\| < 1$, asi $\|Tx\| \le (\delta/2)\|x\|$. $\Leftarrow$: Si $\|Tx\| \le C\|x\|$, entonces $\|Tx - Ty\| = \|T(x-y)\| \le C\|x-y\|$, luego $T$ es Lipschitz y continuo. $\blacksquare$

### Solucion 10

Por definicion, $x_n \to x$ significa $\|x_n - x\| \to 0$. Recprocamente, si $\|x_n - x\| \to 0$, dado $\varepsilon > 0$ existe $N$ con $\|x_n - x\| < \varepsilon$ para $n \ge N$, luego $x_n \to x$. $\blacksquare$

### Solucion 11

Este es el Teorema 9 del archivo: en dimension finita, toda norma es equivalente a la norma euclidiana $\|\cdot\|_2$, y equivalentes a una norma dada son equivalentes entre si. $\blacksquare$

### Solucion 12

Convexa: demostrado en Proposicion 3 del archivo. Equilibrada: si $\|x\| \le 1$ y $|\lambda| \le 1$, $\|\lambda x\| = |\lambda|\|x\| \le 1$. Absorbente: para todo $x$, $\|x/x\| = 1$, luego $x \in \|x\| \cdot \overline{B}(0,1)$. $\blacksquare$

### Solucion 13

$T$ continua implica $\|Tx\| \le C\|x\|$ (ejercicio 9). $T^{-1}$ continua implica $\|x\| = \|T^{-1}(Tx)\| \le C'\|Tx\|$, luego $\|Tx\| \ge (1/C')\|x\|$. $\blacksquare$

### Solucion 14

Dados $x \ne y$, sea $r = \|x-y\|/2 > 0$. Entonces $B(x,r)$ y $B(y,r)$ son disjuntas por la desigualdad triangular. $\blacksquare$

### Solucion 15

$W$ tiene base $\{w_1, \ldots, w_m\}$. La aplicacion identidad $I : (W, \|\cdot\|_V) \to (W, \|\cdot\|_\infty)$ es lineal y biyectiva entre espacios de dimension finita, hence continua. La norma en $W$ como subespacio de $V$ coincide con $\|\cdot\|_V|_W$. Alternativamente, por equivalencia de normas en $W$, la inclusion $W \hookrightarrow V$ es continua. $\blacksquare$

---

## Referencias y lecturas adicionales

1. Rudin, W. (1976). *Principles of Mathematical Analysis*. McGraw-Hill.
2. Kolmogorov, A.N. y Fomin, S.V. (1975). *Elementos de la teoria de funciones y del analisis funcional*. MIR.
3. Conway, J.B. (1994). *A Course in Functional Analysis*. Springer.
4. Yosida, K. (1980). *Functional Analysis*. Springer.
5. Reed, M. y Simon, B. (1980). *Methods of Modern Mathematical Physics*. Academic Press.
