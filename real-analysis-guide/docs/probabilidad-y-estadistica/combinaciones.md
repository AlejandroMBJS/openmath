---
title: Combinaciones
description: Selecciones no ordenadas, coeficientes binomiales, combinaciones con repeticion e identidades fundamentales.
---

# Combinaciones

## Motivacion

Las combinaciones aparecen cuando importa que elementos se eligen, pero no el orden en que se presentan.

Ejemplos:

- elegir un comite de

$$
3
$$

personas de entre

$$
10;
$$

- escoger cartas de una mano de poker;
- seleccionar posiciones para colocar exitos en una secuencia;
- contar subconjuntos de un conjunto finito.

## Definicion

El numero de maneras de elegir

$$
k
$$

objetos de entre

$$
n
$$

objetos distintos, sin importar el orden y sin repeticion, se denota por

$$
\binom{n}{k}.
$$

## Formula fundamental

### Teorema 1

$$
\binom{n}{k}=\frac{n!}{k!(n-k)!}.
$$

### Demostracion

Primero contamos las selecciones ordenadas de

$$
k
$$

objetos de entre

$$
n:
$$

$$
\frac{n!}{(n-k)!}.
$$

Pero cada subconjunto de

$$
k
$$

elementos ha sido contado exactamente

$$
k!
$$

veces, una por cada ordenacion interna posible. Por tanto debemos dividir por

$$
k!.
$$

## Ejemplo 1

Cuantos comites de

$$
3
$$

personas pueden elegirse de entre

$$
8?
$$

$$
\binom{8}{3}=\frac{8\cdot 7\cdot 6}{3\cdot 2\cdot 1}=56.
$$

## Simetria

### Teorema 2

$$
\binom{n}{k}=\binom{n}{n-k}.
$$

### Interpretacion

Elegir

$$
k
$$

elementos equivale a decidir cuales

$$
n-k
$$

se excluyen.

### Ejemplo 2

$$
\binom{10}{2}=\binom{10}{8}=45.
$$

## Casos extremos

$$
\binom{n}{0}=1,\qquad \binom{n}{n}=1.
$$

La primera identidad cuenta el subconjunto vacio; la segunda, el conjunto completo.

Ademas

$$
\binom{n}{1}=n.
$$

## Identidad de Pascal

### Teorema 3

Para

$$
1\le k\le n-1,
$$

se cumple

$$
\binom{n}{k}=\binom{n-1}{k}+\binom{n-1}{k-1}.
$$

### Demostracion combinatoria

Fijemos un elemento particular

$$
x
$$

del conjunto de

$$
n
$$

elementos.

Al formar un subconjunto de tamano

$$
k,
$$

hay dos casos disjuntos:

1. no contiene a

$$
x,
$$

lo que puede ocurrir de

$$
\binom{n-1}{k}
$$

formas;

2. contiene a

$$
x,
$$

y entonces faltan

$$
k-1
$$

elementos por elegir entre los

$$
n-1
$$

restantes, en

$$
\binom{n-1}{k-1}
$$

formas.

Sumando ambos casos se obtiene la identidad.

## Triangulo de Pascal

La identidad anterior genera el triangulo de Pascal, donde cada entrada es suma de las dos situadas encima.

Este triangulo organiza visualmente la estructura de los coeficientes binomiales y anticipa el teorema binomial.

## Teorema binomial

### Teorema 4

Para todo

$$
n\in \mathbb{N},
$$

se tiene

$$
(x+y)^n=\sum_{k=0}^n \binom{n}{k}x^{n-k}y^k.
$$

### Comentario combinatorio

El coeficiente

$$
\binom{n}{k}
$$

aparece porque al expandir el producto

$$
(x+y)\cdots(x+y)
$$

hay que elegir en cuales de los

$$
n
$$

factores se toma

$$
y
$$

en vez de

$$
x.
$$

## Ejemplo 3

El numero de subconjuntos de tamano

$$
2
$$

de un conjunto de

$$
5
$$

elementos es

$$
\binom{5}{2}=10.
$$

Estos subconjuntos pueden interpretarse como las aristas del grafo completo

$$
K_5.
$$

## Combinaciones con repeticion

