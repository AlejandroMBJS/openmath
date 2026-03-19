---
title: Distribucion de probabilidad discreta
description: Variables discretas, funcion de masa, soporte, funcion de distribucion, transformaciones y calculo de momentos.
---

# Distribucion de probabilidad discreta

## Toda la ley codificada por masas puntuales

Cuando una variable aleatoria solo puede tomar valores aislados, su comportamiento completo queda determinado por las probabilidades de esos valores puntuales. En ese caso hablamos de una distribucion discreta.

Esto ocurre naturalmente en:

- numero de exitos;
- numero de defectos;
- numero de llegadas;
- resultado de un dado;
- cantidad de ensayos hasta cierto evento.

## Variable aleatoria discreta

Decimos que una variable aleatoria $X$ es discreta si existe un conjunto finito o numerable

$$
\{x_1,x_2,\dots\}\subseteq \mathbb R
$$

tal que

$$
P(X\in \{x_1,x_2,\dots\})=1.
$$

Los valores con probabilidad positiva forman el soporte efectivo:

$$
\operatorname{supp}(X)=\{x:P(X=x)>0\}.
$$

## Funcion de masa de probabilidad

La funcion

$$
p_X(x)=P(X=x)
$$

se llama funcion de masa de probabilidad.

Es la descripcion mas basica de una ley discreta.

## Propiedades fundamentales

### Teorema 1

Si $X$ es discreta con soporte

$$
\{x_1,x_2,\dots\},
$$

entonces:

1. 

$$
p_X(x)\ge 0
$$

para todo $x$;

2. 

$$
\sum_i p_X(x_i)=1.
$$

#### Demostracion

La no negatividad es inmediata. Para la segunda propiedad, los eventos

$$
\{X=x_i\}
$$

son disjuntos dos a dos y su union tiene probabilidad uno. Por sigma-aditividad:

$$
1=P\left(\bigcup_i \{X=x_i\}\right)=\sum_i P(X=x_i).
$$

## Recuperar probabilidades de eventos

Si

$$
A\subseteq \mathbb R,
$$

entonces

$$
P(X\in A)=\sum_{x_i\in A} p_X(x_i).
$$

Esta formula reduce el calculo discreto a sumas sobre el soporte.

## Ejemplo 1: dado equilibrado

Si $X$ es el resultado de un dado justo, entonces

$$
p_X(k)=\frac16,
\qquad
k=1,\dots,6.
$$

Por tanto

$$
P(X\text{ par})=p_X(2)+p_X(4)+p_X(6)=\frac12.
$$

## Ejemplo 2: Bernoulli

Si

$$
X\sim \operatorname{Bernoulli}(p),
$$

entonces el soporte es

$$
\{0,1\},
$$

y la masa vale

$$
p_X(1)=p,
\qquad
p_X(0)=1-p.
$$

La ley completa ya esta capturada por esos dos numeros.

## Ejemplo 3: suma de dos dados

Sea

$$
S
$$

la suma de dos dados equilibrados.

Entonces el soporte es

$$
\{2,3,\dots,12\},
$$

pero la masa no es uniforme:

$$
P(S=2)=\frac{1}{36},
\qquad
P(S=7)=\frac{6}{36},
\qquad
P(S=12)=\frac{1}{36}.
$$

### Leccion

Discreto no significa uniforme. La forma de la masa depende del mecanismo de generacion.

## Soporte finito y soporte numerable

### Soporte finito

Aparece en variables como:

- dado;
- bernoulli;
- binomial.

### Soporte numerable infinito

Aparece en variables como:

- geometrica;
- poisson;
- numero de ensayos hasta el primer exito.

En este segundo caso, la condicion

$$
\sum_{k=0}^{\infty}p_k=1
$$

es una restriccion analitica real, no una simple formalidad.

## Funcion de distribucion

La funcion de distribucion de $X$ es

$$
F_X(x)=P(X\le x).
$$

En el caso discreto, puede recuperarse a partir de la masa:

$$
F_X(x)=\sum_{x_i\le x} p_X(x_i).
$$

### Comentario

La funcion de distribucion de una variable discreta es escalonada y salta en los puntos del soporte.

## Relacion entre masa y funcion de distribucion

En una variable discreta,

$$
P(X=x)=F_X(x)-F_X(x^-),
$$

donde

$$
F_X(x^-)
$$

denota el limite por la izquierda.

### Leccion

Los saltos de la funcion de distribucion coinciden exactamente con las masas puntuales.

