---
title: Distancia de un punto a un plano
description: Derivacion geometrica y algebraica de la formula de distancia de un punto a un plano y calculo del pie de la perpendicular.
---

# Distancia de un punto a un plano

## Motivacion e intuicion

La distancia de un punto a un plano no se mide con cualquier segmento que una el punto con el plano, sino con el segmento mas corto. Geometricamente, ese segmento debe ser perpendicular al plano.

Por eso la formula clasica

$$
d(P,\Pi)=\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}
$$

no es una identidad misteriosa: es la longitud de la proyeccion del vector adecuado sobre un normal del plano.

## Prerrequisitos

Conviene manejar:

- ecuacion general del plano;
- producto punto;
- norma de un vector;
- interpretacion de la proyeccion ortogonal.

## Planteamiento

Sea el plano

$$
\Pi:\ Ax+By+Cz+D=0,
\qquad
(A,B,C)\ne (0,0,0),
$$

y sea el punto

$$
P_0=(x_0,y_0,z_0).
$$

El vector

$$
n=(A,B,C)
$$

es normal al plano.

## Idea geometrica de la distancia

Tomemos un punto cualquiera

$$
Q=(x_1,y_1,z_1)\in \Pi.
$$

Entonces la distancia buscada es la longitud de la proyeccion de

$$
P_0-Q
$$

sobre la direccion normal $n$.

El modulo de esa proyeccion es

$$
\frac{|(P_0-Q)\cdot n|}{\|n\|}.
$$

## Teorema 1: formula de distancia punto-plano

La distancia del punto

$$
P_0=(x_0,y_0,z_0)
$$

al plano

$$
\Pi:\ Ax+By+Cz+D=0
$$

es

$$
d(P_0,\Pi)=
\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}.
$$

#### Demostracion

Sea $Q=(x_1,y_1,z_1)\in \Pi$. Entonces

$$
Ax_1+By_1+Cz_1+D=0.
$$

Por tanto

$$
(P_0-Q)\cdot n
=
A(x_0-x_1)+B(y_0-y_1)+C(z_0-z_1)
$$

puede reescribirse como

$$
Ax_0+By_0+Cz_0-(Ax_1+By_1+Cz_1)
=
Ax_0+By_0+Cz_0+D.
$$

Luego la proyeccion de $P_0-Q$ sobre la direccion normal tiene modulo

$$
\frac{|Ax_0+By_0+Cz_0+D|}{\|n\|}.
$$

Como

$$
\|n\|=\sqrt{A^2+B^2+C^2},
$$

obtenemos

$$
d(P_0,\Pi)=
\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}.
$$

La expresion no depende del punto $Q$ elegido porque toda esa informacion queda absorbida por la ecuacion del plano.

## Interpretacion del numerador

La cantidad

$$
Ax_0+By_0+Cz_0+D
$$

es una medida **firmada** de cuanto se aparta el punto del plano en la direccion normal.

### Observacion

Si el punto pertenece al plano, entonces

$$
Ax_0+By_0+Cz_0+D=0,
$$

y la distancia vale cero, como debe ocurrir.

## Derivacion alternativa por optimizacion

Tambien puede obtenerse la formula minimizando

$$
(x-x_0)^2+(y-y_0)^2+(z-z_0)^2
$$

sujeto a la restriccion

$$
Ax+By+Cz+D=0.
$$

El metodo de multiplicadores de Lagrange lleva al hecho de que el punto mas cercano se obtiene desplazando el punto en direccion normal.

## Pie de la perpendicular

Ademas de la distancia, a menudo interesa hallar el punto del plano mas cercano a $P_0$.

Buscamos

$$
H=P_0-\lambda n.
$$

Como $H$ debe pertenecer al plano,

$$
A(x_0-\lambda A)+B(y_0-\lambda B)+C(z_0-\lambda C)+D=0.
$$

Despejando,

$$
\lambda=
\frac{Ax_0+By_0+Cz_0+D}{A^2+B^2+C^2}.
$$

Por tanto

