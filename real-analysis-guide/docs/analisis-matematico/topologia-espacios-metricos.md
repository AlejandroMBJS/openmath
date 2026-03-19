---
title: Topologia de espacios metricos
description: Topologia inducida por una metrica, bases, entornos, separacion y propiedades estructurales fundamentales.
---

# Topologia de espacios metricos

## Motivacion e intuicion

Una metrica da numeros: distancias, radios, diametros. Pero el analisis no siempre necesita el valor exacto de esas distancias. Muchas veces solo importa saber que puntos estan cerca, que conjuntos pueden usarse como entornos y que aplicaciones preservan esa estructura local.

La topologia inducida por una metrica es precisamente la parte cualitativa de la geometria metrica. Conserva la nocion de abierto, entorno, continuidad y convergencia, pero olvida la escala numerica exacta. Dos metricas distintas pueden asignar distancias muy diferentes y, sin embargo, inducir la misma topologia.

Por eso es importante separar dos niveles:

- el nivel **metrico**, donde importan las desigualdades cuantitativas;
- el nivel **topologico**, donde importa la estructura de abiertos y entornos.

En espacios metricos estos dos niveles se relacionan de manera especialmente limpia.

## Prerrequisitos

Conviene manejar:

- espacios metricos y bolas abiertas;
- conjuntos abiertos en metricos;
- abiertos relativos en subespacios;
- convergencia elemental de sucesiones.

## Definiciones formales

Sea $(X,d)$ un espacio metrico.

### Topologia inducida por una metrica

La familia

$$
\tau_d=\{U \subseteq X : U \text{ es abierto respecto de } d\}
$$

se llama **topologia inducida** por la metrica $d$.

### Espacio topologico metrizable

Un espacio topologico $(X,\tau)$ se dice **metrizable** si existe una metrica $d$ tal que

$$
\tau=\tau_d.
$$

Es decir, la topologia proviene de alguna distancia.

### Base de una topologia

Una familia $\mathcal{B}\subseteq \tau_d$ es una **base** si todo abierto $U \in \tau_d$ puede escribirse como union de elementos de $\mathcal{B}$.

Equivalentemente, para todo $x \in U$ con $U$ abierto, existe $B \in \mathcal{B}$ tal que

$$
x \in B \subseteq U.
$$

### Base local de entornos

Una familia $\mathcal{N}_x$ de entornos de $x$ es una **base local** en $x$ si todo entorno $V$ de $x$ contiene algun elemento de $\mathcal{N}_x$.

### Interior

Para $A \subseteq X$, el **interior** de $A$ es

$$
\operatorname{int}(A)=\bigcup\{U \in \tau_d : U \subseteq A\}.
$$

## Interpretacion en lenguaje natural

La topologia inducida responde preguntas del tipo:

- cuales son los conjuntos por los que uno puede moverse un poco sin salir;
- como se aproximan los puntos;
- cuando una funcion preserva cercania local.

La metrica produce esos datos, pero una vez producidos muchas propiedades ya no dependen del numero exacto $d(x,y)$, sino de como se organizan los abiertos.

## Ejemplos basicos

### Ejemplo 1: topologia usual en $\mathbb{R}$

En $(\mathbb{R},|\cdot|)$, la topologia inducida es la topologia euclidea habitual. Sus abiertos son uniones de intervalos abiertos.

### Ejemplo 2: topologia discreta

En un conjunto $X$ con la metrica discreta, toda parte es abierta. Luego

$$
\tau_d=\mathcal{P}(X).
$$

### Ejemplo 3: normas distintas en $\mathbb{R}^n$

Las metricas inducidas por $\|\cdot\|_1$, $\|\cdot\|_2$ y $\|\cdot\|_\infty$ son distintas, pero generan la misma topologia.

### Ejemplo 4: subespacios

Si $Y \subseteq X$, la topologia inducida por la metrica restringida coincide con la topologia relativa:

$$
\tau_{d|_Y}=\{Y \cap U : U \in \tau_d\}.
$$

### Ejemplo 5: la metrica acotada asociada

Si $d$ es una metrica, entonces

$$
\rho(x,y)=\min\{d(x,y),1\}
$$

genera la misma topologia que $d$, aunque todas las distancias de $\rho$ esten acotadas por $1$.

