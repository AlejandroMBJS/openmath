---
title: Distribucion de frecuencias
description: Tablas de frecuencias, agrupacion en clases, histogramas, distribucion empirica y decisiones practicas en estadistica descriptiva.
---

# Distribucion de frecuencias

## Antes de inferir, hay que mirar los datos

La distribucion de frecuencias es la primera organizacion matematica seria de una muestra. Antes de hablar de estimadores, pruebas o modelos, conviene responder preguntas descriptivas fundamentales:

- que valores aparecen;
- con que repeticion;
- donde se concentra la muestra;
- si hay asimetria, colas o valores raros;
- como cambia la descripcion al agrupar o desagrupar.

La tabla de frecuencias no es un paso escolar sin profundidad. Es el puente entre datos brutos y estructura estadistica.

## Muestra y soporte observado

Sea una muestra

$$
x_1,\dots,x_n.
$$

Si los valores distintos observados son

$$
a_1,\dots,a_k,
$$

entonces el conjunto

$$
\{a_1,\dots,a_k\}
$$

es el soporte empirico observado.

## Frecuencia absoluta

La frecuencia absoluta del valor

$$
a_j
$$

es

$$
f_j=\#\{i:x_i=a_j\}.
$$

Es simplemente el numero de veces que ese valor aparece.

## Frecuencia relativa

La frecuencia relativa es

$$
h_j=\frac{f_j}{n}.
$$

Su interpretacion es probabilistica: representa la proporcion muestral del valor $a_j$.

### Identidades basicas

Siempre se cumple

$$
\sum_{j=1}^k f_j=n,
\qquad
\sum_{j=1}^k h_j=1.
$$

Estas igualdades parecen triviales, pero son el reflejo de que la muestra completa queda particionada por categorias.

## Frecuencias acumuladas

Si los valores observados se ordenan como

$$
a_1<\cdots<a_k,
$$

la frecuencia acumulada absoluta es

$$
F_j=f_1+\cdots+f_j,
$$

y la relativa acumulada es

$$
H_j=h_1+\cdots+h_j.
$$

### Interpretacion

La cantidad

$$
H_j
$$

es la proporcion de observaciones no mayores que $a_j$.

Esto anticipa directamente la funcion de distribucion empirica.

## Ejemplo 1: datos discretos no agrupados

Consideremos la muestra

$$
1,2,2,2,3,4,4,5.
$$

Los valores distintos son

$$
1,2,3,4,5.
$$

Las frecuencias absolutas son

$$
f=(1,3,1,2,1),
$$

y las relativas

$$
h=\left(\frac18,\frac38,\frac18,\frac28,\frac18\right).
$$

Las frecuencias acumuladas relativas son

$$
\left(\frac18,\frac48,\frac58,\frac78,1\right).
$$

Esto ya nos dice:

- el valor modal es $2$;
- la masa se concentra en valores pequenos;
- la muestra es corta y bastante irregular.

## Funcion de distribucion empirica

La tabla de frecuencias no es solo una tabla. Equivale a la funcion

$$
F_n(x)=\frac1n\sum_{i=1}^n \mathbf 1_{\{x_i\le x\}},
$$

llamada funcion de distribucion empirica.

### Propiedades

- es no decreciente;
- es continua por la derecha;
- vale $0$ antes del minimo observado;
- vale $1$ despues del maximo observado;
- salta exactamente en los valores muestrales.

### Comentario

Esta funcion es uno de los objetos centrales de la estadistica no paramatrica. La tabla de frecuencias acumuladas es simplemente su descripcion discreta.

## Datos agrupados

Cuando la variable es continua o la muestra es muy grande, listar valor por valor deja de ser util. Entonces se agrupan los datos en clases:

$$
I_1,\dots,I_m.
$$

La frecuencia absoluta de la clase

$$
I_j
$$

es

$$
f_j=\#\{i:x_i\in I_j\},
$$

y la relativa

$$
h_j=\frac{f_j}{n}.
$$

### Criterio fundamental

Las clases deben formar una particion razonable del rango observado:

- cubrir los datos;
- ser disjuntas salvo, quiza, en fronteras abiertas/cerradas bien definidas;
- ser interpretables.

