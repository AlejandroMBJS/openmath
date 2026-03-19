---
title: Ecuaciones exactas y factor integrante
description: Potenciales, criterio de exactitud, reconstruccion de la funcion potencial y factores integrantes en los casos estructurados mas utiles.
---

# Ecuaciones exactas y factor integrante

## La idea geometrica del tema

La ecuacion

$$
M(x,y)\,dx+N(x,y)\,dy=0
$$

es exacta cuando el miembro izquierdo es el diferencial total de una funcion potencial

$$
\Phi(x,y).
$$

En ese caso resolver la ecuacion no significa "integrar una derivada" sino identificar una cantidad conservada:

$$
\Phi(x,y)=C.
$$

Esta perspectiva conecta:

- ecuaciones diferenciales;
- formas diferenciales;
- campos conservativos;
- integrales primeras.

## Definicion de exactitud

La ecuacion

$$
M(x,y)\,dx+N(x,y)\,dy=0
$$

es exacta en una region $D$ si existe una funcion

$$
\Phi:D\to\mathbb{R}
$$

tal que

$$
\Phi_x=M,
\qquad
\Phi_y=N.
$$

Entonces

$$
d\Phi=\Phi_x\,dx+\Phi_y\,dy=M\,dx+N\,dy,
$$

y la ecuacion se reduce a

$$
d\Phi=0.
$$

Por tanto, sobre las curvas solucion,

$$
\Phi(x,y)=C.
$$

## Criterio de exactitud

### Teorema 1

Supongamos que $M$ y $N$ tienen derivadas parciales continuas en una region simplemente conexa $D$. Entonces la ecuacion es exacta si y solo si

$$
M_y=N_x
$$

en $D$.

### Por que la condicion es necesaria

Si existe $\Phi$ con

$$
\Phi_x=M,
\qquad
\Phi_y=N,
$$

y $\Phi$ es suficientemente regular, entonces

$$
M_y=\Phi_{xy}=\Phi_{yx}=N_x.
$$

### Por que la simple conexidad importa

La igualdad de derivadas cruzadas sugiere conservatividad local, pero para reconstruir un potencial global hace falta evitar obstrucciones topologicas. En dominios no simplemente conexos puede fallar la existencia global de potencial aunque la condicion local se cumpla.

## Exactitud local frente a potencial global

La condicion

$$
M_y=N_x
$$

es local. La existencia de un potencial global depende tambien de la topologia del dominio.

### Ejemplo clasico

En

$$
D=\mathbb{R}^2\setminus\{(0,0)\},
$$

considere el campo

$$
M(x,y)=\frac{-y}{x^2+y^2},
\qquad
N(x,y)=\frac{x}{x^2+y^2}.
$$

Se verifica que

$$
M_y=N_x
$$

en

$$
D,
$$

pero no existe potencial global de valor unico en todo

$$
D.
$$

### Senal de fallo

La integral de linea sobre la circunferencia unitaria no es cero:

$$
\oint_{x^2+y^2=1} M\,dx+N\,dy=2\pi.
$$

Si hubiera un potencial global, toda integral cerrada deberia anularse.

### Moral

La exactitud local no siempre basta. El hueco topologico del dominio puede impedir que una primitiva local se pegue en una sola funcion global.

## Independencia de camino y reconstruccion del potencial

Cuando la ecuacion es exacta en una region donde existe potencial global, la funcion

$$
\Phi
$$

puede reconstruirse mediante una integral de linea.

### Formula

Fijado un punto base

$$
(x_0,y_0),
$$

definimos

$$
\Phi(x,y)
=
\int_{\gamma_{(x_0,y_0)\to(x,y)}} M\,dx+N\,dy,
$$

donde

$$
\gamma
$$

es cualquier curva suave que una el punto base con

$$
(x,y).
$$

### Por que esto tiene sentido

Si la forma diferencial

$$
M\,dx+N\,dy
$$

es exacta, la integral no depende del camino, sino solo del punto inicial y final.

### Lectura

Resolver la EDO exacta equivale a encontrar una primera integral. Desde esta perspectiva, la ecuacion

$$
M\,dx+N\,dy=0
$$

describe curvas a lo largo de las cuales el potencial permanece constante.

### Unicidad salvo constante

Si

$$
\Phi
$$

y

$$
\Psi
$$

son dos potenciales del mismo campo en una region conexa, entonces

$$
\nabla(\Phi-\Psi)=0,
$$

luego

$$
\Phi-\Psi
$$

es constante. Esto explica por que la solucion final siempre tiene la forma

$$
\Phi(x,y)=C.
$$

## Procedimiento para resolver una ecuacion exacta

1. Identificar

$$
M(x,y),\quad N(x,y).
$$

2. Verificar si

$$
M_y=N_x.
$$

3. Integrar una de las dos ecuaciones

