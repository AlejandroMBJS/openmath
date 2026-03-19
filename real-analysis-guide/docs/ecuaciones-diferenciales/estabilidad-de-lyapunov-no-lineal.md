---
title: Estabilidad de Lyapunov no lineal
description: Estabilidad, estabilidad asintotica, estabilidad exponencial, funciones de Lyapunov, LaSalle y criterios de inestabilidad para sistemas no lineales.
---

# Estabilidad de Lyapunov no lineal

## Por que este tema cambia el nivel del bloque

En sistemas no lineales rara vez existe una solucion explicita cerrada. Sin embargo, en aplicaciones la pregunta central no suele ser "cual es la formula exacta", sino:

- si el equilibrio resiste perturbaciones pequenas;
- si las trayectorias vuelven al equilibrio;
- si lo hacen exponencialmente o solo de forma lenta;
- cual es la region de atraccion.

La teoria de Lyapunov responde esas preguntas sin resolver la ecuacion.

## Marco general

Consideramos un sistema autonomo

$$
\dot x=f(x),
\qquad
x\in\mathbb{R}^n,
$$

con

$$
f(0)=0.
$$

Se estudia la estabilidad del equilibrio

$$
x=0.
$$

Si el equilibrio esta en

$$
x_*,
$$

siempre puede trasladarse la variable

$$
u=x-x_*.
$$

## Definiciones basicas

### Estabilidad de Lyapunov

El equilibrio

$$
0
$$

es estable si para todo

$$
\varepsilon>0
$$

existe

$$
\delta>0
$$

tal que

$$
\|x(0)\|<\delta
\implies
\|x(t)\|<\varepsilon
$$

para todo

$$
t\ge 0.
$$

### Estabilidad asintotica

Es asintoticamente estable si es estable y ademas

$$
x(t)\to 0
$$

cuando

$$
t\to\infty
$$

para todo dato inicial suficientemente cercano.

### Estabilidad exponencial

Es exponencialmente estable si existen constantes

$$
C,\gamma,\rho>0
$$

tales que

$$
\|x(0)\|<\rho
\implies
\|x(t)\|
\le
C e^{-\gamma t}\|x(0)\|
$$

para todo

$$
t\ge 0.
$$

### Lectura

La estabilidad solo controla permanencia cerca del equilibrio. La estabilidad asintotica anade convergencia. La estabilidad exponencial anade una tasa cuantitativa fuerte.

## Funcion de Lyapunov

Una funcion

$$
V:U\to \mathbb{R}
$$

de clase

$$
C^1
$$

en un entorno

$$
U
$$

del origen se usa como energia si:

- $V(0)=0$;
- $V(x)>0$ para todo $x\ne 0$ cercano al origen.

En ese caso se dice que

$$
V
$$

es positiva definida.

## Derivada orbital

A lo largo de las trayectorias,

$$
\dot V(x)=\nabla V(x)\cdot f(x).
$$

Esta no es una derivada parcial suelta, sino la derivada de

$$
t\mapsto V(x(t)).
$$

### Lectura

Si

$$
\dot V\le 0,
$$

la energia no crece. Si

$$
\dot V<0,
$$

la energia decrece estrictamente salvo en el equilibrio.

## Teorema directo de Lyapunov

### Version basica

Si existe una funcion

$$
V
$$

positiva definida tal que

$$
\dot V(x)\le 0
$$

en un entorno del origen, entonces el equilibrio es estable.

### Version asintotica

Si ademas

$$
\dot V(x)<0
$$

para todo

$$
x\ne 0
$$

suficientemente cercano, entonces el equilibrio es asintoticamente estable.

### Idea de la demostracion

Los subniveles

$$
\{x:V(x)\le c\}
$$

actuan como trampas dinamicas. Si una trayectoria empieza dentro de un subnivel donde

$$
V
$$

es pequeno, ya no puede salir porque

$$
V(x(t))
$$

no aumenta.

## Estabilidad exponencial por comparacion cuadratica

Si existen constantes positivas

$$
\alpha_1,\alpha_2,\alpha_3
$$

tales que cerca del origen

$$
\alpha_1\|x\|^2\le V(x)\le \alpha_2\|x\|^2
$$

y

$$
\dot V(x)\le -\alpha_3\|x\|^2,
$$

entonces el equilibrio es exponencialmente estable.

### Lectura

Esta es la forma no lineal del criterio cuadratico lineal. Si la energia es comparable a

$$
\|x\|^2
$$

y su derivada domina negativamente esa misma norma, aparece un decaimiento exponencial.

## Principio de invariancia de LaSalle

La condicion

$$
\dot V<0
$$

es fuerte y a veces innecesaria. Muchas energias fisicas satisfacen solo

$$
\dot V\le 0.
$$

### Enunciado informal

Sea

$$
\Omega
$$

un conjunto compacto positivamente invariante. Si

$$
\dot V\le 0
$$

en

$$
\Omega,
$$

entonces toda trayectoria que permanezca en

$$
\Omega
$$

se aproxima al mayor conjunto invariante contenido en

$$
\{x\in\Omega:\dot V(x)=0\}.
$$

