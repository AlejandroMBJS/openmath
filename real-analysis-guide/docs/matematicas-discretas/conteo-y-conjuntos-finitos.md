# Conteo y Conjuntos Finitos

## Objetivo del tema

Estudiar las técnicas fundamentales para contar elementos en conjuntos finitos y las propiedades cardinales.

## 1. Cardinalidad de conjuntos

### 1.1 Definicion

El cardinal de un conjunto finito $A$, denoted $|A|$, es el número de elementos.

### 1.2 Conjuntos finitos

Un conjunto es finito si existe una biyección con $\{1, 2, \ldots, n\}$ para algún $n \in \mathbb{N}$.

### 1.3 Ejemplos

- $|\{a, b, c\}| = 3$
- $|\emptyset| = 0$
- $|\mathcal{P}(\{1,2\})| = 4$

## 2. Principios basicos de conteo

### 2.1 Principio de la suma

Si $A$ y $B$ son disjuntos:
$$|A \cup B| = |A| + |B|$$

En general:
$$|A_1 \cup A_2 \cup \ldots \cup A_n| = \sum_{i=1}^n |A_i|$$ si los $A_i$ son disjuntos.

### 2.2 Principio del producto

$$|A \times B| = |A| \cdot |B|$$

### 2.3 Principio de inclusion-exclusion general

$$|A \cup B| = |A| + |B| - |A \cap B|$$

## 3. Subconjuntos y el conjunto potencia

### 3.1 Teorema

Si $|A| = n$, entonces $|\mathcal{P}(A)| = 2^n$.

### 3.2 Demostracion

Cada elemento puede estar o no estar en un subconjunto: $2$ opciones por elemento, $2^n$ total.

### 3.3 Corolario

$$\sum_{k=0}^n \binom{n}{k} = 2^n$$

## 4. Conjuntos numerables

### 4.1 Definicion

Un conjunto es numerable si existe una biyección con $\mathbb{N}$.

### 4.2 Ejemplos

- $\mathbb{N}$ es numerable
- $\mathbb{Z}$ es numerable
- $\mathbb{Q}$ es numerable

### 4.3 No numerabilidad

$\mathbb{R}$ no es numerable (demostración de Cantor).

## 5. Principio del palomar (pigeonhole)

### 5.1 Principio basico

Si $n$ palomas se distribuyen en $m$ huecos y $n > m$, algún hueco tiene al menos 2 palomas.

### 5.2 Forma generalizada

Si $n$ objetos se distribuyen en $m$ categorías y $n > m$, alguna categoría tiene $\lceil n/m \rceil$ objetos.

## 6. Ejercicios

### Ejercicio 1

Calcular $|A|$ si $A = \{x : x \text{ es vocal de la palabra "matematicas"}\}$.

### Ejercicio 2

Si $|A| = 5$ y $|B| = 3$, calcular $|A \times B|$ y $|\mathcal{P}(A)|$.

### Ejercicio 3

En una encuesta, 30 personas prefieren A, 20 prefieren B, y 10 prefieren ambas. ¿Cuántas personas fueron encuesta?

### Ejercicio 4

Verificar que $\sum_{k=0}^n \binom{n}{k} = 2^n$ para $n = 3$.

### Ejercicio 5

Demostrar que todo subconjunto de un conjunto numerable es numerable.

### Ejercicio 6

Si hay 10 profesores y 5 cursos, demuestre que algún curso tiene al menos 2 profesores.

### Ejercicio 7

Calcular el número de subconjuntos de $\{1,2,3,4,5\}$ que contienen al menos un elemento.

### Ejercicio 8

Sea $A = \{1,2,3\}$ y $B = \{a,b\}$. Encontrar $|A \cup B|$ si son disjuntos.

### Ejercicio 9

Demostrar que $\mathbb{Z} \times \mathbb{N}$ es numerable.

### Ejercicio 10

Si $|A| = 100$, ¿cuántos subconjuntos de $A$ tienen cardinalidad par?

### Ejercicio 11

En una fiesta hay 100 personas. Demostrar que al menos 2 cumplen años el mismo mes.

### Ejercicio 12

Calcular $|A \cap B|$ si $|A| = 50$, $|B| = 30$, $|A \cup B| = 65$.

### Ejercicio 13

Encontrar el número de funciones de un conjunto de 3 elementos a un conjunto de 2 elementos.

### Ejercicio 14

Demostrar que no existe una biyección entre $\mathbb{N}$ y $\mathbb{R}$.

### Ejercicio 15

Calcular el número de formas de elegir un subconjunto no vacío de un conjunto de 4 elementos.

## Soluciones

### Solución 1

$a, e, i$ aparecen, así que $|A| = 3$.

### Solución 2

$|A \times B| = 5 \cdot 3 = 15$

$|\mathcal{P}(A)| = 2^5 = 32$

### Solución 3

$|A \cup B| = 30 + 20 - 10 = 40$ personas.

### Solución 4

$\binom{3}{0} + \binom{3}{1} + \binom{3}{2} + \binom{3}{3} = 1 + 3 + 3 + 1 = 8 = 2^3$

### Solución 5

Todo subconjunto de un conjunto numerable es finito o numerable.

### Solución 6

10 profesores > 5 cursos, entonces algún curso tiene al menos 2.

### Solución 7

Total subconjuntos: $2^5 = 32$. Subconjunto vacío: 1. Entonces $32 - 1 = 31$.

### Solución 8

$|A| + |B| = 3 + 2 = 5$.

### Solución 9

$\mathbb{Z} \times \mathbb{N}$ es biyectable con $\mathbb{N}$ (enumerando por diagonales).

### Solución 10

$\sum_{k \text{ par}} \binom{100}{k} = 2^{99}$ (mitad de los subconjuntos).

### Solución 11

12 meses, 100 personas > 12 meses, entonces algún mes tiene al menos $\lceil 100/12 \rceil = 9$ personas.

### Solución 12

$|A \cap B| = |A| + |B| - |A \cup B| = 50 + 30 - 65 = 15$

### Solución 13

$2^3 = 8$ funciones (cada elemento tiene 2 opciones).

### Solución 14

$\mathbb{R}$ no es numerable (teorema de Cantor).

### Solución 15

$2^4 - 1 = 16 - 1 = 15$.

---

## Direcciones de Investigación y Problemas Abiertos

### 1. Teoría de Conjuntos Infinitos

- **Números cardinales**: Comparación de cardinalidades infinitas
- **Axioma de elección**: Sus consecuencias y equivalentes

### 2. Problemas Abiertos

1. ¿Cómo contar estructuras infinitas de manera efectiva?
2. ¿Qué propiedades de conteo se preservan bajo diferentes operaciones?

---

## Referencias

1. Halmos, P.R. (1974). *Naive Set Theory*. Springer.

2. Jech, T. (2006). *Set Theory* (3rd ed.). Springer.

3. Kunen, K. (1980). *Set Theory*. North-Holland.

4. Bartle, R.G. (1976). *The Elements of Real Analysis* (2nd ed.). Wiley.

5. Royden, H.L. (1988). *Real Analysis* (3rd ed.). Macmillan.
