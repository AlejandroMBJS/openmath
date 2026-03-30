---
title: Operaciones con conjuntos
description: Union, interseccion, diferencia, complemento y leyes de De Morgan.
---

# Operaciones con conjuntos

## Motivacion e intuicion

Las operaciones con conjuntos nos permiten construir nuevos conjuntos a partir de otros existentes. Estas operaciones son análogas a las operaciones logicas Y, O, NO y son fundamentales en matematicas discretas.

## Operaciones fundamentales

### Union

$A \cup B = \{x : x \in A \text{ o } x \in B\}$

### Interseccion

$A \cap B = \{x : x \in A \text{ y } x \in B\}$

### Diferencia

$A - B = \{x : x \in A \text{ y } x \notin B\}$

### Complemento

$A^c = U - A = \{x \in U : x \notin A\}$

## Representacion grafica

### Diagramas de Venn

Los diagramas de Venn representan visualmente las operaciones entre conjuntos usando circulos.

## Propiedades de las operaciones

### Conmutatividad

$$A \cup B = B \cup A$$
$$A \cap B = B \cap A$$

### Asociatividad

$$A \cup (B \cup C) = (A \cup B) \cup C$$
$$A \cap (B \cap C) = (A \cap B) \cap C$$

### Distributividad

$$A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$$
$$A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$$

### Identidades

$$A \cup \emptyset = A$$
$$A \cap U = A$$
$$A \cup U = U$$
$$A \cap \emptyset = \emptyset$$

### Leyes de De Morgan

$$(A \cup B)^c = A^c \cap B^c$$
$$(A \cap B)^c = A^c \cup B^c$$

## Diferencia simetrica

$$A \Delta B = (A - B) \cup (B - A)$$

Tambien: $A \Delta B = (A \cup B) - (A \cap B)$

## Ejercicios

### Ejercicio 1

Si $A = \{1, 2, 3\}$ y $B = \{3, 4, 5\}$, calcule $A \cup B$.

### Ejercicio 2

Calcule $A \cap B$ con los mismos conjuntos.

### Ejercicio 3

Calcule $A - B$.

### Ejercicio 4

Exprese $(A \cup B)^c$ usando De Morgan.

### Ejercicio 5

Verifique $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$.

### Ejercicio 6

Calcule la diferencia simetrica de $A = \{1, 2\}$ y $B = \{2, 3\}$.

### Ejercicio 7

Exprese el complemento de $A$ en terminos de la diferencia.

### Ejercicio 8

Calcule $(A \cap B)^c$ para $A = \{1, 2\}$, $B = \{2, 3\}$.

### Ejercicio 9

Verifique que $A \cup A^c = U$.

### Ejercicio 10

Calcule $A \cap A^c$.

## Soluciones

### Solucion 1

$A \cup B = \{1, 2, 3, 4, 5\}$

### Solucion 2

$A \cap B = \{3\}$

### Solucion 3

$A - B = \{1, 2\}$

### Solucion 4

$(A \cup B)^c = A^c \cap B^c$

### Solucion 5

Se verifica directamente o con tabla de pertenencia.

### Solucion 6

$A \Delta B = \{1, 3\}$

### Solucion 7

$A^c = U - A$

### Solucion 8

$(A \cap B)^c = \{1, 3\}$ en universo $\{1, 2, 3\}$

### Solucion 9

Todo elemento o esta en $A$ o en $A^c$, luego $A \cup A^c = U$.

### Solucion 10

$A \cap A^c = \emptyset$

## Teoremas avanzados y demostraciones

### Teorema 1: Leyes de De Morgan generalizadas

Para cualquier familia de conjuntos $\{A_i\}_{i \in I}$:
$$\left(\bigcup_{i \in I} A_i\right)^c = \bigcap_{i \in I} A_i^c$$
$$\left(\bigcap_{i \in I} A_i\right)^c = \bigcup_{i \in I} A_i^c$$

**Demostracion.** 
($\Rightarrow$) Si $x \in (\bigcup_i A_i)^c$, entonces $x \notin \bigcup_i A_i$, luego $x \notin A_i$ para todo $i$, hence $x \in A_i^c$ para todo $i$, then $x \in \bigcap_i A_i^c$.

($\Leftarrow$) Si $x \in \bigcap_i A_i^c$, entonces $x \in A_i^c$ para todo $i$, luego $x \notin A_i$ para todo $i$, hence $x \notin \bigcup_i A_i$, thus $x \in (\bigcup_i A_i)^c$. $\blacksquare$

### Teorema 2: Distributividad generalizada

$$A \cap \bigcup_{i \in I} B_i = \bigcup_{i \in I} (A \cap B_i)$$
$$A \cup \bigcap_{i \in I} B_i = \bigcap_{i \in I} (A \cup B_i)$$

