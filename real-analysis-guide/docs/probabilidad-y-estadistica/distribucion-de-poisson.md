---
title: Distribucion de Poisson
description: Conteo de eventos raros, ley de Poisson, propiedades algebraicas, aproximacion binomial y relacion con procesos de Poisson.
---

# Distribucion de Poisson

## El modelo canonico de conteos raros

La distribucion de Poisson aparece cuando contamos ocurrencias de eventos relativamente raros e independientes en una ventana de observacion:

- llamadas por minuto;
- defectos por metro;
- emisiones radiactivas;
- llegadas a un servidor;
- mutaciones raras en una region.

Es uno de los modelos discretos mas importantes porque combina:

- interpretacion fisica clara;
- algebra simple;
- estabilidad por suma;
- y una conexion profunda con procesos de conteo.

## Definicion

Decimos que

$$
X\sim \operatorname{Poi}(\lambda),
\qquad
\lambda>0,
$$

si

$$
P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!},
\qquad
k=0,1,2,\dots
$$

## Significado del parametro

El parametro

$$
\lambda
$$

representa simultaneamente:

- la media del conteo;
- la varianza del conteo;
- la intensidad esperada de ocurrencias en la ventana observada.

Esta coincidencia entre media y varianza es una de las marcas distintivas del modelo Poisson.

## Normalizacion

La suma total de probabilidades es

$$
\sum_{k=0}^{\infty} e^{-\lambda}\frac{\lambda^k}{k!}
=
e^{-\lambda}\sum_{k=0}^{\infty}\frac{\lambda^k}{k!}
=
e^{-\lambda}e^\lambda
=
1.
$$

Por tanto la formula define una distribucion valida.

## Esperanza

### Teorema 1

Si

$$
X\sim \operatorname{Poi}(\lambda),
$$

entonces

$$
E[X]=\lambda.
$$

#### Demostracion

$$
E[X]
=
\sum_{k=0}^{\infty} k\,e^{-\lambda}\frac{\lambda^k}{k!}.
$$

El termino $k=0$ no aporta. Para $k\ge 1$:

$$
k\frac{\lambda^k}{k!}
=
\lambda \frac{\lambda^{k-1}}{(k-1)!}.
$$

Entonces

$$
E[X]
=
\lambda e^{-\lambda}\sum_{k=1}^{\infty}\frac{\lambda^{k-1}}{(k-1)!}
=
\lambda e^{-\lambda}e^\lambda
=
\lambda.
$$

## Segundo momento y varianza

Una forma eficiente de calcular la varianza es usar

$$
E[X(X-1)].
$$

### Teorema 2

Si

$$
X\sim \operatorname{Poi}(\lambda),
$$

entonces

$$
\operatorname{Var}(X)=\lambda.
$$

#### Demostracion

Se calcula

$$
E[X(X-1)]
=
\sum_{k=0}^{\infty} k(k-1)e^{-\lambda}\frac{\lambda^k}{k!}.
$$

Para $k\ge 2$:

$$
k(k-1)\frac{\lambda^k}{k!}
=
\lambda^2\frac{\lambda^{k-2}}{(k-2)!}.
$$

Luego

$$
E[X(X-1)]
=
\lambda^2 e^{-\lambda}\sum_{k=2}^{\infty}\frac{\lambda^{k-2}}{(k-2)!}
=
\lambda^2.
$$

Como

$$
X^2=X(X-1)+X,
$$

tenemos

$$
E[X^2]=\lambda^2+\lambda.
$$

Por tanto

$$
\operatorname{Var}(X)=E[X^2]-(E[X])^2=\lambda.
$$

## Ejemplo 1: llamadas por minuto

Si el numero promedio de llamadas por minuto es $3$ y el modelo Poisson es razonable, entonces

$$
X\sim \operatorname{Poi}(3).
$$

La probabilidad de recibir exactamente $5$ llamadas es

$$
P(X=5)=e^{-3}\frac{3^5}{5!}.
$$

## Probabilidad de cero eventos

Una cantidad especialmente importante es

$$
P(X=0)=e^{-\lambda}.
$$

