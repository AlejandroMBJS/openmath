---
title: EDP Geometricas y Flujos Geometricos
description: Ecuaciones gobernadas por invariancia geometrica, superficies minimas y flujos de curvatura.
---

# EDP Geometricas y Flujos Geometricos

## Donde entra la geometria

En muchas ecuaciones la incognita no es solo un campo sobre un dominio, sino un objeto geometricamente significativo:

- una superficie;
- una metrica;
- una aplicacion entre variedades;
- una curvatura.

Entonces la ecuacion debe respetar simetrias geometricas. Esa restriccion cambia de raiz la teoria.

## Rasgo distintivo

En una EDP geometrica:

- la forma de la ecuacion depende de cantidades invariantes;
- el cambio de coordenadas no debe alterar el contenido geometrico;
- la eleccion de gauge o parametrizacion puede simplificar o complicar la analisis.

## Superficies minimas

Si una superficie es grafo de una funcion $u$, minimizar el area lleva a la ecuacion

$$
\nabla\cdot\left(\frac{\nabla u}{\sqrt{1+|\nabla u|^2}}\right)=0.
$$

### Lectura

Es una ecuacion eliptica no lineal que expresa curvatura media nula.

### Importancia

Muestra como una ley variacional geometrica produce una EDP no lineal muy estructurada.

## Mapas armonicos

Dada una aplicacion entre variedades, los puntos criticos de la energia de Dirichlet producen la ecuacion de mapas armonicos.

Este modelo combina:

- metodo variacional;
- restricciones geometricas;
- posibilidad de singularidades en dimension alta.

## Curvatura media y flujo

Si en vez de buscar equilibrio se deja evolucionar una superficie para disminuir su area, aparece el flujo por curvatura media.

En forma esquematica:

la velocidad normal es proporcional a la curvatura media.

### Lectura

Es la version parabolica del problema de superficie minima: la geometria ya no se impone de golpe, sino que se alcanza por evolucion.

## Ricci flow

Para una metrica riemanniana,

$$
\partial_t g = -2\,\mathrm{Ric}(g)
$$

es la ecuacion de Ricci.

No es una EDP escalar, sino un sistema geometricamente invariante sobre tensores metricos.

### Moral

La curvatura ya no es solo una cantidad medida sobre la geometria: se convierte en el motor de la evolucion de la propia geometria.

## Gauge y no degeneracion

Muchas EDP geometricas tienen invarianzas que introducen degeneracion aparente.

Ejemplos:

- reparametrizaciones;
- difeomorfismos;
- simetrias de gauge.

Para analizarlas, a menudo hace falta fijar gauge o escoger coordenadas adecuadas. Ese paso no cambia el objeto geometrico, pero si hace tratable la ecuacion.

## Monotonicidad y cantidades geometricas

Al igual que en otros bloques aparecen energias, en EDP geometricas suelen existir cantidades monotonicas:

- energia de Dirichlet;
- area;
- funcionales entropicos;
- cantidades de monotonicidad local.

Estas herramientas ayudan a:

- detectar singularidades;
- probar compactitud;
- estudiar escalas pequenas.

## Singularidades

Los flujos geometricos pueden desarrollar singularidades en tiempo finito:

- pinzamientos;
- concentracion de curvatura;
- colapso local.

Entonces la teoria necesita:

- analisis de blow-up;
- reescalamiento;
- soluciones debiles o continuacion por cirugia en algunos contextos.

## EDP geometricas y analisis no lineal

Estas ecuaciones ponen juntas muchas piezas ya vistas:

- formulacion variacional;
- regularidad;
- no linealidad;
- compacidad;
- escalamiento;
- estimaciones monotonicas.

Por eso son un punto natural de madurez del bloque.

## Ejemplo guiado: ecuacion de superficie minima

Si el funcional area es

$$
A(u)=\int_{\Omega}\sqrt{1+|\nabla u|^2}\,dx,
$$

la ecuacion de Euler-Lagrange es

$$
\nabla\cdot\left(\frac{\nabla u}{\sqrt{1+|\nabla u|^2}}\right)=0.
$$

Comparada con Poisson:

- sigue siendo eliptica;
- pero ya no es lineal;
- la no linealidad esta atada a la geometria del area.

## Ejemplo guiado: nivel set para curvatura media

Una forma de describir el movimiento de una hipersuperficie es como nivel cero de una funcion $\phi(t,x)$. Entonces el flujo por curvatura media puede escribirse como una EDP no lineal para $\phi$.

### Ventaja

La formulacion level-set permite atravesar cambios topologicos que una parametrizacion clasica no maneja bien.

## Conexion con geometria diferencial

Este bloque conecta de manera directa con:

- primera y segunda forma fundamental;
- curvaturas;
- tensores metricos;
- coeficientes de Christoffel;
- teoremas globales de geometria.

Sin esa base, muchas EDP geometricas quedan como formulas oscuras.

## Conexion con fisica matematica

Tambien aparecen en:

- relatividad general, via ecuaciones de Einstein y flujos asociados;
- teorias gauge;
- defectos topologicos;
- membranas y superficies de energia minima.

La frontera entre geometria pura y fisica matematica aqui es muy delgada.

## Que hace dificil la teoria

- invariancia que introduce degeneracion;
- no linealidad fuerte;
- singularidades geometricas;
- ausencia de maximo simple en muchos contextos;
- compacidad modulada por simetrias.

## Errores frecuentes

- tratar una EDP geometrica como si fuera solo una ecuacion escalar en coordenadas;
- olvidar que el gauge cambia la forma pero no el contenido;
- pensar que toda singularidad indica fracaso del modelo;
- confundir flujo geometrico con simple gradiente euclidiano en un espacio lineal;
- ignorar la dependencia de la ecuacion respecto de la parametrizacion.

## Practica recomendada

1. Derivar la ecuacion de superficie minima a partir del funcional area.
2. Explicar la diferencia entre equilibrio geometrico y flujo geometrico.
3. Describir por que Ricci flow necesita tratar la invariancia por difeomorfismos.
4. Relacionar las EDP geometricas con cantidades monotonicas y analisis de singularidades.
5. Comparar la elipticidad de la ecuacion de superficie minima con Poisson.

## Cierre

Las EDP geometricas y los flujos geometricos son una culminacion natural del bloque: la ecuacion ya no solo modela un campo, sino la evolucion o el equilibrio de un objeto geometrico. Aqui convergen variacion, regularidad, no linealidad, simetria e invariancia en uno de los niveles mas altos de la teoria.
