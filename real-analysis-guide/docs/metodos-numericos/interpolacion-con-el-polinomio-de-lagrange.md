---
title: Interpolacion con el polinomio de Lagrange
description: Interpolacion polinomica, formula de Lagrange, unicidad, termino de error y ejemplos con dos y tres puntos.
---

# Interpolacion con el polinomio de Lagrange

## Motivacion

En analisis numerico aparece constantemente el siguiente problema:

dada una funcion

$$
f
$$

que conocemos solo en ciertos nodos

$$
x_0,\dots,x_n,
$$

queremos construir una expresion sencilla que reproduzca esos valores y que permita:

- aproximar

$$
f(x)
$$

entre los nodos;
- derivar formulas numericas para

$$
f'
$$

e

$$
\int f;
$$

- reemplazar datos experimentales por un modelo computable.

El polinomio interpolante de Lagrange es la respuesta mas elemental y estructural a ese problema.

## Problema de interpolacion

Dados

$$
n+1
$$

puntos con abscisas distintas

$$
(x_0,y_0),\dots,(x_n,y_n),
$$

queremos hallar un polinomio

$$
p_n
$$

de grado a lo sumo

$$
n
$$

tal que

$$
p_n(x_i)=y_i,\qquad i=0,\dots,n.
$$

Cuando

$$
y_i=f(x_i),
$$

decimos que

$$
p_n
$$

interpola a

$$
f
$$

en los nodos dados.

## Existencia y unicidad

### Teorema 1

Si

$$
x_0,\dots,x_n
$$

son distintos dos a dos, existe un unico polinomio

$$
p_n
$$

de grado a lo sumo

$$
n
$$

que satisface

$$
p_n(x_i)=y_i
$$

para todo

$$
i=0,\dots,n.
$$

### Demostracion de unicidad

Supongamos que

$$
p_n
$$

y

$$
q_n
$$

interpolan los mismos datos. Entonces

$$
r_n=p_n-q_n
$$

es un polinomio de grado a lo sumo

$$
n
$$

que se anula en los

$$
n+1
$$

puntos distintos

$$
x_0,\dots,x_n.
$$

Pero un polinomio no nulo de grado a lo sumo

$$
n
$$

no puede tener mas de

$$
n
$$

raices. Luego

$$
r_n\equiv 0,
$$

y por tanto

$$
p_n=q_n.
$$

### Demostracion de existencia

La construccion explicita aparece en la base de Lagrange.

## Polinomios fundamentales de Lagrange

Para cada

$$
k=0,\dots,n,
$$

definimos

$$
L_k(x)=\prod_{\substack{0\le j\le n\\ j\ne k}}
\frac{x-x_j}{x_k-x_j}.
$$

### Propiedad clave

Estos polinomios satisfacen

$$
L_k(x_i)=
\begin{cases}
1,& i=k,\\
0,& i\ne k.
\end{cases}
$$

En otras palabras, cada

$$
L_k
$$

selecciona el dato

$$
y_k
$$

y anula todos los demas.

## Formula de Lagrange

### Teorema 2

El polinomio interpolante unico viene dado por

$$
p_n(x)=\sum_{k=0}^n y_kL_k(x).
$$

### Verificacion

Para cada nodo

$$
x_i,
$$

$$
p_n(x_i)=\sum_{k=0}^n y_kL_k(x_i)=y_i,
$$

porque todos los terminos se anulan salvo el de indice

$$
i.
$$

## Grado efectivo

Aunque formalmente

$$
p_n
$$

tiene grado a lo sumo

$$
n,
$$

su grado real puede ser menor si los datos satisfacen una relacion polinomica mas simple.

## Interpretacion lineal

La interpolacion en nodos fijos es un operador lineal:

$$
f\mapsto p_n.
$$

Los polinomios

$$
L_k
$$

constituyen una base de la familia

$$
\mathbb{P}_n
$$

adaptada a los nodos.

## <a id="interpolacion-de-lagrange-con-dos-puntos"></a> Interpolacion de Lagrange con dos puntos

Cuando

$$
n=1,
$$

el polinomio interpolante es una recta.

Dados

$$
(x_0,y_0),\qquad (x_1,y_1),
$$

tenemos

$$
L_0(x)=\frac{x-x_1}{x_0-x_1},
\qquad
L_1(x)=\frac{x-x_0}{x_1-x_0}.
$$

Por tanto,

$$
p_1(x)=y_0\frac{x-x_1}{x_0-x_1}+y_1\frac{x-x_0}{x_1-x_0}.
$$

### Ejemplo 1

Interpolemos los puntos

$$
(1,3),\qquad (4,9).
$$

Entonces

$$
L_0(x)=\frac{x-4}{1-4}=-\frac{x-4}{3},
\qquad
L_1(x)=\frac{x-1}{4-1}=\frac{x-1}{3}.
$$

El polinomio es

$$
p_1(x)=3\left(-\frac{x-4}{3}\right)+9\left(\frac{x-1}{3}\right).
$$

Simplificando:

$$
p_1(x)=-(x-4)+3(x-1)=2x+1.
$$

Se comprueba:

$$
p_1(1)=3,\qquad p_1(4)=9.
$$

### Comentario

Este caso coincide con la formula usual de la recta que pasa por dos puntos. La teoria de Lagrange no la reemplaza; la generaliza.

## <a id="polinomio-de-lagrange-con-tres-puntos"></a> Polinomio de Lagrange con tres puntos

Cuando

$$
n=2,
$$

obtenemos una parabola interpolante.

Dados

