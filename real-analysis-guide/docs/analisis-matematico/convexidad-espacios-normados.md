---
title: Convexidad en normados
description: Conjuntos convexos, combinaciones convexas, envolvente convexa, convexidad de bolas y primeras ideas geometricas en espacios normados.
---

# Convexidad en normados

## Motivacion e intuicion

La convexidad es la geometria elemental compatible con la estructura lineal. Mientras que la topologia describe cercania y la norma describe tamano, la convexidad describe estabilidad frente a combinaciones lineales con coeficientes positivos que suman uno.

Si un conjunto es convexo, cualquier segmento que una dos de sus puntos permanece dentro del conjunto. Esa propiedad, aparentemente simple, domina grandes partes del analisis:

- las bolas de una norma son convexas;
- los conjuntos de subnivel de funciones convexas son convexos;
- los problemas de optimizacion natural viven sobre conjuntos convexos;
- la continuidad lineal y la dualidad se formulan sobre estructuras convexas.

En analisis funcional, la convexidad no es un adorno geometrico. Es un principio organizador.

## Prerrequisitos

Conviene manejar:

- espacios vectoriales y espacios normados;
- desigualdad triangular;
- topologia basica en metricos;
- nocion de clausura.

## Definiciones fundamentales

Sea $V$ un espacio vectorial real. Un subconjunto $C \subseteq V$ se llama **convexo** si

$$
\forall x,y \in C \ \forall t \in [0,1], \quad tx+(1-t)y \in C.
$$

El punto

$$
tx+(1-t)y
$$

se interpreta como un punto del segmento que une $x$ con $y$.

### Combinacion convexa

Una expresion de la forma

$$
\sum_{j=1}^m \lambda_j x_j,
\qquad
\lambda_j \ge 0,
\qquad
\sum_{j=1}^m \lambda_j=1,
$$

se llama **combinacion convexa** de los puntos $x_1,\dots,x_m$.

### Envolvente convexa

La **envolvente convexa** de un conjunto $A \subseteq V$, denotada por $\operatorname{co}(A)$, es la interseccion de todos los conjuntos convexos que contienen a $A$.

Equivalente y mas concretamente, $\operatorname{co}(A)$ es el conjunto de todas las combinaciones convexas finitas de puntos de $A$.

### Conjunto estrictamente convexo

En un espacio normado, se dice que la norma es **estrictamente convexa** si para cualesquiera $x,y$ con $\|x\|=\|y\|=1$ y $x\ne y$ se cumple

$$
\left\|\frac{x+y}{2}\right\|<1.
$$

La idea es que la frontera de la bola unitaria no contiene segmentos no triviales.

## Primeros ejemplos

- Todo subespacio vectorial es convexo.
- Toda bola abierta o cerrada en un espacio normado es convexa.
- La interseccion arbitraria de conjuntos convexos es convexa.
- La union de convexos no tiene por que ser convexa.
- La esfera unitaria no suele ser convexa.

### Ejemplo 1: un subespacio es convexo

Si $W \subseteq V$ es subespacio y $x,y \in W$, entonces para todo $t \in [0,1]$,

$$
tx+(1-t)y \in W
$$

porque los subespacios son cerrados bajo combinaciones lineales.

### Contraejemplo 1: la union de convexos puede no ser convexa

En $\mathbb{R}^2$, los conjuntos

$$
C_1=\{(x,0):x\in \mathbb{R}\},
\qquad
C_2=\{(0,y):y\in \mathbb{R}\}
$$

son convexos, pero

$$
C_1 \cup C_2
$$

no lo es. El punto medio entre $(1,0)$ y $(0,1)$ es

$$
\left(\frac12,\frac12\right),
$$

que no pertenece a la union.

### Contraejemplo 2: la esfera unitaria no es convexa

En $\mathbb{R}^2$ con la norma euclidiana, los puntos $(1,0)$ y $(-1,0)$ pertenecen a la esfera unitaria

$$
S=\{x:\|x\|_2=1\}.
$$

Su punto medio es $(0,0)$, que no esta en $S$. Luego $S$ no es convexa.

## Propiedades elementales

### Proposicion 1: intersecciones de convexos

La interseccion de una familia cualquiera de conjuntos convexos es convexa.

#### Demostracion

Sea $\{C_i\}_{i\in I}$ una familia de convexos y sea

