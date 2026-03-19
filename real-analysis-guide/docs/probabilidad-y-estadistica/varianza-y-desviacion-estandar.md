---
title: Varianza y desviacion estandar
description: Medidas cuadraticas de dispersion, formulas equivalentes, propiedades algebraicas y conexiones con covarianza y desigualdades.
---

# Varianza y desviacion estandar

## El centro no basta

La esperanza describe un centro, pero no informa por si sola sobre el esparcimiento de la distribucion. Dos variables pueden tener la misma media y comportarse de manera muy distinta:

- una muy concentrada;
- otra con valores muy alejados.

La varianza cuantifica precisamente esa dispersion alrededor de la media.

## Definicion

Sea $X$ una variable aleatoria con esperanza finita

$$
\mu=E[X].
$$

La varianza de $X$ se define por

$$
\operatorname{Var}(X)=E[(X-\mu)^2],
$$

si esta esperanza existe.

La desviacion estandar es

$$
\sigma_X=\sqrt{\operatorname{Var}(X)}.
$$

## Por que se usa el cuadrado

La expresion

$$
X-\mu
$$

mide desviacion respecto de la media. Al elevar al cuadrado:

- evitamos cancelacion entre desviaciones positivas y negativas;
- penalizamos mas las desviaciones grandes;
- obtenemos una cantidad no negativa.

### Comentario

La varianza no es la unica medida de dispersion posible, pero es la mas importante por su compatibilidad algebraica y analitica.

## No negatividad

### Teorema 1

Si $\operatorname{Var}(X)$ existe, entonces

$$
\operatorname{Var}(X)\ge 0.
$$

Ademas,

$$
\operatorname{Var}(X)=0
$$

si y solo si $X$ es constante casi seguramente.

#### Demostracion

Como

$$
(X-\mu)^2\ge 0,
$$

su esperanza tambien es no negativa.

Si

$$
E[(X-\mu)^2]=0,
$$

una variable no negativa solo puede tener esperanza cero si es nula casi seguramente. Luego

$$
X=\mu
$$

casi seguramente.

## Formula computacional

### Teorema 2

Si

$$
E[X^2]<\infty,
$$

entonces

$$
\operatorname{Var}(X)=E[X^2]-(E[X])^2.
$$

#### Demostracion

Expandimos:

$$
(X-\mu)^2=X^2-2\mu X+\mu^2.
$$

Tomando esperanza:

$$
E[(X-\mu)^2]
=
E[X^2]-2\mu E[X]+\mu^2.
$$

Como

$$
E[X]=\mu,
$$

queda

$$
\operatorname{Var}(X)=E[X^2]-\mu^2.
$$

## Interpretacion de la formula computacional

La varianza es el segundo momento alrededor del centro natural. La formula

$$
E[X^2]-(E[X])^2
$$

es extremadamente util para calculo, pero conceptualmente la definicion correcta es la centrada.

## La media minimiza el error cuadratico

### Teorema 3

Para cualquier numero real $a$,

$$
E[(X-a)^2]=\operatorname{Var}(X)+(a-E[X])^2.
$$

En particular, el valor que minimiza

$$
E[(X-a)^2]
$$

es

$$
a=E[X].
$$

#### Demostracion

Escribimos

$$
X-a=(X-\mu)+(\mu-a).
$$

Al cuadrar:

$$
(X-a)^2=(X-\mu)^2+2(\mu-a)(X-\mu)+(\mu-a)^2.
$$

Tomando esperanza y usando

$$
E[X-\mu]=0,
$$

obtenemos la identidad.

### Comentario

Este resultado explica por que la media es el centro natural de la dispersion cuadratica.

## Varianza como distancia cuadratica al espacio de constantes

La identidad anterior tiene una lectura geometrica importante. En el espacio

$$
L^2,
$$

las variables con segundo momento finito forman un espacio con producto interno

$$
\langle X,Y\rangle=E[XY].
$$

Dentro de ese espacio, las constantes forman un subespacio lineal de dimension uno.

### Lectura

La media

$$
E[X]
$$

es la proyeccion ortogonal de

$$
X
$$

sobre el subespacio de constantes, y la varianza satisface

$$
\operatorname{Var}(X)=\|X-E[X]\|_2^2.
$$

### Por que importa

Esta formula muestra que la varianza no es solo un numero descriptivo. Es la energia de la componente centrada de

$$
X.
$$

Por eso reaparece de forma natural en:

