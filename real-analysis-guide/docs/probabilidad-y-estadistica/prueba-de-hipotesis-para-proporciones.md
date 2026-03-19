---
title: Prueba de hipotesis para proporciones
description: Contrastes para una proporcion binomial, prueba z aproximada, prueba exacta binomial, valor-p e interpretacion inferencial.
---

# Prueba de hipotesis para proporciones

## El modelo basico

Sea

$$
X_1,\dots,X_n
$$

una muestra i.i.d. de variables Bernoulli con parametro

$$
p=P(X_i=1).
$$

Equivalentemente, el numero total de exitos

$$
S=\sum_{i=1}^n X_i
$$

sigue una distribucion

$$
S\sim \operatorname{Bin}(n,p).
$$

La proporcion muestral es

$$
\hat p=\frac{S}{n}.
$$

Queremos contrastar una afirmacion sobre $p$.

## Formas tipicas de las hipotesis

### Bilateral

$$
H_0:p=p_0,
\qquad
H_1:p\ne p_0.
$$

### Unilateral derecha

$$
H_0:p=p_0,
\qquad
H_1:p>p_0.
$$

### Unilateral izquierda

$$
H_0:p=p_0,
\qquad
H_1:p<p_0.
$$

En muchos contextos tambien se escriben hipotesis compuestas como

$$
H_0:p\le p_0
\qquad\text{frente a}\qquad
H_1:p>p_0,
$$

pero la construccion operacional de la prueba suele apoyarse en el borde $p=p_0$.

## Aproximacion normal bajo la nula

Bajo $H_0:p=p_0$,

$$
E(\hat p)=p_0,
\qquad
\operatorname{Var}(\hat p)=\frac{p_0(1-p_0)}{n}.
$$

Cuando $n$ es suficientemente grande,

$$
Z=
\frac{\hat p-p_0}{\sqrt{p_0(1-p_0)/n}}
\approx
N(0,1).
$$

### Observacion importante

En el denominador aparece

$$
p_0,
$$

no $\hat p$. La razon es conceptual: estamos midiendo la dispersion del estadistico bajo la hipotesis nula.

## Regiones criticas

### Bilateral

Se rechaza $H_0$ al nivel $\alpha$ si

$$
|Z|>z_{\alpha/2}.
$$

### Unilateral derecha

Se rechaza si

$$
Z>z_\alpha.
$$

### Unilateral izquierda

Se rechaza si

$$
Z<-z_\alpha.
$$

## Valor-p

Una vez calculado $z_{\mathrm{obs}}$, el valor-p se obtiene con la normal estandar:

- prueba derecha:

$$
p=P(Z\ge z_{\mathrm{obs}});
$$

- prueba izquierda:

$$
p=P(Z\le z_{\mathrm{obs}});
$$

- prueba bilateral:

$$
p=2P(Z\ge |z_{\mathrm{obs}}|).
$$

## Ejemplo 1: control de calidad

Un fabricante afirma que la proporcion de piezas defectuosas es

$$
p_0=0.02.
$$

En una muestra de

$$
n=500
$$

se observan

$$
S=18
$$

defectuosas.

Queremos contrastar

$$
H_0:p=0.02,
\qquad
H_1:p>0.02.
$$

### Paso 1: proporcion muestral

$$
\hat p=\frac{18}{500}=0.036.
$$

### Paso 2: estadistico

$$
z_{\mathrm{obs}}
=
\frac{0.036-0.02}{\sqrt{0.02\cdot 0.98/500}}
\approx
2.556.
$$

### Paso 3: decision

Al nivel $0.05$, el punto critico unilateral es

$$
z_{0.05}\approx 1.645.
$$

Como

$$
2.556>1.645,
$$

se rechaza $H_0$.

### Paso 4: valor-p

$$
p=P(Z\ge 2.556)\approx 0.0053.
$$

Hay evidencia fuerte de que la proporcion de defectos supera el $2\%$.

## Ejemplo 2: prueba bilateral

Una encuesta electoral contrasta

$$
H_0:p=0.50,
\qquad
H_1:p\ne 0.50.
$$

Con

$$
n=400,
\qquad
S=224,
$$

