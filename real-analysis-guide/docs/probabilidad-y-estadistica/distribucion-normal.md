---
title: Distribucion normal
description: Densidad gaussiana, estandarizacion, propiedades estructurales, sumas de normales y papel central en probabilidad y estadistica.
---

# Distribucion normal

## Por que la normal ocupa un lugar privilegiado

La distribucion normal no es solo una campana famosa. Su importancia viene de varias fuentes profundas:

- modela errores de medicion en muchos contextos;
- aparece como limite de sumas de variables independientes;
- es estable bajo transformaciones lineales;
- gobierna gran parte de la inferencia clasica;
- sirve de bloque basico en estadistica multivariante y procesos estocasticos.

Su centralidad no depende de una sola formula, sino de una red de propiedades estructurales.

## Definicion

Decimos que

$$
X\sim N(\mu,\sigma^2)
$$

si $X$ tiene densidad

$$
f_X(x)=\frac{1}{\sigma\sqrt{2\pi}}
\exp\left(
-\frac{(x-\mu)^2}{2\sigma^2}
\right),
\qquad x\in\mathbb{R},
$$

donde

$$
\mu\in\mathbb{R},
\qquad
\sigma^2>0.
$$

## Significado de los parametros

- $\mu$ desplaza el centro de la campana;
- $\sigma$ controla la escala;
- $\sigma^2$ es la varianza.

Cambiar $\mu$ traslada la densidad sin deformarla. Cambiar $\sigma$ la ensancha o comprime.

## Normal estandar

El caso

$$
N(0,1)
$$

se llama normal estandar.

Su densidad es

$$
\varphi(x)=\frac{1}{\sqrt{2\pi}}e^{-x^2/2},
$$

y su funcion de distribucion se denota por

$$
\Phi(x)=\int_{-\infty}^x \varphi(t)\,dt.
$$

### Comentario

La funcion $\Phi$ no tiene expresion elemental cerrada. Por eso las probabilidades normales se calculan numericamente o mediante tablas.

## Estandarizacion

### Teorema 1

Si

$$
X\sim N(\mu,\sigma^2),
$$

entonces

$$
Z=\frac{X-\mu}{\sigma}\sim N(0,1).
$$

### Consecuencia

Toda probabilidad normal puede reducirse a la normal estandar:

$$
P(X\le x)=\Phi\left(\frac{x-\mu}{\sigma}\right).
$$

### Comentario

La estandarizacion es el paso que unifica toda la familia normal.

## Media y varianza

### Teorema 2

Si

$$
X\sim N(\mu,\sigma^2),
$$

entonces

$$
E[X]=\mu,
\qquad
\operatorname{Var}(X)=\sigma^2.
$$

La propia parametrizacion de la familia esta elegida para reflejar estos dos momentos.

## Simetria

La densidad es simetrica respecto de $\mu$:

$$
f(\mu+t)=f(\mu-t).
$$

### Consecuencias

- media = mediana = moda = $\mu$;
- la mitad de la masa queda a cada lado del centro;
- todos los momentos impares centrados son cero.

## Ejemplo 1: probabilidad puntual de intervalo

Si

$$
X\sim N(10,4),
$$

entonces

$$
\mu=10,
\qquad
\sigma=2.
$$

La probabilidad

$$
P(X\le 13)
$$

se reduce a

$$
P\left(
Z\le \frac{13-10}{2}
\right)
=
\Phi(1.5).
$$

## Regla empirica 68-95-99.7

Para la normal vale aproximadamente:

- $68\%$ dentro de

$$
\mu\pm \sigma;
$$

- $95\%$ dentro de

$$
\mu\pm 2\sigma;
$$

- $99.7\%$ dentro de

$$
\mu\pm 3\sigma.
$$

### Advertencia

Esta regla es especifica de la normal. No debe extrapolarse a distribuciones arbitrarias.

## Transformaciones lineales

### Teorema 3

Si

$$
X\sim N(\mu,\sigma^2)
$$

y

$$
Y=aX+b
$$

con

$$
a\ne 0,
$$

entonces

$$
Y\sim N(a\mu+b,a^2\sigma^2).
$$

### Comentario

La familia normal es estable bajo transformaciones lineales. Esta propiedad explica su enorme utilidad.

## Sumas de normales independientes

### Teorema 4

Si

