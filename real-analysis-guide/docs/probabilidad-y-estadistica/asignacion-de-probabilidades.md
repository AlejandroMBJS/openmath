---
title: Asignacion de probabilidades
description: Como construir modelos probabilisticos en espacios finitos, discretos y continuos mediante simetria, conteo, densidades y consideraciones empiricas.
---

# Asignacion de probabilidades

## Los axiomas no construyen el modelo por ti

Los axiomas de Kolmogorov dicen como debe comportarse una medida de probabilidad una vez elegida. Pero no dicen, por si solos, cual es la probabilidad correcta para un problema concreto. Ese paso anterior es la asignacion de probabilidades.

Aqui se decide:

- cual es el espacio muestral relevante;
- cuales son los resultados elementales;
- que estructura de simetria o de informacion justifica una distribucion;
- cuando usar equiprobabilidad, densidades, frecuencias empiricas o modelos previos.

Este tema es, por tanto, una pieza de modelizacion matematica, no solo de calculo.

## Primer paso: elegir el espacio muestral correcto

Antes de poner numeros, hay que decidir que objeto aleatorio se esta modelando.

### Ejemplo

En el lanzamiento de dos dados, hay varias descripciones posibles:

- el par ordenado de resultados;
- la suma;
- la diferencia;
- el maximo.

No todas generan espacios equiprobables. El modelo correcto depende de que se tome como resultado elemental.

### Leccion

Muchos errores de probabilidad no provienen de una mala cuenta, sino de un mal espacio muestral.

## Asignacion en espacios finitos equiprobables

El caso mas clasico es el de Laplace.

### Principio de Laplace

Si

$$
\Omega
$$

es un espacio finito y todos los resultados elementales son equiprobables, entonces para todo

$$
A\subseteq \Omega
$$

definimos

$$
P(A)=\frac{|A|}{|\Omega|}.
$$

### Justificacion

Cada punto elemental recibe masa

$$
\frac{1}{|\Omega|},
$$

y la probabilidad de un evento es la suma de las masas de sus puntos.

## Ejemplo 1: dado equilibrado

Tomemos

$$
\Omega=\{1,2,3,4,5,6\}.
$$

Cada resultado tiene probabilidad

$$
\frac16.
$$

Si

$$
A=\{2,4,6\},
$$

entonces

$$
P(A)=\frac{3}{6}=\frac12.
$$

## Ejemplo 2: dos dados

El espacio elemental correcto es

$$
\Omega=\{(i,j):1\le i,j\le 6\},
$$

con

$$
|\Omega|=36.
$$

Cada par ordenado tiene probabilidad

$$
\frac{1}{36}.
$$

Si

$$
A=\{(i,j):i+j=8\},
$$

entonces los casos favorables son

$$
(2,6),(3,5),(4,4),(5,3),(6,2),
$$

asi que

$$
P(A)=\frac{5}{36}.
$$

### Leccion

Las sumas $2,\dots,12$ no son equiprobables, aunque el conjunto de sumas tenga una apariencia simetrica.

## Cuando la equiprobabilidad no debe usarse

No todo problema "simetrico" es equiprobable en la descripcion que uno tiene a la vista.

### Ejemplo clasico

En dos dados:

$$
P(\text{suma}=2)=\frac{1}{36},
\qquad
P(\text{suma}=7)=\frac{6}{36}.
$$

Las sumas no tienen todas el mismo peso porque el numero de pares ordenados que las producen no es constante.

## Espacios discretos no uniformes

En un espacio finito o numerable puede asignarse una masa

$$
p(\omega)\ge 0
$$

a cada resultado elemental, con la condicion

$$
\sum_{\omega\in\Omega} p(\omega)=1.
$$

Entonces

$$
P(A)=\sum_{\omega\in A} p(\omega).
$$

### Comentario

La equiprobabilidad es solo un caso particular con

$$
p(\omega)=\frac{1}{|\Omega|}.
$$

## Ejemplo 3: un espacio discreto no uniforme

Sea

$$
\Omega=\{a,b,c\}
$$

con

$$
p(a)=0.2,
\qquad
p(b)=0.5,
\qquad
p(c)=0.3.
$$

Entonces

$$
P(\{a,c\})=0.2+0.3=0.5.
$$

## Asignacion por simetria geometrica

En muchos modelos continuos, la asignacion se justifica por uniformidad espacial o invariancia geometrica.

### Ejemplo 4: punto uniforme en un intervalo

Si un punto se elige "sin preferencia" en

$$
[0,1],
$$

el modelo natural es

$$
P([a,b])=b-a.
$$

Es decir, la probabilidad de un subintervalo es su longitud.

### Ejemplo 5: punto uniforme en una region plana

Si un punto se elige uniformemente en una region

$$
D\subseteq \mathbb{R}^2
$$

de area finita positiva, entonces para un subconjunto medible

$$
A\subseteq D
$$

se toma

$$
P(A)=\frac{\operatorname{Area}(A)}{\operatorname{Area}(D)}.
$$

### Ejemplo 6: disco dentro del disco

Si el punto se elige uniformemente en el disco unitario, la probabilidad de caer en el subdisco de radio

$$
\frac12
$$

es

$$
\frac{\pi(1/2)^2}{\pi}=\frac14.
$$

