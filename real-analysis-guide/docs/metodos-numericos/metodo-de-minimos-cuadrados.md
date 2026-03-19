---
title: Metodo de minimos cuadrados
description: Sistemas sobredeterminados, proyeccion ortogonal, ecuaciones normales, QR y ajuste lineal por minimos cuadrados.
---

# Metodo de minimos cuadrados

## Motivacion

Muchos problemas reales no producen sistemas cuadrados

$$
Ax=b
$$

exactamente resolubles. En cambio aparece un sistema sobredeterminado:

$$
A\in \mathbb{R}^{m\times n},
\qquad
m>n,
$$

y normalmente no existe

$$
x
$$

tal que

$$
Ax=b.
$$

La pregunta correcta ya no es "resolver exactamente", sino:

que vector

$$
x
$$

hace el residuo

$$
r=b-Ax
$$

lo mas pequeno posible?

## Problema de minimos cuadrados

Buscamos

$$
x^\ast
$$

que minimice

$$
\|Ax-b\|_2^2.
$$

Esto se llama problema de minimos cuadrados.

## Interpretacion geometrica

El conjunto de todos los vectores de la forma

$$
Ax
$$

es el subespacio columna de

$$
A:
$$

$$
\mathcal{C}(A)\subseteq \mathbb{R}^m.
$$

Resolver minimos cuadrados equivale a proyectar ortogonalmente

$$
b
$$

sobre

$$
\mathcal{C}(A).
$$

El vector

$$
Ax^\ast
$$

es esa proyeccion, y el residuo

$$
r=b-Ax^\ast
$$

queda ortogonal al subespacio columna.

## Ecuaciones normales

La condicion de ortogonalidad del residuo es

$$
A^\top (b-Ax^\ast)=0.
$$

Equivalentemente:

$$
A^\top A x^\ast=A^\top b.
$$

Estas son las **ecuaciones normales**.

## Teorema fundamental

### Teorema 1

Un vector

$$
x^\ast
$$

resuelve el problema de minimos cuadrados si y solo si satisface las ecuaciones normales

$$
A^\top A x^\ast=A^\top b.
$$

### Demostracion

Definamos

$$
\varphi(x)=\|Ax-b\|_2^2=(Ax-b)^\top (Ax-b).
$$

Desarrollando:

$$
\varphi(x)=x^\top A^\top A x-2b^\top A x+b^\top b.
$$

Su gradiente es

$$
\nabla \varphi(x)=2A^\top A x-2A^\top b.
$$

El minimo se alcanza cuando

$$
\nabla \varphi(x)=0,
$$

es decir, cuando

$$
A^\top A x=A^\top b.
$$

## Unicidad

Si las columnas de

$$
A
$$

son linealmente independientes, entonces

$$
A^\top A
$$

es simetrica definida positiva, y por tanto el solucionador de minimos cuadrados es unico.

### Demostracion

Para todo

$$
x\ne 0,
$$

$$
x^\top A^\top A x=(Ax)^\top (Ax)=\|Ax\|_2^2>0
$$

si

$$
A
$$

tiene rango columna completo.

## Ejemplo 1: ajuste lineal

Queremos ajustar una recta

$$
y=\alpha+\beta x
$$

a los datos:

$$
(0,1),\ (1,2),\ (2,2).
$$

El sistema correspondiente es

$$
\begin{pmatrix}
1 & 0\\
1 & 1\\
1 & 2
\end{pmatrix}
\begin{pmatrix}
\alpha\\
\beta
\end{pmatrix}
\approx
\begin{pmatrix}
1\\
2\\
2
\end{pmatrix}.
$$

Aqui

$$
A=
\begin{pmatrix}
1 & 0\\
1 & 1\\
1 & 2
\end{pmatrix},
\qquad
b=
\begin{pmatrix}
1\\
2\\
2
\end{pmatrix}.
$$

Calculamos

$$
A^\top A=
\begin{pmatrix}
3 & 3\\
3 & 5
\end{pmatrix},
\qquad
A^\top b=
\begin{pmatrix}
5\\
6
\end{pmatrix}.
$$

Las ecuaciones normales son

$$
\begin{pmatrix}
3 & 3\\
3 & 5
\end{pmatrix}
\begin{pmatrix}
\alpha\\
\beta
\end{pmatrix}
=
\begin{pmatrix}
5\\
6
\end{pmatrix}.
$$

Resolviendo:

$$
3\alpha+3\beta=5,
$$

