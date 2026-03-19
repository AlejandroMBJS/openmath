---
title: Espacios de probabilidad y sigma-algebras
description: "Fundamentos medibles de la probabilidad moderna: espacios muestrales, sigma-algebras, medidas de probabilidad, eventos nulos y ejemplos canonicos."
---

# Espacios de probabilidad y sigma-algebras

## Por que hace falta formalizar

La intuicion elemental de probabilidad funciona muy bien en experimentos finitos:

- lanzar una moneda;
- tirar un dado;
- sacar una carta de una baraja.

En esos contextos se puede identificar el espacio de resultados y tomar probabilidades como proporciones. Pero esa intuicion deja de ser suficiente en cuanto aparecen:

- espacios de resultados infinitos;
- variables aleatorias continuas;
- limites de eventos;
- procesos aleatorios;
- integracion de funciones aleatorias.

La formalizacion moderna resuelve este problema separando tres objetos:

- el conjunto de resultados posibles;
- la familia de eventos a los que se asignara probabilidad;
- la regla numerica que asigna dicha probabilidad.

## Espacio muestral

El conjunto de resultados elementales se denota por

$$
\Omega.
$$

Sus elementos

$$
\omega\in \Omega
$$

representan resultados posibles del experimento.

### Ejemplos

#### Moneda

$$
\Omega=\{\text{cara},\text{cruz}\}.
$$

#### Dos lanzamientos de dado

$$
\Omega=\{(i,j):1\le i,j\le 6\}.
$$

#### Tiempo de vida de un dispositivo

$$
\Omega=[0,\infty).
$$

#### Trayectoria de un proceso en tiempo discreto

$$
\Omega=\mathbb{R}^{\mathbb{N}}.
$$

Este ultimo ejemplo ya muestra que el espacio muestral puede ser inmenso. En tales casos no es razonable, ni siempre posible, asignar probabilidad a todos sus subconjuntos.

## Eventos

Un evento es una afirmacion sobre el resultado aleatorio. Matematicamente, se representa por un subconjunto

$$
A\subseteq \Omega.
$$

Decimos que el evento

$$
A
$$

ocurre si el resultado observado

$$
\omega
$$

pertenece a

$$
A.
$$

En probabilidad elemental se suele hablar como si cualquier subconjunto fuese automaticamente un evento. En espacios infinitos esa identificacion debe hacerse con cuidado.

## La necesidad de una familia distinguida de eventos

Si queremos manipular probabilidades con coherencia, la coleccion de eventos debe ser estable bajo las operaciones logicas naturales:

- complemento;
- union numerable;
- interseccion numerable.

Ademas, en modelos continuos no conviene intentar medir todos los subconjuntos de

$$
\Omega.
$$

La teoria de la medida muestra que esa ambicion conduce a patologias profundas.

La solucion es elegir una familia suficientemente rica, pero controlada, de subconjuntos medibles.

## Sigma-algebra

Una **sigma-algebra** sobre

$$
\Omega
$$

es una familia

$$
\mathcal{F}\subseteq \mathcal{P}(\Omega)
$$

tal que:

1. 

$$
\Omega\in \mathcal{F};
$$

2. si

$$
A\in \mathcal{F},
$$

entonces

$$
A^c\in \mathcal{F};
$$

3. si

$$
A_1,A_2,\dots \in \mathcal{F},
$$

entonces

$$
\bigcup_{n=1}^{\infty}A_n\in \mathcal{F}.
$$

Los elementos de

$$
\mathcal{F}
$$

son los eventos medibles.

## Consecuencias inmediatas

De la definicion se deduce automaticamente que:

- el conjunto vacio pertenece a

$$
\mathcal{F};
$$

- las intersecciones numerables de conjuntos de

$$
\mathcal{F}
$$

tambien pertenecen a

$$
\mathcal{F};
$$

- las diferencias de eventos medibles siguen siendo eventos medibles.

### Demostracion de

$$
\varnothing\in \mathcal{F}
$$

