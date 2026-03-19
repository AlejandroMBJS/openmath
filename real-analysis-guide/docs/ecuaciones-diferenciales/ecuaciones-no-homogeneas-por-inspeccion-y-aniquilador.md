---
title: Ecuaciones no homogeneas por inspeccion y aniquilador
description: Metodo de coeficientes indeterminados, principio de resonancia, lenguaje operatorial y tablas de aniquiladores para ecuaciones lineales con coeficientes constantes.
---

# Ecuaciones no homogeneas por inspeccion y aniquilador

## Donde estamos dentro de la teoria lineal

Consideremos una ecuacion diferencial lineal con coeficientes constantes

$$
a_n y^{(n)}+a_{n-1}y^{(n-1)}+\cdots+a_1y'+a_0y=g(x),
\qquad a_n\ne 0.
$$

Su solucion general tiene la forma

$$
y(x)=y_h(x)+y_p(x),
$$

donde:

- $y_h$ es la solucion general de la ecuacion homogenea asociada;
- $y_p$ es una solucion particular de la ecuacion completa.

El problema serio en las ecuaciones no homogeneas no es la parte homogenea, que ya controlamos mediante el polinomio caracteristico, sino encontrar una particular eficazmente.

En este tema aparecen dos metodos estrechamente relacionados:

- coeficientes indeterminados o inspeccion estructural;
- metodo del aniquilador.

Ambos funcionan especialmente bien cuando:

- los coeficientes son constantes;
- el termino forzante pertenece a una familia estable bajo derivacion.

## Notacion operatorial

Es util escribir

$$
D=\frac{d}{dx},
$$

de modo que la ecuacion se vea como

$$
L(D)y=g,
$$

con

$$
L(D)=a_nD^n+a_{n-1}D^{n-1}+\cdots+a_1D+a_0.
$$

Esta notacion no es un adorno. Hace visible la algebra del problema:

- el operador diferencial es un polinomio en $D$;
- los forzamientos elementales suelen ser anulados por otros polinomios en $D$;
- la resonancia se interpreta en terminos de factores comunes.

## Principio de superposicion

Si

$$
L(D)y_1=g_1
\qquad\text{y}\qquad
L(D)y_2=g_2,
$$

entonces

$$
L(D)(y_1+y_2)=g_1+g_2.
$$

Por tanto, si el forzamiento es suma de varios terminos,

$$
g=g_1+\cdots+g_m,
$$

podemos buscar

$$
y_p=y_{p,1}+\cdots+y_{p,m},
$$

donde cada $y_{p,j}$ resuelve

$$
L(D)y_{p,j}=g_j.
$$

Este principio reduce el problema a un catalogo de forzamientos basicos.

## Idea del metodo de coeficientes indeterminados

Si $g(x)$ pertenece a una familia finito-dimensional estable por derivacion, entonces las derivadas sucesivas de una candidata $y_p$ permanecen en la misma familia. Al sustituir en la ecuacion, el problema se reduce a resolver un sistema algebraico para coeficientes desconocidos.

Ejemplos de familias estables bajo derivacion:

- polinomios;
- exponenciales $e^{ax}$;
- combinaciones $A\cos bx+B\sin bx$;
- productos $e^{ax}P_m(x)$;
- productos $e^{ax}(P_m(x)\cos bx+Q_m(x)\sin bx)$.

## La idea algebraica detras del metodo

Supongamos que $V$ es un subespacio de funciones tal que:

- $D(V)\subseteq V$;
- $g\in V$.

Entonces tambien

$$
L(D)(V)\subseteq V.
$$

Si buscamos $y_p\in V$, la ecuacion

$$
L(D)y_p=g
$$

se transforma en una ecuacion lineal dentro de un espacio vectorial de dimension finita. En coordenadas, eso es un sistema de ecuaciones para los coeficientes desconocidos.

## Tabla basica de formas de prueba

### Forzamiento polinomial

Si

$$
g(x)=P_m(x),
$$

con $P_m$ polinomio de grado $m$, se prueba con

$$
y_p(x)=Q_m(x),
$$

otro polinomio de grado $m$.

### Forzamiento exponencial

Si

$$
g(x)=e^{ax},
$$

se prueba con

$$
y_p(x)=Ae^{ax}.
$$

### Forzamiento trigonometrico

Si

$$
g(x)=\cos bx
\qquad\text{o}\qquad
g(x)=\sin bx,
$$

se prueba con

