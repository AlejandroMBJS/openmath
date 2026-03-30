# Arboles de Raiz (Rooted Trees)

## Objetivo del tema

Estudiar los árboles con raíz designada, sus propiedades y terminología específica.

## 1. Definicion

### 1.1 Arbol con raiz

Un árbol con raíz (rooted tree) es un árbol donde un vértice específico se designa como raíz.

### 1.2 Terminologia

- **Raíz**: vértice sin padre
- **Padre**: vértice相邻 superior
- **Hijo**: vértice相邻 inferior
- **Hoja**: vértice sin hijos
- **Ancestro**: cualquier nodo en el camino de la raíz
- **Descendiente**: cualquier nodo en el camino desde el nodo hasta las hojas

### 1.3 Notacion

Sea $T$ un árbol con raíz $r$. Para cada vértice $v \neq r$, existe un único padre $p(v)$.

## 2. Terminologia de altura y profundidad

### 2.1 Profundidad

La profundidad de un vértice $v$ es la longitud del camino desde la raíz hasta $v$:
$$\text{depth}(v) = \text{número de aristas desde } r \text{ a } v$$

### 2.2 Altura

La altura de un vértice $v$ es la longitud del camino más largo desde $v$ hasta una hoja:
$$\text{height}(v) = \max_{u \text{ descendiente de } v} \text{depth}(u) - \text{depth}(v)$$

### 2.3 Altura del árbol

$$\text{height}(T) = \text{height}(r)$$

## 3. Arboles binarios

### 3.1 Definicion

Cada vértice tiene a lo sumo dos hijos: hijo izquierdo e hijo derecho.

### 3.2 Representacion

Para cada nodo, almacenar referencias a hijo izquierdo y derecho.

### 3.3 Recorridos

- Preorden: raíz, izquierdo, derecho
- Inorden: izquierdo, raíz, derecho
- Postorden: izquierdo, derecho, raíz

## 4. Propiedades

### 4.1 Numero de hojas

Un árbol con $n$ vértices tiene a lo sumo $\lfloor n/2 \rfloor$ hojas.

### 4.2 Relación entre nodos

$$\sum_{v \in V} \text{children}(v) = n - 1$$

### 4.3 Altura mínima

Un árbol binario con $n$ nodos tiene altura mínima $\lfloor \log_2 n \rfloor$.

## 5. Ejercicios

### Ejercicio 1

En un árbol con raíz, identificar la raíz, hojas y nivel 2.

### Ejercicio 2

Calcular la profundidad de cada vértice en un árbol de altura 3.

### Ejercicio 3

Encontrar el número de hijos de la raíz en un árbol con 10 vértices.

### Ejercicio 4

Calcular la altura de un árbol con 5 niveles.

### Ejercicio 5

Determinar el número máximo de vértices en un árbol binario de altura 3.

### Ejercicio 6

Verificar que la suma de hijos es $n-1$.

### Ejercicio 7

Encontrar el camino más largo desde la raíz hasta una hoja.

### Ejercicio 8

Determinar si un árbol binario completo es diferente de uno extendido.

### Ejercicio 9

Calcular el número de nodos en nivel $k$ de un árbol binario completo.

### Ejercicio 10

Identificar ancestros y descendientes de un nodo específico.

### Ejercicio 11

Verificar que un árbol con raíz tiene exactamente una raíz.

### Ejercicio 12

Calcular la altura mínima de un árbol binario con 8 nodos.

### Ejercicio 13

Explicar la diferencia entre profundidad y altura.

### Ejercicio 14

Encontrar el padre de cualquier nodo (excepto raíz).

### Ejercicio 15

Determinar el número total de niveles en un árbol de 4 niveles.

## Soluciones

### Solución 1

Raíz: el vértice sin padre. Hojas: vértices sin hijos. Nivel 2: vértices a distancia 2 de la raíz.

### Solución 2

Raíz: profundidad 0, nivel 1: profundidad 1, etc.

### Solución 3

Depende de la estructura específica.

### Solución 4

La altura es 4 (contando desde 0).

### Solución 5

Máximo: $2^4 - 1 = 15$ nodos (altura 3 significa niveles 0,1,2,3).

### Solución 6

Cada nodo (excepto raíz) es hijo de exactamente un nodo.

### Solución 7

El camino desde la raíz a una hoja de máxima longitud.

### Solución 8

Completo: todos los niveles llenos. Extendido: todos los nodos tienen 2 hijos (usando marcadores nulos).

### Solución 9

$2^k$ nodos.

### Solución 10

Ancestros: nodos en el camino hacia la raíz. Descendientes: nodos en el camino hacia las hojas.

### Solución 11

Por definición del árbol con raíz.

### Solución 12

$\lfloor \log_2 8 \rfloor = 3$

### Solución 13

Profundidad: distancia desde la raíz. Altura: distancia máxima a una hoja.

### Solución 14

Existe exactamente un padre por nodo.

### Solución 15

4 niveles (0 a 3).

---

## Direcciones de Investigación y Problemas Abiertos

### 1. Árboles con Raíz en Computación Distribuida

- **Consenso en sistemas distribuidos**: Protocolos como Paxos y Raft usan estructuras de árbol para coordinación
- **Complejidad de comunicación**: Lower bounds para broadcasting en árboles

### 2. Árboles en Teoría de Conjuntos

- **Jerarquías de Gödel**: Construcciones de modelos de la teoría de conjuntos
- **Árboles de Kurepa**: Árboles con más de $\aleph_1$ ramas

### 3. Problemas Abiertos

1. ¿Cuántos subárboles puede tener un árbol de orden $n$?
2. ¿Cuál es el número mínimo de hijos de la raíz en un árbol binario de búsqueda balanceado?
3. ¿Cómo optimizar traversal para árboles conmillones de nodos?

---

## Referencias

1. Cormen, T.H.; Leiserson, C.E.; Rivest, R.L.; Stein, C. (2009). *Introduction to Algorithms* (3rd ed.). MIT Press.

2. Knuth, D.E. (2011). *The Art of Computer Programming, Volume 4A: Combinatorial Algorithms, Part 1*. Addison-Wesley.

3. Sedgewick, R. (2011). *Algorithms* (4th ed.). Addison-Wesley.

4. Tarjan, R.E. (1983). *Data Structures and Network Algorithms*. SIAM.

5. Guttmann, T. (2021). "Universal traversal algorithms for binary trees". *Journal of Graph Algorithms and Applications*, 25(1), 123-145.

6. Aho, A.V.; Hopcroft, J.E.; Ullman, J.D. (1974). *The Design and Analysis of Computer Algorithms*. Addison-Wesley.

7. Flum, J.; Grohe, M. (2006). *Parameterized Complexity Theory*. Springer.

8. Downey, R.G.; Fellows, M.R. (2012). *Fundamentals of Parameterized Complexity*. Springer.
