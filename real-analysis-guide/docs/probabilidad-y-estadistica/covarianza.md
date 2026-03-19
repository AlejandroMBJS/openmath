---
title: Covarianza
description: Covarianza, propiedades algebraicas, relacion con independencia, correlacion, matrices de covarianza y ejemplos de dependencia no lineal.
---

# Covarianza

## El paso de una variable a dos variables

La varianza mide dispersion de una sola variable alrededor de su media. Cuando aparecen dos variables aleatorias, la pregunta natural ya no es solo cuanto se dispersa cada una por separado, sino como fluctuan juntas.

Si dos variables tienden a estar simultaneamente por encima o por debajo de sus medias, esperamos una asociacion positiva. Si una suele subir cuando la otra baja, esperamos una asociacion negativa. La covarianza es la herramienta algebraica basica que codifica esa informacion.

## Definicion

Sean

$$
X,\ Y
$$

variables aleatorias tales que la expresion siguiente sea integrable. Definimos

$$
\operatorname{Cov}(X,Y)
=
E[(X-E[X])(Y-E[Y])].
$$

Cuando esta cantidad existe, mide la cofluctuacion lineal de $X$ e $Y$ alrededor de sus medias.

## Interpretacion inmediata

El producto

$$
(X-E[X])(Y-E[Y])
$$

es:

- positivo cuando ambas variables se desvien en el mismo sentido;
- negativo cuando se desvien en sentidos opuestos;
- pequeno cuando una de ellas este cerca de su media.

Su esperanza hace un promedio global de ese comportamiento.

### Lectura del signo

- covarianza positiva: tendencia lineal positiva;
- covarianza negativa: tendencia lineal negativa;
- covarianza nula: ausencia de asociacion lineal global.

La palabra clave es lineal. Covarianza cero no significa, en general, independencia.

## Formula equivalente

### Teorema 1

Si

$$
E[|XY|]<\infty,
$$

entonces

$$
\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y].
$$

### Demostracion

Expandimos:

$$
(X-E[X])(Y-E[Y])
=
XY-XE[Y]-YE[X]+E[X]E[Y].
$$

Tomando esperanza y usando linealidad:

$$
E[XY]-E[X]E[Y]-E[Y]E[X]+E[X]E[Y]
=
E[XY]-E[X]E[Y].
$$

\qed

### Comentario

Esta formula es la mas usada en calculos practicos.

## Simetria

### Proposicion 2

$$
\operatorname{Cov}(X,Y)=\operatorname{Cov}(Y,X).
$$

Es inmediata a partir de cualquiera de las dos definiciones.

## Covarianza con constantes

Si

$$
c
$$

es constante, entonces

$$
\operatorname{Cov}(X,c)=0.
$$

La razon es que una constante no fluctua alrededor de su media.

## La varianza como caso particular

Tomando

$$
Y=X,
$$

obtenemos

$$
\operatorname{Var}(X)=\operatorname{Cov}(X,X).
$$

Esto muestra que la covarianza no es una nocion ajena a la varianza, sino su extension bilineal natural.

## Bilinealidad

### Teorema 3

Para constantes

$$
a,b,c,d
$$

se cumple

$$
\operatorname{Cov}(aX+b,cY+d)=ac\,\operatorname{Cov}(X,Y).
$$

### Comentario

Las traslaciones no alteran la covarianza y los cambios de escala la multiplican.

### Consecuencia

Si

$$
U=aX+bY,
\qquad
V=cX+dY,
$$

entonces la covarianza entre $U$ y $V$ puede expandirse por bilinealidad. Esto es la base de todas las formulas de dispersion en estadistica multivariante.

## Covarianza de sumas

### Proposicion 4

$$
\operatorname{Cov}(X+Y,Z)
=
\operatorname{Cov}(X,Z)+\operatorname{Cov}(Y,Z).
$$

Mas generalmente, la covarianza es bilineal respecto de combinaciones lineales finitas.

## Varianza de una suma

Aplicando la identidad anterior con

$$
Z=X+Y,
$$

se obtiene

$$
\operatorname{Var}(X+Y)
=
\operatorname{Var}(X)+\operatorname{Var}(Y)+2\operatorname{Cov}(X,Y).
$$

De manera mas general,

$$
\operatorname{Var}(X-Y)
=
\operatorname{Var}(X)+\operatorname{Var}(Y)-2\operatorname{Cov}(X,Y).
$$

### Importancia

Estas formulas son una de las razones principales por las que la covarianza importa: la dispersion de una suma no se obtiene sumando varianzas salvo independencia o covarianza nula.

## Independencia implica covarianza nula

### Teorema 5

Si

$$
X
$$

e

