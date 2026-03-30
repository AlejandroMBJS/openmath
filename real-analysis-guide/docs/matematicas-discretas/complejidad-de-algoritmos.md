# Teoría de Complejidad Algorítmica: Análisis Asintótico Avanzado

## Objetivo del tema

Desarrollar una teoría profunda del análisis de complejidad algorítmica, estableciendo fundamentos teóricos rigurosos para la notación asintótica, las clases de complejidad computacional, y los límites fundamentales de la computación. Este tema conecta directamente con la teoría de la computabilidad, la criptografía, la optimización algorítmica y los fundamentos matemáticos de las ciencias de la computación.

---

## 1. Fundamentos de la notación asintótica

### 1.1 Definiciones formales precisas

**Definición de O-grande (cota superior asintótica)**:
$$f(n) = O(g(n)) \iff \exists c > 0, \exists n_0 \in \mathbb{N} : \forall n \geq n_0, 0 \leq f(n) \leq c \cdot g(n)$$

Esta definición captura la idea de que $f$ grows no más rápido que una constante times $g$.

**Definición de Omega (cota inferior asintótica)**:
$$f(n) = \Omega(g(n)) \iff \exists c > 0, \exists n_0 \in \mathbb{N} : \forall n \geq n_0, 0 \leq c \cdot g(n) \leq f(n)$$

**Definición de Theta (cota ajustada)**:
$$f(n) = \Theta(g(n)) \iff f(n) = O(g(n)) \land f(n) = \Omega(g(n))$$

### 1.2 Propiedades algebraicas

**Lemas fundamentales**:

1. **Transitividad**: Si $f = O(g)$ y $g = O(h)$, entonces $f = O(h)$
2. **Reflexividad**: $f = O(f)$
3. **Simetría**: $f = \Theta(g) \iff g = \Theta(f)$

**Demostración de transitividad**:
$$\exists c_1, n_1 : f(n) \leq c_1 g(n) \forall n \geq n_1$$
$$\exists c_2, n_2 : g(n) \leq c_2 h(n) \forall n \geq n_2$$

Para $n \geq \max(n_1, n_2)$:
$$f(n) \leq c_1 g(n) \leq c_1 c_2 h(n)$$

Then $f = O(h)$ con $c = c_1 c_2$ y $n_0 = \max(n_1, n_2)$.

$$\square$$

### 1.3 Notaciones adicionales

**o-minúscula (strictly smaller)**:
$$f(n) = o(g(n)) \iff \lim_{n \to \infty} \frac{f(n)}{g(n)} = 0$$

**omega-minúscula (strictly larger)**:
$$f(n) = \omega(g(n)) \iff \lim_{n \to \infty} \frac{f(n)}{g(n)} = \infty$$

**Notacióntilde (aproximadamente)**:
$$f(n) = \Theta(g(n)) \iff \exists c_1, c_2 : c_1 g(n) \leq f(n) \leq c_2 g(n)$$

---

## 2. Teoría de límites y equivalencias asintóticas

### 2.1 Teorema de Stirlings

**Teorema de Stirling** (1730):
$$n! = \sqrt{2\pi n} \left(\frac{n}{e}\right)^n \left(1 + O\left(\frac{1}{n}\right)\right)$$

**Corolario**:
$$\log(n!) = n \log n - n + O(\log n)$$

**Demostración**: Usando la aproximación de integral de $\log n$ y la fórmula de Euler-Maclaurin.

$$\square$$

### 2.2 Límites fundamentales

**Teoremas de comparación**:

1. $\lim_{n \to \infty} \frac{\log^k n}{n^\varepsilon} = 0$ para todo $k, \varepsilon > 0$
2. $\lim_{n \to \infty} \frac{n^k}{c^n} = 0$ para todo $k$ y $c > 1$
3. $\lim_{n \to \infty} \frac{n!}{n^n} = 0$
4. $\lim_{n \to \infty} \frac{2^n}{n!} = 0$

### 2.3 Jerarquía de funciones

**Teorema de ordenamiento asintótico**:
$$1 \ll \log n \ll n \ll n \log n \ll n^2 \ll n^3 \ll \cdots \ll n^k \ll 2^n \ll 3^n \ll n! \ll n^n$$

**Demostración**: Verificar que cada ratio límite es 0 o $\infty$ según corresponda.

