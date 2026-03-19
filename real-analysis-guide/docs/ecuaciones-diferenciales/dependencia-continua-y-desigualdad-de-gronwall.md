---
title: Dependencia continua y desigualdad de Gronwall
description: Estimaciones de estabilidad para problemas de valor inicial, desigualdad de Gronwall y control de la dependencia respecto de datos iniciales y perturbaciones.
---

# Dependencia continua y desigualdad de Gronwall

## Por que este tema completa la teoria de existencia

El teorema de existencia y unicidad responde dos preguntas:

- existe solucion;
- la solucion es unica.

Pero en aplicaciones eso no basta. Tambien interesa saber:

- que pasa si el dato inicial cambia un poco;
- que pasa si el campo

$$
f
$$

se perturba;
- si una aproximacion numerica o experimental permanece cerca de la solucion exacta;
- como se propagan los errores.

La herramienta basica para estas preguntas es la desigualdad de Gronwall.

## Escenario base

Consideremos dos funciones

$$
y,z
$$

que satisfacen:

$$
y'=f(x,y),
\qquad
z'=f(x,z),
$$

con datos iniciales posiblemente distintos:

$$
y(x_0)=y_0,
\qquad
z(x_0)=z_0.
$$

Suponemos que

$$
f
$$

es continua y Lipschitz en la variable

$$
y
$$

con constante

$$
L.
$$

## Intuicion

Si el campo no separa demasiado trayectorias vecinas, deberia ser posible estimar la distancia entre soluciones por una funcion del tamano de la perturbacion inicial.

El punto delicado es que la diferencia entre soluciones puede realimentarse a traves de la propia ecuacion. Gronwall controla exactamente esa realimentacion.

## Desigualdad integral de Gronwall

### Teorema

Sea

$$
u:[x_0,x_1]\to [0,\infty)
$$

continua. Supongamos que existen constantes

$$
a\ge 0,
\qquad
b\ge 0
$$

tales que

$$
u(x)\le a+b\int_{x_0}^x u(t)\,dt
$$

para todo

$$
x\in [x_0,x_1].
$$

Entonces

$$
u(x)\le a e^{b(x-x_0)}
$$

para todo

$$
x\in [x_0,x_1].
$$

## Idea de la demostracion

Definamos

$$
v(x)=a+b\int_{x_0}^x u(t)\,dt.
$$

Entonces

$$
u(x)\le v(x)
$$

y

$$
v'(x)=b\,u(x)\le b\,v(x).
$$

Considerando

$$
e^{-b(x-x_0)}v(x),
$$

se obtiene una funcion decreciente y por tanto

$$
v(x)\le v(x_0)e^{b(x-x_0)}=a e^{b(x-x_0)}.
$$

Como

$$
u\le v,
$$

queda demostrada la cota.

## Version con termino no constante

Si

$$
u(x)\le a+\int_{x_0}^x \beta(t)u(t)\,dt
$$

con

$$
\beta\ge 0
$$

continua, entonces

$$
u(x)\le a\exp\left(\int_{x_0}^x \beta(t)\,dt\right).
$$

Esta forma es mas flexible y aparece de manera natural en problemas no uniformes.

### Formula con forzamiento explicito

Una version aun mas util es esta: si

$$
u(x)\le a(x)+\int_{x_0}^x \beta(t)u(t)\,dt,
$$

con

$$
a,\beta\ge 0
$$

continuas, entonces

$$
u(x)\le a(x)+\int_{x_0}^x a(s)\beta(s)\exp\left(\int_s^x \beta(r)\,dr\right)ds.
$$

Cuando

$$
a
$$

es constante, esta formula se reduce a la version usual.

### Lectura

Esta variante es la que aparece en estimaciones finas: el termino libre no siempre es un numero fijo, sino un error acumulado que cambia con el tiempo.

## Dependencia respecto del dato inicial

Sean

$$
y,z
$$

soluciones del mismo campo

$$
y'=f(x,y)
$$

con datos iniciales

$$
y_0,\ z_0.
$$

Entonces

$$
y(x)-z(x)=y_0-z_0+\int_{x_0}^x \bigl(f(t,y(t))-f(t,z(t))\bigr)\,dt.
$$

Tomando valor absoluto y usando Lipschitz:

$$
|y(x)-z(x)|
\le
|y_0-z_0|+L\int_{x_0}^x |y(t)-z(t)|\,dt.
$$

Aplicando Gronwall:

$$
|y(x)-z(x)|
\le
|y_0-z_0|e^{L(x-x_0)}.
$$

## Consecuencia

