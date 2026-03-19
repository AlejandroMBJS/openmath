---
title: Variables aleatorias
description: Variables aleatorias como funciones medibles, leyes inducidas, clases discretas y continuas, transformaciones y sigma-algebra generada.
---

# Variables aleatorias

## Del espacio abstracto a cantidades observables

La probabilidad se formula sobre eventos en un espacio abstracto

$$
(\Omega,\mathcal F,P).
$$

Pero en aplicaciones casi nunca interesa el resultado elemental $\omega$ por si mismo, sino una cantidad numerica asociada a ese resultado:

- la suma de dos dados;
- el numero de exitos;
- el tiempo hasta una falla;
- la temperatura medida;
- la posicion de una particula.

Una variable aleatoria es justamente el mecanismo que traduce resultados abstractos en numeros.

## Definicion intuitiva

Una variable aleatoria es una regla que a cada resultado posible del experimento le asigna un numero real.

### Ejemplo 1: suma de dos dados

Si

$$
\Omega=\{(i,j):1\le i,j\le 6\},
$$

definimos

$$
X(i,j)=i+j.
$$

Aqui el resultado elemental es el par ordenado, pero la cantidad observada de interes es su suma.

## Definicion rigurosa

Sea

$$
(\Omega,\mathcal F,P)
$$

un espacio de probabilidad. Una variable aleatoria real es una funcion

$$
X:\Omega\to \mathbb R
$$

tal que para todo

$$
x\in\mathbb R
$$

el conjunto

$$
\{\omega\in\Omega:X(\omega)\le x\}
$$

pertenece a

$$
\mathcal F.
$$

Esta propiedad se llama medibilidad.

## Por que la medibilidad es necesaria

Si $X$ no fuera medible, entonces conjuntos del tipo

$$
\{X\le x\},\qquad \{a<X\le b\},\qquad \{X\in B\}
$$

podrian no ser eventos de $\mathcal F$. En ese caso no tendria sentido escribir sus probabilidades.

La medibilidad es precisamente la condicion que garantiza que la probabilidad puede hablar sobre afirmaciones formuladas en terminos de $X$.

## Criterios equivalentes de medibilidad

La definicion usando conjuntos

$$
\{X\le x\}
$$

no es la unica posible.

### Proposicion 1

Son equivalentes:

1. para todo

$$
x\in\mathbb R,
$$

$$
\{X\le x\}\in\mathcal F;
$$

2. para todo intervalo abierto

$$
I\subseteq\mathbb R,
$$

$$
\{X\in I\}\in\mathcal F;
$$

3. para todo boreliano

$$
B\subseteq\mathbb R,
$$

$$
\{X\in B\}\in\mathcal F.
$$

### Comentario

Esto explica por que una variable aleatoria puede verse como una funcion que transporta eventos borelianos de $\mathbb R$ al espacio original.

## Eventos inducidos por una variable aleatoria

Toda variable aleatoria genera de forma natural eventos como:

- 

$$
\{X=x\};
$$

- 

$$
\{X\le x\};
$$

- 

$$
\{a<X\le b\};
$$

- 

$$
\{X\in B\}.
$$

Buena parte de la probabilidad aplicada consiste precisamente en calcular este tipo de probabilidades.

## Ejemplo 2: variable indicadora

Dado un evento

$$
A\in\mathcal F,
$$

su funcion indicadora es

$$
\mathbf 1_A(\omega)=
\begin{cases}
1, & \omega\in A,\\
0, & \omega\notin A.
\end{cases}
$$

Esta es una variable aleatoria discreta muy importante.

### Comentario

Las indicadoras enlazan eventos con variables aleatorias. De hecho,

$$
E[\mathbf 1_A]=P(A),
$$

cuando la esperanza existe.

## Ejemplo 3: numero de exitos

En un experimento de $n$ ensayos Bernoulli, un resultado elemental puede escribirse como

$$
\omega=(\omega_1,\dots,\omega_n),
\qquad
\omega_i\in\{0,1\}.
$$

Definimos

$$
X(\omega)=\omega_1+\cdots+\omega_n.
$$

Entonces $X$ cuenta el numero total de exitos.

## La ley de una variable aleatoria

Una vez definida $X$, podemos transportar la probabilidad desde $\Omega$ hasta $\mathbb R$ mediante

$$
P_X(B)=P(X\in B),
\qquad
B\in\mathcal B(\mathbb R),
$$

donde $\mathcal B(\mathbb R)$ es la sigma-algebra boreliana.

Esta medida $P_X$ se llama ley o distribucion de $X$.

### Comentario

En muchos problemas concretos el espacio original $\Omega$ deja de importar y toda la informacion relevante queda contenida en la ley de $X$.

## Integracion respecto de la ley

La ley de

$$
X
$$

no solo permite calcular probabilidades de eventos del tipo

$$
\{X\in B\}.
$$

