---
title: Pivoteo parcial
description: Eliminacion gaussiana con intercambio de filas, estabilidad numerica, factor PA igual LU y ejemplo de resolucion.
---

# Pivoteo parcial

## Motivacion

Resolver un sistema lineal

$$
Ax=b
$$

por eliminacion gaussiana parece, al principio, un problema puramente algebraico. En aritmetica exacta eso es razonable. En computacion numerica, sin embargo, el tamano relativo de los pivotes importa enormemente.

Si en algun paso el pivote es:

- cero, la eliminacion se detiene;
- muy pequeno, los multiplicadores pueden crecer y amplificar errores de redondeo.

El **pivoteo parcial** corrige precisamente ese problema: antes de eliminar una columna, se permutan filas para colocar un pivote de gran magnitud en la posicion activa.

## Recordatorio: eliminacion gaussiana

Dado

$$
A=(a_{ij})\in \mathbb{R}^{n\times n},
$$

la eliminacion gaussiana transforma

$$
A
$$

mediante operaciones elementales por filas hasta obtener una matriz triangular superior

$$
U.
$$

Si el sistema no es singular y no aparecen pivotes nulos, luego se resuelve por sustitucion hacia atras.

## Problema sin pivoteo

Considere el sistema

$$
\begin{pmatrix}
\varepsilon & 1\\
1 & 1
\end{pmatrix}
\begin{pmatrix}
x_1\\
x_2
\end{pmatrix}
=
\begin{pmatrix}
1+\varepsilon\\
2
\end{pmatrix},
$$

con

$$
0<\varepsilon\ll 1.
$$

Si se usa como primer pivote

$$
\varepsilon,
$$

el multiplicador es

$$
m_{21}=\frac{1}{\varepsilon},
$$

que puede ser gigantesco. En aritmetica finita eso es muy mala idea.

Si en cambio intercambiamos filas, el pivote pasa a ser

$$
1,
$$

y la eliminacion se vuelve estable.

## Matrices de permutacion

Un intercambio de filas puede representarse multiplicando a izquierda por una matriz de permutacion

$$
P.
$$

Estas matrices satisfacen:

- cada fila y cada columna tiene exactamente un

$$
1;
$$

- 

$$
P^{-1}=P^\top.
$$

## Idea del pivoteo parcial

En el paso

$$
k,
$$

se inspeccionan los elementos de la columna

$$
k
$$

desde la fila

$$
k
$$

hasta la fila

$$
n.
$$

Se escoge como pivote el elemento de mayor valor absoluto:

$$
\lvert a_{pk}^{(k)}\rvert
=
\max_{k\le i\le n}\lvert a_{ik}^{(k)}\rvert.
$$

Luego se intercambian las filas

$$
k
$$

y

$$
p.
$$

## Algoritmo

Partimos de la matriz aumentada o de

$$
A
$$

y

$$
b
$$

por separado.

Para

$$
k=1,\dots,n-1:
$$

1. buscar

$$
p
$$

con

$$
\lvert a_{pk}\rvert=\max_{k\le i\le n}\lvert a_{ik}\rvert;
$$

2. si

$$
a_{pk}=0,
$$

la matriz es singular en ese paso;
3. intercambiar filas

$$
k
$$

y

$$
p;
$$

4. para

$$
i=k+1,\dots,n
$$

calcular el multiplicador

$$
m_{ik}=\frac{a_{ik}}{a_{kk}};
$$

5. reemplazar la fila

$$
i
$$

por

$$
R_i-m_{ik}R_k.
$$

Al final se obtiene una matriz triangular superior

$$
U.
$$

## Multiplicadores y estructura

Los multiplicadores

$$
m_{ik}
$$

pueden almacenarse en la parte inferior de la matriz, dando lugar a una factorizacion de la forma

$$
PA=LU,
$$

donde:

- 

$$
P
$$

es una matriz de permutacion;
- 

$$
L
$$

es triangular inferior con diagonal unitaria;
- 

$$
U
$$

es triangular superior.

## Factorizacion

$$
PA=LU
$$

### Teorema 1

Si la eliminacion gaussiana con pivoteo parcial puede completarse sin ruptura, entonces existe una factorizacion

$$
PA=LU.
$$

### Comentario

Esta factorizacion permite resolver varios sistemas con la misma matriz

$$
A
$$

y diferentes vectores

$$
b
$$

de forma eficiente:

1. permutar

$$
b
$$

a

$$
Pb;
$$

2. resolver

$$
Ly=Pb
$$

por sustitucion hacia adelante;
3. resolver

$$
Ux=y
$$

por sustitucion hacia atras.

## Ejemplo 1

Resolvamos

$$
\begin{pmatrix}
0 & 2 & 1\\
1 & -2 & 0\\
2 & 1 & 3
\end{pmatrix}
\begin{pmatrix}
x_1\\
x_2\\
x_3
\end{pmatrix}
=
\begin{pmatrix}
1\\
0\\
5
\end{pmatrix}.
$$

### Paso 1

En la primera columna los valores absolutos son:

