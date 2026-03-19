---
title: Integrales de linea
description: Integrales escalares y vectoriales sobre curvas, invariancia por reparametrizacion, trabajo, circulacion, campos conservativos y dependencia del camino.
---

# Integrales de linea

## Motivacion

Las integrales dobles y triples acumulan sobre regiones bidimensionales o tridimensionales. Pero muchas cantidades fisicas viven naturalmente sobre curvas:

- masa de un alambre;
- trabajo de una fuerza a lo largo de una trayectoria;
- circulacion de un campo;
- potencial acumulado sobre un recorrido.

La integral de linea es la herramienta adecuada para cuantificar esos aportes.

## Curvas parametrizadas

Sea

$$
C
$$

una curva suave o suave a trozos parametrizada por

$$
r:[a,b]\to \mathbb{R}^n.
$$

Su derivada

$$
r'(t)
$$

describe el vector tangente, y el elemento infinitesimal de longitud es

$$
ds=\|r'(t)\|\,dt.
$$

Esta expresion conecta directamente las integrales de linea con la geometria de la curva.

## Integral de linea de una funcion escalar

Sea

$$
f:C\to \mathbb{R}
$$

continua. La integral de linea escalar de $f$ sobre $C$ se define por

$$
\int_C f\,ds
=
\int_a^b f(r(t))\,\|r'(t)\|\,dt.
$$

### Interpretacion

La funcion $f$ actua como densidad distribuida a lo largo de la curva.

### Ejemplo 1: masa de un alambre

Si un alambre ocupa la curva $C$ y tiene densidad lineal

$$
\rho,
$$

su masa es

$$
M=\int_C \rho\,ds.
$$

Si

$$
\rho\equiv 1,
$$

se recupera la longitud de la curva:

$$
L(C)=\int_C 1\,ds.
$$

## Invariancia por reparametrizacion

La integral escalar respecto de $ds$ no depende de la parametrizacion, siempre que esta recorra la misma curva con regularidad suficiente.

### Justificacion

Si

$$
r(t)=\tilde r(\phi(t))
$$

con $\phi$ monotona y derivable, entonces la regla de la cadena introduce un factor $\phi'(t)$ que se compensa al pasar a

$$
\|\tilde r'(\phi(t))\phi'(t)\|.
$$

El valor final depende solo de la curva geometrica, no de la velocidad con que se recorre.

## Ejemplo 2: longitud de una circunferencia

Tomemos

$$
r(t)=\langle a\cos t,a\sin t\rangle,\qquad 0\le t\le 2\pi.
$$

Entonces

$$
\|r'(t)\|=a,
$$

de modo que

$$
L=\int_0^{2\pi} a\,dt=2\pi a.
$$

## Integral de linea de un campo vectorial

Sea

$$
F:C\to \mathbb{R}^n
$$

un campo vectorial continuo. La integral de linea vectorial se define por

$$
\int_C F\cdot dr
=
\int_a^b F(r(t))\cdot r'(t)\,dt.
$$

Tambien se escribe

$$
\int_C F\cdot T\,ds,
$$

donde

$$
T=\frac{r'}{\|r'\|}
$$

es el tangente unitario.

### Interpretacion fisica

Si $F$ es una fuerza y la particula se mueve sobre $C$, entonces

$$
\int_C F\cdot dr
$$

es el trabajo realizado por el campo.

## Orientacion

A diferencia de la integral escalar respecto de

$$
ds,
$$

la integral vectorial depende de la orientacion de la curva.

Si se invierte el sentido del recorrido, entonces

$$
\int_{-C} F\cdot dr=-\int_C F\cdot dr.
$$

Esto es natural: el trabajo cambia de signo al invertir el desplazamiento.

## Escritura diferencial en el plano

Si

$$
F(x,y)=\langle P(x,y),Q(x,y)\rangle
$$

y

$$
r(t)=(x(t),y(t)),
$$

entonces

$$
\int_C F\cdot dr
=
\int_C P\,dx+Q\,dy.
$$

En $\mathbb{R}^3$, para

$$
F=\langle P,Q,R\rangle,
$$

se escribe

$$
\int_C P\,dx+Q\,dy+R\,dz.
$$

## Ejemplo 3: trabajo sobre un segmento

Sea

$$
F(x,y)=\langle x,y\rangle
$$

y tomemos el segmento desde $(0,0)$ hasta $(1,1)$ con parametrizacion

$$
r(t)=\langle t,t\rangle,\qquad 0\le t\le 1.
$$

Entonces

$$
F(r(t))=\langle t,t\rangle,
\qquad
r'(t)=\langle 1,1\rangle.
$$

Por tanto

$$
\int_C F\cdot dr
=
\int_0^1 2t\,dt=1.
$$

## Ejemplo 4: una integral dependiente del camino

Sea

$$
F(x,y)=\langle -y,x\rangle.
$$

Sobre la circunferencia unitaria

$$
r(t)=\langle \cos t,\sin t\rangle,
\qquad
0\le t\le 2\pi,
$$

tenemos

$$
F(r(t))=\langle -\sin t,\cos t\rangle=r'(t).
$$

Entonces

$$
\int_C F\cdot dr
=
\int_0^{2\pi} 1\,dt=2\pi.
$$

Este campo tiene una componente tangencial pura sobre la circunferencia, y su integral mide precisamente la circulacion.

