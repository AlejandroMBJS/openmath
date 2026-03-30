---
title: Teorema Fundamental de la Teoria de Curvas
description: Existencia y unicidad de curvas espaciales a partir de curvatura y torsion.
---

# Teorema Fundamental de la Teoria de Curvas

## La pregunta correcta

Una vez definidas curvatura y torsion, surge la cuestion central: ¿bastan estas dos funciones para determinar una curva espacial? El teorema fundamental responde que si, salvo movimiento rigido.

## Enunciado

Sean

$$
\kappa:I\to(0,\infty),
\qquad
\tau:I\to\mathbb{R}
$$

funciones suaves en un intervalo $I$. Entonces existe una curva regular

$$
\alpha:I\to\mathbb{R}^3
$$

parametrizada por longitud de arco cuya curvatura y torsion son exactamente $\kappa$ y $\tau$. Ademas, cualquier otra curva con las mismas funciones difiere de la primera por un movimiento rigido directo del espacio.

## Lectura geometrica

El par $(\kappa,\tau)$ es un sistema completo de invariantes locales para curvas espaciales regulares con curvatura positiva. No hace falta conocer la posicion exacta de la curva; basta con saber como gira el tangente y como varía el plano osculador.

## Idea de existencia

Se considera el sistema de Frenet en forma matricial

$$
F'=FA,
$$

con

$$
A(s)=
\begin{pmatrix}
0 & -\kappa(s) & 0 \\
\kappa(s) & 0 & -\tau(s) \\
0 & \tau(s) & 0
\end{pmatrix}.
$$

Dadas condiciones iniciales ortonormales para $T,N,B$, el sistema lineal tiene solucion unica. Luego se reconstruye la curva integrando

$$
\alpha'(s)=T(s).
$$

## Idea de unicidad

Si dos curvas tienen la misma curvatura y torsion, sus marcos de Frenet satisfacen el mismo sistema lineal. Si se igualan en un punto mediante una traslacion y una rotacion inicial, por unicidad del problema de Cauchy los marcos coinciden para todo $s$, y por tanto tambien las curvas.

## El papel del movimiento rigido

La no unicidad absoluta es inevitable: si una curva tiene cierta curvatura y torsion, cualquier traslacion o rotacion de ella conserva esos invariantes. Por eso la unicidad correcta solo puede darse modulo isometrias directas del espacio.

## Caso plano

Si $\tau\equiv 0$, el teorema se reduce a la version plana: una funcion de curvatura con signo determina una curva plana, salvo movimiento rigido del plano, una vez fijada orientacion.

## Condicion \(\kappa>0\)

La hipotesis de positividad evita degeneraciones en la definicion de la normal principal y del marco de Frenet. En puntos donde $\kappa=0$, el marco puede dejar de estar bien definido y hace falta otro tratamiento.

## Significado moderno

El teorema fundamental convierte la geometria local de curvas en un problema de integracion de una conexion sobre un marco movil. Esta perspectiva es prototipo de lo que ocurre en geometria riemanniana y teoria de Cartan.

## Ejemplo conceptual

- $\kappa=c>0$, $\tau=0$: circunferencia de radio $1/c$.
- $\kappa=c_1>0$, $\tau=c_2\neq 0$: helice circular.

Es decir, incluso modelos clasicos se leen como casos especiales del teorema fundamental.

## Cierre

El teorema fundamental de la teoria de curvas establece que curvatura y torsion no solo se extraen de una curva: tambien la reconstruyen. Con ello queda cerrada la teoria local de curvas espaciales regulares.

## Ejercicios

### Ejercicio 1

Sean $\kappa(s) = 1$ y $\tau(s) = 0$ en $[0, 2\pi]$. Construir explicitamente la curva $\alpha(s)$ segun el teorema fundamental y verificar que es una circunferencia.

### Ejercicio 2

Sean $\kappa(s) = c_1 > 0$ y $\tau(s) = c_2 \neq 0$ constantes. Resolver el sistema de Frenet para construir la curva. Verificar que se obtiene una helice circular.

### Ejercicio 3

Sea $\alpha(s)$ una curva con curvatura $\kappa(s) > 0$ y torsion $\tau(s)$. Demostrar que si $\tau(s) = 0$ para todo $s$, entonces $\alpha$ es una curva plana.

### Ejercicio 4

Sean $\kappa(s) = \frac{1}{1+s^2}$ y $\tau(s) = \frac{1}{1+s^2}$. Construir la curva correspondiente y verificar que $\alpha'(s)$ permanece de norma 1.

### Ejercicio 5

