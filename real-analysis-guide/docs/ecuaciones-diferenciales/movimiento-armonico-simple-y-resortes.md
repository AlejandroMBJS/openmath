---
title: Movimiento armonico simple y resortes
description: Derivacion del oscilador armonico, amortiguamiento, forzamiento y clasificacion dinamica de sistemas masa-resorte.
---

# Movimiento armonico simple y resortes

## Motivacion e intuicion

El sistema masa-resorte es el ejemplo central donde convergen:

- leyes de Newton;
- ecuaciones lineales de segundo orden;
- coeficientes constantes;
- estabilidad y oscilaciones;
- resonancia y amortiguamiento.

Por eso es uno de los modelos mas importantes del bloque. En el caben, de forma concreta y digerible, casi todas las ideas lineales fundamentales.

## Ley de Hooke

Un resorte ideal ejerce una fuerza proporcional al desplazamiento respecto de su posicion de equilibrio:

$$
F_s=-kx,
$$

donde

$$
k>0
$$

es la constante elastica.

Si una masa

$$
m
$$

esta unida al resorte y se mueve en una dimension, la segunda ley de Newton da

$$
m x''=-kx.
$$

Equivalentemente,

$$
x''+\omega^2 x=0,
\qquad
\omega=\sqrt{\frac{k}{m}}.
$$

## Movimiento armonico simple

La ecuacion

$$
x''+\omega^2 x=0
$$

tiene polinomio caracteristico

$$
r^2+\omega^2=0,
$$

con raices

$$
r=\pm i\omega.
$$

La solucion general es

$$
x(t)=C_1\cos(\omega t)+C_2\sin(\omega t).
$$

## Forma amplitud-fase

Equivalentemente,

$$
x(t)=A\cos(\omega t-\phi),
$$

donde

$$
A\ge 0
$$

es la amplitud y

$$
\phi
$$

la fase.

### Interpretacion

- la amplitud fija la excursion maxima;
- la fase fija el instante inicial del ciclo;
- la frecuencia angular

$$
\omega
$$

determina la rapidez de oscilacion.

## Periodo y frecuencia

El periodo del oscilador ideal es

$$
T=\frac{2\pi}{\omega}=2\pi\sqrt{\frac{m}{k}}.
$$

La frecuencia ordinaria es

$$
f=\frac{1}{T}.
$$

### Lectura fisica

Un resorte mas rigido

$$
(k \text{ grande})
$$

aumenta la frecuencia. Una masa mayor

$$
(m \text{ grande})
$$

la disminuye.

## Determinacion por datos iniciales

Si se conocen

$$
x(0)=x_0,
\qquad
x'(0)=v_0,
$$

entonces

$$
C_1=x_0,
\qquad
C_2=\frac{v_0}{\omega}.
$$

Por tanto

$$
x(t)=x_0\cos(\omega t)+\frac{v_0}{\omega}\sin(\omega t).
$$

## Energia del sistema

La energia total es

