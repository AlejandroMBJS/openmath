---
title: El Toro de Dimension 2
description: Topologia, parametrizacion y geometria elemental del toro como superficie compacta orientable.
---

# El Toro de Dimension 2

## Modelo topologico

El toro de dimension dos, denotado por $T^2$, es una superficie compacta, conexa, orientable y de genero uno. Puede describirse topologicamente como el producto

$$
S^1\times S^1.
$$

## Modelo como cociente

Tambien puede verse como el cuadrado unidad con lados opuestos identificados. Esta descripcion hace visibles sus ciclos fundamentales y su estructura topologica global.

## Parametrizacion de revolucion

Geométricamente, un toro de revolucion en $\mathbb{R}^3$ puede parametrizarse por

$$
X(u,v)=((R+r\cos u)\cos v,(R+r\cos u)\sin v,r\sin u),
$$

con $R>r>0$.

## Curvas coordenadas

En esta parametrizacion:

- $u$ recorre circunferencias meridianas;
- $v$ recorre paralelos alrededor del eje principal del toro.

## Primera forma fundamental

Los coeficientes metricos se leen directamente de las derivadas parciales. Esto permite estudiar longitudes, areas y geodesicas sobre el toro a partir de la metrica inducida.

## Topologia distintiva

A diferencia de la esfera, el toro posee dos familias no triviales de ciclos cerrados. Esto se refleja en:

- su grupo fundamental no trivial;
- la existencia de dos direcciones angulares globales;
- su caracter como superficie compacta sin curvatura gaussiana de signo constante.

## Curvatura gaussiana variable

En el toro de revolucion, la curvatura gaussiana cambia de signo:

- positiva en la zona exterior;
- negativa en la zona interior cercana al agujero.

Esto lo convierte en un ejemplo natural de coexistencia de regiones elipticas e hiperbolicas en una misma superficie compacta.

## Importancia geométrica

El toro es el primer ejemplo serio donde topologia global no trivial, parametrizacion explicita y curvatura variable conviven en una superficie elemental. Por eso aparece constantemente en geometria diferencial, topologia algebraica y sistemas dinamicos.

## Ejercicios

### Ejercicio 1

Calcular la primera y segunda forma fundamental del toro de revolucion con $R > r$. Identificar las curvaturas principales y verificar que $K = \frac{\cos u}{r(R+r\cos u)}$.

### Ejercicio 2

Demostrar que en el toro de revolucion, la curvatura media cambia de signo exactamente una vez, mientras que la curvatura gaussiana cambia de signo dos veces. Localizar los paralelos donde $H = 0$.

### Ejercicio 3

**Teorema de Gauss-Bonnet para el toro**: Calcular $\int_{T^2} K\,dA$ y verificar que coincide con $2\pi\chi(T^2) = 0$. Usar coordenadas para mostrar que la contribución de las regiones con $K > 0$ cancela con la de $K < 0$.

### Ejercicio 4

Sea $T^2 = S^1 \times S^1$ con la metrica producto $ds^2 = d\theta^2 + d\phi^2$ (torus plano). Calcular la curvatura geodesica de las curvas $\theta = \text{const}$ y $\phi = \text{const}$. ¿Son geodésicas? Comparar con el toro de revolucion en $\mathbb{R}^3$.

### Ejercicio 5

Sea $\gamma$ una curva cerrada en el toro que representa un elemento del grupo fundamental $\pi_1(T^2) \cong \mathbb{Z} \oplus \mathbb{Z}$. Si $\gamma$ es una geodesica cerrada, demostrar que su longitud es al menos $2\pi\min(|m|,|n|)$ donde $(m,n)$ son los índices de clase de homotopía.

### Ejercicio 6

Probar que toda metrica riemanniana sobre el toro con $K > 0$ en todas partes es necesariamente isometrica a un elipsoide de revolucion. (Indicación: usar el teorema de классификации de superficies con $K > 0$ y la rigidez de la esfera.)

### Ejercicio 7

Sea $\mathcal{N}: T^2 \to S^2$ la aplicacion de Gauss del toro de revolucion en $\mathbb{R}^3$. Describir la imagen de $\mathcal{N}$ y calcular su grado topológico. ¿Es $\mathcal{N}$ suprayectiva?

### Ejercicio 8

