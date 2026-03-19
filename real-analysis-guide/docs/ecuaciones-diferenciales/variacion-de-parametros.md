---
title: Variacion de parametros
description: Derivacion del metodo de variacion de parametros para ecuaciones lineales no homogeneas y su relacion con el wronskiano.
---

# Variacion de parametros

## Motivacion e intuicion

Los metodos de inspeccion y aniquilador dependen fuertemente de la forma del termino forzante. Variacion de parametros es mas general: funciona para ecuaciones lineales no homogeneas con coeficientes continuos una vez que se conoce un sistema fundamental de la homogenea.

Su idea central es simple y profunda:

- la solucion general de la homogenea ya describe las direcciones naturales del sistema;
- en vez de combinar esas soluciones con constantes, se las combina con funciones;
- esas funciones absorben el efecto del forzamiento.

## Contexto del metodo

Consideremos

$$
y''+p(x)y'+q(x)y=g(x).
$$

Supongamos conocidas dos soluciones linealmente independientes

$$
y_1,\ y_2
$$

de la ecuacion homogenea asociada

$$
y''+p(x)y'+q(x)y=0.
$$

Entonces la solucion homogenea general es

$$
y_h=C_1 y_1+C_2 y_2.
$$

## Ansatz del metodo

En lugar de buscar una particular de la forma

$$
y_p=C_1 y_1 + C_2 y_2
$$

con constantes, buscamos

$$
y_p=u_1(x)y_1(x)+u_2(x)y_2(x),
$$

donde

$$
u_1,\ u_2
$$

son funciones a determinar.

### Idea

Se mantiene la misma base de soluciones, pero los coeficientes dejan de ser fijos y se adaptan localmente al termino

$$
g(x).
$$

## Por que hace falta una condicion auxiliar

Si derivamos directamente

$$
y_p,
$$

aparecen demasiados terminos:

$$
y_p'=u_1' y_1+u_1 y_1'+u_2' y_2+u_2 y_2'.
$$

Para simplificar, imponemos la condicion auxiliar

$$
u_1' y_1 + u_2' y_2 =0.
$$

Entonces la derivada se reduce a

$$
y_p'=u_1 y_1' + u_2 y_2'.
$$

Derivando otra vez,

$$
y_p''=u_1' y_1' + u_2' y_2' + u_1 y_1'' + u_2 y_2''.
$$

## Sustitucion en la ecuacion

Al sustituir en

$$
y''+p y'+q y=g
$$

y usar que

$$
y_1,\ y_2
$$

resuelven la homogenea, los terminos con

$$
u_1,\ u_2
$$

desaparecen y queda

$$
u_1' y_1' + u_2' y_2' = g(x).
$$

Junto con la condicion auxiliar:

$$
u_1' y_1 + u_2' y_2 = 0,
$$

obtenemos un sistema lineal para

$$
u_1',u_2'.
$$

## Sistema para

$$
u_1'
$$

y

$$
u_2'
$$

El sistema es

$$
\begin{cases}
u_1' y_1 + u_2' y_2 = 0,\\
u_1' y_1' + u_2' y_2' = g.
\end{cases}
$$

Su determinante es el wronskiano

$$
W=y_1 y_2' - y_1' y_2.
$$

Como

$$
W\ne 0,
$$

el sistema se resuelve por Cramer:

$$
u_1'=-\frac{y_2 g}{W},
\qquad
u_2'=\frac{y_1 g}{W}.
$$

Integrando,

$$
u_1=-\int \frac{y_2 g}{W}\,dx,
\qquad
u_2=\int \frac{y_1 g}{W}\,dx.
$$

Por tanto una solucion particular es

$$
y_p=
-y_1\int \frac{y_2 g}{W}\,dx
+y_2\int \frac{y_1 g}{W}\,dx.
$$

## Formula general

La solucion completa es

$$
y=C_1 y_1 + C_2 y_2
-y_1\int \frac{y_2 g}{W}\,dx
+y_2\int \frac{y_1 g}{W}\,dx.
$$

## Comentario sobre las constantes de integracion

No hace falta introducir constantes nuevas en las integrales de

$$
u_1,\ u_2.
$$

Si aparecieran, quedarian absorbidas en la parte homogenea

$$
C_1 y_1 + C_2 y_2.
$$

## Ejemplo 1

Resolvamos

$$
y''+y=\tan x.
$$

La homogenea asociada tiene sistema fundamental

