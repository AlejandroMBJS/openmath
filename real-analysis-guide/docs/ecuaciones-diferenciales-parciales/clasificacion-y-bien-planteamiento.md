---
title: Clasificacion y bien planteamiento
description: Clasificacion de EDP de segundo orden, problema bien planteado de Hadamard, tipos de datos y principios estructurales de existencia, unicidad y estabilidad.
---

# Clasificacion y bien planteamiento

## Por que este es el punto de entrada correcto

En EDO la primera pregunta fue: existe solucion, es unica y depende bien del dato? En EDP la misma pregunta se vuelve mas dura, porque la incognita depende de varias variables y el tipo de dato relevante ya no es solo un valor inicial en un punto.

Antes de intentar resolver una EDP conviene responder tres preguntas:

- de que tipo geometrico es la ecuacion;
- que clase de datos se le puede imponer;
- que nocion de solucion tiene sentido.

## Forma general de segundo orden

En dos variables independientes

$$
x,\ y
$$

una ecuacion lineal de segundo orden puede escribirse como

$$
A u_{xx}+2B u_{xy}+C u_{yy}+D u_x+E u_y+F u=G.
$$

La parte principal es

$$
A u_{xx}+2B u_{xy}+C u_{yy}.
$$

### Idea

La clasificacion depende de la forma cuadratica asociada a esa parte principal, no de los terminos de orden menor.

## Clasificacion por el discriminante

Se considera

$$
\Delta=B^2-AC.
$$

Entonces:

- si

$$
\Delta<0,
$$

la ecuacion es eliptica;
- si

$$
\Delta=0,
$$

es parabolica;
- si

$$
\Delta>0,
$$

es hiperbolica.

### Lectura

La clasificacion recuerda a conicas porque ambas responden a la firma de una forma cuadratica.

## Ejemplos prototipo

### Laplace

$$
u_{xx}+u_{yy}=0
$$

tiene

$$
A=1,\ B=0,\ C=1,
$$

luego

$$
\Delta=-1<0.
$$

Es eliptica.

### Calor

$$
u_t-k u_{xx}=0
$$

es parabolica si se interpreta con variables

$$
t,\ x.
$$

### Ondas

$$
u_{tt}-c^2 u_{xx}=0
$$

es hiperbolica.

## Que significa geometricamente

### Eliptica

Suele modelar equilibrio espacial. La informacion se propaga instantaneamente a traves del dominio en el sentido de que el valor en un punto depende del contorno entero.

### Parabolica

Suele modelar difusion. Hay una direccion temporal distinguida y aparece regularizacion.

### Hiperbolica

Suele modelar propagacion con velocidad finita. Aparecen frentes, caracteristicas y dominios de dependencia.

## Bien planteamiento de Hadamard

Un problema se llama bien planteado si:

- existe solucion;
- es unica;
- depende continuamente de los datos.

### Por que la tercera condicion es indispensable

Una ecuacion puede tener solucion unica y aun asi ser inutil desde el punto de vista fisico o numerico si perturbaciones pequenas en los datos producen cambios enormes en la solucion.

## Tipos de datos

En EDP no siempre se imponen datos del mismo tipo.

### Problema de Cauchy

Se prescriben datos sobre una hipersuperficie inicial.

### Problema de Dirichlet

Se prescribe el valor de

$$
u
$$

en la frontera.

### Problema de Neumann

Se prescribe la derivada normal

$$
\partial_n u.
$$

### Problemas mixtos

Combinan datos iniciales y de contorno, por ejemplo calor u ondas en un intervalo.

## Solucion clasica, debil y mild

### Solucion clasica

Tiene todas las derivadas requeridas y satisface la ecuacion punto a punto.

### Solucion debil

Satisface una formulacion integral contra funciones de prueba.

### Solucion mild

Se obtiene por una formula semigrupal o integral, sin exigir derivabilidad clasica total.

### Moral

La nocion correcta de solucion depende del problema. En EDP esto no es un detalle tecnico posterior, sino parte del problema mismo.

## Cambio de tipo

Hay ecuaciones donde la clasificacion no es constante en el dominio. El ejemplo clasico es Tricomi:

$$
u_{xx}+x u_{yy}=0.
$$

Para

$$
x>0
$$

es hiperbolica y para

$$
x<0
$$

es eliptica.

### Lectura

La teoria general se vuelve mucho mas delicada cuando el tipo cambia. Por eso los prototipos constantes son el primer terreno serio.

## Unicidad por maximo o por energia

Los mecanismos de unicidad dependen del tipo:

- en ecuaciones elipticas y parabolicas aparecen principios de maximo;
- en hiperbolicas dominan identidades de energia.

### Idea

No hay un unico teorema universal que haga todo el trabajo. La geometria de la ecuacion dicta la herramienta adecuada.

## Estabilidad y dominio de dependencia

En ecuaciones hiperbolicas, los datos influyen solo a traves de ciertas regiones delimitadas por caracteristicas.

En calor, la influencia se difunde de forma inmediata pero controlada.

En Laplace, la solucion esta codificada por la frontera completa.

### Moral

El concepto de estabilidad no es el mismo visualmente en los tres tipos, aunque todos entren en el marco de Hadamard.

## Ejemplo de problema mal planteado

La ecuacion del calor hacia atras en el tiempo es el ejemplo clasico:

$$
u_t+k u_{xx}=0.
$$

Formalmente parece parecida a la ecuacion del calor, pero pequenas oscilaciones en el dato final se amplifican violentamente al reconstruir el pasado.

### Lectura

Cambiar el signo temporal convierte un problema fisicamente estable en uno analiticamente explosivo.

## Relacion con el resto del bloque

Esta pagina no resuelve ecuaciones concretas. Fija el criterio para leer todo lo demas:

- caracteristicas en primer orden e hiperbolicas;
- maximo y regularizacion en calor;
- energia y propagacion finita en ondas;
- armonicidad y problemas de contorno en Laplace.

## Errores frecuentes

- Clasificar usando terminos de orden menor.
- Creer que existencia y unicidad bastan sin estabilidad.
- Imponer datos de frontera arbitrarios en cualquier tipo de ecuacion.
- Pensar que la misma nocion de solucion sirve igual en todos los problemas.

## Practica guiada

### Ejercicio 1

Clasifica

$$
u_{xx}+4u_{xy}+u_{yy}=0.
$$

### Ejercicio 2

Explica por que Laplace, calor y ondas representan tres comportamientos geometricos distintos aunque todas sean lineales.

### Ejercicio 3

Describe que significa continuidad respecto de los datos en el sentido de Hadamard.

## Cierre

La clasificacion y el bien planteamiento sustituyen la pregunta ingenua "como se resuelve?" por una pregunta mas madura: "que problema tiene sentido y de que tipo es?". Ese cambio de enfoque es el comienzo real del estudio serio de EDP.
