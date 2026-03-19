---
title: Axiomas de la probabilidad
description: Espacios de probabilidad, sigma-algebras, axiomas de Kolmogorov y consecuencias estructurales fundamentales.
---

# Axiomas de la probabilidad

## El paso de la intuicion a la estructura

La intuicion probabilistica aparece pronto:

- eventos imposibles deben tener probabilidad cero;
- eventos seguros deben tener probabilidad uno;
- casos incompatibles deben sumar sus probabilidades.

Pero esa intuicion necesita una formulacion matematica estable que sirva:

- en espacios finitos;
- en espacios numerables;
- en espacios continuos;
- en procesos estocasticos;
- en estadistica matematica.

La respuesta moderna es la axiomatica de Kolmogorov. Su fuerza esta en que usa muy pocas reglas y, sin embargo, genera toda la teoria clasica.

## Espacio de probabilidad

Un espacio de probabilidad es una terna

$$
(\Omega,\mathcal F,P),
$$

donde:

- $\Omega$ es el espacio muestral;
- $\mathcal F$ es una familia de subconjuntos de $\Omega$;
- $P:\mathcal F\to [0,1]$ es una funcion.

Los elementos de $\mathcal F$ son los eventos a los que el modelo asigna probabilidad.

## Por que no se toman siempre todos los subconjuntos

En espacios finitos suele ser natural tomar

$$
\mathcal F=\mathcal P(\Omega),
$$

el conjunto de todos los subconjuntos.

En espacios infinitos, especialmente continuos, esta eleccion puede ser demasiado grande y conducir a obstrucciones matematicas profundas. Por eso se escoge una familia bien comportada de eventos medibles.

### Comentario

Esto no es un capricho tecnico. Es el precio de querer una teoria coherente en contextos generales.

## Sigma-algebra

La familia $\mathcal F$ debe ser una sigma-algebra, es decir:

1. 

$$
\Omega\in\mathcal F;
$$

2. si

$$
A\in\mathcal F,
$$

entonces

$$
A^c\in\mathcal F;
$$

3. si

$$
A_1,A_2,\dots\in\mathcal F,
$$

entonces

$$
\bigcup_{n=1}^{\infty}A_n\in\mathcal F.
$$

## Consecuencias de ser sigma-algebra

De estas tres propiedades se deduce que $\mathcal F$ esta cerrada bajo muchas operaciones utiles.

### Interseccion numerable

Usando De Morgan:

$$
\bigcap_{n=1}^{\infty}A_n
=
\left(\bigcup_{n=1}^{\infty}A_n^c\right)^c,
$$

luego tambien pertenece a $\mathcal F$.

### Diferencia

Si

$$
A,B\in\mathcal F,
$$

entonces

$$
A\setminus B=A\cap B^c\in\mathcal F.
$$

### Union e interseccion finitas

Son casos particulares de las versiones numerables.

## Los axiomas de Kolmogorov

La funcion $P$ debe satisfacer:

### Axioma 1: no negatividad

Para todo

$$
A\in\mathcal F,
$$

se tiene

$$
P(A)\ge 0.
$$

### Axioma 2: normalizacion

$$
P(\Omega)=1.
$$

### Axioma 3: sigma-aditividad

Si

$$
A_1,A_2,\dots\in\mathcal F
$$

son dos a dos disjuntos, entonces

$$
P\left(\bigcup_{n=1}^{\infty}A_n\right)
=
\sum_{n=1}^{\infty}P(A_n).
$$

## Por que la aditividad es numerable

Podria parecer suficiente exigir solo aditividad finita. Pero la sigma-aditividad es la propiedad que conecta probabilidad con teoria de medida y permite desarrollar:

- limites de eventos;
- variables aleatorias generales;
- integracion;
- teoremas de convergencia;
- procesos estocasticos.

Sin sigma-aditividad, gran parte de la teoria moderna colapsa.

## Primeras consecuencias

### Proposicion 1

$$
P(\varnothing)=0.
$$

#### Demostracion

Como

$$
\Omega=\Omega\cup\varnothing
$$

en union disjunta, por sigma-aditividad:

$$
P(\Omega)=P(\Omega)+P(\varnothing).
$$

Entonces

$$
P(\varnothing)=0.
$$

## Cotas elementales

### Proposicion 2