$$
3\alpha+5\beta=6.
$$

Restando:

$$
2\beta=1
\quad\Rightarrow\quad
\beta=\frac12.
$$

Entonces

$$
\alpha+\beta=\frac53
\quad\Rightarrow\quad
\alpha=\frac76.
$$

La recta de minimos cuadrados es

$$
y=\frac76+\frac12 x.
$$

## Interpretacion del residuo

El residuo

$$
r=b-Ax^\ast
$$

satisface

$$
A^\top r=0.
$$

Eso significa que

$$
r
$$

es ortogonal a cada columna de

$$
A.
$$

Esta es la caracterizacion geometrica esencial de la proyeccion ortogonal.

## Metodo por ecuaciones normales

Una estrategia computacional directa es:

1. formar

$$
A^\top A
$$

y

$$
A^\top b;
$$

2. resolver el sistema cuadrado

$$
A^\top A x=A^\top b
$$

mediante Cholesky o LDLt si procede.

### Ventaja

Reduce el problema a un sistema cuadrado simetrico.

### Problema

El numero de condicion se cuadruplica aproximadamente:

$$
\kappa(A^\top A)\approx \kappa(A)^2.
$$

Esto puede degradar seriamente la precision numerica.

## Metodo QR

Si

$$
A=QR,
$$

donde

$$
Q
$$

tiene columnas ortonormales y

$$
R
$$

es triangular superior, entonces

$$
\|Ax-b\|_2
=
\|QRx-b\|_2.
$$

Multiplicando por

$$
Q^\top
$$

se obtiene un problema equivalente mejor condicionado.

### Comentario

En calculo cientifico serio, QR suele ser preferible a ecuaciones normales.

## Caso de rango no completo

Si

$$
A
$$

no tiene rango columna completo, el conjunto de soluciones de minimos cuadrados puede no ser unico.

### Comentario

En ese caso, suele seleccionarse la solucion de norma minima mediante pseudoinversa de Moore-Penrose.

## Forma matricial del ajuste afin

Muchos ajustes clasicos pueden escribirse como minimos cuadrados lineales:

- ajuste de rectas;
- ajuste de polinomios;
- regresion lineal multiple;
- ajuste de bases.

La diferencia entre ellos esta en como se construye la matriz

$$
A.
$$

## Ejemplo 2: ajuste cuadratico

Si se quiere aproximar

$$
y\approx c_0+c_1x+c_2x^2,
$$

con datos

$$
(x_i,y_i),
$$

la matriz de diseno es

$$
A=
\begin{pmatrix}
1 & x_1 & x_1^2\\
\vdots & \vdots & \vdots\\
1 & x_m & x_m^2
\end{pmatrix}.
$$

El problema vuelve a ser lineal en los coeficientes

$$
c_0,\ c_1,\ c_2.
$$

## Relacion con proyecciones ortogonales

En lenguaje de espacios con producto interno,

$$
Ax^\ast
$$

es la proyeccion ortogonal de

$$
b
$$

sobre

$$
\mathcal{C}(A).
$$

Esta perspectiva explica de manera conceptual:

- existencia;
- unicidad en rango completo;
- ecuaciones normales.

## Sensibilidad numerica

Los problemas de minimos cuadrados pueden ser delicados cuando:

- las columnas de

$$
A
$$

son casi dependientes;
- la matriz de diseno tiene estructura de Vandermonde de alto grado;
- los datos estan muy mal escalados.

### Comentario

Esto no invalida el metodo; solo indica que la implementacion via ecuaciones normales puede ser pobre y que QR o SVD son mas fiables.

## Minimos cuadrados ponderados

Si ciertas observaciones deben pesar mas que otras, se minimiza

$$
\|W^{1/2}(Ax-b)\|_2^2,
$$

con

$$
W
$$

diagonal positiva.

### Comentario

Esta variante aparece de forma natural cuando las mediciones tienen varianzas diferentes.

## Comentario conceptual

Minimos cuadrados es uno de los mejores ejemplos de como algebra lineal, geometria y computacion numerica convergen:

- algebraicamente es un sistema normal;
- geometricamente es una proyeccion;
- numericamente exige elegir una factorizacion adecuada.

## Cierre

El metodo de minimos cuadrados no resuelve exactamente un sistema imposible: resuelve el problema correcto de aproximacion optima en norma euclidea. Por eso es central en ajuste de datos, estadistica, aprendizaje y simulacion numerica.
