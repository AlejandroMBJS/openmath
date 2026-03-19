---
title: Teorema de existencia y unicidad
description: Peano, Picard-Lindelof, ecuacion integral, iteraciones de Picard, limites de unicidad y continuacion de soluciones.
---

# Teorema de existencia y unicidad

## Por que este teorema es el punto de apoyo del tema

Resolver una EDO sin saber si el problema de valor inicial esta bien planteado es trabajar sobre arena. Antes de calcular formulas, hay preguntas logicas:

- existe alguna solucion;
- es unica;
- depende de manera estable del dato inicial;
- puede prolongarse;
- bajo que hipotesis deja de ser unica o incluso deja de existir.

Estas preguntas no son previas solo en sentido pedagogico. Son estructurales. Todo metodo serio de ecuaciones diferenciales se apoya, explicita o implicitamente, en una teoria de existencia y unicidad.

## El problema de Cauchy

Consideremos

$$
y'=f(x,y),
\qquad
y(x_0)=y_0.
$$

Buscamos una funcion $y$ definida en un intervalo alrededor de $x_0$ tal que:

$$
y'(x)=f(x,y(x)),
\qquad
y(x_0)=y_0.
$$

La teoria local estudia la existencia en algun intervalo pequeno alrededor de $x_0$. La teoria global pregunta si la solucion puede prolongarse mas alla.

## Ecuacion integral equivalente

Una idea central es traducir el problema diferencial en un problema integral.

### Proposicion 1

Una funcion $y$ resuelve el PVI si y solo si satisface

$$
y(x)=y_0+\int_{x_0}^x f(t,y(t))\,dt.
$$

#### Demostracion

Si $y$ es derivable y cumple la ecuacion, entonces por el teorema fundamental del calculo:

$$
y(x)-y(x_0)=\int_{x_0}^x y'(t)\,dt
=
\int_{x_0}^x f(t,y(t))\,dt.
$$

Como $y(x_0)=y_0$, obtenemos la formula integral.

Reciprocamente, si la identidad integral vale y $f(\cdot,y(\cdot))$ es continua, la funcion del lado derecho es derivable y su derivada es

$$
f(x,y(x)).
$$

Ademas, al poner $x=x_0$ se recupera el dato inicial. \qed

### Comentario

Esta reformulacion es decisiva porque convierte la busqueda de soluciones en un problema de punto fijo.

## Existencia sin unicidad: teorema de Peano

### Teorema 2: Peano

Si $f$ es continua en una vecindad de $(x_0,y_0)$, entonces el problema de valor inicial tiene al menos una solucion local.

### Lo que Peano dice y lo que no dice

Dice:

- existe alguna solucion.

No dice:

- que sea unica;
- que dependa continuamente del dato inicial con buen control;
- que pueda prolongarse de forma global.

## Ejemplo clasico de no unicidad

Consideremos

$$
y'=\sqrt{|y|},
\qquad
y(0)=0.
$$

La funcion

$$
y(x)\equiv 0
$$

es solucion.

Pero tambien lo es, para cualquier $c\ge 0$,

$$
y_c(x)=
\begin{cases}
0, & x\le c, \\
\dfrac{(x-c)^2}{4}, & x\ge c.
\end{cases}
$$

Por tanto hay infinitas soluciones. Aqui $f$ es continua, asi que Peano garantiza existencia, pero falta unicidad.

### Moral

La continuidad en $(x,y)$ basta para existencia, no para unicidad.

## Hipotesis de Lipschitz

La condicion adecuada para unicidad local es controlar la variacion de $f$ respecto de la variable dependiente.

Decimos que $f$ es Lipschitz en $y$ en una region $R$ si existe $L>0$ tal que

$$
|f(x,y_1)-f(x,y_2)|\le L|y_1-y_2|
$$

para todos los puntos pertinentes.

### Comentario

