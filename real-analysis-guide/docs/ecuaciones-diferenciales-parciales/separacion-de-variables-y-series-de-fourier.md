---
title: Separacion de variables y series de Fourier
description: Ansatz separado, expansion modal, problemas de frontera y uso de series de Fourier para calor, ondas y Laplace en dominios simples.
---

# Separacion de variables y series de Fourier

## Por que este metodo es central

La separacion de variables es la tecnologia clasica que convierte ciertas EDP lineales en:

- EDO para los factores separados;
- problemas espectrales de frontera;
- series de Fourier o de autofunciones.

No es un truco aislado. Es el punto donde convergen EDP, Sturm-Liouville y analisis de Fourier.

## Ansatz separado

Se busca una solucion en forma de producto

$$
u(t,x)=T(t)X(x)
$$

o variantes similares segun el numero de variables.

### Idea

Al sustituir en una EDP lineal y dividir por

$$
T X,
$$

las dependencias temporales y espaciales deben igualarse a una constante de separacion.

## Calor en un intervalo

Considere

$$
u_t=k u_{xx},
\qquad
0<x<L,
\qquad
u(t,0)=u(t,L)=0.
$$

Buscando

$$
u(t,x)=T(t)X(x),
$$

se obtiene

$$
\frac{T'}{kT}=\frac{X''}{X}=-\lambda.
$$

Entonces:

$$
X''+\lambda X=0,
\qquad
X(0)=X(L)=0,
$$

y

$$
T'+k\lambda T=0.
$$

## Problema espectral espacial

Las condiciones de frontera fuerzan

$$
\lambda_n=\left(\frac{n\pi}{L}\right)^2,
\qquad
X_n(x)=\sin\left(\frac{n\pi x}{L}\right).
$$

Luego

$$
T_n(t)=e^{-k\lambda_n t}.
$$

### Solucion modal

Cada modo separado es

$$
u_n(t,x)=e^{-k(n\pi/L)^2 t}\sin\left(\frac{n\pi x}{L}\right).
$$

## Superposicion y Fourier

Por linealidad, la solucion general se busca como serie

$$
u(t,x)=\sum_{n=1}^{\infty} a_n e^{-k(n\pi/L)^2 t}\sin\left(\frac{n\pi x}{L}\right).
$$

Los coeficientes

$$
a_n
$$

se fijan expandiendo el dato inicial

$$
u_0(x)
$$

en serie de senos.

### Lectura

La EDP queda reducida a la evolucion independiente de infinitos modos lineales.

## Ondas en un intervalo

Para

$$
u_{tt}=c^2 u_{xx},
\qquad
u(t,0)=u(t,L)=0,
$$

la misma separacion produce el mismo problema espacial

$$
X''+\lambda X=0
$$

pero una ecuacion temporal distinta:

$$
T''+c^2\lambda T=0.
$$

### Lectura

Los modos espaciales son los mismos que en calor. Cambia la ley temporal:

- calor: decaimiento exponencial;
- ondas: oscilacion armonica.

## Laplace en un rectangulo

Para

$$
u_{xx}+u_{yy}=0
$$

en un rectangulo, un ansatz

$$
u(x,y)=X(x)Y(y)
$$

conduce a

$$
\frac{X''}{X}=-\frac{Y''}{Y}=-\lambda.
$$

Segun el signo de

$$
\lambda,
$$

aparecen funciones trigonometricas en una variable e hiperbolicas en la otra.

### Moral

La separacion no produce siempre el mismo tipo de modos: el caracter eliptico o evolutivo de la ecuacion decide la familia temporal o espacial que aparece.

## Convergencia y legitimidad

El metodo formal produce series. Para justificar que la serie representa de verdad una solucion hay que controlar:

- convergencia de la expansion inicial;
- derivacion termino a termino;
- compatibilidad con datos de frontera.

### Lectura

Aqui ya entra analisis serio, no solo algebra formal. Fourier no es decoracion: es la herramienta que vuelve legitima la superposicion modal.

## Papel de Sturm-Liouville

El problema espacial separado casi siempre termina en un problema de Sturm-Liouville. Por eso:

- los modos resultan ortogonales;
- la base modal depende de las condiciones de frontera;
- los coeficientes se obtienen por proyeccion.

## Ejemplo minimo

Si

$$
u_0(x)=x(L-x)
$$

en el problema del calor con frontera nula, los coeficientes

$$
a_n
$$

se calculan por

$$
a_n=\frac{2}{L}\int_0^L u_0(x)\sin\left(\frac{n\pi x}{L}\right)\,dx.
$$

La solucion queda dada por la suma modal correspondiente.

## Ventajas del metodo

- traduce EDP en EDO y espectro;
- refleja la fisica de modos normales;
- se adapta a muchos dominios simples;
- enlaza directamente con Fourier y Sturm-Liouville.

## Limitaciones

- requiere geometria y frontera compatibles;
- no funciona igual de limpio en dominios arbitrarios;
- la justificacion de convergencia puede ser delicada;
- en problemas no lineales deja de ser un metodo directo.

## Errores frecuentes

- Dividir por

$$
T X
$$

sin controlar posibles ceros o trivialidad.
- Pensar que la constante de separacion es un mero artificio sin contenido espectral.
- Olvidar que las condiciones de frontera determinan los modos admisibles.
- Usar Fourier formalmente sin revisar convergencia.

## Practica guiada

### Ejercicio 1

Separa variables en la ecuacion del calor con frontera nula en

$$
[0,L].
$$

### Ejercicio 2

Explica por que calor y ondas comparten modos espaciales pero no la misma dinamica temporal.

### Ejercicio 3

Describe el papel de la ortogonalidad al reconstruir el dato inicial.

## Cierre

La separacion de variables es el lenguaje en el que EDP lineales, Fourier y Sturm-Liouville se reconocen mutuamente. Entender ese mecanismo es entender la arquitectura clasica del bloque.