$$
Y
$$

son independientes y tienen primer momento finito, entonces

$$
\operatorname{Cov}(X,Y)=0.
$$

### Demostracion

La independencia implica

$$
E[XY]=E[X]E[Y].
$$

Entonces, por la formula equivalente,

$$
\operatorname{Cov}(X,Y)=0.
$$

\qed

## La reciproca es falsa

Covarianza nula no implica independencia.

### Ejemplo 1: dependencia no lineal pura

Sea

$$
X\sim U[-1,1]
$$

y definamos

$$
Y=X^2.
$$

Entonces $Y$ depende completamente de $X$. Sin embargo:

$$
E[X]=0,
\qquad
E[XY]=E[X^3]=0.
$$

Por tanto

$$
\operatorname{Cov}(X,Y)=0.
$$

### Leccion

La covarianza detecta asociacion lineal, no toda forma de dependencia.

## Ejemplo 2: una relacion perfectamente lineal negativa

Sea

$$
Y=1-X,
\qquad
X\sim \operatorname{Bernoulli}(p).
$$

Entonces

$$
E[X]=p,
\qquad
E[Y]=1-p,
\qquad
XY=0
$$

casi seguramente.

Luego

$$
\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]
=
0-p(1-p)
=
-p(1-p).
$$

La covarianza es negativa, como debe ocurrir en dos variables que se mueven exactamente en sentido opuesto.

## Desigualdad de Cauchy-Schwarz para covarianza

### Teorema 6

Si $X$ e $Y$ tienen segundo momento finito, entonces

$$
|\operatorname{Cov}(X,Y)|
\le
\sqrt{\operatorname{Var}(X)\operatorname{Var}(Y)}.
$$

### Demostracion

Basta aplicar Cauchy-Schwarz a

$$
X-E[X]
\qquad\text{y}\qquad
Y-E[Y].
$$

Se obtiene

$$
|E[(X-E[X])(Y-E[Y])]|^2
\le
E[(X-E[X])^2]E[(Y-E[Y])^2].
$$

Tomando raices resulta la desigualdad.

\qed

### Consecuencia

La covarianza siempre esta controlada por las desviaciones tipicas. Esto permite normalizarla y definir la correlacion.

## Covarianza como producto interno centrado

Si se restringe la atencion a variables aleatorias con segundo momento finito, puede verse a

$$
X-E[X]
$$

como un vector del espacio

$$
L^2.
$$

En ese lenguaje,

$$
\operatorname{Cov}(X,Y)
=
\langle X-E[X],\,Y-E[Y]\rangle_{L^2}.
$$

### Lectura

La covarianza mide el angulo y el alineamiento entre las partes centradas de dos variables. Por eso:

- la varianza es una norma al cuadrado;
- Cauchy-Schwarz produce inmediatamente la cota para la covarianza;
- correlacion cero significa ortogonalidad en

$$
L^2
$$

de las variables centradas.

### Advertencia

Ortogonalidad en

$$
L^2
$$

no es lo mismo que independencia. Esa distincion es una de las razones por las que covarianza cero es una condicion mucho mas debil.

## Correlacion

Si

$$
\sigma_X>0,
\qquad
\sigma_Y>0,
$$

la correlacion de Pearson se define por

$$
\rho(X,Y)
=
\frac{\operatorname{Cov}(X,Y)}{\sigma_X\sigma_Y}.
$$

Por Cauchy-Schwarz,

$$
|\rho(X,Y)|\le 1.
$$

### Interpretacion

- $\rho=1$: relacion lineal positiva perfecta;
- $\rho=-1$: relacion lineal negativa perfecta;
- $\rho=0$: ausencia de relacion lineal.

## Cuando la correlacion vale 1 o -1

### Proposicion 7

Se tiene

$$
|\rho(X,Y)|=1
$$

si y solo si existe una relacion afin casi segura

$$
Y=aX+b
$$

con

$$
a\ne 0.
$$

### Comentario

Esto caracteriza la asociacion lineal perfecta.

## Covarianza de vectores aleatorios

Si

$$
X=(X_1,\dots,X_n)^T
$$

es un vector aleatorio con segundos momentos finitos, su matriz de covarianza es

$$
\Sigma=\operatorname{Cov}(X)=E[(X-E[X])(X-E[X])^T].
$$

La entrada $(i,j)$ es

$$
\Sigma_{ij}=\operatorname{Cov}(X_i,X_j).
$$

### Propiedades

- $\Sigma$ es simetrica;
- $\Sigma$ es semidefinida positiva;
- sus diagonales son las varianzas.

### Prueba de semidefinicion positiva

Para todo vector $u$,

