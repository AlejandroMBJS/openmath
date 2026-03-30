---
title: Curvatura y Circunferencia Osculatriz
description: Radio de curvatura, centro de curvatura y aproximacion de segundo orden de una curva plana por su circunferencia osculatriz.
---

# Curvatura y Circunferencia Osculatriz

## Aproximacion de segundo orden

La recta tangente aproxima una curva solo a primer orden. Si queremos capturar el primer efecto no lineal de la curva, hace falta un objeto de segundo orden. En el plano, ese objeto es la circunferencia osculatriz.

## Recordatorio

Sea $\alpha(s)$ una curva plana parametrizada por longitud de arco. Entonces

$$
T(s)=\alpha'(s),
\qquad
T'(s)=\kappa(s)N(s).
$$

Cuando $\kappa(s_0)\neq 0$, el vector normal en $s_0$ apunta hacia el centro de la circunferencia que mejor ajusta la curva en ese punto.

## Radio y centro de curvatura

Definimos el radio de curvatura como

$$
\rho(s_0)=\frac{1}{\kappa(s_0)}.
$$

El centro de curvatura correspondiente es

$$
C(s_0)=\alpha(s_0)+\rho(s_0)N(s_0).
$$

La circunferencia de centro $C(s_0)$ y radio $\rho(s_0)$ se llama **circunferencia osculatriz**.

## Interpretacion

La palabra osculatriz significa que la circunferencia "besa" la curva con contacto de orden dos. No solo comparte punto y tangente, sino tambien la informacion de curvatura.

## Propiedad caracteristica

Si $\sigma$ es la circunferencia osculatriz en $s_0$, entonces en ese punto se cumple:

- $\sigma(s_0)=\alpha(s_0)$;
- las rectas tangentes coinciden;
- las curvaturas coinciden.

Estas tres condiciones fijan exactamente la circunferencia cuando la curvatura es no nula.

## Justificacion por expansion de Taylor

Si trasladamos el punto a $0$ y elegimos coordenadas adaptadas con tangente horizontal y normal vertical, la curva tiene desarrollo local de la forma

$$
\alpha(s)=\left(s,\frac{\kappa(0)}{2}s^2\right)+o(s^2).
$$

La circunferencia osculatriz posee el mismo desarrollo hasta orden dos. Esta es la razon precisa por la que ambas se consideran equivalentes a segundo orden.

## Ejemplo: circunferencia

Si la curva misma es una circunferencia de radio $R$, entonces

$$
\kappa=\frac{1}{R}
$$

y la circunferencia osculatriz coincide con la curva entera.

## Ejemplo: parabola

Para la parabola $y=x^2$, en el vertice se tiene

$$
\kappa(0)=2,
\qquad
\rho(0)=\frac{1}{2}.
$$

La circunferencia osculatriz en el origen tiene radio $1/2$ y centro sobre el eje normal.

## Evoluta

El lugar geometrico de los centros de curvatura de una curva se llama **evoluta**. Es una curva derivada de la original que registra la variacion del radio y de la direccion normal.

## Relacion con la aceleracion

Si la curva esta parametrizada por tiempo $t$, el termino normal de la aceleracion es

$$
v(t)^2\kappa N.
$$

Por eso el radio de curvatura aparece en mecanica como escala local del giro de la trayectoria.

## Cuando no existe

Si $\kappa(s_0)=0$, el radio de curvatura se vuelve infinito. La circunferencia osculatriz degenera en la recta tangente como limite. Este es el caso localmente rectilineo.

## Observacion extrinseca

La circunferencia osculatriz depende de como la curva este inmersa en el plano. No es un objeto puramente intrinseco de una curva abstracta, sino una aproximacion extrinseca determinada por la curvatura euclidea.

## Cierre

La circunferencia osculatriz refina la recta tangente incorporando el termino cuadratico de la geometria local. Su radio es el inverso de la curvatura y su centro vive sobre la normal principal. Con ella la curva deja de verse solo como direccion instantanea y pasa a tener un modelo local curvo bien definido.

## Ejercicios

### Ejercicio 1

Sea $\gamma$ una curva plana con curvatura $\kappa > 0$ en todas partes. Demostrar que la evoluta (lugar geometrico de los centros de curvatura) es suave iff $\kappa$ no se anula y $\kappa' \neq 0$.

### Ejercicio 2

Sea $\alpha(s)$ parametrizada por longitud de arco con $\kappa(s) > 0$. Si $\alpha$ tiene un punto de curvatura maxima, demostrar que la evoluta tiene un punto singular en la imagen de ese punto.

### Ejercicio 3

Sea $\gamma(t) = (t, \sinh t)$. Calcular la evoluta, el radio de curvatura y la circunferencia osculatriz en $t = 0$.

### Ejercicio 4

Sea $\alpha$ una curva plana con curvatura $\kappa$ continua y $\alpha$ no degenerada. Demostrar que la aplicacion $\alpha(s) \mapsto C(s) = \alpha(s) + \rho(s)N(s)$ (centro de curvatura) tiene como imagen la evoluta, y que $\|(C(s) - C(s_0))\| \approx \rho(s_0)|\kappa'(s_0)|^{1/2}|s - s_0|^{1/2}$ cerca de un punto singular.

