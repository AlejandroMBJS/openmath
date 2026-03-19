---
title: Analisis cualitativo y campos de direcciones
description: Lectura geometrica de ecuaciones diferenciales, campos de pendientes, retratos de fase, puntos de equilibrio y estabilidad sin depender de soluciones cerradas.
---

# Analisis cualitativo y campos de direcciones

## Por que este tema es indispensable

No toda ecuacion diferencial se resuelve por cuadraturas o con formulas cerradas. Incluso cuando existe una solucion explicita, a menudo la informacion conceptual mas importante no es la formula, sino:

- hacia donde se mueven las trayectorias;
- si existen estados de equilibrio;
- si esos equilibrios son estables;
- si las soluciones explotan o permanecen acotadas;
- como cambia el retrato al variar condiciones iniciales.

El analisis cualitativo responde estas preguntas sin exigir una solucion exacta.

## Campo de direcciones

Consideremos una ecuacion de primer orden

$$
y'=f(x,y).
$$

En cada punto

$$
(x,y)
$$

del plano, el valor

$$
f(x,y)
$$

indica la pendiente de la curva solucion que pasa por ese punto.

Un **campo de direcciones** o **campo de pendientes** asigna a cada punto un pequeno segmento con pendiente

$$
f(x,y).
$$

## Lectura geometrica

Si en una region:

- $f(x,y)>0$, las soluciones crecen;
- $f(x,y)<0$, las soluciones decrecen;
- $f(x,y)=0$, aparecen tangentes horizontales.

Antes de integrar nada, el campo ya revela la dinamica local del sistema.

## Curvas integrales

Una solucion

$$
y=y(x)
$$

se llama **curva integral** del campo porque en cada punto su tangente coincide con la pendiente impuesta por la ecuacion:

$$
y'(x)=f(x,y(x)).
$$

El campo de direcciones es, por tanto, un retrato local de todas las curvas integrales posibles.

## Papel del teorema de existencia y unicidad

Si

$$
f
$$

es continua y localmente Lipschitz en

$$
y,
$$

entonces por cada punto inicial pasa una unica solucion local.

### Consecuencia geometrica

Las curvas integrales no pueden cortarse entre si en una region donde valga unicidad. Si dos soluciones se cruzaran en un punto, ambas resolverian el mismo PVI y deberian coincidir.

## Ecuaciones autonomas

Una ecuacion de la forma

$$
y'=g(y)
$$

se llama **autonoma** porque la derivada depende solo de

$$
y
$$

y no de

$$
x.
$$

Estas ecuaciones admiten un analisis cualitativo especialmente limpio.

## Puntos de equilibrio

Un valor

$$
y_*
$$

es un **punto de equilibrio** si

$$
g(y_*)=0.
$$

Entonces la funcion constante

$$
y(x)\equiv y_*
$$

es solucion.

### Interpretacion

Los equilibrios representan estados estacionarios del sistema.

## Linea de fase

Para ecuaciones autonomas en una variable, toda la dinamica puede resumirse en la **linea de fase**:

1. se localizan los ceros de

$$
g;
$$

2. se estudia el signo de

$$
g(y)
$$

en los intervalos determinados por esos ceros;
3. se dibujan flechas:

- hacia arriba si

$$
g(y)>0;
$$

- hacia abajo si

$$
g(y)<0.
$$

## Estabilidad de equilibrios

Sea

$$
y_*
$$

un equilibrio.

### Estable

Es estable si soluciones que parten cerca permanecen cerca.

### Asintoticamente estable

Es asintoticamente estable si, ademas, soluciones cercanas convergen a

$$
y_*.
$$

### Inestable

Es inestable si hay condiciones iniciales arbitrariamente cercanas cuyas soluciones se alejan.

## Criterio de signo para ecuaciones autonomas escalares

Si cerca de

$$
y_*
$$

las flechas apuntan hacia el equilibrio desde ambos lados, entonces el equilibrio es asintoticamente estable.

Si las flechas apuntan en sentido opuesto, alejandose del equilibrio, es inestable.

Si apuntan hacia el equilibrio desde un solo lado y se alejan desde el otro, se habla a veces de semiestabilidad.

## No pueden cruzarse las trayectorias

En presencia de unicidad, dos soluciones distintas no pueden cortarse.

### Razon

Si dos trayectorias coincidieran en un punto

$$
(x_0,y_0),
$$

ambas resolverian el mismo problema de Cauchy y, por unicidad, deberian ser la misma solucion.

### Lectura

Esta observacion organiza casi toda la teoria cualitativa escalar:

- impide que el orden entre soluciones se invierta;
- justifica el principio de comparacion;
- hace posible hablar de barreras y regiones invariantes con seguridad.

## Linearizacion

Si

$$
g
$$

es derivable, cerca de un equilibrio

$$
y_*
$$

puede aproximarse por

$$
g(y)\approx g'(y_*)(y-y_*).
$$

### Regla practica

- si