## Densidades en el caso continuo

En modelos continuos mas generales, la asignacion se hace mediante una densidad

$$
f(x)\ge 0
$$

tal que

$$
\int_{-\infty}^{\infty} f(x)\,dx=1.
$$

Entonces

$$
P(X\in A)=\int_A f(x)\,dx.
$$

### Comentario

En este contexto la probabilidad ya no se asigna a puntos individuales, que suelen tener probabilidad cero, sino a conjuntos medibles.

## Ejemplo 7: uniforme continua

Si

$$
X\sim U[a,b],
$$

la densidad es

$$
f(x)=\frac{1}{b-a}\mathbf 1_{[a,b]}(x).
$$

Entonces para cualquier subintervalo

$$
[u,v]\subseteq [a,b],
$$

se cumple

$$
P(u\le X\le v)=\frac{v-u}{b-a}.
$$

## Asignacion por frecuencias empiricas

En estadistica aplicada muchas probabilidades se asignan inicialmente a partir de datos observados:

- frecuencias relativas;
- proporciones historicas;
- tasas de fallo;
- tablas de contingencia.

### Comentario

Esto no convierte la probabilidad en "solo frecuencia". Pero si proporciona una regla practica de construccion de modelos cuando la simetria no basta.

## Asignacion subjetiva o bayesiana

En contextos de inferencia o decision, tambien puede asignarse probabilidad a hipotesis o parametros como codificacion coherente de incertidumbre previa.

### Ejemplo

Antes de ver datos, un analista puede asignar probabilidades previas a distintos escenarios:

- demanda alta;
- demanda media;
- demanda baja.

Esas probabilidades no salen de conteo ni de uniformidad geometrica, sino de informacion previa estructurada.

## Uniformidad no siempre significa lo mismo

Una de las fuentes mas finas de paradojas en probabilidad es que la palabra "uniforme" depende de la parametrizacion elegida.

### Ejemplo conceptual

Elegir un punto uniforme en un disco no significa que el radio sea uniforme en

$$
[0,1].
$$

De hecho, para uniformidad en area:

$$
P(R\le r)=r^2,
$$

porque el area del subdisco de radio $r$ es proporcional a $r^2$.

### Leccion

La uniformidad debe especificarse respecto de que magnitud o medida se esta hablando.

## Coherencia con la informacion disponible

Asignar probabilidades no es poner numeros arbitrarios. Un modelo debe ser coherente con:

- simetrias del problema;
- estructura causal o fisica;
- datos observados;
- unidades y parametrizacion;
- objetivo del analisis.

## Ejemplo 8: clasificacion binaria

Si en una poblacion el $30\%$ pertenece a una categoria A y el $70\%$ a una categoria B, esas proporciones pueden tomarse como probabilidades a priori:

$$
P(A)=0.3,
\qquad
P(B)=0.7.
$$

Luego, si ademas observamos una variable auxiliar, esas probabilidades pueden actualizarse via Bayes.

## Modelos discretos vs continuos

La asignacion depende profundamente del tipo de espacio:

- en discreto: se asignan masas a puntos;
- en continuo: se asigna masa a conjuntos via integrales de densidad;
- en mixto: pueden coexistir atomos y parte continua.

### Comentario

No todo modelo probabilistico es puramente discreto o puramente continuo. Hay distribuciones mixtas que exigen mas cuidado.

## Error comun 1: usar equiprobabilidad solo por comodidad

La equiprobabilidad necesita justificacion real. Si no hay simetria estructural o definicion elemental adecuada, usarla puede producir respuestas falsas.

## Error comun 2: creer que "uniforme" significa lo mismo bajo cualquier variable

No. La uniformidad depende de la medida natural del problema y de la parametrizacion elegida.

## Error comun 3: ignorar el paso de modelizacion

Muchos problemas parecen de calculo, pero en realidad su dificultad esta en construir bien el modelo probabilistico antes de calcular.

## Practica guiada

### Ejercicio 1

En un espacio finito con

$$
\Omega=\{1,2,3,4\}
$$

equiprobable, calcula

$$
P(\{1,4\}).
$$

#### Solucion

$$
P(\{1,4\})=\frac{2}{4}=\frac12.
$$

### Ejercicio 2

Explica por que la suma de dos dados no es uniforme en

$$
\{2,\dots,12\}.
$$

#### Solucion

Porque distintas sumas tienen distinto numero de pares ordenados que las producen. La estructura elemental uniforme vive en los pares $(i,j)$, no en la suma.

### Ejercicio 3

Si un punto se elige uniformemente en el cuadrado unidad, cual es la probabilidad de caer en un subrectangulo de area $0.12$?

#### Solucion

Bajo uniformidad en area, la probabilidad coincide con la razon de areas, asi que vale

$$
0.12.
$$

## Cierre

La asignacion de probabilidades es el momento donde la probabilidad se vuelve modelizacion. Aqui se decide que descripcion matematica representa razonablemente el experimento:

- Laplace para espacios finitos equiprobables;
- masas para espacios discretos no uniformes;
- razones geometricas para modelos uniformes continuos;
- densidades en espacios continuos generales;
- y probabilidades previas cuando la incertidumbre misma debe modelarse.

Entender bien este paso evita hacer calculos impecables sobre modelos mal construidos.
