---
title: Operaciones con sucesiones
description: Suma, diferencia, producto, cociente, valor absoluto y leyes algebraicas del limite.
---

# Operaciones con sucesiones

## Motivacion e intuicion

Una vez que se sabe que dos sucesiones convergen, la siguiente pregunta natural es que ocurre al sumarlas, multiplicarlas o dividirlas. Hacer una prueba epsilon-$N$ desde cero cada vez seria demasiado costoso. Por eso este tema desarrolla las leyes algebraicas del limite.

La idea intuitiva es simple: si $a_n$ esta cerca de $a$ y $b_n$ esta cerca de $b$, entonces $a_n+b_n$ deberia estar cerca de $a+b$, y algo parecido deberia pasar con el producto y el cociente cuando el denominador no se acerca a cero.

::: tip Idea central
Las operaciones se hacen termino a termino, y bajo hipotesis adecuadas el limite respeta esas operaciones.
:::

## Prerrequisitos

Para este tema conviene manejar:

- convergencia de sucesiones;
- sucesiones acotadas;
- desigualdad triangular;
- factorizaciones algebraicas elementales.

## Definiciones formales

Sean $(a_n)$ y $(b_n)$ sucesiones reales y sea $c \in \mathbb{R}$.

### Suma

La **suma** de $(a_n)$ y $(b_n)$ es la sucesion $(a_n+b_n)$ definida por

$$
(a_n+b_n)_n = (a_n+b_n)_{n \in \mathbb{N}}.
$$

### Diferencia

La **diferencia** es la sucesion $(a_n-b_n)$ definida por

$$
(a_n-b_n)_{n \in \mathbb{N}}.
$$

### Producto por escalar

El **producto por escalar** de $c$ con $(a_n)$ es la sucesion $(ca_n)$.

### Producto

El **producto** de $(a_n)$ y $(b_n)$ es la sucesion $(a_nb_n)$.

### Cociente

Si $b_n \ne 0$ para todo $n$, el **cociente** es la sucesion

$$
\left(\frac{a_n}{b_n}\right).
$$

### Valor absoluto

La sucesion de **valores absolutos** de $(a_n)$ es

$$
(|a_n|).
$$

## Interpretacion en lenguaje natural

Todas estas operaciones se hacen posicion por posicion:

- el termino $n$ de la suma es $a_n+b_n$;
- el termino $n$ del producto es $a_nb_n$;
- el termino $n$ del cociente es $a_n/b_n$, siempre que tenga sentido.

La pregunta central no es solo si estas sucesiones estan bien definidas, sino como se comportan sus limites. En analisis, las leyes del limite permiten reemplazar una expresion complicada por otra mas simple al pasar al limite.

## Ejemplos basicos

### Ejemplo 1: suma

Si

$$
a_n = \frac{1}{n}, \qquad b_n = \frac{2}{n},
$$

entonces

$$
a_n+b_n = \frac{3}{n}.
$$

Como ambos sumandos tienden a $0$, se espera que

$$
\frac{3}{n} \to 0.
$$

### Ejemplo 2: producto por escalar

Si

$$
a_n = \frac{1}{n},
$$

entonces

$$
5a_n = \frac{5}{n} \to 0.
$$

Multiplicar por una constante solo reescala el limite.

### Ejemplo 3: producto

Si

$$
a_n = \frac{1}{n}, \qquad b_n = n+1,
$$

entonces

$$
a_nb_n = \frac{n+1}{n} = 1 + \frac{1}{n},
$$

asi que

$$
a_nb_n \to 1.
$$

### Ejemplo 4: cociente

Si

$$
a_n = n+1, \qquad b_n = n,
$$

entonces

$$
\frac{a_n}{b_n} = \frac{n+1}{n} = 1 + \frac{1}{n} \to 1.
$$

### Ejemplo 5: valor absoluto

Si

$$
a_n = \frac{(-1)^n}{n},
$$

entonces

$$
|a_n| = \frac{1}{n} \to 0.
$$

## Ejemplos finos y contraejemplos

