---
title: Series de Taylor y soluciones en serie
description: Metodo de series de potencias para EDO lineales alrededor de puntos ordinarios y construccion de recurrencias para coeficientes.
---

# Series de Taylor y soluciones en serie

## Motivacion e intuicion

No todas las ecuaciones diferenciales admiten soluciones cerradas en terminos elementales. Incluso en ecuaciones lineales relativamente simples aparecen funciones especiales, singularidades y comportamientos locales que no se dejan describir con una combinacion finita de exponenciales, senos o polinomios.

El metodo de series de potencias cumple dos papeles distintos:

- produce soluciones locales cuando no hay formula elemental;
- revela la estructura analitica de la ecuacion, porque transforma la EDO en una recurrencia para coeficientes.

Por eso no es solo una tecnica de aproximacion. Es una parte central de la teoria local de ecuaciones diferenciales lineales.

## Contexto natural

Consideremos una ecuacion lineal de segundo orden

$$
y''+p(x)y'+q(x)y=r(x).
$$

Si los coeficientes

$$
p,\ q,\ r
$$

son analiticos cerca de un punto

$$
x_0,
$$

es natural intentar una solucion tambien analitica alrededor de ese punto en la forma

$$
y(x)=\sum_{n=0}^\infty a_n (x-x_0)^n.
$$

## Punto ordinario

Se dice que

$$
x_0
$$

es un **punto ordinario** de la ecuacion si

$$
p,\ q,\ r
$$

son analiticas en una vecindad de

$$
x_0.
$$

En ese caso, el metodo de Taylor puro es el primer intento correcto.

### Comentario estructural

La analiticidad de los coeficientes hace plausible que la solucion tambien sea analitica. Entonces estudiar la ecuacion equivale a estudiar una recurrencia sobre los coeficientes

$$
a_n.
$$

## Teorema local en punto ordinario

Si

$$
p,\ q,\ r
$$

son analiticas cerca de

$$
x_0,
$$

entonces, para cualesquiera datos iniciales

$$
y(x_0)=y_0,
\qquad
y'(x_0)=y_1,
$$

existe una unica solucion analitica local del problema.

### Lectura

En un punto ordinario no solo existe solucion local y es unica: ademas puede desarrollarse en serie de potencias y queda determinada por sus dos primeros coeficientes.

## Ansatz de serie de potencias

Tomamos

$$
y(x)=\sum_{n=0}^\infty a_n (x-x_0)^n.
$$

Entonces

$$
y'(x)=\sum_{n=1}^\infty n a_n (x-x_0)^{n-1},
$$

y

$$
y''(x)=\sum_{n=2}^\infty n(n-1)a_n (x-x_0)^{n-2}.
$$

Tras reindexar,

$$
y'(x)=\sum_{n=0}^\infty (n+1)a_{n+1}(x-x_0)^n,
$$

$$
y''(x)=\sum_{n=0}^\infty (n+2)(n+1)a_{n+2}(x-x_0)^n.
$$

Esta forma reindexada es la que casi siempre conviene usar para igualar coeficientes.

## Algoritmo general

1. Elegir el centro

$$
x_0.
$$

2. Escribir

$$
y,\ y',\ y''
$$

como series reindexadas en potencias de

$$
(x-x_0)^n.
$$

3. Expandir tambien

$$
p,\ q,\ r
$$

si es necesario.

4. Sustituir todo en la ecuacion.

5. Agrupar los terminos en una sola serie

$$
\sum_{n=0}^\infty c_n (x-x_0)^n=0.
$$

6. Imponer

$$
c_n=0
$$

para todo

$$
n.
$$

7. Resolver la recurrencia para

$$
a_n.
$$

## Rol de las condiciones iniciales

Para una ecuacion de segundo orden, los coeficientes libres iniciales son normalmente

$$
a_0=y(x_0),
\qquad
a_1=y'(x_0).
$$

La recurrencia determina todos los demas. Esto refleja que el espacio de soluciones tiene dimension

$$
2.
$$

## Ejemplo 1: la ecuacion

$$
y'=y
$$

Busquemos

$$
y(x)=\sum_{n=0}^\infty a_n x^n.
$$

Entonces

$$
y'(x)=\sum_{n=0}^\infty (n+1)a_{n+1}x^n.
$$

La ecuacion da

$$
(n+1)a_{n+1}=a_n
\qquad
\text{para todo } n\ge 0.
$$

Por tanto

$$
a_{n+1}=\frac{a_n}{n+1},
$$

y por induccion

$$
a_n=\frac{a_0}{n!}.
$$

