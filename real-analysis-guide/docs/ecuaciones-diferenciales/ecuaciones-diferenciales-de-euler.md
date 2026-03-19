---
title: Ecuaciones diferenciales de Euler
description: Ecuaciones de Cauchy-Euler, reduccion por ansatz de potencia y cambio logaritmico a coeficientes constantes.
---

# Ecuaciones diferenciales de Euler

## Motivacion e intuicion

Las ecuaciones de Euler, tambien llamadas de Cauchy-Euler o equidimensionales, no tienen coeficientes constantes, pero si una simetria de escala que las hace casi tan tratables como aquellas. Son el modelo natural cuando la variable independiente aparece solo a traves de potencias compatibles con la derivacion.

En ellas, el papel de

$$
e^{rx}
$$

en ecuaciones de coeficientes constantes es reemplazado por

$$
x^m.
$$

## Forma tipica de segundo orden

La forma clasica es

$$
x^2 y'' + a x y' + b y = g(x),
\qquad
x>0.
$$

La ecuacion homogenea asociada es

$$
x^2 y'' + a x y' + b y = 0.
$$

## Por que el dominio importa

El punto

$$
x=0
$$

es singular para la ecuacion. Por eso, en general, se trabaja en intervalos que no atraviesen el origen:

- 

$$
(0,\infty);
$$

- o bien

$$
(-\infty,0).
$$

En la practica, casi siempre se desarrolla primero la teoria en

$$
x>0
$$

para poder usar

$$
\ln x.
$$

## Simetria de escala

La ecuacion homogenea

$$
x^2 y'' + a x y' + b y = 0
$$

es compatible con dilataciones de la variable. Si se cambia

$$
x
$$

por

$$
\lambda x,
$$

las potencias de

$$
x
$$

que multiplican a las derivadas compensan exactamente los cambios de orden.

### Consecuencia

Las soluciones tipo

$$
y=x^m
$$

son los candidatos naturales, del mismo modo en que

$$
e^{rx}
$$

lo es para coeficientes constantes.

## Ansatz de potencia

Buscamos soluciones de la forma

$$
y=x^m.
$$

Entonces

$$
y'=m x^{m-1},
\qquad
y''=m(m-1)x^{m-2}.
$$

Sustituyendo en la ecuacion homogenea:

$$
x^2 m(m-1)x^{m-2}+a x m x^{m-1}+b x^m=0.
$$

Factorizando:

$$
\bigl(m(m-1)+am+b\bigr)x^m=0.
$$

Como

$$
x^m\neq 0
$$

en el dominio considerado, la ecuacion se reduce a

$$
m(m-1)+am+b=0.
$$

## Ecuacion indicial

La ecuacion

$$
m(m-1)+am+b=0
$$

se llama **ecuacion indicial**.

Al simplificar:

$$
m^2+(a-1)m+b=0.
$$

Esta juega el papel del polinomio caracteristico en ecuaciones lineales con coeficientes constantes.

## Casos segun las raices de la indicial

### Dos raices reales distintas

Si

$$
m_1\ne m_2,
$$

entonces una base de soluciones es

$$
x^{m_1},
\qquad
x^{m_2},
$$

y la solucion general es

$$
y=C_1 x^{m_1}+C_2 x^{m_2}.
$$

### Raiz doble

Si

$$
m_1=m_2=m,
$$

entonces la segunda solucion ya no es otra potencia independiente. Aparece el termino

$$
x^m \ln x,
$$

y la solucion general es

$$
y=x^m(C_1+C_2 \ln x).
$$

### De donde sale

$$
x^m\ln x
$$

Una forma elegante de verlo es derivar la familia

$$
x^\lambda
$$

respecto del parametro

$$
\lambda.
$$

Como

$$
\frac{\partial}{\partial \lambda}x^\lambda=x^\lambda \ln x,
$$

cuando el polinomio indicial tiene una raiz doble, la derivada respecto del parametro genera la segunda solucion independiente, igual que en la teoria de Jordan aparecen vectores generalizados.

### Raices complejas

Si

$$
m=\alpha \pm i\beta,
$$

entonces

$$
x^m=x^\alpha e^{i\beta \ln x}.
$$

Tomando partes real e imaginaria, una base real es

$$
x^\alpha \cos(\beta \ln x),
\qquad
x^\alpha \sin(\beta \ln x).
$$

### Lectura

