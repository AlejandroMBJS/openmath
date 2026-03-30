---
title: El tensor de Einstein
description: Definicion del tensor de Einstein, ecuaciones de campo de Einstein y significado fisico.
---

# El tensor de Einstein

## Motivacion e intuicion

El tensor de Einstein $G_{\mu\nu}$ es una combinacion especial del tensor de curvatura de Riemann y la metrica que tiene una propiedad crucial: su divergencia es automáticamente cero ($\nabla^\mu G_{\mu\nu} = 0$). Esta propiedad lo convierte en el candidato natural para escribir las ecuaciones de campo de la relatividad general.

## Definicion formal

El tensor de Einstein se define como:

$$G_{\mu\nu} = R_{\mu\nu} - \frac{1}{2} g_{\mu\nu} R$$

donde:
- $R_{\mu\nu}$ es el tensor de Ricci
- $R$ es la curvatura escalar
- $g_{\mu\nu}$ es la metrica

## Propiedades fundamentales

### Simetria

$$G_{\mu\nu} = G_{\nu\mu}$$

(Es un tensor simetrico de tipo $(0,2)$)

### Divergencia nula

$$\nabla^\mu G_{\mu\nu} = 0$$

Esta es la identidad de Bianchi contraida, automaticamente satisfecha.

### Traza

$$g^{\mu\nu} G_{\mu\nu} = -R + \frac{1}{2} g^{\mu\nu} g_{\mu\nu} R = -R + nR = (n-2)R$$

Para $n = 4$ dimensiones (espaciotempo):
$$g^{\mu\nu} G_{\mu\nu} = -R + 2R = R$$

Hmm, hay un error de cálculo. Veamos:

En 4D: $g^{\mu\nu} g_{\mu\nu} = 4$, entonces:
$$g^{\mu\nu} G_{\mu\nu} = R - \frac{1}{2}(4)R = R - 2R = -R$$

Es correcto: la traza es $-R$.

## Relacion con otras cantidades geometricas

### Tensor de Weyl

$$C_{\mu\nu\rho\sigma} = R_{\mu\nu\rho\sigma} - \frac{1}{2}(g_{\mu\rho} R_{\nu\sigma} - g_{\mu\sigma} R_{\nu\rho} - g_{\nu\rho} R_{\mu\sigma} + g_{\nu\sigma} R_{\mu\rho}) + \frac{1}{6}R(g_{\mu\rho} g_{\nu\sigma} - g_{\mu\sigma} g_{\nu\rho})$$

El tensor de Weyl representa la curvatura "intrínseca" - la parte que no puede eliminarse localmente.

### Identidades geometricas

- **Primera identidad de Bianchi**: $\nabla_{[\alpha} R_{\beta\gamma]\delta}^\epsilon = 0$
- **Segunda identidad de Bianchi**: $\nabla_{[\alpha} R_{\beta\gamma]\delta\epsilon} = 0$

## Ecuaciones de campo de Einstein

Las ecuaciones de campo son:

$$G_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu}$$

donde:
- $G$ es la constante gravitacional
- $c$ es la velocidad de la luz
- $T_{\mu\nu}$ es el tensor de energia-momento

Esta ecuación dice que la curvatura delespacio-tiempo (lado izquierdo) es igual a la densidad de energía (lado derecho).

## Casos particulares

### Vacío ($T_{\mu\nu} = 0$)

$$G_{\mu\nu} = 0 \quad \Rightarrow \quad R_{\mu\nu} = \frac{1}{2} g_{\mu\nu} R$$

En dimensiones > 2, esto implica $R_{\mu\nu} = 0$.

### Constante cosmológica

$$G_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu}$$

### Asintoticamente plano

En el infinito, $G_{\mu\nu} \to 0$.

## Componentes en metricas conocidas

### Metrica de Minkowski

$G_{\mu\nu} = 0$ (espacio plano)

### Metrica de Schwarzschild

En coordenadas de Schwarzschild:
$$G^t_{\ t} = G^r_{\ r} = 0, \quad G^\theta_{\ \theta} = G^\phi_{\ \phi} = 0$$

(metricas vacuum tiene $G_{\mu\nu} = 0$)

### Metrica de Kerr

Similar, con componentes más complejas.

