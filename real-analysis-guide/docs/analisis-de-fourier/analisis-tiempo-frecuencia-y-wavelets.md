---
title: Analisis Tiempo-Frecuencia y Wavelets
description: STFT, ventanas, Gabor, wavelets y el paso desde frecuencias globales a analisis por escalas y localizacion.
---

# Analisis Tiempo-Frecuencia y Wavelets

## Por que Fourier global no basta

La transformada de Fourier clasica dice que frecuencias contiene una senal, pero no dice cuando aparecen.

Si una senal cambia su contenido frecuencial con el tiempo, una unica descomposicion global pierde informacion local.

### Ejemplo conceptual

Dos senales pueden tener la misma magnitud del espectro global y, sin embargo, una concentrar sus oscilaciones al principio y otra al final. Fourier global no distingue bien ese orden temporal.

## STFT

La transformada de Fourier de tiempo corto se define, para una ventana $g$, por

$$
V_g f(x,\xi)=\int_{\mathbb{R}} f(t)\overline{g(t-x)}e^{-i\xi t}\,dt.
$$

### Lectura

Primero se localiza la senal cerca de $x$ con la ventana, luego se hace Fourier en ese vecindario.

## Rol de la ventana

La ventana $g$ controla el compromiso entre:

- resolucion temporal;
- resolucion frecuencial.

Ventanas muy estrechas localizan bien en tiempo pero difuminan frecuencia. Ventanas largas hacen lo contrario.

### Moral

No existe localizacion perfecta en ambos dominios. El principio de incertidumbre sigue operando.

## Espectrograma

La cantidad

$$
|V_g f(x,\xi)|^2
$$

se interpreta como densidad de energia tiempo-frecuencia.

### Importancia

Es la imagen estandar para analizar senales no estacionarias.

## Gabor

El analisis de Gabor usa traslaciones y modulaciones de una ventana fija:

$$
g_{m,n}(t)=e^{i n b t} g(t-ma).
$$

### Lectura

Se construye una rejilla en el plano tiempo-frecuencia y se proyecta la senal sobre esos atomos.

## Frames

En lugar de bases ortonormales exactas, en tiempo-frecuencia es natural trabajar con frames:

una familia $\{\phi_k\}$ tal que

$$
A\|f\|^2 \le \sum_k |\langle f,\phi_k\rangle|^2 \le B\|f\|^2.
$$

### Moral

Hay redundancia controlada. Eso es util numericamente y estructuralmente flexible.

## Wavelets

Las wavelets usan traslaciones y dilataciones de una funcion madre $\psi$:

$$
\psi_{a,b}(t)=\frac{1}{\sqrt{|a|}}\psi\left(\frac{t-b}{a}\right).
$$

### Lectura

En lugar de mirar frecuencias puras globales, se analizan oscilaciones localizadas a distintas escalas.

## Fourier vs wavelets

Fourier organiza por frecuencia global. Wavelets organizan por:

- posicion;
- escala;
- oscilacion local.

### Importancia

Para senales con singularidades, bordes o transitorios, las wavelets suelen adaptarse mejor que las exponenciales globales.

## Transformada wavelet continua

La transformada wavelet continua toma la forma

$$
W_\psi f(a,b)=\int f(t)\overline{\psi_{a,b}(t)}\,dt.
$$

### Lectura

$b$ localiza en posicion y $a$ mide escala.

## Condicion de admisibilidad

Para reconstruccion exacta, la wavelet madre debe satisfacer una condicion de admisibilidad que, esquematicamente, impone anulacion de frecuencia cero y suficiente decaimiento.

### Moral

Una wavelet no detecta solo promedios; detecta cambios y oscilaciones.

## Analisis multirresolucion

En la teoria discreta de wavelets se construye una cadena de espacios

$$
\cdots \subset V_{-1}\subset V_0 \subset V_1 \subset \cdots
$$

que representan resoluciones crecientes.

### Importancia

Esta estructura explica por que las wavelets son tan utiles en compresion, procesamiento de imagen y analisis por escalas.

## Haar

La wavelet de Haar es el ejemplo mas elemental:

- muy localizada en tiempo;
- no suave;
- perfecta para detectar saltos.

### Lectura

Muestra que la suavidad de la base puede cambiar radicalmente la forma en que se representa una singularidad.

## Daubechies

Wavelets mas refinadas, como las de Daubechies, logran compatibilizar:

- soporte compacto;
- ortogonalidad;
- momentos nulos;
- regularidad.

### Moral

La teoria de wavelets es un ejercicio fino de diseno armonico.

## Tiempo-frecuencia y PDE

El analisis tiempo-frecuencia no es solo procesamiento de senales. Tambien aparece en:

- paquetes de ondas para ecuaciones dispersivas;
- descomposiciones microlocales;
- estimaciones multilineales;
- teoria semiclasica.

## Ejemplo guiado: chirp

Una senal tipo

$$
f(t)=e^{i t^2}
$$

tiene frecuencia instantanea creciente.

### Lectura

Su Fourier global es poco transparente, pero un espectrograma o una representacion wavelet muestran claramente como la frecuencia cambia con el tiempo.

## Ejemplo guiado: borde en imagen

Un salto localizado genera muchos armonicos globales en Fourier, pero una expansion wavelet concentra esa singularidad en pocos coeficientes de escalas y posiciones adecuadas.

### Importancia

Esta es una razon clave del exito de wavelets en compresion.

## Compromiso tiempo-frecuencia

Ni STFT ni wavelets eliminan el principio de incertidumbre. Solo lo organizan de manera distinta:

- STFT usa celdas de tamano casi fijo;
- wavelets usan celdas adaptadas a escala, finas en alta frecuencia y anchas en baja frecuencia.

## Conexion con Littlewood-Paley

Las wavelets pueden verse como una version espacialmente localizada de descomposiciones por bandas de frecuencia. Por eso enlazan naturalmente con Littlewood-Paley y espacios de Besov.

## Errores frecuentes

- pedir resolucion arbitraria en tiempo y frecuencia simultaneamente;
- creer que la STFT da frecuencias "instantaneas" exactas sin dependencia de ventana;
- confundir wavelet continua con una simple base ortonormal fija;
- pensar que wavelets sustituyen Fourier en todo contexto;
- ignorar la relevancia de la redundancia en frames.

## Practica recomendada

1. Comparar la STFT de una senal estacionaria y de un chirp.
2. Explicar el efecto del ancho de ventana sobre el espectrograma.
3. Relacionar wavelets con escalas y singularidades.
4. Estudiar la wavelet de Haar como detector de saltos.
5. Comparar celdas de resolucion de Gabor y wavelets.

## Cierre

El analisis tiempo-frecuencia y las wavelets corrigen la principal limitacion del Fourier global: la falta de localizacion temporal. Con ello el bloque da el salto desde analisis espectral clasico hacia herramientas modernas adaptadas a senales no estacionarias, singularidades y escalas variables.
