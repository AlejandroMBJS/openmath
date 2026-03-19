---
title: Transformada Z y Tiempo Discreto
description: Herramienta compleja para sucesiones, LTI discretos, funcion del sistema y region de convergencia.
---

# Transformada Z y Tiempo Discreto

## Transformada Z y LTI

Para una sucesion $x[n]$, la transformada Z bilateral es

$$
X(z)=\sum_{n\in \mathbb{Z}} x[n]z^{-n}.
$$

La version unilateral restringe a $n\ge 0$ cuando interesa causalidad e inicializacion.

### Lectura

Z es la version discreta de Laplace: reemplaza exponenciales continuas por potencias de $z^{-1}$.

## Region de convergencia

La serie no se define solo por una expresion formal. Importa el conjunto de $z$ para el que converge.

### Importancia

La region de convergencia decide:

- causalidad;
- estabilidad;
- posibilidad de evaluar la respuesta en frecuencia sobre el circulo unitario.

## Sistemas LTI discretos

Si

$$
y[n]=(h*x)[n],
$$

entonces

$$
Y(z)=H(z)X(z)
$$

cuando las regiones de convergencia son compatibles.

### Moral

Igual que en Laplace, la convolucion temporal discreta se vuelve multiplicacion.

## Transformada Z y sus propiedades

Propiedades basicas:

- linealidad;
- desplazamiento temporal;
- multiplicacion por $n$ via derivacion respecto de $z$;
- convolucion en tiempo, producto en Z;
- escalado geomatrico.

Estas reglas permiten resolver recurrencias y sistemas discretos sin expandir sumas a mano.

## Transformada Z inversa

Recuperar $x[n]$ desde $X(z)$ puede hacerse por:

- expansion en series;
- fracciones parciales;
- formula integral compleja alrededor de la region adecuada.

### Lectura

La inversion, igual que en Laplace, no depende solo de la fraccion algebraica sino de la region de convergencia.

## Transformada Z inversa en serie de potencias

Si

$$
X(z)=\sum_{n=0}^{\infty} x[n] z^{-n},
$$

entonces los coeficientes de la expansion directamente recuperan la sucesion.

### Importancia

Esta es la forma mas natural cuando la sucesion es causal.

## Funcion del sistema usando Z

Si un sistema discreto satisface una ecuacion en diferencias lineal:

$$
y[n]+a_1 y[n-1]+\cdots+a_m y[n-m]
=
b_0 x[n]+\cdots+b_r x[n-r],
$$

con condiciones iniciales nulas, entonces

$$
H(z)=\frac{Y(z)}{X(z)}
=
\frac{b_0+b_1 z^{-1}+\cdots+b_r z^{-r}}
{1+a_1 z^{-1}+\cdots+a_m z^{-m}}.
$$

## Polos, ceros y estabilidad

Para sistemas causales discretos racionales:

- la estabilidad BIBO se asocia a que los polos queden dentro del circulo unitario;
- la respuesta en frecuencia se obtiene evaluando $z=e^{i\omega}$ si el circulo unitario esta dentro de la region de convergencia.

### Moral

El plano $z$ reemplaza al semiplano complejo de Laplace.

## Relacion con Fourier discreto

La transformada de Fourier en tiempo discreto se obtiene formalmente evaluando

$$
X(e^{i\omega})
$$

cuando eso tiene sentido.

### Lectura

Z es mas amplia; Fourier discreta es la seccion sobre el circulo unitario.

## Ejemplo guiado: sucesion geometrica

Si

$$
x[n]=a^n u[n],
$$

entonces

$$
X(z)=\sum_{n=0}^{\infty}(a z^{-1})^n
=\frac{1}{1-a z^{-1}}
$$

cuando

$$
|z|>|a|.
$$

### Importancia

La region de convergencia explica de forma inmediata por que la misma expresion racional puede representar distintas sucesiones si cambia el soporte temporal.

## Ejemplo guiado: recursion lineal

Para

$$
y[n]-a y[n-1]=x[n],
$$

con condiciones iniciales nulas,

$$
H(z)=\frac{1}{1-a z^{-1}}.
$$

La respuesta impulsional es

$$
h[n]=a^n u[n].
$$

### Lectura

El polo en $z=a$ controla memoria y estabilidad del sistema.

## FIR e IIR

Dos familias importantes:

- FIR: respuesta impulsional finita;
- IIR: respuesta impulsional infinita.

### Moral

La diferencia no es solo computacional. Tambien afecta estabilidad, realizacion y forma de la funcion del sistema.

## Que prepara este capitulo

La transformada Z prepara:

- procesamiento digital de senales;
- filtros discretos;
- DFT y FFT;
- estabilidad de algoritmos recursivos;
- puentes con variable compleja.

## Errores frecuentes

- olvidar la region de convergencia;
- identificar automaticamente estabilidad con polos no nulos;
- evaluar en el circulo unitario sin comprobar convergencia;
- confundir transformada Z con DFT;
- usar inversion por series sin mirar si la expansion elegida corresponde al soporte correcto.

## Practica recomendada

1. Calcular la Z de sucesiones causales y anticausales simples.
2. Relacionar polos con estabilidad de sistemas discretos.
3. Resolver ecuaciones en diferencias por transformada Z.
4. Comparar Z bilateral y unilateral.
5. Estudiar el paso de $H(z)$ a la respuesta en frecuencia sobre $z=e^{i\omega}$.

## Cierre

La transformada Z es el lenguaje natural del tiempo discreto. Organiza recurrencias, filtros digitales y respuesta en frecuencia sobre el circulo unitario con la misma claridad con la que Laplace organiza los sistemas continuos.
