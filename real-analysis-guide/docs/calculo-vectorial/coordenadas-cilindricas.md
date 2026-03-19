---
title: Coordenadas cilindricas
description: Definicion, conversion, superficies coordenadas, no unicidad y elemento de volumen en coordenadas cilindricas.
---

# Coordenadas cilindricas

## Motivacion e intuicion

Las coordenadas cartesianas no siempre respetan la simetria geometrica del problema. Cuando una situacion tiene simetria de rotacion alrededor de un eje, las coordenadas cilindricas suelen ser mas naturales que

$$
(x,y,z).
$$

Son, en esencia, coordenadas polares en el plano

$$
xy
$$

acompanadas por la altura $z$.

## Definicion

Las coordenadas cilindricas de un punto son

$$
(\rho,\theta,z),
$$

donde:

- $\rho$ es la distancia al eje $z$;
- $\theta$ es el angulo polar en el plano $xy$;
- $z$ es la misma coordenada vertical cartesiana.

## Transformacion a coordenadas cartesianas

La relacion con

$$
(x,y,z)
$$

es

$$
x=\rho\cos\theta,
\qquad
y=\rho\sin\theta,
\qquad
z=z.
$$

## Transformacion inversa

Si se conoce un punto cartesiano,

$$
\rho=\sqrt{x^2+y^2},
$$

y, cuando $(x,y)\ne (0,0)$,

$$
\theta=\operatorname{arg}(x+iy)
$$

con el cuadrante correcto.

La coordenada vertical permanece igual:

$$
z=z.
$$

## Dominio de las coordenadas

Usualmente se toma

$$
\rho\ge 0,
\qquad
0\le \theta <2\pi,
\qquad
z\in \mathbb{R}.
$$

### Observacion

En el eje $z$, donde

$$
\rho=0,
$$

el angulo $\theta$ no esta determinado de manera unica.

## Geometria de las superficies coordenadas

### Superficies $\rho=c$

Si

$$
\rho=c>0,
$$

entonces

$$
x^2+y^2=c^2,
$$

que describe un cilindro circular de radio $c$ alrededor del eje $z$.

### Superficies $\theta=c$

Si

$$
\theta=c,
$$

entonces se obtiene un semiplano vertical que contiene al eje $z$.

### Superficies $z=c$

Son planos horizontales.

## Curvas coordenadas

Si fijamos dos coordenadas y dejamos libre la otra:

- $\rho$ variable con $\theta,z$ fijas produce una semirrecta horizontal;
- $\theta$ variable con $\rho,z$ fijas produce una circunferencia horizontal;
- $z$ variable con $\rho,\theta$ fijas produce una recta vertical.

## Relacion con coordenadas polares

Las coordenadas cilindricas no son mas que

$$
(\rho,\theta)
$$

en el plano, mas la coordenada $z$. Toda intuicion de coordenadas polares debe arrastrarse al espacio con esta interpretacion.

## Elemento diferencial y jacobiano

La transformacion

$$
(\rho,\theta,z)\mapsto (x,y,z)
$$

tiene jacobiano

$$
\left|
\frac{\partial(x,y,z)}{\partial(\rho,\theta,z)}
\right|
=
\rho.
$$

### Consecuencia

El elemento de volumen es

$$
dV=\rho\,d\rho\,d\theta\,dz.
$$

Este factor $\rho$ es uno de los puntos mas importantes del cambio de coordenadas.

## Derivacion del jacobiano

La matriz jacobiana es

$$
\begin{pmatrix}
\cos\theta & -\rho\sin\theta & 0\\
\sin\theta & \rho\cos\theta & 0\\
0 & 0 & 1
\end{pmatrix}.
$$

Su determinante es

$$
\rho(\cos^2\theta+\sin^2\theta)=\rho.
$$

## Ejemplos geometricos

### Ejemplo 1: cilindro

La superficie

$$
x^2+y^2=4
$$

en coordenadas cilindricas se escribe simplemente como

$$
\rho=2.
$$

### Ejemplo 2: cono circular

La superficie

$$
z=\sqrt{x^2+y^2}
$$

se convierte en

$$
z=\rho.
$$

### Ejemplo 3: paraboloide

La superficie

$$
z=x^2+y^2
$$

se escribe como

$$
z=\rho^2.
$$

## Conversion de puntos

### Ejemplo 4

Convertir

$$
(\rho,\theta,z)=\left(2,\frac{\pi}{3},-1\right)
$$

a cartesianas.

Se tiene

$$
x=2\cos\frac{\pi}{3}=1,
\qquad
y=2\sin\frac{\pi}{3}=\sqrt{3},
\qquad
z=-1.
$$

Por tanto el punto es

$$
(1,\sqrt{3},-1).
$$

### Ejemplo 5

Convertir

$$
(x,y,z)=(-1,\sqrt{3},4)
$$

a cilindricas.

Primero,

$$
\rho=\sqrt{(-1)^2+(\sqrt{3})^2}=2.
$$

El angulo correspondiente esta en el segundo cuadrante y satisface

$$
\cos\theta=-\frac12,
\qquad
\sin\theta=\frac{\sqrt{3}}{2},
$$

por lo que

$$
\theta=\frac{2\pi}{3}.
$$

Asi,

$$
(\rho,\theta,z)=\left(2,\frac{2\pi}{3},4\right).
$$

## Ventajas del sistema

Las coordenadas cilindricas son especialmente utiles cuando aparecen:

- cilindros;
- simetria axial;
- integrales sobre regiones circulares o anulares;
- problemas de flujo o potencial alrededor de un eje.

## Errores comunes

- Confundir $\rho$ con la distancia al origen; en cilindricas es la distancia al eje $z$.
- Olvidar el factor $\rho$ en integrales triples.
- Elegir mal el cuadrante de $\theta$ al convertir desde cartesianas.
- Pensar que $\theta$ esta definido de manera unica sobre el eje $z$.

## Ejercicios propuestos

1. Convertir varios puntos entre cartesianas y cilindricas.
2. Reescribir superficies cuadraticas simples en coordenadas cilindricas.
3. Derivar el jacobiano directamente.
4. Describir geometricamente las superficies $\rho=c$, $\theta=c$ y $z=c$.
5. Explicar por que las coordenadas cilindricas son naturales para un cilindro circular recto.

## Cierre

Las coordenadas cilindricas son el primer cambio serio de sistema del bloque. No son una notacion exotica: son una forma de adaptar el lenguaje matematico a la simetria del problema. Esa idea sera central mas adelante en integrales dobles, triples y ecuaciones diferenciales parciales.
