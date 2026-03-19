---
title: Criterios de comparacion y condensacion
description: Criterio de comparacion directa, criterio de comparacion en el limite, criterio de condensacion de Cauchy y aplicaciones a series p. Incluye 15 ejercicios resueltos.
---

# Criterios de comparacion y condensacion

## 1. Motivacion e intuicion

La serie geometrica tiene una formula cerrada y su convergencia es inmediata. Pero la mayoria de las series no admiten un calculo directo de la suma. Para decidir si convergen o divergen se necesitan criterios que comparen una serie desconocida con otra cuyo comportamiento ya se conoce.

La idea mas natural es la comparacion directa: si los terminos de una serie son menores que los de una serie convergente, la primera tambien converge. Si son mayores que los de una serie divergente, la primera tambien diverge. Es como decir: si cabe debajo de algo finito, es finito; si esta por encima de algo infinito, es infinito.

El criterio de comparacion en el limite refina esta idea para los casos en que la comparacion directa no es inmediata. Si dos series de terminos positivos tienen terminos que crecen a la misma velocidad (su cociente tiende a una constante positiva finita), entonces ambas convergen o ambas divergen.

El criterio de condensacion de Cauchy ataca series monotonamente decrecientes agrupando terminos en bloques de tamano $2^n$. Transforma la serie original en otra cuya convergencia es mas facil de analizar, y es la herramienta natural para resolver la convergencia de las series $p$.

## 2. Prerrequisitos

**Series de terminos no negativos.** Si $a_n \geq 0$, la sucesion de sumas parciales es creciente y la serie converge si y solo si las sumas parciales estan acotadas.

**Serie geometrica.** $\sum r^n$ converge si $|r| < 1$.

**Serie armonica.** $\sum \frac{1}{n}$ diverge.

**Limites de sucesiones.** Propiedades de limites, en particular que si $\frac{a_n}{b_n} \to L > 0$ con $a_n, b_n > 0$, entonces para $n$ grande se tiene $\frac{L}{2} \cdot b_n \leq a_n \leq 2L \cdot b_n$ (o cualquier otro margen proporcional a $L$).

## 3. Definiciones formales

**Definicion 3.1 (series $p$).** Para $p \in \mathbb{R}$, la **serie $p$** es

$$\sum_{n=1}^{\infty} \frac{1}{n^p}.$$

La serie armonica corresponde a $p = 1$.

**Definicion 3.2 (comparacion directa).** Sean $\sum a_n$ y $\sum b_n$ series con $a_n, b_n \geq 0$. Decimos que $\sum a_n$ esta **dominada** por $\sum b_n$ si existe $N$ tal que $a_n \leq b_n$ para todo $n > N$.

**Definicion 3.3 (equivalencia asintotica).** Dos sucesiones positivas $(a_n)$ y $(b_n)$ son **asintoticamente equivalentes**, escrito $a_n \sim b_n$, si $\frac{a_n}{b_n} \to 1$.

## 4. Interpretacion en lenguaje natural

**Comparacion directa.** Si tu serie esta termino a termino por debajo de otra que converge, la tuya tambien converge porque acumula menos. Si esta por encima de otra que diverge, la tuya tambien diverge porque acumula al menos tanto.

**Comparacion en el limite.** Si los terminos de dos series se comportan proporcionalmente para $n$ grande (su cociente tiende a una constante positiva), entonces las dos series tienen el mismo destino: ambas convergen o ambas divergen.

**Condensacion.** Si los terminos decrecen, los bloques de $2^n$ terminos consecutivos se pueden reemplazar por $2^n$ copias del termino mas grande del bloque. Esto transforma la serie en otra mas sencilla cuya convergencia es equivalente.

## 5. Ejemplos basicos

**Ejemplo 5.1 (comparacion directa para convergencia).** La serie $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^2 + n}$ converge porque $\frac{1}{n^2 + n} < \frac{1}{n^2}$ para todo $n \geq 1$, y $\sum \frac{1}{n^2}$ converge.

