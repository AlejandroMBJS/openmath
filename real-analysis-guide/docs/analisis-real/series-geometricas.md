---
title: Series geometricas
description: Serie geometrica, formula de la suma, convergencia segun la razon, aplicaciones a fracciones parciales y series desplazadas. Incluye 15 ejercicios resueltos.
---

# Series geometricas

## 1. Motivacion e intuicion

La serie geometrica es la serie mas simple cuyo comportamiento se puede calcular de forma cerrada. La idea es que cada termino se obtiene multiplicando el anterior por una constante $r$, la razon:

$$a, \, ar, \, ar^2, \, ar^3, \, \ldots$$

Si $|r| < 1$, cada termino es una fraccion del anterior, y la acumulacion total permanece finita. Si $|r| \geq 1$, los terminos no se encogen (o crecen) y la suma se desborda.

La serie geometrica aparece constantemente en matematicas, fisica e ingenieria: desde la suma de probabilidades en cadenas de Markov hasta la expansion en serie de funciones racionales. Muchas series mas complicadas se estudian comparandolas con series geometricas.

## 2. Prerrequisitos

**Series.** Definicion de serie como limite de sumas parciales. Criterio de divergencia ($a_n \not\to 0$ implica divergencia). Convergencia de series de terminos no negativos por acotamiento de sumas parciales.

**Limites de sucesiones.** Si $|r| < 1$, entonces $r^n \to 0$. Si $|r| > 1$, entonces $|r^n| \to +\infty$. Si $r = 1$, $r^n = 1$. Si $r = -1$, $r^n$ oscila.

**Identidad algebraica.** Para $r \neq 1$:

$$1 + r + r^2 + \cdots + r^N = \frac{1 - r^{N+1}}{1 - r}.$$

Esta identidad se demuestra multiplicando ambos lados por $(1 - r)$ y verificando que el telescopio colapsa.

## 3. Definiciones formales

**Definicion 3.1 (serie geometrica).** Dado $a \in \mathbb{R}$ con $a \neq 0$ y $r \in \mathbb{R}$, la **serie geometrica** de primer termino $a$ y razon $r$ es

$$\sum_{n=0}^{\infty} ar^n = a + ar + ar^2 + ar^3 + \cdots$$

**Definicion 3.2 (sumas parciales de la serie geometrica).** La $N$-esima suma parcial es

$$s_N = \sum_{n=0}^{N} ar^n = \begin{cases} a \cdot \dfrac{1 - r^{N+1}}{1 - r} & \text{si } r \neq 1, \\[6pt] a(N+1) & \text{si } r = 1. \end{cases}$$

**Teorema 3.3 (convergencia de la serie geometrica).** La serie $\displaystyle\sum_{n=0}^{\infty} ar^n$ converge si y solo si $|r| < 1$. En ese caso,

$$\sum_{n=0}^{\infty} ar^n = \frac{a}{1 - r}.$$

Si $|r| \geq 1$ (y $a \neq 0$), la serie diverge.

## 4. Interpretacion en lenguaje natural

La serie geometrica funciona como una regla de acumulacion con rendimientos decrecientes. Si cada paso aporta una fraccion $r$ de lo que aporto el paso anterior, y esa fraccion es menor que $1$ en valor absoluto, la contribucion total es finita y se puede calcular exactamente.

La formula $\frac{a}{1-r}$ tiene una lectura directa: el primer termino $a$ se amplifica por el factor $\frac{1}{1-r}$, que mide cuanto se acumula por el efecto de la razon $r$. Cuando $r$ esta cerca de $1$, el amplificador es grande y la serie converge lentamente. Cuando $r$ esta cerca de $0$, el amplificador es cercano a $1$ y la serie converge rapido.

Para $|r| \geq 1$, los terminos individuales no decrecen a cero (o no lo hacen en modulo), y el criterio de divergencia garantiza que la serie diverge.

## 5. Ejemplos basicos

**Ejemplo 5.1.** $\displaystyle\sum_{n=0}^{\infty} \frac{1}{2^n} = \frac{1}{1 - 1/2} = 2.$

