---
title: Axiomas de numerabilidad
description: Primera y segunda numerabilidad, separabilidad, Lindelof y el papel estructural de las hipotesis numerables en topologia general.
---

# Axiomas de numerabilidad

## Motivacion

Muchas de las herramientas mas familiares del analisis funcionan tan bien porque los espacios metricos tienen abundante estructura numerable:

- bases locales numerables;
- bases globales numerables en muchos casos importantes;
- descripciones secuenciales razonables;
- capacidad de reducir argumentos infinitos a familias contables.

En topologia general esto ya no es automatico. Los **axiomas de numerabilidad** miden precisamente hasta que punto la estructura topologica puede ser controlada por datos numerables.

## Primera numerabilidad

### Definicion

Un espacio topologico

$$
X
$$

es de primera numerabilidad si todo punto

$$
x\in X
$$

posee una base local numerable.

### Comentario

Esta es una condicion local. No exige una sola familia numerable que describa todo el espacio, sino una en cada punto.

### Ejemplos

- todo espacio metrico es de primera numerabilidad;
- todo espacio discreto es de primera numerabilidad;
- un conjunto no numerable con la topologia cofinita no es de primera numerabilidad.

## Segunda numerabilidad

### Definicion

Un espacio topologico

$$
X
$$

es de segunda numerabilidad si posee una base global numerable.

### Comentario

Esta es una condicion mucho mas fuerte que la primera numerabilidad.

## Implicacion basica

### Proposicion 1

Todo espacio de segunda numerabilidad es de primera numerabilidad.

### Demostracion

Sea

$$
\mathcal{B}=\{B_n:n\in \mathbb{N}\}
$$

una base global numerable.

Para un punto fijo

$$
x\in X,
$$

la subfamilia

$$
\mathcal{B}_x=\{B_n\in \mathcal{B}:x\in B_n\}
$$

es numerable y constituye una base local en

$$
x.
$$

Luego

$$
X
$$

es de primera numerabilidad.

### Observacion

La implicacion inversa falla en general.

## Contraejemplo: primera no implica segunda

Un ejemplo clasico es la recta de Sorgenfrey:

la recta

$$
\mathbb{R}
$$

con base formada por los intervalos semiabiertos

$$
[a,b).
$$

### Hechos

- es de primera numerabilidad;
- no es de segunda numerabilidad.

### Idea

En cada punto

$$
x
$$

la familia

$$
\left\{\left[x,x+\frac{1}{n}\right):n\in \mathbb{N}\right\}
$$

es base local numerable.

Pero no existe base global numerable porque la topologia distingue demasiados comportamientos locales incompatibles con una sola base numerable.

## Separabilidad

### Definicion

Un espacio topologico es separable si contiene un subconjunto denso numerable.

Es decir, existe

$$
D\subseteq X
$$

numerable tal que

$$
\overline{D}=X.
$$

### Ejemplos

- 

$$
\mathbb{R}
$$

con la topologia usual es separable, ya que

$$
\mathbb{Q}
$$

es denso y numerable;
- todo espacio numerable es separable;
- un espacio discreto no numerable no es separable.

## Segunda numerabilidad implica separabilidad

### Proposicion 2

Todo espacio de segunda numerabilidad es separable.

### Demostracion

Sea

$$
\mathcal{B}=\{B_n:n\in \mathbb{N}\}
$$

una base numerable. Para cada

$$
n
$$

tal que

$$
B_n\ne \varnothing,
$$

elegimos un punto

$$
x_n\in B_n.
$$

La familia

$$
D=\{x_n:B_n\ne \varnothing\}
$$

es numerable.

Veamos que es densa. Si

$$
U
$$

es un abierto no vacio, contiene algun

$$
B_n
$$

de la base, y por construccion

$$
x_n\in B_n\subseteq U.
$$

Luego todo abierto no vacio intersecta a

$$
D,
$$

y por tanto

$$
\overline{D}=X.
$$

### Observacion

La reciproca falla: hay espacios separables que no son de segunda numerabilidad.

