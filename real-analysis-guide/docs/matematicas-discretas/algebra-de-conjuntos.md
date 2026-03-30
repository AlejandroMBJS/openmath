# Algebra de Conjuntos

## Objetivo del tema

Desarrollar las propiedades algebraicas de los conjuntos, incluyendo las leyes fundamentales y las operaciones avanzadas.

## 1. Leyes fundamentales del algebra de conjuntos

### 1.1 Leyes de idempotencia

Para todo conjunto $A$:
$$A \cup A = A$$
$$A \cap A = A$$

### 1.2 Leyes conmutativas

$$A \cup B = B \cup A$$
$$A \cap B = B \cap A$$

### 1.3 Leyes asociativas

$$(A \cup B) \cup C = A \cup (B \cup C)$$
$$(A \cap B) \cap C = A \cap (B \cap C)$$

### 1.4 Leyes distributivas

$$A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$$
$$A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$$

## 2. Leyes del conjunto universal y vacío

### 2.1 Identidad

$$A \cup \emptyset = A$$
$$A \cap U = A$$

### 2.2 Dominación

$$A \cup U = U$$
$$A \cap \emptyset = \emptyset$$

### 2.3 Complemento

$$A \cup A^c = U$$
$$A \cap A^c = \emptyset$$
$$(\emptyset)^c = U$$
$$U^c = \emptyset$$

### 2.4 Doble complemento

$$(A^c)^c = A$$

## 3. Leyes de De Morgan

### 3.1 Primera ley

$$\overline{A \cap B} = \overline{A} \cup \overline{B}$$

### 3.2 Segunda ley

$$\overline{A \cup B} = \overline{A} \cap \overline{B}$$

### 3.3 Generalización

$$\overline{\bigcap_{i \in I} A_i} = \bigcup_{i \in I} \overline{A_i}$$
$$\overline{\bigcup_{i \in I} A_i} = \bigcap_{i \in I} \overline{A_i}$$

## 4. Leyes de absorción

### 4.1 Absorción

$$A \cup (A \cap B) = A$$
$$A \cap (A \cup B) = A$$

### 4.2 Otras leyes útiles

$$A \cup (B \cap A) = A$$
$$A \cap (B \cup A) = A$$

## 5. Diferencia y diferencia simétrica

### 5.1 Diferencia

$$A - B = A \cap B^c$$

### 5.2 Diferencia simétrica

$$A \triangle B = (A - B) \cup (B - A) = (A \cup B) - (A \cap B)$$

### 5.3 Propiedades de la diferencia simétrica

$$A \triangle \emptyset = A$$
$$A \triangle A = \emptyset$$
$$A \triangle B = B \triangle A$$
$$(A \triangle B) \triangle C = A \triangle (B \triangle C)$$

## 6. Familias de conjuntos

### 6.1 Unión e intersección indexada

$$\bigcup_{i \in I} A_i = \{x : \exists i \in I \text{ con } x \in A_i\}$$
$$\bigcap_{i \in I} A_i = \{x : x \in A_i \text{ para todo } i \in I\}$$

### 6.2 Leyes distributivas generalizadas

$$A \cup \left(\bigcap_{i \in I} B_i\right) = \bigcap_{i \in I} (A \cup B_i)$$
$$A \cap \left(\bigcup_{i \in I} B_i\right) = \bigcup_{i \in I} (A \cap B_i)$$

## 7. Particiones

### 7.1 Definición

Una familia $\{A_i\}_{i \in I}$ es una partición de $A$ si:
1. $A_i \neq \emptyset$ para todo $i \in I$
2. $A_i \cap A_j = \emptyset$ para $i \neq j$
3. $\bigcup_{i \in I} A_i = A$

### 7.2 Partición generada por equivalencia

Si $\sim$ es una relación de equivalencia, las clases de equivalencia forman una partición del conjunto.

## 8. Ejercicios

### Ejercicio 1

Verificar la ley distributiva $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$ para $A = \{1,2\}$, $B = \{2,3\}$, $C = \{3,4\}$.

### Ejercicio 2

Aplicar la primera ley de De Morgan a $A = \{1,2,3\}$ y $B = \{3,4,5\}$ en el universo $U = \{1,2,3,4,5\}$.

### Ejercicio 3

Simplificar $(A \cap B) \cup (A \cap B^c)$.

### Ejercicio 4

Demostrar que $A - B = A \triangle (A \cap B)$.

### Ejercicio 5

Verificar que $\{1,2\} \triangle \{2,3\} = \{1,3\}$.

### Ejercicio 6

Calcular $\overline{A \cup B}$ usando De Morgan si $A = \{x : x < 3\}$ y $B = \{x : x > 5\}$ en $\mathbb{R}$.

### Ejercicio 7

Mostrar que $A \cup (A \cap B) = A$ (ley de absorción).

### Ejercicio 8

Encontrar la partición generada por la relación de congruencia módulo 2 en $\mathbb{Z}$.