$$
(x_0,y_0),\ (x_1,y_1),\ (x_2,y_2),
$$

la formula es

$$
p_2(x)=y_0L_0(x)+y_1L_1(x)+y_2L_2(x),
$$

con

$$
L_0(x)=\frac{(x-x_1)(x-x_2)}{(x_0-x_1)(x_0-x_2)},
$$

$$
L_1(x)=\frac{(x-x_0)(x-x_2)}{(x_1-x_0)(x_1-x_2)},
$$

$$
L_2(x)=\frac{(x-x_0)(x-x_1)}{(x_2-x_0)(x_2-x_1)}.
$$

### Ejemplo 2

Interpolemos

$$
(0,1),\ (1,3),\ (2,2).
$$

Entonces

$$
L_0(x)=\frac{(x-1)(x-2)}{(0-1)(0-2)}=\frac{(x-1)(x-2)}{2},
$$

$$
L_1(x)=\frac{x(x-2)}{(1-0)(1-2)}=-x(x-2),
$$

$$
L_2(x)=\frac{x(x-1)}{(2-0)(2-1)}=\frac{x(x-1)}{2}.
$$

Por tanto,

$$
p_2(x)=1\cdot \frac{(x-1)(x-2)}{2}
+3\cdot[-x(x-2)]
+2\cdot \frac{x(x-1)}{2}.
$$

Desarrollando:

$$
p_2(x)=\frac{x^2-3x+2}{2}-3x^2+6x+x^2-x
=-\frac32x^2+\frac72x+1.
$$

Se verifica:

$$
p_2(0)=1,\qquad p_2(1)=3,\qquad p_2(2)=2.
$$

## Forma nodal y forma expandida

La formula de Lagrange es excelente para demostrar existencia y para construir el polinomio a partir de datos. Sin embargo, para evaluar repetidamente el polinomio puede resultar menos eficiente que otras formas, como:

- forma de Newton;
- forma barycentrica;
- forma expandida si el grado es muy pequeno.

## Error de interpolacion

### Teorema 3

Supongamos que

$$
f\in C^{n+1}([a,b])
$$

y que

$$
x_0,\dots,x_n\in [a,b]
$$

son nodos distintos. Entonces, para cada

$$
x\in [a,b],
$$

existe

$$
\xi_x\in [a,b]
$$

tal que

$$
f(x)-p_n(x)=
\frac{f^{(n+1)}(\xi_x)}{(n+1)!}
\omega_{n+1}(x),
$$

donde

$$
\omega_{n+1}(x)=\prod_{j=0}^n (x-x_j).
$$

### Comentario

Toda la complejidad del error se separa en dos factores:

- la magnitud de la derivada

$$
f^{(n+1)};
$$

- la geometria de los nodos a traves de

$$
\omega_{n+1}.
$$

## Esquema de demostracion

Se considera la funcion

$$
\phi(t)=f(t)-p_n(t)-\lambda \omega_{n+1}(t),
$$

escogiendo

$$
\lambda
$$

para imponer

$$
\phi(x)=0.
$$

La funcion resultante tiene

$$
n+2
$$

ceros: los

$$
n+1
$$

nodos y el punto

$$
x.
$$

Aplicando repetidamente el teorema de Rolle se obtiene un punto

$$
\xi_x
$$

tal que

$$
\phi^{(n+1)}(\xi_x)=0,
$$

y de ahi se despeja la formula.

## Ejemplo de estimacion de error

Si

$$
f(x)=e^x
$$

y usamos interpolacion lineal en

$$
[0,1],
$$

entonces

$$
f''(x)=e^x\le e.
$$

Por el teorema, para cualquier

$$
x\in [0,1],
$$

$$
\lvert f(x)-p_1(x)\rvert
\le
\frac{e}{2}\lvert x(x-1)\rvert.
$$

El error maximo queda controlado por la geometria cuadratica del producto

$$
x(x-1).
$$

## Interpolacion y condicionamiento

La existencia de un polinomio unico no significa que el problema sea estable para grados altos. A medida que aumenta

$$
n,
$$

pueden aparecer oscilaciones grandes si los nodos estan mal distribuidos.

## Fenomeno de Runge

Para funciones suaves interpoladas en nodos equiespaciados de grado alto, el polinomio puede alejarse mucho de la funcion cerca de los extremos del intervalo.

Esto muestra que:

- mas grado no siempre significa mejor aproximacion;
- la eleccion de nodos es tan importante como la formula.

## Nodo y sensibilidad

El polinomio depende linealmente de los datos

$$
y_k.
$$

La suma

$$
\Lambda_n(x)=\sum_{k=0}^n \lvert L_k(x)\rvert
$$

se llama funcion de Lebesgue y mide la amplificacion potencial del error de datos. Aunque no siempre se estudia en cursos basicos, conceptualmente es central para entender estabilidad.

## Relacion con formulas numericas

Interpolar no es solo aproximar valores intermedios. Tambien permite:

- derivar formulas de diferenciacion reemplazando

$$
f
$$

por

$$
p_n;
$$

- derivar reglas de cuadratura integrando

$$
p_n;
$$

- construir esquemas locales de orden alto.

## Comentario practico

Para pocos nodos, la forma de Lagrange es manejable a mano y teoricamente transparente. Para muchos nodos, suele preferirse una implementacion barycentrica o la forma incremental de Newton.

## Cierre

La interpolacion de Lagrange es una pieza fundacional del analisis numerico: resuelve el problema de ajuste polinomico exacto, clarifica el origen del error y sirve de puente directo hacia diferenciacion numerica, cuadraturas y metodos de orden alto.
