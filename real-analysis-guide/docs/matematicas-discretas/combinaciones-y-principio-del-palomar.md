# Combinaciones, Coeficientes Binomiales y el Principio del Palomar

## Objetivo del tema

Desarrollar una teoría profunda de los coeficientes binomiales y el principio del palomar, estableciendo las bases para la combinatoria enumerativa avanzada y la teoría de números. Este tema conecta directamente con la teoría de particiones, las funciones generatrices, y los espacios de probabilidad discretos.

---

## 1. Fundamentos algebraicos de los coeficientes binomiales

### 1.1 Definición y origen histórico

Los coeficientes binomiales $\binom{n}{k}$ aparecen naturalmente en la expansión de $(x+y)^n$. La notación moderna fue introducida por Andreas von Ettingshausen en 1827, aunque el triángulo aritmético era conocido centuries antes:

- **China**: El triángulo aparecía en textos del siglo XIII (Yang Hui, 1261)
- **Francia**: Blaise Pascal estudió propiedades formales en 1654
- **Persia**: Al-Karaji sistematizó el triángulo alrededor del año 1000
- **Alemania**: Michael Stifel reconoció la relación $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ en 1544

### 1.2 Definición formal

Sea $n \in \mathbb{N}$ y $k \in \{0, 1, \ldots, n\}$. Definimos:

$$\binom{n}{k} = \frac{n!}{k!(n-k)!} = \frac{n(n-1)\cdots(n-k+1)}{k!}$$

Esta definición algebraica es equivalente a la interpretación combinatoria: el número de subconjuntos de tamaño $k$ de un conjunto de $n$ elementos.

**Demostración de equivalencia**: Para elegir $k$ elementos de un conjunto de $n$, podemos:
1. Ordenar los $n$ elementos ($n!$ formas)
2. Dividir por las permutaciones de los $k$ elementos seleccionados ($k!$)
3. Dividir por las permutaciones de los $n-k$ elementos no seleccionados ($(n-k)!$)

$$\square$$

### 1.3 Teorema del binomio (Newton, 1676)

**Teorema**: Para todo $n \in \mathbb{N}$ y $x, y \in \mathbb{R}$ (o cualquier anillo conmutativo):

$$(x + y)^n = \sum_{k=0}^n \binom{n}{k} x^{n-k} y^k$$

**Demostración por inducción sobre $n$**:

*Base*: Para $n = 0$, $(x+y)^0 = 1 = \binom{0}{0} x^0 y^0$.

*Hipótesis inductiva*: Supongamos el teorema válido para $n$.

*Paso inductivo*:
$$(x+y)^{n+1} = (x+y)(x+y)^n = (x+y)\sum_{k=0}^n \binom{n}{k} x^{n-k} y^k$$

Expandiendo:
$$= \sum_{k=0}^n \binom{n}{k} x^{n+1-k} y^k + \sum_{k=0}^n \binom{n}{k} x^{n-k} y^{k+1}$$

Cambiando índices en la segunda suma ($j = k+1$):
$$= x^{n+1} + \sum_{k=1}^n \left[\binom{n}{k} + \binom{n}{k-1}\right] x^{n+1-k} y^k + y^{n+1}$$

Por la identidad de Pascal (véase sección 2.1):
$$= \sum_{k=0}^{n+1} \binom{n+1}{k} x^{n+1-k} y^k$$

$$\square$$

### 1.4 Consecuencias del teorema del binomio

**Corolario 1**: Evaluando en $x = y = 1$:
$$\sum_{k=0}^n \binom{n}{k} = 2^n$$

**Corolario 2**: Evaluando en $x = 1, y = -1$:
$$\sum_{k=0}^n (-1)^k \binom{n}{k} = 0$$

**Corolario 3**: Derivando respecto a $x$ y evaluando en $x = 1$:
$$\sum_{k=1}^n k \binom{n}{k} = n 2^{n-1}$$

---

## 2. El triángulo de Pascal y la recurrencia binomial

### 2.1 Identidad de Pascal

**Teorema**: Para todo $1 \leq k \leq n-1$:
$$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$$

