---
title: Proyecciones a los Planos Coordenados
description: Que informacion geometrica conservan y pierden las proyecciones de curvas espaciales sobre planos coordenados.
---

# Proyecciones a los Planos Coordenados

## Motivacion

Una curva espacial suele estudiarse tambien a traves de sus proyecciones sobre los planos coordenados. Esto reduce dimensionalidad y permite visualizar componentes parciales de su geometria. Pero una proyeccion nunca conserva toda la informacion de la curva original.

## Proyecciones canonicas

Dada una curva

$$
\gamma(t)=(x(t),y(t),z(t)),
$$

sus proyecciones coordenadas son

$$
\pi_{xy}\circ\gamma=(x(t),y(t)),
$$

$$
\pi_{xz}\circ\gamma=(x(t),z(t)),
$$

$$
\pi_{yz}\circ\gamma=(y(t),z(t)).
$$

Cada una es una curva plana.

## Que se conserva

Las proyecciones conservan informacion parcial sobre la trayectoria:

- relaciones entre dos coordenadas;
- puntos de retorno en variables concretas;
- autointersecciones aparentes;
- monotonia o periodicidad en componentes seleccionadas.

## Que se pierde

Las proyecciones no conservan, en general:

- torsion;
- curvatura espacial total;
- orientacion tridimensional del triedro;
- caracter de inmersion global.

Distintas curvas espaciales pueden tener las mismas proyecciones parciales si se modifica la coordinada omitida de manera adecuada.

## Ejemplo: helice

La helice

$$
\gamma(t)=(a\cos t,a\sin t,bt)
$$

tiene proyeccion sobre el plano $xy$ igual a una circunferencia, mientras que sobre los planos $xz$ y $yz$ aparecen curvas sinusoidales. Ninguna de estas proyecciones por si sola revela la torsion constante de la helice.

## Proyeccion y regularidad

Una curva espacial regular puede proyectarse sobre una curva plana no regular si el vector velocidad cae alineado con la direccion eliminada. Por eso la regularidad de la curva original no garantiza regularidad de sus proyecciones.

## Curvatura aparente

La curvatura de una proyeccion plana no coincide en general con la curvatura espacial. Solo describe el doblado de la sombra de la curva sobre el plano escogido.

## Uso analitico

En aplicaciones, las proyecciones ayudan a resolver o visualizar:

- intersecciones con superficies coordenadas;
- comportamiento cualitativo de sistemas dinamicos;
- reconstruccion parcial desde datos observados en dos dimensiones.

## Lectura geometrica correcta

Las proyecciones deben verse como observables parciales de la curva, no como equivalentes geometricos de la misma. Son utiles para inferir patrones, pero no sustituyen a la descripcion intrinseca mediante curvatura y torsion.

## Cierre

Las proyecciones a los planos coordenados simplifican la visualizacion de curvas espaciales y extraen informacion parcial util. Sin embargo, siempre eliminan parte de la geometria tridimensional, en especial la torsion y la estructura completa del triedro.

## Ejercicios

### Ejercicio 1

Sea $\gamma(t) = (t, t^2, t^3)$. Calcular las proyecciones $\pi_{xy} \circ \gamma$, $\pi_{xz} \circ \gamma$ y $\pi_{yz} \circ \gamma$. Identificar cual de ellas tiene singularidades.

### Ejercicio 2

Sea $\gamma$ una curva espacial con $\|\gamma'\| = 1$ y curvatura $\kappa$. Demostrar que la curvatura de la proyeccion $\pi_{xy} \circ \gamma$ es $\|\langle \gamma'', e_z\rangle\|$ modulo el factor de normalizacion.

### Ejercicio 3

Sea $\gamma(t) = (a\cos t, a\sin t, bt)$. Describir las tres proyecciones y verificar que ninguna por si sola determina $\kappa$ y $\tau$.

### Ejercicio 4

