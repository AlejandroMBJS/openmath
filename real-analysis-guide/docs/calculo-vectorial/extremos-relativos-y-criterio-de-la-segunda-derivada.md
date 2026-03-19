---
title: Extremos relativos y criterio de la segunda derivada
description: Puntos criticos, teorema de Fermat, matriz hessiana y clasificacion de extremos locales en funciones de varias variables.
---

# Extremos relativos y criterio de la segunda derivada

## Motivacion

La optimizacion sin restricciones busca responder:

- donde una funcion alcanza valores maximos o minimos;
- como distinguir un minimo, un maximo o un punto silla;
- que informacion local ofrecen las derivadas.

En una variable, el criterio de la segunda derivada es familiar. En varias variables, la informacion de segundo orden se organiza en la matriz hessiana.

## Definiciones

Sea

$$
f:D\subseteq \mathbb{R}^n\to \mathbb{R}.
$$

Decimos que $a\in D$ es un **maximo local** si existe un entorno $U$ de $a$ tal que

$$
f(x)\le f(a)
$$

para todo

$$
x\in D\cap U.
$$

Analogamente, $a$ es un **minimo local** si

$$
f(x)\ge f(a)
$$

para todo

$$
x\in D\cap U.
$$

Si no se exige entorno sino todo el dominio, se habla de maximo o minimo global.

## Puntos criticos

Un punto interior $a$ es **critico** si

- $\nabla f(a)=0$, o
- alguna derivada parcial de primer orden no existe.

En la teoria suave, el caso principal es

$$
\nabla f(a)=0.
$$

## Teorema de Fermat

### Teorema 1

Si $f$ es diferenciable en un punto interior $a$ y $a$ es un extremo local, entonces

$$
\nabla f(a)=0.
$$

#### Demostracion

Sea $u$ cualquier vector unitario. La funcion de una variable

$$
\varphi(t)=f(a+tu)
$$

tiene un extremo local en $t=0$. Por el teorema de Fermat en una variable,

$$
\varphi'(0)=0.
$$

Pero

$$
\varphi'(0)=D_u f(a)=\nabla f(a)\cdot u.
$$

Como esto vale para todo $u$, necesariamente

$$
\nabla f(a)=0.
$$

### Advertencia

La condicion

$$
\nabla f(a)=0
$$

es necesaria, no suficiente.

## La matriz hessiana

Si $f$ tiene derivadas parciales de segundo orden, la matriz hessiana en $a$ es

$$
H_f(a)=
\begin{pmatrix}
\dfrac{\partial^2 f}{\partial x_1^2}(a) & \cdots & \dfrac{\partial^2 f}{\partial x_1\partial x_n}(a) \\
\vdots & \ddots & \vdots \\
\dfrac{\partial^2 f}{\partial x_n\partial x_1}(a) & \cdots & \dfrac{\partial^2 f}{\partial x_n^2}(a)
\end{pmatrix}.
$$

Cuando las mixtas coinciden, la hessiana es simetrica.

## Aproximacion cuadratica

Si $f$ es suficientemente suave y $a$ es punto critico, la expansion de Taylor de segundo orden toma la forma

$$
f(a+h)=f(a)+\frac12 h^T H_f(a) h + o(\|h\|^2).
$$

Por tanto, la forma cuadratica

$$
q(h)=h^T H_f(a) h
$$

gobierna la clasificacion local del punto.

## Criterio general de segundo orden

### Teorema 2

Sea $a$ un punto critico de una funcion $C^2$.

- Si $H_f(a)$ es definida positiva, entonces $a$ es un minimo local estricto.
- Si $H_f(a)$ es definida negativa, entonces $a$ es un maximo local estricto.
- Si $H_f(a)$ es indefinida, entonces $a$ es un punto silla.

Si la hessiana es semidefinida, el criterio es inconcluso.

### Idea de la demostracion

Se usa la expansion de Taylor de segundo orden y el signo de la forma cuadratica dominante.

## Criterio en dos variables

Para

$$
f=f(x,y),
$$

en un punto critico $(a,b)$ definimos

$$
A=f_{xx}(a,b),
\qquad
B=f_{xy}(a,b),
\qquad
C=f_{yy}(a,b),
$$

y

$$
\Delta=AC-B^2.
$$

### Teorema 3

- Si $\Delta>0$ y $A>0$, hay minimo local.
- Si $\Delta>0$ y $A<0$, hay maximo local.
- Si $\Delta<0$, hay punto silla.
- Si $\Delta=0$, el criterio no decide.