## Tabla de una distribucion discreta

Una ley discreta finita suele representarse como

$$
\begin{array}{c|cccc}
x & x_1 & x_2 & \cdots & x_n\\
\hline
P(X=x) & p_1 & p_2 & \cdots & p_n
\end{array}
$$

Esta tabla resume completamente la distribucion.

## Histograma discreto

El grafico natural de una ley discreta son barras verticales sobre los puntos del soporte, con altura

$$
p_X(x).
$$

No debe confundirse con una densidad continua. En una variable discreta hay masa puntual.

## Esperanza de una variable discreta

Si

$$
\sum_i |x_i|p_X(x_i)<\infty,
$$

entonces

$$
E[X]=\sum_i x_i\,p_X(x_i).
$$

### Comentario

La esperanza es un promedio ponderado por probabilidades.

## Esperanza de funciones de una variable discreta

Si $g$ es una funcion y

$$
\sum_i |g(x_i)|p_X(x_i)<\infty,
$$

entonces

$$
E[g(X)]=\sum_i g(x_i)p_X(x_i).
$$

Esta formula es central porque permite calcular momentos, funciones generadoras y transformaciones sin reconstruir la ley de $g(X)$ desde cero.

## Varianza de una variable discreta

Si existe el segundo momento:

$$
\operatorname{Var}(X)=\sum_i (x_i-E[X])^2p_X(x_i).
$$

Equivalentemente,

$$
\operatorname{Var}(X)=E[X^2]-(E[X])^2.
$$

## Ejemplo 4: esperanza de un dado

Si $X$ es el resultado de un dado justo,

$$
E[X]=\sum_{k=1}^6 k\cdot\frac16=\frac{21}{6}=3.5.
$$

## Transformacion de variables discretas

Si

$$
Y=g(X),
$$

entonces la distribucion de $Y$ se obtiene agrupando las masas de todos los puntos de $X$ que producen el mismo valor de $Y$.

### Ejemplo 5

Si $X$ toma valores

$$
-1,0,1
$$

con probabilidades

$$
0.25,0.5,0.25,
$$

y

$$
Y=X^2,
$$

entonces

$$
P(Y=0)=0.5,
\qquad
P(Y=1)=0.5.
$$

La transformacion junta masa de varios valores originales.

## Convolucion de variables discretas independientes

Si

$$
X
$$

e

$$
Y
$$

son variables discretas independientes, la ley de su suma no se obtiene sumando masas punto a punto, sino por **convolucion**.

### Formula

Para todo

$$
z,
$$

se tiene

$$
P(X+Y=z)=\sum_x P(X=x)P(Y=z-x).
$$

En notacion de masas,

$$
p_{X+Y}(z)=\sum_x p_X(x)p_Y(z-x).
$$

La suma recorre el soporte posible de

$$
X.
$$

### Por que vale

El evento

$$
\{X+Y=z\}
$$

se descompone como union disjunta de eventos

$$
\{X=x,\ Y=z-x\}.
$$

Por sigma-aditividad e independencia,

$$
P(X+Y=z)
=
\sum_x P(X=x,\ Y=z-x)
=
\sum_x P(X=x)P(Y=z-x).
$$

### Ejemplo 6: suma de Bernoulli

Si

$$
X,Y\sim \operatorname{Bernoulli}(p)
$$

son independientes, entonces

$$
X+Y
$$

toma valores

$$
0,1,2
$$

con probabilidades

$$
P(X+Y=0)=(1-p)^2,
$$

$$
P(X+Y=1)=2p(1-p),
$$

y

$$
P(X+Y=2)=p^2.
$$

Eso no es otra cosa que una binomial de parametros

$$
2
$$

y

$$
p.
$$

### Lectura estructural

La convolucion explica por que la suma de variables discretas independientes produce familias cerradas o casi cerradas: binomiales al sumar Bernoulli, Poisson al sumar Poisson independientes, y asi sucesivamente.

## Funcion generadora de probabilidad

Cuando una variable discreta toma valores en

$$
\{0,1,2,\dots\},
$$

conviene resumir su ley en la funcion

$$
G_X(s)=E[s^X]=\sum_{k=0}^{\infty} p_X(k)s^k,
\qquad |s|\le 1.
$$

Esta es la **funcion generadora de probabilidad**.

### Por que importa

La funcion generadora concentra en una sola expresion:

- toda la masa de probabilidad;
- los momentos factoriales;
- el efecto de sumar variables independientes.

### Recuperacion de la masa