### Contraejemplo 1: no se puede dividir cuando el denominador tiende a cero

Si

$$
b_n = \frac{1}{n},
$$

entonces $b_n \to 0$, pero

$$
\frac{1}{b_n} = n
$$

no converge en $\mathbb{R}$.

El problema no es la division en si, sino que el denominador se hace arbitrariamente pequeno.

### Contraejemplo 2: las leyes del limite no se aplican sin convergencia previa

La sucesion

$$
a_n = (-1)^n
$$

no converge. Entonces no tiene sentido invocar la ley del producto para concluir directamente algo sobre $a_n^2$ a partir de un limite inexistente.

En este caso concreto,

$$
a_n^2 = 1,
$$

pero eso debe verificarse por calculo directo.

### Ejemplo fino 3: producto de una sucesion acotada por otra que tiende a cero

Si

$$
a_n = (-1)^n, \qquad b_n = \frac{1}{n},
$$

entonces $(a_n)$ no converge, pero esta acotada. El producto satisface

$$
a_nb_n = \frac{(-1)^n}{n} \to 0.
$$

Aqui no hace falta que ambas sucesiones converjan; basta con que una este acotada y la otra tienda a cero.

### Ejemplo fino 4: el cociente requiere eventual separacion de cero

Si $b_n \to b$ con $b \ne 0$, entonces desde cierto indice en adelante $b_n$ ya no puede acercarse demasiado a cero. Esa es la razon tecnica por la cual el reciproco y el cociente funcionan bien bajo la hipotesis $b \ne 0$.

## Proposiciones y teoremas centrales

### Teorema 1: suma y producto por escalar

Si

$$
a_n \to a, \qquad b_n \to b,
$$

entonces:

1. $a_n+b_n \to a+b$;
2. para todo $c \in \mathbb{R}$, se tiene $ca_n \to ca$.

#### Demostracion

Primero probamos la suma. Sea $\varepsilon > 0$. Como $a_n \to a$, existe $N_1$ tal que si $n \ge N_1$, entonces

$$
|a_n-a| < \frac{\varepsilon}{2}.
$$

Como $b_n \to b$, existe $N_2$ tal que si $n \ge N_2$, entonces

$$
|b_n-b| < \frac{\varepsilon}{2}.
$$

Para $n \ge \max\{N_1,N_2\}$,

$$
|(a_n+b_n)-(a+b)| \le |a_n-a| + |b_n-b| < \varepsilon.
$$

Luego $a_n+b_n \to a+b$.

Ahora probamos el producto por escalar. Si $c=0$, entonces $ca_n=0$ para todo $n$, y el resultado es inmediato. Si $c \ne 0$, dado $\varepsilon > 0$ elegimos $N$ tal que

$$
|a_n-a| < \frac{\varepsilon}{|c|}
$$

para todo $n \ge N$. Entonces

$$
|ca_n-ca| = |c|\,|a_n-a| < \varepsilon.
$$

Por tanto $ca_n \to ca$.

### Corolario 2: diferencia

Si

$$
a_n \to a, \qquad b_n \to b,
$$

entonces

$$
a_n-b_n \to a-b.
$$

#### Demostracion

Basta escribir

$$
a_n-b_n = a_n + (-1)b_n
$$

y aplicar el teorema anterior.

### Teorema 3: producto

Si

$$
a_n \to a, \qquad b_n \to b,
$$

entonces

$$
a_nb_n \to ab.
$$

#### Demostracion

Como $(a_n)$ converge, es acotada. Luego existe $M>0$ tal que

$$
|a_n| \le M \quad \text{para todo } n.
$$

Observamos que

$$
a_nb_n-ab = a_n(b_n-b) + b(a_n-a).
$$

Por tanto

$$
|a_nb_n-ab| \le |a_n|\,|b_n-b| + |b|\,|a_n-a| \le M|b_n-b| + |b|\,|a_n-a|.
$$

Sea $\varepsilon > 0$. Si $b=0$, elegimos $N_1$ tal que

