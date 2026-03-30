# Producto de Conjuntos y Relaciones

## Objetivo del tema

Estudiar el producto cartesiano de conjuntos y las relaciones entre conjuntos, incluyendo sus propiedades y representaciones.

## 1. Producto cartesiano

### 1.1 Definición

El producto cartesiano de $A$ y $B$ es:
$$A \times B = \{(a, b) : a \in A \text{ y } b \in B\}$$

### 1.2 Propiedades básicas

- $A \times \emptyset = \emptyset$
- $\emptyset \times B = \emptyset$
- $A \times (B \cup C) = (A \times B) \cup (A \times C)$
- $A \times (B \cap C) = (A \times B) \cap (A \times C)$

### 1.3 Producto generalizado

$$A_1 \times A_2 \times \cdots \times A_n = \{(a_1, a_2, \ldots, a_n) : a_i \in A_i\}$$

## 2. Relaciones binarias

### 2.1 Definición

Una relación binaria $R$ de $A$ en $B$ es un subconjunto de $A \times B$:
$$R \subseteq A \times B$$

Si $(a, b) \in R$, escribimos $aRb$.

### 2.2 Relación en un conjunto

Una relación en $A$ es un subconjunto de $A \times A$.

### 2.3 Dominio y rango

$$\text{Dom}(R) = \{a \in A : \exists b \in B \text{ con } aRb\}$$
$$\text{Ran}(R) = \{b \in B : \exists a \in A \text{ con } aRb\}$$

## 3. Propiedades de las relaciones

### 3.1 Reflexividad

$R$ es reflexiva si $\forall a \in A, aRa$.

### 3.2 Simetría

$R$ es simétrica si $aRb \Rightarrow bRa$.

### 3.3 Antisimetría

$R$ es antisimétrica si $aRb$ y $bRa \Rightarrow a = b$.

### 3.4 Transitividad

$R$ es transitiva si $aRb$ y $bRc \Rightarrow aRc$.

## 4. Relaciones de equivalencia

### 4.1 Definición

$R$ es relación de equivalencia si es reflexiva, simétrica y transitiva.

### 4.2 Clases de equivalencia

Para $a \in A$, la clase de equivalencia de $a$ es:
$$[a] = \{x \in A : xRa\}$$

### 4.3 Conjunto cociente

$$A/\sim = \{[a] : a \in A\}$$

## 5. Relaciones de orden

### 5.1 Preorden

Es reflexiva y transitiva.

### 5.2 Orden parcial

Es un preorden que además es antisimétrico. Denote $(A, \leq)$.

### 5.3 Orden total

$\forall a, b \in A$, o $a \leq b$ o $b \leq a$.

## 6. Representación de relaciones

### 6.1 Matriz de adyacencia

Para $A = \{a_1, \ldots, a_n\}$ y $B = \{b_1, \ldots, b_m\}$, la matriz $M_R$ tiene:
$$M_R[i,j] = 1 \text{ si } a_i R b_j, \text{ sino } 0$$

### 6.2 Grafo dirigido

Los elementos son vértices; hay arco de $a$ a $b$ si $aRb$.

## 7. Composición de relaciones

### 7.1 Definición

$(R \circ S) = \{(a, c) : \exists b \text{ con } aRb \text{ y } bSc\}$

### 7.2 Propiedades

$$(R \circ S) \circ T = R \circ (S \circ T)$$
$$R \circ I_A = R = I_B \circ R$$

donde $I_A$ es la relación identidad en $A$.

## 8. Ejercicios

### Ejercicio 1

Si $A = \{1, 2\}$ y $B = \{x, y\}$, encontrar $A \times B$ y $B \times A$.

### Ejercicio 2

Sea $R = \{(1,1), (1,2), (2,3), (3,3)\}$ en $A = \{1,2,3\}$. Determinar si es reflexiva, simétrica y transitiva.

### Ejercicio 3

Encontrar las clases de equivalencia de $\mathbb{Z}$ bajo la relación de congruencia módulo 3.

### Ejercicio 4

Sea $R = \{(x,y) : x | y\}$ en $\mathbb{N}$. Analizar sus propiedades.

### Ejercicio 5

Construir la matriz de adyacencia de $R = \{(1,2), (2,1), (2,3)\}$ en $\{1,2,3\}$.

### Ejercicio 6

Si $R$ y $S$ son relaciones de equivalencia, ¿es $R \cap S$ también de equivalencia?

### Ejercicio 7

Sea $R = \{(1,2), (2,3), (1,3)\}$. Calcular $R \circ R$.

### Ejercicio 8

Verificar que la relación "menor o igual" en $\mathbb{R}$ es un orden parcial.

