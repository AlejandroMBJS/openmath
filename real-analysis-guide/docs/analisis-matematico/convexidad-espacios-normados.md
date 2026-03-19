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

## Ejercicios propuestos

1. Probar que la interseccion de una familia cualquiera de convexos es convexa.
2. Demostrar que la imagen de un convexo por una aplicacion lineal es convexa.
3. Probar que la preimagen de un convexo por una aplicacion lineal es convexa.
4. Mostrar que si $C$ es convexo, entonces $\alpha C+\beta C \subseteq (\alpha+\beta)C$ para $\alpha,\beta \ge 0$.
5. Verificar que la norma $\|\cdot\|_2$ es estrictamente convexa en $\mathbb{R}^n$.
6. Dar un ejemplo de conjunto cerrado no convexo y de conjunto convexo no cerrado.
7. Calcular la envolvente convexa de los puntos $(0,0)$, $(1,0)$ y $(0,1)$.

## Cierre

La convexidad es la geometria basal de los espacios normados. Las bolas son convexas porque la norma es convexa; la topologia lineal interactua con la convexidad a traves de clausuras e interiores; y desde aqui se preparan ideas mas avanzadas como Hahn-Banach, dualidad, optimizacion y teoria variacional.
