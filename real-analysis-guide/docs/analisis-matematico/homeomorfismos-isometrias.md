---
title: Homeomorfismos e isometrias
description: Equivalencias topologicas y metricas, invariantes que preservan y ejemplos finos en espacios metricos y normados.
---

# Homeomorfismos e isometrias

## Motivacion e intuicion

No toda forma de "ser el mismo espacio" preserva la misma cantidad de estructura.

- Un **homeomorfismo** preserva la estructura topologica: abiertos, cerrados, convergencia, compacidad, conexidad.
- Una **isometria** preserva ademas las distancias exactas.

Por eso una isometria es una equivalencia mas rigida que un homeomorfismo. Todo isomorfismo metrico es, en particular, una equivalencia topologica; el reciproco es falso en general.

Esta distincion es esencial en analisis. Muchas veces interesa saber si dos espacios son iguales solo desde el punto de vista de la continuidad. Otras veces interesa conservar informacion cuantitativa exacta, como diametros, longitudes o condicion de Cauchy.

## Prerrequisitos

Conviene manejar:

- continuidad entre espacios metricos;
- abiertos, cerrados y compacidad;
- convergencia de sucesiones;
- espacios normados y metrica inducida.

## Definiciones formales

Sean $(X,d_X)$ y $(Y,d_Y)$ espacios metricos.

### Homeomorfismo

Una aplicacion biyectiva

$$
f:X\to Y
$$

es un **homeomorfismo** si $f$ y $f^{-1}$ son continuas.

Cuando existe un homeomorfismo entre $X$ e $Y$, se dice que los espacios son **homeomorfos**.

### Isometria

Una aplicacion

$$
f:X\to Y
$$

es una **isometria** si para todo $x,y \in X$,

$$
d_Y(f(x),f(y))=d_X(x,y).
$$

Si ademas es biyectiva, se dice que $X$ e $Y$ son **isometricos**.

### Isometria sobre su imagen

Toda isometria

$$
f:X\to Y
$$

es una biyeccion entre $X$ y $f(X)$ que preserva distancias. Por tanto es un homeomorfismo entre $X$ y su imagen.

## Primeras propiedades

### Proposicion 1: toda isometria es inyectiva

#### Demostracion

Si $f(x)=f(y)$, entonces

$$
0=d_Y(f(x),f(y))=d_X(x,y),
$$

luego $x=y$.

### Proposicion 2: toda isometria es continua

De hecho, es Lipschitz con constante $1$:

$$
d_Y(f(x),f(y))=d_X(x,y)\le d_X(x,y).
$$

#### Demostracion

Es inmediata por la propia definicion. Si $x_n \to x$, entonces

$$
d_Y(f(x_n),f(x))=d_X(x_n,x)\to 0.
$$

### Corolario 3

Toda isometria sobreyectiva es un homeomorfismo.

#### Demostracion

Si $f$ es sobreyectiva, ya sabemos que es biyectiva y continua. La inversa $f^{-1}:Y\to X$ tambien es isometria, pues para $u=f(x)$ y $v=f(y)$,

$$
d_X(f^{-1}(u),f^{-1}(v))
=
d_X(x,y)
=
d_Y(f(x),f(y))
=
d_Y(u,v).
$$

En particular, $f^{-1}$ es continua.

## Invariantes preservados

### Por homeomorfismos

Si $f:X\to Y$ es homeomorfismo, entonces preserva:

- abiertos y cerrados;
- clausura e interior;
- compacidad;
- conexidad;
- convergencia topologica de sucesiones;
- separabilidad y segunda numerabilidad en el contexto metrico.

### Por isometrias

Ademas de todo lo anterior, una isometria preserva:

- distancias exactas;
- diametros;
- bolas abiertas y cerradas;
- sucesiones de Cauchy;
- total acotacion;
- completitud de la imagen.

### Proposicion 4: preservacion de bolas

Si $f:X\to Y$ es isometria, entonces para todo $a \in X$ y todo $r>0$,

$$
f(B_X(a,r)) = B_Y(f(a),r)\cap f(X).
$$

#### Demostracion

Si $x \in B_X(a,r)$, entonces

$$
d_Y(f(x),f(a))=d_X(x,a)<r,
$$

luego $f(x)\in B_Y(f(a),r)\cap f(X)$.

Reciprocamente, si $y \in B_Y(f(a),r)\cap f(X)$, existe $x \in X$ tal que $y=f(x)$, y entonces

$$
d_X(x,a)=d_Y(f(x),f(a))<r.
$$

## Caracterizaciones utiles de homeomorfismo

### Proposicion 5

Una biyeccion $f:X\to Y$ es homeomorfismo si y solo si lleva abiertos en abiertos y cerrados en cerrados.