La solucion depende continuamente del dato inicial. Mas aun, la dependencia esta cuantificada por una cota exponencial.

## Flujo Lipschitz en el dato inicial

Bajo unicidad, la solucion define localmente una aplicacion que lleva cada dato inicial al estado alcanzado en tiempo

$$
x.
$$

### Lectura

La cota de Gronwall muestra que esa aplicacion no solo es continua: es localmente Lipschitz en el dato inicial, con constante controlada por

$$
e^{L|x-x_0|}.
$$

### Por que importa

Esto convierte al problema de Cauchy en un sistema dinamico bien condicionado:

- pequenas perturbaciones del dato producen pequenas perturbaciones del estado;
- el crecimiento del error queda cuantificado;
- puede estudiarse estabilidad de orbitas y sensibilidad respecto del modelo.

## Unicidad como corolario

Si

$$
y_0=z_0,
$$

entonces la cota anterior da

$$
|y(x)-z(x)|\le 0.
$$

Por tanto

$$
y(x)=z(x)
$$

en todo el intervalo considerado.

### Lectura

Gronwall no solo controla estabilidad: tambien encapsula la prueba cuantitativa de unicidad.

## Dependencia respecto del campo

Ahora consideremos:

$$
y'=f(x,y),
\qquad
z'=g(x,z),
$$

con datos iniciales posiblemente distintos.

Restando las ecuaciones integrales:

$$
y(x)-z(x)
=
y_0-z_0
+\int_{x_0}^x \bigl(f(t,y(t))-g(t,z(t))\bigr)\,dt.
$$

Sumando y restando

$$
f(t,z(t)),
$$

obtenemos:

$$
\begin{aligned}
|y(x)-z(x)|
\le\,&
|y_0-z_0|
+\int_{x_0}^x |f(t,y(t))-f(t,z(t))|\,dt \\
&+\int_{x_0}^x |f(t,z(t))-g(t,z(t))|\,dt.
\end{aligned}
$$

Si

$$
f
$$

es Lipschitz con constante

$$
L
$$

y

$$
|f(t,z(t))-g(t,z(t))|\le \varepsilon,
$$

entonces

$$
|y(x)-z(x)|
\le
|y_0-z_0|+\varepsilon |x-x_0|
+L\int_{x_0}^x |y(t)-z(t)|\,dt.
$$

Gronwall da:

$$
|y(x)-z(x)|
\le
\bigl(|y_0-z_0|+\varepsilon |x-x_0|\bigr)e^{L|x-x_0|}.
$$

## Interpretacion

Pequenas perturbaciones en:

- el dato inicial;
- el campo de velocidades;

producen perturbaciones controladas en la solucion, siempre que el campo sea Lipschitz.

Este es el nucleo de la estabilidad del problema de Cauchy.

## Pseudotrayectorias y errores numericos

Supongamos que una funcion

$$
\widetilde y
$$

no satisface exactamente la ecuacion, sino

$$
\widetilde y'(x)=f(x,\widetilde y(x))+r(x),
$$

donde

$$
r
$$

es un residuo pequeno.

Sea

$$
y
$$

la solucion exacta con el mismo dato inicial. Entonces

$$
\widetilde y(x)-y(x)
=
\int_{x_0}^x \bigl(f(t,\widetilde y(t))-f(t,y(t))\bigr)\,dt
+\int_{x_0}^x r(t)\,dt.
$$

Tomando valor absoluto:

$$
|\widetilde y(x)-y(x)|
\le
L\int_{x_0}^x |\widetilde y(t)-y(t)|\,dt
+\int_{x_0}^x |r(t)|\,dt.
$$

Si

$$
|r(t)|\le \varepsilon,
$$

entonces

$$
|\widetilde y(x)-y(x)|
\le
\varepsilon |x-x_0| e^{L|x-x_0|}.
$$

### Leccion

Esta cota es un puente directo hacia el analisis de error global de metodos numericos para EDO.

## Estabilidad exponencial y contraccion

Si el campo satisface una condicion mas fuerte que Lipschitz, con signo disipativo adecuado, Gronwall puede producir decaimiento de diferencias y no solo control de crecimiento.

### Esquema

Si dos soluciones satisfacen una desigualdad compatible con

$$
|y(x)-z(x)|
\le
|y_0-z_0|+\gamma\int_{x_0}^x |y(t)-z(t)|\,dt
$$

con

$$
\gamma<0
$$

en sentido efectivo, aparece un factor

$$
e^{\gamma(x-x_0)}.
$$

### Lectura

Entonces el flujo actua como contraccion: trayectorias cercanas se acercan cada vez mas.