$$
y_1=\cos x,
\qquad
y_2=\sin x,
$$

con

$$
W=1.
$$

Entonces

$$
u_1'=-y_2 g = -\sin x \tan x = -\frac{\sin^2 x}{\cos x},
$$

$$
u_2'=y_1 g = \cos x \tan x = \sin x.
$$

Integramos:

$$
u_2=\int \sin x\,dx=-\cos x.
$$

Para

$$
u_1,
$$

usamos

$$
\frac{\sin^2 x}{\cos x}
=
\frac{1-\cos^2 x}{\cos x}
=
\sec x-\cos x.
$$

Entonces

$$
u_1=-\int (\sec x-\cos x)\,dx
=
-\ln|\sec x+\tan x|+\sin x.
$$

Una particular queda

$$
y_p=u_1\cos x+u_2\sin x.
$$

### Leccion

El metodo funciona incluso cuando el forzamiento no pertenece a la familia tipica de coeficientes indeterminados.

## Ejemplo 2

Para

$$
y''-y=e^x,
$$

la homogenea tiene base

$$
y_1=e^x,
\qquad
y_2=e^{-x}.
$$

El wronskiano es

$$
W=
\begin{vmatrix}
e^x & e^{-x}\\
e^x & -e^{-x}
\end{vmatrix}
=-2.
$$

Entonces

$$
u_1'=-\frac{y_2 g}{W}
=-\frac{e^{-x}e^x}{-2}
=\frac12,
$$

$$
u_2'=\frac{y_1 g}{W}
=\frac{e^x e^x}{-2}
=-\frac12 e^{2x}.
$$

Integrando:

$$
u_1=\frac{x}{2},
\qquad
u_2=-\frac14 e^{2x}.
$$

Entonces

$$
y_p=\frac{x}{2}e^x-\frac14 e^{2x}e^{-x}
=
\frac{x}{2}e^x-\frac14 e^x.
$$

El termino

$$
-\frac14 e^x
$$

puede absorberse en la parte homogenea, de modo que una particular esencial es

$$
y_p=\frac{x}{2}e^x.
$$

### Lectura

El metodo produce automaticamente la particular resonante, sin necesidad de adivinar el factor

$$
x.
$$

## Interpretacion estructural

El metodo usa el espacio de soluciones homogeneas como base movil. En vez de fijar coeficientes constantes, deja que esos coeficientes se deformen para compensar el forzamiento.

## Ventajas y desventajas

### Ventajas

- es general;
- no requiere que

$$
g
$$

pertenezca a una familia especial;
- se adapta bien a coeficientes variables;
- clarifica el papel del wronskiano.

### Desventajas

- requiere conocer previamente una base fundamental de la homogenea;
- las integrales resultantes pueden ser muy complicadas o no elementales;
- suele ser mas largo que coeficientes indeterminados cuando este ultimo aplica.

## Comparacion con coeficientes indeterminados

Cuando ambos metodos aplican, coeficientes indeterminados suele ser mas corto.

Variacion de parametros gana en:

- generalidad;
- robustez;
- interpretacion estructural.

### Regla practica

Si el forzamiento es una combinacion simple de polinomios, exponenciales, senos y cosenos con coeficientes constantes, conviene probar primero coeficientes indeterminados. Si no aplica, variacion de parametros suele ser la opcion teoricamente segura.

## Papel de la formula de Abel

En una ecuacion lineal de segundo orden

$$
y''+p(x)y'+q(x)y=0,
$$

la formula de Abel dice que el wronskiano satisface

$$
W'(x)=-p(x)W(x),
$$

y por tanto

$$
W(x)=C e^{-\int p(x)\,dx}.
$$

### Lectura

Esto evita recalcular

$$
W
$$

desde cero en muchos problemas. Una vez conocida una base fundamental en un punto, la ecuacion misma controla como evoluciona el wronskiano.

## Reduccion de orden como caso particular

Si ya se conoce una solucion no trivial

$$
y_1
$$

de la homogenea, puede buscarse otra en la forma

$$
y_2=v(x)y_1(x).
$$

Ese procedimiento es una version parcial de la misma idea de variacion de parametros: en vez de dejar variar todos los coeficientes, se deforma uno sobre una solucion conocida.

### Lectura

La reduccion de orden y la variacion de parametros no son tecnicas desconectadas. La primera es un caso restringido de la segunda.

## Version para orden

$$
n
$$

Si

$$
y^{(n)}+a_{n-1}y^{(n-1)}+\cdots+a_0 y=g(x),
$$

