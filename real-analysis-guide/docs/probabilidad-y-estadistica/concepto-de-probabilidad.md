---
title: Concepto de probabilidad
description: Experimentos aleatorios, espacios muestrales, eventos, interpretaciones de la probabilidad y formulacion axiomatica moderna.
---

# Concepto de probabilidad

## Que intenta medir la probabilidad

La probabilidad aparece cuando un fenomeno admite varios resultados posibles y, antes de observarlo, no sabemos con certeza cual ocurrira. Pero esa incertidumbre no es mero desorden. Hay estructura:

- un conjunto de resultados posibles;
- relaciones entre eventos;
- regularidades observables;
- reglas de composicion.

La probabilidad intenta cuantificar esa incertidumbre de forma coherente.

## Experimento aleatorio

Un experimento aleatorio es un procedimiento cuyo resultado no puede predecirse con certeza antes de realizarlo, aunque su repertorio de posibilidades pueda describirse matematicamente.

### Ejemplos

- lanzar una moneda;
- lanzar dos dados;
- medir el tiempo de vida de un componente;
- registrar el numero de llamadas en una hora;
- observar la velocidad de una particula elegida al azar.

### Comentario

Aleatorio no significa "sin ley". Significa que, desde el punto de vista del observador o del modelo, el resultado individual no queda determinado de antemano.

## Espacio muestral

El conjunto de todos los resultados elementales posibles se llama espacio muestral y suele denotarse por

$$
\Omega.
$$

### Ejemplos

#### Moneda

$$
\Omega=\{\text{cara},\text{cruz}\}.
$$

#### Dado

$$
\Omega=\{1,2,3,4,5,6\}.
$$

#### Dos lanzamientos de moneda

$$
\Omega=\{(c,c),(c,x),(x,c),(x,x)\}.
$$

#### Tiempo de vida

$$
\Omega=[0,\infty).
$$

### Comentario

El espacio muestral no es unico de manera absoluta. Depende del nivel de descripcion que interese.

Por ejemplo, al lanzar dos dados puede modelarse:

- el par ordenado de resultados;
- la suma;
- el maximo;
- el numero de seises.

Cada eleccion produce un espacio distinto.

## Resultados elementales y eventos

Un resultado elemental es un punto

$$
\omega\in\Omega.
$$

Un evento es un subconjunto

$$
A\subseteq \Omega.
$$

Decimos que el evento $A$ ocurre si el resultado observado pertenece a $A$.

### Ejemplo con un dado

Si

$$
\Omega=\{1,2,3,4,5,6\},
$$

entonces:

- "sale par" es

$$
\{2,4,6\};
$$

- "sale mayor o igual que 4" es

$$
\{4,5,6\};
$$

- "sale 1" es

$$
\{1\}.
$$

## Operaciones entre eventos

Los eventos son conjuntos, asi que las operaciones logicas se convierten en operaciones conjuntistas.

### Union

$$
A\cup B
$$

ocurre si ocurre al menos uno de los dos eventos.

### Interseccion

$$
A\cap B
$$

ocurre si ocurren ambos.

### Complemento

$$
A^c
$$

ocurre si no ocurre $A$.

### Diferencia

$$
A\setminus B
$$

ocurre si ocurre $A$ pero no $B$.

## Traduccion del lenguaje ordinario

El lenguaje cotidiano debe traducirse cuidadosamente:

- "A o B" suele significar

$$
A\cup B;
$$

- "A y B" significa

$$
A\cap B;
$$

- "no A" significa

$$
A^c.
$$

Muchos errores en probabilidad elemental no son de calculo, sino de mala traduccion logica.

## Eventos incompatibles

Dos eventos son incompatibles o disjuntos si

$$
A\cap B=\varnothing.
$$

En ese caso no pueden ocurrir simultaneamente.

### Ejemplo

En un dado:

- "sale numero par";
- "sale numero impar";

son incompatibles.

