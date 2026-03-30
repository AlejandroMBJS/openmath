# Sustitucion y Sumas Dobles

## Objetivo del tema

Desarrollar la técnica de sustitución en expresiones tensoriales y el manejo de sumas dobles con el convenio de Einstein.

## 1. El problema de la doble indices

Cuando se trabaja con expresiones tensoriales, es común encontrar sumas sobre dos índices:
$$A_{ij} = \sum_{i=1}^n \sum_{j=1}^n T_{ij} x_i y_j$$

El convenio de Einstein simplifica esta notación, pero requiere entender cuándo usar dos índices repetidos.

## 2. Reglas de substitution

### 2.1 Substitution básica

En notación tensorial, una expresión como $A_i = T_{ij} x_j$ representa:
$$A_i = \sum_{j=1}^n T_{ij} x_j$$

Para cambiar la base de representación, se usa:
$$A'_k = \frac{\partial x_i}{\partial x'_k} A_i$$

### 2.2 Substitution en el tensor metrico

El tensor métrico permite "subir" y "bajar" índices:
$$g_{ij} A^i = A_j, \quad g^{ij} A_i = A^j$$

Esta operación transforma componentes contravariantes en covariantes y viceversa.

## 3. Sumas Dobles con el Convenio de Einstein

### 3.1 Contracción multiple

Una expresión como $T_{ij}^{kl}$ puede contraerse de múltiples formas:

**Contracción en un índice:**
$$T_{ij}^{jk} = A_i^k$$

**Contracción en dos índices:**
$$T_{ij}^{ij} = \text{escalar}$$

### 3.2 Traza de un tensor

La traza de un tensor de segundo orden se define como:
$$\text{Tr}(T) = T_{ii} = g^{ij} T_{ij}$$

Para el tensor de esfuerzos en 3D:
$$\sigma_{ii} = \sigma_{11} + \sigma_{22} + \sigma_{33}$$

## 4. Tecnicas de Substitution

### 4.1 Substitution de variables

