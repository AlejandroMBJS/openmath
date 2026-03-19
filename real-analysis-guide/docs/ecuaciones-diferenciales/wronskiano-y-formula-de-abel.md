---
title: Wronskiano y formula de Abel
description: Independencia lineal de soluciones, sistemas fundamentales, formula de Abel-Liouville y aplicaciones al analisis de ecuaciones lineales.
---

# Wronskiano y formula de Abel

## Por que hace falta el wronskiano

En una ecuacion lineal homogenea de orden $n$ no basta encontrar varias soluciones. Hace falta decidir si esas soluciones generan todo el espacio solucion. El problema es de algebra lineal funcional:

- tenemos funciones;
- queremos saber si son linealmente independientes;
- necesitamos un criterio operativo.

El wronskiano cumple exactamente ese papel.

Ademas, en ecuaciones lineales con coeficientes continuos, el wronskiano no es solo un determinante utilitario: satisface una ecuacion diferencial propia, la formula de Abel-Liouville. Esa identidad explica por que la independencia de soluciones es un fenomeno global en el intervalo.

## Definicion

Sean

$$
y_1,\dots,y_n
$$

funciones con derivadas hasta orden $n-1$ en un intervalo $I$. Su wronskiano es

$$
W(y_1,\dots,y_n)(x)
=
\det
\begin{pmatrix}
y_1(x) & y_2(x) & \cdots & y_n(x) \\
y_1'(x) & y_2'(x) & \cdots & y_n'(x) \\
\vdots & \vdots & \ddots & \vdots \\
y_1^{(n-1)}(x) & y_2^{(n-1)}(x) & \cdots & y_n^{(n-1)}(x)
\end{pmatrix}.
$$

### Caso de orden dos

Si $n=2$,

$$
W(y_1,y_2)(x)=
\begin{vmatrix}
y_1 & y_2 \\
y_1' & y_2'
\end{vmatrix}
=
y_1y_2'-y_1'y_2.
$$

Este caso ya contiene gran parte de la intuicion general.

## Dependencia lineal implica wronskiano nulo

### Proposicion 1

Si las funciones $y_1,\dots,y_n$ son linealmente dependientes en $I$, entonces

$$
W(y_1,\dots,y_n)(x)\equiv 0
$$

en todo el intervalo.

#### Demostracion

Si son dependientes, existen constantes no todas nulas

$$
c_1,\dots,c_n
$$

tales que

$$
c_1y_1+\cdots+c_ny_n=0
$$

en $I$.

Derivando sucesivamente hasta orden $n-1$ obtenemos

$$
c_1y_1^{(k)}+\cdots+c_ny_n^{(k)}=0,
\qquad k=0,\dots,n-1.
$$

Eso significa que las columnas de la matriz wronskiana son linealmente dependientes, luego su determinante es identicamente cero. \qed

## El reciproco no vale para funciones arbitrarias

Aqui aparece una sutileza que muchas presentaciones omiten.

### Advertencia

Para funciones arbitrarias, tener wronskiano identicamente nulo no implica necesariamente dependencia lineal.

### Ejemplo clasico

Definamos en $\mathbb{R}$:

$$
y_1(x)=x^2,
\qquad
y_2(x)=x|x|.
$$

Ambas funciones son de clase $C^1$. Para $x>0$,

$$
y_2(x)=x^2;
$$

para $x<0$,

$$
y_2(x)=-x^2.
$$

Calculemos el wronskiano para $x\ne 0$:

$$
W(y_1,y_2)
=
x^2\cdot 2|x|-2x\cdot x|x|
=
0.
$$

Y en $x=0$ tambien vale $0$. Luego

$$
W(y_1,y_2)\equiv 0.
$$

Sin embargo, $y_1$ y $y_2$ no son multiples constantes entre si en todo $\mathbb{R}$, de modo que son linealmente independientes.

### Moral

El wronskiano por si solo no detecta independencia para familias arbitrarias de funciones. La teoria fina aparece cuando las funciones son soluciones de una misma ecuacion lineal con coeficientes regulares.

## El contexto correcto: soluciones de una misma ecuacion lineal

Consideremos la ecuacion lineal homogenea

