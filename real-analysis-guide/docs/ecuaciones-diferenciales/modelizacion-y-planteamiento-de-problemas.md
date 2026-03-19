---
title: Modelizacion y planteamiento de problemas
description: Como nacen las ecuaciones diferenciales, que significan los estados y parametros, y como pasar de leyes fisicas o geometricas a PVI y PVF bien formulados.
---

# Modelizacion y planteamiento de problemas

## Donde empieza realmente una ecuacion diferencial

Una ecuacion diferencial no aparece primero como una tecnica de integracion, sino como una traduccion matematica de un principio:

- una ley de movimiento;
- una ley de conservacion;
- una tasa de cambio;
- una relacion geometrica local;
- una regla de interaccion entre variables.

La derivada entra porque describe informacion local. La solucion entra porque integra esa informacion local en una historia global.

Si esta pagina se entiende bien, muchas ecuaciones dejan de verse como ejercicios artificiales y pasan a leerse como modelos.

## Variable de estado, variable independiente y parametros

Un modelo diferencial serio empieza identificando tres cosas.

### Variable independiente

Suele ser tiempo $t$, pero tambien puede ser:

- posicion;
- longitud de arco;
- temperatura;
- otra magnitud de evolucion.

### Variable de estado

Es la cantidad desconocida que queremos describir:

$$
y(t),\quad x(t),\quad T(t),\quad N(t),
$$

segun el contexto.

### Parametros

Son constantes del modelo:

- masa;
- constante elastica;
- coeficiente de rozamiento;
- tasa de crecimiento;
- capacidad de carga.

Una parte importante del modelado consiste en no confundir parametros con variables.

## Definicion general de EDO

Una ecuacion diferencial ordinaria es una relacion entre una funcion desconocida y sus derivadas respecto de una sola variable independiente.

### Forma general de orden n

