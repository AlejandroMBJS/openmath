---
title: Notacion Factorial de la Funcion Gamma
description: Extension del factorial a argumentos no enteros y valores especiales de semienteros.
---

# Notacion Factorial de la Funcion Gamma

## Regla fundamental

La conexion esencial entre factorial y Gamma es

$$
\Gamma(n+1)=n!
$$

para todo entero $n\ge 0$.

Por eso puede pensarse en Gamma como un factorial desplazado:

$$
z!=\Gamma(z+1)
$$

siempre que la expresion tenga sentido.

## Consistencia con la recurrencia

La identidad factorial

$$
(n+1)!= (n+1)n!
$$

se convierte en la recurrencia de Gamma

$$
\Gamma(z+1)=z\Gamma(z).
$$

Esto justifica que Gamma sea la prolongacion natural del factorial.

## Valores de semienteros

Usando la recurrencia y el valor

$$
\Gamma\left(\frac12\right)=\sqrt{\pi},
$$

se obtiene

$$
\Gamma\left(\frac32\right)=\frac12\sqrt{\pi},
\qquad
\Gamma\left(\frac52\right)=\frac34\sqrt{\pi},
$$

y en general

$$
\Gamma\left(n+\frac12\right)=\frac{(2n)!}{4^n n!}\sqrt{\pi}.
$$

## Por que importa

Esta extension permite interpretar expresiones factoriales en dimensiones continuas, integrales gaussianas, distribuciones probabilisticas y formulas combinatorias generalizadas.

## Cierre

La notacion factorial asociada a Gamma no es solo una comodidad simbólica. Es la forma precisa de extender una estructura discreta elemental al analisis continuo y complejo.