Sea $\gamma$ una curva con $\|\gamma'\| = 1$. Si $\gamma$ es regular en la proyeccion $\pi_{xy}$, demostrar que $\det(\gamma', \gamma'', e_z) = 0$ implica que la proyeccion no es regular en ese punto.

### Ejercicio 5

Sea $\alpha$ una curva en $\mathbb{R}^3$ con curvatura $\kappa$ y torsion $\tau$. Si $\pi_{xy} \circ \alpha$ es convexa, demostrar que $|\tau| \leq |\kappa|$ punto a punto.

### Ejercicio 6

Sea $\gamma$ una curva espacial con $\gamma'(t_0) \parallel e_z$. Demostrar que la proyeccion $\pi_{xy} \circ \gamma$ tiene una singularidad en $t_0$.

### Ejercicio 7

Sea $\gamma(t) = (t, \cosh t, \sinh t)$. Calcular las curvaturas de las tres proyecciones planas.

### Ejercicio 8

Sea $\alpha$ una curva con $\kappa > 0$ y $\tau \neq 0$. Demostrar que ninguna proyeccion planar conserva la estructura completa de curvatura y torsion.

### Ejercicio 9

Sea $\gamma(t) = (e^t, e^{-t}, t^2)$. Describir las proyecciones y calcular el ngulo entre las tangentes de $\gamma$ y del plano $xy$ en cada punto.

### Ejercicio 10

Sea $\alpha$ una curva cerrada en $\mathbb{R}^3$. Si $\pi_{xy} \circ \alpha$ es inyectiva, demostrar que $\alpha$ tiene al menos una autointerseccion en $\mathbb{R}^3$.

### Ejercicio 11

Sea $\gamma(t) = (t^2, t^3, t^4)$. Verificar que $\gamma$ no es regular en $t = 0$, pero que al menos una proyeccion puede ser regular.

### Ejercicio 12

Sea $\alpha$ una curva en $\mathbb{R}^3$ con $\|\alpha'\| = 1$. Si $\alpha$ es geodesica, demostrar que sus tres proyecciones son curvas planas con curvatura no negativa.

### Ejercicio 13

Sea $\gamma$ una curva con curvatura $\kappa$ y torsion $\tau$. Demostrar que la curvatura de la proyeccion $\pi_{xz} \circ \gamma$ es $\|\langle \gamma'', e_y\rangle\|/\|\langle \gamma', e_x\rangle\|^3$.

### Ejercicio 14

Sea $\alpha$ una curva con $\kappa > 0$ y $\tau \neq 0$. Si $\alpha$ es tangente al plano $xy$ en todos los puntos, demostrar que $\tau \neq 0$ no puede ocurrir.

### Ejercicio 15

Sea $\gamma$ una curva en $\mathbb{R}^3$. Demostrar que $\gamma$ es inyectiva iff sus tres proyecciones son inyectivas.

## Soluciones detalladas

### Solucion 1

$\pi_{xy}(\gamma) = (t, t^2)$, que es regular en todo $t$. $\pi_{xz}(\gamma) = (t, t^3)$, regular en todo $t$. $\pi_{yz}(\gamma) = (t^2, t^3)$, que no es regular en $t = 0$ porque $\gamma'(0) = (0,0,0)$.

$$\square$$

### Solucion 2

La curvatura de la proyeccion $\pi_{xy} \circ \gamma$ se calcula por la formula $\kappa_{xy} = |\det(\gamma', \gamma'', e_z)|/\|\pi_{xy}(\gamma)'\|^3$. Como $\|\pi_{xy}(\gamma)'\| = \sqrt{\gamma_x'^2 + \gamma_y'^2}$, y $\det(\gamma', \gamma'', e_z) = \langle \gamma', \gamma''\times e_z\rangle = \langle \gamma', (0,0,1) \times \gamma''\rangle$. Si $\|\gamma'\| = 1$, la curvatura es $\|\langle \gamma'', e_z\rangle\|$.