- covarianza y correlacion;
- minimos cuadrados;
- regresion;
- proyecciones ortogonales en estadistica matematica.

## Ejemplo 1: Bernoulli

Si

$$
X\in\{0,1\},
\qquad
P(X=1)=p,
$$

entonces

$$
E[X]=p,
\qquad
X^2=X.
$$

Luego

$$
\operatorname{Var}(X)=E[X^2]-(E[X])^2=p-p^2=p(1-p).
$$

### Lectura

La varianza Bernoulli es maxima en

$$
p=\frac12,
$$

y se anula en

$$
p=0\quad \text{o}\quad p=1,
$$

cuando ya no hay incertidumbre.

## Ejemplo 2: dado equilibrado

Sea $X$ el resultado de un dado justo.

Sabemos que

$$
E[X]=3.5.
$$

Ademas

$$
E[X^2]=\frac{1^2+2^2+3^2+4^2+5^2+6^2}{6}
=
\frac{91}{6}.
$$

Por tanto

$$
\operatorname{Var}(X)=\frac{91}{6}-\left(\frac72\right)^2=\frac{35}{12}.
$$

## Traslacion y escala

### Teorema 4

Para cualesquiera

$$
a,b\in\mathbb R,
$$

se cumple

$$
\operatorname{Var}(aX+b)=a^2\operatorname{Var}(X).
$$

#### Demostracion

Como

$$
E[aX+b]=aE[X]+b,
$$

se tiene

$$
(aX+b)-E[aX+b]=a(X-E[X]).
$$

Entonces

$$
\operatorname{Var}(aX+b)
=
E[a^2(X-E[X])^2]
=
a^2\operatorname{Var}(X).
$$

## Consecuencias de la formula de escala

- sumar una constante no cambia la varianza;
- multiplicar por $a$ multiplica la desviacion estandar por $|a|$.

Esta diferencia entre traslacion y escala es fundamental en estandarizacion y cambios de unidades.

## Varianza de sumas

### Teorema 5

Para variables con segundos momentos finitos,

$$
\operatorname{Var}(X+Y)
=
\operatorname{Var}(X)+\operatorname{Var}(Y)+2\operatorname{Cov}(X,Y).
$$

#### Demostracion

Escribimos

$$
(X+Y)-E[X+Y]=(X-E[X])+(Y-E[Y]).
$$

Al cuadrar y tomar esperanza:

$$
\operatorname{Var}(X+Y)
=
E[(X-E[X])^2]
+
E[(Y-E[Y])^2]
+
2E[(X-E[X])(Y-E[Y])].
$$

Reconociendo terminos:

$$
\operatorname{Var}(X+Y)
=
\operatorname{Var}(X)+\operatorname{Var}(Y)+2\operatorname{Cov}(X,Y).
$$

## Caso independiente

Si $X$ e $Y$ son independientes,

$$
\operatorname{Cov}(X,Y)=0,
$$

y entonces

$$
\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y).
$$

### Comentario

Esta formula es una de las bases de la ley de los grandes numeros y del teorema central del limite.

## Varianza de la media muestral

Si

$$
X_1,\dots,X_n
$$

son i.i.d. con varianza

$$
\sigma^2,
$$

entonces

$$
\operatorname{Var}(\bar X_n)=\frac{\sigma^2}{n}.
$$

### Comentario

Esta identidad formaliza por que el promedio se estabiliza al crecer el tamano muestral.

## Ley total de la varianza

Si

$$
Y
$$

es otra variable aleatoria y todo tiene segundo momento finito, entonces

$$
\operatorname{Var}(X)
=
E[\operatorname{Var}(X\mid Y)]
+
\operatorname{Var}(E[X\mid Y]).
$$

### Interpretacion

La dispersion total de

$$
X
$$

se descompone en dos piezas:

- la variabilidad promedio que queda dentro de cada nivel de informacion dado por

$$
Y;
$$

- la variabilidad explicada por el movimiento de la media condicional

$$
E[X\mid Y].
$$

### Lectura estructural

La primera parte mide ruido residual. La segunda mide heterogeneidad sistematica entre grupos o niveles de informacion.

### Caso extremo 1

Si

$$
X
$$

es funcion de

$$
Y,
$$

entonces

$$
\operatorname{Var}(X\mid Y)=0
$$

y toda la varianza queda explicada por

$$
\operatorname{Var}(E[X\mid Y]).
$$

### Caso extremo 2

Si

$$
X
$$

