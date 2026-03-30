---
title: Ecuación Hipergeométrica
description: La ecuación diferencial unificadora de las funciones especiales de la física matemática.
---

# La Ecuación Hipergeométrica

La ecuación diferencial hipergeométrica de Gauss es una EDO de segundo orden que tiene tres puntos singulares regulares en $0, 1$ y $\infty$. Su importancia radica en que **casi todas las funciones especiales de la física son casos particulares de esta ecuación.**

## La Ecuación Estándar
Se define por tres parámetros complejos $a, b, c$:
$$x(1-x) \frac{d^2y}{dx^2} + [c - (a+b+1)x] \frac{dy}{dx} - aby = 0$$

## La Función Hipergeométrica $_2F_1$
La solución regular en $x=0$ (suponiendo que $c$ no es un entero no positivo) se denota como $_2F_1(a, b; c; x)$ y se define mediante la serie:
$$_2F_1(a, b; c; x) = \sum_{n=0}^\infty \frac{(a)_n (b)_n}{(c)_n} \frac{x^n}{n!}$$
Donde $(q)_n$ es el símbolo de Pochhammer (factorial creciente). La serie converge para $|x| < 1$.

---

## Casos Particulares en Física

Cambiando los parámetros $a, b, c$ y realizando transformaciones de variable, recuperamos:

1. **Polinomios de Legendre:**
   $$P_n(x) = _2F_1(-n, n+1; 1; \frac{1-x}{2})$$
2. **Funciones de Bessel (vía límite):**
   Las funciones de Bessel se obtienen mediante un proceso de "confluencia", donde dos puntos singulares (1 e $\infty$) chocan. Esto da lugar a la **Ecuación Hipergeométrica Confluente**.
3. **Polinomios de Chebyshev:**
   $$T_n(x) = _2F_1(-n, n; 1/2; \frac{1-x}{2})$$

---

## Ecuaciones de Fuchs
Una ecuación diferencial cuyas únicas singularidades son puntos singulares regulares se llama **Ecuación de Fuchs**.
- La ecuación hipergeométrica es la ecuación de Fuchs más general con **3 singularidades**.
- El teorema de Riemann establece que cualquier EDO con 3 puntos singulares regulares puede transformarse en la ecuación hipergeométrica.

### Importancia en Cosmología y Cuántica
En problemas como la dispersión en potenciales de tipo Pöschl-Teller o el estudio de perturbaciones en universos en expansión (FRW), las soluciones son naturalmente funciones hipergeométricas debido a la estructura de las singularidades del espacio-tiempo o del potencial.