Para todo evento

$$
A\in\mathcal F,
$$

se cumple

$$
0\le P(A)\le 1.
$$

#### Demostracion

La cota inferior es el axioma 1. Para la superior:

$$
\Omega=A\cup A^c
$$

en union disjunta, luego

$$
1=P(\Omega)=P(A)+P(A^c)\ge P(A).
$$

## Complemento

### Proposicion 3

Para todo

$$
A\in\mathcal F,
$$

se tiene

$$
P(A^c)=1-P(A).
$$

#### Demostracion

La identidad

$$
\Omega=A\cup A^c
$$

es union disjunta. Entonces

$$
1=P(\Omega)=P(A)+P(A^c).
$$

## Monotonia

### Proposicion 4

Si

$$
A\subseteq B,
$$

entonces

$$
P(A)\le P(B).
$$

#### Demostracion

Escribimos

$$
B=A\cup(B\setminus A)
$$

en union disjunta. Entonces

$$
P(B)=P(A)+P(B\setminus A)\ge P(A).
$$

## Diferencia de eventos

### Proposicion 5

Si

$$
A\subseteq B,
$$

entonces

$$
P(B\setminus A)=P(B)-P(A).
$$

Esto sale directamente de la descomposicion anterior.

## Aditividad finita

### Proposicion 6

Si

$$
A_1,\dots,A_n
$$

son dos a dos disjuntos, entonces

$$
P\left(\bigcup_{k=1}^n A_k\right)=\sum_{k=1}^n P(A_k).
$$

### Comentario

Basta aplicar sigma-aditividad a la sucesion infinita que continua con conjuntos vacios a partir del indice $n+1$.

## Formula de inclusion-exclusion para dos eventos

### Proposicion 7

Para cualesquiera eventos

$$
A,B\in\mathcal F,
$$

vale

$$
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$

#### Demostracion

Descomponemos

$$
A\cup B=A\cup (B\setminus A)
$$

en union disjunta. Entonces

$$
P(A\cup B)=P(A)+P(B\setminus A).
$$

Pero tambien

$$
B=(B\setminus A)\cup (A\cap B)
$$

en union disjunta, asi que

$$
P(B)=P(B\setminus A)+P(A\cap B).
$$

De aqui

$$
P(B\setminus A)=P(B)-P(A\cap B),
$$

y sustituyendo obtenemos la formula.

## Subaditividad

### Proposicion 8

Para cualesquiera eventos

$$
A_1,A_2,\dots\in\mathcal F,
$$

se cumple

$$
P\left(\bigcup_{n=1}^{\infty}A_n\right)
\le
\sum_{n=1}^{\infty}P(A_n).
$$

### Idea de la demostracion

Si los eventos no son disjuntos, se los descompone en una union disjunta:

$$
B_1=A_1,\quad
B_2=A_2\setminus A_1,\quad
B_3=A_3\setminus(A_1\cup A_2),\dots
$$

Entonces

$$
\bigcup_n A_n=\bigcup_n B_n,
$$

con los $B_n$ disjuntos, y cada

$$
P(B_n)\le P(A_n).
$$

## Continuidad de la probabilidad por abajo

### Teorema 9

Si

$$
A_1\subseteq A_2\subseteq \cdots
$$

es una sucesion creciente de eventos y

$$
A=\bigcup_{n=1}^{\infty}A_n,
$$

entonces

$$
P(A_n)\to P(A).
$$

#### Idea de la demostracion

Definimos

$$
B_1=A_1,\quad B_n=A_n\setminus A_{n-1}\ \ (n\ge 2).
$$

Los $B_n$ son disjuntos y

$$
A=\bigcup_{n=1}^{\infty}B_n.
$$

Ademas,

$$
A_n=\bigcup_{k=1}^n B_k.
$$

Aplicando sigma-aditividad:

$$
P(A)=\sum_{k=1}^{\infty}P(B_k),
\qquad
P(A_n)=\sum_{k=1}^n P(B_k),
$$

y el segundo sumatorio converge al primero.

## Continuidad por arriba

### Teorema 10

Si

$$
A_1\supseteq A_2\supseteq \cdots
$$

es decreciente y

$$
A=\bigcap_{n=1}^{\infty}A_n,
$$

con

$$
P(A_1)<\infty,
$$

