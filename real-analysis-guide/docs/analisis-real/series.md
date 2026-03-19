---
title: Series
description: Definicion de serie como limite de sumas parciales, convergencia y divergencia, criterio de divergencia, series telescopicas y propiedades basicas. Incluye 15 ejercicios resueltos.
---

# Series

## 1. Motivacion e intuicion

Sumar dos numeros es una operacion elemental. Sumar tres, cuatro o un millon tambien: basta iterar la operacion finita. Pero sumar infinitos numeros es un salto conceptual distinto. La expresion

$$1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots$$

sugiere una suma infinita, y la intuicion dice que el resultado deberia ser $2$. Pero la expresion

$$1 + 1 + 1 + 1 + \cdots$$

claramente se desborda. La pregunta central del tema es: cuando tiene sentido asignar un valor finito a una suma infinita, y como se formaliza esa idea.

La respuesta es reducir el problema a algo que ya sabemos manejar: sucesiones. En lugar de intentar sumar infinitos terminos de golpe, se construye la sucesion de **sumas parciales** y se estudia su convergencia. Si la sucesion de sumas parciales converge, la serie converge; su limite es el valor de la serie. Si diverge, la serie diverge.

Esta reduccion convierte las series en un caso particular de la teoria de sucesiones que ya se ha desarrollado en temas anteriores. Todos los resultados sobre convergencia de sucesiones, acotamiento, Cauchy y Bolzano-Weierstrass se aplican directamente a las sumas parciales.

## 2. Prerrequisitos

**Sucesiones y convergencia.** La definicion de convergencia de una sucesion $(s_n) \to L$: para todo $\varepsilon > 0$ existe $N$ tal que $|s_n - L| < \varepsilon$ para todo $n > N$.

**Sucesiones de Cauchy.** Una sucesion $(s_n)$ es de Cauchy si para todo $\varepsilon > 0$ existe $N$ tal que $|s_n - s_m| < \varepsilon$ para todo $n, m > N$. En $\mathbb{R}$, una sucesion converge si y solo si es de Cauchy.

**Sucesiones monotona acotadas.** Toda sucesion monotona acotada converge.

**Operaciones con limites.** Si $a_n \to L$ y $b_n \to M$, entonces $a_n + b_n \to L + M$ y $c \cdot a_n \to c \cdot L$.

## 3. Definiciones formales

**Definicion 3.1 (serie).** Sea $(a_n)_{n \geq 1}$ una sucesion de numeros reales. La **serie** $\displaystyle\sum_{n=1}^{\infty} a_n$ es el par formado por la sucesion $(a_n)$ y la sucesion de **sumas parciales** $(s_N)_{N \geq 1}$ definida por

$$s_N = \sum_{n=1}^{N} a_n = a_1 + a_2 + \cdots + a_N.$$

**Definicion 3.2 (convergencia de una serie).** La serie $\displaystyle\sum_{n=1}^{\infty} a_n$ **converge** si la sucesion de sumas parciales $(s_N)$ converge. En ese caso, el **valor** o **suma** de la serie es

$$\sum_{n=1}^{\infty} a_n = \lim_{N \to \infty} s_N.$$

Si $(s_N)$ diverge, la serie **diverge**.

**Definicion 3.3 (serie divergente a $+\infty$ o $-\infty$).** Si $s_N \to +\infty$, se dice que la serie diverge a $+\infty$. Analogamente para $-\infty$.

**Definicion 3.4 (cola de una serie).** Dado $k \geq 1$, la **cola** de la serie a partir de $k$ es $\displaystyle\sum_{n=k+1}^{\infty} a_n$, que converge si y solo si la serie original converge (porque ambas difieren en la cantidad finita $s_k$). Ademas, si la serie converge,

$$\sum_{n=k+1}^{\infty} a_n = \sum_{n=1}^{\infty} a_n - s_k.$$

**Definicion 3.5 (serie telescopica).** Una serie de la forma $\displaystyle\sum_{n=1}^{\infty} (b_n - b_{n+1})$ se llama **telescopica**. Su suma parcial $N$-esima satisface