**Ejemplo 5.2.** $\displaystyle\sum_{n=0}^{\infty} \left(-\frac{1}{3}\right)^n = \frac{1}{1 - (-1/3)} = \frac{1}{4/3} = \frac{3}{4}.$

**Ejemplo 5.3.** $\displaystyle\sum_{n=0}^{\infty} \left(\frac{2}{3}\right)^n = \frac{1}{1 - 2/3} = 3.$

**Ejemplo 5.4 (serie que empieza en $n = 1$).** $\displaystyle\sum_{n=1}^{\infty} \frac{1}{2^n} = \sum_{n=0}^{\infty} \frac{1}{2^n} - 1 = 2 - 1 = 1.$

Alternativamente, $\displaystyle\sum_{n=1}^{\infty} \frac{1}{2^n} = \frac{1/2}{1 - 1/2} = 1$ (serie geometrica con primer termino $a = 1/2$ y razon $r = 1/2$).

**Ejemplo 5.5 (serie que empieza en $n = k$).** $\displaystyle\sum_{n=k}^{\infty} ar^n = ar^k + ar^{k+1} + \cdots = ar^k \cdot \sum_{n=0}^{\infty} r^n = \frac{ar^k}{1-r}$ si $|r| < 1$.

## 6. Ejemplos finos y contraejemplos

**Ejemplo 6.1 (razon negativa con $|r| < 1$).** $\displaystyle\sum_{n=0}^{\infty} \frac{(-1)^n}{2^n} = \sum_{n=0}^{\infty}\left(-\frac{1}{2}\right)^n = \frac{1}{1+1/2} = \frac{2}{3}.$

Las sumas parciales alternan por encima y por debajo del limite: $s_0 = 1$, $s_1 = 1/2$, $s_2 = 3/4$, $s_3 = 5/8$, acercandose a $2/3$.

**Ejemplo 6.2 ($r = 1$).** $\displaystyle\sum_{n=0}^{\infty} 1 = 1 + 1 + 1 + \cdots$. Las sumas parciales $s_N = N + 1 \to +\infty$. Diverge.

**Ejemplo 6.3 ($r = -1$).** $\displaystyle\sum_{n=0}^{\infty} (-1)^n = 1 - 1 + 1 - 1 + \cdots$. Las sumas parciales son $1, 0, 1, 0, \ldots$, que no convergen. Diverge.

**Ejemplo 6.4 ($|r| > 1$).** $\displaystyle\sum_{n=0}^{\infty} 2^n$. Como $2^n \to +\infty \neq 0$, la serie diverge por el criterio de divergencia.

**Ejemplo 6.5 (fraccion decimal periodica como serie geometrica).** El numero $0.333\ldots = \frac{3}{10} + \frac{3}{100} + \frac{3}{1000} + \cdots = \frac{3/10}{1 - 1/10} = \frac{3}{9} = \frac{1}{3}$.

Mas general: $0.\overline{d_1 d_2 \cdots d_k}$ es una serie geometrica con razon $r = 10^{-k}$.

**Ejemplo 6.6 (suma parcial como estimacion del error).** Si $|r| < 1$, el error al aproximar $\frac{a}{1-r}$ con $s_N$ es

$$\left|\frac{a}{1-r} - s_N\right| = \left|\frac{ar^{N+1}}{1-r}\right| = \frac{|a| \cdot |r|^{N+1}}{|1-r|}.$$

Para $a = 1$, $r = 0.1$: el error tras $5$ terminos es $\frac{(0.1)^6}{0.9} \approx 1.1 \times 10^{-6}$. La convergencia es exponencialmente rapida.

## 7. Proposiciones y teoremas

### Teorema 7.1 (formula cerrada y convergencia)

**Enunciado.** *Sea $a \neq 0$ y $r \in \mathbb{R}$. La serie $\displaystyle\sum_{n=0}^{\infty} ar^n$ converge si y solo si $|r| < 1$, y en ese caso su suma es $\dfrac{a}{1-r}$.*

