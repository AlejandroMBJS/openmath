---
title: Estimadores y distribuciones muestrales
description: Muestras aleatorias, estadisticos, sesgo, error estandar, consistencia y distribuciones muestrales que sostienen intervalos y pruebas de hipotesis.
---

# Estimadores y distribuciones muestrales

## Por que esta pagina hace falta

En estadistica inferencial aparecen objetos como:

- intervalos de confianza;
- pruebas de hipotesis;
- errores estandar;
- niveles de significancia;
- estadisticos

sin que siempre se explique de donde salen.

La respuesta correcta es: salen de la teoria de **muestras aleatorias** y **distribuciones muestrales**.

Sin esa capa intermedia, la inferencia queda como una lista de formulas. Con ella, las formulas se vuelven consecuencias naturales de la probabilidad de los estimadores.

## Muestra aleatoria

Sea

$$
X
$$

una variable aleatoria con distribucion desconocida, aunque quizas dependiente de un parametro

$$
\theta.
$$

Una **muestra aleatoria simple** de tamano

$$
n
$$

es una familia

$$
X_1,\dots,X_n
$$

de variables aleatorias independientes e identicamente distribuidas con la misma ley que

$$
X.
$$

## Lectura

La muestra es aleatoria antes de observarse. Una vez que se obtienen datos

$$
x_1,\dots,x_n,
$$

esos valores concretos son una realizacion de la muestra.

## Estadistico

Un **estadistico** es una funcion medible de la muestra:

$$
T=T(X_1,\dots,X_n).
$$

No debe depender de parametros desconocidos.

### Ejemplos

- media muestral:

$$
\overline X=\frac1n\sum_{i=1}^n X_i;
$$

- suma muestral:

$$
S_n=\sum_{i=1}^n X_i;
$$

- proporcion muestral:

$$
\widehat p=\frac1n\sum_{i=1}^n X_i
$$

cuando

$$
X_i
$$

son Bernoulli;

- varianza muestral:

$$
S^2=\frac{1}{n-1}\sum_{i=1}^n (X_i-\overline X)^2.
$$

## Parametro y estimador

Un **parametro** es una cantidad fija del modelo poblacional, por ejemplo:

- media

$$
\mu;
$$

- varianza

$$
\sigma^2;
$$

- proporcion

$$
p.
$$

Un **estimador** es un estadistico pensado para aproximar un parametro.

### Ejemplos

- 

$$
\overline X
$$

estima

$$
\mu;
$$

- 

$$
\widehat p
$$

estima

$$
p;
$$

- 

$$
S^2
$$

estima

$$
\sigma^2.
$$

## Distribucion muestral

La **distribucion muestral** de un estadistico es su ley de probabilidad cuando el muestreo se repite muchas veces bajo el mismo modelo.

Esto es crucial: el estimador no es un numero fijo antes de observar la muestra, sino una variable aleatoria.

### Consecuencia

Hablar de error, sesgo, varianza o intervalo para un estimador significa estudiar la distribucion muestral de esa variable aleatoria.

## Sesgo

Un estimador

$$
\widehat \theta
$$

del parametro

$$
\theta
$$

tiene **sesgo**

$$
\operatorname{sesgo}(\widehat \theta)
=
E[\widehat \theta]-\theta.
$$

Se dice que es **insesgado** si

$$
E[\widehat \theta]=\theta.
$$

## Ejemplo 1: insesgadez de la media muestral

Si

$$
E[X_i]=\mu,
$$

entonces

$$
E[\overline X]
=
E\left[\frac1n\sum_{i=1}^n X_i\right]
=
\frac1n\sum_{i=1}^n E[X_i]
=
\frac{n\mu}{n}
=
\mu.
$$

Por tanto,

$$
\overline X
$$

es insesgado para

$$
\mu.
$$

## Error cuadratico medio

Una medida mas completa que el sesgo es el **error cuadratico medio**:

$$
\operatorname{ECM}(\widehat \theta)
=
E[(\widehat \theta-\theta)^2].
$$

Vale la descomposicion

$$
\operatorname{ECM}(\widehat \theta)
=
\operatorname{Var}(\widehat \theta)
+\operatorname{sesgo}(\widehat \theta)^2.
$$

### Interpretacion

Un estimador no tiene por que ser insesgado para ser bueno. A veces se acepta un pequeno sesgo a cambio de una varianza mucho menor.

