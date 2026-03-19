---
title: Conexidad en espacios topologicos
description: Espacios conexos, componentes, conjuntos clopen, imagenes continuas, conexidad por caminos y productos.
---

# Conexidad en espacios topologicos

## Motivacion

La compacidad describe una forma de finitud global. La conexidad describe otra propiedad global: la imposibilidad de partir el espacio en dos piezas abiertas disjuntas no triviales.

En espacios metricos suele imaginarse como "ser de una sola pieza". En topologia general esa intuicion debe expresarse en terminos de abiertos.

## Separacion de un espacio

Una **separacion** de un espacio topologico

$$
X
$$

es un par de abiertos no vacios

$$
U,\ V
$$

tal que:

$$
U\cap V=\varnothing,
\qquad
U\cup V=X.
$$

## Definicion de conexidad

Un espacio

$$
X
$$

es conexo si no admite separacion.

Equivalentemente, no puede escribirse como union de dos abiertos disjuntos no vacios.

## Caracterizacion por conjuntos clopen

### Proposicion 1

Un espacio

$$
X
$$

es conexo si y solo si los unicos subconjuntos que son simultaneamente abiertos y cerrados son

$$
\varnothing
\qquad\text{y}\qquad
X.
$$

### Demostracion

Si existe

$$
A
$$

clopen no trivial, entonces

$$
A
$$

y

$$
X\setminus A
$$

son abiertos no vacios, disjuntos y cubren

$$
X,
$$

lo que da una separacion.

Reciprocamente, si

$$
X=U\cup V
$$

es una separacion, entonces

$$
U
$$

es abierto y su complemento

$$
V
$$

tambien es abierto, luego

$$
U
$$

es clopen no trivial.

## Ejemplos

### Espacio indiscreto

Todo espacio indiscreto es conexo.

### Espacio discreto

Un espacio discreto es conexo si y solo si tiene a lo sumo un punto.

### Intervalos de

$$
\mathbb{R}
$$

Todo intervalo es conexo en la topologia usual.

### Union de dos intervalos separados

El conjunto

$$
[0,1]\cup [2,3]
$$

no es conexo como subespacio de

$$
\mathbb{R}.
$$

## Imagen continua de un conexo

### Teorema 2

Si

$$
f:X\to Y
$$

es continua y

$$
X
$$

es conexo, entonces

$$
f(X)
$$

es conexo.

### Demostracion

Supongamos que

$$
f(X)
$$

no es conexo. Entonces existen abiertos

$$
A,\ B
$$

del subespacio

$$
f(X)
$$

que lo separan. Escribimos

$$
A=f(X)\cap U,
\qquad
B=f(X)\cap V,
$$

con

$$
U,\ V
$$

abiertos de

$$
Y.
$$

Entonces

$$
f^{-1}(U)
\qquad\text{y}\qquad
f^{-1}(V)
$$

son abiertos de

$$
X,
$$

no vacios, disjuntos y cubren

$$
X,
$$

contradiciendo la conexidad.

## Consecuencia en

$$
\mathbb{R}
$$

La imagen continua de un espacio conexo en

$$
\mathbb{R}
$$

es un intervalo.

### Comentario

Este hecho encapsula topologicamente el teorema del valor intermedio.

## Conjuntos conexos

Un subconjunto

$$
A\subseteq X
$$

es conexo si lo es como subespacio de

$$
X.
$$

## Clausura de un conexo

### Proposicion 3

Si

$$
A\subseteq X
$$

es conexo, entonces su clausura

$$
\overline{A}
$$

tambien es conexa.

### Demostracion

Supongamos que

$$
\overline{A}=U\cup V
$$

es una separacion. Entonces

$$
A=(A\cap U)\cup (A\cap V).
$$

Como

$$
A
$$

es conexo, uno de esos dos conjuntos es vacio. Supongamos

$$
A\cap U=\varnothing.
$$

Entonces

$$
A\subseteq V.
$$

