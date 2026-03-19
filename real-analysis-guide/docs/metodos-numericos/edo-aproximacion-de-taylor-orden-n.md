---
title: EDO aproximacion de Taylor de orden n
description: Metodos de Taylor para PVI, construccion con derivadas sucesivas, orden alto, ventajas y limitaciones practicas.
---

# EDO aproximacion de Taylor de orden n

## Idea general

Si la solucion exacta de un problema de valor inicial es suficientemente suave, entonces puede aproximarse localmente por su polinomio de Taylor. Los metodos de Taylor explotan esta idea de manera directa.

## Problema de valor inicial

Consideremos

$$
y'(x)=f(x,y(x)),
\qquad
y(x_0)=y_0.
$$

Supongamos que la solucion es suficientemente regular en el intervalo de interes.

## Expansion de Taylor de la solucion

En torno a

$$
x_n,
$$

la solucion exacta verifica

$$
y(x_{n+1})
=
y(x_n)
+hy'(x_n)
+\frac{h^2}{2!}y''(x_n)
+\cdots
+\frac{h^p}{p!}y^{(p)}(x_n)
+O(h^{p+1}).
$$

La idea del metodo de Taylor de orden

$$
p
$$

es truncar esta expansion y sustituir las derivadas de la solucion por expresiones obtenidas a partir de la ecuacion diferencial.

## Metodo de Taylor de orden p

Definimos

$$
y_{n+1}
=
y_n
+h\Phi_1(x_n,y_n)
+\frac{h^2}{2!}\Phi_2(x_n,y_n)
+\cdots
+\frac{h^p}{p!}\Phi_p(x_n,y_n),
$$

donde

$$
\Phi_j(x_n,y_n)
$$

aproxima la derivada

$$
y^{(j)}(x_n).
$$

En el metodo de Taylor exacto,

$$
\Phi_j
$$

se obtiene sustituyendo

$$
y
$$

por

$$
y_n
$$

en la formula analitica de

$$
y^{(j)}.
$$

## Como obtener derivadas sucesivas

Partimos de

$$
y'=f(x,y).
$$

La segunda derivada se obtiene por regla de la cadena:

$$
y''=f_x+f_y y'
=
f_x+f_y f.
$$

La tercera derivada se obtiene derivando otra vez:

$$
y'''=\frac{d}{dx}(f_x+f_y f),
$$

y asi sucesivamente.

## Operador total

Es util introducir el operador diferencial total

$$
D=\partial_x+f(x,y)\partial_y.
$$

Entonces:

$$
y''=Df,
\qquad
y'''=D^2f,
\qquad
y^{(k+1)}=D^k f.
$$

### Comentario

Esta notacion organiza la construccion, pero el calculo explicito puede volverse rapidamente laborioso.

## Caso de orden 1

Si truncamos en primer orden:

$$
y_{n+1}=y_n+h f(x_n,y_n),
$$

recuperamos Euler explicito.

## Caso de orden 2

El metodo de Taylor de orden

$$
2
$$

es

$$
y_{n+1}
=
y_n
+h f(x_n,y_n)
+\frac{h^2}{2}\bigl(f_x+f_yf\bigr)(x_n,y_n).
$$

Su error global es de orden

$$
2.
$$

## Caso general

Si la solucion y

$$
f
$$

son suficientemente suaves, el metodo de Taylor de orden

$$
p
$$

tiene:

- error local

$$
O(h^{p+1});
$$

- error global

$$
O(h^p).
$$

## Ejemplo 1

Consideremos

$$
y'=x+y,
\qquad
y(0)=1.
$$

Tenemos:

$$
y'=x+y.
$$

Luego

$$
y''=1+y'=1+x+y.
$$

Derivando de nuevo:

