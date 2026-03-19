---
title: Conjuntos abiertos en metricos
description: Definicion de abierto, abiertos relativos, caracterizaciones operativas y propiedades estructurales en espacios metricos.
---

# Conjuntos abiertos en metricos

## Motivacion e intuicion

En $\mathbb{R}$ estamos acostumbrados a pensar que los conjuntos "sin borde incluido" son abiertos. Pero esa intuicion geometrica se vuelve ambigua fuera de la recta: en un espacio de funciones, en un espacio de sucesiones o en un conjunto abstracto con una metrica exotica, ya no hay dibujo evidente del borde.

La definicion correcta no depende de figuras, sino de **margen local**. Un conjunto es abierto cuando cada uno de sus puntos admite un pequeno radio de seguridad que permanece totalmente contenido en el conjunto. Dicho de otro modo: si uno esta dentro de un abierto, puede moverse un poco sin salir.

Esta nocion es el primer objeto genuinamente topologico inducido por una metrica. A partir de ella se definen interior, cerrados, clausura, continuidad, compacidad y separacion.

## Prerrequisitos

Conviene manejar:

- definicion de espacio metrico;
- bolas abiertas y cerradas;
- desigualdad triangular y desigualdad triangular inversa;
- convergencia basica de sucesiones y nocion de subespacio.

## Definiciones formales

Sea $(X,d)$ un espacio metrico y sea $U \subseteq X$.

### Punto interior

Un punto $x \in U$ se llama **punto interior** de $U$ si existe $r>0$ tal que

$$
B(x,r)\subseteq U.
$$

### Conjunto abierto

Decimos que $U$ es **abierto** si todo punto de $U$ es interior, es decir, si

$$
\forall x \in U\ \exists r>0 \text{ tal que } B(x,r)\subseteq U.
$$

### Entorno

Un conjunto $V \subseteq X$ es un **entorno** de $x \in X$ si existe $r>0$ tal que

$$
B(x,r)\subseteq V.
$$

Por tanto, $U$ es abierto si y solo si es entorno de cada uno de sus puntos.

### Interior de un conjunto

El **interior** de $A \subseteq X$, denotado por $\operatorname{int}(A)$, es el conjunto de todos los puntos interiores de $A$:

$$
\operatorname{int}(A)=\{x \in A : \exists r>0 \text{ con } B(x,r)\subseteq A\}.
$$

### Abierto relativo o abierto en el subespacio

Si $Y \subseteq X$, un conjunto $V \subseteq Y$ se dice **abierto en $Y$** si para cada $y \in V$ existe $r>0$ tal que

$$
B_Y(y,r)\subseteq V,
$$

donde $B_Y(y,r)=B_X(y,r)\cap Y$ es la bola en la metrica inducida.

## Interpretacion en lenguaje natural

La definicion de abierto es local. No pregunta por la forma global del conjunto, sino por lo que ocurre alrededor de cada punto individual.

- Si un punto esta "bien metido" dentro del conjunto, existe una bola centrada en el que no toca el exterior.
- Si un punto esta pegado al borde, toda bola alrededor suyo sale parcialmente del conjunto, y entonces ese punto no es interior.
- Un abierto puede ser muy irregular globalmente, siempre que localmente tenga ese pequeno margen en cada punto.

Lo esencial es que la condicion se formula enteramente con la metrica. Por eso la nocion de abierto se transporta a contextos muy distintos sin cambiar una sola palabra de la definicion.

## Ejemplos basicos

### Ejemplo 1: intervalos abiertos en $\mathbb{R}$

En $(\mathbb{R},|\cdot|)$, el intervalo $(a,b)$ es abierto. Si $x \in (a,b)$, basta tomar

$$
r=\min\{x-a,b-x\}>0.
$$

Entonces

$$
(x-r,x+r)\subseteq (a,b).
$$

En cambio, $[a,b]$ no es abierto: en el punto $a$ toda bola contiene puntos menores que $a$.

### Ejemplo 2: toda bola abierta es un abierto

Si $x \in B(a,r)$, entonces

$$
d(x,a)<r.
$$