## Intervalos y convenciones de borde

Una manera habitual de evitar ambiguedades es usar clases del tipo

$$
[a_j,a_{j+1}),
$$

es decir, cerradas a la izquierda y abiertas a la derecha, salvo quiza la ultima.

Esta convencion importa porque los datos en la frontera deben contarse una sola vez.

## Marca de clase

Para una clase

$$
I_j=[\ell_j,u_j),
$$

la marca de clase es su punto medio:

$$
c_j=\frac{\ell_j+u_j}{2}.
$$

La marca de clase se usa para aproximar medias y otras cantidades cuando solo disponemos de datos agrupados.

## Amplitud de clase

La amplitud de la clase es

$$
w_j=u_j-\ell_j.
$$

Si todas las amplitudes son iguales, muchas representaciones graficas se simplifican. Si no lo son, hay que tener mas cuidado.

## Histograma y densidad de frecuencia

Cuando las clases tienen igual anchura, un histograma puede usar alturas proporcionales a frecuencias o frecuencias relativas. Pero si las anchuras son distintas, lo correcto es usar densidades de frecuencia:

$$
\frac{h_j}{w_j}.
$$

### Por que

En un histograma, lo que debe representar la proporcion muestral es el area de cada barra, no su altura aislada.

Por eso:

$$
\text{area de la barra }j
=
w_j\cdot \frac{h_j}{w_j}
=
h_j.
$$

## Ejemplo 2: datos continuos agrupados

Supongamos los tiempos de espera

$$
2.1,2.4,2.8,3.0,3.1,3.3,3.8,4.2,4.7,5.0.
$$

Agrupemos en:

$$
[2,3),\ [3,4),\ [4,5),\ [5,6).
$$

Las frecuencias absolutas son:

- $3$ en $[2,3)$;
- $4$ en $[3,4)$;
- $2$ en $[4,5)$;
- $1$ en $[5,6)$.

Las relativas son:

$$
0.3,\ 0.4,\ 0.2,\ 0.1.
$$

### Lectura

La mayor parte de la muestra esta entre $3$ y $4$ minutos, y la cola hacia valores altos parece ligera pero presente.

## Distribuciones de frecuencias y resumenes numericos

De una tabla de frecuencias pueden recuperarse o aproximarse:

- media;
- moda;
- mediana;
- cuantiles;
- varianza.

### Para datos no agrupados

La media se calcula como

$$
\bar x=\frac{1}{n}\sum_{j=1}^k a_jf_j
=
\sum_{j=1}^k a_jh_j.
$$

### Para datos agrupados

Se aproxima usando las marcas de clase:

$$
\bar x\approx \sum_{j=1}^m c_jh_j.
$$

### Advertencia

Al agrupar datos siempre se pierde informacion. Las medidas obtenidas desde clases son aproximadas, no exactas.

## Numero de clases

Elegir pocas clases oculta estructura. Elegir demasiadas produce ruido y dificulta la lectura.

### Reglas comunes

Algunas reglas practicas son:

- Sturges:

$$
m\approx 1+\log_2 n;
$$

- raiz cuadrada:

$$
m\approx \sqrt n;
$$

- Freedman-Diaconis para la anchura:

$$
w\approx 2\frac{\operatorname{RIC}}{n^{1/3}},
$$

donde RIC es el rango intercuartilico.

### Comentario

Ninguna regla es universal. Son heuristicas iniciales, no teoremas.

## Distribucion de frecuencias y forma de la muestra

Una buena tabla o histograma permite detectar patrones cualitativos:

- simetria o asimetria;
- unimodalidad o multimodalidad;
- colas pesadas o ligeras;
- huecos;
- posibles outliers;
- truncamientos o redondeos.

Esta informacion suele ser mas reveladora que una media aislada.

## Distribucion acumulada y cuantiles

La frecuencia acumulada relativa permite localizar:

- mediana;
- cuartiles;
- percentiles.

Por ejemplo, la mediana es el punto donde la acumulada pasa el $50\%$.

En datos agrupados, los cuantiles se estiman interpolando dentro de la clase correspondiente.

