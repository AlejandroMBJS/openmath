---
title: Analisis Microlocal y Operadores Pseudodiferenciales
description: Localizacion simultanea en espacio y frecuencia, frente de ondas y simbolos para entender propagacion de singularidades.
---

# Analisis Microlocal y Operadores Pseudodiferenciales

## Por que el analisis local no basta

La regularidad de una solucion no siempre debe preguntarse solo en un punto $x$. Tambien importa en que direcciones de frecuencia la solucion es singular o regular.

El analisis microlocal estudia exactamente eso:

- donde esta una singularidad;
- en que direcciones cotangentes aparece;
- como la ecuacion la propaga, suaviza o refleja.

## Idea central

Una funcion puede ser suave cerca de un punto en algunas direcciones de frecuencia y singular en otras. La herramienta que registra esta informacion es el frente de ondas.

## Frente de ondas

De manera informal, el frente de ondas $WF(u)$ es el conjunto de pares

$$
(x,\xi), \qquad \xi\ne 0,
$$

para los que $u$ no es suave cerca de $x$ en la direccion de frecuencia $\xi$.

### Lectura

No basta decir "hay singularidad en $x$". El frente de ondas dice "hay singularidad en $x$ mirando en esta direccion del espacio de frecuencias".

## Ejemplo intuitivo

Una funcion escalon en una variable tiene singularidad en el punto de salto. Microlocalmente, esa singularidad se concentra en direcciones normales al salto. En dimensiones mayores, una discontinuidad a traves de una superficie tiene frente de ondas normal a esa superficie.

## Operadores pseudodiferenciales

Los operadores diferenciales lineales con coeficientes variables tienen simbolo polinomial. Los operadores pseudodiferenciales amplian esa clase permitiendo simbolos mas generales:

$$
Pu(x)=\int e^{ix\cdot \xi} a(x,\xi)\widehat{u}(\xi)\,d\xi.
$$

Aqui $a(x,\xi)$ es el simbolo.

### Importancia

Esta clase es lo bastante amplia como para construir parametrices, invertir operadores modulo suavizantes y describir con precision la regularidad.

## Simbolo principal

En un operador diferencial de orden $m$,

$$
P(x,D)=\sum_{|\alpha|\le m} a_\alpha(x) D^\alpha,
$$

el simbolo principal es la parte homogenea de orden mas alto:

$$
p_m(x,\xi)=\sum_{|\alpha|=m} a_\alpha(x)\xi^\alpha.
$$

En microlocalidad, el simbolo principal controla gran parte de la geometria de propagacion.

## Elipticidad microlocal

Un operador es eliptico en un punto del fibrado cotangente si su simbolo principal no se anula alli.

### Consecuencia

Si $P$ es eliptico microlocalmente y $Pu$ es suave cerca de $(x,\xi)$, entonces $u$ tambien es suave cerca de $(x,\xi)$.

### Moral

La elipticidad impide crear singularidades nuevas: donde el simbolo principal no se anula, el operador es invertible modulo errores suavizantes.

## Parametrix

Para un operador eliptico puede construirse un operador $Q$ tal que

$$
QP = I + R,
$$

donde $R$ es suavizante.

### Lectura

No se invierte exactamente, pero si hasta un error que mejora toda regularidad. Ese "casi inverso" es una parametrix.

## Propagacion de singularidades

En ecuaciones hiperbolicas y dispersivas, las singularidades no se destruyen necesariamente: se propagan a lo largo de curvas determinadas por el simbolo principal.

Estas curvas son las bicharacteristicas del flujo hamiltoniano asociado a $p_m(x,\xi)$.

## Flujo hamiltoniano

Si $p(x,\xi)$ es el simbolo principal, el campo hamiltoniano es

$$
H_p
=
\partial_\xi p \cdot \partial_x
-\partial_x p \cdot \partial_\xi.
$$

Las singularidades viajan, en primera aproximacion, siguiendo las orbitas de $H_p$.

### Importancia