$$
C=\bigcap_{i\in I} C_i.
$$

Si $x,y \in C$, entonces $x,y \in C_i$ para todo $i$. Como cada $C_i$ es convexo,

$$
tx+(1-t)y \in C_i
$$

para todo $t \in [0,1]$. Por tanto

$$
tx+(1-t)y \in \bigcap_{i\in I} C_i=C.
$$

### Proposicion 2: combinaciones convexas finitas

Si $C$ es convexo y $x_1,\dots,x_m \in C$, entonces toda combinacion convexa

$$
\sum_{j=1}^m \lambda_j x_j
$$

pertenece a $C$.

#### Demostracion

Se procede por induccion sobre $m$.

Para $m=2$ no hay nada que probar.

Supongamos cierto para $m$ puntos y consideremos

$$
z=\sum_{j=1}^{m+1}\lambda_j x_j,
\qquad
\lambda_j \ge 0,
\qquad
\sum_{j=1}^{m+1}\lambda_j=1.
$$

Si $\lambda_{m+1}=1$, entonces $z=x_{m+1}\in C$. Si $\lambda_{m+1}<1$, definimos

$$
\mu_j=\frac{\lambda_j}{1-\lambda_{m+1}}
\qquad
(1\le j\le m).
$$

Entonces $\mu_j \ge 0$ y

$$
\sum_{j=1}^m \mu_j=1.
$$

Por hipotesis inductiva,

$$
y=\sum_{j=1}^m \mu_j x_j \in C.
$$

Ahora

$$
z=(1-\lambda_{m+1})y+\lambda_{m+1}x_{m+1},
$$

y como $C$ es convexo, se concluye que $z\in C$.

### Proposicion 3: la clausura de un convexo es convexa

Si $C \subseteq V$ es convexo, entonces $\overline{C}$ es convexo.

#### Demostracion

Sean $x,y \in \overline{C}$ y $t \in [0,1]$. Existen sucesiones $(x_n)$ y $(y_n)$ en $C$ tales que

$$
x_n \to x,
\qquad
y_n \to y.
$$

Como $C$ es convexo,

$$
z_n=tx_n+(1-t)y_n \in C.
$$

Por continuidad de las operaciones lineales,

$$
z_n \to tx+(1-t)y.
$$

Luego $tx+(1-t)y \in \overline{C}$.

## Convexidad de las bolas

### Teorema 4

En todo espacio normado, las bolas abiertas y cerradas son convexas.

#### Demostracion

Probemos el caso de la bola cerrada centrada en $0$ y radio $r$:

$$
\overline{B}(0,r)=\{x:\|x\|\le r\}.
$$

Sean $x,y \in \overline{B}(0,r)$ y $t \in [0,1]$. Entonces

$$
\|tx+(1-t)y\|
\le
t\|x\|+(1-t)\|y\|
\le
tr+(1-t)r=r.
$$

Luego

$$
tx+(1-t)y \in \overline{B}(0,r).
$$

El caso de bolas abiertas es identico, con desigualdades estrictas, y el caso de centro arbitrario se obtiene por traslacion.

### Comentario

La convexidad de las bolas es la manifestacion geometrica de la desigualdad triangular.

## La norma como funcion convexa

### Proposicion 5

La norma es una funcion convexa:

$$
\|tx+(1-t)y\|
\le
t\|x\|+(1-t)\|y\|
\qquad
(t\in[0,1]).
$$

#### Demostracion

Se escribe

$$
tx+(1-t)y
$$

como suma de dos vectores y se aplica homogeneidad mas desigualdad triangular:

$$
\|tx+(1-t)y\|
\le
\|tx\|+\|(1-t)y\|
=
t\|x\|+(1-t)\|y\|.
$$

### Consecuencia

Los conjuntos de subnivel de la norma,

$$
\{x:\|x\|\le r\},
$$

son convexos.

## Interior, segmento y rigidez geometrica

### Proposicion 6

Sea $C$ un conjunto convexo en un espacio normado. Si $x \in \operatorname{int}(C)$ y $y \in \overline{C}$, entonces para todo $t \in [0,1)$ se cumple

$$
tx+(1-t)y \in \operatorname{int}(C).
$$

#### Demostracion

Como $x$ es interior, existe $r>0$ tal que

