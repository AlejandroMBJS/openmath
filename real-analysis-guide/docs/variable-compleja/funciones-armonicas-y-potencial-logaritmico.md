---
title: Funciones Armonicas y Potencial Logaritmico
description: Problema de Dirichlet en el disco, nucleo de Poisson y relacion entre variable compleja y teoria potencial bidimensional.
---

# Funciones Armonicas y Potencial Logaritmico

## Por que volver a las armonicas

La teoria compleja no solo produce funciones holomorfas. Tambien reorganiza la teoria potencial bidimensional.

Las funciones armonicas aparecen como:

- partes reales e imaginarias de holomorfas;
- soluciones del problema de Dirichlet;
- potenciales generados por distribuciones o cargas.

## Funciones armonicas

Una funcion $u$ es armonica si

$$
\Delta u = 0.
$$

En dos dimensiones,

$$
\Delta = \partial_{xx}+\partial_{yy}.
$$

### Lectura

Las armonicas son los estados de equilibrio de muchos modelos fisicos y el lado real de la analiticidad compleja.

## Propiedad del valor medio

Si $u$ es armonica en un disco centrado en $z_0$, entonces

$$
u(z_0)=\frac{1}{2\pi}\int_0^{2\pi}u(z_0+re^{it})\,dt.
$$

### Moral

Una funcion armonica no puede concentrar un pico interior independiente de su entorno. Su valor central esta completamente promediado por la frontera.

## Principio del maximo armonico

Una funcion armonica no constante no alcanza maximos ni minimos estrictos en el interior.

### Importancia

Esto da unicidad inmediata del problema de Dirichlet.

## Nucleo de Poisson

En el disco unidad, si el dato de frontera es $\varphi(e^{it})$, la solucion armonica interior se escribe como

$$
u(re^{i\theta})
=
\frac{1}{2\pi}\int_0^{2\pi}
P_r(\theta-t)\varphi(e^{it})\,dt,
$$

donde

$$
P_r(\alpha)=\frac{1-r^2}{1-2r\cos\alpha+r^2}.
$$

### Lectura

El nucleo de Poisson reconstruye el interior a partir del borde.

## Problema de Dirichlet en el disco

Dado un dato de frontera continuo, existe una unica funcion armonica en el disco que lo realiza como valor limite en la frontera.

### Moral

En geometria simple, la teoria potencial tiene una formula explicita muy limpia.

## Conexion con holomorfia

Si $u$ es armonica, localmente existe una conjugada armonica $v$ tal que

$$
f=u+iv
$$

es holomorfa.

### Importancia

La teoria potencial bidimensional y la variable compleja no son dos temas paralelos; son la misma estructura vista desde parte real e imaginaria.

## Potencial logaritmico

En dimension dos, el nucleo fundamental del Laplaciano es

$$
\log|z|.
$$

Mas precisamente, fuera del origen es armonico y, distribucionalmente, su Laplaciano representa una fuente puntual.

### Moral

El logaritmo complejo no es solo una funcion multivaluada: su modulo gobierna el potencial elemental bidimensional.

## Medidas y potenciales

Dada una distribucion de masa o carga $\mu$, el potencial logaritmico formal es

$$
U^\mu(z)=\int \log|z-\zeta|\,d\mu(\zeta).
$$

### Importancia

Esta forma aparece en:

- teoria potencial;
- equilibrio electrostatico plano;
- distribucion de ceros;
- analisis asintotico de polinomios.

## Funciones subarmonicas

Una funcion subarmonica satisface, de manera esquematica,

$$
\Delta u \ge 0
$$

en sentido adecuado.

### Lectura

Las subarmonicas generalizan la idea de "promedio no menor que el valor central" y son naturales al estudiar

$$
\log|f|.
$$

para funciones holomorfas.

## Logaritmo del modulo

Si $f$ es holomorfa y no identicamente nula, entonces

$$
\log|f(z)|
$$

es armonica fuera de los ceros y subarmonica en general.

### Importancia

Esto conecta zeros de funciones holomorfas con teoria potencial.

## Ejemplo guiado: Poisson desde Fourier

El nucleo de Poisson tambien puede verse como una serie de Fourier:

$$
P_r(\theta)=1+2\sum_{n=1}^{\infty} r^n \cos(n\theta).
$$

### Moral

Variable compleja y analisis de Fourier vuelven a encontrarse exactamente en el problema de Dirichlet del disco.

## Ejemplo guiado: logaritmo del modulo de z

La funcion

$$
u(z)=\log|z|
$$

es armonica en $\mathbb{C}\setminus\{0\}$ y su conjugada armonica local es $\arg z$.

### Lectura

Una vez mas, la multivaluacion angular revela que la topologia global del dominio importa para elegir conjugada.

## Interpretacion fisica

En dos dimensiones:

- armonicas describen equilibrio;
- el nucleo de Poisson reconstruye estados desde la frontera;
- el potencial logaritmico es la respuesta elemental a una carga puntual.

### Importancia

Este es un puente directo con electrostatica plana, fluidos potenciales y funciones de Green.

## Conexion con mapeo conforme

Los mapas conformes preservan armonicidad por composicion adecuada. Esto permite transportar soluciones del problema de Dirichlet entre dominios relacionados conformemente.

## Conexion con residuos

Aunque residuos tratan integrales complejas y potencial logaritmico trata parte real de funciones, ambos temas convergen en la estructura local de ceros y singularidades:

- el logaritmo del modulo detecta magnitudes;
- el argumento detecta rotacion;
- juntos reconstruyen la funcion holomorfa localmente.

## Errores frecuentes

- confundir armonicidad con holomorfia;
- olvidar que una armonica global puede carecer de conjugada global en dominios no simplemente conexos;
- pensar que el nucleo de Poisson es solo una formula especial sin estructura;
- ignorar el rol de subarmonicidad de $\log|f|$;
- tratar el potencial logaritmico como simple curiosidad del logaritmo.

## Practica recomendada

1. Verificar la propiedad del valor medio en ejemplos simples.
2. Reconstruir funciones armonicas del disco con el nucleo de Poisson.
3. Relacionar Fourier y Poisson en la expansion del nucleo.
4. Estudiar $\log|z|$ como potencial fundamental bidimensional.
5. Explicar por que $\log|f|$ es subarmonica para $f$ holomorfa.

## Cierre

Las funciones armonicas y el potencial logaritmico muestran que variable compleja no es solo teoria de integrales y residuos. Tambien es teoria potencial bidimensional, problemas de frontera y equilibrio. Ese puente con Fourier, PDE y fisica matematica es una de las razones mas profundas de la fuerza del bloque.
