---
title: Caracterizacion de las Superficies
description: Equivalencia entre descripciones locales como graficas, niveles regulares y parametrizaciones.
---

# Caracterizacion de las Superficies

## Varias puertas de entrada

Una superficie regular puede aparecer de muchas maneras:

- como imagen de una parametrizacion regular;
- como grafica de una funcion suave;
- como conjunto de nivel regular de una funcion;
- como variedad diferenciable abstracta de dimension dos.

Una parte central de la teoria consiste en entender la equivalencia local entre estas descripciones.

## Como grafica local

Cerca de un punto regular, una superficie inmersa en $\mathbb{R}^3$ puede escribirse localmente como grafica

$$
z=f(x,y)
$$

o una variante coordenada equivalente. Esto es consecuencia del teorema de la funcion implicita.

## Como nivel regular

Si $F:\mathbb{R}^3\to\mathbb{R}$ es suave y $c$ es valor regular, entonces

$$
F^{-1}(c)
$$

es una superficie regular. Esta descripcion es especialmente util para esfera, toro, paraboloides y muchas superficies definidas por ecuaciones.

## Como parametrizacion regular

Una parametrizacion local

$$
X:U\subset\mathbb{R}^2\to\mathbb{R}^3
$$

con

$$
X_u\times X_v\neq 0
$$

produce una superficie regular. Esta es la forma mas flexible para calculos concretos con formas fundamentales.

## Equivalencia local

Las tres descripciones anteriores son localmente equivalentes:

- una grafica es una parametrizacion natural;
- un nivel regular se convierte localmente en grafica por el teorema implicito;
- una parametrizacion regular puede verse localmente como grafica tras elegir coordenadas adecuadas.

## Version abstracta

Desde el punto de vista moderno, una superficie es una variedad diferenciable de dimension dos. Las inmersiones en $\mathbb{R}^3$ son una realizacion adicional, no parte esencial de la definicion abstracta.

## Intrinseco frente a representacion

Caracterizar una superficie no significa fijar una ecuacion unica. La misma superficie puede describirse por muchas parametrizaciones y muchas ecuaciones locales. Lo geometricamente significativo son las estructuras que sobreviven a cambios de coordenadas.

## Cierre

Las superficies pueden describirse localmente por graficas, niveles regulares o parametrizaciones. La equivalencia entre estas descripciones permite pasar de la intuicion del calculo multivariable a la formulacion moderna de variedad diferenciable.

## Ejercicios

### Ejercicio 1

Sea $S = \{(x,y,z) \in \mathbb{R}^3 : x^2 + y^2 - z^2 = 1\}$. Probar que $S$ es una superficie diferenciable usando el teorema de la funcion implicita.

### Ejercicio 2

Sea $S$ una superficie diferenciable y $p \in S$. Demostrar que existen coordenadas locales $(U, \varphi)$ con $\varphi(p) = 0$ tales que $\varphi(U \cap S) = B_\epsilon(0) \subset \mathbb{R}^2$.

### Ejercicio 3

Sea $F: \mathbb{R}^3 \to \mathbb{R}$ suave con $\nabla F \neq 0$ en $F^{-1}(0)$. Demostrar que $F^{-1}(0)$ es una superficie diferenciable.

### Ejercicio 4

Sea $S$ la grafica de $f(x,y) = xy$. Escribir $S$ como un conjunto de nivel regular de una funcion $F: \mathbb{R}^3 \to \mathbb{R}$.

### Ejercicio 5

Sea $S$ una superficie diferenciable. Demostrar que existe una función de Morse global sobre $S$ iff $S$ es diffeomorfa a $\mathbb{R}^2$ o a un disco.

### Ejercicio 6

Sea $M$ la suma conexa de $g$ torus. Demostrar que $M$ es diffeomorfa a una superficie de género $g$.

### Ejercicio 7

Sea $S$ una superficie diferenciable Hausdorff. Demostrar que $S$ admite una metrica riemanniana.

### Ejercicio 8

Sea $S$ una superficie diferenciable y $\phi: S \to \mathbb{R}$ suave. Si $p$ es un punto crtico de $\phi$, demostrar que el gradiente $\nabla\phi(p)$ se anula en $T_pS$.

### Ejercicio 9

Sea $S = S^2$ la esfera. Encontrar una carta local que parametrice un abierto de $S$ como grafica.

### Ejercicio 10

Sea $S$ una superficie diferenciable con borde $\partial S$. Si $\partial S \neq \emptyset$, demostrar que $S$ no es compactada sin borde.

### Ejercicio 11

Sea $S$ una superficie diferenciable. Demostrar que todo punto $p \in S$ admite una vecindad diffeomorfa a un abierto de $\mathbb{R}^2$.

### Ejercicio 12

Sea $F: S \to \tilde S$ un difeomorfismo entre superficies diferenciables. Demostrar que $dF_p: T_pS \to T_{F(p)}\tilde S$ es un isomorfismo.

