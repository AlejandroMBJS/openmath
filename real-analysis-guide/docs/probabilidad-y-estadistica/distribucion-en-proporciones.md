---
title: Distribucion en proporciones
description: Proporcion muestral, distribucion exacta y asintotica, error estandar, aproximacion normal y relacion con inferencia sobre proporciones.
---

# Distribucion en proporciones

## Del conteo de exitos a la proporcion observada

Cuando cada observacion registra exito o fracaso, el parametro natural del modelo es la proporcion poblacional

$$
p.
$$

La cantidad observable asociada es la proporcion muestral

$$
\hat p.
$$

Este estadistico aparece constantemente en:

- encuestas;
- control de calidad;
- bioestadistica;
- fiabilidad;
- experimentos Bernoulli.

## Modelo Bernoulli

Supongamos que

$$
X_1,\dots,X_n
$$

son variables aleatorias independientes con

$$
X_i\sim \operatorname{Bernoulli}(p),
$$

es decir,

$$
P(X_i=1)=p,
\qquad
P(X_i=0)=1-p.
$$

La suma

$$
S_n=X_1+\cdots+X_n
$$

cuenta el numero de exitos y satisface

$$
S_n\sim \operatorname{Bin}(n,p).
$$

Definimos la proporcion muestral por

$$
\hat p=\frac{S_n}{n}.
$$

## Distribucion exacta

Como

$$
S_n
$$

toma valores

$$
0,1,\dots,n,
$$

la proporcion muestral toma valores en

$$
\left\{0,\frac1n,\frac2n,\dots,\frac{n}{n}\right\}.
$$

### Proposicion 1

Para

$$
k=0,\dots,n,
$$

se cumple

$$
P\left(\hat p=\frac{k}{n}\right)
=
\binom{n}{k}p^k(1-p)^{n-k}.
$$

#### Demostracion

Es inmediata a partir de la identidad

$$
\hat p=\frac{S_n}{n}.
$$

## Esperanza y varianza

### Teorema 2

La proporcion muestral satisface

$$
E[\hat p]=p,
$$

y

$$
\operatorname{Var}(\hat p)=\frac{p(1-p)}{n}.
$$

#### Demostracion

Por linealidad,

$$
E[\hat p]
=
\frac1n\sum_{i=1}^n E[X_i]
=
\frac{np}{n}
=
p.
$$

Por independencia,

$$
\operatorname{Var}(\hat p)
=
\operatorname{Var}\left(\frac1n\sum_{i=1}^n X_i\right)
=
\frac1{n^2}\sum_{i=1}^n \operatorname{Var}(X_i)
=
\frac{np(1-p)}{n^2}
=
\frac{p(1-p)}{n}.
$$

## Consecuencias

La proporcion muestral es:

- insesgada para $p$;
- consistente por la ley de los grandes numeros;
- con error tipico del orden

$$
n^{-1/2}.
$$

La desviacion estandar teorica es

$$
\sqrt{\frac{p(1-p)}{n}}.
$$

## Consistencia

Como

$$
\hat p=\frac1n\sum_{i=1}^n X_i
$$

es una media muestral de variables Bernoulli, por la ley de los grandes numeros:

$$
\hat p\to p
$$

casi seguramente y, en particular, en probabilidad.

### Comentario

Esto justifica usar $\hat p$ como estimador natural de la proporcion poblacional.

## Error estandar

El error estandar teorico de $\hat p$ es

$$
\sqrt{\frac{p(1-p)}{n}}.
$$

Como $p$ es desconocido, en la practica se reemplaza por $\hat p$ y se obtiene el error estandar estimado:

$$
\operatorname{EE}(\hat p)
=
\sqrt{\frac{\hat p(1-\hat p)}{n}}.
$$

### Comentario

Este reemplazo es razonable asintoticamente, pero puede ser inestable cerca de los bordes $0$ y $1$.

## Aproximacion normal

### Teorema 3

Si

$$
0<p<1,
$$

entonces

$$
\frac{\hat p-p}{\sqrt{p(1-p)/n}}
\Longrightarrow
N(0,1).
$$

#### Justificacion

Es una aplicacion directa del teorema central del limite a la media de variables Bernoulli.

## Regla practica para la aproximacion

La aproximacion normal suele ser razonable si

$$
np\ge 10,
\qquad
n(1-p)\ge 10.
$$

### Comentario

Estas no son condiciones necesarias exactas, sino una guia practica para evitar que la binomial quede demasiado pegada a los bordes.

## Ejemplo 1

En una muestra de

$$
n=400
$$

individuos, aparecen

$$
92
$$

respuestas afirmativas.

Entonces

$$
\hat p=\frac{92}{400}=0.23.
$$

Si el valor hipotetico fuera

$$
p=0.20,
$$

la desviacion tipica teorica seria

$$
\sqrt{\frac{0.2\cdot 0.8}{400}}=0.02.
$$

