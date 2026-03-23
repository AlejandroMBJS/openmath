---
title: Superficie Diferenciable
description: Atlas suaves, cambios de coordenadas, funciones diferenciables, parametrizaciones e inmersiones regulares.
---

# Superficie Diferenciable

## Del atlas topologico al atlas suave

Una superficie diferenciable es una superficie topologica equipada con un atlas cuyos cambios de coordenadas son suaves. Esta exigencia permite trasladar calculo diferencial desde abiertos del plano hacia la superficie.

## Definicion

Una superficie topologica $S$ es diferenciable si posee un atlas

$$
\{(U_\alpha,\varphi_\alpha)\}
$$

tal que, para toda superposicion no vacia,

$$
\varphi_\beta\circ\varphi_\alpha^{-1}
$$

es de clase $C^\infty$ entre abiertos de $\mathbb{R}^2$.

## Funciones suaves

Una funcion $f:S\to\mathbb{R}$ es suave si en cada carta local la composicion

$$
f\circ\varphi^{-1}
$$

es suave en el sentido usual del calculo multivariable.

## Aplicaciones suaves entre superficies

Si $F:S\to M$ es una aplicacion entre superficies diferenciables, se dice suave si todas sus expresiones en coordenadas locales son suaves.

## Parametrizaciones locales

Una parametrizacion local es una aplicacion

$$
X:V\subset\mathbb{R}^2\to S
$$

que es homeomorfismo sobre su imagen y cuyas componentes coordinadas son suaves. En superficies inmersas en $\mathbb{R}^3$, suele verse a $X$ como aplicacion con valores en el ambiente.

## Superficies regulares en R3

Una superficie regular en $\mathbb{R}^3$ puede describirse mediante parametrizaciones locales suaves $X(u,v)$ de rango dos:

$$
X_u\times X_v\neq 0.
$$

Esta condicion garantiza existencia de un plano tangente bien definido.

## Ejemplos clasicos

### Grafica de una funcion

Si $f:U\subset\mathbb{R}^2\to\mathbb{R}$ es suave, su grafica

$$
X(u,v)=(u,v,f(u,v))
$$

define una superficie regular.

### Esfera como nivel regular

La esfera puede describirse como nivel regular de

$$
F(x,y,z)=x^2+y^2+z^2.
$$

### Toro de revolucion

Es un ejemplo canonico de superficie compacta embebida con estructura diferenciable natural.

## Teorema del valor regular

Si $F:\mathbb{R}^3\to\mathbb{R}$ es suave y $c$ es valor regular, entonces

$$
F^{-1}(c)
$$

es una superficie regular. Esta es una de las maneras mas eficaces de producir superficies.

## Intrinseco frente a extrinseco

La estructura diferenciable es intrinseca: no depende de estar inmersa en un espacio euclideo. En cambio, nociones como la segunda forma fundamental o la curvatura normal si dependen de la inmersion en el ambiente.

## Cierre

Una superficie diferenciable es una variedad de dimension dos sobre la que el calculo diferencial tiene sentido de manera coherente entre cartas. Este paso conceptual es el puente entre topologia local plana y geometria diferencial propiamente dicha.
