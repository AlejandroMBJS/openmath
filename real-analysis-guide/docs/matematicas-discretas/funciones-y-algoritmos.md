# Funciones, Algoritmos y Teoría de la Computación

## Objetivo del tema

Desarrollar una teoría profunda de las funciones como mapeos entre conjuntos y la noción algorítmica de computación, estableciendo conexiones con la teoría de la computabilidad, el análisis de algoritmos, y los fundamentos de las matemáticas discretas. Este tema forma la base de la ciencias de la computación teórica y conecta directamente con la lógica matemática, la teoría de números, y el álgebra abstracta.

---

## 1. Teoría de funciones: fundamentos categóricos

### 1.1 Definición formal categórica

Una **función** $f: A \to B$ es un morfismo en la categoría de conjuntos. La función puede caracterizarse equivalentemente como:

1. **Relacional**: $f \subseteq A \times B$ con $\forall a \in A, \exists! b \in B: (a,b) \in f$
2. **Conjuntista**: Una tripleta $(A, B, G)$ donde $G \subseteq A \times B$ es el grafo de $f$
3. **Elemental**: Una aplicación que associa a cada $a \in A$ un único $b \in B$

### 1.2 Teorema de factorización canónica

**Teorema**: Toda función $f: A \to B$ factoriza de manera única como:
$$A \xrightarrow{e} A/\ker(f) \xrightarrow{\bar{f}} \text{im}(f) \hookrightarrow B$$

donde:
- $e$ es la proyección canónica al cociente por $\ker(f) = \{(a,a') : f(a) = f(a')\}$
- $\bar{f}$ es el isomorfismo canónico
- La última flecha es la inclusión

**Demostración**: Definimos $\bar{f}([a]) = f(a)$. Por construcción, esto está bien definido y es biyectivo. La unicidad sigue de la propiedad universal del cociente.

$$\square$$

### 1.3 Extensiones de funciones

**Teorema de extensión**: Sea $A \subseteq X$ y $f: A \to Y$ una función. Si $Y$ es un espacio de Hausdorff compactificado, entonces existe una extensión continua $\bar{f}: \beta X \to Y$ donde $\beta X$ es la compactificación de Stone-Čech.

**Corolario**: Si $Y$ es un espacio discreto finito, toda función $f: A \to Y$ se extiende a $\bar{f}: \beta \mathbb{N} \to Y$.

---

## 2. Clasificaciones de funciones

### 2.1 Teoremas de caracterización

**Teorema fundamental de funciones** (con inyectividad, sobreyectividad, biyectividad):

1. $f$ es inyectiva $\iff \ker(f) = \Delta_A$ (la diagonal)
2. $f$ es sobreyectiva $\iff \text{im}(f) = B$
3. $f$ es biyectiva $\iff$ existe $g: B \to A$ con $g \circ f = \text{id}_A$ y $f \circ g = \text{id}_B$

**Demostración**:

*($\Rightarrow$)* Si $f$ es inyectiva, dados $a, a'$ con $f(a) = f(a')$, entonces $a = a'$ por inyectividad, hence $\ker(f) = \{(a,a)\} = \Delta_A$.

*($\Leftarrow$)* Si $\ker(f) = \Delta_A$ y $f(a) = f(a')$, entonces $(a, a') \in \ker(f) = \Delta_A$, hence $a = a'$. Por tanto $f$ es inyectiva.

Las otras partes se demuestran analogamente.

$$\square$$

### 2.2 Funciones idempotentes

**Teorema**: $f: A \to A$ es idempotente ($f \circ f = f$) si y solo si $f$ es la identidad sobre su imagen y $\text{im}(f)$ es un retracto de $A$.

**Demostración**: Si $f \circ f = f$, entonces para todo $y \in \text{im}(f)$, existe $x$ con $f(x) = y$, hence $f(y) = f(f(x)) = f(x) = y$. Thus $f|_{\text{im}(f)} = \text{id}_{\text{im}(f)}$.

Recíprocamente, si $i: \text{im}(f) \hookrightarrow A$ y $r: A \to \text{im}(f)$ con $r \circ i = \text{id}$ y $f = i \circ r$, then $f \circ f = i \circ r \circ i \circ r = i \circ \text{id} \circ r = f$.

$$\square$$

### 2.3 Involuciones

**Teorema**: Una función $f: A \to A$ satisfy $f \circ f = \text{id}_A$ iff decompose $A$ en ciclos de longitud 1 o 2.

**Demostración**: Por el teorema de estructura de permutaciones, toda involución corresponde a una permutación donde todos los ciclos tienen longitud 1 o 2.

