---
title: Principio del supremo
description: Cotas, supremo, completitud de los reales y propiedades fundamentales.
---

# Principio del supremo

## Motivacion e intuicion

El principio del supremo es una de las afirmaciones que distinguen a $\mathbb{R}$ de $\mathbb{Q}$. Intuitivamente dice que si un conjunto de numeros reales no esta vacio y no puede crecer indefinidamente hacia arriba, entonces tiene un techo exacto dentro de $\mathbb{R}$.

Ese techo exacto no tiene por que pertenecer al conjunto. Lo importante es que existe como numero real y que es la menor cota superior posible.

::: tip Idea central
En $\mathbb{R}$ no hay huecos en el orden. El principio del supremo es una forma precisa de expresar esa completitud.
:::

## Prerrequisitos minimos

Para leer este tema conviene manejar:

- desigualdades en $\mathbb{R}$;
- notacion de conjuntos;
- diferencia entre elemento de un conjunto y propiedad satisfecha por todos sus elementos;
- nocion elemental de orden en la recta real.

## Definiciones formales

Sea $A \subseteq \mathbb{R}$.

### Cota superior

Un numero $M \in \mathbb{R}$ es una **cota superior** de $A$ si

$$
a \le M \quad \text{para todo } a \in A.
$$

En ese caso se dice que $A$ esta **acotado superiormente**.

### Cota inferior

Un numero $m \in \mathbb{R}$ es una **cota inferior** de $A$ si

$$
m \le a \quad \text{para todo } a \in A.
$$

En ese caso se dice que $A$ esta **acotado inferiormente**.

### Maximo

Un numero $x_0 \in A$ es el **maximo** de $A$ si

$$
a \le x_0 \quad \text{para todo } a \in A.
$$

Se escribe $x_0 = \max A$.

### Supremo

Un numero $s \in \mathbb{R}$ es el **supremo** de $A$ si se cumplen simultaneamente:

1. $a \le s$ para todo $a \in A$.
2. Si $u$ es cualquier cota superior de $A$, entonces $s \le u$.

Se escribe $s = \sup A$.

La primera condicion dice que $s$ es cota superior. La segunda dice que es la menor de todas.

### Infimo

Un numero $t \in \mathbb{R}$ es el **infimo** de $A$ si:

1. $t \le a$ para todo $a \in A$.
2. Si $\ell$ es cualquier cota inferior de $A$, entonces $\ell \le t$.

Se escribe $t = \inf A$.

## Interpretacion en lenguaje natural

Si $A$ tiene supremo $s$, entonces:

- ningun elemento de $A$ rebasa a $s$;
- cualquier numero estrictamente menor que $s$ deja de ser una cota superior;
- por debajo de $s$ siempre se puede encontrar un elemento de $A$ arbitrariamente cercano a $s$.

Ese ultimo punto es esencial. El supremo no es solo un techo cualquiera: es el borde exacto del conjunto por arriba.

## El principio del supremo

### Enunciado

Todo subconjunto no vacio de $\mathbb{R}$ que este acotado superiormente posee supremo en $\mathbb{R}$.

Este principio tambien se conoce como **axioma de completitud** de los numeros reales.

### Que se demuestra y que no

En un curso de analisis real, el principio del supremo suele tomarse como axioma de $\mathbb{R}$. Eso significa que no se demuestra dentro del desarrollo basico del curso. En cambio, si se construye $\mathbb{R}$ a partir de $\mathbb{Q}$ mediante cortaduras de Dedekind o clases de equivalencia de sucesiones de Cauchy, entonces se puede justificar este principio como consecuencia de la construccion.

## Ejemplos basicos

### Ejemplo 1: intervalo abierto

Sea $A = (0,1)$.

- $1$ es cota superior de $A$.
- $2$, $5$ y $100$ tambien lo son.
- La menor cota superior es $1$.

Por tanto,

$$
\sup A = 1.
$$

Observa que $1 \notin A$, de modo que el supremo no tiene por que ser un maximo.

### Ejemplo 2: conjunto finito

Sea $A = \{-3, 1, 2, 5\}$.

Entonces $5$ es el mayor elemento del conjunto. Como ademas pertenece a $A$, se tiene

$$
\sup A = 5 = \max A.
$$

### Ejemplo 3: semirrecta

Sea

$$
A = \{x \in \mathbb{R} : x < 2\}.
$$

El numero $2$ es una cota superior, y cualquier numero menor que $2$ falla como cota superior porque aun existen elementos del conjunto mas grandes que el. Luego

$$
\sup A = 2.
$$

