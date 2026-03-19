---
title: Distribucion binomial
description: Ensayos Bernoulli, funcion de masa binomial, momentos, propiedades, aproximaciones clasicas y conexiones inferenciales.
---

# Distribucion binomial

## El modelo discreto de exito-fracaso repetido

La distribucion binomial aparece cuando repetimos un experimento con dos resultados posibles:

- exito;
- fracaso,

bajo condiciones estables y con independencia entre repeticiones.

Es uno de los modelos discretos mas importantes porque organiza gran parte de la probabilidad elemental y de la inferencia sobre proporciones.

## Ensayo Bernoulli

Un ensayo Bernoulli tiene:

- probabilidad de exito

$$
p;
$$

- probabilidad de fracaso

$$
1-p.
$$

Si definimos

$$
X=
\begin{cases}
1, & \text{exito},\\
0, & \text{fracaso},
\end{cases}
$$

entonces

$$
X\sim \operatorname{Bernoulli}(p).
$$

### Media y varianza de Bernoulli

$$
E[X]=p,
\qquad
\operatorname{Var}(X)=p(1-p).
$$

## Definicion de la binomial

Sean

$$
X_1,\dots,X_n
$$

variables aleatorias i.i.d. Bernoulli$(p)$. Definimos

$$
S_n=X_1+\cdots+X_n.
$$

Entonces

$$
S_n\sim \operatorname{Bin}(n,p).
$$

La interpretacion es clara:

$$
S_n
$$

cuenta el numero de exitos en $n$ ensayos.

## Funcion de masa

### Teorema 1

Para

$$
k=0,1,\dots,n,
$$

$$
P(S_n=k)=\binom{n}{k}p^k(1-p)^{n-k}.
$$

### Demostracion

Para que haya exactamente $k$ exitos:

1. hay que elegir en que $k$ posiciones ocurren;
2. cada patron concreto tiene probabilidad

$$
p^k(1-p)^{n-k}
$$

por independencia.

El numero de patrones posibles es

$$
\binom{n}{k}.
$$

Multiplicando, obtenemos

$$
P(S_n=k)=\binom{n}{k}p^k(1-p)^{n-k}.
$$

\qed

## Normalizacion

La suma total de probabilidades es

$$
\sum_{k=0}^n \binom{n}{k}p^k(1-p)^{n-k}
=(p+(1-p))^n
=1
$$

por el teorema binomial.

Esto explica el nombre de la distribucion: esta ligada directamente a la expansion binomial.

## Ejemplo 1: caras en monedas

Si se lanzan $10$ monedas equilibradas, la probabilidad de obtener exactamente $6$ caras es

$$
\binom{10}{6}\left(\frac12\right)^{10}.
$$

Como

$$
\binom{10}{6}=210,
$$

tenemos

$$
P(S_{10}=6)=\frac{210}{1024}\approx 0.2051.
$$

## Esperanza

### Teorema 2

Si

$$
X\sim \operatorname{Bin}(n,p),
$$

entonces

$$
E[X]=np.
$$

### Demostracion

Escribimos

$$
X=X_1+\cdots+X_n
$$

con $X_i$ Bernoulli$(p)$. Por linealidad:

$$
E[X]=\sum_{i=1}^n E[X_i]=np.
$$

\qed

## Varianza

### Teorema 3

Si

$$
X\sim \operatorname{Bin}(n,p),
$$

entonces

$$
\operatorname{Var}(X)=np(1-p).
$$

### Demostracion

Por independencia,

$$
\operatorname{Var}(X)
=
\sum_{i=1}^n \operatorname{Var}(X_i)
=
np(1-p).
$$

\qed

## Funcion generadora de probabilidades

La funcion generadora de probabilidades es

$$
G_X(s)=E[s^X]=(1-p+ps)^n.
$$

### Comentario

Esta expresion compacta resume la ley entera y permite recuperar momentos por derivacion.

## Moda

Una moda de la binomial es, en general,

$$
\lfloor (n+1)p\rfloor.
$$

Si

$$
(n+1)p
$$

es entero, puede haber dos modas consecutivas.

### Lectura

La binomial concentra su masa cerca de $np$, que ademas es su esperanza.

## Simetria y asimetria

La distribucion binomial es simetrica solo en el caso

$$
p=\frac12.
$$

Si

$$
p<\frac12,
$$

la masa se concentra hacia valores bajos. Si

$$
p>\frac12,
$$

se concentra hacia valores altos.

### Comentario

La asimetria se vuelve especialmente visible cuando $n$ no es grande.

## Binomial como suma de Bernoulli

La representacion

$$
X=\sum_{i=1}^n X_i
$$

es mas que una definicion. Explica:

- la esperanza;
- la varianza;
- el uso natural de la binomial en muestreo;
- la aproximacion normal via TCL;
- la relacion con la proporcion muestral

$$
\hat p=\frac{X}{n}.
$$

## Distribucion de la proporcion muestral

Si

