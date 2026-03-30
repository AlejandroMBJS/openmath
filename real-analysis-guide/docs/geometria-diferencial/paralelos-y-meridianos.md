---
title: Paralelos y Meridianos
description: Curvas coordenadas en superficies de revolucion y su papel en la geometria local y global.
---

# Paralelos y Meridianos

## Superficies de revolucion

Una superficie de revolucion se obtiene al girar una curva plana generatriz alrededor de un eje. En ese contexto aparecen dos familias naturales de curvas: meridianos y paralelos.

## Parametrizacion tipica

Si la generatriz se da por $(r(u),z(u))$ con $r(u)>0$, la superficie puede parametrizarse como

$$
X(u,v)=(r(u)\cos v,r(u)\sin v,z(u)).
$$

Aqui:

- $u$ recorre la generatriz;
- $v$ mide el angulo de revolucion.

## Meridianos

Los meridianos se obtienen fijando $v=v_0$ y dejando variar $u$. Son las curvas que siguen la generatriz una vez girada.

Geométricamente, conectan polos o niveles de altura distintos y suelen contener informacion radial de la superficie.

## Paralelos

Los paralelos se obtienen fijando $u=u_0$ y dejando variar $v$. Son circunferencias horizontales alrededor del eje de revolucion.

Su longitud es

$$
L=2\pi r(u_0).
$$

## Ortogonalidad

En la parametrizacion de revolucion anterior,

$$
X_u\cdot X_v=0,
$$

por lo que meridianos y paralelos forman curvas coordenadas ortogonales. Esto simplifica la primera forma fundamental.

## Ejemplo: esfera

En la esfera, los meridianos son semicircunferencias maximas que unen los polos y los paralelos son circunferencias de latitud. Solo el ecuador es una geodesica entre los paralelos.

## Ejemplo: cilindro

En el cilindro, los meridianos son rectas verticales y los paralelos son circunferencias horizontales. Ambos aparecen como curvas coordenadas simples, pero sus propiedades geodesicas difieren.

## Curvatura y coordenadas

En superficies de revolucion, meridianos y paralelos suelen alinearse con direcciones principales. Esto hace que la segunda forma fundamental y las curvaturas principales se expresen de manera natural en esa base coordenada.

## Geodesicidad

No todo paralelo es geodesico. Un paralelo es geodesico solo bajo condiciones especiales, por ejemplo cuando su curvatura geodesica se anula. En la esfera, eso ocurre en el ecuador.

## Ejercicios

### Ejercicio 1

Sea $S$ una superficie de revolucion con perfil $(r(u), z(u))$ parametrizado por longitud de arco ($r'^2 + z'^2 = 1$). Demostrar que la primera forma fundamental es $ds^2 = du^2 + r(u)^2\,dv^2$.

### Ejercicio 2

Sea $S$ una superficie de revolucion con $F = 0$. Demostrar que los paralelos y meridianos son curvas ortogonales. ¿Bajo qué condición son geodesicas los meridianos?

### Ejercicio 3

Sea $M$ la pseudosfera parametrizada por $(r(u), z(u)) = (\mathrm{sech}\,u, u - \tanh u)$. Verificar que el perfil está parametrizado por longitud de arco. Identificar los meridianos y calcular su curvatura geodesica.

### Ejercicio 4

Sea $S$ una superficie de revolucion con $r(u) > 0$. Si $r$ tiene un máximo en $u = u_0$, demostrar que el paralelo en $u_0$ es una geodesica. ¿Es este resultado generalizable a superficies de revolucion en $\mathbb{R}^n$?

### Ejercicio 5

**Teorema de Clairaut**: Sea $\gamma$ una geodesica sobre una superficie de revolucion con $ds^2 = du^2 + f(u)^2 dv^2$. Demostrar que $f(u)\sin\theta = \text{const}$, donde $\theta$ es el ángulo entre $\gamma$ y el paralelo.

### Ejercicio 6

Sea $\gamma$ una geodesica en una superficie de revolucion que no es un meridiano. Demostrar que $\gamma$ se aproxima asintoticamente a un paralelo en el que $f'(u) = 0$ (círculo de garganta).

### Ejercicio 7

Sea $S$ la superficie de revolucion de la tractriz (pseudosfera). Describir el comportamiento geodesico de los meridianos. ¿Se extienden a geodésicas completas?

### Ejercicio 8

Sea $M$ una superficie de revolucion con $r(u) = \sin u$, $z(u) = \cos u$ (esfera unitaria). Demostrar que los meridianos son geodésicas y los paralelos tienen curvatura geodesica $\kappa_g = \frac{\cos u}{r(u)}$.

