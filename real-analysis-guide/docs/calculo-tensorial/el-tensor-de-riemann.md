---
title: El tensor de Riemann
description: Definicion del tensor de curvatura de Riemann, propiedades algebraicas, significado geometrico y componentes en various espacios.
---

# El tensor de Riemann

## Motivacion e intuicion

El tensor de Riemann es el objeto geometrico fundamental que mide la curvatura de un espacio. Si la metrica nos dice como medir distancias y angulos, el Riemann nos dice si el espacio es "plano" o "curvo".

En terminos geometricos, el Riemann mide cuanto se desvian las geodesicas entre si. Si transportamos un vector a lo largo de un小路 cerrado y lo devolvemos al punto original, la diferencia angular es proporcional al tensor de Riemann.

## Definicion formal

El tensor de Riemann $R^i_{\ jkl}$ se define como:

$$R^i_{\ jkl} = \partial_k \Gamma^i_{jl} - \partial_l \Gamma^i_{jk} + \Gamma^i_{km} \Gamma^m_{jl} - \Gamma^i_{lm} \Gamma^m_{jk}$$

## Propiedades algebraicas

### Simetrias

1. **Antisimetria en los dos ultimos indices**:
$$R^i_{\ jkl} = -R^i_{\ jlk}$$

2. **Antisimetria en el primer par**:
$$R^i_{\ jkl} = -R^k_{\ijl}$$

3. **Simetria de intercambio del primer y segundo par**:
$$R^i_{\ jkl} = R^{ik}_{\ jl}$$

### Identidad de Bianchi

La identidad de Bianchi (primera):
$$\nabla_{[i} R_{jk]}^{\ l} = 0$$

La identidad de Bianchi (segunda):
$$\nabla_i R^{ij}_{\ kl} + \nabla_k R^{ij}_{\ li} + \nabla_l R^{ij}_{\ ik} = 0$$

## Significado geometrico

### Transporte paralelo alrededor de un小路

Si transportamos un vector $v^i$ paralelamente a lo largo de un小路 cerrado, el cambio es:

$$\Delta v^i = \oint R^i_{\ jkl} v^j dx^k dx^l$$

### Geodesicas desviadas

Las geodesicas que comienzan en direcciones ligeramente diferentes divergen proporcionalmente a $R^i_{\ jkl}$.

## Componentes en espacios comunes

### Espacio euclideo

$$R^i_{\ jkl} = 0$$

### Esfera $S^2$ (superficie)

En coordenadas polares $(\theta, \phi)$:
$$R^r_{\ \theta r\theta} = -r, \quad R^\theta_{\ r\theta r} = 1/r$$

O equivalentemente:
$$R_{\theta r\theta r} = r^2 \sin^2\theta$$

### Espacio de curvatura constante $R$

$$R_{ijkl} = K(g_{ik} g_{jl} - g_{il} g_{jk})$$

donde $K$ es la curvatura seccional.

### Metrica de Schwarzschild

Las componentes no nulas del tensor de Riemann son:
$$R^t_{\ trt} = \frac{2GM}{r^3}, \quad R^r_{\ trt} = -\frac{2GM}{r^3}, \text{ etc.}$$

## Tipos de indices

- Como tensor $(1,3)$: $R^i_{\ jkl}$
- Como tensor $(0,4)$: $R_{ijkl} = g_{im} R^m_{\ jkl}$

## Contracciones del tensor de Riemann

### Tensor de Ricci

$$R_{ij} = R^k_{\ ikj}$$

Es un tensor simetrico de tipo $(0,2)$.

### Curvatura escalar

$$R = g^{ij} R_{ij}$$

Es un escalar.

## Errores comunes

1. **Confundir los indices**: $R^i_{\ jkl}$ tiene indice $i$ libre, tres contraidos.

2. **Olvidar las simetrias**: El tensor tiene muchas simetrias que reducen sus componentes independientes.

