---
title: Convergencia de sucesiones
description: Definicion epsilon-N, interpretacion del limite, propiedades basicas y tecnicas elementales de prueba.
---

# Convergencia de sucesiones

## Motivacion e intuicion

Una sucesion converge cuando sus terminos se estabilizan alrededor de un numero fijo. No hace falta que lo alcancen exactamente; basta con que, desde cierto punto en adelante, queden tan cerca de el como se quiera.

En analisis real esta idea es central porque permite formalizar aproximacion, error y paso al limite. Casi todos los temas posteriores se apoyan en esta nocion.

::: tip Idea central
Converger no significa "llegar" al valor limite, sino "quedarse arbitrariamente cerca" de el a partir de cierto indice.
:::

## Prerrequisitos

Para este tema conviene manejar:

- definicion de sucesion;
- valor absoluto y desigualdades;
- operaciones algebraicas elementales;
- cuantificadores "para todo" y "existe".

## Definiciones formales

### Limite de una sucesion

Sea $(a_n)$ una sucesion real y sea $L \in \mathbb{R}$. Se dice que $(a_n)$ **converge** a $L$ si:

$$
\forall \varepsilon > 0 \ \exists N \in \mathbb{N} \ \text{tal que si } n \ge N, \text{ entonces } |a_n - L| < \varepsilon.
$$

En ese caso se escribe

$$
\lim_{n \to \infty} a_n = L
$$

o tambien

$$
a_n \to L.
$$

### Sucesion convergente

Una sucesion es **convergente** si existe algun numero real $L$ tal que $a_n \to L$.

### Sucesion divergente

Una sucesion es **divergente** si no converge a ningun numero real.

### Propiedad eventual

Se dice que una propiedad $P(n)$ vale **eventualmente** si existe $N \in \mathbb{N}$ tal que $P(n)$ se cumple para todo $n \ge N$.

La definicion de limite dice exactamente que la desigualdad

$$
|a_n - L| < \varepsilon
$$

debe valer eventualmente para cada $\varepsilon > 0$.

## Interpretacion en lenguaje natural

Fijado un error tolerable $\varepsilon > 0$, la condicion

$$
|a_n - L| < \varepsilon
$$

significa que el termino $a_n$ cae dentro de la banda

$$
(L-\varepsilon, L+\varepsilon).
$$

Entonces $a_n \to L$ significa:

- eliges cualquier margen de error, por pequeno que sea;
- a partir de cierto indice $N$, todos los terminos quedan dentro de esa banda;
- una vez dentro, ya no vuelven a salir.

El indice $N$ puede depender de $\varepsilon$, pero no puede depender de $n$.

## Ejemplos basicos

### Ejemplo 1: sucesion constante

Si $a_n = 5$ para todo $n$, entonces

$$
|a_n - 5| = 0 < \varepsilon
$$

para cualquier $\varepsilon > 0$ y todo $n$. Por tanto

$$
a_n \to 5.
$$

### Ejemplo 2: la sucesion $1/n$

Consideremos

$$
a_n = \frac{1}{n}.
$$

Queremos probar que $a_n \to 0$. Dado $\varepsilon > 0$, basta elegir $N \in \mathbb{N}$ con

$$
N > \frac{1}{\varepsilon}.
$$

Entonces, si $n \ge N$,

$$
\left| \frac{1}{n} - 0 \right| = \frac{1}{n} \le \frac{1}{N} < \varepsilon.
$$

Luego

$$
\frac{1}{n} \to 0.
$$

### Ejemplo 3: una sucesion racional sencilla

Sea

$$
a_n = \frac{n+3}{n} = 1 + \frac{3}{n}.
$$

Como $3/n \to 0$, se espera que $a_n \to 1$. En efecto,

$$
\left| \frac{n+3}{n} - 1 \right| = \frac{3}{n},
$$

y el mismo argumento del ejemplo anterior prueba que

$$
\frac{n+3}{n} \to 1.
$$

### Ejemplo 4: oscilacion amortiguada

Sea

$$
a_n = \frac{(-1)^n}{n}.
$$

Aunque el signo cambia en cada paso, el tamano del termino se hace pequeno. De hecho,

