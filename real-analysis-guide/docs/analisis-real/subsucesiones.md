---
title: Subsucesiones
description: Extraccion de terminos, indices crecientes y relacion entre subsucesiones, convergencia y divergencia.
---

# Subsucesiones

## Motivacion e intuicion

Una subsucesion se obtiene escogiendo infinitos terminos de una sucesion y conservando el orden original. Esta operacion permite aislar comportamientos parciales: oscilaciones, terminos que se acercan a cierto valor o ramas que se disparan.

Las subsucesiones son una herramienta fundamental por dos razones. Primero, permiten estudiar limites parciales incluso cuando la sucesion completa no converge. Segundo, muchos teoremas profundos de analisis, como Bolzano-Weierstrass, se formulan precisamente en terminos de existencia de subsucesiones convergentes.

::: tip Idea central
Una subsucesion no reordena ni inventa terminos: solo extrae infinitos terminos de la sucesion original respetando su orden.
:::

## Prerrequisitos

Para este tema conviene manejar:

- sucesiones reales;
- convergencia de sucesiones;
- desigualdades basicas;
- monotonia y acotacion.

## Definiciones formales

Sea $(a_n)$ una sucesion real.

### Definicion de subsucesion

Una **subsucesion** de $(a_n)$ es una sucesion de la forma

$$
(a_{n_k})_{k \in \mathbb{N}},
$$

donde $(n_k)$ es una sucesion estrictamente creciente de numeros naturales, es decir,

$$
n_1 < n_2 < n_3 < \dots
$$

### Sucesion de indices

La sucesion $(n_k)$ se llama **sucesion de indices** o **extraccion**. Su condicion de crecimiento estricto asegura que:

- no se repite indefinidamente el mismo termino;
- no se cambia el orden original;
- siempre se toman terminos cada vez mas adelante.

### Notacion

Si se quiere tomar, por ejemplo, los terminos pares de $(a_n)$, se usa

$$
n_k = 2k,
$$

y la subsucesion correspondiente es

$$
(a_{2k}).
$$

Si se quieren los terminos con indices cuadrados, se toma

$$
n_k = k^2,
$$

y la subsucesion es

$$
(a_{k^2}).
$$

## Interpretacion en lenguaje natural

Construir una subsucesion es como recorrer la sucesion original y decidir conservar algunos terminos, pero con tres reglas obligatorias:

- hay que elegir infinitos terminos;
- el orden no se puede alterar;
- los indices elegidos deben avanzar sin retroceder.

Por ejemplo, si la sucesion original es

$$
a_1,\ a_2,\ a_3,\ a_4,\ a_5,\dots
$$

podemos extraer

$$
a_2,\ a_5,\ a_9,\ a_{14},\dots
$$

siempre que los indices crezcan estrictamente.

No seria valido tomar

$$
a_3,\ a_1,\ a_7,\dots
$$

porque ahi se rompe el orden.

## Ejemplos basicos

### Ejemplo 1: terminos pares

Sea

$$
a_n = \frac{1}{n}.
$$

La subsucesion de terminos pares es

$$
a_{2k} = \frac{1}{2k}.
$$

Tambien converge a $0$.

### Ejemplo 2: terminos impares

Si

$$
a_n = (-1)^n,
$$

entonces la subsucesion impar es

$$
a_{2k-1} = (-1)^{2k-1} = -1.
$$

Es una sucesion constante que converge a $-1$.

### Ejemplo 3: terminos pares de una alternante

Para la misma sucesion,

$$
a_{2k} = (-1)^{2k} = 1.
$$

Esta subsucesion converge a $1$.

### Ejemplo 4: indices cuadrados

Si

$$
a_n = n,
$$

entonces la subsucesion dada por $n_k = k^2$ es

$$
a_{k^2} = k^2.
$$

Sigue siendo divergente y crece sin cota.

### Ejemplo 5: extraer una rama convergente

Sea

$$
a_n =
\begin{cases}
0, & \text{si } n \text{ es par}, \\
n, & \text{si } n \text{ es impar}.
\end{cases}
$$