### Ejemplo 2

Si el promedio de defectos por metro de cable es

$$
\lambda=0.2,
$$

la probabilidad de que un metro salga sin defectos es

$$
e^{-0.2}.
$$

### Comentario

Esta formula aparece continuamente en fiabilidad y teoria de colas.

## Recurrencia entre probabilidades sucesivas

Las masas Poisson satisfacen

$$
P(X=k+1)=\frac{\lambda}{k+1}P(X=k).
$$

### Utilidad

Esta relacion sirve para:

- calcular tablas recursivamente;
- estudiar monotonia;
- localizar la moda.

## Moda

Una moda de la distribucion Poisson es

$$
\lfloor \lambda \rfloor.
$$

Si

$$
\lambda
$$

es entero, puede haber dos modas consecutivas:

$$
\lambda-1,\quad \lambda.
$$

## Funcion generadora de probabilidades

La funcion generadora de probabilidades es

$$
G_X(s)=E[s^X]
=
\exp(\lambda(s-1)).
$$

### Comentario

Esta expresion deja ver inmediatamente varias propiedades estructurales, entre ellas la estabilidad por suma.

## Funcion generadora de momentos

La funcion generadora de momentos es

$$
M_X(t)=E[e^{tX}]
=
\exp(\lambda(e^t-1)).
$$

### Comentario

Esta forma compacta resume toda la distribucion y facilita el calculo de momentos.

## Estabilidad por suma

### Teorema 3

Si

$$
X\sim \operatorname{Poi}(\lambda_1),
\qquad
Y\sim \operatorname{Poi}(\lambda_2)
$$

son independientes, entonces

$$
X+Y\sim \operatorname{Poi}(\lambda_1+\lambda_2).
$$

#### Demostracion por convolucion

Para

$$
k\ge 0,
$$

$$
\begin{aligned}
P(X+Y=k)
&=
\sum_{j=0}^k P(X=j)P(Y=k-j)\\
&=
\sum_{j=0}^k
e^{-\lambda_1}\frac{\lambda_1^j}{j!}
e^{-\lambda_2}\frac{\lambda_2^{k-j}}{(k-j)!}\\
&=
e^{-(\lambda_1+\lambda_2)}
\frac{1}{k!}
\sum_{j=0}^k \binom{k}{j}\lambda_1^j\lambda_2^{k-j}\\
&=
e^{-(\lambda_1+\lambda_2)}
\frac{(\lambda_1+\lambda_2)^k}{k!}.
\end{aligned}
$$

## Interpretacion de la estabilidad

Si dos mecanismos independientes generan eventos con intensidades medias $\lambda_1$ y $\lambda_2$, el total tiene intensidad

$$
\lambda_1+\lambda_2.
$$

Esto hace muy natural pensar $\lambda$ como tasa o intensidad agregable.

## Poisson como limite de la binomial

### Teorema 4

Si

$$
X_n\sim \operatorname{Bin}(n,p_n),
$$

y

$$
np_n\to \lambda,
$$

entonces para cada $k$ fijo:

$$
P(X_n=k)\to e^{-\lambda}\frac{\lambda^k}{k!}.
$$

### Comentario

Este resultado explica por que la Poisson modela eventos raros:

- muchos ensayos;
- probabilidad pequena en cada uno;
- media total moderada.

## Idea del limite binomial

Si

$$
p_n=\frac{\lambda}{n},
$$

entonces

$$
P(X_n=k)
=
\binom{n}{k}\left(\frac{\lambda}{n}\right)^k
\left(1-\frac{\lambda}{n}\right)^{n-k}.
$$

Para $k$ fijo y $n$ grande:

- $\binom{n}{k}\left(\frac{1}{n}\right)^k\to \frac{1}{k!}$;
- $\left(1-\frac{\lambda}{n}\right)^n\to e^{-\lambda}$;
- $\left(1-\frac{\lambda}{n}\right)^{-k}\to 1$.

De ahi emerge exactamente la masa de Poisson.

## Ejemplo 3: defectos raros