$$
|b_n-b| < \frac{\varepsilon}{2M}
$$

y $N_2$ tal que

$$
|a_n-a| < 1.
$$

Entonces para $n \ge \max\{N_1,N_2\}$ se obtiene

$$
|a_nb_n-ab| \le M|b_n| < \frac{\varepsilon}{2} < \varepsilon.
$$

Si $b \ne 0$, elegimos $N_1$ tal que

$$
|b_n-b| < \frac{\varepsilon}{2M}
$$

y $N_2$ tal que

$$
|a_n-a| < \frac{\varepsilon}{2(|b|+1)}.
$$

Entonces, para $n \ge \max\{N_1,N_2\}$,

$$
|a_nb_n-ab| \le M|b_n-b| + |b||a_n-a| < \frac{\varepsilon}{2} + \frac{|b|}{|b|+1}\frac{\varepsilon}{2} < \varepsilon.
$$

Luego $a_nb_n \to ab$.

### Teorema 4: reciproco

Si

$$
b_n \to b \quad \text{con } b \ne 0,
$$

entonces existe $N_0$ tal que $b_n \ne 0$ para todo $n \ge N_0$ y, ademas,

$$
\frac{1}{b_n} \to \frac{1}{b}.
$$

#### Demostracion

Tomemos

$$
\varepsilon_0 = \frac{|b|}{2} > 0.
$$

Como $b_n \to b$, existe $N_0$ tal que si $n \ge N_0$, entonces

$$
|b_n-b| < \frac{|b|}{2}.
$$

Por la desigualdad triangular inversa,

$$
|b_n| \ge |b| - |b_n-b| > \frac{|b|}{2}
$$

para todo $n \ge N_0$. En particular, $b_n \ne 0$ para todo $n \ge N_0$.

Ahora, para $n \ge N_0$,

$$
\left| \frac{1}{b_n} - \frac{1}{b} \right|
= \frac{|b-b_n|}{|b_n||b|}
\le \frac{2}{|b|^2}|b_n-b|.
$$

Dado $\varepsilon > 0$, elegimos $N_1$ tal que

$$
|b_n-b| < \frac{\varepsilon |b|^2}{2}
$$

para todo $n \ge N_1$. Entonces, si $n \ge \max\{N_0,N_1\}$,

$$
\left| \frac{1}{b_n} - \frac{1}{b} \right| < \varepsilon.
$$

Por tanto $(1/b_n) \to 1/b$.

### Corolario 5: cociente

Si

$$
a_n \to a, \qquad b_n \to b, \qquad b \ne 0,
$$

y $b_n \ne 0$ para todo $n$, entonces

$$
\frac{a_n}{b_n} \to \frac{a}{b}.
$$

#### Demostracion

Se escribe

$$
\frac{a_n}{b_n} = a_n \cdot \frac{1}{b_n}
$$

y se aplican el teorema del reciproco y el teorema del producto.

### Proposicion 6: valor absoluto

Si

$$
a_n \to a,
$$

entonces

$$
|a_n| \to |a|.
$$

#### Demostracion

Usamos la desigualdad

$$
\big||x|-|y|\big| \le |x-y|.
$$

Aplicandola a $x=a_n$ e $y=a$ se obtiene

$$
\big||a_n|-|a|\big| \le |a_n-a|.
$$

Como el lado derecho tiende a $0$, tambien el izquierdo tiende a $0$. Luego $|a_n| \to |a|$.

### Proposicion 7: acotada por cero

Si $(a_n)$ es acotada y $b_n \to 0$, entonces

$$
a_nb_n \to 0.
$$

#### Demostracion

Como $(a_n)$ es acotada, existe $M > 0$ tal que

$$
|a_n| \le M \quad \text{para todo } n.
$$

Entonces

$$
|a_nb_n| \le M|b_n|.
$$

Dado $\varepsilon > 0$, como $b_n \to 0$, existe $N$ tal que si $n \ge N$, entonces

$$
|b_n| < \frac{\varepsilon}{M}.
$$

Por tanto, para $n \ge N$,