$$
0,\ 1,\ 2.
$$

El mayor es

$$
2,
$$

asi que intercambiamos la fila

$$
1
$$

con la fila

$$
3.
$$

La matriz pasa a ser

$$
\begin{pmatrix}
2 & 1 & 3\\
1 & -2 & 0\\
0 & 2 & 1
\end{pmatrix},
\qquad
\begin{pmatrix}
5\\
0\\
1
\end{pmatrix}.
$$

Los multiplicadores son:

$$
m_{21}=\frac12,
\qquad
m_{31}=0.
$$

Tras eliminar:

$$
R_2\leftarrow R_2-\frac12 R_1,
$$

obtenemos

$$
\begin{pmatrix}
2 & 1 & 3\\
0 & -\frac52 & -\frac32\\
0 & 2 & 1
\end{pmatrix},
\qquad
\begin{pmatrix}
5\\
-\frac52\\
1
\end{pmatrix}.
$$

### Paso 2

En la segunda columna, desde la fila

$$
2,
$$

los valores absolutos son

$$
\frac52,\ 2.
$$

No hace falta intercambiar.

El multiplicador es

$$
m_{32}=\frac{2}{-5/2}=-\frac45.
$$

Eliminamos:

$$
R_3\leftarrow R_3+\frac45 R_2.
$$

Queda

$$
\begin{pmatrix}
2 & 1 & 3\\
0 & -\frac52 & -\frac32\\
0 & 0 & -\frac15
\end{pmatrix},
\qquad
\begin{pmatrix}
5\\
-\frac52\\
-1
\end{pmatrix}.
$$

### Sustitucion hacia atras

De la tercera ecuacion:

$$
-\frac15 x_3=-1
\quad\Rightarrow\quad
x_3=5.
$$

De la segunda:

$$
-\frac52 x_2-\frac32(5)=-\frac52
\quad\Rightarrow\quad
-\frac52 x_2=5
\quad\Rightarrow\quad
x_2=-2.
$$

De la primera:

$$
2x_1+x_2+3x_3=5
\quad\Rightarrow\quad
2x_1-2+15=5
\quad\Rightarrow\quad
2x_1=-8
\quad\Rightarrow\quad
x_1=-4.
$$

## Estabilidad numerica

El pivoteo parcial no hace milagros, pero suele controlar el crecimiento de multiplicadores mucho mejor que la eliminacion sin pivoteo.

### Observacion importante

Como por construccion

$$
\lvert a_{ik}\rvert\le \lvert a_{kk}\rvert
$$

tras escoger el pivote en la columna,

$$
\lvert m_{ik}\rvert\le 1.
$$

Esto evita multiplicadores enormes por mala eleccion de pivote.

## Factor de crecimiento

Durante la eliminacion los elementos de

$$
U
$$

pueden crecer respecto de los de

$$
A.
$$

Se define el factor de crecimiento por

$$
\rho=
\frac{
\max_{i,j,k}\lvert a_{ij}^{(k)}\rvert
}{
\max_{i,j}\lvert a_{ij}\rvert
}.
$$

### Comentario

La teoria muestra que el pivoteo parcial puede tener en el peor caso crecimiento grande, pero en la practica suele comportarse muy bien y es el estandar para eliminacion densa general.

## Singularidad y casi singularidad

Si en un paso el pivote elegido es exactamente cero, la matriz es singular o el proceso ha llegado a una dependencia lineal.

Si el pivote es muy pequeno en valor absoluto pero no nulo, el sistema puede ser muy mal condicionado aunque el algoritmo siga formalmente adelante.

### Comentario

La estabilidad del algoritmo y el condicionamiento del problema son cuestiones distintas:

- el condicionamiento depende de

$$
A;
$$

- la estabilidad depende del procedimiento.

## Comparacion con otras estrategias

### Sin pivoteo

- mas simple;
- potencialmente catastrfico.

### Pivoteo parcial

- intercambio solo de filas;
- costo adicional pequeno;
- excelente compromiso general.

### Pivoteo completo

- intercambia filas y columnas;
- suele ser aun mas robusto;
- mas costoso y menos usado en practica densa ordinaria.

## Resolucion repetida

Si deben resolverse muchos sistemas

$$
Ax=b^{(1)},\dots,Ax=b^{(m)},
$$

conviene factorizar una sola vez:

$$
PA=LU.
$$

Luego cada nuevo vector derecho solo requiere dos sustituciones triangulares.

## Relacion con software numerico

Las rutinas clasicas de algebra lineal densa, como las de LAPACK, usan precisamente factorizaciones con pivoteo parcial como herramienta basica para matrices generales.

## Comentario conceptual

El pivoteo parcial marca el paso desde el algebra exacta al analisis numerico serio. No cambia el problema matematico, pero si cambia por completo la manera correcta de resolverlo en aritmetica finita.

## Cierre

La eliminacion gaussiana sin pivoteo es una idea algebraica. La eliminacion con pivoteo parcial es una idea numerica. Esa diferencia es exactamente la que separa la teoria simbolica del calculo cientifico fiable.
