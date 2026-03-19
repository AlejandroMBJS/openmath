---
title: Teorema de Green
description: Forma de circulacion y de flujo del teorema de Green, hipotesis geometricas, ideas de demostracion y consecuencias para campos planos.
---

# Teorema de Green

## Motivacion

El teorema de Green es la primera gran identidad global del calculo vectorial. Relaciona:

- una integral de linea sobre la frontera de una region plana;
- una integral doble dentro de la region.

Geometricamente, expresa que la circulacion o el flujo sobre el borde se controla por derivadas del campo en el interior.

## Contexto geometrico

Sea $D\subseteq \mathbb{R}^2$ una region limitada cuya frontera $C=\partial D$ es una curva simple, cerrada y suave a trozos.

La orientacion positiva de $C$ es la orientacion antihoraria, es decir, aquella que deja la region a la izquierda cuando se recorre la curva.

## Forma de circulacion

Sea

$$
F(x,y)=\langle P(x,y),Q(x,y)\rangle
$$

con $P,Q$ de clase $C^1$ en un abierto que contiene a $D$.

### Teorema 1: Green en forma de circulacion

Entonces

$$
\oint_C P\,dx+Q\,dy
=
\iint_D \left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dA.
$$

### Interpretacion

El miembro izquierdo mide la circulacion tangencial total del campo sobre el borde. El miembro derecho integra la rotacion escalar local del campo dentro de la region.

## Forma de flujo

Tomando la normal exterior adecuada, el teorema puede escribirse tambien como

$$
\oint_C F\cdot n\,ds
=
\iint_D \nabla\cdot F\,dA.
$$

En coordenadas, si

$$
F=\langle P,Q\rangle,
$$

entonces

$$
\oint_C P\,dy-Q\,dx
=
\iint_D \left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}\right)dA.
$$

### Comentario

La forma de circulacion involucra la rotacion planar

$$
Q_x-P_y,
$$

mientras que la forma de flujo involucra la divergencia

$$
P_x+Q_y.
$$

Ambas son manifestaciones del mismo teorema.

## Idea de la demostracion

La prueba clasica se hace primero para regiones de tipo I o II.

### Caso tipo I

Si

$$
D=\{(x,y):a\le x\le b,\ \varphi_1(x)\le y\le \varphi_2(x)\},
$$

entonces la parte

$$
\oint_C P\,dx
$$

se analiza recorriendo la frontera superior e inferior. Aplicando el teorema fundamental del calculo a

$$
P_y,
$$

aparece la integral doble correspondiente.

### Caso tipo II

De manera analoga, la parte

$$
\oint_C Q\,dy
$$

produce la contribucion de

$$
Q_x.
$$

Sumando ambos efectos se obtiene Green. Para regiones generales se particiona el dominio en subregiones simples y se observa que las integrales sobre fronteras interiores se cancelan por orientaciones opuestas.

## Ejemplo 1: circulacion sobre la circunferencia unitaria

Sea

$$
F(x,y)=\langle -y,x\rangle.
$$

Tomemos $C$ como la circunferencia unitaria orientada positivamente y $D$ el disco unitario.

Aqui

$$
P=-y,\qquad Q=x,
$$

y por tanto

$$
Q_x-P_y=1-(-1)=2.
$$

Green da

$$
\oint_C (-y\,dx+x\,dy)
=
\iint_D 2\,dA
=
2\pi.
$$

Este coincide con el calculo directo hecho en la pagina de integrales de linea.

## Ejemplo 2: flujo radial en el plano

Sea

$$
F(x,y)=\langle x,y\rangle.
$$

Entonces

$$
\nabla\cdot F=1+1=2.
$$

Sobre la circunferencia unitaria, Green en forma de flujo da

$$
\oint_C F\cdot n\,ds
=
\iint_D 2\,dA
=
2\pi.
$$

Como el campo apunta radialmente hacia afuera, esto tiene una interpretacion inmediata como flujo saliente.

## Criterio de conservatividad en el plano

Si

$$
Q_x-P_y=0
$$

en una region simplemente conexa, entonces toda integral de linea cerrada es cero y el campo es conservativo.

### Justificacion

Por Green, para toda curva cerrada simple $C$ que encierre una region $D$ contenida en el dominio,

$$
\oint_C P\,dx+Q\,dy
=
\iint_D (Q_x-P_y)\,dA
=
0.
$$

