---
title: Esperanza matematica
description: Esperanza como integral, formulas discreta y continua, linealidad, LOTUS, momentos y desigualdades basicas.
---

# Esperanza matematica

## El promedio teorico de una variable aleatoria

La probabilidad cuantifica incertidumbre sobre eventos. La esperanza matematica cuantifica el valor medio o balance promedio de una variable aleatoria.

Aparece en contextos muy distintos:

- ganancia media en un juego;
- energia media;
- tiempo medio de espera;
- tamano medio de una poblacion;
- centro de masa probabilistico de una distribucion.

## Interpretacion intuitiva

Si repetimos muchas veces un experimento bajo condiciones comparables, el promedio empirico de los valores observados tiende a estabilizarse cerca de un numero teorico. Ese numero, cuando existe, es la esperanza.

### Advertencia

La esperanza no tiene por que ser un valor posible de la variable.

### Ejemplo

En un dado equilibrado,

$$
E[X]=3.5,
$$

aunque nunca se observe exactamente ese valor.

## Definicion general

La formulacion conceptual correcta es:

$$
E[X]=\int_{\Omega} X(\omega)\,dP(\omega),
$$

si la integral existe.

### Comentario

Las formulas discreta y continua no son teorias distintas; ambas son casos particulares de esta definicion unica mediante integral.

## Integrabilidad

Decimos que $X$ es integrable si

$$
E[|X|]<\infty.
$$

Solo en ese caso la esperanza esta bien definida como numero real finito.

### Advertencia

Puede ocurrir que

$$
\sum x_i p_i
$$

o la integral informal parezcan "compensarse", pero si no hay convergencia absoluta la esperanza no esta bien definida.

## Partes positiva y negativa

Toda variable real puede descomponerse como

$$
X=X^+-X^-,
$$

donde

$$
X^+=\max(X,0),
\qquad
X^-=\max(-X,0).
$$

Ambas son no negativas y satisfacen

$$
|X|=X^+ + X^-.
$$

### Lectura

La esperanza general se define realmente a partir de estas dos partes:

$$
E[X]=E[X^+]-E[X^-],
$$

si al menos una de las dos cantidades finitas no es

$$
\infty-\infty.
$$

### Moral

La integrabilidad

$$
E[|X|]<\infty
$$

garantiza exactamente que ambas piezas sean finitas y que la resta tenga sentido sin ambiguedad.

## Definicion en el caso discreto

Si $X$ es discreta con soporte

$$
\{x_1,x_2,\dots\}
$$

y

$$
p_i=P(X=x_i),
$$

entonces, si

$$
\sum_i |x_i|p_i<\infty,
$$

se tiene

$$
E[X]=\sum_i x_i p_i.
$$

## Definicion en el caso continuo

Si $X$ tiene densidad $f_X$ y

$$
\int_{-\infty}^{\infty}|x|f_X(x)\,dx<\infty,
$$

entonces

$$
E[X]=\int_{-\infty}^{\infty} x f_X(x)\,dx.
$$

## Ejemplo 1: dado equilibrado

Si $X$ es el resultado de un dado justo,

$$
E[X]=\sum_{k=1}^6 k\cdot\frac16
=
\frac{1+2+3+4+5+6}{6}
=
\frac{21}{6}
=
3.5.
$$

## Ejemplo 2: Bernoulli

Si

$$
X\in\{0,1\},
\qquad
P(X=1)=p,
\qquad
P(X=0)=1-p,
$$

entonces

$$
E[X]=0(1-p)+1\cdot p=p.
$$

Esto explica por que la probabilidad de exito puede verse como la media de la variable indicadora del exito.

## Ejemplo 3: uniforme en [0,1]

Si

$$
X\sim U[0,1],
$$

entonces

$$
E[X]=\int_0^1 x\,dx=\frac12.
$$

## Linealidad de la esperanza

### Teorema 1

Si $X$ e $Y$ son integrables y

$$
a,b\in\mathbb R,
$$

entonces

$$
E[aX+bY]=aE[X]+bE[Y].
$$

### Comentario

La linealidad no requiere independencia. Esta es una de las propiedades mas poderosas de la esperanza y la distingue de la varianza.

### Consecuencia finita

$$
E[X_1+\cdots+X_n]=E[X_1]+\cdots+E[X_n].
$$

## Esperanza de una constante

Para toda constante

$$
c,
$$

$$
E[c]=c.
$$

Esto es coherente con la idea de promedio.

## Monotonia

### Teorema 2

Si

$$
X\le Y
$$

casi seguramente y ambas variables son integrables, entonces

$$
E[X]\le E[Y].
$$