### Lectura

LaSalle dice que la dinamica asintotica queda atrapada no donde la energia deja de bajar en un instante aislado, sino en la parte invariante de ese conjunto.

### Importancia

Esto permite demostrar convergencia aun cuando

$$
\dot V
$$

sea solo semidefinida negativa.

## Criterio de inestabilidad de Cetaev

La teoria no solo da estabilidad. Tambien puede certificar inestabilidad.

### Idea

Si existe una funcion

$$
V
$$

tal que en una region arbitrariamente cercana al origen se cumple:

- $V(0)=0$;
- $V(x)>0$;
- $\dot V(x)>0$;

entonces hay trayectorias que se alejan del equilibrio. El origen es inestable.

### Lectura

Es la version inversa del metodo energetico: si cierta cantidad crece forzosamente en una region que toca al equilibrio, la dinamica no puede permanecer atrapada cerca.

## Region de atraccion

Para un equilibrio asintoticamente estable, la **region de atraccion** es el conjunto de datos iniciales cuya solucion converge al equilibrio.

Los subniveles compactos de una funcion de Lyapunov son una herramienta practica para construir subconjuntos de esa region:

$$
\Omega_c=\{x:V(x)\le c\}.
$$

Si

$$
\Omega_c
$$

es compacto, positivamente invariante y en el domina el criterio de Lyapunov o LaSalle, entonces

$$
\Omega_c
$$

queda dentro de la region de atraccion.

## Ejemplo 1: equilibrio estable no exponencial

Considere

$$
\dot x=-x^3.
$$

Tome

$$
V(x)=\frac12 x^2.
$$

Entonces

$$
\dot V=x\dot x=-x^4\le 0,
$$

y de hecho

$$
\dot V<0
$$

si

$$
x\ne 0.
$$

Luego el origen es asintoticamente estable.

### Observacion fina

No es exponencialmente estable, porque el decaimiento real es algebraico:

$$
x(t)\sim \frac{1}{\sqrt{2t}}.
$$

Este ejemplo muestra por que la estabilidad asintotica y la exponencial no son equivalentes.

## Ejemplo 2: inestabilidad

Para

$$
\dot x=x^3,
$$

la misma funcion

$$
V(x)=\frac12 x^2
$$

da

$$
\dot V=x^4>0
$$

fuera del origen. El equilibrio es inestable.

## Ejemplo 3: oscilador amortiguado

Considere

$$
\dot x=y,
\qquad
\dot y=-\sin x-cy,
\qquad c>0.
$$

La energia mecanica

$$
V(x,y)=1-\cos x+\frac12 y^2
$$

es positiva definida cerca de

$$
(0,0)
$$

y satisface

$$
\dot V
=
\sin x\,\dot x+y\,\dot y
=
\sin x\, y+y(-\sin x-cy)
=
-cy^2\le 0.
$$

Aqui

$$
\dot V
$$

no es estrictamente negativa. Sin embargo, por LaSalle, la trayectoria se acerca al mayor conjunto invariante contenido en

$$
\{y=0\},
$$

que localmente es solo el equilibrio. Luego el equilibrio es asintoticamente estable.

## Relacion con la linealizacion

Si el sistema es lineal

$$
\dot x=Ax
$$

y

$$
A
$$

es de Hurwitz, el criterio matricial

$$
A^TP+PA=-Q
$$

produce una funcion de Lyapunov cuadratica

$$
V(x)=x^TPx.
$$

La teoria no lineal extiende esa idea: buscar una energia que decaiga sin necesitar resolucion explicita.

## Lo que Lyapunov no decide por si solo

El metodo depende de encontrar una buena funcion

$$
V.
$$

Cuando la linealizacion tiene autovalores con parte real nula, pueden aparecer:

- estabilidad neutral;
- atraccion lenta;
- inestabilidad por terminos no lineales;
- bifurcaciones.

En esos casos hacen falta herramientas complementarias como Hartman-Grobman, variedades centrales y teoria de bifurcaciones.

## Errores frecuentes

- Pensar que cualquier funcion no negativa sirve como Lyapunov.
- Confundir

$$
\dot V\le 0
$$

con convergencia automatica al equilibrio.
- Usar una energia local para concluir estabilidad global sin controlar compacidad ni invariancia.
- Confundir estabilidad asintotica con estabilidad exponencial.

## Practica guiada

### Ejercicio 1

Estudia con

$$
V(x)=\frac12 x^2
$$

la estabilidad de

$$
\dot x=-x^5.
$$

### Ejercicio 2

Para

$$
\dot x=-x+y^2,
\qquad
\dot y=-y,
$$

prueba que el origen es localmente asintoticamente estable.

### Ejercicio 3

Explica por que la funcion

$$
V(x,y)=x^2-y^2
$$

no sirve como funcion de Lyapunov positiva definida en el origen.

## Cierre

La teoria de Lyapunov sustituye formulas cerradas por desigualdades energeticas. Ese cambio de punto de vista es uno de los saltos conceptuales reales entre una EDO clasica de curso y una teoria no lineal madura.
