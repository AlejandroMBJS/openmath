---
title: Grupos Dihedrales
description: Simetrias de poligonos regulares, generadores, relaciones y primeras representaciones.
---

# Grupos Dihedrales

## Definicion geometrica

El grupo diedral $D_n$ es el grupo de simetrias de un poligono regular de $n$ lados. Incluye tanto rotaciones como reflexiones.

Su cardinal es

$$
|D_n|=2n.
$$

## Presentacion abstracta

Una presentacion estandar es

$$
D_n=\langle r,s\mid r^n=e,\ s^2=e,\ srs=r^{-1}\rangle.
$$

Aqui $r$ representa una rotacion elemental y $s$ una reflexion.

## Estructura interna

- las rotaciones forman un subgrupo ciclico normal $\langle r\rangle\cong C_n$;
- las reflexiones no forman subgrupo por si solas;
- todo elemento es de la forma $r^k$ o $sr^k$.

Por tanto,

$$
D_n=C_n\rtimes C_2,
$$

producto semidirecto que refleja la accion de la reflexion invirtiendo la orientacion de las rotaciones.

## Ejemplos pequenos

### $D_3$

Es isomorfo al grupo de permutaciones $S_3$. Este caso conecta la simetria del triangulo equilatero con el primer grupo no abeliano pequeno.

### $D_4$

Describe las simetrias del cuadrado: cuatro rotaciones y cuatro reflexiones. Es un laboratorio basico para clases conjugadas y representaciones.

## Clases conjugadas

Las clases conjugadas dependen de la paridad de $n$. Esto afecta la tabla de caracteres y la descomposicion de representaciones. En fisica, dichas clases corresponden a transformaciones indistinguibles al nivel de invarianza interna.

## Representaciones

Las representaciones irreducibles de $D_n$ combinan:

- representaciones unidimensionales asociadas a signos y paridades;
- representaciones bidimensionales derivadas de la accion rotacional en planos.

Estas ultimas son las que convierten a $D_n$ en una buena puerta de entrada a la teoria de representaciones no abeliana.

## Significado fisico

Los grupos dihedrales aparecen en moleculas con simetria poligonal, redes discretas con reflexiones y rotaciones, modos normales en estructuras periodicas finitas y clasificacion de patrones bidimensionales.

## Centro y normalidad

El centro de $D_n$ es trivial si $n$ es impar. Si $n$ es par, contiene ademas la rotacion de angulo $\pi$.

Esta distincion tiene consecuencias en la estructura de clases conjugadas y en el numero de representaciones irreducibles.

## Cierre

Los grupos dihedrales son el primer ejemplo natural de simetria finita no abeliana con contenido geometrico y algebraico real. Por eso ocupan un lugar central entre grupos discretos usados en fisica matematica elemental y media.