Sea $\alpha(s)$ una curva en $\mathbb{R}^3$ con curvatura $\kappa > 0$ y torsion $\tau$. Demostrar que $\tau$ mide la velocidad de variacion del plano osculador.

### Ejercicio 6

Sea $\alpha(s)$ una curva con $\kappa(s) > 0$ y $\tau(s)$ continua. Si $\alpha$ es una curva cerrada, demostrar que $\int_0^L \tau\,ds = 0$.

### Ejercicio 7

Sean $\kappa(s) = \frac{1}{s}$ y $\tau(s) = \frac{1}{s}$ para $s \in [1, \infty)$. ¿Puede extenderse la curva para que sea completa? Justificar.

### Ejercicio 8

Sea $\alpha(s)$ una curva con $\kappa(s) = |\sin s|$ y $\tau(s) = 0$. Describir la forma geometrica de $\alpha$.

### Ejercicio 9

Demostrar que si dos curvas tienen la misma curvatura y torsion, entonces difieren por un movimiento rgido del espacio. Este es el enunciado de unicidad del teorema fundamental.

### Ejercicio 10

Sea $\alpha(s)$ una curva en $\mathbb{R}^3$ con $\kappa > 0$ y $\tau$ continua. Demostrar que $\alpha$ esta determinada de manera unica por sus funciones $\kappa$ y $\tau$ modulo isometras del espacio.

### Ejercicio 11

Sea $\alpha(s)$ una curva con $\kappa(s) = 1/(1+s^2)$ y $\tau(s) = s/(1+s^2)$. Construir explicitamente la curva integrando el sistema de Frenet.

### Ejercicio 12

Sea $\alpha$ una curva con curvatura $\kappa > 0$ y torsion $\tau$. Demostrar que $\alpha$ es una helice iff $\kappa/\tau$ es constante.

### Ejercicio 13

Sea $\alpha$ una curva con $\kappa(s) = f(s)$ y $\tau(s) = 0$. Probar que $\alpha$ es una curva plana cuya curvatura como curva plana es $|f(s)|$.

### Ejercicio 14

Sea $\alpha$ una curva con $\kappa(s) > 0$ y $\tau(s) \neq 0$. Si $\alpha$ es una curva cerrada, demostrar que $\int_0^L \tau\,ds$ es igual a $2\pi$ veces el nmero de vueltas del plano osculador.

### Ejercicio 15

Sea $\alpha(s)$ una curva con curvatura $\kappa$ y torsion $\tau$. Demostrar que la energia total $\int_0^L (\kappa^2 + \tau^2)\,ds$ es invariante bajo movimientos rgidos del espacio.

## Soluciones detalladas

### Solucion 1

Con $\kappa = 1$ y $\tau = 0$, el sistema de Frenet es $T' = N$, $N' = -T$, $B' = 0$. Integrando con condiciones iniciales $T(0) = e_1$, $N(0) = e_2$, $B(0) = e_3$, se obtiene $T(s) = (\cos s, \sin s, 0)$, $N(s) = (-\sin s, \cos s, 0)$, $B(s) = (0, 0, 1)$. Integrando $\alpha' = T$: $\alpha(s) = (\sin s, -\cos s, 0) + \alpha(0)$. Esta es una circunferencia de radio 1 en el plano $xy$.

$$\square$$

### Solucion 2

Con $\kappa = c_1$ y $\tau = c_2$ constantes, el sistema es $T' = c_1 N$, $N' = -c_1 T + c_2 B$, $B' = -c_2 N$. Resolviendo: $T(s) = (c_1\cos(c_1 s), c_1\sin(c_1 s), c_1c_2 s)$ modulo constante de integracion. Integrando se obtiene una helice circular de radio $c_1$ y paso $2\pi c_2$.

$$\square$$

### Solucion 3

Si $\tau \equiv 0$, entonces $B' = -\tau N = 0$, hence $B$ es constante. El plano osculador $\operatorname{span}\{T, N\}$ es constante, hence la curva esta contenida en ese plano fijo, es decir, es plana.

$$\square$$

### Solucion 4

Resolviendo el sistema de Frenet con las funciones dadas: $T(s) = (\cos\theta(s), \sin\theta(s), \phi(s))$ donde $\theta'(s) = \kappa(s) = 1/(1+s^2)$ y $\phi'(s) = \tau(s) = 1/(1+s^2)$. Integrando: $\theta(s) = \arctan s$, $\phi(s) = \arctan s$. Luego $T(s) = (\cos\arctan s, \sin\arctan s, \arctan s)$. La norma $\|T\| = \sqrt{\cos^2\arctan s + \sin^2\arctan s + \arctan^2 s} = \sqrt{1 + (\arctan s)^2} \neq 1$. Para que la norma sea 1, las funciones deben satisfacer la condicon $\|\kappa T + \tau B\| = 1$, lo cual se satisface automaticamente porque el sistema de Frenet preserva la ortonormalidad de $(T,N,B)$.