Si cada una de $1000$ piezas tiene probabilidad $0.001$ de ser defectuosa de forma independiente, entonces

$$
X\sim \operatorname{Bin}(1000,0.001).
$$

Como

$$
np=1,
$$

una aproximacion natural es

$$
X\approx \operatorname{Poi}(1).
$$

Entonces, por ejemplo,

$$
P(X=0)\approx e^{-1}.
$$

## Relacion con el proceso de Poisson

Un proceso de Poisson de intensidad $\lambda$ describe llegadas independientes en el tiempo con tasa media $\lambda$ por unidad.

En ese contexto, el numero de eventos en un intervalo de longitud $t$ satisface

$$
N(t)\sim \operatorname{Poi}(\lambda t).
$$

### Comentario

Esta es una de las interpretaciones mas profundas de la distribucion. La Poisson no es solo una formula discreta, sino la marginal natural de un proceso de conteo continuo en el tiempo.

## Intervalos cortos y rareza

En una ventana muy pequena, un proceso Poisson tiene probabilidad aproximada:

- de un evento:

$$
\lambda h;
$$

- de dos o mas:

despreciable frente a $h$.

Esta propiedad de eventos raros en intervalos pequenos es parte de la intuicion que conduce al modelo.

## Aproximacion normal

Cuando

$$
\lambda
$$

es grande, la Poisson puede aproximarse por una normal:

$$
X\approx N(\lambda,\lambda).
$$

Equivalentemente,

$$
\frac{X-\lambda}{\sqrt{\lambda}}\approx N(0,1).
$$

### Comentario

Asi, la Poisson conecta dos mundos:

- binomial en regimen de rareza;
- normal en regimen de gran intensidad.

## Sobre-dispersion y limites del modelo

Una caracteristica rigida del modelo Poisson es:

$$
E[X]=\operatorname{Var}(X)=\lambda.
$$

En datos reales, si la varianza observada supera mucho la media, puede haber sobre-dispersion y la Poisson puede resultar demasiado simple.

### Posibles causas

- heterogeneidad no modelada;
- dependencia entre eventos;
- mezcla de poblaciones;
- rafagas o agrupamientos.

## Error comun 1: usar Poisson sin independencia o tasa estable

Si los eventos llegan en rafagas o la intensidad cambia bruscamente en el tiempo, el modelo Poisson basico puede ser inadecuado.

## Error comun 2: interpretar lambda como probabilidad

$\lambda$ no es una probabilidad, sino una media esperada de conteos. Puede ser mayor que uno.

## Error comun 3: olvidar la escala de observacion

Si $\lambda$ esta dado por hora, el parametro en media hora no es el mismo; hay que reescalar a

$$
\lambda t.
$$

## Practica guiada

### Ejercicio 1

Si

$$
X\sim \operatorname{Poi}(2),
$$

escribe

$$
P(X=3).
$$

#### Solucion

$$
P(X=3)=e^{-2}\frac{2^3}{3!}.
$$

### Ejercicio 2

Si

$$
X\sim \operatorname{Poi}(4),
\qquad
Y\sim \operatorname{Poi}(1)
$$

son independientes, cual es la ley de

$$
X+Y?
$$

#### Solucion

$$
X+Y\sim \operatorname{Poi}(5).
$$

### Ejercicio 3

Explica por que la Poisson puede aproximar una binomial con $n$ grande y $p$ pequeno.

#### Solucion

Porque en ese regimen cada ensayo individual casi nunca produce exito, pero el numero total esperado $np$ puede mantenerse moderado. El limite puntual de las masas binomiales es exactamente la masa de Poisson.

## Cierre

La distribucion de Poisson es el modelo natural de conteos raros e independientes. Su importancia no esta solo en la formula

$$
e^{-\lambda}\frac{\lambda^k}{k!},
$$

sino en la red de propiedades que la hacen estructural:

- media y varianza iguales;
- estabilidad por suma;
- limite de la binomial;
- marginal de procesos de Poisson;
- aproximacion normal para intensidades grandes.

Por eso es uno de los verdaderos pilares del mundo discreto.
