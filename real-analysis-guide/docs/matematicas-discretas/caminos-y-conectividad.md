# Caminos, Ciclos y Conectividad: Teoría de Grafos Estructural

## Objetivo del tema

Desarrollar una teoría profunda de caminos, ciclos y conectividad en grafos, estableciendo fundamentos rigurosos para la teoría de grafos moderna. Este tema conecta directamente con la teoría de redes, el análisis de algoritmos, la topología algebraica y la optimización combinatoria. La conectividad es una de las propiedades más fundamentales de los grafos con aplicaciones en redes de comunicación, transporte, y sistemas distribuidos.

---

## 1. Teoría de caminos y ciclos

### 1.1 Definiciones fundamentales

**Definición de camino**: Un camino de longitud $k$ en $G$ es una secuencia de vértices $v_0, v_1, \ldots, v_k$ tales que $\{v_i, v_{i+1}\} \in E(G)$ para todo $i = 0, \ldots, k-1$.

**Notación**: $P_k$ denota un camino de longitud $k$ (k+1 vértices).

**Definición de trail**: Un trail es un camino donde ninguna arista se重复a.

**Definición de ciclo**: Un ciclo de longitud $k$ es un camino $v_0, v_1, \ldots, v_k = v_0$ donde $k \geq 3$ y $v_i \neq v_j$ para $0 \leq i < j < k$.

### 1.2 Teorema de estructura de caminos

**Teorema de Dirac** (1952): Todo grafo simple con $n \geq 3$ vértices y grado mínimo $\delta(G) \geq n/2$ contiene un Hamiltonian cycle.

**Demostración**: Sea $P = v_0 v_1 \ldots v_{n-1}$ el camino más largo. Si $v_{n-1}$ no es adyacente a $v_0$, el grafo tiene un ciclo más largo. Por contradicción, asumir que no hay ciclo Hamiltonian. Usando el grado mínimo, demostrar que existe una conexión que closes el ciclo.

$$\square$$

**Teorema de Ore** (1960): Si para todo par de no-adyacentes $u, v$, $\deg(u) + \deg(v) \geq n$, entonces $G$ es Hamiltonian.

### 1.3 Ciclos en grafos bipartitos

**Teorema**: Todo ciclo en un grafo bipartito tiene longitud par.

**Demostración**: En un grafo bipartito, los vértices pueden particionarse en $X$ y $Y$. Todo camino alterna entre $X$ y $Y$. Para volver al punto de partida después de un número de pasos, debe cambiar un número par de veces, hence longitud par.

$$\square$$

### 1.4 Ciclos y subgrafo

**Teorema de cycle space**: El conjunto de todos los ciclos forma un espacio vectorial sobre $\mathbb{F}_2$ con la operación de diferencia simétrica.

**Definición**: El ciclo space tiene dimensión $m - n + c$, donde $m = |E|$, $n = |V|$, y $c$ es el número de componentes conexos.

---

## 2. Conectividad de vértices

### 2.1 Definición de conectividad

**Definición**: La conectividad de vértices $\kappa(G)$ es el mínimo número de vértices cuya eliminación disconnecta $G$ o lo reduce a un solo vértice.

**Teorema de Whitney** (1932): Para todo grafo simple:
$$\kappa(G) \leq \lambda(G) \leq \delta(G)$$

donde $\lambda(G)$ es la conectividad de aristas y $\delta(G)$ el grado mínimo.

### 2.2 Teorema de Menger (1927)

**Teorema (versión de vértices)**: El número máximo de internally vertex-disjoint paths entre dos vértices $s$ y $t$ equals el mínimo número de vértices (excluyendo $s$ y $t$) cuya eliminación disconnecta $s$ de $t$.

**Teorema (versión de aristas)**: El número máximo de edge-disjoint paths entre $s$ y $t$ equals el mínimo número de aristas cuya eliminación disconnecta $s$ de $t$.

### 2.3 Conectividad algebraica

**Teorema de Fiedler** (1973): La conectividad algebraica $\lambda_2(G)$ (segundo menor autovalor del Laplaciano) satisfy $\kappa(G) \leq \lambda_2(G) \leq 2\kappa(G)$.

**Corolario**: $\lambda_2(G) > 0$ iff $G$ es conexo.

### 2.4 Bloques

**Definición**: Un bloque es un subgrafo maximal que es 2-conexo (sin puntos de corte).

**Teorema de estructura**: Todo grafo se descompone en un árbol de bloques, donde los nodos del árbol son los bloques y los puntos de corte.

---

## 3. Conectividad de aristas

### 3.1 Definición

**Definición**: La conectividad de aristas $\lambda(G)$ es el mínimo número de aristas cuya eliminación disconnecta $G$.

### 3.2 Teorema de Robbins (1939)

**Teorema**: Un grafo tiene una orientación strongly connected si y solo si es 2-edge-connected.

**Corolario**: Todo grafo 2-edge-connected tiene una orientación que lo hace strongly connected.

