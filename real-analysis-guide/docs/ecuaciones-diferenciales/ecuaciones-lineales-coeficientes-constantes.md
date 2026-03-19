---
title: Ecuaciones lineales con coeficientes constantes
description: Teoria algebraica del polinomio caracteristico, raices reales y complejas, multiplicidades, estabilidad y ejemplos completos para ecuaciones lineales con coeficientes constantes.
---

# Ecuaciones lineales con coeficientes constantes

## Idea rectora

Las ecuaciones lineales con coeficientes constantes son el lugar donde la teoria de EDO se vuelve casi algebra pura. La razon fundamental es que la derivacion respeta la forma exponencial:

$$
\frac{d}{dx}e^{rx}=re^{rx}.
$$

Por eso, cuando el operador tiene coeficientes constantes, la accion sobre $e^{rx}$ equivale a evaluar un polinomio en $r$.

Ese hecho transforma el problema diferencial

$$
L(D)y=0
$$

en el problema algebraico

$$
p(r)=0.
$$

## Forma general

Una ecuacion lineal homogenea de orden $n$ con coeficientes constantes tiene la forma

$$
a_n y^{(n)}+a_{n-1}y^{(n-1)}+\cdots+a_1y'+a_0y=0,
\qquad a_n\ne 0.
$$

Usando la notacion

$$
D=\frac{d}{dx},
$$

la escribimos como

$$
L(D)y=0,
$$

donde

$$
L(D)=a_nD^n+a_{n-1}D^{n-1}+\cdots+a_1D+a_0.
$$

## El ansatz exponencial

Buscamos soluciones de la forma

$$
y=e^{rx}.
$$

Entonces

$$
y^{(k)}=r^ke^{rx}.
$$

Al sustituir:

$$
a_nr^ne^{rx}+a_{n-1}r^{n-1}e^{rx}+\cdots+a_0e^{rx}=0.
$$

Como $e^{rx}\ne 0$, se obtiene

$$
a_nr^n+a_{n-1}r^{n-1}+\cdots+a_0=0.
$$

Este polinomio

$$
p(r)=a_nr^n+a_{n-1}r^{n-1}+\cdots+a_0
$$

es el polinomio caracteristico.

## Teorema estructural

La solucion general de la ecuacion queda determinada por la factorizacion del polinomio caracteristico.

### Caso de raices reales simples

Si

$$
p(r)=a_n(r-r_1)\cdots(r-r_n),
$$

con $r_1,\dots,r_n$ reales y distintas, entonces

$$
y(x)=C_1e^{r_1x}+\cdots+C_ne^{r_nx}.
$$

### Caso de una raiz real de multiplicidad m

Si $r$ es raiz de multiplicidad $m$, entonces aparecen $m$ soluciones linealmente independientes:

$$
e^{rx},\ xe^{rx},\ x^2e^{rx},\dots,x^{m-1}e^{rx}.
$$

### Caso de raices complejas

Si aparece el par conjugado

$$
r=\alpha\pm i\beta,
\qquad \beta\ne 0,
$$

las soluciones reales asociadas son

$$
e^{\alpha x}\cos(\beta x),
\qquad
e^{\alpha x}\sin(\beta x).
$$

Si la raiz compleja tiene multiplicidad $m$, se multiplican ademas por

$$
1,x,\dots,x^{m-1}.
$$

## Por que aparecen potencias de x

Cuando el operador contiene un factor

$$
(D-r)^m,
$$

el nucleo de ese operador esta generado por

$$
e^{rx},\ xe^{rx},\dots,x^{m-1}e^{rx}.
$$

Esta es la version escalar de la teoria de Jordan en algebra lineal. La multiplicidad algebraica de la raiz se traduce en una cadena de soluciones multiplicadas por potencias de $x$.

### Lema operatorial fundamental

Si

$$
y(x)=e^{rx}v(x),
$$

entonces

$$
(D-r)y=e^{rx}v'(x).
$$

Por iteracion,

$$
(D-r)^m y=e^{rx}v^{(m)}(x).
$$

### Demostracion

Derivando,

$$
Dy=re^{rx}v+e^{rx}v'=r y+e^{rx}v'.
$$

Luego

$$
(D-r)y=e^{rx}v'.
$$

Aplicando el mismo argumento repetidamente,

$$
(D-r)^m(e^{rx}v)=e^{rx}v^{(m)}.
$$

### Consecuencia estructural

Resolver

$$
(D-r)^m y=0
$$