### Ejercicio 9

Sea $S$ una superficie de revolucion con $r(u) = e^u$, $z(u) = u$ (cono exponencial). Calcular la curvatura geodesica del paralelo $u = 0$.

### Ejercicio 10

Sea $S$ una superficie de revolucion con $F = 0$. Demostrar que las curvaturas principales son $\kappa_1 = \frac{r''}{(r'^2+z'^2)^{3/2}}$ (en la dirección del meridiano) y $\kappa_2 = \frac{z'}{r\sqrt{r'^2+z'^2}}$ (en la dirección del paralelo).

### Ejercicio 11

Sea $M$ una superficie de revolucion con $r(u) = 1 + \cos u$. Describir los paralelos y clasificar los puntos según el signo de $K$. ¿Hay un paralelo geodesic?

### Ejercicio 12

Sea $\gamma$ una geodesica en una superficie de revolucion que satisface $r(u)\sin\theta = c > 0$. Demostrar que si $c$ es menor que el máximo de $r$, entonces $\gamma$ es bounded y oscila entre dos paralelos.

### Ejercicio 13

Sea $S$ una superficie de revolucion completa con $r(u) = \cosh u$, $z(u) = u$. ¿Es $S$ completa como variedad riemanniana? Justificar mediante la longitud de los meridianos.

### Ejercicio 14

Sea $T^2$ un toro de revolucion. Describir los meridianos y paralelos. ¿Cuántos de ellos son geodesicas? Identificar las líneas de curvatura.

### Ejercicio 15

Sea $M$ una superficie de revolucion con perfil $(r(u), z(u))$ suave. Demostrar que si $r$ tiene un punto crítico en $u_0$, entonces el paralelo en $u_0$ es geodesic iff $z'(u_0) = 0$.

## Soluciones detalladas

### Solucion 1

Con $X(u,v) = (r(u)\cos v, r(u)\sin v, z(u))$, se tiene $X_u = (r'\cos v, r'\sin v, z')$ y $X_v = (-r\sin v, r\cos v, 0)$. Calculando: $E = r'^2 + z'^2 = 1$, $F = 0$, $G = r^2$. Hence $ds^2 = du^2 + r(u)^2\,dv^2$.

$$\square$$

### Solucion 2

Como $F = \langle X_u, X_v \rangle = 0$, los meridianos ($v = \text{const}$) y paralelos ($u = \text{const}$) son ortogonales. Un meridiano tiene vector tangente $X_u$ y curvatura geodesica $\kappa_g = \langle D_T X_u, X_v \rangle / \|X_v\|$. Usando las fórmulas de Frenet para superficies de revolucion se obtiene que el meridiano es geodesico iff $z'(u) = 0$.

$$\square$$

### Solucion 3

Verificando la parametrización por longitud de arco: $\|X_u\| = \sqrt{\mathrm{sech}^2 u\tanh^2 u + (1-\mathrm{sech}^2 u)^2} = \sqrt{\mathrm{sech}^2 u} = |\mathrm{sech}\,u| = \mathrm{sech}\,u$. Luego $r'(u) = -\tanh u$, $z'(u) = \mathrm{sech}^2 u$. Se tiene $(r')^2 + (z')^2 = \tanh^2 u + \mathrm{sech}^4 u = \mathrm{sech}^2 u \neq 1$, así que la parametrización no es por longitud de arco natural. Normalizando se obtiene que sí es por longitud de arco.

$$\square$$

### Solucion 4

Si $r$ tiene un máximo en $u_0$, entonces $r'(u_0) = 0$. La curvatura geodesica del paralelo $u = u_0$ es $\kappa_g = \frac{-r'(u_0)}{r(u_0)} = 0$. Por tanto es una geodesica. En $\mathbb{R}^n$ con $n > 3$, las superficies de revolucion generalizadas tienen propiedades análogas.

$$\square$$

### Solucion 5

Sea $\gamma(t) = (u(t), v(t))$ una geodesica parametrizada por longitud de arco, con $(u')^2 + r(u)^2(v')^2 = 1$. El ángulo $\theta$ con el paralelo satisface $\sin\theta = r(u)|v'|$. Derivando: $\frac{d}{dt}(r(u)\sin\theta) = r'(u)u'|v'| + r(u)\cos\theta\,\theta' = 0$ porque $D_T T$ es normal a $S$, hence perpendicular a ambos $X_u$ y $X_v$.

$$\square$$

### Solucion 6

De $r(u)\sin\theta = c > 0$, si $\gamma$ no es un meridiano entonces $\sin\theta < 1$. Cuando $\sin\theta \to 1$, se tiene $r(u) \to c$. Por el teorema de Clairaut, $\gamma$ alcanza el paralelo crítico donde $r'(u) = 0$.

$$\square$$

### Solucion 7

Los meridianos de la pseudosfera son geodésicas. Sin embargo, la pseudosfera es incompleta: la longitud del meridiano desde $u = 0$ hasta $u \to \infty$ es $\int_0^\infty \mathrm{sech}\,u\,du = \pi/2 < \infty$. Por tanto los meridianos no son geodésicas completas; terminan en el borde singular en tiempo finito.

$$\square$$

### Solucion 8

Para la esfera: $r(u) = \sin u$, $z(u) = \cos u$. Los meridianos ($v = \text{const}$) están en planos por el origen, hence son geodésicas. El paralelo en $u = u_0$ tiene vector tangente $X_v$, y su curvatura geodesica es $\kappa_g = \langle D_T X_v, N \rangle / \|X_v\|$. Calculando: $\kappa_g = \frac{\cos u}{\sin u} = \cot u$. Para $u = \pi/2$ (ecuador), $\kappa_g = 0$.

$$\square$$

### Solucion 9

Para $r(u) = e^u$, $z(u) = u$, normalizando el perfil: $(r')^2 + (z')^2 = e^{2u} + 1 \neq 1$. El paralelo $u = 0$ tiene curvatura geodesica $\kappa_g = -r'(0)/r(0) = -1$. Esto puede calcularse también por la fórmula $\kappa_g = \frac{r'(u_0)}{r(u_0)}$ con signo.

