---
title: Intervalos de confianza para muestras grandes
description: Intervalos para medias con aproximacion normal, teorema central del limite, margen de error y tamano muestral.
---

# Intervalos de confianza para muestras grandes

## Idea central

Un intervalo de confianza no es una afirmacion probabilistica sobre el parametro ya fijado, sino sobre el procedimiento aleatorio que produce el intervalo.

En el caso de muestras grandes, la herramienta principal es la aproximacion normal derivada del teorema central del limite.

## Planteamiento

Sean

$$
X_1,\dots,X_n
$$

iid con

$$
E[X_i]=\mu,
\qquad
\operatorname{Var}(X_i)=\sigma^2<\infty.
$$

La media muestral es

$$
\overline X_n=\frac1n\sum_{i=1}^n X_i.
$$

Para

$$
n
$$

grande,

$$
\frac{\sqrt n(\overline X_n-\mu)}{\sigma}
\Rightarrow N(0,1).
$$

## De donde sale el intervalo

La idea es construir un **pivote**, es decir, una cantidad cuya distribucion no dependa del parametro desconocido o dependa de manera controlada.

En este caso, aproximadamente,

$$
Z=\frac{\overline X_n-\mu}{\sigma/\sqrt n}
$$

tiene distribucion normal estandar.

### Lectura

Si conocemos cuantiles de

$$
N(0,1),
$$

podemos aislar

$$
\mu
$$

y fabricar una banda aleatoria que lo capture con frecuencia controlada.

## Intervalo con varianza conocida

Si

$$
\sigma
$$

es conocida, para un nivel

$$
1-\alpha
$$

se usa

$$
P\left(
-z_{\alpha/2}\le
\frac{\overline X_n-\mu}{\sigma/\sqrt n}
\le z_{\alpha/2}
\right)\approx 1-\alpha.
$$

Despejando

$$
\mu,
$$

obtenemos el intervalo

$$
\overline X_n \pm z_{\alpha/2}\frac{\sigma}{\sqrt n}.
$$

## Interpretacion correcta

Si repitieramos el muestreo muchas veces y construyeramos el intervalo con la misma receta, aproximadamente una fraccion

$$
1-\alpha
$$

de esos intervalos contendria al verdadero valor de

$$
\mu.
$$

No debe leerse como:

"la probabilidad de que

$$
\mu
$$

este en este intervalo observado es

$$
1-\alpha.
$$

".

### Por que esa lectura es incorrecta

En la formulacion clasica, el parametro

$$
\mu
$$

es fijo y el intervalo es aleatorio antes de observar los datos. La probabilidad recae sobre el procedimiento, no sobre el parametro.

## Intervalo con varianza desconocida y muestra grande

En la practica se reemplaza

$$
\sigma
$$

por la desviacion muestral

$$
S.
$$

Entonces se usa el intervalo asintotico

$$
\overline X_n \pm z_{\alpha/2}\frac{S}{\sqrt n}.
$$

Esto es valido bajo hipotesis amplias cuando

$$
n
$$

es suficientemente grande y no hay colas excesivamente pesadas.

### Comentario

Para muestras chicas y normalidad poblacional, lo correcto deja de ser

$$
z
$$

y pasa a ser

$$
t
$$

de Student. Aqui estamos en el regimen de gran muestra, donde la normalidad asintotica domina.

## Margen de error

La cantidad

$$
E=z_{\alpha/2}\frac{\sigma}{\sqrt n}
$$

o su version estimada

$$
z_{\alpha/2}\frac{S}{\sqrt n}
$$

se llama **margen de error**.

### Lectura

El intervalo puede escribirse como

$$
\text{estimador} \pm \text{margen de error}.
$$

Esto separa dos piezas:

- el centro, dado por el estimador;
- la incertidumbre, dada por el error estandar multiplicado por un cuantil.

## Error estandar

El error estandar de la media muestral es

$$
\operatorname{EE}(\overline X_n)=\frac{\sigma}{\sqrt n},
$$

o su estimacion

$$
\frac{S}{\sqrt n}.
$$

### Consecuencia

La precision mejora como

$$
n^{-1/2}.
$$

Duplicar precision no significa duplicar muestra; significa cuadruplicarla.

## Ejemplo 1

Supongamos

