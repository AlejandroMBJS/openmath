# Representacion de Relaciones

## Objetivo del tema

Estudiar los diferentes métodos para representar relaciones matemáticas, incluyendo matrices, grafos y conjuntos de pares.

## 1. Representacion mediante conjuntos de pares

### 1.1 Forma extension

Una relación $R$ de $A$ en $B$ se representa como:
$$R = \{(a_1, b_1), (a_2, b_2), \ldots, (a_n, b_n)\}$$

### 1.2 Ventajas y desventajas

- Ventaja: Explícita y fácil de entender
- Desventaja: Ineficiente para relaciones grandes

## 2. Matriz de adyacencia

### 2.1 Definicion

Para $A = \{a_1, \ldots, a_m\}$ y $B = \{b_1, \ldots, b_n\}$, la matriz $M_R$ de tamaño $m \times n$:
$$M_R[i,j] = \begin{cases} 1 & \text{si } a_i R b_j \\ 0 & \text{si } a_i \not R b_j \end{cases}$$

### 2.2 Relaciones en un conjunto

Para relación en $A$, $M_R$ es cuadrada de $n \times n$.

### 2.3 Ejemplo

$A = B = \{1, 2, 3\}$, $R = \{(1,1), (1,2), (2,3), (3,3)\}$:
$$M_R = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 1 \end{pmatrix}$$

## 3. Representacion mediante grafo

### 3.1 Grafo dirigido

Los elementos de $A$ son vértices. Hay arco de $a$ a $b$ si $aRb$.

### 3.2 Grafo no dirigido

Para relaciones simétricas, se usan aristas sin dirección.

### 3.3 Diagrama de flechas

Cada par ordenado se representa con una flecha del primer elemento al segundo.

## 4. Operaciones con matrices

### 4.1 union de relaciones

$$M_{R \cup S} = M_R \lor M_S$$ (OR lógico)

### 4.2 interseccion

$$M_{R \cap S} = M_R \land M_S$$ (AND lógico)

### 4.3 composicion

$$M_{R \circ S} = M_R \cdot M_S$$ (multiplicación booleana)

## 5. Representacion implicita

### 5.1 Regla de pertenencia

$$R = \{(x, y) : P(x, y)\}$$ donde $P$ es una propiedad.

### 5.2 Ejemplos

- $R = \{(x, y) : x < y\}$ en $\mathbb{N}$
- $R = \{(A, B) : A \subseteq B\}$ en el conjunto potencia

### 5.3 Ventajas

Útil para relaciones infinitas o definidas por propiedades.

## 6. Ejercicios

### Ejercicio 1

Sea $R = \{(1,2), (2,2), (2,3)\}$ en $\{1,2,3\}$. Construir la matriz de adyacencia.

### Ejercicio 2

Representar graficamente la relación $R = \{(x,y) : x | y\}$ en $\{1,2,3,4\}$.

### Ejercicio 3

Calcular $M_R \cdot M_R$ para la relación $R$ del ejercicio 1.

### Ejercicio 4

Encontrar la representación como conjunto para $R = \leq$ en $\{1,2,3\}$.

### Ejercicio 5

Sea $M_R = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$. Encontrar los pares de $R$.

### Ejercicio 6

Calcular $M_{R \cup S}$ si $M_R = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ y $M_S = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.

### Ejercicio 7

Determinar si $R = \{(1,1), (2,2), (3,3)\}$ es reflexiva usando su matriz.

### Ejercicio 8

Sea $R$ simétrica. Si $M_R = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$, ¿cuál es la entrada (2,1)?

### Ejercicio 9

Representar $R = \{(x,y) : x = y + 1\}$ en $\mathbb{Z}$ como regla de pertenencia.

### Ejercicio 10

Calcular la composición de $R = \{(1,2)\}$ y $S = \{(2,3)\}$.

### Ejercicio 11

Construir la matriz de $R^{-1}$ si $M_R = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.

### Ejercicio 12

Explicar por qué la matriz de una relación de equivalencia tiene forma de bloques.

### Ejercicio 13

Sea $R$ la relación "parallel" entre rectas. Representar en un sistema de 3 rectas.

### Ejercicio 14

Encontrar la representación implícita de $R = \{(n, 2n) : n \in \mathbb{N}\}$.

### Ejercicio 15

Calcular $M_R$ para $R$ definida por $aRb \iff a + b$ es par en $\{1,2,3\}$.

## Soluciones

### Solución 1

$M_R = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}$ (asumiendo orden 1,2,3)

### Solución 2

Vertices: {1,2,3,4}. Arcos: 1→1, 1→2, 1→3, 1→4; 2→2, 2→4; 3→3; 4→4.

### Solución 3

$M_R \cdot M_R$ en multiplicación booleana da $M_{R \circ R}$.

### Solución 4

$\leq = \{(1,1), (1,2), (1,3), (2,2), (2,3), (3,3)\}$

### Solución 5

$R = \{(1,1), (2,1), (2,2)\}$

### Solución 6

$M_{R \cup S} = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$

### Solución 7

La diagonal de $M_R$ es $(1,1,1)$, todos 1, entonces SÍ es reflexiva.

### Solución 8

Por simetría, debe ser 1 también.

### Solución 9

$R = \{(x,y) : x - y = 1\}$

### Solución 10

$R \circ S = \{(1,3)\}$

### Solución 11

$M_{R^{-1}} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ (transpuesta)

### Solución 12

Porque forma bloques de clases de equivalencia que son subconjuntos disjuntos.

### Solución 13

Tres rectas paralelas: cada par tiene relación, grafo completo no dirigidas.

### Solución 14

$R = \{(n, 2n) : n \in \mathbb{N}\}$

### Solución 15

$Pares con suma par: $(1,1), (1,3), (2,2), (3,1), (3,3)$
$M_R = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}$

## Direcciones de investigacion y problemas abiertos

1. **Algebra matricial de relaciones:** El estudio de matrices booleanas y sus aplicaciones en grafos y relaciones tiene conexiones con la teoria de automatas.

2. **Representacion de relaciones fuzzy:** La extension de matrices de adyacencia a valores en [0,1] tiene aplicaciones en logica fuzzy y sistemas dinamicos.

3. **Grafos y matrices espectrales:** Los autovalores de matrices de relaciones proporcionan informacion estructural sobre los grafos correspondientes.

4. **Representacion computacional de relaciones:** Estructuras de datos eficientes para representar relaciones grandes son fundamentales en bases de datos y algoritmos.

## Referencias

1. Brualdi, R. A. & Ryser, H. J. (1991). *Combinatorial Matrix Theory*. Cambridge University Press.
2. Cvetkovic, D. M., Doob, M., & Sachs, H. (1995). *Spectra of Graphs*. Academic Press.
3. Schmidt, G. (2011). *Relational Mathematics*. Cambridge University Press.
4. Harary, F. (1969). *Graph Theory*. Addison-Wesley.
5. Diestel, R. (2017). *Graph Theory*. Springer.