## Ejemplos finos y contraejemplos

### Ejemplo fino 1: misma topologia, distinta metrica

En $\mathbb{R}$, las metricas

$$
d(x,y)=|x-y|
\qquad \text{y} \qquad
\rho(x,y)=\frac{|x-y|}{1+|x-y|}
$$

inducen la misma topologia, aunque la segunda este acotada por $1$.

### Ejemplo fino 2: misma coleccion de abiertos, distintas bolas

En $\mathbb{R}^2$, la bola unitaria euclidea es un disco, la de la norma uno es un rombo y la de la norma infinito es un cuadrado. Las bolas cambian, pero la topologia no.

### Contraejemplo 3: una metrica distinta puede cambiar completamente la topologia

En $\mathbb{R}$, la metrica discreta hace que cada singleton sea abierto. Por tanto no genera la topologia usual.

### Contraejemplo 4: no toda topologia proviene de una metrica

Existen espacios topologicos no metrizables. Este hecho recuerda que la teoria topologica es mas amplia que la teoria metrico-topologica.

## Teoremas y demostraciones

### Proposicion 1: las bolas abiertas forman una base

La familia de todas las bolas abiertas

$$
\mathcal{B}=\{B(x,r): x \in X,\ r>0\}
$$

es una base de $\tau_d$.

#### Demostracion

Cada bola abierta es abierta, asi que

$$
\mathcal{B}\subseteq \tau_d.
$$

Sea ahora $U \in \tau_d$ y sea $x \in U$. Como $U$ es abierto, existe $r_x>0$ tal que

$$
B(x,r_x)\subseteq U.
$$

Esto prueba la propiedad caracteristica de base. Equivalentemente,

$$
U=\bigcup_{x \in U} B(x,r_x).
$$

### Corolario

Toda afirmacion topologica local en un espacio metrico puede comprobarse usando solo bolas.

### Proposicion 2: caracterizacion por bases locales

Para cada $x \in X$, la familia de bolas abiertas centradas en $x$

$$
\{B(x,r): r>0\}
$$

es una base local de entornos.

#### Demostracion

Si $V$ es un entorno de $x$, por definicion existe $r>0$ tal que

$$
B(x,r)\subseteq V.
$$

Luego toda vecindad contiene una bola centrada en el punto.

### Proposicion 3: primera numerabilidad

Todo espacio metrico es de primera numerabilidad. Mas precisamente, para cada $x \in X$ la familia

$$
\left\{B\left(x,\frac1n\right): n \in \mathbb{N}\right\}
$$

es una base local numerable.

#### Demostracion

Sea $V$ un entorno cualquiera de $x$. Existe $r>0$ con

$$
B(x,r)\subseteq V.
$$

Elegimos $n \in \mathbb{N}$ tal que

$$
\frac1n<r.
$$

Entonces

$$
B\left(x,\frac1n\right)\subseteq B(x,r)\subseteq V.
$$

Luego la familia indicada es una base local numerable.

### Comentario

Esta propiedad explica por que en espacios metricos muchas nociones topologicas admiten caracterizacion mediante sucesiones.

### Proposicion 4: propiedad de Hausdorff

Todo espacio metrico es Hausdorff.

#### Demostracion

Sean $x,y \in X$ con $x \ne y$. Entonces

$$
d(x,y)>0.
$$

Tomamos

$$
r=\frac{d(x,y)}{3}.
$$

Si existiera $z \in B(x,r)\cap B(y,r)$, la desigualdad triangular daria

$$
d(x,y)\le d(x,z)+d(z,y)<r+r=\frac{2}{3}d(x,y),
$$

lo cual es imposible. Por tanto

$$
B(x,r)\cap B(y,r)=\varnothing.
$$

Esto prueba que puntos distintos admiten entornos disjuntos.

### Consecuencia

En un espacio metrico, los limites de sucesiones, si existen, son unicos.

### Proposicion 5: interior como mayor abierto contenido

Para todo $A \subseteq X$:

1. $\operatorname{int}(A)$ es abierto;
2. $\operatorname{int}(A)\subseteq A$;
3. si $U$ es abierto y $U \subseteq A$, entonces

$$
U \subseteq \operatorname{int}(A).
$$

#### Demostracion

Por definicion,

$$
\operatorname{int}(A)
$$