$$
\left| \frac{(-1)^n}{n} \right| = \frac{1}{n} \to 0.
$$

Por tanto

$$
\frac{(-1)^n}{n} \to 0.
$$

### Ejemplo 5: acercarse sin tocar el limite

Sea

$$
a_n = 1 - \frac{1}{n}.
$$

Entonces

$$
a_n < 1 \quad \text{para todo } n,
$$

pero aun asi

$$
a_n \to 1.
$$

Esto muestra que una sucesion puede converger a un numero que nunca aparece como termino.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: una sucesion acotada puede no converger

La sucesion

$$
a_n = (-1)^n
$$

esta acotada, pero no converge en $\mathbb{R}$. Los terminos saltan entre $-1$ y $1$ y no permanecen cerca de un unico numero.

De hecho, dado cualquier $L \in \mathbb{R}$, al menos uno de los numeros $|1-L|$ o $|-1-L|$ es mayor o igual que $1$. Por tanto no puede cumplirse la condicion de convergencia con $\varepsilon = 1/2$.

### Contraejemplo 2: crecer sin cota no es converger

La sucesion

$$
a_n = n
$$

no converge como sucesion real. Sus terminos se alejan indefinidamente y no quedan cerca de ningun numero real fijo.

### Ejemplo fino 3: los primeros terminos no deciden el limite

Sea

$$
a_1 = 1000, \qquad a_n = \frac{1}{n} \text{ para } n \ge 2.
$$

Aunque el primer termino es enorme, la sucesion sigue convergiendo a $0$. La convergencia depende del comportamiento eventual, no de un numero finito de terminos iniciales.

### Ejemplo fino 4: oscilacion no siempre implica divergencia

La sucesion

$$
a_n = 2 + \frac{(-1)^n}{n}
$$

oscila alrededor de $2$, pero la amplitud de la oscilacion tiende a $0$. Por eso

$$
a_n \to 2.
$$

No basta ver cambio de signo; hay que medir el tamano de la oscilacion.

## Proposiciones y teoremas centrales

### Proposicion 1: unicidad del limite

Si una sucesion converge, entonces su limite es unico.

#### Demostracion

Supongamos que $a_n \to L$ y tambien $a_n \to M$, con $L \ne M$. Sin perdida de generalidad, supongamos $L < M$ y definamos

$$
\varepsilon = \frac{M-L}{3} > 0.
$$

Como $a_n \to L$, existe $N_1$ tal que si $n \ge N_1$, entonces

$$
|a_n - L| < \varepsilon,
$$

es decir,

$$
L - \varepsilon < a_n < L + \varepsilon.
$$

Como $a_n \to M$, existe $N_2$ tal que si $n \ge N_2$, entonces

$$
|a_n - M| < \varepsilon,
$$

o sea,

$$
M - \varepsilon < a_n < M + \varepsilon.
$$

Tomando $n \ge \max\{N_1,N_2\}$, ambas desigualdades deben cumplirse a la vez. Pero

$$
L + \varepsilon = L + \frac{M-L}{3} < M - \frac{M-L}{3} = M - \varepsilon,
$$

asi que los intervalos no se intersectan. Esto es imposible. Luego $L = M$.

### Proposicion 2: toda cola conserva el mismo limite

Si $a_n \to L$ y $k \in \mathbb{N}$ es fijo, entonces la sucesion $(a_{n+k})$ tambien converge a $L$.

#### Demostracion

Sea $\varepsilon > 0$. Como $a_n \to L$, existe $N$ tal que

$$
n \ge N \implies |a_n - L| < \varepsilon.
$$

Si ahora $n \ge N$, entonces tambien $n+k \ge N$, y por tanto

$$
|a_{n+k} - L| < \varepsilon.
$$

Luego $a_{n+k} \to L$.

#### Corolario

Cambiar, agregar o quitar un numero finito de terminos iniciales no modifica la convergencia ni el limite.

### Teorema 3: toda sucesion convergente es acotada

Si $a_n \to L$, entonces existe $M > 0$ tal que

$$
|a_n| \le M \quad \text{para todo } n \in \mathbb{N}.
$$

#### Demostracion

