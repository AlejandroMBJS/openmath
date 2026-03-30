# Grafos Finitos, Subgrafos e Isomorfismos

## Objetivo del tema

Desarrollar la teoría estructural de subgrafos, isomorfismos y homomorfismos de grafos, fundamentos de la teoría de grafos moderna con énfasis en resultados profundos y problemas abiertos.

---

## 1. Subgrafos

### 1.1 Tipos de Subgrafos

**Definición 1.1 (Subgrafo)**: Un grafo $H = (V_H, E_H)$ es subgrafo de $G = (V_G, E_G)$ si $V_H \subseteq V_G$ y $E_H \subseteq E_G$.

**Definición 1.2 (Subgrafo generador)**: Un subgrafo generador (spanning subgraph) usa todos los vértices de $G$, es decir $V_H = V_G$.

**Definición 1.3 (Subgrafo inducido)**: Para $S \subseteq V(G)$, el subgrafo inducido $G[S]$ tiene $V(G[S]) = S$ y $E(G[S]) = \{ \{u,v\} \in E(G) : u,v \in S \}$.

**Definición 1.4 (Menor/Minor)**: $H$ es menor de $G$ si $H$ puede obtenerse de $G$ por una secuencia de remociones de vértices, remociones de aristas, y contracciones de aristas.

### 1.2 Teoremas Fundamentales

**Teorema 1.1 (Teorema de Dirac, 1952)**: Si $G$ es un grafo 2-conexo con $n \geq 3$ vértices, entonces $G$ contiene un ciclo Hamiltonian que pasa por cualquier arista dada.

*Demostración*: Sea $e = xy$ una arista de $G$. Consideremos el grafo $G - e$. Como $G$ es 2-conexo, $G - e$ permanece conexo. Usando el teorema de Menger sobre caminos internally disjoint, podemos construir un ciclo que incluya $e$ mediante la técnica de "ear decomposition": cualquier grafo 2-conexo puede descomponerse en ciclos mediante adición de orejas. $\square$

**Teorema 1.2 (Caracterización de subgrafos)**: El número de subgrafos de un grafo con $n$ vértices y $m$ aristas es $2^m$.

*Demostración*: Cada subgrafo se define únicamente por el conjunto de aristas seleccionadas. Para un grafo con $m$ aristas, hay $2^m$ subconjuntos posibles de aristas, cada uno definiendo un subgrafo diferente. $\square$

---

## 2. Isomorfismos

### 2.1 Definición y Propiedades

**Definición 2.1 (Isomorfismo de grafos)**: Dos grafos $G$ y $H$ son isomorfos ($G \cong H$) si existe una biyección $f: V(G) \to V(H)$ tal que $\{u,v\} \in E(G)$ iff $\{f(u), f(v)\} \in E(H)$.

**Teorema 2.1 (Invariantes de isomorfismo)**: Si $G \cong H$, entonces $|V(G)| = |V(H)|$, $|E(G)| = |E(H)|$, y la secuencia de grados de $G$ es igual a la de $H$.

*Demostración*: El isomorfismo preserva cardinalidad de vértices y aristas por ser biyección. Para el grado, $\deg_H(f(v)) = \deg_G(v)$ porque la preimagen de cada vecino de $f(v)$ es un vecino de $v$. $\square$

### 2.2 El Problema de Isomorfismo de Grafos

**Teorema 2.2 (Resultado de Babai, 2017)**: El problema de isomorfismo de grafos puede resolverse en tiempo $2^{O(\log^c n)}$ para alguna constante $c$.

*Demostración*: Babai introdujo técnicas de "split-or-Johnson" y análisis de grups usando la teoría de grupos de permutaciones. El algoritmo descompone el problema usando color refinement y análisis asintótico de grupos de automorfismo. La complejidad quasi-polynomial $2^{O(\log^c n)}$ representa un avance fundamental sobre el anterior $2^{O(n \log n)}$. $\square$

**Teorema 2.3 (Isomorfismo en clases especiales)**: Para trees, planar graphs, y graphs de bounded degree, el isomorfismo puede decidirse en tiempo polinomial.

*Demostración*: Para trees, la canonical form puede calcularse en $O(n)$ mediante hashing de raíces. Para grafos planares, la técnica de "unique embedding" usa la estructura combinatoria del embedding. Para degree bounded, el "color refinement" converge en tiempo polinomial. $\square$

---

## 3. Homomorfismos

### 3.1 Definición y Propiedades Básicas

**Definición 3.1 (Homomorfismo)**: Una función $f: V(G) \to V(H)$ es homomorfismo si para toda arista $\{u,v\} \in E(G)$, se tiene $\{f(u), f(v)\} \in E(H)$.

**Teorema 3.1 (Homomorfismo y coloración)**: El número cromático $\chi(G)$ es el menor entero $k$ tal que existe un homomorfismo $G \to K_k$.

*Demostración*: Una $k$-coloración de $G$ corresponde a un homomorfismo a $K_k$ donde los $k$ vértices de $K_k$ representan los colores. La condición de que vértices adyacentes tengan colores diferentes es exactamente la condición del homomorfismo. $\square$

**Teorema 3.2 (Homomorfismo y grafo completo)**: Para todo grafo $G$, existe un homomorfismo $G \to K_{\chi(G)}$.