$$
|a_nb_n| \le M|b_n| < \varepsilon.
$$

Luego $a_nb_n \to 0$.

## Errores comunes

1. Dividir por una sucesion cuyo limite es cero y aplicar la ley del cociente como si nada.
2. Creer que basta que el cociente tenga sentido para algunos indices; en realidad interesa que quede bien definido al menos eventualmente.
3. Suponer que si $a_nb_n$ converge entonces $a_n$ y $b_n$ convergen por separado.
4. Aplicar leyes del limite a sucesiones que no se sabe si convergen.
5. Olvidar que el producto necesita una estimacion adicional, no sale solo de sumar desigualdades.

## Resumen operativo

- La suma, diferencia y multiplicacion por escalares preservan la convergencia y operan sobre el limite esperado.
- El producto de sucesiones convergentes converge al producto de los limites.
- El reciproco funciona solo si el limite del denominador es distinto de cero.
- El cociente es producto con el reciproco.
- Si una sucesion es acotada y la otra tiende a cero, el producto tiende a cero.
- El valor absoluto es compatible con el paso al limite.

## Ejercicios

### Basicos

1. Calcula

$$
\lim_{n \to \infty} \left(\frac{1}{n} + 3\right).
$$

2. Calcula

$$
\lim_{n \to \infty} \frac{5}{n}.
$$

3. Calcula

$$
\lim_{n \to \infty} \left(2 - \frac{3}{n}\right).
$$

4. Calcula

$$
\lim_{n \to \infty} \frac{n+1}{n}.
$$

5. Calcula

$$
\lim_{n \to \infty} \left| \frac{(-1)^n}{n} \right|.
$$

### Intermedios

6. Calcula

$$
\lim_{n \to \infty} \frac{3n-1}{n}.
$$

7. Calcula

$$
\lim_{n \to \infty} \frac{(2n+1)(n-3)}{n^2}.
$$

8. Calcula

$$
\lim_{n \to \infty} \frac{3n-1}{2n+5}.
$$

9. Supongamos que $|a_n| \le 4$ para todo $n$ y que $b_n \to 0$. Demuestra que $a_nb_n \to 0$.
10. Da un ejemplo que muestre que la ley del cociente falla si el denominador converge a $0$.

### De prueba y demostracion

11. Demuestra que si $a_n \to a$ y $b_n \to b$, entonces $a_n-b_n \to a-b$.
12. Demuestra que si $a_n \to a$, entonces $a_n^2 \to a^2$.
13. Demuestra que si $b_n \to b \ne 0$, entonces existe $N$ tal que $b_n \ne 0$ para todo $n \ge N$.
14. Demuestra que si $a_n \to a$, entonces $|a_n| \to |a|$.
15. Demuestra que si $a_n \to a$ y $b_n \to b$, con $b \ne 0$, entonces

$$
\frac{a_n}{b_n} \to \frac{a}{b}.
$$

## Soluciones

### 1

Como

$$
\frac{1}{n} \to 0
$$

y la sucesion constante $3$ converge a $3$, la ley de la suma da

$$
\frac{1}{n} + 3 \to 0 + 3 = 3.
$$

### 2

Se tiene

$$
\frac{5}{n} = 5 \cdot \frac{1}{n}.
$$

Como $1/n \to 0$, la ley del producto por escalar implica

$$
\frac{5}{n} \to 0.
$$

### 3

Escribimos

$$
2 - \frac{3}{n} = 2 + \left(-\frac{3}{n}\right).
$$

Como $3/n \to 0$, se obtiene

$$
2 - \frac{3}{n} \to 2.
$$

### 4

Tenemos

$$
\frac{n+1}{n} = 1 + \frac{1}{n}.
$$

Como $1/n \to 0$, resulta

$$
\frac{n+1}{n} \to 1.
$$

### 5

Se cumple

$$
\left|\frac{(-1)^n}{n}\right| = \frac{1}{n}.
$$

Como $1/n \to 0$, se concluye que

$$
\left|\frac{(-1)^n}{n}\right| \to 0.
$$