### Metrica FLRW (Universo)

$$G_{\mu\nu} = \frac{3}{a^2}(\dot{a}^2 + k)g_{\mu\nu}$$

## Significado fisico

El tensor de Einstein representa la curvatura delespaciotiempo causada por la presencia de materia y energía. Donde hay masa, elespaciotiempo se curva; los objetos siguen geodesicas en esta métrica curvada.

## Errores comunes

1. **Confundir con el tensor de Riemann**: El Einstein es una contracción del Riemann.

2. **Olvidar la dimensión**: La fórmula de traza depende de la dimensión delespacio.

3. **No confundir con Ricci**: Ricci es parte del Einstein.

## Ejercicios

### Ejercicio 1

Calcule $G_{\mu\nu}$ para espacio plano de Minkowski.

### Ejercicio 2

Exprese el tensor de Einstein en terminos del Riemann.

### Ejercicio 3

Verifique la simetria $G_{\mu\nu} = G_{\nu\mu}$.

### Ejercicio 4

Calcule la traza del tensor de Einstein en 4D.

### Ejercicio 5

Derive la formula desde la definicion.

### Ejercicio 6

Exprese las ecuaciones de campo de Einstein.

### Ejercicio 7

Que significa $G_{\mu\nu} = 0$?

### Ejercicio 8

Calcule $G_{\mu\nu}$ para la metrica de Schwarzschild exterior.

### Ejercicio 9

Exprese la identidad de Bianchi contraida.

### Ejercicio 10

Cuantas componentes independientes tiene el Einstein en 4D?

### Ejercicio 11

Derive el tensor de Einstein desde el principio variacional.

### Ejercicio 12

Exprese el limite newtoniano de las ecuaciones de Einstein.

### Ejercicio 13

Calcule el tensor de Einstein para metricas conformemente planas.

### Ejercicio 14

Exprese la condición de conservación $\nabla^\mu T_{\mu\nu} = 0$.

### Ejercicio 15

Calcule el Einstein para la metrica de Friedmann-Lemaître-Robertson-Walker.

## Soluciones

### Solucion 1

En Minkowski: $R_{\mu\nu} = 0$, $R = 0$, luego $G_{\mu\nu} = 0$.

### Solucion 2

$G_{\mu\nu} = R_{\mu\nu} - \frac{1}{2}g_{\mu\nu}R$

### Solucion 3

$R_{\mu\nu} = R_{\nu\mu}$ y $g_{\mu\nu} = g_{\nu\mu}$, luego $G_{\mu\nu} = G_{\nu\mu}$.

### Solucion 4

$g^{\mu\nu}G_{\mu\nu} = -R$ en 4D.

### Solucion 5

$G_{\mu\nu} = R_{\mu\nu} - \frac{1}{2}g_{\mu\nu}R = (R_{\mu\nu} - \frac{1}{2}g_{\mu\nu}R)$

### Solucion 6

$G_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu}$

### Solucion 7

$ G_{\mu\nu} = 0$ significa ausencia de materia (vacío) - pero el espacio puede seguir curvado (ej. Schwarzschild).

### Solucion 8

$G_{\mu\nu} = 0$ para la solución vacuum de Schwarzschild.

### Solucion 9

$\nabla^\mu G_{\mu\nu} = 0$

### Solucion 10

$n(n+1)/2 - 1 = 10 - 1 = 9$ componentes (despues de imponer divergencia nula)

### Solucion 11

Variando la accion de Einstein-Hilbert:
$\delta S = \int (R_{\mu\nu} - \frac{1}{2}g_{\mu\nu}R)\delta g^{\mu\nu}\sqrt{-g} d^4x$

### Solucion 12

$G_{00} \approx \nabla^2 \Phi$ donde $\Phi$ es el potencial gravitacional newtoniano.

### Solucion 13

Si $g_{\mu\nu} = \Omega^2 \eta_{\mu\nu}$, entonces $G_{\mu\nu} = 0$ en 2D pero no en general.

### Solucion 14

$\nabla^\mu T_{\mu\nu} = 0$ (conservación de energia-momento)

### Solucion 15

Para FLRW: $G_{\mu\nu} = 3(\dot{a}^2 + k/a^2)g_{\mu\nu}$ (en coordenadas comóviles)