$$\square$$

---

## 3. Composición de funciones: teoría de categorías

### 3.1 Propiedades categóricas

**Teorema de cancelabilidad**: En la categoría de conjuntos:

1. Si $g \circ f$ es inyectiva, entonces $f$ es inyectiva.
2. Si $g \circ f$ es sobreyectiva, entonces $g$ es sobreyectiva.

**Demostración**:

1. $f(a) = f(a') \Rightarrow g(f(a)) = g(f(a')) \Rightarrow (g \circ f)(a) = (g \circ f)(a')$. Como $g \circ f$ es inyectiva, $a = a'$.
2. Para $b \in B$, existe $a \in A$ con $(g \circ f)(a) = b$. Then $g(f(a)) = b$, hence $g$ es sobre.

$$\square$$

### 3.2 Teorema del punto fijo

**Teorema de Banach** (1922): Sea $f: X \to X$ una contracción en un espacio métrico completo. Entonces $f$ tiene un único punto fijo.

**Corolario**: Toda función continua de un disco cerrado en $\mathbb{R}^2$ tiene un punto fijo (teorema de Brouwer en dimensión 2).

### 3.3 Teorema del sandwich

**Teorema de Schröder-Bernstein** (1898): Si existen inyecciones $f: A \to B$ y $g: B \to A$, entonces existe una biyección $h: A \to B$.

**Demostración**: Construir el grafo alternado y usar el teorema de descomposición en componentes. Alternativamente, usar el método de Cantor-Bernstein-Knaster.

$$\square$$

---

## 4. Algoritmos: fundamentos teóricos

### 4.1 Máquina de Turing

**Definición**: Una máquina de Turing es una 7-tupla $M = (Q, \Sigma, \Gamma, \delta, q_0, q_{accept}, q_{reject})$ donde:

- $Q$: estados finitos
- $\Sigma$: alfabeto de entrada
- $\Gamma$: alfabeto de cinta (incluye $\sqcup$ blank)
- $\delta: Q \times \Gamma \to Q \times \Gamma \times \{L, R\}$
- $q_0$: estado inicial
- $q_{accept}, q_{reject}$: estados de aceptación/rechazo

### 4.2 Tesis de Church-Turing (1936)

**Tesis**: Toda función computable algorítmicamente puede ser calculada por una máquina de Turing.

Esta tesis no es demostrable formalmente, pero es supported por:
- Equivalencia con el cálculo lambda
- Equivalencia con funciones recursivas
- Equivalencia con programas while
- Evidencia empírica

### 4.3 Teorema de Rice (1953)

**Teorema**: Para cualquier propiedad no trivial $P$ de funciones computables, el problema de decidir si una máquina de Turing calcula una función con propiedad $P$ es indecidible.

**Corolario**: El problema de la parada (halting problem) es indecidible.

---

## 5. Análisis de algoritmos: teoría de complejidad

### 5.1 Clases de complejidad

**Jerarquía polinomial**:
$$\text{P} \subseteq \text{NP} \subseteq \text{PSPACE} \subseteq \text{EXPTIME}$$

$$\text{P} \subseteq \text{BPP} \subseteq \text{NP} \subseteq \text{PP}$$

### 5.2 Teorema de Cook-Levin (1971)

**Teorema**: El problema SAT es NP-completo. Es decir, SAT $\in$ NP y para todo $L \in$ NP, $L \leq_p$ SAT.

**Demostración de Cook**: Construir una fórmula booleana que simula una máquina de Turing no determinista en tiempo polinómico.

### 5.3 Teorema de Ladner (1974)

Si P $\neq$ NP, entonces existen problemas en NP que no son ni NP-completos ni triviales (NP-intermedios).

### 5.4 Teorema de Immerman-Veleman (1988)

**Espacio determinista vs no determinista**:
$$\text{NSPACE}(s(n)) \subseteq \text{DSPACE}(s(n)^2)$$

para toda función $s(n) \geq \log n$.

---

## 6. Análisis amortizado

### 6.1 Método Agregado

**Teorema**: Si una secuencia de $n$ operaciones tiene costo total $T(n)$, entonces el costo amortizado es $T(n)/n$.

### 6.2 Método del potentials

**Definición**: Función potencial $\Phi: \text{Estados} \to \mathbb{R}$ tal que $\Phi(\text{inicial}) = 0$ y $\Phi(s) \geq 0$ para todo $s$.

**Teorema**: El costo amortizado de cada operación es:
$$\text{costo\_amortizado}_i = \text{costo}_i + \Phi(s_i) - \Phi(s_{i-1})$$

### 6.3 Contabilidad

**Teorema**: Asignar "crédito" a operaciones para asegurar que el saldo nunca sea negativo.

---

## 7. Algoritmos de búsqueda

### 7.1 Búsqueda binaria óptima

**Teorema**: Búsqueda binaria es óptima para búsqueda en arrays ordenados: $\lceil \log_2 n \rceil$ comparaciones.

**Demostración**: El árbol de decisión debe tener al menos $n+1$ hojas, luego altura $\geq \lceil \log_2(n+1) \rceil$.

### 7.2 Teorema de adversarial

**Teorema**: Cualquier algoritmo de búsqueda para elementos comparables requiere $\Omega(\log n)$ comparaciones en el peor caso.

### 7.3 Lower bounds

**Teorema de和信息论**: El número mínimo de comparaciones para sorting es $\lceil \log_2(n!) \rceil = \Theta(n \log n)$.

**Demostración**: Hay $n!$ permutaciones posibles, cada comparación elimina a lo sumo la mitad.

---

## 8. Algoritmos de ordenamiento

### 8.1 Teorema de estabilidad

**Teorema**: Todo algoritmo de ordenamiento basado en comparaciones que usa $O(1)$ espacio adicional tiene complejidad $\Omega(n \log n)$.

**Demostración**: El árbol de decisión tiene $n!$ hojas, luego altura $\geq \log_2(n!) = \Theta(n \log n)$.

### 8.2 Ordenamiento por cuenta

**Teorema**: Counting Sort tiene complejidad $O(n + k)$ para enteros en rango $[0, k]$.

### 8.3 Radix Sort

**Teorema**: Radix Sort con $d$ dígitos y base $b$ tiene complejidad $O(d \cdot (n + b))$.

---

## 9. Algoritmos en grafos

### 9.1 Teorema de Tarjan (1972)

**Componentes fuertemente conexas**: Algoritmo de Tarjan con complejidad $O(V + E)$.

### 9.2 Algoritmo de Dijkstra

**Teorema**: Dijkstra encuentra el camino más corto en grafos con pesos no negativos.

**Complejidad**: $O(V^2)$ o $O(E \log V)$ con heap.

### 9.3 Teorema de Kruskal

**Complejidad**: $O(E \log V)$ usando Union-Find.

---

## 10. Problemas abiertos contemporáneos

### 10.1 P vs NP

**Problema del milenio**: Determinar si P = NP.

**Estado**: No resuelto. La mayúscula conjetura es que P $\neq$ NP.

### 10.2 Conjetura de la complejidad de espacio

**Problema**: Determinar si NPSPACE = PSPACE.

**Estado**: Conjetura de Savitch: NPSPACE $\subseteq$ PSPACE$^2$.

### 10.3 Problemas de isomorfismo

**Teorema**: El isomorfismo de grafos está en NP pero no se sabe si está en P ni es NP-completo (Babai, 2017: quasi-polynomial).

### 10.4 Conjetura de Hartmanis

**Conjetura**: Las clases de complejidad tienen infinitos niveles.

---

## 11. Ejercicios de nivel doctoral

### Ejercicio 1

**Teorema de Cantor-Bernstein**: Dar otra demostración usando el principio de selección axiomática.

### Ejercicio 2

**Demostrar que** el functor olvidadizo de la categoría de grupos a conjuntos tiene adjuntos libres.

### Ejercicio 3

**Teorema de Rice** para funciones parciales: Demostrar que el problema de decisión de propiedades no triviales de funciones computables parciales es indecidible.

### Ejercicio 4

**Construir una máquina de Turing** que compute la función $f(n) = n^2$.

### Ejercicio 5

**Demostrar el teorema de Cook**: SAT es NP-completo.

### Ejercicio 6

**Algoritmo de Strassen** (1969): Multiplicar matrices en $O(n^{2.807})$ en lugar de $O(n^3)$. Explicar y generalizar.

### Ejercicio 7

**Teorema de Ackermann** (1928): La función de Ackermann no es primitiva recursiva. Demostrar.

### Ejercicio 8

**Complejidad de Sorting**: Demostrar que heap sort tiene complejidad $O(n \log n)$ worst-case.

### Ejercicio 9

**Algoritmo de Rabin-Karp**: Usar hashing para búsqueda de patrones. Analizar complejidad promedio.

### Ejercicio 10

**Teorema de Schöning** (1999): Algoritmo estocástico para 3-SAT con complejidad $O((4/3)^n)$.

### Ejercicio 11

**Teorema de Toda** (1989): PH $\subseteq$ P^{#SAT}. Demostrar la reducción.

### Ejercicio 12

**Algoritmo de Prim** vs **Kruskal**: Comparar y analizar complejidad.

### Ejercicio 13

**Teorema de Blum-Floyd-Pratt-Rabin-Winograd**: Demostrar el algoritmo de selección en tiempo lineal esperado.

### Ejercicio 14

**Conjetura de la única solución**: Si una instancia de SAT tiene solución única, puede encontrada en tiempo subexponencial. Estado de la investigación.

### Ejercicio 15

**Teorema de Valiant** (1975): El matching perfecto en grafos bipartitos está en P. Demostrar usando grafos de flujo.

---

## Soluciones detalladas

### Solución 1

Sean $f: A \to B$ y $g: B \to A$ inyectivas. Construir $A_0 = A$, $B_0 = B$. Definir recursivamente:
- $A_{n+1} = A_n \setminus g(B_n)$
- $B_{n+1} = B_n \setminus f(A_n)$

Sea $A^* = \bigcap_n A_n$, $B^* = \bigcap_n B_n$. Para $x \in A^*$, $f(x) \in B^*$. Definir $h(x) = f(x)$ en $A^*$, y para $x \notin A^*$, seguir la cadena hasta llegar a $A^*$. This defines a bijection.

$$\square$$

### Solución 3

Sea $P$ una propiedad no trivial de funciones computables. Existe $f_0$ con $P(f_0)$ y $f_1$ sin $P(f_1)$. El problema de decisión $D = \{\langle M \rangle : P(\Phi_M)\}$ donde $\Phi_M$ es la función calculada por $M$. Reducir $HALT$ a $D$: dado $\langle M, w \rangle$, construir $M'$ que simula $M$ y si para, output $f_0$, else output $f_1$. Por Rice, $D$ es indecidible.

$$\square$$

### Solución 5

(Sketch) Given any $L \in$ NP, existe una máquina de Turing no determinista $M$ que acepta $L$ en tiempo polinomial $p(n)$. Construir una fórmula booleana $\phi$ que codifica:
- La configuración inicial
- Las transiciones de $M$
- La aceptación final
- Variablesbooleanas para cada celda de cinta en cada paso

La fórmula tiene tamaño polinómico y es satisfacible iff $M$ acepta la entrada.

$$\square$$

### Solución 7

La función de Ackermann está definida por:
$$A(0, n) = n+1$$
$$A(m+1, 0) = A(m, 1)$$
$$A(m+1, n+1) = A(m, A(m+1, n))$$

Suponer que es primitiva recursiva. Entonces existe $m$ tal que $A(m, n) = \text{const}$. Pero $A(m, n)$ grows super-exponencialmente en $n$. Contradicción.

$$\square$$

### Solución 10

Algoritmo de Schöning:
1. Asignar valores de verdad aleatorios a las variables
2. Repetir $O((4/3)^n)$ veces:
   - Si la asignación satisface las cláusulas, retornar TRUE
   - Elegir una cláusula no satisfecha
   - Elegir una variable en la cláusula y reasignar aleatoriamente

Análisis: cada paso reduce el número de cláusulas insatisfechas con probabilidad al menos $1/3$, hence el tiempo esperado es exponencial con base $4/3$.

$$\square$$

### Solución 12

**Prim**: $O(V^2)$ o $O(E \log V)$. Crece desde un vértice, añadiendo la arista más económica.

**Kruskal**: $O(E \log V)$. Ordenar aristas y añadir sin formar ciclos.

Para graos densos ($E \approx V^2$), Prim es mejor. Para dispersos, Kruskal.

$$\square$$

---

## Referencias y lecturas adicionales

1. Sipser, M. (2013). *Introduction to the Theory of Computation*. Cengage Learning.
2. Papadimitriou, C.H. (1994). *Computational Complexity*. Addison-Wesley.
3. Arora, S.; Barak, B. (2009). *Computational Complexity: A Modern Approach*. Cambridge University Press.
4. Knuth, D.E. (1997). *The Art of Computer Programming, Volume 1: Fundamental Algorithms*. Addison-Wesley.
5. Cormen, T.H. (2009). *Introduction to Algorithms*. MIT Press.
6. Aho, A.V. (1974). *The Design and Analysis of Computer Algorithms*. Addison-Wesley.
7. Garey, M.R.; Johnson, D.S. (1979). *Computers and Intractability: A Guide to the Theory of NP-Completeness*. W.H. Freeman.
8. Hopcroft, J.E.; Ullman, J.D. (1979). *Introduction to Automata Theory, Languages, and Computation*. Addison-Wesley.