$$
u^T\Sigma u
=
E\left[u^T(X-E[X])(X-E[X])^Tu\right]
=
E\left[(u^T(X-E[X]))^2\right]
\ge 0.
$$

Esta propiedad es central en estadistica multivariante y geometria probabilistica.

## Transformacion lineal de la matriz de covarianza

Si

$$
Y=AX+b,
$$

donde

$$
A
$$

es una matriz fija y

$$
b
$$

un vector constante, entonces

$$
\operatorname{Cov}(Y)=A\,\operatorname{Cov}(X)\,A^T.
$$

### Demostracion

Como

$$
E[Y]=AE[X]+b,
$$

se tiene

$$
Y-E[Y]=A(X-E[X]).
$$

Luego

$$
\operatorname{Cov}(Y)
=
E[(Y-E[Y])(Y-E[Y])^T]
=
E[A(X-E[X])(X-E[X])^TA^T]
=
A\Sigma A^T.
$$

### Lectura

Esta formula explica como la dispersion cambia al aplicar mezclas lineales de coordenadas. Es la base de:

- propagacion de errores;
- componentes principales;
- modelos gaussianos multivariantes;
- cambios de base ortogonales.

### Caso ortogonal

Si

$$
A
$$

es ortogonal, la transformacion preserva longitudes euclideas y solo reorienta la nube. En ese caso la matriz de covarianza se diagonaliza si el sistema de ejes coincide con direcciones principales.

## Matriz de correlacion y variables estandarizadas

La matriz de covarianza conserva las unidades fisicas de cada coordenada. Eso es bueno para propagacion de errores, pero no siempre para comparar intensidad de dependencia entre variables medidas en escalas distintas.

### Estandarizacion

Supongamos que

$$
\sigma_i^2=\operatorname{Var}(X_i)>0
$$

para todo

$$
i.
$$

Definimos la matriz diagonal de desviaciones tipicas

$$
D=\operatorname{diag}(\sigma_1,\dots,\sigma_n)
$$

y el vector estandarizado

$$
Z=D^{-1}(X-E[X]).
$$

Entonces

$$
\operatorname{Cov}(Z)=D^{-1}\Sigma D^{-1}.
$$

Esa matriz se llama **matriz de correlacion** y suele denotarse por

$$
R.
$$

### Entradas de la matriz de correlacion

La entrada

$$
R_{ij}
$$

es

$$
R_{ij}
=
\frac{\Sigma_{ij}}{\sigma_i\sigma_j}
=
\rho(X_i,X_j).
$$

Por tanto:

- la diagonal de $R$ vale $1$;
- las entradas fuera de la diagonal son correlaciones de Pearson;
- $R$ es simetrica y semidefinida positiva.

### Lectura geometrica

La matriz de correlacion es la matriz de Gram de las coordenadas centradas y normalizadas en

$$
L^2.
$$

Por eso sus entradas miden angulos y alineamientos lineales despues de quitar escala y media.

### Advertencia

Si alguna varianza es cero, la estandarizacion falla en esa coordenada. Eso indica que la variable correspondiente es casi seguramente constante, y la correlacion clasica deja de ser el descriptor adecuado.

## Covarianza de sumas de muchas variables

Si

$$
S_n=X_1+\cdots+X_n,
$$

entonces

$$
\operatorname{Var}(S_n)
=
\sum_{i=1}^n \operatorname{Var}(X_i)
+
2\sum_{1\le i<j\le n}\operatorname{Cov}(X_i,X_j).
$$

Esta formula explica por que la dependencia cambia radicalmente el tamano de las fluctuaciones agregadas.

### Caso independiente

Si las variables son independientes, todas las covarianzas cruzadas se anulan y queda

$$
\operatorname{Var}(S_n)=\sum_{i=1}^n \operatorname{Var}(X_i).
$$

## Ley de la covarianza total

Si $Z$ es otra variable aleatoria y todo esta bien definido, vale la identidad

$$
\operatorname{Cov}(X,Y)
=
E[\operatorname{Cov}(X,Y\mid Z)]
+
\operatorname{Cov}(E[X\mid Z],E[Y\mid Z]).
$$

### Interpretacion

La covarianza total se descompone en:

- covariacion interna dentro de cada nivel de $Z$;
- covariacion inducida por el movimiento de las medias condicionales.

Esta formula es muy util en modelos jerarquicos y analisis de descomposicion de variabilidad.

## Version matricial de la ley total de la covarianza

Si

$$
X\in \mathbb{R}^n
$$

es un vector aleatorio cuadrado integrable y

$$
Z
$$

es otra variable o sub-$\sigma$-algebra, definimos la covarianza condicional matricial por