Concluimos que

$$
y(x)=a_0\sum_{n=0}^\infty \frac{x^n}{n!}=a_0 e^x.
$$

### Comentario

Aqui el metodo no descubre solo una aproximacion, sino la serie completa de una solucion elemental conocida.

## Ejemplo 2: la ecuacion

$$
y''+y=0
$$

Tomemos

$$
y(x)=\sum_{n=0}^\infty a_n x^n.
$$

Entonces

$$
y''(x)=\sum_{n=0}^\infty (n+2)(n+1)a_{n+2}x^n.
$$

La ecuacion produce

$$
(n+2)(n+1)a_{n+2}+a_n=0,
$$

es decir,

$$
a_{n+2}=-\frac{a_n}{(n+2)(n+1)}.
$$

### Separacion en coeficientes pares e impares

Los coeficientes pares dependen solo de

$$
a_0,
$$

y los impares solo de

$$
a_1.
$$

Se obtiene

$$
a_{2n}=(-1)^n\frac{a_0}{(2n)!},
\qquad
a_{2n+1}=(-1)^n\frac{a_1}{(2n+1)!}.
$$

Luego

$$
y(x)=a_0\cos x+a_1\sin x.
$$

### Ensenanza estructural

La descomposicion par-impar aparece directamente en la recurrencia. El metodo deja ver por que la solucion general se organiza como combinacion de dos familias independientes.

## Ejemplo 3: ecuacion no homogenea

Consideremos

$$
y''-y=1.
$$

Busquemos

$$
y(x)=\sum_{n=0}^\infty a_n x^n.
$$

Como

$$
y''(x)=\sum_{n=0}^\infty (n+2)(n+1)a_{n+2}x^n,
$$

la ecuacion queda

$$
\sum_{n=0}^\infty \bigl((n+2)(n+1)a_{n+2}-a_n\bigr)x^n=1.
$$

Interpretamos el termino derecho como

$$
1+0x+0x^2+\cdots.
$$

Entonces

$$
2a_2-a_0=1,
$$

y para

$$
n\ge 1
$$

vale

$$
(n+2)(n+1)a_{n+2}-a_n=0.
$$

### Comentario

La no homogeneidad modifica solo la primera ecuacion de la recurrencia y deja intacta la estructura recursiva del resto.

## Ejemplo 4: ecuacion

$$
y'=xy
$$

Tomemos

$$
y(x)=\sum_{n=0}^\infty a_n x^n.
$$

Entonces

$$
y'(x)=\sum_{n=0}^\infty (n+1)a_{n+1}x^n
$$

y

$$
xy(x)=\sum_{n=1}^\infty a_{n-1}x^n.
$$

Igualando coeficientes:

$$
a_1=0,
$$

y para

$$
n\ge 1
$$

se tiene

$$
(n+1)a_{n+1}=a_{n-1}.
$$

Esto implica que todos los coeficientes impares son cero y los pares satisfacen

$$
a_{2m}=\frac{a_0}{2^m m!}.
$$

Por tanto

$$
y(x)=a_0\sum_{m=0}^\infty \frac{x^{2m}}{2^m m!}
=
a_0 e^{x^2/2}.
$$

### Ensenanza

La recurrencia detecta por si sola la paridad de la solucion.

## Ejemplo 5: ecuacion con coeficiente variable

Consideremos

$$
y''-xy=0.
$$

Con

$$
y=\sum_{n=0}^\infty a_n x^n,
$$

tenemos

$$
y''=\sum_{n=0}^\infty (n+2)(n+1)a_{n+2}x^n,
$$

mientras que

$$
xy=\sum_{n=1}^\infty a_{n-1}x^n.
$$

La ecuacion queda

$$
\sum_{n=0}^\infty (n+2)(n+1)a_{n+2}x^n
-
\sum_{n=1}^\infty a_{n-1}x^n
=0.
$$

De aqui se obtiene

$$
2a_2=0,
$$

y para

$$
n\ge 1
$$

vale

$$
(n+2)(n+1)a_{n+2}=a_{n-1}.
$$

Equivalente a

$$
a_{n+2}=\frac{a_{n-1}}{(n+2)(n+1)}.
$$

### Lectura

La recurrencia avanza de tres en tres. Esto ya indica que la familia de coeficientes se reparte en clases modulares. La solucion sigue siendo analitica, aunque no elemental.

## Como leer una recurrencia

Una vez obtenida la relacion entre coeficientes, conviene preguntarse:

- cuantos coeficientes libres quedan;
- si hay desacople entre coeficientes pares e impares;
- si la recurrencia salta de dos en dos, de tres en tres o con otro patron;
- si la no homogeneidad modifica solo unos pocos pasos iniciales;
- si aparecen coeficientes nulos sistematicamente.

Estas observaciones suelen anticipar la forma de la solucion mucho antes de escribir la serie completa.

## Radio de convergencia

Si los coeficientes de la ecuacion son analiticos en una vecindad de

$$
x_0,
$$

la solucion en serie converge al menos hasta la singularidad mas cercana de los coeficientes.

### Interpretacion geometrica

El radio de convergencia no lo decide la serie en abstracto, sino la posicion de las singularidades de la ecuacion en el plano complejo.

### Lectura mas fina

Esto significa que el metodo de series no es solo una tecnica local. Tambien detecta la geografia analitica del problema:

- mientras no aparezca una singularidad, la solucion puede seguir prolongandose analiticamente;
- la primera singularidad que aparece fija el radio maximo del desarrollo alrededor del centro elegido.

Por eso el radio de convergencia no es un accidente numerico de la recurrencia, sino una huella de la estructura global de la ecuacion.

## Cambio de centro y continuacion analitica por solapamiento

Un desarrollo en serie alrededor de

$$
x_0
$$

no agota toda la solucion. Si la serie converge en una region donde la solucion sigue siendo analitica, puede elegirse un nuevo centro

$$
x_1
$$

dentro de esa zona y volver a desarrollar.

### Idea

Cada nuevo desarrollo transporta la informacion del anterior. Asi se obtiene una cadena de expansiones locales superpuestas que prolonga la solucion mas alla del radio inicial.

### Lectura estructural

Esta es la version analitica de "seguir" la solucion:

- una serie local describe la solucion cerca de un punto;
- otra serie, centrada mas lejos, toma el relevo;
- el proceso se detiene cuando la ecuacion encuentra una singularidad genuina.

Por eso el metodo de series no es solo local en sentido pobre. Es un mecanismo de continuacion analitica por parches.

## Error por truncamiento

En aplicaciones se usa a menudo un truncamiento

$$
y_N(x)=\sum_{n=0}^N a_n (x-x_0)^n.
$$

Para

$$
|x-x_0|
$$

pequeno, este polinomio aproxima bien a la solucion exacta. La calidad depende de:

- el radio de convergencia;
- el orden del truncamiento;
- el tamano de los coeficientes restantes.

### Idea practica

El metodo de series no solo sirve para identificar la solucion, sino tambien para calcularla localmente con precision controlable.

## Puntos singulares

Si

$$
x_0
$$

no es punto ordinario, el metodo de Taylor puro puede fallar.

### Tipos

- punto ordinario;
- punto singular regular;
- punto singular irregular.

### Ejemplo clasico

En una ecuacion del tipo

$$
x^2 y''+x p(x)y'+q(x)y=0,
$$

el punto

$$
x=0
$$

puede ser singular aunque

$$
p,\ q
$$

sean analiticas.

## Metodo de Frobenius como continuacion natural

Cuando

$$
x_0
$$

es un punto singular regular, en vez de buscar

$$
\sum a_n (x-x_0)^n
$$

se intenta una solucion de la forma

$$
y(x)=\sum_{n=0}^\infty a_n (x-x_0)^{n+r},
$$

donde

$$
r
$$

se determina mediante la ecuacion indicial.

### La ecuacion indicial reaparece

Al sustituir el ansatz de Frobenius, el coeficiente del menor exponente de

$$
x-x_0
$$

debe anularse. Esa condicion produce la ecuacion indicial, cuyo papel es seleccionar los exponentes iniciales posibles

$$
r.
$$

### Casos tipicos

- si las dos raices indiciales no difieren en un entero, suelen aparecer dos soluciones de Frobenius independientes;
- si coinciden o difieren en un entero, pueden aparecer terminos logaritmicos;
- cuando el procedimiento no produce de inmediato la segunda solucion, eso no significa que la teoria falle, sino que la estructura local es mas sutil.

### Por que importa mencionarlo

Muchas funciones especiales importantes en fisica matematica nacen exactamente de este paso: Bessel, Legendre, Hermite, Laguerre.

## Cuando aparece un termino logaritmico

El caso mas delicado del metodo de Frobenius ocurre cuando las raices de la ecuacion indicial:

- coinciden;
- o difieren en un entero.

En esa situacion, la segunda solucion independiente puede no tener la forma pura

$$
(x-x_0)^r\sum_{n=0}^\infty a_n (x-x_0)^n.
$$

