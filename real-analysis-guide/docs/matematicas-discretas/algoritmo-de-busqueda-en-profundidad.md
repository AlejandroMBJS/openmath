# Algoritmos de Búsqueda: DFS y BFS

## Objetivo del tema

Desarrollar la teoría de algoritmos fundamentales de búsqueda en grafos, incluyendo análisis de complejidad, propiedades estructurales, y aplicaciones avanzadas en teoría de grafos y computación.

---

## 1. Búsqueda en Profundidad (DFS)

### 1.1 Algoritmo y Variantes

El algoritmo de Depth-First Search (DFS) explora un grafo siguiendo el principio de "profundidad primero", Backtracking cuando alcanza un vértice sin vecinos no visitados.

**Algoritmo Recursivo:**

```python
DFS(G, v):
    visited[v] = true
    for each neighbor u of v:
        if not visited[u]:
            DFS(G, u)
```

**Algoritmo Iterativo con Stack:**

```python
DFS_iterative(G, s):
    stack = [s]
    while stack:
        v = stack.pop()
        if not visited[v]:
            visited[v] = true
            for each neighbor u of v:
                if not visited[u]:
                    stack.append(u)
```

### 1.2 Análisis de Complejidad

**Teorema 1.1 (Complejidad de DFS)**: DFS visita todos los vértices y aristas exactamente una vez, con complejidad $O(V + E)$.

*Demostración*: Cada vértice se marca como visited exactamente una vez, resultando en $O(V)$ operaciones. Cada arista se examina exactamente una vez (desde cada extremo), resultando en $O(E)$ operaciones. El total es $O(V + E)$. $\square$

**Teorema 1.2 (Propiedad de tiempos)**: Para DFS en un grafo, los tiempos de entrada $tin[v]$ y salida $tout[v]$ satisfacen:
$$tin[parent] < tin[child] \quad \text{y} \quad tout[child] < tout[parent]$$

*Demostración*: Por la naturaleza recursiva de DFS, el descubrimiento de un vértice hijo ocurre después del descubrimiento del padre, y la terminación del procesamiento del hijo ocurre antes de la terminación del padre (porque el padre debe esperar a que todos sus hijos sean procesados). $\square$

### 1.3 Aplicaciones Fundamentales

DFS tiene múltiples aplicaciones en teoría de grafos:

- **Componentes fuertemente conexos**: Algoritmo de Tarjan
- **Orden topológico**: Para DAGs
- **Detección de ciclos**: En cualquier grafo dirigido
- **Puntos de articulación**: En grafos no dirigidos
- **Puentes**: Aristas cuyo removal incrementa componentes

### 1.4 Algoritmo de Tarjan para SCCs

**Teorema 1.3 (Tarjan)**: El algoritmo de Tarjan encuentra todos los componentes fuertemente conexos de un grafo dirigido en tiempo $O(V + E)$.

*Demostración*: El algoritmo mantiene una pila de vértices y calcula el valor $low[v]$ para cada vértice, representando el vértice de menor tiempo de descubrimiento reachable desde $v$ a través de la pila. Un vértice $v$ es la raíz de un SCC iff $low[v] = tin[v]$. La prueba de correctitud se basa en la invariant que la pila contiene exactamente los vértices del SCC actual durante la ejecución. $\square$

---

## 2. Búsqueda en Anchura (BFS)

### 2.1 Algoritmo

Breadth-First Search explora el grafo por niveles, visitando todos los vecinos de un vértice antes de pasar al siguiente nivel.

```python
BFS(G, s):
    queue.enqueue(s)
    visited[s] = true
    while queue not empty:
        v = queue.dequeue()
        for each neighbor u of v:
            if not visited[u]:
                visited[u] = true
                queue.enqueue(u)
```

### 2.2 Propiedades y Análisis

**Teorema 2.1 (Complejidad de BFS)**: BFS tiene complejidad $O(V + E)$ y encuentra el camino más corto (en número de aristas) desde el origen a cada vértice.