es independiente de

$$
Y,
$$

entonces

$$
E[X\mid Y]=E[X]
$$

y toda la varianza queda en

$$
E[\operatorname{Var}(X\mid Y)].
$$

### Por que conviene tenerla

Esta identidad es una pieza central en:

- modelos jerarquicos;
- analisis de varianza;
- filtracion y prediccion;
- estadistica bayesiana y teoria de la informacion parcial.

## Desviacion estandar

La desviacion estandar es

$$
\sigma_X=\sqrt{\operatorname{Var}(X)}.
$$

Su ventaja principal es de interpretacion:

- esta en las mismas unidades que la variable original;
- evita el problema de unidades cuadradas de la varianza.

### Comentario

La varianza es algebraicamente mas manejable; la desviacion estandar suele ser mas interpretable.

## Ejemplo 3: comparar dispersiones

Si dos variables tienen:

$$
\operatorname{Var}(X)=9,
\qquad
\operatorname{Var}(Y)=16,
$$

entonces sus desviaciones estandar son

$$
\sigma_X=3,
\qquad
\sigma_Y=4.
$$

En las unidades originales, $Y$ fluctua mas.

## Varianza y desigualdad de Chebyshev

La varianza no es solo descriptiva. Controla probabilidades de desviaciones grandes:

$$
P(|X-E[X]|\ge \varepsilon)\le \frac{\operatorname{Var}(X)}{\varepsilon^2}.
$$

Esto muestra que una varianza pequena fuerza concentracion alrededor de la media.

## Ejemplo 4: binomial

Si

$$
X\sim \operatorname{Bin}(n,p),
$$

entonces

$$
\operatorname{Var}(X)=np(1-p).
$$

La desviacion tipica es

$$
\sqrt{np(1-p)}.
$$

### Lectura

El tamano de fluctuacion natural alrededor de la media $np$ es del orden de

$$
\sqrt{n},
$$

no del orden de $n$.

## Ejemplo 5: Poisson

Si

$$
X\sim \operatorname{Poi}(\lambda),
$$

entonces

$$
\operatorname{Var}(X)=\lambda.
$$

La desviacion estandar es

$$
\sqrt{\lambda}.
$$

Esto es coherente con el hecho de que, en conteos Poisson, el error tipico crece como la raiz cuadrada de la media.

## Varianza no siempre existe

Hay variables con esperanza finita o incluso sin ella para las cuales la varianza no existe.

### Comentario

La varianza es una herramienta poderosisima, pero no universal. Modelos de colas pesadas pueden requerir otras medidas de dispersion.

## Diferencia entre dispersion y error

La varianza mide dispersion aleatoria interna de una variable o de un estimador. No debe confundirse con:

- sesgo sistematico;
- error absoluto en una observacion concreta;
- error de modelado.

## Error comun 1: interpretar la varianza en las mismas unidades que la variable

La varianza esta en unidades cuadradas. La desviacion estandar corrige eso.

## Error comun 2: pensar que media y varianza describen completamente toda distribucion

No. Muchas distribuciones distintas pueden compartir la misma media y varianza.

## Error comun 3: olvidar el papel de la covarianza

La dispersion de una suma no se obtiene sumando varianzas salvo independencia o covarianza nula.

## Practica guiada

### Ejercicio 1

Si

$$
E[X]=4,
\qquad
E[X^2]=25,
$$

calcula la varianza.

#### Solucion

$$
\operatorname{Var}(X)=25-4^2=9.
$$

### Ejercicio 2

Si

$$
\operatorname{Var}(X)=5,
$$

cual es

$$
\operatorname{Var}(3X-2)?
$$

#### Solucion

$$
\operatorname{Var}(3X-2)=3^2\cdot 5=45.
$$

### Ejercicio 3

Explica por que la media minimiza el error cuadratico medio respecto de constantes.

#### Solucion

Porque

$$
E[(X-a)^2]=\operatorname{Var}(X)+(a-E[X])^2,
$$

y el segundo termino se minimiza exactamente cuando

$$
a=E[X].
$$

## Cierre

La varianza y la desviacion estandar son mucho mas que resumenes descriptivos. Organizan algebraicamente:

- la dispersion de una variable;
- la estabilidad de promedios;
- la escala de fluctuaciones;
- la concentracion via desigualdades;
- y la geometria de sumas a traves de la covarianza.

Por eso son uno de los nodos centrales de toda la teoria probabilistica y estadistica.
