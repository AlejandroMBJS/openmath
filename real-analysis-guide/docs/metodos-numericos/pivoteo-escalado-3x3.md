---
title: Pivoteo escalado 3x3
description: Ejemplo completo de eliminacion gaussiana con pivoteo parcial escalado en un sistema 3x3.
---

# Pivoteo escalado 3x3

## Objetivo

Esta pagina no introduce una teoria nueva. Su funcion es dejar completamente trabajado un ejemplo donde se vea, paso a paso, como opera el criterio de pivoteo parcial escalado en una matriz

$$
3\times 3.
$$

## Sistema

Consideremos el sistema

$$
\begin{pmatrix}
30 & 591400 & 591700\\
5.291 & -6.13 & -6.1301\\
11.2 & 9 & 10
\end{pmatrix}
\begin{pmatrix}
x_1\\
x_2\\
x_3
\end{pmatrix}
=
\begin{pmatrix}
591730\\
46.7809\\
30.2
\end{pmatrix}.
$$

La eleccion no es casual: la primera fila tiene entradas de escala enorme en las dos ultimas columnas, pero una entrada relativamente pequena en la primera columna. Este es precisamente el tipo de situacion donde el criterio escalado importa.

## Paso 0: factores de escala

Calculamos para cada fila

$$
s_i=\max_j \lvert a_{ij}\rvert.
$$

### Fila 1

$$
s_1=\max(30,591400,591700)=591700.
$$

### Fila 2

$$
s_2=\max(5.291,6.13,6.1301)=6.1301.
$$

### Fila 3

$$
s_3=\max(11.2,9,10)=11.2.
$$

## Paso 1: seleccion del primer pivote

Comparamos los cocientes:

$$
\frac{\lvert 30\rvert}{591700}\approx 5.07\times 10^{-5},
$$

$$
\frac{\lvert 5.291\rvert}{6.1301}\approx 0.863,
$$

$$
\frac{\lvert 11.2\rvert}{11.2}=1.
$$

El mayor cociente es el de la fila

$$
3,
$$

asi que intercambiamos:

$$
R_1 \leftrightarrow R_3.
$$

Tambien intercambiamos

$$
s_1 \leftrightarrow s_3.
$$

La matriz queda

$$
\begin{pmatrix}
11.2 & 9 & 10\\
5.291 & -6.13 & -6.1301\\
30 & 591400 & 591700
\end{pmatrix},
\qquad
\begin{pmatrix}
30.2\\
46.7809\\
591730
\end{pmatrix}.
$$

## Eliminacion en la primera columna

Los multiplicadores son:

$$
m_{21}=\frac{5.291}{11.2}\approx 0.4724107143,
$$

$$
m_{31}=\frac{30}{11.2}\approx 2.6785714286.
$$

### Nueva fila 2

Calculamos

$$
R_2\leftarrow R_2-m_{21}R_1.
$$

Primera entrada:

$$
5.291-0.4724107143(11.2)=0.
$$

Segunda entrada:

$$
-6.13-0.4724107143(9)\approx -10.3816964287.
$$

Tercera entrada:

$$
-6.1301-0.4724107143(10)\approx -10.854207143.
$$

Termino independiente:

$$
46.7809-0.4724107143(30.2)\approx 32.513896429.
$$

### Nueva fila 3

Calculamos

$$
R_3\leftarrow R_3-m_{31}R_1.
$$

Primera entrada:

$$
30-2.6785714286(11.2)=0.
$$

Segunda entrada:

$$
591400-2.6785714286(9)\approx 591375.892857.
$$

Tercera entrada:

$$
591700-2.6785714286(10)\approx 591673.214286.
$$

Termino independiente:

$$
591730-2.6785714286(30.2)\approx 591649.107143.
$$

La matriz transformada es