**Ejemplo 5.2 (comparacion directa para divergencia).** La serie $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n - 1/2}$ diverge porque $\frac{1}{n - 1/2} > \frac{1}{n}$ para todo $n \geq 1$, y $\sum \frac{1}{n}$ diverge.

**Ejemplo 5.3 (comparacion en el limite).** $\displaystyle\sum_{n=1}^{\infty} \frac{n+3}{n^3 - n + 1}$.

Se compara con $\frac{1}{n^2}$: $\frac{(n+3)/(n^3-n+1)}{1/n^2} = \frac{n^2(n+3)}{n^3-n+1} = \frac{n^3 + 3n^2}{n^3 - n + 1} \to 1$.

Como el limite es $1 > 0$ y $\sum \frac{1}{n^2}$ converge, la serie original converge.

**Ejemplo 5.4 (condensacion para la serie armonica).** La serie condensada de $\sum \frac{1}{n}$ es $\sum 2^n \cdot \frac{1}{2^n} = \sum 1$, que diverge. Entonces $\sum \frac{1}{n}$ diverge.

## 6. Ejemplos finos y contraejemplos

**Ejemplo 6.1 (la comparacion directa requiere la desigualdad correcta).** $\frac{1}{n^2} \leq \frac{1}{n}$ para todo $n$, pero esto no dice nada sobre la convergencia de $\sum \frac{1}{n^2}$: estar debajo de una serie divergente no implica nada. El criterio de comparacion funciona en una sola direccion: debajo de convergente da convergencia; encima de divergente da divergencia.

**Ejemplo 6.2 (comparacion en el limite con $L = 0$).** Si $\frac{a_n}{b_n} \to 0$ con $b_n > 0$ y $\sum b_n$ converge, entonces $\sum a_n$ converge. Pero si $\sum b_n$ diverge, no se puede concluir nada.

Por ejemplo, $a_n = \frac{1}{n^2}$ y $b_n = \frac{1}{n}$: $\frac{a_n}{b_n} = \frac{1}{n} \to 0$, $\sum b_n$ diverge, pero $\sum a_n$ converge.

**Ejemplo 6.3 (comparacion en el limite con $L = \infty$).** Si $\frac{a_n}{b_n} \to +\infty$ y $\sum b_n$ diverge, entonces $\sum a_n$ diverge. Pero si $\sum b_n$ converge, no se puede concluir.

**Ejemplo 6.4 (series $p$: frontera en $p = 1$).** Por condensacion se demuestra que $\sum \frac{1}{n^p}$ converge si $p > 1$ y diverge si $p \leq 1$. La frontera exacta es $p = 1$. Para $p = 1.001$, la serie converge; para $p = 0.999$, diverge. Esto muestra que la convergencia es sensible a cambios minimos en la velocidad de decrecimiento.

**Ejemplo 6.5 (la condicion de decrecimiento es necesaria en condensacion).** El criterio de condensacion de Cauchy requiere que $(a_n)$ sea decreciente. Si no lo es, la equivalencia puede fallar. Por ejemplo, la sucesion definida por $a_{2^n} = \frac{1}{2^n}$ y $a_k = 0$ para $k$ no potencia de $2$ es no decreciente en general, y la serie $\sum a_n = \sum_{n=0}^{\infty} \frac{1}{2^n} = 2$ converge, pero el argumento de condensacion no se aplica directamente sin la hipotesis de monotonia.

## 7. Proposiciones y teoremas

### Teorema 7.1 (criterio de comparacion directa)

**Enunciado.** *Sean $\sum a_n$ y $\sum b_n$ series con $0 \leq a_n \leq b_n$ para todo $n \geq N_0$.*

1. *Si $\sum b_n$ converge, entonces $\sum a_n$ converge.*
2. *Si $\sum a_n$ diverge, entonces $\sum b_n$ diverge.*

### Teorema 7.2 (criterio de comparacion en el limite)