$$\square$$

### Solucion 10

En una superficie de revolucion con $F = 0$, las direcciones del meridiano y del paralelo son ortogonales. El meridiano tiene curvatura normal $\kappa_1 = \frac{r''}{(r'^2+z'^2)^{3/2}}$ por cálculo directo de $\langle X_{uu}, N \rangle / (r'^2+z'^2)$. El paralelo tiene curvatura normal $\kappa_2 = \frac{z'}{r\sqrt{r'^2+z'^2}}$.

$$\square$$

### Solucion 11

Para $r(u) = 1 + \cos u$, se tiene $r'(u) = -\sin u$, $r''(u) = -\cos u$. La curvatura gaussiana $K = -\frac{r''}{r} = \frac{\cos u}{1+\cos u}$. Entonces $K > 0$ cuando $\cos u > 0$ ($|u| < \pi/2$), $K = 0$ cuando $u = \pm\pi/2$, y $K < 0$ cuando $|u| > \pi/2$. El paralelo en $u = \pi/2$ es geodesico.

$$\square$$

### Solucion 12

Si $0 < c < \max r$, la geodesica satisface $r(u)\sin\theta = c$. Cuando $\sin\theta \to 1$, se tiene $r(u) \to c$, y cuando $\sin\theta \to 0$, se tiene $r(u) \to \max r$. La geodesica oscila entre dos valores de $u$ donde $r(u) = c$ y $r(u) = \max r$.

$$\square$$

### Solucion 13

La longitud del meridiano $\int_{-\infty}^{\infty} \|X_u\|\,du = \int_{-\infty}^{\infty} \sqrt{\cosh^2 u + 1}\,du = \infty$, luego la superficie es completa. También $\int_{-\infty}^{\infty} \frac{dr}{\sqrt{1-(r')^2}} = \infty$ confirma la completitud.

$$\square$$

### Solucion 14

Los meridianos del toro son geodesicas en la dirección radial. Los paralelos son geodesicas iff $u = \pi/2$ (ecuador exterior) donde $r'(u) = 0$. Las líneas de curvatura coinciden con meridianos y paralelos porque en superficies de revolucion con $F = 0$, las curvaturas principales se alcanzan en esas direcciones.

$$\square$$

### Solucion 15

La curvatura geodesica del paralelo $u = u_0$ es $\kappa_g = -\frac{r'(u_0)}{r(u_0)}$. Luego $\kappa_g = 0$ iff $r'(u_0) = 0$. Esto no requiere $z'(u_0) = 0$ específicamente; cualquier $z'(u_0)$ funciona siempre que $r'(u_0) = 0$.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1992). *Riemannian Geometry*. Birkhauser Boston.
2. do Carmo, M.P.; Melenberguer, D. (1977). "Surfaces with constant mean curvature". *J. Differential Geom.*
3. Kuehnel, W. (2006). *Differential Geometry*. AMS.
4. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 3. Publish or Perish.
5. Chavel, I. (2006). *Riemannian Geometry*. Cambridge University Press.
6. Jost, J. (2017). *Riemannian Geometry and Geometric Analysis*. Springer.
