---
title: Integrales por Newton-Cotes
description: Familia de reglas de cuadratura obtenidas por interpolacion polinomial, con formulas cerradas y abiertas, grado de exactitud y terminos de error.
---

# Integrales por Newton-Cotes

## Idea rectora

Las formulas de Newton-Cotes nacen de una idea simple y poderosa: si una funcion

$$
f
$$

es suficientemente regular en un intervalo

$$
[a,b],
$$

podemos reemplazarla por un polinomio interpolador y luego integrar ese polinomio exactamente.

La integral buscada

$$
\int_a^b f(x)\,dx
$$

se aproxima entonces por una combinacion lineal de valores de

$$
f
$$

en nodos prefijados.

Este procedimiento unifica:

- la regla del trapecio;
- la regla de Simpson;
- formulas de orden superior;
- versiones compuestas sobre particiones finas.

## Construccion general

Tomemos

$$
n+1
$$

nodos distintos

$$
x_0,\dots,x_n\in [a,b]
$$

y sea

$$
P_n
$$

el polinomio interpolador de Lagrange de grado a lo sumo

$$
n
$$

tal que

$$
P_n(x_i)=f(x_i).
$$

Entonces

$$
\int_a^b f(x)\,dx
\approx
\int_a^b P_n(x)\,dx
=
\sum_{i=0}^n w_i f(x_i),
$$

donde los pesos son

$$
w_i=\int_a^b \ell_i(x)\,dx
$$

y

$$
\ell_i
$$

son los polinomios basicos de Lagrange.

## Formulas cerradas y abiertas

### Newton-Cotes cerradas

Se usan nodos que incluyen los extremos:

$$
x_0=a,
\qquad
x_n=b.
$$

Aqui aparecen la regla del trapecio y la de Simpson como primeros ejemplos.

### Newton-Cotes abiertas

Se usan nodos interiores y no se evalua la funcion en los extremos.

Estas formulas son utiles cuando:

- la funcion es costosa o singular en los bordes;
- los extremos no son accesibles;
- se desea evitar evaluaciones donde el dato es menos fiable.

## Caso de nodos equiespaciados

La familia clasica de Newton-Cotes usa nodos equidistantes:

$$
x_i=a+ih,
\qquad
h=\frac{b-a}{n}.
$$

Con este esquema, los pesos dependen solo de

$$
n
$$

y de la longitud del intervalo.

## Grado de exactitud

Una formula de cuadratura

$$
Q(f)=\sum_{i=0}^n w_i f(x_i)
$$

tiene grado de exactitud

$$
m
$$

si integra exactamente todos los polinomios de grado menor o igual que

$$
m,
$$

pero falla para algun polinomio de grado

$$
m+1.
$$

Esta nocion es mas informativa que decir simplemente "usa un polinomio de grado

$$
n.
$$

".

## Regla del trapecio como Newton-Cotes cerrada de grado 1

Con

$$
n=1,
$$

los nodos son

$$
a,\ b.
$$

El interpolador lineal produce

$$
\int_a^b f(x)\,dx
\approx
\frac{b-a}{2}\bigl(f(a)+f(b)\bigr).
$$

Esta formula es exacta para polinomios de grado a lo sumo

$$
1.
$$

## Regla de Simpson como Newton-Cotes cerrada de grado 2

Con

$$
n=2,
$$

los nodos son

$$
a,\quad \frac{a+b}{2},\quad b.
$$

Se obtiene

$$
\int_a^b f(x)\,dx
\approx
\frac{b-a}{6}
\left[
f(a)+4f\left(\frac{a+b}{2}\right)+f(b)
\right].
$$

Aunque el interpolador es cuadratico, la formula resulta exacta para polinomios de grado hasta

$$
3,
$$

debido a una cancelacion adicional de simetria.

## Regla 3/8 de Simpson

Con

$$
n=3
$$

y nodos equiespaciados:

$$
x_0=a,\quad x_1=a+h,\quad x_2=a+2h,\quad x_3=b=a+3h,
$$

la formula cerrada correspondiente es

$$
\int_a^b f(x)\,dx
\approx
\frac{3h}{8}\bigl[f(x_0)+3f(x_1)+3f(x_2)+f(x_3)\bigr].
$$

Tambien tiene grado de exactitud

$$
3.
$$

