---
title: Prueba de hipotesis por metodo valor-p
description: Definicion formal del valor-p, su relacion con regiones criticas, interpretacion correcta, ejemplos y errores frecuentes.
---

# Prueba de hipotesis por metodo valor-p

## Panorama general

El lenguaje del valor-p aparece una y otra vez en estadistica aplicada, pero casi siempre se presenta de forma demasiado rapida. Eso produce dos errores pedagogicos:

- se aprende a leer una tabla o a pulsar un boton de software, pero no se entiende que se esta midiendo;
- se termina interpretando el valor-p como una probabilidad sobre la verdad de la hipotesis nula, cosa que no es.

El valor-p no es un metodo alternativo desligado de las regiones criticas. Es otra manera de codificar el mismo problema de contraste:

- fijamos una hipotesis nula $H_0$;
- elegimos un estadistico de prueba $T(X)$;
- decidimos que valores de $T$ cuentan como evidencia contra $H_0$;
- resumimos la extremidad de la muestra observada mediante un numero.

Ese numero es el valor-p.

## Situacion abstracta de contraste

Sea $X$ la muestra observada con ley perteneciente a una familia $\{P_\theta:\theta\in\Theta\}$.

Queremos contrastar

$$
H_0:\theta\in\Theta_0
\qquad\text{frente a}\qquad
H_1:\theta\in\Theta_1,
$$

donde $\Theta_0\cap\Theta_1=\varnothing$.

Escogemos un estadistico de prueba

$$
T=T(X),
$$

de modo que valores grandes, o pequenos, o alejados del centro, segun el problema, constituyan evidencia contra $H_0$.

La filosofia frecuentista es la siguiente: si bajo $H_0$ el valor observado del estadistico seria muy raro, tomamos eso como evidencia para rechazar $H_0$.

## Region critica y valor-p

Antes de definir el valor-p, conviene recordar como se construye una prueba clasica.

### Prueba unilateral derecha

Si valores grandes de $T$ apoyan la alternativa, una region critica al nivel $\alpha$ tiene la forma

$$
C_\alpha=\{x:T(x)\ge c_\alpha\},
$$

donde $c_\alpha$ se elige para que, idealmente,

$$
P_{H_0}(T\ge c_\alpha)=\alpha.
$$

Se rechaza $H_0$ cuando la muestra cae en $C_\alpha$.

### Definicion informal

Dada la observacion $x_{\mathrm{obs}}$ con estadistico

$$
t_{\mathrm{obs}}=T(x_{\mathrm{obs}}),
$$

el valor-p es la probabilidad, bajo $H_0$, de observar un valor del estadistico al menos tan extremo como $t_{\mathrm{obs}}$.

La palabra "extremo" depende de la alternativa.

## Definicion formal en los casos usuales

### Caso unilateral derecha

Si lo extremo significa "grande", definimos

$$
p(x_{\mathrm{obs}})
=
P_{H_0}(T\ge t_{\mathrm{obs}}).
$$

### Caso unilateral izquierda

Si lo extremo significa "pequeno", definimos

$$
p(x_{\mathrm{obs}})
=
P_{H_0}(T\le t_{\mathrm{obs}}).
$$

### Caso bilateral

Si la evidencia contra $H_0$ consiste en apartarse mucho de un valor central, hay que medir ambas colas. Cuando la distribucion nula es simetrica y el estadistico esta centrado en $0$, suele usarse

$$
p(x_{\mathrm{obs}})
=
2P_{H_0}(T\ge |t_{\mathrm{obs}}|).
$$

Pero esta formula no es universal. En una prueba bilateral general, el valor-p debe construirse con la nocion correcta de extremidad para el problema en cuestion.

## Valor-p como nivel minimo de significacion

Hay una interpretacion muy util:

> El valor-p es el menor nivel de significacion $\alpha$ para el cual la muestra observada llevaria al rechazo de $H_0$.

Esto conecta directamente el metodo del valor-p con el metodo de region critica.

### Proposicion

En una prueba unilateral derecha con distribucion nula continua,

$$
\text{rechazar }H_0\text{ al nivel }\alpha
\iff
p\le \alpha.
$$

#### Demostracion

Sea $F_0$ la funcion de distribucion de $T$ bajo $H_0$. La region critica exacta al nivel $\alpha$ tiene la forma

$$
T\ge c_\alpha,
$$

donde $P_{H_0}(T\ge c_\alpha)=\alpha$.

Si observamos $t_{\mathrm{obs}}$, su valor-p es

$$
p=P_{H_0}(T\ge t_{\mathrm{obs}}).
$$

Entonces