**Demostracion.** Se demuestra usando doble contencion y las definiciones de union e interseccion. $\blacksquare$

### Teorema 3: Caracterizacion de diferencia simetrica

$A \Delta B = (A \cup B) - (A \cap B) = (A - B) \cup (B - A)$

**Demostracion.** Por definicion, $A \Delta B$ contiene los elementos que pertenecen a exactamente uno de los conjuntos. $(A \cup B) - (A \cap B)$ excluye los que estan en ambos, quedando exactamente los de exactamente uno. $\blacksquare$

### Teorema 4: Propiedades de la diferencia

Para cualesquiera $A, B, C$:
- $A - B = A \cap B^c$
- $(A - B) - C = A - (B \cup C)$
- $A - (B \cap C) = (A - B) \cup (A - C)$

**Demostracion.** Se verifica directamente mediante las definiciones de las operaciones. $\blacksquare$

### Teorema 5: Principio de inclusion-exclusion para dos conjuntos

$$|A \cup B| = |A| + |B| - |A \cap B|$$

**Demostracion.** Al sumar $|A| + |B|$ se cuenta $|A \cap B|$ dos veces, luego se resta una vez para obtener el conteo correcto. $\blacksquare$

## Direcciones de investigacion y problemas abiertos

1. **Algebra de conjuntos infinita:** El estudio de algebras sigma y algebras de Boole completas presenta problemas de consistencia y estructura.

2. **Teoria de medidas:** La construccion de medidas sobre algebras de conjuntos y la extendibilidad a medidas completas es un area activa.

3. **Conjuntos difusos y operadores:** Los operadores de union, interseccion y complemento en conjuntos difusos tienen propiedades diferentes a los clasicos.

4. **Topologia algebraica:** Las operaciones de conjuntos en espacios topologicos tienen conexiones profundas con la teoria de homologia.

## Ejercicios adicionales

### Ejercicio 11

Demuestre que $A \Delta B = (A \cup B) - (A \cap B)$ mediante contencion mutua.

### Ejercicio 12

Sea $U = \{1, 2, 3, 4, 5\}$, $A = \{1, 2\}$, $B = \{2, 3, 4\}$. Calcule $(A \cup B)^c$ y verifique con De Morgan.

### Ejercicio 13

Demuestre que $A - (B \cup C) = (A - B) \cap (A - C)$.

### Ejercicio 14

Calcule $\bigcup_{n=1}^{\infty} [0, 1/n)$ y $\bigcap_{n=1}^{\infty} (0, 1/n]$.

### Ejercicio 15

Si $A \Delta B = \emptyset$, determine la relacion entre $A$ y $B$.

## Soluciones adicionales

### Solucion 11

($\subseteq$) Si $x \in A \Delta B$, entonces $x$ esta en exactamente uno de $A$ o $B$. Si esta en $A$ pero no en $B$, esta en $A \cup B$ pero no en $A \cap B$, hence en $(A \cup B) - (A \cap B)$. similarly for $x \in B - A$.

($\supseteq$) Si $x \in (A \cup B) - (A \cap B)$, entonces $x \in A \cup B$ pero $x \notin A \cap B$, hence $x$ esta en exactamente uno de $A$ o $B$, luego $x \in A \Delta B$.

### Solucion 12

$A \cup B = \{1, 2, 3, 4\}$, luego $(A \cup B)^c = \{5\}$.
$A^c = \{3, 4, 5\}$, $B^c = \{1, 5\}$, luego $A^c \cap B^c = \{5\}$. Verificado.

### Solucion 13

$x \in A - (B \cup C) \iff x \in A \land x \notin B \cup C \iff x \in A \land x \notin B \land x \notin C \iff (x \in A \land x \notin B) \land (x \in A \land x \notin C) \iff x \in (A - B) \cap (A - C)$.

### Solucion 14

$\bigcup_{n=1}^{\infty} [0, 1/n) = [0, 1)$ (el supremo es 1, nunca alcanzado).
$\bigcap_{n=1}^{\infty} (0, 1/n] = \emptyset$ (el infimo es 0, nunca incluido).

### Solucion 15

$A \Delta B = \emptyset$ implica que no hay elementos en exactamente uno de los conjuntos, hence $A = B$.

## Referencias

1. Halmos, P. R. (1974). *Naive Set Theory*. Springer-Verlag.
2. Royden, H. L. & Fitzpatrick, P. M. (2010). *Real Analysis*. Pearson.
3. Bartle, R. G. (1995). *The Elements of Integration and Lebesgue Measure*. Wiley.
4. Jech, T. (2006). *Set Theory*. Springer.
5. Moschovakis, Y. N. (2006). *Notes on Set Theory*. Springer.
