---
title: Ejercicios sobre tensores
description: Coleccion de problemas resueltos sobre calculo tensorial, algebra tensorial y aplicaciones.
---

# Ejercicios sobre tensores

## Ejercicio 1: Convenção de soma

Express as seguintes somas usando a Convenção de Soma de Einstein:

(a) $\sum_{i=1}^3 a_i b_i$

(b) $\sum_{j=1}^n \sum_{i=1}^n A_{ij} x_i y_j$

(c) $\sum_{k=1}^3 T_{ijk} u^k$

**Solução**

(a) $a_i b_i$

(b) $A_{ij} x_i y_j$

(c) $T_{ijk} u^k$

## Ejercicio 2: Metrica euclidea

Calcule o elemento de linha em coordenadas polares.

**Solução**

Com $x = r\cos\theta$, $y = r\sin\theta$:

$dx = \cos\theta\, dr - r\sin\theta\, d\theta$

$dy = \sin\theta\, dr + r\cos\theta\, d\theta$

$ds^2 = dx^2 + dy^2 = dr^2 + r^2 d\theta^2$

## Ejercicio 3: Elevação de indices

Se $v = (v_1, v_2)$ em $\mathbb{R}^2$ com metrica $\delta_{ij}$, calcule as componentes contravariantes.

**Solução**

$v^i = g^{ij} v_j = \delta^{ij} v_j = v_j$

Como $\delta^{ij} = \delta_{ij}$: $v^1 = v_1$, $v^2 = v_2$.

## Ejercicio 4: Tensor de Riemann

Verifique que $R^i_{\ jkl} = 0$ em coordenadas cartesianas euclideas.

**Solução**

Em coordenadas cartesianas: $\Gamma^i_{jk} = 0$

$R^i_{\ jkl} = \partial_k \Gamma^i_{jl} - \partial_l \Gamma^i_{jk} + \Gamma^i_{km}\Gamma^m_{jl} - \Gamma^i_{lm}\Gamma^m_{jk}$

$= 0 - 0 + 0 - 0 = 0$

## Ejercicio 5: Christoffel en polares

Calcule os símbolos de Christoffel para $g_{ij} = \text{diag}(1, r^2)$.

**Solução**

$g_{rr} = 1$, $g_{\theta\theta} = r^2$, $g^{rr} = 1$, $g^{\theta\theta} = 1/r^2$

$\Gamma^r_{\theta\theta} = -\frac{1}{2}g^{rr}\partial_r g_{\theta\theta} = -\frac{1}{2}(1)(2r) = -r$

$\Gamma^\theta_{r\theta} = \Gamma^\theta_{\theta r} = \frac{1}{2}g^{\theta\theta}\partial_r g_{\theta\theta} = \frac{1}{2}(1/r^2)(2r) = 1/r$

Os demás são zero.

## Ejercicio 6: Derivada covariante

Calcule $\nabla_j v^i$ para un vector contravariante.

**Solución**

$\nabla_j v^i = \partial_j v^i + \Gamma^i_{jk} v^k$

## Ejercicio 7: Geodesica

Escreva a equação de geodesica em notação tensorial.

**Solución**

$\frac{d^2 x^i}{d\tau^2} + \Gamma^i_{jk}\frac{dx^j}{d\tau}\frac{dx^k}{d\tau} = 0$

## Ejercicio 8: Tensor de Ricci

Calcule $R_{ij}$ desde $R^i_{\ jkl}$.

**Solución**

$R_{ij} = R^k_{\ ikj}$

## Ejercicio 9: Metrica de Schwarzschild

Exprese a metrica de Schwarzschild.

**Solución**

$ds^2 = -(1-2GM/r)c^2dt^2 + (1-2GM/r)^{-1}dr^2 + r^2d\Omega^2$

## Ejercicio 10: Producto interno

Calcule $g_{ij} u^i v^j$ para $u = (1,0,1)$ e $v = (0,1,0)$ em $\mathbb{R}^3$.

**Solución**

$g_{ij} u^i v^j = \delta_{ij} u^i v^j = 1\cdot0 + 0\cdot1 + 1\cdot0 = 0$

## Ejercicio 11: Simetria del tensor

Cuántas componentes independientes tiene un tensor simétrico $S_{ij}$ en 3D?

**Solución**

$\frac{n(n+1)}{2} = \frac{3(4)}{2} = 6$

## Ejercicio 12: Transformación de coordenadas

Transforme o vetor $v = (1, 0)$ de cartesianas para polares na origem.

**Solución**

$v^r = v_x\cos\theta + v_y\sin\theta = 1\cdot\cos0 + 0\cdot\sin0 = 1$

$v^\theta = -v_x\frac{\sin\theta}{r} + v_y\frac{\cos\theta}{r} = -1\cdot\frac{\sin0}{1} + 0\cdot\frac{\cos0}{1} = 0$

## Ejercicio 13: Levi-Civita

Calcule $\varepsilon_{ijk}\varepsilon^{ijk}$.

**Solución**

$\varepsilon_{ijk}\varepsilon^{ijk} = 3! = 6$

## Ejercicio 14: Traça

Calcule a traça de $A_{ij} = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$.

**Solución**

$A^i_i = A_{11} + A_{22} = 1 + 4 = 5$

## Ejercicio 15: Tensor de Einstein

Exprese o tensor de Einstein.

**Solución**

$G_{\mu\nu} = R_{\mu\nu} - \frac{1}{2}g_{\mu\nu}R$

## Ejercicio 16: Bianchi

Exprese a identidade de Bianchi.

**Solución**

$\nabla_{[\alpha} R_{\beta\gamma]\delta}^\epsilon = 0$

## Ejercicio 17: Determinante da metrica

Calcule $\det(g)$ para $g_{ij} = \text{diag}(1, r^2)$.

**Solución**

$\det(g) = 1 \cdot r^2 = r^2$

## Ejercicio 18: Conexão de Levi-Civita

Derive a fórmula para $\Gamma^i_{jk}$.

**Solución**

$\Gamma^i_{jk} = \frac{1}{2}g^{il}(\partial_j g_{kl} + \partial_k g_{jl} - \partial_l g_{jk})$

## Ejercicio 19: Norma

Calcule $\|v\|$ para $v = (3, 4)$ com metrica euclidea.

**Solución**

$\|v\| = \sqrt{\delta_{ij}v^i v^j} = \sqrt{3^2 + 4^2} = 5$

## Ejercicio 20: Variedad plana

Exprese a condição para que una variedad sea localmente plana.

**Solución**

$R^i_{\ jkl} = 0$ em todo punto.
