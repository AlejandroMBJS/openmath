---
title: Prueba de hipotesis de una cola
description: Contrastes unilaterales para medias, region critica, interpretacion direccional y relacion con intervalos unilaterales.
---

# Prueba de hipotesis de una cola

## Motivacion

Una prueba de una cola se usa cuando la alternativa tiene direccion:

- detectar si un parametro es mayor que un umbral;
- detectar si es menor que un valor de seguridad;
- verificar si una mejora prometida realmente supera una referencia;
- decidir si un proceso descendio por debajo de un minimo aceptable.

No sirve para cualquier discrepancia, sino para discrepancias orientadas.

## Esquema tipico

Los dos formatos elementales son:

- cola derecha:

$$
H_0:\mu=\mu_0,
\qquad
H_1:\mu>\mu_0;
$$

- cola izquierda:

$$
H_0:\mu=\mu_0,
\qquad
H_1:\mu<\mu_0.
$$

## Regla conceptual

La direccion de la alternativa debe venir dictada por el problema antes de observar los datos.

### Ejemplo

Si se desea detectar si una concentracion supera un limite toxico, la alternativa natural es

$$
\mu>\mu_0.
$$

Si se desea comprobar si un tiempo medio de espera disminuyo, la alternativa natural es

$$
\mu<\mu_0.
$$

## Modelo clasico

Supongamos una muestra iid

$$
X_1,\dots,X_n
$$

con media

$$
\mu
$$

y varianza conocida

$$
\sigma^2.
$$

Queremos contrastar

$$
H_0:\mu=\mu_0
$$

frente a una alternativa unilateral.

## Estadistico de prueba

Se usa

$$
Z=\frac{\overline X-\mu_0}{\sigma/\sqrt n}.
$$

Bajo

$$
H_0,
$$

si la poblacion es normal o

$$
n
$$

es grande, se tiene exactamente o aproximadamente

$$
Z\sim N(0,1).
$$

## Cola derecha

Si la alternativa es

$$
H_1:\mu>\mu_0,
$$

al nivel

$$
\alpha
$$

se rechaza

$$
H_0
$$

si

$$
Z>z_\alpha,
$$

donde

$$
P(N(0,1)>z_\alpha)=\alpha.
$$

### Justificacion

La region critica se coloca en la cola derecha porque la alternativa afirma que medias grandes son evidencia contra

$$
H_0.
$$

## Cola izquierda

Si la alternativa es

$$
H_1:\mu<\mu_0,
$$

se rechaza cuando

$$
Z<-z_\alpha.
$$

La region critica pasa a la cola izquierda.

## Ejemplo 1

Una sustancia debe tener concentracion media

$$
5
$$

o menor para ser segura.

Se contrasta

$$
H_0:\mu=5,
\qquad
H_1:\mu>5.
$$

Con

$$
n=36,
\qquad
\overline x=5.4,
\qquad
\sigma=1.2,
$$

obtenemos

$$
Z=\frac{5.4-5}{1.2/6}=2.
$$

Al nivel

$$
\alpha=0.05,
$$

como

$$
z_{0.05}\approx 1.645,
$$

se rechaza

$$
H_0.
$$

### Interpretacion

La muestra sugiere que la media sobrepasa el umbral con evidencia suficiente al nivel fijado.

## Ejemplo 2

En un proceso industrial interesa detectar si el tiempo medio ha disminuido:

$$
H_0:\mu=20,
\qquad
H_1:\mu<20.
$$

Si

$$
n=49,
\quad
\overline x=19.2,
\quad
\sigma=2.8,
$$

entonces

$$
Z=\frac{19.2-20}{2.8/7}=-2.
$$

Al nivel

$$
0.05,
$$

se rechaza

$$
H_0
$$

porque

$$
-2<-1.645.
$$

## Valor-p unilateral

### Cola derecha

Si el estadistico observado es

$$
z_{\mathrm{obs}},
$$

el valor-p es

$$
p=P(Z\ge z_{\mathrm{obs}}).
$$

### Cola izquierda

El valor-p es

$$
p=P(Z\le z_{\mathrm{obs}}).
$$

### Regla

Se rechaza si

$$
p\le \alpha.
$$

## Comparacion con la prueba bilateral

Para el mismo nivel

$$
\alpha,
$$

la prueba unilateral concentra toda la masa de error en una sola cola.

Por eso tiene mas potencia frente a alternativas direccionales verdaderas.

### Costo y beneficio

- gana potencia en la direccion elegida;
- pierde capacidad para detectar desviaciones en la direccion opuesta;
- exige mayor honestidad en el planteamiento previo.

## Riesgo conceptual

La ganancia de potencia solo es legitima si la direccion se fija antes de observar la muestra.

No es valido mirar los datos y despues elegir la cola que favorece el rechazo.

### Error tipico

Observar

$$
\overline x>\mu_0
$$

y decidir en ese momento hacer prueba derecha. Eso invalida el nivel anunciado.

## Relacion con intervalos unilaterales

El contraste

$$
H_0:\mu=\mu_0
$$

frente a

$$
H_1:\mu>\mu_0
$$

