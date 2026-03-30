---
title: Sucesiones de Cauchy en metricos
description: Definicion de Cauchy, criterios equivalentes, ejemplos en espacios incompletos y teoremas estructurales fundamentales.
---

# Sucesiones de Cauchy en metricos

## Motivacion e intuicion

La convergencia describe cercania respecto de un punto limite ya situado dentro del espacio. La nocion de Cauchy elimina ese punto de referencia: pide solo que los terminos de la sucesion terminen estando muy cerca unos de otros.

Esta idea es conceptualmente decisiva. Una sucesion de Cauchy se comporta como si debiera converger. Si no lo hace, el problema ya no esta en la sucesion, sino en que el espacio no contiene el punto limite que "falta".

Por eso Cauchy es la antesala natural de la completitud.

## Prerrequisitos

Conviene manejar:

- convergencia en espacios metricos;
- desigualdad triangular;
- acotacion de sucesiones;
- ejemplos clasicos en $\mathbb{R}$ y en subespacios.

## Definiciones formales

Sea $(X,d)$ un espacio metrico y sea $(x_n)$ una sucesion en $X$.

### Sucesion de Cauchy

Decimos que $(x_n)$ es **de Cauchy** si

$$
\forall \varepsilon>0\ \exists N \in \mathbb{N}\ \text{tal que}\ n,m \ge N \implies d(x_n,x_m)<\varepsilon.
$$

### Cola de diametro pequeno

Equivalente a la definicion anterior es decir que para todo $\varepsilon>0$ existe $N$ tal que la cola

$$
\{x_n : n \ge N\}
$$

tiene diametro menor que $\varepsilon$.

## Interpretacion en lenguaje natural

Una sucesion es de Cauchy cuando, a partir de cierto punto, todos sus terminos se aprietan mutuamente en una region tan pequena como se quiera.

La diferencia con la convergencia es sutil y profunda:

- en la convergencia se compara cada $x_n$ con un punto externo $x$;
- en Cauchy se comparan entre si los propios terminos de la sucesion.

En un espacio completo ambas ideas coinciden. En un espacio no completo pueden separarse.

## Ejemplos basicos

### Ejemplo 1: toda sucesion convergente en $\mathbb{R}$ es de Cauchy

Si

$$
x_n \to x,
$$

entonces para $n,m$ grandes ambos terminos estan cerca de $x$, y por desigualdad triangular estan cerca entre si.

### Ejemplo 2: una sucesion de Cauchy racional

En $\mathbb{Q}$, una sucesion de racionales que aproxime a $\sqrt{2}$ es de Cauchy respecto de la metrica usual heredada de $\mathbb{R}$, aunque no converge en $\mathbb{Q}$.

Este es el ejemplo clasico que muestra la incompletitud de $\mathbb{Q}$.

### Ejemplo 3: metrica discreta

En un espacio con metrica discreta, una sucesion es de Cauchy si y solo si es eventualmente constante.

### Ejemplo 4: un ejemplo en un abierto de $\mathbb{R}$

En el espacio

$$
(0,1)
$$

con la metrica usual, la sucesion

$$
x_n=\frac{1}{n+1}
$$

es de Cauchy, pero no converge en $(0,1)$, porque su limite natural es $0$, que no pertenece al espacio.

### Ejemplo 5: una sucesion no de Cauchy

En $\mathbb{R}$, la sucesion

$$
x_n=n
$$

no es de Cauchy. Basta tomar $\varepsilon=1$ y observar que para todo $N$:

$$
d(x_N,x_{N+1})=1.
$$

## Ejemplos finos y contraejemplos

### Contraejemplo 1: acotada no implica Cauchy

La sucesion

$$
(-1)^n
$$

es acotada en $\mathbb{R}$, pero no es de Cauchy. Tomando

$$
\varepsilon=1,
$$

siempre hay terminos de signos opuestos a distancia $2$.

### Contraejemplo 2: $d(x_n,x_{n+1})\to 0$ no basta

En $\mathbb{R}$, la sucesion de sumas parciales de la serie armonica