Sea un cambio de coordenadas $x^i = x^i(u^1, u^2, \ldots, u^n)$, entonces:
$$g'_{kl} = \frac{\partial x^i}{\partial u'^k} \frac{\partial x^j}{\partial u'^l} g_{ij}$$

### 4.2 Simplificación de expresiones

La expresión $g^{ij} \partial_i \phi \partial_j \phi$ representa:
$$\nabla \phi \cdot \nabla \phi = |\nabla \phi|^2$$

## 5. Ejemplos

### Ejemplo 1: Transformación de componentes

Sea $A_i = (2, 1, -1)$ en base canónica. En coordenadas esféricas $(r, \theta, \phi)$:
$$A'_r = A_i \frac{\partial x^i}{\partial r}, \quad A'_\theta = A_i \frac{\partial x^i}{\partial \theta}$$

### Ejemplo 2: Forma cuadrática

Una forma cuadrática $Q = x^T A x$ se escribe en notación tensorial:
$$Q = A_{ij} x^i x^j$$

### Ejemplo 3: Contracción del tensor de Riemann

El tensor de Ricci se obtiene contrayendo el tensor de Riemann:
$$R_{ij} = R^k_{ijk}$$

## 6. Ejercicios

### Ejercicio 1

Dado $T_{ij} = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$, calcular:
- (a) La traza de $T$
- (b) $T_{ii}$
- (c) $T_{ij} \delta_{ij}$

### Ejercicio 2

Sea $A_i = (1, 2, 3)$ y $B_j = (3, 2, 1)$. Calcular $A_i B_i$.

### Ejercicio 3

Si $g_{ij} = \delta_{ij}$ (métrica euclídea), calcular $g^{ij} A_i A_j$ para $A = (a_1, a_2, a_3)$.

### Ejercicio 4

Mostrar que $T_{ij} x^i x^j = T_{ji} x^i x^j$ si $T_{ij} = T_{ji}$.

### Ejercicio 5

Sea $R_{ijkl}$ el tensor de Riemann con las propiedades de simetría. Verificar que $R_{ijkl} + R_{iljk} + R_{iklj} = 0$.

### Ejercicio 6

Calcular la traza del tensor de esfuerzos $\sigma_{ij}$ en 3D si:
$$\sigma = \begin{pmatrix} 100 & 20 & 0 \\ 20 & 50 & 10 \\ 0 & 10 & 30 \end{pmatrix} \text{ MPa}$$

### Ejercicio 7

Dado $A_{ij} = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ y $B_j = (1, 1)$, calcular $(AB)_i = A_{ij} B_j$.

### Ejercicio 8

Verificar que $(g^{ij} g_{jk}) = \delta^i_k$.

### Ejercicio 9

Si $A_{ij} = i \cdot j$ para $i, j \in \{1, 2, 3\}$, escribir la matriz y calcular $A_{ii}$.

### Ejercicio 10

Sea $T_{ijkl}$ con $T_{ijkl} = T_{klij}$. Calcular $T_{ijij}$ para una matriz $4 \times 4$ apropiada.

### Ejercicio 11

Calcular $\partial_i \phi \partial_i \phi$ para $\phi = x^2 + y^2 + z^2$ en coordenadas cartesianas.

### Ejercicio 12

Si $A_i = i$ y $B_{ij} = i+j$, calcular $A_i B_{ii}$.

### Ejercicio 13

Mostrar que $A_{ij} x^i y^j = y^j A_{ij} x^i$.

### Ejercicio 14

Calcular el producto escalar en $\mathbb{R}^3$ usando la métrica euclídea para $x = (1, 0, 0)$ e $y = (0, 1, 0)$.

### Ejercicio 15

Sea $T_{ij}$ antisimétrico. Demostrar que $T_{ii} = 0$.

## Soluciones

### Solución 1

(a) $\text{Tr}(T) = 2 + 3 = 5$

(b) $T_{ii} = T_{11} + T_{22} = 2 + 3 = 5$

(c) $T_{ij} \delta_{ij} = T_{ii} = 5$

### Solución 2

$A_i B_i = 1 \cdot 3 + 2 \cdot 2 + 3 \cdot 1 = 3 + 4 + 3 = 10$

### Solución 3

$g^{ij} A_i A_j = A_i A_i = a_1^2 + a_2^2 + a_3^2 = |A|^2$

### Solución 4

$T_{ij} x^i x^j = T_{ji} x^i x^j$ porque $x^i x^j$ es simétrico y $T_{ij} = T_{ji}$.

### Solución 5

La identidad de la primera derivada covariante nula implica la identidad de Bianchi: $R_{ijkl} + R_{iljk} + R_{iklj} = 0$.

### Solución 6

$\text{Tr}(\sigma) = 100 + 50 + 30 = 180$ MPa

### Solución 7

$A_{ij} B_j = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 3 \\ 7 \end{pmatrix}$

### Solución 8

$g^{ij} g_{jk} = \delta^i_k$ por definición de tensor métrico conjugado.

### Solecución 9

$A_{ij} = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 3 & 6 & 9 \end{pmatrix}$, $A_{ii} = 1 + 4 + 9 = 14$

### Solución 10

Por simetría, $T_{ijij}$ es la suma de los elementos diagonales del bloque $2 \times 2$ superior.

### Solución 11

$\partial_i \phi \partial_i \phi = (2x)^2 + (2y)^2 + (2z)^2 = 4(x^2 + y^2 + z^2)$

### Solución 12

$A_i B_{ii} = A_i B_{ii} = 1 \cdot 2 + 2 \cdot 4 + 3 \cdot 6 = 2 + 8 + 18 = 28$

### Solución 13

Por conmutatividad de la multiplicación escalar: $A_{ij} x^i y^j = y^j A_{ij} x^i$.

### Solución 14

$g_{ij} x^i y^j = \delta_{ij} x^i y^j = x_i y^i = 1 \cdot 0 + 0 \cdot 1 + 0 \cdot 0 = 0$

### Solución 15

Si $T_{ij} = -T_{ji}$, entonces $T_{ii} = -T_{ii}$, lo que implica $T_{ii} = 0$.