## Formula de Boole

Con

$$
n=4
$$

se obtiene una formula cerrada de cinco puntos:

$$
\int_a^b f(x)\,dx
\approx
\frac{2h}{45}
\bigl[
7f(x_0)+32f(x_1)+12f(x_2)+32f(x_3)+7f(x_4)
\bigr].
$$

Su grado de exactitud es

$$
5.
$$

## Formula abierta de punto medio

La version abierta mas simple usa un nodo interior:

$$
\int_a^b f(x)\,dx
\approx
(b-a)\,f\left(\frac{a+b}{2}\right).
$$

Es exacta para polinomios de grado hasta

$$
1.
$$

### Ventaja conceptual

Evita evaluar en los extremos y puede funcionar mejor si

$$
f(a)
$$

o

$$
f(b)
$$

son problematicos.

## Error de cuadratura por interpolacion

Si

$$
f\in C^{n+1}([a,b]),
$$

entonces el error de interpolacion es

$$
f(x)-P_n(x)
=
\frac{f^{(n+1)}(\xi_x)}{(n+1)!}
\prod_{i=0}^n (x-x_i)
$$

para cierto

$$
\xi_x\in (a,b)
$$

dependiente de

$$
x.
$$

Integrando formalmente esta expresion se obtienen terminos de error para las reglas de cuadratura. El mensaje importante es que el error depende de dos factores:

- una derivada alta de

$$
f;
$$

- la geometria del producto nodal.

## Termino de error del trapecio

Si

$$
f\in C^2([a,b]),
$$

entonces existe

$$
\xi\in (a,b)
$$

tal que

$$
\int_a^b f(x)\,dx
-
\frac{b-a}{2}\bigl(f(a)+f(b)\bigr)
=
-\frac{(b-a)^3}{12}f''(\xi).
$$

De aqui se deduce la cota

$$
\lvert E_T\rvert
\le
\frac{(b-a)^3}{12}\max_{x\in[a,b]}\lvert f''(x)\rvert.
$$

## Termino de error de Simpson

Si

$$
f\in C^4([a,b]),
$$

entonces existe

$$
\xi\in (a,b)
$$

tal que

$$
\int_a^b f(x)\,dx
-
\frac{b-a}{6}
\left[
f(a)+4f\left(\frac{a+b}{2}\right)+f(b)
\right]
=
-\frac{(b-a)^5}{2880}f^{(4)}(\xi).
$$

Esta formula explica por que Simpson suele ser mucho mas preciso que trapecio para funciones suaves.

## Exactitud no significa superioridad universal

Puede parecer que basta aumentar el grado del polinomio interpolador para obtener formulas cada vez mejores. Esa intuicion es peligrosa.

### Problema 1: pesos alternantes

Para formulas de Newton-Cotes de orden alto, algunos pesos se vuelven grandes y alternantes. Eso amplifica errores de redondeo y ruido en los datos.

### Problema 2: oscilacion del interpolador

Con nodos equiespaciados, la interpolacion polinomial global puede deteriorarse para grados altos, un fenomeno relacionado con Runge.

### Conclusion

En la practica, se prefieren:

- formulas de bajo orden aplicadas de manera compuesta;
- cuadraturas gaussianas cuando se busca mayor exactitud con pocos nodos.

## Reglas compuestas

La idea de composicion consiste en particionar

$$
[a,b]
$$

en subintervalos y aplicar en cada uno una formula elemental.

### Ventaja estructural

Se evita construir un interpolador global de alto grado y se aprovecha que en subintervalos pequenos la funcion se aproxima mejor por polinomios de bajo grado.

## Trapecio compuesto

Si

$$
a=x_0<x_1<\cdots <x_n=b
$$

con paso uniforme

$$
h=\frac{b-a}{n},
$$

la regla del trapecio compuesta es

$$
\int_a^b f(x)\,dx
\approx
h\left[
\frac12 f(x_0)
+\sum_{j=1}^{n-1}f(x_j)
+\frac12 f(x_n)
\right].
$$

Si

$$
f\in C^2([a,b]),
$$

su error global es de orden

$$
h^2.
$$

## Simpson compuesta

Si

$$
n
$$

es par y

$$
h=\frac{b-a}{n},
$$

la regla de Simpson compuesta toma la forma

