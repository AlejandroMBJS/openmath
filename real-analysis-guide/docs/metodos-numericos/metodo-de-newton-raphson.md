---
title: Metodo de Newton-Raphson
description: Metodo tangencial de convergencia cuadratica local para raices simples, con analisis de errores y variantes para raices multiples.
---

# Metodo de Newton-Raphson

## Motivacion

El metodo de Newton-Raphson busca reemplazar la robustez de la biseccion por una convergencia mucho mas rapida. La idea es aproximar localmente la funcion por su recta tangente y usar la raiz de esa recta como nuevo iterado.

## Derivacion

Sea

$$
f(x)=0
$$

la ecuacion a resolver. En torno a un punto

$$
x_n
$$

con

$$
f'(x_n)\ne 0,
$$

aproximamos

$$
f(x)\approx f(x_n)+f'(x_n)(x-x_n).
$$

Imponiendo que la aproximacion lineal se anule:

$$
0=f(x_n)+f'(x_n)(x_{n+1}-x_n).
$$

Despejando:

$$
x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}.
$$

## Algoritmo

Dado un punto inicial

$$
x_0,
$$

definimos

$$
x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}.
$$

El proceso se repite mientras:

- 

$$
f'(x_n)\ne 0;
$$

- el iterado permanezca en una region donde el modelo lineal sea fiable;
- el criterio de parada no se haya activado.

## Convergencia local para raices simples

### Teorema 1

Supongamos que

$$
f\in C^2
$$

en un entorno de

$$
\alpha,
$$

que

$$
f(\alpha)=0,
$$

y que

$$
f'(\alpha)\ne 0.
$$

Entonces, para

$$
x_0
$$

suficientemente cercano a

$$
\alpha,
$$

la iteracion de Newton converge a

$$
\alpha
$$

y satisface

$$
\lvert e_{n+1}\rvert\le C\lvert e_n\rvert^2,
$$

donde

$$
e_n=x_n-\alpha.
$$

### Consecuencia

La convergencia es cuadratica: el numero de cifras correctas se duplica aproximadamente en cada iteracion cercana a la raiz.

## Esquema del calculo de error

Por Taylor alrededor de

$$
\alpha:
$$

$$
f(x_n)=f'(\alpha)e_n+\frac{f''(\xi_n)}{2}e_n^2.
$$

Sustituyendo en la formula de Newton y reorganizando, se obtiene una relacion de la forma

$$
e_{n+1}=K_ne_n^2,
$$

con

$$
K_n\to \frac{f''(\alpha)}{2f'(\alpha)}.
$$

## <a id="aproximar-raices-con-newton-raphson"></a> Aproximar raices con Newton-Raphson

Aproximemos

$$
\sqrt 2
$$

resolviendo

$$
f(x)=x^2-2.
$$

Entonces

$$
f'(x)=2x,
$$

y Newton da

$$
x_{n+1}=x_n-\frac{x_n^2-2}{2x_n}
=
\frac12\left(x_n+\frac{2}{x_n}\right).
$$

Tomando

$$
x_0=1.5,
$$

obtenemos:

$$
x_1=\frac12\left(1.5+\frac{2}{1.5}\right)=1.416666\ldots
$$

$$
x_2=\frac12\left(1.416666\ldots+\frac{2}{1.416666\ldots}\right)=1.414215686\ldots
$$

$$
x_3\approx 1.41421356237.
$$

En solo tres iteraciones efectivas ya se alcanza precision muy alta.

## Dependencia del dato inicial

Newton es localmente excelente, pero globalmente delicado.

Puede fallar por varias razones:

- 

$$
f'(x_n)=0;
$$

- el iterado salta lejos de la raiz;
- converge a otra raiz distinta;
- entra en ciclos.

## Ejemplo de fallo

Para

$$
f(x)=x^{1/3},
$$

la derivada es singular cerca de

$$
0.
$$

La formula de Newton deja de ser apropiada, y aun cuando la raiz existe, la geometria local no cumple las hipotesis del teorema clasico.

## Criterios de parada

Se suele detener cuando ocurre alguna de estas condiciones:

- residuo pequeno:

$$
\lvert f(x_n)\rvert<\eta;
$$

- salto pequeno:

$$
\lvert x_{n+1}-x_n\rvert<\tau;
$$

- numero maximo de iteraciones.

### Advertencia

En problemas mal condicionados, un residuo pequeno no siempre implica error pequeno en la raiz.

## <a id="newton-raphson-vs-punto-fijo"></a> Newton-Raphson vs punto fijo

Newton puede verse como una iteracion de punto fijo con

$$
g(x)=x-\frac{f(x)}{f'(x)}.
$$

La diferencia es que esta

$$
g
$$

esta adaptada geometricamente a la funcion.

Si

$$
\alpha
$$

es una raiz simple, entonces

$$
g'(\alpha)=0,
$$

lo cual explica la mejora de orden respecto a un punto fijo generico, donde normalmente

$$
\lvert g'(\alpha)\rvert\in (0,1).
$$

### Comparacion estructural

- punto fijo generico:
  convergencia lineal;
- Newton:
  convergencia cuadratica local;
- costo por iteracion:
  Newton requiere evaluar tambien la derivada.

## <a id="newton-raphson-modificado-raices-multiples"></a> Newton-Raphson modificado para raices multiples

Si

$$
\alpha
$$

es una raiz de multiplicidad

$$
m>1,
$$

la formula clasica de Newton pierde su convergencia cuadratica y se vuelve solo lineal.

### Version con multiplicidad conocida

Si

$$
m
$$

es conocida, se usa

$$
x_{n+1}=x_n-m\frac{f(x_n)}{f'(x_n)}.
$$

Esta correccion restaura la convergencia cuadratica en muchos casos.

### Justificacion informal

Si

$$
f(x)=(x-\alpha)^m q(x),
$$

con

$$
q(\alpha)\ne 0,
$$

entonces

$$
\frac{f(x)}{f'(x)}
$$

se comporta como

$$
\frac{x-\alpha}{m}
$$

cerca de la raiz. Multiplicar por

$$
m
$$

compensa exactamente esa perdida.

### Version sin multiplicidad conocida

Tambien existe la variante

$$
x_{n+1}
=
x_n-
\frac{f(x_n)f'(x_n)}
{(f'(x_n))^2-f(x_n)f''(x_n)},
$$

que intenta corregir el efecto de la multiplicidad usando

$$
f''
$$

en lugar del dato explicito de

$$
m.
$$

## Comentario de implementacion

En problemas reales se suelen usar estrategias hibridas:

- biseccion para localizar;
- Newton para acelerar;
- amortiguamiento o line search para evitar saltos excesivos.

## Cierre

Newton-Raphson es el paradigma del metodo rapido local: cuando el modelo diferencial es fiable y el punto inicial es razonable, la convergencia es extraordinaria. Su potencia, sin embargo, exige entender con precision sus hipotesis y sus fallos.
