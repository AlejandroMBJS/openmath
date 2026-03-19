---
title: Ecuaciones separables
description: Metodo de separacion de variables, justificacion rigurosa, soluciones de equilibrio, formas implicitas y ejemplos como logistica, mezclas y explosion finita.
---

# Ecuaciones separables

## La primera gran clase resoluble

Una ecuacion de primer orden es separable cuando puede reescribirse de manera que toda la dependencia en $x$ quede de un lado y toda la dependencia en $y$ del otro. Esa posibilidad convierte el problema diferencial en uno de integracion.

Su forma canonica es

$$
y'=g(x)h(y).
$$

Aunque parece una clase modesta, aqui ya aparecen casi todas las sutilezas que luego se repiten:

- division por expresiones que pueden anularse;
- soluciones de equilibrio;
- formas implicitas frente a explicitas;
- intervalos de validez;
- explosion en tiempo finito.

## Justificacion rigurosa del metodo

La escritura heuristica

$$
\frac{dy}{h(y)}=g(x)\,dx
$$

es util, pero no debe entenderse literalmente como algebra de diferenciales sin contexto. La version rigurosa es la siguiente.

Supongamos que $y$ es una solucion y que en cierto intervalo

$$
h(y(x))\ne 0.
$$

Entonces

$$
\frac{y'(x)}{h(y(x))}=g(x).
$$

Sea $H$ una primitiva de

$$
\frac{1}{h}.
$$

Por regla de la cadena,

$$
\frac{d}{dx}H(y(x))
=
H'(y(x))y'(x)
=
\frac{y'(x)}{h(y(x))}
=
g(x).
$$

Integrando:

$$
H(y(x))=\int g(x)\,dx+C.
$$

Esa es la solucion implicita general en la region donde $h(y)\ne 0$.

## El detalle que no se debe olvidar: equilibrios

Antes de dividir por $h(y)$, hay que buscar los ceros de $h$.

Si

$$
h(y_*)=0,
$$

entonces la funcion constante

$$
y(x)\equiv y_*
$$

es una solucion de equilibrio.

### Comentario

Estas soluciones suelen perderse si uno divide ciegamente por $h(y)$. En muchos modelos fisicos o biologicos, justamente son las soluciones mas importantes.

## Procedimiento general

1. Reescribir la ecuacion como

$$
y'=g(x)h(y).
$$

2. Encontrar primero las soluciones de equilibrio

$$
h(y)=0.
$$

3. En regiones donde $h(y)\ne 0$, escribir

$$
\frac{y'}{h(y)}=g(x).
$$

4. Integrar usando una primitiva de $1/h$.
5. Despejar $y$ si es posible; si no, dejar la solucion en forma implicita.
6. Imponer datos iniciales si existen.
7. Analizar el intervalo de validez y el comportamiento cualitativo.

## Ejemplo 1: crecimiento exponencial

La ecuacion

$$
y'=ky
$$

es separable con

$$
g(x)=k,
\qquad
h(y)=y.
$$

La solucion de equilibrio es

$$
y\equiv 0.
$$

Si $y\ne 0$,

$$
\frac{y'}{y}=k.
$$

Integrando:

$$
\ln|y|=kx+C,
$$

y por tanto

$$
y=Ce^{kx}.
$$

La familia completa incluye tambien el caso $C=0$, que recupera el equilibrio.

## Ejemplo 2: enfriamiento de Newton

Si $T(t)$ es la temperatura del cuerpo y $T_a$ la del ambiente,

$$
T'=-k(T-T_a).
$$

La solucion de equilibrio es

$$
T\equiv T_a.
$$

Separando,

$$
\frac{dT}{T-T_a}=-k\,dt.
$$

Integrando:

$$
\ln|T-T_a|=-kt+C,
$$

de donde

$$
T(t)=T_a+Ce^{-kt}.
$$

### Lectura

Toda solucion no constante se acerca exponencialmente al equilibrio.

## Ejemplo 3: crecimiento logistico

Consideremos

$$
y'=ky\left(1-\frac{y}{M}\right),
\qquad k>0,\ M>0.
$$

Las soluciones de equilibrio son

$$
y=0,
\qquad
y=M.
$$

Para

$$
y\ne 0,\ M,
$$

separamos:

$$
\frac{dy}{y(1-y/M)}=k\,dt.
$$

Como

$$
\frac{1}{y(1-y/M)}
=
\frac{M}{y(M-y)}
=
\frac{1}{y}+\frac{1}{M-y},
$$

obtenemos

$$
\int\left(\frac{1}{y}+\frac{1}{M-y}\right)\,dy
=
\int k\,dt.
$$

Entonces

$$
\ln|y|-\ln|M-y|=kt+C,
$$

o equivalentemente

$$
\ln\left|\frac{y}{M-y}\right|=kt+C.
$$

Despejando:

$$
y(t)=\frac{M}{1+A e^{-kt}}.
$$

### Interpretacion cualitativa

- si $0<y(0)<M$, la solucion crece hacia $M$;
- si $y(0)>M$, decrece hacia $M$;
- $M$ es equilibrio estable;
- $0$ es equilibrio inestable.

## Ejemplo 4: solucion implicita

Para

$$
y'=\frac{x^2}{1+y^3},
$$

separamos:

$$
(1+y^3)\,dy=x^2\,dx.
$$

Integrando:

$$
y+\frac{y^4}{4}=\frac{x^3}{3}+C.
$$

No hace falta despejar $y$ para que la solucion sea valida. La forma implicita puede ser la descripcion natural del problema.

## Ejemplo 5: explosion en tiempo finito

La ecuacion

$$
y'=y^2,
\qquad
y(0)=1
$$

es separable:

$$
\frac{dy}{y^2}=dx.
$$

Integrando:

$$
-\frac{1}{y}=x+C.
$$

Con el dato inicial resulta

$$
y(x)=\frac{1}{1-x}.
$$

### Observacion

La solucion existe solo para

$$
x<1.
$$

Asi aparece un punto crucial: una ecuacion separable puede resolverse explicitamente y aun asi no tener existencia global.

## Ejemplo 6: dato inicial y constante

Para

$$
y'=xy,
\qquad
y(0)=2,
$$

separamos:

$$
\frac{y'}{y}=x.
$$

Integrando:

$$
\ln|y|=\frac{x^2}{2}+C.
$$

Luego

$$
y=Ce^{x^2/2}.
$$

Imponiendo $y(0)=2$:

$$
C=2.
$$

Por tanto

$$
y(x)=2e^{x^2/2}.
$$

## Ejemplo 7: mezcla simple

Una cantidad $y(t)$ satisface

$$
y'=a-by,
\qquad b>0.
$$

Puede verse como ecuacion lineal, pero tambien como separable:

$$
\frac{dy}{a-by}=dt.
$$

Integrando:

$$
-\frac{1}{b}\ln|a-by|=t+C,
$$

y despejando:

$$
y(t)=\frac{a}{b}+Ce^{-bt}.
$$

Este ejemplo muestra que varias clases de EDO pueden superponerse.

## Soluciones maximas e intervalos de definicion

La integracion produce una familia formal, pero el intervalo real de existencia depende de:

- donde la formula tenga sentido;
- donde no se crucen singularidades de la integral;
- donde la solucion no salga de la region donde fue obtenida.

En el ejemplo logistico, por ejemplo, la solucion puede quedar definida para todo tiempo. En cambio, para

$$
y'=y^2
$$

la solucion explota.

## Equilibrios y retrato de fases en una dimension

Si la ecuacion es autonoma

$$
y'=h(y),
$$

el estudio de los signos de $h$ entre equilibrios da un retrato cualitativo completo:

- si $h(y)>0$, las soluciones crecen;
- si $h(y)<0$, decrecen;
- los ceros de $h$ son equilibrios;
- la estabilidad se lee del cambio de signo.

Esto convierte muchas ecuaciones separables autonomas en problemas de analisis cualitativo unidimensional.

## Barreras y no cruce de soluciones

En ecuaciones autonomas bien planteadas, los equilibrios actuan como barreras geometricas.

### Proposicion 1

Consideremos

$$
y'=h(y),
$$

donde

$$
h
$$

es continua y localmente Lipschitz. Si

$$
y_*
$$

es un equilibrio, entonces ninguna solucion no constante puede cruzar la recta

$$
y=y_*.
$$

### Justificacion

Si una solucion

$$
y(x)
$$

llegara a tomar el valor

$$
y_*
$$

en algun instante

$$
x_1,
$$

entonces el problema con dato inicial

$$
y(x_1)=y_*
$$

tendria al menos dos soluciones:

- la constante

$$
y\equiv y_*;
$$

- la trayectoria original, que venia desde otro valor.

Esto contradice unicidad local. Luego las soluciones quedan atrapadas en el intervalo delimitado por los equilibrios que las rodean.

### Lectura

Este hecho explica por que, en el modelo logistico, una solucion que empieza entre

$$
0
$$

y

$$
M
$$

permanece siempre en ese rango.

## Criterio integral de explosion en tiempo finito

Para ecuaciones autonomas separables tambien puede leerse la existencia global directamente en una integral.

### Proposicion 2

Supongamos que

$$
y'=h(y),
\qquad y(0)=y_0,
$$

con

$$
h(y)>0
$$

para

$$
y\ge y_0.
$$

Si

$$
\int_{y_0}^{\infty}\frac{ds}{h(s)}<\infty,
$$

entonces la solucion alcanza

$$
\infty
$$

en tiempo finito. Si, en cambio,

$$
\int_{y_0}^{\infty}\frac{ds}{h(s)}=\infty,
$$

no puede explotar hacia

$$
\infty
$$

en tiempo finito.

### Demostracion informal rigurosa

Separando variables,

$$
t=\int_{y_0}^{y(t)}\frac{ds}{h(s)}.
$$

Si la integral total hasta

$$
\infty
$$

es finita, basta un tiempo finito para recorrer todo el eje positivo. Si la integral diverge, llegar a valores arbitrariamente grandes exige tiempo infinito.

### Ejemplo 8: potencias

Para

$$
y'=y^p,
\qquad y(0)=y_0>0,
$$

tenemos

$$
\int_{y_0}^{\infty}\frac{ds}{s^p}.
$$

Esta integral:

- converge si

$$
p>1,
$$

de modo que hay explosion en tiempo finito;
- diverge si

$$
p\le 1,
$$

de modo que no hay explosion finita hacia

$$
\infty.
$$

Esto recupera el contraste clasico entre

$$
y'=y
$$

y

$$
y'=y^2.
$$

## Tiempo de llegada por cuadratura

En una ecuacion autonoma separable

$$
y'=h(y),
$$

si la solucion es monotona en un intervalo y

$$
h(y)\ne 0,
$$

el tiempo necesario para pasar de un nivel

$$
y_a
$$

a otro

$$
y_b
$$

viene dado por

$$
\Delta t=\int_{y_a}^{y_b}\frac{ds}{h(s)}.
$$

### Idea

La ecuacion

$$
\frac{dy}{dt}=h(y)
$$

puede invertirse como

$$
\frac{dt}{dy}=\frac{1}{h(y)}
$$

si el movimiento en

$$
y
$$

es monotono. Entonces el tiempo no se obtiene necesariamente despejando primero

$$
y(t),
$$

sino integrando directamente la velocidad inversa.

### Por que importa

Esta formula permite responder preguntas dinamicas finas sin resolver de manera explicita:

- cuanto tarda una trayectoria en acercarse a un equilibrio;
- si alcanza un nivel dado en tiempo finito;
- si una barrera se toca o solo se aproxima asintoticamente.

### Ejemplo conceptual

Para

$$
y'=y(1-y),
$$

el tiempo necesario para ir de

$$
y_a\in(0,1)
$$

a

$$
y_b\in(y_a,1)
$$

es

$$
\int_{y_a}^{y_b}\frac{ds}{s(1-s)}.
$$

Al hacer

$$
y_b\to 1^-,
$$

esa integral diverge. Eso explica por que el equilibrio

$$
y=1
$$

no se alcanza en tiempo finito: solo se aproxima asintoticamente.

## Soluciones monotona y sentido del tiempo

Si en un intervalo de estados vale

$$
h(y)>0,
$$

entonces toda solucion que permanezca en ese intervalo es estrictamente creciente. Si

$$
h(y)<0,
$$

es estrictamente decreciente.

### Consecuencia

Una solucion autonoma no puede oscilar dentro de una region donde el campo mantiene signo constante. Este principio simple descarta muchos comportamientos imposibles antes de hacer cuentas.

## No hay orbitas periodicas no constantes en una dimension

Si la ecuacion autonoma

$$
y'=h(y)
$$

esta bien planteada con unicidad local, entonces no existen soluciones periodicas no constantes.

### Razon conceptual

Una trayectoria periodica tendria que volver al mismo valor de

$$
y
$$

despues de un tiempo positivo. Pero en una ecuacion autonoma, repetir el mismo estado significa repetir exactamente la misma evolucion futura. En dimension uno eso fuerza a que la trayectoria quede atrapada en un recorrido monotono imposible de cerrar salvo que sea un equilibrio.

### Lectura

La dinamica autonoma unidimensional es extremadamente rigida:

- o bien la solucion es constante;
- o bien es monotona entre barreras;
- o bien se aproxima a equilibrios.

No hay ciclos limite ni oscilaciones cerradas genuinas. Esa riqueza dinamica solo aparece en dimension dos o mas.

## Error comun 1: dividir por una expresion que puede anularse

Si la ecuacion es

$$
y'=y(1-y),
$$

dividir por

$$
y(1-y)
$$

sin mencionar

$$
y=0,\qquad y=1
$$

elimina precisamente los equilibrios.

## Error comun 2: creer que siempre se puede despejar

No. La solucion implicita puede ser la forma natural y completa de la respuesta.

## Error comun 3: olvidar el intervalo de validez

Tener una formula no implica tener solucion global. Hay que analizar singularidades y explosion.

## Practica guiada

### Ejercicio 1

Resuelve

$$
y'=(1+x^2)(1+y^2).
$$

#### Solucion

Separamos:

$$
\frac{dy}{1+y^2}=(1+x^2)\,dx.
$$

Integrando:

$$
\arctan y=x+\frac{x^3}{3}+C.
$$

Por tanto

$$
y(x)=\tan\left(x+\frac{x^3}{3}+C\right),
$$

en los intervalos donde la tangente este definida.

### Ejercicio 2

Encuentra los equilibrios de

$$
y'=y(y-2)(y+1).
$$

#### Solucion

Son

$$
y=-1,\qquad y=0,\qquad y=2.
$$

El signo del polinomio entre esos puntos determina estabilidad e inestabilidad.

### Ejercicio 3

Por que

$$
y'=\frac{1}{y}
$$

requiere cuidado en torno a $y=0$?

#### Solucion

Porque la ecuacion no esta definida cuando $y=0$. El campo tiene una singularidad y las soluciones no pueden cruzar ese valor dentro del modelo dado.

## Cierre

Las ecuaciones separables ensenan algo mas profundo que "pasar todo lo de $y$ a la izquierda". En esta clase aparecen ya:

- justificacion por regla de la cadena;
- equilibrios;
- soluciones implicitas;
- estabilidad cualitativa;
- explosion y restricciones de dominio.

Entender todo eso es lo que convierte la separacion de variables en un metodo serio y no en una maniobra simbolica.
