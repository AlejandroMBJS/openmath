---
title: Sucesiones en normados
description: Convergencia, Cauchy, series, completitud y fenomenos caracteristicos de las sucesiones en espacios normados.
---

# Sucesiones en normados

## Motivacion e intuicion

En un espacio normado la convergencia tiene dos caras inseparables:

- una cara metrica, porque se mide con la distancia inducida por la norma;
- una cara algebraica, porque la suma y la multiplicacion por escalares interactuan bien con el limite.

Por eso las sucesiones en espacios normados constituyen el lenguaje mas basico del analisis funcional. A traves de ellas se estudian:

- series de vectores;
- continuidad de operadores;
- completitud y espacios de Banach;
- relaciones entre distintos modos de convergencia.

En dimension finita muchas cosas se parecen a $\mathbb{R}^n$. En dimension infinita aparecen fenomenos nuevos: sucesiones acotadas sin subsucesiones convergentes, normas no equivalentes y diferencias fuertes entre convergencia puntual, uniforme y en norma.

## Prerrequisitos

Conviene manejar:

- espacios normados;
- convergencia de sucesiones en metricos;
- sucesiones de Cauchy;
- series numericas basicas.

## Definiciones

Sea $(V,\|\cdot\|)$ un espacio normado y sea $(x_n)$ una sucesion en $V$.

### Convergencia en norma

Se dice que

$$
x_n \to x
$$

si

$$
\|x_n-x\| \to 0.
$$

### Sucesion de Cauchy

Se dice que $(x_n)$ es **de Cauchy** si

$$
\forall \varepsilon>0 \ \exists N \in \mathbb{N} \ \text{tal que} \ n,m \ge N \Rightarrow \|x_n-x_m\|<\varepsilon.
$$

### Completitud y espacios de Banach

El espacio normado $V$ se llama **completo** si toda sucesion de Cauchy converge en $V$.

Un espacio normado completo se llama **espacio de Banach**.

## Primeras propiedades

### Proposicion 1: unicidad del limite

Si $x_n \to x$ y $x_n \to y$, entonces $x=y$.

#### Demostracion

Por desigualdad triangular,

$$
\|x-y\|
\le
\|x-x_n\|+\|x_n-y\|.
$$

Al hacer $n\to\infty$, ambos terminos del lado derecho tienden a $0$, luego $\|x-y\|=0$ y por tanto $x=y$.

### Proposicion 2: toda sucesion convergente es acotada

Si $x_n \to x$, entonces existe $M>0$ tal que

$$
\|x_n\| \le M
\qquad
\text{para todo } n.
$$

#### Demostracion

Como $x_n \to x$, existe $N$ tal que para $n \ge N$,

$$
\|x_n-x\|<1.
$$

Entonces

$$
\|x_n\| \le \|x_n-x\|+\|x\|<1+\|x\|
$$

para $n \ge N$. Basta tomar el maximo entre ese numero y las finitas normas $\|x_1\|,\dots,\|x_{N-1}\|$.

### Proposicion 3: toda sucesion convergente es de Cauchy

Si $x_n \to x$, entonces $(x_n)$ es de Cauchy.

#### Demostracion

Dado $\varepsilon>0$, existe $N$ tal que para $n \ge N$,

$$
\|x_n-x\|<\frac{\varepsilon}{2}.
$$

Si $n,m \ge N$, entonces

$$
\|x_n-x_m\|
\le
\|x_n-x\|+\|x_m-x\|
<
\varepsilon.
$$

### Observacion

La implicacion reciproca no vale en general. Vale exactamente en los espacios completos.

## Algebra de limites

La presencia de la estructura lineal permite operar con sucesiones convergentes.

### Teorema 4: estabilidad lineal del limite

Si $x_n \to x$ y $y_n \to y$, entonces para cualesquiera escalares $\alpha,\beta \in \mathbb{K}$,

$$
\alpha x_n+\beta y_n \to \alpha x+\beta y.
$$

#### Demostracion

Se tiene

$$
\|(\alpha x_n+\beta y_n)-(\alpha x+\beta y)\|
\le
|\alpha|\,\|x_n-x\|+|\beta|\,\|y_n-y\|.
$$

Ambos terminos tienden a $0$, luego la suma tambien.

### Corolario 5

Si $x_n \to x$, entonces

$$
x_n-a \to x-a,
\qquad
\lambda x_n \to \lambda x.
$$

### Proposicion 6: continuidad de la norma

Si $x_n \to x$, entonces

$$
\|x_n\| \to \|x\|.
$$

#### Demostracion

Por desigualdad triangular inversa,

$$
\big|\|x_n\|-\|x\|\big| \le \|x_n-x\| \to 0.
$$

## Criterios utiles de convergencia

