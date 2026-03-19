---
title: Introduccion a las Curvas Derivables
description: Curvas como aplicaciones, regularidad, reparametrizacion y significado geometrico de la derivabilidad.
---

# Introduccion a las Curvas Derivables

## Introduccion a las curvas derivables

Una curva no debe entenderse primero como un subconjunto del espacio, sino como una aplicacion

$$
\gamma:I\to \mathbb{R}^n,
$$

donde $I\subset \mathbb{R}$ es un intervalo. La imagen $\gamma(I)$ es la traza; la parametrizacion contiene informacion adicional sobre orientacion, rapidez y estructura diferencial.

### Idea central

Dos parametrizaciones distintas pueden tener la misma traza y, sin embargo, no ser geometricamente equivalentes si una de ellas introduce singularidades o destruye la estructura local de la curva. La geometria diferencial estudia exactamente que propiedades sobreviven bajo cambios regulares de parametro.

## Curva, traza y orientacion

Conviene separar tres niveles:

- la curva como aplicacion $\gamma$;
- la traza como conjunto $\gamma(I)$;
- la orientacion inducida por el sentido de crecimiento del parametro.

### Ejemplo

La recta del eje $x$ puede parametrizarse por

$$
\gamma_1(t)=(t,0), \qquad \gamma_2(s)=(-s,0).
$$

Tienen la misma traza, pero orientacion opuesta.

## Suavidad

Diremos que $\gamma$ es de clase $C^k$ si cada componente de $\gamma$ es de clase $C^k$ en $I$.

La primera derivada

$$
\gamma'(t)
$$

es el vector velocidad. Si existe y no se anula, define una direccion tangente bien determinada.

## Puntos singulares

Un punto $t_0\in I$ es singular si

$$
\gamma'(t_0)=0.
$$

### Ejemplo

La cuspide semicubica

$$
\gamma(t)=(t^2,t^3)
$$

tiene $\gamma'(0)=0$. La traza sigue siendo un objeto perfectamente visible en el plano, pero la parametrizacion pierde su estructura regular en el origen.

## Recta tangente en un punto regular

Si $\gamma'(t_0)\neq 0$, la recta tangente viene dada por

$$
\ell(u)=\gamma(t_0)+u\gamma'(t_0).
$$

La recta tangente depende de la direccion de $\gamma'(t_0)$, no de su modulo.

## Cambio de parametro

Una reparametrizacion regular es un difeomorfismo $\phi:J\to I$ con derivada nunca nula. La nueva curva es

$$
\widetilde{\gamma}(s)=\gamma(\phi(s)).
$$

## Proposicion: regla de la cadena vectorial

Si $\widetilde{\gamma}=\gamma\circ\phi$, entonces

$$
\widetilde{\gamma}'(s)=\gamma'(\phi(s))\phi'(s).
$$

### Consecuencia

La recta tangente se preserva bajo reparametrizaciones regulares, porque el vector derivada solo cambia por un escalar no nulo.

## Regularidad local

La derivabilidad por si sola no basta para hacer geometria diferencial seria. La hipotesis correcta es regularidad: la curva debe tener velocidad no nula en cada punto.

## Curvas regulares parametrizadas

Una curva $\gamma:I\to\mathbb{R}^n$ de clase $C^1$ es regular si

$$
\gamma'(t)\neq 0 \qquad \text{para todo } t\in I.
$$

### Interpretacion

La parametrizacion recorre la traza sin detenerse ni colapsar localmente la direccion tangente.

## Invariancia de la regularidad

Si $\widetilde{\gamma}=\gamma\circ\phi$ con $\phi'(s)\neq 0$, entonces $\gamma$ es regular si y solo si $\widetilde{\gamma}$ es regular.

### Prueba

Por la regla de la cadena,

$$
\widetilde{\gamma}'(s)=\gamma'(\phi(s))\phi'(s).
$$

El producto de un vector no nulo por un escalar no nulo sigue siendo no nulo.

## Parametrizaciones equivalentes

Dos curvas regulares parametrizadas se consideran equivalentes si difieren por una reparametrizacion regular. Esta es la relacion correcta cuando se quiere estudiar la curva como objeto geometrico y no como trayectoria temporal concreta.

## Curvas simples y autointersecciones

La regularidad es una condicion local. Una curva regular puede autointersectarse globalmente.

### Ejemplo

Una lemniscata convenientemente parametrizada puede ser regular aunque su traza se cruce consigo misma.

## Inmersion y embebimiento

En lenguaje de variedades, una curva regular es una inmersion de dimension uno. Si ademas la parametrizacion es homeomorfismo sobre su imagen, la curva se comporta como subvariedad embebida.

### Moral

La geometria local de una curva regular no detecta por si sola si hay autointersecciones globales.

## Ejemplos canonicos

### Recta

$$
\gamma(t)=p+tv, \qquad v\neq 0.
$$

Es regular y de curvatura nula.

### Circunferencia

$$
\gamma(t)=(\cos t,\sin t).
$$

Es regular, periodica y servira como modelo de curvatura constante.

### Helice

$$
\gamma(t)=(a\cos t,a\sin t,bt), \qquad a>0.
$$

Es regular y muestra que en el espacio aparece un segundo invariante: la torsion.

## Errores comunes

- Confundir curva con su traza.
- Pensar que la rapidez forma parte de la geometria intrinseca.
- Creer que una curva no regular deja automaticamente de tener tangente como conjunto; lo que falla es la parametrizacion diferencial.

## Cierre

La nocion de curva derivable organiza el paso desde una formula parametrica hacia un objeto geometrico estable bajo reparametrizaciones regulares. La regularidad elimina degeneraciones locales y abre la puerta a la longitud de arco y a los invariantes diferenciales de orden superior.
