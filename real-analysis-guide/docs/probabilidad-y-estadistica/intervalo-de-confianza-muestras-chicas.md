---
title: Intervalo de confianza para muestras chicas
description: Intervalos exactos bajo normalidad para la media y la varianza en muestras pequenas, distribuciones t y chi-cuadrado, y limites de la teoria.
---

# Intervalo de confianza para muestras chicas

## Por que el caso pequeno merece un tratamiento aparte

En muestras grandes, muchos intervalos de confianza se justifican por aproximaciones asintoticas. En muestras pequenas, esa salida puede ser pobre o directamente enganosa. Si ademas la varianza poblacional es desconocida, aparece un fenomeno clave:

- la dispersion debe estimarse con la propia muestra;
- esa estimacion introduce variabilidad extra;
- el pivote correcto ya no es normal, sino t de Student.

Por eso el caso de muestra pequena no es una simple version "mas precisa" del caso grande. Es una teoria distinta, con hipotesis mas fuertes y resultados exactos.

## Escenario clasico

Supondremos que

$$
X_1,\dots,X_n
$$

son i.i.d. con distribucion

$$
N(\mu,\sigma^2),
$$

donde $\mu$ y $\sigma^2$ son desconocidos.

Definimos:

$$
\bar X=\frac{1}{n}\sum_{i=1}^n X_i,
$$

$$
S^2=\frac{1}{n-1}\sum_{i=1}^n (X_i-\bar X)^2.
$$

## Los dos pivotes exactos fundamentales

La teoria exacta en muestra pequena descansa sobre dos hechos.

### Teorema 1

La media muestral satisface

$$
\bar X\sim N\left(\mu,\frac{\sigma^2}{n}\right).
$$

### Teorema 2

La varianza muestral verifica

$$
\frac{(n-1)S^2}{\sigma^2}\sim \chi^2_{n-1}.
$$

### Teorema 3

Bajo normalidad, $\bar X$ y $S^2$ son independientes.

### Comentario

La independencia entre media y varianza muestral es un rasgo especial de la familia normal. No es un hecho universal.

## De donde sale exactamente la t de Student

La estadistica t surge al combinar una parte normal estandarizada con una estimacion aleatoria de la escala.

Si definimos

$$
Z=\frac{\bar X-\mu}{\sigma/\sqrt n},
$$

entonces

$$
Z\sim N(0,1).
$$

Ademas,

$$
U=\frac{(n-1)S^2}{\sigma^2}\sim \chi^2_{n-1},
$$

y bajo normalidad

$$
Z
$$

y

$$
U
$$

son independientes. Por tanto

$$
T=\frac{Z}{\sqrt{U/(n-1)}}
=
\frac{\bar X-\mu}{S/\sqrt n}
$$

tiene distribucion

$$
t_{n-1}.
$$

### Lectura

La t de Student es una variable normal studentizada. Las colas mas pesadas codifican exactamente la incertidumbre adicional de reemplazar

$$
\sigma
$$

por

$$
S.
$$

## Por que aparecen

$$
n-1
$$

grados de libertad

La varianza muestral se construye con los residuos

$$
X_i-\bar X.
$$

Pero esos residuos satisfacen la restriccion

$$
\sum_{i=1}^n (X_i-\bar X)=0.
$$

Por eso solo hay

$$
n-1
$$

direcciones libres de variacion. Esa es la razon geometrica de los

$$
n-1
$$

grados de libertad en la chi-cuadrado y, en consecuencia, en la distribucion t.

## Intervalo exacto para la media

Combinando los hechos anteriores, obtenemos el pivote

$$
T=\frac{\bar X-\mu}{S/\sqrt n}\sim t_{n-1}.
$$

Entonces

$$
P\left(
-t_{\alpha/2,n-1}
\le
\frac{\bar X-\mu}{S/\sqrt n}
\le
t_{\alpha/2,n-1}
\right)
=
1-\alpha.
$$

