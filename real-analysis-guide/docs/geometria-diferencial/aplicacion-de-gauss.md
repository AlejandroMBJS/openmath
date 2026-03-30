---
title: Aplicacion de Gauss
description: Mapa normal de una superficie orientada, diferencial del normal y origen del operador de forma.
---

# Aplicacion de Gauss

## Normal como funcion geometrica

En una superficie orientada cada punto lleva asociado un vector normal unitario. Reunir todos esos normales produce una aplicacion natural desde la superficie hacia la esfera unitaria. Esa aplicacion es la aplicacion de Gauss.

## Definicion

Sea $S\subset\mathbb{R}^3$ una superficie orientada con normal unitario $N(p)$. Definimos

$$
\mathcal{N}:S\to S^2,
\qquad
\mathcal{N}(p)=N(p).
$$

Esta es la aplicacion de Gauss.

## Significado

La aplicacion de Gauss registra como gira el campo normal al moverse sobre la superficie. Por eso su diferencial contiene exactamente la informacion de curvatura extrinseca.

## Diferencial del mapa de Gauss

El diferencial en un punto

$$
d\mathcal{N}_p:T_pS\to T_{N(p)}S^2
$$

puede identificarse, via traslacion natural, con un operador lineal sobre $T_pS$. Su negativo es el operador de forma:

$$
S_p=-d\mathcal{N}_p.
$$

## Relacion con la segunda forma fundamental

La segunda forma fundamental puede escribirse como

$$
II_p(w,z)=I_p(S_pw,z).
$$

Por tanto, la aplicacion de Gauss y la segunda forma fundamental son dos caras del mismo objeto.

## Curvatura gaussiana como jacobiano

La curvatura gaussiana puede interpretarse como el determinante del diferencial del mapa de Gauss:

$$
K(p)=\det S_p.
$$

Geometricamente, esto mide el factor de cambio de area orientada entre la superficie y la esfera de normales.

## Curvatura media

La traza del operador de forma produce la curvatura media:

$$
H=\frac{1}{2}\operatorname{tr}(S).
$$

Ambas cantidades se obtienen a partir de los autovalores de $S$, es decir, las curvaturas principales.

## Ejemplos

### Plano

En el plano el normal es constante, luego

$$
d\mathcal{N}=0.
$$

Por tanto la curvatura gaussiana y la segunda forma fundamental son nulas.

### Esfera unitaria

En la esfera orientada hacia afuera, el normal coincide con la posicion. La aplicacion de Gauss es esencialmente la identidad, luego su diferencial es la identidad y la curvatura gaussiana vale $1$.

## Interpretacion local

Si el normal cambia mucho al movernos un poco sobre la superficie, la superficie esta muy curvada. Si casi no cambia, la superficie se parece localmente a un plano.

## Cierre

La aplicacion de Gauss convierte la geometria extrinseca de una superficie en una aplicacion hacia la esfera. Su diferencial contiene el operador de forma y, con el, toda la informacion de curvatura principal, media y gaussiana.

## Ejercicios

### Ejercicio 1

Sea $S$ una superficie orientada con aplicacion de Gauss $\mathcal{N}: S \to S^2$. Si $p \in S$ es un punto umbílico, demostrar que $\mathcal{N}$ es difeomorfica cerca de $p$.

### Ejercicio 2

Sea $S$ una superficie con $K > 0$ en todas partes. Demostrar que $\mathcal{N}: S \to S^2$ es un difeomorfismo local suprayectivo.

### Ejercicio 3

Sea $\mathcal{N}: S \to S^2$ la aplicacion de Gauss de una superficie orientada. Probar que $\mathcal{N}^*(\omega_{S^2}) = K\,\omega_S$, donde $\omega$ denota la 2-forma de area.

### Ejercicio 4

Sea $S$ la esfera unitaria. Demostrar que $\mathcal{N}$ es la identidad y que $d\mathcal{N}_p = \mathrm{id}: T_pS \to T_pS^2$ para todo $p$.

### Ejercicio 5

Sea $S$ un plano. Demostrar que $\mathcal{N}$ es constante y $d\mathcal{N} = 0$ en todas partes.

