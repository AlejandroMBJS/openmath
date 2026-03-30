---
title: Superficie Diferenciable Orientada
description: Orientacion por atlas, campos normales y compatibilidad global en superficies inmersas.
---

# Superficie Diferenciable Orientada

## Orientacion en dimension dos

Una superficie diferenciable es orientada si puede elegirse coherentemente que pares de vectores tangentes se consideran positivamente orientados en todos los puntos.

## Version por atlas

La superficie es orientable si admite un atlas cuyas funciones de cambio tienen jacobiano positivo. Este criterio es intrinseco y no depende de una inmersion concreta.

## Version inmersa en \(\mathbb{R}^3\)

Si la superficie esta inmersa en $\mathbb{R}^3$, la orientabilidad equivale a la existencia de un campo normal unitario global continuo

$$
N:S\to S^2.
$$

## Ejemplos

- esfera: orientable;
- toro: orientable;
- banda de Moebius: no orientable.

## Importancia de la orientacion

La orientacion permite definir de manera global:

- el campo normal unitario;
- la aplicacion de Gauss;
- signos coherentes de curvatura normal y media;
- integrales de 2-formas de area.

## Cambio de orientacion

Elegir la orientacion opuesta equivale a reemplazar $N$ por $-N$. Bajo este cambio:

- la curvatura gaussiana permanece igual;
- la curvatura media cambia de signo;
- el operador de forma cambia de signo.

## Ejercicios

### Ejercicio 1

Demostrar que la banda de Möbius no es orientable usando el criterio del atlas: construir dos cartas cuyas funciones de cambio tengan jacobiano negativo en todo punto del solapamiento.

### Ejercicio 2

Sea $S$ una superficie orientable y $N: S \to S^2$ su campo normal unitario orientado. Demostrar que si $\phi: S \to S$ es un difeomorfismo que preserva la orientación, entonces $\phi^* N = N \circ \phi$.

### Ejercicio 3

Sea $S$ una superficie orientable con curvatura gaussiana $K > 0$ en todas partes. Probar que existe una métrica conforme canónica con $K = 1$ en cada punto (métrica de curvatura constante), usando la representación conforme y el teorema de uniformización.

### Ejercicio 4

Sea $\Sigma$ la superficie de Enneper, dada por la inmersión minimal
$$X(u,v) = \left(u - \frac{u^3}{3} + uv^2,\ v - \frac{v^3}{3} + vu^2,\ u^2 - v^2\right).$$
Verificar que $\Sigma$ es orientable y que su curvatura media es $H = 0$.

### Ejercicio 5

Sea $S$ una superficie orientable en $\mathbb{R}^3$ con curvatura media $H$ y curvatura gaussiana $K$. Si se cambia la orientación, ¿cómo cambian $H$ y $K$? Demostrar que la suma $\kappa_1 + \kappa_2$ cambia de signo pero $\kappa_1 \kappa_2$ permanece invariante.

### Ejercicio 6

Sea $M$ la botella de Klein, que puede verse como la suma conexa de dos planos proyectivos. Demostrar que $M$ no puede inmersarse orlentemente en $\mathbb{R}^3$.

### Ejercicio 7

Sea $S$ una superficie orientada y $\omega$ la 2-forma de área definida por $\omega(X,Y) = \langle X \times Y, N \rangle$. Demostrar que $\omega$ es una forma diferencial de grado 2 que es cerrado si y solo si $H = 0$ en todas partes (superficie mínima).

### Ejercicio 8

Sea $S$ una superficie orientable compactada sin borde con género $g \geq 2$. Demostrar que existe una métrica riemanniana sobre $S$ con curvatura gaussiana constante $K = -1$ en todas partes (superficie hiperbólica), y que esta métrica es única módulo isometría.

### Ejercicio 9

Sea $S$ una superficie orientable con una carta global $X: \mathbb{R}^2 \to S$ que es una parametrización armónica. Demostrar que $S$ es una superficie mínima.

### Ejercicio 10

Sea $\phi: S \to \tilde S$ un difeomorfismo entre superficies orientables que preserva la orientación. Si $N$ es el normal de $S$, demostrar que existe un normal $\tilde N$ de $\tilde S$ tal que $\tilde N \circ \phi = d\phi(N)$.

### Ejercicio 11