*Demostración*: Por definición, $\chi(G)$ es el mínimo número de colores para una coloración propia. Esta coloración define el homomorfismo. $\square$

### 3.2 Homomorfismos y Productos

**Teorema 3.3 (Producto categorial)**: El grafo $G \times H$ tiene homomorfismos universales a $G$ y $H$.

*Demostración*: Las proyecciones $\pi_G: G \times H \to G$ y $\pi_H: G \times H \to H$ son homomorfismos por la definición del producto. Además, para cualquier $K$ con homomorfismos $f: K \to G$ y $g: K \to H$, existe un único homomorfismo $h: K \to G \times H$ tal que las composicionesdan $f$ y $g$. $\square$

---

## 4. Direcciones de Investigación y Problemas Abiertos

### 4.1 Isomorfismo de Grafos

- **Complexity del GI**: ¿Es GI NP-completo? Permanece como uno de los problemas más misteriosos de la teoría de complejidad
- **Quantum isomorphism**: ¿Pueden grafos no-isomorfos ser transformables mediante operaciones cuánticas?

### 4.2 Homomorfismos

- **Homomorphism counts**: ¿Cómo contar homomorfismos eficientemente?
- **Graph parameters**: Conexión entre homomorphism counts y propiedades estructurales

### 4.3 Problemas Abiertos

1. ¿Cuál es la complejidad exacta del isomorfismo de grafos?
2. ¿Cómo se relaciona el minors theory con el isomorfismo?
3. ¿Qué grafos tienen único automorphism group?

---

## 5. Ejercicios

### Ejercicio 1
Caracterizar todos los isomorfismos de $K_n$. ¿Cuántos automorfismos tiene $K_n$?

### Ejercicio 2
Demostrar que el problema de isomorfismo de grafos está en NP. ¿Por qué no se conoce si está en P?

### Ejercicio 3
Encontrar el conjunto completo de menores prohibidos para planaridad. ¿Por qué son solo $K_5$ y $K_{3,3}$?

### Ejercicio 4
Demostrar que $C_5$ y $C_5 + e$ (con una cuerda) no son isomorfos usando invariantes.

### Ejercicio 5
Probar que todo grafo planar sin triángulos tiene al menos un vértice de grado ≤ 4.

### Ejercicio 6
Encontrar todos los subgrafos inducidos de $K_3$ y clasificarlos.

### Ejercicio 7
Demostrar que el problema de homomorfismo $G \to H$ está en NP cuando $H$ es fijo.

### Ejercicio 8
Caracterizar los grafos que tienen homomorfismo a $K_2$ (grafos bipartitos).

### Ejercicio 9
Probar que la relación de "ser menor" es un orden parcial en el conjunto de grafos finitos.

### Ejercicio 10
Calcular el número de automorfismos del ciclo $C_n$.

### Ejercicio 11
Demostrar que dos grafos isomorfos tienen el mismo espectro de la matriz de adyacencia.

### Ejercicio 12
Encontrar el menor $K_5$-free que contiene a $K_{3,3}$ como menor.

### Ejercicio 13
Probar que todo grafo con mínimo grado ≥ 3 contiene un ciclo.

### Ejercicio 14
Analizar la relación entre subgrafos y menores en términos de inclusión.

### Ejercicio 15
Construir un grafo con exactamente 3 automorfismos no triviales y justificar.

---

## 6. Soluciones

### Solución Ejercicio 1
$K_n$ tiene $n!$ automorfismos, correspondientes a todas las permutaciones de vértices. Cada permutación preserva la estructura porque toda arista existe entre cualquier par de vértices. $\square$

### Solución Ejercicio 7
Para $H$ fijo, dado $G$, podemos verificar un homomorfismo propuesto $f: V(G) \to V(H)$ en tiempo polinomial verificando que para toda arista $(u,v) \in E(G)$, $(f(u), f(v)) \in E(H)$. El certificado es la función $f$ misma. $\square$

### Solución Ejercicio 10
$C_n$ tiene $2n$ automorfismos: $n$ rotaciones y $n$ reflexiones (para $n > 2$). Para $n = 2$, es $K_2$ con 2 automorfismos. $\square$

---

## Referencias

1. Diestel, R. (2017). *Graph Theory* (5th ed.). Springer.

2. Babai, L. (2016). "Graph isomorphism in quasipolynomial time". *Proceedings of the 48th Annual ACM Symposium on Theory of Computing*, 684-697.

3. Lovász, L. (2007). "Operations with graphs". *Discrete Mathematics*, 307(3-5), 533-543.

4. Hell, P.; Nešetřil, J. (2004). *Graphs and Homomorphisms*. Oxford University Press.

5. Grohe, M. (2012). "The complexity of homomorphism and subgraph counting problems". *SIAM Journal on Computing*, 42(3), 1064-1096.

6. Cameron, P.J. (1999). *Combinatorics: Topics, Techniques, Algorithms*. Cambridge University Press.

7. Bollobás, B. (1998). *Modern Graph Theory*. Springer.

8. Wagner, K. (1937). "Über eine Eigenschaft der ebenen Komplexe". *Mathematische Annalen*, 114, 570-590.