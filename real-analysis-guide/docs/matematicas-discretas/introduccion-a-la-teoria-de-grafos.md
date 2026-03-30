# Introduccion a la Teoria de Grafos

## Objetivo del tema

Introducir los conceptos fundamentales de la teoría de grafos, estableciendo la terminología básica y las definiciones esenciales.

## 1. Definicion de grafo

### 1.1 Componentes basicos

Un grafo $G$ consiste de:
- Un conjunto de vértices $V(G)$
- Un conjunto de aristas $E(G) \subseteq \{\{v,w\} : v,w \in V\}$

### 1.2 Notacion

$$G = (V, E)$$

### 1.3 Ejemplos

- Grafo trivial: $V = \{v\}, E = \emptyset$
- Grafo completo $K_n$: $|V| = n$, toda arista posible presente

## 2. Tipos de grafos

### 2.1 Grafo simple

Sin bucles (aristas de un vértice a sí mismo) y sin aristas múltiples.

### 2.2 Multigrafo

Permite aristas múltiples entre dos vértices.

### 2.3 Grafo dirigido

Las aristas tienen dirección: pares ordenados $(v, w)$.

### 2.4 Grafo no dirigido

Las aristas no tienen dirección: $\{v, w\}$.

## 3. Terminologia

### 3.1 Adyacencia

$v$ es adyacente a $w$ si $\{v,w\} \in E$.

### 3.2 Grado

El grado de un vértice $v$ es el número de aristas incidentes:
$$\deg(v) = |\{e \in E : v \in e\}|$$

### 3.3 neighbors

$$N(v) = \{w \in V : \{v,w\} \in E\}$$

## 4. Subgrafos

### 4.1 Definicion

$H$ es subgrafo de $G$ si $V(H) \subseteq V(G)$ y $E(H) \subseteq E(G)$.

### 4.2 Subgrafo generador

Usa todos los vértices.

### 4.3 Subgrafo inducido

Usa un subconjunto de vértices y todas las aristas entre ellos.

## 5. Representaciones

### 5.1 Lista de adyacencia

Para cada vértice, lista de vecinos.

### 5.2 Matriz de adyacencia

$M[i,j] = 1$ si $\{v_i, v_j\} \in E$, sino 0.

## 6. Ejercicios

### Ejercicio 1

Dibujar $K_3$ y列出 sus aristas.

### Ejercicio 2

Calcular el grado de cada vértice en un ciclo $C_5$.

### Ejercicio 3

Si $|V| = 4$ y $|E| = 3$, ¿puede el grafo ser completo?

### Ejercicio 4

Encontrar el grafo complemento de $G = (\{1,2,3,4\}, \{\{1,2\}, \{2,3\}\})$.

### Ejercicio 5

Verificar que $\sum_{v \in V} \deg(v) = 2|E|$.

### Ejercicio 6

Construir la matriz de adyacencia de $P_3$ (camino de 3 vértices).

### Ejercicio 7

Encontrar todos los subgrafos de $K_2$.

### Ejercicio 8

Calcular el grado máximo y mínimo en un grafo de 5 vértices.

### Ejercicio 9

Explicar la diferencia entre grafo simple y multigrafo.

### Ejercicio 10

Encontrar el número de aristas en $K_n$.

### Ejercicio 11

Si $\deg(v) = 3$ para todo vértice en un grafo de 6 vértices, ¿cuántas aristas tiene?

### Ejercicio 12

Construir la lista de adyacencia de un ciclo $C_4$.

### Ejercicio 13

Demostrar que no puede haber un grafo con un vértice de grado -1.

### Ejercicio 14

Encontrar el grafo bipartito completo $K_{2,3}$.

### Ejercicio 15

Verificar que $K_n$ tiene $n(n-1)/2$ aristas.

## Soluciones

### Solución 1

$K_3$: vértices $\{1,2,3\}$, aristas $\{\{1,2\}, \{1,3\}, \{2,3\}\}$.

### Solución 2

Cada vértice en $C_5$ tiene grado 2.

### Solución 3

NO. $K_4$ tiene $4(3)/2 = 6$ aristas.

### Solución 4

$G^c$ tiene las aristas que no están en $G$: $\{\{1,3\}, \{1,4\}, \{2,4\}, \{3,4\}\}$.

### Solución 5

Cada arista contribuye 1 al grado de cada uno de sus dos extremos.

### Solución 6

$M = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}$

### Solución 7

$\emptyset$, $\{\{1,2\}\}$, $K_2$.

### Solución 8

Máximo: $n-1 = 4$, Mínimo: $0$.

### Solución 9

Multigrafo permite múltiples aristas entre el mismo par de vértices.

### Solución 10

$\binom{n}{2} = n(n-1)/2$.

### Solución 11

$6 \cdot 3 / 2 = 9$ aristas.

### Solución 12

1: {2, 4}, 2: {1, 3}, 3: {2, 4}, 4: {1, 3}.

### Solución 13

El grado es siempre un número no negativo.

### Solución 14

Conjunto bipartito $\{a,b\}$ y $\{1,2,3\}$, todas las aristas entre los conjuntos.

### Solución 15

Cada par de vértices genera una arista, hay $\binom{n}{2}$ pares.

## Direcciones de investigacion y problemas abiertos

1. **Teoria espectral de grafos:** El estudio de los autovalores de la matriz de adyacencia y sus relaciones con propiedades estructurales del grafo es un area activa con aplicaciones en Quimica computacional y redes sociales.

2. **Grafos aleatorios:** El modelo de Erdos-Renyi y sus generalizaciones permiten estudiar propiedades emergentes en redes grandes.

3. **Teoria de grafos extremales:** Los teoremas de Turan, Ramsey y extremales studian las maximas/minimas aristas posibles bajo restricciones.

4. **Grafos y algebra:** Las conexiones entre teoria de grafos y algebras de Boole, grupos y espacios vectoriales son fundamentales en matematica discreta.

## Referencias

1. Diestel, R. (2017). *Graph Theory*. Springer.
2. Bondy, J.A. & Murty, U.S.R. (2008). *Graph Theory*. Springer.
3. Bollobas, B. (1998). *Modern Graph Theory*. Springer.
4. West, D.B. (2001). *Introduction to Graph Theory*. Prentice Hall.
5. Godsil, C. & Royle, G. (2001). *Algebraic Graph Theory*. Springer.