$$
H=
P_0-
\frac{Ax_0+By_0+Cz_0+D}{A^2+B^2+C^2}\,(A,B,C).
$$

Este punto es el pie de la perpendicular desde $P_0$ al plano.

## Distancia con signo

Si se fija una orientacion del plano mediante el normal $n$, puede definirse la distancia firmada:

$$
d_{\pm}(P_0,\Pi)=
\frac{Ax_0+By_0+Cz_0+D}{\sqrt{A^2+B^2+C^2}}.
$$

Su signo indica en que lado del plano queda el punto respecto del normal elegido.

## Distancia entre planos paralelos

Sean

$$
\Pi_1:\ Ax+By+Cz+D_1=0,
$$

$$
\Pi_2:\ Ax+By+Cz+D_2=0.
$$

### Corolario 2

La distancia entre ambos planos es

$$
d(\Pi_1,\Pi_2)=
\frac{|D_2-D_1|}{\sqrt{A^2+B^2+C^2}}.
$$

#### Demostracion

Tomamos cualquier punto $P$ de $\Pi_1$ y aplicamos la formula de distancia punto-plano a $\Pi_2$:

$$
d(P,\Pi_2)=
\frac{|Ax_P+By_P+Cz_P+D_2|}{\sqrt{A^2+B^2+C^2}}.
$$

Como $P\in \Pi_1$,

$$
Ax_P+By_P+Cz_P=-D_1.
$$

Entonces

$$
d(\Pi_1,\Pi_2)=
\frac{|D_2-D_1|}{\sqrt{A^2+B^2+C^2}}.
$$

## Ejemplos trabajados

### Ejemplo 1

Hallar la distancia del punto

$$
P_0=(1,-2,3)
$$

al plano

$$
2x-y+2z-4=0.
$$

Aplicamos la formula:

$$
d(P_0,\Pi)=
\frac{|2(1)-(-2)+2(3)-4|}{\sqrt{2^2+(-1)^2+2^2}}
=
\frac{|2+2+6-4|}{3}
=
\frac{6}{3}=2.
$$

### Ejemplo 2: punto sobre el plano

Sea

$$
P_0=(1,1,1),
\qquad
\Pi:\ x+y+z-3=0.
$$

Entonces

$$
1+1+1-3=0,
$$

luego

$$
d(P_0,\Pi)=0.
$$

### Ejemplo 3: pie de la perpendicular

Hallar el pie de la perpendicular desde

$$
P_0=(2,0,1)
$$

al plano

$$
\Pi:\ x+2y+2z-6=0.
$$

Aqui

$$
n=(1,2,2),
\qquad
Ax_0+By_0+Cz_0+D=2+0+2-6=-2.
$$

Entonces

$$
\lambda=
\frac{-2}{1+4+4}=-\frac{2}{9}.
$$

Por tanto

$$
H=
(2,0,1)-\left(-\frac{2}{9}\right)(1,2,2)
=
\left(2+\frac{2}{9},\frac{4}{9},1+\frac{4}{9}\right)
=
\left(\frac{20}{9},\frac{4}{9},\frac{13}{9}\right).
$$

## Errores comunes

- Usar mal los coeficientes del plano, especialmente el termino independiente.
- Olvidar el valor absoluto en la distancia no orientada.
- Simplificar mal la norma del vector normal.
- Confundir la formula de distancia punto-plano con la de distancia entre dos planos.
- Calcular el pie de la perpendicular sin desplazar en la direccion del normal.

## Ejercicios propuestos

1. Hallar la distancia de varios puntos a un mismo plano.
2. Hallar el pie de la perpendicular desde un punto a un plano dado.
3. Demostrar la formula de distancia por multiplicadores de Lagrange.
4. Hallar la distancia entre dos planos paralelos.
5. Estudiar el signo de la distancia firmada respecto de una orientacion del normal.

## Cierre

La distancia punto-plano es una aplicacion elemental pero profunda del producto punto. Introduce la idea de proyeccion ortogonal, conecta con optimizacion restringida y prepara herramientas que reaparecen en curvatura, integrales de superficie y metrica riemanniana.