$$
s_n=\sum_{k=1}^n \frac1k
$$

satisface

$$
|s_{n+1}-s_n|=\frac1{n+1}\to 0,
$$

pero no es de Cauchy, porque diverge a $+\infty$.

Esto muestra que la cercania entre terminos consecutivos no controla por si sola la cercania entre terminos muy separados.

### Ejemplo fino 3: una subsucesion convergente puede forzar la convergencia total

Si una sucesion de Cauchy posee una subsucesion convergente, entonces toda la sucesion converge al mismo limite.

Este hecho es uno de los mecanismos mas utiles del tema.

### Ejemplo fino 4: la propiedad de Cauchy solo depende de la cola

Cambiar un numero finito de terminos iniciales no afecta si una sucesion es o no de Cauchy.

## Proposiciones y teoremas

### Proposicion 1: toda sucesion convergente es de Cauchy

Si

$$
x_n \to x,
$$

entonces $(x_n)$ es de Cauchy.

#### Demostracion

Sea $\varepsilon>0$. Como

$$
x_n \to x,
$$

existe $N$ tal que

$$
n \ge N \implies d(x_n,x)<\frac{\varepsilon}{2}.
$$

Si $n,m \ge N$, por desigualdad triangular:

$$
d(x_n,x_m)\le d(x_n,x)+d(x,x_m)<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.
$$

Luego $(x_n)$ es de Cauchy.

### Proposicion 2: caracterizacion por un punto de referencia en la cola

La sucesion $(x_n)$ es de Cauchy si y solo si para todo $\varepsilon>0$ existe $N$ tal que

$$
n \ge N \implies d(x_n,x_N)<\varepsilon.
$$

#### Demostracion

Si $(x_n)$ es de Cauchy, basta fijar $m=N$ en la definicion.

Reciprocamente, supongamos la condicion indicada. Sea $\varepsilon>0$. Existe $N$ tal que

$$
n \ge N \implies d(x_n,x_N)<\frac{\varepsilon}{2}.
$$

Si ahora $n,m \ge N$, por desigualdad triangular:

$$
d(x_n,x_m)\le d(x_n,x_N)+d(x_N,x_m)<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.
$$

Luego $(x_n)$ es de Cauchy.

### Proposicion 3: toda sucesion de Cauchy es acotada

#### Demostracion

Tomemos $\varepsilon=1$. Como $(x_n)$ es de Cauchy, existe $N$ tal que

$$
n,m \ge N \implies d(x_n,x_m)<1.
$$

Fijando $m=N$, obtenemos

$$
n \ge N \implies d(x_n,x_N)<1.
$$

Por tanto la cola esta contenida en la bola

$$
B(x_N,1).
$$

Los primeros terminos

$$
x_1,\dots,x_{N-1}
$$

son finitos en numero. Si definimos

$$
M=\max\{d(x_1,x_N),\dots,d(x_{N-1},x_N),1\},
$$

entonces

$$
d(x_n,x_N)\le M
\qquad \text{para todo } n.
$$

Asi, $(x_n)$ es acotada.

### Proposicion 4: toda cola de una sucesion de Cauchy es de Cauchy

Si $(x_n)$ es de Cauchy y $k$ es fijo, entonces $(x_{n+k})$ tambien es de Cauchy.

#### Demostracion

Sea $\varepsilon>0$. Existe $N$ tal que

$$
n,m \ge N \implies d(x_n,x_m)<\varepsilon.
$$

Si ahora $n,m \ge N$, entonces tambien

$$
n+k,m+k \ge N,
$$

de modo que

$$
d(x_{n+k},x_{m+k})<\varepsilon.
$$

### Proposicion 5: toda subsucesion de una sucesion de Cauchy es de Cauchy

Si $(x_{n_k})$ es una subsucesion de una sucesion de Cauchy $(x_n)$, entonces $(x_{n_k})$ es de Cauchy.

#### Demostracion

Sea $\varepsilon>0$. Existe $N$ tal que

$$
n,m \ge N \implies d(x_n,x_m)<\varepsilon.
$$