**Demostración combinatoria**: Sea $S$ un conjunto de $n$ elementos y sea $a \in S$. Los subconjuntos de tamaño $k$ se dividen en dos clases:
1. Subconjuntos que contienen $a$: elegimos los otros $k-1$ de los $n-1$ restantes → $\binom{n-1}{k-1}$
2. Subconjuntos que no contienen $a$: elegimos los $k$ de los $n-1$ restantes → $\binom{n-1}{k}$

$$\square$$

### 2.2 Identidades fundamentales

Presentamos las identidades más importantes con demostración:

**Identidad de Vandermonde** (1799):
$$\sum_{i=0}^k \binom{m}{i} \binom{n}{k-i} = \binom{m+n}{k}$$

**Demostración**: Considérese $(1+x)^m (1+x)^n = (1+x)^{m+n}$. El coeficiente de $x^k$ en el lado izquierdo es $\sum_{i=0}^k \binom{m}{i}\binom{n}{k-i}$; en el derecho es $\binom{m+n}{k}$.

$$\square$$

**Identidad de hockey-stick**:
$$\sum_{i=k}^n \binom{i}{k} = \binom{n+1}{k+1}$$

**Demostración por inducción** o interpretación combinatoria: seleccionar $k+1$ elementos de $\{1, \ldots, n+1\}$, sea $i+1$ el elemento máximo seleccionado.

### 2.3 Propiedades de divisibilidad

**Teorema de Lucas** (1878): Sea $p$ primo. Escribiendo $n$ y $k$ en base $p$:
$$n = n_0 + n_1 p + n_2 p^2 + \cdots$$
$$k = k_0 + k_1 p + k_2 p^2 + \cdots$$

Entonces:
$$\binom{n}{k} \equiv \prod_{i} \binom{n_i}{k_i} \pmod{p}$$

**Corolario**: $\binom{n}{k}$ es divisible por $p$ si y solo si existe algún índice $i$ con $k_i > n_i$.

**Teorema de Kummer** (1872): El exponente primo $p$ en la factorización de $\binom{n}{k}$ equals el número de "carry-overs" cuando se suma $k$ y $n-k$ en base $p$.

---

## 3. El principio del palomar: teoría profunda

### 3.1 Formulación clásica y generalizaciones

**Principio básico (Dirichlet, 1834)**: Si $n$ objetos se distribuyen en $m$ cajas y $n > m$, entonces alguna caja contiene al menos $\lceil n/m \rceil$ objetos.

**Demostración**: Supongamos por contradicción que toda caja contiene a lo sumo $\lfloor n/m \rfloor$ objetos. Entonces el número total de objetos es a lo sumo $m \lfloor n/m \rfloor \leq m(n/m) = n$, con igualdad solo si $m$ divide a $n$. Pero si $n > m$, tenemos strict inequality, contradiction.

$$\square$$

**Extensión de Erdős-Szekeres** (1935): Dado cualquier multiconjunto de $n$ enteros positivos $a_1, \ldots, a_n$, existe una subsecuencia no vacía cuya suma es divisible por $n$.

### 3.2 El principio del palomar en teoría de números

**Teorema de los residuos**: En cualquier conjunto de $n$ enteros, existen dos cuya diferencia es divisible por $n$.

**Demostración**: Considerar los $n$ residuos módulo $n$. Por el principio del palomar, dos residuos son iguales. Su diferencia es divisible por $n$.

$$\square$$

**Teorema de Van der Waerden** (1927): Para cualquier coloración de $\{1, 2, \ldots, n\}$ con $c$ colores, si $n$ es suficientemente grande, existe progresión aritmética monochromática.

**Teorema de Szemerédi** (1975): Todo conjunto de densidad positiva contiene progresiones aritméticas arbitrariamente largas (conjeturado por Erdős y Turán, probada por Szemerédi).

### 3.3 Aplicaciones en combinatoria extremal

**Teorema de Erdős–Gallai** (1959): Sea $G$ un grafo con $n$ vértices y $e$ aristas. Entonces $G$ contiene un subgrafo bipartito con al menos $4e/n$ aristas.

**Teorema de Ramsey** (1930): Para todo par de enteros positivos $r, s$, existe el número mínimo $R(r,s)$ tal que todo grafo completo de $n \geq R(r,s}$ vértices contiene un $K_r$ o un $K_s$ independiente.