## Eficiencia y cota de Cramer-Rao

No basta preguntar si un estimador es insesgado. Tambien interesa cuanta variabilidad conserva entre todos los candidatos razonables.

### Idea local

En modelos regulares parametrizados por

$$
\theta,
$$

la informacion de Fisher de una observacion puede escribirse como

$$
I(\theta)=
\operatorname{E}_\theta\!\left[
\left(
\frac{\partial}{\partial \theta}\log f_\theta(X)
\right)^2
\right].
$$

Para una muestra i.i.d. de tamano

$$
n,
$$

la informacion total es

$$
I_n(\theta)=nI(\theta).
$$

Si

$$
T_n
$$

es insesgado para

$$
\theta,
$$

entonces, bajo hipotesis de regularidad,

$$
\operatorname{Var}_\theta(T_n)\ge \frac{1}{I_n(\theta)}.
$$

### Lectura

La cota de Cramer-Rao dice que la curvatura de la familia de densidades impone un piso a la precision alcanzable por estimadores insesgados. No toda mejora es posible.

### Eficiencia

Si un estimador alcanza esa cota, se dice eficiente en ese modelo y parametro. En la practica esto ocurre solo en situaciones especiales, por ejemplo en algunos problemas gaussianos.

### Advertencia conceptual

La cota:

- no vale sin condiciones de regularidad;
- no gobierna directamente estimadores sesgados;
- es una cota local, no una descripcion global de todo el problema.

Pero introduce una idea central: estimar no es solo acertar en promedio, sino hacerlo con la menor perdida de informacion posible.

## Suficiencia: cuanta informacion retiene un estadistico

No todos los estadisticos resumen igual de bien a la muestra. Un estadistico

$$
T(X_1,\dots,X_n)
$$

es **suficiente** para un parametro

$$
\theta
$$

si, una vez conocido

$$
T,
$$

el resto de la muestra no aporta informacion adicional sobre

$$
\theta.
$$

### Lectura

La suficiencia no significa que el estadistico ya sea "bueno" en todos los sentidos. Significa que no pierde informacion relevante del modelo respecto del parametro.

### Ejemplo clasico

En una muestra normal con varianza conocida, la media muestral

$$
\overline X
$$

es suficiente para

$$
\mu.
$$

En la familia Bernoulli, la suma

$$
\sum_{i=1}^n X_i
$$

es suficiente para

$$
p.
$$

Esta observacion explica por que tantas formulas inferenciales dependen solo de esas cantidades agregadas.

## Teorema de Rao-Blackwell y por que conviene condicionar

La suficiencia no solo organiza la informacion. Tambien permite **mejorar estimadores** sin cambiar el parametro que estiman.

### Enunciado

Sea

$$
W=W(X_1,\dots,X_n)
$$

un estimador integrable de una cantidad

$$
g(\theta),
$$

y sea

$$
T=T(X_1,\dots,X_n)
$$

un estadistico suficiente. Definimos

$$
\delta(T)=E[W\mid T].
$$

Entonces:

- $\delta(T)$ depende solo de $T$;
- $E_\theta[\delta(T)]=E_\theta[W]$ para todo $\theta$;
- si $W$ es insesgado para $g(\theta)$, entonces $\delta(T)$ tambien lo es;
- ademas

$$
\operatorname{Var}_\theta(\delta(T))
\le
\operatorname{Var}_\theta(W)
$$

si las varianzas existen.

### Demostracion de la mejora en varianza

La identidad clave es la ley total de la varianza:

$$
\operatorname{Var}(W)
=
E[\operatorname{Var}(W\mid T)]
+
\operatorname{Var}(E[W\mid T]).
$$

Como el primer termino es no negativo, se sigue que

$$
\operatorname{Var}(W)
\ge
\operatorname{Var}(E[W\mid T])
=
\operatorname{Var}(\delta(T)).
$$

### Demostracion de la conservacion de la media

Por la ley iterada de la esperanza,

$$
E_\theta[\delta(T)]
=
E_\theta[E_\theta[W\mid T]]
=
E_\theta[W].
$$

Por tanto, condicionar respecto de un estadistico suficiente no cambia la media del estimador, pero si puede eliminar ruido innecesario.

### Lectura conceptual

