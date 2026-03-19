---
title: Ejercicios con planos y rectas en el espacio
description: Problemas trabajados sobre construccion, interseccion, paralelismo, perpendicularidad y posicion relativa de rectas y planos en R3.
---

# Ejercicios con planos y rectas en el espacio

## Motivacion

Las rectas y los planos se entienden de verdad cuando se usan en problemas mixtos:

- construir un objeto a partir de datos geometricos;
- decidir posicion relativa;
- hallar intersecciones;
- traducir una condicion geometrica a una ecuacion vectorial o lineal.

Este tema no es una lista de cuentas. Es un entrenamiento en pasar del lenguaje geometrico al algebraico y viceversa.

## Ejercicio 1: recta que pasa por dos puntos

Hallar la recta que pasa por

$$
P=(2,-1,3),
\qquad
Q=(5,1,-2).
$$

### Solucion

El vector director es

$$
v=Q-P=(3,2,-5).
$$

Por tanto una ecuacion vectorial es

$$
r(t)=(2,-1,3)+t(3,2,-5).
$$

Las ecuaciones parametricas son

$$
\begin{cases}
x=2+3t,\\
y=-1+2t,\\
z=3-5t.
\end{cases}
$$

## Ejercicio 2: plano por tres puntos

Hallar el plano que pasa por

$$
P_0=(1,0,2),
\quad
P_1=(3,-1,4),
\quad
P_2=(0,2,1).
$$

### Solucion

Construimos dos vectores del plano:

$$
u=P_1-P_0=(2,-1,2),
\qquad
v=P_2-P_0=(-1,2,-1).
$$

El vector normal es

$$
u\times v=
\begin{vmatrix}
i & j & k\\
2 & -1 & 2\\
-1 & 2 & -1
\end{vmatrix}
=(-3,0,3).
$$

Podemos simplificar a

$$
n=(-1,0,1).
$$

La ecuacion del plano es

$$
-(x-1)+(z-2)=0,
$$

es decir,

$$
z-x-1=0.
$$

## Ejercicio 3: punto de interseccion de una recta con un plano

Sea

$$
r(t)=(1,2,0)+t(2,-1,3)
$$

y el plano

$$
\Pi:\ 2x+y-z-4=0.
$$

### Solucion

Sustituimos la parametrizacion en el plano:

$$
2(1+2t)+(2-t)-(3t)-4=0.
$$

Simplificando,

$$
2+4t+2-t-3t-4=0
\iff
0=0.
$$

La identidad muestra que todo punto de la recta satisface la ecuacion del plano. Luego

$$
r\subseteq \Pi.
$$

### Comentario

Este tipo de compatibilidad total es facil de pasar por alto. No siempre el resultado es un unico punto.

## Ejercicio 4: recta perpendicular a un plano por un punto dado

Hallar la recta perpendicular al plano

$$
\Pi:\ 3x-2y+z+1=0
$$

que pasa por

$$
P=(1,1,1).
$$

### Solucion

Una recta perpendicular al plano tiene como vector direccion un normal del plano:

$$
n=(3,-2,1).
$$

Por tanto

$$
r(t)=(1,1,1)+t(3,-2,1).
$$

## Ejercicio 5: posicion relativa de dos rectas

Determinar la posicion relativa de

$$
r(t)=(0,1,2)+t(1,1,0),
$$

$$
s(u)=(1,0,3)+u(2,2,0).
$$

### Solucion

Los vectores direccion satisfacen

$$
(2,2,0)=2(1,1,0),
$$

luego las rectas son paralelas o coincidentes.

Verificamos si el punto base de una pertenece a la otra:

$$
(1,0,3)\stackrel{?}{=}(0,1,2)+t(1,1,0).
$$

Igualando coordenadas:

$$
t=1,
\qquad
1+t=0,
\qquad
2=3.
$$

No hay compatibilidad. Luego las rectas son paralelas distintas.

## Ejercicio 6: recta de interseccion de dos planos

Hallar la recta de interseccion de

$$
\Pi_1:\ x+y+z=2,
$$

$$
\Pi_2:\ x-y+z=0.
$$

### Solucion

Restando ambas ecuaciones obtenemos

$$
2y=2,
\qquad
y=1.
$$

Sustituyendo en cualquiera,

$$
x+z=1.
$$

Tomando

$$
z=t,
$$

obtenemos

$$
x=1-t.
$$

La recta de interseccion es

$$
r(t)=(1-t,1,t).
$$

Puede reescribirse como

$$
r(t)=(1,1,0)+t(-1,0,1).
$$

## Ejercicio 7: plano que contiene una recta y es paralelo a otra

Hallar el plano que contiene la recta

$$
r(t)=(1,0,0)+t(1,2,1)
$$

y es paralelo a la recta

$$
s(u)=(0,1,1)+u(2,1,-1).
$$

### Solucion

El plano debe contener dos direcciones:

$$
v_1=(1,2,1),
\qquad
v_2=(2,1,-1).
$$

Un vector normal es

$$
n=v_1\times v_2=
\begin{vmatrix}
i & j & k\\
1 & 2 & 1\\
2 & 1 & -1
\end{vmatrix}
=(-3,3,-3).
$$

Simplificamos:

$$
n=(1,-1,1).
$$

Como el plano pasa por

$$
P=(1,0,0),
$$

su ecuacion es

$$
(x-1)-y+z=0,
$$

es decir,

$$
x-y+z-1=0.
$$

## Ejercicio 8: comprobar si una recta es paralela a un plano

Sea

$$
r(t)=(2,1,-1)+t(1,3,2)
$$

y

$$
\Pi:\ x-2y+\frac{5}{2}z+4=0.
$$

### Solucion

La normal del plano es

$$
n=\left(1,-2,\frac52\right).
$$

Calculamos

$$
v\cdot n=
(1,3,2)\cdot \left(1,-2,\frac52\right)
=
1-6+5=0.
$$

Luego la recta es paralela al plano o esta contenida en el.

Sustituimos un punto de la recta en el plano:

$$
2-2(1)+\frac52(-1)+4=\frac32\ne 0.
$$

Entonces la recta no esta contenida y por tanto es paralela distinta.

## Metodo general de resolucion

En problemas mixtos conviene seguir siempre el mismo orden:

1. identificar los datos geometricos;
2. traducirlos a vectores, normales o parametrizaciones;
3. escribir el sistema algebraico correspondiente;
4. resolverlo con cuidado;
5. interpretar el resultado geometricamente.

## Errores comunes

- Sacar conclusiones geometricas antes de resolver por completo el sistema.
- Olvidar distinguir entre "paralela al plano" y "contenida en el plano".
- Hallar un normal con producto cruz mal calculado y arrastrar todo el problema.
- Resolver la interseccion de planos sin parametrizar correctamente la recta resultante.

## Ejercicios propuestos

1. Construir un plano que pase por un punto y contenga una recta dada.
2. Hallar la recta de interseccion de dos planos no paralelos.
3. Decidir si dos rectas son secantes, paralelas o reversas.
4. Hallar un plano perpendicular a otro que contenga una recta dada.
5. Disenar un problema donde una recta este contenida en un plano y otro donde solo sea paralela.

## Cierre

Los ejercicios con rectas y planos entrenan una habilidad central del calculo vectorial: traducir estructura geometrica a algebra lineal concreta. Sin ese dominio, las coordenadas curvilineas, las curvas espaciales y las integrales de linea se vuelven tecnicas sin intuicion.