## Evento seguro y evento imposible

Hay dos eventos extremos:

- el evento imposible:

$$
\varnothing;
$$

- el evento seguro:

$$
\Omega.
$$

Toda teoria de probabilidad debe asignarles valores naturales:

$$
P(\varnothing)=0,
\qquad
P(\Omega)=1.
$$

## Frecuencia relativa e intuicion empirica

Si repetimos muchas veces un experimento bajo condiciones comparables, podemos observar la frecuencia relativa de un evento $A$:

$$
\frac{\text{numero de veces que ocurre }A}{\text{numero total de repeticiones}}.
$$

La intuicion empirica es que, en experimentos estables, esta frecuencia tiende a estabilizarse.

### Ejemplo

Si una moneda equilibrada se lanza muchisimas veces, la proporcion de caras tiende a acercarse a

$$
\frac12.
$$

### Comentario

La probabilidad no es la frecuencia observada en una muestra finita. La frecuencia es un dato empirico; la probabilidad es la cantidad ideal que el modelo atribuye al evento.

## Interpretaciones clasicas de la probabilidad

Historicamente han convivido varias lecturas.

### Interpretacion clasica o de Laplace

Si los resultados elementales son equiprobables, entonces

$$
P(A)=\frac{\text{casos favorables}}{\text{casos posibles}}.
$$

Esta interpretacion es poderosa en espacios finitos, pero no cubre todos los contextos.

### Interpretacion frecuentista

La probabilidad se interpreta como el limite ideal de las frecuencias relativas bajo repeticiones largas.

### Interpretacion subjetiva o bayesiana

La probabilidad cuantifica un grado racional de creencia coherente, actualizable por informacion nueva.

### Comentario

La teoria axiomatica moderna permite trabajar matematicamente sin decidir desde el primer momento una filosofia unica.

## La formulacion axiomatica

La idea moderna central es:

> a cada evento se le asigna un numero entre 0 y 1 de manera que respete ciertas reglas estructurales.

Esas reglas son los axiomas de Kolmogorov.

## Espacio de probabilidad

Un espacio de probabilidad esta formado por:

- un espacio muestral

$$
\Omega;
$$

- una familia de eventos

$$
\mathcal F;
$$

- una medida de probabilidad

$$
P:\mathcal F\to [0,1].
$$

### Comentario sobre \mathcal F

No siempre todos los subconjuntos de $\Omega$ son manejables, sobre todo en espacios continuos. Por eso se introduce una familia de eventos medibles. En cursos elementales se suele ocultar este punto al principio, pero es importante saber que existe.

## Axiomas de Kolmogorov

Para eventos

$$
A\in\mathcal F,
$$

la funcion $P$ debe satisfacer:

1. no negatividad:

$$
P(A)\ge 0;
$$

2. normalizacion:

$$
P(\Omega)=1;
$$

3. aditividad numerable para eventos disjuntos:

si

$$
A_1,A_2,\dots
$$

son disjuntos dos a dos, entonces

$$
P\left(\bigcup_{n=1}^\infty A_n\right)
=
\sum_{n=1}^\infty P(A_n).
$$

## Consecuencias inmediatas

De los axiomas se obtienen propiedades basicas:

- $P(\varnothing)=0$;
- $P(A^c)=1-P(A)$;
- si

$$
A\subseteq B,
$$

entonces

$$
P(A)\le P(B);
$$

- para cualesquiera $A,B$:

$$
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$

Estas formulas no son definiciones, sino teoremas basicos de la estructura axiomatica.

## Espacios discretos y continuos

La probabilidad funciona tanto en contextos discretos como continuos.

### Discreto

En un espacio finito o numerable, suele pensarse en masas asignadas a puntos:

$$
p(\omega)\ge 0,
\qquad
\sum_{\omega\in\Omega} p(\omega)=1.
$$

Entonces

$$
P(A)=\sum_{\omega\in A} p(\omega).
$$

### Continuo

