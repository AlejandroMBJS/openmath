---
title: EDO Runge-Kutta orden 4
description: Metodo clasico RK4, formula, orden, error, estabilidad y ejemplo detallado para un problema de valor inicial.
---

# EDO Runge-Kutta orden 4

## Posicion del metodo

El metodo clasico de Runge-Kutta de orden

$$
4
$$

es probablemente el esquema explicito mas conocido para problemas de valor inicial no rigidos.

Su prestigio se debe a un equilibrio notable:

- cuatro evaluaciones de

$$
f
$$

por paso;
- orden global

$$
4;
$$

- formula fija y simple.

## Formula del metodo

Dados

$$
x_n,\ y_n,
$$

definimos:

$$
k_1=f(x_n,y_n),
$$

$$
k_2=f\left(x_n+\frac{h}{2},\,y_n+\frac{h}{2}k_1\right),
$$

$$
k_3=f\left(x_n+\frac{h}{2},\,y_n+\frac{h}{2}k_2\right),
$$

$$
k_4=f(x_n+h,\ y_n+h k_3).
$$

Luego:

$$
y_{n+1}
=
y_n+\frac{h}{6}(k_1+2k_2+2k_3+k_4).
$$

## Tabla de Butcher

$$
\begin{array}{c|cccc}
0 & 0 & 0 & 0 & 0\\
\frac12 & \frac12 & 0 & 0 & 0\\
\frac12 & 0 & \frac12 & 0 & 0\\
1 & 0 & 0 & 1 & 0\\
\hline
& \frac16 & \frac13 & \frac13 & \frac16
\end{array}
$$

## Interpretacion de las pendientes

- 

$$
k_1
$$

usa la pendiente inicial;
- 

$$
k_2
$$

y

$$
k_3
$$

exploran el punto medio;
- 

$$
k_4
$$

usa una prediccion en el extremo final.

La combinacion ponderada produce una pendiente efectiva muy precisa.

## Orden del metodo

### Teorema 1

Si

$$
f
$$

es suficientemente suave, RK4 tiene:

- error local

$$
O(h^5);
$$

- error global

$$
O(h^4).
$$

### Comentario

Cada paso individual es mucho mas preciso que Euler o Heun. El error global pierde un orden por acumulacion sobre aproximadamente

$$
\frac{1}{h}
$$

pasos.

## Relacion con Taylor

RK4 reproduce los terminos del desarrollo de Taylor hasta grado

$$
4
$$

sin necesidad de calcular derivadas superiores de

$$
f.
$$

Ese es precisamente el logro algebraico de sus coeficientes.

## Ejemplo detallado

Consideremos

$$
y'=y-x^2+1,
\qquad
y(0)=0.5.
$$

La solucion exacta es

$$
y(x)=(x+1)^2-\frac12 e^x.
$$

Tomemos

$$
h=0.2.
$$

### Paso 1

$$
k_1=f(0,0.5)=1.5.
$$

### Paso 2

$$
k_2
=
f\left(0.1,\ 0.5+0.1(1.5)\right)
=
f(0.1,0.65)
=
0.65-0.01+1
=
1.64.
$$

### Paso 3

$$
k_3
=
f\left(0.1,\ 0.5+0.1(1.64)\right)
=
f(0.1,0.664)
=
0.664-0.01+1
=
1.654.
$$

### Paso 4

$$
k_4
=
f\left(0.2,\ 0.5+0.2(1.654)\right)
=
f(0.2,0.8308)
=
0.8308-0.04+1
=
1.7908.
$$

### Actualizacion

$$
y_1
=
0.5+\frac{0.2}{6}(1.5+2(1.64)+2(1.654)+1.7908).
$$

Como

$$
1.5+3.28+3.308+1.7908=9.8788,
$$

obtenemos

$$
y_1
=
0.5+\frac{0.2}{6}(9.8788)
\approx
0.8292933.
$$

La solucion exacta en

$$
x=0.2
$$

es

$$
y(0.2)=1.44-\frac12 e^{0.2}\approx 0.8292986.
$$

El error es extremadamente pequeno.

## Comparacion con otros metodos

En el mismo problema y con el mismo paso:

- Euler daba

$$
0.8;
$$

- Euler modificado daba

$$
0.826;
$$

- RK4 da

$$
0.8292933.
$$

La mejora de orden se traduce en una mejora dramaticamente visible.

## Estabilidad absoluta

Aplicado a la ecuacion test

$$
y'=\lambda y,
$$

RK4 satisface

$$
y_{n+1}=R(z)y_n,
\qquad
z=h\lambda,
$$

con polinomio de estabilidad

$$
R(z)=1+z+\frac{z^2}{2}+\frac{z^3}{6}+\frac{z^4}{24}.
$$

### Comentario

Este es el truncamiento de orden

$$
4
$$

de la exponencial. La region de estabilidad es bastante mas amplia que en Euler o Heun, pero sigue siendo acotada. Por ello RK4 tampoco es, en general, un metodo para problemas muy rigidos.

## Coste-beneficio

Con cuatro evaluaciones de

$$
f
$$

por paso, RK4 suele alcanzar una precision muy alta en problemas suaves no rigidos. En muchos contextos tradicionales, esto compensa de sobra el costo adicional frente a Euler o Heun.

## Limitaciones

- no es A-estable;
- puede ser ineficiente o inestable en problemas rigidos;
- no adapta el paso por si mismo;
- para tolerancias muy estrictas o sistemas enormes pueden ser preferibles esquemas embebidos o adaptativos.

## RK4 y adaptatividad

En software moderno, el RK4 clasico suele verse desplazado por pares embebidos como Runge-Kutta-Fehlberg o Dormand-Prince, que estiman el error y ajustan el paso automaticamente.

### Comentario

Aun asi, RK4 sigue siendo una referencia central porque permite estudiar con claridad:

- orden;
- estabilidad;
- estructura de las etapas;
- costo por paso.

## Exactitud polinomial temporal

En la ecuacion lineal test, RK4 coincide con el desarrollo de

$$
e^{h\lambda}
$$

hasta orden

$$
4.
$$

Por eso aproxima tan bien la evolucion local de sistemas suaves en pasos moderados.

## Comentario conceptual

RK4 es el ejemplo canonico de que en analisis numerico el orden alto puede obtenerse sin derivadas superiores, siempre que la informacion de varias pendientes se combine con pesos y puntos de muestreo cuidadosamente calibrados.

## Cierre

Runge-Kutta de orden

$$
4
$$

es el gran metodo clasico de proposito general para PVI no rigidos. Su estudio consolida la teoria de error y estabilidad iniciada con Euler y muestra hasta donde puede llegar un esquema explicito bien disenado.
