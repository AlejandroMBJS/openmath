---
title: Series de Laurent y Funciones Meromorfas
description: Expansion en anillos, clasificacion local fina de singularidades y paso desde holomorfia a meromorfia.
---

# Series de Laurent y Funciones Meromorfas

## Por que Laurent es inevitable

Las series de Taylor describen funciones holomorfas cerca de puntos regulares. Pero alrededor de una singularidad aislada no basta permitir solo potencias no negativas.

La expansion correcta es

$$
f(z)=\sum_{n=-\infty}^{\infty} a_n (z-z_0)^n
$$

en un anillo

$$
r<|z-z_0|<R.
$$

### Lectura

Taylor ve la parte regular. Laurent ve al mismo tiempo la parte regular y la parte singular.

## Anillos y topologia local

La serie de Laurent vive naturalmente en anillos, no en discos.

### Importancia

Esto no es un detalle tecnico. Si el punto central es singular, el dominio local natural es perforado. La topologia del agujero queda codificada en la parte principal de la serie.

## Teorema de Laurent

Si $f$ es holomorfa en un anillo

$$
r<|z-z_0|<R,
$$

entonces admite expansion de Laurent convergente en ese anillo.

Los coeficientes se obtienen por

$$
a_n=\frac{1}{2\pi i}\oint_{\gamma}\frac{f(\zeta)}{(\zeta-z_0)^{n+1}}\,d\zeta
$$

para una circunferencia contenida en el anillo.

### Moral

La formula de Cauchy no solo produce Taylor. Tambien produce Laurent cuando el dominio local esta perforado.

## Parte principal y parte regular

La expansion se separa como

$$
f(z)=\sum_{n=0}^{\infty} a_n (z-z_0)^n
+\sum_{n=1}^{\infty} a_{-n}(z-z_0)^{-n}.
$$

La segunda suma es la parte principal.

### Lectura

Toda la informacion singular de la funcion esta concentrada en la parte principal.

## Singularidades removibles

Si la parte principal es identicamente cero, la funcion se extiende holomorficamente al centro.

### Moral

La ausencia de potencias negativas equivale exactamente a removibilidad.

## Polos

Si la parte principal tiene solo un numero finito de terminos no nulos,

$$
\sum_{n=1}^{m} a_{-n}(z-z_0)^{-n},
$$

entonces hay un polo de orden $m$.

### Lectura

Un polo es una singularidad algebraica finita, completamente controlada por un bloque finito de Laurent.

## Singularidades esenciales

Si la parte principal tiene infinitos terminos no nulos, la singularidad es esencial.

### Importancia

Este es el primer salto grande de complejidad local. Las singularidades esenciales no se dejan resumir por un comportamiento algebraico simple.

## Casorati-Weierstrass, idea

Cerca de una singularidad esencial, la imagen de cualquier vecindad perforada es densa en $\mathbb{C}$.

### Moral

Las singularidades esenciales son localmente salvajes: la funcion oscila por una enorme variedad de valores arbitrariamente cerca del punto.

## Meromorfia

Una funcion es meromorfa en un dominio si es holomorfa salvo polos aislados.

### Lectura

Las funciones meromorfas son las funciones "racionales locales" del analisis complejo. Siguen siendo muy rigidas y, al mismo tiempo, permiten singularidades suficientemente ricas para la teoria global.

## Ejemplos

- funciones racionales;
- $\tan z$;
- cocientes de funciones enteras donde el denominador no se anula identicamente.

## Orden de un cero y orden de un polo

Si

$$
f(z)=(z-z_0)^m g(z),
\qquad g(z_0)\ne 0,
$$

entonces $z_0$ es un cero de orden $m$.

Analogamente,

$$
f(z)=\frac{g(z)}{(z-z_0)^m},
\qquad g(z_0)\ne 0,
$$

describe un polo de orden $m$.

### Moral

Ceros y polos son duales locales de la misma naturaleza algebraica.

## Logaritmo derivado y suma de polos

Si $f$ es meromorfa y no se anula identicamente, entonces

$$
\frac{f'(z)}{f(z)}
$$

tiene polos simples en ceros y polos de $f$.

### Importancia

Este objeto sera el motor del principio del argumento y de conteos integrales de ceros.

## Ejemplo guiado: 1/(z(z-1))

En torno a $z=0$,

$$
\frac{1}{z(z-1)}=-\frac{1}{z}\frac{1}{1-z}
=-\frac{1}{z}\sum_{n=0}^{\infty} z^n
=-\sum_{n=0}^{\infty} z^{n-1},
$$

para $|z|<1$, $z\ne 0$.

### Lectura

La expansion cambia si se elige otro anillo, por ejemplo $|z|>1$. Laurent siempre depende del anillo de convergencia.

## Laurent en el infinito

Para estudiar el comportamiento en $\infty$, se analiza

$$
g(w)=f(1/w)
$$

cerca de $w=0$.

### Importancia

Esto prepara la esfera de Riemann y la clasificacion global de funciones meromorfas.

## Residuo como coeficiente especial

El residuo es simplemente

$$
a_{-1}.
$$

### Moral

El teorema del residuo es la afirmacion de que, entre todos los coeficientes de Laurent, solo uno sobrevive al integrar alrededor de la singularidad.

## Principio de identidad local

Si dos funciones meromorfas coinciden en un conjunto con punto de acumulacion fuera de las singularidades, coinciden donde ambas esten definidas.

### Lectura

La rigidez de la holomorfia sobrevive en el marco meromorfo, con la salvedad natural de los polos.

## Ejemplo guiado: tangente

La funcion

$$
\tan z=\frac{\sin z}{\cos z}
$$

es meromorfa, con polos simples en los ceros de $\cos z$.

### Moral

Los polos aparecen naturalmente como divisiones de dos funciones holomorfas.

## Meromorfas y mapas a la esfera

Una funcion meromorfa puede verse como una funcion holomorfa con valores en la esfera de Riemann, donde los polos se interpretan simplemente como el valor $\infty$.

### Importancia

Esto sera la forma conceptualmente correcta de globalizar la teoria.

## Errores frecuentes

- confundir serie de Laurent con Taylor en un dominio perforado;
- olvidar que el anillo de convergencia importa;
- pensar que residuo clasifica toda la singularidad;
- confundir polo de orden finito con singularidad esencial;
- olvidar que meromorfa permite polos, no singularidades esenciales arbitrarias en el dominio.

## Practica recomendada

1. Expandir funciones racionales en distintos anillos.
2. Clasificar singularidades por la parte principal de Laurent.
3. Relacionar orden de cero y orden de polo.
4. Estudiar el comportamiento en $\infty$ por el cambio $w=1/z$.
5. Calcular residuos directamente desde la serie de Laurent.

## Cierre

Laurent y meromorfia son la version madura de la teoria local compleja. Permiten pasar de holomorfia sin singularidades a una clase enorme de funciones todavia muy rigidas, donde los polos se manejan algebraicamente y las singularidades esenciales marcan el limite de esa rigidez.