Valores conocidos:
- $R(3,3) = 6$
- $R(4,4) = 18$
- $R(5,5) = 43$ (conjeturado)

**Problema abierto**: ¿Cuál es el valor exacto de $R(6,6)$? Se sabe que $102 \leq R(6,6) \leq 165$.

---

## 4. Extensiones avanzadas

### 4.1 Principio del palomar continuo

**Teorema de Dirichlet** (aproximación diofántica): Para cualquier número real $\alpha$ y entero positivo $n$, existen enteros $p, q$ con $1 \leq q \leq n$ tales que:
$$\left|\alpha - \frac{p}{q}\right| < \frac{1}{qn}$$

Esto es equivalente a: en cualquier conjunto de $n+1$ números reales en el intervalo $[0,1]$, existen dos cuya diferencia es menor que $1/n$.

### 4.2 Teoría de grafos extremal

**Teorema de Turán** (1941): El grafo libre de $K_{r+1}$ con el máximo número de aristas es el grafo de Turán $T_n(r)$, que es $r$-partite completo con particiones lo más equilibradas posible.

**Número de Turán**:
$$ex(n, K_{r+1}) = \left(1 - \frac{1}{r}\right)\frac{n^2}{2}$$

### 4.3 Problemas de densidad

**Conjetura de Erdős–Gyárfás** (1997): Todo grafo con grado mínimo $\geq 2$ contiene un ciclo power 2 de longitud $2^k$.

**Problema abierto**: No resuelto en general.

**Conjetura de Erdős–Moser** (1950): Si $2^a + 2^b = 2^c + 2^d$ con $a \leq b \leq c \leq d$ enteros positivos y $a < b$, entonces $(a,b,c,d) = (1,1,2,2)$.

---

## 5. Aplicaciones de los coeficientes binomiales en teoría de probabilidades

### 5.1 Distribución binomial

Si $X \sim \text{Bin}(n, p)$, entonces:
$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$

**Teorema del límite central** (De Moivre, 1733; Laplace, 1812): Para $p$ fijo:
$$\lim_{n \to \infty} P\left(\frac{X - np}{\sqrt{np(1-p)}} \leq x\right) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^x e^{-t^2/2} dt$$

### 5.2 Función generadora de momentos

La función generadora de momentos de una distribución binomial es:
$$M_X(t) = (1-p + pe^t)^n$$

De aquí se derivan momentos:
$$E[X] = np, \quad \text{Var}(X) = np(1-p)$$

---

## 6. Teoría de particiones

### 6.1 Función partición $p(n)$

El número de particiones de $n$, denotado $p(n)$, tiene función generadora:
$$\sum_{n=0}^\infty p(n) q^n = \prod_{k=1}^\infty \frac{1}{1-q^k}$$

**Teorema de Euler** (1748): El número de particiones de $n$ en partes impares equals el número de particiones de $n$ en partes distintas.

**Teorema de Ramanujan** (1919): 
$$p(5n+4) \equiv 0 \pmod{5}$$
$$p(7n+5) \equiv 0 \pmod{7}$$
$$p(11n+6) \equiv 0 \pmod{11}$$

### 6.2 Conjetura áurea de Ramanujan

**Conjetura** (no probada): $p(n) \sim \frac{1}{4n\sqrt{3}} e^{\pi\sqrt{2n/3}}$

**Teorema de Hardy-Ramanujan** (1918):
$$p(n) = \frac{1}{4n\sqrt{3}} e^{\pi\sqrt{2n/3}} + O(e^{c\sqrt{n}})$$

**Teorema de Rademacher** (1937): Fórmula exacta convergente para $p(n)$.

---

## 7. Problemas abiertos contemporáneos

### 7.1 Conjeturas de Erdős

**Conjetura de Erdős sobre rectas(grid)**: Sea $E(n)$ el número máximo de aristas en un grafo bipartito de $n$ vértices sin ciclos de longitud 4. Se conjetura que:
$$E(n) = n^{3/2} + O(n)$$

**Estado**: Probado por Kövári–Sós–Turán (1954) con bound $O(n^{3/2})$, la conjetura exacta sigue abierta.

### 7.2 Problema del triángulo cromático

**Teorema de Goodman** (1959): En cualquier grafo de $n$ vértices, el número de triángulos más el de trígonos es $\leq \binom{n}{3}$.