### Proposicion 7.2 (formula para la cola)

**Enunciado.** *Si $|r| < 1$, la cola a partir del termino $k$ satisface*

$$\sum_{n=k}^{\infty} ar^n = \frac{ar^k}{1-r}.$$

### Proposicion 7.3 (derivacion formal de la serie geometrica)

**Enunciado.** *Si $|r| < 1$, entonces*

$$\sum_{n=1}^{\infty} nr^{n-1} = \frac{1}{(1-r)^2}.$$

*Esta identidad se obtiene derivando termino a termino la serie $\sum r^n = \frac{1}{1-r}$.*

### Proposicion 7.4 (suma de dos series geometricas)

**Enunciado.** *Si $|r| < 1$ y $|s| < 1$, entonces*

$$\sum_{n=0}^{\infty} (ar^n + bs^n) = \frac{a}{1-r} + \frac{b}{1-s}.$$

## 8. Demostraciones completas

### Demostracion del teorema 7.1

**Caso $r = 1$:** $s_N = a(N+1) \to \pm\infty$ (segun el signo de $a$). La serie diverge.

**Caso $r \neq 1$:** La suma parcial es

$$s_N = a \cdot \frac{1 - r^{N+1}}{1 - r}.$$

Se analiza $\lim_{N\to\infty} r^{N+1}$:

- Si $|r| < 1$: $r^{N+1} \to 0$, luego $s_N \to \frac{a}{1-r}$. La serie converge.
- Si $|r| > 1$: $|r^{N+1}| \to +\infty$, luego $|s_N| \to +\infty$. La serie diverge.
- Si $r = -1$: $r^{N+1}$ alterna entre $-1$ y $1$, y $s_N$ alterna entre $0$ y $a$. La serie diverge (las sumas parciales no convergen).

Se cubre todos los casos: la serie converge $\iff$ $|r| < 1$, y el valor es $\frac{a}{1-r}$. $\blacksquare$

### Demostracion de la proposicion 7.2

$$\sum_{n=k}^{\infty} ar^n = a \sum_{n=k}^{\infty} r^n = a \cdot r^k \sum_{n=0}^{\infty} r^n = a \cdot r^k \cdot \frac{1}{1-r} = \frac{ar^k}{1-r}. \quad \blacksquare$$

### Demostracion de la proposicion 7.3

Para $|r| < 1$, sea $f(r) = \sum_{n=0}^{\infty} r^n = \frac{1}{1-r}$. Derivando formalmente respecto a $r$:

$$f'(r) = \sum_{n=1}^{\infty} nr^{n-1}.$$

Por otro lado, $f'(r) = \frac{d}{dr}\frac{1}{1-r} = \frac{1}{(1-r)^2}$.

La derivacion termino a termino es valida porque la serie de potencias $\sum r^n$ converge uniformemente en $[-\rho, \rho]$ para todo $0 < \rho < 1$, y las series de potencias se pueden derivar termino a termino dentro de su intervalo de convergencia. $\blacksquare$

### Demostracion de la proposicion 7.4

Es consecuencia directa de la linealidad de series convergentes:

$$\sum_{n=0}^{\infty}(ar^n + bs^n) = \sum_{n=0}^{\infty} ar^n + \sum_{n=0}^{\infty} bs^n = \frac{a}{1-r} + \frac{b}{1-s}. \quad \blacksquare$$

## 9. Errores comunes

**Error 9.1 (usar la formula con $|r| \geq 1$).** La formula $\frac{a}{1-r}$ solo es valida cuando $|r| < 1$. Sustituir $r = 2$ y obtener $\frac{1}{1-2} = -1$ como "suma" de $1 + 2 + 4 + 8 + \cdots$ no tiene sentido en el marco de series convergentes.

**Error 9.2 (confundir el indice inicial).** $\displaystyle\sum_{n=0}^{\infty} ar^n = \frac{a}{1-r}$, pero $\displaystyle\sum_{n=1}^{\infty} ar^n = \frac{ar}{1-r}$. El primer termino de la serie determina el valor. Un error frecuente es usar $\frac{a}{1-r}$ cuando la serie empieza en $n = 1$.

