---
title: Funciones separadoras
description: Funciones construidas con distancia para separar puntos y cerrados, detectar clausuras y exhibir regularidad topologica en espacios metricos.
---

# Funciones separadoras

## Motivacion e intuicion

Una de las grandes ventajas de los espacios metricos es que permiten fabricar funciones continuas de manera casi automatica. Basta mirar distancias.

Con esa idea pueden construirse funciones que:

- detectan si un punto esta cerca de un conjunto;
- distinguen puntos distintos;
- separan cerrados disjuntos;
- muestran que los espacios metricos tienen excelentes propiedades de separacion topologica.

Esto convierte a la metrica en una maquina de producir continuidad. En topologia general estas propiedades exigen teoremas no triviales; en espacios metricos salen casi gratis de la desigualdad triangular.

::: tip Idea central
La distancia a un punto o a un conjunto no es solo una cantidad geometrica: es una funcion Lipschitz, y por tanto continua, que codifica informacion topologica fina.
:::

## Prerrequisitos

Conviene manejar:

- continuidad en espacios metricos;
- abiertos, cerrados y clausura;
- funciones Lipschitz;
- compacidad y convergencia basica.

## Distancia a un punto

Fijado $a \in X$, definimos

$$
f_a(x)=d(x,a).
$$

### Proposicion 1

La funcion $f_a:X\to [0,\infty)$ es Lipschitz con constante $1$:

$$
|f_a(x)-f_a(y)|\le d(x,y).
$$

#### Demostracion

Por desigualdad triangular,

$$
d(x,a)\le d(x,y)+d(y,a),
$$

de donde

$$
d(x,a)-d(y,a)\le d(x,y).
$$

Intercambiando $x$ e $y$,

$$
d(y,a)-d(x,a)\le d(x,y).
$$

Combinando ambas desigualdades,

$$
|d(x,a)-d(y,a)|\le d(x,y).
$$

### Consecuencia

Toda funcion distancia a un punto es continua.

## Distancia a un conjunto

Sea $A \subseteq X$ no vacio. Definimos la **distancia de $x$ a $A$** por

$$
d(x,A)=\inf_{a\in A} d(x,a).
$$

Esta cantidad mide que tan cerca esta $x$ del conjunto completo, no de un punto particular.

### Observaciones inmediatas

- siempre se tiene $d(x,A)\ge 0$;
- si $x\in A$, entonces $d(x,A)=0$;
- el infimo no tiene por que alcanzarse.

### Ejemplo 1

En $\mathbb{R}$, si

$$
A=(0,1)
$$

y $x=2$, entonces

$$
d(2,A)=1.
$$

El infimo no se alcanza en $A$, porque el punto mas cercano seria $1$, que no pertenece al conjunto.

### Proposicion 2

La funcion

$$
x\mapsto d(x,A)
$$

es Lipschitz con constante $1$.

#### Demostracion

Fijemos $x,y\in X$. Para todo $a\in A$,

$$
d(x,a)\le d(x,y)+d(y,a).
$$

Tomando infimo en $a\in A$ obtenemos

$$
d(x,A)\le d(x,y)+d(y,A).
$$

Luego

$$
d(x,A)-d(y,A)\le d(x,y).
$$

Intercambiando $x$ e $y$ se obtiene la otra desigualdad y por tanto

$$
|d(x,A)-d(y,A)|\le d(x,y).
$$

### Corolario 3

La funcion distancia a un conjunto es continua.

## Clausura y distancia a un conjunto

### Teorema 4

Para todo $A \subseteq X$ y todo $x \in X$,

$$
x \in \overline{A}
\iff
d(x,A)=0.
$$

#### Demostracion

Supongamos primero que $x \in \overline{A}$. Entonces toda bola centrada en $x$ corta a $A$. Dado $\varepsilon>0$, existe $a\in A$ tal que

$$
d(x,a)<\varepsilon.
$$

Por definicion de infimo,

$$
0\le d(x,A)\le d(x,a)<\varepsilon.
$$

Como esto vale para todo $\varepsilon>0$, se concluye que

$$
d(x,A)=0.
$$

Reciprocamente, supongamos que $d(x,A)=0$. Dado $\varepsilon>0$, por la definicion de infimo existe $a\in A$ tal que

$$
d(x,a)<\varepsilon.
$$

Entonces

$$
B(x,\varepsilon)\cap A\ne \varnothing.
$$

Como esto ocurre para todo $\varepsilon>0$, se tiene $x\in \overline{A}$.

### Corolario 5

Si $F$ es cerrado, entonces

$$
x\notin F \iff d(x,F)>0.
$$

#### Demostracion

Si $F$ es cerrado, entonces $\overline{F}=F$. Aplicando el teorema anterior,

$$
d(x,F)=0 \iff x\in F.
$$

Negando, obtenemos la equivalencia buscada.

### Interpretacion

En un espacio metrico, pertenecer a la clausura es una condicion cuantitativa: la distancia al conjunto es cero.

