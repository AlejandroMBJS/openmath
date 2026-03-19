---
title: Integrales triples
description: Definicion, teorema de Fubini en tres variables, regiones elementales, masa y cambio de variables en coordenadas cilindricas y esfericas.
---

# Integrales triples

## Motivacion

La integral triple extiende la logica de la integral doble al espacio tridimensional. En lugar de acumular sobre regiones del plano, ahora acumulamos sobre solidos.

Sus aplicaciones basicas son:

- volumen de un solido;
- masa con densidad volumica variable;
- momentos e inercias;
- distribucion de carga;
- formulas de cambio de variables en coordenadas adaptadas a la simetria del problema.

## Definicion sobre una caja

Sea

$$
B=[a,b]\times[c,d]\times[\alpha,\beta]\subseteq \mathbb{R}^3,
$$

y sea

$$
f:B\to \mathbb{R}
$$

acotada.

Se particiona la caja en subcajas

$$
B_{ijk}
$$

y se eligen puntos muestrales

$$
(\xi_{ijk},\eta_{ijk},\zeta_{ijk})\in B_{ijk}.
$$

La suma de Riemann correspondiente es

$$
\sum_{i,j,k} f(\xi_{ijk},\eta_{ijk},\zeta_{ijk})\,\Delta V_{ijk},
$$

donde

$$
\Delta V_{ijk}
=(x_i-x_{i-1})(y_j-y_{j-1})(z_k-z_{k-1}).
$$

Si estas sumas convergen a un valor unico cuando la malla tiende a cero, se define

$$
\iiint_B f(x,y,z)\,dV.
$$

## Interpretacion geometrica

Si

$$
f\ge 0,
$$

la integral triple acumula una densidad distribuida en el solido. Si

$$
f=1,
$$

la integral da el volumen del solido.

## Integrabilidad

### Teorema 1

Toda funcion continua en una caja compacta de $\mathbb{R}^3$ es integrable en el sentido de Riemann.

La continuidad vuelve a ser la hipotesis practica dominante.

## Teorema de Fubini en tres variables

### Teorema 2

Si $f$ es continua sobre

$$
B=[a,b]\times[c,d]\times[\alpha,\beta],
$$

entonces

$$
\iiint_B f(x,y,z)\,dV
=
\int_a^b\int_c^d\int_\alpha^\beta f(x,y,z)\,dz\,dy\,dx,
$$

y tambien coincide con cualquiera de los otros cinco ordenes de integracion.

### Comentario

En teoria, seis ordenes son posibles. En practica, elegir el orden correcto reduce el problema de manera radical.

## Ejemplo 1

Sea

$$
f(x,y,z)=x+y+z
$$

en la caja

$$
[0,1]\times[0,1]\times[0,1].
$$

Entonces

$$
\iiint_B (x+y+z)\,dV
=
\int_0^1\int_0^1\int_0^1 (x+y+z)\,dz\,dy\,dx.
$$

Integrando primero en $z$:

$$
\int_0^1 (x+y+z)\,dz=x+y+\frac12.
$$

Luego

$$
\int_0^1\int_0^1 \left(x+y+\frac12\right)\,dy\,dx
=
\frac32.
$$

## Regiones elementales en el espacio

La mayoria de los dominios utiles no son cajas. Se describen mediante desigualdades anidadas.

### Region simple respecto de $z$

Un dominio $E$ es simple respecto de $z$ si

$$
E=\{(x,y,z):(x,y)\in D,\ u_1(x,y)\le z\le u_2(x,y)\},
$$

donde $D$ es una region del plano.

Entonces

$$
\iiint_E f(x,y,z)\,dV
=
\iint_D \left(\int_{u_1(x,y)}^{u_2(x,y)} f(x,y,z)\,dz\right)dA.
$$

Analogamente se definen regiones simples respecto de $x$ o de $y$.

## Ejemplo 2: volumen de un tetraedro

Considere el tetraedro del primer octante limitado por

$$
x+y+z=1.
$$

Puede describirse como

$$
E=\{(x,y,z):0\le x\le 1,\ 0\le y\le 1-x,\ 0\le z\le 1-x-y\}.
$$

Su volumen es

$$
\iiint_E 1\,dV
=
\int_0^1\int_0^{1-x}\int_0^{1-x-y} 1\,dz\,dy\,dx.
$$

Primero,

$$
\int_0^{1-x-y} 1\,dz=1-x-y.
$$

Luego

$$
\int_0^1\int_0^{1-x}(1-x-y)\,dy\,dx=\frac16.
$$

## Volumen y masa

Si el solido $E$ tiene densidad volumica

$$
\rho(x,y,z),
$$

su masa es

$$
M=\iiint_E \rho(x,y,z)\,dV.
$$

El centro de masa se obtiene mediante

$$
\bar x=\frac{1}{M}\iiint_E x\rho\,dV,
\qquad
\bar y=\frac{1}{M}\iiint_E y\rho\,dV,
\qquad
\bar z=\frac{1}{M}\iiint_E z\rho\,dV.
$$

Los momentos de inercia surgen con integrandos cuadraticos como

$$
y^2+z^2,\qquad x^2+z^2,\qquad x^2+y^2.
$$

## Cambio de orden de integracion

Al igual que en dos variables, una integral triple puede volverse elemental o imposible segun el orden elegido. Cambiar de orden exige describir bien el solido.

La regla conceptual es la misma:

1. Dibujar o entender geometricamente el dominio.
2. Proyectarlo sobre un plano adecuado.
3. Reescribir los limites internos.