Tomando

$$
\rho=r-d(x,a)>0,
$$

se obtiene

$$
B(x,\rho)\subseteq B(a,r).
$$

Este ejemplo es importante porque muestra que las bolas forman los bloques elementales de todos los abiertos.

### Ejemplo 3: abiertos en $\mathbb{R}^n$

Con la metrica euclidea, un disco abierto, una bola abierta o un rectangulo abierto

$$
(a_1,b_1)\times \cdots \times (a_n,b_n)
$$

son abiertos. No hace falta que el abierto sea una sola bola: basta que alrededor de cada punto pueda inscribirse alguna.

### Ejemplo 4: metrica discreta

Si

$$
d(x,y)=
\begin{cases}
0,& x=y,\\
1,& x \ne y,
\end{cases}
$$

entonces toda parte de $X$ es abierta, porque para cualquier $x \in A$ se cumple

$$
B(x,1/2)=\{x\}\subseteq A.
$$

La topologia discreta es, por tanto, la topologia mas fina posible.

### Ejemplo 5: abiertos relativos

Sea $Y=[0,1] \subseteq \mathbb{R}$ con la metrica usual restringida. El conjunto

$$
[0,1/2)
$$

no es abierto en $\mathbb{R}$, pero si es abierto en $Y$, porque

$$
[0,1/2)=Y \cap (-1,1/2).
$$

Este ejemplo obliga a distinguir con cuidado entre abierto en el espacio ambiente y abierto en el subespacio.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: no todo subconjunto de $\mathbb{R}$ es abierto

El singleton $\{0\}$ no es abierto en $\mathbb{R}$. En efecto, cualquier intervalo

$$
(-r,r)
$$

contiene puntos distintos de $0$.

### Contraejemplo 2: $\mathbb{Q}$ no es abierto en $\mathbb{R}$

Dado $q \in \mathbb{Q}$ y $r>0$, el intervalo $(q-r,q+r)$ contiene irracionales. Luego no puede estar contenido en $\mathbb{Q}$. Por tanto $\mathbb{Q}$ no es abierto en $\mathbb{R}$.

Este ejemplo muestra que un conjunto puede ser muy grande y aun asi no ser abierto.

### Contraejemplo 3: la interseccion infinita de abiertos puede dejar de ser abierta

En $\mathbb{R}$ consideremos

$$
U_n=\left(-\frac1n,\frac1n\right).
$$

Cada $U_n$ es abierto, pero

$$
\bigcap_{n=1}^\infty U_n=\{0\},
$$

y $\{0\}$ no es abierto.

### Ejemplo fino 4: un conjunto puede ser abierto y cerrado

En la metrica discreta, todo subconjunto es abierto y cerrado a la vez. Esto no contradice nada: "abierto" y "cerrado" no son propiedades opuestas.

### Ejemplo fino 5: una bola cerrada puede ser abierta

En la metrica discreta,

$$
\overline{B}(x,1/2)=\{x\},
$$

que es abierta. La intuicion euclidea de "cerrado = incluye el borde" no debe tomarse como definicion.

### Ejemplo fino 6: abierto relativo pero no abierto absoluto

Tomando otra vez $Y=[0,1]$, el conjunto

$$
(0,1]
$$

es abierto en $Y$ porque

$$
(0,1]=Y \cap (0,2),
$$

pero no es abierto en $\mathbb{R}$.

## Proposiciones y teoremas

### Proposicion 1: el vacio y todo el espacio son abiertos

Los conjuntos

$$
\varnothing \qquad \text{y} \qquad X
$$

son abiertos.

#### Demostracion

El vacio es abierto porque la condicion "para todo punto del conjunto" es vacuamente cierta: no hay puntos que verificar.

Para $X$, si $x \in X$, cualquier bola $B(x,r)$ con $r>0$ satisface

$$
B(x,r)\subseteq X.
$$

Luego $X$ es abierto.

### Proposicion 2: union arbitraria de abiertos

Si $\{U_i\}_{i \in I}$ es una familia cualquiera de abiertos, entonces

$$
\bigcup_{i \in I} U_i
$$