$$
X\sim N(\mu_1,\sigma_1^2),
\qquad
Y\sim N(\mu_2,\sigma_2^2)
$$

son independientes, entonces

$$
X+Y\sim N(\mu_1+\mu_2,\sigma_1^2+\sigma_2^2).
$$

### Comentario

La estabilidad por suma es una de las razones profundas del papel central de la normal. Muchas cantidades agregadas terminan aproximandose o perteneciendo exactamente a esta familia.

## Ejemplo 2: suma de errores

Si

$$
E_1\sim N(0,1),
\qquad
E_2\sim N(0,4)
$$

son independientes, entonces

$$
E_1+E_2\sim N(0,5).
$$

La media total sigue siendo cero y las varianzas se suman.

## Funcion generadora de momentos

La funcion generadora de momentos de

$$
X\sim N(\mu,\sigma^2)
$$

es

$$
M_X(t)=E[e^{tX}]
=
\exp\left(\mu t+\frac{\sigma^2t^2}{2}\right).
$$

### Comentario

Esta expresion permite recuperar momentos y demostrar estabilidad por suma de independientes, ya que la generadora de la suma es el producto de las generadoras.

## Funcion caracteristica

La funcion caracteristica de

$$
X\sim N(\mu,\sigma^2)
$$

es

$$
\varphi_X(t)=E[e^{itX}]
=
\exp\left(i\mu t-\frac{\sigma^2t^2}{2}\right).
$$

### Por que conviene verla

A diferencia de la funcion generadora de momentos, la funcion caracteristica siempre existe para toda variable aleatoria real. En el caso gaussiano conserva la misma estructura cuadratica del exponente.

### Lectura

La normal queda caracterizada por una funcion caracteristica cuyo logaritmo es un polinomio cuadratico. Esa es otra forma de ver por que la suma de gaussianas vuelve a ser gaussiana: al multiplicar funciones caracteristicas, los terminos cuadraticos simplemente se suman.

## Cuadrados gaussianos y distribucion ji-cuadrada

Si

$$
Z\sim N(0,1),
$$

entonces

$$
Z^2
$$

tiene distribucion

$$
\chi^2_1.
$$

Mas generalmente, si

$$
Z_1,\dots,Z_k
$$

son normales estandar independientes, entonces

$$
Z_1^2+\cdots+Z_k^2\sim \chi^2_k.
$$

### Por que esto importa

La inferencia clasica no usa solo la campana gaussiana aislada. Se apoya en toda una constelacion de distribuciones derivadas de la normal:

- la

$$
\chi^2
$$

aparece al estudiar varianzas;
- la

$$
t
$$

aparece al dividir una normal entre la raiz de una

$$
\chi^2
$$

independiente normalizada;
- la

$$
F
$$

aparece al comparar dos

$$
\chi^2
$$

independientes.

### Lectura estructural

La familia normal es central no solo por su densidad, sino porque genera gran parte del aparato exacto de inferencia al combinarse con operaciones cuadraticas.

## La normal y el teorema central del limite

El teorema central del limite explica que, bajo hipotesis amplias, las sumas o medias de variables independientes se aproximan a una normal despues de centrar y escalar.

### Forma clasica

Si

$$
X_1,\dots,X_n
$$

son i.i.d. con media $\mu$ y varianza $\sigma^2<\infty$, entonces

$$
\frac{\bar X_n-\mu}{\sigma/\sqrt n}
\Longrightarrow
N(0,1).
$$

### Comentario

La ley de los grandes numeros dice hacia donde converge la media. El TCL dice como fluctua alrededor de ese valor. La normal aparece precisamente como ese patron universal de fluctuacion.

## Densidad y forma de la campana

La normal es:

- unimodal;
- simetrica;
- con colas que decaen exponencialmente en el cuadrado;
- enteramente determinada por sus dos primeros momentos.

### Consecuencia

Muchos procedimientos estadisticos se simplifican enormemente bajo gaussianidad.

## La normal como distribucion de maxima entropia

Entre todas las distribuciones reales con media y varianza fijadas, la normal es la que maximiza la entropia diferencial.

### Lectura

Esto le da a la gaussiana una interpretacion variacional profunda: con solo esas dos restricciones, es la ley menos informativa o mas dispersa compatible con ellas.

### Moral