Como $n_k \to \infty$, existe $K$ tal que

$$
k \ge K \implies n_k \ge N.
$$

Entonces, si $k,\ell \ge K$:

$$
d(x_{n_k},x_{n_\ell})<\varepsilon.
$$

Luego la subsucesion es de Cauchy.

### Proposicion 6: si una sucesion de Cauchy tiene una subsucesion convergente, entonces converge toda la sucesion

Supongamos que $(x_n)$ es de Cauchy y que existe una subsucesion $(x_{n_k})$ tal que

$$
x_{n_k}\to x.
$$

Entonces

$$
x_n \to x.
$$

#### Demostracion

Sea $\varepsilon>0$. Como $(x_n)$ es de Cauchy, existe $N_1$ tal que

$$
n,m \ge N_1 \implies d(x_n,x_m)<\frac{\varepsilon}{2}.
$$

Como

$$
x_{n_k}\to x,
$$

existe $K$ tal que

$$
k \ge K \implies d(x_{n_k},x)<\frac{\varepsilon}{2}.
$$

Ademas, al ser $(n_k)$ estrictamente creciente, existe $K_1$ tal que

$$
k \ge K_1 \implies n_k \ge N_1.
$$

Tomemos $k \ge \max\{K,K_1\}$ y consideremos cualquier $n \ge N_1$. Entonces

$$
d(x_n,x)\le d(x_n,x_{n_k})+d(x_{n_k},x)<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.
$$

Por tanto, para todo $n \ge N_1$ se cumple

$$
d(x_n,x)<\varepsilon.
$$

Luego

$$
x_n \to x.
$$

### Corolario

En un espacio metrico, para demostrar que una sucesion de Cauchy converge basta encontrar una sola subsucesion convergente.

### Proposicion 7: criterio en la metrica discreta

En un espacio con metrica discreta, una sucesion es de Cauchy si y solo si es eventualmente constante.

#### Demostracion

Supongamos que $(x_n)$ es de Cauchy. Tomamos

$$
\varepsilon=\frac12.
$$

Entonces existe $N$ tal que

$$
n,m \ge N \implies d(x_n,x_m)<\frac12.
$$

En metrica discreta esto solo puede ocurrir si

$$
x_n=x_m.
$$

Luego todos los terminos de la cola coinciden y la sucesion es eventualmente constante.

La implicacion contraria es inmediata: una sucesion eventualmente constante es Cauchy en cualquier espacio metrico.

## Resumen conceptual

Una sucesion de Cauchy es una sucesion cuya cola tiene diametro arbitrariamente pequeno. De aqui se deduce que:

- toda convergente es de Cauchy;
- toda de Cauchy es acotada;
- la propiedad se hereda a colas y subsucesiones;
- en un espacio no completo puede haber sucesiones de Cauchy sin limite;
- una subsucesion convergente basta para arrastrar a toda la sucesion.

La completitud consistira precisamente en exigir que toda sucesion de Cauchy converja.

## Ejemplos guiados finales

### Ejemplo guiado 1: por que $x_n=1/(n+1)$ es de Cauchy en $(0,1)$

Aunque el limite natural $0$ no pertenece al espacio, para $n,m$ grandes se tiene

$$
\left|\frac{1}{n+1}-\frac{1}{m+1}\right|
$$

tan pequeno como se quiera, porque ambos terminos estan cerca de $0$ en $\mathbb{R}$.

Asi, la propiedad de Cauchy no necesita que el limite este dentro del espacio.

### Ejemplo guiado 2: por que la serie armonica da un contraejemplo fino

Las diferencias sucesivas cumplen

$$
s_{n+1}-s_n=\frac1{n+1}\to 0,
$$

pero los bloques largos siguen acumulando masa:

$$
s_{2N}-s_N=\sum_{k=N+1}^{2N}\frac1k \ge \frac{N}{2N}=\frac12.
$$

Luego no hay control uniforme de las colas, y la sucesion no es de Cauchy.

### Ejemplo guiado 3: criterio de subsecuencia convergente

