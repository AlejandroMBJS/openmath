---
title: Derivada de una funcion vectorial
description: Definicion, interpretacion geometrica, criterio por componentes y reglas de derivacion para funciones vectoriales en Rn.
---

# Derivada de una funcion vectorial

## Motivacion e intuicion

Una funcion vectorial

$$
r(t)
$$

describe un punto en movimiento. Su derivada debe entonces medir como cambia ese punto, es decir:

- direccion instantanea del movimiento;
- rapidez de variacion;
- vector velocidad de la trayectoria.

La derivada vectorial conserva la idea del calculo ordinario, pero el cociente incremental ya no es un numero sino un vector.

## Definicion formal

Sea

$$
r:I\to \mathbb{R}^n
$$

y sea $a$ un punto interior de $I$.

Decimos que $r$ es derivable en $a$ si existe el limite

$$
r'(a)=\lim_{h\to 0}\frac{r(a+h)-r(a)}{h}.
$$

Equivalentemente,

$$
r'(a)=\lim_{t\to a}\frac{r(t)-r(a)}{t-a}.
$$

El cociente se entiende componente a componente, o bien como producto de un vector por el escalar

$$
\frac{1}{t-a}.
$$

## Derivada como un vector {#derivada-como-un-vector}

La derivada

$$
r'(a)
$$

es un vector en $\mathbb{R}^n$.

### Interpretacion

Si

$$
r(t)=\langle x(t),y(t),z(t)\rangle,
$$

entonces

$$
r'(t)=\langle x'(t),y'(t),z'(t)\rangle.
$$

No es una pendiente escalar, sino el vector que apunta en la direccion instantanea de la curva y cuya norma mide la rapidez instantanea.

## Criterio por componentes

### Teorema 1

Sea

$$
r(t)=\langle f_1(t),\dots,f_n(t)\rangle.
$$

Entonces $r$ es derivable en $a$ si y solo si cada componente $f_j$ es derivable en $a$, y en ese caso

$$
r'(a)=\langle f_1'(a),\dots,f_n'(a)\rangle.
$$

#### Demostracion

Por definicion,

$$
\frac{r(a+h)-r(a)}{h}
=
\left\langle
\frac{f_1(a+h)-f_1(a)}{h},
\dots,
\frac{f_n(a+h)-f_n(a)}{h}
\right\rangle.
$$

El limite del vector existe si y solo si existen los limites de todas sus componentes. Cuando esto ocurre, el limite del vector es precisamente el vector formado por esos limites.

### Consecuencia

Toda la teoria elemental de derivacion vectorial puede construirse a partir de derivadas escalares coordinadas.

## Interpretacion geometrica

Sea

$$
r(t)
$$

una curva parametrizada. El vector

$$
r'(t_0)
$$

es el vector tangente instantaneo en el instante $t_0$, siempre que sea no nulo.

### Comentario

La existencia de la derivada no garantiza por si sola una buena direccion tangente si el vector derivada vale cero. Para una teoria geometrica estable, se suele pedir regularidad:

$$
r'(t)\ne 0.
$$

## Ejemplos basicos

### Ejemplo 1: recta

Si

$$
r(t)=P_0+t v,
$$

entonces

$$
r'(t)=v.
$$

La derivada es constante, como debe ocurrir en una trayectoria rectilinea uniforme.

### Ejemplo 2: circunferencia

$$
r(t)=\langle \cos t,\sin t\rangle.
$$

Entonces

$$
r'(t)=\langle -\sin t,\cos t\rangle.
$$

El vector derivada es tangente a la circunferencia y perpendicular al radio

$$
r(t).
$$

### Ejemplo 3: helice

$$
r(t)=\langle \cos t,\sin t,t\rangle.
$$

Entonces

$$
r'(t)=\langle -\sin t,\cos t,1\rangle.
$$

El movimiento combina giro horizontal con avance vertical constante.

## Reglas algebraicas

Sean $r,s:I\to \mathbb{R}^n$ derivables y $\phi:I\to \mathbb{R}$ derivable.

### Teorema 2

Se cumplen las reglas:

$$
(r+s)'=r'+s',
$$

$$
(\lambda r)'=\lambda r'
$$

para todo escalar constante $\lambda$, y

$$
(\phi r)'=\phi' r+\phi r'.
$$

#### Demostracion

Las dos primeras reglas se obtienen directamente del cociente incremental y la linealidad del limite.

Para la tercera,

$$
\frac{\phi(t)r(t)-\phi(a)r(a)}{t-a}
=
\phi(t)\frac{r(t)-r(a)}{t-a}
+
\frac{\phi(t)-\phi(a)}{t-a}r(a).
$$

Al tomar limite cuando $t\to a$, como $\phi$ es continua por ser derivable, resulta

$$
(\phi r)'(a)=\phi(a)r'(a)+\phi'(a)r(a).
$$

## Propiedades de la derivada vectorial {#propiedades-de-la-derivada-vectorial}

Ademas de las reglas algebraicas, hay propiedades geometricas importantes.

### Proposicion 3

Si $r$ es derivable, entonces es continua.

#### Demostracion

Escribimos

$$
r(t)-r(a)=
\frac{r(t)-r(a)}{t-a}(t-a)
$$

