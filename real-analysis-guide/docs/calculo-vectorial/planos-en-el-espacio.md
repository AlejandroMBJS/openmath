---
title: Planos en el espacio
description: Ecuaciones de planos en R3, vector normal, construccion desde datos geometricos y criterios de posicion relativa.
---

# Planos en el espacio

## Motivacion e intuicion

Un plano en $\mathbb{R}^3$ es el analogo tridimensional de una recta en el plano: un objeto lineal de dimension dos. Su descripcion natural no se hace mediante una pendiente, sino mediante un vector perpendicular llamado **vector normal**.

Toda la geometria elemental de planos se organiza alrededor de esa idea:

- un plano queda determinado por un punto y un vector normal;
- la ecuacion general del plano es una condicion de ortogonalidad;
- paralelismo y perpendicularidad entre planos se leen directamente en sus normales.

## Prerrequisitos

Conviene manejar:

- rectas en el espacio;
- producto punto y producto cruz;
- sistemas lineales basicos;
- vectores en $\mathbb{R}^3$.

## Definicion vectorial

Sea

$$
P_0=(x_0,y_0,z_0)
$$

un punto y sea

$$
n=(A,B,C)\ne 0
$$

un vector.

El plano con punto base $P_0$ y vector normal $n$ esta formado por los puntos

$$
P=(x,y,z)
$$

tales que

$$
n\cdot (P-P_0)=0.
$$

## Ecuacion punto-normal

Desarrollando,

$$
A(x-x_0)+B(y-y_0)+C(z-z_0)=0.
$$

Esta es la forma mas importante de la ecuacion de un plano.

## Ecuacion general

Al expandir y reagrupar se obtiene

$$
Ax+By+Cz+D=0,
$$

donde

$$
D=-(Ax_0+By_0+Cz_0).
$$

### Observacion

Todo plano no degenerado en $\mathbb{R}^3$ puede escribirse en esta forma con

$$
(A,B,C)\ne (0,0,0).
$$

El vector

$$
n=(A,B,C)
$$

es normal al plano.

## Interpretacion geometrica

Si

$$
Ax+By+Cz+D=0,
$$

entonces el conjunto de puntos del plano es precisamente el de aquellos cuyo vector posicion satisface una condicion lineal.

La direccion del plano esta contenida en todos los vectores ortogonales a $n$.

## Parametrizacion de un plano

Si $u$ y $v$ son dos vectores no paralelos contenidos en el plano, entonces

$$
r(s,t)=P_0+s u+t v,
\qquad
s,t\in \mathbb{R},
$$

parametriza el plano.

### Comentario

Esto muestra que un plano es un objeto bidimensional: necesita dos parametros.

## Construcciones fundamentales

## Plano determinado por un punto y un vector normal

Este es el caso basico y ya quedo descrito por la ecuacion punto-normal.

## Plano determinado por tres puntos no colineales

Sean

$$
P_0,\ P_1,\ P_2
$$

tres puntos no alineados. Entonces

$$
u=P_1-P_0,
\qquad
v=P_2-P_0
$$

son no paralelos y generan el plano.

Un vector normal se obtiene con

$$
n=u\times v.
$$

### Teorema 1

Tres puntos no colineales determinan un unico plano.

#### Demostracion

Los vectores

$$
u=P_1-P_0,
\qquad
v=P_2-P_0
$$

no son proporcionales, porque los puntos no son colineales. Por tanto generan un subespacio afin bidimensional con base en $P_0$. Cualquier plano que contenga los tres puntos debe contener las direcciones $u$ y $v$, y por tanto coincide con el plano

$$
P_0+s u+t v.
$$

## Plano determinado por una recta y un punto exterior

Si una recta

$$
r(t)=P+t v
$$

y un punto

$$
Q
$$

no perteneciente a la recta son dados, entonces el plano queda determinado por los vectores

$$
v,
\qquad
Q-P.
$$

Un vector normal puede obtenerse como

$$
n=v\times (Q-P).
$$

## Posicion relativa de dos planos

Sean

$$
\Pi_1: A_1x+B_1y+C_1z+D_1=0,
$$

$$
\Pi_2: A_2x+B_2y+C_2z+D_2=0.
$$

Con normales

$$
n_1=(A_1,B_1,C_1),
\qquad
n_2=(A_2,B_2,C_2).
$$