Si una sucesion de Cauchy vive en un compacto, automaticamente tiene una subsucesion convergente. Entonces, por la Proposicion 6, la sucesion completa converge. Este mecanismo reaparecera en la prueba de que todo compacto metrico es completo.

### Ejemplo guiado 4: por que la acotacion no alcanza

La sucesion

$$
(-1)^n
$$

permanece en el intervalo $[-1,1]$, pero nunca logra que toda su cola tenga diametro pequeno. Siempre aparecen dos terminos a distancia $2$.

## Errores comunes

1. Confundir Cauchy con convergencia en espacios arbitrarios.
2. Verificar solo distancias entre terminos consecutivos.
3. Olvidar que el indice $N$ depende de $\varepsilon$.
4. Suponer que acotacion y Cauchy son casi lo mismo.
5. Creer que una sucesion de Cauchy necesita un candidato de limite para definirse.

## Cierre

La nocion de Cauchy separa dos preguntas que en $\mathbb{R}$ solemos fusionar: si la sucesion tiene coherencia interna y si el espacio contiene el punto limite correspondiente. La completitud consistira en responder siempre afirmativamente a la segunda cuando la primera ya esta garantizada.

## Ejercicios

### Ejercicio 1

Demuestre que toda sucesion convergente es de Cauchy.

### Ejercicio 2

De un ejemplo de una sucesion de Cauchy en $\mathbb{Q}$ que no converge en $\mathbb{Q}$.

### Ejercicio 3

Demuestre que si $(x_n)$ es de Cauchy, entonces $(x_n)$ es acotada.

### Ejercicio 4

Demuestre que dos sucesiones de Cauchy pueden estar a distancia finita sin compartir limite. Es decir, encuentre $(x_n)$ de Cauchy, $(y_n)$ de Cauchy, con $d(x_n, y_n) \to L > 0$.

### Ejercicio 5

Sea $(x_n)$ una sucesion de Cauchy con infinitos terminos distintos. Demuestre que los terminos distintos forman un conjunto infinito.

### Ejercicio 6

En un espacio discreto, caracterice todas las sucesiones de Cauchy.

### Ejercicio 7

Demuestre que si $(x_n)$ es de Cauchy y tiene una subsucesion convergente, entonces $(x_n)$ converge al mismo limite.

### Ejercicio 8

Sea $(X,d)$ un espacio metrico. Defina $d'(x,y) = \frac{d(x,y)}{1+d(x,y)}$. Demuestre que $(x_n)$ es de Cauchy en $(X,d)$ si y solo si es de Cauchy en $(X,d')$.

### Ejercicio 9

En $C[0,1]$ con la metrica $d_1(f,g) = \int_0^1 |f(x) - g(x)| dx$, demuestre que la sucesion $f_n(x) = x^n$ es de Cauchy.

### Ejercicio 10

Demuestre que la convergencia de Cauchy es equivalente a la convergencia en espacios completos.

### Ejercicio 11

Constructa una sucesion en $\mathbb{Q}$ que sea de Cauchy pero no converja en $\mathbb{Q}$.

### Ejercicio 12

Demuestre que si $(x_n)$ y $(y_n)$ son de Cauchy en $(X,d)$, entonces $(d(x_n, y_n))$ es de Cauchy en $\mathbb{R}$.

### Ejercicio 13

En $\ell^2$, demuestre que la sucesion de vectores canonicos $e_n = (0,\ldots,0,1,0,\ldots)$ no es de Cauchy.

### Ejercicio 14

Demuestre que toda subsucesion de una sucesion de Cauchy es de Cauchy.

### Ejercicio 15

Sea $(x_n)$ una sucesion tal que $d(x_{n+1}, x_n) \leq 2^{-n}$ para todo $n$. Demuestre que $(x_n)$ es de Cauchy.

## Soluciones

### Solucion 1

Si $x_n \to x$, dado $\varepsilon > 0$, existe $N$ tal que para todo $n \geq N$: $d(x_n, x) < \varepsilon/2$.

Para $n, m \geq N$:

$$
d(x_n, x_m) \leq d(x_n, x) + d(x, x_m) < \varepsilon/2 + \varepsilon/2 = \varepsilon.
$$