$$
y_p(x)=A\cos bx+B\sin bx.
$$

### Forzamiento exponencial por polinomio

Si

$$
g(x)=e^{ax}P_m(x),
$$

se prueba con

$$
y_p(x)=e^{ax}Q_m(x).
$$

### Forzamiento exponencial-trigonometrico

Si

$$
g(x)=e^{ax}(P_m(x)\cos bx+Q_m(x)\sin bx),
$$

se prueba con

$$
y_p(x)=e^{ax}(R_m(x)\cos bx+S_m(x)\sin bx),
$$

donde $R_m$ y $S_m$ son polinomios del grado apropiado.

## Resonancia: la dificultad esencial

El metodo falla si la forma propuesta para $y_p$ ya esta contenida en la solucion homogenea. En ese caso, al aplicar $L(D)$, la propuesta cae en el nucleo del operador y no puede producir el forzamiento deseado.

### Regla de resonancia

Sea $\lambda$ una raiz del polinomio caracteristico de $L$ con multiplicidad $m$. Si el forzamiento contiene una componente asociada a $\lambda$, entonces la propuesta para la particular debe multiplicarse por

$$
x^m.
$$

### Lectura concreta

Si el forzamiento es $e^{ax}$ y $a$ es raiz del polinomio caracteristico de multiplicidad $m$, se intenta

$$
y_p=x^mAe^{ax}.
$$

Si el forzamiento es $\cos bx$ o $\sin bx$, eso corresponde a las raices complejas $\pm ib$. Si $\pm ib$ son raices del caracteristico, hay que multiplicar por $x^m$.

## Ejemplo 1: polinomio no resonante

Resolvamos

$$
y''+y=x^2.
$$

### Paso 1: solucion homogenea

La ecuacion homogenea es

$$
y''+y=0,
$$

con polinomio caracteristico

$$
r^2+1=0.
$$

Luego

$$
y_h=C_1\cos x+C_2\sin x.
$$

### Paso 2: propuesta particular

Como el forzamiento es polinomial de grado $2$ y no hay resonancia con la parte homogenea, probamos

$$
y_p=Ax^2+Bx+C.
$$

### Paso 3: sustitucion

Tenemos

$$
y_p''=2A.
$$

Entonces

$$
y_p''+y_p
=
2A+Ax^2+Bx+C.
$$

Igualamos con $x^2$:

$$
Ax^2+Bx+(2A+C)=x^2.
$$

Comparando coeficientes:

$$
A=1,\qquad B=0,\qquad 2A+C=0.
$$

Por tanto

$$
C=-2.
$$

Una particular es

$$
y_p=x^2-2.
$$

### Solucion general

$$
y(x)=C_1\cos x+C_2\sin x+x^2-2.
$$

## Ejemplo 2: exponencial con resonancia

Consideremos

$$
y''-3y'+2y=e^x.
$$

### Paso 1: homogenea

El caracteristico es

$$
r^2-3r+2=(r-1)(r-2),
$$

de donde

$$
y_h=C_1e^x+C_2e^{2x}.
$$

### Paso 2: detectar resonancia

El forzamiento es $e^x$, pero $e^x$ ya aparece en $y_h$ porque $r=1$ es raiz del caracteristico.

La propuesta basica $Ae^x$ no sirve. Debemos multiplicar por $x$:

$$
y_p=Axe^x.
$$

### Paso 3: derivadas

$$
y_p'=A(1+x)e^x,
$$

$$
y_p''=A(2+x)e^x.
$$

### Paso 4: sustitucion

$$
y_p''-3y_p'+2y_p
=
A(2+x)e^x-3A(1+x)e^x+2Axe^x.
$$

Agrupando:

$$
A[(2+x)-3(1+x)+2x]e^x
=
A[-1]e^x.
$$

Queremos que eso sea $e^x$, luego

$$
A=-1.
$$

Una particular es

$$
y_p=-xe^x.
$$

### Solucion general

$$
y=C_1e^x+C_2e^{2x}-xe^x.
$$

## Ejemplo 3: resonancia trigonometrica

Resolvamos

$$
y''+4y=\cos 2x.
$$

La homogenea asociada tiene soluciones

$$
y_h=C_1\cos 2x+C_2\sin 2x.
$$

Como $\cos 2x$ pertenece ya al espacio homogeneo, no sirve proponer

$$
A\cos 2x+B\sin 2x.
$$

Debemos intentar

