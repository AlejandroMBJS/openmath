---
title: Topologia producto
description: Producto topologico, base canonica, proyecciones, propiedad universal, separacion, compacidad y continuidad coordenada a coordenada.
---

# Topologia producto

## Motivacion

Cuando dos espacios topologicos se combinan en un producto cartesiano, no basta con decir que el conjunto subyacente es

$$
X\times Y.
$$

Hace falta elegir la topologia correcta. La eleccion natural es la mas pobre que hace continuas las proyecciones.

## Definicion para dos factores

Sean

$$
(X,\tau_X),
\qquad
(Y,\tau_Y)
$$

espacios topologicos.

La **topologia producto** en

$$
X\times Y
$$

es la topologia generada por la base formada por todos los conjuntos de la forma

$$
U\times V,
$$

donde

$$
U\in \tau_X,
\qquad
V\in \tau_Y.
$$

## Verificacion de base

La familia

$$
\mathcal{B}=\{U\times V: U\text{ abierto en }X,\ V\text{ abierto en }Y\}
$$

es efectivamente una base porque:

1. cubre

$$
X\times Y;
$$

2. la interseccion de dos elementos basicos contiene otro elemento basico alrededor de cada punto.

En efecto:

$$
(U_1\times V_1)\cap (U_2\times V_2)
=(U_1\cap U_2)\times (V_1\cap V_2),
$$

y la interseccion de abiertos sigue siendo abierta.

## Proyecciones canonicas

Las aplicaciones

$$
\pi_X:X\times Y\to X,
\qquad
\pi_Y:X\times Y\to Y
$$

definidas por

$$
\pi_X(x,y)=x,
\qquad
\pi_Y(x,y)=y
$$

se llaman proyecciones.

### Proposicion 1

Las proyecciones son continuas.

### Demostracion

Si

$$
U\subseteq X
$$

es abierto, entonces

$$
\pi_X^{-1}(U)=U\times Y,
$$

que es abierto en el producto. Analogamente para

$$
\pi_Y.
$$

## Propiedad universal

### Teorema 2

Sea

$$
Z
$$

un espacio topologico y

$$
f:Z\to X\times Y.
$$

Entonces

$$
f
$$

es continua si y solo si

$$
\pi_X\circ f
\qquad\text{y}\qquad
\pi_Y\circ f
$$

son continuas.

### Demostracion

Si

$$
f
$$

es continua, la composicion con las proyecciones tambien lo es.

Reciprocamente, supongamos continuas las coordenadas. Sea

$$
U\times V
$$

un abierto basico de

$$
X\times Y.
$$

Entonces

$$
f^{-1}(U\times V)
=
(\pi_X\circ f)^{-1}(U)\cap (\pi_Y\circ f)^{-1}(V),
$$

que es abierto en

$$
Z.
$$

Como basta verificar continuidad sobre una base, queda demostrado.

### Comentario

Esta propiedad universal caracteriza completamente la topologia producto.

## Continuidad coordenada a coordenada

Si

$$
f:Z\to X\times Y
$$

se escribe como

$$
f(z)=(f_1(z),f_2(z)),
$$

entonces

$$
f
$$

es continua si y solo si lo son

$$
f_1
$$

y

$$
f_2.
$$

## Ejemplos

### Plano euclideo

La topologia usual de

$$
\mathbb{R}^2
$$

coincide con el producto de la topologia usual de

$$
\mathbb{R}
$$

consigo misma.

### Rectangulos abiertos

Los conjuntos

$$
(a,b)\times (c,d)
$$

forman una base de

$$
\mathbb{R}^2.
$$

### Productos con espacio discreto

Si

$$
X
$$

es discreto, entonces los cilindros

$$
\{x\}\times V
$$

ya son basicos.

## Subbase del producto

Una subbase natural del producto de dos factores es

$$
\{\pi_X^{-1}(U):U\text{ abierto en }X\}
\cup
\{\pi_Y^{-1}(V):V\text{ abierto en }Y\}.
$$

En efecto:

$$
\pi_X^{-1}(U)\cap \pi_Y^{-1}(V)=U\times V.
$$

## Producto arbitrario

Para una familia

$$
\{X_i\}_{i\in I},
$$

el producto cartesiano

$$
\prod_{i\in I} X_i
$$

se dota de la topologia generada por los cilindros

$$
\pi_i^{-1}(U_i),
$$

donde

$$
U_i
$$

es abierto en

$$
X_i.
$$

### Base de producto arbitrario

Los abiertos basicos son productos

$$
\prod_{i\in I} U_i
$$

con

$$
U_i
$$

abierto en

$$
X_i
$$

y

$$
U_i=X_i
$$

para todos salvo finitamente muchos indices.

### Comentario

La restriccion "todos salvo finitamente muchos" es esencial. Si se permitieran infinitas restricciones simultaneas, se obtendria la topologia caja, normalmente demasiado fina.

## Separacion y producto

### Proposicion 3

Si

$$
X
$$

y

$$
Y
$$

son Hausdorff, entonces

$$
X\times Y
$$

es Hausdorff.

### Demostracion

Si

$$
(x_1,y_1)\ne (x_2,y_2),
$$

entonces al menos una coordenada difiere. Suponiendo

$$
x_1\ne x_2,
$$

tomamos abiertos disjuntos

$$
U_1,\ U_2
$$

en

$$
X
$$

con

$$
x_1\in U_1,\ x_2\in U_2.
$$

Entonces

$$
U_1\times Y
\qquad\text{y}\qquad
U_2\times Y
$$

son abiertos disjuntos del producto que separan los puntos.

## Conexidad y producto

Si

$$
X
$$

y

$$
Y
$$

son conexos, entonces

$$
X\times Y
$$

es conexo.

### Idea

Los subconjuntos

$$
\{x\}\times Y
$$

y

$$
X\times \{y\}
$$

son conexos y se cosen por intersecciones no vacias.

## Compacidad y producto

El producto finito de compactos es compacto. En productos arbitrarios, el teorema profundo es Tychonoff:

el producto arbitrario de espacios compactos es compacto.

### Comentario

Este resultado es una de las razones por las que la topologia producto es la nocion correcta.

## Subespacios del producto

Si

$$
A\subseteq X,\qquad B\subseteq Y,
$$

entonces la topologia de subespacio sobre

$$
A\times B\subseteq X\times Y
$$

coincide con la topologia producto de las topologias relativas de

$$
A
$$

y

$$
B.
$$

## Aplicaciones hacia productos

La propiedad universal del producto hace de este espacio el objeto correcto para empaquetar simultaneamente varias aplicaciones continuas.

Si

$$
f_i:Z\to X_i
$$

son continuas, entonces la aplicacion diagonal

$$
f:Z\to \prod_i X_i,
\qquad
f(z)=(f_i(z))_{i\in I}
$$

es continua.

## Producto y convergencia

En productos arbitrarios, la convergencia topologica se describe coordenada a coordenada.

### Comentario

Para sucesiones esta afirmacion puede ser insuficiente si el producto no es primero numerable, pero para la estructura topologica general la formulacion correcta usa redes o filtros.

## Topologia caja

La topologia caja sobre

$$
\prod_i X_i
$$

permite como basicos todos los productos de abiertos sin restriccion de finitud. Es mas fina que la topologia producto y suele destruir propiedades deseables como la compacidad de Tychonoff.

### Comentario

Distinguir producto de caja es obligatorio en topologia general madura.

## Cierre

La topologia producto es la estructura minima que hace continuas las proyecciones y simultaneamente la adecuada para continuidad coordenada a coordenada, compacidad de Tychonoff y una gran parte de la geometria topologica moderna.