**Enunciado.** *Sean $\sum a_n$ y $\sum b_n$ series con $a_n, b_n > 0$ y*

$$L = \lim_{n \to \infty} \frac{a_n}{b_n}.$$

1. *Si $0 < L < \infty$, entonces $\sum a_n$ y $\sum b_n$ tienen el mismo caracter (ambas convergen o ambas divergen).*
2. *Si $L = 0$ y $\sum b_n$ converge, entonces $\sum a_n$ converge.*
3. *Si $L = +\infty$ y $\sum b_n$ diverge, entonces $\sum a_n$ diverge.*

### Teorema 7.3 (criterio de condensacion de Cauchy)

**Enunciado.** *Sea $(a_n)$ una sucesion decreciente con $a_n \geq 0$. La serie $\displaystyle\sum_{n=1}^{\infty} a_n$ converge si y solo si la serie condensada $\displaystyle\sum_{k=0}^{\infty} 2^k a_{2^k}$ converge.*

### Corolario 7.4 (series $p$)

**Enunciado.** *La serie $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^p}$ converge si $p > 1$ y diverge si $p \leq 1$.*

## 8. Demostraciones completas

### Demostracion del teorema 7.1

Sin perdida de generalidad supongamos $0 \leq a_n \leq b_n$ para todo $n \geq 1$.

**(1)** Supongamos $\sum b_n$ converge. Las sumas parciales de $\sum a_n$ satisfacen

$$S_N^{(a)} = \sum_{n=1}^{N} a_n \leq \sum_{n=1}^{N} b_n = S_N^{(b)} \leq \sum_{n=1}^{\infty} b_n < \infty.$$

Como $a_n \geq 0$, la sucesion $S_N^{(a)}$ es creciente y acotada superiormente, luego converge.

**(2)** Es el contrapositivo de (1): si $\sum a_n$ diverge y $\sum b_n$ convergiera, por (1) $\sum a_n$ convergeria, contradiccion. $\blacksquare$

### Demostracion del teorema 7.2

Supongamos $0 < L < \infty$. Como $\frac{a_n}{b_n} \to L$, para $\varepsilon = L/2 > 0$ existe $N$ tal que para $n > N$:

$$\frac{L}{2} < \frac{a_n}{b_n} < \frac{3L}{2}.$$

Esto da:

$$\frac{L}{2} \, b_n < a_n < \frac{3L}{2} \, b_n \qquad \text{para } n > N.$$

Si $\sum b_n$ converge, por la cota superior y el criterio de comparacion directa, $\sum a_n$ converge.

Si $\sum b_n$ diverge, por la cota inferior y el criterio de comparacion directa, $\sum a_n$ diverge.

Los casos $L = 0$ y $L = +\infty$ se demuestran de forma analoga usando solo una de las desigualdades. $\blacksquare$

### Demostracion del teorema 7.3

Como $(a_n)$ es decreciente, para todo $k \geq 0$ y todo $n$ con $2^k \leq n < 2^{k+1}$:

$$a_{2^{k+1}} \leq a_n \leq a_{2^k}.$$

**Cota superior.** Se agrupan los terminos:

$$\sum_{n=1}^{2^{K+1}-1} a_n = a_1 + \sum_{k=0}^{K} \sum_{n=2^k}^{2^{k+1}-1} a_n \leq a_1 + \sum_{k=0}^{K} 2^k \cdot a_{2^k}.$$

Si $\sum 2^k a_{2^k}$ converge, las sumas parciales de $\sum a_n$ estan acotadas, luego $\sum a_n$ converge (terminos no negativos, sumas parciales crecientes y acotadas).

**Cota inferior.** Analogamente:

$$\sum_{n=1}^{2^{K+1}} a_n \geq \sum_{k=0}^{K} \sum_{n=2^k+1}^{2^{k+1}} a_n \geq \sum_{k=0}^{K} 2^k \cdot a_{2^{k+1}} = \frac{1}{2}\sum_{k=0}^{K} 2^{k+1} a_{2^{k+1}} = \frac{1}{2}\sum_{j=1}^{K+1} 2^j a_{2^j}.$$

