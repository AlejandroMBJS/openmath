# Álgebra Booleana: Teoría Estructural y Aplicaciones

## Objetivo del tema

Desarrollar una teoría profunda del álgebra booleana, estableciendo conexiones con la lógica matemática, la teoría de conjuntos, los circuitos digitales, la criptografía y la optimización combinatoria. Este tema forma la base de la computación digital y tiene aplicaciones cruciales en diseño de circuitos, verificación formal, inteligencia artificial y bases de datos.

---

## 1. Fundamentos del álgebra booleana

### 1.1 Axiomas de Huntington

**Definición**: Un álgebra booleana $(B, \vee, \wedge, \neg, 0, 1)$ satisface:

1. **Conmutatividad**: $a \vee b = b \vee a$, $a \wedge b = b \wedge a$
2. **Asociatividad**: $(a \vee b) \vee c = a \vee (b \vee c)$, $(a \wedge b) \wedge c = a \wedge (b \wedge c)$
3. **Absorción**: $a \vee (a \wedge b) = a$, $a \wedge (a \vee b) = a$
4. **Distributividad**: $a \vee (b \wedge c) = (a \vee b) \wedge (a \vee c)$, $a \wedge (b \vee c) = (a \wedge b) \vee (a \wedge c)$
5. **Identidad**: $a \vee 0 = a$, $a \wedge 1 = a$
6. **Complemento**: $a \vee \neg a = 1$, $a \wedge \neg a = 0$

### 1.2 Teorema de Stone (1936)

**Teorema**: Todo álgebra booleana $B$ es isomorfa a un campo de conjuntos (álgebra de subconjuntos de algún conjunto $X$).

**Demostración**: Construir el ultrafiltro de $B$ y usar la representación canónica:
- Para cada ultrafiltro $U$, definir homomorfismo $\phi_U: B \to \{0,1\}$ mediante $\phi_U(a) = 1 \iff a \in U$
- El mapeo $a \mapsto \{U : a \in U\}$ es el embedding requerido

$$\square$$

### 1.3 Forma normal disyuntiva

**Teorema**: Toda función booleana puede escribirse como suma de productos (DNF):
$$f(x_1, \ldots, x_n) = \bigvee_{i} \bigwedge_{j} x_{ij}$$

donde cada $x_{ij}$ es $x_j$ o $\neg x_j$.

**Demostración**: Por inducción sobre el número de variables o mediante tablas de verdad. Los minterms correspondienten a rows donde $f=1$.

$$\square$$

### 1.4 Forma normal conjuntiva

**Teorema**: Toda función booleana puede escribirse como producto de sumas (CNF):
$$f(x_1, \ldots, x_n) = \bigwedge_{i} \bigvee_{j} x_{ij}$$

---

## 2. Teoría de filtros y ultrafiltros

### 2.1 Filtros

**Definición**: Un filtro $F$ en $B$ es un subconjunto no vacío tal que:
1. $0 \notin F$
2. Si $a, b \in F$, entonces $a \wedge b \in F$
3. Si $a \in F$ y $a \leq b$, entonces $b \in F$

### 2.2 Teorema del ultrafiltro

**Teorema de Zorn**: Todo filtro puede extenderse a un ultrafiltro.

**Propiedad característica**: $U$ es ultrafiltro iff para todo $a \in B$, exactamente uno de $a, \neg a$ está en $U$.

### 2.3 Aplicaciones

**Teorema de representación de Stone**: Usar ultrafiltros para proof el isomorfismo con campos de conjuntos.

---

## 3. Funciones booleanas

### 3.1 Funciones completas

**Teorema de Post**: El conjunto de funciones booleanas $\{ \wedge, \vee, \neg \}$ es funcionalmente completo. También lo son $\{\uparrow\}$ (NAND) y $\{\downarrow\}$ (NOR).

**Demostración**: Construir $\neg x = x \uparrow x$, $x \wedge y = \neg(x \uparrow y)$, etc.

$$\square$$

### 3.2 Complejidad de funciones

**Teorema de Shannon** (1949): La complejidad de switching (número de transistores) de la función booleana más difícil con $n$ variables es $\Theta(2^n / n)$.

### 3.3 Funciones simétricas

**Teorema**: Las funciones booleanas simétricas forman un álgebra isomorfa a $\mathbb{Z}_2^{n+1}$.

### 3.4 Monotonitud

**Teorema**: Una función booleana es monótona iff puede expresarse sin negaciones.

---

## 4. Circuitos booleanos

### 4.1 Modelo de complejidad

**Definición**: Un circuito booleano es un DAG con:
- Nodos de entrada (variables)
- Nodos de compuerta (AND, OR, NOT)
- Un nodo de salida

**Teorema de Stockmeyer**: El problema de evaluar un circuito booleano de tamaño polinomial es P-completo.

### 4.2 Lower bounds

**Teorema de Subtabulation**: Se necesitan $\Omega(2^n / \sqrt{n})$ transistores para algunas funciones de $n$ variables.

**Teorema de Razborov**: Para funciones simples como parity, se requieren circuitos de tamaño exponencial en modelos restringidos.

### 4.3 Circuitos aritméticos

**Teorema de Valiant**: Multiplicación de polinomios puede hacerse en tamaño $O(n \log n)$.

---

## 5. Optimización booleana

### 5.1 Minimización

**Teorema de Quine-McCluskey**: El algoritmo de Quine-McCluskey encuentra la forma normal disyuntiva mínima.

**Complejidad**: El problema de minimización es EXPTIME-completo.

### 5.2 SAT y 2-SAT

**Teorema de Cook-Levin**: SAT es NP-completo.

