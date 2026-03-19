---
title: Singularidades, Residuos y Aplicaciones
description: Series de Laurent, clasificacion de singularidades, calculo de residuos y evaluacion de integrales reales.
---

# Singularidades, Residuos y Aplicaciones

## Singularidades y polos de funciones complejas

Si $f$ es holomorfa en un entorno perforado de $z_0$, su comportamiento local se describe por una serie de Laurent:

$$
f(z)=\sum_{n=-\infty}^{\infty} a_n (z-z_0)^n.
$$

### Lectura

La parte con exponentes negativos captura toda la informacion singular.

## Clasificacion

- removible: todos los coeficientes negativos son cero;
- polo: solo hay un numero finito de terminos negativos;
- esencial: hay infinitos terminos negativos.

### Moral

La serie de Laurent no solo expande la funcion. Clasifica exactamente el tipo de singularidad.

## Residuos de funciones complejas

El residuo de $f$ en $z_0$ es el coeficiente

$$
a_{-1}
$$

de la serie de Laurent.

### Importancia

Ese unico coeficiente controla la integral de contorno alrededor de la singularidad.

## El teorema del residuo

Si $f$ es meromorfa y $\gamma$ encierra singularidades aisladas $z_1,\dots,z_m$, entonces

$$
\oint_{\gamma} f(z)\,dz
=
2\pi i \sum_{k=1}^m \operatorname{Res}(f;z_k).
$$

### Moral

Toda la integral se colapsa a una suma finita de datos locales.

## Como calcular residuos

Casos tipicos:

- polo simple:

$$
\operatorname{Res}(f;z_0)=\lim_{z\to z_0}(z-z_0)f(z);
$$

- polo de orden $m$:

$$
\operatorname{Res}(f;z_0)=\frac{1}{(m-1)!}
\lim_{z\to z_0}\frac{d^{m-1}}{dz^{m-1}}\left[(z-z_0)^m f(z)\right].
$$

### Lectura

La formula de polo simple es la mas comun; la de orden superior aparece cuando hay multiplicidades o racionales con factores repetidos.

## Ejemplo guiado: polo simple

Sea

$$
f(z)=\frac{1}{z(z-1)}.
$$

En $z=1$,

$$
\operatorname{Res}(f;1)=\lim_{z\to 1}\frac{1}{z}=1.
$$

En $z=0$,

$$
\operatorname{Res}(f;0)=\lim_{z\to 0}\frac{1}{z-1}=-1.
$$

## Ejemplo guiado: exponencial sobre polo

Para

$$
f(z)=\frac{e^z}{z^2},
$$

el residuo en $0$ es el coeficiente de $1/z$ en

$$
\frac{1+z+\frac{z^2}{2}+\cdots}{z^2}
=
\frac{1}{z^2}+\frac{1}{z}+\frac12+\cdots,
$$

luego el residuo vale $1$.

### Moral

Expandir series es a menudo la forma mas limpia de calcular residuos.

## Integral impropia racional

Una aplicacion clasica es

$$
\int_{-\infty}^{\infty}\frac{dx}{x^2+1}.
$$

Cerrando por un semicirculo superior, la singularidad interior es $z=i$ y

$$
\operatorname{Res}\left(\frac{1}{z^2+1};i\right)=\frac{1}{2i}.
$$

Por tanto,

$$
\int_{-\infty}^{\infty}\frac{dx}{x^2+1}
=
2\pi i \cdot \frac{1}{2i}
=
\pi.
$$

## Integral racional de senos y cosenos

Integrales de la forma

$$
\int_0^{2\pi} R(\sin\theta,\cos\theta)\,d\theta
$$

pueden tratarse con el cambio

$$
z=e^{i\theta},
$$

de modo que

$$
\cos\theta=\frac12\left(z+\frac1z\right),
\qquad
\sin\theta=\frac{1}{2i}\left(z-\frac1z\right),
\qquad
d\theta=\frac{dz}{iz}.
$$

### Importancia

La integral trigonomatrica real se transforma en un contorno sobre la circunferencia unidad.

## Integrales definidas con teorema del residuo

El teorema del residuo sirve para:

- integrales racionales sobre la recta;
- integrales con exponenciales;
- integrales trigonomatricas;
- problemas de inversion y de contorno.

### Moral

No es solo una herramienta para contornos cerrados abstractos. Es un metodo de calculo real extremadamente eficaz.

## Singularidad esencial y comportamiento salvaje

Si la singularidad es esencial, la teoria local cambia radicalmente.

### Lectura

En presencia de una singularidad esencial, el comportamiento de la funcion cerca del punto puede ser muy rico y ya no queda resumido por unas pocas potencias negativas.

## Residuos en el infinito

En la esfera de Riemann es natural hablar del residuo en $\infty$, y la suma de todos los residuos, incluyendo el del infinito, es cero para funciones meromorfas adecuadas.

### Importancia

Esto da otra forma de organizar integrales y singularidades globales.

## Criterio de removibilidad

Si la parte principal desaparece, la singularidad puede rellenarse. Equivalentemente, el residuo puede ser cero sin que la singularidad deje de existir, pero si todos los coeficientes negativos desaparecen entonces si es removible.

### Moral

El residuo da informacion importante, pero no clasifica por si solo toda la singularidad.

## Conexion con Cauchy

El residuo es exactamente el coeficiente que sobrevive al integrar la serie de Laurent alrededor de un pequeno circulo. Todas las demas potencias integran cero.

### Lectura

El teorema del residuo es la version localmente singular de la formula de Cauchy.

## Conexion con Fourier y Laplace

Residuos y contornos aparecen en:

- inversion de Laplace;
- estimaciones asintoticas;
- integrales oscilatorias;
- analisis espectral de polos y resonancias.

## Errores frecuentes

- confundir residuo con valor de la funcion;
- aplicar la formula de polo simple a polos de orden mayor;
- cerrar contornos sin justificar desaparicion del arco;
- olvidar singularidades sobre el eje o el contorno;
- pensar que residuo cero implica singularidad removible.

## Practica recomendada

1. Calcular residuos en polos simples y dobles.
2. Clasificar singularidades usando series de Laurent.
3. Evaluar integrales racionales reales por contornos semicirculares.
4. Transformar integrales trigonomatricas con $z=e^{i\theta}$.
5. Relacionar teorema del residuo y formula de Cauchy.

## Cierre

La teoria de residuos es uno de los puntos donde variable compleja se vuelve extraordinariamente operativa. Convierte datos locales de singularidades en integrales globales y hace visible una de las grandes ventajas del metodo complejo: reducir calculos reales dificiles a una suma de coeficientes locales.
