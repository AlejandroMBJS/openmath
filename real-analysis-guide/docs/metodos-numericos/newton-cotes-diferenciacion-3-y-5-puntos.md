---
title: Newton-Cotes para diferenciacion de 3 y 5 puntos
description: Formulas de 3 y 5 puntos para derivadas primeras y segundas, derivacion por Taylor e interpolacion, y analisis del orden.
---

# Newton-Cotes para diferenciacion de 3 y 5 puntos

## Contexto

Las formulas de 3 y 5 puntos son reglas locales de diferenciacion obtenidas al interpolar la funcion en nodos equiespaciados y derivar el polinomio resultante.

Se las suele agrupar bajo la misma filosofia de Newton-Cotes porque, igual que las cuadraturas clasicas, nacen de operar sobre un interpolante polinomico en una malla uniforme.

## Filosofia general

Si

$$
x_i=x_0+ih
$$

y conocemos algunos valores vecinos de

$$
f,
$$

construimos un polinomio local

$$
p
$$

que interpola esos datos y tomamos

$$
f'(x_0)\approx p'(x_0).
$$

La calidad de la formula depende de:

- cuantos nodos usemos;
- si la formula es centrada o unilateral;
- la suavidad de

$$
f.
$$

## Formula centrada de 3 puntos para la derivada primera

Usando los nodos

$$
x-h,\ x,\ x+h,
$$

se obtiene

$$
f'(x)\approx \frac{f(x+h)-f(x-h)}{2h}.
$$

### Error

Si

$$
f\in C^3,
$$

entonces

$$
\frac{f(x+h)-f(x-h)}{2h}
=
f'(x)+\frac{h^2}{6}f'''(\xi).
$$

Por tanto, la formula tiene orden

$$
2.
$$

## Formula de 3 puntos hacia adelante

Si solo disponemos de

$$
x,\ x+h,\ x+2h,
$$

la formula es

$$
f'(x)\approx \frac{-3f(x)+4f(x+h)-f(x+2h)}{2h}.
$$

### Error

Bajo suavidad suficiente:

$$
\frac{-3f(x)+4f(x+h)-f(x+2h)}{2h}
=
f'(x)+O(h^2).
$$

Esta ganancia de orden respecto a la diferencia simple hacia adelante se logra usando un nodo adicional.

## Formula de 3 puntos hacia atras

De manera analoga,

$$
f'(x)\approx \frac{3f(x)-4f(x-h)+f(x-2h)}{2h},
$$

tambien con error

$$
O(h^2).
$$

## Formula centrada de 5 puntos para la derivada primera

Usando los nodos

$$
x-2h,\ x-h,\ x,\ x+h,\ x+2h,
$$

se obtiene

$$
f'(x)\approx
\frac{f(x-2h)-8f(x-h)+8f(x+h)-f(x+2h)}{12h}.
$$

### Error

Si

$$
f\in C^5,
$$

entonces

$$
\frac{f(x-2h)-8f(x-h)+8f(x+h)-f(x+2h)}{12h}
=
f'(x)+O(h^4).
$$

### Comentario

La simetria cancela sistematicamente terminos de orden impar bajo en el desarrollo de Taylor, lo que eleva el orden.

## Formula centrada de 3 puntos para la derivada segunda

La regla clasica es

$$
f''(x)\approx \frac{f(x+h)-2f(x)+f(x-h)}{h^2}.
$$

Su error es

$$
O(h^2).
$$

## Formula centrada de 5 puntos para la derivada segunda

Una formula de orden superior es

$$
f''(x)\approx
\frac{-f(x+2h)+16f(x+h)-30f(x)+16f(x-h)-f(x-2h)}{12h^2}.
$$

Esta aproximacion tiene error

$$
O(h^4).
$$

## Derivacion por series de Taylor

### Esquema

Se expanden

$$
f(x\pm h),\qquad f(x\pm 2h)
$$

en series de Taylor alrededor de

$$
x.
$$

Luego se escogen coeficientes lineales para:

- hacer sobrevivir el termino de derivada deseado;
- cancelar tantos terminos de orden bajo como sea posible.

Este proceso produce un sistema lineal para los pesos.

