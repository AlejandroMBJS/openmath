---
title: El tensor metrico
description: Definicion del tensor metrico, propiedades, distancia riemanniana y ejemplos en diferentes espacios.
---

# El tensor metrico

## Motivacion e intuicion

En un espacio euclideo, la distancia entre dos puntos se calcula facilmente con el teorema de Pitagoras. Pero cuando queremos generalizar la notion de "distancia" a espacios curvos o coordenadas generalizadas, necesitamos algo mas sofisticado: el **tensor metrico**.

El tensor metrico $g_{ij}$ es un tensor covariante de segundo orden que encodes toda la informacion geometrica del espacio. Con el, podemos:

- Calcular longitudes de curvas
- Definir angulos entre vectores
- Medir distancias infinitesimales (elemento de linea)
- Transformar entre componentes covariantes y contravariantes

## Definicion formal

El tensor metrico $g_{ij}$ es un tensor covariante simetrico:

$$g_{ij} = g_{ji}$$

que satisface condiciones de no degeneracion:

$$\det(g_{ij}) \neq 0$$

Esto garantiza que la metrica tiene inversa $g^{ij}$ tal que:

$$g_{ij} g^{jk} = \delta^i_k$$

## Elemento de linea

En coordenadas generalizadas, el intervalo infinitesimal es:

$$ds^2 = g_{ij} dx^i dx^j$$

Esta es la "regla del distancia" del espacio.

## Ejemplos de metricas clasicas

### Metrica euclidea en $\mathbb{R}^n$

$$g_{ij} = \delta_{ij} = \text{diag}(1, 1, \ldots, 1)$$

$$ds^2 = (dx^1)^2 + (dx^2)^2 + \cdots + (dx^n)^2$$

### Metrica euclidea en coordenadas polares

En $(r, \theta)$:

$$g_{ij} = \text{diag}(1, r^2)$$

$$ds^2 = dr^2 + r^2 d\theta^2$$

### Metrica euclidea en esfericas $(r, \theta, \phi)$

$$g_{ij} = \text{diag}(1, r^2, r^2 \sin^2\theta)$$

$$ds^2 = dr^2 + r^2 d\theta^2 + r^2 \sin^2\theta d\phi^2$$

### Metrica de Minkowski (espaciotempo)

$$ds^2 = -c^2 dt^2 + dx^2 + dy^2 + dz^2$$

En notacion:

$$g_{\mu\nu} = \text{diag}(-c^2, 1, 1, 1)$$

### Metrica de Schwarzschild

Para un cuerpo esferico estatico:

$$ds^2 = -\left(1 - \frac{2GM}{c^2 r}\right)c^2 dt^2 + \left(1 - \frac{2GM}{c^2 r}\right)^{-1} dr^2 + r^2 d\Omega^2$$

## Operaciones con la metrica

### Elevar indices

$$V^i = g^{ij} V_j$$

### Bajar indices

$$V_i = g_{ij} V^j$$

### Producto interno

$$\mathbf{u} \cdot \mathbf{v} = g_{ij} u^i v^j = u_i v^i$$

### Norma de un vector

$$\|\mathbf{v}\| = \sqrt{g_{ij} v^i v^j} = \sqrt{v_i v^i}$$

## Propiedades del tensor metrico

### Simetria

$$g_{ij} = g_{ji}$$

### No degeneracion

$$\det(g) \neq 0$$

### Tensor de tipo (0,2)

La metrica tiene dos indices covariantes (bajos).

## Longitud de una curva

Para una curva parametrica $x^i(\lambda)$:

$$L = \int_{\lambda_1}^{\lambda_2} \sqrt{g_{ij} \frac{dx^i}{d\lambda} \frac{dx^j}{d\lambda}} \, d\lambda$$

## Angulo entre vectores

$$\cos\theta = \frac{g_{ij} u^i v^j}{\sqrt{g_{ij} u^i u^j} \sqrt{g_{ij} v^i v^j}}$$

## Errores comunes

1. **Confundir $g_{ij}$ con $g^{ij}$**: $g^{ij}$ es la metrica contravariante (inversa).

2. **Olvidar la simetria**: La metrica siempre es simetrica.

