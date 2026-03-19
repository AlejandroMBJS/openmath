---
title: Intervalo de confianza para sumas y diferencias de media
description: Intervalos para combinaciones lineales de medias, muestras independientes, Welch, varianzas iguales y disenos pareados.
---

# Intervalo de confianza para sumas y diferencias de media

## Por que este tema es central

En muchos problemas no interesa la media de una sola poblacion, sino comparar dos poblaciones o medir un cambio entre dos condiciones. Los parametros tipicos son:

- diferencia de medias:

$$
\mu_1-\mu_2;
$$

- suma de medias:

$$
\mu_1+\mu_2;
$$

- cambio medio en un diseno antes-despues.

El caso mas importante con diferencia es

$$
\mu_1-\mu_2,
$$

porque ahi se concentra gran parte de la estadistica comparativa clasica.

## Combinaciones lineales de medias

Si

$$
\bar X
\qquad\text{y}\qquad
\bar Y
$$

son medias muestrales independientes, entonces para constantes $a$ y $b$ la combinacion

$$
a\bar X+b\bar Y
$$

estima

$$
a\mu_1+b\mu_2.
$$

Ademas,

$$
E(a\bar X+b\bar Y)=a\mu_1+b\mu_2,
$$

y, por independencia,

$$
\operatorname{Var}(a\bar X+b\bar Y)=a^2\operatorname{Var}(\bar X)+b^2\operatorname{Var}(\bar Y).
$$

Esta observacion resume la teoria general del tema.

## Caso 1: varianzas conocidas

Supongamos:

$$
X_1,\dots,X_n \text{ i.i.d. con media }\mu_1\text{ y varianza }\sigma_1^2,
$$

$$
Y_1,\dots,Y_m \text{ i.i.d. con media }\mu_2\text{ y varianza }\sigma_2^2,
$$

e independencia entre ambas muestras.

Entonces

$$
\bar X-\bar Y
$$

tiene media

$$
\mu_1-\mu_2
$$

y varianza

$$
\frac{\sigma_1^2}{n}+\frac{\sigma_2^2}{m}.
$$

Si las poblaciones son normales, o si las muestras son suficientemente grandes, un intervalo bilateral para

$$
\mu_1-\mu_2
$$

es

$$
(\bar X-\bar Y)\pm z_{\alpha/2}
\sqrt{\frac{\sigma_1^2}{n}+\frac{\sigma_2^2}{m}}.
$$

Para

$$
\mu_1+\mu_2
$$

la formula es identica, cambiando $\bar X-\bar Y$ por $\bar X+\bar Y$.

## Caso 2: varianzas desconocidas, aproximacion grande muestra

Si $\sigma_1^2$ y $\sigma_2^2$ son desconocidas, se sustituyen por las varianzas muestrales:

$$
S_X^2,
\qquad
S_Y^2.
$$

Entonces un intervalo asintotico para

$$
\mu_1-\mu_2
$$

es

$$
(\bar X-\bar Y)\pm z_{\alpha/2}
\sqrt{\frac{S_X^2}{n}+\frac{S_Y^2}{m}}.
$$

Este procedimiento es util cuando las muestras son suficientemente grandes, pero en tamano moderado conviene una correccion mas fina.

## Caso 3: intervalo de Welch

Cuando las muestras son aproximadamente normales y no queremos imponer igualdad de varianzas, el procedimiento recomendado suele ser Welch.

El pivote aproximado es

$$
T=
\frac{(\bar X-\bar Y)-(\mu_1-\mu_2)}
\sqrt{S_X^2/n+S_Y^2/m}},
$$

que se aproxima por una distribucion t con grados de libertad efectivos

$$
\nu=
\frac{\left(S_X^2/n+S_Y^2/m\right)^2}
{\dfrac{(S_X^2/n)^2}{n-1}+\dfrac{(S_Y^2/m)^2}{m-1}}.
$$

Por tanto, el intervalo de Welch es

$$
(\bar X-\bar Y)\pm t_{\alpha/2,\nu}
\sqrt{\frac{S_X^2}{n}+\frac{S_Y^2}{m}}.
$$

### Por que Welch es importante

Durante mucho tiempo se enseno forzar igualdad de varianzas. Hoy se sabe que, salvo justificacion sustantiva clara, Welch suele ser la opcion mas sensata:

- evita una hipotesis artificial;
- mantiene buen comportamiento cuando las varianzas difieren;
- pierde muy poco incluso si resultaran iguales.

## El problema de Behrens-Fisher

La comparacion de dos medias normales con varianzas desconocidas y no necesariamente iguales es el famoso problema de Behrens-Fisher. No existe un pivote exacto tan limpio como en el caso pooled.

La aproximacion de Welch-Satterthwaite resuelve esto de forma muy eficaz:

- conserva la estructura de una t studentizada;
- corrige los grados de libertad para reflejar la incertidumbre en ambas varianzas;
- evita imponer una igualdad que muchas veces no tiene base cientifica.