Tambien permite calcular esperanzas de funciones de

$$
X
$$

sin volver al espacio muestral original.

### Principio

Si

$$
g:\mathbb R\to\mathbb R
$$

es boreliana e integrable respecto de la ley de

$$
X,
$$

entonces

$$
E[g(X)]
=
\int_{\mathbb R} g(x)\,P_X(dx).
$$

### Lectura

Esta identidad dice que toda la informacion estadistica de una variable real queda codificada en su medida imagen sobre

$$
\mathbb R.
$$

### Casos particulares

- si

$$
X
$$

es discreta con masas

$$
p_k=P(X=x_k),
$$

entonces

$$
E[g(X)]=\sum_k g(x_k)p_k;
$$
- si

$$
X
$$

tiene densidad

$$
f_X,
$$

entonces

$$
E[g(X)]=\int_{\mathbb R} g(x)f_X(x)\,dx.
$$

### Moral

El espacio de probabilidad original sirve para construir la variable. La ley sirve para hacer calculo con ella.

## Dos variables distintas con la misma ley

Variables definidas sobre espacios de probabilidad distintos pueden tener la misma distribucion.

### Ejemplo 4

- lanzar una moneda equilibrada y definir

$$
X=
\begin{cases}
1, & \text{cara},\\
0, & \text{cruz};
\end{cases}
$$

- elegir un numero uniforme entre dos valores $\{0,1\}$ con probabilidades

$$
\frac12,\frac12.
$$

Ambas variables tienen la misma ley Bernoulli$(1/2)$, aunque se definan sobre modelos distintos.

### Leccion

La distribucion no recuerda toda la estructura del espacio original, solo como se reparten las probabilidades sobre los valores observables de la variable.

## Igualdad casi segura frente a igualdad en distribucion

### Igualdad casi segura

Decimos que

$$
X=Y
$$

casi seguramente si

$$
P(X=Y)=1.
$$

### Igualdad en distribucion

Decimos que

$$
X\overset{d}=Y
$$

si tienen la misma ley.

### Comentario

La igualdad casi segura implica igualdad en distribucion, pero no al reves.

## Igualdad en distribucion via funciones de prueba

Dos variables reales

$$
X\ \text{e}\ Y
$$

tienen la misma ley si y solo si

$$
E[g(X)]=E[g(Y)]
$$

para una clase suficientemente rica de funciones de prueba

$$
g.
$$

### Lectura

Esto muestra que la ley no se reconoce solo por eventos del tipo

$$
\{X\le x\},
$$

sino tambien por el valor esperado de observables adecuados.

### Ejemplos de clases utiles

- indicadores de intervalos;
- funciones continuas acotadas;
- exponenciales complejas en contextos de funcion caracteristica.

## Variables discretas

Una variable aleatoria es discreta si toma valores en un conjunto finito o numerable.

### Ejemplos

- Bernoulli;
- binomial;
- poisson;
- resultado de un dado;
- suma de dos dados.

## Variables absolutamente continuas

Una variable aleatoria es absolutamente continua si su ley puede describirse mediante una densidad respecto de Lebesgue.

### Ejemplos

- uniforme en un intervalo;
- normal;
- exponencial.

### Comentario

En este caso los puntos individuales tienen probabilidad cero, aunque siguen siendo valores posibles.

## Variables mixtas

No toda variable es puramente discreta o puramente continua. Existen variables mixtas que combinan:

- masa puntual en algunos puntos;
- parte continua en intervalos.

### Ejemplo

Una variable que vale $0$ con probabilidad $0.3$ y, con probabilidad $0.7$, se distribuye uniformemente en $[0,1]$.

### Comentario

Este tipo de ejemplos es importante para no identificar erradamente "tener funcion de distribucion" con "tener densidad".

## Transformaciones de variables aleatorias

Si

$$
X
$$

es una variable aleatoria y

$$
g:\mathbb R\to\mathbb R
$$

es una funcion boreliana, entonces

$$
g(X)
$$

vuelve a ser una variable aleatoria.

### Idea de la demostracion

La preimagen por $g\circ X$ de un boreliano es la preimagen por $X$ de otro boreliano. La medibilidad se conserva.

### Comentario

Esto es esencial porque permite construir nuevas variables a partir de otras ya conocidas:

- cuadrados;
- sumas;
- maximos;
- indicadores;
- transformaciones lineales.

## Ejemplo 5: funcion de una variable discreta

Si $X$ toma valores

$$
-1,0,1
$$

y definimos

$$
Y=X^2,
$$

entonces $Y$ toma valores

$$
0,1.
$$

La ley de $Y$ se obtiene agrupando la masa de los puntos de $X$ que producen el mismo valor al aplicar $g(x)=x^2$.

## Sigma-algebra generada por una variable aleatoria

La variable $X$ induce una sigma-algebra