### Ejemplo 4: conjunto definido por una desigualdad

Sea

$$
A = \{x \in \mathbb{R} : x^2 < 2,\ x > 0\}.
$$

Entonces

$$
\sup A = \sqrt{2}.
$$

La razon es que $x^2 < 2$ para $x > 0$ equivale a $x < \sqrt{2}$. Asi, el conjunto es exactamente $(0,\sqrt{2})$.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: el supremo no siempre pertenece al conjunto

En $A = (0,1)$, el supremo es $1$, pero $1$ no es elemento de $A$.

### Contraejemplo 2: una cota superior no es automaticamente el supremo

Para $A = (0,1)$, el numero $7$ es cota superior, pero no es supremo porque no es la menor cota superior.

### Contraejemplo 3: en $\mathbb{Q}$ puede fallar la existencia de supremo

Considera

$$
B = \{q \in \mathbb{Q} : q > 0,\ q^2 < 2\}.
$$

El conjunto $B$ esta acotado superiormente en $\mathbb{Q}$, por ejemplo por $2$. Sin embargo, no posee supremo en $\mathbb{Q}$.

La intuicion es que el candidato natural seria $\sqrt{2}$, pero $\sqrt{2} \notin \mathbb{Q}$. Ademas, ningun racional puede ser el menor de todos los racionales que acotan superiormente a $B$.

Esto exhibe una diferencia estructural entre $\mathbb{Q}$ y $\mathbb{R}$.

## Proposiciones y teoremas centrales

### Proposicion 1: unicidad del supremo

Si $A$ posee supremo, entonces ese supremo es unico.

#### Demostracion

Supongamos que $s$ y $t$ son ambos supremos de $A$.

Como $t$ es cota superior de $A$ y $s$ es la menor cota superior, se sigue que $s \le t$.

De manera analoga, como $s$ es cota superior de $A$ y $t$ es la menor cota superior, se obtiene $t \le s$.

Por antisimetria del orden real,

$$
s = t.
$$

Luego el supremo es unico.

::: details Comentario
La idea es simple: si dos numeros fueran "el menor de todos los mayores", ninguno podria quedar estrictamente por debajo del otro.
:::

### Proposicion 2: caracterizacion epsilon del supremo

Sea $A \subseteq \mathbb{R}$ no vacio y sea $s \in \mathbb{R}$. Entonces $s = \sup A$ si y solo si:

1. $a \le s$ para todo $a \in A$.
2. Para todo $\varepsilon > 0$, existe $a_\varepsilon \in A$ tal que $s - \varepsilon < a_\varepsilon$.

Como ya sabemos que $a_\varepsilon \le s$, la segunda condicion significa que hay elementos de $A$ tan cercanos a $s$ por debajo como se quiera.

#### Demostracion

Supongamos primero que $s = \sup A$.

La condicion 1 es inmediata por definicion de supremo.

Para probar la condicion 2, fijemos $\varepsilon > 0$. Si no existiera $a \in A$ con $s - \varepsilon < a$, entonces se tendria

$$
a \le s - \varepsilon \quad \text{para todo } a \in A.
$$

Pero eso implicaria que $s - \varepsilon$ es una cota superior de $A$, contradiciendo que $s$ es la menor cota superior. Luego tal elemento si existe.

Reciprocamente, supongamos que se cumplen 1 y 2. La condicion 1 dice que $s$ es cota superior de $A$.

Veamos que es la menor. Sea $u$ otra cota superior de $A$. Si $u < s$, definimos $\varepsilon = s - u > 0$. Por la condicion 2 existe $a_\varepsilon \in A$ tal que

$$
u = s - \varepsilon < a_\varepsilon,
$$

lo cual contradice que $u$ es cota superior. Por tanto $s \le u$.

Hemos probado que $s$ es la menor cota superior, es decir, $s = \sup A$.

### Proposicion 3: relacion entre maximo y supremo

Si $\max A$ existe, entonces $\sup A$ existe y

$$
\sup A = \max A.
$$

#### Demostracion

Sea $m = \max A$. Entonces $m \in A$ y $a \le m$ para todo $a \in A$, de modo que $m$ es cota superior.

Sea $u$ otra cota superior de $A$. Como $m \in A$, necesariamente $m \le u$.

Concluimos que $m$ es la menor cota superior. Por tanto

$$
\sup A = m.
$$

### Proposicion 4: si el supremo pertenece al conjunto, entonces es el maximo

Si $s = \sup A$ y $s \in A$, entonces $s = \max A$.

#### Demostracion

