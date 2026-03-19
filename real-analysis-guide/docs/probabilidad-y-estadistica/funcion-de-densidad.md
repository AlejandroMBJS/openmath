---
title: Funcion de densidad
description: Variables absolutamente continuas, densidades, relacion con la acumulada, probabilidades por integracion y cambios de variable.
---

# Funcion de densidad

## Del reparto continuo de masa

En muchos modelos probabilisticos la probabilidad no esta concentrada en puntos aislados, sino distribuida continuamente sobre intervalos de la recta. En ese contexto la herramienta natural es la densidad.

Ejemplos tipicos:

- tiempo de espera;
- error de medicion;
- posicion;
- energia;
- velocidad.

La densidad no asigna probabilidad a puntos individuales, sino masa a conjuntos mediante integracion.

## Definicion

Decimos que una variable aleatoria real $X$ tiene densidad si existe una funcion medible

$$
f_X:\mathbb R\to [0,\infty)
$$

tal que para todo boreliano

$$
B\subseteq\mathbb R
$$

se cumple

$$
P(X\in B)=\int_B f_X(x)\,dx.
$$

## Significado

La densidad es una descripcion local de como se reparte la masa de probabilidad. Lo esencial no es el valor puntual de $f_X$, sino sus integrales sobre conjuntos.

## Propiedades fundamentales

### Teorema 1

Si $f_X$ es una densidad, entonces:

1. 

$$
f_X(x)\ge 0
$$

casi en todo punto;

2. 

$$
\int_{-\infty}^{\infty} f_X(x)\,dx=1.
$$

#### Demostracion

La no negatividad se deduce del hecho de que las probabilidades deben ser no negativas para todo conjunto medible.

La normalizacion se obtiene tomando

$$
B=\mathbb R.
$$

Entonces

$$
1=P(X\in\mathbb R)=\int_{\mathbb R}f_X(x)\,dx.
$$

## Probabilidades de intervalos

Si $X$ tiene densidad, entonces para

$$
a<b
$$

se tiene

$$
P(a\le X\le b)=\int_a^b f_X(x)\,dx.
$$

Y como los puntos individuales tienen masa nula, tambien

$$
P(a<X\le b)=P(a\le X<b)=P(a<X<b)=\int_a^b f_X(x)\,dx.
$$

## Probabilidad de un punto

### Proposicion 2

Si $X$ tiene densidad, entonces para todo

$$
a\in\mathbb R
$$

se cumple

$$
P(X=a)=0.
$$

#### Demostracion

Por definicion,

$$
P(X=a)=\int_{\{a\}} f_X(x)\,dx=0,
$$

porque un punto tiene medida de Lebesgue cero.

### Comentario

Esto no significa imposibilidad, sino masa puntual nula. En modelos continuos un valor exacto sigue siendo posible, aunque no tenga peso probabilistico positivo.

## Densidad no es probabilidad puntual

Es crucial no confundir:

- 

$$
f_X(x),
$$

que es una altura de densidad;

- 

$$
P(X=x),
$$

que en el caso continuo vale $0$.

### Advertencia

Una densidad puede ser mayor que $1$ en algunos puntos sin contradiccion. Lo que debe valer $1$ es el area total bajo la curva, no la altura maxima.

## Relacion con la funcion de distribucion

Si $X$ tiene densidad $f_X$, entonces su funcion de distribucion es

$$
F_X(x)=\int_{-\infty}^x f_X(t)\,dt.
$$

### Consecuencia

$F_X$ es continua y, en los puntos donde es derivable,

$$
F_X'(x)=f_X(x).
$$

### Comentario

La densidad puede verse como la tasa local de crecimiento de la acumulada.

## Absoluta continuidad

Decir que $X$ tiene densidad equivale a decir que su ley es absolutamente continua respecto de la medida de Lebesgue.

### Comentario

Esto distingue a las variables con densidad de:

- variables puramente discretas;
- variables mixtas;
- distribuciones singulares.

## Radon-Nikodym: lo que una densidad es en realidad

Decir que

$$
X
$$

tiene densidad no significa solo "existe una funcion que se integra". Significa que la ley de

$$
X
$$

es absolutamente continua respecto de Lebesgue y que esa ley admite una derivada en sentido de medidas:

$$
P_X(B)=\int_B f_X(x)\,dx.
$$

### Lectura

La densidad es la derivada de la medida

$$
P_X
$$

respecto de la medida de Lebesgue. Esa es la lectura precisa del teorema de Radon-Nikodym en este contexto.

### Por que importa

Esta formulacion aclara tres cosas:

- la densidad no es una probabilidad puntual;
- no es unica punto a punto, sino solo casi en todas partes;
- tener acumulada continua no basta para tener densidad.

### Unicidad casi segura

Si

$$
f
$$

y

