---
title: Funciones entre conjuntos
description: Definicion formal de funcion, dominio, codominio, grafica, restricciones y ejemplos estructurales.
---

# Funciones entre conjuntos

## Motivacion e intuicion

Una funcion no es solo una formula. Es una regla bien definida que, a cada elemento del dominio, asigna exactamente un elemento del codominio. Esta formulacion permite tratar funciones entre conjuntos abstractos, no solo expresiones algebraicas entre numeros.

En matematicas avanzadas, una funcion puede ser una inclusion, una proyeccion, una parametrizacion, una evaluacion o una aplicacion cociente. Por eso conviene separar con rigor la nocion de funcion de la idea escolar de "ecuacion en $x$".

## Prerrequisitos

Conviene manejar producto cartesiano, inclusion, imagen y preimagen.

## Definiciones formales

### Funcion

Sean $A$ y $B$ conjuntos. Una **funcion** de $A$ en $B$ es una regla que asigna a cada $x \in A$ un unico elemento de $B$.

Se escribe

$$
f : A \to B, \qquad x \mapsto f(x).
$$

Las dos condiciones esenciales son:

1. para todo $x \in A$, el valor $f(x)$ esta definido;
2. para todo $x \in A$, ese valor es unico.

### Dominio, codominio e imagen

- El conjunto $A$ es el **dominio**.
- El conjunto $B$ es el **codominio**.
- El conjunto

$$
\operatorname{Im}(f) = f(A) = \{f(x) : x \in A\}
$$

es la **imagen** de $f$.

### Grafica

La **grafica** de $f$ es el subconjunto de $A \times B$ dado por

$$
\Gamma_f = \{(x,f(x)) : x \in A\}.
$$

### Igualdad de funciones

Dos funciones

$$
f,g : A \to B
$$

son iguales si

$$
f(x) = g(x) \quad \text{para todo } x \in A.
$$

### Restriccion

Si $E \subseteq A$, la restriccion de $f$ a $E$ es la funcion

$$
f|_E : E \to B, \qquad x \mapsto f(x).
$$

## Ejemplos basicos

### Ejemplo 1: funcion dada por formula

La aplicacion

$$
f : \mathbb{R} \to \mathbb{R}, \qquad f(x)=x^2
$$

es una funcion.

### Ejemplo 2: funcion entre conjuntos finitos

Si

$$
A = \{a,b,c\}, \qquad B = \{0,1\},
$$

y definimos

$$
f(a)=0, \qquad f(b)=1, \qquad f(c)=1,
$$

entonces $f : A \to B$ es una funcion.

### Ejemplo 3: inclusion canonica

Si $A \subseteq B$, la aplicacion

$$
i : A \to B, \qquad i(x)=x
$$

es una funcion. Se llama inclusion canonica.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: una relacion puede no ser funcion

El subconjunto

$$
R = \{(1,a),(1,b)\} \subseteq \{1,2\} \times \{a,b\}
$$

no define una funcion porque al elemento $1$ le asigna dos salidas.

### Contraejemplo 2: el codominio importa

La regla $x \mapsto x^2$ puede verse como

$$
f : \mathbb{R} \to \mathbb{R}
$$

o como

$$
g : \mathbb{R} \to [0,\infty).
$$

Aunque tienen la misma ley puntual, no son iguales como funciones porque tienen distinto codominio.

### Contraejemplo 3: no basta con conocer la imagen

Las funciones

$$
f,g : \mathbb{R} \to \mathbb{R}, \qquad f(x)=x, \qquad g(x)=x^3
$$

tienen ambas imagen igual a $\mathbb{R}$, pero son funciones distintas.

## Proposiciones y teoremas centrales

### Proposicion 1: una funcion queda determinada por su grafica

Si $f,g : A \to B$ y

$$
\Gamma_f = \Gamma_g,
$$

entonces $f=g$.

#### Demostracion

Fija $x \in A$. Por definicion, $(x,f(x)) \in \Gamma_f = \Gamma_g$. Entonces, por ser $\Gamma_g$ la grafica de $g$, necesariamente

$$
f(x)=g(x).
$$

Como esto vale para todo $x \in A$, se concluye que $f=g$.

### Proposicion 2: criterio grafico para ser funcion

Un subconjunto $\Gamma \subseteq A \times B$ es la grafica de una funcion $A \to B$ si y solo si para todo $x \in A$ existe un unico $y \in B$ tal que $(x,y) \in \Gamma$.

#### Comentario

Esta proposicion reformula la definicion de funcion como propiedad de un subconjunto del producto cartesiano.

### Proposicion 3: igualdad por partes

Sean $E$, $F \subseteq A$ con

$$
A = E \cup F.
$$

Si $f,g : A \to B$ satisfacen

$$
f|_E = g|_E, \qquad f|_F = g|_F,
$$

entonces $f=g$.

#### Demostracion

Todo $x \in A$ pertenece a $E$ o a $F$. En ambos casos, los valores de $f$ y $g$ coinciden sobre la pieza correspondiente.

### Proposicion 4: la imagen esta contenida en el codominio

Si $f : A \to B$, entonces

$$
f(A) \subseteq B.
$$

#### Comentario

La imagen puede ser estrictamente menor que el codominio. Esa diferencia es precisamente lo que luego se mide con la suprayectividad.

## Errores comunes

1. Confundir codominio con imagen.
2. Pensar que una funcion esta determinada solo por una formula y no por dominio y codominio.
3. Hablar de "la inversa" de una funcion sin haber probado antes biyectividad.
4. Creer que toda relacion es una funcion.

## Resumen operativo

- Una funcion exige existencia y unicidad de la salida para cada punto del dominio.
- Dominio, codominio y ley de asignacion forman parte del dato.
- La grafica codifica totalmente a la funcion.
- Las restricciones permiten trabajar localmente sobre subconjuntos del dominio.

## Ejercicios

1. Decide cuales de las siguientes relaciones son funciones:
   $(x,y) \in \mathbb{R}^2$ con $y=x^2$;
   $(x,y) \in \mathbb{R}^2$ con $y^2=x$.
2. Construye una funcion $f : \{1,2,3,4\} \to \{a,b\}$ cuya imagen sea exactamente $\{a\}$.
3. Da dos funciones con misma grafica puntual sobre $\mathbb{R}$ pero distinto codominio.
4. Prueba que si $f|_E$ y $f|_F$ son constantes y $A=E \cup F$, no necesariamente $f$ es constante.
5. Describe la grafica de la funcion inclusion $i : A \to B$ cuando $A \subseteq B$.
