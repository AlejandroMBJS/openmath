# Pilas, Colas y Colas Prioritarias: Estructuras de Datos

## Objetivo del tema

Desarrollar la teoría de estructuras de datos fundamentales con análisis asintótico riguroso, análisis amortizado, y aplicaciones algorítmicas avanzadas.

---

## 1. Pilas (Stacks)

### 1.1 Definición y Operaciones

**Definición 1.1 (Pila)**: Una pila (stack) es una estructura de datos LIFO (Last In, First Out).

**Operaciones fundamentales**:
- `push(x)`: Insertar en la cima - $O(1)$
- `pop()`: Remover de la cima - $O(1)$
- `top()`: Ver la cima - $O(1)$
- `empty()`: Verificar si vacía - $O(1)$

### 1.2 Implementación

**Implementación con arreglo**:
```python
stack[++top] = x    # push
x = stack[top--]   # pop
```

**Teorema 1.1 (Complejidad)**: Con un arreglo de tamaño $n$, las operaciones de pila tienen complejidad $O(1)$.

*Demostración*: Cada operación modifica solo el índice top o lee su valor, ambas operaciones de tiempo constante. $\square$

### 1.3 Aplicaciones

- **Balanceo de paréntesis**: Verificar que los paréntesis estén balanceados
- **Evaluación de expresiones (postfix)**: Usar pila para evaluar expresiones en notación polaca inversa
- **Backtracking algorítmico**: Mantener estado durante exploración recursiva

---

## 2. Colas (Queues)

### 2.1 Definición y Operaciones

**Definición 2.1 (Cola)**: Una cola (queue) es una estructura de datos FIFO (First In, First Out).

**Operaciones fundamentales**:
- `enqueue(x)`: Insertar al final - $O(1)$
- `dequeue()`: Remover del frente - $O(1)$
- `front()`: Ver el frente - $O(1)$

### 2.2 Implementación Circular

**Teorema 2.1 (Complejidad de cola circular)**: La implementación circular permite todas las operaciones en $O(1)$.

*Demostración*: Usamos índices front y rear que "envuelven" al alcanzar la capacidad del arreglo. Las operaciones son: front = (front + 1) % capacity para dequeue, rear = (rear + 1) % capacity para enqueue. Todas son constantes. $\square$

**Teorema 2.2 (Espacio)**: Una cola circular de capacidad $n$ puede almacenar hasta $n$ elementos.

*Demostración*: Distinguimos entre cola llena y cola vacía mediante la condición (rear + 1) % capacity == front para cola llena. Esto deja una ranura sin usar de las $n$ disponibles. $\square$

---

## 3. Colas Prioritarias

### 3.1 Definición

**Definición 3.1 (Cola prioritaria)**: Estructura de datos donde cada elemento tiene una prioridad, y la operación `extract` remueve el elemento de máxima prioridad.

**Operaciones**:
- `insert(x, p)`: $O(\log n)$
- `extractMax()`: $O(\log n)$
- `max()`: $O(1)$

### 3.2 Heap Binario

**Teorema 3.1 (Propiedad de heap)**: En un max-heap, para todo nodo $i$ (excepto la raíz), $\text{key}[parent(i)] \geq \text{key}[i]$.

*Demostración*: Esta propiedad inductiva se mantiene por construcción. Después de cada insert o extractMax, ejecutamos heapify para restaurar la propiedad. $\square$

**Teorema 3.2 (Altura del heap)**: Un heap binario con $n$ nodos tiene altura $\lfloor \log_2 n \rfloor$.

*Demostración*: Un heap completo tiene todos los niveles llena excepto posiblemente el último. El nivel $h$ tiene a lo sumo $2^h$ nodos. Si $2^{h-1} \leq n < 2^h$, entonces $h = \lfloor \log_2 n \rfloor$. $\square$

### 3.3 Algoritmo de Floyd (Build Heap)

**Teorema 3.3 (Construcción en $O(n)$)**: El algoritmo de Floyd construye un heap desde un arreglo sin orden en tiempo $O(n)$.

*Demostración*: Ejecutamos heapify desde el nivel $\lfloor \log_2 n \rfloor - 1$ hacia abajo. El número de operaciones es:
$$\sum_{i=0}^{\lfloor \log n \rfloor} 2^i \cdot (\log n - i) = O(n)$$

La suma converge porque los nodos más profundos (más numerosos) realizan menos trabajo. $\square$

---

## 4. Heap Binomial

### 4.1 Estructura

**Definición 4.1 (Árbol binomial)**: Un árbol binomial $B_k$ se define recursivamente: $B_0$ es un nodo, y $B_{k+1}$ se obtiene uniendo dos árboles $B_k$ como hijo del otro.

**Teorema 4.1 (Propiedades)**: Un heap binomial contiene una colección de árboles binomiales que satisfacen la propiedad de heap.

*Demostración*: Cada árbol binomial tiene la propiedad de heap por construcción. La colección permite merge eficiente mediante la operación de "link" que combina árboles de igual altura. $\square$

### 4.2 Complejidad

| Operación | Complejidad |
|-----------|-------------|
| insert | $O(\log n)$ amortizado |
| extract | $O(\log n)$ |
| merge | $O(\log n)$ |
| decreaseKey | $O(\log n)$ |

---

## 5. Fibonacci Heap

### 5.1 Análisis Amortizado

**Teorema 5.1 (Costos amortizados)**: Las operaciones de Fibonacci heap tienen los siguientes costos amortizados:
- `insert`: $O(1)$
- `extract`: $O(\log n)$
- `decreaseKey`: $O(1)$

