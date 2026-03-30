# Permutaciones: Teoría de Grupos Simétricos

## Objetivo del tema

Desarrollar la teoría de permutaciones y grupos simétricos, fundamentos del álgebra abstracta y sus aplicaciones.

---

## 1. El Grupo Simétrico

### 1.1 Definición

$\sigma \in S_n$ es biyección $\{1,\ldots,n\} \to \{1,\ldots,n\}$.

**Propiedades**: $|S_n| = n!$, grupo no abeliano para $n \geq 3$.

### 1.2 Notación de Ciclos

$\sigma = (1\ 3\ 5)(2\ 4)$ significa: $1\to3$, $3\to5$, $5\to1$, $2\to4$, $4\to2$.

### 1.3 Transposiciones

**Teorema**: Toda permutación puede escribirse como producto de transposiciones (ciclos de longitud 2).

---

## 2. Estructura de Permutaciones

### 2.1 Teorema de Descomposición

**Teorema**: Toda $\sigma \in S_n$ descompone de manera única (hasta orden) en ciclos disjuntos.

**Demostración**: Seguir las órbitas de la acción de $\sigma$ sobre $\{1,\ldots,n\}$.

$$\square$$

### 2.2 Paridad

**Definición**: $\sigma$ es par si descompone en número par de transposiciones.

**Teorema**: $\text{sgn}(\sigma) = (-1)^{n - c(\sigma)}$ donde $c(\sigma)$ es el número de ciclos.

### 2.3 Grupo Alternante

$A_n = \{\sigma \in S_n : \text{sgn}(\sigma) = 1\}$

**Propiedad**: $|A_n| = n!/2$, $A_n \trianglelefteq S_n$.

---

## 3. Conjugación

### 3.1 Teorema de Conjugación

**Teorema**: En $S_n$, dos permutaciones son conjugadas iff tienen la misma estructura de ciclos.

**Demostración**: Si $\tau = \alpha \sigma \alpha^{-1}$, entonces $\tau$ tiene ciclos de los mismos tamaños que $\sigma$.

$$\square$$

### 3.2 Clases de Conjugación

**Corolario**: Las clases de conjugación en $S_n$ corresponden a particiones de $n$.

---

## 4. Generadores

### 4.1 Transposiciones Adyacentes

**Teorema**: $S_n = \langle (1\ 2), (2\ 3), \ldots, (n-1\ n) \rangle$.

### 4.2 Generadores de Coxeter

**Relaciones**: $(s_i s_j)^{m_{ij}} = 1$ con $m_{ii} = 1$, $m_{ij} = 2$ si $|i-j| > 1$.

---

## 5. Aplicaciones

### 5.1 Determinantes

**Teorema**: $\det(A) = \sum_{\sigma \in S_n} \text{sgn}(\sigma) \prod_{i} a_{i,\sigma(i)}$.

### 5.2 Polinomio de Ehrhart

Volumen de politopos开心en combinatoria.

---

## 6. Ejercicios

### Ejercicio 1
Calcular la descomposición en ciclos de $(1\ 3\ 2)(4\ 5)$.

### Ejercicio 2
Determinar si $\sigma = (1\ 2\ 3)(4\ 5)$ es par o impar.

### Ejercicio 3
Probar que el grupo $A_5$ es simple (no tiene subgrupos normales propios).

### Ejercicio 4
Calcular el centralizador de $(1\ 2\ 3)$ en $S_5$.

### Ejercicio 5
Demostrar que $A_n$ es simple para $n \geq 5$.

### Ejercicio 6
Calcular el orden de una permutación como el mcm de las longitudes de sus ciclos.

### Ejercicio 7
Probar que el número de involuciones en $S_n$ está dado por la recurrencia $I_n = I_{n-1} + (n-1)I_{n-2}$.

### Ejercicio 8
Determinar el signo de una permutación a partir de su representación en matriz de permutación.

### Ejercicio 9
Construir el grafo de Cayley de $S_3$ con生成adores transposiciones adyacentes.

### Ejercicio 10
Calcular la tabla de caracteres irreducibles de $S_3$.

### Ejercicio 11
Demostrar que cualquier permutación puede escribirse como producto de a lo sumo $n-1$ transposiciones.

### Ejercicio 12
Encontrar todos los subgrupos de $S_3$ y clasificarlos.

### Ejercicio 13
Probar que el centralizador de un ciclo de longitud $k$ en $S_n$ tiene orden $k \cdot (n-k)!$.

### Ejercicio 14
Construir la representación natural de $S_n$ como matrices de permutación.

### Ejercicio 15
Analizar la conexión entre permutaciones y el problema del邮递员旅行 (TSP).

---

## Direcciones de Investigación y Problemas Abiertos

### 1. Teoría de Representaciones

- **Representaciones irreducibles**: Clasificación completa de representaciones de $S_n$
- **Caracteres**: Funciones de caracteres y sus propiedades

### 2. Aplicaciones en Física

- **Simetría molecular**: Grupos de permutaciones en química cuántica
- **Estadística cuántica**: Bosones y fermiones

### 3. Problemas Abiertos

1. ¿Cómo calcular高效的mente caracteres de $S_n$ para $n$ grande?
2. ¿Cuál es la complejidad de decidir si dos permutaciones son conjugadas?
3. ¿Cómo optimizar el uso de permutaciones en algoritmos de ordenamiento?

---

## Referencias

1. Dummit, D.S.; Foote, R.M. (2004). *Abstract Algebra*. Wiley.

2. Sagan, B.E. (2001). *The Symmetric Group*. Springer.

3. James, G.; Kerber, A. (1981). *The Representation Theory of the Symmetric Group*. Addison-Wesley.

4. Fulton, W.; Harris, J. (1991). *Representation Theory: A First Course*. Springer.

5. Serre, J.-P. (1977). *Linear Representations of Finite Groups*. Springer.

6. Kerber, A. (1991). *Applied Finite Group Actions*. Academic Press.

7. Robinson, G. de B. (2012). *Representation Theory of the Symmetric Group*. Cambridge University Press.

8. James, G. (1990). *Representations of General Linear Groups*. Cambridge University Press.