## Condicion one-sided Lipschitz

No siempre hace falta una condicion Lipschitz simetrica completa para controlar diferencias. En muchos problemas basta una condicion de tipo unilateral.

### Esquema

Si el campo satisface una desigualdad compatible con

$$
(f(x,y)-f(x,z))(y-z)\le L|y-z|^2,
$$

entonces pueden obtenerse estimaciones de unicidad y estabilidad aunque la regularidad completa sea mas debil.

### Lectura

La constante unilateral describe cuanto puede expandir el flujo en promedio direccional. Si es negativa, aparece disipacion; si es positiva pero acotada, sigue habiendo control exponencial.

### Moral

Gronwall interactua de manera natural no solo con Lipschitz clasico, sino con hipotesis monotonicidad-disipatividad mas finas.

## Version vectorial

La desigualdad no es exclusiva de ecuaciones escalares. Si

$$
Y,Z:\ [x_0,x_1]\to \mathbb{R}^d
$$

y usamos una norma cualquiera,

$$
\|Y(x)-Z(x)\|
\le
a+\int_{x_0}^x \beta(t)\|Y(t)-Z(t)\|\,dt,
$$

entonces Gronwall vuelve a dar

$$
\|Y(x)-Z(x)\|
\le
a\exp\left(\int_{x_0}^x \beta(t)\,dt\right).
$$

### Comentario

Esta forma es la que se usa en sistemas lineales, ecuaciones variacionales y teoria moderna de estabilidad. El contenido conceptual no cambia: una desigualdad integral cerrada produce un control exponencial.

## Ejemplo 1: ecuacion lineal

Consideremos

$$
y'=ky,
\qquad
y(0)=y_0.
$$

La solucion exacta es

$$
y(x)=y_0 e^{kx}.
$$

Si

$$
z(0)=z_0,
$$

entonces

$$
z(x)=z_0 e^{kx},
$$

y

$$
|y(x)-z(x)|=|y_0-z_0|e^{kx}.
$$

La desigualdad de Gronwall da exactamente esta tasa con

$$
L=|k|.
$$

### Estabilidad exponencial

Si

$$
k<0,
$$

las perturbaciones iniciales se amortiguan:

$$
|y(x)-z(x)|=|y_0-z_0|e^{kx}\to 0.
$$

Si

$$
k>0,
$$

las perturbaciones crecen. Esto muestra que dependencia continua no significa necesariamente estabilidad asintotica: el problema puede ser bien planteado y, sin embargo, amplificar errores con el tiempo.

## Ejemplo 2: estabilidad en el logistico

Consideremos

$$
y'=y(1-y).
$$

En cualquier intervalo acotado de valores de

$$
y,
$$

el campo es localmente Lipschitz porque

$$
g'(y)=1-2y
$$

es acotada alli.

Por tanto, si dos soluciones parten cerca una de otra y permanecen en una region acotada, la distancia entre ellas queda controlada por una cota de tipo exponencial.

### Comentario

La desigualdad no siempre da la mejor tasa posible, pero si una cota robusta y general.

## Ejemplo 3: falla cuando no hay Lipschitz

Volvamos a

$$
y'=\sqrt{|y|},
\qquad
y(0)=0.
$$

Aqui no hay control Lipschitz cerca del origen. En consecuencia:

- la unicidad falla;
- no puede haber una estimacion de dependencia continua del mismo tipo para todas las soluciones que pasan por

$$
0.
$$

Esto muestra que la hipotesis Lipschitz no es un detalle tecnico sino una frontera estructural.

## Gronwall y crecimiento acotado

La desigualdad tambien permite acotar una solucion individual. Si

$$
|y(x)|
\le
a+b\int_{x_0}^x |y(t)|\,dt,
$$

entonces

$$
|y(x)|\le a e^{b(x-x_0)}.
$$

Se usa constantemente para demostrar:

- acotacion de soluciones;
- prolongacion de soluciones;
- estimaciones de energia;
- estabilidad de ecuaciones lineales.

## Version diferencial

Si

$$
u
$$

es derivable y satisface

$$
u'(x)\le b\,u(x)+c(x),
$$

con

$$
u(x_0)=u_0,
$$

entonces multiplicando por

$$
e^{-bx}
$$

se obtiene una cota equivalente a la forma integral.

En muchos textos esta es la forma mas usada.

## Gronwall discreta

En analisis numerico aparece una version para sucesiones. Si

$$
u_n\le a+b\sum_{k=0}^{n-1}u_k,
$$

con

$$
a,b\ge 0,
$$

