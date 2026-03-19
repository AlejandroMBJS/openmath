---
title: Hardy, Hilbert y Senal Analitica
description: Transformada de Hilbert, espacios de Hardy, extension holomorfa y senal analitica en el borde.
---

# Hardy, Hilbert y Senal Analitica

## Por que este tema cierra bien el bloque

La transformada de Hilbert ya aparecio como operador singular. Aqui se la mira desde otra perspectiva:

- descomposicion de frecuencias positivas y negativas;
- espacios de Hardy;
- extension holomorfa al semiplano;
- senal analitica en procesamiento de senales.

Este es un punto natural de union entre Fourier, variable compleja y operadores singulares.

## Transformada de Hilbert

En la recta,

$$
Hf(x)=\frac{1}{\pi}pv\int_{\mathbb{R}}\frac{f(y)}{x-y}\,dy,
$$

y su multiplicador es

$$
\widehat{Hf}(\xi)=-i\,\operatorname{sgn}(\xi)\widehat{f}(\xi).
$$

### Lectura

Hilbert cambia fase de forma distinta en frecuencias positivas y negativas.

## Proyecciones de Hardy

Definimos operadores formales

$$
P_\pm = \frac12(I \mp iH),
$$

de modo que en frecuencia:

- $P_+$ proyecta sobre frecuencias positivas;
- $P_-$ proyecta sobre frecuencias negativas.

### Moral

La transformada de Hilbert permite separar orientacion espectral.

## Espacios de Hardy

En el semiplano superior, el espacio de Hardy $H^p$ consiste en funciones holomorfas cuyo crecimiento se controla por normas $L^p$ uniformes en lineas horizontales.

### Importancia

Los valores frontera de funciones de Hardy se describen mediante Fourier y Hilbert. Este es uno de los puentes mas elegantes entre analisis real y complejo.

## Valores frontera

Una funcion de Hardy en el semiplano superior tiene trazas de frontera cuyos espectros viven esencialmente en frecuencias no negativas.

### Lectura

Holomorfia en el interior se traduce en una restriccion espectral en la frontera.

## Senal analitica

Dada una senal real $f$, se define su senal analitica por

$$
f_a = f + iHf.
$$

En frecuencia, esto elimina las frecuencias negativas y duplica las positivas de forma adecuada.

### Importancia

La senal analitica permite definir:

- amplitud instantanea;
- fase instantanea;
- frecuencia instantanea.

## Envolvente compleja

Si una senal esta modulada alrededor de una banda positiva, la senal analitica recupera una envolvente compleja muy natural.

### Moral

La informacion de amplitud y fase se lee mejor en la version analitica que en la senal real original.

## Formula de Plemelj

En el lenguaje de valores frontera de integrales de Cauchy, las formulas de Sokhotski-Plemelj explican como aparecen partes real e imaginaria conjugadas.

### Lectura

La transformada de Hilbert es la sombra real de una construccion holomorfa.

## Hardy en el disco y en el semiplano

Los espacios de Hardy pueden estudiarse tanto en el disco unidad como en el semiplano superior. La transformacion conforme adecuada traslada resultados entre ambos modelos.

## Factorizacion

En $H^p$ aparecen factorizaciones de gran importancia:

- parte interior;
- parte exterior;
- productos de Blaschke;
- factores singulares.

### Importancia

Esto organiza ceros, crecimiento y estructura de funciones holomorfas con control de borde.

## BMO y dualidad

En un nivel mas alto, la transformada de Hilbert y la teoria de Hardy enlazan con:

- BMO;
- dualidad $H^1$-$BMO$;
- teorias de Calderon-Zygmund.

### Moral

El tema no es solo complejo o de senales: esta en el centro del analisis armonico real.

## Ejemplo guiado: coseno

Si

$$
f(t)=\cos(\omega t),
$$

entonces

$$
Hf(t)=\sin(\omega t)
$$

con la convencion adecuada de signo. Por tanto,

$$
f(t)+iHf(t)=e^{i\omega t}.
$$

### Lectura

La senal analitica reconstruye el modo complejo puro a partir del coseno real.

## Ejemplo guiado: amplitud y fase

Si una senal real tiene forma aproximada

$$
f(t)\approx A(t)\cos(\phi(t)),
$$

la senal analitica permite escribir heuristacamente

$$
f_a(t)\approx A(t)e^{i\phi(t)}.
$$

### Importancia

Esta es la base de muchas tecnicas de demodulacion y analisis de senales no estacionarias.

## Conexion con variable compleja

Este tema prepara de forma natural:

- integrales de Cauchy;
- valores frontera de funciones holomorfas;
- teoremas de Hardy;
- formulas integrales y operadores conjugados.

## Conexion con multiplicadores

Desde Fourier, Hilbert es un multiplicador extremadamente simple. Desde el espacio fisico, es un integral singular delicado. Desde variable compleja, es un operador de borde holomorfo. Esta triple lectura resume muy bien la riqueza del bloque.

## Errores frecuentes

- tratar la senal analitica como si fuera una extension holomorfa literal de una funcion real cualquiera;
- olvidar que Hilbert cambia fase segun el signo de la frecuencia;
- confundir espacios de Hardy con solo funciones "acotadas" o "bien portadas";
- usar frecuencia instantanea sin hipotesis sobre modulacion;
- perder la diferencia entre lado frecuencial, lado singular integral y lado complejo.

## Practica recomendada

1. Calcular la senal analitica de senos y cosenos simples.
2. Relacionar $P_\pm$ con proyecciones sobre frecuencias positivas y negativas.
3. Explicar como Hardy conecta borde y holomorfia.
4. Interpretar Hilbert como multiplicador y como integral singular.
5. Comparar la lectura de una misma senal desde Fourier global y desde senal analitica.

## Cierre

Hardy, Hilbert y la senal analitica cierran muy bien el bloque de Fourier porque muestran la misma estructura desde tres lados: frecuencia, integrales singulares y variable compleja. Con eso el bloque ya no es solo espectral, sino plenamente armonico.