El teorema de Rao-Blackwell dice que, si ya sabemos cual es el resumen suficiente de la muestra, cualquier fluctuacion adicional de un estimador que no pase por ese resumen es puro desperdicio estadistico. Condicionar sobre el estadistico suficiente "lava" esa variabilidad superflua.

### Cuando hay igualdad

Se tiene igualdad en varianza si y solo si

$$
W=E[W\mid T]
$$

casi seguramente, es decir, si y solo si $W$ ya era funcion de $T$.

### Ejemplo: Bernoulli

Sea

$$
X_1,\dots,X_n\sim \operatorname{Bernoulli}(p)
$$

iid y tomemos

$$
W=X_1.
$$

Este estimador es insesgado para

$$
p,
$$

pero desperdicia casi toda la muestra. El estadistico suficiente natural es

$$
S=\sum_{i=1}^n X_i.
$$

Por simetria,

$$
E[X_1\mid S]=\frac{S}{n}.
$$

Luego el estimador Rao-Blackwellizado es

$$
\delta(S)=\frac{S}{n}=\widehat p,
$$

que coincide con la proporcion muestral. No es casualidad: la version "buena" del estimador surge al obligarlo a pasar por el resumen suficiente.

### Puente hacia Lehmann-Scheffe

Rao-Blackwell dice "mejora condicionando". Lehmann-Scheffe dice algo mas fuerte: si el estadistico suficiente es ademas completo, entonces esa mejora produce el **unico** estimador insesgado de varianza minima uniforme.

## Completitud y teorema de Lehmann-Scheffe

La suficiencia dice que un estadistico no pierde informacion. La completitud refuerza esa idea.

### Definicion

Un estadistico suficiente

$$
T
$$

se dice completo si toda funcion medible

$$
h(T)
$$

que satisfaga

$$
E_\theta[h(T)]=0
$$

para todo

$$
\theta
$$

debe ser nula casi seguramente.

### Lectura

La completitud impide que queden direcciones ocultas dentro del propio estadistico suficiente que produzcan medias siempre cero sin ser trivialmente nulas.

### Consecuencia central

Si

$$
T
$$

es suficiente y completo, y

$$
\delta(T)
$$

es insesgado para un parametro de interes, entonces

$$
\delta(T)
$$

es el estimador insesgado de varianza minima uniforme. Este es el contenido del teorema de Lehmann-Scheffe.

## Consistencia

Un estimador

$$
\widehat \theta_n
$$

es **consistente** para

$$
\theta
$$

si

$$
\widehat \theta_n\to \theta
$$

en probabilidad cuando

$$
n\to \infty.
$$

### Lectura

La consistencia es una propiedad asintotica: con muestras grandes, el estimador se concentra alrededor del parametro verdadero.

## Normalidad asintotica y tasa raiz de n

Muchos estimadores consistentes satisfacen ademas una ley limite mas fina:

$$
\sqrt n(\widehat\theta_n-\theta)\Rightarrow N(0,V(\theta)).
$$

### Lectura

La consistencia solo dice que el error desaparece. La normalidad asintotica describe a que escala desaparece y cual es la forma limite de la fluctuacion.

### Por que aparece la escala

La presencia de

$$
\sqrt n
$$

no es casual:

- las medias muestrales oscilan tipicamente como

$$
1/\sqrt n;
$$
- esa misma escala reaparece en muchos estimadores de maxima verosimilitud, M-estimadores y procedimientos plug-in.

### Conexion con la inferencia

Una expansion de este tipo permite construir:

- intervalos de confianza;
- pruebas de hipotesis;
- errores estandar;
- comparaciones de eficiencia.

## Insesgadez no implica consistencia

Estas dos propiedades suelen confundirse.

- Un estimador puede ser insesgado pero tener varianza que no decrece con

$$
n,
$$

y entonces no ser consistente.
- Tambien puede haber estimadores sesgados cuyo sesgo desaparece y cuya varianza se hace pequena, de modo que si son consistentes.

### Ejemplo conceptual

El estimador

$$
\widehat\theta_n=X_1
$$

de

$$
\mu
$$

es insesgado si

$$
E[X_1]=\mu,
$$

pero no usa el resto de la muestra, asi que su varianza no cae con

$$
n.
$$

Por eso, en general, no es consistente.

## Error estandar

