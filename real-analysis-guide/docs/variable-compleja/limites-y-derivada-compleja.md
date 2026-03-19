---
title: Limites y Derivada Compleja
description: Limites en C, derivada compleja por definicion y el salto de rigidez frente al caso real.
---

# Limites y Derivada Compleja

## Limites por epsilon y delta

La definicion es exactamente analoga a la real, pero ahora el dominio y el codominio son bidimensionales:

decimos que

$$
\lim_{z\to z_0} f(z)=L
$$

si para todo $\varepsilon>0$ existe $\delta>0$ tal que

$$
0<|z-z_0|<\delta
\quad \Rightarrow \quad
|f(z)-L|<\varepsilon.
$$

### Lectura

La novedad no esta en la formula epsilon-delta, sino en que $z$ puede acercarse a $z_0$ desde infinitas direcciones del plano, no solo desde izquierda y derecha.

## Limite con numeros complejos

La existencia del limite exige compatibilidad con todos los caminos de aproximacion.

### Ejemplo

Para

$$
f(z)=\frac{\overline{z}}{z},
$$

si $z=re^{i\theta}$, entonces

$$
f(z)=e^{-2i\theta}.
$$

El valor depende del angulo de aproximacion, luego el limite en $0$ no existe.

### Moral

Los argumentos de no existencia en variable compleja suelen consistir en comparar aproximaciones por familias de caminos distintos.

## Continuidad

Una funcion es continua en $z_0$ si

$$
\lim_{z\to z_0} f(z)=f(z_0).
$$

Las operaciones algebraicas basicas preservan continuidad igual que en el caso real.

## Derivada compleja y funciones analiticas

La derivada compleja se define por

$$
f'(z_0)=\lim_{z\to z_0}\frac{f(z)-f(z_0)}{z-z_0}
$$

si el limite existe.

Una funcion es holomorfa en un abierto si es derivable complejamente en todo punto del abierto.

### Importancia

Ser derivable una vez en el sentido complejo es muchisimo mas fuerte que ser derivable una vez en el sentido real.

## Derivada compleja por definicion

La definicion parece formalmente igual a la real. La diferencia brutal es que el cociente incremental debe tender al mismo valor desde cualquier direccion compleja.

### Ejemplo guiado

Para

$$
f(z)=z^2,
$$

$$
\frac{f(z)-f(z_0)}{z-z_0}
=
\frac{z^2-z_0^2}{z-z_0}
=z+z_0.
$$

Luego

$$
f'(z_0)=2z_0.
$$

## Ejemplo de no derivabilidad

Sea

$$
f(z)=\overline{z}.
$$

Entonces

$$
\frac{\overline{z}-\overline{z_0}}{z-z_0}
=
\frac{\overline{h}}{h}
$$

si $h=z-z_0$.

Si $h$ es real, el cociente vale $1$. Si $h$ es puramente imaginario, vale $-1$. Por tanto, el limite no existe.

### Moral

La conjugacion es real-lineal pero nunca complejamente derivable.

## Diferenciabilidad real vs compleja

Escribir

$$
f(z)=u(x,y)+iv(x,y)
$$

permite ver $f$ como una aplicacion de $\mathbb{R}^2$ en $\mathbb{R}^2$.

### Lectura

Toda funcion holomorfa es una funcion real-diferenciable muy especial. Pero la reciproca es falsa: la mayoria de las funciones suaves reales no son holomorfas.

## Consecuencia de rigidez

En variable real, derivabilidad una vez no implica dos veces. En variable compleja, la derivabilidad compleja en un abierto conduce a una cascada de propiedades:

- derivabilidad infinita;
- expansion en serie de potencias;
- analiticidad real;
- integrales de Cauchy;
- rigidez global.

### Moral

La derivada compleja es la puerta de entrada a todo el bloque estructural, no solo un operador local.

## Reglas operativas

Si las funciones son holomorfas, valen reglas familiares:

- suma;
- producto;
- cociente donde no haya ceros;
- composicion.

Estas reglas pueden demostrarse a partir de la definicion del cociente incremental.

## Funciones enteras

Una funcion holomorfa en todo $\mathbb{C}$ se llama entera.

Ejemplos:

- polinomios;
- exponencial;
- seno y coseno.

### Importancia

Las funciones enteras seran protagonistas de teoremas globales como Liouville y el teorema fundamental del algebra.

## Series de potencias

Toda serie de potencias

$$
\sum_{n=0}^{\infty} a_n (z-z_0)^n
$$

define una funcion holomorfa dentro de su disco de convergencia.

### Lectura

En variable compleja, las series de potencias no son un adorno auxiliar. Son la forma natural de ver la analiticidad.

## Criterio por caminos

Para demostrar que un limite existe, suele bastar con estimaciones uniformes en modulo. Para demostrar que no existe, suele bastar construir dos caminos que produzcan valores limites distintos.

### Moral

La geometria del plano entra ya desde la primera pagina de limites.

## Ejemplo guiado: cociente con dependencia angular

Considerese

$$
f(z)=\frac{x^2-y^2}{x^2+y^2}
$$

con $z=x+iy$. Al aproximar por el eje real y el eje imaginario se obtienen limites distintos. Esto ilustra el metodo de comparar trayectorias para descartar existencia.

## Conexion con el resto del bloque

La derivada compleja prepara:

- ecuaciones de Cauchy-Riemann;
- analiticidad;
- integrales de contorno;
- formulas integrales;
- series de Laurent y singularidades.

## Errores frecuentes

- pensar que derivabilidad por dos direcciones basta para derivabilidad compleja;
- olvidar que el limite debe ser el mismo para todos los caminos;
- confundir continuidad compleja con derivabilidad compleja;
- usar reglas de derivacion antes de verificar holomorfia;
- tratar la conjugacion como funcion holomorfa.

## Practica recomendada

1. Verificar por definicion la derivada de polinomios complejos.
2. Probar que $\overline{z}$ no es holomorfa.
3. Estudiar limites inexistentes comparando distintos caminos.
4. Relacionar continuidad, derivabilidad real y derivabilidad compleja.
5. Explicar por que las series de potencias producen funciones holomorfas.

## Cierre

La derivada compleja parece una copia de la real, pero en realidad es el punto donde empieza la rigidez de la teoria. Exigir independencia del camino en el cociente incremental impone una estructura tan fuerte que casi todo el bloque posterior queda ya prefigurado aqui.
