---
title: Rectas en el espacio
description: Ecuaciones vectoriales, parametricas y simetricas de rectas en R3, criterios de paralelismo, interseccion y posicion relativa.
---

# Rectas en el espacio

## Motivacion e intuicion

En el plano una recta queda determinada por una pendiente y un punto. En el espacio la situacion cambia: ya no basta una sola pendiente, porque la direccion de una recta en $\mathbb{R}^3$ requiere un vector completo.

Por eso las rectas en el espacio se describen de manera natural mediante:

- un punto por el que pasan;
- un vector direccion;
- una parametrizacion.

Este lenguaje vectorial es el correcto para todo el bloque de calculo vectorial, porque conecta de manera directa con curvas parametrizadas, campos vectoriales y movimiento en $R^3$.

## Prerrequisitos

Conviene manejar:

- vectores en $\mathbb{R}^2$ y $\mathbb{R}^3$;
- producto punto;
- sistemas lineales elementales;
- ecuaciones parametricas basicas.

## Descripcion vectorial de una recta

Sea $P_0=(x_0,y_0,z_0)$ un punto fijo y sea

$$
v=(a,b,c)\ne 0
$$

un vector.

La recta que pasa por $P_0$ con direccion $v$ se define por

$$
r(t)=P_0+t\,v,
\qquad
t\in \mathbb{R}.
$$

## Ecuacion vectorial

Escribiendo coordenadas,

$$
r(t)=(x_0,y_0,z_0)+t(a,b,c).
$$

Esta es la forma mas compacta y conceptual.

## Ecuaciones parametricas

De la ecuacion vectorial se obtiene

$$
\begin{cases}
x=x_0+at,\\
y=y_0+bt,\\
z=z_0+ct.
\end{cases}
$$

Estas son las ecuaciones parametricas de la recta.

## Ecuacion simetrica

Si $a,b,c$ son no nulos, puede eliminarse el parametro:

$$
\frac{x-x_0}{a}=
\frac{y-y_0}{b}=
\frac{z-z_0}{c}.
$$

### Advertencia

La forma simetrica no debe usarse de manera ciega cuando algun componente del vector direccion es cero. Por ejemplo, si $a=0$, entonces la coordenada $x$ queda fija:

$$
x=x_0.
$$

## Interpretacion geometrica

Cada valor de $t$ produce un punto de la recta:

- $t=0$ recupera el punto inicial $P_0$;
- $t>0$ avanza en la direccion de $v$;
- $t<0$ avanza en la direccion opuesta.

El parametro no es unico. Si se reemplaza $t$ por una transformacion afina

$$
t=\alpha s+\beta,
\qquad
\alpha\ne 0,
$$

se obtiene la misma recta con otra parametrizacion.

## Unicidad determinada por dos puntos

### Teorema 1

Dados dos puntos distintos

$$
P_0=(x_0,y_0,z_0),
\qquad
P_1=(x_1,y_1,z_1),
$$

existe una unica recta que pasa por ambos.

#### Demostracion

El vector

$$
v=P_1-P_0=(x_1-x_0,\ y_1-y_0,\ z_1-z_0)
$$

es no nulo porque los puntos son distintos. La recta

$$
r(t)=P_0+t(P_1-P_0)
$$

pasa por $P_0$ cuando $t=0$ y por $P_1$ cuando $t=1$.

Si otra recta pasa por ambos puntos, debe contener el desplazamiento $P_1-P_0$ y por tanto coincide con la anterior.

### Consecuencia

Una recta puede construirse con:

- un punto y un vector direccion no nulo;
- dos puntos distintos.

## Vectores directores equivalentes

Dos vectores

$$
v,\ w
$$

describen la misma direccion si son proporcionales:

$$
w=\lambda v,
\qquad
\lambda\ne 0.
$$

### Proposicion 2

Las rectas

$$
r(t)=P_0+t v,
\qquad
s(u)=P_0+u w
$$

coinciden si y solo si $w$ es proporcional a $v$.

#### Demostracion

Si

$$
w=\lambda v,
\qquad
\lambda\ne 0,
$$

entonces

$$
s(u)=P_0+u\lambda v=r(\lambda u),
$$

luego ambas parametrizaciones recorren los mismos puntos.

Reciprocamente, si las rectas coinciden y ambas pasan por $P_0$, sus vectores direccion deben estar sobre la misma direccion geometrica, asi que uno es multiplo escalar del otro.

## Posicion relativa de dos rectas

Sean

$$
r(t)=P+t v,
\qquad
s(u)=Q+u w.
$$

En $\mathbb{R}^3$ pueden ocurrir cuatro casos:

1. coincidentes;
2. paralelas distintas;
3. secantes;
4. reversas o alabeadas.

## Paralelismo

### Proposicion 3

Dos rectas son paralelas si y solo si sus vectores direccion son proporcionales.

#### Demostracion

La direccion geometrica de una recta esta completamente determinada por cualquier vector director no nulo. Compartir direccion equivale a ser paralelas, y eso ocurre exactamente cuando los vectores son proporcionales.

