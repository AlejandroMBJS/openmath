---
title: Funcion de distribucion
description: Distribucion acumulada, caracterizacion de leyes, saltos, continuidad y reconstruccion de probabilidades desde la acumulada.
---

# Funcion de distribucion

## La representacion mas general de una ley real

Una variable aleatoria real puede describirse de muchas maneras:

- por masa puntual, si es discreta;
- por densidad, si es absolutamente continua;
- por su funcion de distribucion acumulada, siempre.

La funcion de distribucion es la descripcion mas general y robusta de una ley en la recta real.

## Definicion

Sea $X$ una variable aleatoria real. Su funcion de distribucion se define por

$$
F_X(x)=P(X\le x),
\qquad
x\in\mathbb R.
$$

### Comentario

La letra $F$ alude a "distribution function" o funcion acumulada: mide cuanta masa probabilistica se ha acumulado hasta el punto $x$.

## Primeras propiedades

### Teorema 1

Para toda variable aleatoria real, su funcion de distribucion:

1. satisface

$$
0\le F_X(x)\le 1;
$$

2. es no decreciente;
3. es continua por la derecha;
4. verifica

$$
\lim_{x\to -\infty}F_X(x)=0;
$$

5. verifica

$$
\lim_{x\to +\infty}F_X(x)=1.
$$

## Demostracion de las propiedades

### Cotas

Como

$$
F_X(x)=P(X\le x),
$$

es una probabilidad, debe estar entre $0$ y $1$.

### Monotonia

Si

$$
x\le y,
$$

entonces

$$
\{X\le x\}\subseteq \{X\le y\}.
$$

Por monotonia de la probabilidad:

$$
F_X(x)\le F_X(y).
$$

### Continuidad por la derecha

Si

$$
x_n\downarrow x,
$$

entonces los eventos

$$
\{X\le x_n\}
$$

decrecen hacia

$$
\{X\le x\}.
$$

Por continuidad de la probabilidad desde arriba:

$$
F_X(x_n)\to F_X(x).
$$

### Limite en menos infinito

Si

$$
x_n\to -\infty,
$$

los eventos

$$
\{X\le x_n\}
$$

decrecen hacia el vacio. Luego

$$
F_X(x_n)\to 0.
$$

### Limite en mas infinito

Si

$$
x_n\to +\infty,
$$

los eventos

$$
\{X\le x_n\}
$$

crecen hacia $\Omega$, de donde

$$
F_X(x_n)\to 1.
$$

## Probabilidades de intervalos

La funcion de distribucion permite recuperar probabilidades de intervalos.

### Proposicion 2

Si

$$
a<b,
$$

entonces

$$
P(a<X\le b)=F_X(b)-F_X(a).
$$

#### Demostracion

El evento

$$
\{a<X\le b\}
$$

puede escribirse como

$$
\{X\le b\}\setminus \{X\le a\},
$$

y la diferencia de probabilidades da el resultado.

## Limite por la izquierda y masa puntual

Definimos

$$
F_X(a^-)=\lim_{x\uparrow a}F_X(x).
$$

Entonces:

### Teorema 3

Para todo

$$
a\in\mathbb R,
$$

$$
P(X=a)=F_X(a)-F_X(a^-).
$$

### Interpretacion

El tamano del salto de la funcion de distribucion en un punto coincide exactamente con la probabilidad concentrada en ese punto.

## Ejemplo 1: variable discreta

Supongamos

$$
P(X=0)=0.2,\qquad P(X=1)=0.5,\qquad P(X=3)=0.3.
$$

Entonces

$$
F_X(x)=
\begin{cases}
0, & x<0,\\
0.2, & 0\le x<1,\\
0.7, & 1\le x<3,\\
1, & x\ge 3.
\end{cases}
$$

La funcion es escalonada y sus saltos son:

- $0.2$ en $0$;
- $0.5$ en $1$;
- $0.3$ en $3$.

## Ejemplo 2: uniforme en [0,1]

Si

$$
X\sim U[0,1],
$$

entonces

$$
F_X(x)=
\begin{cases}
0, & x<0,\\
x, & 0\le x\le 1,\\
1, & x>1.
\end{cases}
$$

Aqui la funcion es continua. Por tanto

$$
P(X=a)=0
$$

para todo $a$.

## Ejemplo 3: exponencial

Si

$$
X\sim \operatorname{Exp}(\lambda),
\qquad
\lambda>0,
$$

