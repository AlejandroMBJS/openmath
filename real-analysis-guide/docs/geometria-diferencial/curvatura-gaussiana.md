---
title: Curvatura Gaussiana
description: Producto de curvaturas principales, determinante del operador de forma y clasificacion local del doblado de una superficie.
---

# Curvatura Gaussiana

## Definicion

La curvatura gaussiana en un punto se define como

$$
K=\det S=\kappa_1\kappa_2,
$$

donde $S$ es el operador de forma y $\kappa_1,\kappa_2$ son las curvaturas principales.

## Significado

La curvatura gaussiana condensa el doblado extrinseco de la superficie en un solo escalar. A diferencia de la curvatura normal, no depende de elegir una direccion tangente.

## Formula de Gauss

En coordenadas locales,

$$
K=\frac{LN_c-M^2}{EG-F^2}.
$$

Aqui $E,F,G$ pertenecen a la primera forma fundamental y $L,M,N_c$ a la segunda.

## Lectura de signos

- $K>0$: el punto es eliptico;
- $K<0$: el punto es hiperbolico;
- $K=0$: el punto es parabolico o plano segun la segunda forma.

## Ejemplos

### Plano

En el plano,

$$
K=0.
$$

### Esfera unitaria

En la esfera unitaria,

$$
K=1.
$$

### Cilindro

En el cilindro,

$$
K=0,
$$

aunque la superficie esta claramente doblada en una direccion. Esto muestra que curvatura gaussiana cero no significa superficie plana en el sentido extrinseco, sino ausencia de curvatura intrinseca acumulada en dos direcciones independientes.

## Clasificacion local

### Punto eliptico

Si $K>0$, las curvaturas principales tienen el mismo signo. La superficie se dobla del mismo lado en todas las direcciones principales.

### Punto hiperbolico

Si $K<0$, las curvaturas principales tienen signos opuestos. La superficie tiene comportamiento de silla.

### Punto parabolico

Si $K=0$ y no todas las curvaturas normales son nulas, una curvatura principal se anula y la otra no.

### Punto plano

Si el operador de forma es nulo, toda curvatura normal se anula.

## Curvatura gaussiana como jacobiano de la aplicacion de Gauss

La igualdad

$$
K=\det(d\mathcal{N})
$$

interpreta a $K$ como factor de cambio de area orientada del mapa normal. Esta es una lectura profunda: la curvatura gaussiana mide como la superficie cubre la esfera de normales.

## Cierre

La curvatura gaussiana es el invariante central de la teoria local de superficies. Resume las curvaturas principales, clasifica puntos y anticipa el hecho extraordinario de Gauss: que, aunque se define extrinsecamente, es en realidad un invariante intrinseco.

## Ejercicios

### Ejercicio 1

Sea $S$ una superficie con $K > 0$ en todas partes. Demostrar que toda aplicacion de Gauss $\mathcal{N}: S \to S^2$ es suprayectiva.

### Ejercicio 2

Sea $S$ una superficie con $K < 0$ en todas partes. Demostrar que $\mathcal{N}: S \to S^2$ es un difeomorfismo local inyectivo.

### Ejercicio 3

Sea $S$ la pseudosfera. Calcular $K$ directamente desde la primera forma fundamental usando la formula de Brioschi.

### Ejercicio 4

Sea $S$ una superficie con $K > 0$ en todas partes. Demostrar que $S$ es diffeomorfa a la esfera o al plano proyectivo (teorema de Hadamard).

### Ejercicio 5

Sea $S$ un elipsoide. Calcular la curvatura gaussiana en los puntos de maxima y minima curvatura.

### Ejercicio 6

Sea $S$ una superficie con $K \geq 0$ en todas partes. Demostrar que el grupo fundamental de $S$ es trivial o ciclico.

### Ejercicio 7

Sea $S$ una superficie minima con $K < 0$ en todas partes. Demostrar que $S$ es diffeomorfa al plano.

### Ejercicio 8

Sea $S$ una superficie con $K > 0$ en todas partes. Demostrar que toda geodesica cerrada es homotopica a cero.

### Ejercicio 9

Sea $S$ una superficie de revolucion con perfil $(r(u), z(u))$. Demostrar que $K = -\frac{r''(u)}{r(u)}$ para la parametrizacion ortogonal.

### Ejercicio 10

Sea $S$ una superficie con $K = 0$ en todas partes. Demostrar que $S$ es localmente isometrica al plano.

### Ejercicio 11

Sea $S$ la superficie de Enneper. Calcular $K$ y verificar que $K < 0$ en todas partes.

### Ejercicio 12

Sea $S$ una superficie con $K > 0$. Si $p \in S$ es un punto umbílico, demostrar que $p$ es el unico punto umbílico iff $S$ es una esfera.

### Ejercicio 13

Sea $S$ una superficie con $K \leq 0$ en todas partes. Demostrar que no existen puntos umbílicos excepto si $K \equiv 0$.

### Ejercicio 14

Sea $S$ una superficie con $K > 0$. Si $S$ es completa, demostrar que $S$ es diffeomorfa a $S^2$ (teorema de Bonnet).

### Ejercicio 15

Sea $S$ una superficie con $K > 0$ en todas partes. Demostrar que $\|\mathcal{N}(p) - \mathcal{N}(q)\| \geq \sqrt{K(p)}\,d(p,q)$ para todo $p, q \in S$ (desigualdad de Hessian).

## Soluciones detalladas

### Solucion 1

Como $K = \det(d\mathcal{N}) > 0$, $d\mathcal{N}_p$ es un isomorfismo con determinante positivo para todo $p$. Por el teorema de la funcion inversa, $\mathcal{N}$ es un difeomorfismo local. Como $S$ es compacta, $\mathcal{N}(S)$ es un subconjunto compacto y abierto de $S^2$, hence $\mathcal{N}$ es suprayectiva.