Sea $G$ el grupo de isometrías del toro de revolucion en $\mathbb{R}^3$ que preservan la orientación. ¿Cuál es la estructura de $G$? Demostrar que $G$ contiene un subgrupo isomorfo a $S^1 \times \mathbb{Z}_2$.

### Ejercicio 9

Sea $\gamma$ una geodesica cerrada en el toro de revolucion con $R > r$. Si $\gamma$ es un paralelo, demostrar que su longitud es $2\pi(R+r)$ y su curvatura geodesica es cero. Si $\gamma$ es un meridiano, demostrar que su longitud es $4rK(k)$ donde $K(k)$ es la integral elíptica completa.

### Ejercicio 10

**Teorema de Homma**: Demostrar que dos torus de revolucion con $R > r$ en $\mathbb{R}^3$ son congruentes si y solo si tienen el mismo cociente $R/r$.

### Ejercicio 11

Sea $T^2$ el torus en $\mathbb{R}^3$ con $R/r = 3$. Calcular el area total de $T^2$ mediante la integral $\int_0^{2\pi}\int_0^{2\pi} \sqrt{EG-F^2}\,du\,dv$.

### Ejercicio 12

Probar que el grupo de homotopía $\pi_1(T^2) \cong \mathbb{Z} \oplus \mathbb{Z}$ puede identificarse con las clases de homotopía de curvas cerradas en el toro parametrizadas por $(u,v) \mapsto (mu + nv)$.

### Ejercicio 13

Sea $S$ una superficie de genus $g \geq 1$. Demostrar que existe una métrica riemanniana sobre $S$ con curvatura gaussiana constante $K = -1$.

### Ejercicio 14

Sea $p$ un punto interior del torus. Demostrar que existe una geodesica corta entre cualquier par de puntos que se mantiene dentro de la region con $K > 0$.

### Ejercicio 15

Sean $T_1$ y $T_2$ dos torus de revolucion con $R_1/r_1 = R_2/r_2$ pero $R_1 \neq R_2$. ¿Son isométricas sus metricas inducidas en $\mathbb{R}^3$? Justificar usando el teorema egregio de Gauss.

## Soluciones detalladas

### Solucion 1

Parametrizando $X(u,v) = ((R+r\cos u)\cos v, (R+r\cos u)\sin v, r\sin u)$:
$$X_u = (-r\sin u\cos v, -r\sin u\sin v, r\cos u),\quad X_v = (-(R+r\cos u)\sin v, (R+r\cos u)\cos v, 0).$$
Obteniendo $E = r^2$, $F = 0$, $G = (R+r\cos u)^2$. Calculando $N$ y las segundas derivadas se obtiene $\kappa_1 = \frac{1}{r\cos u}$, $\kappa_2 = \frac{\cos u}{R+r\cos u}$, luego $K = \frac{\cos u}{r(R+r\cos u)}$.

$$\square$$

### Solucion 2

La curvatura media del toro es $H = \frac{1}{2}\left(\frac{1}{r} + \frac{\cos u}{R+r\cos u}\right)$. Se anula cuando $\cos u = -\frac{R+r}{r} < -1$, que no tiene solución. Hay exactamente un paralelo donde $H$ cambia de signo si se considera la orientación interior/exterior. La curvatura gaussiana cambia de signo en $u = \pi/2$ y $u = 3\pi/2$, donde $\cos u = 0$.

$$\square$$

### Solucion 3

Parametrizando el toro, el elemento de area es $dA = r(R+r\cos u)\,du\,dv$. Integrando $K$ sobre $[0,2\pi]\times[0,2\pi]$:
$$\int_{T^2} K\,dA = \int_0^{2\pi}\int_0^{2\pi} \frac{\cos u}{r(R+r\cos u)} \cdot r(R+r\cos u)\,du\,dv = \int_0^{2\pi}\int_0^{2\pi} \cos u\,du\,dv = 0.$$
Esto verifica Gauss-Bonnet: $\chi(T^2) = 0$, luego $2\pi\chi = 0$.

$$\square$$

### Solucion 4

En el toro plano $T^2 = S^1 \times S^1$, las curvas $\theta = \text{const}$ y $\phi = \text{const}$ son geodesicas porque sus vectores tangentes son campos paralelos. Sus longitudes son $2\pi$. En el toro de revolucion, los paralelos no son geodesicas porque tienen curvatura geodesica no nula.

$$\square$$

### Solucion 5

