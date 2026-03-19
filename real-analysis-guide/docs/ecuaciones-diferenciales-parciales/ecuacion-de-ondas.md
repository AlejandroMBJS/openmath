---
title: Ecuacion de ondas
description: Propagacion, energia, velocidad finita, formula de d'Alembert, condiciones iniciales y lectura de oscilaciones para la ecuacion de ondas.
---

# Ecuacion de ondas

## El prototipo de propagacion

La ecuacion de ondas en una dimension es

$$
u_{tt}-c^2 u_{xx}=0,
\qquad
c>0.
$$

Modela vibraciones de cuerdas, presion acustica idealizada y, mas en general, propagacion con velocidad finita.

## Derivacion mecanica minima

En una cuerda tensa, el equilibrio de fuerzas verticales sobre un pequeno segmento lleva a

$$
\rho u_{tt}=T u_{xx},
$$

donde

$$
\rho
$$

es densidad lineal y

$$
T
$$

la tension. Entonces

$$
c^2=\frac{T}{\rho}.
$$

## Clasificacion

La ecuacion de ondas es hiperbolica. Eso ya anticipa:

- caracteristicas reales;
- propagacion finita;
- identidades de energia;
- dominios de dependencia.

## Problema de Cauchy

Se prescriben posicion inicial y velocidad inicial:

$$
u(0,x)=f(x),
\qquad
u_t(0,x)=g(x).
$$

### Lectura

A diferencia del calor, aqui el dato inicial necesita dos perfiles. La ecuacion es de segundo orden en el tiempo.

## Formula de d'Alembert

En la recta, la solucion es

$$
u(t,x)=\frac12\bigl(f(x-ct)+f(x+ct)\bigr)
+
\frac{1}{2c}\int_{x-ct}^{x+ct} g(s)\,ds.
$$

### Lectura

La primera parte transporta el desplazamiento inicial hacia izquierda y derecha. La segunda acumula el efecto de la velocidad inicial.

## Caracteristicas

Las rectas

$$
x-ct=\text{constante},
\qquad
x+ct=\text{constante}
$$

son las caracteristicas del problema.

### Moral

La informacion no viaja arbitrariamente: se desplaza sobre dos familias de rectas con velocidad

$$
c.
$$

## Dominio de dependencia

El valor

$$
u(t,x)
$$

depende solo de los datos en el intervalo

$$
[x-ct,\ x+ct].
$$

### Interpretacion

Se obtiene un cono de dependencia en el espacio-tiempo. Nada que ocurra fuera de ese cono puede influir en el punto

$$
(t,x).
$$

## Propagacion finita

Si el dato inicial esta soportado en una region compacta, la solucion permanece confinada a la envolvente obtenida al expandir ese soporte con velocidad

$$
c.
$$

### Contraste con calor

En calor la influencia es instantanea. En ondas hay una velocidad limite de propagacion.

## Energia

La energia natural es

$$
E(t)=\frac12\int \bigl(u_t(t,x)^2+c^2 u_x(t,x)^2\bigr)\,dx.
$$

Bajo condiciones de frontera adecuadas o en la recta con decaimiento suficiente,

$$
E(t)
$$

se conserva.

### Lectura

La ecuacion de ondas no es disipativa como el calor. Intercambia energia entre velocidad y deformacion espacial sin destruirla.

## Soluciones estacionarias y modos normales

En un intervalo con extremos fijos,

$$
u(t,0)=u(t,L)=0,
$$

aparecen modos

$$
\sin\left(\frac{n\pi x}{L}\right)
$$

con frecuencias

$$
\omega_n=\frac{n\pi c}{L}.
$$

### Lectura

Las vibraciones se descomponen en superposicion de modos espaciales y temporales. Este es el punto exacto donde la teoria de Sturm-Liouville entra al juego.

## Formula de energia y unicidad

Si dos soluciones comparten los mismos datos iniciales y de frontera razonables, la energia de su diferencia es cero. Por tanto coinciden.

### Moral

La unicidad hiperbolica se demuestra de forma natural por energia, no por maximo.

## Forzamiento y principio de Duhamel

Para

$$
u_{tt}-c^2u_{xx}=F(t,x),
$$

la solucion puede escribirse como suma de:

- la solucion homogenea con los datos iniciales;
- la superposicion de respuestas a fuentes impulsadas en tiempos intermedios.

### Lectura

Es la version hiperbolica de variacion de constantes.

## Comparacion con transporte y calor

- transporte: mueve perfiles sin deformar;
- ondas: propagan perturbaciones con velocidad finita y conservacion de energia;
- calor: difunde y suaviza.

Estas tres ecuaciones forman el triangulo base del bloque de EDP.

## Errores frecuentes

- Pensar que la ecuacion de ondas suaviza como el calor.
- Olvidar el segundo dato inicial

$$
u_t(0,x).
$$
- Confundir velocidad de propagacion con velocidad puntual de la particula del medio.
- Aplicar d'Alembert fuera del problema unidimensional en la recta sin adaptar el contexto.

## Practica guiada

### Ejercicio 1

Escribe la solucion de d'Alembert para

$$
f(x)=e^{-x^2},
\qquad
g(x)=0.
$$

### Ejercicio 2

Explica por que la informacion fuera del intervalo

$$
[x-ct,\ x+ct]
$$

no afecta

$$
u(t,x).
$$

### Ejercicio 3

Compara la energia de ondas con la energia disipativa del calor.

## Cierre

La ecuacion de ondas organiza la teoria hiperbolica elemental: caracteristicas, dominios de dependencia, energia y modos normales. Es el prototipo de propagacion determinista con velocidad finita.