### 6

Observamos que

$$
\frac{3n-1}{n} = 3 - \frac{1}{n}.
$$

Entonces

$$
\frac{3n-1}{n} \to 3.
$$

### 7

Factorizamos:

$$
\frac{(2n+1)(n-3)}{n^2}
= \left(2+\frac{1}{n}\right)\left(1-\frac{3}{n}\right).
$$

Cada factor converge, respectivamente, a $2$ y a $1$. Por la ley del producto,

$$
\frac{(2n+1)(n-3)}{n^2} \to 2 \cdot 1 = 2.
$$

### 8

Dividimos numerador y denominador entre $n$:

$$
\frac{3n-1}{2n+5} = \frac{3-\frac{1}{n}}{2+\frac{5}{n}}.
$$

El numerador converge a $3$ y el denominador converge a $2 \ne 0$. Por la ley del cociente,

$$
\frac{3n-1}{2n+5} \to \frac{3}{2}.
$$

### 9

Como $|a_n| \le 4$, la sucesion $(a_n)$ es acotada. Entonces

$$
|a_nb_n| \le 4|b_n|.
$$

Puesto que $b_n \to 0$, tambien $4|b_n| \to 0$. Luego, por estimacion directa o por la proposicion de producto con una sucesion acotada,

$$
a_nb_n \to 0.
$$

### 10

Un ejemplo es

$$
a_n = 1, \qquad b_n = \frac{1}{n}.
$$

Entonces

$$
a_n \to 1, \qquad b_n \to 0,
$$

pero

$$
\frac{a_n}{b_n} = n
$$

no converge en $\mathbb{R}$. Esto muestra que no se puede aplicar la ley del cociente cuando el limite del denominador es $0$.

### 11

Se escribe

$$
a_n-b_n = a_n + (-1)b_n.
$$

Como $b_n \to b$, tambien $(-1)b_n \to -b$ por la ley del producto por escalar. Aplicando la ley de la suma obtenemos

$$
a_n-b_n \to a + (-b) = a-b.
$$

### 12

Como $a_n \to a$, podemos escribir

$$
a_n^2 = a_n \cdot a_n.
$$

Aplicando la ley del producto con la misma sucesion en ambos factores,

$$
a_n^2 \to a \cdot a = a^2.
$$

### 13

Como $b_n \to b$ y $b \ne 0$, tomamos

$$
\varepsilon = \frac{|b|}{2}.
$$

Entonces existe $N$ tal que si $n \ge N$, se cumple

$$
|b_n-b| < \frac{|b|}{2}.
$$

Por la desigualdad triangular inversa,

$$
|b_n| \ge |b| - |b_n-b| > \frac{|b|}{2} > 0.
$$

Luego $b_n \ne 0$ para todo $n \ge N$.

### 14

Se usa la desigualdad

$$
\big||a_n|-|a|\big| \le |a_n-a|.
$$

Como $a_n \to a$, el lado derecho tiende a $0$. Por tanto

$$
\big||a_n|-|a|\big| \to 0,
$$

lo cual significa exactamente que

$$
|a_n| \to |a|.
$$

### 15

Como $b_n \to b \ne 0$, por el ejercicio anterior existe $N$ tal que $b_n \ne 0$ para todo $n \ge N$, y por el teorema del reciproco,

$$
\frac{1}{b_n} \to \frac{1}{b}.
$$

Entonces

$$
\frac{a_n}{b_n} = a_n \cdot \frac{1}{b_n}
$$

es producto de dos sucesiones convergentes. Aplicando la ley del producto,

$$
\frac{a_n}{b_n} \to a \cdot \frac{1}{b} = \frac{a}{b}.
$$

## Cierre

Las leyes algebraicas del limite convierten la definicion epsilon-$N$ en una herramienta util de calculo riguroso. A partir de aqui, muchas expresiones dejan de resolverse desde cero y pasan a simplificarse por reglas estructurales. Esa economia conceptual sera clave en continuidad, derivacion, series y analisis mas abstracto.