y

$$
y_1,\dots,y_n
$$

es un sistema fundamental de la homogenea, se busca

$$
y_p=\sum_{j=1}^n u_j(x)y_j(x)
$$

imponiendo

$$
n-1
$$

condiciones auxiliares para simplificar derivadas. Esto lleva a un sistema lineal cuya matriz es la wronskiana.

### Sistema general para los coeficientes

La version abstracta del metodo consiste en imponer

$$
\sum_{j=1}^n u_j'(x)y_j^{(k)}(x)=0,
\qquad k=0,1,\dots,n-2,
$$

y reservar la ultima ecuacion para el forzamiento:

$$
\sum_{j=1}^n u_j'(x)y_j^{(n-1)}(x)=g(x).
$$

En forma matricial,

$$
\begin{pmatrix}
y_1 & y_2 & \cdots & y_n \\
y_1' & y_2' & \cdots & y_n' \\
\vdots & \vdots & \ddots & \vdots \\
y_1^{(n-1)} & y_2^{(n-1)} & \cdots & y_n^{(n-1)}
\end{pmatrix}
\begin{pmatrix}
u_1'\\
u_2'\\
\vdots\\
u_n'
\end{pmatrix}
=
\begin{pmatrix}
0\\
0\\
\vdots\\
g
\end{pmatrix}.
$$

La matriz de la izquierda es precisamente la wronskiana. Si el sistema fundamental es correcto, su determinante no se anula y las derivadas

$$
u_j'
$$

quedan determinadas univocamente.

## Conexion con la formula matricial

En lenguaje de sistemas lineales, variacion de parametros es la misma idea que variacion de constantes:

$$
u(t)=\Phi(t)c(t),
$$

donde

$$
\Phi
$$

es una matriz fundamental. El caso escalar de segundo orden no es sino una version coordinada de este principio.

### Formulacion para sistemas

Consideremos el sistema lineal no homogeneo

$$
Y'(x)=A(x)Y(x)+F(x),
$$

donde

$$
Y(x)\in \mathbb{R}^n.
$$

Si

$$
\Phi(x)
$$

es una matriz fundamental de la ecuacion homogenea

$$
Y'=A(x)Y,
$$

buscamos una particular de la forma

$$
Y_p(x)=\Phi(x)U(x).
$$

Derivando,

$$
Y_p'=\Phi' U+\Phi U'.
$$

Como

$$
\Phi'=A\Phi,
$$

sustituir en la ecuacion da

$$
A\Phi U+\Phi U'=A\Phi U+F.
$$

Por cancelacion,

$$
\Phi U'=F,
\qquad
U'=\Phi^{-1}F.
$$

Integrando,

$$
U(x)=U(x_0)+\int_{x_0}^x \Phi(s)^{-1}F(s)\,ds.
$$

Por tanto

$$
Y(x)=\Phi(x)\left(c+\int_{x_0}^x \Phi(s)^{-1}F(s)\,ds\right).
$$

Esta es la formula matricial general de variacion de parametros. Todo lo visto para ecuaciones escalares es un caso particular de esta identidad.

## Principio de Duhamel

La formula matricial puede leerse tambien como un principio de superposicion temporal.

### Idea

Para cada instante

$$
s,
$$

el forzamiento

$$
F(s)
$$

inyecta una pequena perturbacion en el sistema. La evolucion homogenea desde

$$
s
$$

hasta

$$
x
$$

la transporta mediante el operador

$$
\Phi(x)\Phi(s)^{-1}.
$$

Integrar sobre

$$
s
$$

acumula todas esas contribuciones:

$$
Y(x)=\Phi(x)c+\int_{x_0}^x \Phi(x)\Phi(s)^{-1}F(s)\,ds.
$$

### Lectura

Esto es exactamente el **principio de Duhamel**: la respuesta al forzamiento general se obtiene superponiendo respuestas a impulsos elementales distribuidos en el tiempo.

### Moral

Variacion de parametros no solo construye una particular. Describe como el sistema propaga localmente cada inyeccion de fuerza externa.

## Relacion con funciones de Green

Al fijar una condicion inicial en

$$
x_0,
$$

la formula anterior puede escribirse como una integral con nucleo:

$$
y(x)=y_h(x)+\int_{x_0}^x G(x,s)g(s)\,ds.
$$

Para la ecuacion de segundo orden

$$
y''+p(x)y'+q(x)y=g(x),
$$