En contextos continuos, la probabilidad suele construirse mediante densidades o medidas geometricas. En ese caso, los puntos individuales suelen tener probabilidad cero.

### Leccion

Probabilidad cero no significa imposibilidad, y probabilidad uno no significa certeza logica en el sentido cotidiano. En espacios continuos esto se vuelve muy importante.

## Ejemplo 1: uniforme en un intervalo

Si un punto se elige uniformemente en

$$
[0,1],
$$

entonces:

- la probabilidad de

$$
[a,b]
$$

es

$$
b-a;
$$

- la probabilidad de un punto fijo, por ejemplo

$$
\left\{\frac12\right\},
$$

es

$$
0.
$$

Sin embargo, el punto sigue siendo un resultado posible.

## Probabilidad como medida de incertidumbre estructurada

La probabilidad no consiste en "poner un porcentaje" a una intuicion vaga. Requiere:

- identificar resultados posibles;
- decidir que eventos son relevantes;
- asignar probabilidades de forma coherente;
- interpretar el modelo dentro de su contexto.

## Probabilidad y simetria

En muchos problemas elementales, la probabilidad se asigna por simetria:

- dado equilibrado;
- moneda justa;
- punto uniforme en una region.

Pero la simetria no debe invocarse superficialmente. Hay que decidir:

- cual es el espacio elemental;
- respecto de que estructura se entiende la uniformidad.

## Ejemplo 2: dos dados y la ilusion de las sumas

Las sumas

$$
2,3,\dots,12
$$

no son equiprobables.

El espacio elemental correcto es el de pares ordenados

$$
(i,j),
$$

que si son equiprobables bajo el modelo natural.

### Leccion

La probabilidad depende del modelo, no de la apariencia verbal del problema.

## Probabilidad y modelado

Todo problema de probabilidad incluye una decision de modelado:

- que variable observar;
- que resultados considerar elementales;
- si hay independencia o no;
- si el modelo es discreto, continuo o mixto;
- si la asignacion se justifica por simetria, datos o supuestos previos.

Por eso la probabilidad es tanto una teoria axiomatica como una disciplina de modelizacion.

## Error comun 1: confundir evento con resultado elemental

Un evento puede contener muchos resultados. Decir "sale numero par" no identifica un punto de $\Omega$, sino un subconjunto.

## Error comun 2: pensar que probabilidad cero significa imposible

En modelos continuos, un punto individual puede tener probabilidad cero y seguir siendo posible.

## Error comun 3: usar equiprobabilidad sin justificar el espacio elemental

La equiprobabilidad es poderosa, pero exige que la estructura elemental correcta sea realmente uniforme.

## Practica guiada

### Ejercicio 1

En un dado, describe como evento el enunciado "sale un numero mayor que 3".

#### Solucion

$$
\{4,5,6\}.
$$

### Ejercicio 2

Explica por que en el modelo uniforme sobre

$$
[0,1]
$$

la probabilidad de obtener exactamente

$$
0.3
$$

es cero.

#### Solucion

Porque en modelos continuos la probabilidad se asigna a intervalos y otros conjuntos medibles mediante longitud, no a puntos individuales, cuya longitud es cero.

### Ejercicio 3

Que diferencia conceptual hay entre una frecuencia relativa y una probabilidad?

#### Solucion

La frecuencia relativa es un resultado empirico obtenido a partir de una muestra finita. La probabilidad es la cantidad ideal que el modelo atribuye al evento.

## Cierre

El concepto de probabilidad se construye sobre una idea simple pero profunda: cuantificar incertidumbre sin abandonar la coherencia matematica. Para hacerlo hacen falta:

- un espacio de posibilidades;
- eventos bien definidos;
- reglas estructurales de asignacion;
- y una interpretacion compatible con el problema modelado.

Con esa base, toda la teoria posterior deja de ser una coleccion de formulas y pasa a verse como una extension natural de un mismo marco conceptual.