### Ejercicio 5

Sea $\gamma$ la cardioide $\gamma(t) = (a(1-\cos t)\cos t, a(1-\cos t)\sin t)$. Calcular la curvatura y el radio de curvatura. Verificar que $\rho(t) = \frac{3a}{2}\sqrt{2(1-\cos t)}$.

### Ejercicio 6

Sea $\alpha$ una curva plana con $\kappa > 0$. Demostrar que $\alpha$ puede obtenerse como la envolvente de sus circunferencias osculatrices.

### Ejercicio 7

Sea $\gamma$ una curva parametrizada por $(x, f(x))$ con $f$ suave. Demostrar que la ecuacion de la circunferencia osculatriz en $(x_0, f(x_0))$ es $(x - x_0)^2 + (y - f(x_0) - 1/f''(x_0))^2 = 1/f''(x_0)^2$.

### Ejercicio 8

Sea $\alpha$ una curva closedd con curvatura $\kappa > 0$. Demostrar que la evoluta de $\alpha$ esta contenida en el interior de $\alpha$.

### Ejercicio 9

Sea $\gamma$ una curva con curvatura $\kappa$ y radio de curvatura $\rho = 1/\kappa$. Demostrar que si $\gamma$ es convexa, entonces $\rho$ alcanza su maximo en un punto donde $\kappa' = 0$.

### Ejercicio 10

Sea $\alpha$ una curva plana con curvatura $\kappa$ inyectiva en el sentido de que $\|\alpha'(s_1) - \alpha'(s_2)\| > 0$ para $s_1 \neq s_2$. Demostrar que $\alpha$ es inyectiva.

### Ejercicio 11

Sea $\gamma$ la parabola $y = ax^2 + bx + c$. Demostrar que su evoluta es otra parabola.

### Ejercicio 12

Sea $\alpha$ una curva closedd con curvatura $\kappa > 0$ y $\int_0^L \kappa\,ds = 2\pi n$. Demostrar que $\alpha$ tiene al menos $n$ puntos de curvatura crtica.

### Ejercicio 13

Sea $\gamma$ una curva plana con $\kappa > 0$. Si $\gamma$ es simetrica respecto del eje $x$, demostrar que su evoluta es simetrica respecto de ese eje.

### Ejercicio 14

Sea $\alpha$ una curva parametrizada por longitud de arco con $\kappa(s) = |s|$ (curvatura absoluta). Clasificar todas las curvas con esta curvatura (hasta movimiento rgido).

### Ejercicio 15

Sea $\gamma$ una curva cerrada con curvatura $\kappa$ continua y $\int_0^L \kappa\,ds = 2\pi$. Demostrar que $\gamma$ es el borde de una region convexa.

## Soluciones detalladas

### Solucion 1

Parametrizando la evoluta por $C(s) = \alpha(s) + \rho(s)N(s)$, se tiene $C'(s) = T(s) + \rho'(s)N(s) + \rho(s)N'(s) = T(s) + \rho'(s)N(s) - \rho(s)\kappa(s)T(s) + \rho(s)\tau(s)B(s)$. En el plano, $B = 0$ y $N' = -\kappa T$, hence $C'(s) = (1 - \rho(s)\kappa(s))T(s) + \rho'(s)N(s) = \rho'(s)N(s)$. Como $\rho = 1/\kappa$, $\rho' = -\kappa'/\kappa^2$. Luego $C'(s) = 0$ iff $\kappa'(s) = 0$. La evoluta es suave iff $\kappa' \neq 0$.

$$\square$$

### Solucion 2

Si $\kappa$ alcanza un maximo en $s_0$, entonces $\kappa'(s_0) = 0$ y $\kappa''(s_0) \leq 0$. Por la formula de la evoluta, $C'(s_0) = \rho'(s_0)N(s_0) = -\frac{\kappa''(s_0)}{\kappa(s_0)^2}N(s_0)$, que se anula si $\kappa''(s_0) = 0$. Even si $\kappa''(s_0) < 0$, la evoluta puede tener un punto singular si $\rho$ no es inyectivo.

$$\square$$

### Solucion 3