equivale a resolver

$$
v^{(m)}=0.
$$

Pero las soluciones de

$$
v^{(m)}=0
$$

son exactamente los polinomios de grado a lo sumo

$$
m-1.
$$

Por tanto,

$$
y=e^{rx}(c_0+c_1x+\cdots+c_{m-1}x^{m-1}).
$$

Esto da de una vez toda la cadena

$$
e^{rx},\ xe^{rx},\dots,x^{m-1}e^{rx}.
$$

## Independencia lineal y conteo de dimension

Las funciones

$$
e^{rx},\ xe^{rx},\dots,x^{m-1}e^{rx}
$$

son linealmente independientes. En efecto, si

$$
c_0e^{rx}+c_1xe^{rx}+\cdots+c_{m-1}x^{m-1}e^{rx}=0,
$$

al dividir por

$$
e^{rx}\ne 0
$$

queda un polinomio identicamente nulo, luego todos los coeficientes deben ser cero.

Este razonamiento explica por que la suma de multiplicidades del polinomio caracteristico coincide con la dimension del espacio solucion. Sobre

$$
\mathbb{C}
$$

se obtienen exactamente

$$
n
$$

soluciones linealmente independientes para una ecuacion de orden

$$
n.
$$

Al reagrupar pares conjugados se obtiene una base real del mismo tamano.

## Factorizacion operatorial

Si el polinomio caracteristico se factoriza, el operador tambien:

$$
L(D)=a_n(D-r_1)\cdots(D-r_n),
$$

contando multiplicidades y trabajando sobre $\mathbb{C}$.

Esta factorizacion explica por que el problema se resuelve modo por modo. Cada factor elemental controla una familia elemental de soluciones.

## Caso completo de segundo orden

Para

$$
ay''+by'+cy=0,
\qquad a\ne 0,
$$

el polinomio caracteristico es

$$
ar^2+br+c.
$$

Su discriminante

$$
\Delta=b^2-4ac
$$

determina tres comportamientos.

### Caso 1: dos raices reales distintas

Si

$$
\Delta>0,
$$

entonces

$$
y=C_1e^{r_1x}+C_2e^{r_2x}.
$$

### Caso 2: raiz doble

Si

$$
\Delta=0,
$$

entonces

$$
y=(C_1+C_2x)e^{rx}.
$$

### Caso 3: raices complejas conjugadas

Si

$$
\Delta<0,
$$

entonces

$$
y=e^{\alpha x}\bigl(C_1\cos(\beta x)+C_2\sin(\beta x)\bigr),
$$

donde

$$
\alpha=-\frac{b}{2a},
\qquad
\beta=\frac{\sqrt{4ac-b^2}}{2a}.
$$

## Interpretacion dinamica

Estas tres formas no son solo formulas. Describen dinamicas cualitativamente distintas:

- dos exponentiales reales: crecimiento o decaimiento monotono combinado;
- raiz doble: modo critico con factor polinomial;
- raices complejas: oscilacion amortiguada, pura o amplificada segun el signo de $\alpha$.

## Ejemplo 1: dos raices reales distintas

Resolvamos

$$
y''-5y'+6y=0.
$$

El caracteristico es

$$
r^2-5r+6=(r-2)(r-3).
$$

Las raices son $2$ y $3$. Entonces

$$
y(x)=C_1e^{2x}+C_2e^{3x}.
$$

## Ejemplo 2: raiz doble

Resolvamos

$$
y''-2y'+y=0.
$$

El caracteristico es

$$
r^2-2r+1=(r-1)^2.
$$

Por tanto

$$
y(x)=(C_1+C_2x)e^x.
$$

### Verificacion breve

La presencia de $xe^x$ no es decorativa. Sin esa segunda solucion no tendriamos suficientes grados de libertad para acomodar dos condiciones iniciales independientes.

## Ejemplo 3: raices complejas

Resolvamos

$$
y''+4y'+13y=0.
$$

El caracteristico es

$$
r^2+4r+13=0.
$$

Las raices son

$$
r=-2\pm 3i.
$$

Entonces

$$
y(x)=e^{-2x}(C_1\cos 3x+C_2\sin 3x).
$$

### Lectura

La solucion oscila con frecuencia angular $3$, pero su amplitud decrece como $e^{-2x}$.

## Ejemplo 4: multiplicidad compleja

Si una ecuacion tuviera caracteristico

$$
(r-(1+i))^2(r-(1-i))^2=0,
$$

las soluciones reales asociadas serian

