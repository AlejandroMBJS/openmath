---
title: Sucesiones
description: Definicion formal de sucesion, modos de descripcion, clasificaciones basicas y ejemplos fundamentales.
---

# Sucesiones

## Motivacion e intuicion

Una sucesion es una lista ordenada de numeros en la que importa el lugar que ocupa cada termino. En analisis real, las sucesiones sirven para estudiar aproximacion, estabilidad, acumulacion, convergencia y comportamiento asintotico.

La idea intuitiva es simple: en lugar de mirar todos los numeros reales a la vez, miramos una cadena indexada por los naturales:

$$
a_1,\ a_2,\ a_3,\ \dots
$$

Cada termino depende de su posicion. Por eso no basta conocer el conjunto de valores que aparecen; tambien importa el orden en que aparecen y cuantas veces aparecen.

## Prerrequisitos

Para este tema conviene manejar:

- conjuntos y funciones;
- numeros naturales y reales;
- desigualdades elementales;
- notacion algebraica basica.

## Definiciones formales

### Definicion de sucesion

Una **sucesion real** es una funcion

$$
a : \mathbb{N} \to \mathbb{R}.
$$

Al valor de $a$ en $n$ se le denota por $a_n$. Por tanto una sucesion se escribe como

$$
(a_n)_{n \in \mathbb{N}} \quad \text{o simplemente} \quad (a_n).
$$

### Termino general

La expresion que permite calcular $a_n$ en funcion de $n$ se llama **termino general** de la sucesion.

Ejemplo:

$$
a_n = \frac{1}{n}
$$

define la sucesion

$$
1,\ \frac{1}{2},\ \frac{1}{3},\ \frac{1}{4},\dots
$$

### Igualdad de sucesiones

Dos sucesiones $(a_n)$ y $(b_n)$ son iguales si

$$
a_n = b_n \quad \text{para todo } n \in \mathbb{N}.
$$

No basta que tomen los mismos valores como conjunto; deben coincidir termino a termino.

### Sucesion constante

Una sucesion es **constante** si existe $c \in \mathbb{R}$ tal que

$$
a_n = c \quad \text{para todo } n \in \mathbb{N}.
$$

### Sucesion creciente y decreciente

Una sucesion $(a_n)$ es:

- **creciente** si $a_n \le a_{n+1}$ para todo $n$;
- **estrictamente creciente** si $a_n < a_{n+1}$ para todo $n$;
- **decreciente** si $a_{n+1} \le a_n$ para todo $n$;
- **estrictamente decreciente** si $a_{n+1} < a_n$ para todo $n$.

Una sucesion creciente o decreciente se llama **monotona**.

### Sucesion periodica

Una sucesion $(a_n)$ es **periodica** si existe un entero $p \ge 1$ tal que

$$
a_{n+p} = a_n \quad \text{para todo } n \in \mathbb{N}.
$$

El menor entero positivo con esa propiedad, si existe, se llama **periodo**.

### Sucesion definida por recurrencia

Una sucesion tambien puede quedar definida dando:

1. uno o varios terminos iniciales;
2. una regla que obtiene nuevos terminos a partir de los anteriores.

Por ejemplo,

$$
a_1 = 1, \qquad a_{n+1} = a_n + 2
$$

define la sucesion de impares positivos

$$
1,\ 3,\ 5,\ 7,\dots
$$

## Interpretacion en lenguaje natural

Pensar una sucesion como funcion $a : \mathbb{N} \to \mathbb{R}$ evita confusiones.

- El indice $n$ dice en que posicion estamos.
- El valor $a_n$ es el numero que aparece en esa posicion.
- Dos sucesiones pueden tener la misma imagen como conjunto y sin embargo ser distintas.

Por ejemplo,

$$
a_n = (-1)^n, \qquad b_n = (-1)^{n+1}
$$

toman exactamente los mismos valores, a saber $\{-1,1\}$, pero no son la misma sucesion porque no coinciden en la primera posicion.

## Modos usuales de describir una sucesion

### Forma explicita

Se da directamente $a_n$ en funcion de $n$.

Ejemplo:

$$
a_n = n^2 + 1.
$$

### Forma recurrente

Se da un termino inicial y una regla inductiva.

Ejemplo:

$$
a_1 = 2, \qquad a_{n+1} = \frac{a_n}{2}.
$$

### Descripcion verbal o por patron

A veces se reconoce un patron y luego se formaliza.

Ejemplo:

$$
2,\ 4,\ 6,\ 8,\dots
$$

corresponde a

$$
a_n = 2n.
$$

## Ejemplos basicos

### Ejemplo 1: sucesion aritmetica

$$
a_n = 3n - 1.
$$

Sus primeros terminos son

$$
2,\ 5,\ 8,\ 11,\dots
$$

Es estrictamente creciente.

### Ejemplo 2: sucesion geometrica

$$
a_n = 2^n.
$$

Sus primeros terminos son