3. **La identidad de Bianchi**: No es intuitiva pero es fundamental.

## Numero de componentes independientes

En $n$ dimensiones:
- $n^2(n^2 - 1)/12$ componentes para el tensor de Riemann completo
- En 2D: solo 1 componente independiente
- En 3D: 6 componentes
- En 4D: 20 componentes

## Ejercicios

### Ejercicio 1

Calcule el tensor de Riemann en espacio euclideo 2D.

### Ejercicio 2

Verifique que $R^i_{\ jkl} = 0$ en coordenadas cartesianas.

### Ejercicio 3

Derive la formula desde la definicion.

### Ejercicio 4

Cuantas componentes independientes tiene el Riemann en 4D?

### Ejercicio 5

Exprese la identidad de Bianchi en forma covariante.

### Ejercicio 6

Calcule el tensor de Ricci desde el Riemann.

### Ejercicio 7

Exprese la curvatura escalar.

### Ejercicio 8

En 2D, verifique que hay solo 1 componente independiente.

### Ejercicio 9

Calcule $R_{ijkl}$ para la metrica de Schwarzschild.

### Ejercicio 10

Demuestre las simetrias del tensor de Riemann.

### Ejercicio 11

Exprese el tensor de Riemann en terminos de la metrica y sus derivadas.

### Ejercicio 12

Calcule la primera identidad de Bianchi para un caso simple.

### Ejercicio 13

Verifique que $R_{ij} = R_{ji}$.

### Ejercicio 14

Exprese la identidad de Ricci.

### Ejercicio 15

Calcule el tensor de Riemann para la metrica $ds^2 = dr^2 + r^2 d\theta^2$.

## Soluciones

### Solucion 1

En 2D euclideo: $R^r_{\ \theta r\theta} = -r$, $R^\theta_{\ r\theta r} = 1/r$. Las demas componentes son cero.

### Solucion 2

En cartesianas, $\Gamma^i_{jk} = 0$, luego $R^i_{\ jkl} = 0$.

### Solucion 3

$R^i_{\ jkl} = \partial_k \Gamma^i_{jl} - \partial_l \Gamma^i_{jk} + \Gamma^i_{km} \Gamma^m_{jl} - \Gamma^i_{lm} \Gamma^m_{jk}$

### Solucion 4

$n^2(n^2-1)/12 = 16(16-1)/12 = 16(15)/12 = 20$ componentes

### Solucion 5

$\nabla_{[i} R_{jk]l}^{\ m} = 0$

### Solucion 6

$R_{ij} = R^k_{\ ikj} = g^{kl} R_{lijk}$

### Solucion 7

$R = g^{ij} R_{ij} = R^i_{\ i}$

### Solucion 8

En 2D: $n^2(n^2-1)/12 = 4(3)/12 = 1$

### Solucion 9

Las componentes involve funciones de $r$; la más simple es $R_{trtr} = -2GM/r^3$

### Solucion 10

Se prueban directamente de la definicion y simetrias de $\Gamma$.

### Solucion 11

$R^i_{\ jkl} = \partial_k \Gamma^i_{jl} - \partial_l \Gamma^i_{jk} + \Gamma^i_{km}\Gamma^m_{jl} - \Gamma^i_{lm}\Gamma^m_{jk}$

### Solucion 12

$\nabla_i R_{jkl} + \nabla_j R_{kli} + \nabla_k R_{lijk} = 0$

### Solucion 13

$R_{ij} = R^k_{\ ikj} = R^k_{\ kji} = R_{ji}$ por simetria del Riemann

### Solucion 14

$G_{ij} = R_{ij} - \frac{1}{2}g_{ij}R$ (tensor de Einstein)

### Solucion 15

$\Gamma^r_{\theta\theta} = -r$, $\Gamma^\theta_{r\theta} = 1/r$.
$R^r_{\ \theta r\theta} = -1$, $R^\theta_{\ r\theta r} = 1/r^2$
