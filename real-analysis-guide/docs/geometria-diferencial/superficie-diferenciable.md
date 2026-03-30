---
title: Superficie Diferenciable
description: Atlas suaves, cambios de coordenadas, funciones diferenciables, parametrizaciones e inmersiones regulares.
---

# Superficie Diferenciable

## Del atlas topologico al atlas suave

Una superficie diferenciable es una superficie topologica equipada con un atlas cuyos cambios de coordenadas son suaves. Esta exigencia permite trasladar calculo diferencial desde abiertos del plano hacia la superficie.

## Definicion

Una superficie topologica $S$ es diferenciable si posee un atlas

$$
\{(U_\alpha,\varphi_\alpha)\}
$$

tal que, para toda superposicion no vacia,

$$
\varphi_\beta\circ\varphi_\alpha^{-1}
$$

es de clase $C^\infty$ entre abiertos de $\mathbb{R}^2$.

## Funciones suaves

Una funcion $f:S\to\mathbb{R}$ es suave si en cada carta local la composicion

$$
f\circ\varphi^{-1}
$$

es suave en el sentido usual del calculo multivariable.

## Aplicaciones suaves entre superficies

Si $F:S\to M$ es una aplicacion entre superficies diferenciables, se dice suave si todas sus expresiones en coordenadas locales son suaves.

## Parametrizaciones locales

Una parametrizacion local es una aplicacion

$$
X:V\subset\mathbb{R}^2\to S
$$

que es homeomorfismo sobre su imagen y cuyas componentes coordinadas son suaves. En superficies inmersas en $\mathbb{R}^3$, suele verse a $X$ como aplicacion con valores en el ambiente.

## Superficies regulares en R3

Una superficie regular en $\mathbb{R}^3$ puede describirse mediante parametrizaciones locales suaves $X(u,v)$ de rango dos:

$$
X_u\times X_v\neq 0.
$$

Esta condicion garantiza existencia de un plano tangente bien definido.

## Ejemplos clasicos

### Grafica de una funcion

Si $f:U\subset\mathbb{R}^2\to\mathbb{R}$ es suave, su grafica

$$
X(u,v)=(u,v,f(u,v))
$$

define una superficie regular.

### Esfera como nivel regular

La esfera puede describirse como nivel regular de

$$
F(x,y,z)=x^2+y^2+z^2.
$$

### Toro de revolucion

Es un ejemplo canonico de superficie compacta embebida con estructura diferenciable natural.

## Teorema del valor regular

Si $F:\mathbb{R}^3\to\mathbb{R}$ es suave y $c$ es valor regular, entonces

$$
F^{-1}(c)
$$

es una superficie regular. Esta es una de las maneras mas eficaces de producir superficies.

## Intrinseco frente a extrinseco

La estructura diferenciable es intrinseca: no depende de estar inmersa en un espacio euclideo. En cambio, nociones como la segunda forma fundamental o la curvatura normal si dependen de la inmersion en el ambiente.

## Cierre

Una superficie diferenciable es una variedad de dimension dos sobre la que el calculo diferencial tiene sentido de manera coherente entre cartas. Este paso conceptual es el puente entre topologia local plana y geometria diferencial propiamente dicha.

## Ejercicios

### Ejercicio 1

Sea $S = \{(x,y,z) \in \mathbb{R}^3 : x^2 + y^2 - z^2 = 1\}$. Demostrar que $S$ es una superficie diferenciable. Encontrar un atlas maximal.

### Ejercicio 2

Sea $f: \mathbb{R}^2 \to \mathbb{R}$ suave y $S = \{(x,y,f(x,y))\}$. Demostrar que $S$ es una superficie diferenciable. Calcular el plano tangente en un punto.

### Ejercicio 3

Sea $S$ una superficie diferenciable y $\phi: S \to \mathbb{R}$ suave. Si $p \in S$ es un punto crtico de $\phi$, demostrar que el gradiente $\nabla\phi(p)$ se anula en $T_pS$.

### Ejercicio 4

Sea $M$ la suma conexa de $g$ torus. ¿Es $M$ una superficie diferenciable? Calcular su caracteristica de Euler.

### Ejercicio 5

Sea $S$ una superficie diferenciable con atlas $\{(U_\alpha, \varphi_\alpha)\}$. Demostrar que si $S$ admite una funcion de Morse global, entonces $S$ es difeomorfa a $\mathbb{R}^2$ o a un disco.

### Ejercicio 6

Sea $S = S^2$ la esfera unitaria. Encontrar un atlas de seis cartas (proyecciones desde los seis ejes) que cubre $S$.

### Ejercicio 7

Sea $M$ una superficie no orientable. Demostrar que $M$ no admite ninguna 2-forma diferencial que no se anule en ninguna parte.

### Ejercicio 8

Sea $S$ una superficie diferenciable Hausdorff. Demostrar que $S$ admite una metrica riemanniana.

### Ejercicio 9

Sea $F: S \to \tilde S$ un difeomorfismo entre superficies diferenciables. Demostrar que $dF_p: T_pS \to T_{F(p)}\tilde S$ es un isomorfismo lineal.

### Ejercicio 10

Sea $S$ la superficie de un cono (sin el vertice). Demostrar que $S$ es diferenciable iff se le retira el vertice.

### Ejercicio 11

Sea $M$ una superficie diferenciable compacta sin borde. Demostrar que $\chi(M) \leq 2$ con igualdad iff $M \cong S^2$.

### Ejercicio 12

Sea $S$ una superficie diferenciable y $G$ su grupo de difeomorfismos. Demostrar que $G$ es un grupo de Lie de dimension infinita.