$$
\operatorname{Cov}(X\mid Z)
=
E\left[(X-E[X\mid Z])(X-E[X\mid Z])^T\mid Z\right].
$$

Entonces vale

$$
\operatorname{Cov}(X)
=
E[\operatorname{Cov}(X\mid Z)]
+
\operatorname{Cov}(E[X\mid Z]).
$$

### Lectura

La dispersion total se descompone en:

- dispersion promedio dentro de cada nivel de $Z$;
- dispersion de las medias condicionales al moverse $Z$.

Es la version multivariante exacta de la ley total de la varianza.

### Recuperacion del caso escalar y bivariante

Si

$$
X=(X_1,X_2)^T,
$$

la entrada

$$
(1,2)
$$

de la identidad anterior produce precisamente la ley total de la covarianza para el par

$$
(X_1,X_2).
$$

### Aplicacion conceptual

En modelos con grupos, efectos aleatorios o mezclas, esta formula separa lo que varia dentro de cada subpoblacion de lo que varia entre subpoblaciones. Esa distincion es decisiva para no confundir heterogeneidad estructural con ruido interno.

## Covarianza muestral

Dada una muestra bivariante

$$
(x_1,y_1),\dots,(x_n,y_n),
$$

la covarianza muestral suele definirse por

$$
s_{XY}
=
\frac{1}{n-1}\sum_{i=1}^n (x_i-\bar x)(y_i-\bar y).
$$

Es el estimador natural de la covarianza poblacional y ocupa el lugar central en la estadistica descriptiva bivariante.

## Ejemplo 3: covarianza positiva

Supongamos que

$$
Y=2X+3
$$

y que $X$ tiene varianza positiva.

Entonces

$$
\operatorname{Cov}(X,Y)
=
\operatorname{Cov}(X,2X+3)
=
2\operatorname{Var}(X)
>
0.
$$

La dependencia lineal positiva se refleja exactamente en la covarianza.

## Ejemplo 4: suma y diferencia

Sea

$$
U=X+Y,
\qquad
V=X-Y.
$$

Entonces

$$
\operatorname{Cov}(U,V)
=
\operatorname{Cov}(X+Y,X-Y)
=
\operatorname{Var}(X)-\operatorname{Var}(Y),
$$

siempre que los terminos esten definidos y usando la simetria de la covarianza.

Este calculo muestra como la bilinealidad simplifica transformaciones lineales.

## Error comun 1: covarianza cero significa independencia

Falso en general. Solo es cierto en clases especiales, por ejemplo dentro de ciertos modelos gaussianos.

## Error comun 2: comparar magnitudes de covarianza entre escalas distintas

La covarianza depende de las unidades. Si cambias metros por centimetros o segundos por minutos, la covarianza cambia. Para comparar intensidad lineal entre variables con escalas distintas conviene la correlacion.

## Error comun 3: usar correlacion para detectar cualquier dependencia

Tampoco. Una relacion curvada o simetrica puede tener correlacion cero y dependencia fuerte.

## Practica guiada

### Ejercicio 1

Demuestra que

$$
\operatorname{Cov}(X,X+Y)=\operatorname{Var}(X)+\operatorname{Cov}(X,Y).
$$

#### Solucion

Por bilinealidad,

$$
\operatorname{Cov}(X,X+Y)
=
\operatorname{Cov}(X,X)+\operatorname{Cov}(X,Y)
=
\operatorname{Var}(X)+\operatorname{Cov}(X,Y).
$$

### Ejercicio 2

Explica por que si $Y=X^2$ y $X$ es simetrica alrededor de $0$, la covarianza puede ser cero aunque haya dependencia total.

#### Solucion

Porque la covarianza solo capta el componente lineal. En distribuciones simetricas,

$$
E[X^3]
$$

puede anularse, haciendo

$$
\operatorname{Cov}(X,X^2)=0
$$

aunque $X^2$ este completamente determinado por $X$.

### Ejercicio 3

Que significa que la matriz de covarianza sea semidefinida positiva?

#### Solucion

Que toda combinacion lineal de las componentes tiene varianza no negativa:

$$
\operatorname{Var}(u^TX)=u^T\Sigma u\ge 0.
$$

## Cierre

La covarianza es la bisagra entre probabilidad univariante y multivariante. Su importancia no se limita a "decir si dos variables van juntas": organiza algebraicamente:

- la varianza de sumas;
- la correlacion;
- las matrices de dispersion;
- la geometria de vectores aleatorios;
- la diferencia entre dependencia lineal y dependencia general.

Entender bien esta pagina evita dos errores frecuentes: pedirle demasiado a la covarianza y, al mismo tiempo, subestimar lo estructural que realmente es.
