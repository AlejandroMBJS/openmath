# Representacion de Grafos en la Memoria Computacional

## Objetivo del tema

Estudiar las estructuras de datos para representar grafos en computadoras, analizando sus ventajas y desventajas.

## 1. Matriz de adyacencia

### 1.1 Estructura

Para un grafo con $n$ vértices, usamos una matriz $n \times n$:
$$M[i,j] = \begin{cases} 1 & \text{si } \{v_i, v_j\} \in E \\ 0 & \text{en caso contrario} \end{cases}$$

### 1.2 Ventajas

- Acceso $O(1)$ para verificar adyacencia
- Fácil implementar operaciones de grafos

### 1.3 Desventajas

- $O(n^2)$ espacio, incluso para grafos dispersos
- Operaciones como listar vecinos son $O(n)$

## 2. Lista de adyacencia

### 2.1 Estructura

Para cada vértice, almacenar una lista de sus vecinos:
```python
adj = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1]
}
```

### 2.2 Ventajas

- Espacio $O(V + E)$
- Iterar vecinos es eficiente

### 2.3 Desventajas

- Verificar adyacencia $O(\deg(v))$
- Más complejo de implementar

## 3. Lista de aristas

### 3.1 Estructura

Almacenar todas las aristas como pares:
```python
edges = [(0, 1), (0, 2), (1, 2)]
```

### 3.2 Variante con weights

```python
edges = [(0, 1, 5), (0, 2, 3)]
```

### 3.3 Ventajas

- Espacio $O(E)$
- Bueno para algoritmos de ordenamiento de aristas

### 3.4 Desventajas

- Operaciones de adyacencia $O(E)$

## 4. Representacion de grafos dirigidos

### 4.1 Matriz de adyacencia dirigida

$M[i,j] = 1$ solo si hay arco de $v_i$ a $v_j$.

### 4.2 Lista de sucesores

Para cada vértice, lista de vértices a los que apunta.

### 4.3 Lista de predecesores

Para cada vértice, lista de vértices que apuntan a él.

## 5. Elección de representacion

### 5.1 Factores a considerar

- Densidad del grafo
- Operaciones frecuentes
- Restricciones de memoria

### 5.2 Guía

- Grafo denso: matriz de adyacencia
- Grafo disperso: lista de adyacencia
- Few edges: lista de aristas

## 6. Ejercicios

### Ejercicio 1

Representar $K_3$ usando matriz de adyacencia.

### Ejercicio 2

Implementar la lista de adyacencia para un camino $P_4$.

### Ejercicio 3

Calcular el espacio de matriz de adyacencia para $K_{100}$.

### Ejercicio 4

Comparar espacio de lista vs matriz para $P_{1000}$.

### Ejercicio 5

Encontrar la representación más eficiente para un grafo de 1000 vértices y 5 aristas.

### Ejercicio 6

Implementar lista de aristas para el mismo grafo.

### Ejercicio 7

Verificar que la matriz de adyacencia de un grafo no dirigido es simétrica.

### Ejercicio 8

Encontrar el número de elementos no cero en la matriz de $K_{n}$.

### Ejercicio 9

Implementar verificación de adyacencia con lista de adyacencia.

### Ejercicio 10

Calcular el espacio de lista de adyacencia para $C_{100}$.

### Ejercicio 11

Explicar por qué la lista de adyacencia es mejor para grafos de redes sociales.

### Ejercicio 12

Representar un grafo con pesos usando lista de adyacencia.

### Ejercicio 13

Calcular la complejidad de verificar adyacencia en cada representación.

### Ejercicio 14

Encontrar la representación apropiada para el grafo de la internet.

### Ejercicio 15

Comparar el tiempo de iterar todos los vecinos en ambas representaciones.

## Soluciones

### Solución 1

$M = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}$

### Solución 2

```python
adj = {0: [1], 1: [0, 2], 2: [1, 3], 3: [2]}
```

### Solución 3

$100 \times 100 = 10,000$ elementos.

### Solución 4

Lista: $O(1000 + 999) \approx 2000$, Matriz: $O(1,000,000)$

### Solución 5

Lista de aristas o lista de adyacencia.

### Solución 6

edges = [(v1, v2), ...]

### Solución 7

Por simetría de aristas no dirigidas.

### Solución 8

$n(n-1)/2$ más la diagonal (puede ser 0).

### Solución 9

Buscar en la lista de vecinos.

### Solución 10

$O(100 + 100) = O(200)$

### Solución 11

Grafos de redes sociales son dispersos: cada persona conoce a pocas.

### Solución 12

```python
adj = {0: [(1, 5), (2, 3)], ...}
```

### Solución 13

Matriz: $O(1)$, Lista: $O(\deg(v))$, Aristas: $O(E)$

### Solución 14

Lista de adyacencia (esparso y dinámico).

### Solución 15

Matriz: $O(n)$, Lista: $O(\deg(v))$ promedio.

---

## Direcciones de Investigación y Problemas Abiertos

### 1. Representación Óptima para Grafos Dinámicos

El problema de mantener estructuras de datos eficientes para grafos que cambian dinámicamente (inserciones y eliminaciones de aristas) permanece activo:

- **Dynamic graph algorithms**: Estructuras que soportan actualizaciones en tiempo sublineal
- **Graph streaming**: Algoritmos que procesan grafos en una sola pasada con memoria limitada

### 2. Representación de Grafos con Atributos

- Grafos con pesos: ¿Cómo optimizar para diferentes tipos de pesos?
- Grafos etiquetados: Representaciones para búsqueda eficiente de patrones

### 3. Problemas Abiertos

1. ¿Cuál es la representación óptima para grafos con estructura de comunidad?
2. ¿Cómo representar grafos que no caben en memoria principal?
3. ¿Qué representaciones optimizan el cache misses en arquitecturas modernas?

---

## Referencias

1. Cormen, T.H.; Leiserson, C.E.; Rivest, R.L.; Stein, C. (2009). *Introduction to Algorithms* (3rd ed.). MIT Press.

2. Tarjan, R.E. (1972). "Depth-First Search and Linear Graph Algorithms". *SIAM Journal on Computing*, 1(2), 146-160.

3. Even, S. (2011). *Graph Algorithms* (2nd ed.). Cambridge University Press.

4. Gabow, H.N.; Myers, E.W. (1978). "Finding Edge-Disjoint Spanning Trees in Graphs". *Information Processing Letters*, 6(2), 59-61.

5. Mehlhorn, K. (1984). *Data Structures and Algorithms 1: Sorting and Searching*. Springer.

6. Goodrich, M.T.; Tamassia, R. (2015). *Data Structures and Algorithms in Java*. Wiley.

7. Kleinberg, J.; Tardos, E. (2006). *Algorithm Design*. Pearson.

8. Dasgupta, S.; Papadimitriou, C.; Vazirani, U. (2006). *Algorithms*. McGraw-Hill.