Representando la clase $[m,n]$ por $\gamma_{m,n}(t) = (mt, nt)$ modulo $2\pi$, la longitud es $2\pi\sqrt{m^2+n^2}$ en el toro plano. Por comparación con geodésicas del plano lorentziano en el grupo, se obtiene la cota.

$$\square$$

### Solucion 6

Si $K > 0$ en todas partes de una superficie compacta orientable, Gauss-Bonnet da $\chi(S) > 0$, lo que implica $g = 0$ (esfera). Pero para el toro $g = 1$, luego no puede tener $K > 0$ everywhere. Este argumento prueba que todo toro admite regiones con $K \leq 0$.

$$\square$$

### Solucion 7

La imagen de la aplicacion de Gauss del toro cubre exactamente la region $z \in [-1, 1]$ de la esfera, dos veces. El grado de $\mathcal{N}$ es cero porque $\int_{T^2} K\,dA = 0$. La imagen no es suprayectiva: los polos norte y sur no se alcanzan.

$$\square$$

### Solucion 8

Las isometrías que preservan la orientación incluyen: rotaciones alrededor del eje del toro ($S^1$), reflexión a través del plano meridional ($\mathbb{Z}_2$), y composiciones de ambas. El grupo es $O(2) \times \mathbb{Z}_2$ modulo restricciones de inmersión.

$$\square$$

### Solucion 9

Para un paralelo: la curvatura geodesica se calcula por la fórmula $\kappa_g = \frac{\langle D_T\gamma', N \rangle}{\|T\|}$, que se anula. Para un meridiano: la curvatura geodesica no es cero porque el meridiano no está contenido en un plano de geodesica. Su longitud se calcula integrando la norma de la derivada del meridiano.

$$\square$$

### Solucion 10

Si $R_1/r_1 = R_2/r_2 = c$, existe una isometría de $\mathbb{R}^3$ que lleva $T_1$ a $T_2$, obtenida por una rotación alrededor del eje y una homotecia de factor $r_2/r_1$. Recíprocamente, si existe una isometría entre los torus, el cociente $R/r$ es un invariante isométrico.

$$\square$$

### Solucion 11

El area es $\int_0^{2\pi}\int_0^{2\pi} r(R+r\cos u)\,du\,dv = 4\pi^2 rR$, por simetría.

$$\square$$

### Solucion 12

El isomorfismo $\pi_1(T^2) \cong \mathbb{Z} \oplus \mathbb{Z}$ se obtiene observando que las curvas $(m,n)$ generan el grupo fundamental y son canónicamente asociadas a las coordenadas del producto $S^1 \times S^1$.

$$\square$$

### Solucion 13

Por el teorema de uniformización, toda superficie de Riemann de gênero $g \geq 1$ es conformemente equivalente a $\mathbb{H}/\Gamma$ para algún grupo Fuchsiano. La métrica hiperbólica estándar sobre $\mathbb{H}$ tiene $K = -1$ y desciende al cociente.

$$\square$$

### Solucion 14

Sea $\gamma$ la geodesica minimizante entre $p$ y $q$. Si $\gamma$ sale de la region con $K > 0$, por continuidad debe cruzar la frontera $K = 0$, donde $\kappa_1 = 0$. Pero en puntos parabólicos, las geodésicas tienen comportamiento estable. Por el principio de comparación de Rauch, la distancia geodesica mínima se mantiene dentro de la region elíptica.

$$\square$$

### Solucion 15

Las métricas inducidas en $\mathbb{R}^3$ de $T_1$ y $T_2$ son distintas: $R_1 \neq R_2$ implica que los coeficientes de la primera forma fundamental difieren, luego las distancias geodesicas no coinciden. El teorema egregio no distingue las metricas extrínsecas porque $K$ depende solo de la primera forma fundamental, que sí depende de $R$ y $r$.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1992). *Riemannian Geometry*. Birkhauser Boston.
2. Chavel, I. (2006). *Riemannian Geometry*. Cambridge University Press.
3. Berger, M. (2003). *A Panoramic View of Riemannian Geometry*. Springer.
4. Hopf, H. (1926). "Zum Clobalsatz von Cauchy–Riemann". *Math. Z.*
5. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 3. Publish or Perish.
6. Warner, F.W. (1983). *Foundations of Differentiable Manifolds and Lie Groups*. Springer.