Por ser supremo, se tiene $a \le s$ para todo $a \in A$. Como ademas $s \in A$, esto muestra exactamente que $s$ es el mayor elemento de $A$. Luego $s = \max A$.

### Teorema 5: existencia del infimo a partir del supremo

Todo subconjunto no vacio de $\mathbb{R}$ acotado inferiormente posee infimo.

#### Demostracion

Sea $A \subseteq \mathbb{R}$ no vacio y acotado inferiormente. Consideremos el conjunto

$$
-A = \{-a : a \in A\}.
$$

Como $A$ esta acotado inferiormente, existe $m \in \mathbb{R}$ tal que $m \le a$ para todo $a \in A$. Al multiplicar por $-1$, se obtiene $-a \le -m$ para todo $a \in A$, asi que $-m$ es cota superior de $-A$.

Por el principio del supremo, existe $s = \sup(-A)$.

Definimos $t = -s$. Probaremos que $t = \inf A$.

Primero, como $-a \le s$ para todo $a \in A$, al multiplicar por $-1$ obtenemos $-s \le a$, es decir, $t \le a$. Luego $t$ es cota inferior de $A$.

Ahora sea $\ell$ otra cota inferior de $A$. Entonces $\ell \le a$ para todo $a \in A$, y al multiplicar por $-1$ se deduce $-a \le -\ell$ para todo $a \in A$. Esto muestra que $-\ell$ es cota superior de $-A$.

Como $s = \sup(-A)$, se sigue que $s \le -\ell$. Multiplicando por $-1$:

$$
\ell \le -s = t.
$$

Por tanto $t$ es la mayor de las cotas inferiores, esto es,

$$
t = \inf A.
$$

## Lectura conceptual: por que esto expresa completitud

En $\mathbb{Q}$, el conjunto de racionales positivos con cuadrado menor que $2$ no tiene supremo racional. En $\mathbb{R}$, ese hueco esta ocupado por $\sqrt{2}$. La existencia del supremo codifica que no faltan puntos limite en la recta real.

Muchas propiedades importantes de $\mathbb{R}$ son equivalentes al principio del supremo:

- convergencia de sucesiones monotonas acotadas;
- propiedad de intervalos encajados;
- teorema de Bolzano-Weierstrass;
- completitud via sucesiones de Cauchy.

En este curso veremos varias de esas equivalencias mas adelante.

## Errores comunes

1. Confundir **cota superior** con **supremo**. Una cota superior puede ser enorme; el supremo es la menor de todas.
2. Creer que el supremo siempre pertenece al conjunto. Eso solo ocurre cuando ademas es maximo.
3. Pensar que "estar cerca del supremo" significa alcanzarlo. No hace falta que el conjunto contenga el supremo.
4. Usar el principio del supremo en $\mathbb{Q}$ como si fuera valido. No lo es.
5. Omitir la hipotesis de conjunto no vacio. El conjunto vacio requiere convenciones aparte y no entra en el axioma basico.

## Resumen operativo

- Si $A$ no es vacio y esta acotado superiormente en $\mathbb{R}$, entonces $\sup A$ existe.
- $\sup A$ puede pertenecer o no a $A$.
- Si $\sup A \in A$, entonces $\sup A = \max A$.
- La caracterizacion epsilon dice que siempre hay elementos de $A$ arbitrariamente cercanos al supremo por abajo.
- El infimo se obtiene aplicando el principio del supremo a $-A$.

## Ejercicios

### Basicos

1. Determina $\sup A$, $\inf A$, $\max A$ y $\min A$ si existen para $A = [1,4)$.
2. Determina $\sup A$ y $\inf A$ para $A = \{1/n : n \in \mathbb{N}\}$.
3. Sea $A = \{x \in \mathbb{R} : x < 5\}$. Encuentra $\sup A$ y decide si existe $\max A$.
4. Sea $A = \{-2, 0, 7, 9\}$. Calcula $\sup A$ y $\inf A$.
5. Sea $A = (2,3]$. Calcula $\sup A$, $\inf A$, $\max A$ y $\min A$.

### Intermedios

6. Prueba que si $A \subseteq B \subseteq \mathbb{R}$ y ambos tienen supremo, entonces $\sup A \le \sup B$.
7. Sea $A$ no vacio y acotado superiormente, y sea $c \in \mathbb{R}$. Prueba que $\sup(A + c) = \sup A + c$, donde $A + c = \{a + c : a \in A\}$.
8. Sea $A$ no vacio y acotado superiormente, y $\lambda > 0$. Prueba que $\sup(\lambda A) = \lambda \sup A$, donde $\lambda A = \{\lambda a : a \in A\}$.
9. Sea $A = \{x \in \mathbb{R} : x^2 < 9\}$. Determina $\sup A$ e $\inf A$.
10. Sea $A = \{1 - 1/n : n \in \mathbb{N}\}$. Calcula $\sup A$ y decide si pertenece al conjunto.

