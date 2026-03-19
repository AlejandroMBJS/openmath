---
title: Principio de induccion matematica
description: Induccion simple, induccion fuerte, recursion y conexion con el buen orden de los naturales.
---

# Principio de induccion matematica

## Motivacion e intuicion

La induccion matematica es el mecanismo fundamental para demostrar afirmaciones indexadas por los naturales. La idea es sencilla: si una propiedad vale al principio y ademas cada caso arrastra al siguiente, entonces vale para todos.

Pero ese esquema no es un truco de calculo. Expresa una propiedad estructural profunda de $\mathbb{N}$: no hay huecos hacia adelante.

## Prerrequisitos

Conviene manejar cuantificadores, funciones definidas recursivamente y lenguaje elemental sobre naturales.

## Enunciados fundamentales

### Principio de induccion simple

Sea $P(n)$ una propiedad definida para $n \in \mathbb{N}$. Supongamos:

1. **caso base**: $P(1)$ es verdadera;
2. **paso inductivo**: para todo $n \ge 1$,

$$
P(n) \Rightarrow P(n+1).
$$

Entonces

$$
P(n)
$$

es verdadera para todo $n \ge 1$.

### Principio de induccion fuerte

Sea $P(n)$ una propiedad sobre $\mathbb{N}$. Si:

1. $P(1)$ es verdadera;
2. para todo $n \ge 1$, de la validez simultanea de

$$
P(1),P(2),\dots,P(n)
$$

se deduce $P(n+1)$,

entonces $P(n)$ vale para todo $n$.

### Principio del buen orden

Todo subconjunto no vacio de $\mathbb{N}$ tiene un minimo.

Este principio es equivalente a la induccion.

## Ejemplos basicos

### Ejemplo 1: suma de los primeros naturales

Se quiere probar que para todo $n \ge 1$,

$$
1+2+\cdots+n = \frac{n(n+1)}{2}.
$$

#### Demostracion por induccion

Para $n=1$, ambos lados valen $1$.

Supongamos cierta la formula para $n$. Entonces

$$
1+2+\cdots+n+(n+1) = \frac{n(n+1)}{2} + (n+1)
$$

y factorizando:

$$
\frac{n(n+1)+2(n+1)}{2} = \frac{(n+1)(n+2)}{2}.
$$

Luego la formula vale para $n+1$.

### Ejemplo 2: suma de una progresion geometrica

Para $r \ne 1$,

$$
1+r+r^2+\cdots+r^n = \frac{r^{n+1}-1}{r-1}.
$$

La demostracion es completamente analoga.

### Ejemplo 3: cota exponencial sobre Fibonacci

Usando induccion fuerte puede demostrarse que la sucesion de Fibonacci satisface

$$
F_n \le 2^n
$$

para todo $n$.

## Proposiciones y teoremas centrales

### Teorema 1: la induccion simple es valida

Si una propiedad satisface caso base y paso inductivo, entonces vale para todos los naturales.

#### Demostracion a partir del buen orden

Sea

$$
S = \{n \in \mathbb{N} : P(n) \text{ es falsa}\}.
$$

Supongamos, por contradiccion, que $S$ no es vacio. Por buen orden, $S$ tiene un minimo $m$.

Como $P(1)$ es verdadera, no puede ser $m=1$. Entonces $m-1 \in \mathbb{N}$ y, por minimalidad de $m$, la propiedad $P(m-1)$ es verdadera. El paso inductivo implica entonces $P(m)$, contradiccion.

Por tanto $S=\varnothing$.

### Proposicion 2: la induccion fuerte se deduce de la simple

La induccion fuerte no es un principio distinto, sino una variante equivalente.

#### Demostracion

Define

$$
Q(n) : \text{"}P(1),P(2),\dots,P(n)\text{ son verdaderas"}.
$$

El caso base para $Q$ es exactamente $P(1)$. Si $Q(n)$ es cierta, entonces por la hipotesis de induccion fuerte se obtiene $P(n+1)$, luego $Q(n+1)$ es cierta. Por induccion simple, $Q(n)$ vale para todo $n$, y en particular $P(n)$.

### Proposicion 3: definicion recursiva

Muchas sucesiones quedan determinadas por:

1. un dato inicial;
2. una regla que construye el siguiente termino a partir de los anteriores.

La induccion es la herramienta natural para demostrar propiedades de estas definiciones.

### Teorema 4: induccion y buen orden son equivalentes

El principio de induccion simple implica el principio del buen orden, y viceversa.

#### Idea de demostracion de la implicacion inversa

Supongamos que la induccion vale y sea $A \subseteq \mathbb{N}$ no vacio. Si $A$ no tuviera minimo, puede considerarse la propiedad

$$
P(n) : \text{"ningun entero entre } 1 \text{ y } n \text{ pertenece a } A\text{"}.
$$

Se verifica por induccion que $P(n)$ vale para todo $n$, contradiciendo que $A$ es no vacio.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: un paso inductivo sin caso base no alcanza

La propiedad

$$
P(n) : n \ge 2
$$

satisface que

$$
P(n) \Rightarrow P(n+1),
$$

pero no vale para todo natural, porque falla en $n=1$.

### Contraejemplo 2: verificar pocos casos no es induccion

Comprobar $P(1)$, $P(2)$ y $P(3)$ no autoriza a concluir $P(n)$ para todo $n$ si no hay paso inductivo.

### Ejemplo fino 3: una induccion puede empezar en otro indice

Si una propiedad solo tiene sentido desde $n=5$, se puede iniciar la induccion en $5$. Lo importante es cubrir el primer indice relevante.

## Errores comunes

1. Omitir el caso base.
2. Usar en el paso inductivo exactamente lo que se quiere probar.
3. Cambiar la proposicion entre el caso base y el paso inductivo.
4. Olvidar especificar desde que indice empieza la propiedad.

## Resumen operativo

- La induccion prueba afirmaciones sobre todos los naturales a partir de un arranque y una regla de propagacion.
- La induccion fuerte permite usar todos los casos anteriores.
- El buen orden y la induccion expresan la misma estructura de $\mathbb{N}$.
- Las recurrencias se analizan de forma natural con esta herramienta.

## Ejercicios

1. Prueba por induccion que

$$
1+3+5+\cdots+(2n-1)=n^2.
$$

2. Prueba por induccion que para todo $n \ge 1$ se cumple

$$
2^n \ge n+1.
$$

3. Usa induccion fuerte para demostrar que todo entero $n \ge 2$ puede factorizarse como producto de primos.
4. Demuestra la formula de la suma geometrica.
5. Explica por que el principio del buen orden falla en $\mathbb{Z}$ considerado completo hacia abajo.
