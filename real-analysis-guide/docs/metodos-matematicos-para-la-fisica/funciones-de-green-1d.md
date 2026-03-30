---
title: Funciones de Green en 1D
description: Construcción formal de la función de Green para problemas de contorno en una dimensión.
---

# Funciones de Green en 1D

En física, rara vez resolvemos ecuaciones homogéneas ($L\psi = 0$). Lo que nos interesa es la respuesta a una fuente: $L\psi = f(x)$. La **Función de Green** $G(x, x')$ es la respuesta del sistema a una fuente puntual (una Delta de Dirac):
$$L G(x, x') = \delta(x - x')$$

## El Método de Construcción Formal

Para un operador diferencial de segundo orden $L = p_2(x)\frac{d^2}{dx^2} + p_1(x)\frac{d}{dx} + p_0(x)$, la función $G(x, x')$ se construye siguiendo cuatro reglas fundamentales:

### 1. Ecuación Homogénea
Para $x \neq x'$, la función de Green satisface la ecuación homogénea:
$$L G(x, x') = 0$$
Por lo tanto, $G$ debe ser una combinación lineal de las soluciones homogéneas $y_1(x)$ y $y_2(x)$:
- $G_< (x, x') = a_1 y_1(x) + a_2 y_2(x)$ para $x < x'$
- $G_> (x, x') = b_1 y_1(x) + b_2 y_2(x)$ para $x > x'$

### 2. Condiciones de Frontera
$G_< (x, x')$ debe satisfacer las condiciones de frontera en el extremo izquierdo ($x=a$) y $G_> (x, x')$ en el extremo derecho ($x=b$).

### 3. Continuidad en el punto fuente
La función de Green debe ser continua en $x = x'$:
$$\lim_{\epsilon \to 0} [G(x'+\epsilon, x') - G(x'-\epsilon, x')] = 0$$

### 4. La Condición de Salto (The Jump Condition)
Esta es la regla más importante. Al integrar la EDO sobre el intervalo $[x'-\epsilon, x'+\epsilon]$, la primera derivada de $G$ presenta una discontinuidad (salto) igual al inverso del coeficiente líder del operador:
$$\left. \frac{dG}{dx} \right|_{x'+\epsilon} - \left. \frac{dG}{dx} \right|_{x'-\epsilon} = \frac{1}{p_2(x')}$$

---

## Ejemplo: El Operador de Schrödinger Libre
Consideremos $L = -\frac{d^2}{dx^2}$ en el intervalo $[0, L]$ con condiciones de Dirichlet $y(0) = y(L) = 0$.

1. **Soluciones homogéneas:** $y_1(x) = x$, $y_2(x) = L-x$.
2. **Forma de G:**
   - $G_< (x, x') = A(x') x$ (satisface $G(0)=0$)
   - $G_> (x, x') = B(x') (L-x)$ (satisface $G(L)=0$)
3. **Continuidad:** $A(x') x' = B(x') (L-x') \implies B(x') = A(x') \frac{x'}{L-x'}$.
4. **Salto:** $\frac{dG_>}{dx} - \frac{dG_<}{dx} = \frac{1}{-1} = -1$.
   - $-B(x') - A(x') = -1 \implies A(x') + B(x') = 1$.

Resolviendo el sistema:
$$G(x, x') = \begin{cases} \frac{x(L-x')}{L} & 0 \le x \le x' \\ \frac{x'(L-x)}{L} & x' \le x \le L \end{cases}$$

## Propiedades Clave
- **Simetría:** Para operadores autoadjuntos, $G(x, x') = G(x', x)$.
- **Espectro:** La función de Green se puede expresar como una suma sobre los autoestados $\psi_n$:
$$G(x, x') = \sum_n \frac{\psi_n(x)\psi_n^*(x')}{\lambda_n}$$
Esta relación conecta las Partes I (Matrices) y V (Green) del Hassani.