*Demostración*: Similar a DFS, cada vértice y arista se procesa exactamente una vez. Para la optimalidad, BFS procesa vértices en orden no decreciente de distancia desde $s$. Cuando un vértice $v$ es descubierto por primera vez, el camino encontrado tiene longitud $dist[v]$, y ningún camino más corto puede existir porque todos los vértices de distancia menor ya fueron procesados. $\square$

**Teorema 2.2 (Árbol BFS)**: El árbol BFS contiene el camino más corto desde $s$ a cada vértice alcanzable.

*Demostración*: Por la propiedad de procesamiento por niveles de BFS, el primer camino descubierto a cada vértice es el más corto en número de aristas. $\square$

### 2.3 Aplicaciones

- **Camino más corto**: En grafos no ponderados
- **Componentes conexos**: BFS desde cualquier vértice alcanza todo el componente
- **Bipartición**: Colorear por paridad de distancia
- **Centralidad**: Distancias desde un vértice

---

## 3. Análisis Comparativo

| Algoritmo | Estructura | Complejidad | Mejor para |
|-----------|------------|------------|------------|
| DFS | Stack/Pila | $O(V + E)$ | Profundidad, backtracking, SCCs |
| BFS | Cola/Queue | $O(V + E)$ | Distancias mínimas, niveles |

**Teorema 3.1 (Equivalencia de potencia)**: DFS y BFS visitan exactamente el mismo conjunto de vértices (los alcanzables desde el origen).

*Demostración*: Ambos algoritmos mantienen un conjunto de vértices visitados y exploran todos los vecinos de cada vértice visitado. La diferencia está solo en el orden de exploración, no en el conjunto de vértices alcanzados. $\square$

---

## 4. Orden Topológico

### 4.1 Definición y Propiedades

**Definición 4.1**: Un orden topológico de un DAG $G = (V, E)$ es una permutación $v_1, v_2, \ldots, v_n$ de $V$ tal que para toda arista $(u, v) \in E$, el índice de $u$ es menor que el de $v$.

**Teorema 4.1 (Caracterización)**: Un grafo tiene un orden topológico iff es un DAG.

*Demostración*: ($\Rightarrow$) Si existe un ciclo, no puede haber orden topológico porque las aristas del ciclo crearían una contradicción. ($\Leftarrow$) Si el grafo es un DAG, siempre existe un vértice sin predecesores (de lo contrario habría un ciclo por inducción). Ese vértice puede colocarse primero, y continuar recursivamente. $\square$

### 4.2 Algoritmo de Kahn

**Teorema 4.2 (Algoritmo de Kahn)**: El algoritmo de Kahn produce un orden topológico en tiempo $O(V + E)$.

*Demostración*: Mantenemos una cola de vértices con indegree 0. Extraemos un vértice, lo añadimos al orden, y reducimos el indegree de sus vecinos. Si algún vecino llega a indegree 0, lo encolamos. Si al procesar todos los vértices el orden tiene menos de $|V|$ elementos, el grafo tiene un ciclo. $\square$

---

## 5. Direcciones de Investigación y Problemas Abiertos

### 5.1 Algoritmos Paralelos

- **Parallel BFS/DFS**: Cómo aprovechar arquitecturas multinúcleo y GPUs
- **MapReduce para grafos**: Algoritmos escalables para grafos masivos

### 5.2 Grafos Dinámicos

- **Dynamic connectivity**: Mantener componentes bajo actualizaciones
- **Incremental BFS**: Actualizar distancias ante cambios en el grafo

### 5.3 Problemas Abiertos

1. ¿Cuál es el lower bound para BFS/DFS en el modelo de comparación?
2. ¿Cómo optimizar BFS para grafos con estructura de comunidad conocida?
3. ¿Exist algorithms para BFS que superen el bound de $O(V + E)$ en la práctica?

---

## 6. Ejercicios

### Ejercicio 1
Implementar DFS iterativo con stack y demostrar su equivalencia con la versión recursiva.