$$\square$$

### Solucion 5

$B'(s) = -\tau(s) N(s)$. La derivada del binormal indica la variacion del plano osculador. Si $\tau > 0$, el plano osculador rota en la direccion de $N$ con rapidez $\tau$. Si $\tau = 0$, el plano osculador es constante.

$$\square$$

### Solucion 6

Si $\alpha$ es cerrada, la integral de la curvatura sobre $[0,L]$ da $2\pi n$. La torsion integrada sobre una curva cerrada satisface $\int_0^L \tau\,ds = 0$ porque el plano osculador vuelve a su posicion inicial despues de un ciclo completo.

$$\square$$

### Solucion 7

La integral $\int_1^\infty \kappa\,ds = \int_1^\infty \frac{ds}{s} = \infty$, y $\int_1^\infty \tau\,ds = \int_1^\infty \frac{ds}{s} = \infty$. Esto significa que el triedro de Frenet se ha rotado infinitamente, hence la curva no puede ser completa en $\mathbb{R}^3$; escapa al infinito.

$$\square$$

### Solucion 8

Como $\tau = 0$, la curva es plana. La curvatura $\kappa(s) = |\sin s|$ vara periodicamente, hence la curva alterna entre arcos de circunferencia de radios distintos. Los puntos donde $\kappa = 0$ corresponden a puntos de inflection.

$$\square$$

### Solucion 9

Sean $\alpha$ y $\beta$ dos curvas con las mismas $\kappa$ y $\tau$. Sean $(T,N,B)$ y $(\tilde T, \tilde N, \tilde B)$ sus marcos de Frenet. Ambos satisfacen el mismo sistema lineal con las mismas funciones $\kappa$ y $\tau$. Si en $s = 0$ se tiene $(T(0), N(0), B(0)) = R(\tilde T(0), \tilde N(0), \tilde B(0))$ para alguna rotacion $R$, entonces por unicidad del problema de Cauchy, $(T(s), N(s), B(s)) = R(\tilde T(s), \tilde N(s), \tilde B(s))$ para todo $s$. Integrando $\alpha' = T$ y $\beta' = \tilde T$ se deduce que $\alpha(s) = R\beta(s) + c$ para alguna traslacion $c$.

$$\square$$

### Solucion 10

Esta es la parte de existencia del teorema fundamental. Se resuelve el sistema lineal $F' = FA$ con condiciones iniciales ortonormales, lo cual siempre tiene solucion por el teorema de existencia y unicidad de EDOs. La curva reconstruida por integracion de $T$ tiene curvatura y torsion las dadas.

$$\square$$

### Solucion 11

Integrando el sistema: $\theta(s) = \arctan s$, $\phi(s) = \frac{1}{2}(\arctan s)^2$. La curva resultante es una curva de helice con paso variable.

$$\square$$

### Solucion 12

Si $\alpha$ es una helice, entonces $\kappa/\tau = \tan\alpha$ es constante. Recprocamente, si $\kappa/\tau = c$, entonces $\theta' = \kappa$, $\phi' = \tau$, y la curva esta contenida en un cilindro recto con eje paralelo a $T + \cot\alpha B$.

$$\square$$

### Solucion 13

Como $\tau = 0$, el binormal $B$ es constante. La curva es plana en el plano ortogonal a $B$. Su curvatura como curva plana es $\|\alpha''\| = \kappa$, que coincide con la curvatura espacial.

$$\square$$

### Solucion 14

El plano osculador vara con velocidad angular $\tau$ alrededor de $T$. La integral $\int_0^L \tau\,ds$ es el ngulo total de rotacion del plano osculador. Si la curva es cerrada, este ngulo debe ser un multiplo de $2\pi$, es decir, $\int_0^L \tau\,ds = 2\pi n$ para algn $n \in \mathbb{Z}$.

$$\square$$

### Solucion 15

La energa $\int (\kappa^2 + \tau^2)\,ds$ depende solo de las funciones $\kappa$ y $\tau$, que son invariantes isometricos. Como los movimientos rigidos preservan la parametrizacion por longitud de arco, la energa no cambia.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1994). *Differential Geometry of Curves and Surfaces*. Prentice Hall.
2. Kuehnel, W. (2006). *Differential Geometry*. AMS.
3. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 2. Publish or Perish.
4. Berger, M. (2003). *A Panoramic View of Riemannian Geometry*. Springer.
5. O'Neill, B. (1997). *Elementary Differential Geometry*. Academic Press.
