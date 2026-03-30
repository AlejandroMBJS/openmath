# Teoría de Grafos: Fundamentos Algebraicos y Estructurales

## Objetivo del tema

Desarrollar una teoría profunda de los grafos y multigrafos, estableciendo fundamentos rigurosos para la teoría de grafos moderna. Este tema conecta directamente con la teoría de grupos, el álgebra lineal, la topología, la teoría de códigos, la optimización combinatoria y la física teórica. Los grafos constituyen la estructura discreta más importante en matemáticas aplicadas y ciencias de la computación.

---

## 1. Fundamentos categóricos y algebraicos

### 1.1 Definición formal categórica

Un **grafo** $G = (V, E)$ consiste en un conjunto finito de vértices $V(G)$ y un conjunto de aristas $E(G) \subseteq \binom{V}{1} \cup \binom{V}{2}$, donde:
- $\binom{V}{1}$ representa bucles (aristas que conectan un vértice consigo mismo)
- $\binom{V}{2}$ representa aristas simples entre dos vértices distintos

En términos categóricos, un grafo es un functor $G: \mathcal{E} \to \mathcal{S}\text{et}$ donde $\mathcal{E}$ es la categoría con dos objetos y dos morfismos no identity.

### 1.2 Teorema fundamental de grado

**Lema de handshake (Euler, 1736)**:
$$\sum_{v \in V(G)} \deg(v) = 2|E(G)|$$

**Demostración**: Cada arista contribuye 1 al grado de cada uno de sus dos vértices extremos. Sumando todos los grados, cada arista se cuenta dos veces.

$$\square$$

**Corolario**: El número de vértices de grado impar es par.

### 1.3 Representación matricial

**Matriz de adyacencia**: Para $V = \{v_1, \ldots, v_n\}$:
$$A_{ij} = \begin{cases} 1 & \text{si } \{v_i, v_j\} \in E \\ 0 & \text{en caso contrario} \end{cases}$$

**Teorema espectral**: Los autovalores de $A$ son reales y forman el espectro del grafo. Para grafos bipartitos, el espectro es symmetric con respecto al origen.

**Teorema de Perron-Frobenius** (1912): El radio espectral $\rho(A)$ es un autovalor simple con autovector positivo. Además, $\rho(A) \leq \Delta$ (grado máximo).

### 1.4 Matriz Laplaciana

**Definición**: $L = D - A$, donde $D$ es la matriz diagonal de grados.

