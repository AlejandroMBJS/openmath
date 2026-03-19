---
title: Pivoteo parcial escalado
description: Seleccion de pivotes por criterio relativo, escalas de fila, mejora sobre pivoteo parcial y analisis de robustez.
---

# Pivoteo parcial escalado

## Motivacion

El pivoteo parcial escoge en cada columna el elemento de mayor valor absoluto entre las filas disponibles. Eso ya es una mejora enorme respecto a no pivotear. Sin embargo, puede seguir siendo enganoso cuando las filas tienen escalas muy distintas.

### Idea del problema

Un pivote puede parecer grande en valor absoluto y, sin embargo, ser pequeno comparado con el tamano natural de su propia fila.

Por eso se introduce el **pivoteo parcial escalado**: en vez de comparar solo

$$
\lvert a_{ik}\rvert,
$$

se compara el cociente

$$
\frac{\lvert a_{ik}\rvert}{s_i},
$$

donde

$$
s_i
$$

es una medida del tamano de la fila

$$
i.
$$

## Factores de escala

Para cada fila

$$
i
$$

se define tipicamente

$$
s_i=\max_{1\le j\le n}\lvert a_{ij}\rvert.
$$

Este numero representa la escala dominante de la fila.

## Regla de seleccion

En el paso

$$
k,
$$

entre las filas

$$
i\ge k
$$

se elige como pivote la fila

$$
p
$$

que maximiza

$$
\frac{\lvert a_{ik}\rvert}{s_i}.
$$

Luego se intercambian filas

$$
k
$$

y

$$
p
$$

y se procede como en la eliminacion gaussiana usual.

## Algoritmo

### Paso previo

Calcular para cada fila

$$
i
$$

su factor de escala

$$
s_i=\max_j \lvert a_{ij}\rvert.
$$

### Paso principal

Para

$$
k=1,\dots,n-1:
$$

1. elegir

$$
p
$$

tal que

$$
\frac{\lvert a_{pk}\rvert}{s_p}
=
\max_{k\le i\le n}
\frac{\lvert a_{ik}\rvert}{s_i};
$$

2. intercambiar filas

$$
k
$$

y

$$
p,
$$

y tambien los factores

$$
s_k,\ s_p;
$$

3. continuar la eliminacion.

## Por que mejora al pivoteo parcial

El pivoteo parcial responde a la pregunta:

"Que elemento es mas grande en esta columna?"

El pivoteo escalado responde a una pregunta mas fina:

"Que elemento es mas significativo dentro de su fila?"

Cuando hay filas muy desbalanceadas, esta segunda pregunta es la correcta.

## Ejemplo conceptual

Considere la matriz

$$
\begin{pmatrix}
10^{-3} & 1 & 1\\
1 & 10^6 & 10^6\\
2 & 3 & 4
\end{pmatrix}.
$$

En la primera columna, los candidatos son

$$
10^{-3},\ 1,\ 2.
$$

Por pivoteo parcial se elige

$$
2.
$$

Sin embargo, los factores de escala son aproximadamente:

$$
s_1=1,\qquad s_2=10^6,\qquad s_3=4.
$$

Los cocientes son entonces:

$$
\frac{10^{-3}}{1}=10^{-3},
\qquad
\frac{1}{10^6}=10^{-6},
\qquad
\frac{2}{4}=0.5.
$$

En este caso ambos criterios eligen la tercera fila, pero el ejemplo muestra el tipo de informacion que el escalado incorpora.

## Caso donde difieren

Tomemos

$$
\begin{pmatrix}
30 & 591400 & 591700\\
5.291 & -6.13 & -6.1301\\
11.2 & 9 & 10
\end{pmatrix}.
$$

En la primera columna, el pivoteo parcial puro miraria

$$
30,\ 5.291,\ 11.2
$$

y elegiria

$$
30.
$$

Pero las escalas de fila son aproximadamente:

$$
s_1\approx 591700,
\qquad
s_2\approx 6.1301,
\qquad
s_3\approx 11.2.
$$

Los cocientes son:

$$
\frac{30}{591700}\approx 5.07\times 10^{-5},
$$

$$
\frac{5.291}{6.1301}\approx 0.863,
$$

$$
\frac{11.2}{11.2}=1.
$$

El escalado ve que el

$$
30
$$

de la primera fila es en realidad diminuto comparado con el tamano de esa fila.

## Estabilidad practica

El pivoteo parcial escalado suele ser mas robusto que el parcial puro en sistemas donde:

- las unidades fisicas de distintas ecuaciones son muy diferentes;
- hay filas con coeficientes de magnitudes desbalanceadas;
- los datos no han sido previamente normalizados.

## Relacion con condicionamiento

El escalado no cambia el condicionamiento intrinseco del sistema. Lo que cambia es la posibilidad de que el algoritmo tome malas decisiones locales por juzgar pivotes en escala absoluta en lugar de relativa.

## Ejemplo resumido

Supongamos dos filas candidatas con entrada activa:

$$
a_{1k}=100,
\qquad
a_{2k}=2,
$$

pero con escalas:

$$
s_1=10^9,
\qquad
s_2=2.
$$

Entonces los cocientes son:

$$
\frac{100}{10^9}=10^{-7},
\qquad
\frac{2}{2}=1.
$$

Aunque

$$
100
$$

es mayor en absoluto, la segunda fila ofrece un pivote mucho mejor desde la perspectiva relativa.

## Comparacion con pivoteo completo

El pivoteo completo busca el mayor elemento absoluto de toda la submatriz activa, permitiendo intercambiar filas y columnas. Es mas caro y altera el orden de las variables.

El pivoteo parcial escalado:

- solo permuta filas;
- mantiene estructura mas sencilla;
- mejora bastante sobre el parcial puro en muchos casos.

## Coste adicional

El costo de calcular los

$$
s_i
$$

es pequeno respecto al costo total de la eliminacion:

$$
O(n^2)
$$

frente a

$$
O(n^3).
$$

Por eso, cuando se sospechan problemas de escala, el sobrecosto esta bien justificado.

## Interpretacion matricial

Escalar filas antes de eliminar equivale, en cierto sentido, a medir la columna activa en una norma relativa dependiente de las filas. El pivoteo escalado no es una simple heuristica ad hoc; responde a la necesidad de trabajar con comparaciones adimensionales.

## Limitaciones

- no garantiza estabilidad perfecta en todos los casos;
- no sustituye al reescalamiento fisico o a una formulacion mejor del problema;
- sigue siendo un metodo de eliminacion para matrices generales, no una cura para matrices mal condicionadas.

## Uso recomendado

Es especialmente razonable cuando:

- los coeficientes provienen de ecuaciones con unidades heterogeneas;
- aparecen filas con escalas muy dispares;
- se quiere una mejora barata respecto a pivoteo parcial.

## Relacion con software

En implementaciones modernas, el escalado puede aparecer:

- explicito, como preprocesamiento;
- implicito, dentro de rutinas mas sofisticadas de factorizacion y equilibrado;
- como parte del analisis previo de la matriz.

## Comentario conceptual

La moraleja del pivoteo escalado es importante: en calculo numerico rara vez basta con mirar magnitudes absolutas. Lo correcto suele ser comparar en escala relativa, porque la aritmetica finita responde a proporciones tanto como a tamanos.

## Cierre

El pivoteo parcial escalado es una mejora natural del pivoteo parcial cuando las filas tienen escalas muy distintas. No cambia la teoria algebraica de la eliminacion, pero si mejora la calidad de las decisiones numericas locales.
