---
title: Metodo de biseccion
description: Metodo robusto para localizar raices por intervalos anidados, con convergencia garantizada y cota explicita del error.
---

# Metodo de biseccion

## Motivacion

El metodo de biseccion es el punto de partida natural para metodos numericos de raices porque separa dos problemas que a menudo se confunden:

- **existencia** de una raiz;
- **aproximacion** efectiva de esa raiz.

Si una funcion continua cambia de signo en un intervalo, el teorema del valor intermedio garantiza que existe al menos una raiz dentro. La biseccion convierte esa garantia cualitativa en un procedimiento cuantitativo de aproximacion.

## Hipotesis

Sea

$$
f:[a,b]\to \mathbb{R}
$$

continua, con

$$
f(a)f(b)<0.
$$

Entonces existe

$$
\alpha\in (a,b)
$$

tal que

$$
f(\alpha)=0.
$$

## Idea geometrica

Se toma el punto medio

$$
c=\frac{a+b}{2}.
$$

Si

$$
f(c)=0,
$$

hemos terminado.

Si no, el cambio de signo debe persistir en uno de los subintervalos:

$$
[a,c]
\quad \text{o} \quad
[c,b].
$$

Se elige ese subintervalo y se repite el proceso.

## Algoritmo

Dado un intervalo inicial

$$
[a_0,b_0]
$$

con

$$
f(a_0)f(b_0)<0,
$$

definimos iterativamente:

$$
c_n=\frac{a_n+b_n}{2}.
$$

Si

$$
f(c_n)=0,
$$

paramos.

Si

$$
f(a_n)f(c_n)<0,
$$

ponemos

$$
a_{n+1}=a_n,\qquad b_{n+1}=c_n.
$$

Si no, tomamos

$$
a_{n+1}=c_n,\qquad b_{n+1}=b_n.
$$

## Invariante fundamental

### Proposicion 1

Para todo

$$
n\ge 0
$$

se cumple:

1. 

$$
[a_{n+1},b_{n+1}]\subseteq [a_n,b_n];
$$

2. 

$$
f(a_n)f(b_n)<0;
$$

3. existe al menos una raiz de

$$
f
$$

en

$$
[a_n,b_n].
$$

### Demostracion

La construccion del algoritmo garantiza que siempre se elige el subintervalo donde persiste el cambio de signo. La continuidad de

$$
f
$$

implica entonces, por el teorema del valor intermedio, que cada intervalo conserva al menos una raiz.

## Longitud del intervalo

### Proposicion 2

La longitud del intervalo despues de

$$
n
$$

iteraciones es

$$
b_n-a_n=\frac{b_0-a_0}{2^n}.
$$

### Demostracion

Cada paso divide la longitud exactamente entre

$$
2.
$$

Por induccion:

$$
b_n-a_n=\frac{b_0-a_0}{2^n}.
$$

## Convergencia

### Teorema 3

La sucesion de puntos medios

$$
c_n
$$

converge a una raiz

$$
\alpha
$$

de

$$
f.
$$

### Demostracion

Los intervalos

$$
[a_n,b_n]
$$

son cerrados, acotados, anidados y sus longitudes tienden a

$$
0.
$$

Por completitud de

$$
\mathbb{R},
$$

la interseccion

$$
\bigcap_{n=0}^\infty [a_n,b_n]
$$

contiene exactamente un punto, digamos

$$
\alpha.
$$

Como cada intervalo contiene una raiz, y las longitudes colapsan a cero, ese punto debe satisfacer

$$
f(\alpha)=0.
$$

Ademas,

$$
\lvert c_n-\alpha\rvert\le \frac{b_n-a_n}{2}.
$$

## Error a priori

Como

$$
\alpha\in [a_n,b_n],
$$

tenemos la cota

$$
\lvert c_n-\alpha\rvert\le \frac{b_0-a_0}{2^{n+1}}.
$$

Esta formula es una de las mayores fortalezas del metodo: el error queda controlado independientemente del comportamiento fino de la derivada.

## Numero de iteraciones necesario

Si queremos garantizar

$$
\lvert c_n-\alpha\rvert\le \varepsilon,
$$

basta imponer

