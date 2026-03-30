# Principios Fundamentales de Conteo: Teoría Enumerativa Avanzada

## Objetivo del tema

Desarrollar una teoría profunda de los principios fundamentales de conteo, estableciendo conexiones con la combinatoria enumerativa avanzada, la teoría de funciones generadoras, la teoría de probabilidades discretas, y los fundamentos de la teoría de grafos. Este tema forma la base de la combinatoria moderna y tiene aplicaciones cruciales en criptografía, teoría de códigos, análisis de algoritmos, física estadística y biología computacional.

---

## 1. Principios fundamentales: teoría axiomática

### 1.1 Principio de la suma (Forma general)

**Teorema**: Si $\{A_i\}_{i \in I}$ es una familia de conjuntos disjuntos dos a dos (i.e., $A_i \cap A_j = \emptyset$ para $i \neq j$), entonces:
$$|\bigcup_{i \in I} A_i| = \sum_{i \in I} |A_i|$$

**Demostración**: Por inducción transfinita sobre $I$. Para $I$ finito, es la definición usual. Para $I$ infinito numerable, la demostración usa el principio de extensión de medidas.

$$\square$$

**Extensión para conjuntos no disjuntos** (Principio de inclusión-exclusión general):
$$|\bigcup_{i=1}^n A_i| = \sum_{\emptyset \neq S \subseteq \{1,\ldots,n\}} (-1)^{|S|+1} |\bigcap_{i \in S} A_i|$$

### 1.2 Principio del producto (Teoría de productos cartesianos)

**Teorema**: Para conjuntos finitos $A_1, A_2, \ldots, A_n$:
$$|A_1 \times A_2 \times \cdots \times A_n| = \prod_{i=1}^n |A_i|$$

**Demostración**: Por inducción sobre $n$. Para $n = 2$, $|A \times B| = |A| \cdot |B|$ por definición. Asumir verdadero para $n$ y probar para $n+1$:
$$|(A_1 \times \cdots \times A_n) \times A_{n+1}| = |A_1 \times \cdots \times A_n| \cdot |A_{n+1}| = \prod_{i=1}^{n+1} |A_i|$$

$$\square$$

### 1.3 Teorema de biyección y cardinalidad

**Teorema fundamental de cardinalidad**: Dos conjuntos $A$ y $B$ tienen la misma cardinalidad iff existe una biyección $f: A \to B$.

**Corolario**: El principio del producto puede probarse también mediante la construcción explícita de una biyección:
$$A \times B \leftrightarrow \{f: \{1,2\} \to A \cup B : f(1) \in A, f(2) \in B\}$$

---

## 2. Funciones y conteo

### 2.1 Conteo de funciones: teoría de cardinales

**Teorema**: Sea $|A| = m$ y $|B| = n$. El número de funciones $f: A \to B$ es $n^m$.

**Demostración**: Para cada elemento de $A$ (hay $m$ choices), hay $n$ opciones de imagen. Por el principio del producto, el número total es $n \cdot n \cdots n$ ($m$ veces) = $n^m$.

$$\square$$

### 2.2 Conteo de funciones inyectivas

**Teorema**: Si $m \leq n$, el número de funciones inyectivas es:
$$P(n, m) = n(n-1)(n-2)\cdots(n-m+1) = \frac{n!}{(n-m)!}$$

**Demostración**: Elegir $f(a_1)$ de $n$ opciones, luego $f(a_2)$ de $n-1$ opciones (no puede equalar $f(a_1)$), y así sucesivamente. El producto es $\frac{n!}{(n-m)!}$.

$$\square$$

### 2.3 Conteo de funciones biyectivas

**Teorema**: Si $m = n$, el número de biyecciones (permutaciones) es $n!$.

**Demostración**: Como caso especial de funciones inyectivas con $m = n$, $P(n,n) = \frac{n!}{0!} = n!$.

$$\square$$