$$s_N = b_1 - b_{N+1},$$

de modo que la serie converge si y solo si $\lim_{N \to \infty} b_{N+1}$ existe, y en ese caso

$$\sum_{n=1}^{\infty} (b_n - b_{n+1}) = b_1 - \lim_{N \to \infty} b_{N+1}.$$

## 4. Interpretacion en lenguaje natural

Una serie no es una operacion aritmetica: es un proceso de limite. Cuando se escribe $\sum_{n=1}^{\infty} a_n = L$, lo que se afirma es que la sucesion de sumas parciales $s_1, s_2, s_3, \ldots$ se aproxima a $L$ tanto como se quiera. No se esta sumando infinitos numeros de golpe; se esta mostrando que la acumulacion progresiva de terminos tiende a un valor finito.

La convergencia de una serie depende de que los terminos $a_n$ se hagan suficientemente pequenos, pero eso solo no basta (la serie armonica es el contraejemplo canonico). Lo que importa es la velocidad con la que decrecen los terminos en relacion con lo rapido que se acumulan.

El criterio de divergencia dice que si los terminos no tienden a cero, la serie diverge. Pero el reciproco es falso: que los terminos tiendan a cero no garantiza convergencia.

## 5. Ejemplos basicos

**Ejemplo 5.1 (serie geometrica).** Sea $|r| < 1$. La serie $\displaystyle\sum_{n=0}^{\infty} r^n$ tiene sumas parciales

$$s_N = \frac{1 - r^{N+1}}{1 - r}.$$

Como $|r| < 1$, $r^{N+1} \to 0$ y $s_N \to \frac{1}{1 - r}$. La serie converge y su valor es $\frac{1}{1-r}$.

Para $r = 1/2$: $\displaystyle\sum_{n=0}^{\infty} \frac{1}{2^n} = \frac{1}{1 - 1/2} = 2$.

**Ejemplo 5.2 (serie telescopica clasica).** Considerar $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n(n+1)}$.

Usando fracciones parciales: $\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$.

La serie es telescopica con $b_n = \frac{1}{n}$. Entonces $s_N = 1 - \frac{1}{N+1} \to 1$.

La serie converge y $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n(n+1)} = 1$.

**Ejemplo 5.3 (serie que diverge por terminos que no tienden a cero).** $\displaystyle\sum_{n=1}^{\infty} (-1)^n$. Las sumas parciales son $-1, 0, -1, 0, \ldots$, que no convergen. El termino general $(-1)^n$ no tiende a cero.

**Ejemplo 5.4 (serie armonica).** $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n}$ diverge, a pesar de que $\frac{1}{n} \to 0$. La demostracion clasica agrupa terminos:

$$s_{2^k} \geq 1 + \frac{k}{2} \to +\infty.$$

Esto muestra que $a_n \to 0$ es necesario pero no suficiente para la convergencia.

## 6. Ejemplos finos y contraejemplos

**Ejemplo 6.1 (la convergencia no depende de un numero finito de terminos).** Si se cambian los primeros $1000$ terminos de una serie convergente, la nueva serie sigue convergiendo (posiblemente a un valor distinto). La convergencia solo depende de la cola.

**Ejemplo 6.2 (serie de terminos positivos acotada converge).** Si $a_n \geq 0$ para todo $n$, la sucesion de sumas parciales $(s_N)$ es creciente. Por el teorema de la sucesion monotona, $(s_N)$ converge si y solo si esta acotada superiormente. Asi, para series de terminos positivos, la convergencia equivale a que las sumas parciales esten acotadas.

**Ejemplo 6.3 (series con terminos alternantes pueden converger aunque la suma de valores absolutos diverja).** La serie $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots$ converge (a $\ln 2$, como se demostrara en temas posteriores), pero $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n}$ diverge. La serie converge condicionalmente, no absolutamente.

