---
title: Moda y mediana
description: Medidas de tendencia central, caracterizacion mediante funcion de distribucion y calculo en modelos discretos y continuos.
---

# Moda y mediana

## Motivacion

La media no es la unica forma de describir un centro. En distribuciones asimetricas, multimodales o con colas pesadas, otras nociones resultan igual de importantes:

- la **moda**, que localiza la zona mas probable o mas densa;
- la **mediana**, que divide la distribucion en dos mitades probabilisticas.

Estas medidas de tendencia central responden a preguntas distintas y no deben confundirse.

## Moda

### Caso discreto

Si

$$
X
$$

es discreta con funcion de masa

$$
p_X,
$$

un valor

$$
m
$$

es una **moda** si

$$
p_X(m)\ge p_X(x)
$$

para todo

$$
x
$$

del soporte.

### Caso continuo

Si

$$
X
$$

tiene densidad

$$
f_X,
$$

una moda es un punto donde la densidad alcanza un maximo global o local dominante, segun el contexto.

### Comentario

Puede haber:

- una unica moda;
- varias modas;
- ninguna moda bien definida si la densidad no alcanza maximo.

## Mediana

Un numero

$$
m
$$

es una **mediana** de

$$
X
$$

si satisface

$$
P(X\le m)\ge \frac12
$$

y

$$
P(X\ge m)\ge \frac12.
$$

### Caracterizacion mediante la funcion de distribucion

Equivalentemente,

$$
m
$$

es mediana si

$$
F_X(m)\ge \frac12
$$

y

$$
F_X(m^-)\le \frac12.
$$

## Existencia de la mediana

Toda variable aleatoria real posee al menos una mediana. Esto se deduce de las propiedades generales de la funcion de distribucion.

### Comentario

La mediana no tiene por que ser unica. En distribuciones con tramos planos o saltos grandes puede haber un intervalo entero de medianas.

## El conjunto de medianas es un intervalo

La no unicidad de la mediana no es caotica. Tiene una estructura muy precisa.

### Proposicion 1

Sea

$$
M=\left\{m\in \mathbb{R}:\ F_X(m)\ge \frac12,\ F_X(m^-)\le \frac12\right\}.
$$

Entonces

$$
M
$$

es un intervalo cerrado, posiblemente degenerado en un punto.

### Demostracion

Si

$$
m_1<m_2
$$

son medianas y

$$
m_1\le m\le m_2,
$$

por monotonia de la funcion de distribucion tenemos

$$
F_X(m)\ge F_X(m_1)\ge \frac12.
$$

Ademas, como los limites por la izquierda tambien son crecientes,

$$
F_X(m^-)\le F_X(m_2^-)\le \frac12.
$$

Luego

$$
m
$$

tambien es mediana. Esto prueba que

$$
M
$$

es un intervalo. La cerradura se deduce de la continuidad por la derecha de

$$
F_X
$$

y del comportamiento monotono de

$$
F_X(\cdot^-).
$$

### Cuantiles inferior y superior

Dos numeros especialmente utiles son

$$
m_-=\inf\{x:\ F_X(x)\ge 1/2\},
$$

$$
m_+=\sup\{x:\ F_X(x^-)\le 1/2\}.
$$

Entonces el conjunto de medianas es precisamente

$$
[m_-,m_+].
$$

En particular:

- hay mediana unica si y solo si

$$
m_-=m_+;
$$

- toda distribucion con funcion de distribucion estrictamente creciente alrededor de

$$
1/2
$$

tiene mediana unica.

## Mediana como cuantil de orden uno medio

La mediana no es mas que el cuantil

$$
1/2.
$$

Si definimos para

$$
0<q<1
$$

el cuantil inferior

$$
Q_X(q)=\inf\{x:\ F_X(x)\ge q\},
$$

entonces

$$
Q_X(1/2)
$$

es una mediana. Esta observacion conecta la teoria de la mediana con toda la teoria de cuantiles.

### Lectura

Pensar la mediana como un cuantil ayuda a evitar una confusion frecuente: no es "el punto medio del soporte", sino el nivel donde la masa acumulada cruza

$$
1/2.
$$

## Ejemplo 1: dado justo

Sea

$$
X
$$

el resultado de un dado equilibrado.

La masa es uniforme sobre

$$
\{1,2,3,4,5,6\}.
$$