Despejando $\mu$:

$$
\mu\in
\left[
\bar X-t_{\alpha/2,n-1}\frac{S}{\sqrt n},
\bar X+t_{\alpha/2,n-1}\frac{S}{\sqrt n}
\right].
$$

Ese es el intervalo bilateral exacto de nivel $1-\alpha$ para la media bajo normalidad.

## Lectura conceptual

El cambio de

$$
z_{\alpha/2}
$$

a

$$
t_{\alpha/2,n-1}
$$

no es un detalle cosmetico. Refleja la incertidumbre adicional causada por sustituir $\sigma$ por $S$. Las colas mas pesadas de la t representan precisamente esa informacion faltante.

## Ejemplo 1: media con muestra pequena

Supongamos:

$$
n=9,
\qquad
\bar x=14.2,
\qquad
s=1.8.
$$

Para un nivel de confianza del $95\%$ usamos

$$
t_{0.025,8}\approx 2.306.
$$

El error estandar es

$$
\frac{s}{\sqrt n}=\frac{1.8}{3}=0.6.
$$

Por tanto el margen de error es

$$
2.306\cdot 0.6=1.3836.
$$

El intervalo es

$$
[12.8164,15.5836].
$$

## Comparacion con el intervalo normal

Si alguien usara indebidamente la normal estandar, el margen seria

$$
1.96\cdot 0.6=1.176,
$$

menor que el correcto. La diferencia refleja exactamente el precio de desconocer $\sigma$ con una muestra tan pequena.

## Intervalos unilaterales para la media

A veces no interesa un intervalo bilateral, sino solo acotar por arriba o por abajo.

### Cota inferior de nivel 1-alpha

$$
\mu\ge
\bar X-t_{\alpha,n-1}\frac{S}{\sqrt n}.
$$

### Cota superior de nivel 1-alpha

$$
\mu\le
\bar X+t_{\alpha,n-1}\frac{S}{\sqrt n}.
$$

Estas cotas son utiles cuando interesa garantizar un rendimiento minimo o un techo maximo.

## Intervalo exacto para la varianza

Del pivote

$$
\frac{(n-1)S^2}{\sigma^2}\sim \chi^2_{n-1}
$$

deducimos

$$
P\left(
\chi^2_{1-\alpha/2,n-1}
\le
\frac{(n-1)S^2}{\sigma^2}
\le
\chi^2_{\alpha/2,n-1}
\right)
=
1-\alpha,
$$

donde usamos la convencion de cuantiles superiores.

Despejando $\sigma^2$:

$$
\sigma^2\in
\left[
\frac{(n-1)S^2}{\chi^2_{\alpha/2,n-1}},
\frac{(n-1)S^2}{\chi^2_{1-\alpha/2,n-1}}
\right].
$$

El intervalo para la desviacion tipica se obtiene tomando raices cuadradas.

## Por que el intervalo para la varianza es tan asimetrico

El intervalo exacto para

$$
\sigma^2
$$

no queda centrado alrededor de

$$
S^2
$$

porque la distribucion

$$
\chi^2_{n-1}
$$

es asimetrica.

### Lectura

Esto tiene una consecuencia conceptual importante:

- el estimador puntual

$$
S^2
$$

puede ser insesgado;
- pero la incertidumbre alrededor de el no se reparte de forma simetrica.

### Moral

En muestra pequena, la geometria exacta del pivote importa mucho. Forzar simetria porque se ve natural suele deformar la cobertura real.

## Ejemplo 2: intervalo para la varianza

Supongamos

$$
n=12,
\qquad
s^2=4.
$$

Entonces

$$
(n-1)s^2=44.
$$

Para un intervalo del $95\%$ con $11$ grados de libertad, el intervalo exacto para $\sigma^2$ es

$$
\left[
\frac{44}{\chi^2_{0.025,11}},
\frac{44}{\chi^2_{0.975,11}}
\right].
$$

