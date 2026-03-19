---
title: Semigrupos y evolucion en espacios de Banach
description: Problema abstracto de Cauchy, semigrupos fuertemente continuos, generadores, soluciones suaves y mild solutions como puente hacia PDE y teoria moderna de evolucion.
---

# Semigrupos y evolucion en espacios de Banach

## Por que este tema ya no es solo EDO clasica

En dimension finita,

$$
\dot u=Au
$$

se resuelve con

$$
e^{tA}.
$$

Cuando el espacio de estados es infinito-dimensional, por ejemplo un espacio de funciones, la idea correcta no desaparece: se transforma en teoria de semigrupos.

Ese es el lenguaje natural de una gran parte de la teoria moderna de evolucion.

## Problema abstracto de Cauchy

Sea

$$
X
$$

un espacio de Banach y

$$
A:D(A)\subset X\to X
$$

un operador lineal, en general no acotado. El problema abstracto es

$$
u'(t)=Au(t),
\qquad
u(0)=u_0.
$$

### Dificultad real

Si

$$
A
$$

es no acotado, la serie exponencial formal puede no tener sentido como en matrices. Hace falta una teoria nueva para interpretar la evolucion.

## Semigrupo fuertemente continuo

Una familia de operadores lineales acotados

$$
(T(t))_{t\ge 0}
$$

en

$$
X
$$

es un semigrupo

$$
C_0
$$

si:

- $T(0)=I$;
- $T(t+s)=T(t)T(s)$ para todo $t,s\ge 0$;
- para cada

$$
x\in X,
$$

se tiene

$$
T(t)x\to x
$$

cuando

$$
t\downarrow 0.
$$

### Lectura

La continuidad no se pide en norma de operadores, sino punto a punto sobre el espacio. Esa es la continuidad fuerte.

## Generador infinitesimal

El generador de un semigrupo

$$
T(t)
$$

se define por

$$
Ax=\lim_{t\downarrow 0}\frac{T(t)x-x}{t},
$$

para los

$$
x
$$

en los que ese limite existe.

### Dominio

El conjunto de tales vectores forma el dominio

$$
D(A).
$$

En general es denso, pero no coincide con todo

$$
X.
$$

### Lectura

El generador es la derivada temporal del semigrupo en el instante inicial. Es el operador que codifica la dinamica infinitesimal.

## Soluciones clasicas y mild

### Solucion clasica

Una funcion

$$
u:[0,\infty)\to X
$$

es solucion clasica si:

- $u(t)\in D(A)$;
- es diferenciable;
- satisface

$$
u'(t)=Au(t)
$$

puntualmente.

### Mild solution

Si

$$
A
$$

genera un semigrupo

$$
T(t),
$$

la formula

$$
u(t)=T(t)u_0
$$

define una solucion mild.

### Moral

La solucion mild puede existir incluso cuando la clasica falla porque

$$
u_0
$$

no pertenece al dominio de

$$
A.
$$

Ese es uno de los puntos clave de la teoria moderna.

## Variacion de constantes abstracta

Para el problema forzado

$$
u'(t)=Au(t)+f(t),
\qquad
u(0)=u_0,
$$

la formula de Duhamel es

$$
u(t)=T(t)u_0+\int_0^t T(t-s)f(s)\,ds.
$$

### Lectura

Es la version abstracta de la variacion de parametros. La misma estructura que ya aparecia en EDO lineales sigue viva en Banach.

## Ejemplo finito-dimensional

Si

$$
X=\mathbb{R}^n
$$

y

$$
A
$$

es una matriz, entonces

$$
T(t)=e^{tA}
$$

es un semigrupo

$$
C_0.
$$

La teoria abstracta generaliza exactamente este caso.

## Ejemplo infinito-dimensional

En

$$
X=L^2(0,1),
$$

el operador Laplaciano con condiciones de frontera apropiadas genera el semigrupo del calor. La ecuacion

$$
u_t=u_{xx}
$$

se interpreta entonces como problema abstracto

$$
u'(t)=Au(t).
$$

### Lectura

La EDP se convierte en una ecuacion diferencial ordinaria en un espacio infinito-dimensional.

## Contraccion y disipatividad

Un semigrupo es de contraccion si

$$
\|T(t)\|\le 1
$$

para todo

$$
t\ge 0.
$$

En muchos problemas esto refleja disipacion fisica: la energia o norma no aumenta con el tiempo.

## Hille-Yosida

La pregunta profunda es: que operadores generan un semigrupo

$$
C_0?
$$

El teorema de Hille-Yosida da una caracterizacion en terminos del resolvente y cotas apropiadas.

### Lectura

No basta con que

$$
A
$$

sea lineal. La teoria de generadores conecta:

- resolventes;
- dominios densos;
- cotas de crecimiento;
- regularidad temporal.

## Por que esto cierra el puente con el resto del syllabus

La teoria de semigrupos enlaza directamente con:

- ecuaciones parciales;
- control infinito-dimensional;
- teoria espectral;
- estabilidad abstracta;
- mecanica cuantica y ecuaciones evolutivas lineales.

Es el punto donde una teoria de EDO deja de vivir solo en

$$
\mathbb{R}^n
$$

y pasa a una formulacion funcional madura.

## Errores frecuentes

- Pensar que todo operador no acotado admite exponencial matricial naive.
- Confundir solucion clasica con mild solution.
- Ignorar el dominio de

$$
A
$$

como si fuera un detalle tecnico menor.
- Creer que continuidad fuerte equivale a continuidad en norma de operadores.

## Practica guiada

### Ejercicio 1

Explica por que

$$
e^{tA}
$$

en dimension finita es el modelo de toda la teoria de semigrupos.

### Ejercicio 2

Describe la diferencia entre solucion clasica y mild para el problema abstracto de Cauchy.

### Ejercicio 3

Explica por que la ecuacion del calor puede verse como una EDO en un espacio de Banach o de Hilbert.

## Cierre

La teoria de semigrupos es la extension conceptual correcta de la exponencial matricial. Con ella, el bloque de EDO deja de ser solo teoria clasica de primer contacto y toca ya la formulacion funcional que sostiene gran parte de la fisica matematica moderna.