## Lindelof

### Definicion

Un espacio topologico

$$
X
$$

es de Lindelof si todo recubrimiento abierto admite un subrecubrimiento numerable.

### Comentario

Compacidad exige subrecubrimiento finito; Lindelof exige solo numerable. Es, por tanto, una forma mas debil de control global.

## Segunda numerabilidad implica Lindelof

### Proposicion 3

Todo espacio de segunda numerabilidad es de Lindelof.

### Demostracion

Sea

$$
\mathcal{B}=\{B_n:n\in \mathbb{N}\}
$$

una base numerable y sea

$$
\{U_i\}_{i\in I}
$$

un recubrimiento abierto de

$$
X.
$$

Para cada

$$
B_n
$$

que este contenido en algun

$$
U_i,
$$

elegimos uno de esos

$$
U_i
$$

y lo llamamos

$$
V_n.
$$

La familia

$$
\{V_n\}
$$

es numerable. Veamos que cubre

$$
X.
$$

Si

$$
x\in X,
$$

como los

$$
U_i
$$

cubren el espacio, existe

$$
U_i
$$

con

$$
x\in U_i.
$$

Por ser

$$
\mathcal{B}
$$

una base, existe

$$
B_n
$$

tal que

$$
x\in B_n\subseteq U_i.
$$

Entonces el correspondiente

$$
V_n
$$

contiene a

$$
x.
$$

## Producto finito de segundos numerables

### Proposicion 4

El producto finito de espacios de segunda numerabilidad es de segunda numerabilidad.

### Demostracion para dos factores

Sean

$$
\mathcal{B}=\{B_n:n\in \mathbb{N}\}
$$

base numerable de

$$
X
$$

y

$$
\mathcal{C}=\{C_m:m\in \mathbb{N}\}
$$

base numerable de

$$
Y.
$$

Entonces

$$
\{B_n\times C_m:(n,m)\in \mathbb{N}^2\}
$$

es una base numerable del producto

$$
X\times Y.
$$

Como

$$
\mathbb{N}^2
$$

es numerable, la familia resultante tambien lo es.

## Subespacios de segundos numerables

### Proposicion 5

Todo subespacio de un espacio de segunda numerabilidad es de segunda numerabilidad.

### Demostracion

Si

$$
Y\subseteq X
$$

y

$$
\mathcal{B}
$$

es una base numerable de

$$
X,
$$

entonces

$$
\{B\cap Y:B\in \mathcal{B}\}
$$

es una base numerable del subespacio

$$
Y.
$$

## Segundos numerables y separacion

Los espacios Hausdorff de segunda numerabilidad se comportan muy bien:

- son de Lindelof;
- admiten buen control por abiertos numerables;
- muchas construcciones clasicas de analisis funcionan con argumentos secuenciales o casi secuenciales.

### Comentario

En topologia de variedades y analisis funcional, la segunda numerabilidad se impone con frecuencia precisamente para excluir patologias demasiado grandes.

## Bases numerables y continuidad

Si

$$
Y
$$

tiene base numerable

$$
\mathcal{B},
$$

para verificar continuidad de

$$
f:X\to Y
$$

basta verificar que la preimagen de cada

$$
B\in \mathcal{B}
$$

sea abierta.

### Comentario

Esta reduccion numerable simplifica enormemente pruebas de continuidad.

## Primera numerabilidad y sucesiones

### Teorema 6

Si

$$
X
$$

es de primera numerabilidad, entonces:

1. 

$$
x\in \overline{A}
$$

si y solo si existe una sucesion

$$
(x_n)\subseteq A
$$

que converge a

$$
x;
$$

2. la continuidad puede caracterizarse mediante sucesiones.

### Demostracion del punto 1

Supongamos

$$
x\in \overline{A}.
$$

Sea

$$
\{U_n\}_{n\in \mathbb{N}}
$$

una base local numerable en

$$
x.
$$

Definimos

$$
V_n=U_1\cap\cdots\cap U_n.
$$

