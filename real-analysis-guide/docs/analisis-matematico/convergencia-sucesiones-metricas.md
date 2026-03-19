---
title: Convergencia en metricos
description: Definicion de convergencia en espacios metricos, caracterizaciones equivalentes, continuidad de la distancia y consecuencias estructurales.
---

# Convergencia en metricos

## Motivacion e intuicion

La definicion de convergencia en $\mathbb{R}$ no usa suma, producto ni orden de manera esencial: usa solo la distancia al limite. Cuando escribimos

$$
|x_n-x|<\varepsilon,
$$

lo que realmente estamos diciendo es que los terminos de la sucesion terminan entrando en todas las bolas centradas en $x$.

Por eso la nocion de convergencia se transporta sin cambios a cualquier espacio metrico. La unica modificacion consiste en reemplazar el valor absoluto por la distancia general

$$
d(x_n,x).
$$

Este paso es conceptualmente importante: muchas propiedades del analisis no dependen de la recta real, sino solo de una estructura de distancia.

## Prerrequisitos

Conviene manejar:

- espacios metricos;
- bolas abiertas y entornos;
- convergencia de sucesiones reales;
- desigualdad triangular e inversa.

## Definiciones formales

Sea $(X,d)$ un espacio metrico y sea $(x_n)$ una sucesion en $X$.

### Convergencia

Decimos que $(x_n)$ **converge** a $x \in X$ si

$$
\forall \varepsilon>0\ \exists N \in \mathbb{N}\ \text{tal que}\ n \ge N \implies d(x_n,x)<\varepsilon.
$$

En ese caso escribimos

$$
x_n \to x
$$

o tambien

$$
\lim_{n\to\infty} x_n=x.
$$

### Divergencia

La sucesion $(x_n)$ es **divergente** si no converge a ningun punto de $X$.

### Propiedad eventual

Diremos que una propiedad $P(n)$ se cumple **eventualmente** si existe $N \in \mathbb{N}$ tal que

$$
n \ge N \implies P(n).
$$

La definicion de convergencia puede reescribirse asi:

$$
d(x_n,x)<\varepsilon
$$

debe cumplirse eventualmente para cada $\varepsilon>0$.

### Cola de una sucesion

Para $k \in \mathbb{N}$ fijo, la sucesion

$$
(x_{n+k})_{n \ge 1}
$$

se llama una **cola** de $(x_n)$.

## Interpretacion en lenguaje natural

La convergencia metrico-secuencial expresa que, dado cualquier margen de error alrededor de un punto $x$, toda la cola de la sucesion termina entrando dentro de ese margen.

No hace falta que los terminos alcancen a $x$.
No hace falta que el espacio tenga estructura algebraica.
No hace falta siquiera que exista una nocion de izquierda o derecha.

Solo importa esto: al avanzar suficientemente en la sucesion, la distancia al punto limite se hace tan pequena como se quiera.

## Ejemplos basicos

### Ejemplo 1: la recta real

En $(\mathbb{R},|\cdot|)$ esta definicion coincide exactamente con la definicion usual de convergencia real.

Por ejemplo,

$$
x_n=\frac1n
$$

converge a $0$ porque

$$
d(x_n,0)=\left|\frac1n\right|=\frac1n \to 0.
$$

### Ejemplo 2: convergencia en $\mathbb{R}^m$

En $\mathbb{R}^m$ con la metrica euclidea,

$$
x_n \to x
$$

significa que la norma euclidea

$$
\|x_n-x\|_2
$$

tiende a cero. En dimension finita esto es equivalente a la convergencia coordenada.

### Ejemplo 3: metrica discreta

Si $X$ tiene la metrica discreta, entonces una sucesion converge a $x$ si y solo si es eventualmente constante e igual a $x$.

En efecto, basta tomar

$$
\varepsilon=\frac12.
$$

Entonces la condicion

$$
d(x_n,x)<\frac12
$$

equivale a

$$
x_n=x.
$$

### Ejemplo 4: espacio de funciones con metrica del supremo

Sea

$$
X=C([0,1])
$$

con

$$
d(f,g)=\|f-g\|_\infty=\sup_{t \in [0,1]} |f(t)-g(t)|.
$$

La sucesion

$$
f_n(t)=\frac{t}{n}
$$

converge a la funcion nula, porque

$$
\|f_n-0\|_\infty=\sup_{t \in [0,1]} \frac{|t|}{n}=\frac1n \to 0.
$$

