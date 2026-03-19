---
title: Ecuaciones Elipticas No Lineales y Monotonia
description: Operadores monotonos, p-Laplaciano, Browder-Minty y variaciones no lineales en problemas elipticos.
---

# Ecuaciones Elipticas No Lineales y Monotonia

## Del Laplaciano lineal al operador monotono

Las ecuaciones elipticas no lineales son uno de los lugares donde la teoria debil y variacional se vuelve realmente indispensable.

Un prototipo central es

$$
-\nabla\cdot\left(|\nabla u|^{p-2}\nabla u\right)=f,
$$

es decir, el p-Laplaciano.

Este operador reemplaza:

- linealidad por monotonia;
- estructura cuadratica por crecimiento tipo $p$;
- espacio natural $H_0^1$ por $W_0^{1,p}$.

## Monotonia

Sea $V$ un espacio de Banach y $A:V\to V^*$. Decimos que $A$ es monotono si

$$
\langle A(u)-A(v),u-v\rangle \ge 0
\qquad
\forall u,v\in V.
$$

Es estrictamente monotono si la desigualdad es estricta para $u\ne v$.

### Lectura

La monotonia es la version no lineal del signo positivo de un operador simetrico coercivo.

## p-Laplaciano como operador monotono

La aplicacion

$$
\xi \mapsto |\xi|^{p-2}\xi
$$

es monotona en $\mathbb{R}^n$. De ahi sale la monotonia del operador variacional

$$
A(u) = -\nabla\cdot\left(|\nabla u|^{p-2}\nabla u\right).
$$

### Importancia

Esta propiedad es la piedra angular para existencia y unicidad debil.

## Formulacion debil

El problema

$$
-\Delta_p u=f,
\qquad
u=0 \text{ en } \partial\Omega,
$$

se interpreta como:

hallar $u\in W_0^{1,p}(\Omega)$ tal que

$$
\int_{\Omega} |\nabla u|^{p-2}\nabla u\cdot \nabla v\,dx
=
\langle f,v\rangle
\qquad
\forall v\in W_0^{1,p}(\Omega).
$$

## Coercividad

El operador es coercivo si

$$
\frac{\langle A(u),u\rangle}{\|u\|_V}\to +\infty
\qquad
\text{cuando } \|u\|_V\to\infty.
$$

Para el p-Laplaciano, la cantidad natural es

$$
\langle A(u),u\rangle
=
\int_{\Omega} |\nabla u|^p\,dx,
$$

que controla la norma de $W_0^{1,p}$ por Poincare.

## Browder-Minty

Un teorema fundamental dice, en esencia:

si $A:V\to V^*$ es monotono, coercivo, hemicontinuo y $V$ es reflexivo, entonces $A$ es sobreyectivo.

### Traduccion al lenguaje de EDP

Esto da existencia de solucion debil para una gran clase de problemas elipticos no lineales sin resolver explicitamente la ecuacion.

## Hemicontinuidad

La condicion pide continuidad de

$$
t\mapsto \langle A(u+tv),w\rangle
$$

para vectores fijos $u,v,w$.

Puede parecer tecnica, pero es justo lo necesario para pasar al limite en argumentos variacionales no lineales.

## Unicidad

Si el operador es estrictamente monotono, la solucion debil es unica.

En efecto, si $u$ y $v$ son dos soluciones, al restar ecuaciones y probar con $u-v$ se obtiene

$$
\langle A(u)-A(v),u-v\rangle =0,
$$

y la estricta monotonia fuerza $u=v$.

## Regularidad

Existencia debil no implica regularidad clasica inmediata.

En el caso del p-Laplaciano aparecen dificultades nuevas:

- degeneracion cuando $\nabla u=0$ si $p>2$;
- singularidad cuando $\nabla u=0$ si $1<p<2$.

La regularidad existe, pero exige argumentos bastante mas finos que en Poisson lineal.

## Operadores de Leray-Lions

