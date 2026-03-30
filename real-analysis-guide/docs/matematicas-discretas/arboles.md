# Árboles: Teoría Estructural y Algorítmica

## Objetivo del tema

Desarrollar una teoría profunda de los árboles como estructuras fundamentales en teoría de grafos y algoritmos, estableciendo conexiones con la combinatoria, el álgebra, la topología y la informática teórica. Los árboles aparecen en aplicaciones que van desde estructuras de datos hasta phylogenetics y análisis lingüístico.

---

## 1. Fundamentos teóricos de árboles

### 1.1 Caracterizaciones fundamentales

**Teorema de caracterización**: Para un grafo $G$ con $n$ vértices, las siguientes condiciones son equivalentes:
1. $G$ es un árbol (grafo conexo y acíclico)
2. $G$ es conexo y tiene $n-1$ aristas
3. $G$ es acíclico y tiene $n-1$ aristas
4. $G$ es conexo y cada arista es un corte
5. Para todo par de vértices, existe un único camino entre ellos

**Demostración**:

($1 \Rightarrow 2$): Un árbol con $n$ vértices tiene $n-1$ aristas. Cada arista agregada a un árbol crea exactamente un ciclo, hence debe haber $n-1$ aristas.

($2 \Rightarrow 3$): Si $G$ es conexo con $n-1$ aristas, assume contiene un ciclo. Eliminar una arista del ciclo no disconnecta el grafo, contradicting conectividad. Hence $G$ es acíclico.

($3 \Rightarrow 4$): En un grafo acíclico, cada arista es un puente (su eliminación increase el número de componentes). Hence el grafo debe ser conexo (otherwise habría más de $n-1$ aristas necesarias).

($4 \Rightarrow 5$): Si hay dos caminos diferentes entre $u$ y $v$, su diferencia simétrica contiene un ciclo.

($5 \Rightarrow 1$): Uniquely determined paths implican conectividad y ausencia de ciclos.

$$\square$$

### 1.2 Propiedades estructurales

**Teorema de hojas**: Todo árbol con al menos dos vértices tiene al menos dos hojas (vértices de grado 1).

**Demostración**: Por el teorema de Euler para graos planos, o por reducción al absurdo: asumir una hoja. Then el grafo resultante tiene menos vértices pero aún needs $n-2$ aristas para remain connected, contradiction.

$$\square$$

**Teorema de centros**: El centro de un árbol es un vértice o un arco. El radio de un árbol es $\lceil \text{diam}(T)/2 \rceil$.

### 1.3 Árboles con raíz

**Definición**: Un árbol con raíz $r$ es un árbol donde un vértice especial $r$ se designa como la raíz.

**Niveles y profundidad**: La profundidad de $v$ es la distancia $\text{dist}(r, v)$. El nivel $i$ es el conjunto de vértices a profundidad $i$.

**Altura**: La altura de un árbol con raíz es $\max_{v} \text{depth}(v)$.

---

## 2. Teoremas de conteo de árboles

### 2.1 Teorema de Cayley (1889)

**Teorema**: El número de árboles etiquetados con $n$ vértices es $n^{n-2}$.

**Demostración (Prüfer, 1958)**: Hay una biyección entre árboles y secuencias de Prüfer de longitud $n-2$. Cada posición puede tomar $n$ valores, hence $n^{n-2}$ secuencias.

$$\square$$

### 2.2 Teorema de Kirchhoff (Matrix-Tree)

