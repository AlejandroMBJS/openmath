---
title: Teorema de Stokes
description: Rotacional, orientacion de superficies con borde y relacion entre la circulacion en la frontera y el flujo del rotacional.
---

# Teorema de Stokes

## Motivacion

El teorema de Stokes cierra la arquitectura clasica del calculo vectorial. Relaciona:

- una integral de linea sobre el borde de una superficie;
- una integral de superficie del rotacional del campo.

Es la version tridimensional madura del teorema de Green en forma de circulacion.

## Rotacional

Sea

$$
F(x,y,z)=\langle P,Q,R\rangle.
$$

Su rotacional se define por

$$
\nabla\times F
=
\left(
R_y-Q_z,\,
P_z-R_x,\,
Q_x-P_y
\right).
$$

### Interpretacion

El rotacional mide la tendencia local del campo a producir circulacion alrededor de un punto. No es una rotacion global del campo, sino una medida infinitesimal de remolino.

## Superficie con borde y orientacion

Sea $S$ una superficie suave orientada, con borde

$$
\partial S=C.
$$

La orientacion del borde no es arbitraria: debe ser compatible con la orientacion de la superficie. La regla practica es la regla de la mano derecha:

- el pulgar apunta en la direccion del normal elegido;
- los dedos indican la orientacion positiva del borde.

Sin esta compatibilidad, el signo del teorema falla.

## Enunciado del teorema

### Teorema 1: Stokes

Si $F\in C^1$ en un abierto que contiene a $S$, entonces

$$
\oint_{\partial S} F\cdot dr
=
\iint_S (\nabla\times F)\cdot n\,dS.
$$

Aqui:

- $n$ es la normal unitaria elegida en $S$;
- la orientacion de $\partial S$ es la inducida por $n$.

## Interpretacion geometrica

El miembro izquierdo mide la circulacion total del campo sobre la curva frontera. El miembro derecho suma la componente normal del rotacional sobre la superficie.

En otras palabras:

> circulacion en el borde = remolino interno total atravesando la superficie.

## Idea de la demostracion

La demostracion conceptual procede por reduccion local a Green:

1. se parametriza la superficie por cartas;
2. se transporta el campo al dominio parametrico del plano;
3. se aplica Green en cada parche;
4. se suman los parches y se cancelan las fronteras interiores.

Esa cancelacion interna es la misma idea estructural que ya aparecia en Green y Gauss.

## Green como caso particular de Stokes

Si la superficie es un dominio plano

$$
S=D\subseteq \{z=0\}
$$

orientado con normal

$$
n=\langle 0,0,1\rangle,
$$

y se toma

$$
F(x,y,z)=\langle P(x,y),Q(x,y),0\rangle,
$$

entonces

$$
\nabla\times F=\langle 0,0,Q_x-P_y\rangle.
$$

Stokes se reduce a

$$
\oint_{\partial D} P\,dx+Q\,dy
=
\iint_D (Q_x-P_y)\,dA,
$$

que es exactamente Green en forma de circulacion.

## Ejemplo 1: disco en el plano

Sea

$$
F(x,y,z)=\langle -y,x,0\rangle
$$

y sea $S$ el disco unitario en el plano $z=0$, orientado hacia arriba.

Entonces

$$
\nabla\times F=\langle 0,0,2\rangle.
$$

Por Stokes,

$$
\oint_{\partial S} F\cdot dr
=
\iint_S 2\,dS
=
2\pi.
$$

Esto coincide con el resultado ya obtenido por Green.

## Ejemplo 2: independencia de la superficie

Sea

$$
C
$$

la circunferencia

$$
x^2+y^2=1,\qquad z=0.
$$

Puede verse como borde de:

- el disco plano $z=0$;
- el paraboloide $z=1-x^2-y^2$ sobre el disco.

Si el campo es suave en la region comprendida entre ambas superficies, Stokes afirma que

$$
\iint_{S_1} (\nabla\times F)\cdot n\,dS
=
\iint_{S_2} (\nabla\times F)\cdot n\,dS,
$$

