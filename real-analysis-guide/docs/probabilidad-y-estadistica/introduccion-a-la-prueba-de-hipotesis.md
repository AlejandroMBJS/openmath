---
title: Introduccion a la prueba de hipotesis
description: Hipotesis nula y alternativa, errores de tipo I y II, potencia y estructura matematica de un contraste.
---

# Introduccion a la prueba de hipotesis

## Idea general

Una prueba de hipotesis es un procedimiento para decidir, a partir de una muestra, si la evidencia observada es compatible con una afirmacion de referencia.

La afirmacion de referencia se llama **hipotesis nula** y se denota por

$$
H_0.
$$

La afirmacion rival se llama **hipotesis alternativa** y se denota por

$$
H_1.
$$

La prueba no pretende decidir verdades absolutas. Su objetivo es controlar errores de decision bajo incertidumbre muestral.

## Ejemplos tipicos

- 

$$
H_0:\mu=\mu_0
$$

frente a

$$
H_1:\mu\ne \mu_0;
$$

- 

$$
H_0:p=p_0
$$

frente a

$$
H_1:p>p_0;
$$

- 

$$
H_0:\mu_1-\mu_2=0
$$

frente a

$$
H_1:\mu_1-\mu_2\ne 0.
$$

## Hipotesis simples y compuestas

Una hipotesis es **simple** si determina una sola distribucion.

Es **compuesta** si determina una familia de distribuciones.

Por ejemplo:

- 

$$
H_0:\mu=\mu_0,\ \sigma=\sigma_0
$$

puede ser simple;

- 

$$
H_0:\mu\le \mu_0
$$

es compuesta.

## Espacio de decisiones

Formalmente, una prueba transforma la muestra

$$
X=(X_1,\dots,X_n)
$$

en una accion:

- rechazar

$$
H_0;
$$

- no rechazar

$$
H_0.
$$

Si la decision depende de una region critica

$$
C,
$$

la regla es:

$$
\text{rechazar } H_0
\iff
X\in C.
$$

## Prueba como funcion de decision

En lenguaje mas formal, una prueba puede verse como una funcion

$$
\varphi(X)\in \{0,1\},
$$

donde

$$
\varphi(X)=1
$$

significa rechazar

$$
H_0.
$$

En teoria mas avanzada tambien se permiten pruebas aleatorizadas con valores en

$$
[0,1],
$$

pero en la practica elemental casi siempre trabajamos con reglas deterministas.

### Lectura

Esta formulacion deja claro que una prueba es un objeto probabilistico: su error no se evalua para una muestra fija, sino a traves de la distribucion de

$$
X
$$

bajo distintos valores del parametro.

## Regla de decision

En la practica la regla rara vez usa toda la muestra de forma cruda. Se disena un resumen numerico que concentre la informacion relevante.

## Estadistico de prueba

Ese resumen se llama **estadistico de prueba**:

$$
T=T(X_1,\dots,X_n).
$$

Se escoge de modo que valores grandes, pequenos o extremos de

$$
T
$$

sean incompatibles con

$$
H_0.
$$

### Comentario

En casi todos los contrastes clasicos, el problema entero se reduce a estudiar la distribucion de un solo estadistico bajo

$$
H_0.
$$

## Error de tipo I

Es el error de rechazar

$$
H_0
$$

cuando en realidad es cierta.

Su probabilidad se controla por el **nivel de significacion**

$$
\alpha.
$$

## Error de tipo II

Es el error de no rechazar

$$
H_0
$$

cuando en realidad es falsa.

Su probabilidad suele denotarse por

$$
\beta.
$$

## Potencia

La **potencia** de una prueba es

$$
1-\beta,
$$

la probabilidad de detectar la alternativa cuando esta es cierta.

Una prueba buena no solo controla el error de tipo I; tambien debe tener potencia razonable frente a alternativas relevantes.

## Funcion potencia

Para una prueba dada, la funcion

$$
\pi(\theta)=P_\theta(\text{rechazar } H_0)
$$

se llama **funcion potencia**.

Idealmente:

- debe ser pequena sobre los parametros compatibles con

$$
H_0;
$$

- debe crecer en regiones relevantes de la alternativa.

### Lectura

La potencia no es un numero unico. Es una funcion del parametro. Cuando se habla de "potencia de una prueba", en realidad se esta resumiendo esa funcion.

## Compromiso estructural

No se puede hacer simultaneamente arbitrariamente pequenos ambos errores para un tamano muestral fijo.

Si se baja mucho

$$
\alpha,
$$

la prueba se vuelve mas conservadora y suele perder potencia si no se aumenta el tamano muestral.

## Nivel de significacion

Se dice que una prueba tiene nivel

$$
\alpha
$$

si

$$
P_\theta(\text{rechazar }H_0)\le \alpha
$$

para todo parametro

$$
\theta
$$

compatible con

$$
H_0.
$$

## Tamano de una prueba

El **tamano** de una prueba es

$$
\sup_{\theta\in H_0} P_\theta(\text{rechazar }H_0).
$$

Una prueba de nivel

$$
\alpha
$$

tiene tamano a lo sumo

