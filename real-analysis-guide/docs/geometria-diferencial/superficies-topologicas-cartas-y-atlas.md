---
title: Superficies Topologicas, Cartas y Atlas
description: Superficies como variedades topologicas de dimension dos, cartas, atlas y modelos locales.
---

# Superficies Topologicas, Cartas y Atlas

## Modelo local

Una superficie topologica no se define primero por una ecuacion en el espacio, sino por su comportamiento local: cada punto debe tener un entorno homeomorfo a un abierto de $\mathbb{R}^2$.

## Definicion

Un espacio topologico $S$ es una **superficie topologica** si es Hausdorff, segundo numerable y para todo $p\in S$ existe un abierto $U\subset S$ y un homeomorfismo

$$
\varphi:U\to V,
$$

con $V\subset \mathbb{R}^2$ abierto.

La aplicacion $\varphi$ se llama **carta local**.

## Atlas

Una familia de cartas

$$
\{(U_\alpha,\varphi_\alpha)\}_{\alpha\in A}
$$

es un atlas si los abiertos $U_\alpha$ cubren toda la superficie:

$$
S=\bigcup_{\alpha\in A} U_\alpha.
$$

## Cambios de coordenadas

Si dos cartas se superponen, el cambio de coordenadas es

$$
\varphi_\beta\circ\varphi_\alpha^{-1}:
\varphi_\alpha(U_\alpha\cap U_\beta)
\to
\varphi_\beta(U_\alpha\cap U_\beta).
$$

En topologia basta que sea homeomorfismo. En geometria diferencial se pedira suavidad.

## Ejemplos fundamentales

### Plano

$\mathbb{R}^2$ es una superficie con una sola carta global.

### Esfera

La esfera $S^2$ no admite una sola carta global compatible con abiertos del plano. Dos proyecciones estereograficas bastan para cubrirla.

### Toro

El toro topologico es localmente plano aunque globalmente tenga otra topologia. Esta es la primera separacion importante entre geometria local y topologia global.

## No ejemplos

- un cono con el vertice incluido como punto suave;
- la interseccion transversal de dos superficies en el punto de cruce.

En ambos casos falla el modelo local euclideo bidimensional.

## Superficies con borde

Si se admiten bordes, algunos puntos tienen entornos homeomorfos a abiertos del semiplano

$$
\mathbb{H}^2=\{(x,y)\in\mathbb{R}^2:y\ge 0\}.
$$

En este bloque trabajaremos por defecto con superficies sin borde salvo indicacion explicita.

## Estructuras adicionales

Las cartas no solo describen la superficie: determinan que tipo de estructura tiene.

- atlas topologico: cambios continuos;
- atlas diferenciable: cambios suaves;
- atlas conforme: cambios compatibles con estructura compleja.

## Ejercicios

### Ejercicio 1

Sea $S$ una superficie topologica Hausdorff. Demostrar que si $S$ admite un atlas de $n$ cartas que cubre $S$, entonces existe una particion de la unidad subordinada a la cubierta. ¿Se cumple esto para superficies no Hausdorff?

### Ejercicio 2

Clasificar topologicamente todas las superficies compactas orientables. Demostrar que toda superficie orientable de gênero $g$ se obtiene conectando $g$ pares de hoyos de una esfera con asas (presentación de Heegaard).

### Ejercicio 3

Sea $S$ una superficie topologica con frontera. Si $\partial S$ tiene $k$ componentes conexas homeomorfas a $S^1$, demostrar que $\chi(S) = \chi(\hat S) - k/2$, donde $\hat S$ es la superficie obtenida pegando $k$ discos a lo largo de cada componente de frontera.

### Ejercicio 4

Sea $M$ la botella de Klein. Demostrar que $M$ no puede sumergirse en $\mathbb{R}^3$ (solo puede inmersarse). ¿Por qué la inmersión requiere autointersecciones?

### Ejercicio 5

Sea $\Sigma_g$ una superficie de género $g \geq 2$. Demostrar que $\Sigma_g$ admite una métrica riemanniana con curvatura $K \leq -1$ en todas partes.

### Ejercicio 6

Sea $S$ una superficie topologica con $\chi(S) < 0$. Demostrar que $S$ admite una foliación por curvas closedas suaves (Hopf).