obtenemos

$$
\hat p=0.56.
$$

El estadistico es

$$
z_{\mathrm{obs}}
=
\frac{0.56-0.50}{\sqrt{0.5\cdot 0.5/400}}
=
\frac{0.06}{0.025}
=
2.4.
$$

El valor-p bilateral es

$$
p=2P(Z\ge 2.4)\approx 0.0164.
$$

Se rechaza al $5\%$, pero no al $1\%$.

## Exactitud y prueba binomial exacta

La aproximacion normal funciona bien en muchos contextos, pero no siempre. Cuando:

- $n$ es pequeno;
- $p_0$ esta cerca de $0$ o de $1$;
- el numero esperado de exitos o fracasos es bajo;

conviene usar la prueba binomial exacta.

### Idea de la prueba exacta

Bajo

$$
H_0:p=p_0,
$$

el numero de exitos $S$ tiene ley binomial exacta. El valor-p se calcula directamente a partir de esa distribucion.

#### Cola derecha

Si la alternativa es $p>p_0$,

$$
p\text{-valor}=P_{p_0}(S\ge s_{\mathrm{obs}}).
$$

#### Cola izquierda

Si la alternativa es $p<p_0$,

$$
p\text{-valor}=P_{p_0}(S\le s_{\mathrm{obs}}).
$$

#### Bilateral

La version bilateral requiere mas cuidado, porque la nocion de "tan extremo o mas extremo" no siempre coincide con doblar una cola en distribuciones discretas.

### Sutileza bilateral real

En el caso discreto pueden coexistir varias definiciones razonables de valor-p bilateral:

- doblar la cola menor cuando la ley es aproximadamente simetrica;
- sumar probabilidades de resultados con probabilidad nula menor o igual que la observada;
- usar una version mid-p.

### Lectura

No son identicas. Por eso, en pruebas exactas binomiales, conviene declarar que definicion bilateral se esta usando y no tratar el valor-p como si fuera una cantidad canonica absoluta.

## Monotone likelihood ratio y optimalidad en una cola

La familia binomial posee una estructura de razon de verosimilitudes monotona en el numero de exitos

$$
S.
$$

### Lectura

Eso significa que, para contrastes de una cola como

$$
H_0:p\le p_0
\qquad\text{vs}\qquad
H_1:p>p_0,
$$

las regiones criticas del tipo

$$
S\ge c
$$

no son solo intuitivas: son las naturales desde el punto de vista de Neyman-Pearson y Karlin-Rubin.

### Moral

En una cola, la prueba binomial exacta basada en extremos de

$$
S
$$

no es una convencion arbitraria. Es la forma estadisticamente privilegiada de usar la informacion del modelo.

## Ejemplo 3: muestra pequena

Supongamos

$$
n=12,
\qquad
S=0,
$$

y queremos contrastar

$$
H_0:p=0.20,
\qquad
H_1:p<0.20.
$$

### Prueba exacta

El valor-p es

$$
P_{0.20}(S=0)=0.8^{12}\approx 0.0687.
$$

No se rechaza al $5\%$.

### Comentario

Una aproximacion normal aqui seria poco fiable porque

$$
np_0=2.4
$$

es demasiado pequeno.

## Condiciones practicas para la aproximacion z

Una regla comun es pedir

$$
np_0\ge 10,
\qquad
n(1-p_0)\ge 10.
$$

Algunos textos usan umbrales menos estrictos, pero el mensaje es el mismo: si bajo la nula se esperan muy pocos exitos o fracasos, la aproximacion normal pierde calidad.

## Error comun: usar \hat p en el error estandar de la prueba

En intervalos de confianza es habitual ver

$$
\sqrt{\frac{\hat p(1-\hat p)}{n}},
$$

pero en el contraste bajo

$$
H_0:p=p_0
$$

el error estandar correcto para la estadistica z es

$$
\sqrt{\frac{p_0(1-p_0)}{n}}.
$$

La razon es que el contraste evalua cuan compatible es la muestra con el modelo nulo.

## Prueba score e inversion de intervalos

La prueba z para una proporcion puede entenderse como una prueba score para el parametro binomial. Su inversion produce intervalos tipo Wilson, no el intervalo de Wald.