**Ejemplo 6.4 (reordenamiento que cambia la suma).** La serie alternante $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}$ converge a $\ln 2$. Sin embargo, reordenando sus terminos se puede hacer que converja a cualquier valor real prefijado (teorema de Riemann sobre reordenamientos). Esto ilustra que las sumas infinitas no se comportan como sumas finitas: el orden importa cuando la convergencia es condicional.

**Ejemplo 6.5 (serie convergente con terminos que no decrecen monotonamente).** Sea $a_n = \frac{1}{n^2}$ si $n$ es impar y $a_n = \frac{1}{n^3}$ si $n$ es par. Los terminos no forman una sucesion monotonamente decreciente, pero $a_n \leq \frac{1}{n^2}$ para todo $n$, y como $\sum \frac{1}{n^2}$ converge, la serie converge por comparacion.

## 7. Proposiciones y teoremas

### Proposicion 7.1 (criterio de divergencia)

**Enunciado.** *Si $\displaystyle\sum_{n=1}^{\infty} a_n$ converge, entonces $a_n \to 0$.*

**Contrapositivo.** *Si $a_n \not\to 0$, entonces $\displaystyle\sum_{n=1}^{\infty} a_n$ diverge.*

### Proposicion 7.2 (linealidad de series convergentes)

**Enunciado.** *Si $\displaystyle\sum a_n$ y $\displaystyle\sum b_n$ convergen, entonces para todo $\alpha, \beta \in \mathbb{R}$:*

$$\sum_{n=1}^{\infty} (\alpha a_n + \beta b_n) = \alpha \sum_{n=1}^{\infty} a_n + \beta \sum_{n=1}^{\infty} b_n.$$

### Proposicion 7.3 (criterio de Cauchy para series)

**Enunciado.** *La serie $\displaystyle\sum a_n$ converge si y solo si para todo $\varepsilon > 0$ existe $N$ tal que para todo $m > n > N$:*

$$\left|\sum_{k=n+1}^{m} a_k\right| < \varepsilon.$$

### Proposicion 7.4 (convergencia de series de terminos no negativos)

**Enunciado.** *Si $a_n \geq 0$ para todo $n$, entonces $\displaystyle\sum a_n$ converge si y solo si la sucesion de sumas parciales esta acotada superiormente.*

### Proposicion 7.5 (convergencia absoluta implica convergencia)

**Enunciado.** *Si $\displaystyle\sum |a_n|$ converge, entonces $\displaystyle\sum a_n$ converge. En ese caso se dice que la serie converge absolutamente.*

## 8. Demostraciones completas

### Demostracion de la proposicion 7.1

Supongamos que $\sum a_n$ converge a $L$. Entonces $s_N \to L$. Se tiene

$$a_N = s_N - s_{N-1}.$$

Como $s_N \to L$ y $s_{N-1} \to L$, resulta $a_N = s_N - s_{N-1} \to L - L = 0$. $\blacksquare$

### Demostracion de la proposicion 7.2

Sean $S = \sum a_n$ y $T = \sum b_n$. Las sumas parciales de $\sum (\alpha a_n + \beta b_n)$ son

$$\sigma_N = \sum_{n=1}^{N} (\alpha a_n + \beta b_n) = \alpha \sum_{n=1}^{N} a_n + \beta \sum_{n=1}^{N} b_n = \alpha \, s_N^{(a)} + \beta \, s_N^{(b)}.$$

Por las propiedades de limites de sucesiones, $\sigma_N \to \alpha S + \beta T$. $\blacksquare$

### Demostracion de la proposicion 7.3

La serie converge si y solo si la sucesion de sumas parciales $(s_N)$ es de Cauchy. Pero $|s_m - s_n| = \left|\sum_{k=n+1}^{m} a_k\right|$ para $m > n$. Asi, $(s_N)$ es de Cauchy si y solo si para todo $\varepsilon > 0$ existe $N$ tal que $\left|\sum_{k=n+1}^{m} a_k\right| < \varepsilon$ para todo $m > n > N$. $\blacksquare$

### Demostracion de la proposicion 7.4