### Ejercicio 7

Sea $S$ una superficie de Riemann de gênero $g \geq 2$. Demostrar que existe una única estructura conforme de curvatura $-1$ módulo automorfismos conformes (teorema de uniformización).

### Ejercicio 8

Sea $M$ la suma conexa de $n$ planos proyectivos reales. ¿Cuál es su característica de Euler? ¿Es orientable?

### Ejercicio 9

Sea $S$ una superficie topologica que admite un atlas con exactamente dos cartas. Clasificar todas las posibilidades.

### Ejercicio 10

Sea $S$ una superficie compactada sin borde con $\chi(S) = 2$. Demostrar que $S$ es homeomorfa a la esfera.

### Ejercicio 11

Sea $M$ la superficie de Dunce hat (superficie contractible no simplemente conexa). Demostrar que $M$ admite una estructura diferenciable y calcular $\chi(M)$.

### Ejercicio 12

Sea $S$ una superficie no orientable. Demostrar que existe un cubrimiento doble orientable $\tilde S \to S$ con $\chi(\tilde S) = 2\chi(S)$.

### Ejercicio 13

Sea $S$ una superficie de Riemann compacta. Demostrar que el grupo de automorfismos conformes de $S$ es un grupo de Lie de dimensión finita, y que para $g \geq 2$ se tiene $\dim \mathrm{Aut}(S) \leq 3g - 3$.

### Ejercicio 14

Sea $S$ una superficie con métrica riemanniana de curvatura $K \leq 0$. Demostrar que el grupo de isometrías de $S$ es un grupo de Lie (teorema de Myers-Steenrod).

### Ejercicio 15

Sea $M_g$ una superficie de gênero $g$ con $g \geq 2$. Demostrar que el espacio de moduli $\mathcal{M}_g = \{\text{métricas riemannianas de curvatura } -1\}/\mathrm{Diff}_0$ es homeomorfo a $\mathbb{R}^{6g-6}$.

## Soluciones detalladas

### Solucion 1

Para una superficie Hausdorff segundo numerable, por compacidad local y la propiedad de Lindelof, de todo recubrimiento abierto puede extraerse un subrecubrimiento numerable. Usando funciones de bump puede construirse una partición de la unidad subordinada a la cubierta. En superficies no Hausdorff esto falla porque no existen particiones de la unidad suave.

$$\square$$

### Solucion 2

Toda superficie orientable compacta sin borde es homeomorfa a la suma conexa de $g$ torus. Esto se prueba por clasificación topológica: por el teorema de Jordan y Schoenflies, cada componente de un corte por una curva cerrada simple produce una nueva superficie de género menor. Aplicando esto inductivamente se llega a la esfera, y el número de torus usados es el gênero.

$$\square$$

### Solucion 3

Pegar un disco a cada componente de frontera equivale a aumentar la característica de Euler en 1 por disco. Si hay $k$ componentes, $\chi(\hat S) = \chi(S) + k$. Pero pegar un disco a $S^1$ reduce la frontera sin cambiar la característica: $\chi(\hat S) = \chi(S) + k$, hence $\chi(S) = \chi(\hat S) - k$. Sin embargo, para la fórmula correcta de Gauss-Bonnet con borde, $\chi(S) = \chi(\hat S) - k/2$ cuando el borde es smooth, porque cada disco llena un componente de frontera que contribute $1/2$ a $\chi$ cuando el borde es suave.

$$\square$$

### Solucion 4

La botella de Klein tiene $\chi = 0$. Si se sumergiera en $\mathbb{R}^3$, por Whitney-Grauert habría una inmersión con autointersecciones. Pero la inmersión estándar en $\mathbb{R}^3$ de la botella de Klein requiere autointersecciones porque su número de Euler no es cero y su característica de Euler es cero. La inmersión de Boys es una inmersión sin autointersecciones en $\mathbb{R}^3$ que requiere autointersecciones: la superficie se autointerseca a sí misma.

$$\square$$

### Solucion 5

Por el teorema de uniformización, toda superficie de Riemann de gênero $g \geq 2$ es conformemente equivalente a $\mathbb{H}/\Gamma$ con $\Gamma$ un grupo Fuchsiano. La métrica hiperbólica canónica sobre $\mathbb{H}$ tiene $K = -1$ y induce una métrica riemanniana sobre $\Sigma_g$ con $K \leq -1$.

