---
title: Limite de una funcion de varias variables
description: Definicion epsilon-delta, criterio secuencial, dependencia de trayectorias y tecnicas de calculo de limites multivariables.
---

# Limite de una funcion de varias variables

## Motivacion e intuicion

En una variable, acercarse a un punto significa acercarse por izquierda o por derecha. En varias variables eso deja de ser cierto: se puede aproximar un punto por lineas, parabolas, espirales y, en general, por trayectorias arbitrarias.

Por eso el concepto de limite multivariable es mas exigente. Un valor limite solo existe si todas esas aproximaciones fuerzan el mismo comportamiento.

## Definicion epsilon-delta

Sea

$$
f:D\subseteq \mathbb{R}^n\to \mathbb{R},
$$

y sea $a\in \mathbb{R}^n$ un punto de acumulacion de $D$.

Decimos que

$$
\lim_{x\to a}f(x)=L
$$

si para todo

$$
\varepsilon>0
$$

existe

$$
\delta>0
$$

tal que

$$
x\in D,\ 0<\|x-a\|<\delta
\Rightarrow
|f(x)-L|<\varepsilon.
$$

La norma puede tomarse euclidea; en dimension finita, todas las normas usuales son equivalentes para la teoria local del limite.

## Interpretacion geometrica

La condicion anterior afirma que el valor de $f(x)$ puede hacerse arbitrariamente cercano a $L$ obligando a $x$ a permanecer suficientemente cerca de $a$, sin importar la direccion desde la que se acerque.

Lo esencial es el control uniforme sobre todo un entorno perforado del punto.

## Unicidad del limite

### Teorema 1

Si

$$
\lim_{x\to a}f(x)=L
\qquad\text{y}\qquad
\lim_{x\to a}f(x)=M,
$$

entonces

$$
L=M.
$$

#### Demostracion

Supongamos $L\ne M$. Tomamos

$$
\varepsilon=\frac{|L-M|}{3}.
$$

Existen $\delta_1,\delta_2>0$ tales que

$$
0<\|x-a\|<\delta_1\Rightarrow |f(x)-L|<\varepsilon,
$$

y

$$
0<\|x-a\|<\delta_2\Rightarrow |f(x)-M|<\varepsilon.
$$

Si

$$
0<\|x-a\|<\min(\delta_1,\delta_2),
$$

entonces por desigualdad triangular

$$
|L-M|
\le |L-f(x)|+|f(x)-M|
<
2\varepsilon
=
\frac{2}{3}|L-M|,
$$

contradiccion.

## Criterio secuencial

### Teorema 2

Se tiene

$$
\lim_{x\to a}f(x)=L
$$

si y solo si para toda sucesion $(x_k)$ de puntos de $D\setminus\{a\}$ tal que

$$
x_k\to a,
$$

se cumple

$$
f(x_k)\to L.
$$

#### Idea de la demostracion

- Si el limite epsilon-delta vale, basta aplicar la definicion a los terminos de la sucesion suficientemente avanzados.
- Si falla el limite epsilon-delta, existe un $\varepsilon_0>0$ tal que para todo $\delta>0$ se encuentra un punto $x$ con

$$
0<\|x-a\|<\delta
$$

y

$$
|f(x)-L|\ge \varepsilon_0.
$$

Tomando $\delta=1/k$ se construye una sucesion contradictoria.

### Consecuencia practica

Para demostrar que un limite **no** existe, basta encontrar dos sucesiones o dos trayectorias que lleguen al punto y produzcan limites distintos.

## Criterio por trayectorias

Si existen dos curvas

$$
\gamma_1(t),\ \gamma_2(t)\to a
$$

para las cuales

$$
f(\gamma_1(t))
$$

y

$$
f(\gamma_2(t))
$$

tienen limites diferentes, entonces el limite de $f$ en $a$ no existe.

### Advertencia

Verificar igualdad a lo largo de algunas trayectorias no prueba existencia. Las trayectorias solo son una herramienta destructiva, no una prueba positiva general salvo que se use un argumento estructural adicional.

## Operaciones con limites

Si

$$
\lim_{x\to a}f(x)=L,
\qquad
\lim_{x\to a}g(x)=M,
$$

entonces:

$$
\lim_{x\to a}(f+g)(x)=L+M,
$$

$$
\lim_{x\to a}(fg)(x)=LM,
$$

y, si $M\ne 0$,

$$
\lim_{x\to a}\frac{f(x)}{g(x)}=\frac{L}{M}
$$

siempre que el cociente tenga sentido en un entorno perforado.

Estas reglas se prueban igual que en una variable usando desigualdades elementales.

## Continuidad

La funcion $f$ es continua en $a\in D$ si

$$
\lim_{x\to a}f(x)=f(a).
$$

La continuidad en varias variables conserva la misma filosofia que en una variable, pero su verificacion suele apoyarse en composiciones, estimaciones y el hecho de que polinomios, sumas, productos y cocientes bien definidos son continuos.

## Primeros ejemplos

### Ejemplo 1: limite evidente

Sea

$$
f(x,y)=x^2+3xy-y^2.
$$

Como los polinomios son continuos,

$$
\lim_{(x,y)\to (1,2)} f(x,y)=f(1,2)=1+6-4=3.
$$

### Ejemplo 2: cociente continuo fuera del denominador nulo

Sea

$$
f(x,y)=\frac{x+y}{1+x^2+y^2}.
$$

