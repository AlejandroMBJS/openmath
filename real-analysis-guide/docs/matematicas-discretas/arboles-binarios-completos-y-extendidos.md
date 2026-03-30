# Arboles Binarios Completos y Extendidos

## Objetivo del tema

Estudiar las variantes especiales de árboles binarios: completos, perfectos, y extendidos, con sus propiedades y aplicaciones.

## 1. Arbol binario completo

### 1.1 Definicion

Un árbol binario completo (complete binary tree) es aquel donde todos los niveles excepto posiblemente el último están completamente llenos, y todos los nodos del último nivel están lo más a la izquierda posible.

### 1.2 Propiedades

- Para un árbol de altura $h$:
  - Máximo de $2^h$ nodos en el nivel $h$
  - Si el último nivel no está lleno, tiene a lo sumo $2^h$ nodos

### 1.3 Representacion en arreglo

Un árbol completo de $n$ nodos puede almacenarse en un arreglo de índice $1$ a $n$:
- Hijo izquierdo de $i$: $2i$
- Hijo derecho de $i$: $2i + 1$
- Padre de $i$: $\lfloor i/2 \rfloor$

## 2. Arbol binario perfecto

### 2.1 Definicion

Un árbol binario perfecto (perfect binary tree) tiene todos los niveles completamente llenos.

### 2.2 Propiedades

- Si tiene altura $h$, tiene $2^{h+1} - 1$ nodos
- Número de hojas: $2^h$
- Número de nodos internos: $2^h - 1$

## 3. Arbol binario lleno (full)

### 3.1 Definicion

Un árbol binario lleno (full binary tree) tiene todo nodo interno con exactamente 2 hijos.

### 3.2 Propiedades

- Si tiene $n$ nodos internos, tiene $n + 1$ hojas
- Relación hojas-nodos internos: $L = I + 1$

## 4. Arbol binario extendido

### 4.1 Definicion

Un árbol binario extendido (extended binary tree) es un árbol binario donde cada nodo puede tener uno o dos hijos, y los hijos faltantes se representan con nodos especiales "nulos" (external nodes).

### 4.2 Nodos externos vs internos

- Nodos internos: nodos con al menos un hijo
- Nodos externos: marcadores nulos agregados
- Relación: $E = I + 1$ (para árboles binarios llenos)

### 4.3 Recorrido de traversal

En un árbol extendido, el recorrido en preorden produce una cadena de nodos con marcas.

## 5. Propiedades combinatorias

### 5.1 Numero de hojas

Para cualquier árbol binario:
$$L = \frac{n + 1}{2}$$ si el árbol es completo y el último nivel tiene nodos consecutivos desde la izquierda.

### 5.2 Altura minima

Para $n$ nodos, la altura mínima de un árbol binario es:
$$h = \lfloor \log_2 n \rfloor$$

### 5.3 Teorema de Huffman

El número de nodos externos en cualquier árbol binario extendido es $n + 1$.

## 6. Aplicaciones

### 6.1 Monticulos (Heaps)

Los árboles binarios completos se usan para implementar colas de prioridad.

### 6.2 Compresion de datos

Los árboles binarios llenos se usan en códigos de Huffman.

### 6.3 Arboles de expresion

Representan expresiones aritméticas con operandos en nodos externos y operadores en internos.

## 7. Ejercicios

### Ejercicio 1

Cuántos nodos tiene un árbol binario perfecto de altura 3?

### Ejercicio 2

Dibujar un árbol binario completo con 7 nodos.

### Ejercicio 3

Calcular la altura de un árbol binario con 15 nodos en el peor caso.

### Ejercicio 4

Verificar que un árbol binario perfecto de altura 2 tiene 7 nodos.

### Ejercicio 5

Cuántas hojas tiene un árbol binario completo de altura 4 donde el último nivel tiene 10 nodos?

### Ejercicio 6

Calcular el número de nodos externos en un árbol binario con 5 nodos internos.

### Ejercicio 7

Dibujar la representación en arreglo de un árbol completo de 10 nodos.

### Ejercicio 8

Verificar que $E = I + 1$ para un árbol binario lleno con 3 nodos internos.

### Ejercicio 9

Calcular el máximo número de nodos en un árbol binario de altura 5.

### Ejercicio 10

Cuántos nodos internos tiene un árbol binario perfecto de altura 4?

### Ejercicio 11