Por tanto $(x_n)$ es de Cauchy. $\blacksquare$

### Solucion 2

La sucesion $x_n = \sum_{k=1}^{n} \frac{1}{k!}$ es de Cauchy en $\mathbb{Q}$ (es creciente y acotada).

Su limite en $\mathbb{R}$ es $e \approx 2.718\ldots$, que no es racional.

Por tanto, la sucesion no converge en $\mathbb{Q}$. $\blacksquare$

### Solucion 3

Si $(x_n)$ es de Cauchy, para $\varepsilon = 1$ existe $N$ tal que $d(x_n, x_m) < 1$ para $n, m \geq N$.

Entonces para todo $n \geq N$: $d(x_n, x_N) < 1$.

Tomando $R = \max\{d(x_1, x_N), \ldots, d(x_{N-1}, x_N), 1\} + 1$, tenemos:

$$
\{x_n : n \in \mathbb{N}\} \subseteq B(x_N, R).
$$

Por tanto la sucesion es acotada. $\blacksquare$

### Solucion 4

En $\mathbb{R}$, considere $x_n = 0$ e $y_n = 1 + 1/n$.

Ambas son de Cauchy (ambas convergen). Sin embargo $|x_n - y_n| = 1 + 1/n \to 1 > 0$. $\blacksquare$

### Solucion 5

Si $(x_n)$ es de Cauchy con infinitos terminos distintos, entonces la sucesion toma infinitos valores distintos.

Si el conjunto de terminos fuera finito, algun valor $x^*$ se repetiria infinitas veces. Entonces podriamos construir subsucesiones convergentes a $x^*$ de manera trivial.

La afirmacion es directa: infinitos terminos distintos implica un conjunto infinito de valores. $\blacksquare$

### Solucion 6

En un espacio discreto, $d(x,y) = 1$ para $x \neq y$.

Si $(x_n)$ es de Cauchy, dado $\varepsilon < 1$, existe $N$ tal que $d(x_n, x_m) < \varepsilon < 1$ para $n, m \geq N$.

Esto implica $d(x_n, x_m) = 0$, es decir, $x_n = x_m$.

Por tanto, las unicas sucesiones de Cauchy son las eventualmente constantes. $\blacksquare$

### Solucion 7

Sea $(x_n)$ de Cauchy con subsucesion $(x_{n_k})$ que converge a $x$. Dado $\varepsilon > 0$:

- Existe $N_1$ tal que $d(x_n, x_m) < \varepsilon/2$ para $n, m \geq N_1$.
- Existe $K$ tal que $d(x_{n_k}, x) < \varepsilon/2$ para $k \geq K$.

Tomamos $k$ tal que $n_k \geq N_1$. Para $n \geq N_1$:

$$
d(x_n, x) \leq d(x_n, x_{n_k}) + d(x_{n_k}, x) < \varepsilon/2 + \varepsilon/2 = \varepsilon.
$$

Por tanto $x_n \to x$. $\blacksquare$

### Solucion 8

La funcion $\varphi(t) = \frac{t}{1+t}$ es estrictamente creciente en $[0, \infty)$.

$\Rightarrow)$ Si $(x_n)$ es de Cauchy en $(X,d)$, dado $\varepsilon > 0$ con $\varepsilon < 1$, existe $N$ tal que $d(x_n, x_m) < \varepsilon$ para $n, m \geq N$.

Entonces $d'(x_n, x_m) \leq d(x_n, x_m) < \varepsilon$.