Una clase amplia de operadores tiene la forma

$$
A(u)=-\nabla\cdot a(x,\nabla u),
$$

donde $a$ satisface:

- crecimiento controlado;
- coercividad;
- monotonia;
- continuidad adecuada.

El p-Laplaciano es el ejemplo canonico, pero la clase es mucho mayor.

## Problemas con obstaculo

Una variacion natural es imponer una restriccion:

$$
u\ge \psi.
$$

Entonces ya no se busca resolver una ecuacion exacta, sino una desigualdad variacional.

### Lectura

La solucion es el equilibrio minimo compatible con una barrera. Este tipo de problema conecta EDP, convexidad y contacto libre.

## Metodo variacional no lineal

Para el p-Laplaciano, el funcional natural es

$$
J(u)=\int_{\Omega}\left(\frac{1}{p}|\nabla u|^p-fu\right)\,dx.
$$

Cuando el funcional es coercivo y semicontinuo inferior, el metodo directo produce un minimizador. La ecuacion de Euler-Lagrange da la formulacion debil.

## Ejemplo guiado: caso unidimensional

En $(0,1)$ el problema

$$
-(|u'|^{p-2}u')'=f,
\qquad
u(0)=u(1)=0
$$

permite ver con claridad:

- el paso al espacio $W_0^{1,p}$;
- la no linealidad en la derivada;
- la monotonia del flujo $|u'|^{p-2}u'$.

Aunque no siempre haya formula cerrada, la teoria abstracta garantiza existencia y unicidad.

## Sub y supersoluciones en no lineales elipticas

Ademas del enfoque monotono, muchos problemas se estudian con sub y supersoluciones:

$$
-\Delta u = g(x,u,\nabla u).
$$

Este metodo es especialmente util cuando hay reacciones no lineales y falta convexidad global del funcional.

## Compacidad y paso al limite

En ecuaciones no lineales la compacidad debil suele bastar para extraer una subsucesion, pero pasar al limite en el termino no lineal exige estructura extra:

- monotonia;
- convexidad;
- compacidad fuerte en algun espacio intermedio;
- truncaciones o desigualdades de Minty.

## Donde la teoria se vuelve dura

Incluso en elipticas, aparecen retos serios:

- exponentes criticos;
- medidas como datos;
- coeficientes discontinuos;
- soluciones renormalizadas;
- conjuntos singulares y regularidad parcial.

Este bloque es la antesala de esas teorias.

## Conexion con fisica

Operadores monotono-no lineales aparecen en:

- elasticidad no lineal;
- fluidos no newtonianos;
- problemas de plasticidad;
- medios porosos;
- difusion anisotropa.

No son generalizaciones artificiales: son los operadores naturales de muchos modelos constitutivos.

## Errores frecuentes

- tratar el p-Laplaciano como si fuera una perturbacion pequena del Laplaciano;
- olvidar que el espacio natural cambia de $H^1$ a $W^{1,p}$;
- usar linealidad donde solo hay monotonia;
- confundir coercividad del funcional con coercividad del operador sin verificar el marco;
- esperar regularidad clasica global sin mirar degeneracion ni frontera.

## Practica recomendada

1. Formular debilmente el problema del p-Laplaciano.
2. Verificar la monotonia del mapa $\xi\mapsto |\xi|^{p-2}\xi$.
3. Explicar como Browder-Minty sustituye a Lax-Milgram en el caso no lineal.
4. Comparar Poisson y p-Laplaciano desde el punto de vista de espacio natural y energia.
5. Describir el papel de las desigualdades variacionales en el problema del obstaculo.

## Cierre

Las ecuaciones elipticas no lineales y la monotonia muestran como la teoria moderna reemplaza linealidad por estructura. Coercividad, monotonia y variaciones convexas permiten construir soluciones aun cuando desaparece la superposicion. Esta es una de las transiciones mas importantes entre EDP clasica y analisis no lineal serio.