Si $\sum a_n$ converge, las sumas parciales de la derecha estan acotadas, luego $\sum 2^k a_{2^k}$ converge.

Se concluye que ambas series convergen o ambas divergen. $\blacksquare$

### Demostracion del corolario 7.4

Sea $a_n = \frac{1}{n^p}$. La sucesion es decreciente para $p > 0$ (y para $p \leq 0$, $a_n \not\to 0$, luego la serie diverge por el criterio de divergencia).

Para $p > 0$, se aplica el criterio de condensacion. La serie condensada es

$$\sum_{k=0}^{\infty} 2^k \cdot \frac{1}{(2^k)^p} = \sum_{k=0}^{\infty} 2^k \cdot 2^{-kp} = \sum_{k=0}^{\infty} 2^{k(1-p)} = \sum_{k=0}^{\infty} \left(2^{1-p}\right)^k.$$

Esta es una serie geometrica con razon $r = 2^{1-p}$.

- Si $p > 1$: $1 - p < 0$, luego $r = 2^{1-p} < 1$. La serie geometrica converge. $\implies \sum \frac{1}{n^p}$ converge.
- Si $p = 1$: $r = 2^0 = 1$. La serie geometrica diverge. $\implies \sum \frac{1}{n}$ diverge.
- Si $0 < p < 1$: $r = 2^{1-p} > 1$. La serie geometrica diverge. $\implies \sum \frac{1}{n^p}$ diverge. $\blacksquare$

## 9. Errores comunes

**Error 9.1 (comparar en la direccion equivocada).** Si $a_n \leq b_n$ y $\sum b_n$ diverge, no se puede concluir que $\sum a_n$ diverge. Ejemplo: $\frac{1}{n^2} \leq \frac{1}{n}$, $\sum \frac{1}{n}$ diverge, pero $\sum \frac{1}{n^2}$ converge.

**Error 9.2 (usar comparacion en el limite con $L = 0$ y serie divergente).** Si $\frac{a_n}{b_n} \to 0$ y $\sum b_n$ diverge, el criterio no dice nada sobre $\sum a_n$. El caso $L = 0$ solo es util cuando $\sum b_n$ converge.

**Error 9.3 (olvidar que los criterios requieren terminos positivos).** Los criterios de comparacion estan enunciados para series de terminos no negativos. Si la serie tiene terminos de signo variable, los criterios no se aplican directamente (aunque pueden aplicarse a $\sum |a_n|$ para convergencia absoluta).

**Error 9.4 (aplicar condensacion sin verificar monotonia).** El criterio de condensacion requiere que $(a_n)$ sea decreciente. Si no lo es, la equivalencia puede no valer.

**Error 9.5 (confundir $\sum \frac{1}{n^p}$ con $\sum \frac{1}{p^n}$).** La primera es una serie $p$ (potencia en la base). La segunda es una serie geometrica con razon $1/p$. Son series completamente distintas.

**Error 9.6 (creer que $p > 1$ implica que se puede calcular la suma).** Que $\sum \frac{1}{n^2}$ converga no significa que sea facil calcular su valor. El resultado $\sum \frac{1}{n^2} = \frac{\pi^2}{6}$ (Basel) requiere tecnicas avanzadas. Los criterios de este tema solo determinan convergencia, no el valor de la suma.

## 10. Resumen operativo

