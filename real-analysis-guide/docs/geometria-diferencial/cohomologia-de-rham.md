---
title: Cohomología de de Rham
description: Cómo las formas diferenciales detectan la topología global de una variedad a través del núcleo y la imagen de la derivada exterior.
---

# Cohomología de de Rham

La propiedad $d^2 = 0$ de la derivada exterior tiene una consecuencia profunda: permite usar el cálculo para detectar la forma global (topología) de un espacio.

## Formas Cerradas y Exactas

1. **Formas Cerradas ($\text{ker } d$):** Una forma $\omega$ es cerrada si $d\omega = 0$. Representan campos que "conmutan" o no tienen fuentes locales de orden superior.
2. **Formas Exactas ($\text{im } d$):** Una forma $\omega$ es exacta si existe una forma $\eta$ tal que $\omega = d\eta$. Representan campos que son derivados de algo más simple (como un campo conservativo que viene de un potencial).

Como $d(d\eta) = 0$, **toda forma exacta es automáticamente cerrada**. 

### La Pregunta Fundamental:
¿Es toda forma cerrada exacta? 
- En un espacio "sin agujeros" (como $\mathbb{R}^n$), la respuesta es **SÍ** (Lema de Poincaré).
- En un espacio con agujeros (como un toro o un anillo), hay formas cerradas que **NO** son exactas. Estas formas "detectan" los agujeros.

---

## Definición del Grupo de Cohomología

El **k-ésimo grupo de cohomología de de Rham** se define como el espacio vectorial de las formas cerradas módulo las formas exactas:

$$H_{dR}^k(M) = \frac{\text{Formas cerradas de orden } k}{\text{Formas exactas de orden } k}$$

### Significado Físico:
La dimensión de $H_{dR}^k(M)$ se llama el **k-ésimo número de Betti** ($b_k$).
- $b_0$: Número de componentes conexas del espacio.
- $b_1$: Número de agujeros "unidimensionales" (como el de una dona).
- $b_2$: Número de cavidades "bidimensionales" (como el interior de una pelota).

---

## Ejemplo: El Plano con un Agujero ($M = \mathbb{R}^2 \setminus \{0\}$)
Consideremos la 1-forma en coordenadas polares:
$$\omega = d\theta = \frac{-y dx + x dy}{x^2 + y^2}$$
1. **Es cerrada:** $d\omega = 0$ en todo punto de $M$.
2. **¿Es exacta?** Si fuera exacta, $\omega = df$ para alguna función $f$. Pero la integral de $\omega$ alrededor del origen es $2\pi \neq 0$. Por el Teorema de Stokes, si fuera exacta, la integral debería ser cero.
3. **Conclusión:** $\omega$ representa un elemento no nulo de $H_{dR}^1(M)$. El "agujero" en el origen impide que $\omega$ tenga un potencial global.

## Importancia en Física
La cohomología de de Rham es el lenguaje natural para:
- **Efecto Aharonov-Bohm:** Donde un campo magnético encerrado en una región prohibida afecta la fase de una partícula debido a la topología no trivial del espacio.
- **Teorías de Gauge:** La existencia de monopolos magnéticos o instantones depende de que ciertos grupos de cohomología sean no triviales.
- **Termodinámica:** Las formas exactas corresponden a funciones de estado, mientras que las formas cerradas no exactas corresponden a calor y trabajo (procesos que dependen del camino).
