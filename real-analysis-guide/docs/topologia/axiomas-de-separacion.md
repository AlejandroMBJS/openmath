---
title: Axiomas de separacion
description: Espacios T0, T1, Hausdorff, regularidad y normalidad, con ejemplos, contraejemplos y consecuencias estructurales.
---

# Axiomas de separacion

## Motivacion

La definicion de espacio topologico es extremadamente flexible. Esa flexibilidad es una ventaja conceptual, pero tambien significa que muchos comportamientos geometricos familiares no valen en todos los espacios.

Los **axiomas de separacion** miden en que grado los puntos y los conjuntos pueden distinguirse topologicamente mediante abiertos o cerrados.

## Idea general

En un espacio metrico, dos puntos distintos siempre pueden separarse por bolas abiertas disjuntas. En topologia general eso puede fallar.

Los axiomas

$$
T_0,\ T_1,\ T_2,\ T_3,\ T_4
$$

organizan precisamente esta jerarquia de separacion.

## Axioma

$$
T_0
$$

### Definicion

Un espacio topologico

$$
X
$$

es

$$
T_0
$$

si para cualesquiera puntos distintos

$$
x\ne y,
$$

existe un abierto que contiene a uno de ellos pero no al otro.

### Interpretacion

Los puntos distintos tienen al menos un comportamiento topologico distinguible.

### Ejemplo

El espacio de Sierpinski

$$
X=\{0,1\},
\qquad
\tau=\{\varnothing,\{1\},X\}
$$

es

$$
T_0
$$

pero no

$$
T_1.
$$

En efecto, el abierto

$$
\{1\}
$$

separa

$$
1
$$

de

$$
0,
$$

pero no hay abierto que contenga

$$
0
$$

sin contener tambien a

$$
1.
$$

## Axioma

$$
T_1
$$

### Definicion

Un espacio

$$
X
$$

es

$$
T_1
$$

si para cualesquiera puntos distintos

$$
x\ne y
$$

existe un abierto que contiene a

$$
x
$$

y no contiene a

$$
y,
$$

y otro abierto que contiene a

$$
y
$$

y no contiene a

$$
x.
$$

### Proposicion 1

Un espacio es

$$
T_1
$$

si y solo si todos los puntos singulares

$$
\{x\}
$$

son cerrados.

### Demostracion

Supongamos primero que

$$
X
$$

es

$$
T_1.
$$

Fijado

$$
x\in X,
$$

para cada

$$
y\ne x
$$

existe un abierto

$$
U_y
$$

que contiene a

$$
y
$$

y no contiene a

$$
x.
$$

Entonces

$$
X\setminus \{x\}=\bigcup_{y\ne x} U_y
$$

es abierto, luego

$$
\{x\}
$$

es cerrado.

Reciprocamente, si todo singleton es cerrado, entonces

$$
X\setminus \{y\}
$$

es abierto y contiene a

$$
x
$$

sin contener a

$$
y.
$$

## Axioma

$$
T_2
$$

o Hausdorff

### Definicion

Un espacio

$$
X
$$

es Hausdorff si para cualesquiera puntos distintos

$$
x\ne y
$$

existen abiertos disjuntos

$$
U,\ V
$$

tales que

$$
x\in U,\qquad y\in V.
$$

### Interpretacion

No solo se distinguen los puntos: pueden separarse simultaneamente por entornos incompatibles.

### Ejemplos

- todo espacio metrico es Hausdorff;
- todo espacio discreto es Hausdorff;
- la topologia cofinita sobre un conjunto infinito es

$$
T_1
$$

pero no Hausdorff;
- la topologia indiscreta en un conjunto con al menos dos puntos no es

$$
T_0.
$$

### Proposicion 2

Todo espacio Hausdorff es

$$
T_1.
$$

### Demostracion

Si

$$
x\ne y,
$$

hay abiertos disjuntos

$$
U,\ V
$$

con

$$
x\in U,\ y\in V.
$$

Entonces

$$
U
$$

contiene a

$$
x
$$

y no contiene a

$$
y,
$$

y anlogamente para

$$
V.
$$

### Observacion

La implicacion inversa falla en general. La topologia cofinita sobre un conjunto infinito es el ejemplo estandar.

## Unicidad de limites

### Teorema 3

En un espacio Hausdorff, una sucesion no puede converger a dos puntos distintos.

### Demostracion

Sean

$$
x\ne y
$$

y supongamos que

$$
x_n\to x
\qquad\text{y}\qquad
x_n\to y.
$$

Como el espacio es Hausdorff, existen abiertos disjuntos

$$
U\ni x,\qquad V\ni y.
$$

Por convergencia hacia

$$
x,
$$

existe

$$
N_1
$$

tal que para todo

$$
n\ge N_1
$$

se tiene

$$
x_n\in U.
$$

Por convergencia hacia

$$
y,
$$

existe

$$
N_2
$$

tal que para todo

$$
n\ge N_2
$$

se tiene

$$
x_n\in V.
$$

Para

$$
n\ge \max(N_1,N_2),
$$

el termino

$$
x_n
$$

deberia pertenecer a

