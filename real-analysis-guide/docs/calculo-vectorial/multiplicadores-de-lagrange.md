---
title: Multiplicadores de Lagrange
description: Extremos con restricciones, interpretacion geometrica del gradiente, varias restricciones y ejemplos completos de optimizacion.
---

# Multiplicadores de Lagrange

## Motivacion

En muchos problemas no se optimiza una funcion sobre todo el espacio, sino sobre una curva, una superficie o, mas generalmente, sobre un conjunto dado por ecuaciones.

Ejemplos tipicos:

- maximizar temperatura sobre una superficie;
- minimizar distancia bajo una restriccion geometrica;
- optimizar energia con masa fija;
- buscar extremos sobre esferas, elipsoides o planos.

La idea central de Lagrange es simple y profunda: en un extremo restringido regular, el gradiente de la funcion objetivo queda atrapado por los gradientes de las restricciones.

## El problema con una restriccion

Consideremos

$$
f:\mathbb{R}^n\to \mathbb{R}
$$

y la restriccion

$$
g(x)=c.
$$

Queremos extremar $f$ sobre el conjunto

$$
M=\{x\in \mathbb{R}^n:g(x)=c\}.
$$

## Geometria intuitiva

Si $a\in M$ es un extremo restringido y el conjunto $M$ es suave cerca de $a$, entonces cualquier vector tangente $v$ a $M$ en $a$ debe satisfacer

$$
D_v f(a)=0.
$$

Como

$$
D_v f(a)=\nabla f(a)\cdot v,
$$

eso significa que

$$
\nabla f(a)
$$

es ortogonal al espacio tangente de $M$.

Pero tambien

$$
\nabla g(a)
$$

es normal a la superficie de restriccion. Por tanto ambos vectores normales deben ser paralelos:

$$
\nabla f(a)=\lambda \nabla g(a).
$$

## Teorema de Lagrange con una restriccion

### Teorema 1

Sean $f,g\in C^1(U)$ con $U\subseteq \mathbb{R}^n$ abierto. Supongamos que $a\in U$ es un extremo local de $f$ sujeto a

$$
g(x)=c,
$$

y que

$$
\nabla g(a)\ne 0.
$$

Entonces existe

$$
\lambda\in \mathbb{R}
$$

tal que

$$
\nabla f(a)=\lambda \nabla g(a).
$$

### Comentario

La condicion

$$
\nabla g(a)\ne 0
$$

garantiza regularidad de la restriccion. Si falla, el metodo puede perder candidatos.

## Sistema de ecuaciones

En dimension finita, el metodo conduce al sistema

$$
\nabla f(x)=\lambda \nabla g(x),
\qquad
g(x)=c.
$$

Es decir, aparecen $n+1$ ecuaciones para las $n+1$ incognitas:

- las $n$ coordenadas del punto;
- el multiplicador $\lambda$.

## Funcion lagrangiana

Se define

$$
\mathcal{L}(x,\lambda)=f(x)-\lambda(g(x)-c).
$$

Entonces las ecuaciones de Lagrange equivalen a anular las derivadas parciales de

$$
\mathcal{L}.
$$

Esta reformulacion es util y se generaliza muy bien.

## Ejemplo 1: extremos de $xy$ sobre la circunferencia unitaria

Queremos extremar

$$
f(x,y)=xy
$$

sujeto a

$$
g(x,y)=x^2+y^2=1.
$$

Las ecuaciones son

$$
\nabla f=(y,x),
\qquad
\nabla g=(2x,2y),
$$

y por tanto

$$
y=2\lambda x,
\qquad
x=2\lambda y,
\qquad
x^2+y^2=1.
$$

Si $x=0$, entonces de la restriccion $y=\pm 1$ y se obtiene

$$
f=0.
$$

Si $x\ne 0$ y $y\ne 0$, multiplicando las dos primeras ecuaciones resulta

$$
xy=4\lambda^2xy,
$$

luego

$$
4\lambda^2=1.
$$

Asi,

$$
\lambda=\pm \frac12.
$$

Si

$$
\lambda=\frac12,
$$

entonces

$$
y=x.
$$

Con la restriccion:

$$
2x^2=1
\Rightarrow
x=\pm \frac{1}{\sqrt{2}},
$$

y por tanto

$$
(x,y)=\left(\frac{1}{\sqrt{2}},\frac{1}{\sqrt{2}}\right),
\left(-\frac{1}{\sqrt{2}},-\frac{1}{\sqrt{2}}\right).
$$

En esos puntos,

$$
f=\frac12.
$$

Si

$$
\lambda=-\frac12,
$$

entonces

$$
y=-x,
$$

y se obtiene

$$
f=-\frac12.
$$

Por tanto:

- el maximo es $\frac12$;
- el minimo es $-\frac12$.

## Ejemplo 2: distancia minima del origen a la recta $x+y+z=1$

Minimizar la distancia es equivalente a minimizar su cuadrado:

$$
f(x,y,z)=x^2+y^2+z^2
$$

sujeto a

$$
g(x,y,z)=x+y+z=1.
$$

Las ecuaciones de Lagrange son

$$
(2x,2y,2z)=\lambda(1,1,1).
$$

Luego

$$
x=y=z=\frac{\lambda}{2}.
$$

Usando la restriccion:

$$
3\frac{\lambda}{2}=1
\Rightarrow
\lambda=\frac{2}{3}.
$$

Asi,

$$
x=y=z=\frac13.
$$

La distancia minima es

$$
\sqrt{\frac13}.
$$

## Ejemplo 3: extremos de una funcion cuadratica sobre una elipse

Extrememos

$$
f(x,y)=x^2+2y^2
$$

sujeto a

$$
g(x,y)=x^2+4y^2=4.
$$

Las ecuaciones:

$$
(2x,4y)=\lambda(2x,8y).
$$

De aqui,

$$
2x=2\lambda x,
\qquad
4y=8\lambda y.
$$

Analizamos casos:

- si $x\ne 0$, entonces $\lambda=1$;
- si $y\ne 0$, entonces $\lambda=\frac12$.

Si $\lambda=1$, entonces de la segunda ecuacion se sigue $y=0$. La restriccion da

$$
x=\pm 2.
$$

En esos puntos,

$$
f=4.
$$

Si $\lambda=\frac12$, entonces $x=0$ y la restriccion da

$$
y=\pm 1.
$$

En esos puntos,

$$
f=2.
$$

Por tanto el minimo es $2$ y el maximo es $4$.

## Varias restricciones

Si hay $k$ restricciones

$$
g_1(x)=c_1,\dots,g_k(x)=c_k,
$$

entonces en un extremo regular se cumple

$$
\nabla f(a)=\lambda_1 \nabla g_1(a)+\cdots+\lambda_k \nabla g_k(a).
$$

La interpretacion es la misma: el gradiente de la funcion objetivo pertenece al subespacio normal generado por los gradientes de las restricciones.

## Ejemplo 4: dos restricciones en $\mathbb{R}^3$

Maximicemos

$$
f(x,y,z)=x+y+z
$$

sujeto a

$$
x^2+y^2+z^2=1,
\qquad
x-y=0.
$$

La segunda restriccion fuerza

$$
x=y.
$$

Sustituyendo, el problema se reduce a la interseccion de la esfera con el plano $x=y$, que es una circunferencia. El metodo de varios multiplicadores reproduce esa reduccion y muestra como combinar restricciones simultaneas.

## Que garantiza y que no garantiza el metodo

El metodo de Lagrange proporciona **candidatos** a extremos restringidos regulares, pero no siempre clasifica por si solo.

Despues de resolver el sistema hay que:

- evaluar la funcion en los candidatos;
- comparar valores si el conjunto restringido es compacto;
- revisar puntos singulares donde $\nabla g=0$;
- estudiar eventualmente el borde adicional si la restriccion no describe todo el conjunto admisible.

## Casos en los que hay que tener cuidado

### 1. Restriccion no regular

Si

$$
\nabla g(a)=0,
$$

la conclusion

$$
\nabla f(a)=\lambda \nabla g(a)
$$

puede volverse trivial o perder informacion.

### 2. Conjuntos con desigualdades

El metodo clasico de Lagrange trata igualdades. Para desigualdades se necesita un aparato mas amplio, como condiciones KKT en optimizacion.

### 3. Extremos globales

Aunque el metodo halle puntos criticos restringidos, la comparacion global exige informacion sobre el conjunto y los valores de la funcion.

## Relacion con geometria y fisica

El metodo aparece una y otra vez:

- en mecanica analitica;
- en optimizacion con conservacion de energia o masa;
- en geometria diferencial al buscar puntos criticos sobre variedades;
- en analisis funcional finito-dimensional como antecesor de problemas variacionales.

## Errores frecuentes

- Olvidar incluir la ecuacion de restriccion junto a las ecuaciones del gradiente.
- Resolver solo el caso generico y omitir ramas donde alguna coordenada se anula.
- Creer que todo punto de Lagrange es automaticamente maximo o minimo.
- Ignorar puntos no regulares o bordes adicionales.

## Conclusion

Los multiplicadores de Lagrange formalizan una idea geometrica poderosa: en un extremo restringido, el cambio permitido ya no explora todo el espacio, y por eso el gradiente de la funcion objetivo debe alinearse con las normales de la restriccion. Es uno de los puentes mas claros entre calculo, geometria y fisica matematica.
