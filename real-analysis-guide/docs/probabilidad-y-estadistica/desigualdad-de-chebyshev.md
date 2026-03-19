---
title: Desigualdad de Chebyshev
description: Desigualdades de Markov y Chebyshev, interpretacion de concentracion, ejemplos, generalizaciones y papel en la ley de los grandes numeros.
---

# Desigualdad de Chebyshev

## Por que esta desigualdad importa tanto

La varianza parece, al principio, una medida descriptiva de dispersion. La desigualdad de Chebyshev muestra que es mucho mas que eso: permite convertir un segundo momento en una cota probabilistica uniforme sobre desviaciones grandes.

Ese paso es fundamental porque ya no depende de conocer la distribucion exacta. Con solo dos datos estructurales:

- la media;
- la varianza;

podemos asegurar que una variable no se aleja "demasiado a menudo" de su centro.

Chebyshev es, en ese sentido, la primera desigualdad de concentracion seria que suele encontrarse en un curso de probabilidad.

## La desigualdad matriz: Markov

Antes de Chebyshev conviene entender una desigualdad mas basica.

### Teorema 1: desigualdad de Markov

Si

$$
X\ge 0
$$

casi seguramente y

$$
E[X]<\infty,
$$

entonces para todo

$$
a>0
$$

se cumple

$$
P(X\ge a)\le \frac{E[X]}{a}.
$$

### Demostracion

Como

$$
X\ge a\,\mathbf 1_{\{X\ge a\}},
$$

al tomar esperanza obtenemos

$$
E[X]\ge a\,E[\mathbf 1_{\{X\ge a\}}]
=
a\,P(X\ge a).
$$

Dividiendo por $a>0$ resulta

$$
P(X\ge a)\le \frac{E[X]}{a}.
$$

\qed

## Interpretacion de Markov

Markov dice que una variable no negativa no puede concentrar demasiada masa en valores muy grandes si su media es pequena. Es una desigualdad muy general y, justamente por eso, no suele ser fina. Pero su fuerza esta en que solo necesita:

- no negatividad;
- existencia de la esperanza.

## De Markov a Chebyshev

Para una variable cualquiera $X$ con media $\mu$, la cantidad

$$
(X-\mu)^2
$$

es no negativa. Si aplicamos Markov a esa variable, obtenemos inmediatamente Chebyshev.

### Teorema 2: desigualdad de Chebyshev

Sea

$$
X
$$

una variable aleatoria con

$$
E[X]=\mu
$$

y

$$
\operatorname{Var}(X)=\sigma^2<\infty.
$$

Entonces para todo

$$
\varepsilon>0
$$

se cumple

$$
P(|X-\mu|\ge \varepsilon)\le \frac{\sigma^2}{\varepsilon^2}.
$$

Equivalentemente, para todo

$$
k>0,
$$

$$
P(|X-\mu|\ge k\sigma)\le \frac{1}{k^2}.
$$

### Demostracion

Aplicamos Markov a

$$
Y=(X-\mu)^2.
$$

Entonces

$$
Y\ge 0,
\qquad
E[Y]=\sigma^2.
$$

Ademas,

$$
\{|X-\mu|\ge \varepsilon\}
=
\{(X-\mu)^2\ge \varepsilon^2\}.
$$

Por tanto,

$$
P(|X-\mu|\ge \varepsilon)
=
P(Y\ge \varepsilon^2)
\le
\frac{E[Y]}{\varepsilon^2}
=
\frac{\sigma^2}{\varepsilon^2}.
$$

\qed

## Forma complementaria

Reescribiendo la desigualdad:

$$
P(|X-\mu|<\varepsilon)\ge 1-\frac{\sigma^2}{\varepsilon^2}.
$$

Esta forma enfatiza que al menos una fraccion controlable de la masa debe quedar dentro de cualquier intervalo centrado en la media cuyo radio supere la desviacion tipica.

## Lectura probabilistica

Si la varianza es pequena, entonces grandes desviaciones respecto de la media son improbables. Chebyshev no dice cuan probable es cada desviacion concreta, pero si da una barrera universal:

- no depende de simetria;
- no depende de continuidad;
- no depende de conocer la ley.

Por eso es tan util en pruebas generales.

## Ejemplo 1: una variable con media y varianza conocidas

Supongamos que

$$
E[X]=10,
\qquad
\operatorname{Var}(X)=4.
$$

Entonces para