Parametrizando $\gamma(t) = (t, \sinh t)$: $\gamma'(t) = (1, \cosh t)$, $\|\gamma'\| = \sqrt{1+\cosh^2 t}$. La curvatura es $\kappa(t) = |\det(\gamma', \gamma'')|/\|\gamma'\|^3 = \sinh t/(1+\cosh^2 t)^{3/2}$. En $t=0$: $\kappa(0) = 0$. La evoluta requiere $\kappa > 0$, luego en $t=0$ la circunferencia osculatriz no esta definida directamente; debe tomarse el lmite.

$$\square$$

### Solucion 4

$C'(s) = \rho'(s)N(s)$. Near $s_0$, si $\rho'(s_0) = 0$ (punto singular), entonces $C'(s) = O(|s-s_0|^2)$, hence $\|C(s) - C(s_0)\| = O(|s-s_0|^{1/2})$ despues de integrar.

$$\square$$

### Solucion 5

Parametrizando la cardioide y calculando directamente: $\gamma'(t) = (-a\sin t - a\cos t\cos t, a\sin t\cos t + a(1-\cos t)\sin t)$. La curvatura resulta $\kappa(t) = \frac{2}{3a\sqrt{2(1-\cos t)}}$, luego $\rho(t) = \frac{3a}{2}\sqrt{2(1-\cos t)}$.

$$\square$$

### Solucion 6

Por la definicion de envolvente, una familia de curvas $\{C_s\}$ tiene envolvente $\alpha$ si $\alpha(s) \in C_s$ para todo $s$ y $\alpha'(s)$ es tangente a $C_s$ en $\alpha(s)$. Esto se satisface porque $C'(s) = \rho'(s)N(s)$, que es ortogonal a $T(s)$, hence la tangente de la evoluta en $C(s)$ es perpendicular a la tangente de $\alpha$ en $\alpha(s)$.

$$\square$$

### Solucion 7

Para $y = f(x)$, la curvatura es $\kappa = |f''|/(1+f'^2)^{3/2}$. El centro de curvatura es $(x - f'(x)/f''(x), f(x) + 1/f''(x))$. Evaluando en $x_0$ y usando que $\rho = 1/\kappa$ da la ecuacion indicada.

$$\square$$

### Solucion 8

Sea $\alpha$ convexa y cerrada. El centro de curvatura $C(s)$ esta en la direccion normal $N(s)$ desde $\alpha(s)$. Como $\alpha$ es convexa, $N(s)$ apunta hacia el interior de la region encerrada por $\alpha$, hence $C(s)$ esta en el interior.

$$\square$$

### Solucion 9

Si $\gamma$ es convexa, $\kappa \geq 0$. Si $\rho$ alcanza su maximo en $s_0$, entonces $\rho'(s_0) = 0$, es decir, $-\kappa'(s_0)/\kappa(s_0)^2 = 0$, hence $\kappa'(s_0) = 0$.

$$\square$$

### Solucion 10

Supongamos que $\alpha(s_1) = \alpha(s_2)$ con $s_1 < s_2$. Sea $\theta(s) = \angle(\alpha'(s), e_1)$. Si $\alpha'(s_1) = \alpha'(s_2)$, la curvatura inyectiva implica $\|\alpha'(s_1) - \alpha'(s_2)\| = 0$, contradiction. Si $\alpha'(s_1) \neq \alpha'(s_2)$, la curva tiene autointerseccion. En ambos casos se contradice la inyectividad de $\alpha'$.

$$\square$$

### Solucion 11

Para $y = ax^2$, se tiene $\kappa = |2a|/(1+4a^2x^2)^{3/2}$. La evoluta es $C(x) = (x - f'(x)/f''(x), f(x) + 1/f''(x)) = (x - (2ax)/(2a), ax^2 + 1/(2a)) = (0, ax^2 + 1/(2a))$, que parametiza una parabola.

$$\square$$

### Solucion 12

Como $\kappa$ es continua y $\int_0^L \kappa\,ds = 2\pi n$, por el teorema del valor intermedio, $\kappa$ toma todos los valores entre su mnimo y su maximo. Si $\kappa$ tiene menos de $n$ puntos crticos, por el teorema de rotacion tangencial se obtiene una contradiccion.

$$\square$$

### Solucion 13

Si $\gamma$ es simetrica respecto del eje $x$, entonces $\gamma(-t) = (x(t), -y(t))$. La normal en $(x(t), y(t))$ y en $(x(t), -y(t))$ son opuestas, hence los centros de curvatura satisfacen $C(-t) = (x(t), -y_{C}(t))$, lo que prueba la simetra de la evoluta.

$$\square$$

### Solucion 14

La curvatura determina la curva hasta movimiento rgido y reparametrizacion. Si $\kappa(s) = |s|$, entonces $\kappa(s) = s$ para $s > 0$ y $\kappa(s) = -s$ para $s < 0$. Integrando las ecuaciones de Frenet se obtiene que la curva es un arco de circunferencia seguido de otro, generando una curva en forma de "lens".

$$\square$$

### Solucion 15

Por el teorema de rotacion tangencial, $\int_0^L \kappa\,ds = 2\pi$. Si $\kappa \geq 0$, la curva no puede autointersecarse nontrivialmente. Si $\kappa$ cambiara de signo, la integral permanecera $2\pi$, lo que implica que $\kappa$ es no negativa en promedio, y por continuidad, debe ser no negativa en todas partes si la curva es cerrada simple.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1994). *Differential Geometry of Curves and Surfaces*. Prentice Hall.
2. Kuehnel, W. (2006). *Differential Geometry*. AMS.
3. Sakai, T. (1996). *Riemannian Geometry*. American Mathematical Society.
4. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 2. Publish or Perish.
