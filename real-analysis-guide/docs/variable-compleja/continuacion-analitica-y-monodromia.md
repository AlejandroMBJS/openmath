---
title: Continuacion Analitica y Monodromia
description: Extension de germenes holomorfos, continuation a lo largo de caminos, monodromia y relacion con funciones multivaluadas.
---

# Continuacion Analitica y Monodromia

## Idea central

Una funcion holomorfa viene determinada por sus valores en cualquier conjunto con punto de acumulacion interior. Esa rigidez permite prolongarla mucho mas alla de su disco inicial de definicion.

### Lectura

La continuation analitica no es un truco para alargar formulas. Es la expresion global de que la holomorfia deja muy poca libertad local.

## Germenes y principio de identidad

Un germen holomorfo en $z_0$ puede pensarse como la clase de equivalencia de todas las funciones holomorfas definidas cerca de $z_0$ que coinciden en algun entorno mas pequeno.

### Consecuencia

Si dos extensiones holomorfas de un mismo germen se superponen, deben coincidir en la interseccion conexa por el principio de identidad.

## Continuacion a lo largo de un camino

Sea $\gamma:[0,1]\to \Omega$ un camino continuo en un abierto. Una continuation analitica a lo largo de $\gamma$ consiste en una cadena de discos solapados

$$
D_0,D_1,\dots,D_N
$$

que cubren la trayectoria y en cada uno de los cuales hay una funcion holomorfa $f_j$ tal que $f_j=f_{j+1}$ en la interseccion.

### Lectura

La informacion se pasa de disco en disco. El solapamiento es lo que fuerza consistencia.

## Unicidad de la continuation a lo largo de un camino fijo

Si una continuation existe a lo largo de un camino dado, es unica.

### Razon

Dos posibles continuaciones coinciden al comienzo; luego coinciden en el primer solapamiento, despues en el segundo, y asi sucesivamente.

## Ejemplo basico: serie geometrica

La serie

$$
\sum_{n=0}^{\infty} z^n = \frac{1}{1-z}
$$

define una funcion holomorfa inicialmente para $|z|<1$. La expresion racional proporciona una continuation analitica a $\mathbb{C}\setminus\{1\}$.

### Moral

La serie local no "ve" el plano completo, pero la funcion si.

## Singularidades como obstrucciones

La continuation falla al llegar a singularidades genuinas. Para $\frac{1}{1-z}$ el punto $z=1$ actua como barrera.

### Matiz

No toda barrera es un unico punto. Una frontera natural puede bloquear cualquier continuation mas alla de una curva o conjunto mas grande.

## Frontera natural

Existen series de potencias cuyo circulo de convergencia es una barrera total: no admiten continuation a traves de ningun punto de ese borde.

### Ejemplo clasico

La serie lacunaria

$$
\sum_{k=0}^{\infty} z^{2^k}
$$

tiene el circulo unidad como frontera natural.

### Lectura

Esto muestra que la continuation analitica es poderosa, pero no automatica.

## Funciones multivaluadas y ramas

Funciones como $\log z$ o $z^\alpha$ no son funciones globales bien definidas en $\mathbb{C}\setminus\{0\}$ si se pretende continuidad alrededor del origen.

### Ejemplo

Una rama de $\log z$ existe en cualquier dominio simplemente conexo que no rodee al origen, por ejemplo $\mathbb{C}\setminus(-\infty,0]$.

## Monodromia local

Si se continua una rama de $\log z$ alrededor de una vuelta completa al origen, al regresar al punto inicial el valor cambia en $2\pi i$.

### Significado

La continuation a lo largo de lazos distintos puede producir germenes finales distintos.

## Grupo fundamental y accion sobre germenes

El comportamiento de la continuation a lo largo de lazos depende solo de la clase de homotopia del lazo cuando la continuation es posible homotopicamente.

### Lectura

El grupo fundamental del dominio actua sobre las ramas de la funcion por continuation analitica.

## Teorema de monodromia

En una formulacion clasica: si $\Omega$ es simplemente conexo y una funcion admite continuation analitica a lo largo de cualquier camino desde un punto base, entonces la continuation es independiente del camino.

### Consecuencia

En dominios simplemente conexos, las funciones multivaluadas se vuelven univaluadas una vez elegida una rama inicial adecuada.

## Ejemplo: raiz cuadrada

La funcion $z^{1/2}$ no admite rama global en $\mathbb{C}\setminus\{0\}$, pero si en cualquier dominio simplemente conexo que no contenga lazo alrededor del origen.

Una eleccion tipica es

$$
\sqrt{re^{i\theta}}=\sqrt{r}\,e^{i\theta/2}, \qquad -\pi<\theta<\pi.
$$

## Superficies de Riemann como solucion estructural

En lugar de forzar una sola rama en el plano cortado, puede construirse un espacio de hojas sobre el cual la funcion multivaluada se vuelve holomorfa y univaluada.

### Lectura

La superficie de Riemann no elimina la monodromia; la incorpora geometricamente.

## Continuacion y ecuaciones diferenciales

Las soluciones locales de ecuaciones diferenciales complejas suelen prolongarse analiticamente mientras no alcancen singularidades del coeficiente o de la propia solucion.

### Importancia

La monodromia de una ecuacion lineal describe como cambia una base de soluciones al rodear singularidades.

## Ejemplo guiado: logaritmo

Partase del germen de $\log z$ cerca de $z=1$ con valor $\log 1=0$. Continuese alrededor del circulo unidad una vez en sentido positivo.

Al volver a $1$, el valor es $2\pi i$ y no $0$.

### Conclusiones

- la continuation existe a lo largo del lazo;
- el germen final no coincide con el inicial;
- por tanto no puede existir una rama global de $\log$ en $\mathbb{C}\setminus\{0\}$.

## Criterio por primitivas

En un dominio $\Omega$, existe una rama holomorfa del logaritmo de una funcion holomorfa no nula $f$ si y solo si $\frac{f'}{f}$ tiene primitiva en $\Omega$.

### Idea

Si $g=\log f$, entonces $g'=f'/f$. Reciprocamente, si $h' = f'/f$, entonces $e^{-h}f$ es constante.

## Relacion con el principio del argumento

La imposibilidad de encontrar logaritmos globales se detecta integrando

$$
\frac{f'(z)}{f(z)}
$$

alrededor de lazos cerrados. Esa integral mide el numero de vueltas de $f(\gamma)$ alrededor del origen.

## Advertencias comunes

- Continuation analitica no significa extension continua de borde.
- Una formula cerrada no garantiza continuation a todo el plano.
- Elegir una rama en un dominio no implica que exista una eleccion compatible en dominios mayores.

## Ejemplos para trabajar

1. Demostrar que $\arctan z$ prolonga meromorficamente a $\mathbb{C}$ salvo polos en $\pm i$.
2. Construir una rama de $z^{1/3}$ en $\mathbb{C}\setminus(-\infty,0]$ y describir que ocurre tras una vuelta completa.
3. Mostrar que $\sum_{n\ge 0} z^{n!}$ no puede esperarse que tenga continuation global por argumentos de frontera natural.

## Cierre

La continuation analitica convierte datos locales en objetos globales y la monodromia mide exactamente donde y como esa globalidad falla. Esa tension entre rigidez local y topologia global es una de las ideas mas profundas de variable compleja.