### Corolario

Si

$$
X\ge 0
$$

casi seguramente, entonces

$$
E[X]\ge 0.
$$

## Esperanza de indicadores

### Teorema 3

Para todo evento

$$
A,
$$

$$
E[\mathbf 1_A]=P(A).
$$

#### Demostracion

Como

$$
\mathbf 1_A
=
\begin{cases}
1, & \omega\in A,\\
0, & \omega\notin A,
\end{cases}
$$

su promedio ponderado es exactamente la probabilidad de $A$.

### Comentario

Esta identidad conecta el lenguaje de eventos con el de variables aleatorias y aparece en incontables demostraciones.

## Esperanza de una funcion de la variable

Si

$$
g:\mathbb R\to\mathbb R
$$

es medible y $g(X)$ es integrable, entonces

$$
E[g(X)]
$$

puede calcularse directamente a partir de la ley de $X$.

### Caso discreto

$$
E[g(X)]=\sum_i g(x_i)p_i.
$$

### Caso continuo

$$
E[g(X)]=\int_{-\infty}^{\infty} g(x)f_X(x)\,dx.
$$

Esta identidad se conoce como LOTUS: Law Of The Unconscious Statistician.

## Formula de colas

Para variables no negativas puede recuperarse la esperanza a partir de probabilidades de cola:

$$
E[X]=\int_0^\infty P(X>t)\,dt.
$$

Mas generalmente, para una variable integrable cualquiera,

$$
E[X]
=
\int_0^\infty P(X>t)\,dt
-
\int_0^\infty P(X<-t)\,dt.
$$

### Lectura

Esta formula dice que el promedio no depende solo de valores tipicos, sino del peso acumulado de las colas. Por eso distribuciones con colas muy pesadas pueden tener esperanza enorme o incluso infinita.

### Por que conviene tenerla

La formula de colas es util para:

- probar integrabilidad;
- comparar variables por dominacion estocastica;
- estimar esperanzas sin conocer una densidad explicita.

## Tonelli y Fubini en version probabilistica

Cuando aparecen sumas o integrales dobles de cantidades aleatorias, el intercambio de orden no debe hacerse por intuicion solamente.

### Regla segura

- si las cantidades son no negativas, Tonelli permite intercambiar sumas, integrales y esperanza;
- si hay signos, hace falta integrabilidad absoluta para invocar Fubini.

### Ejemplo de uso

La identidad

$$
E\!\left[\sum_{k=1}^n \mathbf 1_{A_k}\right]
=
\sum_{k=1}^n E[\mathbf 1_{A_k}]
$$

es un caso elemental de esta compatibilidad.

### Moral

Buena parte del calculo probabilistico serio consiste en saber cuando puede intercambiarse esperanza con suma, integral o limite. Tonelli y Fubini son parte del andamiaje que lo justifica.

## Limites bajo la esperanza: monotona, Fatou y dominada

Una de las preguntas mas delicadas en probabilidad es esta: si

$$
X_n\to X,
$$

que relacion hay entre

$$
E[X_n]
$$

y

$$
E[X]?
$$

La respuesta no es automatica. Hace falta estructura adicional.

### Convergencia monotona

Si

$$
0\le X_1\le X_2\le \cdots
$$

y

$$
X_n(\omega)\uparrow X(\omega)
$$

casi seguramente, entonces

$$
E[X_n]\uparrow E[X].
$$

### Lectura

Este teorema dice que la esperanza es compatible con limites crecientes de variables no negativas. Es la razon profunda por la que pueden construirse esperanzas de objetos complicados aproximandolos desde abajo.

### Lema de Fatou

Si

$$
X_n\ge 0,
$$

entonces

$$
E[\liminf X_n]\le \liminf E[X_n].
$$

### Lectura

Fatou es una desigualdad de semicontinuidad inferior. No da igualdad, pero evita que el limite "pierda masa positiva" sin dejar rastro en la esperanza.

### Convergencia dominada

Si

$$
X_n\to X
$$

casi seguramente y existe una variable integrable

$$
Y
$$

tal que

$$
|X_n|\le Y
$$

para todo

$$
n,
$$

entonces

$$
E[X_n]\to E[X].
$$

Ademas,

$$
E[|X_n-X|]\to 0.
$$

### Por que importa

La convergencia dominada es uno de los resultados mas usados de toda la teoria de la medida aplicada a probabilidad. Justifica pasar limites dentro de:

- densidades dependientes de parametros;
- series aleatorias truncadas;
- aproximaciones numericas de esperanzas;
- calculos asintoticos en estadistica.

### Advertencia conceptual

Convergencia puntual por si sola no basta. Puede ocurrir que