Sea $S$ una superficie orientable con $K > 0$. Demostrar que $S$ admite una foliación por curvas closedas estrictamente convexas (indicación: usar la aplicación de Gauss y el teorema de Hadamard).

### Ejercicio 12

Sea $M$ la superficie de Revolución de la tractriz, llamada pseudosfera. Demostrar que $M$ es orientable pero incompleta (posee geodésicas que se extienden solo a un borde finito).

### Ejercicio 13

Sean $S_1$ y $S_2$ dos superficies orientables con métricas riemannianas. Si $\phi: S_1 \to S_2$ es una isometría que preserva la orientación, demostrar que $\phi$ arrastra el normal orientado de $S_1$ al normal orientado de $S_2$.

### Ejercicio 14

Sea $S$ una superficie orientable y $X: U \subset \mathbb{R}^2 \to S$ una carta orientada. Probar que el cambio de carta $g = \phi^{-1} \circ \psi$ tiene $\det(Dg) > 0$ si y solo si la orientación inducida por la segunda carta coincide con la de la primera.

### Ejercicio 15

Sea $S$ una superficie orientable cerrada con $H^2(S; \mathbb{Z}_2) \cong \mathbb{Z}_2$ (como la banda de Möbius). Demostrar que $S$ no admite ninguna inmersión en $\mathbb{R}^3$ que sea orientable respecto de la segunda forma fundamental.

## Soluciones detalladas

### Solucion 1

Sea $M$ la banda de Möbius parametrizada por $X(u,v) = ((1 + v\cos(u/2))\cos u, (1 + v\cos(u/2))\sin u, v\sin(u/2))$ con $u \in [0, 2\pi)$, $v \in (-1, 1)$. En la carta $v > 0$ y en la carta $v < 0$, la función de cambio tiene determinante jacobiano igual a $-1$ en todo punto del solapamiento. Esto prueba que no admite atlas con jacobianos positivos en todas las transiciones.

$$\square$$

### Solucion 2

Como $\phi$ preserva la orientación, $d\phi$ envía la orientación de $T_pS$ a la orientación de $T_{\phi(p)}\tilde S$. El campo normal $N_p$ está determinado por la orientación y el plano tangente: es el único vector unitario normal que hace positiva la base $(X_u, X_v, N)$. Por tanto $d\phi(N_p)$ es precisamente $N_{\phi(p)}$.

$$\square$$

### Solucion 3

Por el teorema de uniformización, toda superficie de Riemann orientable de género $g \geq 2$ admite una métrica conforme con $K = -1$. Para $g = 0$, la esfera tiene $K = 1/R^2$. La expresión canónica $K = 1$ se obtiene escalando. El difeomorfismo conforme dado por el teorema de Riemann-Roch transporta la orientación complejamente estándar de $\mathbb{C}$ a $S$.

$$\square$$

### Solucion 4

La superficie de Enneper es la inmersión completa mínima de $\mathbb{R}^2$ en $\mathbb{R}^3$. Se verifica que $H = 0$ usando las fórmulas de Weierstrass para inmersiones mínimas: la parametrización es armónica respecto de la métrica conforme inducida. Es orientable porque admite un campo normal unitario global $N = \frac{X_u \times X_v}{\|X_u \times X_v\|}$ que es suave en todas partes.

$$\square$$

### Solucion 5

Bajo cambio de orientación $N \mapsto -N$, el operador de forma cambia como $S \mapsto -S$. Por tanto $\kappa_i \mapsto -\kappa_i$ para $i=1,2$. La curvatura media $H = (\kappa_1 + \kappa_2)/2$ cambia de signo, mientras la curvatura gaussiana $K = \kappa_1\kappa_2$ permanece igual (producto de dos números que cambian de signo).

$$\square$$

### Solucion 6

La botella de Klein tiene $\chi(M) = 0$. Si existiera una inmersión orlente en $\mathbb{R}^3$, por el teorema de inmersión de Whitney, tendríamos $K$ no necesariamente positiva. Sin embargo, la botella de Klein tiene un autofunción de Morse con un número de puntos críticos que contradice la fórmula de Gauss-Bonnet para inmersiones en $\mathbb{R}^3$. Más directamente: la botella de Klein no puede admitnir un campo normal unitario global continuo porque su primer número de Betti con coeficientes en $\mathbb{Z}_2$ es 3, lo cual excede la capacidad del campo normal.

$$\square$$

### Solucion 7

