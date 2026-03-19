---
title: Paley-Wiener, Incertidumbre y Muestreo
description: Relacion entre soporte y analiticidad, limites de localizacion y teorema de Shannon para reconstruccion.
---

# Paley-Wiener, Incertidumbre y Muestreo

## Un tema central

Fourier no solo transforma funciones. Tambien impone restricciones estructurales:

- no se puede concentrar arbitrariamente una funcion y su espectro a la vez;
- soporte compacto en un dominio implica rigidez analitica en el otro;
- la informacion frecuencial limitada permite reconstruccion por muestreo.

Estas tres ideas forman un nucleo profundo del analisis de Fourier moderno.

## Principio de incertidumbre

La version mas conocida dice, de forma esquematica, que una funcion y su transformada no pueden estar ambas excesivamente localizadas.

Una forma cuantitativa clasica es

$$
\left(\int x^2 |f(x)|^2\,dx\right)
\left(\int \xi^2 |\widehat{f}(\xi)|^2\,d\xi\right)
\ge C \|f\|_{L^2}^4.
$$

### Lectura

Concentracion temporal y concentracion frecuencial se oponen.

## Igualdad y gaussiana

La gaussiana es el perfil extremal de la desigualdad de incertidumbre.

### Moral

No es casual que la gaussiana aparezca en calor, probabilidad, quantum y procesamiento de senales: optimiza el compromiso tiempo-frecuencia.

## No soporte compacto doble

Una consecuencia muy fuerte:

si $f$ y $\widehat{f}$ tienen ambos soporte compacto, entonces $f\equiv 0$.

### Importancia

La informacion no puede quedar encerrada simultaneamente en ambos dominios sin trivializarse.

## Paley-Wiener

Uno de los teoremas mas profundos del bloque describe exactamente la imagen bajo Fourier de funciones compactamente soportadas.

Esquematicamente:

- soporte compacto en el espacio fisico corresponde a extension entera en la variable compleja de frecuencia con crecimiento exponencial controlado.

### Lectura

El soporte compacto se traduce en analiticidad compleja. Esta es una de las uniones mas elegantes entre Fourier y variable compleja.

## Significado de Paley-Wiener

El teorema dice que la transformada "sabe" si una funcion vive en un intervalo finito, pero lo codifica no por soporte compacto en frecuencia, sino por crecimiento controlado de una funcion entera.

### Moral

Compactitud y analiticidad son duales profundos.

## Formula de suma de Poisson

La suma de Poisson enlaza muestreo espacial con periodizacion frecuencial:

$$
\sum_{n\in \mathbb{Z}} f(nT)
\sim
\frac{1}{T}\sum_{k\in \mathbb{Z}} \widehat{f}\left(\frac{2\pi k}{T}\right)
$$

segun convencion y regularidad.

### Importancia

Es el puente estructural entre:

- muestreo;
- aliasing;
- DFT;
- lattice sums;
- theta functions y numero-teoria armonica.

## Muestreo de Shannon

Si una senal es banda limitada, es decir, su transformada se anula fuera de un intervalo finito, entonces puede reconstruirse a partir de muestras equiespaciadas suficientemente densas.

La formula clasica es

$$
f(t)=\sum_{n\in \mathbb{Z}} f(nT_s)\,\mathrm{sinc}\left(\frac{t-nT_s}{T_s}\right)
$$

bajo la condicion de Nyquist apropiada.

### Lectura

Una senal banda limitada contiene un numero finito de grados de libertad por unidad de tiempo. Las muestras bastan para recuperarla.

## Aliasing

Si la frecuencia de muestreo es insuficiente, distintas componentes espectrales se pliegan unas sobre otras.

### Moral

El aliasing no es un defecto numerico menor: es perdida irreversible de identificabilidad frecuencial.

## Banda limitada vs soporte temporal

Una senal banda limitada no puede tener soporte temporal compacto salvo que sea trivial.

### Lectura

Otra vez aparece el conflicto entre localizacion temporal y frecuencial.

## Version heuristica del muestreo

Muestrear en tiempo equivale a multiplicar la senal por un tren de impulsos. En frecuencia, eso periodiza el espectro. Si las copias periodizadas no se solapan, hay reconstruccion exacta. Si se solapan, aparece aliasing.

## Localizacion y ventanas

En aplicaciones reales, las senales raramente son exactamente banda limitada ni exactamente observadas en tiempo infinito. Por eso se usan ventanas, wavelets o STFT.

### Importancia

El teorema de Shannon es un ideal estructural. Las aplicaciones practicas requieren versiones truncadas o robustas.

## Ejemplo guiado: sinc

La funcion

$$
\mathrm{sinc}(t)=\frac{\sin(\pi t)}{\pi t}
$$

tiene transformada esencialmente igual a la caracteristica de un intervalo.

### Lectura

Es el prototipo exacto de dualidad banda limitada - decaimiento lento en tiempo.

## Ejemplo guiado: pulso rectangular

La caracteristica de un intervalo tiene transformada tipo sinc. Esto muestra:

- soporte temporal compacto;
- espectro sin soporte compacto;
- oscilacion y decaimiento algebraico.

### Moral

Localizar en tiempo produce colas en frecuencia.

## Relacion con variable compleja

Paley-Wiener muestra que Fourier no vive aislada. El crecimiento entero de la transformada extendida a variable compleja contiene informacion precisa sobre soporte y ancho de banda.

## Relacion con microlocalidad

La incertidumbre y el muestreo tienen una lectura microlocal:

- no se puede concentrar simultaneamente en posicion y frecuencia;
- el analisis de paquetes de onda vive justo en esa tension.

## Errores frecuentes

- pensar que banda limitada equivale a decaimiento rapido en tiempo;
- ignorar aliasing al discretizar;
- creer que soporte compacto y banda limitada pueden coexistir no trivialmente;
- usar Shannon sin comprobar hipotesis de ancho de banda;
- tratar Paley-Wiener como simple curiosidad compleja y no como teorema estructural.

## Practica recomendada

1. Derivar el conflicto entre soporte compacto doble y trivialidad.
2. Explicar el papel de la sinc en Shannon.
3. Estudiar el aliasing via periodizacion espectral.
4. Relacionar Paley-Wiener con extension entera y crecimiento exponencial.
5. Comparar incertidumbre cuantitativa y principios de soporte.

## Cierre

Paley-Wiener, incertidumbre y muestreo muestran la parte mas estructural del analisis de Fourier: soporte, analiticidad, aliasing y reconstruccion exacta no son temas aislados, sino manifestaciones del mismo principio de dualidad tiempo-frecuencia.