entonces

$$
u_n\le a(1+b)^n.
$$

### Lectura

Esta desigualdad es la version combinatoria del mismo mecanismo de realimentacion controlada. Es una herramienta central para demostrar estabilidad y error global de esquemas numericos.

## Extension no lineal: Bihari

Gronwall controla desigualdades lineales en

$$
u.
$$

Cuando aparece una no linealidad de la forma

$$
u(x)\le a+\int_{x_0}^x \omega(u(t))\,dt,
$$

con

$$
\omega
$$

creciente, entra en juego la desigualdad de Bihari.

### Lectura

Bihari puede verse como una generalizacion no lineal de Gronwall. Aparece en problemas donde el control Lipschitz se reemplaza por modulos de continuidad mas finos. No hace falta desarrollarla completa aqui para entender la idea: Gronwall es el caso lineal mas limpio de un principio mucho mas amplio de propagacion de cotas.

## Lema uniforme de Gronwall

En problemas de largo tiempo, una estimacion local con exponencial puede no ser suficiente. Existe una version uniforme de Gronwall muy usada en sistemas disipativos y EDP.

### Idea

Si una cantidad

$$
u(t)
$$

satisface una desigualdad diferencial o integral y ademas se controla su promedio en ventanas deslizantes de longitud fija, puede obtenerse una cota uniforme para tiempos grandes.

### Lectura

Esta version no solo dice "no explota en un intervalo corto". Dice "despues de un tiempo transitorio, queda absorbida por una cota uniforme".

### Moral

El mecanismo de Gronwall no es solo local. Tambien es una herramienta de estabilizacion asintotica cuando se combina con informacion promedio.

## Relacion con la prolongacion de soluciones

Una solucion local puede extenderse mientras permanezca en una region donde el campo siga estando bien definido y controlado. Las desigualdades de tipo Gronwall ayudan a mostrar que la solucion no escapa de ciertas regiones en tiempo finito.

### Idea

Si se obtiene una cota uniforme para

$$
|y(x)|,
$$

la solucion no puede abandonar cualquier rectangulo suficientemente grande antes del tiempo considerado, y eso impide la ruptura local de existencia por escape.

## Practica guiada

### Problema 1

Supongamos que

$$
|y(x)-z(x)|
\le
0.01+2\int_0^x |y(t)-z(t)|\,dt
$$

para

$$
0\le x\le 1.
$$

#### Tarea

Aplicar Gronwall para estimar

$$
|y(x)-z(x)|.
$$

#### Respuesta-esquema

Tomando

$$
a=0.01,
\qquad
b=2,
$$

se obtiene

$$
|y(x)-z(x)|\le 0.01 e^{2x}.
$$

### Problema 2

Explicar por que unicidad del PVI se deduce de la estimacion

$$
|y(x)-z(x)|\le |y_0-z_0|e^{L|x-x_0|}.
$$

#### Idea

Si

$$
y_0=z_0,
$$

entonces el lado derecho es cero.

### Problema 3

Una aproximacion numerica satisface

$$
|\widetilde y'(x)-f(x,\widetilde y(x))|\le 10^{-3}
$$

en

$$
[0,1].
$$

Si

$$
f
$$

es Lipschitz con constante

$$
L=2
$$

y el dato inicial es exacto, dar una cota del error global.

#### Esquema

Usar

$$
|\widetilde y(x)-y(x)|\le 10^{-3}x e^{2x}.
$$

## Errores frecuentes

- Creer que unicidad implica automaticamente buena estabilidad numerica sin cuantificar nada.
- Ignorar el factor exponencial y prometer error pequeno en tiempos grandes.
- Aplicar Gronwall sin comprobar primero la desigualdad integral adecuada.
- Olvidar que la hipotesis Lipschitz es la que hace cerrar la estimacion.

## Puente hacia lo que sigue

Este tema conecta directamente con:

- analisis numerico de EDO;
- estabilidad de sistemas lineales;
- estimaciones para transformadas integrales;
- teoria de semigrupos y ecuaciones evolutivas mas avanzadas.

Tambien aclara por que el problema de Cauchy es bien planteado en el regimen Lipschitz: existe, es unico y depende continuamente de los datos.

## Cierre

La desigualdad de Gronwall es una de las herramientas estructurales mas importantes de la teoria de ecuaciones diferenciales. Convierte una desigualdad integral aparentemente debil en una cota explicita de estabilidad. Gracias a ella, la teoria de existencia y unicidad deja de ser puramente cualitativa y pasa a controlar de manera efectiva la propagacion de perturbaciones.