Tomemos $\varepsilon = 1$. Como $a_n \to L$, existe $N$ tal que si $n \ge N$, entonces

$$
|a_n - L| < 1.
$$

Por la desigualdad triangular,

$$
|a_n| \le |a_n - L| + |L| < 1 + |L|
$$

para todo $n \ge N$.

Los terminos $a_1,\dots,a_{N-1}$ forman un conjunto finito, asi que sus valores absolutos tienen un maximo. Si definimos

$$
M = \max\{|a_1|,\dots,|a_{N-1}|, |L|+1\},
$$

entonces $|a_n| \le M$ para todo $n$.

### Proposicion 4: preservacion del orden en el limite

Supongamos que existen sucesiones $(a_n)$ y $(b_n)$ tales que:

$$
a_n \le b_n \quad \text{para todo } n \ge N_0,
$$

y ademas

$$
a_n \to a, \qquad b_n \to b.
$$

Entonces

$$
a \le b.
$$

#### Demostracion

Supongamos, por contradiccion, que $a > b$. Sea

$$
\varepsilon = \frac{a-b}{3} > 0.
$$

Como $a_n \to a$, existe $N_1$ tal que para todo $n \ge N_1$ se cumple

$$
|a_n-a| < \varepsilon,
$$

de donde

$$
a_n > a-\varepsilon.
$$

Como $b_n \to b$, existe $N_2$ tal que para todo $n \ge N_2$ se cumple

$$
|b_n-b| < \varepsilon,
$$

y por tanto

$$
b_n < b+\varepsilon.
$$

Tomando $n \ge \max\{N_0,N_1,N_2\}$ obtenemos

$$
a_n > a-\varepsilon = a-\frac{a-b}{3} > b+\frac{a-b}{3} = b+\varepsilon > b_n,
$$

lo cual contradice que $a_n \le b_n$. Luego $a \le b$.

### Teorema 5: teorema del sandwich

Supongamos que existe $N_0 \in \mathbb{N}$ tal que

$$
a_n \le b_n \le c_n \quad \text{para todo } n \ge N_0,
$$

y que

$$
a_n \to L, \qquad c_n \to L.
$$

Entonces

$$
b_n \to L.
$$

#### Demostracion

Sea $\varepsilon > 0$. Como $a_n \to L$, existe $N_1$ tal que si $n \ge N_1$, entonces

$$
|a_n-L| < \varepsilon,
$$

lo cual implica

$$
L-\varepsilon < a_n.
$$

Como $c_n \to L$, existe $N_2$ tal que si $n \ge N_2$, entonces

$$
|c_n-L| < \varepsilon,
$$

de donde

$$
c_n < L+\varepsilon.
$$

Si $n \ge \max\{N_0,N_1,N_2\}$, entonces

$$
L-\varepsilon < a_n \le b_n \le c_n < L+\varepsilon.
$$

Por consiguiente,

$$
|b_n-L| < \varepsilon.
$$

Esto prueba que $b_n \to L$.

## Errores comunes

1. Pensar que converger significa alcanzar el limite en algun momento.
2. Elegir un indice $N$ que depende de $n$ en lugar de depender solo de $\varepsilon$.
3. Verificar la condicion solo para algunos valores de $\varepsilon$ y no para todos.
4. Concluir que toda sucesion oscilante diverge. Algunas oscilan con amplitud decreciente y si convergen.
5. Creer que unos pocos terminos iniciales determinan la convergencia.

## Resumen operativo

- Para probar que $a_n \to L$, hay que controlar $|a_n-L|$ y forzarlo a ser menor que $\varepsilon$ para $n$ grande.
- El indice $N$ depende del error tolerado $\varepsilon$.
- El limite, si existe, es unico.
- Toda cola de una sucesion convergente tiene el mismo limite.
- Toda sucesion convergente es acotada.
- El teorema del sandwich permite concluir convergencia cuando una sucesion queda atrapada entre otras dos con el mismo limite.

## Ejercicios

### Basicos

