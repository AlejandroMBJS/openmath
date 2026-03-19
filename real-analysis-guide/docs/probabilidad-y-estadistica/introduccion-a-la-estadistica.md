---
title: Introduccion a la estadistica
description: Poblacion, muestra, estadisticos, variabilidad muestral, modelos estadisticos y la logica que conecta datos con inferencia.
---

# Introduccion a la estadistica

## La inversion central

La probabilidad parte de un modelo y deduce el comportamiento posible de los datos. La estadistica enfrenta el problema inverso:

- observamos datos finitos;
- desconocemos el mecanismo que los genero;
- queremos aprender algo fiable sobre ese mecanismo.

Esta inversion es el nucleo de toda la disciplina.

## Poblacion, muestra y parametro

### Poblacion

La poblacion es el universo conceptual de interes. Puede ser:

- un conjunto finito de individuos;
- una secuencia potencialmente infinita de ensayos;
- una distribucion probabilistica abstracta;
- una familia de objetos medibles.

### Muestra

La muestra es la informacion efectivamente observada. En lenguaje probabilistico suele modelarse como

$$
X_1,\dots,X_n,
$$

donde cada $X_i$ representa una observacion aleatoria.

### Parametro

Un parametro es una cantidad fija pero desconocida asociada a la poblacion o al modelo:

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
p;
$$

- un vector

$$
\theta\in\Theta.
$$

## Estadistico

Un estadistico es una funcion de la muestra:

$$
T=T(X_1,\dots,X_n).
$$

Antes de observar los datos es una variable aleatoria; despues se convierte en un numero concreto.

### Ejemplos

- media muestral:

$$
\bar X=\frac{1}{n}\sum_{i=1}^n X_i;
$$

- varianza muestral:

$$
S^2=\frac{1}{n-1}\sum_{i=1}^n (X_i-\bar X)^2;
$$

- proporcion muestral:

$$
\hat p=\frac{1}{n}\sum_{i=1}^n \mathbf 1_{\{A_i\}}.
$$

### Distincion crucial

- el parametro es fijo y desconocido;
- el estadistico es aleatorio antes de muestrear.

Si esta diferencia no queda clara, toda la inferencia posterior se confunde.

## Muestra aleatoria simple

La hipotesis estructural mas usada es que

$$
X_1,\dots,X_n
$$

son i.i.d., es decir:

- independientes;
- con la misma distribucion.

Esto se escribe

$$
X_1,\dots,X_n\stackrel{\text{i.i.d.}}{\sim}F.
$$

### Por que importa

Esta hipotesis permite:

- calcular distribuciones muestrales;
- usar leyes de grandes numeros;
- aplicar teoremas limite;
- justificar intervalos y pruebas.

## Variables cualitativas y cuantitativas

### Cualitativas

Registran categorias:

- color;
- grupo sanguineo;
- partido elegido;
- tipo de defecto.

### Cuantitativas discretas

Toman valores numericos aislados:

- numero de fallas;
- numero de llamadas;
- numero de exitos.

### Cuantitativas continuas

Se modelan sobre intervalos:

- tiempo;
- temperatura;
- masa;
- energia.

### Comentario

El tipo de variable condiciona los resumenes descriptivos y los modelos estadisticos apropiados.

## Estadistica descriptiva e inferencial

### Descriptiva

Organiza y resume datos mediante:

- tablas;
- frecuencias;
- histogramas;
- medias, medianas, modas;
- medidas de dispersion.

### Inferencial

Usa la muestra para inferir propiedades de la poblacion o del modelo:

- estimacion puntual;
- intervalos de confianza;
- pruebas de hipotesis;
- prediccion;
- seleccion de modelos.

### Comentario

La estadistica descriptiva no esta "antes" de la inferencial solo por orden didactico. Muchas veces decide si el modelo inferencial que pensabamos usar tiene sentido.

## Variabilidad muestral

Dos muestras distintas de la misma poblacion suelen producir resultados distintos.

### Ejemplo

Si lanzamos una moneda equilibrada $100$ veces, la proporcion de caras rara vez sera exactamente

$$
\frac12.
$$

La estadistica no busca eliminar esa variabilidad, sino cuantificarla y usarla para medir incertidumbre.

## Distribucion muestral

La distribucion muestral de un estadistico es la distribucion de probabilidad del estadistico antes de observar los datos.

### Ejemplo

Si

$$
X_1,\dots,X_n
$$

son Bernoulli$(p)$, entonces

$$
\hat p=\frac{1}{n}\sum X_i
$$

tiene una distribucion inducida por la binomial.

### Importancia

La inferencia clasica vive aqui:

- un intervalo de confianza usa la distribucion muestral de un estimador;
- una prueba de hipotesis usa la distribucion muestral de un estadistico bajo la nula.

## Estimacion puntual

Un estimador puntual es un estadistico destinado a aproximar un parametro.

### Ejemplos

- $\bar X$ estima $\mu$;
- $S^2$ estima $\sigma^2$;
- $\hat p$ estima $p$.

### Criterios de calidad

- insesgadez;
- varianza pequena;
- consistencia;
- robustez;
- interpretabilidad.

## Sesgo, precision y error cuadratico medio

### Sesgo

Un estimador $T$ de $\theta$ es insesgado si

$$
E[T]=\theta.
$$

### Precision

Se refiere a cuan concentrado esta el estimador, habitualmente medida por

$$
\operatorname{Var}(T).
$$

### Error cuadratico medio