Si $a_n \geq 0$, entonces $s_{N+1} = s_N + a_{N+1} \geq s_N$, de modo que $(s_N)$ es creciente. Por el teorema de la sucesion monotona, una sucesion creciente converge si y solo si esta acotada superiormente. $\blacksquare$

### Demostracion de la proposicion 7.5

Supongamos que $\sum |a_n|$ converge. Entonces la sucesion de sumas parciales de $\sum |a_n|$ es de Cauchy. Para $m > n$:

$$\left|\sum_{k=n+1}^{m} a_k\right| \leq \sum_{k=n+1}^{m} |a_k|.$$

Dado $\varepsilon > 0$, como $\sum |a_n|$ es de Cauchy, existe $N$ tal que $\sum_{k=n+1}^{m} |a_k| < \varepsilon$ para $m > n > N$. Entonces $\left|\sum_{k=n+1}^{m} a_k\right| < \varepsilon$ para esos mismos $m, n$. Esto dice que la sucesion de sumas parciales de $\sum a_n$ es de Cauchy, luego converge. $\blacksquare$

## 9. Errores comunes

**Error 9.1 (creer que $a_n \to 0$ implica convergencia).** La serie armonica $\sum \frac{1}{n}$ refuta esta creencia. El criterio de divergencia solo da una condicion necesaria, no suficiente.

**Error 9.2 (tratar la serie como una suma finita).** En una suma finita, el orden de los sumandos no importa. En una serie, reordenar los terminos puede cambiar el valor o incluso convertir una serie convergente en divergente (si la convergencia es condicional).

**Error 9.3 (confundir la sucesion $(a_n)$ con la serie $\sum a_n$).** La sucesion $(a_n)$ y la serie $\sum a_n$ son objetos distintos. La primera es una lista de numeros; la segunda involucra la sucesion de sumas parciales. Que $a_n$ converja no dice nada sobre si $\sum a_n$ converge, salvo que si $a_n \not\to 0$, la serie diverge.

**Error 9.4 (olvidar que la convergencia es una propiedad de la cola).** La convergencia o divergencia de una serie no depende de ningun numero finito de terminos. Cambiar los primeros $k$ terminos cambia el valor de la serie (si converge) pero no su convergencia o divergencia.

**Error 9.5 (aplicar mal el criterio de Cauchy).** El criterio de Cauchy para series dice que $|s_m - s_n|$ se hace pequeno, lo cual involucra la suma $\sum_{k=n+1}^m a_k$, no el termino individual $a_n$. No confundir con el criterio de la raiz de Cauchy (tema posterior).

**Error 9.6 (afirmar que convergencia absoluta y convergencia son lo mismo).** Convergencia absoluta implica convergencia, pero no al reves. La serie $\sum \frac{(-1)^{n+1}}{n}$ converge pero no absolutamente.

## 10. Resumen operativo

| Pregunta | Respuesta |
|----------|-----------|
| Que es una serie | El limite de la sucesion de sumas parciales $s_N = \sum_{n=1}^N a_n$ |
| Cuando converge | Cuando $(s_N)$ converge |
| Si $a_n \not\to 0$ | La serie diverge (criterio de divergencia) |
| Si $a_n \to 0$ | No se puede concluir nada; se necesitan criterios adicionales |
| Serie telescopica $\sum (b_n - b_{n+1})$ | Converge ssi $\lim b_n$ existe; valor $= b_1 - \lim b_n$ |
| Serie de terminos $\geq 0$ | Converge ssi las sumas parciales estan acotadas |
| Convergencia absoluta ($\sum |a_n|$ converge) | Implica convergencia de $\sum a_n$ |
| Linealidad | $\sum (\alpha a_n + \beta b_n) = \alpha \sum a_n + \beta \sum b_n$ si ambas convergen |

## 11. Ejercicios

**Ejercicio 1.** Determinar si la serie $\displaystyle\sum_{n=1}^{\infty} \frac{n}{n+1}$ converge o diverge.

**Ejercicio 2.** Calcular el valor de $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n(n+2)}$.

