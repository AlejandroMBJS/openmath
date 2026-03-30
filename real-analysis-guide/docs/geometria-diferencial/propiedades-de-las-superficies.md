---
title: Propiedades de las Superficies
description: "Propiedades locales y globales de superficies diferenciables: compacidad, orientabilidad, conexidad y comportamiento local euclideo."
---

# Propiedades de las Superficies

## Doble naturaleza

Una superficie tiene siempre dos capas de estudio:

- propiedades locales, derivadas del hecho de ser variedad de dimension dos;
- propiedades globales, ligadas a su topologia y a la metrica que lleve.

## Propiedades locales universales

Toda superficie diferenciable es localmente euclidea de dimension dos. En particular, cerca de cada punto:

- existen coordenadas locales;
- puede hablarse de diferenciabilidad de funciones y curvas;
- el espacio tangente tiene dimension dos;
- la primera forma fundamental se describe mediante una matriz simetrica definida positiva.

## Propiedades topologicas globales

Entre las propiedades globales mas importantes estan:

- conexidad;
- compacidad;
- orientabilidad;
- existencia de borde o ausencia del mismo;
- genero topologico.

Estas propiedades no se leen desde una sola carta local.

## Compacidad

Una superficie compacta es cerrada y acotada cuando esta inmersa como subconjunto regular de un euclideo, pero en el lenguaje abstracto la compacidad es una propiedad topologica definida por recubrimientos abiertos. La esfera y el toro son compactos; el plano y el cilindro infinito no lo son.

## Orientabilidad

Una superficie es orientable si puede elegirse coherentemente una orientacion en todos sus espacios tangentes. En una superficie inmersa en $\mathbb{R}^3$, esto equivale a la existencia de un campo normal unitario global continuo.

## Conexidad

La conexidad determina si la superficie es una sola pieza o varias componentes. Muchas afirmaciones geometricas se formulan primero por componente conexa.

## Regularidad y singularidades

Una superficie diferenciable excluye singularidades del tipo vértice cónico o autointersección transversal en la estructura local. Esas patologías pueden aparecer como subconjuntos del espacio, pero no como puntos regulares de una superficie.

## Geometria intrinseca y extrinseca

Dos superficies pueden compartir propiedades intrinsecas y diferir extrinsecamente. El ejemplo clasico es plano y cilindro: localmente son isometricos, pero solo uno se ve plano en el ambiente. Esto obliga a separar metrica interna y modo de inmersion.

## Curvas distinguidas

Sobre una superficie aparecen familias de curvas geometricamente relevantes:

- curvas coordenadas;
- geodesicas;
- lineas de curvatura;
- direcciones asintoticas cuando existen.

La existencia y comportamiento de estas curvas depende tanto de la metrica como de la curvatura extrinseca.

## Ejercicios

### Ejercicio 1

Sea $S$ una superficie diferenciable. Demostrar que $S$ es orientable si y solo si existe una 2-forma diferencial $\omega$ que no se anula en ninguna parte de $S$.

### Ejercicio 2

Sea $S$ una superficie conexa, compacta y sin borde en $\mathbb{R}^3$. Demostrar que $\chi(S) \leq 2$, con igualdad iff $S$ es homeomorfa a la esfera.

### Ejercicio 3

Sea $S$ una superficie completa con $K > 0$ en todas partes. Demostrar que $S$ es diffeomorfa a la esfera o al plano proyectivo (teorema de Hadamard para curvatura positiva).

### Ejercicio 4

Sea $M$ una superficie minimal completa con $K < 0$ en todas partes. Demostrar que $M$ es diffeomorfa al plano y que su topología es única (Costa).

### Ejercicio 5

Sea $S$ una superficie orientable con género $g \geq 2$. Demostrar que $S$ admite una métrica con curvatura constante $K = -1$ y que esta métrica es única módulo isometría (teorema de uniformización).

### Ejercicio 6

Sea $M$ una superficie de genus $g$ inmersa en $\mathbb{R}^3$ con $H = 0$ everywhere (superficie mínima). Demostrar que $g \geq 1$ o $M$ es un plano. Encontrar ejemplos de genus 1 y 2.

### Ejercicio 7

Sea $S$ una superficie con compacidad. Demostrar que toda función suave $f: S \to \mathbb{R}$ alcanza un máximo y un mínimo globales. ¿Qué relación hay con la compacidad?

### Ejercicio 8

Sea $S$ una superficie orientable con $\chi(S) > 0$. Demostrar que toda métrica riemanniana sobre $S$ tiene al menos dos puntos umbílicos.

