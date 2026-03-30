# Arboles Binarios

## Objetivo del tema

Estudiar los árboles binarios, una estructura de datos fundamental con aplicaciones en almacenamiento y búsqueda.

## 1. Definicion

### 1.1 Arbol binario

Un árbol binario es un árbol donde cada nodo tiene a lo sumo dos hijos, diferenciados como hijo izquierdo e hijo derecho.

### 1.2 Representación

Cada nodo contiene:
- Datos
- Puntero a hijo izquierdo
- Puntero a hijo derecho

### 1.3 Tipos de nodos

- **Nodo interno**: tiene al menos un hijo
- **Hoja**: sin hijos
- **Raíz**: sin padre

## 2. Propiedades de árboles binarios

### 2.1 Número de nodos

Para un árbol binario de altura $h$:
- Mínimo de nodos: $h + 1$ (degenerado o skewed)
- Máximo de nodos: $2^{h+1} - 1$ (completo)

### 2.2 Relación entre nodos y altura

$$h \geq \lfloor \log_2 n \rfloor$$

### 2.3 Nodos nulos

En un árbol binario con $n$ nodos, hay $n + 1$ punteros nulos.

## 3. Recorridos (Traversals)

### 3.1 Preorden

Raíz → Izquierdo → Derecho

### 3.2 Inorden

Izquierdo → Raíz → Derecho

### 3.3 Postorden

Izquierdo → Derecho → Raíz

### 3.4 Por niveles

Nivel por nivel, de izquierda a derecha

## 4. Árboles binarios de búsqueda (BST)

### 4.1 Definición

Para cada nodo, todos los valores en el subárbol izquierdo son menores, y todos en el derecho son mayores.

### 4.2 Operaciones

- Búsqueda: $O(h)$
- Inserción: $O(h)$
- Eliminación: $O(h)$

### 4.3 Complejidad

Con árbol balanceado: $O(\log n)$

## 5. Ejercicios

### Ejercicio 1

Dibujar un árbol binario con nodos: raíz=5, hijo izq=3, hijo der=7, nieto izq=2.

### Ejercicio 2

Calcular la altura de un árbol binario con raíz, un hijo izquierdo, y ese hijo con un hijo izquierdo.

### Ejercicio 3

Realizar el recorrido inorden del árbol del ejercicio 1.

### Ejercicio 4

Calcular el número máximo de nodos con altura 3.

### Ejercicio 5

Verificar que 2-3-5 es el camino desde la raíz hasta una hoja.

### Ejercicio 6

Insertar 5, 3, 7, 2, 4 en un BST y dibujar el árbol resultante.

### Ejercicio 7

Calcular la altura mínima de un BST con 7 nodos.

### Ejercicio 8

Encontrar el predecesor y sucesor de un nodo en BST.

### Ejercicio 9

Verificar que inorden en BST produce valores ordenados.

### Ejercicio 10

Calcular el número de punteros nulos en un BST con 5 nodos.

### Ejercicio 11

Explicar la diferencia entre un árbol binario y un árbol binario de búsqueda.

### Ejercicio 12

Eliminar un nodo hoja de un BST.

### Ejercicio 13

Calcular la complejidad de buscar en un BST degenerado.

### Ejercicio 14

Encontrar el mínimo y máximo en un BST.

### Ejercicio 15

Verificar la propiedad de BST para un árbol dado.

## Soluciones

### Solución 1

```
    5
   / \
  3   7
 /
2
```

### Solución 2

Altura = 2 (camino más largo tiene 2 aristas).

### Solución 3

2, 3, 5, 7

### Solución 4

$2^{4} - 1 = 15$ nodos

### Solución 5

El camino tiene 2 aristas (altura 2).

### Solución 6

```
    5
   / \
  3   7
 / \
2   4
```

### Solución 7

$\lfloor \log_2 7 \rfloor = 2$

### Solución 8

Predecesor: máximo del subárbol izquierdo. Sucesor: mínimo del subárbol derecho.

### Solución 9

Por la propiedad de BST.

### Solución 10

6 punteros nulos.

### Solución 11

BST tiene propiedad de orden, binario general no.

### Solución 12

Simplemente remover el nodo.

### Solución 13

$O(n)$ - como lista enlazada.

### Solución 14

Mínimo: descendiente más a la izquierda. Máximo: descendiente más a la derecha.

### Solución 15

Verificar que izquierda < nodo < derecha para cada nodo.

## Direcciones de investigacion y problemas abiertos

1. **Arboles binarios balanceados:** Los arboles AVL, Red-Black, y B-trees tienen aplicaciones en bases de datos y sistemas de archivos. El estudio de rotaciones y rebalanceo es un area clasica.

2. **Arboles de decision:** Los algoritmos ID3, C4.5, y CART usan estructuras de arbol para aprendizaje automatico. La complejidad computacional del aprendizaje de arboles optimos es NP-completa.

3. **Teoria de codificacion:** Los arboles de Huffman y las representaciones binarias de datos tienen aplicaciones en compresion de datos.

4. **Algebra y combinatoria de arboles:** Los arbres binarios tienen conexiones con estructuras algebraicas como operads y algebras de Hopf.

## Referencias

1. Cormen, T.H. (2009). *Introduction to Algorithms*. MIT Press.
2. Knuth, D.E. (1997). *The Art of Computer Programming, Volume 1*. Addison-Wesley.
3. Tarjan, R.E. (1983). *Data Structures and Network Algorithms*. SIAM.
4. Guttmann, A. (Ed.). (2012). *Encyclopedia of Algorithms*. Springer.
5. Mehlhorn, K. & Sanders, P. (2008). *Algorithms and Data Structures*. Springer.