El **error estandar** de un estimador es su desviacion tipica:

$$
\operatorname{EE}(\widehat \theta)=\sqrt{\operatorname{Var}(\widehat \theta)}.
$$

En la practica, muchas formulas de inferencia se construyen a partir de

$$
\widehat \theta \pm (\text{cuantil})\times \operatorname{EE}(\widehat \theta).
$$

## Error estandar teorico y error estandar estimado

Hay que distinguir dos niveles:

- el error estandar teorico, que depende de parametros poblacionales tal vez desconocidos;
- el error estandar estimado, que reemplaza esos parametros por estimadores muestrales.

### Ejemplo

Para la media muestral,

$$
\operatorname{EE}(\overline X)=\frac{\sigma}{\sqrt n}
$$

si

$$
\sigma
$$

fuera conocida.

En la practica se usa

$$
\widehat{\operatorname{EE}}(\overline X)=\frac{S}{\sqrt n}.
$$

Ese reemplazo parece pequeno, pero es exactamente lo que cambia la normal por la t de Student en muestra pequena.

## Media muestral

Si

$$
X_1,\dots,X_n
$$

son iid con

$$
E[X_i]=\mu,
\qquad
\operatorname{Var}(X_i)=\sigma^2<\infty,
$$

entonces:

$$
E[\overline X]=\mu,
\qquad
\operatorname{Var}(\overline X)=\frac{\sigma^2}{n}.
$$

Por tanto,

$$
\operatorname{EE}(\overline X)=\frac{\sigma}{\sqrt n}.
$$

### Leccion

El tamano muestral no reduce el sesgo de la media, porque ya es insesgada, pero si reduce su dispersion.

## Proporcion muestral

Si

$$
X_i\sim \operatorname{Bernoulli}(p),
$$

entonces

$$
\widehat p=\overline X
$$

es la proporcion muestral de exitos.

Se tiene:

$$
E[\widehat p]=p,
\qquad
\operatorname{Var}(\widehat p)=\frac{p(1-p)}{n}.
$$

## Varianza muestral

La varianza poblacional se define por

$$
\sigma^2=E[(X-\mu)^2].
$$

Un error comun es pensar que

$$
\frac1n\sum_{i=1}^n (X_i-\overline X)^2
$$

es insesgado para

$$
\sigma^2.
$$

No lo es. El estimador insesgado es

$$
S^2=\frac{1}{n-1}\sum_{i=1}^n (X_i-\overline X)^2.
$$

### Comentario

El factor

$$
n-1
$$

aparece porque la media muestral ya fue estimada a partir de los propios datos.

## Distribucion exacta de la media muestral en el caso normal

Si

$$
X_i\sim N(\mu,\sigma^2)
$$

independientes, entonces

$$
\overline X\sim N\left(\mu,\frac{\sigma^2}{n}\right).
$$

De aqui se deduce que

$$
\frac{\overline X-\mu}{\sigma/\sqrt n}\sim N(0,1).
$$

Esta identidad sostiene los intervalos y pruebas para media cuando

$$
\sigma
$$

es conocida.

## Caso con varianza desconocida

Si la muestra es normal y

$$
\sigma
$$

es desconocida, entonces el estadistico

$$
T=
\frac{\overline X-\mu}{S/\sqrt n}
$$

sigue una distribucion

$$
t
$$

de Student con

$$
n-1
$$

grados de libertad.

Esta es la base teorica de los intervalos para muestras chicas y de las pruebas con varianza desconocida.

## Teorema central del limite

Si

$$
X_1,\dots,X_n
$$

son iid con media

$$
\mu
$$

y varianza

$$
\sigma^2<\infty,
$$

entonces

$$
\frac{\overline X-\mu}{\sigma/\sqrt n}
\Rightarrow
N(0,1)
$$

cuando

$$
n\to \infty.
$$

## Lectura

Aunque la poblacion no sea normal, para muestras grandes la media muestral se comporta aproximadamente como normal.

Por eso aparecen intervalos y pruebas "para muestras grandes".

## Slutsky y por que se puede "enchufar" un estimador

Muchas estadisticas practicas no usan el parametro exacto en el denominador, sino una version estimada. La justificacion asintotica de ese reemplazo suele venir del teorema de Slutsky.

### Esquema tipico

Si

$$
\frac{\widehat\theta_n-\theta}{a_n}\Rightarrow Z
$$