$$
2,\ 4,\ 8,\ 16,\dots
$$

Es estrictamente creciente.

### Ejemplo 3: sucesion alternante

$$
a_n = (-1)^n.
$$

Sus primeros terminos son

$$
-1,\ 1,\ -1,\ 1,\dots
$$

No es monotona y es periodica de periodo $2$.

### Ejemplo 4: sucesion constante

$$
a_n = 5.
$$

Todos sus terminos son iguales a $5$. Es simultaneamente creciente y decreciente.

### Ejemplo 5: sucesion definida por recurrencia

$$
a_1 = 1, \qquad a_{n+1} = a_n + 3.
$$

Sus primeros terminos son

$$
1,\ 4,\ 7,\ 10,\dots
$$

De hecho $a_n = 3n - 2$.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: misma imagen, distinta sucesion

Las sucesiones

$$
a_n = (-1)^n, \qquad b_n = (-1)^{n+1}
$$

no son iguales aunque ambas solo tomen los valores $-1$ y $1$.

### Contraejemplo 2: no toda sucesion no decreciente es estrictamente creciente

La sucesion constante $a_n = 4$ satisface

$$
a_n \le a_{n+1}
$$

para todo $n$, asi que es creciente. Sin embargo no es estrictamente creciente porque nunca ocurre $a_n < a_{n+1}$.

### Contraejemplo 3: una regla verbal puede ser ambigua si no se formaliza

La sucesion

$$
1,\ 2,\ 4,\ 8,\dots
$$

puede parecer obvia, pero sin una regla formal no queda fijado si comienza en $n=0$ o en $n=1$, ni cual es el termino general exacto. En analisis se exige una definicion precisa.

### Contraejemplo 4: no toda sucesion definida recursivamente es monotona

La sucesion

$$
a_1 = 1, \qquad a_{n+1} = -a_n
$$

genera

$$
1,\ -1,\ 1,\ -1,\dots
$$

y no es monotona.

## Proposiciones y teoremas centrales

### Proposicion 1: igualdad de sucesiones

Dos sucesiones $(a_n)$ y $(b_n)$ son iguales si y solo si

$$
a_n = b_n \quad \text{para todo } n \in \mathbb{N}.
$$

#### Demostracion

Esta proposicion no es mas que la traduccion de la igualdad de funciones. Como una sucesion es una funcion cuyo dominio es $\mathbb{N}$, dos sucesiones son iguales exactamente cuando tienen el mismo valor en cada natural.

### Proposicion 2: una sucesion constante es monotona

Toda sucesion constante es creciente y decreciente.

#### Demostracion

Si $a_n = c$ para todo $n$, entonces

$$
a_n = c = a_{n+1}
$$

para todo $n$. En particular,

$$
a_n \le a_{n+1} \qquad \text{y} \qquad a_{n+1} \le a_n.
$$

Luego la sucesion es creciente y decreciente.

### Proposicion 3: una sucesion creciente no tiene por que ser estrictamente creciente

#### Demostracion

Basta considerar la sucesion constante $a_n = 0$. Es creciente porque $a_n \le a_{n+1}$ para todo $n$, pero no es estrictamente creciente porque nunca se tiene $a_n < a_{n+1}$.

### Proposicion 4: toda sucesion periodica de periodo $p$ queda determinada por sus primeros $p$ terminos

#### Demostracion

Supongamos que $(a_n)$ tiene periodo $p$, es decir,

$$
a_{n+p} = a_n \quad \text{para todo } n.
$$

Entonces cualquier termino $a_n$ repite el valor de uno de los primeros $p$ terminos, porque al restar repetidamente el periodo llegamos a un indice entre $1$ y $p$. Por tanto conocer

$$
a_1,\ a_2,\dots,a_p
$$

basta para reconstruir toda la sucesion.

## Errores comunes

1. Pensar que una sucesion es solo un conjunto de numeros. No: importa el orden y la posicion.
2. Confundir el indice $n$ con el valor $a_n$.
3. Creer que conocer unos cuantos terminos iniciales determina siempre la sucesion. Eso solo ocurre si se da una regla precisa.
4. Confundir sucesion creciente con estrictamente creciente.
5. Escribir una regla recursiva sin terminos iniciales suficientes.

## Resumen operativo

- Una sucesion real es una funcion $a : \mathbb{N} \to \mathbb{R}$.
- El termino $a_n$ depende del indice $n$.
- Puede definirse de forma explicita, recurrente o mediante un patron formalizado.
- Las sucesiones pueden ser constantes, monotonas, periodicas o alternantes.
- Dos sucesiones son iguales solo si coinciden termino a termino.

## Ejercicios

### Basicos

1. Escribe los primeros cinco terminos de la sucesion $a_n = 2n + 1$.
2. Escribe los primeros cinco terminos de la sucesion $a_n = \frac{1}{n+1}$.
3. Decide si la sucesion $a_n = 7$ es creciente, decreciente, estrictamente creciente o estrictamente decreciente.
4. Decide si la sucesion $a_n = (-1)^n$ es periodica. En caso afirmativo, indica un periodo.
5. Encuentra una formula explicita para la sucesion $3, 6, 9, 12,\dots$.