La sucesion completa no es acotada, pero la subsucesion de indices pares es constantemente $0$, y por tanto converge a $0$.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: repetir indices no produce una subsucesion

La sucesion de indices

$$
1,1,2,3,\dots
$$

no es estrictamente creciente. Por tanto

$$
a_1,a_1,a_2,a_3,\dots
$$

no es una subsucesion en el sentido formal usado en analisis.

### Contraejemplo 2: reordenar no es extraer

La sucesion

$$
a_3,a_2,a_5,\dots
$$

no es una subsucesion de $(a_n)$ porque los indices no estan ordenados crecientemente.

### Ejemplo fino 3: una sucesion divergente puede tener varias subsucesiones convergentes

La sucesion

$$
a_n = (-1)^n
$$

no converge, pero tiene:

- una subsucesion par que converge a $1$;
- una subsucesion impar que converge a $-1$.

Esto muestra que el comportamiento de las subsucesiones puede revelar la causa de la divergencia.

### Ejemplo fino 4: las subsucesiones de una sucesion convergente no cambian el limite

Si

$$
a_n = \frac{1}{n},
$$

entonces cualquier subsucesion, como

$$
a_{k^2} = \frac{1}{k^2}
$$

o

$$
a_{2k+1} = \frac{1}{2k+1},
$$

sigue convergiendo a $0$.

## Proposiciones y teoremas centrales

### Proposicion 1: los indices de una subsucesion tienden a infinito

Si $(n_k)$ es estrictamente creciente, entonces

$$
n_k \ge k \quad \text{para todo } k \in \mathbb{N}.
$$

En particular,

$$
n_k \to \infty.
$$

#### Demostracion

Probamos por induccion que $n_k \ge k$.

Para $k=1$, se tiene $n_1 \ge 1$ porque $n_1 \in \mathbb{N}$.

Supongamos que $n_k \ge k$. Como $(n_k)$ es estrictamente creciente,

$$
n_{k+1} \ge n_k + 1 \ge k+1.
$$

Esto cierra la induccion. Luego $n_k \ge k$ para todo $k$, y por tanto $n_k \to \infty$.

### Teorema 2: toda subsucesion de una sucesion convergente converge al mismo limite

Si

$$
a_n \to L,
$$

y $(a_{n_k})$ es una subsucesion, entonces

$$
a_{n_k} \to L.
$$

#### Demostracion

Sea $\varepsilon > 0$. Como $a_n \to L$, existe $N \in \mathbb{N}$ tal que

$$
n \ge N \implies |a_n-L| < \varepsilon.
$$

Por la proposicion anterior, $n_k \ge k$ para todo $k$. Entonces, si $k \ge N$, se tiene

$$
n_k \ge k \ge N.
$$

Por tanto,

$$
|a_{n_k} - L| < \varepsilon.
$$

Esto prueba que $a_{n_k} \to L$.

### Corolario 3: dos subsucesiones con limites distintos implican divergencia

Si una sucesion $(a_n)$ tiene dos subsucesiones $(a_{n_k})$ y $(a_{m_k})$ tales que

$$
a_{n_k} \to L, \qquad a_{m_k} \to M, \qquad L \ne M,
$$

entonces $(a_n)$ no converge.

#### Demostracion

Si $(a_n)$ convergiera, por el teorema anterior toda subsucesion deberia converger al mismo limite. Como aqui aparecen dos limites distintos, eso es imposible. Luego $(a_n)$ diverge.

### Proposicion 4: una subsucesion de una sucesion acotada sigue siendo acotada

Si $(a_n)$ es acotada, entonces toda subsucesion $(a_{n_k})$ tambien es acotada.

#### Demostracion

Como $(a_n)$ es acotada, existen $m,M \in \mathbb{R}$ tales que

$$
m \le a_n \le M \quad \text{para todo } n.
$$

En particular, esto vale para los indices $n_k$. Luego

$$
m \le a_{n_k} \le M \quad \text{para todo } k,
$$

y la subsucesion es acotada.

### Proposicion 5: una subsucesion de una sucesion monotona conserva la monotonia