Si $\partial f/\partial y$ existe y es acotada en la region, entonces $f$ es Lipschitz en $y$. Esta es una condicion suficiente muy util, aunque no necesaria.

## Teorema de Picard-Lindelof

Sea

$$
R=[x_0-a,x_0+a]\times [y_0-b,y_0+b],
$$

y supongamos:

1. $f$ es continua en $R$;
2. $f$ es Lipschitz en $y$ en $R$ con constante $L$.

### Teorema 3: Picard-Lindelof

Bajo esas hipotesis existe un intervalo

$$
|x-x_0|\le h
$$

en el cual el problema

$$
y'=f(x,y),
\qquad
y(x_0)=y_0
$$

tiene una unica solucion.

## Idea de la demostracion: operador de Picard

Definimos en el espacio de funciones continuas

$$
Ty(x)=y_0+\int_{x_0}^x f(t,y(t))\,dt.
$$

Resolver el PVI equivale a encontrar un punto fijo de $T$.

### Paso 1: elegir el espacio adecuado

Trabajamos en

$$
X=\{y\in C(I): \|y-y_0\|_\infty\le b\},
$$

donde

$$
I=[x_0-h,x_0+h]
$$

y $h$ se elige pequeno.

### Paso 2: T manda X en si mismo

Si

$$
M=\sup_R |f|,
$$

y escogemos $h$ con

$$
hM\le b,
$$

entonces

$$
|Ty(x)-y_0|
\le
\int_{x_0}^x |f(t,y(t))|\,dt
\le hM
\le b.
$$

### Paso 3: T es contraccion

Si $y,z\in X$, entonces

$$
|Ty(x)-Tz(x)|
\le
\int_{x_0}^x |f(t,y(t))-f(t,z(t))|\,dt
\le
Lh\|y-z\|_\infty.
$$

Tomando supremo,

$$
\|Ty-Tz\|_\infty\le Lh\|y-z\|_\infty.
$$

Si

$$
Lh<1,
$$

entonces $T$ es contraccion.

### Paso 4: Banach

Por el teorema del punto fijo de Banach, existe un unico punto fijo de $T$, y por tanto una unica solucion local del PVI.

## Iteraciones de Picard

El argumento anterior no solo prueba existencia; tambien produce una aproximacion constructiva:

$$
y_0(x)=y_0,
$$

$$
y_{n+1}(x)=y_0+\int_{x_0}^x f(t,y_n(t))\,dt.
$$

Estas funciones convergen uniformemente a la solucion local.

## Ejemplo 1: recuperar la exponencial

Para

$$
y'=y,
\qquad
y(0)=1,
$$

las iteraciones de Picard dan:

$$
y_0(x)=1,
$$

$$
y_1(x)=1+\int_0^x 1\,dt=1+x,
$$

$$
y_2(x)=1+\int_0^x (1+t)\,dt=1+x+\frac{x^2}{2},
$$

y asi sucesivamente. En el limite aparece la serie de $e^x$.

### Comentario

Esto muestra que la solucion no "cae del cielo": emerge como limite de un procedimiento iterativo.

## Unicidad via desigualdad integral

Supongamos que $y$ y $z$ son dos soluciones del mismo PVI. Entonces

$$
y(x)-z(x)=\int_{x_0}^x [f(t,y(t))-f(t,z(t))]\,dt.
$$

Si $f$ es Lipschitz en $y$,

$$
|y(x)-z(x)|
\le
L\int_{x_0}^x |y(t)-z(t)|\,dt.
$$

Una forma de cerrar el argumento es aplicar la desigualdad de Gronwall, concluyendo

$$
y(x)=z(x).
$$

### Forma cuantitativa de Gronwall

Mas generalmente, si una funcion no negativa

$$
u(x)
$$

satisface

$$
u(x)\le A+L\int_{x_0}^x u(t)\,dt,
$$

entonces

$$
u(x)\le A e^{L|x-x_0|}.
$$

Aplicando esto a