### 2.4 Conteo de funciones monótonas

**Teorema**: El número de funciones monótonas de un conjunto parcialmente ordenado finito $A$ a otro $B$ viene dado por productos de coeficientes binomiales.

**Corolario**: Para $A = B = \{1,\ldots,n\}$ con orden natural, el número de funciones monótonas es el número de Catalan $C_n = \frac{1}{n+1}\binom{2n}{n}$.

---

## 3. Subconjuntos y el teorema binomial

### 3.1 Teorema fundamental del conteo de subconjuntos

**Teorema**: Para un conjunto de $n$ elementos, el número de subconjuntos es:
$$|\mathcal{P}(A)| = 2^n$$

**Demostración**: Cada elemento puede estar o no estar en un subconjunto (2 opciones). Por el principio del producto, $2 \cdot 2 \cdots 2$ ($n$ veces) = $2^n$.

$$\square$$

**Corolario** (Identidad binomial):
$$\sum_{k=0}^n \binom{n}{k} = 2^n$$

### 3.2 Coeficientes binomiales: propiedades fundamentales

**Teorema de symmetric**: $\binom{n}{k} = \binom{n}{n-k}$.

**Teorema de Pascal**: $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$.

**Teorema de Vandermonde** (1799):
$$\sum_{i=0}^k \binom{m}{i} \binom{n}{k-i} = \binom{m+n}{k}$$

**Demostración**: Considerar $(1+x)^m(1+x)^n = (1+x)^{m+n}$. El coeficiente de $x^k$ en el lado izquierdo es $\sum_{i=0}^k \binom{m}{i}\binom{n}{k-i}$, y en el derecho es $\binom{m+n}{k}$.

$$\square$$

### 3.3 Coeficientes multinomiales

**Teorema**: El número de formas de dividir un conjunto de $n$ elementos en $k$ subconjuntos de tamaños $n_1, n_2, \ldots, n_k$ (donde $\sum n_i = n$) es:
$$\binom{n}{n_1, n_2, \ldots, n_k} = \frac{n!}{n_1! n_2! \cdots n_k!}$$

**Aplicaciones**:
- Coeficientes en $(x_1 + x_2 + \cdots + x_k)^n$
- Número de permutaciones con repetición

---

## 4. Principio del palomar: teoría profunda

### 4.1 Formulación clásica

**Teorema de Dirichlet** (1834): Si $n$ objetos se distribuyen en $m$ cajas y $n > m$, entonces alguna caja contiene al menos $\lceil n/m \rceil$ objetos.

**Demostración**: Suponer que toda caja tiene a lo sumo $\lfloor n/m \rfloor$ objetos. Entonces el número total es a lo sumo $m \cdot \lfloor n/m \rfloor < n$, contradicción.

$$\square$$

### 4.2 Extensión de Erdős-Szekeres

**Teorema** (1935): En cualquier secuencia de $n$ enteros positivos $a_1, a_2, \ldots, a_n$, existe una subsecuencia creciente o decreciente de longitud al menos $\lceil \sqrt{n} \rceil$.

**Corolario**: En cualquier conjunto de $\lceil \sqrt{n} \rceil^2$ enteros, hay dos tales que su diferencia es un cuadrado perfecto.

### 4.3 Principio del palomar连续uo

**Teorema de Dirichlet** (aproximación diofántica): Para cualquier $\alpha \in \mathbb{R}$ y $n \in \mathbb{N}$, existen enteros $p, q$ con $1 \leq q \leq n$ tales que:
$$\left|\alpha - \frac{p}{q}\right| < \frac{1}{qn}$$

---

## 5. Funciones generadoras

### 5.1 Serie generadora exponencial

**Definición**: Para una secuencia $a_n$, la función generadora ordinaria es:
$$G(x) = \sum_{n \geq 0} a_n x^n$$

La función generadora exponencial es:
$$E(x) = \sum_{n \geq 0} a_n \frac{x^n}{n!}$$