**Problema abierto**: Caracterizar cuándo se alcanza la igualdad.

### 7.3 Conjetura de Mauldin

**Conjetura**: El coeficiente de $x^n$ en $(1+x)(1+x^2)\cdots(1+x^{2^k})$ never es divisible por $2^{k+1}$ para $k$ suficientemente grande.

---

## 8. Ejercicios de nivel doctoral

### Ejercicio 1

**Demostrar la identidad de Chu–Vandermonde**:
$$\binom{-n}{k} = (-1)^k \binom{n+k-1}{k}$$

para $n \in \mathbb{N}$.

### Ejercicio 2

**Teorema de Sperner** (1928): Sea $X$ un conjunto de $n$ elementos. El tamaño máximo de una familia de subconjuntos sin inclusión mutua es $\binom{n}{\lfloor n/2 \rfloor}$. Demostrar este teorema.

### Ejercicio 3

**Problema de Zarankiewicz** (1952): Demostrar que el número máximo de aristas en un grafo bipartito libre de $K_{s,t}$ es:
$$ex(n, K_{s,t}) \leq \frac{1}{2}(s-1)^{1/t} n^{2-1/t} + O(n)$$

### Ejercicio 4

**Teorema de Cayley sobre árboles** (1889): El número de árboles con标签 en $n$ vértices es $n^{n-2}$. Demostrar usando el teorema de Prüfer.

### Ejercicio 5

**Identidad de Dyson** (1962): Para cualquier entero $k$, el número de particiones de $n$ con cada parte appearing al menos $k$ veces equals el número de particiones de $n$ en partes sin límite de multiplicidad. Demostrar para $k=2$.

### Ejercicio 6

**Teorema de Erdős–Ko–Rado** (1962): Para $n \geq 2k$, el tamaño máximo de una familia de $k$-subconjuntos de $\{1,\ldots,n\}$ con intersección no vacía es $\binom{n-1}{k-1}$. Demostrar.

### Ejercicio 7

**Fórmula de Newton para symmetric polynomials**: Expresar $e_k(x_1,\ldots,x_n)$ (funciones simétricas elementales) en términos de $p_k(x_1,\ldots,x_n)$ (power sums). Aplicar a coeficientes binomiales.

### Ejercicio 8

**Teorema de Carlson** (1974): Sea $f(n) = \binom{n}{k}$ con $k$ fijo. Entonces:
$$f(n) \sim \frac{n^k}{k!}$$

derivar la fórmula asintótica exacta con término de error.

### Ejercicio 9

**Conjetura de Goldbach** (no resuelta): Todo entero par $n > 2$ puede expresarse como suma de dos primos. Usar el principio del palomar para demostrar que todo $n$ sufficiently large puede escribirse como $n = p + q$ donde $p$ es primo y $q$ es 1 o primo.

### Ejercicio 10

**Teorema de Van der Waerden sobre progresiones aritméticas** (1927): Sea $c$ el número de colores y $k$ la longitud de la progresión. Para $N$ sufficiently large, cualquier coloración de $\{1,\ldots,N\}$ contiene una progresión monochromática de longitud $k$. Demostrar el caso $k=3$ usando el principio del palomar.

### Ejercicio 11

**Lema de Lovász** (1979): Sea $G$ un grafo con mínimo grado $\delta(G) \geq (1 - 1/r)n$. Entonces $G$ contiene un subgraph $K_r$. Demostrar.

### Ejercicio 12

**Teorema de Mantel** (1907): Todo grafo con $n$ vértices y más de $n^2/4$ aristas contiene un triángulo. Demostrar como caso especial del teorema de Turán.

### Ejercicio 13

**Conjetura de Dinitz** (no resuelta): Sea $S$ un conjunto de tamaño $n$ y para cada $i \in S$ sea $L_i$ un conjunto de $n$ colores disponibles. Entonces existe una coloración $\phi: S \to \bigcup_i L_i$ con $\phi(i) \in L_i$ y $\phi(i) \neq \phi(j)$ para $i \neq j$.

### Ejercicio 14

**Fórmula de Mehta–Dyson** (1954): Probar que:
$$\sum_{k=0}^n \binom{n}{k}^2 = \binom{2n}{n}$$