$$
\Phi_x=M
\qquad\text{o}\qquad
\Phi_y=N.
$$

4. Ajustar la "constante de integracion", que ahora puede depender de la otra variable.
5. Imponer la condicion final

$$
\Phi(x,y)=C.
$$

## Ejemplo 1: reconstruccion del potencial

Consideremos

$$
(2xy+1)\,dx+(x^2+3y^2)\,dy=0.
$$

Aqui

$$
M(x,y)=2xy+1,
\qquad
N(x,y)=x^2+3y^2.
$$

Calculamos

$$
M_y=2x,
\qquad
N_x=2x.
$$

Luego la ecuacion es exacta.

### Paso 1: integrar M respecto de x

Buscamos $\Phi$ tal que

$$
\Phi_x=2xy+1.
$$

Integrando en $x$:

$$
\Phi(x,y)=x^2y+x+g(y),
$$

donde $g$ es una funcion por determinar.

### Paso 2: derivar respecto de y

$$
\Phi_y=x^2+g'(y).
$$

Esto debe coincidir con $N$:

$$
x^2+g'(y)=x^2+3y^2.
$$

Entonces

$$
g'(y)=3y^2,
\qquad
g(y)=y^3.
$$

Por tanto

$$
\Phi(x,y)=x^2y+x+y^3,
$$

y la solucion implicita es

$$
x^2y+x+y^3=C.
$$

## Lectura fisica

La funcion $\Phi$ actua como una energia o potencial conservado a lo largo de las curvas solucion. Resolver la EDO equivale a encontrar las curvas de nivel de $\Phi$.

## Ejemplo 2: reconstruir desde N

A veces resulta mas comodo empezar por

$$
\Phi_y=N.
$$

No hay ningun privilegio intrinseco de $M$ sobre $N$; conviene elegir el camino con algebra mas simple.

## Cuando la ecuacion no es exacta

Si

$$
M_y\ne N_x,
$$

la ecuacion no proviene tal cual de un potencial. En ese caso se puede intentar buscar una funcion no nula

$$
\mu(x,y)
$$

tal que

$$
\mu M\,dx+\mu N\,dy=0
$$

si sea exacta.

Esa funcion se llama factor integrante.

## Ecuacion para el factor integrante

La exactitud de la ecuacion modificada exige

$$
\frac{\partial(\mu M)}{\partial y}
=
\frac{\partial(\mu N)}{\partial x}.
$$

Desarrollando,

$$
\mu_yM+\mu M_y=\mu_xN+\mu N_x.
$$

Esta es una ecuacion en derivadas parciales para $\mu$, y en general no es facil resolverla. Por eso el metodo practico se concentra en casos especiales.

## La EDP del factor integrante y el metodo de caracteristicas

Reordenando la condicion anterior se obtiene

$$
M\,\mu_y-N\,\mu_x=\mu(N_x-M_y).
$$

Esta es una ecuacion lineal de primer orden para

$$
\mu(x,y).
$$

### Campo caracteristico

Si se toman curvas

$$
(x(s),y(s))
$$

que satisfacen

$$
x'(s)=-N(x(s),y(s)),
\qquad
y'(s)=M(x(s),y(s)),
$$

entonces a lo largo de ellas

$$
\frac{d}{ds}\mu(x(s),y(s))
=
M\,\mu_y-N\,\mu_x
=
\mu(N_x-M_y).
$$

Por tanto,

$$
\frac{d}{ds}\log \mu
=
N_x-M_y.
$$

### Lectura

Las caracteristicas de la EDP del factor integrante coinciden, salvo orientacion y reparametrizacion, con las curvas determinadas por la propia ecuacion diferencial

$$
M\,dx+N\,dy=0.
$$

### Consecuencia conceptual

Los casos

$$
\mu=\mu(x)
$$

y

$$
\mu=\mu(y)
$$

no son formulas magicas aisladas. Son situaciones en que la EDP general se separa y puede integrarse de forma elemental.

## Factor integrante dependiente solo de x

Supongamos que

$$
\mu=\mu(x).
$$

Entonces $\mu_y=0$ y la condicion de exactitud se vuelve

$$
\mu M_y=\mu' N+\mu N_x.
$$

Dividiendo por $\mu N$ cuando tenga sentido:

$$
\frac{\mu'}{\mu}
=
\frac{M_y-N_x}{N}.
$$

Si el lado derecho depende solo de $x$, existe un factor integrante de la forma

$$
\mu(x)=\exp\left(\int \frac{M_y-N_x}{N}\,dx\right).
$$

## Factor integrante dependiente solo de y

Analogamente, si buscamos

$$
\mu=\mu(y),
$$

obtenemos

$$
\frac{\mu'}{\mu}
=
\frac{N_x-M_y}{M}.
$$

Si el lado derecho depende solo de $y$, entonces

$$
\mu(y)=\exp\left(\int \frac{N_x-M_y}{M}\,dy\right).
$$

## Ejemplo 3: factor integrante dependiente de x

Consideremos

$$
y\,dx+(x+y)\,dy=0.
$$

Aqui

$$
M=y,
\qquad
N=x+y.
$$

Entonces

$$
M_y=1,
\qquad
N_x=1.
$$

En realidad esta ecuacion ya es exacta. Busquemos un ejemplo donde no lo sea.

## Ejemplo 4: verdadero factor integrante de x

Tomemos

$$
y\,dx+x(1+y)\,dy=0.
$$

Entonces

$$
M=y,
\qquad
N=x(1+y).
$$

Calculamos

$$
M_y=1,
\qquad
N_x=1+y.
$$

No es exacta. Ahora

$$
\frac{M_y-N_x}{N}
=
\frac{1-(1+y)}{x(1+y)}
=
\frac{-y}{x(1+y)}.
$$

Esto no depende solo de $x$, asi que no sirve ese criterio. Probemos otro ejemplo.

## Ejemplo 5: un caso que si funciona

Considere

$$
(2xy+y)\,dx+x^2\,dy=0.
$$

Aqui

$$
M=2xy+y,
\qquad
N=x^2.
$$

Entonces

$$
M_y=2x+1,
\qquad
N_x=2x.
$$

Luego

$$
\frac{M_y-N_x}{N}
=
\frac{1}{x^2},
$$

que depende solo de $x$. Por tanto existe un factor integrante

$$
\mu(x)=\exp\left(\int \frac{1}{x^2}\,dx\right)
=
e^{-1/x}.
$$

Multiplicando por $\mu$ se obtiene una ecuacion exacta.

### Comentario

El calculo puede volverse algebraicamente pesado, pero la estructura del metodo es clara: convertir un problema no conservativo en otro conservativo.

## Ejemplo 6: factor integrante dependiente de y

Si en una ecuacion se verifica que

$$
\frac{N_x-M_y}{M}
$$

depende solo de $y$, entonces el factor integrante depende solo de $y$ y se obtiene por la formula anterior.

Este caso es muy comun en ejercicios de manual porque produce integrales directas.

## Exactas y lineales de primer orden

Una ecuacion lineal

$$
y'+p(x)y=q(x)
$$

puede escribirse como

$$
(p(x)y-q(x))\,dx+dy=0.
$$

No suele ser exacta, pero el factor integrante clasico

$$
\mu(x)=e^{\int p(x)\,dx}
$$

la convierte en exacta. Esto muestra que el metodo del factor integrante para ecuaciones lineales es un caso particular del metodo general de exactitud.

## Relacion con campos conservativos

El par

$$
(M,N)
$$

puede verse como un campo vectorial plano. La exactitud equivale a que ese campo sea gradiente:

$$
(M,N)=\nabla \Phi.
$$

Entonces las soluciones satisfacen

$$
\Phi(x,y)=C,
$$

o sea, son curvas de nivel del potencial.

## Error comun 1: olvidar la funcion de la otra variable

Al integrar

$$
\Phi_x=M
$$

respecto de $x$, la "constante de integracion" puede depender de $y$. Omitir esa funcion es uno de los errores mas frecuentes.

## Error comun 2: verificar solo en un punto

La condicion

$$
M_y=N_x
$$

debe verificarse en la region de interes, no en un punto aislado.

## Error comun 3: creer que siempre existe un factor integrante elemental

No. En muchos casos no hay un factor integrante simple dependiente solo de $x$ o solo de $y$. El metodo practico funciona porque explota casos especiales, no porque haya una receta universal.

## Practica guiada

### Ejercicio 1

Determina si la ecuacion

$$
(y+e^x)\,dx+(x+\cos y)\,dy=0
$$

es exacta.

#### Solucion

Aqui

$$
M_y=1,
\qquad
N_x=1.
$$

Luego es exacta.

### Ejercicio 2

Explica por que en una ecuacion exacta la solucion natural es implicita.

#### Solucion

Porque la informacion estructural es

$$
\Phi(x,y)=C,
$$

es decir, una curva de nivel. Despejar $y$ puede ser innecesario o imposible.

### Ejercicio 3

Que relacion hay entre el factor integrante de una ecuacion lineal de primer orden y el factor integrante de una ecuacion no exacta general?

#### Solucion

El de la ecuacion lineal es un caso particular del metodo general: se busca una funcion multiplicativa que transforme la ecuacion en un diferencial exacto.

## Cierre

Las ecuaciones exactas muestran que algunas EDO no se resuelven "aislando la derivada", sino reconociendo un potencial oculto. El factor integrante, por su parte, intenta fabricar ese potencial cuando no esta presente de entrada. Entender este punto de vista unifica:

- ecuaciones conservativas;
- curvas de nivel;
- factores integrantes;
- y el caso lineal de primer orden como ejemplo particular.
