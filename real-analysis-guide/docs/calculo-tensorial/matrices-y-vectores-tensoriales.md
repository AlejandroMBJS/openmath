# Matrices y Vectores en Notacion Tensorial

## Objetivo del tema

Establecer la conexión entre matrices, vectores y la notación tensorial, entendiendo cómo las operaciones lineales se expresan en forma tensorial.

## 1. Vectores como tensores de primer orden

### 1.1 Representacion vectorial

Un vector en $\mathbb{R}^n$ puede representarse de dos formas:

**Componentes contravariantes:**
$$v = v^i \mathbf{e}_i = (v^1, v^2, \ldots, v^n)$$

**Componentes covariantes:**
$$v = v_i \mathbf{e}^i$$

La relación entre ambas está dada por la métrica:
$$v_i = g_{ij} v^j, \quad v^i = g^{ij} v_j$$

### 1.2 Producto escalar

En notación tensorial, el producto escalar es:
$$u \cdot v = u_i v^i = g_{ij} u^i v^j$$

En coordenadas cartesianas euclídeas ($g_{ij} = \delta_{ij}$):
$$u \cdot v = u_i v^i = \sum_{i=1}^n u_i v_i$$

## 2. Matrices como tensores de segundo orden

### 2.1 Matriz como tensor (2,0)

Una matriz $A$ de $n \times n$ corresponde a un tensor de tipo (2,0):
$$A = A^{ij} \mathbf{e}_i \otimes \mathbf{e}_j$$

Las componentes $A^{ij}$ se organizan como la matriz convencional.

### 2.2 Transformaciones lineales

Una transformación lineal $T: \mathbb{R}^n \to \mathbb{R}^n$ se expresa:
$$w^i = T^{ij} v_j$$

O en forma matricial:
$$\begin{pmatrix} w^1 \\ w^2 \\ \vdots \\ w^n \end{pmatrix} = \begin{pmatrix} T^{11} & T^{12} & \cdots & T^{1n} \\ T^{21} & T^{22} & \cdots & T^{2n} \\ \vdots & \vdots & \ddots & \vdots \\ T^{n1} & T^{n2} & \cdots & T^{nn} \end{pmatrix} \begin{pmatrix} v^1 \\ v^2 \\ \vdots \\ v^n \end{pmatrix}$$

### 2.3 Composicion de transformaciones

La composición de transformaciones corresponde a la multiplicación matricial:
$$(AB)^{ij} = A^{ik} B^{kj}$$

## 3. Tensores de tipo mixto

### 3.1 Tensor de tipo (1,1)

Un tensor de tipo (1,1) puede representarse como una matriz que mapping vectores contravariantes a vectores contravariantes:
$$T = T^i_j \mathbf{e}_i \otimes \mathbf{e}^j$$

La acción sobre un vector es:
$$(Tv)^i = T^i_j v^j$$

### 3.2 Cambio de base

Si $P$ es la matriz de cambio de base, entonces:
$$T' = P T P^{-1}$$

