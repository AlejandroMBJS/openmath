---
title: Teorema de la divergencia, Gauss-Ostrogradski
description: Divergencia de un campo, flujo a traves de superficies cerradas y relacion con la integral triple del interior.
---

# Teorema de la divergencia, Gauss-Ostrogradski

## Motivacion

El teorema de la divergencia relaciona un flujo global a traves de la frontera de un volumen con la suma de fuentes y sumideros dentro del volumen.

Es una de las identidades mas importantes de toda la fisica matematica. Aparece en:

- electromagnetismo;
- mecanica de fluidos;
- ecuaciones de continuidad;
- teoria del potencial;
- formulaciones conservativas de ecuaciones diferenciales parciales.

## Divergencia

Sea

$$
F(x,y,z)=\langle P(x,y,z),Q(x,y,z),R(x,y,z)\rangle.
$$

La divergencia de $F$ se define por

$$
\nabla\cdot F
=
\frac{\partial P}{\partial x}
+
\frac{\partial Q}{\partial y}
+
\frac{\partial R}{\partial z}.
$$

### Interpretacion

La divergencia mide la tasa local de expansion neta del campo:

- positiva: comportamiento de fuente;
- negativa: comportamiento de sumidero;
- nula: no hay produccion neta local.

En un fluido incompresible, por ejemplo, la divergencia de la velocidad es cero.

## Flujo sobre una superficie cerrada

Sea $S$ una superficie cerrada y orientada exteriormente, frontera de un solido $E$.

El flujo saliente de $F$ a traves de $S$ es

$$
\iint_S F\cdot n\,dS,
$$

donde $n$ es la normal exterior unitaria.

## Enunciado del teorema

### Teorema 1: Gauss-Ostrogradski

Sea $E\subseteq \mathbb{R}^3$ un solido compacto con frontera $S=\partial E$ suave a trozos y orientada hacia afuera. Si

$$
F\in C^1
$$

en un abierto que contiene a $E$, entonces

$$
\iint_S F\cdot n\,dS
=
\iiint_E \nabla\cdot F\,dV.
$$

## Interpretacion geometrica

El miembro izquierdo es flujo total saliente por la frontera. El miembro derecho suma, punto por punto en el interior, la produccion infinitesimal neta del campo.

La identidad afirma:

> flujo total saliente = suma de fuentes interiores.

## Idea de la demostracion

La prueba conceptual se entiende primero en una caja rectangular.

### Paso 1: una caja

Si

$$
E=[a,b]\times[c,d]\times[\alpha,\beta],
$$

el flujo asociado a la componente

$$
P
$$

sobre las caras perpendiculares al eje $x$ es

$$
\int_c^d\int_\alpha^\beta P(b,y,z)\,dy\,dz
-
\int_c^d\int_\alpha^\beta P(a,y,z)\,dy\,dz.
$$

Por el teorema fundamental del calculo,

$$
P(b,y,z)-P(a,y,z)=\int_a^b P_x(x,y,z)\,dx.
$$

Integrando en $y$ y $z$, aparece

$$
\iiint_E P_x\,dV.
$$

Repitiendo el argumento para $Q$ y $R$ y sumando, se obtiene el resultado en la caja.

### Paso 2: particionar un solido general

Se aproxima o descompone el solido en subvolumenes. Los flujos a traves de fronteras interiores se cancelan por orientacion opuesta, y solo sobrevive el flujo exterior. Ese mecanismo de cancelacion es la esencia geometrica del teorema.

## Ejemplo 1: campo radial lineal sobre una esfera

Sea

$$
F(x,y,z)=\langle x,y,z\rangle
$$

y sea $S$ la esfera de radio $a$ que encierra la bola

$$
B_a.
$$

Tenemos

$$
\nabla\cdot F=1+1+1=3.
$$

Por Gauss,

$$
\iint_S F\cdot n\,dS
=
\iiint_{B_a} 3\,dV
=
3\cdot \frac{4}{3}\pi a^3
=
4\pi a^3.
$$

Este coincide con el calculo directo del flujo hecho en la pagina de integrales de superficie.

## Ejemplo 2: campo de divergencia nula

Sea

$$
F(x,y,z)=\langle -y,x,0\rangle.
$$

