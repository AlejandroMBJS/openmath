---
title: La metrica tensorial generalizada
description: Extensiones de la metrica, pseudometricas, metricas degeneradas y estructuras afines.
---

# La metrica tensorial generalizada

## Motivacion e intuicion

La metrica riemanniana estandar $g_{ij}$ es definida positivo ($g_{ij}v^iv^j > 0$ para $v \neq 0$). Sin embargo, en fisica teorica aparecen metricas que no satisfacen esta condicion: el espaciotiempo de Minkowski tiene signatura mixta, y hay estructuras metricas degeneradas en algunos contextos matemáticos.

## Tipos de metricas

### Metrica riemanniana

$$g_{ij} v^i v^j > 0 \quad \forall v \neq 0$$

### Metrica pseudoriemanniana

$$g_{ij} v^i v^j \text{ puede ser } > 0, < 0, \text{ o } 0$$

- **Lorentziana**: signatura $(-, +, +, +)$ o $(+, -, -, -)$
- **Minkowski**: $\eta_{\mu\nu} = \text{diag}(-1, 1, 1, 1)$

### Metrica degenerada

$$\det(g_{ij}) = 0$$

Algunas teorías de gauge y sistemas constrainados.

### Metrica conforme

$$g_{ij} = \Omega^2(x) \hat{g}_{ij}$$

Dos metricas que definen la misma estructura conforme.

## Signatura

Para una metrica pseudoriemanniana, el numero de valores propios positivos y negativos es la **signatura**.

### Convenciones comunes

- **Fisica**: $(-1, +1, +1, +1)$ para $\eta_{\mu\nu}$
- **Matematicas**: $(+1, -1, -1, -1)$ a veces

## Ejemplos de metricas

### Metrica de Minkowski

$$\eta_{\mu\nu} = \begin{pmatrix} -1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$$

### Metrica de Schwarzschild

$$ds^2 = -(1-2M/r)dt^2 + (1-2M/r)^{-1}dr^2 + r^2 d\Omega^2$$

### Metrica de Kerr

Para un agujero negro rotante.

### Metrica de Friedman-Lemaître-Robertson-Walker

$$ds^2 = -dt^2 + a(t)^2 d\Sigma^2$$

donde $d\Sigma^2$ es la metrica de una superficie de curvatura constante.

## Operacines con metricas pseudoriemannianas

### Elevar y bajar indices

$$V_\mu = g_{\mu\nu} V^\nu$$

$$V^\mu = g^{\mu\nu} V_\nu$$

### Producto interno

$$u \cdot v = g_{\mu\nu} u^\mu v^\nu$$

Nota: Este producto puede ser negativo.

### Intervalo espaciotemporal

$$ds^2 = g_{\mu\nu} dx^\mu dx^\nu$$

- $ds^2 < 0$: tipo tiempo
- $ds^2 = 0$: tipo luz (nulo)
- $ds^2 > 0$: tipo espacio

## Normas y angulos

### Norma

$$\|v\|^2 = g_{\mu\nu} v^\mu v^\nu$$

Puede ser negativa.

### Tipo de vector

- **Espacelike**: $\|v\|^2 > 0$
- **Timelike**: $\|v\|^2 < 0$
- **Null**: $\|v\|^2 = 0$

### Angulo

Para vectores spacelike:

$$\cos\theta = \frac{g_{\mu\nu} u^\mu v^\nu}{\sqrt{|g_{\alpha\beta} u^\alpha u^\beta g_{\gamma\delta} v^\gamma v^\delta|}}$$

## Errores comunes

1. **Signatura**: Confundir $(-++)$ con $(+--)$.

2. **Norma**: Una norma negativa no es una "longitud" en el sentido usual.

3. **Inversa**: Calcular $g^{\mu\nu}$ requiere cuidado.

## Ejercicios

### Ejercicio 1

Calcule la inversa de $\eta_{\mu\nu} = \text{diag}(-1, 1, 1)$.

### Ejercicio 2

Exprese la condicion de que un vector sea nulo.

### Ejercicio 3

Calcule $\|v\|$ para $v = (1, 1, 0)$ con $\eta$.

### Ejercicio 4

Exprese la metrica de Schwarzschild en coordenadas $(t, r, \theta, \phi)$.

### Ejercicio 5

Determine el tipo de $v = (1, 0, 0, 0)$.

### Ejercicio 6

Exprese la metrica conforme general.

### Ejercicio 7

Calcule la signatura de Minkowski 4D.

### Ejercicio 8

Exprese el intervalo $ds^2$.

### Ejercicio 9

Calcule la inversa de Schwarzschild.

### Ejercicio 10

Exprese la condicion de vector unitario.

### Ejercicio 11

Calcule el determinante de $\eta$.

### Ejercicio 12

Exprese la derivada covariante con $\eta$.

### Ejercicio 13

Calcule la distancia entre eventos nulos.

### Ejercicio 14

Exprese el principio de equivalencia.

### Ejercicio 15

Calcule la metrica de FLRW.

## Soluciones

### Solucion 1

$\eta^{\mu\nu} = \text{diag}(-1, 1, 1)$.

### Solucion 2

$g_{\mu\nu} v^\mu v^\nu = 0$

### Solucion 3

$\|v\|^2 = -1\cdot 1^2 + 1\cdot 1^2 + 1\cdot 0^2 = 0$ (nulo)

### Solucion 4

$g = \text{diag}(-(1-2M/r), (1-2M/r)^{-1}, r^2, r^2\sin^2\theta)$

### Ejercicio 5

Es timelike: $\|v\|^2 = -1 < 0$.

### Solucion 6

$g_{ij} = \Omega^2 \hat{g}_{ij}$

### Solucion 7

Una dimension temporal, tres espaciales.

### Solucion 8

$ds^2 = g_{\mu\nu}dx^\mu dx^\nu$

### Solucion 9

$g^{tt} = -(1-2M/r)^{-1}$, $g^{rr} = 1-2M/r$, $g^{\theta\theta} = 1/r^2$, $g^{\phi\phi} = 1/(r^2\sin^2\theta)$

### Solucion 10

$g_{\mu\nu} v^\mu v^\nu = \pm 1$

### Solucion 11

$\det(\eta) = -1$

### Solucion 12

$\nabla_\mu g_{\nu\rho} = 0$ (satisface Levi-Civita)

### Solucion 13

$d = 0$ (luz no viaja entre eventos nulos)

### Solucion 14

Localmente $g_{\mu\nu} \approx \eta_{\mu\nu}$

### Solucion 15

$ds^2 = -dt^2 + a(t)^2[\frac{dr^2}{1-kr^2} + r^2 d\Omega^2]$
