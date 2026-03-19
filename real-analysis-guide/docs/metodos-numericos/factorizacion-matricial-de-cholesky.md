---
title: Factorizacion matricial de Cholesky
description: Factorizacion A igual LLt para matrices simetricas definidas positivas, formulas, existencia, unicidad y resolucion de sistemas.
---

# Factorizacion matricial de Cholesky

## Motivacion

Cuando

$$
A
$$

es simetrica definida positiva, la estructura algebraica del problema es tan favorable que puede obtenerse una factorizacion especialmente simple:

$$
A=LL^\top,
$$

donde

$$
L
$$

es triangular inferior con diagonal positiva.

Esta es la **factorizacion de Cholesky**.

## Definicion

Una matriz

$$
A\in \mathbb{R}^{n\times n}
$$

admite factorizacion de Cholesky si existe una triangular inferior

$$
L
$$

con diagonal estrictamente positiva tal que

$$
A=LL^\top.
$$

## Hipotesis natural

La clase correcta para Cholesky es la de matrices simetricas definidas positivas:

$$
A^\top=A,
\qquad
x^\top Ax>0
\quad
\text{para todo }x\ne 0.
$$

## Existencia y unicidad

### Teorema 1

Si

$$
A
$$

es simetrica definida positiva, entonces existe una unica matriz triangular inferior

$$
L
$$

con diagonal positiva tal que

$$
A=LL^\top.
$$

### Comentario

La positividad de la diagonal elimina ambiguedades de signo y garantiza unicidad.

## Formulas recursivas

Si

$$
A=(a_{ij}),
\qquad
L=(\ell_{ij}),
$$

entonces:

$$
\ell_{kk}
=
\sqrt{
a_{kk}-\sum_{s=1}^{k-1}\ell_{ks}^2
},
$$

y para

$$
i>k,
$$

$$
\ell_{ik}
=
\frac{
a_{ik}-\sum_{s=1}^{k-1}\ell_{is}\ell_{ks}
}{\ell_{kk}}.
$$

## Por que la raiz es real

La cantidad dentro de la raiz es positiva precisamente porque

$$
A
$$

es definida positiva.

### Comentario

Aqui aparece una diferencia clave con matrices simetricas arbitrarias: sin definicion positiva, el algoritmo puede romperse por intentar tomar raiz de un numero no positivo.

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
A=LL^\top.
$$

### Paso 1

$$
\ell_{11}=\sqrt{4}=2.
$$

Luego

$$
\ell_{21}=\frac{2}{2}=1,
\qquad
\ell_{31}=\frac{2}{2}=1.
$$

### Paso 2

$$
\ell_{22}
=
\sqrt{5-1^2}
=
\sqrt{4}
=2.
$$

Luego

$$
\ell_{32}
=
\frac{1-(1)(1)}{2}=0.
$$

### Paso 3

$$
\ell_{33}
=
\sqrt{3-1^2-0^2}
=
\sqrt{2}.
$$

Por tanto

$$
L=
\begin{pmatrix}
2 & 0 & 0\\
1 & 2 & 0\\
1 & 0 & \sqrt 2
\end{pmatrix}.
$$

Una multiplicacion directa confirma que

$$
LL^\top=A.
$$

## Resolucion de sistemas

Si

$$
A=LL^\top,
$$

resolver

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
L^\top x=y.
$$

### Comentario

Esto reduce el problema a dos sustituciones triangulares. No hace falta formar una inversa explicita.

## Costo computacional

La factorizacion de Cholesky cuesta aproximadamente la mitad del trabajo de una eliminacion gaussiana general para matrices densas del mismo tamano, porque explota:

- simetria;
- ausencia de pivotado en el caso definido positivo;
- estructura triangular duplicada.

## Ventajas numericas

- menos operaciones que

$$
LU;
$$

- menos almacenamiento;
- excelente estabilidad para matrices definidas positivas;
- muy natural en problemas de energia, optimizacion y minimos cuadrados.

## Relacion con LDLt

Si

$$
A=LDL^\top
$$

con

$$
D
$$

diagonal positiva, entonces

$$
A=(L\sqrt{D})(L\sqrt{D})^\top.
$$

Cholesky puede verse como la version absorbida de esa diagonal.

## Criterio de positividad

La existencia de Cholesky equivale a la definicion positiva.

### Observacion

En la practica, si el algoritmo produce una cantidad no positiva bajo una raiz, eso puede indicar:

- que la matriz no es definida positiva;
- o que el problema esta muy afectado por redondeo y perdida de simetria efectiva.

## Ejemplo 2

La matriz

$$
\begin{pmatrix}
1 & 2\\
2 & 1
\end{pmatrix}
$$

es simetrica, pero no definida positiva porque

$$
\begin{pmatrix}
1\\
-1
\end{pmatrix}^{\!\top}
\begin{pmatrix}
1 & 2\\
2 & 1
\end{pmatrix}
\begin{pmatrix}
1\\
-1
\end{pmatrix}
=
-2<0.
$$

Por tanto no admite factorizacion de Cholesky real.

## Aplicaciones

La factorizacion de Cholesky aparece en:

- resolucion de sistemas elipticos discretizados;
- optimizacion cuadratica;
- filtros de Kalman;
- simulacion gaussiana;
- ecuaciones normales en minimos cuadrados.

## Cuidado con las ecuaciones normales

Si se resuelve un problema de minimos cuadrados via

$$
A^\top A x=A^\top b,
$$

entonces

$$
A^\top A
$$

es simetrica semidefinida positiva y, si

$$
A
$$

tiene rango completo, definida positiva.

Se podria aplicar Cholesky. Sin embargo:

- formar

$$
A^\top A
$$

cuadra el numero de condicion;
- por eso, desde el punto de vista numerico, suele ser preferible QR.

## Comentario geometrico

La definicion positiva significa que la forma cuadratica

$$
x^\top Ax
$$

actua como una energia. Cholesky la representa como

$$
\|L^\top x\|_2^2,
$$

lo cual hace explicita su positividad.

## Cierre

La factorizacion de Cholesky es una de las herramientas mas limpias de todo el algebra lineal numerica. Cuando la matriz es simetrica definida positiva, no solo resuelve el sistema: lo hace explotando al maximo la estructura geometrica del problema.