---

## 3. Análisis amortizado avanzado

### 3.1 Teorema de función potencial

**Teorema**: Sea $\Phi$ un potencial con $\Phi(s_0) = 0$ y $\Phi(s) \geq 0$. El costo amortizado de cada operación es:
$$\hat{c}_i = c_i + \Phi(s_i) - \Phi(s_{i-1})$$

y el costo total es $\sum c_i = \sum \hat{c}_i + \Phi(s_0) - \Phi(s_n)$.

### 3.2 Ejemplo: Contador binario

**Problema**: Implementar un contador binario con operación de incremento.

**Análisis**: En el peor caso, cada incremento costing $O(k)$ donde $k$ es el número de bits. Pero el costo amortizado es $O(1)$ porque cada bit se翻转 solo una vez cada $2^i$ operaciones.

**Teorema**: Para $n$ operaciones, el costo amortizado es $O(1)$.

### 3.3 Tablas hash dinámicas

**Teorema**: Si una tabla hash con tabla cheia a capacidad $c$ se redimensiona por 2 cuando el factor de carga excede $\alpha$, el costo amortizado de inserción es $O(1)$.

**Demostración**: Usar potencial $\Phi = -n + \text{capacidad}$ donde $n$ es el número de elementos.

---

## 4. Análisis de recurrencias

### 4.1 Teorema Maestro (1975)

**Teorema**: Sean $a \geq 1$, $b > 1$, y $f(n) = \Theta(n^{\log_b a - \varepsilon})$ para algún $\varepsilon > 0$. Entonces:
$$T(n) = \Theta(n^{\log_b a})$$

Si $f(n) = \Theta(n^{\log_b a})$, entonces:
$$T(n) = \Theta(n^{\log_b a} \log n)$$

Si $f(n) = \Omega(n^{\log_b a + \varepsilon})$ y la condición de regularidad, entonces:
$$T(n) = \Theta(f(n))$$

### 4.2 Demostración del caso 1

**Demostración**: Por inducción, asumimos $T(n) \leq c n^{\log_b a}$ para constant $c$. Then:
$$T(n) = a T(n/b) + f(n) \leq a c (n/b)^{\log_b a} + c_1 n^{\log_b a - \varepsilon}$$
$$= c n^{\log_b a} (a/b^{\log_b a}) + c_1 n^{\log_b a - \varepsilon} = c n^{\log_b a} + c_1 n^{\log_b a - \varepsilon}$$

Para $n$ sufficiently large, el segundo término está dominado, y podemos choose $c$ appropriately.

$$\square$$

### 4.3 Método de substitución

**Teorema**: Si $T(n) \leq T(\lfloor n/2 \rfloor) + \Theta(n)$, then $T(n) = O(n \log n)$.

**Demostración**: Por inducción, $T(n) \leq c n \log n$ para constant $c$ apropiada.

---

## 5. Clases de complejidad

### 5.1 Jerarquía polinomial

**Definición de P (Polynomial time)**:
$$\text{P} = \bigcup_{k \geq 1} \text{DTIME}(n^k)$$

**Definición de NP (Non-deterministic Polynomial time)**:
$$\text{NP} = \bigcup_{k \geq 1} \text{NTIME}(n^k)$$

### 5.2 Teorema de Cook-Levin

**Teorema** (1971): SAT es NP-completo.

**Implicaciones**: Si SAT $\in$ P, then P = NP.

### 5.3 Reducibilidad polinomial

**Definición**: $A \leq_p B$ si existe función computable en tiempo polinomial $f$ tal que:
$$x \in A \iff f(x) \in B$$

**Teorema**: Si $A \leq_p B$ y $B \in$ P, then $A \in$ P.

**Corolario**: Si SAT $\leq_p L$ y $L \in$ P, then P = NP.

---

## 6. Lower bounds fundamentales

### 6.1 Teorema deInformación

**Teorema**: Cualquier algoritmo de ordenamiento basado en comparaciones requiere $\Omega(n \log n)$ comparaciones en el peor caso.

**Demostración**: El árbol de decisión tiene al menos $n!$ hojas, hence altura $\geq \log_2(n!) = \Theta(n \log n)$.

$$\square$$

### 6.2 Lower bound para búsqueda

