---
title: Principio fundamental del conteo
description: Regla del producto, regla de la suma, conteo por etapas, bijecciones, complementos y errores tipicos en problemas combinatorios.
---

# Principio fundamental del conteo

## El primer lenguaje de la probabilidad discreta

En probabilidad discreta, muchas veces calcular probabilidades significa contar correctamente. Antes de hablar de distribuciones, esperanza o inferencia, hace falta saber responder preguntas como:

- cuantos resultados posibles hay;
- como descomponer una eleccion compleja;
- cuando se debe multiplicar;
- cuando se debe sumar;
- cuando conviene contar el complemento.

El principio fundamental del conteo no es solo una formula. Es una forma de modelar un proceso de eleccion.

## La regla del producto

### Enunciado

Supongamos que un procedimiento consta de varias etapas sucesivas.

Si:

- la primera puede realizarse de

$$
m_1
$$

formas;
- la segunda, una vez fijada la primera, de

$$
m_2
$$

formas;
- y asi sucesivamente hasta una etapa final con

$$
m_n
$$

formas,

entonces el numero total de resultados posibles es

$$
m_1m_2\cdots m_n.
$$

### Idea conceptual

Cada resultado total queda descrito por una tupla

$$
(a_1,\dots,a_n),
$$

donde $a_j$ registra la decision tomada en la etapa $j$. El numero total de tuplas es el producto.

## Producto cartesiano como version conjuntista

Si

$$
|A_1|=m_1,\dots,|A_n|=m_n,
$$

entonces

$$
|A_1\times \cdots \times A_n|
=
\prod_{j=1}^n m_j.
$$

Esta identidad es la forma abstracta del principio del producto.

## Ejemplo 1: contrasenas

Una clave de $4$ digitos puede construirse con los simbolos

$$
0,1,\dots,9
$$

permitiendo repeticiones.

Cada posicion tiene $10$ opciones, luego el numero total de claves es

$$
10^4=10000.
$$

### Variante sin repeticion

Si no se permitieran repeticiones, habria:

- $10$ opciones para la primera posicion;
- $9$ para la segunda;
- $8$ para la tercera;
- $7$ para la cuarta.

Total:

$$
10\cdot 9\cdot 8\cdot 7.
$$

Este ejemplo muestra que el producto sigue vigente incluso cuando el numero de opciones cambia en cada etapa.

## Ejemplo 2: menus

Si un restaurante ofrece:

- $3$ entradas;
- $5$ platos fuertes;
- $4$ postres;

entonces el numero total de menus posibles es

$$
3\cdot 5\cdot 4=60.
$$

No se suman las opciones porque no se elige "una entrada o un plato o un postre": se elige una opcion de cada categoria.

## La regla de la suma

### Enunciado

Si una tarea puede realizarse de una entre varias maneras mutuamente excluyentes, y los casos tienen

$$
n_1,n_2,\dots,n_k
$$

posibilidades respectivamente, entonces el total es

$$
n_1+\cdots+n_k.
$$

### Idea

Cuando los casos son alternativos y disjuntos, no se forman tuplas; se hace una union disjunta de conjuntos de posibilidades.

## Ejemplo 3: elegir una letra

En un alfabeto de $26$ letras puede elegirse:

- una vocal: $5$ maneras;
- o una consonante: $21$ maneras.

Como los casos son disjuntos, el total es

$$
5+21=26.
$$

## La distincion decisiva: suma o producto

Gran parte de los errores combinatorios se reduce a una confusion elemental:

- si el procedimiento se realiza por etapas sucesivas, se multiplica;
- si el problema se divide en casos excluyentes, se suma.

### Ejemplo 4: placas de automovil

Supongamos una placa con:

- dos letras iniciales;
- tres digitos finales.

Con repeticiones permitidas, el total es

$$
26^2\cdot 10^3.
$$

No hay que sumar letras y digitos, porque la placa se construye tomando ambos en secuencia.

## Conteo con restricciones

El principio del conteo sigue siendo valido cuando las opciones disponibles dependen de elecciones anteriores.

## Ejemplo 5: cargos en un comite

De $8$ personas se eligen:

- presidente;
- vicepresidente;
- secretario,

sin repetir persona.

Entonces hay:

- $8$ opciones para presidente;
- $7$ para vicepresidente;
- $6$ para secretario.

Total:

$$
8\cdot 7\cdot 6.
$$

### Comentario

No estamos eligiendo un subconjunto de tres personas sin cargos, sino una asignacion ordenada de roles.

## Ejemplo 6: numeros pares de tres cifras

Cuantos numeros pares de tres cifras pueden formarse con digitos del $0$ al $9$?

### Paso 1: primera cifra

No puede ser $0$, asi que hay $9$ opciones.

### Paso 2: segunda cifra

Puede ser cualquiera de los $10$ digitos.

### Paso 3: ultima cifra

Debe ser par, asi que hay $5$ opciones:

$$
0,2,4,6,8.
$$

Total:

$$
9\cdot 10\cdot 5=450.
$$

## El complemento como tecnica de conteo

A veces es mas facil contar lo que no queremos y restar del total.

### Ejemplo 7: al menos una repeticion

Cuantas palabras de longitud $4$ con letras del alfabeto ingles tienen al menos una letra repetida?

Con repeticiones permitidas, el total es

$$
26^4.
$$

Sin repeticiones:

$$
26\cdot 25\cdot 24\cdot 23.
$$

Por tanto, las que tienen al menos una repeticion son

