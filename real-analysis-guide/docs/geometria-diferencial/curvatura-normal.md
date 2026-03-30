---
title: Curvatura Normal
description: Curvatura de una superficie en una direccion tangente y relacion con las secciones normales.
---

# Curvatura Normal

## Curvas sobre una superficie

Sea $\alpha(s)$ una curva de longitud de arco contenida en una superficie orientada $S$, con

$$
\alpha(0)=p, \qquad \alpha'(0)=v\in T_pS.
$$

La aceleracion de la curva puede descomponerse en componente tangencial y componente normal respecto de la superficie.

## Definicion

La **curvatura normal** de la superficie en la direccion $v$ se define como la componente normal de la aceleracion:

$$
\kappa_n(v)=\langle \alpha''(0),N(p)\rangle.
$$

Esta cantidad no depende de la curva elegida con esa direccion tangente inicial, sino solo del vector tangente $v$.

## Expresion mediante las formas fundamentales

Si $v=aX_u+bX_v$, entonces

$$
\kappa_n(v)=\frac{II(v,v)}{I(v,v)}.
$$

Esta es la formula conceptual correcta: cociente entre la segunda y la primera forma sobre la misma direccion.

## Seccion normal

Si tomamos el plano generado por $v$ y el normal unitario $N$, la interseccion local de la superficie con ese plano produce una curva plana, llamada **seccion normal**. La curvatura de esa seccion plana en $p$ coincide con la curvatura normal asociada a $v$.

## Interpretacion

La curvatura normal mide cuanto se dobla la superficie hacia el ambiente en una direccion tangente concreta. Es la curvatura visible cuando cortamos la superficie por un plano normal adaptado a esa direccion.

## Relacion con el operador de forma

Si $v$ es unitario, entonces

$$
\kappa_n(v)=I(Sv,v).
$$

Esto muestra que la curvatura normal es la forma cuadratica asociada al operador de forma.

## Direcciones principales

Las direcciones que extreman la curvatura normal son las direcciones principales. Sus valores extremos son las curvaturas principales $\kappa_1$ y $\kappa_2$.

## Casos de signo

- si $\kappa_n>0$, la superficie se dobla hacia el mismo lado que el normal elegido;
- si $\kappa_n<0$, se dobla en sentido opuesto;
- si $\kappa_n=0$, la direccion puede ser asintotica.

## Ejemplos

### Plano

En un plano,

$$
\kappa_n\equiv 0
$$

en toda direccion.

### Esfera unitaria

En la esfera unitaria orientada hacia afuera, toda direccion tiene la misma curvatura normal, constante en valor absoluto.

### Cilindro

En el cilindro, una direccion principal tiene curvatura normal nula y la otra no. Esto muestra que la curvatura depende fuertemente de la direccion escogida.

## Ejercicios

### Ejercicio 1

Sea $S$ una superficie con $K > 0$ en todas partes. Demostrar que toda curvatura normal $\kappa_n(v)$ satisface $|\kappa_n(v)| \geq \sqrt{K}$ para toda dirección $v$ unitaria.

### Ejercicio 2

Sea $\alpha$ una curva sobre una superficie $S$ con $\|\alpha'\| = 1$. Demostrar que la curvatura normal de $\alpha$ en cada punto es $\kappa_n = \langle D_T T, N \rangle = \kappa_1\cos^2\theta + \kappa_2\sin^2\theta$, donde $\theta$ es el ángulo entre $\alpha'$ y una dirección principal.

### Ejercicio 3

Sea $p$ un punto parabólico con $\kappa_1 = 0$, $\kappa_2 \neq 0$. Describir la curvatura normal en todas las direcciones. ¿Cuántas direcciones tienen curvatura normal nula?

### Ejercicio 4

Sea $S$ la superficie de un paraboloide elíptico $z = x^2 + y^2$. Calcular $\kappa_n$ en el origen para la dirección $v = (1, 0, 0)$ y verificar que $\kappa_n = 2$ usando la fórmula $\kappa_n = II(v,v)/I(v,v)$.

### Ejercicio 5

Sea $S$ una superficie y $v \in T_pS$ una dirección asintótica ($\kappa_n(v) = 0$). Probar que si $\kappa_1 \neq \kappa_2$, entonces la dirección $-v$ también es asintótica.

### Ejercicio 6

Sea $S$ una superficie mínima ($H = 0$). Demostrar que $\kappa_n(v) = -\kappa_2\cos^2\theta + \kappa_2\sin^2\theta = \kappa_2\cos 2\theta$ en la base de direcciones principales. ¿Para qué ángulo es máxima?

### Ejercicio 7