**Ejercicio 3.** Demostrar que $\displaystyle\sum_{n=1}^{\infty} \frac{1}{(2n-1)(2n+1)} = \frac{1}{2}$.

**Ejercicio 4.** Sea $a_n = \frac{3^n}{4^n}$. Determinar si $\displaystyle\sum_{n=0}^{\infty} a_n$ converge y, en caso afirmativo, calcular su valor.

**Ejercicio 5.** Demostrar que si $\displaystyle\sum a_n$ converge, entonces $\displaystyle\sum (a_n - a_{n+1})$ converge, y calcular su valor.

**Ejercicio 6.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \frac{1}{\sqrt{n}}$ converge o diverge.

**Ejercicio 7.** Sea $\displaystyle\sum_{n=1}^{\infty} a_n$ convergente con suma $S$. Demostrar que $\displaystyle\sum_{n=1}^{\infty} (a_n + a_{n+1})$ converge y calcular su valor en terminos de $S$ y $a_1$.

**Ejercicio 8.** Calcular $\displaystyle\sum_{n=2}^{\infty} \frac{1}{n^2 - 1}$.

**Ejercicio 9.** Demostrar que si $a_n \geq 0$ y $\displaystyle\sum a_n$ converge, entonces $\displaystyle\sum a_n^2$ converge.

**Ejercicio 10.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \left(\sqrt{n+1} - \sqrt{n}\right)$ converge o diverge.

**Ejercicio 11.** Sea $a_n = \frac{1}{n!}$. Demostrar que $\displaystyle\sum_{n=0}^{\infty} \frac{1}{n!}$ converge mostrando que las sumas parciales estan acotadas por $3$.

**Ejercicio 12.** Demostrar que $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n(n+1)(n+2)} = \frac{1}{4}$.

**Ejercicio 13.** Sea $(a_n)$ una sucesion tal que $a_n > 0$ y $\frac{a_{n+1}}{a_n} \geq 1$ para todo $n$. Demostrar que $\displaystyle\sum a_n$ diverge.

**Ejercicio 14.** Calcular $\displaystyle\sum_{n=0}^{\infty} \frac{(-1)^n}{3^n}$.

**Ejercicio 15.** Demostrar que si $\displaystyle\sum a_n$ y $\displaystyle\sum b_n$ convergen absolutamente, entonces $\displaystyle\sum (a_n \cdot b_n)$ converge absolutamente.

## 12. Soluciones completas

### Solucion 1

El termino general es $a_n = \frac{n}{n+1} = 1 - \frac{1}{n+1} \to 1 \neq 0$.

Por el criterio de divergencia, la serie **diverge**. $\blacksquare$

### Solucion 2

Se descompone en fracciones parciales:

$$\frac{1}{n(n+2)} = \frac{1}{2}\left(\frac{1}{n} - \frac{1}{n+2}\right).$$

La suma parcial es

