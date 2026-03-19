---
title: Composicion entre funciones
description: Composicion, identidad, asociatividad, cancelacion y primeras nociones de inversa.
---

# Composicion entre funciones

## Motivacion e intuicion

Las funciones no solo se estudian por separado. Lo realmente estructural aparece cuando se encadenan. Si una aplicacion lleva elementos de $A$ a $B$ y otra lleva elementos de $B$ a $C$, la composicion permite pasar directamente de $A$ a $C$.

La composicion es el mecanismo con el que se construyen cambios de coordenadas, operadores iterados, proyecciones, inclusiones y, en general, cualquier proceso matematico en varias etapas.

## Prerrequisitos

Conviene dominar funciones entre conjuntos y la distincion entre dominio, codominio e imagen.

## Definiciones formales

### Composicion

Sean

$$
f : A \to B, \qquad g : B \to C.
$$

La **composicion** de $g$ con $f$ es la funcion

$$
g \circ f : A \to C
$$

definida por

$$
(g \circ f)(x) = g(f(x)).
$$

El orden importa: primero se aplica $f$ y luego $g$.

### Funcion identidad

Para todo conjunto $A$, la funcion

$$
\operatorname{id}_A : A \to A, \qquad \operatorname{id}_A(x)=x
$$

se llama **identidad** de $A$.

### Inversa unilateral

Si $f : A \to B$, una funcion $g : B \to A$ es:

- **inversa por la izquierda** si $g \circ f = \operatorname{id}_A$;
- **inversa por la derecha** si $f \circ g = \operatorname{id}_B$.

## Ejemplos basicos

### Ejemplo 1: composicion numerica

Sean

$$
f : \mathbb{R} \to \mathbb{R}, \qquad f(x)=x+1,
$$

$$
g : \mathbb{R} \to \mathbb{R}, \qquad g(x)=x^2.
$$

Entonces

$$
(g \circ f)(x) = (x+1)^2,
$$

pero

$$
(f \circ g)(x) = x^2+1.
$$

En general, no son iguales.

### Ejemplo 2: composicion con inclusion

Si $A \subseteq B \subseteq C$, las inclusiones canonicas satisfacen

$$
i_{B,C} \circ i_{A,B} = i_{A,C}.
$$

### Ejemplo 3: identidad

Para toda funcion $f : A \to B$,

$$
f \circ \operatorname{id}_A = f, \qquad \operatorname{id}_B \circ f = f.
$$

## Ejemplos finos y contraejemplos

### Contraejemplo 1: composicion no conmutativa

El ejemplo anterior con $f(x)=x+1$ y $g(x)=x^2$ muestra que, en general,

$$
g \circ f \ne f \circ g.
$$

### Contraejemplo 2: para componer hace falta compatibilidad

Si

$$
f : A \to B, \qquad g : C \to D,
$$

y $B$ no coincide con el dominio de $g$, no siempre tiene sentido escribir $g \circ f$.

### Contraejemplo 3: una inversa unilateral no tiene por que ser bilateral

Sea $f : \mathbb{R} \to [0,\infty)$ dada por $f(x)=x^2$. La funcion

$$
g : [0,\infty) \to \mathbb{R}, \qquad g(y)=\sqrt{y}
$$

satisface

$$
f \circ g = \operatorname{id}_{[0,\infty)},
$$

pero

$$
g \circ f \ne \operatorname{id}_{\mathbb{R}},
$$

porque $g(f(-1)) = 1$.

## Proposiciones y teoremas centrales

### Proposicion 1: asociatividad

Si

$$
f : A \to B, \qquad g : B \to C, \qquad h : C \to D,
$$

entonces

$$
h \circ (g \circ f) = (h \circ g) \circ f.
$$

#### Demostracion

Para todo $x \in A$,

$$
(h \circ (g \circ f))(x) = h((g \circ f)(x)) = h(g(f(x))),
$$

y tambien

$$
(((h \circ g) \circ f))(x) = (h \circ g)(f(x)) = h(g(f(x))).
$$

Las dos funciones coinciden punto a punto.

### Proposicion 2: la identidad es neutra para la composicion

Para toda funcion $f : A \to B$,

$$
f \circ \operatorname{id}_A = f = \operatorname{id}_B \circ f.
$$

#### Demostracion

Directa a partir de la definicion de identidad.

### Proposicion 3: existencia de inversa por la izquierda implica inyectividad

Si $f : A \to B$ admite una funcion $g : B \to A$ tal que

$$
g \circ f = \operatorname{id}_A,
$$

entonces $f$ es inyectiva.

#### Demostracion

Si $f(x_1)=f(x_2)$, al aplicar $g$ obtenemos

$$
g(f(x_1)) = g(f(x_2)).
$$

Como $g \circ f = \operatorname{id}_A$,

$$
x_1 = x_2.
$$

### Proposicion 4: existencia de inversa por la derecha implica suprayectividad

Si $f : A \to B$ admite $g : B \to A$ tal que

$$
f \circ g = \operatorname{id}_B,
$$

entonces $f$ es suprayectiva.

#### Demostracion

Sea $y \in B$. Entonces

$$
y = \operatorname{id}_B(y) = f(g(y)),
$$

asi que $y$ pertenece a la imagen de $f$.

### Proposicion 5: leyes de cancelacion

Sean

$$
f : A \to B, \qquad g_1,g_2 : B \to C.
$$

Si $f$ es suprayectiva y

$$
g_1 \circ f = g_2 \circ f,
$$

entonces

$$
g_1 = g_2.
$$

Del mismo modo, si

$$
h_1,h_2 : C \to A, \qquad f : A \to B,
$$

y $f$ es inyectiva, entonces

$$
f \circ h_1 = f \circ h_2 \implies h_1 = h_2.
$$

#### Idea de demostracion

En el primer caso, todo elemento de $B$ es de la forma $f(a)$ por suprayectividad. En el segundo, la igualdad de salidas bajo una funcion inyectiva obliga a la igualdad de entradas.

## Errores comunes

1. Leer $g \circ f$ en el orden equivocado.
2. Suponer sin prueba que dos composiciones conmutan.
3. Hablar de inversa bilateral cuando solo hay una inversa unilateral.
4. Olvidar revisar compatibilidad entre codominio y dominio al componer.

## Resumen operativo

- La composicion es asociativa, pero no conmutativa en general.
- Las identidades son elementos neutros para la composicion.
- Inversa por la izquierda implica inyectividad.
- Inversa por la derecha implica suprayectividad.
- Las leyes de cancelacion dependen exactamente de inyectividad y suprayectividad.

## Ejercicios

1. Calcula $g \circ f$ y $f \circ g$ para $f(x)=2x-1$ y $g(x)=x^2$.
2. Prueba directamente que la composicion de tres inclusiones canonicas es la inclusion total.
3. Da un ejemplo de funcion con inversa por la derecha pero no por la izquierda.
4. Prueba que si $f$ y $g$ son biyectivas, entonces $g \circ f$ tambien es biyectiva.
5. Demuestra una de las dos leyes de cancelacion en detalle.