$$
B(x,r)\subseteq C.
$$

Tomemos

$$
z=tx+(1-t)y
$$

con $t<1$. Fijemos

$$
\delta=\frac{tr}{2}.
$$

Sea $u$ tal que

$$
\|u-z\|<\delta.
$$

Como $y \in \overline{C}$, existe $y' \in C$ tal que

$$
\|y-y'\|<\frac{r}{2(1-t)}.
$$

Definimos

$$
v=x+\frac{u-z}{t}+\frac{1-t}{t}(y-y').
$$

Entonces

$$
u=t v +(1-t)y'.
$$

En efecto,

$$
t v +(1-t)y'
=
t x +(u-z)+(1-t)(y-y')+(1-t)y'
=
t x +(u-z)+(1-t)y
=
u.
$$

Ademas,

$$
\|v-x\|
\le
\frac{\|u-z\|}{t}+\frac{1-t}{t}\|y-y'\|
<
\frac{tr/2}{t}+\frac{1-t}{t}\cdot \frac{r}{2(1-t)}
=
r.
$$

Luego $v \in B(x,r)\subseteq C$. Como tambien $y' \in C$ y $C$ es convexo, se concluye que

$$
u=t v +(1-t)y' \in C.
$$

Por tanto

$$
B(z,\delta)\subseteq C,
$$

y esto prueba que $z \in \operatorname{int}(C)$.

### Interpretacion

Una vez que un conjunto convexo tiene interior, los segmentos que parten de un punto interior hacia la clausura siguen siendo interior salvo, en general, el extremo final.

## Envolvente convexa

### Proposicion 7

Para todo conjunto $A \subseteq V$,

$$
\operatorname{co}(A)
$$

es el conjunto de todas las combinaciones convexas finitas de puntos de $A$.

#### Demostracion

Sea $E$ el conjunto de todas las combinaciones convexas finitas de puntos de $A$.

Primero, $A \subseteq E$ porque todo punto $a \in A$ es una combinacion convexa trivial.

Segundo, $E$ es convexo. En efecto, si

$$
u=\sum_{j=1}^m \lambda_j x_j,
\qquad
v=\sum_{k=1}^n \mu_k y_k,
$$

son combinaciones convexas, entonces para $t \in [0,1]$,

$$
tu+(1-t)v
=
\sum_{j=1}^m (t\lambda_j)x_j+\sum_{k=1}^n ((1-t)\mu_k)y_k,
$$

que sigue siendo una combinacion convexa.

Como $E$ es convexo y contiene a $A$, se tiene

$$
\operatorname{co}(A)\subseteq E.
$$

Por otro lado, cualquier conjunto convexo que contenga a $A$ contiene tambien toda combinacion convexa finita de puntos de $A$, luego contiene a $E$. Al intersectar todos esos convexos se obtiene

$$
E\subseteq \operatorname{co}(A).
$$

Por tanto, ambos conjuntos coinciden.

## Conjuntos equilibrados y absorbentes

Aunque la convexidad es central, en espacios normados suele convivir con otras dos propiedades geometricas.

### Equilibrio

Un conjunto $A$ es **equilibrado** si

$$
|\lambda|\le 1,\ x \in A \Rightarrow \lambda x \in A.
$$

### Absorcion

Un conjunto $A$ es **absorbente** si para todo $x \in V$ existe $t>0$ tal que

$$
x \in tA.
$$

La bola unitaria cerrada de una norma es convexa, equilibrada y absorbente.

### Comentario

Estas tres propiedades son las que mas adelante permiten reconstruir normas a partir de cuerpos convexos adecuados mediante funcionales de Minkowski.

## Estricta convexidad

La convexidad comun solo dice que el segmento entre dos puntos de la bola unitaria sigue en la bola. La convexidad estricta exige que, salvo en los extremos, ese segmento caiga dentro del interior.

### Ejemplo 2

La norma euclidiana en $\mathbb{R}^n$ es estrictamente convexa.

### Ejemplo 3

La norma $\|\cdot\|_\infty$ en $\mathbb{R}^2$ no es estrictamente convexa. En efecto, los puntos

$$
(1,1), \qquad (1,-1)
$$

pertenecen a la esfera unitaria de $\|\cdot\|_\infty$, y tambien todo el segmento entre ellos:

$$
\{(1,t):-1\le t\le 1\}.
$$

Por tanto la frontera contiene segmentos no triviales.

### Relevancia

La estricta convexidad garantiza unicidad de ciertos minimizadores y una geometria mas rigida de la esfera unitaria.

## Aplicaciones geometricas inmediatas

### Proposicion 8

Si $C$ es convexo, entonces para cualesquiera $x_1,\dots,x_m \in C$ se cumple

$$
\frac{x_1+\cdots+x_m}{m}\in C.
$$

#### Demostracion

Es una combinacion convexa con coeficientes $\lambda_j=\frac1m$.

### Proposicion 9

Si $C$ y $D$ son convexos, entonces

$$
C+D=\{x+y:x\in C,\ y\in D\}
$$

es convexo.

#### Demostracion

Sean $u_1=x_1+y_1$ y $u_2=x_2+y_2$ con $x_i\in C$, $y_i\in D$. Para $t\in[0,1]$,

$$
tu_1+(1-t)u_2
=
\big(tx_1+(1-t)x_2\big)+\big(ty_1+(1-t)y_2\big).
$$

Como $C$ y $D$ son convexos, el primer parentesis pertenece a $C$ y el segundo a $D$. Luego la suma pertenece a $C+D$.

## Ejemplos trabajados

### Ejemplo 4: un anillo no es convexo

En $\mathbb{R}^2$ el conjunto

$$
A=\{x \in \mathbb{R}^2:1\le \|x\|_2 \le 2\}
$$

no es convexo. Los puntos

$$
(1,0), \qquad (-1,0)
$$

pertenecen a $A$, pero su punto medio es $(0,0)$, que no pertenece a $A$.

### Ejemplo 5: la envolvente convexa de dos puntos

Si

$$
A=\{x,y\},
$$

entonces

$$
\operatorname{co}(A)=\{tx+(1-t)y:0\le t\le 1\},
$$

es decir, el segmento cerrado entre $x$ e $y$.

### Ejemplo 6: la envolvente convexa de tres puntos no alineados

En $\mathbb{R}^2$, si $A=\{x_1,x_2,x_3\}$ con los puntos no colineales, entonces $\operatorname{co}(A)$ es el triangulo solido formado por todas las combinaciones convexas

$$
\lambda_1 x_1+\lambda_2 x_2+\lambda_3 x_3,
\qquad
\lambda_j \ge 0,
\qquad
\lambda_1+\lambda_2+\lambda_3=1.
$$

## Errores comunes

- Confundir convexidad con simetria respecto del origen.
- Pensar que la esfera unitaria debe ser convexa porque la bola unitaria lo es.
- Suponer que la union de convexos siempre es convexa.
- Olvidar que la clausura de un convexo sigue siendo convexa.
- Trabajar con segmentos en espacios complejos sin aclarar que la convexidad se considera sobre la estructura real subyacente.

## Ejercicios

### Ejercicio 1

Probar que la interseccion de una familia cualquiera de convexos es convexa.

### Ejercicio 2

Demostrar que la imagen de un convexo por una aplicacion lineal es convexa.

### Ejercicio 3

Probar que la preimagen de un convexo por una aplicacion lineal es convexa.

### Ejercicio 4

Mostrar que si $C$ es convexo, entonces $\alpha C+\beta C \subseteq (\alpha+\beta)C$ para $\alpha,\beta \ge 0$.

### Ejercicio 5

Verificar que la norma $\|\cdot\|_2$ es estrictamente convexa en $\mathbb{R}^n$.

### Ejercicio 6

Dar un ejemplo de conjunto cerrado no convexo y de conjunto convexo no cerrado.

### Ejercicio 7

Calcular la envolvente convexa de los puntos $(0,0)$, $(1,0)$ y $(0,1)$.

### Ejercicio 8

Sea $C$ convexo en un espacio normado. Demuestre que para todo $x \in \operatorname{int}(C)$ y todo $y \in \overline{C}$, el segmento $[x,y)$ esta contenido en $\operatorname{int}(C)$.

### Ejercicio 9

Demuestre que todo subespacio vectorial de un espacio normado es convexo.

### Ejercicio 10

Sea $C$ convexo y $f : V \to \mathbb{R}$ una funcion convexa. Pruebe que el conjunto de subnivel $\{x : f(x) \le \alpha\}$ es convexo para todo $\alpha$.

### Ejercicio 11

Demuestre que si $C$ y $D$ son convexos, entonces $C \times D$ es convexo en el espacio producto.

### Ejercicio 12

Pruebe que la envolvente convexa de cualquier subconjunto $A \subseteq V$ es el conjunto de todas las combinaciones convexas finitas de puntos de $A$.

### Ejercicio 13

Demuestre que en un espacio normado, la bola abierta unitaria es la envolvente convexa de la esfera unitaria.

### Ejercicio 14

Sea $C$ convexo con interior no vacio. Pruebe que $\partial C$ (la frontera) no contiene segmentos rectilineos.

### Ejercicio 15

Demuestre que un espacio normado es estrictamente convexo si y solo si todo par de puntos distintos de la esfera unitaria determina un segmento de recta que no intersecta la esfera en puntos intermedios.

## Soluciones

### Solucion 1

Sean $\{C_i\}_{i \in I}$ convexos y sea $x,y \in \bigcap_i C_i$. Para todo $i$, $x,y \in C_i$, y como $C_i$ es convexo, el segmento $[x,y] \subseteq C_i$. Esto vale para todo $i$, luego $[x,y] \subseteq \bigcap_i C_i$. $\blacksquare$

### Solucion 2

Sea $T : V \to W$ lineal y $C \subseteq V$ convexo. Si $x,y \in T(C)$, existen $u,v \in C$ con $x = T(u)$, $y = T(v)$. Para $t \in [0,1]$, $T(tu + (1-t)v) = tT(u) + (1-t)T(v) = tx + (1-t)y$. Como $C$ es convexo, $tu + (1-t)v \in C$, luego $tx + (1-t)y \in T(C)$. $\blacksquare$

### Solucion 3

Sea $T : V \to W$ lineal y $D \subseteq W$ convexo. Si $x,y \in T^{-1}(D)$, entonces $T(x), T(y) \in D$. Para $t \in [0,1]$, $T(tx + (1-t)y) = tT(x) + (1-t)T(y) \in D$ por convexidad de $D$. Luego $tx + (1-t)y \in T^{-1}(D)$. $\blacksquare$

### Solucion 4

Sea $z \in \alpha C + \beta C$. Entonces $z = \alpha u + \beta v$ con $u,v \in C$. Si $\alpha + \beta > 0$, entonces $z = (\alpha + \beta)(\frac{\alpha}{\alpha + \beta} u + \frac{\beta}{\alpha + \beta} v) \in (\alpha + \beta)C$ por convexidad de $C$. Si $\alpha = \beta = 0$, $z = 0 \in (\alpha + \beta)C$. $\blacksquare$

### Solucion 5

Si $\|x\|_2 = \|y\|_2 = 1$ y $x \ne y$, y $t \in (0,1)$, entonces $\|tx + (1-t)y\|_2 < 1$. En efecto, $\|\cdot\|_2^2$ es estrictamente convexa: $\|tx + (1-t)y\|_2^2 = t^2 + (1-t)^2 + 2t(1-t)\langle x,y \rangle < t^2 + (1-t)^2 + 2t(1-t) = 1$ porque $\langle x,y \rangle < 1$ para $x \ne y$ en la esfera unitaria. $\blacksquare$

### Solucion 6

Cerrado no convexo: $\mathbb{R} \setminus \{0\}$ en $\mathbb{R}$. Convexo no cerrado: $(0,1)$ en $\mathbb{R}$. $\blacksquare$

### Solucion 7

$\operatorname{co}\{(0,0),(1,0),(0,1)\} = \{\lambda_1(0,0) + \lambda_2(1,0) + \lambda_3(0,1) : \lambda_i \ge 0, \sum \lambda_i = 1\} = \{(t, s) : t,s \ge 0, t+s \le 1\}$, es decir, el triangulo solido con esos vertices. $\blacksquare$

### Solucion 8

Sea $x \in \operatorname{int}(C)$ e $y \in \overline{C}$. Para $t \in (0,1)$, consideremos $z = tx + (1-t)y$. Como $x$ es interior, existe $r > 0$ con $B(x,r) \subseteq C$. Si $\|u - z\| < tr$, existe $v = x + (u-z)/t$ con $\|v - x\| < r$, luego $v \in C$. Ademas existe sucesion $y_n \in C$ con $y_n \to y$, y para $n$ grande, $u_n = tv + (1-t)y_n \in C$ converge a $u$. Alternativamente, por un argumento directo con $B(z, tr) \subseteq C$. $\blacksquare$

### Solucion 9

Un subespacio vectorial $W$ satisface: si $x,y \in W$ y $t \in [0,1]$, entonces $tx + (1-t)y \in W$ porque $W$ es cerrado bajo combinaciones lineales (en particular convexas). $\blacksquare$

### Solucion 10

Sean $x,y \in \{f \le \alpha\}$ y $t \in [0,1]$. Por convexidad de $f$: $f(tx + (1-t)y) \le tf(x) + (1-t)f(y) \le t\alpha + (1-t)\alpha = \alpha$. $\blacksquare$

### Solucion 11

Si $(x_1,y_1), (x_2,y_2) \in C \times D$ y $t \in [0,1]$, entonces $t(x_1,y_1) + (1-t)(x_2,y_2) = (tx_1 + (1-t)x_2, ty_1 + (1-t)y_2) \in C \times D$ porque $C$ y $D$ son convexos. $\blacksquare$

### Solucion 12

Sea $E$ el conjunto de combinaciones convexas finitas de puntos de $A$. Ya demostramos en la Proposicion 7 que $E$ es convexo y contiene a $A$. Si $B$ es convexo y $A \subseteq B$, toda combinacion convexa finita de puntos de $A$ pertenece a $B$ por convexidad iterada. Asi $E \subseteq B$. Como $\operatorname{co}(A)$ es la interseccion de todos los convexos que contienen $A$, $\operatorname{co}(A) \subseteq E$. Luego $E = \operatorname{co}(A)$. $\blacksquare$

### Solucion 13

La esfera unitaria $S = \{x : \|x\| = 1\}$ esta contenida en la bola abierta unitaria $B = \{x : \|x\| < 1\}$, y $B$ es convexo, luego $\operatorname{co}(S) \subseteq B$. Recprocamente, si $x \in B$, sea $t = \|x\| \in (0,1)$. Entonces $x = t \cdot (x/t) + (1-t) \cdot 0$, donde $x/t \in S$ y $0 \in S$. Asi $x$ es combinacion convexa de puntos de $S$, luego $B \subseteq \operatorname{co}(S)$. $\blacksquare$

### Solucion 14

Supongamos que $\partial C$ contiene un segmento $[a,b]$ con $a \ne b$. Como $a \in \partial C$, existen puntos de $C$ y de $X \setminus C$ arbitrariamente cercanos a $a$. Pero si el segmento entero esta en la frontera, puntos interiores cercanos a $a$ en direccion de $b$ estarian fuera de $C$, contradiciendo que el interior es no vacio y abierto. Alternativamente, por la propiedad del Ejercicio 8, si $x \in \operatorname{int}(C)$ y $y \in \overline{C}$, entonces $(x,y) \subseteq \operatorname{int}(C)$, asi la frontera no puede contener ningun segmento no degenerado. $\blacksquare$

### Solucion 15

$\Rightarrow$: Si la norma es estrictamente convexa y $x,y \in S$ con $x \ne y$, para $t \in (0,1)$, $\|\frac{1}{2}x + \frac{1}{2}y\| < 1$, asi el segmento no intersecta la esfera en puntos intermedios. $\Leftarrow$: Si la norma no es estrictamente convexa, existen $x,y \in S$ con $x \ne y$ y $\|tx + (1-t)y\| = 1$ para algn $t \in (0,1)$, lo que contradice la propiedad. $\blacksquare$

---

## Referencias y lecturas adicionales

1. Rudin, W. (1976). *Principles of Mathematical Analysis*. McGraw-Hill.
2. Kolmogorov, A.N. y Fomin, S.V. (1975). *Elementos de la teoria de funciones y del analisis funcional*. MIR.
3. Conway, J.B. (1994). *A Course in Functional Analysis*. Springer.
4. Yosida, K. (1980). *Functional Analysis*. Springer.
5. Schaefer, H.H. y Wolff, M.P. (1999). *Topological Vector Spaces*. Springer.
6. Holmes, R.B. (1975). *Geometric Functional Analysis and its Applications*. Springer.
