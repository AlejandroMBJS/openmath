---
title: Senales y Sistemas
description: Conceptos de senal, tiempo continuo y discreto, exponenciales y nocion matematica de sistema.
---

# Senales y Sistemas

## Introduccion a las senales

Una senal es una funcion que codifica informacion sobre la evolucion de una magnitud.

Ejemplos:

- voltaje en un circuito;
- desplazamiento de una cuerda;
- presion acustica;
- serie temporal economica;
- secuencia muestreada por un sensor.

### Lectura

Matematicamente, una senal no es mas que una funcion definida sobre una variable independiente, pero el contexto decide que estructura extra interesa:

- regularidad;
- energia;
- periodicidad;
- decaimiento;
- espectro.

## Senales de tiempo continuo

Una senal de tiempo continuo es una funcion

$$
x:\mathbb{R}\to \mathbb{C}
$$

o $\mathbb{R}\to \mathbb{R}$, segun el problema.

Se modela sobre todo cuando el tiempo es idealizado como continuo:

- vibraciones;
- ondas;
- respuesta de circuitos analogicos.

### Ejemplos

$$
x(t)=\sin(\omega t), \qquad x(t)=e^{-at}H(t), \qquad x(t)=\cos(3t)+2\cos(5t).
$$

## Senales exponenciales

Las exponenciales complejas

$$
e^{(\sigma+i\omega)t}
$$

son bloques basicos porque:

- resuelven EDO lineales con coeficientes constantes;
- diagonalizan sistemas invariantes en el tiempo;
- separan crecimiento/decaimiento ($\sigma$) y oscilacion ($\omega$).

### Casos particulares

- $\sigma<0$: decaimiento;
- $\sigma=0$: oscilacion pura;
- $\omega=0$: exponencial real.

### Importancia

En analisis de Fourier, la exponencial compleja no es una funcion mas. Es el modo elemental de frecuencia pura.

## Senales discretas

Una senal discreta es una sucesion

$$
x:\mathbb{Z}\to \mathbb{C}.
$$

Aparece cuando:

- el tiempo ya es discreto de forma natural;
- una senal continua se muestrea;
- el sistema se modela por iteracion.

### Ejemplos

$$
x[n]=a^n, \qquad x[n]=\cos(\omega n), \qquad x[n]=\delta[n].
$$

## Muestreo y paso a discreto

Si una senal continua $x(t)$ se observa cada $T_s$ unidades, aparece la sucesion

$$
x[n]=x(nT_s).
$$

### Lectura

El paso continuo-discreto no es inocente. Introduce preguntas de aliasing, resolucion temporal y reconstruccion.

## Que son los sistemas

Un sistema transforma una senal de entrada en una senal de salida:

$$
x \mapsto y = \mathcal{S}(x).
$$

No se supone inicialmente linealidad ni invariancia.

### Ejemplos

- un filtro electrico;
- una ecuacion diferencial con forzamiento;
- un algoritmo que procesa una secuencia;
- una caja negra experimental.

## Propiedades cualitativas de sistemas

Propiedades tipicas:

- linealidad;
- invariancia temporal;
- causalidad;
- estabilidad;
- memoria o ausencia de memoria;
- invertibilidad.

Estas propiedades no son etiquetas decorativas: determinan que herramientas analiticas sirven.

## Linealidad

Un sistema es lineal si

$$
\mathcal{S}(\alpha x_1+\beta x_2)=\alpha \mathcal{S}(x_1)+\beta \mathcal{S}(x_2).
$$

### Consecuencia

La superposicion permite estudiar respuestas elementales y recomponer la salida.

## Invariancia temporal

Un sistema es invariante en el tiempo si desplazar la entrada desplaza igual la salida.

En continuo:

si $x(t)\mapsto y(t)$, entonces $x(t-t_0)\mapsto y(t-t_0)$.

En discreto:

si $x[n]\mapsto y[n]$, entonces $x[n-n_0]\mapsto y[n-n_0]$.

### Moral

La regla del sistema no depende del instante absoluto, solo de diferencias temporales.

## Causalidad

Un sistema causal no usa el futuro para producir el presente.

### Lectura

En modelos fisicos realizables, esta condicion es natural. En analisis matematico, no todos los operadores interesantes son causales, pero en senales y sistemas la causalidad suele ser central.

## Estabilidad

La nocion mas comun es BIBO:

si la entrada esta acotada, la salida tambien.

Esto no agota todas las nociones de estabilidad, pero es la primera que conecta directamente con respuesta impulsional y convolucion.

## Senales de energia y de potencia

Para continuo:

- energia:

$$
E=\int_{-\infty}^{\infty} |x(t)|^2\,dt;
$$

- potencia promedio:

$$
P=\lim_{T\to\infty}\frac{1}{2T}\int_{-T}^{T}|x(t)|^2\,dt.
$$

### Lectura

- pulsos localizados suelen ser senales de energia;
- oscilaciones periodicas persistentes suelen ser senales de potencia.

## Periodicidad

Una senal continua es periodica si existe $T>0$ tal que

$$
x(t+T)=x(t).
$$

Una senal discreta es periodica si existe $N\in \mathbb{N}$ tal que

$$
x[n+N]=x[n].
$$

### Importancia

La periodicidad es la puerta de entrada a las series de Fourier.

## Senales reales y complejas

Aunque muchas aplicaciones parten de senales reales, trabajar con valores complejos simplifica:

- exponenciales;
- fases;
- modulacion;
- analisis espectral.

Al final, la senal real se recupera tomando parte real o imponiendo simetrias de conjugacion en frecuencia.

## Ejemplo guiado: exponencial amortiguada

Considerese

$$
x(t)=e^{-at}\cos(\omega t)H(t), \qquad a>0.
$$

Esta senal:

- es continua para $t>0$;
- no es periodica;
- decae en el tiempo;
- tiene contenido oscilatorio principal cerca de la frecuencia $\omega$.

### Lectura

Es un prototipo perfecto para conectar EDO, Laplace y Fourier.

## Que prepara este capitulo

Con estos conceptos ya puede formularse la pregunta central del bloque:

como describir la accion de un sistema lineal e invariante usando bloques elementales que revelen estructura temporal o frecuencial.

La respuesta empieza en la convolucion y termina en Fourier, Laplace y Z.

## Errores frecuentes

- pensar que toda senal periodica tiene energia finita;
- confundir senal discreta con senal definida solo en un conjunto finito;
- creer que sistema causal equivale a sistema estable;
- tratar exponenciales reales y complejas como objetos sin diferencia conceptual;
- olvidar que la variable independiente no siempre es tiempo, aunque el lenguaje lo sugiera.

## Practica recomendada

1. Clasificar varias senales como de energia o de potencia.
2. Determinar si una exponencial compleja es periodica segun el cociente de frecuencias.
3. Comparar causalidad, memoria e invariancia temporal en ejemplos concretos.
4. Muestrear una senal continua simple y estudiar la sucesion resultante.
5. Explicar por que las exponenciales complejas son modos elementales para sistemas lineales.

## Cierre

Senales y sistemas son el lenguaje base del bloque. Todo lo que sigue, desde convolucion hasta transformadas, se apoya en distinguir bien objeto, operador y estructura temporal. Sin esa separacion conceptual, Fourier se vuelve solo una receta; con ella, se convierte en teoria.