al nivel

$$
\alpha
$$

equivale a comparar

$$
\mu_0
$$

con la cota inferior unilateral

$$
\overline X-z_\alpha\frac{\sigma}{\sqrt n}.
$$

Si

$$
\mu_0
$$

queda por debajo de esa cota, se rechaza.

Analogamente, para una alternativa izquierda se usa una cota superior unilateral.

## No rechazo y lectura correcta

No rechazar

$$
H_0
$$

no demuestra que

$$
\mu\le \mu_0
$$

o

$$
\mu\ge \mu_0
$$

segun el caso.

Solo indica que la muestra no aporta evidencia suficiente, al nivel fijado, para sostener la direccion propuesta.

## Potencia y efecto minimo detectable

Si la alternativa real es

$$
\mu=\mu_0+\delta
$$

en una prueba derecha, la potencia depende de:

- el tamano

$$
n;
$$

- la desviacion

$$
\sigma;
$$

- el umbral

$$
\delta;
$$

- el nivel

$$
\alpha.
$$

Cuanto mas pequena es

$$
\delta,
$$

mas dificil resulta detectarla.

## Caso con varianza desconocida

Si la poblacion es normal y

$$
\sigma
$$

es desconocida, se reemplaza

$$
Z
$$

por

$$
T=\frac{\overline X-\mu_0}{S/\sqrt n},
$$

que sigue una ley

$$
t_{n-1}
$$

bajo

$$
H_0.
$$

La logica unilateral es la misma, cambiando cuantiles normales por cuantiles

$$
t.
$$

## Ejemplo 3 con t

Supongamos

$$
n=10,
\qquad
\overline x=12.1,
\qquad
s=1.5,
\qquad
\mu_0=11.
$$

Se contrasta

$$
H_0:\mu=11,
\qquad
H_1:\mu>11.
$$

Entonces

$$
T=\frac{12.1-11}{1.5/\sqrt{10}}.
$$

Este valor se compara con

$$
t_{\alpha,9}.
$$

## Comentario de Neyman-Pearson

En familias con razon de verosimilitudes monotona, las pruebas unilaterales optimas suelen construirse a partir de estadisticos suficientes ordenados.

La prueba

$$
z
$$

es una realizacion elemental de este principio.

### Lectura mas precisa

En muchas familias regulares, las pruebas unilaterales alcanzan el ideal de ser **uniformemente mas potentes** entre las pruebas de nivel fijado para alternativas en una direccion. Esa es una de las razones profundas por las que el planteamiento unilateral es tan fuerte cuando la direccion estaba justificada de antemano.

## Pruebas unilaterales y no-inferioridad

En aplicaciones biomedicas, industriales o de control de calidad, a veces no se busca demostrar que un parametro es exactamente mayor que otro, sino que no cae por debajo de un margen tolerable.

### Esquema tipico

En vez de contrastar

$$
\mu=\mu_0,
$$

se plantea algo como

$$
H_0:\mu\le \mu_0-\Delta,
\qquad
H_1:\mu>\mu_0-\Delta,
$$

donde

$$
\Delta>0
$$

es un margen de no-inferioridad.

### Lectura

Matematicamente sigue siendo una prueba de una cola, pero conceptualmente cambia el problema: ya no se pide superioridad absoluta, sino superar un umbral minimo aceptable.

## Flujo de trabajo digerible

1. Formular la hipotesis alternativa con direccion clara.
2. Justificar por que esa direccion estaba fijada antes de ver la muestra.
3. Elegir el estadistico y su distribucion nula.
4. Calcular el estadistico observado.
5. Construir la region critica unilateral o el valor-p unilateral.
6. Decidir si se rechaza o no se rechaza

$$
H_0.
$$

7. Interpretar el resultado en contexto.

## Practica guiada

### Problema 1

Un fabricante afirma que la vida media de una bateria es al menos

$$
500
$$

horas. Se desea detectar si en realidad es menor.

#### Tarea

Escribir las hipotesis correctas y explicar por que el contraste debe ser unilateral izquierdo.

### Problema 2

Se tiene

$$
n=25,
\qquad
\overline x=10.6,
\qquad
\sigma=2,
\qquad
\mu_0=10.
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

1. calcular

$$
Z=\frac{10.6-10}{2/5};
$$

2. comparar con

$$
1.645.
$$

### Problema 3

Explicar por que no es correcto usar prueba unilateral cuando una desviacion en ambos sentidos seria relevante.

## Errores frecuentes

- Elegir la direccion despues de ver los datos.
- Presentar una prueba unilateral como si fuera bilateral.
- Concluir verdad de la desigualdad alternativa a partir del no rechazo.
- Ignorar que la potencia depende de la direccion escogida.
- Olvidar que una cola mal elegida puede volver ciega a la prueba.

## Cierre

Las pruebas de una cola son herramientas potentes, pero solo cuando la direccion de interes esta dictada por la estructura cientifica del problema y no por conveniencia retrospectiva. Bien usadas, convierten conocimiento direccional previo en mayor potencia. Mal usadas, distorsionan completamente la interpretacion inferencial.