1. Demuestra con la definicion que la sucesion $a_n = 4$ converge a $4$.
2. Demuestra con la definicion que $a_n = 1/n$ converge a $0$.
3. Calcula el limite de $a_n = (n+5)/n$ y justificalo.
4. Decide si la sucesion $a_n = (-1)^n$ converge en $\mathbb{R}$.
5. Sea $b_1 = 100$ y $b_n = 1/n$ para $n \ge 2$. Decide si $(b_n)$ converge.

### Intermedios

6. Demuestra con la definicion que

$$
a_n = \frac{3n-1}{n+2}
$$

converge a $3$.

7. Demuestra que

$$
a_n = \frac{2+(-1)^n}{n}
$$

converge a $0$.

8. Prueba que

$$
a_n = \frac{n}{n+1}
$$

converge a $1$.

9. Si $0 \le a_n \le 1/n$ para todo $n$, demuestra que $a_n \to 0$.
10. Da un ejemplo de sucesion acotada y divergente, y justifica ambas afirmaciones.

### De prueba y demostracion

11. Supongamos que $a_n \to L$. Demuestra que la sucesion $b_n = a_{n+3}$ tambien converge a $L$.
12. Supongamos que $a_n \to L$ y que $a_n \ge 0$ para todo $n \ge N_0$. Demuestra que $L \ge 0$.
13. Demuestra que si

$$
-\frac{5}{n} \le a_n \le \frac{5}{n}
$$

para todo $n$, entonces $a_n \to 0$.

14. Demuestra que la sucesion $a_n = n$ no converge en $\mathbb{R}$.
15. Demuestra que si

$$
|a_n - 2| \le \frac{1}{n}
$$

para todo $n$, entonces $a_n \to 2$.

## Soluciones

### 1

Dado $\varepsilon > 0$, para todo $n$ se cumple

$$
|a_n-4| = |4-4| = 0 < \varepsilon.
$$

Por tanto basta tomar cualquier $N \in \mathbb{N}$, por ejemplo $N=1$. Luego $a_n \to 4$.

### 2

Sea $\varepsilon > 0$. Elige $N \in \mathbb{N}$ tal que

$$
N > \frac{1}{\varepsilon}.
$$

Si $n \ge N$, entonces

$$
\left| \frac{1}{n} - 0 \right| = \frac{1}{n} \le \frac{1}{N} < \varepsilon.
$$

Asi, $1/n \to 0$.

### 3

Se tiene

$$
\frac{n+5}{n} = 1 + \frac{5}{n}.
$$

Entonces

$$
\left| \frac{n+5}{n} - 1 \right| = \frac{5}{n}.
$$

Dado $\varepsilon > 0$, basta tomar $N > 5/\varepsilon$. Luego, si $n \ge N$,

$$
\left| \frac{n+5}{n} - 1 \right| < \varepsilon.
$$

Por tanto,

$$
\frac{n+5}{n} \to 1.
$$

### 4

La sucesion $(-1)^n$ no converge en $\mathbb{R}$. En efecto, sus terminos alternan entre $-1$ y $1$. Si existiera un limite $L$, deberia cumplirse que todos los terminos, para $n$ suficientemente grande, cayeran dentro del intervalo $(L-1/2,L+1/2)$. Pero entre $-1$ y $1$ hay distancia $2$, asi que no pueden ambos quedar a distancia menor que $1/2$ del mismo numero. Luego la sucesion diverge.

### 5

La sucesion converge a $0$. En efecto, para $n \ge 2$ vale $b_n = 1/n$, y ya se sabe que $1/n \to 0$. Cambiar el primer termino no altera el limite. Luego

$$
b_n \to 0.
$$

### 6

Observamos que

$$
\frac{3n-1}{n+2} - 3 = \frac{3n-1-3n-6}{n+2} = -\frac{7}{n+2}.
$$

Por tanto

$$
\left| \frac{3n-1}{n+2} - 3 \right| = \frac{7}{n+2}.
$$

Dado $\varepsilon > 0$, toma $N$ tal que $N > 7/\varepsilon$. Si $n \ge N$, entonces

$$
\frac{7}{n+2} \le \frac{7}{n} \le \frac{7}{N} < \varepsilon.
$$

Luego

$$
\frac{3n-1}{n+2} \to 3.
$$

### 7

Se cumple

$$
\left| \frac{2+(-1)^n}{n} \right| \le \frac{3}{n},
$$