### Ejercicio 6

Sea $\mathcal{N}: S \to S^2$ la aplicacion de Gauss de una superficie orientada. Demostrar que $\det(d\mathcal{N}_p) = K(p)$.

### Ejercicio 7

Sea $S$ una superficie minima ($H = 0$). Si $\mathcal{N}$ es suprayectiva, demostrar que $S$ es la catenoide.

### Ejercicio 8

Sea $S$ una superficie con $K < 0$ en todas partes. Demostrar que $\mathcal{N}$ es un difeomorfismo local inyectivo iff $\mathcal{N}$ no tiene puntos críticos.

### Ejercicio 9

Sea $\mathcal{N}: S \to S^2$ la aplicacion de Gauss del toro de revolucion. Describir la imagen de $\mathcal{N}$. ¿Es $\mathcal{N}$ suprayectiva?

### Ejercicio 10

Sea $S$ una superficie orientada. Demostrar que $\mathcal{N}$ preserva la orientacion iff $K > 0$ en todas partes.

### Ejercicio 11

Sea $S$ una superficie con $K > 0$ en todas partes. Si $\mathcal{N}(p) = \mathcal{N}(q)$ para $p \neq q$, demostrar que existe una geodesica closed en $S$ que une $p$ y $q$.

### Ejercicio 12

Sea $\mathcal{N}: S \to S^2$ la aplicacion de Gauss. Si $S$ es completa con $K \geq c > 0$, demostrar que $\mathcal{N}$ es un difeomorfismo suprayectivo (teorema de Bonnet).

### Ejercicio 13

Sea $S$ una superficie con curvatura media $H$ constante no nula. Demostrar que $\mathcal{N}$ es un difeomorfismo local de grado $\pm 1$ iff $K \neq 0$.

### Ejercicio 14

Sea $S$ una superficie orientada con $\mathcal{N}: S \to S^2$. Demostrar que $\mathcal{N}$ es una aplicacion armonica iff $H = 0$.

### Ejercicio 15

Sea $S$ una superficie de Riemann con metrica conforme $g = e^{2\lambda}dz d\bar z$. Demostrar que la aplicacion de Gauss como aplicacion holomorfa $\phi: S \to \mathbb{CP}^1$ satisface $|\phi'| = e^\lambda$.

## Soluciones detalladas

### Solucion 1

En un punto umbílico, $S = \kappa \mathrm{id}$ para algun $\kappa \neq 0$. Por tanto $d\mathcal{N}_p = -S_p = -\kappa \mathrm{id}$, que es un isomorfismo lineal. Por el teorema de la funcion inversa, $\mathcal{N}$ es difeomórfico cerca de $p$.

$$\square$$

### Solucion 2

Como $K = \det(d\mathcal{N})$, si $K > 0$, entonces $d\mathcal{N}_p$ es un isomorfismo lineal con determinante positivo para todo $p$. Por el teorema de la funcion inversa, $\mathcal{N}$ es un difeomorfismo local. Como $S$ es compacta y $\mathcal{N}$ es continua, $\mathcal{N}(S)$ es un subconjunto compacto y abierto de $S^2$, hence $\mathcal{N}$ es suprayectiva.

$$\square$$

### Solucion 3

La 2-forma de area sobre $S$ es $\omega_S(v,w) = \langle v \times w, N\rangle$. Sobre $S^2$ es $\omega_{S^2}(d\mathcal{N}(v), d\mathcal{N}(w)) = \langle d\mathcal{N}(v) \times d\mathcal{N}(w), N \circ \mathcal{N}\rangle = \det(d\mathcal{N})\omega_S(v,w) = K\omega_S(v,w)$. Hence $\mathcal{N}^*(\omega_{S^2}) = K\,\omega_S$.

$$\square$$

### Solucion 4

Para la esfera unitaria, $N(p) = p$, luego $\mathcal{N} = \mathrm{id}$. El diferencial $d\mathcal{N}_p(v) = v$ para todo $v \in T_pS$, hence es la identidad sobre cada espacio tangente.

$$\square$$

### Solucion 5