$$s_N = \frac{1}{2}\sum_{n=1}^{N}\left(\frac{1}{n} - \frac{1}{n+2}\right) = \frac{1}{2}\left[\left(\frac{1}{1} - \frac{1}{3}\right) + \left(\frac{1}{2} - \frac{1}{4}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \cdots\right].$$

Esta es una serie telescopica (con desplazamiento $2$). Los terminos que sobreviven son

$$s_N = \frac{1}{2}\left(1 + \frac{1}{2} - \frac{1}{N+1} - \frac{1}{N+2}\right).$$

Tomando $N \to \infty$:

$$\sum_{n=1}^{\infty} \frac{1}{n(n+2)} = \frac{1}{2}\left(1 + \frac{1}{2}\right) = \frac{3}{4}. \quad \blacksquare$$

### Solucion 3

Fracciones parciales:

$$\frac{1}{(2n-1)(2n+1)} = \frac{1}{2}\left(\frac{1}{2n-1} - \frac{1}{2n+1}\right).$$

La suma parcial es

$$s_N = \frac{1}{2}\sum_{n=1}^{N}\left(\frac{1}{2n-1} - \frac{1}{2n+1}\right) = \frac{1}{2}\left(1 - \frac{1}{2N+1}\right).$$

Tomando $N \to \infty$: $s_N \to \frac{1}{2}(1 - 0) = \frac{1}{2}$. $\blacksquare$

### Solucion 4

Es una serie geometrica con razon $r = \frac{3}{4}$ y primer termino $1$:

$$\sum_{n=0}^{\infty} \left(\frac{3}{4}\right)^n = \frac{1}{1 - 3/4} = 4.$$

La serie **converge** y su valor es $4$. $\blacksquare$

### Solucion 5

La suma parcial de $\sum (a_n - a_{n+1})$ es telescopica:

$$\sigma_N = \sum_{n=1}^{N}(a_n - a_{n+1}) = a_1 - a_{N+1}.$$

Como $\sum a_n$ converge, $a_n \to 0$ (criterio de divergencia). Entonces $\sigma_N \to a_1 - 0 = a_1$.

La serie converge y $\displaystyle\sum_{n=1}^{\infty}(a_n - a_{n+1}) = a_1$. $\blacksquare$

### Solucion 6

Se compara con la serie armonica. Para $n \geq 1$:

$$\frac{1}{\sqrt{n}} \geq \frac{1}{n}.$$

Pero esta comparacion va en la direccion equivocada (la serie armonica diverge y nuestros terminos son mayores). Esto es justamente lo que necesitamos: como $\frac{1}{\sqrt{n}} \geq \frac{1}{n}$ y $\sum \frac{1}{n}$ diverge, las sumas parciales de $\sum \frac{1}{\sqrt{n}}$ satisfacen

$$s_N = \sum_{n=1}^{N} \frac{1}{\sqrt{n}} \geq \sum_{n=1}^{N} \frac{1}{n} \to +\infty.$$

La serie **diverge**. $\blacksquare$

### Solucion 7

Sean $S = \sum_{n=1}^{\infty} a_n$ y $\sigma_N = \sum_{n=1}^{N}(a_n + a_{n+1})$.

Se puede escribir:

$$\sigma_N = \sum_{n=1}^{N} a_n + \sum_{n=1}^{N} a_{n+1} = s_N + (s_{N+1} - a_1),$$

donde $s_N = \sum_{n=1}^{N} a_n$. Cuando $N \to \infty$, $s_N \to S$ y $s_{N+1} \to S$, luego

$$\sigma_N \to S + (S - a_1) = 2S - a_1.$$

La serie converge y $\displaystyle\sum_{n=1}^{\infty}(a_n + a_{n+1}) = 2S - a_1$. $\blacksquare$

### Solucion 8

Fracciones parciales:

$$\frac{1}{n^2 - 1} = \frac{1}{(n-1)(n+1)} = \frac{1}{2}\left(\frac{1}{n-1} - \frac{1}{n+1}\right).$$

La suma parcial (empezando en $n = 2$) es

$$s_N = \frac{1}{2}\sum_{n=2}^{N}\left(\frac{1}{n-1} - \frac{1}{n+1}\right) = \frac{1}{2}\left(\frac{1}{1} + \frac{1}{2} - \frac{1}{N} - \frac{1}{N+1}\right).$$

Tomando $N \to \infty$:

$$\sum_{n=2}^{\infty} \frac{1}{n^2 - 1} = \frac{1}{2}\left(1 + \frac{1}{2}\right) = \frac{3}{4}. \quad \blacksquare$$

### Solucion 9

Como $\sum a_n$ converge y $a_n \geq 0$, se tiene $a_n \to 0$. Existe $N$ tal que para todo $n > N$, $0 \leq a_n < 1$. Para $n > N$:

$$a_n^2 \leq a_n \quad \text{(porque } 0 \leq a_n < 1 \text{)}.$$

Entonces para $M > N$:

$$\sum_{n=N+1}^{M} a_n^2 \leq \sum_{n=N+1}^{M} a_n \leq \sum_{n=1}^{\infty} a_n < \infty.$$

Las sumas parciales de $\sum_{n=N+1}^{\infty} a_n^2$ estan acotadas, y como los terminos son no negativos, la cola converge. Entonces $\sum_{n=1}^{\infty} a_n^2$ converge (la convergencia no depende de un numero finito de terminos). $\blacksquare$

### Solucion 10

La suma parcial es

$$s_N = \sum_{n=1}^{N}\left(\sqrt{n+1} - \sqrt{n}\right) = \sqrt{N+1} - \sqrt{1} = \sqrt{N+1} - 1.$$

Como $\sqrt{N+1} \to +\infty$, la sucesion de sumas parciales diverge. La serie **diverge**. $\blacksquare$

### Solucion 11

Se tiene $0! = 1$ y para $n \geq 1$, $n! \geq 2^{n-1}$ (porque $n! = 1 \cdot 2 \cdot 3 \cdots n \geq 1 \cdot 2 \cdot 2 \cdots 2 = 2^{n-1}$). Entonces para $n \geq 1$:

$$\frac{1}{n!} \leq \frac{1}{2^{n-1}} = \frac{2}{2^n}.$$

Las sumas parciales satisfacen

$$s_N = 1 + \sum_{n=1}^{N} \frac{1}{n!} \leq 1 + \sum_{n=1}^{N} \frac{2}{2^n} = 1 + 2\sum_{n=1}^{N} \frac{1}{2^n} < 1 + 2 \cdot 1 = 3.$$

Como $(s_N)$ es creciente (todos los terminos son positivos) y esta acotada por $3$, converge. $\blacksquare$

### Solucion 12

Fracciones parciales: se buscan $A, B, C$ tales que

$$\frac{1}{n(n+1)(n+2)} = \frac{A}{n} + \frac{B}{n+1} + \frac{C}{n+2}.$$

Resolviendo: $A = \frac{1}{2}$, $B = -1$, $C = \frac{1}{2}$. Entonces

$$\frac{1}{n(n+1)(n+2)} = \frac{1}{2}\left(\frac{1}{n} - \frac{2}{n+1} + \frac{1}{n+2}\right) = \frac{1}{2}\left(\frac{1}{n(n+1)} - \frac{1}{(n+1)(n+2)}\right).$$

La serie es telescopica:

$$s_N = \frac{1}{2}\left(\frac{1}{1 \cdot 2} - \frac{1}{(N+1)(N+2)}\right) \to \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}. \quad \blacksquare$$

