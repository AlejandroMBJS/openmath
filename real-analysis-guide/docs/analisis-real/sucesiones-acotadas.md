---
title: Sucesiones acotadas
description: Cotas superiores e inferiores, criterio con valor absoluto y convergencia monotona de sucesiones acotadas.
---

# Sucesiones acotadas

## Motivacion e intuicion

Una sucesion acotada es una sucesion cuyos terminos quedan atrapados dentro de una region fija de la recta real. No importa cuan lejos avance el indice: los valores no escapan mas alla de ciertos limites.

Esta idea es importante por dos razones. Primero, muchas sucesiones que convergen son necesariamente acotadas. Segundo, la combinacion "monotonia + acotacion" produce convergencia, lo cual conecta directamente este tema con el principio del supremo.

::: tip Idea central
Acotar una sucesion significa encerrar todos sus terminos dentro de un intervalo fijo.
:::

## Prerrequisitos

Conviene manejar:

- desigualdades y valor absoluto;
- sucesiones reales;
- cotas, supremo e infimo;
- convergencia de sucesiones.

## Definiciones formales

Sea $(a_n)$ una sucesion real.

### Cota superior

Un numero real $M$ es una **cota superior** de $(a_n)$ si

$$
a_n \le M \quad \text{para todo } n \in \mathbb{N}.
$$

En ese caso se dice que la sucesion esta **acotada superiormente**.

### Cota inferior

Un numero real $m$ es una **cota inferior** de $(a_n)$ si

$$
m \le a_n \quad \text{para todo } n \in \mathbb{N}.
$$

En ese caso se dice que la sucesion esta **acotada inferiormente**.

### Sucesion acotada

La sucesion $(a_n)$ es **acotada** si existen $m,M \in \mathbb{R}$ tales que

$$
m \le a_n \le M \quad \text{para todo } n \in \mathbb{N}.
$$

Equivalente: la imagen de la sucesion esta contenida en un intervalo cerrado y acotado.

### Sucesion eventualmente acotada

Se dice que $(a_n)$ es **eventualmente acotada** si existen $m,M \in \mathbb{R}$ y un indice $N \in \mathbb{N}$ tales que

$$
m \le a_n \le M \quad \text{para todo } n \ge N.
$$

## Interpretacion en lenguaje natural

Decir que una sucesion es acotada no significa que sea pequena ni que converja. Solo significa que existe una barrera por abajo y otra por arriba que ningun termino cruza.

Geometricamente, todos los puntos

$$
a_1,a_2,a_3,\dots
$$

quedan dentro de una banda fija de la recta real, por ejemplo dentro de $[-5,8]$ o de $[0,1]$.

La acotacion no describe como estan ordenados los terminos ni si se aproximan a un valor. Solo controla el tamano del conjunto de valores que aparecen.

## Ejemplos basicos

### Ejemplo 1: sucesion constante

Si $a_n = 4$ para todo $n$, entonces

$$
4 \le a_n \le 4 \quad \text{para todo } n.
$$

Luego la sucesion es acotada.

### Ejemplo 2: la sucesion $1/n$

Para todo $n \in \mathbb{N}$ se tiene

$$
0 < \frac{1}{n} \le 1.
$$

Por tanto $(1/n)$ es acotada.

### Ejemplo 3: sucesion alternante

Si

$$
a_n = (-1)^n,
$$

entonces

$$
-1 \le a_n \le 1 \quad \text{para todo } n.
$$

Asi, la sucesion es acotada.

### Ejemplo 4: sucesion no acotada superiormente

La sucesion

$$
a_n = n
$$

no esta acotada superiormente. Dado cualquier $M \in \mathbb{R}$, existe $n \in \mathbb{N}$ con $n > M$.

### Ejemplo 5: sucesion no acotada inferiormente

La sucesion

$$
a_n = -n
$$

no esta acotada inferiormente. Dado cualquier $m \in \mathbb{R}$, existe $n \in \mathbb{N}$ con $-n < m$.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: acotada no implica convergente

La sucesion

$$
a_n = (-1)^n
$$

esta acotada, pero no converge en $\mathbb{R}$.

### Contraejemplo 2: estar acotada solo por un lado no basta

La sucesion

$$
a_n = n
$$

esta acotada inferiormente por $1$, pero no es acotada.

De manera analoga, $a_n=-n$ esta acotada superiormente por $0$, pero tampoco es acotada.

### Ejemplo fino 3: una sucesion no acotada puede tener una subsucesion convergente

Sea

$$
a_n =
\begin{cases}
0, & \text{si } n \text{ es par}, \\
n, & \text{si } n \text{ es impar}.
\end{cases}
$$