Esto es convergencia uniforme.

### Ejemplo 5: en un espacio de sucesiones

En $\ell^1$, si

$$
x^{(n)}=\left(\frac1n,0,0,\dots\right),
$$

entonces

$$
\|x^{(n)}\|_1=\frac1n \to 0,
$$

luego

$$
x^{(n)} \to 0 \quad \text{en } \ell^1.
$$

## Ejemplos finos y contraejemplos

### Ejemplo fino 1: el limite puede no aparecer nunca

En cualquier espacio metrico que contenga una sucesion de puntos distintos que se acerquen a un punto $x$, puede ocurrir que

$$
x_n \to x
$$

sin que nunca se tenga $x_n=x$.

En $\mathbb{R}$, por ejemplo,

$$
x_n=1-\frac1n \to 1,
$$

pero $x_n \ne 1$ para todo $n$.

### Ejemplo fino 2: cambiar un numero finito de terminos no altera el limite

La convergencia depende solo del comportamiento eventual. Por eso modificar $x_1,\dots,x_k$ no cambia ni la convergencia ni el limite.

### Contraejemplo 3: una sucesion acotada puede no converger

Si el espacio contiene dos puntos distintos $a,b$, la sucesion alternante

$$
a,b,a,b,\dots
$$

es acotada, pero no converge.

### Contraejemplo 4: la convergencia depende de la metrica

Sobre el mismo conjunto subyacente $\mathbb{R}$:

- con la metrica usual, la sucesion $1/n$ converge a $0$;
- con la metrica discreta, no converge a $0$, porque no es eventualmente constante.

Por tanto, converger no es una propiedad del conjunto desnudo, sino del par $(X,d)$.

### Contraejemplo 5: mismo conjunto de valores, comportamiento distinto

Las sucesiones

$$
(-1)^n
\qquad \text{y} \qquad
2+\frac{(-1)^n}{n}
$$

ambas oscilan. La primera no converge en $\mathbb{R}$; la segunda si converge a $2$.

Oscilar no basta para decidir convergencia: importa si la amplitud de la oscilacion desaparece.

### Ejemplo fino 6: una sucesion no convergente puede tener subsecuencias convergentes

En $\mathbb{R}$,

$$
x_n=(-1)^n
$$

no converge, pero tiene dos subsucesiones constantes:

$$
x_{2n}=1,
\qquad
x_{2n-1}=-1.
$$

## Proposiciones y teoremas

### Proposicion 1: caracterizacion por entornos

Sean $(X,d)$ un espacio metrico, $(x_n)$ una sucesion y $x \in X$. Entonces

$$
x_n \to x
$$

si y solo si para todo entorno $V$ de $x$ existe $N \in \mathbb{N}$ tal que

$$
n \ge N \implies x_n \in V.
$$

#### Demostracion

Supongamos primero que

$$
x_n \to x.
$$

Sea $V$ un entorno de $x$. Entonces existe $r>0$ tal que

$$
B(x,r)\subseteq V.
$$

Por convergencia, existe $N$ tal que

$$
n \ge N \implies d(x_n,x)<r.
$$

Esto significa

$$
x_n \in B(x,r)\subseteq V
$$

para todo $n \ge N$.

Reciprocamente, supongamos que toda vecindad de $x$ contiene eventualmente a la sucesion. Fijado $\varepsilon>0$, la bola

$$
B(x,\varepsilon)
$$

es un entorno de $x$, asi que existe $N$ tal que

$$
n \ge N \implies x_n \in B(x,\varepsilon).
$$

Es decir,

$$
n \ge N \implies d(x_n,x)<\varepsilon.
$$

Luego

$$
x_n \to x.
$$

### Proposicion 2: unicidad del limite

Si

$$
x_n \to x
\qquad \text{y} \qquad
x_n \to y,
$$

entonces

$$
x=y.
$$

#### Demostracion

Supongamos por contradiccion que

$$
x \ne y.
$$

Entonces

$$
d(x,y)>0.
$$

Tomamos

$$
\varepsilon=\frac{d(x,y)}{3}.
$$

Como $x_n \to x$, existe $N_1$ tal que

$$
n \ge N_1 \implies d(x_n,x)<\varepsilon.
$$

Como $x_n \to y$, existe $N_2$ tal que

$$
n \ge N_2 \implies d(x_n,y)<\varepsilon.
$$

