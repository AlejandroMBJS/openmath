---
title: Cuadratura de Gauss
description: Cuadratura gaussiana, seleccion optima de nodos y pesos, uso en integrales y comparacion con Newton-Cotes.
---

# Cuadratura de Gauss

## Motivacion

Las formulas de Newton-Cotes fijan nodos equiespaciados y luego determinan pesos. La cuadratura de Gauss invierte la filosofia:

elige simultaneamente nodos y pesos para maximizar el grado de exactitud con un numero dado de evaluaciones.

## Problema general de cuadratura

Queremos aproximar

$$
\int_a^b f(x)\,dx
$$

mediante una suma ponderada

$$
Q_n(f)=\sum_{i=1}^n w_i f(x_i).
$$

Los datos a determinar son:

- nodos

$$
x_i;
$$

- pesos

$$
w_i.
$$

## Caso Gauss-Legendre en

$$
[-1,1]
$$

La cuadratura gaussiana clasica busca aproximar

$$
\int_{-1}^1 f(x)\,dx
$$

mediante

$$
Q_n(f)=\sum_{i=1}^n w_i f(x_i),
$$

eligiendo nodos y pesos de manera que la formula sea exacta para todos los polinomios de grado tan alto como sea posible.

## Teorema de optimalidad

### Teorema 1

Existe una formula de

$$
n
$$

puntos exacta para todo polinomio de grado a lo sumo

$$
2n-1.
$$

Sus nodos son las raices del polinomio de Legendre

$$
P_n.
$$

### Comentario

Este grado de exactitud es optimo: ninguna formula con

$$
n
$$

evaluaciones puede ser exacta para todos los polinomios de grado

$$
2n
$$

o mayor.

## Ejemplo: regla gaussiana de 2 puntos

Los nodos son

$$
x_1=-\frac{1}{\sqrt 3},
\qquad
x_2=\frac{1}{\sqrt 3},
$$

y los pesos valen

$$
w_1=w_2=1.
$$

La formula es

$$
\int_{-1}^1 f(x)\,dx
\approx
f\left(-\frac{1}{\sqrt 3}\right)
+
f\left(\frac{1}{\sqrt 3}\right).
$$

Es exacta para todos los polinomios de grado a lo sumo

$$
3.
$$

## Ejemplo: regla gaussiana de 3 puntos

Los nodos son

$$
x_1=-\sqrt{\frac35},
\qquad
x_2=0,
\qquad
x_3=\sqrt{\frac35},
$$

y los pesos son

$$
w_1=w_3=\frac59,
\qquad
w_2=\frac89.
$$

La formula es exacta para polinomios de grado a lo sumo

$$
5.
$$

## Cambio de intervalo

Para integrar en

$$
[a,b],
$$

hacemos el cambio lineal

$$
x=\frac{b-a}{2}t+\frac{a+b}{2},
$$

de modo que

$$
dx=\frac{b-a}{2}\,dt.
$$

Entonces

$$
\int_a^b f(x)\,dx
=
\frac{b-a}{2}
\int_{-1}^1
f\left(\frac{b-a}{2}t+\frac{a+b}{2}\right)\,dt.
$$

Aplicando Gauss-Legendre:

$$
\int_a^b f(x)\,dx
\approx
\frac{b-a}{2}
\sum_{i=1}^n
w_i
f\left(\frac{b-a}{2}x_i+\frac{a+b}{2}\right).
$$

## <a id="como-usar-la-cuadratura-gaussiana"></a> Como usar la cuadratura gaussiana

### Paso 1

Reducir la integral al intervalo

$$
[-1,1]
$$

mediante el cambio lineal si es necesario.

### Paso 2

Escoger el numero de puntos

$$
n
$$

segun la suavidad esperada y la precision deseada.

### Paso 3

Tomar los nodos y pesos tabulados de la regla de Gauss-Legendre correspondiente.

### Paso 4

Evaluar la funcion transformada en los nodos.

### Paso 5

Multiplicar por los pesos y por el factor

$$
\frac{b-a}{2}.
$$

## Ejemplo 1

Aproximemos

$$
\int_{-1}^1 e^x\,dx.
$$

Con Gauss de 2 puntos:

$$
Q_2(f)=e^{-1/\sqrt 3}+e^{1/\sqrt 3}.
$$

Esto ya produce una aproximacion muy precisa con solo dos evaluaciones.

## Error de Gauss

Para funciones suficientemente suaves, el error tiene una expresion que involucra la derivada

$$
2n
$$

esima. En particular, la cuadratura gaussiana es extraordinariamente eficiente cuando

$$
f
$$

es suave o analitica.

## <a id="newton-cotes-vs-cuadratura-de-gauss"></a> Newton-Cotes vs cuadratura de Gauss

### Newton-Cotes

- nodos fijados, usualmente equiespaciados;
- muy natural en datos tabulados;
- formulas compuestas faciles de implementar;
- puede volverse inestable en grados altos.

### Gauss

- nodos optimizados;
- mayor grado de exactitud por numero de evaluaciones;
- excelente para funciones suaves cuando se puede elegir libremente donde evaluar;
- menos natural si los datos ya vienen fijados en una malla.

### Conclusion comparativa

Si se puede seleccionar los puntos de evaluacion, Gauss suele dominar en eficiencia. Si los datos ya estan tabulados en nodos dados, Newton-Cotes compuesta es a menudo la opcion natural.

## Cuadraturas compuestas y adaptativas

La idea gaussiana tambien puede aplicarse por subintervalos o de forma adaptativa. En la practica, muchas bibliotecas numericas modernas usan variantes adaptativas basadas en Gauss o Gauss-Kronrod.

## Exactitud polinomial

La eficiencia de Gauss se entiende asi:

con

$$
n
$$

evaluaciones logra exactitud hasta grado

$$
2n-1,
$$

mientras que una Newton-Cotes cerrada de

$$
n
$$

nodos no alcanza en general ese nivel.

## Ejemplo 2

Para

$$
f(x)=x^5+x^2,
$$

la regla gaussiana de 3 puntos en

$$
[-1,1]
$$

es exacta, porque el integrando es un polinomio de grado

$$
5.
$$

## Limitaciones

La cuadratura gaussiana no es magica:

- si la funcion tiene singularidades, picos estrechos o baja regularidad, la precision puede deteriorarse;
- si el integrando es altamente oscilatorio, pueden requerirse metodos especializados;
- si solo tenemos datos tabulados, no podemos elegir libremente los nodos.

## Comentario estructural

Gauss ensena una leccion profunda: la distribucion de nodos puede ser mas importante que aumentar ciegamente su numero. La buena geometria de muestreo es parte esencial de la precision numerica.

## Cierre

La cuadratura de Gauss es uno de los logros mas elegantes del analisis numerico clasico: con pocas evaluaciones consigue una exactitud sorprendente porque los nodos no son arbitrarios, sino optimizados desde la estructura algebraica del problema.
