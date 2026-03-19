---
title: Derivadas parciales con funciones de varias variables
description: Definicion rigurosa de derivadas parciales, derivadas de orden superior, teorema de Clairaut y relacion con continuidad y diferenciabilidad.
---

# Derivadas parciales con funciones de varias variables

## Motivacion

En una funcion de varias variables no existe una sola direccion natural de cambio. La primera idea razonable consiste en congelar todas las variables salvo una y derivar respecto de la elegida.

Eso produce las **derivadas parciales**, que miden la sensibilidad de la funcion frente a perturbaciones coordinadas.

## Definicion de derivada parcial

Sea

$$
f:D\subseteq \mathbb{R}^n\to \mathbb{R},
$$

y sea

$$
a=(a_1,\dots,a_n)
$$

un punto interior de $D$.

La derivada parcial respecto de la variable $x_j$ en $a$ se define por

$$
\frac{\partial f}{\partial x_j}(a)
=
\lim_{h\to 0}
\frac{
f(a_1,\dots,a_j+h,\dots,a_n)-f(a_1,\dots,a_n)
}{h},
$$

si el limite existe.

### Caso de dos variables

Si

$$
f=f(x,y),
$$

entonces

$$
f_x(a,b)=\lim_{h\to 0}\frac{f(a+h,b)-f(a,b)}{h},
$$

$$
f_y(a,b)=\lim_{h\to 0}\frac{f(a,b+h)-f(a,b)}{h}.
$$

## Interpretacion geometrica

Las derivadas parciales miden la pendiente del grafo al cortar la superficie con planos paralelos a los planos coordenados.

- $f_x(a,b)$ mide la variacion al moverse en direccion del eje $x$ manteniendo $y=b$ fijo;
- $f_y(a,b)$ hace lo mismo en direccion del eje $y$.

## Ejemplos iniciales

### Ejemplo 1

Sea

$$
f(x,y)=x^2y+3xy^2.
$$

Entonces

$$
f_x(x,y)=2xy+3y^2,
$$

$$
f_y(x,y)=x^2+6xy.
$$

### Ejemplo 2

Sea

$$
f(x,y,z)=xe^{yz}.
$$

Entonces

$$
f_x=e^{yz},
\qquad
f_y=xze^{yz},
\qquad
f_z=xye^{yz}.
$$

## Derivadas parciales de orden superior

Una vez que existen las primeras parciales, pueden derivarse de nuevo.

En dos variables:

$$
f_{xx},\qquad f_{xy},\qquad f_{yx},\qquad f_{yy}.
$$

Por ejemplo,

$$
f_{xy}=\frac{\partial}{\partial y}(f_x),
\qquad
f_{yx}=\frac{\partial}{\partial x}(f_y).
$$

## Derivadas mixtas

Las derivadas

$$
f_{xy}
\qquad\text{y}\qquad
f_{yx}
$$

se llaman **mixtas**.

No son automaticamente iguales sin hipotesis adicionales.

## Teorema de Clairaut-Schwarz

### Teorema 1

Sea

$$
f
$$

definida en un abierto de $\mathbb{R}^2$. Si $f_{xy}$ y $f_{yx}$ existen en un entorno de $(a,b)$ y son continuas en $(a,b)$, entonces

$$
f_{xy}(a,b)=f_{yx}(a,b).
$$

### Comentario

El teorema vale mas generalmente en $\mathbb{R}^n$: bajo continuidad suficiente de las derivadas mixtas, el orden de derivacion puede intercambiarse.

### Ejemplo 3

Sea

$$
f(x,y)=x^2y^3.
$$

Entonces

$$
f_x=2xy^3,
\qquad
f_y=3x^2y^2.
$$

Por tanto

$$
f_{xy}=6xy^2,
\qquad
f_{yx}=6xy^2.
$$

## Existencia de parciales no implica continuidad

Este es un punto conceptual importante.

### Ejemplo 4

Definamos

$$
f(x,y)=
\begin{cases}
\dfrac{xy}{x^2+y^2}, & (x,y)\ne (0,0),\\[1ex]
0, & (x,y)=(0,0).
\end{cases}
$$

Entonces

$$
f_x(0,0)=\lim_{h\to 0}\frac{f(h,0)-f(0,0)}{h}=0,
$$