### Intermedios

6. Da una definicion recursiva para la sucesion $2, 5, 8, 11,\dots$.
7. Determina si las sucesiones $a_n = n^2$ y $b_n = n(n-1)+n$ son iguales.
8. Prueba que la sucesion $a_n = 5 - n$ es estrictamente decreciente.
9. Decide si la sucesion $a_n = 1 + (-1)^n$ es monotona.
10. Halla los primeros seis terminos de la sucesion definida por $a_1 = 2$ y $a_{n+1} = 2a_n$.

### De prueba y demostracion

11. Demuestra que si $a_n = c$ para todo $n$, entonces $(a_n)$ es monotona.
12. Demuestra que dos sucesiones iguales tienen los mismos terminos iniciales en cualquier posicion fijada.
13. Demuestra que la sucesion $a_n = n$ no es periodica.
14. Demuestra que si $(a_n)$ tiene periodo $p$, entonces tambien tiene periodo $2p$.
15. Construye dos sucesiones distintas que tengan la misma imagen como conjunto y justifica por que no son iguales.

## Soluciones

### 1

Sustituyendo $n = 1,2,3,4,5$ en $a_n = 2n + 1$ se obtiene

$$
3,\ 5,\ 7,\ 9,\ 11.
$$

### 2

Se obtiene

$$
\frac{1}{2},\ \frac{1}{3},\ \frac{1}{4},\ \frac{1}{5},\ \frac{1}{6}.
$$

### 3

Si $a_n = 7$, entonces $a_n = a_{n+1}$ para todo $n$. Por tanto es creciente y decreciente, pero no es estrictamente creciente ni estrictamente decreciente.

### 4

Si $a_n = (-1)^n$, entonces

$$
a_{n+2} = (-1)^{n+2} = (-1)^n = a_n.
$$

Luego la sucesion es periodica y $2$ es un periodo.

### 5

Una formula explicita es

$$
a_n = 3n.
$$

### 6

Puede definirse por

$$
a_1 = 2, \qquad a_{n+1} = a_n + 3.
$$

### 7

Se tiene

$$
b_n = n(n-1) + n = n^2 - n + n = n^2 = a_n.
$$

Por tanto las sucesiones son iguales.

### 8

Si $a_n = 5 - n$, entonces

$$
a_{n+1} = 5 - (n+1) = 4 - n.
$$

Luego

$$
a_{n+1} - a_n = (4-n) - (5-n) = -1 < 0.
$$

Asi $a_{n+1} < a_n$ para todo $n$, y la sucesion es estrictamente decreciente.

### 9

Los terminos son

$$
0,\ 2,\ 0,\ 2,\dots
$$

Por tanto la sucesion oscila y no es monotona.

### 10

Partiendo de $a_1 = 2$ y duplicando cada vez:

$$
2,\ 4,\ 8,\ 16,\ 32,\ 64.
$$

### 11

Si $a_n = c$ para todo $n$, entonces $a_n = a_{n+1}$ para todo $n$. En particular,

$$
a_n \le a_{n+1} \qquad \text{y} \qquad a_{n+1} \le a_n.
$$

Luego $(a_n)$ es monotona.

### 12

Si $(a_n) = (b_n)$, por definicion de igualdad de sucesiones se cumple

$$
a_n = b_n \quad \text{para todo } n \in \mathbb{N}.
$$

En particular, para cualquier posicion fijada $k$ se tiene $a_k = b_k$. Como $k$ era arbitrario, coinciden en todos los terminos iniciales que se desee comparar.

### 13

Supongamos que $(a_n)$ con $a_n = n$ fuera periodica con periodo $p \ge 1$. Entonces

$$
a_{n+p} = a_n
$$

para todo $n$. Pero

$$
a_{n+p} = n+p \neq n = a_n,
$$

lo cual es imposible. Luego $(n)$ no es periodica.

### 14

Si $(a_n)$ tiene periodo $p$, entonces

$$
a_{n+p} = a_n
$$

para todo $n$. Aplicando la misma propiedad al indice $n+p$:

$$
a_{n+2p} = a_{n+p} = a_n.
$$

Luego $2p$ tambien es un periodo.

### 15

Un ejemplo es

$$
a_n = (-1)^n, \qquad b_n = (-1)^{n+1}.
$$

Ambas tienen la misma imagen como conjunto, a saber $\{-1,1\}$, pero

$$
a_1 = -1 \neq 1 = b_1.
$$

Por tanto no son iguales como sucesiones.

## Cierre

La nocion de sucesion parece elemental, pero de aqui en adelante sera el lenguaje principal para hablar de limite, convergencia, Cauchy, compacidad y series. Entender con precision que es una sucesion y como se clasifica evita errores conceptuales posteriores.
