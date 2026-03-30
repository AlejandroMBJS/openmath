---
title: Cálculo de Variaciones
description: Funcionales, la ecuación de Euler-Lagrange y el principio de mínima acción en física.
---

# Cálculo de Variaciones

En cálculo ordinario buscamos puntos que minimizan funciones $f(x)$. En física, a menudo buscamos **funciones** que minimizan **integrales**. Estas integrales de funciones se llaman **Funcionales**.

## El Funcional de Acción
Un funcional típico tiene la forma:
$$J[y] = \int_{x_1}^{x_2} L(x, y, y') dx$$
Buscamos la función $y(x)$ que hace que $J$ sea estacionario (mínimo, máximo o punto de silla).

## La Ecuación de Euler-Lagrange
La condición necesaria para que $y(x)$ sea un extremo del funcional es que satisfaga la ecuación diferencial:
$$\frac{\partial L}{\partial y} - \frac{d}{dx} \left( \frac{\partial L}{\partial y'} \right) = 0$$

---

## Aplicaciones en Física

1. **Mecánica Lagrangiana:**
   Si definimos $L = T - V$ (Energía cinética menos potencial), la trayectoria de una partícula es la que minimiza la acción $S = \int L dt$. Las ecuaciones de Euler-Lagrange son exactamente las leyes de Newton.
2. **Óptica (Principio de Fermat):**
   La luz sigue el camino que minimiza el tiempo de viaje $t = \int \frac{n}{c} ds$. Esto deriva las leyes de reflexión y refracción.
3. **Geodésicas:**
   En relatividad, una partícula libre sigue el camino de longitud extrema en un espacio curvo: $\delta \int ds = 0$.

## Variaciones con Restricciones
Si queremos minimizar $J[y]$ sujeto a una restricción $\int G[y] dx = C$, usamos **Multiplicadores de Lagrange** $\lambda$:
$$\frac{\partial}{\partial y}(L + \lambda G) - \frac{d}{dx} \left( \frac{\partial}{\partial y'}(L + \lambda G) \right) = 0$$
*Física:* Esto resuelve problemas como la **Catenaria** (forma de una cuerda colgante bajo gravedad con longitud fija).