$$
g
$$

son dos densidades de la misma ley, entonces

$$
f(x)=g(x)
$$

para casi todo

$$
x.
$$

Por eso, en teoria de medidas, la densidad es un representante de una clase de equivalencia, no un objeto puntual absoluto.

## Ejemplo 1: uniforme en [0,1]

La densidad es

$$
f_X(x)=
\begin{cases}
1, & 0\le x\le 1,\\
0, & \text{en otro caso.}
\end{cases}
$$

Entonces

$$
P\left(\frac14\le X\le \frac34\right)
=
\int_{1/4}^{3/4}1\,dx
=
\frac12.
$$

La funcion de distribucion es

$$
F_X(x)=
\begin{cases}
0, & x<0,\\
x, & 0\le x\le 1,\\
1, & x>1.
\end{cases}
$$

## Ejemplo 2: densidad triangular

Sea

$$
f_X(x)=
\begin{cases}
2x, & 0\le x\le 1,\\
0, & \text{en otro caso.}
\end{cases}
$$

Primero verificamos:

$$
\int_0^1 2x\,dx=1.
$$

Luego

$$
F_X(x)=
\begin{cases}
0, & x<0,\\
x^2, & 0\le x\le 1,\\
1, & x>1.
\end{cases}
$$

### Comentario

La masa se concentra mas hacia valores cercanos a $1$ porque la densidad crece linealmente.

## Ejemplo 3: exponencial

Sea

$$
f_X(x)=
\begin{cases}
\lambda e^{-\lambda x}, & x\ge 0,\\
0, & x<0,
\end{cases}
\qquad \lambda>0.
$$

Entonces

$$
\int_0^{\infty}\lambda e^{-\lambda x}\,dx=1,
$$

asi que es una densidad valida.

La funcion de distribucion es

$$
F_X(x)=
\begin{cases}
0, & x<0,\\
1-e^{-\lambda x}, & x\ge 0.
\end{cases}
$$

## Esperanza en terminos de densidad

Si

$$
\int_{\mathbb R} |x|f_X(x)\,dx<\infty,
$$

entonces

$$
E[X]=\int_{-\infty}^{\infty} x f_X(x)\,dx.
$$

Mas generalmente, si $g(X)$ es integrable:

$$
E[g(X)]=\int_{-\infty}^{\infty} g(x)f_X(x)\,dx.
$$

Esta formula es el caso continuo de LOTUS.

## Cambio de variable monotono

Si

$$
Y=g(X)
$$

y $g$ es diferenciable y estrictamente monotona, entonces la densidad de $Y$ puede obtenerse por la formula de cambio de variable.

### Caso creciente

Si $g$ es creciente e invertible:

$$
f_Y(y)=f_X(g^{-1}(y))\left|\frac{d}{dy}g^{-1}(y)\right|.
$$

### Ejemplo 4

Si

$$
X\sim U[0,1]
$$

y

$$
Y=X^2,
$$

entonces

$$
g^{-1}(y)=\sqrt y,
\qquad
\frac{d}{dy}g^{-1}(y)=\frac{1}{2\sqrt y}.
$$

Como $f_X(x)=1$ en $[0,1]$, resulta

$$
f_Y(y)=\frac{1}{2\sqrt y},
\qquad
0<y<1.
$$

## Mezclas y variables mixtas

No toda variable continua en apariencia tiene densidad pura. Puede haber modelos con:

- masa puntual en algunos valores;
- densidad en una parte continua.

En esos casos la ley no se describe solo por una densidad.

### Ejemplo

Una variable que vale $0$ con probabilidad $0.4$ y, con probabilidad $0.6$, es uniforme en $[0,1]$.

### Comentario

Este ejemplo muestra por que la clase de variables con densidad no agota todas las leyes continuas o semicontinuas que aparecen en aplicaciones.

## Densidad conjunta

Si $(X,Y)$ es un vector aleatorio con densidad conjunta $f_{X,Y}$, entonces:

$$
P((X,Y)\in A)=\iint_A f_{X,Y}(x,y)\,dx\,dy.
$$

Las densidades marginales se obtienen integrando:

$$
f_X(x)=\int_{-\infty}^{\infty} f_{X,Y}(x,y)\,dy,
$$

$$
f_Y(y)=\int_{-\infty}^{\infty} f_{X,Y}(x,y)\,dx.
$$

Esto prepara el terreno para independencia y distribuciones multivariantes.

## Independencia y factorizacion de la densidad conjunta

Si

$$
X
$$

e

$$
Y
$$

admiten densidad conjunta, la independencia puede leerse directamente sobre esa densidad.

### Criterio

Las variables

$$
X
$$

e

$$
Y
$$

son independientes si y solo si

$$
f_{X,Y}(x,y)=f_X(x)f_Y(y)
$$

