---
title: Particiones y relaciones de equivalencia
description: Correspondencia estructural entre particiones de un conjunto y relaciones de equivalencia.
---

# Particiones y relaciones de equivalencia

## Motivacion e intuicion

Una relacion de equivalencia y una particion describen el mismo fenomeno desde dos puntos de vista:

- la relacion dice cuando dos elementos deben considerarse equivalentes;
- la particion describe los bloques en los que el conjunto queda descompuesto.

Este teorema es central porque convierte informacion relacional en una geometria discreta de bloques.

## Prerrequisitos

Conviene dominar relaciones de equivalencia, clases y operaciones basicas entre conjuntos.

## Definiciones formales

### Particion

Una familia $\mathcal{P}$ de subconjuntos no vacios de $X$ es una **particion** de $X$ si:

1. la union de todos sus bloques es $X$;
2. dos bloques distintos son disjuntos.

Es decir, cada elemento de $X$ pertenece a un unico bloque.

### Relacion inducida por una particion

Si $\mathcal{P}$ es una particion de $X$, definimos

$$
x \sim_{\mathcal{P}} y
$$

si y solo si $x$ y $y$ pertenecen al mismo bloque de $\mathcal{P}$.

## Ejemplos basicos

### Ejemplo 1: particion trivial

La familia

$$
\{X\}
$$

es una particion de $X$.

### Ejemplo 2: particion discreta

La familia

$$
\big\{\{x\} : x \in X\big\}
$$

es una particion de $X$.

### Ejemplo 3: clases modulo $3$

En $\mathbb{Z}$, las clases

$$
[0],[1],[2]
$$

modulo $3$ forman una particion del conjunto de enteros.

## Proposiciones y teoremas centrales

### Teorema 1: de una equivalencia se obtiene una particion

Si $\sim$ es una relacion de equivalencia en $X$, entonces la familia de clases

$$
\{[x] : x \in X\}
$$

forma una particion de $X$.

#### Demostracion

Cada clase es no vacia porque $x \in [x]$.

La union de todas las clases es $X$ porque todo $x \in X$ pertenece a su propia clase.

Si dos clases $[x]$ y $[y]$ se intersectan, por el resultado basico de relaciones de equivalencia deben ser iguales. Luego dos clases distintas son disjuntas.

### Teorema 2: de una particion se obtiene una equivalencia

Si $\mathcal{P}$ es una particion de $X$, la relacion

$$
x \sim_{\mathcal{P}} y
$$

si y solo si $x$ y $y$ pertenecen al mismo bloque, es una relacion de equivalencia.

#### Demostracion

- Reflexividad: cada $x \in X$ pertenece a algun bloque $P \in \mathcal{P}$, luego $x$ esta en el mismo bloque que si mismo.
- Simetria: si $x$ y $y$ estan en el mismo bloque, entonces $y$ y $x$ tambien.
- Transitividad: si $x$ y $y$ estan en un bloque $P$ y $y$ y $z$ estan en un bloque $Q$, como $y \in P \cap Q$ y los bloques de una particion son disjuntos salvo igualdad, se sigue que $P=Q$. Luego $x$ y $z$ estan en el mismo bloque.

### Teorema 3: correspondencia biunivoca

Los dos procedimientos anteriores son inversos entre si:

1. partir de una equivalencia y tomar sus clases produce una particion;
2. partir de una particion y tomar la relacion "estar en el mismo bloque" produce una equivalencia.

#### Comentario

Este teorema establece una biyeccion conceptual entre relaciones de equivalencia y particiones.

### Proposicion 4: factorizacion por el cociente

Sea $\sim$ una equivalencia en $X$ y sea $f : X \to Y$ una funcion constante sobre clases, es decir,

$$
x \sim y \Rightarrow f(x)=f(y).
$$

Entonces existe una unica funcion

$$
\widetilde{f} : X/{\sim} \to Y
$$

tal que

$$
f = \widetilde{f} \circ \pi,
$$

donde $\pi(x)=[x]$ es la proyeccion canonica.

#### Idea de demostracion

Se define

$$
\widetilde{f}([x])=f(x).
$$

La condicion de ser constante en clases garantiza que esta definicion no depende del representante.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: cubrir no basta para particionar

La familia

$$
\big\{\{1,2\},\{2,3\}\big\}
$$

cubre $\{1,2,3\}$, pero no es una particion porque los bloques se intersectan.

### Contraejemplo 2: ser disjuntos no basta para particionar

La familia

$$
\big\{\{1\},\{3\}\big\}
$$

tiene bloques disjuntos, pero no particiona $\{1,2,3\}$ porque deja fuera al elemento $2$.

## Errores comunes

1. Llamar particion a cualquier familia de subconjuntos.
2. Olvidar que los bloques deben ser no vacios.
3. Pensar que la clase de equivalencia depende del representante elegido de forma esencial.
4. Usar una funcion sobre el cociente sin verificar que sea constante en clases.

## Resumen operativo

- Una equivalencia descompone un conjunto en clases.
- Una particion produce una equivalencia al declarar equivalentes los puntos del mismo bloque.
- Ambas nociones son dos caras de la misma estructura.
- Las funciones constantes sobre clases se factorizan por el conjunto cociente.

## Ejercicios

1. Describe la particion de $\mathbb{Z}$ inducida por la congruencia modulo $4$.
2. Prueba que la relacion inducida por una particion es de equivalencia.
3. Dada la particion $\{\{1,2\},\{3\},\{4,5\}\}$ de $\{1,2,3,4,5\}$, escribe explicitamente la relacion asociada.
4. Demuestra en detalle la factorizacion por el cociente.
5. Explica por que una funcion $f : X \to Y$ induce una particion de $X$ por sus fibras.