### Lectura

Welch no es una version menor del intervalo clasico. Es la respuesta moderna natural al problema general de dos medias con dispersiones posiblemente distintas.

## Contrastes lineales y forma matricial

Las sumas y diferencias de medias son casos particulares de una idea mas general: inferir sobre combinaciones lineales de parametros.

### Esquema

Si

$$
\mu=(\mu_1,\mu_2)^T
$$

y

$$
c=(c_1,c_2)^T,
$$

el objetivo puede escribirse como

$$
c^T\mu=c_1\mu_1+c_2\mu_2.
$$

Entonces el estimador natural es

$$
c^T\bar X,
$$

y su varianza depende de la matriz de covarianza del vector de medias.

### Moral

No hay una teoria separada para cada formula. Hay una sola teoria de contrastes lineales, de la cual estos intervalos son ejemplos de baja dimension.

## Caso 4: varianzas iguales

Si realmente esta justificado asumir

$$
\sigma_1^2=\sigma_2^2=\sigma^2,
$$

puede usarse la varianza agrupada:

$$
S_p^2=
\frac{(n-1)S_X^2+(m-1)S_Y^2}{n+m-2}.
$$

Bajo normalidad,

$$
\frac{(\bar X-\bar Y)-(\mu_1-\mu_2)}
{S_p\sqrt{1/n+1/m}}
\sim
t_{n+m-2}.
$$

El intervalo correspondiente es

$$
(\bar X-\bar Y)\pm
t_{\alpha/2,n+m-2}
S_p\sqrt{\frac{1}{n}+\frac{1}{m}}.
$$

### Observacion critica

Este intervalo puede ser algo mas corto si las varianzas son realmente iguales, pero puede comportarse mal si esa suposicion falla. Por eso no debe usarse por costumbre.

## Caso 5: diseno pareado

Si las observaciones vienen en pares relacionados, no deben tratarse como muestras independientes. El parametro relevante ya no es

$$
\mu_1-\mu_2
$$

entre poblaciones desligadas, sino la media de las diferencias

$$
D_i=X_i-Y_i.
$$

Definimos

$$
\bar D=\frac{1}{n}\sum_{i=1}^n D_i,
\qquad
S_D^2=\frac{1}{n-1}\sum_{i=1}^n (D_i-\bar D)^2.
$$

Entonces el intervalo correcto para el cambio medio es

$$
\bar D\pm t_{\alpha/2,n-1}\frac{S_D}{\sqrt n}.
$$

### Comentario

Emparejar bien reduce ruido. Tratar datos apareados como si fueran independientes suele desperdiciar informacion porque ignora la correlacion dentro de cada par.

## Ganancia de precision en el caso pareado

La ventaja del pareado se ve en la varianza. Si

$$
D_i=X_i-Y_i,
$$

entonces

$$
\operatorname{Var}(D_i)=\operatorname{Var}(X_i)+\operatorname{Var}(Y_i)-2\operatorname{Cov}(X_i,Y_i).
$$

Cuando las observaciones del mismo par estan positivamente correlacionadas, la covarianza resta variabilidad y el error estandar de

$$
\bar D
$$

puede ser muy inferior al de una comparacion ingenua entre medias independientes.

### Moral

El pareado es valioso cuando los pares capturan una fuente comun de variacion: sujeto, lote, tiempo basal o condicion inicial.

## Ejemplo 1: Welch entre dos procesos

Se comparan dos maquinas con:

$$
n=40,\quad \bar x=18.4,\quad s_x=2.1,
$$

$$
m=35,\quad \bar y=17.1,\quad s_y=2.7.
$$

La diferencia observada es

$$
\bar x-\bar y=1.3.
$$

El error estandar es

$$
\sqrt{\frac{2.1^2}{40}+\frac{2.7^2}{35}}
\approx
0.569.
$$

Con un cuantil t cercano a $2$, el intervalo al $95\%$ es aproximadamente

$$
1.3\pm 1.14,
$$

es decir,

$$
(0.16,2.44).
$$

La diferencia media parece positiva.

## Ejemplo 2: caso pareado

Se mide la presion arterial de $12$ pacientes antes y despues de un tratamiento. Las diferencias "despues menos antes" tienen:

$$
\bar d=-4.5,
\qquad
s_d=5.2.
$$

El intervalo del $95\%$ para el cambio medio es

$$
\bar d\pm t_{0.025,11}\frac{s_d}{\sqrt{12}}.
$$

Aqui el analisis correcto vive enteramente en la variable diferencia. No tiene sentido ignorar el emparejamiento y tratar ambos conjuntos como independientes.

## Ejemplo 3: suma de medias

Aunque menos frecuente, a veces interesa

$$
\mu_1+\mu_2.
$$

Si las muestras son independientes y las varianzas conocidas, un intervalo para esa suma es

$$
(\bar X+\bar Y)\pm
z_{\alpha/2}
\sqrt{\frac{\sigma_1^2}{n}+\frac{\sigma_2^2}{m}}.
$$