### Comentario

El paralelismo no implica coincidencia. Para decidir si dos rectas paralelas son la misma, hay que verificar ademas que comparten algun punto.

## Interseccion

Dos rectas se intersectan si existe un par $(t,u)$ tal que

$$
P+t v = Q+u w.
$$

Esto produce un sistema lineal en los parametros.

### Metodo practico

Se igualan coordenadas:

$$
\begin{cases}
x_P+a t = x_Q+\alpha u,\\
y_P+b t = y_Q+\beta u,\\
z_P+c t = z_Q+\gamma u.
\end{cases}
$$

Si el sistema tiene solucion compatible, la interseccion existe. Si no, las rectas no se cortan.

## Rectas reversas

Dos rectas son **reversas** si no son paralelas y no se intersectan.

### Ejemplo conceptual

En el espacio, una recta puede "pasar por encima" de otra sin cortarla. Esto no puede ocurrir en el plano, pero si en $\mathbb{R}^3$.

## Coplanaridad de dos rectas

Dos rectas son coplanares si existe un plano que contiene a ambas.

### Criterio vectorial

Las rectas

$$
r(t)=P+t v,
\qquad
s(u)=Q+u w
$$

son coplanares si y solo si

$$
(Q-P)\cdot (v\times w)=0.
$$

### Justificacion

El producto mixto

$$
(Q-P)\cdot (v\times w)
$$

mide el volumen orientado del paralelepipedo generado por

$$
Q-P,\ v,\ w.
$$

Ese volumen es cero exactamente cuando los tres vectores son coplanares.

### Corolario

Si dos rectas no son paralelas y el producto mixto es no nulo, entonces son reversas.

## Angulo entre rectas

El angulo entre dos rectas se define como el angulo agudo entre sus vectores direccion.

Si $v$ y $w$ son vectores directores, entonces

$$
\cos\theta=
\frac{|v\cdot w|}{\|v\|\,\|w\|},
\qquad
0\le \theta \le \frac{\pi}{2}.
$$

### Comentario

Se usa valor absoluto para obtener el angulo geometrico minimo entre ambas direcciones.

## Ejemplos trabajados

### Ejemplo 1: recta por dos puntos

Sean

$$
P_0=(1,-2,0),
\qquad
P_1=(4,1,6).
$$

Entonces

$$
v=P_1-P_0=(3,3,6)=3(1,1,2).
$$

Una ecuacion vectorial de la recta es

$$
r(t)=(1,-2,0)+t(1,1,2).
$$

Las ecuaciones parametricas son

$$
\begin{cases}
x=1+t,\\
y=-2+t,\\
z=2t.
\end{cases}
$$

Y la forma simetrica es

$$
\frac{x-1}{1}=
\frac{y+2}{1}=
\frac{z}{2}.
$$

### Ejemplo 2: interseccion de dos rectas

Consideremos

$$
r(t)=(1,0,2)+t(1,2,-1),
$$

$$
s(u)=(3,4,0)+u(-1,-2,1).
$$

Como

$$
(-1,-2,1)=-1(1,2,-1),
$$

las rectas son paralelas. Para saber si coinciden, probamos si el vector que une los puntos base es proporcional al vector direccion:

$$
Q-P=(2,4,-2)=2(1,2,-1).
$$

Luego $Q$ pertenece a $r$, asi que ambas rectas coinciden.

### Ejemplo 3: rectas reversas

Sean

$$
r(t)=(0,0,0)+t(1,0,0),
$$

$$
s(u)=(0,1,1)+u(0,1,0).
$$

No son paralelas porque sus vectores direccion no son proporcionales.

Para ver si se cortan, igualamos coordenadas:

$$
(t,0,0)=(0,1+u,1).
$$

La tercera coordenada exige

$$
0=1,
$$

lo cual es imposible. Por tanto son reversas.

## Errores comunes

- Usar la forma simetrica cuando algun componente director es cero sin adaptar la ecuacion.
- Confundir rectas paralelas con rectas coincidentes.
- Resolver mal el sistema de interseccion porque se igualan puntos pero no parametros.
- Suponer que dos rectas no paralelas en $\mathbb{R}^3$ siempre se intersectan.
- Olvidar que el angulo entre rectas se toma como angulo entre vectores directores.

## Ejercicios propuestos

1. Hallar la recta que pasa por $(1,2,3)$ y $(4,-1,5)$.
2. Escribir en forma parametricas y simetrica una recta con punto base y vector direccion dados.
3. Determinar si dos rectas dadas son paralelas, coincidentes, secantes o reversas.
4. Calcular el angulo entre dos rectas a partir de sus vectores directores.
5. Probar el criterio de coplanaridad con producto mixto.

## Cierre

Las rectas en el espacio son el primer objeto verdaderamente vectorial del bloque. Entender sus distintas formas de ecuacion y sus criterios de posicion relativa es la base para planos, distancias, proyecciones, curvas parametrizadas y geometria diferencial elemental.
