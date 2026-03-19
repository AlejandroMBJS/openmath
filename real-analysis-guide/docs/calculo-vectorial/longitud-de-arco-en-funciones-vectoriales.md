---
title: Longitud de arco en funciones vectoriales
description: Definicion de longitud de arco para curvas parametrizadas, invariancia por reparametrizacion y parametrizacion por longitud de arco.
---

# Longitud de arco en funciones vectoriales

## Motivacion e intuicion

La longitud de una curva no debe depender de la forma en que la parametrizamos, sino solo de la trayectoria geometrica. Para una curva parametrizada, la derivada mide desplazamiento instantaneo; su norma debe entonces medir la contribucion local a la longitud.

De esa idea sale la formula fundamental:

$$
L=\int_a^b \|r'(t)\|\,dt.
$$

## Definicion de longitud

Sea

$$
r:[a,b]\to \mathbb{R}^n
$$

una curva regular de clase $C^1$.

Su **longitud de arco** entre $a$ y $b$ se define por

$$
L(r)=\int_a^b \|r'(t)\|\,dt.
$$

## Justificacion a partir de sumas poligonales

Si dividimos el intervalo

$$
a=t_0<t_1<\cdots<t_m=b,
$$

la curva puede aproximarse por la poligonal que une sucesivamente los puntos

$$
r(t_0),r(t_1),\dots,r(t_m).
$$

La longitud de esa poligonal es

$$
\sum_{j=1}^m \|r(t_j)-r(t_{j-1})\|.
$$

En el limite, cuando la particion se refina, esta suma converge a

$$
\int_a^b \|r'(t)\|\,dt.
$$

## Interpretacion cinematica

Si

$$
r(t)
$$

es posicion y

$$
v(t)=r'(t),
$$

entonces la longitud recorrida entre $a$ y $b$ es

$$
\int_a^b \|v(t)\|\,dt.
$$

Es decir: distancia recorrida = integral de la rapidez.

## Ejemplos basicos

### Ejemplo 1: recta

Sea

$$
r(t)=P_0+t v,
\qquad
a\le t\le b.
$$

Entonces

$$
r'(t)=v,
\qquad
\|r'(t)\|=\|v\|.
$$

Por tanto

$$
L=\int_a^b \|v\|\,dt=(b-a)\|v\|.
$$

### Ejemplo 2: circunferencia

Sea

$$
r(t)=\langle a\cos t,a\sin t\rangle,
\qquad
0\le t\le 2\pi.
$$

Entonces

$$
r'(t)=\langle -a\sin t,a\cos t\rangle,
\qquad
\|r'(t)\|=a.
$$

Luego

$$
L=\int_0^{2\pi} a\,dt=2\pi a.
$$

## Longitud de arco de una grafica

Si una curva plana esta dada por

$$
r(t)=\langle t,f(t)\rangle,
\qquad
a\le t\le b,
$$

entonces

$$
r'(t)=\langle 1,f'(t)\rangle,
$$

y

$$
L=\int_a^b \sqrt{1+(f'(t))^2}\,dt.
$$

Esta es la formula clasica de longitud de arco para graficas cartesianas.

## Invariancia por reparametrizacion

La longitud debe ser independiente de la parametrizacion regular elegida.

### Teorema 1

Si

$$
\tilde r(u)=r(\phi(u))
$$

es una reparametrizacion suave y monotona de la misma curva, entonces ambas parametrizaciones tienen la misma longitud.

#### Demostracion

Por regla de la cadena,

$$
\tilde r'(u)=r'(\phi(u))\phi'(u).
$$

Luego

$$
\|\tilde r'(u)\|=\|r'(\phi(u))\|\,|\phi'(u)|.
$$

Al integrar y hacer cambio de variable

$$
t=\phi(u),
$$

se obtiene la misma integral de longitud.

## Longitud de arco acumulada

Fijado un punto base $t_0$, definimos

$$
s(t)=\int_{t_0}^t \|r'(u)\|\,du.
$$

Esta funcion mide la longitud recorrida desde $t_0$ hasta $t$.

### Proposicion 2

Si la curva es regular, entonces

$$
s'(t)=\|r'(t)\|>0.
$$

#### Consecuencia

La funcion $s(t)$ es estrictamente creciente y, en principio, puede invertirse localmente.

## Parametrizacion por longitud de arco

Si invertimos

$$
t=t(s),
$$

podemos reparametrizar la curva como

$$
\gamma(s)=r(t(s)).
$$

Entonces

$$
\left\|\frac{d\gamma}{ds}\right\|=1.
$$

### Interpretacion

La nueva parametrizacion recorre la curva a rapidez unitaria.

## Ejemplos trabajados

### Ejemplo 3: parabola

Sea

$$
r(t)=\langle t,\tfrac12 t^2\rangle,
\qquad
0\le t\le 1.
$$

Entonces

$$
r'(t)=\langle 1,t\rangle,
\qquad
\|r'(t)\|=\sqrt{1+t^2}.
$$

La longitud es

$$
L=\int_0^1 \sqrt{1+t^2}\,dt.
$$

Esta integral no es elemental de manera inmediata, pero es perfectamente valida como expresion exacta y puede evaluarse mediante sustituciones hiperbolicas o funciones especiales.

### Ejemplo 4: helice

Sea

$$
r(t)=\langle a\cos t,a\sin t,b t\rangle,
\qquad
0\le t\le 2\pi.
$$

Entonces

$$
r'(t)=\langle -a\sin t,a\cos t,b\rangle,
$$

y

$$
\|r'(t)\|=\sqrt{a^2+b^2}.
$$

La longitud es

$$
L=2\pi\sqrt{a^2+b^2}.
$$

## Distincion entre longitud y desplazamiento

La longitud de arco no coincide con

$$
\|r(b)-r(a)\|.
$$

Solo coinciden cuando la curva es un segmento recto recorrido sin retrocesos laterales.

## Errores comunes

- Usar la norma del vector posicion en vez de la norma de la derivada.
- Confundir longitud de arco con desplazamiento neto.
- Olvidar que la longitud no debe depender de la parametrizacion.
- Reparametrizar por longitud de arco sin verificar regularidad.

## Ejercicios propuestos

1. Calcular la longitud de rectas, circunferencias y helices.
2. Deducir la formula de longitud para una grafica $y=f(x)$.
3. Verificar la invariancia por reparametrizacion en ejemplos concretos.
4. Construir la funcion de longitud acumulada de una curva dada.
5. Parametrizar por longitud de arco una circunferencia.

## Cierre

La longitud de arco convierte la curva parametrizada en un objeto medible de manera intrinseca. A partir de ella se define la parametrizacion natural por arco y se prepara el terreno para la formula mas fina de la geometria local: la curvatura.