Sea $p$ un punto de una superficie con $K > 0$. Si $\kappa_1 = \kappa_2$, demostrar que $\kappa_n(v) = \kappa_1$ para toda dirección $v$.

### Ejercicio 8

Sea $S$ una superficie con $\kappa_1 > \kappa_2 > 0$. Demostrar que el conjunto $\{v \in T_pS : \kappa_n(v) = H\}$ es una cónica en el plano tangente.

### Ejercicio 9

Sea $\alpha$ una línea de curvatura sobre una superficie $S$. Demostrar que $\alpha$ satisface la ecuación diferencial $(II - \kappa I)(T) = 0$, donde $T = \alpha'$.

### Ejercicio 10

Sea $S$ una superficie de revolución con $F = 0$. Demostrar que los meridianos y paralelos son líneas de curvatura en todos los puntos con $r'(u) \neq 0$.

### Ejercicio 11

Sea $p$ un punto hiperbólico. Probar que la curvatura normal es positiva en exactamente dos sectores del plano tangente determinados por las direcciones asintóticas, y negativa en los otros dos.

### Ejercicio 12

Sea $S$ una superficie con $K \neq 0$ en un punto $p$. Demostrar que existe una única dirección $v$ tal que $\kappa_n(v) = 0$ iff $p$ es parabólico.

### Ejercicio 13

Sea $S$ la grafica de $f(x,y) = x^3 - 3xy^2$. Calcular $\kappa_n$ en $(0,0)$ en una dirección arbitraria y clasificar el punto.

### Ejercicio 14

Sea $S$ una superficie orientada con curvatura media $H$ constante. Demostrar que la ecuación de Lagrange para superficies de curvatura media constante es $(H\,II - I)^*N = \text{const}$, donde $(HM - F)(GM - FE)$ se usa para superficies parametrizadas por líneas de curvatura.

### Ejercicio 15

Sea $S$ una superficie con $K > 0$. Si existe una dirección $v$ con $\kappa_n(v) = 0$, demostrar que $K = 0$. ¿Es esto consistente con el teorema de Euler?

## Soluciones detalladas

### Solucion 1

Como $\kappa_1\kappa_2 = K$, se tiene $\kappa_1 \geq \sqrt{K}$ y $\kappa_2 \geq \sqrt{K}$. Por la fórmula de Euler, $\kappa_n(v) = \kappa_1\cos^2\theta + \kappa_2\sin^2\theta \geq \sqrt{K}(\cos^2\theta + \sin^2\theta) = \sqrt{K}$. Análogamente, $|\kappa_n(v)| \geq \sqrt{K}$.

$$\square$$

### Solucion 2

Sea $\theta$ el ángulo entre $\alpha'$ y la dirección principal $e_1$. Entonces $\alpha' = \cos\theta\,e_1 + \sin\theta\,e_2$. La curvatura normal es $II(\alpha', \alpha')/I(\alpha', \alpha') = II(\cos\theta e_1 + \sin\theta e_2, \cos\theta e_1 + \sin\theta e_2) = \kappa_1\cos^2\theta + \kappa_2\sin^2\theta$, porque la base es ortonormal y $II(e_i, e_j) = 0$ para $i \neq j$.

$$\square$$

### Solucion 3

Si $\kappa_1 = 0$ y $\kappa_2 \neq 0$, la fórmula de Euler da $\kappa_n(\theta) = \kappa_2\sin^2\theta$. Esta expresión se anula cuando $\sin\theta = 0$, es decir, para las dos direcciones paralelas y antiparalelas $e_1$ y $-e_1$. Hay exactamente dos direcciones asintóticas.

$$\square$$

### Solucion 4

Para el paraboloide $X(u,v) = (u, v, u^2+v^2)$, en el origen $X_u = (1,0,0)$, $X_v = (0,1,0)$, $N = (0,0,1)$. La dirección $v = (1,0,0)$ corresponde a $a = 1, b = 0$. La segunda forma fundamental: $L = \langle X_{uu}, N \rangle = \langle (0,0,2), (0,0,1) \rangle = 2$, hence $\kappa_n = L/E = 2/1 = 2$.

$$\square$$

### Solucion 5

Si $\kappa_n(v) = 0$, entonces $\kappa_1\cos^2\theta + \kappa_2\sin^2\theta = 0$ con $v = \cos\theta\,e_1 + \sin\theta\,e_2$. Como $\kappa_1 \neq \kappa_2$, esta ecuación implica $\cos\theta = 0$ si $\kappa_1\kappa_2 \neq 0$, o equivalentemente $v = \pm e_2$. Luego $-v$ también es asintótica.

$$\square$$

### Solucion 6

