---
title: Heine-Borel en metricos
description: Alcance del criterio cerrado y acotado, caracterizacion correcto-metrica por total acotacion y caso euclideo.
---

# Heine-Borel en metricos

## Motivacion e intuicion

El teorema de Heine-Borel clasico es uno de los resultados mas famosos del analisis:

$$
\text{cerrado y acotado} \iff \text{compacto}
$$

en $\mathbb{R}^n$.

Pero fuera del contexto euclideo esta equivalencia falla de manera contundente. La formulacion correcta en espacios metricos generales reemplaza "acotado" por "totalmente acotado" y "cerrado" por "completo" cuando se trabaja con el espacio completo ambiente.

## Prerrequisitos

Conviene manejar:

- compacidad en metricos;
- total acotacion;
- completitud;
- bolas abiertas;
- espacios normados basicos.

## Definiciones formales

### Conjunto acotado

Un subconjunto $A \subseteq X$ es **acotado** si existe $x_0 \in X$ y $R>0$ tales que

$$
A \subseteq B(x_0,R).
$$

### Conjunto totalmente acotado

$A \subseteq X$ es **totalmente acotado** si para todo $\varepsilon>0$ existen puntos

$$
x_1,\dots,x_N \in X
$$

tales que

$$
A \subseteq \bigcup_{j=1}^N B(x_j,\varepsilon).
$$

### Observacion

La total acotacion implica acotacion, pero no al reves en general.

## Teorema correcto en espacios metricos

### Teorema 1

Para un espacio metrico $(X,d)$ y un subconjunto $K \subseteq X$, se tiene

$$
K \text{ es compacto } \iff K \text{ es completo y totalmente acotado}
$$

cuando $K$ se considera con la metrica inducida.

#### Comentario

Esta es la forma correcta de Heine-Borel en el mundo metrico abstracto.

## Demostracion del teorema correcto

### Compacto implica completo y totalmente acotado

Si $K$ es compacto, entonces es secuencialmente compacto.

- **Completitud**: toda sucesion de Cauchy en $K$ posee una subsucesion convergente a algun punto $x \in K$. Una sucesion de Cauchy con una subsucesion convergente converge toda ella al mismo limite. Luego $K$ es completo.
- **Total acotacion**: si $K$ no fuera totalmente acotado, existiria $\varepsilon_0>0$ tal que ninguna union finita de bolas de radio $\varepsilon_0$ cubre a $K$. Se construye inductivamente una sucesion $(x_n)$ en $K$ con

$$
d(x_n,x_m)\ge \varepsilon_0 \quad \text{si } n \ne m.
$$

Tal sucesion no puede tener subsucesion de Cauchy ni convergente, contradiciendo compacidad secuencial.

### Completo y totalmente acotado implica compacto

Sea $(x_n)$ una sucesion en $K$. Como $K$ es totalmente acotado, para $\varepsilon=1$ existe una cubierta finita por bolas de radio $1$; alguna de ellas contiene infinitos terminos de la sucesion. Extraemos una subsucesion en esa bola.

Repetimos para radios

$$
\frac12,\frac13,\dots
$$

y por diagonalizacion obtenemos una subsucesion $(x_{n_k})$ tal que para cada $m$ todos los terminos suficientemente avanzados quedan en una misma bola de radio $1/m$. De aqui se deduce que $(x_{n_k})$ es de Cauchy.

Como $K$ es completo, la subsucesion converge en $K$. Luego toda sucesion en $K$ posee subsucesion convergente, y por el criterio metrico de compacidad, $K$ es compacto.

## Caso euclideo

### Teorema 2: Heine-Borel en $\mathbb{R}^n$

En $\mathbb{R}^n$ con cualquier norma,

$$
K \subseteq \mathbb{R}^n \text{ es compacto } \iff K \text{ es cerrado y acotado.}
$$

#### Demostracion