### Moda

Todos los valores tienen la misma masa, luego todos son modas si se acepta la definicion no estricta. En la practica se dice que la distribucion es uniforme y no tiene una moda unica informativa.

### Mediana

La funcion de distribucion alcanza

$$
\frac12
$$

al pasar entre

$$
3
$$

y

$$
4.
$$

En este caso ambos valores pueden considerarse medianas en la formulacion discreta, y cualquier punto del intervalo

$$
[3,4]
$$

cumple la condicion probabilistica general.

## Ejemplo 2: Bernoulli

Si

$$
P(X=1)=p,\qquad P(X=0)=1-p,
$$

entonces:

- la moda es

$$
0
$$

si

$$
p<\frac12,
$$

y

$$
1
$$

si

$$
p>\frac12;
$$

- si

$$
p=\frac12,
$$

ambos valores son modas;

- la mediana depende tambien del valor de

$$
p.
$$

Por ejemplo, si

$$
p\ge \frac12,
$$

el valor

$$
1
$$

es una mediana.

## Mediana y minimizacion del error absoluto

La media minimiza el error cuadratico medio. La mediana, en cambio, minimiza el error absoluto esperado.

### Teorema 1

Un punto

$$
m
$$

es mediana de

$$
X
$$

si y solo si minimiza la funcion

$$
c\mapsto E[|X-c|].
$$

### Comentario

Esta propiedad explica por que la mediana es mas robusta frente a outliers que la media.

## Moda, media y mediana en distribuciones simetricas

Si una distribucion es simetrica alrededor de un punto

$$
c
$$

y tiene buena regularidad, entonces con frecuencia:

- la media vale

$$
c;
$$

- la mediana vale

$$
c;
$$

- la moda tambien vale

$$
c
$$

si la densidad es unimodal y el maximo esta en el centro.

### Ejemplo 3

La distribucion normal

$$
N(\mu,\sigma^2)
$$

tiene

$$
\text{media}=\text{mediana}=\text{moda}=\mu.
$$

## Distribuciones asimetricas

Cuando la distribucion tiene cola larga hacia la derecha, suele ocurrir

$$
\text{moda}<\text{mediana}<\text{media}.
$$

Cuando la cola es hacia la izquierda, el orden suele invertirse.

### Comentario

Este patron es solo heuristico, no un teorema universal.

## Ejemplo 4: exponencial

Si

$$
X
$$

tiene densidad

$$
f(x)=\lambda e^{-\lambda x},\qquad x\ge 0,
$$

entonces:

- la moda es

$$
0,
$$

porque la densidad decrece desde el origen;

- la media es

$$
\frac{1}{\lambda};
$$

- la mediana satisface

$$
1-e^{-\lambda m}=\frac12,
$$

por lo que

$$
m=\frac{\ln 2}{\lambda}.
$$

Asi se verifica:

$$
0<\frac{\ln 2}{\lambda}<\frac{1}{\lambda}.
$$

## Moda, media y mediana con integrales {#moda-media-y-mediana-con-integrales}

En el caso continuo, muchas veces se calculan estas cantidades por integracion y derivacion.

### 1. Media

Si

$$
X
$$

tiene densidad

$$
f,
$$

la media es

$$
E[X]=\int_{-\infty}^{\infty} x f(x)\,dx.
$$

### 2. Mediana

Una mediana

$$
m
$$

se obtiene resolviendo

$$
\int_{-\infty}^{m} f(x)\,dx=\frac12
$$

cuando la funcion de distribucion es continua y estrictamente creciente.

### 3. Moda

Una moda se obtiene maximizando

$$
f(x),
$$

lo que suele implicar resolver

$$
f'(x)=0
$$

y verificar maxima.

## Ejemplo 5: uniforme en $[0,1]$

Sea

$$
X\sim U[0,1].
$$

Entonces:

- la media es

$$
\int_0^1 x\,dx=\frac12;
$$

- cualquier

$$
m\in [0,1]
$$

con

$$
F(m)=m=\frac12
$$

da la mediana unica

$$
m=\frac12;
$$

- la densidad es constante, de modo que no hay moda unica informativa.

## Ejemplo 6: densidad triangular creciente

Sea

$$
f(x)=2x,\qquad 0\le x\le 1.
$$

Entonces:

### Media