**Error 9.3 (confundir primer termino con razon).** En $\displaystyle\sum_{n=0}^{\infty} 5 \cdot 3^n$, el primer termino es $a = 5$ y la razon es $r = 3$. Como $|r| = 3 > 1$, la serie diverge. El error seria aplicar $\frac{5}{1-3}$ ignorando la condicion de convergencia.

**Error 9.4 (ignorar el signo de $r$).** Para $r = -1/2$, la serie converge ($|r| = 1/2 < 1$) y su suma es $\frac{a}{1-(-1/2)} = \frac{a}{3/2} = \frac{2a}{3}$. El error es olvidar el signo en el denominador.

**Error 9.5 (creer que la serie geometrica cubre todas las series).** La serie geometrica es un caso muy particular. No toda serie convergente es geometrica ni puede evaluarse con la formula $\frac{a}{1-r}$.

## 10. Resumen operativo

| Situacion | Resultado |
|-----------|-----------|
| $\displaystyle\sum_{n=0}^{\infty} ar^n$ con $\|r\| < 1$ | Converge a $\dfrac{a}{1-r}$ |
| $\displaystyle\sum_{n=k}^{\infty} ar^n$ con $\|r\| < 1$ | Converge a $\dfrac{ar^k}{1-r}$ |
| $\|r\| \geq 1$, $a \neq 0$ | Diverge |
| Error tras $N$ terminos | $\dfrac{\|a\| \cdot \|r\|^{N+1}}{\|1-r\|}$ |
| $\displaystyle\sum_{n=1}^{\infty} nr^{n-1}$ con $\|r\| < 1$ | $\dfrac{1}{(1-r)^2}$ |

**Receta practica:** identificar el primer termino $a$ y la razon $r$; verificar $|r| < 1$; aplicar la formula.

## 11. Ejercicios

**Ejercicio 1.** Calcular $\displaystyle\sum_{n=0}^{\infty} \frac{5}{7^n}$.

**Ejercicio 2.** Calcular $\displaystyle\sum_{n=2}^{\infty} \frac{3}{4^n}$.

**Ejercicio 3.** Determinar para que valores de $x \in \mathbb{R}$ converge $\displaystyle\sum_{n=0}^{\infty} (2x)^n$, y calcular la suma en funcion de $x$.

**Ejercicio 4.** Expresar $0.\overline{27}$ como fraccion irreducible usando una serie geometrica.

**Ejercicio 5.** Calcular $\displaystyle\sum_{n=0}^{\infty} \frac{2^n + 3^n}{5^n}$.

**Ejercicio 6.** Calcular $\displaystyle\sum_{n=1}^{\infty} \frac{n}{3^n}$.

**Ejercicio 7.** Demostrar que $\displaystyle\sum_{n=0}^{\infty} r^{2n} = \frac{1}{1-r^2}$ para $|r| < 1$.

**Ejercicio 8.** Calcular $\displaystyle\sum_{n=0}^{\infty} \frac{(-1)^n}{4^n}$.

**Ejercicio 9.** Sea $|r| < 1$. Demostrar que $\displaystyle\sum_{n=0}^{\infty} r^n - \sum_{n=0}^{\infty} r^{n+1} = 1$.

**Ejercicio 10.** Calcular $\displaystyle\sum_{n=3}^{\infty} \frac{2}{(-3)^n}$.

**Ejercicio 11.** Demostrar que si $|r| < 1$, entonces $\displaystyle\sum_{n=0}^{\infty}(n+1)r^n = \frac{1}{(1-r)^2}$.

**Ejercicio 12.** Calcular $\displaystyle\sum_{n=0}^{\infty} \frac{3^n - 1}{4^n}$.

**Ejercicio 13.** Determinar el menor $N$ tal que $\displaystyle\sum_{n=0}^{N}\left(\frac{1}{2}\right)^n > 1.99$.