$$
y^{(n)}+a_{n-1}(x)y^{(n-1)}+\cdots+a_1(x)y'+a_0(x)y=0,
$$

donde

$$
a_0,\dots,a_{n-1}
$$

son continuas en un intervalo $I$.

En este contexto, el wronskiano si tiene fuerza estructural.

## Formula de Abel en orden dos

Comencemos con

$$
y''+p(x)y'+q(x)y=0.
$$

Sean $y_1$ y $y_2$ dos soluciones. Su wronskiano es

$$
W=y_1y_2'-y_1'y_2.
$$

### Teorema 2: formula de Abel

El wronskiano satisface

$$
W'(x)+p(x)W(x)=0.
$$

En consecuencia,

$$
W(x)=W(x_0)\exp\left(-\int_{x_0}^x p(t)\,dt\right).
$$

#### Demostracion

Derivamos:

$$
W'
=
y_1y_2''-y_1''y_2.
$$

Como ambas funciones satisfacen la ecuacion,

$$
y_j''=-p(x)y_j'-q(x)y_j.
$$

Sustituyendo,

$$
W'
=
y_1(-py_2'-qy_2)-(-py_1'-qy_1)y_2.
$$

Los terminos con $q$ se cancelan y queda

$$
W'=-p(y_1y_2'-y_1'y_2)=-pW.
$$

Luego

$$
W'+pW=0.
$$

Se trata de una ecuacion lineal de primer orden para $W$, cuya solucion es

$$
W(x)=W(x_0)\exp\left(-\int_{x_0}^x p(t)\,dt\right).
$$

\qed

## Consecuencias inmediatas

### Corolario 3

Si $W(x_0)\ne 0$ en un punto del intervalo, entonces

$$
W(x)\ne 0
$$

para todo $x\in I$.

### Corolario 4

Si $W(x_0)=0$ en algun punto, entonces

$$
W(x)\equiv 0
$$

en todo el intervalo.

### Interpretacion

Para soluciones de una misma ecuacion lineal de segundo orden, el wronskiano no puede:

- anularse en un punto y ser no nulo en otro;
- cambiar de signo atravesando cero;
- comportarse localmente de forma arbitraria.

O bien es siempre nulo, o bien nunca se anula.

## Independencia lineal y sistemas fundamentales

### Teorema 5

Sean $y_1$ y $y_2$ soluciones de

$$
y''+p(x)y'+q(x)y=0
$$

en un intervalo $I$. Entonces son linealmente independientes si y solo si

$$
W(y_1,y_2)(x)\ne 0
$$

para algun, y por tanto para todo, $x\in I$.

#### Idea de la demostracion

Ya sabemos que dependencia lineal implica $W\equiv 0$.

Para el reciproco, si $W(x_0)\ne 0$, los vectores de datos iniciales