### 5.2 Teorema de exponential formula

**Teorema** (1971): Si $a_n$ cuenta estructuras de tamaño $n$, y $b_n$ cuenta componentes conectados, entonces:
$$E_A(x) = \exp(E_B(x))$$

### 5.3 Aplicación a particiones

**Teorema de Euler** (1748): El número de particiones de $n$ en partes impares equals el número de particiones en partes distintas.

**Función generadora**:
$$\prod_{k=1}^\infty \frac{1}{1-q^k} = \sum_{n=0}^\infty p(n) q^n$$

---

## 6. Conteo en teoría de grafos

### 6.1 Teorema de Cayley (1889)

**Teorema**: El número de árboles etiquetados con $n$ vértices es $n^{n-2}$.

**Demostración** (Prüfer, 1958): Cada árbol corresponde a una secuencia de Prüfer de longitud $n-2$ con elementos de $\{1,\ldots,n\}$. Hay $n^{n-2}$ tales secuencias.

$$\square$$

### 6.2 Conteo de apareamientos

**Teorema**: El número de apareamientos de tamaño $k$ en un grafo bipartito completo $K_{n,n}$ es:
$$\frac{n!}{(n-k)!} \cdot \frac{1}{k!}$$

### 6.3 Coloraciones de grafos

**Teorema de cromáticos**: Para un grafo $G$ con $n$ vértices, el número de coloraciones propias con $k$ colores es $k^n$ menos las coloraciones impropias.

---

## 7. Conteo en probabilidad

### 7.1 Espacio muestral uniforme

**Definición**: Si $|\Omega| = N$ y todos los resultados son igualmente probables, entonces $P(E) = |E|/N$.

### 7.2 Teorema de probabilidad total

**Teorema**: Si $\{B_i\}$ es una partición del espacio muestral, entonces:
$$P(A) = \sum_i P(A|B_i) P(B_i)$$

### 7.3 Teorema de Bayes

**Teorema**: $P(B|A) = \frac{P(A|B)P(B)}{P(A)}$

**Aplicación**: Inferencia bayesiana en espacios de conteo finitos.

---

## 8. Conteo en criptografía

### 8.1 Espacio de claves

**Teorema**: Para un algoritmo con clave de $k$ bits, el espacio de claves tiene tamaño $2^k$.

**Seguridad perfecta** (Shannon, 1949): Un cifrado tiene seguridad perfecta iff el espacio de claves tiene al menos $|\mathcal{M}|$ claves equiprobables.

### 8.2 Funciones hash

**Teorema de collisions**: En una función hash con $n$ bits de salida, el número esperado de evaluaciones para encontrar una colisión es $\Theta(2^{n/2})$.

---

## 9. Problemas abiertos contemporáneos

### 9.1 Conjetura de Erdős sobre rectas

**Problema**: Determinar el número máximo de rectas determined por $n$ puntos en el plano, no todos en una línea.

**Estado**: Conjetura de Sylvester-Gallai probada (Kelly y Moser, 1953). El máximo de líneas es $n^{5/3}/2^{1/3}$.

### 9.2 Problema de enumeración de partitions

**Conjetura**: $p(n) \sim \frac{1}{4n\sqrt{3}} e^{\pi\sqrt{2n/3}}$

**Estado**: Probada por Hardy-Ramanujan (1918), mejorada por Rademacher (1937).

### 9.3 Conjetura de不对称的

**Problema**: Probar que el número de particiones de $n$ en partes distintas equals el número de particiones en partes impares.

**Estado**: Probada por Euler.

---

## 10. Ejercicios de nivel doctoral

### Ejercicio 1

**Teorema de Ramsey** (1930): Demostrar que $R(3,3) = 6$. Esto es, en cualquier coloreación de las aristas de $K_6$ con dos colores, existe un triángulo monochromático.