La sucesion total no es acotada porque los terminos impares crecen sin control. Sin embargo, la subsucesion de indices pares vale siempre $0$, y por tanto converge.

### Ejemplo fino 4: eventual acotacion

Sea

$$
a_1 = 1000, \qquad a_n = \frac{1}{n} \text{ para } n \ge 2.
$$

Desde $n=2$ en adelante, todos los terminos estan entre $0$ y $1/2$. Aunque el primer termino es grande, la sucesion completa sigue siendo acotada porque un numero finito de terminos iniciales no destruye la acotacion.

## Proposiciones y teoremas centrales

### Proposicion 1: caracterizacion con valor absoluto

Una sucesion $(a_n)$ es acotada si y solo si existe $K > 0$ tal que

$$
|a_n| \le K \quad \text{para todo } n \in \mathbb{N}.
$$

#### Demostracion

Supongamos primero que $(a_n)$ es acotada. Entonces existen $m,M \in \mathbb{R}$ tales que

$$
m \le a_n \le M \quad \text{para todo } n.
$$

Si tomamos

$$
K = \max\{|m|,|M|\},
$$

entonces se cumple $|a_n| \le K$ para todo $n$.

Reciprocamente, si existe $K > 0$ tal que

$$
|a_n| \le K \quad \text{para todo } n,
$$

entonces

$$
-K \le a_n \le K \quad \text{para todo } n.
$$

Por tanto la sucesion es acotada.

### Proposicion 2: toda sucesion eventualmente acotada es acotada

Si existe $N \in \mathbb{N}$ tal que la cola $(a_n)_{n \ge N}$ es acotada, entonces toda la sucesion es acotada.

#### Demostracion

Supongamos que existen $m,M \in \mathbb{R}$ tales que

$$
m \le a_n \le M \quad \text{para todo } n \ge N.
$$

Los terminos iniciales

$$
a_1,\dots,a_{N-1}
$$

forman un conjunto finito. Por tanto tienen minimo y maximo. Definamos

$$
m' = \min\{a_1,\dots,a_{N-1},m\}, \qquad M' = \max\{a_1,\dots,a_{N-1},M\}.
$$

Entonces

$$
m' \le a_n \le M' \quad \text{para todo } n.
$$

Luego $(a_n)$ es acotada.

### Teorema 3: toda sucesion convergente es acotada

Si $a_n \to L$, entonces $(a_n)$ es acotada.

#### Demostracion

Tomemos $\varepsilon = 1$. Como $a_n \to L$, existe $N \in \mathbb{N}$ tal que si $n \ge N$, entonces

$$
|a_n - L| < 1.
$$

Por la desigualdad triangular,

$$
|a_n| \le |a_n-L| + |L| < 1 + |L|
$$

para todo $n \ge N$.

Asi, la cola $(a_n)_{n \ge N}$ esta acotada. Por la proposicion anterior, toda la sucesion es acotada.

### Teorema 4: convergencia monotona creciente

Si $(a_n)$ es creciente y esta acotada superiormente, entonces converge. Mas precisamente, si

$$
A = \{a_n : n \in \mathbb{N}\},
$$

entonces

$$
\lim_{n \to \infty} a_n = \sup A.
$$

#### Demostracion

Como $(a_n)$ esta acotada superiormente y $A$ no es vacio, existe

$$
s = \sup A.
$$

Queremos probar que $a_n \to s$.

Sea $\varepsilon > 0$. Como $s-\varepsilon$ es estrictamente menor que el supremo, no puede ser cota superior de $A$. Por tanto existe algun indice $N$ tal que

$$
a_N > s-\varepsilon.
$$

Como la sucesion es creciente, si $n \ge N$ entonces

$$
a_n \ge a_N > s-\varepsilon.
$$

Ademas, por ser $s$ cota superior de $A$, se tiene

$$
a_n \le s \quad \text{para todo } n.
$$

Luego, para $n \ge N$,

$$
s-\varepsilon < a_n \le s.
$$

Esto implica

$$
|a_n-s| < \varepsilon.
$$

Asi, $a_n \to s$.

### Teorema 5: convergencia monotona decreciente

Si $(a_n)$ es decreciente y esta acotada inferiormente, entonces converge. En ese caso,

$$
\lim_{n \to \infty} a_n = \inf A,
$$

donde

$$
A = \{a_n : n \in \mathbb{N}\}.
$$

#### Demostracion

Sea

$$
t = \inf A.
$$

Fijemos $\varepsilon > 0$. Como $t+\varepsilon$ es mayor que el infimo, no puede ser cota inferior de $A$. Por tanto existe $N$ tal que

$$
a_N < t+\varepsilon.
$$

Como la sucesion es decreciente, para todo $n \ge N$ se cumple

