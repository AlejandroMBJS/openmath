---
title: Derivada direccional y gradiente
description: Derivada direccional, diferenciabilidad, gradiente, planos tangentes y significado geometrico del maximo crecimiento.
---

# Derivada direccional y gradiente

## Motivacion

Las derivadas parciales exploran solo las direcciones coordenadas. Pero en el plano o en el espacio podemos movernos en cualquier direccion.

La pregunta correcta es entonces:

si nos desplazamos desde un punto siguiendo un vector dado, cual es la razon instantanea de cambio de la funcion?

Esa pregunta conduce a la derivada direccional. Cuando la funcion es diferenciable, todas esas derivadas se organizan en un solo objeto: el gradiente.

## Derivada direccional

Sea

$$
f:U\subseteq \mathbb{R}^n\to \mathbb{R},
$$

con $U$ abierto, y sea $u\in \mathbb{R}^n$ un vector unitario.

La derivada direccional de $f$ en $a\in U$ en la direccion $u$ se define por

$$
D_u f(a)=\lim_{h\to 0}\frac{f(a+hu)-f(a)}{h},
$$

si el limite existe.

### Observacion

La condicion

$$
\|u\|=1
$$

no es esencial, pero evita factores escalares innecesarios. Si $v\ne 0$, entonces

$$
D_v f(a)=\|v\|\,D_{v/\|v\|}f(a)
$$

cuando ambas expresiones tengan sentido.

## Relacion con derivadas parciales

Tomando los vectores canonicos

$$
e_1,\dots,e_n,
$$

se obtiene

$$
D_{e_j}f(a)=\frac{\partial f}{\partial x_j}(a).
$$

Por tanto, las derivadas parciales son casos particulares de derivadas direccionales.

## Diferenciabilidad

La nocion central no es la existencia aislada de derivadas direccionales, sino la existencia de una **aproximacion lineal**.

Decimos que $f$ es diferenciable en $a$ si existe una aplicacion lineal

$$
L:\mathbb{R}^n\to \mathbb{R}
$$

tal que

$$
f(a+h)=f(a)+L(h)+o(\|h\|)
$$

cuando

$$
h\to 0.
$$

La aplicacion $L$ se llama diferencial de $f$ en $a$ y se denota

$$
Df(a).
$$

## El gradiente

Si $f$ es diferenciable en $a$, entonces

$$
Df(a)
$$

se representa mediante el producto escalar con un vector unico:

$$
Df(a)(h)=\nabla f(a)\cdot h.
$$

Ese vector

$$
\nabla f(a)=\left(
\frac{\partial f}{\partial x_1}(a),\dots,\frac{\partial f}{\partial x_n}(a)
\right)
$$

es el **gradiente** de $f$ en $a$.

## Formula para la derivada direccional

### Teorema 1

Si $f$ es diferenciable en $a$, entonces para todo vector unitario $u$,

$$
D_u f(a)=\nabla f(a)\cdot u.
$$

#### Demostracion

Por diferenciabilidad,

$$
f(a+hu)=f(a)+Df(a)(hu)+o(|h|).
$$

Dividiendo por $h$,

$$
\frac{f(a+hu)-f(a)}{h}=Df(a)(u)+\frac{o(|h|)}{h}.
$$

Al hacer

$$
h\to 0,
$$

el segundo termino tiende a cero y queda

$$
D_u f(a)=Df(a)(u)=\nabla f(a)\cdot u.
$$

## Interpretacion geometrica del gradiente

El gradiente apunta en la direccion de crecimiento mas rapido de la funcion.

### Teorema 2

Si $f$ es diferenciable en $a$ y

$$
\nabla f(a)\ne 0,
$$

entonces:

- el maximo valor de $D_u f(a)$ entre todos los vectores unitarios $u$ es

$$
\|\nabla f(a)\|;
$$

- ese maximo se alcanza cuando

$$
u=\frac{\nabla f(a)}{\|\nabla f(a)\|};
$$

- el minimo valor es

$$
-\|\nabla f(a)\|,
$$

y se alcanza en la direccion opuesta.

#### Demostracion

Por la formula anterior,

$$
D_u f(a)=\nabla f(a)\cdot u.
$$

Aplicando Cauchy-Schwarz,

$$
|\nabla f(a)\cdot u|
\le
\|\nabla f(a)\|\,\|u\|
=
\|\nabla f(a)\|.
$$