La estructura es la misma porque la varianza de la suma de independientes tambien se suma.

## Forma general para combinaciones lineales

Todo el bloque puede resumirse asi. Si el parametro de interes es

$$
\theta=a\mu_1+b\mu_2,
$$

el estimador natural es

$$
\hat \theta=a\bar X+b\bar Y.
$$

Bajo independencia,

$$
\operatorname{Var}(\hat\theta)=a^2\frac{\sigma_1^2}{n}+b^2\frac{\sigma_2^2}{m}.
$$

Cuando las varianzas son desconocidas, la version grande muestra o la version tipo Welch se obtiene reemplazando

$$
\sigma_1^2,\sigma_2^2
$$

por sus estimadores muestrales.

### Lectura

Resta y suma son dos elecciones particulares:

- 
$$
a=1,\ b=-1
$$

para

$$
\mu_1-\mu_2;
$$
- 
$$
a=1,\ b=1
$$

para

$$
\mu_1+\mu_2.
$$

La teoria real es la de combinaciones lineales.

## Interpretacion correcta

Si un intervalo del $95\%$ para

$$
\mu_1-\mu_2
$$

no contiene el valor $0$, eso sugiere una diferencia estadisticamente significativa al nivel $5\%$ en la prueba bilateral compatible.

Pero no basta con mirar si aparece o no el cero. Tambien importa:

- la magnitud de la diferencia;
- la anchura del intervalo;
- la relevancia practica del efecto.

## Relacion con pruebas de hipotesis

En cada caso hay una dualidad natural:

- intervalo de Welch <-> prueba t de Welch;
- intervalo agrupado <-> prueba t con varianzas iguales;
- intervalo pareado <-> prueba t sobre las diferencias.

Entender esta dualidad evita mezclar intervalos y contrastes incompatibles.

## Descomposicion de la ganancia por apareamiento

La ventaja del diseno pareado puede escribirse algebraicamente. Si

$$
D=X-Y,
$$

entonces

$$
\operatorname{Var}(D)=\operatorname{Var}(X)+\operatorname{Var}(Y)-2\operatorname{Cov}(X,Y).
$$

### Lectura

Cuando

$$
X
$$

y

$$
Y
$$

estan positivamente correlacionadas dentro de cada par, la covarianza resta variabilidad y el intervalo se estrecha.

## Error comun 1: decidir igualdad de varianzas con una prueba preliminar automatica

Una practica bastante difundida era:

1. hacer primero una prueba de igualdad de varianzas;
2. segun el resultado, usar pooled o Welch.

Ese encadenamiento puede distorsionar los niveles del procedimiento global y rara vez aporta ventaja real. En general, Welch es preferible salvo justificacion fuerte a favor de varianzas iguales.

## Error comun 2: ignorar el diseno

Dos muestras pueden tener el mismo tamano y aun asi requerir analisis distintos:

- independientes;
- apareadas;
- clusterizadas.

La formula correcta no depende solo de los numeros, sino del mecanismo de generacion de datos.

## Error comun 3: usar z en muestra moderada sin pensarlo

Si las muestras son normales o moderadas y las varianzas son desconocidas, la teoria t es mas coherente que enchufar una normal por comodidad.

## Practica guiada

### Ejercicio 1

Dos muestras independientes normales producen:

$$
n=15,\ \bar x=21,\ s_x=4,
$$

$$
m=12,\ \bar y=18,\ s_y=5.
$$

Escribe el intervalo de Welch para

$$
\mu_1-\mu_2.
$$

#### Solucion

El centro es

$$
21-18=3.
$$

El error estandar es

$$
\sqrt{\frac{16}{15}+\frac{25}{12}}.
$$

Luego el intervalo es

$$
3\pm t_{\alpha/2,\nu}
\sqrt{\frac{16}{15}+\frac{25}{12}},
$$

con $\nu$ dado por Welch-Satterthwaite.

### Ejercicio 2

Explica por que un estudio antes-despues no debe analizarse como si las dos muestras fueran independientes.

#### Solucion

Porque las dos observaciones de cada individuo estan correlacionadas. La informacion relevante esta en el cambio individual, no en dos medias desligadas.

### Ejercicio 3

Que significa que un intervalo para

$$
\mu_1-\mu_2
$$

sea enteramente positivo?

#### Solucion

Que todos los valores plausibles del parametro, segun el procedimiento de confianza elegido, favorecen a la primera media como mayor que la segunda.

## Cierre

Los intervalos para sumas y diferencias de medias son un punto donde la inferencia deja de ser solo "calcular una media" y pasa a reflejar la arquitectura del diseno experimental. La formula correcta depende de:

- independencia o emparejamiento;
- conocimiento o no de las varianzas;
- igualdad o desigualdad de dispersiones;
- tamano muestral.

Por eso este tema no debe aprenderse como una coleccion de plantillas, sino como una jerarquia de modelos.