$$
a_n \le a_N < t+\varepsilon.
$$

Ademas, como $t$ es cota inferior de $A$,

$$
t \le a_n \quad \text{para todo } n.
$$

Entonces, para $n \ge N$,

$$
t \le a_n < t+\varepsilon,
$$

y por tanto

$$
|a_n-t| < \varepsilon.
$$

Concluimos que $a_n \to t$.

## Errores comunes

1. Confundir acotada con convergente.
2. Pensar que basta una sola cota, superior o inferior, para hablar de sucesion acotada.
3. Olvidar que un numero finito de terminos iniciales no cambia la acotacion eventual.
4. Creer que si una sucesion no es monotona entonces no puede ser acotada.
5. Aplicar el teorema de convergencia monotona sin verificar la acotacion correspondiente.

## Resumen operativo

- Una sucesion es acotada si todos sus terminos caben dentro de un intervalo fijo.
- Es equivalente pedir que exista $K > 0$ con $|a_n| \le K$ para todo $n$.
- Toda sucesion convergente es acotada.
- Una sucesion creciente y acotada superiormente converge a su supremo.
- Una sucesion decreciente y acotada inferiormente converge a su infimo.

## Ejercicios

### Basicos

1. Decide si la sucesion $a_n = 3$ es acotada y exhibe cotas.
2. Prueba que la sucesion $a_n = 1/n$ es acotada.
3. Decide si la sucesion $a_n = n$ esta acotada superiormente, inferiormente o ninguna de las dos.
4. Decide si la sucesion $a_n = -n$ esta acotada superiormente, inferiormente o ninguna de las dos.
5. Decide si la sucesion $a_n = (-1)^n$ es acotada y da un intervalo que contenga todos sus terminos.

### Intermedios

6. Prueba usando valor absoluto que la sucesion

$$
a_n = \frac{2n+1}{n+1}
$$

es acotada.

7. Demuestra que

$$
a_n = \frac{n}{n+1}
$$

esta acotada entre $0$ y $1$.

8. Construye una sucesion no acotada que tenga una subsucesion convergente.
9. Supongamos que $|a_n| \le 3$ para todo $n$. Demuestra que $(a_n)$ es acotada.
10. Sea

$$
a_1 = 100, \qquad a_n = \frac{1}{n} \text{ para } n \ge 2.
$$

Demuestra que $(a_n)$ es acotada.

### De prueba y demostracion

11. Demuestra que toda sucesion eventualmente acotada es acotada.
12. Demuestra que si $(a_n)$ es creciente y acotada superiormente, entonces converge al supremo de su imagen.
13. Demuestra que si $(a_n)$ es decreciente y acotada inferiormente, entonces converge al infimo de su imagen.
14. Da un ejemplo de sucesion acotada y divergente, y justifica ambas afirmaciones.
15. Demuestra que toda sucesion convergente es acotada.

## Soluciones

### 1

Si $a_n=3$ para todo $n$, entonces

$$
3 \le a_n \le 3 \quad \text{para todo } n.
$$

Luego la sucesion es acotada. Por ejemplo, $3$ es a la vez cota superior e inferior.

### 2

Para todo $n \in \mathbb{N}$ se cumple

$$
0 < \frac{1}{n} \le 1.
$$

Entonces $0$ es cota inferior y $1$ es cota superior. Por tanto $(1/n)$ es acotada.

### 3

La sucesion $a_n=n$ satisface

$$
a_n \ge 1 \quad \text{para todo } n,
$$

asi que esta acotada inferiormente. No esta acotada superiormente, porque dado cualquier $M \in \mathbb{R}$ existe $n \in \mathbb{N}$ con $n>M$.

### 4

La sucesion $a_n=-n$ satisface

$$
a_n \le -1 \quad \text{para todo } n,
$$

asi que esta acotada superiormente. No esta acotada inferiormente, porque dado cualquier $m \in \mathbb{R}$ existe $n$ con $-n<m$.

### 5

Como $(-1)^n$ solo toma los valores $-1$ y $1$, se cumple

$$
-1 \le (-1)^n \le 1 \quad \text{para todo } n.
$$

Luego es acotada. Un intervalo que contiene todos sus terminos es $[-1,1]$.

### 6

Observamos que

$$
\frac{2n+1}{n+1} = 2 - \frac{1}{n+1}.
$$

Entonces

$$
1 < 2 - \frac{1}{n+1} < 2
$$

para todo $n$. En particular,

$$
\left| \frac{2n+1}{n+1} \right| < 2.
$$

Por la caracterizacion con valor absoluto, la sucesion es acotada.

### 7

Como $n>0$ y $n+1>n$, se tiene