$$
g'(y_*)<0,
$$

el equilibrio suele ser asintoticamente estable;
- si

$$
g'(y_*)>0,
$$

es inestable.

En una variable esta regla se deduce directamente del signo de

$$
g
$$

a ambos lados del equilibrio.

## Ejemplo 1: crecimiento logistic o

Consideremos

$$
y'=y(1-y).
$$

### Equilibrios

Se anula cuando

$$
y=0
\qquad \text{y} \qquad
y=1.
$$

### Analisis de signo

- si

$$
y<0,
$$

entonces

$$
y(1-y)<0;
$$

- si

$$
0<y<1,
$$

entonces

$$
y(1-y)>0;
$$

- si

$$
y>1,
$$

entonces

$$
y(1-y)<0.
$$

### Conclusion dinamica

- el equilibrio

$$
y=0
$$

es inestable;
- el equilibrio

$$
y=1
$$

es asintoticamente estable.

### Lectura fisica

Si

$$
y
$$

representa una poblacion normalizada, el sistema tiende a la capacidad de carga

$$
1.
$$

## Ejemplo 2: ecuacion

$$
y'=y^2-1
$$

### Equilibrios

$$
y=\pm 1.
$$

### Signo

- si

$$
\lvert y\rvert >1,
$$

entonces

$$
y^2-1>0;
$$

- si

$$
-1<y<1,
$$

entonces

$$
y^2-1<0.
$$

### Conclusiones

- en

$$
y=-1
$$

las flechas llegan desde ambos lados, luego es asintoticamente estable;
- en

$$
y=1
$$

las flechas se alejan, luego es inestable.

## Ejemplo 3: falla de unicidad

Consideremos

$$
y'=\sqrt{|y|},
\qquad
y(0)=0.
$$

Aqui

$$
f(y)=\sqrt{|y|}
$$

es continua, pero no Lipschitz cerca de

$$
y=0.
$$

### Consecuencia

No hay unicidad. Existen multiples soluciones, por ejemplo:

- la solucion identicamente nula;
- soluciones que permanecen en

$$
0
$$

hasta cierto tiempo

$$
t=a
$$

y luego despegan.

### Leccion

El retrato cualitativo no solo depende de pendientes, sino tambien de las hipotesis que impiden bifurcaciones no unicas desde el mismo dato inicial.

## Isoclinas

Una **isoclina** es una curva en la que la pendiente es constante:

$$
f(x,y)=c.
$$

Trazar varias isoclinas ayuda a organizar visualmente el campo de direcciones.

### Uso practico

Si se conocen las curvas donde

$$
f(x,y)=0,\ 1,\ -1,\ 2,\ -2,
$$

ya se obtiene una imagen gruesa pero informativa del comportamiento de soluciones.

## Monotonia por regiones

Para una ecuacion general

$$
y'=f(x,y),
$$

pueden estudiarse regiones donde:

- $f>0$ y por tanto las soluciones suben;
- $f<0$ y por tanto bajan;
- $f=0$ y aparecen nullclines o curvas de tangencia horizontal.

Esto es una version no autonoma del analisis de signo.

## Nullclines

Las curvas dadas por

$$
f(x,y)=0
$$

se llaman a menudo **nullclines**. Sobre ellas, las soluciones tienen tangente horizontal.

### Lectura

Aunque la palabra se vuelve mas comun en sistemas, ya en ecuaciones escalares no autonomas las nullclines organizan el plano:

- separan regiones de crecimiento y decrecimiento;
- ayudan a detectar barreras geometricas;
- sirven como esqueleto para dibujar el campo de direcciones.

## Barreras y regiones invariantes

Una region del plano es **invariante** si una solucion que empieza en ella no puede salir mientras exista.

En ecuaciones escalares, muchas veces se prueban invariancias usando el signo del campo en la frontera.

### Ejemplo

En el logistic o

$$
y'=y(1-y),
$$

el intervalo

$$
[0,1]
$$

es invariante:

- en

$$
y=0
$$

el campo vale

$$
0;
$$

- en

$$
y=1
$$

tambien vale

$$
0;
$$

- en el interior

$$
0<y<1
$$

las soluciones permanecen dentro al avanzar.

## Principio de comparacion

Muchas veces no hace falta resolver exactamente para acotar una solucion. Si

$$
y'=f(x,y)
$$

y se tienen funciones

$$
\underline y,\ \overline y
$$

que satisfacen desigualdades diferenciales compatibles, pueden actuar como subsolucion y supersolucion.

### Lectura

La idea es simple y poderosa: si una trayectoria empieza atrapada entre dos curvas barrera y el campo apunta hacia adentro en la frontera, la solucion queda controlada sin integracion explicita. Este principio es la base de muchas pruebas de acotacion y no explosion.

## Comparacion fuerte y preservacion del orden

En ecuaciones escalares con unicidad, el orden entre datos iniciales se preserva al evolucionar.

### Esquema

Si

$$
y_1(x_0)\le y_2(x_0),
$$

