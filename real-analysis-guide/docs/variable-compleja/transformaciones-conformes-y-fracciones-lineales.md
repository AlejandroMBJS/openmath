---
title: Transformaciones Conformes y Fracciones Lineales
description: Mapas conformes, transformaciones de Mobius y uso estructural de funciones holomorfas como cambios de coordenadas.
---

# Transformaciones Conformes y Fracciones Lineales

## De la derivada a la conformalidad

Si $f$ es holomorfa y

$$
f'(z_0)\ne 0,
$$

entonces localmente preserva angulos orientados.

### Lectura

La derivada compleja actua como multiplicacion por un numero complejo no nulo, es decir:

- una rotacion;
- seguida de una dilatacion.

Por eso las funciones holomorfas no degeneradas son mapas conformes.

## Transformaciones conformes

Un mapa conforme es, localmente, un cambio de coordenadas que preserva angulos y orientacion.

### Importancia

En dos dimensiones, la teoria compleja convierte este concepto geomatrico en una teoria analitica extremadamente poderosa.

## Fracciones lineales

Las transformaciones de Mobius tienen la forma

$$
T(z)=\frac{az+b}{cz+d},
\qquad
ad-bc\ne 0.
$$

### Lectura

Son las transformaciones racionales mas simples no triviales y constituyen el grupo de automorfismos conformes de la esfera de Riemann.

## Propiedades basicas

Toda transformacion de Mobius es composicion de:

- traslaciones;
- dilataciones y rotaciones;
- inversion $z\mapsto 1/z$.

### Moral

La teoria global se reduce a tres movimientos elementales.

## Lineas y circunferencias

Las transformaciones de Mobius envian lineas y circunferencias generalizadas en lineas y circunferencias generalizadas.

### Importancia

Esto explica por que son tan utiles para normalizar dominios.

## Tres puntos determinan una Mobius

Dados tres puntos distintos $z_1,z_2,z_3$ y tres puntos distintos $w_1,w_2,w_3$ en la esfera, existe una unica transformacion de Mobius que envia los primeros en los segundos.

### Moral

Las transformaciones de Mobius tienen la flexibilidad exacta para normalizar triples.

## Ejemplo guiado: semiplano y disco

La transformacion

$$
T(z)=\frac{z-i}{z+i}
$$

envia el semiplano superior en el disco unidad.

### Lectura

Muchos problemas en dominios distintos se vuelven equivalentes tras un cambio conforme adecuado.

## Automorfismos del disco

Todo automorfismo holomorfo del disco tiene la forma

$$
e^{i\theta}\frac{z-a}{1-\overline{a}z},
\qquad |a|<1.
$$

### Importancia

El disco unidad es el dominio modelo de la teoria conforme bidimensional.

## Riemann mapping, idea

El teorema de la aplicacion de Riemann dice, esquematicamente, que todo dominio simplemente conexo propio del plano es conformemente equivalente al disco unidad.

### Moral

Desde el punto de vista conforme, el disco es el modelo universal de los dominios simplemente conexos planos.

## Normalizacion

La unicidad del mapa conforme requiere fijar condiciones de normalizacion, por ejemplo:

- imagen de un punto;
- argumento de la derivada;
- envio de varios puntos distinguidos.

## Conformidad y problemas de frontera

Los mapas conformes se usan para transportar:

- ecuaciones armonicas;
- problemas de Dirichlet;
- flujos potenciales;
- dominios geometricamente complicados a dominios canonicos.

### Importancia

No son solo objetos geometricos elegantes. Son herramientas efectivas para resolver problemas.

## Derivada nula y perdida de conformidad

Si $f'(z_0)=0$, el mapa deja de ser conforme en ese punto.

### Lectura

Aparecen plegamientos locales, perdida de inyectividad y cambio en la multiplicidad del mapeo.

## Ejemplo guiado: z cuadrado revisitado

La funcion

$$
f(z)=z^2
$$

es conforme en $\mathbb{C}\setminus\{0\}$, pero no en $0$.

### Moral

La conformalidad es una propiedad local fina, no simplemente "la funcion es holomorfa".

## Cross-ratio

El cociente doble

$$
[z_1,z_2;z_3,z_4]
=
\frac{(z_1-z_3)(z_2-z_4)}{(z_1-z_4)(z_2-z_3)}
$$

es invariante bajo transformaciones de Mobius.

### Importancia

Es un invariante geometrico central para caracterizar estas transformaciones.

## Conformidad y armonicidad

Si $u$ es armonica y $f$ es holomorfa, entonces bajo hipotesis adecuadas

$$
u\circ f
$$

sigue siendo armonica.

### Lectura

Los mapas conformes preservan la estructura potencial bidimensional.

## Conexion con fisica matematica

Las transformaciones conformes aparecen en:

- electrostatica plana;
- fluidos incompresibles bidimensionales;
- crecimiento laplaciano;
- teoria conforme de campos en dos dimensiones.

## Errores frecuentes

- pensar que toda holomorfa es globalmente conforme;
- olvidar la condicion $f'(z_0)\ne 0$;
- confundir inyectividad global con conformalidad local;
- usar Mobius sin mirar el punto donde el denominador se anula;
- olvidar que lineas cuentan como circunferencias generalizadas.

## Practica recomendada

1. Verificar que ciertas transformaciones de Mobius envian semiplanos en discos.
2. Descomponer una Mobius en traslacion, dilatacion/rotacion e inversion.
3. Estudiar donde una funcion holomorfa deja de ser conforme.
4. Relacionar cross-ratio e invariancia de Mobius.
5. Usar un mapa conforme para transportar un problema armonico simple.

## Cierre

Las transformaciones conformes muestran la faceta geomatrica mas fuerte de variable compleja. Con ellas, la holomorfia deja de ser solo una condicion diferencial y se convierte en una teoria de cambios de coordenadas rigidos, capaces de simplificar dominios y problemas enteros.