## Ejemplo 3: acumuladas

Si una muestra agrupada tiene frecuencias relativas acumuladas

$$
0.10,\ 0.35,\ 0.68,\ 0.90,\ 1,
$$

entonces:

- el primer cuartil cae en la segunda clase;
- la mediana en la tercera;
- el percentil $90$ en la cuarta.

## Tabla de frecuencias para variables cualitativas

No toda distribucion de frecuencias es numerica. Para variables cualitativas:

- categoria de producto;
- tipo de sangre;
- color;
- preferencia electoral;

la tabla de frecuencias sigue teniendo pleno sentido. Lo que se pierde es el orden natural y con el muchas nociones acumulativas.

### Ejemplo

Si una encuesta registra preferencias

$$
A,B,C
$$

con frecuencias

$$
40,35,25,
$$

la lectura principal es proporcional, no ordinal.

## Frecuencias absolutas frente a relativas

Las absolutas son utiles para conocer tamanos reales. Las relativas son indispensables para comparar muestras de tamanos distintos.

### Ejemplo

No significa lo mismo:

- $20$ casos en una muestra de $100$;
- $20$ casos en una muestra de $1000$.

En el primer caso la frecuencia relativa es $0.2$; en el segundo, $0.02$.

## Sesgo por agrupacion

Agrupar mal puede inducir conclusiones equivocadas.

### Problemas tipicos

- clases demasiado anchas ocultan multimodalidad;
- clases muy estrechas exageran ruido;
- amplitudes desiguales sin densidad deforman el histograma;
- fronteras mal elegidas alteran la interpretacion.

## Distribucion de frecuencias y modelado

Antes de ajustar una distribucion teorica conviene mirar la distribucion empirica de frecuencias. Muchas veces:

- una asimetria marcada sugiere distribuciones no gaussianas;
- una cola larga sugiere modelos exponenciales o lognormales;
- una variable acotada sugiere soporte finito o beta;
- una multimodalidad sugiere mezcla de poblaciones.

La estadistica descriptiva no esta antes del modelado solo por orden didactico, sino porque puede impedir modelos absurdos.

## Error comun 1: tratar frecuencia y probabilidad como si fueran lo mismo

La frecuencia relativa es una aproximacion empirica a una probabilidad, no la probabilidad "verdadera" misma.

## Error comun 2: comparar histogramas con diferentes anchuras sin ajustar alturas

Si las clases no tienen la misma amplitud, comparar alturas brutas induce error. Hay que comparar areas mediante densidades de frecuencia.

## Error comun 3: creer que una tabla neutraliza la necesidad de mirar datos atipicos

No. Una tabla puede resumir, pero tambien ocultar casos aislados importantes.

## Practica guiada

### Ejercicio 1

Una muestra toma los valores

$$
0,0,1,1,1,2,4,4,4,4.
$$

Construye las frecuencias absolutas y relativas.

#### Solucion

Los valores distintos son

$$
0,1,2,4.
$$

Las frecuencias absolutas son

$$
2,3,1,4,
$$

y las relativas

$$
0.2,0.3,0.1,0.4.
$$

### Ejercicio 2

Explica por que un histograma con clases desiguales debe usar densidad de frecuencia.

#### Solucion

Porque en un histograma la proporcion muestral debe representarse por el area de cada barra. Si las anchuras cambian, usar altura igual a frecuencia distorsiona visualmente las masas relativas.

### Ejercicio 3

Que informacion aporta una frecuencia acumulada que no da una frecuencia simple?

#### Solucion

Permite responder preguntas del tipo "que proporcion de observaciones no supera cierto umbral", y aproxima la funcion de distribucion empirica.

## Cierre

La distribucion de frecuencias es el primer lenguaje en el que una muestra deja de ser una lista de numeros y pasa a ser un objeto estadistico. De ella nacen:

- el histograma;
- la funcion de distribucion empirica;
- los cuantiles;
- la intuicion sobre forma, sesgo y dispersion;
- y muchas decisiones de modelado posteriores.

Por eso no debe verse como una rutina mecanica, sino como el primer nivel serio de lectura estructural de datos.
