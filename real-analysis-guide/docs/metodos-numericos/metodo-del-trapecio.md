---
title: Metodo del trapecio
description: Regla del trapecio, derivacion por interpolacion lineal, error, version compuesta y contexto Newton-Cotes.
---

# Metodo del trapecio

## Motivacion

La integracion numerica busca aproximar

$$
\int_a^b f(x)\,dx
$$

cuando:

- la primitiva de

$$
f
$$

no es conocida;
- la funcion solo se conoce en nodos;
- la evaluacion exacta es costosa.

La regla del trapecio es la version mas elemental de esta idea: reemplazar la funcion por una recta interpolante e integrar esa recta exactamente.

## Derivacion por interpolacion lineal

En el intervalo

$$
[a,b]
$$

interpolamos

$$
f
$$

mediante el polinomio lineal

$$
p_1(x)=f(a)\frac{x-b}{a-b}+f(b)\frac{x-a}{b-a}.
$$

Entonces aproximamos

$$
\int_a^b f(x)\,dx
\approx
\int_a^b p_1(x)\,dx.
$$

El calculo da

$$
\int_a^b p_1(x)\,dx
=
\frac{b-a}{2}[f(a)+f(b)].
$$

## Regla del trapecio

La aproximacion simple es

$$
\int_a^b f(x)\,dx
\approx
T(f)=\frac{b-a}{2}[f(a)+f(b)].
$$

## Interpretacion geometrica

El grafico de la recta que une

$$
(a,f(a))
$$

y

$$
(b,f(b))
$$

forma un trapecio con el eje

$$
x.
$$

La formula calcula exactamente el area de ese trapecio.

## Error local

### Teorema 1

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
-T(f)
=
-\frac{(b-a)^3}{12}f''(\xi).
$$

### Comentario

El signo del error queda gobernado por la convexidad:

- si

$$
f''>0,
$$

la regla del trapecio sobreestima o subestima segun la convencion exacta del resto; lo importante es que la curvatura domina el error;
- el tamano del error decrece cubicamente con la longitud del intervalo.

## Esquema de demostracion

La formula puede obtenerse:

- usando el resto del interpolante lineal;
- aplicando Taylor alrededor de uno de los extremos;
- integrando la expresion del error de interpolacion.

## Ejemplo 1

Aproximemos

$$
\int_0^1 e^x\,dx=e-1.
$$

La regla del trapecio da

$$
T(f)=\frac12(e^0+e^1)=\frac{1+e}{2}.
$$

Numericamente:

$$
T(f)\approx 1.85914.
$$

Mientras que

$$
e-1\approx 1.71828.
$$

El error no es pequeno porque usamos un solo intervalo sobre una funcion convexa y creciente.

## Regla del trapecio compuesta

Dividimos

$$
[a,b]
$$

en

$$
n
$$

subintervalos uniformes:

$$
x_i=a+ih,\qquad h=\frac{b-a}{n}.
$$

Aplicamos trapecio en cada subintervalo y sumamos.

### Formula

$$
T_n(f)
=
\frac{h}{2}
\left[
f(x_0)+2\sum_{i=1}^{n-1}f(x_i)+f(x_n)
\right].
$$

## Error global de la regla compuesta

### Teorema 2

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
\int_a^b f(x)\,dx-T_n(f)
=
-\frac{(b-a)}{12}h^2f''(\xi).
$$

### Consecuencia

El error global es de orden

$$
O(h^2).
$$

Esto explica por que subdividir el intervalo mejora la precision de manera decisiva.

## Ejemplo 2

Para

$$
f(x)=e^x
$$

en

$$
[0,1]
$$

con

$$
n=4,
$$

tenemos

$$
h=0.25.
$$

Entonces

$$
T_4(f)
=
\frac{0.25}{2}
\left[
e^0+2(e^{0.25}+e^{0.5}+e^{0.75})+e^1
\right].
$$

La aproximacion ya se acerca mucho mas al valor exacto que el trapecio simple.

## <a id="integrales-por-newton-cotes"></a> Integrales por Newton-Cotes

La regla del trapecio pertenece a la familia de Newton-Cotes cerradas: formulas obtenidas integrando el polinomio interpolante en nodos equiespaciados que incluyen los extremos.

### Ejemplos de esta familia

- trapecio:
  grado

$$
1;
$$

- Simpson:
  grado

$$
2;
$$

- formulas de orden superior:
  integran interpolantes de grado mayor.

## Propiedad de exactitud

La regla del trapecio es exacta para polinomios de grado a lo sumo

$$
1.
$$

Esto se verifica directamente porque integra exactamente toda recta, que es precisamente el espacio de aproximacion usado para derivarla.

## Relacion con sumas de Riemann

La regla del trapecio puede verse como un refinamiento de las sumas por extremos:

en vez de usar rectangulos, corrige linealmente la inclinacion entre valores consecutivos.

## Ventajas

- simplicidad;
- uso directo de datos tabulados;
- interpretacion geometrica clara;
- buen rendimiento para funciones suficientemente suaves y mallas finas.

## Limitaciones

- convergencia relativamente lenta frente a Simpson o Gauss;
- sensibilidad a curvatura grande si el mallado es grueso;
- puede exigir muchos subintervalos para alta precision.

## Comentario estructural

La regla del trapecio es mucho mas que una formula elemental: es el primer ejemplo limpio de una estrategia general de analisis numerico.

1. aproximar localmente;
2. operar exactamente sobre la aproximacion;
3. medir el error con derivadas superiores.

## Cierre

El metodo del trapecio inaugura el estudio serio de cuadraturas numericas: es sencillo, interpretable y ya contiene los elementos fundamentales que reaparecen en Simpson, Newton-Cotes y cuadratura de Gauss.
