---
title: Completitud
description: Espacios metricos completos, ejemplos fundamentales, estabilidad por cerrados y relacion con compacidad y productos.
---

# Completitud

## Motivacion e intuicion

Una sucesion de Cauchy se comporta como si debiera converger. Si no converge, el problema no esta en la sucesion, sino en que el espacio no tiene sitio para su limite.

La completitud formaliza exactamente esta idea: un espacio metrico es completo cuando no tiene huecos metricos desde el punto de vista de las sucesiones de Cauchy.

Esta propiedad es una de las bisagras conceptuales del bloque. A partir de ella aparecen:

- el teorema de Baire;
- la estabilidad de los cerrados;
- la relacion entre compacidad y Cauchy;
- el paso de espacios normados a espacios de Banach.

## Prerrequisitos

Conviene manejar:

- convergencia en metricos;
- sucesiones de Cauchy;
- cerrados y subespacios;
- compacidad secuencial elemental.

## Definiciones formales

### Espacio completo

Un espacio metrico $(X,d)$ es **completo** si toda sucesion de Cauchy en $X$ converge a un punto de $X$.

Es decir:

$$
\forall (x_n)\subseteq X,
\quad
(x_n) \text{ de Cauchy }
\implies
\exists x \in X \text{ tal que } x_n \to x.
$$

### Incompletitud

Diremos que $(X,d)$ es **incompleto** si existe al menos una sucesion de Cauchy en $X$ que no converge en $X$.

### Espacio de Banach

Si $V$ es un espacio normado y la metrica inducida por la norma es completa, entonces $V$ se llama **espacio de Banach**.

## Interpretacion en lenguaje natural

La completitud es una propiedad intrinsecamente metrica.

- Si una sucesion se aprieta cada vez mas dentro del espacio, la completitud garantiza que ese proceso no "apunta" hacia un punto ausente.
- Un espacio incompleto se parece a un espacio al que le faltan algunos limites naturales.

El ejemplo historico prototipico es $\mathbb{Q}$: muchas sucesiones racionales de Cauchy representan numeros reales irracionales que no viven dentro del propio espacio.

## Ejemplos basicos

### Ejemplo 1: $\mathbb{R}$ es completo

Este es un hecho fundamental del analisis real. Equivale, en el fondo, a la propiedad de completitud de los reales.

### Ejemplo 2: $\mathbb{R}^n$ es completo

Con cualquiera de sus normas usuales, $\mathbb{R}^n$ es completo. Una forma de verlo es usar la equivalencia de normas y la convergencia coordenada.

### Ejemplo 3: todo espacio finito con cualquier metrica es completo

En un espacio finito, toda sucesion de Cauchy es eventualmente constante. Por tanto converge.

### Ejemplo 4: la metrica discreta siempre es completa

En un espacio con metrica discreta, las sucesiones de Cauchy son eventualmente constantes. Luego toda metrica discreta es completa.

### Ejemplo 5: $\mathbb{Q}$ no es completo

Una sucesion racional que aproxime a $\sqrt{2}$ es de Cauchy en $\mathbb{Q}$, pero no converge en $\mathbb{Q}$.

### Ejemplo 6: un abierto de $\mathbb{R}$ puede ser incompleto

El espacio

$$
(0,1)
$$

con la metrica usual no es completo. Por ejemplo,

$$
x_n=\frac{1}{n+1}
$$

es de Cauchy, pero su limite real es $0$, que no pertenece a $(0,1)$.

## Ejemplos finos y contraejemplos

### Ejemplo fino 1: completitud no es una propiedad topologica

Sobre el mismo conjunto subyacente $\mathbb{R}$ consideremos:

$$
d(x,y)=|x-y|
$$

y

$$
\rho(x,y)=|\arctan x-\arctan y|.
$$

Ambas metricas inducen la misma topologia, porque $\arctan$ es un homeomorfismo de $\mathbb{R}$ sobre

$$
\left(-\frac{\pi}{2},\frac{\pi}{2}\right).
$$

Sin embargo, $d$ es completa y $\rho$ no lo es.

En efecto, la sucesion $x_n=n$ satisface

$$
\rho(n,m)=|\arctan n-\arctan m|,
$$

