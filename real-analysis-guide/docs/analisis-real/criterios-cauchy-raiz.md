---
title: Criterios de Cauchy y de la raiz
description: Criterio del cociente (d'Alembert), criterio de la raiz (Cauchy), relacion entre ambos, casos inconcluyentes y aplicaciones. Incluye 15 ejercicios resueltos.
---

# Criterios de Cauchy y de la raiz

## 1. Motivacion e intuicion

Los criterios de comparacion del tema anterior requieren encontrar una serie de referencia adecuada, lo cual a veces no es inmediato. Los criterios del cociente y de la raiz eliminan esa busqueda: solo miran la serie en cuestion y determinan su convergencia comparandola internamente con una serie geometrica.

La idea del criterio del cociente es observar como crece o decrece el cociente entre terminos consecutivos $\frac{|a_{n+1}|}{|a_n|}$. Si ese cociente tiende a un valor $L < 1$, la serie se comporta eventualmente como una geometrica de razon $L$, y por tanto converge. Si $L > 1$, los terminos crecen y la serie diverge.

La idea del criterio de la raiz es similar pero mira $\sqrt[n]{|a_n|}$. Si tiende a $L < 1$, se tiene $|a_n| \approx L^n$ para $n$ grande, y la serie converge. Si $L > 1$, diverge.

El criterio de la raiz es mas fuerte que el del cociente: siempre que el cociente da una respuesta, la raiz da la misma. Pero hay series donde la raiz funciona y el cociente no. Sin embargo, el cociente suele ser mas facil de calcular en la practica.

## 2. Prerrequisitos

**Series y convergencia.** Definicion de convergencia, criterio de divergencia ($a_n \not\to 0$ implica divergencia).

**Convergencia absoluta.** Si $\sum |a_n|$ converge, entonces $\sum a_n$ converge.

**Serie geometrica.** $\sum r^n$ converge si $|r| < 1$ y diverge si $|r| \geq 1$.

**Criterio de comparacion.** Si $0 \leq a_n \leq b_n$ y $\sum b_n$ converge, entonces $\sum a_n$ converge.

**Limite superior.** $\limsup_{n\to\infty} c_n = \lim_{n\to\infty} \sup_{k\geq n} c_k$. Es el mayor punto de acumulacion de $(c_n)$ si la sucesion esta acotada.

## 3. Definiciones formales

**Definicion 3.1 (criterio del cociente — version limite).** Sea $\sum a_n$ con $a_n \neq 0$ para todo $n$ suficientemente grande. Se define

$$L = \lim_{n\to\infty}\frac{|a_{n+1}|}{|a_n|},$$

cuando el limite existe.

**Definicion 3.2 (criterio de la raiz — version limite).** Se define

$$R = \lim_{n\to\infty}\sqrt[n]{|a_n|},$$

cuando el limite existe.

**Definicion 3.3 (criterio de la raiz — version $\limsup$).** Se define

$$R^* = \limsup_{n\to\infty} \sqrt[n]{|a_n|}.$$

Esta version no requiere que el limite exista y siempre produce un valor en $[0, +\infty]$.

## 4. Interpretacion en lenguaje natural

**Cociente.** Si cada termino es, en promedio, una fraccion fija $L < 1$ del anterior, la serie se encoge geometricamente y converge. Si cada termino es al menos tan grande como el anterior ($L \geq 1$), no hay encogimiento suficiente.

**Raiz.** $\sqrt[n]{|a_n|}$ mide la "velocidad geometrica" de $|a_n|$. Si es menor que $1$ en el limite, los terminos decrecen exponencialmente; si es mayor que $1$, crecen exponencialmente.

**Caso $L = 1$ o $R = 1$.** Los criterios no deciden: la serie puede converger o divergir. Esto es porque el comportamiento esta justo en la frontera entre la geometrica convergente y la divergente. Ejemplos clasicos como $\sum \frac{1}{n}$ y $\sum \frac{1}{n^2}$ ambos dan $L = R = 1$ pero una diverge y la otra converge.

## 5. Ejemplos basicos

**Ejemplo 5.1 (cociente con $L < 1$).** $\displaystyle\sum_{n=0}^{\infty} \frac{1}{n!}$.

$$\frac{a_{n+1}}{a_n} = \frac{n!}{(n+1)!} = \frac{1}{n+1} \to 0 < 1.$$

La serie converge.

**Ejemplo 5.2 (cociente con $L > 1$).** $\displaystyle\sum_{n=1}^{\infty} \frac{2^n}{n}$.

$$\frac{a_{n+1}}{a_n} = \frac{2^{n+1}/(n+1)}{2^n/n} = \frac{2n}{n+1} \to 2 > 1.$$

La serie diverge.

**Ejemplo 5.3 (raiz con $R < 1$).** $\displaystyle\sum_{n=1}^{\infty} \left(\frac{n}{2n+1}\right)^n$.

$$\sqrt[n]{|a_n|} = \frac{n}{2n+1} \to \frac{1}{2} < 1.$$

La serie converge.

**Ejemplo 5.4 (caso inconcluyente $L = 1$).** $\displaystyle\sum \frac{1}{n^2}$: $\frac{a_{n+1}}{a_n} = \frac{n^2}{(n+1)^2} \to 1$. El cociente no decide, pero sabemos que la serie converge (serie $p$ con $p = 2$).

$\displaystyle\sum \frac{1}{n}$: $\frac{a_{n+1}}{a_n} = \frac{n}{n+1} \to 1$. El cociente no decide, pero sabemos que la serie diverge.

## 6. Ejemplos finos y contraejemplos

**Ejemplo 6.1 (la raiz funciona pero el cociente no).** Sea

$$a_n = \begin{cases} 2^{-n} & \text{si } n \text{ es par}, \\ 3^{-n} & \text{si } n \text{ es impar}. \end{cases}$$

El cociente $\frac{a_{n+1}}{a_n}$ alterna entre $\frac{2^n}{3^{n+1}}$ y $\frac{3^n}{2^{n+1}}$, que tienen limites distintos ($0$ y $+\infty$). El limite $L$ no existe.

La raiz: $\sqrt[n]{a_n}$ vale $\frac{1}{2}$ o $\frac{1}{3}$ segun la paridad, y $\limsup = \frac{1}{2} < 1$. El criterio de la raiz da convergencia.

**Ejemplo 6.2 (relacion entre cociente y raiz).** Se cumple siempre:

$$\liminf \frac{|a_{n+1}|}{|a_n|} \leq \liminf \sqrt[n]{|a_n|} \leq \limsup \sqrt[n]{|a_n|} \leq \limsup \frac{|a_{n+1}|}{|a_n|}.$$

Esto implica que si el cociente tiene limite $L$, la raiz tambien tiene limite y vale $L$. Pero no al reves.

**Ejemplo 6.3 (cociente con la serie $\frac{n!}{n^n}$).** $\frac{a_{n+1}}{a_n} = \frac{(n+1)! \cdot n^n}{(n+1)^{n+1} \cdot n!} = \frac{n^n}{(n+1)^n} = \left(\frac{n}{n+1}\right)^n = \left(1 - \frac{1}{n+1}\right)^n \to e^{-1} \approx 0.368.$

Como $L = 1/e < 1$, la serie converge.

**Ejemplo 6.4 (serie con $\sqrt[n]{|a_n|} \to 1$ desde abajo).** $\displaystyle\sum \frac{1}{n^2}$: $\sqrt[n]{1/n^2} = n^{-2/n} = e^{-2\ln n/n} \to e^0 = 1$. El criterio de la raiz es inconcluyente, igual que el del cociente.

**Ejemplo 6.5 (convergencia condicional: los criterios no aplican directamente).** Para $\sum \frac{(-1)^n}{n}$, $\frac{|a_{n+1}|}{|a_n|} = \frac{n}{n+1} \to 1$. Inconcluyente. Los criterios del cociente y la raiz aplican a la convergencia absoluta ($\sum \frac{1}{n}$, que diverge), no a la convergencia condicional. Se necesitan otros criterios (como Leibniz, tema posterior).

## 7. Proposiciones y teoremas

### Teorema 7.1 (criterio del cociente — d'Alembert)

**Enunciado.** *Sea $\sum a_n$ con $a_n \neq 0$ para $n$ grande. Si*

$$L = \lim_{n\to\infty} \frac{|a_{n+1}|}{|a_n|}$$

*existe, entonces:*
1. *Si $L < 1$, la serie converge absolutamente.*
2. *Si $L > 1$, la serie diverge.*
3. *Si $L = 1$, el criterio no decide.*

### Teorema 7.2 (criterio de la raiz — Cauchy)

**Enunciado.** *Sea $\sum a_n$ y sea $R^* = \limsup_{n\to\infty} \sqrt[n]{|a_n|}$. Entonces:*
1. *Si $R^* < 1$, la serie converge absolutamente.*
2. *Si $R^* > 1$, la serie diverge.*
3. *Si $R^* = 1$, el criterio no decide.*

### Proposicion 7.3 (el criterio de la raiz es mas fuerte)

**Enunciado.** *Si el criterio del cociente da convergencia ($L < 1$) o divergencia ($L > 1$), el criterio de la raiz da la misma conclusion. Pero existen series para las que el cociente es inconcluyente y la raiz decide.*

### Proposicion 7.4 (version cociente sin limite)

**Enunciado.** *Sea $\sum a_n$ con $a_n \neq 0$ para $n$ grande.*
1. *Si existe $0 < r < 1$ tal que $\frac{|a_{n+1}|}{|a_n|} \leq r$ para todo $n$ suficientemente grande, la serie converge absolutamente.*
2. *Si $\frac{|a_{n+1}|}{|a_n|} \geq 1$ para todo $n$ suficientemente grande, la serie diverge.*

## 8. Demostraciones completas

### Demostracion del teorema 7.1

**Caso $L < 1$.** Sea $r$ con $L < r < 1$. Como $\frac{|a_{n+1}|}{|a_n|} \to L$, existe $N$ tal que para $n \geq N$:

$$\frac{|a_{n+1}|}{|a_n|} < r.$$

Iterando desde $n = N$: $|a_{N+k}| < r^k |a_N|$ para todo $k \geq 0$.

Entonces

$$\sum_{k=0}^{\infty} |a_{N+k}| \leq |a_N| \sum_{k=0}^{\infty} r^k = \frac{|a_N|}{1-r} < \infty.$$

La cola $\sum_{n=N}^{\infty} |a_n|$ converge, luego $\sum |a_n|$ converge (convergencia absoluta).

**Caso $L > 1$.** Sea $r$ con $1 < r < L$. Existe $N$ tal que $\frac{|a_{n+1}|}{|a_n|} > r > 1$ para $n \geq N$. Entonces $|a_n|$ es eventualmente creciente y $|a_n| \geq |a_N| > 0$ para $n \geq N$, asi que $a_n \not\to 0$. Por el criterio de divergencia, la serie diverge.

**Caso $L = 1$.** Los ejemplos $\sum \frac{1}{n}$ (diverge) y $\sum \frac{1}{n^2}$ (converge), ambos con $L = 1$, muestran que el criterio no decide. $\blacksquare$

### Demostracion del teorema 7.2

**Caso $R^* < 1$.** Sea $r$ con $R^* < r < 1$. Por definicion de $\limsup$, existe $N$ tal que $\sqrt[n]{|a_n|} < r$ para todo $n \geq N$. Equivalentemente, $|a_n| < r^n$ para $n \geq N$.

Entonces $\sum_{n=N}^{\infty} |a_n| < \sum_{n=N}^{\infty} r^n < \infty$ (serie geometrica con $r < 1$). La serie converge absolutamente.

**Caso $R^* > 1$.** Por definicion de $\limsup$, para infinitos valores de $n$ se tiene $\sqrt[n]{|a_n|} > 1$, es decir, $|a_n| > 1$. Entonces $a_n \not\to 0$ y la serie diverge.

**Caso $R^* = 1$.** Mismos contraejemplos que en el cociente. $\blacksquare$

### Demostracion de la proposicion 7.3

Se usa la desigualdad

$$\liminf \frac{|a_{n+1}|}{|a_n|} \leq \liminf \sqrt[n]{|a_n|} \leq \limsup \sqrt[n]{|a_n|} \leq \limsup \frac{|a_{n+1}|}{|a_n|}.$$

Si $L = \lim \frac{|a_{n+1}|}{|a_n|}$ existe, entonces $\liminf = \limsup = L$, y la desigualdad da $\liminf \sqrt[n]{|a_n|} = \limsup \sqrt[n]{|a_n|} = L$, es decir, $R^* = L$. Asi, la raiz decide lo mismo que el cociente.

El ejemplo 6.1 muestra un caso donde el cociente no tiene limite pero la raiz si, y decide convergencia. $\blacksquare$

### Demostracion de la proposicion 7.4

**(1)** Si $\frac{|a_{n+1}|}{|a_n|} \leq r$ para $n \geq N$, entonces $|a_{N+k}| \leq r^k |a_N|$ y la cota con la serie geometrica se aplica como en el teorema 7.1.

**(2)** Si $\frac{|a_{n+1}|}{|a_n|} \geq 1$ para $n \geq N$, entonces $(|a_n|)_{n\geq N}$ es creciente con $|a_N| > 0$, asi que $|a_n| \geq |a_N| > 0$ para todo $n \geq N$, y $a_n \not\to 0$. $\blacksquare$

## 9. Errores comunes

**Error 9.1 (concluir cuando $L = 1$).** El caso $L = 1$ es inconcluyente para ambos criterios. No se puede decir "converge" ni "diverge" sin otro argumento.

**Error 9.2 (aplicar el cociente cuando $a_n = 0$ para infinitos $n$).** El cociente $\frac{|a_{n+1}|}{|a_n|}$ no esta definido si $a_n = 0$. El criterio requiere $a_n \neq 0$ eventualmente.

**Error 9.3 (confundir criterio del cociente para series con criterio del cociente para sucesiones de Cauchy).** El criterio del cociente de d'Alembert estudia $\frac{|a_{n+1}|}{|a_n|}$. No es lo mismo que el criterio de Cauchy para series ($|s_m - s_n| < \varepsilon$) ni que la sucesion de Cauchy.

**Error 9.4 (olvidar el valor absoluto).** Los criterios usan $|a_n|$, no $a_n$. La serie puede tener terminos negativos; los criterios trabajan con la convergencia absoluta.

**Error 9.5 (creer que la raiz y el cociente siempre dan la misma respuesta).** Si el cociente da $L < 1$ o $L > 1$, la raiz coincide. Pero si el cociente es inconcluyente (limite no existe o $L = 1$), la raiz puede decidir.

**Error 9.6 (aplicar los criterios a series donde la comparacion directa es inmediata).** Para series como $\sum \frac{1}{n^p}$ los criterios del cociente y la raiz dan $L = R = 1$ y no sirven. Es preferible usar comparacion o condensacion.

## 10. Resumen operativo

| Criterio | Se calcula | $< 1$ | $> 1$ | $= 1$ |
|----------|-----------|-------|-------|-------|
| Cociente (d'Alembert) | $L = \lim \frac{\|a_{n+1}\|}{\|a_n\|}$ | Converge abs. | Diverge | Inconcluyente |
| Raiz (Cauchy) | $R^* = \limsup \sqrt[n]{\|a_n\|}$ | Converge abs. | Diverge | Inconcluyente |

**Cuando usar cada uno:**
- **Cociente:** cuando $a_n$ involucra factoriales, potencias de $n$, o cocientes que simplifican bien.
- **Raiz:** cuando $a_n$ tiene la forma $f(n)^n$ o $f(n)^{g(n)}$.
- **Ninguno de los dos sirve:** para series $p$ ($\sum 1/n^p$), usar comparacion o condensacion.

## 11. Ejercicios

**Ejercicio 1.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \frac{n!}{3^n}$ converge o diverge usando el criterio del cociente.

**Ejercicio 2.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \frac{3^n}{n^3}$ converge o diverge.

**Ejercicio 3.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \left(\frac{n}{2n+3}\right)^n$ converge o diverge usando el criterio de la raiz.

**Ejercicio 4.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \frac{n^n}{n!}$ converge o diverge.

**Ejercicio 5.** Determinar si $\displaystyle\sum_{n=0}^{\infty} \frac{(2n)!}{(n!)^2 \cdot 4^n}$ converge o diverge.

**Ejercicio 6.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \frac{n^{10}}{2^n}$ converge o diverge.

**Ejercicio 7.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \left(\frac{n+1}{3n}\right)^n$ converge o diverge.

**Ejercicio 8.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \frac{n! \cdot 2^n}{(2n)!}$ converge o diverge.

**Ejercicio 9.** Sea $a_n = \frac{1}{n^2}$ si $n$ es par y $a_n = \frac{1}{2^n}$ si $n$ es impar. Determinar si $\sum a_n$ converge usando el criterio de la raiz.

**Ejercicio 10.** Demostrar que $\displaystyle\sum_{n=1}^{\infty} \frac{n!}{n^n}$ converge.

**Ejercicio 11.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \frac{(n!)^2}{(2n)!}$ converge o diverge.

**Ejercicio 12.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \left(1 - \frac{1}{n}\right)^{n^2}$ converge o diverge.

**Ejercicio 13.** Demostrar que si $L = \lim \frac{|a_{n+1}|}{|a_n|} < 1$, entonces $a_n \to 0$ exponencialmente rapido: existe $C > 0$ y $0 < r < 1$ tal que $|a_n| \leq Cr^n$ para todo $n$ grande.

**Ejercicio 14.** Determinar si $\displaystyle\sum_{n=1}^{\infty} \frac{5^n \cdot n!}{n^n}$ converge o diverge.

**Ejercicio 15.** Sea $\sum a_n$ con $a_n > 0$. Demostrar que si $\frac{a_{n+1}}{a_n} \leq 1 - \frac{2}{n}$ para todo $n$ suficientemente grande, entonces $\sum a_n$ converge.

## 12. Soluciones completas

### Solucion 1

$$\frac{a_{n+1}}{a_n} = \frac{(n+1)! / 3^{n+1}}{n! / 3^n} = \frac{n+1}{3} \to +\infty > 1.$$

La serie **diverge**. $\blacksquare$

### Solucion 2

Cociente: $\frac{a_{n+1}}{a_n} = \frac{3^{n+1}/(n+1)^3}{3^n/n^3} = 3 \cdot \left(\frac{n}{n+1}\right)^3 \to 3 > 1$.

La serie **diverge**. $\blacksquare$

### Solucion 3

$$\sqrt[n]{|a_n|} = \frac{n}{2n+3} \to \frac{1}{2} < 1.$$

Por el criterio de la raiz, la serie **converge**. $\blacksquare$

### Solucion 4

Cociente:

$$\frac{a_{n+1}}{a_n} = \frac{(n+1)^{n+1} \cdot n!}{(n+1)! \cdot n^n} = \frac{(n+1)^n}{n^n} = \left(\frac{n+1}{n}\right)^n = \left(1 + \frac{1}{n}\right)^n \to e \approx 2.718 > 1.$$

La serie **diverge**. $\blacksquare$

### Solucion 5

Cociente:

$$\frac{a_{n+1}}{a_n} = \frac{(2n+2)! \cdot (n!)^2 \cdot 4^n}{((n+1)!)^2 \cdot 4^{n+1} \cdot (2n)!} = \frac{(2n+2)(2n+1)}{4(n+1)^2} = \frac{(2n+1)}{2(n+1)} \to 1.$$

El criterio del cociente es **inconcluyente**. Se puede mostrar por otros metodos (la formula de Stirling da $a_n \sim \frac{1}{\sqrt{\pi n}}$) que la serie **diverge**, ya que los terminos decrecen como $\frac{1}{\sqrt{n}}$ y $\sum \frac{1}{\sqrt{n}}$ diverge. $\blacksquare$

### Solucion 6

Cociente:

$$\frac{a_{n+1}}{a_n} = \frac{(n+1)^{10} \cdot 2^n}{2^{n+1} \cdot n^{10}} = \frac{1}{2}\left(\frac{n+1}{n}\right)^{10} \to \frac{1}{2} < 1.$$

La serie **converge**. $\blacksquare$

### Solucion 7

$$\sqrt[n]{|a_n|} = \frac{n+1}{3n} = \frac{1}{3} + \frac{1}{3n} \to \frac{1}{3} < 1.$$

Por el criterio de la raiz, la serie **converge**. $\blacksquare$

### Solucion 8

$$\frac{a_{n+1}}{a_n} = \frac{(n+1)! \cdot 2^{n+1} \cdot (2n)!}{(2n+2)! \cdot n! \cdot 2^n} = \frac{2(n+1)}{(2n+2)(2n+1)} = \frac{1}{2n+1} \to 0 < 1.$$

La serie **converge**. $\blacksquare$

### Solucion 9

Para $n$ par: $\sqrt[n]{a_n} = \sqrt[n]{1/n^2} = n^{-2/n} \to 1$.

Para $n$ impar: $\sqrt[n]{a_n} = \sqrt[n]{1/2^n} = 1/2$.

El $\limsup$ es $1$, asi que el criterio de la raiz es inconcluyente.

Sin embargo, $\sum a_n = \sum_{k\text{ par}} \frac{1}{k^2} + \sum_{k\text{ impar}} \frac{1}{2^k}$. La primera es parte de $\sum \frac{1}{n^2}$ (converge) y la segunda es geometrica (converge). Por tanto $\sum a_n$ **converge**. $\blacksquare$

### Solucion 10

Cociente:

$$\frac{a_{n+1}}{a_n} = \frac{(n+1)! \cdot n^n}{(n+1)^{n+1} \cdot n!} = \frac{n^n}{(n+1)^n} = \left(\frac{n}{n+1}\right)^n = \frac{1}{\left(1 + 1/n\right)^n} \to \frac{1}{e} < 1.$$

La serie **converge**. $\blacksquare$

### Solucion 11

$$\frac{a_{n+1}}{a_n} = \frac{((n+1)!)^2 \cdot (2n)!}{(2n+2)! \cdot (n!)^2} = \frac{(n+1)^2}{(2n+2)(2n+1)} = \frac{n+1}{2(2n+1)} \to \frac{1}{4} < 1.$$

La serie **converge**. $\blacksquare$

### Solucion 12

Se usa el criterio de la raiz:

$$\sqrt[n]{a_n} = \left(1 - \frac{1}{n}\right)^n \to \frac{1}{e} < 1.$$

La serie **converge**. $\blacksquare$

### Solucion 13

Como $L < 1$, sea $r$ con $L < r < 1$. Existe $N$ tal que $\frac{|a_{n+1}|}{|a_n|} < r$ para $n \geq N$. Iterando:

$$|a_{N+k}| < r^k |a_N| = |a_N| \cdot r^{-N} \cdot r^{N+k}.$$

Definiendo $C = |a_N| \cdot r^{-N}$, se tiene $|a_n| \leq C r^n$ para todo $n \geq N$. Esto muestra decrecimiento exponencial con razon $r < 1$. $\blacksquare$

### Solucion 14

$$\frac{a_{n+1}}{a_n} = \frac{5^{n+1}(n+1)! \cdot n^n}{5^n \cdot n! \cdot (n+1)^{n+1}} = \frac{5(n+1) \cdot n^n}{(n+1)^{n+1}} = \frac{5 n^n}{(n+1)^n} = \frac{5}{\left(1+1/n\right)^n} \to \frac{5}{e} \approx 1.839 > 1.$$

La serie **diverge**. $\blacksquare$

### Solucion 15

La condicion $\frac{a_{n+1}}{a_n} \leq 1 - \frac{2}{n}$ para $n \geq N_0$ permite comparar con $b_n = \frac{C}{n^2}$.

Definimos $b_n = \frac{a_{N_0}}{N_0^2} \cdot n^2 \cdot \frac{a_n}{a_{N_0} \cdot n^2 / N_0^2}$... mejor usamos el enfoque directo.

Se compara con $c_n = \frac{C}{n(n-1)}$. Observar que $\frac{c_{n+1}}{c_n} = \frac{n(n-1)}{(n+1)n} = \frac{n-1}{n+1} = 1 - \frac{2}{n+1}$.

Para $n$ grande, $1 - \frac{2}{n} < 1 - \frac{2}{n+1} = \frac{c_{n+1}}{c_n}$. Asi que $\frac{a_{n+1}}{a_n} \leq 1 - \frac{2}{n} < \frac{c_{n+1}}{c_n}$ eventualmente, lo cual da $\frac{a_{n+1}}{c_{n+1}} < \frac{a_n}{c_n}$. La sucesion $\frac{a_n}{c_n}$ es eventualmente decreciente y acotada inferiormente por $0$, luego converge a algun $M \geq 0$. En particular, $a_n \leq M' c_n$ para alguna constante $M'$ y $n$ grande. Como $\sum c_n = C \sum \frac{1}{n(n-1)}$ converge (telescopica), por comparacion $\sum a_n$ converge. $\blacksquare$
