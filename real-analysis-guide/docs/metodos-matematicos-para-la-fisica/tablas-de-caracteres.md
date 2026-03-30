---
title: Construcción de Tablas de Caracteres
description: Procedimiento sistemático para construir la tabla de caracteres de un grupo finito usando las relaciones de ortogonalidad de Schur.
---

# Construcción de Tablas de Caracteres

La tabla de caracteres es la herramienta fundamental para aplicar la teoría de grupos a problemas físicos (vibraciones moleculares, niveles de energía, etc.). 

## Conceptos Fundamentales

1. **Clase de conjugación:** Los elementos de un grupo se agrupan en clases. Elementos de la misma clase tienen el mismo carácter en cualquier representación.
2. **Representación Irreducible (Irrep):** Una representación que no puede descomponerse en bloques más pequeños.
3. **Carácter ($\chi$):** La traza de la matriz que representa a un elemento del grupo.

## Reglas de Construcción (Teoremas de Ortogonalidad)

Para construir una tabla de caracteres de un grupo $G$, seguimos estas reglas:

1. **Número de Irreps = Número de Clases.** La tabla es siempre cuadrada.
2. **Suma de dimensiones:** $\sum_i d_i^2 = |G|$, donde $d_i = \chi_i(E)$ es la dimensión de la $i$-ésima Irrep.
3. **Ortogonalidad de filas:** $\sum_{g \in G} \chi_i(g) \chi_j^*(g) = |G| \delta_{ij}$.
4. **Ortogonalidad de columnas:** $\sum_i \chi_i(C_k) \chi_i^*(C_m) = \frac{|G|}{N_k} \delta_{km}$, donde $N_k$ es el número de elementos en la clase $C_k$.

---

## Procedimiento paso a paso (Ejemplo: Grupo $C_{3v}$)

El grupo $C_{3v}$ (como la molécula de amoníaco $NH_3$) tiene 6 elementos en 3 clases: $\{E\}$, $\{2C_3\}$, $\{3\sigma_v\}$.

### Paso 1: Dimensiones
Como hay 3 clases, hay 3 Irreps.
$d_1^2 + d_2^2 + d_3^2 = 6$. La única solución entera es $1^2 + 1^2 + 2^2 = 6$. 
Dimensiones: $A_1=1, A_2=1, E=2$.

### Paso 2: La Irrep totalmente simétrica ($A_1$)
La primera fila siempre consiste en unos: $\chi_{A_1}(g) = 1$ para todo $g$.

### Paso 3: Usar ortogonalidad para $A_2$
Para $A_2$ (dim 1), los caracteres deben ser $\pm 1$.
$\sum n_k \chi_{A_1}(C_k) \chi_{A_2}(C_k) = (1)(1)(1) + (2)(1)(\chi_2) + (3)(1)(\chi_3) = 0$.
La solución es $\chi_2 = 1, \chi_3 = -1$.

### Paso 4: Completar la Irrep bidimensional ($E$)
Usamos ortogonalidad de columnas con la clase $\{E\}$:
$\sum d_i \chi_i(C_k) = (1)(1) + (1)(1) + (2)(\chi_k) = 0$.
Para $C_3$: $1 + 1 + 2\chi_2 = 0 \implies \chi_2 = -1$.
Para $\sigma_v$: $1 - 1 + 2\chi_3 = 0 \implies \chi_3 = 0$.

### Tabla Final $C_{3v}$
| $C_{3v}$ | $E$ | $2C_3$ | $3\sigma_v$ |
| :--- | :---: | :---: | :---: |
| **$A_1$** | 1 | 1 | 1 |
| **$A_2$** | 1 | 1 | -1 |
| **$E$** | 2 | -1 | 0 |

---

## Aplicación en Física: Reglas de Selección
Si queremos saber si una transición entre estados $\psi_i$ y $\psi_f$ vía un operador $V$ es posible, calculamos el producto de caracteres:
$$\chi_{total} = \chi_f^* \otimes \chi_V \otimes \chi_i$$
La transición es permitida si la representación total contiene a la Irrep totalmente simétrica ($A_1$). Esto reduce integrales complejas a simples multiplicaciones de la tabla.
