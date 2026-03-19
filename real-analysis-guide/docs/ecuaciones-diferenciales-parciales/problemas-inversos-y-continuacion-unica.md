---
title: Problemas Inversos y Continuacion Unica
description: Recuperacion de coeficientes ocultos, estabilidad, desigualdades de Carleman y visibilidad de singularidades.
---

# Problemas Inversos y Continuacion Unica

## La direccion inversa

En un problema directo:

- se conoce el operador y los parametros;
- se calcula la solucion.

En un problema inverso:

- se observan datos parciales de la solucion;
- se intenta reconstruir una causa oculta.

Esa causa puede ser:

- un coeficiente;
- una fuente;
- una inclusion;
- una geometria;
- un potencial.

## Ejemplo canonico

En la ecuacion

$$
-\nabla\cdot(\gamma(x)\nabla u)=0,
$$

se pregunta si es posible recuperar la conductividad $\gamma(x)$ a partir del mapa que envia dato de Dirichlet a dato de Neumann en la frontera.

Este es el problema de Calderon.

## Por que los problemas inversos son duros

En general, el problema directo suele ser bien planteado. El inverso, incluso cuando es unico, puede ser muy inestable.

Pequenos errores en los datos pueden producir errores enormes en la reconstruccion.

### Moral

La dificultad no es solo existencia o unicidad. La estabilidad es parte esencial del problema.

## Continuacion unica

Una forma elemental del principio es:

si una solucion de una EDP adecuada se anula en un conjunto "demasiado grande", entonces debe ser identicamente nula.

Versiones tipicas:

- si una solucion armonica se anula en un abierto, es cero en toda componente conexa;
- para operadores mas generales se requieren herramientas mas finas.

## Continuacion unica fuerte

Una version mas potente dice:

si una solucion se anula a orden infinito en un punto, entonces es identicamente cero en una region adecuada.

Esta propiedad es crucial para:

- identifiabilidad de coeficientes;
- propagacion de observabilidad;
- argumentos de control.

## Desigualdades de Carleman

La herramienta central para continuacion unica moderna es una desigualdad pesada con peso exponencial:

$$
\|e^{\tau \phi}u\| \le C \|e^{\tau \phi}Pu\|
$$

para $\tau$ grande y una funcion peso $\phi$ apropiada.

### Lectura

El peso fuerza la funcion a concentrarse de manera controlada y permite demostrar que una anulacion excesiva es imposible salvo para la solucion trivial.

## Unicidad vs estabilidad

Que un parametro sea recuperable no implica que se recupere de forma estable.

Escenarios posibles:

- unicidad con estabilidad lipschitz;
- unicidad con estabilidad holder;
- unicidad con estabilidad logaritmica;
- no unicidad.

En muchos problemas inversos de EDP, la estabilidad natural es como mucho logaritmica.

## Mapa de Dirichlet a Neumann

Para ecuaciones elipticas, una cantidad central es el operador

$$
\Lambda_\gamma: f \mapsto \partial_n u|_{\partial\Omega},
$$

donde $u$ resuelve la ecuacion con dato de frontera $f$.

### Importancia

El mapa codifica toda la informacion de medicion accesible desde la frontera. El problema inverso pregunta cuanto del interior queda determinado por ese operador de frontera.

## Soluciones especiales

Muchos problemas inversos se resuelven construyendo soluciones muy oscilatorias o muy concentradas, por ejemplo soluciones complejas geometricas. Estas permiten sondear el medio en direcciones y escalas controladas.

## Microlocalidad e invisibilidad

No todas las singularidades del medio son igualmente visibles en los datos.

La microlocalidad permite preguntar:

- que singularidades se transmiten a la frontera o a los datos observados;
- cuales quedan ocultas;
- cuales se recuperan establemente.

## Problemas de fuente inversa

Otra familia importante:

- recuperar una fuente $f$ a partir de observaciones de $u$;
- localizar emisores;
- reconstruir condiciones iniciales a partir de observaciones finales o parciales.

Estos problemas suelen ser severamente mal planteados hacia atras en el tiempo.

## Observabilidad y control

Problemas inversos, controlabilidad y observabilidad estan fuertemente conectados.

Preguntas tipicas:

- se puede determinar el estado total observando solo una parte del dominio?
- se puede reconstruir el dato inicial desde una observacion temporal?

Las desigualdades de Carleman y observabilidad aparecen de nuevo como puente.

## Tomografia y rayos

En ecuaciones hiperbolicas o de transporte, la informacion viaja por rayos o geodesicas. Problemas inversos de tomografia intentan reconstruir un medio integrando informacion a lo largo de esas trayectorias.

### Lectura

La geometria de propagacion del problema directo decide la visibilidad del problema inverso.

## Regularizacion

Dado que muchos problemas inversos son inestables, no basta invertir directamente. Se introducen metodos de regularizacion:

- Tikhonov;
- truncacion espectral;
- priors variacionales o bayesianos;
- penalizaciones de sparsity o TV.

### Moral

La reconstruccion numerica necesita incorporar estructura a priori para combatir la inestabilidad.

## Ejemplo guiado: calor hacia atras

Si se intenta recuperar $u(0,\cdot)$ a partir de $u(T,\cdot)$ en la ecuacion del calor, aparecen factores exponenciales crecientes al invertir el semigrupo:

$$
e^{T|\xi|^2}.
$$

### Consecuencia

Las altas frecuencias explotan y el problema es severamente mal planteado. Este ejemplo resume la naturaleza tipica de muchos inversos: unicidad formal sin estabilidad util.

## Calderon como modelo

El problema de Calderon pregunta si la conductividad interna de un medio queda determinada por mediciones en la frontera. Es uno de los modelos fundacionales de la teoria inversa moderna y conecta:

- EDP elipticas;
- soluciones oscilatorias complejas;
- analisis microlocal;
- estabilidad cuantitativa.

## Conexion con control

La dualidad entre observabilidad y controlabilidad dice, de forma esquematica:

- si puedo observar suficientemente bien la ecuacion adjunta,
- puedo controlar el sistema directo.

Esto une inversos con teoria de control de EDP.

## Conexion con fisica matematica

Problemas inversos aparecen en:

- imagen medica;
- prospeccion geofisica;
- deteccion de defectos;
- scattering cuantico;
- recuperacion de potenciales y metricas.

## Errores frecuentes

- confundir unicidad con estabilidad;
- pensar que medir toda la frontera siempre resuelve practicamente el problema;
- olvidar que la geometria de propagacion limita la visibilidad;
- ignorar la necesidad de regularizacion;
- tratar el problema inverso como simple inversion algebraica del directo.

## Practica recomendada

1. Explicar por que el calor hacia atras es mal planteado en frecuencias.
2. Describir el papel del mapa de Dirichlet a Neumann en Calderon.
3. Relacionar continuacion unica y unicidad de reconstruccion.
4. Dar una interpretacion de las desigualdades de Carleman.
5. Comparar un problema inverso eliptico con uno hiperbolico desde el punto de vista de visibilidad.

## Cierre

Los problemas inversos y la continuacion unica llevan el bloque a una de sus fronteras mas finas: deducir estructura oculta a partir de datos parciales. Aqui convergen microlocalidad, estabilidad, geometria de propagacion y regularizacion. Esta capa ya es claramente de nivel doctoral.
