---
title: Teoremas de Inversion y Plancherel
description: Inversion rigurosa, extension unitaria a L2, Hausdorff-Young y el papel estructural de Parseval.
---

# Teoremas de Inversion y Plancherel

## La pregunta rigurosa

La formula formal de inversion

$$
f(x)=\frac{1}{(2\pi)^n}\int_{\mathbb{R}^n}\widehat{f}(\xi)e^{ix\cdot \xi}\,d\xi
$$

es intuitiva, pero no siempre esta justificada de forma literal. El problema riguroso es:

- en que clase de funciones vale;
- en que sentido converge;
- como extender Fourier mas alla de $L^1$.

## Inversion en Schwartz

En $\mathcal{S}(\mathbb{R}^n)$ todo funciona de la forma mas limpia:

- $\widehat{f}\in \mathcal{S}$;
- la inversion vuelve a producir un elemento de $\mathcal{S}$;
- todas las manipulaciones por derivacion e integracion estan justificadas.

### Moral

Schwartz es el laboratorio perfecto donde la teoria se prueba sin ruido tecnico.

## Inversion en L1 con hipotesis extra

Si $f\in L^1$ y $\widehat{f}\in L^1$, entonces la inversion vale casi en todas partes y, bajo hipotesis de regularidad adicional, punto a punto.

### Lectura

No basta con $f\in L^1$ para invertir por integral ordinaria. Hace falta integrabilidad suficiente del espectro.

## Aproximacion por identidades

La estrategia tipica de demostracion usa nucleos aproximantes que tienden a la delta:

- gaussianas;
- nucleos de Poisson;
- truncaciones suaves.

### Importancia

La inversion se entiende como limite de operadores suaves, no como un acto algebraico instantaneo.

## Parseval

En notacion compatible, si $f,g$ son suficientemente regulares,

$$
\int_{\mathbb{R}^n} f(x)\overline{g(x)}\,dx
=
\frac{1}{(2\pi)^n}
\int_{\mathbb{R}^n}\widehat{f}(\xi)\overline{\widehat{g}(\xi)}\,d\xi.
$$

### Lectura

El producto interno en tiempo es el mismo producto interno en frecuencia, salvo normalizacion.

## Plancherel

El teorema de Plancherel afirma que Fourier se extiende de forma unica a un operador unitario sobre $L^2(\mathbb{R}^n)$:

$$
\|f\|_{L^2}
=
\frac{1}{(2\pi)^{n/2}}\|\widehat{f}\|_{L^2}
$$

segun la convencion elegida.

### Importancia

Aqui Fourier deja de ser solo una transformada de funciones integrables y pasa a ser una simetria del espacio de Hilbert $L^2$.

## Por que L2 es central

$L^2$ es el marco natural para:

- energia;
- espacios de Hilbert;
- espectro de operadores autoadjuntos;
- PDE lineales;
- probabilidades gaussianas.

Plancherel convierte Fourier en la herramienta estructural de todos esos contextos.

## Densidad de Schwartz

La extension a $L^2$ se construye usando que $\mathcal{S}$ es denso en $L^2$.

### Moral

Se define primero donde todo es limpio y luego se completa por continuidad.

## Hausdorff-Young

Si $1\le p\le 2$ y $q$ es el exponente conjugado, entonces

$$
\|\widehat{f}\|_{L^q}\le C_p \|f\|_{L^p}.
$$

### Lectura

Este teorema interpola entre:

- $L^1\to L^\infty$;
- $L^2\to L^2$.

### Importancia

Muestra que Fourier mejora integrabilidad en un rango, pero no es unitario fuera de $L^2$.

## El caso p mayor que 2

No hay una extension simetrica simple de Hausdorff-Young para $p>2$ en la misma forma.

### Moral

La geometria de Fourier cambia fuertemente al cruzar el umbral $p=2$.

## Parseval como energia

En senales y sistemas, Parseval dice que la energia temporal coincide con la energia espectral.

En analisis puro, esa misma identidad es la huella de la unitariedad de Fourier.

### Lectura

La version ingenieril y la version funcional son la misma estructura vista desde dos lenguajes.

## Inversion en distribuciones

En $\mathcal{S}'$, la inversion se formula por dualidad. Esto permite recuperar objetos como:

- la delta;
- soluciones fundamentales;
- senales no integrables en sentido clasico.

## Ejemplo guiado: gaussiana

La gaussiana prueba la teoria de forma ejemplar:

- se transforma en gaussiana;
- pertenece a $L^1$, $L^2$ y $\mathcal{S}$;
- permite ver simultaneamente inversion, Parseval y regularidad.

## Ejemplo guiado: caracteristica de intervalo

La funcion

$$
f=\mathbf{1}_{[-1,1]}
$$

tiene transformada tipo sinc. Esto ilustra:

- $f\in L^1\cap L^2$;
- $\widehat{f}$ ya no tiene soporte compacto;
- la integrabilidad y el decaimiento son rasgos duales pero no simetricos.

## Consecuencias para PDE

Plancherel permite escribir estimaciones energticas en frecuencia. Por ejemplo:

$$
\|\nabla f\|_{L^2}^2
\sim
\int |\xi|^2 |\widehat{f}(\xi)|^2\,d\xi.
$$

### Importancia

Esto convierte espacios de Sobolev y estimaciones elipticas en afirmaciones algebraicas sobre pesos en frecuencia.

## Convergencia y subtileza

La inversion no siempre debe entenderse:

- puntualmente;
- uniformemente;
- con integral absolutamente convergente.

Muchas veces el sentido correcto es:

- casi en todas partes;
- en $L^2$;
- en distribuciones.

## Errores frecuentes

- usar inversion punto a punto donde solo hay inversion en $L^2$;
- confundir Parseval con Plancherel sin mirar el marco exacto;
- pensar que $L^1$ basta siempre para inversion integral limpia;
- extrapolar Hausdorff-Young fuera del rango $1\le p\le 2$;
- olvidar la dependencia en la normalizacion.

## Practica recomendada

1. Verificar Parseval en ejemplos concretos.
2. Explicar la construccion de Plancherel por densidad de Schwartz.
3. Comparar inversion en $L^1\cap L^2$ con inversion distribucional.
4. Estudiar el papel de Hausdorff-Young entre $L^1$ y $L^2$.
5. Reescribir una norma Sobolev en frecuencia usando Plancherel.

## Cierre

Los teoremas de inversion y Plancherel convierten Fourier en una herramienta rigurosa y unitaria, no solo formal. Este es el punto donde el bloque de senales y sistemas se funde de verdad con analisis funcional y PDE.
