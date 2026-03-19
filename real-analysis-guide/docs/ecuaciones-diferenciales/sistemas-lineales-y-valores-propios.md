---
title: Sistemas lineales y valores propios
description: Sistemas lineales de primer orden, exponencial matricial, diagonalizacion, multiplicidad y modos complejos.
---

# Sistemas lineales y valores propios

## Motivacion e intuicion

Muchos problemas de orden superior se reescriben como sistemas de primer orden. La ecuacion

$$
u'(t)=A u(t)
$$

con

$$
A
$$

matriz constante es el analogo matricial de las ecuaciones lineales con coeficientes constantes.

Los valores propios de

$$
A
$$

organizan la dinamica del sistema:

- crecimiento o decaimiento;
- oscilacion;
- resonancia algebraica por multiplicidad;
- estabilidad del origen.

## Formulacion general

Consideramos el sistema lineal homogeneo

$$
u'(t)=A u(t),
\qquad
u(0)=u_0,
$$

donde

$$
A\in M_n(\mathbb{R})
$$

o

$$
M_n(\mathbb{C}).
$$

La solucion vive en

$$
\mathbb{R}^n
$$

o

$$
\mathbb{C}^n.
$$

## Matriz fundamental

Una matriz

$$
\Phi(t)
$$

se llama **matriz fundamental** si satisface

$$
\Phi'(t)=A\Phi(t)
$$

y es invertible para todo

$$
t
$$

del intervalo considerado.

Entonces toda solucion puede escribirse como

$$
u(t)=\Phi(t)c
$$

para algun vector constante

$$
c.
$$

En el caso de coeficientes constantes, la matriz fundamental canonica es

$$
\Phi(t)=e^{tA}.
$$

## Exponencial matricial

La solucion formal del sistema

$$
u'=Au,
\qquad
u(0)=u_0
$$

es

$$
u(t)=e^{tA}u_0,
$$

donde

$$
e^{tA}=\sum_{n=0}^\infty \frac{t^n A^n}{n!}.
$$

## Teorema de mapeo espectral para la exponencial

Si

$$
\lambda
$$

es un valor propio de

$$
A,
$$

entonces

$$
e^{t\lambda}
$$

es un valor propio de

$$
e^{tA}.
$$

Mas precisamente,

$$
\sigma(e^{tA})=\{e^{t\lambda}:\lambda\in\sigma(A)\}.
$$

### Lectura

Esto explica por que la parte real de los valores propios de

$$
A
$$

controla crecimiento o decaimiento:

- al pasar a

$$
e^{tA},
$$

las partes reales se convierten en modulos

$$
e^{t\operatorname{Re}\lambda};
$$
- el eje imaginario se convierte en el circulo unitario;
- la informacion espectral del generador se traduce directamente en la del operador de evolucion.

## Propiedades de la exponencial matricial

Para matrices constantes, se tiene:

- 

$$
\frac{d}{dt}e^{tA}=Ae^{tA}=e^{tA}A;
$$

- 

$$
e^{0A}=I;
$$

- 

$$
e^{(t+s)A}=e^{tA}e^{sA};
$$

- 

$$
(e^{tA})^{-1}=e^{-tA}.
$$

### Comentario

Estas identidades convierten a

$$
e^{tA}
$$

en el analogo matricial exacto de

$$
e^{\lambda t}.
$$

## Semigrupo de evolucion

La familia

$$
\{e^{tA}\}_{t\ge 0}
$$

forma un semigrupo:

$$
e^{0A}=I,
\qquad
e^{(t+s)A}=e^{tA}e^{sA}.
$$

### Lectura

Esta propiedad expresa que evolucionar primero durante

$$
s
$$

y luego durante

$$
t
$$

equivale a evolucionar una sola vez durante

$$
t+s.
$$

No es solo una identidad algebraica: codifica la compatibilidad temporal del flujo lineal.

## Modos propios