Este es el criterio clasico de la segunda derivada en dos variables.

## Ejemplos fundamentales

### Ejemplo 1: minimo estricto

Sea

$$
f(x,y)=x^2+y^2.
$$

Entonces

$$
\nabla f=(2x,2y),
$$

de modo que el unico punto critico es $(0,0)$.

La hessiana es

$$
H_f=
\begin{pmatrix}
2 & 0 \\
0 & 2
\end{pmatrix},
$$

definida positiva. Luego $(0,0)$ es un minimo local estricto, y ademas global.

### Ejemplo 2: punto silla

Sea

$$
f(x,y)=x^2-y^2.
$$

El unico punto critico es de nuevo $(0,0)$, y

$$
H_f=
\begin{pmatrix}
2 & 0 \\
0 & -2
\end{pmatrix}.
$$

La hessiana es indefinida. En efecto, sobre el eje $x$ la funcion es positiva y sobre el eje $y$ es negativa. Luego $(0,0)$ es un punto silla.

### Ejemplo 3: caso degenerado

Sea

$$
f(x,y)=x^4+y^4.
$$

En el origen,

$$
\nabla f(0,0)=0
$$

y la hessiana es la matriz nula. El criterio de segundo orden no concluye.

Sin embargo,

$$
f(x,y)\ge 0
$$

con igualdad solo en el origen, asi que $(0,0)$ es un minimo local estricto.

Este ejemplo muestra por que el caso

$$
\Delta=0
$$

requiere analisis adicional.

### Ejemplo 4: degenerado con punto silla

Sea

$$
f(x,y)=x^4-y^4.
$$

La hessiana en el origen vuelve a ser nula, pero ahora la funcion toma signos opuestos segun la direccion. Luego $(0,0)$ es un punto silla.

## Metodo practico

Para buscar extremos locales sin restricciones:

1. Calcular $\nabla f$.
2. Resolver

$$
\nabla f=0.
$$

3. Hallar la hessiana en los puntos criticos.
4. Clasificar con el criterio de segundo orden cuando sea posible.
5. Si el criterio falla, estudiar ordenes superiores, trayectorias especiales o desigualdades directas.

## Ejemplo trabajado completo

### Ejemplo 5

Sea

$$
f(x,y)=x^3-3x+y^2.
$$

Primero,

$$
f_x=3x^2-3,
\qquad
f_y=2y.
$$

Los puntos criticos satisfacen

$$
3x^2-3=0,
\qquad
2y=0,
$$

es decir,

$$
(1,0),\ (-1,0).
$$

La hessiana es

$$
H_f(x,y)=
\begin{pmatrix}
6x & 0 \\
0 & 2
\end{pmatrix}.
$$

En $(1,0)$:

$$
H_f(1,0)=
\begin{pmatrix}
6 & 0 \\
0 & 2
\end{pmatrix},
$$

definida positiva, luego hay minimo local.

En $(-1,0)$:

$$
H_f(-1,0)=
\begin{pmatrix}
-6 & 0 \\
0 & 2
\end{pmatrix},
$$

indefinida, luego hay punto silla.

## Extremos globales en compactos

Si $f$ es continua sobre un conjunto compacto $K$, entonces alcanza maximo y minimo absolutos en $K$.

Esto es una version multivariable del teorema de Weierstrass. En la practica, para problemas sobre dominios cerrados y acotados hay que estudiar:

- puntos criticos interiores;
- puntos del borde.

El borde suele requerir parametrizacion o multiplicadores de Lagrange.

## Relacion con convexidad

Si $f$ es convexa sobre un conjunto convexo, todo minimo local es global. Si ademas $f$ es estrictamente convexa, el minimo global es unico.

Esta observacion trasciende el criterio de segundo orden y conecta el calculo con optimizacion convexa y analisis funcional.

## Errores frecuentes

- Pensar que $\nabla f=0$ ya basta para concluir extremo.
- Aplicar el criterio de dos variables a funciones de dimension mayor.
- Olvidar revisar el borde cuando se buscan extremos globales.
- Dar por nulo un punto degenerado sin analisis adicional.

## Conclusion

La teoria de extremos locales muestra como la informacion de primer y segundo orden controla la geometria del grafo. El gradiente detecta candidatos; la hessiana clasifica la curvatura local. Cuando hay restricciones, esta teoria debe combinarse con la geometria del conjunto admisible, y eso conduce de manera natural a los multiplicadores de Lagrange.