## Cambio de variables en $\mathbb{R}^3$

Sea

$$
T(u,v,w)=(x(u,v,w),y(u,v,w),z(u,v,w)).
$$

Su Jacobiano es

$$
J_T=
\det
\begin{pmatrix}
x_u & x_v & x_w \\
y_u & y_v & y_w \\
z_u & z_v & z_w
\end{pmatrix}.
$$

### Teorema 3: cambio de variables

Bajo hipotesis regulares adecuadas,

$$
\iiint_E f(x,y,z)\,dV
=
\iiint_{E^\ast} f(T(u,v,w))\,|J_T(u,v,w)|\,du\,dv\,dw.
$$

El Jacobiano mide el factor local de deformacion del volumen.

## Coordenadas cilindricas

Las coordenadas cilindricas son

$$
x=r\cos\theta,\qquad y=r\sin\theta,\qquad z=z.
$$

El Jacobiano vale

$$
r.
$$

Por tanto

$$
dV=r\,dr\,d\theta\,dz.
$$

### Cuando convienen

Se usan cuando el dominio o el integrando tienen simetria axial alrededor de un eje, usualmente el eje $z$.

### Ejemplo 3: volumen de un cilindro

Para el cilindro

$$
x^2+y^2\le a^2,\qquad 0\le z\le h,
$$

el volumen es

$$
\int_0^h\int_0^{2\pi}\int_0^a r\,dr\,d\theta\,dz
=
\pi a^2 h.
$$

### Ejemplo 4: paraboloide truncado

Considere

$$
0\le z\le 4-x^2-y^2.
$$

El dominio en cilindricas es

$$
0\le r\le 2,\qquad 0\le \theta\le 2\pi,\qquad 0\le z\le 4-r^2.
$$

Entonces el volumen es

$$
\int_0^{2\pi}\int_0^2\int_0^{4-r^2} r\,dz\,dr\,d\theta
=
\int_0^{2\pi}\int_0^2 (4-r^2)r\,dr\,d\theta
=
8\pi.
$$

## Coordenadas esfericas

Usamos la convencion

$$
x=\rho\sin\varphi\cos\theta,
\qquad
y=\rho\sin\varphi\sin\theta,
\qquad
z=\rho\cos\varphi,
$$

con

$$
\rho\ge 0,\qquad 0\le \theta\le 2\pi,\qquad 0\le \varphi\le \pi.
$$

El Jacobiano es

$$
\rho^2\sin\varphi.
$$

Por tanto

$$
dV=\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta.
$$

### Cuando convienen

Son la eleccion natural para esferas, cascaras esfericas y problemas con simetria radial.

### Ejemplo 5: volumen de la bola de radio $a$

La bola

$$
x^2+y^2+z^2\le a^2
$$

se describe por

$$
0\le \rho\le a,\qquad 0\le \varphi\le \pi,\qquad 0\le \theta\le 2\pi.
$$

Entonces

$$
\iiint_B 1\,dV
=
\int_0^{2\pi}\int_0^\pi\int_0^a \rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta.
$$

Calculando,

$$
\int_0^a \rho^2\,d\rho=\frac{a^3}{3},
\qquad
\int_0^\pi \sin\varphi\,d\varphi=2,
$$

luego

$$
\operatorname{Vol}(B)=\frac{4}{3}\pi a^3.
$$

### Ejemplo 6: integral radial

Calculemos

$$
\iiint_{x^2+y^2+z^2\le 1}(x^2+y^2+z^2)\,dV.
$$

En esfericas,

$$
x^2+y^2+z^2=\rho^2,
$$

por lo que la integral se vuelve

$$
\int_0^{2\pi}\int_0^\pi\int_0^1 \rho^2\cdot \rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta.
$$

Esto da

$$
2\pi\cdot 2\cdot \frac15=\frac{4\pi}{5}.
$$

## Simetria

Antes de integrar conviene preguntar:

- el dominio es simetrico?
- el integrando es impar respecto de alguna variable?
- existe una coordenada adaptada a la geometria?

Muchos calculos largos desaparecen usando simetria.

### Ejemplo 7

Si $E$ es simetrico respecto del plano $x=0$ y $f(x,y,z)=xg(x,y,z)$ con $g$ par en $x$, entonces

$$
\iiint_E f\,dV=0.
$$

## Comentario teorico

En el trasfondo de la integral triple estan las mismas ideas que en dos variables, pero amplificadas:

- descomponer el espacio en piezas simples;
- reconstruir la cantidad global por suma y limite;
- adaptar coordenadas al problema.

Este ultimo punto es decisivo. Las coordenadas cilindricas y esfericas no son meras formulas para memorizar: son aplicaciones del teorema general de cambio de variables.

## Errores frecuentes

- Elegir coordenadas cilindricas o esfericas sin traducir bien el dominio.
- Olvidar el Jacobiano $r$ o $\rho^2\sin\varphi$.
- Mezclar convenciones para el angulo polar.
- Integrar en un orden que no corresponde al dominio real.
- Pensar que el volumen siempre es "altura por area de base" sin mirar si la altura depende de otras variables.

## Conclusion

Las integrales triples convierten la geometria de solidos en calculo efectivo. Su dominio natural son las distribuciones espaciales y los problemas con simetria tridimensional. Con ellas quedan preparadas las herramientas para formular y entender el teorema de la divergencia, donde el paso de un volumen a su frontera se vuelve estructural.