Si $n \ge \max\{N_1,N_2\}$, por desigualdad triangular:

$$
d(x,y)\le d(x,x_n)+d(x_n,y)<2\varepsilon=\frac{2}{3}d(x,y),
$$

lo cual es imposible. Luego

$$
x=y.
$$

### Proposicion 3: toda cola conserva el limite

Si

$$
x_n \to x
$$

y $k \in \mathbb{N}$ es fijo, entonces

$$
x_{n+k} \to x.
$$

#### Demostracion

Sea $\varepsilon>0$. Como

$$
x_n \to x,
$$

existe $N$ tal que

$$
m \ge N \implies d(x_m,x)<\varepsilon.
$$

Si $n \ge N$, entonces tambien

$$
n+k \ge N,
$$

de modo que

$$
d(x_{n+k},x)<\varepsilon.
$$

Luego

$$
x_{n+k} \to x.
$$

### Corolario

Agregar, eliminar o modificar un numero finito de terminos iniciales no altera el limite.

### Proposicion 4: toda subsucesion conserva el limite

Si

$$
x_n \to x
$$

y $(x_{n_k})$ es una subsucesion, entonces

$$
x_{n_k} \to x.
$$

#### Demostracion

Sea $\varepsilon>0$. Como

$$
x_n \to x,
$$

existe $N$ tal que

$$
n \ge N \implies d(x_n,x)<\varepsilon.
$$

Como $n_k \to \infty$ y en particular $n_k \ge k$, existe $K$ tal que

$$
k \ge K \implies n_k \ge N.
$$

Por tanto, si $k \ge K$,

$$
d(x_{n_k},x)<\varepsilon.
$$

Luego

$$
x_{n_k} \to x.
$$

### Proposicion 5: toda sucesion convergente es acotada

Si

$$
x_n \to x,
$$

entonces la sucesion $(x_n)$ es acotada.

#### Demostracion

Tomamos $\varepsilon=1$. Existe $N$ tal que

$$
n \ge N \implies d(x_n,x)<1.
$$

Luego la cola queda contenida en la bola

$$
B(x,1).
$$

Los primeros terminos

$$
x_1,\dots,x_{N-1}
$$

son finitos en numero. Definimos

$$
M=\max\{d(x_1,x),\dots,d(x_{N-1},x),1\}.
$$

Entonces

$$
d(x_n,x)\le M
\qquad \text{para todo } n.
$$

Asi, la sucesion es acotada.

### Proposicion 6: continuidad de la distancia

Si

$$
x_n \to x
\qquad \text{y} \qquad
y_n \to y,
$$

entonces

$$
d(x_n,y_n)\to d(x,y).
$$

#### Demostracion

Por la desigualdad triangular inversa,

$$
|d(x_n,y_n)-d(x,y)|
\le |d(x_n,y_n)-d(x,y_n)| + |d(x,y_n)-d(x,y)|.
$$

Aplicando otra vez la desigualdad triangular inversa,

$$
|d(x_n,y_n)-d(x,y_n)|\le d(x_n,x),
$$

y

$$
|d(x,y_n)-d(x,y)|\le d(y_n,y).
$$

Por tanto

$$
|d(x_n,y_n)-d(x,y)|\le d(x_n,x)+d(y_n,y).
$$

El lado derecho tiende a $0$, luego

$$
d(x_n,y_n)\to d(x,y).
$$

### Corolario 1

Para cada $a \in X$, la funcion

$$
x \mapsto d(x,a)
$$

es continua.

### Corolario 2

Si $x_n \to x$, entonces para todo $a \in X$:

$$
d(x_n,a)\to d(x,a).
$$

### Proposicion 7: caracterizacion secuencial de los cerrados

Sea $F \subseteq X$. Entonces $F$ es cerrado si y solo si para toda sucesion $(x_n)$ en $F$ que satisfaga

$$
x_n \to x \quad \text{en } X,
$$

se tiene

$$
x \in F.
$$

#### Demostracion

Supongamos primero que $F$ es cerrado. Si $(x_n)$ es una sucesion en $F$ y

$$
x_n \to x,
$$

entonces necesariamente

$$
x \in F.
$$

En efecto, si $x \notin F$, entonces

$$
x \in X \setminus F.
$$

Como $X \setminus F$ es abierto, existe $r>0$ tal que

$$
B(x,r)\subseteq X \setminus F.
$$

Pero, como

$$
x_n \to x,
$$

