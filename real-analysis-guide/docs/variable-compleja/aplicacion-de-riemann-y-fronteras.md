---
title: Aplicacion de Riemann y Comportamiento en la Frontera
description: Teorema de la aplicacion de Riemann, automorfismos del disco, fenomenos de frontera y una introduccion a Caratheodory.
---

# Aplicacion de Riemann y Comportamiento en la Frontera

## Punto de partida

La teoria conforme muestra que muchos dominios simplemente conexos del plano son, desde el punto de vista holomorfo, el mismo objeto: el disco unidad.

## Teorema de la aplicacion de Riemann

Todo dominio simplemente conexo propio de $\mathbb{C}$ es biholomorfo al disco unidad.

### Significado

Salvo el plano completo, la geometria conforme de dimension compleja uno se normaliza por el disco.

## Normalizacion

La aplicacion conforme hacia el disco puede fijarse unicamente imponiendo

$$
f(z_0)=0, \qquad f'(z_0)>0.
$$

### Lectura

Sin normalizacion, la unicidad falla por composicion con automorfismos del disco.

## Automorfismos del disco

Toda automorfismo del disco tiene la forma

$$
\phi_a(z)=e^{i\theta}\frac{z-a}{1-\overline{a}z},
$$

con $|a|<1$.

### Rol

Estos mapas describen exactamente la libertad residual en el teorema de Riemann.

## Idea de demostracion

La prueba clasica usa familias normales: se considera la familia de funciones inyectivas acotadas normalizadas y se busca un elemento extremal.

### Herramientas

- normalidad de Montel;
- lema de Schwarz;
- argumento extremal.

## Por que el plano se excluye

El disco no es biholomorfo a $\mathbb{C}$ por Liouville y Picard. El plano es un tipo conforme distinto.

## Aplicaciones inmediatas

- existencia de coordenadas conformes;
- reduccion de problemas de Dirichlet al disco;
- transferencia de nucleo de Poisson, Green y metrica hiperbolica.

## Lema de Schwarz y Schwarz-Pick

Si $f:\mathbb{D}\to\mathbb{D}$ es holomorfa y $f(0)=0$, entonces $|f(z)|\le |z|$ y $|f'(0)|\le 1$.

La version Schwarz-Pick muestra ademas que toda autolicacion holomorfa del disco contrae la metrica hiperbolica.

### Lectura

La rigidez del disco no es euclidea sino hiperbolica.

## Nucleo de Poisson y datos de frontera

Una vez identificado un dominio con el disco, las funciones armonicas pueden reconstruirse desde datos de frontera mediante el nucleo de Poisson.

### Moral

El teorema de Riemann no solo uniformiza dominios: transporta tambien problemas analiticos.

## Caratheodory: extension al borde

Si un dominio simplemente conexo tiene frontera de Jordan, la aplicacion conforme del disco se extiende continuamente y biyectivamente al borde.

### Significado

No toda equivalencia conforme es solo interior; a veces controla toda la frontera.

## Advertencia de frontera irregular

Cuando la frontera es muy rugosa, la extension continua puede fallar.

### Lectura

La teoria conforme interior es mas robusta que la teoria de borde.

## Correspondencia de angulos

Si $f'(z_0)\neq 0$, un mapa conforme preserva angulos orientados entre curvas suaves que se cortan en $z_0$.

### Matiz

La preservacion es local y falla en puntos criticos donde $f'=0$.

## Ejemplo guiado: semiplano y disco

La transformacion de Cayley

$$
f(z)=\frac{z-i}{z+i}
$$

envia el semiplano superior sobre el disco unidad.

### Utilidad

Permite transportar formulas entre ambos dominios sin reprobarlas desde cero.

## Ejemplo guiado: tira horizontal y disco

La exponencial transforma una tira horizontal en un sector o anillo, y combinada con una fraccion lineal produce un mapa al disco.

### Moral

Muchos dominios clasicos se uniformizan por composiciones explicitas de funciones elementales.

## Metrica hiperbolica

El disco lleva una metrica natural invariante por automorfismos. Bajo una aplicacion de Riemann, todo dominio simplemente conexo propio hereda esa metrica.

### Lectura

La uniformizacion conforme convierte preguntas geometricas en preguntas sobre el disco.

## Nucleo de Bergman y Szego

En una capa mas avanzada, la estructura del dominio se refleja en nucleos reproductores holomorfos. El mapa de Riemann interactua de forma precisa con esos objetos.

### Rol

Muestra que la aplicacion de Riemann es solo la puerta de entrada a una teoria geometricofuncional mucho mas amplia.

## Conexion con extremales

La funcion de Riemann puede interpretarse como solucion de un problema extremal. Esta vision enlaza con el principio del area, Koebe y la teoria de funciones univalentes.

## Limitaciones en varias variables

El teorema de Riemann es un fenomeno de dimension compleja uno. En varias variables complejas, la clasificacion biholomorfa es radicalmente mas rigida y ya no existe un analogo tan simple.

## Ejercicios para trabajar

1. Verificar que la transformacion de Cayley lleva el eje real al circulo unidad menos el punto $1$.
2. Probar que dos aplicaciones de Riemann normalizadas en el mismo punto deben coincidir.
3. Construir un mapa conforme de una franja horizontal al disco a partir de exponencial y Cayley.

## Cierre

El teorema de la aplicacion de Riemann es una de las cumbres de variable compleja: normaliza dominios, conecta con familias normales y abre la puerta a la geometria conforme, la metrica hiperbolica y el analisis de frontera.
