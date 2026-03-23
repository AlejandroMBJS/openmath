---
title: Desarrollo de Taylor
description: Expansion local de funciones suaves, restos, validez analitica y lectura asintotica.
---

# Desarrollo de Taylor

## Idea central

El desarrollo de Taylor aproxima una funcion suave cerca de un punto mediante un polinomio construido con sus derivadas en ese punto. Es el puente entre informacion local diferencial y aproximacion algebraica efectiva.

## Formula de orden n

Si $f$ es suficientemente derivable cerca de $a$, su polinomio de Taylor de orden $n$ en torno a $a$ es

$$
T_n^a f(x)=\sum_{k=0}^n \frac{f^{(k)}(a)}{k!}(x-a)^k.
$$

La cuestion profunda no es solo escribir el polinomio, sino controlar el resto

$$
R_n(x)=f(x)-T_n^a f(x).
$$

## Formas del resto

### Resto de Lagrange

Si $f\in C^{n+1}$, existe un punto $\xi$ entre $a$ y $x$ tal que

$$
R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}.
$$

### Resto integral

Tambien puede escribirse

$$
R_n(x)=\frac{1}{n!}\int_a^x f^{(n+1)}(t)(x-t)^n\,dt.
$$

La forma integral es especialmente util para cotas cuantitativas y para analisis funcional.

## Lectura geometrica

- el termino constante fija el valor;
- el lineal fija la pendiente local;
- el cuadratico codifica la primera curvatura;
- los terminos de orden mayor refinan la forma local.

En este sentido, Taylor es una microscopia algebraica de la funcion.

## Ejemplos canonicos

### Exponencial

$$
e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots
$$

con convergencia para todo $x\in\mathbb{R}$.

### Seno

$$
\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots
$$

### Logaritmo cerca de 1

$$
\log(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots,
\qquad |x|<1.
$$

## Taylor no implica analiticidad global

Que una funcion sea $C^\infty$ no garantiza que coincida con su serie de Taylor. El ejemplo clasico es

$$
f(x)=
\begin{cases}
e^{-1/x^2}, & x\neq 0, \\
0, & x=0,
\end{cases}
$$

cuyas derivadas en $0$ son todas nulas, de modo que su serie de Taylor en $0$ es identicamente cero, aunque la funcion no lo sea fuera de $0$.

## Expansion asintotica

A veces Taylor se usa como expansion asintotica y no como serie convergente exacta. Decir que

$$
f(x)\sim \sum_{k=0}^n a_k(x-a)^k
$$

significa que el error es de orden superior, no necesariamente que la serie infinita converja a $f$.

## Uso en fisica matematica

Taylor aparece en:

- linealizacion de ecuaciones;
- aproximacion de potenciales;
- regimenes de baja energia o pequena amplitud;
- derivacion de modelos efectivos;
- metodos perturbativos.

## Cierre

El desarrollo de Taylor es mucho mas que una receta de derivadas. Es el dispositivo local que convierte suavidad en algebra y permite medir con precision hasta que punto una funcion puede ser reemplazada por un modelo polinomial cerca de un punto.