### Solucion 13

Como $a_n > 0$ y $\frac{a_{n+1}}{a_n} \geq 1$, la sucesion $(a_n)$ es creciente. Ademas, $a_n \geq a_1 > 0$ para todo $n$. En particular, $a_n \not\to 0$.

Por el criterio de divergencia, $\sum a_n$ **diverge**. $\blacksquare$

### Solucion 14

Es una serie geometrica con primer termino $1$ y razon $r = -\frac{1}{3}$. Como $|r| = \frac{1}{3} < 1$:

$$\sum_{n=0}^{\infty} \frac{(-1)^n}{3^n} = \sum_{n=0}^{\infty}\left(-\frac{1}{3}\right)^n = \frac{1}{1 - (-1/3)} = \frac{1}{4/3} = \frac{3}{4}. \quad \blacksquare$$

### Solucion 15

Se tiene $|a_n \cdot b_n| = |a_n| \cdot |b_n|$. Como $\sum |b_n|$ converge, $|b_n| \to 0$, luego existe $N$ tal que $|b_n| \leq 1$ para $n > N$. Para esos $n$:

$$|a_n \cdot b_n| = |a_n| \cdot |b_n| \leq |a_n|.$$

Como $\sum |a_n|$ converge, por comparacion $\sum_{n=N+1}^{\infty} |a_n \cdot b_n|$ converge. Entonces $\sum_{n=1}^{\infty} |a_n \cdot b_n|$ converge (agregar finitos terminos no afecta la convergencia). $\blacksquare$