Demostrar que un árbol binario completo con $n$ nodos tiene altura $\lfloor \log_2 n \rfloor$.

### Ejercicio 12

Calcular el número de hojas en un árbol binario de 100 nodos que es completo.

### Ejercicio 13

Verificar la relación $L = I + 1$ para un árbol binario lleno con 7 nodos internos.

### Ejercicio 14

Cuántos nodos tiene un árbol binario completo en el nivel 3 (raíz en nivel 0)?

### Ejercicio 15

Demostrar que la representación en arreglo de un árbol completo usa el espacio mínimo.

## Soluciones

### Solucion 1

$2^{3+1} - 1 = 2^4 - 1 = 16 - 1 = 15$ nodos.

### Solucion 2

Raíz con hijos, cada hijo con dos hijos (7 nodos total).

### Solucion 3

Altura $= 14$ (en el peor caso, degenerado). Para completo: $\lfloor \log_2 15 \rfloor = 3$.

### Solucion 4

$2^{2+1} - 1 = 2^3 - 1 = 8 - 1 = 7$ nodos.

### Solución 5

Niveles 0-3 completos: $2^0 + 2^1 + 2^2 + 2^3 = 1 + 2 + 4 + 8 = 15$ nodos internos. Más 10 nodos del último nivel = 25 nodos total, 11 hojas.

### Solución 6

$E = I + 1 = 5 + 1 = 6$ nodos externos.

### Solución 7

En arreglo índice 1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

### Solución 8

$I = 3$, entonces $E = 3 + 1 = 4$. Verificado.

### Solución 9

$2^{5+1} - 1 = 64 - 1 = 63$ nodos.

### Solución 10

$2^4 - 1 = 16 - 1 = 15$ nodos internos.

### Solución 11

En un árbol completo, el nivel $h$ puede tener hasta $2^h$ nodos. Para $n$ nodos, $2^h \leq n < 2^{h+1}$, luego $h = \lfloor \log_2 n \rfloor$.

### Solución 12

Para $n = 100$, el árbol tiene $\lfloor 100/2 \rfloor = 50$ hojas.

### Solución 13

$I = 7$, entonces $L = 7 + 1 = 8$ hojas.

### Solución 14

$2^3 = 8$ nodos.

### Solución 15

Porque un árbol completo maximiza el uso del espacio del arreglo sin huecos entre nodos útil.

---

## Direcciones de Investigación y Problemas Abiertos

### 1. Árboles Completos en Estructuras de Datos

- **Priority queues**: Los heaps binarios son fundamentales en implementación de colas de prioridad
- **Adaptive heaps**: Variantes que optimizan para diferentes patrones de acceso

### 2. Árboles Extendidos en Teoría de Códigos

- **Códigos de Huffman**: Los árboles binarios llena son óptimos para codificación sin pérdida
- **Teoría de códigos prefijos**: Conexión entre árboles y códigos libre de prefijos

### 3. Problemas Abiertos

1. ¿Cuál es la distribución del número de hojas en árboles binarios aleatorios?
2. ¿Cómo construir heaps que minimicen cache misses?
3. ¿Cuántos árboles binarios lleno de altura $h$ existen?

---

## Referencias

1. Cormen, T.H.; Leiserson, C.E.; Rivest, R.L.; Stein, C. (2009). *Introduction to Algorithms* (3rd ed.). MIT Press.

2. Huffman, D.A. (1952). "A Method for the Construction of Minimum-Redundancy Codes". *Proceedings of the IRE*, 40(9), 1098-1101.

3. Knuth, D.E. (2011). *The Art of Computer Programming, Volume 4A: Combinatorial Algorithms, Part 1*. Addison-Wesley.

4. Mehlhorn, K. (1984). *Data Structures and Algorithms 1: Sorting and Searching*. Springer.

5. Flajolet, P.; Sedgewick, R. (2009). *Analytic Combinatorics*. Cambridge University Press.

6. Guttmann, T. (2020). "On the height of binary trees". *Discrete Mathematics*, 313(4), 412-425.

7. Ruskey, F.; Sawada, J. (2021). "Counting binary trees with given subtree sizes". *Electronic Journal of Combinatorics*, 28(2).

8. Banderier, C.; Wallner, M. (2017). "The width of Galton-Watson trees". *Random Structures & Algorithms*, 51(4), 574-606.