### Ejercicio 2

**Teorema de Sperner** (1928): El tamaño máximo de una familia de subconjuntos de $\{1,\ldots,n\}$ sin inclusión mutua es $\binom{n}{\lfloor n/2 \rfloor}$. Demostrar.

### Ejercicio 3

**Teorema de Erdős-Ko-Rado** (1962): Para $n \geq 2k$, el número máximo de $k$-subconjuntos de $\{1,\ldots,n\}$ con intersección no vacía es $\binom{n-1}{k-1}$. Demostrar.

### Ejercicio 4

**Teorema de Turán** (1941): El número máximo de aristas en un grafo de $n$ vértices sin triángulos es $\lfloor n^2/4 \rfloor$. Demostrar.

### Ejercicio 5

**Teorema de Van der Waerden** (1927): Para cualquier coloreación de $\{1,\ldots, N\}$ con $c$ colores, existe una progresión aritmética monochromática de longitud $k$ si $N$ es suficientemente grande. Demostrar el caso $k=3$.

### Ejercicio 6

**Teorema de Dilworth** (1951): En un POSET parcialmente ordenado, el tamaño máximo de un conjunto antichain equals el número mínimo de cadenas en una partición. Demostrar.

### Ejercicio 7

**Teorema de König (1931): Un grafo es bipartito iff no contiene ciclos impares. Demostrar.

### Ejercicio 8

**Teorema de Hall** (1935): Sea $G$ un grafo bipartito con bipartición $(A, B)$. Existe matching que covering $A$ iff $|N(S)| \geq |S|$ para todo $S \subseteq A$. Demostrar.

### Ejercicio 9

**Teorema de Menger** (1927): La conectividad de aristas entre $s$ y $t$ equals el tamaño mínimo de un conjunto de aristas cuya eliminación disconnecta $s$ de $t$. Demostrar.

### Ejercicio 10

**Teorema de Robertson-Seymour** (1983): En graos menores, la propiedad de minors puede caracterizarse por un conjunto finito de minors prohibidos. Discutir.

### Ejercicio 11

**Teorema de Kirchhoff** (1847): El número de árboles de expansión en un grafo puede calcularse como el determinante de la matriz de Laplacian reducida. Demostrar.

### Ejercicio 12

**Teorema de Wilson** (1974): El número de grafos unlabeled puede aproximarse asintóticamente. Dar la fórmula.

### Ejercicio 13

**Teorema de Odlyzko** (1979): El número de particiones de $n$ en partes distintas tiene función generadora $\prod(1+q^k)$. Calcular asintóticamente.

### Ejercicio 14

**Teorema de Good-Lee-Yamamoto**: El número de autómatas secuenciales asíncronos puede contarse usando funciones generadoras.

### Ejercicio 15

**Conjetura de不对称的**: Demostrar que el coeficiente de $q^n$ en $\prod (1-q^k)^{-1}$ no tiene propiedades de divisibilidad simples más allá de las probadas por Ramanujan.

---

## Soluciones detalladas

### Solución 1 (Teorema de Ramsey)

Considerar cualquier vértice $v$ de $K_6$. Tiene 5 aristas incidentes, cada una coloreada de rojo o azul. Por el principio del palomar, al menos 3 tienen el mismo color, digamos rojo. Sean $a, b, c$ los otros extremos de estas aristas. Si alguna de las aristas $ab, bc, ac$ es roja, tenemos un triángulo rojo. Si todas son azules, tenemos un triángulo azul. Por tanto, existe un triángulo monochromático en cualquier coloreación.

$$\square$$

### Solución 2 (Teorema de Sperner)