$$\square$$

### Solucion 2

Como $K = \det(d\mathcal{N}) < 0$, $d\mathcal{N}_p$ es un isomorfismo lineal que invierte la orientacion. Si $\mathcal{N}$ no fuera inyectiva, existirían $p \neq q$ con $\mathcal{N}(p) = \mathcal{N}(q)$. Por Covering Space Theory, esto implicaria que $d\mathcal{N}$ tiene puntos críticos, contradiction con $K \neq 0$.

$$\square$$

### Solucion 3

La pseudosfera parametrizada por $X(u,v) = (\mathrm{sech}\,u\cos v, \mathrm{sech}\,u\sin v, u - \tanh u)$ da $E = \mathrm{sech}^2 u$, $F = 0$, $G = \mathrm{sech}^2 u\tanh^2 u + (1-\mathrm{sech}^2 u)^2 = 1$. Aplicando Brioschi con $E = \mathrm{sech}^2 u$, $G = 1$, $F = 0$:

$$K = \frac{1}{(EG-F^2)^2}\det\begin{pmatrix}0 & 0 & 0\\ 0 & E & 0\\ 0 & 0 & G\end{pmatrix} = \frac{EG}{E^2 G^2} = \frac{1}{EG} = -1.$$

$$\square$$

### Solucion 4

Si $K > 0$, la aplicacion de Gauss $\mathcal{N}: S \to S^2$ es un difeomorfismo local por ser $\det(d\mathcal{N}) > 0$. Si $S$ es simplemente conexa, $\mathcal{N}$ es un difeomorfismo global. Si no lo es, $\mathcal{N}$ es un cubrimiento de grado 1 o 2. Por tanto $S$ es diffeomorfa a $S^2$ o a $\mathbb{RP}^2$.

$$\square$$

### Solucion 5

Parametrizando el elipsoide por $(a\sin\varphi\cos\theta, b\sin\varphi\sin\theta, c\cos\varphi)$, se obtiene $K = \frac{abc}{(a^2\sin^2\varphi\cos^2\theta + b^2\sin^2\varphi\sin^2\theta + c^2\cos^2\varphi)^2}$. Los puntos de maxima curvatura son $(\pm a, 0, 0)$ y $(0, \pm b, 0)$ con $K = 1/a^2$ y $1/b^2$ respectively. El punto de mnima curvatura es $(0,0,\pm c)$ con $K = 1/c^2$.

$$\square$$

### Solucion 6

Si $K \geq 0$ en todas partes, por el teorema de Cartan-Hadamard, si $K < 0$ en alguna region entonces $\pi_1(S)$ es libre. Si $K > 0$ everywhere, por Bonnet $S$ es diffeomorfa a la esfera o al plano proyectivo, con $\pi_1$ trivial o $\mathbb{Z}_2$.

$$\square$$

### Solucion 7

Una superficie mínima completa con $K < 0$ es diffeomorfa al plano por el teorema de Osserman y los trabajos de Costa, Hoffman y Meeks.

$$\square$$

### Solucion 8

Si $K > 0$, por el teorema de Bonnet, $S$ es diffeomorfa a $S^2$, hence $\pi_1(S) = 0$ y toda geodesica closed es homotopica a cero.

$$\square$$

### Solucion 9

Parametrizando la superficie de revolucion: $X(u,v) = (r(u)\cos v, r(u)\sin v, z(u))$ con $E = (r'^2+z'^2)$, $F = 0$, $G = r^2$. Calculando la segunda forma fundamental y aplicando la formula de Gauss $K = (LN_c - M^2)/(EG - F^2)$ se obtiene $K = -\frac{r''}{r}$.

$$\square$$

### Solucion 10

Si $K = 0$ en todas partes, por el teorema egregio de Gauss la curvatura depende solo de la metrica. Localmente la metrica es isometrica a la del plano, hence $S$ es localmente isometrica al plano.

$$\square$$

### Solucion 11

La superficie de Enneper parametrizada por $(u - u^3/3 + uv^2, v - v^3/3 + vu^2, u^2 - v^2)$ da $K = -1/(1+u^2+v^2)^4 < 0$ en todas partes.

$$\square$$

### Solucion 12

Si $S$ es una esfera, todos los puntos son umbílicos y $K > 0$. Recprocamente, por el teorema de классификации de superficies con $K > 0$, si $p$ es el unico punto umbílico, la superficie debe ser una esfera y $p$ es un punto de simetra.

$$\square$$

### Solucion 13

Si existe un punto umbílico $p$ con $S_p = \kappa I$, entonces $K(p) = \kappa^2 > 0$, contradiction con $K \leq 0$. Si $K \equiv 0$, todos los puntos satisfacen $K = 0$, y los puntos umbílicos existen en superficies planas.

$$\square$$

### Solucion 14

Por el teorema de Bonnet, si $K > 0$ y $S$ es completa, entonces $S$ es diffeomorfa a $S^2$.

$$\square$$

### Solucion 15

Por la desigualdad de сравнения de Jacobi, si $K > 0$, las geodésicas tienen un primer punto conjugado a distancia $\pi/\sqrt{K_{\max}}$. Esto implica que $\mathcal{N}$ es Lipschitz con constante $\sqrt{K(p)}$.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1992). *Riemannian Geometry*. Birkhauser Boston.
2. Osserman, R. (1986). *Curvature*. Cambridge University Press.
3. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 3. Publish or Perish.
4. Jost, J. (2017). *Riemannian Geometry and Geometric Analysis*. Springer.
5. Chavel, I. (2006). *Riemannian Geometry*. Cambridge University Press.
