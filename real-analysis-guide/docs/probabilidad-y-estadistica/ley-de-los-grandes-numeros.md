---
title: Ley de los grandes numeros
description: Ley debil y ley fuerte, medias muestrales, convergencia en probabilidad y casi segura, e interpretacion frecuentista rigurosa.
---

# Ley de los grandes numeros

## La estabilizacion del promedio

La ley de los grandes numeros es una de las justificaciones matematicas mas importantes de toda la probabilidad. Expresa una idea intuitiva:

> si repetimos un experimento muchas veces bajo condiciones comparables, el promedio observado tiende a estabilizarse.

Pero la version matematica rigurosa de esa frase exige decidir varias cosas:

- que promedio estamos tomando;
- hacia que valor converge;
- en que sentido converge;
- bajo que hipotesis;
- y que tan fuerte es esa convergencia.

## La media muestral

Sean

$$
X_1,X_2,\dots
$$

variables aleatorias y definamos

$$
\bar X_n=\frac{X_1+\cdots+X_n}{n}.
$$

La ley de los grandes numeros pregunta cuando se cumple

$$
\bar X_n\to \mu
$$

para algun valor natural del problema, normalmente

$$
\mu=E[X_1].
$$

## Modos de convergencia

La frase "converge" en probabilidad tiene varios significados posibles.

### Convergencia en probabilidad

Decimos que

$$
\bar X_n\to \mu
$$

en probabilidad si para todo

$$
\varepsilon>0
$$

se cumple

$$
P(|\bar X_n-\mu|\ge \varepsilon)\to 0.
$$

### Convergencia casi segura

Decimos que

$$
\bar X_n\to \mu
$$

casi seguramente si

$$
P\left(\{\omega:\bar X_n(\omega)\to \mu\}\right)=1.
$$

### Comentario

La convergencia casi segura es mas fuerte que la convergencia en probabilidad. Asegura que, salvo en un conjunto de probabilidad cero, cada trayectoria individual converge.

## Ley debil de los grandes numeros

### Teorema 1: ley debil

Sean

$$
X_1,X_2,\dots
$$

variables aleatorias independientes e identicamente distribuidas con

$$
E[X_1]=\mu
$$

y

$$
\operatorname{Var}(X_1)=\sigma^2<\infty.
$$

Entonces

$$
\bar X_n\to \mu
$$

en probabilidad.

## Demostracion por Chebyshev

Primero,

$$
E[\bar X_n]=\mu
$$

por linealidad de la esperanza.

Ademas, por independencia,

$$
\operatorname{Var}(\bar X_n)
=
\operatorname{Var}\left(\frac{1}{n}\sum_{k=1}^n X_k\right)
=
\frac{1}{n^2}\sum_{k=1}^n \operatorname{Var}(X_k)
=
\frac{n\sigma^2}{n^2}
=
\frac{\sigma^2}{n}.
$$

Aplicando Chebyshev:

$$
P(|\bar X_n-\mu|\ge \varepsilon)
\le
\frac{\sigma^2}{n\varepsilon^2}.
$$

El lado derecho tiende a $0$ cuando

$$
n\to\infty,
$$

de modo que

$$
\bar X_n\to \mu
$$

en probabilidad.

\qed

## Lo que dice realmente la ley debil

La ley debil no dice que toda sucesion observada de medias converja punto por punto. Dice que, para $n$ grande, es cada vez menos probable observar una desviacion macroscopica de la media.

Este matiz es importante:

- es un resultado probabilistico sobre errores grandes;
- no una afirmacion determinista sobre cada trayectoria.

## Frecuencias relativas como caso particular

Si

$$
X_k=\mathbf 1_{A_k}
$$

donde cada $A_k$ representa exito en el ensayo $k$ y

$$
P(A_k)=p,
$$

entonces

$$
\bar X_n=\frac{1}{n}\sum_{k=1}^n X_k
$$

es la frecuencia relativa de exitos.

Como

$$
E[X_k]=p,
$$

la ley debil implica

$$
\bar X_n\to p
$$

en probabilidad.

### Lectura

Esta es la formulacion rigurosa de la intuicion frecuentista elemental: la frecuencia relativa se acerca a la probabilidad teorica.

## Ley fuerte de los grandes numeros

### Teorema 2: ley fuerte

Bajo hipotesis adecuadas, por ejemplo si

$$
X_1,X_2,\dots
$$

son i.i.d. y

$$
E[|X_1|]<\infty,
$$

entonces

$$
\bar X_n\to \mu
$$

casi seguramente.

### Comentario