Este principio explica:

- propagacion de frentes en ondas;
- reflexion y refraccion geometricas;
- trayectorias de rayos en optica geometrica.

## Elipticas, hiperbolicas y microlocalidad

- En elipticas, la parametrix suaviza y la singularidad queda controlada por el dato.
- En hiperbolicas, las singularidades se propagan.
- En parabolicas, suele haber amortiguamiento microlocal de altas frecuencias.

Microlocalidad unifica estas diferencias en lenguaje simbolico.

## Pseudodiferenciales y Sobolev

Un operador pseudodiferencial de orden $m$ actua, grosso modo, como

$$
H^s \to H^{s-m}.
$$

Esto permite medir regularidad con enorme flexibilidad y construir calculos simbolicos adaptados al problema.

## Conmutadores

Muchos argumentos finos usan conmutadores

$$
[P,A]=PA-AP
$$

entre operadores. El simbolo principal del conmutador esta ligado al corchete de Poisson de los simbolos.

### Lectura

Esto conecta directamente algebra operatorial con geometria simplactica del espacio cotangente.

## Frentes de ondas y productos

El frente de ondas tambien decide cuando ciertas operaciones tienen sentido:

- producto de distribuciones;
- restriccion a subvariedades;
- composicion con fases oscilatorias.

No toda multiplicacion de distribuciones esta permitida. La geometria de sus frentes de ondas lo decide.

## Ejemplo guiado: ecuacion de ondas

Para la ecuacion de ondas lineal, la singularidad de los datos iniciales se propaga a lo largo del flujo geodesico en la variedad cotangente caracteristica.

### Moral

La ecuacion no solo dice donde esta la solucion; dice como viaja la informacion singular.

## Optica geometrica

En regimen de alta frecuencia, muchas soluciones se aproximan por ansatz oscilatorios:

$$
u(x)\approx a(x)e^{i\phi(x)/h}.
$$

La fase $\phi$ satisface una ecuacion eikonal y la amplitud una ecuacion de transporte.

Esto enlaza microlocalidad con:

- rayos;
- mecanica clasica;
- aproximaciones semiclasicas.

## Problemas de frontera

Con frontera, el analisis microlocal se complica:

- las singularidades pueden reflejarse;
- aparecen rayos rasantes;
- la geometria de la frontera modifica la propagacion.

Aqui entran calculos mas refinados y microlocalidad de borde.

## Conexion con problemas inversos

Gran parte de los problemas inversos modernos usan herramientas microlocales para entender:

- que singularidades del medio afectan los datos medidos;
- cuales son visibles;
- cuales quedan ocultas o inestables.

## Conexion con dispersivas y Schrodinger

Las estimaciones de fase estacionaria y la descripcion de paquetes de ondas son manifestaciones de ideas microlocales:

- localizacion en frecuencia;
- evolucion de la fase;
- propagacion semiclasica.

## Errores frecuentes

- pensar que el frente de ondas es solo el soporte singular;
- olvidar que una singularidad lleva direccion en el espacio cotangente;
- tratar elipticidad como propiedad solo en el espacio fisico;
- confundir pseudodiferencial con diferencial de orden fraccionario sin estructura simbolica;
- ignorar el papel del flujo hamiltoniano en propagacion.

## Practica recomendada

1. Explicar intuitivamente el frente de ondas de una discontinuidad a traves de una superficie.
2. Relacionar simbolo principal y elipticidad microlocal.
3. Describir la idea de parametrix para un operador eliptico.
4. Interpretar el flujo hamiltoniano asociado a la ecuacion de ondas.
5. Comparar el soporte singular con el frente de ondas.

## Cierre

El analisis microlocal y los operadores pseudodiferenciales son parte del lenguaje doctoral natural de las EDP modernas. Permiten ver singularidades con resolucion espacio-frecuencia y describir su propagacion con precision geometrica. Sin esta capa, el bloque sigue siendo fuerte; con ella, ya entra claramente en el analisis fino contemporaneo.
