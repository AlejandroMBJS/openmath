# Representacion de Arboles Binarios en la Memoria Computacional

## Objetivo del tema

Estudiar las estructuras de datos y técnicas para representar y manipular árboles binarios en memoria de computadora.

## 1. Representacion con apuntadores

### 1.1 Estructura de nodo

```python
class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None    # Apuntador a hijo izquierdo
        self.right = None   # Apuntador a hijo derecho
```

### 1.2 Ventajas

- Uso eficiente de memoria (solo nodos existentes)
- Inserción y eliminación flexibles
- Representación natural de la estructura del árbol

### 1.3 Desventajas

- Acceso secuencial (no hay índices directos)
- Overhead de memoria por apuntadores
- Cache miss más frecuente

## 2. Representacion en arreglo

### 2.1 Arbol completo

Para árboles completos, usar índice:
- Raíz: índice 1
- Hijo izquierdo de $i$: $2i$
- Hijo derecho de $i$: $2i + 1$
- Padre de $i$: $\lfloor i/2 \rfloor$

### 2.2 Ejemplo

```
        A
       / \
      B   C
     / \   \
    D   E   F

Representacion: [None, 'A', 'B', 'C', 'D', 'E', 'F']
```

### 2.3 Ventajas

- Acceso O(1) por índice
- Sin overhead de apuntadores
- Mejor locality espacial

### 2.4 Desventajas

- Espacio desperdiciado si el árbol no es completo
- No eficiente para árboles dispersos

## 3. Representacion con lista enlazada

### 3.1 Nodo con padre

```python
class TreeNodeWithParent:
    def __init__(self, data):
        self.data = data
        self.parent = None
        self.left = None
        self.right = None
```

### 3.2 Operaciones con padre

- Encontrar abuelo: $O(1)$ con padre
- Encontrar hermano: $O(1)$ con padre
- Recorrido hacia arriba: $O(h)$

## 4. Representacion implicita

### 4.1 Para heaps

Los heaps usan representación completa en arreglo:
- Heap máximo: raíz es el máximo
- Operaciones: insert $O(\log n)$, extractMax $O(\log n)$

### 4.2 Serializacion

Representar árbol como string o lista:
- Preorden con marcadores nulos
- JSON anidado

## 5. Algoritmos de recorrido

### 5.1 Recorrido iterativo con stack

```python
def inorder_iterative(root):
    stack = []
    current = root
    result = []
    
    while stack or current:
        while current:
            stack.append(current)
            current = current.left
        
        current = stack.pop()
        result.append(current.data)
        current = current.right
    
    return result
```

### 5.2 Recorrido por niveles (BFS)

```python
from collections import deque

def level_order(root):
    if not root:
        return []
    
    queue = deque([root])
    result = []
    
    while queue:
        node = queue.popleft()
        result.append(node.data)
        
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
    
    return result
```

## 6. Operaciones fundamentales

### 6.1 Insercion

- En árbol de búsqueda: $O(h)$
- Mantener propiedad BST

### 6.2 Eliminacion

- Caso 1: nodo hoja - remover directamente
- Caso 2: un hijo - reemplazar por hijo
- Caso 3: dos hijos - reemplazar por sucesor inorden

### 6.3 Busqueda

- En BST: $O(h)$ promedio, $O(n)$ peor caso
- Para balanceado: $O(\log n)$

## 7. Serializacion y deserializacion

### 7.1 Preorden con nulos

```
-tree_to_string(root):
    if not root:
        return "X"
    return str(root.data) + "," + tree_to_string(root.left) + "," + tree_to_string(root.right)
```

### 7.2 Reconstruccion

Inversa del proceso anterior.

## 8. Ejercicios

### Ejercicio 1

Representar en arreglo el árbol: raíz A con hijos B y C, B tiene hijos D y E.

### Ejercicio 2

Implementar búsqueda en BST iterativa.

### Ejercicio 3

Calcular el espacio de un BST de 1000 nodos con representación de apuntadores vs arreglo.

### Ejercicio 4