La ley fuerte es mas profunda que la debil. No solo controla probabilidades de error a cada $n$, sino la trayectoria completa de la sucesion de promedios.

## Por que la ley fuerte es mas dificil

La ley debil controla, para cada

$$
n,
$$

la probabilidad de una desviacion. La ley fuerte exige algo mas severo: controlar el comportamiento conjunto para infinitos valores de

$$
n.
$$

### Idea tecnica

No basta estimar

$$
P(|\bar X_n-\mu|>\varepsilon)
$$

por separado. Hace falta estudiar eventos del tipo

$$
\left\{
\sup_{k\ge n}|\bar X_k-\mu|>\varepsilon
\right\},
$$

o al menos maximos parciales.

### Herramientas clasicas

En demostraciones serias aparecen desigualdades maximales y el lema de Borel-Cantelli:

- las desigualdades maximales controlan simultaneamente muchos sumandos parciales;
- Borel-Cantelli convierte una suma finita de probabilidades en una afirmacion "solo ocurre finitamente muchas veces".

### Lectura

La ley fuerte no es una version cosmetica de la debil. Pasa de control probabilistico punto a punto a control de trayectoria casi completa.

## Debil frente a fuerte

### Ley debil

Controla:

$$
P(|\bar X_n-\mu|\ge \varepsilon).
$$

### Ley fuerte

Controla el evento global

$$
\{\omega:\bar X_n(\omega)\to \mu\}.
$$

### Moral

La ley fuerte implica la ley debil, pero no al reves.

## Ejemplo 1: lanzamiento de moneda

Sea

$$
X_k=
\begin{cases}
1, & \text{cara},\\
0, & \text{cruz}.
\end{cases}
$$

con

$$
P(X_k=1)=p.
$$

Entonces

$$
\bar X_n
$$

es la fraccion de caras en $n$ lanzamientos.

La ley fuerte afirma que, salvo en un conjunto de probabilidad cero,

$$
\bar X_n(\omega)\to p.
$$

Esto expresa de forma exacta que la proporcion de caras se estabiliza a largo plazo.

## Ejemplo 2: dado equilibrado

Si

$$
X_k
$$

es el resultado del lanzamiento $k$ de un dado equilibrado, entonces

$$
E[X_k]=3.5.
$$

La ley de los grandes numeros afirma que

$$
\frac{X_1+\cdots+X_n}{n}\to 3.5
$$

en el sentido correspondiente.

### Comentario

No significa que el promedio este cerca de $3.5$ para todo $n$ grande sin fluctuaciones. Significa que las desviaciones grandes se vuelven raras y, en la version fuerte, que la trayectoria converge casi seguramente.

## Independencia y papel de la varianza

En la demostracion elemental de la ley debil via Chebyshev, la independencia sirve para obtener

$$
\operatorname{Var}(X_1+\cdots+X_n)=n\sigma^2.
$$

Sin independencia, el comportamiento puede cambiar radicalmente por la presencia de covarianzas:

$$
\operatorname{Var}(S_n)
=
\sum \operatorname{Var}(X_i)+2\sum_{i<j}\operatorname{Cov}(X_i,X_j).
$$

Por eso la ley de los grandes numeros no es solo un teorema sobre promedios; es tambien un teorema sobre cancelacion de fluctuaciones bajo hipotesis de dependencia suficientemente debil.

## Mas alla de la independencia: intuicion ergodica

La ley de los grandes numeros no pertenece solo al mundo i.i.d. Tambien existe una version mucho mas amplia en teoria ergodica.

### Esquema conceptual

Si

$$
X_k(\omega)=f(T^k\omega),
$$

donde

$$
T
$$

preserva la probabilidad, entonces el teorema ergodico de Birkhoff afirma, bajo integrabilidad,

$$
\frac1n\sum_{k=0}^{n-1} f(T^k\omega)
\to
E[f\mid \mathcal I](\omega)
$$

casi seguramente, donde

$$
\mathcal I
$$

es la sigma-algebra invariante.

### Caso ergodico

Si el sistema es ergodico, entonces

$$
E[f\mid \mathcal I]=E[f]
$$

casi seguramente, y reaparece la conclusion familiar:

$$
\frac1n\sum_{k=0}^{n-1} X_k
\to
E[X_0].
$$

### Moral

En esta lectura, la ley de grandes numeros dice que promedio temporal y promedio espacial coinciden. La independencia es una condicion suficiente muy comoda, pero no la unica via hacia esa conclusion.

## Ley debil sin varianza finita

