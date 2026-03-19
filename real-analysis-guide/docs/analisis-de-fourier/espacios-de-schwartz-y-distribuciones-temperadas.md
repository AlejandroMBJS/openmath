---
title: Espacios de Schwartz y Distribuciones Temperadas
description: Marco natural para extender Fourier mas alla de funciones integrables y tratar deltas, valores principales y datos rugosos.
---

# Espacios de Schwartz y Distribuciones Temperadas

## Por que hace falta un marco mas amplio

La formula clasica de Fourier en $L^1$ no basta para muchos objetos centrales:

- gaussianas y soluciones de calor en varios marcos;
- funciones solo cuadrado-integrables;
- deltas de Dirac;
- valores principales como $pv(1/x)$;
- soluciones de EDP que no son funciones ordinarias.

Para manejar esto de forma estable, el espacio natural de prueba es el espacio de Schwartz.

## Espacio de Schwartz

El espacio de Schwartz $\mathcal{S}(\mathbb{R}^n)$ consiste en funciones suaves cuyas derivadas decrecen mas rapido que cualquier potencia.

Formalmente, para todo multiindice $\alpha,\beta$,

$$
\sup_{x\in \mathbb{R}^n} |x^\alpha \partial^\beta f(x)| < \infty.
$$

### Lectura

Una funcion de Schwartz es extremadamente regular y extremadamente decreciente. Es el lugar ideal donde Fourier actua sin fricciones tecnicas.

## Ejemplos

Pertenecen a $\mathcal{S}$:

- gaussianas;
- polinomios por gaussianas;
- muchas funciones suaves con soporte compacto.

No pertenecen:

- funciones escalon;
- exponenciales que no decaen;
- la delta de Dirac, que ni siquiera es funcion.

## Fourier preserva Schwartz

Un hecho estructural fundamental es:

$$
\mathcal{F}:\mathcal{S}(\mathbb{R}^n)\to \mathcal{S}(\mathbb{R}^n)
$$

es un automorfismo lineal.

### Importancia

Esto significa que:

- la transformada esta perfectamente definida;
- derivacion, multiplicacion y decaimiento permanecen en la misma categoria;
- la inversion es limpia.

## Seminormas y topologia

$\mathcal{S}$ no se trata solo como conjunto, sino como espacio topologico definido por seminormas

$$
p_{\alpha,\beta}(f)=\sup_x |x^\alpha \partial^\beta f(x)|.
$$

### Moral

La continuidad de operadores como Fourier o derivacion no se formula adecuadamente sin esta topologia fina.

## Distribuciones temperadas

El dual continuo de $\mathcal{S}$ se denota por $\mathcal{S}'(\mathbb{R}^n)$ y sus elementos se llaman distribuciones temperadas.

Una distribucion temperada $T$ actua sobre funciones de Schwartz por

$$
\langle T,\varphi\rangle.
$$

### Lectura

Son objetos que pueden crecer a lo sumo de manera polinomial en el sentido adecuado. Por eso siguen siendo compatibles con el mundo de Fourier.

## Ejemplos de distribuciones temperadas

- toda funcion de crecimiento polinomial moderado;
- la delta de Dirac $\delta_0$;
- derivadas de la delta;
- valores principales como $pv(1/x)$;
- polinomios.

## Fourier por dualidad

Si $T\in \mathcal{S}'$, su transformada se define por

$$
\langle \widehat{T},\varphi\rangle
=
\langle T,\widehat{\varphi}\rangle
$$

o con la convencion dual correspondiente segun normalizacion.

### Importancia

La transformada deja de ser una integral y pasa a ser un operador dual continuo.

## Ejemplos basicos

- la transformada de $\delta_0$ es la funcion constante $1$;
- la transformada de $1$ es una delta en el origen;
- derivar en el espacio fisico equivale a multiplicar por $i\xi$ en frecuencia;
- multiplicar por $x$ equivale a derivar en frecuencia.

### Moral

Las identidades operativas de Fourier sobreviven y se vuelven incluso mas transparentes en $\mathcal{S}'$.

