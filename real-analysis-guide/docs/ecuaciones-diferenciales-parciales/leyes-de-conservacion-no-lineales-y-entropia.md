---
title: Leyes de Conservacion No Lineales y Entropia
description: Formulacion debil, choques y criterio de entropia para seleccionar soluciones fisicamente relevantes.
---

# Leyes de Conservacion No Lineales y Entropia

## Del transporte lineal al mundo no lineal

Una ley de conservacion unidimensional toma la forma

$$
u_t+\partial_x F(u)=0.
$$

Si $F(u)=cu$, reaparece el transporte lineal. Pero cuando $F$ es no lineal, la velocidad de propagacion depende del estado:

$$
u_t+F'(u)u_x=0
$$

mientras la solucion siga siendo suave.

Esa dependencia es la fuente de:

- compresion;
- rarefaccion;
- formacion de choques;
- perdida inevitable de regularidad clasica.

## Formulacion integral de conservacion

La ley expresa balance en cualquier intervalo $[a,b]$:

$$
\frac{d}{dt}\int_a^b u(t,x)\,dx
=F(u(t,a))-F(u(t,b)).
$$

### Lectura

La variacion de masa en una region se explica por flujo que entra o sale por la frontera.

## Formulacion debil

Como aparecen choques, la forma clasica deja de ser util. La formulacion debil dice que $u$ satisface

$$
\iint \left(u\phi_t+F(u)\phi_x\right)\,dx\,dt
+\int u_0(x)\phi(0,x)\,dx=0
$$

para toda funcion de prueba $\phi$ suave y compactamente soportada en tiempo futuro.

## Choque y condicion de Rankine-Hugoniot

Supongamos una solucion a trozos con un salto a lo largo de $x=s t$. Si los estados laterales son $u_-$ y $u_+$, la conservacion impone

$$
s(u_+-u_-)=F(u_+)-F(u_-).
$$

Esta es la condicion de Rankine-Hugoniot.

### Importancia

No cualquier discontinuidad vale. Solo las que conservan correctamente el flujo total.

## Por que la debilidad no basta

Para el mismo dato inicial pueden existir varias soluciones debiles. Hace falta un criterio que descarte las no fisicas.

El criterio correcto en muchos casos escalares es la entropia.

## Entropias

Una entropia convexa $\eta$ con flujo asociado $q$ satisface

$$
q'(u)=\eta'(u)F'(u).
$$

La solucion entropica debe verificar

$$
\eta(u)_t+q(u)_x\le 0
$$

en sentido distribucional.

### Lectura

La desigualdad refleja irreversibilidad. Los choques disipan entropia.

## Ejemplo canonico: Burgers

La ecuacion de Burgers inviscida es

$$
u_t+\left(\frac{u^2}{2}\right)_x=0.
$$

Sus caracteristicas tienen velocidad $u$.

Si el dato inicial decrece en una zona, las caracteristicas se acercan y chocan. La solucion clasica deja de existir en tiempo finito.

### Consecuencia

La formacion de choques no es una patologia rara: es un mecanismo estructural del problema.

## Rarefaccion vs choque

Para un problema de Riemann con dato

$$
u(0,x)=
\begin{cases}
u_-, & x<0,\\
u_+, & x>0,
\end{cases}
$$

ocurren dos regimens tipicos en Burgers:

- si $u_->u_+$, aparece un choque;
- si $u_-<u_+$, aparece un abanico de rarefaccion.

El criterio de entropia selecciona justamente esta orientacion.

## Condicion de Lax

Para un choque entropico escalar, la velocidad del choque $s$ debe quedar entre las velocidades caracteristicas laterales:

$$
F'(u_+)< s < F'(u_-).
$$

### Interpretacion

Las caracteristicas entran al choque desde ambos lados. Si salieran de el, la discontinuidad no seria estable ni fisicamente admisible.

## Viscocidad y seleccion de entropia

Una forma muy poderosa de entender el criterio de entropia es estudiar la regularizacion viscosa:

$$
u_t+\partial_x F(u)=\varepsilon u_{xx}.
$$

Cuando $\varepsilon\downarrow 0$, las soluciones suaves suelen converger a la solucion entropica de la ley de conservacion.

### Moral

La entropia no es un adorno axiomatico; aparece como limite fisico de un modelo mas realista con difusion pequena.

## Metodo de caracteristicas y su ruptura

Mientras la solucion es suave, el metodo de caracteristicas da

$$
\frac{dx}{dt}=F'(u),
\qquad
\frac{du}{dt}=0.
$$

O sea, $u$ se conserva sobre caracteristicas, pero la velocidad depende de $u$. Si caracteristicas con valores distintos se cruzan, la solucion multivaluada seria inevitable. El choque reemplaza esa imposibilidad.

## TV y estabilidad

En leyes escalares, el control de variacion total suele jugar un papel central.

Ideas clave:

- la dinamica puede no aumentar la variacion total bajo hipotesis adecuadas;
- esto da compacidad;
- la compacidad permite existencia;
- la condicion de entropia da unicidad y contraccion en $L^1$.

## Principio de contraccion en L1

Para leyes escalares entropicas, una propiedad profunda es

$$
\|u(t,\cdot)-v(t,\cdot)\|_{L^1}
\le
\|u_0-v_0\|_{L^1}.
$$

### Importancia

Esto da estabilidad fuerte y unicidad. La solucion correcta no solo existe: depende continuamente del dato inicial.

## Conexion con EDP mas amplias

Leyes de conservacion no lineales son la puerta de entrada a:

- trafico;
- gas dinamica;
- ecuaciones de balance;
- hidrodinamica compresible;
- esquemas numericos conservativos.

Tambien muestran con claridad por que las soluciones debiles necesitan criterios extra.

## Ejemplo guiado: choque de Burgers

Para

$$
F(u)=\frac{u^2}{2},
\qquad
u_-=1,
\qquad
u_+=0,
$$

la velocidad del choque es

$$
s=\frac{F(1)-F(0)}{1-0}=\frac12.
$$

La discontinuidad viaja como $x=t/2$.

La condicion de Lax da

$$
F'(0)=0<\frac12<1=F'(1),
$$

luego el choque es entropico.

## Que cambia respecto del calor

En el calor:

- la difusion suaviza;
- el principio de maximo controla;
- las soluciones mejoran instantaneamente.

En leyes de conservacion no lineales:

- las discontinuidades pueden generarse espontaneamente;
- la solucion debil correcta se selecciona por entropia;
- la regularidad puede empeorar en tiempo finito.

## Errores frecuentes

- usar Rankine-Hugoniot como si garantizara unicidad;
- olvidar que la condicion de entropia es una desigualdad, no una igualdad;
- pensar que el metodo de caracteristicas sigue valiendo despues del cruce;
- confundir rarefaccion con choque;
- creer que toda discontinuidad admisible es fisicamente estable.

## Practica recomendada

1. Derivar Rankine-Hugoniot a partir del balance integral.
2. Resolver el problema de Riemann para Burgers en los casos $u_->u_+$ y $u_-<u_+$.
3. Verificar la condicion de Lax para un choque concreto.
4. Comparar la ley inviscida con su regularizacion viscosa.
5. Estudiar por que la contraccion en $L^1$ implica unicidad entropica.

## Cierre

Las leyes de conservacion no lineales muestran uno de los fenomenos mas importantes de la teoria moderna de EDP: la solucion fisicamente correcta puede ser discontinua y, aun asi, estar perfectamente bien definida en sentido debil. Para escogerla hacen falta conservacion, entropia y estabilidad. Ese triple marco es central en analisis, modelizacion y computacion cientifica.