es abierto.

#### Demostracion

Sea

$$
U=\bigcup_{i \in I} U_i.
$$

Tomemos $x \in U$. Entonces existe $j \in I$ tal que

$$
x \in U_j.
$$

Como $U_j$ es abierto, existe $r>0$ con

$$
B(x,r)\subseteq U_j.
$$

Pero entonces

$$
B(x,r)\subseteq U_j \subseteq U.
$$

Luego $x$ es interior a $U$, y por tanto $U$ es abierto.

### Proposicion 3: interseccion finita de abiertos

Si $U_1,\dots,U_m$ son abiertos, entonces

$$
\bigcap_{k=1}^m U_k
$$

es abierto.

#### Demostracion

Basta probarlo para dos abiertos. Sea $x \in U \cap V$. Como $U$ y $V$ son abiertos, existen $r_1,r_2>0$ tales que

$$
B(x,r_1)\subseteq U,
\qquad
B(x,r_2)\subseteq V.
$$

Si definimos

$$
r=\min\{r_1,r_2\},
$$

entonces

$$
B(x,r)\subseteq B(x,r_1)\cap B(x,r_2)\subseteq U \cap V.
$$

Asi, $U \cap V$ es abierto. El caso finito se obtiene por induccion.

### Observacion

La finitud es esencial. La interseccion arbitraria de abiertos puede dejar de ser abierta, como muestra el ejemplo de los intervalos $(-1/n,1/n)$.

### Proposicion 4: todo abierto es union de bolas abiertas

Si $U \subseteq X$ es abierto, entonces

$$
U=\bigcup_{x \in U} B(x,r_x)
$$

para una familia adecuada de radios $r_x>0$.

#### Demostracion

Como $U$ es abierto, para cada $x \in U$ existe $r_x>0$ tal que

$$
B(x,r_x)\subseteq U.
$$

Esto implica

$$
\bigcup_{x \in U} B(x,r_x)\subseteq U.
$$

La inclusion contraria es inmediata, porque cada $x \in U$ pertenece a su propia bola $B(x,r_x)$. Luego ambas partes coinciden.

### Corolario

Las bolas abiertas forman una base para la topologia inducida por la metrica.

### Proposicion 5: criterio con bola cerrada interna

Si $U$ es abierto y $x \in U$, entonces existe $r>0$ tal que

$$
\overline{B}(x,r)\subseteq U.
$$

#### Demostracion

Como $U$ es abierto, existe $\rho>0$ tal que

$$
B(x,\rho)\subseteq U.
$$

Tomamos

$$
r=\frac{\rho}{2}.
$$

Si $y \in \overline{B}(x,r)$, entonces

$$
d(x,y)\le r=\frac{\rho}{2}<\rho,
$$

asi que

$$
y \in B(x,\rho)\subseteq U.
$$

Por tanto

$$
\overline{B}(x,r)\subseteq U.
$$

Este resultado es util cuando hace falta trabajar con cerrados contenidos en un abierto.

### Proposicion 6: caracterizacion de los abiertos relativos

Sea $Y \subseteq X$ con la metrica inducida y sea $V \subseteq Y$. Entonces $V$ es abierto en $Y$ si y solo si existe un abierto $G \subseteq X$ tal que

$$
V=Y \cap G.
$$

#### Demostracion

Supongamos primero que $V$ es abierto en $Y$. Para cada $y \in V$ existe $r_y>0$ tal que

$$
B_Y(y,r_y)\subseteq V.
$$

Pero

$$
B_Y(y,r_y)=B_X(y,r_y)\cap Y.
$$

Definimos

$$
G=\bigcup_{y \in V} B_X(y,r_y).
$$

Como union de abiertos en $X$, el conjunto $G$ es abierto. Ademas, claramente $V \subseteq Y \cap G$. Reciprocamente, si $z \in Y \cap G$, entonces $z \in B_X(y,r_y)$ para algun $y \in V$, luego

$$
z \in B_X(y,r_y)\cap Y=B_Y(y,r_y)\subseteq V.
$$

Por tanto

$$
V=Y \cap G.
$$

