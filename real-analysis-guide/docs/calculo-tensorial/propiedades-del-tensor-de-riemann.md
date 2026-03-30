---
title: Propiedades del tensor de Riemann
description: Simetrias del tensor de curvatura, identidades de Bianchi, contractions y componentes independientes.
---

# Propiedades del tensor de Riemann

## Motivacion e intuicion

El tensor de Riemann tiene numerosas propiedades de simetria que reducen significativamente el numero de componentes independientes. Comprender estas simetrias es esencial para trabajar con la curvatura de variedades riemannianas.

## Simetrias fundamentales

### Simetria 1: Antisimetria en el primer par de indices

$$R_{ijkl} = -R_{jikl}$$

### Simetria 2: Antisimetria en el ultimo par

$$R_{ijkl} = -R_{ijlk}$$

### Simetria 3: Intercambio de pares

$$R_{ijkl} = R_{klij}$$

### Simetria 4: Cero si hay indices repetidos

$$R_{iijk} = 0$$

## Primera identidad de Bianchi

$$\nabla_{[i} R_{jk]l}^{\ m} = 0$$

Expandida:

$$\nabla_i R_{jkl}^{\ m} + \nabla_j R_{kil}^{\ m} + \nabla_k R_{ijl}^{\ m} = 0$$

## Segunda identidad de Bianchi

$$\nabla_{[i} R_{jk]lm} = 0$$

## Identidades de contractacion

### Identidad de Ricci

$$\nabla^i R_{ij} = \frac{1}{2} \partial_j R$$

### Bianchi contraida

$$\nabla^i G_{ij} = 0$$

donde $G_{ij}$ es el tensor de Einstein.

## Numero de componentes independientes

### En n dimensiones

$$N = \frac{n^2(n^2 - 1)}{12}$$

### Tabla

| Dimension | Componentes |
|-----------|--------------|
| 2 | 1 |
| 3 | 6 |
| 4 | 20 |
| 5 | 45 |
| 6 | 84 |

## Contracciones del tensor de Riemann

### Tensor de Ricci

$$R_{ij} = R^{k}_{\ ikj}$$

### Curvatura escalar

$$R = g^{ij} R_{ij}$$

### Contractacion doble

$$R_{ijkl} g^{ik} g^{jl} = 2R$$

## Propiedades adicionales

### Simetria de pares

$$R_{ijkl} = R_{klij}$$

### Reload con Weyl

El tensor de Weyl $C_{ijkl}$ es la parte completamente traceless del Riemann:

$$C_{ijkl} = R_{ijkl} - \frac{1}{2}(g_{ik}R_{jl} - g_{il}R_{jk} - g_{jk}R_{il} + g_{jl}R_{ik}) + \frac{R}{6}(g_{ik}g_{jl} - g_{il}g_{jk})$$

## Errores comunes

1. **Indices**: Las simetrias reducen los indices libres.

2. **Bianchi**: Esencial pero a menudo olvidad.

3. **Contractar**: No todas las contractaciones son independientes.

## Ejercicios

### Ejercicio 1

Cuantas simetrias independientes tiene el tensor de Riemann?

### Ejercicio 2

Verifique la simetria $R_{ijkl} = R_{klij}$.

### Ejercicio 3

Exprese la primera identidad de Bianchi.

### Ejercicio 4

Cuantas componentes tiene en 4D?

### Ejercicio 5

Derive el tensor de Ricci desde el Riemann.

### Ejercicio 6

Exprese la identidad de Ricci.

### Ejercicio 7

Calcule $R_{ijkl}g^{ik}g^{jl}$.

### Ejercicio 8

Exprese el tensor de Weyl.

### Ejercicio 9

Verifique $R_{ijkl} = -R_{jikl}$.

### Ejercicio 10

Exprese Bianchi contraida.

### Ejercicio 11

Calcule el numero de componentes en 3D.

### Ejercicio 12

Derive la formula de contractacion.

### Ejercicio 13

Exprese la condicion de que $R_{ijkl} = 0$.

### Ejercicio 14

Calcule Bianchi para el caso $i=j=k$.

### Ejercicio 15

Exprese la relacion entre Bianchi y Einstein.

## Soluciones

### Solucion 1

Hay 4 simetrias basicas + 1 identidad de Bianchi.

### Solucion 2

Por definicion y propiedades de Christoffel.

### Solucion 3

$\nabla_i R_{jkl}^m + \nabla_j R_{kil}^m + \nabla_k R_{ijl}^m = 0$

### Solucion 4

$20$ componentes.

### Solucion 5

$R_{ij} = R^k_{\ ikj}$

### Solucion 6

$\nabla^i R_{ij} = \frac{1}{2}\partial_j R$

### Solucion 7

$2R$

### Solucion 8

$C_{ijkl} = R_{ijkl} - \frac{1}{2}(g_{ik}R_{jl} - g_{il}R_{jk} - g_{jk}R_{il} + g_{jl}R_{ik}) + \frac{R}{6}(g_{ik}g_{jl} - g_{il}g_{jk})$

### Solucion 9

Directamente de la definicion de $\Gamma$.

### Solucion 10

$\nabla^\mu G_{\mu\nu} = 0$

### Solucion 11

$6$ componentes.

### Solucion 12

Contractando indices apropiadamente.

### Solucion 13

Significa que la variedad es localmente plana (paralela).

### Solucion 14

Se anula identicamente.

### Solucion 15

$G_{\mu\nu} = R_{\mu\nu} - \frac{1}{2}g_{\mu\nu}R$ satisface $\nabla^\mu G_{\mu\nu} = 0$ por Bianchi.
