---
title: Conjuntos y subconjuntos
description: Definiciones fundamentales de teoria de conjuntos, subconjuntos, universo y cardinalidad.
---

# Conjuntos y subconjuntos

## Motivacion e intuicion

Un conjunto es una coleccion de objetos distintos, llamados elementos o miembros. Los conjuntos son el fundamiento de las matematicas discretas y aparecen en virtually todas las areas de las matematicas y la ciencias de la computacion.

## Definicion formal

Un **conjunto** es una coleccion no ordenada de objetos distintos. Si $x$ es un elemento del conjunto $A$, escribimos:

$$x \in A$$

Si $x$ no pertenece a $A$:

$$x \notin A$$

## Formas de representar conjuntos

### Por extension

Liste todos los elementos entre llaves:

$$A = \{1, 2, 3, 4, 5\}$$

### Por comprension

Describa la propiedad que cumplen los elementos:

$$A = \{x : x \text{ es un numero natural par menor que } 10\} = \{2, 4, 6, 8\}$$

## Subconjuntos

### Definicion

$A$ es subconjunto de $B$ si todo elemento de $A$ tambien pertenece a $B$:

$$A \subseteq B$$

### Subconjunto propio

$A$ es subconjunto propio de $B$ si $A \subseteq B$ y $A \neq B$:

$$A \subset B$$

### Conjuntos iguales

$$A = B \iff A \subseteq B \text{ y } B \subseteq A$$

## Conjunto universo

El conjunto universo $U$ contiene todos los elementos relevantes para una discusion particular.

## Conjunto vacio

El conjunto vacio no tiene elementos:

$$\emptyset = \{\}$$

Propiedad: $\emptyset \subseteq A$ para cualquier conjunto $A$.

## Cardinalidad

### Conjuntos finitos

$$|A| = n \text{ si } A \text{ tiene } n \text{ elementos}$$

### Conjuntos infinitos

- Numerable: tiene la misma cardinalidad que $\mathbb{N}$
- No numerable: mayor cardinalidad que $\mathbb{N}$

## Ejemplos

### Ejemplo 1: Numeros

$$\mathbb{N} = \{0, 1, 2, 3, \ldots\}$$
$$\mathbb{Z} = \{\ldots, -2, -1, 0, 1, 2, \ldots\}$$
$$\mathbb{Q} = \{a/b : a, b \in \mathbb{Z}, b \neq 0\}$$
$$\mathbb{R} = \text{todos los numeros reales}$$

### Ejemplo 2: Conjuntos de letras

$$A = \{a, b, c\}$$

$$|A| = 3$$

### Ejemplo 3: Subconjuntos

$$\{1, 2\} \subseteq \{1, 2, 3\}$$

$$\{1, 4\} \nsubseteq \{1, 2, 3\}$$

## Propiedades fundamentales

### Transitividad

Si $A \subseteq B$ y $B \subseteq C$, entonces $A \subseteq C$.

### Inclusion del vacio

$$\emptyset \subseteq A$$ para todo $A$.

### Union consigo mismo

$$A \subseteq A$$

## Ejercicios

### Ejercicio 1

Liste los elementos del conjunto $\{x \in \mathbb{N} : x < 5\}$.

### Ejercicio 2

Verifique que $\{1, 2\} \subseteq \{1, 2, 3\}$.

### Ejercicio 3

Cuantos subconjuntos tiene $\{1, 2, 3\}$?

### Ejercicio 4

Es $\emptyset = \{\emptyset\}$?

### Ejercicio 5

Calcule la cardinalidad de $\{a, b, c, d, e\}$.

### Ejercicio 6

Liste todos los subconjuntos de $\{1, 2\}$.

### Ejercicio 7

Es $\{\emptyset\}$ vacio?

### Ejercicio 8

Exprese por comprension: $A = \{2, 4, 6, 8\}$.

### Ejercicio 9

Verifique $\{1\} \subseteq \{1, 2\}$.

### Ejercicio 10

Cuantos elementos tiene $\mathcal{P}(\{1, 2, 3\})$?

## Soluciones

### Solucion 1

$\{0, 1, 2, 3, 4\}$

### Solucion 2

Todo elemento de $\{1, 2\}$ esta en $\{1, 2, 3\}$.

### Solucion 3

$2^3 = 8$ subconjuntos.

### Solucion 4

No. $\emptyset$ no tiene elementos; $\{\emptyset\}$ tiene un elemento (el conjunto vacio).

### Solucion 5

$|A| = 5$

### Solucion 6

$\emptyset, \{1\}, \{2\}, \{1, 2\}$

### Solucion 7

No, tiene un elemento.

### Solucion 8

$A = \{x \in \mathbb{N} : x \text{ es par y } x \leq 8\}$

### Solucion 9

$1 \in \{1, 2\}$, luego $\{1\} \subseteq \{1, 2\}$.

### Solucion 10

$|\mathcal{P}(\{1, 2, 3\})| = 2^3 = 8$.

## Teoremas avanzados y demostraciones

### Teorema 1: Caracterizacion de subconjuntos

Sean $A$ y $B$ conjuntos. Entonces $A \subseteq B$ si y solo si $A \cap B = A$.

**Demostracion.** 
($\Rightarrow$) Si $A \subseteq B$, entonces todo elemento de $A$ pertenece a $B$, luego $A \cap B = A$.