$$
\begin{pmatrix}
11.2 & 9 & 10\\
0 & -10.3816964287 & -10.854207143\\
0 & 591375.892857 & 591673.214286
\end{pmatrix},
\qquad
\begin{pmatrix}
30.2\\
32.513896429\\
591649.107143
\end{pmatrix}.
$$

## Paso 2: seleccion del segundo pivote

Ahora solo miramos filas

$$
2
$$

y

$$
3
$$

en la segunda columna.

Los cocientes escalados son:

$$
\frac{\lvert -10.3816964287\rvert}{6.1301}\approx 1.6935,
$$

$$
\frac{591375.892857}{591700}\approx 0.99945.
$$

El mayor cociente corresponde a la fila

$$
2,
$$

de modo que no se intercambia.

### Comentario

Observe el contraste:

- en valor absoluto, la fila

$$
3
$$

parece mucho mayor;
- en escala relativa, la fila

$$
2
$$

ofrece un pivote mejor dentro de su propia magnitud.

## Eliminacion en la segunda columna

El multiplicador es

$$
m_{32}
=
\frac{591375.892857}{-10.3816964287}
\approx
-56962.0937.
$$

### Advertencia

El numero es grande porque la tercera fila sigue teniendo escala gigantesca comparada con la segunda. Esto no contradice el criterio escalado; al contrario, pone de manifiesto la dureza del problema de escalas.

Actualizamos:

$$
R_3\leftarrow R_3-m_{32}R_2.
$$

La segunda entrada queda

$$
0,
$$

y la tercera se transforma en

$$
u_{33}\approx -2722.6804
$$

con termino independiente correspondiente

$$
\tilde b_3\approx -2722.6804.
$$

## Sustitucion hacia atras

La ultima ecuacion da aproximadamente

$$
x_3=1.
$$

La segunda ecuacion:

$$
-10.3816964287 x_2-10.854207143 x_3=32.513896429.
$$

Sustituyendo

$$
x_3=1:
$$

$$
-10.3816964287 x_2=43.368103572,
$$

de donde

$$
x_2\approx -4.177.
$$

La primera ecuacion:

$$
11.2x_1+9x_2+10x_3=30.2.
$$

Sustituyendo:

$$
11.2x_1+9(-4.177)+10=30.2,
$$

$$
11.2x_1=57.793,
$$

$$
x_1\approx 5.160.
$$

### Comentario

Los valores redondeados aqui dependen del truncamiento intermedio. En una implementacion de maquina se conservaria mucha mas precision durante todo el proceso.

## Que aporta el ejemplo

Este ejemplo deja ver tres hechos importantes:

1. el pivoteo parcial puro puede ser enganado por una fila con grandes entradas fuera de la columna activa;
2. el criterio escalado corrige esa ilusion comparando relativamente;
3. aun con escalado, un problema muy desbalanceado puede seguir siendo numericamente delicado.

## Comparacion con pivoteo parcial puro

Si en el primer paso se hubiera elegido la fila

$$
1
$$

solo porque

$$
30
$$

es el mayor valor absoluto aparente de cierta comparacion mal interpretada, la eliminacion habria arrancado desde una fila mal representativa del problema real.

El criterio escalado evita exactamente ese tipo de error de juicio.

## Lectura numerica correcta

No hay que obsesionarse con que los numeros intermedios queden "bonitos". En analisis numerico importa mas:

- el criterio correcto de seleccion;
- la estabilidad del procedimiento;
- la interpretacion del crecimiento y del redondeo.

## Recomendacion practica

En ejercicios manuales pequenos, conviene:

1. calcular primero los

$$
s_i;
$$

2. escribir al lado los cocientes de pivote;
3. registrar cada permutacion;
4. no redondear agresivamente hasta el final.

## Cierre

El pivoteo escalado en

$$
3\times 3
$$

ya basta para mostrar el punto central: la estabilidad no depende solo del tamano absoluto del pivote, sino de su tamano relativo dentro de la fila que lo contiene.