### Ejercicio 13

Sea $S$ una superficie no orientable. Demostrar que $S$ no admite ninguna 2-forma diferencial que no se anule en ninguna parte.

### Ejercicio 14

Sea $S$ una superficie diferenciable y $G$ su grupo de difeomorfismos. Demostrar que $G$ es un grupo de Lie de dimension infinita.

### Ejercicio 15

Sea $S$ una superficie diferenciable con estructura compleja. Demostrar que $S$ es una superficie de Riemann.

## Soluciones detalladas

### Solucion 1

$F(x,y,z) = x^2+y^2-z^2-1$. $\nabla F = (2x, 2y, -2z)$, que se anula solo en $(0,0,0)$. Como $F^{-1}(0)$ no contiene $(0,0,0)$, $\nabla F \neq 0$ en toda la superficie. Por el teorema de valor regular, $S$ es una superficie diferenciable.

$$\square$$

### Solucion 2

Sea $(U, \varphi)$ una carta con $\varphi(p) = 0$. Como $\varphi$ es un homeomorfismo sobre su imagen, existe $\epsilon > 0$ tal que $\varphi(U) \supset B_\epsilon(0)$. Definiendo $V = \varphi^{-1}(B_\epsilon(0))$, se obtiene la carta requerida.

$$\square$$

### Solucion 3

Esta es la aplicacion directa del teorema de valor regular: si $c$ es un valor regular de $F$, entonces $F^{-1}(c)$ es una subvariedad de dimension $3-1 = 2$.

$$\square$$

### Solucion 4

$S = \{(x,y,z) : z = xy\} = F^{-1}(0)$ con $F(x,y,z) = z - xy$.

$$\square$$

### Solucion 5

Una funcion de Morse global sobre una superficie tiene ndices 0 y 2, lo que indica que la superficie es contractible. Por el teorema de Morse, una superficie con funcion de Morse global es diffeomorfa a $\mathbb{R}^2$ o a un disco.

$$\square$$

### Solucion 6

Por el teorema de classificacion de superficies, toda superficie compacta orientable de gênero $g$ es diffeomorfa a la suma conexa de $g$ torus.

$$\square$$

### Solucion 7

Sean $\{(U_\alpha, \varphi_\alpha)\}$ las cartas. En cada carta se induce la metrica euclidea de $\mathbb{R}^2$. Usando una particion de la unidad subordinada a la cubierta $\{U_\alpha\}$, se combinan las metricas en una metrica riemanniana global.

$$\square$$

### Solucion 8

Por definicion, $p$ es crtico si $d\phi_p(v) = 0$ para todo $v \in T_pS$. En terminos de coordenadas locales, esto significa que las derivadas parciales se anulan, es decir, el gradiente es cero.

$$\square$$

### Solucion 9

Proyectando estereograficamente desde el polo norte: $\varphi(x,y,z) = \frac{(x,y)}{1-z}$. Esta carta parametrica la esfera menos el polo norte como grafica $z = \frac{|x|^2 - 1}{|x|^2 + 1}$.

$$\square$$

### Solucion 10

Si $\partial S \neq \emptyset$, entonces $S$ tiene puntos con entorno homeomorfo al semiplano $\mathbb{H}^2$. Esto impide que $S$ sea compacta sin borde, porque todo punto de una superficie sin borde tiene un entorno homeomorfo a $\mathbb{R}^2$.

$$\square$$

### Solucion 11

Por definicion de superficie diferenciable, cada punto tiene una carta local homeomorfa a un abierto de $\mathbb{R}^2$. Esta carta es la vecindad requerida.

$$\square$$

### Solucion 12

Como $F$ es difeomorfismo, $dF_p$ es invertible: si $dF_p(v) = 0$, entonces por la propiedad de difeomorfismo local, $v = 0$. Como $dF_p$ es lineal entre espacios de la misma dimension, es isomorfismo.

$$\square$$

### Solucion 13

Si existiera $\omega \neq 0$ en todas partes, localmente $\omega = f\,du\wedge dv$ con $f \neq 0$. El signo de $f$ determinara una orientacion coherente, contradiction con la no orientabilidad.

$$\square$$

### Solucion 14

El grupo de difeomorfismos $\mathrm{Diff}(S)$ es un grupo de Lie infinito-dimensional (grupo de diffeomorfismos de clase $C^k$). La estructura de grupo de Lie se sigue del teorema de Nash-Moser.

$$\square$$

### Solucion 15

Una estructura compleja sobre una superficie diferenciable es un atlas cuyas cartas de transición son holomorphic. Esto convierte la superficie en una superficie de Riemann por definicion.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1992). *Riemannian Geometry*. Birkhauser Boston.
2. Lee, J.M. (2018). *Introduction to Riemannian Manifolds*. Springer.
3. Warner, F.W. (1983). *Foundations of Differentiable Manifolds and Lie Groups*. Springer.
4. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 1. Publish or Perish.
