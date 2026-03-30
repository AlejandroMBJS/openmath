---
title: Curvatura de una Superficie
description: Panorama unificado de curvaturas normal, principal, media y gaussiana en superficies inmersas.
---

# Curvatura de una Superficie

## De curvas a superficies

En una curva hay un unico invariante principal de doblado: la curvatura. En una superficie, el doblado depende de la direccion tangente elegida. Por eso la nocion de curvatura se vuelve mas rica.

## Curvatura normal

Para cada direccion tangente unitaria $v\in T_pS$, la superficie tiene una curvatura normal

$$
\kappa_n(v)=I(Sv,v).
$$

Esta cantidad depende de la direccion.

## Curvaturas principales

Los extremos de la curvatura normal se llaman curvaturas principales:

$$
\kappa_1,\qquad \kappa_2.
$$

Se alcanzan en las direcciones principales, que son autovectores del operador de forma.

## Curvatura gaussiana

El producto de las curvaturas principales define la curvatura gaussiana:

$$
K=\kappa_1\kappa_2.
$$

## Curvatura media

La media aritmetica define la curvatura media:

$$
H=\frac{\kappa_1+\kappa_2}{2}.
$$

La curvatura media aparece en problemas variacionales, superficies minimas y ecuaciones geometricas.

## Clasificacion local

- $K>0$: punto eliptico;
- $K<0$: punto hiperbolico;
- $K=0$: punto parabolico o plano segun el operador de forma.

## Intrinseco y extrinseco

La curvatura gaussiana resulta ser intrinseca por el teorema egregio, mientras que la curvatura media y las curvaturas normales dependen de la inmersion en el ambiente.

## Panorama conceptual

La curvatura de una superficie no es un solo numero sino una jerarquia de objetos:

- forma cuadratica direccional $\kappa_n$;
- espectro principal $\kappa_1,\kappa_2$;
- invariantes simetricos $H$ y $K$.

## Cierre

Hablar de curvatura de una superficie significa estudiar todo un sistema de invariantes derivados del operador de forma. Las curvaturas principal, media y gaussiana organizan esa informacion en distintos niveles geometricos.

## Ejercicios

### Ejercicio 1

Sea $S$ una superficie con $K > 0$ en todas partes. Demostrar que toda curvatura normal $\kappa_n(v)$ satisface $|\kappa_n(v)| \geq \sqrt{K}$ para toda dirección $v$ unitaria.

### Ejercicio 2

Sea $p$ un punto hiperbólico. Demostrar que las curvaturas principales tienen signos opuestos y que existen exactamente dos direcciones asintoticas.

### Ejercicio 3

Sea $p$ un punto umbílico. Demostrar que el operador de forma es un multiplo escalar de la identidad: $S_p = \kappa I$.

### Ejercicio 4

Sea $S$ una superficie mínima ($H = 0$). Demostrar que $\kappa_2 = -\kappa_1$ en todo punto y que $K = -\kappa_1^2 \leq 0$.

### Ejercicio 5

Sea $S$ la esfera unitaria. Calcular $\kappa_1$, $\kappa_2$, $H$ y $K$. Verificar que todos los puntos son umbílicos.

### Ejercicio 6

Sea $S$ el cilindro $x^2 + y^2 = 1$. Clasificar sus puntos según el tipo y calcular $H$ y $K$.

### Ejercicio 7

Sea $p$ un punto parabólico con $\kappa_1 = 0$, $\kappa_2 \neq 0$. Describir la curvatura normal en todas las direcciones.

### Ejercicio 8

Sea $S$ una superficie con $K > 0$ en todas partes. Demostrar que la aplicación de Gauss $\mathcal{N}: S \to S^2$ es un difeomorfismo local suprayectivo.

### Ejercicio 9

Sea $S$ la grafica de $f(x,y) = x^2 - y^2$. Clasificar el punto $(0,0)$ según el tipo de punto.

### Ejercicio 10

Sea $S$ una superficie con curvatura media $H$ constante. Demostrar que $S$ es una esfera de radio $1/|H|$ o un plano.

### Ejercicio 11

Sea $p$ un punto de una superficie con $K < 0$. Demostrar que la indicatriz de Dupin es una hipérbola.

### Ejercicio 12

Sea $S$ una superficie con $K > 0$ everywhere. Si $p$ es un punto umbílico, demostrar que $p$ es el único punto umbílico iff $S$ es una esfera.

### Ejercicio 13

Sea $S$ la pseudosfera. Calcular $\kappa_1$, $\kappa_2$, $H$ y $K$.

### Ejercicio 14

Sea $S$ una superficie con $H = \text{const} \neq 0$. Demostrar que $S$ es una esfera de radio $1/|H|$ (teorema de Alexandrov).

### Ejercicio 15

