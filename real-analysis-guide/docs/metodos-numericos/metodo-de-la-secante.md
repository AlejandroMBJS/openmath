---
title: Metodo de la secante
description: Metodo cuasi-Newton sin derivadas explicitas, con convergencia superlineal y buena eficiencia por evaluacion funcional.
---

# Metodo de la secante

## Motivacion

El metodo de Newton es rapido, pero requiere calcular

$$
f'.
$$

Cuando la derivada no esta disponible o es costosa, una idea natural es reemplazarla por un cociente incremental.

De ahi nace el metodo de la secante.

## Derivacion

Partimos de la formula de Newton:

$$
x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}.
$$

Sustituimos

$$
f'(x_n)
$$

por la pendiente de la secante entre

$$
x_n
$$

y

$$
x_{n-1}:
$$

$$
f'(x_n)\approx \frac{f(x_n)-f(x_{n-1})}{x_n-x_{n-1}}.
$$

Entonces obtenemos

$$
x_{n+1}
=
x_n-
f(x_n)\frac{x_n-x_{n-1}}{f(x_n)-f(x_{n-1})}.
$$

## Algoritmo

Se necesitan dos aproximaciones iniciales

$$
x_0,\ x_1.
$$

Luego, para

$$
n\ge 1,
$$

se define

$$
x_{n+1}
=
x_n-
f(x_n)\frac{x_n-x_{n-1}}{f(x_n)-f(x_{n-1})},
$$

siempre que

$$
f(x_n)\ne f(x_{n-1}).
$$

## Interpretacion geometrica

En lugar de usar la tangente en un solo punto, se toma la recta secante que pasa por

$$
(x_{n-1},f(x_{n-1}))
$$

y

$$
(x_n,f(x_n)).
$$

La interseccion de esa secante con el eje

$$
x
$$

produce el nuevo iterado.

## Convergencia local

### Teorema 1

Si

$$
f\in C^2
$$

y

$$
\alpha
$$

es una raiz simple, entonces para datos iniciales suficientemente cercanos a

$$
\alpha
$$

la secante converge a

$$
\alpha
$$

con orden

$$
p=\frac{1+\sqrt 5}{2}.
$$

### Comentario

Este numero es la razon aurea:

$$
p\approx 1.618.
$$

La convergencia es superlineal, mas lenta que la cuadratica de Newton pero mas rapida que la lineal de muchos esquemas de punto fijo.

## Coste por iteracion

La secante evita derivadas explicitas y necesita una sola evaluacion nueva de

$$
f
$$

por paso si se almacenan las anteriores.

Por eso, en terminos de trabajo por evaluacion funcional, suele ser competitiva con Newton.

## Ejemplo

Aproximemos

$$
\sqrt 2
$$

resolviendo

$$
f(x)=x^2-2.
$$

Tomemos

$$
x_0=1,\qquad x_1=2.
$$

Entonces

$$
x_2
=
2-
\frac{2(2-1)}{2-(-1)}
=
\frac43
\approx 1.333333.
$$

Luego

$$
x_3
=
\frac43-
\frac{(\frac{16}{9}-2)(\frac43-2)}
{(\frac{16}{9}-2)-(2)}
=
1.4.
$$

Y la sucesion sigue acercandose rapidamente a

$$
\sqrt 2.
$$

## Posibles fallos

El metodo puede volverse inestable si:

- 

$$
f(x_n)-f(x_{n-1})
$$

es muy pequeno;
- los puntos iniciales estan lejos de la raiz;
- la funcion tiene geometria local complicada o derivada casi nula cerca de la solucion.

## Criterios de parada

Los mas usados son:

- 

$$
\lvert x_{n+1}-x_n\rvert<\tau;
$$

- 

$$
\lvert f(x_{n+1})\rvert<\eta;
$$

- numero maximo de iteraciones.

## <a id="secante-vs-newton-vs-punto-fijo"></a> Secante vs Newton vs punto fijo

### Newton

- usa derivada explicita;
- convergencia cuadratica local;
- puede ser muy rapido si

$$
f'
$$

esta disponible y el dato inicial es bueno.

### Secante

- no necesita derivada;
- convergencia superlineal;
- requiere dos datos iniciales;
- a menudo ofrece una excelente relacion costo-beneficio.

### Punto fijo

- depende por completo de la eleccion de

$$
g;
$$

- suele converger linealmente;
- es conceptualmente muy flexible, pero mas dificil de calibrar.

### Biseccion

- mas lenta que las anteriores;
- incomparablemente mas robusta cuando hay cambio de signo.

## Metodo cuasi-Newton en una dimension

La secante es la version unidimensional mas simple de la filosofia cuasi-Newton:

aproximar informacion derivativa en lugar de calcularla exactamente.

En dimensiones altas, esta idea conduce a familias enteras de algoritmos de optimizacion.

## Comentario practico

En software cientifico, la secante aparece frecuentemente en versiones hibridas:

- primero se encierra la raiz;
- luego se usa secante o Newton para acelerar;
- si el paso sale del intervalo, se vuelve a un metodo seguro.

## Cierre

El metodo de la secante ocupa un lugar intermedio muy valioso: renuncia a la derivada exacta, conserva una convergencia claramente mejor que la lineal y suele ser una de las opciones mas eficientes cuando la robustez absoluta de la biseccion no basta y Newton resulta demasiado exigente.