### De prueba y demostracion

11. Demuestra que el supremo de un conjunto, cuando existe, es unico.
12. Demuestra la implicacion: si $s = \sup A$, entonces para todo $\varepsilon > 0$ existe $a \in A$ con $s - \varepsilon < a$.
13. Demuestra la reciproca de la caracterizacion epsilon del supremo.
14. Usando el principio del supremo, demuestra que todo conjunto no vacio y acotado inferiormente tiene infimo.
15. Demuestra que el conjunto $B = \{q \in \mathbb{Q} : q > 0,\ q^2 < 2\}$ no tiene supremo en $\mathbb{Q}$.

## Soluciones

### 1

Para $A = [1,4)$:

- $1$ pertenece a $A$ y es el menor elemento, por tanto $\min A = 1$ e $\inf A = 1$.
- $4$ es cota superior y cualquier numero menor que $4$ deja de serlo, asi que $\sup A = 4$.
- Como $4 \notin A$, no existe $\max A$.

### 2

Para $A = \{1/n : n \in \mathbb{N}\}$:

- el mayor elemento es $1 = 1/1$, asi que $\max A = 1$ y $\sup A = 1$;
- la sucesion $1/n$ toma valores positivos cada vez mas pequenos, de modo que $0$ es cota inferior;
- cualquier numero positivo deja de ser cota inferior para $n$ suficientemente grande, luego $\inf A = 0$;
- como $0 \notin A$, no existe minimo.

### 3

Si $A = \{x \in \mathbb{R} : x < 5\}$, entonces $5$ es cota superior. Si $u < 5$, el numero $(u + 5)/2$ satisface $u < (u + 5)/2 < 5$, luego pertenece a $A$ y muestra que $u$ no es cota superior. Por tanto $\sup A = 5$.

No existe $\max A$ porque $5 \notin A$.

### 4

En $A = \{-2, 0, 7, 9\}$:

- el mayor elemento es $9$, luego $\sup A = 9 = \max A$;
- el menor elemento es $-2$, luego $\inf A = -2 = \min A$.

### 5

Para $A = (2,3]$:

- $3$ pertenece al conjunto y es su mayor elemento, asi que $\sup A = 3 = \max A$;
- $2$ es la mayor cota inferior, de modo que $\inf A = 2$;
- como $2 \notin A$, no existe $\min A$.

### 6

Sea $u = \sup B$. Como $A \subseteq B$, todo elemento de $A$ pertenece tambien a $B$, asi que $a \le u$ para todo $a \in A$. Esto muestra que $u$ es cota superior de $A$. Como $\sup A$ es la menor cota superior de $A$, se concluye

$$
\sup A \le u = \sup B.
$$

### 7

Sea $s = \sup A$. Primero, para todo $a \in A$ se tiene $a \le s$, luego $a + c \le s + c$, de manera que $s + c$ es cota superior de $A + c$.

Ahora sea $u$ cualquier cota superior de $A + c$. Entonces $a + c \le u$ para todo $a \in A$, lo que equivale a $a \le u - c$ para todo $a \in A$. Asi, $u - c$ es cota superior de $A$, y por minimalidad del supremo:

$$
s \le u - c.
$$

Sumando $c$:

$$
s + c \le u.
$$

Luego $s + c$ es la menor cota superior de $A + c$, es decir,

$$
\sup(A + c) = \sup A + c.
$$

### 8

Sea $s = \sup A$ y $\lambda > 0$. Para todo $a \in A$, $a \le s$, luego $\lambda a \le \lambda s$. Asi, $\lambda s$ es cota superior de $\lambda A$.

Sea $u$ otra cota superior de $\lambda A$. Entonces $\lambda a \le u$ para todo $a \in A$. Como $\lambda > 0$, al dividir por $\lambda$ se obtiene

$$
a \le \frac{u}{\lambda}.
$$

Por tanto $u/\lambda$ es cota superior de $A$, luego $s \le u/\lambda$. Multiplicando por $\lambda$:

$$
\lambda s \le u.
$$

Concluimos que

$$
\sup(\lambda A) = \lambda \sup A.
$$

### 9

La condicion $x^2 < 9$ equivale a $-3 < x < 3$. Por tanto $A = (-3,3)$.