$$
0 < \frac{n}{n+1} < 1
$$

para todo $n$. Luego la sucesion esta acotada entre $0$ y $1$.

### 8

Un ejemplo es

$$
a_n =
\begin{cases}
0, & \text{si } n \text{ es par}, \\
n, & \text{si } n \text{ es impar}.
\end{cases}
$$

La sucesion no es acotada porque los terminos impares valen $1,3,5,\dots$ y crecen sin limite. Sin embargo, la subsucesion de indices pares vale siempre $0$, asi que converge a $0$.

### 9

Si $|a_n| \le 3$ para todo $n$, entonces

$$
-3 \le a_n \le 3 \quad \text{para todo } n.
$$

Por tanto $(a_n)$ es acotada.

### 10

Para $n \ge 2$ se tiene

$$
0 < a_n = \frac{1}{n} \le \frac{1}{2}.
$$

Ademas,

$$
a_1 = 100.
$$

Por tanto todos los terminos quedan dentro del intervalo

$$
[0,100].
$$

Luego la sucesion es acotada.

### 11

Supongamos que existen $m,M \in \mathbb{R}$ y $N \in \mathbb{N}$ tales que

$$
m \le a_n \le M \quad \text{para todo } n \ge N.
$$

Los terminos iniciales $a_1,\dots,a_{N-1}$ forman un conjunto finito, asi que tienen minimo y maximo. Si definimos

$$
m' = \min\{a_1,\dots,a_{N-1},m\}, \qquad M' = \max\{a_1,\dots,a_{N-1},M\},
$$

entonces

$$
m' \le a_n \le M' \quad \text{para todo } n.
$$

Luego la sucesion es acotada.

### 12

Sea

$$
A = \{a_n : n \in \mathbb{N}\}.
$$

Como $(a_n)$ es creciente y esta acotada superiormente, el conjunto $A$ no es vacio y tiene supremo. Sea

$$
s = \sup A.
$$

Fijemos $\varepsilon > 0$. El numero $s-\varepsilon$ no puede ser cota superior de $A$, porque es menor que el supremo. Entonces existe $N$ tal que

$$
a_N > s-\varepsilon.
$$

Como la sucesion es creciente, para todo $n \ge N$ se tiene

$$
a_n \ge a_N > s-\varepsilon.
$$

Ademas, como $s$ es cota superior,

$$
a_n \le s \quad \text{para todo } n.
$$

Por tanto, para todo $n \ge N$,

$$
s-\varepsilon < a_n \le s,
$$

y de aqui

$$
|a_n-s| < \varepsilon.
$$

Luego $a_n \to s$.

### 13

Sea

$$
t = \inf\{a_n : n \in \mathbb{N}\}.
$$

Como $(a_n)$ es decreciente y esta acotada inferiormente, ese infimo existe. Dado $\varepsilon > 0$, el numero $t+\varepsilon$ no puede ser cota inferior de la imagen, porque es mayor que el infimo. Entonces existe $N$ tal que

$$
a_N < t+\varepsilon.
$$

Como la sucesion es decreciente, para todo $n \ge N$ se tiene

$$
a_n \le a_N < t+\varepsilon.
$$

Y como $t$ es cota inferior,

$$
t \le a_n \quad \text{para todo } n.
$$

Asi, para todo $n \ge N$,

$$
t \le a_n < t+\varepsilon,
$$

lo que implica

$$
|a_n-t| < \varepsilon.
$$

Por tanto $a_n \to t$.

### 14

Un ejemplo es

$$
a_n = (-1)^n.
$$

La sucesion esta acotada porque

$$
-1 \le a_n \le 1 \quad \text{para todo } n.
$$

Sin embargo no converge en $\mathbb{R}$ porque alterna entre $-1$ y $1$ y no se aproxima a un unico numero real.

### 15

Supongamos que $a_n \to L$. Tomamos $\varepsilon = 1$. Entonces existe $N$ tal que si $n \ge N$, se cumple

$$
|a_n-L| < 1.
$$

Por la desigualdad triangular,

$$
|a_n| \le |a_n-L| + |L| < 1 + |L|
$$

para todo $n \ge N$.

La cola es acotada por $1+|L|$. Los terminos iniciales $a_1,\dots,a_{N-1}$ son finitos en numero, asi que tambien estan acotados. Aplicando la proposicion de eventual acotacion, concluimos que toda la sucesion es acotada.

## Cierre

La acotacion es una condicion de control, no de convergencia. Su fuerza aparece cuando se combina con otras hipotesis: con monotonia produce limite, con subsecuencias prepara Bolzano-Weierstrass y con Cauchy ayuda a entender completitud. Por eso este tema es uno de los puntos de apoyo de toda la teoria posterior.