### Paralelismo

Los planos son paralelos si y solo si

$$
n_1=\lambda n_2
$$

para algun escalar no nulo $\lambda$.

### Coincidencia

Dos planos coinciden si sus coeficientes son proporcionales de manera global:

$$
(A_1,B_1,C_1,D_1)=\lambda (A_2,B_2,C_2,D_2).
$$

### Interseccion

Si no son paralelos, se intersectan en una recta.

## Angulo entre planos

El angulo entre dos planos se define como el angulo agudo entre sus vectores normales.

Por tanto,

$$
\cos\theta=
\frac{|n_1\cdot n_2|}{\|n_1\|\,\|n_2\|}.
$$

## Recta y plano

Sea

$$
r(t)=P+t v
$$

y sea

$$
\Pi: Ax+By+Cz+D=0
$$

con normal

$$
n=(A,B,C).
$$

### Paralelismo recta-plano

La recta es paralela al plano si y solo si

$$
v\cdot n=0.
$$

### Perpendicularidad recta-plano

La recta es perpendicular al plano si y solo si su vector direccion es paralelo al normal:

$$
v=\lambda n.
$$

### Interseccion

Para hallar el punto de corte se sustituye la parametrizacion de la recta en la ecuacion del plano y se resuelve el parametro.

## Plano mediador

Dados dos puntos

$$
P,\ Q,
$$

el plano mediador del segmento $\overline{PQ}$ es el conjunto de puntos equidistantes de ambos.

Su vector normal es

$$
Q-P,
$$

y pasa por el punto medio

$$
M=\frac{P+Q}{2}.
$$

## Ejemplos trabajados

### Ejemplo 1: plano por un punto y normal

Hallar el plano que pasa por

$$
P_0=(1,-1,2)
$$

y tiene normal

$$
n=(2,3,-1).
$$

La ecuacion punto-normal es

$$
2(x-1)+3(y+1)-(z-2)=0.
$$

Simplificando,

$$
2x+3y-z+3=0.
$$

### Ejemplo 2: plano por tres puntos

Sean

$$
P_0=(1,0,0),
\quad
P_1=(0,1,0),
\quad
P_2=(0,0,1).
$$

Entonces

$$
u=P_1-P_0=(-1,1,0),
\qquad
v=P_2-P_0=(-1,0,1).
$$

Un vector normal es

$$
u\times v=(1,1,1).
$$

La ecuacion del plano es

$$
(x-1)+y+z=0,
$$

es decir,

$$
x+y+z=1.
$$

### Ejemplo 3: interseccion recta-plano

Sea

$$
r(t)=(1,2,3)+t(2,-1,1)
$$

y sea

$$
\Pi:\ x-y+z-5=0.
$$

Sustituyendo,

$$
(1+2t)-(2-t)+(3+t)-5=0.
$$

Esto da

$$
4t-3=0,
\qquad
t=\frac{3}{4}.
$$

Luego el punto de interseccion es

$$
\left(1+\frac{3}{2},\ 2-\frac{3}{4},\ 3+\frac{3}{4}\right)
=
\left(\frac{5}{2},\frac{5}{4},\frac{15}{4}\right).
$$

## Errores comunes

- Confundir el vector normal con un vector contenido en el plano.
- Olvidar que la ecuacion general de un plano requiere que no todos $A,B,C$ sean cero.
- Construir el plano por tres puntos usando producto cruz de vectores mal orientados o mal calculados.
- Decir que dos planos son iguales solo porque sus normales son paralelas; eso garantiza paralelismo, no coincidencia.
- Resolver mal la interseccion recta-plano al sustituir coordenadas.

## Ejercicios propuestos

1. Hallar la ecuacion del plano que pasa por un punto dado y es perpendicular a un vector dado.
2. Hallar la ecuacion del plano que pasa por tres puntos no colineales.
3. Decidir si dos planos son paralelos, coincidentes o secantes.
4. Calcular el angulo entre dos planos a partir de sus normales.
5. Hallar el plano que contiene una recta dada y un punto exterior.

## Cierre

Los planos en el espacio convierten la geometria tridimensional en algebra lineal elemental. La nocion de vector normal unifica ecuaciones, construcciones y posiciones relativas, y prepara de manera natural el estudio de distancias, proyecciones y coordenadas curvilineas.