En notación tensorial:
$$T'^{ij} = \frac{\partial x'^i}{\partial x^k} \frac{\partial x'^j}{\partial x^l} T^{kl}$$

## 4. Operaciones matriciales en notacion tensorial

### 4.1 Transposicion

La transposición intercambia índices:
$$(A^{ij})^T = A^{ji}$$

### 4.2 Traza

La traza es una contracción de índices:
$$\text{Tr}(A) = A^{ii}$$

### 4.3 Determinante

El determinante puede expresarse con el símbolo de Levi-Civita:
$$\det(A) = \varepsilon^{i_1 i_2 \ldots i_n} A^{1}{}_{i_1} A^{2}{}_{i_2} \cdots A^{n}{}_{i_n}$$

## 5. Formas cuadraticas

### 5.1 Definición tensorial

Una forma cuadrática $Q(v) = v^T A v$ se escribe:
$$Q(v) = A_{ij} v^i v^j$$

### 5.2 Matriz simetrica asociada

Toda forma cuadrática tiene una matriz simétrica asociada:
$$A_{ij} = \frac{1}{2}(a_{ij} + a_{ji})$$

## 6. Vectores propios y valores propios

### 6.1 Ecuación de valores propios

En notación tensorial, la ecuación de valores propios es:
$$A^i_j v^j = \lambda v^i$$

### 6.2 Teorema espectral

Para una matriz simétrica real, existe una base ortonormal de vectores propios:
$$A = Q \Lambda Q^T \Rightarrow A^{ij} = Q^{ik} \Lambda_{kl} Q^{jl}$$

## 7. Ejemplos

### Ejemplo 1: Rotación en el plano

La matriz de rotación por ángulo $\theta$ es:
$$R(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$$

En notación tensorial: $R^{ij}(\theta)$.

### Ejemplo 2: Proyección ortogonal

La matriz de proyección sobre el eje $x$ es:
$$P = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$$

Satisface $P^2 = P$.

### Ejemplo 3: Tensor de esfuerzos

En mecánica de sólidos, el tensor de esfuerzos $\sigma^{ij}$ es un tensor de segundo orden simétrico:
$$\sigma = \begin{pmatrix} \sigma_{xx} & \sigma_{xy} & \sigma_{xz} \\ \sigma_{yx} & \sigma_{yy} & \sigma_{yz} \\ \sigma_{zx} & \sigma_{zy} & \sigma_{zz} \end{pmatrix}$$

## 8. Ejercicios

### Ejercicio 1

Sea $v = (1, 2, 3)$. Expresar como vector contravariante y calcular sus componentes covariantes con $g_{ij} = \delta_{ij}$.

### Ejercicio 2

Dados $u = (1, 0)$ y $v = (0, 1)$ en $\mathbb{R}^2$, verificar que $u \cdot v = 0$.

### Ejercicio 3

Sea $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$. Calcular la traza y el determinante.

### Ejercicio 4

Verificar que $(AB)^T = B^T A^T$ para $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ y $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.

### Ejercicio 5

Encontrar los valores propios de $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$.

### Ejercicio 6

Sea $v = (1, 1)$ y $A = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$. Calcular $v^T A v$.

### Ejercicio 7

Verificar que $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ tiene rank 1.

### Ejercicio 8

Calcular $A^2$ para $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$.

### Ejercicio 9

Expresar la matriz de reflexión sobre el eje $y$ en forma tensorial y dar sus componentes.

### Ejemplo 10

Sea $A_{ij}$ simétrico. Mostrar que puede diagonalizarse mediante una transformación ortogonal.

### Ejercicio 11

Calcular el producto escalar de $u = (1, 2, 3)$ y $v = (3, 2, 1)$ usando $g_{ij} = \delta_{ij}$.

### Ejercicio 12

Verificar que $P = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix}$ es un proyector ($P^2 = P$).

### Ejercicio 13

Encontrar los vectores propios de $A = \begin{pmatrix} 3 & 1 \\ 1 & 3 \end{pmatrix}$.

### Ejercicio 14

Calcular la norma de $v = (1, 1, 1)$ con la métrica euclídea.

### Ejercicio 15

Sea $A^{ij}$ un tensor de segundo orden. Explicar por qué $A^{ij} v_i w_j$ es un escalar invariante.

## Soluciones

### Solución 1

$v^i = (1, 2, 3)$, $v_i = g_{ij} v^j = v_i = (1, 2, 3)$ (iguales con métrica euclídea).

### Solución 2

$u \cdot v = u_i v^i = 1 \cdot 0 + 0 \cdot 1 = 0$. Son ortogonales.

### Solución 3

$\text{Tr}(A) = 1 + 4 = 5$, $\det(A) = 1 \cdot 4 - 2 \cdot 3 = -2$

### Solución 4

$AB = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$, $(AB)^T = \begin{pmatrix} 2 & 4 \\ 1 & 3 \end{pmatrix}$

$B^T A^T = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix} = \begin{pmatrix} 2 & 4 \\ 1 & 3 \end{pmatrix}$. Verificado.

### Solución 5

$\det(A - \lambda I) = \begin{vmatrix} 2-\lambda & 1 \\ 1 & 2-\lambda \end{vmatrix} = (2-\lambda)^2 - 1 = 0$

$\lambda = 1, 3$

### Solución 6

$v^T A v = \begin{pmatrix} 1 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 & 2 \end{pmatrix} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = 4$

### Solución 7

$F_2 = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \end{pmatrix} \begin{pmatrix} 1 & 2 \end{pmatrix}$, rank 1 verificado.

### Solución 8

$A^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 4 \\ 0 & 1 \end{pmatrix}$

### Solución 9

Matriz de reflexión sobre eje $y$: $R = \begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$, componentes $R^{11} = -1$, $R^{22} = 1$, demás cero.

### Solución 10

Teorema espectral para matrices simétricas reales: $A = Q \Lambda Q^T$ con $Q$ ortogonal.

### Solución 11

$u \cdot v = 1 \cdot 3 + 2 \cdot 2 + 3 \cdot 1 = 3 + 4 + 3 = 10$

### Solución 12

$P^2 = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix} \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix} = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix} = P$

### Solución 13

Valores propios: $\lambda = 2, 4$

Para $\lambda = 2$: $v = (1, -1)$
Para $\lambda = 4$: $v = (1, 1)$

### Solución 14

$||v|| = \sqrt{v_i v^i} = \sqrt{1^2 + 1^2 + 1^2} = \sqrt{3}$

### Solución 15

Por transformación de coordenadas: $A'^{ij} v'_i w'_j = \frac{\partial x'^i}{\partial x^k} \frac{\partial x'^j}{\partial l} A^{kl} \frac{\partial x^m}{\partial x'^i} v_m \frac{\partial x^n}{\partial x'^j} w_n = A^{mn} v_m w_n$, invariante.