$$
\varepsilon=5
$$

obtenemos

$$
P(|X-10|\ge 5)\le \frac{4}{25}=0.16.
$$

Equivalentemente,

$$
P(5<X<15)\ge 0.84.
$$

### Comentario

No sabemos nada mas sobre la distribucion de $X$, y aun asi ya tenemos un control no trivial.

## Ejemplo 2: un dado justo

Sea $X$ el resultado de lanzar un dado equilibrado.

Entonces

$$
E[X]=3.5,
\qquad
\operatorname{Var}(X)=\frac{35}{12}.
$$

Tomando

$$
\varepsilon=2.5,
$$

Chebyshev da

$$
P(|X-3.5|\ge 2.5)
\le
\frac{35/12}{(2.5)^2}
=
\frac{35}{75}
=
\frac{7}{15}.
$$

### Observacion

La cota no es muy fina, porque el problema concreto tiene distribucion conocida y discreta. Pero ilustra el caracter universal de Chebyshev: funciona incluso si la ley exacta es inaccesible.

## Ejemplo 3: media muestral

Sean

$$
X_1,\dots,X_n
$$

i.i.d. con media

$$
\mu
$$

y varianza

$$
\sigma^2<\infty.
$$

La media muestral es

$$
\bar X_n=\frac{X_1+\cdots+X_n}{n}.
$$

Como

$$
E[\bar X_n]=\mu,
\qquad
\operatorname{Var}(\bar X_n)=\frac{\sigma^2}{n},
$$

Chebyshev implica

$$
P(|\bar X_n-\mu|\ge \varepsilon)
\le
\frac{\sigma^2}{n\varepsilon^2}.
$$

Cuando

$$
n\to\infty,
$$

el lado derecho tiende a $0$. Esto prueba la ley debil de los grandes numeros para variables i.i.d. con varianza finita.

## Chebyshev como herramienta de consistencia

En estadistica, si un estimador $\hat\theta_n$ satisface

$$
E[\hat\theta_n]\to \theta
\qquad\text{y}\qquad
\operatorname{Var}(\hat\theta_n)\to 0,
$$

entonces Chebyshev suele bastar para demostrar

$$
\hat\theta_n\to \theta
$$

en probabilidad.

Este uso es crucial: Chebyshev convierte control en media cuadratica en convergencia probabilistica.

## Otra formulacion util

Si

$$
\varepsilon=k\sigma,
$$

entonces

$$
P(|X-\mu|\ge k\sigma)\le \frac{1}{k^2}.
$$

Por ejemplo:

- a distancia de $2\sigma$, la masa exterior es a lo sumo $1/4$;
- a distancia de $3\sigma$, es a lo sumo $1/9$;
- a distancia de $4\sigma$, es a lo sumo $1/16$.

### Advertencia

Estas cotas son mucho mas debiles que las verdaderas probabilidades en distribuciones como la normal. No deben confundirse con reglas empiricas del tipo "68-95-99.7", que son especificas de la gaussiana.

## Optimalidad relativa

Chebyshev es grosera en muchos casos, pero no arbitraria. Sin suposiciones adicionales, no puede mejorarse uniformemente en toda la clase de variables con media y varianza dadas.

### Ejemplo de saturacion

Si una variable toma solo tres valores

$$
\mu-\varepsilon,\quad \mu,\quad \mu+\varepsilon
$$

con probabilidades ajustadas apropiadamente, puede acercarse bastante a la igualdad en Chebyshev. Esto muestra que la desigualdad no es solo una curiosidad floja: esta adaptada a la informacion disponible.

## Version centrada en un punto distinto de la media

Para cualquier numero real $a$,

$$
P(|X-a|\ge \varepsilon)\le \frac{E[(X-a)^2]}{\varepsilon^2}.
$$

La eleccion natural

$$
a=\mu
$$

minimiza el segundo momento centrado, porque

$$
E[(X-a)^2]=\operatorname{Var}(X)+(a-\mu)^2.
$$

Esta identidad explica por que Chebyshev se formula alrededor de la media.

## Chebyshev y desigualdad de Jensen

Aunque suelen estudiarse por separado, hay una intuicion comun: moment information controls tails only coarsely. Chebyshev usa el segundo momento; Markov usa el primero sobre una variable no negativa; Jensen organiza como cambian los momentos bajo funciones convexas. Juntas forman parte del lenguaje basico de acotacion probabilistica.

## Generalizacion por momentos

