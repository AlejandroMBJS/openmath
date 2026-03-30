---
title: Método de Frobenius (Casos Logarítmicos)
description: Resolución de EDOs de segundo orden mediante series de potencias generalizadas cuando las raíces de la ecuación indicial difieren por un entero.
---

# Método de Frobenius: El Caso Logarítmico

El método de Frobenius nos permite encontrar soluciones en serie para EDOs de la forma $y'' + \frac{p(x)}{x}y' + \frac{q(x)}{x^2}y = 0$. La ecuación indicial $r(r-1) + p_0 r + q_0 = 0$ nos da dos raíces, $r_1$ y $r_2$.

Cuando $r_1 - r_2$ es un número entero (o cero), la segunda solución linealmente independiente suele requerir un término logarítmico.

## 1. Raíces Iguales ($r_1 = r_2 = r$)
Si la ecuación indicial tiene una raíz doble, la primera solución es la estándar:
$$y_1(x) = x^r \sum_{n=0}^\infty a_n x^n$$
La segunda solución siempre tiene la forma:
$$y_2(x) = y_1(x) \ln x + x^r \sum_{n=1}^\infty b_n x^n$$

## 2. Raíces que difieren por un entero ($r_1 - r_2 = N \in \mathbb{Z}^+$)
Este es el caso más complejo. La primera solución se obtiene con la raíz mayor $r_1$:
$$y_1(x) = x^{r_1} \sum_{n=0}^\infty a_n x^n$$
Para la segunda raíz $r_2$, intentamos la serie usual. Si los coeficientes divergen o se vuelven indeterminados, la segunda solución toma la forma:
$$y_2(x) = C y_1(x) \ln x + x^{r_2} \sum_{n=0}^\infty b_n x^n$$
Donde $C$ es una constante que puede ser cero en casos excepcionales (como en algunas funciones de Bessel de orden semi-entero), pero que generalmente es no nula.

---

## Procedimiento Práctico: El truco de la derivada
Una forma elegante de encontrar $y_2(x)$ sin resolver todos los coeficientes $b_n$ desde cero es definir la solución como función del parámetro $r$:
$$y(x, r) = x^r \sum_{n=0}^\infty a_n(r) x^n$$
Sustituimos en la EDO, dejando los coeficientes $a_n$ como funciones de $r$. El resultado será:
$$L[y(x, r)] = a_0 (r-r_1)(r-r_2) x^{r-2}$$

### Para raíces iguales ($r_1 = r_2$):
$$y_2(x) = \left. \frac{\partial y(x, r)}{\partial r} \right|_{r=r_1}$$

### Para raíces con diferencia entera ($r_1 - r_2 = N$):
Se define $b_n(r) = (r-r_2)a_n(r)$ para evitar la divergencia, y la solución es:
$$y_2(x) = \left. \frac{\partial [(r-r_2)y(x, r)]}{\partial r} \right|_{r=r_2}$$

---

## Importancia en Física
Este caso logarítmico es el que da origen a las **Funciones de Bessel de segunda especie** $Y_n(x)$ (o funciones de Neumann). 
Sin el término logarítmico, no tendríamos una base completa de soluciones para problemas con simetría cilíndrica, como los modos de vibración de una membrana circular o la propagación de ondas en guías de onda.