$$
u(x)=|y(x)-z(x)|,
$$

se obtiene una cota explicita del error entre trayectorias.

### Proposicion 4 bis

Si

$$
y(x_0)=y_0,
\qquad
z(x_0)=z_0,
$$

y ambas resuelven la misma ecuacion

$$
y'=f(x,y)
$$

con

$$
f
$$

Lipschitz en

$$
y,
$$

entonces

$$
|y(x)-z(x)|\le e^{L|x-x_0|}|y_0-z_0|.
$$

### Lectura

La unicidad es el caso particular

$$
y_0=z_0.
$$

Pero la desigualdad dice algo mas fuerte: trayectorias cercanas en el dato inicial siguen estando controladamente cerca, al menos mientras ambas existan.

## Suficiencia de derivada parcial acotada

### Proposicion 4

Si $f$ tiene derivada parcial respecto de $y$ continua en una region $R$, entonces $f$ es localmente Lipschitz en $y$ en $R$.

#### Idea

Se aplica el teorema del valor medio en la variable $y$:

$$
f(x,y_1)-f(x,y_2)=\frac{\partial f}{\partial y}(x,\xi)(y_1-y_2),
$$

para algun $\xi$ entre $y_1$ e $y_2$.

Si $\partial f/\partial y$ esta acotada, se obtiene la condicion Lipschitz.

## Ejemplo 2: campo suave con unicidad

Considere

$$
y'=x+y^2,
\qquad
y(0)=1.
$$

Aqui

$$
f(x,y)=x+y^2
$$

es continua y

$$
\frac{\partial f}{\partial y}=2y
$$

es continua. En cualquier rectangulo acotado alrededor de $(0,1)$, $f$ es Lipschitz en $y$. Por tanto existe una unica solucion local.

## Ejemplo 3: continuidad sin Lipschitz

Volvamos a

$$
y'=\sqrt{|y|}.
$$

La derivada respecto de $y$ explota cerca de $0$, asi que no hay Lipschitz local alrededor del dato inicial $(0,0)$. Esa es precisamente la puerta por la que entra la no unicidad.

## Una frontera clasica: la familia

$$
y'=|y|^\alpha
$$

El ejemplo anterior no es aislado. La familia

$$
y'=|y|^\alpha,
\qquad y(0)=0,
$$

marca una frontera muy instructiva.

### Caso

$$
0<\alpha<1
$$

No hay unicidad. En efecto, existen soluciones que permanecen en cero hasta un tiempo arbitrario y luego despegan. La razon profunda es que

$$
|y|^\alpha
$$

crece demasiado despacio cerca del origen.

### Caso

$$
\alpha=1
$$

La ecuacion es lineal:

$$
y'=y,
$$

y la unicidad vale.

### Caso

$$
\alpha>1
$$

Tambien hay unicidad local en torno al dato

$$
y(0)=0,
$$

porque el campo es diferenciable en

$$
y=0
$$

y su derivada respecto de

$$
y
$$

vale

$$
0.
$$

### Moral

Lipschitz no es la unica puerta a la unicidad, pero el comportamiento del campo cerca del dato inicial si es decisivo. Esta familia muestra con claridad donde aparece el cambio de regimen.

## Mas alla de Lipschitz: criterio de Osgood

La condicion Lipschitz es suficiente, pero no es la frontera exacta de la unicidad. Un criterio mas fino usa un modulo de continuidad

$$
\omega(r)
$$

tal que

$$
|f(x,y_1)-f(x,y_2)|\le \omega(|y_1-y_2|).
$$

### Idea de Osgood

Si

$$
\omega
$$

es creciente y satisface

$$
\int_{0^+}\frac{dr}{\omega(r)}=\infty,
$$

entonces la unicidad puede seguir valiendo aunque no haya Lipschitz.

### Lectura

Lipschitz corresponde al caso

$$
\omega(r)=Lr,
$$