siempre que ambas orientaciones induzcan la misma orientacion sobre $C$.

Esta es una de las aplicaciones mas poderosas del teorema: sustituir una superficie dificil por otra con la misma frontera y calculo mas simple.

## Ejemplo 3: paraboloide

Tomemos

$$
F(x,y,z)=\langle -y,x,z\rangle
$$

y la superficie

$$
S:\ z=1-x^2-y^2,\qquad x^2+y^2\le 1,
$$

orientada hacia arriba.

Entonces

$$
\nabla\times F=\langle 0,0,2\rangle.
$$

Por tanto

$$
\iint_S (\nabla\times F)\cdot n\,dS
=
\iint_S 2n_3\,dS.
$$

En lugar de calcular directamente la integral de superficie, Stokes permite pasar a la curva borde

$$
C:\ x^2+y^2=1,\ z=0.
$$

Parametrizando

$$
r(t)=\langle \cos t,\sin t,0\rangle,
\qquad
0\le t\le 2\pi,
$$

obtenemos

$$
F(r(t))=\langle -\sin t,\cos t,0\rangle,
\qquad
r'(t)=\langle -\sin t,\cos t,0\rangle.
$$

Luego

$$
\oint_C F\cdot dr
=
\int_0^{2\pi}1\,dt
=
2\pi.
$$

Asi, la integral de superficie vale

$$
2\pi.
$$

## Consecuencia: campos irrotacionales y conservatividad

Si

$$
\nabla\times F=0
$$

en un dominio apropiado y suficientemente simple desde el punto de vista topologico, entonces la integral sobre toda curva cerrada es cero y el campo es conservativo.

### Advertencia topologica

Como en el caso de Green, la condicion diferencial

$$
\nabla\times F=0
$$

no basta en dominios con agujeros.

## Comentario sobre el borde vacio

Si $S$ es cerrada, entonces

$$
\partial S=\varnothing.
$$

Aplicando formalmente Stokes se obtiene

$$
\iint_S (\nabla\times F)\cdot n\,dS=0.
$$

Esto es coherente con Gauss aplicado al campo

$$
\nabla\times F,
$$

ya que siempre se cumple

$$
\nabla\cdot(\nabla\times F)=0.
$$

## Relacion con Gauss

Stokes y Gauss son complementarios:

- Stokes integra el rotacional sobre una superficie y lo relaciona con una curva frontera;
- Gauss integra la divergencia sobre un volumen y la relaciona con una superficie frontera.

Ambos expresan la misma filosofia local-global, pero con distintos operadores diferenciales y distintas dimensiones de frontera.

## Comentario avanzado

En notacion de formas diferenciales, Stokes es la formula general

$$
\int_{\partial M}\omega=\int_M d\omega.
$$

El teorema clasico de Green, el teorema fundamental del calculo, Gauss y el Stokes vectorial tridimensional aparecen como casos de esta identidad unica. Esa unificacion es uno de los motivos por los que Stokes ocupa un lugar tan central en geometria diferencial y fisica matematica.

## Hipotesis practicas

En un curso clasico basta suponer:

- $F\in C^1$ en un abierto que contiene la superficie;
- $S$ suave o suave a trozos;
- orientacion bien elegida;
- borde $\partial S$ suave a trozos.

## Errores frecuentes

- Escoger orientaciones incompatibles entre la superficie y su borde.
- Confundir rotacional con divergencia.
- Aplicar Stokes a una superficie cerrada esperando una integral de borde no nula.
- No aprovechar la libertad de cambiar de superficie con la misma frontera.

## Conclusion

El teorema de Stokes convierte remolino local en circulacion global. Con el se completa el cuadro clasico del calculo vectorial: derivadas locales del campo, integrales sobre objetos geometricos de distintas dimensiones y relaciones estructurales entre interior y frontera. A ese nivel, el bloque ya deja de ser una coleccion de tecnicas y pasa a mostrar una arquitectura matematica unificada.