$$
F(x,y,y',\dots,y^{(n)})=0.
$$

### Forma explicita

En muchos casos puede escribirse como

$$
y^{(n)}=f(x,y,y',\dots,y^{(n-1)}).
$$

### Orden

El orden de la ecuacion es el de la derivada mas alta que aparece.

## Clasificaciones estructurales

### Autonoma y no autonoma

Una ecuacion de primer orden es autonoma si tiene la forma

$$
y'=f(y).
$$

No depende explicitamente de la variable independiente.

### Lineal y no lineal

Una ecuacion lineal de orden $n$ tiene la forma

$$
a_n(x)y^{(n)}+\cdots+a_1(x)y'+a_0(x)y=g(x),
$$

donde la funcion desconocida y sus derivadas aparecen solo en primer grado y no se multiplican entre si.

### Homogenea y no homogenea

La ecuacion lineal es homogenea si

$$
g(x)=0.
$$

En caso contrario es no homogenea.

## De una ley verbal a una ecuacion

Modelar no es "adivinar una EDO". Es seguir una cadena de decisiones.

### Esquema general

1. Elegir la variable de estado.
2. Identificar la magnitud cuya tasa de cambio se conoce.
3. Formular una ley cuantitativa.
4. Incorporar unidades y signos correctos.
5. Decidir condiciones iniciales o de frontera.
6. Interpretar parametros y rango de validez.

## Ejemplo 1: crecimiento poblacional simple

Supongamos una poblacion $N(t)$ y la hipotesis:

> La tasa de crecimiento es proporcional al tamano actual.

Eso se traduce en

$$
N'(t)=kN(t).
$$

Aqui:

- variable de estado: $N$;
- variable independiente: $t$;
- parametro: $k$.

La ley dice que cuanto mayor es la poblacion, mayor es el incremento instantaneo.

## Ejemplo 2: ley de enfriamiento de Newton

Sea $T(t)$ la temperatura de un objeto y $T_a$ la del ambiente. La hipotesis:

> La velocidad de enfriamiento es proporcional a la diferencia entre la temperatura del objeto y la ambiental.

Se traduce en

$$
T'(t)=-k(T(t)-T_a).
$$

El signo es crucial:

- si $T>T_a$, entonces $T'<0$;
- si $T<T_a$, entonces $T'>0$.

El modelo no solo produce una ecuacion; codifica un comportamiento cualitativo correcto.

## Ejemplo 3: caida libre

Si $x(t)$ es la posicion vertical de una particula y tomamos positivo hacia arriba, la segunda ley de Newton da

$$
mx''(t)=-mg.
$$

Equivalentemente,

$$
x''(t)=-g.
$$

Este ejemplo ensena algo clave:

- la posicion es variable de estado;
- la aceleracion es la derivada segunda;
- las leyes fisicas suelen producir ecuaciones de orden superior.

## Ejemplo 4: resorte lineal

Un resorte ideal con desplazamiento $x(t)$ respecto del equilibrio satisface la ley de Hooke:

$$
F=-kx.
$$

Por Newton:

$$
mx''=-kx.
$$

Entonces

$$
mx''+kx=0.
$$

Si anadimos amortiguamiento proporcional a la velocidad y una fuerza externa $F(t)$, aparece

$$
mx''+cx'+kx=F(t).
$$

Este tipo de ecuacion conecta mecanica, circuitos y oscilaciones.

## Familia de soluciones y numero de constantes

La solucion general de una EDO suele venir con parametros libres.

### Ejemplo

La ecuacion

$$
y'=2x
$$

tiene solucion general

$$
y=x^2+C.
$$

La ecuacion

$$
y''+y=0
$$

tiene solucion general

$$
y(t)=C_1\cos t+C_2\sin t.
$$

### Lectura

La cantidad de constantes libres refleja el orden de la ecuacion y el numero de condiciones que, en principio, hacen falta para seleccionar una solucion concreta.

## Problema de valor inicial

Un problema de valor inicial prescribe informacion en un solo punto.

### Orden uno

$$
y'=f(x,y),
\qquad
y(x_0)=y_0.
$$

### Orden dos

$$
y''=f(x,y,y'),
\qquad
y(x_0)=y_0,
\qquad
y'(x_0)=v_0.
$$

### Interpretacion

En mecanica:

- posicion inicial;
- velocidad inicial.

Un PVI es el formato natural de un sistema evolutivo en el tiempo.

## Problema de valor en la frontera

Un problema de valor en la frontera prescribe condiciones en puntos distintos del intervalo.

### Ejemplo

$$
y''+y=0,
\qquad
y(0)=0,
\qquad
y(\pi)=0.
$$

### Diferencia estructural con el PVI

En un PVI, bajo hipotesis locales razonables, suele haber existencia y unicidad local. En un PVF pueden darse tres escenarios:

- no hay solucion;
- hay una unica solucion;
- hay infinitas soluciones.

## Ejemplo 5: infinitas soluciones en un PVF

Para

$$
y''+y=0,
\qquad
y(0)=0,
\qquad
y(\pi)=0,
$$

la solucion general es

$$
y(t)=C_1\cos t+C_2\sin t.
$$

La condicion $y(0)=0$ fuerza

$$
C_1=0.
$$

La condicion $y(\pi)=0$ queda satisfecha automaticamente. Por tanto hay infinitas soluciones:

$$
y(t)=C_2\sin t.
$$

## Ejemplo 6: no existencia en un PVF

Si en cambio imponemos

$$
y(0)=0,
\qquad
y(\pi)=1,
$$

entonces no existe solucion, porque toda solucion con $y(0)=0$ satisface tambien

$$
y(\pi)=0.
$$

## EDO y geometria

Una ecuacion de primer orden

$$
y'=f(x,y)
$$

puede verse como un campo de pendientes. En cada punto del plano, el modelo asigna la pendiente que deberia tener una curva solucion.

### Consecuencia

Resolver una EDO es encontrar curvas cuyas tangentes coincidan con ese campo en todos sus puntos.

Esta interpretacion geometrica ayuda a entender:

- PVI como seleccion de una curva que pasa por un punto dado;
- unicidad como imposibilidad de dos trayectorias distintas saliendo del mismo punto;
- estabilidad como comportamiento de trayectorias cercanas.

## Reduccion a sistemas de primer orden

Toda ecuacion escalar de orden $n$ puede convertirse en un sistema de primer orden introduciendo variables auxiliares.

### Ejemplo

Si

$$
y''=f(x,y,y'),
$$

definimos

$$
u_1=y,
\qquad
u_2=y'.
$$

Entonces

$$
u_1'=u_2,
\qquad
u_2'=f(x,u_1,u_2).
$$

### Importancia

Esto muestra que la teoria de sistemas de primer orden no es un tema aparte: es el lenguaje general de toda la teoria local.

## Analisis dimensional

Un modelo bien planteado debe respetar unidades.

### Ejemplo

En

$$
N'=kN,
$$

si $N$ se mide en individuos y $t$ en dias, entonces $k$ debe medirse en

$$
\text{dia}^{-1}.
$$

### Comentario

El analisis dimensional no resuelve la ecuacion, pero detecta errores graves de modelado antes de calcular nada.

## Signos, equilibrio y plausibilidad

Muchos errores de modelado provienen de signos incorrectos.

### Ejemplo

En enfriamiento,

$$
T'=-k(T-T_a)
$$

tiene sentido:

- si $T>T_a$, la temperatura baja;
- si $T<T_a$, sube.

Si el signo fuera el contrario, el modelo predeciria alejamiento del ambiente, lo cual cambiaria radicalmente el fenomeno.

### Equilibrios

Los estados donde la derivada se anula son equilibrios del modelo. Localizarlos suele ser el primer paso cualitativo.

## Rango de validez del modelo

Un modelo nunca es "la realidad". Es una aproximacion bajo hipotesis.

### Ejemplos de limites de validez

- el crecimiento exponencial no puede describir indefinidamente una poblacion en recursos finitos;
- la ley de Hooke lineal falla para deformaciones grandes;
- el enfriamiento de Newton falla si la transferencia de calor no es lineal en la diferencia de temperaturas;
- el rozamiento proporcional a la velocidad no sirve en todos los regimenes.

Formular bien un problema incluye decir hasta donde se espera que el modelo sea fiable.

## Nondimensionalizacion

A menudo conviene reescalar variables para reducir parametros y hacer visible la estructura.

### Ejemplo esquematico

Si

$$
y'=ky,
$$

y definimos

$$
\tau=kt,
$$

entonces

$$
\frac{dy}{d\tau}=y.
$$

El parametro desaparece y se aisla la dinamica esencial.

### Comentario

La nondimensionalizacion es mucho mas que un truco algebraico:

- revela escalas naturales;
- compara efectos dominantes;
- simplifica analisis y simulacion.

## Cierre del modelo

Muchos problemas reales no entregan una ecuacion cerrada de inmediato. Se parte de balances o principios generales, pero para obtener una EDO concreta hacen falta **relaciones de cierre**.

### Ejemplo conceptual

Un balance puede decir:

$$
\text{acumulacion}=\text{entrada}-\text{salida}+\text{produccion},
$$

pero aun falta especificar como dependen entrada, salida o produccion del estado. Esa eleccion es ya parte del modelo, no una consecuencia automatica de la matematica.

### Lectura

Buena parte del oficio de modelar consiste en declarar con honestidad donde termina la ley fisica general y donde empieza la hipotesis constitutiva o empirica.

## Modelado y datos iniciales

Una misma ley diferencial puede producir soluciones muy distintas segun las condiciones iniciales. Por eso la ecuacion sola rara vez basta para describir una situacion concreta.

### Ejemplo

Para

$$
x''+x=0,
$$

el comportamiento depende de:

- posicion inicial;
- velocidad inicial.

Sin esos datos, el modelo describe una familia, no un fenomeno particular.

## Error comun 1: escribir una ecuacion sin interpretar los terminos

Cada termino debe tener origen claro:

- inercia;
- disipacion;
- forzamiento;
- reaccion;
- transporte.

Si no puedes explicar cada termino, probablemente el modelo aun no esta bien planteado.

## Error comun 2: confundir ecuacion con solucion

La ecuacion expresa una ley local. La solucion concreta depende de datos adicionales y de hipotesis de existencia.

## Error comun 3: olvidar el contexto del modelo

Una ecuacion puede ser algebraicamente impecable y fisicamente absurda si:

- las unidades no cuadran;
- los signos son incorrectos;
- el parametro tiene orden de magnitud imposible;
- el modelo se extrapola fuera de su rango.

## Chequeos de sanidad antes de resolver

Antes de lanzarse a integrar, conviene pasar por una lista corta:

1. Las unidades cuadran en todos los terminos.
2. Los signos producen el comportamiento esperado cerca de los equilibrios obvios.
3. Los parametros tienen orden de magnitud plausible.
4. El modelo respeta restricciones naturales como positividad, cotas o conservacion.
5. Las condiciones iniciales o de frontera realmente corresponden al experimento o situacion fisica.

### Lectura

Estos chequeos ahorran muchos errores. Una solucion exacta de un modelo mal planteado sigue siendo una mala descripcion del fenomeno.

## Practica guiada

### Ejercicio 1

Una sustancia se desintegra a una tasa proporcional a la cantidad presente. Plantea la EDO.

#### Solucion

Si $N(t)$ es la cantidad, la ley es

$$
N'=-kN,
\qquad k>0.
$$

### Ejercicio 2

Explica por que un problema de valor en la frontera puede no tener solucion unica aunque la ecuacion sea lineal.

#### Solucion

Porque las condiciones se imponen en puntos distintos y pueden ser compatibles con ninguna, una o muchas combinaciones de las constantes de integracion.

### Ejercicio 3

Convierte

$$
y''+3y'-2y=0
$$

en un sistema de primer orden.

#### Solucion

Tomando

$$
u_1=y,
\qquad
u_2=y',
$$

queda

$$
u_1'=u_2,
\qquad
u_2'=-3u_2+2u_1.
$$

## Cierre

Modelar con ecuaciones diferenciales significa traducir mecanismos locales en leyes de evolucion. Esa traduccion requiere:

- elegir bien las variables;
- interpretar correctamente parametros y signos;
- distinguir entre familia general y problema concreto;
- separar PVI de PVF;
- saber cuando el modelo es fisicamente o geometricamente razonable.

Si esta capa conceptual queda firme, los metodos de resolucion posteriores dejan de ser tecnicas aisladas y pasan a verse como herramientas para interrogar modelos concretos.