y como $(\arctan n)$ converge en $\mathbb{R}$, la sucesion $(n)$ es de Cauchy para $\rho$. Pero no converge en $\mathbb{R}$ respecto de $\rho$, porque ello requeriria un $x \in \mathbb{R}$ con

$$
\arctan x=\frac{\pi}{2},
$$

lo cual es imposible.

### Ejemplo fino 2: cerrado y acotado no implica completo en un espacio arbitrario

La completitud de un subconjunto depende del espacio ambiente y de la metrica. En $\mathbb{Q}$, por ejemplo, el conjunto

$$
F=[0,2]\cap \mathbb{Q}
$$

es cerrado y acotado como subespacio de $\mathbb{Q}$, pero no es completo: una sucesion racional en $F$ que aproxime a $\sqrt{2}$ es de Cauchy y no converge en $F$.

### Ejemplo fino 3: completitud y compacidad no son lo mismo

Todo compacto metrico es completo, pero un espacio completo puede no ser compacto. El ejemplo mas simple es

$$
\mathbb{R}.
$$

## Proposiciones y teoremas

### Teorema 1: un cerrado de un completo es completo

Sea $(X,d)$ un espacio metrico completo y sea $F \subseteq X$ cerrado. Entonces $F$, con la metrica inducida, es completo.

#### Demostracion

Sea $(x_n)$ una sucesion de Cauchy en $F$. Como la metrica es la inducida, $(x_n)$ tambien es de Cauchy como sucesion en $X$.

Puesto que $X$ es completo, existe $x \in X$ tal que

$$
x_n \to x \quad \text{en } X.
$$

Como todos los terminos pertenecen a $F$ y $F$ es cerrado, la caracterizacion secuencial de cerrado da

$$
x \in F.
$$

Luego la sucesion converge en $F$, y por tanto $F$ es completo.

### Teorema 2: un subespacio completo es cerrado

Sea $(X,d)$ un espacio metrico y sea $Y \subseteq X$. Si $Y$ es completo con la metrica inducida, entonces $Y$ es cerrado en $X$.

#### Demostracion

Tomemos una sucesion $(y_n)$ en $Y$ tal que

$$
y_n \to x \quad \text{en } X.
$$

Toda sucesion convergente es de Cauchy, asi que $(y_n)$ es de Cauchy en $X$ y, en particular, tambien en $Y$ con la metrica inducida.

Como $Y$ es completo, existe $y \in Y$ tal que

$$
y_n \to y \quad \text{en } Y.
$$

Pero converger en $Y$ con la metrica inducida es lo mismo que converger en $X$. Por unicidad del limite:

$$
x=y.
$$

Luego $x \in Y$. Hemos probado que $Y$ contiene los limites de toda sucesion suya convergente en $X$, asi que $Y$ es cerrado.

### Corolario

Si $X$ es completo y $Y \subseteq X$, entonces

$$
Y \text{ es completo } \iff Y \text{ es cerrado en } X.
$$

### Teorema 3: todo compacto metrico es completo

Si $K$ es un espacio metrico compacto, entonces $K$ es completo.

#### Demostracion

Sea $(x_n)$ una sucesion de Cauchy en $K$. Como $K$ es compacto metrico, toda sucesion en $K$ admite una subsucesion convergente. Por tanto existe una subsucesion $(x_{n_k})$ y un punto $x \in K$ tales que

$$
x_{n_k}\to x.
$$

Pero una sucesion de Cauchy que tiene una subsucesion convergente converge toda al mismo limite. Luego

$$
x_n \to x.
$$

Asi, toda sucesion de Cauchy en $K$ converge en $K$, y por tanto $K$ es completo.

### Teorema 4: el producto finito de completos es completo

Sean $(X_1,d_1),\dots,(X_m,d_m)$ espacios metricos completos. En el producto

$$
X=X_1\times \cdots \times X_m
$$

consideremos la metrica

$$
d(x,y)=\max_{1 \le j \le m} d_j(x_j,y_j),
$$

donde

$$
x=(x_1,\dots,x_m),
\qquad
y=(y_1,\dots,y_m).
$$

Entonces $(X,d)$ es completo.

#### Demostracion

Sea $(x^{(n)})$ una sucesion de Cauchy en $X$, con