para $t\ne a$. Si el cociente incremental tiene limite finito y $(t-a)\to 0$, el producto tiende a $0$. Luego

$$
r(t)\to r(a).
$$

### Proposicion 4

Si

$$
\|r(t)\|=\text{constante},
$$

entonces

$$
r(t)\cdot r'(t)=0.
$$

#### Demostracion

Como

$$
\|r(t)\|^2=r(t)\cdot r(t),
$$

al derivar obtenemos

$$
0=\frac{d}{dt}\bigl(r\cdot r\bigr)=2\,r\cdot r'.
$$

Por tanto

$$
r\cdot r'=0.
$$

### Interpretacion

Si la trayectoria permanece sobre una esfera centrada en el origen, la velocidad es perpendicular al radio.

## Derivada, producto cruz y producto escalar {#derivada-producto-cruz-y-producto-escalar}

## Regla para el producto punto

Si $r,s:I\to \mathbb{R}^n$ son derivables, entonces

$$
\frac{d}{dt}\bigl(r\cdot s\bigr)=r'\cdot s+r\cdot s'.
$$

#### Demostracion

Por componentes,

$$
r\cdot s=\sum_{j=1}^n r_j s_j.
$$

Derivando termino a termino,

$$
\frac{d}{dt}(r\cdot s)=\sum_{j=1}^n (r_j' s_j+r_j s_j')
=
r'\cdot s+r\cdot s'.
$$

## Regla para el producto cruz

Si $r,s:I\to \mathbb{R}^3$ son derivables, entonces

$$
\frac{d}{dt}\bigl(r\times s\bigr)=r'\times s+r\times s'.
$$

#### Justificacion

El producto cruz se expresa por combinaciones bilineales de las componentes de $r$ y $s$, de modo que al derivar se aplica la regla de Leibniz componente a componente.

### Corolario 5

Si

$$
r\times r' =0,
$$

entonces $r$ y $r'$ son paralelos, siempre que ambos sean no nulos.

## Derivada de la norma

Si $r(t)\ne 0$, entonces

$$
\frac{d}{dt}\|r(t)\|
=
\frac{r(t)\cdot r'(t)}{\|r(t)\|}.
$$

#### Demostracion

De

$$
\|r\|^2=r\cdot r
$$

se sigue

$$
2\|r\|\,\frac{d}{dt}\|r\|=2r\cdot r',
$$

y basta dividir por

$$
2\|r\|.
$$

## Regla de la cadena

Si

$$
r:I\to \mathbb{R}^n
$$

es derivable y

$$
\phi:J\to I
$$

es derivable, entonces

$$
\frac{d}{du}r(\phi(u))=r'(\phi(u))\,\phi'(u).
$$

### Comentario

Esta formula describe como cambia una curva al reparametrizarla.

## Ejemplos trabajados

### Ejemplo 4

Sea

$$
r(t)=\langle t^2,e^t,\cos t\rangle.
$$

Entonces

$$
r'(t)=\langle 2t,e^t,-\sin t\rangle.
$$

### Ejemplo 5: producto punto constante

Sean

$$
r(t)=\langle \cos t,\sin t\rangle,
\qquad
s(t)=\langle -\sin t,\cos t\rangle.
$$

Entonces

$$
r(t)\cdot s(t)=0
$$

para todo $t$. Derivando,

$$
r'(t)\cdot s(t)+r(t)\cdot s'(t)=0,
$$

lo que confirma la regla del producto punto.

### Ejemplo 6: derivada de la norma

Sea

$$
r(t)=\langle t,1\rangle.
$$

Entonces

$$
\|r(t)\|=\sqrt{t^2+1},
$$

y por la formula,

$$
\frac{d}{dt}\|r(t)\|
=
\frac{\langle t,1\rangle\cdot \langle 1,0\rangle}{\sqrt{t^2+1}}
=
\frac{t}{\sqrt{t^2+1}}.
$$

## Relacion con la recta tangente

Si $r$ es derivable en $t_0$ y

$$
r'(t_0)\ne 0,
$$

la recta tangente a la curva en el punto

$$
r(t_0)
$$

es

$$
\ell(s)=r(t_0)+s\,r'(t_0).
$$

Este tema se desarrollara con mas detalle en el bloque de tangente unitaria.

## Errores comunes

- Pensar que la derivada vectorial es una derivada "distinta" de la usual y no una derivacion por componentes.
- Confundir vector posicion con vector velocidad.
- Aplicar reglas del producto escalar o cruz sin verificar derivabilidad de ambas funciones.
- Olvidar que una curva con derivada nula en un punto puede perder interpretacion geometrica simple como tangente no degenerada.

## Ejercicios propuestos

1. Derivar varias funciones vectoriales por componentes.
2. Verificar la regla del producto punto y del producto cruz en ejemplos concretos.
3. Probar que si $\|r(t)\|$ es constante, entonces $r\cdot r'=0$.
4. Hallar la recta tangente a una curva parametrizada en un punto dado.
5. Estudiar el efecto de una reparametrizacion sobre la derivada vectorial.

## Cierre

La derivada de una funcion vectorial es la primera herramienta verdaderamente dinamica del bloque. A partir de ella aparecen velocidad, aceleracion, tangente, normal, curvatura y casi toda la mecanica de curvas en el espacio.
