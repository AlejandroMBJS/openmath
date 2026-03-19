---
title: Producto cartesiano, imagen y preimagen
description: Pares ordenados, productos cartesianos, relaciones y propiedades estructurales de imagen y preimagen.
---

# Producto cartesiano, imagen y preimagen

## Motivacion e intuicion

El producto cartesiano permite pasar de objetos sueltos a pares ordenados y, con ello, describir relaciones binarias, graficas de funciones, coordenadas y espacios construidos a partir de otros. Imagen y preimagen, por su parte, miden como una funcion transporta subconjuntos de un lado a otro.

Estas nociones aparecen por todas partes: en topologia, cuando se llevan abiertos hacia atras; en algebra, cuando se estudian nucleos e imagenes; y en analisis, cuando se miran grafos, restricciones o cambios de variable.

## Prerrequisitos

Conviene manejar operaciones entre conjuntos y lenguaje basico de inclusion.

## Definiciones formales

### Par ordenado

Un **par ordenado** $(a,b)$ es un objeto en el que importa tanto que elementos aparecen como el orden en que lo hacen. En particular,

$$
(a,b) = (c,d) \iff a = c \text{ y } b = d.
$$

### Producto cartesiano

Dados conjuntos $A$ y $B$, se define

$$
A \times B = \{(a,b) : a \in A,\ b \in B\}.
$$

### Relacion binaria

Una relacion binaria $R$ de $A$ en $B$ es un subconjunto de $A \times B$.

Escribimos

$$
aRb
$$

para significar que $(a,b) \in R$.

### Imagen directa

Si $f : A \to B$ y $E \subseteq A$, la imagen de $E$ por $f$ es

$$
f(E) = \{f(x) : x \in E\} \subseteq B.
$$

### Preimagen

Si $F \subseteq B$, la preimagen de $F$ por $f$ es

$$
f^{-1}(F) = \{x \in A : f(x) \in F\} \subseteq A.
$$

Esta notacion no supone que $f$ sea invertible.

## Ejemplos basicos

### Ejemplo 1: producto finito

Si

$$
A = \{1,2\}, \qquad B = \{a,b\},
$$

entonces

$$
A \times B = \{(1,a),(1,b),(2,a),(2,b)\}.
$$

### Ejemplo 2: una relacion que no es funcion

En $A = \{1,2\}$ y $B = \{a,b\}$, el subconjunto

$$
R = \{(1,a),(1,b)\}
$$

es una relacion, pero no una funcion de $A$ en $B$, porque al elemento $1$ le asigna dos valores.

### Ejemplo 3: imagen y preimagen

Sea $f : \mathbb{R} \to \mathbb{R}$ dada por $f(x)=x^2$.

Si

$$
E = [-2,1],
$$

entonces

$$
f(E) = [0,4].
$$

Si

$$
F = [1,4],
$$

entonces

$$
f^{-1}(F) = [-2,-1] \cup [1,2].
$$

## Ejemplos finos y contraejemplos

### Contraejemplo 1: la imagen no preserva intersecciones en general

Con $f(x)=x^2$, toma

$$
E = [-1,0], \qquad G = [0,1].
$$

Entonces

$$
E \cap G = \{0\},
$$

pero

$$
f(E) = [0,1] = f(G),
$$

de modo que

$$
f(E \cap G) = \{0\} \subsetneq [0,1] = f(E) \cap f(G).
$$

### Contraejemplo 2: una preimagen vacia no obliga a que el conjunto objetivo sea vacio

Sea $f : \mathbb{R} \to \mathbb{R}$ dada por $f(x)=x^2$ y toma

$$
F = (-\infty,0).
$$

Entonces

$$
f^{-1}(F) = \varnothing,
$$

pero $F$ no es vacio.

### Contraejemplo 3: el producto cartesiano puede ser vacio

Si $A = \varnothing$, entonces

$$
A \times B = \varnothing
$$

para todo conjunto $B$.

## Proposiciones y teoremas centrales

