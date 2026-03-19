---
title: Transformada Discreta de Fourier
description: Serie trigonometrica discreta, DTFT y DFT como version finita y computable del analisis frecuencial.
---

# Transformada Discreta de Fourier

## Serie trigonometrica discreta de Fourier

Para una sucesion periodica de periodo $N$, la expansion natural usa solo $N$ modos:

$$
x[n]=\sum_{k=0}^{N-1} c_k e^{2\pi i kn/N}.
$$

### Lectura

En tiempo discreto y periodico, el espectro vuelve a ser discreto y finito.

## Ortogonalidad finita

La razon estructural es

$$
\sum_{n=0}^{N-1} e^{2\pi i (k-\ell)n/N}
=0
\quad \text{si } k\ne \ell.
$$

### Importancia

La DFT no es solo un algoritmo: es una expansion ortogonal en un espacio vectorial de dimension finita.

## Transformada de una senal discreta

Para una sucesion en tiempo discreto no necesariamente periodica, la transformada de Fourier discreta en tiempo (DTFT) es

$$
X(\omega)=\sum_{n\in \mathbb{Z}} x[n]e^{-i\omega n}.
$$

### Lectura

La DTFT es continua en $\omega$ y periodica de periodo $2\pi$.

## Relacion con Z

La DTFT se obtiene evaluando la transformada Z sobre el circulo unitario:

$$
X(\omega)=X(z)\big|_{z=e^{i\omega}}
$$

cuando la region de convergencia lo permite.

## Transformada discreta de Fourier

Si tenemos una ventana finita de longitud $N$, definimos la DFT por

$$
X[k]=\sum_{n=0}^{N-1} x[n]e^{-2\pi i kn/N},
\qquad
k=0,\dots,N-1.
$$

La inversion es

$$
x[n]=\frac{1}{N}\sum_{k=0}^{N-1} X[k]e^{2\pi i kn/N}.
$$

### Importancia

La DFT convierte un problema continuo de espectro en un problema finito computable.

## Que representa la DFT

La DFT puede interpretarse de dos maneras:

- como espectro de una secuencia periodizada de periodo $N$;
- como muestreo frecuencial de una senal finita.

### Moral

La interpretacion correcta depende del modelo, y confundirlas genera errores de aliasing y leakage.

## Periodicidad dual

En la DFT:

- la secuencia temporal se interpreta modulo $N$;
- el espectro tambien es periodico modulo $N$.

Esto es una consecuencia algebraica profunda del contexto finito.

## Parseval discreto

La identidad energetica toma la forma

$$
\sum_{n=0}^{N-1}|x[n]|^2
=
\frac{1}{N}\sum_{k=0}^{N-1}|X[k]|^2.
$$

### Lectura

La energia en tiempo y la energia en frecuencia siguen siendo la misma informacion, ahora en dimension finita.

## Resolucion frecuencial

Con longitud de ventana $N$ y periodo de muestreo $T_s$, la resolucion frecuencial es limitada.

### Importancia

La DFT no "ve" cualquier frecuencia con precision arbitraria. La ventana finita impone cuantizacion y leakage.

## Leakage

Si la senal no encaja exactamente con los bins de la DFT, la energia se reparte entre varias frecuencias.

### Moral

La DFT de una ventana finita mezcla el contenido real con el efecto de truncar la senal en tiempo.

## Zero padding

Anadir ceros al final no crea informacion nueva, pero densifica el muestreo del espectro interpolado.

### Advertencia

Mejora visualizacion, no resolucion intrinseca.

## FFT

La FFT es un algoritmo para calcular la DFT eficientemente:

- DFT directa: costo tipico $O(N^2)$;
- FFT: costo tipico $O(N\log N)$.

### Importancia

Este salto computacional hace viable el analisis espectral masivo.

## Ejemplo guiado: seno puro en una rejilla compatible

Si

$$
x[n]=\sin\left(\frac{2\pi m n}{N}\right),
$$

con $m$ entero, la DFT concentra masa en los bins correspondientes a $\pm m$.

### Lectura

Cuando la frecuencia coincide con la malla, el espectro es limpio. Cuando no coincide, aparece leakage.

## Ejemplo guiado: promedio y bin cero

El coeficiente

$$
X[0]=\sum_{n=0}^{N-1}x[n]
$$

recoge la componente de frecuencia cero, es decir, el promedio total salvo normalizacion.

### Moral

El bin cero es la componente DC.

## Puente con filtrado digital

En procesamiento digital:

- filtrar puede significar multiplicar por una mascara en frecuencia;
- volver al tiempo se hace por DFT inversa;
- la interpretacion correcta exige cuidar periodicidad circular.

## Convolucion circular

La multiplicacion punto a punto de DFT corresponde a convolucion circular en tiempo.

### Advertencia

Esto no es la misma convolucion lineal usual salvo que se anada relleno adecuado.

## Que prepara este capitulo

La DFT prepara:

- FFT y computacion cientifica;
- procesamiento digital;
- analisis espectral de datos finitos;
- metodos numericos basados en Fourier;
- puentes con series trigonometrica finita y algebra lineal unitaria.

## Errores frecuentes

- confundir DTFT con DFT;
- interpretar bins de DFT como si fueran frecuencia continua exacta sin mirar la ventana;
- olvidar periodicidad circular;
- usar zero padding como si mejorara resolucion real;
- ignorar leakage al analizar senales no compatibles con la rejilla.

## Practica recomendada

1. Calcular DFT de secuencias simples y reconocer sus bins dominantes.
2. Comparar DTFT y DFT de una misma senal truncada.
3. Verificar Parseval discreto en ejemplos concretos.
4. Estudiar leakage para una frecuencia no entera respecto de la ventana.
5. Relacionar convolucion circular con producto de DFT.

## Cierre

La transformada discreta de Fourier es la version finita, algebraica y computable del analisis frecuencial. Resume de forma muy limpia el paso desde teoria continua hasta herramientas efectivas para datos y algoritmos.
