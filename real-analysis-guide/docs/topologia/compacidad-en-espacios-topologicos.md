---
title: Compacidad en espacios topologicos
description: Recubrimientos abiertos, equivalencias fundamentales, imagenes continuas, compacidad mas Hausdorff y teorema de subbase de Alexander.
---

# Compacidad en espacios topologicos

## Motivacion

En analisis sobre

$$
\mathbb{R}^n,
$$

la compacidad suele presentarse via cerrado y acotado. En topologia general esa caracterizacion desaparece. La definicion correcta es por recubrimientos abiertos.

La compacidad es una propiedad de finitud topologica, no una nocion metrica.

## Definicion por recubrimientos

Un espacio topologico

$$
X
$$

es compacto si todo recubrimiento abierto de

$$
X
$$

admite un subrecubrimiento finito.

Es decir, si

$$
X\subseteq \bigcup_{i\in I} U_i
$$

con cada

$$
U_i
$$

abierto, entonces existen

$$
i_1,\dots,i_n
$$

tales que

$$
X=U_{i_1}\cup\cdots\cup U_{i_n}.
$$

## Subconjuntos compactos

Un subconjunto

$$
K\subseteq X
$$

es compacto si es compacto con la topologia de subespacio.

Equivalentemente, todo recubrimiento por abiertos de

$$
X
$$

que cubra a

$$
K
$$

tiene un subrecubrimiento finito de

$$
K.
$$

## Primeros ejemplos

### Espacio finito

Todo espacio topologico finito es compacto.

### Topologia indiscreta

Todo espacio con topologia indiscreta es compacto, porque el unico abierto no vacio es todo el espacio.

### Topologia discreta

Un espacio discreto es compacto si y solo si es finito.

#### Demostracion

Si

$$
X
$$

es discreto e infinito, la familia de singulares

$$
\{\{x\}:x\in X\}
$$

es un recubrimiento abierto sin subrecubrimiento finito.

## Cerrados en compactos

### Proposicion 1

Si

$$
X
$$

es compacto y

$$
F\subseteq X
$$

es cerrado, entonces

$$
F
$$

es compacto.

### Demostracion

Sea

$$
\{U_i\}_{i\in I}
$$

un recubrimiento abierto de

$$
F.
$$

Entonces

$$
\{U_i\}_{i\in I}\cup\{X\setminus F\}
$$

es un recubrimiento abierto de

$$
X.
$$

Por compacidad de

$$
X,
$$

admite un subrecubrimiento finito. Si el abierto

$$
X\setminus F
$$

aparece, al eliminarlo sigue quedando un subrecubrimiento finito de

$$
F.
$$

## Imagen continua de compacto

### Teorema 2

Si

$$
f:X\to Y
$$

es continua y

$$
X
$$

es compacto, entonces

$$
f(X)
$$

es compacto.

### Demostracion

Sea

$$
\{V_i\}_{i\in I}
$$

un recubrimiento abierto de

$$
f(X).
$$

Entonces

$$
\{f^{-1}(V_i)\}_{i\in I}
$$

es un recubrimiento abierto de

$$
X.
$$

Por compacidad, existe un subrecubrimiento finito

$$
f^{-1}(V_{i_1}),\dots,f^{-1}(V_{i_n}).
$$

Entonces

$$
V_{i_1},\dots,V_{i_n}
$$

cubren a

$$
f(X).
$$

## Compacto mas Hausdorff

### Teorema 3

En un espacio Hausdorff, todo subconjunto compacto es cerrado.

### Demostracion

Sea

$$
K\subseteq X
$$

compacto y

$$
x\notin K.
$$

Para cada

$$
y\in K,
$$

como

$$
X
$$

es Hausdorff, existen abiertos disjuntos

$$
U_y\ni x,
\qquad
V_y\ni y.
$$

La familia

$$
\{V_y:y\in K\}
$$

cubre a

$$
K.
$$

Por compacidad, existe un subrecubrimiento finito

$$
V_{y_1},\dots,V_{y_n}.
$$

Entonces

$$
U=U_{y_1}\cap\cdots\cap U_{y_n}
$$

es un abierto que contiene a

$$
x
$$

y es disjunto de

$$
K.
$$

Hemos probado que para cada punto exterior a

$$
K
$$

hay un abierto disjunto de

$$
K,
$$

luego el complemento de

$$
K
$$

es abierto.

### Consecuencia

Si

$$
X
$$

es compacto y Hausdorff, entonces los subconjuntos compactos coinciden con los cerrados compactos.

## Propiedad de interseccion finita