$$
n=100,
\qquad
\overline x=52,
\qquad
\sigma=10.
$$

Para un nivel de confianza del

$$
95\%
$$

tomamos

$$
z_{0.025}\approx 1.96.
$$

El margen de error es

$$
1.96\cdot \frac{10}{10}=1.96.
$$

El intervalo es

$$
[50.04,53.96].
$$

## Ejemplo 2 con varianza desconocida

Supongamos

$$
n=144,
\qquad
\overline x=18.5,
\qquad
s=3.6.
$$

Al

$$
95\%
$$

usamos

$$
1.96
$$

y obtenemos

$$
\operatorname{EE}\approx \frac{3.6}{12}=0.3.
$$

El margen de error es

$$
1.96(0.3)=0.588.
$$

Luego el intervalo es

$$
[17.912,19.088].
$$

## Intervalos unilaterales

Tambien se usan versiones de una sola cota.

### Cota inferior

$$
\mu \gtrsim \overline X_n-z_\alpha\frac{\sigma}{\sqrt n}.
$$

### Cota superior

$$
\mu \lesssim \overline X_n+z_\alpha\frac{\sigma}{\sqrt n}.
$$

Son apropiadas cuando el problema exige control solo por un lado, por ejemplo:

- garantizar que una media sea al menos cierto umbral;
- certificar que una contaminacion no supera cierto limite.

## Tamano muestral

Si se desea un margen de error maximo

$$
E,
$$

se impone

$$
z_{\alpha/2}\frac{\sigma}{\sqrt n}\le E.
$$

Despejando:

$$
n\ge \left(\frac{z_{\alpha/2}\sigma}{E}\right)^2.
$$

## Ejemplo 3

Si

$$
\sigma=12,
$$

se busca un nivel del

$$
95\%
$$

y un margen no mayor que

$$
2,
$$

entonces

$$
n\ge \left(\frac{1.96\cdot 12}{2}\right)^2
=138.2976.
$$

Por tanto conviene tomar

$$
n=139.
$$

### Lectura

El tamano muestral se redondea hacia arriba porque se necesita garantizar, no solo aproximar, el margen deseado.

## Cobertura nominal y cobertura real

El nivel declarado

$$
1-\alpha
$$

es la **cobertura nominal**.

La cobertura real puede diferir debido a:

- aproximacion asintotica;
- sesgo;
- dependencia;
- errores de modelo;
- colas pesadas o asimetria pronunciada.

## Berry-Esseen y velocidad de aproximacion

El TCL dice que la normalidad aparece asintoticamente, pero no dice cuan rapido. Una guia teorica viene del tipo de cotas Berry-Esseen: bajo momentos de orden tres finitos, la distancia entre la distribucion estandarizada y la normal decrece del orden

$$
n^{-1/2}.
$$

### Lectura

No hace falta usar la constante exacta para aprovechar la idea: poblaciones mas asimetricas y con colas mas pesadas requieren muestras mas grandes para que la aproximacion normal sea fina.

## Cuando falla la aproximacion normal

La receta de muestra grande puede fallar si:

- la muestra es pequena;
- hay asimetria muy fuerte;
- la varianza es infinita;
- existen outliers dominantes;
- los datos no son independientes.

En esos casos conviene usar:

- teoria exacta normal con

$$
t
$$

de Student;
- metodos robustos;
- bootstrap;
- modelos especificos;
- transformaciones de la variable.

## Comentario sobre independencia

La formula clasica del error estandar descansa en independencia muestral. Si los datos estan correlacionados, el intervalo puede quedar artificialmente estrecho y dar una falsa sensacion de precision.

### Ejemplo conceptual

Si se miden repetidamente observaciones casi duplicadas de un mismo fenomeno, el numero

$$
n
$$

puede ser grande pero la informacion efectiva pequena.

## Tamano efectivo de muestra

Esta observacion puede formalizarse con la idea de **tamano efectivo de muestra**: no siempre importa cuantas observaciones hay en bruto, sino cuanta informacion independiente contienen realmente.

### Lectura

En datos correlacionados, clusterizados o seriales, el

$$
n
$$

nominal puede sobreestimar mucho la precision real del intervalo.

## Comentario sobre asimetria

El TCL no dice que cualquier muestra finita ya sea casi normal. Dice que la distribucion estandarizada de la media se aproxima a una normal cuando