entonces

$$
F_X(x)=
\begin{cases}
0, & x<0,\\
1-e^{-\lambda x}, & x\ge 0.
\end{cases}
$$

### Comentario

Este ejemplo muestra como una funcion de distribucion puede ser suave en una region y plana fuera del soporte.

## Continuidad y tipo de variable

### Caso discreto

$F_X$ presenta saltos en los puntos del soporte.

### Caso absolutamente continuo

$F_X$ es continua y, de hecho, puede escribirse como integral de una densidad.

### Caso mixto

$F_X$ puede tener una parte continua y, ademas, algunos saltos.

### Leccion

La funcion de distribucion unifica todos estos casos en un solo objeto.

## Toda funcion con las propiedades correctas define una ley

### Teorema 4

Si una funcion

$$
F:\mathbb R\to [0,1]
$$

es:

- no decreciente;
- continua por la derecha;
- con limites $0$ en $-\infty$ y $1$ en $+\infty$,

entonces existe una unica medida de probabilidad en $\mathbb R$ cuya funcion de distribucion es $F$.

### Comentario

Este resultado muestra que la teoria de las leyes reales puede organizarse enteramente a traves de funciones de distribucion.

## Igualdad en distribucion

Dos variables aleatorias reales $X$ e $Y$ tienen la misma distribucion si y solo si

$$
F_X(x)=F_Y(x)
$$

para todo

$$
x\in\mathbb R.
$$

Esto convierte a la funcion de distribucion en un descriptor completo de la ley.

## Orden estocastico de primer orden

La funcion de distribucion tambien permite comparar leyes de manera natural.

### Definicion

Se dice que

$$
X\le_{\mathrm{st}} Y
$$

si

$$
F_X(x)\ge F_Y(x)
$$

para todo

$$
x\in\mathbb R.
$$

### Lectura

Esto significa que

$$
Y
$$

tiende a tomar valores mas grandes que

$$
X
$$

en sentido distribucional.

### Consecuencia

Para funciones crecientes integrables

$$
g,
$$

el orden estocastico sugiere

$$
E[g(X)]\le E[g(Y)].
$$

La acumulada no solo codifica una ley: tambien permite ordenarla frente a otras.

## Probabilidades de semirrectas e intervalos

Desde $F_X$ puede recuperarse:

$$
P(X\le x)=F_X(x),
$$

$$
P(X>x)=1-F_X(x),
$$

$$
P(a<X\le b)=F_X(b)-F_X(a),
$$

$$
P(a\le X\le b)=F_X(b)-F_X(a^-).
$$

Estas formulas hacen de la funcion de distribucion una herramienta operativa completa.

## Cuantiles y mediana

La funcion de distribucion tambien permite definir cuantiles.

### Definicion

Un cuantil de nivel

$$
\alpha\in(0,1)
$$

puede definirse como

$$
q_\alpha=\inf\{x:F_X(x)\ge \alpha\}.
$$

### Comentario

La mediana es el cuantil de nivel

$$
\frac12.
$$

Esto muestra que muchas nociones descriptivas basicas nacen directamente de la funcion de distribucion.

## Inversa generalizada y transformacion integral de probabilidad

La definicion

$$
q_\alpha=\inf\{x:F_X(x)\ge \alpha\}
$$

introduce la **inversa generalizada** de

$$
F_X.
$$

Esta herramienta es mas robusta que una inversa ordinaria porque sigue teniendo sentido aunque

$$
F_X
$$

tenga tramos planos o saltos.

### Transformacion integral de probabilidad

Si

$$
F_X
$$

es continua y

$$
U=F_X(X),
$$

entonces

$$
U\sim \operatorname{Unif}(0,1).
$$

### Construccion inversa

Si

$$
U\sim \operatorname{Unif}(0,1)
$$

y definimos

$$
X=F^{-1}(U)
$$

mediante la inversa generalizada, entonces

$$
X
$$

tiene funcion de distribucion

$$
F.
$$

### Lectura

Esto conecta tres ideas profundas:

- toda ley real puede generarse a partir de una uniforme;
- los cuantiles no son solo descriptivos, sino generativos;
- la funcion de distribucion codifica completamente el mecanismo de simulacion de una variable real.

## Convergencia en distribucion y continuidad de la acumulada

La funcion de distribucion es tambien la herramienta natural para definir convergencia debil de leyes reales.