| Criterio | Hipotesis | Conclusion |
|----------|-----------|------------|
| Comparacion directa | $0 \leq a_n \leq b_n$, $\sum b_n$ converge | $\sum a_n$ converge |
| Comparacion directa | $0 \leq b_n \leq a_n$, $\sum b_n$ diverge | $\sum a_n$ diverge |
| Comparacion en el limite | $a_n, b_n > 0$, $a_n/b_n \to L$, $0 < L < \infty$ | Mismo caracter |
| Comparacion en el limite | $a_n/b_n \to 0$, $\sum b_n$ converge | $\sum a_n$ converge |
| Comparacion en el limite | $a_n/b_n \to +\infty$, $\sum b_n$ diverge | $\sum a_n$ diverge |
| Condensacion | $(a_n) \geq 0$ decreciente | $\sum a_n$ y $\sum 2^k a_{2^k}$ mismo caracter |
| Series $p$ | $p > 1$ | $\sum 1/n^p$ converge |
| Series $p$ | $p \leq 1$ | $\sum 1/n^p$ diverge |

**Series de referencia habituales:**
- $\sum \frac{1}{n^p}$, $p > 1$: converge (comparacion superior).
- $\sum \frac{1}{n}$: diverge (comparacion inferior).
- $\sum r^n$, $|r| < 1$: converge (geometrica).

## 11. Ejercicios

**Ejercicio 1.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^2 + 3n + 1}$ converge o diverge.

**Ejercicio 2.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \frac{\ln n}{n}$ converge o diverge.

**Ejercicio 3.** Determinar si $\displaystyle\sum_{n=2}^{\infty} \frac{1}{n \ln n}$ converge o diverge.

**Ejercicio 4.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \frac{n}{2n^3 + 1}$ converge o diverge.

**Ejercicio 5.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^{3/2} + \sqrt{n}}$ converge o diverge.

**Ejercicio 6.** Usar condensacion para determinar si $\displaystyle\sum_{n=2}^{\infty} \frac{1}{n(\ln n)^2}$ converge o diverge.

**Ejercicio 7.** Demostrar que $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n!}$ converge usando comparacion con una serie geometrica.

**Ejercicio 8.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \frac{2^n}{n!}$ converge o diverge.

**Ejercicio 9.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \frac{1}{\sqrt{n^3 + 1}}$ converge o diverge.

**Ejercicio 10.** Demostrar que si $a_n > 0$ y $\sum a_n$ converge, entonces $\displaystyle\sum \frac{a_n}{1 + a_n}$ converge.

**Ejercicio 11.** Determinar si $\displaystyle\sum_{n=2}^{\infty} \frac{1}{\sqrt{n} \ln n}$ converge o diverge.

**Ejercicio 12.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \sin\!\left(\frac{1}{n^2}\right)$ converge o diverge.

**Ejercicio 13.** Sea $p > 0$. Usar condensacion para demostrar que $\displaystyle\sum_{n=2}^{\infty} \frac{1}{n(\ln n)^p}$ converge si y solo si $p > 1$.

**Ejercicio 14.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \frac{3n^2 + 1}{n^4 - n + 2}$ converge o diverge.

**Ejercicio 15.** Demostrar que si $a_n \geq 0$ y $a_n \leq \frac{C}{n^2}$ para alguna constante $C > 0$ y todo $n$ suficientemente grande, entonces $\sum a_n$ converge.

## 12. Soluciones completas

### Solucion 1

Para $n$ grande, $n^2 + 3n + 1 \sim n^2$, luego $\frac{1}{n^2 + 3n + 1} \sim \frac{1}{n^2}$.

Formalmente: $\frac{1/(n^2 + 3n + 1)}{1/n^2} = \frac{n^2}{n^2 + 3n + 1} \to 1$.

Como $0 < 1 < \infty$ y $\sum \frac{1}{n^2}$ converge, por comparacion en el limite $\sum \frac{1}{n^2 + 3n + 1}$ **converge**. $\blacksquare$

### Solucion 2

Para $n \geq 3$, $\ln n \geq 1$, luego $\frac{\ln n}{n} \geq \frac{1}{n}$.

Como $\sum \frac{1}{n}$ diverge, por comparacion directa $\sum \frac{\ln n}{n}$ **diverge**. $\blacksquare$

### Solucion 3