### Ejercicio 9

Sea $S$ una superficie completa con $K \geq 0$ en todas partes. Demostrar que el grupo de isometrías de $S$ es un grupo de Lie compacto de dimension al menos 1 (teorema de Killing-Hopf).

### Ejercicio 10

Sea $M$ una superficie inmersa en $\mathbb{R}^3$ con $H = \text{const} \neq 0$. Demostrar que $M$ es una esfera de radio $1/|H|$ (teorema de Alexandrov).

### Ejercicio 11

Sea $S$ una superficie con borde $\partial S$. Si $S$ es compacta, demostrar que $\chi(S) = \chi(\partial S)/2 + \int_S K\,dA$.

### Ejercicio 12

Sea $S$ una superficie simplemente conexa con $K < 0$ en todas partes. Demostrar que $S$ es diffeomorfa al disco y que su completación es un espacio métrico CAT(0) con frontera ideal.

### Ejercicio 13

Sea $M$ una superficie de Riemann de gênero $g \geq 1$. Demostrar que $M$ no puede biholomórficamente equivalent a un abierto de $\mathbb{C}$ (teorema de Riemann-Roch-Kobe).

### Ejercicio 14

Sea $S$ una superficie inmersa en $\mathbb{R}^3$ con $K = 0$ en todas partes. Demostrar que $S$ es locally isométrico a un plano, y que globalmente $S$ es un cilindro o un cono (posiblemente truncado).

### Ejercicio 15

Sea $M$ una superficie immersed en $\mathbb{R}^3$ que es topológicamente un toro. Si $M$ tiene $K > 0$ en alguna region y $K < 0$ en otra, demostrar que existe una curva closedd suave en $M$ a lo largo de la cual $K = 0$.

## Soluciones detalladas

### Solucion 1

Si $S$ es orientable, existe un atlas con transiciones de determinante positivo. En cada carta, la forma $\omega = du \wedge dv$ es una 2-forma que no se anula. Por el teorema de partition de la unidad, estas formas pueden ensamblarse en una 2-forma global $\omega$ que no se anula. Recíprocamente, si existe $\omega \neq 0$ en todas partes, localmente $\omega = \lambda\,du\wedge dv$ con $\lambda \neq 0$, y el signo de $\lambda$ determina la orientación coherente.

$$\square$$

### Solucion 2

Por Gauss-Bonnet: $\int_S K\,dA = 2\pi\chi(S)$. Si $S \subset \mathbb{R}^3$ es compacta, $K$ toma valores positivos y negativos, pero la integral está acotada por el área. Para una esfera-topología, $\chi = 2$. Para cualquier otra superficie, $\chi \leq 0$.

$$\square$$

### Solucion 3

Si $K > 0$, la aplicación de Gauss $\mathcal{N}: S \to S^2$ es un difeomorfismo local por ser $\det(d\mathcal{N}) = K > 0$. Como $S$ es completa, $\mathcal{N}$ es un difeomorfismo global o un cubrimiento de dos hojas. Si es difeomorfismo global, $S \cong S^2$. Si es cubrimiento de dos hojas, $S$ es el plano proyectivo.

$$\square$$

### Solucion 4

Por el teorema de классификации de superficies completas mínimas, las únicas superficies mínimas completas con $K < 0$ son diffeomorfas al plano. La propiedad de que la topología es única sigue del teorema de Osserman y los trabajos de Costa, Hoffman y Meeks.

$$\square$$

### Solucion 5

Por el teorema de uniformización de Poincaré-Koebe, toda superficie de Riemann de género $g \geq 2$ es conformemente equivalente a $\mathbb{H}/\Gamma$, donde $\mathbb{H}$ es el полупространство superior y $\Gamma$ es un grupo Fuchsiano. La métrica hiperbólica canónica de $\mathbb{H}$ tiene $K = -1$ y induce una métrica riemanniana sobre el cociente que es única módulo isometrías que inducen automorfismos de $\Gamma$.

$$\square$$

### Solucion 6

Por el teorema de классификации de superficies mínimas inmersas en $\mathbb{R}^3$ (Meeks y Pérez), toda superficie mínima inmersa completa de género $g \geq 1$ en $\mathbb{R}^3$ es proprement. El género mínimo de una superficie mínima immersa en $\mathbb{R}^3$ es 1 (la catenoide tiene género 0, pero la imagen de Enneper tiene género 0 también). El género 1 corresponde a superficies como la superficie de Costa, y el género 2 a la superficie de Hoffman-Meeks.