Si se permite repetir elementos, el problema cambia.

### Problema tipo

Cuantas maneras hay de elegir

$$
k
$$

objetos de entre

$$
n
$$

tipos, permitiendo repeticiones y sin importar el orden?

### Teorema 5

El numero de tales selecciones es

$$
\binom{n+k-1}{k}.
$$

### Idea de la demostracion

Es el clasico argumento de estrellas y barras:

- se representan los

$$
k
$$

objetos como estrellas;
- se usan

$$
n-1
$$

barras para separar los tipos.

Elegir una configuracion equivale a elegir las posiciones de las

$$
k
$$

estrellas entre

$$
n+k-1
$$

lugares.

## Ejemplo 4

Cuantas soluciones enteras no negativas tiene

$$
x_1+x_2+x_3=5?
$$

Esto equivale a distribuir

$$
5
$$

objetos indistinguibles en

$$
3
$$

cajas, luego el numero de soluciones es

$$
\binom{5+3-1}{5}=\binom{7}{5}=21.
$$

## Selecciones y probabilidad

Las combinaciones son el lenguaje natural de modelos como:

- manos de cartas;
- loterias sin orden;
- muestreo sin reemplazo;
- distribuciones hipergeometricas.

### Ejemplo 5: mano de poker

El numero de manos de

$$
5
$$

cartas de una baraja de

$$
52
$$

cartas es

$$
\binom{52}{5}.
$$

No aparece una permutacion porque la mano no cambia si se reordenan internamente sus cartas.

## Ejemplo 6: probabilidad hipergeometrica

En una urna con

$$
7
$$

bolas rojas y

$$
5
$$

azules, se extraen

$$
4
$$

bolas sin reemplazo. La probabilidad de obtener exactamente

$$
2
$$

rojas es

$$
\frac{\binom{7}{2}\binom{5}{2}}{\binom{12}{4}}.
$$

La razon combinatoria es transparente:

- elegir

$$
2
$$

rojas entre

$$
7;
$$

- elegir

$$
2
$$

azules entre

$$
5;
$$

- dividir por todas las manos posibles de

$$
4
$$

bolas.

## Suma de coeficientes binomiales

### Teorema 6

$$
\sum_{k=0}^n \binom{n}{k}=2^n.
$$

### Demostracion combinatoria

El lado izquierdo cuenta todos los subconjuntos de un conjunto de

$$
n
$$

elementos agrupados por tamano. El lado derecho cuenta directamente todos los subconjuntos, pues cada elemento puede incluirse o no incluirse.

## Otra identidad util

### Teorema 7

$$
\sum_{k=0}^n k\binom{n}{k}=n2^{n-1}.
$$

### Idea combinatoria

Ambos lados cuentan el numero de pares

$$
(A,x)
$$

donde

$$
A
$$

es un subconjunto de

$$
\{1,\dots,n\}
$$

y

$$
x\in A.
$$

## Elecciones ordenadas frente a no ordenadas

La diferencia conceptual con permutaciones es esencial:

- permutaciones: el orden crea configuraciones distintas;
- combinaciones: el orden interno se identifica.

### Ejemplo 7

Elegir presidente y secretario de entre

$$
10
$$

personas es una permutacion de longitud

$$
2;
$$

elegir un comite de

$$
2
$$

personas es una combinacion.

## Comentario algebraico

Los coeficientes binomiales aparecen en:

- expansion de potencias;
- dimension de espacios de polinomios;
- conteo de caminos en reticulas;
- distribuciones binomiales;
- identidades generadoras.

Esto muestra que las combinaciones no son una simple tecnica de ejercicios, sino una familia de invariantes algebraico-combinatorios profundamente ubicua.

## Errores frecuentes

- Usar permutaciones cuando el orden no importa.
- Olvidar si hay o no repeticion.
- No distinguir entre objetos indistinguibles y objetos distintos.
- Escribir formulas correctas para un problema distinto del planteado.

## Conclusion

Las combinaciones cuantifican la seleccion pura, sin orden. Son el lenguaje natural de subconjuntos, muestras no ordenadas y modelos discretos sin reemplazo. En probabilidad forman, junto con las permutaciones, la base de casi todos los calculos combinatorios clasicos.
