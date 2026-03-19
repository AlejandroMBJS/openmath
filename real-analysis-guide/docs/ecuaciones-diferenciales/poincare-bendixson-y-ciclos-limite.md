---
title: Poincare-Bendixson y ciclos limite
description: Omega-limites, regiones atrapantes, criterio de Bendixson-Dulac y teorema de Poincare-Bendixson para la dinamica plana.
---

# Poincare-Bendixson y ciclos limite

## Por que el plano es especial

En dimension uno la dinamica autonoma es muy rigida. En dimension tres o mas puede haber comportamiento recurrente muy complejo. El plano

$$
\mathbb{R}^2
$$

es el punto intermedio extraordinario: suficientemente rico para admitir orbitas periodicas, pero aun lo bastante rigido como para excluir caos local del tipo de dimensiones superiores.

El teorema de Poincare-Bendixson captura exactamente esa rigidez.

## Sistemas planos autonomos

Consideramos

$$
\dot x=f(x,y),
\qquad
\dot y=g(x,y),
$$

con

$$
f,g
$$

suficientemente regulares para garantizar existencia y unicidad local.

## Orbitas, semiorbitas y conjuntos omega-limite

La orbita positiva de un dato inicial

$$
z_0
$$

es el conjunto

$$
\{\varphi_t(z_0):t\ge 0\}.
$$

El conjunto

$$
\omega(z_0)
$$

de omega-limite recoge los puntos de acumulacion cuando

$$
t\to\infty.
$$

### Lectura

No describe el camino transitorio, sino el destino asintotico de la trayectoria.

## Regiones atrapantes

Un conjunto

$$
K
$$

es positivamente invariante si toda trayectoria que empieza en

$$
K
$$

permanece en

$$
K
$$

para todo

$$
t\ge 0.
$$

### Importancia

Si una orbita queda atrapada en una region compacta, entonces tiene algun conjunto omega-limite no vacio, compacto e invariante.

## Ciclos limite

Una orbita periodica aislada se llama **ciclo limite**.

### Estable

Es estable si las trayectorias vecinas permanecen cerca de ella.

### Asintoticamente estable

Es atractora si las trayectorias vecinas convergen a la orbita periodica.

### Inestable

Pequenas perturbaciones pueden apartar la trayectoria de la orbita.

## Criterio de Bendixson

Si en una region simplemente conexa la divergencia

$$
\frac{\partial f}{\partial x}+\frac{\partial g}{\partial y}
$$

tiene signo estricto constante y no se anula, entonces no hay orbitas periodicas completas contenidas en esa region.

### Lectura

La divergencia de signo fijo impide que el flujo cierre area del modo necesario para sostener un ciclo.

## Criterio de Bendixson-Dulac

Mas generalmente, si existe una funcion

$$
B(x,y)
$$

de clase suficiente tal que

$$
\nabla\cdot (Bf,Bg)
$$

tiene signo constante no nulo en una region simplemente conexa, entonces tampoco hay orbitas periodicas alli.

### Por que importa

El multiplicador de Dulac amplifica enormemente el alcance del criterio. Permite descartar ciclos cuando la divergencia original cambia de signo.

## Teorema de Poincare-Bendixson

### Enunciado informal

Sea una semiorbita positiva contenida en un conjunto compacto del plano y supongamos que su conjunto omega-limite no contiene equilibrios. Entonces ese conjunto omega-limite es una orbita periodica.

### Lectura

En el plano, una trayectoria acotada no puede hacer cualquier cosa:

- o converge a un equilibrio;
- o se organiza alrededor de una orbita periodica;
- o conecta objetos invariantes por separatrices.

No hay atractores extranos en este escenario clasico.

## Consecuencias

Si una region atrapante compacta no contiene equilibrios, debe contener una orbita periodica.

Si una trayectoria es acotada y no converge a un equilibrio, la recurrencia plana obliga a mirar ciclos limite.

## Ejemplo 1: exclusion por divergencia

Considere

$$
\dot x=-x+y,
\qquad
\dot y=-x-y.
$$

La divergencia es

$$
\frac{\partial f}{\partial x}+\frac{\partial g}{\partial y}=-1-1=-2.
$$

Tiene signo negativo constante. Por Bendixson, no puede haber orbitas periodicas no triviales.

## Ejemplo 2: oscilador de Van der Pol

El sistema

$$
\dot x=y,
\qquad
\dot y=\mu(1-x^2)y-x
$$

con

$$
\mu>0
$$

es el ejemplo clasico donde aparece un ciclo limite estable. La divergencia cambia de signo, de modo que el criterio de exclusiones simples ya no basta. El analisis usa regiones atrapantes y Poincare-Bendixson para justificar la existencia de una orbita periodica.

### Lectura

Este ejemplo muestra que el plano no solo permite ciclos: tambien permite su estabilizacion como objetos atractores.

## Ejemplo 3: por que la dimension tres cambia todo

En dimension

$$
3
$$

ya no existe un anlogo tan rigido de Poincare-Bendixson. Pueden aparecer:

- toros invariantes;
- homoclinicas complejas;
- caos determinista.

### Moral

La teoria plana es profunda precisamente porque es el ultimo lugar donde una clasificacion cualitativa relativamente cerrada sigue siendo posible.

## Relacion con secciones de Poincare

Una orbita periodica puede estudiarse mediante un mapa de retorno transversal. Aunque la teoria completa pertenece ya a sistemas dinamicos mas avanzados, la idea es esta:

- se corta el flujo por una seccion transversal;
- se observa el retorno de trayectorias cercanas;
- la estabilidad del ciclo se reduce a la estabilidad de un punto fijo del mapa.

Esta reduccion es el puente natural hacia teoria moderna de bifurcaciones y dinamica global.

## Errores frecuentes

- Creer que toda orbita acotada del plano converge a un equilibrio.
- Aplicar Bendixson en regiones no simplemente conexas sin cuidado.
- Pensar que Poincare-Bendixson vale igual en dimension mayor que dos.
- Confundir una orbita cerrada aislada con una familia continua de orbitas cerradas tipo centro lineal.

## Practica guiada

### Ejercicio 1

Usa divergencia para descartar orbitas periodicas en

$$
\dot x=x-y,
\qquad
\dot y=x-2y.
$$

### Ejercicio 2

Explica por que una region atrapante plana sin equilibrios fuerza la existencia de una orbita periodica.

### Ejercicio 3

Compara un centro lineal

$$
\dot x=-y,\ \dot y=x
$$

con un ciclo limite aislado.

## Cierre

Poincare-Bendixson convierte la dinamica plana en una teoria de rigidez geometrica. Es uno de los resultados que realmente separa el estudio avanzado de EDO de un simple repertorio de metodos de integracion.
