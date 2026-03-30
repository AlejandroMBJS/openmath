# Algoritmo de División: Teoría de Números Algorítmica

## Objetivo del tema

Desarrollar una teoría profunda del algoritmo de división entera, estableciendo conexiones con la teoría de números, el álgebra computacional y los fundamentos de la criptografía moderna.

---

## 1. Teorema de la División

### 1.1 Teorema Fundamental

**Teorema**: Para todo $a \in \mathbb{Z}$ y $b \in \mathbb{Z}^+$, existen únicos $q, r \in \mathbb{Z}$ tales que:
$$a = bq + r, \quad 0 \leq r < b$$

**Demostración de unicidad**: Si $a = bq_1 + r_1 = bq_2 + r_2$ con $0 \leq r_1, r_2 < b$, entonces $b(q_1 - q_2) = r_2 - r_1$. El lado derecho está en $(-b, b)$, hence debe ser 0, then $q_1 = q_2$ y $r_1 = r_2$.

$$\square$$

### 1.2 Algoritmo de División

**Algoritmo de Euclides**: El algoritmo más antiguo de la historia (300 a.C.), con aplicaciones fundamentales.

### 1.3 Extensiones

**Teorema de extends**: El algoritmo de división puede extenderse para trabajar en cualquier dominio euclídeo.

---

## 2. Algoritmo de Euclides

### 2.1 Teorema Fundamental

**Teorema**: $\text{mcd}(a, b) = \text{mcd}(b, a \bmod b)$.

**Demostración**: Sea $d = \text{mcd}(a, b)$ y $a = bq + r$. Cualquier divisor común de $a$ y $b$ también divide $r = a - bq$. Recíprocamente, cualquier divisor de $b$ y $r$ divide $a = bq + r$. Hence $\text{mcd}(a, b) = \text{mcd}(b, r)$.

$$\square$$

### 2.2 Complejidad

**Teorema de Lame** (1844): El número de pasos en el algoritmo de Euclides es $O(\log \min(a, b))$.

### 2.3 Algoritmo Extendido

**Teorema**: Existieren integers $x, y$ tales que $\text{mcd}(a, b) = ax + by$.

**Corolario**: El inverso modular existe iff $\text{mcd}(a, n) = 1$.

---

## 3. Aritmética Modular

### 3.1 Congruencias

**Teorema de invertibilidad**: $a$ tiene inverso módulo $n$ iff $\text{mcd}(a, n) = 1$.

**Corolario**: El grupo de unidades $\mathbb{Z}_n^*$ tiene orden $\phi(n)$ (función de Euler).

### 3.2 Teorema de Fermat-Euler

**Teorema**: Si $\text{mcd}(a, n) = 1$, entonces $a^{\phi(n)} \equiv 1 \pmod{n}$.

### 3.3 Teorema Chino del Resto

**Teorema**: Si $n_1, \ldots, n_k$ son coprime dos a dos, el sistema:
$$x \equiv a_i \pmod{n_i}$$
tiene solución única módulo $N = \prod n_i$.

---

## 4. Tests de Primalidad

### 4.1 Teorema de Wilson

**Teorema**: $p$ es primo iff $(p-1)! \equiv -1 \pmod{p}$.

### 4.2 Test de Fermat

**Teorema**: Si $a^{n-1} \not\equiv 1 \pmod{n}$, entonces $n$ es compuesto.

### 4.3 Test de Miller-Rabin

**Teorema**: El test probabilístico tiene probabilidad de error $< 1/4$ por iteración.

---

## 5. Factorización

### 5.1 Teorema Fundamental de la Aritmética

**Teorema**: Todo entero $n > 1$ puede factorizarse de manera única como $n = p_1^{e_1} \cdots p_k^{e_k}$.

### 5.2 Algoritmo rho de Pollard

**Teorema**: Complejidad esperada $O(n^{1/4})$.

### 5.3 Criptografía RSA

