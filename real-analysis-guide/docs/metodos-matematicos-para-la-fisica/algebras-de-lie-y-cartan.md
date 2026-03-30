---
title: Álgebras de Lie y Clasificación de Cartan
description: Estructura de las álgebras de Lie semisimples y su clasificación mediante diagramas de Dynkin y raíces.
---

# Álgebras de Lie y Clasificación de Cartan

Mientras que el Grupo de Lie representa la simetría global, el **Álgebra de Lie** ($\mathfrak{g}$) representa la simetría local infinitesimal. Es el espacio tangente a la identidad del grupo.

## Definición y Corchete de Lie
Un álgebra de Lie es un espacio vectorial equipado con un producto bilineal $[\cdot, \cdot]$ (corchete de Lie) que satisface:
1. **Antisimetría:** $[X, Y] = -[Y, X]$
2. **Identidad de Jacobi:** $[X, [Y, Z]] + [Y, [Z, X]] + [Z, [X, Y]] = 0$

## Generadores y Constantes de Estructura
Si $\{T_a\}$ es una base del álgebra:
$$[T_a, T_b] = i f_{abc} T_c$$
Donde $f_{abc}$ son las constantes de estructura, que determinan completamente la geometría del grupo localmente.

---

## Subálgebra de Cartan y Raíces
Para entender la estructura de un álgebra semisimple (como $SU(n)$ o $SO(n)$), buscamos el conjunto máximo de generadores que conmutan entre sí.

1. **Subálgebra de Cartan ($\mathfrak{h}$):** El conjunto $\{H_i\}$ tal que $[H_i, H_j] = 0$. Su dimensión es el **rango** del álgebra.
2. **Operadores de Escala (Roots):** Los generadores restantes $E_\alpha$ satisfacen:
$$[H_i, E_\alpha] = \alpha_i E_\alpha$$
Donde el vector $\vec{\alpha}$ es la **raíz**. Esto es idéntico a los operadores de subida/bajada $J_\pm$ en $SU(2)$.

---

## Clasificación de Cartan
Cartan demostró que todas las álgebras de Lie simples de dimensión finita sobre $\mathbb{C}$ pertenecen a una de las siguientes familias (Clásicas) o son una de las 5 excepcionales:

### Familias Clásicas
- **$A_n$ ($\mathfrak{sl}(n+1, \mathbb{C})$):** Relacionada con $SU(n+1)$. Rango $n$.
- **$B_n$ ($\mathfrak{so}(2n+1, \mathbb{C})$):** Rotaciones en dimensiones impares.
- **$C_n$ ($\mathfrak{sp}(2n, \mathbb{C})$):** Álgebras simplécticas (mecánica hamiltoniana).
- **$D_n$ ($\mathfrak{so}(2n, \mathbb{C})$):** Rotaciones en dimensiones pares.

### Álgebras Excepcionales
Aparecen en teorías unificadas avanzadas y teoría de cuerdas:
- $G_2, F_4, E_6, E_7, E_8$.

---

## Diagramas de Dynkin
Cada álgebra se puede representar gráficamente mediante sus raíces simples. Los puntos representan raíces y las líneas el ángulo entre ellas. 
- $SU(3)$ (rango 2) se representa como dos puntos unidos por una línea (ángulo de 120°).
- $SU(2)$ es simplemente un punto.

## Importancia en Física de Partículas
En el Modelo Estándar, las partículas se clasifican según **representaciones** de estas álgebras:
- El Isospín y el Espín son representaciones de $SU(2)$.
- El Color (QCD) es una representación de $SU(3)$.
- Las teorías de Gran Unificación (GUT) a menudo usan $SU(5)$ o $SO(10)$.