$$
y'''=1+y'=1+x+y.
$$

De hecho, desde la segunda derivada en adelante reaparece la misma expresion.

### Taylor de orden 2

El esquema es

$$
y_{n+1}
=
y_n
+h(x_n+y_n)
+\frac{h^2}{2}(1+x_n+y_n).
$$

Si

$$
x_0=0,\ y_0=1,\ h=0.2,
$$

entonces

$$
y_1
=
1
+0.2(1)
+\frac{0.2^2}{2}(2)
=
1+0.2+0.04
=
1.24.
$$

Comparemos con Euler, que daba

$$
1.2.
$$

El termino de segundo orden ya corrige parte importante del error.

## Ejemplo 2

Para

$$
y'=y,
\qquad
y(0)=1,
$$

todas las derivadas coinciden con

$$
y.
$$

El metodo de Taylor de orden

$$
p
$$

se convierte en

$$
y_{n+1}
=
y_n
\left(
1+h+\frac{h^2}{2!}+\cdots+\frac{h^p}{p!}
\right).
$$

Es decir, usa el truncamiento de la serie de

$$
e^h.
$$

Esto conecta directamente los metodos de Taylor con las aproximaciones racionales o polinomicas del operador de evolucion.

## Ventaja teorica

Los metodos de Taylor muestran con total claridad de donde sale el orden:

si retenemos

$$
p
$$

terminos, el primer termino omitido es de orden

$$
h^{p+1}.
$$

En ese sentido, son el modelo conceptual mas limpio para entender metodos de alto orden.

## Dificultad practica

Su principal desventaja es que las derivadas sucesivas de la solucion son costosas de obtener:

- requieren derivadas parciales de

$$
f;
$$

- se vuelven complicadas para sistemas grandes;
- pueden ser impracticables si

$$
f
$$

viene dada como caja negra o tabla.

## Relacion con Runge-Kutta

Los metodos de Runge-Kutta buscan conseguir orden alto sin calcular derivadas superiores de

$$
f.
$$

En cierto sentido, Runge-Kutta imita las cancelaciones de Taylor usando solo evaluaciones de la funcion.

## Error local

Si

$$
y
$$

es exacta, el defecto de un paso satisface

$$
\tau_{n+1}=O(h^{p+1}).
$$

Al acumularse a lo largo de

$$
N\approx \frac{T-x_0}{h}
$$

pasos, el error global baja un orden y queda en

$$
O(h^p).
$$

## Consistencia y convergencia

Bajo hipotesis Lipschitz adecuadas, un metodo de Taylor de orden

$$
p
$$

es consistente de orden

$$
p
$$

y converge globalmente con ese mismo orden.

## Estabilidad

En la ecuacion test

$$
y'=\lambda y,
$$

el metodo de Taylor de orden

$$
p
$$

produce

$$
y_{n+1}=R_p(h\lambda)y_n,
$$

donde

$$
R_p(z)=1+z+\frac{z^2}{2!}+\cdots+\frac{z^p}{p!}.
$$

La estabilidad depende entonces del polinomio truncado de la exponencial.

### Comentario

Esto muestra otra vez que orden alto no implica necesariamente buena estabilidad absoluta.

## Interpretacion operativa

Los metodos de Taylor son ideales cuando:

- la ecuacion es simbolicamente manejable;
- las derivadas superiores se pueden automatizar;
- se desea un control teoretico muy claro del orden.

Son menos convenientes cuando:

- el sistema es grande;
- el campo vectorial es complicado;
- solo se permite evaluar

$$
f.
$$

## Comentario avanzado

En problemas modernos, la diferenciacion automatica puede rehabilitar parcialmente los metodos de Taylor, especialmente en simulacion de alta precision. Sin embargo, Runge-Kutta suele seguir siendo la herramienta estandar por su mejor equilibrio entre generalidad y facilidad de implementacion.

## Cierre

El metodo de Taylor de orden

$$
n
$$

es el patron conceptual de los metodos de alto orden para EDO: la solucion se aproxima por su expansion local, el error se lee en el primer termino omitido y la dificultad real pasa a ser algebraica, no conceptual.