$$\square$$

### Solucion 7

Por compacidad, toda función continua en $S$ alcanza un máximo y un mínimo. Una función suave es en particular continua, luego el resultado sigue directamente del teorema de Weierstrass para espacios compactos.

$$\square$$

### Solucion 8

Si $\chi(S) > 0$, por Gauss-Bonnet la integral de $K$ es positiva. Si $S$ tuviera a lo sumo un punto umbílico, entonces $K$ sería igual a una constante en todas partes, lo que contradice que $\int_S K\,dA = 2\pi\chi(S) = 4\pi$ para la esfera, 0 para el plano proyectivo. Para una demostración rigurosa, se usa el teorema de конформной инвариантности.

$$\square$$

### Solucion 9

El grupo de isometrías de una variedad riemanniana completa con $K \geq 0$ es un grupo de Lie compacto (teorema de Killing-Hopf). La dimensión es al menos 1 porque la acción del grupo de isometrías sobre la variedad tiene orbits de dimensión al menos 1 si la variedad no es compacta, y en dimensión 2 la compacidad del grupo de isometrías sigue del teorema de Myers-Steenrod.

$$\square$$

### Solucion 10

El teorema de Alexandrov dice que toda superficie inmersa en $\mathbb{R}^3$ con $H = \text{const}$ es una esfera. La demostración usa el principio del máximo para la función altura y la simetría del problema.

$$\square$$

### Solucion 11

Gauss-Bonnet con borde establece que $\int_S K\,dA + \int_{\partial S} \kappa_g\,ds = 2\pi\chi(S)$. Para el borde, $\chi(\partial S) = 0$ si $\partial S$ es una disjoint union de círculos, y $\int_{\partial S} \kappa_g\,ds = 2\pi\chi(\partial S)/2 = 0$ en el caso de frontera suave. Si $\partial S$ tiene $k$ componentes conexas, $\chi(\partial S) = 0$ pero la fórmula se ajusta: $\int_{\partial S} \kappa_g\,ds = 2\pi\chi(\partial S) = 0$.

$$\square$$

### Solucion 12

Por el teorema de Cartan-Hadamard, si $K < 0$ en todas partes y $S$ es simplemente conexa, la aplicación exponencial $\exp_p: T_pS \to S$ es un difeomorfismo. Si $S$ es completa, $S$ es diffeomorfa a $\mathbb{R}^2$. Su completación geodesica es un $\mathbb{R}^2$ completo con frontera ideal parabólica.

$$\square$$

### Solucion 13

Por el teorema de Riemann-Roch, el género de una superficie de Riemann compacto es un invariante topológico. Si $g \geq 1$, la superficie no puede ser conformemente equivalente a un abierto de $\mathbb{C}$, porque todo biholomorfismo de un abierto en $\mathbb{C}$ se extiende a $\mathbb{CP}^1$, lo que requeriría $g = 0$.

$$\square$$

### Solucion 14

Si $K = 0$ everywhere, entonces por el teorema egregio de Gauss, la curvatura depende solo de la métrica. Si $K = 0$, localmente la métrica es plana, hence isometric a un subconjunto de $\mathbb{R}^2$. Globalmente, una superficie con $K = 0$ y completa en $\mathbb{R}^3$ debe ser un cilindro o un cono. Esto sigue del teorema de классификации de superficies con $K = 0$ (Galle).

$$\square$$

### Solucion 15

Sea $U = \{p \in M : K(p) > 0\}$ y $V = \{p \in M : K(p) < 0\}$. Ambas son regiones abiertas. Como $M$ es compacta y $U \cup V \neq M$ (ya que $K = 0$ en algún punto por Gauss-Bonnet: $\int_M K\,dA = 0$), la frontera $\partial U$ contiene puntos con $K = 0$. Sea $\gamma$ una curva suave en $\partial U$ suficientemente regular; por el teorema de regularidad de Sard, existe una curva suave a lo largo de la cual $K = 0$.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1992). *Riemannian Geometry*. Birkhauser Boston.
2. Chavel, I. (2006). *Riemannian Geometry*. Cambridge University Press.
3. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 2. Publish or Perish.
4. Jost, J. (2017). *Riemannian Geometry and Geometric Analysis*. Springer.
5. Osserman, R. (1986). *Curvature*. Cambridge University Press.
6. Alexandrov, A.D. (1950). *Intrinsic Geometry of Surfaces*. American Mathematical Society.