$$
y_p=x(A\cos 2x+B\sin 2x).
$$

Si se realizan las derivadas y se sustituye, se obtiene finalmente

$$
y_p=\frac{x}{4}\sin 2x.
$$

Por tanto

$$
y=C_1\cos 2x+C_2\sin 2x+\frac{x}{4}\sin 2x.
$$

## Ejemplo 4: forzamiento mixto exponencial-trigonometrico

Consideremos

$$
y''-2y'+5y=e^x\cos 2x.
$$

El forzamiento sugiere la prueba

$$
y_p=e^x(A\cos 2x+B\sin 2x).
$$

Para saber si hay resonancia, miramos el caracteristico:

$$
r^2-2r+5=0
\iff
r=1\pm 2i.
$$

Como el par complejo $1\pm 2i$ coincide exactamente con el del forzamiento, hay resonancia de multiplicidad $1$. Por tanto la propuesta correcta es

$$
y_p=xe^x(A\cos 2x+B\sin 2x).
$$

Este ejemplo resume la regla general:

- identificar el "modo exponencial complejo" del forzamiento;
- comprobar si ya es raiz del caracteristico;
- multiplicar por la potencia adecuada de $x$.

## Metodo del aniquilador

El metodo del aniquilador organiza sistematicamente lo anterior.

### Definicion

Un operador diferencial $P(D)$ es un aniquilador de una funcion $g$ si

$$
P(D)g=0.
$$

Si tenemos

$$
L(D)y=g,
$$

y encontramos un aniquilador $P(D)$ de $g$, entonces al aplicar $P(D)$ a ambos lados obtenemos

$$
P(D)L(D)y=0.
$$

Eso produce una ecuacion homogenea de orden mayor cuyo espacio de soluciones contiene las soluciones de la ecuacion original.

## Tabla de aniquiladores basicos

### Exponenciales

Para

$$
g(x)=e^{ax},
$$

un aniquilador es

$$
D-a.
$$

### Polinomios

Para un polinomio $P_m(x)$ de grado $m$, un aniquilador es

$$
D^{m+1}.
$$

### Senos y cosenos

Para $\sin bx$ y $\cos bx$, un aniquilador comun es

$$
D^2+b^2.
$$

### Exponencial por seno o coseno

Para

$$
e^{ax}\cos bx
\qquad\text{y}\qquad
e^{ax}\sin bx,
$$

un aniquilador es

$$
(D-a)^2+b^2.
$$

### Exponencial por polinomio

Para

$$
e^{ax}P_m(x),
$$

un aniquilador es

$$
(D-a)^{m+1}.
$$

## Ejemplo 5: aniquilador y espacio de candidatos

Resolvamos

$$
y''-y=e^x.
$$

En notacion operatorial:

$$
(D^2-1)y=e^x.
$$

Como

$$
(D-1)e^x=0,
$$

aplicamos $D-1$:

$$
(D-1)(D^2-1)y=0.
$$

Factorizando,

$$
(D-1)^2(D+1)y=0.
$$

La ecuacion homogenea ampliada tiene espacio solucion generado por

$$
e^x,\ xe^x,\ e^{-x}.
$$

Como la homogenea original ya aporta

$$
e^x,\ e^{-x},
$$

la nueva direccion relevante para la particular es

$$
xe^x.
$$

Por eso la propuesta correcta es

$$
y_p=Axe^x,
$$

exactamente como predice el metodo de resonancia.

## Ejemplo 6: polinomio por aniquilador

Consideremos

$$
y''-2y'+y=x.
$$

Escribimos

$$
(D-1)^2y=x.
$$

Como $x$ es polinomio de grado $1$, un aniquilador es

$$
D^2.
$$

Aplicando $D^2$:

$$
D^2(D-1)^2y=0.
$$

La ecuacion ampliada tiene raices:

- $0$ con multiplicidad $2$;
- $1$ con multiplicidad $2$.

Por tanto el espacio de soluciones de la ampliada esta generado por

$$
1,\ x,\ e^x,\ xe^x.
$$

Como la homogenea original ya usa

$$
e^x,\ xe^x,
$$

la particular debe buscarse en el subespacio generado por

$$
1,\ x.
$$

Esto coincide con la propuesta polinomial habitual

$$
y_p=Ax+B.
$$

## Relacion entre ambos metodos

Los dos metodos no compiten; describen la misma estructura desde dos angulos.

### Coeficientes indeterminados

