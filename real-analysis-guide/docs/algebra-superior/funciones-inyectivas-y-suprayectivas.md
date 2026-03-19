---
title: Funciones inyectivas y suprayectivas
description: Inyectividad, suprayectividad, biyectividad, inversas y caracterizaciones por cancelacion.
---

# Funciones inyectivas y suprayectivas

## Motivacion e intuicion

No toda funcion conserva la misma cantidad de informacion. Algunas identifican puntos distintos, otras dejan partes del codominio sin cubrir y unas pocas hacen ambas cosas correctamente. Las nociones de inyectividad y suprayectividad miden exactamente esos dos fenomenos.

Desde un punto de vista estructural:

- la inyectividad dice que no se colapsan entradas distintas;
- la suprayectividad dice que todo punto objetivo es alcanzado;
- la biyectividad dice que la correspondencia es perfecta y puede invertirse.

## Prerrequisitos

Conviene manejar funciones, composicion, imagen y preimagen.

## Definiciones formales

Sea $f : A \to B$.

### Funcion inyectiva

$f$ es **inyectiva** si

$$
f(x_1)=f(x_2) \Rightarrow x_1=x_2
$$

para todos $x_1,x_2 \in A$.

### Funcion suprayectiva

$f$ es **suprayectiva** si

$$
\forall y \in B \ \exists x \in A \text{ tal que } f(x)=y.
$$

Equivalentemente,

$$
f(A)=B.
$$

### Funcion biyectiva

$f$ es **biyectiva** si es inyectiva y suprayectiva a la vez.

### Inversa

Si $f$ es biyectiva, la funcion

$$
f^{-1} : B \to A
$$

definida por

$$
f^{-1}(y)=x \iff f(x)=y
$$

se llama la **inversa** de $f$.

## Ejemplos basicos

### Ejemplo 1: inclusion

Si $A \subseteq B$, la inclusion canonica

$$
i : A \to B, \qquad i(x)=x
$$

es inyectiva.

Es suprayectiva si y solo si $A=B$.

### Ejemplo 2: cuadrado en los reales

La funcion

$$
f : \mathbb{R} \to \mathbb{R}, \qquad f(x)=x^2
$$

no es inyectiva porque

$$
f(1)=f(-1),
$$

y tampoco es suprayectiva porque no toma valores negativos.

### Ejemplo 3: exponencial

La funcion

$$
\exp : \mathbb{R} \to (0,\infty)
$$

es biyectiva. Su inversa es el logaritmo natural.

### Ejemplo 4: proyeccion sobre una coordenada

La aplicacion

$$
\pi_1 : A \times B \to A, \qquad \pi_1(a,b)=a
$$

es suprayectiva si $B \ne \varnothing$, pero en general no es inyectiva.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: inyectiva no implica suprayectiva

La funcion

$$
f : \mathbb{N} \to \mathbb{N}, \qquad f(n)=n+1
$$

es inyectiva, pero no es suprayectiva si $\mathbb{N}$ empieza en $1$, porque $1$ no esta en la imagen.

### Contraejemplo 2: suprayectiva no implica inyectiva

La funcion

$$
g : \mathbb{R} \to [0,\infty), \qquad g(x)=x^2
$$

es suprayectiva, pero no inyectiva.

### Contraejemplo 3: tener inversa unilateral no basta

Si

$$
f : \mathbb{R} \to [0,\infty), \qquad f(x)=x^2,
$$

y

$$
h : [0,\infty) \to \mathbb{R}, \qquad h(y)=\sqrt{y},
$$

entonces

$$
f \circ h = \operatorname{id}_{[0,\infty)},
$$

pero $h \circ f \ne \operatorname{id}_{\mathbb{R}}$.

## Proposiciones y teoremas centrales

### Proposicion 1: caracterizacion de inyectividad por cancelacion

Sea $f : A \to B$. Entonces $f$ es inyectiva si y solo si para todo conjunto $C$ y toda pareja de funciones

$$
g_1,g_2 : C \to A,
$$

se cumple

$$
f \circ g_1 = f \circ g_2 \Rightarrow g_1 = g_2.
$$

#### Demostracion