#### Demostracion

Si $f$ es homeomorfismo, tanto $f$ como $f^{-1}$ son continuas. De ahi se deduce que $f$ lleva abiertos en abiertos y cerrados en cerrados.

Reciprocamente, si $f$ es biyectiva y lleva abiertos de $X$ en abiertos de $Y$, entonces para cualquier abierto $U\subseteq X$,

$$
f(U)
$$

es abierto en $Y$, lo que equivale a decir que $f^{-1}$ es continua. Si ademas $f$ es continua, resulta un homeomorfismo.

### Teorema 6: biyeccion continua desde compacto

Si $X$ es compacto e $Y$ es metrico, toda biyeccion continua

$$
f:X\to Y
$$

es homeomorfismo.

#### Demostracion

Como $X$ es compacto, para todo cerrado $F\subseteq X$ el conjunto $F$ es compacto. Su imagen $f(F)$ es compacta por continuidad, y en un espacio metrico todo compacto es cerrado. Luego $f$ lleva cerrados en cerrados. Siendo biyectiva, la aplicacion inversa es continua.

### Comentario

Este resultado es una herramienta fundamental: en espacios metricos, la compacidad compensa la dificultad de demostrar continuidad de la inversa.

## Ejemplos fundamentales

### Ejemplo 1: traslaciones en espacios normados

La aplicacion

$$
T_a(x)=x+a
$$

es una isometria, porque

$$
\|T_a(x)-T_a(y)\|=\|(x+a)-(y+a)\|=\|x-y\|.
$$

### Ejemplo 2: multiplicacion por un escalar de modulo $1$

En un espacio normado complejo,

$$
M_\lambda(x)=\lambda x,
\qquad
|\lambda|=1,
$$

es isometria:

$$
\|M_\lambda(x)-M_\lambda(y)\|
=
\|\lambda(x-y)\|
=
|\lambda|\,\|x-y\|
=
\|x-y\|.
$$

En el caso real, esto corresponde a $\lambda=\pm 1$.

### Ejemplo 3: un homeomorfismo no isometrico

La funcion

$$
f:\mathbb{R}\to\mathbb{R},
\qquad
f(x)=x^3
$$

es homeomorfismo. Es continua, biyectiva, y su inversa

$$
f^{-1}(y)=\sqrt[3]{y}
$$

es continua.

Pero no es isometria porque, por ejemplo,

$$
|f(1)-f(0)|=1
$$

mientras que

$$
|f(2)-f(1)|=7,
$$

y las distancias originales eran $1$ en ambos casos.

### Ejemplo 4: intervalos distintos pero homeomorfos

El intervalo abierto $(0,1)$ es homeomorfo a $\mathbb{R}$ mediante

$$
f(x)=\tan\left(\pi x-\frac{\pi}{2}\right).
$$

Esto muestra que la topologia no detecta acotacion metrica.

### Ejemplo 5: normas equivalentes

Si $\|\cdot\|_a$ y $\|\cdot\|_b$ son normas equivalentes sobre un mismo espacio vectorial $V$, la identidad

$$
\operatorname{id}: (V,\|\cdot\|_a)\to (V,\|\cdot\|_b)
$$

es un homeomorfismo. En general no es una isometria, salvo que ambas normas coincidan exactamente.

## Contraejemplos importantes

### Contraejemplo 1: biyeccion continua no implica homeomorfismo

La aplicacion

$$
f:[0,2\pi)\to S^1,
\qquad
f(t)=(\cos t,\sin t),
$$

es continua y biyectiva, pero no es homeomorfismo. La razon es que la inversa falla en ser continua cerca del punto $(1,0)$.

El ejemplo muestra que la biyectividad y continuidad de $f$ no bastan.

### Contraejemplo 2: homeomorfo no significa isometrico

El intervalo $(0,1)$ es homeomorfo a $\mathbb{R}$, pero no es isometrico a $\mathbb{R}$ con las metricas usuales. Una isometria preservaria diametros, y

$$
\operatorname{diam}((0,1))=1,
\qquad
\operatorname{diam}(\mathbb{R})=\infty.
$$

### Contraejemplo 3: un homeomorfismo puede destruir acotacion

La funcion anterior entre $(0,1)$ y $\mathbb{R}$ muestra que la acotacion no es un invariante topologico.

## Isometrias y completitud

### Proposicion 7

Si $f:X\to Y$ es una isometria, entonces una sucesion $(x_n)$ es de Cauchy en $X$ si y solo si $(f(x_n))$ es de Cauchy en $Y$.

#### Demostracion

Directamente,

$$
d_Y(f(x_n),f(x_m))=d_X(x_n,x_m).
$$

La condicion de Cauchy es exactamente la misma.

### Corolario 8

