---
title: Componentes tangencial y normal de la aceleracion
description: Descomposicion de la aceleracion en la base de Frenet elemental y relacion con rapidez y curvatura.
---

# Componentes tangencial y normal de la aceleracion

## Motivacion e intuicion

La aceleracion puede cambiar:

- la rapidez del movimiento;
- la direccion del movimiento.

Esas dos contribuciones son geometricamente distintas y conviene separarlas. La componente tangencial cambia la rapidez; la componente normal cambia la direccion de la trayectoria.

## Descomposicion fundamental

Sea

$$
r(t)
$$

una curva regular de clase $C^2$ con velocidad

$$
v(t)=r'(t)
$$

no nula.

Escribimos

$$
v(t)=\|v(t)\|\,T(t),
$$

donde $T$ es el tangente unitario.

Derivando,

$$
a(t)=\frac{d}{dt}\bigl(\|v\|\,T\bigr)
=
\frac{d}{dt}\|v\|\,T+\|v\|\,T'.
$$

Como

$$
T'
$$

es paralelo a $N$, se obtiene la forma

$$
a(t)=a_T(t)\,T(t)+a_N(t)\,N(t),
$$

donde $a_T$ y $a_N$ son las componentes tangencial y normal.

## Componente tangencial

La componente tangencial es

$$
a_T=\frac{d}{dt}\|v\|
=
\frac{v\cdot a}{\|v\|}.
$$

### Interpretacion

Mide el cambio instantaneo de la rapidez.

## Componente normal

La componente normal es

$$
a_N=\kappa \|v\|^2,
$$

donde $\kappa$ es la curvatura.

Equivalentemente,

$$
a_N=\sqrt{\|a\|^2-a_T^2}.
$$

### Interpretacion

Mide cuanto de la aceleracion se dedica a curvar la trayectoria.

## Teorema 1

Para una curva regular de clase $C^2$,

$$
a=a_T T+a_N N.
$$

#### Demostracion

Como

$$
v=\|v\|T,
$$

al derivar se obtiene

$$
a=\frac{d}{dt}\|v\|\,T+\|v\|T'.
$$

Por definicion del normal principal,

$$
T'=\|T'\|\,N.
$$

Por tanto

$$
a=\frac{d}{dt}\|v\|\,T+\|v\|\|T'\|\,N.
$$

La cantidad

$$
\|v\|\|T'\|
$$

coincide con

$$
\kappa \|v\|^2
$$

porque

$$
\kappa=\frac{\|T'\|}{\|v\|}.
$$

## Caso de rapidez constante

Si

$$
\|v(t)\|=\text{constante},
$$

entonces

$$
a_T=0,
$$

y toda la aceleracion es normal:

$$
a=a_N N.
$$

### Ejemplo

En movimiento circular uniforme, la aceleracion es puramente centripeta.

## Caso de trayectoria rectilinea

Si la curva es una recta y la direccion no cambia, entonces

$$
a_N=0.
$$

Toda la aceleracion es tangencial:

$$
a=a_T T.
$$

### Comentario

Esto ocurre, por ejemplo, en un movimiento rectilineo con rapidez variable.

## Ejemplos trabajados

### Ejemplo 1: movimiento circular uniforme

Sea

$$
r(t)=\langle a\cos(\omega t),a\sin(\omega t)\rangle.
$$

Entonces

$$
\|v(t)\|=a\omega
$$

es constante, luego

$$
a_T=0.
$$

La aceleracion es

$$
a(t)=\langle -a\omega^2\cos(\omega t),-a\omega^2\sin(\omega t)\rangle,
$$

y su norma es

$$
\|a(t)\|=a\omega^2.
$$

Como la componente tangencial es nula,

$$
a_N=a\omega^2.
$$

### Ejemplo 2: movimiento rectilineo acelerado

Sea

$$
r(t)=\langle t^2,0,0\rangle.
$$

Entonces

$$
v(t)=\langle 2t,0,0\rangle,
\qquad
a(t)=\langle 2,0,0\rangle.
$$

La trayectoria es recta, asi que

$$
a_N=0.
$$

Toda la aceleracion es tangencial.

### Ejemplo 3: parabola

Sea

$$
r(t)=\langle t,\tfrac12 t^2\rangle.
$$

Entonces

$$
v(t)=\langle 1,t\rangle,
\qquad
a(t)=\langle 0,1\rangle.
$$

La rapidez es

$$
\|v(t)\|=\sqrt{1+t^2},
$$

de modo que

$$
a_T=\frac{d}{dt}\sqrt{1+t^2}
=
\frac{t}{\sqrt{1+t^2}}.
$$

La componente normal puede obtenerse por

$$
a_N=\sqrt{\|a\|^2-a_T^2}
=
\sqrt{1-\frac{t^2}{1+t^2}}
=
\frac{1}{\sqrt{1+t^2}}.
$$

## Formula mediante producto cruz

En $\mathbb{R}^3$, si $v=r'$ y $a=r''$, entonces

$$
\kappa=\frac{\|v\times a\|}{\|v\|^3}.
$$

Por tanto

$$
a_N=\kappa\|v\|^2=\frac{\|v\times a\|}{\|v\|}.
$$

Esta formula es muy util en calculos.

## Significado fisico

- $a_T$ mide cuanto acelera o frena el movil;
- $a_N$ mide cuanto gira su direccion de movimiento.

Una particula puede tener:

- gran aceleracion tangencial y nula normal;
- gran aceleracion normal y nula tangencial;
- ambas simultaneamente.

## Errores comunes

- Confundir rapidez constante con aceleracion nula.
- Pensar que toda aceleracion apunta en la direccion del movimiento.
- Usar formulas de curvatura antes de verificar que la velocidad no se anula.
- No distinguir entre componentes escalares $a_T,a_N$ y vectores $a_T T,a_N N$.

## Ejercicios propuestos

1. Descomponer la aceleracion en varios movimientos planos y espaciales.
2. Verificar que en el movimiento circular uniforme la componente tangencial es cero.
3. Verificar que en una trayectoria rectilinea la componente normal es cero.
4. Calcular $a_T$ y $a_N$ para una helice.
5. Relacionar $a_N$ con el cambio de direccion del tangente.

## Cierre

La descomposicion

$$
a=a_T T+a_N N
$$

es una de las formulas mas importantes del calculo vectorial de curvas. Separa dinamica y geometria: una parte controla la rapidez y la otra controla la curvatura de la trayectoria.