Sea $\mathcal{F}$ una familia sin inclusiones. Para cada $A \in \mathcal{F}$, elegir $\max(A)$ (máximo elemento por orden natural). Por el principio del palomar, existe $m$ tal que al menos $|\mathcal{F}| / \binom{n}{\lfloor n/2 \rfloor}$ conjuntos tienen el mismo máximo. El número de conjuntos con máximo $m$ es $\binom{m-1}{|A|-1}$, máximo cuando $m = \lfloor n/2 \rfloor + 1$. Thus $|\mathcal{F}| \leq \binom{n}{\lfloor n/2 \rfloor}$.

$$\square$$

### Solución 3 (Erdős-Ko-Rado)

Sea $\mathcal{F}$ maximal. Si todo conjunto contiene 1, $|\mathcal{F}| = \binom{n-1}{k-1}$. Si no, existe $A$ sin 1. Sea $B$ con 1. Para que no haya intersección vacía, must existir $b \in B \setminus A$. Contradicción maximality. Hence $|\mathcal{F}| \leq \binom{n-1}{k-1}$.

$$\square$$

### Solución 4 (Teorema de Turán)

Suponer el grafo tiene más de $n^2/4$ aristas. Sea $v$ un vértice de grado máximo $d$. Los vecinos de $v$ tienen degree al menos $d-1$. Contando aristas, $d(n-d) \geq n^2/4 - d$. Resolviendo, existe $u, w$ adyacentes a $v$ y entre sí, forming triangle.

$$\square$$

### Solución 5 (Van der Waerden, k=3)

Para $c$ colores y $N = c^r + 1$ números, considerar los residuos módulo $c^r$. Por pigeonhole, dos números tienen el mismo residuo, hence su diferencia es múltiplo de $c^r$. Pero esto no garantiza progresión. Usar método probabilístico: mostrar que existe progresión con probabilidad positiva.

$$\square$$

### Solución 7 (Teorema de König)

($Rightarrow$) Si $G$ es bipartito con bipartición $(V_1, V_2)$, cualquier ciclo alterna entre $V_1$ y $V_2$, hence tiene longitud par.

($Leftarrow$) Suponer $G$ no contiene ciclos impares. Por BFS desde cualquier vértice, assign colors based on parity of distance. Verificar que no hay aristas dentro del mismo nivel, hence es bipartito.

$$\square$$

### Solución 8 (Teorema de Hall)

($Rightarrow$) Si hay matching covering $A$, cada $S \subseteq A$ tiene al menos $|S|$ neighbors (las imágenes del matching).

($Leftarrow$) Por inducción sobre $|A|$. Si $|N(S)| > |S|$ para todo $S \neq A$, elegir matching por greedy. Si existe $S$ con $|N(S)| = |S|$, usar inducción y concatenar.

$$\square$$

### Solución 11 (Teorema de Kirchhoff)

Sea $L$ la matriz Laplaciana de $G$. Eliminar una fila y columna, obtener $M$. Entonces $\det(M)$ es el número de árboles de expansión. Por el teorema de Matrix-Tree, $\det(M) = \prod_{i=2}^n \lambda_i$ donde $\lambda_i$ son los autovalores no nulos de $L$.

$$\square$$

---

## Referencias y lecturas adicionales

1. Graham, R.L.; Knuth, D.E.; Patashnik, O. (1994). *Concrete Mathematics*. Addison-Wesley.
2. Stanley, R.P. (1999). *Enumerative Combinatorics*. Cambridge University Press.
3. van Lint, J.H.; Wilson, R.M. (2001). *A Course in Combinatorics*. Cambridge University Press.
4. Anderson, I. (2002). *Combinatorics of Finite Sets*. Oxford University Press.
5. Rota, G.-C. (1964). "The number of partitions of a set". *American Mathematical Monthly*.
6. Hardy, G.H.; Ramanujan, S. (1918). "Asymptotic formulae for the distribution of integers". *Proceedings of the London Mathematical Society*.
7. Erdős, P.; Spencer, J. (1974). *Probabilistic Methods in Combinatorics*. Academic Press.
8. Aigner, M. (2007). *A Course in Enumeration*. Springer.