$$
\alpha.
$$

### Exacta y conservadora

- si el tamano es exactamente

$$
\alpha,
$$

la prueba usa por completo el presupuesto de error de tipo I;
- si el tamano es estrictamente menor, la prueba es conservadora.

Esto aparece mucho en modelos discretos, donde a veces no es posible alcanzar exactamente el nivel deseado sin aleatorizacion.

## Distribucion bajo la hipotesis nula

Una prueba solo puede calibrarse si se conoce, exacta o aproximadamente, la distribucion del estadistico de prueba bajo

$$
H_0.
$$

Ejemplos clasicos:

- normal estandar en pruebas

$$
z;
$$

- t de Student en pruebas para media con varianza desconocida;
- binomial en pruebas exactas sobre proporciones;
- ji-cuadrada en contrastes sobre varianzas o tablas.

## Ejemplo 1

Si se contrasta

$$
H_0:p=0.5
$$

contra

$$
H_1:p>0.5
$$

y se rechaza cuando aparecen al menos

$$
9
$$

caras en

$$
10
$$

lanzamientos, el nivel es

$$
P_{0.5}(X\ge 9)
=
\frac{\binom{10}{9}+\binom{10}{10}}{2^{10}}
=
\frac{11}{1024}
\approx 0.0107.
$$

### Lectura

Si se usa esta region critica, la probabilidad de alarma falsa bajo

$$
H_0
$$

es poco mayor que

$$
1\%.
$$

## No rechazar no significa aceptar

Uno de los errores conceptuales mas comunes es interpretar "no rechazar

$$
H_0
$$

" como "demostrar

$$
H_0.
$$

".

Eso es falso.

La muestra puede ser insuficiente para distinguir entre

$$
H_0
$$

y alternativas cercanas.

## Valor-p

El valor-p es la probabilidad, suponiendo cierta

$$
H_0,
$$

de observar un resultado al menos tan extremo como el obtenido, en la direccion determinada por la alternativa.

Cuanto mas pequeno es, mas tension hay entre los datos y la hipotesis nula.

### Regla

Se rechaza al nivel

$$
\alpha
$$

cuando

$$
\text{valor-p}\le \alpha.
$$

## Pruebas unilaterales y bilaterales

La forma de la alternativa determina la geometria del contraste:

- unilateral derecha:

$$
H_1:\theta>\theta_0;
$$

- unilateral izquierda:

$$
H_1:\theta<\theta_0;
$$

- bilateral:

$$
H_1:\theta\ne \theta_0.
$$

Escoger la direccion despues de ver los datos invalida el nivel declarado.

### Diferencia conceptual

En una prueba unilateral, toda la masa critica se coloca en una cola. En una bilateral, se reparte en dos colas. Con el mismo nivel

$$
\alpha,
$$

la prueba unilateral puede ser mas potente en la direccion elegida, pero no detecta desviaciones en la otra.

## Ejemplo 2: prueba z bilateral

Supongamos conocida la desviacion estandar poblacional

$$
\sigma
$$

y se quiere contrastar

$$
H_0:\mu=\mu_0
\qquad \text{frente a} \qquad
H_1:\mu\ne \mu_0.
$$

El estadistico clasico es

$$
Z=\frac{\overline X-\mu_0}{\sigma/\sqrt n}.
$$

Bajo

$$
H_0,
$$

se tiene

$$
Z\sim N(0,1).
$$

Al nivel

$$
\alpha,
$$

se rechaza cuando

$$
|Z|>z_{\alpha/2}.
$$

### Lectura

La region critica se construye para que, bajo la nula, su probabilidad total sea exactamente

$$
\alpha.
$$

## Ejemplo 3: prueba unilateral para proporcion

Se quiere contrastar

$$
H_0:p=p_0
\qquad \text{frente a} \qquad
H_1:p>p_0.
$$

Con muestra grande, se usa aproximadamente

$$
Z=\frac{\widehat p-p_0}{\sqrt{p_0(1-p_0)/n}}.
$$

La regla al nivel

$$
\alpha
$$

es rechazar cuando

$$
Z>z_\alpha.
$$

### Observacion

La desviacion en el denominador se calcula con

$$
p_0
$$

y no con

$$
\widehat p
$$

porque la calibracion se hace bajo la hipotesis nula.

## Relacion con intervalos de confianza

En muchos problemas regulares, rechazar una hipotesis puntual bilateral al nivel

$$
\alpha
$$

equivale a que el valor hipotetico quede fuera del intervalo de confianza

$$
1-\alpha.
$$

### Importancia

Esto explica por que inferencia por intervalos y por pruebas no son dos mundos separados, sino dos vistas del mismo control probabilistico.

## Comentario de Neyman-Pearson

Cuando se comparan dos hipotesis simples, la teoria de Neyman-Pearson identifica pruebas mas potentes mediante cocientes de verosimilitudes.

Ese resultado es la piedra angular de la teoria clasica de contrastes.

### Lema de Neyman-Pearson

Para contrastar

$$
H_0:\theta=\theta_0
\qquad \text{frente a} \qquad
H_1:\theta=\theta_1,
$$