y ademas

$$
\frac{\widehat a_n}{a_n}\to 1
$$

en probabilidad, entonces

$$
\frac{\widehat\theta_n-\theta}{\widehat a_n}\Rightarrow Z.
$$

### Lectura

Esto explica por que, en grandes muestras, puede sustituirse una desviacion tipica teorica por una estimada sin cambiar el limite asintotico.

## Metodo delta

Muchas veces no interesa

$$
\widehat\theta_n
$$

en si, sino una transformacion suave

$$
g(\widehat\theta_n).
$$

El metodo delta dice que, si

$$
\sqrt n(\widehat\theta_n-\theta)\Rightarrow N(0,\tau^2)
$$

y

$$
g
$$

es derivable en

$$
\theta,
$$

entonces

$$
\sqrt n\bigl(g(\widehat\theta_n)-g(\theta)\bigr)
\Rightarrow
N\bigl(0,(g'(\theta))^2\tau^2\bigr).
$$

### Lectura

El metodo delta linealiza localmente a

$$
g.
$$

Es la herramienta que permite pasar de la distribucion asintotica de un estimador base a la de funciones como:

- logaritmos;
- razones simples;
- riesgos relativos;
- odds y transformaciones de probabilidades.

### Ejemplo rapido

Si

$$
\widehat p
$$

es una proporcion muestral y queremos estudiar

$$
g(p)=\log\frac{p}{1-p},
$$

la transformacion logit tiene derivada

$$
g'(p)=\frac{1}{p(1-p)}.
$$

El metodo delta produce entonces una desviacion asintotica para

$$
g(\widehat p)
$$

a partir de la de

$$
\widehat p.
$$

## Principio plug-in e invariancia

En muchos problemas no se estima directamente un parametro elemental, sino una cantidad derivada:

- una razon;
- un logaritmo;
- una probabilidad transformada;
- un funcional suave de varios parametros.

La estrategia mas natural es el **principio plug-in**: reemplazar el parametro desconocido por su estimador.

### Esquema general

Si el objetivo es

$$
\tau=g(\theta)
$$

y ya se dispone de un estimador

$$
\widehat\theta,
$$

se propone

$$
\widehat\tau=g(\widehat\theta).
$$

### Por que suele funcionar

Si

$$
\widehat\theta\to\theta
$$

en probabilidad y

$$
g
$$

es continua en

$$
\theta,
$$

entonces

$$
g(\widehat\theta)\to g(\theta)
$$

en probabilidad. Es decir: la consistencia se transporta por continuidad.

### Invariancia del estimador de maxima verosimilitud

Si

$$
\widehat\theta_{\mathrm{MV}}
$$

maximiza la verosimilitud para

$$
\theta,
$$

entonces, bajo condiciones habituales, un estimador natural de maxima verosimilitud para

$$
g(\theta)
$$

es precisamente

$$
g(\widehat\theta_{\mathrm{MV}}).
$$

Esta propiedad explica por que el plug-in no es una improvisacion, sino un principio estructural de la inferencia.

### Lo que no garantiza

El plug-in no preserva automaticamente:

- insesgadez exacta;
- minima varianza;
- buen comportamiento en muestras pequenas.

Por eso muchas veces se combina con:

- metodo delta para obtener errores estandar;
- transformaciones estabilizadoras;
- correcciones de sesgo.

## Pivotes

Un **pivote** es una funcion de la muestra y del parametro cuya distribucion no depende del parametro desconocido.

### Ejemplos fundamentales

- 
$$
\frac{\overline X-\mu}{\sigma/\sqrt n}\sim N(0,1)
$$

si la muestra es normal y

$$
\sigma
$$

es conocida;
- 
$$
\frac{\overline X-\mu}{S/\sqrt n}\sim t_{n-1}
$$

en el caso normal con varianza desconocida;
- 
$$
\frac{(n-1)S^2}{\sigma^2}\sim \chi^2_{n-1}.
$$

### Importancia

Los intervalos de confianza y muchas pruebas exactas se construyen despejando el parametro a partir de pivotes.

## Distribuciones muestrales tipicas

### Suma de Bernoulli

Si

$$
X_i\sim \operatorname{Bernoulli}(p),
$$

entonces

$$
\sum_{i=1}^n X_i\sim \operatorname{Binomial}(n,p).
$$

### Proporcion muestral

Como

$$
\widehat p=\frac{1}{n}\sum_{i=1}^n X_i,
$$

la distribucion de

$$
\widehat p
$$

se deduce escalando una binomial.

### Media de normales

Ya vimos que una muestra normal produce media normal exactamente.

### Varianza y ji-cuadrada

Si la muestra es normal, entonces

$$
\frac{(n-1)S^2}{\sigma^2}\sim \chi^2_{n-1}.
$$

Esta identidad sostiene la inferencia sobre varianzas.

## Ejemplo 2

Supongamos que

$$
X_i\sim N(10,9)
$$

y

$$
n=25.
$$

Entonces:

$$
\overline X\sim N\left(10,\frac{9}{25}\right).
$$

Por tanto,

$$
\operatorname{EE}(\overline X)=\frac{3}{5}=0.6.
$$

La probabilidad de que la media muestral difiera de

$$
10
$$

en mas de

$$
1.2
$$

es:

$$
P(|\overline X-10|>1.2)
=
P\left(\left|\frac{\overline X-10}{0.6}\right|>2\right).
$$

Como el cociente es normal estandar:

$$
P(|Z|>2)\approx 0.0455.
$$

## Ejemplo 3

En una muestra de

$$
n=400
$$

individuos, la proporcion verdadera de cierto rasgo es

$$
p=0.30.
$$

Entonces:

$$
E[\widehat p]=0.30,
\qquad
\operatorname{Var}(\widehat p)=\frac{0.3\cdot 0.7}{400}=0.000525.
$$

Luego

$$
\operatorname{EE}(\widehat p)\approx 0.0229.
$$

La proporcion muestral tipicamente fluctua unas pocas centesimas alrededor de

$$
0.30.
$$

## Ejemplo 4

Supongamos que un estimador

$$
\widehat \theta
$$

tiene:

$$
E[\widehat \theta]=\theta+0.1,
\qquad
\operatorname{Var}(\widehat \theta)=0.04.
$$

Entonces:

$$
\operatorname{sesgo}(\widehat \theta)=0.1,
$$

y

$$
\operatorname{ECM}(\widehat \theta)=0.04+0.01=0.05.
$$

Esto muestra como sesgo y varianza contribuyen conjuntamente al desempeno del estimador.

## Practica guiada

### Situacion 1

Una muestra iid tiene media poblacional

$$
\mu
$$

y varianza

$$
16.
$$

Si

$$
n=64,
$$

cuanto vale el error estandar de la media muestral.

#### Idea

Usar

$$
\operatorname{EE}(\overline X)=\frac{\sigma}{\sqrt n}.
$$

### Situacion 2

Una proporcion muestral de

$$
\widehat p=0.42
$$

se obtuvo con

$$
n=225.
$$

#### Tarea

Calcular el error estandar estimado:

$$
\sqrt{\frac{\widehat p(1-\widehat p)}{n}}.
$$

### Situacion 3

Explicar por que las pruebas para muestras chicas usan

$$
t
$$

en vez de

$$
z
$$

cuando

$$
\sigma
$$

es desconocida.

#### Clave conceptual

Porque al reemplazar

$$
\sigma
$$

por

$$
S
$$

se introduce variabilidad extra, recogida por la distribucion

$$
t.
$$

## Errores frecuentes

- Confundir muestra observada con variable aleatoria muestral.
- Usar un estimador sin distinguir parametro y estadistico.
- Pensar que insesgado significa automaticamente mejor.
- Olvidar que el error estandar depende de la distribucion muestral.
- Usar normalidad exacta donde solo hay aproximacion asintotica.
- Aplicar formulas de una muestra normal sin independencia.

## Puente hacia el resto del bloque

Esta pagina sostiene directamente:

- intervalos de confianza;
- pruebas para medias y proporciones;
- errores estandar y margenes de error;
- lectura correcta de tablas

$$
z,\ t,\ \chi^2;
$$

- comparacion entre muestras grandes y chicas.

## Cierre

La inferencia estadistica no nace de formulas sueltas, sino del estudio probabilistico de los estimadores. Una vez que la muestra, el estadistico y su distribucion muestral estan claros, los intervalos y las pruebas dejan de ser recetas y pasan a ser consecuencias transparentes de la teoria.