Aplicando Markov a

$$
|X|^r
$$

para algun

$$
r>0,
$$

se obtiene

$$
P(|X|\ge a)\le \frac{E[|X|^r]}{a^r}.
$$

Chebyshev es el caso particular:

$$
r=2
$$

aplicado a

$$
X-\mu.
$$

## Version unilateral: desigualdad de Cantelli

Chebyshev controla colas bilaterales. Si interesa solo una cola, existe una mejora:

$$
P(X-\mu\ge t)\le \frac{\sigma^2}{\sigma^2+t^2},
\qquad t>0.
$$

Esta es la desigualdad de Cantelli o Chebyshev unilateral.

### Comentario

No es necesario usarla siempre, pero sirve para entender que el control bilateral de Chebyshev puede refinarse cuando el evento de interes vive en una sola cola.

## Relacion con la convergencia en media cuadratica

Si una sucesion satisface

$$
E[(X_n-X)^2]\to 0,
$$

entonces, por Chebyshev,

$$
P(|X_n-X|\ge \varepsilon)
\le
\frac{E[(X_n-X)^2]}{\varepsilon^2}
\to 0.
$$

Es decir,

$$
X_n\to X
$$

en probabilidad.

Esta implicacion es una de las aplicaciones mas limpias y frecuentes de la desigualdad.

## Ejemplo 4: control de error de estimacion

Supongamos que un estimador $\hat\theta_n$ es insesgado y satisface

$$
\operatorname{Var}(\hat\theta_n)=\frac{9}{n}.
$$

Entonces para cualquier

$$
\varepsilon>0,
$$

$$
P(|\hat\theta_n-\theta|\ge \varepsilon)
\le
\frac{9}{n\varepsilon^2}.
$$

Esto permite dimensionar muestra de forma muy cruda pero universal.

Por ejemplo, si queremos garantizar

$$
P(|\hat\theta_n-\theta|\ge 0.1)\le 0.05,
$$

basta imponer

$$
\frac{9}{n(0.1)^2}\le 0.05,
$$

lo que exige

$$
n\ge 18000.
$$

### Comentario

La cifra puede ser enorme porque Chebyshev es conservadora. Aun asi, da una garantia sin asumir forma de distribucion.

## Error comun 1: creer que Chebyshev da probabilidades exactas

No. Da cotas superiores. En muchos casos la probabilidad real es mucho menor.

## Error comun 2: usarla cuando la varianza no existe

Si

$$
\operatorname{Var}(X)=\infty
$$

o no esta definida, Chebyshev no puede aplicarse. La desigualdad necesita segundo momento finito.

## Error comun 3: pensar que una cota grosera es inutil

En pruebas abstractas, una cota universal aunque sea basta puede ser exactamente lo que hace falta. La ley debil de los grandes numeros es el mejor ejemplo.

## Practica guiada

### Ejercicio 1

Si

$$
E[X]=4,
\qquad
\operatorname{Var}(X)=9,
$$

acota

$$
P(|X-4|\ge 6).
$$

#### Solucion

Por Chebyshev,

$$
P(|X-4|\ge 6)\le \frac{9}{36}=\frac14.
$$

### Ejercicio 2

Sean $X_1,\dots,X_n$ i.i.d. con media $2$ y varianza $5$. Acota

$$
P(|\bar X_n-2|\ge 0.2).
$$

#### Solucion

Como

$$
\operatorname{Var}(\bar X_n)=\frac{5}{n},
$$

se tiene

$$
P(|\bar X_n-2|\ge 0.2)
\le
\frac{5}{n(0.2)^2}
=
\frac{125}{n}.
$$

### Ejercicio 3

Explica por que la media es el centro natural de Chebyshev.

#### Solucion

Porque minimiza el segundo momento centrado:

$$
E[(X-a)^2]=\operatorname{Var}(X)+(a-\mu)^2.
$$

Por tanto, entre todos los centros posibles, la media produce la mejor cota de este tipo.

## Cierre

La desigualdad de Chebyshev marca un cambio de escala en probabilidad: deja de importar tanto conocer la ley exacta y empieza a importar que tipo de informacion parcial basta para obtener conclusiones universales. Desde ese punto de vista, su relevancia no esta en ser una cota fina, sino en ser una cota:

- general;
- robusta;
- facil de aplicar;
- estructuralmente suficiente para probar resultados profundos como la ley debil de los grandes numeros.