la prueba mas potente de nivel dado rechaza para valores grandes del cociente de verosimilitudes

$$
\frac{L(\theta_1;X)}{L(\theta_0;X)}.
$$

### Lectura

La intuicion es muy fuerte: si los datos son mucho mas plausibles bajo

$$
H_1
$$

que bajo

$$
H_0,
$$

la decision correcta es rechazar. Muchos contrastes clasicos se entienden mejor como aproximaciones o consecuencias de esta idea.

## Hipotesis compuestas y parametros de molestia

En muchos problemas reales

$$
H_0
$$

o

$$
H_1
$$

no fijan una sola distribucion, sino familias enteras. Ademas pueden aparecer parametros de interes mezclados con otros de molestia.

### Ejemplos

- contrastar

$$
\mu=\mu_0
$$

cuando

$$
\sigma^2
$$

es desconocida;
- contrastar igualdad de medias con varianzas tambien desconocidas;
- contrastar una proporcion con informacion incompleta sobre el mecanismo de muestreo.

### Lectura

Aqui entra buena parte del arte de la inferencia: construir estadisticos cuya distribucion bajo la nula sea manejable a pesar de esos parametros extra.

## Ejemplo 4: maquina descalibrada

Una maquina debe producir piezas con media

$$
10.
$$

Si los datos sugieren una media sistematicamente mayor, se plantea

$$
H_0:\mu=10,
\qquad
H_1:\mu>10.
$$

La direccion de la alternativa refleja la pregunta fisica real: detectar sobredimensionamiento.

## Valor-p frente a region critica

Estas dos formas de presentar una prueba son equivalentes:

- fijar primero

$$
\alpha
$$

y comparar el estadistico con una region critica;
- calcular el valor-p y compararlo con

$$
\alpha.
$$

### Diferencia pedagogica

La region critica enfatiza el diseno de la prueba. El valor-p enfatiza el grado de incompatibilidad observado en la muestra concreta.

## Significacion y relevancia

Una diferencia estadisticamente significativa no tiene por que ser cientificamente importante.

Con muestras grandes, desviaciones minimas pueden resultar significativas.

Por eso hay que mirar a la vez:

- tamano del efecto;
- precision del estimador;
- contexto sustantivo.

## Tamano muestral y potencia

La potencia aumenta en general cuando:

- crece el tamano muestral;
- la alternativa esta mas alejada de

$$
H_0;
$$

- disminuye la variabilidad;
- se permite un nivel

$$
\alpha
$$

mas grande.

### Tension importante

Bajar

$$
\alpha
$$

hace mas conservadora la prueba, pero puede reducir la potencia si el tamano muestral no cambia.

## Flujo de trabajo digerible

1. Formular con claridad

$$
H_0
$$

y

$$
H_1.
$$

2. Identificar si la alternativa es unilateral o bilateral.

3. Elegir el estadistico adecuado y su distribucion bajo

$$
H_0.
$$

4. Fijar el nivel

$$
\alpha.
$$

5. Calcular el estadistico observado.

6. Obtener region critica o valor-p.

7. Decidir si se rechaza o no se rechaza

$$
H_0.
$$

8. Interpretar el resultado en contexto, sin confundir significacion con importancia.

## Practica guiada

### Problema 1

Se observa una muestra con

$$
n=36,
\qquad
\overline x=10.8,
\qquad
\sigma=2.4.
$$

Contrastar

$$
H_0:\mu=10
\qquad \text{frente a} \qquad
H_1:\mu>10
$$

al nivel

$$
0.05.
$$

#### Guion

1. formar

$$
Z=\frac{10.8-10}{2.4/\sqrt{36}};
$$

2. comparar con

$$
z_{0.05}\approx 1.645.
$$

### Problema 2

En

$$
100
$$

ensayos se observan

$$
58
$$

exitos. Contrastar

$$
H_0:p=0.5
\qquad \text{frente a} \qquad
H_1:p\ne 0.5.
$$

#### Idea

Calcular

$$
\widehat p=0.58
$$

y usar la aproximacion normal de gran muestra.

### Problema 3

Explicar por que "no rechazar

$$
H_0
$$

" no equivale a "aceptar

$$
H_0
$$

".

#### Idea

Puede haber poca potencia o alternativas muy cercanas a la nula.

## Errores frecuentes

- Tomar valor-p pequeno como probabilidad de que

$$
H_0
$$

sea falsa.
- Escoger prueba unilateral despues de mirar los datos.
- Confundir significacion estadistica con importancia practica.
- Reportar solo la decision sin el estadistico, el valor-p o el contexto.
- Olvidar los supuestos del modelo muestral.

## Cierre

La prueba de hipotesis no es una maquina de decidir verdades absolutas.

Es un mecanismo matematico para controlar errores de decision bajo incertidumbre muestral. Bien entendida, una prueba combina tres capas:

- modelo probabilistico de la muestra;
- diseno de una region critica con error tipo I controlado;
- lectura de potencia, valor-p y relevancia sustantiva.

Sin esas tres capas, la inferencia se vuelve receta. Con ellas, la prueba de hipotesis se entiende como un problema de decision matematica, no como una caja negra.
