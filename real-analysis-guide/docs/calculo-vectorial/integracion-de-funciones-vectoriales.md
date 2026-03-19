---
title: Integracion de funciones vectoriales
description: Integrales indefinidas y definidas de funciones vectoriales, definicion por componentes y teorema fundamental del calculo vectorial elemental.
---

# Integracion de funciones vectoriales

## Motivacion e intuicion

Si la derivada de una funcion vectorial describe velocidad o cambio instantaneo, la integral debe permitir reconstruir el movimiento acumulado. En mecanica eso significa, por ejemplo, recuperar la posicion a partir de la velocidad o la velocidad a partir de la aceleracion.

La integral vectorial no introduce una teoria nueva: se construye integrando componente a componente. Pero sus interpretaciones geometricas y fisicas son muy ricas.

## Definicion de integral en funciones vectoriales {#definicion-de-integral-en-funciones-vectoriales}

Sea

$$
r(t)=\langle f_1(t),\dots,f_n(t)\rangle
$$

definida en un intervalo $[a,b]$, donde cada componente $f_j$ es integrable.

Definimos la integral de $r$ por

$$
\int_a^b r(t)\,dt
=
\left\langle
\int_a^b f_1(t)\,dt,
\dots,
\int_a^b f_n(t)\,dt
\right\rangle.
$$

## Interpretacion

La integral acumula desplazamientos vectoriales. Si

$$
r'(t)=v(t)
$$

es la velocidad, entonces

$$
\int_a^b v(t)\,dt
$$

es el desplazamiento neto entre los instantes $a$ y $b$.

## Integral indefinida

Una primitiva de $r$ es una funcion vectorial $R$ tal que

$$
R'(t)=r(t).
$$

### Teorema 1

Si

$$
r(t)=\langle f_1(t),\dots,f_n(t)\rangle,
$$

entonces

$$
\int r(t)\,dt=
\left\langle
\int f_1(t)\,dt,
\dots,
\int f_n(t)\,dt
\right\rangle + C,
$$

donde $C\in \mathbb{R}^n$ es un vector constante.

#### Demostracion

Se deriva componente a componente. Toda primitiva difiere de otra por un vector constante, pues la derivada de una constante vectorial es cero.

## Propiedades algebraicas

Si $r,s$ son integrables y $\phi$ es una funcion escalar integrable, entonces:

$$
\int_a^b (r+s)\,dt = \int_a^b r\,dt + \int_a^b s\,dt,
$$

$$
\int_a^b \lambda r\,dt = \lambda\int_a^b r\,dt,
$$

y todas estas identidades siguen inmediatamente de las propiedades escalares por componentes.

## Teorema fundamental del calculo

### Teorema 2

Si $R$ es una primitiva de $r$ en $[a,b]$, entonces

$$
\int_a^b r(t)\,dt = R(b)-R(a).
$$

#### Demostracion

Es una aplicacion componente a componente del teorema fundamental del calculo para funciones reales.

### Corolario 3

Si

$$
r'(t)=v(t),
$$

entonces

$$
\int_a^b v(t)\,dt = r(b)-r(a).
$$

Esto expresa que la integral de la velocidad es el desplazamiento neto.

## Ejemplos basicos

### Ejemplo 1: integral indefinida

Sea

$$
r(t)=\langle 2t,\cos t,e^t\rangle.
$$

Entonces

$$
\int r(t)\,dt=
\langle t^2,\sin t,e^t\rangle + C.
$$

### Ejemplo 2: integral definida

Sea

$$
r(t)=\langle t,t^2,1\rangle.
$$

Entonces

$$
\int_0^1 r(t)\,dt
=
\left\langle
\int_0^1 t\,dt,
\int_0^1 t^2\,dt,
\int_0^1 1\,dt
\right\rangle
=
\left\langle
\frac12,\frac13,1
\right\rangle.
$$

## Desplazamiento y distancia recorrida

Si $v(t)$ es la velocidad, entonces:

- el desplazamiento neto es

$$
\int_a^b v(t)\,dt;
$$

- la distancia recorrida no es esa integral vectorial, sino

$$
\int_a^b \|v(t)\|\,dt.
$$

### Comentario

Esta distincion es esencial. Un movil puede volver al punto de partida y tener desplazamiento neto cero, pero distancia recorrida positiva.

## Funcion posicion a partir de la velocidad

Si se conoce

$$
r'(t)=v(t)
$$

y el dato inicial

$$
r(t_0)=r_0,
$$

entonces

$$
r(t)=r_0+\int_{t_0}^t v(u)\,du.
$$

## Comentario sobre reconstruccion desde la aceleracion

Este tema se desarrollara con detalle en cinematica, pero la idea ya aparece aqui:

si

$$
r''(t)=a(t),
$$

entonces primero se integra para hallar la velocidad

$$
r'(t)=v_0+\int_{t_0}^t a(u)\,du,
$$

y luego de nuevo para hallar la posicion.

## Integrales vectoriales a trozos

Si cada componente es continua a trozos, la integral sigue definiendose componente a componente. Esto es util en movimientos con aceleracion por etapas o fuerzas discontinuas.

## Ejemplos trabajados

### Ejemplo 3: reconstruir la posicion desde la velocidad

Sea

$$
v(t)=\langle 2t,\cos t,3\rangle,
\qquad
r(0)=\langle 1,-1,0\rangle.
$$

Entonces

$$
r(t)=r(0)+\int_0^t v(u)\,du.
$$

Calculando,

$$
r(t)=
\langle 1,-1,0\rangle
+
\left\langle
\int_0^t 2u\,du,
\int_0^t \cos u\,du,
\int_0^t 3\,du
\right\rangle.
$$

Por tanto

$$
r(t)=\langle 1+t^2,\ -1+\sin t,\ 3t\rangle.
$$

### Ejemplo 4: desplazamiento nulo con distancia no nula

Considere

$$
r(t)=\langle \cos t,\sin t\rangle,
\qquad
0\le t\le 2\pi.
$$

Entonces

$$
r'(t)=\langle -\sin t,\cos t\rangle.
$$

El desplazamiento neto es

$$
\int_0^{2\pi} r'(t)\,dt=r(2\pi)-r(0)=0.
$$

Sin embargo,

$$
\int_0^{2\pi}\|r'(t)\|\,dt
=
\int_0^{2\pi}1\,dt
=
2\pi.
$$

## Continuidad e integrabilidad

Si $r$ es continua en $[a,b]$, entonces es integrable en $[a,b]$ por componentes.

### Consecuencia

Toda curva suficientemente regular admite integrales vectoriales elementales en intervalos compactos.

## Errores comunes

- Integrar una funcion vectorial como si produjera un escalar.
- Olvidar el vector constante en la integral indefinida.
- Confundir desplazamiento neto con distancia recorrida.
- Integrar mal componente a componente por descuido algebraico.

## Ejercicios propuestos

1. Integrar varias funciones vectoriales por componentes.
2. Reconstruir una posicion a partir de una velocidad y un dato inicial.
3. Reconstruir una velocidad a partir de una aceleracion.
4. Comparar desplazamiento y distancia recorrida en trayectorias cerradas.
5. Probar el teorema fundamental del calculo para funciones vectoriales.

## Cierre

La integracion vectorial completa el par fundamental del calculo de curvas parametrizadas. Con ella se pasa de velocidades a posiciones, de aceleraciones a trayectorias y de expresiones locales a desplazamientos globales. Es la base operativa de la cinetica en el espacio.