En el plano, el normal $N$ es constante, hence $\mathcal{N}(p) = N$ es constante. Por tanto $d\mathcal{N}_p = 0$ en todas partes.

$$\square$$

### Solucion 6

Por definicion, $S_p = -d\mathcal{N}_p$. Como $K = \det(S_p) = \det(-d\mathcal{N}_p) = (-1)^2\det(d\mathcal{N}_p) = \det(d\mathcal{N}_p)$.

$$\square$$

### Solucion 7

Si $S$ es minima y $\mathcal{N}$ es suprayectiva, por el teorema de classificacion de superficies minimas completas en $\mathbb{R}^3$, $S$ debe ser la catenoide o el plano. Si $H = 0$ y $\mathcal{N}$ es suprayectiva, $S$ no puede ser el plano (cuyo normal es constante), hence es la catenoide.

$$\square$$

### Solucion 8

Si $K < 0$, $\det(d\mathcal{N}) < 0$, luego $d\mathcal{N}$ invierte la orientacion. Si no hay puntos críticos, $d\mathcal{N}$ es un isomorfismo en cada punto, hence $\mathcal{N}$ es un difeomorfismo local. Si $\mathcal{N}(p) = \mathcal{N}(q)$ con $p \neq q$, por compacidad de $S$, existe una geodesica closed que une $p$ y $q$.

$$\square$$

### Solucion 9

La imagen de $\mathcal{N}$ para el toro de revolucion cubre la esfera excepto los polos norte y sur. El grado de $\mathcal{N}$ es cero porque $\int_{T^2} K\,dA = 0$. $\mathcal{N}$ no es suprayectiva.

$$\square$$

### Solucion 10

$\mathcal{N}$ preserva la orientacion iff $\det(d\mathcal{N}) > 0$, es decir, iff $K > 0$. Si $K < 0$, invierte la orientacion.

$$\square$$

### Solucion 11

Si $\mathcal{N}(p) = \mathcal{N}(q)$ y $K > 0$, por el teorema de Hadamard, $\mathcal{N}$ es un cubrimiento de grado 1 o 2. Si es grado 1, $\mathcal{N}$ es inyectiva. Si es grado 2, por Covering Space Theory, existe una geodesica closed que une $p$ y $q$.

$$\square$$

### Solucion 12

Por el teorema de Bonnet, si $K \geq c > 0$, entonces $S$ es diffeomorfa a $S^2$ y $\mathcal{N}$ es suprayectiva. Mas directamente: $K > 0$ implica que $\mathcal{N}$ es un difeomorfismo local suprayectivo.

$$\square$$

### Solucion 13

Como $H = \frac{1}{2}\operatorname{tr}(S) = \frac{1}{2}\operatorname{tr}(-d\mathcal{N})$, se tiene que $\det(d\mathcal{N}) = \pm K \neq 0$ iff $K \neq 0$. Si $K \neq 0$, $d\mathcal{N}$ es un isomorfismo en cada punto, hence $\mathcal{N}$ es un difeomorfismo local de grado $\pm 1$.

$$\square$$

### Solucion 14

La aplicacion de Gauss $\mathcal{N}: S \to S^2$ es armonica iff su energia $\frac{1}{2}\int_S \|d\mathcal{N}\|^2\,dA$ es estacionaria. Usando las formulas de Weierstrass para inmersiones conformes, se prueba que la variacion de la energia es $2\int_S H\,\omega_S$, hence $\mathcal{N}$ es armonica iff $H = 0$.

$$\square$$

### Solucion 15

En coordenadas complejas conformes, la metrica es $g = e^{2\lambda}|dz|^2$. La aplicacion de Gauss como funcion holomorfa $\phi$ satisface $|\phi'| = e^\lambda$ por la identidad de Cauchy-Riemann para superficies de Riemann.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1992). *Riemannian Geometry*. Birkhauser Boston.
2. do Carmo, M.P.; Melenberguer, D. (1977). "Surfaces with constant mean curvature". *J. Differential Geom.*
3. Osserman, R. (1986). *Curvature*. Cambridge University Press.
4. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 3. Publish or Perish.
5. Jost, J. (2017). *Riemannian Geometry and Geometric Analysis*. Springer.