$$
e^x\cos x,\quad e^x\sin x,\quad xe^x\cos x,\quad xe^x\sin x.
$$

Esto ilustra la regla general: multiplicidad $\Rightarrow$ potencias de $x$.

## Determinacion por condiciones iniciales

Una vez escrita la solucion general, las constantes se determinan imponiendo:

$$
y(x_0),\ y'(x_0),\dots,y^{(n-1)}(x_0).
$$

La teoria general garantiza que, para cada conjunto de datos iniciales, existe una unica solucion.

### Comentario algebraico

La independencia lineal de las soluciones basicas equivale a la invertibilidad del sistema lineal que determina las constantes.

## Caso no homogeneo

Si la ecuacion es

$$
L(D)y=g(x),
$$

entonces

$$
y=y_h+y_p.
$$

La parte homogenea se obtiene con el polinomio caracteristico; la parte particular depende del forzamiento y se estudia con:

- coeficientes indeterminados;
- aniquiladores;
- variacion de parametros;
- Laplace, segun el caso.

## Algebra de operadores y metodo del aniquilador

Cuando el forzamiento pertenece a familias cerradas bajo derivacion, el lenguaje de operadores permite entender por que los ansatz habituales funcionan.

### Idea

Si existe un operador polinomial

$$
Q(D)
$$

tal que

$$
Q(D)g=0,
$$

entonces al aplicar

$$
Q(D)
$$

a la ecuacion

$$
L(D)y=g
$$

se obtiene

$$
Q(D)L(D)y=0.
$$

Esto transforma el problema no homogeneo en uno homogeneo de orden mayor.

### Ejemplos tipicos

- un polinomio queda aniquilado por una potencia de

$$
D;
$$
- una exponencial

$$
e^{\lambda x}
$$

por

$$
D-\lambda;
$$
- senos y cosenos por

$$
D^2+\omega^2.
$$

### Lectura

El metodo del aniquilador no es una coleccion de trucos. Es una expresion algebraica del hecho de que ciertos forzamientos viven en subespacios invariantes finito-dimensionales para la derivacion.

## Resonancia y eleccion de particulares

En ecuaciones no homogeneas con coeficientes constantes aparece una regla practica de gran valor:

- si el forzamiento tiene la forma

$$
e^{\lambda x}P_m(x),
$$

y

$$
\lambda
$$

no es raiz del caracteristico, se prueba una particular del mismo tipo;
- si

$$
\lambda
$$

es raiz de multiplicidad

$$
s,
$$

hay que multiplicar el ansatz por

$$
x^s.
$$

Ese factor adicional es la huella de la resonancia entre el forzamiento y la solucion homogenea.

### Justificacion operatorial

Si escribimos

$$
y=e^{\lambda x}v(x),
$$

entonces cada factor

$$
(D-\lambda)
$$

actua sobre

$$
v
$$

como una derivada ordinaria. Si el operador tiene

$$
(D-\lambda)^s
$$

como factor, la anulacion de los primeros modos obliga a introducir

$$
x^s
$$

para salir del nucleo de la parte homogenea.

### Ejemplo 5: resonancia con raiz doble

Consideremos

$$
y''-2y'+y=e^x.
$$

El caracteristico es

$$
(r-1)^2=0,
$$

de modo que

$$
y_h=(C_1+C_2x)e^x.
$$

Como el forzamiento es

$$
e^x
$$

y

$$
1
$$

es raiz de multiplicidad

$$
2,
$$

probamos

$$
y_p=Ax^2e^x.
$$

Usando

$$
(D-1)^2(e^x v)=e^x v'',
$$

basta elegir

$$
v(x)=Ax^2.
$$

Entonces

$$
v''=2A,
$$

y la ecuacion exige

$$
e^x v''=e^x,
$$

de donde

$$
2A=1,\qquad A=\frac12.
$$

Asi,

$$
y_p=\frac12 x^2 e^x.
$$

### Lectura conceptual

La resonancia no es un truco de calculo. Significa que el forzamiento vive en la misma direccion exponencial que el espacio homogeneo. El factor

$$
x^s
$$

es la correccion minima necesaria para producir una respuesta nueva.

## Funcion de Green para el operador de coeficientes constantes

Si

$$
L(D)y=g(x)
$$

y se imponen condiciones iniciales nulas, puede buscarse una distribucion o nucleo causal

$$
G
$$

tal que

$$
L(D)G=\delta.
$$

Entonces la solucion puede escribirse como