De aqui:

- $\sup A = 3$;
- $\inf A = -3$;
- no existe maximo ni minimo.

### 10

Los elementos de $A = \{1 - 1/n : n \in \mathbb{N}\}$ son

$$
0,\ \frac{1}{2},\ \frac{2}{3},\ \frac{3}{4},\dots
$$

Cada elemento es menor que $1$, luego $1$ es cota superior. Si $u < 1$, elige $n > 1/(1-u)$. Entonces $1/n < 1-u$, y por ello

$$
u < 1 - \frac{1}{n} \in A.
$$

Asi $u$ no es cota superior. Por tanto $\sup A = 1$.

El numero $1$ no pertenece al conjunto, luego no es maximo.

### 11

La prueba es la de la Proposicion 1. Si $s$ y $t$ son supremos, entonces $s \le t$ porque $t$ es cota superior, y $t \le s$ porque $s$ es cota superior. Luego $s = t$.

### 12

Sea $s = \sup A$ y $\varepsilon > 0$. Si no existiera $a \in A$ con $s - \varepsilon < a$, entonces todos los elementos de $A$ satisfarian $a \le s - \varepsilon$. Eso haria de $s - \varepsilon$ una cota superior de $A$, contradiciendo que $s$ es la menor. Luego tal $a$ existe.

### 13

Supongamos:

1. $a \le s$ para todo $a \in A$.
2. Para todo $\varepsilon > 0$ existe $a \in A$ tal que $s - \varepsilon < a$.

La primera condicion dice que $s$ es cota superior. Sea $u$ otra cota superior. Si $u < s$, toma $\varepsilon = s - u > 0$. Entonces existe $a \in A$ con

$$
u = s - \varepsilon < a,
$$

lo cual contradice que $u$ es cota superior. Por tanto $s \le u$. Luego $s$ es la menor cota superior, o sea $s = \sup A$.

### 14

Sea $A$ no vacio y acotado inferiormente. Considera $-A = \{-a : a \in A\}$. Este conjunto es no vacio y acotado superiormente. Por el principio del supremo existe $s = \sup(-A)$. Definimos $t = -s$.

Para todo $a \in A$, se tiene $-a \le s$, luego $t = -s \le a$. Asi $t$ es cota inferior.

Si $\ell$ es otra cota inferior de $A$, entonces $\ell \le a$ para todo $a \in A$, y por tanto $-a \le -\ell$ para todo $a \in A$. Esto significa que $-\ell$ es cota superior de $-A$. Como $s = \sup(-A)$, se cumple $s \le -\ell$, es decir, $\ell \le -s = t$.

Asi $t$ es la mayor cota inferior. Luego $t = \inf A$.

### 15

Supongamos, en busca de contradiccion, que existe $r \in \mathbb{Q}$ tal que $r = \sup B$.

Si $r^2 < 2$, entonces $2 - r^2 > 0$. Elige un racional $h > 0$ tal que

$$
0 < h < \min\left\{1,\frac{2-r^2}{2r+1}\right\}.
$$

Entonces

$$
(r+h)^2 = r^2 + 2rh + h^2 < r^2 + h(2r+1) < 2.
$$

Como ademas $r+h > 0$ y $r+h \in \mathbb{Q}$, se tiene $r+h \in B$. Pero $r+h > r$, lo cual contradice que $r$ sea cota superior de $B$.

Si $r^2 > 2$, entonces $r > 0$ y existe un racional $h > 0$ tal que

$$
0 < h < \min\left\{r,\frac{r^2-2}{2r}\right\}.
$$

Entonces $r-h > 0$ y

$$
(r-h)^2 = r^2 - 2rh + h^2 > r^2 - 2rh > 2.
$$

Tomemos cualquier $q \in B$. Como $q > 0$ y $q^2 < 2 < (r-h)^2$, necesariamente $q < r-h$. Por tanto $r-h$ es una cota superior de $B$ menor que $r$, contradiccion con que $r$ sea la menor cota superior.

Ninguna de las dos posibilidades $r^2 < 2$ o $r^2 > 2$ puede ocurrir. La unica opcion restante seria $r^2 = 2$, pero no existe racional cuyo cuadrado sea $2$.

La contradiccion muestra que $B$ no tiene supremo en $\mathbb{Q}$.

## Cierre

El principio del supremo sera la herramienta estructural detras de muchos teoremas posteriores. En particular, cuando estudiemos sucesiones y compacidad, veras que varias pruebas descansan en esta propiedad aunque a veces no se nombre explicitamente en cada paso.