**Teorema**: La seguridad de RSA depende de la dificultad de factorizar productos de primos grandes.

---

## 6. Problemas Abiertos

- **Conjetura de Goldbach**: Todo par > 2 es suma de dos primos (no resuelta)
- **Caracteres de Dirichlet**: Distribución de primos en progresiones aritméticas

---

## 7. Ejercicios

### Ejercicio 1
Demostrar que $\text{mcd}(a, b) = \text{mcd}(b, a \bmod b)$.

### Ejercicio 2
Encontrar $x, y$ tales que $\text{mcd}(123, 45) = 123x + 45y$.

### Ejercicio 3
Calcular $3^{-1} \pmod{100}$ usando el algoritmo extendido.

### Ejercicio 4
Demostrar que $\phi(n) = n \prod_{p|n} (1 - 1/p)$.

### Ejercicio 5
Probar que $a^{\phi(n)} \equiv 1 \pmod{n}$ si $\text{mcd}(a, n) = 1$.

### Ejercicio 6
Demostrar el teorema de Lamé: el número de iteraciones del algoritmo euclidiano es $O(\log n)$.

### Ejercicio 7
Calcular el inverso modular de $17 \pmod{43}$ usando el algoritmo extendido de Euclides.

### Ejercicio 8
Probar que el algoritmo de Euclides extendido encuentra la solución a la ecuación diofántica $ax + by = \text{mcd}(a,b)$.

### Ejercicio 9
Demostrar que $\phi(p^k) = p^{k-1}(p-1)$ para $p$ primo.

### Ejercicio 10
Calcular el número de generadores de $\mathbb{Z}_n^*$.

### Ejercicio 11
Probar que si $d = \text{mcd}(a,n)$, entonces $a$ tiene inverso módulo $n$ iff $d=1$.

### Ejercicio 12
Analizar la complejidad del algoritmo euclidiano en el peor caso (números consecutive de Fibonacci).

### Ejercicio 13
Demostrar que todo ideal de $\mathbb{Z}$ es principal.

### Ejercicio 14
Construir el криптосистема RSA y analizar su seguridad.

### Ejercicio 15
Probar el teorema chino del resto: si $m_1, m_2$ son coprimos, existe solución a $x \equiv a \pmod{m_1}$, $x \equiv b \pmod{m_2}$.

---

## Direcciones de Investigación y Problemas Abiertos

### 1. Algoritmos de Factorización

- **Factorización de enteros**: Algoritmos pollard rho, ECM, GNFS
- **Complejidad**: Lower bounds para factorización

### 2. Teoría Algebraica de Números

- **Extensiones de campos**: Importancia en criptografía
- **Factorización en anillos**: Dominios euclídeos generalizados

### 3. Problemas Abiertos

1. ¿Existe un algoritmo polinomial para factorizar enteros?
2. ¿Cómo optimizar el algoritmo euclidiano paraHardware especial?
3. ¿Cuál es la complejidad de decidir primalidad?

---

## Referencias

1. Hardy, G.H.; Wright, E.M. (1979). *An Introduction to the Theory of Numbers*. Oxford.

2. Shanks, D. (1962). *Solved and Unsolved Problems in Number Theory*. Spartan Books.

3. Koblitz, N. (1994). *A Course in Number Theory and Cryptography*. Springer.

4. Rosen, K.H. (2018). *Discrete Mathematics and Its Applications*. McGraw-Hill.

5. Cormen, T.H.; Leiserson, C.E.; Rivest, R.L.; Stein, C. (2009). *Introduction to Algorithms*. MIT Press.

6. Bach, E.; Shallit, J. (1996). *Algorithmic Number Theory*. MIT Press.

7. Crandall, R.; Pomerance, C. (2005). *Prime Numbers: A Computational Perspective*. Springer.

8. Silverman, J.H. (2006). *A Friendly Introduction to Number Theory*. Pearson.
