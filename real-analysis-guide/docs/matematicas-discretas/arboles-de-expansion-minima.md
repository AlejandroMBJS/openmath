# Árboles de Expansión Mínima: Teoría y Algoritmos

## Objetivo del tema

Desarrollar la teoría de árboles de expansión mínima con demostraciones rigurosas y análisis de algoritmos.

---

## 1. Definiciones

### 1.1 Árbol de Expansión

**Definición**: Sea $G = (V, E)$ un grafo conexo. Un **árbol de expansión** (spanning tree) es un subgrafo $T = (V, E')$ que es un árbol.

### 1.2 Árbol de Expansión Mínima

**Definición**: $T$ es MST si $w(T) = \sum_{e \in E'} w(e)$ es mínimo.

---

## 2. Propiedades Estructurales

### 2.1 Corte Property

**Teorema**: Sea $S \subset V$ un corte. La arista de mínimo peso cruzando el corte pertenece a algún MST.

**Demostración**: Sea $e$ la arista mínima cruzando $(S, V \setminus S)$. Si $T$ es MST que no contiene $e$, agregar $e$ a $T$ crea un ciclo. Eliminar la arista $f$ del ciclo cruzando el mismo corte. Como $w(e) \leq w(f)$, el nuevo árbol tiene peso menor o igual, contradiction.

$$\square$$

### 2.2 Ciclo Property

**Teorema**: Sea $C$ un ciclo. La arista de máximo peso en $C$ no está en ningún MST.

---

## 3. Algoritmos

### 3.1 Algoritmo de Kruskal

**Algoritmo**: Ordenar aristas por peso, agregar si no forma ciclo (Union-Find).

**Complejidad**: $O(E \log V)$

**Demostración de Correctitud**: Sigue directamente del corte property. Cada arista agregada es la mínima de algún corte.

$$\square$$

### 3.2 Algoritmo de Prim

**Algoritmo**: Crecer un árbol desde un vértece, agregando la arista mínima que sale del árbol actual.

**Complejidad**: $O(E \log V)$ con heap, $O(V^2)$ con matriz.

### 3.3 Algoritmo de Boruvka

**Algoritmo**: Cada componente encuentra su arista más barata hacia otro componente, luego contrae.

**Complejidad**: $O(E \log V)$

---

## 4. Unicidad

### 4.1 Teorema

**Teorema**: Si todos los pesos son distintos, el MST es único.

**Demostración**: Si hay dos MSTs $T_1, T_2$, sea $e$ la arista más ligera donde difieren. Por el corte property, $e$ debe estar en todo MST, contradiction.

$$\square$$

---

## 5. Aplicaciones

- Diseño de redes de telecomunicaciones
- Clustering en machine learning
- Aproximación a TSP

---

## 6. Ejercicios

### Ejercicio 1
Implementar Kruskal con Union-Find y analizar complejidad.

### Ejercicio 2
Probar que el MST tiene exactamente $|V| - 1$ aristas.

### Ejercicio 3
Demostrar que si todos los pesos son distintos, el MST es único.

### Ejercicio 4
Encontrar el segundo MST en un grafo.

### Ejercicio 5
Analizar la aproximación de MST + BFS para TSP (factor 2).

### Ejercicio 6
Probar que el MST tiene exactamente $|V| - 1$ aristas. ¿Por qué no puede tener más?

### Ejercicio 7
Demostrar el ciclo property: la arista de máximo peso en cualquier ciclo no pertenece a ningún MST.

### Ejercicio 8
Sea $T$ un MST y $e$ una arista no en $T$. Demostrar que $e$ es la arista más pesada en el único ciclo creado al agregar $e$ a $T$.

### Ejercicio 9
Encontrar el segundo MST (árbol de expansión de segundo menor peso) en un grafo. ¿Cuántos MSTs puede tener un grafo?

### Ejercicio 10
Demostrar que el problema del MST puede resolverse en paralelo con complejidad $O(\log n)$ usando el algoritmo de Kruskal.

### Ejercicio 11
Analizar el algoritmo de Boruvka y demostrar que después de $\lceil \log_2 V \rceil$ iteraciones, el grafo tiene un solo componente.

### Ejercicio 12
Sea un grafo con pesos en las aristas que satisfies la desigualdad triangular. Demostrar que el MST es también un 2-aproximación para TSP.

### Ejercicio 13
Implementar el algoritmo de Prim con heap de Fibonacci y analizar su complejidad amortizada.

### Ejercicio 14
Demostrar que para cualquier grafo, el peso del MST es menor o igual al peso de cualquier árbol de expansión.

### Ejercicio 15
Analizar el problema del MST en el modelo de grafos dinámicos donde las aristas cambian de peso constantemente. ¿Qué estructuras de datos se necesitan?

---

## Direcciones de Investigación y Problemas Abiertos

### 1. MST en Grafos Dinámicos

- **Dynamic MST**: Mantener el MST bajo inserciones y eliminaciones de aristas
- **Competitive algorithms**: Lower bounds para actualizaciones frecuentes

### 2. Aplicaciones en Machine Learning

- **Clustering jerárquico**: MST como herramienta para identificar clusters
- **Feature selection**: Usar MST para reducir dimensionalidad

### 3. Problemas Abiertos

1. ¿Cuál es la complejidad del MST en el modelo de grafos ponderados dinámicamente?
2. ¿Cómo paralelizar MST eficientemente en GPUs?
3. ¿Existe un algoritmo de MST que sea óptimo en la práctica para todos los tipos de grafos?

---

## Referencias

1. Cormen, T.H.; Leiserson, C.E.; Rivest, R.L.; Stein, C. (2009). *Introduction to Algorithms* (3rd ed.). MIT Press.

2. Tarjan, R.E. (1983). *Data Structures and Network Algorithms*. SIAM.

3. Graham, R.L.; Hell, P. (1985). "On the history of the minimum spanning tree problem". *Annals of the History of Computing*, 7(1), 43-57.

4. Chazelle, B. (2000). "A minimum spanning tree algorithm with inverse-Ackermann type complexity". *Journal of the ACM*, 47(6), 1028-1047.

5. Pettie, S.; Ramachandran, V. (2002). "An optimal minimum spanning tree algorithm". *Journal of the ACM*, 49(1), 16-34.

6. Gabow, H.N.; Galil, Z.; Spencer, T.; Tarjan, R.E. (1986). "Efficient algorithms for finding minimum spanning trees in undirected and directed graphs". *Combinatorica*, 6(2), 109-122.

7. Kleinberg, J.; Tardos, E. (2006). *Algorithm Design*. Pearson.

8. Even, S. (2011). *Graph Algorithms* (2nd ed.). Cambridge University Press.