## Campos conservativos y potencial

Un campo

$$
F
$$

se llama conservativo si existe una funcion potencial

$$
\phi
$$

tal que

$$
F=\nabla \phi.
$$

En ese caso, las integrales de linea se simplifican drasticamente.

### Teorema 1: teorema fundamental para integrales de linea

Si

$$
F=\nabla \phi
$$

y $C$ esta parametrizada por $r:[a,b]\to \mathbb{R}^n$, entonces

$$
\int_C F\cdot dr=\phi(r(b))-\phi(r(a)).
$$

#### Demostracion

Por regla de la cadena,

$$
\frac{d}{dt}\phi(r(t))=\nabla \phi(r(t))\cdot r'(t)=F(r(t))\cdot r'(t).
$$

Integrando entre $a$ y $b$,

$$
\int_a^b F(r(t))\cdot r'(t)\,dt
=
\phi(r(b))-\phi(r(a)).
$$

### Consecuencias

- la integral depende solo de los extremos;
- sobre toda curva cerrada se cumple

$$
\oint_C F\cdot dr=0.
$$

## Criterios de independencia del camino

En dominios adecuados, varias propiedades son equivalentes:

- $F$ tiene potencial;
- la integral de linea depende solo de los extremos;
- la integral sobre toda curva cerrada es cero.

En el plano simplemente conexo, una condicion diferencial clasica es

$$
\frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}.
$$

En $\mathbb{R}^3$, el criterio analogo involucra

$$
\nabla\times F=0
$$

bajo hipotesis topologicas adecuadas. Esta idea sera retomada con Green y Stokes.

## Ejemplo 5: campo conservativo

Sea

$$
F(x,y)=\langle 2x,2y\rangle.
$$

Entonces

$$
F=\nabla(x^2+y^2).
$$

Si $C$ une $(0,0)$ con $(1,2)$, se tiene

$$
\int_C F\cdot dr
=
(1^2+2^2)-0=5.
$$

El valor es el mismo para cualquier camino que una esos puntos.

## Integral de linea escalar frente a vectorial

Conviene no confundir:

$$
\int_C f\,ds
$$

con

$$
\int_C F\cdot dr.
$$

La primera acumula una densidad sobre longitud y no depende de la orientacion. La segunda mide el acoplamiento entre el campo y el desplazamiento tangencial, y si depende del sentido del recorrido.

## Trabajo, circulacion y flujo tangencial

En muchos problemas fisicos, la integral

$$
\int_C F\cdot dr
$$

se interpreta como trabajo o circulacion.

Si

$$
T
$$

es el tangente unitario,

$$
F\cdot dr=(F\cdot T)\,ds.
$$

La cantidad

$$
F\cdot T
$$

es la componente tangencial del campo. Green y Stokes relacionaran la integral de esta componente tangencial con derivadas del campo dentro de la region.

## Curvas a trozos

Si una curva $C$ se descompone como

$$
C=C_1\cup \cdots\cup C_m
$$

con parametrizaciones compatibles, entonces

$$
\int_C F\cdot dr=\sum_{j=1}^m \int_{C_j} F\cdot dr.
$$

Esta aditividad es esencial para contornos poligonales y fronteras por piezas suaves.

## Ejemplo 6: campo no conservativo

Considere nuevamente

$$
F(x,y)=\langle -y,x\rangle.
$$

Tomemos dos curvas desde $(1,0)$ hasta $(0,1)$:

- el arco de circunferencia unitaria en el primer cuadrante;
- el segmento recto que une ambos puntos.

Sobre el arco,

$$
r(t)=\langle \cos t,\sin t\rangle,\qquad 0\le t\le \frac{\pi}{2},
$$

y la integral vale

$$
\int_0^{\pi/2}1\,dt=\frac{\pi}{2}.
$$

Sobre el segmento

$$
r(t)=\langle 1-t,t\rangle,\qquad 0\le t\le 1,
$$

tenemos

$$
F(r(t))=\langle -t,1-t\rangle,
\qquad
r'(t)=\langle -1,1\rangle,
$$

y por tanto

$$
F(r(t))\cdot r'(t)=1.
$$

La integral vale entonces

$$
1.
$$

Como los valores difieren, el campo no es conservativo en el dominio.

## Comentario avanzado

En lenguaje de formas diferenciales, una integral de linea es la integral de una 1-forma sobre una curva orientada. El teorema fundamental, Green y Stokes se leen entonces como distintas manifestaciones de la misma idea de "derivada exterior mas frontera". Esa unificacion es conceptualmente muy poderosa, pero el contenido esencial ya es visible en calculo vectorial clasico.

## Errores frecuentes

- Confundir $ds$ con $dr$.
- Olvidar la norma $\|r'(t)\|$ en integrales escalares.
- Olvidar el signo al invertir la orientacion en integrales vectoriales.
- Suponer que toda integral de linea depende solo de los extremos.
- Buscar potencial sin revisar el dominio topologico.

## Conclusion

Las integrales de linea miden acumulacion sobre trayectorias. Su forma escalar captura densidad sobre curvas; su forma vectorial captura trabajo y circulacion. A partir de ellas se construye el puente entre informacion local del campo y comportamiento global sobre contornos, puente que cristaliza en los teoremas de Green y Stokes.