Se aplica condensacion. Sea $a_n = \frac{1}{n \ln n}$ (para $n \geq 2$), que es positiva y decreciente.

La serie condensada es

$$\sum_{k=1}^{\infty} 2^k \cdot \frac{1}{2^k \ln(2^k)} = \sum_{k=1}^{\infty} \frac{1}{k \ln 2} = \frac{1}{\ln 2} \sum_{k=1}^{\infty} \frac{1}{k}.$$

Como $\sum \frac{1}{k}$ diverge, la serie condensada diverge. Por el criterio de condensacion, $\sum \frac{1}{n \ln n}$ **diverge**. $\blacksquare$

### Solucion 4

Comparacion en el limite con $\frac{1}{n^2}$:

$$\frac{n/(2n^3+1)}{1/n^2} = \frac{n^3}{2n^3 + 1} \to \frac{1}{2}.$$

Como $0 < \frac{1}{2} < \infty$ y $\sum \frac{1}{n^2}$ converge, la serie **converge**. $\blacksquare$

### Solucion 5

Para $n$ grande, $n^{3/2} + \sqrt{n} \sim n^{3/2}$, luego $\frac{1}{n^{3/2} + \sqrt{n}} \sim \frac{1}{n^{3/2}}$.

$$\frac{1/(n^{3/2} + \sqrt{n})}{1/n^{3/2}} = \frac{n^{3/2}}{n^{3/2} + n^{1/2}} = \frac{1}{1 + n^{-1}} \to 1.$$

Como $\sum \frac{1}{n^{3/2}}$ converge ($p = 3/2 > 1$), la serie **converge**. $\blacksquare$

### Solucion 6

Sea $a_n = \frac{1}{n(\ln n)^2}$ para $n \geq 2$, positiva y decreciente. La serie condensada es

$$\sum_{k=1}^{\infty} 2^k \cdot \frac{1}{2^k(\ln 2^k)^2} = \sum_{k=1}^{\infty} \frac{1}{(k \ln 2)^2} = \frac{1}{(\ln 2)^2}\sum_{k=1}^{\infty} \frac{1}{k^2}.$$

Como $\sum \frac{1}{k^2}$ converge ($p = 2 > 1$), la serie condensada converge. Por condensacion, $\sum \frac{1}{n(\ln n)^2}$ **converge**. $\blacksquare$

### Solucion 7

Para $n \geq 3$: $n! = 1 \cdot 2 \cdot 3 \cdots n \geq 2^{n-1}$ (porque cada factor desde el tercero es $\geq 2$). Entonces

$$\frac{1}{n!} \leq \frac{1}{2^{n-1}} = \frac{2}{2^n}.$$

Como $\sum \frac{2}{2^n} = 2\sum \frac{1}{2^n}$ es una serie geometrica convergente, por comparacion directa $\sum_{n=3}^{\infty} \frac{1}{n!}$ converge. Sumando los dos primeros terminos ($\frac{1}{1!} + \frac{1}{2!}$), la serie completa **converge**. $\blacksquare$

### Solucion 8

Para $n \geq 5$: $\frac{2^n}{n!} = \frac{2}{1}\cdot\frac{2}{2}\cdot\frac{2}{3}\cdots\frac{2}{n}$. Para $n \geq 3$, cada factor $\frac{2}{k} \leq \frac{2}{3}$ para $k \geq 3$. Entonces

$$\frac{2^n}{n!} \leq 2 \cdot 1 \cdot \left(\frac{2}{3}\right)^{n-2} = 2 \cdot \left(\frac{2}{3}\right)^{n-2} \quad \text{para } n \geq 3.$$

Esta expresion es proporcional a $\left(\frac{2}{3}\right)^n$, cuya serie converge (geometrica con $|r| < 1$). Por comparacion directa, $\sum \frac{2^n}{n!}$ **converge**. $\blacksquare$

### Solucion 9

Comparacion en el limite con $\frac{1}{n^{3/2}}$:

