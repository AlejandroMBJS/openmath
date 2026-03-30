# Grafo Dirigido (Digraph)

## Objetivo del tema

Estudiar los grafos dirigidos (digrafos), sus propiedades y diferencias con los grafos no dirigidos.

## 1. Definicion

### 1.1 Componentes

Un digrafo $D$ consiste de:
- Conjunto de vértices $V(D)$
- Conjunto de arcos (aristas dirigidas) $A(D) \subseteq V \times V$

### 1.2 Notacion

$$D = (V, A)$$

### 1.3 Representacion

Un arco $(v,w)$ se representa como una flecha de $v$ a $w$.

## 2. Terminologia

### 2.1 Grado de entrada

$$\deg^+(v) = |\{(u,v) \in A\}|$$

### 2.2 Grado de salida

$$\deg^-(v) = |\{(v,u) \in A\}|$$

### 2.3 Adyacencia

$w$ es adyacente a $v$ si $(v,w) \in A$.

## 3. Digrafos especiales

### 3.1 Torneo

Digrafo donde para cada par de vértices hay exactamente un arco.

### 3.2 Grafo dirigido completo

Cada par tiene arcos en ambas direcciones.

### 3.3 DAG (Directed Acyclic Graph)

Digrafo sin ciclos dirigidos.

## 4. Caminos en digrafos

### 4.1 Camino dirigido

Secuencia de vértices donde cada par consecutivo es un arco en la dirección correcta.

### 4.2 Ciclo dirigido

Camino que empieza y termina en el mismo vértice.

### 4.3 Topological order

Ordenamiento de vértices en un DAG donde los arcos van de izquierda a derecha.

## 5. Conectividad en digrafos

### 5.1 Fuertemente conexo

Para cualquier par $u,v$, hay camino de $u$ a $v$ y de $v$ a $u$.

### 5.2 Débilmente conexo

Ignorando direcciones, el grafo no dirigido subyacente es conexo.

### 5.3 Componentes strongly connected

Máximos subgrafos fuertemente conexos.

## 6. Ejercicios

### Ejercicio 1

Calcular $\deg^+$ y $\deg^-$ de cada vértice en un torneo de 3 vértices.

### Ejercicio 2

Determinar si $D = (\{1,2,3\}, \{(1,2), (2,3)\})$ es un DAG.

### Ejercicio 3

Encontrar el orden topológico de un DAG con arcos $1 \to 2$, $1 \to 3$, $2 \to 4$, $3 \to 4$.

### Ejercicio 4

Verificar que el grafo subyacente de un DAG es un árbol dirigido.

### Ejercicio 5

Calcular los componentes fuertemente conexos de $C_3$ dirigido.

### Ejercicio 6

Determinar si un ciclo dirigido puede existir en un DAG.

### Ejercicio 7

Encontrar un ciclo dirigido en el digrafo con arcos $(1,2), (2,3), (3,1)$.

### Ejercicio 8

Calcular el grado total de un vértice en un digrafo.

### Ejercicio 9

Verificar que todo torneo tiene un Hamiltonian path.

### Ejercicio 10

Determinar si $K_3$ dirigido (con arcos en ambas direcciones) es fuertemente conexo.

### Ejercicio 11

Encontrar los vértices con mayor grado de salida.

### Ejercicio 12

Explicar la diferencia entre fuertemente y débilmente conexo.

### Ejercicio 13

Calcular el número de arcos en $K_n$ dirigido completo.

### Ejercicio 14

Determinar si un grafo dirigido puede tener más arcos que el no dirigido equivalente.

### Ejercicio 15

Verificar que $\sum \deg^+(v) = |A| = \sum \deg^-(v)$.

## Soluciones

### Solución 1

Vértices: tres con un arco saliente y uno entrante cada uno.

### Solución 2

SÍ es DAG (no hay ciclos dirigidos).

### Solución 3

$1, 2, 3, 4$ o $1, 3, 2, 4$.

### Solución 4

El grafo subyacente es un DAG (sin ciclos).

### Solución 5

Un componente: todo el grafo.

### Solución 6

NO, por definición de DAG.

### Solución 7

$1 \to 2 \to 3 \to 1$ es un ciclo.

### Solución 8

$\deg(v) = \deg^+(v) + \deg^-(v)$

### Solución 9

Teorema de Rédei: todo torneo tiene un Hamiltonian path.

### Solución 10

SÍ, hay camino en ambas direcciones entre cualquier par.

### Solución 11

Depende del digrafo específico.

### Solución 12

Fuertes: caminos en ambas direcciones. Débil: el grafo no dirigido es conexo.

### Solución 13

$n(n-1)$ arcos.

### Solución 14

SÍ, puede duplicar (cada arista no dirigida se convierte en dos dirigidos).

### Solución 15

Cada arco contribute 1 a $\deg^+$ de su origen y 1 a $\deg^-$ de su destino.

## Direcciones de investigacion y problemas abiertos

1. **Grafos dirigidos y automata:** Los digrafos representan automatas finitos y tienen aplicaciones en ciencias de la computacion y teoria de lenguajes formales.

2. **Ordenamiento topologico y scheduling:** El problema de encontrar ordenamientos topologicos optimos en DAGs tiene aplicaciones en compiladores y gestion de proyectos.

3. **Grafos de Cayley:** Los grafos de Cayley de grupos finitos son digrafos regulares con propiedades estructurales interesantes.

4. **Teoria de redes de flujo:** Los digrafos son fundamentales en teoria de flujo maximo y redes de transporte.

## Referencias

1. Bang-Jensen, J. & Gutin, G. (2008). *Digraphs: Theory, Algorithms and Applications*. Springer.
2. Diestel, R. (2017). *Graph Theory*. Springer.
3. Bondy, J.A. & Murty, U.S.R. (2008). *Graph Theory*. Springer.
4. Chartrand, G., Lesniak, L. & Zhang, P. (2016). *Graphs & Digraphs*. CRC Press.
5. Harary, F. (1969). *Graph Theory*. Addison-Wesley.