Esto es importante porque explica una aparente paradoja pedagogica:

- muchos cursos ensenan el test z;
- luego construyen el intervalo de Wald;
- pero el intervalo naturalmente asociado al test score es Wilson.

Entender esta diferencia ayuda a no mezclar procedimientos que no encajan exactamente.

### Lectura desde la verosimilitud

Para una muestra binomial, el logaritmo de la verosimilitud es

$$
\ell(p)=S\log p+(n-S)\log(1-p)+\text{constante}.
$$

La derivada score es

$$
U(p)=\frac{S}{p}-\frac{n-S}{1-p}.
$$

Evaluada en

$$
p_0,
$$

y normalizada por la informacion de Fisher

$$
I(p_0)=\frac{n}{p_0(1-p_0)},
$$

produce exactamente la estadistica

$$
\frac{\hat p-p_0}{\sqrt{p_0(1-p_0)/n}}.
$$

Eso muestra que la prueba z no es solo una aproximacion ad hoc, sino la version score natural del contraste binomial.

## Wald, score y razon de verosimilitudes

En grandes muestras aparecen tres familias clasicas de estadisticos:

- Wald;
- score;
- razon de verosimilitudes.

### Lectura

Para proporciones:

- Wald enchufa directamente el estimador en una expansion local;
- score evalua la pendiente de la log-verosimilitud en la nula;
- la razon de verosimilitudes compara ajuste restringido y no restringido.

En regimen asintotico suelen ser cercanos, pero en muestra moderada el score suele comportarse mejor que Wald. Esta es una de las razones por las que la teoria moderna prefiere score/Wilson antes que Wald.

## Correccion de continuidad en la prueba z

Cuando se insiste en aproximar la binomial por una normal, puede introducirse una correccion de continuidad.

### Ejemplo de cola derecha

En vez de usar directamente

$$
S\ge s_{\mathrm{obs}},
$$

se aproxima

$$
P(S\ge s_{\mathrm{obs}})
$$

por

$$
P\left(
N(np_0,np_0(1-p_0))\ge s_{\mathrm{obs}}-\frac12
\right).
$$

### Comentario

No reemplaza a la prueba exacta, pero ayuda a entender como se conecta la discrecion binomial con la aproximacion continua.

## Potencia del contraste

Bajo una alternativa $p=p_1$, la potencia aproximada de una prueba unilateral derecha puede estimarse con la distribucion de

$$
\hat p\approx N\left(p_1,\frac{p_1(1-p_1)}{n}\right).
$$

Esto permite responder preguntas de diseno:

- cuanto tamano muestral necesito para detectar que $p$ supera cierto umbral;
- que tan probable es rechazar si el valor real es $p_1$.

### Aproximacion explicita

Si la regla es rechazar cuando

$$
Z>z_\alpha,
$$

entonces, bajo

$$
p=p_1,
$$

puede aproximarse la potencia por

$$
P_{p_1}\left(
\hat p>
p_0+z_\alpha\sqrt{\frac{p_0(1-p_0)}{n}}
\right),
$$

usando una normal con media

$$
p_1
$$

y varianza

$$
\frac{p_1(1-p_1)}{n}.
$$

### Lectura

La potencia mejora cuando

- 
$$
p_1
$$

esta mas alejado de

$$
p_0;
$$
- 
$$
n
$$

es mayor;
- el nivel

$$
\alpha
$$

es menos severo.

Por eso un no rechazo puede ser simple falta de sensibilidad y no necesariamente apoyo real a la nula.

## Tamano muestral aproximado

Si queremos un margen de error $E$ para estimacion, aparece la formula conocida

$$
n\approx \frac{z_{\alpha/2}^2p(1-p)}{E^2}.
$$

En contraste, formulas parecidas permiten dimensionar la muestra para una potencia deseada. El mensaje comun es que el parametro binomial no solo afecta la media, sino tambien la varianza.

## Transformacion estabilizadora de varianza

La proporcion muestral

$$
\hat p
$$

tiene varianza

$$
\frac{p(1-p)}{n},
$$