Como

$$
\Omega\in \mathcal{F}
$$

y las sigma-algebras son cerradas por complemento,

$$
\varnothing=\Omega^c\in \mathcal{F}.
$$

### Demostracion de estabilidad por intersecciones numerables

Si

$$
A_n\in \mathcal{F},
$$

entonces

$$
\bigcap_{n=1}^{\infty} A_n
=
\left(\bigcup_{n=1}^{\infty} A_n^c\right)^c,
$$

y el miembro derecho pertenece a

$$
\mathcal{F}
$$

por estabilidad respecto de complemento y union numerable.

## Ejemplos de sigma-algebras

### Sigma-algebra trivial

$$
\mathcal{F}=\{\varnothing,\Omega\}.
$$

Es demasiado pobre para la mayoria de las aplicaciones, pero sirve como ejemplo minimo.

### Sigma-algebra total en un conjunto finito

Si

$$
\Omega
$$

es finito, entonces la familia de todos sus subconjuntos

$$
\mathcal{P}(\Omega)
$$

es una sigma-algebra.

### Sigma-algebra generada por una particion

Si

$$
\Omega=E_1\cup \cdots \cup E_k
$$

es una particion finita, la coleccion de todas las uniones de bloques de la particion forma una sigma-algebra.

Este ejemplo es importante porque muestra que medir no significa necesariamente distinguir cada punto individual.

## Sigma-algebra de Borel

En

$$
\mathbb{R},
$$

la sigma-algebra mas importante es la **sigma-algebra de Borel**, denotada por

$$
\mathcal{B}(\mathbb{R}),
$$

que es la menor sigma-algebra que contiene todos los intervalos abiertos.

Equivalentemente, es la menor sigma-algebra que contiene:

- todos los abiertos;
- o todos los cerrados;
- o todos los intervalos semiabiertos racionales.

### Importancia

La sigma-algebra de Borel contiene los conjuntos descriptivamente naturales sobre los que se construye la probabilidad usual en recta real y espacios euclideos.

## Sigma-algebra generada

Dada una familia cualquiera de subconjuntos

$$
\mathcal{C}\subseteq \mathcal{P}(\Omega),
$$

se define la sigma-algebra generada por

$$
\mathcal{C}
$$

como la interseccion de todas las sigma-algebras que contienen a

$$
\mathcal{C}.
$$

Se denota por

$$
\sigma(\mathcal{C}).
$$

### Por que esta definicion tiene sentido

La interseccion arbitraria de sigma-algebras sigue siendo una sigma-algebra. Por tanto, existe una sigma-algebra minima que contiene a la familia inicial.

### Ejemplos

- la sigma-algebra de Borel es

$$
\sigma(\text{abiertos});
$$

- si

$$
X:\Omega\to \mathbb{R}
$$

es una variable aleatoria, entonces la sigma-algebra generada por

$$
X
$$

es

$$
\sigma(X)=\{X^{-1}(B): B\in \mathcal{B}(\mathbb{R})\}.
$$

Esta construccion captura exactamente la informacion observable mediante

$$
X.
$$

## Espacio medible

Un par

$$
(\Omega,\mathcal{F})
$$

formado por un conjunto y una sigma-algebra se llama **espacio medible**.

Es la estructura minima necesaria para empezar a hablar de conjuntos medibles y funciones medibles.

## Medida de probabilidad

Una **medida de probabilidad** sobre

$$
(\Omega,\mathcal{F})
$$

es una funcion

$$
P:\mathcal{F}\to [0,1]
$$

tal que:

1. 

$$
P(\Omega)=1;
$$

2. si

$$
A_1,A_2,\dots
$$

son disjuntos dos a dos, entonces

$$
P\left(\bigcup_{n=1}^{\infty} A_n\right)
=
\sum_{n=1}^{\infty} P(A_n).
$$

La segunda propiedad se llama **sigma-aditividad** o aditividad numerable.

## Espacio de probabilidad

Un **espacio de probabilidad** es una terna

