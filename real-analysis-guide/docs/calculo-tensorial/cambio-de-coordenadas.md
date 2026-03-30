# Cambio de Coordenadas en Notación Tensorial

## Objetivo del tema

Establecer cómo cambian las componentes de los tensores bajo cambios de coordenadas, y entender la invariance de las quantities tensoriales.

## 1. Principio de covarianza general

### 1.1 Invarianza de las equations físicas

Las leyes de la física deben expresarse en forma tensorial para ser invariantes bajo cambios de coordenadas:
$$T^{ij}_{kl} \text{ es invariante si } T'^{ij}_{kl} = \frac{\partial x'^i}{\partial x^m} \frac{\partial x'^j}{\partial x^n} \frac{\partial x^p}{\partial x'^k} \frac{\partial x^q}{\partial x'^l} T^{mn}_{pq}$$

### 1.2 Tensores como objects geométricos

Un tensor es un objeto geométrico cuyas componentes se transforman de manera específica, pero el tensor en sí es independiente del sistema de coordenadas.

## 2. Transformaciones de coordenadas

### 2.1 Cambio de base

Sea $x^i \to x'^i(x^1, \ldots, x^n)$ un cambio de coordenadas invertible.

Las derivadas parciales definen la transformación:
$$J^i_j = \frac{\partial x'^i}{\partial x^j}, \quad J^{-i}_j = \frac{\partial x^i}{\partial x'^j}$$

### 2.2 Jacobian

El determinante de la matriz Jacobiana determina si la transformación preserva orientación:
$$J = \det\left(\frac{\partial x'^i}{\partial x^j}\right)$$

Si $J > 0$, la orientación se preserva; si $J < 0$, se invierte.

## 3. Transformación de vectores

### 3.1 Vectores contravariantes

Las componentes contravariantes se transforman con la matriz inversa del Jacobiano:
$$V'^i = \frac{\partial x'^i}{\partial x^j} V^j$$

### 3.2 Vectores covariantes

Las componentes covariantes se transforman con el Jacobiano:
$$V'_i = \frac{\partial x^j}{\partial x'^i} V_j$$

### 3.3 Base dual

Los vectores de la base dual también se transforman:
$$\mathbf{e}'^i = \frac{\partial x'^i}{\partial x^j} \mathbf{e}^j$$

## 4. Transformación de tensores de orden superior

### 4.1 Tensor de tipo (2,0)