$$
p\le\alpha
\iff
P_{H_0}(T\ge t_{\mathrm{obs}})\le P_{H_0}(T\ge c_\alpha).
$$

Como la cola superior decrece al aumentar el umbral,

$$
p\le\alpha
\iff
t_{\mathrm{obs}}\ge c_\alpha,
$$

que es precisamente la condicion de rechazo. \qed

## Distribucion del valor-p bajo la nula

Uno de los hechos teoricos mas importantes es el siguiente.

### Teorema

Supongamos que bajo $H_0$ el estadistico $T$ tiene distribucion continua y que la prueba es unilateral derecha. Entonces

$$
p=1-F_0(T)
$$

tiene distribucion uniforme en $(0,1)$ bajo $H_0$.

#### Demostracion

Sea

$$
U=1-F_0(T).
$$

Por la transformacion integral de probabilidad, $F_0(T)\sim U(0,1)$ cuando $F_0$ es continua. Como $1-U(0,1)$ tambien es uniforme,

$$
U\sim U(0,1).
$$

Por tanto el valor-p es uniforme bajo la nula. \qed

### Consecuencia

Si $H_0$ es cierta, los valores-p pequenos no deben aparecer sistematicamente. Cuando aparecen con demasiada frecuencia, eso sugiere que:

- $H_0$ no describe bien los datos;
- el modelo o las suposiciones estan mal;
- o se estan haciendo muchos contrastes sin correccion.

## El valor-p en hipotesis simples y compuestas

En una hipotesis simple, la ley nula esta completamente especificada. Por ejemplo,

$$
H_0:\mu=0,\qquad \sigma=1.
$$

Entonces no hay ambiguedad para calcular la cola nula.

En una hipotesis compuesta, en cambio, puede haber varios parametros compatibles con $H_0$. En ese caso el valor-p exacto puede requerir:

- usar un estadistico cuya distribucion bajo $H_0$ no dependa de parametros de estorbo;
- maximizar la probabilidad de cola sobre todos los parametros bajo $H_0$;
- o recurrir a una aproximacion asintotica.

Por eso en teoria estadistica se insiste en distinguir entre:

- valor-p exacto;
- valor-p conservador;
- valor-p asintotico.

## Como se calcula en la practica

Una vez fijado el estadistico y conocida su distribucion nula, el calculo es mecanico.

### Esquema general

1. Formular $H_0$ y $H_1$.
2. Elegir el estadistico de prueba.
3. Calcular el valor observado.
4. Determinar la distribucion del estadistico bajo $H_0$.
5. Medir la cola apropiada.
6. Interpretar en el contexto del problema.

### Caso z

Si

$$
Z=\frac{\bar X-\mu_0}{\sigma/\sqrt{n}}
$$

y bajo $H_0$ se tiene $Z\sim N(0,1)$, entonces:

- prueba derecha: $p=P(Z\ge z_{\mathrm{obs}})$;
- prueba izquierda: $p=P(Z\le z_{\mathrm{obs}})$;
- prueba bilateral: $p=2P(Z\ge |z_{\mathrm{obs}}|)$.

### Caso t

Si

$$
T=\frac{\bar X-\mu_0}{S/\sqrt{n}}
$$

y bajo $H_0$ se tiene $T\sim t_{n-1}$, entonces se usan las colas de la distribucion t con $n-1$ grados de libertad.

### Caso chi-cuadrado

Si el estadistico natural cae en una distribucion $\chi^2$, la nocion de extremidad no siempre es bilateral simetrica. Muchas pruebas de varianza son unilaterales en la cola derecha o izquierda, y otras usan dos colas no simetricas.

## Ejemplo 1: prueba unilateral derecha con estadistico z

Una fabrica afirma que el contenido medio de un envase es de $500$ ml. Se toma una muestra grande y se contrasta

$$
H_0:\mu=500,
\qquad
H_1:\mu>500.
$$

Se conoce la desviacion tipica poblacional $\sigma=12$ y se obtiene

$$
n=64,
\qquad
\bar x=503.
$$

El estadistico es

$$
z_{\mathrm{obs}}
=
\frac{503-500}{12/\sqrt{64}}
=
\frac{3}{12/8}
=
2.
$$

Entonces

$$
p=P(Z\ge 2)\approx 0.0228.
$$

### Lectura correcta

- al nivel $0.05$, se rechaza $H_0$;
- al nivel $0.01$, no se rechaza $H_0$;
- la evidencia contra $H_0$ es moderada, no abrumadora.

## Ejemplo 2: prueba bilateral

Supongamos ahora

$$
H_0:\mu=100,
\qquad
H_1:\mu\ne 100,
$$

y observamos