La forma $\omega$ define el elemento de área orientado. Se tiene $d\omega = 2H\,\omega_{IM} \wedge \omega_{IH}$, donde $\omega_{IM}$, $\omega_{IH}$ son las 1-formas de Levi-Civita. Por tanto $d\omega = 0$ si y solo si $H = 0$ en todas partes, es decir, si y solo si la superficie es mínima.

$$\square$$

### Solucion 8

Por el teorema de uniformización de Poincaré-Koebe, toda superficie de Riemann de género $g \geq 2$ es conformemente equivalente a $\mathbb{H}/\Gamma$ para algún grupo Fuchsiano $\Gamma$. La métrica hiperbólica estándar $ds^2 = \frac{4|dz|^2}{(1-|z|^2)^2}$ tiene $K = -1$ y es única módulo automorfismos del grupo.

$$\square$$

### Solucion 9

Una parametrización $X$ es armónica si $\Delta_g X = 0$, donde $\Delta_g$ es el Laplaciano de la métrica conforme inducida. Para una inmersión conforme $X: \mathbb{R}^2 \to \mathbb{R}^3$, la condición armónica es equivalente a que la imagen sea una superficie mínima. Esto se sigue de las fórmulas de Weierstrass: $\phi_3 = \partial_z X - \partial_{\bar z} X$ debe satisfacer $\|\phi_3\| = \cdots$.

$$\square$$

### Solucion 10

Como $\phi$ preserva la orientación, la base $(d\phi(e_1), d\phi(e_2))$ es positivamente orientada en $\tilde S$ si $(e_1, e_2)$ lo es en $S$. El normal $\tilde N$ se define por la condición de orientación positiva. Esto define $\tilde N \circ \phi = d\phi(N)$.

$$\square$$

### Solucion 11

La aplicación de Gauss $\mathcal{N}: S \to S^2$ es un difeomorfismo local por ser $K > 0$. Por el teorema de Hadamard, si $S$ es simplemente conexa entonces $\mathcal{N}$ es un difeomorfismo global. Las preimágenes de curvas closedas en $S^2$ bajo $\mathcal{N}$ producen una foliación de $S$ por curvas convexas.

$$\square$$

### Solucion 12

La pseudosfera se parametriza por $X(u,v) = (\mathrm{sech}\,u\cos v, \mathrm{sech}\,u\sin v, u - \tanh u)$. El campo normal $N$ es globalmente definido y suave. Sin embargo, la métrica inducida es $ds^2 = \mathrm{sech}^2 u\,du^2 + \mathrm{sech}^2 u\tanh^2 u\,dv^2$, que es incompleta: la integral $\int_{-\infty}^{\infty} \mathrm{sech}\,u\,du = \pi$ es finita, luego las geodésicas meridianas alcanzan el borde en distancia finita.

$$\square$$

### Solucion 13

Sea $g$ la métrica de $S$ y $\tilde g$ la de $\tilde S$. Como $\phi$ es isometría, $d\phi$ envía la métrica de $S$ a la de $\tilde S$. El normal orientado $N$ de $S$ se define como el único vector unitario ortogonal a $T_pS$ que hace positively orientada la base $(X_u, X_v, N)$. Bajo $d\phi$, el par (métrica, orientación) se transporta intacto, hence $d\phi(N) = \tilde N \circ \phi$.

$$\square$$

### Solucion 14

Si $X$ y $Y$ son dos cartas orientadas de $S$ con $X(U) \cap Y(V) \neq \emptyset$, la función de transición es $\phi = Y^{-1} \circ X$. La orientación induce que $\det(D\phi) > 0$. Si $\det(D\phi) < 0$, las cartas definen orientaciones opuestas.

$$\square$$

### Solucion 15

Si existiera tal inmersión, por el teorema de inmersión de Nash-Kuiper, la orientación de la segunda forma fundamental requeriría un característica de Euler par. Pero $H^2(S; \mathbb{Z}_2) \cong \mathbb{Z}_2$ implica $\chi(S)$ impar, contradiciendo Gauss-Bonnet.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1992). *Riemannian Geometry*. Birkhauser Boston.
2. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 2. Publish or Perish.
3. Warner, F.W. (1983). *Foundations of Differentiable Manifolds and Lie Groups*. Springer.
4. Jost, J. (2017). *Riemannian Geometry and Geometric Analysis*. Springer.
5. Osserman, R. (1986). *Curvature*. Cambridge University Press.
