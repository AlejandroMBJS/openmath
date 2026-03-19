---
title: Continuidad en espacios topologicos
description: Continuidad topologica, formulaciones equivalentes, homeomorfismos, aplicaciones abiertas y cerradas, y comportamiento por subbases.
---

# Continuidad en espacios topologicos

## Motivacion

En espacios metricos, la continuidad suele introducirse por

$$
\varepsilon-\delta.
$$

En topologia general, ese lenguaje deja de ser primario porque ya no hay distancias disponibles. La definicion estructural correcta es mucho mas simple:

una aplicacion es continua si la preimagen de todo abierto es abierta.

## Definicion global

Sean

$$
(X,\tau_X),
\qquad
(Y,\tau_Y)
$$

espacios topologicos y

$$
f:X\to Y
$$

una aplicacion.

Decimos que

$$
f
$$

es continua si para todo abierto

$$
V\in \tau_Y
$$

se tiene

$$
f^{-1}(V)\in \tau_X.
$$

## Interpretacion

La continuidad no dice que la imagen de abiertos sea abierta. Dice que la estructura de abiertos del codominio puede transportarse hacia atras por

$$
f.
$$

La orientacion correcta de la definicion es siempre por preimagenes.

## Formulacion por cerrados

### Proposicion 1

La aplicacion

$$
f:X\to Y
$$

es continua si y solo si la preimagen de todo cerrado de

$$
Y
$$

es cerrada en

$$
X.
$$

### Demostracion

Si

$$
F\subseteq Y
$$

es cerrado, entonces

$$
Y\setminus F
$$

es abierto. Por continuidad,

$$
f^{-1}(Y\setminus F)
=
X\setminus f^{-1}(F)
$$

es abierto. Luego

$$
f^{-1}(F)
$$

es cerrado.

La implicacion recproca se obtiene aplicando el mismo argumento a complementos.

## Continuidad en un punto

Decimos que

$$
f
$$

es continua en

$$
x\in X
$$

si para todo abierto

$$
V\subseteq Y
$$

con

$$
f(x)\in V,
$$

existe un abierto

$$
U\subseteq X
$$

tal que

$$
x\in U
\qquad\text{y}\qquad
f(U)\subseteq V.
$$

### Proposicion 2

La continuidad global equivale a continuidad en cada punto.

### Demostracion

Si

$$
f
$$

es continua globalmente y

$$
V
$$

es abierto con

$$
f(x)\in V,
$$

tomamos

$$
U=f^{-1}(V),
$$

que es abierto y satisface

$$
x\in U.
$$

La implicacion inversa se obtiene observando que un abierto

$$
V
$$

del codominio tiene por preimagen una union de entornos locales donde la imagen queda dentro de

$$
V.
$$

## Formulacion por vecindades

### Proposicion 3

La continuidad en

$$
x
$$

equivale a:

para toda vecindad

$$
W
$$

de

$$
f(x),
$$

la preimagen

$$
f^{-1}(W)
$$

es vecindad de

$$
x.
$$

### Comentario

Esta es la traduccion topologica exacta del enfoque local de continuidad.

## Subbases y bases

### Proposicion 4

Si

$$
\mathcal{B}
$$

es una base de la topologia de

$$
Y,
$$

entonces

$$
f:X\to Y
$$

es continua si y solo si

$$
f^{-1}(B)
$$

es abierto para todo

$$
B\in \mathcal{B}.
$$

### Demostracion

Todo abierto de

$$
Y
$$

es union de elementos de

$$
\mathcal{B},
$$

y la preimagen conmuta con uniones arbitrarias:

$$
f^{-1}\left(\bigcup_i B_i\right)=\bigcup_i f^{-1}(B_i).
$$

### Observacion

Esto es extremadamente util en productos y cocientes, donde las topologias suelen venir dadas por subbases o bases naturales.

## Composicion

### Proposicion 5

Si

$$
f:X\to Y
$$

y

$$
g:Y\to Z
$$

son continuas, entonces

$$
g\circ f:X\to Z
$$

es continua.

### Demostracion

Si

$$
W\subseteq Z
$$

es abierto, entonces

$$
(g\circ f)^{-1}(W)=f^{-1}(g^{-1}(W)).
$$

Como

$$
g^{-1}(W)
$$

es abierto en

$$
Y
$$

y

$$
f
$$

es continua, la preimagen final es abierta en

$$
X.
$$

## Restriccion

### Proposicion 6

Si

$$
f:X\to Y
$$

es continua y

$$
A\subseteq X,
$$

entonces la restriccion

$$
f|_A:A\to Y
$$

es continua respecto a la topologia de subespacio en

$$
A.
$$

### Demostracion

Para todo abierto

$$
V\subseteq Y,
$$