para el cual la integral diverge. En cambio, para

$$
\omega(r)=r^\alpha,
\qquad 0<\alpha<1,
$$

la integral converge y la unicidad puede fallar, exactamente como sugiere la familia

$$
y'=|y|^\alpha.
$$

### Moral

Este criterio muestra que el umbral entre unicidad y no unicidad puede describirse con mucha mas precision que diciendo solo "hay o no hay Lipschitz".

## No existencia por singularidad del campo

Si $f$ ni siquiera es continua en el punto inicial, la existencia puede fallar.

### Ejemplo 4

Considere

$$
y'=\frac{1}{x},
\qquad
y(0)=0.
$$

No puede existir una solucion derivable en un intervalo que contenga $0$, porque el lado derecho no esta ni siquiera definido alli.

### Comentario

La continuidad de $f$ no es un lujo tecnico. Garantiza que el problema tiene sentido local.

## Maximalidad y continuacion

Una vez obtenida una solucion local unica, surge una pregunta nueva: hasta donde puede prolongarse?

### Teorema 5: continuacion maximal

Bajo hipotesis habituales de continuidad y unicidad local, cada solucion puede prolongarse a un intervalo maximal

$$
(\alpha,\beta)
$$

que contiene a $x_0$. Si $\beta<\infty$, entonces al acercarse a $\beta$ ocurre alguna obstruccion:

- la solucion sale de toda region acotada;
- o el campo deja de estar definido;
- o se pierde la posibilidad de seguir aplicando el teorema.

## Ejemplo 5: explosion en tiempo finito

La ecuacion

$$
y'=y^2,
\qquad
y(0)=1
$$

tiene solucion

$$
y(x)=\frac{1}{1-x},
$$

definida solo para

$$
x<1.
$$

Aqui hay unicidad, pero no existencia global: la solucion explota en tiempo finito.

## Dependencia continua respecto del dato inicial

La condicion Lipschitz no solo da unicidad. Tambien permite demostrar que si cambiamos ligeramente el dato inicial, la solucion cambia poco en intervalos cortos. Esta estabilidad es esencial en modelado y analisis numerico.

### Estimacion con perturbacion del campo

Si ademas comparamos dos campos

$$
f
$$

y

$$
g,
$$

con soluciones

$$
y'=f(x,y),
\qquad
z'=g(x,z),
$$

entonces aparece la cota

$$
|y(x)-z(x)|
\le
e^{L|x-x_0|}
\left(
|y_0-z_0|
+
\int_{x_0}^x |f(t,z(t))-g(t,z(t))|\,dt
\right).
$$

Esta formula es una herramienta central para justificar estabilidad numerica y aproximaciones por modelos simplificados.

## Flujo y propiedad de semigrupo

Cuando hay unicidad local, el problema de Cauchy define una aplicacion que a cada dato inicial le asocia la solucion evaluada en el tiempo

$$
t.
$$

### Notacion

En el caso autonomo

$$
y'=f(y),
$$

se escribe a menudo

$$
\Phi_t(y_0)
$$

para el estado en tiempo

$$
t
$$

de la trayectoria que parte de

$$
y_0.
$$

### Propiedad de semigrupo

La unicidad implica

$$
\Phi_{t+s}(y_0)=\Phi_t(\Phi_s(y_0)),
$$

siempre que ambos lados esten definidos.

### Lectura

Esta identidad dice que evolucionar primero un tiempo

$$
s
$$

y luego un tiempo

$$
t
$$

es lo mismo que evolucionar directamente un tiempo

$$
t+s.
$$

### Por que importa

Esta estructura convierte a la EDO en un sistema dinamico. No solo produce curvas solucion: produce una accion temporal coherente sobre el espacio de estados.

## Crecimiento lineal y existencia global

La unicidad local no garantiza existencia para todo tiempo, pero hay una condicion clasica que si evita explosion finita.

### Teorema 6

