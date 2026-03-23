---
title: Teorema de Maclaurin
description: Caso particular del desarrollo de Taylor alrededor de cero y sus series clasicas fundamentales.
---

# Teorema de Maclaurin

## Maclaurin como Taylor centrado en cero

El teorema de Maclaurin no introduce una idea nueva distinta de Taylor: es simplemente el caso particular en que el punto de expansion es $a=0$.

Si $f$ es suficientemente suave cerca de $0$, entonces

$$
T_n^0 f(x)=\sum_{k=0}^n \frac{f^{(k)}(0)}{k!}x^k.
$$

## Restos

Las mismas formas del resto siguen vigentes. En particular, si $f\in C^{n+1}$, existe $\xi$ entre $0$ y $x$ tal que

$$
f(x)=\sum_{k=0}^n \frac{f^{(k)}(0)}{k!}x^k+\frac{f^{(n+1)}(\xi)}{(n+1)!}x^{n+1}.
$$

## Series clasicas

### Exponencial

$$
e^x=\sum_{k=0}^{\infty}\frac{x^k}{k!}.
$$

### Coseno

$$
\cos x=\sum_{k=0}^{\infty}(-1)^k\frac{x^{2k}}{(2k)!}.
$$

### Seno

$$
\sin x=\sum_{k=0}^{\infty}(-1)^k\frac{x^{2k+1}}{(2k+1)!}.
$$

### Logaritmo

$$
\log(1+x)=\sum_{k=1}^{\infty}(-1)^{k+1}\frac{x^k}{k},
\qquad |x|<1.
$$

## Paridad y estructura

Maclaurin hace visible una propiedad importante: las funciones pares solo contienen potencias pares y las impares solo potencias impares. Esto simplifica mucho el analisis de simetrias.

## Interpretacion en aproximacion

Cerca de cero, la serie de Maclaurin permite detectar el primer termino dominante. Por ejemplo,

$$
\sin x\sim x,
\qquad
1-\cos x\sim \frac{x^2}{2},
\qquad
\log(1+x)\sim x.
$$

Estas equivalencias son la base de incontables simplificaciones analiticas y fisicas.

## Relacion con modelos efectivos

En fisica matematica, expandir alrededor de cero suele significar trabajar en un regimen de pequena amplitud, pequena velocidad, pequeno parametro de acoplamiento o pequena desviacion respecto del equilibrio.

## Cierre

Maclaurin es la forma mas usada de Taylor en calculo aplicado y fisica. Su utilidad no esta solo en memorizar series famosas, sino en saber que informacion local se conserva al truncarlas y como estimar el error que se comete.