$$
y=G*g.
$$

### Lectura

La convolucion no es un truco separado del resto de la teoria. Es la version integral de la misma descomposicion modal:

- las raices del caracteristico describen la forma de

$$
G;
$$
- los polos simples producen exponentiales;
- los polos repetidos producen exponentiales multiplicadas por polinomios.

### Ejemplo prototipico

Para

$$
y'-ay=g(x),
$$

el nucleo causal es

$$
G(x)=H(x)e^{ax},
$$

y por tanto

$$
y(x)=\int_0^x e^{a(x-\xi)}g(\xi)\,d\xi
$$

si la condicion inicial es

$$
y(0)=0.
$$

### Puente conceptual

Este enfoque conecta coeficientes constantes con Laplace, teoria de sistemas y resolventes. El operador no solo se resuelve por ansatz exponencial: tambien posee un inverso causal explicito cuando se fijan condiciones iniciales.

## Fracciones parciales del resolvente y respuesta modal

Si el polinomio caracteristico factoriza como

$$
p(r)=a_n\prod_{j=1}^s (r-r_j)^{m_j},
$$

entonces, al nivel algebraico, el inverso formal del operador esta gobernado por la funcion racional

$$
\frac{1}{p(s)}.
$$

Cuando se descompone en fracciones parciales aparece una expresion del tipo

$$
\frac{1}{p(s)}
=
\sum_{j=1}^s\sum_{k=1}^{m_j}
\frac{c_{j,k}}{(s-r_j)^k}.
$$

### Lectura modal

Cada termino

$$
\frac{1}{(s-r_j)^k}
$$

corresponde, tras invertir Laplace, a un bloque temporal de la forma

$$
x^{k-1}e^{r_jx}.
$$

Esto explica por que las mismas funciones aparecen:

- en la solucion homogenea;
- en la funcion de Green;
- en la respuesta forzada;
- en el calculo operacional.

### Idea estructural

Las multiplicidades del polinomio caracteristico no son un accidente tecnico. Son exactamente las responsables de que el sistema no se descomponga en modos exponenciales puros, sino en exponenciales multiplicadas por polinomios.

## Estabilidad y signo de las raices

Cuando interesa el comportamiento para $x\to\infty$, el signo de la parte real de las raices es decisivo.

### Todas las partes reales negativas

Toda solucion tiende a cero.

### Alguna parte real positiva

Existen soluciones que crecen exponencialmente.

### Parte real cero

Aparecen oscilaciones sostenidas o crecimiento polinomial si hay multiplicidad.

Esta lectura es basica en dinamica, control y oscilaciones.

## Routh-Hurwitz en orden bajo

Para polinomios caracteristicos de grado pequeno puede decidirse estabilidad sin calcular explicitamente todas las raices.

### Caso de segundo orden

Para

$$
r^2+ar+b,
$$

todas las raices tienen parte real negativa si y solo si

$$
a>0,
\qquad
b>0.
$$

### Caso de tercer orden

Para

$$
r^3+a_2r^2+a_1r+a_0,
$$

la condicion clasica es

$$
a_2>0,\qquad a_1>0,\qquad a_0>0,
\qquad a_2a_1>a_0.
$$

### Lectura

Estas desigualdades muestran que la estabilidad no depende solo del signo aislado de los coeficientes. Depende de relaciones estructurales entre ellos.

## Modo dominante y asintotica fina

Cuando

$$
x\to\infty,
$$

la solucion suele estar gobernada por las raices del caracteristico con mayor parte real.

### Regla general

Si

$$
r_*
$$

es una raiz cuya parte real es estrictamente mayor que la de las demas, entonces el comportamiento dominante es del tipo

$$
e^{r_*x}
$$

si la raiz es simple, o bien

$$
x^{m-1}e^{r_*x}
$$

si tiene multiplicidad

$$
m.
$$

### Si el modo dominante es complejo

Para un par dominante

$$
\alpha\pm i\beta,
$$

la solucion dominante toma la forma

$$
x^{m-1}e^{\alpha x}
\bigl(
A\cos(\beta x)+B\sin(\beta x)
\bigr).
$$

### Lectura

La estabilidad responde a si las soluciones crecen o decaen. La asintotica fina responde a una pregunta mas precisa: que modo gana al final. Esa distincion es central en perturbaciones, control y analisis espectral.

## Conexion con sistemas lineales

