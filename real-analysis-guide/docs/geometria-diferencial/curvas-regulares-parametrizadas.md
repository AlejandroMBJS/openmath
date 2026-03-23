---
title: Curvas Regulares Parametrizadas
description: Regularidad, reparametrizaciones, equivalencia geometrica, curvas simples y parametrizacion por longitud de arco.
---

# Curvas Regulares Parametrizadas

## Definicion operativa

Una curva parametrizada es una aplicacion

$$
\gamma:I\to \mathbb{R}^n,
$$

con $I\subset \mathbb{R}$ intervalo. Diremos que es de clase $C^k$ si sus componentes lo son, y que es **regular** si

$$
\gamma'(t)\neq 0 \qquad \text{para todo } t\in I.
$$

La regularidad es la hipotesis minima para hablar de direccion tangente bien definida, longitud de arco y cambio de parametro sin degeneracion local.

## Que excluye la regularidad

La condicion $\gamma'(t)\neq 0$ descarta puntos donde la parametrizacion se detiene, colapsa o pierde direccion. No excluye autointersecciones globales.

### Ejemplo: cuspide no regular

$$
\gamma(t)=(t^2,t^3)
$$

satisface $\gamma'(0)=(0,0)$, luego falla la regularidad en el origen.

### Ejemplo: curva regular con autointerseccion

Una lemniscata parametrizada de forma adecuada puede ser regular en todos sus puntos y, sin embargo, cruzarse consigo misma. La regularidad es local.

## Inmersion y subvariedad

Una curva regular es una inmersion de dimension uno. Si, ademas, la aplicacion es homeomorfismo sobre su imagen, la traza hereda localmente la estructura de subvariedad embebida.

### Distincion clave

- inmersion: el diferencial es inyectivo;
- embebimiento: ademas la topologia de la imagen coincide con la inducida por la parametrizacion.

Esta distincion reaparece mas adelante para superficies.

## Reparametrizaciones regulares

Sea $\phi:J\to I$ un difeomorfismo de clase $C^1$ con $\phi'(s)\neq 0$. La curva reparametrizada es

$$
\widetilde\gamma(s)=\gamma(\phi(s)).
$$

Por regla de la cadena,

$$
\widetilde\gamma'(s)=\gamma'(\phi(s))\,\phi'(s).
$$

Por tanto, $\widetilde\gamma$ es regular si y solo si $\gamma$ lo es.

## Proposicion: invariancia de la recta tangente

Si $\gamma$ y $\widetilde\gamma=\gamma\circ\phi$ difieren por una reparametrizacion regular, entonces determinan la misma recta tangente en puntos correspondientes.

### Prueba

El vector tangente cambia por el factor escalar no nulo $\phi'(s)$, de modo que el subespacio generado por la derivada permanece igual:

$$
\operatorname{span}\{\widetilde\gamma'(s)\}=\operatorname{span}\{\gamma'(\phi(s))\}.
$$

## Orientacion

Una reparametrizacion con $\phi'(s)>0$ preserva orientacion; una con $\phi'(s)<0$ la invierte. Dos curvas con la misma traza pueden representar orientaciones opuestas.

## Curvas simples, cerradas y periodicas

Una curva se dice **simple** si no se autointersecta, salvo posiblemente en un cierre periodico. Se dice **cerrada** si existe $T>0$ con

$$
\gamma(t+T)=\gamma(t).
$$

El lenguaje correcto separa periodicidad de la parametrizacion, simplicidad de la traza y orientacion inducida por el parametro.

## Parametrizacion por longitud de arco

Sea $\gamma:[a,b]\to\mathbb{R}^n$ regular de clase $C^1$. Definimos

$$
s(t)=\int_a^t \|\gamma'(u)\|\,du.
$$

Como $\|\gamma'(t)\|>0$, la funcion $s$ es estrictamente creciente y por tanto invertible sobre su imagen. Si escribimos $t=t(s)$, la nueva parametrizacion

$$
\alpha(s)=\gamma(t(s))
$$

satisface

$$
\|\alpha'(s)\|=1.
$$

### Demostracion

Por regla de la cadena,

$$
\alpha'(s)=\gamma'(t(s))\,t'(s).
$$

Pero $s'(t)=\|\gamma'(t)\|$, luego

$$
t'(s)=\frac{1}{\|\gamma'(t(s))\|}.
$$

Por tanto,

$$
\|\alpha'(s)\|=\frac{\|\gamma'(t(s))\|}{\|\gamma'(t(s))\|}=1.
$$

## Interpretacion geometrica

La parametrizacion por longitud de arco elimina la rapidez artificial de la curva. Deja solo la geometria intrinseca de su traza orientada.

## Ejemplos canonicos

### Circunferencia

$$
\gamma(t)=(R\cos t,R\sin t)
$$

posee rapidez constante $R$ y pasa a una parametrizacion unitaria tras reescalar por $s=Rt$.

### Helice

$$
\gamma(t)=(a\cos t,a\sin t,bt)
$$

ya esta a rapidez constante y muestra que en el espacio la teoria necesitara, ademas de curvatura, un segundo invariante: la torsion.

## Cierre

Las curvas regulares parametrizadas son el objeto basico de la teoria local de curvas. La regularidad garantiza existencia de tangente, estabilidad frente a cambios de parametro y la posibilidad de pasar al parametro de longitud de arco, que sera el marco natural para introducir curvatura y marcos moviles.
