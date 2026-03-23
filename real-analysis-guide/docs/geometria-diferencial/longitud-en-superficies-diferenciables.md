---
title: Longitud en Superficies Diferenciables
description: Longitud inducida por la metrica riemanniana y funcional de energia para curvas sobre superficies.
---

# Longitud en Superficies Diferenciables

## Curvas sobre una superficie

Sea $\alpha:[a,b]\to S$ una curva suave en una superficie riemanniana $(S,g)$. La metrica permite medir el modulo de la velocidad tangente

$$
\|\alpha'(t)\|_g=\sqrt{g_{\alpha(t)}(\alpha'(t),\alpha'(t))}.
$$

## Definicion de longitud

La longitud de la curva es

$$
L(\alpha)=\int_a^b \|\alpha'(t)\|_g\,dt.
$$

Esta es la version intrinseca de la formula de longitud de arco.

## En coordenadas locales

Si la metrica se escribe como

$$
g=E\,du^2+2F\,du\,dv+G\,dv^2,
$$

y la curva se parametriza por $(u(t),v(t))$, entonces

$$
L(\alpha)=\int_a^b\sqrt{E(u')^2+2Fu'v'+G(v')^2}\,dt.
$$

## Invariancia por reparametrizacion

La longitud es invariante bajo reparametrizaciones regulares que preserven la orientacion del recorrido. Por eso depende de la traza orientada y no del reloj concreto usado para recorrerla.

## Parametrizacion por longitud de arco

Siempre que la velocidad no se anule, puede introducirse el parametro de longitud de arco. En ese caso

$$
\|\alpha'(s)\|_g=1.
$$

Esta parametrizacion es la natural para estudiar geodesicas y curvatura geodesica.

## Funcional de energia

Junto con la longitud se considera la energia

$$
E(\alpha)=\frac{1}{2}\int_a^b \|\alpha'(t)\|_g^2\,dt.
$$

Las geodesicas aparecen como puntos criticos tanto de la longitud como de la energia, con diferencias tecnicas en las restricciones de parametrizacion.

## Cierre

La longitud en una superficie diferenciable es una nocion puramente intrinseca determinada por la metrica. A partir de ella surgen distancia riemanniana, geodesicas y toda la teoria variacional elemental sobre superficies.