$$
U\cap V=\varnothing,
$$

lo cual es imposible.

## Diagonal cerrada

### Proposicion 4

Un espacio Hausdorff tiene diagonal cerrada en

$$
X\times X.
$$

Es decir,

$$
\Delta=\{(x,x):x\in X\}
$$

es cerrado.

### Demostracion

Si

$$
(x,y)\notin \Delta,
$$

entonces

$$
x\ne y.
$$

Como el espacio es Hausdorff, existen abiertos disjuntos

$$
U\ni x,\qquad V\ni y.
$$

Entonces

$$
U\times V
$$

es un abierto del producto que contiene a

$$
(x,y)
$$

y no intersecta a

$$
\Delta.
$$

Luego el complemento de la diagonal es abierto.

## Regularidad

### Definicion

Un espacio

$$
X
$$

es regular si para todo punto

$$
x
$$

y todo cerrado

$$
F
$$

con

$$
x\notin F,
$$

existen abiertos disjuntos

$$
U,\ V
$$

tales que

$$
x\in U,\qquad F\subseteq V.
$$

Con frecuencia se exige ademas

$$
T_1,
$$

y entonces se habla de espacio

$$
T_3.
$$

### Equivalencia util

En un espacio

$$
T_1,
$$

la regularidad equivale a que para todo punto

$$
x
$$

y abierto

$$
O\ni x,
$$

existe un abierto

$$
U
$$

tal que

$$
x\in U\subseteq \overline{U}\subseteq O.
$$

### Esquema de demostracion

Se aplica la definicion regular a

$$
F=X\setminus O,
$$

y se usan complementos.

## Normalidad

### Definicion

Un espacio

$$
X
$$

es normal si para cualesquiera cerrados disjuntos

$$
F,\ G
$$

existen abiertos disjuntos

$$
U,\ V
$$

con

$$
F\subseteq U,
\qquad
G\subseteq V.
$$

Si ademas es

$$
T_1,
$$

se suele hablar de espacio

$$
T_4.
$$

### Comentario

La normalidad es una propiedad global mas fuerte que la regularidad. No solo separa puntos de cerrados, sino cerrados arbitrarios entre si.

## Lema de Urysohn enunciado

En un espacio normal, dos cerrados disjuntos pueden separarse por una funcion continua con valores en

$$
[0,1].
$$

Este resultado, conocido como lema de Urysohn, es una de las razones profundas por las que la normalidad es importante.

### Observacion

No lo demostramos aqui en detalle porque exige una construccion por etapas con abiertos indexados racionalmente, pero conviene retenerlo como un punto de enlace entre topologia y analisis funcional.

## Jerarquia

Las implicaciones basicas son:

$$
T_4 \Rightarrow T_3 \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0.
$$

Ninguna de las implicaciones inversas vale en general.

## Ejemplos y contraejemplos

### Espacio discreto

Todo espacio discreto es

$$
T_4.
$$

### Espacio indiscreto

Si

$$
X
$$

tiene al menos dos puntos, la topologia indiscreta no es

$$
T_0.
$$

### Topologia cofinita en un conjunto infinito

Es

$$
T_1
$$

porque los singulares son cerrados, pero no Hausdorff porque dos abiertos no vacios siempre se intersectan.

### Espacio de Sierpinski

Es

$$
T_0
$$

pero no

$$
T_1.
$$

## Subespacios

### Proposicion 5

Las propiedades

$$
T_0,\ T_1,\ T_2
$$

se heredan a subespacios.

### Demostracion

Sean

$$
Y\subseteq X
$$

y dotemos a

$$
Y
$$

de la topologia relativa.

Si

$$
x,\ y\in Y
$$

son distintos, cualquier separacion de

$$
x
$$

y

$$
y
$$

en

$$
X
$$

puede intersectarse con

$$
Y
$$

para obtener una separacion en el subespacio.

### Comentario

Regularidad y normalidad tambien tienen buenos comportamientos de herencia bajo hipotesis adecuadas, pero no de forma tan inmediata como

$$
T_0,\ T_1,\ T_2.
$$

## Productos finitos

El producto finito de espacios Hausdorff es Hausdorff. Esta propiedad se prueba separando cada coordenada por abiertos disjuntos y tomando el producto correspondiente.

## Relevancia en otros resultados

Muchos teoremas clasicos topologicos requieren hipotesis de separacion:

- compacidad mas Hausdorff implica cerradura de subconjuntos compactos;
- espacios metricos son normales;
- homeomorfismos preservan todos los axiomas de separacion;
- espacios cociente pueden destruir propiedades Hausdorff si la identificacion es demasiado salvaje.

## Comentario conceptual

Los axiomas de separacion no son detalles cosmeticos. Determinan que parte de la intuicion geometrica puede trasladarse legitimamente desde

$$
\mathbb{R}^n
$$

a espacios topologicos abstractos.

## Cierre

La jerarquia de separacion organiza el paso desde topologias muy degeneradas hasta entornos geometricamente razonables. Entender donde vive un espacio dentro de esa jerarquia es esencial antes de estudiar compacidad, continuidad, cocientes o productos.