($\Leftarrow$) Si $A \cap B = A$, entonces para todo $x \in A$, $x \in A \cap B$, luego $x \in B$. Por tanto $A \subseteq B$. $\blacksquare$

### Teorema 2: Principio de Extension

Dos conjuntos $A$ y $B$ son iguales si y solo si tienen exactamente los mismos elementos.

**Demostracion.** La demostracion directa sigue de la definicion de igualdad de conjuntos. $\blacksquare$

### Teorema 3: Cardinalidad del conjunto potencia

Para cualquier conjunto finito $A$ con $|A| = n$, se tiene $|\mathcal{P}(A)| = 2^n$.

**Demostracion.** Cada elemento de $A$ tiene dos opciones: estar o no estar en un subconjunto. Por el principio del producto, hay $2^n$ formas de construir un subconjunto. $\blacksquare$

### Teorema 4: Inclusion transitiva

Si $A \subseteq B$ y $B \subseteq C$, entonces $A \subseteq C$.

**Demostracion.** Para todo $x \in A$, por $A \subseteq B$ tenemos $x \in B$, y por $B \subseteq C$ tenemos $x \in C$. Luego $A \subseteq C$. $\blacksquare$

### Teorema 5: Unicidad del conjunto vacio

Existe un unico conjunto $\emptyset$ tal que $\emptyset \subseteq A$ para todo conjunto $A$.

**Demostracion.** Supongamos existen dos conjuntos vacios $\emptyset_1$ y $\emptyset_2$. Por definicion, $\emptyset_1 \subseteq \emptyset_2$ y $\emptyset_2 \subseteq \emptyset_1$, luego $\emptyset_1 = \emptyset_2$. $\blacksquare$

## Direcciones de investigacion y problemas abiertos

1. **Teoria de cardinales grandes:** El estudio de cardinalidades infinitas y su jerarquia (cardinales de Mahlo, inaccesibles, medibles) constituye un area activa de la teoria de conjuntos.

2. **Axioma de eleccion:** La relacion entre el axioma de eleccion y various resultados matematicos sigue siendo objeto de investigacion.

3. **Conjuntos borrosos:** La extension de la teoria de conjuntos clasica a conjuntos con grados de pertenencia variable presenta problemas abierto en logica y aplicaciones.

4. **Teoria de modelos y conjuntos:** La construccion de modelos no estandar de la teoria de conjuntos permite explorar la consistencia de diversos axiomas.

## Ejercicios adicionales

### Ejercicio 11

Demuestre que si $A \subseteq B$ y $B \subseteq C$, entonces $A \subseteq C$ usando la definicion de subconjunto.

### Ejercicio 12

Calcule $|\mathcal{P}(\mathcal{P}(\emptyset))|$. Justifique su respuesta.

### Ejercicio 13

Sea $A = \{\emptyset, \{\emptyset\}, \{\emptyset, \{\emptyset\}\}\}$. Calcule $|A|$ y $|\mathcal{P}(A)|$.

### Ejercicio 14

Demuestre que $\mathcal{P}(A) \subseteq \mathcal{P}(B)$ si y solo si $A \subseteq B$.

### Ejercicio 15

Determine si $\{\{\emptyset\}\} \subseteq \mathcal{P}(\emptyset)$. Justifique.

## Soluciones adicionales

### Solucion 11

Sea $x \in A$. Como $A \subseteq B$, $x \in B$. Como $B \subseteq C$, $x \in C$. Luego todo elemento de $A$ esta en $C$, hence $A \subseteq C$.

### Solucion 12

$\emptyset$ tiene 0 elementos, luego $\mathcal{P}(\emptyset) = \{\emptyset\}$ tiene $2^0 = 1$ elemento. Por tanto $|\mathcal{P}(\mathcal{P}(\emptyset))| = 2^1 = 2$.

### Solucion 13

$A$ tiene 3 elementos, luego $|A| = 3$ y $|\mathcal{P}(A)| = 2^3 = 8$.

### Solucion 14

($\Rightarrow$) Si $\mathcal{P}(A) \subseteq \mathcal{P}(B)$, entonces para todo $x \in A$, el conjunto $\{x\} \in \mathcal{P}(A)$, luego $\{x\} \in \mathcal{P}(B)$, lo que implica $x \in B$. Thus $A \subseteq B$.

($\Leftarrow$) Si $A \subseteq B$, cualquier $X \in \mathcal{P}(A)$ es un subconjunto de $A$, hence de $B$, so $X \in \mathcal{P}(B)$. Thus $\mathcal{P}(A) \subseteq \mathcal{P}(B)$.

### Solucion 15

$\mathcal{P}(\emptyset) = \{\emptyset\}$. El unico elemento de $\{\{\emptyset\}\}$ es $\{\emptyset\}$, que no pertenece a $\{\emptyset\}$, hence la inclusion es falsa.

## Referencias

1. Halmos, P. R. (1974). *Naive Set Theory*. Springer-Verlag.
2. Jech, T. (2006). *Set Theory: The Third Millennium Edition*. Springer.
3. Kunen, K. (1980). *Set Theory: An Introduction to Independence Proofs*. North-Holland.
4. Devlin, K. (1979). *Fundamentals of Contemporary Set Theory*. Springer-Verlag.
5. Monk, J. D. (1976). *Introduction to Set Theory*. McGraw-Hill.