### 3.3 Grafos 2-conexos

**Teorema de Dirac** (1960): Todo grafo 2-conexo contiene un ciclo que pasa por cualquier conjunto de $k$ vértices dado, para cualquier $k \leq n/2$.

### 3.4 Teorema de Tutte

**Teorema de Wheel**: Todo grao 3-conexo planar contiene un wheel $W_n$ como minor.

---

## 4. Distancia y métricas de grafos

### 4.1 Definición de distancia

**Definición**: La distancia $d_G(u, v)$ es la longitud del camino más corto entre $u$ y $v$. Si no existe camino, $d_G(u, v) = \infty$.

**Propiedades métricas**:
1. No negatividad: $d(u, v) \geq 0$
2. Identidad: $d(u, v) = 0 \iff u = v$
3. Simetría: $d(u, v) = d(v, u)$
4. Desigualdad triangular: $d(u, v) \leq d(u, w) + d(w, v)$

### 4.2 Excentricidad y radio

**Definición**: La excentricidad de $v$ es $\varepsilon(v) = \max_{u \in V} d(v, u)$.

**Definición**: El radio de $G$ es $\text{rad}(G) = \min_{v \in V} \varepsilon(v)$.

**Definición**: El diámetro de $G$ es $\text{diam}(G) = \max_{v \in V} \varepsilon(v)$.

**Teorema**: Para cualquier grao, $\text{rad}(G) \leq \text{diam}(G) \leq 2 \cdot \text{rad}(G)$.

### 4.3 Centro y periferia

**Definición**: El centro de $G$ es el conjunto de vértices con excentricidad mínima (igual al radio).

**Teorema de Jordan** (1869): El centro de cualquier árbol es un vértice o un arco.

### 4.4 Grafos de distancia

**Teorema de Isbell**: El injective hull de un grafo metric space puede realized mediante un grafo de distancia.

---

## 5. Componentes conexas

### 5.1 Teorema de descomposición

**Teorema**: Las componentes conexas de un grafo forman una partición de $V(G)$ tal que:
- Cada componente induce un subgrafo conexo maximal
- No hay aristas entre componentes

**Demostración**: Definir relación $u \sim v$ si existe un camino entre $u$ y $v$. Esta es una relación de equivalencia; las clases de equivalencia son las componentes conexas.

$$\square$$

### 5.2 Componentes biconvexas

**Teorema**: Las componentes 2-conexas (bloques) pueden encontrarse en tiempo lineal usando DFS.

### 5.3 Conectividad y componentes

**Teorema**: Si $\kappa(G) \geq k$, entonces $G$ es $k$-conexo iff toda removal de menos de $k$ vértices leave un grafo conexo.

---

## 6. Caminos disjuntos y teorema de Menger

### 6.1 Teorema local de Menger

**Teorema**: Sean $s, t$ vértices no adyacentes en $G$. El número máximo de $s$-$t$ paths internally disjoint equals el mínimo tamaño de un $s$-$t$ vertex cut.

### 6.2 Teorema global de Menger

**Teorema**: Un grafo es $k$-conexo iff hay $k$ paths internamente disjuntos entre cualquier par de vértices.

### 6.3 Consecuencias

**Corolario (Teorema de Dirac)**: Todo grao $k$-conexo contains un ciclo que pasa por cualquier conjunto de $k$ vértices.

---

## 7. Flujo y conectividad

### 7.1 Teorema de max-flow min-cut

**Teorema de Ford-Fulkerson** (1956): En cualquier red de flujo, el flujo máximo equals la capacidad mínima del corte.

**Demostración**: Por dualidad, el valor de cualquier flujo está bounded above por la capacidad de cualquier corte. El algoritmo de augmenting paths encuentra flujo hasta que no exista augmenting path. El conjunto de aristas desde $S$ (vértices alcanzables desde la fuente) hasta $V \setminus S$ forma un corte de capacidad igual al flujo.

$$\square$$

### 7.2 Aplicaciones

**Teorema de König**: En un grafo bipartito, el tamaño máximo del matching equals el tamaño mínimo del vertex cover.

**Demostración**: Reducir a un problema de flujo y aplicar max-flow min-cut.

$$\square$$

---

## 8. Grafos de Cayley

### 8.1 Definición

**Definición**: El grafo de Cayley de un grupo $G$ con conjunto generador $S$ tiene vértices $G$ y aristas $(g, gs)$ para $g \in G, s \in S$.

### 8.2 Propiedades

**Teorema**: Todo grafo de Cayley es vertex-transitive.

**Teorema**: Si $S$ genera $G$ y no contiene identidad, el grafo de Cayley es conexo.

### 8.3 Aplicaciones

Los grafos de Cayley modelan redes de interconexión y tienen aplicaciones en teoría de grupos y combinatoria.

---

## 9. Problemas abiertos contemporáneos

### 9.1 Conjetura de la sensibilidad

**Problema**: Relacionar la sensibilidad de un grao con su espectro.

### 9.2 Problema de Hamiltonian cycle