**Ejercicio 14.** Demostrar que $\displaystyle\sum_{n=0}^{\infty} \frac{r^n}{2^n} = \frac{2}{2-r}$ para $|r| < 2$.

**Ejercicio 15.** Calcular $\displaystyle\sum_{n=1}^{\infty} \left(\frac{1}{2^n} + \frac{1}{3^n}\right)$ y verificar que es la suma de las dos series geometricas individuales.

## 12. Soluciones completas

### Solucion 1

Serie geometrica con $a = 5$ y $r = \frac{1}{7}$. Como $|r| < 1$:

$$\sum_{n=0}^{\infty} \frac{5}{7^n} = \frac{5}{1 - 1/7} = \frac{5}{6/7} = \frac{35}{6}. \quad \blacksquare$$

### Solucion 2

Se extrae la cola: $\displaystyle\sum_{n=2}^{\infty} \frac{3}{4^n} = 3 \sum_{n=2}^{\infty}\left(\frac{1}{4}\right)^n$.

Usando la formula de la cola con $a = 1$, $r = 1/4$, $k = 2$:

$$3 \cdot \frac{(1/4)^2}{1 - 1/4} = 3 \cdot \frac{1/16}{3/4} = 3 \cdot \frac{1}{12} = \frac{1}{4}. \quad \blacksquare$$

### Solucion 3

La serie $\sum (2x)^n$ es geometrica con razon $r = 2x$. Converge $\iff$ $|2x| < 1 \iff |x| < \frac{1}{2}$.

Para $|x| < \frac{1}{2}$:

$$\sum_{n=0}^{\infty} (2x)^n = \frac{1}{1 - 2x}. \quad \blacksquare$$

### Solucion 4

$$0.\overline{27} = \frac{27}{100} + \frac{27}{10000} + \frac{27}{1000000} + \cdots = \sum_{n=1}^{\infty} \frac{27}{100^n}.$$

Serie geometrica con $a = \frac{27}{100}$ y $r = \frac{1}{100}$:

$$0.\overline{27} = \frac{27/100}{1 - 1/100} = \frac{27/100}{99/100} = \frac{27}{99} = \frac{3}{11}. \quad \blacksquare$$

### Solucion 5

Por linealidad:

$$\sum_{n=0}^{\infty} \frac{2^n + 3^n}{5^n} = \sum_{n=0}^{\infty}\left(\frac{2}{5}\right)^n + \sum_{n=0}^{\infty}\left(\frac{3}{5}\right)^n = \frac{1}{1-2/5} + \frac{1}{1-3/5} = \frac{5}{3} + \frac{5}{2} = \frac{25}{6}. \quad \blacksquare$$

### Solucion 6

Se usa la derivada de la serie geometrica. Se sabe que

$$\sum_{n=0}^{\infty} r^n = \frac{1}{1-r} \implies \sum_{n=1}^{\infty} nr^{n-1} = \frac{1}{(1-r)^2}.$$

Multiplicando por $r$:

$$\sum_{n=1}^{\infty} nr^n = \frac{r}{(1-r)^2}.$$

Con $r = 1/3$:

$$\sum_{n=1}^{\infty} \frac{n}{3^n} = \frac{1/3}{(1-1/3)^2} = \frac{1/3}{4/9} = \frac{3}{4}. \quad \blacksquare$$

### Solucion 7

Sea $s = r^2$. Como $|r| < 1$, se tiene $|s| = r^2 < 1$. Entonces

$$\sum_{n=0}^{\infty} r^{2n} = \sum_{n=0}^{\infty} s^n = \frac{1}{1-s} = \frac{1}{1-r^2}. \quad \blacksquare$$

### Solucion 8

Serie geometrica con $a = 1$ y $r = -\frac{1}{4}$:

$$\sum_{n=0}^{\infty} \frac{(-1)^n}{4^n} = \frac{1}{1-(-1/4)} = \frac{1}{5/4} = \frac{4}{5}. \quad \blacksquare$$

### Solucion 9