### Ejercicio 9

Encontrar el dominio y rango de $R = \{(a, b) : a < b\}$ en $A = \{1, 2, 3\}$.

### Ejercicio 10

Demostrar que la relación de isomorfismo en grafos es de equivalencia.

### Ejercicio 11

Sea $A = \{1, 2, 3\}$ y $R = \{(1,1), (2,2), (3,3), (1,2), (2,1)\}$. Es de equivalencia.

### Ejercicio 12

Calcular $(A \times B) \cap (A \times C)$ para $A = \{1\}$, $B = \{x, y\}$, $C = \{y, z\}$.

### Ejercicio 13

Encontrar todas las relaciones de equivalencia en un conjunto de 2 elementos.

### Ejercicio 14

Sea $R$ definida por $aRb \Leftrightarrow a$ y $b$ tienen el mismo resto al dividir por 2. Es equivalencia.

### Ejercicio 15

Verificar que $(R \circ S)^{-1} = S^{-1} \circ R^{-1}$.

## Soluciones

### Solución 1

$A \times B = \{(1,x), (1,y), (2,x), (2,y)\}$

$B \times A = \{(x,1), (x,2), (y,1), (y,2)\}$

### Solución 2

- Reflexiva: NO (falta (2,2))
- Simétrica: NO (1R2 pero no 2R1)
- Transitiva: SÍ

### Solución 3

$[0] = \{\ldots, -6, -3, 0, 3, 6, \ldots\}$
$[1] = \{\ldots, -5, -2, 1, 4, 7, \ldots\}$
$[2] = \{\ldots, -4, -1, 2, 5, 8, \ldots\}$

### Sololución 4

- Reflexiva: SÍ ($a|a$)
- Simétrica: NO (2|4 pero no 4|2)
- Transitiva: SÍ

### Solución 5

$M_R = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$

### Solución 6

SÍ. $R \cap S$ es reflexiva (ambos lo son), simétrica (ambos lo son), transitiva (ambos lo son).

### Solución 7

$R \circ R = \{(1,3)\}$ (1R2 y 2R3)

### Solución 8

- Reflexiva: $x \leq x$
- Antisimétrica: $x \leq y$ y $y \leq x$ implica $x = y$
- Transitiva: $x \leq y$ y $y \leq z$ implica $x \leq z$

### Solución 9

$\text{Dom}(R) = \{1, 2\}$, $\text{Ran}(R) = \{2, 3\}$

### Solución 10

- Reflexiva: todo grafo es isomorfo a sí mismo
- Simétrica: si $G_1 \cong G_2$, entonces $G_2 \cong G_1$
- Transitiva: composición de isomorfismos

### Solución 11

Las clases son $\{1,2\}$ y $\{3\}$.

### Solución 12

$A \times B = \{(1,x), (1,y)\}$, $A \times C = \{(1,y), (1,z)\}$
Intersección: $\{(1,y)\}$

### Solución 13

En $\{a, b\}$: $\{a,b\}$ (trivial) y $\{a\}, \{b\}$ (discreta, no es equivalencia). Las equivalencias son: identidad y total.

### Solución 14

Las clases son números pares e impares.

### Solución 15

$(a,c) \in (R \circ S)^{-1} \Leftrightarrow (c,a) \in R \circ S \Leftrightarrow \exists b : cRb$ y $bSa \Leftrightarrow \exists b : aS^{-1}b$ y $bR^{-1}c \Leftrightarrow (a,c) \in S^{-1} \circ R^{-1}$.

## Direcciones de investigacion y problemas abiertos

1. **Teoria de relaciones fuzzy:** La extension de relaciones clasicas a relaciones con grados de pertenencia tiene aplicaciones en logica fuzzy y sistemas de control.

2. **Relaciones de orden parcial generalizado:** El estudio de ordenes parciales en categorias y estructuras algebraicas abstractas sigue siendo area activa.

3. **Composicion de relaciones y algebras relacionales:** Las algebras de relaciones tienen aplicaciones en bases de datos y teoria de grafos.

4. **Teoria de modelos y relaciones:** Las relaciones de equivalencia y sus conexiones con constructos categoricos son fundamentales en algebra universal.

## Referencias

1. Halmos, P. R. (1974). *Naive Set Theory*. Springer-Verlag.
2. Davey, B. A. & Priestley, H. A. (2002). *Introduction to Lattices and Order*. Cambridge University Press.
3. Gratzer, G. (2011). *Lattice Theory: Foundation*. Springer.
4. Schmidt, G. (2011). *Relational Mathematics*. Cambridge University Press.
5. Ganter, B. & Wille, R. (1999). *Formal Concept Analysis*. Springer.
