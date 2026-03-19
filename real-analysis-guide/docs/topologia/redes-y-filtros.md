---
title: Redes y filtros
description: Redes, subredes, filtros y ultrafiltros como sustitutos correctos de las sucesiones en topologia general.
---

# Redes y filtros

## Motivacion

En espacios metricos, las sucesiones capturan muy bien:

- clausura;
- continuidad;
- compacidad;
- convergencia.

En topologia general esto falla. La razon profunda es que una sucesion solo usa el conjunto director

$$
\mathbb{N},
$$

y eso puede ser demasiado pobre para explorar topologias que no tienen control numerable.

Las **redes** y los **filtros** son las herramientas correctas para reemplazar las sucesiones en toda generalidad.

## Conjuntos dirigidos

### Definicion

Un conjunto

$$
D
$$

con una relacion

$$
\preceq
$$

es dirigido si:

1. es reflexiva y transitiva;
2. para cualesquiera

$$
\alpha,\beta\in D,
$$

existe

$$
\gamma\in D
$$

tal que

$$
\alpha\preceq \gamma
\qquad\text{y}\qquad
\beta\preceq \gamma.
$$

### Ejemplos

- 

$$
\mathbb{N}
$$

con el orden usual;
- el conjunto de vecindades de un punto, ordenado por inclusion inversa;
- el conjunto de partes finitas de un conjunto infinito, ordenado por inclusion.

## Redes

### Definicion

Una red en un espacio

$$
X
$$

es una aplicacion

$$
x:D\to X,
$$

donde

$$
D
$$

es un conjunto dirigido.

Se suele escribir

$$
(x_\alpha)_{\alpha\in D}.
$$

### Comentario

Una sucesion es simplemente una red cuyo conjunto director es

$$
\mathbb{N}.
$$

## Convergencia de una red

### Definicion

La red

$$
(x_\alpha)_{\alpha\in D}
$$

converge a

$$
x\in X
$$

si para toda vecindad

$$
U
$$

de

$$
x
$$

existe

$$
\alpha_0\in D
$$

tal que para todo

$$
\alpha\succeq \alpha_0
$$

se tiene

$$
x_\alpha\in U.
$$

### Interpretacion

La red entra eventualmente en toda vecindad del punto limite.

## Puntos adherentes de una red

### Definicion

Un punto

$$
x\in X
$$

es adherente a la red

$$
(x_\alpha)
$$

si para toda vecindad

$$
U
$$

de

$$
x
$$

y todo

$$
\alpha_0\in D
$$

existe

$$
\alpha\succeq \alpha_0
$$

tal que

$$
x_\alpha\in U.
$$

### Comentario

Convergencia exige permanencia eventual; adherencia exige solo aparicion arbitrariamente tardia.

## Subredes

### Definicion

Una subred de

$$
(x_\alpha)_{\alpha\in D}
$$

es una red

$$
(x_{\phi(\beta)})_{\beta\in E}
$$

donde

$$
E
$$

es dirigido y

$$
\phi:E\to D
$$

satisface:

1. es creciente;
2. es cofinal, es decir, para todo

$$
\alpha_0\in D
$$

existe

$$
\beta_0\in E
$$

tal que si

$$
\beta\succeq \beta_0,
$$

entonces

$$
\phi(\beta)\succeq \alpha_0.
$$

### Comentario

La nocion correcta de subred es mas sutil que "tomar una subsucesion". La cofinalidad garantiza que la subred no ignore arbitrariamente colas de la red original.

## Clausura por redes

### Teorema 1

Para

$$
A\subseteq X
$$

y

$$
x\in X,
$$

se tiene

$$
x\in \overline{A}
$$

si y solo si existe una red en

$$
A
$$

que converge a

$$
x.
$$

### Demostracion

Supongamos primero

$$
x\in \overline{A}.
$$

Tomamos como conjunto director

$$
\mathcal{N}(x)
$$

la familia de vecindades de

$$
x
$$

ordenada por inclusion inversa:

$$
U\preceq V
\iff
U\supseteq V.
$$

Como

$$
x\in \overline{A},
$$

cada vecindad

$$
U
$$

intersecta a

$$
A.
$$

Elegimos

$$
x_U\in U\cap A.
$$

La red

$$
(x_U)_{U\in \mathcal{N}(x)}
$$

