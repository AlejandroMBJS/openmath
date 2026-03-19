---
title: Preliminares de topologia general
description: Cambio de lenguaje desde metricas a abiertos, comparacion de topologias y primeras propiedades estructurales.
---

# Preliminares de topologia general

## Motivacion e intuicion

En espacios metricos se mide cercania con numeros. En topologia general se conserva solo la parte cualitativa de esa informacion: que conjuntos son suficientemente pequenos alrededor de un punto, como se organizan los entornos y que significa que una propiedad dependa solo de esa estructura.

La transicion de "distancia" a "abierto" es una de las abstracciones centrales del analisis moderno. Lo que se pierde en precision cuantitativa se gana en alcance estructural.

::: tip Idea central
La topologia estudia las propiedades que dependen de la estructura de abiertos y vecindades, no del valor numerico de una distancia.
:::

## Prerrequisitos

Conviene manejar conjuntos, funciones e imagen/preimagen.

## Primeras nociones

### Que datos forman una estructura topologica

En un mismo conjunto $X$ puede imponerse mas de una topologia. Por tanto, un espacio topologico no es solo el conjunto subyacente, sino el par

$$
(X,\tau),
$$

donde $\tau$ es la familia de subconjuntos declarados abiertos.

### Topologias mas finas y mas gruesas

Si $\tau_1$ y $\tau_2$ son topologias sobre el mismo conjunto $X$, se dice que:

- $\tau_1$ es **mas fina** que $\tau_2$ si

$$
\tau_2 \subseteq \tau_1;
$$

- $\tau_1$ es **mas gruesa** que $\tau_2$ si

$$
\tau_1 \subseteq \tau_2.
$$

Mas abiertos significa topologia mas fina.

### Propiedad topologica

Una propiedad es **topologica** si depende solo de la estructura topologica y se preserva por homeomorfismos. Mas adelante esto incluye nociones como compacidad, conexidad, separacion y continuidad.

## Ejemplos basicos

### Ejemplo 1: mismo conjunto, topologias distintas

En un conjunto $X$ con al menos dos puntos pueden considerarse:

- la topologia indiscreta $\{\varnothing,X\}$;
- la topologia discreta $\mathcal{P}(X)$.

El conjunto subyacente es el mismo, pero la estructura topologica cambia radicalmente.

### Ejemplo 2: topologia usual frente a discreta

Sobre $\mathbb{R}$, la topologia usual no hace abiertos a los singletons, mientras que la topologia discreta si.

### Ejemplo 3: comparacion de finura

Si $X$ es no vacio, entonces

$$
\{\varnothing,X\} \subseteq \tau \subseteq \mathcal{P}(X)
$$

para toda topologia $\tau$ sobre $X$.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: mas fina no significa mejor

La topologia discreta tiene mas abiertos que la usual sobre $\mathbb{R}$, pero eso no la hace mas natural para analisis. De hecho, cambia totalmente la nocion de convergencia y continuidad.

### Contraejemplo 2: misma cardinalidad no implica misma topologia

Dos topologias sobre el mismo conjunto pueden tener muy distinto comportamiento incluso si el conjunto subyacente es finito.

### Ejemplo fino 3: muchas metricas, una sola topologia

En $\mathbb{R}^n$, distintas normas inducen la misma topologia. Esto muestra que la topologia abstrae la estructura comun detras de varias metricas.

## Proposiciones y teoremas centrales

### Proposicion 1: la relacion "ser mas fina que" es un orden parcial

En el conjunto de todas las topologias sobre un conjunto fijo $X$, la relacion

$$
\tau_1 \preceq \tau_2 \iff \tau_1 \subseteq \tau_2
$$

es reflexiva, antisimetrica y transitiva.

#### Demostracion

- Reflexividad: toda familia esta contenida en si misma.
- Antisimetria: si $\tau_1 \subseteq \tau_2$ y $\tau_2 \subseteq \tau_1$, entonces $\tau_1=\tau_2$.
- Transitividad: si $\tau_1 \subseteq \tau_2$ y $\tau_2 \subseteq \tau_3$, entonces $\tau_1 \subseteq \tau_3$.

### Proposicion 2: existe una topologia mas gruesa y una mas fina

Para todo conjunto $X$:

- la topologia indiscreta

$$
\tau_{ind} = \{\varnothing,X\}
$$

es la mas gruesa posible;
- la topologia discreta

$$
\tau_{dis} = \mathcal{P}(X)
$$

es la mas fina posible.

#### Demostracion

Toda topologia debe contener $\varnothing$ y $X$, luego

$$
\tau_{ind} \subseteq \tau
$$

para cualquier topologia $\tau$.

Ademas, toda topologia es una familia de subconjuntos de $X$, por lo que

$$
\tau \subseteq \mathcal{P}(X)=\tau_{dis}.
$$

### Proposicion 3: mas fina cambia convergencia y continuidad

Si $\tau_1$ es mas fina que $\tau_2$, entonces la identidad

$$
\operatorname{id} : (X,\tau_1) \to (X,\tau_2)
$$

es continua.

#### Demostracion

Sea $U \in \tau_2$. Como $\tau_2 \subseteq \tau_1$,

$$
\operatorname{id}^{-1}(U)=U \in \tau_1.
$$

Luego la identidad es continua.

#### Comentario

La continuidad en la direccion opuesta no esta garantizada. Esto ya indica que la comparacion entre topologias no es solo decorativa.

## Errores comunes

1. Tratar un conjunto y un espacio topologico como si fueran el mismo objeto.
2. Pensar que la topologia es unica sobre un conjunto dado.
3. Confundir "mas fina" con "geometricamente mejor".
4. Hablar de propiedades topologicas sin precisar la topologia subyacente.

## Resumen operativo

- Una topologia es estructura adicional sobre un conjunto.
- Topologia mas fina significa mas abiertos.
- La indiscreta es minima y la discreta es maxima.
- La teoria topologica comienza comparando estructuras sobre el mismo soporte.

## Ejercicios

1. Prueba que si $X$ tiene un solo punto, la topologia discreta y la indiscreta coinciden.
2. Sobre $X=\{1,2,3\}$, escribe tres topologias distintas y ordenalas por inclusion cuando sea posible.
3. Decide si la identidad entre dos topologias distintas sobre el mismo conjunto puede ser homeomorfismo.
4. Da un ejemplo de una propiedad que no sea topologica.
5. Explica por que una metrica no determina unicamente una escala, pero si una topologia.
