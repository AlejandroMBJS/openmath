# Busqueda de Anchura (BFS)

## Objetivo del tema

Estudiar el algoritmo de búsqueda en anchura (Breadth-First Search), sus propiedades y aplicaciones.

## 1. Descripcion del algoritmo

### 1.1 Idea fundamental

Explora el grafo por niveles, visitando todos los vecinos de un vértice antes de pasar al siguiente nivel.

### 1.2 Estructura de datos

Usa una cola (queue) para procesar vértices en orden FIFO.

### 1.3 Pseudocódigo

```
función BFS(G, s):
    marcar s como visitado
    encolar s en Q
    mientras Q no vacía:
        v = desencolar Q
        para cada vecino u de v:
            si u no visitado:
                marcar u como visitado
                encolar u
```

## 2. Propiedades

### 2.1 Complejidad temporal

$$O(V + E)$$

### 2.2 Complejidad espacial

$$O(V)$$

### 2.3 Completitud

Encuentra todos los vértices alcanzables desde $s$.

## 3. Arbol BFS

### 3.1 Definicion

El árbol BFS contiene el camino más corto (en número de aristas) desde $s$ a cada vértice.

### 3.2 Distancia

$$d(s, v) = \text{número mínimo de aristas desde } s \text{ a } v$$

## 4. Aplicaciones

### 4.1 Componente conexo

BFS desde cualquier vértice alcanza todos los de su componente.

### 4.2 Camino más corto

En grafos no ponderados, BFS encuentra el camino mínimo.

### 4.3 Nivel de bipartición

En grafos bipartitos, los vértices pueden colorearse por paridad de distancia.

## 5. Variantes

### 5.1 BFS con distancia

Registrar la distancia desde el origen.

### 5.2 BFS con padre

Guardar el árbol para reconstruir caminos.

## 6. Ejercicios

### Ejercicio 1

Ejecutar BFS en $P_4$ starting desde el primer vértice.

### Ejercicio 2

Calcular la distancia desde el origen en un ciclo $C_6$.

### Ejercicio 3

Determinar si BFS puede detectar ciclos.

### Ejercicio 4

Encontrar el árbol BFS de $K_3$ desde cualquier vértice.

### Ejercicio 5

Comparar BFS y DFS en términos de exploración.

### Ejercicio 6

Calcular el número de niveles en BFS de un árbol binario completo de altura 3.

### Ejercicio 7

Explicar por qué BFS usa una cola y no una pila.

### Ejercicio 8

Encontrar el camino más corto de A a todos en un grafo de 5 vértices.

### Ejercicio 9

Determinar la complejidad de BFS para grafo denso.

### Ejercicio 10

Verificar que BFS alcanza todos los vértices en un grafo conexo.

### Ejercicio 11

Ejecutar BFS en el grafo de un cubo ($Q_3$) desde un vértice.

### Ejercicio 12

Calcular el número de vértices visitados en cada nivel para $K_{3,3}$.

### Ejercicio 13

Explicar cómo BFS encuentra componentes conexos.

### Ejercicio 14

Determinar si BFS puede usarse para detectar bipartición.

### Ejercicio 15

Encontrar la distancia máxima desde un vértice en $C_n$.

## Soluciones

### Solución 1

Niveles: {0}, {1}, {2}, {3}

### Solución 2

Distancias: 0, 1, 2, 3, 2, 1 (desde cualquier vértice en ciclo par).

### Solución 3

Sí, si al visitar un vecino ya visitado, hay un ciclo.

### Solución 4

Árbol con aristas desde el origen a los otros dos.

### Solución 5

BFS explora por niveles, DFS profundiza.

### Solución 6

4 niveles (altura 0 a 3).

### Solución 7

Para explorar nivel por nivel (FIFO).

### Solución 8

Usar BFS y registrar distancias.

### Solución 9

$O(V + V^2) = O(V^2)$ para grafo denso ($E \approx V^2$).

### Solución 10

Por completitud del algoritmo.

### Solución 11

Niveles: 0 (1 vér.), 1 (3 vér.), 2 (3 vér.), 3 (1 vér.)

### Solución 12

Nivel 0: 3, Nivel 1: 3, Nivel 2: 3

### Solución 13

Ejecutar BFS desde vértices no visitados.

### Solución 14

Sí, colorear por paridad de distancia.

### Solución 15

$\lfloor n/2 \rfloor$ (radio del ciclo).

---

## Direcciones de Investigación y Problemas Abiertos

### 1. BFS en Grafos Grandes

- **Graph streaming**: BFS en una sola pasada con memoria limitada
- **Distributed BFS**: Algoritmos para grafos que no caben en una máquina

### 2. Aplicaciones en Redes Sociales

- **Detección de comunidades**: BFS truncado para encontrar clusters
- **Centralidad de intermediación**: Conexión con BFS en grafos de comunicación

### 3. Problemas Abiertos

1. ¿Cómo paralelizar BFS eficientemente en GPUs?
2. ¿Cuál es el lower bound para BFS en el modelo de comparación?
3. ¿Cómo optimizar BFS para grafos con estructura de comunidad?

---

## Referencias

1. Cormen, T.H.; Leiserson, C.E.; Rivest, R.L.; Stein, C. (2009). *Introduction to Algorithms* (3rd ed.). MIT Press.

2. Even, S. (2011). *Graph Algorithms* (2nd ed.). Cambridge University Press.

3. Tarjan, R.E. (1972). "Depth-First Search and Linear Graph Algorithms". *SIAM Journal on Computing*, 1(2), 146-160.

4. Hopcroft, J.; Tarjan, R. (1973). "Efficient Algorithms for Graph Manipulation". *Communications of the ACM*, 16(6), 372-378.

5. Sedgewick, R. (2011). *Algorithms* (4th ed.). Addison-Wesley.

6. Chechik, S.; et al. (2016). "Approximating Shortest Paths in Graphs". *ACM Computing Surveys*, 48(4), 1-31.

7. Kleinberg, J.; Tardos, E. (2006). *Algorithm Design*. Pearson.

8. Dasgupta, S.; Papadimitriou, C.; Vazirani, U. (2006). *Algorithms*. McGraw-Hill.