entonces mientras ambas soluciones existan se espera

$$
y_1(x)\le y_2(x).
$$

### Lectura

La razon profunda es que, si el orden se invirtiera, las trayectorias tendrian que cruzarse. La unicidad lo impide.

### Moral

Esta preservacion del orden es una de las propiedades mas rigidas de la dinamica escalar y explica por que el analisis cualitativo en una variable es tan poderoso.

## Tiempo de explosion

El analisis cualitativo tambien advierte si una solucion puede hacerse infinita en tiempo finito.

### Ejemplo

Para

$$
y'=y^2,
\qquad
y(0)=y_0>0,
$$

la solucion exacta es

$$
y(t)=\frac{y_0}{1-ty_0},
$$

que explota en

$$
t=\frac{1}{y_0}.
$$

Pero incluso antes de integrar, el signo

$$
y'>0
$$

y el crecimiento acelerado del campo sugieren una salida rapida hacia valores grandes.

## Dinamica global en una variable autonoma

Las ecuaciones autonomas escalares tienen una restriccion estructural muy fuerte: no pueden exhibir la complejidad oscilatoria de sistemas de dimension mayor.

### Lectura

Bajo unicidad, una solucion no constante solo puede hacer tres cosas a largo plazo:

- converger a un equilibrio;
- salir hacia el borde del dominio o explotar;
- permanecer monotona mientras exista.

### Consecuencia

No hay orbitas periodicas no triviales en una ecuacion autonoma escalar con unicidad. Una oscilacion cerrada obligaria a repetir valores y eso forzaria el cruce de la misma trayectoria consigo misma en tiempos distintos.

## Conjuntos omega-limite en dimension uno

La simplicidad de la dinamica escalar tambien se refleja en sus posibles limites asintoticos.

### Lectura

Si una trayectoria autonoma escalar permanece acotada y existe para todo tiempo futuro, su conjunto

$$
\omega
$$

-limite no puede ser complicado:

- o bien converge a un equilibrio;
- o bien queda atrapada por la estructura del borde del dominio.

### Moral

En una dimension, la geometria y la unicidad colapsan la posibilidad de caos u oscilaciones recurrentes genuinas. El comportamiento asintotico queda rigidamente gobernado por los equilibrios.

## Retrato local cerca de un equilibrio

Aun sin resolver, puede seguirse un esquema sistematico:

1. localizar equilibrios;
2. estudiar signo a izquierda y derecha;
3. clasificar estabilidad;
4. describir monotonia de soluciones;
5. usar unicidad para impedir cruces;
6. si hace falta, linealizar.

## Ejemplo 4: enfriamiento de Newton

La ley de enfriamiento idealizada toma la forma

$$
T'=-k(T-T_a),
\qquad
k>0.
$$

### Equilibrio

$$
T=T_a.
$$

### Signo

- si

$$
T>T_a,
$$

entonces

$$
T'<0;
$$

- si

$$
T<T_a,
$$

entonces

$$
T'>0.
$$

### Conclusion

La temperatura ambiente es un equilibrio asintoticamente estable.

## Practica guiada

### Problema 1

Analizar cualitativamente

$$
y'=y(2-y).
$$

#### Guion

1. hallar equilibrios;
2. determinar el signo de

$$
y(2-y)
$$

en los intervalos correspondientes;
3. clasificar estabilidad.

### Problema 2

Decidir si

$$
y=0
$$

es estable para

$$
y'=y^3.
$$

#### Idea

Como

$$
y^3
$$

tiene el mismo signo que

$$
y,
$$

las soluciones positivas crecen y las negativas decrecen aun mas, alejandose del origen.

### Problema 3

Explicar por que dos soluciones distintas no pueden cortarse si el campo satisface unicidad local.

#### Idea

Si se cruzaran en un punto, ambas compartirian el mismo dato inicial en ese punto, contradiciendo el teorema de unicidad.

## Errores frecuentes

- Creer que sin formula explicita no puede decirse nada serio.
- Confundir estabilidad con acotacion.
- Dibujar flechas sin revisar el signo del campo.
- Ignorar el papel de unicidad y permitir cruces imposibles.
- Clasificar equilibrios solo por intuicion grafica sin verificar el signo.

## Puente hacia el resto del bloque

El analisis cualitativo prepara:

- ecuaciones autonomas no lineales;
- sistemas y retratos de fase;
- estabilidad lineal y no lineal;
- modelos fisicos donde interesa mas la dinamica que la solucion cerrada.

Tambien hace que los metodos exactos se interpreten mejor: resolver ya no es solo "encontrar una formula", sino entender una familia de trayectorias.

## Cierre

Los campos de direcciones y la linea de fase son el paso natural entre la teoria abstracta de existencia y la resolucion explicita de casos especiales. Permiten estudiar comportamiento, estabilidad y estructura dinamica sin depender de integraciones cerradas, y por eso son parte esencial de una teoria madura de ecuaciones diferenciales.