Si la serie converge en un entorno de

$$
0,
$$

los coeficientes recuperan la masa:

$$
p_X(k)=\frac{G_X^{(k)}(0)}{k!}.
$$

### Sumas independientes

Si

$$
X
$$

e

$$
Y
$$

son independientes y no negativas enteras, entonces

$$
G_{X+Y}(s)=G_X(s)G_Y(s).
$$

Esa identidad es la version transformada de la convolucion.

### Derivada en uno

Siempre que

$$
E[X]<\infty,
$$

se tiene

$$
G_X'(1^-)=E[X].
$$

En otras palabras, la esperanza queda codificada en la pendiente de la generadora en

$$
1.
$$

### Ejemplo 7: geometrica

Si

$$
P(X=k)=p(1-p)^k,
\qquad k=0,1,2,\dots,
$$

entonces

$$
G_X(s)=\sum_{k=0}^{\infty}p(1-p)^k s^k
=
\frac{p}{1-(1-p)s},
$$

para

$$
|s|<\frac{1}{1-p}.
$$

Aqui se ve bien la ventaja del metodo: una serie simple codifica toda la ley y vuelve algebraicos muchos calculos de suma y momentos.

## Como verificar que una funcion es una masa valida

Una funcion

$$
p:\mathbb R\to [0,1]
$$

define una distribucion discreta si:

1. es no negativa;
2. es no nula solo sobre un conjunto finito o numerable;
3. la suma de sus valores sobre el soporte es $1$.

### Ejemplo 6

La funcion

$$
p(k)=c\left(\frac12\right)^k,
\qquad
k=1,2,3,\dots
$$

sera una masa valida si $c$ se elige para que

$$
\sum_{k=1}^{\infty} c\left(\frac12\right)^k=1.
$$

Como

$$
\sum_{k=1}^{\infty}\left(\frac12\right)^k=1,
$$

debe tomarse

$$
c=1.
$$

## Variable discreta frente a variable continua

En una variable discreta:

- algunos puntos tienen probabilidad positiva;
- la distribucion se describe por una masa;
- la funcion de distribucion tiene saltos.

En una continua:

- cada punto suele tener probabilidad cero;
- la ley se describe mediante densidad o medida continua;
- la funcion de distribucion suele ser continua.

### Leccion

No debe mezclarse masa con densidad. Son objetos distintos.

## Relacion con modelos clasicos

Muchas distribuciones concretas son casos particulares de este esquema general:

- Bernoulli;
- binomial;
- geomatrica;
- poisson;
- hipergeometrica.

La masa de probabilidad es la idea unificadora de todas ellas.

## Error comun 1: pensar que una variable discreta debe tener soporte finito

No. Basta con que el soporte sea finito o numerable.

## Error comun 2: confundir masa con funcion de distribucion

La masa es

$$
p_X(x)=P(X=x),
$$

mientras que la funcion de distribucion es

$$
F_X(x)=P(X\le x).
$$

Son objetos relacionados, pero no iguales.

## Error comun 3: olvidar que los valores fuera del soporte tienen probabilidad cero

La ley discreta solo vive en el soporte. Fuera de el, la masa es cero.

## Practica guiada

### Ejercicio 1

Sea $X$ con soporte

$$
\{0,1,2\}
$$

y masa

$$
P(X=0)=0.2,\quad P(X=1)=0.5,\quad P(X=2)=0.3.
$$

Calcula

$$
P(X\ge 1).
$$

#### Solucion

$$
P(X\ge 1)=0.5+0.3=0.8.
$$

### Ejercicio 2

Con la misma variable, calcula

$$
E[X].
$$

#### Solucion

$$
E[X]=0(0.2)+1(0.5)+2(0.3)=1.1.
$$

### Ejercicio 3

Explica por que una variable continua no puede describirse por

$$
p_X(x)=P(X=x)
$$

de la misma manera que una discreta.

#### Solucion

Porque en variables continuas tipicas cada punto tiene probabilidad cero, de modo que la informacion relevante no esta en masas puntuales sino en probabilidades de intervalos o en una densidad.

## Cierre

La distribucion discreta es el lenguaje mas directo para variables que viven sobre conjuntos aislados. Su estructura parece simple, pero ya contiene casi todos los elementos esenciales de la teoria:

- soporte;
- masa;
- distribucion;
- momentos;
- transformaciones.

Por eso dominar bien este tema facilita entender luego todas las familias discretas particulares como manifestaciones de una misma idea general.
