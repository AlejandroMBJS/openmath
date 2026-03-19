---
title: Factorizacion matricial LDLt
description: Factorizacion simetrica A igual LDLt, formulas recursivas, relacion con Cholesky, estabilidad y ejemplos.
---

# Factorizacion matricial LDLt

## Motivacion

Cuando la matriz

$$
A
$$

es simetrica, la eliminacion gaussiana tiene estructura extra que conviene explotar. En lugar de una factorizacion general

$$
PA=LU,
$$

puede buscarse una descomposicion simetrica

$$
A=LDL^\top,
$$

donde:

- 

$$
L
$$

es triangular inferior con diagonal unitaria;
- 

$$
D
$$

es diagonal.

Esta factorizacion evita raices cuadradas y preserva la simetria del problema.

## Definicion

Sea

$$
A\in \mathbb{R}^{n\times n}
$$

simetrica.

Una factorizacion

$$
A=LDL^\top
$$

consiste en:

$$
L=
\begin{pmatrix}
1 & 0 & \cdots & 0\\
\ell_{21} & 1 & \cdots & 0\\
\vdots & \vdots & \ddots & \vdots\\
\ell_{n1} & \ell_{n2} & \cdots & 1
\end{pmatrix},
$$

$$
D=\operatorname{diag}(d_1,\dots,d_n).
$$

## Por que es natural

Si

$$
A
$$

es simetrica y se aplica eliminacion gaussiana sin pivotar, los multiplicadores que aparecen en las columnas inferiores y superiores estan relacionados por transposicion. La factorizacion

$$
LDL^\top
$$

es la expresion algebraica exacta de esa simetria.

## Derivacion recursiva

Supongamos que ya conocemos las primeras

$$
k-1
$$

columnas de

$$
L
$$

y los primeros

$$
k-1
$$

elementos diagonales de

$$
D.
$$

Entonces:

$$
d_k
=
a_{kk}
-
\sum_{s=1}^{k-1}\ell_{ks}^2 d_s.
$$

Y para

$$
i>k,
$$

$$
\ell_{ik}
=
\frac{
a_{ik}
-
\sum_{s=1}^{k-1}\ell_{is}\ell_{ks}d_s
}{d_k}.
$$

### Comentario

Estas formulas muestran que la factorizacion puede construirse de izquierda a derecha, igual que una eliminacion estructurada.

## Existencia

Si todos los pivotes simetricos

$$
d_k
$$

aparecen no nulos, la factorizacion puede completarse sin necesidad de intercambios.

### Caso particularmente favorable

Si

$$
A
$$

es simetrica definida positiva, entonces:

- todos los

$$
d_k
$$

son positivos;
- la factorizacion existe y es unica.

## Ejemplo 1

Sea

$$
A=
\begin{pmatrix}
4 & 2 & 2\\
2 & 5 & 1\\
2 & 1 & 3
\end{pmatrix}.
$$

Busquemos

$$
A=LDL^\top.
$$

### Paso 1

$$
d_1=a_{11}=4.
$$

Luego

$$
\ell_{21}=\frac{2}{4}=\frac12,
\qquad
\ell_{31}=\frac{2}{4}=\frac12.
$$

### Paso 2

$$
d_2
=
5-\left(\frac12\right)^2(4)
=
5-1
=
4.
$$

Ahora

$$
\ell_{32}
=
\frac{
1-\ell_{31}\ell_{21}d_1
}{d_2}
=
\frac{
1-\frac12\cdot \frac12\cdot 4
}{4}
=
\frac{1-1}{4}
=0.
$$

### Paso 3

$$
d_3
=
3-\ell_{31}^2d_1-\ell_{32}^2d_2
=
3-\frac14\cdot 4-0
=
2.
$$

Por tanto:

$$
L=
\begin{pmatrix}
1 & 0 & 0\\
\frac12 & 1 & 0\\
\frac12 & 0 & 1
\end{pmatrix},
\qquad
D=
\begin{pmatrix}
4 & 0 & 0\\
0 & 4 & 0\\
0 & 0 & 2
\end{pmatrix}.
$$

Una multiplicacion directa verifica que

$$
A=LDL^\top.
$$

## Resolucion de sistemas

Si

$$
A=LDL^\top,
$$

entonces resolver

$$
Ax=b
$$

equivale a:

1. resolver

$$
Ly=b;
$$

2. resolver

$$
Dz=y;
$$

3. resolver

$$
L^\top x=z.
$$

### Comentario

Esto reduce el problema a dos sustituciones triangulares y una division diagonal.

## Relacion con Cholesky

Si

$$
D
$$

tiene diagonal positiva, puede escribirse

$$
D=\Delta^2
$$

con

$$
\Delta=\operatorname{diag}(\sqrt{d_1},\dots,\sqrt{d_n}).
$$

Entonces

$$
A=LDL^\top=(L\Delta)(L\Delta)^\top,
$$

que es una factorizacion de Cholesky.

### Comentario

Por eso LDLt puede verse como una version de Cholesky sin raices cuadradas.

## Ventajas

- explota la simetria;
- reduce almacenamiento;
- evita raices cuadradas;
- es natural para matrices simetricas, especialmente en calculo simbolico o aritmetica exacta.

## Limitaciones

- para matrices simetricas indefinidas pueden aparecer pivotes problematicos;
- en la practica general puede requerir pivotado simetrico por bloques;
- no es el metodo universal para matrices arbitrarias.

## Pivotado simetrico

En matrices simetricas indefinidas, la version robusta usa factorizaciones del tipo

$$
P^\top AP=LDL^\top
$$

con

$$
P
$$

de permutacion y, a veces,

$$
D
$$

con bloques

$$
1\times 1
$$

y

$$
2\times 2.
$$

### Comentario

Este tema pertenece ya a la factorizacion simetrica avanzada, pero conviene saber que la version diagonal simple no cubre toda la teoria indefinida.

## Interpretacion energetica

Si

$$
A
$$

es simetrica definida positiva,

$$
x^\top Ax
$$

define una forma cuadratica positiva. La factorizacion

$$
LDL^\top
$$

descompone esa geometria en correcciones triangulares y pesos diagonales positivos.

## Relacion con minimos cuadrados

En problemas de minimos cuadrados, las ecuaciones normales producen matrices de la forma

$$
A^\top A,
$$

que son simetricas semidefinidas positivas. Sobre ellas puede aplicarse LDLt o Cholesky, aunque con consideraciones de estabilidad que se discuten mejor en el contexto propio de minimos cuadrados.

## Cierre

La factorizacion

$$
LDL^\top
$$

es la forma natural de explotar simetria sin perder informacion numerica innecesaria. En matrices definidas positivas es especialmente limpia; en matrices indefinidas abre la puerta a una teoria mas rica de pivotes simetricos.