$$
(y_1(x_0),y_1'(x_0)),
\qquad
(y_2(x_0),y_2'(x_0))
$$

son linealmente independientes en $\mathbb{R}^2$. Por teoria de existencia y unicidad, eso fuerza independencia de las soluciones en todo el intervalo.

## Version general de Abel-Liouville

Para la ecuacion de orden $n$

$$
y^{(n)}+a_{n-1}(x)y^{(n-1)}+\cdots+a_0(x)y=0,
$$

el wronskiano de $n$ soluciones satisface

$$
W'(x)+a_{n-1}(x)W(x)=0.
$$

Por tanto,

$$
W(x)=W(x_0)\exp\left(-\int_{x_0}^x a_{n-1}(t)\,dt\right).
$$

### Comentario

La ecuacion del wronskiano solo depende del coeficiente de $y^{(n-1)}$, no de los demas coeficientes. Ese hecho es una de las sorpresas elegantes de la teoria lineal.

## Demostracion conceptual via sistemas

La manera mas limpia de ver la formula general es reescribir la ecuacion escalar de orden $n$ como un sistema de primer orden

$$
Y'=A(x)Y.
$$

Si $\Phi(x)$ es una matriz fundamental, su determinante satisface la formula de Liouville:

$$
(\det\Phi)'=(\operatorname{tr}A)\det\Phi.
$$

En la matriz companera correspondiente,

$$
\operatorname{tr}A=-a_{n-1}(x).
$$

Como $\det\Phi$ coincide con el wronskiano, obtenemos

$$
W'=-a_{n-1}W.
$$

Eso recupera exactamente la formula de Abel.

## Espacio de soluciones y dimension

### Teorema 6

El espacio de soluciones de una ecuacion lineal homogenea de orden $n$ con coeficientes continuos en un intervalo tiene dimension $n$.

Un conjunto de $n$ soluciones linealmente independientes recibe el nombre de sistema fundamental de soluciones.

### Consecuencia practica

Si encuentras $n$ soluciones y su wronskiano es no nulo en un punto, ya encontraste una base del espacio solucion. No hace falta buscar mas.

## Datos iniciales y sistema fundamental canonico

La razon profunda por la que la dimension vale

$$
n
$$

es que una solucion queda determinada de forma unica por sus

$$
n
$$

datos iniciales en un punto

$$
x_0.
$$

### Mapa de Cauchy

Definimos la aplicacion

$$
J_{x_0}(y)=
\bigl(
y(x_0),y'(x_0),\dots,y^{(n-1)}(x_0)
\bigr)\in\mathbb{R}^n.
$$

Restringida al espacio de soluciones, esta aplicacion es lineal y biyectiva.

### Inyectividad

Si todos los datos iniciales de una solucion son cero en

$$
x_0,
$$

la unicidad del problema de valores iniciales obliga a que la solucion sea identicamente nula.

### Sobreyectividad

Dado cualquier vector

$$
(c_0,\dots,c_{n-1})\in\mathbb{R}^n,
$$

el teorema de existencia y unicidad produce una unica solucion tal que

$$
y^{(k)}(x_0)=c_k,
\qquad k=0,\dots,n-1.
$$

### Sistema fundamental canonico

Tomando como datos iniciales los vectores de la base canonica de

$$
\mathbb{R}^n,
$$

se obtienen soluciones

$$
y_1,\dots,y_n
$$

cuya matriz wronskiana en

$$
x_0
$$

es la identidad. En particular,

$$
W(y_1,\dots,y_n)(x_0)=1.
$$

### Lectura

Esto muestra algo mas fino que la mera existencia de una base: siempre puede elegirse una base normalizada por condiciones iniciales. Es la version escalar de fijar una matriz fundamental con

$$
\Phi(x_0)=I.
$$

### Consecuencia conceptual

El wronskiano es el Jacobiano del paso entre coeficientes en una base de soluciones y datos iniciales en un punto. Por eso su no anulacion expresa invertibilidad real del problema lineal, no solo un accidente de calculo.

## Ejemplo 1: el oscilador armonico

Para

$$
y''+y=0,
$$

tomamos

$$
y_1=\cos x,
\qquad
y_2=\sin x.
$$

El wronskiano es

$$
W(\cos x,\sin x)
=
\cos x\cos x-(-\sin x)\sin x
=
\cos^2x+\sin^2x
=
1.
$$

Luego $\cos x$ y $\sin x$ son linealmente independientes y forman un sistema fundamental.

Observa ademas que aqui $p(x)=0$, de modo que Abel predice que el wronskiano debe ser constante. Y en efecto lo es.

## Ejemplo 2: ecuacion con rozamiento

Consideremos

$$
y''+2y'+y=0.
$$

Las soluciones basicas son

$$
y_1=e^{-x},
\qquad
y_2=xe^{-x}.
$$

Calculemos el wronskiano:

$$
y_1'=-e^{-x},
$$

$$
y_2'=e^{-x}-xe^{-x}=e^{-x}(1-x).
$$

Luego

$$
W
=
e^{-x}\cdot e^{-x}(1-x)-(-e^{-x})\cdot xe^{-x}
=
e^{-2x}(1-x+x)
=
e^{-2x}.
$$

La formula de Abel tambien lo predice, pues aqui $p(x)=2$ y por tanto

$$
W(x)=Ce^{-2x}.
$$

## Ejemplo 3: ecuacion de Euler

Tomemos

$$
x^2y''-3xy'+4y=0
\qquad (x>0).
$$

Dividiendo por $x^2$:

$$
y''-\frac{3}{x}y'+\frac{4}{x^2}y=0.
$$

Aqui

$$
p(x)=-\frac{3}{x}.
$$

Si $y_1=x^2$ y $y_2=x^2\ln x$, entonces

$$
W(x)=x^3.
$$

Verificacion por Abel:

$$
W(x)=C\exp\left(-\int -\frac{3}{x}\,dx\right)=Cx^3.
$$

Todo encaja.

## Reduccion de orden

Si ya conocemos una solucion no trivial $y_1$ de una ecuacion de segundo orden

$$
y''+p(x)y'+q(x)y=0,
$$

la formula de Abel permite construir una segunda solucion linealmente independiente. La idea es imponer que el wronskiano tenga la forma prescrita por Abel.

Una formula clasica es

$$
y_2(x)=y_1(x)\int \frac{e^{-\int p(x)\,dx}}{y_1(x)^2}\,dx.
$$

Esta expresion no debe memorizarse como truco: nace de exigir que el wronskiano de $y_1$ y $y_2$ satisfaga la ecuacion de Abel.

## Conexion con variacion de parametros

En variacion de parametros aparecen terminos como

$$
\frac{1}{W(y_1,y_2)}.
$$

Eso no es accidental. El wronskiano mide la invertibilidad del sistema algebraico que determina los coeficientes variables. Si el wronskiano se anulara, el metodo perderia unicidad local.

## Error comun 1: calcular el wronskiano fuera del contexto

Que el wronskiano sea cero no basta, por si solo, para concluir dependencia lineal. Esa conclusion solo es segura cuando las funciones son soluciones de la misma ecuacion lineal con coeficientes suficientemente regulares.

## Error comun 2: creer que basta un solo punto sin contexto

Para funciones arbitrarias, un wronskiano no nulo en un punto si implica independencia. Pero un wronskiano nulo en un punto no implica dependencia. En ecuaciones lineales, gracias a Abel, la informacion global si puede recuperarse de un solo punto.

## Error comun 3: olvidar el intervalo

La independencia lineal se estudia en un intervalo. Dos soluciones pueden ser independientes en un intervalo y el problema cambiar en otro si los coeficientes dejan de ser continuos o si la ecuacion no esta bien definida alli.

## Practica guiada

### Ejercicio 1

Calcula el wronskiano de

$$
y_1=e^{2x},
\qquad
y_2=e^{-x}.
$$

#### Solucion

$$
W=
\begin{vmatrix}
e^{2x} & e^{-x} \\
2e^{2x} & -e^{-x}
\end{vmatrix}
=
-e^x-2e^x
=
-3e^x.
$$

Como nunca se anula, las funciones son linealmente independientes.

### Ejercicio 2

Supongamos que $y_1$ y $y_2$ son soluciones de

$$
y''+p(x)y'+q(x)y=0
$$

y que $W(y_1,y_2)(x_0)=0$. Que puedes concluir?

#### Solucion

Por la formula de Abel,

$$
W(x)\equiv 0
$$

en todo el intervalo. Luego $y_1$ y $y_2$ son linealmente dependientes.

### Ejercicio 3

Para

$$
y''-4y'+4y=0,
$$

verifica que $e^{2x}$ y $xe^{2x}$ forman un sistema fundamental.

#### Solucion

El wronskiano es

$$
W=
\begin{vmatrix}
e^{2x} & xe^{2x} \\
2e^{2x} & e^{2x}+2xe^{2x}
\end{vmatrix}
=
e^{4x}.
$$

Como nunca se anula, forman un sistema fundamental.

## Cierre

El wronskiano es la interfaz entre algebra lineal y ecuaciones diferenciales lineales. Su papel profundo no es solo decir si dos funciones "parecen distintas", sino controlar:

- la independencia lineal de soluciones;
- la existencia de sistemas fundamentales;
- la dimension del espacio solucion;
- la estructura de metodos como reduccion de orden y variacion de parametros.

La formula de Abel-Liouville convierte esa intuicion en una identidad exacta. Gracias a ella, la independencia de soluciones deja de ser un asunto local desordenado y pasa a tener una rigidez global.