Como

$$
V
$$

es cerrado en el subespacio

$$
\overline{A},
$$

se concluye

$$
\overline{A}\subseteq V,
$$

contradiccion con que

$$
U
$$

sea no vacio.

## Union de conexos con interseccion comun

### Proposicion 4

Si

$$
\{A_i\}_{i\in I}
$$

es una familia de subconjuntos conexos y

$$
\bigcap_{i\in I} A_i\ne \varnothing,
$$

entonces

$$
\bigcup_{i\in I} A_i
$$

es conexo.

### Demostracion

Si la union no fuera conexa, tendria una separacion

$$
U,\ V.
$$

Cada

$$
A_i
$$

al ser conexo deberia quedar contenido por completo en

$$
U
$$

o en

$$
V.
$$

Pero como todos los

$$
A_i
$$

comparten un punto comun, no pueden repartirse entre ambos abiertos. Luego toda la union cae en uno solo, contradiccion.

## Componentes conexas

La componente conexa de un punto

$$
x\in X
$$

es la union de todos los subconjuntos conexos que contienen a

$$
x.
$$

### Proposicion 5

Las componentes conexas:

1. son conexas;
2. forman una particion de

$$
X;
$$

3. son cerradas.

### Comentario

No tienen por que ser abiertas en un espacio topologico general.

## Conexidad por caminos

### Definicion

Un espacio

$$
X
$$

es conexo por caminos si para cualesquiera

$$
x,\ y\in X
$$

existe una aplicacion continua

$$
\gamma:[0,1]\to X
$$

tal que

$$
\gamma(0)=x,
\qquad
\gamma(1)=y.
$$

### Teorema 6

Todo espacio conexo por caminos es conexo.

### Demostracion

Supongamos que

$$
X
$$

es conexo por caminos pero no conexo. Entonces existe una separacion

$$
X=U\cup V
$$

con

$$
U,\ V
$$

abiertos no vacios y disjuntos.

Tomamos

$$
x\in U,\ y\in V
$$

y un camino

$$
\gamma:[0,1]\to X
$$

que los une.

Entonces

$$
[0,1]=\gamma^{-1}(U)\cup \gamma^{-1}(V)
$$

seria una separacion de

$$
[0,1],
$$

lo cual es imposible porque el intervalo es conexo.

### Observacion

La reciproca falla: existen espacios conexos que no son conexos por caminos.

## Ejemplo clasico de falla de la reciproca

La clausura de la curva

$$
\{(x,\sin(1/x)):x>0\}
$$

en

$$
\mathbb{R}^2
$$

es conexa pero no conexa por caminos.

### Comentario

Este ejemplo subraya que la topologia general no debe reducirse a intuiciones de curvas suaves.

## Productos

El producto de espacios conexos es conexo.

### Esquema

Primero se prueba para dos factores usando que

$$
\{x\}\times Y
$$

y

$$
X\times \{y\}
$$

son conexos y generan por uniones con interseccion no vacia toda la estructura deseada. Luego se itera.

## Separacion por funciones

Si existe una funcion continua

$$
f:X\to \{0,1\}
$$

con codominio discreto no constante, entonces

$$
X
$$

no es conexo.

### Comentario

Este criterio es la version funcional de la caracterizacion por clopen.

## Importancia de la conexidad

La conexidad interviene en:

- teorema del valor intermedio;
- clasificacion cualitativa de espacios;
- topologia algebraica elemental;
- estudio de componentes y descomposiciones globales.

## Comentario conceptual

Compacidad y conexidad son dos invariantes topologicos globales profundamente distintos. La primera controla finitud de recubrimientos; la segunda controla imposibilidad de descomposicion por abiertos.

## Cierre

La conexidad codifica la idea topologica de unidad global del espacio. Su formulacion por abiertos, su estabilidad por imagen continua y su relacion con caminos la convierten en una de las piezas estructurales indispensables de la topologia general.