El enunciado probado con Chebyshev pide varianza finita, pero versiones mas generales de la ley debil existen bajo hipotesis mas suaves.

Por ejemplo, para variables i.i.d. integrables puede recuperarse convergencia del promedio con herramientas mas profundas.

### Comentario

La varianza finita es una hipotesis comoda para la prueba elemental, no el limite absoluto de la teoria.

## Relacion con convergencia en media cuadratica

Del calculo anterior se ve que

$$
E[(\bar X_n-\mu)^2]=\operatorname{Var}(\bar X_n)=\frac{\sigma^2}{n}\to 0.
$$

Es decir,

$$
\bar X_n\to \mu
$$

en media cuadratica.

Como la convergencia en media cuadratica implica convergencia en probabilidad, la ley debil tambien puede leerse como una consecuencia de ese hecho.

## Significado estadistico

La ley de los grandes numeros justifica por que el promedio muestral es un estimador natural del valor esperado. Dice que al aumentar la muestra:

- el promedio se estabiliza;
- la incertidumbre disminuye;
- el error grande se vuelve improbable.

Esta es la nocion basica de consistencia.

## Lo que la ley no dice

No dice:

- a que velocidad exacta converge la distribucion de los errores;
- que la distribucion sea aproximadamente normal;
- que el promedio converja bien con muestras pequenas;
- que la convergencia se produzca uniformemente sobre todos los modelos.

Para estudiar velocidad y forma asintotica hacen falta resultados adicionales, como el teorema central del limite.

## Relacion con el teorema central del limite

La ley de los grandes numeros dice:

$$
\bar X_n\approx \mu
$$

para $n$ grande.

El teorema central del limite pregunta algo mas fino:

$$
\sqrt n(\bar X_n-\mu)
$$

como se distribuye?

La ley de los grandes numeros controla el hecho de converger. El TCL controla la escala de las fluctuaciones.

## Ejemplo 3: muestra muy variable

Aunque la varianza sea grande, la ley debil sigue valiendo si es finita. Lo que cambia es la rapidez de la cota de Chebyshev:

$$
P(|\bar X_n-\mu|\ge \varepsilon)
\le
\frac{\sigma^2}{n\varepsilon^2}.
$$

Si $\sigma^2$ es enorme, se necesita una muestra mucho mayor para que la cota sea pequena.

## Version para medias ponderadas

En contextos mas generales se estudian promedios ponderados y arreglos triangulares. Esto muestra que la ley de los grandes numeros no es un resultado aislado, sino parte de una teoria amplia de estabilizacion de sumas aleatorias.

## Error comun 1: confundir promedio observado con esperanza exacta

La ley no dice que para $n$ grande el promedio sea exactamente igual a la esperanza, sino que la discrepancia se vuelve pequena en un sentido probabilistico o casi seguro.

## Error comun 2: creer que la ley fuerte es "mas o menos lo mismo"

No. La ley fuerte hace una afirmacion mucho mas robusta sobre trayectorias individuales, no solo sobre probabilidades de error en cada $n$.

## Error comun 3: creer que toda dependencia permite una ley de grandes numeros

No. La dependencia puede acumularse de formas que destruyen la estabilizacion del promedio si no hay hipotesis suficientes.

## Practica guiada

### Ejercicio 1

Sean $X_1,\dots,X_n$ i.i.d. con media $5$ y varianza $12$. Acota

$$
P(|\bar X_n-5|\ge 0.5).
$$

#### Solucion

Por Chebyshev:

$$
P(|\bar X_n-5|\ge 0.5)
\le
\frac{12}{n(0.5)^2}
=
\frac{48}{n}.
$$

### Ejercicio 2

Explica por que la frecuencia relativa de exitos en ensayos Bernoulli es una media muestral.

#### Solucion

Porque si $X_k$ es el indicador de exito en el ensayo $k$, entonces

$$
\bar X_n=\frac{1}{n}\sum_{k=1}^n X_k
$$

cuenta el numero de exitos dividido por $n$, es decir, la frecuencia relativa.

### Ejercicio 3

Que afirma exactamente la ley fuerte?

#### Solucion

Que, salvo en un conjunto de probabilidad cero, la sucesion completa de medias muestrales converge al valor esperado.

## Cierre

La ley de los grandes numeros es la pieza que conecta probabilidad teorica con estabilidad empirica. Gracias a ella, el valor esperado deja de ser solo un promedio abstracto y se convierte en el limite natural de promedios observados. Su importancia es doble:

- matematica, porque organiza la teoria de convergencia de sumas;
- conceptual, porque justifica la lectura frecuentista y la consistencia estadistica.
