---
title: Multiplicadores de Fourier y Operadores Singulares
description: Operadores definidos por simbolos en frecuencia, transformada de Hilbert, Calderon-Zygmund y entrada al analisis armonico moderno.
---

# Multiplicadores de Fourier y Operadores Singulares

## De la convolucion a los multiplicadores

Si un operador lineal $T$ es invariante por traslacion, la transformada de Fourier lo convierte en multiplicacion por una funcion $m(\xi)$:

$$
\widehat{Tf}(\xi)=m(\xi)\widehat{f}(\xi).
$$

La funcion $m$ se llama multiplicador de Fourier.

### Lectura

Toda la complejidad del operador queda codificada en una funcion simbolica sobre frecuencias.

## Ejemplos inmediatos

- derivada:

$$
m(\xi)=i\xi;
$$

- resolvente eliptico formal:

$$
m(\xi)=\frac{1}{1+|\xi|^2};
$$

- proyecciones de frecuencia:

$$
m(\xi)=\mathbf{1}_{|\xi|\le R}.
$$

## Operadores singulares

Muchos multiplicadores de interes no vienen de nucleos integrables ordinarios. Sus kernels presentan singularidad no integrable en el origen y deben interpretarse en valor principal.

### Importancia

Aqui aparece el corazon del analisis armonico moderno: operadores acotados en $L^p$ aunque su kernel sea singular.

## Transformada de Hilbert

En una dimension, la transformada de Hilbert se define formalmente por

$$
Hf(x)=\frac{1}{\pi}pv\int_{\mathbb{R}}\frac{f(y)}{x-y}\,dy.
$$

En frecuencia, su multiplicador es

$$
m(\xi)=-i\,\mathrm{sgn}(\xi).
$$

### Lectura

El operador parece salvajemente singular en espacio fisico, pero en frecuencia es simplemente un cambio de fase.

## Calderon-Zygmund

Una gran clase de operadores singulares se estudia mediante kernels $K(x,y)$ con:

- tamano controlado lejos de la diagonal;
- regularidad o cancelacion;
- interpretacion en valor principal.

### Moral

No basta una singularidad puntual. Hace falta estructura de cancelacion para obtener acotacion.

## Acotacion en L2 y luego en Lp

La estrategia tipica es:

1. probar acotacion en $L^2$ usando Fourier;
2. extender a $L^p$ para $1<p<\infty$ por teoria singular integral.

### Importancia

Este esquema une directamente analisis de Hilbert con teoria de espacios $L^p$.

## Multiplicador de Mihlin-Hormander

Un criterio clasico dice, de forma esquematica, que si $m$ es suficientemente suave y sus derivadas satisfacen

$$
|\partial^\alpha m(\xi)| \le C_\alpha |\xi|^{-|\alpha|}
$$

para ordenes adecuados, entonces el operador correspondiente es acotado en $L^p$ para $1<p<\infty$.

### Lectura

La regularidad del simbolo en frecuencia controla la acotacion del operador en espacios reales.

## Riesz transforms

En $\mathbb{R}^n$, las transformadas de Riesz tienen multiplicador

$$
m_j(\xi)=\frac{i\xi_j}{|\xi|}.
$$

### Importancia

Aparecen de forma natural en:

- gradiente del potencial newtoniano;
- ecuaciones elipticas;
- Hodge decomposition;
- fluidos incomprensibles.

## Littlewood-Paley

Una idea central del analisis armonico es descomponer en bandas de frecuencia:

$$
f \sim \sum_j P_j f,
$$

donde $P_j$ localiza en escalas $|\xi|\sim 2^j$.

### Moral

El operador ya no se estudia en bloque, sino escala por escala.

## Espacios de Sobolev y Besov

Esa descomposicion dyadica permite definir y medir:

- regularidad Sobolev;
- regularidad Holder y Besov;
- escalamiento critico en PDE no lineales.

## Maximal functions

Operadores maximales controlan oscilacion local y sirven como herramienta tecnica para demostrar acotaciones fuertes y debiles.

### Importancia

Aunque no sean multiplicadores simples, forman parte del mismo ecosistema de control fino en $L^p$.

## Ejemplo guiado: Hilbert y fase

Si la entrada es $e^{i\omega x}$ con $\omega>0$, entonces la transformada de Hilbert actua multiplicando por $-i$; si $\omega<0$, por $+i$.

### Lectura

La transformada de Hilbert separa orientaciones de frecuencia. Por eso es tan natural en senales analiticas y en variable compleja.

## Ejemplo guiado: proyeccion de baja frecuencia

Si $m(\xi)=\mathbf{1}_{|\xi|\le R}$, el operador elimina altas frecuencias. En espacio fisico, el kernel correspondiente ya no es local ni integrable de forma simple. Esto muestra como filtrado ideal y kernels oscilatorios se conectan.

## Relacion con PDE

Multiplicadores y operadores singulares aparecen en:

- resolucion de ecuaciones elipticas;
- estimaciones de dispersivas;
- Navier-Stokes, via proyeccion de Leray y Riesz transforms;
- regularidad de soluciones y espacios criticos.

## Relacion con variable compleja

La transformada de Hilbert y los operadores conjugados enlazan directamente con:

- funcion analitica asociada a borde;
- formulas de Cauchy;
- teorias de Hardy.

## Lo que hace dificil la teoria

- kernels no absolutamente integrables;
- cancelacion delicada;
- singularidades en el origen;
- sensibilidad a cambios de escala;
- diferencias reales entre $L^2$ y $L^p$.

## Errores frecuentes

- creer que todo multiplicador acotado en frecuencia es automaticamente bueno en todo $L^p$;
- usar kernels singulares sin valor principal ni cancelacion;
- pensar que la teoria de Fourier en $L^2$ basta para todo $L^p$;
- olvidar el papel del escalamiento en criterios tipo Mihlin;
- identificar filtrado ideal con operador local.

## Practica recomendada

1. Calcular el multiplicador de derivacion y de algunas convoluciones sencillas.
2. Interpretar la transformada de Hilbert en frecuencia.
3. Explicar por que el criterio de Mihlin conecta derivadas del simbolo con acotacion en $L^p$.
4. Relacionar Riesz transforms con ecuaciones elipticas y fluidos.
5. Describir la idea de descomposicion Littlewood-Paley.

## Cierre

Multiplicadores y operadores singulares son la puerta de entrada real al analisis armonico moderno. Desde aqui Fourier deja de ser solo expansion de senales y pasa a ser una teoria de operadores profunda, central para PDE, variable compleja y regularidad fina.
