---
title: Derivada tensorial y simbolos de Christoffel
description: Derivada covariante, simbolos de Christoffel, transporte paralelo y diferenciacion en espacios curvos.
---

# Derivada tensorial y simbolos de Christoffel

## Motivacion e intuicion

En un espacio euclideo, la derivada parcial de un vector es bien definida porque podemos comparar vectores en diferentes puntos. Pero en un espacio curvo (variedad riemanniana), no hay forma directa de comparar vectores en puntos diferentes: necesitamos transportarlos paralelamente a lo largo de una curva.

Los **simbolos de Christoffel** $\Gamma^i_{jk}$ encode esta conexión y permiten definir la **derivada covariante**, que produce тензоры bien comportados.

## Definicion de los simbolos de Christoffel

### Desde la metrica

$$\Gamma^i_{jk} = \frac{1}{2} g^{il}(\partial_j g_{kl} + \partial_k g_{jl} - \partial_l g_{jk})$$

Esta es la **conexion de Levi-Civita**.

### Propiedades

- **Simetria**: $\Gamma^i_{jk} = \Gamma^i_{kj}$ (sin torsion)
- **Transformacion**: No es un tensor, pero transforma como:
$$\Gamma'^i_{jk} = \frac{\partial x'^i}{\partial x^m} \frac{\partial x^n}{\partial x'^j} \frac{\partial x^p}{\partial x'^k} \Gamma^m_{np} + \frac{\partial x'^i}{\partial x^m} \frac{\partial^2 x^m}{\partial x'^j \partial x'^k}$$

- **Derivada de la metrica nula**: $\nabla_k g_{ij} = 0$

## Derivada covariante

### De un escalar

$$\nabla_i f = \partial_i f$$

(no hay diferencia con derivada parcial).

### De un vector contravariante

$$\nabla_j v^i = \partial_j v^i + \Gamma^i_{jk} v^k$$

### De un vector covariante

$$\nabla_j w_i = \partial_j w_i - \Gamma^k_{ij} w_k$$

### De un tensor general

$$\nabla_k T^{i_1 \ldots i_r}_{j_1 \ldots j_s} = \partial_k T^{i_1 \ldots i_r}_{j_1 \ldots j_s} + \Gamma^{i_1}_{k m} T^{m i_2 \ldots i_r}_{j_1 \ldots j_s} + \cdots - \Gamma^m_{k j_1} T^{i_1 \ldots i_r}_{m j_2 \ldots j_s} - \cdots$$

## Transporte paralelo

Un vector es **transportado paralelamente** a lo largo de una curva si:

$$\frac{dv^i}{d\lambda} + \Gamma^i_{jk} \frac{dx^j}{d\lambda} v^k = 0$$

## Geodesicas

Una geodesica satisfies:

$$\frac{d^2 x^i}{d\lambda^2} + \Gamma^i_{jk} \frac{dx^j}{d\lambda} \frac{dx^k}{d\lambda} = 0$$

## Ejemplos en coordenadas comunes

### Cartesiano euclideo

$$\Gamma^i_{jk} = 0$$

### Polares

$$\Gamma^r_{\theta\theta} = -r, \quad \Gamma^\theta_{r\theta} = \Gamma^\theta_{\theta r} = \frac{1}{r}$$

### Esfericas

$$\Gamma^r_{\theta\theta} = -r, \quad \Gamma^r_{\phi\phi} = -r\sin^2\theta$$
$$\Gamma^\theta_{r\theta} = \Gamma^\theta_{\theta r} = \frac{1}{r}$$
$$\Gamma^\theta_{\phi\phi} = -\sin\theta\cos\theta$$
$$\Gamma^\phi_{r\phi} = \Gamma^\phi_{\phi r} = \frac{1}{r}$$
$$\Gamma^\phi_{\theta\phi} = \Gamma^\phi_{\phi\theta} = \cot\theta$$

## Derivada covariante de campos tensoriales

### Derivada covariante de la metrica

$$\nabla_k g_{ij} = 0$$

Esta es una identidad fundamental: la metrica es "constant" con respecto a su propia conexión.

### Divergencia covariante

$$\nabla_i v^i = \frac{1}{\sqrt{g}} \partial_i(\sqrt{g} v^i)$$

### Laplaciano covariante

$$\nabla^2 f = g^{ij} \nabla_i \nabla_j f = \frac{1}{\sqrt{g}} \partial_i(\sqrt{g} g^{ij} \partial_j f)$$

## Errores comunes

1. **Olvidar los terminos extra**: La derivada covariante NO es solo $\partial$.

2. **Confundir los indices**: Los $\Gamma$ tienen el indice de direccionar arriba.

3. **Christoffel no es tensor**: Transforma inhomogeneamente.

## Ejercicios

### Ejercicio 1

Calcule los simbolos de Christoffel para la metrica euclidea en coordenadas cartesianas.

### Ejercicio 2

En coordenadas polares, verifique $\Gamma^r_{\theta\theta} = -r$.

### Ejercicio 3

Exprese la derivada covariante de un vector contravariante $v^i$.

### Ejercicio 4

Calcule la derivada covariante de la metrica $g_{ij}$.

### Ejercicio 5

Escriba la ecuacion geodesica en forma tensorial.

### Ejercicio 6

Calcule los simbolos de Christoffel para la metrica $ds^2 = dr^2 + r^2 d\theta^2$.

### Ejercicio 7

Exprese la divergencia $\nabla_i v^i$ en terminos de derivadas parciales.

### Ejercicio 8

Calcule el Laplaciano covariante de un escalar.

### Ejercicio 9

Verifique que $\nabla_k g_{ij} = 0$.

### Ejercicio 10

Exprese el transporte paralelo a lo largo de una curva.

### Ejercicio 11

En 2D esfericas, calcule $\Gamma^\phi_{\theta\phi}$.

### Ejercicio 12

Calcule la derivada covariante de un tensor simetrico.

### Ejercicio 13

Exprese la geodesica en terminos de principio variacional.

### Ejercicio 14

Calcule el vector de aceleracion geodesica.

### Ejercicio 15

Derive la formula para la divergencia covariante.

## Soluciones

### Solucion 1

En cartesianas, $g_{ij} = \delta_{ij}$ constante, luego $\Gamma^i_{jk} = 0$.

### Solucion 2

$g_{rr} = 1$, $g_{\theta\theta} = r^2$.
$\Gamma^r_{\theta\theta} = -\frac{1}{2} g^{rr} \partial_r g_{\theta\theta} = -\frac{1}{2}(1)(2r) = -r$

### Solucion 3

$\nabla_j v^i = \partial_j v^i + \Gamma^i_{jk} v^k$

### Solucion 4

Por definition de Levi-Civita: $\nabla_k g_{ij} = 0$

### Solucion 5

$\frac{d^2 x^i}{d\tau^2} + \Gamma^i_{jk} \frac{dx^j}{d\tau} \frac{dx^k}{d\tau} = 0$

### Solucion 6

$g_{ij} = \text{diag}(1, r^2)$, $g^{ij} = \text{diag}(1, 1/r^2)$
$\Gamma^r_{\theta\theta} = -r$, $\Gamma^\theta_{r\theta} = \Gamma^\theta_{\theta r} = 1/r$

### Solucion 7

$\nabla_i v^i = \partial_i v^i + \Gamma^i_{ij} v^j = \frac{1}{\sqrt{g}} \partial_i(\sqrt{g} v^i)$

### Solucion 8

$\nabla^2 f = g^{ij} \partial_i \partial_j f - g^{ij} \Gamma^k_{ij} \partial_k f$

### Solucion 9

Usando la formula: $\nabla_k g_{ij} = \partial_k g_{ij} - \Gamma^l_{ki} g_{lj} - \Gamma^l_{kj} g_{il} = 0$ por construction.

### Solucion 10

$\frac{dv^i}{d\lambda} + \Gamma^i_{jk} \frac{dx^j}{d\lambda} v^k = 0$

### Solucion 11

En 2D esfericas: $\Gamma^\phi_{\theta\phi} = \cot\theta$

### Solucion 12

$\nabla_k S_{ij} = \partial_k S_{ij} - \Gamma^l_{ki} S_{lj} - \Gamma^l_{kj} S_{il}$

### Solucion 13

$\delta \int \sqrt{g_{ij} \dot{x}^i \dot{x}^j} d\tau = 0$

### Ejercicio 14

$a^i = \ddot{x}^i + \Gamma^i_{jk} \dot{x}^j \dot{x}^k$

### Solucion 15

$\nabla_i v^i = \partial_i v^i + \Gamma^i_{ij} v^j = \frac{1}{\sqrt{|g|}} \partial_i(\sqrt{|g|} v^i)$