Supongamos que

$$
f
$$

es continua, localmente Lipschitz en

$$
y,
$$

y satisface una cota de crecimiento lineal

$$
|f(x,y)|\le a(x)+b|y|,
$$

donde

$$
a
$$

es continua en intervalos finitos y

$$
b\ge 0
$$

es constante. Entonces toda solucion local puede prolongarse a cualquier intervalo finito donde el campo este definido.

### Idea de la prueba

Si

$$
y
$$

es una solucion,

$$
|y(x)|
\le
|y_0|+\int_{x_0}^x a(t)\,dt
+
b\int_{x_0}^x |y(t)|\,dt.
$$

Aplicando Gronwall,

$$
|y(x)|
\le
\left(
|y_0|+\int_{x_0}^x a(t)\,dt
\right)e^{b|x-x_0|}.
$$

Esta cota impide que la solucion explote en tiempo finito dentro de cualquier intervalo finito del eje

$$
x.
$$

### Ejemplo 6: crecimiento lineal

La ecuacion

$$
y'=x-y
$$

satisface

$$
|x-y|\le |x|+|y|.
$$

Luego no hay explosion en tiempo finito y la solucion existe globalmente.

### Contraste con

$$
y'=y^2
$$

Aqui el crecimiento deja de ser lineal. De hecho la solucion con dato inicial

$$
y(0)=1
$$

explota en

$$
x=1.
$$

## Lectura geometrica

El campo de pendientes

$$
(x,y)\mapsto f(x,y)
$$

asigna a cada punto una direccion. El teorema de unicidad dice, geometricamente, que bajo buena regularidad no pueden salir dos curvas integrales distintas del mismo punto.

Cuando falla la condicion Lipschitz, el campo puede ser demasiado "plano" o demasiado irregular cerca del dato inicial, permitiendo bifurcaciones de trayectorias.

## Error comun 1: creer que continuidad implica unicidad

No. Continuidad implica existencia local, pero no unicidad. El ejemplo con

$$
y'=\sqrt{|y|}
$$

es el recordatorio clasico.

## Error comun 2: creer que unicidad implica existencia global

Tampoco. Puede haber unicidad local y aun asi explosion en tiempo finito, como en

$$
y'=y^2.
$$

## Error comun 3: usar Lipschitz como si fuera necesario

Lipschitz es una condicion suficiente muy comoda, pero no necesaria. Existen problemas con unicidad aunque el campo no sea globalmente Lipschitz.

## Practica guiada

### Ejercicio 1

Explica por que el problema

$$
y'=x+y,
\qquad
y(0)=3
$$

tiene una unica solucion local.

#### Solucion

Porque

$$
f(x,y)=x+y
$$

es continua y Lipschitz en $y$ con constante $L=1$ en cualquier rectangulo.

### Ejercicio 2

Explica por que

$$
y'=\sqrt{|y|},
\qquad
y(0)=0
$$

no tiene unicidad.

#### Solucion

Porque el campo es continuo pero no Lipschitz en $y$ cerca de $0$, y de hecho admite infinitas soluciones que permanecen pegadas a $0$ durante un tiempo arbitrario antes de despegar.

### Ejercicio 3

Que distingue conceptualmente a los ejemplos

$$
y'=\sqrt{|y|}
$$

y

$$
y'=y^2?
$$

#### Solucion

El primero tiene existencia local sin unicidad. El segundo tiene unicidad local pero puede perder existencia global por explosion en tiempo finito.

## Cierre

El teorema de existencia y unicidad no es un requisito burocratico antes de resolver una EDO. Es la pieza que organiza toda la teoria local:

- continuidad da existencia;
- Lipschitz da unicidad;
- Banach da un metodo de prueba y de aproximacion;
- la prolongacion maximal explica cuando y por que una solucion deja de existir globalmente.

Entender esta arquitectura evita usar formulas como si siempre describieran un problema bien planteado.