porque $|2+(-1)^n| \le 3$. Dado $\varepsilon > 0$, toma $N > 3/\varepsilon$. Entonces, si $n \ge N$,

$$
\left| \frac{2+(-1)^n}{n} \right| \le \frac{3}{n} \le \frac{3}{N} < \varepsilon.
$$

Por tanto la sucesion converge a $0$.

### 8

Tenemos

$$
\frac{n}{n+1} - 1 = -\frac{1}{n+1}.
$$

Luego

$$
\left| \frac{n}{n+1} - 1 \right| = \frac{1}{n+1}.
$$

Dado $\varepsilon > 0$, elige $N > 1/\varepsilon$. Si $n \ge N$, entonces

$$
\left| \frac{n}{n+1} - 1 \right| = \frac{1}{n+1} < \frac{1}{n} \le \frac{1}{N} < \varepsilon.
$$

Concluimos que

$$
\frac{n}{n+1} \to 1.
$$

### 9

La sucesion nula satisface

$$
0 \to 0,
$$

y la sucesion $1/n$ tambien converge a $0$. Como

$$
0 \le a_n \le \frac{1}{n}
$$

para todo $n$, el teorema del sandwich implica que

$$
a_n \to 0.
$$

### 10

Un ejemplo es

$$
a_n = (-1)^n.
$$

Esta sucesion esta acotada porque siempre cumple

$$
-1 \le a_n \le 1.
$$

Sin embargo no converge, porque sus terminos alternan entre dos valores separados y no permanecen cerca de un unico numero real.

### 11

Sea $\varepsilon > 0$. Como $a_n \to L$, existe $N$ tal que si $m \ge N$, entonces

$$
|a_m-L| < \varepsilon.
$$

Si ahora $n \ge N$, entonces $n+3 \ge N$, y por tanto

$$
|b_n-L| = |a_{n+3}-L| < \varepsilon.
$$

Luego $b_n \to L$.

### 12

Supongamos, por contradiccion, que $L < 0$. Toma

$$
\varepsilon = -\frac{L}{2} > 0.
$$

Como $a_n \to L$, existe $N_1$ tal que si $n \ge N_1$, entonces

$$
|a_n-L| < \varepsilon.
$$

Esto implica

$$
a_n < L + \varepsilon = \frac{L}{2} < 0.
$$

Pero por hipotesis existe $N_0$ tal que $a_n \ge 0$ para todo $n \ge N_0$. Tomando $n \ge \max\{N_0,N_1\}$ obtenemos una contradiccion. Luego $L \ge 0$.

### 13

Como

$$
-\frac{5}{n} \le a_n \le \frac{5}{n},
$$

y se sabe que

$$
\frac{5}{n} \to 0 \qquad \text{y} \qquad -\frac{5}{n} \to 0,
$$

el teorema del sandwich da inmediatamente

$$
a_n \to 0.
$$

### 14

Si la sucesion $a_n = n$ convergiera en $\mathbb{R}$, entonces por el teorema de acotacion toda sucesion convergente seria acotada. Pero $(n)$ no esta acotada superiormente: dado cualquier $M \in \mathbb{R}$, existe $n \in \mathbb{N}$ con $n > M$. Esto contradice la acotacion. Luego $(n)$ no converge en $\mathbb{R}$.

### 15

De la hipotesis

$$
|a_n-2| \le \frac{1}{n}
$$

se deduce que

$$
-\frac{1}{n} \le a_n-2 \le \frac{1}{n}.
$$

Sumando $2$ en todos los miembros:

$$
2 - \frac{1}{n} \le a_n \le 2 + \frac{1}{n}.
$$

Como

$$
2 - \frac{1}{n} \to 2 \qquad \text{y} \qquad 2 + \frac{1}{n} \to 2,
$$

el teorema del sandwich implica que

$$
a_n \to 2.
$$

## Cierre

La definicion epsilon-$N$ es la puerta de entrada al rigor del analisis. Dominarla significa saber traducir la intuicion de "estar cerca" en desigualdades cuantificadas con precision. Los siguientes temas se apoyaran en esta idea para estudiar acotacion, Cauchy, compacidad y continuidad.