Si $(a_n)$ es creciente, entonces toda subsucesion $(a_{n_k})$ es creciente. Si $(a_n)$ es decreciente, entonces toda subsucesion $(a_{n_k})$ es decreciente.

#### Demostracion

Como $n_k < n_{k+1}$ para todo $k$, y la sucesion original es creciente, se tiene

$$
a_{n_k} \le a_{n_{k+1}}.
$$

Luego la subsucesion es creciente. El caso decreciente se prueba igual, invirtiendo las desigualdades.

## Errores comunes

1. Pensar que cualquier seleccion de terminos es una subsucesion, aunque repita o desordene indices.
2. Creer que una subsucesion puede cambiar el limite de una sucesion convergente.
3. Confundir una subsucesion con una cola de la sucesion original. Toda cola es una subsucesion, pero no toda subsucesion es una cola.
4. Suponer que si una subsucesion converge, entonces la sucesion completa tambien converge.
5. Olvidar que la herramienta de dos subsucesiones con limites distintos sirve para demostrar divergencia.

## Resumen operativo

- Una subsucesion tiene la forma $(a_{n_k})$ con $n_k$ estrictamente creciente.
- Los indices de una subsucesion siempre satisfacen $n_k \ge k$.
- Toda subsucesion de una sucesion convergente converge al mismo limite.
- Si aparecen dos subsucesiones con limites distintos, la sucesion original diverge.
- La acotacion y la monotonia se heredan a las subsucesiones.

## Ejercicios

### Basicos

1. Sea $a_n = n+1$. Escribe los primeros cinco terminos de la subsucesion $(a_{2k})$.
2. Sea $a_n = (-1)^n$. Escribe las subsucesiones $(a_{2k})$ y $(a_{2k-1})$.
3. Decide si la sucesion de indices $1,1,2,3,\dots$ define una subsucesion en el sentido formal.
4. Sea $a_n = 1/n$. Calcula la subsucesion $(a_{k^2})$.
5. Sea

$$
a_n =
\begin{cases}
0, & \text{si } n \text{ es par}, \\
n, & \text{si } n \text{ es impar}.
\end{cases}
$$

Escribe una subsucesion convergente.

### Intermedios

6. Demuestra que si $(n_k)$ es estrictamente creciente, entonces $n_k \ge k$ para todo $k$.
7. Si $a_n \to 3$, demuestra que la subsucesion $(a_{2k})$ tambien converge a $3$.
8. Demuestra que la sucesion $(-1)^n$ tiene una subsucesion que converge a $1$ y otra que converge a $-1$.
9. Da un ejemplo de sucesion divergente que tenga una subsucesion convergente.
10. Si $|a_n| \le 5$ para todo $n$, demuestra que toda subsucesion $(a_{n_k})$ tambien esta acotada.

### De prueba y demostracion

11. Demuestra que toda subsucesion de una sucesion convergente converge al mismo limite.
12. Demuestra que si una sucesion tiene dos subsucesiones convergentes a limites distintos, entonces diverge.
13. Demuestra que si $(a_n)$ es creciente, entonces toda subsucesion $(a_{n_k})$ es creciente.
14. Sea $a_n = 1/n$ y sea $(a_{n_k})$ una subsucesion cualquiera. Demuestra que $a_{n_k} \to 0$.
15. Considera

$$
a_n = (-1)^n + \frac{1}{n}.
$$

Demuestra que $(a_n)$ diverge encontrando dos subsucesiones con limites distintos.

## Soluciones

### 1

Como

$$
a_n = n+1,
$$

se tiene

$$
a_{2k} = 2k+1.
$$

Los primeros cinco terminos son

$$
3,\ 5,\ 7,\ 9,\ 11.
$$

### 2

Para los indices pares,

$$
a_{2k} = (-1)^{2k} = 1.
$$

Para los indices impares,

$$
a_{2k-1} = (-1)^{2k-1} = -1.
$$

Asi, una subsucesion es constante igual a $1$ y la otra es constante igual a $-1$.

### 3

No. La condicion formal exige que la sucesion de indices sea estrictamente creciente. Como aqui aparece