Las ecuaciones escalares de orden alto y los sistemas lineales de primer orden son dos caras del mismo problema. El polinomio caracteristico del operador escalar juega un papel anlogo al polinomio caracteristico de la matriz del sistema.

Por eso:

- raices simples recuerdan a diagonalizacion;
- raices repetidas recuerdan a bloques de Jordan;
- partes reales de autovalores controlan estabilidad.

## Matriz companera y reduccion sistematica a primer orden

La conexion anterior puede escribirse de forma exacta. Si normalizamos la ecuacion a

$$
y^{(n)}+b_{n-1}y^{(n-1)}+\cdots+b_1y'+b_0y=0,
$$

definimos el vector de estado

$$
U=
\begin{pmatrix}
y\\
y'\\
\vdots\\
y^{(n-1)}
\end{pmatrix}.
$$

Entonces

$$
U'=A_cU,
$$

donde

$$
A_c=
\begin{pmatrix}
0 & 1 & 0 & \cdots & 0\\
0 & 0 & 1 & \cdots & 0\\
\vdots & \vdots & \vdots & \ddots & \vdots\\
0 & 0 & 0 & \cdots & 1\\
-b_0 & -b_1 & -b_2 & \cdots & -b_{n-1}
\end{pmatrix}
$$

es la **matriz companera**.

### Polinomio caracteristico de la matriz companera

Se cumple

$$
\det(rI-A_c)=r^n+b_{n-1}r^{n-1}+\cdots+b_1r+b_0.
$$

Es decir, el polinomio caracteristico del sistema de primer orden coincide con el de la ecuacion escalar.

### Consecuencia conceptual

Todo lo que en la ecuacion escalar aparece como:

- raiz simple;
- raiz multiple;
- modo oscilatorio;
- estabilidad o inestabilidad;

reaparece en el sistema como:

- autovalor simple;
- bloque de Jordan;
- par complejo conjugado;
- descomposicion espectral del flujo.

### Por que esto es mas que una traduccion cosmetica

La reduccion a primer orden permite usar de inmediato:

- exponencial matricial;
- proyecciones espectrales;
- criterios de Lyapunov;
- teoria de control y respuesta forzada.

Por eso el estudio de ecuaciones escalares con coeficientes constantes no es un capitulo aislado, sino un caso completamente integrable de dinamica lineal finito-dimensional.

## Error comun 1: perder soluciones al pasar a reales

Si se trabaja con raices complejas y luego se "toma la parte real" demasiado pronto, es facil olvidar una de las dos soluciones reales independientes. Siempre hay que conservar el par

$$
\cos(\beta x),\ \sin(\beta x).
$$

## Error comun 2: olvidar la multiplicidad

Si $r$ es raiz doble, no basta escribir $Ce^{rx}$. Hace falta tambien

$$
xe^{rx}.
$$

En general, multiplicidad $m$ exige $m$ soluciones independientes.

## Error comun 3: resolver solo la homogenea

En ecuaciones no homogeneas, el polinomio caracteristico solo entrega $y_h$. La solucion completa requiere anadir una particular.

## Practica guiada

### Ejercicio 1

Resuelve

$$
y'''-6y''+11y'-6y=0.
$$

#### Solucion

El caracteristico es

$$
r^3-6r^2+11r-6=(r-1)(r-2)(r-3).
$$

Por tanto

$$
y=C_1e^x+C_2e^{2x}+C_3e^{3x}.
$$

### Ejercicio 2

Resuelve

$$
y''+2y'+5y=0.
$$

#### Solucion

El caracteristico es

$$
r^2+2r+5=0,
$$

con raices

$$
r=-1\pm 2i.
$$

Asi

$$
y=e^{-x}(C_1\cos 2x+C_2\sin 2x).
$$

### Ejercicio 3

Explica por que en

$$
y''-4y'+4y=0
$$

aparece $xe^{2x}$.

#### Solucion

Porque el caracteristico es

$$
(r-2)^2=0.
$$

La raiz $2$ tiene multiplicidad $2$, de modo que el espacio solucion asociado es

$$
\operatorname{span}\{e^{2x},xe^{2x}\}.
$$

## Cierre

Las ecuaciones lineales con coeficientes constantes son un laboratorio donde se ve con total claridad la correspondencia entre:

- operador diferencial;
- polinomio caracteristico;
- estructura algebraica de las soluciones;
- comportamiento dinamico a largo plazo.

Si esta correspondencia queda clara, muchos metodos posteriores dejan de parecer tecnicas desconectadas y pasan a verse como extensiones de una misma idea central.
