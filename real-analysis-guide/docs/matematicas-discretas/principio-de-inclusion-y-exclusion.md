# Principio de Inclusion y Exclusion

## Objetivo del tema

Desarrollar el principio de inclusión-exclusión para contar elementos en uniones de conjuntos, con aplicaciones en problemas de conteo combinatorio.

## 1. Formula basica

### 1.1 Para dos conjuntos

$$|A \cup B| = |A| + |B| - |A \cap B|$$

### 1.2 Para tres conjuntos

$$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|$$

### 1.3 Para n conjuntos

$$|\bigcup_{i=1}^n A_i| = \sum_{i} |A_i| - \sum_{i<j} |A_i \cap A_j| + \sum_{i<j<k} |A_i \cap A_j \cap A_k| - \cdots + (-1)^{n+1} |A_1 \cap \cdots \cap A_n|$$

## 2. Funcion indicadora

### 2.1 Representacion

Para cualquier conjunto $A$, la función indicadora $\mathbf{1}_A$ es:

$$\mathbf{1}_A(x) = \begin{cases} 1 & \text{si } x \in A \\ 0 & \text{si } x \notin A \end{cases}$$

### 2.2 Formula alternativa

$$\mathbf{1}_{A \cup B} = \mathbf{1}_A + \mathbf{1}_B - \mathbf{1}_{A \cap B}$$

## 3. Aplicaciones clasicas

### 3.1 Problema del telefono

Contar números de teléfono sin dígitos repetidos.

### 3.2 Problema de los empleos

Contar personas que no tienen ninguno de los $n$ atributos dados.

### 3.3 Funcion de Euler

$$\varphi(n) = n \prod_{p|n} \left(1 - \frac{1}{p}\right)$$

Cuenta enteros menores a $n$ que son coprimos con $n$.

## 4. Forma general

### 4.1 Exclusion de propiedad

Sea $A_i$ el conjunto de elementos que tienen la propiedad $i$. El número de elementos sin ninguna propiedad es:

$$N_0 = N - \sum_i N(A_i) + \sum_{i<j} N(A_i \cap A_j) - \sum_{i<j<k} N(A_i \cap A_j \cap A_k) + \cdots$$

### 4.2 Numero de funciones sobreyectivas

$$n^m - \binom{n}{1}(n-1)^m + \binom{n}{2}(n-2)^m - \cdots + (-1)^{n-1} \binom{n}{n-1} 1^m$$

para funciones de un conjunto de $m$ elementos a uno de $n$ elementos.

### 4.3 Numero de permutaciones sin puntos fijos

$$n! \sum_{k=0}^n \frac{(-1)^k}{k!}$$

## 5. Desigualdad de Bonferroni

### 5.1 Cotas superiores

$$|\bigcup_{i=1}^n A_i| \leq \sum_{i=1}^n |A_i|$$

### 5.2 Cotas inferiores

$$|\bigcup_{i=1}^n A_i| \geq \sum_{i=1}^n |A_i| - \sum_{i<j} |\overline{A_i} \cap \overline{A_j}|$$

## 6. Ejercicios

### Ejercicio 1

En una encuesta, 30 personas toman cafe, 20 toman te, y 10 toman ambos. Cuantas personas fueron encuestadas?

### Ejercicio 2

Calcular $|A \cup B \cup C|$ si $|A| = 50$, $|B| = 40$, $|C| = 30$, $|A \cap B| = 15$, $|A \cap C| = 10$, $|B \cap C| = 5$, $|A \cap B \cap C| = 3$.

### Ejercicio 3

En una clase de 50 estudiantes, 30 estudian matematicas, 25 estudian fisica, y 15 estudian ambas. Cuantos estudian al menos una materia?

### Ejercicio 4

Calcular el numero de enteros entre 1 y 100 que son divisibles por 2, 3 o 5.

### Ejercicio 5

Cuantas permutaciones de 4 elementos tienen al menos un punto fijo?

### Ejercicio 6

En una oficina hay 100 empleados. 60 usan computadora, 50 usan telefono, y 30 usan ambos. Cuantos usan al menos uno?

### Ejercicio 7

Calcular $\varphi(12)$ usando inclusion-exclusion.

### Ejercicio 8

De 50 estudiantes, 30 aprobaron matematicas, 28 fisica, y 20 ambas. Cuantos aprobaron al menos una?

### Ejercicio 9

Cuantas funciones de un conjunto de 3 elementos a uno de 2 elementos son sobreyectivas?

### Ejercicio 10

En una fiesta, 40 personas prefieren rock, 30 prefieren pop, y 20 prefieren jazz. Si 10 prefieren rock y pop, 5 pop y jazz, y 3 rock y jazz, y ninguno likes los tres, cuantas personas hay en la fiesta?

### Ejercicio 11

