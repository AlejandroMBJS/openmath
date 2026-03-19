---
title: Transformada de Laplace
description: Definicion, propiedades operacionales y resolucion de problemas de valor inicial mediante transformadas de Laplace.
---

# Transformada de Laplace

## Motivacion e intuicion

La transformada de Laplace convierte derivadas en algebra. Ese es su gran poder: transforma problemas diferenciales en problemas algebraicos en una variable espectral

$$
s.
$$

Es especialmente util para:

- problemas de valor inicial;
- fuerzas discontinuas o por tramos;
- sistemas lineales con coeficientes constantes;
- entradas retardadas o activadas en cierto instante.

En un nivel mas profundo, Laplace no es solo una receta de calculo. Organiza la evolucion temporal de un sistema lineal en torno a una variable que captura decaimiento, crecimiento y oscilacion.

## Definicion

La transformada de Laplace de una funcion

$$
f:[0,\infty)\to\mathbb{R}
$$

se define por

$$
\mathcal{L}\{f\}(s)=\int_0^\infty e^{-st}f(t)\,dt,
$$

si la integral converge.

## Hipotesis de existencia

Una condicion suficiente comun es que

$$
f
$$

sea:

- continua por tramos en cada intervalo acotado;
- de orden exponencial, es decir, existan

$$
M,\alpha>0
$$

tales que

$$
|f(t)|\le M e^{\alpha t}
$$

para

$$
t
$$

grande.

Entonces la transformada converge para

$$
s>\alpha.
$$

## Region de convergencia

La integral puede converger para algunos valores de

$$
s
$$

y divergir para otros. El conjunto donde converge se llama **region de convergencia**.

### Regla practica

Si

$$
f(t)\approx e^{\alpha t}
$$

para tiempos grandes, se espera convergencia cuando

$$
\operatorname{Re}(s)>\alpha.
$$

En este bloque trabajaremos sobre todo con

$$
s\in \mathbb{R}
$$

y bastara pensar en la semirrecta

$$
s>\alpha.
$$

## Abscisa de convergencia

Para funciones de orden exponencial existe a menudo un numero critico

$$
\sigma_c
$$

tal que la transformada converge para

$$
\operatorname{Re}(s)>\sigma_c
$$

y diverge para valores con parte real menor.

### Lectura

Ese umbral se llama abscisa de convergencia y resume la tasa exponencial minima necesaria para amortiguar el crecimiento de la funcion original.

## Unicidad en la region de convergencia

Una vez fijada una clase razonable de funciones de orden exponencial, la transformada determina a la funcion de partida de manera esencialmente unica.

### Lectura

Esto justifica que hablar de "la" transformada inversa tenga sentido. No estamos manipulando solo simbolos: la informacion temporal queda codificada de forma recuperable en la variable

$$
s.
$$

## Transformada unilateral y causalidad

En este bloque usamos la transformada unilateral

$$
\int_0^\infty e^{-st}f(t)\,dt,
$$

no la bilateral sobre todo

$$
\mathbb R.
$$

### Lectura

Esa eleccion no es accidental:

- los problemas de valor inicial arrancan en un tiempo de referencia;
- las condiciones iniciales viven naturalmente en

$$
t=0;
$$
- la respuesta causal de un sistema depende del pasado desde ese instante en adelante.

## Transformadas basicas

$$
\mathcal{L}\{1\}=\frac{1}{s},
\qquad
\mathcal{L}\{t\}=\frac{1}{s^2},
\qquad
\mathcal{L}\{t^n\}=\frac{n!}{s^{n+1}}.
$$

$$
\mathcal{L}\{e^{at}\}=\frac{1}{s-a},
\qquad
\mathcal{L}\{\sin bt\}=\frac{b}{s^2+b^2},
\qquad
\mathcal{L}\{\cos bt\}=\frac{s}{s^2+b^2}.
$$

Tambien es util recordar:

$$
\mathcal{L}\{e^{at}\sin bt\}=\frac{b}{(s-a)^2+b^2},
$$

$$
\mathcal{L}\{e^{at}\cos bt\}=\frac{s-a}{(s-a)^2+b^2}.
$$

## Linealidad

### Proposicion 1