$$T'^{ij} = \frac{\partial x'^i}{\partial x^k} \frac{\partial x'^j}{\partial x^l} T^{kl}$$

### 4.2 Tensor de tipo (0,2)

$$T'_{ij} = \frac{\partial x^k}{\partial x'^i} \frac{\partial x^l}{\partial x'^j} T_{kl}$$

### 4.3 Tensor de tipo (1,1)

$$T'^i_j = \frac{\partial x'^i}{\partial x^k} \frac{\partial x^l}{\partial x'^j} T^k_l$$

### 4.4 Tensor de tipo (2,2)

$$T'^{ij}_{kl} = \frac{\partial x'^i}{\partial x^m} \frac{\partial x'^j}{\partial x^n} \frac{\partial x^p}{\partial x'^k} \frac{\partial x^q}{\partial x'^l} T^{mn}_{pq}$$

## 5. Ejemplos de cambios de coordenadas

### 5.1 Coordenadas cartesianas a polares (2D)

$$x = r\cos\theta, \quad y = r\sin\theta$$

Jacobiano:
$$J = \begin{pmatrix} \cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta \end{pmatrix}$$

### 5.2 Coordenadas cartesianas a esféricas (3D)

$$x = r\sin\theta\cos\phi, \quad y = r\sin\theta\sin\phi, \quad z = r\cos\theta$$

### 5.3 Transformación a coordenadas curvilíneas ortogonales

Para coordenadas $(u, v)$ con métricas:
$$ds^2 = E(u,v) du^2 + G(u,v) dv^2$$

## 6. Métrica bajo cambios de coordenadas

### 6.1 Transformación del tensor métrico

$$g'_{ij} = \frac{\partial x^k}{\partial u'^i} \frac{\partial x^l}{\partial u'^j} g_{kl}$$

### 6.2 Invariante de línea

$$ds'^2 = g'_{ij} du'^i du'^j = ds^2$$

La longitud de arco es invariante bajo cualquier cambio de coordenadas.

## 7. Coordenadas normalizadas

### 7.1 Tetraedro de bases normalizadas

En espacios riemannianos, se usa el tensor métrico para normalizar:
$$\hat{\mathbf{e}}_i = \frac{1}{\sqrt{g_{ii}}} \mathbf{e}_i$$

### 7.2 Factores de escala

Los factores de escala en coordenadas ortogonales son:
$$h_i = \sqrt{g_{ii}}$$

## 8. Ejercicios

### Ejercicio 1

Si $V = (1, 0)$ en coordenadas cartesianas, encontrar sus componentes en coordenadas polares.

### Ejercicio 2

Sea $T_{ij} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ en cartesianas. Transformar a polares.

### Ejercicio 3

Calcular el Jacobiano de la transformación a coordenadas polares.

### Ejercicio 4

Verificar que $ds^2 = dx^2 + dy^2 = dr^2 + r^2 d\theta^2$.

### Ejercicio 5

Si $A^{ij}$ es un tensor, mostrar que $A'^{rr} = A^{xx}\cos^2\theta + A^{xy}\sin(2\theta) + A^{yy}\sin^2\theta$.

### Ejercicio 6

Transformar el vector $(1, 1, 1)$ de cartesianas a esféricas.

### Ejercicio 7

Calcular el determinante del Jacobiano para la transformación a coordenadas esféricas.

### Ejercicio 8

Sea $g_{ij} = \delta_{ij}$. Encontrar $g'_{ij}$ en coordenadas polares.

### Ejercicio 9

Si $V_i = (\partial_i \phi)$, mostrar que transforma como covariante.

### Ejercicio 10

Verificar que $\delta^{ij}$ es invariante bajo transformaciones ortogonales.

### Ejercicio 11

Transformar el tensor $T^{ij} = \delta^{ij}$ de cartesianas a polares.

### Ejercicio 12

Calcular el factor de escala $h_r$ en coordenadas polares planas.

### Ejercicio 13

Si $A_{ij} = x_i x_j$, transformar a coordenadas polares.

### Ejercicio 14

Mostrar que el volumen $dV = \sqrt{g} du^1 du^2 du^3$ es invariante.

### Ejercicio 15

Verificar que el símbolo de Levi-Civita $\varepsilon^{ijk}$ se transforma como tensor densidad.

## Soluciones

### Solución 1

En polares: $V_r = V_x \cos\theta + V_y \sin\theta = \cos\theta$, $V_\theta = -V_x r\sin\theta + V_y r\cos\theta = -r\sin\theta$

### Solución 2

$g'_{rr} = 1$, $g'_{\theta\theta} = r^2$, $g'_{r\theta} = 0$

### Solución 3

$J = r$

### Solución 4

$dx = dr\cos\theta - r\sin\theta d\theta$, $dy = dr\sin\theta + r\cos\theta d\theta$
$dx^2 + dy^2 = dr^2 + r^2 d\theta^2$

### Solución 5

Por transformación: $A'^{rr} = \frac{\partial x'^r}{\partial x}\frac{\partial x'^r}{\partial y}A^{xx} + \ldots$

### Solución 6

$r = \sqrt{3}$, $\theta = \pi/4$, $\phi = \pi/4$ (aproximado)

### Solución 7

$\det(J) = r^2 \sin\theta$

### Solución 8

$g'_{ij} = \begin{pmatrix} 1 & 0 \\ 0 & r^2 \end{pmatrix}$

### Solución 9

$\partial'_i \phi = \frac{\partial x^j}{\partial x'^i} \partial_j \phi$, transformación covariante.

### Solución 10

$\delta'^{ij} = \frac{\partial x'^i}{\partial x^k} \frac{\partial x'^j}{\partial x^l} \delta^{kl} = \frac{\partial x'^i}{\partial x^k} \frac{\partial x'^j}{\partial x^k} = \delta^{ij}$ para ortogonal.

### Solución 11

$T'^{ij} = \delta'^{ij}$ (misma forma en polares para métricas planas)

### Solución 12

$h_r = \sqrt{g_{rr}} = 1$

### Solución 13

$A'_{rr} = (r\cos\theta)^2 + (r\sin\theta)^2 = r^2$

### Solución 14

$\sqrt{g}' = \sqrt{g} |\det(J)|$, el producto es invariante.

### Solución 15

$\varepsilon'^{ijk} = \det(J) \varepsilon^{ijk}$, densidad de peso +1.