Se define por

$$
E[(T-\theta)^2].
$$

Y satisface la descomposicion

$$
E[(T-\theta)^2]=\operatorname{Var}(T)+\operatorname{sesgo}(T)^2.
$$

### Comentario

Un estimador ligeramente sesgado puede ser preferible si reduce mucho la varianza. Esta tension aparece una y otra vez en estadistica.

## Consistencia

Un estimador $T_n$ de $\theta$ es consistente si

$$
T_n\to \theta
$$

en algun sentido apropiado, normalmente en probabilidad, cuando

$$
n\to\infty.
$$

La consistencia formaliza la idea de que al aumentar la muestra el procedimiento aprende el parametro verdadero.

## Intervalos de confianza

Un intervalo de confianza es un procedimiento aleatorio que produce, a partir de los datos, un conjunto de valores plausibles para el parametro.

### Comentario

La diferencia con la estimacion puntual es crucial:

- el estimador da un numero;
- el intervalo cuantifica tambien incertidumbre.

## Pruebas de hipotesis

Una prueba de hipotesis compara los datos con una afirmacion de referencia

$$
H_0
$$

frente a una alternativa

$$
H_1.
$$

Los conceptos clave son:

- error tipo I;
- error tipo II;
- nivel de significacion;
- potencia;
- valor-p.

## Modelo estadistico

Un modelo estadistico es una familia de distribuciones

$$
\{P_\theta:\theta\in\Theta\}
$$

para la muestra.

### Ejemplos

- Bernoulli:

$$
\theta=p\in(0,1);
$$

- normal:

$$
\theta=(\mu,\sigma^2);
$$

- Poisson:

$$
\theta=\lambda>0.
$$

### Comentario

La estadistica no opera sobre "datos puros", sino sobre datos dentro de un modelo.

## Diseno muestral

No toda coleccion de observaciones puede tratarse igual.

Hay que distinguir:

- muestreo aleatorio simple;
- muestreo estratificado;
- muestreo por conglomerados;
- estudios observacionales;
- experimentos controlados;
- series temporales;
- datos dependientes.

### Advertencia

Una formula inferencial correcta aplicada a un diseno sesgado no repara el sesgo del diseno.

## Muestreo y representatividad

El ideal de la muestra aleatoria simple busca que la muestra represente a la poblacion objetivo sin sesgos sistematicos.

### Problemas reales

- no respuesta;
- sesgo de seleccion;
- variables omitidas;
- dependencia entre observaciones;
- mediciones imprecisas.

La estadistica seria no ignora estos problemas: los incorpora o reconoce sus limites.

## Experimento frente a observacion

### Experimento

Permite intervenir y controlar condiciones.

### Estudio observacional

Se limita a registrar lo que ocurre sin controlar asignacion de tratamientos o condiciones.

### Comentario

La distincion es decisiva cuando se quiere interpretar causalidad. Una correlacion observada no equivale automaticamente a un efecto causal.

## Estadistica y probabilidad

La probabilidad describe como se generan los datos bajo un modelo. La estadistica usa los datos para aprender sobre el modelo.

Esta relacion puede esquematizarse asi:

- probabilidad: modelo -> datos;
- estadistica: datos -> modelo.

## Teoremas limite y estadistica moderna

La estadistica asintotica se apoya en resultados probabilisticos como:

- ley de los grandes numeros;
- teorema central del limite;
- convergencia en probabilidad;
- convergencia en distribucion.

Estos teoremas justifican por que muchos procedimientos funcionan bien cuando la muestra es grande.

## Error comun 1: tratar un estimador observado como si fuera el parametro

Observar

$$
\bar x=5.2
$$

no significa que

$$
\mu=5.2.
$$

Significa que el estimador tomo ese valor en la muestra observada.

## Error comun 2: ignorar el diseno muestral

Una muestra sesgada no se arregla con algebra posterior. Si el mecanismo de seleccion es defectuoso, la inferencia puede ser mala aunque la formula parezca impecable.

## Error comun 3: olvidar que los resultados son aleatorios antes de observar

Un intervalo de confianza o un valor-p se construyen a partir de distribuciones muestrales. Si se olvida ese paso aleatorio previo, la interpretacion se vuelve erratica.

## Practica guiada

### Ejercicio 1

Explica la diferencia entre parametro y estadistico.

#### Solucion

El parametro es una caracteristica fija y desconocida de la poblacion o del modelo. El estadistico es una funcion de la muestra, por tanto aleatoria antes de observarse.

### Ejercicio 2

Por que la muestra aleatoria simple es una hipotesis importante?

#### Solucion

Porque permite modelar la muestra mediante variables i.i.d., lo que hace posibles los calculos de distribuciones muestrales y la justificacion de muchos procedimientos inferenciales.

### Ejercicio 3

Que problema conceptual estudia la estadistica inferencial?

#### Solucion

Extraer informacion sobre parametros o modelos desconocidos a partir de una muestra finita sujeta a variabilidad aleatoria.

## Cierre

La estadistica empieza cuando entendemos que los datos observados no son el objeto final, sino una ventana ruidosa hacia un mecanismo desconocido. Su tarea es convertir esa ventana en conocimiento cuantificado, distinguiendo:

- poblacion de muestra;
- parametro de estadistico;
- variabilidad de estructura;
- descripcion de inferencia.

Sin esta arquitectura conceptual, las formulas posteriores se vuelven mecanicas y faciles de malinterpretar.