$$
(\Omega,\mathcal{F},P).
$$

Este es el objeto basico de la teoria. Todo lo demas:

- variables aleatorias;
- distribuciones;
- esperanza;
- independencia;
- procesos aleatorios;

se construye sobre esta terna.

## Consecuencias fundamentales de los axiomas

### Monotonia

Si

$$
A\subseteq B,
$$

entonces

$$
P(A)\le P(B).
$$

#### Demostracion

Como

$$
B=A\cup (B\setminus A)
$$

y la union es disjunta, se tiene

$$
P(B)=P(A)+P(B\setminus A)\ge P(A).
$$

### Regla del complemento

Para todo

$$
A\in \mathcal{F},
$$

vale

$$
P(A^c)=1-P(A).
$$

### Subaditividad numerable

Para cualquier sucesion

$$
A_n\in \mathcal{F},
$$

se cumple

$$
P\left(\bigcup_{n=1}^{\infty} A_n\right)
\le
\sum_{n=1}^{\infty} P(A_n).
$$

### Continuidad desde abajo

Si

$$
A_1\subseteq A_2\subseteq \cdots
$$

y

$$
A=\bigcup_{n=1}^{\infty} A_n,
$$

entonces

$$
P(A_n)\to P(A).
$$

### Continuidad desde arriba

Si

$$
A_1\supseteq A_2\supseteq \cdots
$$

y

$$
A=\bigcap_{n=1}^{\infty} A_n,
$$

entonces

$$
P(A_n)\to P(A).
$$

Estas propiedades son esenciales en argumentos de limite y justifican por que la probabilidad moderna esta construida con sigma-algebras, no solo con algebras finitas de conjuntos.

## Eventos nulos y casi seguro

Un evento

$$
N\in \mathcal{F}
$$

es **nulo** si

$$
P(N)=0.
$$

Una propiedad se cumple **casi seguramente** si falla solo sobre un conjunto nulo.

### Advertencia conceptual

Decir que un evento tiene probabilidad cero no significa necesariamente que sea imposible. En modelos continuos, un punto individual suele tener probabilidad cero y, sin embargo, sigue siendo un resultado posible.

## Por que no se miden todos los subconjuntos?

En conjuntos finitos no hay problema en tomar todos los subconjuntos como medibles. En

$$
\mathbb{R}
$$

la situacion es distinta. Existen subconjuntos muy patologicos para los cuales no puede definirse una medida compatible con las propiedades geometricas basicas deseadas.

No hace falta construir esos conjuntos para trabajar rigurosamente. Lo importante es entender la filosofia:

- se elige una clase amplia de subconjuntos razonables;
- se exige cierre bajo operaciones necesarias para el calculo probabilistico;
- se acepta que no todo subconjunto arbitrario debe ser medible.

## Ejemplo 1: espacio de probabilidad finito

Sea

$$
\Omega=\{1,2,3,4,5,6\},
\qquad
\mathcal{F}=\mathcal{P}(\Omega).
$$

Definimos

$$
P(\{k\})=\frac16
\qquad
(k=1,\dots,6).
$$

Entonces para cualquier

$$
A\subseteq \Omega
$$

se tiene

