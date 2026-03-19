---
title: Limite de una funcion vectorial
description: Definicion de limite de funciones vectoriales, criterio por componentes y continuidad y dominio de curvas parametrizadas.
---

# Limite de una funcion vectorial

## Motivacion e intuicion

Una funcion vectorial

$$
r(t)=\langle x(t),y(t),z(t)\rangle
$$

tiene limite cuando, al acercarse el parametro a cierto valor, el punto del espacio se aproxima a un vector fijo.

Aunque la imagen viva en $\mathbb{R}^n$, el concepto es exactamente el mismo del calculo usual: controlar la norma del error.

## Definicion formal

Sea

$$
r:I\to \mathbb{R}^n
$$

y sea $a$ punto de acumulacion de $I$.

Decimos que

$$
\lim_{t\to a} r(t)=L\in \mathbb{R}^n
$$

si para todo

$$
\varepsilon>0
$$

existe

$$
\delta>0
$$

tal que

$$
0<|t-a|<\delta
\Rightarrow
\|r(t)-L\|<\varepsilon.
$$

## Interpretacion geometrica

La condicion significa que los puntos de la trayectoria quedan arbitrariamente cerca del vector limite $L$ cuando el parametro se acerca a $a$.

No importa de donde vengan los puntos de la curva; importa solo la proximidad en el espacio.

## Limite por componentes

Sea

$$
r(t)=\langle f_1(t),\dots,f_n(t)\rangle,
\qquad
L=\langle \ell_1,\dots,\ell_n\rangle.
$$

### Teorema 1

Se tiene

$$
\lim_{t\to a} r(t)=L
$$

si y solo si

$$
\lim_{t\to a} f_j(t)=\ell_j
\qquad
\text{para cada } j=1,\dots,n.
$$

#### Demostracion

Si

$$
\|r(t)-L\|<\varepsilon,
$$

entonces cada componente satisface

$$
|f_j(t)-\ell_j|\le \|r(t)-L\|<\varepsilon.
$$

Luego cada componente converge.

Reciprocamente, si cada componente converge, dado $\varepsilon>0$ se puede elegir $\delta$ de modo que para todo $j$,

$$
|f_j(t)-\ell_j|<\frac{\varepsilon}{\sqrt{n}}
$$

cuando

$$
0<|t-a|<\delta.
$$

Entonces

$$
\|r(t)-L\|^2
=
\sum_{j=1}^n |f_j(t)-\ell_j|^2
<
n\left(\frac{\varepsilon}{\sqrt{n}}\right)^2
=
\varepsilon^2.
$$

Por tanto

$$
\|r(t)-L\|<\varepsilon.
$$

## Operaciones con limites

Si

$$
\lim_{t\to a} r(t)=L,
\qquad
\lim_{t\to a} s(t)=M,
$$

y

$$
\lim_{t\to a}\phi(t)=\lambda,
$$

entonces:

$$
\lim_{t\to a} (r+s)=L+M,
$$

$$
\lim_{t\to a} \phi r=\lambda L.
$$

Estas reglas se deducen por componentes o por continuidad de las operaciones algebraicas en $\mathbb{R}^n$.

## Continuidad y dominio {#funciones-vectoriales-limites-continuidad-y-dominio}

Una funcion vectorial

$$
r:I\to \mathbb{R}^n
$$

es continua en $a\in I$ si

$$
\lim_{t\to a} r(t)=r(a).
$$

### Criterio por componentes

$r$ es continua en $a$ si y solo si cada una de sus componentes lo es en $a$.

## Dominio de una funcion vectorial

Si

$$
r(t)=\langle f_1(t),\dots,f_n(t)\rangle,
$$

entonces su dominio es

$$
\operatorname{Dom}(r)=
\bigcap_{j=1}^n \operatorname{Dom}(f_j).
$$

### Ejemplo 1

Sea

$$
r(t)=\left\langle \sqrt{t-1},\ \frac{1}{t-2},\ \ln t\right\rangle.
$$

Las restricciones son:

- $t-1\ge 0$, es decir $t\ge 1$;
- $t\ne 2$;
- $t>0$.

Luego

$$
\operatorname{Dom}(r)=[1,\infty)\setminus\{2\}.
$$

## Ejemplos basicos de limites

### Ejemplo 2

$$
r(t)=\langle t^2,\sin t,e^t\rangle.
$$

Entonces

$$
\lim_{t\to 0} r(t)=\langle 0,0,1\rangle.
$$

### Ejemplo 3

$$
r(t)=\left\langle \frac{\sin t}{t},\ \frac{1-\cos t}{t},\ t\right\rangle.
$$

Usando limites escalares conocidos,

$$
\lim_{t\to 0} r(t)=\langle 1,0,0\rangle.
$$

## Ejemplo fino: no existencia de limite

Considere

$$
r(t)=\langle \cos(1/t),\sin(1/t)\rangle,
\qquad
t\ne 0.
$$

Cuando

$$
t\to 0,
$$

el punto gira infinitamente sobre la circunferencia unitaria. Ninguna componente tiene limite, luego $r(t)$ no tiene limite.

## Relacion con curvas parametrizadas

Si

$$
r(t)
$$

es continua en un intervalo, su imagen es una curva continua en el espacio.

### Observacion

La continuidad de la parametrizacion no implica que la curva sea "suave"; para eso se necesitara derivabilidad y regularidad.

## Limites laterales

Cuando el dominio del parametro esta restringido, pueden considerarse limites laterales exactamente igual que en funciones reales:

$$
\lim_{t\to a^+}r(t),
\qquad
\lim_{t\to a^-}r(t).
$$

## Ejemplos trabajados

### Ejemplo 4: continuidad en el extremo del dominio

Sea

$$
r(t)=\langle \sqrt{t}, t^2\rangle,
\qquad
t\ge 0.
$$

La funcion es continua en

$$
t=0
$$

porque el limite por la derecha coincide con

$$
r(0)=\langle 0,0\rangle.
$$

### Ejemplo 5: salto en una componente

Sea

$$
r(t)=
\begin{cases}
\langle t,1\rangle & \text{si } t<0,\\
\langle t,2\rangle & \text{si } t\ge 0.
\end{cases}
$$

La primera componente tiene limite en $0$, pero la segunda no coincide por izquierda y derecha. Luego la funcion vectorial no es continua en $0$.

## Errores comunes

- Creer que basta controlar una componente para decidir el limite.
- Olvidar que el dominio es la interseccion de los dominios de las componentes.
- Confundir continuidad de la parametrizacion con suavidad de la curva.
- Pensar que el limite de una funcion vectorial requiere una teoria nueva; en realidad se reduce a limites escalares coordinados.

## Ejercicios propuestos

1. Hallar dominios de funciones vectoriales dadas por componentes.
2. Calcular limites vectoriales usando el criterio por componentes.
3. Construir una funcion vectorial continua no derivable en un punto.
4. Dar un ejemplo donde dos componentes converjan y una tercera no.
5. Estudiar la continuidad de una parametrizacion definida a trozos.

## Cierre

El limite de una funcion vectorial es el puente entre curvas parametrizadas y analisis. El criterio por componentes permite transportar casi toda la intuicion del calculo de una variable, mientras que la continuidad organiza el paso hacia derivadas vectoriales, tangentes y movimiento en el espacio.