Si

$$
v\ne 0
$$

es vector propio de

$$
A
$$

con valor propio

$$
\lambda,
$$

entonces

$$
u(t)=e^{\lambda t}v
$$

es solucion.

### Verificacion

$$
u'(t)=\lambda e^{\lambda t}v
=
e^{\lambda t}\lambda v
=
e^{\lambda t}Av
=
A u(t).
$$

### Ensenanza

Cada valor propio produce un modo elemental de evolucion.

## Caso diagonalizable

Si

$$
A
$$

tiene una base de vectores propios

$$
v_1,\dots,v_n
$$

con valores propios

$$
\lambda_1,\dots,\lambda_n,
$$

entonces la solucion general es

$$
u(t)=c_1 e^{\lambda_1 t}v_1+\cdots+c_n e^{\lambda_n t}v_n.
$$

### Forma matricial

Si

$$
A=PDP^{-1},
$$

donde

$$
D=\operatorname{diag}(\lambda_1,\dots,\lambda_n),
$$

entonces

$$
e^{tA}=P e^{tD} P^{-1}
=
P\operatorname{diag}(e^{\lambda_1 t},\dots,e^{\lambda_n t})P^{-1}.
$$

Esta es la forma mas eficiente de calcular

$$
e^{tA}
$$

cuando la diagonalizacion es posible.

## Valores propios repetidos

La multiplicidad algebraica de un valor propio puede ser mayor que la dimension de su espacio propio.

### Caso diagonalizable con multiplicidad

Si un valor propio repetido posee suficientes vectores propios independientes, no hay problema: el sistema sigue diagonalizandose.

### Caso no diagonalizable

Si faltan vectores propios, aparecen vectores generalizados y terminos del tipo

$$
e^{\lambda t}(v+t w+\cdots).
$$

Este fenomeno es la version matricial de las soluciones

$$
x^k e^{rx}
$$

en ecuaciones escalares con raiz repetida.

## Cadenas de Jordan

Si

$$
(A-\lambda I)w_1=0,
\qquad
(A-\lambda I)w_2=w_1,
\qquad
(A-\lambda I)w_3=w_2,
$$

entonces aparecen soluciones del tipo

$$
e^{\lambda t}w_1,
$$

$$
e^{\lambda t}(t w_1+w_2),
$$

$$
e^{\lambda t}\left(\frac{t^2}{2}w_1+t w_2+w_3\right).
$$

### Lectura

Los factores polinomiales en

$$
t
$$

expresan la parte nilpotente del operador.

## Descomposicion semisimple y nilpotente

Otra forma de entender la estructura de Jordan es escribir

$$
A=S+N,
$$

donde

$$
S
$$

es diagonalizable,

$$
N
$$

es nilpotente y ambos conmutan.

### Consecuencia

Entonces

$$
e^{tA}=e^{tS}e^{tN}.
$$

La parte

$$
e^{tS}
$$

transporta los modos exponenciales puros, mientras que

$$
e^{tN}
$$

es un polinomio matricial finito en

$$
t.
$$

### Lectura

Esta descomposicion separa con claridad dos mecanismos dinamicos:

- el espectro, que fija tasas exponenciales y oscilaciones;
- la parte nilpotente, que introduce factores polinomiales y defectos de diagonalizacion.

## Ejemplo 1: matriz diagonalizable

Sea

$$
A=
\begin{pmatrix}
2 & 0\\
0 & -1
\end{pmatrix}.
$$

Entonces

$$
u'=
\begin{pmatrix}
2 & 0\\
0 & -1
\end{pmatrix}u
$$

tiene solucion general

$$
u(t)=
\begin{pmatrix}
c_1 e^{2t}\\
c_2 e^{-t}
\end{pmatrix}.
$$

### Lectura dinamica

Una componente crece y la otra decrece. El origen es inestable porque existe una direccion de crecimiento exponencial.

