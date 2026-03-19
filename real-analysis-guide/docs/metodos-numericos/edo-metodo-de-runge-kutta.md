---
title: EDO metodo de Runge-Kutta
description: Familia de metodos de Runge-Kutta, etapas, tablas de Butcher, condiciones de orden y relacion con Taylor y Euler modificado.
---

# EDO metodo de Runge-Kutta

## Motivacion

Los metodos de Taylor alcanzan orden alto, pero exigen derivadas sucesivas de

$$
f.
$$

Los metodos de Runge-Kutta buscan una alternativa mas flexible:

obtener orden alto usando solo evaluaciones de

$$
f
$$

en puntos intermedios cuidadosamente elegidos.

## Problema base

Consideremos el problema de valor inicial

$$
y'=f(x,y),
\qquad
y(x_0)=y_0.
$$

Queremos construir un metodo de un paso de la forma

$$
y_{n+1}=y_n+h\,\Phi(x_n,y_n,h),
$$

donde

$$
\Phi
$$

se obtiene combinando varias pendientes.

## Forma general

Un metodo de Runge-Kutta de

$$
s
$$

etapas tiene la forma

$$
y_{n+1}
=
y_n
+h\sum_{i=1}^s b_i k_i,
$$

donde las etapas satisfacen

$$
k_i=
f\left(
x_n+c_i h,\,
y_n+h\sum_{j=1}^s a_{ij}k_j
\right).
$$

## Metodos explicitos

Si

$$
a_{ij}=0
$$

para

$$
j\ge i,
$$

las etapas pueden calcularse secuencialmente y el metodo es explicito.

En ese caso:

$$
k_1=f(x_n,y_n),
$$

luego se calcula

$$
k_2,
$$

luego

$$
k_3,
$$

y asi sucesivamente.

## Tabla de Butcher

Es habitual representar un metodo por su tabla:

$$
\begin{array}{c|ccc}
c_1 & a_{11} & \cdots & a_{1s}\\
\vdots & \vdots & & \vdots\\
c_s & a_{s1} & \cdots & a_{ss}\\
\hline
& b_1 & \cdots & b_s
\end{array}
$$

Esta tabla codifica toda la estructura del esquema.

## Casos iniciales

### Euler explicito

$$
\begin{array}{c|c}
0 & 0\\
\hline
& 1
\end{array}
$$

### Heun

$$
\begin{array}{c|cc}
0 & 0 & 0\\
1 & 1 & 0\\
\hline
& \frac12 & \frac12
\end{array}
$$

### Punto medio

$$
\begin{array}{c|cc}
0 & 0 & 0\\
\frac12 & \frac12 & 0\\
\hline
& 0 & 1
\end{array}
$$

## Orden del metodo

El orden se determina exigiendo que la expansion numerica coincida con la expansion de Taylor de la solucion exacta hasta cierto grado.

### Primeras condiciones de orden

Para orden

$$
1:
$$

$$
\sum_{i=1}^s b_i=1.
$$

Para orden

$$
2:
$$

$$
\sum_{i=1}^s b_i c_i=\frac12.
$$

Para orden mas alto aparecen condiciones combinatorias mas complejas.

## Relacion con Taylor

Runge-Kutta no calcula explicitamente

$$
f_x,\ f_y,\ f_{xx},\dots
$$

pero organiza varias evaluaciones de

$$
f
$$

de modo que, al combinarse, reproduzcan los mismos terminos de Taylor hasta el orden deseado.

## Interpretacion de las etapas

Cada

$$
k_i
$$

es una pendiente muestreada en algun punto intermedio del paso.

El metodo construye una pendiente efectiva promedio

$$
\sum b_i k_i
$$

que sustituye a la pendiente unica usada por Euler.

## Ejemplo de familia RK2

Una familia de segundo orden esta dada por:

$$
k_1=f(x_n,y_n),
$$

$$
k_2=f(x_n+\alpha h,\ y_n+\alpha h k_1),
$$

$$
y_{n+1}=y_n+h\left[\left(1-\frac{1}{2\alpha}\right)k_1+\frac{1}{2\alpha}k_2\right],
$$

con

$$
\alpha\ne 0.
$$

### Casos particulares

- 

$$
\alpha=1
$$

produce Heun;
- 

$$
\alpha=\frac12
$$

produce el punto medio.

## Ventaja estructural

Los metodos de Runge-Kutta tienen dos ventajas esenciales:

1. no requieren derivadas superiores de

$$
f;
$$

2. pueden alcanzar orden alto con formulas uniformes y faciles de programar.

## Limitaciones

- el costo por paso crece con el numero de etapas;
- los metodos explicitos tienen regiones de estabilidad acotadas;
- para problemas rigidos se requieren versiones implicitas o especializadas.

## Convergencia

Bajo hipotesis Lipschitz sobre

$$
f,
$$

todo metodo de Runge-Kutta consistente de orden

$$
p
$$

converge globalmente con error

$$
O(h^p).
$$

## Estabilidad absoluta

Aplicado a la ecuacion test

$$
y'=\lambda y,
$$

un metodo de Runge-Kutta produce

$$
y_{n+1}=R(h\lambda)y_n,
$$

donde

$$
R
$$

es una funcion racional o polinomica de estabilidad.

La region

$$
\{z:\lvert R(z)\rvert<1\}
$$

describe el comportamiento del metodo frente a modos disipativos.

## Perspectiva algebraica

La teoria de Runge-Kutta moderna conecta:

- combinatoria de arboles;
- condiciones de orden;
- tablas de Butcher;
- estabilidad y simetria.

Aunque en un curso elemental no se desarrolla todo ese aparato, conviene saber que los coeficientes no son arbitrarios: responden a una estructura algebraica profunda.

## Comparacion con multistep

Los Runge-Kutta son metodos de un paso: solo necesitan el valor actual

$$
y_n.
$$

Esto los hace mas autonomos y faciles de iniciar que muchos metodos multipaso, a costa de usar varias evaluaciones de

$$
f
$$

por avance.

## Uso practico

En calculo cientifico, los Runge-Kutta explicitos dominan cuando:

- el problema no es rigido;
- se desea buena precision con implementacion limpia;
- el campo vectorial puede evaluarse facilmente.

## Puente hacia RK4

Entre todos los esquemas clasicos, el mas famoso es el Runge-Kutta de cuarto orden. Su popularidad se debe a que ofrece un equilibrio excelente entre:

- costo por paso;
- orden de convergencia;
- simplicidad de implementacion.

Ese metodo se estudia en detalle en el tema siguiente.

## Cierre

La idea de Runge-Kutta es simple pero poderosa: reemplazar derivadas superiores por una combinacion inteligente de pendientes muestreadas. Esa sola idea explica una parte central del analisis numerico de EDO moderno.