$$
P(A)=\frac{\#A}{6}.
$$

Este es el modelo uniforme clasico del dado justo.

## Ejemplo 2: espacio numerable con masa no uniforme

Tomemos

$$
\Omega=\mathbb{N},
\qquad
\mathcal{F}=\mathcal{P}(\mathbb{N}),
$$

y fijemos

$$
P(\{n\})=2^{-n},
\qquad
n\ge 1.
$$

Como

$$
\sum_{n=1}^{\infty} 2^{-n}=1,
$$

esto define una probabilidad sobre

$$
\mathbb{N}.
$$

No hay equiprobabilidad, pero el modelo es perfectamente coherente.

## Ejemplo 3: recta real con densidad

Sea

$$
\Omega=\mathbb{R},
\qquad
\mathcal{F}=\mathcal{B}(\mathbb{R}),
$$

y supongamos que existe una funcion

$$
f:\mathbb{R}\to [0,\infty)
$$

tal que

$$
\int_{\mathbb{R}} f(x)\,dx=1.
$$

Entonces puede definirse

$$
P(A)=\int_A f(x)\,dx,
\qquad
A\in \mathcal{B}(\mathbb{R}).
$$

Este es el paradigma de probabilidad continua.

## Ejemplo 4: ley uniforme en un intervalo

Sobre

$$
([0,1],\mathcal{B}([0,1]))
$$

puede definirse

$$
P(A)=\lambda(A),
$$

donde

$$
\lambda
$$

es la medida de Lebesgue restringida al intervalo. Entonces

$$
P([a,b])=b-a
$$

para

$$
0\le a\le b\le 1.
$$

Aqui se ve con claridad que

$$
P(\{x\})=0
$$

para todo

$$
x\in [0,1],
$$

pero

$$
P([0,1])=1.
$$

## Completacion de una medida

En muchas aplicaciones conviene ampliar la sigma-algebra inicial agregando todos los subconjuntos de conjuntos nulos. El espacio resultante se llama **completo**.

### Idea

Si

$$
N\in \mathcal{F}
$$

y

$$
P(N)=0,
$$

entonces cualquier subconjunto

$$
B\subseteq N
$$

deberia ser irrelevante probabilisticamente. En un espacio completo, tales subconjuntos tambien son medibles y tienen probabilidad cero.

## Funciones medibles

Una funcion

$$
X:(\Omega,\mathcal{F})\to (\mathbb{R},\mathcal{B}(\mathbb{R}))
$$

es medible si

$$
X^{-1}(B)\in \mathcal{F}
$$

para todo boreliano

$$
B.
$$

Las variables aleatorias no son otra cosa que funciones medibles. Por eso la teoria de sigma-algebras no es un adorno formal, sino la infraestructura que hace posible definir sus leyes y esperanzas.

## Informacion y sigma-algebras

Una sigma-algebra puede interpretarse como una estructura de informacion. Si

$$
\mathcal{G}\subseteq \mathcal{F},
$$

los eventos de

$$
\mathcal{G}
$$

son exactamente los que pueden decidirse con cierto nivel de observacion parcial.

Esta idea se vuelve central en:

- probabilidad condicionada;
- martingalas;
- filtraciones;
- procesos estocasticos.

## Relacion con lo que sigue

Este lenguaje sostiene todo el bloque:

- la probabilidad condicional requiere eventos medibles;
- las variables aleatorias son funciones medibles;
- la funcion de distribucion nace como imagen de la medida;
- la esperanza es una integral respecto de

$$
P;
$$

- la ley de los grandes numeros y el resto de los teoremas limite comparan sucesiones de variables aleatorias definidas en un mismo espacio de probabilidad.

## Errores conceptuales frecuentes

### 1. Confundir

$$
\Omega
$$

con

$$
\mathcal{F}
$$

El primero es el conjunto de resultados; la segunda es la familia de eventos observables.

### 2. Pensar que probabilidad cero implica imposibilidad

Eso es falso en modelos continuos.

### 3. Pensar que toda coleccion razonable de conjuntos es una sigma-algebra

La cerradura por uniones numerables es una exigencia fuerte y no debe darse por supuesta.

### 4. Creer que la formalizacion es una carga innecesaria

En realidad, esta es la estructura que permite enunciar sin ambiguedad independencia, convergencia, esperanza condicionada y procesos aleatorios.

## Cierre

La probabilidad moderna no es solo una teoria de porcentajes o frecuencias, sino una teoria de medidas sobre familias bien elegidas de eventos. La terna

$$
(\Omega,\mathcal{F},P)
$$

es el punto de partida real del tema. A partir de ahi, las variables aleatorias, las distribuciones y la estadistica dejan de ser tecnicas sueltas y pasan a formar parte de una arquitectura matematica coherente.