## Ejemplo 2: valor propio repetido

Sea

$$
A=
\begin{pmatrix}
1 & 1\\
0 & 1
\end{pmatrix}.
$$

El unico valor propio es

$$
\lambda=1
$$

con multiplicidad algebraica

$$
2,
$$

pero el espacio propio tiene dimension

$$
1.
$$

Escribimos

$$
A=I+N,
\qquad
N=
\begin{pmatrix}
0 & 1\\
0 & 0
\end{pmatrix},
\qquad
N^2=0.
$$

Entonces

$$
e^{tA}=e^t e^{tN}=e^t(I+tN)
=
e^t
\begin{pmatrix}
1 & t\\
0 & 1
\end{pmatrix}.
$$

Por tanto

$$
u(t)=e^t
\begin{pmatrix}
1 & t\\
0 & 1
\end{pmatrix}
u_0.
$$

### Ensenanza

La falta de diagonalizacion se traduce exactamente en la aparicion de factores polinomiales.

## Valores propios complejos

Si

$$
A
$$

es real y tiene valores propios complejos

$$
\lambda=\alpha \pm i\beta,
$$

aparecen modos reales del tipo

$$
e^{\alpha t}\cos(\beta t),
\qquad
e^{\alpha t}\sin(\beta t),
$$

multiplicados por vectores reales apropiados.

### Regla cualitativa

- si

$$
\alpha<0,
$$

aparecen espirales decrecientes;
- si

$$
\alpha>0,
$$

aparecen espirales crecientes;
- si

$$
\alpha=0,
$$

aparecen oscilaciones puras.

## Ejemplo 3: rotacion

Sea

$$
A=
\begin{pmatrix}
0 & -1\\
1 & 0
\end{pmatrix}.
$$

Entonces

$$
u'=Au
$$

describe rotacion uniforme. La exponencial es

$$
e^{tA}=
\begin{pmatrix}
\cos t & -\sin t\\
\sin t & \cos t
\end{pmatrix}.
$$

Las trayectorias son circunferencias centradas en el origen.

## Ejemplo 4: espiral estable

Sea

$$
A=
\begin{pmatrix}
-1 & -2\\
2 & -1
\end{pmatrix}.
$$

Sus valores propios son

$$
-1\pm 2i.
$$

### Conclusion

Las soluciones giran y al mismo tiempo decaen como

$$
e^{-t}.
$$

El origen es un foco asintoticamente estable.

## Relacion con ecuaciones de orden superior

La ecuacion

$$
y''+ay'+by=0
$$

puede reescribirse como

$$
\begin{pmatrix}
y\\
y'
\end{pmatrix}'
=
\begin{pmatrix}
0 & 1\\
-b & -a
\end{pmatrix}
\begin{pmatrix}
y\\
y'
\end{pmatrix}.
$$

Los valores propios de la matriz coinciden con las raices del polinomio caracteristico escalar.

## Sistemas no homogeneos

Para

$$
u'=Au+f(t),
$$

la formula de variacion de constantes es

$$
u(t)=e^{tA}u_0+\int_0^t e^{(t-s)A}f(s)\,ds.
$$

Esta es la version matricial de variacion de parametros.

### Derivacion de la formula

Buscamos una solucion de la forma

$$
u(t)=e^{tA}c(t).
$$

Derivando,

$$
u'(t)=Ae^{tA}c(t)+e^{tA}c'(t).
$$

Al imponer

$$
u'=Au+f(t),
$$

los terminos

$$
Ae^{tA}c(t)
$$

se cancelan y queda

$$
e^{tA}c'(t)=f(t).
$$

Como

$$
e^{tA}
$$

es invertible,

$$
c'(t)=e^{-tA}f(t).
$$

Integrando desde

$$
0
$$

hasta

$$
t,
$$

obtenemos

$$
c(t)=u_0+\int_0^t e^{-sA}f(s)\,ds,
$$

