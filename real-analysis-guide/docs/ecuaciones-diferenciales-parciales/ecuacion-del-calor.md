---
title: Ecuacion del calor
description: Difusion, principio del maximo, suavizado, energia, nucleo gaussiano y lectura de largo tiempo para la ecuacion del calor.
---

# Ecuacion del calor

## El modelo prototipo de difusion

La ecuacion del calor en una dimension es

$$
u_t-k u_{xx}=0,
\qquad
k>0.
$$

Modela la evolucion temporal de una temperatura, pero su estructura reaparece en difusion, caminatas aleatorias, finanzas y regularizacion.

## Derivacion fisica minima

Combinando:

- conservacion de energia en un pequeno intervalo;
- ley de Fourier del flujo termico

$$
q=-k u_x,
$$

se obtiene

$$
u_t=k u_{xx}.
$$

### Lectura

La variacion temporal es proporcional a la curvatura espacial. Donde el perfil esta muy curvado, la difusion actua con mas intensidad.

## Clasificacion

La ecuacion del calor es parabolica. Tiene una direccion temporal privilegiada y un efecto de suavizado que la distingue de ondas y transporte.

## Problema de Cauchy

Con dato inicial

$$
u(0,x)=u_0(x),
$$

el problema busca una funcion

$$
u(t,x)
$$

para

$$
t>0.
$$

### Pregunta central

No solo interesa encontrar

$$
u,
$$

sino entender:

- si la solucion es unica;
- si se suaviza;
- como depende del dato;
- que ocurre cuando

$$
t\to\infty.
$$

## Principio del maximo

### Enunciado informal

Si

$$
u
$$

satisface la ecuacion del calor en una region cilindrica, entonces un maximo interior no puede aparecer en tiempo positivo salvo que la solucion sea localmente constante.

### Consecuencia

Los valores extremos se controlan por el dato inicial y de frontera.

### Lectura

El calor no crea picos nuevos. Solo redistribuye y aplana.

## Unicidad

El principio del maximo implica unicidad para muchos problemas de calor con datos iniciales y de frontera razonables.

### Idea

Si

$$
u
$$

y

$$
v
$$

son dos soluciones con los mismos datos, su diferencia satisface la ecuacion homogonea con datos nulos. El principio del maximo obliga entonces a que esa diferencia sea cero.

## Energia y disipacion

Para una barra con condiciones de frontera adecuadas, la energia cuadratica

$$
E(t)=\frac12\int |u(t,x)|^2\,dx
$$

decrece en el tiempo.

### Calculo formal

Multiplicando por

$$
u
$$

e integrando,

$$
\frac{d}{dt}E(t)
=
-k\int |u_x|^2\,dx
$$

mientras los terminos de borde desaparezcan.

### Lectura

La ecuacion del calor es disipativa: destruye gradientes y reduce contraste espacial.

## Suavizado instantaneo

Aunque el dato inicial sea rugoso, la solucion para todo

$$
t>0
$$

se vuelve mucho mas regular.

### Moral

La difusion no solo mueve informacion: la promedia. Ese rasgo la distingue radicalmente del transporte y de la ecuacion de ondas.

## Nucleo del calor

En la recta, la solucion formal se escribe como convolucion con el nucleo gaussiano

$$
G_t(x)=\frac{1}{\sqrt{4\pi k t}}e^{-x^2/(4kt)}.
$$

Entonces

$$
u(t,x)=(G_t*u_0)(x).
$$

### Lectura

Cada punto del dato inicial se reparte segun una gaussiana cuya anchura crece como

$$
\sqrt{t}.
$$

## Comparacion con transporte

- transporte: desplaza el perfil;
- calor: difunde y aplana el perfil;
- transporte lineal conserva irregularidad;
- calor regulariza.

Esta comparacion resume una parte esencial de la teoria de tipos de EDP.

## Largo tiempo

Con frontera fija a cero, la temperatura suele decaer hacia cero.

Con masa total conservada en la recta, el perfil se dispersa y baja de altura.

### Lectura

El largo tiempo del calor se describe por disipacion y tendencia a estados equilibrados o autosemejantes.

## Ejemplo: modo sinusoidal

Si en

$$
0<x<L
$$

con frontera nula el dato inicial es

$$
u_0(x)=\sin\left(\frac{\pi x}{L}\right),
$$

la solucion toma la forma

$$
u(t,x)=e^{-k\pi^2 t/L^2}\sin\left(\frac{\pi x}{L}\right).
$$

### Leccion

Cada modo espacial se atenua exponencialmente, y los modos mas oscilatorios mueren mas rapido.

## Errores frecuentes

- Pensar que el calor tiene propagacion estrictamente finita como ondas.
- Olvidar que el principio del maximo requiere hipotesis sobre dominio y regularidad.
- Confundir conservacion de masa con conservacion de energia cuadratica.
- Tratar la ecuacion hacia atras como problema estable.

## Practica guiada

### Ejercicio 1

Explica por que el calor no puede crear un maximo interior nuevo en tiempo positivo.

### Ejercicio 2

Compara conceptualmente

$$
u_t+u_x=0
$$

con

$$
u_t-u_{xx}=0.
$$

### Ejercicio 3

Justifica por que el modo

$$
\sin(n\pi x/L)
$$

decae mas rapido cuanto mayor es

$$
n.
$$

## Cierre

La ecuacion del calor es el modelo por excelencia de difusion y regularizacion. Aprender a leer su principio del maximo, su energia y su nucleo gaussiano es aprender la logica basica de las EDP parabolicas.