**Teorema**: Búsqueda binaria es óptima: requiere $\lceil \log_2 n \rceil$ comparaciones.

### 6.3 Teorema de Entscheidungsproblem

**Teorema de Turing** (1936): No existe algoritmo que decida, para toda fórmula booleana, si es tautología.

**Corolario**: El problema de la parada es indecidible.

---

## 7. Complejidad de espacio

### 7.1 Clases de espacio

**Teorema de Savitch** (1974):
$$\text{NSPACE}(s(n)) \subseteq \text{DSPACE}(s(n)^2)$$

para toda función $s(n) \geq \log n$.

### 7.2 Teorema de Immerman

**Teorema de Immerman-Szelepcsényi** (1988):
$$\text{NSPACE}(s(n)) = \text{co-NSPACE}(s(n))$$

para toda función $s(n) \geq \log n$.

### 7.3 Teorema de PCP

**Teorema de Arora-Safra-Motwani** (1992): PCP($\log n$, $O(1)$) = NP.

---

## 8. Algoritmos probabilísticos

### 8.1 Clases probabilísticas

**Definición de BPP**:
$$\text{BPP} = \{L : \exists \text{ polynomial-time randomized algorithm } M : P[M(x) = \chi_L(x)] \geq 2/3\}$$

### 8.2 Teorema de Adleman