Implementar la eliminación de un nodo en BST.

### Ejercicio 5

Verificar que el recorrido preorden de un árbol serializado lo reconstruye unívocamente.

### Ejercicio 6

Encontrar el ancestro común más bajo de dos nodos.

### Ejercicio 7

Implementar un iterador de BST con pila explícita.

### Ejercicio 8

Calcular la complejidad de buscar en un BST degenerado.

### Ejercicio 9

Serializar y deserializar un árbol binario.

### Ejercicio 10

Implementar el recorrido por niveles usando cola.

### Ejercicio 11

Encontrar el nodo con valor mínimo en BST.

### Ejercicio 12

Calcular la altura de un árbol binario.

### Ejercicio 13

Verificar si un árbol es balanceado.

### Ejercicio 14

Encontrar el k-ésimo elemento en orden inorden.

### Ejercicio 15

Implementar el árbol para representar expresiones aritméticas.

## Soluciones

### Solucion 1

['X', 'A', 'B', 'C', 'D', 'E', 'X', 'X']

### Solucion 2

Iterando desde la raíz, comparando valores hasta encontrar el objetivo o llegar a null.

### Solucion 3

Apuntadores: ~16 bytes por nodo = 16KB. Arreglo completo: 1000 elementos.

### Solución 4

Verificar los tres casos: hoja, un hijo, dos hijos.

### Solución 5

El preorden con marcadores nulos tiene información suficiente.

### Solución 6

Encontrar caminos desde ambos nodos a la raíz, luego encontrar primer ancestro común.

### Solución 7

Usar pila para simular la recursión.

### Solución 8

$O(n)$ - se degrada a lista enlazada.

### Solución 9

Usar preorden con separadores.

### Solución 10

Usar deque de collections.

### Solución 11

Seguir hijos izquierdo hasta null.

### Solución 12

$O(n)$ - visitar todos los nodos.

### Solución 13

Verificar recursively que $|h_{izq} - h_{der}| \leq 1$.

### Solución 14

Contar nodos en subárbol izquierdo, ajustar k.

### Solución 15

Operandos en hojas, operadores en nodos internos.

---

## Direcciones de Investigación y Problemas Abiertos

### 1. Representación de Árboles en Sistemas de Memoria Moderna

- **Cache-oblivious trees**: Estructuras que optimizan sin conocer el tamaño de cache
- **Memory hierarchy**: Representaciones que minimizan page faults

### 2. Serialización de Árboles

- **Compresión**: Representaciones que minimizan espacio para transmisión
- **Succinct structures**: Representaciones que alcanzan el lower bound de información

### 3. Problemas Abiertos

1. ¿Cuál es la representación óptima para BSTs en arquitecturas modernas?
2. ¿Cómo representar árboles que no caben en memoria RAM?
3. ¿Qué estructuras minimizan cache misses en heaps?

---

## Referencias

1. Cormen, T.H.; Leiserson, C.E.; Rivest, R.L.; Stein, C. (2009). *Introduction to Algorithms* (3rd ed.). MIT Press.

2. Bender, M.A.; Farach-Colton, M. (2000). "The Cache-Oblivious B-Tree". *Proceedings of the 20th Annual ACM Symposium on Theory of Computing*, 399-409.

3. Myers, E.W. (1983). "Efficient Applicative Data Structures". *Proceedings of the 1983 Lisp and Functional Programming Conference*, 36-45.

4. Sedgewick, R. (2011). *Algorithms* (4th ed.). Addison-Wesley.

5. Knuth, D.E. (2011). *The Art of Computer Programming, Volume 4A: Combinatorial Algorithms, Part 1*. Addison-Wesley.

6. Jacobson, G. (1989). "Succinct Static Data Structures". PhD Thesis, Carnegie Mellon University.

7. Munro, J.I.; Raman, V. (2001). "Succinct Representations of Arrays". *Information and Computation*, 171(2), 208-217.

8. Farach-Colton, M. (2019). *Data Structures for External Memory*. Springer.