$$
E(t)=\frac{m}{2}(x')^2+\frac{k}{2}x^2.
$$

### Proposicion 1

En ausencia de rozamiento y forzamiento,

$$
E(t)
$$

es constante.

#### Demostracion

Derivando,

$$
E'=m x' x'' + kx x'
=
x'(m x''+kx)=0.
$$

### Interpretacion

La energia oscila entre:

- energia cinetica;
- energia potencial elastica.

Pero la suma se conserva.

## Rozamiento lineal

Si se anade una fuerza de rozamiento proporcional a la velocidad,

$$
F_d=-c x',
\qquad
c>0,
$$

el modelo pasa a ser

$$
m x''+c x'+kx=0.
$$

## Polinomio caracteristico amortiguado

El polinomio caracteristico es

$$
m r^2+c r+k=0.
$$

El discriminante

$$
\Delta=c^2-4mk
$$

organiza la dinamica.

## Sobreamortiguado

Si

$$
c^2>4mk,
$$

hay dos raices reales negativas distintas:

$$
r_1\ne r_2<0.
$$

La solucion es

$$
x(t)=C_1 e^{r_1 t}+C_2 e^{r_2 t}.
$$

### Lectura

No hay oscilacion. El sistema vuelve al equilibrio de forma monotona o como suma de dos relajaciones exponenciales.

## Criticamente amortiguado

Si

$$
c^2=4mk,
$$

hay una raiz doble

$$
r=-\frac{c}{2m},
$$

y

$$
x(t)=(C_1+C_2 t)e^{-ct/(2m)}.
$$

### Lectura

Es el retorno mas rapido al equilibrio sin oscilacion.

## Subamortiguado

Si

$$
c^2<4mk,
$$

las raices son complejas conjugadas con parte real negativa:

$$
r=-\frac{c}{2m}\pm i\beta,
$$

donde

$$
\beta=\frac{\sqrt{4mk-c^2}}{2m}.
$$

La solucion es

$$
x(t)=e^{-ct/(2m)}\bigl(C_1\cos(\beta t)+C_2\sin(\beta t)\bigr).
$$

### Lectura

Hay oscilacion, pero con amplitud decreciente. La frecuencia observada ya no es la natural

$$
\omega=\sqrt{k/m},
$$

sino la frecuencia amortiguada

$$
\beta.
$$

## Cociente de amortiguamiento

Es util introducir la frecuencia natural

$$
\omega_0=\sqrt{\frac{k}{m}}
$$

y el cociente de amortiguamiento

$$
\zeta=\frac{c}{2\sqrt{mk}}.
$$

Entonces la ecuacion se escribe como

$$
x''+2\zeta\omega_0 x'+\omega_0^2 x=0.
$$

La clasificacion queda condensada asi:

- 
$$
\zeta<1
$$

subamortiguado;
- 
$$
\zeta=1
$$

criticamente amortiguado;
- 
$$
\zeta>1
$$

sobreamortiguado.

### Lectura

Esta parametrizacion separa una escala de tiempo natural

$$
\omega_0
$$

de un parametro adimensional

$$
\zeta
$$

que mide cuan fuerte es la disipacion relativa.

## Decaimiento de energia con rozamiento

Para

$$
m x''+c x'+kx=0
$$

con

$$
c>0,
$$

se mantiene la misma expresion de energia

$$
E(t)=\frac{m}{2}(x')^2+\frac{k}{2}x^2,
$$

pero ahora

$$
E'(t)=x'(m x''+kx)=-c(x')^2\le 0.
$$

### Consecuencia

La energia decrece monotonicamente. El rozamiento disipa energia mecanica.

## Forzamiento externo

Si ademas actua una fuerza externa

$$
F(t),
$$

el modelo pasa a ser

$$
m x''+c x'+kx=F(t).
$$

La solucion se descompone como

$$
x=x_h+x_p,
$$

donde:

- 

$$
x_h
$$

describe el transitorio;
- 

$$
x_p
$$

describe la respuesta forzada.

## Regimen transitorio y regimen estacionario

En presencia de amortiguamiento, la parte homogenea suele decaer. Entonces para tiempos grandes domina la solucion particular.

### Lectura

Esto separa dos preguntas diferentes:

- que hace el sistema por su propia dinamica inicial;
- que hace obligado por la entrada externa.

## Resonancia

En el caso sin amortiguamiento,

$$
x''+\omega_0^2 x = A\cos(\omega t),
$$

si

$$
\omega=\omega_0,
$$

la particular contiene un factor

$$
t
$$

y la amplitud crece linealmente. Este fenomeno es la resonancia.

### Comentario

Con amortiguamiento no hay explosion lineal indefinida, pero sigue habiendo una frecuencia de respuesta maxima.

## Batidos cerca de la resonancia

Si el sistema no amortiguado se fuerza con una frecuencia

$$
\omega
$$

muy cercana, pero no igual, a la natural

$$
\omega_0,
$$

la respuesta puede escribirse como combinacion de senales de frecuencias proximas.

### Lectura

Esa superposicion produce una envolvente lenta que modula una oscilacion rapida. El fenomeno se conoce como batido.

## Amplitud y fase en el regimen forzado

Tomemos un forzamiento armonico

$$
F(t)=F_0\cos(\omega t).
$$

Buscamos una respuesta estacionaria de la forma

$$
x_p(t)=A(\omega)\cos(\omega t-\phi(\omega)).
$$

Al sustituir en

$$
m x''+c x'+kx=F_0\cos(\omega t),
$$

se obtiene la amplitud

$$
A(\omega)=
\frac{F_0}{
\sqrt{(k-m\omega^2)^2+(c\omega)^2}
}
$$

y un desfase

$$
\tan \phi(\omega)=\frac{c\omega}{k-m\omega^2}.
$$

### Interpretacion

- para frecuencias bajas, el resorte sigue casi en fase a la fuerza;
- cerca de la frecuencia resonante, la amplitud se vuelve grande;
- para frecuencias altas, la inercia domina y el desplazamiento se atrasa de forma importante.

## Potencia media transferida

Si la fuerza externa es

$$
F(t)=F_0\cos(\omega t)
$$

y la velocidad es

$$
v=x',
$$

la potencia instantanea suministrada es

$$
P(t)=F(t)v(t).
$$

### Lectura

En regimen estacionario, la potencia media sobre un ciclo depende del desfase entre fuerza y velocidad. Cerca de la resonancia amortiguada, el sistema absorbe energia de forma especialmente eficiente.

## Resonancia amortiguada

Con amortiguamiento, la resonancia ya no significa crecimiento sin cota en el tiempo, sino maximo de la curva

$$
\omega\mapsto A(\omega).
$$

Cuando el amortiguamiento es pequeno, el pico de respuesta aparece cerca de la frecuencia natural. Mas precisamente, si

$$
\zeta<\frac{1}{\sqrt 2},
$$

la amplitud maxima ocurre en una frecuencia

$$
\omega_r=\omega_0\sqrt{1-2\zeta^2}.
$$

### Lectura

Esto explica por que "resonancia" tiene dos lecturas relacionadas pero distintas:

- sin amortiguamiento: crecimiento secular en el tiempo;
- con amortiguamiento: respuesta estacionaria maxima a cierta frecuencia.

## Variables adimensionales y forma normalizada

Muchas veces conviene dividir la ecuacion por

$$
m
$$

e introducir

$$
\omega_0=\sqrt{\frac{k}{m}},
\qquad
2\zeta\omega_0=\frac{c}{m}.
$$

Entonces el modelo forzado queda

$$
x''+2\zeta\omega_0 x'+\omega_0^2 x=\frac{F(t)}{m}.
$$

Si ademas se reescala el tiempo mediante

$$
\tau=\omega_0 t,
$$

la ecuacion adopta una forma adimensional donde los parametros esenciales son:

- el cociente de amortiguamiento

$$
\zeta;
$$
- la razon entre frecuencia de excitacion y frecuencia natural.

### Lectura

Esta normalizacion muestra que muchos sistemas fisicos distintos comparten exactamente la misma dinamica una vez reescalados. La teoria no depende de kilogramos o newtons concretos, sino de combinaciones sin dimension.

## Impedancia mecanica

La formula de amplitud puede leerse mejor si se introduce la magnitud compleja

$$
Z(\omega)=k-m\omega^2+i c\omega.
$$

Entonces la respuesta estacionaria cumple, formalmente,

$$
A(\omega)=\frac{F_0}{|Z(\omega)|}.
$$

### Lectura

La impedancia resume en un solo objeto la competencia entre:

- rigidez

$$
k;
$$
- inercia

$$
m\omega^2;
$$
- disipacion

$$
c\omega.
$$

Cuando

$$
|Z(\omega)|
$$

es pequeno, la respuesta es grande.

## Factor de calidad

En el regimen subamortiguado se usa a menudo el factor de calidad

$$
Q=\frac{1}{2\zeta}.
$$

### Lectura

- 
$$
Q
$$

grande significa oscilaciones poco amortiguadas y pico resonante agudo;
- 
$$
Q
$$

pequeno significa disipacion fuerte y resonancia mas ancha y menos marcada.

Este parametro es central en vibraciones, circuitos y teoria de filtros, y conecta directamente el oscilador masa-resorte con otros sistemas lineales.

## Ancho de banda y puntos de media potencia

En osciladores ligeramente amortiguados, el factor

$$
Q
$$

tambien se relaciona con el ancho del pico resonante.

### Idea

Se llaman frecuencias de media potencia a aquellas donde la potencia transferida cae a la mitad del maximo, equivalentes a una amplitud reducida por un factor

$$
1/\sqrt 2.
$$

La diferencia entre esas frecuencias define un ancho de banda

$$
\Delta \omega.
$$

### Relacion aproximada

Para amortiguamiento pequeno,

$$
Q\approx \frac{\omega_0}{\Delta \omega}.
$$

### Lectura

Un

$$
Q
$$

grande significa dos cosas al mismo tiempo:

- poca disipacion por ciclo;
- seleccion de frecuencia muy aguda.

Por eso el mismo parametro aparece tanto en vibraciones mecanicas como en resonadores electricos y filtros.

## Ejemplo 1: oscilador ideal

$$
x''+9x=0.
$$

La solucion es

$$
x(t)=C_1\cos(3t)+C_2\sin(3t).
$$

El periodo es

$$
\frac{2\pi}{3}.
$$

## Ejemplo 2: sistema subamortiguado

$$
x''+2x'+5x=0.
$$

El polinomio caracteristico tiene raices

$$
r=-1\pm 2i.
$$

Luego

$$
x(t)=e^{-t}(C_1\cos 2t + C_2\sin 2t).
$$

### Lectura

Hay oscilacion angular

$$
2
$$

y envolvente

$$
e^{-t}.
$$

## Ejemplo 3: resonancia sin amortiguamiento

$$
x''+x=\cos t.
$$

Como el forzamiento tiene la misma frecuencia natural, una particular es de la forma

$$
x_p=t(A\sin t + B\cos t).
$$

Tras sustituir, se obtiene un crecimiento lineal de la amplitud.

### Lectura fisica

La fuerza externa inyecta energia exactamente a la frecuencia propia del sistema.

## Ejemplo 4: forzamiento con amortiguamiento

Consideremos

$$
x''+2x'+2x=\cos t.
$$

La parte homogenea decae como

$$
e^{-t}(C_1\cos t+C_2\sin t).
$$

La particular puede buscarse por coeficientes indeterminados. Para tiempos grandes, el sistema responde con una oscilacion forzada de amplitud finita y fase desplazada.

### Leccion

El amortiguamiento evita la resonancia explosiva ideal, pero no elimina el fenomeno de maxima respuesta.

## Interpretacion de las raices

En el sistema masa-resorte:

- la parte real de las raices controla el decaimiento;
- la parte imaginaria controla la frecuencia;
- la multiplicidad controla la aparicion de factores

$$
t;
$$

- el signo de la parte real decide estabilidad.

## Conexion con sistemas lineales

La ecuacion de segundo orden puede reescribirse como sistema:

$$
\begin{pmatrix}
x\\
v
\end{pmatrix}'
=
\begin{pmatrix}
0 & 1\\
-k/m & -c/m
\end{pmatrix}
\begin{pmatrix}
x\\
v
\end{pmatrix}
+
\begin{pmatrix}
0\\
F(t)/m
\end{pmatrix}.
$$

Esto conecta directamente el problema fisico con la teoria matricial del bloque.

## Plano de fases

Si escribimos

$$
v=x',
$$

el sistema homogeneo queda

$$
\begin{cases}
x'=v,\\
v'=-(k/m)x-(c/m)v.
\end{cases}
$$

### Lectura dinamica

- sin amortiguamiento, las trayectorias en el plano

$$
(x,v)
$$

son curvas cerradas de energia constante;
- con amortiguamiento, las trayectorias espiralan o caen hacia el origen;
- el origen representa el equilibrio mecanico.

## Conexion con energia y estabilidad

La energia constante en el caso ideal y decreciente en el caso amortiguado dan una lectura cualitativa inmediata:

- sin rozamiento hay oscilacion sostenida;
- con rozamiento hay disipacion y tendencia al equilibrio;
- con forzamiento hay competencia entre disipacion y aporte externo.

### Balance energetico con forzamiento

Si

$$
m x''+c x'+kx=F(t),
$$

la derivada de la energia vale

$$
E'(t)=F(t)x'(t)-c(x'(t))^2.
$$

### Lectura

El primer termino mide la energia inyectada por la fuerza externa. El segundo mide la energia disipada por rozamiento. La dinamica observable surge del balance entre ambos mecanismos.

## Practica guiada

### Problema 1

Resolver un oscilador ideal con

$$
x(0)=2,
\qquad
x'(0)=-3
$$

en el caso

$$
x''+4x=0.
$$

#### Guion

1. escribir la solucion general;
2. imponer los datos iniciales;
3. expresar la solucion final.

### Problema 2

Clasificar el sistema

$$
m x''+c x'+kx=0
$$

con

$$
m=1,\ c=5,\ k=4.
$$

#### Idea

Calcular

$$
c^2-4mk.
$$

### Problema 3

Probar que la energia decrece si

$$
c>0
$$

y

$$
F=0.
$$

#### Idea

Derivar

$$
E(t)
$$

y usar la ecuacion.

### Problema 4

Explicar por que el termino forzado domina para tiempos grandes en muchos sistemas amortiguados.

#### Idea conceptual

Porque la parte homogenea decae exponencialmente mientras la particular permanece como respuesta persistente.

## Errores comunes

- Confundir frecuencia natural con frecuencia amortiguada.
- Resolver el polinomio caracteristico y no interpretar la dinamica resultante.
- No separar transitorio y regimen estacionario en el caso forzado.
- Olvidar que la resonancia clasica depende crucialmente de la ausencia de amortiguamiento.
- Pensar que toda oscilacion implica conservacion de energia.

## Cierre

El modelo masa-resorte es la puerta de entrada fisica a las ecuaciones lineales de segundo orden. Resume casi toda la teoria elemental del bloque: polinomio caracteristico, oscilacion, complejos, multiplicidad, energia, amortiguamiento, forzamiento y estabilidad. Bien entendido, deja de ser un ejemplo aislado y se vuelve el mapa conceptual de una gran parte de la teoria lineal.