### Ejercicio 2
Probar formalmente que BFS encuentra caminos de longitud mínima en grafos no ponderados.

### Ejercicio 3
Implementar el algoritmo de Tarjan para encontrar todos los componentes fuertemente conexos.

### Ejercicio 4
Analizar la complejidad temporal y espacial de Kosaraju vs Tarjan para SCCs.

### Ejercicio 5
Usar DFS para detectar ciclos en un DAG. ¿Cómo.diffiere de la detección en grafos generales?

### Ejercicio 6
Demostrar que el número de puntos de articulación en un grafo con $n$ vértices es a lo sumo $n-2$.

### Ejercicio 7
Diseñar un algoritmo que encuentre todos los puentes de un grafo no dirigido en tiempo $O(V + E)$.

### Ejercicio 8
Probar que todo grafo directed acyclic tiene al menos un vértice con indegree 0.

### Ejercicio 9
Implementar el algoritmo de Kahn para ordenamiento topológico y analizar sus propiedades.

### Ejercicio 10
Demostrar que el árbol BFS contiene el camino más corto desde el origen a cada vértice.

### Ejercicio 11
Diseñar un algoritmo que use BFS para determinar si un grafo es bipartito.

### Ejercicio 12
Calcular el número de vértices en cada nivel del BFS para el grafo hipercubo $Q_n$.

### Ejercicio 13
Probar que todo grafo planar puede colorearse por niveles con a lo sumo 4 colores usando BFS.

### Ejercicio 14
Implementar DFS con tiempos de entrada y salida, y usarlo para encontrar puntos de articulación.

### Ejercicio 15
Analizar cómo el orden de vecinos afecta el comportamiento de DFS y sus propiedades.

---

## 7. Soluciones

### Solución Ejercicio 6
Sea $v$ un punto de articulación. Al remover $v$, el grafo se divide en $k$ componentes. Cada componente contiene al menos un vértice que solo se conecta al resto a través de $v$, hence hay al menos $k-1$ aristas de conexión. Para un grafo con $n$ vértices, el máximo de puntos de articulación ocurre cuando el grafo es un árbol: en un árbol hay exactamente $n-1$ puntos de articulación. $\square$

### Solución Ejercicio 8
En un DAG, no hay ciclos. Consideremos el grafo subyacente no dirigido. Si todo vértice tuviera indegree positivo, podríamos seguir predecessor indefinitely, creando un ciclo. Por reducción al absurdo, debe existir al menos un vértice con indegree 0. $\square$

### Solución Ejercicio 10
BFS procesa vértices en orden no decreciente de distancia. Cuando un vértice $v$ es descubierto desde $u$, $dist[v] = dist[u] + 1$. Supongamos que existe un camino más corto a $v$ de longitud $d < dist[v]$. Entonces $v$ habría sido descubierto desde el vértice en ese camino de distancia $d-1$, contradiction. $\square$

---

## Referencias

1. Tarjan, R.E. (1972). "Depth-first search and linear graph algorithms". *SIAM Journal on Computing*, 1(2), 146-160.

2. Cormen, T.H.; Leiserson, C.E.; Rivest, R.L.; Stein, C. (2009). *Introduction to Algorithms* (3rd ed.). MIT Press.

3. Hopcroft, J.; Tarjan, R. (1973). "Efficient algorithms for graph manipulation". *Communications of the ACM*, 16(6), 372-378.

4. Kosaraju, S.R. (1978). "Depth-first search and linear graph algorithms". *Proceedings of the 2nd International Symposium on Theory of Computing*, 229-233.

5. Even, S. (2011). *Graph Algorithms* (2nd ed.). Cambridge University Press.

6. Sedgewick, R. (2011). *Algorithms* (4th ed.). Addison-Wesley.

7. Kleinberg, J.; Tardos, E. (2006). *Algorithm Design*. Pearson.

8. Dasgupta, S.; Papadimitriou, C.; Vazirani, U. (2006). *Algorithms*. McGraw-Hill.