Si $K$ es compacto, entonces en todo espacio metrico compacto es cerrado y acotado.

Reciprocamente, si $K$ es cerrado y acotado en $\mathbb{R}^n$, la acotacion implica total acotacion en dimension finita, y como $\mathbb{R}^n$ es completo, el cerrado $K$ es completo con la metrica inducida. Por el teorema anterior, $K$ es compacto.

### Proposicion 3: en dimension finita, acotado implica totalmente acotado

Si $A \subseteq \mathbb{R}^n$ es acotado, entonces es totalmente acotado.

#### Idea de demostracion

Un conjunto acotado queda contenido en un cubo grande. Ese cubo puede subdividirse en finitamente muchos subcubos de diametro menor que $\varepsilon$. Eligiendo un punto en cada subcubo no vacio se obtiene una $\varepsilon$-red finita.

## Ejemplos y contraejemplos

### Ejemplo 1: intervalos cerrados y acotados

En $\mathbb{R}$,

$$
[a,b]
$$

es compacto.

### Ejemplo 2: bolas cerradas en dimension finita

En $\mathbb{R}^n$, toda bola cerrada

$$
\overline{B}(0,R)
$$

es compacta.

### Contraejemplo 1: metrica discreta

En un espacio infinito con metrica discreta, todo subconjunto es acotado porque su diametro es a lo mas $1$. Sin embargo, un subconjunto infinito no es compacto.

#### Explicacion

Para

$$
\varepsilon<1,
$$

cada bola de radio $\varepsilon$ es un singleton, asi que un conjunto infinito no puede ser totalmente acotado.

### Contraejemplo 2: bola unitaria en $\ell^2$

En el espacio de Hilbert $\ell^2$, la bola cerrada unitaria

$$
\overline{B}(0,1)
$$

es cerrada y acotada, pero no compacta.

#### Demostracion

Considera la sucesion de vectores canonicos $(e_n)$. Cada uno satisface

$$
\|e_n\|_2=1,
$$

de modo que

$$
e_n \in \overline{B}(0,1).
$$

Pero si $n \ne m$,

$$
\|e_n-e_m\|_2 = \sqrt{2}.
$$

Luego la sucesion no tiene ninguna subsucesion de Cauchy, y por tanto no puede tener subsucesion convergente. La bola no es compacta.

### Contraejemplo 3: acotado abierto en $\mathbb{R}$

El intervalo

$$
(0,1)
$$

es acotado, pero no compacto porque no es cerrado.

## Consecuencias operativas

### Proposicion 4

En $\mathbb{R}^n$, toda funcion continua sobre un cerrado y acotado alcanza maximo y minimo.

### Proposicion 5

En espacios metricos generales, la hipotesis "cerrado y acotado" no debe usarse como sustituto de compacidad. La combinacion correcta es "completo y totalmente acotado".

## Errores comunes

1. Aplicar "cerrado y acotado implica compacto" en cualquier espacio metrico o normado.
2. Confundir acotacion con total acotacion.
3. Pensar que toda bola cerrada en un Banach es compacta.
4. Olvidar que la implicacion euclidea depende fuertemente de la dimension finita.

## Resumen operativo

- En espacios metricos generales,

$$
\text{compacto} \iff \text{completo y totalmente acotado}.
$$

- En $\mathbb{R}^n$, la acotacion ya implica total acotacion y los cerrados son completos, por eso reaparece Heine-Borel.
- El criterio "cerrado y acotado" es especial de la geometria euclidea y de dimension finita.

## Ejercicios

1. Demuestra que todo compacto metrico es totalmente acotado.
2. Prueba que un subconjunto infinito de un discreto no es compacto.
3. Completa la prueba de que un conjunto acotado de $\mathbb{R}^n$ es totalmente acotado.
4. Demuestra que la bola unitaria cerrada de $\ell^2$ no es compacta.
5. Explica con precision por que Heine-Borel falla en espacios normados infinito-dimensionales.