Sea $p$ un punto de una superficie. Demostrar que $\kappa_1 + \kappa_2 = 2H$ y $\kappa_1\kappa_2 = K$.

## Soluciones detalladas

### Solucion 1

Como $\kappa_1\kappa_2 = K$, se tiene $\kappa_1 \geq \sqrt{K}$ y $\kappa_2 \geq \sqrt{K}$. Por la formula de Euler, $\kappa_n(v) = \kappa_1\cos^2\theta + \kappa_2\sin^2\theta \geq \sqrt{K}(\cos^2\theta + \sin^2\theta) = \sqrt{K}$.

$$\square$$

### Solucion 2

Si $K < 0$, $\kappa_1\kappa_2 < 0$, luego $\kappa_1$ y $\kappa_2$ tienen signos opuestos. La ecuación $\kappa_n(\theta) = 0$ tiene exactamente dos soluciones en $[0, 2\pi)$.

$$\square$$

### Solucion 3

El operador de forma $S_p$ es autoadjunto. Si $\kappa_1 = \kappa_2 = \lambda$, entonces $S_p(v) = \lambda v$ para todo $v \in T_pS$, es decir, $S_p = \lambda I$.

$$\square$$

### Solucion 4

$H = (\kappa_1 + \kappa_2)/2 = 0$, hence $\kappa_2 = -\kappa_1$. Luego $K = \kappa_1\kappa_2 = -\kappa_1^2 \leq 0$.

$$\square$$

### Solucion 5

Para la esfera unitaria con normal $N = p$, el operador de forma es $S = -\mathrm{id}$, hence $\kappa_1 = \kappa_2 = -1$, $H = -1$, $K = 1$. Todos los puntos son umbílicos con curvatura constante.

$$\square$$

### Solucion 6

El cilindro tiene $\kappa_1 = 0$ (dirección axial) y $\kappa_2 = 1$ (dirección radial). Luego $K = 0$ everywhere, $H = 1/2$. Todos los puntos son parabólicos.

$$\square$$

### Solucion 7

$\kappa_n(\theta) = \kappa_2\sin^2\theta$. Esta expresión se anula iff $\sin\theta = 0$, es decir, en las dos direcciones paralelas al eje de curvatura nula.

$$\square$$

### Solucion 8

Como $K = \det(d\mathcal{N})$, si $K > 0$, $d\mathcal{N}$ es un isomorfismo con determinante positivo. Por el teorema de la funcion inversa, $\mathcal{N}$ es un difeomorfismo local. Como $S$ es compacta, $\mathcal{N}(S)$ es compacto y abierto en $S^2$, hence $\mathcal{N}$ es suprayectiva.

$$\square$$

### Solucion 9

$X(u,v) = (u, v, u^2 - v^2)$. En $(0,0)$: $X_{uu} = (0,0,2)$, hence $L = 2$. $X_{vv} = (0,0,-2)$, hence $N_c = -2$. $L = 2$, $M = 0$, $N_c = -2$. $K = (LN_c - M^2)/(EG - F^2) = -4 < 0$. Es un punto hiperbólico.

$$\square$$

### Solucion 10

Si $H = c \neq 0$, por el teorema de Alexandrov, toda superficie immersed en $\mathbb{R}^3$ con $H = c$ es una esfera de radio $1/|c|$.

$$\square$$

### Solucion 11

En un punto con $K < 0$, $\kappa_1\kappa_2 < 0$, hence la indicatriz de Dupin $II(v,v) = \kappa_1 a^2 + \kappa_2 b^2 = \pm 1$ define una hipérbola con ejes en las direcciones principales.

$$\square$$

### Solucion 12

Por el teorema de Loewner, toda superficie con $K > 0$ tiene al menos dos puntos umbílicos. Si $p$ es el único, la superficie debe ser una esfera y $p$ es el polo norte y sur simultáneamente.

$$\square$$

### Solucion 13

La pseudosfera tiene $K = -1$ everywhere, hence $\kappa_1 = 1$, $\kappa_2 = -1$. La curvatura media es $H = 0$.

$$\square$$

### Solucion 14

Este es el teorema de Alexandrov: toda superficie inmersa en $\mathbb{R}^3$ con $H = \text{const}$ es una esfera de radio $1/|H|$.

$$\square$$

### Solucion 15

Por definicion de curvaturas principales: $\kappa_1 + \kappa_2 = \operatorname{tr}(S) = 2H$, $\kappa_1\kappa_2 = \det(S) = K$.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1992). *Riemannian Geometry*. Birkhauser Boston.
2. do Carmo, M.P. (1994). *Differential Geometry of Curves and Surfaces*. Prentice Hall.
3. Osserman, R. (1986). *Curvature*. Cambridge University Press.
4. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 3. Publish or Perish.