Para la implicacion contraria, supongamos que

$$
V=Y \cap G
$$

con $G$ abierto en $X$. Si $y \in V$, como $y \in G$ y $G$ es abierto, existe $r>0$ tal que

$$
B_X(y,r)\subseteq G.
$$

Intersectando con $Y$:

$$
B_Y(y,r)=B_X(y,r)\cap Y\subseteq G \cap Y=V.
$$

Luego $V$ es abierto en $Y$.

### Proposicion 7: relacion con los cerrados

Un conjunto $F \subseteq X$ es cerrado si y solo si su complemento

$$
X \setminus F
$$

es abierto.

#### Comentario

Esta equivalencia no es una observacion secundaria: es una de las dos caras basicas de la topologia metrico. Muchas veces es mas sencillo probar que un conjunto es cerrado demostrando que su complemento es abierto, y al reves.

## Resumen conceptual

La nocion de abierto no describe una forma concreta, sino una propiedad local de estabilidad por pequenas perturbaciones.

- local: se verifica punto por punto;
- metrico: solo depende de bolas y distancias;
- estructural: es estable por uniones arbitrarias e intersecciones finitas;
- flexible: cambia con la metrica elegida;
- relativa: un conjunto puede ser abierto en un subespacio sin serlo en el espacio ambiente.

En un espacio metrico, hablar de abiertos es empezar a hablar de topologia.

## Ejemplos guiados finales

### Ejemplo guiado 1: por que $(0,1]$ no es abierto en $\mathbb{R}$

El unico punto del conjunto que puede fallar de manera inmediata es $1$. Y en efecto, $1$ no es interior, porque por ejemplo

$$
B(1,1/4)=(3/4,5/4)
$$

no queda contenido en $(0,1]$.

Esto muestra justamente que $1$ no es interior. Toda bola centrada en $1$ contiene puntos mayores que $1$, luego sale del conjunto. Por tanto $(0,1]$ no es abierto en $\mathbb{R}$.

### Ejemplo guiado 2: por que $[0,1/2)$ si es abierto en $[0,1]$

Consideremos el subespacio

$$
Y=[0,1].
$$

Para el punto $0$, aunque ninguna bola de $\mathbb{R}$ centrada en $0$ cabe en $[0,1/2)$, si miramos en el subespacio se tiene

$$
B_Y(0,1/4)=B_{\mathbb{R}}(0,1/4)\cap [0,1]=[0,1/4)\subseteq [0,1/2).
$$

Los demas puntos se tratan igual que en la recta usual. Luego $[0,1/2)$ es abierto relativo.

### Ejemplo guiado 3: por que $\mathbb{Q}$ no es abierto

Sea $q \in \mathbb{Q}$. Dado $r>0$, el numero

$$
q+\frac{r}{\sqrt{2}}
$$

pertenece a $(q-r,q+r)$ y es irracional. Luego ninguna bola alrededor de $q$ queda contenida en $\mathbb{Q}$.

### Ejemplo guiado 4: abierto no significa simple

El conjunto

$$
U=\bigcup_{n=1}^\infty \left(n-\frac1{10},n+\frac1{10}\right)
$$

es abierto en $\mathbb{R}$, aunque este formado por infinitas componentes disjuntas. La apertura no exige conectividad ni forma elemental.

## Errores comunes

1. Confundir "abierto" con "sin extremos dibujados". Esa intuicion sirve en la recta, pero no es la definicion general.
2. Pensar que basta con revisar algunos puntos del conjunto y no todos.
3. Olvidar que el radio puede depender del punto.
4. Suponer que la interseccion arbitraria de abiertos sigue siendo abierta.
5. Confundir abierto en un subespacio con abierto en el espacio ambiente.
6. Creer que abierto y cerrado son propiedades excluyentes.

## Cierre

Los conjuntos abiertos son la puerta de entrada real a la topologia de espacios metricos. Una vez dominada esta nocion, las definiciones de interior, clausura, continuidad y compacidad dejan de ser una lista de formalismos y empiezan a verse como consecuencias naturales de la estructura local dada por las bolas.