$\Leftarrow)$ Si $(x_n)$ es de Cauchy en $(X,d')$, dado $\varepsilon > 0$, tomamos $\varepsilon' = \frac{\varepsilon}{1+\varepsilon}$.

Existe $N$ tal que $d'(x_n, x_m) < \varepsilon'$. Entonces $d(x_n, x_m) < \varepsilon$ (usando que $d = \frac{d'}{1-d'}$ cuando $d' < 1$). $\blacksquare$

### Solucion 9

Para $n, m \geq N$, calculamos:

$$
d_1(f_n, f_m) = \int_0^1 |x^n - x^m| dx.
$$

Para $x \in [0,1]$ y $n, m \geq N$:

$$
|x^n - x^m| \leq x^N + x^N = 2x^N.
$$

Integrando: $d_1(f_n, f_m) \leq 2\int_0^1 x^N dx = \frac{2}{N+1} \to 0$ cuando $N \to \infty$.

Por tanto $(f_n)$ es de Cauchy. $\blacksquare$

### Solucion 10

En espacios completos, si $(x_n)$ es de Cauchy, existe $x \in X$ tal que $x_n \to x$ (por definicion de completitud).

Reciprocamente, si $x_n \to x$, entonces $(x_n)$ es de Cauchy (Ejercicio 1). $\blacksquare$

### Solucion 11

Definimos $x_n$ por los digitos de $\sqrt{2}$:

- $x_1 = 1 = 1/1$
- $x_2 = 1.4 = 14/10$
- $x_3 = 1.41 = 141/100$
- ...

La sucesion $(x_n)$ es creciente y acotada, asi es de Cauchy. Su limite seria $\sqrt{2} \notin \mathbb{Q}$.

Por tanto no converge en $\mathbb{Q}$. $\blacksquare$

### Solucion 12

Dado $\varepsilon > 0$, como $(x_n)$ y $(y_n)$ son de Cauchy, existen $N_1, N_2$ tales que:

- Para $n, m \geq N_1$: $d(x_n, x_m) < \varepsilon/2$.
- Para $n, m \geq N_2$: $d(y_n, y_m) < \varepsilon/2$.

Tomando $N = \max(N_1, N_2)$:

$$
|d(x_n, y_n) - d(x_m, y_m)| \leq d(x_n, x_m) + d(y_n, y_m) < \varepsilon/2 + \varepsilon/2 = \varepsilon.
$$

Por tanto $(d(x_n, y_n))$ es de Cauchy en $\mathbb{R}$. $\blacksquare$

### Solucion 13

Para $n \neq m$:

$$
\|e_n - e_m\|_2 = \sqrt{0^2 + \cdots + 0^2 + 1^2 + 0^2 + \cdots + 0^2 + 1^2 + 0^2 + \cdots} = \sqrt{2}.
$$

Por tanto, para $\varepsilon < \sqrt{2}$, no existe $N$ tal que $d(e_n, e_m) < \varepsilon$ para $n, m \geq N$.

La sucesion no es de Cauchy. $\blacksquare$

### Solucion 14

Si $(x_n)$ es de Cauchy, dado $\varepsilon > 0$, existe $N$ tal que $d(x_n, x_m) < \varepsilon$ para $n, m \geq N$.

Sea $(x_{n_k})$ una subsucesion. Entonces $n_k \geq k$, asi para $k, j \geq N$:

$$
d(x_{n_k}, x_{n_j}) < \varepsilon.
$$

Por tanto $(x_{n_k})$ es de Cauchy. $\blacksquare$

### Solucion 15

Para $n < m$:

$$
d(x_n, x_m) \leq \sum_{k=n}^{m-1} d(x_{k+1}, x_k) \leq \sum_{k=n}^{m-1} 2^{-k} = 2^{-n+1} - 2^{-m+1} < 2^{-n+1}.
$$

Dado $\varepsilon > 0$, tomamos $N$ tal que $2^{-N+1} < \varepsilon$. Entonces para $n, m \geq N$:

$$
d(x_n, x_m) < 2^{-N+1} < \varepsilon.
$$

Por tanto $(x_n)$ es de Cauchy. $\blacksquare$

---

## Referencias y lecturas adicionales

1. Rudin, W. (1976). *Principles of Mathematical Analysis*. McGraw-Hill.
2. Apostol, T.M. (1974). *Mathematical Analysis*. Addison-Wesley.
3. Bartle, R.G.; Sherbert, D.R. (2000). *Introduction to Real Analysis*. Wiley.
4. Munkres, J.R. (2000). *Topology*. Prentice Hall.