*Demostración*: Usamos el método del potencial con $\Phi = \text{número de árboles} + 2 \times \text{número de raíces marcadas}$. La operación insert crea un nuevo árbol (aumenta $\Phi$ en 1) pero cobra $O(1)$. La operación decreaseKey puede realizar cortes, pero el potencial se mantiene bounded. La operación extract realiza consolidación que reduce el número de árboles. $\square$

### 5.2 Aplicaciones

- **Algoritmo de Dijkstra**: $O(E + V \log V)$ con Fibonacci heap
- **Algoritmo de Prim**: Complejidad idéntica a Dijkstra
- **Scheduling de procesos**: Prioridades dinámicas

---

## 6. Direcciones de Investigación y Problemas Abiertos

### 6.1 Estructuras de Datos para Grafos

- **Dynamic graph algorithms**: Estructuras que mantienen conectividad bajo actualizaciones
- **External memory**: Representaciones para grafos que no caben en RAM

### 6.2 Problemas Abiertos

1. ¿Existe una estructura de datos que mejore Fibonacci heap en la práctica?
2. ¿Cuál es el lower bound para colas prioritarias en el modelo de comparación?
3. ¿Cómo diseñar heaps que minimicen cache misses?

---

## 7. Ejercicios

### Ejercicio 1
Implementar pila con arreglos y analizar el comportamiento cuando ocurre overflow.

### Ejercicio 2
Demostrar que el heap binario tiene altura $\lfloor \log_2 n \rfloor$.

### Ejercicio 3
Derivar el costo amortizado de decreaseKey en Fibonacci heap usando el método del potencial.

### Ejercicio 4
Comparar heap binomial vs Fibonacci heap para diferentes patrones de operación.

### Ejercicio 5
Implementar heapsort y analizar su complejidad en el peor caso y caso promedio.

### Ejercicio 6
Diseñar una cola con prioridad que soporte eliminación arbitraria en $O(\log n)$.

### Ejercicio 7
Probar que cualquier heap binario con $n$ nodos tiene exactamente $\lceil n/2 \rceil$ hojas.

### Ejercicio 8
Implementar una pila que soporte minimum en $O(1)$ además de las operaciones estándar.

### Ejercicio 9
Analizar el número de comparaciones en heapify para un heap de altura $h$.

### Ejercicio 10
Diseñar una estructura de datos que soporte insert, delete y min en $O(1)$ amortizado.

### Ejercicio 11
Probar que el algoritmo de Floyd construye un heap válido en $O(n)$.

### Ejercicio 12
Implementar una cola de prioridad basada en un árbol balanceado y analizar complejidad.

### Ejercicio 13
Comparar la representación de heap en arreglo vs apuntadores en términos de locality.

### Ejercicio 14
Diseñar un heap que soporte decreaseKey en $O(1)$ worst-case en lugar de amortizado.

### Ejercicio 15
Analizar el uso de memoria de Fibonacci heap vs heap binomial para grafos densos.

---

## 8. Soluciones

### Solución Ejercicio 2
En un heap completo, el nivel $h$ tiene a lo sumo $2^h$ nodos. Sea $k$ la altura. Então $2^k \leq n < 2^{k+1}$. Tomando $\log_2$: $k \leq \log_2 n < k+1$, hence $k = \lfloor \log_2 n \rfloor$. $\square$

### Solución Ejercicio 7
En un heap, cada nodo interno tiene al menos un hijo. Sea $I$ el número de nodos internos y $L$ el número de hojas. Cada nodo interno tiene al menos 2 hijos excepto posiblemente uno. Luego $2I - 1 \geq I + L$, giving $I \leq L - 1$. Por el teorema de handshake, $n = I + L$, yielding $L = \lceil n/2 \rceil$. $\square$

### Solución Ejercicio 11
El algoritmo de Floyd ejecuta heapify desde $\lfloor n/2 \rfloor$ hasta 1. El número de operaciones es $\sum_{i=1}^{\lfloor \log n \rfloor} \frac{n}{2^i} \cdot i = O(n)$. La serie converge porque el peso de los nodos más profundos (con menos trabajo) es mayor. $\square$

---

## Referencias

1. Cormen, T.H.; Leiserson, C.E.; Rivest, R.L.; Stein, C. (2009). *Introduction to Algorithms* (3rd ed.). MIT Press.

2. Tarjan, R.E. (1983). *Data Structures and Network Algorithms*. SIAM.

3. Fredman, M.L.; Tarjan, R.E. (1987). "Fibonacci heaps and their uses in improved network optimization algorithms". *Journal of the ACM*, 34(3), 596-615.

4. Vuillemin, J. (1978). "A data structure for manipulating priority queues". *Communications of the ACM*, 21(4), 309-315.

5. Gonnet, G.H.; Munro, J.I. (1986). "Heaps on heaps". *SIAM Journal on Computing*, 15(4), 994-1017.

6. Jones, D.W. (1986). "An empirical comparison of priority-queue and event-set implementations". *Communications of the ACM*, 29(4), 300-311.

7. Iacono, J. (2000). "Improved upper bounds for pairing heaps". *Proceedings of the 7th Scandinavian Workshop on Algorithm Theory*, 63-77.

8. Bender, M.A.; Farach-Colton, M. (2000). "The Cache-Oblivious B-Tree". *Proceedings of the 20th Annual ACM Symposium on Theory of Computing*, 399-409.