entonces

$$
P(A_n)\to P(A).
$$

### Comentario

En probabilidad la condicion

$$
P(A_1)<\infty
$$

es automatica porque

$$
P(A_1)\le 1.
$$

## Ejemplo 1: espacio finito equiprobable

Si

$$
\Omega=\{1,2,3,4,5,6\}
$$

y cada punto tiene probabilidad

$$
\frac16,
$$

entonces

$$
\mathcal F=\mathcal P(\Omega)
$$

y

$$
P(A)=\frac{|A|}{6}
$$

satisface todos los axiomas.

Por ejemplo, si

$$
A=\{2,4,6\},
\qquad
B=\{4,5,6\},
$$

entonces

$$
P(A)=\frac12,
\qquad
P(B)=\frac12,
\qquad
P(A\cap B)=\frac13,
$$

y

$$
P(A\cup B)=\frac23.
$$

La formula de inclusion-exclusion da:

$$
\frac12+\frac12-\frac13=\frac23.
$$

## Ejemplo 2: espacio continuo

Si elegimos un punto uniformemente en

$$
[0,1],
$$

un modelo natural es tomar $\Omega=[0,1]$, la sigma-algebra boreliana y definir

$$
P([a,b])=b-a.
$$

Aqui:

- un intervalo tiene probabilidad igual a su longitud;
- un punto individual tiene probabilidad cero;
- sin embargo sigue siendo un resultado posible.

Este ejemplo muestra por que la axiomatica debe funcionar mas alla de espacios finitos.

## Probabilidad como medida

La teoria axiomatica muestra que la probabilidad es una medida finita normalizada. Eso significa que comparte estructura con:

- longitud;
- area;
- volumen;
- masa.

La diferencia es interpretativa: aqui la medida cuantifica incertidumbre, no tamano geometrico.

## Independencia todavia no es un axioma

Un punto importante es que la independencia no aparece entre los axiomas basicos. Es una relacion adicional entre eventos o variables:

$$
P(A\cap B)=P(A)P(B).
$$

No pertenece al nivel fundacional de "que es una probabilidad", sino al nivel estructural de "como interactuan ciertos eventos dentro del modelo".

## Error comun 1: creer que la aditividad vale para cualquier union

La suma directa

$$
P(A\cup B)=P(A)+P(B)
$$

solo vale cuando los eventos son disjuntos. En general hace falta restar la interseccion.

## Error comun 2: pensar que todos los subconjuntos deben ser eventos

En espacios continuos generales eso no es matematicamente viable en toda su amplitud. Por eso se introduce una sigma-algebra.

## Error comun 3: confundir probabilidad uno con verdad logica absoluta

En modelos continuos, un evento de probabilidad uno puede fallar en un conjunto no vacio de probabilidad cero. "Casi seguro" no significa "siempre" en sentido logico.

## Practica guiada

### Ejercicio 1

Demuestra que si

$$
A\subseteq B,
$$

entonces

$$
P(B\setminus A)=P(B)-P(A).
$$

#### Solucion

Se usa la descomposicion disjunta

$$
B=A\cup(B\setminus A),
$$

y luego la aditividad.

### Ejercicio 2

Si

$$
P(A)=0.4,
\qquad
P(B)=0.5,
\qquad
P(A\cap B)=0.2,
$$

calcula

$$
P(A\cup B).
$$

#### Solucion

Por inclusion-exclusion:

$$
P(A\cup B)=0.4+0.5-0.2=0.7.
$$

### Ejercicio 3

Explica por que la familia de eventos debe ser estable bajo complemento y union numerable.

#### Solucion

Porque la teoria debe permitir construir eventos compuestos a partir de otros ya conocidos, y esas operaciones aparecen constantemente en razonamientos probabilisticos y en procesos de limite.

## Cierre

Los axiomas de Kolmogorov convierten la probabilidad en una teoria matematica precisa con tres ingredientes:

- eventos organizados en una sigma-algebra;
- una medida no negativa;
- normalizada y sigma-aditiva.

De esta base salen todas las reglas familiares de la probabilidad elemental y, al mismo tiempo, toda la maquinaria avanzada de la teoria moderna. Esa combinacion de sobriedad y potencia es lo que hace de la axiomatica uno de los puntos de apoyo mas importantes de la materia.