Con frecuencia aparece una expresion del tipo

$$
y_2(x)=C\,y_1(x)\log(x-x_0)+(x-x_0)^{r_2}\sum_{n=0}^\infty b_n (x-x_0)^n.
$$

### Que significa esto

El termino logaritmico no es una patologia accidental. Indica que la geometria local del operador no permite separar limpiamente dos modos por simples potencias.

### Lectura

La aparicion de logaritmos en Frobenius juega un papel parecido al de los terminos

$$
te^{\lambda t}
$$

en ecuaciones con raices caracteristicas repetidas:

- en ambos casos falla la separacion ingenua de modos;
- la teoria responde introduciendo una familia corregida de soluciones independientes.

### Moral

Cuando el procedimiento elemental no produce de inmediato la segunda solucion, eso no significa que el metodo haya fracasado. Significa que la estructura local exige una base mas fina.

## Serie formal frente a solucion analitica

Conviene distinguir dos niveles:

- una serie formal, construida por algebra de coeficientes;
- una serie convergente, que define realmente una solucion analitica.

### Comentario

En puntos ordinarios, la teoria garantiza convergencia local. En puntos singulares regulares, Frobenius da un marco donde muchas veces la convergencia tambien puede demostrarse. Esta distincion evita confundir manipular coeficientes con haber construido ya una funcion genuina.

## Series mayorantes y por que la recurrencia no basta

Obtener una recurrencia para los coeficientes no prueba por si solo que la serie converge. Hace falta controlar su crecimiento.

### Idea de majorante

Una tecnica clasica consiste en comparar los coeficientes

$$
a_n
$$

con otra sucesion

$$
b_n\ge |a_n|
$$

cuya serie

$$
\sum b_n |x-x_0|^n
$$

sea conocida como convergente.

### Lectura

La serie mayorante convierte un problema de EDO en una estimacion analitica. De este modo se demuestra que la algebra de coeficientes realmente construye una funcion.

### Por que importa

Esta observacion separa dos niveles:

- manipular formalmente una recurrencia;
- justificar que el objeto obtenido existe como solucion analitica.

En un curso serio, esa distincion no es decorativa: es la frontera entre calculo simbolico y teorema de existencia local analitica.

## Conexion con funciones especiales

El metodo de series muestra que una EDO puede definir una funcion incluso cuando no hay expresion elemental. En ese sentido, las funciones especiales no son exoticas: son soluciones canonicamente definidas por ecuaciones diferenciales y condiciones de regularidad.

## Practica guiada

### Problema 1

Reobtener la serie de

$$
\sin x
$$

a partir de

$$
y''+y=0,
\qquad
y(0)=0,
\qquad
y'(0)=1.
$$

#### Guion

1. imponer

$$
a_0=0,\ a_1=1;
$$

2. usar la recurrencia

$$
a_{n+2}=-\frac{a_n}{(n+2)(n+1)};
$$

3. observar que todos los coeficientes pares se anulan.

### Problema 2

Resolver en serie el PVI

$$
y'=xy,
\qquad
y(0)=3.
$$

#### Idea

Tomar

$$
a_0=3
$$

y usar la recurrencia del ejemplo 4.

### Problema 3

Encontrar los primeros seis terminos no nulos de una solucion de

$$
y''-xy=0
$$

con

$$
y(0)=1,
\qquad
y'(0)=0.
$$

#### Clave

La recurrencia avanza de tres en tres y

$$
a_1=0,\ a_2=0.
$$

### Problema 4

Explicar por que una ecuacion lineal de segundo orden deja exactamente dos coeficientes iniciales libres en el desarrollo en serie.

#### Idea conceptual

Porque la recurrencia determina todos los

$$
a_n
$$

para

$$
n\ge 2
$$

a partir de

$$
a_0,\ a_1.
$$

## Errores frecuentes

- Derivar mal la serie o reindexar de forma inconsistente.
- Igualar coeficientes de potencias distintas.
- Perder de vista cuantos coeficientes iniciales quedan libres.
- Confundir existencia de una serie formal con convergencia efectiva.
- Suponer convergencia global sin mirar singularidades de la ecuacion.
- Olvidar que la no homogeneidad altera tambien la recurrencia.

## Cierre

Las series de Taylor convierten una EDO en una recurrencia infinita pero controlable. En un punto ordinario, la ecuacion diferencial se vuelve algebra de coeficientes. Esa traduccion es una de las puertas principales hacia teoria local analitica, funciones especiales y aproximacion efectiva de soluciones cuando las formulas cerradas no existen.