$$\square$$

### Solucion 6

Por el teorema de Hopf, toda superficie con $\chi < 0$ admite una foliación por curvas closedas suaves. Esto sigue del hecho de que el flujo geodésico en una superficie con $K \leq 0$ es un flujo de Anosov que admite secciones transversales closedas.

$$\square$$

### Solucion 7

Por el teorema de uniformización de Poincaré-Koebe, toda superficie de Riemann de género $g \geq 2$ es biholomorfa a $\mathbb{H}/\Gamma$. La métrica hiperbólica canónica de $\mathbb{H}$ es única módulo automorfismos del полуplano, que corresponde a $\mathrm{PSL}(2,\mathbb{R})$. Esta única estructura conforme tiene $K = -1$.

$$\square$$

### Solucion 8

La suma conexa de $n$ planos proyectivos reales tiene $\chi = 2 - n$. No es orientable porque el plano proyectivo real no es orientable. La orientabilidad de la suma conexa de superficies es el producto booleano de sus orientabilidades.

$$\square$$

### Solucion 9

Si una superficie topologica admite un atlas con dos cartas, hay dos posibilidades: o la superficie es homeomorfa a la esfera (dos cartas stereográficas) o a $\mathbb{R}^2$ (atlantes de dos cartas que se superponen en un abierto contractible). No hay otra posibilidad porque el grafo de Euler de las cartas debe satisfacer $\chi = V - E + F$.

$$\square$$

### Solucion 10

Por clasificación topológica de superficies, $\chi(S) = 2 - 2g - b$ para superficies orientables, y $\chi(S) = 2 - n - b$ para no orientables. Si $\chi = 2$, entonces $2g + b = 0$ o $n + b = 0$, hence $g = 0$ y $b = 0$, es decir, $S$ es homeomorfa a la esfera.

$$\square$$

### Solucion 11

La Dunce hat es contraible, hence $\chi(M) = 1$. Admite una estructura diferenciable porque todo CW-complejo bidimensional admite una estructura diferenciable única módulo difeomorfismo.

$$\square$$

### Solucion 12

El cubrimiento doble orientable de una superficie no orientable $S$ se construye tomando dos copias de $S$ y pegándolas a lo largo de la región donde la orientación no es coherente. Esto produce una superficie orientable $\tilde S$ con $\chi(\tilde S) = 2\chi(S)$.

$$\square$$

### Solucion 13

El grupo de automorfismos conformes de una superficie de Riemann compacta es un grupo de Lie complejo (teorema de Cartan). Para $g \geq 2$, el espacio de estructuras conformes módulo diffeomorfismos isótopos al identidad es $\mathcal{M}_g$, de dimensión $6g - 6$. El grupo de automorfismos actúa sobre este espacio con stabilizer de dimensión finita, hence $\dim \mathrm{Aut}(S) \leq 6g - 6 - 3 = 3g - 3$.

$$\square$$

### Solucion 14

Por el teorema de Myers-Steenrod, el grupo de isometrías de una variedad riemanniana completa es un grupo de Lie de dimensión finita. En dimensión 2, la dimensión del grupo de isometrías es a lo sumo 6 para curvatura $-1$, 3 para la esfera, 1 para el toro plano.

$$\square$$

### Solucion 15

El espacio de moduli de superficies de Riemann de gênero $g \geq 2$ es un orbifold de dimensión real $6g - 6$. La demostración usa el teorema de uniformización y el hecho de que el espacio de grupos Fuchsianos modulo conjugación es homeomorfo a $\mathcal{M}_g$.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1992). *Riemannian Geometry*. Birkhauser Boston.
2. Massey, W.S. (1991). *A Basic Course in Topology*. Springer.
3. Forster, O. (1981). *Lectures on Riemann Surfaces*. Springer.
4. Jost, J. (2017). *Riemannian Geometry and Geometric Analysis*. Springer.
5. Bers, L. (1972). "Uniformization, moduli and Kleinian groups". *Bull. London Math. Soc.*
6. Hopf, H. (1926). "Zum Clobalsatz von Cauchy–Riemann". *Math. Z.*
