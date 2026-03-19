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