Por tanto

$$
z=\frac{0.23-0.20}{0.02}=1.5.
$$

La observacion queda a $1.5$ desviaciones tipicas del valor hipotetico.

## Relacion con intervalos de confianza

La aproximacion normal conduce al intervalo clasico para una proporcion:

$$
\hat p\pm z_{\alpha/2}\sqrt{\frac{\hat p(1-\hat p)}{n}}.
$$

### Comentario

Ese intervalo es el de Wald, que no siempre se comporta bien en muestras moderadas o cerca de los bordes. Por eso luego aparecen variantes como Wilson o Clopper-Pearson.

## Relacion con pruebas de hipotesis

Para contrastar

$$
H_0:p=p_0,
$$

la estadistica tipica es

$$
Z=\frac{\hat p-p_0}{\sqrt{p_0(1-p_0)/n}}.
$$

Observa el detalle:

- en intervalos se suele enchufar $\hat p$;
- en pruebas bajo $H_0$ se usa $p_0$ en el denominador.

Ese cambio no es decorativo; responde a dos problemas distintos.

## Distribucion bajo el borde

Si $p$ esta muy cerca de $0$ o de $1$, la distribucion de $\hat p$ es fuertemente asimetrica y la aproximacion normal puede ser pobre.

### Comentario

Este es uno de los motivos por los que la inferencia en proporciones exige mas cuidado que la inferencia sobre medias normales.

## Caso sin reemplazo y correccion finita

Si el muestreo se hace sin reemplazo desde una poblacion finita de tamano $N$, la varianza de la proporcion muestral incorpora el factor de correccion finita:

$$
\frac{N-n}{N-1}.
$$

### Comentario

Esto muestra que el modelo Bernoulli independiente es una idealizacion. Cuando la fraccion muestral es apreciable, el diseno real del muestreo importa.

## Ejemplo 2: encuesta grande

Si una encuesta de

$$
1000
$$

personas encuentra

$$
\hat p=0.57,
$$

el error estandar estimado es

$$
\sqrt{\frac{0.57(0.43)}{1000}}
\approx
0.0156.
$$

Una banda aproximada del $95\%$ alrededor del estimador es

$$
0.57\pm 1.96(0.0156),
$$

es decir aproximadamente

$$
0.57\pm 0.0306.
$$

## Distribucion del numero de exitos frente a la proporcion

Trabajar con

$$
S_n
$$

o con

$$
\hat p=\frac{S_n}{n}
$$

es esencialmente equivalente. La diferencia es de escala e interpretacion:

- $S_n$ cuenta;
- $\hat p$ normaliza y se interpreta directamente como proporcion.

## Maxima variabilidad

La varianza

$$
\frac{p(1-p)}{n}
$$

es maxima cuando

$$
p=\frac12.
$$

### Comentario

Esto significa que, para tamano muestral fijo, la incertidumbre sobre una proporcion es mayor cerca del $50\%$ y menor cerca de $0$ o $1$.

## Distribucion estandarizada

La estadistica

$$
\frac{\hat p-p}{\sqrt{p(1-p)/n}}
$$

es la version natural centrada y escalada de la proporcion. Su normalidad asintotica es la pieza que sostiene casi toda la inferencia clasica sobre proporciones.

## Error comun 1: usar la aproximacion normal con muestras pequenas

Si

$$
np
$$

o

$$
n(1-p)
$$

son pequenos, la aproximacion puede ser mala y conviene usar procedimientos exactos o score.

## Error comun 2: olvidar que p aparece en la varianza

A diferencia de muchas medias, aqui la dispersion depende del propio parametro desconocido.

## Error comun 3: confundir S_n con \hat p

El primero es un conteo entero. El segundo es una proporcion y vive en una malla de paso $1/n$ dentro de $[0,1]$.

## Practica guiada

### Ejercicio 1

Si

$$
n=200,\qquad \hat p=0.35,
$$

calcula el error estandar estimado.

#### Solucion

$$
\operatorname{EE}(\hat p)
=
\sqrt{\frac{0.35(0.65)}{200}}.
$$

### Ejercicio 2

Explica por que $\hat p$ es insesgado.

#### Solucion

Porque es la media de variables Bernoulli con esperanza $p$.

### Ejercicio 3

En que valor de $p$ es maxima la varianza de $\hat p$?

#### Solucion

En

$$
p=\frac12,
$$

porque el producto

$$
p(1-p)
$$

se maximiza alli.

## Cierre

La proporcion muestral es uno de los estadisticos mas importantes de toda la inferencia. Su relevancia viene de que resume, en un solo numero:

- el conteo de exitos;
- la escala relativa del fenomeno;
- y la puerta de entrada a pruebas e intervalos sobre proporciones.

Entender su distribucion exacta y asintotica es indispensable para que la inferencia binaria no se reduzca a recetas.
