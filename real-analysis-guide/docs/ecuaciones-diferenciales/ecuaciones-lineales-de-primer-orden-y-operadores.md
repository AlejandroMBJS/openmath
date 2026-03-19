---
title: Ecuaciones lineales de primer orden y operadores
description: Estructura operatorial, factor integrante, formula general, interpretacion afin del espacio de soluciones y ejemplos de ecuaciones lineales de primer orden.
---

# Ecuaciones lineales de primer orden y operadores

## La primera clase realmente estructural

La ecuacion

$$
y'+p(x)y=q(x)
$$

es el primer ejemplo serio donde se ve con claridad la ventaja del punto de vista lineal. No se resuelve solo por manipulacion formal: se resuelve porque el operador diferencial

$$
L[y]=y'+p(x)y
$$

es lineal y porque puede hacerse exacto mediante un factor integrante.

Este tema es central porque introduce ideas que reaparecen en toda la teoria lineal:

- nucleo de un operador;
- solucion particular mas solucion homogenea;
- espacios afines de soluciones;
- variacion de constantes;
- inversores integrales.

## Forma general

En un intervalo $I$, una ecuacion lineal de primer orden tiene la forma

$$
y'+p(x)y=q(x),
$$

donde $p$ y $q$ son funciones dadas.

### Homogenea asociada

$$
y'+p(x)y=0.
$$

### No homogenea

$$
y'+p(x)y=q(x).
$$

## El operador diferencial lineal

Definimos

$$
L:C^1(I)\to C^0(I),
\qquad
L[y]=y'+p(x)y.
$$

### Proposicion 1

El operador $L$ es lineal:

$$
L[\alpha y+\beta z]=\alpha L[y]+\beta L[z].
$$

#### Demostracion

Se tiene

$$
L[\alpha y+\beta z]
=
(\alpha y+\beta z)'+p(\alpha y+\beta z)
=
\alpha(y'+py)+\beta(z'+pz)
=
\alpha L[y]+\beta L[z].
$$

\qed

## La ecuacion homogenea

Primero resolvemos

$$
y'+p(x)y=0.
$$

Siempre que $y\ne 0$, podemos escribir