$$
X_n\to 0
$$

casi seguramente y, sin embargo,

$$
E[X_n]\not\to 0.
$$

El dominador integrable es exactamente lo que impide que la masa se escape hacia colas cada vez mas raras pero mas altas.

## Ejemplo 4: segundo momento

Si $X$ es discreta,

$$
E[X^2]=\sum_i x_i^2 p_i.
$$

Si $X$ tiene densidad,

$$
E[X^2]=\int x^2 f_X(x)\,dx.
$$

Estos momentos son la base para definir varianza y otras medidas de dispersion.

## Media de una suma de indicadores

Si

$$
N=\mathbf 1_{A_1}+\cdots+\mathbf 1_{A_n},
$$

entonces

$$
E[N]=P(A_1)+\cdots+P(A_n).
$$

### Comentario

Esta formula permite calcular el numero esperado de ocurrencias sin necesidad de independencia. Es una herramienta esencial en combinatoria probabilistica.

## Esperanza condicional intuitiva

Aunque la teoria completa de la esperanza condicional es mas avanzada, a nivel basico puede pensarse como el promedio esperado una vez fijada cierta informacion adicional. Es la version "promedio" de la probabilidad condicional.

## Jensen y convexidad

Una de las propiedades mas profundas de la esperanza es su relacion con funciones convexas.

### Teorema 4: desigualdad de Jensen

Si $\varphi$ es convexa y $X$ integrable, entonces

$$
\varphi(E[X])\le E[\varphi(X)].
$$

### Comentario

Para

$$
\varphi(x)=x^2,
$$

se obtiene

$$
(E[X])^2\le E[X^2],
$$

que es la no negatividad de la varianza en otra forma.

## Ejemplo 5: juego no favorable

Supongamos una ganancia aleatoria $G$ con

$$
P(G=10)=0.1,
\qquad
P(G=-2)=0.9.
$$

Entonces

$$
E[G]=10(0.1)+(-2)(0.9)=1-1.8=-0.8.
$$

### Lectura

Aunque haya una ganancia grande posible, el juego tiene valor esperado negativo.

## Esperanza no siempre existente

No toda variable tiene esperanza finita. En distribuciones de colas muy pesadas puede fallar la integrabilidad.

### Comentario

Esto recuerda que la esperanza es una herramienta poderosa, pero no universal.

## Relacion con la ley de los grandes numeros

La ley de los grandes numeros justifica la interpretacion de la esperanza como promedio teorico:

si

$$
X_1,X_2,\dots
$$

son i.i.d. integrables con

$$
E[X_i]=\mu,
$$

entonces

$$
\bar X_n\to \mu
$$

en el sentido adecuado.

### Comentario

Sin esta ley, la esperanza seria solo un numero definido por una integral. Con ella, adquiere interpretacion empirica robusta.

## Error comun 1: creer que la esperanza debe ser un valor posible

No. Puede ser un promedio teorico fuera del soporte puntual observable.

## Error comun 2: confundir valor esperado con valor mas probable

La esperanza no coincide necesariamente con la moda ni con el valor mas frecuente.

## Error comun 3: creer que linealidad exige independencia

La esperanza es lineal siempre que las variables sean integrables. La independencia no interviene en esa propiedad.

## Practica guiada

### Ejercicio 1

Si

$$
P(X=1)=0.2,\quad P(X=3)=0.5,\quad P(X=4)=0.3,
$$

calcula

$$
E[X].
$$

#### Solucion

$$
E[X]=1(0.2)+3(0.5)+4(0.3)=2.9.
$$

### Ejercicio 2

Explica por que

$$
E[\mathbf 1_A]=P(A).
$$

#### Solucion

Porque la indicadora solo toma los valores $1$ y $0$, y el promedio ponderado de esos valores es exactamente la probabilidad de que ocurra $A$.

### Ejercicio 3

Si

$$
E[X]=2,\qquad E[Y]=-1,
$$

halla

$$
E[3X-2Y+5].
$$

#### Solucion

Por linealidad:

$$
E[3X-2Y+5]=3E[X]-2E[Y]+5=3(2)-2(-1)+5=13.
$$

## Cierre

La esperanza matematica es la primera gran magnitud numerica asociada a una variable aleatoria. Su importancia es doble:

- conceptual, porque representa el promedio teorico;
- estructural, porque se comporta como una integral lineal y organiza gran parte de la teoria posterior.

Entenderla bien es decisivo, porque sobre ella se construyen:

- varianza;
- covarianza;
- leyes de grandes numeros;
- estimacion;
- y buena parte del analisis probabilistico y estadistico.