Entonces

$$
\{V_n\}
$$

sigue siendo una base local numerable decreciente.

Como

$$
x\in \overline{A},
$$

cada

$$
V_n
$$

intersecta a

$$
A.
$$

Elegimos

$$
x_n\in V_n\cap A.
$$

Veamos que

$$
x_n\to x.
$$

Sea

$$
U
$$

una vecindad de

$$
x.
$$

Alguno de los

$$
V_N
$$

esta contenido en

$$
U.
$$

Para

$$
n\ge N,
$$

como

$$
V_n\subseteq V_N\subseteq U,
$$

se tiene

$$
x_n\in U.
$$

La implicacion inversa es inmediata porque todo entorno de

$$
x
$$

contiene infinitos terminos de una sucesion convergente a

$$
x.
$$

### Comentario

Este resultado falla en general sin primera numerabilidad. Esa es una de las razones por las que las sucesiones no bastan en topologia general completa.

## Continuidad secuencial

### Proposicion 7

Si

$$
X
$$

es de primera numerabilidad, entonces una aplicacion

$$
f:X\to Y
$$

es continua si y solo si preserva limites de sucesiones.

### Demostracion

La continuidad siempre implica preservacion de limites.

Reciprocamente, supongamos que

$$
f
$$

preserva limites de sucesiones. Si no fuera continua en un punto

$$
x,
$$

existiria un abierto

$$
V\ni f(x)
$$

tal que toda vecindad de

$$
x
$$

contendria un punto fuera de

$$
f^{-1}(V).
$$

Usando una base local numerable decreciente

$$
\{U_n\},
$$

elegimos

$$
x_n\in U_n\setminus f^{-1}(V).
$$

Entonces

$$
x_n\to x,
$$

pero

$$
f(x_n)\notin V
$$

para todo

$$
n,
$$

lo que impide que

$$
f(x_n)\to f(x).
$$

Contradiccion.

## Espacios secuenciales

Un espacio se llama secuencial si la clausura de un conjunto puede describirse completamente por limites de sucesiones, aunque el espacio no sea necesariamente de primera numerabilidad.

### Comentario

La clase de espacios secuenciales es mas amplia que la de primera numerabilidad, pero aun asi no agota la topologia general.

## Axioma CCC

Otra condicion numerable frecuente es la condicion de cadena numerable:

todo conjunto de abiertos no vacios dos a dos disjuntos es a lo sumo numerable.

### Comentario

No es equivalente a los axiomas anteriores, pero aparece en teoria de medida, espacios ordenados y teoria de forcing.

## Relaciones entre propiedades

Las implicaciones seguras mas importantes son:

$$
\text{segunda numerabilidad}
\Rightarrow
\text{primera numerabilidad},
$$

$$
\text{segunda numerabilidad}
\Rightarrow
\text{separable},
$$

$$
\text{segunda numerabilidad}
\Rightarrow
\text{Lindelof}.
$$

Ninguna de las reciprocas vale en general.

## Ejemplos y contraejemplos

### Espacio discreto no numerable

- es de primera numerabilidad;
- no es separable;
- no es Lindelof;
- no es de segunda numerabilidad.

### Topologia cofinita sobre conjunto no numerable

- es

$$
T_1;
$$

- es compacta;
- no es de primera numerabilidad;
- no es Hausdorff.

### Recta usual

- es de primera y segunda numerabilidad;
- es separable;
- es Lindelof.

## Importancia estructural

Los axiomas de numerabilidad controlan hasta que punto la topologia puede manejarse con herramientas contables. Son precisamente el puente entre:

- topologia abstracta;
- lenguaje secuencial del analisis;
- metrizabilidad y construcciones clasicas.

## Cierre

Sin condiciones de numerabilidad, muchas intuiciones del analisis dejan de ser validas. Entender primera y segunda numerabilidad, junto con separabilidad y Lindelof, es esencial para saber cuando las tecnicas familiares siguen funcionando y cuando es necesario pasar al lenguaje mas general de redes y filtros.