Entonces

$$
\nabla\cdot F=0.
$$

Por tanto, para toda superficie cerrada suave $S$ contenida en el dominio,

$$
\iint_S F\cdot n\,dS=0.
$$

Esto no significa que el campo sea cero, sino que no produce flujo neto saliente total.

## Ejemplo 3: flujo sobre un cubo

Sea

$$
F(x,y,z)=\langle x^2,y^2,z^2\rangle
$$

y sea $E=[0,1]^3$.

Entonces

$$
\nabla\cdot F=2x+2y+2z.
$$

Por Gauss,

$$
\iint_{\partial E} F\cdot n\,dS
=
\iiint_E (2x+2y+2z)\,dV.
$$

Como

$$
\iiint_E 2x\,dV=1,
\qquad
\iiint_E 2y\,dV=1,
\qquad
\iiint_E 2z\,dV=1,
$$

el flujo total es

$$
3.
$$

## Campos singulares y limites de aplicacion

Las hipotesis del teorema importan de verdad.

### Ejemplo 4: campo de Coulomb

Considere

$$
F(x,y,z)=\frac{1}{(x^2+y^2+z^2)^{3/2}}\langle x,y,z\rangle.
$$

En todo punto distinto del origen,

$$
\nabla\cdot F=0.
$$

Sin embargo, el flujo sobre cualquier esfera centrada en el origen es

$$
4\pi.
$$

No hay contradiccion con Gauss porque el campo no es $C^1$ en una vecindad del volumen que contiene al origen. Este ejemplo es central en electrostatica y anticipa el papel de distribuciones como la delta de Dirac.

## Consecuencias fisicas

### 1. Ley de conservacion

Si una magnitud tiene densidad $\rho$ y flujo $F$, una ecuacion de continuidad suele escribirse como

$$
\frac{\partial \rho}{\partial t}+\nabla\cdot F=0.
$$

Integrando sobre un volumen y aplicando Gauss, se traduce una ley local en una ley global sobre la frontera.

### 2. Fluidos incompresibles

Si

$$
\nabla\cdot v=0,
$$

el flujo neto de velocidad a traves de toda superficie cerrada es cero.

### 3. Electromagnetismo

La ley de Gauss para el campo electrico relaciona el flujo a traves de una superficie cerrada con la carga total encerrada.

## Relacion con Green

La forma de flujo del teorema de Green es el analog planar de Gauss. En ambos casos:

- la integral de frontera mide flujo;
- el interior aporta la divergencia.

La diferencia es dimensional:

- en el plano, frontera de una region es una curva;
- en el espacio, frontera de un volumen es una superficie.

## Superficies por partes

Si la frontera de un solido se compone de varias piezas

$$
S=S_1\cup \cdots\cup S_m,
$$

entonces

$$
\iint_S F\cdot n\,dS
=
\sum_{j=1}^m \iint_{S_j} F\cdot n\,dS.
$$

Esto es util cuando el flujo directo se calcula cara por cara o cuando se comparan superficies cerradas compuestas.

## Independencia respecto de la superficie cerrada

Si dos superficies cerradas encierran el mismo volumen y entre ellas el campo tiene divergencia nula, el flujo total a traves de ambas coincide. Esta idea aparece constantemente al deformar superficies de integracion.

## Comentario avanzado

En el lenguaje moderno, el teorema de la divergencia es la version tridimensional de

$$
\int_{\partial E}\omega=\int_E d\omega
$$

para una 2-forma asociada al campo. En variedades riemannianas aparecen versiones con densidades y formas de volumen. Pero la estructura esencial ya es visible aqui: frontera, orientacion y derivada interior.

## Errores frecuentes

- Usar la normal interior en lugar de la exterior.
- Aplicar el teorema a campos con singularidades dentro del volumen.
- Confundir flujo con circulacion.
- Integrar la divergencia sobre una superficie en vez de sobre un volumen.
- Olvidar que el teorema requiere una superficie cerrada.

## Conclusion

Gauss-Ostrogradski traduce una informacion local del campo, su divergencia, en flujo global a traves de la frontera. Es el paradigma de todos los principios de conservacion del calculo vectorial y una de las puertas directas hacia las ecuaciones diferenciales parciales de la fisica.