La asimetria del chi-cuadrado hace que el intervalo para la varianza no sea simetrico alrededor de $s^2$.

## Por que la normalidad importa mucho mas aqui

En el caso grande, el teorema central del limite suele amortiguar defectos de normalidad. En muestra pequena, no. La exactitud de los intervalos t y chi-cuadrado depende fuertemente de que la poblacion sea normal o casi normal.

### Riesgos si la distribucion no es normal

- la cobertura real puede alejarse bastante del nivel nominal;
- outliers pueden inflar o hundir $S$;
- la distribucion de $T$ deja de ser exactamente t;
- la distribucion de la estadistica de varianza deja de ser chi-cuadrado.

## Robustez: que si y que no

### Para la media

El intervalo t suele ser razonablemente robusto ante desviaciones moderadas de normalidad si:

- la distribucion es casi simetrica;
- no hay colas extremas;
- no aparecen observaciones aberrantes severas.

### Para la varianza

El intervalo chi-cuadrado es bastante menos robusto. La varianza es muy sensible a colas y outliers, por lo que la hipotesis normal aqui pesa aun mas.

## Que hacer si la normalidad no es creible

Cuando la muestra es pequena y la normalidad resulta dudosa, no conviene seguir usando formulas exactas como si nada. Hay varias salidas, cada una con su costo:

- transformar la variable si hay una escala positiva muy sesgada;
- usar procedimientos no parametricos para la localizacion, como tecnicas basadas en signos o rangos;
- usar bootstrap con cautela, sabiendo que en muestra muy pequena tambien puede ser inestable;
- volver al problema sustantivo y no delegar toda la decision a una rutina automatica.

### Comentario

La leccion importante es esta: en muestra pequena no existe un milagro universal que reemplace sin costo a la teoria normal exacta. Si se abandona el modelo, tambien se abandona la exactitud de las coberturas clasicas.

## Ejemplo 3: muestra pequena con asimetria

Supongamos que una muestra de tamano $8$ proviene de una distribucion muy sesgada a la derecha. Incluso si calculamos

$$
\bar x\pm t_{\alpha/2,7}\frac{s}{\sqrt 8},
$$

el nivel de confianza real puede ser menor o mayor que el nominal. La formula sigue existiendo, pero pierde su garantia exacta.

## Relacion con pruebas de hipotesis

El intervalo t bilateral de nivel $1-\alpha$ para la media es dual de la prueba

$$
H_0:\mu=\mu_0
\qquad\text{vs}\qquad
H_1:\mu\ne\mu_0
$$

al nivel $\alpha$.

Lo mismo ocurre con el intervalo para la varianza y las pruebas chi-cuadrado sobre

$$
\sigma^2.
$$

Esta dualidad es importante porque permite interpretar la inferencia en ambos sentidos:

- estimar un rango plausible;
- o decidir si cierto valor hipotetico es compatible con los datos.

## Cobertura nominal frente a cobertura real

Cuando el modelo normal esta bien especificado, los intervalos t y chi-cuadrado tienen cobertura exacta:

$$
P_\theta(\theta\in I(X))=1-\alpha.
$$

### Lectura

Esto no significa que en una muestra concreta haya probabilidad

$$
1-\alpha
$$

de que el parametro este dentro. Significa que, si el procedimiento se repitiera muchas veces bajo el mismo modelo, la fraccion de intervalos que contienen el parametro tenderia al nivel nominal.

## Caso pareado

Si los datos provienen de mediciones antes-despues o pares emparejados, el caso de muestra pequena no se trata con dos muestras independientes. Se trabaja con las diferencias

$$
D_i=X_i-Y_i
$$

y se aplica la teoria t de una muestra a

$$
D_1,\dots,D_n.
$$

Esto no es un detalle tecnico. Ignorar el emparejamiento suele desperdiciar informacion y empeorar la precision.