### Definicion

Una familia de cerrados

$$
\{F_i\}_{i\in I}
$$

tiene la propiedad de interseccion finita si toda subfamilia finita tiene interseccion no vacia.

### Teorema 4

Un espacio

$$
X
$$

es compacto si y solo si toda familia de cerrados con la propiedad de interseccion finita tiene interseccion total no vacia.

### Demostracion

Supongamos primero que

$$
X
$$

es compacto. Sea

$$
\{F_i\}_{i\in I}
$$

una familia de cerrados con la propiedad de interseccion finita. Si

$$
\bigcap_{i\in I} F_i=\varnothing,
$$

entonces

$$
\{X\setminus F_i\}_{i\in I}
$$

es un recubrimiento abierto de

$$
X.
$$

Por compacidad tiene un subrecubrimiento finito:

$$
X=(X\setminus F_{i_1})\cup\cdots\cup (X\setminus F_{i_n}).
$$

Tomando complementos:

$$
F_{i_1}\cap\cdots\cap F_{i_n}=\varnothing,
$$

contradiccion.

La implicacion inversa se obtiene aplicando el argumento a una familia de complementos de un supuesto recubrimiento abierto sin subrecubrimiento finito.

## Compacidad y funciones reales

Si

$$
K
$$

es compacto y

$$
f:K\to \mathbb{R}
$$

es continua, entonces:

- 

$$
f(K)
$$

es compacto en

$$
\mathbb{R};
$$

- por tanto es cerrado y acotado;
- 

$$
f
$$

alcanza maximo y minimo.

### Comentario

Este es el teorema del valor extremo, que en topologia aparece como consecuencia pura de compacidad mas continuidad.

## Compacidad de productos finitos

### Teorema 5

El producto finito de espacios compactos es compacto.

### Esquema de demostracion

Puede demostrarse primero para dos factores usando recubrimientos por elementos basicos del producto y luego proceder por induccion.

### Comentario

El resultado general para productos arbitrarios es el teorema de Tychonoff, uno de los teoremas centrales de la topologia general.

## Teorema de subbase de Alexander

### Enunciado

Un espacio es compacto si y solo si todo recubrimiento por elementos de una subbase admite subrecubrimiento finito.

### Importancia

Este teorema permite demostrar Tychonoff de manera elegante y reduce muchos problemas de compacidad a familias mas economicas de abiertos.

### Observacion

No desarrollamos aqui una prueba completa porque exige un argumento maximal tipo Zorn, pero es importante ubicar este resultado como parte del nucleo de topologia general madura.

## Compacidad local

Un espacio es localmente compacto si todo punto posee una vecindad cuya clausura es compacta.

### Comentario

La compacidad local juega un papel importante en analisis armonico, topologia algebraica y teoria de medidas.

## Ejemplos finos

### Topologia cofinita

En un conjunto cualquiera con topologia cofinita, el espacio es compacto.

#### Demostracion

Sea

$$
\{U_i\}_{i\in I}
$$

un recubrimiento abierto. Si uno de los abiertos es

$$
X,
$$

ya terminamos. En otro caso, todos los abiertos no vacios tienen complemento finito. Tomando uno de ellos,

$$
U_{i_0},
$$

su complemento es finito. Cada uno de esos puntos restantes puede cubrirse con algun abierto de la familia. Solo hacen falta finitamente muchos.

### Intervalo cerrado en

$$
\mathbb{R}
$$

El intervalo

$$
[a,b]
$$

es compacto. Este es el contenido topologico del teorema de Heine-Borel en la recta.

## No confundir con acotacion

Fuera de espacios metricos o normados, la palabra "acotado" ni siquiera esta definida de manera intrinseca. La compacidad debe entenderse por recubrimientos, no por intuiciones geometricas heredadas de

$$
\mathbb{R}^n.
$$

## Compactamente generado por continuidad

Muchos invariantes topologicos se transportan bien sobre compactos precisamente porque las funciones continuas preservan compacidad. Esto explica la ubicacion central del concepto en toda la teoria.

## Comentario conceptual

La compacidad es una forma topologica de finitud global. No reduce el espacio a pocos puntos, sino que impide que un recubrimiento abierto necesite informacion infinitamente dispersa para describir todo el espacio.

## Cierre

La compacidad topologica reemplaza de manera robusta a muchas intuiciones metricas de control global. Su fuerza aparece en tres frentes: estabilidad por imagen continua, interaccion profunda con Hausdorff y capacidad para recuperar teoremas de maximos, minimos y existencia en contextos abstractos.