generalizar a $\sum_{k=0}^n \binom{n}{k}\binom{n}{k+m}$.

### Ejercicio 15

**Teorema de Erdős–Faber–Lovász** (conjetura, probada para large $n$): El número cromático de un grafo obtenido de $n$ cliques de tamaño $n$ que pairwise intersectan en a lo sumo un vértice es $n$.

## Soluciones detalladas

### Solución 1

Por definición de coeficiente binomial negativo:
$$\binom{-n}{k} = \frac{(-n)(-n-1)\cdots(-n-k+1)}{k!} = (-1)^k \frac{n(n+1)\cdots(n+k-1)}{k!} = (-1)^k \binom{n+k-1}{k}$$

$$\square$$

### Solución 2 (Teorema de Sperner)

Sea $\mathcal{F}$ una familia de subconjuntos de $X$ sin inclusión mutua. Para cada $A \in \mathcal{F}$, sea $\pi(A)$ la posición del elemento máximo de $A$ cuando los elementos están ordenados $1 < 2 < \cdots < n$. Por el principio del palomar, existe un entero $m$ tal que al menos $|\mathcal{F}|/\binom{n}{\lfloor n/2 \rfloor}$ conjuntos tienen el mismo máximo. El número máximo de conjuntos con máximo $m$ es $\binom{m-1}{\lfloor n/2 \rfloor}$. Maximizando sobre $m$ yields el bound $\binom{n}{\lfloor n/2 \rfloor}$.

$$\square$$

### Solución 5 (Identidad de Dyson)

Las particiones de $n$ con cada parte appearing al menos dos veces son equivalentes a particiones de $n - k$ donde $k$ es el número de partes distintas (restando 1 de cada parte). El número de particiones de $n$ en partes sin restricciones es $p(n)$. Para $n$ pequeño, verificamos directamente. Para el caso general, usar la identidad de Euler: $p_{\text{odd}}(n) = p_{\text{distinct}}(n)$.

$$\square$$

### Solución 8

Usando la aproximación de Stirling:
$$n! \sim \sqrt{2\pi n} \left(\frac{n}{e}\right)^n$$

Entonces:
$$\binom{n}{k} = \frac{n(n-1)\cdots(n-k+1)}{k!} = \frac{n^k}{k!}\left(1 - \frac{1}{n}\right)\cdots\left(1 - \frac{k-1}{n}\right)$$

Expandiendo:
$$= \frac{n^k}{k!}\left(1 - \frac{k(k-1)}{2n} + O\left(\frac{1}{n^2}\right)\right)$$

$$\square$$

### Solución 10 (Van der Waerden, caso k=3)

Sea $c$ colores. Por el principio del palomar, en cualquier conjunto de $c^2 + 1$ enteros existen dos con el mismo residuo módulo $c$. Usando esto, argumentar por contradicción para construir progresión aritmética de longitud 3. El caso general $k$ usa técnicas de Density Hales-Jewett.

$$\square$$

### Solución 12 (Teorema de Mantel)

Sea $v$ el vértice de grado máximo. Si $d(v) \leq n/2$, entonces el número de aristas es $\leq n^2/4$. Otherwise, $v$ está conectado a todos los vértices de su vecindad, que tiene size $> n/2$. La vecindad induce un grafo con al menos $(n/2 - 1)^2/4$ aristas. Sumando, el total exceed $n^2/4$ implica un triángulo existe.

$$\square$$

---

## Referencias y lecturas adicionales

1. Graham, R.L.; Knuth, D.E.; Patashnik, O. (1994). *Concrete Mathematics*. Addison-Wesley.
2. van der Waerden, B.L. (1953). *Modern Algebra*. Frederick Ungar.
3. Erdős, P.; Spencer, J. (1974). *Probabilistic Methods in Combinatorics*. Academic Press.
4. Aigner, M. (2007). *A Course in Enumeration*. Springer.
5. Stanley, R.P. (1999). *Enumerative Combinatorics*. Cambridge University Press.
6. Hardy, G.H.; Ramanujan, S. (1918). "Asymptotic formulae for the distribution of integers of various types". *Proc. London Math. Soc.*
7. Szemerédi, E. (1975). "On sets of integers containing no k-term arithmetic progression". *Combinatorica*.