$$
\int_a^b f(x)\,dx
\approx
\frac{h}{3}
\left[
f(x_0)
+4\sum_{\substack{j=1\\ j\ \text{impar}}}^{n-1} f(x_j)
+2\sum_{\substack{j=2\\ j\ \text{par}}}^{n-2} f(x_j)
+f(x_n)
\right].
$$

Su error global es de orden

$$
h^4
$$

cuando

$$
f\in C^4([a,b]).
$$

## Ejemplo 1: integracion exacta de un polinomio

Sea

$$
f(x)=x^3-2x+1
$$

en

$$
[0,2].
$$

La integral exacta es

$$
\int_0^2 (x^3-2x+1)\,dx
=
\left[\frac{x^4}{4}-x^2+x\right]_0^2
=4-4+2=2.
$$

La regla de Simpson en un solo panel da

$$
\frac{2}{6}\left[f(0)+4f(1)+f(2)\right]
=
\frac13(1+4\cdot 0+5)=2.
$$

La exactitud es exacta porque la formula integra cubicos sin error.

## Ejemplo 2: comparacion entre trapecio y Simpson

Integramos

$$
f(x)=e^x
$$

en

$$
[0,1].
$$

La integral exacta es

$$
e-1.
$$

### Trapecio simple

$$
T=\frac12(1+e).
$$

### Simpson simple

$$
S=\frac16\left(1+4e^{1/2}+e\right).
$$

Como

$$
e^x
$$

tiene derivadas de todo orden y es muy suave, Simpson aprovecha esa regularidad mejor que trapecio y produce una aproximacion mucho mas precisa con el mismo numero de extremos y un punto medio adicional.

## Formula general y pesos

En nodos equiespaciados se puede escribir la formula cerrada general como

$$
\int_a^b f(x)\,dx
\approx
h\sum_{i=0}^n \lambda_i f(x_i),
$$

donde los coeficientes

$$
\lambda_i
$$

dependen solo de

$$
n.
$$

Calcular estos pesos equivale a integrar los polinomios basicos de Lagrange. Esta construccion es teoricamente elegante, pero su uso directo para

$$
n
$$

grande es numericamente poco aconsejable.

## Relacion con cuadratura de Gauss

Newton-Cotes fija primero los nodos y luego determina los pesos. La cuadratura de Gauss hace lo contrario: elige nodos y pesos de modo optimo para maximizar el grado de exactitud con el mismo numero de evaluaciones.

### Consecuencia

Con pocos nodos, Gauss suele dominar en precision a Newton-Cotes. Sin embargo, Newton-Cotes conserva ventajas pedagogicas y practicas:

- es facil de derivar;
- se adapta bien a mallas uniformes;
- produce reglas compuestas muy naturales;
- conecta directamente con interpolacion polinomial.

## Cuando usar Newton-Cotes

Se recomienda cuando:

- la funcion se muestrea naturalmente en una malla uniforme;
- interesa una formula simple y reproducible;
- se trabaja con datos tabulados;
- se necesita una regla compuesta de implementacion inmediata.

No es la mejor opcion cuando:

- la funcion es altamente oscilatoria;
- se requiere alta precision con muy pocas evaluaciones;
- los extremos son singulares;
- el orden alto global provoca inestabilidad numerica.

## Comentario sobre datos experimentales

Si la funcion no se conoce analiticamente sino mediante mediciones en nodos fijos, Newton-Cotes tiene una justificacion adicional: la informacion disponible ya esta tabulada en una malla y la cuadratura debe operar sobre esa estructura discreta.

En ese contexto, reglas compuestas de trapecio o Simpson suelen ser mas naturales que cuadraturas optimas que requeririan datos en nodos distintos.

## Resumen conceptual

La familia Newton-Cotes organiza una parte esencial del calculo integral numerico:

- interpolar;
- integrar el interpolador;
- estimar el error con derivadas altas;
- preferir orden bajo compuesto frente a orden global alto.

## Cierre

Newton-Cotes es importante no solo por las formulas concretas que produce, sino porque muestra una filosofia general del analisis numerico: aproximar primero el objeto continuo por uno algebraicamente controlable y luego explotar la estructura exacta del sustituto. Entender bien esta familia prepara el terreno para Simpson compuesta, cuadratura adaptativa y cuadraturas gaussianas.