### Proposicion 1: producto cartesiano vacio

Se tiene

$$
A \times B = \varnothing
$$

si y solo si $A = \varnothing$ o $B = \varnothing$.

#### Demostracion

Si alguno de los conjuntos es vacio, no se pueden formar pares y el producto es vacio.

Reciprocamente, si $A$ y $B$ fueran no vacios, existirian $a \in A$ y $b \in B$, y entonces $(a,b) \in A \times B$, contradiccion.

### Proposicion 2: la preimagen preserva operaciones de conjuntos

Para cualquier funcion $f : A \to B$ y cualesquiera subconjuntos $F$, $G$ de $B$,

$$
f^{-1}(F \cup G) = f^{-1}(F) \cup f^{-1}(G),
$$

$$
f^{-1}(F \cap G) = f^{-1}(F) \cap f^{-1}(G),
$$

$$
f^{-1}(F^c) = (f^{-1}(F))^c,
$$

siempre que el complemento se tome respecto de $B$ a la derecha y respecto de $A$ a la izquierda.

#### Demostracion de la primera

Sea $x \in A$. Entonces

$$
x \in f^{-1}(F \cup G)
$$

si y solo si

$$
f(x) \in F \cup G,
$$

lo cual equivale a decir que $f(x) \in F$ o $f(x) \in G$. Eso, a su vez, equivale a

$$
x \in f^{-1}(F) \cup f^{-1}(G).
$$

Las otras identidades se prueban igual.

### Proposicion 3: la imagen preserva uniones y solo satisface inclusion para intersecciones

Para todo $E$, $G \subseteq A$,

$$
f(E \cup G) = f(E) \cup f(G),
$$

$$
f(E \cap G) \subseteq f(E) \cap f(G).
$$

#### Demostracion

La igualdad de la union es inmediata: un valor viene de $E \cup G$ si y solo si viene de $E$ o de $G$.

Para la interseccion, si $y \in f(E \cap G)$, existe $x \in E \cap G$ con $f(x)=y$. Entonces $x \in E$ y $x \in G$, de modo que $y \in f(E)$ y $y \in f(G)$.

La inclusion puede ser estricta, como se vio en el contraejemplo anterior.

### Proposicion 4: monotonia de imagen y preimagen

Si $E_1 \subseteq E_2 \subseteq A$, entonces

$$
f(E_1) \subseteq f(E_2).
$$

Si $F_1 \subseteq F_2 \subseteq B$, entonces

$$
f^{-1}(F_1) \subseteq f^{-1}(F_2).
$$

#### Comentario

La imagen y la preimagen son aplicaciones monotona entre conjuntos potencia, aunque se comportan de manera distinta con intersecciones y complementos.

## Errores comunes

1. Pensar que $f^{-1}(F)$ significa aplicar una inversa de funcion.
2. Confundir un par ordenado $(a,b)$ con el conjunto $\{a,b\}$.
3. Suponer que la imagen preserva intersecciones y complementos exactamente.
4. Olvidar en que universo se toma el complemento.

## Resumen operativo

- El producto cartesiano modela pares ordenados y relaciones.
- La preimagen es formalmente mas estable que la imagen: respeta uniones, intersecciones y complementos.
- La imagen respeta uniones, pero para intersecciones solo da inclusion en general.
- Muchos teoremas posteriores dependen de estas identidades elementales.

## Ejercicios

1. Calcula $A \times B$ cuando $A = \{0,1\}$ y $B = \{0,1,2\}$.
2. Da un ejemplo de una relacion en $A \times B$ que sea simetrica pero no reflexiva cuando $A=B$.
3. Para $f(x)=x^3$, calcula $f([-1,2])$ y $f^{-1}([0,8])$.
4. Prueba que si $f$ es suprayectiva, entonces para todo $F \subseteq B$ se cumple $f(f^{-1}(F)) = F$.
5. Prueba que siempre $E \subseteq f^{-1}(f(E))$, y determina cuando puede haber igualdad.