**Estado**: NP-completo para graos generales. No se conoce condición necessary and sufficient.

### 9.3 Conjetura de Loebl

**Conjetura**: Para todo $k$, existe $n_k$ tal que todo grao con al menos $n_k$ vértices y grado mínimo al menos $n_k/2$ contiene un subdivision de $K_k$.

### 9.4 Conjetura de Hajós

**Problema**: Determinar si todo grao 4-regular tiene un ciclo Hamiltonian.

---

## 10. Ejercicios de nivel doctoral

### Ejercicio 1

**Teorema de Dirac** (1952): Demostrar que $\delta(G) \geq n/2$ implies Hamiltonian cycle.

### Ejercicio 2

**Teorema de Menger** (1927): Demostrar las versiones local y global.

### Ejercicio 3

**Teorema de Ford-Fulkerson**: Demostrar el teorema max-flow min-cut.

### Ejercicio 4

**Teorema de König**: Matching máximo en bipartitos equals vertex cover mínimo. Demostrar.

### Ejercicio 5

**Teorema de Tutte** (1948): Caracterizar grafos con matching perfecto usando la condición de Tutte.

### Ejercicio 6

**Teorema de Fleischer**: Las componentes de los graos el天空 se conectan mediante la estructura de blocks.

### Ejercicio 7

**Teorema de Thomassen**: Todo grao planar 2-conexo tiene un ciclo Hamiltonian entre dos aristas cualesquiera. Demostrar.

### Ejercicio 8

**Teorema de Kruskal**: Encontrar el MST en tiempo $O(E \log V)$. Demostrar optimalidad.

### Ejercicio 9

**Teorema de Boruvka**: El algoritmo de Boruvka para MST tiene complejidad $O(E \log V)$.

### Ejercicio 10

**Teorema de Dijkstra**: Demostrar que el algoritmo de Dijkstra encuentra caminos más cortos con pesos no negativos.

### Ejercicio 11

**Teorema de Bellman-Ford**: Algoritmo para graos con pesos negativos. Demostrar correctitud.

### Ejercicio 12

**Teorema de Floyd-Warshall**: Encontrar todos los caminos más cortos en tiempo $O(V^3)$.

### Ejercicio 13

**Teorema de Johnson**: Mejorar complejidad para graos dispersos.

### Ejercicio 14

**Teorema de Gabow**: Algoritmo para matching en graos generales.

### Ejercicio 15

**Conjetura de Hadwiger**: Si $\chi(G) \geq r$, entonces $G$ contiene $K_r$ como minor. Estado de la investigación.

---

## Soluciones detalladas

### Solución 1

Sea $P = v_0 v_1 \ldots v_{n-1}$ un camino máximo. Por $\delta(G) \geq n/2$, existe $i$ tal que $v_0$ y $v_{n-1}$ son ambos adyacentes a vértices del camino. Esto permite construir un ciclo Hamiltonian mediante reordenación de los vértices.

$$\square$$

### Solución 2

Para la versión local: usar augmenting paths. Si hay $k$ paths internally disjoint, cualquier vertex cut debe tener al menos $k$ vértices. Conversely, si hay menos de $k$ vertices en cualquier cut, existe un path adicional.

Para la versión global: aplicar el teorema local a cada par de vértices.

$$\square$$

### Solución 3

Sea $f$ un flujo y $(S, \bar{S})$ un corte con fuente $s \in S$ y sumidero $t \in \bar{S}$. El valor del flujo es $val(f) = \sum_{e \in \delta^+(S)} f(e)$. Por conservación, $val(f) \leq cap(S, \bar{S})$. Si el flujo es máximo y no hay augmenting path, el conjunto de vértices alcanzables desde $s$ forma un corte cuya capacidad equals el flujo.

$$\square$$

### Solución 5

$G$ tiene matching perfecto iff para todo $S \subseteq V$, el número de componentes impares de $G - S$ es menor o igual a $|S|$.

*Necesidad*: Si hay matching perfecto, las componentes impares requieren al menos un vértice de cada una en el matching.

*Suficiencia*: Construir matching mediante reducción al caso $S = \emptyset$.

$$\square$$

---

## Referencias y lecturas adicionales

1. Diestel, R. (2017). *Graph Theory*. Springer.
2. Bollobás, B. (1998). *Modern Graph Theory*. Springer.
3. Bondy, J.A.; Murty, U.S.R. (2008). *Graph Theory*. Springer.
4. Tutte, W.T. (1984). *Graph Theory*. Cambridge University Press.
5. Ford, L.R.; Fulkerson, D.R. (1962). *Flows in Networks*. Princeton University Press.
6. Menger, K. (1927). "Zur allgemeinen Kurventheorie". *Fundamenta Mathematicae*.
7. Dirac, G.A. (1952). "Some theorems on abstract graphs". *Proceedings of the London Mathematical Society*.
8. Ore, O. (1960). "Hamiltonian connected graphs". *Journal of Mathematics*.
