---
title: Ecuaciones Integrales
description: Ecuaciones de Fredholm y Volterra, su conexión con las funciones de Green y teoría de dispersión.
---

# Ecuaciones Integrales

A diferencia de las ecuaciones diferenciales, donde la incógnita está bajo una derivada, en una **Ecuación Integral** la incógnita $\psi(x)$ aparece dentro de una integral.

## Clasificación

1. **Fredholm (Límites fijos):** $\psi(x) = f(x) + \lambda \int_a^b K(x, t) \psi(t) dt$.
   - $K(x, t)$ se llama el **Kernel** de la ecuación.
2. **Volterra (Límites variables):** $\psi(x) = f(x) + \lambda \int_a^x K(x, t) \psi(t) dt$.
   - Típicas de procesos que dependen del tiempo (causalidad).

---

## Conexión con Funciones de Green

Toda EDO con condiciones de frontera se puede convertir en una ecuación integral. Si tenemos $L\psi = f$, la solución formal es:
$$\psi(x) = \int G(x, x') f(x') dx'$$
Si el problema tiene un término dependiente de $\psi$, como $(L + V)\psi = f$, se convierte en una ecuación de Fredholm:
$$\psi(x) = \psi_0(x) - \int G(x, x') V(x') \psi(x') dx'$$

## Aplicación: Teoría de Dispersión (Scattering)
La famosa **Ecuación de Lippmann-Schwinger** en mecánica cuántica es una ecuación integral de Fredholm de segunda especie. Describe cómo una onda plana incidente se deforma al interactuar con un potencial $V$:
$$|\psi\rangle = |\phi\rangle + \frac{1}{E - H_0 + i\epsilon} V |\psi\rangle$$
Esta forma es mucho más poderosa que la ecuación de Schrödinger diferencial para tratar estados no ligados (colisiones).

## Series de Neumann
Una forma de resolver estas ecuaciones es iterando (aproximación sucesiva):
$$\psi = f + \lambda Kf + \lambda^2 K^2f + ...$$
En física de partículas, esta serie es la base de los **Diagramas de Feynman** (la serie de Born).
