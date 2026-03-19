---
title: Permutaciones
description: Ordenaciones, arreglos, permutaciones con y sin repeticion, permutaciones circulares y tecnicas clasicas de conteo ordenado.
---

# Permutaciones

## Motivacion

Las permutaciones aparecen cuando el orden importa. No basta elegir elementos; hay que organizarlos en una secuencia, una fila o una disposicion concreta.

Ejemplos:

- ordenar libros en un estante;
- asignar cargos distintos;
- formar palabras con letras dadas;
- sentar personas en una mesa;
- elegir y ordenar ganadores de un concurso.

## Permutaciones de $n$ objetos distintos

### Teorema 1

El numero de ordenaciones lineales de

$$
n
$$

objetos distintos es

$$
n!.
$$

### Demostracion

Para la primera posicion hay

$$
n
$$

opciones; para la segunda,

$$
n-1;
$$

y asi sucesivamente hasta llegar a

$$
1.
$$

Por el principio fundamental del conteo:

$$
n(n-1)\cdots 1=n!.
$$

## Ejemplo 1

Cuantas maneras hay de ordenar

$$
4
$$

libros distintos?

$$
4!=24.
$$

## Arreglos o variaciones sin repeticion

A veces no se ordenan todos los objetos, sino solo

$$
k
$$

de entre

$$
n.
$$

### Definicion

El numero de selecciones ordenadas de

$$
k
$$

objetos distintos tomados de un conjunto de

$$
n
$$

objetos distintos es

$$
P(n,k)=\frac{n!}{(n-k)!}.
$$

### Justificacion

Hay:

- 

$$
n
$$

opciones para la primera posicion;
- 

$$
n-1
$$

para la segunda;
- ...
- 

$$
n-k+1
$$

para la posicion

$$
k.
$$

Multiplicando:

$$
n(n-1)\cdots (n-k+1)=\frac{n!}{(n-k)!}.
$$

## Ejemplo 2

De

$$
10
$$

candidatos se eligen oro, plata y bronce. El numero de resultados posibles es

$$
P(10,3)=10\cdot 9\cdot 8=720.
$$

## Permutaciones con repeticion permitida

Si en cada posicion se puede repetir cualquiera de

$$
m
$$

simbolos, entonces las palabras de longitud

$$
k
$$

son

$$
m^k.
$$

### Ejemplo 3

Cuantas palabras de longitud

$$
5
$$

pueden formarse con el alfabeto binario

$$
\{0,1\}?
$$

La respuesta es

$$
2^5=32.
$$

## Permutaciones con elementos repetidos

Si algunos objetos son indistinguibles, la formula

$$
n!
$$

cuenta demasiadas veces.

### Teorema 2

Si entre

$$
n
$$

objetos hay:

- 

$$
n_1
$$

indistinguibles de un tipo,
- 

$$
n_2
$$

de otro,
- ...
- 

$$
n_r
$$

de otro,

con

$$
n_1+\cdots+n_r=n,
$$

entonces el numero de permutaciones distinguibles es

$$
\frac{n!}{n_1!\cdots n_r!}.
$$

### Idea de la demostracion

Si fingimos que todos los objetos son distintos, obtenemos

$$
n!
$$

ordenaciones. Pero permutar internamente los objetos indistinguibles no produce una disposicion nueva. Por eso hay que dividir por

$$
n_1!\cdots n_r!.
$$

## Ejemplo 4: palabra "CASA"

La palabra tiene

$$
4
$$

letras, con la letra

$$
A
$$

repetida dos veces. El numero de ordenaciones distinguibles es

$$
\frac{4!}{2!}=12.
$$

## Ejemplo 5: palabra "MISSISSIPPI"

La palabra tiene:

- 

$$
11
$$

letras;
- 

$$
4
$$

letras

$$
I;
$$

- 

$$
4
$$

letras

$$
S;
$$

- 

$$
2
$$

letras

$$
P;
$$

- 

$$
1
$$

letra

$$
M.
$$

Luego el numero de permutaciones distinguibles es

$$
\frac{11!}{4!\,4!\,2!}.
$$

## Permutaciones circulares

Cuando los objetos se disponen en circulo, rotar toda la configuracion no genera una posicion nueva.

### Teorema 3

El numero de ordenaciones circulares de

$$
n
$$

objetos distintos es

$$
(n-1)!.
$$

### Demostracion

Fijamos un objeto para romper la simetria rotacional. Los restantes

$$
n-1
$$

se ordenan libremente alrededor de el.

## Ejemplo 6

Cuantas maneras hay de sentar

$$
6
$$

personas en una mesa redonda?

$$
(6-1)!=120.
$$

## Distincion entre circulares y lineales

Sentar personas en una fila y sentarlas en una mesa redonda no es el mismo problema. En fila, cada desplazamiento cambia la configuracion; en circulo, una rotacion global no.

## Permutaciones con bloques

Una tecnica frecuente consiste en tratar varios elementos como un bloque.

### Ejemplo 7

Cuantas maneras hay de ordenar las letras

$$
A,B,C,D,E
$$

si

$$
A
$$

y

$$
B
$$

deben quedar juntas?

Tratamos

$$
AB
$$

como un bloque. Entonces hay

$$
4!
$$

formas de ordenar

$$
(AB),C,D,E.
$$

Pero dentro del bloque puede estar

$$
AB
$$

o

$$
BA.
$$

Por tanto el total es

$$
2\cdot 4!=48.
$$

## Evitar sobreconteo

En problemas de permutaciones con restricciones suele ser necesario:

1. contar un conjunto mayor simple;
2. restar las configuraciones prohibidas;
3. o agrupar elementos repetidos o bloqueados.

La principal dificultad no es algebraica, sino estructural: entender que configuraciones se estan identificando o prohibiendo.

## Conexion con probabilidad

Si todas las permutaciones son equiprobables, una probabilidad puede calcularse como

$$
\frac{\text{numero de permutaciones favorables}}{\text{numero total de permutaciones}}.
$$

### Ejemplo 8

Al ordenar aleatoriamente

$$
5
$$

libros, la probabilidad de que dos libros dados queden juntos es

$$
\frac{2\cdot 4!}{5!}=\frac{2}{5}.
$$

## Permutaciones y factoriales

Los factoriales crecen muy deprisa:

$$
n!=1\cdot 2\cdot 3\cdots n.
$$

Este crecimiento rapido explica por que problemas combinatorios aparentemente pequenos producen cantidades enormes.

### Ejemplo 9

$$
10!=3628800.
$$

## Comentario teorico

Las permutaciones forman el grupo simetrico

$$
S_n,
$$

objeto central del algebra moderna. Aunque aqui solo interesa el conteo, esta observacion muestra que la combinatoria de ordenaciones tiene una estructura algebraica profunda.

## Errores frecuentes

- Usar

$$
n!
$$

cuando solo se ordenan

$$
k
$$

objetos de entre

$$
n.
$$
- Olvidar dividir por factoriales de repeticiones.
- Aplicar la formula lineal a un problema circular.
- Contar dos veces configuraciones equivalentes por rotacion o indistinguibilidad.

## Conclusion

Las permutaciones cuantifican el costo combinatorio del orden. Son el puente natural entre el principio del conteo y los modelos discretos donde la posicion importa. En probabilidad, muchas leyes finitas nacen exactamente de contar permutaciones favorables entre todas las posibles.