con sistema fundamental

$$
y_1,y_2,
$$

una eleccion natural del nucleo es

$$
G(x,s)=\frac{y_1(s)y_2(x)-y_2(s)y_1(x)}{W(s)},
\qquad s\le x,
$$

y

$$
G(x,s)=0,\qquad s>x.
$$

Entonces

$$
y_p(x)=\int_{x_0}^x G(x,s)g(s)\,ds.
$$

La funcion de Green encapsula toda la informacion de propagacion del sistema lineal: describe como una perturbacion aplicada en el punto

$$
s
$$

influye en el estado en el punto

$$
x.
$$

### Lectura

Variacion de parametros no es solo un algoritmo para encontrar primitivas. Es una representacion integral del inverso del operador lineal, restringido por las condiciones iniciales elegidas.

### Causalidad

La forma

$$
G(x,s)=0 \quad \text{para } s>x
$$

expresa que, en un problema de valor inicial, el estado en

$$
x
$$

solo depende del forzamiento aplicado en tiempos o posiciones anteriores. Esa es la lectura causal de la funcion de Green.

## Green de PVI frente a Green de problemas de frontera

La funcion de Green no es unica en abstracto: depende de las condiciones auxiliares del problema.

### En un problema de valor inicial

El nucleo es causal:

$$
G(x,s)=0
\qquad\text{para } s>x.
$$

### En un problema de frontera

Cuando se imponen condiciones en dos extremos, por ejemplo

$$
y(a)=0,
\qquad
y(b)=0,
$$

la funcion de Green ya no tiene por que ser causal. Se construye para satisfacer:

- la ecuacion homogena en cada lado de

$$
s;
$$
- continuidad en

$$
x=s;
$$
- un salto prescrito en la derivada;
- las condiciones de frontera.

### Lectura

Esto aclara que la funcion de Green no es un objeto universal del operador desnudo. Es el inverso integral del operador **mas** las condiciones que se le imponen.

## Cuando el metodo da integrales no elementales

Eso no significa que el metodo haya fallado. Significa que la ecuacion tiene una particular bien definida, pero no necesariamente expresable con funciones elementales.

### Importancia

La teoria de EDO no exige siempre primitivas cerradas. A veces la forma integral ya es la respuesta conceptual correcta.

### Ejemplo 3: una particular definida por integrales

Consideremos

$$
y''+y=e^{-x^2}.
$$

La homogenea tiene sistema fundamental

$$
y_1=\cos x,
\qquad
y_2=\sin x,
$$

y el wronskiano vale

$$
W=1.
$$

Por variacion de parametros,

$$
y_p(x)=
-\cos x\int \sin x\, e^{-x^2}\,dx
+\sin x\int \cos x\, e^{-x^2}\,dx.
$$

Las primitivas anteriores no son elementales. Sin embargo, la formula sigue dando una solucion perfectamente valida y util para analisis cualitativo, aproximaciones y estudio numerico.

## Practica guiada

### Problema 1

Aplicar variacion de parametros a

$$
y''+y=\sec x.
$$

#### Idea

Usar la base

$$
\cos x,\ \sin x
$$

y calcular el wronskiano.

### Problema 2

Rehacer por este metodo una ecuacion que tambien pueda resolverse por coeficientes indeterminados, por ejemplo

$$
y''-y=e^x.
$$

#### Objetivo

Comparar longitud de calculo y contenido conceptual de ambos enfoques.

### Problema 3

Verificar las formulas de Cramer para

$$
u_1',u_2'.
$$

### Problema 4

Explicar por que la constante de integracion en

$$
u_1,u_2
$$

puede absorberse en la parte homogenea.

### Problema 5

Generalizar formalmente el metodo al caso de orden tres.

## Errores frecuentes

- Usar una pareja de soluciones homogeneas que no es linealmente independiente.
- Olvidar imponer la condicion auxiliar.
- Calcular mal el wronskiano.
- Integrar con constantes redundantes y mezclar la particular con la homogenea.
- Creer que el metodo produce siempre integrales elementales.

## Cierre

Variacion de parametros es el metodo general por excelencia para ecuaciones lineales no homogeneas. Su logica descansa por completo en la teoria homogenea previa: sistema fundamental, wronskiano e identidad de Abel. Por eso es un punto donde convergen todos los temas lineales del bloque y donde se ve con claridad que resolver una ecuacion no es solo manipular formulas, sino deformar de manera controlada la estructura de la solucion homogenea.