### Ejercicio 9

Verificar que $(A^c)^c = A$ para $A = \{1,2,3\}$ con $U = \{1,2,3,4,5\}$.

### Ejercicio 10

Simplificar $(A \cup B) \cap (A \cup B^c)$.

### Ejercicio 11

Demostrar que $A \triangle B = (A \cup B) - (A \cap B)$.

### Ejercicio 12

Calcular $\bigcup_{n=1}^\infty [0, 1/n)$ y $\bigcap_{n=1}^\infty (0, 1/n]$.

### Ejercicio 13

Verificar la ley distributiva generalizada $A \cap \bigcup_{i=1}^3 B_i = \bigcup_{i=1}^3 (A \cap B_i)$.

### Ejercicio 14

Mostrar que $A - \emptyset = A$ y $A - U = \emptyset$.

### Ejercicio 15

Si $A \subseteq B$, demostrar que $A \cup B = B$ y $A \cap B = A$.

## Soluciones

### Solución 1

$A \cup (B \cap C) = \{1,2\} \cup \{3\} = \{1,2,3\}$

$(A \cup B) \cap (A \cup C) = \{1,2,3\} \cap \{1,2,3,4\} = \{1,2,3\}$. Verificado.

### Solución 2

$A \cap B = \{3\}$, $\overline{A \cap B} = \{1,2,4,5\}$

$\overline{A} = \{4,5\}$, $\overline{B} = \{1,2\}$, $\overline{A} \cup \overline{B} = \{1,2,4,5\}$. Verificado.

### Solución 3

$(A \cap B) \cup (A \cap B^c) = A \cap (B \cup B^c) = A \cap U = A$

### Solución 4

$A - B = A \cap B^c$

$A \triangle (A \cap B) = (A - (A \cap B)) \cup ((A \cap B) - A) = (A \cap B^c) \cup \emptyset = A \cap B^c$. Verificado.

### Solución 5

$\{1,2\} \triangle \{2,3\} = (\{1,2} - {2,3}) \cup ({2,3} - {1,2}) = \{1\} \cup \{3\} = \{1,3\}$

### Solución 6

$\overline{A \cup B} = \overline{\{x : x < 3 \text{ o } x > 5\}} = \{x : 3 \leq x \leq 5\}$

### Solución 7

$A \cup (A \cap B) = (A \cup A) \cap (A \cup B) = A \cap (A \cup B) = A$

### Solución 8

Clases: $[0] = \{\ldots, -4, -2, 0, 2, 4, \ldots\}$ y $[1] = \{\ldots, -3, -1, 1, 3, 5, \ldots\}$

### Solución 9

$A^c = \{4,5\}$, $(A^c)^c = \{1,2,3\} = A$. Verificado.

### Solución 10

$(A \cup B) \cap (A \cup B^c) = A \cup (B \cap B^c) = A \cup \emptyset = A$

### Solución 11

$(A \cup B) - (A \cap B) = (A \cup B) \cap (A \cap B)^c = (A \cup B) \cap (A^c \cup B^c) = A \triangle B$

### Solución 12

$\bigcup_{n=1}^\infty [0, 1/n) = [0, 1)$

$\bigcap_{n=1}^\infty (0, 1/n] = \{0\}$ (solo si incluimos 0) o $\emptyset$ (si no)

### Solución 13

Se verifica directamente con la definición de unión e intersección.

### Solución 14

$A - \emptyset = A \cap \emptyset^c = A \cap U = A$

$A - U = A \cap U^c = A \cap \emptyset = \emptyset$

### Solución 15

Si $A \subseteq B$, entonces $A \cup B = B$ (porque todo elemento de $A$ está en $B$).

$A \cap B = A$ (porque todo elemento de $A$ también está en $B$).

## Direcciones de investigacion y problemas abiertos

1. **Algebra de Boole:** El estudio de algebras de Boole completas y la representacion de algebras booleanas mediante anillos booleanos es un area clasica con aplicaciones en logica y computacion.

2. **Teoria de reticulos:** Los reticulos distributivos y las algebras de Heyting tienen conexiones profundas con la logica intuicionista.

3. **Algebra de conjuntos y topologia:** Las algebras sigma y los cuerpos de Borel son fundamentales en teoria de la medida.

4. **Conjuntos idempotentes:** El estudio de conjuntos que satisfacen $A = A \cup A$ o propiedades similares conduce a estructuras algebraicas interesantes.

## Referencias

1. Halmos, P. R. (1974). *Naive Set Theory*. Springer-Verlag.
2. Birkhoff, G. (1967). *Lattice Theory*. American Mathematical Society.
3. Royden, H. L. & Fitzpatrick, P. M. (2010). *Real Analysis*. Pearson.
4. Jech, T. (2006). *Set Theory*. Springer.
5. Davey, B. A. & Priestley, H. A. (2002). *Introduction to Lattices and Order*. Cambridge University Press.