## Derivacion de la formula centrada de 5 puntos

Escribimos:

$$
f(x+h)=f+hf'+\frac{h^2}{2}f''+\frac{h^3}{6}f'''+\frac{h^4}{24}f^{(4)}+\frac{h^5}{120}f^{(5)}+\cdots
$$

$$
f(x-h)=f-hf'+\frac{h^2}{2}f''-\frac{h^3}{6}f'''+\frac{h^4}{24}f^{(4)}-\frac{h^5}{120}f^{(5)}+\cdots
$$

$$
f(x+2h)=f+2hf'+2h^2f''+\frac{4}{3}h^3f'''+\frac{2}{3}h^4f^{(4)}+\frac{4}{15}h^5f^{(5)}+\cdots
$$

$$
f(x-2h)=f-2hf'+2h^2f''-\frac{4}{3}h^3f'''+\frac{2}{3}h^4f^{(4)}-\frac{4}{15}h^5f^{(5)}+\cdots
$$

Combinando como

$$
f(x-2h)-8f(x-h)+8f(x+h)-f(x+2h),
$$

los terminos constantes, cuadraticos y cubicos adecuados se cancelan, y queda

$$
12hf'(x)+O(h^5).
$$

Dividir entre

$$
12h
$$

produce la formula.

## Ejemplo 1

Sea

$$
f(x)=\sin x
$$

y queramos aproximar

$$
f'(0)=1.
$$

Con

$$
h=0.1,
$$

la formula centrada de 3 puntos da

$$
\frac{\sin(0.1)-\sin(-0.1)}{0.2}
=
\frac{2\sin(0.1)}{0.2}
\approx 0.998334.
$$

La formula centrada de 5 puntos da

$$
\frac{\sin(-0.2)-8\sin(-0.1)+8\sin(0.1)-\sin(0.2)}{1.2}
\approx 0.9999967.
$$

La mejora es coherente con el paso de orden

$$
2
$$

a orden

$$
4.
$$

## Ejemplo 2

Para

$$
f(x)=e^x,
$$

la derivada segunda en

$$
x=0
$$

vale

$$
1.
$$

Con

$$
h=0.1,
$$

la formula de 3 puntos produce

$$
\frac{e^{0.1}-2+e^{-0.1}}{0.01}\approx 1.000834.
$$

La formula de 5 puntos mejora sensiblemente ese resultado.

## Formulas unilaterales de 5 puntos

Tambien existen reglas de 5 puntos hacia adelante y hacia atras, utiles cerca de fronteras de dominio, por ejemplo:

$$
f'(x)\approx
\frac{-25f(x)+48f(x+h)-36f(x+2h)+16f(x+3h)-3f(x+4h)}{12h}.
$$

Estas formulas alcanzan orden

$$
4,
$$

pero suelen ser mas sensibles al ruido que las centradas.

## Eleccion de la formula

### Si el punto es interior

Conviene usar formulas centradas.

### Si el punto esta cerca del borde

Se requieren formulas unilaterales.

### Si los datos son ruidosos

No siempre conviene aumentar el numero de puntos, porque las combinaciones lineales de gran amplitud pueden amplificar ruido.

## Error total

Las formulas de orden alto reducen truncamiento, pero no eliminan el problema de redondeo y cancelacion. En precision finita:

- orden alto permite usar

$$
h
$$

algo mayor para un mismo truncamiento;
- coeficientes grandes pueden aumentar la sensibilidad al error de datos.

## Relacion con diferencias finitas para EDP

Las formulas para

$$
f''
$$

son el nucleo de discretizaciones de operadores como el laplaciano. Por eso estas reglas no son un tema aislado, sino la base algebraica de una gran parte del analisis numerico de ecuaciones diferenciales parciales.

## Comentario estructural

Las formulas de 3 y 5 puntos muestran una idea recurrente:

mas nodos permiten imponer mas cancelaciones y por tanto orden mas alto, pero a cambio crece la complejidad y la sensibilidad.

## Cierre

Las formulas de Newton-Cotes para diferenciacion condensan la esencia del analisis numerico local: interpolar, derivar, medir el error y escoger un compromiso razonable entre orden, estabilidad y disponibilidad de datos.
