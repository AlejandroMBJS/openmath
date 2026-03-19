---
title: Cauchy-Riemann y Funciones Armonicas
description: Ecuaciones de Cauchy-Riemann, relacion con derivabilidad compleja, armonicidad y laplaciano.
---

# Cauchy-Riemann y Funciones Armonicas

## Ecuaciones de Cauchy-Riemann y funciones armonicas

Sea

$$
f(z)=u(x,y)+iv(x,y),
\qquad
z=x+iy.
$$

Si $f$ es complejamente derivable y $u,v$ son suficientemente regulares, entonces satisfacen

$$
u_x = v_y,
\qquad
u_y = -v_x.
$$

Estas son las ecuaciones de Cauchy-Riemann.

### Lectura

La derivabilidad compleja impone una compatibilidad muy estricta entre las dos componentes reales.

## Derivacion de Cauchy-Riemann

Tomando el cociente incremental por el eje real y por el eje imaginario, se obtienen dos expresiones para la derivada. Igualarlas fuerza las identidades anteriores.

### Moral

La comparacion de dos direcciones independientes ya encierra toda la rigidez del problema.

## Suficiencia local

Si $u$ y $v$ tienen derivadas parciales continuas en un entorno y satisfacen Cauchy-Riemann, entonces $f$ es holomorfa.

### Importancia

Con continuidad de derivadas parciales, Cauchy-Riemann deja de ser solo condicion necesaria y pasa a ser criterio practico de holomorfia.

## Interpretacion matricial

La jacobiana real de $f$ tiene forma

$$
Df=
\begin{pmatrix}
u_x & u_y\\
v_x & v_y
\end{pmatrix}

=
\begin{pmatrix}
a & -b\\
b & a
\end{pmatrix}
$$

cuando se cumplen Cauchy-Riemann.

### Lectura

Toda derivada compleja localmente es "multiplicar por un complejo": una dilatacion combinada con una rotacion, salvo que la derivada sea cero.

## Funciones analiticas, armonicas y laplaciano

Si $f=u+iv$ es holomorfa y $u,v$ son dos veces derivables, entonces ambas partes satisfacen

$$
\Delta u = u_{xx}+u_{yy}=0,
\qquad
\Delta v = v_{xx}+v_{yy}=0.
$$

### Moral

Las partes real e imaginaria de una funcion holomorfa son armonicas.

## Demostracion de armonicidad

Derivando Cauchy-Riemann:

$$
u_{xx}=v_{yx},
\qquad
u_{yy}=-v_{xy}.
$$

Como las derivadas cruzadas coinciden bajo regularidad suficiente,

$$
u_{xx}+u_{yy}=0.
$$

Un argumento analogo da $\Delta v=0$.

## Conjugada armonica

Si $u$ es armonica en un dominio simplemente conexo, en condiciones adecuadas existe $v$ tal que

$$
u+iv
$$

es holomorfa. La funcion $v$ se llama conjugada armonica de $u$.

### Importancia

Este hecho une la teoria potencial real con variable compleja.

## Ejemplo guiado: potencial logaritmico

La funcion

$$
u(x,y)=\log|z|
$$

es armonica fuera del origen. Su conjugada armonica local es el argumento $\arg z$.

### Moral

La multivaluacion del argumento explica por que la conjugada armonica puede no existir globalmente sin elegir ramas.

## Singularidades y polos de funciones complejas

Una singularidad aislada en $z_0$ es un punto donde la funcion no es holomorfa, pero si lo es en un entorno perforado.

Clases basicas:

- removible;
- polo;
- esencial.

### Lectura

La teoria local de singularidades sera una prolongacion natural de la analiticidad por series de Laurent.

## Polos

Un polo de orden $m$ en $z_0$ significa que

$$
f(z)=\frac{g(z)}{(z-z_0)^m}
$$

con $g$ holomorfa y $g(z_0)\ne 0$.

### Moral

Un polo es una explosion algebraica controlada.

## Singularidad removible

Si $f$ esta acotada cerca de $z_0$ y es holomorfa en el entorno perforado, entonces la singularidad puede eliminarse definiendo adecuadamente el valor en $z_0$.

### Importancia

Esto ya anticipa un principio general: las singularidades complejas son mucho mas rigidas que las reales.

## Singularidad esencial

Si la parte principal de Laurent tiene infinitos terminos, la singularidad es esencial.

### Lectura

Las singularidades esenciales son salvajes: cerca de ellas la funcion puede aproximarse a una enorme variedad de valores.

## Holomorfia y conformalidad

Si $f'(z_0)\ne 0$, entonces localmente $f$ preserva angulos orientados.

### Importancia

Esta propiedad conformal enlaza variable compleja con geometria y fisica matematica bidimensional.

## Ejemplo guiado: z cuadrado

La funcion

$$
f(z)=z^2
$$

duplica argumentos y eleva al cuadrado el modulo. En puntos donde $z\ne 0$, es conforme porque

$$
f'(z)=2z\ne 0.
$$

En $0$, la derivada se anula y la geometria local cambia.

## Conexion con integrales complejas

Cauchy-Riemann no es solo un criterio local. Se convertira en:

- invariancia de integrales sobre contornos cerrados;
- formulas integrales;
- rigidez global.

## Errores frecuentes

- creer que Cauchy-Riemann sin regularidad adicional basta siempre para holomorfia;
- confundir armonicidad con holomorfia;
- olvidar que una armonica global puede no tener conjugada global en dominios no simplemente conexos;
- pensar que todo punto con derivada nula sigue siendo conforme;
- tratar polos y singularidades esenciales como grados distintos del mismo fenomeno simple.

## Practica recomendada

1. Verificar Cauchy-Riemann para polinomios y exponenciales complejas.
2. Probar que las partes real e imaginaria de una holomorfa son armonicas.
3. Construir conjugadas armonicas en dominios simples.
4. Clasificar singularidades aisladas en ejemplos racionales.
5. Relacionar la matriz jacobiana real con multiplicacion por un complejo.

## Cierre

Cauchy-Riemann es la puerta exacta entre calculo real bidimensional y analiticidad compleja. A partir de aqui, la teoria deja de ser algebra mas limites y se convierte en un sistema rigido donde armonicidad, conformalidad y singularidades quedan profundamente entrelazadas.