y por tanto

$$
u(t)=e^{tA}u_0+\int_0^t e^{(t-s)A}f(s)\,ds.
$$

### Lectura

La solucion es suma de:

- evolucion libre del dato inicial;
- respuesta forzada acumulada del termino

$$ 
f.
$$

## Subespacios estable, inestable y central

La estructura espectral divide el espacio de estados en direcciones con comportamiento cualitativamente distinto.

### Idea

- los modos asociados a valores propios con parte real negativa forman la parte estable;
- los asociados a parte real positiva forman la parte inestable;
- los asociados a parte real nula forman la parte central.

### Lectura

En dimension finita y con coeficientes constantes, esta descomposicion permite leer la dinamica como superposicion de:

- decaimientos exponenciales;
- crecimientos exponenciales;
- oscilaciones o modos neutros.

En el caso diagonalizable esto se ve directamente en la expansion por vectores propios. En el caso no diagonalizable hay que anadir los factores polinomiales procedentes de Jordan.

## Clasificacion cualitativa en dimension 2

Para matrices

$$
2\times 2,
$$

la dinamica lineal puede leerse con ayuda de:

- la traza

$$
\tau=\operatorname{tr}(A);
$$

- el determinante

$$
\Delta=\det(A);
$$

- el discriminante

$$
\tau^2-4\Delta.
$$

### Casos tipicos

- dos valores propios reales negativos: nodo estable;
- dos valores propios reales positivos: nodo inestable;
- signos opuestos: silla;
- complejos con parte real negativa: foco estable;
- complejos con parte real positiva: foco inestable;
- puramente imaginarios: centro lineal ideal.

### Advertencia

En sistemas no lineales, esta clasificacion sirve solo para la parte linealizada y puede no decidirlo todo en casos degenerados.

## Estabilidad

La parte real de los valores propios controla el comportamiento asintotico:

- si todas son negativas, el origen es asintoticamente estable;
- si alguna es positiva, hay inestabilidad;
- si son puramente imaginarias, aparecen oscilaciones neutras en el caso ideal.

### Criterio fuerte

Si todas las partes reales son estrictamente negativas, entonces existen constantes

$$
C>0,\ \gamma>0
$$

tales que

$$
\|e^{tA}\|\le C e^{-\gamma t}.
$$

Eso expresa decaimiento exponencial uniforme del sistema homogeneo.

## Criterio de Lyapunov para matrices de Hurwitz

Una matriz

$$
A
$$

con todas sus partes reales estrictamente negativas se llama de Hurwitz.

### Teorema

La matriz

$$
A
$$

es de Hurwitz si y solo si para toda matriz simetrica definida positiva

$$
Q
$$

existe una unica matriz simetrica definida positiva

$$
P
$$

tal que

$$
A^TP+PA=-Q.
$$

### Funcion de Lyapunov cuadratica

Si se define

$$
V(u)=u^TPu,
$$

entonces a lo largo de las soluciones de

$$
u'=Au
$$

se tiene

$$
\frac{d}{dt}V(u(t))
=
u(t)^T(A^TP+PA)u(t)
=
-u(t)^TQu(t)<0
$$

para

$$
u(t)\ne 0.
$$

### Lectura

Este criterio no solo detecta estabilidad; produce una energia cuadratica que decae. Es una pieza central en control lineal y un puente entre algebra matricial y dinamica.

## No normalidad y crecimiento transitorio

Los valores propios no siempre cuentan toda la historia a tiempos finitos. Si la matriz es no normal, es decir, no conmuta con su adjunta en el sentido apropiado, puede haber crecimiento transitorio incluso cuando todas las partes reales de los valores propios son negativas.

### Ejemplo conceptual

Matrices cercanas a un bloque de Jordan pueden producir soluciones que primero crecen en norma y solo despues decaen.

### Lectura

Esto no contradice la estabilidad asintotica. Significa que:

- el espectro controla el largo plazo;
- la geometria de vectores propios y subespacios generalizados puede influir fuertemente en el corto y mediano plazo.

En aplicaciones de control, fluidos y estabilidad numerica, esta distincion es fundamental.

## Resolvente y conexion con Laplace

La exponencial matricial tambien se relaciona con la transformada de Laplace:

$$
\mathcal{L}\{e^{tA}\}(s)=(sI-A)^{-1},
$$

para

$$
\operatorname{Re}(s)
$$

suficientemente grande.

### Lectura

El objeto

$$
(sI-A)^{-1}
$$

se llama resolvente de

$$
A.
$$

Los polos del resolvente coinciden con los valores propios. Esta formula conecta de manera directa:

- sistemas lineales;
- exponencial matricial;
- transformada de Laplace;
- teoria espectral.

## Pseudospectro y sensibilidad del resolvente

En matrices no normales, mirar solo el espectro puede ser enganoso. Hace falta medir tambien que tan grande puede hacerse el resolvente cerca del espectro.

### Definicion

Para

$$
\varepsilon>0,
$$

el **$\varepsilon$-pseudospectro** de

$$
A
$$

se define por

$$
\sigma_\varepsilon(A)
=
\left\{
z\in \mathbb{C}:
\|(zI-A)^{-1}\|>\frac1\varepsilon
\right\}
\cup
\sigma(A).
$$

Equivalentemente,

$$
z\in \sigma_\varepsilon(A)
$$

si y solo si existe una perturbacion

$$
E
$$

con

$$
\|E\|<\varepsilon
$$

tal que

$$
z\in \sigma(A+E).
$$

### Lectura

El espectro responde a la pregunta "donde falla la invertibilidad exacta". El pseudospectro responde a una pregunta mas realista: "donde la invertibilidad es tan fragil que una perturbacion pequena o un mal condicionamiento la destruyen".

### Por que esto importa dinamicamente

Si

$$
\|(zI-A)^{-1}\|
$$

es grande en una zona amplia, entonces la evolucion puede amplificar ciertos datos iniciales de manera transitoria, aunque todas las partes reales de los valores propios sean negativas.

En otras palabras:

- el espectro controla el largo plazo;
- el pseudospectro ayuda a entender el corto y mediano plazo;
- la no normalidad ensancha dramaticamente la region de sensibilidad.

### Ejemplo modelo: bloque de Jordan

Si

$$
A=
\begin{pmatrix}
\lambda & 1\\
0 & \lambda
\end{pmatrix},
$$

entonces

$$
zI-A=
\begin{pmatrix}
z-\lambda & -1\\
0 & z-\lambda
\end{pmatrix}
$$

y su inversa contiene terminos del orden de

$$
(z-\lambda)^{-2}.
$$

Eso significa que el resolvente puede explotar mas deprisa de lo que sugeriria una matriz diagonalizable. Esa explosion es la huella algebraica de la sensibilidad asociada a bloques no triviales de Jordan.

### Puente con la exponencial matricial

La formula inversa de Laplace para

$$
e^{tA}
$$

integra el resolvente sobre una recta vertical en el plano complejo. Por eso un resolvente grande en regiones cercanas al contorno de integracion puede reflejarse en amplificacion temporal importante, incluso sin autovalores inestables.

## Proyecciones espectrales

Cuando el espectro se separa en grupos disjuntos, puede aislarse la contribucion dinamica de cada grupo mediante proyectores espectrales.

### Idea

Para un contorno cerrado

$$
\Gamma
$$

que encierre una parte del espectro y no toque el resto, se define formalmente

$$
P_\Gamma=
\frac{1}{2\pi i}\int_\Gamma (zI-A)^{-1}\,dz.
$$

### Lectura

Este operador proyecta sobre el subespacio invariante asociado a los valores propios encerrados por

$$
\Gamma.
$$

### Por que importa