### Definicion operativa

Una sucesion

$$
X_n
$$

converge en distribucion a

$$
X
$$

si

$$
F_{X_n}(x)\to F_X(x)
$$

en todo punto de continuidad de

$$
F_X.
$$

### Por que solo en puntos de continuidad

En un salto de

$$
F_X
$$

no puede exigirse convergencia puntual uniforme sin introducir ambiguedad artificial. Los puntos de continuidad son exactamente donde la ley limite se deja leer sin esa patologia.

### Moral

La funcion de distribucion no solo describe una ley fija. Tambien organiza la nocion central de aproximacion de leyes en probabilidad asintotica.

## Relacion con la densidad

Si $X$ tiene densidad $f_X$, entonces

$$
F_X(x)=\int_{-\infty}^x f_X(t)\,dt.
$$

En los puntos donde $F_X$ es derivable:

$$
F_X'(x)=f_X(x).
$$

### Comentario

La densidad, cuando existe, es la tasa local de crecimiento de la acumulada.

## Descomposicion discreta, continua y singular

No toda funcion de distribucion proviene solo de una suma de saltos o de una densidad.

### Esquema estructural

Toda ley real puede descomponerse en una combinacion de tres partes:

- una parte discreta, responsable de los saltos;
- una parte absolutamente continua, representable por densidad;
- una parte singular continua, continua pero concentrada en un conjunto de medida de Lebesgue cero.

### Lectura

La funcion de distribucion permite ver estas tres piezas:

- los saltos detectan masa puntual;
- los tramos diferenciables corresponden a la parte con densidad;
- puede quedar una parte continua sin densidad clasica global.

### Ejemplo conceptual

La distribucion de Cantor es continua, no tiene saltos, pero tampoco admite una densidad integrable ordinaria respecto de Lebesgue. Su acumulada crece sobre un conjunto muy delgado.

### Moral

Identificar "tener funcion de distribucion" con "tener densidad" es un error serio. La acumulada es el objeto universal; la densidad es una representacion extra disponible solo en ciertos casos.

## Transformaciones monotnas

Si $Y=g(X)$ con $g$ estrictamente creciente, entonces la funcion de distribucion de $Y$ puede obtenerse desde la de $X$ mediante

$$
F_Y(y)=P(g(X)\le y)=P(X\le g^{-1}(y))=F_X(g^{-1}(y)).
$$

Esta idea es central en cambios de variable y simulacion.

## Error comun 1: confundir F(x) con P(X=x)

En general,

$$
F_X(x)=P(X\le x),
$$

no

$$
P(X=x).
$$

La probabilidad puntual se obtiene como el salto.

## Error comun 2: pensar que continuidad de F implica densidad automaticamente

No siempre. Existen funciones de distribucion continuas que no provienen de una densidad clasica. La continuidad es mas debil que la absoluta continuidad.

## Error comun 3: olvidar la continuidad por la derecha

La funcion de distribucion no tiene por que ser continua por la izquierda; los saltos justamente aparecen por ese lado.

## Practica guiada

### Ejercicio 1

Si

$$
F_X(x)=
\begin{cases}
0, & x<1,\\
0.4, & 1\le x<2,\\
1, & x\ge 2,
\end{cases}
$$

encuentra

$$
P(X=1),\qquad P(X=2).
$$

#### Solucion

El salto en $1$ vale $0.4$, luego

$$
P(X=1)=0.4.
$$

El salto en $2$ vale

$$
1-0.4=0.6,
$$

asi que

$$
P(X=2)=0.6.
$$

### Ejercicio 2

Si $X\sim U[0,1]$, calcula

$$
P(0.2<X\le 0.8).
$$

#### Solucion

$$
F_X(0.8)-F_X(0.2)=0.8-0.2=0.6.
$$

### Ejercicio 3

Que indica un salto en la funcion de distribucion?

#### Solucion

Que hay masa puntual en ese punto, y el tamano del salto coincide con la probabilidad puntual.

## Cierre

La funcion de distribucion es el lenguaje universal de las leyes reales. Su fuerza esta en que sirve a la vez para:

- variables discretas;
- variables continuas;
- variables mixtas;
- y caracterizacion abstracta de medidas de probabilidad.

Por eso, aun cuando existan masas o densidades mas concretas, la funcion de distribucion sigue siendo el objeto central que unifica toda la teoria.