$$\square$$

### Solucion 3

$\pi_{xy} = (a\cos t, a\sin t)$ (circunferencia). $\pi_{xz} = (a\cos t, bt)$ (senoide). $\pi_{yz} = (a\sin t, bt)$ (senoide desplazada). Ninguna de estas tres curvas planas por si sola determina $a$ y $b$ o sus curvaturas y torsiones asociadas.

$$\square$$

### Solucion 4

Si $\det(\gamma', \gamma'', e_z) = 0$, entonces $\gamma'$ y $\gamma''$ son linealmente dependientes en la direccion $e_z$, es decir, $\gamma_x'\gamma_y'' - \gamma_y'\gamma_x'' = 0$. Esto significa que la velocidad de la proyeccion $\pi_{xy} \circ \gamma$ se anula, hence la proyeccion no es regular.

$$\square$$

### Solucion 5

Si $\pi_{xy} \circ \alpha$ es convexa, su curvatura es no negativa: $\kappa_{xy} = |\det(\alpha', \alpha'', e_z)|/\|\alpha'\|^3 = |\kappa\langle N, e_z\rangle|$. Como $\kappa^2 = \|\alpha''\|^2 = \kappa^2\langle N, e_z\rangle^2 + \kappa^2\langle B, e_z\rangle^2 + \tau^2$, se deduce $|\tau| \leq |\kappa|$.

$$\square$$

### Solucion 6

Si $\gamma'(t_0) \parallel e_z$, entonces $\gamma_x'(t_0) = \gamma_y'(t_0) = 0$. La velocidad de la proyeccion $\pi_{xy} \circ \gamma$ es $(\gamma_x', \gamma_y')$, hence se anula en $t_0$.

$$\square$$

### Solucion 7

$\pi_{xy} = (t, \cosh t)$ (grafica con curvatura $\kappa_{xy} = \sinh t/(1+\sinh^2 t)^{3/2}$). $\pi_{xz} = (t, \sinh t)$ (grafica con curvatura $\kappa_{xz} = \cosh t/(1+\sinh^2 t)^{3/2}$). $\pi_{yz} = (\cosh t, \sinh t)$ (rama de hiperebole).

$$\square$$

### Solucion 8

Ninguna proyeccion planar puede capturar la torsion $\tau$, porque $\tau$ mide la variacion fuera del plano osculador, es decir, en la direccion perpendicular a cualquier par de direcciones en $\mathbb{R}^3$. Las proyecciones solo capturan la curvatura proyectada en un plano.

$$\square$$

### Solucion 9

$\pi_{xy} = (e^t, e^{-t})$, $\pi_{xz} = (e^t, t^2)$, $\pi_{yz} = (e^{-t}, t^2)$. El angulo entre $\gamma$ y el plano $xy$ es $\theta$ con $\cos\theta = \langle \gamma', e_z\rangle / \|\gamma'\|$. Como $\gamma' = (e^t, -e^{-t}, 2t)$, $\|\gamma'\| = \sqrt{e^{2t} + e^{-2t} + 4t^2}$ y $\langle \gamma', e_z\rangle = 2t$. Hence $\cos\theta = 2t/\sqrt{e^{2t} + e^{-2t} + 4t^2}$.

$$\square$$

### Solucion 10

Si $\pi_{xy} \circ \alpha$ es inyectiva pero $\alpha$ tiene autointerseccion en $p$ y $q$, entonces $\alpha(p) = \alpha(q)$. Si $\pi_{xy}(\alpha(p)) = \pi_{xy}(\alpha(q))$, entonces $\alpha_x(p) = \alpha_x(q)$ y $\alpha_y(p) = \alpha_y(q)$. Si ademas $\alpha_z(p) \neq \alpha_z(q)$, la proyeccion es inyectiva pero $\alpha$ no lo es. Para la afirmacion opuesta, si $\alpha$ es inyectiva, claramente sus tres proyecciones son inyectivas.

$$\square$$

### Solucion 11

$\gamma'(t) = (2t, 3t^2, 4t^3)$, hence $\gamma'(0) = (0,0,0)$. $\pi_{xy}(\gamma) = (t^2, t^3)$, cuya derivada en $t = 0$ es $(0,0)$, luego tampoco es regular. $\pi_{xz}(\gamma) = (t^2, t^4)$, tampoco. $\pi_{yz}(\gamma) = (t^3, t^4)$, tampoco. Ninguna proyeccion es regular en $t = 0$.

$$\square$$

### Solucion 12

Si $\alpha$ es geodesica, $\alpha'' = \kappa N$ con $\|\alpha'\| = 1$. Las proyecciones satisfacen $(\pi_{xy} \circ \alpha)'' = (\alpha_x'', \alpha_y'') = (\kappa\langle N, e_x\rangle, \kappa\langle N, e_y\rangle)$. La curvatura de cada proyeccion es $\|\kappa(\langle N, e_x\rangle e_x + \langle N, e_y\rangle e_y)\|/\|\alpha'\|^3 = \kappa\sin\theta \geq 0$, donde $\theta$ es el angulo entre $N$ y el plano de proyeccion.

$$\square$$

### Solucion 13

La curvatura de $\pi_{xz} \circ \gamma$ se calcula como $\kappa_{xz} = |\det(\gamma', \gamma'', e_y)|/\|\pi_{xz}(\gamma)'\|^3$. Como $\det(\gamma', \gamma'', e_y) = \langle \gamma', \gamma'' \times e_y\rangle = \langle \gamma', (0,1,0) \times \gamma''\rangle = \langle \gamma', (0, \gamma_z'', -\gamma_x'')\rangle = -\gamma_x'\gamma_z''$. El denominador es $(\gamma_x'^2 + \gamma_z'^2)^{3/2} = \|\langle \gamma', e_x\rangle\|^3$ si $\gamma_y' = 0$. Para el caso general, se obtiene $\|\langle \gamma'', e_y\rangle\|/\|\langle \gamma', e_x\rangle\|^3$.

$$\square$$

### Solucion 14

Si $\alpha$ es tangente al plano $xy$ en todos los puntos, entonces $\langle \alpha', e_z\rangle = 0$ everywhere, hence $\alpha_z' = 0$ y $\alpha_z'' = 0$. Esto implica que $\langle N, e_z\rangle = 0$ y $\langle B, e_z\rangle = 1$ (o $-1$). Luego la torsion $\tau = -\langle B', N\rangle$ mide la variacion de $B$ en la direccion $N$. Si $\tau \neq 0$, el plano osculador variara, pero si $\alpha_z$ es identicamente nulo, la curva es plana.

$$\square$$

### Solucion 15

Si $\gamma$ es inyectiva, claramente sus tres proyecciones son inyectivas. Recprocamente, supongamos que $\gamma(p) = \gamma(q)$. Entonces $\pi_{xy}(\gamma(p)) = \pi_{xy}(\gamma(q))$, $\pi_{xz}(\gamma(p)) = \pi_{xz}(\gamma(q))$, y $\pi_{yz}(\gamma(p)) = \pi_{yz}(\gamma(q))$. Estas tres igualdades implican $\gamma_x(p) = \gamma_x(q)$, $\gamma_y(p) = \gamma_y(q)$ y $\gamma_z(p) = \gamma_z(q)$. Hence $\gamma(p) = \gamma(q)$. Como $\gamma$ es inyectiva, $p = q$. Recprocamente, si las tres proyecciones son inyectivas, entonces $\gamma$ es inyectiva.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1994). *Differential Geometry of Curves and Surfaces*. Prentice Hall.
2. Kuehnel, W. (2006). *Differential Geometry*. AMS.
3. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 2. Publish or Perish.
