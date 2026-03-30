# Grafos Eulerianos y Hamiltonianos: Circuitos y Caminos

## Objetivo del tema

Desarrollar la teoría de grafos eulerianos y hamiltonianos, fundamentales en teoría de circuitos, optimización combinatoria y diseño de redes.

---

## 1. Grafos Eulerianos

### 1.1 Teorema de Euler-Hierholzer

**Teorema** (1736): Un grafo conexo tiene un ciclo euleriano si y solo si todo vértice tiene grado par.

**Demostración**: 
- (**Necesidad**): En un ciclo euleriano, cada visita a un vértice usa 2 aristas del grado. Como el ciclo termina donde empezó, todos los grados son pares.
- (**Suficiencia**): Construir el ciclo mediante el algoritmo de Hierholzer: comenzar en cualquier vértice, seguir aristas hasta volver al inicio, luego insertar ciclos restantes.

$$\square$$

### 1.2 Trail Euleriano

**Teorema**: Un grafo conexo tiene un trail euleriano (camino abierto) si y solo si exactamente 0 o 2 vértices tienen grado impar.

### 1.3 Algoritmo de Hierholzer

**Complejidad**: $O(|E|)$

---

## 2. Grafos Hamiltonianos

### 2.1 Teorema de Dirac

**Teorema** (1952): Todo grafo simple con $n \geq 3$ vértices y $\delta(G) \geq n/2$ es Hamiltonian.

**Demostración**: Extenderse a un camino máximo y usar el grado mínimo para cerrar el ciclo.

$$\square$$

### 2.2 Teorema de Ore

**Teorema** (1960): Si para todo par de no-adyacentes $u, v$, $\deg(u) + \deg(v) \geq n$, entonces $G$ es Hamiltonian.

### 2.3 Problema del Agente Viajero (TSP)

**Complejidad**: NP-duro. Approximación: algoritmo de Christofides con factor $3/2$.

---

## 3. Caracterizaciones Parciales

### 3.1 Condiciones Suficientes

- **Teorema de Chvátal**: Condiciones sobre grados que generalizan Dirac y Ore.

### 3.2 Grafos de Dirac

**Definición**: Los grafos con $\delta \geq n/2$ son Hamiltonianos.

### 3.3 Grafos de Petersen

**Teorema**: El grafo de Petersen no es Hamiltonian.

---

## 4. Problemas Abiertos

- **Conjetura de Tait**: ¿Todo grafo 3-regular planar sin cortes es Hamiltonian?
- **Conjetura de Fleischner**: Todo bloque 2-conexo contiene un ciclo Hamiltonian.

---

## 5. Ejercicios

### Ejercicio 1
Demostrar que $K_{2n}$ es euleriano iff $n \geq 2$.

### Ejercicio 2
Encontrar condiciones para que un grafo bipartito sea euleriano.

### Ejercicio 3
Probar que $K_{3,3}$ no es Hamiltonian.

### Ejercicio 4
Caracterizar los grafos hamiltonianos en términos del tensor de incidencia.

### Ejercicio 5
El algoritmo de Held-Karp para TSP tiene complejidad $O(n^2 2^n)$. Describir.

## Teoremas avanzados

### Teorema de Dirac (1952)

**Teorema**: Todo grafo simple con $n \geq 3$ vertices y grado minimo $\geq n/2$ contiene un ciclo hamiltoniano.

**Demostracion**: Sea $G$ un grafo maximal no hamiltoniano (agregar cualquier arista crea un ciclo hamiltoniano). Por el teorema de closure, $G$ es hamiltoniano, contradictando la eleccion de $G$. $\blacksquare$

### Teorema de Ore (1960)

**Teorema**: Si para todo par de vertices no adyacentes $u, v$, $\deg(u) + \deg(v) \geq n$, entonces $G$ es hamiltoniano.

**Demostracion**: Similar a Dirac, usando el concepto de closure. $\blacksquare$

### Teorema de Bondy-Chvatal (1974)

**Teorema**: El closure de un grafo $G$ se obtiene agregando aristas entre pares de vertices no adyacentes con suma de grados al menos $n$ hasta que no sea posible mas. $G$ es hamiltoniano si y solo si su closure es hamiltoniano.

**Demostracion**: El proceso preserva la propiedad de ser hamiltoniano. $\blacksquare$

### Teorema de Tait (1866)

**Teorema**: $K_4$ es el unico grafo 3-regular planar con 3 aristas.

**Corolario**: El problema de los cuatro colores es equivalente a demostrar que todo grafo plano 3-regular sin vertices de grado 2 es 3-coloreable. $\blacksquare$

### Teorema de Grinberg (1968)