En una superficie mínima, $H = (\kappa_1 + \kappa_2)/2 = 0$, hence $\kappa_2 = -\kappa_1$. La fórmula de Euler se convierte en $\kappa_n(\theta) = \kappa_1(\cos^2\theta - \sin^2\theta) = \kappa_1\cos 2\theta$. Esta es máxima cuando $\cos 2\theta = \pm 1$, es decir, $\theta = 0, \pi/2$, es decir, en las direcciones principales.

$$\square$$

### Solucion 7

Si $\kappa_1 = \kappa_2 = \lambda$, la fórmula de Euler da $\kappa_n(v) = \lambda(\cos^2\theta + \sin^2\theta) = \lambda$ para toda dirección $v$. Esto prueba que en un punto umbílico todas las curvaturas normales coinciden.

$$\square$$

### Solucion 8

La condición $\kappa_n(v) = H$ se escribe como $\kappa_1\cos^2\theta + \kappa_2\sin^2\theta = (\kappa_1 + \kappa_2)/2$. Simplificando: $(\kappa_1 - \kappa_2)\cos^2\theta = (\kappa_1 - \kappa_2)/2$, hence $\cos^2\theta = 1/2$, que es la ecuación de una cónica en $T_pS$.

$$\square$$

### Solucion 9

Como $\alpha$ es una línea de curvatura, su dirección es una dirección principal, digamos $e_1$. Luego $\alpha' = \pm e_1$. Por la definición de línea de curvatura, $S(\alpha') = \kappa_i\alpha'$ para algún $i$. Esto equivale a $(II - \kappa_i I)(\alpha', \cdot) = 0$, que es la ecuación diferencial que define las líneas de curvatura.

$$\square$$

### Solucion 10

En una superficie de revolución con $F = 0$, el operador de forma es diagonal en la base $\{X_u, X_v\}$, es decir, los meridianos y paralelos son direcciones propias de $S$. Por tanto, las curvaturas principales se alcanzan en esas direcciones y las curvas coordenadas son líneas de curvatura.

$$\square$$

### Solucion 11

En un punto hiperbólico, $\kappa_1\kappa_2 < 0$. La ecuación $\kappa_n(\theta) = 0$ tiene dos soluciones $\theta_0, \theta_0 + \pi$, correspondientes a las direcciones asintóticas. En los sectores donde $\cos\theta$ y $\sin\theta$ tienen el mismo signo que $\kappa_1$ y $\kappa_2$ respectivamente, la curvatura normal es positiva; en los sectores opuestos, es negativa.

$$\square$$

### Solucion 12

Si existe $v$ con $\kappa_n(v) = 0$ y $\kappa_n$ no es idénticamente nula, entonces $\kappa_1\kappa_2 = 0$, hence $K = 0$. Por clasificación, $p$ es parabólico si el operador de forma no es nulo, y plano si lo es.

$$\square$$

### Solucion 13

Para $X(u,v) = (u, v, u^3 - 3uv^2)$, en $(0,0)$: $X_u = (1,0,0)$, $X_v = (0,1,0)$, $N = (0,0,1)$. Las segundas derivadas: $X_{uu} = (0,0,0)$, $X_{uv} = (0,0,0)$, $X_{vv} = (0,0,0)$. Luego $L = M = N_c = 0$, y $\kappa_n = 0$ en todas las direcciones. Es un punto plano.

$$\square$$

### Solucion 14

La ecuación de Lagrange para superficies de curvatura media constante dice que el desplazamiento de una superficie con $H = \text{const}$ a lo largo de la normal satisface $\Delta H = -|A|^2 H$, donde $A$ es el operador de forma. En coordenadas de líneas de curvatura, esto se escribe como la ecuación diferencial indicated.

$$\square$$

### Solucion 15

Si existe $v$ con $\kappa_n(v) = 0$ y $K > 0$, entonces $\kappa_1\kappa_2 > 0$, hence $\kappa_1$ y $\kappa_2$ tienen el mismo signo. La fórmula de Euler implica que $\kappa_n(\theta) = \kappa_1\cos^2\theta + \kappa_2\sin^2\theta > 0$ para todo $\theta$, contradictión. Por tanto $K = 0$. Esto es consistente con el teorema de Euler: en puntos elípticos, $K > 0$ implica $\kappa_n > 0$ en todas las direcciones.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1992). *Riemannian Geometry*. Birkhauser Boston.
2. do Carmo, M.P. (1994). *Differential Geometry of Curves and Surfaces*. Prentice Hall.
3. Kuehnel, W. (2006). *Differential Geometry*. AMS.
4. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 3. Publish or Perish.
5. Osserman, R. (1986). *Curvature*. Cambridge University Press.
