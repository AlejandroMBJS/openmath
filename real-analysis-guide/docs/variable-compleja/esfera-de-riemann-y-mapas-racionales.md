---
title: Esfera de Riemann y Mapas Racionales
description: Compactificacion de C por el punto infinito, funciones meromorfas globales y dinamica racional elemental.
---

# Esfera de Riemann y Mapas Racionales

## Por que anadir el infinito

Muchas afirmaciones complejas se vuelven mucho mas limpias al adosar un punto en el infinito:

$$
\widehat{\mathbb{C}}=\mathbb{C}\cup\{\infty\}.
$$

### Lectura

La esfera de Riemann compactifica el plano y convierte el "punto en el infinito" en un punto legitimo del espacio.

## Proyeccion estereografica

La identificacion entre la esfera y $\widehat{\mathbb{C}}$ se hace mediante proyeccion estereografica desde el polo norte.

### Importancia

Esto no es solo visual. Explica geometricamente por que lineas del plano se comportan como circunferencias que pasan por $\infty$.

## Topologia compacta

Con el punto $\infty$, la esfera de Riemann es compacta.

### Moral

Muchos teoremas globales complejos son versiones de "compactitud mas holomorfia" sobre la esfera.

## Funciones meromorfas globales

Una funcion meromorfa sobre la esfera de Riemann resulta ser racional.

### Importancia

Esta caracterizacion une de forma profunda:

- analisis complejo global;
- algebra de polinomios;
- geometria de la esfera.

## Punto en el infinito

Decir que una funcion tiene un polo en $\infty$ significa estudiar

$$
g(w)=f(1/w)
$$

cerca de $w=0$.

### Ejemplos

- un polinomio tiene un polo en $\infty$;
- una funcion racional propia puede tener cero, polo o valor finito en $\infty$;
- una entera no polinomica tiene una singularidad esencial en $\infty$.

## Liouville revisitado

Una funcion entera acotada es constante. Equivalentemente:

si una funcion holomorfa sobre la esfera de Riemann no tiene polos, entonces es constante.

### Moral

La compactitud de la esfera reinterpreta Liouville como un hecho geomatrico global.

## Mapas racionales

Una funcion racional

$$
R(z)=\frac{P(z)}{Q(z)}
$$

define un mapa holomorfo de la esfera en si misma.

### Importancia

Los mapas racionales son los automorfismos o endomorfismos holomorfos naturales del objeto compacto complejo mas simple.

## Fracciones lineales

Las transformaciones de Mobius son exactamente los automorfismos biholomorfos de la esfera.

### Moral

Mobius no es solo una clase util de funciones: es todo el grupo conforme global de la esfera.

## Grado

Una funcion racional no constante tiene un grado $d$ que, grosso modo, cuenta cuantas preimagenes tiene un valor generico.

### Lectura

El grado es el invariante algebraico global basico del mapa racional.

## Ejemplo guiado: z a la n

El mapa

$$
R(z)=z^n
$$

extiende a la esfera enviando

$$
0\mapsto 0,
\qquad
\infty\mapsto \infty,
$$

y tiene grado $n$.

### Moral

La multiplicidad local y el grado global se conectan de manera muy transparente sobre la esfera.

## Valores criticos y ramificacion

Si $R'(z_0)=0$, el mapa se ramifica en $z_0$.

### Importancia

La teoria global de mapas racionales organiza como se pliegan las hojas del mapa sobre la esfera.

## Meromorfia como holomorfia a valores esfericos

Una funcion meromorfa en un dominio puede verse como una funcion holomorfa con valores en la esfera de Riemann.

### Lectura

Los polos dejan de ser singularidades "externas" y se convierten simplemente en el valor $\infty$.

## Integracion y residuo en el infinito

La suma de todos los residuos de una funcion meromorfa sobre la esfera es cero.

### Moral

El infinito participa como una singularidad mas del paisaje global.

## Picard, idea preliminar

La presencia de singularidades esenciales se vuelve aun mas radical globalmente: cerca de una singularidad esencial, casi todo el plano se alcanza infinitas veces. No desarrollamos aqui Picard en pleno, pero la esfera de Riemann es el marco natural para formularlo.

## Conexion con dinamica compleja

Iterar mapas racionales produce:

- conjuntos de Julia;
- conjuntos de Fatou;
- dinamica caotica sobre la esfera.

### Importancia

Aunque este bloque no entre en dinamica compleja en profundidad, la esfera de Riemann es su escenario natural.

## Conexion con geometria y topologia

La esfera de Riemann es simultaneamente:

- superficie compleja compacta;
- superficie riemanniana;
- esfera topologica real bidimensional.

### Moral

Variable compleja toca aqui geometria global de manera directa.

## Errores frecuentes

- tratar $\infty$ como mera notacion informal y no como punto real del espacio compactificado;
- olvidar que no toda entera extiende holomorficamente a la esfera;
- confundir meromorfia global con racionalidad local;
- ignorar el residuo en el infinito;
- pensar que las Mobius son solo ejemplos entre muchos automorfismos de la esfera.

## Practica recomendada

1. Estudiar el comportamiento de funciones racionales en $\infty$ usando $w=1/z$.
2. Verificar que las Mobius actuan biholomorficamente sobre la esfera.
3. Relacionar grado de un mapa racional con numero de preimagenes genericas.
4. Calcular el residuo en el infinito en ejemplos simples.
5. Interpretar polos como valores infinitos sobre la esfera.

## Cierre

La esfera de Riemann es la forma global correcta de cerrar el plano complejo. Con ella, la teoria de funciones meromorfas, polos, Mobius y mapas racionales se vuelve compacta, geomatrica y conceptualmente mucho mas clara.