Entonces

$$
\lim_{(x,y)\to (0,0)} f(x,y)=0.
$$

## Ejemplos de limites de funciones de varias variables {#ejemplos-de-limites-de-funciones-de-varias-variables}

Los ejemplos siguientes muestran las tecnicas esenciales.

### Ejemplo 3: no existencia por caminos rectilineos

Considere

$$
f(x,y)=\frac{xy}{x^2+y^2},
\qquad
(x,y)\ne (0,0).
$$

Estudiemos el punto $(0,0)$.

Si tomamos la trayectoria

$$
y=x,
$$

obtenemos

$$
f(x,x)=\frac{x^2}{2x^2}=\frac12
$$

para $x\ne 0$.

Si tomamos la trayectoria

$$
y=-x,
$$

entonces

$$
f(x,-x)=\frac{-x^2}{2x^2}=-\frac12.
$$

Como aparecen dos valores distintos, el limite no existe.

### Ejemplo 4: no basta mirar por los ejes

Sea

$$
f(x,y)=\frac{x^2y}{x^4+y^2},
\qquad
(x,y)\ne (0,0).
$$

Sobre los ejes se obtiene:

$$
f(x,0)=0,
\qquad
f(0,y)=0.
$$

Sin embargo, sobre la parabola

$$
y=x^2
$$

se tiene

$$
f(x,x^2)=\frac{x^4}{x^4+x^4}=\frac12.
$$

Luego el limite en el origen no existe.

Este ejemplo es pedagogicamente importante: revisar solo las trayectorias mas obvias puede ser enganoso.

### Ejemplo 5: existencia por estimacion

Sea

$$
f(x,y)=\frac{x^2y}{x^2+y^2},
\qquad
(x,y)\ne (0,0).
$$

Queremos probar que

$$
\lim_{(x,y)\to (0,0)} f(x,y)=0.
$$

Usamos

$$
|f(x,y)|
=
\frac{|x|^2|y|}{x^2+y^2}
\le |y|,
$$

porque

$$
\frac{x^2}{x^2+y^2}\le 1.
$$

Como

$$
|y|\le \sqrt{x^2+y^2}\to 0,
$$

por el teorema del sandwich se concluye el limite.

### Ejemplo 6: uso de coordenadas polares

Sea

$$
f(x,y)=\frac{x^2+y^2}{\sqrt{x^2+y^2+1}}.
$$

Escribiendo

$$
x=r\cos\theta,
\qquad
y=r\sin\theta,
$$

resulta

$$
f(x,y)=\frac{r^2}{\sqrt{1+r^2}}.
$$

Cuando

$$
r\to 0,
$$

tenemos

$$
\frac{r^2}{\sqrt{1+r^2}}\to 0.
$$

Como la expresion final no depende de $\theta$, el limite es

$$
0.
$$

### Ejemplo 7: oscilacion radial controlada

Sea

$$
f(x,y)=\sqrt{x^2+y^2}\,\sin\!\left(\frac{1}{x^2+y^2}\right),
\qquad
(x,y)\ne (0,0).
$$

Entonces

$$
|f(x,y)|\le \sqrt{x^2+y^2}.
$$

Por tanto,

$$
\lim_{(x,y)\to (0,0)}f(x,y)=0.
$$

Aqui la oscilacion existe, pero queda amortiguada por el factor radial.

## Tecnicas frecuentes

### 1. Continuidad algebraica

Si la funcion se construye por composicion de funciones continuas y esta bien definida en el punto, el limite se obtiene por sustitucion directa.

### 2. Estimaciones

Conviene comparar con potencias de la distancia al punto:

$$
\|(x,y)\|=\sqrt{x^2+y^2}.
$$

Si logramos mostrar

$$
|f(x,y)|\le C\|(x,y)\|^\alpha
$$

con $\alpha>0$, el limite al origen es cero.

### 3. Coordenadas polares

Cerca del origen en $\mathbb{R}^2$, muchas expresiones se simplifican usando

$$
x=r\cos\theta,\qquad y=r\sin\theta.
$$

Si la funcion queda acotada por una potencia positiva de $r$, el limite es cero.

### 4. Construccion de trayectorias adaptadas

Cuando el denominador mezcla potencias distintas, conviene intentar curvas del tipo

$$
y=mx,\qquad y=x^2,\qquad y=x^k.
$$

No es una receta mecanica, pero suele revelar la escala correcta del problema.

## Limites iterados

A veces se estudian los iterados

$$
\lim_{x\to a}\lim_{y\to b}f(x,y),
\qquad
\lim_{y\to b}\lim_{x\to a}f(x,y).
$$

Si el limite total existe, los iterados que tengan sentido y se tomen sobre dominios adecuados deben coincidir con el.

Pero la reciproca falla: incluso cuando ambos iterados existen e incluso cuando son iguales, el limite total puede no existir.

## Observacion conceptual

La principal dificultad del calculo multivariable es que la variable se aproxima al punto por un continuo de direcciones. Todo el aparato posterior de derivadas parciales, gradiente y diferenciabilidad nace como respuesta a esa complejidad.

## Conclusion

El limite multivariable no se domina memorizando caminos aislados. Lo que hace falta es criterio:

- usar trayectorias para destruir;
- usar estimaciones o coordenadas adecuadas para probar;
- distinguir el comportamiento genuinamente radial del comportamiento dependiente de la direccion.