$$
x^{(n)}=(x_1^{(n)},\dots,x_m^{(n)}).
$$

Fijemos un indice $j$. Como

$$
d_j(x_j^{(n)},x_j^{(m)})
\le
\max_{1 \le i \le m} d_i(x_i^{(n)},x_i^{(m)})
=
d(x^{(n)},x^{(m)}),
$$

se deduce que la sucesion coordenada $(x_j^{(n)})$ es de Cauchy en $X_j$. Como $X_j$ es completo, existe $x_j \in X_j$ tal que

$$
x_j^{(n)} \to x_j.
$$

Definimos

$$
x=(x_1,\dots,x_m)\in X.
$$

Ahora, como cada coordenada converge, para todo $\varepsilon>0$ existe $N_j$ tal que

$$
n \ge N_j \implies d_j(x_j^{(n)},x_j)<\varepsilon.
$$

Tomando

$$
N=\max\{N_1,\dots,N_m\},
$$

obtenemos que para $n \ge N$:

$$
d(x^{(n)},x)=\max_{1 \le j \le m} d_j(x_j^{(n)},x_j)<\varepsilon.
$$

Luego

$$
x^{(n)} \to x.
$$

Por tanto $X$ es completo.

### Proposicion 5: sucesion de Cauchy mas subsucesion convergente

En un espacio completo no hace falta buscar directamente el limite de una sucesion de Cauchy. Basta probar que alguna subsucesion converge, pues entonces converge toda la sucesion.

#### Comentario

Esta observacion no añade un teorema nuevo, pero es un metodo de prueba recurrente en compacidad y analisis funcional.

## Resumen conceptual

La completitud dice que toda coherencia interna de tipo Cauchy se realiza como convergencia efectiva dentro del espacio.

Sus mensajes estructurales principales son:

- $\mathbb{Q}$ y muchos abiertos de $\mathbb{R}$ son incompletos;
- los cerrados de un completo siguen siendo completos;
- dentro de un completo, ser completo equivale a ser cerrado;
- los compactos metricos son completos;
- la completitud no depende solo de la topologia.

## Ejemplos guiados finales

### Ejemplo guiado 1: por que $\mathbb{Q}$ es incompleto

Tomemos una sucesion de racionales $(q_n)$ tal que

$$
q_n^2 \to 2
$$

y

$$
q_n \to \sqrt{2}
$$

en $\mathbb{R}$. Entonces $(q_n)$ es de Cauchy en la metrica usual, pero no converge en $\mathbb{Q}$ porque su unico posible limite seria $\sqrt{2}$, que no pertenece a $\mathbb{Q}$.

### Ejemplo guiado 2: por que $(0,1)$ falla

La sucesion

$$
\frac1{n+1}
$$

es de Cauchy en $(0,1)$ porque lo es en $\mathbb{R}$. Sin embargo, el limite natural es $0$, que queda fuera del espacio. El problema no es la sucesion; el problema es el hueco.

### Ejemplo guiado 3: la completitud no se ve solo con abiertos

Las metricas usual y

$$
\rho(x,y)=|\arctan x-\arctan y|
$$

sobre $\mathbb{R}$ generan los mismos abiertos, pero una es completa y la otra no. Esto prueba que la completitud es una propiedad metrica genuina, no topologica.

### Ejemplo guiado 4: por que todo compacto metrico es completo

Una sucesion de Cauchy en un compacto tiene una subsucesion convergente por compacidad. Y una vez que una sucesion de Cauchy posee una sola subsucesion convergente, toda la sucesion queda forzada a converger al mismo punto. Esa es la mecanica completa de la prueba.

## Errores comunes

1. Creer que completitud es lo mismo que compacidad.
2. Pensar que completitud es una propiedad topologica.
3. Suponer que todo subespacio de un completo sigue siendo completo.
4. Aplicar sin mas el criterio "cerrado y acotado" fuera de $\mathbb{R}^n$.
5. Confundir un espacio completo con un espacio en el que toda sucesion acotada converge.

## Cierre

La completitud marca la frontera entre espacios en los que las sucesiones de Cauchy tienen destino interno y espacios en los que algunas de ellas "escapan" hacia puntos ausentes. Esa distincion es una de las ideas mas profundas y fertiles de toda la teoria metrico-topologica.