### Proposicion 7: dominacion por una sucesion real

Si existe una sucesion real $(a_n)$ con $a_n \to 0$ tal que

$$
\|x_n-x\| \le a_n
\qquad
\text{para todo } n,
$$

entonces $x_n \to x$.

### Proposicion 8: criterio por diferencia telescopica

Si

$$
\sum_{n=1}^\infty \|x_{n+1}-x_n\| < \infty,
$$

entonces $(x_n)$ es de Cauchy.

#### Demostracion

Si $m>n$,

$$
\|x_m-x_n\|
\le
\sum_{k=n}^{m-1}\|x_{k+1}-x_k\|.
$$

Como la serie de terminos no negativos converge, su cola puede hacerse arbitrariamente pequena.

### Comentario

En un Banach este criterio no solo da Cauchy, sino convergencia efectiva.

## Series en espacios normados

Sea $(x_n)$ una sucesion en $V$. La serie

$$
\sum_{n=1}^\infty x_n
$$

se define por medio de sus sumas parciales

$$
s_N=\sum_{n=1}^N x_n.
$$

Decimos que la serie converge si $(s_N)$ converge en norma.

### Proposicion 9

Si la serie

$$
\sum_{n=1}^\infty \|x_n\|
$$

converge y $V$ es Banach, entonces la serie vectorial

$$
\sum_{n=1}^\infty x_n
$$

converge en $V$.

#### Demostracion

Sean $m>n$. Entonces

$$
\left\|\sum_{k=n+1}^m x_k\right\|
\le
\sum_{k=n+1}^m \|x_k\|.
$$

Como la serie numerica de normas converge, la cola del lado derecho tiende a $0$. Luego la sucesion de sumas parciales es de Cauchy. Por completitud de $V$, converge.

### Observacion

La completitud es esencial. En un espacio normado no completo puede existir una serie absolutamente convergente cuya suma natural vive solo en la completacion.

## Completitud y subespacios

### Proposicion 10

Un subespacio cerrado de un Banach es Banach con la norma restringida.

#### Demostracion

Ya aparecio la idea en el tema de espacios normados: toda sucesion de Cauchy en el subespacio es de Cauchy en el espacio ambiente, converge alli por completitud, y el limite queda dentro del subespacio por cerradura.

### Contraejemplo

El espacio de polinomios reales en $[0,1]$, con la norma del supremo, no es completo. De hecho, puede aproximarse uniformemente por polinomios una funcion continua no polinomica, por ejemplo $f(x)=|x|$ en $[-1,1]$ o una funcion trigonometrica restringida a un intervalo tras reparametrizar.

## Convergencia coordinada y convergencia en norma

En dimension finita, la convergencia en norma equivale a la convergencia coordenada.

### Teorema 11

En $\mathbb{K}^m$, una sucesion $x_n=(x_n^{(1)},\dots,x_n^{(m)})$ converge a $x=(x^{(1)},\dots,x^{(m)})$ si y solo si

$$
x_n^{(j)} \to x^{(j)}
\qquad
\text{para cada } j=1,\dots,m.
$$

#### Demostracion

Si $x_n \to x$ en cualquier norma, como todas las normas son equivalentes en dimension finita, basta razonar con la norma del supremo:

$$
\|x_n-x\|_\infty=\max_j |x_n^{(j)}-x^{(j)}| \to 0.
$$

Esto implica convergencia de cada coordenada.

Reciprocamente, si cada coordenada converge, el maximo de un numero finito de cantidades que tienden a $0$ tambien tiende a $0$, luego

$$
\|x_n-x\|_\infty \to 0.
$$

Por equivalencia de normas, hay convergencia en cualquier otra norma.

### Advertencia

En espacios de dimension infinita, controlar coordenadas o componentes no siempre equivale a convergencia en norma.

## Ejemplos finos y contraejemplos

### Ejemplo 1: la base canonica en $\ell^2$

Sea $e_n=(0,\dots,0,1,0,\dots)$, con el $1$ en la posicion $n$. Entonces

$$
\|e_n\|_2=1
$$

para todo $n$, asi que $(e_n)$ no converge a $0$ en norma.

Sin embargo, para cada coordenada fija $k$, la componente $(e_n)_k$ si tiende a $0$. Esto muestra que convergencia coordenada no implica convergencia en norma en dimension infinita.

### Ejemplo 2: convergencia uniforme frente a puntual

En $C([0,1])$ con la norma del supremo, la sucesion $f_n(x)=x^n$ converge puntualmente a la funcion

$$
f(x)=
\begin{cases}
0 & \text{si } 0\le x<1,\\
1 & \text{si } x=1.
\end{cases}
$$