es union de abiertos contenidos en $A$, asi que es abierto y esta contenido en $A$.

Si $U$ es abierto con $U \subseteq A$, entonces $U$ aparece entre los conjuntos cuya union define el interior. Por tanto

$$
U \subseteq \operatorname{int}(A).
$$

### Proposicion 6: equivalencia fuerte de metricas implica misma topologia

Sean $d_1$ y $d_2$ dos metricas en $X$. Supongamos que existen constantes $\alpha,\beta>0$ tales que

$$
\alpha\, d_1(x,y)\le d_2(x,y)\le \beta\, d_1(x,y)
\qquad
\forall x,y \in X.
$$

Entonces

$$
\tau_{d_1}=\tau_{d_2}.
$$

#### Demostracion

Si $d_2(x,a)<r$, entonces

$$
\alpha\, d_1(x,a)\le d_2(x,a)<r,
$$

de donde

$$
d_1(x,a)<\frac{r}{\alpha}.
$$

Por tanto

$$
B_{d_2}(a,r)\subseteq B_{d_1}\left(a,\frac{r}{\alpha}\right).
$$

Del otro lado, si

$$
d_1(x,a)<\frac{r}{\beta},
$$

entonces

$$
d_2(x,a)\le \beta\, d_1(x,a)<r,
$$

y por tanto

$$
B_{d_1}\left(a,\frac{r}{\beta}\right)\subseteq B_{d_2}(a,r).
$$

Estas inclusiones muestran que un conjunto es abierto para una metrica si y solo si lo es para la otra.

## Resumen conceptual

La topologia inducida por una metrica es la estructura de abiertos generada por sus bolas. En ese lenguaje:

- las bolas son una base;
- cada punto tiene una base local numerable;
- la separacion de Hausdorff viene gratis;
- muchas cuestiones topologicas se reducen a estudiar entornos;
- metricas distintas pueden producir la misma topologia.

En otras palabras: la metrica da la topologia, pero no toda la informacion metrica sobrevive al pasar a la topologia.

## Ejemplos guiados finales

### Ejemplo guiado 1: por que $d$ y $\min\{d,1\}$ dan la misma topologia

La metrica truncada

$$
\rho(x,y)=\min\{d(x,y),1\}
$$

no cambia el comportamiento para radios menores que $1$. Mas precisamente, si $0<r<1$, entonces

$$
B_\rho(x,r)=B_d(x,r).
$$

Como toda vecindad puede comprobarse con radios pequenos, los abiertos coinciden.

### Ejemplo guiado 2: topologia discreta frente a topologia usual

Sobre el mismo conjunto subyacente $\mathbb{R}$:

- con la metrica usual, los singletons no son abiertos;
- con la metrica discreta, cada singleton si es abierto.

Por tanto, la coleccion de abiertos cambia radicalmente al cambiar la metrica.

### Ejemplo guiado 3: por que la primera numerabilidad importa

Si un punto $x$ tiene como base local las bolas

$$
B(x,1),\ B(x,1/2),\ B(x,1/3),\dots,
$$

entonces para estudiar si una propiedad local falla basta construir una sucesion que entre en entornos cada vez mas pequenos. Esa es la razon estructural por la que las sucesiones son tan eficaces en espacios metricos.

### Ejemplo guiado 4: interior en un subespacio

Si $Y=[0,1]$ y

$$
A=[0,1/2),
$$

entonces

$$
\operatorname{int}_{\mathbb{R}}(A)=(0,1/2),
$$

pero

$$
\operatorname{int}_{Y}(A)=A.
$$

El interior depende del espacio en el que se este trabajando.

## Errores comunes

1. Identificar topologia con metrica. La topologia la produce la metrica, pero retiene menos informacion.
2. Pensar que todo abierto es una sola bola. En general es union de muchas bolas.
3. Olvidar que la nocion de interior depende del espacio ambiente.
4. Creer que metricas distintas siempre producen topologias distintas.
5. Suponer que toda topologia es metrizable.

## Cierre

La topologia de un espacio metrico es el lenguaje estable en el que despues se escriben continuidad, clausura, compacidad y convergencia secuencial. Entender que partes de la metrica sobreviven a ese paso y cuales no es una de las ideas conceptuales decisivas del bloque.
