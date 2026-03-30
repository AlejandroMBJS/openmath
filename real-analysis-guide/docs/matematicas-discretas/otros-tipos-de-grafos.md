# Otros Tipos de Grafos

## Objetivo del tema

Estudiar variantes especializadas de grafos con propiedades y aplicaciones particulares.

## 1. Grafos bipartitos

### 1.1 Definición

$G$ es bipartito si $V = A \cup B$ con $A \cap B = \emptyset$ y toda arista conecta un vértice de $A$ con uno de $B$.

### 1.2 Notación

$$G = (A \cup B, E)$$

### 1.3 Ejemplos

- Camino $P_n$
- Árboles
- Grafo bipartito completo $K_{m,n}$

### 1.4 Caracterización

$G$ es bipartito $\iff$ no contiene ciclos impares.

## 2. Grafos completos

### 2.1 Definición

$K_n$ tiene $n$ vértices y toda arista posible.

### 2.2 Propiedades

- $|E| = \binom{n}{2} = n(n-1)/2$
- $\deg(v) = n-1$ para todo $v$

## 3. Grafos cíclicos

### 3.1 Definición

$C_n$ es un ciclo con $n$ vértices y $n$ aristas.

### 3.2 Propiedades

- $\deg(v) = 2$ para todo $v$
- Conectado
- No es árbol

## 4. Grafos de camino

### 4.1 Definición

$P_n$ es un camino con $n$ vértices.

### 4.2 Propiedades

- Dos vértices de grado 1 (extremos)
- $n-2$ vértices de grado 2

## 5. Grafos regulares

### 5.1 Definición

$G$ es $k$-regular si $\deg(v) = k$ para todo $v$.

### 5.2 Ejemplos

- $K_n$ es $(n-1)$-regular
- $C_n$ es 2-regular
- Cubo $Q_n$ es $n$-regular

## 6. Grafos completos bipartitos

### 6.1 Definición

$K_{m,n}$ tiene $m$ vértices en un lado, $n$ en otro, con todas las aristas posibles.

### 6.2 Propiedades

- $|E| = m \cdot n$
- Cada vértice en $A$ tiene grado $n$
- Cada vértice en $B$ tiene grado $m$

## 7. Hipergrafos

### 7.1 Definición

Un hipergrafo tiene aristas que son subconjuntos de vértices de cualquier tamaño.

### 7.2 Ejemplo

$\{\{1,2,3\}, \{2,4\}, \{4\}\}$

## 8. Ejercicios

### Ejercicio 1

Determinar si $C_5$ es bipartito.

### Ejercicio 2

Calcular el número de aristas en $K_{5,3}$.

### Ejercicio 3

Verificar que $K_4$ es 3-regular.

### Ejercicio 4

Encontrar un ciclo impar en $K_{3,3}$.

### Ejercicio 5

Calcular el grado de cada vértice en $Q_3$ (cubo).

### Ejercicio 6

Determinar si el grafo de un cubo es bipartito.

### Ejercicio 7

Encontrar el número de subgrafos bipartitos de $K_3$.

### Ejercicio 8

Verificar que $P_n$ es bipartite para todo $n$.

### Ejercicio 9

Calcular el número de vértices y aristas en $K_{2,5}$.

### Ejercicio 10

Determinar si $K_{2,3}$ contiene un ciclo de longitud 3.

### Ejercicio 11

Encontrar el grafo complemento de $P_3$.

### Ejercicio 12

Verificar que $C_n$ es 2-regular.

### Ejercicio 13

Calcular el grado promedio en $K_{m,n}$.

### Ejercicio 14

Determinar si un grafo 0-regular puede tener aristas.

### Ejercicio 15

Encontrar el número de aristas en $C_n$.

## Soluciones

### Solución 1

NO. $C_5$ tiene longitud impar, no es bipartite.

### Solución 2

$5 \cdot 3 = 15$ aristas.

### Solución 3

$\deg(v) = 3$ en $K_4$.

### Solución 4

$K_{3,3}$ solo tiene ciclos pares.

### Solución 5

$\deg(v) = 3$ en $Q_3$.

### Solución 6

SÍ, el cubo es bipartito.

### Solución 7

Todo subgrafo de $K_3$ es bipartite.

### Solución 8

Alternar colores en el camino.

### Solución 9

7 vértices, 10 aristas.

### Solución 10

NO. En grafo bipartito no hay ciclos impares.

### Solución 11

$K_3$ menos las aristas de $P_3$.

### Solución 12

Cada vértice conecta a otros 2.

### Solución 13

$2mn / (m+n)$ (grado promedio).

### Solución 14

NO. 0-regular implica sin aristas.

### Solucion 15

$n$ aristas.

## Direcciones de investigacion y problemas abiertos

1. **Grafos cuanticos:** Los grafos cuanticos (quantum graphs) son modelos matematicos para sistemas electronicos en moleculas y estructuras periodicas. El estudio del espectro del operador Laplaciano en grafos cuanticos es un area activa.

2. **Grafos aleatorios:** El modelo de percolacion y redes complejas tiene aplicaciones en fisica estadistica y redes sociales.

3. **Hipergrafos y combinatoria extremal:** Los hipergrafos generalizan grafos a conjuntos de cardinalidad arbitraria y tienen conexiones con la teoria de Ramsey y problemas extremales.

4. **Grafos de-interseccion:** Los grafos de interseccion de familias de conjuntos incluyen grafos de intervalo, grafos de percepcion circular, y tienen aplicaciones en bioinformatica y scheduler.

## Referencias

1. Diestel, R. (2017). *Graph Theory*. Springer.
2. Bondy, J.A. & Murty, U.S.R. (2008). *Graph Theory*. Springer.
3. Bollobás, B. (1998). *Modern Graph Theory*. Springer.
4. Berge, C. (1973). *Graphs and Hypergraphs*. North-Holland.
5. Graham, R.L., Rothschild, B.L. & Spencer, J.H. (2013). *Ramsey Theory*. Wiley.