$$\sum_{n=0}^{\infty} r^n - \sum_{n=0}^{\infty} r^{n+1} = \frac{1}{1-r} - \frac{r}{1-r} = \frac{1-r}{1-r} = 1. \quad \blacksquare$$

### Solucion 10

$$\sum_{n=3}^{\infty} \frac{2}{(-3)^n} = 2 \sum_{n=3}^{\infty}\left(-\frac{1}{3}\right)^n.$$

Cola con $r = -1/3$, $k = 3$:

$$2 \cdot \frac{(-1/3)^3}{1-(-1/3)} = 2 \cdot \frac{-1/27}{4/3} = 2 \cdot \frac{-1}{36} = -\frac{1}{18}. \quad \blacksquare$$

### Solucion 11

Partiendo de $\displaystyle\sum_{n=0}^{\infty} r^n = \frac{1}{1-r}$ para $|r| < 1$, se deriva respecto a $r$:

$$\sum_{n=1}^{\infty} nr^{n-1} = \frac{1}{(1-r)^2}.$$

Entonces

$$\sum_{n=0}^{\infty}(n+1)r^n = \sum_{n=0}^{\infty} nr^n + \sum_{n=0}^{\infty} r^n = \frac{r}{(1-r)^2} + \frac{1}{1-r} = \frac{r + (1-r)}{(1-r)^2} = \frac{1}{(1-r)^2}. \quad \blacksquare$$

### Solucion 12

$$\sum_{n=0}^{\infty}\frac{3^n - 1}{4^n} = \sum_{n=0}^{\infty}\left(\frac{3}{4}\right)^n - \sum_{n=0}^{\infty}\frac{1}{4^n} = \frac{1}{1-3/4} - \frac{1}{1-1/4} = 4 - \frac{4}{3} = \frac{8}{3}. \quad \blacksquare$$

### Solucion 13

Se necesita $s_N > 1.99$ donde $s_N = 2(1 - 2^{-(N+1)}) = 2 - 2^{-N}$.

La condicion es $2 - 2^{-N} > 1.99$, es decir, $2^{-N} < 0.01$, o sea $2^N > 100$.

Como $2^6 = 64 < 100$ y $2^7 = 128 > 100$, el menor $N$ es $\boxed{7}$. $\blacksquare$

### Solucion 14

$$\sum_{n=0}^{\infty}\frac{r^n}{2^n} = \sum_{n=0}^{\infty}\left(\frac{r}{2}\right)^n.$$

Esta es una serie geometrica con razon $\frac{r}{2}$. Converge $\iff$ $\left|\frac{r}{2}\right| < 1 \iff |r| < 2$. En ese caso:

$$\sum_{n=0}^{\infty}\left(\frac{r}{2}\right)^n = \frac{1}{1-r/2} = \frac{2}{2-r}. \quad \blacksquare$$

### Solucion 15

$$\sum_{n=1}^{\infty}\left(\frac{1}{2^n} + \frac{1}{3^n}\right) = \sum_{n=1}^{\infty}\frac{1}{2^n} + \sum_{n=1}^{\infty}\frac{1}{3^n}.$$

Cada una es una serie geometrica que empieza en $n = 1$:

$$\sum_{n=1}^{\infty}\frac{1}{2^n} = \frac{1/2}{1-1/2} = 1, \qquad \sum_{n=1}^{\infty}\frac{1}{3^n} = \frac{1/3}{1-1/3} = \frac{1}{2}.$$

Sumando: $1 + \frac{1}{2} = \frac{3}{2}$.

Verificacion directa: los primeros terminos son $\frac{1}{2} + \frac{1}{3} = \frac{5}{6}$, $\frac{1}{4} + \frac{1}{9} = \frac{13}{36}$, $\frac{1}{8} + \frac{1}{27} = \frac{35}{216}$, cuya suma parcial es $\frac{5}{6} + \frac{13}{36} + \frac{35}{216} \approx 0.833 + 0.361 + 0.162 = 1.356$, que se acerca a $\frac{3}{2} = 1.5$ como se espera. $\blacksquare$