Calcular el numero de enteros menores que 100 que no son divisibles por 2, 3 ni 5.

### Ejercicio 12

En un grupo de 10 amigos, todos excepto uno tienen al menos un amigo en comun. Cuantos pares de amigos hay?

### Ejercicio 13

Cuantas soluciones enteras tiene $x_1 + x_2 + x_3 = 10$ con $x_i \geq 0$?

### Ejercicio 14

En una ciudad hay 200 taxis. 120 tienen radio, 80 tienen aire acondicionado, y 50 tienen ambos. Cuantos tienen al menos uno?

### Ejercicio 15

Calcular el numero de Ways de seleccionar 3 numeros de 1-100 tales que ninguno es divisible por otro.

## Soluciones

### Solucion 1

$|A \cup B| = 30 + 20 - 10 = 40$

### Solucion 2

$50 + 40 + 30 - 15 - 10 - 5 + 3 = 93$

### Solucion 3

$30 + 25 - 15 = 40$

### Solucion 4

$|2| = 50$, $|3| = 33$, $|5| = 20$, $|2 \cap 3| = 16$, $|2 \cap 5| = 10$, $|3 \cap 5| = 6$, $|2 \cap 3 \cap 5| = 3$. Total $= 50 + 33 + 20 - 16 - 10 - 6 + 3 = 74$

### Solucion 5

Total permutaciones: $4! = 24$. Sin puntos fijos: $4! \cdot (1 - 1/1! + 1/2! - 1/3! + 1/4!) = 24 \cdot (1 - 1 + 1/2 - 1/6 + 1/24) = 24 \cdot 9/24 = 9$. Con al menos uno: $24 - 9 = 15$

### Solucion 6

$60 + 50 - 30 = 80$

### Solucion 7

$\varphi(12) = 12(1 - 1/2)(1 - 1/3) = 12 \cdot 1/2 \cdot 2/3 = 4$

### Solucion 8

$30 + 28 - 20 = 38$

### Solucion 9

$2^3 - \binom{2}{1} \cdot 1^3 + \binom{2}{2} \cdot 0^3 = 8 - 2 + 0 = 6$

### Solucion 10

$40 + 30 + 20 - 10 - 5 - 3 + 0 = 72$

### Solucion 11

$100 - \lfloor 100/2 \rfloor - \lfloor 100/3 \rfloor - \lfloor 100/5 \rfloor + \lfloor 100/6 \rfloor + \lfloor 100/10 \rfloor + \lfloor 100/15 \rfloor - \lfloor 100/30 \rfloor = 100 - 50 - 33 - 20 + 16 + 10 + 6 - 3 = 26$

### Solucion 12

Por principio de inclusion-exclusion: $45 - \binom{10}{2} + 1 = 45 - 45 + 1 = 1$ par.

### Solucion 13

$\binom{10+3-1}{3-1} = \binom{12}{2} = 66$

### Solucion 14

$120 + 80 - 50 = 150$

### Solucion 15

Usando inclusion-exclusion sobre las condiciones de divisibilidad, el numero es aproximadamente 85.

---

## Direcciones de Investigación y Problemas Abiertos

### 1. Inclusion-Exclusion en Probabilidad

- **Teorema de Bonferroni**: Cotas superiores e inferiores para uniones de eventos
- **Inclusiones estadísticas**: Aplicaciones en estimación de parámetros

### 2. Funciones Aritméticas

- **Función de Euler**: Propiedades multiplicativas y aplicaciones
- **Función de Möbius**: Relación con inclusión-exclusión

### 3. Problemas Abiertos

1. ¿Cómo optimizar inclusion-exclusion para grafos muy grandes?
2. ¿Existe una versión cuántica del principio de inclusión-exclusión?
3. ¿Cómo aplicar inclusión-exclusión en machine learning para feature selection?

---

## Referencias

1. Graham, R.L.; Knuth, D.E.; Patashnik, O. (1994). *Concrete Mathematics* (2nd ed.). Addison-Wesley.

2. Stanley, R.P. (2011). *Enumerative Combinatorics* (2nd ed.). Cambridge University Press.

3. Comtet, L. (1974). *Advanced Combinatorics*. Reidel.

4. Hennessy, M. (1988). "Algebraic theory of processes". *Foundations of Computing*. MIT Press.

5. Rosen, K.H. (2018). *Discrete Mathematics and Its Applications* (8th ed.). McGraw-Hill.

6. Anderson, I. (2002). *A First Course in Combinatorial Mathematics*. Oxford University Press.

7. Niven, I.; Zuckerman, H.S.; Montgomery, H.L. (1991). *An Introduction to the Theory of Numbers* (5th ed.). Wiley.

8. Mitrinović, D.S.; Pečarić, J.E.; Fink, A.M. (1993). *Classical and New Inequalities in Analysis*. Kluwer.