para casi todo

$$
(x,y).
$$

### Por que vale

Si la factorizacion ocurre, entonces para rectangulos borelianos

$$
A\times B
$$

se obtiene

$$
P(X\in A,\ Y\in B)
=
\iint_{A\times B} f_X(x)f_Y(y)\,dx\,dy
=
\left(\int_A f_X(x)\,dx\right)
\left(\int_B f_Y(y)\,dy\right),
$$

que es exactamente

$$
P(X\in A)P(Y\in B).
$$

La reciproca se obtiene identificando la medida producto con la ley conjunta.

### Lectura

En el mundo absolutamente continuo, independencia significa que la masa bidimensional no tiene acoplamiento genuino: la densidad completa se descompone como producto de densidades unidimensionales.

## Densidad condicional

Si

$$
f_Y(y)>0,
$$

la densidad condicional de

$$
X
$$

dada

$$
Y=y
$$

se define por

$$
f_{X\mid Y}(x\mid y)=\frac{f_{X,Y}(x,y)}{f_Y(y)}.
$$

### Interpretacion

Para cada valor fijado de

$$
y,
$$

la funcion

$$
x\mapsto f_{X\mid Y}(x\mid y)
$$

describe como se redistribuye la probabilidad de

$$
X
$$

una vez que se conoce la informacion

$$
Y=y.
$$

### Propiedad de normalizacion

Para cada

$$
y
$$

tal que

$$
f_Y(y)>0,
$$

se cumple

$$
\int_{-\infty}^{\infty} f_{X\mid Y}(x\mid y)\,dx=1.
$$

### Regla de reconstruccion

La densidad conjunta puede escribirse como

$$
f_{X,Y}(x,y)=f_{X\mid Y}(x\mid y)f_Y(y).
$$

Esta es la version continua de la regla del producto.

### Caso independiente

Si

$$
X
$$

e

$$
Y
$$

son independientes, entonces

$$
f_{X\mid Y}(x\mid y)=f_X(x)
$$

para casi todo

$$
y.
$$

Conocer

$$
Y
$$

no cambia la ley de

$$
X.
$$

## Jacobiano y cambio de variable multivariable

En dimension superior, el cambio de variable no se limita a funciones monotas de una sola variable. Si

$$
Y=T(X)
$$

donde

$$
T:\mathbb R^n\to\mathbb R^n
$$

es diferenciable e invertible, la densidad transforma segun el jacobiano:

$$
f_Y(y)=f_X(T^{-1}(y))
\left|
\det D(T^{-1})(y)
\right|.
$$

### Lectura

El determinante jacobiano mide como el cambio de coordenadas expande o contrae volumen. La densidad debe compensar exactamente esa deformacion para preservar probabilidad total.

### Ejemplos tipicos

Este principio reaparece en:

- cambios a coordenadas polares;
- distribuciones radiales;
- transformaciones afines multivariadas;
- paso a coordenadas cilindricas o esfericas en variables aleatorias continuas.

### Moral

La formula unidimensional con derivada absoluta no es un truco aislado. Es la sombra en dimension uno de la regla jacobiana general.

## Error comun 1: creer que la altura de la densidad es una probabilidad

No. La probabilidad de un intervalo es el area bajo la densidad en ese intervalo.

## Error comun 2: pensar que una densidad debe estar acotada por 1

Falso. Puede superar $1$ localmente siempre que su integral total sea $1$.

## Error comun 3: identificar continuidad de la funcion de distribucion con existencia de densidad

No toda funcion de distribucion continua proviene de una densidad clasica.

## Practica guiada

### Ejercicio 1

Sea

$$
f(x)=
\begin{cases}
3x^2, & 0\le x\le 1,\\
0, & \text{en otro caso.}
\end{cases}
$$

Verifica que es densidad.

#### Solucion

$$
\int_0^1 3x^2\,dx=1.
$$

Como ademas es no negativa, define una densidad.

### Ejercicio 2

Con la densidad anterior, calcula

$$
P(X\le a),\qquad 0\le a\le 1.
$$

#### Solucion

$$
F_X(a)=\int_0^a 3x^2\,dx=a^3.
$$

### Ejercicio 3

Por que

$$
P(X=a)=0
$$

no significa que el valor $a$ sea imposible?

#### Solucion

Porque en una distribucion continua cada punto individual tiene masa nula, aunque el valor siga perteneciendo al soporte del modelo.

## Cierre

La funcion de densidad es la herramienta central del mundo absolutamente continuo. Permite:

- calcular probabilidades por integracion;
- recuperar la acumulada;
- obtener momentos;
- transformar variables;
- y describir leyes conjuntas.

Entender bien este tema evita la confusion mas persistente del bloque continuo: creer que una densidad es una probabilidad puntual en lugar de una distribucion local de masa.