**Teorema**: Si $G$ es un grafo hamiltoniano planar, entonces $\sum_{i}(i-2)f_i = 0$, donde $f_i$ es el numero de caras de longitud $i$.

**Demostracion**: Usar la formula de Euler y la estructura de ciclos hamiltonianos. $\blacksquare$

## Ejercicios adicionales

### Ejercicio 6

Demostrar que todo grafo bipartito completo $K_{n,n}$ es hamiltoniano.

### Ejercicio 7

Caracterizar los grafos eulerianos en terminos del tensor de incidencia.

### Ejercicio 8

Probar que el problema del ciclo hamiltoniano es NP-completo.

### Ejercicio 9

Encontrar condiciones para que un grafo de Petersen sea euleriano.

### Ejercicio 10

Demostrar que todo grafo con $\delta(G) \geq n/2$ tiene un ciclo de longitud al menos $n/2 + 1$.

### Ejercicio 11

Caracterizar grafos que son tanto eulerianos como hamiltonianos.

### Ejercicio 12

Probar el teorema de Fleury: un grafo euleriano tiene un trail euleriano que no usa ninguna arista de puente excepto al final.

### Ejercicio 13

Demostrar que todo grafo completo con vertices de grado par tiene un ciclo euleriano.

### Ejercicio 14

Encontrar el numero de trails eulerianos en $K_4$.

### Ejercicio 15

Probar que un grafo es semi-euleriano (tiene trail euleriano pero no ciclo) si y solo si tiene exactamente 0 o 2 vertices de grado impar.

## Soluciones adicionales

### Solucion 6

En $K_{n,n}$, unlabeled $n$ vertices en cada parte. Alternar partes para construir un ciclo hamiltoniano: $v_1, u_1, v_2, u_2, \ldots, v_n, u_n, v_1$.

### Solucion 7

Un grafo es euleriano si y solo si el kernel del tensor de incidencia tiene dimension igual al numero de componentes minus 1.

### Solucion 8

Reducir el problema del ciclo hamiltoniano desde el problema del camino hamiltoniano en grafos, que es NP-completo.

### Solucion 9

El grafo de Petersen tiene vertices de grado 3, no es euleriano (no todos los grados son pares).

### Solucion 10

Por el teorema de Dirac, existe un ciclo hamiltoniano de longitud $n$. Luego, por el teorema de cardiopartition, hay un ciclo de longitud al menos $n/2 + 1$.

### Solucion 11

Un grafo es ambos euleriano y hamiltoniano si y solo si es un ciclo o un grafo completo.

### Solucion 12

Evitar puentes hasta que no queden otras opciones. Un puente tiene la propiedad de que si se remueve, disconnecta el grafo.

### Solucion 13

Un grafo completo tiene vertices de grado $n-1$, que es par cuando $n$ es impar. Por el teorema de Euler, existe un ciclo euleriano.

### Solucion 14

$K_4$ tiene 3 vertices de grado 3, luego es euleriano. El numero de trails eulerianos es 8.

### Solucion 15

Un grafo con 0 vertices de grado impar tiene un ciclo euleriano. Un grafo con 2 vertices de grado impar tiene un trail euleriano que comienza en uno y termina en el otro.

## Direcciones de investigacion y problemas abiertos

1. **Ciclos hamiltonianos en grafos densos:** El problema de encontrar ciclos hamiltonianos minimos en grafos con grado minimo alto tiene conexiones con la conjetura de Dirac.

2. **Grafos eulerianos en superficies:** El estudio de tours eulerianos en grafos embebidos en superficies de genero mayor que cero presenta problemas abiertos.

3. **Complejidad computacional:** El problema de decidir si un grafo es hamiltoniano es NP-completo. La aproximacion del problema del viajante (TSP) tiene frontera de approximabilidad en estudio activo.

4. **Teoria de grafos aleatorios:** En grafos aleatorios con $p > (\log n)/n$, la probabilidad de ser hamiltoniano tiende a 1.

## Referencias

1. Diestel, R. (2017). *Graph Theory*. Springer.
2. Bondy, J.A. & Murty, U.S.R. (2008). *Graph Theory*. Springer.
3. Bollobás, B. (1998). *Modern Graph Theory*. Springer.
4. Fleischner, H. (1991). *Eulerian Graphs*. Elsevier.
5. Gibbons, A. (1985). *Algorithmic Graph Theory*. Cambridge University Press.
6. Lawler, E.L. (1976). *The Traveling Salesman Problem*. Wiley.
7. Papadimitriou, C.H. & Steiglitz, K. (1982). *Combinatorial Optimization*. Prentice Hall.
8. Dirac, G.A. (1952). "Some theorems on abstract graphs". *Proceedings of the London Mathematical Society*.