Si $f$ es inyectiva y $f \circ g_1 = f \circ g_2$, entonces para cada $c \in C$,

$$
f(g_1(c)) = f(g_2(c)).
$$

Por inyectividad,

$$
g_1(c)=g_2(c).
$$

Luego $g_1=g_2$.

Reciprocamente, toma $C=\{\ast\}$ y define $g_1(\ast)=x_1$, $g_2(\ast)=x_2$. Si $f(x_1)=f(x_2)$, entonces $f \circ g_1 = f \circ g_2$, por lo que $g_1=g_2$ y en particular $x_1=x_2$.

### Proposicion 2: caracterizacion de suprayectividad por resolucion de ecuaciones

$f : A \to B$ es suprayectiva si y solo si para todo $y \in B$, la ecuacion

$$
f(x)=y
$$

tiene al menos una solucion en $A$.

#### Comentario

Esta es la traduccion mas operativa de la suprayectividad.

### Proposicion 3: composicion de funciones inyectivas y suprayectivas

Si

$$
f : A \to B, \qquad g : B \to C,
$$

entonces:

1. si $f$ y $g$ son inyectivas, entonces $g \circ f$ es inyectiva;
2. si $f$ y $g$ son suprayectivas, entonces $g \circ f$ es suprayectiva;
3. si $f$ y $g$ son biyectivas, entonces $g \circ f$ es biyectiva.

#### Demostracion del caso inyectivo

Si

$$
g(f(x_1)) = g(f(x_2)),
$$

por inyectividad de $g$ se obtiene $f(x_1)=f(x_2)$, y por inyectividad de $f$ se concluye $x_1=x_2$.

Los otros casos son directos.

### Teorema 4: biyectividad e inversa bilateral

Una funcion $f : A \to B$ es biyectiva si y solo si existe una funcion

$$
g : B \to A
$$

tal que

$$
g \circ f = \operatorname{id}_A
$$

y

$$
f \circ g = \operatorname{id}_B.
$$

#### Demostracion

Si existe tal $g$, por los resultados de composicion, $f$ es inyectiva y suprayectiva.

Reciprocamente, si $f$ es biyectiva, para cada $y \in B$ existe un unico $x \in A$ con $f(x)=y$. Definimos $g(y)=x$. La unicidad garantiza que $g$ esta bien definida y por construccion satisface ambas identidades.

### Proposicion 5: unicidad de la inversa

Si $f$ es biyectiva, entonces su inversa bilateral es unica.

#### Demostracion

Si $g,h : B \to A$ satisfacen

$$
g \circ f = \operatorname{id}_A, \qquad f \circ g = \operatorname{id}_B,
$$

y tambien

$$
h \circ f = \operatorname{id}_A, \qquad f \circ h = \operatorname{id}_B,
$$

entonces

$$
g = g \circ \operatorname{id}_B = g \circ (f \circ h) = (g \circ f) \circ h = \operatorname{id}_A \circ h = h.
$$

## Errores comunes

1. Identificar "tener formula invertible" con ser biyectiva sin revisar dominio y codominio.
2. Confundir suprayectividad con "tomar muchos valores".
3. Probar inyectividad mirando solo algunos ejemplos.
4. Creer que la inversa existe como regla puntual aunque no haya unicidad de preimagen.

## Resumen operativo

- Inyectividad equivale a unicidad de preimagen.
- Suprayectividad equivale a cobertura total del codominio.
- Biyectividad equivale a existencia de inversa bilateral.
- La composicion preserva inyectividad y suprayectividad.
- Las leyes de cancelacion son expresiones estructurales de esas propiedades.

## Ejercicios

1. Decide si $f : \mathbb{R} \to \mathbb{R}$, $f(x)=x^3-x$, es inyectiva o suprayectiva.
2. Prueba que si $g \circ f$ es inyectiva, entonces $f$ es inyectiva.
3. Prueba que si $g \circ f$ es suprayectiva, entonces $g$ es suprayectiva.
4. Da un ejemplo donde $g \circ f$ sea biyectiva pero $f$ no sea suprayectiva sobre el dominio de $g$ considerado aisladamente.
5. Calcula la inversa de $f : \mathbb{R} \to \mathbb{R}$, $f(x)=3x-2$.