## Derivadas distribucionales

Si $T\in \mathcal{S}'$, se define

$$
\langle \partial^\alpha T,\varphi\rangle
=
(-1)^{|\alpha|}\langle T,\partial^\alpha \varphi\rangle.
$$

Esto encaja perfectamente con Fourier:

$$
\widehat{\partial^\alpha T}(\xi)=(i\xi)^\alpha \widehat{T}(\xi).
$$

## Convolucion en distribuciones

La convolucion no siempre esta definida para dos distribuciones arbitrarias. Pero si al menos una tiene buen soporte o regularidad, pueden definirse convoluciones utiles.

### Advertencia

En el mundo distribucional, multiplicar y convolucionar requiere condiciones geometricas o topologicas precisas.

## Valor principal

La distribucion

$$
pv\left(\frac{1}{x}\right)
$$

se define como limite simetrico:

$$
\left\langle pv\left(\frac{1}{x}\right),\varphi\right\rangle
=
\lim_{\varepsilon\downarrow 0}\int_{|x|>\varepsilon}\frac{\varphi(x)}{x}\,dx.
$$

### Importancia

Este objeto aparece en la transformada de Hilbert y en operadores singulares. Es un ejemplo perfecto de por que $\mathcal{S}'$ no es un lujo, sino una necesidad.

## Schwartz y PDE

En muchas PDE lineales:

- el dato natural puede ser una delta;
- la solucion fundamental es distribucional;
- la regularidad se lee mejor en el marco de distribuciones.

### Ejemplo

Para el Laplaciano,

$$
-\Delta \Phi = \delta_0
$$

se interpreta en $\mathcal{S}'$.

## Temperadas vs distribuciones generales

No toda distribucion general es temperada. La palabra "temperada" indica compatibilidad con el crecimiento polinomial y con la teoria de Fourier.

### Moral

$\mathcal{S}'$ es lo bastante grande para lo esencial del analisis armonico y lo bastante controlado para conservar buena teoria.

## Ejemplo guiado: gaussiana y dualidad

La gaussiana pertenece a $\mathcal{S}$ y su transformada tambien. Esto la convierte en un banco de pruebas perfecto:

- todo converge absolutamente;
- las derivadas y momentos siguen controlados;
- la transformada puede iterarse sin salir del espacio.

## Ejemplo guiado: delta y exponenciales

Si

$$
\langle \delta_0,\varphi\rangle=\varphi(0),
$$

entonces

$$
\langle \widehat{\delta_0},\varphi\rangle
=
\langle \delta_0,\widehat{\varphi}\rangle
=
\widehat{\varphi}(0)
=
\int \varphi(\xi)\,d\xi,
$$

que corresponde a la distribucion constante.

## Conexion con otros bloques

Este marco conecta Fourier con:

- EDP, por soluciones fundamentales;
- variable compleja, por transformadas de gaussianas y representaciones integrales;
- analisis microlocal, por frente de ondas y distribuciones;
- probabilidad, por medidas gaussianas y caracteristicas.

## Errores frecuentes

- pensar que $\mathcal{S}$ es solo un conjunto tecnico sin contenido estructural;
- creer que toda distribucion admite Fourier sin mas;
- olvidar que la definicion en $\mathcal{S}'$ es por dualidad;
- tratar la delta como funcion ordinaria;
- ignorar las condiciones para convolucion o producto de distribuciones.

## Practica recomendada

1. Verificar que una gaussiana pertenece a $\mathcal{S}$.
2. Calcular la transformada de $\delta_0$ en sentido distribucional.
3. Relacionar derivacion en tiempo con multiplicacion por frecuencia en $\mathcal{S}'$.
4. Estudiar por que $pv(1/x)$ es temperada.
5. Explicar por que soluciones fundamentales se formulan naturalmente en distribuciones.

## Cierre

Schwartz y distribuciones temperadas son el lenguaje correcto para Fourier mas alla de $L^1$. A partir de aqui, la transformada deja de ser solo una integral bien portada y se convierte en un operador central del analisis moderno, capaz de manejar singularidades reales.