La igualdad ocurre exactamente cuando $u$ es paralelo a $\nabla f(a)$.

## Gradiente y conjuntos de nivel

Sea

$$
S=\{x\in \mathbb{R}^n:f(x)=c\}.
$$

Si $f$ es diferenciable y

$$
\nabla f(a)\ne 0,
$$

entonces el gradiente es ortogonal al conjunto de nivel en $a$.

### Justificacion intuitiva

Si uno se mueve tangencialmente dentro del nivel, el valor de $f$ no cambia a primer orden. Por tanto la derivada direccional tangencial debe ser cero, lo que fuerza ortogonalidad con el gradiente.

## Plano tangente al grafo

Si

$$
z=f(x,y)
$$

es diferenciable en $(a,b)$, el plano tangente al grafo en

$$
(a,b,f(a,b))
$$

es

$$
z-f(a,b)=f_x(a,b)(x-a)+f_y(a,b)(y-b).
$$

Esta formula es la expresion explicita de la aproximacion lineal.

## Ejemplos basicos

### Ejemplo 1

Sea

$$
f(x,y)=x^2+y^2.
$$

Entonces

$$
\nabla f(x,y)=(2x,2y).
$$

En el punto $(1,-2)$ se tiene

$$
\nabla f(1,-2)=(2,-4).
$$

Para

$$
u=\frac{1}{\sqrt{2}}(1,1),
$$

la derivada direccional vale

$$
D_u f(1,-2)=(2,-4)\cdot \frac{1}{\sqrt{2}}(1,1)=-\sqrt{2}.
$$

### Ejemplo 2

Sea

$$
f(x,y,z)=xyz.
$$

Entonces

$$
\nabla f=(yz,xz,xy).
$$

En $(1,2,-1)$,

$$
\nabla f(1,2,-1)=(-2,-1,2).
$$

## Ejemplo de plano tangente

Sea

$$
f(x,y)=x^2+xy+y^2.
$$

En $(1,1)$:

$$
f(1,1)=3,
$$

$$
f_x=2x+y,\qquad f_y=x+2y,
$$

luego

$$
f_x(1,1)=3,
\qquad
f_y(1,1)=3.
$$

El plano tangente es

$$
z-3=3(x-1)+3(y-1).
$$

## Existencia de direccionales no implica diferenciabilidad

La situacion puede ser enganosa.

### Ejemplo 3

Sea

$$
f(x,y)=|x|+|y|.
$$

En el origen existen derivadas direccionales en toda direccion:

$$
D_u f(0,0)=|u_1|+|u_2|.
$$

Pero esa expresion no es lineal en $u$, por lo que no puede venir de un producto escalar con un unico vector. En consecuencia, la funcion no es diferenciable en el origen.

Este ejemplo muestra que el gradiente solo organiza las direcciones cuando hay verdadera diferenciabilidad.

## Regla de la cadena y gradiente

Si

$$
\gamma:I\to \mathbb{R}^n
$$

es derivable y $f$ es diferenciable, entonces

$$
\frac{d}{dt}f(\gamma(t))
=
\nabla f(\gamma(t))\cdot \gamma'(t).
$$

Esta formula resume gran parte del calculo de trayectorias en campos escalares.

## Lectura fisica

Si $T(x,y,z)$ es una temperatura, entonces:

- $\nabla T$ apunta hacia el aumento mas rapido de la temperatura;
- un vector tangente a una superficie isotermica es ortogonal a $\nabla T$;
- la derivada direccional mide la tasa de cambio termica en la direccion elegida.

## Errores frecuentes

- Calcular derivadas parciales y asumir automaticamente diferenciabilidad.
- Usar la formula $D_u f=\nabla f\cdot u$ sin verificar diferenciabilidad.
- Confundir el gradiente con una direccion tangente al nivel; en realidad es normal al nivel.
- Olvidar normalizar la direccion cuando se habla de maxima razon de cambio.

## Conclusion

El gradiente concentra toda la informacion de primer orden de una funcion diferenciable. Con el se unifican derivadas parciales, direccionales, aproximacion lineal, planos tangentes y geometria de conjuntos de nivel. Esa centralidad explica por que el gradiente reaparece en optimizacion, ecuaciones diferenciales, fisica matematica y geometria diferencial.