$$
n\to\infty.
$$

### Consecuencia practica

En poblaciones muy asimetricas, "muestra grande" puede requerir un

$$
n
$$

mucho mayor que en casos aproximadamente simetricos.

## Version general asintotica

Bajo condiciones regulares mas generales, muchos estimadores satisfacen

$$
\sqrt n(\widehat \theta_n-\theta)\Rightarrow N(0,V(\theta)).
$$

Entonces un intervalo asintotico para

$$
\theta
$$

toma la forma

$$
\widehat \theta_n \pm z_{\alpha/2}\sqrt{\frac{\widehat V}{n}}.
$$

### Importancia

Esto muestra que la teoria de intervalos de confianza no gira solo alrededor de la media, sino alrededor de estimadores asintoticamente normales.

## Metodo delta e intervalos para funciones del parametro

Si el estimador base es asintoticamente normal y queremos inferir sobre

$$
g(\theta),
$$

el metodo delta produce

$$
g(\widehat\theta_n)\pm z_{\alpha/2}\sqrt{\frac{\widehat V (g'(\widehat\theta_n))^2}{n}}.
$$

### Lectura

Esto permite construir intervalos grandes muestra para razones, logaritmos, odds, riesgos relativos y muchas otras funciones derivadas sin rehacer toda la teoria desde cero.

## Ejemplo 4: tiempo medio de respuesta

Una muestra grande de tiempos de respuesta produce

$$
n=225,
\qquad
\overline x=1.84,
\qquad
s=0.60.
$$

El error estandar estimado es

$$
\frac{0.60}{15}=0.04.
$$

El intervalo asintotico al

$$
95\%
$$

es

$$
1.84\pm 1.96(0.04)=1.84\pm 0.0784,
$$

esto es

$$
[1.7616,1.9184].
$$

## Relacion con pruebas de hipotesis

En el caso bilateral, un valor hipotetico

$$
\mu_0
$$

queda rechazado al nivel

$$
\alpha
$$

si y solo si no pertenece al intervalo de confianza

$$
1-\alpha.
$$

Esta dualidad es esencial en teoria estadistica.

## Flujo de trabajo digerible

1. Verificar que el esquema de gran muestra sea razonable.
2. Calcular el estimador central

$$
\overline x.
$$

3. Calcular el error estandar.
4. Elegir el nivel

$$
1-\alpha.
$$

5. Tomar el cuantil normal correspondiente.
6. Formar

$$
\overline x \pm \text{cuantil}\times \text{error estandar}.
$$

7. Interpretar el resultado en terminos de precision del procedimiento.

## Practica guiada

### Problema 1

Una muestra de tamano

$$
n=400
$$

da

$$
\overline x=72,
\qquad
s=16.
$$

Construir un intervalo al

$$
95\%.
$$

#### Idea

Calcular

$$
\frac{16}{20}=0.8
$$

y luego multiplicar por

$$
1.96.
$$

### Problema 2

Que tamano muestral se necesita si

$$
\sigma=5
$$

y se desea un margen de error no mayor que

$$
0.5
$$

al

$$
95\%?
$$

#### Idea

Usar

$$
n\ge \left(\frac{1.96\cdot 5}{0.5}\right)^2.
$$

### Problema 3

Explicar por que un intervalo muy estrecho puede seguir siendo enganoso si los datos no son independientes.

#### Idea conceptual

Porque el error estandar calculado con independencia subestima la variabilidad real.

## Errores frecuentes

- Interpretar el nivel de confianza como probabilidad posterior del parametro.
- Usar la formula de gran muestra con

$$
n
$$

pequeno sin revisar la distribucion.
- Olvidar que el error estandar depende de independencia y varianza finita.
- Confundir margen de error con desviacion estandar de los datos.
- Tomar cobertura nominal como garantia exacta en cualquier modelo.

## Cierre

Los intervalos de confianza para muestras grandes son el primer gran uso operativo del teorema central del limite. Su fortaleza radica en su generalidad; su debilidad, en que esa generalidad depende de condiciones que deben verificarse y no asumirse mecanicamente. Bien entendidos, ensenan a leer la inferencia como control cuantitativo de incertidumbre y no como simple produccion de rangos numericos.
