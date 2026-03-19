---
title: Curvatura
description: Definicion de curvatura para curvas parametrizadas, formulas equivalentes en R2 y R3 e interpretacion geometrica.
---

# Curvatura

## Motivacion e intuicion

La curvatura responde a una pregunta local precisa: que tan rapido cambia la direccion de una curva.

Una recta tiene curvatura nula porque no cambia de direccion. Una circunferencia de radio pequeno tiene gran curvatura porque gira rapidamente. La curvatura es, por tanto, una medida intrinseca del doblamiento de la trayectoria.

## Definicion por longitud de arco

Si una curva regular esta parametrizada por longitud de arco

$$
s,
$$

su curvatura se define por

$$
\kappa(s)=\left\|\frac{dT}{ds}\right\|,
$$

donde

$$
T(s)
$$

es el vector tangente unitario.

### Interpretacion

La curvatura es la magnitud del cambio del tangente unitario por unidad de longitud recorrida.

## Formula para una parametrizacion cualquiera

Si la curva esta dada por un parametro general $t$, entonces

$$
\frac{dT}{dt}=\frac{dT}{ds}\frac{ds}{dt}.
$$

Como

$$
\frac{ds}{dt}=\|r'(t)\|,
$$

resulta

$$
\kappa(t)=\frac{\|T'(t)\|}{\|r'(t)\|}.
$$

## Formula con producto cruz en R3

Para una curva regular $r(t)$ en $\mathbb{R}^3$,

$$
\kappa(t)=\frac{\|r'(t)\times r''(t)\|}{\|r'(t)\|^3}.
$$

### Esbozo de justificacion

La componente de la aceleracion perpendicular al tangente satisface

$$
a_N=\kappa \|r'\|^2.
$$

A la vez,

$$
\|r'\times r''\|=\|r'\|\,a_N.
$$

Combinando ambas relaciones se obtiene la formula.

## Formula para curvas planas cartesianas

Si una curva plana esta dada por

$$
y=f(x),
$$

entonces una parametrizacion natural es

$$
r(x)=\langle x,f(x)\rangle.
$$

En este caso,

$$
\kappa(x)=\frac{|f''(x)|}{\bigl(1+(f'(x))^2\bigr)^{3/2}}.
$$

## Curvatura con signo en el plano

En curvas planas orientadas, a veces se usa una version con signo que distingue si la curva gira hacia un lado u otro. En calculo vectorial elemental suele trabajarse con la curvatura no negativa

$$
\kappa\ge 0.
$$

## Radio de curvatura

Si

$$
\kappa\ne 0,
$$

el radio de curvatura se define como

$$
R=\frac{1}{\kappa}.
$$

En una circunferencia de radio $a$, el radio de curvatura coincide con $a$.

## Circunferencia osculatriz

En un punto donde

$$
\kappa\ne 0,
$$

la curva tiene una circunferencia osculatriz: la circunferencia que mejor aproxima localmente la curva y cuyo radio es

$$
R=\frac{1}{\kappa}.
$$

Su centro se obtiene desplazandose desde el punto sobre la curva en direccion del normal principal una distancia $R$.

## Ejemplos basicos

### Ejemplo 1: recta

Sea

$$
r(t)=P_0+t v.
$$

Entonces

$$
r''(t)=0,
$$

por lo que

$$
\kappa=0.
$$

### Ejemplo 2: circunferencia de radio $a$

Sea

$$
r(t)=\langle a\cos t,a\sin t\rangle.
$$

Entonces

$$
r'(t)=\langle -a\sin t,a\cos t\rangle,
\qquad
r''(t)=\langle -a\cos t,-a\sin t\rangle.
$$

Se calcula

$$
\|r'(t)\|=a,
$$

y

$$
\|r'(t)\times r''(t)\|=a^2
$$

si se incrusta la curva en $\mathbb{R}^3$. Por tanto

$$
\kappa=\frac{a^2}{a^3}=\frac{1}{a}.
$$

### Ejemplo 3: parabola

Para

$$
r(t)=\langle t,\tfrac12 t^2\rangle,
$$

tenemos

$$
r'(t)=\langle 1,t\rangle,
\qquad
r''(t)=\langle 0,1\rangle.
$$

La formula plana da

$$
\kappa(t)=\frac{1}{(1+t^2)^{3/2}}.
$$

La curvatura es maxima en

$$
t=0
$$

y decrece al alejarnos del vertice.

### Ejemplo 4: helice

Sea

$$
r(t)=\langle a\cos t,a\sin t,b t\rangle.
$$

Entonces

$$
r'(t)=\langle -a\sin t,a\cos t,b\rangle,
$$

$$
r''(t)=\langle -a\cos t,-a\sin t,0\rangle.
$$

Se obtiene

$$
\|r'(t)\|=\sqrt{a^2+b^2},
$$

y

$$
\|r'(t)\times r''(t)\|=a\sqrt{a^2+b^2}.
$$

Luego

$$
\kappa=\frac{a}{a^2+b^2}.
$$

## Relacion con la aceleracion

Si la curva describe un movimiento con velocidad

$$
v=r',
$$

entonces

$$
a_N=\kappa \|v\|^2.
$$

Esto significa que la curvatura controla la componente puramente direccional de la aceleracion.

## Geometria cualitativa

- curvatura grande: giro rapido;
- curvatura pequena: giro lento;
- curvatura cero: comportamiento local rectilineo.

## Errores comunes

- Confundir curvatura con segunda derivada sin normalizar.
- Olvidar el factor

$$
\|r'(t)\|^3
$$

en la formula con producto cruz.
- Pensar que la curvatura depende de la rapidez de parametrizacion; en realidad es intrinseca.
- No distinguir entre radio de curvatura y radio geometrico de la posicion respecto del origen.

## Ejercicios propuestos

1. Calcular la curvatura de rectas, circunferencias y parabola.
2. Verificar la formula plana para una grafica $y=f(x)$.
3. Hallar la curvatura de una helice.
4. Relacionar curvatura con componente normal de la aceleracion.
5. Interpretar geometricamente el comportamiento de $\kappa$ en una parabola.

## Cierre

La curvatura es la primera magnitud intrinseca que mide realmente la forma local de una curva. Une tangente, normal, longitud de arco y aceleracion en una sola idea: cuantificar el cambio de direccion de la trayectoria.