$$
\frac{b_0-a_0}{2^{n+1}}\le \varepsilon.
$$

Equivalentemente:

$$
n\ge \log_2\left(\frac{b_0-a_0}{\varepsilon}\right)-1.
$$

En la practica se toma el menor entero que satisfaga la desigualdad.

## Velocidad de convergencia

La biseccion tiene convergencia lineal con razon

$$
\frac12.
$$

Esto significa que en cada iteracion se gana aproximadamente un bit de precision.

No es el metodo mas rapido, pero si uno de los mas fiables.

## <a id="ejemplo-de-biseccion"></a> Ejemplo de biseccion

Busquemos una raiz de

$$
f(x)=x^2-2
$$

en

$$
[1,2].
$$

Tenemos

$$
f(1)=-1,\qquad f(2)=2,
$$

luego hay una raiz en el intervalo.

### Iteracion 1

$$
c_0=\frac{1+2}{2}=1.5,
$$

$$
f(1.5)=0.25>0.
$$

La raiz queda en

$$
[1,1.5].
$$

### Iteracion 2

$$
c_1=1.25,
$$

$$
f(1.25)=-0.4375<0.
$$

La raiz queda en

$$
[1.25,1.5].
$$

### Iteracion 3

$$
c_2=1.375,
$$

$$
f(1.375)=-0.109375<0.
$$

La raiz queda en

$$
[1.375,1.5].
$$

### Iteracion 4

$$
c_3=1.4375,
$$

$$
f(1.4375)=0.06640625>0.
$$

La raiz queda en

$$
[1.375,1.4375].
$$

Ya vemos la aproximacion hacia

$$
\sqrt 2\approx 1.41421356.
$$

## <a id="error-y-aproximacion-en-biseccion"></a> Error y aproximacion en biseccion

La biseccion ofrece dos tipos de control del error.

### Error a priori

Antes de ejecutar el metodo, sabemos que tras

$$
n
$$

iteraciones:

$$
\lvert c_n-\alpha\rvert\le \frac{b_0-a_0}{2^{n+1}}.
$$

### Error a posteriori

Despues de

$$
n
$$

iteraciones, el error tambien satisface

$$
\lvert c_n-\alpha\rvert\le \frac{b_n-a_n}{2}.
$$

Esta formula usa informacion ya refinada del proceso.

## Criterios de parada

Los mas comunes son:

1. longitud del intervalo:

$$
b_n-a_n<\tau;
$$

2. residuo pequeno:

$$
\lvert f(c_n)\rvert<\eta;
$$

3. diferencia entre iterados consecutivos:

$$
\lvert c_n-c_{n-1}\rvert<\tau.
$$

### Advertencia

Un residuo pequeno no siempre implica cercania a una raiz si

$$
f'
$$

es muy pequeno o la funcion es mal condicionada.

Por eso el control por intervalo es mas robusto.

## Ventajas

- garantia de convergencia bajo hipotesis minimas;
- cota explicita del error;
- simplicidad de implementacion;
- estabilidad frente a malas elecciones iniciales, siempre que haya cambio de signo.

## Limitaciones

- convergencia lenta comparada con Newton o secante;
- requiere un intervalo inicial con cambio de signo;
- no distingue entre multiples raices en el mismo intervalo;
- no funciona bien si la raiz tiene multiplicidad par y no hay cambio de signo.

## Comentario de condicionamiento

Si una raiz simple satisface

$$
f'(\alpha)\ne 0,
$$

entonces pequenos errores en

$$
f
$$

producen errores controlables en la raiz. Si

$$
f'(\alpha)
$$

es muy pequeno, la localizacion de la raiz se vuelve sensible y ningun metodo puede escapar del mal condicionamiento intrinseco del problema.

## Comparacion estructural

La biseccion es el metodo de referencia cuando lo prioritario es la fiabilidad.

En calculo cientifico se usa con frecuencia como fase inicial de localizacion, antes de pasar a metodos mas rapidos una vez que el intervalo ya es pequeno.

## Cierre

La biseccion es lenta pero matematicamente limpia: cada iteracion conserva existencia, reduce incertidumbre y proporciona una cota exacta del error. Por eso sigue siendo el patron de robustez con el que se comparan muchos metodos mas sofisticados.