## Construccion de abiertos mediante distancia

### Proposicion 6

Si $F\subseteq X$ es cerrado y $r>0$, entonces el conjunto

$$
U_r(F)=\{x\in X:d(x,F)<r\}
$$

es abierto.

#### Demostracion

Es la preimagen del abierto $(-\infty,r)$ por la funcion continua $x\mapsto d(x,F)$.

### Proposicion 7

Si $F$ es cerrado, entonces el complemento

$$
X\setminus F = \{x:d(x,F)>0\}
$$

es abierto.

#### Demostracion

La funcion distancia es continua y

$$
X\setminus F = d(\cdot,F)^{-1}((0,\infty)).
$$

Esto recupera el hecho de que los cerrados tienen complemento abierto, pero ahora en forma metrica explicita.

## Separacion de un punto y un cerrado

Sea $F\subseteq X$ cerrado y sea $x_0 \notin F$. Como $F$ es cerrado,

$$
d(x_0,F)>0.
$$

### Proposicion 8

La funcion

$$
u(x)=\frac{d(x,F)}{d(x,F)+d(x,x_0)}
$$

esta bien definida, es continua y satisface

$$
u(x_0)=1,
\qquad
u(x)=0 \text{ para todo } x\in F.
$$

#### Demostracion

Las funciones $x\mapsto d(x,F)$ y $x\mapsto d(x,x_0)$ son continuas. Ademas, el denominador nunca se anula: si

$$
d(x,F)+d(x,x_0)=0,
$$

entonces ambas distancias serian cero, lo cual implicaria

$$
x\in F
\quad \text{y} \quad
x=x_0,
$$

contradiccion porque $x_0\notin F$.

La continuidad de $u$ sigue por operaciones algebraicas con funciones continuas. Si $x\in F$, entonces $d(x,F)=0$ y por tanto $u(x)=0$. Si $x=x_0$, entonces

$$
u(x_0)=\frac{d(x_0,F)}{d(x_0,F)+0}=1.
$$

### Comentario

Esto muestra que los espacios metricos son completamente regulares: puntos y cerrados pueden separarse mediante funciones continuas reales.

## Separacion de dos cerrados disjuntos

Sean $F,G\subseteq X$ cerrados, no vacios y disjuntos.

### Teorema 9

La funcion

$$
u(x)=\frac{d(x,F)}{d(x,F)+d(x,G)}
$$

esta bien definida, es continua, toma valores en $[0,1]$ y satisface

$$
u(x)=0 \text{ en } F,
\qquad
u(x)=1 \text{ en } G.
$$

#### Demostracion

Las funciones $d(\cdot,F)$ y $d(\cdot,G)$ son continuas. Veamos que el denominador no se anula.

Si para algun $x$ se tuviera

$$
d(x,F)+d(x,G)=0,
$$

entonces

$$
d(x,F)=0
\quad \text{y} \quad
d(x,G)=0.
$$

Por el criterio de clausura,

$$
x\in \overline{F}=F
\quad \text{y} \quad
x\in \overline{G}=G,
$$

contradiccion porque $F\cap G=\varnothing$.

Luego $u$ esta bien definida y es continua.

Si $x\in F$, entonces $d(x,F)=0$, de modo que

$$
u(x)=0.
$$

Si $x\in G$, entonces $d(x,G)=0$, de modo que

$$
u(x)=1.
$$

Ademas, como numerador y denominador son no negativos y el numerador no excede al denominador, se tiene

$$
0\le u(x)\le 1.
$$

### Consecuencia

Los espacios metricos son normales: dos cerrados disjuntos pueden separarse por abiertos disjuntos, pues basta tomar

$$
U=u^{-1}\left(\left[0,\frac13\right)\right),
\qquad
V=u^{-1}\left(\left(\frac23,1\right]\right).
$$

## Funciones de corte y bump functions metricas

Las distancias permiten construir funciones que valen $1$ cerca de un conjunto y se anulan fuera de cierta vecindad.

### Proposicion 10

Sea $F\subseteq X$ cerrado y sea $r>0$. La funcion

$$
\varphi_r(x)=\max\left\{0,1-\frac{d(x,F)}{r}\right\}
$$

es continua, satisface

$$
0\le \varphi_r \le 1,
$$

vale $1$ en $F$ y se anula fuera de

$$
U_r(F)=\{x:d(x,F)<r\}.
$$

#### Demostracion

La funcion $x\mapsto d(x,F)$ es continua, y tambien lo son las operaciones

$$
t\mapsto 1-\frac{t}{r},
\qquad
t\mapsto \max\{0,t\}.
$$

Luego $\varphi_r$ es continua.

Si $x\in F$, entonces $d(x,F)=0$ y por tanto

$$
\varphi_r(x)=1.
$$

Si $d(x,F)\ge r$, entonces

$$
1-\frac{d(x,F)}{r}\le 0,
$$

de modo que

$$
\varphi_r(x)=0.
$$