Si $X$ es completo, entonces $f(X)$ es completo con la metrica inducida de $Y$.

#### Demostracion

Sea $(y_n)$ una sucesion de Cauchy en $f(X)$. Escribimos

$$
y_n=f(x_n).
$$

Como $f$ es isometria, $(x_n)$ es de Cauchy en $X$. Por completitud, existe $x\in X$ tal que $x_n\to x$. Entonces

$$
y_n=f(x_n)\to f(x)\in f(X).
$$

## Isometrias y compacidad

### Proposicion 9

Una isometria lleva conjuntos compactos en conjuntos compactos.

#### Demostracion

Toda isometria es continua, asi que la imagen de un compacto es compacta.

### Proposicion 10

Si $f:X\to Y$ es isometria, entonces para todo $A\subseteq X$,

$$
\operatorname{diam}(f(A))=\operatorname{diam}(A).
$$

#### Demostracion

Por definicion,

$$
\operatorname{diam}(f(A))
=
\sup\{d_Y(f(x),f(y)):x,y\in A\}
=
\sup\{d_X(x,y):x,y\in A\}
=
\operatorname{diam}(A).
$$

## Homeomorfismos lineales en espacios normados

Sea $T:V\to W$ lineal y biyectiva entre espacios normados.

### Proposicion 11

Si $T$ y $T^{-1}$ son continuas, entonces $T$ es un homeomorfismo lineal.

### Comentario

En dimension finita, toda biyeccion lineal es automaticamente un homeomorfismo, porque toda aplicacion lineal es continua. En dimension infinita ya no es automatico.

### Ejemplo 6

La identidad

$$
\operatorname{id}:(\mathbb{R}^n,\|\cdot\|_1)\to (\mathbb{R}^n,\|\cdot\|_\infty)
$$

es un homeomorfismo lineal pero no una isometria.

## Homeomorfismos y convergencia

### Proposicion 12

Si $f:X\to Y$ es homeomorfismo, entonces

$$
x_n \to x
\iff
f(x_n)\to f(x).
$$

#### Demostracion

La implicacion directa sigue de la continuidad de $f$; la reciproca, aplicando la continuidad de $f^{-1}$ a la sucesion $f(x_n)$.

### Advertencia

Este criterio usa que $f$ es homeomorfismo, no solo biyectiva continua.

## Un criterio practico para descartar isometrias

Para mostrar que dos espacios no son isometricos basta encontrar una cantidad metrica que no coincide, por ejemplo:

- el diametro;
- la estructura exacta de bolas;
- la presencia de puntos aislados;
- el espectro de distancias realizables.

### Ejemplo 7

Un espacio discreto infinito no puede ser isometrico a un intervalo real, porque en el primero todas las distancias entre puntos distintos son iguales a $1$, mientras que en el segundo aparecen infinitos valores posibles de distancia.

## Errores comunes

- Confundir biyeccion continua con homeomorfismo.
- Creer que un homeomorfismo preserva longitudes, diametros o distancias.
- Olvidar que una isometria puede no ser sobreyectiva.
- Usar intuiciones de dimension finita en espacios normados infinito-dimensionales sin verificar continuidad de la inversa.
- Pensar que acotacion es un invariante topologico.

## Ejercicios propuestos

1. Probar que la composicion de homeomorfismos es un homeomorfismo.
2. Probar que la composicion de isometrias es una isometria.
3. Dar un ejemplo de dos espacios homeomorfos que no sean isometricos.
4. Mostrar que toda isometria entre espacios metricos preserva compacidad y total acotacion.
5. Verificar que la funcion $x\mapsto x^3$ es homeomorfismo de $\mathbb{R}$ en si mismo.
6. Probar que si $X$ es compacto y $Y$ es metrico, toda biyeccion continua $X\to Y$ es homeomorfismo.
7. Mostrar que la identidad entre dos normas equivalentes es homeomorfismo.

## Cierre

Homeomorfismos e isometrias comparan espacios a dos niveles distintos de fidelidad. El homeomorfismo conserva la forma topologica global; la isometria conserva la geometria cuantitativa exacta. En analisis es crucial distinguir ambas nociones para no confundir propiedades topologicas con propiedades metricas genuinas.

---

## Referencias y lecturas adicionales

1. Munkres, J.R. (2000). *Topology*. Prentice Hall.
2. Engelking, R. (1989). *General Topology*. Heldermann Verlag.
3. Willard, S. (2004). *General Topology*. Dover.
4. Bourbaki, N. (1989). *General Topology*, Chapters 1-4. Springer.
5. Rudin, W. (1976). *Principles of Mathematical Analysis*. McGraw-Hill.
6. Dieudonne, J. (1960). *Foundations of Modern Analysis*. Academic Press.
