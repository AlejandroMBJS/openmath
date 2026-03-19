---
title: Coordenadas esfericas
description: Definicion, conversion, superficies coordenadas y jacobiano de las coordenadas esfericas en R3.
---

# Coordenadas esfericas

## Motivacion e intuicion

Cuando un problema tiene simetria radial respecto del origen, las coordenadas esfericas son mucho mas naturales que las cartesianas. En lugar de describir un punto por sus proyecciones sobre los ejes, lo describen por:

- su distancia al origen;
- su direccion angular.

## Convencion adoptada

Usaremos la convencion matematica:

$$
(\rho,\theta,\varphi),
$$

donde:

- $\rho\ge 0$ es la distancia al origen;
- $\theta$ es el angulo azimutal en el plano $xy$;
- $\varphi$ es el angulo medido desde el eje positivo $z$.

### Advertencia

En fisica es frecuente intercambiar los nombres de $\theta$ y $\varphi$. Aqui se fija esta convencion y se mantendra constante.

## Transformacion a cartesianas

Las formulas son

$$
x=\rho\sin\varphi\cos\theta,
$$

$$
y=\rho\sin\varphi\sin\theta,
$$

$$
z=\rho\cos\varphi.
$$

## Rango tipico de coordenadas

Tomamos

$$
\rho\ge 0,
\qquad
0\le \theta <2\pi,
\qquad
0\le \varphi \le \pi.
$$

## Transformacion inversa

Partiendo de

$$
(x,y,z),
$$

se tiene

$$
\rho=\sqrt{x^2+y^2+z^2},
$$

$$
\theta=\operatorname{arg}(x+iy),
$$

y, si $\rho\ne 0$,

$$
\cos\varphi=\frac{z}{\rho},
\qquad
\varphi=\arccos\left(\frac{z}{\rho}\right).
$$

## Geometria de las superficies coordenadas

### Superficies $\rho=c$

Si

$$
\rho=c>0,
$$

se obtiene la esfera de radio $c$ centrada en el origen:

$$
x^2+y^2+z^2=c^2.
$$

### Superficies $\theta=c$

Son semiplanos verticales que contienen al eje $z$.

### Superficies $\varphi=c$

Son conos circulares con vertice en el origen y eje sobre el eje $z$.

## Curvas coordenadas

Si se fijan dos coordenadas y se deja libre la tercera:

- $\rho$ variable produce una semirrecta desde el origen;
- $\theta$ variable con $\rho,\varphi$ fijos produce una circunferencia horizontal sobre una esfera;
- $\varphi$ variable con $\rho,\theta$ fijos produce un meridiano sobre una esfera.

## Relacion con coordenadas cilindricas

Dado que

$$
r=\sqrt{x^2+y^2},
$$

en esfericas se tiene

$$
r=\rho\sin\varphi,
\qquad
z=\rho\cos\varphi.
$$

Por tanto la relacion con cilindricas es

$$
(\rho_{cil},\theta,z)=
(\rho\sin\varphi,\theta,\rho\cos\varphi).
$$

## Jacobiano y elemento de volumen

La transformacion esferica tiene jacobiano

$$
\left|
\frac{\partial(x,y,z)}{\partial(\rho,\theta,\varphi)}
\right|
=
\rho^2\sin\varphi.
$$

### Consecuencia

El elemento de volumen en coordenadas esfericas es

$$
dV=\rho^2\sin\varphi\,d\rho\,d\theta\,d\varphi.
$$

## Derivacion del jacobiano

La matriz jacobiana es

$$
\begin{pmatrix}
\sin\varphi\cos\theta & -\rho\sin\varphi\sin\theta & \rho\cos\varphi\cos\theta\\
\sin\varphi\sin\theta & \rho\sin\varphi\cos\theta & \rho\cos\varphi\sin\theta\\
\cos\varphi & 0 & -\rho\sin\varphi
\end{pmatrix}.
$$

Su determinante simplifica a

$$
\rho^2\sin\varphi.
$$

## Ejemplos geometricos

### Ejemplo 1: esfera

La superficie

$$
x^2+y^2+z^2=9
$$

se escribe simplemente como

$$
\rho=3.
$$

### Ejemplo 2: cono

El cono

$$
z=\sqrt{x^2+y^2}
$$

en esfericas satisface

$$
\rho\cos\varphi=\rho\sin\varphi.
$$

Si $\rho\ne 0$,

$$
\tan\varphi=1,
\qquad
\varphi=\frac{\pi}{4}.
$$

### Ejemplo 3: semiesfera superior

La region

$$
x^2+y^2+z^2\le a^2,
\qquad
z\ge 0
$$

se describe como

$$
0\le \rho \le a,
\qquad
0\le \theta <2\pi,
\qquad
0\le \varphi \le \frac{\pi}{2}.
$$

## Conversion de puntos

### Ejemplo 4

Convertir

$$
(\rho,\theta,\varphi)=\left(2,\frac{\pi}{6},\frac{\pi}{3}\right)
$$

a cartesianas.

Aplicamos las formulas:

$$
x=2\sin\frac{\pi}{3}\cos\frac{\pi}{6}
=2\cdot \frac{\sqrt{3}}{2}\cdot \frac{\sqrt{3}}{2}
=\frac{3}{2},
$$

$$
y=2\sin\frac{\pi}{3}\sin\frac{\pi}{6}
=2\cdot \frac{\sqrt{3}}{2}\cdot \frac12
=\frac{\sqrt{3}}{2},
$$

$$
z=2\cos\frac{\pi}{3}=1.
$$

### Ejemplo 5

Convertir

$$
(x,y,z)=(0,0,5)
$$

a esfericas.

Se tiene

$$
\rho=5.
$$

Como el punto esta sobre el eje positivo $z$,

$$
\varphi=0.
$$

El angulo $\theta$ queda indeterminado, pues cualquier semiplano vertical contiene al punto. Esta no unicidad es normal en el eje.

## Ventajas del sistema

Las coordenadas esfericas son especialmente adecuadas para:

- esferas y cascarones esfericos;
- campos centrales;
- potenciales dependientes solo de la distancia al origen;
- integrales triples con simetria radial.

## Errores comunes

- Confundir $\rho$ esferica con $\rho$ cilindrica.
- Intercambiar las convenciones de $\theta$ y $\varphi$ sin avisar.
- Olvidar el factor

$$
\rho^2\sin\varphi
$$

en el jacobiano.
- Suponer unicidad de las coordenadas sobre el eje $z$ o en el origen.
- Interpretar mal las superficies $\varphi=c$, que son conos y no planos.

## Ejercicios propuestos

1. Convertir puntos entre cartesianas y esfericas.
2. Reescribir esferas, conos y semiesferas en esfericas.
3. Derivar el jacobiano de la transformacion.
4. Comparar coordenadas esfericas y cilindricas para una misma superficie.
5. Explicar geometricamente la no unicidad angular en el origen y sobre el eje $z$.

## Cierre

Las coordenadas esfericas completan el primer repertorio de cambios de coordenadas del bloque. Son indispensables para integrar sobre regiones con simetria radial y para formular con claridad buena parte de la fisica matematica y la geometria en $R^3$.