### Relevancia

Estas funciones son analogos metricos de funciones de corte. Permiten localizar argumentos, construir particiones simples y formular pruebas por aproximacion.

## Distancia entre conjuntos

Si $A,B\subseteq X$ son no vacios, se define

$$
d(A,B)=\inf\{d(a,b):a\in A,\ b\in B\}.
$$

### Advertencia

Aun si $A$ y $B$ son cerrados disjuntos, puede ocurrir que

$$
d(A,B)=0.
$$

### Ejemplo 2

En $\mathbb{R}^2$, los conjuntos

$$
F=\{(x,0):x\in \mathbb{R}\},
\qquad
G=\left\{\left(x,e^{-x^2}\right):x\in \mathbb{R}\right\}
$$

son cerrados y disjuntos, pero

$$
d(F,G)=0.
$$

Esto explica por que en el teorema de separacion de cerrados no puede reemplazarse directamente la funcion anterior por una normalizacion basada en una distancia positiva uniforme entre conjuntos.

## Caracterizacion de abiertos por funciones distancia

### Proposicion 11

Un conjunto $U\subseteq X$ es abierto si y solo si para todo $x\in U$ existe una funcion continua $f_x:X\to [0,1]$ tal que

$$
f_x(x)=1
\quad \text{y} \quad
f_x \equiv 0 \text{ en } X\setminus U.
$$

#### Demostracion

Si $U$ es abierto y $x\in U$, entonces

$$
F=X\setminus U
$$

es cerrado y $x\notin F$. Aplicando la separacion punto-cerrado, existe una funcion continua que vale $1$ en $x$ y $0$ en $F$.

Reciprocamente, si tal funcion existe para cada $x\in U$, entonces

$$
\{y:f_x(y)>1/2\}
$$

es un abierto contenido en $U$ que contiene a $x$. Por tanto $U$ es abierto.

### Comentario

Esta formulacion muestra que la topologia metrica puede leerse a traves de familias ricas de funciones continuas reales.

## Ejemplos trabajados

### Ejemplo 3: separar dos puntos

Si $a\ne b$, la funcion

$$
u(x)=\frac{d(x,a)}{d(x,a)+d(x,b)}
$$

es continua y satisface

$$
u(a)=0,
\qquad
u(b)=1.
$$

### Ejemplo 4: detectar la clausura de los racionales

En $\mathbb{R}$ con la metrica usual, si

$$
A=\mathbb{Q},
$$

entonces para todo $x\in \mathbb{R}$,

$$
d(x,\mathbb{Q})=0,
$$

porque $\mathbb{Q}$ es denso. Por el teorema de clausura,

$$
\overline{\mathbb{Q}}=\mathbb{R}.
$$

### Ejemplo 5: distancia a un cerrado en $\mathbb{R}$

Si

$$
F=[2,\infty),
$$

entonces

$$
d(x,F)=
\begin{cases}
0 & \text{si } x\ge 2,\\
2-x & \text{si } x<2.
\end{cases}
$$

La formula permite visualizar que la distancia a un cerrado es continua pero normalmente no derivable en el borde.

## Conexiones topologicas profundas

Las construcciones anteriores implican inmediatamente que todo espacio metrico es:

- Hausdorff;
- regular;
- normal;
- completamente regular.

### Comentario

En topologia general, cada una de estas propiedades requiere definiciones separadas y ejemplos delicados. En espacios metricos todas emergen de la existencia de suficientes funciones distancia.

## Errores comunes

- Confundir $d(x,A)$ con la distancia a un punto fijo de $A$.
- Suponer que el infimo que define $d(x,A)$ siempre se alcanza.
- Creer que cerrados disjuntos deben estar a distancia positiva.
- Olvidar que $d(x,A)=0$ caracteriza la clausura, no necesariamente la pertenencia a $A$ si $A$ no es cerrado.
- Pensar que la continuidad de las funciones separadoras es un hecho profundo cuando en realidad sigue de una desigualdad Lipschitz elemental.

## Ejercicios propuestos

1. Probar directamente que $x\mapsto d(x,A)$ es continua sin usar el lenguaje Lipschitz.
2. Demostrar que si $F$ es cerrado, entonces $d(x,F)>0$ para todo $x\notin F$.
3. Construir una funcion continua que separe un punto de un cerrado dado.
4. Verificar que la funcion del teorema de separacion de dos cerrados toma valores en $[0,1]$.
5. Dar un ejemplo de dos cerrados disjuntos con distancia cero.
6. Probar que si $A$ es denso, entonces $d(x,A)=0$ para todo $x$.
7. Estudiar la funcion distancia al conjunto $\mathbb{Z}$ en $\mathbb{R}$.

## Cierre

Las funciones separadoras muestran de manera muy concreta por que los espacios metricos tienen una topologia tan manejable. La distancia genera continuidad, la continuidad separa conjuntos y esa separacion permite reconstruir mucha de la estructura topologica del espacio a partir de funciones reales simples.