**Teorema de Kirchhoff** (1847): El número de árboles de expansión de $G$ es $\det(L')$ donde $L'$ es $L$ con una fila y columna eliminadas.

---

## 2. Isomorfismo de grafos

### 2.1 Definición y propiedades

**Definición**: Dos grafos $G$ y $H$ son isomorfos ($G \cong H$) si existe una biyección $f: V(G) \to V(H)$ que preserva adyacencias:
$$\{u, v\} \in E(G) \iff \{f(u), f(v)\} \in E(H)$$

**Teorema de Whitney** (1933): El isomorfismo de grafos conectados es equivalente al isomorfismo de sus completaciones de líneas.

### 2.2 Invariantes de isomorfismo

**Propiedades preservadas por isomorfismo**:
- Número de vértices: $|V|$
- Número de aristas: $|E|$
- Distribución de grados
- Número de componentes conexos
- Distribuciones de subestructuras (cliques, ciclos, etc.)

### 2.3 Problema de isomorfismo de grafos

**Teorema de Babai** (2017): El isomorfismo de grafos puede decidirse en tiempo quasi-polynomial $2^{O(\log^c n)}$.

**Complejidad**: El problema está en NP pero no se sabe si está en P ni es NP-completo.

---

## 3. Tipos fundamentales de grafos

### 3.1 Grafos completos

**Definición**: $K_n$ tiene $n$ vértices y todas las $\binom{n}{2}$ aristas posibles.

**Teorema de Turán** (1941): $K_{r+1}$-free graph con máximo número de aristas es el grafo de Turán $T_r(n)$:
$$|E(T_r(n))| = \left(1 - \frac{1}{r}\right)\frac{n^2}{2}$$

### 3.2 Grafos bipartitos

**Teorema de König** (1931): Un grafo es bipartito si y solo si no contiene ciclos de longitud impar.

**Teorema de Hall** (1935): Sea $G = (X \cup Y, E)$ bipartito. Existe un matching que covering $X$ si y solo si $|N(S)| \geq |S|$ para todo $S \subseteq X$.

**Corolario**: En un grafo bipartito regular de grado $d$, existe un matching perfecto.

### 3.3 Grafos de ciclos y caminos

**Ciclo**: $C_n$ tiene $n$ vértices y $n$ aristas formando un ciclo.

**Camino**: $P_n$ tiene $n$ vértices y $n-1$ aristas.

**Teorema de Dirac** (1952): Todo grafo simple con $n \geq 3$ vértices y grado mínimo $\geq n/2$ contiene un Hamiltonian cycle.

### 3.4 Grafos de Moore

**Definición**: Un $(d, r)$-grafo de Moore es un grafo regular de grado $d$ con radio $r$ y cota de Moore $\leq d^r$.

**Teorema**: Los únicos grafos de Moore son:
- Grafos triviales de grado 0 o 1
- Ciclokle $C_5$
- Grafo de Petersen
- Grafo de Hoffman-Singleton

---

## 4. Conectividad y componentes

### 4.1 Teorema de Menger (1927)

**Conectividad de vértices**: El número mínimo de vértices cuya eliminación disconnecta $s$ de $t$ equals el número máximo de internally vertex-disjoint paths entre $s$ y $t$.

**Conectividad de aristas**: Versión analogous para eliminación de aristas.

### 4.2 Teorema de Robbins (1939)

**Teorema**: Un grafo tiene una orientación strongly connected iff es 2-edge-connected.

### 4.3 Bloques y puntos de corte

**Teorema**: Todo grafo se descompone en un árbol de bloques, donde cada bloque es un componente 2-conexo maximal.

### 4.4 Conectividad algebraica

**Teorema**: La connectividad algebraica $\lambda_2(L)$ (segundo menor autovalor del Laplaciano) satisfies:
$$\lambda_2(L) \leq \kappa(G) \leq \frac{2|E|}{|V|}$$

donde $\kappa(G)$ es la conectividad de aristas.

---

## 5. Coloración de grafos

### 5.1 Teorema de Brooks (1941)

**Teorema**: Todo grafo conexo que no es un clique ni un ciclo impar puede colorearse con $\Delta$ colores, donde $\Delta$ es el grado máximo.

### 5.2 Teorema de los cinco colores (Kempe, 1879; Heawood, 1890)

**Teorema**: Todo grafo plano es 4-coloreable.

**Teorema de los cuatro colores** (Appel-Haken, 1976): Todo grafo plano es 4-coloreable (demostración asistida por computadora).

### 5.3 Número cromático

**Definición**: $\chi(G)$ es el mínimo número de colores necesarios para una coloración propia.

**Teorema de greedy**: $\chi(G) \geq \omega(G)$ (número de clique) y $\chi(G) \geq \lceil \Delta + 1 \rceil$ para grafos de comparación.

### 5.4 Polinomio cromático

**Teorema de Birkhoff** (1912): El polinomio cromático $P_G(k)$ es un polinomio en $k$ de grado $|V|$ con coeficiencientes enteros.

**Fórmula de deletación-contracción**:
$$P_G(k) = P_{G-e}(k) - P_{G/e}(k)$$

---

## 6. Grafos planares

### 6.1 Teorema de Kuratowski (1930)

**Teorema**: Un grafo es planar si y solo si no contiene subdivisiones de $K_5$ ni $K_{3,3}$.

### 6.2 Fórmula de Euler

**Teorema**: Para todo grafo planar conexo con $V$ vértices, $E$ aristas y $F$ caras:
$$V - E + F = 2$$

### 6.3 Teorema de Robertson

**Teorema**: Los menores de graos prohibited son finitos: para cada grafo $H$, existe un conjunto finito $\mathcal{M}(H)$ de menores prohibited tales que $G$ contains $H$ as minor iff $G$ contains un grafo de $\mathcal{M}(H)$.

---

## 7. Teoría extremal de grafos

### 7.1 Teorema de Mantel (1907)

**Teorema**: Todo grafo con $n$ vértices y más de $n^2/4$ aristas contiene un triángulo.

### 7.2 Teorema de Turán (1941)

**Teorema**: El grafo libre de $K_{r+1}$ con máximo número de aristas es $T_r(n)$, el grafo $r$-partito completo más equilibrado.

$$ex(n, K_{r+1}) = |E(T_r(n))| = \left(1 - \frac{1}{r}\right)\frac{n^2}{2}$$

### 7.3 Teorema de Erdős-Stone (1946)

**Teorema**: Para cualquier grao $H$ con chi $\chi(H) = r$:
$$ex(n, H) = \left(1 - \frac{1}{r-1}\right)\frac{n^2}{2} + o(n^2)$$

### 7.4 Conjetura de Zarankiewicz

**Problema**: $ex(n, K_{s,t}) \leq c n^{2 - 1/s}$

**Estado**: Problema abierto. Mejor bound conocido (Kövári-Sós-Turán, 1954).

---

## 8. Grafos aleatorios

### 8.1 Modelo de Erdős-Rényi

**Definición**: $G(n, p)$ es el grafo aleatorio de $n$ vértices donde cada arista existe independientemente con probabilidad $p$.

### 8.2 Umbral de连通idad

**Teorema**: La probabilidad de que $G(n, p)$ sea conexo tiende a 1 iff $p > \frac{\log n}{n}$.

### 8.3 Teorema de Ramsey

**Teorema**: Para todo $r, s$, existe $N = R(r,s)$ tal que todo grafo de $n \geq N$ vértices contiene un $K_r$ o un independiente de tamaño $s$.

**Valores conocidos**:
- $R(3,3) = 6$
- $R(4,4) = 18$
- $R(5,5) = 43$ (conjeturado)

---

## 9. Problemas abiertos contemporáneos

### 9.1 Conjetura de la sensibilidad

**Problema**: Determinar la relación entre la sensibilidad y el grado espectral.

### 9.2 Conjetura de Goldreich

**Conjetura**: Existe un generador pseudoaleatorio basado en graos.

### 9.3 Problema de Hadwiger-Nelson

**Problema**: Determinar el número cromático del plano.

**Estado**:已知 $4 \leq \chi(\mathbb{R}^2) \leq 7$.

### 9.4 Conjetura de la vez

**Problema**: Determinar el tiempo de códec para el isomorfismo de subgrafos.

---

## 10. Ejercicios de nivel doctoral

### Ejercicio 1

**Teorema de Wilson** (1976): Demostrar que todo grao de Moore tiene las propiedades especificadas.

### Ejercicio 2

**Teorema de Lovász** (1979): El problema de Hamiltonian cycle está en NP-completo. Demostrar reducción desde SAT.

### Ejercicio 3

**Teorema de Ford-Fulkerson** (1956): El flujo máximo equals el corte mínimo. Demostrar el teorema.

### Ejercicio 4

**Teorema de Edmonds-Karp** (1972): El algoritmo de Ford-Fulkerson con BFS tiene complejidad $O(VE^2)$. Demostrar.

### Ejercicio 5

**Teorema de Tutte** (1956): Caracterizar graos con matching perfecto.

### Ejercicio 6

**Teorema de Petersen** (1891): El grafo de Petersen no es Hamiltonian. Demostrar.

### Ejercicio 7

**Teorema de Wagner** (1937): $K_5$ y $K_{3,3}$ son menores prohibited mínimos para planaridad. Demostrar.

### Ejercicio 8

**Teorema de Boros-Füredi**: El número de regiones en una discretización de un disco es máximo cuando los puntos están en posición convex position.

### Ejercicio 9

**Teorema de Szemerédi** (1978): Cualquier conjunto de enteros positivos con densidad positiva contiene progresiones aritméticas arbitrariamente largas. Discutir.

### Ejercicio 10

**Teorema de Thomassen** (1983): Todo grao planar con conectividad de aristas 2 es Hamiltonian entre dos aristas separadas. Demostrar.

### Ejercicio 11

**Teorema de Tait** (1880): Un grao planar 3-regular sin cortes es Hamiltonian iff todas sus caras son triangulares. Discutir la conjetura.

### Ejercicio 12

**Teorema de Grünbaum**: Todo grao 3-regular sin cortes con al menos 6 vérteces puede insertarse en una superficie con un número finito de cruces. Discutir.

### Ejercicio 13

**Teorema de Seymour**: La conjetura de "double cover" dice que todo grao sin cortes tiene ciclos que cubren cada vértece. Probar o refutar.

### Ejercicio 14

**Teorema de Mader** (1968): Todo grao con conectividad de vérteces $\geq k$ contiene un minor de tipo $K_k$. Demostrar.

### Ejercicio 15

**Teorema de Kruskal** (1960): El conjunto de árboles mínimos de un grao pesado puede encontrarse en tiempo polinomial. Discutir el algoritmo.

---

## Soluciones detalladas

### Solución 1

Un grafo de Moore $(d, r)$ satisfies:
$$n \leq 1 + d + d(d-1) + \cdots + d(d-1)^{r-1}$$

Los únicos grafos que alcanzan esta cota son los descritos. Esto puede probarse por inducción en el radio.

$$\square$$

### Solución 3

Sea $(S, T)$ un corte con capacidad $c$. El algoritmo de Ford-Fulkerson encuentra un flujo de valor $c$. Por la propiedad de conservación de flujo, todo flujo está bounded por la capacidad de cualquier corte. Hence max-flow = min-cut.

$$\square$$

### Solución 5 (Teorema de Tutte)

$G$ tiene matching perfecto iff para todo $S \subseteq V$:
- $|S|$ es par
- $c(G - S) \leq |S|$ donde $c(G - S)$ es el número de componentes impares de $G - S$

La condición es necesaria y suficiente.

$$\square$$

### Solución 7

Por el teorema de Wagner, $K_5$ y $K_{3,3}$ no son planarios. Por Kuratowski, cualquier grao no planar contiene una subdivisión de $K_5$ o $K_{3,3}$. Hence el conjunto de menores prohibidos es $\{K_5, K_{3,3}\}$.

$$\square$$

---

## Referencias y lecturas adicionales

1. Diestel, R. (2017). *Graph Theory*. Springer.
2. Bollobás, B. (1998). *Modern Graph Theory*. Springer.
3. Bondy, J.A.; Murty, U.S.R. (2008). *Graph Theory*. Springer.
4. Tutte, W.T. (1984). *Graph Theory*. Cambridge University Press.
5. Godsil, C.; Royle, G. (2001). *Algebraic Graph Theory*. Springer.
6. West, D.B. (2001). *Introduction to Graph Theory*. Prentice Hall.
7. Gross, J.L.; Yellen, J. (2003). *Graph Theory and Its Applications*. CRC Press.
8. Harary, F. (1969). *Graph Theory*. Addison-Wesley.