$$
z_{\mathrm{obs}}=2.13.
$$

Entonces

$$
p=2P(Z\ge 2.13)\approx 2(0.0166)=0.0332.
$$

Se rechaza al nivel $5\%$, pero no al nivel $1\%$.

### Observacion

La misma muestra puede ser "significativa" o "no significativa" segun el nivel previamente fijado. Por eso el valor-p contiene mas informacion que una decision binaria.

## Ejemplo 3: estadistico t con varianza desconocida

Se quiere contrastar

$$
H_0:\mu=20,
\qquad
H_1:\mu<20,
$$

con datos normales:

$$
n=12,
\qquad
\bar x=18.9,
\qquad
s=2.4.
$$

Calculamos

$$
t_{\mathrm{obs}}
=
\frac{18.9-20}{2.4/\sqrt{12}}
\approx
-1.588.
$$

El valor-p es

$$
p=P(t_{11}\le -1.588).
$$

Usando tabla o software, obtenemos aproximadamente

$$
p\approx 0.070.
$$

Interpretacion:

- al $5\%$ no hay evidencia suficiente para rechazar $H_0$;
- al $10\%$ si habria rechazo.

## Ejemplo 4: una observacion sobre el tamano muestral

Supongamos que el verdadero efecto sobre la media es pequeno, por ejemplo una diferencia de apenas $0.2$ unidades. Con una muestra enorme, el error estandar puede ser tan pequeno que el estadistico de prueba resulte grande y el valor-p termine siendo muy chico.

Eso muestra una distincion esencial:

- el valor-p detecta incompatibilidad estadistica con $H_0$;
- no mide por si mismo relevancia cientifica o practica.

## Errores de interpretacion que hay que evitar

### Error 1

Decir que el valor-p es "la probabilidad de que $H_0$ sea cierta".

Eso es falso. El valor-p se calcula suponiendo que $H_0$ es cierta. No puede, dentro de ese mismo formalismo, ser la probabilidad posterior de $H_0$.

### Error 2

Decir que un valor-p grande demuestra $H_0$.

Tampoco. Un valor-p grande significa que la muestra no es especialmente incompatible con $H_0$. Puede pasar porque:

- $H_0$ es razonable;
- el tamano de muestra es pequeno;
- la variabilidad es alta;
- la prueba tiene poca potencia.

### Error 3

Usar "significativo" como sinonimo de "importante".

La significacion estadistica y la importancia del efecto son cosas distintas.

### Error 4

Mirar el valor-p sin examinar el modelo.

Si los supuestos del contraste fallan, el valor-p puede ser enganoso.

## Valor-p y potencia

La potencia de una prueba es

$$
\pi(\theta)=P_\theta(\text{rechazar }H_0).
$$

El valor-p se refiere a la muestra observada. La potencia describe el comportamiento del procedimiento bajo alternativas posibles.

Una prueba puede arrojar un valor-p grande en una muestra concreta y, sin embargo, ser una prueba muy potente en general. Son conceptos diferentes:

- valor-p: resumen de la evidencia de esta muestra;
- potencia: capacidad del metodo para detectar efectos reales.

## Valor-p y region de confianza

En muchos problemas clasicos, especialmente en modelos normales, los contrastes y los intervalos de confianza son duales.

Por ejemplo, en una prueba bilateral sobre la media:

- se rechaza $H_0:\mu=\mu_0$ al nivel $\alpha$;
- si y solo si $\mu_0$ no pertenece al intervalo de confianza de nivel $1-\alpha$.

El valor-p puede verse entonces como el punto exacto donde ese intervalo deja de contener al valor nulo.

## Valor-p en pruebas bilaterales: una sutileza real

Cuando la distribucion nula no es simetrica o cuando el estadistico no tiene una nocion de distancia natural respecto del centro, la formula

$$
p=2P(T\ge |t_{\mathrm{obs}}|)
$$

puede ser incorrecta.

En estos casos hay que definir cuidadosamente que significa "tan extremo o mas extremo" en ambas direcciones. Esto importa, por ejemplo, en pruebas exactas discretas y en algunos problemas con parametros en la frontera.

## Caso discreto: por que a veces no hay exactitud perfecta

Si el estadistico tiene distribucion discreta, el valor-p ya no es uniforme exacto bajo $H_0$.

En ese caso suele ocurrir que

$$
P_{H_0}(p\le \alpha)\le \alpha,
$$

pero no necesariamente con igualdad. La prueba resultante es conservadora.

Este detalle teorico explica por que algunas pruebas exactas en muestras pequenas parecen "mas cautas" de lo que sugeriria una tabla continua.

## Multiplicidad y caza de significancia