3. **No incluir todos los terminos**: En $ds^2 = g_{ij} dx^i dx^j$, hay terminos cruzados cuando $i \neq j$.

## Ejercicios

### Ejercicio 1

Calcule $ds^2$ en $\mathbb{R}^2$ con coordenadas cartesianas.

### Ejercicio 2

Transforme la metrica euclidea a coordenadas polares y verifique $g_{rr} = 1$, $g_{\theta\theta} = r^2$.

### Ejercicio 3

Calcule la distancia entre los puntos $(1, 0)$ y $(0, 1)$ usando la metrica en polares.

### Ejercicio 4

Exprese la norma del vector $(1, 1)$ en $\mathbb{R}^2$ usando la metrica.

### Ejercicio 5

Calcule la inversa de la metrica $g_{ij} = \text{diag}(1, r^2)$ en polares.

### Ejercicio 6

Derive $g_{\theta\theta}$ desde $x = r\cos\theta$, $y = r\sin\theta$.

### Ejercicio 7

Calcule la longitud de la curva $r = \theta$, $0 \leq \theta \leq \pi$ en el plano.

### Ejercicio 8

Exprese el angulo entre $(1, 0)$ y $(0, 1)$ en $\mathbb{R}^2$.

### Ejercicio 9

Que significa $g_{ij} = \delta_{ij}$?

### Ejercicio 10

En la metrica de Schwarzschild, calcule $g^{rr}$.

### Ejercicio 11

Calcule la distancia radial entre $r = a$ y $r = b$ en coordenadas polares.

### Ejercicio 12

Exprese el operador laplaciano en terminos de la metrica.

### Ejercicio 13

Calcule el volumen infinitesimal $dV = \sqrt{\det(g)}\, dx^n$.

### Ejercicio 14

En 3D esfericas, calcule $\sqrt{\det(g)}$.

### Ejercicio 15

Exprese la condition de que un vector sea unitario.

## Soluciones

### Solucion 1

$ds^2 = dx^2 + dy^2 = \delta_{ij} dx^i dx^j$

### Solucion 2

Con $x = r\cos\theta$, $y = r\sin\theta$:
$dx = \cos\theta\, dr - r\sin\theta\, d\theta$
$dy = \sin\theta\, dr + r\cos\theta\, d\theta$

$dx^2 + dy^2 = dr^2 + r^2 d\theta^2$

Luego $g_{rr} = 1$, $g_{\theta\theta} = r^2$.

### Solucion 3

En polares, de $(1, 0)$ a $(0, 1)$: $r = 1$, $\theta$ va de $0$ a $\pi/2$.

$L = \int_0^{\pi/2} \sqrt{g_{\theta\theta}}\, d\theta = \int_0^{\pi/2} r\, d\theta = r(\pi/2) = \pi/2$

### Solucion 4

$\|\mathbf{v}\| = \sqrt{\delta_{ij} v^i v^j} = \sqrt{1^2 + 1^2} = \sqrt{2}$

### Solucion 5

$g^{ij} = \text{diag}(1, 1/r^2)$

### Solucion 6

See Solucion 2.

### Solucion 7

$L = \int_0^\pi \sqrt{1 + r^2}\, d\theta = \int_0^\pi \sqrt{1 + \theta^2}\, d\theta$

### Solucion 8

$\cos\theta = \frac{\delta_{ij} u^i v^j}{\|u\|\|v\|} = \frac{0}{\sqrt{1}\sqrt{1}} = 0$, luego $\theta = \pi/2$

### Solucion 9

Que la metrica es la identidad: espacio euclideo standard.

### Solucion 10

$g^{rr} = \left(1 - \frac{2GM}{c^2 r}\right)^{-1}$

### Solucion 11

$L = \int_a^b \sqrt{g_{rr}}\, dr = \int_a^b 1\, dr = b - a$

### Solucion 12

$\nabla^2 \phi = \frac{1}{\sqrt{g}} \partial_i(\sqrt{g} g^{ij} \partial_j \phi)$

### Solucion 13

En euclideo: $dV = dx dy dz$

En general: $dV = \sqrt{\det(g_{ij})}\, dx^1 \cdots dx^n$

### Solucion 14

$\sqrt{\det(g)} = r^2 \sin\theta$

### Solucion 15

$g_{ij} v^i v^j = 1$