- es operativo y rapido;
- suele ser el mejor para resolver ejercicios concretos;
- obliga a dominar bien la resonancia.

### Aniquilador

- organiza conceptualmente la familia de candidatos;
- explica por que la propuesta toma cierta forma;
- es muy util cuando hay varios terminos forzantes mezclados.

## Regla general de propuesta

Si el forzamiento es

$$
g(x)=e^{ax}\bigl(P_m(x)\cos bx+Q_m(x)\sin bx\bigr),
$$

y el numero complejo

$$
a+ib
$$

es raiz del polinomio caracteristico de multiplicidad $s$, entonces una propuesta correcta es

$$
y_p=x^s e^{ax}\bigl(R_m(x)\cos bx+S_m(x)\sin bx\bigr),
$$

donde $R_m$ y $S_m$ son polinomios de grado a lo sumo $m$.

Esa formula compacta resume la teoria completa del metodo en coeficientes constantes.

## Cuando no conviene usar este metodo

Aunque es muy poderoso, no es universal. Deja de ser eficaz cuando:

- los coeficientes de la ecuacion no son constantes;
- el forzamiento no es una combinacion de familias estables por derivacion;
- la ecuacion es no lineal;
- el termino forzante es, por ejemplo, $\ln x$, $\tan x$, $1/(1+x^2)$ o una funcion definida por trozos poco compatible con derivacion iterada.

En esos casos suele convenir:

- variacion de parametros;
- transformada de Laplace;
- series;
- metodos numericos o cualitativos.

## Error tipico 1: olvidar superposicion

Si

$$
g(x)=x^2+e^x,
$$

no hace falta inventar una propuesta exotica desde cero. Basta usar

$$
y_p=y_{p,1}+y_{p,2},
$$

donde:

- $y_{p,1}$ responde a $x^2$;
- $y_{p,2}$ responde a $e^x$.

## Error tipico 2: no detectar resonancia

Muchos fallos algebraicos provienen de proponer una particular que ya pertenece a $y_h$.

Senal de alerta:

- sustituyes la propuesta;
- todos los coeficientes se anulan;
- no logras reproducir el forzamiento.

Cuando eso pasa, casi siempre falta multiplicar por una potencia de $x$.

## Error tipico 3: usar el grado incorrecto

Si el forzamiento contiene un polinomio de grado $m$, la propuesta debe tener suficiente flexibilidad para producir todos los grados relevantes al sustituir. Reducir artificialmente el grado suele impedir el ajuste.

## Practica guiada

### Ejercicio 1

Resuelve

$$
y''-y=3x.
$$

#### Solucion

La homogenea es

$$
y_h=C_1e^x+C_2e^{-x}.
$$

Como el forzamiento es polinomial de grado $1$, probamos

$$
y_p=Ax+B.
$$

Entonces

$$
y_p''=0,
$$

y al sustituir:

$$
0-(Ax+B)=3x.
$$

Comparando coeficientes:

$$
-A=3,\qquad -B=0.
$$

Luego

$$
A=-3,\qquad B=0,
$$

y una particular es

$$
y_p=-3x.
$$

### Ejercicio 2

Explica por que en

$$
y''-2y'+y=e^x
$$

la propuesta correcta es

$$
y_p=Ax^2e^x.
$$

#### Solucion

El caracteristico es

$$
(r-1)^2=0.
$$

La raiz $r=1$ tiene multiplicidad $2$. Como el forzamiento es $e^x$, hay resonancia de orden $2$. Por eso se multiplica la propuesta basica $Ae^x$ por $x^2$.

### Ejercicio 3

Que aniquilador usarias para

$$
g(x)=e^{2x}(3x-1)\sin x?
$$

#### Solucion

El factor exponencial-trigonometrico sugiere $(D-2)^2+1$, y el polinomio de grado $1$ obliga a elevar a la potencia $2$. Un aniquilador es

$$
\bigl((D-2)^2+1\bigr)^2.
$$

## Cierre

El metodo de inspeccion y el metodo del aniquilador funcionan porque las ecuaciones lineales con coeficientes constantes convierten ciertos espacios finitos de funciones en problemas de algebra lineal. La resonancia no es un truco mnemotecnico: expresa que el operador ya anula parte de la forma propuesta. Entender esto permite dejar de memorizar recetas aisladas y ver el mecanismo comun que unifica:

- polinomios;
- exponenciales;
- senos y cosenos;
- productos exponencial-trigonometricos;
- sumas de forzamientos elementales.