**Teorema** (1978): $\text{BPP} \subseteq \text{P}^{\text{#P}}$

### 8.3 Algoritmos de Monte Carlo

**Teorema**: Si un algoritmo de Monte Carlo tiene probabilidad de error $\varepsilon$, puede boosterse a $1/2^{2^k}$ con $O(k)$ repeticiones.

---

## 9. Complejidad de circuitos

### 9.1 Clases de circuitos

**Definición de P/poly**: La clase de lenguajes decidibles por familias de circuitos de tamaño polinómico.

**Teorema de Karp-Lipton** (1980): Si NP $\subseteq$ P/poly, then PH = $\Sigma_2^P$.

### 9.2 Teorema de Razborov

**Teorema** (1985): El problema de clique requiere circuitos de tamaño exponencial.

---

## 10. Problemas abiertos contemporáneos

### 10.1 Problema P vs NP

**Estado**: Uno de los 7 problemas del milenio. La conjetura es que P $\neq$ NP.

### 10.2 Conjetura de la jerarquía temporal

**Problema**: Determinar relaciones exactas entre DTIME($n^k$) y DTIME($n^{k+1}$).

### 10.3 Complejidad de графов

**Teorema de Babai** (2017): Isomorfismo de grafos en tiempo quasi-polynomial $2^{O(\log^c n)}$.

### 10.4 Conjetura de Hartmanis

**Conjetura**: Las clases de complejidad tienen infinitos niveles intermedios.

---

## 11. Ejercicios de nivel doctoral

### Ejercicio 1

**Teorema maestro generalizado**: Demostrar los tres casos del teorema maestro para recurrencias de la forma $T(n) = a T(n/b) + f(n)$.

### Ejercicio 2

**Algoritmo de Strassen**: Demostrar que la multiplicación de matrices puede hacerse en $O(n^{\log_2 7}) \approx O(n^{2.807})$.

### Ejercicio 3

**Teorema de Schöning**: Demostrar que 3-SAT puede resolverse en tiempo esperado $O((4/3)^n)$.

### Ejercicio 4

**Lower bound de sorting**: Demostrar que cualquier algoritmo de ordenamiento estable requiere $\Omega(n \log n)$ comparaciones.

### Ejercicio 5

**Teorema de Valiant**: Demostrar que el matching perfecto en grafos bipartitos está en P.

### Ejercicio 6

**Complejidad de la exponenciación**: Demostrar que $a^n$ puede calcularse en $O(\log n)$ multiplicaciones.

### Ejercicio 7

**Algoritmo de Fürer**: Demostrar la multiplicación de enteros en $O(n \log n \log\log n)$.

### Ejercicio 8

**Teorema de Toda**: Demostrar PH $\subseteq$ P$^{#SAT}$.

### Ejercicio 9

**Complejidad de circuitos aritméticos**: Demostrar que la multiplicación de polinomios tiene lower bound superpolinomial.

### Ejercicio 10

**Teorema de Winograd**: Demostrar el algoritmo de multiplicación de matrices en $O(n^{2.496})$.

### Ejercicio 11

**Algoritmo de Coppersmith-Winograd**: Analizar el algoritmo de multiplicación de matrices en $O(n^{2.373})$.

### Ejercicio 12

**Teorema de Ajtai**: Demostrar la existencia de funciones de hash con lower bound lineal.

### Ejercicio 13

**Complejidad de la FFT**: Demostrar que la transformada rápida de Fourier requiere $\Theta(n \log n)$.

### Ejercicio 14

**Teorema de Meyer-Valiente**: Demostrar que la exponenciación de matrices puede hacerse en $O(n^\omega \log n)$.

### Ejercicio 15

**Conjetura de strong exponential time**: Probar o refutar que SAT no puede resolverse en tiempo $2^{o(n)}$.

---

## Soluciones detalladas

### Solución 1

(Sketch) Caso 1: $f(n) = O(n^{\log_b a - \varepsilon})$. Por inducción, $T(n) = \Theta(n^{\log_b a})$.

Caso 2: $f(n) = \Theta(n^{\log_b a})$. El resultado es $T(n) = \Theta(n^{\log_b a} \log n)$.

Caso 3: $f(n) = \Omega(n^{\log_b a + \varepsilon})$ con condición de regularidad $a f(n/b) \leq c f(n)$ para some $c < 1$. Then $T(n) = \Theta(f(n))$.

$$\square$$

### Solución 2

Strassen usa 7 multiplicaciones recursivas en lugar de 8. La matriz de complejidad satisfies:
$$M(n) = 7 M(n/2) + \Theta(n^2)$$

Aplicando el teorema maestro: $\log_2 7 \approx 2.807$, hence $M(n) = O(n^{\log_2 7})$.

$$\square$$

### Solución 4

Sea $A$ un algoritmo de ordenamiento. Su árbol de decisión tiene al menos $n!$ hojas (una para cada permutación). La altura mínima del árbol es $\lceil \log_2 n! \rceil$. Por Stirling, $\log_2 n! = \Theta(n \log n)$. Hence $\Omega(n \log n)$ comparaciones son necesarias.

$$\square$$

### Solución 5

Por el teorema de König, un matching perfecto existe iff el flujo máximo en la red de flujo asociada es $|V|/2$. El algoritmo de Edmonds-Karp encuentra este flujo en tiempo $O(VE^2)$. Para grafos bipartitos, el tiempo es $O(V^3)$.

$$\square$$

### Solución 6

Para calcular $a^n$:
- Si $n$ es par: $a^n = (a^{n/2})^2$
- Si $n$ es impar: $a^n = a \cdot a^{n-1}$

Esto da $\lfloor \log_2 n \rfloor + \text{bit count}(n)$ multiplicaciones.

$$\square$$

### Solución 8

Por Toda's theorem, PH $\subseteq$ P^{#SAT}. La prueba usa:
1. Reducción de #SAT a problemas en PH
2. Uso de oracle para #SAT para simular cualquier problema en PH

$$\square$$

### Solución 13

La FFT divide el problema de tamaño $n$ en dos problemas de tamaño $n/2$, cada uno requiriendo multiplicaciones por raíces $n$-ésimas de la unidad. Por el teorema maestro, el tiempo es $\Theta(n \log n)$. El lower bound sigue del teorema de información sobre el volumen de datos procesado.

$$\square$$

---

## Referencias y lecturas adicionales

1. Sipser, M. (2013). *Introduction to the Theory of Computation*. Cengage Learning.
2. Papadimitriou, C.H. (1994). *Computational Complexity*. Addison-Wesley.
3. Arora, S.; Barak, B. (2009). *Computational Complexity: A Modern Approach*. Cambridge University Press.
4. Knuth, D.E. (1997). *The Art of Computer Programming, Volume 1: Fundamental Algorithms*. Addison-Wesley.
5. Cormen, T.H. (2009). *Introduction to Algorithms*. MIT Press.
6. Garey, M.R.; Johnson, D.S. (1979). *Computers and Intractability: W.H. Freeman*.
7. Hopcroft, J.E.; Ullman, J.D. (1979). *Introduction to Automata Theory*. Addison-Wesley.
8. Aho, A.V. (1974). *The Design and Analysis of Computer Algorithms*. Addison-Wesley.