converge a

$$
x.
$$

En efecto, si

$$
W
$$

es una vecindad de

$$
x,
$$

entonces para todo

$$
U\preceq W
$$

se tiene

$$
U\subseteq W,
$$

de modo que

$$
x_U\in U\subseteq W.
$$

Reciprocamente, si una red en

$$
A
$$

converge a

$$
x,
$$

entonces toda vecindad de

$$
x
$$

contiene eventualmente terminos de la red, y por tanto intersecta a

$$
A.
$$

Luego

$$
x\in \overline{A}.
$$

## Continuidad por redes

### Teorema 2

Una aplicacion

$$
f:X\to Y
$$

es continua si y solo si para toda red

$$
x_\alpha\to x
$$

en

$$
X
$$

se cumple

$$
f(x_\alpha)\to f(x)
$$

en

$$
Y.
$$

### Demostracion

Si

$$
f
$$

es continua y

$$
V
$$

es una vecindad de

$$
f(x),
$$

entonces

$$
f^{-1}(V)
$$

es vecindad de

$$
x.
$$

Como

$$
x_\alpha\to x,
$$

eventualmente

$$
x_\alpha\in f^{-1}(V),
$$

y por tanto

$$
f(x_\alpha)\in V.
$$

Reciprocamente, supongamos que

$$
f
$$

preserva convergencia de redes, pero no es continua en un punto

$$
x.
$$

Entonces existe una vecindad

$$
V
$$

de

$$
f(x)
$$

tal que toda vecindad

$$
U
$$

de

$$
x
$$

contiene algun punto

$$
x_U\in U
$$

con

$$
f(x_U)\notin V.
$$

Tomando otra vez las vecindades de

$$
x
$$

como conjunto director por inclusion inversa, la red

$$
(x_U)
$$

converge a

$$
x,
$$

pero su imagen nunca entra en

$$
V,
$$

contradiccion.

## Compacidad por redes

### Teorema 3

Un espacio topologico

$$
X
$$

es compacto si y solo si toda red en

$$
X
$$

posee una subred convergente.

### Comentario

Este resultado es el anlogo topologico general del criterio secuencial de compacidad, que solo vale en espacios metricos o en clases especiales.

### Idea de demostracion

La compacidad se traduce en que toda familia de cerrados con propiedad de interseccion finita tiene interseccion no vacia. A partir de una red se construyen cerrados de colas y se obtiene un punto adherente. Luego se extrae una subred convergente hacia ese punto.

## Puntos adherentes y subredes

### Proposicion 4

Un punto

$$
x
$$

es adherente a una red si y solo si existe una subred que converge a

$$
x.
$$

### Comentario

Esta proposicion es a las redes lo que el paso de punto de acumulacion a subsucesion convergente es a las sucesiones en espacios metricos compactos.

## Filtros

### Definicion

Un filtro

$$
\mathcal{F}
$$

sobre un conjunto

$$
X
$$

es una familia no vacia de subconjuntos de

$$
X
$$

tal que:

1. 

$$
\varnothing\notin \mathcal{F};
$$

2. si

$$
A,\ B\in \mathcal{F},
$$

entonces

$$
A\cap B\in \mathcal{F};
$$

3. si

$$
A\in \mathcal{F}
$$

y

$$
A\subseteq B\subseteq X,
$$

entonces

$$
B\in \mathcal{F}.
$$

### Interpretacion

Un filtro representa una nocion abstracta de "conjunto grande" o de "aproximacion dirigida hacia una region".

## Filtro de vecindades

Para un punto

$$
x\in X,
$$

la familia de todas las vecindades de

$$
x
$$

forma un filtro, llamado filtro de vecindades de

$$
x.
$$

## Convergencia de filtros

### Definicion

Un filtro

$$
\mathcal{F}
$$

converge a

$$
x
$$

si toda vecindad de

$$
x
$$

pertenece a

$$
\mathcal{F}.
$$

Equivalentemente:

$$
\mathcal{N}(x)\subseteq \mathcal{F}.
$$

## Adherencia de filtros

### Definicion

Un punto

$$
x
$$

es adherente al filtro

$$
\mathcal{F}
$$

si toda vecindad

$$
U
$$

de

$$
x
$$

intersecta a todo conjunto