existe $N$ tal que

$$
n \ge N \implies x_n \in B(x,r)\subseteq X \setminus F,
$$

lo cual contradice que todos los $x_n$ pertenecen a $F$. Luego

$$
x \in F.
$$

Reciprocamente, supongamos que toda sucesion en $F$ convergente en $X$ tiene su limite en $F$. Queremos probar que $F$ es cerrado.

Supongamos por contradiccion que $F$ no es cerrado. Entonces $X \setminus F$ no es abierto. Existe por tanto un punto

$$
x \in X \setminus F
$$

tal que para todo $r>0$ se cumple

$$
B(x,r)\cap F \ne \varnothing.
$$

En particular, para cada $n \in \mathbb{N}$ podemos elegir

$$
x_n \in F \cap B\left(x,\frac1n\right).
$$

Entonces

$$
d(x_n,x)<\frac1n,
$$

y por tanto

$$
x_n \to x.
$$

Como todos los $x_n$ pertenecen a $F$, la hipotesis implicaria

$$
x \in F,
$$

contradiccion. Luego $F$ es cerrado.

## Resumen conceptual

Convergencia en un espacio metrico significa entrada eventual en todas las bolas centradas en el limite. De esta definicion se derivan inmediatamente varias propiedades estructurales:

- el limite, si existe, es unico;
- toda cola y toda subsucesion conservan el mismo limite;
- toda sucesion convergente es acotada;
- la distancia es continua respecto de limites;
- los cerrados retienen los limites de sucesiones contenidas en ellos.

La gran idea es que toda esta teoria usa solo la metrica, no algebra ni orden.

## Ejemplos guiados finales

### Ejemplo guiado 1: convergencia coordenada en $\mathbb{R}^m$

Si usamos la metrica del supremo

$$
d_\infty(x,y)=\max_{1 \le j \le m}|x_j-y_j|,
$$

entonces

$$
x_n \to x
$$

si y solo si para cada coordenada $j$:

$$
x_n^{(j)} \to x^{(j)}.
$$

En efecto,

$$
d_\infty(x_n,x)<\varepsilon
$$

equivale a

$$
|x_n^{(j)}-x^{(j)}|<\varepsilon
\qquad \text{para todo } j.
$$

Como en dimension finita todas las normas son equivalentes, esta caracterizacion vale tambien para la metrica euclidea.

### Ejemplo guiado 2: la sucesion de vectores canonicos en $\ell^2$

Sea

$$
e_n=(0,\dots,0,1,0,\dots),
$$

con el $1$ en la coordenada $n$. Entonces

$$
\|e_n-e_m\|_2=\sqrt{2}
\qquad \text{si } n \ne m.
$$

Por tanto $(e_n)$ no es de Cauchy. Como toda sucesion convergente en un espacio metrico es de Cauchy, concluimos que $(e_n)$ no converge en $\ell^2$.

### Ejemplo guiado 3: por que la metrica discreta obliga a eventual constancia

Si

$$
x_n \to x
$$

en la metrica discreta, tomamos

$$
\varepsilon=\frac12.
$$

Entonces existe $N$ tal que

$$
n \ge N \implies d(x_n,x)<\frac12.
$$

Pero la unica forma de que la distancia discreta sea menor que $1/2$ es que sea $0$. Luego

$$
n \ge N \implies x_n=x.
$$

### Ejemplo guiado 4: las primeras posiciones no importan

Sea $(x_n)$ cualquier sucesion convergente y definamos

$$
y_1,\dots,y_k
$$

de manera arbitraria, y luego

$$
y_{n+k}=x_n.
$$

Entonces $(y_n)$ converge al mismo limite. Esto explica por que la convergencia es una propiedad asintotica y no una propiedad finita.

## Errores comunes

1. Pensar que la convergencia necesita estructura lineal.
2. Confundir convergencia con cercania de algunos terminos, en vez de cercania eventual de toda la cola.
3. Suponer que una sucesion acotada debe converger.
4. Olvidar que la convergencia depende de la metrica elegida.
5. Creer que una sucesion debe alcanzar su limite para converger.
6. Inferir la convergencia de la sucesion total solo porque una subsucesion converge.

## Cierre

La convergencia en metricos es la primera nocion secuencial verdaderamente universal del bloque. A partir de ella se formula la idea de Cauchy, se entiende la completitud y se conectan las propiedades topologicas con sucesiones concretas.