que depende del propio parametro. Una forma clasica de suavizar esa dependencia es la transformacion arco seno:

$$
\theta=2\arcsin(\sqrt p).
$$

### Lectura

En esa escala, la variabilidad se vuelve aproximadamente mas uniforme para muestras grandes. Historicamente esto fue util para construir aproximaciones mas estables cerca de los bordes

$$
p\approx 0
\qquad\text{o}\qquad
p\approx 1.
$$

### Regla de diseno para contraste unilateral

Si se quiere detectar

$$
p_1>p_0
$$

con nivel

$$
\alpha
$$

y potencia aproximada

$$
1-\beta,
$$

una cuenta normal lleva a una condicion del tipo

$$
n
\approx
\frac{\left(
z_\alpha\sqrt{p_0(1-p_0)}+
z_\beta\sqrt{p_1(1-p_1)}
\right)^2}{(p_1-p_0)^2}.
$$

No es exacta, pero es una guia muy util para planificacion.

## Relacion con intervalos de confianza

En el caso bilateral, la decision de rechazar o no un valor hipotetico $p_0$ al nivel $\alpha$ se relaciona con si $p_0$ cae o no en un intervalo de confianza de nivel $1-\alpha$ construido de forma compatible con la prueba.

Si la prueba es score, el intervalo compatible es Wilson. Si se usa la prueba exacta binomial, el intervalo compatible es Clopper-Pearson.

## Ejemplo 4: lectura sustantiva

Un hospital quiere demostrar que la proporcion de recuperacion supera el $80\%$. En una muestra de $150$ pacientes, $129$ se recuperan.

Entonces

$$
\hat p=0.86.
$$

Contrastamos

$$
H_0:p=0.80,
\qquad
H_1:p>0.80.
$$

El estadistico es

$$
z_{\mathrm{obs}}
=
\frac{0.86-0.80}{\sqrt{0.8(0.2)/150}}
\approx
1.837.
$$

El valor-p unilateral es aproximadamente

$$
0.033.
$$

Se rechaza al $5\%$. Sin embargo, la conclusion sustantiva no debe quedarse en el valor-p:

- el efecto observado es de $6$ puntos porcentuales;
- hay que mirar tambien el intervalo de confianza;
- conviene juzgar si esa mejora es clinicamente relevante.

## Practica guiada

### Ejercicio 1

En una muestra de tamano

$$
n=200
$$

se observan

$$
S=84
$$

exitos. Contrasta

$$
H_0:p=0.50
\qquad\text{vs}\qquad
H_1:p<0.50.
$$

#### Solucion

Se tiene

$$
\hat p=0.42.
$$

Luego

$$
z_{\mathrm{obs}}
=
\frac{0.42-0.50}{\sqrt{0.5\cdot 0.5/200}}
=
\frac{-0.08}{0.03536}
\approx
-2.263.
$$

El valor-p unilateral es

$$
P(Z\le -2.263)\approx 0.0118.
$$

Se rechaza al $5\%$.

### Ejercicio 2

Explica por que, con

$$
n=15,\qquad p_0=0.05,
$$

la prueba exacta binomial es preferible a la prueba z.

#### Solucion

Porque

$$
np_0=0.75
$$

es demasiado pequeno. La aproximacion normal no representa bien la distribucion binomial en ese regimen.

### Ejercicio 3

Un software reporta un valor-p de $0.04$ para una prueba bilateral de proporcion. Que significa exactamente?

#### Solucion

Significa que, si $H_0$ fuera cierta, la probabilidad de obtener una proporcion muestral tan extrema como la observada o mas, en el sentido bilateral pertinente, seria aproximadamente $0.04$.

## Cierre

Las pruebas para proporciones son un ejemplo excelente de la tension entre metodos aproximados y exactos.

- La prueba z es simple y potente cuando la muestra es suficientemente grande.
- La prueba exacta binomial es mas fiel en muestras pequenas o cerca del borde.
- La interpretacion correcta exige distinguir entre significacion estadistica, magnitud del efecto y calidad de la aproximacion.

Si se entiende eso, este tema deja de ser una receta de tabla normal y pasa a ser un caso serio de inferencia sobre distribuciones discretas.