Pero $f$ no es continua, luego la sucesion no puede converger en norma del supremo dentro de $C([0,1])$.

Mas aun,

$$
\|f_n-f_m\|_\infty=1
$$

para muchos pares grandes $n,m$, de modo que ni siquiera es de Cauchy.

### Ejemplo 3: una sucesion de Cauchy en un espacio no completo

En el espacio de polinomios sobre $[0,1]$ con $\|\cdot\|_\infty$, puede tomarse una sucesion de polinomios que converja uniformemente a $e^x$. Esa sucesion es de Cauchy en el espacio de polinomios, pero no converge dentro de ese espacio.

### Ejemplo 4: series geometricas vectoriales

Si $x \in V$ y $|\lambda|<1$, entonces

$$
\sum_{n=0}^\infty \lambda^n x
$$

converge absolutamente porque

$$
\sum_{n=0}^\infty \|\lambda^n x\|
=
\|x\|\sum_{n=0}^\infty |\lambda|^n
<\infty.
$$

En un Banach, su suma es el vector que formalmente satisface

$$
(I-\lambda I)\sum_{n=0}^\infty \lambda^n x=x.
$$

## Sucesiones de Cauchy y normas equivalentes

### Proposicion 12

Si dos normas son equivalentes, una sucesion es convergente para una si y solo si lo es para la otra. Lo mismo vale para sucesiones de Cauchy.

#### Demostracion

Si

$$
c\|z\|_a \le \|z\|_b \le C\|z\|_a,
$$

entonces

$$
\|x_n-x_m\|_b \le C\|x_n-x_m\|_a,
$$

y tambien

$$
\|x_n-x_m\|_a \le c^{-1}\|x_n-x_m\|_b.
$$

Luego la condicion de Cauchy es equivalente.

### Consecuencia

La completitud es una propiedad topologica lineal estable bajo cambio a normas equivalentes.

## Sucesiones y continuidad de operadores lineales

Sea $T:V\to W$ lineal entre espacios normados.

### Proposicion 13

$T$ es continua si y solo si para toda sucesion $x_n \to x$ se cumple

$$
Tx_n \to Tx.
$$

#### Demostracion

Esto no es mas que la caracterizacion secuencial de la continuidad en espacios metricos.

### Corolario 14

Si $T$ es lineal y continua, entonces lleva sucesiones de Cauchy acotadas por una constante lineal a sucesiones de Cauchy:

$$
\|Tx_n-Tx_m\| \le C\|x_n-x_m\|.
$$

## Un teorema util sobre series

### Teorema 15

Si la serie

$$
\sum_{n=1}^\infty x_n
$$

converge en un espacio normado, entonces necesariamente

$$
x_n \to 0.
$$

#### Demostracion

Si

$$
s_N=\sum_{n=1}^N x_n
$$

converge a $s$, entonces tambien

$$
s_{N-1}\to s.
$$

Por tanto

$$
x_N=s_N-s_{N-1}\to s-s=0.
$$

### Comentario

La condicion $x_n\to 0$ es necesaria para que una serie converja, pero no suficiente. Este hecho sigue siendo central en dimension infinita: la informacion sobre los terminos individuales no basta para controlar la suma completa.

## Errores comunes

- Pensar que toda sucesion de Cauchy converge sin revisar completitud.
- Confundir convergencia puntual con convergencia en norma.
- Suponer que acotacion implica existencia de subsucesion convergente en cualquier espacio normado.
- Olvidar que la convergencia en norma implica convergencia de normas, pero no al reves.
- Usar argumentos coordenados en espacios infinito-dimensionales como si se estuviera en $\mathbb{R}^n$.

## Ejercicios propuestos

1. Probar que si $x_n \to x$ y $\lambda_n \to \lambda$, entonces $\lambda_n x_n \to \lambda x$.
2. Demostrar que toda serie convergente en un espacio normado satisface $x_n \to 0$.
3. Construir una sucesion de Cauchy en un espacio no completo que no converja en el espacio.
4. Verificar que la sucesion $(e_n)$ no tiene subsucesion convergente en $\ell^2$.
5. Probar que si $\sum \|x_n\|<\infty$, entonces la serie de sumas parciales es de Cauchy.
6. Mostrar que una sucesion convergente en norma es siempre acotada, pero el reciproco falla.
7. Sea $W$ un subespacio cerrado de un Banach $V$. Probar directamente que una serie absolutamente convergente con terminos en $W$ converge en $W$.

## Cierre

Las sucesiones en espacios normados son la puerta de entrada a casi todo el analisis funcional. La norma convierte preguntas abstractas sobre vectores en desigualdades cuantitativas. Desde ahi aparecen naturalmente Banach, series vectoriales, operadores continuos y las primeras diferencias serias entre dimension finita e infinita.
