---
title: Expansiones Asintóticas
description: Aproximación de integrales de oscilación rápida y el método del paso más pronunciado (Steepest Descent).
---

# Expansiones Asintóticas

En física aplicada, a menudo tenemos integrales de la forma $I(\lambda) = \int e^{\lambda f(t)} dt$ donde $\lambda$ es un parámetro muy grande. Resolver estas integrales exactamente es casi imposible, pero podemos encontrar su comportamiento **asintótico** (cuando $\lambda \to \infty$).

## 1. Método de Laplace
Si $f(t)$ tiene un máximo real en $t_0$, la mayor parte de la integral proviene de una pequeña región alrededor de $t_0$:
$$I(\lambda) \approx e^{\lambda f(t_0)} \sqrt{\frac{2\pi}{\lambda |f''(t_0)|}}$$
*Física:* Útil en mecánica estadística para calcular la energía libre en el límite termodinámico.

---

## 2. Método de la Fase Estacionaria
Si la integral es puramente oscilatoria $I(\lambda) = \int e^{i\lambda g(t)} dt$, las oscilaciones rápidas se cancelan en todas partes excepto donde la fase deja de cambiar: $g'(t_0) = 0$.
$$I(\lambda) \approx \sqrt{\frac{2\pi}{\lambda |g''(t_0)|}} e^{i\lambda g(t_0) \pm i\pi/4}$$
*Física:* Explica por qué la luz parece viajar en línea recta (límite de óptica geométrica) y es la base de la **Aproximación WKB** en mecánica cuántica.

---

## 3. Método del Paso más Pronunciado (Steepest Descent)
Es la generalización al plano complejo. Si tenemos una integral de contorno $\int e^{\lambda f(z)} dz$, deformamos el contorno para que pase por un punto de silla ($f'(z_0) = 0$) de tal forma que la parte imaginaria de $f(z)$ sea constante (fase constante) y la parte real decaiga lo más rápido posible.

### Aplicaciones de Élite:
- **Óptica:** Cálculo de patrones de arcoíris (Funciones de Airy).
- **Cuántica:** Evaluación de integrales de camino (Path Integrals) en el límite semiclásico.
- **Teoría de Cuerdas:** Cálculo de amplitudes de dispersión.