$$
A\in \mathcal{F}.
$$

### Comentario

Convergencia de un filtro es mas fuerte que simple adherencia.

## Base de filtro

### Definicion

Una base de filtro es una familia no vacia

$$
\mathcal{B}
$$

de subconjuntos no vacios de

$$
X
$$

tal que para cualesquiera

$$
B_1,\ B_2\in \mathcal{B}
$$

existe

$$
B_3\in \mathcal{B}
$$

con

$$
B_3\subseteq B_1\cap B_2.
$$

La familia de supersets de los elementos de

$$
\mathcal{B}
$$

genera un filtro.

## Relacion entre redes y filtros

Toda red genera un filtro de colas:

la familia de conjuntos

$$
\{x_\alpha:\alpha\succeq \alpha_0\}
$$

y sus supersets forman una base de filtro.

Reciprocamente, todo filtro puede representarse por una red adecuada.

### Comentario

Redes y filtros son dos lenguajes equivalentes para hablar de convergencia general. Las redes son mas cercanas a las sucesiones; los filtros suelen ser mas limpios para argumentos estructurales y ultrafiltros.

## Ultrafiltros

### Definicion

Un ultrafiltro es un filtro maximal respecto de inclusion.

### Caracterizacion

Un filtro

$$
\mathcal{U}
$$

es ultrafiltro si y solo si para todo subconjunto

$$
A\subseteq X
$$

se cumple exactamente una de las dos posibilidades:

$$
A\in \mathcal{U}
\qquad\text{o}\qquad
X\setminus A\in \mathcal{U}.
$$

### Comentario

Los ultrafiltros son los anlogos abstractos de una decision completa sobre que conjuntos son "grandes".

## Compactidad por ultrafiltros

### Teorema 5

Un espacio

$$
X
$$

es compacto si y solo si todo ultrafiltro sobre

$$
X
$$

converge.

### Comentario

Este criterio es una de las caracterizaciones mas elegantes de la compacidad.

## Por que las sucesiones no bastan

La falla esencial es que los entornos de un punto pueden no admitir reduccion numerable. Entonces una sucesion no puede visitar sistematicamente todas las direcciones topologicas relevantes.

### Ejemplo conceptual

En un espacio no primero numerable, puede ocurrir que

$$
x\in \overline{A}
$$

pero ninguna sucesion de puntos de

$$
A
$$

converja a

$$
x.
$$

Las redes corrigen exactamente esta deficiencia al permitir conjuntos directores mas ricos que

$$
\mathbb{N}.
$$

## Continuidad secuencial frente a continuidad topologica

En general:

- continuidad topologica implica continuidad secuencial;
- la reciproca puede fallar.

### Correccion

Si el dominio es de primera numerabilidad, las sucesiones vuelven a bastar. Si no, las redes son el lenguaje correcto.

## Convergencia en productos

Una red

$$
x_\alpha=(x_\alpha^{(i)})_{i\in I}
$$

en un producto

$$
\prod_{i\in I} X_i
$$

converge a

$$
x=(x^{(i)})_{i\in I}
$$

si y solo si converge coordenada a coordenada:

$$
x_\alpha^{(i)}\to x^{(i)}
$$

para cada

$$
i.
$$

### Comentario

Esta afirmacion es limpia para redes, mientras que con sucesiones puede resultar enganosa en productos grandes.

## Compacidad, continuidad y clausura en lenguaje de redes

Las redes permiten reescribir de forma uniforme varios hechos:

- clausura:
  puntos de clausura son limites de redes;
- continuidad:
  una funcion es continua si preserva limites de redes;
- compacidad:
  toda red admite subred convergente.

### Comentario

Esta triple equivalencia muestra que las redes no son una sofisticacion decorativa, sino el sustituto exacto de las sucesiones en topologia general.

## Comentario conceptual

Las redes y los filtros corrigen una ilusion comun: creer que la topologia general se entiende completamente con sucesiones. Eso solo ocurre bajo hipotesis de numerabilidad. Fuera de ese mundo, estos objetos son tan naturales como las sucesiones en analisis metrico.

## Cierre

Quien quiera hacer topologia general en serio no puede quedarse solo con sucesiones. Redes y filtros son el lenguaje correcto para clausura, continuidad y compacidad una vez que la estructura numerable deja de estar garantizada.
