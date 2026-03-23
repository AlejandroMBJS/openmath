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