## Por que el pareado puede reducir mucho la incertidumbre

Si escribimos

$$
D=X-Y,
$$

entonces

$$
\operatorname{Var}(D)=\operatorname{Var}(X)+\operatorname{Var}(Y)-2\operatorname{Cov}(X,Y).
$$

Cuando las dos mediciones de un mismo individuo estan positivamente correlacionadas, la covarianza reduce la dispersion de

$$
D.
$$

Esto puede hacer que el intervalo pareado sea mucho mas estrecho que el que resultaria de tratar los datos como si fueran independientes.

### Lectura

El pareado gana precision porque elimina parte de la variabilidad comun a las dos mediciones del mismo sujeto.

## Ejemplo 4: media de diferencias

Un experimento mide una variable antes y despues del tratamiento en $10$ individuos. Si la media de las diferencias es

$$
\bar d=1.7
$$

y la desviacion tipica de las diferencias es

$$
s_d=1.2,
$$

el intervalo correcto para el cambio medio es

$$
\bar d\pm t_{\alpha/2,9}\frac{s_d}{\sqrt{10}}.
$$

No deben usarse dos intervalos separados para las medias originales.

## Margen de error en muestra pequena

El margen de error para la media es

$$
E=t_{\alpha/2,n-1}\frac{S}{\sqrt n}.
$$

Esto deja ver tres mecanismos:

- mayor confianza implica mayor cuantil y mayor amplitud;
- mayor dispersion implica mayor amplitud;
- mayor tamano muestral reduce el error estandar.

Pero en muestra pequena la reduccion por $n$ puede ser mas lenta de lo esperado porque los cuantiles t siguen siendo sensiblemente mayores que los de la normal.

## Error comun 1: usar z porque la formula se parece

Que el intervalo t y el z tengan la misma forma externa no autoriza a intercambiarlos. Con $n$ pequeno y $\sigma$ desconocida, usar z produce intervalos demasiado estrechos.

## Error comun 2: pensar que "muestra chica" significa un numero fijo

No hay un umbral universal. El problema no es solo el tamano, sino la combinacion de:

- tamano muestral;
- normalidad o no;
- presencia de outliers;
- variable de interes.

## Error comun 3: confiar demasiado en el intervalo de varianza

El intervalo chi-cuadrado para $\sigma^2$ es exacto solo bajo normalidad. Es uno de los procedimientos clasicos mas fragiles frente a desviaciones del modelo.

## Practica guiada

### Ejercicio 1

Una muestra normal de tamano

$$
n=16
$$

produce

$$
\bar x=25.4,
\qquad
s=3.2.
$$

Escribe el intervalo bilateral del $95\%$ para $\mu$.

#### Solucion

Con $15$ grados de libertad,

$$
\mu\in
\left[
25.4-t_{0.025,15}\frac{3.2}{4},
25.4+t_{0.025,15}\frac{3.2}{4}
\right].
$$

### Ejercicio 2

Explica por que el intervalo para $\sigma^2$ no es simetrico alrededor de $S^2$.

#### Solucion

Porque la distribucion chi-cuadrado es asimetrica y el intervalo se obtiene despejando $\sigma^2$ a partir de colas desiguales de esa ley.

### Ejercicio 3

Una muestra pequena presenta un outlier extremo. Que aspecto del intervalo t puede quedar comprometido?

#### Solucion

El outlier puede distorsionar fuertemente $S$ y, por tanto, el error estandar y la cobertura real del intervalo, especialmente si la normalidad no es plausible.

## Cierre

El caso de muestra pequena ensena una leccion general de inferencia: cuando el tamano muestral no permite esconder los detalles del modelo detras de una aproximacion asintotica, las hipotesis estructurales importan de verdad. La familia normal regala pivotes exactos muy elegantes:

- t para la media;
- chi-cuadrado para la varianza.

Pero esas formulas valen porque hay una teoria detras, no porque tengan buena forma visual.