y tambien

$$
f_y(0,0)=0.
$$

Sin embargo, la funcion no es continua en el origen, pues sobre la recta $y=x$ vale

$$
f(x,x)=\frac12.
$$

Por tanto, tener derivadas parciales en un punto no garantiza continuidad.

## Existencia de parciales no implica diferenciabilidad

Todavia mas fuerte: una funcion puede tener todas sus parciales en un punto y aun asi no admitir una buena aproximacion lineal alli.

### Ejemplo 5

Sea

$$
f(x,y)=
\begin{cases}
\dfrac{x^3}{x^2+y^2}, & (x,y)\ne (0,0),\\[1ex]
0, & (x,y)=(0,0).
\end{cases}
$$

Se comprueba que las parciales en el origen existen y valen

$$
f_x(0,0)=1,
\qquad
f_y(0,0)=0.
$$

Pero la funcion no queda bien controlada por la aproximacion lineal

$$
x.
$$

Tomando la trayectoria $y=x$, se obtiene

$$
f(x,x)=\frac{x}{2},
$$

de modo que

$$
\frac{f(x,x)-x}{\sqrt{x^2+x^2}}
=
\frac{-x/2}{\sqrt{2}|x|}
\not\to 0.
$$

Luego la funcion no es diferenciable en el origen.

## Continuidad de parciales y diferenciabilidad

Aunque la mera existencia de parciales es insuficiente, su continuidad local si fuerza un mejor comportamiento.

### Teorema 2

Sea

$$
f:U\subseteq \mathbb{R}^n\to \mathbb{R}
$$

con $U$ abierto. Si todas las derivadas parciales de primer orden existen en un entorno de $a\in U$ y son continuas en $a$, entonces $f$ es diferenciable en $a$.

### Comentario

Este resultado se usa constantemente: para funciones construidas con expresiones suaves, basta calcular parciales y reconocer continuidad para garantizar diferenciabilidad.

## Regla de la cadena por coordenadas

Si

$$
z=f(x,y),
\qquad
x=x(t),\ y=y(t),
$$

y todo es suficientemente derivable, entonces

$$
\frac{dz}{dt}=f_x(x(t),y(t))x'(t)+f_y(x(t),y(t))y'(t).
$$

Esta formula anticipa el papel del gradiente.

## Ejemplos trabajados

### Ejemplo 6: derivadas de una raiz

Sea

$$
f(x,y)=\sqrt{1-x^2-y^2},
$$

definida en el disco unitario abierto.

Por regla de la cadena,

$$
f_x(x,y)=\frac{-x}{\sqrt{1-x^2-y^2}},
\qquad
f_y(x,y)=\frac{-y}{\sqrt{1-x^2-y^2}}.
$$

Estas parciales dejan ver como la pendiente se hace infinita al acercarse al borde del disco.

### Ejemplo 7: derivadas mixtas

Sea

$$
f(x,y)=e^{xy}.
$$

Entonces

$$
f_x=ye^{xy},
\qquad
f_y=xe^{xy}.
$$

Derivando otra vez,

$$
f_{xy}=e^{xy}+xye^{xy},
\qquad
f_{yx}=e^{xy}+xye^{xy}.
$$

## Notacion vectorial

En $\mathbb{R}^n$ se escribe a menudo

$$
\partial_j f
$$

para la derivada parcial respecto de la $j$-esima coordenada.

Tambien se usa multiindice:

$$
\partial^\alpha f
$$

para derivadas de orden superior. Esta notacion se vuelve central en analisis, ecuaciones diferenciales parciales y geometria diferencial.

## Errores frecuentes

- Derivar respecto de una variable sin congelar correctamente las otras.
- Concluir continuidad a partir de la existencia de parciales en un punto.
- Aplicar igualdad de mixtas sin verificar hipotesis.
- Olvidar que los puntos de borde del dominio requieren mas cuidado.

## Conclusion

Las derivadas parciales son la primera capa del calculo multivariable. Son indispensables, pero por si solas no capturan toda la geometria local. Para entender realmente el cambio de una funcion hace falta pasar a derivadas direccionales, gradiente y diferenciabilidad, donde aparece la aproximacion lineal global del entorno.