**Teorema de 2-SAT**: 2-SAT puede resolverse en tiempo lineal mediante grafos de implicación.

### 5.3 Optimización combinatoria

**Teorema de Horn**: Las fórmulas de Horn pueden enviarse en tiempo lineal.

---

## 6. Álgebra booleana y lógica

### 6.1 Teorema de completitud

**Teorema de Gödel**: El sistema de lógica proposicional es completo y sonido.

**Teorema de компактность**: Un conjunto de fórmulas es satisfacible iff todo subconjunto finito es satisfacible.

### 6.2 Deducción natural

**Sistema de Hilbert**: Sistema axiomático para propositional lógica.

**Deducción natural**: Sistema de prueba con reglas de introducción y eliminación.

### 6.3 Teorema de Resolución

**Teorema de Robinson**: El algoritmo de resolución es correcto y completo para lógica proposicional.

---

## 7. Aplicaciones en criptografía

### 7.1 Funciones hash

**Teorema de seguridad**: Las funciones hash resisten colisiones iff la función es hard de inverter.

### 7.2 Cifrado simétrico

**Teorema de Shannon**: Un cifrado con entropía perfecta es unconditionally secure.

### 7.3 Compartición de secretos

**Esquema de Shamir**: $(t, n)$-threshold secret sharing usando interpolación polinomial sobre campos finitos.

---

## 8. Problemas abiertos contemporáneos

### 8.1 Conjetura de la complejidad de circuitos

**Problema**: $\text{NP} \subseteq \text{P/poly}$? (¿Circuitos polinomiales para NP?)

### 8.2 Conjetura de la fórmula de size

**Problema**: Determinar el tamaño exacto mínimo de circuitos para funciones específicas.

### 8.3 Problema de SAT

**Estado**: SAT está en NP, pero no se sabe si está en P. El teorema de Cook-Levin muestra que es NP-completo.

---

## 9. Ejercicios de nivel doctoral

### Ejercicio 1

**Teorema de Stone**: Demostrar que toda álgebra booleana es isomorfa a un campo de conjuntos.

### Ejercicio 2

**Teorema de Post**: Demostrar que NAND y NOR son funcionalmente completas.

### Ejercicio 3

**Teorema de Cook**: SAT es NP-completo. Dar reducción desde 3-SAT.

### Ejercicio 4

**Teorema de 2-SAT**: Demostrar que 2-SAT puede resolverse en tiempo lineal.

### Ejercicio 5

**Teorema de Quine-McCluskey**: Implementar y analizar el algoritmo de minimización.

### Ejercicio 6

**Teorema de Shannon**: Estimar la complejidad de switching de funciones aleatorias.

### Ejercicio 7

**Teorema de Tseitin**: Transformar cualquier fórmula a CNF con linear overhead.

### Ejercicio 8

**Teorema de Resolution**: Demostrar completitud del algoritmo de resolución.

### Ejercicio 9

**Teorema de Horn**: Resolver fórmulas de Horn en tiempo lineal.

### Ejercicio 10

**Teorema de Lovász**: Contar el número de satisfying assignments usando algoritmos de Monte Carlo.

### Ejercicio 11

**Teorema de PCP**: $\text{PCP}(O(\log n), O(1)) = \text{NP}$. Discutir implicaciones.

### Ejercicio 12

**Teorema de Toda's**: $\text{PH} \subseteq \text{P}^{\#\text{SAT}}$. Demostrar.

### Ejercicio 13

**Teorema de Valiant**: Complejidad de multiplicación de matrices.

### Ejercicio 14

**Teorema de Razborov**: Lower bounds para circuitos monotone.

### Ejercicio 15

**Teorema de Impagliazzo**: five worlds of complexity. Discutir.

---

## Soluciones detalladas

### Solución 1

Sea $X$ el conjunto de ultrafiltros de $B$. Para cada $a \in B$, definir $\hat{a} = \{U \in X : a \in U\}$. El mapa $a \mapsto \hat{a}$ es un homomorfismo inyectivo. Por el teorema de representación de Stone, es surjective onto el campo de subconjuntos de $X$.

$$\square$$

### Solución 3

Reducir 3-SAT a SAT trivialmente. Reducir SAT a 3-SAT: cada cláusula puede expandirse mediante variables fresh. La reducción es polinomial, hence SAT es NP-completo.

$$\square$$

### Solución 5

El algoritmo de Quine-McCluskey:
1. Generar todos los implicantes primos
2. Usar tabla de implicantes para encontrar el conjunto mínimo

Complejidad: exponencial en el número de variables, pero práctico para $n \leq 10$.

$$\square$$

---

## Referencias y lecturas adicionales

1. Mendelson, E. (2010). *Introduction to Mathematical Logic*. CRC Press.
2. Enderton, H.B. (2001). *A Mathematical Introduction to Logic*. Academic Press.
3. Stone, M.H. (1936). "The theory of representations for Boolean algebras". *Transactions of the American Mathematical Society*.
4. Cook, S.A. (1971). "The complexity of theorem proving procedures". *Proceedings of the third annual ACM symposium on Theory of computing*.
5. Karp, R.M. (1972). *Reducibility among Combinatorial Problems*. Springer.
6. Garey, M.R.; Johnson, D.S. (1979). *Computers and Intractability*. W.H. Freeman.
7. Schöning, U. (1989). "A probabilistic algorithm for k-SAT and the 3-SAT problem". *Information Processing Letters*.
8. Aho, A.V.; Hopcroft, J.E.; Ullman, J.D. (1974). *The Design and Analysis of Computer Algorithms*. Addison-Wesley.