$$
\mathcal{L}\{\alpha f+\beta g\}
=
\alpha \mathcal{L}\{f\}+\beta \mathcal{L}\{g\}.
$$

#### Demostracion

Sigue directamente de la linealidad de la integral.

## Transformada de derivadas

La razon principal por la que Laplace sirve para EDO es que convierte derivadas temporales en polinomios de

$$
s
$$

mas terminos de borde dados por las condiciones iniciales.

### Teorema 2

Si

$$
f
$$

es derivable y

$$
f,\ f'
$$

satisfacen hipotesis adecuadas, entonces

$$
\mathcal{L}\{f'\}(s)=s\mathcal{L}\{f\}(s)-f(0).
$$

#### Demostracion

Integramos por partes:

$$
\int_0^\infty e^{-st}f'(t)\,dt
=
\left[e^{-st}f(t)\right]_0^\infty
+s\int_0^\infty e^{-st}f(t)\,dt.
$$

El termino en infinito desaparece por la condicion de orden exponencial y queda

$$
0-f(0)+s\mathcal{L}\{f\}(s).
$$

### Corolario 3

$$
\mathcal{L}\{f''\}(s)=s^2 F(s)-s f(0)-f'(0),
$$

donde

$$
F(s)=\mathcal{L}\{f\}(s).
$$

En general,

$$
\mathcal{L}\{f^{(n)}\}(s)
=
s^n F(s)-s^{n-1}f(0)-\cdots-f^{(n-1)}(0).
$$

### Ensenanza estructural

La derivacion en el tiempo se transforma en multiplicacion por

$$
s,
$$

pero aparecen automaticamente los datos iniciales. Ese precio es precisamente la ventaja del metodo en problemas de valor inicial.

## Transformada de primitivas

Si

$$
g(t)=\int_0^t f(\tau)\,d\tau,
$$

entonces

$$
\mathcal{L}\{g\}(s)=\frac{1}{s}F(s).
$$

Esto se obtiene derivando:

$$
g'(t)=f(t),
\qquad
g(0)=0.
$$

## Multiplicacion por

$$
t
$$

### Proposicion 4

Si

$$
F(s)=\mathcal{L}\{f(t)\},
$$

entonces

$$
\mathcal{L}\{t f(t)\}(s)=-F'(s).
$$

### Comentario

Esta identidad es util cuando aparecen forzamientos polinomiales.

## Primer teorema de traslacion

Si

$$
\mathcal{L}\{f(t)\}=F(s),
$$

entonces

$$
\mathcal{L}\{e^{at}f(t)\}=F(s-a).
$$

### Lectura

Multiplicar por una exponencial en

$$
t
$$

desplaza la transformada en la variable

$$
s.
$$

## Funcion escalon de Heaviside

Para describir entradas que se activan en un tiempo

$$
a,
$$

se usa

$$
H(t-a)=
\begin{cases}
0 & \text{si } t<a,\\
1 & \text{si } t\ge a.
\end{cases}
$$

### Segundo teorema de traslacion

Si

$$
\mathcal{L}\{f(t)\}=F(s),
$$

entonces

$$
\mathcal{L}\{H(t-a)f(t-a)\}=e^{-as}F(s).
$$

Esta formula es crucial para fuerzas por tramos y entradas retardadas.

## Impulso de Dirac

En modelado fisico y teoria de sistemas aparece tambien el impulso ideal

$$
\delta(t-a),
$$

concentrado en el instante

$$
t=a.
$$

Formalmente satisface

$$
\int_0^\infty \delta(t-a)\varphi(t)\,dt=\varphi(a)
$$

para funciones de prueba adecuadas.

### Transformada del impulso

Su transformada es

$$
\mathcal{L}\{\delta(t-a)\}=e^{-as},
\qquad a\ge 0.
$$

### Lectura

El impulso ideal representa una entrada instantanea. En sistemas lineales, la respuesta al impulso es la pieza elemental a partir de la cual puede reconstruirse la respuesta a entradas mas generales por convolucion.

## Ejemplo rapido con Heaviside

La funcion

$$
g(t)=H(t-2)(t-2)
$$

representa una rampa que arranca en

$$
t=2.
$$

Como

$$
\mathcal{L}\{t\}=\frac{1}{s^2},
$$

se obtiene

$$
\mathcal{L}\{g(t)\}=e^{-2s}\frac{1}{s^2}.
$$

## Funciones periodicas

Si

$$
f
$$

es periodica de periodo

$$
T>0
$$

y es integrable en cada intervalo acotado, entonces su transformada de Laplace puede calcularse a partir de un solo periodo:

$$
\mathcal{L}\{f\}(s)
=
\frac{\int_0^T e^{-st}f(t)\,dt}{1-e^{-sT}},
\qquad
\operatorname{Re}(s)
$$

suficientemente grande.

### Idea de la demostracion

Se descompone la integral en intervalos

$$
[kT,(k+1)T]
$$

y se usa periodicidad para factorizar una serie geometrica en

$$
e^{-sT}.
$$

### Lectura

La formula dice que una senal periodica repite indefinidamente la informacion contenida en un solo ciclo. En Laplace, esa repeticion se convierte en un denominador

$$
1-e^{-sT}.
$$

### Aplicacion tipica

Esta identidad es muy util para entradas cuadradas, diente de sierra y otras excitaciones periodicas en circuitos, vibraciones y control.

## Convolucion

La convolucion de

$$
f
$$

y

$$
g
$$

se define por

$$
(f*g)(t)=\int_0^t f(\tau)g(t-\tau)\,d\tau.
$$

### Teorema 5

$$
\mathcal{L}\{f*g\}=F(s)G(s).
$$

### Comentario

Esta propiedad convierte productos algebraicos en integrales temporales y es fundamental en teoria de sistemas lineales.

## Resolucion sistematica de PVI

La receta general para un problema lineal con datos iniciales es:

1. aplicar Laplace a ambos lados;
2. transformar derivadas usando los datos iniciales;
3. despejar

$$
Y(s);
$$

4. descomponer en fracciones parciales o usar tablas;
5. aplicar la transformada inversa.

## Ejemplo 1

Resolvamos

$$
y''+y=0,
\qquad
y(0)=0,
\qquad
y'(0)=1.
$$

Sea

$$
Y(s)=\mathcal{L}\{y\}(s).
$$

Transformando,

$$
\bigl(s^2 Y - s y(0)-y'(0)\bigr)+Y=0.
$$

Como

$$
y(0)=0,
\qquad
y'(0)=1,
$$

queda

$$
(s^2+1)Y-1=0.
$$

Entonces

$$
Y(s)=\frac{1}{s^2+1}.
$$

Aplicando transformada inversa,

$$
y(t)=\sin t.
$$

## Ejemplo 2: forzamiento exponencial

$$
y'+y=e^t,
\qquad
y(0)=2.
$$

Transformando:

$$
sY-2+Y=\frac{1}{s-1}.
$$

Luego

$$
(s+1)Y=2+\frac{1}{s-1}
=
\frac{2(s-1)+1}{s-1}
=
\frac{2s-1}{s-1}.
$$

Por tanto

$$
Y(s)=\frac{2s-1}{(s-1)(s+1)}.
$$

Descomponiendo:

$$
\frac{2s-1}{(s-1)(s+1)}
=
\frac{A}{s-1}+\frac{B}{s+1}.
$$

Se obtiene

$$
2s-1=A(s+1)+B(s-1).
$$

Igualando coeficientes:

$$
A+B=2,
\qquad
A-B=-1.
$$

Entonces

$$
A=\frac12,
\qquad
B=\frac32.
$$

Concluimos:

$$
Y(s)=\frac{1/2}{s-1}+\frac{3/2}{s+1},
$$

y por tanto

$$
y(t)=\frac12 e^t+\frac32 e^{-t}.
$$

## Ejemplo 3: entrada por escalon

Resolvamos

$$
y'+y=H(t-1),
\qquad
y(0)=0.
$$

Transformando:

$$
sY+Y=\frac{e^{-s}}{s}.
$$

Luego

$$
Y(s)=\frac{e^{-s}}{s(s+1)}.
$$

Primero observamos que

$$
\frac{1}{s(s+1)}=\frac{1}{s}-\frac{1}{s+1}.
$$

Entonces

$$
\mathcal{L}^{-1}\left\{\frac{1}{s(s+1)}\right\}=1-e^{-t}.
$$

Por la traslacion:

$$
y(t)=H(t-1)\bigl(1-e^{-(t-1)}\bigr).
$$

### Lectura fisica

La respuesta permanece nula hasta el instante en que la entrada se enciende y luego evoluciona con la dinamica propia del sistema.

## Ejemplo 4: oscilador forzado

Consideremos

$$
y''+4y=\sin t,
\qquad
y(0)=0,
\qquad
y'(0)=0.
$$

Transformando:

$$
(s^2+4)Y=\frac{1}{s^2+1}.
$$

Por tanto

$$
Y(s)=\frac{1}{(s^2+1)(s^2+4)}.
$$

Buscamos

$$
\frac{1}{(s^2+1)(s^2+4)}
=
\frac{A}{s^2+1}+\frac{B}{s^2+4}.
$$

Entonces

$$
1=A(s^2+4)+B(s^2+1).
$$

Igualando coeficientes:

$$
A+B=0,
\qquad
4A+B=1.
$$

De aqui:

$$
A=\frac13,
\qquad
B=-\frac13.
$$

Luego

$$
Y(s)=\frac{1}{3}\frac{1}{s^2+1}-\frac{1}{3}\frac{1}{s^2+4}.
$$

Invirtiendo:

$$
y(t)=\frac13 \sin t-\frac16 \sin 2t.
$$

## Interpretacion de la convolucion

En el problema lineal

$$
y'+ay=f(t),
\qquad
y(0)=0,
$$

la solucion puede escribirse como convolucion entre la entrada

$$
f
$$

y la respuesta impulsional del sistema.

### Ejemplo

Si

$$
h(t)=e^{-at},
$$

entonces

$$
y(t)=\int_0^t e^{-a(t-\tau)} f(\tau)\,d\tau.
$$

Esta formula expresa que la salida es memoria acumulada del forzamiento pasado.

## Transformada inversa

En problemas elementales, la inversion se realiza por:

- tablas;
- linealidad;
- fracciones parciales;
- traslaciones;
- convolucion.

En cursos mas avanzados aparece la inversion mediante integracion compleja. Aqui no hace falta llegar a eso para usar el metodo con potencia real.

## Inversion compleja y formula de Bromwich

Aunque en la practica elemental se invierte con tablas y fracciones parciales, la teoria general descansa en una formula de integracion compleja.

### Esquema

Bajo hipotesis adecuadas,

$$
f(t)=\frac{1}{2\pi i}\int_{\gamma-i\infty}^{\gamma+i\infty} e^{st}F(s)\,ds,
$$

donde

$$
\gamma
$$

se elige dentro de la region de convergencia.

### Lectura

La transformada inversa no es magia tabular. Es una reconstruccion analitica de la funcion a partir de su comportamiento en el plano complejo.

### Relacion con residuos

Cuando

$$
F
$$

es racional o suficientemente controlada, la evaluacion de esa integral por residuos recupera exactamente las reglas de fracciones parciales y suma de modos exponenciales que se usan en calculo operativo.

## Polos repetidos y modos generalizados

Cuando en

$$
Y(s)
$$

aparece un polo de orden

$$
m
$$

en

$$
s=a,
$$

la transformada inversa contiene terminos del tipo

$$
e^{at},\ te^{at},\ t^2e^{at},\dots,t^{m-1}e^{at}.
$$

### Ejemplo prototipico

$$
\frac{1}{(s-a)^2}
\longleftrightarrow
te^{at}.
$$

Mas generalmente,

$$
\frac{1}{(s-a)^m}
\longleftrightarrow
\frac{t^{m-1}}{(m-1)!}e^{at}.
$$

### Lectura estructural

Esto refleja exactamente el mismo fenomeno que aparece con raices multiples del polinomio caracteristico en ecuaciones lineales:

- un polo simple produce un modo puro;
- un polo multiple produce una cadena de modos generalizados.

Laplace no introduce una teoria desconectada. Reescribe en el plano complejo la misma estructura modal de la ecuacion diferencial.

## Teorema del valor inicial

Si

$$
f
$$

es continua en

$$
0
$$

y tiene transformada de Laplace, entonces

$$
\lim_{s\to\infty} sF(s)=f(0^+).
$$

### Lectura

Los valores grandes de

$$
s
$$

son sensibles al comportamiento de la funcion cerca de

$$
t=0.
$$

Esto da una comprobacion rapida de consistencia para transformadas calculadas a mano.

## Teorema del valor final

Si todos los polos de

$$
sF(s)
$$

estan en el semiplano izquierdo abierto, salvo quizas un polo simple en

$$
s=0,
$$

entonces

$$
\lim_{t\to\infty} f(t)=\lim_{s\to 0} sF(s).
$$

### Advertencia

No vale aplicarlo automaticamente. Si hay polos con parte real no negativa distintos de

$$
0,
$$

el limite temporal puede no existir aunque el limite algebraico parezca formalmente calculable.

## Polos, region de convergencia y estabilidad

Para sistemas lineales causales con funcion de transferencia racional

$$
G(s)=\frac{N(s)}{D(s)},
$$

los polos de

$$
G
$$

contienen informacion dinamica decisiva.

### Regla basica

- polos con parte real negativa corresponden a modos que decaen;
- polos en el eje imaginario producen oscilaciones persistentes o modos marginales;
- polos con parte real positiva generan crecimiento exponencial.

### Relacion con la region de convergencia

Si la respuesta impulsional es causal y de orden exponencial, la region de convergencia de su transformada queda a la derecha del polo con mayor parte real. Por eso la posicion de los polos afecta no solo a la inversion formal, sino al dominio mismo donde la transformada existe.

### Estabilidad BIBO

Una lectura clasica de teoria de sistemas dice: si todos los polos de un sistema lineal causal estan en el semiplano izquierdo abierto, la respuesta impulsional es integrable y el sistema es estable en el sentido entrada acotada-salida acotada.

### Conexion con el valor final

El teorema del valor final exige justamente que no haya polos peligrosos en el semiplano derecho ni sobre el eje imaginario, salvo el caso controlado de un polo simple en

$$
s=0.
$$

En otras palabras: el valor final existe cuando la geometria de polos permite que el transitorio muera.

## Funcion de transferencia

Para una ecuacion lineal con entrada

$$
u(t)
$$

y salida

$$
y(t),
$$

la transformada permite escribir una relacion algebraica

$$
Y(s)=G(s)U(s)+\text{terminos de condiciones iniciales}.
$$

La funcion racional

$$
G(s)
$$

se llama **funcion de transferencia**.

### Ejemplo

En

$$
y'+ay=u,
\qquad y(0)=0,
$$

tenemos

$$
sY(s)+aY(s)=U(s),
$$

luego

$$
G(s)=\frac{Y(s)}{U(s)}=\frac{1}{s+a}.
$$

### Lectura

Los polos de

$$
G
$$

codifican los modos naturales del sistema, mientras que el numerador modula como cada frecuencia o decaimiento entra en la salida. Aqui se ve con claridad el puente entre EDO y teoria de sistemas.

## Respuesta en frecuencia y senales sinusoidales

Si el sistema lineal es estable y se lo excita con una entrada armonica

$$
u(t)=\Re\!\bigl(U_0 e^{i\omega t}\bigr),
$$

la respuesta estacionaria puede leerse evaluando formalmente la funcion de transferencia en

$$
s=i\omega.
$$

### Esquema

El factor complejo

$$
G(i\omega)
$$

codifica:

- el cambio de amplitud por

$$
|G(i\omega)|;
$$
- el desfase por

$$
\arg G(i\omega).
$$

### Lectura

Esto explica por que la transformada de Laplace y la teoria de vibraciones forzadas se encuentran de manera natural. La frecuencia de una entrada sinusoidal se propaga por el sistema segun la respuesta frecuencial.

### Moral

La funcion de transferencia no solo sirve para despejar

$$
Y(s).
$$

Tambien describe experimentalmente como el sistema filtra o amplifica frecuencias.

## Respuesta impulsional, funcion de Green y resolvente

Si las condiciones iniciales son nulas, la igualdad

$$
Y(s)=G(s)U(s)
$$

se convierte, al invertir Laplace, en

$$
y=h*u,
$$

donde

$$
h=\mathcal{L}^{-1}\{G\}
$$

es la **respuesta impulsional**.

### Lectura operatorial

La funcion

$$
h(t)
$$

es el nucleo causal que convierte entrada en salida. En lenguaje mas abstracto:

- es la funcion de Green temporal del operador diferencial;
- representa el resolvente causal del problema con condiciones iniciales nulas;
- permite reconstruir la solucion por superposicion de respuestas a impulsos elementales.

### Ejemplo

Para

$$
y'+ay=u,
\qquad y(0)=0,
$$

se tiene

$$
G(s)=\frac1{s+a},
\qquad
h(t)=e^{-at}.
$$

Asi,

$$
y(t)=\int_0^t e^{-a(t-\tau)}u(\tau)\,d\tau.
$$

La formula dice que el estado actual es suma ponderada del pasado, con un nucleo que codifica memoria, amortiguamiento y causalidad.

## Relacion con la transformada de Fourier

Cuando la respuesta impulsional

$$
h
$$

es integrable y la region de convergencia alcanza el eje imaginario, la transformada de Fourier puede verse como valor de borde de la transformada de Laplace:

$$
\widehat h(\omega)=\mathcal L\{h\}(i\omega).
$$

### Lectura

Laplace y Fourier no son metodos rivales. Laplace anade amortiguamiento exponencial y por eso maneja mejor transitorios y condiciones iniciales; Fourier describe de forma mas natural el contenido frecuencial estacionario.

### Moral

En sistemas lineales, la misma funcion

$$
G(s)
$$

puede leerse de dos maneras:

- en el semiplano complejo, como resolvente dinamico;
- sobre el eje imaginario, como respuesta en frecuencia.

## Ventajas del metodo

- incorpora naturalmente condiciones iniciales;
- resuelve de manera uniforme varias ecuaciones lineales;
- maneja discontinuidades y fuerzas por tramos;
- conecta la teoria de EDO con analisis complejo y teoria de sistemas.

## Limitaciones

- requiere conocer o calcular transformadas inversas;
- es menos natural para problemas de frontera;
- no es el metodo adecuado para ecuaciones no lineales generales;
- puede ocultar la geometria del problema si se usa solo como algebra mecanica.

## Comparacion con otros metodos

### Frente a coeficientes indeterminados

Laplace es mas flexible cuando el forzamiento es por tramos o incluye retardos.

### Frente a variacion de parametros

Variacion de parametros es mas general desde el punto de vista formal, pero Laplace suele ser mas eficiente para PVI lineales con coeficientes constantes.

### Frente a analisis cualitativo

Laplace da formulas; el analisis cualitativo da estructura dinamica. Los dos enfoques no compiten: se complementan.

## Practica guiada

### Problema 1

Resolver

$$
y''+4y=0,
\qquad
y(0)=2,
\qquad
y'(0)=0.
$$

#### Guion

1. transformar

$$
y'';
$$

2. despejar

$$
Y(s);
$$

3. reconocer la transformada de

$$
\cos 2t.
$$

### Problema 2

Resolver

$$
y'+2y=H(t-3),
\qquad
y(0)=0.
$$

#### Guion

1. usar

$$
\mathcal{L}\{H(t-3)\}=\frac{e^{-3s}}{s};
$$

2. descomponer

$$
\frac{1}{s(s+2)};
$$

3. aplicar el segundo teorema de traslacion.

### Problema 3

Verificar por integracion por partes que

$$
\mathcal{L}\{f'\}=sF-f(0).
$$

### Problema 4

Explicar por que las condiciones iniciales convierten a Laplace en una herramienta especialmente natural para problemas de valor inicial y no tanto para problemas de frontera.

## Errores comunes

- Transformar derivadas sin incluir correctamente los datos iniciales.
- Usar formulas de transformada sin revisar la region de convergencia.
- Manejar mal fracciones parciales antes de invertir.
- Confundir la variable temporal

$$
t
$$

con la variable transformada

$$
s.
$$

- Aplicar traslaciones sin reescribir correctamente la funcion en la forma

$$
H(t-a)f(t-a).
$$

## Cierre

La transformada de Laplace es una herramienta de traduccion: lleva ecuaciones diferenciales a ecuaciones algebraicas. Pero su interes real no es solo tecnico. Muestra que muchos problemas lineales de evolucion pueden leerse desde una variable espectral, donde derivar se vuelve multiplicar, las condiciones iniciales aparecen como datos de borde y las entradas por tramos se manejan con desplazamientos y convoluciones.
