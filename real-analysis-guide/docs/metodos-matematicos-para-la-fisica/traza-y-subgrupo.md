---
title: Traza y Subgrupo
description: Traza como invariante por conjugacion y subgrupos como estructura interna para estudiar simetrias.
---

# Traza y Subgrupo

## Dos ideas que aparecen juntas en representaciones

La traza es un invariante matricial robusto; el subgrupo es una estructura algebraica interna estable. En fisica matematica ambos conceptos se encuentran de modo natural cuando una simetria se representa por matrices y se estudian restricciones a subconjuntos de transformaciones.

## Traza

Para una matriz cuadrada $A=(a_{ij})\in M_n(\mathbb{F})$, la traza es

$$
\operatorname{tr}(A)=\sum_{i=1}^n a_{ii}.
$$

## Propiedades fundamentales

- es lineal: $\operatorname{tr}(A+B)=\operatorname{tr}(A)+\operatorname{tr}(B)$;
- satisface $\operatorname{tr}(\lambda A)=\lambda\operatorname{tr}(A)$;
- es invariante por conjugacion:

$$
\operatorname{tr}(P^{-1}AP)=\operatorname{tr}(A);
$$

- cumple la identidad ciclica

$$
\operatorname{tr}(AB)=\operatorname{tr}(BA),
$$

siempre que los productos tengan sentido.

## Traza y espectro

Si $A$ tiene autovalores $\lambda_1,\dots,\lambda_n$ contados con multiplicidad algebraica, entonces

$$
\operatorname{tr}(A)=\sum_{i=1}^n \lambda_i.
$$

En particular, la traza resume una parte global del espectro sin identificar cada autovalor por separado.

## Traza y caracteres

Si $\rho:G\to \operatorname{GL}(V)$ es una representacion finito-dimensional, su caracter es la funcion

$$
\chi_\rho(g)=\operatorname{tr}(\rho(g)).
$$

Como la traza es invariante por conjugacion, el caracter es constante en clases conjugadas.

## Subgrupos

Un subconjunto $H\subseteq G$ es un subgrupo si:

- contiene el neutro;
- es estable por producto;
- es estable por inversos.

Equivalentemente, basta pedir que $H\neq\varnothing$ y que para todo $a,b\in H$ se cumpla

$$
ab^{-1}\in H.
$$

## Por que importan los subgrupos

Los subgrupos codifican simetrias parciales, restricciones y jerarquias internas. En fisica aparecen como estabilizadores, simetrias residuales o subgrupos compactos y discretos dentro de grupos continuos.

## Ejemplos

- $n\mathbb{Z}$ es subgrupo de $(\mathbb{Z},+)$;
- $SO(n)$ es subgrupo de $O(n)$;
- las rotaciones alrededor de un eje fijo forman un subgrupo de $SO(3)$ isomorfo a $SO(2)$;
- el conjunto de matrices diagonales invertibles es subgrupo de $GL(n)$.

## Restriccion a un subgrupo

Dada una representacion $\rho:G\to \operatorname{GL}(V)$ y un subgrupo $H\le G$, puede restringirse la accion:

$$
\rho|_H:H\to \operatorname{GL}(V).
$$

Esta operacion suele revelar estructuras invisibles al nivel del grupo grande o mostrar como una representacion irreducible de $G$ se vuelve reducible al restringirse a $H$.

## Conexion entre traza y subgrupo

La traza de la representacion restringida

$$
\chi_{\rho|_H}(h)=\operatorname{tr}(\rho(h))
$$

permite comparar la simetria total con la simetria parcial. Buena parte de la teoria de caracteres explota exactamente esta relacion.

## Cierre

La traza mide informacion global y estable bajo cambio de base. El subgrupo organiza simetrias internas y restricciones. Juntos forman una pareja conceptual central para pasar de matrices concretas a estructura de representaciones y simetrias fisicas.