$$
26^4-26\cdot 25\cdot 24\cdot 23.
$$

### Leccion

El complemento es una estrategia, no un principio distinto. Reduce un conteo dificil a otro mas facil.

## Conteo mediante bijecciones

Otra idea muy poderosa es traducir un problema a otro equivalente cuyo conteo sea evidente.

### Ejemplo 8: cadenas binarias y subconjuntos

El numero de subconjuntos de un conjunto con $n$ elementos es igual al numero de cadenas binarias de longitud $n$.

### Justificacion

A cada subconjunto se le asocia su vector indicador:

- $1$ si el elemento pertenece;
- $0$ si no pertenece.

Como hay $2$ opciones por cada una de las $n$ posiciones, el total es

$$
2^n.
$$

Este tipo de argumento es combinatoriamente muy valioso porque convierte seleccion en codificacion.

## Orden importa o no importa

Buena parte del conteo se decide respondiendo esta pregunta:

> El resultado cambia si intercambiamos el orden de las elecciones?

Si importa, suelen aparecer productos tipo arreglos o permutaciones. Si no importa, aparecen combinaciones o subconjuntos.

### Ejemplo 9

Elegir presidente y secretario de $10$ personas no es lo mismo que elegir un equipo de dos personas sin cargos.

- con cargos: importa el orden, total

$$
10\cdot 9;
$$

- sin cargos: no importa, total

$$
\binom{10}{2}.
$$

## Principio del producto en arboles de decision

Una forma visual de usar el principio del conteo es mediante arboles.

Cada nivel del arbol representa una etapa, y cada camino completo desde la raiz hasta una hoja representa un resultado final. El conteo de hojas reproduce el producto de opciones por etapa.

Este lenguaje es especialmente util cuando algunas ramas tienen diferente numero de continuaciones.

## Ejemplo 10: selecciones condicionales

Una tienda vende camisas:

- rojas, azules o negras;
- tallas chica, mediana o grande;
- pero el modelo negro no existe en talla chica.

El conteo puede hacerse por casos:

- roja: $3$ tallas;
- azul: $3$ tallas;
- negra: $2$ tallas.

Total:

$$
3+3+2=8.
$$

Aqui no conviene usar un producto uniforme porque las restricciones rompen la simetria.

## Formula general para conteo por etapas dependientes

Si en la etapa $j$ el numero de opciones depende de lo ya elegido, el principio del producto sigue siendo correcto, siempre que se cuenten adecuadamente las opciones disponibles en cada rama.

Matematicamente, si cada camino tiene:

- $m_1$ opciones al principio;
- despues $m_2(a_1)$ opciones;
- luego $m_3(a_1,a_2)$;

y asi sucesivamente, entonces el conteo total se obtiene sumando sobre ramas o descomponiendo en casos. No siempre hay una sola formula cerrada, pero el principio estructural es el mismo.

## Relacion con probabilidad clasica

En un modelo finito equiprobable,

$$
P(A)=\frac{|A|}{|\Omega|}.
$$

Por tanto, la probabilidad depende enteramente de saber contar:

- el numero total de resultados elementales;
- el numero de resultados favorables.

Muchos problemas de probabilidad elemental fallan no por probabilidad, sino por un error combinatorio previo.

## Error comun 1: sumar cuando hay etapas

Si el proceso requiere tomar decisiones sucesivas, las alternativas se combinan y el conteo correcto suele ser un producto, no una suma.

## Error comun 2: multiplicar cuando los casos son alternativos

Si el problema se divide en escenarios mutuamente excluyentes, se suman sus conteos. Multiplicar en ese contexto suele inflar absurdamente el resultado.

## Error comun 3: no fijar el espacio elemental correcto

En dos dados, las sumas posibles son

$$
2,\dots,12,
$$

pero no son equiprobables. El espacio elemental correcto no es el conjunto de sumas, sino el de pares ordenados

$$
(i,j).
$$

## Error comun 4: no distinguir entre ordenado y no ordenado

Elegir $A$ luego $B$ puede ser:

- distinto de elegir $B$ luego $A$;
- o exactamente lo mismo.

Si no se decide esto al principio, todo el conteo posterior puede quedar mal.

## Practica guiada

### Ejercicio 1

Cuantos numeros de tres cifras pueden formarse con los digitos

$$
1,2,3,4,5
$$

si se permiten repeticiones?

#### Solucion

Cada posicion tiene $5$ opciones, asi que el total es

$$
5^3=125.
$$

### Ejercicio 2

Cuantas palabras de longitud $3$ pueden formarse con las letras

$$
A,B,C,D
$$

sin repeticion?

#### Solucion

Hay:

- $4$ opciones para la primera letra;
- $3$ para la segunda;
- $2$ para la tercera.

Total:

$$
4\cdot 3\cdot 2=24.
$$

### Ejercicio 3

Cuantos subconjuntos tiene un conjunto de $6$ elementos?

#### Solucion

Cada elemento puede estar o no estar en el subconjunto. Son $2$ opciones por elemento, asi que el total es

$$
2^6=64.
$$

## Cierre

El principio fundamental del conteo es la algebra elemental de los procesos discretos. Su importancia real no esta en memorizar "se suma o se multiplica", sino en aprender a:

- identificar etapas;
- separar casos;
- reconocer restricciones;
- usar complementos;
- construir bijecciones.

Con eso, muchos problemas de probabilidad discreta dejan de ser una lista de formulas y pasan a ser problemas de estructura.