Con estos proyectores puede separarse la dinamica en:

- parte estable;
- parte inestable;
- parte central.

## Caso critico: partes reales nulas

Cuando todos los valores propios tienen parte real no positiva, pero alguno tiene parte real cero, la conclusion ya no es automatica.

### Regimenes posibles

- si los valores propios sobre el eje imaginario son simples y no hay parte nilpotente asociada, pueden aparecer oscilaciones acotadas;
- si existe un bloque de Jordan asociado a parte real cero, surgen factores polinomiales en

$$
t
$$

y puede haber crecimiento aunque ninguna parte real sea positiva.

### Ejemplo conceptual

La matriz

$$
\begin{pmatrix}
0 & 1\\
0 & 0
\end{pmatrix}
$$

tiene unico valor propio

$$
0,
$$

pero

$$
e^{tA}=
\begin{pmatrix}
1 & t\\
0 & 1
\end{pmatrix},
$$

que crece linealmente con

$$
t.
$$

### Moral

Mirar solo el signo de la parte real no basta en el borde critico. Tambien importa la estructura de Jordan.

## Ejemplo 5: sistema forzado

Consideremos

$$
u'=
\begin{pmatrix}
0 & 1\\
-1 & 0
\end{pmatrix}
u
+
\begin{pmatrix}
0\\
\cos t
\end{pmatrix}.
$$

La parte homogenea es un oscilador. La formula

$$
u(t)=e^{tA}u_0+\int_0^t e^{(t-s)A}f(s)\,ds
$$

permite separar claramente:

- la dinamica libre;
- la respuesta impuesta por el forzamiento.

Aunque no se calcule la integral por completo, la estructura ya esta explicada.

## Como calcular

$$
e^{tA}
$$

en la practica

Las rutas principales son:

1. diagonalizar si es posible;
2. usar forma de Jordan si no lo es;
3. explotar identidades especiales si

$$
A
$$

tiene estructura simple;
4. en dimension

$$
2
$$

usar a veces traza y determinante para clasificar sin resolver por completo.

## Practica guiada

### Problema 1

Resolver

$$
u'=
\begin{pmatrix}
3 & 0\\
0 & -2
\end{pmatrix}u,
\qquad
u(0)=
\begin{pmatrix}
1\\
4
\end{pmatrix}.
$$

#### Idea

La matriz ya es diagonal.

### Problema 2

Calcular

$$
e^{tA}
$$

para

$$
A=
\begin{pmatrix}
1 & 1\\
0 & 1
\end{pmatrix}.
$$

#### Idea

Escribir

$$
A=I+N
$$

con

$$
N^2=0.
$$

### Problema 3

Clasificar el origen para

$$
A=
\begin{pmatrix}
0 & 1\\
-2 & -3
\end{pmatrix}.
$$

#### Idea

Calcular valores propios o usar el polinomio caracteristico.

### Problema 4

Explicar por que una silla es siempre inestable aunque uno de sus modos decaiga.

#### Idea conceptual

Porque basta una direccion de crecimiento para producir trayectorias que se alejan del origen.

## Errores comunes

- Confundir multiplicidad algebraica con numero de vectores propios disponibles.
- Resolver solo el polinomio caracteristico y no revisar diagonalizacion.
- Manejar soluciones complejas sin reconstruir la base real.
- Olvidar que la exponencial matricial es el objeto central, no una notacion decorativa.
- Pensar que valores propios repetidos implican automaticamente falta de resolucion explicita.
- Perder de vista la diferencia entre resolver el sistema y clasificar su dinamica.

## Cierre

Los sistemas lineales llevan las ideas del bloque a una forma verdaderamente algebraica. Valores propios, multiplicidad, modos complejos, bloques de Jordan y exponencial matricial condensan la teoria de ecuaciones lineales en un marco que ya apunta hacia dinamica lineal, control, estabilidad y ecuaciones en derivadas parciales.