$$
1 = 1,
$$

no se cumple crecimiento estricto. Por tanto no define una subsucesion.

### 4

Se tiene

$$
a_{k^2} = \frac{1}{k^2}.
$$

Esa es la subsucesion pedida.

### 5

Tomando los indices pares $n_k = 2k$, se obtiene

$$
a_{2k} = 0 \quad \text{para todo } k.
$$

Es una subsucesion constante, y por tanto converge a $0$.

### 6

La prueba es por induccion. Para $k=1$, se tiene $n_1 \ge 1$. Supongamos que $n_k \ge k$. Como la sucesion de indices es estrictamente creciente,

$$
n_{k+1} \ge n_k + 1 \ge k+1.
$$

Luego $n_k \ge k$ para todo $k$.

### 7

La sucesion $(a_{2k})$ es una subsucesion de $(a_n)$. Como $a_n \to 3$, el teorema de herencia del limite dice que

$$
a_{2k} \to 3.
$$

### 8

La subsucesion de indices pares satisface

$$
a_{2k} = (-1)^{2k} = 1,
$$

asi que converge a $1$. La subsucesion de indices impares satisface

$$
a_{2k-1} = (-1)^{2k-1} = -1,
$$

asi que converge a $-1$.

### 9

Un ejemplo es

$$
a_n = (-1)^n.
$$

La sucesion completa diverge, pero la subsucesion par $a_{2k}=1$ converge a $1$.

### 10

Si $|a_n| \le 5$ para todo $n$, entonces en particular

$$
|a_{n_k}| \le 5 \quad \text{para todo } k,
$$

porque cada termino de la subsucesion es un termino de la sucesion original. Luego toda subsucesion esta acotada.

### 11

Sea $\varepsilon > 0$. Como $a_n \to L$, existe $N$ tal que si $n \ge N$, entonces

$$
|a_n-L| < \varepsilon.
$$

Si $(a_{n_k})$ es una subsucesion, entonces $n_k \ge k$ para todo $k$. Por tanto, si $k \ge N$, se tiene $n_k \ge N$, y entonces

$$
|a_{n_k}-L| < \varepsilon.
$$

Luego $a_{n_k} \to L$.

### 12

Supongamos, por contradiccion, que $(a_n)$ converge a algun limite $L$. Entonces, por el ejercicio anterior, toda subsucesion deberia converger a $L$. Pero por hipotesis existen dos subsucesiones que convergen a limites distintos. Esto es imposible. Luego $(a_n)$ diverge.

### 13

Como $n_k < n_{k+1}$ y la sucesion original es creciente, se obtiene

$$
a_{n_k} \le a_{n_{k+1}}
$$

para todo $k$. Por tanto la subsucesion es creciente.

### 14

Sea $\varepsilon > 0$. Como $n_k \ge k$, se tiene

$$
\frac{1}{n_k} \le \frac{1}{k}.
$$

Sabemos que $1/k \to 0$. Por el teorema del sandwich, o directamente porque dado $\varepsilon > 0$ existe $K$ con $1/K < \varepsilon$, se concluye que

$$
\frac{1}{n_k} \to 0.
$$

Es decir,

$$
a_{n_k} \to 0.
$$

### 15

Tomemos primero la subsucesion par:

$$
a_{2k} = (-1)^{2k} + \frac{1}{2k} = 1 + \frac{1}{2k} \to 1.
$$

Ahora la subsucesion impar:

$$
a_{2k-1} = (-1)^{2k-1} + \frac{1}{2k-1} = -1 + \frac{1}{2k-1} \to -1.
$$

Como aparecen dos subsucesiones con limites distintos, la sucesion original diverge.

## Cierre

Las subsucesiones permiten mirar una sucesion con resolucion mas fina. Cuando una sucesion converge, sus subsucesiones confirman ese limite. Cuando diverge, las subsucesiones suelen mostrar por donde se rompe la convergencia. Esta herramienta sera decisiva en los temas siguientes, especialmente en sucesiones de Cauchy y Bolzano-Weierstrass.