$$
X\sim \operatorname{Bin}(n,p),
$$

entonces

$$
\hat p=\frac{X}{n}
$$

tiene:

$$
E[\hat p]=p,
\qquad
\operatorname{Var}(\hat p)=\frac{p(1-p)}{n}.
$$

Esta observacion es central en inferencia sobre proporciones.

## Ejemplo 2: piezas defectuosas

Si la probabilidad de defecto de una pieza es

$$
p=0.02
$$

y se revisan

$$
n=100
$$

piezas independientes, entonces el numero de defectuosas sigue

$$
X\sim \operatorname{Bin}(100,0.02).
$$

La probabilidad de no encontrar defectos es

$$
P(X=0)=(0.98)^{100}.
$$

La esperanza es

$$
E[X]=100(0.02)=2.
$$

### Comentario

La esperanza igual a $2$ no significa que siempre vayan a aparecer exactamente dos defectuosas. Solo describe el promedio a largo plazo.

## Recurrencia entre probabilidades sucesivas

Las probabilidades binomiales satisfacen

$$
\frac{P(X=k+1)}{P(X=k)}
=
\frac{n-k}{k+1}\cdot \frac{p}{1-p}.
$$

Esta razon es util para:

- localizar la moda;
- estudiar monotonia;
- hacer calculos recursivos.

## Aproximacion de Poisson

Si

$$
n
$$

es grande y

$$
p
$$

es pequeno, con

$$
\lambda=np
$$

moderado, entonces

$$
\operatorname{Bin}(n,p)\approx \operatorname{Poisson}(\lambda).
$$

### Comentario

Esta aproximacion es muy util en conteos raros:

- defectos;
- fallos;
- eventos raros por intervalo.

## Aproximacion normal

Cuando

$$
n
$$

es grande y

$$
np,\ n(1-p)
$$

no son demasiado pequenos, la binomial puede aproximarse por una normal:

$$
X\approx N(np,np(1-p)).
$$

Equivalentemente,

$$
\frac{X-np}{\sqrt{np(1-p)}}\approx N(0,1).
$$

### Comentario

Esta aproximacion es una de las puertas de entrada al teorema central del limite en su version aplicada.

## Correccion por continuidad

Como la binomial es discreta y la normal es continua, a veces se mejora la aproximacion usando correccion por continuidad.

Por ejemplo:

$$
P(X\le k)
\approx
P\left(
Z\le \frac{k+0.5-np}{\sqrt{np(1-p)}}
\right).
$$

No siempre es imprescindible, pero ayuda cuando el tamano no es enorme.

## Relacion con pruebas de hipotesis

La binomial esta en el centro de:

- pruebas exactas para proporciones;
- intervalos exactos tipo Clopper-Pearson;
- aproximaciones normales para contrastes de proporcion;
- modelos Bernoulli repetidos.

Es decir, no es solo una ley discreta bonita; es una herramienta inferencial central.

## Error comun 1: usar binomial sin independencia

Si los ensayos no son independientes, la binomial puede fallar aunque cada ensayo tenga dos resultados.

## Error comun 2: olvidar que p debe ser constante

La binomial supone la misma probabilidad de exito en cada ensayo. Si esa probabilidad cambia con el tiempo o con el ensayo, el modelo ya no es exactamente binomial.

## Error comun 3: interpretar la esperanza como resultado tipico obligatorio

Que

$$
E[X]=np
$$

no significa que el valor observado deba ser exactamente $np$.

## Practica guiada

### Ejercicio 1

Si

$$
X\sim \operatorname{Bin}(8,0.3),
$$

escribe

$$
P(X=2).
$$

#### Solucion

$$
P(X=2)=\binom{8}{2}(0.3)^2(0.7)^6.
$$

### Ejercicio 2

Cual es la esperanza y varianza de

$$
X\sim \operatorname{Bin}(20,0.4)?
$$

#### Solucion

$$
E[X]=20(0.4)=8,
\qquad
\operatorname{Var}(X)=20(0.4)(0.6)=4.8.
$$

### Ejercicio 3

Por que la proporcion muestral tiene varianza

$$
\frac{p(1-p)}{n}?
$$

#### Solucion

Porque

$$
\hat p=\frac{X}{n}
$$

con

$$
X\sim \operatorname{Bin}(n,p),
$$

y entonces

$$
\operatorname{Var}(\hat p)=\frac{1}{n^2}\operatorname{Var}(X)
=
\frac{1}{n^2}np(1-p)
=
\frac{p(1-p)}{n}.
$$

## Cierre

La distribucion binomial organiza el conteo aleatorio de exitos en ensayos repetidos. Su importancia viene de varias capas a la vez:

- modelo natural de exito-fracaso;
- suma de Bernoulli;
- base de la inferencia sobre proporciones;
- punto de encuentro entre distribuciones discretas y aproximaciones asintoticas.

Entenderla bien evita verla como una mera formula combinatoria y permite usarla como lo que es: uno de los modelos nucleares de la probabilidad aplicada.
