---
title: Teorema de Wigner-Eckart
description: Separación de la geometría (simetría) de la física (dinámica) en el cálculo de elementos de matriz mecanocuánticos.
---

# El Teorema de Wigner-Eckart

En mecánica cuántica y espectroscopía, constantemente necesitamos calcular "elementos de matriz" de la forma $\langle \alpha', j', m' | T_q^{(k)} | \alpha, j, m \rangle$. Estas integrales determinan la probabilidad de que ocurra una transición (por ejemplo, que un átomo emita un fotón). 

Calcular estas integrales directamente es un infierno analítico. El **Teorema de Wigner-Eckart** nos salva al separar completamente la geometría del problema de la física del problema.

## Operadores Tensoriales Irreducibles
Un operador $T_q^{(k)}$ es un operador tensorial irreducible de rango $k$ (con $q = -k, ..., k$) si conmuta con los generadores del momento angular $\vec{J}$ de la misma forma que lo hacen los armónicos esféricos $Y_k^q$.
- Un escalar ($k=0$) tiene 1 componente: $T_0^{(0)}$.
- Un vector ($k=1$) tiene 3 componentes: $T_1^{(1)}, T_0^{(1)}, T_{-1}^{(1)}$.

## El Enunciado del Teorema
El teorema establece que el elemento de matriz de un operador tensorial irreducible puede factorizarse en dos partes:

$$ \langle \alpha', j', m' | T_q^{(k)} | \alpha, j, m \rangle = \frac{\langle \alpha', j' \| T^{(k)} \| \alpha, j \rangle}{\sqrt{2j'+1}} \cdot \langle j, k; m, q | j', m' \rangle $$

### 1. La Parte Geométrica (Coeficiente de Clebsch-Gordan)
El término $\langle j, k; m, q | j', m' \rangle$ es un **coeficiente de Clebsch-Gordan**. 
- Es un simple número que proviene de sumar el momento angular $j$ con el momento angular $k$ para obtener $j'$.
- **Es completamente independiente del operador físico $T$ y de la estructura radial del sistema $\alpha$.** Solo depende de la orientación espacial (los números $m, q, m'$).

### 2. La Parte Física (Elemento de Matriz Reducido)
El término $\langle \alpha', j' \| T^{(k)} \| \alpha, j \rangle$ es el **elemento de matriz reducido** (notación de doble barra $\| \|$).
- Contiene toda la física del problema (la integración radial, la naturaleza de la fuerza, etc.).
- **Es completamente independiente de los números cuánticos magnéticos $m, q, m'$.**

## El Poder del Teorema: Reglas de Selección
El coeficiente de Clebsch-Gordan $\langle j, k; m, q | j', m' \rangle$ vale exactamente **cero** a menos que se cumplan dos reglas estrictas de la geometría:

1. **Regla de Selección para $m$:**
   $$m' = m + q$$
2. **Regla de Selección para $j$ (Desigualdad Triangular):**
   $$|j - k| \le j' \le j + k$$

**Ejemplo - Transición Dipolar Eléctrica:**
La emisión de un fotón está mediada por el operador momento dipolar eléctrico $\vec{d} = e\vec{r}$, que es un tensor de rango $k=1$. 
De inmediato, Wigner-Eckart nos dice que la transición solo puede ocurrir si:
- $\Delta m = 0, \pm 1$ (porque $q$ puede ser $0, 1, -1$).
- $\Delta j = 0, \pm 1$ (porque $k=1$, y $j'$ debe estar entre $j-1$ y $j+1$). (Y prohíbe $0 \to 0$).

¡Hemos deducido las reglas de selección de la espectroscopía atómica sin resolver una sola integral!