$$
(f|_A)^{-1}(V)=A\cap f^{-1}(V),
$$

que es abierto relativo en

$$
A.
$$

## Homeomorfismos

### Definicion

Una aplicacion biyectiva

$$
f:X\to Y
$$

es un homeomorfismo si

$$
f
$$

y

$$
f^{-1}
$$

son continuas.

### Interpretacion

Dos espacios homeomorfos tienen exactamente la misma estructura topologica, aunque su realizacion geometrica aparente sea distinta.

### Ejemplos

- el intervalo abierto

$$
(0,1)
$$

y

$$
\mathbb{R}
$$

son homeomorfos;
- un circulo y el borde de un cuadrado son homeomorfos;
- un intervalo abierto y uno cerrado no son homeomorfos.

## Aplicaciones abiertas y cerradas

### Definicion

Una aplicacion

$$
f:X\to Y
$$

es abierta si manda abiertos en abiertos.

Es cerrada si manda cerrados en cerrados.

### Advertencia

Continuidad, apertura y cerradura son propiedades distintas.

### Ejemplo

La proyeccion

$$
\pi:\mathbb{R}^2\to \mathbb{R},
\qquad
\pi(x,y)=x
$$

es continua y abierta.

### Contraejemplo

La inclusion

$$
i:(0,1)\hookrightarrow \mathbb{R}
$$

es continua, pero no cerrada como aplicacion hacia

$$
\mathbb{R}.
$$

## Biyectiva continua no implica homeomorfismo

### Ejemplo

La aplicacion identidad

$$
\operatorname{id}:(X,\tau_d)\to (X,\tau_i),
$$

donde

$$
\tau_d
$$

es la topologia discreta y

$$
\tau_i
$$

la indiscreta, es continua y biyectiva, pero su inversa no es continua si

$$
X
$$

tiene al menos dos puntos.

### Comentario

Por eso, para demostrar que una biyectiva continua es homeomorfismo, suelen imponerse hipotesis adicionales, como:

- dominio compacto y codominio Hausdorff;
- aplicacion abierta;
- aplicacion cerrada.

## Teorema de compactitud-Hausdorff

### Teorema 7

Si

$$
f:X\to Y
$$

es una biyectiva continua, con

$$
X
$$

compacto e

$$
Y
$$

Hausdorff, entonces

$$
f
$$

es un homeomorfismo.

### Demostracion

Como

$$
X
$$

es compacto, toda imagen continua de compacto es compacta. En un espacio Hausdorff, los compactos son cerrados. Luego

$$
f
$$

manda cerrados de

$$
X
$$

en cerrados de

$$
Y,
$$

es decir, es cerrada. Una biyectiva cerrada tiene inversa continua.

## Continuidad y clausura

### Proposicion 8

Si

$$
f:X\to Y
$$

es continua, entonces para todo

$$
A\subseteq X
$$

se cumple

$$
f(\overline{A})\subseteq \overline{f(A)}.
$$

### Demostracion

Sea

$$
x\in \overline{A}.
$$

Si

$$
V
$$

es una vecindad abierta de

$$
f(x),
$$

entonces

$$
f^{-1}(V)
$$

es una vecindad abierta de

$$
x.
$$

Como

$$
x\in \overline{A},
$$

se tiene

$$
f^{-1}(V)\cap A\ne \varnothing.
$$

Por tanto

$$
V\cap f(A)\ne \varnothing,
$$

y

$$
f(x)\in \overline{f(A)}.
$$

## Continuidad secuencial

En espacios metricos, la continuidad equivale a preservar limites de sucesiones. En espacios topologicos generales eso puede fallar si el espacio no es de primera numerabilidad.

### Comentario

Esta es una razon profunda por la que no conviene identificar topologia general con intuicion secuencial sin mas.

## Pegado

Si

$$
X=A\cup B,
$$

y dos aplicaciones continuas sobre

$$
A
$$

y

$$
B
$$

coinciden en la interseccion, pueden pegarse para dar una aplicacion continua sobre todo

$$
X
$$

bajo hipotesis topologicas naturales, por ejemplo si

$$
A
$$

y

$$
B
$$

son cerrados.

### Comentario

Este principio reaparece constantemente en construcciones por partes y en espacios cociente.

## Importancia estructural

La continuidad topologica es el lenguaje comun que permite transportar propiedades entre espacios:

- compacidad;
- conexidad;
- separacion en ciertos contextos;
- equivalencia topologica via homeomorfismos.

## Cierre

La continuidad en topologia general no es una generalizacion artificial de

$$
\varepsilon-\delta,
$$

sino la definicion primaria. Todo el resto del bloque, desde productos y cocientes hasta compacidad y conexidad, se articula alrededor de esta nocion.