$$
\sigma(X)=\{X^{-1}(B):B\in\mathcal B(\mathbb R)\}.
$$

Esta es la informacion contenida en $X$: todos los eventos que pueden describirse unicamente observando su valor.

### Comentario

Este concepto es central en condicionamiento, filtraciones y teoria de martingalas, aunque en este nivel baste entenderlo intuitivamente como "la informacion observable en $X$".

## Espacio canonico y variable identidad

Dada una medida de probabilidad

$$
\mu
$$

en

$$
(\mathbb R,\mathcal B(\mathbb R)),
$$

puede construirse un modelo canonico tomando como espacio de probabilidad justamente

$$
(\mathbb R,\mathcal B(\mathbb R),\mu)
$$

y definiendo la variable identidad

$$
I(x)=x.
$$

Entonces

$$
P_I=\mu.
$$

### Lectura

Esto muestra que toda ley real puede realizarse sin artificio adicional: basta mirar el espacio de estados como el propio

$$
\mathbb R.
$$

### Por que importa

La construccion canonica separa con nitidez dos niveles:

- la ley como objeto abstracto;
- una realizacion concreta de esa ley sobre algun espacio de probabilidad.

Muchas veces dos modelos muy distintos representan exactamente la misma ley. El espacio canonico deja claro que, para una sola variable real, la ley es el dato esencial.

## Independencia de variables aleatorias

Las variables $X$ e $Y$ son independientes si para todos borelianos

$$
B,C\subseteq\mathbb R
$$

se cumple

$$
P(X\in B,\ Y\in C)=P(X\in B)P(Y\in C).
$$

### Comentario

Esta definicion no habla de formulas concretas, sino de independencia entre todos los eventos construidos a partir de ambas variables.

## Independencia y producto de leyes

La independencia de

$$
X
$$

e

$$
Y
$$

puede expresarse tambien diciendo que la ley conjunta factoriza:

$$
P_{(X,Y)}=P_X\otimes P_Y.
$$

### Lectura

Esta formulacion es mas estructural que la definicion por eventos y conecta independencia con teoria de producto de medidas.

### Consecuencia

Si

$$
g
$$

y

$$
h
$$

son integrables,

$$
E[g(X)h(Y)]
=
E[g(X)]\,E[h(Y)].
$$

## Funciones de variables independientes

Si $X$ e $Y$ son independientes y $g,h$ son funciones medibles, entonces

$$
g(X)\ \text{e}\ h(Y)
$$

siguen siendo independientes.

Esto muestra que la independencia es una propiedad estructural robusta.

## Variables aleatorias vectoriales

Tambien puede definirse una variable aleatoria con valores en

$$
\mathbb R^m:
$$

$$
X=(X_1,\dots,X_m):\Omega\to\mathbb R^m.
$$

En ese caso cada coordenada $X_i$ es una variable aleatoria real, y la ley conjunta de $X$ contiene informacion sobre:

- distribuciones marginales;
- dependencia entre componentes.

Esto prepara el terreno para covarianza, correlacion y estadistica multivariante.

## Error comun 1: confundir variable aleatoria con su valor observado

La variable aleatoria es una funcion sobre $\Omega$. El dato observado es el numero que toma esa funcion en una realizacion concreta.

## Error comun 2: creer que "aleatoria" significa "sin estructura"

Al contrario: una variable aleatoria es un objeto altamente estructurado, con ley, momentos y transformaciones bien definidas.

## Error comun 3: identificar distribucion con espacio muestral original

Distintos experimentos pueden inducir exactamente la misma ley para una variable.

## Practica guiada

### Ejercicio 1

En el lanzamiento de dos dados, define una variable aleatoria que represente el maximo de los resultados.

#### Solucion

Si

$$
\omega=(i,j),
$$

se toma

$$
X(\omega)=\max\{i,j\}.
$$

### Ejercicio 2

Explica por que la indicadora de un evento es una variable aleatoria.

#### Solucion

Porque las preimagenes de conjuntos borelianos relevantes, como $\{1\}$ o $\{0,1\}$, se expresan en terminos del evento original y su complemento, que son medibles.

### Ejercicio 3

Que diferencia hay entre igualdad casi segura e igualdad en distribucion?

#### Solucion

La igualdad casi segura significa que dos variables coinciden salvo en un conjunto de probabilidad cero. La igualdad en distribucion solo exige que tengan la misma ley, aunque esten definidas en espacios distintos o no coincidan punto a punto.

## Cierre

La variable aleatoria es el puente que lleva la probabilidad desde el espacio abstracto de resultados al lenguaje numerico en el que se expresan las aplicaciones. De ella nacen:

- las leyes de distribucion;
- las funciones de distribucion;
- densidades y masas;
- momentos;
- y toda la inferencia estadistica posterior.

Por eso no debe verse como una simple "cantidad con azar", sino como un objeto medible que organiza toda la teoria.