### Ejercicio 13

Sea $S$ una superficie diferenciable con estructura compleja誘導 (atlas cuyas transiciones son holomorphic). Demostrar que $S$ es una superficie de Riemann.

### Ejercicio 14

Sea $M$ una superficie diferenciable y $N \subset M$ un subconjunto abierto. Demostrar que $N$ hereda una estructura de superficie diferenciable canonica.

### Ejercicio 15

Sea $S$ una superficie diferenciable en $\mathbb{R}^3$ con la metrica inducida. Demostrar que la conexion de Levi-Civita sobre $S$ puede calcularse mediante la proyeccion ortogonal de la derivada direccional de $\mathbb{R}^3$.

## Soluciones detalladas

### Solucion 1

$F(x,y,z) = x^2+y^2-z^2-1$. $\nabla F = (2x, 2y, -2z)$, que se anula solo en $(0,0,0)$, pero $F^{-1}(0)$ no contiene ese punto. Por el teorema de valor regular, $S = F^{-1}(0)$ es una superficie diferenciable. Un atlas puede construirse proyectando desde los ejes $x$, $y$, $z$.

$$\square$$

### Solucion 2

Parametrizando $X(u,v) = (u,v,f(u,v))$, se verifica que $X_u = (1,0,f_u)$ y $X_v = (0,1,f_v)$ son linealmente independientes en todo punto. EI plano tangente en $(x_0,y_0,f(x_0,y_0))$ es $\{(x_0,y_0,f(x_0,y_0)) + a(1,0,f_u) + b(0,1,f_v) : a,b \in \mathbb{R}\}$.

$$\square$$

### Solucion 3

Por definicion, $p$ es crtico si $d\phi_p(v) = 0$ para todo $v \in T_pS$. En terminos de coordenadas locales, $d\phi_p$ es la diferencial usual, que se anula iff todas las derivadas parciales se anulan, es decir, el gradiente (como 1-forma) se anula.

$$\square$$

### Solucion 4

La suma conexa de $g$ torus es una superficie diferenciable (se pueden pegar torus usando discos diferenciables). Su caracteristica de Euler es $\chi = 2 - 2g$.

$$\square$$

### Solucion 5

Una funcion de Morse global tiene ndices 0 y 2 en una superficie, lo que indica que la superficie es homeomorfa a $\mathbb{R}^2$ o a un disco.

$$\square$$

### Solucion 6

Las seis proyecciones estereograficas desde los polos norte y sur de los ejes $x$, $y$ y $z$ cubren la esfera con abiertos que no se solapan problematicamente.

$$\square$$

### Solucion 7

Si existiera $\omega \neq 0$ en todas partes, localmente $\omega = f\,du\wedge dv$ con $f \neq 0$. El signo de $f$ determinara una orientacion coherente, contradiction.

$$\square$$

### Solucion 8

Sean $\{(U_\alpha, \varphi_\alpha)\}$ las cartas. En cada carta, la metrica euclidea de $\mathbb{R}^2$ induce una metrica riemanniana sobre $U_\alpha$. Por particion de la unidad, se combinan en una metrica global.

$$\square$$

### Solucion 9

Como $F$ es difeomorfismo, $dF_p$ es invertible en cada punto: si $dF_p(v) = 0$, entonces por linealidad y la propiedad de difeomorfismo local, $v = 0$. Por tanto $dF_p$ es inyectivo entre espacios de la misma dimension, hence isomorfismo.

$$\square$$

### Solucion 10

El cono con vertice es homeomorfo a $\mathbb{R}^2$ pero el vertice no tiene entorno homeomorfo a $\mathbb{R}^2$, hence no es una variedad. Sin el vertice, es difeomorfo a $\mathbb{R}^2$, hence diferenciable.

$$\square$$

### Solucion 11

Por Gauss-Bonnet, $\int_S K\,dA = 2\pi\chi(S)$. Si $S$ es compacta sin borde y $\chi(S) > 2$, entonces $\int_S K\,dA > 4\pi$, lo que requiere $K > 0$ en todas partes, hence $S \cong S^2$ por clasificacion.

$$\square$$

### Solucion 12

El grupo de difeomorfismos de una superficie es un grupo de Lie infinito-dimensional (grupo de diffeomorfismos de clase $C^k$ para todo $k$). La estructura de grupo de Lie infinito-dimensional se sigue del teorema de Nash-Moser.

$$\square$$

### Solucion 13

Las transiciones holomorphic definen una estructura compleja sobre $S$, es decir, un atlas de cartas complejas. Esto convierte $S$ en una superficie de Riemann.

$$\square$$

### Solucion 14

Las cartas de $N$ son las restricciones de las cartas de $M$ a $N$. Como $N$ es abierto, las transiciones son las restricciones de las transiciones de $M$, que son suaves. Hence $N$ hereda una estructura diferenciable natural.

$$\square$$

### Solucion 15

La conexion de Levi-Civita sobre una subvariedad de $\mathbb{R}^3$ se obtiene proyectando la derivada direccional usual de $\mathbb{R}^3$ sobre el espacio tangente. Es decir, $D_X^S Y = \pi_{T_pS}(D_X^{\mathbb{R}^3} Y)$.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1992). *Riemannian Geometry*. Birkhauser Boston.
2. Lee, J.M. (2018). *Introduction to Riemannian Manifolds*. Springer.
3. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 1. Publish or Perish.
4. Warner, F.W. (1983). *Foundations of Differentiable Manifolds and Lie Groups*. Springer.
5. Jost, J. (2017). *Riemannian Geometry and Geometric Analysis*. Springer.