En dominios simplemente conexos esto fuerza independencia del camino y existencia de potencial.

### Advertencia topologica

La condicion

$$
Q_x-P_y=0
$$

no basta en dominios con agujeros.

### Ejemplo 3

El campo

$$
F(x,y)=\left\langle -\frac{y}{x^2+y^2},\frac{x}{x^2+y^2}\right\rangle
$$

esta definido en

$$
\mathbb{R}^2\setminus\{(0,0)\}.
$$

En ese dominio se verifica

$$
Q_x-P_y=0,
$$

pero sobre la circunferencia unitaria

$$
\oint_C F\cdot dr=2\pi.
$$

La obstruccion no es diferencial sino topologica: el dominio no es simplemente conexo.

## Formula de area

Tomando

$$
P=-\frac{y}{2},\qquad Q=\frac{x}{2},
$$

se obtiene

$$
Q_x-P_y=1.
$$

Por Green,

$$
\operatorname{Area}(D)
=
\iint_D 1\,dA
=
\frac12\oint_C (x\,dy-y\,dx).
$$

Esta formula es extremadamente util para calcular areas a partir de parametrizaciones de la frontera.

### Ejemplo 4: area de la elipse

Parametricemos la elipse

$$
x=a\cos t,\qquad y=b\sin t,\qquad 0\le t\le 2\pi.
$$

Entonces

$$
dx=-a\sin t\,dt,
\qquad
dy=b\cos t\,dt.
$$

La formula de area da

$$
\frac12\int_0^{2\pi}\bigl(ab\cos^2 t+ab\sin^2 t\bigr)\,dt
=
\frac12\int_0^{2\pi}ab\,dt
=
\pi ab.
$$

## Interpretacion local-global

Green afirma que una cantidad global sobre la frontera puede leerse como suma de efectos locales en el interior.

En forma de circulacion:

- la frontera mide remolino total;
- el interior suma rotacion infinitesimal.

En forma de flujo:

- la frontera mide salida neta;
- el interior suma fuentes y sumideros.

## Relacion con otros teoremas

Green es un caso bidimensional de Stokes. Tambien puede verse como una version plana del teorema de la divergencia.

En una vision unificada:

- el teorema fundamental del calculo trata intervalos y sus extremos;
- Green trata regiones del plano y sus bordes;
- Gauss trata volumenes y sus superficies frontera;
- Stokes trata superficies y sus curvas frontera.

## Hipotesis y regularidad

En los cursos elementales suele suponerse que:

- $P$ y $Q$ son $C^1$;
- $D$ es una region limitada;
- $C$ es simple, cerrada y suave a trozos.

Existen versiones mas generales bajo hipotesis mas debiles, pero estas bastan para la teoria clasica.

## Ejemplo 5: calculo directo evitado por Green

Considere

$$
\oint_C (x^2-y^2)\,dx+(2xy+e^x)\,dy,
$$

donde $C$ es el borde del cuadrado

$$
[0,1]\times[0,1]
$$

orientado positivamente.

Tenemos

$$
P=x^2-y^2,\qquad Q=2xy+e^x.
$$

Entonces

$$
Q_x-P_y=(2y+e^x)-(-2y)=4y+e^x.
$$

Asi,

$$
\oint_C P\,dx+Q\,dy
=
\int_0^1\int_0^1 (4y+e^x)\,dy\,dx
=
2+(e-1)=e+1.
$$

El calculo directo lado por lado del cuadrado seria mucho mas largo.

## Comentario avanzado

En lenguaje de formas diferenciales, Green es la identidad

$$
\int_{\partial D}\omega=\int_D d\omega
$$

para una 1-forma en el plano. Esta formulacion revela por que el teorema es estable bajo cambio de coordenadas y por que sus analogos de dimension superior tienen exactamente la misma estructura.

## Errores frecuentes

- Orientar la frontera en sentido horario sin cambiar el signo.
- Confundir la forma de circulacion con la forma de flujo.
- Aplicar Green a curvas que no son fronteras de una region contenida en el dominio del campo.
- Olvidar los agujeros del dominio al deducir conservatividad.

## Conclusion

El teorema de Green inaugura la filosofia central del calculo vectorial: el comportamiento integrado en la frontera se explica por derivadas del campo en el interior. A partir de aqui, Gauss y Stokes se entienden no como resultados aislados, sino como ampliaciones dimensionales de una misma arquitectura matematica.