La oscilacion ya no ocurre en

$$
x
$$

sino en

$$
\ln x.
$$

Eso produce una oscilacion multiplicativa, no aditiva.

## Cambio logaritmico

Otra manera de resolver la ecuacion es usar

$$
x=e^t,
\qquad
t=\ln x.
$$

Si definimos

$$
u(t)=y(e^t),
$$

entonces la ecuacion de Euler se transforma en una ecuacion lineal con coeficientes constantes.

## Calculo de derivadas

Como

$$
t=\ln x,
$$

se tiene

$$
\frac{dt}{dx}=\frac{1}{x}.
$$

Por la regla de la cadena:

$$
y'(x)=\frac{1}{x}u'(t).
$$

Derivando otra vez:

$$
y''(x)=\frac{d}{dx}\left(\frac{1}{x}u'(t)\right)
=
-\frac{1}{x^2}u'(t)+\frac{1}{x}\frac{d}{dx}u'(t).
$$

Como

$$
\frac{d}{dx}u'(t)=u''(t)\frac{dt}{dx}=\frac{1}{x}u''(t),
$$

resulta

$$
y''(x)=\frac{1}{x^2}\bigl(u''(t)-u'(t)\bigr).
$$

## Ecuacion transformada

Sustituyendo en

$$
x^2 y'' + axy' + by = g(x),
$$

se obtiene

$$
u''+(a-1)u'+bu=\tilde g(t),
$$

donde

$$
\tilde g(t)=g(e^t).
$$

### Ensenanza estructural

La ecuacion de Euler no es una curiosidad aislada. Es literalmente una ecuacion de coeficientes constantes vista en la variable logaritmica.

## Relacion entre indicial y caracteristica

La ecuacion caracteristica de la transformada

$$
u''+(a-1)u'+bu=0
$$

es

$$
r^2+(a-1)r+b=0.
$$

Es exactamente la misma que la ecuacion indicial con

$$
r=m.
$$

Por eso ambos metodos producen las mismas clases de soluciones.

## Operador de escala

Es muy util introducir el operador

$$
\Theta=x\frac{d}{dx}.
$$

Entonces

$$
\Theta y=xy',
$$

y ademas

$$
\Theta(\Theta-1)y=x^2y'',
$$

de modo que la ecuacion homogenea de Euler puede escribirse como

$$
\bigl(\Theta(\Theta-1)+a\Theta+b\bigr)y=0.
$$

### Lectura

En ecuaciones de coeficientes constantes el operador natural es

$$
D=\frac{d}{dx}.
$$

En ecuaciones de Euler el operador natural es

$$
\Theta=xD,
$$

porque respeta la estructura de escala del problema.

## Forma general de orden

$$
n
$$

La version de orden superior es

$$
x^n y^{(n)}+a_{n-1}x^{n-1}y^{(n-1)}+\cdots+a_1xy'+a_0y=0.
$$

Si buscamos

$$
y=x^m,
$$

cada termino se convierte en un multiplo de

$$
x^m,
$$

y aparece un polinomio indicial de grado

$$
n
$$

en

$$
m.
$$

### Lectura

La teoria cualitativa es la misma que en orden dos:

- raices simples producen potencias;
- multiplicidades producen factores de

$$
\ln x;
$$
- pares complejos producen oscilaciones en

$$
\ln x.
$$

## Ejemplo 1: dos raices reales distintas

$$
x^2 y''-x y'-2y=0.
$$

La ecuacion indicial es

$$
m(m-1)-m-2=0
\iff
m^2-2m-2=0.
$$

Sus raices son

$$
m=1\pm \sqrt 3.
$$

Por tanto

$$
y=C_1 x^{1+\sqrt 3}+C_2 x^{1-\sqrt 3}.
$$

## Ejemplo 2: raiz doble

$$
x^2 y''-3x y'+4y=0.
$$

La ecuacion indicial es

$$
m(m-1)-3m+4=0
\iff
m^2-4m+4=0
\iff
(m-2)^2=0.
$$

Luego

$$
y=x^2(C_1+C_2\ln x).
$$

## Ejemplo 3: raices complejas

$$
x^2 y''+x y'+y=0.
$$

La ecuacion indicial es

$$
m(m-1)+m+1=0
\iff
m^2+1=0.
$$

Entonces

$$
m=\pm i,
$$

y una base real de soluciones es

$$
\cos(\ln x),
\qquad
\sin(\ln x).
$$

La solucion general queda

$$
y=C_1\cos(\ln x)+C_2\sin(\ln x).
$$

## Ejemplo 4: resolucion por cambio logaritmico

Consideremos

$$
x^2 y''+3xy'+y=0.
$$

Con

$$
x=e^t,
\qquad
u(t)=y(e^t),
$$

obtenemos

$$
u''+2u'+u=0.
$$

La ecuacion caracteristica es

$$
r^2+2r+1=(r+1)^2=0.
$$

Por tanto

$$
u(t)=e^{-t}(C_1+C_2 t).
$$

Volviendo a

$$
x,
$$

ya que

$$
t=\ln x,
\qquad
e^{-t}=x^{-1},
$$

obtenemos

$$
y(x)=x^{-1}(C_1+C_2\ln x).
$$

## Caso no homogeneo

Si aparece un termino

$$
g(x),
$$

pueden usarse:

- el cambio

$$
x=e^t
$$

y reduccion a coeficientes constantes;
- variacion de parametros;
- inspeccion, en casos especiales bien elegidos.

## Ejemplo 5: caso no homogeneo

$$
x^2 y''-x y'=x^2.
$$

Con

$$
x=e^t,
\qquad
u(t)=y(e^t),
$$

se obtiene

$$
u''-2u'=e^{2t}.
$$

Ahora ya es una ecuacion lineal de coeficientes constantes y puede resolverse con los metodos usuales del bloque.

### Lectura

La ventaja del cambio logaritmico es que traduce el problema a un lenguaje ya dominado.

## Comportamiento cerca del origen

Como el origen es singular, las soluciones pueden:

- tender a infinito;
- tender a cero;
- oscilar infinitamente en la variable

$$
\ln x;
$$

- o no poder prolongarse atravesando

$$
x=0.
$$

Esto hace que las ecuaciones de Euler sean una antesala natural de la teoria de puntos singulares y del metodo de Frobenius.

## Relacion con Frobenius

El ansatz

$$
y=x^m
$$

es una version muy simple del metodo de Frobenius. En un punto singular regular, Frobenius busca soluciones de la forma

$$
y(x)=x^r\sum_{n=0}^\infty a_n x^n.
$$

En las ecuaciones de Euler puras, muchas veces la serie se colapsa al primer termino y queda solo la potencia

$$
x^m.
$$

## Comparacion con coeficientes constantes

La analogia correcta es:

- coeficientes constantes:

$$
e^{rx}
$$

y polinomio caracteristico;
- Euler:

$$
x^m
$$

y ecuacion indicial.

### Idea comun

En ambos casos se aprovecha una simetria del problema:

- traslacion en

$$
x
$$

para coeficientes constantes;
- escala en

$$
x
$$

para Euler.

## Practica guiada

### Problema 1

Resolver

$$
x^2 y''+2x y'-2y=0.
$$

#### Guion

1. formar la ecuacion indicial;
2. hallar sus raices;
3. escribir la solucion segun el caso correspondiente.

### Problema 2

Resolver

$$
x^2 y''+x y'+4y=0.
$$

#### Idea

Las raices son complejas y debe reconstruirse una base real.

### Problema 3

Transformar

$$
x^2 y''+5xy'+6y=0
$$

mediante

$$
x=e^t
$$

y resolver la ecuacion resultante.

### Problema 4

Explicar por que la presencia de

$$
\ln x
$$

en el caso de raiz doble es paralela al factor

$$
x e^{rx}
$$

en coeficientes constantes.

## Errores frecuentes

- Usar el ansatz

$$
x^m
$$

en ecuaciones que no son realmente de tipo Euler.
- Olvidar restringir el dominio a

$$
x>0
$$

o tratar aparte

$$
x<0.
$$

- Manejar mal el caso de raiz doble y olvidar el factor

$$
\ln x.
$$

- No reconstruir soluciones reales cuando las raices son complejas.
- Aplicar el cambio logaritmico sin transformar correctamente las derivadas.

## Cierre

Las ecuaciones de Euler ocupan una posicion intermedia entre coeficientes variables y coeficientes constantes. Su simetria de escala permite tratarlas con herramientas algebraicas muy similares y prepara el paso a tecnicas de cambio de variable, puntos singulares y teoria mas fina de ecuaciones diferenciales lineales.
