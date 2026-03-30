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

## Ejercicios

### Ejercicio 1

Verificar si $\gamma(t) = (t^2, t^3)$ es regular en $t = 0$.

### Ejercicio 2

Encontrar la derivada de la curva $\gamma(t) = (e^t, \ln t, t)$ en $t = 1$.

### Ejercicio 3

Reparametrizar la circunsencia unitaria por longitud de arco.

### Ejercicio 4

Calcular la rapidez de $\gamma(t) = (3t, 4t, 5t)$.

### Ejercicio 5

Determinar si $\gamma(t) = (\cos t, \sin t)$ es una curva simple.

### Ejercicio 6

Encontrar el vector tangente unitario de la helice $\gamma(t) = (a\cos t, a\sin t, bt)$ en $t = \pi/2$.

### Ejercicio 7

Reparametrizar $\gamma(t) = (t, t^2)$ por longitud de arco desde $t = 0$.

### Ejercicio 8

Verificar que $\gamma(t) = (\cosh t, \sinh t)$ tiene derivada no nula para todo $t$.

### Ejercicio 9

Calcular la longitud de $\gamma(t) = (t, t^2)$ desde $t = 0$ hasta $t = 1$.

### Ejercicio 10

Determinar la orientacion de la reparametrizacion $\phi(s) = 2s$ de la curva $\gamma$.

### Ejercicio 11

Encontrar una parametrizacion regular de la parabola $y = x^2$ en el origen.

### Ejercicio 12

Verificar que $\gamma(t) = (t, |t|)$ no es regular en $t = 0$.

### Ejercicio 13

Calcular la rapidez de la curva $\gamma(t) = (t\cos t, t\sin t)$.

### Ejercicio 14

Determinar si $\gamma(t) = (t^3, t^2)$ es regular en $t = 0$.

### Ejercicio 15

Encontrar el vector tangente de $\gamma(t) = (e^{2t}, e^{-t})$ en $t = 0$.

## Soluciones

### Solucion 1

$\gamma'(t) = (2t, 3t^2)$, luego $\gamma'(0) = (0, 0)$. No es regular en $t = 0$.

### Solucion 2

$\gamma'(t) = (e^t, 1/t, 1)$, luego $\gamma'(1) = (e, 1, 1)$.

### Solucion 3

$\gamma(t) = (\cos t, \sin t)$ tiene rapidez $1$, ya esta parametrizada por longitud de arco.

### Solucion 4

$\gamma'(t) = (3, 4, 5)$, luego $\|\gamma'(t)\| = \sqrt{9 + 16 + 25} = \sqrt{50} = 5\sqrt{2}$.

### Solucion 5

La curva $\gamma(t) = (\cos t, \sin t)$ no es simple porque $\gamma(0) = \gamma(2\pi)$.

### Solucion 6

$\gamma'(t) = (-a\sin t, a\cos t, b)$, luego en $t = \pi/2$: $(-a, 0, b)$. Vector unitario: $\frac{1}{\sqrt{a^2 + b^2}}(-a, 0, b)$.

### Solucion 7

$s(t) = \int_0^t \sqrt{1 + 4u^2}\,du$. La integral no tiene forma elemental simple, pero la reparametrizacion existe implicitamente.

### Solucion 8

$\gamma'(t) = (\sinh t, \cosh t)$, $\|\gamma'(t)\| = \sqrt{\sinh^2 t + \cosh^2 t} = \sqrt{2\cosh^2 t - 1} > 0$ para todo $t$.

### Solucion 9

$L = \int_0^1 \sqrt{1 + 4t^2}\,dt = \frac{1}{4}(\sqrt{5}\mathrm{arcsinh}(2) + 2\sqrt{5})$.

### Solucion 10

$\phi'(s) = 2 > 0$, luego preserva orientacion.

### Solucion 11

$\gamma(t) = (t, t^2)$ tiene $\gamma'(0) = (1, 0) \neq 0$, luego es regular en el origen.

### Solucion 12

$\gamma'(t) = (1, \mathrm{sgn}(t))$ para $t \neq 0$, pero en $t = 0$ no es derivable, luego no es regular en $t = 0$.

### Solucion 13

$\gamma'(t) = (\cos t - t\sin t, \sin t + t\cos t)$, luego $\|\gamma'(t)\| = \sqrt{1 + t^2}$.

### Solucion 14

$\gamma'(t) = (3t^2, 2t)$, luego $\gamma'(0) = (0, 0)$. No es regular en $t = 0$.

### Solucion 15

$\gamma'(t) = (2e^{2t}, -e^{-t})$, luego $\gamma'(0) = (2, -1)$. El vector tangente es $(2, -1)$.