**Teorema**: El número de árboles de expansión en un grafo $G$ es $\det(L')$ donde $L'$ es la matriz Laplaciana $L = D - A$ con una fila y columna eliminadas.

**Aplicaciones**:
- Para $K_n$: $\det(L') = n^{n-2}$
- Para $K_{m,n}$: $m^{n-1} n^{m-1}$

### 2.3 Árboles no etiquetados

**Teorema de Otter** (1948): El número de árboles no etiquetados con $n$ vértices $a_n$ satisfy:
$$a_n \sim C \cdot n^{-5/2} \cdot \alpha^n$$
donde $\alpha \approx 0.438$ y $C \approx 0.53495$.

---

## 3. Árboles binarios

### 3.1 Representación y propiedades

**Definición**: Un árbol binario es un árbol (con raíz) donde cada vértice tiene a lo sumo dos hijos, distinguiendo hijo izquierdo y derecho.

**Teorema de relación hojas-vértices**: En cualquier árbol binario, si $I$ es el número de vértices internos y $L$ el número de hojas, entonces $L = I + 1$.

**Demostración**: Cada vértice interno tiene exactamente 2 hijos. El número total de referencias a hijos es $2I$. Pero también equals $I + L - 1$ (cada vértice excepto la raíz es hijo de alguien). Hence $2I = I + L - 1$, giving $L = I + 1$.

$$\square$$

### 3.2 Árboles binarios completos

**Definición**: Un árbol binario completo tiene todos los niveles completamente llenos excepto possibly el último, que está fill from left.

**Teorema**: En un árbol binario completo con $n$ vértices internos, hay $n+1$ hojas.

### 3.3 Árboles de expresión

**Teorema**: La notación polaca (preorder) y polaca inversa (postorder) permiten representation única de expresiones aritméticas con árboles binarios.

---

## 4. Algoritmos en árboles

### 4.1 Recorridos

**Teorema de traversal**: Los tres métodos principales (preorder, inorder, postorder) tienen aplicaciones específicas:
- Preorder: copiar, búsqueda en profundidad
- Inorder: BST traversal, expresiones infijas
- Postorder: evaluación de expresiones, eliminación de nodos

**Complejidad**: Todos los traversals son $O(n)$.

### 4.2 Árboles de búsqueda binaria

**Teorema**: En un BST, búsqueda, inserción y eliminación tienen complejidad $O(h)$ donde $h$ es la altura. Para BST balanceado, $h = O(\log n)$.

**Teorema de AVL**: Un árbol AVL (altura balanceada) tiene altura $h \leq 1.44 \log_2(n+2)$.

### 4.3 Heap yPriority Queues

**Teorema**: Un heap binario implementa priority queue con $O(\log n)$ para insert y extract-min.

**Teorema de construcción**: Heap build en $O(n)$.

---

## 5. Árboles de expansión mínimos

### 5.1 Algoritmo de Kruskal

**Teorema de correctness**: El algoritmo de Kruskal produce un MST.

**Complejidad**: $O(E \log V)$ con Union-Find.

**Demostración**: Por el teorema de corte, la arista mínima cruzando cualquier corte está en algún MST. Kruskal explícitamente chooses such aristas, hence produce un MST.

$$\square$$

### 5.2 Algoritmo de Prim

**Teorema**: El algoritmo de Prim también produce un MST.

**Complejidad**: $O(V^2)$ con matriz de adyacencia, $O(E \log V)$ con heap.

### 5.3 Algoritmo de Boruvka

**Teorema**: Cada iteración de Boruvka reduce el número de componentes al menos a la mitad.

**Complejidad**: $O(E \log V)$.

### 5.4 Teorema de elección

**Teorema**: Todos los algoritmos de MST producen el mismo resultado (el MST es único si todas las aristas tienen pesos distintos).

---

## 6. Árboles y topología

### 6.1 Teorema de Jordan

**Teorema de Jordan**: Para cualquier árbol, existe un vértice cuyo removal leave subárboles más pequeños, cada uno con la mitad o menos de los vértices.

### 6.2 Árboles y homeomorfismo

**Teorema**: Dos árboles homeomorfos tienen el mismo "shape" disregarding la longitud de las aristas.

### 6.3 Arboles y embeddings planar

**Teorema de Schnyder**: Todo árbol plano puede embedded en el plano sin cruces usando $n$ vértices.

---

## 7. Árboles aleatorios

### 7.1 Modelo de Erdős-Rényi

**Teorema**: En el random tree model, la distribución de grados converge a Poisson.

### 7.2 Árboles de Galton-Watson

**Teorema**: Para offspring distribution con media $m > 1$, la probabilidad de extinción es la raíz menor de $f(s) = s$ donde $f$ es la función generadora.

### 7.3 Árboles brownianos

**Teorema de Aldous**: El límite de escala de árboles binarios aleatorios es el brownian tree.

---

## 8. Problemas abiertos contemporáneos

### 8.1 Conjetura de la complejidad de BST

**Problema**: Determinar si existe estructura de datos dinámica con $O(\log n)$ por operación para BSTs.

### 8.2 Árboles de Steiner

**Problema**: Encontrar el Steiner tree en graos es NP-duro. Approximar dentro de factor $1 + \varepsilon$ es un problema abierto.

### 8.3 Conjetura de Harary

**Problema**: Determinar el número mínimo de aristas para hacer un grao Hamiltonian.

---

## 9. Ejercicios de nivel doctoral

### Ejercicio 1

**Teorema de Kirchhoff**: Demostrar que $\det(L') = \tau(G)$, el número de árboles de expansión.

### Ejercicio 2

**Teorema de Prüfer**: Demostrar la bijection entre árboles y secuencias de Prüfer.

### Ejercicio 3

**Teorema de AVL**: Demostrar que la altura de un AVL tree es $h \leq 1.44 \log_2(n+2)$.

### Ejercicio 4

**Teorema de Huffman**: Demostrar que el algoritmo de Huffman produce un código óptimo.

### Ejercicio 5

**Teorema de Optimalidad de MST**: Demostrar que todo corte en un grafo, la arista de mínimo peso cruzando el corte está en algún MST.

### Ejercicio 6

**Teorema de Boruvka**: Demostrar que cada fase de Boruvka reduce el número de componentes al menos a la mitad.

### Ejercicio 7

**Teorema de Erdős-Sós**: Todo árbol con $n$ vértices y más de $\frac{n(k-1)}{2}$ aristas contiene un $k$-star. Demostrar.

### Ejercicio 8

**Teorema de Jordan**: El centro de un árbol es un vértice o dos adyacentes. Demostrar.

### Ejercicio 9

**Teorema de Cayley**: $n^{n-2}$ árboles etiquetados. Dar otra demostración mediante matrix-tree.

### Ejercicio 10

**Teorema de enumeración de Otter**: Derivar la fórmula asintótica para árboles no etiquetados.

### Ejercicio 11

**Conjetura de dinámica**: Implementar y analizar algoritmos de BST dinámicos.

### Ejercicio 12

**Teorema de Tarjan**: Demostrar que el union-find con path compression tiene complejidad amortizada casi lineal.

### Ejercicio 13

**Teorema de Spielman**: Demostrar que la connectividad algebraica puede computarse en tiempo casi lineal.

### Ejercicio 14

**Teorema de Karp**: Demostrar que el problema de Steiner tree es NP-duro.

### Ejercicio 15

**Teorema de Goemans**: Usar SDP para aproximar el problema de cut max.

---

## Soluciones detalladas

### Solución 1

Por el teorema de Matrix-Tree, $\tau(G) = \det(L')$. Esto puede probarse mediante el teorema de adjugate y propiedades del Laplaciano. Para $K_n$, $L = nI - J$, hence $\det(L') = n^{n-2}$.

$$\square$$

### Solución 2

Dado un árbol $T$, construir la secuencia de Prüfer eliminando iteratively la hoja con etiqueta mínima y registrando su vecino. Este proceso es reversible: dada una secuencia de Prüfer, rebuild el árbol único.

$$\square$$

### Solución 5

Sea $(S, V \setminus S)$ un corte. Sea $e$ la arista de mínimo peso cruzando el corte. Agregar $e$ al bosque vacío y apply cut property iteratively. Since aristas de mínimo peso cru cualquier corte están en algún MST, Kruskal encuentra un MST.

$$\square$$

### Solución 7

Sea $T$ un árbol con más de $\frac{n(k-1)}{2}$ aristas. Por averaging, hay un vértice de grado al menos $k$. Este vértice es el centro de un $K_{1,k}$. Remover y repetir inductivamente.

$$\square$$

---

## Referencias y lecturas adicionales

1. Cormen, T.H. (2009). *Introduction to Algorithms*. MIT Press.
2. Knuth, D.E. (1997). *The Art of Computer Programming, Volume 1*. Addison-Wesley.
3. Tarjan, R.E. (1983). *Data Structures and Network Algorithms*. SIAM.
4. Diestel, R. (2017). *Graph Theory*. Springer.
5. Bollobás, B. (1998). *Modern Graph Theory*. Springer.
6. Cayley, A. (1889). "On the theory of the analytical forms called trees". *Philosophical Magazine*.
7. Prüfer, H. (1918). "Neuer Beweis eines Satzes über Permutationen". *Archiv für Mathematik und Physik*.
8. Kirchoff, G. (1847). "Über die Auflösung der Gleichungen, auf welche man bei der Untersuchung der linearen Verteilung galvanischer Ströme stößt". *Annals of Physical Chemistry*.
