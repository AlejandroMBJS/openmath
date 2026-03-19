---
title: Series de Fourier
description: Descomposicion periodica en modos armonicos, coeficientes, paridad, Parseval y lectura espectral.
---

# Series de Fourier

## Introduccion a series de Fourier

Si una senal es periodica de periodo $T$, el problema natural no es usar exponentiales con todo el continuo de frecuencias, sino solo la familia discreta compatible con la periodicidad:

$$
e^{in\omega_0 t},
\qquad
\omega_0=\frac{2\pi}{T},
\qquad
n\in \mathbb{Z}.
$$

### Lectura

La periodicidad cuantiza la frecuencia.

## Forma trigonometrica

Una serie de Fourier real se escribe como

$$
f(t)\sim \frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos(n\omega_0 t)+b_n\sin(n\omega_0 t)\right).
$$

Los coeficientes son

$$
a_n=\frac{2}{T}\int_{t_0}^{t_0+T} f(t)\cos(n\omega_0 t)\,dt,
$$

$$
b_n=\frac{2}{T}\int_{t_0}^{t_0+T} f(t)\sin(n\omega_0 t)\,dt.
$$

## Coeficientes de la serie de Fourier

Los coeficientes miden cuanto del modo $n$ aparece en la senal.

### Lectura

No son solo parametros de una expansion. Son coordenadas respecto de una base ortogonal en el espacio de funciones periodicas cuadrado-integrables.

## Ortogonalidad

La razon estructural de las formulas de coeficientes es la ortogonalidad:

$$
\int_{t_0}^{t_0+T}\cos(n\omega_0 t)\cos(m\omega_0 t)\,dt=0
\quad \text{si } n\ne m,
$$

y analogamente para senos y productos cruzados.

### Moral

La serie de Fourier es una expansion ortogonal, no un truco ad hoc.

## Serie compleja de Fourier

La forma compleja es

$$
f(t)\sim \sum_{n\in \mathbb{Z}} c_n e^{in\omega_0 t},
$$

con

$$
c_n=\frac{1}{T}\int_{t_0}^{t_0+T} f(t)e^{-in\omega_0 t}\,dt.
$$

### Importancia

Esta forma es conceptualmente mas limpia y enlaza directamente con la transformada de Fourier.

## Calcular serie de Fourier: ejemplos

Ejemplo basico: en $(-\pi,\pi)$, para $f(t)=t$ extendida periodicamente,

por imparidad:

$$
a_n=0,
$$

y

$$
b_n=\frac{1}{\pi}\int_{-\pi}^{\pi} t\sin(nt)\,dt
=\frac{2(-1)^{n+1}}{n}.
$$

Por tanto,

$$
t \sim 2\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}\sin(nt).
$$

## Paridad e imparidad en serie de Fourier

Si $f$ es par, entonces todos los coeficientes seno desaparecen:

$$
b_n=0.
$$

Si $f$ es impar, entonces

$$
a_n=0, \qquad a_0=0.
$$

### Lectura

La simetria de la senal se traduce en anulacion espectral parcial.

## Aplicar paridad e imparidad

Esta observacion reduce trabajo y revela estructura:

- funciones pares: expansion solo en cosenos;
- funciones impares: expansion solo en senos.

Tambien prepara extensiones pares e impares en problemas de frontera para PDE.

## Convergencia

Para funciones razonables, la serie converge a:

- $f(t)$ en puntos de continuidad;
- el promedio de limites laterales en puntos de salto.

### Moral

La serie no "falla" en el salto: reconstruye el valor compatible con la ortogonalidad global.

## Fenomeno de Gibbs

Cerca de una discontinuidad, las sumas parciales oscilan y presentan sobreoscilacion persistente.

### Importancia

Muestra que convergencia punto a punto y buena aproximacion uniforme no son lo mismo.

## Teorema de Parseval

En forma compleja:

$$
\frac{1}{T}\int_{t_0}^{t_0+T}|f(t)|^2\,dt
=
\sum_{n\in \mathbb{Z}} |c_n|^2.
$$

### Lectura

La energia media de la senal en tiempo es la suma de energias de sus modos.

## Espectro de amplitud de una senal

El conjunto de coeficientes $|c_n|$ o magnitudes equivalentes forma el espectro de amplitud.

### Importancia

Permite leer:

- que frecuencias dominan;
- donde hay resonancia;
- como se distribuye la energia entre armonicos.

## Oscilaciones forzadas y Fourier

En osciladores lineales, si la fuerza periodica se descompone en armonicos, la respuesta total se obtiene resolviendo el sistema para cada frecuencia y sumando.

### Moral

La linealidad convierte el analisis de Fourier en un principio de solucion, no solo de representacion.

## Ejemplo guiado: ecuacion forzada

Si

$$
y''+\omega^2 y = f(t),
$$

y $f$ es periodica con expansion

$$
f(t)\sim \sum_n c_n e^{in\omega_0 t},
$$

entonces se busca

$$
y(t)\sim \sum_n d_n e^{in\omega_0 t},
$$

y se obtiene

$$
(-n^2\omega_0^2+\omega^2)d_n=c_n.
$$

## Puente con Fourier continuo

La serie de Fourier es la version discreta del analisis en frecuencia. Cuando el periodo crece y la malla de frecuencias se vuelve fina, la suma tiende formalmente a una integral y emerge la transformada de Fourier.

## Que prepara este capitulo

Las series de Fourier preparan:

- transformada de Fourier;
- separacion de variables en PDE;
- espectro discreto de problemas periodicos;
- DFT y FFT en contexto numerico.

## Errores frecuentes

- olvidar la frecuencia fundamental correcta;
- usar paridad sin mirar el intervalo base;
- pensar que la serie siempre converge uniformemente;
- identificar los coeficientes con valores puntuales de la funcion;
- ignorar Gibbs cerca de discontinuidades.

## Practica recomendada

1. Calcular series de Fourier de funciones pares e impares.
2. Estudiar el papel de Parseval en ejemplos concretos.
3. Relacionar el espectro de amplitud con la forma temporal de una senal.
4. Resolver una ecuacion forzada periodicamente usando expansion en Fourier.
5. Comparar forma trigonometrica y compleja de la misma serie.

## Cierre

Las series de Fourier muestran que una senal periodica puede entenderse como superposicion de armonicos ortogonales. Esta idea es el nucleo del bloque entero: descomponer un fenomeno complejo en modos elementales cuya dinamica es transparente.