$$
\frac{y'}{y}=-p(x).
$$

Integrando:

$$
\ln|y(x)|=-\int p(x)\,dx + C.
$$

Entonces

$$
y_h(x)=Ce^{-\int p(x)\,dx}.
$$

### Observacion

No hace falta fijar una primitiva especifica. Si $P$ es una primitiva de $p$, entonces

$$
y_h(x)=Ce^{-P(x)}.
$$

Cambiar de primitiva solo absorbe una constante multiplicativa dentro de $C$.

## Factor integrante

La idea central es multiplicar la ecuacion por una funcion $\mu(x)$ de modo que el lado izquierdo se convierta en una derivada de producto.

Queremos

$$
\mu(x)y'+\mu(x)p(x)y=(\mu y)'.
$$

Como

$$
(\mu y)'=\mu y'+\mu' y,
$$

necesitamos

$$
\mu'=\mu p.
$$

Esto equivale a la ecuacion separable

$$
\frac{\mu'}{\mu}=p(x),
$$

cuya solucion es

$$
\mu(x)=e^{\int p(x)\,dx}.
$$

Esta funcion se llama factor integrante.

## Conjugacion operatorial

Si

$$
P'(x)=p(x),
$$

la identidad del factor integrante puede escribirse de forma mucho mas estructural:

$$
L[y]=y'+p(x)y=e^{-P(x)}\frac{d}{dx}\bigl(e^{P(x)}y(x)\bigr).
$$

Equivalentemente,

$$
L=e^{-P}De^{P},
$$

donde

$$
D=\frac{d}{dx}.
$$

### Lectura

Esto significa que el operador lineal de primer orden no es misterioso: es simplemente la derivada ordinaria vista en coordenadas torcidas por el peso

$$
e^{P(x)}.
$$

### Consecuencia

Resolver

$$
L[y]=q
$$

equivale a resolver

$$
\frac{d}{dx}\bigl(e^{P}y\bigr)=e^{P}q.
$$

O sea: despues de conjugar por el factor integrante, el problema vuelve a ser una integracion directa.

### Moral

El factor integrante no es un truco aislado. Es una equivalencia operatorial exacta entre una clase de operadores lineales y la derivada pura.

## Formula general de solucion

Multiplicando la ecuacion por $\mu$ obtenemos

$$
(\mu y)'=\mu q.
$$

Integrando,

$$
\mu(x)y(x)=\int \mu(x)q(x)\,dx+C.
$$

Por tanto

$$
y(x)=\frac{1}{\mu(x)}
\left(
C+\int \mu(x)q(x)\,dx
\right).
$$

Si $P' = p$, entonces una forma equivalente es

$$
y(x)=e^{-P(x)}
\left(
C+\int e^{P(x)}q(x)\,dx
\right).
$$

## Estructura afin del conjunto de soluciones

### Teorema 2

Si $y_p$ es una solucion particular de

$$
L[y]=q,
$$

entonces el conjunto de todas las soluciones es

$$
y_p+\ker L.
$$

#### Demostracion

Si $y$ es otra solucion, entonces

$$
L[y-y_p]=L[y]-L[y_p]=q-q=0,
$$

asi que

$$
y-y_p\in \ker L.
$$

Reciprocamente, si $z\in\ker L$, entonces

$$
L[y_p+z]=L[y_p]+L[z]=q+0=q.
$$

\qed

### Interpretacion

Las soluciones de la ecuacion no homogenea no forman un espacio vectorial, porque la suma de dos soluciones no vuelve a resolver la misma ecuacion. Forman un espacio afin paralelo al espacio vectorial de soluciones homogeneas.

## Variacion de la constante

La formula del factor integrante tambien puede interpretarse como variacion de la constante. Si la homogenea tiene soluciones

$$
y_h=Ce^{-P(x)},
$$

intentamos ahora

$$
y=u(x)e^{-P(x)},
$$

con $u$ variable.

Derivando:

$$
y'=u'e^{-P}-up e^{-P}.
$$

Al sustituir en

$$
y'+py=q,
$$

los terminos con $u$ se cancelan y queda

$$
u'(x)e^{-P(x)}=q(x).
$$

De aqui,

$$
u'(x)=e^{P(x)}q(x),
$$

e integrando se recupera la misma formula.

### Comentario

Esta interpretacion es importante porque generaliza directamente a las ecuaciones lineales de orden superior mediante variacion de parametros.

## Resolucion con condicion inicial

Si ademas se da

$$
y(x_0)=y_0,
$$

la constante queda determinada de manera unica.

Es especialmente util escribir la solucion en forma anclada en $x_0$:

$$
y(x)=e^{-(P(x)-P(x_0))}y_0
+
\int_{x_0}^x e^{-(P(x)-P(t))}q(t)\,dt.
$$

Esta formula separa:

- propagacion de la condicion inicial;
- contribucion acumulada del forzamiento.

## Nucleo de Green y propagador causal

La formula anclada en

$$
x_0
$$

puede escribirse como

$$
y(x)=\Phi(x,x_0)y_0+\int_{x_0}^x \Phi(x,t)q(t)\,dt,
$$

donde

$$
\Phi(x,t)=e^{-(P(x)-P(t))}
$$

es el **propagador** de la ecuacion homogenea.

### Propiedad de composicion

Para

$$
r\le t\le x,
$$

se cumple

$$
\Phi(x,t)\Phi(t,r)=\Phi(x,r).
$$

Esta es la version de primer orden de la ley de semigrupo.

### Nucleo de Green causal

Definiendo

$$
G(x,t)=
\begin{cases}
\Phi(x,t), & t\le x,\\
0, & t>x,
\end{cases}
$$

la solucion puede escribirse tambien como

$$
y(x)=\Phi(x,x_0)y_0+\int_I G(x,t)q(t)\,dt,
$$

entendiendo que el soporte efectivo del nucleo esta en

$$
t\le x.
$$

### Lectura

El valor de

$$
y(x)
$$

solo depende del pasado entre

$$
x_0
$$

y

$$
x.
$$

Eso es causalidad: el forzamiento futuro no influye en el presente.

### Por que esta forma importa

Esta escritura:

- separa claramente dinamica homogenea y forzamiento;
- prepara la notacion de Duhamel para sistemas y EDP;
- convierte la ecuacion en un operador integral lineal.

## Existencia y unicidad

Si $p$ y $q$ son continuas en un intervalo $I$, entonces para cada dato inicial

$$
y(x_0)=y_0
$$

existe una unica solucion en todo $I$.

### Dos maneras de verlo

- por el teorema general de Picard-Lindelof, ya que

$$
f(x,y)=q(x)-p(x)y
$$

es localmente Lipschitz en $y$;
- por la formula explicita del factor integrante, que construye directamente la solucion.

## Ejemplo 1: coeficientes constantes

Resolvamos

$$
y'+2y=e^x.
$$

Aqui

$$
p(x)=2,
\qquad
q(x)=e^x.
$$

Un factor integrante es

$$
\mu(x)=e^{2x}.
$$

Entonces

$$
(e^{2x}y)'=e^{3x}.
$$

Integrando:

$$
e^{2x}y=\frac{1}{3}e^{3x}+C.
$$

Por tanto

$$
y(x)=\frac{1}{3}e^x+Ce^{-2x}.
$$

## Ejemplo 2: con condicion inicial

Resolvamos

$$
y'+y=1,
\qquad
y(0)=2.
$$

El factor integrante es

$$
\mu(x)=e^x.
$$

Entonces

$$
(e^xy)'=e^x.
$$

Integrando:

$$
e^xy=e^x+C.
$$

Luego

$$
y=1+Ce^{-x}.
$$

Imponiendo $y(0)=2$:

$$
2=1+C,
$$

de donde

$$
C=1.
$$

Solucion:

$$
y(x)=1+e^{-x}.
$$

## Ejemplo 3: coeficiente variable

Resolvamos

$$
y'+\frac{2}{x}y=x^2,
\qquad x>0.
$$

El factor integrante es

$$
\mu(x)=e^{\int 2/x\,dx}=e^{2\ln x}=x^2.
$$

Multiplicando:

$$
(x^2y)'=x^4.
$$

Integramos:

$$
x^2y=\frac{x^5}{5}+C.
$$

Finalmente,

$$
y(x)=\frac{x^3}{5}+\frac{C}{x^2}.
$$

## Ejemplo 4: modelo de relajacion

La ecuacion

$$
y'+ky=b,
\qquad k>0,
$$

aparece en enfriamiento, circuitos y mezclas.

Su solucion es

$$
y(x)=\frac{b}{k}+Ce^{-kx}.
$$

Interpretacion:

- $\dfrac{b}{k}$ es el estado de equilibrio;
- el termino $Ce^{-kx}$ describe la relajacion hacia ese equilibrio.

## Operador inverso formal

De manera formal, resolver

$$
(D+p)y=q
$$

equivale a aplicar un inverso de $D+p$. Aunque no siempre se trabaja con esta notacion de forma rigurosa, es util conceptualmente:

- la parte homogenea es el nucleo de $D+p$;
- la parte particular es una inversion modulo el nucleo.

Esta perspectiva prepara el terreno para operadores de orden superior.

## Error comun 1: usar mal el factor integrante

El error mas frecuente es tomar

$$
\mu=e^{p(x)}
$$

en lugar de

$$
\mu=e^{\int p(x)\,dx}.
$$

El exponente debe ser una primitiva de $p$, no la funcion $p$ misma.

## Error comun 2: perder la constante de integracion

Cuando se integra

$$
(\mu y)'=\mu q,
$$

hay que escribir

$$
\mu y=\int \mu q\,dx + C.
$$

Olvidar esa constante equivale a perder toda la familia homogenea.

## Error comun 3: dividir por y cuando y puede anularse

En la homogenea, la manipulacion

$$
\frac{y'}{y}=-p
$$

debe entenderse como una derivacion formal sobre intervalos donde $y\ne 0$. La formula final se justifica globalmente por el metodo del factor integrante.

## Relacion con otras clases de ecuaciones

Una ecuacion lineal de primer orden puede verse simultaneamente como:

- ecuacion lineal;
- caso particular resoluble por factor integrante;
- problema de existencia y unicidad global bajo continuidad;
- prototipo de ecuacion afine.

Esta posicion intermedia la vuelve un tema puente entre las tecnicas elementales y la teoria lineal general.

## Practica guiada

### Ejercicio 1

Resuelve

$$
y'-3y=6.
$$

#### Solucion

El factor integrante es

$$
\mu=e^{-3x}.
$$

Entonces

$$
(e^{-3x}y)'=6e^{-3x}.
$$

Integrando:

$$
e^{-3x}y=-2e^{-3x}+C.
$$

Luego

$$
y(x)=-2+Ce^{3x}.
$$

### Ejercicio 2

Resuelve

$$
y'+\frac{1}{x}y=\sin x,
\qquad x>0.
$$

#### Solucion

El factor integrante es

$$
\mu(x)=e^{\int 1/x\,dx}=x.
$$

Entonces

$$
(xy)'=x\sin x.
$$

Integramos por partes:

$$
\int x\sin x\,dx=-x\cos x+\sin x.
$$

Por tanto

$$
xy=-x\cos x+\sin x+C,
$$

y

$$
y(x)=-\cos x+\frac{\sin x}{x}+\frac{C}{x}.
$$

### Ejercicio 3

Explica por que el conjunto de soluciones de

$$
y'+p(x)y=q(x)
$$

no es un espacio vectorial salvo que $q\equiv 0$.

#### Solucion

Si $y_1$ e $y_2$ son soluciones, entonces

$$
L[y_1+y_2]=q+q=2q,
$$

que en general no coincide con $q$. Por tanto la suma de soluciones no vuelve a ser solucion. El conjunto es afin, no vectorial.

## Cierre

La ecuacion lineal de primer orden es mucho mas que una tecnica de factor integrante. Es el primer lugar donde se ve de forma transparente la organizacion completa de la teoria lineal:

- operador;
- nucleo;
- solucion particular;
- estructura afin;
- propagacion de condiciones iniciales.

Si esta pagina queda bien entendida, muchas formulas posteriores de la teoria lineal dejan de verse como artificios y pasan a ser extensiones naturales del mismo mecanismo.