$$\frac{1/\sqrt{n^3+1}}{1/n^{3/2}} = \frac{n^{3/2}}{\sqrt{n^3+1}} = \sqrt{\frac{n^3}{n^3+1}} \to 1.$$

Como $\sum \frac{1}{n^{3/2}}$ converge, la serie **converge**. $\blacksquare$

### Solucion 10

Como $\sum a_n$ converge, $a_n \to 0$. Existe $N$ tal que $a_n < 1$ para $n > N$. Entonces $1 + a_n > 1$, y

$$\frac{a_n}{1 + a_n} \leq a_n \quad \text{para } n > N.$$

Como $\sum a_n$ converge y $\frac{a_n}{1+a_n} \geq 0$, por comparacion directa $\sum \frac{a_n}{1+a_n}$ **converge**. $\blacksquare$

### Solucion 11

Comparacion directa. Para $n \geq 3$, $\ln n \geq 1$, luego

$$\frac{1}{\sqrt{n} \ln n} \leq \frac{1}{\sqrt{n}}.$$

Pero $\sum \frac{1}{\sqrt{n}}$ diverge ($p = 1/2 \leq 1$), y esta es la cota superior, lo cual no ayuda.

Se usa comparacion en la otra direccion. Para $n \geq 3$, $\ln n \leq \sqrt{n}$ (ya que $\sqrt{n}$ crece mas rapido que $\ln n$). Entonces

$$\frac{1}{\sqrt{n} \ln n} \geq \frac{1}{\sqrt{n} \cdot \sqrt{n}} = \frac{1}{n}.$$

Como $\sum \frac{1}{n}$ diverge, por comparacion directa $\sum \frac{1}{\sqrt{n}\ln n}$ **diverge**. $\blacksquare$

### Solucion 12

Para $x$ pequeno, $\sin x \approx x$. Formalmente: $\lim_{x \to 0} \frac{\sin x}{x} = 1$.

Comparacion en el limite con $\frac{1}{n^2}$:

$$\frac{\sin(1/n^2)}{1/n^2} \to 1 \quad \text{cuando } n \to \infty.$$

Como $0 < 1 < \infty$ y $\sum \frac{1}{n^2}$ converge, por comparacion en el limite $\sum \sin\!\left(\frac{1}{n^2}\right)$ **converge**. $\blacksquare$

### Solucion 13

Sea $a_n = \frac{1}{n(\ln n)^p}$ para $n \geq 2$, decreciente y positiva. La serie condensada es

$$\sum_{k=1}^{\infty} 2^k \cdot \frac{1}{2^k(k\ln 2)^p} = \frac{1}{(\ln 2)^p}\sum_{k=1}^{\infty}\frac{1}{k^p}.$$

La serie $\sum \frac{1}{k^p}$ es una serie $p$: converge si $p > 1$ y diverge si $p \leq 1$. Por condensacion, $\sum \frac{1}{n(\ln n)^p}$ tiene el mismo caracter. $\blacksquare$

### Solucion 14

Comparacion en el limite con $\frac{1}{n^2}$:

$$\frac{(3n^2+1)/(n^4-n+2)}{1/n^2} = \frac{n^2(3n^2+1)}{n^4-n+2} = \frac{3n^4+n^2}{n^4-n+2} \to 3.$$

Como $0 < 3 < \infty$ y $\sum \frac{1}{n^2}$ converge, la serie **converge**. $\blacksquare$

### Solucion 15

Existe $N_0$ tal que $0 \leq a_n \leq \frac{C}{n^2}$ para todo $n \geq N_0$. Como $\sum \frac{C}{n^2} = C \sum \frac{1}{n^2}$ converge (serie $p$ con $p = 2 > 1$), por el criterio de comparacion directa $\sum_{n=N_0}^{\infty} a_n$ converge. Entonces $\sum_{n=1}^{\infty} a_n$ converge (agregar finitos terminos no afecta). $\blacksquare$