$$
E[X]=\int_0^1 x(2x)\,dx=2\int_0^1 x^2\,dx=\frac23.
$$

### Mediana

La funcion de distribucion es

$$
F(x)=x^2,\qquad 0\le x\le 1.
$$

La mediana satisface

$$
x^2=\frac12,
$$

luego

$$
m=\frac{1}{\sqrt{2}}.
$$

### Moda

La densidad alcanza su maximo en

$$
x=1.
$$

Asi:

$$
\text{moda}=1,\qquad \text{mediana}=\frac{1}{\sqrt{2}},\qquad \text{media}=\frac23.
$$

Esto muestra una distribucion sesgada hacia la derecha en sentido de masa acumulada alta cerca de valores grandes.

## Robustez de la mediana

La mediana es menos sensible que la media a valores extremos.

### Ejemplo 7

Los datos

$$
1,2,2,3,100
$$

tienen:

- media:

$$
21.6;
$$

- mediana:

$$
2.
$$

La mediana refleja mucho mejor el centro tipico de la muestra.

## Invariancia monotona de la mediana

Una propiedad estructural importante es que la mediana se comporta bien bajo transformaciones crecientes.

### Proposicion 2

Sea

$$
g:\mathbb{R}\to \mathbb{R}
$$

una funcion creciente. Si

$$
m
$$

es mediana de

$$
X,
$$

entonces

$$
g(m)
$$

es mediana de

$$
g(X).
$$

### Justificacion

Como

$$
g
$$

es creciente,

$$
\{g(X)\le g(m)\}\supseteq \{X\le m\},
$$

y

$$
\{g(X)\ge g(m)\}\supseteq \{X\ge m\}.
$$

Por tanto,

$$
P(g(X)\le g(m))\ge P(X\le m)\ge \frac12
$$

y

$$
P(g(X)\ge g(m))\ge P(X\ge m)\ge \frac12.
$$

Luego

$$
g(m)
$$

es mediana de

$$
g(X).
$$

### Consecuencia afina

Si

$$
Y=aX+b
$$

con

$$
a>0,
$$

entonces una mediana de

$$
Y
$$

es

$$
am+b.
$$

Esto muestra que la mediana es una estadistica **equivariante por cambios de escala y traslacion**.

## Punto de ruptura de la mediana muestral

En muestras finitas ordenadas

$$
x_{(1)}\le \cdots \le x_{(n)},
$$

la mediana necesita contaminar una fraccion mucho mayor de datos que la media para ser arrastrada arbitrariamente.

### Idea

Mientras menos de la mitad de las observaciones cambien de forma extrema, siempre queda un bloque central de datos no contaminados que sigue fijando la posicion de la mediana. En cambio, un solo outlier puede mover mucho a la media.

### Lectura estadistica

Por eso se dice que la mediana tiene punto de ruptura cercano a

$$
1/2,
$$

mientras que la media tiene punto de ruptura

$$
0.
$$

Esta es una de las razones mas profundas por las que la mediana es una herramienta central en estadistica robusta.

## Moda y maxima densidad local

La moda no mide equilibrio global ni mitad de probabilidad, sino concentracion local. En distribuciones multimodales puede haber varias zonas preferentes de alta densidad.

### Ejemplo 8

Una mezcla de dos gaussianas separadas puede tener dos modas, aunque la media quede en una zona de baja densidad. Este ejemplo muestra que media, mediana y moda responden a nociones diferentes de "centro".

## Comentario estructural

Las tres medidas se ordenan segun que problema geometrico o estadistico resuelven:

- la media: centro cuadratico;
- la mediana: centro absoluto;
- la moda: pico de densidad o de masa.

No existe una nocion unica de centro que domine en todos los contextos.

## Errores frecuentes

- Identificar automaticamente media, mediana y moda.
- Suponer que la media siempre coincide con el valor mas probable.
- Buscar moda de una uniforme como si tuviera maximo puntual unico.
- Creer que la mediana siempre se obtiene por simple promedio de dos valores centrales, incluso fuera de muestras finitas ordenadas.

## Conclusion

Moda y mediana completan la imagen que la media deja incompleta. La mediana captura equilibrio probabilistico y robustez; la moda captura concentracion local. Juntas permiten leer la geometria estadistica de una distribucion mucho mejor que con una sola medida de tendencia central.