El valor-p se interpreta para **una prueba fijada de antemano**. Si se prueban muchas hipotesis, muchas variables, muchos subgrupos o muchos cortes y luego solo se reporta el menor valor-p, la lectura cambia por completo.

### Lectura

Aunque cada prueba aislada tenga nivel

$$
\alpha,
$$

la probabilidad de obtener al menos un falso positivo entre muchas pruebas puede crecer mucho. Por eso aparecen correcciones por comparaciones multiples y, sobre todo, la necesidad de distinguir entre:

- analisis planificado;
- exploracion posterior;
- seleccion de resultados a posteriori.

## Pre-registro, optional stopping y validez

El formalismo clasico del valor-p presupone un procedimiento de muestreo y una regla de analisis fijados antes de mirar los datos.

### Problemas tipicos

- detener la recoleccion justo cuando el valor-p baja de

$$
0.05;
$$
- elegir despues del hecho la transformacion, la covariable o el subgrupo;
- repetir el analisis hasta encontrar una version "significativa".

### Lectura

Estas practicas rompen la calibracion frecuentista del valor-p. El numero reportado deja de tener la interpretacion nominal de rareza bajo

$$
H_0.
$$

## Guia de lectura practica

Cuando te entregan un valor-p, conviene ordenar mentalmente el problema asi:

1. Que se esta contrastando exactamente.
2. Bajo que supuestos.
3. Cual es el tamano del efecto observado.
4. Cuanto es el valor-p.
5. Si el resultado es consistente con el intervalo de confianza.
6. Si la conclusion tiene relevancia practica.

## Comparacion entre tres frases

### Frase correcta

"Si $H_0$ fuera cierta, observar un estadistico tan extremo como este tendria probabilidad aproximadamente $0.03$."

### Frase incorrecta

"Hay un $3\%$ de probabilidad de que $H_0$ sea cierta."

### Frase incompleta

"El resultado es significativo."

La primera es una lectura frecuentista adecuada. La segunda es una confucion entre probabilidad de los datos y probabilidad de la hipotesis. La tercera no dice nada sobre magnitud del efecto ni sobre la calidad del modelo.

## Ejemplo 5: prueba para una proporcion

Una empresa afirma que al menos el $60\%$ de los clientes renuevan una suscripcion. Se observa en una muestra grande:

$$
n=200,
\qquad
\hat p=0.54.
$$

Contrastamos

$$
H_0:p=0.60,
\qquad
H_1:p<0.60.
$$

El estadistico aproximado es

$$
z_{\mathrm{obs}}
=
\frac{0.54-0.60}{\sqrt{0.6(0.4)/200}}
\approx
-1.732.
$$

Luego

$$
p=P(Z\le -1.732)\approx 0.0416.
$$

Se rechaza al $5\%$, pero no al $1\%$.

## Practica guiada

### Ejercicio 1

En una prueba bilateral se observa $z_{\mathrm{obs}}=1.85$.

1. Calcula el valor-p.
2. Decide al nivel $0.10$.
3. Decide al nivel $0.05$.

#### Solucion

$$
p=2P(Z\ge 1.85)\approx 2(0.0322)=0.0644.
$$

Por tanto:

- se rechaza al $10\%$;
- no se rechaza al $5\%$.

### Ejercicio 2

En una prueba unilateral derecha se obtiene $t_{\mathrm{obs}}=2.45$ con $18$ grados de libertad.

1. Expresa el valor-p en terminos de la distribucion t.
2. Explica como decidirias al nivel $0.05$.

#### Solucion

El valor-p es

$$
p=P(t_{18}\ge 2.45).
$$

Se rechaza $H_0$ al $5\%$ si ese valor es menor o igual que $0.05$.

### Ejercicio 3

Se informa un valor-p de $0.18$. Un investigador concluye: "hay $82\%$ de probabilidad de que la alternativa sea cierta". Explica el error.

#### Solucion

El valor-p no da probabilidades posteriores de las hipotesis. Solo cuantifica cuan extrema es la muestra suponiendo cierta la nula.

## Cierre conceptual

El valor-p es una herramienta util cuando se entiende bien lo que hace y lo que no hace. Su fuerza esta en que traduce un contraste en una escala continua de evidencia. Su debilidad aparece cuando se le exige contestar preguntas que no pertenecen a su definicion:

- no mide tamano de efecto;
- no mide importancia practica;
- no da la probabilidad de que una hipotesis sea verdadera;
- no reemplaza el examen del modelo ni de los supuestos.

Usado correctamente, el valor-p es una pieza tecnica dentro de un argumento estadistico mas amplio, no un veredicto automatico.