La normal no es central solo por comodidad algebraica. Tambien aparece como solucion de un problema extremo natural, lo que ayuda a explicar su universalidad en estadistica, fisica estadistica e informacion.

## Cuantiles y tablas

Los cuantiles de la normal estandar se usan constantemente:

- $z_{0.05}\approx 1.645$;
- $z_{0.025}\approx 1.96$;
- $z_{0.005}\approx 2.576$.

Se interpretan mediante

$$
P(Z>z_\alpha)=\alpha.
$$

## Normal y errores de medicion

Uno de los contextos historicos de la normal es el modelado de errores pequenos e independientes que se suman. Incluso cuando esa justificacion no es literalmente exacta, la distribucion resultante suele aproximarse bien por la campana gaussiana.

## Normal y estadistica inferencial

La normal aparece en:

- pruebas z;
- intervalos de confianza para medias con varianza conocida;
- aproximaciones para proporciones;
- distribuciones asintoticas de estimadores;
- modelos lineales gaussianos.

Por eso comprender esta pagina no es memorizar una densidad, sino aprender la geometria de gran parte de la inferencia clasica.

## Cola y valores extremos

Las probabilidades de cola normal se calculan via

$$
1-\Phi(z).
$$

Estas colas son bastante ligeras comparadas con distribuciones de colas pesadas. Por eso, en datos con outliers frecuentes, el modelo normal puede ser demasiado optimista.

## Colas gaussianas y cota de Mills

Para

$$
z>0,
$$

la cola superior normal satisface estimaciones clasicas del tipo

$$
\frac{z}{1+z^2}\,\phi(z)
\le
1-\Phi(z)
\le
\frac{\phi(z)}{z},
$$

donde

$$
\phi(z)=\frac{1}{\sqrt{2\pi}}e^{-z^2/2}
$$

es la densidad normal estandar.

### Lectura

Estas desigualdades muestran que la cola gaussiana decae esencialmente como

$$
\frac{e^{-z^2/2}}{z}.
$$

No basta mirar el termino exponencial: el factor

$$
1/z
$$

tambien cuenta cuando se quieren estimaciones finas.

### Por que conviene saberlo

Las cotas de cola aparecen en:

- niveles de alarma y falsos positivos;
- comparaciones entre distribuciones subgaussianas y de colas pesadas;
- estimaciones de maxima de muchas variables.

### Moral

La campana normal no solo es simetrica y suave. Tambien tiene colas cuantificablemente ligeras, y esa ligereza es parte de su valor teorico.

## Error comun 1: tomar forma de campana como prueba de normalidad

Un histograma con forma aproximadamente acampanada no demuestra normalidad exacta. Muchas distribuciones pueden parecer campanas con muestras finitas.

## Error comun 2: olvidar que la normal es continua

Para una variable normal,

$$
P(X=a)=0
$$

para todo numero real $a$. Las probabilidades se asignan a intervalos, no a puntos.

## Error comun 3: usar la regla 68-95-99.7 fuera de contexto

Esa regla es una propiedad aproximada de la normal, no una ley universal sobre datos.

## Practica guiada

### Ejercicio 1

Si

$$
X\sim N(5,9),
$$

escribe

$$
P(X\le 8)
$$

en terminos de $\Phi$.

#### Solucion

Aqui

$$
\sigma=3.
$$

Entonces

$$
P(X\le 8)=\Phi\left(\frac{8-5}{3}\right)=\Phi(1).
$$

### Ejercicio 2

Si

$$
X\sim N(2,1),
\qquad
Y\sim N(3,4)
$$

son independientes, cual es la ley de

$$
X+Y?
$$

#### Solucion

$$
X+Y\sim N(5,5).
$$

### Ejercicio 3

Por que la normal es tan importante en estadistica aunque muchos fenomenos no sean exactamente gaussianos?

#### Solucion

Porque aparece como aproximacion universal de sumas y promedios por el teorema central del limite, y porque es algebraicamente muy estable bajo operaciones lineales.

## Cierre

La distribucion normal es el modelo central de la probabilidad clasica no por tradicion, sino por estructura. Es una familia:

- estable;
- simetrica;
- computacionalmente manejable;
- y asintoticamente universal en muchos contextos.

Por eso dominarla es indispensable para entender la arquitectura de la estadistica matematica y no solo sus tablas.
